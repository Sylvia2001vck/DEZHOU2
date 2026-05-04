package nebula.gateway;

import com.google.gson.JsonObject;
import io.javalin.http.Context;
import io.lettuce.core.api.sync.RedisCommands;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Base64;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * HTTP auth: register / login / logout / me. Sessions are opaque tokens in {@code nebula_session}
 * cookie. When Redis is available ({@link NebulaRedis}), sessions are stored in Redis with TTL;
 * otherwise in-memory. User rows: MySQL when {@code MYSQL_HOST} set, else memory.
 */
public final class AuthService {
  private static final String COOKIE = "nebula_session";
  private static final int SESSION_TTL_SEC = 60 * 60 * 24 * 30;

  private final RedisCommands<String, String> redis;
  private final ConcurrentHashMap<String, Session> sessions = new ConcurrentHashMap<>();
  private final ConcurrentHashMap<String, Account> memoryAccounts = new ConcurrentHashMap<>();
  private final AtomicLong memoryUserSeq = new AtomicLong(1);
  private final boolean jdbcEnabled;
  private final String jdbcUrl;
  private final String jdbcUser;
  private final String jdbcPassword;
  private final com.google.gson.Gson gson = new com.google.gson.Gson();

  public AuthService(RedisCommands<String, String> redisCommands) {
    this.redis = redisCommands;
    String host = env("MYSQL_HOST", "");
    jdbcEnabled = host != null && !host.isEmpty();
    if (jdbcEnabled) {
      String user = env("MYSQL_USER", "root");
      String pass = env("MYSQL_PASSWORD", "");
      String db = env("MYSQL_DATABASE", "nebula_poker");
      int port = Integer.parseInt(env("MYSQL_PORT", "3306"));
      jdbcUrl =
          "jdbc:mysql://"
              + host
              + ":"
              + port
              + "/"
              + db
              + "?useSSL=false&allowPublicKeyRetrieval=true&connectTimeout=5000&socketTimeout=10000";
      jdbcUser = user;
      jdbcPassword = pass;
    } else {
      jdbcUrl = "";
      jdbcUser = "";
      jdbcPassword = "";
    }
  }

  public void handle(Context ctx) throws Exception {
    String p = ctx.path();
    String m = ctx.method().name();
    if (p.equals("/api/auth/register") && m.equals("POST")) {
      register(ctx);
      return;
    }
    if (p.equals("/api/auth/login") && m.equals("POST")) {
      login(ctx);
      return;
    }
    if (p.equals("/api/auth/logout") && m.equals("POST")) {
      logout(ctx);
      return;
    }
    if (p.equals("/api/auth/me") && m.equals("GET")) {
      me(ctx);
      return;
    }
    ctx.status(404).result("Not Found");
  }

  public Optional<GatewayIdentity> resolveFromCookie(String cookieHeader) {
    String token = readCookie(cookieHeader, COOKIE);
    Session s = loadSession(token);
    if (s == null) return Optional.empty();
    return Optional.of(toGateway(s.profile));
  }

  /** Resolve session and return profile for matchmaking (gold / display). */
  public Optional<UserProfileSnapshot> snapshotFromCookie(String cookieHeader) {
    String token = readCookie(cookieHeader, COOKIE);
    Session s = loadSession(token);
    if (s == null) return Optional.empty();
    UserProfile p = s.profile;
    return Optional.of(
        new UserProfileSnapshot(
            p.userId, p.loginUsername, p.displayName, p.avatar, p.gold, p.gamesPlayed, p.gamesWon));
  }

  private Session loadSession(String token) {
    if (token == null || token.isEmpty()) return null;
    if (redis != null) {
      try {
        String raw = redis.get(NebulaRedis.PREFIX_SESSION + token);
        if (raw == null || raw.isEmpty()) return null;
        JsonObject o = gson.fromJson(raw, JsonObject.class);
        long exp = o.get("expiresAtMs").getAsLong();
        if (System.currentTimeMillis() > exp) {
          redis.del(NebulaRedis.PREFIX_SESSION + token);
          return null;
        }
        return new Session(profileFromJson(o.getAsJsonObject("profile")), exp);
      } catch (Exception e) {
        return null;
      }
    }
    Session s = sessions.get(token);
    if (s == null) return null;
    if (System.currentTimeMillis() > s.expiresAtMs) {
      sessions.remove(token);
      return null;
    }
    return s;
  }

  private void saveSession(String token, Session s) {
    if (redis != null) {
      JsonObject o = new JsonObject();
      o.addProperty("expiresAtMs", s.expiresAtMs);
      o.add("profile", profileJson(s.profile));
      redis.setex(NebulaRedis.PREFIX_SESSION + token, SESSION_TTL_SEC, gson.toJson(o));
    } else {
      sessions.put(token, s);
    }
  }

  private void deleteSession(String token) {
    if (token == null) return;
    if (redis != null) redis.del(NebulaRedis.PREFIX_SESSION + token);
    else sessions.remove(token);
  }

  private static UserProfile profileFromJson(JsonObject p) {
    return new UserProfile(
        p.get("userId").getAsLong(),
        p.get("loginUsername").getAsString(),
        p.get("displayName").getAsString(),
        p.has("avatar") ? p.get("avatar").getAsString() : "",
        p.get("gold").getAsLong(),
        p.get("gamesPlayed").getAsInt(),
        p.get("gamesWon").getAsInt());
  }

  private void register(Context ctx) throws Exception {
    Map<String, String> form = FormUtil.parseUrlEncoded(ctx.body());
    String login = normalizeUsername(form.getOrDefault("loginUsername", form.getOrDefault("username", "")));
    String display = normalizeDisplayName(form.getOrDefault("displayName", ""));
    if (display.isEmpty()) display = login;
    String password = form.getOrDefault("password", "");
    if (!isValidUsername(login) || !isValidDisplayName(display) || password.length() < 6) {
      json(ctx, 400, "{\"ok\":false,\"message\":\"Use a 3-24 char login username, a 1-48 char display name, and a 6+ char password.\"}");
      return;
    }
    if (jdbcEnabled) {
      try {
        try (Connection c = DriverManager.getConnection(jdbcUrl, jdbcUser, jdbcPassword)) {
          ensureSchema(c);
          try (PreparedStatement chk =
              c.prepareStatement("SELECT 1 FROM auth_users WHERE username=? LIMIT 1")) {
            chk.setString(1, login);
            try (ResultSet rs = chk.executeQuery()) {
              if (rs.next()) {
                json(ctx, 409, "{\"ok\":false,\"message\":\"Login username already exists.\"}");
                return;
              }
            }
          }
          long userId;
          try (PreparedStatement ins =
              c.prepareStatement(
                  "INSERT INTO users (external_id, username, avatar, gold, games_played, games_won) VALUES (?,?,?,?,0,0)",
                  Statement.RETURN_GENERATED_KEYS)) {
            ins.setString(1, login);
            ins.setString(2, display.isEmpty() ? "Player" : display);
            ins.setString(3, "");
            ins.setLong(4, 10000L);
            ins.executeUpdate();
            try (ResultSet keys = ins.getGeneratedKeys()) {
              keys.next();
              userId = keys.getLong(1);
            }
          }
          String salt = PasswordHasher.randomSaltHex(12);
          String hash = PasswordHasher.hashPasswordRecord(password, salt);
          long now = System.currentTimeMillis();
          try (PreparedStatement a =
              c.prepareStatement(
                  "INSERT INTO auth_users (user_id, username, password_hash, created_at, last_login_at) VALUES (?,?,?,?,?)")) {
            a.setLong(1, userId);
            a.setString(2, login);
            a.setString(3, hash);
            a.setLong(4, now);
            a.setLong(5, now);
            a.executeUpdate();
          }
          UserProfile prof = new UserProfile(userId, login, display, "", 10000L, 0, 0);
          startSession(ctx, prof);
        }
      } catch (Exception e) {
        json(ctx, 503, "{\"ok\":false,\"message\":\"Auth database unavailable. Please try again shortly.\"}");
        return;
      }
    } else {
      if (memoryAccounts.containsKey(login)) {
        json(ctx, 409, "{\"ok\":false,\"message\":\"Login username already exists.\"}");
        return;
      }
      long userId = memoryUserSeq.getAndIncrement();
      String salt = PasswordHasher.randomSaltHex(12);
      String hash = PasswordHasher.hashPasswordRecord(password, salt);
      memoryAccounts.put(login, new Account(userId, login, display, hash, 10000L, 0, 0));
      UserProfile prof = new UserProfile(userId, login, display, "", 10000L, 0, 0);
      startSession(ctx, prof);
    }
  }

  private void login(Context ctx) throws Exception {
    Map<String, String> form = FormUtil.parseUrlEncoded(ctx.body());
    String login = normalizeUsername(form.getOrDefault("loginUsername", form.getOrDefault("username", "")));
    String password = form.getOrDefault("password", "");
    if (jdbcEnabled) {
      try {
        try (Connection c = DriverManager.getConnection(jdbcUrl, jdbcUser, jdbcPassword)) {
          ensureSchema(c);
          try (PreparedStatement q =
              c.prepareStatement(
                  "SELECT u.id, u.external_id, u.username, u.avatar, u.gold, u.games_played, u.games_won, a.password_hash "
                      + "FROM users u JOIN auth_users a ON a.user_id=u.id WHERE a.username=? LIMIT 1")) {
            q.setString(1, login);
            try (ResultSet rs = q.executeQuery()) {
              if (!rs.next()) {
                json(ctx, 401, "{\"ok\":false,\"message\":\"Invalid username or password.\"}");
                return;
              }
              String ph = rs.getString("password_hash");
              if (!PasswordHasher.verifyPasswordRecord(password, ph)) {
                json(ctx, 401, "{\"ok\":false,\"message\":\"Invalid username or password.\"}");
                return;
              }
              long uid = rs.getLong("id");
              String display = rs.getString("username");
              String avatar = rs.getString("avatar");
              long gold = rs.getLong("gold");
              int gp = rs.getInt("games_played");
              int gw = rs.getInt("games_won");
              try (PreparedStatement up =
                  c.prepareStatement("UPDATE auth_users SET last_login_at=? WHERE user_id=?")) {
                up.setLong(1, System.currentTimeMillis());
                up.setLong(2, uid);
                up.executeUpdate();
              }
              UserProfile prof = new UserProfile(uid, login, display, avatar, gold, gp, gw);
              startSession(ctx, prof);
            }
          }
        }
      } catch (Exception e) {
        if (password == null || password.isEmpty()) {
          json(ctx, 400, "{\"ok\":false,\"message\":\"Password is required.\"}");
          return;
        }
        if (login == null || login.isEmpty()) {
          json(ctx, 400, "{\"ok\":false,\"message\":\"Username is required.\"}");
          return;
        }
        if (e.getMessage() != null && e.getMessage().toLowerCase().contains("invalid username or password")) {
          json(ctx, 401, "{\"ok\":false,\"message\":\"Invalid username or password.\"}");
          return;
        }
        json(ctx, 503, "{\"ok\":false,\"message\":\"Auth database unavailable. Please try again shortly.\"}");
        return;
      }
    } else {
      Account acc = memoryAccounts.get(login);
      if (acc == null || !PasswordHasher.verifyPasswordRecord(password, acc.passwordHash)) {
        json(ctx, 401, "{\"ok\":false,\"message\":\"Invalid username or password.\"}");
        return;
      }
      UserProfile prof =
          new UserProfile(
              acc.userId,
              login,
              acc.displayName == null || acc.displayName.isEmpty() ? login : acc.displayName,
              "",
              acc.gold,
              acc.gamesPlayed,
              acc.gamesWon);
      startSession(ctx, prof);
    }
  }

  private void logout(Context ctx) {
    String token = readCookie(ctx.header("Cookie"), COOKIE);
    deleteSession(token);
    ctx.header("Set-Cookie", COOKIE + "=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
    json(ctx, 200, "{\"ok\":true}");
  }

  private void me(Context ctx) {
    String token = readCookie(ctx.header("Cookie"), COOKIE);
    Session s = loadSession(token);
    if (s == null) {
      json(ctx, 401, "{\"ok\":false}");
      return;
    }
    json(ctx, 200, "{\"ok\":true,\"user\":" + userJson(s.profile) + "}");
  }

  private void startSession(Context ctx, UserProfile prof) {
    String token = PasswordHasher.randomSaltHex(12);
    long exp = System.currentTimeMillis() + SESSION_TTL_SEC * 1000L;
    saveSession(token, new Session(prof, exp));
    ctx.header(
        "Set-Cookie",
        COOKIE + "=" + token + "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" + SESSION_TTL_SEC);
    json(ctx, 200, "{\"ok\":true,\"user\":" + userJson(prof) + "}");
  }

  public GatewayIdentity gatewayIdentityFromSnapshot(UserProfileSnapshot snap) {
    UserProfile p =
        new UserProfile(
            snap.userId(),
            snap.loginUsername(),
            snap.displayName(),
            snap.avatar(),
            snap.gold(),
            snap.gamesPlayed(),
            snap.gamesWon());
    return toGateway(p);
  }

  GatewayIdentity toGateway(UserProfile p) {
    JsonObject o = profileJson(p);
    String utf8 = gson.toJson(o);
    String b64 = Base64.getEncoder().encodeToString(utf8.getBytes(StandardCharsets.UTF_8));
    return new GatewayIdentity(p.userId, p.loginUsername, b64);
  }

  private JsonObject profileJson(UserProfile p) {
    JsonObject o = new JsonObject();
    o.addProperty("userId", p.userId);
    o.addProperty("externalId", p.loginUsername);
    o.addProperty("loginUsername", p.loginUsername);
    o.addProperty("displayName", p.displayName);
    o.addProperty("username", p.displayName);
    o.addProperty("avatar", p.avatar == null ? "" : p.avatar);
    o.addProperty("gold", p.gold);
    o.addProperty("gamesPlayed", p.gamesPlayed);
    o.addProperty("gamesWon", p.gamesWon);
    return o;
  }

  private String userJson(UserProfile p) {
    String display = p.displayName == null || p.displayName.isEmpty() ? p.loginUsername : p.displayName;
    return "{"
        + "\"userId\":"
        + p.userId
        + ",\"externalId\":\""
        + esc(p.loginUsername)
        + "\",\"loginUsername\":\""
        + esc(p.loginUsername)
        + "\",\"displayName\":\""
        + esc(display)
        + "\",\"username\":\""
        + esc(display)
        + "\",\"avatar\":\""
        + esc(p.avatar)
        + "\",\"gold\":"
        + p.gold
        + ",\"beanBalance\":"
        + p.gold
        + ",\"mmrScore\":1000,\"gamesPlayed\":"
        + p.gamesPlayed
        + ",\"gamesWon\":"
        + p.gamesWon
        + "}";
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

  private static String readCookie(String cookieHeader, String name) {
    if (cookieHeader == null || cookieHeader.isEmpty()) return null;
    String prefix = name + "=";
    for (String part : cookieHeader.split(";")) {
      String t = part.trim();
      if (t.startsWith(prefix)) return t.substring(prefix.length());
    }
    return null;
  }

  private static String env(String k, String d) {
    String v = System.getenv(k);
    return v == null || v.isEmpty() ? d : v;
  }

  private static String normalizeUsername(String s) {
    return s == null ? "" : s.trim().toLowerCase();
  }

  private static String normalizeDisplayName(String s) {
    return s == null ? "" : s.trim();
  }

  private static boolean isValidUsername(String u) {
    if (u.length() < 3 || u.length() > 24) return false;
    for (int i = 0; i < u.length(); i++) {
      char ch = u.charAt(i);
      if (!(Character.isLetterOrDigit(ch) || ch == '_' || ch == '-')) return false;
    }
    return true;
  }

  private static boolean isValidDisplayName(String d) {
    if (d == null || d.isEmpty() || d.length() > 48) return false;
    for (int i = 0; i < d.length(); i++) {
      char ch = d.charAt(i);
      if (ch < 0x20 || ch == 0x7f) return false;
    }
    return true;
  }

  private static void ensureSchema(Connection c) throws Exception {
    try (Statement st = c.createStatement()) {
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS users ("
              + "id BIGINT PRIMARY KEY AUTO_INCREMENT,"
              + "external_id VARCHAR(128) NOT NULL UNIQUE,"
              + "username VARCHAR(128) NOT NULL,"
              + "avatar VARCHAR(255) NOT NULL DEFAULT '',"
              + "gold BIGINT NOT NULL DEFAULT 10000,"
              + "games_played INT NOT NULL DEFAULT 0,"
              + "games_won INT NOT NULL DEFAULT 0"
              + ")");
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS auth_users ("
              + "user_id BIGINT NOT NULL PRIMARY KEY,"
              + "username VARCHAR(128) NOT NULL UNIQUE,"
              + "password_hash VARCHAR(255) NOT NULL,"
              + "created_at BIGINT NOT NULL,"
              + "last_login_at BIGINT NOT NULL"
              + ")");
    }
  }

  private static final class Session {
    final UserProfile profile;
    final long expiresAtMs;

    Session(UserProfile profile, long expiresAtMs) {
      this.profile = profile;
      this.expiresAtMs = expiresAtMs;
    }
  }

  private static final class UserProfile {
    final long userId;
    final String loginUsername;
    final String displayName;
    final String avatar;
    final long gold;
    final int gamesPlayed;
    final int gamesWon;

    UserProfile(long userId, String loginUsername, String displayName, String avatar, long gold, int gp, int gw) {
      this.userId = userId;
      this.loginUsername = loginUsername;
      this.displayName = displayName;
      this.avatar = avatar;
      this.gold = gold;
      this.gamesPlayed = gp;
      this.gamesWon = gw;
    }
  }

  private static final class Account {
    final long userId;
    final String loginUsername;
    final String displayName;
    final String passwordHash;
    long gold;
    int gamesPlayed;
    int gamesWon;

    Account(long userId, String loginUsername, String displayName, String passwordHash, long gold, int gp, int gw) {
      this.userId = userId;
      this.loginUsername = loginUsername;
      this.displayName = displayName;
      this.passwordHash = passwordHash;
      this.gold = gold;
      this.gamesPlayed = gp;
      this.gamesWon = gw;
    }
  }

  public record UserProfileSnapshot(
      long userId,
      String loginUsername,
      String displayName,
      String avatar,
      long gold,
      int gamesPlayed,
      int gamesWon) {}
}
