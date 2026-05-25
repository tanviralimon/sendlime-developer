---
sidebar_position: 3
---

# Integrations

Use the official SendLime modules to connect SendLime with your existing platform.

## WHMCS

Send customer and admin notifications from WHMCS using SendLime SMS, WhatsApp, and Smart Route.

[View WHMCS module](https://marketplace.whmcs.com/product/6266-sendlime)

### Install

1. Open the [SendLime WHMCS Marketplace page](https://marketplace.whmcs.com/product/6266-sendlime).
2. Add the module to your WHMCS installation.
3. In WHMCS admin, go to **System Settings > Addon Modules**.
4. Activate **SendLime**.

If you install manually, upload the `sendlime` folder to:

```text
modules/addons/sendlime
```

Then activate it from **System Settings > Addon Modules**.

### Setup

1. Create a SendLime API key from the [SendLime dashboard](https://dash.sendlime.com/dashboard/api-keys).
2. Paste the API key in the SendLime addon settings.
3. Keep **API Base URL** as `https://api.sendlime.com`.
4. Set **SMS Sender** if you want to use a specific approved SMS sender.
5. Set **WhatsApp Sender** to your registered SendLime WhatsApp number if you use WhatsApp notifications.
6. Open the SendLime addon page in WHMCS.
7. Enable the templates you want to use.
8. Choose **SMS**, **WhatsApp**, or **Smart Route** for each template.
9. Save your settings.

Smart Route tries WhatsApp first, then falls back to SMS if WhatsApp cannot be sent.

## WordPress

Send WooCommerce order notifications and customer updates from WordPress using SendLime.

[View WordPress plugin](https://wordpress.org/plugins/sendlime/)

### Install

1. In WordPress admin, go to **Plugins > Add New**.
2. Search for **SendLime**.
3. Click **Install Now**.
4. Click **Activate**.

You can also install it from the [WordPress plugin page](https://wordpress.org/plugins/sendlime/).

### Setup

1. Create a SendLime API key from the [SendLime dashboard](https://dash.sendlime.com/dashboard/api-keys).
2. In WordPress admin, open **WooCommerce > SendLime Notifications**.
3. Paste your SendLime API key.
4. Choose your sending route: **SMS**, **WhatsApp**, or **Smart Route**.
5. Set **SMS Sender** if you want to use a specific approved SMS sender.
6. Set **WhatsApp Sender** to your registered SendLime WhatsApp number if you use WhatsApp route.
7. Edit the order notification messages.
8. Save the settings.

For WhatsApp notifications, the WhatsApp sender must be a registered SendLime WhatsApp number unless your account already has a default WhatsApp profile.
