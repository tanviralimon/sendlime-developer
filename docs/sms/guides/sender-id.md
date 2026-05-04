---
sidebar_position: 1
---

# Sender Identity and WhatsApp Profiles

`brand_id` is an optional selector for the sender or profile you want to use.

If you omit `brand_id`, SendLime uses a default sender/profile:

- SMS uses the default non-masking sender.
- WhatsApp uses your default WhatsApp profile.

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

- The `brand_id` parameter is optional.
- For SMS, pass an approved brand name, registered non-masking phone number, or brand database ID.
- The brand must be in **approved** status in your dashboard.
- If you omit `brand_id`, SMS uses the default non-masking sender.

## For WhatsApp

For WhatsApp messages, `brand_id` is not needed for the common case. Your default WhatsApp profile is used automatically.

Pass `brand_id` only when you want to route through a specific approved WhatsApp profile.

```json
{
  "to": "8801XXXXXXXXX",
  "message": "Hello on WhatsApp!",
  "channel": "whatsapp",
  "brand_id": "your_whatsapp_profile_brand_id"
}
```
