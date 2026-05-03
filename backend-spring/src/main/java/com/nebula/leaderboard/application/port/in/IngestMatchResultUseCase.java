package com.nebula.leaderboard.application.port.in;

import com.nebula.leaderboard.domain.model.MatchResult;

public interface IngestMatchResultUseCase {
  void ingest(MatchResult result);
}
