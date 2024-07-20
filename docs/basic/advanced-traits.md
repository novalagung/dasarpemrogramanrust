---
sidebar_position: 37
title: A.37. Traits ➜ Advanced
sidebar_label: A.37. Traits ➜ Advanced
---

Chapter ini merupakan kelanjutan dari chapter sebelumnya. Di sini kita fokus ke pembuatan local trait, macam-macam implementasi traits, traits bound syntax, associated types, dan topik yang masih relevan dengan traits lainnya.

Pembahasan lanjutan mengenai traits ini cukup panjang. Makin mendekati akhir pembahasan, makin berat topik yang dibahas. Penulis anjurkan jika diperlukan, silakan mengulang-ulang chapter ini, atau bisa lanjut ke chapter berikutnya dan nanti kembali lagi ke sini ketika sudah siap.

## A.37.1. Membuat custom trait (local trait)

Pada bagian ini kita akan belajar tentang cara membuat definisi trait di local crate dalam project yang sedang dikerjakan.

Masih sama dengan sebelum-sebelumnya, pembelajaran dilakukan dengan praktik. Kita gunakan skenario praktik berikut pada program selanjutnya:

1. Buat struct bernama `Circle`.
2. Buat struct bernama `Square`.
3. Buat trait bernama `Area` dengan isi satu buah method untuk menghitung luas bangun datar (method `calculate_area()`).
4. Implementasikan trait `Area` ke dua struct tersebut.

Ok, mari mulai praktikkan skenario di atas. Pertama siapkan project dengan struktur berikut:

```bash title="package source code structure"
my_package
│─── Cargo.toml
└─── src
     │─── calculation_spec.rs
     │─── two_dimensional.rs
     └─── main.rs
```

Module `calculation_spec` berisi definisi trait `Area`. Trait ini punya visibility akses publik, isinya hanya satu buah definisi method header bernama `calculate_area()`. Trait ini nantinya diimplementasikan ke struct `Circle` dan juga `Square`, agar nantinya kedua struct tersebut memiliki method `calculate_area()` yang berguna untuk kalkulasi luas bangun datar 2d.

```rust title="src/calculation_spec.rs"
pub trait Area {
    fn calculate_area(&self) -> f64;
}
```

Kemudian siapkan file `two_dimensional`, isinya dua buah struct: `Circle` dan `Square`. Pada file yang sama, siapkan juga block kode implementasi trait `Area`. Dengan ini maka kedua struct tersebut wajib untuk memiliki method bernama `calculate_area()` dengan isi adalah operasi perhitungan aritmatika untuk mencari luas bangun datar.

```rust title="src/two_dimensional.rs"
pub struct Circle {
    pub radius: i32,
}

impl crate::calculation_spec::Area for Circle {
    fn calculate_area(&self) -> f64 {
        // PI * (r ^ 2)
        // ada operasi casting ke tipe f64 karena self.radius bertipe i32
        3.14 * (self.radius.pow(2) as f64)
    }
}

pub struct Square {
    pub length: i32,
}

impl crate::calculation_spec::Area for Square {
    fn calculate_area(&self) -> f64 {
        // (s ^ 2)
        // ada operasi casting ke tipe f64 karena self.length bertipe i32
        self.length.pow(2) as f64
    }
}
```

Bisa dilihat pada kode di atas, deklarasi struct beserta property memiliki visibility publik. Idealnya, saat sturct tersebut digunakan di fungsi `main` nantinya tidak akan ada error terkait visibility akses.

Selanjutnya, pada file `main.rs` siapkan kode yang isinya registrasi module `calculate_spec` dan `two_dimensional`, juga definisi fungsi `main` dengan isi statement pembuatan 2 variabel object untuk masing-masing tipe data struct `Circle` dan `Square`.

```rust title="src/main.rs"
mod calculation_spec;
mod two_dimensional;

fn main() {
    let circle_one = two_dimensional::Circle{ radius: 10 };
    println!("circle area: {}", circle_one.calculate_area());

    let square_one = two_dimensional::Square{ length: 5 };
    println!("square area: {}", square_one.calculate_area());
}
```

Method `calculate_area()` milik object bertipe `Circle` dan `Square` diakses untuk kemudian di-print.

Coba jalankan program.

![Trait](img/traits-5.png)

Hmm, error. Padahal trait `Area` sudah publik, dan struct `Circle` & `Square` beserta property-nya juga sudah publik. Tapi masih error.

Error ini disebabkan oleh trait `Area` yang belum di-import di crate root (main). Meskipun kita tidak mengakses trait tersebut secara langsung (melainkan via method `calculate_area()` milik struct `Circle` dan `Square`), diharuskan untuk meng-import-nya juga.

> Detail error beserta solusi dari error ini sebenarnya bisa dilihat di error message. Bagaimana Rust menginformasikan error sangat luar biasa informatif.

Ok, sekarang ubah isi file `main.rs` menjadi seperti ini, kemudian jalankan ulang program. Hasilnya tidak ada error.

```rust title="src/main.rs"
mod calculation_spec;
mod two_dimensional;

use crate::calculation_spec::Area; // <------- tambahkan statement import module

fn main() {
    let circle_one = two_dimensional::Circle{ radius: 10 };
    println!("circle area: {}", circle_one.calculate_area());

    let square_one = two_dimensional::Square{ length: 5 };
    println!("square area: {}", square_one.calculate_area());
}
```

O iya, ada beberapa hal baru pada penerapan kode di atas, berikut adalah pembahasannya:

### ◉ Method `pow` untuk operasi pangkat

Method `pow` adalah item milik tipe data numerik (`i8`, `i16`, `i32`, ...) yang fungsinya untuk operasi pangkat.

```rust
3.pow(2); // ===> 3 pangkat 2
8.pow(5); // ===> 8 pangkat 5
```

### ◉ Keyword `as` untuk casting tipe data

Keyword `as` digunakan untuk casting tipe data. Keyword ini bisa diterapkan pada beberapa jenis tipe data, salah satunya adalah semua tipe data numerik.

```rust
1024 as f32; // ===> 1024 dikonversi ke tipe f32, hasinya adalah 1024.0
3.14 as i32; // ===> 3.14 dikonversi ke tipe i32, hasinya 3 karena ada pembulatan
```

## A.37.2. Trait sebagai tipe parameter

Trait bisa digunakan sebagai tipe data parameter sebuah fungsi, contoh notasi penulisannya bisa dilihat pada kode berikut:

```rust
fn calculate_and_print_result(name: String, item: &impl Area) {
    println!("{} area: {}", name, item.calculate_area());
}
```

Manfaat penerapan trait sebagai tipe data parameter fungsi adalah saat pemanggilan fungsi, parameter tersebut bisa diisi dengan argument data bertipe apapun dengan catatan tipe dari data tersebut mengimplementasikan trait yang sama dengan yang digunakan pada parameter.

Contohnya seperti pada fungsi `calculate_and_print_result` di atas yang parameter ke-2 bertipe `&impl Area`, nantinya saat fungsi tersebut dipanggil, kita bisa sisipi parameter ke-2 dengan object `circle_one` ataupun `circle_two`.

```rust
let circle_one = two_dimensional::Circle{ radius: 10 };
calculate_and_print_result("circle".to_string(), &circle_one);

let square_one = two_dimensional::Square{ length: 5 };
calculate_and_print_result("square".to_string(), &square_one);
```

> `&impl Area` ini tipe data pointer ya, tipe non-pointer-nya adalah `impl Area`. Di sini digunakan tipe data pointer untuk antisipasi *move semantics* pada tipe data custom type (borrowing).

## A.37.3. Parameter bertipe lebih dari 1 trait

Bagaimana jika, parameter fungsi `item` di atas tipenya bisa lebih dari 1 trait, misalnya trait `Area` dan `Circumference`, apakah bisa? Jawabannya bisa.

Mari praktekan. Lakukan modifikasi berikut pada beberapa kode yang telah di tulis.

- File `src/calculation_spec.rs`

    ```rust
    // ...

    // tambahkan ⬇️

    pub trait Circumference {
        fn calculate_circumference(&self) -> f64;
    }
    ```

- File `src/two_dimensional.rs`

    ```rust
    // ...

    // tambahkan ⬇️

    impl crate::calculation_spec::Circumference for Circle {
        fn calculate_circumference(&self) -> f64 {
            2.0 * 3.14 * (self.radius) as f64
        }
    }

    impl crate::calculation_spec::Circumference for Square {
        fn calculate_circumference(&self) -> f64 {
            4.0 * (self.length) as f64
        }
    }
    ```

- File `src/main.rs`

    ```rust
    // ...

    // tambahkan ⬇️

    use crate::calculation_spec::Circumference;

    // ...

    fn calculate_and_print_result(name: String, item: &(impl Area + Circumference)) {
        println!("{} area: {}", name, item.calculate_area());
        println!("{} circumference: {}", name, item.calculate_circumference());
    }
    ```

Dengan perubahan kode yang telah dilakukan di atas, parameter `item` milik fungsi `calculate_and_print_result()` bisa diisi dengan nilai argument apapun asalkan memenuhi kriteria tipe yang ditentukan, yaitu: haruse meng-implement trait `Area` dan trait `Circumference`.

Notasi penulisan tipe-datanya `&(impl Trait1 + Trait2 + Trait3 + ...)`.

## A.37.4. Trait bound syntax

Penerapan trait sebagai parameter fungsi juga bisa dituliskan dalam notasi yang memanfaatkan generic. Teknik penulisan ini disebut dengan *trait bound syntax*.

Contohnya bisa dilihat pada kode berikut. Ada generic bernama `T` yang merepresentasikan trait `Area`, kemudian pada definisi parameter ke-2 fungsi (yaitu parameter `item`) tipenya menggunakan `&T`. Tipe `&T` di sini adalah ekuivalen dengan `&impl Area`.

```rust
fn calculate_and_print_result2<T: Area>(name: String, item: &T) {
    println!("{} area: {}", name, item.calculate_area());
}
```

Jika ada lebih dari satu trait yang digunakan sebagai tipe data paramater, maka penulisannya seperti ini:

```rust
fn calculate_and_print_result3<T: Area + Circumference>(name: String, item: &T) {
    println!("{} area: {}", name, item.calculate_area());
    println!("{} circumference: {}", name, item.calculate_circumference());
}
```

Satu tambahan contoh lagi untuk ilustrasi yang lebih kompleks:

```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {
    // ...
}
```

Pada contoh di atas fungsi `some_function()` memiliki 2 generics param, yaitu `T` dan `U`.

- `T` merepresentasikan trait `Display` dan `Clone`
- `U` merepresentasikan trait `Clone` dan `Debug`

> Lebih jelasnya mengenai generics dibahas pada chapter [Generics](/basic/generics)

## A.37.5. Trait `where` clause

Ada lagi alternatif penulisan trait bound syntax, yaitu menggunakan keyword `where`. Contoh pengaplikasiannya bisa dilihat pada kode berikut. Semua definisi fungsi di bawah ini adalah ekuivalen.

```rust
fn calculate_and_print_result4<T>(name: String, item: &T) where T: Area + Circumference {
    println!("{} area: {}", name, item.calculate_area());
}

fn calculate_and_print_result5<T>(name: String, item: &T)
where
    T: Area + Circumference,
    // ... other generic params if exists
{
    println!("{} area: {}", name, item.calculate_area());
}
```

> Lebih jelasnya mengenai generics dibahas pada chapter [Generics](/basic/generics)

## A.37.6. Trait sebagai return type

Trait bisa juga digunakan sebagai tipe data return value. Caranya gunakan notasi penulisan `impl NamaTrait` sebagai tipe data.

Contohnya bisa dilihat pada kode berikut. Ada dua fungsi baru dideklarasikan:

1. Fungsi `new_circle` dengan return type adalah `impl Area`, dan data yang dikembalikan adalah bertipe `two_dimensional::Circle`.
1. Fungsi `new_square` dengan return type adalah `impl Area + Circumference`, dan data yang dikembalikan adalah bertipe `two_dimensional::Square`.

```rust
fn main() {
    let circle_one = new_circle(5);
    calculate_and_print_result6("circle".to_string(), &circle_one);

    let square_one = new_square(10);
    calculate_and_print_result7("square".to_string(), &square_one);
}

fn new_circle(radius: i32) -> impl Area {
    let data = two_dimensional::Circle{
        radius
    };
    data
}

fn new_square(length: i32) -> impl Area + Circumference {
    two_dimensional::Square{
        length
    }
}

fn calculate_and_print_result6<T>(name: String, item: &T)
where
    T: Area,
{
    println!("{} area: {}", name, item.calculate_area());
}

fn calculate_and_print_result7<T>(name: String, item: &T)
where
    T: Area + Circumference,
{
    println!("{} area: {}", name, item.calculate_area());
    println!("{} circumference: {}", name, item.calculate_circumference());
}
```

Salah satu konsekuensi dalam penerapan trait sebagai return type adalah: tipe data milik nilai yang dikembalikan terdeteksi sebagai tipe trait. Contohnya variabel `circle_one` di atas, tipe data-nya bukan `Circle`, melainkan `impl Area`.

Tipe data aslinya tetap bisa diakses, tapi butuh tambahan effort. Lebih jelasnya dibahas pada chapter [Trait ➜ Conversion (From & Into)](#/wip/trait-conversion-from-into).

## A.37.7. *Associated types* pada trait

Associated types adalah tipe data yang didefinisikan di dalam suatu trait. Associated types tidak tidak memiliki tipe data konkret saat didefinisikan, namun ketika trait di-implementasikan maka tipe tersebut harus ditentukan tipe data konkritnya.

Lebih jelas silakan perhatikan kode berikut:

```rust
trait Shape {
    type Area;

    fn area(&self) -> Self::Area;
}
```

Pada definisi trait `Shape` di atas, yang disebut dengan associated types adalah tipe `Area` yang definisinya berada dalam block trait. Tipe didefinisikan tanpa assignment operator, jadi tidak ada tipe data konkretnya.

Associated types ini sering digunakan pada Rust programming.

Lanjut skenario praktek berikutnya. Silakan siapkan package/project baru dengan struktur seperti ini:

```bash title="package source code structure"
my_package
│─── Cargo.toml
└─── src
     │─── shape.rs
     │─── circle.rs
     │─── square.rs
     └─── main.rs
```

- Disiapkan suatu trait bernama `shape::Shape`.
  - Trait ini memiliki satu associated types bernama `Area`.
  - Dan memiliki sebuah definisi method header `area` yang gunanya untuk menghitung luas bangun datar (*shape*).
- Disiapkan struct `circle::Circle` yang mengadopsi trait `shape::Shape`.
- Disiapkan struct `square::Square` yang mengadopsi trait `shape::Shape`.

```rust title="src/shape.rs"
pub trait Shape {
    type Area;

    fn area(&self) -> Self::Area;
}
```

Trait `Shape` di atas spesifikasinya mirip seperti pada contoh sebelumnya, hanya saja kali ini trait-nya di set public agar bisa diakses dari `main.rs` nantinya.

Trait `Shape` kemudian di-implementasikan ke struct `Circle` dan `Square`, kode-nya bisa dilihat berikut:

```rust title="src/circle.rs"
pub struct Circle {
    pub radius: f64,
}

impl crate::shape::Shape for Circle {
    type Area = f64;

    fn area(&self) -> Self::Area {
        std::f64::consts::PI * self.radius * self.radius
    }
}
```

```rust title="src/square.rs"
pub struct Square {
    pub side: i64,
}

impl crate::shape::Shape for Square {
    type Area = i64;

    fn area(&self) -> Self::Area {
        self.side * self.side
    }
}
```

Bisa dilihat pada kedua implementasi di atas, associated type `Area` diisi dengan tipe concrete, yaitu:

- Tipe data `f64` sebagai tipe concrete `circle:Circle:Area`
- Tipe data `i64` sebagai tipe concrete `square:Square:Area`

> Contoh di atas adalah cara pengaplikasian associated types.

Lalu pada `main.rs`, tipe data struct `circle::Circle` dan `square::Square` digunakan untuk membuat variabel baru, yang kemudian dari variabel tersebut, method `.area()` milik diakses.

```rust title="src/main.rs"
mod shape;
mod circle;
mod square;

use crate::shape::Shape;

fn main() {
    let obj1 = circle::Circle{ radius: 10.0 };
    println!("area of circle: {:.2}", obj1.area());

    let obj2 = square::Square{ side: 10 };
    println!("area of square: {:}", obj2.area());
}
```

Silakan jalankan program dan lihat hasilnya.

![Trait](img/traits-6.png)

O iya, pada `main.rs`, module item `shape::Shape` perlu di-import meskipun kita tidak menggunakan `trait` tersebut secara langsung. Jika tidak di-import, maka method `.area()` milik `Circle` dan `Square` tidak bisa diakses.

## A.37.8. Attribute `derive`

Ada cara lain untuk mengimplementasikan suatu trait ke dalam tipe data selain dengan menuliskan implementasinya secara eksplist, caranya menggunakan attribute `derive`.

Lebih detailnya dibahas pada chapter [Attributes](/basic/attributes).

---

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/advanced_traits">
        github.com/novalagung/dasarpemrogramanrust-example/../advanced_traits
    </a>
</pre>

### ◉ Work in progress

- Pembahasan tentang trait bounds untuk implementasi method kondisional
- Pembahasan tentang trait overloading

### ◉ Referensi

- https://doc.rust-lang.org/book/ch10-02-traits.html
- https://doc.rust-lang.org/std/primitive.i32.html
- https://doc.rust-lang.org/std/fmt/trait.Debug.html
- https://doc.rust-lang.org/std/fmt/trait.Display.html
- https://doc.rust-lang.org/std/string/struct.String.html
