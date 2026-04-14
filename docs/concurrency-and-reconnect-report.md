# Concurrency And Reconnect Report

## Goals

- 2 rooms running at the same time with no state bleed
- 10 concurrent players sending actions without pot/turn corruption
- disconnect/reconnect restores seat, cards, and room timeline
- offline player switches to AI takeover after 30 seconds

## Commands

```bash
npm run dev
npm run load:autocannon
npm run load:artillery:rooms
npm run load:socketio
npm run test:reconnect
```

## Manual Checks

1. Open two browser groups and join two different rooms.
2. Start both tables and send bets at nearly the same time.
3. Confirm `room_state`, `game_state`, `pot`, and `activeSeatIdx` stay isolated per room.
4. Disconnect one seated player for 30+ seconds.
5. Confirm AI takeover message appears and the table continues.
6. Reconnect with the same browser/session and confirm seat/private hand/state replay works.

## Expected Result

- No cross-room updates
- No duplicate turn advancement
- No negative pot/chip drift from concurrent actions
- Reconnected player receives missed events and current hand state

## Latest Verified Run

Target:

- isolated local server on `http://127.0.0.1:3100`

Results:

- `npx autocannon -c 30 -d 20 http://127.0.0.1:3100/healthz`
- latency avg: `2.35ms`
- latency p99: `6ms`
- throughput avg: `10,525 req/sec`
- total: `211k requests / 20.01s`

- `npx artillery run --target http://127.0.0.1:3100 scripts/load/multi-room-artillery.yml`
- `200` virtual users created
- `200` completed
- `0` failed
- socket response mean: `0.4ms`
- socket response p99: `3.8ms`

- `node scripts/load/socketio-bet-storm.mjs`
- `10` simulated players
- `2` simultaneous rooms
- completed successfully with no cross-room contamination observed

- `node scripts/load/reconnect-takeover-test.mjs`
- player disconnect held for `31s`
- AI takeover observed
- reconnect with `sessionId + reconnectToken` restored seat `1`
- test status: `PASS`

## Notes

- The load/reconnect scripts now have hard timeouts and explicit socket cleanup to prevent hanging background jobs.
- Room operations run under a room-scoped mutex, so concurrent actions in the same room are serialized while different rooms remain isolated.
- Reconnect recovery uses both `sessionId` and `reconnectToken`, plus room event replay for missed state changes.
