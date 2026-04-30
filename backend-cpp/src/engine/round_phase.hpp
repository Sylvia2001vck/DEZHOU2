#pragma once

#include <optional>
#include <string_view>

namespace nebula::engine {

enum class RoundPhase { Waiting, PreFlop, Flop, Turn, River, Showdown, HandOver };

RoundPhase round_phase_from_string(std::string_view value);
const char* to_string(RoundPhase phase);
bool is_betting_round(RoundPhase phase);
std::optional<RoundPhase> next_round_phase(RoundPhase phase);

}  // namespace nebula::engine
