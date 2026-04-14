#include <algorithm>
#include <array>
#include <cctype>
#include <chrono>
#include <cstdint>
#include <cstdlib>
#include <deque>
#include <filesystem>
#include <fstream>
#include <functional>
#include <iomanip>
#include <iostream>
#include <limits>
#include <map>
#include <memory>
#include <mutex>
#include <optional>
#include <random>
#include <set>
#include <sstream>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>

#include <asio/steady_timer.hpp>
// WebSocket++ must come before Protobuf: some protobuf transitive headers define macros
// that break websocketpp/logger/basic.hpp (constructors parse as invalid syntax on GCC).
#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>

#include <google/protobuf/message.h>

#include "poker.pb.h"
#include "sha256.hpp"

#ifdef NEBULA_HAVE_MYSQL
#include <mysql.h>
#endif

#ifdef NEBULA_HAVE_HIREDIS
#include <hiredis/hiredis.h>
#endif

namespace {

using websocketpp::connection_hdl;
using WsServer = websocketpp::server<websocketpp::config::asio>;
using Clock = std::chrono::steady_clock;
using Ms = std::chrono::milliseconds;

constexpr int kSeats = 10;
constexpr int64_t kSessionTtlMs = 1000LL * 60LL * 60LL * 24LL * 30LL;
constexpr int64_t kGameplaySessionTtlMs = 1000LL * 60LL * 5LL;
constexpr int64_t kAiTakeoverDelayMs = 1000LL * 60LL;
constexpr int kMatchmakingThreshold = 3;
constexpr std::size_t kRoomEventLogLimit = 600;
constexpr const char* kSessionCookieName = "nebula_session";

int64_t now_ms() {
  return std::chrono::duration_cast<Ms>(Clock::now().time_since_epoch()).count();
}

std::string get_env(const char* name, const std::string& fallback = "") {
  const char* v = std::getenv(name);
  return v ? std::string(v) : fallback;
}

int get_env_int(const char* name, int fallback) {
  const std::string raw = get_env(name);
  if (raw.empty()) return fallback;
  try {
    return std::stoi(raw);
  } catch (...) {
    return fallback;
  }
}

std::string escape_json(const std::string& in) {
  std::ostringstream out;
  for (char c : in) {
    switch (c) {
      case '"': out << "\\\""; break;
      case '\\': out << "\\\\"; break;
      case '\b': out << "\\b"; break;
      case '\f': out << "\\f"; break;
      case '\n': out << "\\n"; break;
      case '\r': out << "\\r"; break;
      case '\t': out << "\\t"; break;
      default:
        if (static_cast<unsigned char>(c) < 0x20) {
          out << "\\u" << std::hex << std::setw(4) << std::setfill('0')
              << static_cast<int>(static_cast<unsigned char>(c));
        } else {
          out << c;
        }
    }
  }
  return out.str();
}

std::string trim_copy(std::string value) {
  auto is_space = [](unsigned char ch) { return std::isspace(ch) != 0; };
  value.erase(value.begin(), std::find_if(value.begin(), value.end(), [&](char ch) { return !is_space(static_cast<unsigned char>(ch)); }));
  value.erase(std::find_if(value.rbegin(), value.rend(), [&](char ch) { return !is_space(static_cast<unsigned char>(ch)); }).base(), value.end());
  return value;
}

std::string to_lower_ascii(std::string value) {
  std::transform(value.begin(), value.end(), value.begin(), [](unsigned char ch) { return static_cast<char>(std::tolower(ch)); });
  return value;
}

std::string to_upper_ascii(std::string value) {
  std::transform(value.begin(), value.end(), value.begin(), [](unsigned char ch) { return static_cast<char>(std::toupper(ch)); });
  return value;
}

std::string normalize_username(std::string value) {
  return to_lower_ascii(trim_copy(std::move(value)));
}

std::string normalize_display_name(std::string value) {
  return trim_copy(std::move(value));
}

std::string normalize_action_name(std::string value) {
  return to_lower_ascii(trim_copy(std::move(value)));
}

std::string to_upper_room_code(std::string value) {
  return to_upper_ascii(trim_copy(std::move(value)));
}

bool is_valid_username(const std::string& username) {
  if (username.size() < 3 || username.size() > 24) return false;
  return std::all_of(username.begin(), username.end(), [](unsigned char ch) {
    return std::isalnum(ch) || ch == '_' || ch == '-';
  });
}

bool is_valid_display_name(const std::string& display_name) {
  if (display_name.empty() || display_name.size() > 48) return false;
  return std::all_of(display_name.begin(), display_name.end(), [](unsigned char ch) {
    return ch >= 0x20 && ch != 0x7f;
  });
}

std::string url_decode(const std::string& input) {
  std::string out;
  out.reserve(input.size());
  for (std::size_t i = 0; i < input.size(); ++i) {
    if (input[i] == '+' ) {
      out.push_back(' ');
      continue;
    }
    if (input[i] == '%' && i + 2 < input.size()) {
      const std::string hex = input.substr(i + 1, 2);
      char* end = nullptr;
      const long value = std::strtol(hex.c_str(), &end, 16);
      if (end && *end == '\0') {
        out.push_back(static_cast<char>(value));
        i += 2;
        continue;
      }
    }
    out.push_back(input[i]);
  }
  return out;
}

std::unordered_map<std::string, std::string> parse_form_body(const std::string& body) {
  std::unordered_map<std::string, std::string> out;
  std::size_t start = 0;
  while (start <= body.size()) {
    const std::size_t end = body.find('&', start);
    const std::string pair = body.substr(start, end == std::string::npos ? std::string::npos : end - start);
    const std::size_t eq = pair.find('=');
    const std::string key = url_decode(pair.substr(0, eq));
    const std::string value = eq == std::string::npos ? "" : url_decode(pair.substr(eq + 1));
    if (!key.empty()) out[key] = value;
    if (end == std::string::npos) break;
    start = end + 1;
  }
  return out;
}

std::unordered_map<std::string, std::string> parse_cookie_header(const std::string& header) {
  std::unordered_map<std::string, std::string> out;
  std::size_t start = 0;
  while (start < header.size()) {
    const std::size_t end = header.find(';', start);
    const std::string part = trim_copy(header.substr(start, end == std::string::npos ? std::string::npos : end - start));
    const std::size_t eq = part.find('=');
    if (eq != std::string::npos) out[part.substr(0, eq)] = part.substr(eq + 1);
    if (end == std::string::npos) break;
    start = end + 1;
  }
  return out;
}

std::string read_file(const std::string& path) {
  std::ifstream in(path, std::ios::binary);
  if (!in) return {};
  std::ostringstream ss;
  ss << in.rdbuf();
  return ss.str();
}

std::string mime_for_path(const std::string& path) {
  if (path.ends_with(".html")) return "text/html; charset=utf-8";
  if (path.ends_with(".js")) return "application/javascript; charset=utf-8";
  if (path.ends_with(".proto")) return "text/plain; charset=utf-8";
  if (path.ends_with(".json")) return "application/json; charset=utf-8";
  if (path.ends_with(".png")) return "image/png";
  if (path.ends_with(".jpg") || path.ends_with(".jpeg")) return "image/jpeg";
  if (path.ends_with(".webp")) return "image/webp";
  if (path.ends_with(".gif")) return "image/gif";
  if (path.ends_with(".mp3")) return "audio/mpeg";
  if (path.ends_with(".svg")) return "image/svg+xml";
  if (path.ends_with(".css")) return "text/css; charset=utf-8";
  return "text/plain; charset=utf-8";
}

std::string password_digest(const std::string& password, const std::string& salt, int iterations) {
  std::string digest = nebula::sha256::hash(salt + ":" + password);
  for (int i = 1; i < iterations; ++i) {
    digest = nebula::sha256::hash(digest + ":" + salt + ":" + password);
  }
  return digest;
}

std::string hash_password_record(const std::string& password, const std::string& salt) {
  constexpr int kIterations = 120000;
  return "v1$" + salt + "$120000$" + password_digest(password, salt, kIterations);
}

bool verify_password_record(const std::string& password, const std::string& record) {
  const std::size_t a = record.find('$');
  if (a == std::string::npos) return false;
  const std::size_t b = record.find('$', a + 1);
  if (b == std::string::npos) return false;
  const std::size_t c = record.find('$', b + 1);
  if (c == std::string::npos) return false;
  const std::string salt = record.substr(a + 1, b - a - 1);
  int iterations = 0;
  try {
    iterations = std::stoi(record.substr(b + 1, c - b - 1));
  } catch (...) {
    return false;
  }
  if (iterations <= 0) return false;
  return password_digest(password, salt, iterations) == record.substr(c + 1);
}

struct Card {
  std::string s;
  std::string r;
  int v = 0;
};

struct Seat {
  enum class Type { Empty, Player, AI };

  Type type = Type::Empty;
  std::string socket_id;
  std::string name;
  std::string client_id;
  std::string decor = "none";
  int64_t user_id = 0;
  std::string gameplay_session_id;
  std::string reconnect_token;
  bool ai_managed = false;
  int64_t ai_takeover_at = 0;
  int64_t disconnected_at = 0;
};

struct PlayerState {
  int seat_idx = -1;
  int chips = 1000;
  int current_bet = 0;
  bool is_folded = false;
  bool is_bankrupt = false;
  std::vector<Card> hand;
  int total_buy_in = 1000;
  int pending_rebuy = 0;
  int sit_out_until_hand = 0;
};

struct VoiceParticipant {
  std::string socket_id;
  int seat_idx = -1;
  std::string name;
};

struct WinnerInfo {
  int seat_idx = -1;
  std::string name;
};

struct MatchHandInfo {
  int hand_num = 0;
  std::vector<WinnerInfo> winners;
  std::string desc;
};

struct UserProfileData {
  int64_t user_id = 0;
  std::string external_id;
  std::string login_username;
  std::string username;
  std::string avatar;
  int64_t gold = 10000;
  int games_played = 0;
  int games_won = 0;
};

struct AuthAccountData {
  int64_t user_id = 0;
  std::string username;
  std::string password_hash;
  int64_t created_at = 0;
  int64_t last_login_at = 0;
};

struct AuthSessionData {
  std::string session_id;
  int64_t user_id = 0;
  std::string username;
  int64_t expires_at = 0;
};

struct GameplaySessionData {
  std::string gameplay_session_id;
  int64_t user_id = 0;
  std::string room_id;
  int seat_idx = -1;
  std::string reconnect_token;
  int64_t last_seen_seq = 0;
  int64_t last_disconnect_at = 0;
  int64_t ai_takeover_at = 0;
  int64_t expires_at = 0;
  bool ai_managed = false;
};

struct MatchStat {
  std::string external_id;
  std::string username;
  int64_t gold_delta = 0;
  bool winner = false;
};

struct BeanQueueEntry {
  int64_t user_id = 0;
  int64_t bean_balance = 0;
  int mmr = 1000;
  int64_t queued_at = 0;
};

struct TournamentInfo {
  std::string id;
  std::string title;
  std::string status = "scheduled";
  int64_t signup_opens_at = 0;
  int64_t starts_at = 0;
  int reward_beans = 0;
  std::string reward_skin;
  int max_players = 27;
  std::set<int64_t> registered_users;
};

struct RoomEventEntry {
  int64_t seq = 0;
  std::string envelope_bytes;
  int seat_idx = -1;
  int64_t created_at = 0;
};

struct Room {
  std::string room_id;
  std::string room_code;
  std::string room_type = "friend";
  int64_t owner_user_id = 0;
  std::string visibility = "private";
  std::string status = "waiting";
  int max_players = kSeats;
  int64_t created_at = now_ms();
  int64_t last_active_at = now_ms();
  std::optional<int64_t> empty_since = now_ms();
  std::set<std::string> socket_ids;
  std::string host_socket_id;
  std::vector<Seat> seats = std::vector<Seat>(kSeats);
  bool started = false;

  int total_hands = 5;
  int initial_chips = 1000;
  int small_blind = 50;
  int big_blind = 100;

  int hand_num = 0;
  int dealer_seat_idx = 0;
  int sb_seat_idx = -1;
  int bb_seat_idx = -1;
  int pot = 0;
  std::string round = "WAITING";
  std::vector<Card> community_cards;
  std::vector<Card> deck;
  int current_max_bet = 0;
  int min_raise = 100;
  int active_seat_idx = -1;
  std::set<int> pending_action_seats;
  std::map<int, PlayerState> players;

  int turn_nonce = 0;
  int last_actor_seat_idx = -1;
  std::unique_ptr<asio::steady_timer> ai_timer;

  std::map<std::string, VoiceParticipant> voice_participants;
  std::vector<MatchHandInfo> hand_history;
  std::vector<std::string> activity_log;
  int64_t event_seq = 0;
  std::deque<RoomEventEntry> event_log;
  std::array<std::unique_ptr<asio::steady_timer>, kSeats> ai_takeover_timers;
  bool closing = false;
  std::set<std::string> expected_acks;
  std::set<std::string> match_acks;
};

struct HandEval {
  int rank = 0;
  std::vector<int> value;
  std::string desc;
};

struct Session {
  std::string socket_id;
  std::string session_id;
  std::string gameplay_session_id;
  std::string room_id;
  int seat_idx = -1;
  std::string name;
  std::string client_id;
  int64_t user_id = 0;
  int64_t last_seen_seq = 0;
  bool authenticated = false;
  bool voice_joined = false;
  UserProfileData profile;
};

class UserStore {
 public:
  virtual ~UserStore() = default;
  virtual UserProfileData load_or_create(const std::string& external_id, const std::string& username) = 0;
  virtual void record_match(const std::vector<MatchStat>& stats) = 0;
};

class AuthStore {
 public:
  virtual ~AuthStore() = default;
  virtual std::optional<AuthAccountData> register_account(int64_t user_id, const std::string& username,
                                                          const std::string& password_hash, std::string& error) = 0;
  virtual std::optional<AuthAccountData> find_by_username(const std::string& username) = 0;
  virtual std::optional<AuthAccountData> find_by_user_id(int64_t user_id) = 0;
  virtual void update_last_login(int64_t user_id, int64_t ts) = 0;
};

class MemoryAuthStore final : public AuthStore {
 public:
  std::optional<AuthAccountData> register_account(int64_t user_id, const std::string& username,
                                                  const std::string& password_hash, std::string& error) override {
    if (accounts_by_username_.count(username) > 0) {
      error = "Username already exists.";
      return std::nullopt;
    }
    AuthAccountData account;
    account.user_id = user_id;
    account.username = username;
    account.password_hash = password_hash;
    account.created_at = now_ms();
    account.last_login_at = account.created_at;
    accounts_by_username_[username] = account;
    usernames_by_user_id_[user_id] = username;
    return account;
  }

  std::optional<AuthAccountData> find_by_username(const std::string& username) override {
    auto it = accounts_by_username_.find(username);
    if (it == accounts_by_username_.end()) return std::nullopt;
    return it->second;
  }

  std::optional<AuthAccountData> find_by_user_id(int64_t user_id) override {
    auto it = usernames_by_user_id_.find(user_id);
    if (it == usernames_by_user_id_.end()) return std::nullopt;
    return find_by_username(it->second);
  }

  void update_last_login(int64_t user_id, int64_t ts) override {
    auto it = usernames_by_user_id_.find(user_id);
    if (it == usernames_by_user_id_.end()) return;
    accounts_by_username_[it->second].last_login_at = ts;
  }

 private:
  std::unordered_map<std::string, AuthAccountData> accounts_by_username_;
  std::unordered_map<int64_t, std::string> usernames_by_user_id_;
};

class MemoryUserStore final : public UserStore {
 public:
  UserProfileData load_or_create(const std::string& external_id, const std::string& username) override {
    const std::string key = external_id.empty() ? username : external_id;
    auto it = users_.find(key);
    if (it == users_.end()) {
      UserProfileData user;
      user.user_id = ++last_id_;
      user.external_id = key;
      user.login_username = key;
      user.username = username.empty() ? key : username;
      it = users_.emplace(key, user).first;
    } else if (!username.empty()) {
      it->second.username = username;
    }
    if (it->second.login_username.empty()) it->second.login_username = key;
    return it->second;
  }

  void record_match(const std::vector<MatchStat>& stats) override {
    for (const auto& stat : stats) {
      auto it = users_.find(stat.external_id.empty() ? stat.username : stat.external_id);
      if (it == users_.end()) continue;
      it->second.games_played += 1;
      if (stat.winner) it->second.games_won += 1;
      it->second.gold += stat.gold_delta;
      if (it->second.gold < 0) it->second.gold = 0;
    }
  }

 private:
  int64_t last_id_ = 0;
  std::unordered_map<std::string, UserProfileData> users_;
};

#ifdef NEBULA_HAVE_MYSQL
class MySqlUserStore final : public UserStore {
 public:
  MySqlUserStore() {
    host_ = get_env("MYSQL_HOST", "127.0.0.1");
    user_ = get_env("MYSQL_USER", "root");
    password_ = get_env("MYSQL_PASSWORD", "");
    db_ = get_env("MYSQL_DATABASE", "nebula_poker");
    port_ = get_env_int("MYSQL_PORT", 3306);
  }

  UserProfileData load_or_create(const std::string& external_id, const std::string& username) override {
    MYSQL* conn = connect();
    if (!conn) return fallback_.load_or_create(external_id, username);

    const std::string key = external_id.empty() ? username : external_id;
    ensure_schema(conn);

    {
      std::ostringstream upsert;
      upsert
          << "INSERT INTO users (external_id, username, avatar, gold, games_played, games_won) VALUES ('"
          << escape_sql(key) << "', '" << escape_sql(username.empty() ? "Player" : username)
          << "', '', 10000, 0, 0) ON DUPLICATE KEY UPDATE username=VALUES(username)";
      mysql_query(conn, upsert.str().c_str());
    }

    UserProfileData out = fallback_.load_or_create(external_id, username);
    {
      std::ostringstream select;
      select
          << "SELECT id, external_id, username, avatar, gold, games_played, games_won "
          << "FROM users WHERE external_id='" << escape_sql(key) << "' LIMIT 1";
      if (mysql_query(conn, select.str().c_str()) == 0) {
        if (MYSQL_RES* res = mysql_store_result(conn)) {
          if (MYSQL_ROW row = mysql_fetch_row(res)) {
            out.user_id = row[0] ? std::atoll(row[0]) : 0;
            out.external_id = row[1] ? row[1] : "";
            out.login_username = out.external_id;
            out.username = row[2] ? row[2] : username;
            out.avatar = row[3] ? row[3] : "";
            out.gold = row[4] ? std::atoll(row[4]) : 10000;
            out.games_played = row[5] ? std::atoi(row[5]) : 0;
            out.games_won = row[6] ? std::atoi(row[6]) : 0;
          }
          mysql_free_result(res);
        }
      }
    }

    mysql_close(conn);
    return out;
  }

  void record_match(const std::vector<MatchStat>& stats) override {
    MYSQL* conn = connect();
    if (!conn) {
      fallback_.record_match(stats);
      return;
    }
    ensure_schema(conn);
    for (const auto& stat : stats) {
      std::ostringstream up;
      up
          << "UPDATE users SET gold=GREATEST(gold + " << stat.gold_delta
          << ", 0), games_played=games_played+1, games_won=games_won+" << (stat.winner ? 1 : 0)
          << " WHERE external_id='" << escape_sql(stat.external_id.empty() ? stat.username : stat.external_id) << "'";
      mysql_query(conn, up.str().c_str());
    }
    mysql_close(conn);
    fallback_.record_match(stats);
  }

 private:
  MYSQL* connect() {
    MYSQL* conn = mysql_init(nullptr);
    if (!conn) return nullptr;
    if (!mysql_real_connect(conn, host_.c_str(), user_.c_str(), password_.c_str(), db_.c_str(), port_, nullptr, 0)) {
      mysql_close(conn);
      return nullptr;
    }
    return conn;
  }

  void ensure_schema(MYSQL* conn) {
    const char* ddl =
        "CREATE TABLE IF NOT EXISTS users ("
        "id BIGINT PRIMARY KEY AUTO_INCREMENT,"
        "external_id VARCHAR(128) NOT NULL UNIQUE,"
        "username VARCHAR(128) NOT NULL,"
        "avatar VARCHAR(255) NOT NULL DEFAULT '',"
        "gold BIGINT NOT NULL DEFAULT 10000,"
        "games_played INT NOT NULL DEFAULT 0,"
        "games_won INT NOT NULL DEFAULT 0"
        ")";
    mysql_query(conn, ddl);
  }

  std::string escape_sql(const std::string& in) {
    std::string out;
    out.resize(in.size() * 2 + 1);
    MYSQL* tmp = mysql_init(nullptr);
    unsigned long n = mysql_real_escape_string(tmp, out.data(), in.c_str(), static_cast<unsigned long>(in.size()));
    mysql_close(tmp);
    out.resize(n);
    return out;
  }

  std::string host_;
  std::string user_;
  std::string password_;
  std::string db_;
  unsigned int port_ = 3306;
  MemoryUserStore fallback_;
};
#endif

#ifdef NEBULA_HAVE_MYSQL
class MySqlAuthStore final : public AuthStore {
 public:
  MySqlAuthStore() {
    host_ = get_env("MYSQL_HOST", "127.0.0.1");
    user_ = get_env("MYSQL_USER", "root");
    password_ = get_env("MYSQL_PASSWORD", "");
    db_ = get_env("MYSQL_DATABASE", "nebula_poker");
    port_ = get_env_int("MYSQL_PORT", 3306);
  }

  std::optional<AuthAccountData> register_account(int64_t user_id, const std::string& username,
                                                  const std::string& password_hash, std::string& error) override {
    MYSQL* conn = connect();
    if (!conn) {
      error = "Auth database unavailable.";
      return std::nullopt;
    }
    ensure_schema(conn);
    std::ostringstream insert;
    insert << "INSERT INTO auth_users (user_id, username, password_hash, created_at, last_login_at) VALUES ("
           << user_id << ", '" << escape_sql(username) << "', '" << escape_sql(password_hash) << "', " << now_ms()
           << ", " << now_ms() << ")";
    if (mysql_query(conn, insert.str().c_str()) != 0) {
      error = "Username already exists.";
      mysql_close(conn);
      return std::nullopt;
    }
    mysql_close(conn);
    return find_by_username(username);
  }

  std::optional<AuthAccountData> find_by_username(const std::string& username) override {
    MYSQL* conn = connect();
    if (!conn) return std::nullopt;
    ensure_schema(conn);
    std::ostringstream query;
    query << "SELECT user_id, username, password_hash, created_at, last_login_at FROM auth_users WHERE username='"
          << escape_sql(username) << "' LIMIT 1";
    std::optional<AuthAccountData> out;
    if (mysql_query(conn, query.str().c_str()) == 0) {
      if (MYSQL_RES* res = mysql_store_result(conn)) {
        if (MYSQL_ROW row = mysql_fetch_row(res)) {
          AuthAccountData account;
          account.user_id = row[0] ? std::atoll(row[0]) : 0;
          account.username = row[1] ? row[1] : "";
          account.password_hash = row[2] ? row[2] : "";
          account.created_at = row[3] ? std::atoll(row[3]) : 0;
          account.last_login_at = row[4] ? std::atoll(row[4]) : 0;
          out = account;
        }
        mysql_free_result(res);
      }
    }
    mysql_close(conn);
    return out;
  }

  std::optional<AuthAccountData> find_by_user_id(int64_t user_id) override {
    MYSQL* conn = connect();
    if (!conn) return std::nullopt;
    ensure_schema(conn);
    std::ostringstream query;
    query << "SELECT user_id, username, password_hash, created_at, last_login_at FROM auth_users WHERE user_id="
          << user_id << " LIMIT 1";
    std::optional<AuthAccountData> out;
    if (mysql_query(conn, query.str().c_str()) == 0) {
      if (MYSQL_RES* res = mysql_store_result(conn)) {
        if (MYSQL_ROW row = mysql_fetch_row(res)) {
          AuthAccountData account;
          account.user_id = row[0] ? std::atoll(row[0]) : 0;
          account.username = row[1] ? row[1] : "";
          account.password_hash = row[2] ? row[2] : "";
          account.created_at = row[3] ? std::atoll(row[3]) : 0;
          account.last_login_at = row[4] ? std::atoll(row[4]) : 0;
          out = account;
        }
        mysql_free_result(res);
      }
    }
    mysql_close(conn);
    return out;
  }

  void update_last_login(int64_t user_id, int64_t ts) override {
    MYSQL* conn = connect();
    if (!conn) return;
    ensure_schema(conn);
    std::ostringstream update;
    update << "UPDATE auth_users SET last_login_at=" << ts << " WHERE user_id=" << user_id;
    mysql_query(conn, update.str().c_str());
    mysql_close(conn);
  }

 private:
  MYSQL* connect() {
    MYSQL* conn = mysql_init(nullptr);
    if (!conn) return nullptr;
    if (!mysql_real_connect(conn, host_.c_str(), user_.c_str(), password_.c_str(), db_.c_str(), port_, nullptr, 0)) {
      mysql_close(conn);
      return nullptr;
    }
    return conn;
  }

  void ensure_schema(MYSQL* conn) {
    const char* ddl =
        "CREATE TABLE IF NOT EXISTS auth_users ("
        "user_id BIGINT NOT NULL PRIMARY KEY,"
        "username VARCHAR(128) NOT NULL UNIQUE,"
        "password_hash VARCHAR(255) NOT NULL,"
        "created_at BIGINT NOT NULL,"
        "last_login_at BIGINT NOT NULL"
        ")";
    mysql_query(conn, ddl);
  }

  std::string escape_sql(const std::string& in) {
    std::string out;
    out.resize(in.size() * 2 + 1);
    MYSQL* tmp = mysql_init(nullptr);
    unsigned long n = mysql_real_escape_string(tmp, out.data(), in.c_str(), static_cast<unsigned long>(in.size()));
    mysql_close(tmp);
    out.resize(n);
    return out;
  }

  std::string host_;
  std::string user_;
  std::string password_;
  std::string db_;
  unsigned int port_ = 3306;
};
#endif

class LeaderboardStore {
 public:
  virtual ~LeaderboardStore() = default;
  virtual void update(const std::vector<MatchStat>& stats, const std::unordered_map<std::string, UserProfileData>& users) = 0;
  virtual std::string to_json(const std::string& type, int limit) = 0;
};

class MemoryLeaderboardStore final : public LeaderboardStore {
 public:
  void update(const std::vector<MatchStat>& stats, const std::unordered_map<std::string, UserProfileData>& users) override {
    for (const auto& stat : stats) {
      const std::string key = stat.external_id.empty() ? stat.username : stat.external_id;
      auto it = users.find(key);
      if (it == users.end()) continue;
      const auto& u = it->second;
      const double win_rate = u.games_played > 0 ? static_cast<double>(u.games_won) / static_cast<double>(u.games_played) : 0.0;
      auto& row = entries_[key];
      row.username = u.username;
      row.gold = u.gold;
      row.win_rate = win_rate;
      row.weekly += stat.winner ? 3 : 1;
    }
  }

  std::string to_json(const std::string& type, int limit) override {
    std::vector<Row> rows;
    rows.reserve(entries_.size());
    for (const auto& [_, entry] : entries_) rows.push_back(entry);
    if (type == "winrate") {
      std::sort(rows.begin(), rows.end(), [](const Row& a, const Row& b) { return a.win_rate > b.win_rate; });
    } else if (type == "weekly") {
      std::sort(rows.begin(), rows.end(), [](const Row& a, const Row& b) { return a.weekly > b.weekly; });
    } else {
      std::sort(rows.begin(), rows.end(), [](const Row& a, const Row& b) { return a.gold > b.gold; });
    }
    if (limit > 0 && static_cast<int>(rows.size()) > limit) rows.resize(limit);

    std::ostringstream out;
    out << "{\"type\":\"" << escape_json(type) << "\",\"entries\":[";
    for (size_t i = 0; i < rows.size(); ++i) {
      if (i) out << ",";
      out << "{\"username\":\"" << escape_json(rows[i].username) << "\",\"gold\":" << rows[i].gold
          << ",\"winRate\":" << rows[i].win_rate << ",\"weeklyScore\":" << rows[i].weekly << "}";
    }
    out << "]}";
    return out.str();
  }

 private:
  struct Row {
    std::string username;
    int64_t gold = 0;
    double win_rate = 0.0;
    int64_t weekly = 0;
  };
  std::unordered_map<std::string, Row> entries_;
};

#ifdef NEBULA_HAVE_HIREDIS
class HiredisLeaderboardStore final : public LeaderboardStore {
 public:
  HiredisLeaderboardStore() : fallback_(std::make_unique<MemoryLeaderboardStore>()) {
    host_ = get_env("REDIS_HOST", "127.0.0.1");
    port_ = get_env_int("REDIS_PORT", 6379);
  }

  void update(const std::vector<MatchStat>& stats, const std::unordered_map<std::string, UserProfileData>& users) override {
    redisContext* c = redisConnect(host_.c_str(), port_);
    if (!c || c->err) {
      if (c) redisFree(c);
      fallback_->update(stats, users);
      return;
    }
    for (const auto& stat : stats) {
      const std::string key = stat.external_id.empty() ? stat.username : stat.external_id;
      auto it = users.find(key);
      if (it == users.end()) continue;
      const auto& user = it->second;
      const double win_rate = user.games_played > 0 ? static_cast<double>(user.games_won) / static_cast<double>(user.games_played) : 0.0;
      redisReply* r1 = static_cast<redisReply*>(redisCommand(c, "ZADD leaderboard:coins %lld %s", static_cast<long long>(user.gold), user.username.c_str()));
      if (r1) freeReplyObject(r1);
      redisReply* r2 = static_cast<redisReply*>(redisCommand(c, "ZADD leaderboard:winrate %f %s", win_rate, user.username.c_str()));
      if (r2) freeReplyObject(r2);
      redisReply* r3 = static_cast<redisReply*>(redisCommand(c, "ZADD leaderboard:weekly %d %s", stat.winner ? 3 : 1, user.username.c_str()));
      if (r3) freeReplyObject(r3);
    }
    redisFree(c);
    fallback_->update(stats, users);
  }

  std::string to_json(const std::string& type, int limit) override {
    return fallback_->to_json(type, limit);
  }

 private:
  std::string host_;
  int port_ = 6379;
  std::unique_ptr<MemoryLeaderboardStore> fallback_;
};
#endif

class PokerServer {
 public:
  PokerServer()
      : rng_(std::random_device{}()),
        user_store_(create_user_store()),
        auth_store_(create_auth_store()),
        leaderboard_store_(create_leaderboard_store()) {
    server_.init_asio();
    server_.clear_access_channels(websocketpp::log::alevel::all);
    server_.set_reuse_addr(true);

    server_.set_open_handler([this](connection_hdl hdl) { on_open(hdl); });
    server_.set_close_handler([this](connection_hdl hdl) { on_close(hdl); });
    server_.set_message_handler([this](connection_hdl hdl, WsServer::message_ptr msg) { on_message(hdl, msg); });
    server_.set_http_handler([this](connection_hdl hdl) { on_http(hdl); });
  }

  void run(uint16_t port) {
    std::cout << "nebula-poker C++ listening on 0.0.0.0:" << port << "\n";
    server_.listen(port);
    server_.start_accept();
    server_.run();
  }

 private:
  std::string make_envelope_bytes(const std::string& event_name, const google::protobuf::Message& message) {
    nebula::poker::Envelope env;
    env.set_event_name(event_name);
    env.set_payload(message.SerializeAsString());
    return env.SerializeAsString();
  }

  void send_envelope_bytes(const std::string& socket_id, const std::string& bytes) {
    auto it = socket_by_id_.find(socket_id);
    if (it == socket_by_id_.end()) return;
    server_.send(it->second, bytes, websocketpp::frame::opcode::binary);
  }

  template <typename T>
  void send_event(const std::string& socket_id, const std::string& event_name, const T& message) {
    send_envelope_bytes(socket_id, make_envelope_bytes(event_name, message));
  }

  void send_text_event(const std::string& socket_id, const std::string& event_name, const std::string& text) {
    nebula::poker::TextMessage msg;
    msg.set_msg(text);
    send_event(socket_id, event_name, msg);
  }

  std::mutex& room_mutex(const std::string& room_id) {
    return room_mutexes_[room_id];
  }

  GameplaySessionData& ensure_gameplay_session(const std::string& gameplay_session_id, int64_t user_id = 0) {
    auto it = gameplay_sessions_.find(gameplay_session_id);
    if (it == gameplay_sessions_.end()) {
      GameplaySessionData session;
      session.gameplay_session_id = gameplay_session_id;
      session.user_id = user_id;
      session.expires_at = now_ms() + kGameplaySessionTtlMs;
      it = gameplay_sessions_.emplace(gameplay_session_id, std::move(session)).first;
    }
    if (user_id > 0) it->second.user_id = user_id;
    it->second.expires_at = now_ms() + kGameplaySessionTtlMs;
    return it->second;
  }

  GameplaySessionData* get_gameplay_session(const std::string& gameplay_session_id) {
    auto it = gameplay_sessions_.find(gameplay_session_id);
    if (it == gameplay_sessions_.end()) return nullptr;
    if (it->second.expires_at < now_ms()) {
      gameplay_sessions_.erase(it);
      return nullptr;
    }
    return &it->second;
  }

  void touch_gameplay_session(GameplaySessionData& session) {
    session.expires_at = now_ms() + kGameplaySessionTtlMs;
  }

  void append_room_event(Room& room, const std::string& envelope_bytes, int seat_idx = -1) {
    room.event_seq += 1;
    room.event_log.push_back(RoomEventEntry{room.event_seq, envelope_bytes, seat_idx, now_ms()});
    while (room.event_log.size() > kRoomEventLogLimit) room.event_log.pop_front();
  }

  void mark_last_seen_for_socket(const std::string& socket_id, int64_t seq) {
    for (auto& [_, session] : sessions_) {
      if (session.socket_id != socket_id) continue;
      session.last_seen_seq = std::max(session.last_seen_seq, seq);
      if (!session.gameplay_session_id.empty()) {
        GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
        gameplay.last_seen_seq = std::max(gameplay.last_seen_seq, seq);
        gameplay.room_id = session.room_id;
        gameplay.seat_idx = session.seat_idx;
      }
      break;
    }
  }

  void emit_room_event(Room& room, const std::string& event_name, const google::protobuf::Message& message) {
    const std::string bytes = make_envelope_bytes(event_name, message);
    append_room_event(room, bytes);
    const int64_t seq = room.event_seq;
    for (const auto& socket_id : room.socket_ids) {
      send_envelope_bytes(socket_id, bytes);
      mark_last_seen_for_socket(socket_id, seq);
    }
  }

  void emit_seat_event(Room& room, int seat_idx, const std::string& event_name, const google::protobuf::Message& message) {
    if (seat_idx < 0 || seat_idx >= kSeats) return;
    const Seat& seat = room.seats[seat_idx];
    if (seat.type == Seat::Type::Empty) return;
    const std::string bytes = make_envelope_bytes(event_name, message);
    append_room_event(room, bytes, seat_idx);
    if (!seat.socket_id.empty()) send_envelope_bytes(seat.socket_id, bytes);
    if (!seat.gameplay_session_id.empty()) {
      GameplaySessionData& gameplay = ensure_gameplay_session(seat.gameplay_session_id, seat.user_id);
      gameplay.last_seen_seq = std::max(gameplay.last_seen_seq, room.event_seq);
      gameplay.room_id = room.room_id;
      gameplay.seat_idx = seat_idx;
      gameplay.reconnect_token = seat.reconnect_token;
      gameplay.ai_managed = seat.ai_managed;
      gameplay.ai_takeover_at = seat.ai_takeover_at;
    }
  }

  void replay_missed_events(Session& session, Room& room) {
    int64_t last_seen = session.last_seen_seq;
    if (!session.gameplay_session_id.empty()) {
      if (GameplaySessionData* gameplay = get_gameplay_session(session.gameplay_session_id)) {
        last_seen = std::max(last_seen, gameplay->last_seen_seq);
      }
    }
    for (const auto& entry : room.event_log) {
      if (entry.seq <= last_seen) continue;
      if (entry.seat_idx >= 0 && entry.seat_idx != session.seat_idx) continue;
      send_envelope_bytes(session.socket_id, entry.envelope_bytes);
      session.last_seen_seq = std::max(session.last_seen_seq, entry.seq);
    }
    if (!session.gameplay_session_id.empty()) {
      GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
      gameplay.last_seen_seq = std::max(gameplay.last_seen_seq, session.last_seen_seq);
      gameplay.room_id = session.room_id;
      gameplay.seat_idx = session.seat_idx;
    }
  }

  bool can_reclaim_started_seat(const Seat& seat, const Session& session, const std::string& reconnect_token) {
    if (seat.type != Seat::Type::Player) return false;
    if (session.user_id > 0 && seat.user_id > 0) {
      return seat.user_id == session.user_id;
    }
    if (!session.gameplay_session_id.empty() && seat.gameplay_session_id == session.gameplay_session_id) return true;
    if (!reconnect_token.empty() && seat.reconnect_token == reconnect_token) return true;
    return false;
  }

  void send_full_state_sync(Session& session, Room& room, bool include_private_hand) {
    send_event(session.socket_id, "room_state", build_room_state(room, session.socket_id));
    emit_you_state(session, room);

    nebula::poker::ActivitySync sync;
    for (const auto& item : room.activity_log) sync.add_items(item);
    send_event(session.socket_id, "activity_sync", sync);

    nebula::poker::GameState game_state = build_game_state(room);
    send_event(session.socket_id, "game_state", game_state);

    if (session.seat_idx >= 0 && session.seat_idx < kSeats) {
      nebula::poker::SeatSession seat_session;
      seat_session.set_roomid(room.room_id);
      seat_session.set_reconnecttoken(room.seats[session.seat_idx].reconnect_token);
      seat_session.set_sessionid(session.gameplay_session_id);
      seat_session.set_lastseenseq(session.last_seen_seq);
      send_event(session.socket_id, "seat_session", seat_session);
    }

    if (!include_private_hand || session.seat_idx < 0 || session.seat_idx >= kSeats) return;
    PlayerState* p = get_player(room, session.seat_idx);
    if (!p || p->hand.size() < 2) return;
    nebula::poker::PrivateHand hand;
    hand.set_seatidx(session.seat_idx);
    for (const auto& c : p->hand) fill_card(*hand.add_hand(), c);
    send_event(session.socket_id, "private_hand", hand);
  }

  std::string ensure_gameplay_session_id(Session& session) {
    if (session.gameplay_session_id.empty()) session.gameplay_session_id = next_token(18);
    GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
    gameplay.room_id = session.room_id;
    gameplay.seat_idx = session.seat_idx;
    gameplay.reconnect_token = session.client_id;
    touch_gameplay_session(gameplay);
    return session.gameplay_session_id;
  }

  void cancel_ai_takeover(Room& room, int seat_idx) {
    if (seat_idx < 0 || seat_idx >= kSeats) return;
    Seat& seat = room.seats[seat_idx];
    if (room.ai_takeover_timers[seat_idx]) room.ai_takeover_timers[seat_idx]->cancel();
    seat.ai_managed = false;
    seat.ai_takeover_at = 0;
    if (!seat.gameplay_session_id.empty()) {
      GameplaySessionData& gameplay = ensure_gameplay_session(seat.gameplay_session_id, seat.user_id);
      gameplay.ai_managed = false;
      gameplay.ai_takeover_at = 0;
      gameplay.room_id = room.room_id;
      gameplay.seat_idx = seat_idx;
      gameplay.reconnect_token = seat.reconnect_token;
    }
  }

  void schedule_ai_takeover(Room& room, int seat_idx) {
    if (seat_idx < 0 || seat_idx >= kSeats) return;
    Seat& seat = room.seats[seat_idx];
    if (seat.type != Seat::Type::Player) return;
    room.ai_takeover_timers[seat_idx] =
        std::make_unique<asio::steady_timer>(server_.get_io_service(), std::chrono::milliseconds(kAiTakeoverDelayMs));
    room.ai_takeover_timers[seat_idx]->async_wait([this, &room, seat_idx](const asio::error_code& ec) {
      if (ec) return;
      if (seat_idx < 0 || seat_idx >= kSeats) return;
      Seat& current_seat = room.seats[seat_idx];
      if (current_seat.type != Seat::Type::Player) return;
      if (!current_seat.socket_id.empty() && is_online(current_seat.socket_id)) return;
      current_seat.ai_managed = true;
      current_seat.ai_takeover_at = now_ms();
      if (!current_seat.gameplay_session_id.empty()) {
        GameplaySessionData& gameplay = ensure_gameplay_session(current_seat.gameplay_session_id, current_seat.user_id);
        gameplay.ai_managed = true;
        gameplay.ai_takeover_at = current_seat.ai_takeover_at;
        gameplay.room_id = room.room_id;
        gameplay.seat_idx = seat_idx;
        gameplay.reconnect_token = current_seat.reconnect_token;
      }
      broadcast_activity(room, current_seat.name + " disconnected for 30s. AI takeover enabled.");
      broadcast_room(room);
      broadcast_game(room);
      request_turn(room);
    });
  }

  void broadcast_room(Room& room) {
    for (const auto& socket_id : room.socket_ids) {
      nebula::poker::RoomState state = build_room_state(room, socket_id);
      send_event(socket_id, "room_state", state);
      mark_last_seen_for_socket(socket_id, room.event_seq);
    }
  }

  void broadcast_game(Room& room) {
    nebula::poker::GameState state = build_game_state(room);
    emit_room_event(room, "game_state", state);
  }

  void broadcast_activity(Room& room, const std::string& msg) {
    room.activity_log.push_back(msg);
    if (room.activity_log.size() > 250) room.activity_log.erase(room.activity_log.begin(), room.activity_log.begin() + (room.activity_log.size() - 250));
    nebula::poker::TextMessage out;
    out.set_msg(msg);
    emit_room_event(room, "activity", out);
  }

  void broadcast_player_action(Room& room, int seat_idx, const std::string& text) {
    nebula::poker::PlayerAction msg;
    msg.set_seatidx(seat_idx);
    msg.set_text(text);
    emit_room_event(room, "player_action", msg);
  }

  std::string next_token(int bytes = 16) {
    static constexpr char kHex[] = "0123456789abcdef";
    std::uniform_int_distribution<int> dist(0, 15);
    std::string out;
    out.reserve(static_cast<std::size_t>(bytes) * 2U);
    for (int i = 0; i < bytes * 2; ++i) out.push_back(kHex[static_cast<std::size_t>(dist(rng_))]);
    return out;
  }

  void send_json(connection_hdl hdl, websocketpp::http::status_code::value status, const std::string& body) {
    auto con = server_.get_con_from_hdl(hdl);
    con->set_status(status);
    con->replace_header("Content-Type", "application/json; charset=utf-8");
    con->set_body(body);
  }

  std::string user_profile_json(const UserProfileData& profile) {
    std::ostringstream out;
    const int mmr = user_mmr_.count(profile.user_id) ? user_mmr_[profile.user_id] : 1000;
    const std::string login_username = profile.login_username.empty() ? profile.external_id : profile.login_username;
    const std::string display_name = profile.username.empty() ? login_username : profile.username;
    out << "{"
        << "\"userId\":" << profile.user_id << ","
        << "\"externalId\":\"" << escape_json(profile.external_id) << "\","
        << "\"loginUsername\":\"" << escape_json(login_username) << "\","
        << "\"displayName\":\"" << escape_json(display_name) << "\","
        << "\"username\":\"" << escape_json(display_name) << "\","
        << "\"avatar\":\"" << escape_json(profile.avatar) << "\","
        << "\"gold\":" << profile.gold << ","
        << "\"beanBalance\":" << profile.gold << ","
        << "\"mmrScore\":" << mmr << ","
        << "\"gamesPlayed\":" << profile.games_played << ","
        << "\"gamesWon\":" << profile.games_won
        << "}";
    return out.str();
  }

  std::string profile_cache_key(const UserProfileData& profile) const {
    if (!profile.login_username.empty()) return profile.login_username;
    if (!profile.external_id.empty()) return profile.external_id;
    return profile.username;
  }

  void cache_profile(const UserProfileData& profile) {
    cached_users_[profile_cache_key(profile)] = profile;
  }

  std::string room_summary_json(const Room& room) {
    int players = 0;
    for (const auto& seat : room.seats) {
      if (seat.type != Seat::Type::Empty) players += 1;
    }
    std::ostringstream out;
    out << "{"
        << "\"roomCode\":\"" << escape_json(room.room_code.empty() ? room.room_id : room.room_code) << "\","
        << "\"status\":\"" << escape_json(room.status) << "\","
        << "\"roomType\":\"" << escape_json(room.room_type) << "\","
        << "\"visibility\":\"" << escape_json(room.visibility) << "\","
        << "\"playerCount\":" << players << ","
        << "\"maxPlayers\":" << room.max_players << ","
        << "\"ownerUserId\":" << room.owner_user_id
        << "}";
    return out.str();
  }

  int64_t current_day_bucket() const {
    return now_ms() / (1000LL * 60LL * 60LL * 24LL);
  }

  int bean_mmr(int64_t user_id) {
    auto it = user_mmr_.find(user_id);
    if (it == user_mmr_.end()) {
      it = user_mmr_.emplace(user_id, 1000).first;
    }
    return it->second;
  }

  std::vector<std::string>& user_inventory(int64_t user_id) {
    auto it = user_inventory_.find(user_id);
    if (it == user_inventory_.end()) {
      it = user_inventory_.emplace(user_id, std::vector<std::string>{
        "rose-table",
        "starlight-frame",
        "soft-heart-emote"
      }).first;
    }
    return it->second;
  }

  std::string bean_tier_for_balance(int64_t beans) const {
    if (beans < 5000) return "novice";
    if (beans < 20000) return "advanced";
    return "expert";
  }

  int bean_entry_fee_for_tier(const std::string& tier) const {
    if (tier == "advanced") return 800;
    if (tier == "expert") return 3000;
    return 200;
  }

  int bean_match_threshold_for_tier(const std::string& tier) const {
    return tier == "expert" ? 6 : 6;
  }

  std::string bean_profile_json(const UserProfileData& profile) {
    std::ostringstream out;
    out << "{"
        << "\"beanBalance\":" << profile.gold << ","
        << "\"mmrScore\":" << bean_mmr(profile.user_id) << ","
        << "\"tier\":\"" << escape_json(bean_tier_for_balance(profile.gold)) << "\","
        << "\"dailyClaimAvailable\":" << (daily_claim_day_[profile.user_id] == current_day_bucket() ? "false" : "true") << ","
        << "\"adRewardCount\":" << ad_reward_count_[profile.user_id]
        << "}";
    return out.str();
  }

  std::string inventory_json(int64_t user_id) {
    std::vector<std::string>& items = user_inventory(user_id);
    std::ostringstream out;
    out << "{\"ok\":true,\"items\":[";
    for (size_t i = 0; i < items.size(); ++i) {
      if (i) out << ",";
      out << "{\"itemId\":\"" << escape_json(items[i]) << "\",\"category\":\"cosmetic\"}";
    }
    out << "],\"equippedTable\":\"" << escape_json(equipped_table_theme_[user_id].empty() ? "rose-table" : equipped_table_theme_[user_id]) << "\"}";
    return out.str();
  }

  void ensure_tournaments_seeded() {
    if (!tournaments_.empty()) return;
    const int64_t now = now_ms();
    tournaments_.push_back({"daily-rose-cup", "Daily Rose Cup", "signup", now - 30 * 60 * 1000LL, now + 60 * 60 * 1000LL, 2500, "rose-frame", 27, {}});
    tournaments_.push_back({"night-heart-open", "Night Heart Open", "scheduled", now + 2 * 60 * 60 * 1000LL, now + 4 * 60 * 60 * 1000LL, 4000, "moon-table", 54, {}});
  }

  std::string tournaments_json(int64_t user_id) {
    ensure_tournaments_seeded();
    std::ostringstream out;
    out << "{\"ok\":true,\"items\":[";
    for (size_t i = 0; i < tournaments_.size(); ++i) {
      const auto& item = tournaments_[i];
      if (i) out << ",";
      out << "{"
          << "\"id\":\"" << escape_json(item.id) << "\","
          << "\"title\":\"" << escape_json(item.title) << "\","
          << "\"status\":\"" << escape_json(item.status) << "\","
          << "\"signupOpensAt\":" << item.signup_opens_at << ","
          << "\"startsAt\":" << item.starts_at << ","
          << "\"rewardBeans\":" << item.reward_beans << ","
          << "\"rewardSkin\":\"" << escape_json(item.reward_skin) << "\","
          << "\"registeredPlayers\":" << item.registered_users.size() << ","
          << "\"maxPlayers\":" << item.max_players << ","
          << "\"registered\":" << (item.registered_users.count(user_id) ? "true" : "false")
          << "}";
    }
    out << "]}";
    return out.str();
  }

  std::string tournaments_items_json(int64_t user_id) {
    const std::string raw = tournaments_json(user_id);
    const std::string prefix = "{\"ok\":true,\"items\":";
    if (raw.rfind(prefix, 0) == 0 && !raw.empty() && raw.back() == '}') {
      return raw.substr(prefix.size(), raw.size() - prefix.size() - 1);
    }
    return "[]";
  }

  std::string home_overview_json(const UserProfileData& profile) {
    ensure_tournaments_seeded();
    std::ostringstream out;
    out << "{"
        << "\"ok\":true,"
        << "\"profile\":" << user_profile_json(profile) << ","
        << "\"beanProfile\":" << bean_profile_json(profile) << ","
        << "\"dailyTasks\":["
        << "{\"id\":\"daily-login\",\"title\":\"Daily Login\",\"rewardBeans\":600,\"status\":\""
        << (daily_claim_day_[profile.user_id] == current_day_bucket() ? "claimed" : "available") << "\"},"
        << "{\"id\":\"watch-ad\",\"title\":\"Watch Ad For Beans\",\"rewardBeans\":400,\"status\":\"available\"}"
        << "],"
        << "\"tournaments\":" << tournaments_items_json(profile.user_id) << ","
        << "\"inventoryPreview\":" << inventory_json(profile.user_id)
        << "}";
    return out.str();
  }

  std::optional<AuthSessionData> find_http_session(const std::string& cookie_header) {
    const auto cookies = parse_cookie_header(cookie_header);
    auto it = cookies.find(kSessionCookieName);
    if (it == cookies.end() || it->second.empty()) return std::nullopt;
    auto sit = auth_sessions_.find(it->second);
    if (sit == auth_sessions_.end()) return std::nullopt;
    if (sit->second.expires_at < now_ms()) {
      auth_sessions_.erase(sit);
      return std::nullopt;
    }
    return sit->second;
  }

  std::optional<UserProfileData> get_profile_by_user_id(int64_t user_id) {
    const auto auth = auth_store_->find_by_user_id(user_id);
    if (!auth.has_value()) return std::nullopt;
    auto cached = cached_users_.find(auth->username);
    if (cached != cached_users_.end()) return cached->second;
    UserProfileData profile = user_store_->load_or_create(auth->username, "");
    profile.login_username = auth->username;
    if (profile.username.empty()) profile.username = auth->username;
    cache_profile(profile);
    return profile;
  }

  std::string create_session_cookie(int64_t user_id, const std::string& username) {
    const std::string session_id = next_token(24);
    auth_sessions_[session_id] = AuthSessionData{session_id, user_id, username, now_ms() + kSessionTtlMs};
    return session_id;
  }

  void bind_http_session_to_socket(Session& session, const std::string& cookie_header) {
    const auto auth_session = find_http_session(cookie_header);
    if (!auth_session.has_value()) return;
    const auto profile = get_profile_by_user_id(auth_session->user_id);
    if (!profile.has_value()) return;
    session.session_id = auth_session->session_id;
    session.user_id = auth_session->user_id;
    session.authenticated = true;
    session.name = auth_session->username;
    session.profile = *profile;
  }

  void send_auth_state(const std::string& socket_id, const Session& session) {
    nebula::poker::AuthState auth;
    auth.set_authenticated(session.authenticated);
    if (session.authenticated) {
      auto* profile = auth.mutable_profile();
      profile->set_userid(session.profile.user_id);
      profile->set_externalid(session.profile.external_id);
      profile->set_username(session.profile.username.empty() ? session.profile.login_username : session.profile.username);
      profile->set_avatar(session.profile.avatar);
      profile->set_gold(session.profile.gold);
      profile->set_gamesplayed(session.profile.games_played);
      profile->set_gameswon(session.profile.games_won);
    }
    send_event(socket_id, "auth_state", auth);
  }

  bool serve_static_file(connection_hdl hdl, const std::string& raw_uri) {
    const std::string uri = raw_uri.substr(0, raw_uri.find('?'));
    std::string path;
    if (uri == "/" || uri == "/index.html") {
      path = "index.html";
    } else if (uri == "/proto-socket.js") {
      path = "proto-socket.js";
    } else if (uri == "/proto/poker.proto") {
      path = "backend-cpp/proto/poker.proto";
    } else if (uri.rfind("/assets/", 0) == 0) {
      path = uri.substr(1);
    }
    if (path.empty()) return false;
    // Paths are relative to repo root (e.g. DEZHOU2/index.html). If the binary is started from
    // backend-cpp/build, cwd may be too deep — walk up parents (and optional NEBULA_REPO_ROOT).
    std::filesystem::path resolved;
    bool found = false;
    const std::string repo_root = get_env("NEBULA_REPO_ROOT", "");
    if (!repo_root.empty()) {
      std::error_code ec;
      const auto candidate = std::filesystem::path(repo_root) / path;
      const auto canon = std::filesystem::weakly_canonical(candidate, ec);
      if (!ec && std::filesystem::exists(canon)) {
        resolved = canon;
        found = true;
      }
    }
    if (!found) {
      for (std::filesystem::path base = std::filesystem::current_path();;) {
        std::error_code ec;
        const auto candidate = base / path;
        const auto canon = std::filesystem::weakly_canonical(candidate, ec);
        if (!ec && std::filesystem::exists(canon)) {
          resolved = canon;
          found = true;
          break;
        }
        if (base == base.parent_path()) break;
        base = base.parent_path();
      }
    }
    if (!found) return false;
    const std::string body = read_file(resolved.string());
    if (body.empty()) return false;
    auto con = server_.get_con_from_hdl(hdl);
    con->set_status(websocketpp::http::status_code::ok);
    con->replace_header("Content-Type", mime_for_path(path));
    con->set_body(body);
    return true;
  }

  std::string build_session_cookie_header(const std::string& session_id, bool clear = false) {
    std::ostringstream out;
    out << kSessionCookieName << "=" << (clear ? "" : session_id)
        << "; Path=/; HttpOnly; SameSite=Lax";
    if (clear) out << "; Max-Age=0";
    return out.str();
  }

  Room& ensure_room(const std::string& room_id) {
    auto it = rooms_.find(room_id);
    if (it == rooms_.end()) {
      Room room;
      room.room_id = room_id;
      room.room_code = room_id;
      it = rooms_.emplace(room_id, std::move(room)).first;
    }
    return it->second;
  }

  Room& create_room_for_user(const UserProfileData& profile, const std::string& visibility, int total_hands, int initial_chips,
                             const std::string& room_type = "friend") {
    std::string code;
    do {
      code = next_room_code();
    } while (rooms_.count(code) > 0);
    Room& room = ensure_room(code);
    room.owner_user_id = profile.user_id;
    room.room_code = code;
    room.room_type = room_type.empty() ? "friend" : room_type;
    room.visibility = visibility.empty() ? "private" : visibility;
    room.status = room.room_type == "friend" ? "waiting" : "matching";
    room.total_hands = std::clamp(total_hands, 1, 50);
    room.initial_chips = std::max(1000, initial_chips);
    room.small_blind = 50;
    room.big_blind = 100;
    room.last_active_at = now_ms();
    return room;
  }

  std::string next_room_code() {
    static constexpr char kAlphabet[] = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    std::uniform_int_distribution<int> dist(0, static_cast<int>(sizeof(kAlphabet) - 2));
    std::string code;
    code.reserve(6);
    for (int i = 0; i < 6; ++i) code.push_back(kAlphabet[static_cast<std::size_t>(dist(rng_))]);
    return code;
  }

  std::optional<int> first_open_seat(const Room& room) const {
    for (int i = 0; i < kSeats; ++i) {
      if (room.seats[static_cast<std::size_t>(i)].type == Seat::Type::Empty) return i;
    }
    return std::nullopt;
  }

  void maybe_matchmake() {
    while (matchmaking_queue_.size() >= static_cast<std::size_t>(kMatchmakingThreshold)) {
      std::vector<int64_t> matched_users;
      matched_users.reserve(kMatchmakingThreshold);
      for (int i = 0; i < kMatchmakingThreshold; ++i) {
        matched_users.push_back(matchmaking_queue_.front());
        matchmaking_queue_.erase(matchmaking_queue_.begin());
      }

      auto profile = get_profile_by_user_id(matched_users.front());
      if (!profile.has_value()) continue;
      Room& room = create_room_for_user(*profile, "private", 5, 1000, "bean_match");
      for (int64_t user_id : matched_users) {
        pending_match_rooms_[user_id] = room.room_code;
        const auto account = auth_store_->find_by_user_id(user_id);
        if (!account.has_value()) continue;
        for (auto& [_, session] : sessions_) {
          if (!session.authenticated || session.user_id != user_id) continue;
          nebula::poker::MatchmakingStatus status;
          status.set_state("matched");
          status.set_roomcode(room.room_code);
          status.set_queuedplayers(kMatchmakingThreshold);
          status.set_threshold(kMatchmakingThreshold);
          send_event(session.socket_id, "matchmaking_status", status);
          nebula::poker::MatchFound found;
          found.set_roomcode(room.room_code);
          found.set_queuedplayers(kMatchmakingThreshold);
          send_event(session.socket_id, "match_found", found);
        }
      }
    }
  }

  void remove_from_bean_queues(int64_t user_id) {
    for (auto& [_, queue] : bean_matchmaking_queues_) {
      queue.erase(std::remove_if(queue.begin(), queue.end(), [&](const BeanQueueEntry& item) {
        return item.user_id == user_id;
      }), queue.end());
    }
  }

  const BeanQueueEntry* find_bean_queue_entry(int64_t user_id) const {
    for (const auto& [_, queue] : bean_matchmaking_queues_) {
      for (const auto& item : queue) {
        if (item.user_id == user_id) return &item;
      }
    }
    return nullptr;
  }

  int current_mmr_range(int64_t queued_at) const {
    const int64_t waited_ms = std::max<int64_t>(0, now_ms() - queued_at);
    if (waited_ms < 5000) return 120;
    if (waited_ms < 15000) return 260;
    return 1200;
  }

  void maybe_matchmake_beans(const std::string& tier) {
    auto it = bean_matchmaking_queues_.find(tier);
    if (it == bean_matchmaking_queues_.end()) return;
    auto& queue = it->second;
    const int threshold = bean_match_threshold_for_tier(tier);

    bool matched_any = true;
    while (matched_any && static_cast<int>(queue.size()) >= threshold) {
      matched_any = false;
      std::sort(queue.begin(), queue.end(), [](const BeanQueueEntry& a, const BeanQueueEntry& b) {
        return a.queued_at < b.queued_at;
      });
      for (std::size_t anchor = 0; anchor < queue.size(); ++anchor) {
        const BeanQueueEntry base = queue[anchor];
        const int mmr_range = current_mmr_range(base.queued_at);
        std::vector<std::size_t> picked = {anchor};
        for (std::size_t i = 0; i < queue.size() && static_cast<int>(picked.size()) < threshold; ++i) {
          if (i == anchor) continue;
          if (std::abs(queue[i].mmr - base.mmr) <= mmr_range) picked.push_back(i);
        }
        if (static_cast<int>(picked.size()) < threshold) continue;

        std::vector<int64_t> matched_users;
        matched_users.reserve(static_cast<std::size_t>(threshold));
        std::sort(picked.begin(), picked.end(), std::greater<std::size_t>());
        for (std::size_t idx : picked) {
          matched_users.push_back(queue[idx].user_id);
          queue.erase(queue.begin() + static_cast<std::ptrdiff_t>(idx));
        }

        auto profile = get_profile_by_user_id(matched_users.front());
        if (!profile.has_value()) break;
        Room& room = create_room_for_user(*profile, "private", 5, 1000, "bean_match");
        room.status = "matching";
        room.visibility = "matchmaking";
        for (int64_t user_id : matched_users) {
          pending_match_rooms_[user_id] = room.room_code;
          for (auto& [_, session] : sessions_) {
            if (!session.authenticated || session.user_id != user_id) continue;
            nebula::poker::MatchmakingStatus status;
            status.set_state("matched");
            status.set_roomcode(room.room_code);
            status.set_queuedplayers(threshold);
            status.set_threshold(threshold);
            send_event(session.socket_id, "matchmaking_status", status);
            nebula::poker::MatchFound found;
            found.set_roomcode(room.room_code);
            found.set_queuedplayers(threshold);
            send_event(session.socket_id, "match_found", found);
          }
        }
        matched_any = true;
        break;
      }
    }
  }

  void on_http(connection_hdl hdl) {
    auto con = server_.get_con_from_hdl(hdl);
    const std::string uri = con->get_request().get_uri();
    const std::string clean_uri = uri.substr(0, uri.find('?'));
    const std::string method = con->get_request().get_method();
    const std::string body = con->get_request_body();
    const std::string cookie_header = con->get_request_header("Cookie");
    const auto form = parse_form_body(body);
    const auto auth_session = find_http_session(cookie_header);
    if (uri == "/healthz") {
      con->set_status(websocketpp::http::status_code::ok);
      con->replace_header("Content-Type", "text/plain; charset=utf-8");
      con->set_body("ok");
      return;
    }
    if (uri == "/readyz") {
      con->set_status(websocketpp::http::status_code::ok);
      con->replace_header("Content-Type", "application/json; charset=utf-8");
      con->set_body("{\"ok\":true}");
      return;
    }
    if (uri.rfind("/api/leaderboard", 0) == 0) {
      std::string type = "coins";
      auto pos = uri.find("type=");
      if (pos != std::string::npos) type = uri.substr(pos + 5);
      std::string body = leaderboard_store_->to_json(type, 20);
      con->set_status(websocketpp::http::status_code::ok);
      con->replace_header("Content-Type", "application/json; charset=utf-8");
      con->set_body(body);
      return;
    }
    if (clean_uri == "/api/auth/register" && method == "POST") {
      const std::string username = normalize_username(
          form.count("loginUsername") ? form.at("loginUsername") : (form.count("username") ? form.at("username") : ""));
      const std::string display_name = normalize_display_name(
          form.count("displayName") ? form.at("displayName") : username);
      const std::string password = form.count("password") ? form.at("password") : "";
      if (!is_valid_username(username) || !is_valid_display_name(display_name) || password.size() < 6) {
        send_json(hdl, websocketpp::http::status_code::bad_request,
                  "{\"ok\":false,\"message\":\"Use a 3-24 char login username, a 1-48 char display name, and a 6+ char password.\"}");
        return;
      }
      if (auth_store_->find_by_username(username).has_value()) {
        send_json(hdl, websocketpp::http::status_code::conflict, "{\"ok\":false,\"message\":\"Login username already exists.\"}");
        return;
      }
      UserProfileData profile = user_store_->load_or_create(username, display_name);
      profile.login_username = username;
      cache_profile(profile);
      std::string error;
      const auto account = auth_store_->register_account(profile.user_id, username, hash_password_record(password, next_token(12)), error);
      if (!account.has_value()) {
        send_json(hdl, websocketpp::http::status_code::internal_server_error,
                  "{\"ok\":false,\"message\":\"" + escape_json(error.empty() ? "Registration failed." : error) + "\"}");
        return;
      }
      auth_store_->update_last_login(profile.user_id, now_ms());
      const std::string session_id = create_session_cookie(profile.user_id, username);
      con->replace_header("Set-Cookie", build_session_cookie_header(session_id));
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"user\":" + user_profile_json(profile) + "}");
      return;
    }
    if (clean_uri == "/api/auth/login" && method == "POST") {
      const std::string username = normalize_username(
          form.count("loginUsername") ? form.at("loginUsername") : (form.count("username") ? form.at("username") : ""));
      const std::string password = form.count("password") ? form.at("password") : "";
      const auto account = auth_store_->find_by_username(username);
      if (!account.has_value() || !verify_password_record(password, account->password_hash)) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Invalid username or password.\"}");
        return;
      }
      auth_store_->update_last_login(account->user_id, now_ms());
      const auto profile = get_profile_by_user_id(account->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::internal_server_error, "{\"ok\":false,\"message\":\"Profile load failed.\"}");
        return;
      }
      const std::string session_id = create_session_cookie(account->user_id, username);
      con->replace_header("Set-Cookie", build_session_cookie_header(session_id));
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"user\":" + user_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/auth/logout" && method == "POST") {
      if (auth_session.has_value()) auth_sessions_.erase(auth_session->session_id);
      con->replace_header("Set-Cookie", build_session_cookie_header("", true));
      send_json(hdl, websocketpp::http::status_code::ok, "{\"ok\":true}");
      return;
    }
    if (clean_uri == "/api/auth/me" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"user\":" + user_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/home/overview" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok, home_overview_json(*profile));
      return;
    }
    if (clean_uri == "/api/profile/me" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"profile\":" + user_profile_json(*profile) + ",\"favoriteMode\":\"friend-room\"}");
      return;
    }
    if (clean_uri == "/api/beans/profile" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/beans/claim-daily" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int64_t day = current_day_bucket();
      if (daily_claim_day_[profile->user_id] == day) {
        send_json(hdl, websocketpp::http::status_code::conflict, "{\"ok\":false,\"message\":\"Daily beans already claimed.\"}");
        return;
      }
      daily_claim_day_[profile->user_id] = day;
      profile->gold += 600;
      cache_profile(*profile);
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"rewardBeans\":600,\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/beans/ad-reward" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int64_t day = current_day_bucket();
      if (ad_reward_day_[profile->user_id] != day) {
        ad_reward_day_[profile->user_id] = day;
        ad_reward_count_[profile->user_id] = 0;
      }
      if (ad_reward_count_[profile->user_id] >= 3) {
        send_json(hdl, websocketpp::http::status_code::conflict, "{\"ok\":false,\"message\":\"Ad rewards capped for today.\"}");
        return;
      }
      ad_reward_count_[profile->user_id] += 1;
      profile->gold += 400;
      cache_profile(*profile);
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"rewardBeans\":400,\"remaining\":" + std::to_string(3 - ad_reward_count_[profile->user_id]) +
                ",\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/inventory" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok, inventory_json(auth_session->user_id));
      return;
    }
    if (clean_uri == "/api/inventory/equip" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string item_id = form.count("itemId") ? form.at("itemId") : "";
      auto& items = user_inventory(auth_session->user_id);
      if (std::find(items.begin(), items.end(), item_id) == items.end()) {
        send_json(hdl, websocketpp::http::status_code::not_found, "{\"ok\":false,\"message\":\"Item not owned.\"}");
        return;
      }
      equipped_table_theme_[auth_session->user_id] = item_id;
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"equippedTable\":\"" + escape_json(item_id) + "\"}");
      return;
    }
    if (clean_uri == "/api/tournaments" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok, tournaments_json(auth_session->user_id));
      return;
    }
    if (clean_uri.rfind("/api/tournaments/", 0) == 0 && clean_uri.size() > 24 &&
        clean_uri.substr(clean_uri.size() - 9) == "/register" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      ensure_tournaments_seeded();
      const std::string tournament_id = clean_uri.substr(std::string("/api/tournaments/").size(),
                                                         clean_uri.size() - std::string("/api/tournaments/").size() - std::string("/register").size());
      auto it = std::find_if(tournaments_.begin(), tournaments_.end(), [&](const TournamentInfo& item) {
        return item.id == tournament_id;
      });
      if (it == tournaments_.end()) {
        send_json(hdl, websocketpp::http::status_code::not_found, "{\"ok\":false,\"message\":\"Tournament not found.\"}");
        return;
      }
      if (static_cast<int>(it->registered_users.size()) >= it->max_players) {
        send_json(hdl, websocketpp::http::status_code::conflict, "{\"ok\":false,\"message\":\"Tournament is full.\"}");
        return;
      }
      it->registered_users.insert(auth_session->user_id);
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"registered\":true,\"tournamentId\":\"" + escape_json(it->id) + "\"}");
      return;
    }
    if (clean_uri == "/api/friend-rooms/create" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int total_hands = form.count("totalHands") ? std::max(1, std::atoi(form.at("totalHands").c_str())) : 5;
      const int initial_chips = form.count("initialChips") ? std::max(1000, std::atoi(form.at("initialChips").c_str())) : 1000;
      Room& room = create_room_for_user(*profile, "private", total_hands, initial_chips, "friend");
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room.room_code) + "\",\"room\":" + room_summary_json(room) + "}");
      return;
    }
    if (clean_uri == "/api/friend-rooms/join" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string room_code = to_upper_room_code(form.count("roomCode") ? form.at("roomCode") : "");
      Room* room = get_room(room_code);
      if (!room || room->room_type != "friend") {
        send_json(hdl, websocketpp::http::status_code::not_found, "{\"ok\":false,\"message\":\"Friend room not found.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room->room_code) + "\",\"room\":" + room_summary_json(*room) + "}");
      return;
    }
    if (clean_uri.rfind("/api/friend-rooms/", 0) == 0 && clean_uri.size() > 22 &&
        clean_uri.substr(clean_uri.size() - 8) == "/history" && method == "GET") {
      const std::string room_code = clean_uri.substr(std::string("/api/friend-rooms/").size(),
                                                     clean_uri.size() - std::string("/api/friend-rooms/").size() - std::string("/history").size());
      Room* room = get_room(to_upper_room_code(room_code));
      if (!room || room->room_type != "friend") {
        send_json(hdl, websocketpp::http::status_code::not_found, "{\"ok\":false,\"message\":\"Friend room not found.\"}");
        return;
      }
      std::ostringstream out;
      out << "{\"ok\":true,\"roomCode\":\"" << escape_json(room->room_code) << "\",\"hands\":[";
      for (size_t i = 0; i < room->hand_history.size(); ++i) {
        if (i) out << ",";
        const auto& hand = room->hand_history[i];
        out << "{\"handNum\":" << hand.hand_num << ",\"desc\":\"" << escape_json(hand.desc) << "\",\"winners\":[";
        for (size_t j = 0; j < hand.winners.size(); ++j) {
          if (j) out << ",";
          out << "{\"seatIdx\":" << hand.winners[j].seat_idx << ",\"name\":\"" << escape_json(hand.winners[j].name) << "\"}";
        }
        out << "]}";
      }
      out << "]}";
      send_json(hdl, websocketpp::http::status_code::ok, out.str());
      return;
    }
    if (clean_uri == "/api/rooms/create" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int total_hands = form.count("totalHands") ? std::max(1, std::atoi(form.at("totalHands").c_str())) : 5;
      const int initial_chips = form.count("initialChips") ? std::max(1000, std::atoi(form.at("initialChips").c_str())) : 1000;
      const std::string visibility = form.count("visibility") ? form.at("visibility") : "private";
      Room& room = create_room_for_user(*profile, visibility, total_hands, initial_chips, "friend");
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room.room_code) + "\",\"room\":" + room_summary_json(room) + "}");
      return;
    }
    if (clean_uri == "/api/rooms/join" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string room_code = to_upper_room_code(form.count("roomCode") ? form.at("roomCode") : "");
      Room* room = get_room(room_code);
      if (!room) {
        send_json(hdl, websocketpp::http::status_code::not_found, "{\"ok\":false,\"message\":\"Room not found.\"}");
        return;
      }
      send_json(hdl, websocketpp::http::status_code::ok,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room->room_code) + "\",\"room\":" + room_summary_json(*room) + "}");
      return;
    }
    if (clean_uri == "/api/matchmaking/queue-bean" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const std::string tier = form.count("tier") ? form.at("tier") : bean_tier_for_balance(profile->gold);
      pending_match_rooms_.erase(auth_session->user_id);
      remove_from_bean_queues(auth_session->user_id);
      bean_matchmaking_queues_[tier].push_back({auth_session->user_id, profile->gold, bean_mmr(auth_session->user_id), now_ms()});
      maybe_matchmake_beans(tier);
      std::ostringstream out;
      out << "{\"ok\":true,\"state\":\""
          << (pending_match_rooms_.count(auth_session->user_id) ? "matched" : "queued")
          << "\",\"queuedPlayers\":" << bean_matchmaking_queues_[tier].size()
          << ",\"threshold\":" << bean_match_threshold_for_tier(tier)
          << ",\"tier\":\"" << escape_json(tier) << "\"";
      if (pending_match_rooms_.count(auth_session->user_id)) {
        out << ",\"roomCode\":\"" << escape_json(pending_match_rooms_[auth_session->user_id]) << "\"";
      }
      out << "}";
      send_json(hdl, websocketpp::http::status_code::ok, out.str());
      return;
    }
    if (clean_uri == "/api/matchmaking/queue" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const std::string tier = bean_tier_for_balance(profile->gold);
      pending_match_rooms_.erase(auth_session->user_id);
      remove_from_bean_queues(auth_session->user_id);
      bean_matchmaking_queues_[tier].push_back({auth_session->user_id, profile->gold, bean_mmr(auth_session->user_id), now_ms()});
      maybe_matchmake_beans(tier);
      std::ostringstream out;
      out << "{\"ok\":true,\"state\":\""
          << (pending_match_rooms_.count(auth_session->user_id) ? "matched" : "queued")
          << "\",\"queuedPlayers\":" << bean_matchmaking_queues_[tier].size()
          << ",\"threshold\":" << bean_match_threshold_for_tier(tier)
          << ",\"tier\":\"" << escape_json(tier) << "\"";
      if (pending_match_rooms_.count(auth_session->user_id)) {
        out << ",\"roomCode\":\"" << escape_json(pending_match_rooms_[auth_session->user_id]) << "\"";
      }
      out << "}";
      send_json(hdl, websocketpp::http::status_code::ok, out.str());
      return;
    }
    if (clean_uri == "/api/matchmaking/cancel" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      matchmaking_queue_.erase(std::remove(matchmaking_queue_.begin(), matchmaking_queue_.end(), auth_session->user_id), matchmaking_queue_.end());
      remove_from_bean_queues(auth_session->user_id);
      send_json(hdl, websocketpp::http::status_code::ok, "{\"ok\":true,\"state\":\"idle\"}");
      return;
    }
    if (clean_uri == "/api/matchmaking/status" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(hdl, websocketpp::http::status_code::unauthorized, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const bool queued = std::find(matchmaking_queue_.begin(), matchmaking_queue_.end(), auth_session->user_id) != matchmaking_queue_.end();
      const BeanQueueEntry* bean_entry = find_bean_queue_entry(auth_session->user_id);
      const auto matched = pending_match_rooms_.find(auth_session->user_id);
      std::ostringstream out;
      out << "{\"ok\":true,\"state\":\"";
      if (matched != pending_match_rooms_.end()) out << "matched";
      else if (bean_entry || queued) out << "queued";
      else out << "idle";
      out << "\",\"queuedPlayers\":";
      if (bean_entry) out << bean_matchmaking_queues_[bean_tier_for_balance(bean_entry->bean_balance)].size();
      else out << matchmaking_queue_.size();
      out << ",\"threshold\":";
      if (bean_entry) out << bean_match_threshold_for_tier(bean_tier_for_balance(bean_entry->bean_balance));
      else out << kMatchmakingThreshold;
      if (bean_entry) out << ",\"tier\":\"" << escape_json(bean_tier_for_balance(bean_entry->bean_balance)) << "\"";
      if (matched != pending_match_rooms_.end()) out << ",\"roomCode\":\"" << escape_json(matched->second) << "\"";
      out << "}";
      send_json(hdl, websocketpp::http::status_code::ok, out.str());
      return;
    }
    if (serve_static_file(hdl, uri)) return;

    con->set_status(websocketpp::http::status_code::not_found);
    con->replace_header("Content-Type", "text/plain; charset=utf-8");
    con->set_body("Not Found");
  }

  void on_open(connection_hdl hdl) {
    Session session;
    session.socket_id = next_socket_id();
    bind_http_session_to_socket(session, server_.get_con_from_hdl(hdl)->get_request_header("Cookie"));
    sessions_[hdl] = session;
    socket_by_id_[session.socket_id] = hdl;
    send_connect(hdl, session.socket_id);
    send_auth_state(session.socket_id, session);
  }

  void send_connect(connection_hdl hdl, const std::string& socket_id) {
    nebula::poker::TextMessage msg;
    msg.set_msg(socket_id);
    nebula::poker::Envelope env;
    env.set_event_name("connect");
    env.set_payload(msg.SerializeAsString());
    server_.send(hdl, env.SerializeAsString(), websocketpp::frame::opcode::binary);
  }

  void on_close(connection_hdl hdl) {
    auto it = sessions_.find(hdl);
    if (it == sessions_.end()) return;
    handle_disconnect(it->second);
    socket_by_id_.erase(it->second.socket_id);
    sessions_.erase(it);
  }

  void on_message(connection_hdl hdl, WsServer::message_ptr msg) {
    if (msg->get_opcode() != websocketpp::frame::opcode::binary) return;
    auto sit = sessions_.find(hdl);
    if (sit == sessions_.end()) return;

    nebula::poker::Envelope env;
    if (!env.ParseFromString(msg->get_payload())) return;

    const std::string& event_name = env.event_name();
    Session& session = sit->second;

    if (event_name == "join_room") {
      nebula::poker::JoinRoomRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_join_room(session, req);
    } else if (event_name == "take_seat") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_take_seat(session, req.seatidx(), req.reconnecttoken());
    } else if (event_name == "toggle_ai") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_toggle_ai(session, req.seatidx());
    } else if (event_name == "kick_seat") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_kick_seat(session, req.seatidx());
    } else if (event_name == "start_game") {
      nebula::poker::StartGameRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_start_game(session, req);
    } else if (event_name == "action") {
      nebula::poker::ActionRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_player_action(session, req);
    } else if (event_name == "next_hand") {
      handle_next_hand(session);
    } else if (event_name == "rebuy") {
      nebula::poker::AmountRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_rebuy(session, req.amount());
    } else if (event_name == "rebuy_request") {
      nebula::poker::AmountRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_rebuy_request(session, req.amount());
    } else if (event_name == "rebuy_approve") {
      nebula::poker::RebuyApproveRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_rebuy_approve(session, req.seatidx(), req.amount());
    } else if (event_name == "rebuy_deny") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_rebuy_deny(session, req.seatidx());
    } else if (event_name == "set_decor") {
      nebula::poker::DecorRequest req;
      if (!req.ParseFromString(env.payload())) return;
      handle_set_decor(session, req.decor());
    } else if (event_name == "ack_match_over") {
      handle_ack_match_over(session);
    } else if (event_name == "voice_join") {
      handle_voice_join(session);
    } else if (event_name == "voice_leave") {
      handle_voice_leave(session);
    } else if (event_name == "voice_signal") {
      nebula::poker::VoiceSignalMessage req;
      if (!req.ParseFromString(env.payload())) return;
      handle_voice_signal(session, req);
    }
  }

  std::string next_socket_id() {
    return "ws-" + std::to_string(++socket_counter_);
  }

  Room* get_room(const std::string& room_id) {
    auto it = rooms_.find(room_id);
    return it == rooms_.end() ? nullptr : &it->second;
  }

  PlayerState* get_player(Room& room, int seat_idx) {
    auto it = room.players.find(seat_idx);
    return it == room.players.end() ? nullptr : &it->second;
  }

  void ensure_players_map(Room& room) {
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Empty) continue;
      auto it = room.players.find(i);
      if (it == room.players.end()) {
        PlayerState p;
        p.seat_idx = i;
        p.chips = room.initial_chips;
        p.total_buy_in = room.initial_chips;
        room.players.emplace(i, p);
      }
    }
    for (auto it = room.players.begin(); it != room.players.end();) {
      if (room.seats[it->first].type == Seat::Type::Empty) it = room.players.erase(it);
      else ++it;
    }
  }

  bool is_seat_occupied(Room& room, int seat_idx) {
    return room.seats[seat_idx].type != Seat::Type::Empty;
  }

  bool is_online(const std::string& socket_id) const {
    return !socket_id.empty() && socket_by_id_.find(socket_id) != socket_by_id_.end();
  }

  bool is_seat_eligible(Room& room, int seat_idx) {
    const Seat& seat = room.seats[seat_idx];
    if (seat.type == Seat::Type::Empty) return false;
    if (seat.type == Seat::Type::Player && !is_online(seat.socket_id) && !seat.ai_managed) return false;
    PlayerState* p = get_player(room, seat_idx);
    if (!p) return false;
    const bool sit_out = p->sit_out_until_hand > room.hand_num;
    return !p->is_bankrupt && p->chips > 0 && !sit_out;
  }

  std::vector<int> get_in_hand_seats(Room& room) {
    std::vector<int> out;
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Empty) continue;
      if (seat.type == Seat::Type::Player && !is_online(seat.socket_id) && !seat.ai_managed) continue;
      PlayerState* p = get_player(room, i);
      if (!p) continue;
      if (!p->is_folded && !p->is_bankrupt && p->sit_out_until_hand <= room.hand_num) out.push_back(i);
    }
    return out;
  }

  std::vector<int> get_actable_seats(Room& room) {
    std::vector<int> out;
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Empty) continue;
      if (seat.type == Seat::Type::Player && !is_online(seat.socket_id) && !seat.ai_managed) continue;
      PlayerState* p = get_player(room, i);
      if (!p) continue;
      if (!p->is_folded && !p->is_bankrupt && p->chips > 0 && p->sit_out_until_hand <= room.hand_num) out.push_back(i);
    }
    return out;
  }

  int next_seat_clockwise(int from, const std::function<bool(int)>& predicate) {
    for (int step = 1; step <= kSeats; ++step) {
      int idx = (from + step) % kSeats;
      if (predicate(idx)) return idx;
    }
    return -1;
  }

  int get_active_offset(Room& room, int start_seat_idx, int offset) {
    int count = 0;
    int idx = start_seat_idx;
    int loops = 0;
    while (count < offset && loops < kSeats * 3) {
      idx = (idx + 1) % kSeats;
      if (is_seat_eligible(room, idx)) count += 1;
      loops += 1;
    }
    return idx;
  }

  std::vector<Card> fresh_deck() {
    static const std::vector<std::string> ranks = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
    static const std::vector<std::string> suits = {"hearts", "diamonds", "clubs", "spades"};
    std::vector<Card> deck;
    for (const auto& s : suits) {
      for (size_t i = 0; i < ranks.size(); ++i) deck.push_back(Card{s, ranks[i], static_cast<int>(i) + 2});
    }
    std::shuffle(deck.begin(), deck.end(), rng_);
    return deck;
  }

  std::vector<std::vector<Card>> combinations(const std::vector<Card>& arr, int k) {
    std::vector<std::vector<Card>> out;
    std::vector<Card> current;
    std::function<void(int)> dfs = [&](int start) {
      if (static_cast<int>(current.size()) == k) {
        out.push_back(current);
        return;
      }
      for (int i = start; i < static_cast<int>(arr.size()); ++i) {
        current.push_back(arr[i]);
        dfs(i + 1);
        current.pop_back();
      }
    };
    dfs(0);
    return out;
  }

  HandEval evaluate5(const std::vector<Card>& cards) {
    std::vector<Card> sorted = cards;
    std::sort(sorted.begin(), sorted.end(), [](const Card& a, const Card& b) { return a.v > b.v; });

    std::vector<int> ranks;
    std::vector<std::string> suits;
    for (const auto& c : sorted) {
      ranks.push_back(c.v);
      suits.push_back(c.s);
    }

    bool flush = std::all_of(suits.begin(), suits.end(), [&](const std::string& s) { return s == suits.front(); });
    bool straight = false;
    int straight_max = 0;
    std::vector<int> uniq = ranks;
    std::sort(uniq.begin(), uniq.end());
    uniq.erase(std::unique(uniq.begin(), uniq.end()), uniq.end());
    std::sort(uniq.begin(), uniq.end(), std::greater<int>());
    if (uniq.size() == 5) {
      if (uniq.front() - uniq.back() == 4) {
        straight = true;
        straight_max = uniq.front();
      } else if (uniq == std::vector<int>({14, 5, 4, 3, 2})) {
        straight = true;
        straight_max = 5;
      }
    }

    std::map<int, int, std::greater<int>> counts;
    for (int r : ranks) counts[r] += 1;
    std::vector<std::pair<int, int>> by_freq;
    for (const auto& [rank, count] : counts) by_freq.push_back({count, rank});
    std::sort(by_freq.begin(), by_freq.end(), [](auto a, auto b) {
      if (a.first != b.first) return a.first > b.first;
      return a.second > b.second;
    });

    HandEval out;
    if (flush && straight) {
      out.rank = (straight_max == 14) ? 10 : 9;
      out.value = {straight_max};
      out.desc = (straight_max == 14) ? "Royal Flush" : "Straight Flush";
      return out;
    }
    if (by_freq[0].first == 4) {
      out.rank = 8;
      out.value = {by_freq[0].second, by_freq[1].second};
      out.desc = "Four of a Kind";
      return out;
    }
    if (by_freq[0].first == 3 && by_freq[1].first == 2) {
      out.rank = 7;
      out.value = {by_freq[0].second, by_freq[1].second};
      out.desc = "Full House";
      return out;
    }
    if (flush) {
      out.rank = 6;
      out.value = ranks;
      out.desc = "Flush";
      return out;
    }
    if (straight) {
      out.rank = 5;
      out.value = {straight_max};
      out.desc = "Straight";
      return out;
    }
    if (by_freq[0].first == 3) {
      out.rank = 4;
      out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second};
      out.desc = "Three of a Kind";
      return out;
    }
    if (by_freq[0].first == 2 && by_freq[1].first == 2) {
      out.rank = 3;
      out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second};
      out.desc = "Two Pair";
      return out;
    }
    if (by_freq[0].first == 2) {
      out.rank = 2;
      out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second, by_freq[3].second};
      out.desc = "One Pair";
      return out;
    }
    out.rank = 1;
    out.value = ranks;
    out.desc = "High Card";
    return out;
  }

  int compare_hands(const HandEval& a, const HandEval& b) {
    if (a.rank != b.rank) return a.rank - b.rank;
    for (size_t i = 0; i < std::min(a.value.size(), b.value.size()); ++i) {
      if (a.value[i] != b.value[i]) return a.value[i] - b.value[i];
    }
    return 0;
  }

  HandEval best_hand(const std::vector<Card>& cards) {
    auto combos = combinations(cards, 5);
    HandEval best;
    bool has_best = false;
    for (const auto& combo : combos) {
      HandEval current = evaluate5(combo);
      if (!has_best || compare_hands(current, best) > 0) {
        best = current;
        has_best = true;
      }
    }
    return best;
  }

  int place_bet(Room& room, int seat_idx, int amount) {
    PlayerState* p = get_player(room, seat_idx);
    if (!p || p->is_folded || p->is_bankrupt) return 0;
    int real = std::max(0, std::min(amount, p->chips));
    p->chips -= real;
    p->current_bet += real;
    room.pot += real;
    return real;
  }

  int post_blind(Room& room, int seat_idx, int amount) {
    int real = place_bet(room, seat_idx, amount);
    PlayerState* p = get_player(room, seat_idx);
    if (p) room.current_max_bet = std::max(room.current_max_bet, p->current_bet);
    return real;
  }

  void reset_hand(Room& room) {
    room.hand_num += 1;
    room.pot = 0;
    room.round = "PRE-FLOP";
    room.community_cards.clear();
    room.deck = fresh_deck();
    room.current_max_bet = 0;
    room.pending_action_seats.clear();
    room.turn_nonce += 1;
    room.last_actor_seat_idx = -1;
    for (auto& [seat_idx, p] : room.players) {
      p.hand.clear();
      p.current_bet = 0;
      const Seat& seat = room.seats[seat_idx];
      const bool disconnected = seat.type == Seat::Type::Player && !is_online(seat.socket_id) && !seat.ai_managed;
      const bool sit_out = p.sit_out_until_hand > room.hand_num;
      p.is_folded = p.chips <= 0 || disconnected || sit_out;
      p.is_bankrupt = p.chips <= 0;
    }
  }

  void apply_pending_rebuys(Room& room) {
    for (auto& [seat_idx, p] : room.players) {
      int pend = p.pending_rebuy;
      if (pend <= 0) continue;
      p.chips += pend;
      p.pending_rebuy = 0;
      p.is_bankrupt = false;
      p.is_folded = false;
      p.current_bet = 0;
      broadcast_activity(room, room.seats[seat_idx].name + " rebuys $" + std::to_string(pend) + ".");
    }
  }

  void deal_hole_cards(Room& room) {
    std::vector<int> eligible;
    for (int i = 0; i < kSeats; ++i) {
      int seat_idx = (room.dealer_seat_idx + 1 + i) % kSeats;
      if (is_seat_eligible(room, seat_idx)) eligible.push_back(seat_idx);
    }
    for (int round = 0; round < 2; ++round) {
      for (int seat_idx : eligible) {
        PlayerState* p = get_player(room, seat_idx);
        if (!p || room.deck.empty()) continue;
        p->hand.push_back(room.deck.back());
        room.deck.pop_back();
      }
    }
  }

  void init_pending_action(Room& room, int start_seat_idx) {
    room.pending_action_seats.clear();
    for (int seat_idx : get_actable_seats(room)) room.pending_action_seats.insert(seat_idx);
    room.active_seat_idx = start_seat_idx;
  }

  void remove_ineligible_from_pending(Room& room) {
    for (auto it = room.pending_action_seats.begin(); it != room.pending_action_seats.end();) {
      PlayerState* p = get_player(room, *it);
      if (!p || p->is_folded || p->is_bankrupt || p->chips <= 0) it = room.pending_action_seats.erase(it);
      else ++it;
    }
  }

  int choose_next_actor(Room& room, int from_seat_idx) {
    remove_ineligible_from_pending(room);
    if (room.pending_action_seats.empty()) return -1;
    return next_seat_clockwise(from_seat_idx, [&](int idx) { return room.pending_action_seats.count(idx) > 0; });
  }

  void prune_departed_seats(Room& room) {
    for (int i = 0; i < kSeats; ++i) {
      Seat& seat = room.seats[i];
      if (seat.type != Seat::Type::Player) continue;
      if (!seat.socket_id.empty() && is_online(seat.socket_id)) continue;
      if (seat.disconnected_at == 0) continue;
      cancel_ai_takeover(room, i);
      if (!seat.gameplay_session_id.empty()) {
        GameplaySessionData& gameplay = ensure_gameplay_session(seat.gameplay_session_id, seat.user_id);
        gameplay.seat_idx = -1;
        gameplay.ai_managed = false;
        gameplay.ai_takeover_at = 0;
      }
      room.players.erase(i);
      seat = Seat{};
    }
  }

  void resolve_disconnect_for_current_hand(Room& room, int seat_idx) {
    PlayerState* p = get_player(room, seat_idx);
    if (!p) return;
    p->sit_out_until_hand = std::max(p->sit_out_until_hand, room.hand_num + 2);
    room.pending_action_seats.erase(seat_idx);
    if (room.active_seat_idx != seat_idx) {
      if (room.current_max_bet > p->current_bet) p->is_folded = true;
      return;
    }

    const int call_amt = std::max(0, room.current_max_bet - p->current_bet);
    if (call_amt > 0) {
      p->is_folded = true;
      broadcast_activity(room, room.seats[seat_idx].name + " disconnected. Auto-folded for this hand.");
      broadcast_player_action(room, seat_idx, "FOLD");
    } else {
      broadcast_activity(room, room.seats[seat_idx].name + " disconnected. Auto-checked and will leave next hand.");
      broadcast_player_action(room, seat_idx, "CHECK");
    }

    if (get_in_hand_seats(room).size() <= 1) {
      finish_hand(room);
      return;
    }
    if (can_advance_street(room)) {
      proceed_to_next_street(room);
      return;
    }
    room.active_seat_idx = choose_next_actor(room, seat_idx);
    request_turn(room);
  }

  void deal_community(Room& room, int n) {
    while (n-- > 0 && !room.deck.empty()) {
      room.community_cards.push_back(room.deck.back());
      room.deck.pop_back();
    }
  }

  void start_hand(Room& room) {
    ensure_players_map(room);
    apply_pending_rebuys(room);
    std::vector<int> eligible;
    for (int i = 0; i < kSeats; ++i) if (is_seat_eligible(room, i)) eligible.push_back(i);
    if (eligible.size() < 2) {
      emit_match_over(room, "Not enough players with chips to continue.");
      return;
    }

    reset_hand(room);
    broadcast_activity(room, "--- HAND " + std::to_string(room.hand_num) + " / " + std::to_string(room.total_hands) + " ---");

    room.sb_seat_idx = get_active_offset(room, room.dealer_seat_idx, 1);
    room.bb_seat_idx = get_active_offset(room, room.dealer_seat_idx, 2);
    int utg = get_active_offset(room, room.dealer_seat_idx, 3);

    post_blind(room, room.sb_seat_idx, room.small_blind);
    post_blind(room, room.bb_seat_idx, room.big_blind);
    broadcast_activity(room, room.seats[room.sb_seat_idx].name + " posts SB $" + std::to_string(room.small_blind));
    broadcast_activity(room, room.seats[room.bb_seat_idx].name + " posts BB $" + std::to_string(room.big_blind));

    deal_hole_cards(room);
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      PlayerState* p = get_player(room, i);
      if (seat.type != Seat::Type::Player || !p || seat.socket_id.empty()) continue;
      nebula::poker::PrivateHand hand;
      hand.set_seatidx(i);
      for (const auto& card : p->hand) fill_card(*hand.add_hand(), card);
      emit_seat_event(room, i, "private_hand", hand);
    }

    room.current_max_bet = room.big_blind;
    room.min_raise = room.big_blind;
    init_pending_action(room, utg);
    broadcast_game(room);
    request_turn(room);
  }

  bool can_advance_street(Room& room) {
    remove_ineligible_from_pending(room);
    return room.pending_action_seats.empty();
  }

  void proceed_to_next_street(Room& room) {
    for (auto& [_, p] : room.players) p.current_bet = 0;
    room.current_max_bet = 0;
    if (room.round == "PRE-FLOP") {
      room.round = "FLOP";
      deal_community(room, 3);
    } else if (room.round == "FLOP") {
      room.round = "TURN";
      deal_community(room, 1);
    } else if (room.round == "TURN") {
      room.round = "RIVER";
      deal_community(room, 1);
    } else {
      room.round = "SHOWDOWN";
    }
    if (room.round == "SHOWDOWN") {
      finish_hand(room);
      return;
    }
    int first = get_active_offset(room, room.dealer_seat_idx, 1);
    init_pending_action(room, first);
    broadcast_game(room);
    request_turn(room);
  }

  void finish_hand(Room& room) {
    if (room.ai_timer) room.ai_timer->cancel();
    room.pending_action_seats.clear();
    room.active_seat_idx = -1;

    std::vector<int> in_hand = get_in_hand_seats(room);
    std::vector<std::pair<int, std::vector<Card>>> showdown_cards;
    for (int seat_idx : in_hand) {
      PlayerState* p = get_player(room, seat_idx);
      if (p && p->hand.size() >= 2) showdown_cards.push_back({seat_idx, p->hand});
    }

    if (in_hand.empty()) {
      room.pot = 0;
      room.round = "HAND_OVER";
      nebula::poker::HandOver msg;
      msg.set_handnum(room.hand_num);
      msg.set_totalhands(room.total_hands);
      msg.set_desc("No active players");
      send_hand_over(room, msg, {});
      return;
    }

    if (in_hand.size() == 1) {
      int winner = in_hand.front();
      PlayerState* p = get_player(room, winner);
      if (p) p->chips += room.pot;
      room.pot = 0;
      room.round = "HAND_OVER";
      broadcast_activity(room, "Game Over. " + room.seats[winner].name + " wins (all others folded)!");
      nebula::poker::HandOver msg;
      msg.set_handnum(room.hand_num);
      msg.set_totalhands(room.total_hands);
      auto* w = msg.add_winners();
      w->set_seatidx(winner);
      w->set_name(room.seats[winner].name);
      msg.set_desc("All others folded");
      send_hand_over(room, msg, showdown_cards);
      return;
    }

    while (room.community_cards.size() < 5 && !room.deck.empty()) deal_community(room, 1);

    struct EvalRow { int seat_idx; HandEval hand; };
    std::vector<EvalRow> evals;
    for (int seat_idx : in_hand) {
      PlayerState* p = get_player(room, seat_idx);
      if (!p) continue;
      std::vector<Card> cards = p->hand;
      cards.insert(cards.end(), room.community_cards.begin(), room.community_cards.end());
      evals.push_back({seat_idx, best_hand(cards)});
    }
    std::sort(evals.begin(), evals.end(), [&](const EvalRow& a, const EvalRow& b) { return compare_hands(a.hand, b.hand) > 0; });

    HandEval best = evals.front().hand;
    std::vector<int> winners;
    for (const auto& row : evals) if (compare_hands(row.hand, best) == 0) winners.push_back(row.seat_idx);
    int win_amount = winners.empty() ? 0 : room.pot / static_cast<int>(winners.size());
    for (int seat_idx : winners) {
      PlayerState* p = get_player(room, seat_idx);
      if (p) p->chips += win_amount;
    }
    room.pot = 0;
    room.round = "HAND_OVER";
    {
      std::ostringstream names;
      for (size_t i = 0; i < winners.size(); ++i) {
        if (i) names << " & ";
        names << room.seats[winners[i]].name;
      }
      broadcast_activity(room, "Game Over. " + names.str() + " wins with " + best.desc + "!");
    }
    nebula::poker::HandOver msg;
    msg.set_handnum(room.hand_num);
    msg.set_totalhands(room.total_hands);
    msg.set_desc(best.desc);
    for (int seat_idx : winners) {
      auto* w = msg.add_winners();
      w->set_seatidx(seat_idx);
      w->set_name(room.seats[seat_idx].name);
    }
    send_hand_over(room, msg, showdown_cards);
  }

  void send_hand_over(Room& room, nebula::poker::HandOver& msg, const std::vector<std::pair<int, std::vector<Card>>>& showdown_cards) {
    for (const auto& [seat_idx, hand_cards] : showdown_cards) {
      auto* sh = msg.add_showdownhands();
      sh->set_seatidx(seat_idx);
      sh->set_name(room.seats[seat_idx].name);
      for (const auto& card : hand_cards) fill_card(*sh->add_hand(), card);
    }
    MatchHandInfo hist;
    hist.hand_num = room.hand_num;
    hist.desc = msg.desc();
    for (const auto& w : msg.winners()) hist.winners.push_back({w.seatidx(), w.name()});
    room.hand_history.push_back(hist);
    emit_room_event(room, "hand_over", msg);
    broadcast_game(room);
  }

  void reject_illegal_action(const std::string& socket_id, const std::string& reason) {
    if (socket_id.empty()) return;
    send_error(socket_id, "Action rejected: " + reason);
  }

  void request_turn(Room& room) {
    if (room.ai_timer) room.ai_timer->cancel();
    std::vector<int> in_hand = get_in_hand_seats(room);
    if (in_hand.size() <= 1) {
      finish_hand(room);
      return;
    }
    if (get_actable_seats(room).empty()) {
      room.round = "SHOWDOWN";
      finish_hand(room);
      return;
    }
    remove_ineligible_from_pending(room);
    if (room.active_seat_idx < 0 || room.pending_action_seats.count(room.active_seat_idx) == 0) {
      room.active_seat_idx = choose_next_actor(room, room.active_seat_idx >= 0 ? room.active_seat_idx : room.dealer_seat_idx);
    }
    if (room.active_seat_idx < 0) {
      proceed_to_next_street(room);
      return;
    }
    broadcast_game(room);
    const Seat& seat = room.seats[room.active_seat_idx];
    if (seat.type == Seat::Type::AI || (seat.type == Seat::Type::Player && seat.ai_managed && !is_online(seat.socket_id))) {
      room.ai_timer = std::make_unique<asio::steady_timer>(server_.get_io_service(), std::chrono::milliseconds(700));
      int ai_seat_idx = room.active_seat_idx;
      room.ai_timer->async_wait([this, &room, ai_seat_idx](const asio::error_code& ec) {
        if (ec) return;
        if (room.active_seat_idx != ai_seat_idx) return;
        const Seat& active_seat = room.seats[ai_seat_idx];
        if (active_seat.type != Seat::Type::AI &&
            !(active_seat.type == Seat::Type::Player && active_seat.ai_managed && !is_online(active_seat.socket_id))) {
          return;
        }
        ai_act(room, ai_seat_idx);
      });
    } else {
      nebula::poker::TurnMessage turn;
      turn.set_activeseatidx(room.active_seat_idx);
      turn.set_turnnonce(room.turn_nonce);
      emit_room_event(room, "turn", turn);
    }
  }

  void handle_action(Room& room, int seat_idx, const nebula::poker::ActionRequest& action, const std::string& actor_socket_id = "") {
    PlayerState* p = get_player(room, seat_idx);
    if (!p) {
      reject_illegal_action(actor_socket_id, "seat not found in room");
      return;
    }
    if (room.seats[seat_idx].type != Seat::Type::Player && !actor_socket_id.empty()) {
      reject_illegal_action(actor_socket_id, "only seated players can act");
      return;
    }
    if (p->is_folded || p->is_bankrupt) {
      reject_illegal_action(actor_socket_id, "seat is not active in this hand");
      return;
    }
    if (room.active_seat_idx != seat_idx || room.pending_action_seats.count(seat_idx) == 0) {
      reject_illegal_action(actor_socket_id, "it is not your turn");
      return;
    }
    room.last_actor_seat_idx = seat_idx;

    int call_amt = std::max(0, room.current_max_bet - p->current_bet);
    std::string type = normalize_action_name(action.type());
    if (type != "fold" && type != "check" && type != "call" && type != "raise" && type != "allin") {
      reject_illegal_action(actor_socket_id, "unsupported action type");
      return;
    }
    if (type == "fold") {
      p->is_folded = true;
      room.pending_action_seats.erase(seat_idx);
      broadcast_activity(room, room.seats[seat_idx].name + " Folds.");
      broadcast_player_action(room, seat_idx, "FOLD");
    } else if (type == "check") {
      if (call_amt != 0) {
        reject_illegal_action(actor_socket_id, "cannot check while facing a bet");
        return;
      }
      room.pending_action_seats.erase(seat_idx);
      broadcast_activity(room, room.seats[seat_idx].name + " Checks.");
      broadcast_player_action(room, seat_idx, "CHECK");
    } else if (type == "call") {
      if (call_amt > 0) {
        if (p->chips < call_amt) {
          const int committed = place_bet(room, seat_idx, p->chips);
          broadcast_activity(room, room.seats[seat_idx].name + " is ALL-IN for " + std::to_string(committed) + ".");
          broadcast_player_action(room, seat_idx, "ALL-IN " + std::to_string(p->current_bet));
        } else {
          place_bet(room, seat_idx, call_amt);
          broadcast_activity(room, room.seats[seat_idx].name + " Calls.");
          broadcast_player_action(room, seat_idx, "CALL " + std::to_string(call_amt));
        }
      } else {
        broadcast_activity(room, room.seats[seat_idx].name + " Checks.");
        broadcast_player_action(room, seat_idx, "CHECK");
      }
      room.pending_action_seats.erase(seat_idx);
    } else if (type == "raise") {
      int raise_by = std::max(room.min_raise, action.raiseby());
      if (p->chips < call_amt + raise_by) {
        reject_illegal_action(actor_socket_id, "insufficient chips for requested raise");
        return;
      }
      place_bet(room, seat_idx, call_amt + raise_by);
      room.current_max_bet = p->current_bet;
      room.pending_action_seats.clear();
      for (int idx : get_actable_seats(room)) room.pending_action_seats.insert(idx);
      room.pending_action_seats.erase(seat_idx);
      broadcast_activity(room, room.seats[seat_idx].name + " Raises to " + std::to_string(p->current_bet) + ".");
      broadcast_player_action(room, seat_idx, "RAISE " + std::to_string(p->current_bet));
    } else if (type == "allin") {
      int all = p->chips;
      if (all <= 0) {
        reject_illegal_action(actor_socket_id, "no chips left for all-in");
        return;
      } else {
        place_bet(room, seat_idx, all);
        if (p->current_bet > room.current_max_bet) {
          room.current_max_bet = p->current_bet;
          room.pending_action_seats.clear();
          for (int idx : get_actable_seats(room)) room.pending_action_seats.insert(idx);
          room.pending_action_seats.erase(seat_idx);
          broadcast_activity(room, room.seats[seat_idx].name + " ALL-IN to " + std::to_string(p->current_bet) + ".");
          broadcast_player_action(room, seat_idx, "ALL-IN " + std::to_string(p->current_bet));
        } else {
          room.pending_action_seats.erase(seat_idx);
          broadcast_activity(room, room.seats[seat_idx].name + " is ALL-IN!");
          broadcast_player_action(room, seat_idx, "ALL-IN");
        }
      }
    }

    if (get_in_hand_seats(room).size() <= 1) {
      finish_hand(room);
      return;
    }
    remove_ineligible_from_pending(room);
    if (can_advance_street(room)) {
      proceed_to_next_street(room);
      return;
    }
    room.active_seat_idx = choose_next_actor(room, seat_idx);
    request_turn(room);
  }

  void ai_act(Room& room, int seat_idx) {
    PlayerState* p = get_player(room, seat_idx);
    if (!p || p->is_folded || p->is_bankrupt) {
      room.pending_action_seats.erase(seat_idx);
      room.active_seat_idx = choose_next_actor(room, seat_idx);
      request_turn(room);
      return;
    }
    int call_amt = std::max(0, room.current_max_bet - p->current_bet);
    std::uniform_real_distribution<double> dist(0.0, 1.0);
    double r = dist(rng_);
    nebula::poker::ActionRequest req;
    if (call_amt > 0 && r > 0.85) req.set_type("fold");
    else if (r > 0.7 && p->chips > call_amt + room.min_raise) {
      req.set_type("raise");
      req.set_raiseby(room.min_raise);
    } else if (call_amt > 0) req.set_type("call");
    else req.set_type("check");
    handle_action(room, seat_idx, req);
  }

  std::vector<MatchStat> build_match_stats(Room& room, const std::vector<nebula::poker::Standing>& standings) {
    std::vector<MatchStat> stats;
    const bool bean_rewarded = room.room_type == "bean_match" || room.room_type == "tournament";
    int64_t best_net = std::numeric_limits<int64_t>::min();
    for (const auto& standing : standings) {
      const Seat& seat = room.seats[standing.seatidx()];
      if (seat.type != Seat::Type::Player) continue;
      best_net = std::max<int64_t>(best_net, standing.net());
    }
    if (best_net == std::numeric_limits<int64_t>::min()) best_net = 0;
    for (const auto& standing : standings) {
      const Seat& seat = room.seats[standing.seatidx()];
      if (seat.type != Seat::Type::Player) continue;
      MatchStat stat;
      if (const auto auth = auth_store_->find_by_user_id(seat.user_id); auth.has_value()) stat.external_id = auth->username;
      else stat.external_id = seat.name;
      stat.username = standing.name();
      stat.gold_delta = bean_rewarded ? standing.net() : 0;
      stat.winner = standing.net() == best_net;
      stats.push_back(stat);
    }
    return stats;
  }

  void emit_match_over(Room& room, const std::string& reason = "") {
    if (room.closing) return;
    const bool reusable_friend_room = room.room_type == "friend";
    room.closing = !reusable_friend_room;
    room.started = false;
    room.status = reusable_friend_room ? "room_lobby" : "closed";
    room.round = "WAITING";
    room.active_seat_idx = -1;
    room.pending_action_seats.clear();
    if (!reason.empty()) broadcast_activity(room, reason);
    broadcast_activity(room, "Match over.");

    nebula::poker::MatchOver msg;
    msg.set_roomid(room.room_id);
    msg.set_totalhands(room.total_hands);
    msg.set_scheduledhands(room.total_hands);
    msg.set_playedhands(static_cast<int>(room.hand_history.size()));

    std::vector<nebula::poker::Standing> standings = build_standings(room);
    for (const auto& standing : standings) *msg.add_standings() = standing;
    for (const auto& hand : room.hand_history) {
      auto* h = msg.add_hands();
      h->set_handnum(hand.hand_num);
      h->set_desc(hand.desc);
      for (const auto& w : hand.winners) {
        auto* win = h->add_winners();
        win->set_seatidx(w.seat_idx);
        win->set_name(w.name);
      }
    }

    room.expected_acks = reusable_friend_room ? std::set<std::string>{} : room.socket_ids;
    room.match_acks.clear();
    emit_room_event(room, "match_over", msg);
    if (reusable_friend_room) {
      broadcast_room(room);
    }

    auto stats = build_match_stats(room, standings);
    user_store_->record_match(stats);
    for (const auto& stat : stats) {
      const std::string key = stat.external_id.empty() ? stat.username : stat.external_id;
      auto it = cached_users_.find(key);
      if (it == cached_users_.end()) continue;
      it->second.games_played += 1;
      if (stat.winner) it->second.games_won += 1;
      it->second.gold = std::max<int64_t>(0, it->second.gold + stat.gold_delta);
    }
    leaderboard_store_->update(stats, cached_users_);
  }

  std::vector<nebula::poker::Standing> build_standings(Room& room) {
    std::vector<nebula::poker::Standing> out;
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Empty) continue;
      PlayerState* p = get_player(room, i);
      if (!p) continue;
      nebula::poker::Standing row;
      row.set_seatidx(i);
      row.set_type(seat.type == Seat::Type::AI ? "ai" : "player");
      row.set_name(seat.name);
      row.set_chips(p->chips);
      row.set_buyin(p->total_buy_in);
      row.set_net(p->chips - p->total_buy_in);
      out.push_back(row);
    }
    std::sort(out.begin(), out.end(), [](const auto& a, const auto& b) { return a.chips() > b.chips(); });
    return out;
  }

  void release_room_if_done(Room& room) {
    if (room.room_type == "friend") return;
    bool all = true;
    for (const auto& sid : room.expected_acks) {
      if (room.match_acks.count(sid) == 0) {
        all = false;
        break;
      }
    }
    if (!all) return;
    nebula::poker::RoomClosed msg;
    msg.set_roomid(room.room_id);
    msg.set_reason("match_over");
    emit_room_event(room, "room_closed", msg);
    rooms_.erase(room.room_id);
    room_mutexes_.erase(room.room_id);
  }

  nebula::poker::RoomState build_room_state(Room& room, const std::string& for_socket_id) {
    nebula::poker::RoomState state;
    state.set_roomid(room.room_id);
    state.set_hostsocketid(room.host_socket_id);
    state.set_hostseatidx(find_host_seat_idx(room));
    state.set_ishost(for_socket_id == room.host_socket_id);
    state.set_started(room.started);
    state.set_owneruserid(room.owner_user_id);
    state.set_roomcode(room.room_code);
    state.set_visibility(room.visibility);
    state.set_status(room.status);
    state.set_maxplayers(room.max_players);
    auto* settings = state.mutable_settings();
    settings->set_totalhands(room.total_hands);
    settings->set_initialchips(room.initial_chips);
    settings->set_smallblind(room.small_blind);
    settings->set_bigblind(room.big_blind);
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Empty) continue;
      auto* s = state.add_seats();
      s->set_seatidx(i);
      s->set_type(seat.type == Seat::Type::AI ? "ai" : "player");
      s->set_name(seat.name);
      s->set_decor(seat.decor);
      s->set_socketid(seat.socket_id);
      s->set_clientid(seat.client_id);
      s->set_aimanaged(seat.ai_managed);
      s->set_disconnectedat(seat.disconnected_at);
    }
    return state;
  }

  nebula::poker::GameState build_game_state(Room& room) {
    nebula::poker::GameState state;
    state.set_roomid(room.room_id);
    state.set_started(room.started);
    auto* settings = state.mutable_settings();
    settings->set_totalhands(room.total_hands);
    settings->set_initialchips(room.initial_chips);
    settings->set_smallblind(room.small_blind);
    settings->set_bigblind(room.big_blind);
    state.set_handnum(room.hand_num);
    state.set_dealerseatidx(room.dealer_seat_idx);
    state.set_sbseatidx(room.sb_seat_idx);
    state.set_bbseatidx(room.bb_seat_idx);
    state.set_activeseatidx(room.active_seat_idx);
    state.set_pot(room.pot);
    state.set_round(room.round);
    state.set_currentmaxbet(room.current_max_bet);
    state.set_minraise(room.min_raise);
    for (const auto& card : room.community_cards) fill_card(*state.add_communitycards(), card);
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      PlayerState* p = get_player(room, i);
      if (seat.type == Seat::Type::Empty || !p) continue;
      auto* player = state.add_players();
      player->set_seatidx(i);
      player->set_name(seat.name);
      player->set_type(seat.type == Seat::Type::AI ? "ai" : "player");
      player->set_chips(p->chips);
      player->set_currentbet(p->current_bet);
      player->set_isfolded(p->is_folded);
      player->set_isbankrupt(p->is_bankrupt);
      player->set_totalbuyin(p->total_buy_in);
    }
    return state;
  }

  void fill_card(nebula::poker::Card& out, const Card& card) {
    out.set_s(card.s);
    out.set_r(card.r);
    out.set_v(card.v);
  }

  int find_host_seat_idx(Room& room) {
    for (int i = 0; i < kSeats; ++i) {
      const Seat& seat = room.seats[i];
      if (seat.type == Seat::Type::Player && seat.socket_id == room.host_socket_id) return i;
    }
    return -1;
  }

  void emit_you_state(const Session& session, Room& room) {
    nebula::poker::YouState msg;
    msg.set_roomid(room.room_id);
    msg.set_seatidx(session.seat_idx);
    msg.set_ishost(session.socket_id == room.host_socket_id);
    send_event(session.socket_id, "you_state", msg);
  }

  void handle_join_room(Session& session, const nebula::poker::JoinRoomRequest& req) {
    if (!session.authenticated) {
      send_error(session.socket_id, "Please log in before joining a room.");
      return;
    }
    std::string room_id = to_upper_room_code(req.roomid());
    if (room_id.empty()) return;
    std::lock_guard<std::mutex> lock(room_mutex(room_id));
    Room* room_ptr = get_room(room_id);
    if (!room_ptr) {
      send_error(session.socket_id, "Room not found.");
      return;
    }
    Room& room = *room_ptr;
    room.last_active_at = now_ms();
    if (room.closing) {
      send_error(session.socket_id, "This room has ended and is closing. Please rejoin in a moment (or use a new Room ID).");
      return;
    }

    session.room_id = room_id;
    session.name = session.profile.username.empty() ? "Player" : session.profile.username;
    session.client_id = req.clientid();
    if (!req.sessionid().empty()) session.gameplay_session_id = req.sessionid();
    if (!session.gameplay_session_id.empty()) {
      GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
      session.last_seen_seq = gameplay.last_seen_seq;
      gameplay.room_id = room_id;
    }
    cache_profile(session.profile);
    pending_match_rooms_.erase(session.profile.user_id);

    if (room.started) {
      int reconnect_idx = -1;
      for (int i = 0; i < kSeats; ++i) {
        const Seat& seat = room.seats[i];
        if (seat.type != Seat::Type::Player) continue;
        if (seat.user_id == session.profile.user_id) {
          reconnect_idx = i;
          break;
        }
      }
      if (reconnect_idx < 0 && session.user_id <= 0) {
        for (int i = 0; i < kSeats; ++i) {
          const Seat& seat = room.seats[i];
          if (seat.type != Seat::Type::Player) continue;
          if (!session.gameplay_session_id.empty() && seat.gameplay_session_id == session.gameplay_session_id) {
            reconnect_idx = i;
            break;
          }
        }
      }
      if (reconnect_idx < 0 && session.user_id <= 0) {
        for (int i = 0; i < kSeats; ++i) {
          const Seat& seat = room.seats[i];
          if (seat.type != Seat::Type::Player) continue;
          if (!req.reconnecttoken().empty() && seat.reconnect_token == req.reconnecttoken()) {
            reconnect_idx = i;
            break;
          }
        }
      }
      if (reconnect_idx < 0) {
        send_error(session.socket_id, "Game already started in this room. You can only rejoin if you were already seated.");
        return;
      }
      Seat& seat = room.seats[reconnect_idx];
      seat.socket_id = session.socket_id;
      seat.name = session.name;
      seat.user_id = session.profile.user_id;
      if (!session.gameplay_session_id.empty()) seat.gameplay_session_id = session.gameplay_session_id;
      else session.gameplay_session_id = seat.gameplay_session_id;
      if (!session.client_id.empty()) seat.client_id = session.client_id;
      seat.disconnected_at = 0;
      cancel_ai_takeover(room, reconnect_idx);
      session.seat_idx = reconnect_idx;
      if (!session.gameplay_session_id.empty()) {
        GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
        gameplay.room_id = room_id;
        gameplay.seat_idx = reconnect_idx;
        gameplay.reconnect_token = seat.reconnect_token;
        gameplay.last_disconnect_at = 0;
        gameplay.ai_managed = false;
        gameplay.ai_takeover_at = 0;
      }
    }

    room.status = room.started ? "playing" : "waiting";
    if (room.host_socket_id.empty() || !is_online(room.host_socket_id)) room.host_socket_id = session.socket_id;
    room.socket_ids.insert(session.socket_id);
    room.empty_since.reset();

    nebula::poker::UserProfile profile;
    profile.set_userid(session.profile.user_id);
    profile.set_externalid(session.profile.external_id);
    profile.set_username(session.profile.username);
    profile.set_avatar(session.profile.avatar);
    profile.set_gold(session.profile.gold);
    profile.set_gamesplayed(session.profile.games_played);
    profile.set_gameswon(session.profile.games_won);
    send_event(session.socket_id, "user_profile", profile);

    send_full_state_sync(session, room, room.started && !room.closing && session.seat_idx >= 0);

    broadcast_room(room);
    broadcast_game(room);
    if (room.started && !room.closing && session.seat_idx >= 0) {
      replay_missed_events(session, room);
      if (room.round != "HAND_OVER") request_turn(room);
    }
  }

  void handle_take_seat(Session& session, int seat_idx, const std::string& reconnect_token) {
    Room* room = get_room(session.room_id);
    if (!room || room->closing) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (seat_idx < 0 || seat_idx >= kSeats) return;

    if (room->started) {
      Seat& seat = room->seats[seat_idx];
      const bool can_reclaim = can_reclaim_started_seat(seat, session, reconnect_token);
      if (!can_reclaim) return;
      seat.socket_id = session.socket_id;
      seat.user_id = session.profile.user_id;
      if (!session.gameplay_session_id.empty()) seat.gameplay_session_id = session.gameplay_session_id;
      else session.gameplay_session_id = seat.gameplay_session_id;
      seat.disconnected_at = 0;
      cancel_ai_takeover(*room, seat_idx);
      session.seat_idx = seat_idx;
      nebula::poker::SeatSession seat_session;
      seat_session.set_roomid(room->room_id);
      seat_session.set_reconnecttoken(seat.reconnect_token);
      seat_session.set_sessionid(session.gameplay_session_id);
      seat_session.set_lastseenseq(session.last_seen_seq);
      send_event(session.socket_id, "seat_session", seat_session);
      if (!session.gameplay_session_id.empty()) {
        GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
        gameplay.room_id = room->room_id;
        gameplay.seat_idx = seat_idx;
        gameplay.reconnect_token = seat.reconnect_token;
        gameplay.last_disconnect_at = 0;
        gameplay.ai_managed = false;
        gameplay.ai_takeover_at = 0;
      }
      send_full_state_sync(session, *room, true);
      broadcast_room(*room);
      broadcast_game(*room);
      replay_missed_events(session, *room);
      return;
    }

    if (is_seat_occupied(*room, seat_idx) && room->seats[seat_idx].socket_id != session.socket_id) return;
    for (int i = 0; i < kSeats; ++i) {
      Seat& seat = room->seats[i];
      if (seat.type == Seat::Type::Player && seat.socket_id == session.socket_id) room->seats[i] = Seat{};
    }
    Seat seat;
    seat.type = Seat::Type::Player;
    seat.socket_id = session.socket_id;
    seat.name = session.name.empty() ? "Player" : session.name;
    seat.client_id = session.client_id;
    seat.decor = "none";
    seat.user_id = session.profile.user_id;
    if (session.gameplay_session_id.empty()) session.gameplay_session_id = next_token(18);
    seat.gameplay_session_id = session.gameplay_session_id;
    seat.reconnect_token = next_token(18);
    room->seats[seat_idx] = seat;
    session.seat_idx = seat_idx;
    {
      GameplaySessionData& gameplay = ensure_gameplay_session(session.gameplay_session_id, session.user_id);
      gameplay.room_id = room->room_id;
      gameplay.seat_idx = seat_idx;
      gameplay.reconnect_token = seat.reconnect_token;
      gameplay.last_disconnect_at = 0;
      gameplay.ai_managed = false;
      gameplay.ai_takeover_at = 0;
      session.last_seen_seq = gameplay.last_seen_seq;
    }

    ensure_players_map(*room);
    nebula::poker::SeatTaken taken;
    taken.set_seatidx(seat_idx);
    send_event(session.socket_id, "seat_taken", taken);
    nebula::poker::SeatSession seat_session;
    seat_session.set_roomid(room->room_id);
    seat_session.set_reconnecttoken(seat.reconnect_token);
    seat_session.set_sessionid(session.gameplay_session_id);
    seat_session.set_lastseenseq(session.last_seen_seq);
    send_event(session.socket_id, "seat_session", seat_session);
    emit_you_state(session, *room);
    broadcast_room(*room);
    broadcast_game(*room);
  }

  void handle_toggle_ai(Session& session, int seat_idx) {
    Room* room = get_room(session.room_id);
    if (!room || room->started || room->closing || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (seat_idx < 0 || seat_idx >= kSeats) return;
    Seat& seat = room->seats[seat_idx];
    if (seat.type == Seat::Type::Player) return;
    if (seat.type == Seat::Type::AI) {
      seat = Seat{};
      room->players.erase(seat_idx);
    } else {
      seat.type = Seat::Type::AI;
      seat.name = "AI-" + std::to_string(seat_idx);
      ensure_players_map(*room);
    }
    broadcast_room(*room);
    broadcast_game(*room);
  }

  void handle_kick_seat(Session& session, int seat_idx) {
    Room* room = get_room(session.room_id);
    if (!room || room->closing || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (seat_idx < 0 || seat_idx >= kSeats) return;
    Seat& seat = room->seats[seat_idx];
    if (seat.type != Seat::Type::Player) return;

    if (room->started) {
      PlayerState* p = get_player(*room, seat_idx);
      if (p) {
        p->is_folded = true;
        p->sit_out_until_hand = room->hand_num + 1;
      }
      room->pending_action_seats.erase(seat_idx);
      if (is_online(seat.socket_id)) {
        nebula::poker::Kicked kicked;
        kicked.set_seatidx(seat_idx);
        kicked.set_msg("You were removed from this hand by host. You can rejoin next hand.");
        send_event(seat.socket_id, "kicked_in_hand", kicked);
      }
      broadcast_activity(*room, seat.name + " was removed by host (sit out until next hand).");
      broadcast_player_action(*room, seat_idx, "FOLD");
      if (get_in_hand_seats(*room).size() <= 1) {
        finish_hand(*room);
        return;
      }
      if (room->active_seat_idx == seat_idx) room->active_seat_idx = choose_next_actor(*room, seat_idx);
      if (can_advance_street(*room)) proceed_to_next_street(*room);
      else request_turn(*room);
      broadcast_room(*room);
      broadcast_game(*room);
      return;
    }

    if (is_online(seat.socket_id)) {
      nebula::poker::Kicked kicked;
      kicked.set_seatidx(seat_idx);
      kicked.set_msg("You were removed from this seat by host.");
      send_event(seat.socket_id, "kicked", kicked);
    }
    room->seats[seat_idx] = Seat{};
    room->players.erase(seat_idx);
    broadcast_room(*room);
    broadcast_game(*room);
  }

  void handle_start_game(Session& session, const nebula::poker::StartGameRequest& req) {
    Room* room = get_room(session.room_id);
    if (!room || room->started || room->closing || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    int occupied = 0;
    for (const auto& seat : room->seats) if (seat.type != Seat::Type::Empty) occupied += 1;
    if (occupied < 3) {
      send_error(session.socket_id, "At least 3 players (including AI) are needed to start!");
      return;
    }
    room->total_hands = std::clamp(req.totalhands(), 1, 50);
    room->initial_chips = std::max(1000, req.initialchips());
    room->started = true;
    room->status = "playing";
    room->hand_num = 0;
    room->dealer_seat_idx = 0;
    ensure_players_map(*room);
    for (auto& [_, p] : room->players) {
      p.chips = room->initial_chips;
      p.total_buy_in = room->initial_chips;
      p.current_bet = 0;
      p.pending_rebuy = 0;
      p.sit_out_until_hand = 0;
      p.is_bankrupt = false;
      p.is_folded = false;
    }
    broadcast_room(*room);
    start_hand(*room);
  }

  void handle_player_action(Session& session, const nebula::poker::ActionRequest& req) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || session.seat_idx < 0) {
      send_error(session.socket_id, "Action rejected: no active started room for this session.");
      return;
    }
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (session.seat_idx >= kSeats) {
      send_error(session.socket_id, "Action rejected: invalid seat index.");
      return;
    }
    const Seat& seat = room->seats[session.seat_idx];
    if (seat.type != Seat::Type::Player) {
      send_error(session.socket_id, "Action rejected: this seat is not controlled by a player.");
      return;
    }
    if (seat.user_id > 0 && seat.user_id != session.user_id) {
      send_error(session.socket_id, "Action rejected: seat ownership mismatch.");
      return;
    }
    if (!seat.socket_id.empty() && seat.socket_id != session.socket_id && !seat.ai_managed) {
      send_error(session.socket_id, "Action rejected: socket no longer owns this seat.");
      return;
    }
    handle_action(*room, session.seat_idx, req, session.socket_id);
  }

  void handle_next_hand(Session& session) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (room->pot != 0) return;
    if (room->hand_num >= room->total_hands) {
      emit_match_over(*room);
      return;
    }
    room->dealer_seat_idx = (room->dealer_seat_idx + 1) % kSeats;
    prune_departed_seats(*room);
    broadcast_room(*room);
    start_hand(*room);
  }

  void handle_rebuy(Session& session, int amount) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || room->closing || session.seat_idx < 0) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    PlayerState* p = get_player(*room, session.seat_idx);
    if (!p || p->chips > 0) return;
    if (amount < 1000 || amount % 50 != 0) {
      send_error(session.socket_id, "Rebuy amount must be >= 1000 and a multiple of 50.");
      return;
    }
    p->pending_rebuy += amount;
    p->total_buy_in += amount;
    broadcast_activity(*room, room->seats[session.seat_idx].name + " rebuys $" + std::to_string(amount) + " (applies next hand).");
    broadcast_game(*room);
  }

  void handle_rebuy_request(Session& session, int amount) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || room->closing || session.seat_idx < 0) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    PlayerState* p = get_player(*room, session.seat_idx);
    if (!p || p->chips > 0) return;
    if (amount < 1000 || amount % 50 != 0) {
      send_error(session.socket_id, "Rebuy amount must be >= 1000 and a multiple of 50.");
      return;
    }
    if (!is_online(room->host_socket_id)) {
      send_error(session.socket_id, "Host is offline. Cannot approve rebuy right now.");
      return;
    }
    nebula::poker::RebuyRequested req;
    req.set_seatidx(session.seat_idx);
    req.set_name(room->seats[session.seat_idx].name);
    req.set_amount(amount);
    send_event(room->host_socket_id, "rebuy_requested", req);
  }

  void handle_rebuy_approve(Session& session, int seat_idx, int amount) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || room->closing || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    PlayerState* p = get_player(*room, seat_idx);
    if (!p || amount < 1000 || amount % 50 != 0) return;
    p->pending_rebuy += amount;
    p->total_buy_in += amount;
    broadcast_activity(*room, room->seats[seat_idx].name + " rebuy approved: $" + std::to_string(amount) + " (applies next hand).");
    broadcast_game(*room);
  }

  void handle_rebuy_deny(Session& session, int seat_idx) {
    Room* room = get_room(session.room_id);
    if (!room || !room->started || room->closing || session.socket_id != room->host_socket_id) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    const Seat& seat = room->seats[seat_idx];
    if (seat.type != Seat::Type::Player || !is_online(seat.socket_id)) return;
    nebula::poker::RebuyDenied denied;
    denied.set_msg("Rebuy denied by host.");
    send_event(seat.socket_id, "rebuy_denied", denied);
    broadcast_activity(*room, seat.name + " rebuy denied.");
  }

  void handle_set_decor(Session& session, const std::string& decor) {
    Room* room = get_room(session.room_id);
    if (!room || room->closing || session.seat_idx < 0) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    static const std::set<std::string> allowed = {"none", "cola", "coffee", "wine", "cigar"};
    std::string d = decor;
    if (allowed.count(d) == 0) return;
    room->seats[session.seat_idx].decor = d;
    room->last_active_at = now_ms();
    broadcast_room(*room);
    broadcast_game(*room);
  }

  void handle_ack_match_over(Session& session) {
    Room* room = get_room(session.room_id);
    if (!room || !room->closing) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    room->match_acks.insert(session.socket_id);
    release_room_if_done(*room);
  }

  void handle_voice_join(Session& session) {
    Room* room = get_room(session.room_id);
    if (!room || session.seat_idx < 0) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    const Seat& seat = room->seats[session.seat_idx];
    if (seat.type != Seat::Type::Player || seat.socket_id != session.socket_id) return;
    VoiceParticipant peer{session.socket_id, session.seat_idx, seat.name};
    room->voice_participants[session.socket_id] = peer;
    session.voice_joined = true;

    nebula::poker::VoicePeers peers;
    for (const auto& [sid, part] : room->voice_participants) {
      if (sid == session.socket_id) continue;
      auto* p = peers.add_peers();
      p->set_socketid(part.socket_id);
      p->set_seatidx(part.seat_idx);
      p->set_name(part.name);
    }
    send_event(session.socket_id, "voice_peers", peers);

    nebula::poker::VoicePeerJoined joined;
    joined.mutable_peer()->set_socketid(peer.socket_id);
    joined.mutable_peer()->set_seatidx(peer.seat_idx);
    joined.mutable_peer()->set_name(peer.name);
    for (const auto& [sid, _] : room->voice_participants) {
      if (sid != session.socket_id) send_event(sid, "voice_peer_joined", joined);
    }
  }

  void handle_voice_leave(Session& session) {
    Room* room = get_room(session.room_id);
    if (!room) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (room->voice_participants.erase(session.socket_id) == 0) return;
    session.voice_joined = false;
    nebula::poker::VoicePeerLeft left;
    left.set_socketid(session.socket_id);
    for (const auto& [sid, _] : room->voice_participants) send_event(sid, "voice_peer_left", left);
  }

  void handle_voice_signal(Session& session, const nebula::poker::VoiceSignalMessage& req) {
    Room* room = get_room(session.room_id);
    if (!room || !session.voice_joined) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));
    if (room->voice_participants.count(session.socket_id) == 0) return;
    if (room->voice_participants.count(req.to()) == 0) return;
    nebula::poker::VoiceSignalMessage out;
    out.set_from(session.socket_id);
    out.set_to(req.to());
    out.set_data(req.data());
    send_event(req.to(), "voice_signal", out);
  }

  void handle_disconnect(Session& session) {
    Room* room = get_room(session.room_id);
    if (!room) return;
    std::lock_guard<std::mutex> lock(room_mutex(room->room_id));

    room->socket_ids.erase(session.socket_id);
    if (room->socket_ids.empty()) room->empty_since = now_ms();

    if (room->closing && room->expected_acks.count(session.socket_id)) {
      room->expected_acks.erase(session.socket_id);
      room->match_acks.erase(session.socket_id);
      if (room->expected_acks.empty()) {
        rooms_.erase(room->room_id);
        room_mutexes_.erase(room->room_id);
        return;
      }
    }

    if (room->voice_participants.erase(session.socket_id) > 0) {
      nebula::poker::VoicePeerLeft left;
      left.set_socketid(session.socket_id);
      for (const auto& [sid, _] : room->voice_participants) send_event(sid, "voice_peer_left", left);
    }

    for (int i = 0; i < kSeats; ++i) {
      Seat& seat = room->seats[i];
      if (seat.type == Seat::Type::Player && seat.socket_id == session.socket_id) {
        if (!seat.gameplay_session_id.empty()) {
          GameplaySessionData& gameplay = ensure_gameplay_session(seat.gameplay_session_id, seat.user_id);
          gameplay.room_id = room->room_id;
          gameplay.seat_idx = i;
          gameplay.reconnect_token = seat.reconnect_token;
          gameplay.last_disconnect_at = now_ms();
          gameplay.ai_managed = seat.ai_managed;
          gameplay.ai_takeover_at = seat.ai_takeover_at;
          gameplay.last_seen_seq = std::max(gameplay.last_seen_seq, session.last_seen_seq);
        }
        if (room->started) {
          seat.socket_id.clear();
          seat.disconnected_at = now_ms();
          resolve_disconnect_for_current_hand(*room, i);
        } else {
          cancel_ai_takeover(*room, i);
          seat = Seat{};
          room->players.erase(i);
        }
      }
    }

    if (room->host_socket_id == session.socket_id) {
      room->host_socket_id.clear();
      for (const auto& seat : room->seats) {
        if (seat.type == Seat::Type::Player && is_online(seat.socket_id)) {
          room->host_socket_id = seat.socket_id;
          break;
        }
      }
    }

    bool no_seats = true;
    for (const auto& seat : room->seats) if (seat.type != Seat::Type::Empty) no_seats = false;
    if (no_seats) {
      rooms_.erase(room->room_id);
      room_mutexes_.erase(room->room_id);
      return;
    }

    broadcast_room(*room);
    broadcast_game(*room);
  }

  void send_error(const std::string& socket_id, const std::string& text) {
    nebula::poker::ErrorMessage msg;
    msg.set_msg(text);
    send_event(socket_id, "error_msg", msg);
  }

  std::unique_ptr<UserStore> create_user_store() {
#ifdef NEBULA_HAVE_MYSQL
    return std::make_unique<MySqlUserStore>();
#else
    return std::make_unique<MemoryUserStore>();
#endif
  }

  std::unique_ptr<AuthStore> create_auth_store() {
#ifdef NEBULA_HAVE_MYSQL
    return std::make_unique<MySqlAuthStore>();
#else
    return std::make_unique<MemoryAuthStore>();
#endif
  }

  std::unique_ptr<LeaderboardStore> create_leaderboard_store() {
#ifdef NEBULA_HAVE_HIREDIS
    return std::make_unique<HiredisLeaderboardStore>();
#else
    return std::make_unique<MemoryLeaderboardStore>();
#endif
  }

  WsServer server_;
  std::map<connection_hdl, Session, std::owner_less<connection_hdl>> sessions_;
  std::unordered_map<std::string, connection_hdl> socket_by_id_;
  std::unordered_map<std::string, Room> rooms_;
  std::unordered_map<std::string, std::mutex> room_mutexes_;
  std::unordered_map<std::string, UserProfileData> cached_users_;
  std::unordered_map<std::string, AuthSessionData> auth_sessions_;
  std::unordered_map<std::string, GameplaySessionData> gameplay_sessions_;
  std::vector<int64_t> matchmaking_queue_;
  std::unordered_map<std::string, std::vector<BeanQueueEntry>> bean_matchmaking_queues_;
  std::unordered_map<int64_t, std::string> pending_match_rooms_;
  std::unordered_map<int64_t, int> user_mmr_;
  std::unordered_map<int64_t, int64_t> daily_claim_day_;
  std::unordered_map<int64_t, int64_t> ad_reward_day_;
  std::unordered_map<int64_t, int> ad_reward_count_;
  std::unordered_map<int64_t, std::vector<std::string>> user_inventory_;
  std::unordered_map<int64_t, std::string> equipped_table_theme_;
  std::vector<TournamentInfo> tournaments_;
  std::mt19937 rng_;
  int64_t socket_counter_ = 0;
  std::unique_ptr<UserStore> user_store_;
  std::unique_ptr<AuthStore> auth_store_;
  std::unique_ptr<LeaderboardStore> leaderboard_store_;
};

}  // namespace

int main() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;
  const uint16_t port = static_cast<uint16_t>(get_env_int("PORT", 3000));
  PokerServer server;
  server.run(port);
  google::protobuf::ShutdownProtobufLibrary();
  return 0;
}
