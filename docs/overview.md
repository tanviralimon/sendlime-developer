---
sidebar_position: 1
---

# Getting Started

Welcome to the SendLime API v2 platform! SendLime provides REST APIs that enable you to send SMS and WhatsApp messages programmatically.

**What you will learn:**
- [Signing up for an account](#signing-up-for-an-account)
- [Creating an API Key](#creating-an-api-key)
- [Making your first API call](#making-your-first-api-call)
- [Accessing the Dashboard](#accessing-the-dashboard)

## Signing up for an account
To work with our APIs, you will need to [sign up for an account](https://dash.sendlime.com).

## Creating an API Key
Once you have an account, navigate to **API Keys** in your dashboard to generate a key.

1. Go to the [API Keys](https://dash.sendlime.com/dashboard/api-keys) page
2. Click **Create API Key** and give it a name (e.g. "Production Server")
3. Copy the key immediately — it starts with `sl_live_` and **will only be shown once**
4. Store it securely (e.g. in environment variables)

:::caution

Your API key is a secret. Do not commit it to version control or expose it in client-side code.

:::

## Making your first API call

Use your API key in the `Authorization` header as a Bearer token:

```bash
curl -X POST https://api.sendlime.com/api/v2/messages \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "8801XXXXXXXXX",
    "message": "Hello from SendLime!",
    "channel": "sms"
  }'
```

A successful response looks like:

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

You can also send WhatsApp messages through the same endpoint by setting
`"channel": "whatsapp"`.

```bash
curl -X POST https://api.sendlime.com/api/v2/messages \
  -H "Authorization: Bearer sl_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "8801XXXXXXXXX",
    "message": "Hello on WhatsApp!",
    "channel": "whatsapp"
  }'
```

## Accessing the Dashboard
The [Dashboard](https://dash.sendlime.com/dashboard) lets you:

- **Manage API keys.** Create, view, and revoke keys.
- **View message logs.** See all sent messages with delivery status.
- **Manage your balance.** Top up credits and track usage.
- **Configure channels.** Set up SMS brands and WhatsApp profiles.

## Base URL

All API endpoints use the following base URL:

```
https://api.sendlime.com/api/v2
```

## Authentication

Every request must include your API key in the `Authorization` header:

```
Authorization: Bearer sl_live_your_key_here
```

## Channels

| Channel | Value | Notes |
|---------|-------|-------|
| SMS | `sms` | Costs `0.5` BDT per delivered message. If `brand_id` is omitted, SendLime uses the default non-masking sender. |
| WhatsApp | `whatsapp` | Currently costs `0` credits. SendLime checks whether the recipient is on WhatsApp before sending. |
