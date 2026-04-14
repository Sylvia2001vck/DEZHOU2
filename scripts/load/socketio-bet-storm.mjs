import { io as createClient } from "socket.io-client";

const SERVER_URL = process.env.LOAD_SERVER_URL || "http://127.0.0.1:3000";
const PLAYER_COUNT = Number(process.env.LOAD_PLAYER_COUNT || 10);
const ROOM_PREFIX = process.env.LOAD_ROOM_PREFIX || `storm-room-${Date.now()}`;
const HARD_TIMEOUT_MS = Number(process.env.LOAD_TIMEOUT_MS || 45_000);
const sockets = new Set();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cleanup() {
  for (const socket of sockets) {
    try { socket.close(); } catch (_) {}
  }
  sockets.clear();
}

async function once(socket, eventName, timeoutMs = 10_000) {
  return await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timeout waiting for ${eventName}`)), timeoutMs);
    socket.once(eventName, (payload) => {
      clearTimeout(timer);
      resolve(payload);
    });
  });
}

async function makePlayer(index, roomId) {
  const socket = createClient(SERVER_URL, { transports: ["websocket"], forceNew: true });
  sockets.add(socket);
  await once(socket, "connect");
  const roomState = once(socket, "room_state");
  socket.emit("join_room", {
    roomId,
    name: `load-${index}`,
    clientId: `load-client-${index}`
  });
  await roomState;
  const seatTaken = once(socket, "seat_taken");
  socket.emit("take_seat", { seatIdx: index });
  await seatTaken;
  return socket;
}

async function main() {
  const roomA = `${ROOM_PREFIX}-a`;
  const roomB = `${ROOM_PREFIX}-b`;
  const half = Math.floor(PLAYER_COUNT / 2);
  const sockets = [];

  for (let i = 0; i < PLAYER_COUNT; i++) {
    const roomId = i < half ? roomA : roomB;
    sockets.push(await makePlayer(i % 5, roomId));
  }

  const hostA = sockets[0];
  const hostB = sockets[half];
  hostA.emit("start_game", { totalHands: 3, initialChips: 1000 });
  hostB.emit("start_game", { totalHands: 3, initialChips: 1000 });

  await delay(1500);

  for (const socket of sockets) {
    socket.emit("action", { type: "call" });
  }

  await delay(2500);

  console.log(JSON.stringify({
    ok: true,
    rooms: [roomA, roomB],
    players: PLAYER_COUNT,
    note: "Inspect server logs and room_state/game_state snapshots to verify no cross-room contamination."
  }, null, 2));

  cleanup();
}

const hardTimeout = setTimeout(() => {
  console.error(new Error(`socketio-bet-storm timed out after ${HARD_TIMEOUT_MS}ms`));
  cleanup();
  process.exit(1);
}, HARD_TIMEOUT_MS);

main().then(() => {
  clearTimeout(hardTimeout);
  cleanup();
  process.exit(0);
}).catch((err) => {
  clearTimeout(hardTimeout);
  console.error(err);
  cleanup();
  process.exit(1);
});
