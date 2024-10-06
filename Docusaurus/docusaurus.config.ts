import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '242saurus',               // Or else
  tagline: 'This is the Way!',      // Or else
  favicon: 'img/favicon.ico',       // Or else
  url: 'https://cbkadal.github.io', // Or else
  baseUrl: '/242saurus/',           // Or else
  organizationName: 'cbkadal',      // (Usually your GitHub org/user name)
  projectName: '242saurus',         // (Usually your repo name)
  trailingSlash: true,              // "true" or "false"

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'HOME',
      logo: {
        alt: 'Logo',
        src: 'img/cbkadal.jpg',
      },
      items: [
        {
          label:     'Tutorial',
          sidebarId: 'tutorialSidebar',
          position:  'left',
          type:      'docSidebar',
          to:        '/docs/intro',
        },
        {
          label:     'Blog', 
          position:  'left',
          to:        '/blog', 
        },
        {
          label:     'GitHub',
          position:  'right',
          href:      'https://github.com/cbkadal/242saurus',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href:  'https://github.com/cbkadal/242saurus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023-2024 BinKadal, Sdn, Bhd. ---
      REV: Sun 06 Oct 2024 18:00
      `,
      // REV: Thu 18 Apr 2024 11:00
      // REV: Thu 04 Apr 2024 21:00
      // REV: Thu 28 Mar 2024 00:00
      // REV: Wed 27 Mar 2024 23:00
      // REV: Tue 20 Jun 2023 09:30
      // STRT Sat 29 Apr 2023 13:00
    },
    prism: {
      theme:     prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

