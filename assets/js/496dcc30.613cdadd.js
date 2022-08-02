"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[738],{3905:(a,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=t.createContext({}),o=function(a){var e=t.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},s=function(a){var e=o(a.components);return t.createElement(p.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,s=u(a,["components","mdxType","originalType","parentName"]),m=o(n),k=r,g=m["".concat(p,".").concat(k)]||m[k]||d[k]||i;return n?t.createElement(g,l(l({ref:e},s),{},{components:n})):t.createElement(g,l({ref:e},s))}));function k(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=a,u.mdxType="string"==typeof a?a:r,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4547:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="A.1. Program Pertama: Hello Rust",u={unversionedId:"basic/hello-rust",id:"basic/hello-rust",title:"A.1. Program Pertama: Hello Rust",description:"Seperti pada umumnya bahasa pemrograman lain, belajar pembuatan program diawali dengan aplikasi Hello World.",source:"@site/docs/basic/hello-rust.md",sourceDirName:"basic",slug:"/basic/hello-rust",permalink:"/basic/hello-rust",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"(WIP) Setup Tooling dan Editor",permalink:"/setup-tooling-dan-editor"},next:{title:"A.2. Build dan Run Program Rust",permalink:"/basic/build-dan-run-program-rust"}},p={},o=[{value:"A.1.1. Pembuatan project baru",id:"a11-pembuatan-project-baru",level:2},{value:"A.1.2. Run project <code>Hello Rust</code>",id:"a12-run-project-hello-rust",level:2},{value:"A.1.3. Penjelasan blok kode <code>main.rs</code>",id:"a13-penjelasan-blok-kode-mainrs",level:2},{value:"A.1.3.1. Notasi pendefinisian fungsi",id:"a131-notasi-pendefinisian-fungsi",level:3},{value:"A.1.3.2. Notasi pemanggilan fungsi",id:"a132-notasi-pemanggilan-fungsi",level:3},{value:"A.1.3.3. Macro <code>println</code>",id:"a133-macro-println",level:3},{value:"A.1.3.4. Notasi penulisan statement",id:"a134-notasi-penulisan-statement",level:3},{value:"A.1.3.5. Indentation",id:"a135-indentation",level:3},{value:"Source code &amp; referensi",id:"source-code--referensi",level:2}],s={toc:o};function d(a){let{components:e,...i}=a;return(0,r.kt)("wrapper",(0,t.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a1-program-pertama-hello-rust"},"A.1. Program Pertama: Hello Rust"),(0,r.kt)("p",null,"Seperti pada umumnya bahasa pemrograman lain, belajar pembuatan program diawali dengan aplikasi ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World"),"."),(0,r.kt)("p",null,"Pada chapter ini kita akan membuat program bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Rust"),"."),(0,r.kt)("h2",{id:"a11-pembuatan-project-baru"},"A.1.1. Pembuatan project baru"),(0,r.kt)("p",null,"Pembuatan project baru di rust bisa dilakukan dengan 2 cara, dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," atau tanpanya. Disini kita akan skip bagian pembuatan project tanpa ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),", karena akan butuh effort agak banyak dalam manajamen package dan build."),(0,r.kt)("p",null,"Ok langsung saja, buat project baru dengan mengeksekusi command berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new hello_rust\ncd hello_rust\n")),(0,r.kt)("p",null,"Command di atas menghasilkan sebuah folder baru bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_rust")," dengan isi beberapa file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/main.rs"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Struktur project hello_rust",src:n(7409).Z,width:"128",height:"129"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pembahasan secara mendetail ketiga file tersebut akan ada di chapter terpisah")),(0,r.kt)("p",null,"File ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main.rs")," adalah file penting dalam pemrograman Rust. File ",(0,r.kt)("inlineCode",{parentName:"p"},"main.rs")," merupakan file pertama yang dipanggil saat proses build program rust (yg kemudian di-run). Source code program harus berada dalam folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,r.kt)("h2",{id:"a12-run-project-hello-rust"},"A.1.2. Run project ",(0,r.kt)("inlineCode",{parentName:"h2"},"Hello Rust")),(0,r.kt)("p",null,"Sebelum membahas isi kode program dalam ",(0,r.kt)("inlineCode",{parentName:"p"},"main.rs"),", ada baiknya kita run terlebih dahulu program ini untuk melihat hasilnya. Jalankan command berikut untuk run program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Run project hello_rust",src:n(5761).Z,width:"479",height:"331"})),(0,r.kt)("p",null,"Bisa dilihat pada gambar di atas pesan ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, world!")," yang ada dalam file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.rs")," muncul, menandakan proses eksekusi program sukses."),(0,r.kt)("p",null,"Command ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run")," digunakan untuk menjalankan aplikasi saat proses development. Perlu diingat bahwa rust merupakan bahasa pemrograman yang kategorinya ",(0,r.kt)("inlineCode",{parentName:"p"},"compiled language")," yang artinya kode program akan dikompilasi terlebih dahulu untuk menghasilkan file binary, yang kemudian file binary itulah yang dijalankan."),(0,r.kt)("p",null,"Command ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run")," merupakan shorthand untuk memperpendek proses kompilasi dan eksekusi. Dalam command tersebut, kode program akan di-compile terlebih dahulu, dan hasilnya adalah file executable binary bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_rust.exe")," (karena penulis menggunakan windows). File binary tersebut berada dalam project dalam path ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_rust/target/debug/hello_rust.exe"),". Setelah proses kompilasi, file binary tersebut dijalankan, dan hasilnya adalah pesan ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, world!")," yang muncul di layar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Untuk pengguna windows, file binary akan ber-ekstensi ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," seperti pada contoh yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_rust.exe"),". Sedangkan untuk non-windows, file tidak mempunyai ekstensi, ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_rust"),".")),(0,r.kt)("p",null,"Command ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run")," akan sering kita pakai dalam proses development."),(0,r.kt)("h2",{id:"a13-penjelasan-blok-kode-mainrs"},"A.1.3. Penjelasan blok kode ",(0,r.kt)("inlineCode",{parentName:"h2"},"main.rs")),(0,r.kt)("p",null,"Berikut adalah isi (default) dari file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.rs"),", dan kita akan bahas setiap barisnya (cuma 3 baris)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("Hello, world!");\n}\n')),(0,r.kt)("h3",{id:"a131-notasi-pendefinisian-fungsi"},"A.1.3.1. Notasi pendefinisian fungsi"),(0,r.kt)("p",null,"Pembuatan fungsi di rusat menggunakan keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," dengan notasi penulisan sebagai berikut, contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fn namaFungsi() {\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"namaFungsi")," di atas adalah nama fungsi. Pada program yang sudah kita buat, fungsi bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". Penulisan nama fungsi diikuti dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," kemudian kurung kurawal ",(0,r.kt)("inlineCode",{parentName:"p"},"{ }"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sintaks ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," nantinya bisa diisi dengan definisi parameter (pembahasan terpisah). Pada contoh ini tidak ada parameter yang ditulis."),(0,r.kt)("li",{parentName:"ul"},"Sintaks ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," dituliskan dalam baris berbeda, isinya adalah kode program.")),(0,r.kt)("h3",{id:"a132-notasi-pemanggilan-fungsi"},"A.1.3.2. Notasi pemanggilan fungsi"),(0,r.kt)("p",null,"Notasi penulisan pemanggilan fungsi adalah cukup dengan menuliskan nama fungsinya kemudian diikuti dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),", seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"namaFungsi();\n")),(0,r.kt)("p",null,"Jika ada argument parameter yang perlu disisipkan saat pemanggilan fungsi, dituliskan diantara kurung ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),". Contoh pemanggilan ",(0,r.kt)("inlineCode",{parentName:"p"},"sebuahFungsi")," dengan argument berupa string ",(0,r.kt)("inlineCode",{parentName:"p"},'"sebuah argument"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sebuahFungsi("sebuah argument");\n')),(0,r.kt)("p",null,"Ok, sampai sini penulis rasa cukup jelas. Sekarang kita fokus ke ",(0,r.kt)("inlineCode",{parentName:"p"},"println"),", ada yang aneh dengan pemanggilan fungsi ini. Kenapa ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," tidak dituliskan dalam bentuk ",(0,r.kt)("inlineCode",{parentName:"p"},'println("Hello, world!");')," melainkan ",(0,r.kt)("inlineCode",{parentName:"p"},'println!("Hello, world!");'),"?"),(0,r.kt)("p",null,"Sekadar informasi saja, berdasarkan versi rust terbaru, tidak ada fungsi bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"println"),", yang ada adalah macro bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"println"),"."),(0,r.kt)("h3",{id:"a133-macro-println"},"A.1.3.3. Macro ",(0,r.kt)("inlineCode",{parentName:"h3"},"println")),(0,r.kt)("p",null,"Agar pembaca tidak bertambah bingung, setidaknya untuk sekarang pada chapter awal ini anggap saja macro adalah fungsi ... tapi sedikit berbeda. Yang paling terlihat bedanya secara sintaktis adalah tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),". Pemanggilan macro pasti diikuti tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," sebelum ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),". Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'println!("Hello, world!");\n')),(0,r.kt)("p",null,"Macro ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," digunakan digunakan untuk menampilkan string atau pesan ke console output (",(0,r.kt)("inlineCode",{parentName:"p"},"stdout"),") dan diikuti oleh baris baru (newline/enter). Agar lebih jelas jalankan kode berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("Hello, world!");\n\n    println!("How");\n    println!("are");\n    println!("you?");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"println macro",src:n(5772).Z,width:"514",height:"407"})),(0,r.kt)("p",null,"Bisa dilihat, setiap pesan yang ditampilkan menggunakan macro ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," muncul di baris baru."),(0,r.kt)("h3",{id:"a134-notasi-penulisan-statement"},"A.1.3.4. Notasi penulisan statement"),(0,r.kt)("p",null,"Di rust, statement harus diikuti dengan tanda ",(0,r.kt)("inlineCode",{parentName:"p"},";")," atau titik koma. Wajib hukumnya. Tanpa tanda ",(0,r.kt)("inlineCode",{parentName:"p"},";")," maka beberapa statement akan dianggap 1 baris dan kemungkinan menghasilkan error jika sintaks dianggap tidak valid. Tanda ",(0,r.kt)("inlineCode",{parentName:"p"},";")," adalah penanda akhir statement. Contoh ",(0,r.kt)("inlineCode",{parentName:"p"},'println!("Hello, world!");'),"."),(0,r.kt)("h3",{id:"a135-indentation"},"A.1.3.5. Indentation"),(0,r.kt)("p",null,"Mengacu ke keterangan pada dokumentasi rust, standar indentasi untuk kode program rust adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"4 space characters")," atau 4 karakter space."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Ok, penulis rasa cukup untuk program pertama ini, semoga tidak membingungkan. Silakan diulang-ulang jika perlu. Jika sudah siap, kita akan lanjut ke pembahasan dasar pemrograman rust pada chapter berikutnya."),(0,r.kt)("p",null,"Selamat! Anda telah menjadi programmer rust!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"source-code--referensi"},"Source code & referensi"),(0,r.kt)("p",null,"Source code praktek pada chapter ini bisa dilihat di link berikut:"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app1_hello_rust"},"github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app1_hello_rust")),(0,r.kt)("p",null,"Beberapa referensi terkait chapter ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch01-03-hello-cargo.html"},"https://doc.rust-lang.org/book/ch01-03-hello-cargo.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/hello/print.html"},"https://doc.rust-lang.org/rust-by-example/hello/print.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/macro.println.html"},"https://doc.rust-lang.org/std/macro.println.html"))),(0,r.kt)("hr",null))}d.isMDXComponent=!0},7409:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},5761:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/hello-rust-2-462b605573219d73da8738d8d68a89f9.png"},5772:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/hello-rust-3-2d81afd415f39a84d58b666312917df9.png"}}]);