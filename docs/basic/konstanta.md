---
sidebar_position: 7
title: A.7. Konstanta
sidebar_label: A.7. Konstanta
---

Chapter ini membahas tentang konstanta di bahasa Rust.

## A.7.1. Keyword `const`

Berbeda dengan variabel yang dideklarasikan menggunakan keyword `let`, konstanta dibuat dengan keyword `const`. Contoh:

```rust
const LABEL: &str = "nilai pi adalah:";
const PI: f32 = 22.0/7.0;
println!("{} {}", LABEL, PI);
```

Bisa dilihat di kode di atas, konstanta `LABEL` merupakan string dengan nilai `"nilai pi adalah:"`, sedang `PI` memiliki nilai bertipe float hasil dari operasi `22./7.0`.

Dalam pendefinisian konstanta, tipe data harus dituliskan secara eksplist. Deklarasi seperti `const DATA = "x"` akan menghasilkan error saat proses kompilasi. Dan aturan ini berlaku untuk semua tipe data yang dipergunakan untuk pendefinisian konstanta.

Nilai sebuah konstanta juga bisa dari variabel atau konstanta lain, atau hasil sebuah operasi seperti operasi aritmatika `22.0/7.0`.

Di sini penulis tidak menggunakan `22/7` karena hasilnya akan bertipe integer. Di Rust operasi aritmatika harus dilakukan dengan tipe data yang sama, dan hasilnya akan memiliki tipe data sesuai operand. Lebih jelasnya akan kita bahas pada chapter selanjutnya.

> Keyword `mut` tidak bisa diterapkan pada konstanta. Jika dipaksa akan menghasilkan error.

## A.7.2. Keyword `static`

Ada cara lain untuk membuat konstanta, menggunakan keyword `static`. Contohnya seperti pada kode berikut. Konstanta `NUMBER` didefinisikan di luar blok fungsi main, lalu di print di dalam fungsi main.

```rust
static NUMBER: i32 = 18;

fn main() {
    // ...

    println!("{}", NUMBER);
    // output ==> 18
}
```

Pertanyaan, bedanya apa dengan konstanta yang dibuat via keyword `const`? secara teknis bedanya ada di bagaimana manajemen dan alokasi memori dilakukan di belakang layar.

> Di Rust, konstanta yang dibuat via `const` tidak memiliki alamat memori yang pasti, dan setiap kali dipergunakan maka terjadi proses copy value. Sedangkan konstanta yang dibuat via keyword `static` mempunyai alamat memori yg fix/pasti.
>
> Lebih jelasnya mengenai static nantinya dibahas pada chapter [Static](/basic/static). Untuk sekarang silakan lanjut dulu ke pembahasan ke chapter-chapter berikutnya secara berurutan.

## A.7.3. *Naming convention* konstanta

Sesuai anjuran di [halaman dokumentasi Rust](https://rust-lang.github.io/api-guidelines/naming.html),[*Naming convention*](https://rust-lang.github.io/api-guidelines/naming.html), aturan penulisan konstanta adalah menggunakan **screaming snake case**. Nama konstanta dituliskan dalam huruf kapital dengan separator tanda garis bawah atau underscore (`_`). Contohnya seperti: `NUMBER`, `SOME_DATA`, `CONFIGURATION_ENV_NAME`, dll.

---

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/konstanta">
        github.com/novalagung/dasarpemrogramanrust-example/../konstanta
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Static Item](/basic/static)
- [Lifetime](/basic/lifetime)

### ◉ Referensi

- https://rust-lang.github.io/api-guidelines/naming.html
- https://doc.rust-lang.org/rust-by-example/custom_types/constants.html
- https://users.rust-lang.org/t/const-vs-static/52951/2
- https://mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/const-and-static.html

---
