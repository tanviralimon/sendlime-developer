---
sidebar_position: 4
---

# Delivery Status

When you send a message via the API, the response includes a `status` field indicating the delivery outcome.

:::info

A `"status": "delivered"` means the message was accepted by the carrier network. In most situations this is a reliable indicator, but it is not an absolute guarantee of handset delivery.

:::

## Understanding the response

A successful send returns:

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

## Status values

The `status` field can have the following values:

| `status`      | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `delivered`   | Message has been delivered to the carrier network                       |
| `failed`      | Message could not be delivered                                         |

## Checking past messages

You can retrieve the status of previously sent messages using the logs endpoint:

```bash
curl "https://api.sendlime.com/api/v2/messages?limit=50" \
  -H "Authorization: Bearer sl_live_your_key_here"
```

Each log entry includes the `status`, `channel`, `recipient`, and `createdAt` fields.
