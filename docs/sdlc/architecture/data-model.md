# Data Model

<!-- sdlc:auto:start entities -->
### users

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| email | varchar | False | — | False |
| password_hash | varchar | False | — | True |
| role | varchar | False | — | False |
| display_name | varchar | False | — | True |
| auth_provider | varchar | False | — | False |
| created_at | timestamptz | False | — | False |

### consents

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| purpose | varchar | False | — | False |
| granted | boolean | False | — | False |
| granted_at | timestamptz | False | — | False |
| withdrawn_at | timestamptz | False | — | True |

### password_reset_tokens

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| token_hash | varchar | False | — | False |
| expires_at | timestamptz | False | — | False |
| used_at | timestamptz | False | — | True |

### events

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| organizer_id | uuid | False | users.id | False |
| title | varchar | False | — | False |
| description | text | False | — | True |
| venue | varchar | False | — | False |
| city | varchar | False | — | True |
| starts_at | timestamptz | False | — | False |
| status | varchar | False | — | False |
| banner_url | varchar | False | — | True |
| created_at | timestamptz | False | — | False |

### ticket_types

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| event_id | uuid | False | events.id | False |
| name | varchar | False | — | False |
| price | numeric | False | — | False |
| total_quantity | integer | False | — | False |
| sold_quantity | integer | False | — | False |

### orders

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| buyer_id | uuid | False | users.id | False |
| event_id | uuid | False | events.id | False |
| order_reference | varchar | False | — | False |
| status | varchar | False | — | False |
| total_amount | numeric | False | — | False |
| commission_amount | numeric | False | — | True |
| razorpay_order_id | varchar | False | — | True |
| razorpay_payment_id | varchar | False | — | True |
| created_at | timestamptz | False | — | False |
| paid_at | timestamptz | False | — | True |

### order_items

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| order_id | uuid | False | orders.id | False |
| ticket_type_id | uuid | False | ticket_types.id | False |
| quantity | integer | False | — | False |
| unit_price | numeric | False | — | False |

### tickets

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| order_item_id | uuid | False | order_items.id | False |
| event_id | uuid | False | events.id | False |
| qr_identifier | varchar | False | — | False |
| qr_image_url | varchar | False | — | True |
| status | varchar | False | — | False |

### audit_logs

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | True |
| action | varchar | False | — | False |
| resource | varchar | False | — | False |
| ip_address | varchar | False | — | True |
| created_at | timestamptz | False | — | False |
<!-- sdlc:auto:end entities -->

<!-- sdlc:auto:start relationships -->
| Source | Target | Type |
|---|---|---|
| users | consents | one-to-many |
| users | password_reset_tokens | one-to-many |
| users | events | one-to-many |
| events | ticket_types | one-to-many |
| users | orders | one-to-many |
| events | orders | one-to-many |
| orders | order_items | one-to-many |
| ticket_types | order_items | one-to-many |
| order_items | tickets | one-to-many |
| events | tickets | one-to-many |
| users | audit_logs | one-to-many |
<!-- sdlc:auto:end relationships -->

<!-- sdlc:auto:start er-diagram -->
```mermaid
erDiagram
  users {
    uuid id PK
    varchar email
    varchar password_hash
    varchar role
    varchar display_name
    varchar auth_provider
    timestamptz created_at
  }
  consents {
    uuid id PK
    uuid user_id FK
    varchar purpose
    boolean granted
    timestamptz granted_at
    timestamptz withdrawn_at
  }
  password_reset_tokens {
    uuid id PK
    uuid user_id FK
    varchar token_hash
    timestamptz expires_at
    timestamptz used_at
  }
  events {
    uuid id PK
    uuid organizer_id FK
    varchar title
    text description
    varchar venue
    varchar city
    timestamptz starts_at
    varchar status
    varchar banner_url
    timestamptz created_at
  }
  ticket_types {
    uuid id PK
    uuid event_id FK
    varchar name
    numeric price
    integer total_quantity
    integer sold_quantity
  }
  orders {
    uuid id PK
    uuid buyer_id FK
    uuid event_id FK
    varchar order_reference
    varchar status
    numeric total_amount
    numeric commission_amount
    varchar razorpay_order_id
    varchar razorpay_payment_id
    timestamptz created_at
    timestamptz paid_at
  }
  order_items {
    uuid id PK
    uuid order_id FK
    uuid ticket_type_id FK
    integer quantity
    numeric unit_price
  }
  tickets {
    uuid id PK
    uuid order_item_id FK
    uuid event_id FK
    varchar qr_identifier
    varchar qr_image_url
    varchar status
  }
  audit_logs {
    uuid id PK
    uuid user_id FK
    varchar action
    varchar resource
    varchar ip_address
    timestamptz created_at
  }
  users ||--o{ consents : "one-to-many"
  users ||--o{ password_reset_tokens : "one-to-many"
  users ||--o{ events : "one-to-many"
  events ||--o{ ticket_types : "one-to-many"
  users ||--o{ orders : "one-to-many"
  events ||--o{ orders : "one-to-many"
  orders ||--o{ order_items : "one-to-many"
  ticket_types ||--o{ order_items : "one-to-many"
  order_items ||--o{ tickets : "one-to-many"
  events ||--o{ tickets : "one-to-many"
  users ||--o{ audit_logs : "one-to-many"
```
<!-- sdlc:auto:end er-diagram -->
