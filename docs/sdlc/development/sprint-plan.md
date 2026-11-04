# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Core authentication foundation: DPDP consent infrastructure plus buyer and organizer registration/login.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Buyer registration with email and password | 5 | backend-agent | US-022 |
| US-002 | Story | Buyer login and logout | 3 | backend-agent | US-001 |
| US-005 | Story | Organizer self-registration | 3 | backend-agent | US-001, US-022 |
| US-006 | Story | Organizer login and logout | 2 | backend-agent | US-002, US-005 |
| US-022 | Story | Capture DPDP consent at signup | 5 | backend-agent | — |

## Sprint 2: Sprint 2

Round out auth (password reset, social login, consent withdrawal) and start organizer event creation.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Buyer social login | 5 | integration-agent | US-001, US-002, US-022 |
| US-004 | Story | Buyer password reset | 3 | backend-agent | US-001 |
| US-007 | Story | Organizer social login | 3 | integration-agent | US-003, US-005 |
| US-008 | Story | Create an event draft | 5 | backend-agent | US-006 |
| US-023 | Story | Withdraw consent as easily as it was given | 3 | backend-agent | US-022 |

## Sprint 3: Sprint 3

Organizers can fully manage events: ticket types, editing, publish/unpublish, and the public event detail page.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-009 | Story | Define general-admission ticket types | 5 | backend-agent | US-008 |
| US-010 | Story | Edit an event and its ticket types | 5 | backend-agent | US-008, US-009 |
| US-011 | Story | Publish an event | 5 | backend-agent | US-008, US-009 |
| US-014 | Story | View an event detail page | 3 | frontend-agent | US-011, US-009 |

## Sprint 4: Sprint 4

Public discovery (browse & search) goes live and ticket order creation begins.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-012 | Story | Browse published events | 5 | backend-agent | US-011 |
| US-013 | Story | Search and filter events | 5 | integration-agent | US-012 |
| US-015 | Story | Select tickets and create an order | 8 | backend-agent | US-009, US-002 |
| ↳ US-015-T1 | Task | Implement Redis-based ticket hold during checkout | — | backend-agent | — |
| ↳ US-015-T2 | Task | Build order creation endpoint with inventory validation | — | backend-agent | — |
| ↳ US-015-T3 | Task | Add scheduled release of expired, unpaid holds | — | backend-agent | — |

## Sprint 5: Sprint 5

Complete the payment flow, booking confirmation, and in-account QR ticket viewing.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-016 | Story | Pay for an order online | 8 | integration-agent | US-015 |
| ↳ US-016-T1 | Task | Integrate Razorpay checkout session creation | — | integration-agent | — |
| ↳ US-016-T2 | Task | Implement payment webhook handler and order confirmation | — | integration-agent | — |
| ↳ US-016-T3 | Task | Deduct inventory and issue tickets on successful payment | — | backend-agent | — |
| ↳ US-016-T4 | Task | Release held inventory on payment failure or abandonment | — | backend-agent | — |
| US-017 | Story | Receive booking confirmation | 3 | backend-agent | US-016 |
| US-018 | Story | View QR-code tickets in my account | 8 | backend-agent | US-016, US-017 |
| ↳ US-018-T1 | Task | Generate QR code images and store them in S3 | — | backend-agent | — |
| ↳ US-018-T2 | Task | Implement GET /me/tickets endpoint | — | backend-agent | — |
| ↳ US-018-T3 | Task | Build mobile-legible QR ticket display UI | — | frontend-agent | — |

## Sprint 6: Sprint 6

QR ticket email delivery and organizer sales/attendee dashboards.

Capacity: 20 points · Committed: 15

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-019 | Story | Receive QR-code tickets by email | 5 | integration-agent | US-018 |
| US-020 | Story | View sales counts per event | 5 | backend-agent | US-016 |
| US-021 | Story | View attendee list for an event | 5 | backend-agent | US-016 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
