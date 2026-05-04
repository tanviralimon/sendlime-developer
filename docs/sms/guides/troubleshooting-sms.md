---
sidebar_position: 5
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
| `403`       | Forbidden              | Request IP is not allowed by the API key IP whitelist.              |
| `402`       | Payment Required       | Insufficient balance to send the message.                           |
| `422`       | Validation Error       | Request body failed validation (check `details` field).             |
| `429`       | Too Many Requests      | API key rate limit exceeded.                                        |
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

### Recipient is not on WhatsApp
```json
{ "error": "Recipient number is not on WhatsApp" }
```
Use a phone number that is registered on WhatsApp, without spaces or symbols.

### Brand not found or not approved
```json
{ "error": "Brand not found or not approved" }
```
Use an approved SMS sender or WhatsApp profile, or omit `brand_id` to use the default sender/profile.

### Unauthorized IP address
```json
{ "error": "Request from unauthorized IP address" }
```
Update the API key IP whitelist in the dashboard, or send the request from an allowed IP.

### Rate limit exceeded
```json
{ "error": "Rate limit exceeded", "retry_after": 42 }
```
Wait for the `retry_after` seconds value before retrying.

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
