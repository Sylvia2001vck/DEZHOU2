package nebula.gateway;

/** Shared JDBC URL from same env vars as C++ / AuthService. */
final class JdbcEnv {
  private JdbcEnv() {}

  static boolean enabled() {
    String h = System.getenv("MYSQL_HOST");
    return h != null && !h.isEmpty();
  }

  static String jdbcUrl() {
    String host = System.getenv("MYSQL_HOST");
    String user = env("MYSQL_USER", "root");
    String pass = env("MYSQL_PASSWORD", "");
    String db = env("MYSQL_DATABASE", "nebula_poker");
    int port = Integer.parseInt(env("MYSQL_PORT", "3306"));
    return "jdbc:mysql://" + host + ":" + port + "/" + db + "?useSSL=false&allowPublicKeyRetrieval=true";
  }

  static String user() {
    return env("MYSQL_USER", "root");
  }

  static String password() {
    return env("MYSQL_PASSWORD", "");
  }

  private static String env(String k, String d) {
    String v = System.getenv(k);
    return v == null || v.isEmpty() ? d : v;
  }
}
