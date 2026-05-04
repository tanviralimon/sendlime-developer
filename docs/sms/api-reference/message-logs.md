---
sidebar_position: 2
---

# Message Logs

Retrieve your sent message history.

```
GET /api/v2/messages
```

## Authentication

```
Authorization: Bearer sl_live_your_key_here
```

## Query parameters

| Parameter | Type     | Required | Default | Description                                           |
|-----------|----------|----------|---------|-------------------------------------------------------|
| `limit`   | `number` | No       | `50`    | Number of results to return (max `200`).              |
| `page`    | `number` | No       | `1`     | Page number for pagination.                           |
| `from`    | `string` | No       | —       | Start date filter (ISO 8601, e.g. `2025-01-01`).      |
| `to`      | `string` | No       | —       | End date filter (ISO 8601, e.g. `2025-01-31`).        |

:::info

Both `from` and `to` must be provided together for date filtering to work.

:::

## Example request

```bash
curl "https://api.sendlime.com/api/v2/messages?limit=10&page=1" \
  -H "Authorization: Bearer sl_live_your_key_here"
```

### With date filter

```bash
curl "https://api.sendlime.com/api/v2/messages?from=2025-01-01&to=2025-01-31&limit=50" \
  -H "Authorization: Bearer sl_live_your_key_here"
```

## Success response

**Status: `200 OK`**

```json
{
  "success": true,
  "data": [
    {
      "id": "clx1abc2def3ghi4",
      "recipient": "8801XXXXXXXXX",
      "message": "Hello from SendLime!",
      "channel": "non-mask",
      "status": "delivered",
      "price": "0.5",
      "gatewayId": "580000908Q23PJCF",
      "errorMessage": null,
      "createdAt": "2025-03-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 57,
    "total_pages": 6
  }
}
```

### Response fields (each log entry)

| Field          | Type            | Description                               |
|----------------|-----------------|-------------------------------------------|
| `id`           | `string`        | Unique log entry ID                       |
| `recipient`    | `string`        | Recipient phone number                    |
| `message`      | `string`        | Message body                              |
| `channel`      | `string`        | `"mask"`, `"non-mask"`, or `"whatsapp"`   |
| `status`       | `string`        | `accepted`, `pending`, `delivered`, `undelivered`, `failed`, `unknown`, or `rejected` |
| `price`        | `string`        | Cost of the message                       |
| `gatewayId`    | `string|null`   | Gateway message ID                        |
| `errorMessage` | `string|null`   | Error details if failed                   |
| `createdAt`    | `string`        | ISO 8601 timestamp                        |

### Pagination fields

| Field         | Type     | Description                    |
|---------------|----------|--------------------------------|
| `page`        | `number` | Current page                   |
| `limit`       | `number` | Results per page               |
| `total`       | `number` | Total matching messages        |
| `total_pages` | `number` | Total available pages          |
