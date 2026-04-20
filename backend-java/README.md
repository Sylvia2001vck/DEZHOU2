# Nebula Java Gateway (`nebula-gateway`)

与仓库代码一致的数据面说明。

## 实际请求路径

```
浏览器 ──HTTP/WS──► Javalin（本模块）
  ├─ /api/auth/*              → JVM 内处理（内存或 JDBC MySQL；可选 Redis Session）
  ├─ /api/matchmaking/*       → JVM 内处理（内存队列；可选异步见下）
  ├─ 其它 /api/*、/healthz 等  → TCP JSON 代理到 C++（RoomWorkerBridge）
  └─ /ws 二进制帧              → 原样转发到 C++；连接时在 JSON 里附带 gateway 身份字段
```

### 默认（无 Redis 或未同时启用 MySQL）

- 会话：内存 `ConcurrentHashMap`。
- 匹配凑满：本线程内直接调 C++ `POST /api/rooms/create`（无 `matchId`）+ `POST /api/internal/match-notify`。

### 可选异步管线（`REDIS_HOST` 非空 **且** `MYSQL_HOST` 非空）

- **Lettuce**：连接 Redis；Session / 分布式锁 / `nebula:match:msg` List / `nebula:pend:{userId}` 等（见 `NebulaRedis`、`RedisLock`、`AuthService`）。
- **本地消息表**：`match_message`（`MatchMessageDao`）；匹配成功后先 `INSERT` 再 `LPUSH nebula:match:msg`。
- **消费线程**：`MatchWorker` 后台 **BRPOP** 消费，调 C++ `rooms/create` 时带表单字段 **`matchId`**，再 `match-notify`；成功后写 Redis pending room code。
- **补偿**：`MatchWorker` 内 **ScheduledExecutor** 每 30s 将超时未完成的 `match_message`（`status=0`、`retry_count<5`、创建超过 120s）重新 **LPUSH** 并增加 `retry_count`。

若只开 Redis 不开 MySQL，异步路径不会启用（无 `match_message` 持久化），网关仍可用内存匹配 + 可选 Redis Session。

## 与 C++ 的约定

- **Java ↔ C++**：单连接、**4 字节大端长度 + UTF-8 JSON**（见 `RoomWorkerBridge`）；可选字段 `gateway_user_id`、`gateway_login_username`、`gateway_profile_b64` 供 C++ 识别已登录用户。
- **匹配成功后**：Java 调 C++ `POST /api/rooms/create`（`roomType=bean_match`；异步路径带 **`matchId`**）以及 `POST /api/internal/match-notify`（需与 C++ 一致的 `NEBULA_BRIDGE_SECRET`）。C++ 对相同 **`matchId`** 返回同一房间（进程内幂等，见 `backend-cpp` README）。

## 依赖（`pom.xml`）

- Javalin **6.x**、Gson、**mysql-connector-j**、**lettuce-core**（Redis 仅在设置了 `REDIS_HOST` 时使用）。

## 常用环境变量

| 变量 | 含义 |
|------|------|
| `PORT` | Javalin 监听端口 |
| `NEBULA_ROOM_WORKER_HOST` / `NEBULA_ROOM_WORKER_PORT` | C++ worker 地址 |
| `NEBULA_REPO_ROOT` / `NEBULA_STATIC_ROOT` | 静态资源根目录 |
| `MYSQL_HOST` 等 | 非空则 JDBC 持久化用户；否则仅内存用户 |
| `REDIS_HOST` / `REDIS_PORT` | 非空则 Lettuce 连接；与 MySQL 同时启用时打开异步匹配管线 |
| `NEBULA_BRIDGE_SECRET` | 与 C++ 一致，用于 `match-notify` |
