# Engine Refactor Plan

This document maps the current `backend-cpp/src/main.cpp` hold'em implementation into a cleaner engine-oriented design that can be extracted incrementally without breaking the existing WebSocket / HTTP gateway.

## Current state

The current `PokerServer` owns:

- room/session transport
- HTTP and gateway framing
- poker state machine
- betting/action legality
- hand evaluation
- pot settlement
- reconnect / AI timers / replay log

This makes correctness changes risky because poker rules and transport side effects are interleaved.

## Target file split

### Stage 1: pure helpers extracted first

- `src/engine/holdem_types.hpp`
  Shared engine value types (`Card`, `HandEval`)
- `src/engine/round_phase.hpp/.cpp`
  Round-phase enum, string conversion, legal next-street transitions
- `src/engine/holdem_evaluator.hpp/.cpp`
  Pure hand evaluation (`evaluate5`, `best_hand`, `compare_hands`)

### Stage 2: domain state extraction

- `src/engine/table_state.hpp`
  Lightweight gameplay-only room state (button, blinds, board, action order, pending actors, betting state, player contributions)
- `src/engine/player_state.hpp`
  In-hand player contribution / fold / all-in / rebuy state
- `src/engine/pot_manager.hpp/.cpp`
  Main-pot + side-pot build and distribution policy, including odd-chip handling
- `src/engine/betting_engine.hpp/.cpp`
  `check/call/raise/all-in/fold`, min-raise updates, re-open logic
- `src/engine/hand_controller.hpp/.cpp`
  Street machine and showdown flow

### Stage 3: adapters around the engine

- `src/adapters/proto_projection.hpp/.cpp`
  Domain state -> `nebula::poker::*`
- `src/adapters/room_snapshot.hpp/.cpp`
  JSON persistence for room snapshots
- `src/adapters/timer_port.hpp`
  AI/turn timers as infrastructure instead of embedded in gameplay state

## Immediate correctness gaps in current main.cpp

Current status after Stage 2 groundwork:

1. Side pots are now built from per-player `hand_contribution` instead of settling from a single flat `room.pot`.
2. `raise` now rejects sub-min-raise requests instead of silently bumping them up.
3. `all-in` above the call amount but below a full raise no longer reopens betting.
4. Split pots now assign odd chips deterministically (left of dealer first).
5. `room.round` still persists as a string in `Room`, but `RoundPhase` helpers now centralize conversions for the main street transitions.

Still remaining:

1. Betting and settlement are still hosted inside `PokerServer`; they are not yet isolated as testable pure classes.
2. Pot breakdown is computed at showdown time; the UI / protocol still only exposes a flat `room.pot` instead of explicit main/side pots.
3. Reconnect, timers, and transport side effects are still interleaved with engine decisions.

## Recommended implementation order

1. Extract pure helpers (`RoundPhase`, evaluator) with no behavior change.
2. Fix min-raise / short-all-in / odd-chip correctness in the existing flow.
3. Introduce a pure `PotManager` and route showdown settlement through it.
4. Extract a `BettingEngine` from `handle_action`.
5. Extract a `HandController` from `reset_hand`, `proceed_to_next_street`, `finish_hand`, `request_turn`.
6. Move transport projection (`broadcast_game`, protobuf messages) behind an adapter layer.

## Definition of done for the engine split

- gameplay logic can be unit-tested without starting sockets
- per-room actions stay single-threaded and deterministic
- full-chip conservation can be asserted for every hand
- short all-ins and side pots are rule-correct
- reconnect and replay consume domain events, not `PokerServer` internals
