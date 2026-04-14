# Node To C++ Room/Session Mapping

## Purpose

This note turns the validated `server.js` concurrency and reconnect model into an explicit mapping for `backend-cpp/src/main.cpp`.

It focuses on four pieces:

- room lock
- gameplay `sessionId`
- per-seat `reconnectToken`
- room event replay

It then maps those pieces onto the C++ `Room`, `Session`, seat reclaim, and disconnect flows.

## 1. Canonical Node.js Model

### 1.1 Room Lock

Node isolates room mutation in two layers:

- room catalog creation is serialized by `roomsCatalogMutex`
- per-room state mutation is serialized by `room.mutex` via `runRoomExclusive(room, work)`

Meaning:

- different rooms can progress concurrently
- all state changes inside one room are linearized
- handlers like `join_room`, `take_seat`, `action`, `disconnect` all observe one consistent room state

### 1.2 Gameplay Session Model

Node `sessionId` is not the login cookie. It is the gameplay recovery identity.

`playerSessions.get(sessionId)` stores:

- `roomId`
- `seatIdx`
- `playerName`
- `clientId`
- `reconnectToken`
- `lastSeenSeqByRoom`
- `lastDisconnectAt`
- `expiresAt`
- `aiTakeoverAt`
- `isAiManaged`

Rules:

- created by `getOrCreatePlayerSession(sessionId, seed)`
- refreshed by `touchPlayerSession(sessionId, patch)`
- expires after `SESSION_TTL_MS`
- survives socket disconnect
- is the durable anchor for replay and reclaim

### 1.3 Seat Reconnect Token

Node `reconnectToken` is a per-seat secret generated when a player first claims a seat.

It lives in both places:

- `room.seats[idx].reconnectToken`
- `playerSessions[sessionId].reconnectToken`

Use:

- reclaim a started-game seat when the socket is gone
- act as a second recovery factor when the client gameplay session is available

### 1.4 Event Replay Model

Node room replay is append-only and sequence based.

Per room:

- `room.eventSeq`
- `room.eventLog[]`

Each event log entry stores:

- `seq`
- `eventName`
- `payload`
- optional `seatIdx` for private events
- optional `sessionId`
- `createdAt`

Delivery state:

- `markDelivered()` updates `playerSessions[sessionId].lastSeenSeqByRoom[roomId]`
- `replayMissedRoomEvents()` replays entries with `seq > lastSeen`
- seat-scoped events are replayed only to the same seat owner

This gives Node:

- incremental state recovery instead of full room rebuild only
- seat-private replay for `private_hand`
- deterministic resume after reconnect

## 2. C++ Runtime Mapping

## 2.1 The Session Name Collision

This is the most important mapping rule.

Node `sessionId` maps to:

- `Session::gameplay_session_id`
- `GameplaySessionData::gameplay_session_id`
- protobuf `JoinRoomRequest.sessionId`
- protobuf `SeatSession.sessionId`

Node `sessionId` does not map to:

- `Session::session_id`

In C++, `Session::session_id` is the HTTP auth cookie session bound in `bind_http_session_to_socket()`.
That is the login identity.

So the split is:

- auth identity: C++ `Session::session_id`
- gameplay recovery identity: C++ `Session::gameplay_session_id`

## 2.2 Room Lock Mapping

Node:

- `room.mutex`
- `runRoomExclusive(room, work)`

C++:

- `room_mutexes_[room_id]`
- `std::lock_guard<std::mutex> lock(room_mutex(room_id))`

Alignment:

- both serialize room-local mutations
- both allow different rooms to proceed independently
- both wrap `join`, `seat reclaim`, action handling, and disconnect paths

Practical equivalent:

- Node room object carries the mutex
- C++ stores room mutexes out-of-line in `room_mutexes_`

Behaviorally these are equivalent.

## 2.3 Gameplay Session Store Mapping

Node store:

- `playerSessions: Map<sessionId, PlayerSession>`

C++ store:

- `gameplay_sessions_: unordered_map<string, GameplaySessionData>`

Node fields:

- `roomId`
- `seatIdx`
- `reconnectToken`
- `lastSeenSeqByRoom`
- `lastDisconnectAt`
- `aiTakeoverAt`
- `isAiManaged`
- `expiresAt`

C++ fields:

- `room_id`
- `seat_idx`
- `reconnect_token`
- `last_seen_seq`
- `last_disconnect_at`
- `ai_takeover_at`
- `ai_managed`
- `expires_at`

Alignment:

- same persistence goal
- same TTL refresh behavior
- same disconnect survival behavior
- same reclaim metadata

Intentional simplification in C++:

- Node uses `lastSeenSeqByRoom`
- C++ uses single `last_seen_seq`

That is acceptable as long as one gameplay session is effectively bound to one active room at a time, which is how the current poker flow works.

## 2.4 Seat Token Mapping

Node seat state stores:

- `seat.sessionId`
- `seat.reconnectToken`
- `seat.disconnectedAt`
- `seat.aiManaged`
- `seat.aiTakeoverAt`

C++ seat state stores:

- `seat.gameplay_session_id`
- `seat.reconnect_token`
- `seat.disconnected_at`
- `seat.ai_managed`
- `seat.ai_takeover_at`

This is a direct field-level mapping.

## 2.5 Event Replay Mapping

Node:

- `appendRoomEvent(room, eventName, payload, options)`
- `emitRoomEvent()`
- `emitSeatEvent()`
- `replayMissedRoomEvents(socket, room, seatIdx)`

C++:

- `append_room_event(room, envelope_bytes, seat_idx)`
- `emit_room_event()`
- `emit_seat_event()`
- `replay_missed_events(session, room)`

Alignment details:

- both keep a monotonically increasing room sequence
- both keep a bounded event log
- both support seat-private replay
- both update last-seen cursor on delivery
- both replay only missed entries after reconnect

Implementation difference:

- Node stores structured `{ eventName, payload }`
- C++ stores serialized envelope bytes in `RoomEventEntry.envelope_bytes`

Behavior is still equivalent, and C++ is actually closer to wire-level truth because replay sends the exact original envelope.

## 3. Flow Mapping

## 3.1 Join Room

### Node `join_room`

Node flow:

1. get or create room
2. enter room mutex
3. get or create gameplay session from provided `sessionId`
4. bind socket-local `sessionId` and optional `reconnectToken`
5. if game already started:
6. scan offline seats
7. reclaim by `reconnectToken` or `sessionId`
8. clear disconnect state
9. cancel AI takeover
10. send room snapshot, activity sync, replay missed events
11. re-issue seat session payload

### C++ `handle_join_room`

C++ flow:

1. require authenticated HTTP-bound session
2. lock `room_mutex(room_id)`
3. bind `Session::gameplay_session_id` from protobuf `sessionId`
4. hydrate `GameplaySessionData` and `last_seen_seq`
5. if game already started:
6. reclaim by `user_id`
7. else reclaim by `gameplay_session_id`
8. else reclaim by `reconnect_token`
9. clear disconnect state
10. cancel AI takeover
11. send `room_state`, `you_state`, `activity_sync`
12. send `seat_session`
13. re-emit `private_hand`
14. replay missed events

Alignment result:

- C++ preserves the Node reconnect pattern
- C++ adds stronger first-pass reclaim via authenticated `user_id`
- C++ therefore hardens the Node model instead of weakening it

## 3.2 Take Seat / Seat Reclaim

### Node `take_seat`

Before game start:

- claim empty seat
- assign fresh `reconnectToken`
- ensure `sessionId`
- persist both to seat and session store
- emit `seat_taken` and `seat_session`

After game start:

- reclaim only if `reconnectToken` or `sessionId` matches existing seat
- restore seat ownership
- clear disconnect flags
- cancel AI takeover
- replay missed events

### C++ `handle_take_seat`

Before game start:

- create `Seat`
- create or reuse `gameplay_session_id`
- generate new `reconnect_token`
- persist to `GameplaySessionData`
- emit `seat_taken` and `seat_session`

After game start:

- reclaim if `user_id`, `gameplay_session_id`, or `reconnect_token` matches
- restore socket ownership
- clear disconnect flags
- cancel AI takeover
- replay missed events

Alignment result:

- C++ matches Node lifecycle
- C++ again adds `user_id` as the strongest reclaim key

## 3.3 Disconnect

### Node `disconnect`

If room not started:

- remove seat immediately
- remove player state

If room started:

- clear `seat.socketId`
- set `seat.disconnectedAt`
- persist session recovery metadata
- remove seat from pending action set
- if disconnected player was active, immediately choose next actor
- schedule 30 second AI takeover
- rebroadcast room and game
- if game can continue immediately, advance or request next turn

### C++ `handle_disconnect`

If room not started:

- cancel AI takeover
- clear seat
- erase player state

If room started:

- clear `seat.socket_id`
- set `seat.disconnected_at`
- persist `GameplaySessionData`
- remove seat from pending action set
- schedule 30 second AI takeover
- rebroadcast room and game

Alignment result:

- persistence and AI takeover behavior are aligned
- lobby cleanup behavior is aligned

Important difference:

- Node immediately advances `activeSeatIdx` when the disconnected seat was the acting player
- current C++ disconnect path does not explicitly advance `active_seat_idx` before the 30 second AI timer path

Impact:

- Node favors immediate hand continuity
- current C++ behavior may pause on the disconnected actor until AI takeover or some later turn recalculation path runs

Recommendation:

- if full parity with validated Node behavior is required, add the Node-equivalent disconnect continuation logic to C++:
- if disconnected seat was `active_seat_idx`, call `choose_next_actor`
- then run the same branch Node uses: finish hand / advance street / request turn

This is the main runtime gap still visible between the two implementations.

## 3.4 AI Takeover

Node:

- `scheduleAiTakeover(room, seatIdx)`
- set `seat.aiManaged = true`
- update persistent session
- broadcast activity, room, game
- call `requestTurn(room)`

C++:

- `schedule_ai_takeover(room, seat_idx)`
- set `seat.ai_managed = true`
- update `GameplaySessionData`
- broadcast activity, room, game
- call `request_turn(room)`

This is a direct behavioral match.

## 4. Event-Replay Alignment Summary

The validated Node replay contract is:

1. append every replay-worthy room event to a bounded room log
2. maintain a per-session last-seen cursor
3. tag seat-private events with the seat owner
4. on reconnect, replay only events with `seq > lastSeen`
5. never leak another seat's private events

The C++ backend already implements the same contract with:

- `Room::event_seq`
- `Room::event_log`
- `GameplaySessionData::last_seen_seq`
- `emit_room_event()`
- `emit_seat_event()`
- `replay_missed_events()`

So for replay semantics, the port is already faithful.

## 5. Final Mapping Table

| Node.js | C++ |
| --- | --- |
| `room.mutex` | `room_mutexes_[room_id]` |
| `runRoomExclusive(room, work)` | `lock_guard(room_mutex(room_id))` |
| `playerSessions` | `gameplay_sessions_` |
| gameplay `sessionId` | `Session::gameplay_session_id` / `GameplaySessionData::gameplay_session_id` |
| HTTP auth cookie session | `Session::session_id` |
| `seat.reconnectToken` | `seat.reconnect_token` |
| `room.eventSeq` | `room.event_seq` |
| `room.eventLog` | `room.event_log` |
| `replayMissedRoomEvents()` | `replay_missed_events()` |
| `scheduleAiTakeover()` | `schedule_ai_takeover()` |
| `cancelAiTakeover()` | `cancel_ai_takeover()` |

## 6. Conclusion

The C++ backend already matches the validated Node model in the core architecture:

- per-room serialized mutation
- durable gameplay session identity
- per-seat reconnect token reclaim
- bounded room event replay
- AI takeover after disconnect

The main remaining behavior difference is disconnect-time turn continuation when the active human player drops.

If that one branch is aligned, the C++ runtime behavior will match the Node reference model much more closely under reconnect and mid-hand disconnect pressure.

## 7. Requested Disconnect Policy

The target gameplay policy you described is:

- when a player disconnects, do not remove them from the room
- mark them offline first
- wait up to `60s` for reconnect
- after timeout, enable AI takeover and auto-act
- when reconnect succeeds, restore online status and continue play

This policy is valid for poker and fits the current architecture well.

### 7.1 How It Maps To Current Runtime

Current Node and C++ implementations already support most of this shape:

- disconnected players are not removed once a hand has started
- room, seat, and recovery metadata are retained on the server
- reconnect can reclaim the existing seat
- AI takeover already exists

Current implementation status:

- C++ runtime now uses a `60s` AI takeover delay
- C++ reconnect reclaim now prefers authenticated `uid` over gameplay session ID and reconnect token
- C++ reconnect restore now sends full state first and uses replay as a supplement
- runtime still marks a seat offline by clearing socket ownership, rather than storing a separate explicit `isOnline` field
- current Node/C++ action loop may fold or remove the disconnected player from the current pending action set before AI takeover logic completes

If you want exact policy parity with this note, the clean model is:

- seat-level connectivity state:
- `isOnline = true/false`
- `disconnectedAt = timestamp|null`
- `aiManaged = true/false`
- timeout policy:
- before `60s`: human seat reserved, waiting for reclaim
- after `60s`: `aiManaged = true`, server auto-checks or auto-folds as rules require
- reconnect policy:
- reclaim by authenticated `uid` first
- then restore `isOnline = true`
- clear `disconnectedAt`
- clear `aiManaged` if player chooses to take back control

### 7.2 Recommended C++ Interpretation

For `backend-cpp/src/main.cpp`, the intended disconnect flow becomes:

1. player socket closes
2. keep seat in `Room::seats`
3. persist `user_id`, room, seat, chips, reconnect metadata
4. mark offline
5. start a `60s` takeover timer
6. if reconnect happens before timeout:
7. rebind socket to the same seat
8. restore online
9. continue game
10. if timeout fires:
11. switch to AI-managed mode
12. AI performs only legal server-side actions

This is fully compatible with the existing C++ `GameplaySessionData`, `Seat`, and `schedule_ai_takeover()` design.

## 8. Full Sync vs Incremental Replay

You asked for:

- session binding based on `uid`
- server keeps room / seat / chips
- full state sync after reconnect because it is simpler and reliable for card games

That is a reasonable production choice.

### 8.1 Why Full Sync Is Good For Poker

For a turn-based card game:

- room state is relatively small
- correctness matters more than bandwidth micro-optimization
- reconnect logic becomes easier to reason about
- client recovery bugs are reduced

So a reconnect flow of:

1. client reconnects
2. server validates `uid`
3. server sends fresh full `room_state`
4. server sends fresh `game_state`
5. server sends seat-private data such as `private_hand`
6. client replaces local view wholesale

is often the safest default.

### 8.2 Relationship To Current Event Replay Model

Current Node/C++ code already has incremental replay.

That does not conflict with your desired full-sync policy.

Best practice is:

- full sync for reconnect baseline
- event replay as an optional enhancement for missed timeline messages

In other words:

- authoritative restore should rely on fresh server state
- replay should be treated as continuity polish, not the only recovery path

For the current C++ backend, that means:

- use `room_state` + `game_state` + `private_hand` + `seat_session` as the primary reconnect restore path
- keep `replay_missed_events()` only for non-critical missed room timeline events

## 9. Why The Server Must Calculate Cards

This is the anti-cheat foundation.

The core rule is:

- the client is untrusted
- the server is authoritative

So the client may only:

- render UI
- play animation
- collect user input

The client must never be the source of truth for:

- cards
- stack sizes
- bets
- side pots
- winners
- turn legality

### 9.1 Why Client Calculation Is Unsafe

Any client-side value can be tampered with by:

- memory editing
- packet rewriting
- browser devtools injection
- modified builds
- replayed or forged requests

If the client can decide cards or chips, the game is already compromised.

### 9.2 Correct Authoritative Flow

The required server-side flow is:

1. client sends an intent such as `bet 1000`
2. server validates:
3. the user belongs to this room
4. the user owns this seat
5. it is actually this seat's turn
6. the action is legal for the current round
7. chips are sufficient
8. server mutates canonical room state
9. server recalculates dependent values
10. server broadcasts the result
11. client only renders the confirmed result

So the client does not say:

- "my chips are now 5000"

It only says:

- "I request call / raise / fold"

Then the server decides whether that request is legal.

## 10. Anti-Cheat Rules For This Project

For the C++ poker backend, anti-cheat should follow these rules:

- shuffle and deal only on the server
- keep deck, hole cards, and hand evaluation only on the server
- broadcast public state to everyone
- send `private_hand` only to the owning seat
- validate every action against `room_id`, `seat_idx`, `uid`, turn state, and chips
- ignore any client-provided chip totals, card data, or result data
- reject cross-room actions
- reject seat actions that do not belong to the authenticated player
- use `uid` as the strongest reclaim identity on reconnect

### 10.1 Project-Specific Summary

For this codebase, the practical interpretation is:

- client stores display copies only
- real chips live in server `Room` / `PlayerState`
- real seat ownership lives in server `Session` + `Seat` + `GameplaySessionData`
- real cards live in server deck / hand state
- real result calculation lives in the server hand evaluator

So if a client sends:

- "give me 1000 chips"

the server should do exactly what you described:

- validate the request
- reject if illegal
- keep canonical state unchanged

That is why service-side calculation is not optional. It is the core trust boundary.
