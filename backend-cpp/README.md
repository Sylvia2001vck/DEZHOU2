# Nebula Poker C++ Backend

This directory contains a C++ replacement for the original `server.js`.

## Stack

- `Boost.Beast` (WebSocket + HTTP) on `Boost.Asio` for browser connections
- `Protocol Buffers` for all client/server event payloads
- `MySQL` for user profile persistence when connector headers/libs are available
- `Redis` sorted sets for leaderboard updates when `hiredis` is available

## Build

Install Boost (Beast/Asio) and Protobuf, e.g. on Ubuntu:

```bash
sudo apt install libboost-system-dev libboost-thread-dev protobuf-compiler libprotobuf-dev
```

Then:

```bash
cmake -S backend-cpp -B build
cmake --build build --config Release
```

## Validation Scripts

From the workspace root, the C++ backend can be verified with the raw `HTTP + WS + protobuf` scripts below:

```bash
npm run cpp:load:rooms
npm run cpp:test:reconnect
```

Optional environment overrides:

- `CPP_LOAD_BASE_URL=http://127.0.0.1:3000`
- `LOAD_TIMEOUT_MS=45000`
- `RECONNECT_TIMEOUT_MS=120000`
- `CPP_AI_WAIT_MS=61000`

## Runtime

The server serves:

- `/` -> existing `index.html`
- `/proto-socket.js` -> frontend transport compatibility layer
- `/proto/poker.proto` -> runtime-loaded protobuf schema
- `/assets/*` -> lobby art/audio/static files used by the frontend
- `/api/leaderboard?type=coins|winrate|weekly`
- `/api/auth/register`
- `/api/auth/login`
- `/api/auth/logout`
- `/api/auth/me`
- `/api/rooms/create`
- `/api/rooms/join`
- `/api/matchmaking/queue`
- `/api/matchmaking/cancel`
- `/api/matchmaking/status`
- `/healthz`
- `/readyz`

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

## Performance & scalability notes

**Threading:** The server uses a **single-threaded** `boost::asio::io_context::run()` loop; all handlers touch `sessions_` / `rooms_` on that thread. If you scale to **multiple** `io_context` worker threads:

- Prefer a **`boost::asio::strand`** (or executor-bound strand) so each connection’s async chain stays **serialized** (read → write ordering per `WsSession`).
- Protect **shared** maps (`sessions_`, `rooms_`, etc.) with synchronization — e.g. **`std::shared_mutex`** if you split read-heavy vs write-heavy paths, or a single mutex while profiling.

**Buffers:** `WsSession` uses `beast::flat_buffer` with an initial **`reserve(65536)`** to cut reallocations under bursty traffic. Binary frames are parsed with **`google::protobuf::MessageLite::ParseFromArray`** on the **contiguous** Beast buffer segment when possible (fallback to a concat path if the readable region spans multiple chunks).

**Timeouts:** WebSocket streams use **`websocket::stream_base::timeout::suggested(beast::role_type::server)`** so Beast applies idle/read timeouts and helps clear stuck peers (still pair with app-level heartbeats if you need liveness guarantees).

**Frontend (Three.js) — smooth sync:** For chips flying to seats, table panning, or any moving prop, avoid snapping transforms on every `onmessage`. Keep **server truth** in a target and **interpolate** the visible object in the render loop.

- Use **`socket.binaryType = 'arraybuffer'`** so `event.data` is an `ArrayBuffer`; decode with **protobufjs** after unpacking your `Envelope` + payload (same binary framing as the C++ server).
- **Pattern:** update only `targetPosition` / `targetQuaternion` in `onmessage`; in `requestAnimationFrame`, lerp/slerp toward the target.

Frame-rate friendly smoothing (exponential decay — stable across 60 Hz vs 120 Hz):

```javascript
const targetPosition = new THREE.Vector3();
const smoothPosition = new THREE.Vector3();
let lastTime = performance.now();

function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, (now - lastTime) / 1000); // cap dt to avoid huge jumps after tab background
  lastTime = now;
  const lambda = 12; // higher = snappier (tune 8–20 for poker UI)
  const alpha = 1 - Math.exp(-lambda * dt);
  smoothPosition.lerp(targetPosition, alpha);

  mesh.position.copy(smoothPosition);
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);
```

Simpler fixed-step lerp (more lag if FPS drops): `mesh.position.lerp(targetPosition, 0.12)` each frame — fine for lobby-level motion; prefer the `dt` version above for consistent feel.

**Handoff (repo root):** the same exponential smoothing is implemented as **`frontend/src/utils/SyncManager.js`** (used from `index.html` + documented in **`docs/three-smooth.md`**). Prefer importing that module instead of duplicating math in the client.

## Notes

- If MySQL or Redis development libraries are not installed, the backend still builds with in-memory fallback stores.
- Auth now uses an HTTP session cookie plus WebSocket-side session binding on connect.
- Quick match is intentionally lightweight: once `kMatchmakingThreshold` players are queued, the backend auto-creates a private room and pushes `match_found`.
- Reconnect now prefers authenticated `userId`; gameplay session IDs and reconnect tokens are retained as recovery fallbacks.
- Reconnect restore sends a fresh full state snapshot first (`room_state`, `game_state`, seat-private hand/session data) and uses event replay only as a supplement for missed timeline events.
- The frontend event names remain largely unchanged; the new flow adds `auth_state`, `matchmaking_status`, `match_found`, and `seat_session`.

## Cloud Deployment

**Ubuntu (e.g. Tencent CVM):** from repo root on the server after `git pull`:

```bash
chmod +x scripts/cloud/build-cpp-ubuntu.sh
bash scripts/cloud/build-cpp-ubuntu.sh
```

Binary: `build-cpp/nebula-poker-server`. Set `NEBULA_REPO_ROOT` to the repo path (or run with `WorkingDirectory` = repo root). Optional systemd unit: `scripts/cloud/nebula-poker-cpp.service` (edit paths/user). Open **TCP 3000** (or your `PORT`) in the cloud security group; put Nginx/Caddy in front for HTTPS/WSS in production.

Recommended first production shape for Hong Kong friend playtests:

1. Run a single `nebula-poker-server` instance in one HK region VM/container.
2. Put `Nginx` or `Caddy` in front of it for `HTTPS` and `WSS`.
3. Back `users` with MySQL. Redis remains optional for leaderboard/cache only.
4. Keep room state in-process until you actually need multi-instance scaling.
5. Use `/healthz` and `/readyz` for your reverse-proxy or container health checks.

Example reverse proxy checklist:

- `https://your-domain` -> proxy to `http://127.0.0.1:3000`
- enable websocket upgrade for `/ws`
- keep `Set-Cookie` headers intact
- only expose TLS publicly; browsers should connect with `wss://`
