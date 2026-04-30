# Docker 部署（腾讯云 CVM）

双进程：**gateway**（Java，桥接网络，对外映射 **8080**）+ **room-worker**（C++，**host 网络**，在**宿主机**上监听 `3101`，避免容器 DNS 解析失败）。

## 前置

- CVM 安装 **Docker** 与 **Compose V2**（`docker compose version`）。
- **安全组**：只对公网放行 **8080**（或 `GATEWAY_PUBLISH_PORT`），**不要**放行 **3101**（C++ 在 host 上监听，仅给本机/网关用）。
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
4. 更新 compose 后务必 **`docker compose down` 再 `up`**。

验证（网关容器内应能连上宿主机 3101）：

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

## 释放宿主机端口（与 Docker 冲突时）

若 `8080` 已被本机 Java 占用：

```bash
sudo ss -tlnp | grep 8080
sudo kill 2401189
```

把 `2401189` 换成你机器上**实际的 PID**（不要用尖括号或字面量 `<PID>`）。

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
