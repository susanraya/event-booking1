<!-- sdlc:auto:start adr -->
# ADR-0002: Use Spring Boot 4.1 for Backend

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- Spring Boot 4.1
- Express
- FastAPI

## Decision Outcome

Chosen option: Spring Boot 4.1, because Single Spring Boot 4.1 codebase runs both the synchronous API and the async worker, using JPA transactions and pessimistic row locks to guarantee exactly-once ticket sales (NFR-001).

## Consequences

JVM startup and memory footprint are heavier than scripting runtimes, but give strong transactional guarantees and mature AWS/Razorpay/SendGrid SDKs.
<!-- sdlc:auto:end adr -->