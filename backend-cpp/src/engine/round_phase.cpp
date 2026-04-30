#include "engine/round_phase.hpp"

#include <string>

namespace nebula::engine {

RoundPhase round_phase_from_string(std::string_view value) {
  if (value == "PRE-FLOP") return RoundPhase::PreFlop;
  if (value == "FLOP") return RoundPhase::Flop;
  if (value == "TURN") return RoundPhase::Turn;
  if (value == "RIVER") return RoundPhase::River;
  if (value == "SHOWDOWN") return RoundPhase::Showdown;
  if (value == "HAND_OVER") return RoundPhase::HandOver;
  return RoundPhase::Waiting;
}

const char* to_string(RoundPhase phase) {
  switch (phase) {
    case RoundPhase::Waiting:
      return "WAITING";
    case RoundPhase::PreFlop:
      return "PRE-FLOP";
    case RoundPhase::Flop:
      return "FLOP";
    case RoundPhase::Turn:
      return "TURN";
    case RoundPhase::River:
      return "RIVER";
    case RoundPhase::Showdown:
      return "SHOWDOWN";
    case RoundPhase::HandOver:
      return "HAND_OVER";
  }
  return "WAITING";
}

bool is_betting_round(RoundPhase phase) {
  return phase == RoundPhase::PreFlop || phase == RoundPhase::Flop || phase == RoundPhase::Turn ||
         phase == RoundPhase::River;
}

std::optional<RoundPhase> next_round_phase(RoundPhase phase) {
  switch (phase) {
    case RoundPhase::PreFlop:
      return RoundPhase::Flop;
    case RoundPhase::Flop:
      return RoundPhase::Turn;
    case RoundPhase::Turn:
      return RoundPhase::River;
    case RoundPhase::River:
      return RoundPhase::Showdown;
    default:
      return std::nullopt;
  }
}

}  // namespace nebula::engine
