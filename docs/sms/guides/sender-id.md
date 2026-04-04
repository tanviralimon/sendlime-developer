---
sidebar_position: 1
---

# Sender Identity

When sending SMS messages, you must specify a `brand_id` to identify the sender. There are two types of SMS:

## Masking SMS

The message is sent using your **brand name** as the sender (e.g., "ORCUS TECH"). Pass your approved brand name as `brand_id`.

```json
{
  "to": "8801XXXXXXXXX",
  "message": "Hello!",
  "channel": "sms",
  "brand_id": "ORCUS TECH"
}
```

## Non-Masking SMS

The message is sent from a **phone number**. Pass your registered phone number brand as `brand_id`.

```json
{
  "to": "8801XXXXXXXXX",
  "message": "Hello!",
  "channel": "sms",
  "brand_id": "8809601001229"
}
```

## How it works

- The `brand_id` parameter is **required for SMS** messages.
- You can pass either the brand **name** or the brand **database ID**.
- The brand must be in **approved** status in your dashboard.

## For WhatsApp

For WhatsApp messages, `brand_id` is **not needed**. Your default WhatsApp profile is used automatically.
