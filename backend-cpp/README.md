# Nebula Poker — C++ Backend

Single-process game server for **Nebula Poker**: HTTP + WebSocket, protobuf-framed events, optional MySQL users and Redis leaderboards. It replaces the original Node `server.js` while keeping the same HTTP routes and client-facing behavior where documented below.

---

## 技术栈（Stack）

| 层级 | 技术 |
|------|------|
| 语言 / 标准 | **C++20** |
| 构建 | **CMake ≥ 3.22** |
| 网络 | **Boost.Beast**（HTTP + WebSocket）+ **Boost.Asio** |
| 消息格式 | **Protocol Buffers**（`proto/poker.proto` → 生成 C++） |
| JSON | **nlohmann/json**（CMake `FetchContent`，用于 HTTP JSON、房间快照等） |
| 用户持久化（可选） | **MySQL**（`libmysqlclient` / MariaDB 客户端；未检测到库时内存回退） |
| 排行榜（可选） | **Redis** + **hiredis**（未检测到库时内存回退） |

---

## 功能概览（Features）

- **静态与前端兼容**：托管 `index.html`、`proto-socket.js`、`proto/poker.proto`、`/assets/*` 等，与现有浏览器客户端对齐。
- **WebSocket**：二进制帧承载 protobuf `Envelope`，与前端 protobuf 编解码一致。
- **认证**：`/api/auth/register`、`login`、`logout`、`me`；HTTP Session Cookie + 连接时 WebSocket 侧会话绑定。
- **房间**：创建 / 加入、桌内状态广播、AI 接管延迟、事件日志（含可恢复的 `envelopeB64` 条目）。
- **匹配**：`/api/matchmaking/queue`、`cancel`、`status`；队列达阈值后自动建私密房并下发 `match_found`。
- **排行榜**：`/api/leaderboard?type=coins|winrate|weekly`（Redis 可用时优先）。
- **健康检查**：`/healthz`、`/readyz`。
- **冷恢复（可选）**：房间 JSON 快照至 `.runtime/rooms/`（与 Node 布局对齐；详见下文环境变量）。
- **重连**：优先已认证 `userId`，并保留玩法会话与重连令牌作为兜底；恢复时先发完整状态再补事件回放。

---

## Build

Install Boost (Beast/Asio), Protobuf, and optionally MySQL / hiredis dev packages, e.g. on Ubuntu:

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

The server exposes:

- `/` → `index.html`
- `/proto-socket.js` → frontend transport layer
- `/proto/poker.proto` → runtime-loaded protobuf schema
- `/assets/*` → lobby art/audio/static files
- `/api/leaderboard?type=coins|winrate|weekly`
- `/api/auth/register` | `/api/auth/login` | `/api/auth/logout` | `/api/auth/me`
- `/api/rooms/create` | `/api/rooms/join`
- `/api/matchmaking/queue` | `/api/matchmaking/cancel` | `/api/matchmaking/status`
- `/healthz` | `/readyz`
- WebSocket upgrade path used by the client (e.g. `/ws` behind reverse proxy — match your deployment)

### WSL: run the binary from Linux ext4, not `/mnt/d`

The C++ server is a native ELF. Running it from the Windows drive mount (`/mnt/d/...`, drvfs) has caused **segmentation faults right after listen** on some setups. **Fix:** build or copy `nebula-poker-server` under the WSL home filesystem (e.g. `~/nebula-build/`) and run it from there. You can still set `NEBULA_REPO_ROOT=/mnt/d/DEZHOU` so static files are read from the repo on `D:`.

---

## Environment

```bash
PORT=3000
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

**Node vs C++ snapshots:** Core game fields align so Node-produced files can load in C++. Event log formats differ; C++ only restores `eventLog` entries that contain **`envelopeB64`**.

**Multi-instance:** One process owns a room in memory; snapshots are local disk unless `NEBULA_SNAPSHOT_DIR` points to shared storage. Horizontal scaling needs sticky routing and/or a shared store — not file snapshots alone.

---

## Performance & scalability notes

- **Threading:** Single-threaded `io_context::run()`; shared maps are touched on that thread. If you add worker threads, use a **strand** per connection and synchronize shared state.
- **Buffers:** `beast::flat_buffer` with initial `reserve(65536)`; protobuf parsing uses `ParseFromArray` on contiguous Beast segments when possible.
- **Timeouts:** WebSocket uses `websocket::stream_base::timeout::suggested(beast::role_type::server)`; pair with app heartbeats if you need strict liveness.
- **Frontend (Three.js):** For motion smoothing, prefer updating targets on message and interpolating in `requestAnimationFrame` (see repo `frontend/src/utils/SyncManager.js` and `docs/three-smooth.md`).

---

## Notes

- Without MySQL or Redis dev libraries, the backend still builds with in-memory fallbacks.
- Quick match is lightweight: `kMatchmakingThreshold` queued players trigger auto room creation and `match_found`.
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

Binary: `build-cpp/nebula-poker-server` (per script). Set `NEBULA_REPO_ROOT` to the repo path. Optional systemd: `scripts/cloud/nebula-poker-cpp.service`. Open TCP for `PORT`; use Nginx/Caddy in front for HTTPS/WSS in production.

---

## 版权声明 / Copyright

Copyright © 2026 **Tianyi Pu**. All rights reserved.

- `tpuac@connect.ust.hk`
- `3036238022@qq.com`
