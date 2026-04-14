# Three.js smooth sync (handoff)

This document ties together **protocol** (`proto-socket.js`) and **view** (`frontend/src/utils/SyncManager.js`).

## Separation of concerns

| Layer | Responsibility |
|--------|------------------|
| `proto-socket.js` | WebSocket binary frames, `nebula.poker.Envelope` decode/encode, `socket.on(eventName, payload)` |
| `SyncManager.js` | Per-mesh exponential smoothing (`position` + `quaternion` slerp), frame-rate independent `dt` |
| `index.html` (Three.js) | Scene graph; in `animate()`, call `sync.update(dt)` after computing `dt` |

Do **not** import Three.js from `proto-socket.js` — keeps networking testable and matches typical studio boundaries.

## Integration pattern

1. **Create** one `SyncManager` per moving object (chips, pot pile, camera rig, etc.).
2. **Network handlers** only update **targets**:

   ```javascript
   socket.on("game_state", (s) => {
     // derive world position from server state, then:
     chipSync.setTargetPosition(targetVec3);
     // optional: chipSync.setTargetQuaternion(targetQuat);
   });
   ```

3. **Render loop** applies smoothing:

   ```javascript
   import { SyncManager, createFrameTimer } from "./frontend/src/utils/SyncManager.js";

   const nextDt = createFrameTimer(0.05);
   const registry = [chipSync, tableSync];

   function animate() {
     requestAnimationFrame(animate);
     const dt = nextDt();
     for (const s of registry) s.update(dt);
     renderer.render(scene, camera);
   }
   ```

4. **`index.html`** already imports `SyncManager`, registers at least one instance (table group) and ticks all entries in `animate()` so the wiring is **executable** without changing gameplay until you call `setTarget*()` from handlers.

## Server clock skew (optional)

If you later add **server timestamps** inside `Envelope` or payloads, compute `dt` for animation as `clientNow - interpolatedServerTime` instead of raw frame delta for lockstep-feel. Until then, **local `performance.now()` delta** is sufficient for visual smoothing.

## See also

- `backend-cpp/README.md` — Performance & scalability notes (same exponential smoothing formula).
