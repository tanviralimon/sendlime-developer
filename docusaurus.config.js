// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SendLime Developer",
  tagline: "SMS & WhatsApp Messaging API",
  url: "https://developer.sendlime.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sendlime",
  projectName: "docusaurus",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tanviralimon/sendlime-developer/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    {
      src: "https://cdn.splitbee.io/sb.js",
      async: true,
    }
  ],

  plugins: [
    'docusaurus-plugin-hotjar',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SendLime",
        logo: {
          alt: "SendLime Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://api.sendlime.com/api-docs",
            label: "API Reference",
            position: "left",
          },
          {
            type: "doc",
            docId: "sdk/quickstart",
            position: "left",
            label: "SDK",
          },
          {
            type: "doc",
            docId: "integrations",
            position: "left",
            label: "Integrations",
          },
          {
            href: "https://dash.sendlime.com/dashboard",
            label: "Dashboard",
            position: "right",
          },
          {
            href: "https://github.com/SendLime/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/overview",
              },
              {
                label: "Messaging API",
                to: "/docs/sms/overview",
              },
              {
                label: "Verify API",
                to: "/docs/verify/overview",
              },
              {
                label: "Node.js SDK",
                to: "/docs/sdk/quickstart",
              },
              {
                label: "API Reference",
                href: "https://api.sendlime.com/api-docs",
              },
              {
                label: "Integrations",
                to: "/docs/integrations",
              },
            ],
          },
          {
            title: "Integrations",
            items: [
              {
                label: "Node.js SDK",
                href: "https://github.com/SendLime/sendlime-node",
              },
              {
                label: "WHMCS Module",
                href: "https://marketplace.whmcs.com/product/6266-sendlime",
              },
              {
                label: "WordPress Plugin",
                href: "https://wordpress.org/plugins/sendlime/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Facebook",
                href: "https://facebook.com/getsendlime",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/getsendlime",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Dashboard",
                href: "https://dash.sendlime.com/dashboard",
              },
              {
                label: "GitHub",
                href: "https://github.com/sendlime",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SendLime.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'python', 'bash'],
      },
      hotjar: {
        applicationId: 2795161,
      },
      googleAnalytics: {
        trackingID: 'G-PTXRYCJ25N',
      },
    }),
};

module.exports = config;
