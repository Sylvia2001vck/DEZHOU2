package nebula.gateway;

import com.google.gson.Gson;
import io.javalin.http.Context;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/** Bean/MMR/home overview endpoints owned by Java gateway. */
public final class BeanProgressService {
  private static final int DAILY_REWARD = 600;
  private static final int AD_REWARD = 400;
  private static final int AD_MAX_PER_DAY = 3;

  private final AuthService auth;
  private final Gson gson = new Gson();
  private final Map<Long, ClaimState> memoryClaimState = new ConcurrentHashMap<>();
  private final Map<Long, Integer> memoryMmr = new ConcurrentHashMap<>();

  public BeanProgressService(AuthService auth) {
    this.auth = auth;
  }

  public void handle(Context ctx) throws Exception {
    String path = ctx.path();
    String method = ctx.method().name();
    if ("/api/home/overview".equals(path) && "GET".equals(method)) {
      homeOverview(ctx);
      return;
    }
    if ("/api/beans/profile".equals(path) && "GET".equals(method)) {
      beansProfile(ctx);
      return;
    }
    if ("/api/beans/claim-daily".equals(path) && "POST".equals(method)) {
      claimDaily(ctx);
      return;
    }
    if ("/api/beans/ad-reward".equals(path) && "POST".equals(method)) {
      adReward(ctx);
      return;
    }
    ctx.status(404).result("Not Found");
  }

  private void homeOverview(Context ctx) throws Exception {
    AuthService.UserProfileSnapshot snap = requireAuth(ctx).orElse(null);
    if (snap == null) return;
    UserRow row = resolveUserRow(snap.userId(), snap);
    BeanProfile bean = resolveBeanProfile(row.userId, row.gold);
    Map<String, Object> out = new HashMap<>();
    out.put("ok", true);
    out.put("profile", profileMap(row));
    out.put("beanProfile", bean.toMap());
    out.put("dailyTasks", java.util.List.of());
    out.put("tournaments", java.util.List.of());
    out.put("inventoryPreview", Map.of("equippedTable", "--", "items", java.util.List.of()));
    json(ctx, 200, gson.toJson(out));
  }

  private void beansProfile(Context ctx) throws Exception {
    AuthService.UserProfileSnapshot snap = requireAuth(ctx).orElse(null);
    if (snap == null) return;
    UserRow row = resolveUserRow(snap.userId(), snap);
    BeanProfile bean = resolveBeanProfile(row.userId, row.gold);
    json(ctx, 200, "{\"ok\":true,\"beanProfile\":" + gson.toJson(bean.toMap()) + "}");
  }

  private void claimDaily(Context ctx) throws Exception {
    AuthService.UserProfileSnapshot snap = requireAuth(ctx).orElse(null);
    if (snap == null) return;
    long day = dayBucketUtc();
    if (JdbcEnv.enabled()) {
      try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password())) {
        ensureSchema(c);
        ClaimState st = loadClaimState(c, snap.userId());
        if (st.dailyClaimDay == day) {
          json(ctx, 409, "{\"ok\":false,\"message\":\"Daily beans already claimed.\"}");
          return;
        }
        try (PreparedStatement up = c.prepareStatement("UPDATE users SET gold=gold+? WHERE id=?")) {
          up.setInt(1, DAILY_REWARD);
          up.setLong(2, snap.userId());
          up.executeUpdate();
        }
        st.dailyClaimDay = day;
        st.updatedAtMs = System.currentTimeMillis();
        saveClaimState(c, snap.userId(), st);
        UserRow row = loadUserRow(c, snap.userId(), snap);
        BeanProfile bean = resolveBeanProfile(c, row.userId, row.gold, st);
        json(ctx, 200, "{\"ok\":true,\"rewardBeans\":" + DAILY_REWARD + ",\"beanProfile\":" + gson.toJson(bean.toMap()) + "}");
        return;
      }
    }
    ClaimState st = memoryClaimState.computeIfAbsent(snap.userId(), k -> new ClaimState());
    if (st.dailyClaimDay == day) {
      json(ctx, 409, "{\"ok\":false,\"message\":\"Daily beans already claimed.\"}");
      return;
    }
    st.dailyClaimDay = day;
    st.updatedAtMs = System.currentTimeMillis();
    UserRow row = new UserRow(snap.userId(), snap.loginUsername(), snap.displayName(), snap.avatar(), snap.gold() + DAILY_REWARD, snap.gamesPlayed(), snap.gamesWon());
    BeanProfile bean = resolveBeanProfile(row.userId, row.gold);
    json(ctx, 200, "{\"ok\":true,\"rewardBeans\":" + DAILY_REWARD + ",\"beanProfile\":" + gson.toJson(bean.toMap()) + "}");
  }

  private void adReward(Context ctx) throws Exception {
    AuthService.UserProfileSnapshot snap = requireAuth(ctx).orElse(null);
    if (snap == null) return;
    long day = dayBucketUtc();
    if (JdbcEnv.enabled()) {
      try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password())) {
        ensureSchema(c);
        ClaimState st = loadClaimState(c, snap.userId());
        if (st.adRewardDay != day) {
          st.adRewardDay = day;
          st.adRewardCount = 0;
        }
        if (st.adRewardCount >= AD_MAX_PER_DAY) {
          json(ctx, 409, "{\"ok\":false,\"message\":\"No ad rewards remaining today.\"}");
          return;
        }
        try (PreparedStatement up = c.prepareStatement("UPDATE users SET gold=gold+? WHERE id=?")) {
          up.setInt(1, AD_REWARD);
          up.setLong(2, snap.userId());
          up.executeUpdate();
        }
        st.adRewardCount += 1;
        st.updatedAtMs = System.currentTimeMillis();
        saveClaimState(c, snap.userId(), st);
        UserRow row = loadUserRow(c, snap.userId(), snap);
        BeanProfile bean = resolveBeanProfile(c, row.userId, row.gold, st);
        int remaining = Math.max(0, AD_MAX_PER_DAY - st.adRewardCount);
        json(
            ctx,
            200,
            "{\"ok\":true,\"rewardBeans\":"
                + AD_REWARD
                + ",\"remaining\":"
                + remaining
                + ",\"beanProfile\":"
                + gson.toJson(bean.toMap())
                + "}");
        return;
      }
    }
    ClaimState st = memoryClaimState.computeIfAbsent(snap.userId(), k -> new ClaimState());
    if (st.adRewardDay != day) {
      st.adRewardDay = day;
      st.adRewardCount = 0;
    }
    if (st.adRewardCount >= AD_MAX_PER_DAY) {
      json(ctx, 409, "{\"ok\":false,\"message\":\"No ad rewards remaining today.\"}");
      return;
    }
    st.adRewardCount += 1;
    st.updatedAtMs = System.currentTimeMillis();
    UserRow row =
        new UserRow(
            snap.userId(),
            snap.loginUsername(),
            snap.displayName(),
            snap.avatar(),
            snap.gold() + AD_REWARD,
            snap.gamesPlayed(),
            snap.gamesWon());
    BeanProfile bean = resolveBeanProfile(row.userId, row.gold);
    int remaining = Math.max(0, AD_MAX_PER_DAY - st.adRewardCount);
    json(ctx, 200, "{\"ok\":true,\"rewardBeans\":" + AD_REWARD + ",\"remaining\":" + remaining + ",\"beanProfile\":" + gson.toJson(bean.toMap()) + "}");
  }

  private Optional<AuthService.UserProfileSnapshot> requireAuth(Context ctx) {
    Optional<AuthService.UserProfileSnapshot> snap = auth.snapshotFromCookie(ctx.header("Cookie"));
    if (snap.isEmpty()) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
    }
    return snap;
  }

  private UserRow resolveUserRow(long userId, AuthService.UserProfileSnapshot fallback) throws Exception {
    if (!JdbcEnv.enabled()) {
      return new UserRow(
          fallback.userId(),
          fallback.loginUsername(),
          fallback.displayName(),
          fallback.avatar(),
          fallback.gold(),
          fallback.gamesPlayed(),
          fallback.gamesWon());
    }
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password())) {
      ensureSchema(c);
      return loadUserRow(c, userId, fallback);
    }
  }

  private UserRow loadUserRow(Connection c, long userId, AuthService.UserProfileSnapshot fallback) throws Exception {
    try (PreparedStatement q =
        c.prepareStatement("SELECT id, external_id, username, avatar, gold, games_played, games_won FROM users WHERE id=? LIMIT 1")) {
      q.setLong(1, userId);
      try (ResultSet rs = q.executeQuery()) {
        if (rs.next()) {
          return new UserRow(
              rs.getLong("id"),
              rs.getString("external_id"),
              rs.getString("username"),
              rs.getString("avatar"),
              rs.getLong("gold"),
              rs.getInt("games_played"),
              rs.getInt("games_won"));
        }
      }
    }
    return new UserRow(
        fallback.userId(),
        fallback.loginUsername(),
        fallback.displayName(),
        fallback.avatar(),
        fallback.gold(),
        fallback.gamesPlayed(),
        fallback.gamesWon());
  }

  private BeanProfile resolveBeanProfile(long userId, long gold) throws Exception {
    if (!JdbcEnv.enabled()) {
      int mmr = memoryMmr.computeIfAbsent(userId, k -> 1000);
      ClaimState st = memoryClaimState.computeIfAbsent(userId, k -> new ClaimState());
      return new BeanProfile(gold, mmr, tier(gold), st.dailyClaimDay != dayBucketUtc(), st.adRewardCount);
    }
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password())) {
      ensureSchema(c);
      ClaimState st = loadClaimState(c, userId);
      return resolveBeanProfile(c, userId, gold, st);
    }
  }

  private BeanProfile resolveBeanProfile(Connection c, long userId, long gold, ClaimState st) throws Exception {
    int mmr = 1000;
    try (PreparedStatement q = c.prepareStatement("SELECT mmr_score FROM user_mmr WHERE user_id=? LIMIT 1")) {
      q.setLong(1, userId);
      try (ResultSet rs = q.executeQuery()) {
        if (rs.next()) mmr = rs.getInt(1);
      }
    }
    long day = dayBucketUtc();
    int adCount = (st.adRewardDay == day) ? st.adRewardCount : 0;
    boolean daily = st.dailyClaimDay != day;
    return new BeanProfile(gold, mmr, tier(gold), daily, adCount);
  }

  private ClaimState loadClaimState(Connection c, long userId) throws Exception {
    ClaimState st = new ClaimState();
    try (PreparedStatement q =
        c.prepareStatement(
            "SELECT daily_claim_day, ad_reward_day, ad_reward_count, updated_at_ms FROM bean_claim_state WHERE user_id=? LIMIT 1")) {
      q.setLong(1, userId);
      try (ResultSet rs = q.executeQuery()) {
        if (rs.next()) {
          st.dailyClaimDay = rs.getLong(1);
          st.adRewardDay = rs.getLong(2);
          st.adRewardCount = rs.getInt(3);
          st.updatedAtMs = rs.getLong(4);
        }
      }
    }
    return st;
  }

  private void saveClaimState(Connection c, long userId, ClaimState st) throws Exception {
    try (PreparedStatement up =
        c.prepareStatement(
            "INSERT INTO bean_claim_state (user_id, daily_claim_day, ad_reward_day, ad_reward_count, updated_at_ms) VALUES (?,?,?,?,?) "
                + "ON DUPLICATE KEY UPDATE daily_claim_day=VALUES(daily_claim_day), ad_reward_day=VALUES(ad_reward_day), "
                + "ad_reward_count=VALUES(ad_reward_count), updated_at_ms=VALUES(updated_at_ms)")) {
      up.setLong(1, userId);
      up.setLong(2, st.dailyClaimDay);
      up.setLong(3, st.adRewardDay);
      up.setInt(4, st.adRewardCount);
      up.setLong(5, st.updatedAtMs);
      up.executeUpdate();
    }
  }

  private void ensureSchema(Connection c) throws Exception {
    try (Statement st = c.createStatement()) {
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS user_mmr ("
              + "user_id BIGINT NOT NULL PRIMARY KEY,"
              + "mmr_score INT NOT NULL DEFAULT 1000,"
              + "updated_at_ms BIGINT NOT NULL DEFAULT 0"
              + ")");
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS bean_claim_state ("
              + "user_id BIGINT NOT NULL PRIMARY KEY,"
              + "daily_claim_day BIGINT NOT NULL DEFAULT 0,"
              + "ad_reward_day BIGINT NOT NULL DEFAULT 0,"
              + "ad_reward_count INT NOT NULL DEFAULT 0,"
              + "updated_at_ms BIGINT NOT NULL DEFAULT 0"
              + ")");
    }
  }

  private Map<String, Object> profileMap(UserRow row) {
    Map<String, Object> p = new HashMap<>();
    p.put("userId", row.userId);
    p.put("externalId", row.externalId);
    p.put("loginUsername", row.loginUsername());
    p.put("displayName", row.displayName());
    p.put("username", row.displayName());
    p.put("avatar", row.avatar == null ? "" : row.avatar);
    p.put("gold", row.gold);
    p.put("gamesPlayed", row.gamesPlayed);
    p.put("gamesWon", row.gamesWon);
    return p;
  }

  private static long dayBucketUtc() {
    return System.currentTimeMillis() / 86_400_000L;
  }

  private static String tier(long beans) {
    if (beans < 5000) return "novice";
    if (beans < 20000) return "advanced";
    return "expert";
  }

  private static void json(Context ctx, int status, String body) {
    ctx.status(status);
    ctx.contentType("application/json; charset=utf-8");
    ctx.result(body);
  }

  private record UserRow(
      long userId,
      String externalId,
      String displayName,
      String avatar,
      long gold,
      int gamesPlayed,
      int gamesWon) {
    String loginUsername() {
      return externalId == null ? "" : externalId;
    }
  }

  private static final class ClaimState {
    long dailyClaimDay = 0;
    long adRewardDay = 0;
    int adRewardCount = 0;
    long updatedAtMs = 0;
  }

  private record BeanProfile(
      long beanBalance,
      int mmrScore,
      String tier,
      boolean dailyClaimAvailable,
      int adRewardCount) {
    Map<String, Object> toMap() {
      Map<String, Object> m = new HashMap<>();
      m.put("beanBalance", beanBalance);
      m.put("mmrScore", mmrScore);
      m.put("tier", tier);
      m.put("dailyClaimAvailable", dailyClaimAvailable);
      m.put("adRewardCount", adRewardCount);
      return m;
    }
  }
}
