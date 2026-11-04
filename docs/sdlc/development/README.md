# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 targets core authentication foundations: DPDP consent infrastructure and buyer/organizer registration and login.

Goal: 'Core authentication foundation: DPDP consent infrastructure plus buyer and organizer registration/login.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-001, EPIC-002, EPIC-008

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping to EPIC-001/002/008 is thematic inference from the sprint goal text only.
- ⚠ No sprint execution status (started/completed, velocity achieved) provided.

### SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 rounds out authentication features and begins organizer event creation.

Goal: 'Round out auth (password reset, social login, consent withdrawal) and start organizer event creation.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-001, EPIC-002, EPIC-003

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- ⚠ No sprint execution status provided.

### SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 delivers full organizer event management: ticket types, editing, publish/unpublish, and the public event detail page.

Goal: 'Organizers can fully manage events: ticket types, editing, publish/unpublish, and the public event detail page.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-003

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- ⚠ No sprint execution status provided.

### SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 launches public event discovery (browse & search) and starts ticket order creation.

Goal: 'Public discovery (browse & search) goes live and ticket order creation begins.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-004, EPIC-005

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- ⚠ No sprint execution status provided.

### SPRINT-5 · approved · source: plan:Sprint 5

Sprint 5 completes the payment flow, booking confirmation, and in-account QR ticket viewing.

Goal: 'Complete the payment flow, booking confirmation, and in-account QR ticket viewing.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-005, EPIC-006

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- ⚠ No sprint execution status provided.

### SPRINT-6 · approved · source: plan:Sprint 6

Sprint 6 delivers QR ticket email delivery and organizer sales/attendee dashboards.

Goal: 'QR ticket email delivery and organizer sales/attendee dashboards.' Capacity: 20 points. Part of approved Sprint Plan v1.

**Related:** EPIC-006, EPIC-007

- ⚠ Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- ⚠ No sprint execution status provided.

### EPIC-001 · approved · source: plan:EPIC-001

Buyer Accounts & Authentication epic covering buyer registration, login/logout, social login, and password reset.

Groups stories US-001 through US-004. No points or role assigned at the epic level in the input (role listed as unassigned).

**Related:** US-001, US-002, US-003, US-004

- ⚠ No implementation/completion status for the epic or its child stories provided.

### EPIC-002 · approved · source: plan:EPIC-002

Organizer Accounts & Authentication epic covering organizer self-registration, login/logout, and social login.

Groups stories US-005 through US-007. No points or role assigned at the epic level.

**Related:** US-005, US-006, US-007

- ⚠ No implementation/completion status for the epic or its child stories provided.

### EPIC-003 · approved · source: plan:EPIC-003

Event Creation & Management epic covering draft creation, ticket type definition, editing, and publishing of events.

Groups stories US-008 through US-011. No points or role assigned at the epic level.

**Related:** US-008, US-009, US-010, US-011

- ⚠ No implementation/completion status for the epic or its child stories provided.

### EPIC-004 · approved · source: plan:EPIC-004

Public Event Discovery epic covering browsing, search/filter, and the public event detail page.

Groups stories US-012 through US-014. No points or role assigned at the epic level.

**Related:** US-012, US-013, US-014

- ⚠ No implementation/completion status for the epic or its child stories provided.

### EPIC-005 · approved · source: plan:EPIC-005

Ticket Booking & Order Capture epic covering ticket selection/order creation, online payment, and booking confirmation.

Groups stories US-015 through US-017, including sub-tasks for Redis-based ticket holds, order creation, Razorpay integration, payment webhooks, inventory deduction/release, and ticket issuance. No points or role assigned at the epic level.

**Related:** US-015, US-016, US-017

- ⚠ No implementation/completion status for the epic or its child stories/tasks provided.

### EPIC-006 · approved · source: plan:EPIC-006

QR-Code Tickets epic covering in-account QR ticket viewing and QR ticket delivery by email.

Groups stories US-018 and US-019, including sub-tasks for QR code generation/S3 storage, the /me/tickets endpoint, and mobile-legible QR ticket display UI. No points or role assigned at the epic level.

**Related:** US-018, US-019

- ⚠ No implementation/completion status for the epic or its child stories/tasks provided.

### EPIC-007 · approved · source: plan:EPIC-007

Organizer Sales Dashboard epic covering per-event sales counts and attendee list views.

Groups stories US-020 and US-021. No points or role assigned at the epic level.

**Related:** US-020, US-021

- ⚠ No implementation/completion status for the epic or its child stories provided.

### EPIC-008 · approved · source: plan:EPIC-008

DPDP Consent & Data Rights epic covering capture of consent at signup and easy withdrawal of consent.

Groups stories US-022 and US-023. No points or role assigned at the epic level. Relates to Digital Personal Data Protection (DPDP) obligations around consent capture and withdrawal.

**Related:** US-022, US-023

- ⚠ No implementation/completion status for the epic or its child stories provided.
- ⚠ Input does not list other DPDP obligations (e.g. data access/erasure requests, breach notification) beyond consent capture/withdrawal; coverage of broader DPDP requirements cannot be confirmed from this input.

### US-001 · approved · source: plan:US-001

Buyer registration with email and password.

Story points: 5. Assigned role: backend-agent. Part of EPIC-001 (Buyer Accounts & Authentication).

**Related:** EPIC-001

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-002 · approved · source: plan:US-002

Buyer login and logout.

Story points: 3. Assigned role: backend-agent. Part of EPIC-001.

**Related:** EPIC-001

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-003 · approved · source: plan:US-003

Buyer social login.

Story points: 5. Assigned role: integration-agent. Part of EPIC-001.

**Related:** EPIC-001

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-004 · approved · source: plan:US-004

Buyer password reset.

Story points: 3. Assigned role: backend-agent. Part of EPIC-001.

**Related:** EPIC-001

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-005 · approved · source: plan:US-005

Organizer self-registration.

Story points: 3. Assigned role: backend-agent. Part of EPIC-002 (Organizer Accounts & Authentication).

**Related:** EPIC-002

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-006 · approved · source: plan:US-006

Organizer login and logout.

Story points: 2. Assigned role: backend-agent. Part of EPIC-002.

**Related:** EPIC-002

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-007 · approved · source: plan:US-007

Organizer social login.

Story points: 3. Assigned role: integration-agent. Part of EPIC-002.

**Related:** EPIC-002

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-008 · approved · source: plan:US-008

Create an event draft.

Story points: 5. Assigned role: backend-agent. Part of EPIC-003 (Event Creation & Management).

**Related:** EPIC-003

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-009 · approved · source: plan:US-009

Define general-admission ticket types.

Story points: 5. Assigned role: backend-agent. Part of EPIC-003.

**Related:** EPIC-003

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-010 · approved · source: plan:US-010

Edit an event and its ticket types.

Story points: 5. Assigned role: backend-agent. Part of EPIC-003.

**Related:** EPIC-003

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-011 · approved · source: plan:US-011

Publish an event.

Story points: 5. Assigned role: backend-agent. Part of EPIC-003.

**Related:** EPIC-003

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-012 · approved · source: plan:US-012

Browse published events.

Story points: 5. Assigned role: backend-agent. Part of EPIC-004 (Public Event Discovery).

**Related:** EPIC-004

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-013 · approved · source: plan:US-013

Search and filter events.

Story points: 5. Assigned role: integration-agent. Part of EPIC-004.

**Related:** EPIC-004

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-014 · approved · source: plan:US-014

View an event detail page.

Story points: 3. Assigned role: frontend-agent. Part of EPIC-004.

**Related:** EPIC-004

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-015 · approved · source: plan:US-015

Select tickets and create an order.

Story points: 8. Assigned role: backend-agent. Part of EPIC-005 (Ticket Booking & Order Capture). Sub-tasks: US-015-T1 Implement Redis-based ticket hold during checkout (backend-agent); US-015-T2 Build order creation endpoint with inventory validation (backend-agent); US-015-T3 Add scheduled release of expired, unpaid holds (backend-agent).

**Related:** EPIC-005

- ⚠ No implementation status, code, or completion evidence provided for the story or its sub-tasks.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-016 · approved · source: plan:US-016

Pay for an order online.

Story points: 8. Assigned role: integration-agent. Part of EPIC-005. Sub-tasks: US-016-T1 Integrate Razorpay checkout session creation (integration-agent); US-016-T2 Implement payment webhook handler and order confirmation (integration-agent); US-016-T3 Deduct inventory and issue tickets on successful payment (backend-agent); US-016-T4 Release held inventory on payment failure or abandonment (backend-agent).

**Related:** EPIC-005

- ⚠ No implementation status, code, or completion evidence provided for the story or its sub-tasks.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-017 · approved · source: plan:US-017

Receive booking confirmation.

Story points: 3. Assigned role: backend-agent. Part of EPIC-005.

**Related:** EPIC-005

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-018 · approved · source: plan:US-018

View QR-code tickets in my account.

Story points: 8. Assigned role: backend-agent. Part of EPIC-006 (QR-Code Tickets). Sub-tasks: US-018-T1 Generate QR code images and store them in S3 (backend-agent); US-018-T2 Implement GET /me/tickets endpoint (backend-agent); US-018-T3 Build mobile-legible QR ticket display UI (frontend-agent).

**Related:** EPIC-006

- ⚠ No implementation status, code, or completion evidence provided for the story or its sub-tasks.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-019 · approved · source: plan:US-019

Receive QR-code tickets by email.

Story points: 5. Assigned role: integration-agent. Part of EPIC-006.

**Related:** EPIC-006

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-020 · approved · source: plan:US-020

View sales counts per event.

Story points: 5. Assigned role: backend-agent. Part of EPIC-007 (Organizer Sales Dashboard).

**Related:** EPIC-007

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-021 · approved · source: plan:US-021

View attendee list for an event.

Story points: 5. Assigned role: backend-agent. Part of EPIC-007.

**Related:** EPIC-007

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.

### US-022 · approved · source: plan:US-022

Capture DPDP consent at signup.

Story points: 5. Assigned role: backend-agent. Part of EPIC-008 (DPDP Consent & Data Rights). Relates to DPDP consent-capture obligations.

**Related:** EPIC-008

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.
- ⚠ Specific DPDP consent-capture requirements (what must be disclosed/recorded) are not detailed in this input beyond the story title.

### US-023 · approved · source: plan:US-023

Withdraw consent as easily as it was given.

Story points: 3. Assigned role: backend-agent. Part of EPIC-008. Relates to DPDP consent-withdrawal obligations.

**Related:** EPIC-008

- ⚠ No implementation status, code, or completion evidence provided.
- ⚠ Not explicitly mapped to a sprint number in the input.
- ⚠ Specific mechanism for consent withdrawal is not detailed in this input beyond the story title.
<!-- sdlc:auto:end narrative -->
