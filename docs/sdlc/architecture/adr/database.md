<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- DynamoDB

## Decision Outcome

Chosen option: PostgreSQL 16, because PostgreSQL 16 holds users, consents, events, inventory, and orders; SELECT FOR UPDATE on ticket_types prevents overselling and the same database produces organizer sales/revenue reporting.

## Consequences

Row locking can contend under extreme spikes, mitigated by short Redis holds and brief transactions; search is offloaded to Meilisearch to keep sales traffic fast.
<!-- sdlc:auto:end adr -->