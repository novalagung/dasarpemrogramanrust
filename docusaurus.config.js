// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dasar Pemrograman Rust',
  tagline: 'Belajar Rust Mulai Dari 0',
  url: 'https://dasarpemrogramanrust.novalagung.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png?v=1',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'novalagung', // Usually your GitHub org/user name.
  projectName: 'dasarpemrogramanrust', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-HKPC8ZGM74',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/wip/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords', content: 'rust, belajar rust, pemrograman rust, cargo, concurrent programming, noval agung',
        },
        {
          name: 'author', content: 'Noval Agung Prayogo',
        },
        {
          name: 'og:image', content: 'https://dasarpemrogramanrust.novalagung.com/img/cover_media_share.png?v=1',
        }
      ],
      image: 'https://dasarpemrogramanrust.novalagung.com/img/cover_media_share.png?v=1',
      navbar: {
        title: 'Dasar Pemrograman Rust',
        logo: {
          alt: 'Ebook Dasar Pemrograman Rust - Belajar Rust Mulai Dari 0',
          src: 'https://dasarpemrogramanrust.novalagung.com/img/logo_small_dark.png',
          srcDark: 'https://dasarpemrogramanrust.novalagung.com/img/logo_small_light.png',
        },
        items: [
          {
            position: 'left',
            label: '📖 Ebook lainnya',
            items: [
              {
                label: 'Ebook: Dasar Pemrograman Golang ',
                href: 'https://dasarpemrogramangolang.novalagung.com',
              },
              {
                label: 'Ebook: Learn Devops ',
                href: 'https://learndevops.novalagung.com',
              },
            ]
          },
          {
            position: 'left',
            label: '▶️ Udemy courses',
            items: [
              {
                label: 'Udemy Course: Praktis Belajar Docker dan Kubernetes ',
                href: 'https://www.udemy.com/course/praktis-belajar-docker-dan-kubernetes-untuk-pemula/?couponCode=BIGSALEMAY2021',
              },
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [ ],
        copyright: `${new Date().getFullYear()} | Maintained by Noval Agung Prayogo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'rust', 'toml'],
      },
      algolia: {
        appId: 'DD3TAVK705',
        apiKey: '6c174b58b088b4bed49357cdb9108a1b',
        indexName: 'CONTENT',
        contextualSearch: true,
        // externalUrlRegex: 'dasarpemrogramanrust\\.novalagung\\.com',
        searchParameters: {},
        searchPagePath: 'search', // `false` to disable
      },
    }),
};

module.exports = config;
