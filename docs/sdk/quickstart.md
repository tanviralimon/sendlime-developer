---
sidebar_position: 1
---

# Quick Start

Install the official Node.js SDK and send your first message in four lines of code.

## Installation

```bash
npm install @sendlime/node
```

## Send an SMS

```typescript
import { SendLime } from "@sendlime/node";

const sendlime = new SendLime("sl_live_your_api_key");

const result = await sendlime.messages.send({
  to: "+8801XXXXXXXXX",
  message: "Hello from SendLime!",
});

console.log(result.messages[0].id);
```

## Send via WhatsApp

```typescript
const result = await sendlime.messages.send({
  to: "+8801XXXXXXXXX",
  message: "Hello via WhatsApp!",
  channel: "whatsapp",
});
```

## Bulk SMS

```typescript
const result = await sendlime.messages.send({
  to: ["+8801XXXXXXXXX", "+8801YYYYYYYYY"],
  message: "Bulk message to all recipients",
});

console.log(`Sent: ${result.sent}, Failed: ${result.failed}`);
```

## Schedule a message

```typescript
await sendlime.messages.send({
  to: "+8801XXXXXXXXX",
  message: "This will be sent later",
  schedule_time: "2025-12-31T10:00:00Z",
});
```

## Custom base URL and fetch

Works in Edge Runtime, Cloudflare Workers, and any environment with a custom `fetch` implementation.

```typescript
const sendlime = new SendLime("sl_live_...", {
  baseUrl: "https://staging.sendlime.com/api/v2",
  fetch: customFetchImplementation,
});
```

## Constructor options

| Option    | Type     | Default                                  | Description                          |
|-----------|----------|------------------------------------------|--------------------------------------|
| `baseUrl` | `string` | `https://api.sendlime.com/api/v2`        | API base URL.                        |
| `fetch`   | `function` | `globalThis.fetch`                     | Custom fetch implementation.         |
