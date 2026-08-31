---
sidebar_position: 3
---

# Check Verification Code

Verify an OTP code that was sent to a phone number.

```
POST /api/v2/verify/check
```

## Authentication

```
Authorization: Bearer sl_live_your_key_here
```

## Request body

| Parameter    | Type     | Required | Description                              |
|--------------|----------|----------|------------------------------------------|
| `request_id` | `string` | Yes      | The verification request ID from the send endpoint. |
| `code`       | `string` | Yes      | The code the user entered.               |

## Example request

```bash
curl -X POST "https://api.sendlime.com/api/v2/verify/check" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "request_id": "vrf_abc123def456",
    "code": "483921"
  }'
```

## Success response

**Status: `200 OK`**

```json
{
  "success": true,
  "data": {
    "request_id": "vrf_abc123def456",
    "to": "+8801XXXXXXXXX",
    "status": "verified",
    "verified_at": "2025-01-15T10:30:00.000Z"
  }
}
```

### Response fields

| Field         | Type     | Description                              |
|---------------|----------|------------------------------------------|
| `request_id`  | `string` | The verification request ID.             |
| `to`          | `string` | Phone number that was verified.          |
| `status`      | `string` | `"verified"` on success.                |
| `verified_at` | `string` | ISO 8601 timestamp of verification.      |

## Error responses

### 400 Bad Request — wrong code

```json
{
  "success": false,
  "error": "Invalid verification code",
  "data": {
    "request_id": "vrf_abc123def456",
    "status": "pending",
    "attempts_remaining": 2
  }
}
```

### 404 Not Found

```json
{ "error": "Verification request not found or does not belong to this organization" }
```

### 410 Gone — expired or failed

```json
{
  "success": false,
  "error": "Verification request has expired",
  "data": {
    "request_id": "vrf_abc123def456",
    "status": "expired"
  }
}
```

### 429 Too Many Attempts

```json
{
  "success": false,
  "error": "Too many failed attempts",
  "data": {
    "request_id": "vrf_abc123def456",
    "status": "failed"
  }
}
```

### 401 Unauthorized
```json
{ "error": "Invalid or revoked API key" }
```

## Behavior

- A correct code immediately marks the verification as `"verified"`.
- Each wrong code decrements `attempts_remaining` (default: 3 max attempts).
- After all attempts are used, the verification is marked as `"failed"` and returns `429`.
- Expired verifications return `410` regardless of the code.
- Already verified requests return the successful response again (idempotent).
- Code comparison uses constant-time comparison to prevent timing attacks.

## Rate limits

- **20 check requests per minute** per organization.
