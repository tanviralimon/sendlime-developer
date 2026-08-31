---
sidebar_position: 2
---

# Send Verification Code

Send an OTP verification code to a phone number.

```
POST /api/v2/verify
```

## Authentication

```
Authorization: Bearer sl_live_your_key_here
```

## Request body

| Parameter      | Type     | Required | Description                                               |
|----------------|----------|----------|------------------------------------------------------------|
| `phone_number` | `string` | Yes      | Recipient phone number in E.164 format (e.g. `+8801XXXXXXXXX`). |
| `channel`      | `string` | No       | `"sms"` (default) or `"whatsapp"`.                         |
| `code_length`  | `number` | No       | Number of digits in the OTP code. Range: 4-10. Default: `6`. |
| `expiry`       | `number` | No       | Seconds until the code expires. Range: 60-3600. Default: `300`. |
| `locale`       | `string` | No       | Message language: `"en-us"` (default) or `"bn-bd"` (Bengali). |
| `brand_id`     | `string` | No       | Sender brand ID. Auto-resolved if omitted.                 |

## Example request

### SMS

```bash
curl -X POST "https://api.sendlime.com/api/v2/verify" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "+8801XXXXXXXXX",
    "channel": "sms",
    "code_length": 6,
    "expiry": 300
  }'
```

### WhatsApp

```bash
curl -X POST "https://api.sendlime.com/api/v2/verify" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "+8801XXXXXXXXX",
    "channel": "whatsapp"
  }'
```

### Bengali message

```bash
curl -X POST "https://api.sendlime.com/api/v2/verify" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "+8801XXXXXXXXX",
    "locale": "bn-bd"
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
    "channel": "sms",
    "status": "pending",
    "expires_in": 300
  }
}
```

### Response fields

| Field        | Type     | Description                                          |
|--------------|----------|------------------------------------------------------|
| `request_id` | `string` | Unique verification request ID. Use this to check the code. |
| `to`         | `string` | Recipient phone number.                              |
| `channel`    | `string` | `"sms"` or `"whatsapp"`.                            |
| `status`     | `string` | Always `"pending"` on success.                       |
| `expires_in` | `number` | Seconds until the code expires.                      |

## Error responses

### 400 Bad Request
```json
{ "error": "Validation failed", "details": { "phone_number": ["Required"] } }
```

### 401 Unauthorized
```json
{ "error": "Invalid or revoked API key" }
```

### 402 Payment Required
```json
{ "error": "Insufficient balance", "required": 0.5, "available": 0 }
```

### 429 Too Many Requests
```json
{ "error": "Rate limit exceeded. Max 10 requests per minute per number.", "retry_after": 42 }
```

```json
{ "error": "Too many pending verifications for this number. Max 5 pending." }
```

### 500 Internal Server Error
```json
{ "error": "Failed to send verification code" }
```

## Rate limits

- **10 requests per minute** per phone number per organization.
- **5 maximum pending verifications** per phone number per organization.

## Pricing

- SMS verification: standard SMS rate (currently 0.5 BDT).
- WhatsApp verification: free (0 credits).
- Balance is charged on send and refunded automatically if delivery fails.
