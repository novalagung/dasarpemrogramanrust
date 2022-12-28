---
sidebar_position: 45
title: A.45. Tipe Data → String Custom Type
sidebar_label: A.45. Tipe Data → String Custom Type
---

Pembahasan kali ini lingkupnya masih dalam topik custom type `String`.

Penulis rasa 2 chapter terakhir sudah cukup banyak menjelaskan perihal apa itu tipe data `String`, apa perbedaannya dibanding `&str`, dan kapan harus menggunakannya.

> - Pembahasan mengenai perbedaan `String` vs `&str` bisa dilihat pada chapter [String Literal (&str) vs. String Custom Type](/basic/string-slice-vs-string-literal)
> - Pembahasan tentang bagaimana data pada string slice di-manage di memory bisa dilihat pada chapter [Slice Memory Management](/basic/slice-memory-management)

Chapter ini akan lebih fokus ke fitur yang tersedia pada tipe `String`.

## A.45.1. Pembuatan string slice

Ada banyak cara yang bisa digunakan dalam membuat data `String`, diantaranya:

### ◉ Method `to_string` milik `&str`

Method `to_string` milik `&str` mengkonversi string literal menjadi `String`.

```rust
let str2 = "iPhone 8".to_string();
println!("{str2}"); // iPhone 8
```

### ◉ `String::from`

Associated function `String::from` digunakan untuk mengkonversi `&str` ke bentuk `String`. Kita sudah cukup sering menggunakan fungsi ini.

```rust
let str1 = String::from("Nokia 3310");
println!("{str1}"); // Nokia 3310
```

### ◉ `String::new`

Associated function `String::new` menghasilkan data string kosong.

```rust
let str3 = String::new();
println!("{str3}"); // ""
```

### ◉ `String::from_utf8`

Berguna untuk mengkonversi data bytes ke tipe `String`. Fungsi ini nilai baliknya bertipe `Result<String, FromUtf8Error>`, maka dalam penerapannya harus di-chain dengan method `unwrap` untuk mendapatkan data `String`-nya.

```rust
let str4 = String::from_utf8(vec![78, 55, 51]).unwrap();
println!("{str4}"); // N73
```

> Lebih jelasnya mengenai tipe `Result` dibahas pada chapter [Tipe Data → Result](/basic/result-type)

## A.45.2. String mutability

### ◉ Keyword `mut`

Keyword `mut` bisa digunakan untuk mengganti/replace data string dengan data baru. Sebagai contoh, `str5` berikut yang awalnya adalah string kosong di-replace dengan `Pixel 5`.

```rust
let mut str5 = String::new();
println!("{str5}");
// ""

str5 = String::from("Pixel 5");
println!("{str5}");
// Pixel 5
```

### ◉ Replace string / method `replace`

Method `replace` digunakan untuk mengganti suatu substring dengan string lain. Method ini menghasilkan object `String` baru dan tidak mengubah data string aslinya. Karena alasan itu juga kenapa tidak perlu menggunakan keyword `mut` dalam penerapannya.

```rust
let str9 = String::from("my phone is Pixel 6");
let str10 = str9.replace("Pixel 6", "Nokia 3310");

println!("str9: {str9}");   // my phone is Pixel 6
println!("str10: {str10}"); // my phone is Nokia 3310
```

### ◉ Prepend string / method `insert_str`

Method `insert_str` digunakan untuk menyisipkan substring pada posisi tertentu.

```rust
let mut str6 = String::from("Pixel 6");
println!("{str6}");
// Pixel 6

str6.insert_str(0, "my phone");
println!("{str6}");
// my phonePixel 6

str6.insert_str(8, " is ");
println!("{str6}");
// my phone is Pixel 6
```

Parameter pertama perlu diisi dengan indeks dimana string akan disisipkan.

- String `Pixel 6` pada indeks 0 disisipi string `my phone`, hasilnya `my phonePixel 6`
- String `my phonePixel 6` pada indeks 8 disisipi string ` is `, hasilnya `my phone is Pixel 6`

### ◉ Prepend char / method `insert`

Method `insert` kegunaannya sama seperti `insert_str` yaitu untuk menyisipkan string pada posisi tertentu. Perbedaannya, pada method `insert` parameter kedua diisi dengan char.

```rust
let mut str7 = String::from("3310");

str7.insert(0, 'N'); // N3310
str7.insert(1, 'o'); // No3310
str7.insert(2, 'k'); // Nok3310
str7.insert(3, 'i'); // Noki3310
str7.insert(4, 'a'); // Nokia3310
str7.insert(5, ' '); // Nokia 3310
```

### ◉ Append string / method `push_str`

Method `push_str` digunakan untuk menambahkan string di akhir.

```rust
let mut str8 = String::from("Pixel 6"); // Pixel 6
str8.push_str(" is a good phone");      // Pixel 6 is a good phone
```

### ◉ Append char / method `push`

Method `push` sama kegunaannya seperti `push_str`, namun untuk penambahan data `char`.

```rust
let mut str8 = String::from("Pixel");

str8.push(' '); // "Pixel "
str8.push('7'); // "Pixel 7"
```

### ◉ Clear string / method `clear`

Method `clear` digunakan untuk mengosongkan data string.

```rust
let mut str11 = String::from("Nokia 3310");
str11.clear();
println!("{str11}"); // ""
```

## A.45.3. Operasi string lainnya

### ◉ Cek substring / method `contains`

Method `contains` digunakan untuk mengecek apakah suatu substring yang dicari ada atau tidak. Method ini mengembalikan nilai bertipe `bool`.

```rust
let str11 = String::from("Nokia 3310");

let is_exists = str11.contains("3310");
println!("{is_exists}"); // true

let is_exists = str11.contains("3315");
println!("{is_exists}"); // false
```

### ◉ Concat strings / slice `join`

Operasi concat string bisa dilakukan memanfaatkan method `insert_str` atau `push_str`. Selain itu juga bisa dengan menggunakan method `.join` milik slice. Caranya, jadikan string yang ingin di-gabung sebagai element array, kemudian akses method `.join`.

```rust
let str12 = String::from("iPhone");
let str13 = String::from("12");
let str14 = String::from("Pro");

let str: String = [str12, str13, str14].join(" ");

println!("{str}"); // iPhone 12 Pro
```

---

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/tipe_data_custom_type_string_slice">
        github.com/novalagung/dasarpemrogramanrust-example/../tipe_data_custom_type_string_slice
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Tipe Data → String Literal (&str)](/basic/tipe-data-string-literal)
- [Static Item](/basic/static)
- [Lifetime](/basic/lifetime)
- [Slice Memory Management](/basic/slice-memory-management)
- [String Literal (&str) vs. String Custom Type](/basic/string-slice-vs-string-literal)

### ◉ Referensi

- https://doc.rust-lang.org/std/string/struct.String.html

---
