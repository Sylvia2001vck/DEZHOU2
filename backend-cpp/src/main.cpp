#include <boost/asio.hpp>

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
#include <unordered_set>
#include <utility>
#include <vector>

#include <google/protobuf/message.h>
#include <nlohmann/json.hpp>

#include "engine/holdem_evaluator.hpp"
#include "engine/pot_manager.hpp"
#include "engine/round_phase.hpp"
#include "engine/holdem_types.hpp"
#include "poker.pb.h"
#include "sha256.hpp"

#ifdef NEBULA_HAVE_MYSQL
#include <mysql.h>
#endif

#ifdef NEBULA_HAVE_HIREDIS
#include <hiredis/hiredis.h>
#endif

namespace net = boost::asio;
using tcp = net::ip::tcp;
namespace engine = nebula::engine;

namespace {

using engine::Card;
using engine::HandEval;
using engine::RoundPhase;

struct HttpRequestView {
  std::string method;
  std::string uri;
  std::string clean_uri;
  std::string body;
  std::string cookie_header;
  std::optional<int64_t> gateway_user_id;
  std::string gateway_login_username;
  std::string gateway_profile_b64;
};

struct HttpReply {
  unsigned status = 404;
  std::string content_type = "text/plain; charset=utf-8";
  std::optional<std::string> set_cookie;
  std::string body;
};

struct GatewaySession;

using Clock = std::chrono::steady_clock;
using Ms = std::chrono::milliseconds;

constexpr int kSeats = 10;
constexpr int64_t kSessionTtlMs = 1000LL * 60LL * 60LL * 24LL * 30LL;
constexpr int64_t kGameplaySessionTtlMs = 1000LL * 60LL * 5LL;
constexpr int64_t kAiTakeoverDelayMs = 1000LL * 60LL;
constexpr std::size_t kRoomEventLogLimit = 600;
constexpr int kSnapshotFlushMs = 75;
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
  int hand_contribution = 0;
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
  std::string round = engine::to_string(RoundPhase::Waiting);
  std::vector<Card> community_cards;
  std::vector<Card> deck;
  int current_max_bet = 0;
  int min_raise = 100;
  int active_seat_idx = -1;
  std::set<int> pending_action_seats;
  std::map<int, PlayerState> players;

  int turn_nonce = 0;
  int last_actor_seat_idx = -1;
  std::unique_ptr<net::steady_timer> ai_timer;

  std::map<std::string, VoiceParticipant> voice_participants;
  std::vector<MatchHandInfo> hand_history;
  std::vector<std::string> activity_log;
  int64_t event_seq = 0;
  std::deque<RoomEventEntry> event_log;
  std::array<std::unique_ptr<net::steady_timer>, kSeats> ai_takeover_timers;
  bool closing = false;
  std::set<std::string> expected_acks;
  std::set<std::string> match_acks;
};

// --- Room JSON snapshots (parity with Node server.js .runtime/rooms/<roomId>.json) ---

bool nebula_room_snapshots_enabled() {
  // Default off: WSL + drvfs (/mnt/d/...) snapshot restore has caused SIGSEGV for some users;
  // set NEBULA_ENABLE_ROOM_SNAPSHOT=1 when you want cold recovery from .runtime/rooms/*.json.
  const std::string v = get_env("NEBULA_ENABLE_ROOM_SNAPSHOT", "0");
  return v != "0" && v != "false" && v != "FALSE";
}

std::filesystem::path nebula_snapshot_dir_path() {
  const std::string custom = get_env("NEBULA_SNAPSHOT_DIR");
  if (!custom.empty()) return std::filesystem::path(custom);
  const std::string root = get_env("NEBULA_REPO_ROOT");
  if (!root.empty()) return std::filesystem::path(root) / ".runtime" / "rooms";
  return std::filesystem::path(".runtime") / "rooms";
}

std::filesystem::path nebula_snapshot_room_file(const std::string& room_id) { return nebula_snapshot_dir_path() / (room_id + ".json"); }

std::string base64_encode(const std::string& in) {
  static const char table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  std::string out;
  out.reserve((in.size() + 2) / 3 * 4);
  unsigned val = 0;
  int valb = -6;
  for (unsigned char c : in) {
    val = (val << 8) + c;
    valb += 8;
    while (valb >= 0) {
      out.push_back(table[(val >> valb) & 63]);
      valb -= 6;
    }
  }
  if (valb > -6) out.push_back(table[((val << 8) >> (valb + 8)) & 63]);
  while (out.size() % 4) out.push_back('=');
  return out;
}

std::string base64_decode(const std::string& in) {
  static const std::string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  std::string out;
  std::vector<int> T(256, -1);
  for (int i = 0; i < 64; ++i) T[static_cast<unsigned char>(chars[static_cast<std::size_t>(i)])] = i;
  int val = 0;
  int valb = -8;
  for (unsigned char c : in) {
    if (c == '=') break;
    if (T[c] == -1) continue;
    val = (val << 6) + T[c];
    valb += 6;
    if (valb >= 0) {
      out.push_back(static_cast<char>((val >> valb) & 0xFF));
      valb -= 8;
    }
  }
  return out;
}

void write_atomic_json_file(const std::filesystem::path& path, const std::string& content) {
  std::filesystem::create_directories(path.parent_path());
  const std::string tmp = path.string() + ".tmp";
  {
    std::ofstream out(tmp, std::ios::binary);
    out << content;
  }
  std::error_code ec;
  std::filesystem::remove(path, ec);
  std::filesystem::rename(tmp, path, ec);
  if (ec) {
    std::cerr << "[snapshot] atomic write failed: " << ec.message() << "\n";
    std::filesystem::remove(tmp, ec);
  }
}

nlohmann::json card_to_json(const Card& c) { return nlohmann::json{{"s", c.s}, {"r", c.r}, {"v", c.v}}; }

void card_from_json(const nlohmann::json& j, Card& c) {
  c = Card{};
  if (!j.is_object()) return;
  c.s = j.value("s", std::string());
  c.r = j.value("r", std::string());
  c.v = j.value("v", 0);
}

nlohmann::json player_to_json(const PlayerState& p) {
  nlohmann::json j;
  j["seatIdx"] = p.seat_idx;
  j["chips"] = p.chips;
  j["currentBet"] = p.current_bet;
  j["handContribution"] = p.hand_contribution;
  j["isFolded"] = p.is_folded;
  j["isBankrupt"] = p.is_bankrupt;
  j["totalBuyIn"] = p.total_buy_in;
  j["pendingRebuy"] = p.pending_rebuy;
  j["sitOutUntilHand"] = p.sit_out_until_hand;
  j["hand"] = nlohmann::json::array();
  for (const auto& c : p.hand) j["hand"].push_back(card_to_json(c));
  return j;
}

void player_from_json(const nlohmann::json& j, PlayerState& p) {
  p = PlayerState{};
  p.seat_idx = j.value("seatIdx", -1);
  p.chips = j.value("chips", 1000);
  p.current_bet = j.value("currentBet", 0);
  p.hand_contribution = j.value("handContribution", 0);
  p.is_folded = j.value("isFolded", false);
  p.is_bankrupt = j.value("isBankrupt", false);
  p.total_buy_in = j.value("totalBuyIn", 1000);
  if (j.contains("totalCommitted") && j["totalCommitted"].is_number_integer()) p.total_buy_in = j["totalCommitted"].get<int>();
  p.pending_rebuy = j.value("pendingRebuy", 0);
  p.sit_out_until_hand = j.value("sitOutUntilHand", 0);
  p.hand.clear();
  if (j.contains("hand") && j["hand"].is_array()) {
    for (const auto& cj : j["hand"]) {
      Card c;
      card_from_json(cj, c);
      p.hand.push_back(c);
    }
  }
}

nlohmann::json seat_to_json(const Seat& s) {
  if (s.type == Seat::Type::Empty) return nullptr;
  if (s.type == Seat::Type::AI) return nlohmann::json{{"type", "ai"}, {"name", s.name}};
  nlohmann::json o = {{"type", "player"},
                       {"socketId", nullptr},
                       {"name", s.name},
                       {"decor", s.decor},
                       {"aiManaged", s.ai_managed}};
  if (!s.client_id.empty()) o["clientId"] = s.client_id;
  else o["clientId"] = nullptr;
  if (!s.gameplay_session_id.empty()) o["sessionId"] = s.gameplay_session_id;
  else o["sessionId"] = nullptr;
  if (!s.reconnect_token.empty()) o["reconnectToken"] = s.reconnect_token;
  else o["reconnectToken"] = nullptr;
  if (s.disconnected_at != 0) o["disconnectedAt"] = s.disconnected_at;
  else o["disconnectedAt"] = nullptr;
  if (s.ai_takeover_at != 0) o["aiTakeoverAt"] = s.ai_takeover_at;
  else o["aiTakeoverAt"] = nullptr;
  if (s.user_id != 0) o["userId"] = s.user_id;
  return o;
}

void seat_from_json(const nlohmann::json& j, Seat& s) {
  s = Seat{};
  if (j.is_null() || !j.is_object()) return;
  const std::string type = j.value("type", "");
  if (type == "ai") {
    s.type = Seat::Type::AI;
    s.name = j.value("name", std::string("AI"));
    return;
  }
  if (type == "player") {
    s.type = Seat::Type::Player;
    s.socket_id.clear();
    s.name = j.value("name", std::string("Player"));
    if (j.contains("clientId") && !j["clientId"].is_null()) s.client_id = j["clientId"].get<std::string>();
    if (j.contains("sessionId") && !j["sessionId"].is_null()) s.gameplay_session_id = j["sessionId"].get<std::string>();
    if (s.gameplay_session_id.empty() && j.contains("gameplaySessionId") && !j["gameplaySessionId"].is_null())
      s.gameplay_session_id = j["gameplaySessionId"].get<std::string>();
    if (j.contains("reconnectToken") && !j["reconnectToken"].is_null()) s.reconnect_token = j["reconnectToken"].get<std::string>();
    if (j.contains("disconnectedAt") && j["disconnectedAt"].is_number_integer()) s.disconnected_at = j["disconnectedAt"].get<int64_t>();
    s.decor = j.value("decor", std::string("none"));
    s.ai_managed = j.value("aiManaged", false);
    if (j.contains("aiTakeoverAt") && j["aiTakeoverAt"].is_number_integer()) s.ai_takeover_at = j["aiTakeoverAt"].get<int64_t>();
    if (j.contains("userId") && j["userId"].is_number_integer()) s.user_id = j["userId"].get<int64_t>();
  }
}

nlohmann::json match_hand_to_json(const MatchHandInfo& h) {
  nlohmann::json jh = {{"handNum", h.hand_num}, {"desc", h.desc}};
  nlohmann::json wins = nlohmann::json::array();
  for (const auto& w : h.winners) wins.push_back({{"seatIdx", w.seat_idx}, {"name", w.name}});
  jh["winners"] = wins;
  return jh;
}

void match_hand_from_json(const nlohmann::json& j, MatchHandInfo& h) {
  h = MatchHandInfo{};
  h.hand_num = j.value("handNum", 0);
  h.desc = j.value("desc", std::string(""));
  if (j.contains("winners") && j["winners"].is_array()) {
    for (const auto& wj : j["winners"]) {
      WinnerInfo w;
      w.seat_idx = wj.value("seatIdx", -1);
      w.name = wj.value("name", std::string(""));
      h.winners.push_back(std::move(w));
    }
  }
}

nlohmann::json room_to_json(const Room& room) {
  nlohmann::json j;
  j["schemaVersion"] = 2;
  j["snapshotFormat"] = "nebula-cpp-1";
  j["roomId"] = room.room_id;
  j["roomCode"] = room.room_code;
  j["roomType"] = room.room_type;
  j["ownerUserId"] = room.owner_user_id;
  j["visibility"] = room.visibility;
  j["status"] = room.status;
  j["maxPlayers"] = room.max_players;
  j["createdAt"] = room.created_at;
  j["lastActiveAt"] = room.last_active_at;
  if (room.empty_since.has_value()) j["emptySince"] = *room.empty_since;
  else j["emptySince"] = nullptr;
  j["hostSocketId"] = nullptr;
  j["host_socket_id"] = nullptr;
  j["seats"] = nlohmann::json::array();
  for (int i = 0; i < kSeats; ++i) j["seats"].push_back(seat_to_json(room.seats[static_cast<std::size_t>(i)]));
  j["started"] = room.started;
  j["totalHands"] = room.total_hands;
  j["initialChips"] = room.initial_chips;
  j["smallBlind"] = room.small_blind;
  j["bigBlind"] = room.big_blind;
  j["handNum"] = room.hand_num;
  j["dealerSeatIdx"] = room.dealer_seat_idx;
  j["sbSeatIdx"] = room.sb_seat_idx >= 0 ? nlohmann::json(room.sb_seat_idx) : nullptr;
  j["bbSeatIdx"] = room.bb_seat_idx >= 0 ? nlohmann::json(room.bb_seat_idx) : nullptr;
  j["pot"] = room.pot;
  j["round"] = room.round;
  j["communityCards"] = nlohmann::json::array();
  for (const auto& c : room.community_cards) j["communityCards"].push_back(card_to_json(c));
  j["deck"] = nlohmann::json::array();
  for (const auto& c : room.deck) j["deck"].push_back(card_to_json(c));
  j["currentMaxBet"] = room.current_max_bet;
  j["minRaise"] = room.min_raise;
  j["activeSeatIdx"] = room.active_seat_idx >= 0 ? nlohmann::json(room.active_seat_idx) : nullptr;
  j["pendingActionSeats"] = nlohmann::json::array();
  for (int ps : room.pending_action_seats) j["pendingActionSeats"].push_back(ps);
  j["players"] = nlohmann::json::array();
  for (const auto& [idx, p] : room.players) {
    nlohmann::json row = nlohmann::json::array();
    row.push_back(idx);
    row.push_back(player_to_json(p));
    j["players"].push_back(row);
  }
  j["turnNonce"] = room.turn_nonce;
  j["lastActorSeatIdx"] = room.last_actor_seat_idx >= 0 ? nlohmann::json(room.last_actor_seat_idx) : nullptr;
  j["handHistory"] = nlohmann::json::array();
  for (const auto& h : room.hand_history) j["handHistory"].push_back(match_hand_to_json(h));
  j["activityLog"] = nlohmann::json::array();
  for (const auto& line : room.activity_log) j["activityLog"].push_back(line);
  j["eventSeq"] = room.event_seq;
  j["eventLog"] = nlohmann::json::array();
  for (const auto& e : room.event_log) {
    nlohmann::json je = {{"seq", e.seq}, {"seatIdx", e.seat_idx}, {"createdAt", e.created_at}};
    je["envelopeB64"] = base64_encode(e.envelope_bytes);
    j["eventLog"].push_back(je);
  }
  j["closing"] = room.closing;
  j["voiceParticipants"] = nlohmann::json::array();
  for (const auto& [sid, vp] : room.voice_participants) {
    j["voiceParticipants"].push_back({{"socketId", sid}, {"seatIdx", vp.seat_idx}, {"name", vp.name}});
  }
  return j;
}

void room_from_json(const nlohmann::json& j, Room& out) {
  out = Room{};
  std::string rid = j.value("roomId", std::string());
  if (rid.empty()) rid = j.value("room_id", std::string());
  out.room_id = rid;
  out.room_code = j.value("roomCode", rid);
  if (out.room_code.empty()) out.room_code = rid;
  out.room_type = j.value("roomType", std::string("friend"));
  if (out.room_type.empty()) out.room_type = "friend";
  out.owner_user_id = j.value("ownerUserId", static_cast<int64_t>(0));
  out.visibility = j.value("visibility", std::string("private"));
  out.status = j.value("status", std::string("waiting"));
  out.max_players = j.value("maxPlayers", kSeats);
  out.created_at = j.value("createdAt", now_ms());
  out.last_active_at = j.value("lastActiveAt", now_ms());
  if (j.contains("emptySince") && j["emptySince"].is_number_integer()) out.empty_since = j["emptySince"].get<int64_t>();
  else out.empty_since = now_ms();
  out.socket_ids.clear();
  out.host_socket_id.clear();
  out.seats.assign(static_cast<std::size_t>(kSeats), Seat{});
  if (j.contains("seats") && j["seats"].is_array()) {
    int i = 0;
    for (const auto& el : j["seats"]) {
      if (i >= kSeats) break;
      seat_from_json(el, out.seats[static_cast<std::size_t>(i)]);
      ++i;
    }
  }
  out.started = j.value("started", false);
  out.total_hands = std::clamp(j.value("totalHands", 5), 1, 50);
  out.initial_chips = std::max(1000, j.value("initialChips", 1000));
  out.small_blind = std::max(1, j.value("smallBlind", 50));
  out.big_blind = std::max(out.small_blind, j.value("bigBlind", 100));
  out.hand_num = std::max(0, j.value("handNum", 0));
  out.dealer_seat_idx = j.value("dealerSeatIdx", 0);
  if (j.contains("sbSeatIdx") && j["sbSeatIdx"].is_number_integer()) out.sb_seat_idx = j["sbSeatIdx"].get<int>();
  else out.sb_seat_idx = -1;
  if (j.contains("bbSeatIdx") && j["bbSeatIdx"].is_number_integer()) out.bb_seat_idx = j["bbSeatIdx"].get<int>();
  else out.bb_seat_idx = -1;
  out.pot = std::max(0, j.value("pot", 0));
  out.round = j.value("round", std::string(engine::to_string(RoundPhase::Waiting)));
  out.community_cards.clear();
  if (j.contains("communityCards") && j["communityCards"].is_array()) {
    for (const auto& cj : j["communityCards"]) {
      Card c;
      card_from_json(cj, c);
      out.community_cards.push_back(c);
    }
  }
  out.deck.clear();
  if (j.contains("deck") && j["deck"].is_array()) {
    for (const auto& cj : j["deck"]) {
      Card c;
      card_from_json(cj, c);
      out.deck.push_back(c);
    }
  }
  out.current_max_bet = std::max(0, j.value("currentMaxBet", 0));
  out.min_raise = std::max(1, j.value("minRaise", out.big_blind));
  if (j.contains("activeSeatIdx") && j["activeSeatIdx"].is_number_integer()) out.active_seat_idx = j["activeSeatIdx"].get<int>();
  else out.active_seat_idx = -1;
  out.pending_action_seats.clear();
  if (j.contains("pendingActionSeats") && j["pendingActionSeats"].is_array()) {
    for (const auto& x : j["pendingActionSeats"]) {
      if (x.is_number_integer()) out.pending_action_seats.insert(x.get<int>());
    }
  }
  out.players.clear();
  if (j.contains("players") && j["players"].is_array()) {
    for (const auto& item : j["players"]) {
      if (!item.is_array() || item.size() < 2) continue;
      const int seat_idx = item[0].get<int>();
      PlayerState p{};
      player_from_json(item[1], p);
      p.seat_idx = seat_idx;
      out.players[seat_idx] = std::move(p);
    }
  }
  out.turn_nonce = std::max(0, j.value("turnNonce", 0));
  if (j.contains("lastActorSeatIdx") && j["lastActorSeatIdx"].is_number_integer()) out.last_actor_seat_idx = j["lastActorSeatIdx"].get<int>();
  else out.last_actor_seat_idx = -1;
  out.hand_history.clear();
  if (j.contains("handHistory") && j["handHistory"].is_array()) {
    for (const auto& el : j["handHistory"]) {
      MatchHandInfo h;
      match_hand_from_json(el, h);
      out.hand_history.push_back(std::move(h));
    }
  }
  out.activity_log.clear();
  if (j.contains("activityLog") && j["activityLog"].is_array()) {
    for (const auto& el : j["activityLog"]) {
      if (el.is_string()) out.activity_log.push_back(el.get<std::string>());
    }
  }
  out.event_seq = j.value("eventSeq", static_cast<int64_t>(0));
  out.event_log.clear();
  if (j.contains("eventLog") && j["eventLog"].is_array()) {
    for (const auto& el : j["eventLog"]) {
      if (!el.is_object()) continue;
      RoomEventEntry e;
      e.seq = el.value("seq", static_cast<int64_t>(0));
      e.seat_idx = el.value("seatIdx", -1);
      e.created_at = el.value("createdAt", static_cast<int64_t>(0));
      if (el.contains("envelopeB64") && el["envelopeB64"].is_string()) e.envelope_bytes = base64_decode(el["envelopeB64"].get<std::string>());
      if (!e.envelope_bytes.empty()) out.event_log.push_back(std::move(e));
    }
  }
  while (out.event_log.size() > kRoomEventLogLimit) out.event_log.pop_front();
  out.closing = j.value("closing", false);
  out.voice_participants.clear();
  out.expected_acks.clear();
  out.match_acks.clear();
}

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
// mysql_real_escape_string requires a live connection; do not call it on mysql_init() only (UB → crash).
std::string mysql_string_literal_escape(const std::string& in) {
  std::string out;
  out.reserve(in.size() * 2);
  for (unsigned char c : in) {
    switch (c) {
      case '\0': out += "\\0"; break;
      case '\n': out += "\\n"; break;
      case '\r': out += "\\r"; break;
      case '\\': out += "\\\\"; break;
      case '\'': out += "\\'"; break;
      case '"': out += "\\\""; break;
      case 26: out += "\\Z"; break;
      default: out += static_cast<char>(c); break;
    }
  }
  return out;
}

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

  std::string escape_sql(const std::string& in) { return mysql_string_literal_escape(in); }

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

  std::string escape_sql(const std::string& in) { return mysql_string_literal_escape(in); }

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
  friend struct GatewaySession;

 public:
  PokerServer()
      : rng_(std::random_device{}()),
        user_store_(create_user_store()),
        auth_store_(create_auth_store()),
        leaderboard_store_(create_leaderboard_store()) {}

  void run(uint16_t port);

 private:
  std::string make_envelope_bytes(const std::string& event_name, const google::protobuf::Message& message) {
    nebula::poker::Envelope env;
    env.set_event_name(event_name);
    env.set_payload(message.SerializeAsString());
    return env.SerializeAsString();
  }

  // Defined after struct GatewaySession (needs complete type for queue_frame).
  void send_envelope_bytes(const std::string& socket_id, const std::string& bytes);

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
    touch_room_snapshot(room);
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
    touch_room_snapshot(room);
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
        std::make_unique<net::steady_timer>(ioc_, std::chrono::milliseconds(kAiTakeoverDelayMs));
    room.ai_takeover_timers[seat_idx]->async_wait([this, &room, seat_idx](const boost::system::error_code& ec) {
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
    touch_room_snapshot(room);
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

  static void send_json(HttpReply& reply, unsigned status, const std::string& body) {
    reply.status = status;
    reply.content_type = "application/json; charset=utf-8";
    reply.body = body;
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
    const auto jit = java_profiles_.find(user_id);
    if (jit != java_profiles_.end()) return jit->second;
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

  void apply_gateway_profile_b64(const std::string& b64) {
    if (b64.empty()) return;
    try {
      const auto pj = nlohmann::json::parse(base64_decode(b64));
      UserProfileData p{};
      p.user_id = pj.value("userId", static_cast<int64_t>(0));
      if (p.user_id <= 0) return;
      p.external_id = pj.value("externalId", std::string());
      p.login_username = pj.value("loginUsername", std::string());
      if (pj.contains("displayName") && pj["displayName"].is_string())
        p.username = pj["displayName"].get<std::string>();
      else
        p.username = pj.value("username", std::string());
      if (p.username.empty()) p.username = p.login_username.empty() ? p.external_id : p.login_username;
      p.avatar = pj.value("avatar", std::string());
      p.gold = pj.value("gold", static_cast<int64_t>(10000));
      p.games_played = pj.value("gamesPlayed", 0);
      p.games_won = pj.value("gamesWon", 0);
      java_profiles_[p.user_id] = p;
      cache_profile(p);
    } catch (...) {}
  }

  std::optional<AuthSessionData> resolve_auth_http(const HttpRequestView& req) {
    if (req.gateway_user_id.has_value() && *req.gateway_user_id > 0) {
      apply_gateway_profile_b64(req.gateway_profile_b64);
      return AuthSessionData{"gateway", *req.gateway_user_id, req.gateway_login_username,
                             std::numeric_limits<int64_t>::max()};
    }
    return find_http_session(req.cookie_header);
  }

  void bind_gateway_or_cookie_session(Session& session, const nlohmann::json& j) {
    int64_t gid = 0;
    if (j.contains("gateway_user_id") && !j["gateway_user_id"].is_null()) {
      if (j["gateway_user_id"].is_number_integer()) gid = j["gateway_user_id"].get<int64_t>();
      else if (j["gateway_user_id"].is_number_unsigned())
        gid = static_cast<int64_t>(j["gateway_user_id"].get<std::uint64_t>());
    }
    if (gid > 0) {
      apply_gateway_profile_b64(j.value("gateway_profile_b64", ""));
      const std::string login = j.value("gateway_login_username", "");
      session.user_id = gid;
      session.authenticated = true;
      session.name = login;
      if (const auto prof = get_profile_by_user_id(gid); prof.has_value()) session.profile = *prof;
      return;
    }
    bind_http_session_to_socket(session, j.value("cookie_header", ""));
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

  bool serve_static_file(HttpReply& reply, const std::string& raw_uri) {
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
    reply.status = 200;
    reply.content_type = mime_for_path(path);
    reply.body = body;
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
    touch_room_snapshot(room);
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

  void handle_http_request(const HttpRequestView& req, HttpReply& reply) {
    const std::string& uri = req.uri;
    const std::string& clean_uri = req.clean_uri;
    const std::string& method = req.method;
    const std::string& body = req.body;
    const std::string& cookie_header = req.cookie_header;
    // Cheap probes first (no form/cookie parsing) so liveness checks stay stable.
    if (clean_uri == "/healthz") {
      reply.status = 200;
      reply.content_type = "text/plain; charset=utf-8";
      reply.body = "ok";
      return;
    }
    if (clean_uri == "/readyz") {
      reply.status = 200;
      reply.content_type = "application/json; charset=utf-8";
      reply.body = "{\"ok\":true}";
      return;
    }
    if (clean_uri == "/api/internal/match-notify" && method == "POST") {
      try {
        const auto bodyj = nlohmann::json::parse(body);
        if (bodyj.value("secret", "") != get_env("NEBULA_BRIDGE_SECRET", "dev-bridge-secret-change-me")) {
          send_json(reply, 403, "{\"ok\":false,\"message\":\"Forbidden\"}");
          return;
        }
        const std::string room_code = to_upper_room_code(bodyj.value("roomCode", ""));
        const int threshold = bodyj.value("threshold", 6);
        if (!bodyj.contains("userIds") || !bodyj["userIds"].is_array()) {
          send_json(reply, 400, "{\"ok\":false,\"message\":\"userIds required\"}");
          return;
        }
        for (const auto& el : bodyj["userIds"]) {
          if (!el.is_number_integer() && !el.is_number_unsigned()) continue;
          const int64_t uid =
              el.is_number_integer() ? el.get<int64_t>() : static_cast<int64_t>(el.get<std::uint64_t>());
          if (uid <= 0) continue;
          pending_match_rooms_[uid] = room_code;
          for (auto& [_, session] : sessions_) {
            if (!session.authenticated || session.user_id != uid) continue;
            nebula::poker::MatchmakingStatus status;
            status.set_state("matched");
            status.set_roomcode(room_code);
            status.set_queuedplayers(threshold);
            status.set_threshold(threshold);
            send_event(session.socket_id, "matchmaking_status", status);
            nebula::poker::MatchFound found;
            found.set_roomcode(room_code);
            found.set_queuedplayers(threshold);
            send_event(session.socket_id, "match_found", found);
          }
        }
        send_json(reply, 200, "{\"ok\":true}");
      } catch (...) {
        send_json(reply, 400, "{\"ok\":false,\"message\":\"Bad JSON\"}");
      }
      return;
    }
    const auto form = parse_form_body(body);
    const auto auth_session = resolve_auth_http(req);
    if (uri.rfind("/api/leaderboard", 0) == 0) {
      std::string type = "coins";
      auto pos = uri.find("type=");
      if (pos != std::string::npos) type = uri.substr(pos + 5);
      std::string lb_body = leaderboard_store_->to_json(type, 20);
      reply.status = 200;
      reply.content_type = "application/json; charset=utf-8";
      reply.body = lb_body;
      return;
    }
    if (clean_uri == "/api/home/overview" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(reply, 200, home_overview_json(*profile));
      return;
    }
    if (clean_uri == "/api/profile/me" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(reply, 200,
                "{\"ok\":true,\"profile\":" + user_profile_json(*profile) + ",\"favoriteMode\":\"friend-room\"}");
      return;
    }
    if (clean_uri == "/api/beans/profile" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      send_json(reply, 200,
                "{\"ok\":true,\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/beans/claim-daily" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int64_t day = current_day_bucket();
      if (daily_claim_day_[profile->user_id] == day) {
        send_json(reply, 409, "{\"ok\":false,\"message\":\"Daily beans already claimed.\"}");
        return;
      }
      daily_claim_day_[profile->user_id] = day;
      profile->gold += 600;
      cache_profile(*profile);
      send_json(reply, 200,
                "{\"ok\":true,\"rewardBeans\":600,\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/beans/ad-reward" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int64_t day = current_day_bucket();
      if (ad_reward_day_[profile->user_id] != day) {
        ad_reward_day_[profile->user_id] = day;
        ad_reward_count_[profile->user_id] = 0;
      }
      if (ad_reward_count_[profile->user_id] >= 3) {
        send_json(reply, 409, "{\"ok\":false,\"message\":\"Ad rewards capped for today.\"}");
        return;
      }
      ad_reward_count_[profile->user_id] += 1;
      profile->gold += 400;
      cache_profile(*profile);
      send_json(reply, 200,
                "{\"ok\":true,\"rewardBeans\":400,\"remaining\":" + std::to_string(3 - ad_reward_count_[profile->user_id]) +
                ",\"beanProfile\":" + bean_profile_json(*profile) + "}");
      return;
    }
    if (clean_uri == "/api/inventory" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      send_json(reply, 200, inventory_json(auth_session->user_id));
      return;
    }
    if (clean_uri == "/api/inventory/equip" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string item_id = form.count("itemId") ? form.at("itemId") : "";
      auto& items = user_inventory(auth_session->user_id);
      if (std::find(items.begin(), items.end(), item_id) == items.end()) {
        send_json(reply, 404, "{\"ok\":false,\"message\":\"Item not owned.\"}");
        return;
      }
      equipped_table_theme_[auth_session->user_id] = item_id;
      send_json(reply, 200,
                "{\"ok\":true,\"equippedTable\":\"" + escape_json(item_id) + "\"}");
      return;
    }
    if (clean_uri == "/api/tournaments" && method == "GET") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      send_json(reply, 200, tournaments_json(auth_session->user_id));
      return;
    }
    if (clean_uri.rfind("/api/tournaments/", 0) == 0 && clean_uri.size() > 24 &&
        clean_uri.substr(clean_uri.size() - 9) == "/register" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      ensure_tournaments_seeded();
      const std::string tournament_id = clean_uri.substr(std::string("/api/tournaments/").size(),
                                                         clean_uri.size() - std::string("/api/tournaments/").size() - std::string("/register").size());
      auto it = std::find_if(tournaments_.begin(), tournaments_.end(), [&](const TournamentInfo& item) {
        return item.id == tournament_id;
      });
      if (it == tournaments_.end()) {
        send_json(reply, 404, "{\"ok\":false,\"message\":\"Tournament not found.\"}");
        return;
      }
      if (static_cast<int>(it->registered_users.size()) >= it->max_players) {
        send_json(reply, 409, "{\"ok\":false,\"message\":\"Tournament is full.\"}");
        return;
      }
      it->registered_users.insert(auth_session->user_id);
      send_json(reply, 200,
                "{\"ok\":true,\"registered\":true,\"tournamentId\":\"" + escape_json(it->id) + "\"}");
      return;
    }
    if (clean_uri == "/api/friend-rooms/create" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int total_hands = form.count("totalHands") ? std::max(1, std::atoi(form.at("totalHands").c_str())) : 5;
      const int initial_chips = form.count("initialChips") ? std::max(1000, std::atoi(form.at("initialChips").c_str())) : 1000;
      Room& room = create_room_for_user(*profile, "private", total_hands, initial_chips, "friend");
      send_json(reply, 200,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room.room_code) + "\",\"room\":" + room_summary_json(room) + "}");
      return;
    }
    if (clean_uri == "/api/friend-rooms/join" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string room_code = to_upper_room_code(form.count("roomCode") ? form.at("roomCode") : "");
      Room* room = get_room(room_code);
      if (!room || room->room_type != "friend") {
        send_json(reply, 404, "{\"ok\":false,\"message\":\"Friend room not found.\"}");
        return;
      }
      send_json(reply, 200,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room->room_code) + "\",\"room\":" + room_summary_json(*room) + "}");
      return;
    }
    if (clean_uri.rfind("/api/friend-rooms/", 0) == 0 && clean_uri.size() > 22 &&
        clean_uri.substr(clean_uri.size() - 8) == "/history" && method == "GET") {
      const std::string room_code = clean_uri.substr(std::string("/api/friend-rooms/").size(),
                                                     clean_uri.size() - std::string("/api/friend-rooms/").size() - std::string("/history").size());
      Room* room = get_room(to_upper_room_code(room_code));
      if (!room || room->room_type != "friend") {
        send_json(reply, 404, "{\"ok\":false,\"message\":\"Friend room not found.\"}");
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
      send_json(reply, 200, out.str());
      return;
    }
    if (clean_uri == "/api/rooms/create" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const auto profile = get_profile_by_user_id(auth_session->user_id);
      if (!profile.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Session expired.\"}");
        return;
      }
      const int total_hands = form.count("totalHands") ? std::max(1, std::atoi(form.at("totalHands").c_str())) : 5;
      const int initial_chips = form.count("initialChips") ? std::max(1000, std::atoi(form.at("initialChips").c_str())) : 1000;
      const std::string visibility = form.count("visibility") ? form.at("visibility") : "private";
      const std::string room_type = form.count("roomType") ? form.at("roomType") : "friend";
      const std::string match_id = form.count("matchId") ? form.at("matchId") : "";
      const bool trace_match_id = get_env("NEBULA_MATCH_ID_TRACE", "") == "1";
      if (!match_id.empty()) {
        const auto mit = match_id_to_room_code_.find(match_id);
        if (mit != match_id_to_room_code_.end()) {
          Room* existing = get_room(mit->second);
          if (existing) {
            if (trace_match_id) {
              std::cerr << "[nebula] rooms/create idempotent matchId=" << match_id << " room=" << existing->room_code
                        << "\n";
            }
            send_json(reply, 200, "{\"ok\":true,\"roomCode\":\"" + escape_json(existing->room_code) +
                                        "\",\"room\":" + room_summary_json(*existing) + "}");
            return;
          }
          match_id_to_room_code_.erase(mit);
        }
      }
      if (trace_match_id && !match_id.empty()) {
        std::cerr << "[nebula] rooms/create new room for matchId=" << match_id << " (create_room_for_user)\n";
      }
      Room& room = create_room_for_user(*profile, visibility, total_hands, initial_chips, room_type);
      if (room_type == "bean_match") {
        room.status = "matching";
        room.visibility = "matchmaking";
      }
      if (!match_id.empty()) {
        match_id_to_room_code_[match_id] = room.room_code;
      }
      send_json(reply, 200,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room.room_code) + "\",\"room\":" + room_summary_json(room) + "}");
      return;
    }
    if (clean_uri == "/api/rooms/join" && method == "POST") {
      if (!auth_session.has_value()) {
        send_json(reply, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
        return;
      }
      const std::string room_code = to_upper_room_code(form.count("roomCode") ? form.at("roomCode") : "");
      Room* room = get_room(room_code);
      if (!room) {
        send_json(reply, 404, "{\"ok\":false,\"message\":\"Room not found.\"}");
        return;
      }
      send_json(reply, 200,
                "{\"ok\":true,\"roomCode\":\"" + escape_json(room->room_code) + "\",\"room\":" + room_summary_json(*room) + "}");
      return;
    }
    if (serve_static_file(reply, uri)) return;

    reply.status = 404;
    reply.content_type = "text/plain; charset=utf-8";
    reply.body = "Not Found";
  }

  /// Returns false if the connection is being closed (do not schedule another async_read).
  /// `data`/`len` refer to one complete WebSocket binary frame (same bytes as ParseFromString).
  bool on_ws_message(const std::string& socket_id, const char* data, std::size_t len) {
    auto sit = sessions_.find(socket_id);
    if (sit == sessions_.end()) return false;
    if (!data || len == 0) {
      close_ws_protocol_error(socket_id);
      return false;
    }

    nebula::poker::Envelope env;
    if (!env.ParseFromArray(data, static_cast<int>(len))) {
      close_ws_protocol_error(socket_id);
      return false;
    }

    const std::string& event_name = env.event_name();
    Session& session = sit->second;

    if (event_name == "join_room") {
      nebula::poker::JoinRoomRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_join_room(session, req);
    } else if (event_name == "take_seat") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_take_seat(session, req.seatidx(), req.reconnecttoken());
    } else if (event_name == "toggle_ai") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_toggle_ai(session, req.seatidx());
    } else if (event_name == "kick_seat") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_kick_seat(session, req.seatidx());
    } else if (event_name == "start_game") {
      nebula::poker::StartGameRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_start_game(session, req);
    } else if (event_name == "action") {
      nebula::poker::ActionRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_player_action(session, req);
    } else if (event_name == "next_hand") {
      handle_next_hand(session);
    } else if (event_name == "rebuy") {
      nebula::poker::AmountRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_rebuy(session, req.amount());
    } else if (event_name == "rebuy_request") {
      nebula::poker::AmountRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_rebuy_request(session, req.amount());
    } else if (event_name == "rebuy_approve") {
      nebula::poker::RebuyApproveRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_rebuy_approve(session, req.seatidx(), req.amount());
    } else if (event_name == "rebuy_deny") {
      nebula::poker::SeatRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_rebuy_deny(session, req.seatidx());
    } else if (event_name == "set_decor") {
      nebula::poker::DecorRequest req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_set_decor(session, req.decor());
    } else if (event_name == "ack_match_over") {
      handle_ack_match_over(session);
    } else if (event_name == "voice_join") {
      handle_voice_join(session);
    } else if (event_name == "voice_leave") {
      handle_voice_leave(session);
    } else if (event_name == "voice_signal") {
      nebula::poker::VoiceSignalMessage req;
      if (!req.ParseFromString(env.payload())) {
        close_ws_protocol_error(socket_id);
        return false;
      }
      handle_voice_signal(session, req);
    }
    return true;
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
    return !socket_id.empty() && active_gateway_clients_.count(socket_id) > 0;
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

  int place_bet(Room& room, int seat_idx, int amount) {
    PlayerState* p = get_player(room, seat_idx);
    if (!p || p->is_folded || p->is_bankrupt) return 0;
    int real = std::max(0, std::min(amount, p->chips));
    p->chips -= real;
    p->current_bet += real;
    p->hand_contribution += real;
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
    room.round = engine::to_string(RoundPhase::PreFlop);
    room.community_cards.clear();
    room.deck = fresh_deck();
    room.current_max_bet = 0;
    room.pending_action_seats.clear();
    room.turn_nonce += 1;
    room.last_actor_seat_idx = -1;
    for (auto& [seat_idx, p] : room.players) {
      p.hand.clear();
      p.current_bet = 0;
      p.hand_contribution = 0;
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

  std::vector<int> winners_by_odd_chip_priority(const Room& room, const std::vector<int>& winners) {
    std::vector<int> ordered = winners;
    std::sort(ordered.begin(), ordered.end(), [&](int a, int b) {
      const int first_odd_chip_seat = (room.dealer_seat_idx + 1) % kSeats;
      const int da = (a - first_odd_chip_seat + kSeats) % kSeats;
      const int db = (b - first_odd_chip_seat + kSeats) % kSeats;
      if (da != db) return da < db;
      return a < b;
    });
    return ordered;
  }

  std::string join_winner_names(const Room& room, const std::vector<int>& winners) {
    std::ostringstream names;
    for (size_t i = 0; i < winners.size(); ++i) {
      if (i) names << " & ";
      names << room.seats[winners[i]].name;
    }
    return names.str();
  }

  void proceed_to_next_street(Room& room) {
    for (auto& [_, p] : room.players) p.current_bet = 0;
    room.current_max_bet = 0;
    const RoundPhase phase = engine::round_phase_from_string(room.round);
    if (phase == RoundPhase::PreFlop) {
      room.round = engine::to_string(RoundPhase::Flop);
      deal_community(room, 3);
    } else if (phase == RoundPhase::Flop) {
      room.round = engine::to_string(RoundPhase::Turn);
      deal_community(room, 1);
    } else if (phase == RoundPhase::Turn) {
      room.round = engine::to_string(RoundPhase::River);
      deal_community(room, 1);
    } else {
      room.round = engine::to_string(RoundPhase::Showdown);
    }
    if (engine::round_phase_from_string(room.round) == RoundPhase::Showdown) {
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
      room.round = engine::to_string(RoundPhase::HandOver);
      nebula::poker::HandOver msg;
      msg.set_handnum(room.hand_num);
      msg.set_totalhands(room.total_hands);
      msg.set_desc("No active players");
      send_hand_over(room, msg, {});
      return;
    }

    std::vector<engine::PotContributor> contributors;
    contributors.reserve(room.players.size());
    int tracked_total_pot = 0;
    for (const auto& [seat_idx, p] : room.players) {
      if (p.hand_contribution <= 0) continue;
      contributors.push_back(engine::PotContributor{seat_idx, p.hand_contribution, !p.is_folded});
      tracked_total_pot += p.hand_contribution;
    }
    if (!contributors.empty()) room.pot = tracked_total_pot;
    std::vector<engine::Pot> pots = engine::build_pots(contributors);

    std::map<int, int> awarded_by_seat;
    std::vector<int> hand_winner_order;
    auto note_winner = [&](int seat_idx, int amount) {
      if (amount <= 0) return;
      awarded_by_seat[seat_idx] += amount;
      if (std::find(hand_winner_order.begin(), hand_winner_order.end(), seat_idx) == hand_winner_order.end()) {
        hand_winner_order.push_back(seat_idx);
      }
    };

    std::string hand_desc = "All others folded";
    if (in_hand.size() == 1) {
      const int winner = in_hand.front();
      int awarded = 0;
      for (const auto& pot : pots) awarded += pot.amount;
      PlayerState* p = get_player(room, winner);
      if (p) p->chips += awarded;
      note_winner(winner, awarded);
      broadcast_activity(room, "Game Over. " + room.seats[winner].name + " wins (all others folded)!");
    } else {
      while (room.community_cards.size() < 5 && !room.deck.empty()) deal_community(room, 1);

      struct EvalRow {
        int seat_idx;
        HandEval hand;
      };
      std::vector<EvalRow> evals;
      for (int seat_idx : in_hand) {
        PlayerState* p = get_player(room, seat_idx);
        if (!p) continue;
        std::vector<Card> cards = p->hand;
        cards.insert(cards.end(), room.community_cards.begin(), room.community_cards.end());
        evals.push_back({seat_idx, engine::best_hand(cards)});
      }

      const bool has_side_pots = pots.size() > 1;
      for (size_t pot_index = 0; pot_index < pots.size(); ++pot_index) {
        const auto& pot = pots[pot_index];
        std::vector<int> eligible;
        for (int seat_idx : pot.eligible_seat_indices) {
          if (std::any_of(evals.begin(), evals.end(), [&](const EvalRow& row) { return row.seat_idx == seat_idx; })) {
            eligible.push_back(seat_idx);
          }
        }
        if (eligible.empty()) continue;

        const EvalRow* best_row = nullptr;
        for (const auto& row : evals) {
          if (std::find(eligible.begin(), eligible.end(), row.seat_idx) == eligible.end()) continue;
          if (best_row == nullptr || engine::compare_hands(row.hand, best_row->hand) > 0) {
            best_row = &row;
          }
        }
        if (best_row == nullptr) continue;

        std::vector<int> winners;
        for (const auto& row : evals) {
          if (std::find(eligible.begin(), eligible.end(), row.seat_idx) == eligible.end()) continue;
          if (engine::compare_hands(row.hand, best_row->hand) == 0) winners.push_back(row.seat_idx);
        }
        if (winners.empty()) continue;

        const int share = pot.amount / static_cast<int>(winners.size());
        int odd_chips = pot.amount % static_cast<int>(winners.size());
        std::vector<int> odd_chip_order = winners_by_odd_chip_priority(room, winners);
        for (int seat_idx : winners) {
          PlayerState* p = get_player(room, seat_idx);
          if (p) p->chips += share;
          note_winner(seat_idx, share);
        }
        for (int seat_idx : odd_chip_order) {
          if (odd_chips-- <= 0) break;
          PlayerState* p = get_player(room, seat_idx);
          if (p) p->chips += 1;
          note_winner(seat_idx, 1);
        }

        const std::string pot_label = pot_index == 0 ? "main pot" : "side pot #" + std::to_string(pot_index);
        broadcast_activity(
            room,
            join_winner_names(room, winners) + " wins " + pot_label + " $" + std::to_string(pot.amount) + " with " +
                best_row->hand.desc + "!");
        if (!has_side_pots && pot_index == 0) {
          hand_desc = best_row->hand.desc;
        } else {
          hand_desc = "Side pots settled";
        }
      }
    }

    room.pot = 0;
    room.round = engine::to_string(RoundPhase::HandOver);
    nebula::poker::HandOver msg;
    msg.set_handnum(room.hand_num);
    msg.set_totalhands(room.total_hands);
    msg.set_desc(hand_desc);
    for (int seat_idx : hand_winner_order) {
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
      room.round = engine::to_string(RoundPhase::Showdown);
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
      room.ai_timer = std::make_unique<net::steady_timer>(ioc_, std::chrono::milliseconds(700));
      int ai_seat_idx = room.active_seat_idx;
      room.ai_timer->async_wait([this, &room, ai_seat_idx](const boost::system::error_code& ec) {
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
      const int requested_raise_by = action.raiseby();
      if (requested_raise_by < room.min_raise) {
        reject_illegal_action(
            actor_socket_id,
            "raise is below minimum re-raise (" + std::to_string(room.min_raise) + ")");
        return;
      }
      const int raise_by = requested_raise_by;
      if (p->chips < call_amt + raise_by) {
        reject_illegal_action(actor_socket_id, "insufficient chips for requested raise");
        return;
      }
      place_bet(room, seat_idx, call_amt + raise_by);
      room.current_max_bet = p->current_bet;
      room.min_raise = raise_by;
      room.pending_action_seats.clear();
      for (int idx : get_actable_seats(room)) room.pending_action_seats.insert(idx);
      room.pending_action_seats.erase(seat_idx);
      broadcast_activity(room, room.seats[seat_idx].name + " Raises to " + std::to_string(p->current_bet) + ".");
      broadcast_player_action(room, seat_idx, "RAISE " + std::to_string(p->current_bet));
    } else if (type == "allin") {
      const int prev_max_bet = room.current_max_bet;
      const int prev_min_raise = room.min_raise;
      int all = p->chips;
      if (all <= 0) {
        reject_illegal_action(actor_socket_id, "no chips left for all-in");
        return;
      } else {
        place_bet(room, seat_idx, all);
        if (p->current_bet > prev_max_bet) {
          room.current_max_bet = p->current_bet;
          const int raise_by = p->current_bet - prev_max_bet;
          if (raise_by >= prev_min_raise) {
            room.min_raise = raise_by;
            room.pending_action_seats.clear();
            for (int idx : get_actable_seats(room)) room.pending_action_seats.insert(idx);
            room.pending_action_seats.erase(seat_idx);
            broadcast_activity(room, room.seats[seat_idx].name + " ALL-IN to " + std::to_string(p->current_bet) + ".");
            broadcast_player_action(room, seat_idx, "ALL-IN " + std::to_string(p->current_bet));
          } else {
            room.pending_action_seats.erase(seat_idx);
            broadcast_activity(
                room,
                room.seats[seat_idx].name + " is ALL-IN to " + std::to_string(p->current_bet) +
                    " (short raise; betting not reopened).");
            broadcast_player_action(room, seat_idx, "ALL-IN " + std::to_string(p->current_bet));
          }
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
    room.round = engine::to_string(RoundPhase::Waiting);
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
    obliterate_room_snapshot(room.room_id);
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
      if (engine::round_phase_from_string(room.round) != RoundPhase::HandOver) request_turn(room);
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
        obliterate_room_snapshot(room->room_id);
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
      obliterate_room_snapshot(room->room_id);
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

  // Single-threaded model: one io_context::run() thread — all handlers touch sessions_/rooms_
  // on that thread. If you scale to multiple io_context worker threads, add a mutex (or
  // per-connection strand) around shared maps before cross-thread access.
  net::io_context ioc_;
  std::optional<tcp::acceptor> acceptor_;
  std::unordered_map<std::string, Session> sessions_;
  std::shared_ptr<GatewaySession> gateway_session_;
  std::unordered_set<std::string> active_gateway_clients_;
  std::unordered_set<std::string> gateway_tracked_socket_ids_;
  std::unordered_map<std::string, std::unique_ptr<net::steady_timer>> snapshot_timers_;

  void touch_room_snapshot(Room& room);
  void flush_room_snapshot_to_disk(const std::string& room_id);
  void obliterate_room_snapshot(const std::string& room_id);
  void restore_room_snapshots_from_disk();

  void do_accept();
  void attach_gateway(const std::shared_ptr<GatewaySession>& sess);
  void detach_gateway(const std::shared_ptr<GatewaySession>& sess);
  void remove_session(const std::string& socket_id);
  void on_gateway_down_json(GatewaySession& gw, const nlohmann::json& msg);
  void close_ws_protocol_error(const std::string& socket_id);
  std::unordered_map<std::string, Room> rooms_;
  std::unordered_map<std::string, std::mutex> room_mutexes_;
  std::unordered_map<std::string, UserProfileData> cached_users_;
  std::unordered_map<std::string, AuthSessionData> auth_sessions_;
  std::unordered_map<std::string, GameplaySessionData> gameplay_sessions_;
  std::unordered_map<int64_t, std::string> pending_match_rooms_;
  /** Idempotent bean_match room create: same Java match_id returns the same room. */
  std::unordered_map<std::string, std::string> match_id_to_room_code_;
  std::unordered_map<int64_t, UserProfileData> java_profiles_;
  std::unordered_map<int64_t, int> user_mmr_;
  std::unordered_map<int64_t, int64_t> daily_claim_day_;
  std::unordered_map<int64_t, int64_t> ad_reward_day_;
  std::unordered_map<int64_t, int> ad_reward_count_;
  std::unordered_map<int64_t, std::vector<std::string>> user_inventory_;
  std::unordered_map<int64_t, std::string> equipped_table_theme_;
  std::vector<TournamentInfo> tournaments_;
  std::mt19937 rng_;
  std::unique_ptr<UserStore> user_store_;
  std::unique_ptr<AuthStore> auth_store_;
  std::unique_ptr<LeaderboardStore> leaderboard_store_;
};

struct GatewaySession : std::enable_shared_from_this<GatewaySession> {
  PokerServer* server_{nullptr};
  tcp::socket socket_;
  std::deque<std::string> out_queue_;
  bool writing_{false};
  std::array<char, 4> hdr_{};
  std::vector<char> body_;
  std::uint32_t expect_len_{0};

  static constexpr std::uint32_t kMaxFrame = 32U * 1024U * 1024U;

  GatewaySession(PokerServer* s, tcp::socket&& sock) : server_(s), socket_(std::move(sock)) {}

  void start();
  void begin_read_frame();

  void queue_frame(std::string payload) {
    if (payload.size() > kMaxFrame) return;
    std::string framed;
    framed.reserve(4 + payload.size());
    const auto n = static_cast<std::uint32_t>(payload.size());
    framed.push_back(static_cast<char>((n >> 24) & 0xff));
    framed.push_back(static_cast<char>((n >> 16) & 0xff));
    framed.push_back(static_cast<char>((n >> 8) & 0xff));
    framed.push_back(static_cast<char>(n & 0xff));
    framed.append(payload);
    out_queue_.push_back(std::move(framed));
    pump_write();
  }

  void pump_write() {
    if (writing_ || out_queue_.empty()) return;
    writing_ = true;
    auto self = shared_from_this();
    net::async_write(socket_, net::buffer(out_queue_.front()),
                     [this, self](const boost::system::error_code& ec, std::size_t) {
                       writing_ = false;
                       if (ec) {
                         server_->detach_gateway(self);
                         return;
                       }
                       out_queue_.pop_front();
                       pump_write();
                     });
  }
};

void GatewaySession::start() {
  server_->attach_gateway(shared_from_this());
  begin_read_frame();
}

void GatewaySession::begin_read_frame() {
  auto self = shared_from_this();
  net::async_read(socket_, net::buffer(hdr_.data(), hdr_.size()),
                  [this, self](const boost::system::error_code& ec, std::size_t) {
                    if (ec) {
                      server_->detach_gateway(self);
                      return;
                    }
                    expect_len_ = (static_cast<std::uint32_t>(static_cast<unsigned char>(hdr_[0])) << 24) |
                                  (static_cast<std::uint32_t>(static_cast<unsigned char>(hdr_[1])) << 16) |
                                  (static_cast<std::uint32_t>(static_cast<unsigned char>(hdr_[2])) << 8) |
                                  static_cast<std::uint32_t>(static_cast<unsigned char>(hdr_[3]));
                    if (expect_len_ == 0 || expect_len_ > kMaxFrame) {
                      server_->detach_gateway(self);
                      return;
                    }
                    body_.resize(expect_len_);
                    net::async_read(socket_, net::buffer(body_.data(), body_.size()),
                                    [this, self](const boost::system::error_code& ec2, std::size_t) {
                                      if (ec2) {
                                        server_->detach_gateway(self);
                                        return;
                                      }
                                      try {
                                        nlohmann::json j =
                                            nlohmann::json::parse(std::string(body_.begin(), body_.end()));
                                        server_->on_gateway_down_json(*self, j);
                                      } catch (const std::exception&) {
                                        server_->detach_gateway(self);
                                        return;
                                      }
                                      begin_read_frame();
                                    });
                  });
}

void PokerServer::send_envelope_bytes(const std::string& socket_id, const std::string& bytes) {
  if (!gateway_session_) return;
  nlohmann::json j;
  j["type"] = "to_client_envelope";
  j["socket_id"] = socket_id;
  j["envelope_b64"] = base64_encode(bytes);
  gateway_session_->queue_frame(j.dump());
}

void PokerServer::attach_gateway(const std::shared_ptr<GatewaySession>& sess) {
  gateway_session_ = sess;
}

void PokerServer::detach_gateway(const std::shared_ptr<GatewaySession>& sess) {
  if (!gateway_session_ || gateway_session_ != sess) return;
  gateway_session_.reset();
  const std::vector<std::string> ids(gateway_tracked_socket_ids_.begin(), gateway_tracked_socket_ids_.end());
  gateway_tracked_socket_ids_.clear();
  active_gateway_clients_.clear();
  for (const auto& sid : ids) {
    auto it = sessions_.find(sid);
    if (it == sessions_.end()) continue;
    handle_disconnect(it->second);
    sessions_.erase(it);
  }
}

void PokerServer::remove_session(const std::string& socket_id) {
  if (socket_id.empty()) return;
  active_gateway_clients_.erase(socket_id);
  gateway_tracked_socket_ids_.erase(socket_id);
  auto it = sessions_.find(socket_id);
  if (it == sessions_.end()) return;
  handle_disconnect(it->second);
  sessions_.erase(it);
}

void PokerServer::on_gateway_down_json(GatewaySession& /*gw*/, const nlohmann::json& j) {
  if (!j.contains("type") || !j["type"].is_string()) return;
  const std::string t = j["type"].get<std::string>();
  if (t == "client_register") {
    const std::string socket_id = j.value("socket_id", "");
    if (socket_id.empty()) return;
    if (sessions_.count(socket_id) > 0) remove_session(socket_id);
    Session session;
    session.socket_id = socket_id;
    bind_gateway_or_cookie_session(session, j);
    sessions_[socket_id] = std::move(session);
    active_gateway_clients_.insert(socket_id);
    gateway_tracked_socket_ids_.insert(socket_id);
    nebula::poker::TextMessage tmsg;
    tmsg.set_msg(socket_id);
    send_event(socket_id, "connect", tmsg);
    send_auth_state(socket_id, sessions_[socket_id]);
    return;
  }
  if (t == "client_unregister") {
    remove_session(j.value("socket_id", ""));
    return;
  }
  if (t == "client_envelope") {
    const std::string sid = j.value("socket_id", "");
    const std::string env = base64_decode(j.value("envelope_b64", ""));
    (void)on_ws_message(sid, env.data(), env.size());
    return;
  }
  if (t == "api_request") {
    if (!gateway_session_) return;
    HttpRequestView v;
    v.method = j.value("method", "GET");
    v.uri = j.value("uri", "/");
    const std::size_t q = v.uri.find('?');
    v.clean_uri = q == std::string::npos ? v.uri : v.uri.substr(0, q);
    v.body = base64_decode(j.value("body_b64", ""));
    v.cookie_header = j.value("cookie_header", "");
    if (j.contains("gateway_user_id") && !j["gateway_user_id"].is_null()) {
      if (j["gateway_user_id"].is_number_integer()) {
        v.gateway_user_id = j["gateway_user_id"].get<int64_t>();
      } else if (j["gateway_user_id"].is_number_unsigned()) {
        v.gateway_user_id = static_cast<int64_t>(j["gateway_user_id"].get<std::uint64_t>());
      }
    }
    v.gateway_login_username = j.value("gateway_login_username", "");
    v.gateway_profile_b64 = j.value("gateway_profile_b64", "");
    std::uint64_t request_id = 0;
    if (j.contains("request_id") && !j["request_id"].is_null()) {
      if (j["request_id"].is_number_unsigned()) {
        request_id = j["request_id"].get<std::uint64_t>();
      } else if (j["request_id"].is_number_integer()) {
        request_id = static_cast<std::uint64_t>(j["request_id"].get<std::int64_t>());
      }
    }
    HttpReply rep;
    try {
      handle_http_request(v, rep);
    } catch (const std::exception& e) {
      std::cerr << "[api] handle_http_request: " << e.what() << "\n";
      rep.status = 500;
      rep.content_type = "text/plain; charset=utf-8";
      rep.body = "Internal Server Error";
    } catch (...) {
      std::cerr << "[api] handle_http_request: unknown exception\n";
      rep.status = 500;
      rep.content_type = "text/plain; charset=utf-8";
      rep.body = "Internal Server Error";
    }
    nlohmann::json out;
    out["type"] = "api_response";
    out["request_id"] = request_id;
    out["status"] = static_cast<int>(rep.status);
    out["content_type"] = rep.content_type;
    out["body_b64"] = base64_encode(rep.body);
    out["set_cookie_header"] = rep.set_cookie ? *rep.set_cookie : "";
    gateway_session_->queue_frame(out.dump());
    return;
  }
  if (t == "ping") {
    if (!gateway_session_) return;
    std::int64_t nonce = 0;
    if (j.contains("nonce") && j["nonce"].is_number_integer()) {
      nonce = j["nonce"].get<std::int64_t>();
    }
    nlohmann::json out;
    out["type"] = "pong";
    out["nonce"] = nonce;
    gateway_session_->queue_frame(out.dump());
    return;
  }
}

void PokerServer::run(uint16_t port) {
  const std::string bind = get_env("NEBULA_ROOM_WORKER_BIND", "127.0.0.1");
  boost::system::error_code addr_ec;
  const auto addr = net::ip::make_address(bind, addr_ec);
  if (addr_ec) {
    std::cerr << "invalid NEBULA_ROOM_WORKER_BIND: " << bind << " (" << addr_ec.message() << ")\n";
    return;
  }
  tcp::endpoint ep{addr, port};
  boost::system::error_code ec;
  acceptor_.emplace(ioc_);
  acceptor_->open(ep.protocol(), ec);
  if (ec) {
    std::cerr << "open: " << ec.message() << "\n";
    return;
  }
  acceptor_->set_option(net::socket_base::reuse_address(true));
  acceptor_->bind(ep, ec);
  if (ec) {
    std::cerr << "bind failed: " << ec.message() << "\n";
    return;
  }
  acceptor_->listen(net::socket_base::max_listen_connections, ec);
  if (ec) {
    std::cerr << "listen failed: " << ec.message() << "\n";
    return;
  }
  std::cout << "nebula-poker C++ room worker listening on " << bind << ":" << port << " (Java gateway connects here)\n";
  std::cout.flush();
  {
    std::error_code fsec;
    const std::filesystem::path cw = std::filesystem::current_path(fsec);
    std::cerr << "[boot] cwd=" << (fsec ? std::string("(error)") : cw.string())
              << " room_snapshot=" << (nebula_room_snapshots_enabled() ? "on" : "off") << "\n";
    std::cerr << "[boot] If you see SIGSEGV right after this, try running the binary from Linux ext4 "
                 "(e.g. copy build-cpp to ~/nebula-build), not from /mnt/d/ — drvfs can crash native code.\n";
    std::cerr.flush();
  }
  do_accept();
  if (nebula_room_snapshots_enabled()) {
    net::post(ioc_, [this]() {
      try {
        restore_room_snapshots_from_disk();
      } catch (const std::exception& e) {
        std::cerr << "[snapshot] restore: " << e.what() << "\n";
      } catch (...) {
        std::cerr << "[snapshot] restore: unknown exception\n";
      }
    });
  }
  ioc_.run();
}

void PokerServer::do_accept() {
  auto sock = std::make_shared<tcp::socket>(ioc_);
  acceptor_->async_accept(*sock, [this, sock](const boost::system::error_code& ec) {
    if (!ec) {
      if (gateway_session_) {
        boost::system::error_code sec;
        sock->close(sec);
        std::cerr << "[gateway] rejected extra inbound connection (only one Java gateway allowed)\n";
      } else {
        std::make_shared<GatewaySession>(this, std::move(*sock))->start();
      }
    }
    net::post(ioc_, [this]() { do_accept(); });
  });
}

void PokerServer::close_ws_protocol_error(const std::string& socket_id) {
  if (gateway_session_) {
    nlohmann::json j;
    j["type"] = "to_client_close";
    j["socket_id"] = socket_id;
    j["close_code"] = 1002;
    gateway_session_->queue_frame(j.dump());
  }
  remove_session(socket_id);
}

void PokerServer::touch_room_snapshot(Room& room) {
  if (!nebula_room_snapshots_enabled()) return;
  room.last_active_at = now_ms();
  const std::string rid = room.room_id;
  std::unique_ptr<net::steady_timer>& t = snapshot_timers_[rid];
  if (!t) t = std::make_unique<net::steady_timer>(ioc_);
  t->cancel();
  t->expires_after(std::chrono::milliseconds(kSnapshotFlushMs));
  t->async_wait([this, rid](const boost::system::error_code& ec) {
    if (ec == net::error::operation_aborted) return;
    flush_room_snapshot_to_disk(rid);
  });
}

void PokerServer::flush_room_snapshot_to_disk(const std::string& room_id) {
  if (!nebula_room_snapshots_enabled()) return;
  nlohmann::json j;
  {
    std::lock_guard<std::mutex> lock(room_mutex(room_id));
    auto it = rooms_.find(room_id);
    if (it == rooms_.end()) return;
    j = room_to_json(it->second);
  }
  try {
    write_atomic_json_file(nebula_snapshot_room_file(room_id), j.dump(2));
  } catch (const std::exception& e) {
    std::cerr << "[snapshot] flush failed: " << e.what() << "\n";
  }
}

void PokerServer::obliterate_room_snapshot(const std::string& room_id) {
  auto it = snapshot_timers_.find(room_id);
  if (it != snapshot_timers_.end() && it->second) {
    it->second->cancel();
    snapshot_timers_.erase(it);
  }
  std::error_code ec;
  std::filesystem::remove(nebula_snapshot_room_file(room_id), ec);
}

void PokerServer::restore_room_snapshots_from_disk() {
  if (!nebula_room_snapshots_enabled()) return;
  constexpr std::uintmax_t kMaxSnapshotBytes = 32ULL * 1024ULL * 1024ULL;
  try {
    const auto dir = nebula_snapshot_dir_path();
    std::filesystem::create_directories(dir);
    try {
      for (const auto& entry : std::filesystem::directory_iterator(dir)) {
        std::error_code fe;
        if (!entry.is_regular_file(fe) || fe) continue;
        const std::filesystem::path& p = entry.path();
        if (p.extension() != ".json") continue;
        const auto sz = entry.file_size(fe);
        if (fe || sz > kMaxSnapshotBytes) continue;
        std::ifstream ifs(p, std::ios::binary);
        if (!ifs) continue;
        std::ostringstream ss;
        ss << ifs.rdbuf();
        const std::string raw = ss.str();
        if (raw.empty()) continue;
        try {
          nlohmann::json j = nlohmann::json::parse(raw, nullptr, false);
          if (j.is_discarded() || !j.is_object()) continue;
          Room room;
          room_from_json(j, room);
          if (room.room_id.empty()) continue;
          room.socket_ids.clear();
          room.host_socket_id.clear();
          room.voice_participants.clear();
          room.expected_acks.clear();
          room.match_acks.clear();
          room.empty_since = now_ms();
          if (room.room_code.empty()) room.room_code = room.room_id;
          const std::string rid = room.room_id;
          if (rooms_.count(rid)) continue;
          rooms_.emplace(rid, std::move(room));
          room_mutexes_.try_emplace(rid);
          std::cout << "[snapshot] restored room " << rid << "\n";
        } catch (const std::exception& e) {
          std::cerr << "[snapshot] skip " << p.string() << ": " << e.what() << "\n";
        }
      }
    } catch (const std::filesystem::filesystem_error& e) {
      std::cerr << "[snapshot] restore fs: " << e.what() << "\n";
    }
  } catch (const std::exception& e) {
    std::cerr << "[snapshot] restore: " << e.what() << "\n";
  }
}

}  // namespace

int main() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;
  const uint16_t port = static_cast<uint16_t>(get_env_int("NEBULA_ROOM_WORKER_PORT", 3101));
  PokerServer server;
  server.run(port);
  google::protobuf::ShutdownProtobufLibrary();
  return 0;
}
