# event bookingf — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
event booking app

**Documentation version:** v4
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 28 entries |
| [Development](development/README.md) | 37 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 6 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | deployed |
| [Runbook](deployment/runbook.md) | deployed |
| [Release notes](deployment/release-notes.md) | 1 release |
| [Traceability matrix](traceability-matrix.md) | 23 requirements |
| [Changelog](CHANGELOG.md) | 4 versions |
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

- Input does not specify which exact backlog item IDs are assigned to this sprint; mapping to EPIC-001/002/008 is thematic inference from the sprint goal text only.
- No sprint execution status (started/completed, velocity achieved) provided.
- Input does not specify which exact backlog item IDs are assigned to this sprint; mapping is thematic inference only.
- No sprint execution status provided.
- No implementation/completion status for the epic or its child stories provided.
- No implementation/completion status for the epic or its child stories/tasks provided.
- Input does not list other DPDP obligations (e.g. data access/erasure requests, breach notification) beyond consent capture/withdrawal; coverage of broader DPDP requirements cannot be confirmed from this input.
- No implementation status, code, or completion evidence provided.
- Not explicitly mapped to a sprint number in the input.
- No implementation status, code, or completion evidence provided for the story or its sub-tasks.
- Specific DPDP consent-capture requirements (what must be disclosed/recorded) are not detailed in this input beyond the story title.
- Specific mechanism for consent withdrawal is not detailed in this input beyond the story title.

### Testing

- Testing phase has not started; no test plans or results exist to document.

### Deployment

- No deployment date/timestamp given.
- No record of who approved or executed this deployment.
- No release notes or list of requirement/ticket ids (e.g. US-001..US-023) included in this version -- cannot establish traceability from this deployment back to specific requirements.
- No rollback plan or previous-version reference recorded.
- No environment/configuration details (env vars, infra, region) recorded.
- No post-deployment verification, smoke test, or health-check results recorded.
- No confirmation that a testing phase preceded this deployment -- testing phase input was not supplied alongside this deployment record.

### Maintenance

- No maintenance history exists yet because the application has not been deployed.
<!-- sdlc:auto:end open-gaps -->
