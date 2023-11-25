// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { buildConfig } = require('./src/config');

const config = buildConfig({
  title: 'Dasar Pemrograman Rust',
  tagline: 'Belajar Rust Mulai Dari 0, Gratis!',
  url: 'https://dasarpemrogramanrust.novalagung.com',
  projectName: 'dasarpemrogramanrust',
  seoKeywords: 'rust, belajar rust, tutorial rust, belajar tutorial rust gratis, pemrograman rust, cargo, concurrent programming, noval agung',
  googleTrackingID: 'G-HKPC8ZGM74',
  facebookAppID: '875100400724859',
  algoliaAppID: '65RXJ98QVA',
  algoliaApiKey: 'be8c782c081c9e5a001dbbaa6ffdd859',
  algoliaIndexName: 'dasarpemrogramanrust-novalagung',
})


module.exports = config;
