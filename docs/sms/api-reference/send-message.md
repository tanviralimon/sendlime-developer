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
| `to`        | `string` | Yes      | Recipient phone number in E.164 format (for example `8801XXXXXXXXX`). |
| `message`   | `string` | Yes      | The message body to send.                                       |
| `channel`   | `string` | No       | `"sms"` (default) or `"whatsapp"`.                              |
| `brand_id`  | `string` | No       | Optional sender/profile selector. For SMS, pass an approved masking brand name, registered non-masking number, or brand ID. If omitted, SendLime uses the default non-masking sender. For WhatsApp, pass a WhatsApp brand/profile ID to override the default WhatsApp profile. |

## Channel behavior

| Channel | Behavior |
|---------|----------|
| `sms` | Sends through SMS. Delivered messages currently cost `0.5` BDT. |
| `whatsapp` | Checks whether the recipient is on WhatsApp, then sends through your default WhatsApp profile unless `brand_id` selects another approved WhatsApp profile. WhatsApp messages currently cost `0` credits. |

## Example request

### SMS

```bash
curl -X POST "https://api.sendlime.com/api/v2/messages" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "8801XXXXXXXXX",
    "message": "Hello from SendLime!",
    "channel": "sms",
    "brand_id": "your_brand_id_here"
  }'
```

### WhatsApp

```bash
curl -X POST "https://api.sendlime.com/api/v2/messages" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "8801XXXXXXXXX",
    "message": "Hello via WhatsApp!",
    "channel": "whatsapp"
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
| `status`            | `string` | Successful API sends return `"delivered"` |
| `credits_remaining` | `number` | Your remaining account balance          |

## Error responses

### 400 Bad Request
```json
{ "error": "Recipient number is not on WhatsApp" }
```

```json
{ "error": "Brand not found or not approved" }
```

### 401 Unauthorized
```json
{ "error": "Invalid or revoked API key" }
```

### 403 Forbidden
```json
{ "error": "Request from unauthorized IP address" }
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

### 429 Too Many Requests
```json
{ "error": "Rate limit exceeded", "retry_after": 42 }
```

### 500 Internal Server Error
```json
{ "error": "Error sending WhatsApp message", "status": "failed" }
```
