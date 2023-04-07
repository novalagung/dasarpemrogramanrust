"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[2089],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>k});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),u=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},o=function(e){var a=u(e.components);return t.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(n),k=r,s=b["".concat(m,".").concat(k)]||b[k]||d[k]||i;return n?t.createElement(s,l(l({ref:a},o),{},{components:n})):t.createElement(s,l({ref:a},o))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5444:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:33,title:"A.33. Pointer & References",sidebar_label:"A.33. Pointer & References"},l=void 0,p={unversionedId:"basic/pointer-references",id:"basic/pointer-references",title:"A.33. Pointer & References",description:"Chapter ini membahas tentang apa itu pointer, references, dan dereferences. Pembelajaran dimulai tentang konsep dan praktik dasar tentang ketiga topik tersebut, kemudian diikuti dengan pembahasan tentang karakteristik pointer & reference.",source:"@site/docs/basic/pointer-references.md",sourceDirName:"basic",slug:"/basic/pointer-references",permalink:"/basic/pointer-references",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,title:"A.33. Pointer & References",sidebar_label:"A.33. Pointer & References"},sidebar:"tutorialSidebar",previous:{title:"A.32. Basic Memory Management",permalink:"/basic/basic-memory-management"},next:{title:"A.34. Ownership",permalink:"/basic/ownership"}},m={},u=[{value:"A.33.1. Pointer",id:"a331-pointer",level:2},{value:"A.33.2. Reference (operator <code>&amp;</code>)",id:"a332-reference-operator-",level:2},{value:"A.33.3. Dereference (operator <code>*</code>)",id:"a333-dereference-operator-",level:2},{value:"A.33.4. Mutable References (operator <code>&amp;mut</code>)",id:"a334-mutable-references-operator-mut",level:2},{value:"A.33.5. Aturan Reference",id:"a335-aturan-reference",level:2},{value:"A.33.6. Karakteristik pointer &amp; reference",id:"a336-karakteristik-pointer--reference",level:2},{value:"\u25c9 Contoh ke-1",id:"-contoh-ke-1",level:3},{value:"\u25c9 Contoh ke-2",id:"-contoh-ke-2",level:3},{value:"A.33.7. Reference &amp; borrowing",id:"a337-reference--borrowing",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],o={toc:u};function d(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},o,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chapter ini membahas tentang apa itu pointer, references, dan dereferences. Pembelajaran dimulai tentang konsep dan praktik dasar tentang ketiga topik tersebut, kemudian diikuti dengan pembahasan tentang karakteristik pointer & reference."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Penulis tekankan bahwa ",(0,r.kt)("strong",{parentName:"p"},"pada chapter ini, konsep reference yang dibahas adalah dalam konteks programming secara general.")," Tidak dari sudut pandang ownership.")),(0,r.kt)("p",null,"Reference pada Rust memiliki keunikan, tapi kita akan bahas itu secara terpisah pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/borrowing"},"Borrowing"),". Untuk sekarang silakan ikuti terlebih dahulu pembahasan chapter-per-chapter secara berurutan."),(0,r.kt)("h2",{id:"a331-pointer"},"A.33.1. Pointer"),(0,r.kt)("p",null,"Pointer artinya adalah alamat memori. Variabel pointer artinya adalah variabel yang berisi alamat memory (hanya alamat memory-nya saja, bukan value yang sebenarnya)."),(0,r.kt)("p",null,"Di Rust, variabel pointer ditandai dengan adanya karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," pada tipe data. Sebagai contoh ",(0,r.kt)("inlineCode",{parentName:"p"},"&i32")," artinya adalah tipe data pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),". Contoh lain adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"&bool")," yang merupakan tipe data pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ada dua jenis tipe pointer di Rust programming, yaitu smart pointer dan raw pointer. Pada chapter ini kita tidak membahasnya karena termasuk topik yang cukup advance. Pembahasan akan ada pada chapter terpisah ",(0,r.kt)("a",{parentName:"p",href:"#/wip/smart-pointer-raw-pointer"},"Smart Pointer vs Raw Pointer"),".")),(0,r.kt)("h2",{id:"a332-reference-operator-"},"A.33.2. Reference (operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"&"),")"),(0,r.kt)("p",null,"Ok, selanjutnya apa itu ",(0,r.kt)("em",{parentName:"p"},"reference"),"? Istilah ini sudah beberapa kali disinggung pada chapter sebelum-sebelumnya."),(0,r.kt)("p",null,"Reference artinya adalah pointer dari sebuah variabel atau data. Operasi pengambilan pointer dari variabel disebut dengan ",(0,r.kt)("em",{parentName:"p"},"referencing"),", caranya dilakukan dengan menggunakan karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),"."),(0,r.kt)("p",null,"O iya, semua jenis variabel bisa diambil nilai pointernya. Contohnya bisa dilihat berikut ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let number: i32 = 24;\nprintln!("value: {:?}", number);\n\nlet pointer_number: &i32 = &number;\nprintln!("pointer: {:p}", pointer_number);\n')),(0,r.kt)("p",null,"Pada contoh di atas, sebuah variabel dideklarasikan bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," dengan tipe data adalah numerik dan value ",(0,r.kt)("inlineCode",{parentName:"p"},"24"),". Variabel tersebut jika di-print akan muncul nilainya, yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"24"),"."),(0,r.kt)("p",null,"Ada satu lagi variabel yang dideklarasikan yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number"),", yang nilainya adalah ",(0,r.kt)("em",{parentName:"p"},"reference")," dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Cara pengambilan reference yabng dilihat pada contoh, yaitu dengan menambahkan operator ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," pada variabel yang ingin dimabil pointernya."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// variabel pointer_number nilainya adalah reference variabel number.\n// contoh statement:\nlet pointer_number_1 = &number;\nlet pointer_number_2: &i32 = &number;\n")),(0,r.kt)("p",null,"By default, ketika variabel pointer di print, yang muncul adalah ",(0,r.kt)("em",{parentName:"p"},"underlying value")," atau nilai sebenarnya, yang pada contoh di atas adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"24"),". Untuk menampilkan alamat memory gunakan formatted print ",(0,r.kt)("inlineCode",{parentName:"p"},"{:p}"),"."),(0,r.kt)("p",null,"Coba jalankan program kemudian lihat hasilnya. Value muncul sesuai dengan yang ditulis, sedangkan pointer memunculkan data alamat memory yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"0xa3bbeff6dc"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pointer &amp; reference",src:n(1007).Z,width:"494",height:"320"})),(0,r.kt)("p",null,"Seperti yang sudah dijelaskan di awal bahwa variabel pointer isinya adalah alamat memory. Penulisannya dalam notasi heksadesimal diawali dengan karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"0x"),". Contohnya adalah nilai ",(0,r.kt)("inlineCode",{parentName:"p"},"0xa3bbeff6dc")," yang merupakan alamat memory, yang alamat tersebut adalah reference ke  pemilik data sebenarnya (yaitu variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Di environment lokal masing-masing, alamat memory yang muncul sangat mungkin berbeda karena alokasi adalah random")),(0,r.kt)("h2",{id:"a333-dereference-operator-"},"A.33.3. Dereference (operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"*"),")"),(0,r.kt)("p",null,"Kita sudah belajar cara mengambil data pointer dari sebuah variabel. Pada bagian ini kita belajar cara mengambil nilai sebenarnya atau underlying value dari sebuah pointer (istilahnya adalah ",(0,r.kt)("em",{parentName:"p"},"dereference"),")."),(0,r.kt)("p",null,"Cara melakukan operasi ",(0,r.kt)("em",{parentName:"p"},"dereferencing")," adalah dengan menambahkan karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," pada variabel pointer. Contohnya seperti berikut, silakan tambahkan kode ini ke program yang sudah ditulis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// variabel underlying_value nilainya adalah nilai sebenarnya dari pointer pointer_number\nlet underlying_value = *pointer_number;\nprintln!("value: {:}", underlying_value);\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dereference",src:n(6356).Z,width:"467",height:"412"})),(0,r.kt)("p",null,"Bisa dilihat, nilai dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"underlying_value")," adalah nilai sebenarnya dari pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number"),", yang pastinya adalah sama dengan nilai variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("h2",{id:"a334-mutable-references-operator-mut"},"A.33.4. Mutable References (operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"&mut"),")"),(0,r.kt)("p",null,"By default, reference sifatnya ",(0,r.kt)("em",{parentName:"p"},"read-only")," atau ",(0,r.kt)("em",{parentName:"p"},"immutable"),", artinya tidak bisa diubah ",(0,r.kt)("em",{parentName:"p"},"underlying-value"),"-nya."),(0,r.kt)("p",null,"Jika ada variabel (sebut saja X) yang merupakan underlying value dari reference variabel lain, maka perubahan value pada variabel X tersebut ",(0,r.kt)("em",{parentName:"p"},"default"),"-nya menghasilkan error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut number = 24;\nprintln!("number: {}", number);\n\nlet pointer_number = &number;\nprintln!("pointer_number: {:p}", pointer_number);\n\n*pointer_number = 12;\n\nprintln!("*pointer_number: {}", *pointer_number);\nprintln!("number: {}", number);\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pointer &amp; reference",src:n(8992).Z,width:"715",height:"343"})),(0,r.kt)("p",null,"Pada gambar di atas bisa dilihat, variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," merupakan reference dari variabel mutable ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Setelahnya ada statement ",(0,r.kt)("inlineCode",{parentName:"p"},"*pointer_number = 12"),", yang artinya adalah underlying value dari variabel pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," diakses kemudian di-isi nilainya dengan angka ",(0,r.kt)("inlineCode",{parentName:"p"},"12"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Statement ",(0,r.kt)("inlineCode",{parentName:"p"},"*pointer_number = 12")," tidak menghasilkan error, dan statement ini berbeda dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number = 12"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Statement ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number = 12")," menghasilkan error karena ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," adalah variabel bertipe ",(0,r.kt)("strong",{parentName:"p"},"pointer ",(0,r.kt)("inlineCode",{parentName:"strong"},"i32")," atau ",(0,r.kt)("inlineCode",{parentName:"strong"},"&i32")," (bukan ",(0,r.kt)("inlineCode",{parentName:"strong"},"i32"),")"),". Jika ingin mengubah nilainya perlu mengakses dulu underlying value-nya menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"*pointer_number"),".")),(0,r.kt)("p",null,"Ok, lalu kenapa muncul error? Di gambar terlihat ada garis merah dan popup pesan error muncul, padahal tidak ada yang salah dengan statement-nya."),(0,r.kt)("p",null,"Penyebab erronya bukan dari statement tersebut, tetapi pada baris statement pengambilan reference variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Statement ",(0,r.kt)("inlineCode",{parentName:"p"},"&number")," artinya adalah mengambil reference dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Di atas sempat kita bahas bahwa ",(0,r.kt)("em",{parentName:"p"},"by default")," sebuah reference tidak bisa diubah nilainya (",(0,r.kt)("em",{parentName:"p"},"immutable"),"), dan ini adalah penyebab error yang dialami."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Silakan perhatikan pesan di popup error message agar mudah untuk tau dimana sumber masalahnya.")),(0,r.kt)("p",null,"Perubahan isi nilai variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," tidak menghasilkan error, hal ini karena number adalah variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," adalah mutable. Sedangkan operasi perubahan nilai variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"*pointer_number")," pada contoh di atas, dianggap sebagai error karena variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," reference-nya adalah bukan mutable (meskipun reference diperoleh dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," yang notabene mutable)."),(0,r.kt)("p",null,"Solusi dari error di atas adalah menerapkan ",(0,r.kt)("strong",{parentName:"p"},"mutable reference"),". Mutable reference sama seperti reference biasa tetapi nilainya diperbolehkan untuk diubah (mutable). Caranya pengaksesan mutable reference dilakukan menggunakan operator ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut"),"."),(0,r.kt)("p",null,"Ok, sekarang ubah statement berikut ini, lalu jalankan program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// before\nlet pointer_number = &number;\n\n// after\nlet pointer_number = &mut number;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pointer &amp; reference",src:n(5127).Z,width:"488",height:"417"})),(0,r.kt)("p",null,"Deklarasi variable pointer yang menampung mutable reference bisa via metode penulisan ",(0,r.kt)("em",{parentName:"p"},"manifest typing")," atau ",(0,r.kt)("em",{parentName:"p"},"type inference"),". Pada contoh berikut, variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," tipe data-nya adalah mutable reference ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),", maka penulisan tipe data adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut i32"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// type inference\nlet pointer_number = &mut number;\n\n// manifest typing\nlet pointer_number: &mut i32 = &mut number;\n")),(0,r.kt)("p",null,"Pada contoh ini kita menggunakan tipe data primitif, lalu bagaimana dengan tipe data non-primitive seperti custom type struct atau ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", apakah penerapan mutable reference juga sama? Jawabannya tidak. Ada beberapa perbedaan dan nantinya kita akan bahas secara detail pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/borrowing"},"Borrowing"),". Untuk sekarang, dianjurkan mengikuti pembahasan chapter per chapter secara urut."),(0,r.kt)("h2",{id:"a335-aturan-reference"},"A.33.5. Aturan Reference"),(0,r.kt)("p",null,"Ada dua aturan penting yang harus dipatuhi dalam penerapan reference baik mutable atau immutable reference."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dalam waktu yang sama, hanya boleh ada satu mutable reference atau banyak immutable reference (keduanya tidak bisa bersamaan, harus salah satu)."),(0,r.kt)("li",{parentName:"ul"},"Reference harus selalu valid.")),(0,r.kt)("p",null,"Mengenai penjelasan tentang dua aturan penting di atas akan bahas pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/borrowing"},"Borrowing"),"."),(0,r.kt)("h2",{id:"a336-karakteristik-pointer--reference"},"A.33.6. Karakteristik pointer & reference"),(0,r.kt)("p",null,"Kita sudah belajar tentang definisi beserta cara penerapan pointer, reference, dereference, dan mutable reference. Sekarang lanjut ke pembahasan tentang karakteristik dari pointer & reference."),(0,r.kt)("p",null,"Pointer merupakan variabel yang isinya adalah alamat memory (bukan nilai sebenarnya). Dan reference adalah alamat memory suatu data/variabel. Dengan menerapkan keduanya kita bisa menerapkan efisiensi penggunaan memory yang dampaknya sangat positif terhadap performa program."),(0,r.kt)("p",null,"Sekarang perhatikan statement berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let number_one = 24;\nlet number_two = number_one;\n")),(0,r.kt)("p",null,"Variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one")," adalah data numerik bertipe ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),", eksekusi statement tersebut menghasilkan alokasi memori selebar 32-bit."),(0,r.kt)("p",null,"Kemudian ada lagi statement ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two"),". Meskipun nilainya didapat dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one"),", yang terjadi di balik layar adalah Rust akan mengalokasikan lagi alamat memory selebar 32-bit untuk menampung data ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two")," yang didapat dari hasil operasi ",(0,r.kt)("strong",{parentName:"p"},"copy")," dari variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Semua variabel primitif di Rust mengadopsi ",(0,r.kt)("em",{parentName:"p"},"copy semantics"),", yang artinya jika variabel tersebut digunakan dalam statement assignment, maka nilai akan di-duplikasi untuk kemudian ditampung pada variabel baru."),(0,r.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai ",(0,r.kt)("em",{parentName:"p"},"copy semantics")," dibahas pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/ownership#a334-copy-semantics-vs-move-semantics"},"Ownership"),".")),(0,r.kt)("p",null,"Selanjutnya, bandingkan dengan statement berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let number_one = 24;\nlet number_two = &number_one;\n")),(0,r.kt)("p",null,"Pada contoh di atas, variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one")," datanya disimpan di memory dengan lebar 32-bit (masih sama seperti contoh sebelumnya). Namun ada yang berbeda dengan dengan variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two"),", variabel ini adalah variabel pointer yang nilainya reference ke alamat memory data variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one"),". Yang terjadi di belakang layar, Rust tidak mengalokasikan lagi memory selebar 32-bit untuk menampung data ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two"),", melainkan menggunakan alamat memory data ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one")," sebagai reference, menjadikannya sebagai alamat tujuan variabel pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two"),"."),(0,r.kt)("p",null,"Ok, lanjut. Per sekarang, reference variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number_one")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"number_two")," adalah sama. Dengan ini, jika dicontohkan isi data satu variabel diubah, maka variabel lainnya juga akan berubah, hal karena reference-nya adalah sama."),(0,r.kt)("h3",{id:"-contoh-ke-1"},"\u25c9 Contoh ke-1"),(0,r.kt)("p",null,"Contoh penerapannya bisa kita lihat pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/pointer-references#a315-karakteristik-pointer--reference"},"Pointer & References")," chapter ini, disitu bisa dilihat ada variabel mutable ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," yang reference-nya adalah sama dengan variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Ketika underlying value ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer_number")," diubah (dari ",(0,r.kt)("inlineCode",{parentName:"p"},"24")," ke ",(0,r.kt)("inlineCode",{parentName:"p"},"12"),"), isi data variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," juga berubah."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pointer &amp; reference",src:n(5127).Z,width:"488",height:"417"})),(0,r.kt)("h3",{id:"-contoh-ke-2"},"\u25c9 Contoh ke-2"),(0,r.kt)("p",null,"Agar makin familiar dengan cara penerapan pointer & reference, silakan lanjut dengan praktik program berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="package source code structure"',title:'"package',source:!0,code:!0,'structure"':!0},"my_package\n\u2502\u2500\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500\u2500 src\n     \u2514\u2500\u2500\u2500 main.rs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'# ...\n\n[dependencies]\nrand = "0.8.5"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'use rand::Rng;\n\nfn main() {\n    let mut number = 24;\n    println!("number: {}", number);\n\n    for _ in 0..=5 {\n        change_value(&mut number);\n        println!("number: {}", number);\n    }\n}\n\nfn change_value(n: &mut i32) {\n    *n = generate_random_number()\n}\n\nfn generate_random_number() -> i32 {\n    rand::thread_rng().gen_range(0..100)\n}\n')),(0,r.kt)("p",null,"Pada sederhana di atas, ada sebuah variable mutable bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," yang dideklarasikan. Variabel tersebut kemudian diakses ",(0,r.kt)("em",{parentName:"p"},"mutable reference"),"-nya untuk dijadikan argumen statement pemanggilan fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"change_value"),"."),(0,r.kt)("p",null,"Di dalam fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"change_value"),", disiapkan 1 buah angka random hasil pemanggilan fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_random_number"),", yang angka tersebut kemudian dijadikan sebagai nilai baru variable mutable reference yang mengarah ke ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". Perubahan dalam fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"change_value")," akan mempengaruhi data variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", karena reference-nya adalah sama."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pointer &amp; reference",src:n(3319).Z,width:"457",height:"204"})),(0,r.kt)("h2",{id:"a337-reference--borrowing"},"A.33.7. Reference & borrowing"),(0,r.kt)("p",null,"Di Rust, reference (atau pengaksesan alamat memory suatu data) memiliki hubungan yang sangat erat dengan konsep ",(0,r.kt)("strong",{parentName:"p"},"borrowing"),"."),(0,r.kt)("p",null,"Ketika kita mengambil reference suatu data, yang terjadi sebenarnya adalah kita meminjam data tersebut dari owner/pemilik sebenarnya."),(0,r.kt)("p",null,"Pada chapter ini kita tidak akan membahasnya lebih jauh lagi, karena akan ada chapter lain yang fokus mengulas topik tersebut secara detail, yaitu chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/borrowing"},"Borrowing"),"."),(0,r.kt)("p",null,"Untuk sekarang penulis anjurkan untuk lanjut ke chapter berikutnya secara urut."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/pointer_references"},"github.com/novalagung/dasarpemrogramanrust-example/../pointer_references")),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html"},"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/marker/trait.Copy.html"},"https://doc.rust-lang.org/std/marker/trait.Copy.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reference_(computer_science)"},"https://en.wikipedia.org/wiki/Reference_(computer_science)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://progressivecoder.com/understanding-rust-ownership-and-borrowing-with-examples/"},"https://progressivecoder.com/understanding-rust-ownership-and-borrowing-with-examples/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://os.phil-opp.com/heap-allocation/"},"https://os.phil-opp.com/heap-allocation/"))),(0,r.kt)("hr",null))}d.isMDXComponent=!0},1007:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pointer-references-1-f103aebf5517db2d9de53c1fe39be319.png"},6356:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pointer-references-2-8fdb7f20f15717b7d97311d81ffe005d.png"},8992:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pointer-references-3-7b60c4bdc0392eb962187ee76ac2ab54.png"},5127:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pointer-references-4-ba178a14defb70eb04b45ce050af0e6e.png"},3319:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAckAAADMCAIAAACX588hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGdWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMDVUMTc6MDg6MTQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTA1VDE4OjI1OjI0KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTA1VDE4OjI1OjI0KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdlZmZmODBiLTc4N2UtZDM0Ni1hZTBiLTNkYTE0MmY1ZDgxYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4YmRlNzdmZS04ZmVjLWEwNDgtYmQ2OC1jNGFhMjUzZWRkYTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YmRlNzdmZS04ZmVjLWEwNDgtYmQ2OC1jNGFhMjUzZWRkYTMiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjhiZGU3N2ZlLThmZWMtYTA0OC1iZDY4LWM0YWEyNTNlZGRhMzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhiZGU3N2ZlLThmZWMtYTA0OC1iZDY4LWM0YWEyNTNlZGRhMyIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0wNVQxNzowODoxNCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZWZmZjgwYi03ODdlLWQzNDYtYWUwYi0zZGExNDJmNWQ4MWEiIHN0RXZ0OndoZW49IjIwMjItMTItMDVUMTg6MjU6MjQrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5CQC5bAAAVqUlEQVR42u2dO5LUSBeF/5VUgzf22IDbHuBgjNF4HbgEER2Bx0JYAqvAZ1E/LVVJ+Tg38+pZqervi4lgWpVSKh86ukqlTv7vBAAAa/M/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"}}]);