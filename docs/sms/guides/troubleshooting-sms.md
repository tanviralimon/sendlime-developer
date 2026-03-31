---
sidebar_position: 4
---

# Troubleshooting

When you send a message via the SendLime API, it returns a JSON response indicating success or failure.

## Successful response

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

## Error response

```json
{
  "error": "Insufficient balance",
  "required": 0.5,
  "available": 0
}
```

:::info

A `"status": "delivered"` in the API response means the message was accepted by the downstream carrier. It is not an absolute guarantee of delivery to the handset.

:::

:::caution

As per the BTRC guidelines, promotional messages have to be in Bangla.

:::

## HTTP status codes

| Status Code | Meaning                | Description                                                         |
|-------------|------------------------|---------------------------------------------------------------------|
| `200`       | Success                | The message was successfully sent.                                  |
| `400`       | Bad Request            | Invalid request body, missing fields, or recipient not on WhatsApp. |
| `401`       | Unauthorized           | Missing, invalid, or revoked API key.                               |
| `402`       | Payment Required       | Insufficient balance to send the message.                           |
| `422`       | Validation Error       | Request body failed validation (check `details` field).             |
| `500`       | Internal Server Error  | An error occurred while processing the message.                     |

## Common errors

### Invalid API key format
```json
{ "error": "Invalid API key format" }
```
Your API key must start with `sl_live_`. Make sure you're using the full key from your dashboard.

### Invalid or revoked API key
```json
{ "error": "Invalid or revoked API key" }
```
The key doesn't exist or has been revoked. Generate a new one from the [API Keys](https://dash.sendlime.com/dashboard/api-keys) page.

### Insufficient balance
```json
{ "error": "Insufficient balance", "required": 0.5, "available": 0 }
```
Top up your account balance from the [Billing](https://dash.sendlime.com/dashboard/billing/payments) page.

### Validation failed
```json
{
  "error": "Validation failed",
  "details": {
    "to": ["Recipient number is required"],
    "message": ["Message body is required"]
  }
}
```
Check the `details` field to see which parameters are missing or invalid.
