---
sidebar_position: 1
---

# OTP Verification

Send and verify one-time codes over SMS or WhatsApp. No third-party service needed.

## How it works

1. **Send a code** — Call `POST /api/v2/verify` with a phone number. SendLime generates a cryptographically random code and delivers it via SMS or WhatsApp.
2. **User enters the code** — Your app collects the code from the user.
3. **Verify the code** — Call `POST /api/v2/verify/check` with the request ID and code. SendLime returns whether the code is valid.

## Features

- **SMS and WhatsApp** — Send OTP codes through either channel.
- **Configurable code length** — 4 to 10 digits (default: 6).
- **Configurable expiry** — 60 seconds to 1 hour (default: 5 minutes).
- **Attempt limiting** — Codes are invalidated after 3 failed attempts.
- **Rate limiting** — 10 send requests per minute per phone number.
- **Localization** — English and Bengali message templates.
- **Secure** — Codes are compared using constant-time comparison to prevent timing attacks.

## Pricing

- **SMS verification** — Standard SMS rate (currently 0.5 BDT per message).
- **WhatsApp verification** — Free (0 credits).

Balance is charged when the code is sent and refunded automatically if delivery fails.

## Quick example

```bash
# 1. Send a verification code
curl -X POST "https://api.sendlime.com/api/v2/verify" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{"phone_number": "+8801XXXXXXXXX"}'

# Response:
# { "success": true, "data": { "request_id": "vrf_abc123", "to": "+8801XXXXXXXXX", "channel": "sms", "status": "pending", "expires_in": 300 } }

# 2. Verify the code
curl -X POST "https://api.sendlime.com/api/v2/verify/check" \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{"request_id": "vrf_abc123", "code": "483921"}'

# Response:
# { "success": true, "data": { "request_id": "vrf_abc123", "to": "+8801XXXXXXXXX", "status": "verified", "verified_at": "2025-01-15T10:30:00.000Z" } }
```

## Using the SDK

```typescript
import { SendLime } from "@sendlime/node";

const sendlime = new SendLime("sl_live_your_api_key");

// Send a code
const { request_id } = await sendlime.verify.sendCode({
  phone_number: "+8801XXXXXXXXX",
});

// Verify the code
const result = await sendlime.verify.checkCode({
  request_id,
  code: "483921",
});
```
