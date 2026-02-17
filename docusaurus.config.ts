import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'bohyunjung.com',
  favicon: 'img/favicon.ico',

  url: 'https://bohyunjung.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          blogSidebarCount: 0,
          showReadingTime: false,
          blogListComponent: '@theme/BlogListPage',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-6MX4MC9754',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'bohyunjung.com',
      items: [
        { to: '/about', label: 'About', position: 'right' },
        {
          to: 'https://github.com/bohyunjung',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'https://www.linkedin.com/in/bohyun-jung/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Bohyun Jung. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus.</a>`,
    },
    prism: {
      theme: prismThemes.github,
    },
    colorMode: {
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
