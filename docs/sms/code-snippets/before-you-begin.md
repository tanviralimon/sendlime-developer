---
sidebar_position: 1
---

# Before you Begin

## What are Code Snippets?

Code snippets are short pieces of code you can reuse in your own applications. Please read this information carefully before attempting to use the code snippets.

## Prerequisites

1. [Create a SendLime account](https://app.sendlime.com) — sign up for free.
2. [Generate an API key](https://app.sendlime.com/dashboard/api-keys) — your key starts with `sl_live_` and is used in the `Authorization` header.
3. **Add balance** — SMS messages cost credits. Top up from the [Billing](https://app.sendlime.com/dashboard/billing/payments) page.

## Authentication

All API requests require a Bearer token in the `Authorization` header:

```
Authorization: Bearer sl_live_your_key_here
```

## Base URL

```
https://app.sendlime.com/api/v2
```
