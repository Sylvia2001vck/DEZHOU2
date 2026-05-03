package com.nebula.leaderboard.adapter.inbound.event;

import com.nebula.leaderboard.application.port.in.IngestMatchResultUseCase;
import com.nebula.leaderboard.domain.model.MatchResult;
import java.time.Instant;
import java.util.List;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class MatchFinishedEventListener {

  private final IngestMatchResultUseCase ingestMatchResultUseCase;

  public MatchFinishedEventListener(IngestMatchResultUseCase ingestMatchResultUseCase) {
    this.ingestMatchResultUseCase = ingestMatchResultUseCase;
  }

  @KafkaListener(topics = "match.finished.v1", groupId = "leaderboard-service")
  public void consume(String rawEvent) {
    // Placeholder parser: replace with Protobuf DTO mapping.
    if (rawEvent == null || rawEvent.isBlank()) {
      return;
    }
    MatchResult placeholder =
        new MatchResult(
            "placeholder-match-id",
            "ROOM00",
            Instant.now(),
            List.of(new MatchResult.PlayerDelta(1L, 10)));
    ingestMatchResultUseCase.ingest(placeholder);
  }
}
