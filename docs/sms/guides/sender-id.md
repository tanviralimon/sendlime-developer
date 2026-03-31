---
sidebar_position: 1
---

# Sender Identity

When sending SMS, messages are sent from the number associated with your brand. You can control this using the `brand_id` parameter.

## How it works

- If you pass a `brand_id` in the request, the message will be sent from the number registered to that brand.
- If you omit `brand_id`, a default sender number is used.

## For WhatsApp

When sending WhatsApp messages with a `brand_id`, the message is sent from the WhatsApp profile linked to that brand. The brand must have a WhatsApp profile configured in the dashboard.

## Example

```json
{
  "to": "8801XXXXXXXXX",
  "message": "Hello!",
  "channel": "sms",
  "brand_id": "your_brand_id_here"
}
```
