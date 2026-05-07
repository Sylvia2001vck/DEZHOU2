package nebula.gateway;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.javalin.http.Context;
import io.lettuce.core.api.sync.RedisCommands;
import java.nio.charset.StandardCharsets;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Deque;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Bean / quick matchmaking. With {@code REDIS_HOST} + MySQL, matched groups are written to
 * {@code match_message} and {@link NebulaRedis#KEY_MATCH_MSG} for {@link MatchWorker}; otherwise
 * room creation runs synchronously in this thread.
 */
public final class MatchmakingService {
  // Quick match starts as soon as 2 players are available.
  private static final int THRESHOLD = 2;
  private static final long QUEUE_ENTRY_TTL_MS = 15 * 60_000L;
  private static final long STATUS_CACHE_TTL_MS = 1200L;
  private static final long STATUS_RATE_WINDOW_MS = 10_000L;
  private static final int STATUS_RATE_PER_USER = 8;
  private static final int STATUS_RATE_PER_IP = 40;
  private static final long STATUS_RATE_BUCKET_TTL_MS = 5 * 60_000L;

  private final AuthService auth;
  private final RoomWorkerBridge bridge;
  private final String bridgeSecret;
  private final MatchMessageDao matchDao;
  private final com.google.gson.Gson gson = new com.google.gson.Gson();

  private final Map<String, List<BeanEntry>> beanQueues = new ConcurrentHashMap<>();
  private final Map<Long, AuthService.UserProfileSnapshot> queueMeta = new ConcurrentHashMap<>();
  private final Map<Long, PendingMatch> pending = new ConcurrentHashMap<>();
  private final Set<Long> classicQueued = ConcurrentHashMap.newKeySet();
  private final Map<Long, StatusCache> statusCache = new ConcurrentHashMap<>();
  private final Map<Long, SlidingWindowRateLimiter> statusRateByUser = new ConcurrentHashMap<>();
  private final Map<String, SlidingWindowRateLimiter> statusRateByIp = new ConcurrentHashMap<>();

  public MatchmakingService(AuthService auth, RoomWorkerBridge bridge, MatchMessageDao matchDao) {
    this.auth = auth;
    this.bridge = bridge;
    this.matchDao = matchDao;
    this.bridgeSecret = env("NEBULA_BRIDGE_SECRET", "dev-bridge-secret-change-me");
  }

  private boolean asyncPipeline() {
    return matchDao != null && NebulaRedis.available();
  }

  public void handle(Context ctx) throws Exception {
    String p = ctx.path();
    String m = ctx.method().name();
    if (p.equals("/api/matchmaking/queue-bean") && m.equals("POST")) {
      queueBean(ctx);
      return;
    }
    if (p.equals("/api/matchmaking/queue") && m.equals("POST")) {
      queueDefault(ctx);
      return;
    }
    if (p.equals("/api/matchmaking/cancel") && m.equals("POST")) {
      cancel(ctx);
      return;
    }
    if (p.equals("/api/matchmaking/status") && m.equals("GET")) {
      status(ctx);
      return;
    }
    ctx.status(404).result("Not Found");
  }

  private void queueBean(Context ctx) throws Exception {
    pruneStaleQueueState();
    Optional<AuthService.UserProfileSnapshot> prof = auth.snapshotFromCookie(ctx.header("Cookie"));
    if (prof.isEmpty()) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
      return;
    }
    RedisCommands<String, String> redis = NebulaRedis.commands();
    String lockKey = "user:" + prof.get().userId();
    String lockVal = RedisLock.newLockToken();
    if (redis != null && !RedisLock.tryLock(redis, lockKey, lockVal, 10)) {
      json(ctx, 429, "{\"ok\":false,\"message\":\"Too many match requests.\"}");
      return;
    }
    try {
      Map<String, String> form = FormUtil.parseUrlEncoded(ctx.body());
      String tier = form.getOrDefault("tier", beanTier(prof.get().gold()));
      removeFromAllQueues(prof.get().userId());
      pending.remove(prof.get().userId());
      statusCache.remove(prof.get().userId());
      clearPendingRedis(prof.get().userId(), redis);
      BeanEntry e =
          new BeanEntry(
              prof.get().userId(), prof.get().gold(), beanMmr(prof.get().userId()), System.currentTimeMillis());
      beanQueues.computeIfAbsent(tier, t -> new CopyOnWriteArrayList<>()).add(e);
      queueMeta.put(prof.get().userId(), prof.get());
      maybeMatchBeans(tier);
      respondQueueState(ctx, prof.get().userId(), tier);
    } finally {
      RedisLock.unlock(redis, lockKey, lockVal);
    }
  }

  private void queueDefault(Context ctx) throws Exception {
    pruneStaleQueueState();
    Optional<AuthService.UserProfileSnapshot> prof = auth.snapshotFromCookie(ctx.header("Cookie"));
    if (prof.isEmpty()) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
      return;
    }
    RedisCommands<String, String> redis = NebulaRedis.commands();
    String lockKey = "user:" + prof.get().userId();
    String lockVal = RedisLock.newLockToken();
    if (redis != null && !RedisLock.tryLock(redis, lockKey, lockVal, 10)) {
      json(ctx, 429, "{\"ok\":false,\"message\":\"Too many match requests.\"}");
      return;
    }
    try {
      String tier = beanTier(prof.get().gold());
      removeFromAllQueues(prof.get().userId());
      pending.remove(prof.get().userId());
      statusCache.remove(prof.get().userId());
      clearPendingRedis(prof.get().userId(), redis);
      BeanEntry e =
          new BeanEntry(
              prof.get().userId(), prof.get().gold(), beanMmr(prof.get().userId()), System.currentTimeMillis());
      beanQueues.computeIfAbsent(tier, t -> new CopyOnWriteArrayList<>()).add(e);
      queueMeta.put(prof.get().userId(), prof.get());
      classicQueued.add(prof.get().userId());
      maybeMatchBeans(tier);
      respondQueueState(ctx, prof.get().userId(), tier);
    } finally {
      RedisLock.unlock(redis, lockKey, lockVal);
    }
  }

  private static void clearPendingRedis(long userId, RedisCommands<String, String> redis) {
    if (redis != null) redis.del(NebulaRedis.PREFIX_PENDING_ROOM + userId);
  }

  private void cancel(Context ctx) {
    pruneStaleQueueState();
    Optional<AuthService.UserProfileSnapshot> prof = auth.snapshotFromCookie(ctx.header("Cookie"));
    if (prof.isEmpty()) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
      return;
    }
    RedisCommands<String, String> redis = NebulaRedis.commands();
    removeFromAllQueues(prof.get().userId());
    classicQueued.remove(prof.get().userId());
    pending.remove(prof.get().userId());
    clearPendingRedis(prof.get().userId(), redis);
    queueMeta.remove(prof.get().userId());
    statusCache.remove(prof.get().userId());
    mmr.remove(prof.get().userId());
    json(ctx, 200, "{\"ok\":true,\"state\":\"idle\"}");
  }

  private void status(Context ctx) {
    pruneStaleQueueState();
    Optional<AuthService.UserProfileSnapshot> prof = auth.snapshotFromCookie(ctx.header("Cookie"));
    if (prof.isEmpty()) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
      return;
    }
    long uid = prof.get().userId();
    long now = System.currentTimeMillis();
    String ip = safeIp(ctx.ip());
    if (!allowStatusRate(uid, ip, now)) {
      ctx.header("Retry-After", "2");
      json(ctx, 429, "{\"ok\":false,\"message\":\"Too many status requests. Please retry shortly.\"}");
      return;
    }
    StatusCache cached = statusCache.get(uid);
    if (cached != null && now - cached.atMs <= STATUS_CACHE_TTL_MS) {
      json(ctx, 200, cached.body);
      return;
    }
    PendingMatch pm = pendingFromRedisOrMemory(uid);
    BeanEntry bean = findBeanEntry(uid);
    boolean queuedClassic = classicQueued.contains(uid);
    String state;
    if (pm != null) state = "matched";
    else if (bean != null || queuedClassic) state = "queued";
    else state = "idle";

    int qp = 0;
    int th = THRESHOLD;
    String tierJson = "";
    if (bean != null) {
      String t = beanTier(bean.beans);
      List<BeanEntry> q = beanQueues.getOrDefault(t, List.of());
      qp = q.size();
      tierJson = ",\"tier\":\"" + esc(t) + "\"";
    } else if (queuedClassic) {
      String t = beanTier(prof.get().gold());
      qp = beanQueues.getOrDefault(t, List.of()).size();
      tierJson = ",\"tier\":\"" + esc(t) + "\"";
    }

    StringBuilder out = new StringBuilder();
    out.append("{\"ok\":true,\"state\":\"").append(state).append("\",\"queuedPlayers\":").append(qp);
    out.append(",\"threshold\":").append(th).append(tierJson);
    if (pm != null) {
      out.append(",\"roomCode\":\"").append(esc(pm.roomCode)).append("\"");
    }
    out.append("}");
    String body = out.toString();
    statusCache.put(uid, new StatusCache(now, body));
    json(ctx, 200, body);
  }

  private PendingMatch pendingFromRedisOrMemory(long uid) {
    RedisCommands<String, String> redis = NebulaRedis.commands();
    if (redis != null) {
      String code = redis.get(NebulaRedis.PREFIX_PENDING_ROOM + uid);
      if (code != null && !code.isEmpty()) {
        return new PendingMatch(code, Long.MAX_VALUE);
      }
    }
    PendingMatch pm = pending.get(uid);
    if (pm != null && System.currentTimeMillis() > pm.expiresAtMs) {
      pending.remove(uid);
      return null;
    }
    return pm;
  }

  private void pruneStaleQueueState() {
    long now = System.currentTimeMillis();
    long queueCutoff = now - QUEUE_ENTRY_TTL_MS;
    for (List<BeanEntry> q : beanQueues.values()) {
      q.removeIf(
          e -> {
            boolean stale = e.queuedAt < queueCutoff;
            if (stale) {
              queueMeta.remove(e.userId);
              classicQueued.remove(e.userId);
              pending.remove(e.userId);
              statusCache.remove(e.userId);
              mmr.remove(e.userId);
            }
            return stale;
          });
    }
    pending.entrySet().removeIf(
        en -> {
          boolean expired = en.getValue() != null && now > en.getValue().expiresAtMs;
          if (expired) {
            statusCache.remove(en.getKey());
          }
          return expired;
        });
    long cacheCutoff = now - (STATUS_CACHE_TTL_MS * 5);
    statusCache.entrySet().removeIf(en -> en.getValue() == null || en.getValue().atMs < cacheCutoff);
    long rateCutoff = now - STATUS_RATE_BUCKET_TTL_MS;
    statusRateByUser.entrySet().removeIf(en -> en.getValue() == null || en.getValue().lastSeenMs() < rateCutoff);
    statusRateByIp.entrySet().removeIf(en -> en.getValue() == null || en.getValue().lastSeenMs() < rateCutoff);
  }

  private boolean allowStatusRate(long uid, String ip, long nowMs) {
    SlidingWindowRateLimiter userLimiter =
        statusRateByUser.computeIfAbsent(uid, k -> new SlidingWindowRateLimiter());
    SlidingWindowRateLimiter ipLimiter =
        statusRateByIp.computeIfAbsent(ip, k -> new SlidingWindowRateLimiter());
    boolean userOk = userLimiter.allow(nowMs, STATUS_RATE_WINDOW_MS, STATUS_RATE_PER_USER);
    boolean ipOk = ipLimiter.allow(nowMs, STATUS_RATE_WINDOW_MS, STATUS_RATE_PER_IP);
    return userOk && ipOk;
  }

  private static String safeIp(String ip) {
    if (ip == null || ip.isEmpty()) return "unknown";
    return ip;
  }

  private void respondQueueState(Context ctx, long userId, String tier) throws Exception {
    List<BeanEntry> q = beanQueues.getOrDefault(tier, List.of());
    PendingMatch pm = pendingFromRedisOrMemory(userId);
    String state = pm != null ? "matched" : "queued";
    StringBuilder out = new StringBuilder();
    out.append("{\"ok\":true,\"state\":\"").append(state).append("\",\"queuedPlayers\":").append(q.size());
    out.append(",\"threshold\":").append(THRESHOLD).append(",\"tier\":\"").append(esc(tier)).append("\"");
    if (pm != null) out.append(",\"roomCode\":\"").append(esc(pm.roomCode)).append("\"");
    out.append("}");
    json(ctx, 200, out.toString());
  }

  private void maybeMatchBeans(String tier) throws Exception {
    List<BeanEntry> queue = beanQueues.get(tier);
    if (queue == null) return;
    boolean matchedAny = true;
    while (matchedAny && queue.size() >= THRESHOLD) {
      matchedAny = false;
      queue.sort(Comparator.comparingLong(a -> a.queuedAt));
      for (int anchor = 0; anchor < queue.size(); anchor++) {
        BeanEntry base = queue.get(anchor);
        int mmrRange = currentMmrRange(base.queuedAt);
        List<Integer> picked = new ArrayList<>();
        picked.add(anchor);
        for (int i = 0; i < queue.size() && picked.size() < THRESHOLD; i++) {
          if (i == anchor) continue;
          if (Math.abs(queue.get(i).mmr - base.mmr) <= mmrRange) picked.add(i);
        }
        if (picked.size() < THRESHOLD) continue;
        picked.sort(Collections.reverseOrder());
        List<Long> matchedUsers = new ArrayList<>();
        for (int idx : picked) {
          matchedUsers.add(queue.get(idx).userId);
        }
        for (int idx : picked) {
          queue.remove(idx);
        }
        Collections.sort(matchedUsers);
        if (asyncPipeline()) {
          String matchId = UUID.randomUUID().toString().replace("-", "");
          JsonObject payload = new JsonObject();
          payload.addProperty("tier", tier);
          payload.addProperty("threshold", THRESHOLD);
          JsonArray players = new JsonArray();
          for (Long uid : matchedUsers) {
            AuthService.UserProfileSnapshot snap = queueMeta.get(uid);
            if (snap == null) continue;
            JsonObject po = new JsonObject();
            po.addProperty("userId", snap.userId());
            po.addProperty("loginUsername", snap.loginUsername());
            po.addProperty("displayName", snap.displayName());
            po.addProperty("avatar", snap.avatar() == null ? "" : snap.avatar());
            po.addProperty("gold", snap.gold());
            po.addProperty("gamesPlayed", snap.gamesPlayed());
            po.addProperty("gamesWon", snap.gamesWon());
            players.add(po);
          }
          if (players.size() < THRESHOLD) continue;
          payload.add("players", players);
          RedisCommands<String, String> redis = NebulaRedis.commands();
          String gLock = "matchmaker";
          String gVal = RedisLock.newLockToken();
          if (redis != null && !RedisLock.tryLock(redis, gLock, gVal, 8)) {
            continue;
          }
          try {
            matchDao.insertPending(matchId, gson.toJson(payload), "bean_match");
            redis.lpush(NebulaRedis.KEY_MATCH_MSG, matchId);
          } catch (Exception e) {
            System.err.println("[matchmaking] async enqueue: " + e.getMessage());
            continue;
          } finally {
            RedisLock.unlock(redis, gLock, gVal);
          }
          for (Long uid : matchedUsers) {
            queueMeta.remove(uid);
            classicQueued.remove(uid);
            mmr.remove(uid);
          }
          matchedAny = true;
          break;
        } else {
          long owner = matchedUsers.get(0);
          AuthService.UserProfileSnapshot ownerSnap = queueMeta.get(owner);
          if (ownerSnap == null) continue;
          GatewayIdentity gid = auth.gatewayIdentityFromSnapshot(ownerSnap);
          String form =
              FormUtil.toFormBody(
                  Map.of(
                      "totalHands", "5",
                      "initialChips", "1000",
                      "visibility", "private",
                      "roomType", "bean_match"));
          ApiProxyResult roomRes =
              bridge.apiProxy("POST", "/api/rooms/create", form.getBytes(StandardCharsets.UTF_8), "", 60_000, gid);
          if (roomRes.getStatus() != 200) {
            System.err.println("[matchmaking] room create failed: " + roomRes.getStatus());
            continue;
          }
          String roomCode = parseRoomCode(roomRes.bodyString());
          if (roomCode.isEmpty()) {
            System.err.println("[matchmaking] missing roomCode in response");
            continue;
          }
          long exp = System.currentTimeMillis() + 10 * 60_000L;
          for (Long uid : matchedUsers) {
            pending.put(uid, new PendingMatch(roomCode, exp));
            classicQueued.remove(uid);
            mmr.remove(uid);
          }
          notifyCppMatch(roomCode, matchedUsers, THRESHOLD, tier, queue.size());
          matchedAny = true;
          break;
        }
      }
    }
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
    bridge.apiProxy("POST", "/api/internal/match-notify", body, "", 60_000, null);
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

  private void removeFromAllQueues(long userId) {
    for (List<BeanEntry> q : beanQueues.values()) {
      q.removeIf(e -> e.userId == userId);
    }
  }

  private BeanEntry findBeanEntry(long userId) {
    for (List<BeanEntry> q : beanQueues.values()) {
      for (BeanEntry e : q) {
        if (e.userId == userId) return e;
      }
    }
    return null;
  }

  private static int currentMmrRange(long queuedAt) {
    long waited = Math.max(0L, System.currentTimeMillis() - queuedAt);
    if (waited < 5000) return 120;
    if (waited < 15000) return 260;
    return 1200;
  }

  private static String beanTier(long beans) {
    if (beans < 5000) return "novice";
    if (beans < 20000) return "advanced";
    return "expert";
  }

  private final Map<Long, Integer> mmr = new ConcurrentHashMap<>();

  private int beanMmr(long userId) {
    return mmr.computeIfAbsent(userId, u -> 1000);
  }

  private static String env(String k, String d) {
    String v = System.getenv(k);
    return v == null || v.isEmpty() ? d : v;
  }

  private static void json(Context ctx, int status, String body) {
    ctx.status(status);
    ctx.contentType("application/json; charset=utf-8");
    ctx.result(body);
  }

  private static String esc(String s) {
    if (s == null) return "";
    return s.replace("\\", "\\\\").replace("\"", "\\\"");
  }

  private static final class BeanEntry {
    final long userId;
    final long beans;
    final int mmr;
    final long queuedAt;

    BeanEntry(long userId, long beans, int mmr, long queuedAt) {
      this.userId = userId;
      this.beans = beans;
      this.mmr = mmr;
      this.queuedAt = queuedAt;
    }
  }

  private static final class PendingMatch {
    final String roomCode;
    final long expiresAtMs;

    PendingMatch(String roomCode, long expiresAtMs) {
      this.roomCode = roomCode;
      this.expiresAtMs = expiresAtMs;
    }
  }

  private record StatusCache(long atMs, String body) {}

  private static final class SlidingWindowRateLimiter {
    private final Deque<Long> hits = new ArrayDeque<>();
    private long lastSeen = 0L;

    synchronized boolean allow(long nowMs, long windowMs, int maxHits) {
      this.lastSeen = nowMs;
      long cutoff = nowMs - windowMs;
      while (!hits.isEmpty() && hits.peekFirst() < cutoff) {
        hits.pollFirst();
      }
      if (hits.size() >= maxHits) return false;
      hits.addLast(nowMs);
      return true;
    }

    synchronized long lastSeenMs() {
      return lastSeen;
    }
  }
}
