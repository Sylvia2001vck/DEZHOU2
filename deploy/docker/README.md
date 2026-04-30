# Docker 部署（腾讯云 CVM）

双容器：**gateway**（Java，对外 `8080`）+ **room-worker**（C++，仅 compose 内网）。

## 前置

- CVM 安装 **Docker** 与 **Compose V2**（`docker compose version`）。
- 安全组放行 **8080**（或你改的 `GATEWAY_PUBLISH_PORT`）。
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

网关镜像内含 `curl`，compose 对 `GET /healthz` 做检查；需 **room-worker** 已就绪（健康检查会走 Java→C++ 代理）。

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
