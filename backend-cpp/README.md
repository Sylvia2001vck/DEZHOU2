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

## Notes

- If MySQL or Redis development libraries are not installed, the backend still builds with in-memory fallback stores.
- Auth now uses an HTTP session cookie plus WebSocket-side session binding on connect.
- Quick match is intentionally lightweight: once `kMatchmakingThreshold` players are queued, the backend auto-creates a private room and pushes `match_found`.
- Reconnect now prefers authenticated `userId`; gameplay session IDs and reconnect tokens are retained as recovery fallbacks.
- Reconnect restore sends a fresh full state snapshot first (`room_state`, `game_state`, seat-private hand/session data) and uses event replay only as a supplement for missed timeline events.
- The frontend event names remain largely unchanged; the new flow adds `auth_state`, `matchmaking_status`, `match_found`, and `seat_session`.

## Cloud Deployment

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
