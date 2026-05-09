package nebula.gateway;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.javalin.websocket.WsContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.ArrayDeque;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Base64;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Java-owned room control + gameplay over WS text frames.
 */
public final class RoomControlWsService {
  private static final int MAX_SEATS = 10;
  private static final int SMALL_BLIND = 50;
  private static final int BIG_BLIND = 100;
  private static final int BET_UNIT = 50;
  private static final int MIN_PLAYERS_TO_START = 2;
  private static final long RECONNECT_GRACE_MS = 120_000L;
  private static final long ROOM_SWEEP_INTERVAL_SEC = 30L;
  private static final long JOIN_DEBOUNCE_MS = 1200L;
  private static final long JOIN_FLAP_WINDOW_MS = 12_000L;
  private static final int JOIN_FLAP_MAX_HITS = 16;
  private static final long ORPHAN_CLIENT_TTL_MS = 10 * 60_000L;
  private static final long STATS_LOG_INTERVAL_MS = 60_000L;
  /** Disconnect when no inbound WS text for this long (app pings refresh lastSeenAtMs every ~20s normally). */
  private static final long WS_IDLE_DISCONNECT_MS = parseWsIdleDisconnectMsEnv();
  private static final AtomicLong idleDisconnectTotal = new AtomicLong();
  private static final boolean WS_VERBOSE_LOG =
      "1".equals(System.getenv("NEBULA_WS_VERBOSE_LOG"))
          || "true".equalsIgnoreCase(System.getenv("NEBULA_WS_VERBOSE_LOG"));

  private final AuthService auth;
  private final Gson gson = new Gson();
  private final Random random = new Random();
  private final Map<String, Client> clients = new ConcurrentHashMap<>();
  private final Map<String, Room> rooms = new ConcurrentHashMap<>();
  private final Map<String, String> activeSocketBySession = new ConcurrentHashMap<>();
  private final AtomicLong forceDetachCount = new AtomicLong();
  private final AtomicLong joinThrottleCount = new AtomicLong();
  private volatile long lastStatsLogAtMs = 0L;
  private final ScheduledExecutorService janitor =
      Executors.newSingleThreadScheduledExecutor(
          r -> {
            Thread t = new Thread(r, "room-ws-janitor");
            t.setDaemon(true);
            return t;
          });

  public RoomControlWsService(AuthService auth) {
    this.auth = auth;
    janitor.scheduleWithFixedDelay(this::sweepRoomsSafely, 15, ROOM_SWEEP_INTERVAL_SEC, TimeUnit.SECONDS);
    if (WS_IDLE_DISCONNECT_MS > 0L) {
      System.err.println(
          "[room-ws] stale connection policy: inbound idle > "
              + (WS_IDLE_DISCONNECT_MS / 1000L)
              + "s triggers server closeSession (disable with NEBULA_WS_IDLE_DISCONNECT_MS=0)");
    }
  }

  public void onConnect(String socketId, WsContext ctx) {
    GatewayIdentity gid = auth.resolveFromCookie(nullToEmpty(ctx.header("Cookie"))).orElse(null);
    Client c = new Client();
    c.socketId = socketId;
    c.ctx = ctx;
    c.userId = gid == null ? 0L : gid.userId;
    c.loginUsername = gid == null ? "" : safe(gid.loginUsername);
    c.displayName = c.loginUsername.isEmpty() ? "Player" : c.loginUsername;
    c.lastSeenAtMs = System.currentTimeMillis();
    clients.put(socketId, c);
    if (WS_VERBOSE_LOG) {
      System.err.println("[room-ws] connect sid=" + socketId + " userId=" + c.userId);
    }
    emitAuthState(c, gid);
    tryJettyWsAutoPing(ctx);
  }

  public void onClose(String socketId) {
    Client c = clients.remove(socketId);
    if (c == null) return;
    clearSessionBinding(c, socketId);
    if (WS_VERBOSE_LOG) {
      System.err.println("[room-ws] close sid=" + socketId + " room=" + c.roomId + " seat=" + c.seatIdx);
    }
    if (c.roomId == null || c.roomId.isEmpty()) return;
    Room room = rooms.get(c.roomId);
    if (room == null) return;
    synchronized (room) {
      long now = System.currentTimeMillis();
      room.socketIds.remove(socketId);
      for (int i = 0; i < MAX_SEATS; i++) {
        Seat s = room.seats.get(i);
        if (s != null && "player".equals(s.type) && socketId.equals(s.socketId)) {
          s.socketId = "";
          s.disconnectedAt = now;
        }
      }
      pruneExpiredDisconnectedSeats(room, now);
      normalizeHostOwnership(room);
      if (room.socketIds.isEmpty() && !hasRecoverableDisconnectedSeat(room, now)) {
        rooms.remove(room.roomId);
      } else {
        broadcastRoomState(room);
      }
    }
  }

  public void onTextMessage(String socketId, String raw) {
    Client c = clients.get(socketId);
    if (c == null) return;
    c.lastSeenAtMs = System.currentTimeMillis();
    try {
      JsonObject msg = JsonParser.parseString(raw).getAsJsonObject();
      String type = msg.has("type") ? safe(msg.get("type").getAsString()) : "";
      if (!"control_event".equals(type)) return;
      String eventName = msg.has("eventName") ? safe(msg.get("eventName").getAsString()) : "";
      JsonObject payload = msg.has("payload") && msg.get("payload").isJsonObject() ? msg.getAsJsonObject("payload") : new JsonObject();
      if (WS_VERBOSE_LOG) {
        System.err.println("[room-ws] recv sid=" + socketId + " event=" + eventName + " payload=" + payload);
      }
      switch (eventName) {
        case "ping" -> {
          /* lastSeen updated above; optionally ack lightweight pong for debugging */
          if (WS_VERBOSE_LOG) {
            System.err.println("[room-ws] ping sid=" + socketId + " latency probe ok");
          }
        }
        case "join_room" -> handleJoinRoom(c, payload);
        case "take_seat" -> handleTakeSeat(c, payload);
        case "toggle_ai" -> handleToggleAi(c, payload);
        case "set_decor" -> handleSetDecor(c, payload);
        case "start_game" -> handleStartGame(c, payload);
        case "action" -> handleAction(c, payload);
        case "next_hand" -> handleNextHand(c);
        default -> {
          // Ignore unknown control events in this phase.
        }
      }
    } catch (Exception e) {
      System.err.println("[room-ws] parse error sid=" + socketId + " err=" + e.getMessage());
      sendEvent(c, "error_msg", mapOf("msg", "Invalid control message."));
    }
  }

  public void close() {
    janitor.shutdownNow();
  }

  private void handleJoinRoom(Client c, JsonObject payload) {
    refreshClientAuthFromCookie(c);
    if (c.userId <= 0) {
      emitAuthState(c, null);
      sendEvent(c, "error_msg", mapOf("msg", "Please log in before joining a room."));
      return;
    }
    String roomId = safe(payload.has("roomId") ? payload.get("roomId").getAsString() : "").trim().toUpperCase();
    if (roomId.isEmpty()) {
      sendEvent(c, "error_msg", mapOf("msg", "Room code is required."));
      return;
    }

    c.displayName = safe(payload.has("name") ? payload.get("name").getAsString() : c.displayName);
    c.clientId = safe(payload.has("clientId") ? payload.get("clientId").getAsString() : c.clientId);
    c.reconnectToken = safe(payload.has("reconnectToken") ? payload.get("reconnectToken").getAsString() : c.reconnectToken);
    c.sessionId = safe(payload.has("sessionId") ? payload.get("sessionId").getAsString() : c.sessionId);
    long now = System.currentTimeMillis();
    if (!allowJoinAttempt(c, roomId, now)) {
      if (WS_VERBOSE_LOG) {
        System.err.println("[room-ws] join throttle sid=" + c.socketId + " room=" + roomId + " userId=" + c.userId);
      }
      sendEvent(c, "error_msg", mapOf("msg", "Too many join attempts. Please wait 1 second and retry."));
      return;
    }
    c.lastSeenAtMs = now;
    bindExclusiveSession(c, roomId);

    Room room = rooms.computeIfAbsent(roomId, Room::new);
    synchronized (room) {
      pruneExpiredDisconnectedSeats(room, now);
      if (c.roomId != null && !c.roomId.isEmpty() && !roomId.equals(c.roomId)) {
        Room prev = rooms.get(c.roomId);
        if (prev != null) {
          synchronized (prev) {
            prev.socketIds.remove(c.socketId);
            for (int i = 0; i < MAX_SEATS; i++) {
              Seat s = prev.seats.get(i);
              if (s != null && "player".equals(s.type) && c.socketId.equals(s.socketId)) prev.seats.set(i, null);
            }
            normalizeHostOwnership(prev);
            if (prev.socketIds.isEmpty()) rooms.remove(prev.roomId);
            else broadcastRoomState(prev);
          }
        }
      }
      c.roomId = roomId;
      room.socketIds.add(c.socketId);
      reattachSeatIfMatched(c, room, now);
      normalizeHostOwnership(room);
      sendEvent(c, "you_state", mapOf("roomId", room.roomId, "seatIdx", c.seatIdx, "isHost", room.hostSocketId.equals(c.socketId)));
      sendPrivateHandIfAvailable(c, room);
      broadcastRoomState(room);
    }
  }

  private void handleTakeSeat(Client c, JsonObject payload) {
    if (c.userId <= 0) {
      sendEvent(c, "error_msg", mapOf("msg", "Please log in before taking a seat."));
      return;
    }
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: room not found."));
      return;
    }
    int seatIdx = payload.has("seatIdx") ? payload.get("seatIdx").getAsInt() : -1;
    synchronized (room) {
      long now = System.currentTimeMillis();
      int prevSeatIdx = c.seatIdx;
      boolean actorWasHost = c.socketId.equals(room.hostSocketId) || (prevSeatIdx >= 0 && prevSeatIdx == room.hostSeatIdx);
      pruneExpiredDisconnectedSeats(room, now);
      if (seatIdx < 0 || seatIdx >= MAX_SEATS) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: invalid seat index."));
        return;
      }
      Seat occupied = room.seats.get(seatIdx);
      if (occupied != null
          && "player".equals(occupied.type)
          && (occupied.socketId == null || occupied.socketId.isEmpty())
          && occupied.disconnectedAt > 0
          && now - occupied.disconnectedAt >= RECONNECT_GRACE_MS) {
        room.seats.set(seatIdx, null);
        room.players.remove(seatIdx);
        occupied = null;
      }
      if (occupied != null && !"player".equals(occupied.type)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: seat occupied by AI."));
        return;
      }
      if (occupied != null && !"".equals(occupied.socketId) && !c.socketId.equals(occupied.socketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: seat already occupied."));
        return;
      }
      int oldSeatIdx = -1;
      for (int i = 0; i < MAX_SEATS; i++) {
        Seat s = room.seats.get(i);
        if (s != null && "player".equals(s.type) && c.socketId.equals(s.socketId)) {
          oldSeatIdx = i;
          room.seats.set(i, null);
          break;
        }
      }
      Seat s = new Seat();
      s.type = "player";
      s.name = c.displayName == null || c.displayName.isEmpty() ? "Player" : c.displayName;
      s.socketId = c.socketId;
      s.clientId = nullToEmpty(c.clientId);
      s.userId = c.userId;
      s.decor = "none";
      s.sessionId = nullToEmpty(c.sessionId);
      s.reconnectToken = nullToEmpty(c.reconnectToken);
      s.disconnectedAt = 0L;
      room.seats.set(seatIdx, s);
      c.seatIdx = seatIdx;
      // Preserve bankroll/state when the same user changes seat.
      if (oldSeatIdx >= 0 && oldSeatIdx != seatIdx) {
        PlayerState moved = room.players.remove(oldSeatIdx);
        if (moved != null) {
          moved.seatIdx = seatIdx;
          moved.type = "player";
          moved.name = s.name;
          room.players.put(seatIdx, moved);
        }
      }
      if (!room.players.containsKey(seatIdx)) {
        PlayerState p = new PlayerState();
        p.seatIdx = seatIdx;
        p.type = "player";
        p.name = s.name;
        if (c.userId > 0 && room.bankrollByUser.containsKey(c.userId)) {
          p.chips = Math.max(0, room.bankrollByUser.getOrDefault(c.userId, room.initialChips));
          p.totalBuyIn = Math.max(room.initialChips, room.totalBuyInByUser.getOrDefault(c.userId, room.initialChips));
        } else {
          p.chips = room.initialChips;
          p.totalBuyIn = room.initialChips;
        }
        room.players.put(seatIdx, p);
      }
      c.sessionId = c.sessionId == null || c.sessionId.isEmpty() ? randomToken() : c.sessionId;
      c.reconnectToken = randomToken();
      s.sessionId = c.sessionId;
      s.reconnectToken = c.reconnectToken;
      if (room.hostSeatIdx < 0 || actorWasHost) room.hostSeatIdx = seatIdx;
      normalizeHostOwnership(room);
      sendEvent(c, "seat_taken", mapOf("seatIdx", seatIdx));
      sendEvent(
          c,
          "seat_session",
          mapOf(
              "roomId", room.roomId,
              "reconnectToken", c.reconnectToken,
              "sessionId", c.sessionId,
              "lastSeenSeq", 0));
      sendEvent(c, "you_state", mapOf("roomId", room.roomId, "seatIdx", seatIdx, "isHost", room.hostSocketId.equals(c.socketId)));
      broadcastRoomState(room);
    }
  }

  private void handleToggleAi(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: room not found."));
      return;
    }
    int seatIdx = payload.has("seatIdx") ? payload.get("seatIdx").getAsInt() : -1;
    synchronized (room) {
      if (!c.socketId.equals(room.hostSocketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: only host can add or remove AI."));
        return;
      }
      if (seatIdx < 0 || seatIdx >= MAX_SEATS) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: invalid seat index."));
        return;
      }
      Seat cur = room.seats.get(seatIdx);
      if (cur != null && "player".equals(cur.type)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: player is already seated there."));
        return;
      }
      if (cur != null && "ai".equals(cur.type)) {
        room.seats.set(seatIdx, null);
        room.players.remove(seatIdx);
      } else {
        Seat ai = new Seat();
        ai.type = "ai";
        ai.name = "AI-" + seatIdx;
        ai.socketId = "";
        ai.clientId = "";
        ai.decor = "none";
        room.seats.set(seatIdx, ai);
        PlayerState p = room.players.get(seatIdx);
        if (p == null) p = new PlayerState();
        p.seatIdx = seatIdx;
        p.type = "ai";
        p.name = ai.name;
        p.aiStyle = aiStyleForSeat(seatIdx);
        if (p.totalBuyIn <= 0) {
          p.totalBuyIn = room.initialChips;
          p.chips = room.initialChips;
        }
        room.players.put(seatIdx, p);
      }
      normalizeHostOwnership(room);
      broadcastRoomState(room);
    }
  }

  private void handleSetDecor(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot set decor: room not found."));
      return;
    }
    if (c.seatIdx < 0 || c.seatIdx >= MAX_SEATS) {
      sendEvent(c, "error_msg", mapOf("msg", "Take a seat before setting decor."));
      return;
    }
    String decor = safe(payload.has("decor") ? payload.get("decor").getAsString() : "none");
    if (!"none".equals(decor) && !"cola".equals(decor) && !"coffee".equals(decor) && !"wine".equals(decor) && !"cigar".equals(decor)) {
      decor = "none";
    }
    synchronized (room) {
      Seat seat = room.seats.get(c.seatIdx);
      if (seat == null || !"player".equals(seat.type) || !c.socketId.equals(seat.socketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot set decor: seat ownership mismatch."));
        return;
      }
      seat.decor = decor;
      broadcastRoomState(room);
    }
  }

  private void handleStartGame(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot start game: room not found."));
      return;
    }
    synchronized (room) {
      if (!c.socketId.equals(room.hostSocketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Only host can start game."));
        return;
      }
      List<Integer> activeSeats = activeSeatList(room);
      if (activeSeats.size() < MIN_PLAYERS_TO_START) {
        sendEvent(c, "error_msg", mapOf("msg", "At least 2 players (or AI) are required."));
        return;
      }
      room.totalHands = payload.has("totalHands") ? Math.max(1, payload.get("totalHands").getAsInt()) : room.totalHands;
      room.initialChips = payload.has("initialChips") ? Math.max(1000, payload.get("initialChips").getAsInt()) : room.initialChips;
      room.started = true;
      room.handHistory.clear();
      room.handNum = 0;
      room.dealerSeatIdx = firstPlayerSeat(room);
      for (int seatIdx : activeSeats) {
        PlayerState p = room.players.computeIfAbsent(seatIdx, k -> new PlayerState());
        p.seatIdx = seatIdx;
        p.type = room.seats.get(seatIdx).type;
        p.name = room.seats.get(seatIdx).name;
        if (p.totalBuyIn <= 0) p.totalBuyIn = room.initialChips;
        if (p.chips <= 0) p.chips = room.initialChips;
      }
      startNewHandLocked(room);
      broadcastRoomState(room);
      broadcastGameState(room);
      if (room.currentTurnSeatIdx >= 0) {
        broadcastTurn(room, room.currentTurnSeatIdx);
      }
      processAiTurns(room);
    }
  }

  private void handleAction(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null || !room.started) return;
    synchronized (room) {
      if (c.seatIdx < 0 || c.seatIdx != room.currentTurnSeatIdx) {
        sendEvent(c, "error_msg", mapOf("msg", "Not your turn."));
        return;
      }
      applyActionLocked(room, c.seatIdx, payload);
      processAiTurns(room);
    }
  }

  private void handleNextHand(Client c) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot start next hand: room not found."));
      return;
    }
    synchronized (room) {
      if (!room.started) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot start next hand: match is not active."));
        return;
      }
      if (!c.socketId.equals(room.hostSocketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Only host can start next hand."));
        return;
      }
      if (!"HAND_OVER".equals(room.round) && !"WAITING".equals(room.round)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot start next hand during " + room.round + "."));
        return;
      }
      if (room.handNum >= room.totalHands) {
        sendEvent(c, "error_msg", mapOf("msg", "Scheduled hands already finished."));
        return;
      }
      sendEvent(c, "next_hand_ack", mapOf("ok", true, "fromHandNum", room.handNum));
      startNewHandLocked(room);
      broadcastGameState(room);
      broadcastRoomState(room);
      if (room.currentTurnSeatIdx >= 0) {
        broadcastTurn(room, room.currentTurnSeatIdx);
      }
      processAiTurns(room);
    }
  }

  private Room roomFor(Client c) {
    if (c.roomId == null || c.roomId.isEmpty()) return null;
    return rooms.get(c.roomId);
  }

  private void broadcastRoomState(Room room) {
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      Map<String, Object> payload = buildRoomState(room, sid);
      sendEvent(cc, "room_state", payload);
    }
  }

  private Map<String, Object> buildRoomState(Room room, String forSocketId) {
    List<Object> seats = new ArrayList<>();
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) {
        seats.add(null);
        continue;
      }
      Map<String, Object> one = new HashMap<>();
      one.put("seatIdx", i);
      one.put("type", s.type);
      one.put("name", s.name);
      one.put("decor", s.decor == null ? "none" : s.decor);
      one.put("socketId", nullToEmpty(s.socketId));
      one.put("clientId", nullToEmpty(s.clientId));
      one.put("aiManaged", false);
      one.put("disconnectedAt", s.disconnectedAt);
      seats.add(one);
    }
    Map<String, Object> settings = new HashMap<>();
    settings.put("totalHands", room.totalHands);
    settings.put("initialChips", room.initialChips);
    settings.put("smallBlind", SMALL_BLIND);
    settings.put("bigBlind", BIG_BLIND);

    Map<String, Object> state = new HashMap<>();
    state.put("roomId", room.roomId);
    state.put("hostSocketId", nullToEmpty(room.hostSocketId));
    state.put("hostSeatIdx", findHostSeatIdx(room));
    state.put("isHost", forSocketId != null && forSocketId.equals(room.hostSocketId));
    state.put("started", room.started);
    state.put("ownerUserId", 0);
    state.put("roomCode", room.roomId);
    state.put("visibility", "private");
    state.put("status", room.started ? "playing" : "waiting");
    state.put("maxPlayers", MAX_SEATS);
    state.put("settings", settings);
    state.put("seats", seats);
    return state;
  }

  private int findHostSeatIdx(Room room) {
    if (room.hostSeatIdx >= 0 && room.hostSeatIdx < MAX_SEATS) {
      Seat hs = room.seats.get(room.hostSeatIdx);
      if (hs != null && "player".equals(hs.type)) return room.hostSeatIdx;
    }
    if (room.hostSocketId == null || room.hostSocketId.isEmpty()) return -1;
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s != null && "player".equals(s.type) && room.hostSocketId.equals(s.socketId)) return i;
    }
    return -1;
  }

  private void sendEvent(Client c, String eventName, Object payload) {
    if (c == null || c.ctx == null) return;
    try {
      JsonObject out = new JsonObject();
      out.addProperty("eventName", eventName);
      out.add("payload", gson.toJsonTree(payload));
      c.ctx.send(out.toString());
    } catch (Exception ignored) {
      // Some network failures do not trigger onClose immediately; detach proactively.
      forceDetachSocket(c.socketId, "send failed");
    }
  }

  private void emitAuthState(Client c, GatewayIdentity gid) {
    if (c == null) return;
    boolean authenticated = gid != null && gid.userId > 0;
    if (!authenticated) {
      sendEvent(c, "auth_state", mapOf("authenticated", false, "profile", null));
      return;
    }
    Map<String, Object> profile = new HashMap<>();
    profile.put("userId", gid.userId);
    profile.put("externalId", gid.loginUsername);
    profile.put("loginUsername", gid.loginUsername);
    profile.put("displayName", gid.loginUsername);
    profile.put("username", gid.loginUsername);
    profile.put("avatar", "");
    profile.put("gold", 0);
    profile.put("gamesPlayed", 0);
    profile.put("gamesWon", 0);
    try {
      if (gid.profileB64 != null && !gid.profileB64.isEmpty()) {
        String decoded = new String(Base64.getDecoder().decode(gid.profileB64), StandardCharsets.UTF_8);
        JsonObject po = JsonParser.parseString(decoded).getAsJsonObject();
        if (po.has("displayName") && !po.get("displayName").isJsonNull()) profile.put("displayName", safe(po.get("displayName").getAsString()));
        if (po.has("username") && !po.get("username").isJsonNull()) profile.put("username", safe(po.get("username").getAsString()));
        if (po.has("avatar") && !po.get("avatar").isJsonNull()) profile.put("avatar", safe(po.get("avatar").getAsString()));
        if (po.has("gold") && !po.get("gold").isJsonNull()) profile.put("gold", po.get("gold").getAsLong());
        if (po.has("gamesPlayed") && !po.get("gamesPlayed").isJsonNull()) profile.put("gamesPlayed", po.get("gamesPlayed").getAsInt());
        if (po.has("gamesWon") && !po.get("gamesWon").isJsonNull()) profile.put("gamesWon", po.get("gamesWon").getAsInt());
      }
    } catch (Exception ignored) {
    }
    sendEvent(c, "auth_state", mapOf("authenticated", true, "profile", profile));
  }

  private void broadcastPlayerAction(Room room, int seatIdx, String text) {
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "player_action", mapOf("seatIdx", seatIdx, "text", text));
    }
  }

  private void broadcastTurn(Room room, int activeSeatIdx) {
    room.turnNonce += 1;
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "turn", mapOf("activeSeatIdx", activeSeatIdx, "turnNonce", room.turnNonce));
    }
  }

  private void broadcastGameState(Room room) {
    List<Map<String, Object>> players = new ArrayList<>();
    for (int seatIdx : activeSeatList(room)) {
      Seat s = room.seats.get(seatIdx);
      PlayerState p = room.players.get(seatIdx);
      if (s == null || p == null) continue;
      players.add(
          mapOf(
              "seatIdx", seatIdx,
              "name", s.name,
              "type", s.type,
              "chips", p.chips,
              "currentBet", p.currentBet,
              "isFolded", p.folded,
              "isBankrupt", p.chips <= 0,
              "totalBuyIn", p.totalBuyIn));
    }
    Map<String, Object> settings =
        mapOf("totalHands", room.totalHands, "initialChips", room.initialChips, "smallBlind", SMALL_BLIND, "bigBlind", BIG_BLIND);
    Map<String, Object> game =
        mapOf(
            "roomId", room.roomId,
            "started", room.started,
            "settings", settings,
            "handNum", room.handNum,
            "dealerSeatIdx", room.dealerSeatIdx,
            "sbSeatIdx", -1,
            "bbSeatIdx", -1,
            "activeSeatIdx", room.currentTurnSeatIdx,
            "pot", room.pot,
            "round", room.round,
            "communityCards", toCardMaps(room.communityCards),
            "currentMaxBet", room.currentMaxBet,
            "minRaise", room.minRaise,
            "players", players);
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "game_state", game);
    }
  }

  private int firstPlayerSeat(Room room) {
    List<Integer> seats = activeSeatList(room);
    return seats.isEmpty() ? -1 : seats.get(0);
  }

  private int nextPlayerSeat(Room room, int current) {
    return nextSeatFrom(room, current, activeSeatList(room));
  }

  private void applyActionLocked(Room room, int seatIdx, JsonObject payload) {
    PlayerState actor = room.players.get(seatIdx);
    if (actor == null || actor.folded || actor.chips <= 0) return;
    if ("HAND_OVER".equals(room.round) || "WAITING".equals(room.round)) {
      sendActionError(room, seatIdx, "No active hand right now.");
      return;
    }
    String type = safe(payload.has("type") ? payload.get("type").getAsString() : "").toLowerCase();
    if (type.isEmpty()) type = "check";
    if (!isSupportedActionType(type)) {
      sendActionError(room, seatIdx, "Unsupported action type.");
      return;
    }
    int callNeed = Math.max(0, room.currentMaxBet - actor.currentBet);
    int paid = 0;
    String actionText;

    switch (type) {
      case "fold" -> {
        actor.folded = true;
        actionText = "FOLD";
      }
      case "allin" -> {
        if (actor.chips <= 0) {
          sendActionError(room, seatIdx, "No chips left for all-in.");
          return;
        }
        paid = actor.chips;
        actor.chips = 0;
        actor.currentBet += paid;
        actor.allIn = true;
        int raiseDelta = actor.currentBet - room.currentMaxBet;
        if (raiseDelta > 0) {
          room.currentMaxBet = actor.currentBet;
          room.minRaise = normalizeRaiseBy(Math.max(room.minRaise, raiseDelta), BET_UNIT);
          resetPendingAfterAggression(room, seatIdx);
          actionText = "ALL-IN $" + paid;
        } else {
          actionText = callNeed > 0 ? "CALL $" + paid : "ALL-IN $" + paid;
        }
        room.pot += paid;
      }
      case "raise" -> {
        if (actor.chips <= callNeed) {
          sendActionError(room, seatIdx, "Insufficient chips to raise (all-in only).");
          return;
        }
        int raiseByRaw = payload.has("raiseBy") ? Math.max(1, payload.get("raiseBy").getAsInt()) : room.minRaise;
        int raiseBy = normalizeRaiseBy(raiseByRaw, room.minRaise);
        if (raiseBy < room.minRaise) {
          sendActionError(room, seatIdx, "Raise must be at least $" + room.minRaise + ".");
          return;
        }
        int target = room.currentMaxBet + raiseBy;
        int need = Math.max(0, target - actor.currentBet);
        if (need >= actor.chips) {
          // degrade to all-in
          paid = actor.chips;
          actor.chips = 0;
          actor.currentBet += paid;
          actor.allIn = true;
          int raiseDelta = actor.currentBet - room.currentMaxBet;
          if (raiseDelta > 0) {
            room.currentMaxBet = actor.currentBet;
            room.minRaise = normalizeRaiseBy(Math.max(room.minRaise, raiseDelta), BET_UNIT);
            resetPendingAfterAggression(room, seatIdx);
          }
          room.pot += paid;
          actionText = "ALL-IN $" + paid;
        } else {
          paid = need;
          actor.chips -= paid;
          actor.currentBet += paid;
          room.pot += paid;
          int raiseDelta = actor.currentBet - room.currentMaxBet;
          if (raiseDelta > 0) {
            room.currentMaxBet = actor.currentBet;
            room.minRaise = normalizeRaiseBy(Math.max(room.minRaise, raiseDelta), BET_UNIT);
          }
          resetPendingAfterAggression(room, seatIdx);
          actionText = callNeed > 0 ? "RAISE $" + raiseDelta : "BET $" + raiseDelta;
        }
      }
      default -> {
        // call/check
        if ("check".equals(type) && callNeed > 0) {
          sendActionError(room, seatIdx, "Cannot check while facing a bet.");
          return;
        }
        if ("call".equals(type) && callNeed <= 0) {
          actionText = "CHECK";
        } else if (callNeed <= 0) {
          actionText = "CHECK";
        } else {
          paid = Math.min(callNeed, actor.chips);
          actor.chips -= paid;
          actor.currentBet += paid;
          room.pot += paid;
          if (actor.chips == 0) actor.allIn = true;
          actionText = paid < callNeed ? "ALL-IN $" + paid : "CALL $" + paid;
        }
      }
    }

    room.pendingToAct.remove(seatIdx);
    broadcastPlayerAction(room, seatIdx, actionText);

    settleStreetOrAdvanceTurn(room);
    if ("HAND_OVER".equals(room.round)) {
      maybeFinishMatch(room);
      broadcastRoomState(room);
    }
    broadcastGameState(room);
    if (room.currentTurnSeatIdx >= 0 && room.started && !"HAND_OVER".equals(room.round)) {
      broadcastTurn(room, room.currentTurnSeatIdx);
    }
  }

  private void settleStreetOrAdvanceTurn(Room room) {
    // Keep advancing streets automatically when nobody can act (e.g., multiple all-ins).
    while (true) {
      List<Integer> contenders = contenders(room);
      if (contenders.size() <= 1) {
        finishHand(room, contenders);
        return;
      }

      if (!room.pendingToAct.isEmpty()) {
        room.currentTurnSeatIdx = nextPendingSeat(room, room.currentTurnSeatIdx);
        if (room.currentTurnSeatIdx >= 0) return;
        // Defensive fallback: if pending seats exist but no next seat found, force street settle.
        room.pendingToAct.clear();
      }

      // End street
      for (int seatIdx : activeSeatList(room)) {
        PlayerState p = room.players.get(seatIdx);
        if (p != null) p.currentBet = 0;
      }
      room.currentMaxBet = 0;
      room.minRaise = BIG_BLIND;
      if ("PRE_FLOP".equals(room.round)) {
        room.round = "FLOP";
        dealCommunity(room, 3);
      } else if ("FLOP".equals(room.round)) {
        room.round = "TURN";
        dealCommunity(room, 1);
      } else if ("TURN".equals(room.round)) {
        room.round = "RIVER";
        dealCommunity(room, 1);
      } else {
        finishHand(room, contenders);
        return;
      }

      resetPendingForStreet(room);
      room.currentTurnSeatIdx = firstActionSeatForStreet(room);
      if (room.currentTurnSeatIdx >= 0) return;
      // If still no actor, continue loop and auto-runout to showdown.
    }
  }

  private void finishHand(Room room, List<Integer> contenders) {
    room.round = "HAND_OVER";
    room.currentTurnSeatIdx = -1;
    List<Integer> winners = new ArrayList<>();
    String desc;
    List<Map<String, Object>> showdownHands = new ArrayList<>();

    if (contenders.size() == 1) {
      int winnerSeat = contenders.get(0);
      winners.add(winnerSeat);
      desc = "All others folded";
    } else {
      long bestScore = Long.MIN_VALUE;
      for (int seatIdx : contenders) {
        PlayerState p = room.players.get(seatIdx);
        if (p == null) continue;
        List<Card> all = new ArrayList<>(p.holeCards);
        all.addAll(room.communityCards);
        HandRank hr = bestHand(all);
        if (hr.score > bestScore) {
          bestScore = hr.score;
          winners.clear();
          winners.add(seatIdx);
          desc = hr.desc;
        } else if (hr.score == bestScore) {
          winners.add(seatIdx);
        }
        showdownHands.add(
            mapOf(
                "seatIdx", seatIdx,
                "name", p.name,
                "hand", toCardMaps(p.holeCards)));
      }
      desc = winners.size() == 1 ? bestHand(concat(room.players.get(winners.get(0)).holeCards, room.communityCards)).desc : "Split pot";
    }

    int share = winners.isEmpty() ? 0 : room.pot / winners.size();
    int rem = winners.isEmpty() ? 0 : room.pot % winners.size();
    for (int i = 0; i < winners.size(); i++) {
      PlayerState p = room.players.get(winners.get(i));
      if (p == null) continue;
      p.chips += share + (i == 0 ? rem : 0);
    }

    List<Map<String, Object>> winnerRows = new ArrayList<>();
    for (int seatIdx : winners) {
      PlayerState p = room.players.get(seatIdx);
      winnerRows.add(mapOf("seatIdx", seatIdx, "name", p == null ? ("Seat " + (seatIdx + 1)) : p.name));
    }
    room.handHistory.add(new HandRec(room.handNum, winnerRows, desc == null ? "Hand over" : desc));
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(
          cc,
          "hand_over",
          mapOf(
              "handNum", room.handNum,
              "totalHands", room.totalHands,
              "winners", winnerRows,
              "desc", desc == null ? "Hand over" : desc,
              "showdownHands", showdownHands));
    }
  }

  private void maybeFinishMatch(Room room) {
    // Finish either by scheduled hand count, or early when only one bankroll remains.
    if (room.handNum < room.totalHands && countPlayersWithChips(room) > 1) return;
    persistMatchProgress(room);
    room.started = false;
    room.round = "WAITING";
    List<Map<String, Object>> standings = new ArrayList<>();
    for (int seatIdx : activeSeatList(room)) {
      PlayerState p = room.players.get(seatIdx);
      if (p == null) continue;
      standings.add(
          mapOf(
              "seatIdx", seatIdx,
              "type", p.type,
              "name", p.name,
              "chips", p.chips,
              "buyIn", p.totalBuyIn,
              "net", p.chips - p.totalBuyIn));
    }
    standings.sort((a, b) -> Integer.compare(((Number) b.get("chips")).intValue(), ((Number) a.get("chips")).intValue()));
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(
          cc,
          "match_over",
          mapOf(
              "roomId", room.roomId,
              "totalHands", room.totalHands,
              "scheduledHands", room.totalHands,
              "playedHands", room.handNum,
              "standings", standings,
              "hands", room.handHistory));
    }
  }

  private void persistMatchProgress(Room room) {
    if (room == null || !JdbcEnv.enabled()) return;
    List<Integer> humanSeats = new ArrayList<>();
    int bestChips = Integer.MIN_VALUE;
    for (int seatIdx : activeSeatList(room)) {
      Seat s = room.seats.get(seatIdx);
      PlayerState p = room.players.get(seatIdx);
      if (s == null || p == null) continue;
      if (!"player".equals(s.type) || s.userId <= 0) continue;
      humanSeats.add(seatIdx);
      bestChips = Math.max(bestChips, p.chips);
    }
    if (humanSeats.isEmpty()) return;
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password())) {
      ensureMmrSchema(c);
      for (int seatIdx : humanSeats) {
        Seat s = room.seats.get(seatIdx);
        PlayerState p = room.players.get(seatIdx);
        if (s == null || p == null || s.userId <= 0) continue;
        int net = p.chips - p.totalBuyIn;
        boolean winner = p.chips == bestChips;
        int mmrDelta = winner ? 16 : -8;
        if (net > 0) mmrDelta += Math.min(10, net / 500);
        if (net < 0) mmrDelta -= Math.min(10, Math.abs(net) / 700);
        mmrDelta = Math.max(-30, Math.min(30, mmrDelta));

        try (PreparedStatement up =
            c.prepareStatement(
                "UPDATE users SET gold=GREATEST(0, gold + ?), games_played=games_played+1, games_won=games_won+? WHERE id=?")) {
          up.setInt(1, net);
          up.setInt(2, winner ? 1 : 0);
          up.setLong(3, s.userId);
          up.executeUpdate();
        }
        int oldMmr = 1000;
        try (PreparedStatement q = c.prepareStatement("SELECT mmr_score FROM user_mmr WHERE user_id=? LIMIT 1")) {
          q.setLong(1, s.userId);
          try (ResultSet rs = q.executeQuery()) {
            if (rs.next()) oldMmr = rs.getInt(1);
          }
        }
        int newMmr = Math.max(100, oldMmr + mmrDelta);
        try (PreparedStatement upMmr =
            c.prepareStatement(
                "INSERT INTO user_mmr (user_id, mmr_score, updated_at_ms) VALUES (?,?,?) "
                    + "ON DUPLICATE KEY UPDATE mmr_score=VALUES(mmr_score), updated_at_ms=VALUES(updated_at_ms)")) {
          upMmr.setLong(1, s.userId);
          upMmr.setInt(2, newMmr);
          upMmr.setLong(3, System.currentTimeMillis());
          upMmr.executeUpdate();
        }
      }
    } catch (Exception e) {
      System.err.println("[room-ws] persistMatchProgress failed: " + e.getMessage());
    }
  }

  private void ensureMmrSchema(Connection c) throws Exception {
    try (Statement st = c.createStatement()) {
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS user_mmr ("
              + "user_id BIGINT NOT NULL PRIMARY KEY,"
              + "mmr_score INT NOT NULL DEFAULT 1000,"
              + "updated_at_ms BIGINT NOT NULL DEFAULT 0"
              + ")");
    }
  }

  private void startNewHandLocked(Room room) {
    List<Integer> seats = activeSeatList(room);
    if (seats.size() < MIN_PLAYERS_TO_START) return;
    room.handNum += 1;
    room.round = "PRE_FLOP";
    room.pot = 0;
    room.currentMaxBet = BIG_BLIND;
    room.minRaise = BIG_BLIND;
    room.communityCards.clear();
    room.deck = freshDeck();
    Collections.shuffle(room.deck, random);

    // rotate dealer
    int prevDealer = room.dealerSeatIdx;
    room.dealerSeatIdx = nextSeatFrom(room, prevDealer, seats);
    int sbSeat = nextSeatFrom(room, room.dealerSeatIdx, seats);
    int bbSeat = nextSeatFrom(room, sbSeat, seats);

    // reset players + deal holes
    for (int seatIdx : seats) {
      PlayerState p = room.players.get(seatIdx);
      if (p == null) continue;
      p.folded = p.chips <= 0;
      p.allIn = false;
      p.currentBet = 0;
      p.holeCards.clear();
      if (!p.folded) {
        p.holeCards.add(draw(room));
        p.holeCards.add(draw(room));
      }
    }

    // blinds
    postBlind(room, sbSeat, SMALL_BLIND);
    postBlind(room, bbSeat, BIG_BLIND);
    room.currentTurnSeatIdx = nextSeatFrom(room, bbSeat, seats);
    resetPendingForStreet(room);
    room.currentTurnSeatIdx = firstActionSeatForStreet(room);
    if (room.currentTurnSeatIdx < 0) {
      // Nobody can act at hand start (e.g. zero-chip/folded edge cases) -> auto-advance.
      settleStreetOrAdvanceTurn(room);
    }

    // send private hands
    for (int seatIdx : seats) {
      Seat seat = room.seats.get(seatIdx);
      PlayerState p = room.players.get(seatIdx);
      if (seat == null || p == null) continue;
      if (!"player".equals(seat.type)) continue;
      if (seat.socketId == null || seat.socketId.isEmpty()) continue;
      Client cc = clients.get(seat.socketId);
      if (cc == null) continue;
      sendEvent(cc, "private_hand", mapOf("seatIdx", seatIdx, "hand", toCardMaps(p.holeCards)));
    }
  }

  private void sendPrivateHandIfAvailable(Client c, Room room) {
    if (c == null || room == null) return;
    if (c.seatIdx < 0 || c.seatIdx >= MAX_SEATS) return;
    Seat seat = room.seats.get(c.seatIdx);
    if (seat == null || !"player".equals(seat.type)) return;
    if (!c.socketId.equals(seat.socketId)) return;
    PlayerState p = room.players.get(c.seatIdx);
    if (p == null || p.holeCards == null || p.holeCards.size() < 2) return;
    sendEvent(c, "private_hand", mapOf("seatIdx", c.seatIdx, "hand", toCardMaps(p.holeCards)));
  }

  private void processAiTurns(Room room) {
    int guard = 64;
    while (guard-- > 0 && room.started && room.currentTurnSeatIdx >= 0 && !"HAND_OVER".equals(room.round)) {
      Seat seat = room.seats.get(room.currentTurnSeatIdx);
      if (seat == null || !"ai".equals(seat.type)) return;
      JsonObject aiAction = new JsonObject();
      PlayerState p = room.players.get(room.currentTurnSeatIdx);
      if (p == null) return;
      int callNeed = Math.max(0, room.currentMaxBet - p.currentBet);
      double handStrength = estimateHandStrength(room, p);
      String style = p.aiStyle == null ? "balanced" : p.aiStyle;
      // style thresholds: conservative folds more, aggressive raises more
      double foldBias = "conservative".equals(style) ? 0.25 : ("aggressive".equals(style) ? -0.12 : 0.0);
      double raiseBias = "conservative".equals(style) ? -0.10 : ("aggressive".equals(style) ? 0.20 : 0.05);
      double pressure = p.chips <= 0 ? 1.0 : Math.min(1.0, callNeed / (double) Math.max(1, p.chips));

      if (callNeed == 0) {
        if (p.chips > room.minRaise && handStrength + raiseBias > 0.58 && random.nextDouble() < (0.45 + raiseBias)) {
          int raiseBy = normalizeRaiseBy(room.minRaise + (int) (p.chips * Math.max(0.04, handStrength * 0.08)), room.minRaise);
          aiAction.addProperty("type", "raise");
          aiAction.addProperty("raiseBy", raiseBy);
        } else {
          aiAction.addProperty("type", "check");
        }
      } else {
        double foldScore = pressure * 0.9 - handStrength + foldBias;
        if (callNeed >= p.chips) {
          if (handStrength + raiseBias > 0.62) aiAction.addProperty("type", "allin");
          else aiAction.addProperty("type", "fold");
        } else if (foldScore > 0.48 && random.nextDouble() < Math.min(0.85, foldScore + 0.2)) {
          aiAction.addProperty("type", "fold");
        } else if (handStrength + raiseBias > 0.72 && p.chips > callNeed + room.minRaise && random.nextDouble() < 0.35) {
          int raiseBy = normalizeRaiseBy((int) Math.round(Math.min(p.chips - callNeed, room.minRaise * (1.0 + handStrength))), room.minRaise);
          aiAction.addProperty("type", "raise");
          aiAction.addProperty("raiseBy", raiseBy);
        } else {
          aiAction.addProperty("type", "call");
        }
      }
      applyActionLocked(room, room.currentTurnSeatIdx, aiAction);
    }
  }

  private void postBlind(Room room, int seatIdx, int blind) {
    PlayerState p = room.players.get(seatIdx);
    if (p == null || p.folded) return;
    int pay = Math.min(p.chips, blind);
    p.chips -= pay;
    p.currentBet += pay;
    room.pot += pay;
    if (p.chips == 0) p.allIn = true;
  }

  private int normalizeRaiseBy(int raiseBy, int minRaise) {
    int unit = Math.max(1, BET_UNIT);
    int floor = Math.max(minRaise, unit);
    int v = Math.max(floor, raiseBy);
    // Round up to betting unit so raises are always clean integers (50-step chips).
    return ((v + unit - 1) / unit) * unit;
  }

  private void resetPendingForStreet(Room room) {
    room.pendingToAct.clear();
    for (int seatIdx : activeSeatList(room)) {
      PlayerState p = room.players.get(seatIdx);
      if (p == null || p.folded || p.allIn || p.chips <= 0) continue;
      room.pendingToAct.add(seatIdx);
    }
    room.pendingToAct.remove(room.currentTurnSeatIdx);
  }

  private void resetPendingAfterAggression(Room room, int aggressorSeatIdx) {
    room.pendingToAct.clear();
    for (int seatIdx : activeSeatList(room)) {
      if (seatIdx == aggressorSeatIdx) continue;
      PlayerState p = room.players.get(seatIdx);
      if (p == null || p.folded || p.allIn || p.chips <= 0) continue;
      room.pendingToAct.add(seatIdx);
    }
  }

  private int firstActionSeatForStreet(Room room) {
    List<Integer> seats = activeSeatList(room);
    if (seats.isEmpty()) return -1;
    // Pre-flop starts from the seat after BB (already assigned to currentTurnSeatIdx).
    // Post-flop starts from seat after dealer.
    int seat = "PRE_FLOP".equals(room.round) ? room.currentTurnSeatIdx : nextSeatFrom(room, room.dealerSeatIdx, seats);
    if (!room.pendingToAct.contains(seat)) return nextPendingSeat(room, seat);
    room.pendingToAct.remove(seat);
    return seat;
  }

  private int countPlayersWithChips(Room room) {
    int alive = 0;
    for (int seatIdx : activeSeatList(room)) {
      PlayerState p = room.players.get(seatIdx);
      if (p == null || p.chips <= 0) continue;
      alive++;
    }
    return alive;
  }

  private int nextPendingSeat(Room room, int current) {
    if (room.pendingToAct.isEmpty()) return -1;
    List<Integer> seats = activeSeatList(room);
    int idx = current;
    for (int i = 0; i < MAX_SEATS + 1; i++) {
      idx = nextSeatFrom(room, idx, seats);
      if (room.pendingToAct.remove(idx)) return idx;
    }
    return -1;
  }

  private List<Integer> activeSeatList(Room room) {
    List<Integer> out = new ArrayList<>();
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) continue;
      if (!"player".equals(s.type) && !"ai".equals(s.type)) continue;
      out.add(i);
    }
    return out;
  }

  private List<Integer> contenders(Room room) {
    List<Integer> out = new ArrayList<>();
    for (int seatIdx : activeSeatList(room)) {
      PlayerState p = room.players.get(seatIdx);
      if (p == null) continue;
      if (!p.folded) out.add(seatIdx);
    }
    return out;
  }

  private int nextSeatFrom(Room room, int current, List<Integer> seats) {
    if (seats.isEmpty()) return -1;
    if (current < 0) return seats.get(0);
    int pos = seats.indexOf(current);
    if (pos < 0) return seats.get(0);
    return seats.get((pos + 1) % seats.size());
  }

  private Card draw(Room room) {
    if (room.deck.isEmpty()) room.deck = freshDeck();
    return room.deck.remove(room.deck.size() - 1);
  }

  private void dealCommunity(Room room, int count) {
    if (count <= 0) return;
    for (int i = 0; i < count; i++) {
      room.communityCards.add(draw(room));
    }
  }

  private List<Card> freshDeck() {
    List<Card> deck = new ArrayList<>(52);
    List<String> suits = Arrays.asList("S", "H", "D", "C");
    for (String s : suits) {
      for (int v = 2; v <= 14; v++) {
        Card c = new Card();
        c.s = s;
        c.v = v;
        c.r = rankLabel(v);
        deck.add(c);
      }
    }
    return deck;
  }

  private static String rankLabel(int v) {
    return switch (v) {
      case 14 -> "A";
      case 13 -> "K";
      case 12 -> "Q";
      case 11 -> "J";
      case 10 -> "T";
      default -> String.valueOf(v);
    };
  }

  private List<Map<String, Object>> toCardMaps(List<Card> cards) {
    List<Map<String, Object>> out = new ArrayList<>();
    for (Card c : cards) {
      out.add(mapOf("s", c.s, "r", c.r, "v", c.v));
    }
    return out;
  }

  private List<Card> concat(List<Card> a, List<Card> b) {
    List<Card> out = new ArrayList<>(a);
    out.addAll(b);
    return out;
  }

  private HandRank bestHand(List<Card> cards) {
    if (cards == null || cards.size() < 5) return new HandRank(0, "High Card");
    HandRank best = null;
    int n = cards.size();
    for (int i = 0; i < n - 4; i++) {
      for (int j = i + 1; j < n - 3; j++) {
        for (int k = j + 1; k < n - 2; k++) {
          for (int l = k + 1; l < n - 1; l++) {
            for (int m = l + 1; m < n; m++) {
              HandRank cur = eval5(cards.get(i), cards.get(j), cards.get(k), cards.get(l), cards.get(m));
              if (best == null || cur.score > best.score) best = cur;
            }
          }
        }
      }
    }
    return best == null ? new HandRank(0, "High Card") : best;
  }

  private HandRank eval5(Card a, Card b, Card c, Card d, Card e) {
    Card[] cards = new Card[] {a, b, c, d, e};
    int[] cnt = new int[15];
    Map<String, Integer> suitCnt = new HashMap<>();
    for (Card x : cards) {
      cnt[x.v]++;
      suitCnt.put(x.s, suitCnt.getOrDefault(x.s, 0) + 1);
    }
    boolean flush = suitCnt.values().stream().anyMatch(v -> v == 5);
    int straightHigh = straightHigh(cnt);

    List<Integer> fours = new ArrayList<>();
    List<Integer> threes = new ArrayList<>();
    List<Integer> pairs = new ArrayList<>();
    List<Integer> singles = new ArrayList<>();
    for (int v = 14; v >= 2; v--) {
      if (cnt[v] == 4) fours.add(v);
      else if (cnt[v] == 3) threes.add(v);
      else if (cnt[v] == 2) pairs.add(v);
      else if (cnt[v] == 1) singles.add(v);
    }

    if (flush && straightHigh > 0) return new HandRank(score(8, straightHigh), "Straight Flush");
    if (!fours.isEmpty()) return new HandRank(score(7, fours.get(0), singles.get(0)), "Four of a Kind");
    if (!threes.isEmpty() && !pairs.isEmpty()) return new HandRank(score(6, threes.get(0), pairs.get(0)), "Full House");
    if (flush) return new HandRank(score(5, sortedValues(cnt)), "Flush");
    if (straightHigh > 0) return new HandRank(score(4, straightHigh), "Straight");
    if (!threes.isEmpty()) return new HandRank(score(3, threes.get(0), singles), "Three of a Kind");
    if (pairs.size() >= 2) return new HandRank(score(2, pairs.get(0), pairs.get(1), singles.get(0)), "Two Pair");
    if (pairs.size() == 1) return new HandRank(score(1, pairs.get(0), singles), "One Pair");
    return new HandRank(score(0, sortedValues(cnt)), "High Card");
  }

  private int straightHigh(int[] cnt) {
    for (int hi = 14; hi >= 5; hi--) {
      boolean ok = true;
      for (int v = hi; v > hi - 5; v--) {
        if (cnt[v] == 0) {
          ok = false;
          break;
        }
      }
      if (ok) return hi;
    }
    // wheel: A-2-3-4-5
    if (cnt[14] > 0 && cnt[2] > 0 && cnt[3] > 0 && cnt[4] > 0 && cnt[5] > 0) return 5;
    return -1;
  }

  private List<Integer> sortedValues(int[] cnt) {
    List<Integer> out = new ArrayList<>();
    for (int v = 14; v >= 2; v--) {
      for (int i = 0; i < cnt[v]; i++) out.add(v);
    }
    return out;
  }

  private long score(int cat, int... vals) {
    long s = cat;
    // Fixed-width base-15 encoding (category + exactly 5 tiebreak slots).
    // This guarantees category priority is always dominant across hand types.
    for (int i = 0; i < 5; i++) {
      int v = (vals != null && i < vals.length) ? vals[i] : 0;
      s = s * 15 + v;
    }
    return s;
  }

  private long score(int cat, List<Integer> vals) {
    int[] arr = new int[vals == null ? 0 : vals.size()];
    if (vals != null) {
      for (int i = 0; i < vals.size(); i++) arr[i] = vals.get(i);
    }
    return score(cat, arr);
  }

  private long score(int cat, int first, List<Integer> tails) {
    List<Integer> all = new ArrayList<>();
    all.add(first);
    if (tails != null) all.addAll(tails);
    return score(cat, all);
  }

  private boolean isSupportedActionType(String type) {
    return "fold".equals(type)
        || "check".equals(type)
        || "call".equals(type)
        || "raise".equals(type)
        || "allin".equals(type);
  }

  private void sendActionError(Room room, int seatIdx, String msg) {
    Seat s = room.seats.get(seatIdx);
    if (s == null || s.socketId == null || s.socketId.isEmpty()) return;
    Client c = clients.get(s.socketId);
    if (c == null) return;
    sendEvent(c, "error_msg", mapOf("msg", "Action rejected: " + msg));
  }

  private String aiStyleForSeat(int seatIdx) {
    int mod = Math.floorMod(seatIdx, 3);
    if (mod == 0) return "conservative";
    if (mod == 1) return "balanced";
    return "aggressive";
  }

  private double estimateHandStrength(Room room, PlayerState p) {
    if (p == null || p.holeCards == null || p.holeCards.size() < 2) return 0.35;
    Card c1 = p.holeCards.get(0);
    Card c2 = p.holeCards.get(1);
    double base = (c1.v + c2.v) / 28.0;
    boolean pair = c1.v == c2.v;
    boolean suited = Objects.equals(c1.s, c2.s);
    int gap = Math.abs(c1.v - c2.v);
    if (pair) base += 0.28;
    if (suited) base += 0.08;
    if (gap <= 1) base += 0.06;
    if (c1.v >= 12 || c2.v >= 12) base += 0.05;
    if (!room.communityCards.isEmpty()) {
      List<Card> all = new ArrayList<>(p.holeCards);
      all.addAll(room.communityCards);
      HandRank hr = bestHand(all);
      base += Math.min(0.35, hr.score / 1_000_000_000.0);
    }
    return Math.max(0.02, Math.min(0.98, base));
  }

  private static String randomToken() {
    return UUID.randomUUID().toString().replace("-", "");
  }

  private static String safe(String s) {
    return s == null ? "" : s;
  }

  private static String nullToEmpty(String s) {
    return s == null ? "" : s;
  }

  private void refreshClientAuthFromCookie(Client c) {
    if (c == null || c.ctx == null) return;
    GatewayIdentity gid = auth.resolveFromCookie(nullToEmpty(c.ctx.header("Cookie"))).orElse(null);
    if (gid == null || gid.userId <= 0) return;
    boolean changed = c.userId != gid.userId || !safe(gid.loginUsername).equals(c.loginUsername);
    c.userId = gid.userId;
    c.loginUsername = safe(gid.loginUsername);
    if (c.displayName == null || c.displayName.isEmpty() || "Player".equals(c.displayName)) {
      c.displayName = c.loginUsername.isEmpty() ? "Player" : c.loginUsername;
    }
    if (changed) {
      emitAuthState(c, gid);
    }
  }

  private void reattachSeatIfMatched(Client c, Room room, long now) {
    if (c == null || room == null) return;
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null || !"player".equals(s.type)) continue;
      if (s.socketId != null && !s.socketId.isEmpty()) continue;
      if (s.disconnectedAt <= 0 || now - s.disconnectedAt > RECONNECT_GRACE_MS) continue;
      boolean tokenMatch = !nullToEmpty(c.reconnectToken).isEmpty() && c.reconnectToken.equals(s.reconnectToken);
      boolean sessionMatch =
          !nullToEmpty(c.sessionId).isEmpty()
              && c.sessionId.equals(s.sessionId)
              && !nullToEmpty(c.clientId).isEmpty()
              && c.clientId.equals(s.clientId);
      if (!tokenMatch && !sessionMatch) continue;
      s.socketId = c.socketId;
      s.disconnectedAt = 0L;
      c.seatIdx = i;
      c.sessionId = s.sessionId;
      c.reconnectToken = s.reconnectToken;
      return;
    }
  }

  private boolean hasRecoverableDisconnectedSeat(Room room, long now) {
    if (room == null) return false;
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null || !"player".equals(s.type)) continue;
      if (s.socketId != null && !s.socketId.isEmpty()) continue;
      if (s.disconnectedAt > 0 && now - s.disconnectedAt < RECONNECT_GRACE_MS) return true;
    }
    return false;
  }

  private void pruneExpiredDisconnectedSeats(Room room, long now) {
    if (room == null) return;
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null || !"player".equals(s.type)) continue;
      if (s.socketId != null && !s.socketId.isEmpty()) continue;
      if (s.disconnectedAt <= 0) continue;
      if (now - s.disconnectedAt < RECONNECT_GRACE_MS) continue;
      snapshotBankroll(room, i, s);
      room.seats.set(i, null);
      room.players.remove(i);
    }
    normalizeHostOwnership(room);
  }

  private void sweepRoomsSafely() {
    try {
      sweepRooms();
    } catch (Exception e) {
      System.err.println("[room-ws] janitor error: " + e.getMessage());
    }
  }

  private void sweepRooms() {
    long now = System.currentTimeMillis();
    for (Map.Entry<String, Room> en : rooms.entrySet()) {
      Room room = en.getValue();
      if (room == null) continue;
      synchronized (room) {
        pruneExpiredDisconnectedSeats(room, now);
        if (room.socketIds.isEmpty() && !hasRecoverableDisconnectedSeat(room, now)) {
          rooms.remove(en.getKey(), room);
        }
      }
    }
    sweepOrphanClients(now);
    sweepIdleStaleConnections(now);
    maybeLogRuntimeStats(now);
  }

  /** Close sessions with no inbound text for WS_IDLE_DISCONNECT_MS (zombie TCP / dead tabs). */
  private void sweepIdleStaleConnections(long now) {
    if (WS_IDLE_DISCONNECT_MS <= 0L) return;
    java.util.ArrayList<Map.Entry<String, Client>> snapshot = new java.util.ArrayList<>(clients.entrySet());
    for (Map.Entry<String, Client> en : snapshot) {
      String sid = en.getKey();
      Client c = en.getValue();
      if (c == null || c.ctx == null) continue;
      if (clients.get(sid) != c) continue;
      long silent = now - c.lastSeenAtMs;
      if (silent <= WS_IDLE_DISCONNECT_MS) continue;
      try {
        System.err.println(
            "[room-ws] idle close sid="
                + sid
                + " silentMs="
                + silent
                + " (no inbound WS text)");
        idleDisconnectTotal.incrementAndGet();
        c.ctx.closeSession(4003, "server idle stale");
      } catch (Exception ex) {
        System.err.println("[room-ws] idle close failed sid=" + sid + " err=" + ex.getMessage());
      }
      // Prefer onClose for map/room cleanup; orphans eventually handled by orphan sweep / next heartbeat.
    }
  }

  private static void tryJettyWsAutoPing(WsContext ctx) {
    try {
      long sec = parseLongEnv("NEBULA_WS_JETTY_PING_INTERVAL_SEC", 20L);
      if (sec <= 0) return;
      java.util.concurrent.TimeUnit tu = java.util.concurrent.TimeUnit.SECONDS;
      ctx.enableAutomaticPings(sec, tu);
      if (WS_VERBOSE_LOG) {
        System.err.println("[room-ws] jetty websocket ping interval=" + sec + "s");
      }
    } catch (Throwable t) {
      System.err.println("[room-ws] enableAutomaticPings skipped: " + t.getMessage());
    }
  }

  private static long parseLongEnv(String key, long deflt) {
    String v = System.getenv(key);
    if (v == null || v.isBlank()) return deflt;
    try {
      return Long.parseLong(v.trim());
    } catch (NumberFormatException e) {
      return deflt;
    }
  }

  private static long parseWsIdleDisconnectMsEnv() {
    String v = System.getenv("NEBULA_WS_IDLE_DISCONNECT_MS");
    if (v == null || v.isBlank()) return 180_000L; // 9× missed ~20s app pings ⇒ likely zombie
    if ("0".equals(v.trim())) return 0L;
    try {
      return Long.parseLong(v.trim());
    } catch (NumberFormatException e) {
      return 180_000L;
    }
  }

  private boolean allowJoinAttempt(Client c, String roomId, long now) {
    if (c == null) return false;
    if (roomId.equals(c.lastJoinRoomId) && now - c.lastJoinAcceptedAtMs < JOIN_DEBOUNCE_MS) {
      joinThrottleCount.incrementAndGet();
      return false;
    }
    long cutoff = now - JOIN_FLAP_WINDOW_MS;
    while (!c.joinHitAtMs.isEmpty() && c.joinHitAtMs.peekFirst() < cutoff) {
      c.joinHitAtMs.pollFirst();
    }
    if (c.joinHitAtMs.size() >= JOIN_FLAP_MAX_HITS) {
      joinThrottleCount.incrementAndGet();
      return false;
    }
    c.joinHitAtMs.addLast(now);
    c.lastJoinAcceptedAtMs = now;
    c.lastJoinRoomId = roomId;
    return true;
  }

  private void bindExclusiveSession(Client c, String roomId) {
    if (c == null || c.userId <= 0) return;
    String sessionKey = sessionKey(c.userId, c.clientId, c.sessionId, roomId);
    if (sessionKey.isEmpty()) return;
    String oldSid = activeSocketBySession.put(sessionKey, c.socketId);
    c.sessionBindingKey = sessionKey;
    if (oldSid == null || oldSid.equals(c.socketId)) return;
    forceDetachSocket(oldSid, "superseded session");
  }

  private void clearSessionBinding(Client c, String socketId) {
    if (c == null) return;
    String key = nullToEmpty(c.sessionBindingKey);
    if (!key.isEmpty()) {
      activeSocketBySession.remove(key, socketId);
      c.sessionBindingKey = "";
    }
  }

  private static String sessionKey(long userId, String clientId, String sessionId, String roomId) {
    if (userId <= 0) return "";
    String cid = nullToEmpty(clientId).trim();
    String sid = nullToEmpty(sessionId).trim();
    String rid = nullToEmpty(roomId).trim().toUpperCase();
    if (cid.isEmpty() || sid.isEmpty() || rid.isEmpty()) return "";
    return userId + "|" + cid + "|" + sid + "|" + rid;
  }

  private void forceDetachSocket(String socketId, String reason) {
    Client stale = clients.remove(socketId);
    if (stale == null) return;
    forceDetachCount.incrementAndGet();
    clearSessionBinding(stale, socketId);
    try {
      sendEvent(stale, "error_msg", mapOf("msg", "Session moved to a newer connection (" + reason + ")."));
    } catch (Exception ignored) {
    }
    if (stale.roomId == null || stale.roomId.isEmpty()) return;
    Room room = rooms.get(stale.roomId);
    if (room == null) return;
    synchronized (room) {
      long now = System.currentTimeMillis();
      room.socketIds.remove(socketId);
      for (int i = 0; i < MAX_SEATS; i++) {
        Seat s = room.seats.get(i);
        if (s != null && "player".equals(s.type) && socketId.equals(s.socketId)) {
          s.socketId = "";
          s.disconnectedAt = now;
        }
      }
      pruneExpiredDisconnectedSeats(room, now);
      normalizeHostOwnership(room);
      if (room.socketIds.isEmpty() && !hasRecoverableDisconnectedSeat(room, now)) {
        rooms.remove(room.roomId);
      } else {
        broadcastRoomState(room);
      }
    }
  }

  private void sweepOrphanClients(long now) {
    for (Map.Entry<String, Client> en : clients.entrySet()) {
      String sid = en.getKey();
      Client c = en.getValue();
      if (c == null) continue;
      boolean detached = c.roomId == null || c.roomId.isEmpty();
      if (!detached) {
        Room room = rooms.get(c.roomId);
        detached = room == null || !room.socketIds.contains(sid);
      }
      if (!detached) continue;
      if (now - c.lastSeenAtMs < ORPHAN_CLIENT_TTL_MS) continue;
      if (clients.remove(sid, c)) {
        clearSessionBinding(c, sid);
      }
    }
  }

  private void maybeLogRuntimeStats(long now) {
    if (now - lastStatsLogAtMs < STATS_LOG_INTERVAL_MS) return;
    lastStatsLogAtMs = now;
    System.err.println(
        "[room-ws] stats rooms="
            + rooms.size()
            + " clients="
            + clients.size()
            + " activeSessions="
            + activeSocketBySession.size()
            + " forceDetach="
            + forceDetachCount.get()
            + " throttleHits="
            + joinThrottleCount.get()
            + " idleServerClose="
            + idleDisconnectTotal.get());
  }

  private void snapshotBankroll(Room room, int seatIdx, Seat seat) {
    if (room == null || seat == null || seat.userId <= 0) return;
    PlayerState p = room.players.get(seatIdx);
    if (p == null) return;
    room.bankrollByUser.put(seat.userId, Math.max(0, p.chips));
    room.totalBuyInByUser.put(seat.userId, Math.max(room.initialChips, p.totalBuyIn));
  }

  private void normalizeHostOwnership(Room room) {
    if (room == null) return;
    // Keep host bound to a stable player seat first, not to random connected sockets.
    if (room.hostSeatIdx >= 0 && room.hostSeatIdx < MAX_SEATS) {
      Seat hs = room.seats.get(room.hostSeatIdx);
      if (hs != null && "player".equals(hs.type)) {
        String sid = nullToEmpty(hs.socketId);
        room.hostSocketId = (!sid.isEmpty() && room.socketIds.contains(sid)) ? sid : "";
        return;
      }
    }
    room.hostSeatIdx = -1;
    room.hostSocketId = "";
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null || !"player".equals(s.type)) continue;
      room.hostSeatIdx = i;
      String sid = nullToEmpty(s.socketId);
      room.hostSocketId = (!sid.isEmpty() && room.socketIds.contains(sid)) ? sid : "";
      return;
    }
  }

  private static Map<String, Object> mapOf(Object... kv) {
    Map<String, Object> m = new HashMap<>();
    for (int i = 0; i + 1 < kv.length; i += 2) {
      m.put(String.valueOf(kv[i]), kv[i + 1]);
    }
    return m;
  }

  private static final class Client {
    String socketId = "";
    WsContext ctx;
    long userId = 0;
    String loginUsername = "";
    String displayName = "";
    String clientId = "";
    String roomId = "";
    int seatIdx = -1;
    String reconnectToken = "";
    String sessionId = "";
    String sessionBindingKey = "";
    String lastJoinRoomId = "";
    long lastJoinAcceptedAtMs = 0L;
    long lastSeenAtMs = 0L;
    final Deque<Long> joinHitAtMs = new ArrayDeque<>();
  }

  private static final class Seat {
    String type = "player"; // player|ai
    String name = "Player";
    String socketId = "";
    String clientId = "";
    long userId = 0;
    String decor = "none";
    String reconnectToken = "";
    String sessionId = "";
    long disconnectedAt = 0L;
  }

  private static final class PlayerState {
    int seatIdx = -1;
    String type = "player";
    String name = "Player";
    int chips = 0;
    int currentBet = 0;
    int totalBuyIn = 0;
    boolean folded = false;
    boolean allIn = false;
    String aiStyle = "balanced";
    List<Card> holeCards = new ArrayList<>();
  }

  private static final class Card {
    String s;
    String r;
    int v;
  }

  private record HandRank(long score, String desc) {}

  private record HandRec(int handNum, List<Map<String, Object>> winners, String desc) {}

  private static final class Room {
    final String roomId;
    final List<Seat> seats = new ArrayList<>();
    final Set<String> socketIds = new HashSet<>();
    String hostSocketId = "";
    int hostSeatIdx = -1;
    boolean started = false;
    int totalHands = 5;
    int initialChips = 1000;
    int handNum = 0;
    int dealerSeatIdx = -1;
    int currentTurnSeatIdx = -1;
    int turnNonce = 0;
    int pot = 0;
    int currentMaxBet = 0;
    int minRaise = 50;
    String round = "WAITING";
    Map<Integer, PlayerState> players = new HashMap<>();
    Map<Long, Integer> bankrollByUser = new HashMap<>();
    Map<Long, Integer> totalBuyInByUser = new HashMap<>();
    List<Card> deck = new ArrayList<>();
    List<Card> communityCards = new ArrayList<>();
    Set<Integer> pendingToAct = new LinkedHashSet<>();
    List<HandRec> handHistory = new ArrayList<>();

    Room(String roomId) {
      this.roomId = roomId;
      for (int i = 0; i < MAX_SEATS; i++) seats.add(null);
    }
  }
}

