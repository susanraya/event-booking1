# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Buyer registration with email and password | US-001 | 1 | POST /auth/register, api, consents, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Buyer login and logout | US-002 | 1 | POST /auth/login, POST /auth/logout, api, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-003 | EPIC-001 | Buyer social login | US-003 | 2 | GET /auth/oauth/google, api, auth, consents, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-001 | Buyer password reset | US-004 | 2 | POST /auth/password-reset/confirm, POST /auth/password-reset/request, api, db, email, password_reset_tokens, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-002 | Organizer self-registration | US-005 | 1 | POST /auth/register, api, consents, db, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-002 | Organizer login and logout | US-006 | 1 | POST /auth/login, POST /auth/logout, api, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-002 | Organizer social login | US-007 | 2 | GET /auth/oauth/google, api, auth, consents, users | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-008 | EPIC-003 | Create an event draft | US-008 | 2 | POST /events, api, db, events | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-003 | Define general-admission ticket types | US-009 | 3 | POST /events/{id}/ticket-types, api, db, events, ticket_types | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-010 | EPIC-003 | Edit an event and its ticket types | US-010 | 3 | PUT /events/{id}, PUT /events/{id}/ticket-types/{ttId}, api, db, events, ticket_types | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-011 | EPIC-003 | Publish an event | US-011 | 3 | POST /events/{id}/publish, POST /events/{id}/unpublish, api, db, events, search | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-012 | EPIC-004 | Browse published events | US-012 | 4 | GET /events, api, cache, events, ticket_types, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-004 | Search and filter events | US-013 | 4 | GET /events, api, events, search | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-004 | View an event detail page | US-014 | 3 | GET /events/{id}, api, events, ticket_types, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-015 | EPIC-005 | Select tickets and create an order | US-015, US-015-T1, US-015-T2, US-015-T3 | 4 | POST /orders, api, cache, db, order_items, orders, ticket_types, worker | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-016 | EPIC-005 | Pay for an order online | US-016, US-016-T1, US-016-T2, US-016-T3, US-016-T4 | 5 | POST /payments/webhook, api, cache, db, orders, payments, tickets, worker | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-017 | EPIC-005 | Receive booking confirmation | US-017 | 5 | GET /me/orders, api, email, orders, queue | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-018 | EPIC-006 | View QR-code tickets in my account | US-018, US-018-T1, US-018-T2, US-018-T3 | 5 | GET /me/tickets, api, objstore, orders, tickets, web, worker | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-019 | EPIC-006 | Receive QR-code tickets by email | US-019 | 6 | email, objstore, orders, tickets, worker | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-020 | EPIC-007 | View sales counts per event | US-020 | 6 | GET /organizer/events/{id}/sales, api, db, events, order_items, orders, ticket_types | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-021 | EPIC-007 | View attendee list for an event | US-021 | 6 | GET /organizer/events/{id}/attendees, api, db, events, order_items, orders, tickets | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-022 | EPIC-008 | Capture DPDP consent at signup | US-022 | 1 | POST /auth/register, api, consents, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-023 | EPIC-008 | Withdraw consent as easily as it was given | US-023 | 2 | GET /me/consents, POST /me/consents/withdraw, api, consents, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
<!-- sdlc:auto:end matrix -->
