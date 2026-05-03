package com.nebula.leaderboard.adapter.inbound.rest;

import com.nebula.leaderboard.application.port.out.LeaderboardQueryPort;
import com.nebula.leaderboard.domain.model.LeaderboardEntry;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/leaderboard")
@Validated
public class LeaderboardController {

  private final LeaderboardQueryPort queryPort;

  public LeaderboardController(LeaderboardQueryPort queryPort) {
    this.queryPort = queryPort;
  }

  @GetMapping("/top")
  public List<LeaderboardEntry> top(
      @RequestParam(defaultValue = "current") String season,
      @RequestParam(defaultValue = "20") @Min(1) @Max(200) int limit) {
    return queryPort.top(season, limit);
  }
}
