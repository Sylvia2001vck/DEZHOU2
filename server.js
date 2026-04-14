import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { Mutex } from "async-mutex";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const SEATS = 10;
const TURN_TIMEOUT_MS = Math.max(5000, Number(process.env.TURN_TIMEOUT_MS || 25000));
const SNAPSHOT_DIR = path.join(__dirname, ".runtime", "rooms");
const SNAPSHOT_FLUSH_MS = 75;
const EMPTY_ROOM_TTL_MS = 3 * 60 * 60 * 1000;
const UNSTARTED_ROOM_TTL_MS = 20 * 60 * 1000;
const DISCONNECTED_SEAT_TTL_MS = 15 * 60 * 1000;
const SESSION_TTL_MS = 5 * 60 * 1000;
const AI_TAKEOVER_DELAY_MS = 30 * 1000;
const ROOM_EVENT_LOG_LIMIT = 600;
const MAX_VOICE_PARTICIPANTS = 6;
const HTTP_RATE_LIMIT = { windowMs: 10_000, max: 120 };
const SOCKET_RATE_LIMIT = {
  join_room: { windowMs: 10_000, max: 12 },
  take_seat: { windowMs: 10_000, max: 18 },
  action: { windowMs: 5_000, max: 30 },
  voice_signal: { windowMs: 5_000, max: 180 },
  default: { windowMs: 10_000, max: 80 }
};

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: true,
    credentials: true
  }
});

// Serve the single-page frontend
app.get("/healthz", (_req, res) => res.status(200).send("ok"));
app.get("/readyz", (_req, res) => res.status(200).json({ ok: true }));

// Minimal request logging (helps debug Railway "failed to respond")
app.use((req, _res, next) => {
  // avoid noisy logs for socket polling
  if (!req.path.startsWith("/socket.io")) {
    console.log(`[HTTP] ${req.method} ${req.path}`);
  }
  next();
});

app.get("/", (_req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.use(express.static(__dirname));

/** @type {Map<string, Room>} */
const rooms = new Map();
const playerSessions = new Map();
const httpRateBuckets = new Map();
const socketRateBuckets = new Map();
const roomsCatalogMutex = new Mutex();
let snapshotDirReady = false;

function pruneRateBucketStore(store, thresholdMs = 60_000) {
  const ts = now();
  for (const [key, bucket] of store.entries()) {
    if (!bucket || (ts - Number(bucket.resetAt || 0)) > thresholdMs) store.delete(key);
  }
}

function consumeRateLimit(store, key, windowMs, max) {
  const ts = now();
  let bucket = store.get(key);
  if (!bucket || ts >= bucket.resetAt) {
    bucket = { count: 0, resetAt: ts + windowMs };
  }
  bucket.count += 1;
  store.set(key, bucket);
  return bucket.count <= max;
}

function getClientIp(reqOrSocket) {
  const raw = reqOrSocket?.headers?.["x-forwarded-for"]
    || reqOrSocket?.handshake?.headers?.["x-forwarded-for"]
    || reqOrSocket?.socket?.remoteAddress
    || reqOrSocket?.handshake?.address
    || reqOrSocket?.conn?.remoteAddress
    || "unknown";
  return String(raw).split(",")[0].trim() || "unknown";
}

app.use((req, res, next) => {
  const ip = getClientIp(req);
  const ok = consumeRateLimit(httpRateBuckets, ip, HTTP_RATE_LIMIT.windowMs, HTTP_RATE_LIMIT.max);
  if (!ok) {
    res.status(429).json({ ok: false, error: "Too many requests" });
    return;
  }
  next();
});

// Auto release empty rooms and expire disconnected seat reservations.
setInterval(() => {
  const ts = now();
  for (const room of rooms.values()) {
    if (room.closing) continue;
    for (let i = 0; i < SEATS; i++) {
      const seat = room.seats[i];
      if (!seat || seat.type !== "player" || !seat.disconnectedAt) continue;
      if ((ts - seat.disconnectedAt) <= DISCONNECTED_SEAT_TTL_MS) continue;
      if (room.started) {
        const p = getPlayer(room, i);
        if (p) p.sitOutUntilHand = Math.max(Number(p.sitOutUntilHand || 0), (room.handNum || 0) + 1);
      } else {
        room.seats[i] = null;
        room.players.delete(i);
      }
      seat.disconnectedAt = null;
      touchRoom(room);
    }
    if (!room.emptySince) continue;
    const ttlMs = room.started ? EMPTY_ROOM_TTL_MS : UNSTARTED_ROOM_TTL_MS;
    if (ts - room.emptySince > ttlMs) {
      try { rooms.delete(room.roomId); } catch (_) {}
      void deleteRoomSnapshot(room.roomId);
    }
  }
  pruneRateBucketStore(httpRateBuckets, 120_000);
  pruneRateBucketStore(socketRateBuckets, 120_000);
  pruneExpiredSessions();
}, 60 * 1000);

function now() {
  return Date.now();
}

function randomToken(bytes = 24) {
  return crypto.randomBytes(bytes).toString("base64url");
}

function randomIntInclusive(maxExclusive) {
  return crypto.randomInt(0, maxExclusive);
}

function sanitizeSeq(seq) {
  return Math.max(0, Number(seq || 0));
}

function getOrCreatePlayerSession(sessionId, seed = {}) {
  const id = String(sessionId || "").trim() || randomToken(18);
  let session = playerSessions.get(id);
  if (!session) {
    session = {
      sessionId: id,
      roomId: null,
      seatIdx: null,
      playerName: null,
      clientId: null,
      reconnectToken: null,
      lastSeenSeqByRoom: {},
      lastDisconnectAt: null,
      expiresAt: now() + SESSION_TTL_MS,
      aiTakeoverAt: null,
      isAiManaged: false
    };
    playerSessions.set(id, session);
  }
  Object.assign(session, seed || {});
  session.expiresAt = now() + SESSION_TTL_MS;
  return session;
}

function pruneExpiredSessions() {
  const ts = now();
  for (const [sessionId, session] of playerSessions.entries()) {
    if (Number(session.expiresAt || 0) > ts) continue;
    playerSessions.delete(sessionId);
  }
}

async function ensureSnapshotDir() {
  if (snapshotDirReady) return;
  await fs.mkdir(SNAPSHOT_DIR, { recursive: true });
  snapshotDirReady = true;
}

function snapshotPath(roomId) {
  return path.join(SNAPSHOT_DIR, `${String(roomId)}.json`);
}

function serializeRoom(room) {
  return {
    roomId: room.roomId,
    createdAt: room.createdAt,
    lastActiveAt: room.lastActiveAt,
    emptySince: room.emptySince,
    hostSocketId: null,
    seats: room.seats.map((seat) => {
      if (!seat) return null;
      if (seat.type === "ai") return { type: "ai", name: seat.name };
      return {
        type: "player",
        socketId: null,
        name: seat.name,
        clientId: seat.clientId || null,
        sessionId: seat.sessionId || null,
        reconnectToken: seat.reconnectToken || null,
        disconnectedAt: seat.disconnectedAt || null,
        decor: seat.decor || "none",
        aiManaged: !!seat.aiManaged,
        aiTakeoverAt: seat.aiTakeoverAt || null
      };
    }),
    started: room.started,
    totalHands: room.totalHands,
    initialChips: room.initialChips,
    smallBlind: room.smallBlind,
    bigBlind: room.bigBlind,
    handNum: room.handNum,
    dealerSeatIdx: room.dealerSeatIdx,
    sbSeatIdx: room.sbSeatIdx,
    bbSeatIdx: room.bbSeatIdx,
    pot: room.pot,
    round: room.round,
    communityCards: room.communityCards,
    deck: room.deck,
    currentMaxBet: room.currentMaxBet,
    minRaise: room.minRaise,
    activeSeatIdx: room.activeSeatIdx,
    pendingActionSeats: [...room.pendingActionSeats],
    players: [...room.players.entries()],
    turnNonce: room.turnNonce,
    lastActorSeatIdx: room.lastActorSeatIdx,
    handHistory: room.handHistory,
    activityLog: room.activityLog,
    turnExpiresAt: room.turnExpiresAt || null,
    eventSeq: room.eventSeq || 0,
    eventLog: Array.isArray(room.eventLog) ? room.eventLog : []
  };
}

function inflateRoom(data) {
  const room = makeRoom(String(data.roomId || randomToken(6)));
  room.createdAt = Number(data.createdAt || now());
  room.lastActiveAt = Number(data.lastActiveAt || now());
  room.emptySince = Number.isFinite(Number(data.emptySince)) ? Number(data.emptySince) : now();
  room.hostSocketId = null;
  room.seats = Array.from({ length: SEATS }, (_, i) => {
    const seat = Array.isArray(data.seats) ? data.seats[i] : null;
    if (!seat) return null;
    if (seat.type === "ai") return { type: "ai", name: seat.name || `AI-${i}` };
    return {
      type: "player",
      socketId: null,
      name: seat.name || "Player",
      clientId: seat.clientId || null,
      sessionId: seat.sessionId || null,
      reconnectToken: seat.reconnectToken || null,
      disconnectedAt: seat.disconnectedAt || now(),
      decor: seat.decor || "none",
      aiManaged: !!seat.aiManaged,
      aiTakeoverAt: Number.isFinite(Number(seat.aiTakeoverAt)) ? Number(seat.aiTakeoverAt) : null
    };
  });
  room.started = !!data.started;
  room.totalHands = Math.max(1, Number(data.totalHands || 5));
  room.initialChips = Math.max(1000, Number(data.initialChips || 1000));
  room.smallBlind = Math.max(1, Number(data.smallBlind || 50));
  room.bigBlind = Math.max(room.smallBlind, Number(data.bigBlind || 100));
  room.handNum = Math.max(0, Number(data.handNum || 0));
  room.dealerSeatIdx = Number.isInteger(data.dealerSeatIdx) ? data.dealerSeatIdx : 0;
  room.sbSeatIdx = Number.isInteger(data.sbSeatIdx) ? data.sbSeatIdx : null;
  room.bbSeatIdx = Number.isInteger(data.bbSeatIdx) ? data.bbSeatIdx : null;
  room.pot = Math.max(0, Number(data.pot || 0));
  room.round = String(data.round || "WAITING");
  room.communityCards = Array.isArray(data.communityCards) ? data.communityCards.slice(0, 5) : [];
  room.deck = Array.isArray(data.deck) ? data.deck.slice(0) : [];
  room.currentMaxBet = Math.max(0, Number(data.currentMaxBet || 0));
  room.minRaise = Math.max(1, Number(data.minRaise || room.bigBlind));
  room.activeSeatIdx = Number.isInteger(data.activeSeatIdx) ? data.activeSeatIdx : null;
  room.pendingActionSeats = new Set(Array.isArray(data.pendingActionSeats) ? data.pendingActionSeats : []);
  room.players = new Map(Array.isArray(data.players) ? data.players : []);
  room.turnNonce = Math.max(0, Number(data.turnNonce || 0));
  room.lastActorSeatIdx = Number.isInteger(data.lastActorSeatIdx) ? data.lastActorSeatIdx : null;
  room.handHistory = Array.isArray(data.handHistory) ? data.handHistory : [];
  room.activityLog = Array.isArray(data.activityLog) ? data.activityLog : [];
  room.turnExpiresAt = Number.isFinite(Number(data.turnExpiresAt)) ? Number(data.turnExpiresAt) : null;
  room.eventSeq = sanitizeSeq(data.eventSeq);
  room.eventLog = Array.isArray(data.eventLog) ? data.eventLog.slice(-ROOM_EVENT_LOG_LIMIT) : [];
  room.socketIds = new Set();
  room.voice.participants = new Map();
  room.expectedAcks = new Set();
  room.matchAcks = new Set();
  room.emptySince = now();
  return room;
}

async function flushRoomSnapshot(room) {
  if (!room) return;
  room.snapshotTimer = null;
  room.snapshotInFlight = true;
  try {
    await ensureSnapshotDir();
    await fs.writeFile(snapshotPath(room.roomId), JSON.stringify(serializeRoom(room), null, 2), "utf8");
  } catch (e) {
    console.warn("[snapshot] flush failed:", e?.message || e);
  } finally {
    room.snapshotInFlight = false;
    if (room.snapshotQueued) {
      room.snapshotQueued = false;
      room.snapshotTimer = setTimeout(() => { void flushRoomSnapshot(room); }, SNAPSHOT_FLUSH_MS);
    }
  }
}

function touchRoom(room) {
  if (!room) return;
  room.lastActiveAt = now();
  if (room.snapshotInFlight) {
    room.snapshotQueued = true;
    return;
  }
  if (room.snapshotTimer) return;
  room.snapshotTimer = setTimeout(() => { void flushRoomSnapshot(room); }, SNAPSHOT_FLUSH_MS);
}

function touchPlayerSession(sessionId, patch = {}) {
  if (!sessionId) return null;
  const session = getOrCreatePlayerSession(sessionId);
  Object.assign(session, patch || {});
  session.expiresAt = now() + SESSION_TTL_MS;
  return session;
}

function appendRoomEvent(room, eventName, payload, options = {}) {
  if (!room) return 0;
  room.eventSeq = sanitizeSeq(room.eventSeq) + 1;
  if (!Array.isArray(room.eventLog)) room.eventLog = [];
  room.eventLog.push({
    seq: room.eventSeq,
    eventName,
    payload,
    seatIdx: Number.isInteger(options.seatIdx) ? options.seatIdx : null,
    sessionId: options.sessionId || null,
    createdAt: now()
  });
  if (room.eventLog.length > ROOM_EVENT_LOG_LIMIT) {
    room.eventLog.splice(0, room.eventLog.length - ROOM_EVENT_LOG_LIMIT);
  }
  return room.eventSeq;
}

function markDelivered(room, seq, seatIdx = null, socketId = null) {
  if (!room || !seq) return;
  if (Number.isInteger(seatIdx)) {
    const seat = room.seats?.[seatIdx];
    if (seat?.sessionId) {
      const session = touchPlayerSession(seat.sessionId);
      if (session) session.lastSeenSeqByRoom[room.roomId] = Math.max(sanitizeSeq(session.lastSeenSeqByRoom[room.roomId]), seq);
    }
    return;
  }
  const ids = socketId ? [socketId] : [...(room.socketIds || [])];
  for (const sid of ids) {
    const sock = io.sockets.sockets.get(sid);
    const sessionId = sock?.data?.sessionId;
    if (!sessionId) continue;
    const session = touchPlayerSession(sessionId);
    if (!session) continue;
    session.lastSeenSeqByRoom[room.roomId] = Math.max(sanitizeSeq(session.lastSeenSeqByRoom[room.roomId]), seq);
  }
}

function emitRoomEvent(room, eventName, payload) {
  const seq = appendRoomEvent(room, eventName, payload);
  io.to(room.roomId).emit(eventName, payload);
  markDelivered(room, seq);
}

function emitSeatEvent(room, seatIdx, eventName, payload) {
  const seat = room?.seats?.[seatIdx];
  if (!seat) return;
  const seq = appendRoomEvent(room, eventName, payload, { seatIdx });
  if (seat.socketId) io.to(seat.socketId).emit(eventName, payload);
  markDelivered(room, seq, seatIdx);
}

function emitSocketRoomEvent(socket, room, eventName, payload, options = {}) {
  const seq = appendRoomEvent(room, eventName, payload, options);
  socket.emit(eventName, payload);
  markDelivered(room, seq, null, socket.id);
}

function replayMissedRoomEvents(socket, room, seatIdx = null) {
  const sessionId = socket?.data?.sessionId;
  if (!sessionId || !room || !Array.isArray(room.eventLog)) return;
  const session = touchPlayerSession(sessionId);
  if (!session) return;
  const lastSeen = sanitizeSeq(session.lastSeenSeqByRoom?.[room.roomId]);
  for (const entry of room.eventLog) {
    if (!entry || sanitizeSeq(entry.seq) <= lastSeen) continue;
    if (Number.isInteger(entry.seatIdx) && entry.seatIdx !== seatIdx) continue;
    socket.emit(entry.eventName, entry.payload);
    session.lastSeenSeqByRoom[room.roomId] = sanitizeSeq(entry.seq);
  }
}

function scheduleAiTakeover(room, seatIdx) {
  const seat = room?.seats?.[seatIdx];
  if (!seat || seat.type !== "player") return;
  if (seat.aiTakeoverTimer) clearTimeout(seat.aiTakeoverTimer);
  seat.aiTakeoverTimer = setTimeout(() => {
    const currentRoom = rooms.get(room.roomId);
    const currentSeat = currentRoom?.seats?.[seatIdx];
    if (!currentRoom || !currentSeat || currentSeat.type !== "player") return;
    if (currentSeat.socketId && io.sockets.sockets.has(currentSeat.socketId)) return;
    currentSeat.aiManaged = true;
    currentSeat.aiTakeoverAt = now();
    if (currentSeat.sessionId) {
      touchPlayerSession(currentSeat.sessionId, { aiTakeoverAt: currentSeat.aiTakeoverAt, isAiManaged: true });
    }
    broadcastActivity(currentRoom, `${currentSeat.name} disconnected for 30s. AI takeover enabled.`);
    broadcastRoom(currentRoom);
    broadcastGame(currentRoom);
    requestTurn(currentRoom);
    touchRoom(currentRoom);
  }, AI_TAKEOVER_DELAY_MS);
}

function cancelAiTakeover(seat) {
  if (!seat) return;
  if (seat.aiTakeoverTimer) clearTimeout(seat.aiTakeoverTimer);
  seat.aiTakeoverTimer = null;
  seat.aiManaged = false;
  seat.aiTakeoverAt = null;
}

async function runRoomExclusive(room, work) {
  if (!room?.mutex) return await work();
  return await room.mutex.runExclusive(work);
}

async function deleteRoomSnapshot(roomId) {
  try {
    await ensureSnapshotDir();
    await fs.rm(snapshotPath(roomId), { force: true });
  } catch (_) {}
}

async function restoreSnapshots() {
  try {
    await ensureSnapshotDir();
    const files = await fs.readdir(SNAPSHOT_DIR);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      try {
        const raw = await fs.readFile(path.join(SNAPSHOT_DIR, file), "utf8");
        const parsed = JSON.parse(raw);
        const room = inflateRoom(parsed);
        rooms.set(room.roomId, room);
      } catch (e) {
        console.warn("[snapshot] restore failed:", e?.message || e);
      }
    }
  } catch (e) {
    console.warn("[snapshot] restore bootstrap failed:", e?.message || e);
  }
}

async function releaseRoom(room) {
  const rid = room.roomId;
  if (room.closeTimer) {
    try { clearTimeout(room.closeTimer); } catch (_) {}
    room.closeTimer = null;
  }
  try { clearTimeout(room.turnTimer); } catch (_) {}
  try { clearTimeout(room.snapshotTimer); } catch (_) {}
  try {
    // Evict all connected sockets from this room so they don't see stale state.
    const sockets = await io.in(rid).fetchSockets();
    for (const s of sockets) {
      try {
        s.data.roomId = null;
        s.data.seatIdx = null;
        s.data.voiceJoined = false;
        s.emit("room_closed", { roomId: rid, reason: "match_over" });
        s.leave(rid);
      } catch (_) {}
    }
  } catch (e) {
    console.warn("[releaseRoom] fetchSockets failed:", e?.message || e);
  }
  rooms.delete(rid);
  await deleteRoomSnapshot(rid);
}

function makeRoom(roomId) {
  /** @type {Room} */
  const room = {
    roomId,
    createdAt: now(),
    lastActiveAt: now(),
    emptySince: now(),
    socketIds: new Set(),
    hostSocketId: null,
    seats: Array.from({ length: SEATS }, () => null),
    started: false,

    // settings (host-controlled)
    totalHands: 5,
    initialChips: 1000,
    smallBlind: 50,
    bigBlind: 100,

    // game state
    handNum: 0,
    dealerSeatIdx: 0,
    sbSeatIdx: null,
    bbSeatIdx: null,
    pot: 0,
    round: "WAITING", // WAITING | PRE-FLOP | FLOP | TURN | RIVER | SHOWDOWN
    communityCards: [],
    deck: [],
    currentMaxBet: 0,
    minRaise: 100,
    activeSeatIdx: null,
    pendingActionSeats: new Set(), // seatIdx that still must act to close action
    players: new Map(), // seatIdx -> PlayerState

    // processing
    turnNonce: 0,
    aiTimer: null,
    turnTimer: null,
    turnExpiresAt: null,
    lastActorSeatIdx: null,

    // voice (signaling only; media is P2P)
    voice: {
      participants: new Map() // socketId -> { socketId, seatIdx, name }
    },

    // match summary
    handHistory: [], // [{handNum, winners:[{seatIdx,name}], desc}]
    activityLog: [], // recent activity strings (for reconnect sync)
    closing: false,
    closeTimer: null,
    expectedAcks: new Set(),
    matchAcks: new Set(),
    snapshotTimer: null,
    snapshotInFlight: false,
    snapshotQueued: false,
    eventSeq: 0,
    eventLog: [],
    mutex: new Mutex()
  };
  return room;
}

function buildStandings(room) {
  const out = [];
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat) continue;
    const p = getPlayer(room, i);
    const buyIn = p && Number.isFinite(p.totalBuyIn) ? p.totalBuyIn : (Number.isFinite(room.initialChips) ? room.initialChips : 1000);
    const chips = p ? p.chips : 0;
    out.push({
      seatIdx: i,
      type: seat.type,
      name: seat.name,
      chips,
      buyIn,
      net: chips - buyIn
    });
  }
  out.sort((a, b) => (b.chips || 0) - (a.chips || 0));
  return out;
}

async function emitMatchOverAndEnterClosing(room, reason) {
  // If already closing, don't re-emit
  if (room.closing) return;

  // stop any pending AI timers
  try { clearTimeout(room.aiTimer); } catch (_) {}
  room.aiTimer = null;

  if (reason) {
    try { broadcastActivity(room, String(reason)); } catch (_) {}
  }
  broadcastActivity(room, "Match over.");

  const standings = buildStandings(room);
  const hands = Array.isArray(room.handHistory) ? room.handHistory.slice(0) : [];
  emitRoomEvent(room, "match_over", {
    roomId: room.roomId,
    totalHands: room.totalHands, // scheduled
    scheduledHands: room.totalHands,
    playedHands: hands.length,
    standings,
    hands
  });

  room.closing = true;
  room.started = false;
  room.round = "WAITING";
  room.activeSeatIdx = null;
  room.pendingActionSeats = new Set();

  // Track currently connected sockets for ack-based release
  room.expectedAcks = new Set();
  room.matchAcks = new Set();
  try {
    const socks = await io.in(room.roomId).fetchSockets();
    room.expectedAcks = new Set(socks.map((s) => s.id));
  } catch (_) {}
}

function seatToPublic(seat, seatIdx) {
  if (!seat) return null;
  const decor = seat.decor || "none";
  if (seat.type === "ai") return { type: "ai", seatIdx, name: seat.name, decor };
  return { type: "player", seatIdx, name: seat.name, decor, aiManaged: !!seat.aiManaged, disconnectedAt: seat.disconnectedAt || null };
}

function getRoomSummary(room, forSocketId) {
  const hostSeatIdx = room.seats.findIndex(
    (s) => s && s.type === "player" && s.socketId === room.hostSocketId
  );
  return {
    roomId: room.roomId,
    hostSocketId: room.hostSocketId,
    hostSeatIdx: hostSeatIdx >= 0 ? hostSeatIdx : null,
    // broadcast 时不携带真假（否则会把 host 的 UI 覆盖成 false）；客户端用 hostSocketId vs socket.id 自行计算
    isHost: forSocketId ? forSocketId === room.hostSocketId : null,
    started: room.started,
    seats: room.seats.map((s, i) => seatToPublic(s, i)),
    settings: { totalHands: room.totalHands, initialChips: room.initialChips }
  };
}

function isSeatOccupied(room, seatIdx) {
  return !!room.seats[seatIdx];
}

function getPlayer(room, seatIdx) {
  return room.players.get(seatIdx) || null;
}

function issueSeatSession(socket, room, seatIdx) {
  const seat = room?.seats?.[seatIdx];
  if (!socket || !room || !seat || seat.type !== "player") return;
  if (!seat.reconnectToken) seat.reconnectToken = randomToken(32);
  if (!seat.sessionId) seat.sessionId = socket.data.sessionId || randomToken(18);
  const session = touchPlayerSession(seat.sessionId, {
    roomId: room.roomId,
    seatIdx,
    playerName: seat.name,
    clientId: seat.clientId || null,
    reconnectToken: seat.reconnectToken,
    aiTakeoverAt: null,
    isAiManaged: !!seat.aiManaged
  });
  socket.data.sessionId = seat.sessionId;
  socket.emit("seat_session", {
    roomId: room.roomId,
    seatIdx,
    reconnectToken: seat.reconnectToken,
    sessionId: seat.sessionId,
    lastSeenSeq: sanitizeSeq(session?.lastSeenSeqByRoom?.[room.roomId])
  });
}

function isSeatEligible(room, seatIdx) {
  const seat = room.seats[seatIdx];
  if (!seat) return false;
  // Disconnected player seats are not eligible (prevents SB/BB/turn from stalling on offline players).
  if (seat.type === "player") {
    const sid = seat.socketId;
    const online = !!sid && io.sockets.sockets.has(sid);
    if (!online && !seat.aiManaged) return false;
  }
  const p = getPlayer(room, seatIdx);
  if (!p) return false;
  const sitOut = Number.isFinite(p.sitOutUntilHand) && p.sitOutUntilHand > room.handNum;
  return !p.isBankrupt && p.chips > 0 && !sitOut;
}

function getInHandSeats(room) {
  const out = [];
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat) continue;
    if (seat.type === "player") {
      const sid = seat.socketId;
      const online = !!sid && io.sockets.sockets.has(sid);
      if (!online && !seat.aiManaged) continue;
    }
    const p = getPlayer(room, i);
    if (!p) continue;
    const sitOut = Number.isFinite(p.sitOutUntilHand) && p.sitOutUntilHand > room.handNum;
    if (!p.isFolded && !p.isBankrupt && !sitOut) out.push(i);
  }
  return out;
}

function getActableSeats(room) {
  const out = [];
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat) continue;
    if (seat.type === "player") {
      const sid = seat.socketId;
      const online = !!sid && io.sockets.sockets.has(sid);
      if (!online && !seat.aiManaged) continue;
    }
    const p = getPlayer(room, i);
    if (!p) continue;
    const sitOut = Number.isFinite(p.sitOutUntilHand) && p.sitOutUntilHand > room.handNum;
    if (!p.isFolded && !p.isBankrupt && p.chips > 0 && !sitOut) out.push(i);
  }
  return out;
}

function nextSeatClockwise(room, fromSeatIdx, predicate) {
  for (let step = 1; step <= SEATS; step++) {
    const idx = (fromSeatIdx + step) % SEATS;
    if (predicate(idx)) return idx;
  }
  return null;
}

function getActiveOffset(room, startSeatIdx, offset) {
  let count = 0;
  let idx = startSeatIdx;
  let loops = 0;
  const maxLoops = SEATS * 3;
  while (count < offset && loops < maxLoops) {
    idx = (idx + 1) % SEATS;
    if (isSeatEligible(room, idx)) count++;
    loops++;
  }
  return idx;
}

function broadcastRoom(room) {
  emitRoomEvent(room, "room_state", getRoomSummary(room, null));
}

function broadcastActivity(room, msg) {
  try {
    if (!Array.isArray(room.activityLog)) room.activityLog = [];
    room.activityLog.push(String(msg));
    if (room.activityLog.length > 250) room.activityLog.splice(0, room.activityLog.length - 250);
  } catch (_) {}
  emitRoomEvent(room, "activity", msg);
}

function broadcastPlayerAction(room, seatIdx, text) {
  emitRoomEvent(room, "player_action", { seatIdx, text });
}

function broadcastGame(room) {
  const state = getPublicGameState(room);
  emitRoomEvent(room, "game_state", state);
}

function getPublicGameState(room) {
  const players = [];
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat) continue;
    const p = getPlayer(room, i);
    if (!p) continue;
    players.push({
      seatIdx: i,
      name: seat.name,
      type: seat.type,
      aiManaged: !!seat.aiManaged,
      chips: p.chips,
      currentBet: p.currentBet,
      isFolded: p.isFolded,
      isBankrupt: p.isBankrupt,
      totalBuyIn: Number.isFinite(p.totalBuyIn) ? p.totalBuyIn : (Number.isFinite(room.initialChips) ? room.initialChips : 1000)
    });
  }
  return {
    roomId: room.roomId,
    started: room.started,
    settings: { totalHands: room.totalHands, initialChips: room.initialChips, smallBlind: room.smallBlind, bigBlind: room.bigBlind },
    handNum: room.handNum,
    dealerSeatIdx: room.dealerSeatIdx,
    sbSeatIdx: room.sbSeatIdx,
    bbSeatIdx: room.bbSeatIdx,
    activeSeatIdx: room.activeSeatIdx,
    pot: room.pot,
    round: room.round,
    turnExpiresAt: room.turnExpiresAt,
    communityCards: room.communityCards,
    currentMaxBet: room.currentMaxBet,
    minRaise: room.minRaise,
    players
  };
}

// --- Cards / Hand evaluation (ported from your frontend) ---
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["hearts", "diamonds", "clubs", "spades"];

function freshDeck() {
  const deck = [];
  for (const s of SUITS) for (const r of RANKS) deck.push({ s, r, v: RANKS.indexOf(r) });
  for (let i = deck.length - 1; i > 0; i--) {
    const j = randomIntInclusive(i + 1);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function combinations(arr, k) {
  const results = [];
  const combine = (start, combo) => {
    if (combo.length === k) {
      results.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  };
  combine(0, []);
  return results;
}

function evaluate5(cards) {
  const sorted = [...cards].sort((a, b) => b.v - a.v);
  const ranks = sorted.map((c) => c.v);
  const suits = sorted.map((c) => c.s);
  const isFlush = suits.every((s) => s === suits[0]);

  // straight (with wheel)
  let isStraight = false;
  let straightMax = 0;
  const uniqueRanks = [...new Set(ranks)];
  if (uniqueRanks.length === 5) {
    if (ranks[0] - ranks[4] === 4) {
      isStraight = true;
      straightMax = ranks[0];
    } else if (ranks[0] === 14 && ranks[1] === 5 && ranks[4] === 2) {
      isStraight = true;
      straightMax = 5;
    }
  }

  const counts = {};
  ranks.forEach((r) => (counts[r] = (counts[r] || 0) + 1));
  const freq = Object.values(counts).sort((a, b) => b - a);
  const rankByFreq = Object.keys(counts)
    .map(Number)
    .sort((a, b) => {
      if (counts[b] !== counts[a]) return counts[b] - counts[a];
      return b - a;
    });

  if (isFlush && isStraight) {
    if (straightMax === 14) return { rank: 10, value: [14], desc: "Royal Flush" };
    return { rank: 9, value: [straightMax], desc: "Straight Flush" };
  }
  if (freq[0] === 4) return { rank: 8, value: [rankByFreq[0], rankByFreq[1]], desc: "Four of a Kind" };
  if (freq[0] === 3 && freq[1] === 2) return { rank: 7, value: [rankByFreq[0], rankByFreq[1]], desc: "Full House" };
  if (isFlush) return { rank: 6, value: ranks, desc: "Flush" };
  if (isStraight) return { rank: 5, value: [straightMax], desc: "Straight" };
  if (freq[0] === 3) return { rank: 4, value: [rankByFreq[0], rankByFreq[1], rankByFreq[2]], desc: "Three of a Kind" };
  if (freq[0] === 2 && freq[1] === 2) return { rank: 3, value: [rankByFreq[0], rankByFreq[1], rankByFreq[2]], desc: "Two Pair" };
  if (freq[0] === 2) return { rank: 2, value: [rankByFreq[0], rankByFreq[1], rankByFreq[2], rankByFreq[3]], desc: "One Pair" };
  return { rank: 1, value: ranks, desc: "High Card" };
}

function compareHands(h1, h2) {
  if (h1.rank !== h2.rank) return h1.rank - h2.rank;
  for (let i = 0; i < h1.value.length; i++) {
    if (h1.value[i] !== h2.value[i]) return h1.value[i] - h2.value[i];
  }
  return 0;
}

function getBestHand(sevenCards) {
  const combos = combinations(sevenCards, 5);
  let best = null;
  for (const combo of combos) {
    const evalResult = evaluate5(combo);
    if (!best || compareHands(evalResult, best) > 0) best = evalResult;
  }
  return best;
}

// --- Game mechanics ---
function resetHand(room) {
  room.handNum += 1;
  room.pot = 0;
  room.round = "PRE-FLOP";
  room.communityCards = [];
  room.deck = freshDeck();
  room.currentMaxBet = 0;
  room.pendingActionSeats = new Set();
  room.turnNonce += 1;
  room.turnExpiresAt = null;
  try { clearTimeout(room.turnTimer); } catch (_) {}
  room.turnTimer = null;

  // Reset players
  for (const [seatIdx, p] of room.players.entries()) {
    p.hand = [];
    p.currentBet = 0;
    const sitOut = Number.isFinite(p.sitOutUntilHand) && p.sitOutUntilHand > room.handNum;
    const seat = room.seats[seatIdx];
    const disconnected =
      seat &&
      seat.type === "player" &&
      (!seat.socketId || !io.sockets.sockets.has(seat.socketId));
    p.isFolded = p.chips <= 0 || sitOut || disconnected;
    p.isBankrupt = p.chips <= 0;
    p.totalCommitted = 0;
  }
}

function ensurePlayersMap(room) {
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat) continue;
    if (!room.players.has(i)) {
      room.players.set(i, {
        seatIdx: i,
        chips: Number.isFinite(room.initialChips) ? room.initialChips : 1000,
        currentBet: 0,
        isFolded: false,
        isBankrupt: false,
        hand: [],
        totalBuyIn: Number.isFinite(room.initialChips) ? room.initialChips : 1000,
        pendingRebuy: 0,
        sitOutUntilHand: 0,
        totalCommitted: 0
      });
    }
  }
  // Backfill fields for older rooms/players
  for (const p of room.players.values()) {
    if (!Number.isFinite(p.totalBuyIn)) p.totalBuyIn = Number.isFinite(room.initialChips) ? room.initialChips : 1000;
    if (!Number.isFinite(p.pendingRebuy)) p.pendingRebuy = 0;
    if (!Number.isFinite(p.sitOutUntilHand)) p.sitOutUntilHand = 0;
    if (!Number.isFinite(p.totalCommitted)) p.totalCommitted = 0;
  }
  // Remove players for emptied seats
  for (const seatIdx of [...room.players.keys()]) {
    if (!room.seats[seatIdx]) room.players.delete(seatIdx);
  }
}

function applyPendingRebuys(room) {
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat || seat.type !== "player") continue;
    const p = getPlayer(room, i);
    if (!p) continue;
    const pend = Number(p.pendingRebuy || 0);
    if (!Number.isFinite(pend) || pend <= 0) continue;
    p.chips += pend;
    p.pendingRebuy = 0;
    p.isBankrupt = false;
    p.isFolded = false;
    p.currentBet = 0;
    p.hand = [];
    broadcastActivity(room, `${seat.name} rebuys $${pend}.`);
  }
}

function postBlind(room, seatIdx, amount) {
  const p = getPlayer(room, seatIdx);
  if (!p || p.isBankrupt) return 0;
  const amt = Number(amount);
  if (!Number.isFinite(amt) || amt <= 0) return 0;
  const real = Math.min(amt, p.chips);
  p.chips -= real;
  p.currentBet += real;
  p.totalCommitted = Number(p.totalCommitted || 0) + real;
  room.pot += real;
  room.currentMaxBet = Math.max(room.currentMaxBet, p.currentBet);
  return real;
}

function dealHoleCards(room) {
  const eligibleSeats = [];
  for (let i = 0; i < SEATS; i++) {
    const seatIdx = (room.dealerSeatIdx + 1 + i) % SEATS;
    if (isSeatEligible(room, seatIdx)) eligibleSeats.push(seatIdx);
  }
  for (let round = 0; round < 2; round++) {
    for (const seatIdx of eligibleSeats) {
      const p = getPlayer(room, seatIdx);
      if (!p) continue;
      const card = room.deck.pop();
      p.hand.push(card);
    }
  }
}

function initPendingAction(room, startSeatIdx) {
  const actable = getActableSeats(room);
  room.pendingActionSeats = new Set(actable);
  room.activeSeatIdx = startSeatIdx;
}

function removeIneligibleFromPending(room) {
  for (const seatIdx of [...room.pendingActionSeats]) {
    const p = getPlayer(room, seatIdx);
    if (!p || p.isFolded || p.isBankrupt || p.chips <= 0) room.pendingActionSeats.delete(seatIdx);
  }
}

function chooseNextActor(room, fromSeatIdx) {
  removeIneligibleFromPending(room);
  if (room.pendingActionSeats.size === 0) return null;
  const nxt = nextSeatClockwise(room, fromSeatIdx, (idx) => room.pendingActionSeats.has(idx));
  return nxt;
}

function startHand(room) {
  ensurePlayersMap(room);
  applyPendingRebuys(room);

  const activeEligible = [];
  for (let i = 0; i < SEATS; i++) if (isSeatEligible(room, i)) activeEligible.push(i);
  if (activeEligible.length < 2) {
    // End match early (e.g. only one player has chips). Show summary instead of getting stuck in WAITING.
    void emitMatchOverAndEnterClosing(room, "Not enough players with chips to continue.");
    return;
  }

  resetHand(room); // increments handNum; only do this once we're sure the hand will actually start
  broadcastActivity(room, `--- HAND ${room.handNum} / ${room.totalHands} ---`);

  const sbSeat = getActiveOffset(room, room.dealerSeatIdx, 1);
  const bbSeat = getActiveOffset(room, room.dealerSeatIdx, 2);
  const utgSeat = getActiveOffset(room, room.dealerSeatIdx, 3);
  room.sbSeatIdx = sbSeat;
  room.bbSeatIdx = bbSeat;

  // blinds
  postBlind(room, sbSeat, room.smallBlind);
  postBlind(room, bbSeat, room.bigBlind);

  broadcastActivity(room, `${room.seats[sbSeat].name} posts SB $${room.smallBlind}`);
  broadcastActivity(room, `${room.seats[bbSeat].name} posts BB $${room.bigBlind}`);

  // deal
  dealHoleCards(room);

  // send private cards
  for (let i = 0; i < SEATS; i++) {
    const seat = room.seats[i];
    if (!seat || seat.type !== "player") continue;
    const p = getPlayer(room, i);
    if (!p) continue;
    emitSeatEvent(room, i, "private_hand", { seatIdx: i, hand: p.hand });
  }

  // betting setup
  room.currentMaxBet = Math.max(room.bigBlind, ...[...room.players.values()].map((p) => p.currentBet));
  room.minRaise = room.bigBlind;
  initPendingAction(room, utgSeat);

  broadcastGame(room);
  touchRoom(room);
  requestTurn(room);
}

function canAdvanceStreet(room) {
  removeIneligibleFromPending(room);
  if (room.pendingActionSeats.size !== 0) return false;
  return true;
}

function dealCommunity(room, n) {
  for (let i = 0; i < n; i++) {
    room.communityCards.push(room.deck.pop());
  }
}

function getPayoutOrder(room, winners) {
  const order = [];
  const winnerSet = new Set(winners);
  const start = Number.isInteger(room.dealerSeatIdx) ? room.dealerSeatIdx : 0;
  for (let step = 1; step <= SEATS; step++) {
    const idx = (start + step) % SEATS;
    if (winnerSet.has(idx)) order.push(idx);
  }
  return order;
}

function buildSidePots(room) {
  const contributors = [];
  for (const [seatIdx, p] of room.players.entries()) {
    const committed = Math.max(0, Number(p?.totalCommitted || 0));
    if (committed <= 0) continue;
    contributors.push({ seatIdx, committed, isFolded: !!p.isFolded });
  }
  const levels = [...new Set(contributors.map((x) => x.committed).filter((x) => x > 0))].sort((a, b) => a - b);
  const pots = [];
  let previous = 0;
  for (const level of levels) {
    const contributingSeats = contributors.filter((x) => x.committed >= level).map((x) => x.seatIdx);
    const amount = (level - previous) * contributingSeats.length;
    if (amount > 0) {
      pots.push({
        amount,
        contributingSeats,
        eligibleSeats: contributingSeats.filter((seatIdx) => {
          const p = getPlayer(room, seatIdx);
          return !!p && !p.isFolded;
        })
      });
    }
    previous = level;
  }
  return pots;
}

function resolvePots(room, evalMap) {
  const payouts = new Map();
  const potResults = [];
  const sidePots = buildSidePots(room);
  for (let i = 0; i < sidePots.length; i++) {
    const pot = sidePots[i];
    if (!pot || pot.amount <= 0 || pot.eligibleSeats.length === 0) continue;
    const eligible = pot.eligibleSeats
      .map((seatIdx) => ({ seatIdx, best: evalMap.get(seatIdx) }))
      .filter((entry) => entry.best);
    if (eligible.length === 0) continue;
    eligible.sort((a, b) => compareHands(b.best, a.best));
    const best = eligible[0].best;
    const winners = eligible.filter((entry) => compareHands(entry.best, best) === 0).map((entry) => entry.seatIdx);
    const share = Math.floor(pot.amount / winners.length);
    let remainder = pot.amount % winners.length;
    const orderedWinners = getPayoutOrder(room, winners);
    for (const seatIdx of orderedWinners) {
      const extra = remainder > 0 ? 1 : 0;
      payouts.set(seatIdx, Number(payouts.get(seatIdx) || 0) + share + extra);
      remainder -= extra;
    }
    potResults.push({
      potIndex: i,
      amount: pot.amount,
      eligibleSeats: pot.eligibleSeats.slice(0),
      winners: orderedWinners.map((seatIdx) => ({
        seatIdx,
        name: room.seats[seatIdx]?.name || `Seat-${seatIdx}`,
        amount: share + (pot.amount % winners.length > 0 && orderedWinners.indexOf(seatIdx) < (pot.amount % winners.length) ? 1 : 0)
      })),
      desc: best.desc
    });
  }
  return { payouts, potResults };
}

function proceedToNextStreet(room) {
  // reset bets
  for (const p of room.players.values()) p.currentBet = 0;
  room.currentMaxBet = 0;

  if (room.round === "PRE-FLOP") {
    room.round = "FLOP";
    dealCommunity(room, 3);
  } else if (room.round === "FLOP") {
    room.round = "TURN";
    dealCommunity(room, 1);
  } else if (room.round === "TURN") {
    room.round = "RIVER";
    dealCommunity(room, 1);
  } else {
    room.round = "SHOWDOWN";
  }

  if (room.round === "SHOWDOWN") {
    finishHand(room);
    return;
  }

  // first to act postflop: seat after dealer
  const first = getActiveOffset(room, room.dealerSeatIdx, 1);
  initPendingAction(room, first);
  broadcastGame(room);
  touchRoom(room);
  requestTurn(room);
}

function finishHand(room) {
  // stop any pending AI timers
  clearTimeout(room.aiTimer);
  room.aiTimer = null;
  clearTimeout(room.turnTimer);
  room.turnTimer = null;
  room.turnExpiresAt = null;

  // freeze betting loop
  room.pendingActionSeats = new Set();
  room.activeSeatIdx = null;

  const inHand = getInHandSeats(room);
  const showdownHands = inHand
    .map((seatIdx) => {
      const p = getPlayer(room, seatIdx);
      const seat = room.seats[seatIdx];
      const hand = Array.isArray(p?.hand) ? p.hand.slice(0, 2) : [];
      return { seatIdx, name: seat?.name || `Seat-${seatIdx}`, hand };
    })
    .filter((x) => Array.isArray(x.hand) && x.hand.length >= 2);
  if (inHand.length === 0) {
    // This shouldn't normally happen; prefer awarding pot to last actor to avoid dead-end states.
    const fallbackSeat = Number.isInteger(room.lastActorSeatIdx) ? room.lastActorSeatIdx : null;
    const fallbackSeatValid =
      fallbackSeat !== null &&
      fallbackSeat !== undefined &&
      room.seats[fallbackSeat] &&
      getPlayer(room, fallbackSeat);

    if (fallbackSeatValid) {
      const wp = getPlayer(room, fallbackSeat);
      wp.chips += room.pot;
      const winnerName = room.seats[fallbackSeat].name;
      broadcastActivity(room, `Game Over. ${winnerName} wins (fallback: no active players).`);
      room.pot = 0;
      room.round = "HAND_OVER";
      emitRoomEvent(room, "hand_over", {
        handNum: room.handNum,
        totalHands: room.totalHands,
        winners: [{ seatIdx: fallbackSeat, name: winnerName }],
        desc: "No active players (fallback)",
        showdownHands: showdownHands
      });
      room.handHistory.push({ handNum: room.handNum, winners: [{ seatIdx: fallbackSeat, name: winnerName }], desc: "No active players (fallback)" });
      broadcastGame(room);
      touchRoom(room);
      return;
    }

    broadcastActivity(room, "Hand ended (no active players).");
    room.pot = 0;
    room.round = "HAND_OVER";
    emitRoomEvent(room, "hand_over", { handNum: room.handNum, totalHands: room.totalHands, winners: [], desc: "No active players" });
    room.handHistory.push({ handNum: room.handNum, winners: [], desc: "No active players" });
    broadcastGame(room);
    touchRoom(room);
    return;
  }
  if (inHand.length === 1) {
    const winnerSeat = inHand[0];
    const wp = getPlayer(room, winnerSeat);
    wp.chips += room.pot;
    const winnerName = room.seats[winnerSeat].name;
    broadcastActivity(room, `Game Over. ${winnerName} wins (all others folded)!`);
    room.pot = 0;
    room.round = "HAND_OVER";
    emitRoomEvent(room, "hand_over", {
      handNum: room.handNum,
      totalHands: room.totalHands,
      winners: [{ seatIdx: winnerSeat, name: winnerName }],
      desc: "All others folded",
      showdownHands: showdownHands
    });
    room.handHistory.push({ handNum: room.handNum, winners: [{ seatIdx: winnerSeat, name: winnerName }], desc: "All others folded" });
    broadcastGame(room);
    touchRoom(room);
    return;
  }

  // if showdown but not 5 cards, deal remaining
  while (room.communityCards.length < 5) dealCommunity(room, 1);

  const evals = inHand.map((seatIdx) => {
    const p = getPlayer(room, seatIdx);
    return { seatIdx, best: getBestHand([...p.hand, ...room.communityCards]) };
  });
  const evalMap = new Map(evals.map((entry) => [entry.seatIdx, entry.best]));
  const { payouts, potResults } = resolvePots(room, evalMap);
  const payoutEntries = [...payouts.entries()];
  for (const [seatIdx, amount] of payoutEntries) {
    const wp = getPlayer(room, seatIdx);
    if (!wp) continue;
    wp.chips += amount;
  }
  const primaryWinners = payoutEntries
    .map(([seatIdx, amount]) => ({ seatIdx, amount }))
    .sort((a, b) => b.amount - a.amount);
  const primaryNames = primaryWinners.map((w) => room.seats[w.seatIdx]?.name || `Seat-${w.seatIdx}`);
  const primaryDesc = potResults[0]?.desc || evals[0]?.best?.desc || "Showdown";
  const resultMsg = potResults.length > 1
    ? `Game Over. ${primaryNames.join(" & ")} wins after side-pot resolution (${primaryDesc}).`
    : `Game Over. ${primaryNames.join(" & ")} wins with ${primaryDesc}!`;
  broadcastActivity(room, resultMsg);
  for (const potResult of potResults) {
    if (!potResult || !Array.isArray(potResult.winners) || potResult.winners.length === 0) continue;
    broadcastActivity(
      room,
      `Pot ${potResult.potIndex + 1}: ${potResult.winners.map((w) => `${w.name} +$${w.amount}`).join(", ")} (${potResult.desc})`
    );
  }
  room.pot = 0;
  room.round = "HAND_OVER";
  emitRoomEvent(room, "hand_over", {
    handNum: room.handNum,
    totalHands: room.totalHands,
    winners: primaryWinners.map((w) => ({ seatIdx: w.seatIdx, name: room.seats[w.seatIdx].name, amount: w.amount })),
    desc: primaryDesc,
    showdownHands: showdownHands,
    potResults
  });
  room.handHistory.push({
    handNum: room.handNum,
    winners: primaryWinners.map((w) => ({ seatIdx: w.seatIdx, name: room.seats[w.seatIdx].name, amount: w.amount })),
    desc: primaryDesc,
    potResults
  });
  broadcastGame(room);
  touchRoom(room);
}

function requestTurn(room) {
  clearTimeout(room.aiTimer);
  clearTimeout(room.turnTimer);
  room.turnTimer = null;

  // if only one left
  const inHand = getInHandSeats(room);
  if (inHand.length <= 1) {
    finishHand(room);
    return;
  }

  // if nobody can act (everyone all-in), fast-forward streets to showdown
  const actable = getActableSeats(room);
  if (actable.length === 0) {
    room.round = "SHOWDOWN";
    finishHand(room);
    return;
  }

  // ensure current active is something that still needs to act
  removeIneligibleFromPending(room);
  if (room.activeSeatIdx === null || room.activeSeatIdx === undefined || !room.pendingActionSeats.has(room.activeSeatIdx)) {
    const any = chooseNextActor(room, room.activeSeatIdx ?? room.dealerSeatIdx);
    room.activeSeatIdx = any;
  }
  if (room.activeSeatIdx === null || room.activeSeatIdx === undefined) {
    proceedToNextStreet(room);
    return;
  }

  room.turnNonce += 1;
  room.turnExpiresAt = now() + TURN_TIMEOUT_MS;
  broadcastGame(room);

  const seat = room.seats[room.activeSeatIdx];
  if (seat && (seat.type === "ai" || (seat.type === "player" && seat.aiManaged && (!seat.socketId || !io.sockets.sockets.has(seat.socketId))))) {
    // CRITICAL: capture seatIdx now; do NOT reference room.activeSeatIdx inside timeout
    const aiSeatIdx = room.activeSeatIdx;
    room.aiTimer = setTimeout(() => {
      // only act if it's still this AI-managed turn
      if (room.activeSeatIdx !== aiSeatIdx) return;
      const s = room.seats[aiSeatIdx];
      if (!s) return;
      const aiManagedPlayer = s.type === "player" && s.aiManaged && (!s.socketId || !io.sockets.sockets.has(s.socketId));
      if (!(s.type === "ai" || aiManagedPlayer)) return;
      aiAct(room, aiSeatIdx);
    }, 700);
  } else {
    const turnSeatIdx = room.activeSeatIdx;
    const turnNonce = room.turnNonce;
    room.turnTimer = setTimeout(() => {
      if (room.activeSeatIdx !== turnSeatIdx) return;
      if (room.turnNonce !== turnNonce) return;
      const p = getPlayer(room, turnSeatIdx);
      if (!p || p.isFolded || p.isBankrupt) return;
      const callAmt = Math.max(0, room.currentMaxBet - p.currentBet);
      const timeoutAction = callAmt > 0 ? { type: "fold", timedOut: true } : { type: "check", timedOut: true };
      broadcastActivity(room, `${room.seats[turnSeatIdx]?.name || "Player"} timed out.`);
      emitRoomEvent(room, "turn_timeout", { seatIdx: turnSeatIdx, turnNonce });
      handleAction(room, turnSeatIdx, timeoutAction);
    }, TURN_TIMEOUT_MS);
    // human: client will send action
    emitRoomEvent(room, "turn", { activeSeatIdx: room.activeSeatIdx, turnNonce: room.turnNonce });
  }
  touchRoom(room);
}

function placeBet(room, seatIdx, amount) {
  const p = getPlayer(room, seatIdx);
  if (!p || p.isFolded || p.isBankrupt) return 0;
  const amt = Number(amount);
  if (!Number.isFinite(amt) || amt <= 0) return 0;
  const real = Math.min(amt, p.chips);
  p.chips -= real;
  p.currentBet += real;
  p.totalCommitted = Number(p.totalCommitted || 0) + real;
  room.pot += real;
  return real;
}

function handleAction(room, seatIdx, action) {
  const p = getPlayer(room, seatIdx);
  if (!p || p.isFolded || p.isBankrupt) return;
  if (room.activeSeatIdx !== seatIdx) return;
  clearTimeout(room.turnTimer);
  room.turnTimer = null;
  room.turnExpiresAt = null;

  // track last valid actor (used as a fallback in rare edge cases)
  room.lastActorSeatIdx = seatIdx;

  const callAmt = Math.max(0, room.currentMaxBet - p.currentBet);
  const actType = action.type;

  if (actType === "fold") {
    p.isFolded = true;
    broadcastActivity(room, `${room.seats[seatIdx].name} Folds.`);
    broadcastPlayerAction(room, seatIdx, "FOLD");
    room.pendingActionSeats.delete(seatIdx);
  } else if (actType === "check") {
    if (callAmt !== 0) return;
    broadcastActivity(room, `${room.seats[seatIdx].name} Checks.`);
    broadcastPlayerAction(room, seatIdx, "CHECK");
    room.pendingActionSeats.delete(seatIdx);
  } else if (actType === "call") {
    if (callAmt > 0) {
      placeBet(room, seatIdx, callAmt);
      broadcastActivity(room, `${room.seats[seatIdx].name} Calls.`);
      broadcastPlayerAction(room, seatIdx, `CALL ${callAmt}`);
    } else {
      broadcastActivity(room, `${room.seats[seatIdx].name} Checks.`);
      broadcastPlayerAction(room, seatIdx, "CHECK");
    }
    room.pendingActionSeats.delete(seatIdx);
  } else if (actType === "raise") {
    const raiseBy = Math.max(room.minRaise, Number(action.raiseBy || room.minRaise));
    const totalToPut = callAmt + raiseBy;
    placeBet(room, seatIdx, totalToPut);
    room.currentMaxBet = p.currentBet;
    // reset pending to everyone eligible except raiser
    const actable = getActableSeats(room);
    room.pendingActionSeats = new Set(actable);
    room.pendingActionSeats.delete(seatIdx);
    broadcastActivity(room, `${room.seats[seatIdx].name} Raises to ${p.currentBet}.`);
    broadcastPlayerAction(room, seatIdx, `RAISE ${p.currentBet}`);
  } else if (actType === "allin") {
    const all = p.chips;
    if (all <= 0) {
      room.pendingActionSeats.delete(seatIdx);
    } else {
      placeBet(room, seatIdx, all);
      if (p.currentBet > room.currentMaxBet) {
        room.currentMaxBet = p.currentBet;
        const actable = getActableSeats(room);
        room.pendingActionSeats = new Set(actable);
        room.pendingActionSeats.delete(seatIdx);
        broadcastActivity(room, `${room.seats[seatIdx].name} ALL-IN to ${p.currentBet}.`);
        broadcastPlayerAction(room, seatIdx, `ALL-IN ${p.currentBet}`);
      } else {
        broadcastActivity(room, `${room.seats[seatIdx].name} is ALL-IN!`);
        broadcastPlayerAction(room, seatIdx, "ALL-IN");
        room.pendingActionSeats.delete(seatIdx);
      }
    }
  }

  // if only one left, end immediately
  const inHand = getInHandSeats(room);
  if (inHand.length <= 1) {
    finishHand(room);
    return;
  }

  // remove ineligible pending and decide next
  removeIneligibleFromPending(room);
  if (canAdvanceStreet(room)) {
    proceedToNextStreet(room);
    return;
  }

  const next = chooseNextActor(room, seatIdx);
  room.activeSeatIdx = next;
  touchRoom(room);
  requestTurn(room);
}

function aiAct(room, seatIdx) {
  const p = getPlayer(room, seatIdx);
  if (!p || p.isFolded || p.isBankrupt) {
    room.pendingActionSeats.delete(seatIdx);
    const next = chooseNextActor(room, seatIdx);
    room.activeSeatIdx = next;
    requestTurn(room);
    return;
  }
  const callAmt = Math.max(0, room.currentMaxBet - p.currentBet);
  const r = Math.random();
  if (callAmt > 0 && r > 0.85) {
    handleAction(room, seatIdx, { type: "fold" });
    return;
  }
  if (r > 0.7 && p.chips > callAmt + room.minRaise) {
    handleAction(room, seatIdx, { type: "raise", raiseBy: room.minRaise });
    return;
  }
  if (callAmt > 0) handleAction(room, seatIdx, { type: "call" });
  else handleAction(room, seatIdx, { type: "check" });
}

// --- Socket.io wiring ---
io.on("connection", (socket) => {
  socket.data.ip = getClientIp(socket);
  socket.data.roomId = null;
  socket.data.seatIdx = null;
  socket.data.name = null;
  socket.data.clientId = null;
  socket.data.sessionId = null;
  socket.data.reconnectToken = null;
  socket.data.voiceJoined = false;

  function allowEvent(eventName) {
    const cfg = SOCKET_RATE_LIMIT[eventName] || SOCKET_RATE_LIMIT.default;
    const key = `${eventName}:${socket.data.ip}`;
    return consumeRateLimit(socketRateBuckets, key, cfg.windowMs, cfg.max);
  }

  function guarded(eventName, handler) {
    socket.on(eventName, (...args) => {
      if (!allowEvent(eventName)) {
        socket.emit("error_msg", { msg: "Too many requests. Please slow down." });
        return;
      }
      Promise.resolve(handler(...args)).catch((err) => {
        console.error(`[socket:${eventName}]`, err?.stack || err?.message || err);
        socket.emit("error_msg", { msg: "Server error while processing request." });
      });
    });
  }

  function getOwnedRoom() {
    const rid = socket.data.roomId;
    if (!rid) return null;
    const room = rooms.get(rid);
    if (!room) return null;
    if (!room.socketIds.has(socket.id)) return null;
    return room;
  }

  function getOwnedSeat(room, seatIdx = socket.data.seatIdx) {
    if (!room || !Number.isInteger(seatIdx) || seatIdx < 0 || seatIdx >= SEATS) return null;
    const seat = room.seats[seatIdx];
    if (!seat || seat.type !== "player") return null;
    const ownsBySocket = seat.socketId === socket.id;
    const ownsBySession = !!socket.data.sessionId && seat.sessionId === socket.data.sessionId;
    return (ownsBySocket || ownsBySession) ? seat : null;
  }

  function emitYouState(room) {
    if (!room) return;
    socket.emit("you_state", {
      roomId: room.roomId,
      seatIdx: Number.isInteger(socket.data.seatIdx) ? socket.data.seatIdx : -1,
      isHost: socket.id === room.hostSocketId
    });
  }

  guarded("join_room", async ({ roomId, name, clientId, reconnectToken, sessionId, lastSeenSeq }) => {
    const rid = String(roomId || "").trim();
    const nm = String(name || "").trim() || "Player";
    const cid = String(clientId || "").trim();
    const reconnect = String(reconnectToken || "").trim();
    const providedSessionId = String(sessionId || "").trim();
    if (!rid) return;

    const room = await roomsCatalogMutex.runExclusive(() => {
      let existing = rooms.get(rid);
      if (!existing) {
        existing = makeRoom(rid);
        rooms.set(rid, existing);
      }
      return existing;
    });

    await runRoomExclusive(room, async () => {
      room.lastActiveAt = now();
      if (room.closing) {
        socket.emit("error_msg", { msg: "This room has ended and is closing. Please rejoin in a moment (or use a new Room ID)." });
        return;
      }

      const session = getOrCreatePlayerSession(providedSessionId, {
        playerName: nm,
        clientId: cid || null,
        roomId: rid
      });
      if (Number.isFinite(Number(lastSeenSeq))) {
        session.lastSeenSeqByRoom[rid] = sanitizeSeq(lastSeenSeq);
      }
      socket.data.clientId = cid || socket.data.clientId;
      socket.data.sessionId = session.sessionId;
      socket.data.reconnectToken = reconnect || socket.data.reconnectToken;

      if (room.started) {
        let reconnectSeatIdx = null;
        for (let i = 0; i < SEATS; i++) {
          const s = room.seats[i];
          if (!s || s.type !== "player") continue;
          const offline = !s.socketId || !io.sockets.sockets.has(s.socketId);
          if (!offline) continue;
          const byToken = reconnect && s.reconnectToken && reconnect === s.reconnectToken;
          const bySession = session.sessionId && s.sessionId && session.sessionId === s.sessionId;
          if (byToken || bySession) { reconnectSeatIdx = i; break; }
        }
        if (reconnectSeatIdx === null) {
          socket.emit("error_msg", { msg: "Game already started. Reconnect requires your session or seat token." });
          return;
        }
        const seat = room.seats[reconnectSeatIdx];
        seat.socketId = socket.id;
        seat.name = nm;
        seat.clientId = cid || seat.clientId || null;
        seat.sessionId = session.sessionId;
        seat.disconnectedAt = null;
        cancelAiTakeover(seat);
        if (!seat.decor) seat.decor = "none";
        socket.data.seatIdx = reconnectSeatIdx;
        socket.data.reconnectToken = seat.reconnectToken || reconnect;
        session.seatIdx = reconnectSeatIdx;
        session.reconnectToken = seat.reconnectToken || reconnect || null;
        session.roomId = rid;
        session.lastDisconnectAt = null;
        session.aiTakeoverAt = null;
        session.isAiManaged = false;
      }

      const hostOnline = room.hostSocketId && io.sockets.sockets.has(room.hostSocketId);
      if (!room.hostSocketId || !hostOnline) room.hostSocketId = socket.id;

      socket.join(rid);
      socket.data.roomId = rid;
      socket.data.name = nm;
      room.socketIds.add(socket.id);
      room.emptySince = null;

      emitSocketRoomEvent(socket, room, "room_state", getRoomSummary(room, socket.id));
      emitYouState(room);
      try {
        const items = Array.isArray(room.activityLog) ? room.activityLog.slice(-200) : [];
        socket.emit("activity_sync", { items });
      } catch (_) {}
      replayMissedRoomEvents(socket, room, socket.data.seatIdx);
      broadcastRoom(room);
      broadcastGame(room);
      if (room.started && !room.closing) {
        const seatIdx = socket.data.seatIdx;
        if (Number.isInteger(seatIdx) && seatIdx >= 0 && seatIdx < SEATS) {
          const seat = room.seats[seatIdx];
          const p = getPlayer(room, seatIdx);
          if (seat && seat.type === "player" && p && Array.isArray(p.hand) && p.hand.length >= 2) {
            emitSeatEvent(room, seatIdx, "private_hand", { seatIdx, hand: p.hand.slice(0, 2) });
          }
        }
        if (room.round !== "HAND_OVER") requestTurn(room);
      }
      if (Number.isInteger(socket.data.seatIdx) && socket.data.seatIdx >= 0) {
        issueSeatSession(socket, room, socket.data.seatIdx);
      }
      touchRoom(room);
    });
  });

  // ---- Voice signaling (WebRTC; audio is P2P) ----
  guarded("voice_join", () => {
    const rid = socket.data.roomId;
    if (!rid) return;
    const room = rooms.get(rid);
    if (!room) return;

    // Require seat to join voice to avoid spectators joining voice channel.
    const seatIdx = socket.data.seatIdx;
    if (!Number.isInteger(seatIdx) || seatIdx < 0 || seatIdx >= SEATS) return;
    const seat = room.seats[seatIdx];
    if (!seat || seat.type !== "player" || seat.socketId !== socket.id) return;
    if (room.voice.participants.size >= MAX_VOICE_PARTICIPANTS) {
      socket.emit("voice_error", { msg: `Voice is capped at ${MAX_VOICE_PARTICIPANTS} live participants in P2P mode.` });
      return;
    }

    const name = socket.data.name || seat.name || "Player";
    room.voice.participants.set(socket.id, { socketId: socket.id, seatIdx, name });
    socket.data.voiceJoined = true;

    const peers = [...room.voice.participants.values()].filter((p) => p.socketId !== socket.id);
    socket.emit("voice_peers", { peers });
    socket.to(rid).emit("voice_peer_joined", { peer: { socketId: socket.id, seatIdx, name } });
  });

  guarded("voice_leave", () => {
    const rid = socket.data.roomId;
    if (!rid) return;
    const room = rooms.get(rid);
    if (!room) return;
    if (!room.voice.participants.has(socket.id)) return;
    room.voice.participants.delete(socket.id);
    socket.data.voiceJoined = false;
    socket.to(rid).emit("voice_peer_left", { socketId: socket.id });
  });

  guarded("voice_signal", ({ to, data }) => {
    const rid = socket.data.roomId;
    if (!rid) return;
    const room = rooms.get(rid);
    if (!room) return;
    if (!socket.data.voiceJoined) return;
    if (!room.voice.participants.has(socket.id)) return;
    if (!to || typeof to !== "string") return;
    if (!room.voice.participants.has(to)) return;
    io.to(to).emit("voice_signal", { from: socket.id, data });
  });

  guarded("take_seat", async ({ seatIdx, reconnectToken, sessionId }) => {
    const room = getOwnedRoom();
    if (!room || room.closing) return;
    await runRoomExclusive(room, async () => {
      const idx = Number(seatIdx);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SEATS) return;
      const reconnect = String(reconnectToken || socket.data.reconnectToken || "").trim();
      const providedSessionId = String(sessionId || socket.data.sessionId || "").trim();
      const session = getOrCreatePlayerSession(providedSessionId, {
        roomId: room.roomId,
        playerName: socket.data.name || "Player",
        clientId: socket.data.clientId || null
      });
      socket.data.sessionId = session.sessionId;

      if (room.started) {
        const seat = room.seats[idx];
        if (!seat || seat.type !== "player") return;
        const canReclaim = (reconnect && seat.reconnectToken && reconnect === seat.reconnectToken)
          || (session.sessionId && seat.sessionId && session.sessionId === seat.sessionId);
        if (!canReclaim) {
          socket.emit("error_msg", { msg: "Seat reclaim denied. Your reconnect token or session is invalid." });
          return;
        }
        seat.socketId = socket.id;
        seat.disconnectedAt = null;
        seat.sessionId = session.sessionId;
        cancelAiTakeover(seat);
        socket.data.seatIdx = idx;
        socket.data.reconnectToken = seat.reconnectToken;
        touchPlayerSession(session.sessionId, {
          roomId: room.roomId,
          seatIdx: idx,
          reconnectToken: seat.reconnectToken,
          lastDisconnectAt: null,
          aiTakeoverAt: null,
          isAiManaged: false
        });
        emitYouState(room);
        issueSeatSession(socket, room, idx);
        replayMissedRoomEvents(socket, room, idx);
        broadcastRoom(room);
        broadcastGame(room);
        touchRoom(room);
        return;
      }

      if (isSeatOccupied(room, idx) && room.seats[idx]?.socketId !== socket.id) return;
      for (let i = 0; i < SEATS; i++) {
        const s = room.seats[i];
        if (s && s.type === "player" && s.socketId === socket.id) room.seats[i] = null;
      }

      room.seats[idx] = {
        type: "player",
        socketId: socket.id,
        name: socket.data.name || "Player",
        clientId: socket.data.clientId || null,
        sessionId: session.sessionId,
        reconnectToken: randomToken(32),
        disconnectedAt: null,
        decor: "none",
        aiManaged: false,
        aiTakeoverAt: null,
        aiTakeoverTimer: null
      };
      socket.data.seatIdx = idx;
      socket.data.reconnectToken = room.seats[idx].reconnectToken;
      touchPlayerSession(session.sessionId, {
        roomId: room.roomId,
        seatIdx: idx,
        reconnectToken: room.seats[idx].reconnectToken,
        lastDisconnectAt: null,
        aiTakeoverAt: null,
        isAiManaged: false
      });
      socket.emit("seat_taken", { seatIdx: idx });
      emitYouState(room);
      issueSeatSession(socket, room, idx);
      ensurePlayersMap(room);
      broadcastRoom(room);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  guarded("toggle_ai", async ({ seatIdx }) => {
    const room = getOwnedRoom();
    if (!room || room.started || room.closing) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;
      const idx = Number(seatIdx);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SEATS) return;
      const seat = room.seats[idx];
      if (seat && seat.type === "player") return;
      if (seat && seat.type === "ai") {
        room.seats[idx] = null;
        room.players.delete(idx);
      } else {
        room.seats[idx] = { type: "ai", name: `AI-${idx}` };
        ensurePlayersMap(room);
      }
      broadcastRoom(room);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  guarded("kick_seat", async ({ seatIdx }) => {
    const room = getOwnedRoom();
    if (!room || room.closing) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;

      const idx = Number(seatIdx);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SEATS) return;
      const seat = room.seats[idx];
      if (!seat || seat.type !== "player") return;

      room.lastActiveAt = now();

      if (room.started) {
      // In-game kick: force fold now and sit-out until next hand, but keep seat reserved for reconnection.
        const p = getPlayer(room, idx);
        if (p) {
          p.isFolded = true;
          p.currentBet = p.currentBet || 0;
          p.sitOutUntilHand = (room.handNum || 0) + 1;
        }
        room.pendingActionSeats.delete(idx);
        if (seat.socketId && io.sockets.sockets.has(seat.socketId)) {
          io.to(seat.socketId).emit("kicked_in_hand", { seatIdx: idx, msg: "You were removed from this hand by host. You can rejoin next hand." });
        }
        broadcastActivity(room, `${seat.name} was removed by host (sit out until next hand).`);
        broadcastPlayerAction(room, idx, "FOLD");

        const inHand = getInHandSeats(room);
        if (inHand.length <= 1) {
          finishHand(room);
          return;
        }
        removeIneligibleFromPending(room);
        if (room.activeSeatIdx === idx) {
          const next = chooseNextActor(room, idx);
          room.activeSeatIdx = next;
        }
        if (canAdvanceStreet(room)) {
          proceedToNextStreet(room);
        } else {
          requestTurn(room);
        }
        broadcastRoom(room);
        broadcastGame(room);
        touchRoom(room);
        return;
      }

      if (seat.socketId && io.sockets.sockets.has(seat.socketId)) {
        io.to(seat.socketId).emit("kicked", { seatIdx: idx });
      }
      room.seats[idx] = null;
      room.players.delete(idx);
      broadcastRoom(room);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  guarded("start_game", async ({ totalHands, initialChips }) => {
    const room = getOwnedRoom();
    if (!room) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;
      if (room.started || room.closing) return;
      const occ = room.seats.filter(Boolean).length;
      if (occ < 3) {
        socket.emit("error_msg", { msg: "At least 3 players (including AI) are needed to start!" });
        return;
      }
      room.totalHands = Math.max(1, Math.min(50, Number(totalHands || 5)));
      room.initialChips = Math.max(1000, Number(initialChips || 1000));
      if (!Number.isFinite(room.totalHands)) room.totalHands = 5;
      if (!Number.isFinite(room.initialChips)) room.initialChips = 1000;
      room.started = true;
      room.handNum = 0;
      room.dealerSeatIdx = 0;
      ensurePlayersMap(room);
      broadcastRoom(room);
      touchRoom(room);
      startHand(room);
    });
  });

  guarded("action", async (payload) => {
    const room = getOwnedRoom();
    if (!room || !room.started) return;
    await runRoomExclusive(room, async () => {
      const seatIdx = socket.data.seatIdx;
      const seat = getOwnedSeat(room, seatIdx);
      if (!seat) return;
      if (seat.socketId && seat.socketId !== socket.id) return;
      handleAction(room, seatIdx, payload || {});
    });
  });

  // ---- Rebuy (players can request; host approves) ----
  // Fast rebuy: player directly adds pending chips for next hand (no host approval).
  // This matches the UX: busted player sees a prompt, enters amount, re-enters next hand.
  guarded("rebuy", async ({ amount }) => {
    const room = getOwnedRoom();
    if (!room || !room.started || room.closing) return;
    await runRoomExclusive(room, async () => {
      const seatIdx = socket.data.seatIdx;
      const seat = getOwnedSeat(room, seatIdx);
      if (!seat) return;
      const p = getPlayer(room, seatIdx);
      if (!p || p.chips > 0) return;
      const amt = Number(amount);
      if (!Number.isFinite(amt) || amt < 1000 || amt % 50 !== 0) {
        socket.emit("error_msg", { msg: "Rebuy amount must be >= 1000 and a multiple of 50." });
        return;
      }
      p.pendingRebuy = Number(p.pendingRebuy || 0) + amt;
      p.totalBuyIn = Number(p.totalBuyIn || (Number.isFinite(room.initialChips) ? room.initialChips : 1000)) + amt;
      broadcastActivity(room, `${seat.name} rebuys $${amt} (applies next hand).`);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  // ---- Table decor (cosmetic) ----
  guarded("set_decor", async ({ decor }) => {
    const room = getOwnedRoom();
    if (!room || room.closing) return;
    await runRoomExclusive(room, async () => {
      const seatIdx = socket.data.seatIdx;
      const seat = getOwnedSeat(room, seatIdx);
      if (!seat) return;
      const d = String(decor || "none").toLowerCase();
      const allowed = new Set(["none", "cola", "coffee", "wine", "cigar"]);
      if (!allowed.has(d)) return;
      seat.decor = d;
      room.lastActiveAt = now();
      broadcastRoom(room);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  guarded("rebuy_request", async ({ amount }) => {
    const room = getOwnedRoom();
    if (!room || !room.started || room.closing) return;
    await runRoomExclusive(room, async () => {
      const seatIdx = socket.data.seatIdx;
      const seat = getOwnedSeat(room, seatIdx);
      if (!seat) return;
      const p = getPlayer(room, seatIdx);
      if (!p || p.chips > 0) return;
      const amt = Number(amount);
      if (!Number.isFinite(amt) || amt < 1000 || amt % 50 !== 0) {
        socket.emit("error_msg", { msg: "Rebuy amount must be >= 1000 and a multiple of 50." });
        return;
      }
      if (!room.hostSocketId || !io.sockets.sockets.has(room.hostSocketId)) {
        socket.emit("error_msg", { msg: "Host is offline. Cannot approve rebuy right now." });
        return;
      }
      io.to(room.hostSocketId).emit("rebuy_requested", { seatIdx, name: seat.name, amount: amt });
    });
  });

  guarded("rebuy_approve", async ({ seatIdx, amount }) => {
    const room = getOwnedRoom();
    if (!room || !room.started || room.closing) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;
      const idx = Number(seatIdx);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SEATS) return;
      const seat = room.seats[idx];
      if (!seat || seat.type !== "player") return;
      const p = getPlayer(room, idx);
      if (!p) return;
      const amt = Number(amount);
      if (!Number.isFinite(amt) || amt < 1000 || amt % 50 !== 0) return;
      p.pendingRebuy = Number(p.pendingRebuy || 0) + amt;
      p.totalBuyIn = Number(p.totalBuyIn || (Number.isFinite(room.initialChips) ? room.initialChips : 1000)) + amt;
      broadcastActivity(room, `${seat.name} rebuy approved: $${amt} (applies next hand).`);
      broadcastGame(room);
      touchRoom(room);
    });
  });

  guarded("rebuy_deny", async ({ seatIdx }) => {
    const room = getOwnedRoom();
    if (!room || !room.started || room.closing) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;
      const idx = Number(seatIdx);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SEATS) return;
      const seat = room.seats[idx];
      if (!seat || seat.type !== "player") return;
      if (seat.socketId && io.sockets.sockets.has(seat.socketId)) {
        io.to(seat.socketId).emit("rebuy_denied", { msg: "Rebuy denied by host." });
      }
      broadcastActivity(room, `${seat.name} rebuy denied.`);
      touchRoom(room);
    });
  });

  guarded("next_hand", async () => {
    const room = getOwnedRoom();
    if (!room || !room.started) return;
    await runRoomExclusive(room, async () => {
      if (socket.id !== room.hostSocketId) return;
      if (room.pot !== 0) return;
      if (room.handNum >= room.totalHands) {
        await emitMatchOverAndEnterClosing(room);
        return;
      }
      room.dealerSeatIdx = (room.dealerSeatIdx + 1) % SEATS;
      touchRoom(room);
      startHand(room);
    });
  });

  guarded("ack_match_over", async () => {
    const room = getOwnedRoom();
    if (!room || !room.closing) return;
    await runRoomExclusive(room, async () => {
      room.matchAcks.add(socket.id);
      let all = true;
      for (const sid of room.expectedAcks) {
        if (!room.matchAcks.has(sid)) {
          all = false;
          break;
        }
      }
      if (all) await releaseRoom(room);
    });
  });

  socket.on("disconnect", async () => {
    const rid = socket.data.roomId;
    if (!rid) return;
    const room = rooms.get(rid);
    if (!room) return;
    await runRoomExclusive(room, async () => {
      room.socketIds.delete(socket.id);
      if (room.socketIds.size === 0) room.emptySince = now();

      if (room.closing && room.expectedAcks?.has(socket.id)) {
        room.expectedAcks.delete(socket.id);
        room.matchAcks.delete(socket.id);
        if (room.expectedAcks.size === 0) {
          await releaseRoom(room);
          return;
        }
      }

      if (room.voice?.participants?.has(socket.id)) {
        room.voice.participants.delete(socket.id);
        socket.to(rid).emit("voice_peer_left", { socketId: socket.id });
      }

      for (let i = 0; i < SEATS; i++) {
        const s = room.seats[i];
        if (s && s.type === "player" && s.socketId === socket.id) {
          if (s.sessionId) {
            touchPlayerSession(s.sessionId, {
              roomId: rid,
              seatIdx: i,
              reconnectToken: s.reconnectToken || null,
              lastDisconnectAt: now(),
              aiTakeoverAt: s.aiTakeoverAt || null,
              isAiManaged: !!s.aiManaged
            });
          }
          if (room.started) {
            s.socketId = null;
            s.disconnectedAt = now();
            const p = getPlayer(room, i);
            if (p) {
              p.isFolded = true;
              room.pendingActionSeats.delete(i);
            }
            if (room.activeSeatIdx === i) {
              room.activeSeatIdx = chooseNextActor(room, i);
            }
            scheduleAiTakeover(room, i);
          } else {
            room.seats[i] = null;
            room.players.delete(i);
          }
        }
      }

      if (room.hostSocketId === socket.id) {
        const nextHost = room.seats.find((s) => s && s.type === "player" && s.socketId && io.sockets.sockets.has(s.socketId));
        room.hostSocketId = nextHost ? nextHost.socketId : null;
      }

      if (room.seats.every((s) => !s)) {
        rooms.delete(rid);
        void deleteRoomSnapshot(rid);
        return;
      }

      broadcastRoom(room);
      broadcastGame(room);
      touchRoom(room);
      if (room.started && !room.closing) {
        const inHand = getInHandSeats(room);
        if (inHand.length <= 1) {
          finishHand(room);
        } else if (canAdvanceStreet(room)) {
          proceedToNextStreet(room);
        } else if (room.activeSeatIdx !== null && room.activeSeatIdx !== undefined) {
          requestTurn(room);
        }
      }
    });
  });
});

await restoreSnapshots();

server.listen(PORT, "0.0.0.0", () => {
  console.log(`nebula-poker listening on 0.0.0.0:${PORT}`);
});

/**
 * @typedef {{type:'player', socketId:string|null, name:string, clientId?:string|null, reconnectToken?:string|null, disconnectedAt?:number|null, decor?:string} | {type:'ai', name:string} | null} Seat
 * @typedef {{seatIdx:number, chips:number, currentBet:number, isFolded:boolean, isBankrupt:boolean, hand:Array<any>, totalCommitted?:number, totalBuyIn?:number, pendingRebuy?:number, sitOutUntilHand?:number}} PlayerState
 * @typedef {{
 *   roomId:string,
 *   createdAt:number,
 *   lastActiveAt:number,
 *   emptySince:number|null,
 *   hostSocketId:string|null,
 *   seats:Seat[],
 *   started:boolean,
 *   totalHands:number,
 *   initialChips:number,
 *   smallBlind:number,
 *   bigBlind:number,
 *   handNum:number,
 *   dealerSeatIdx:number,
 *   sbSeatIdx:number|null,
 *   bbSeatIdx:number|null,
 *   pot:number,
 *   round:string,
 *   communityCards:any[],
 *   deck:any[],
 *   currentMaxBet:number,
 *   minRaise:number,
 *   activeSeatIdx:number|null,
 *   pendingActionSeats:Set<number>,
 *   players:Map<number, PlayerState>,
 *   turnNonce:number,
 *   aiTimer:any,
 *   turnTimer:any,
 *   turnExpiresAt:number|null
 * }} Room
 */


