---
sidebar_position: 3
title: Version Changelogs & Updates
sidebar_label: Version Changelogs & Updates
---

## 📝 Release v1.0.20260508 (2026-05-08)

#### ◉ Chapter update

- [Operator](/basic/operator)
    - Bersihkan `\t` dari contoh utama boolean, tambah komentar output (fixes #99)
- [Operator ?](/basic/operator-tanda-tanya)
    - Perbaikan narasi misleading tentang early return
- [Slice (Basic)](/basic/slice)
    - Perbaiki output contoh dari "A" ke "a"
- [Slice Memory Management](/basic/slice-memory-management)
    - Perbaiki narasi `String` yang salah disebut sebagai tipe slice
- [File, Path, Directory](/basic/file-path-directory)
    - Perbaiki komentar method `fs::write`
- [Pointer & References](/basic/pointer-references)
    - Perbaiki self-referencing link
- [Ownership](/basic/ownership)
    - Perbaiki nama variabel

## 📝 Release v1.0.20240830 (2024-08-30)

#### ◉ General update

- Optimasi pagespeed

## 📝 Release v1.0.20240731 (2024-07-31)

#### ◉ Chapter baru

- [Operator ?](/basic/operator-tanda-tanya)
- [Error ➜ Unrecoverable Error / Panic](/basic/unrecoverable-panic-error)
- [Error ➜ Recoverable Error & Error Handling](/basic/recoverable-error-handling)

#### ◉ Chapter update

- [Variabel](/basic/variabel)
    - Penambahan penjelasan tentang variabel `_`
- [Tipe Data ➜ Result](/basic/result-type)
    - Perbaikan konten
    - Penambahan penjelasan tentang tipe `Result<T>` dan `Result<(), E>`
    - Penambahan penjelasan tentang intro error handling di Rust
- [File, Path, Directory](/basic/file-path-directory)
    - Penambahan penjelasan terkait OS path ketika method `.join()` digunakan
    - Penambahan contoh operasi baca file ke string & vector
    - Penambahan sample source code yang sebelumnya tidak ada
    - Perbaikan syntax error
- [Traits](/basic/traits)
    - Chapter di-split menjadi 2, yaitu [Traits](/basic/traits) dan [Traits ➜ Advanced](/basic/advanced-traits)
    - Penambahan penjelasan tentang **external traits** vs **internal traits**
    - Perbaikan narasi konten
- [Attributes](/basic/attributes)
    - Penambahan attribute configuration
    - Penambahan section macro `cfg!()` dan conditional compilation
    - Penambahan section configuration `debug_assertions`
    - Penambahan attribute linting: `#[forbid]`

#### ◉ General update

- Peningkatan keyword untuk keperluan SEO
- Perubahan isi konten halaman utama
- Perbaikan typo
