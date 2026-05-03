# Leaderboard Service (Spring Boot 3)

Production-oriented starter skeleton for a separate `leaderboard-service` built with:

- Spring Boot 3.x + Java 17
- Hexagonal architecture (ports/adapters)
- SOLID-oriented application services
- JPA (authoritative persistence) + Redis ZSET (real-time projection)
- Kafka event ingestion entrypoint (placeholder)

## Current scope

This module is a bootstrapped skeleton, not a full implementation yet.
It includes:

- Domain models (`MatchResult`, `LeaderboardEntry`)
- Application ports (`IngestMatchResultUseCase`, projection/store/query ports)
- Application service (`IngestMatchResultService`)
- Outbound adapters for JPA/Redis placeholders
- Inbound REST query endpoint
- Inbound event listener placeholder

## Next implementation steps

1. Add JPA entities and repositories for `match_result` and `player_stats`
2. Add idempotency guard by `matchId` unique constraint
3. Implement transactional write to MySQL + projection update to Redis
4. Add outbox/event publication for downstream systems
5. Add integration tests for duplicate event ingestion and leaderboard query consistency
