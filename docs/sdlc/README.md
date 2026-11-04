# event bookingf — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
event booking app

**Documentation version:** v2
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 28 entries |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | not generated yet |
| [API reference](development/api-reference.md) | 0 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 23 requirements |
| [Changelog](CHANGELOG.md) | 2 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- No approval record for the scope document itself (only the tech stack and services are explicitly marked as product-owner approved).
- No DPDP-recognised Consent Manager service is included among approved services; consent is captured directly by the app only.
- Epic text says 'exact providers to be confirmed' while the approved services list names Google OAuth specifically — confirm this is the sole provider for v1.
- Epic notes organizer accounts may require platform-admin moderation before publishing in the broader vision, but moderation workflows are explicitly out of this MVP's design scope — confirm no moderation gate exists for v1.
- Periodic organizer payouts and buyer self-service refunds are deferred per epic assumption; only organizer-cancelled-event refunds are minimally handled — refund/payout mechanics are not detailed.
- No DPDP-recognised Consent Manager integration; withdrawal/deletion is handled directly by the platform only.
- The actual password strength rule set (length, complexity, etc.) is not defined in the requirements input.
- No age-verification or parental-consent mechanism exists; if minors in fact use the platform, this is an unaddressed DPDP compliance exposure, not merely a documentation gap.

### Architecture

- Architecture input does not explicitly map components/endpoints to individual US-001..US-023 requirement ids; only NFR-001, NFR-002, NFR-008, NFR-009, NFR-011, NFR-012 are referenced by id in the source, so full requirement-to-architecture traceability should be confirmed manually.
- No date is recorded for when this architecture version was approved or by whom.
- No explicit foreign-key/index/constraint details are given beyond the row-level locking behavior on ticket_types.
- No details given on autoscaling policy, multi-AZ setup, networking/VPC layout, or disaster-recovery plan for this deployment.

### Development

- Development phase has not started; no sprint plans, tickets, or code-level records exist to document.

### Testing

- Testing phase has not started; no test plans or results exist to document.

### Deployment

- No deployment recorded yet; no release, environment, or rollout information exists to document.

### Maintenance

- No maintenance history exists yet because the application has not been deployed.
<!-- sdlc:auto:end open-gaps -->
