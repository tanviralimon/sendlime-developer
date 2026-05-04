---
sidebar_position: 1
---

# Before you Begin

## What are Code Snippets?

Code snippets are short pieces of code you can reuse in your own applications. Please read this information carefully before attempting to use the code snippets.

## Prerequisites

1. [Create a SendLime account](https://dash.sendlime.com) — sign up for free.
2. [Generate an API key](https://dash.sendlime.com/dashboard/api-keys) — your key starts with `sl_live_` and is used in the `Authorization` header.
3. **Add balance for SMS** — SMS messages cost credits. Top up from the [Billing](https://dash.sendlime.com/dashboard/billing/payments) page.
4. **Connect WhatsApp for WhatsApp messages** — use your default WhatsApp profile, or pass a WhatsApp `brand_id` to select a specific approved profile.

## Authentication

All API requests require a Bearer token in the `Authorization` header:

```
Authorization: Bearer sl_live_your_key_here
```

## Base URL

```
https://api.sendlime.com/api/v2
```

## Channels

- Use `"channel": "sms"` for SMS.
- Use `"channel": "whatsapp"` for WhatsApp.
- SMS currently costs `0.5` BDT per delivered message.
- WhatsApp currently costs `0` credits, but the recipient number must be on WhatsApp.
