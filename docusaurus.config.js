// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dasar Pemrograman Rust',
  tagline: 'Belajar Rust Mulai Dari 0, Gratis!',
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

  plugins: [
    '@stackql/docusaurus-plugin-structured-data',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords', content: 'rust, belajar rust, tutorial rust, belajar tutorial rust gratis, pemrograman rust, cargo, concurrent programming, noval agung',
        },
        {
          name: 'author', content: 'Noval Agung Prayogo',
        },
        {
          property: 'og:image', content: 'https://dasarpemrogramanrust.novalagung.com/img/cover_media_share.png?v=1',
        },
        {
          property: 'og:type', content: 'article',
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
                label: 'Udemy Course: Praktis Belajar Docker dan Kubernetes (FREE May 2023) ',
                href: 'https://www.udemy.com/course/praktis-belajar-docker-dan-kubernetes-untuk-pemula/?couponCode=FREE-202305',
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
        appId: '65RXJ98QVA',
        apiKey: 'be8c782c081c9e5a001dbbaa6ffdd859',
        indexName: 'dasarpemrogramanrust-novalagung',
        contextualSearch: true,
        searchPagePath: 'search', // `false`, 'search'
      },
      structuredData: {
        excludedRoutes: [ ],  
        verbose: true,
        featuredImageDimensions: {
          width: 600,
          height: 320,
        },
        authors: {
          'Noval Agung Prayogo': {
            authorId: '1',
            url: 'https://www.linkedin.com/in/novalagung',
            imageUrl: 'https://i.stack.imgur.com/99yxf.jpg',
            sameAs: [
              'https://stackoverflow.com/users/1467988/novalagung',
              'https://www.udemy.com/user/noval-agung-prayogo',
              'https://apps.apple.com/id/developer/noval-agung-prayogo/id1163677873?l=id',
              'https://novalagung.medium.com',
              'https://adplist.org/mentors/noval-agung-prayogo',
              'https://novalagung.com',
              'https://linktr.ee/novalagung',
              'https://www.instagram.com/novalagung',
              'https://www.facebook.com/novalagungprayogo',
              'https://www.codementor.io/@novalagung'
            ],
          },
        },  
        organization: {
          sameAs: [
            'https://web.facebook.com/adamstudio.page',
            'https://www.instagram.com/adamstudio.ig',
            'https://github.com/adamstudiogh'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@novalagung.com',
          },
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'id',
            '@id': 'adamstudio',
            url: 'https://avatars.githubusercontent.com/u/65223287',
            contentUrl: 'https://avatars.githubusercontent.com/u/65223287',
            width: 1440,
            height: 900,
            caption: 'Adam Studio',
          },
          // address: {
          //   '@type': 'PostalAddress',
          //   addressCountry: 'AU', // https://en.wikipedia.org/wiki/ISO_3166-1
          //   postalCode: '3001',
          //   streetAddress: 'Level 24, 570 Bourke Street, Melbourne, Victoria',
          // },
          // duns: '750469226',
          // taxID: 'ABN 65 656 147 054',
        },
        website: {
          inLanguage: 'id',
        },
        webpage: {
          inLanguage: 'id',
          // datePublished: '2021-07-01',
        },
        breadcrumbLabelMap: {}
      },
    }),
};

module.exports = config;
