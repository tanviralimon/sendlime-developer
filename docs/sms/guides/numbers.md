---
sidebar_position: 2
---

# Numbers

## Overview

Numbers are a key concept to understand when working with the SendLime API. The following points should be considered before developing your application.

## Formatting

The SendLime API requires phone numbers in E.164 format. This means that numbers:

- Omit both a leading `+` and the international access code such as `00` or `001`.
- Contain no special characters, such as a space, `()` or `-`

For example, a Bangladeshi number would have the format `8801751111992`.

## Examples

| Country     | Format           |
|-------------|------------------|
| Bangladesh  | `8801XXXXXXXXX`  |
| India       | `91XXXXXXXXXX`   |
| USA         | `1XXXXXXXXXX`    |
| UK          | `44XXXXXXXXXX`   |
