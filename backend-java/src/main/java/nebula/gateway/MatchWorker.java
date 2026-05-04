package nebula.gateway;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.lettuce.core.api.sync.RedisCommands;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * BRPOP consumer for {@link NebulaRedis#KEY_MATCH_MSG} plus scheduled retry of pending
 * {@code match_message} rows (status=0, retry_count&lt;5, age&gt;120s).
 */
public final class MatchWorker {
  private static final int PENDING_ROOM_TTL_SEC = 600;

  private final MatchMessageDao dao;
  private final RoomWorkerBridge bridge;
  private final AuthService auth;
  private final String bridgeSecret;
  private final com.google.gson.Gson gson = new com.google.gson.Gson();
  private final AtomicBoolean running = new AtomicBoolean(true);
  private Thread thread;
  private ScheduledExecutorService scheduler;

  public MatchWorker(MatchMessageDao dao, RoomWorkerBridge bridge, AuthService auth, String bridgeSecret) {
    this.dao = dao;
    this.bridge = bridge;
    this.auth = auth;
    this.bridgeSecret = bridgeSecret;
  }

  public void start() {
    if (!NebulaRedis.available() || !JdbcEnv.enabled()) return;
    try {
      dao.ensureSchema();
    } catch (Exception e) {
      System.err.println("[match-worker] schema: " + e.getMessage());
      return;
    }
    thread =
        new Thread(
            () -> {
              RedisCommands<String, String> redis = NebulaRedis.commands();
              while (running.get() && redis != null) {
                try {
                  var kv = redis.brpop(5, NebulaRedis.KEY_MATCH_MSG);
                  if (kv == null || kv.getValue() == null) continue;
                  processOne(kv.getValue());
                } catch (Exception e) {
                  if (running.get()) System.err.println("[match-worker] loop: " + e.getMessage());
                }
              }
            },
            "nebula-match-consumer");
    thread.setDaemon(true);
    thread.start();
    System.err.println("[match-worker] BRPOP consumer + retry scheduler running on " + NebulaRedis.KEY_MATCH_MSG);

    scheduler =
        Executors.newSingleThreadScheduledExecutor(
            r -> {
              Thread t = new Thread(r, "nebula-match-retry");
              t.setDaemon(true);
              return t;
            });
    scheduler.scheduleAtFixedRate(this::compensate, 15, 30, TimeUnit.SECONDS);
  }

  private void compensate() {
    if (!running.get() || !NebulaRedis.available()) return;
    RedisCommands<String, String> redis = NebulaRedis.commands();
    try {
      List<String> ids = dao.listPendingForRetry(40);
      for (String mid : ids) {
        redis.lpush(NebulaRedis.KEY_MATCH_MSG, mid);
        bumpRetryByMatchId(mid);
      }
    } catch (Exception e) {
      System.err.println("[match-worker] compensate: " + e.getMessage());
    }
  }

  private void bumpRetryByMatchId(String matchId) throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement(
                "UPDATE match_message SET retry_count=retry_count+1 WHERE match_id=? AND status=0")) {
      ps.setString(1, matchId);
      ps.executeUpdate();
    }
  }

  public void shutdown() {
    running.set(false);
    if (scheduler != null) scheduler.shutdownNow();
    if (thread != null) thread.interrupt();
    System.err.println("[match-worker] MatchWorker stopped");
  }

  private void processOne(String matchId) {
    try {
      MatchMessageDao.Row row = dao.findByMatchId(matchId);
      if (row == null || row.status() != 0) return;

      JsonObject payload = JsonParser.parseString(row.payloadJson()).getAsJsonObject();
      String tier = payload.has("tier") ? payload.get("tier").getAsString() : "novice";
      int threshold = payload.has("threshold") ? payload.get("threshold").getAsInt() : 2;
      JsonArray players = payload.getAsJsonArray("players");
      if (players == null || players.size() == 0) {
        dao.updateStatus(matchId, 2, null, "empty players");
        return;
      }
      JsonObject first = players.get(0).getAsJsonObject();
      AuthService.UserProfileSnapshot ownerSnap = parseSnap(first);
      GatewayIdentity gid = auth.gatewayIdentityFromSnapshot(ownerSnap);

      String form =
          FormUtil.toFormBody(
              Map.of(
                  "totalHands", "5",
                  "initialChips", "1000",
                  "visibility", "private",
                  "roomType", row.roomType(),
                  "matchId", matchId));

      ApiProxyResult roomRes =
          bridge.apiProxy("POST", "/api/rooms/create", form.getBytes(StandardCharsets.UTF_8), "", 120_000, gid);
      if (roomRes.getStatus() != 200) {
        dao.updateStatus(matchId, 2, null, "room http " + roomRes.getStatus());
        return;
      }
      String body = roomRes.bodyString();
      String roomCode = parseRoomCode(body);
      if (roomCode.isEmpty()) {
        dao.updateStatus(matchId, 2, null, "no roomCode");
        return;
      }
      dao.updateStatus(matchId, 1, roomCode, null);

      List<Long> uids = new ArrayList<>();
      for (int i = 0; i < players.size(); i++) {
        uids.add(players.get(i).getAsJsonObject().get("userId").getAsLong());
      }
      notifyCppMatch(roomCode, uids, threshold, tier, 0);

      RedisCommands<String, String> redis = NebulaRedis.commands();
      if (redis != null) {
        for (Long uid : uids) {
          redis.setex(NebulaRedis.PREFIX_PENDING_ROOM + uid, PENDING_ROOM_TTL_SEC, roomCode);
        }
      }
    } catch (Exception e) {
      String msg = e.getMessage() == null ? "error" : e.getMessage();
      try {
        dao.updateStatus(matchId, 2, null, msg.substring(0, Math.min(500, msg.length())));
      } catch (Exception ignored) {
      }
    }
  }

  private static AuthService.UserProfileSnapshot parseSnap(JsonObject o) {
    return new AuthService.UserProfileSnapshot(
        o.get("userId").getAsLong(),
        o.get("loginUsername").getAsString(),
        o.get("displayName").getAsString(),
        o.has("avatar") ? o.get("avatar").getAsString() : "",
        o.get("gold").getAsLong(),
        o.get("gamesPlayed").getAsInt(),
        o.get("gamesWon").getAsInt());
  }

  private void notifyCppMatch(String roomCode, List<Long> userIds, int threshold, String tier, int queuedLeft)
      throws Exception {
    JsonObject j = new JsonObject();
    j.addProperty("secret", bridgeSecret);
    j.addProperty("roomCode", roomCode);
    j.addProperty("threshold", threshold);
    j.addProperty("tier", tier);
    j.addProperty("queuedPlayers", queuedLeft);
    JsonArray arr = new JsonArray();
    for (Long u : userIds) arr.add(u);
    j.add("userIds", arr);
    byte[] body = gson.toJson(j).getBytes(StandardCharsets.UTF_8);
    bridge.apiProxy("POST", "/api/internal/match-notify", body, "", 120_000, null);
  }

  private static String parseRoomCode(String json) {
    try {
      JsonObject o = JsonParser.parseString(json).getAsJsonObject();
      if (o.has("roomCode") && !o.get("roomCode").isJsonNull()) {
        return o.get("roomCode").getAsString();
      }
    } catch (Exception ignored) {
    }
    return "";
  }
}
