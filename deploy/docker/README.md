# Docker 部署（腾讯云 CVM）

双进程：**gateway**（Java，桥接网络，**宿主机端口 = `GATEWAY_PUBLISH_PORT`，默认 8080 → 容器内 8080**）+ **room-worker**（C++，**host 网络**，在**宿主机**上监听 `3101`）。

## 前置

- CVM 安装 **Docker** 与 **Compose V2**（`docker compose version`）。
- **安全组**：对公网放行与 **`.env` 里 `GATEWAY_PUBLISH_PORT` 一致**的端口（默认 **8080** 即可，不必再开 8088）；**不要**放行 **3101**。
- 腾讯云 **MySQL / Redis** 与 CVM 同 VPC，使用**内网地址**；`NEBULA_BRIDGE_SECRET` 与线上一致。

## 配置

```bash
cd deploy/docker
cp env.example .env
nano .env   # 填 REDIS_HOST、MYSQL_*、NEBULA_BRIDGE_SECRET 等
```

- MySQL / Redis 若在 **CVM 宿主机**（监听 `127.0.0.1`），容器内需使用 `host.docker.internal`（compose 已配 `extra_hosts`，Linux 需 Docker 20.10+）：
  - `MYSQL_HOST=host.docker.internal`
  - `REDIS_HOST=host.docker.internal`

## 构建与启动

在 **`deploy/docker`** 目录下：

```bash
docker compose build
docker compose up -d
docker compose logs -f
```

更新代码后：`docker compose build --no-cache && docker compose up -d`

## 健康检查

- **room-worker**：检查本机是否监听 `3101`（`ss`），就绪后才会启动 **gateway**（避免桥未连上）。
- **gateway**：`curl /healthz`（会代理到 C++）；桥断时也会失败。

### `[bridge] disconnected: …` / `room worker offline`

表示 **Java 连不上 C++**（不是 MySQL 的典型报错）。常见原因：

1. **宿主机上 `export NEBULA_ROOM_WORKER_HOST=127.0.0.1`** 或在 `.env` 里写死错误主机  
   容器里 `127.0.0.1` 是**容器自己**，连不到宿主机上的 C++。  
   **处理**：`unset NEBULA_ROOM_WORKER_HOST`，从 `.env` 中删除 `NEBULA_ROOM_WORKER_*`，依靠 compose 里默认的 **`host.docker.internal`**。
2. **`host.docker.internal` 在你这台机上不生效**（少见）  
   把 `docker-compose.yaml` 里 gateway 的 `NEBULA_ROOM_WORKER_HOST` 改成**宿主机内网 IP**（例如 `172.19.0.5`，与 `ip -4 addr` / `ip route` 一致），保存后 `docker compose up -d`。
3. **C++ 未监听**  
   `docker compose logs room-worker --tail 80`，应能看到 `listening on 0.0.0.0:3101`。宿主机执行 `ss -tlnp | grep 3101` 应有 `nebula-poker-server`。
4. 改了 compose 网络或排查卡死容器时，可 **`docker compose down` 再 `up`**；**日常发版不必每次都 `down`**（见下文「down 与端口」）。

---

## `down` 再 `up` 和「只 kill 8080 再起」为啥表现不一样？

**不是** `unset`、`grep`、和 `grep` 后面那行注释有冲突；`grep NEBULA_ROOM .env` 只是查看 `.env`，不会改端口。

真正常见情况是：

| 做法 | 发生了什么 |
|------|------------|
| **只 kill 宿主机 Java，再 `docker compose up -d`** | 8080/8088 空出来了；若容器**本来就在**、`up` 只是启动或增量更新，有时**不会**重新走一遍「删容器 → 新建 → 绑宿主机端口」 |
| **`docker compose down` 再 `up -d --build`** | **网关容器被删掉再新建**，必须在宿主机上**重新绑定** `GATEWAY_PUBLISH_PORT`。若 `.env` 仍是 **8080**，或 **systemd/cron/另一终端** 又拉起本机 Java，**绑定瞬间就会 `address already in use`** |

所以问题本质是：**`down` 会强制重新占端口**；和「仪式」里的其它命令无关。

**建议**：

1. **默认用 8080** 即可（与安全组只开 8080 一致）。若某次报错 `8080 address already in use`，说明**宿主机上还有别的进程**（常见是另一个 `java -jar`）：`sudo ss -tlnp | grep 8080` 找到 PID 后关掉，或把 `.env` 改成 **`GATEWAY_PUBLISH_PORT=8088`**（并在安全组放行 8088）。
2. **日常更新**：在 `deploy/docker` 下执行 **`git pull && docker compose up -d --build`** 即可，**不必每次 `down`**。  
3. **只有**换网络、容器状态异常、或文档要求清栈时，再 **`docker compose down`**，然后 **`ss -tlnp | grep :8080`**（或你的 `GATEWAY_PUBLISH_PORT`）确认空闲后立刻 `up`。

```bash
# 日常推荐（少 down）
cd ~/DEZHOU2/deploy/docker
unset NEBULA_ROOM_WORKER_HOST
git pull
docker compose up -d --build
docker compose logs gateway --tail 40
```

`grep`、`unset` 只在 **`.env` 里误写了 `NEBULA_ROOM_WORKER_*`** 时需要；没有误配可以不用每次跑。

```bash
docker compose exec gateway curl -sv http://host.docker.internal:3101/ 2>&1 | head -5
# 可能返回 404，有 HTTP 回应即说明 TCP 通
```

在网关容器内：`getent hosts host.docker.internal` 应有一行 IP。

## 静态资源 BGM

`assets/ifcan.mp3` 若未打进镜像，可在宿主机放置后挂载到网关容器：

```yaml
# 在 gateway 服务下增加：
# volumes:
#   - /opt/nebula/ifcan.mp3:/app/frontend/static/assets/ifcan.mp3:ro
```

## 从仓库根目录调用（可选）

```bash
docker compose -f deploy/docker/docker-compose.yaml --project-directory deploy/docker build
```

`--project-directory deploy/docker` 保证 `.env` 与相对路径正确。

---

## 只起 Docker、关掉本机 `java -jar` 网关

仓库里脚本会：**先 `docker compose down`**（去掉旧网关容器，释放 **`docker-proxy` 占用的宿主机端口**——只杀 `java` 不够），再结束仍占用 **`GATEWAY_PUBLISH_PORT`** 上的 **java / 孤儿 docker-proxy**，最后 **`docker compose up -d --build`**。

```bash
cd ~/DEZHOU2/deploy/docker
chmod +x start-docker-only.sh   # 仅需一次
bash start-docker-only.sh
```

若本机用 **systemd** 拉网关，需禁用，否则下次开机 Java 又占 8080：

```bash
systemctl list-units --type=service | grep -iE 'nebula|java|gateway'
# 若有，例如：
# sudo systemctl disable --now 你的服务名
```

---

## 宿主机端口与安全组

- **默认 `GATEWAY_PUBLISH_PORT=8080`**：腾讯云安全组只放行 **TCP 8080** 即可访问网页，**不必**再开 8088。
- 之前出现 **「8080 被占用」** 是因为当时 **`ss` 能看到本机 `java` 在监听 8080**，并不是「不能用 8080」；你确认本机没有别的服务占 8080 后，继续用 8080 没问题。
- 若必须与宿主机 Java 共存，再把 `.env` 改成 **8088**（或其它端口），并在安全组**同步放行**该端口。

---

## 推送 main 后自动更新云端（GitHub Actions + SSH）

1. 在 **本机/CVM** 生成密钥对（若无）：`ssh-keygen -t ed25519 -f ~/.ssh/gh_deploy -N ""`  
2. 把 **公钥** `~/.ssh/gh_deploy.pub` 追加到 CVM 的 `~/.ssh/authorized_keys`（私钥**不要**上传服务器）。  
3. 在 GitHub 仓库 **Settings → Secrets and variables → Actions** 添加：  
   - `CVM_HOST`：服务器 IP  
   - `CVM_USER`：`ubuntu`  
   - `CVM_SSH_KEY`：私钥 `gh_deploy` 的**完整内容**  
4. 推送后 Workflow **Deploy to CVM** 会 SSH 执行 `git pull` + `docker compose build/up`。  
   路径默认为 `/home/ubuntu/DEZHOU2/deploy/docker`，若不同请改 [`.github/workflows/deploy-cvm.yml`](../../.github/workflows/deploy-cvm.yml)。

仅想手动更新时，在 CVM 上也可：

```bash
bash /home/ubuntu/DEZHOU2/deploy/docker/pull-and-up.sh
```

若本地又改过 `index.html` 等未提交文件，`git pull` 会失败，需先 `git stash` 或处理好冲突。
