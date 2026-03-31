---
sidebar_position: 3
---

# Check Balance

Retrieve your current account balance.

```
GET /api/v2/balance
```

## Authentication

```
Authorization: Bearer sl_live_your_key_here
```

## Example request

```bash
curl "https://app.sendlime.com/api/v2/balance" \
  -H "Authorization: Bearer sl_live_your_key_here"
```

## Success response

**Status: `200 OK`**

```json
{
  "success": true,
  "data": {
    "balance": 150.0,
    "currency": "BDT"
  }
}
```

### Response fields

| Field      | Type     | Description                          |
|------------|----------|--------------------------------------|
| `balance`  | `number` | Your current account balance         |
| `currency` | `string` | Currency code (always `"BDT"`)       |

## Error response

### 401 Unauthorized
```json
{ "error": "Invalid or revoked API key" }
```
