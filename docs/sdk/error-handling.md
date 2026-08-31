---
sidebar_position: 3
---

# Error Handling

The SDK provides typed errors with full access to the API response.

## Error hierarchy

```
SendLimeError          (base class)
├── SendLimeApiError   (HTTP 4xx/5xx)
└── SendLimeNetworkError (connection failures)
```

## SendLimeApiError

Thrown when the API returns a non-2xx status code.

| Property     | Type     | Description                                        |
|--------------|----------|----------------------------------------------------|
| `status`     | `number` | HTTP status code (e.g. `402`, `422`, `429`).       |
| `message`    | `string` | Error message from the API.                        |
| `body`       | `object` | Full response body.                                |
| `details`    | `object` | Validation errors (on `422`).                      |
| `retryAfter` | `number` | Seconds to wait before retrying (on `429`).        |

## SendLimeNetworkError

Thrown when the `fetch` call itself fails (DNS, timeout, etc.).

| Property | Type    | Description                |
|----------|---------|----------------------------|
| `cause`  | `Error` | The original `fetch` error. |

## Example

```typescript
import { SendLimeApiError, SendLimeNetworkError } from "@sendlime/node";

try {
  await sendlime.messages.send({ to: "+880...", message: "Hi" });
} catch (err) {
  if (err instanceof SendLimeApiError) {
    console.error(err.status);     // 402
    console.error(err.message);    // "Insufficient balance"
    console.error(err.body);       // { error, required, available }
    console.error(err.details);    // validation errors (422)
    console.error(err.retryAfter); // seconds to wait (429)
  }

  if (err instanceof SendLimeNetworkError) {
    console.error("Connection failed:", err.cause);
  }
}
```
