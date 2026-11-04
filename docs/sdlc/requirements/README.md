# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-SCOPE · draft · source: requirements:scope

Defines delivery scope (lightweight MVP, requirements v1), in-scope capabilities, and explicit out-of-scope items.

In scope: buyer registration/login, organizer self-registration/login, event creation/editing, general-admission ticket types with quantities, event publishing, public browsing and event detail pages, GA ticket booking and order capture, QR-code tickets in buyer account, organizer dashboard (attendee list + sales counts), DPDP consent capture at signup. Out of scope: ratings & reviews of events/organizers; native iOS/Android apps for buyers or organizers. Requirements version is 1 with no revision history supplied.

- ⚠ No approval record for the scope document itself (only the tech stack and services are explicitly marked as product-owner approved).

### REQ-STACK · approved · source: requirements:tech-stack

Product-owner-approved technology stack: Spring Boot 4.1 backend, AWS cloud, PostgreSQL 16, React 19 frontend.

DPDP Act: data residency; RBI: payment-data localisation. Stack chosen explicitly so all personal and payment data can live in AWS's Mumbai region, satisfying DPDP data-residency intent and RBI payment-data expectations without extra engineering. AWS supplies managed PostgreSQL, object storage (ticket QR images, venue maps) and email/queue plumbing under one provider in one country. PostgreSQL's transactional/row-level-locking guarantees are specifically called out as the mechanism preventing double-booking/overselling and for organizer sales/payout reporting. Stack is to be designed against exactly as specified, no substitutions.

**Related:** NFR-008

### REQ-SERVICES · approved · source: requirements:services

Product-owner-approved runtime services: Razorpay payments, Redis (cache + queue), Amazon S3, SendGrid email, Meilisearch, MSG91 SMS, Google OAuth.

- Payments: Razorpay (custom; RAZORPAY_KEY_ID/SECRET/WEBHOOK_SECRET) — collects buyer payments, deducts per-ticket commission, pays organizers via RazorpayX. RBI: payment-data localisation is relevant to how/where this data is stored.
- Cache: Redis (redis:7-alpine) — holds short-lived seat/ticket holds during checkout and caches hot event listings.
- Queue: Redis-as-queue (redis:7-alpine) — runs QR generation, confirmation email/SMS, and payout batch jobs asynchronously.
- File storage: Amazon S3 (AWS_ACCESS_KEY_ID/SECRET, AWS_REGION, S3_BUCKET) — stores banners, venue maps, generated QR files in the Mumbai region.
- Email: SendGrid (SENDGRID_API_KEY) — transactional confirmations with QR attachment and delivery tracking.
- Search: Meilisearch (getmeili/meilisearch:v1.10.3) — typo-tolerant public event search/filtering, offloaded from the main DB.
- SMS: MSG91 (MSG91_AUTH_KEY, MSG91_SENDER_ID) — optional Indian, DLT-registered SMS for confirmations/gate details.
- Auth: Google OAuth (GOOGLE_CLIENT_ID/SECRET) — social sign-up/login option.
Full required API key set: AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MSG91_AUTH_KEY, MSG91_SENDER_ID, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET, REDIS_URL, S3_BUCKET, SENDGRID_API_KEY.

**Related:** NFR-001, NFR-002, NFR-003

- ⚠ No DPDP-recognised Consent Manager service is included among approved services; consent is captured directly by the app only.

### US-001 · draft · source: requirements:US-001

Buyer self-registration with email and password, gated on consent and password strength.

AC-001: valid email + strength-compliant password + required consents accepted -> account created, user signed in, confirmation shown. AC-002: already-registered email -> registration rejected with 'email already in use' message. AC-003: invalid email or weak password -> form rejected with validation message, no account created.

**Related:** EPIC-001, AC-001, AC-002, AC-003, NFR-004, NFR-009

### US-002 · draft · source: requirements:US-002

Buyer login/logout with generic failure messaging and session termination.

AC-004: correct credentials -> authenticated, taken to account area. AC-005: incorrect credentials -> generic error, no field-specific hint (account-enumeration protection). AC-006: logout ends session; account-only pages require re-login.

**Related:** EPIC-001, AC-004, AC-005, AC-006, NFR-005, NFR-006

### US-003 · draft · source: requirements:US-003

Buyer social login (e.g. Google) with consent capture on first use.

AC-007: successful social auth -> account created on first use (DPDP consents captured) or signed in on return. AC-008: cancelled/failed authorisation -> not signed in, clear message shown. Epic assumption: exact social providers to be confirmed (Google named as example; Google OAuth is the one approved service).

**Related:** EPIC-001, AC-007, AC-008, NFR-009

- ⚠ Epic text says 'exact providers to be confirmed' while the approved services list names Google OAuth specifically — confirm this is the sole provider for v1.

### US-004 · draft · source: requirements:US-004

Buyer password reset via time-limited, single-use email link.

AC-009: submitting registered email sends a time-limited reset link; neutral confirmation shown regardless of whether email exists. AC-010: valid link + new strength-compliant password -> password updated, login works, link cannot be reused.

**Related:** EPIC-001, AC-009, AC-010, NFR-004, NFR-005, NFR-006

### US-005 · draft · source: requirements:US-005

Organizer self-registration with display name and consent.

AC-011: valid email + strength-compliant password + organizer display name + required consents -> organizer account created, signed in, taken to organizer area. AC-012: email already registered as organizer -> rejected, told email in use.

**Related:** EPIC-002, AC-011, AC-012, NFR-004, NFR-009

- ⚠ Epic notes organizer accounts may require platform-admin moderation before publishing in the broader vision, but moderation workflows are explicitly out of this MVP's design scope — confirm no moderation gate exists for v1.

### US-006 · draft · source: requirements:US-006

Organizer login/logout with generic failure messaging and session termination.

AC-013: correct credentials -> authenticated, taken to organizer dashboard. AC-014: incorrect credentials -> generic error. AC-015: logout ends session; organizer-only pages require re-authentication.

**Related:** EPIC-002, AC-013, AC-014, AC-015, NFR-005, NFR-006

### US-007 · draft · source: requirements:US-007

Organizer social login with consent capture on first use.

AC-016: successful social auth -> organizer account created on first use (consents captured) or signed in on return.

**Related:** EPIC-002, AC-016, NFR-009

### US-008 · draft · source: requirements:US-008

Organizer creates an unpublished event draft with core details.

AC-017: title, description, venue/location, date/time saved as a private draft owned by the organizer, not publicly visible. AC-018: missing required field (e.g. title, date/time) -> not saved, required fields flagged. AC-019: past date/time -> rejected with validation message.

**Related:** EPIC-003, AC-017, AC-018, AC-019

### US-009 · draft · source: requirements:US-009

Organizer defines one or more general-admission ticket types per event.

AC-020: name + non-negative price + positive quantity -> saved, counted in event inventory. AC-021: negative price or zero/negative quantity -> rejected. AC-022: organizer view shows each ticket type's name, price, total quantity and remaining quantity. Note: reserved seat-map ticketing is explicitly out of scope for this MVP (assumption only).

**Related:** EPIC-003, AC-020, AC-021, AC-022

### US-010 · draft · source: requirements:US-010

Organizer edits their own event and ticket types, with sold-inventory protection and ownership checks.

AC-023: edits to details/ticket types saved and reflected on the public detail page once published. AC-024: cannot reduce a ticket type's quantity below tickets already sold. AC-025: editing an event not owned by the requester is denied.

**Related:** EPIC-003, AC-023, AC-024, AC-025, NFR-007

### US-011 · draft · source: requirements:US-011

Organizer publishes/unpublishes an event, controlling public visibility and bookability.

AC-026: complete draft (title, date/time, venue, >=1 ticket type) -> publish makes it visible/bookable publicly. AC-027: missing required field or no ticket type -> publishing blocked, missing items identified. AC-028: unpublishing removes it from browsing and blocks new bookings while existing bookings remain valid.

**Related:** EPIC-003, AC-026, AC-027, AC-028

### US-012 · draft · source: requirements:US-012

Public visitors browse published events without an account, on a responsive layout.

AC-029: listing shows published events with title, date, venue, starting price; unpublished/past events excluded by default. AC-030: layout adapts responsively and stays usable on phone-sized screens.

**Related:** EPIC-004, AC-029, AC-030, NFR-002, NFR-011

### US-013 · draft · source: requirements:US-013

Public visitors search and filter the published event listing.

AC-031: search term matching title/venue -> listing narrows to matching published events. AC-032: date/location filter -> listing updates to matches only, with a clear empty state when none match.

**Related:** EPIC-004, AC-031, AC-032, NFR-002

### US-014 · draft · source: requirements:US-014

Public visitors view a published event's detail page.

AC-033: detail page shows title, description, venue/location, date/time, and available ticket types with prices. AC-034: sold-out ticket types shown as unavailable; unpublished events not publicly accessible.

**Related:** EPIC-004, AC-033, AC-034

### US-015 · draft · source: requirements:US-015

Logged-in buyer selects ticket types/quantities to create an order.

AC-035: quantities within remaining availability -> order created showing line items, per-ticket prices, total. AC-036: requested quantity exceeds availability -> order not created, user told quantity exceeds availability. AC-037: not logged in -> prompted to log in/register before continuing.

**Related:** EPIC-005, AC-035, AC-036, AC-037, NFR-001

### US-016 · draft · source: requirements:US-016

Buyer pays for an order via Razorpay; success confirms order and issues tickets, failure releases held inventory.

AC-038: successful Razorpay payment -> order marked paid, inventory deducted, tickets issued. AC-039: failed/abandoned payment -> order not confirmed, no tickets issued, held quantities released. AC-040: on confirmation, platform commission recorded against the order for organizer net calculation.

**Related:** EPIC-005, AC-038, AC-039, AC-040, NFR-001

- ⚠ Periodic organizer payouts and buyer self-service refunds are deferred per epic assumption; only organizer-cancelled-event refunds are minimally handled — refund/payout mechanics are not detailed.

### US-017 · draft · source: requirements:US-017

Buyer receives on-screen and email booking confirmation.

AC-041: payment success -> on-screen confirmation with order reference, confirmation email sent. AC-042: email delivery temporarily unavailable -> booking still recorded and visible in account even if email delayed.

**Related:** EPIC-005, AC-041, AC-042, NFR-003

### US-018 · draft · source: requirements:US-018

Buyer views QR-code tickets for confirmed orders in their account, legible on mobile.

AC-043: confirmed paid order -> one QR-code ticket per booked ticket, each with event name, date, venue, unique identifier. AC-044: never-confirmed or failed-payment orders show no QR tickets. AC-045: QR codes legible and scannable on a phone screen. Epic assumption: web-based QR scanning at the gate is out of this MVP's scope.

**Related:** EPIC-006, AC-043, AC-044, AC-045, NFR-007, NFR-011, NFR-012

### US-019 · draft · source: requirements:US-019

Buyer receives QR-code tickets by email after confirmation.

AC-046: order confirmed -> email sent to registered address with event details and QR ticket(s) or a link to view them. AC-047: email provider delivery failure -> failure logged, tickets remain available in account. SMS delivery via MSG91 is optional and not drafted in this epic.

**Related:** EPIC-006, AC-046, AC-047, NFR-003

### US-020 · draft · source: requirements:US-020

Organizer views per-event sales counts, remaining availability and gross revenue.

AC-048: dashboard shows tickets sold, remaining availability, gross revenue from confirmed orders per owned event. AC-049: unconfirmed orders excluded from sold totals/revenue. AC-050: dashboard shows only events the organizer owns. Epic assumption: payout status (from the broader vision) is deferred; dashboard covers sales counts and attendee lists only.

**Related:** EPIC-007, AC-048, AC-049, AC-050, NFR-007

### US-021 · draft · source: requirements:US-021

Organizer views the attendee list for an owned event.

AC-051: confirmed-booking attendees listed with ticket type, quantity, ticket identifiers. AC-052: no confirmed bookings -> clear empty state shown. AC-053: attempting to view an event not owned by the requester is denied.

**Related:** EPIC-007, AC-051, AC-052, AC-053, NFR-007

### US-022 · draft · source: requirements:US-022

DPDP-compliant consent notice and capture at signup for buyers and organizers.

DPDP Act: notice and consent control. AC-054: sign-up form shows a clear notice of what data is collected and why, with a privacy-policy link, and requires explicit consent before registration proceeds. AC-055: consent not accepted -> registration blocked, no account or personal data stored. AC-056: consent given -> consent, its purpose, and timestamp recorded against the account.

**Related:** EPIC-008, AC-054, AC-055, AC-056, NFR-009

### US-023 · draft · source: requirements:US-023

DPDP data-principal right to withdraw consent and request data deletion, no harder than opting in.

DPDP Act: data-principal rights (consent withdrawal). AC-057: privacy settings let a logged-in user withdraw consent via a mechanism no harder to use than the one that captured it. AC-058: withdrawal recorded; processing for withdrawn purposes stops, subject to legally/transactionally required retained records. AC-059: confirmation tells the user what stopped and what, if anything, is retained and why.

**Related:** EPIC-008, AC-057, AC-058, AC-059, NFR-010

- ⚠ No DPDP-recognised Consent Manager integration; withdrawal/deletion is handled directly by the platform only.

### NFR-001 · draft · source: requirements:NFR-001

Scalability/correctness: no overselling under concurrent checkout, up to low-thousands concurrent buyers across hundreds of events.

Each ticket must be sold exactly once with no double-booking even under heavy simultaneous demand; quantities held during checkout but not paid are released back to availability. Target scale: hundreds of events, up to low-thousands of concurrent buyers.

**Related:** US-015, US-016

### NFR-002 · draft · source: requirements:NFR-002

Performance: fast public browsing via caching and a separate search service.

Public listings served from cache for speed; search runs separately from the main database so browsing/search traffic does not slow sales traffic (or vice versa).

**Related:** US-012, US-013

### NFR-003 · draft · source: requirements:NFR-003

Availability: confirmed bookings always recorded/visible even if email/SMS delivery is delayed.

A confirmed, paid booking must always be recorded and visible in the buyer's account regardless of email/SMS delivery delay or failure; delivery failures are logged, never block the booking.

**Related:** US-017, US-019

### NFR-004 · draft · source: requirements:NFR-004

Security: defined password strength rules enforced at registration and reset.

Passwords failing strength rules are rejected with a validation message at both registration and password-reset time. Exact strength rules are not specified in the input.

**Related:** US-001, US-004, US-005

- ⚠ The actual password strength rule set (length, complexity, etc.) is not defined in the requirements input.

### NFR-005 · draft · source: requirements:NFR-005

Security: no account enumeration via generic login errors and neutral reset confirmations.

Login failures show a generic error that does not reveal which field was wrong; password-reset requests show a neutral confirmation regardless of whether the email is registered.

**Related:** US-002, US-004, US-006

### NFR-006 · draft · source: requirements:NFR-006

Security: sessions end on logout; reset links are time-limited and single-use.

Logout must end the session so account-only/organizer-only pages require re-authentication; password-reset links must be time-limited and usable only once.

**Related:** US-002, US-004, US-006

### NFR-007 · draft · source: requirements:NFR-007

Security: strict owner-only access to events, ticket types, sales data, attendee lists, orders and QR tickets.

Organizers can only create/edit/view events, ticket types, sales counts, and attendee lists they own; buyers can only see their own orders and QR tickets. Access attempts to others' data must be denied.

**Related:** US-010, US-018, US-020, US-021

### NFR-008 · draft · source: requirements:NFR-008

Compliance: all personal and payment data stored within India (AWS Mumbai region).

DPDP Act: data residency; RBI: payment-data localisation. Applies to the whole system — all personal data and payment-related data must be stored in the AWS Mumbai region to meet DPDP data-residency commitments and RBI payment-data expectations.

**Related:** REQ-STACK, REQ-SERVICES

### NFR-009 · draft · source: requirements:NFR-009

Compliance: DPDP consent (notice, purpose, timestamp) recorded before any personal data processing.

DPDP Act: notice and consent control. Before processing personal data, buyers/organizers must see a clear privacy notice and give explicit consent; the consent, its purpose, and timestamp must be recorded against the account. No consent -> no account or personal data stored.

**Related:** US-022

### NFR-010 · draft · source: requirements:NFR-010

Compliance: consent withdrawal must be as easy as consent capture, with transparent retention disclosure.

DPDP Act: data-principal rights (easy withdrawal). Users must be able to withdraw consent via a mechanism no harder to use than the one that captured it; processing for withdrawn purposes stops subject to lawfully required retained records; the user is told what stopped and what is kept and why.

**Related:** US-023

### NFR-011 · draft · source: requirements:NFR-011

Compatibility: responsive web app only, no native mobile apps, usable on phone-sized screens.

Delivered as a responsive web application (no native iOS/Android apps); layout must adapt to and remain usable on phone-sized screens for browsing, booking, and viewing tickets.

**Related:** US-012, US-018

### NFR-012 · draft · source: requirements:NFR-012

Usability: QR tickets must render legibly and remain scannable on mobile screens.

QR-code tickets must be legible and scannable on a mobile phone screen so buyers can present them for entry.

**Related:** US-018

### NFR-013 · draft · source: requirements:NFR-013

Accepted risk: children's data flows (under-18 buying, parental consent, targeted ads) are explicitly excluded from this version.

DPDP Act: children's data protection (verifiable parental consent for under-18, no tracking/targeted advertising to children) — accepted risk for this MVP. Platform assumes adult users; under-18 ticket buying with parental consent is out of scope, and no targeted advertising to children is performed.

- ⚠ No age-verification or parental-consent mechanism exists; if minors in fact use the platform, this is an unaddressed DPDP compliance exposure, not merely a documentation gap.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-04

**Capabilities in scope:** Buyer registration and login, Organizer self-registration and login, Event creation and editing by organizers, General-admission ticket types with quantities, Event publishing, Public event browsing and event detail pages, General-admission ticket booking and order capture, QR-code tickets shown in the buyer's account, Organizer dashboard with attendee list and sales counts, DPDP consent capture at signup

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | Spring Boot | — |
| cloud | AWS | AWS has a full India region in Mumbai, which lets you keep all personal data in India as your DPDP commitment and RBI payment-data expectations require, without extra engineering. It provides the managed PostgreSQL, object storage for ticket QR images and venue maps, and email/queue plumbing this product needs, so the whole stack lives with one provider in one country. |
| database | PostgreSQL | Ticketing is money and inventory: every seat or ticket must be sold exactly once even when thousands of buyers click at the same moment. PostgreSQL's strong transactions and row-level locking are what prevent double-booking a reserved seat or overselling a ticket type, and it handles the organizer sales/payout reporting in the same place. It runs in AWS's Mumbai region, satisfying your India data-residency requirement. |
| frontend | React | — |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Buyer Accounts & Authentication

Buyers can self-register and log in to book and view tickets. Supports email/password plus social login. Assumption: social login is provided via a third-party identity provider (e.g. Google); exact providers to be confirmed. DPDP consent is captured at signup (covered in the Consent & Data Rights epic). Adult users are assumed; under-18 parental-consent flows are out of scope for the MVP.

### US-001: Buyer registration with email and password

**Priority:** critical

> As a prospective buyer, I want to register an account using my email and a password, so that I can book tickets and access them later.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am an unregistered visitor on the sign-up page | I submit a valid email, a password meeting the strength rules, and accept the required consents | my account is created, I am signed in, and a confirmation is shown |
| AC-002 | I am on the sign-up page | I submit an email that is already registered | registration is rejected and I am told the email is already in use |
| AC-003 | I am on the sign-up page | I submit an invalid email or a password that fails the strength rules | the form is rejected with a validation message and no account is created |

### US-002: Buyer login and logout

**Priority:** critical

> As a registered buyer, I want to log in and log out of my account, so that I can securely access my tickets and bookings.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I am a registered buyer on the login page | I submit my correct email and password | I am authenticated and taken to my account area |
| AC-005 | I am on the login page | I submit incorrect credentials | login is refused with a generic error and no indication of which field was wrong |
| AC-006 | I am logged in | I choose to log out | my session is ended and I can no longer access account-only pages without logging in again |

### US-003: Buyer social login

**Priority:** medium

> As a prospective or returning buyer, I want to sign up and log in using a social identity provider, so that I can access the platform without managing another password.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | I am on the sign-up or login page | I choose to continue with a supported social provider and authorise it | an account is created on first use or I am signed in on return, with DPDP consents captured on first sign-up |
| AC-008 | I cancel or fail the social provider authorisation | I return to the platform | I am not signed in and am shown a clear message that sign-in did not complete |

### US-004: Buyer password reset

**Priority:** high

> As a registered buyer, I want to reset my password when I forget it, so that I can regain access to my account and tickets.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | I am a registered buyer on the password-reset page | I submit my registered email | a time-limited reset link is sent to that email and a neutral confirmation is shown regardless of whether the email exists |
| AC-010 | I have a valid reset link | I set a new password meeting the strength rules | my password is updated and I can log in with it, and the link can no longer be reused |

## EPIC-002: Organizer Accounts & Authentication

Independent organizers self-register and log in to create and manage events and view their dashboard. Supports email/password plus social login. Assumption: organizer accounts may require platform-admin moderation before publishing events; admin moderation workflows are beyond this lightweight MVP scope and are noted as an assumption rather than drafted.

### US-005: Organizer self-registration

**Priority:** critical

> As a prospective event organizer, I want to register an organizer account with my details, so that I can create and manage my own events.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I am an unregistered visitor on the organizer sign-up page | I submit a valid email, a password meeting the strength rules, my organizer display name, and accept the required consents | an organizer account is created, I am signed in, and taken to the organizer area |
| AC-012 | I am on the organizer sign-up page | I submit an email already registered as an organizer | registration is rejected and I am told the email is already in use |

### US-006: Organizer login and logout

**Priority:** critical

> As a registered organizer, I want to log in and log out of my organizer account, so that I can securely manage my events and view sales.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | I am a registered organizer on the login page | I submit my correct credentials | I am authenticated and taken to the organizer dashboard |
| AC-014 | I am a registered organizer | I submit incorrect credentials | login is refused with a generic error message |
| AC-015 | I am logged in as an organizer | I log out | my session ends and organizer-only pages require re-authentication |

### US-007: Organizer social login

**Priority:** low

> As a prospective or returning organizer, I want to sign up and log in using a social identity provider, so that I can onboard quickly without a separate password.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I am on the organizer sign-up or login page | I continue with a supported social provider and authorise it | an organizer account is created on first use or I am signed in on return, with consents captured on first sign-up |

## EPIC-003: Event Creation & Management

Organizers create, edit and publish events, and define general-admission ticket types with quantities and prices. Assumption: in this lightweight MVP only general-admission ticketing is drafted; reserved seat-map selection described in the broader vision is beyond this scope and is noted as an assumption, not built here.

### US-008: Create an event draft

**Priority:** critical

> As a logged-in organizer, I want to create an event with its core details, so that I can prepare it for publishing and ticket sales.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | I am a logged-in organizer | I submit an event with a title, description, venue/location, date and time, and save it | the event is stored as an unpublished draft owned by me and is not visible to the public |
| AC-018 | I am creating an event | I omit a required field such as title or date/time | the event is not saved and I am shown which fields are required |
| AC-019 | I set an event date and time in the past | I try to save | the event is rejected with a validation message |

### US-009: Define general-admission ticket types

**Priority:** critical

> As a logged-in organizer, I want to add one or more general-admission ticket types with a price and available quantity, so that buyers can purchase the right tickets for my event.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | I am editing my event | I add a ticket type with a name, a non-negative price, and a positive quantity | the ticket type is saved against the event and counts towards the event's available inventory |
| AC-021 | I am adding a ticket type | I enter a negative price or a zero/negative quantity | it is rejected with a validation message |
| AC-022 | my event has multiple ticket types | I view the event in the organizer area | each ticket type shows its name, price, total quantity and remaining quantity |

### US-010: Edit an event and its ticket types

**Priority:** high

> As a logged-in organizer, I want to edit my event's details and ticket types, so that I can correct mistakes and update information before and after publishing.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | I own an event | I update its details or ticket types and save | the changes are stored and reflected on the event detail page if published |
| AC-024 | a ticket type has already sold some tickets | I reduce its quantity below the number already sold | the change is rejected so inventory cannot drop below tickets already booked |
| AC-025 | I am a logged-in organizer | I attempt to edit an event I do not own | the action is denied |

### US-011: Publish an event

**Priority:** critical

> As a logged-in organizer, I want to publish a completed event, so that the public can discover it and book tickets.

| ID | Given | When | Then |
|---|---|---|---|
| AC-026 | I own a draft event that has a title, date/time, venue and at least one ticket type | I publish it | the event becomes visible in public browsing and on its detail page, and tickets become purchasable |
| AC-027 | I own a draft event missing a required field or with no ticket type | I try to publish it | publishing is blocked and I am told what is missing |
| AC-028 | I own a published event | I unpublish it | it is removed from public browsing and new bookings are prevented, while existing bookings remain valid |

## EPIC-004: Public Event Discovery

The public can browse published events and open a detail page for each, without needing an account. Covers browsing, search/filter and event detail pages on a responsive web layout usable on phones.

### US-012: Browse published events

**Priority:** high

> As a public visitor, I want to browse a list of published events, so that I can find events I might attend.

| ID | Given | When | Then |
|---|---|---|---|
| AC-029 | there are published events | I open the public events listing | I see published events with key details such as title, date, venue and starting price, and unpublished or past events are excluded by default |
| AC-030 | I am browsing on a phone-sized screen | I view the listing | the layout adapts responsively and remains usable |

### US-013: Search and filter events

**Priority:** medium

> As a public visitor, I want to search and filter the event listing, so that I can quickly narrow down to relevant events.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | there are published events | I enter a search term matching an event title or venue | the listing shows only matching published events |
| AC-032 | I apply a filter such as date or location | the listing updates | only events matching the filter are shown, and a clear empty-state is shown when none match |

### US-014: View an event detail page

**Priority:** high

> As a public visitor, I want to open an event's detail page, so that I can see full information and decide to book.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | an event is published | I open its detail page | I see its title, description, venue/location, date and time, and the available ticket types with prices |
| AC-034 | a ticket type is sold out or the event is unpublished | I view the detail page | the relevant ticket type is shown as unavailable or the event is not accessible to the public |

## EPIC-005: Ticket Booking & Order Capture

Buyers select general-admission ticket types and quantities, pay online, and have their order captured. Assumption: payments are collected via Razorpay with a per-ticket commission deducted; this requires RAZORPAY_KEY_ID/RAZORPAY_SECRET. Assumption: periodic organizer payouts and buyer self-service refunds are deferred; only organizer-cancelled events trigger refunds, and that handling is minimal in this MVP.

### US-015: Select tickets and create an order

**Priority:** critical

> As a logged-in buyer, I want to choose ticket types and quantities for an event, so that I can proceed to pay for them.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | I am viewing a published event with available ticket types | I select quantities within the remaining availability and proceed | an order is created showing the line items, per-ticket prices and total amount |
| AC-036 | I request more tickets of a type than remain available | I try to proceed | the order is not created and I am told the requested quantity exceeds availability |
| AC-037 | I am not logged in | I try to proceed to book | I am prompted to log in or register before continuing |

### US-016: Pay for an order online

**Priority:** critical

> As a logged-in buyer, I want to pay for my order online through the payment gateway, so that my tickets are confirmed.

| ID | Given | When | Then |
|---|---|---|---|
| AC-038 | I have a pending order with a positive total | I complete payment successfully via the Razorpay gateway | the order is marked paid, the booked quantities are deducted from inventory, and my tickets are issued |
| AC-039 | I have a pending order | my payment fails or I abandon it | the order is not confirmed, no tickets are issued, and the held quantities are released back to availability |
| AC-040 | a payment is confirmed | the order is recorded | the platform commission is recorded against the order so the organizer's net can be calculated |

### US-017: Receive booking confirmation

**Priority:** high

> As a buyer who has paid, I want to receive confirmation of my booking, so that I know my tickets are secured.

| ID | Given | When | Then |
|---|---|---|---|
| AC-041 | my payment has succeeded | the order is confirmed | I see an on-screen confirmation with the order reference and am sent a confirmation email |
| AC-042 | email delivery is temporarily unavailable | my order is confirmed | the booking is still recorded and visible in my account even if the email is delayed |

## EPIC-006: QR-Code Tickets

Confirmed bookings produce QR-code tickets shown in the buyer's account and delivered by email. Assumption: transactional email is delivered via a third-party provider (requires an API key); SMS notification via an Indian gateway is optional and not drafted here. Assumption: web-based QR scanning at the gate described in the broader vision is beyond this lightweight MVP scope and is noted rather than built.

### US-018: View QR-code tickets in my account

**Priority:** critical

> As a buyer with a confirmed booking, I want to see my tickets as QR codes in my account, so that I can present them for entry.

| ID | Given | When | Then |
|---|---|---|---|
| AC-043 | I have a confirmed, paid order | I open my tickets in my account | I see one QR-code ticket per booked ticket, each with the event name, date, venue and a unique identifier |
| AC-044 | an order was never confirmed or payment failed | I view my account | no QR tickets are shown for that order |
| AC-045 | I view my tickets on a phone | the page renders | each QR code is legible and scannable on a mobile screen |

### US-019: Receive QR-code tickets by email

**Priority:** high

> As a buyer with a confirmed booking, I want to receive my QR-code tickets by email, so that I have them even without logging in.

| ID | Given | When | Then |
|---|---|---|---|
| AC-046 | my order is confirmed | the ticket email is generated | an email is sent to my registered address containing the event details and the QR-code ticket(s) or a link to view them |
| AC-047 | the email provider returns a delivery failure | sending is attempted | the failure is logged and the tickets remain available in my account |

## EPIC-007: Organizer Sales Dashboard

Organizers see sales counts and an attendee list for their events. Assumption: payout status shown in the broader vision depends on organizer payouts, which are deferred beyond this lightweight MVP; the dashboard here covers sales counts and attendee lists only, and payout status is noted as an assumption.

### US-020: View sales counts per event

**Priority:** high

> As a logged-in organizer, I want to see how many tickets have sold for each of my events, so that I can track demand and revenue.

| ID | Given | When | Then |
|---|---|---|---|
| AC-048 | I own events with confirmed bookings | I open my dashboard | each event shows tickets sold, remaining availability, and gross revenue from confirmed orders |
| AC-049 | an order was not confirmed | I view my sales counts | its tickets are not counted in sold totals or revenue |
| AC-050 | I am a logged-in organizer | I view the dashboard | I see only events that I own |

### US-021: View attendee list for an event

**Priority:** high

> As a logged-in organizer, I want to see the list of attendees who hold tickets for my event, so that I can prepare for entry and manage the event.

| ID | Given | When | Then |
|---|---|---|---|
| AC-051 | I own an event with confirmed bookings | I open its attendee list | I see each attendee with the ticket type, quantity and ticket identifiers from confirmed orders |
| AC-052 | the event has no confirmed bookings yet | I open its attendee list | I see a clear empty state |
| AC-053 | I attempt to view the attendee list of an event I do not own | I request it | access is denied |

## EPIC-008: DPDP Consent & Data Rights

The platform captures DPDP-compliant consent at signup for both buyers and organizers and lets users withdraw it as easily as it was given. Assumption: data is stored in India; adult users are assumed and under-18 parental-consent flows are out of scope for the MVP; no targeted advertising to children.

### US-022: Capture DPDP consent at signup

**Priority:** critical

> As a person registering as a buyer or organizer, I want to be shown a clear privacy notice and give explicit consent before my data is processed, so that my personal data is handled lawfully under the DPDP Act.

| ID | Given | When | Then |
|---|---|---|---|
| AC-054 | I am on the sign-up page | the form is shown | I see a clear notice of what personal data is collected and why, with a link to the privacy policy, and must give explicit consent before I can register |
| AC-055 | I do not accept the required consent | I try to submit the sign-up form | registration is blocked and no account or personal data is stored |
| AC-056 | I give consent at signup | my account is created | the consent, its purpose and timestamp are recorded against my account |

### US-023: Withdraw consent as easily as it was given

**Priority:** high

> As a registered buyer or organizer, I want to withdraw my consent and request deletion of my personal data, so that I can exercise my data-principal rights under the DPDP Act.

| ID | Given | When | Then |
|---|---|---|---|
| AC-057 | I am a logged-in user | I open my privacy settings | I can withdraw consent through a mechanism no harder to use than the one that captured it |
| AC-058 | I withdraw my consent | the request is processed | the withdrawal is recorded and my data stops being processed for the withdrawn purposes, subject to records the platform must retain for legal and transactional obligations |
| AC-059 | I have withdrawn consent | I view a confirmation | I am told what has stopped and what, if anything, is lawfully retained and why |
<!-- sdlc:auto:end epics -->
