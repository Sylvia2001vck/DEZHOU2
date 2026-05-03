package com.nebula.leaderboard.application.port.out;

import com.nebula.leaderboard.domain.model.MatchResult;

public interface LeaderboardProjectionPort {
  void apply(MatchResult result);
}
