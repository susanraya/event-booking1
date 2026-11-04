<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Angular
- Vue

## Decision Outcome

Chosen option: React 19, because Delivered as a responsive React 19 SPA served from S3/CloudFront, meeting the phone-usable browsing, booking, and QR-display requirements (NFR-011, NFR-012).

## Consequences

A SPA needs client-side routing and careful bundle size on mobile networks; search and listing data come from the API rather than direct index access.
<!-- sdlc:auto:end adr -->