---
sidebar_position: 3
title: Version Changelogs & Updates
sidebar_label: Version Changelogs & Updates
---

## 📝 Release v1.1.20260510 (2026-06-08)

#### ◉ Chapter update

- [Operator](/basic/operator)
    - Bersihkan `\t` dari contoh utama boolean, tambah komentar output, dan update ilustrasi terkait
- [Operator ?](/basic/operator-tanda-tanya)
    - Perbaikan narasi misleading tentang early return dan ownership flow
- [Slice (Basic)](/basic/slice)
    - Perbaiki output contoh dari "A" ke "a" dan rapikan penjelasan `for in`
- [Slice Memory Management](/basic/slice-memory-management)
    - Perbaiki narasi `String` yang salah disebut sebagai tipe slice
- [String Literal vs String](/basic/string-slice-vs-string-literal)
    - Sinkronkan isi docs dengan example dan luruskan penjelasan `String` vs `&str`
    - Perbaiki source code example yang tidak sesuai dengan doc
- [Tipe Data ➜ String Slice](/basic/tipe-data-custom-type-string-slice)
    - Perbaiki istilah dan alur penjelasan custom string slice
- [File, Path, Directory](/basic/file-path-directory)
    - Perbaiki komentar method `fs::write`
- [Pointer & References](/basic/pointer-references)
    - Perbaiki self-referencing link
- [Ownership](/basic/ownership)
    - Perbaiki nama variabel
- [Advanced Traits](/basic/advanced-traits)
    - Perbaiki penjelasan cast, `PartialOrd`, dan beberapa typo/narasi
- [Type Alias & Casting](/basic/type-alias-casting)
    - Perbaiki nama method `as_second` menjadi `as_secs`
- [Tipe Data ➜ Option](/basic/option-type)
    - Perbaiki nomor section `A.38.4` menjadi `A.39.4`
- [Perulangan While](/basic/perulangan-while)
    - Perbaiki typo "Pach" menjadi "Path" pada link
- [Tipe Data ➜ Result](/basic/result-type)
    - Perbaiki alt text gambar, narasi `ok`/`err`, dan penjelasan `as_ref`
- [Recoverable Error Handling](/basic/recoverable-error-handling)
    - Perbaiki dan sinkronkan materi error handling recoverable
- [Unrecoverable Panic Error](/basic/unrecoverable-panic-error)
    - Perbaiki typo dan penjelasan panic yang berhubungan
- [Function](/basic/function)
    - Perbaiki contoh naming convention `get_report_Status` menjadi `get_report_status`
- [Variabel](/basic/variabel)
    - Penambahan contoh `24_i8` dan perbaikan contoh terkait
- [Konstanta](/basic/konstanta)
    - Perbaikan penjelasan konstanta dan copyedit terkait
- [Komentar](/basic/komentar)
    - Perbaikan typo dan contoh komentar
- [Array](/basic/array)
    - Perbaiki typo "bentu" menjadi "bentuk" dan rapikan referensi iterator
- [Vector](/basic/vector)
    - Perbaiki typo "bebebrapa" menjadi "beberapa"
- [Trait ➜ Iterator](/basic/trait-iterator)
    - Luruskan penjelasan `Iterator` vs `IntoIterator`, plus `iter`, `iter_mut`, `into_iter`, dan `enumerate`
- [Traits ➜ Function](/basic/trait-function)
    - Perbaiki typo "blcok" menjadi "block" dan "chpater" menjadi "chapter"
- [Traits](/basic/traits)
    - Perbaiki typo, istilah, dan referensi trait yang dipakai pada chapter dasar
- [Attributes](/basic/attributes)
    - Perbaiki typo "Jialankan" menjadi "Jalankan" dan sinkronkan `cfg(target_os)`
- [Module System ➜ Basic](/basic/module-basic)
    - Perbaiki isi summary #3 dan #4 yang tertukar, plus rapikan contoh modul
- [Module System ➜ Inline](/basic/module-inline)
    - Samakan nama package, batas loop, dan contoh source dengan docs
- [Module Scope Item Access](/basic/module-scope-item-access)
    - Perbaiki contoh path item yang ditulis kurang tepat
- [Package & Crate](/basic/package-crate)
    - Perbaiki penjelasan package, crate, dan struktur project
- [Path Item](/basic/path-item)
    - Perbaiki penjelasan path item dan contoh penggunaannya
- [Visibility & Privacy](/basic/visibility-privacy)
    - Perbaiki typo dan penjelasan akses item antar modul
- [Generics](/basic/generics)
    - Luruskan penjelasan `PartialOrd` dan penggunaan kondisi `if`
- [Lifetime](/basic/lifetime)
    - Perbaiki narasi `PartialOrd` dan contoh lifetime yang terkait
- [Enum](/basic/enum)
    - Perjelas hubungan enum, `PartialEq`, dan seleksi kondisi
- [Closures](/basic/closures)
    - Perbaiki typo dan penjelasan closure dasar
- [Datetime](/basic/datetime)
    - Perbaiki typo pada nama crate `chrono`
- [Use](/basic/use)
    - Rapikan contoh import dan referensi chapter iterator

#### ◉ General update

- Update halaman utama docs, halaman download PDF, dan panduan instalasi Rust agar selaras dengan rilis terbaru
- Update `CONTRIBUTING.md` untuk penyesuaian alur kontribusi terbaru
- Sinkronkan docs dan example, termasuk penanda untuk contoh yang memang sengaja gagal compile
- Perbaiki typo, grammar, dan referensi silang di banyak chapter dasar

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
