# Docker 部署（腾讯云 CVM）

**默认单容器**：只有 **gateway**（Java），宿主端口 = **`.env` 里 `GATEWAY_PUBLISH_PORT`**（默认 **8080** → 容器内 8080）。  
`/healthz`、`/readyz` 由 Java 应答，不要求 C++; 房间控制走 **`/ws`**（Java `RoomControlWsService`）。

若需可选的 **legacy C++ room worker**：自行在宿主运行或把 `Dockerfile.room-worker` 等服务加回 `docker-compose.yaml`，并 **取消** 环境变量 **`NEBULA_ROOM_WORKER_DISABLED`**，配置 `NEBULA_ROOM_WORKER_HOST` / `PORT`。

## 前置

- CVM 安装 **Docker** 与 **Compose V2**（`docker compose version`）。
- **安全组**：公网放行 **`GATEWAY_PUBLISH_PORT`**（默认 TCP **8080**）。
- **MySQL / Redis** 与同 VPC **内网** 连通；填写 `MYSQL_*`、`REDIS_*` 与 **`NEBULA_BRIDGE_SECRET`**。

## 配置

```bash
cd deploy/docker
cp env.example .env
nano .env   # REDIS_HOST、MYSQL_*、NEBULA_BRIDGE_SECRET 等
```

- MySQL / Redis 若在 **宿主机本地**（`127.0.0.1`），容器内需写 **`host.docker.internal`**（网关镜像带 curl，可把 `MYSQL_HOST`、`REDIS_HOST` 设为该主机名）。

## 构建与启动

在 **`deploy/docker`** 目录下：

```bash
docker compose build
docker compose up -d
docker compose logs -f
```

更新代码后：`docker compose build --no-cache && docker compose up -d`

## 健康检查

- **gateway**：`curl -fsS http://127.0.0.1:${GATEWAY_PUBLISH_PORT:-8080}/healthz` 应返回 **ok**（纯 Java，不依赖 C++）。

### （可选）启用 C++ 桥时的排错

若你**未**设置 `NEBULA_ROOM_WORKER_DISABLED` 且运行了 C++ worker，仍出现 **`[bridge] disconnected`** / **`room worker offline`**：

1. 确认 `NEBULA_ROOM_WORKER_HOST` 在**容器内**能解析到 worker（不要用 `127.0.0.1` 指「宿主机上的 C++」除非用 host 网络或正确的主机名）。
2. Worker 进程在约定端口监听；桥密钥等与线上一致。

---

## `down` 再 `up` 和「只 kill 8080 再起」为啥表现不一样？

**不是** `grep`、`unset` 这类命令会自动改端口；下面说的是 **端口占用 / 重建容器** 的差异。

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
git pull
docker compose up -d --build
docker compose logs gateway --tail 40
```

## 静态资源 BGM

`assets/ifcan.mp3` 若未打进镜像，可在宿主机放置后挂载到网关容器：

```yaml
# 在 gateway 服务下增加：
# volumes:
#   - /opt/nebula/ifcan.mp3:/app/frontend/static/assets/ifcan.mp3:ro
```

## 网关镜像里的前端（打不进镜像就会「线上没变」）

`Dockerfile.gateway` 会把下面路径拷进 **`/app/frontend/static`**（或作为单一来源再被网关同步）——**除此以外的前端改动不会进网关容器**：

| 仓库路径 | 说明 |
|---------|------|
| `frontend/static/index.html` | 入口 HTML；**不是**仓库根目录的 `index.html` |
| `frontend/src/**` | 模块图里 `./frontend/src/...`（如 `SyncManager.js`） |
| 根目录 `proto-socket.js` | → 镜像内 `/app/proto-socket.js`，启动时再同步到 `frontend/static/proto-socket.js` |
| `backend-cpp/proto/poker.proto` | 浏览器请求的 `/proto/poker.proto` |

**容易踩坑：**

1. **两个 `index.html`**：仓库里还有根目录 **`/index.html`**，与 **`frontend/static/index.html` 已是不同版本** 时不应混淆。网关 / CI 构建镜像时**只打包后者**。若你只改了根目录那份，发到线上会「像没部署」——要么改 **`frontend/static/index.html`**，要么先跑 **`scripts/cloud/sync-frontend-static.sh`** 再提交（脚本会把根目录页同步到 static，使用前请确认哪一份才是你希望保留的正本）。
2. **`assets/ifcan.mp3`**：镜像里只有空目录占位；不进仓库或未挂载时背景音乐 URL 可能 404，见上文 BGM 挂载。
3. **CDN 资源**：`three`、`gsap`、`protobuf.min.js` 走公网 CDN，不归 Docker 镜像管。
4. **（可选 Legacy）**：若再走 C++/单独 `backend-cpp/`，自行维护 worker 与 Compose。

GitHub Actions 在构建镜像 **前不会自动执行** `sync-frontend-static.sh`；以 **`frontend/static/` 里已提交内容** 为准。

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
4. 推送后 Workflow **Deploy to CVM** 会 SSH：`git pull` + `compose pull gateway` + 重建网关容器。  
   路径默认为 `/home/ubuntu/DEZHOU2/deploy/docker`，若不同请改 [`.github/workflows/deploy-cvm.yml`](../../.github/workflows/deploy-cvm.yml)。

仅想手动更新时，在 CVM 上也可：

```bash
bash /home/ubuntu/DEZHOU2/deploy/docker/pull-and-up.sh
```

若本地又改过 `index.html` 等未提交文件，`git pull` 会失败，需先 `git stash` 或处理好冲突。
