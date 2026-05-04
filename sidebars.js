/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Start here',
    },
    {
      type: 'category',
      label: 'Messaging',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'sms/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'sms/code-snippets/before-you-begin',
          label: 'Before you begin',
        },
        {
          type: 'category',
          label: 'Send messages',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'sms/api-reference/send-message',
              label: 'SMS and WhatsApp',
            },
            {
              type: 'doc',
              id: 'sms/code-snippets/sending-an-sms',
              label: 'Code examples',
            },
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'sms/guides/whatsapp',
              label: 'WhatsApp',
            },
            {
              type: 'doc',
              id: 'sms/guides/sender-id',
              label: 'Sender identity',
            },
            {
              type: 'doc',
              id: 'sms/guides/numbers',
              label: 'Number format',
            },
            {
              type: 'doc',
              id: 'sms/guides/delivery-receipts',
              label: 'Delivery status',
            },
            {
              type: 'doc',
              id: 'sms/guides/troubleshooting-sms',
              label: 'Troubleshooting',
            },
          ],
        },
        {
          type: 'category',
          label: 'Endpoints',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'sms/api-reference/message-logs',
              label: 'Message logs',
            },
            {
              type: 'doc',
              id: 'sms/api-reference/balance',
              label: 'Balance',
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
