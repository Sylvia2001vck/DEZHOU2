package nebula.gateway;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Local message table for match → room creation (outbox). Final consistency with Redis list as
 * transport; {@link MatchWorker} consumes and calls C++.
 */
public final class MatchMessageDao {

  public MatchMessageDao() {}

  public void ensureSchema() throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        Statement st = c.createStatement()) {
      st.executeUpdate(
          "CREATE TABLE IF NOT EXISTS match_message ("
              + "id BIGINT PRIMARY KEY AUTO_INCREMENT,"
              + "match_id VARCHAR(64) NOT NULL UNIQUE COMMENT 'idempotency key',"
              + "payload_json JSON NOT NULL COMMENT 'tier,threshold,players snapshots',"
              + "room_type VARCHAR(32) NOT NULL,"
              + "status TINYINT NOT NULL DEFAULT 0 COMMENT '0 pending 1 ok 2 fail',"
              + "retry_count INT NOT NULL DEFAULT 0,"
              + "room_code VARCHAR(16) NULL,"
              + "last_error VARCHAR(512) NULL,"
              + "create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,"
              + "update_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
              + "INDEX idx_status (status)"
              + ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    }
  }

  public void insertPending(String matchId, String payloadJson, String roomType) throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement(
                "INSERT INTO match_message (match_id, payload_json, room_type, status) VALUES (?,?,?,0)")) {
      ps.setString(1, matchId);
      ps.setString(2, payloadJson);
      ps.setString(3, roomType);
      ps.executeUpdate();
    }
  }

  public record Row(long id, String matchId, String payloadJson, String roomType, int status, int retryCount) {}

  public Row findByMatchId(String matchId) throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement(
                "SELECT id, match_id, CAST(payload_json AS CHAR) AS p, room_type, status, retry_count FROM match_message WHERE match_id=?")) {
      ps.setString(1, matchId);
      try (ResultSet rs = ps.executeQuery()) {
        if (!rs.next()) return null;
        return new Row(
            rs.getLong("id"),
            rs.getString("match_id"),
            rs.getString("p"),
            rs.getString("room_type"),
            rs.getInt("status"),
            rs.getInt("retry_count"));
      }
    }
  }

  public void updateStatus(String matchId, int status, String roomCode, String lastError) throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement(
                "UPDATE match_message SET status=?, room_code=COALESCE(?, room_code), last_error=? WHERE match_id=?")) {
      ps.setInt(1, status);
      ps.setString(2, roomCode);
      ps.setString(3, lastError == null ? "" : lastError);
      ps.setString(4, matchId);
      ps.executeUpdate();
    }
  }

  public void bumpRetry(long id) throws Exception {
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement("UPDATE match_message SET retry_count=retry_count+1, status=0 WHERE id=?")) {
      ps.setLong(1, id);
      ps.executeUpdate();
    }
  }

  public List<String> listPendingForRetry(int maxRows) throws Exception {
    List<String> out = new ArrayList<>();
    try (Connection c = DriverManager.getConnection(JdbcEnv.jdbcUrl(), JdbcEnv.user(), JdbcEnv.password());
        PreparedStatement ps =
            c.prepareStatement(
                "SELECT match_id FROM match_message WHERE status=0 AND retry_count < 5 "
                    + "AND TIMESTAMPDIFF(SECOND, create_time, NOW()) > 120 "
                    + "ORDER BY id ASC LIMIT ?")) {
      ps.setInt(1, maxRows);
      try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
          out.add(rs.getString("match_id"));
        }
      }
    }
    return out;
  }
}
