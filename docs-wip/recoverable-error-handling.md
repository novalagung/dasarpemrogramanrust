---
sidebar_position: 55
title: A.55. Error ➜ Recoverable Error & Error Handling
sidebar_label: A.55. Error ➜ Recoverable Error & Error Handling
---

Chapter ini merupakan kelanjutan dari chapter sebelumnya tentang pembahasan topic error. Kali ini fokus kita lebih ke **recoverable error** dan penanganannya (error handling).

Rust menganjurkan untuk menggunakan tipe data `Result` untuk penanganan operasi dan data yang berpotensi menghasilkan error. Jadi pastikan telah mempelajari chapter [Tipe Data ➜ Result](/basic/result-type) lebih dulu sebelum melanjutkan pembahasan di chapter ini.

--








Operator `?` digunakan untuk meng-*unwrap* data `Option` untuk mengambil nilai `Some<T>`-nya. Penggunaan operator ini adalah alternatif dari penggunaan keyword `match` dengan versi penulisan yang lebih ringkas.

> Operator `?` bisa digunakan pada tipe `Option` maupun [Result](/basic/result-type).

Pada kode berikut kita akan kode sederhana untuk operasi pembagian bilangan random terhadap angka `x`. Silakan praktekan dan pelajari.

```rust
use rand::Rng;

fn main() {
    do_compute_random_number_by_x(2);
    println!();

    do_compute_random_number_by_x(0);
    println!();

    do_compute_random_number_by_x(10);
}

fn divider(a: i32, b: i32) -> Option<f64> {
    if b == 0 {
        return None;
    }

    let result = (a as f64) / (b as f64);
    return Some(result);
}

fn do_compute_random_number_by_x(x: i32) {
    let n = rand::thread_rng().gen_range(0..100);
    println!("calculating {} / {}", n, x);

    let result = match divider(n, x) {
        None => {
            println!("  → WARNING: cannot divide {} by {}", n, x);
            0.0
        },
        Some(x) => x as f64,
    };

    println!("  → result: {}", result);
}
```

Output program:

![Option type](img/unrecoverable-panic-error-1.png)

Di dalam fungsi `do_compute_random_number_by_x()` terdapat operasi *error handling* menggunakan keyword `match`. Nilai hasil operasi `divider(n, x)` dicek, jika berisi `None` maka pesan *warning* dimunculkan dan nilai `0` dikembalikan. Sebaliknya, maka nilai hasil operasi pembagian dijadikan nilai balik.

Sekarang rubah kode fungsi `do_compute_random_number_by_x()` menjadi seperti ini:

```rust
fn do_compute_random_number_by_x(x: i32) {
    let n = rand::thread_rng().gen_range(0..100);
    println!("calculating {} / {}", n, x);

    let result = divider(n, x)?;

    println!("  → result: {}", result);
}
```

Kode tersebut merupakan alternatif penulisan kode fungsi `do_compute_random_number_by_x()` yang didalamnya menerapkan penggunaan operator `?`.

Statement `let result = match divider(n, x) { ... };` beserta isi blok-nya diubah menjadi `let result = divider(n, x)?;`. Perhatikan tanda `?` dibelakang pemanggilan fungsi `divider()`.
