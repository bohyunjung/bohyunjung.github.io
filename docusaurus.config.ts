import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'bohyunjung.com',
  favicon: 'img/favicon.ico',

  // Hosting: Vercel (production branch = main). GitHub Pages는 더 이상 쓰지 않는다.
  // bohyunjung.github.io 레포의 gh-pages 브랜치엔 리다이렉트 shim만 있으며,
  // Pages 커스텀 도메인을 다시 걸면 계정의 모든 프로젝트 페이지가 막히니 주의.
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

  // Detect browser language on first visit and redirect non-Korean speakers to /en.
  // Saves preference to localStorage ('bhj-lang': 'ko' | 'en') so manual choices persist.
  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `(function(){try{var k='bhj-lang',s=localStorage.getItem(k),e=location.pathname.startsWith('/en');if(s==='en'&&!e){location.replace(location.pathname==='/'?'/en':'/en'+location.pathname);return;}if(s)return;var l=(navigator.language||(navigator.languages&&navigator.languages[0])||'ko').toLowerCase();localStorage.setItem(k,l.startsWith('ko')?'ko':'en');if(!l.startsWith('ko')&&!e)location.replace('/en');}catch(ex){}})();`,
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog-en',
        path: './blog-en',
        routeBasePath: '/en',
        blogSidebarCount: 0,
        showReadingTime: false,
        blogListComponent: '@theme/BlogListPage',
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
  ],

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
          onUntruncatedBlogPosts: 'ignore',
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

  future: {
    experimental_faster: true,
    v4: true,
  },

  themeConfig: {
    navbar: {
      title: 'bohyunjung.com',
      items: [
        {
          type: 'custom-lang-toggle',
          position: 'right',
        },
        {
          type: 'custom-blog-home-link',
          position: 'right',
        },
        { type: 'custom-about-link', position: 'right' },
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
