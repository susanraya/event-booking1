<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Azure
- GCP

## Decision Outcome

Chosen option: AWS, because AWS Mumbai (ap-south-1) keeps all personal and payment data in India for DPDP/RBI residency (NFR-008) and provides RDS PostgreSQL, S3, and ALB in one provider and country.

## Consequences

Single-region dev setup trades multi-region resilience for strict data locality; Redis and Meilisearch run as containers rather than fully managed services at this scope.
<!-- sdlc:auto:end adr -->