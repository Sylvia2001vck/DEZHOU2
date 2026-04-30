#pragma once

#include <vector>

#include "engine/holdem_types.hpp"

namespace nebula::engine {

HandEval evaluate5(const std::vector<Card>& cards);
int compare_hands(const HandEval& a, const HandEval& b);
HandEval best_hand(const std::vector<Card>& cards);

}  // namespace nebula::engine
