package nebula.gateway;

import java.util.Objects;

/** User identity forwarded to the C++ worker (TCP JSON) so the room process can authorize HTTP/WS. */
public final class GatewayIdentity {
  public final long userId;
  public final String loginUsername;
  /** Base64(UTF-8 JSON profile snapshot) for C++ {@code java_profiles_} / cache. */
  public final String profileB64;

  public GatewayIdentity(long userId, String loginUsername, String profileB64) {
    this.userId = userId;
    this.loginUsername = Objects.requireNonNullElse(loginUsername, "");
    this.profileB64 = profileB64 == null ? "" : profileB64;
  }
}
