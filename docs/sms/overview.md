---
sidebar_position: 1
sidebar_label: Overview
---

# Messaging API

SendLime's Messaging API v2 enables you to send SMS and WhatsApp messages using our REST API.

- Programmatically send high volumes of SMS and WhatsApp messages.
- Send messages with low latency and high delivery rates.
- Scale your applications with familiar web technologies.
- Pay only for what you use, nothing more.

## Channels

| Channel   | Endpoint                          | Description                     |
|-----------|-----------------------------------|---------------------------------|
| SMS       | `POST /api/v2/messages`           | Send text messages via SMS      |
| WhatsApp  | `POST /api/v2/messages`           | Send messages via WhatsApp      |

Both channels use the same endpoint — specify `"channel": "sms"` or `"channel": "whatsapp"` in the request body.

## Channel behavior

| Channel | Sender/profile behavior | Credits |
|---------|-------------------------|---------|
| SMS | Pass `brand_id` to use an approved masking or non-masking sender. If omitted, SendLime uses the default non-masking sender. | `0.5` BDT per delivered message |
| WhatsApp | Pass `brand_id` only when you want to use a specific approved WhatsApp profile. If omitted, SendLime uses your default WhatsApp profile. | Currently `0` credits |

## Quick Example

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

## Contents

- [Code Snippets](code-snippets/before-you-begin) — Ready-to-use examples in cURL, Node.js, and Python
- [Guides](guides/numbers) — Number formatting, sender identity, WhatsApp, troubleshooting
- [API Reference](https://api.sendlime.com/api-docs) — Full endpoint documentation

## Concepts

Before using the SendLime API, familiarize yourself with the following:

- [Number format](guides/numbers) — Phone numbers must be in E.164 format.
- [Sender identity](guides/sender-id) — How the `brand_id` parameter works.
- [WhatsApp messaging](guides/whatsapp) — How WhatsApp delivery and profiles work.
- [Troubleshooting](guides/troubleshooting-sms) — Error codes and common issues.
