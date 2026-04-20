# Nebula Poker — C++ Backend

**C++ room worker** for **Nebula Poker**: game logic, protobuf `Envelope` events, optional MySQL users and Redis leaderboards. **HTTP and WebSocket are not implemented in C++** — run the **Java gateway** (`backend-java`) on the public port; it forwards REST and `/ws` binary frames to this process over a **localhost TCP link** of **length-prefixed UTF-8 JSON** (binary fields Base64). Browser↔Java WebSocket payloads remain **protobuf `Envelope`** bytes.

---

## 技术栈（Stack）

| 层级 | 技术 |
|------|------|
| 语言 / 标准 | **C++20** |
| 构建 | **CMake ≥ 3.22** |
| 网络 | **Boost.Asio**（仅 **127.0.0.1** TCP 网关；无 Beast / 无对外 WebSocket） |
| 消息格式 | **Protocol Buffers**（`proto/poker.proto` → 生成 C++） |
| JSON | **nlohmann/json**（CMake `FetchContent`，用于 HTTP JSON、房间快照等） |
| 用户持久化（可选） | **MySQL**（`libmysqlclient` / MariaDB 客户端；未检测到库时内存回退） |
| 排行榜（可选） | **Redis** + **hiredis**（未检测到库时内存回退） |

---

## 功能概览（Features）

- **静态与 HTTP**：由 Java 网关托管或代理到本进程的 `api_request` JSON（与原先由 C++ 直接处理的 HTTP 路由对齐，但 **鉴权与匹配** 已在 Java 侧实现）。
- **实时通道**：浏览器 WebSocket → Java → 本进程 `client_envelope`（载荷仍为 protobuf `Envelope`）。
- **认证**：`/api/auth/*` 由 **Java** 处理；本进程通过 JSON 中的 `gateway_user_id` / `gateway_profile_b64` 识别用户并更新 `java_profiles_` 缓存。
- **房间**：创建 / 加入、桌内状态广播、AI 接管延迟、事件日志（含可恢复的 `envelopeB64` 条目）。
- **匹配**：`/api/matchmaking/*` 由 **Java** 处理；凑满人后 Java 调本进程 **`POST /api/rooms/create`**（`roomType=bean_match`；可选表单 **`matchId`** 用于与 Java 异步队列对齐的**幂等**开房）与 **`POST /api/internal/match-notify`** 以写入 `pending_match_rooms_` 并下发 `match_found`。
- **排行榜**：`/api/leaderboard?type=coins|winrate|weekly`（Redis 可用时优先）。
- **健康检查**：`/healthz`、`/readyz`。
- **冷恢复（可选）**：房间 JSON 快照至 `.runtime/rooms/`（与 Node 布局对齐；详见下文环境变量）。
- **重连**：优先已认证 `userId`，并保留玩法会话与重连令牌作为兜底；恢复时先发完整状态再补事件回放。

---

## Build

Install Boost (system/thread for Asio), Protobuf, and optionally MySQL / hiredis dev packages, e.g. on Ubuntu:

```bash
sudo apt install cmake libboost-system-dev libboost-thread-dev protobuf-compiler libprotobuf-dev
# optional:
sudo apt install libmysqlclient-dev libhiredis-dev
```

From the **repository root**:

```bash
cmake -S backend-cpp -B build
cmake --build build --config Release
```

Artifact: `build/nebula-poker-server` (or your chosen build directory name, e.g. `build-cpp/nebula-poker-server`).

---

## Validation Scripts

From the workspace root:

```bash
npm run cpp:load:rooms
npm run cpp:test:reconnect
```

Optional environment overrides:

- `CPP_LOAD_BASE_URL=http://127.0.0.1:3000`
- `LOAD_TIMEOUT_MS=45000`
- `RECONNECT_TIMEOUT_MS=120000`
- `CPP_AI_WAIT_MS=61000`

---

## Runtime

The **Java gateway** (default `PORT=3000`) is what browsers talk to. It proxies the same paths to the C++ worker via `GatewayApiRequest` / `GatewayClientEnvelope`:

- `/` → static files (from `NEBULA_REPO_ROOT` or cwd)
- `/proto-socket.js`, `/proto/poker.proto`, `/assets/*`
- `/api/*` (auth, rooms, matchmaking, beans, …)
- `/healthz` | `/readyz`
- WebSocket `/ws` (binary protobuf `Envelope` frames)

### WSL: run the binary from Linux ext4, not `/mnt/d`

The C++ worker is a native ELF. Running it from the Windows drive mount (`/mnt/d/...`, drvfs) has caused **segmentation faults right after listen** on some setups. **Fix:** build or copy `nebula-poker-server` under the WSL home filesystem (e.g. `~/nebula-build/`) and run it from there. Point the Java gateway at `NEBULA_ROOM_WORKER_HOST` / `NEBULA_ROOM_WORKER_PORT`; set `NEBULA_REPO_ROOT` on **Java** for static file resolution.

---

## Environment

```bash
NEBULA_ROOM_WORKER_PORT=3101
NEBULA_ROOM_WORKER_BIND=127.0.0.1
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=secret
MYSQL_DATABASE=nebula_poker
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### Room snapshots (parity with Node `server.js`)

Rooms are persisted as **JSON** under **`<repo>/.runtime/rooms/<roomId>.json`** (or override). On startup, rooms are restored for cold recovery (table state, reconnect tokens, deck, and C++-written `eventLog` entries with **base64** `envelopeB64` for replay).

| Variable | Default | Meaning |
|----------|---------|---------|
| `NEBULA_ENABLE_ROOM_SNAPSHOT` | `0` (off) | Set to `1` to enable load/save. On some WSL `/mnt/d` setups restore has crashed — keep off unless needed. |
| `NEBULA_SNAPSHOT_DIR` | (empty) | Absolute path to the `rooms` directory; overrides the path below. |
| `NEBULA_REPO_ROOT` | (empty) | If set, snapshots go to `$NEBULA_REPO_ROOT/.runtime/rooms/`. |
| (fallback) | `.runtime/rooms` | Relative to the process current working directory. |
| `NEBULA_MATCH_ID_TRACE` | (empty) | Set to `1` to log `POST /api/rooms/create` **matchId** idempotent hits vs new `create_room_for_user` (stderr); for verification only. |

**Node vs C++ snapshots:** Core game fields align so Node-produced files can load in C++. Event log formats differ; C++ only restores `eventLog` entries that contain **`envelopeB64`**.

**Multi-instance:** One process owns a room in memory; snapshots are local disk unless `NEBULA_SNAPSHOT_DIR` points to shared storage. Horizontal scaling needs sticky routing and/or a shared store — not file snapshots alone.

---

## Performance & scalability notes

- **Threading:** Single-threaded `io_context::run()`; shared maps are touched on that thread. If you add worker threads, use a **strand** per connection and synchronize shared state.
- **Gateway framing:** Java ↔ C++ uses **4-byte big-endian length + UTF-8 JSON** (Base64 for binary blobs; max frame 32 MiB in reference implementation). Not protobuf on this hop.
- **Frontend (Three.js):** For motion smoothing, prefer updating targets on message and interpolating in `requestAnimationFrame` (see repo `frontend/src/utils/SyncManager.js` and `docs/three-smooth.md`).

---

## Notes

- Without MySQL or Redis dev libraries, the backend still builds with in-memory fallbacks.
- Quick / bean matchmaking is owned by the **Java gateway** (threshold and MMR window live there); this worker only creates rooms and pushes `match_found` when asked via `match-notify`.
- Frontend event names stay largely compatible; newer flow adds `auth_state`, `matchmaking_status`, `match_found`, and `seat_session`.

---

## Cloud Deployment

**Ubuntu (e.g. small Tencent CVM):** avoid OOM during Protobuf/C++ builds.

| Step | Action |
|------|--------|
| 1 | `git pull` so `NEBULA_BUILD_JOBS=1` (default in `scripts/cloud/build-cpp-ubuntu.sh`) is in effect. |
| 2 | If RAM is tight: `chmod +x scripts/cloud/add-swap-2g-ubuntu.sh && bash scripts/cloud/add-swap-2g-ubuntu.sh` |
| 3 | Background build: `bash scripts/cloud/build-cpp-ubuntu-nohup.sh` then `tail -f build-cpp.log` |

Foreground:

```bash
chmod +x scripts/cloud/build-cpp-ubuntu.sh
bash scripts/cloud/build-cpp-ubuntu.sh
```

Binary: `build-cpp/nebula-poker-server` (per script). Bind is **loopback-only** by default (`NEBULA_ROOM_WORKER_BIND`). Public traffic goes to **Java** (`PORT`, e.g. 3000); put TLS/reverse-proxy in front of Java in production.

---

## 版权声明 / Copyright

Copyright © 2026 **Tianyi Pu**. All rights reserved.

- `tpuac@connect.ust.hk`
- `3036238022@qq.com`
