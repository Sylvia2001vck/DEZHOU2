package nebula.gateway;

import io.lettuce.core.RedisClient;
import io.lettuce.core.RedisURI;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;

/**
 * Optional Redis (Lettuce). Enabled when {@code REDIS_HOST} is non-empty. Used for session cache,
 * distributed locks, match message queue, and matched-room hints for polling clients.
 */
public final class NebulaRedis {
  private static volatile StatefulRedisConnection<String, String> connection;
  private static volatile RedisCommands<String, String> commands;

  private NebulaRedis() {}

  public static synchronized void init() {
    if (connection != null) return;
    String host = System.getenv("REDIS_HOST");
    if (host == null || host.isEmpty()) {
      return;
    }
    int port = Integer.parseInt(env("REDIS_PORT", "6379"));
    try {
      RedisURI uri = RedisURI.Builder.redis(host, port).build();
      RedisClient client = RedisClient.create(uri);
      connection = client.connect();
      commands = connection.sync();
      System.err.println("[redis] connected " + host + ":" + port);
    } catch (Exception e) {
      System.err.println("[redis] connect failed: " + e.getMessage());
      connection = null;
      commands = null;
    }
  }

  public static void shutdown() {
    synchronized (NebulaRedis.class) {
      try {
        if (connection != null) connection.close();
      } catch (Exception ignored) {
      }
      connection = null;
      commands = null;
    }
  }

  public static boolean available() {
    return commands != null;
  }

  public static RedisCommands<String, String> commands() {
    return commands;
  }

  public static final String KEY_MATCH_MSG = "nebula:match:msg";
  public static final String PREFIX_SESSION = "nebula:ses:";
  public static final String PREFIX_LOCK = "nebula:lock:";
  public static final String PREFIX_PENDING_ROOM = "nebula:pend:";

  private static String env(String k, String d) {
    String v = System.getenv(k);
    return v == null || v.isEmpty() ? d : v;
  }
}
