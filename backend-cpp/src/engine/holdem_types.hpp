#pragma once

#include <string>
#include <vector>

namespace nebula::engine {

struct Card {
  std::string s;
  std::string r;
  int v = 0;
};

struct HandEval {
  int rank = 0;
  std::vector<int> value;
  std::string desc;
};

}  // namespace nebula::engine
