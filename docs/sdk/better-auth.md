---
sidebar_position: 4
---

# Better Auth Integration

Drop-in OTP sender for [Better Auth](https://better-auth.com)'s phone number plugin.

## Installation

```bash
npm install @sendlime/better-auth @sendlime/node
```

## Basic setup

```typescript
import { betterAuth } from "better-auth";
import { phoneNumber } from "better-auth/plugins";
import { sendlimeOTP } from "@sendlime/better-auth";

export const auth = betterAuth({
  plugins: [
    phoneNumber({
      sendOTP: sendlimeOTP({
        apiKey: process.env.SENDLIME_API_KEY,
      }),
    }),
  ],
});
```

## WhatsApp OTP

Send verification codes via WhatsApp instead of SMS.

```typescript
sendlimeOTP({
  apiKey: "sl_live_...",
  channel: "whatsapp",
})
```

## Auto channel detection

Bangladesh (`+880`) numbers are sent via WhatsApp with automatic SMS fallback. All other country codes use SMS directly.

```typescript
sendlimeOTP({
  apiKey: "sl_live_...",
  channel: "auto",
})
```

## Custom message template

Use `{{code}}` as a placeholder for the OTP code.

```typescript
sendlimeOTP({
  apiKey: "sl_live_...",
  messageTemplate: "SendLime: {{code}} is your verification code",
})
```

## Options

| Option            | Type                             | Default                                     | Description                       |
|-------------------|----------------------------------|----------------------------------------------|-----------------------------------|
| `apiKey`          | `string`                         | -                                            | Your SendLime API key. Required.  |
| `channel`         | `"sms" \| "whatsapp" \| "auto"` | `"sms"`                                      | Delivery channel.                 |
| `brandId`         | `string`                         | -                                            | Sender brand ID.                  |
| `messageTemplate` | `string`                         | `"Your verification code is {{code}}"`       | OTP message template.             |

## Full example with client

```typescript
// auth-client.ts
import { createAuthClient } from "better-auth/client";
import { phoneNumberClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [phoneNumberClient()],
});

// Send OTP
await authClient.phoneNumber.sendOtp({
  phoneNumber: "+8801XXXXXXXXX",
});

// Verify
await authClient.phoneNumber.verify({
  phoneNumber: "+8801XXXXXXXXX",
  code: "123456",
});
```
