/**
 * Binary WebSocket client: `nebula.poker.Envelope` encode/decode + event dispatch.
 * No Three.js here — keep protocol separate from view (see `frontend/src/utils/SyncManager.js`, `docs/three-smooth.md`).
 */
const OUTGOING_TYPES = {
  join_room: "JoinRoomRequest",
  take_seat: "SeatRequest",
  toggle_ai: "SeatRequest",
  kick_seat: "SeatRequest",
  start_game: "StartGameRequest",
  action: "ActionRequest",
  rebuy: "AmountRequest",
  rebuy_request: "AmountRequest",
  rebuy_approve: "RebuyApproveRequest",
  rebuy_deny: "SeatRequest",
  set_decor: "DecorRequest",
  voice_signal: "VoiceSignalMessage",
  voice_join: "Empty",
  voice_leave: "Empty",
  next_hand: "Empty",
  ack_match_over: "Empty"
};

const INCOMING_TYPES = {
  connect: "TextMessage",
  auth_state: "AuthState",
  you_state: "YouState",
  seat_taken: "SeatTaken",
  seat_session: "SeatSession",
  room_state: "RoomState",
  activity: "TextMessage",
  activity_sync: "ActivitySync",
  error_msg: "ErrorMessage",
  room_closed: "RoomClosed",
  kicked: "Kicked",
  kicked_in_hand: "Kicked",
  rebuy_requested: "RebuyRequested",
  rebuy_denied: "RebuyDenied",
  voice_peers: "VoicePeers",
  voice_peer_joined: "VoicePeerJoined",
  voice_peer_left: "VoicePeerLeft",
  voice_signal: "VoiceSignalMessage",
  player_action: "PlayerAction",
  hand_over: "HandOver",
  match_over: "MatchOver",
  private_hand: "PrivateHand",
  game_state: "GameState",
  turn: "TurnMessage",
  user_profile: "UserProfile",
  matchmaking_status: "MatchmakingStatus",
  match_found: "MatchFound"
};

const STICKY_RECONNECT_EVENTS = ["join_room", "take_seat", "set_decor"];
const SOCKET_SINGLETON_KEY = "__nebulaProtoSocketSingleton";
const USE_TEXT_CONTROL_WS = true;
const RECONNECT_WINDOW_MS = 60_000;
const RECONNECT_MAX_ATTEMPTS = 12;
const HEARTBEAT_INTERVAL_MS = 10_000;
const DEBUG_RUN_ID = `ws-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const WS_DEBUG_COUNTER_KEY = "__nebulaWsDebugCounter";

// #region agent log
try {
  console.info("[proto-socket-debug] module loaded", {
    DEBUG_RUN_ID,
    USE_TEXT_CONTROL_WS,
    RECONNECT_WINDOW_MS,
    RECONNECT_MAX_ATTEMPTS
  });
  fetch("http://127.0.0.1:7344/ingest/cfa499ff-137d-458a-83e0-be08e7282947", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "bb2dd5" },
    body: JSON.stringify({
      sessionId: "bb2dd5",
      runId: DEBUG_RUN_ID,
      hypothesisId: "H0",
      location: "proto-socket.js:module",
      message: "module loaded",
      data: { USE_TEXT_CONTROL_WS, RECONNECT_WINDOW_MS, RECONNECT_MAX_ATTEMPTS },
      timestamp: Date.now()
    })
  }).catch(() => {});
} catch (_) {}
// #endregion

function debugWsLog(hypothesisId, location, message, data = {}) {
  // #region agent log
  fetch("http://127.0.0.1:7344/ingest/cfa499ff-137d-458a-83e0-be08e7282947", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "bb2dd5" },
    body: JSON.stringify({
      sessionId: "bb2dd5",
      runId: DEBUG_RUN_ID,
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now()
    })
  }).catch(() => {});
  try {
    console.debug(`[proto-socket-debug] ${location} ${message}`, { hypothesisId, ...data });
  } catch (_) {}
  // #endregion
}

function bytesFromJson(value) {
  const text = JSON.stringify(value ?? {});
  return new TextEncoder().encode(text);
}

function jsonFromBytes(bytes) {
  if (!bytes || !bytes.length) return null;
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch (_) {
    return null;
  }
}

function normalizeCard(card) {
  return { s: card?.s || "", r: card?.r || "", v: Number(card?.v || 0) };
}

function transformIncoming(eventName, raw) {
  switch (eventName) {
    case "connect":
      return raw?.msg || "";
    case "activity":
      return raw?.msg || "";
    case "activity_sync":
      return { items: Array.isArray(raw?.items) ? raw.items : [] };
    case "error_msg":
      return { msg: raw?.msg || "" };
    case "room_closed":
      return { roomId: raw?.roomId || "", reason: raw?.reason || "" };
    case "you_state":
      return {
        roomId: raw?.roomId || "",
        seatIdx: Number(raw?.seatIdx ?? -1),
        isHost: !!raw?.isHost
      };
    case "auth_state":
      return {
        authenticated: !!raw?.authenticated,
        profile: raw?.profile
          ? {
              userId: Number(raw.profile.userId ?? 0),
              externalId: raw.profile.externalId || "",
              username: raw.profile.username || "",
              avatar: raw.profile.avatar || "",
              gold: Number(raw.profile.gold ?? 0),
              gamesPlayed: Number(raw.profile.gamesPlayed ?? 0),
              gamesWon: Number(raw.profile.gamesWon ?? 0)
            }
          : null
      };
    case "seat_taken":
      return { seatIdx: Number(raw?.seatIdx ?? -1) };
    case "seat_session":
      return {
        roomId: raw?.roomId || "",
        reconnectToken: raw?.reconnectToken || "",
        sessionId: raw?.sessionId || "",
        lastSeenSeq: Number(raw?.lastSeenSeq ?? 0)
      };
    case "room_state":
      {
        const maxPlayers = Number(raw?.maxPlayers ?? 10);
        const denseSeats = Array(Math.max(0, maxPlayers)).fill(null);
        if (Array.isArray(raw?.seats)) {
          for (const s of raw.seats) {
            const idx = Number(s?.seatIdx ?? -1);
            if (!Number.isInteger(idx) || idx < 0 || idx >= denseSeats.length) continue;
            denseSeats[idx] = {
              type: s?.type || "player",
              seatIdx: idx,
              name: s?.name || "",
              decor: s?.decor || "none",
              socketId: s?.socketId || "",
              clientId: s?.clientId || "",
              aiManaged: !!s?.aiManaged,
              disconnectedAt: Number(s?.disconnectedAt ?? 0)
            };
          }
        }
      return {
        roomId: raw?.roomId || "",
        hostSocketId: raw?.hostSocketId || "",
        hostSeatIdx: Number(raw?.hostSeatIdx ?? -1),
        isHost: !!raw?.isHost,
        started: !!raw?.started,
        ownerUserId: Number(raw?.ownerUserId ?? 0),
        roomCode: raw?.roomCode || "",
        visibility: raw?.visibility || "private",
        status: raw?.status || "waiting",
        maxPlayers,
        seats: denseSeats,
        settings: raw?.settings
          ? {
              totalHands: Number(raw.settings.totalHands ?? 0),
              initialChips: Number(raw.settings.initialChips ?? 0),
              smallBlind: Number(raw.settings.smallBlind ?? 0),
              bigBlind: Number(raw.settings.bigBlind ?? 0)
            }
          : null
      };
      }
    case "kicked":
    case "kicked_in_hand":
      return { seatIdx: Number(raw?.seatIdx ?? -1), msg: raw?.msg || "" };
    case "rebuy_requested":
      return {
        seatIdx: Number(raw?.seatIdx ?? -1),
        name: raw?.name || "",
        amount: Number(raw?.amount ?? 0)
      };
    case "rebuy_denied":
      return { msg: raw?.msg || "" };
    case "voice_peers":
      return {
        peers: Array.isArray(raw?.peers)
          ? raw.peers.map((p) => ({
              socketId: p?.socketId || "",
              seatIdx: Number(p?.seatIdx ?? -1),
              name: p?.name || ""
            }))
          : []
      };
    case "voice_peer_joined":
      return {
        peer: raw?.peer
          ? {
              socketId: raw.peer.socketId || "",
              seatIdx: Number(raw.peer.seatIdx ?? -1),
              name: raw.peer.name || ""
            }
          : null
      };
    case "voice_peer_left":
      return { socketId: raw?.socketId || "" };
    case "voice_signal":
      return {
        from: raw?.from || "",
        data: jsonFromBytes(raw?.data)
      };
    case "player_action":
      return { seatIdx: Number(raw?.seatIdx ?? -1), text: raw?.text || "" };
    case "hand_over":
      return {
        handNum: Number(raw?.handNum ?? 0),
        totalHands: Number(raw?.totalHands ?? 0),
        winners: Array.isArray(raw?.winners)
          ? raw.winners.map((w) => ({ seatIdx: Number(w?.seatIdx ?? -1), name: w?.name || "" }))
          : [],
        desc: raw?.desc || "",
        showdownHands: Array.isArray(raw?.showdownHands)
          ? raw.showdownHands.map((s) => ({
              seatIdx: Number(s?.seatIdx ?? -1),
              name: s?.name || "",
              hand: Array.isArray(s?.hand) ? s.hand.map(normalizeCard) : []
            }))
          : []
      };
    case "match_over":
      return {
        roomId: raw?.roomId || "",
        totalHands: Number(raw?.totalHands ?? 0),
        scheduledHands: Number(raw?.scheduledHands ?? 0),
        playedHands: Number(raw?.playedHands ?? 0),
        standings: Array.isArray(raw?.standings)
          ? raw.standings.map((s) => ({
              seatIdx: Number(s?.seatIdx ?? -1),
              type: s?.type || "",
              name: s?.name || "",
              chips: Number(s?.chips ?? 0),
              buyIn: Number(s?.buyIn ?? 0),
              net: Number(s?.net ?? 0)
            }))
          : [],
        hands: Array.isArray(raw?.hands)
          ? raw.hands.map((h) => ({
              handNum: Number(h?.handNum ?? 0),
              winners: Array.isArray(h?.winners)
                ? h.winners.map((w) => ({ seatIdx: Number(w?.seatIdx ?? -1), name: w?.name || "" }))
                : [],
              desc: h?.desc || ""
            }))
          : []
      };
    case "private_hand":
      return {
        seatIdx: Number(raw?.seatIdx ?? -1),
        hand: Array.isArray(raw?.hand) ? raw.hand.map(normalizeCard) : []
      };
    case "game_state":
      return {
        roomId: raw?.roomId || "",
        started: !!raw?.started,
        settings: raw?.settings
          ? {
              totalHands: Number(raw.settings.totalHands ?? 0),
              initialChips: Number(raw.settings.initialChips ?? 0),
              smallBlind: Number(raw.settings.smallBlind ?? 0),
              bigBlind: Number(raw.settings.bigBlind ?? 0)
            }
          : null,
        handNum: Number(raw?.handNum ?? 0),
        dealerSeatIdx: Number(raw?.dealerSeatIdx ?? -1),
        sbSeatIdx: Number(raw?.sbSeatIdx ?? -1),
        bbSeatIdx: Number(raw?.bbSeatIdx ?? -1),
        activeSeatIdx: Number(raw?.activeSeatIdx ?? -1),
        pot: Number(raw?.pot ?? 0),
        round: raw?.round || "WAITING",
        communityCards: Array.isArray(raw?.communityCards) ? raw.communityCards.map(normalizeCard) : [],
        currentMaxBet: Number(raw?.currentMaxBet ?? 0),
        minRaise: Number(raw?.minRaise ?? 0),
        players: Array.isArray(raw?.players)
          ? raw.players.map((p) => ({
              seatIdx: Number(p?.seatIdx ?? -1),
              name: p?.name || "",
              type: p?.type || "player",
              chips: Number(p?.chips ?? 0),
              currentBet: Number(p?.currentBet ?? 0),
              isFolded: !!p?.isFolded,
              isBankrupt: !!p?.isBankrupt,
              totalBuyIn: Number(p?.totalBuyIn ?? 0)
            }))
          : []
      };
    case "turn":
      return {
        activeSeatIdx: Number(raw?.activeSeatIdx ?? -1),
        turnNonce: Number(raw?.turnNonce ?? 0)
      };
    case "matchmaking_status":
      return {
        state: raw?.state || "idle",
        roomCode: raw?.roomCode || "",
        queuedPlayers: Number(raw?.queuedPlayers ?? 0),
        threshold: Number(raw?.threshold ?? 0)
      };
    case "match_found":
      return {
        roomCode: raw?.roomCode || "",
        queuedPlayers: Number(raw?.queuedPlayers ?? 0)
      };
    default:
      return raw;
  }
}

function transformOutgoing(eventName, payload) {
  if (eventName === "voice_signal") {
    return {
      to: payload?.to || "",
      from: "",
      data: bytesFromJson(payload?.data)
    };
  }
  return payload || {};
}

export async function createProtoSocket(options = {}) {
  const protoUrl = options.protoUrl || "/proto/poker.proto";
  const wsUrl =
    options.url ||
    `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/ws`;

  // Keep one websocket per page runtime to avoid connection leaks.
  const host = typeof window !== "undefined" ? window : globalThis;
  if (!host[WS_DEBUG_COUNTER_KEY]) {
    host[WS_DEBUG_COUNTER_KEY] = { active: 0, totalOpened: 0 };
  }
  const existing = host[SOCKET_SINGLETON_KEY];
  // #region agent log
  debugWsLog("H1", "proto-socket.js:createProtoSocket", "create called", {
    hasExistingApi: !!existing?.api,
    sameWsUrl: existing?.wsUrl === wsUrl,
    sameProtoUrl: existing?.protoUrl === protoUrl
  });
  // #endregion
  if (existing?.api && existing.wsUrl === wsUrl && existing.protoUrl === protoUrl) {
    return existing.api;
  }
  if (existing?.api) {
    try {
      existing.api.disconnect();
    } catch (_) {}
  }

  if (!USE_TEXT_CONTROL_WS && !window.protobuf) {
    throw new Error("protobuf.js is required before createProtoSocket()");
  }
  const root = USE_TEXT_CONTROL_WS ? null : await window.protobuf.load(protoUrl);
  const Envelope = USE_TEXT_CONTROL_WS ? null : root.lookupType("nebula.poker.Envelope");
  const typeCache = new Map();
  const getType = (name) => {
    if (!name || USE_TEXT_CONTROL_WS) return null;
    if (!typeCache.has(name)) {
      typeCache.set(name, root.lookupType(`nebula.poker.${name}`));
    }
    return typeCache.get(name);
  };

  const listeners = new Map();
  let ws = null;
  let closedManually = false;
  let reconnectTimer = null;
  let heartbeatTimer = null;
  let reconnectDelay = 5000;
  let hasConnectedOnce = false;
  const reconnectAttemptAt = [];
  const pendingFrames = [];
  const stickyFrames = new Map();

  const stopHeartbeat = () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  };

  const startHeartbeat = () => {
    stopHeartbeat();
    heartbeatTimer = setInterval(() => {
      try {
        if (!ws || ws.readyState !== WebSocket.OPEN) return;
        if (USE_TEXT_CONTROL_WS) {
          ws.send(JSON.stringify({ type: "control_event", eventName: "ping", payload: {} }));
        }
      } catch (_) {}
    }, HEARTBEAT_INTERVAL_MS);
  };

  const api = {
    id: "",
    connected: false,
    on(eventName, handler) {
      if (!listeners.has(eventName)) listeners.set(eventName, new Set());
      listeners.get(eventName).add(handler);
      return api;
    },
    off(eventName, handler) {
      listeners.get(eventName)?.delete(handler);
      return api;
    },
    emit(eventName, payload = {}) {
      if (USE_TEXT_CONTROL_WS) {
        const text = JSON.stringify({ type: "control_event", eventName, payload: payload || {} });
        if (STICKY_RECONNECT_EVENTS.includes(eventName)) stickyFrames.set(eventName, text);
        if (!ws || ws.readyState !== WebSocket.OPEN) {
          pendingFrames.push(text);
          return;
        }
        ws.send(text);
        return;
      }
      const typeName = OUTGOING_TYPES[eventName];
      const Type = getType(typeName);
      if (!Type) return;
      const objectPayload = transformOutgoing(eventName, payload);
      const message = Type.create(objectPayload);
      const inner = Type.encode(message).finish();
      const env = Envelope.create({ eventName, payload: inner });
      const bytes = Envelope.encode(env).finish();
      if (STICKY_RECONNECT_EVENTS.includes(eventName)) {
        stickyFrames.set(eventName, bytes);
      }
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        pendingFrames.push(bytes);
        return;
      }
      ws.send(bytes);
    },
    disconnect() {
      closedManually = true;
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      stopHeartbeat();
      ws?.close();
      ws = null;
      if (host[SOCKET_SINGLETON_KEY]?.api === api) {
        host[SOCKET_SINGLETON_KEY] = null;
      }
    },
    stopAutoReconnect() {
      closedManually = true;
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      stopHeartbeat();
    }
  };

  const dispatch = (eventName, payload) => {
    const set = listeners.get(eventName);
    if (!set) return;
    for (const handler of set) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[proto-socket] handler failed for ${eventName}`, err);
      }
    }
  };

  const connect = () => {
    if (closedManually) return;
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
      // #region agent log
      debugWsLog("H1", "proto-socket.js:connect", "connect skipped existing live ws", {
        readyState: ws.readyState
      });
      // #endregion
      return;
    }
    // #region agent log
    debugWsLog("H1", "proto-socket.js:connect", "creating new websocket", {
      closedManually,
      reconnectDelay,
      hadWsBefore: !!ws
    });
    // #endregion
    ws = new WebSocket(wsUrl);
    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      const isReconnect = hasConnectedOnce;
      hasConnectedOnce = true;
      api.connected = true;
      host[WS_DEBUG_COUNTER_KEY].active += 1;
      host[WS_DEBUG_COUNTER_KEY].totalOpened += 1;
      // #region agent log
      debugWsLog("H3", "proto-socket.js:onopen", "ws opened", {
        isReconnect,
        reconnectDelay,
        activeWs: host[WS_DEBUG_COUNTER_KEY].active,
        totalOpened: host[WS_DEBUG_COUNTER_KEY].totalOpened
      });
      // #endregion
      dispatch("connect");
      reconnectDelay = 5000;
      startHeartbeat();
      while (pendingFrames.length && ws?.readyState === WebSocket.OPEN) {
        ws.send(pendingFrames.shift());
      }
      if (isReconnect && ws?.readyState === WebSocket.OPEN) {
        for (const eventName of STICKY_RECONNECT_EVENTS) {
          if (stickyFrames.has(eventName) && ws?.readyState === WebSocket.OPEN) {
            ws.send(stickyFrames.get(eventName));
          }
        }
      }
    };

    ws.onmessage = (event) => {
      try {
        if (typeof event.data === "string") {
          const msg = JSON.parse(event.data);
          const eventName = msg?.eventName || msg?.event || "";
          const payload = msg?.payload ?? {};
          if (eventName) dispatch(eventName, payload);
          return;
        }
        if (USE_TEXT_CONTROL_WS) return;
        const bytes = new Uint8Array(event.data);
        const env = Envelope.decode(bytes);
        const typeName = INCOMING_TYPES[env.eventName];
        const Type = getType(typeName);
        const raw = Type ? Type.toObject(Type.decode(env.payload), { longs: Number, bytes: Uint8Array }) : {};
        const payload = transformIncoming(env.eventName, raw);
        if (env.eventName === "connect") {
          api.id = payload || "";
          dispatch("connect");
          return;
        }
        dispatch(env.eventName, payload);
      } catch (err) {
        console.error("[proto-socket] decode failed", err);
      }
    };

    ws.onclose = (evt) => {
      api.connected = false;
      host[WS_DEBUG_COUNTER_KEY].active = Math.max(0, host[WS_DEBUG_COUNTER_KEY].active - 1);
      // #region agent log
      debugWsLog("H2", "proto-socket.js:onclose", "ws closed", {
        closedManually,
        reconnectDelay,
        code: Number(evt?.code || 0),
        reason: evt?.reason || "",
        wasClean: !!evt?.wasClean,
        activeWs: host[WS_DEBUG_COUNTER_KEY].active,
        totalOpened: host[WS_DEBUG_COUNTER_KEY].totalOpened
      });
      // #endregion
      dispatch("disconnect");
      stopHeartbeat();
      if (!closedManually) {
        const now = Date.now();
        while (reconnectAttemptAt.length && now - reconnectAttemptAt[0] > RECONNECT_WINDOW_MS) {
          reconnectAttemptAt.shift();
        }
        reconnectAttemptAt.push(now);
        if (reconnectAttemptAt.length > RECONNECT_MAX_ATTEMPTS) {
          console.warn(
            `[proto-socket] reconnect circuit opened: ${reconnectAttemptAt.length} attempts in ${RECONNECT_WINDOW_MS}ms`
          );
          closedManually = true;
          return;
        }
        if (!reconnectTimer) {
          reconnectTimer = setTimeout(connect, reconnectDelay);
          reconnectDelay = Math.min(reconnectDelay * 2, 12000);
        }
      }
    };

    ws.onerror = () => {
      ws?.close();
    };
  };

  connect();
  host[SOCKET_SINGLETON_KEY] = { api, wsUrl, protoUrl };
  return api;
}
