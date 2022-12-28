---
sidebar_position: 28
title: A.28. Module System → Visibility & Privacy
sidebar_label: A.28. Module System → Visibility & Privacy
---

Kita sebenarnya sudah mempelajari banyak hal yang berhubungan dengan visibility & privacy pada beberapa chapter sebelumnya. Jika pembaca mempelajari ebook ini secara urut, maka pastinya sudah familiar dengan keyword `pub`, `self`, `crate`, dan `super`.

Chapter ini merupakan pembahasan tambahan untuk ke-4 keyword tersebut, dan fokusnya lebih ke visibility & privacy di Rust secara general.

O iya, perihal *visbility* dan *privacy* itu sendiri, kedua istilah tersebut di sini kita maknai sama, yang artinya kurang lebih adalah tentang manajemen akses item di Rust.

## A.28.1. Pembahasan module system

Pastikan sudah mempelajari 5 buah chapter tentang module system yang sebelumnya sudah dibahas. Kesemua chapter tersebut sangat berhubungan dengan pembahasan chapter ini.

- [A.18. Module System → Path & Item](/basic/path-item)
- [A.19. Module System → Package & Crate](/basic/package-crate)
- [A.20. Module System → Module](/basic/module-basic)
- [A.21. Module System → Inline Module](/basic/module-inline)
- [A.22. Module System → Scope & Akses Item](/basic/module-scope-item-access)

## A.28.2. Default visibility

Di Rust, *by default*, hampir semua item adalah private. Apa efeknya ketika item adalah private atau publik? Silakan ingat 2 aturan penting berikut:

1. Jika suatu item adalah private, maka item tersebut hanya bisa diakses dari *current module scope* dan dari *submodules* milik *current module*.
2. Jika suatu item adalah publik, maka dia bisa diakses dari module lain di luar *current module scope*, dengan catatan parent module scope item tersebut harus publik.

> Kita sepakati di sini, pada istilah **current module** kata *module* disitu bisa saja tertuju untuk module atau juga submodule

Dua point di atas sangat penting untuk dipahami, karena digunakan sebagai landasan pertimbangan dalam penyusunan hirarki module. Sebagai contoh, kita bisa membuat program yang hanya meng-expose API tertentu (yang memang diperlukan untuk diakses oleh publik), tanpa perlu ikut meng-expose detail implementasinya.

Ok, sekarang silakan perhatikan path sederhana di bawah ini. Diasumsikan ada sebuah fungsi yang path aksesnya adalah berikut:

```bash
messaging::service_layer::some_black_magic
```

Segmen pertama yaitu `messaging` pasti adalah publik, karena di-import ke *crate root*. Lalu bagaimana dengan segmen `service_layer` dan juga `some_black_magic`?

Jika item `some_black_magic` disitu adalah publik, maka idealnya pengaksesan menggunakan path tersebut memungkinkan. Tapi kembali ke point ke-2 aturan yang sudah dibahas di atas, yaitu meskipun `some_black_magic` adalah publik, jika parent-nya (yang pada konteks ini adalah `service_layer`) adalah private, maka pengaksesan menggunakan path tersebut menghasilkan error.

Intinya, **sebuah item bisa diakses jika item tersebut adalah publik, dan parent item tersebut juga publik. Sedangkan default visibility untuk hampir semua item adalah private.**

Ok, sekarang mari lanjut ke praktik menggunakan contoh dengan pembahasan yang lebih mendetail. Silakan perhatikan dan praktikkan kode berikut:

```bash title="package source code structure"
my_package
│─── Cargo.toml
└─── src
     │─── messaging.rs
     └─── main.rs
```

```rust title="src/messaging.rs"
const SOME_MESSAGE: &str = "hello rust";

mod service_layer {

    pub fn some_black_magic() {
        println!("{}", crate::messaging::SOME_MESSAGE)
    }
}

pub fn say_hello() {
    service_layer::some_black_magic();
}
```

```rust title="src/main.rs"
mod messaging;

fn main() {
    messaging::say_hello();
}
```

- Konstanta `messaging::SOME_MESSAGE` adalah **private**. Penjelasan:

  - Konstanta ini merupakan module item milik `messaging`.
  - Konstanta ini **bisa diakses** dari *current module scope* (`messaging`).
  - Konstanta ini **bisa diakses** dari submodule milik *current module*, yaitu submodule dari `messaging`. Contohnya bisa dilihat pada fungsi `messaging::service_layer::some_black_magic` yang disitu ada statement pemanggilan `SOME_MESSAGE`.
  - Konstanta ini **tidak bisa diakses** dari luar *current module scope* (`messaging`).

- Submodule `messaging::service_layer` adalah **private**. Penjelasan:

  - Submodule ini merupakan module item milik `messaging`.
  - Submodule ini **bisa diakses** dari *current module scope* (`messaging`). Contohnya bisa dilihat pada fungsi `messaging::say_hello` yang disitu ada statement pemanggilan `service_layer`.
  - Submodule ini **bisa diakses** dari submodule milik *current module*, yaitu submodule dari `messaging`.
  - Submodule ini **tidak bisa diakses** dari luar *current module scope* (`messaging`).

- Fungsi `messaging::service_layer::some_black_magic` adalah **publik**. Penjelasan:

  - Fungsi ini merupakan module item milik `messaging::service_layer`.
  - Fungsi ini **bisa diakses** dari *current module scope* (`messaging::service_layer`).
  - Fungsi ini **bisa diakses** dari submodule milik *current module*, yaitu submodule dari `messaging::service_layer`. Contohnya bisa dilihat pada fungsi `messaging::say_hello` yang disitu ada statement pemanggilan fungsi `some_black_magic`.
  - Fungsi ini **bisa diakses** dari luar *current module scope* (`messaging::service_layer`).
  - Namun meskipun demikian, bisa tidaknya fungsi ini diakses dari luar *current module scope* (`messaging::service_layer`) juga tergantung dengan visibility dari current module itu sendiri, yaitu `messaging::service_layer`.
  - Karena module `messaging::service_layer` adalah private, meskipun fungsi `some_black_magic` didalamnya adalah publik, pengaksesan fungsi tersebut dari luar module scope `messaging::service_layer` tidak dimungkinkan.
    - Pengaksesan `service_layer::some_black_magic` dari `messaging::say_hello` tidak error karena submodule `service_layer` meskipun private, posisinya adalah masih dalam satu module scope yang sama dengan fungsi `say_hello`.
    - Dimisalkan jika `service_layer::some_black_magic` dipaksa diakses dari `main`, maka muncul error karena `service_layer` adalah private dan posisinya tidak berada dalam module scope yang sama dengan crate root (`main`).

- Fungsi `messaging::say_hello` adalah **public**. Penjelasan:

  - Fungsi ini merupakan module item milik `messaging`.
  - Fungsi ini **bisa diakses** dari *current module scope* (`messaging`).
  - Fungsi ini **bisa diakses** dari submodule milik *current module*, yaitu submodule dari `messaging`.
  - Fungsi ini **bisa diakses** dari luar *current module scope* (`messaging`). Contohnya bisa dilihat pada crate root fungsi `main`, disitu ada pemanggilan statement `say_hello`.

## A.28.3. Re-export item

Pada contoh, fungsi `messaging::say_hello` didesain sebagai media untuk mengakses fungsi `some_black_magic`. Di situasi *real world* pastinya sangat jarang terjadi sebuah fungsi isinya hanya satu baris pemanggilan fungsi lainnya. Jika memang ada situasi seperti itu, (kontekstual) lebih baik hapus saja fungsi yang jadi media pemanggilan dan langsung saja panggil fungsi didalamnya sesuai kebutuhan.

Pada praktik selanjutnya ini kita misalkan bahwa fungsi `say_hello` isinya memang cuma 1 baris, dan yang paling penting adalah isi fungsi `some_black_magic` perlu untuk bisa diakses dari `main`. Untuk kasus seperti ini ada 3 alternatif solusi:

1. Tidak perlu mengubah apapun, gunakan saja kode yang sudah ditulis di atas. Kode tersebut sudah bisa mengakomodir pemanggilan `some_black_magic` via `say_hello`.
2. Atau, hapus saja fungsi `say_hello`, lalu ubah visibility module `service_layer` menjadi publik, dengan demikian kita bisa mengakses `some_black_magic` dari `main` menggunakan path `messaging::service_layer::some_black_magic`.
3. Atau, gunakan teknik **re-export item**.

Re-export item adalah sebuah cara untuk mem-*bypass* pengaksesan item yang secara hirarki memang tidak bisa diakses dari luar module (bisa jadi karena visibility item ataupun parent module nya adalah private). Dengan teknik ini, maka item pasti bisa diakses dari luar module.

Item yang di-re-export akan menjadi item milik *current module* dimana statement re-export tersebut ditulis.

Cara re-export item adalah menggunakan keyword `pub use` kemudian diikuti dengan path yang ingin di-export dan juga nama export item dengan notasi penulisan berikut:

```rust
pub use the_path as exported_name;
pub use self::service_layer::some_black_magic as say_hello;
```

Contoh jika diterapkan pada program yang sebelumnya sudah ditulis:

```rust title="src/messaging.rs"
pub use self::service_layer::some_black_magic as say_hello;

const SOME_MESSAGE: &str = "hello rust";

mod service_layer {

    pub fn some_black_magic() {
        println!("{}", crate::messaging::SOME_MESSAGE)
    }
}
```

```rust title="src/main.rs"
mod messaging;

fn main() {
    messaging::say_hello();
}
```

![Visibility & Privacy](img/visibility-privacy-1.png)

Bisa dilihat di contoh di atas, fungsi `say_hello` dihapus, kemudian item `service_layer::some_black_magic` di-re-export dengan nama `say_hello`. Dengannya kita bisa mengakses `some_black_magic` dari luar module `messaging` menggunakan path `messaging::say_hello`.

Jika item ingin di-re-export tanpa perubahan nama item, bisa gunakan notasi berikut:

```rust
pub use the_path;
pub use self::service_layer::some_black_magic;
```

Jika diterapkan pada program sebelumnya, kurang lebih seperti ini:

```rust title="src/messaging.rs"
pub use self::service_layer::some_black_magic;

const SOME_MESSAGE: &str = "hello rust";

mod service_layer {

    pub fn some_black_magic() {
        println!("{}", crate::messaging::SOME_MESSAGE)
    }
}
```

```rust title="src/main.rs"
mod messaging;

fn main() {
    messaging::some_black_magic();
}
```

> Lebih jelasnya mengenai keyword `use` dibahas pada chapter [Module System → Use](/basic/use)

## A.28.4. Public visibility scope

Keyword `pub` digunakan untuk mengubah visibility item menjadi publik. Keyword ini bisa dikombinasikan dengan salah satu dari keyword `self`, `crate`, dan `super`; denganya kita bisa menentukan visibility sebuah publik item dengan scope yang lebih spesifik.

### ◉ Keyword `pub`

Penulis rasa untuk penerapan keyword `pub` ini sudah sangat jelas, kita beberapa kali mempraktikkannya.

Dengan keyword `pub`, sebuah item visibility-nya menjadi publik.

### ◉ Keyword `pub(in path)`

Keyword ini menjadikan visibility item hanya didalam `path` yang ditulis di `pub(in path)`, dengan ketentuan `path` tersebut merupakan parent dari module item dimana keyword digunakan.

Contohnya bisa dilihat pada kode berikut. Fungsi `say_hello` didefinisikan publik dengan scope path ditentukan secara eksplisit adalah `crate::outer_mod`. Dengan demikian fungsi `say_hello` hanya bisa diakses dari dalam `outer_mod`.

Bisa dilihat di contoh, fungsi `say_hello` diakses dari `do_something`. Silakan coba saja paksa untuk mengaksesnya dari fungsi `main`, hasilnya pasti error.

```rust
pub mod outer_mod {

    pub mod inner_mod {

        // fungsi say_hello berikut hanya bisa diakses dari dalam `outer_mod`.
        // pengaksesannya dari luar `outer_mod` menghasilkan error.
        pub(in crate::outer_mod) fn say_hello() {
            println!("hello rust")
        }
    }

    pub fn do_something() {
        inner_mod::say_hello();
    }
}

fn main() {
    outer_mod::do_something();
}
```

### ◉ Keyword `pub(crate)`

Keyword `pub(crate)` digunakan untuk membuat visibility item menjadi publik dengan scope akses *current crate*. Dengan ini item bisa diakses dari manapun asalakan masih dalam crate yang sama.

Contoh penerapannya bisa dilihat berikut ini. Fungsi `say_hello` visibility scope nya ditentukan adalah *current crate*. Fungsi tersebut bisa diakses dari `outer_mod_one::do_something`, dari `outer_mod_two::do_something`, dan juga dari fungsi `main`.

```rust
pub mod outer_mod_one {

    pub mod inner_mod {

        // fungsi ini visibility scope-nya di level crate
        pub(crate) fn say_hello() {
            println!("hello rust")
        }
    }

    pub fn do_something() {
        inner_mod::say_hello();
    }
}

pub mod outer_mod_two {

    pub fn do_something() {
        crate::outer_mod_one::inner_mod::say_hello();
    }
}

fn main() {
    outer_mod_one::inner_mod::say_hello();
    outer_mod_one::do_something();
    outer_mod_two::do_something();
}
```

### ◉ Keyword `pub(super)`

Keyword `pub(super)` digunakan untuk membuat visibility item menjadi publik dengan scope akses *parent module*.

Pada contoh berikut, fungsi `say_hello` visibility scope nya ditentukan adalah *parent module*, artinya fungsi tersebut hanya bisa diakses dari dalam *parent module* (yang pada konteks ini adalah `outer_mod`).

```rust
pub mod outer_mod {

    pub mod inner_mod {

        // fungsi ini visibility scope-nya di parent module scope,
        // yaitu `outer_mod`
        pub(super) fn say_hello() {
            println!("hello rust")
        }
    }

    pub fn do_something() {
        inner_mod::say_hello();
    }
}

fn main() {
    outer_mod::do_something();
}
```

### ◉ Keyword `pub(self)`

Keyword ini digunakan untuk membuat visibility item menjadi publik dengan scope akses hanya pada current module. Contohnya bisa dilihat pada kode program berikut.

Fungsi `say_hello` visibility scope-nya adalah *current module*. Fungsi tersebut hanya bisa diakses dari tempat yang merupakan module item dari *current module* yaitu `inner_mod`.

```rust
pub mod outer_mod {

    pub mod inner_mod {

        // fungsi ini visibility scope-nya di current module scope,
        // yaitu `inner_mod`
        pub(self) fn say_hello() {
            println!("hello rust")
        }

        pub fn do_something() {
            say_hello();
        }
    }
}

fn main() {
    outer_mod::inner_mod::do_something();
}
```

---

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/visibility_privacy">
        github.com/novalagung/dasarpemrogramanrust-example/../visibility_privacy
    </a>
</pre>

### ◉ Referensi

- https://doc.rust-lang.org/reference/visibility-and-privacy.html
- https://aloso.github.io/2021/03/28/module-system.html

---
