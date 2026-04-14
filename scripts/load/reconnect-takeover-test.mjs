import { io as createClient } from "socket.io-client";

const SERVER_URL = process.env.LOAD_SERVER_URL || "http://127.0.0.1:3000";
const ROOM_ID = process.env.RECONNECT_ROOM_ID || `reconnect-room-${Date.now()}`;
const HARD_TIMEOUT_MS = Number(process.env.LOAD_TIMEOUT_MS || 75_000);
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

async function waitFor(check, timeoutMs, label) {
  const startedAt = Date.now();
  while ((Date.now() - startedAt) < timeoutMs) {
    const value = check();
    if (value) return value;
    await delay(100);
  }
  throw new Error(`Timeout waiting for ${label}`);
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

async function connectPlayer(name, clientId) {
  const socket = createClient(SERVER_URL, { transports: ["websocket"], forceNew: true });
  sockets.add(socket);
  await once(socket, "connect");
  const roomState = once(socket, "room_state");
  socket.emit("join_room", { roomId: ROOM_ID, name, clientId });
  await roomState;
  return socket;
}

async function connectOnly() {
  const socket = createClient(SERVER_URL, { transports: ["websocket"], forceNew: true });
  sockets.add(socket);
  await once(socket, "connect");
  return socket;
}

async function main() {
  console.log("phase: connect host");
  const host = await connectPlayer("host", "host-1");
  let latestHostRoomState = null;
  host.on("room_state", (payload) => { latestHostRoomState = payload; });
  console.log("phase: connect player");
  const player = await connectPlayer("player", "player-1");

  const hostSeatTaken = once(host, "seat_taken");
  const playerSeatTaken = once(player, "seat_taken");
  const seatSessionPromise = once(player, "seat_session");
  host.emit("take_seat", { seatIdx: 0 });
  player.emit("take_seat", { seatIdx: 1 });
  await hostSeatTaken;
  await playerSeatTaken;

  host.emit("toggle_ai", { seatIdx: 2 });
  await delay(300);
  console.log("phase: start game");
  host.emit("start_game", { totalHands: 2, initialChips: 1000 });
  await delay(1500);

  const seatSession = await seatSessionPromise;
  if (!seatSession?.sessionId || !seatSession?.reconnectToken) {
    throw new Error("Missing seat session payload");
  }

  console.log("phase: disconnect player");
  player.close();
  await delay(31_000);

  console.log("phase: verify ai takeover");
  const observerState = await waitFor(() => {
    const managedSeat = Array.isArray(latestHostRoomState?.seats)
      ? latestHostRoomState.seats.find((seat) => seat?.seatIdx === 1 && seat?.aiManaged)
      : null;
    return managedSeat ? latestHostRoomState : null;
  }, 5_000, "AI takeover room_state");
  const managedSeat = Array.isArray(observerState?.seats)
    ? observerState.seats.find((seat) => seat?.seatIdx === 1)
    : null;
  if (!managedSeat?.aiManaged) {
    throw new Error("Seat did not enter AI takeover mode after disconnect");
  }

  console.log("phase: reconnect player");
  const returning = await connectOnly();
  returning.emit("join_room", {
    roomId: ROOM_ID,
    name: "player",
    clientId: "player-1",
    sessionId: seatSession.sessionId,
    reconnectToken: seatSession.reconnectToken
  });

  console.log("phase: await you_state");
  const youState = await once(returning, "you_state", 10_000);
  if (Number(youState?.seatIdx) !== 1) {
    throw new Error(`Reconnect failed, expected seat 1 but got ${JSON.stringify(youState)}`);
  }

  console.log(JSON.stringify({
    ok: true,
    roomId: ROOM_ID,
    aiTakeover: true,
    reconnectedSeatIdx: youState.seatIdx
  }, null, 2));

  cleanup();
}

const hardTimeout = setTimeout(() => {
  console.error(new Error(`reconnect-takeover-test timed out after ${HARD_TIMEOUT_MS}ms`));
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
