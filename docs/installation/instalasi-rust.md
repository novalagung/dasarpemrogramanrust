---
sidebar_position: 1
title: Instalasi Rust
sidebar_label: Instalasi Rust
---

Pada chapter ini kita akan belajar cara instalasi Rust. Pembaca bisa mengikuti panduan instalasi ini, atau langsung saja navigasi ke [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install).

Ada dua metode instalasi yang penulis anjurkan, yaitu menggunakan `rustup` atau menggunakan installer.

## Install Rust menggunakan `rustup`

`rustup` adalah tool resmi untuk manajemen *Rust tooling*. `rustup` mempermudah proses instalasi, update versi, ataupun penggantian versi Rust.

> Instalasi Rust tooling menggunakan metode ini lebih direkomendasikan

Cara instalasi `rustup` untuk tiap sistem operasi bisa dilihat di bawah ini:

### ◉ MacOS, Linux, Unix

Jalankan command berikut untuk instal `rustup` dan mengecek hasil instalasi.

```bash
curl https://sh.rustup.rs -sSf | sh

rustup --version
rustc --version
cargo --version
```

### ◉ Windows

Silakan download file `rustup-init.exe` di [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install). Jalankan installar, lalu run command berikut untuk mengecek hasil instalasi.

```bash
rustup --version
rustc --version
cargo --version
```

Untuk pengguna WSL (Windows Subsystem for Linux), bisa menggunakan command berikut.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

rustup --version
rustc --version
cargo --version
```

## Install Rust menggunakan installer

Silakan download installer sesuai dengan sistem operasi dan platform yang digunakan menggunakan link berikut:

> [https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers](https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers)

Lalu run command di bawah ini untuk mengecek hasil instalasi.

```bash
rustup --version
rustc --version
cargo --version
```

## Update versi Rust tooling

Jika pembaca menggunakan `rustup`, update Rust tooling dilakukan cukup dengan menjalankan command berikut:

```bash
rustup update
rustup --version
```

Teruntuk Rust yang di-install menggunakan installer, cara update dilakukan dengan download dan run installer versi terbaru yang bisa didownload dari link berikut:

> [https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers](https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers)

---

## Catatan chapter 📑

### ◉ Referensi

- https://www.rust-lang.org/tools/install
- https://forge.rust-lang.org/infra/other-installation-methods.html
- https://doc.rust-lang.org/book/ch01-01-installation.html

---
