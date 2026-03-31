---
sidebar_position: 1
---

# Send Message

Send an SMS or WhatsApp message.

```
POST /api/v2/messages
```

## Authentication

```
Authorization: Bearer sl_live_your_key_here
```

## Request body

| Parameter   | Type     | Required | Description                                                     |
|-------------|----------|----------|-----------------------------------------------------------------|
| `to`        | `string` | Yes      | Recipient phone number in E.164 format (e.g. `8801XXXXXXXXX`). |
| `message`   | `string` | Yes      | The message body to send.                                       |
| `channel`   | `string` | No       | `"sms"` (default) or `"whatsapp"`.                              |
| `brand_id`  | `string` | No       | Brand ID for sender identity. If omitted, default sender is used. |

## Example request

```bash
curl -X POST "https://brain.sendlime.com/api/v2/messages" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "8801XXXXXXXXX",
    "message": "Hello from SendLime!",
    "channel": "sms"
  }'
```

## Success response

**Status: `200 OK`**

```json
{
  "success": true,
  "data": {
    "gateway_id": "580000908Q23PJCF",
    "to": "8801XXXXXXXXX",
    "channel": "sms",
    "status": "delivered",
    "credits_remaining": 99.5
  }
}
```

### Response fields

| Field               | Type     | Description                             |
|---------------------|----------|-----------------------------------------|
| `gateway_id`        | `string` | Unique message identifier               |
| `to`                | `string` | Recipient number                        |
| `channel`           | `string` | `"sms"` or `"whatsapp"`                 |
| `status`            | `string` | `"delivered"` or `"failed"`             |
| `credits_remaining` | `number` | Your remaining account balance          |

## Error responses

### 401 Unauthorized
```json
{ "error": "Invalid or revoked API key" }
```

### 402 Payment Required
```json
{ "error": "Insufficient balance", "required": 0.5, "available": 0 }
```

### 422 Validation Error
```json
{
  "error": "Validation failed",
  "details": {
    "to": ["Recipient number is required"]
  }
}
```

### 500 Internal Server Error
```json
{ "error": "Error sending cellular message", "status": "failed" }
```
