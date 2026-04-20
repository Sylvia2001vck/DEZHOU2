package nebula.gateway;

import io.lettuce.core.SetArgs;
import io.lettuce.core.api.sync.RedisCommands;
import java.util.UUID;

/** SET NX EX style lock; unlock only if value matches. */
public final class RedisLock {
  private RedisLock() {}

  public static boolean tryLock(RedisCommands<String, String> redis, String key, String value, long expireSeconds) {
    if (redis == null) return true;
    SetArgs args = SetArgs.Builder.nx().ex(expireSeconds);
    return "OK".equals(redis.set(NebulaRedis.PREFIX_LOCK + key, value, args));
  }

  public static void unlock(RedisCommands<String, String> redis, String key, String value) {
    if (redis == null) return;
    String k = NebulaRedis.PREFIX_LOCK + key;
    String cur = redis.get(k);
    if (value.equals(cur)) {
      redis.del(k);
    }
  }

  public static String newLockToken() {
    return UUID.randomUUID().toString();
  }
}
