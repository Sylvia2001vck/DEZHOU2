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
| `NEBULA_MATCH_ID_TRACE` | 设为 `1` 时，C++ 在 `rooms/create` 对 `matchId` 打 stderr（幂等命中 vs 新建），仅用于验证 |

---

## 编译与冒烟验证（云或本地，一步不漏）

### 1) Java：`mvn -DskipTests compile`

```bash
cd backend-java
mvn -DskipTests compile
```

- **必须**出现 `BUILD SUCCESS`。若有 `WARNING`，原样保留终端输出备查。
- **构造器链**（与代码一致）：`NebulaRedis.init()` → `MatchMessageDao`（仅 `MYSQL_HOST` 非空）→ `RoomWorkerBridge.start()` → `new AuthService(NebulaRedis.commands())` → `new MatchmakingService(auth, bridge, matchDao)` → 条件满足时 `new MatchWorker(...).start()`。
- **MatchWorker 是否启动**：启动后看 stderr  
  - 仅 Redis、**无** `MYSQL_HOST`：应出现 `[gateway] MatchWorker not started ...`，且**不应**出现 `[match-worker] BRPOP consumer ...`。  
  - **Redis + MySQL** 且表可连：应出现 `[redis] connected`、`[nebula-redis] NebulaRedis init`、`[gateway] MatchWorker started ...` 与 `[match-worker] BRPOP consumer ...`。优雅关闭（SIGTERM）时应出现 `[match-worker] MatchWorker stopped`。

与 `MatchWorker.start()` 内一致：`NebulaRedis.available() && JdbcEnv.enabled()`，否则直接 return（见 `MatchWorker.java`）。

### 2) C++：Debug 零错误

```bash
cd backend-cpp
cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
cmake --build build -j"$(nproc)"
```

（Windows 无 `nproc` 时可改为 `-j8`。）

- **`matchId`**：从表单读 `matchId`；非空则先查 `match_id_to_room_code_` + `get_room`，命中则**不**调用 `create_room_for_user`；否则调用后写回 map（`main.cpp` 中 `/api/rooms/create` 分支）。

### 3) 本地 / 云上集成冒烟

**进程顺序**：先起 **C++ room worker**（默认 `NEBULA_ROOM_WORKER_PORT=3101`），再起 **Java 网关**（`PORT=3000`），Redis/MySQL 按场景设置。

**场景 A — 只开 Redis，不开 MySQL**

- 环境：`REDIS_HOST=...`，**不设置** `MYSQL_HOST`（或置空）。
- 预期：网关日志 **MatchWorker not started**；凑满 Bean 队列后仍由 **同步** 路径调 C++ 开房（无 `matchId`）；Redis 上仍可有 Session / 锁等（若代码路径用到）。

**场景 B — Redis + MySQL**

- 环境：同时设置 `REDIS_HOST` 与 `MYSQL_HOST`（及 `MYSQL_USER` / `MYSQL_PASSWORD` / `MYSQL_DATABASE` 等）。
- 预期：日志 **MatchWorker invoked** + **BRPOP consumer**；凑满后写 `match_message` 并 `LPUSH nebula:match:msg`，worker 消费后带 `matchId` 调 C++。

**场景 C — `matchId` 幂等（直连 C++ HTTP 或经网关代理均可，需已登录 Session / gateway 身份）**

1. 设置 C++：`export NEBULA_MATCH_ID_TRACE=1`（或 Windows 等价），重启 worker。  
2. 对同一用户、同一表单连续两次 `POST .../api/rooms/create`（`roomType=bean_match` 等参数一致），**固定同一 `matchId`**。  
3. 预期：两次响应 JSON 中 **`roomCode` 完全相同**；stderr 先一行 **`new room ... (create_room_for_user)`**，第二次仅 **`idempotent matchId=...`**（无第二次 `create_room_for_user` 日志）。

经网关时：Cookie / gateway 头与直连 C++ 的鉴权方式需与现网一致（见 `RoomWorkerBridge` / C++ `resolve_auth_http`）。

### 4) 文档

- 本文档与 `backend-cpp/README.md` 中关于分支、Redis、MySQL、`matchId` 的描述即为最终口径；改行为前先改文档再改代码。
