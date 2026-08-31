---
sidebar_position: 2
---

# API Reference

Every method available on the `SendLime` client.

## Messages

### `messages.send(params)`

Send an SMS or WhatsApp message. Supports bulk recipients and scheduling.

| Parameter       | Type                | Required | Description                                    |
|-----------------|---------------------|----------|------------------------------------------------|
| `to`            | `string \| string[]` | Yes      | Recipient number(s). Bulk is SMS-only.         |
| `message`       | `string`            | Yes      | Message body.                                  |
| `channel`       | `"sms" \| "whatsapp"` | No     | Delivery channel. Default: `"sms"`.            |
| `brand_id`      | `string`            | No       | Sender brand ID. Auto-resolved if omitted.     |
| `schedule_time` | `string`            | No       | ISO 8601 datetime. SMS-only.                   |

**Returns:** `SendMessageResponse`

```typescript
const result = await sendlime.messages.send({
  to: "+8801XXXXXXXXX",
  message: "Hello!",
  channel: "sms",
});
// result.gateway_id, result.messages, result.credits_remaining
```

### `messages.list(params?)`

List messages with pagination.

| Parameter | Type     | Required | Description          |
|-----------|----------|----------|----------------------|
| `limit`   | `number` | No       | Results per page.    |
| `page`    | `number` | No       | Page number.         |
| `from`    | `string` | No       | Filter by sender.    |
| `to`      | `string` | No       | Filter by recipient. |

**Returns:** `{ data: MessageListItem[], pagination: Pagination }`

### `messages.get(id)`

Get a single message by ID with delivery sync status.

**Returns:** `{ data: MessageDetail, delivery_sync: DeliverySync }`

---

## Batches

### `batches.get(id)`

Get batch status with per-message breakdown.

**Returns:** `BatchDetail` with fields: `batch_id`, `total`, `accepted`, `pending`, `delivered`, `failed`, `unknown`, `total_cost`, `messages`.

---

## Account

### `balance.get()`

Returns current balance and currency.

```typescript
const { balance, currency } = await sendlime.balance.get();
// { balance: 150.50, currency: "BDT" }
```

### `senders.list()`

List all approved senders (SMS masking/non-masking and WhatsApp profiles).

**Returns:** `Sender[]` with fields: `id`, `brand_id`, `channel`, `type`, `sender`, `label`, `is_default`, `is_usable`, `status`, `subscription`.

### `pricing.get(params?)`

Get per-channel pricing, optionally filtered by country.

| Parameter | Type     | Required | Description                    |
|-----------|----------|----------|--------------------------------|
| `country` | `string` | No       | ISO country code (e.g. `"BD"`). |

**Returns:** `PricingEntry[]` with fields: `channel`, `country`, `price`, `currency`, `unit`.

---

## Verify

### `verify.sendCode(params)`

Send an OTP verification code via SMS or WhatsApp.

| Parameter      | Type                    | Required | Description                              |
|----------------|-------------------------|----------|------------------------------------------|
| `phone_number` | `string`                | Yes      | Recipient phone number in E.164 format.  |
| `channel`      | `"sms" \| "whatsapp"`   | No       | Delivery channel. Default: `"sms"`.      |
| `code_length`  | `number`                | No       | Digits in OTP code (4-10). Default: `6`. |
| `expiry`       | `number`                | No       | Seconds until expiry (60-3600). Default: `300`. |
| `locale`       | `"en-us" \| "bn-bd"`    | No       | Message language. Default: `"en-us"`.    |
| `brand_id`     | `string`                | No       | Sender brand ID.                         |

**Returns:** `SendCodeResponse`

```typescript
const { request_id, expires_in } = await sendlime.verify.sendCode({
  phone_number: "+8801XXXXXXXXX",
  channel: "sms",
});
```

### `verify.checkCode(params)`

Verify an OTP code against a pending request.

| Parameter    | Type     | Required | Description                         |
|--------------|----------|----------|-------------------------------------|
| `request_id` | `string` | Yes      | The request ID from `sendCode()`.   |
| `code`       | `string` | Yes      | The code the user entered.          |

**Returns:** `CheckCodeResponse`

```typescript
const result = await sendlime.verify.checkCode({
  request_id: "vrf_abc123...",
  code: "483921",
});
// result.status === "verified"
```

---

## Webhooks

### `webhooks.listLogs(params?)`

List webhook delivery logs.

| Parameter    | Type     | Required | Description                               |
|--------------|----------|----------|-------------------------------------------|
| `limit`      | `number` | No       | Results per page.                         |
| `page`       | `number` | No       | Page number.                              |
| `status`     | `string` | No       | `"succeeded"` or `"failed"`.              |
| `message_id` | `string` | No       | Filter by message ID.                     |

**Returns:** `{ data: WebhookLog[], pagination: Pagination }`

### `webhooks.retryLog(id)`

Retry a failed webhook delivery.

**Returns:** `RetryWebhookResponse`
