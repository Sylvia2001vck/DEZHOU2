package com.nebula.leaderboard.application.port.out;

import com.nebula.leaderboard.domain.model.LeaderboardEntry;
import java.util.List;

public interface LeaderboardQueryPort {
  List<LeaderboardEntry> top(String season, int limit);
}
