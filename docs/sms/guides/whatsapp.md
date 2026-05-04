---
sidebar_position: 3
---

# WhatsApp Messaging

SendLime sends WhatsApp messages through the same Messaging API endpoint used for SMS:

```
POST /api/v2/messages
```

Set `channel` to `"whatsapp"`.

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

## How WhatsApp sending works

1. SendLime authenticates your API key.
2. SendLime checks whether the recipient number exists on WhatsApp.
3. The message is sent through your default WhatsApp profile.
4. The message is logged with channel `whatsapp`.

## Selecting a WhatsApp profile

By default, SendLime uses your default WhatsApp profile. To use a specific approved WhatsApp profile, pass its `brand_id`.

```json
{
  "to": "8801XXXXXXXXX",
  "message": "Hello from a selected profile!",
  "channel": "whatsapp",
  "brand_id": "your_whatsapp_profile_brand_id"
}
```

## Pricing

WhatsApp messages currently cost `0` credits in the API.

## Common WhatsApp errors

### Recipient number is not on WhatsApp

```json
{ "error": "Recipient number is not on WhatsApp" }
```

Use a number that is registered on WhatsApp.

### Brand not found or not approved

```json
{ "error": "Brand not found or not approved" }
```

Use an approved WhatsApp profile, or omit `brand_id` to use your default WhatsApp profile.
