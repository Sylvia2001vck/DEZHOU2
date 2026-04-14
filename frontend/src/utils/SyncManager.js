/**
 * Frame-rate independent exponential smoothing for Three.js objects.
 * View layer only — no WebSocket / Protobuf (see `proto-socket.js` + `docs/three-smooth.md`).
 *
 * @module frontend/src/utils/SyncManager
 */

/**
 * Smooths `mesh` toward server-authoritative targets each frame using
 * `alpha = 1 - exp(-lambda * dt)` (stable across 60 Hz vs 144 Hz).
 */
export class SyncManager {
  /**
   * @param {import('three').Object3D} mesh
   * @param {{ lambda?: number, maxDt?: number }} [options]
   */
  constructor(mesh, options = {}) {
    if (!mesh?.position || !mesh?.quaternion) {
      throw new Error("SyncManager: mesh must be a THREE.Object3D");
    }
    this.mesh = mesh;
    this.lambda = options.lambda ?? 12;
    this.maxDt = options.maxDt ?? 0.05;
    this.targetPosition = mesh.position.clone();
    this.targetQuaternion = mesh.quaternion.clone();
  }

  /**
   * @param {import('three').Vector3} [pos]
   * @param {import('three').Quaternion} [quat]
   */
  setTarget(pos, quat) {
    if (pos) this.targetPosition.copy(pos);
    if (quat) this.targetQuaternion.copy(quat);
  }

  /** @param {import('three').Vector3} v */
  setTargetPosition(v) {
    this.targetPosition.copy(v);
  }

  /** @param {import('three').Quaternion} q */
  setTargetQuaternion(q) {
    this.targetQuaternion.copy(q);
  }

  /**
   * Call once per frame from `requestAnimationFrame` with delta seconds.
   * @param {number} dtSeconds
   */
  update(dtSeconds) {
    const t = Math.min(this.maxDt, Math.max(0, dtSeconds));
    if (t <= 0) return;
    const alpha = 1 - Math.exp(-this.lambda * t);
    this.mesh.position.lerp(this.targetPosition, alpha);
    this.mesh.quaternion.slerp(this.targetQuaternion, alpha);
  }
}

/**
 * Returns a function `() => dtSeconds` capped for tab-background spikes.
 * @param {number} [maxDt]
 * @returns {() => number}
 */
export function createFrameTimer(maxDt = 0.05) {
  let last = performance.now();
  return () => {
    const now = performance.now();
    const dt = Math.min(maxDt, (now - last) / 1000);
    last = now;
    return dt;
  };
}
