---
sidebar_position: 3
title: Contribution & Tech Stack
sidebar_label: Contribution & Tech Stack
---

Ebook Dasar Pemrograman Rust adalah project open source. Siapapun bebas untuk berkontribusi di sini, bisa dalam bentuk perbaikan typo, update kalimat, maupun submit tulisan baru.

Bagi kawan-kawan yang berminat untuk berkontribusi, silakan fork [github.com/novalagung/dasarpemrogramanrust](https://github.com/novalagung/dasarpemrogramanrust), kemudian langsung saja cek/buat issue kemudian submit relevan pull request untuk issue tersebut 😊

## Checkout project

```
git clone https://github.com/novalagung/dasarpemrogramanrust.git
git submodule update --init --recursive --remote
```

## Maintainer

E-book ini di-inisialisasi dan di-maintain oleh Noval Agung Prayogo.

## Contributors

Berikut merupakan hall of fame kontributor yang sudah berbaik hati menyisihkan waktunya untuk membantu pengembangan e-book ini.

1. [Acep Saepudin](https://github.com/acepsaepudin)
1. [Afifurrohman](https://github.com/afifurrohman-id)
1. [Fal](https://github.com/d0tf)
1. [Fredianto](https://github.com/nferdazel)
1. [I Putu Saputrayana](https://github.com/iyansr)
1. [Khisby Al Ghofari](https://github.com/khisby)
1. [Lori](https://github.com/chud-lori)
1. [M. Zakiyuddin Munziri](https://github.com/zakiego)
1. [Opa Kholis Majid](https://github.com/opakholis)
1. [Rian](https://github.com/rian256)
1. [Shandy Siswandi](https://github.com/shandysiswandi)
1. [Theis Andatu](https://github.com/antheiz)
1. ... anda :-)

## Ebook/webhook techstack & architecture

Jika pembaca tertarik untuk membuat konten ebook berbasis web sekaligus versi PDF file-nya, bisa menggunakan link berikut sebagai referensi:

> https://medium.com/geekculture/serverless-e-book-web-book-using-docusaurus-v2-github-pages-actions-and-pdf-tools-4fef54847b85

Tools yang digunakan:

- Web-book engine ➜ [Docusaurus v2](https://docusaurus.io/)
- PDF generator ➜ [Prince XML](https://www.princexml.com/) + [docusaurus-prince-pdf](https://github.com/signcl/docusaurus-prince-pdf) + [PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)
- Source code repository ➜ [GitHub](https://github.com/)
- Hosting ➜ [GitHub Pages](https://pages.github.com/)
- CI/CD pipeline ➜ [GitHub Actions](https://github.com/features/actions)
- Content Search ➜ [Algolia DocSearch](https://docsearch.algolia.com/)

Desain arsitektur:

![Dasar pemrograman python](https://raw.githubusercontent.com/novalagung/dasarpemrogramanrust/master/etc/base%20architecture.jpg)
