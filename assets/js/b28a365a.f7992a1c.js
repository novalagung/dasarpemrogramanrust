"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[6794],{3905:(a,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function k(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var o=t.createContext({}),s=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},p=function(a){var e=s(a.components);return t.createElement(o.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,l=a.originalType,o=a.parentName,p=k(a,["components","mdxType","originalType","parentName"]),u=s(n),b=i,c=u["".concat(o,".").concat(b)]||u[b]||d[b]||l;return n?t.createElement(c,r(r({ref:e},p),{},{components:n})):t.createElement(c,r({ref:e},p))}));function b(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=n.length,r=new Array(l);r[0]=u;var k={};for(var o in e)hasOwnProperty.call(e,o)&&(k[o]=e[o]);k.originalType=a,k.mdxType="string"==typeof a?a:i,r[1]=k;for(var s=2;s<l;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9076:(a,e,n)=>{n.d(e,{Z:()=>i});var t=n(7294);function i(a){return t.createElement("iframe",{src:"https://novalagung.substack.com/embed",width:"100%",height:"320",style:{border:"1px solid #EEE",background:"white"},frameborder:"0",scrolling:"no"})}},7356:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>k,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(7462),i=(n(7294),n(3905)),l=n(9076);const r={sidebar_position:30,title:"A.30. Block Expression",sidebar_label:"A.30. Block Expression"},k=void 0,o={unversionedId:"basic/block-expression",id:"basic/block-expression",title:"A.30. Block Expression",description:"Pada chapter ini kita akan belajar tentang block expression.",source:"@site/docs/basic/block-expression.md",sourceDirName:"basic",slug:"/basic/block-expression",permalink:"/basic/block-expression",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"A.30. Block Expression",sidebar_label:"A.30. Block Expression"},sidebar:"tutorialSidebar",previous:{title:"A.29. Module System \u2192 Use, Import, Re-export",permalink:"/basic/use"},next:{title:"A.31. Shadowing",permalink:"/basic/shadowing"}},s={},p=[{value:"A.30.1. Konsep dan penerapan block",id:"a301-konsep-dan-penerapan-block",level:2},{value:"A.30.2. Return value block",id:"a302-return-value-block",level:2},{value:"A.30.3. Nested block",id:"a303-nested-block",level:2},{value:"A.30.4. Labeled block",id:"a304-labeled-block",level:2},{value:"A.30.5. Async block",id:"a305-async-block",level:2},{value:"A.30.6. <em>Unsafe</em> block",id:"a306-unsafe-block",level:2},{value:"A.30.7 Manfaat penerapan block",id:"a307-manfaat-penerapan-block",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:p};function u(a){let{components:e,...r}=a;return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan belajar tentang block expression."),(0,i.kt)("h2",{id:"a301-konsep-dan-penerapan-block"},"A.30.1. Konsep dan penerapan block"),(0,i.kt)("p",null,"Block expression (atau cukup block), adalah salah satu control flow yang ada di Rust yang berguna untuk isolasi items, variabel, ataupun proses dalam sebuah scope yang sifatnya ",(0,i.kt)("em",{parentName:"p"},"anonymous"),"."),(0,i.kt)("p",null,"Block expression berbeda jika dibandingkan block kode ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," (yang berarti dia adalah milik ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),") atau block kode fungsi (yang dia adalah milik fungsi), block expression tidak berasosiasi dengan keyword tertentu / ",(0,i.kt)("em",{parentName:"p"},"anonymous"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pada ebook ini, penulis akan menggunakan istilah ",(0,i.kt)("strong",{parentName:"p"},"block fungsi")," untuk block fungsi, ",(0,i.kt)("strong",{parentName:"p"},"block kode if")," untuk block kode seleksi kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", dan ",(0,i.kt)("strong",{parentName:"p"},"block kode X")," untuk X."),(0,i.kt)("p",{parentName:"blockquote"},"Untuk block expression, penulis akan gunakan istilah ",(0,i.kt)("strong",{parentName:"p"},"block expression")," atau cukup ",(0,i.kt)("strong",{parentName:"p"},"block")," saja.")),(0,i.kt)("p",null,"Cara penerapan block cukup dengan menuliskan kode program diapit di antara tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),". Contoh penerapannya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let x = 24;\n    println!("x: {}", x);\n\n    {\n        println!("(from block) x: {}", x);\n\n        let y = 12;\n        let z = x + y;\n        println!("(from block) y: {}", y);\n        println!("(from block) z: {}", z);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Block",src:n(9379).Z,width:"460",height:"144"})),(0,i.kt)("p",null,"Pada contoh di atas, dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," ada variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," yang dideklarasikan kemudian di-print. Setelahnya diikuti statement block expression. Bisa dilihat seperti itu kurang lebih cara penulisannya."),(0,i.kt)("p",null,"Di dalam block, nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," di-print. Operasi seperti ini bisa dilakukan, karena ",(0,i.kt)("em",{parentName:"p"},"by default")," semua items pada scope di luar block adalah bisa diakses dari dalam block. Contohnya adalah variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," yang deklarasinya berada di luar block, tapi diakses di dalam block."),(0,i.kt)("p",null,"Kemudian ada beberapa variabel baru yang didefinisikan di dalam block, yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," yang variabel tersebut juga di-print. Variabel tersebut akan valid sampai eksekusi block selesai. Intinya semua statement dalam block expression ter-isolasi dalam anonymous scope tersebut. Setelah block kode selesai dieksekusi, jika kita berusaha memanggil items yang ada di dalam block dengan pemanggilan dari luar scope, hasilnya error."),(0,i.kt)("p",null,"Sebagai contoh, kode berikut menghasilkan error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let x = 24;\n\n{\n    let y = 12;\n    let z = x + y;\n};\n\nprintln!("z: {}", z); // <------ error\n')),(0,i.kt)("p",null,"O iya, dalam penulisannya, statement block harus diikuti tanda semicolon ",(0,i.kt)("inlineCode",{parentName:"p"},";")," sebagai penanda akhir statement, dengan beberapa pengecualian yang akan ikut dibahas pada section setelah ini."),(0,i.kt)("h2",{id:"a302-return-value-block"},"A.30.2. Return value block"),(0,i.kt)("p",null,"Sebuah block expression bisa memiliki return value, dengannya maka nilainya bisa ditampung dalam sebuah variabel. Cara penerapannya menggunakan notasi berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let varOne = {\n    // ...\n    returnValue\n};\n\nlet varTwo: tipeData = {\n    // ...\n    returnValue\n};\n")),(0,i.kt)("p",null,"Dalam block expression, tidak perlu menuliskan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," dan tidak perlu juga menuliskan tanda semicolon di akhir statement return value."),(0,i.kt)("p",null,"Berikut adalah contoh praktik return value block. Ada sebuah block yang nilai baliknya ditampung ke variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". Isi block sendiri adalah generate data numerik random, yang kemudian dikalikan dengan angka ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", lalu dijadikan return value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use rand::Rng;\n\nfn main() {\n    let a: i32 = {\n        let n = rand::thread_rng().gen_range(0..100);\n        n * 2\n    };\n\n    println!("a: {}", a);\n}\n')),(0,i.kt)("h2",{id:"a303-nested-block"},"A.30.3. Nested block"),(0,i.kt)("p",null,"Block bisa berada di dalam block. Contohnya seperti kode berikut, nested block dengan kedalaman 3 layer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'{\n    let b = 12;\n    let mut total = 0;\n\n    {\n        let c = 13;\n\n        {\n            let d = 14;\n            total = b + c + d;\n        }\n    }\n\n    println!("{total}")\n}\n')),(0,i.kt)("p",null,"Tidak ada yang istimewa tentang cara penulisan nested block. Langsung tulis saja block expression dalam block sesuai kebutuhan."),(0,i.kt)("h2",{id:"a304-labeled-block"},"A.30.4. Labeled block"),(0,i.kt)("p",null,"Tak hanya perulangan, sebuah block expression juga bisa memiliki label. Cara penerapannya dengan menuliskan nama label (diawaili dengan tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"), kemudian diikuti tanda ",(0,i.kt)("inlineCode",{parentName:"p"},":")," dan block expression. Silakan lihat notasi penulisan berikut agar lebih jelas:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"'nama_label: {\n    // ...\n}\n")),(0,i.kt)("p",null,"Mari coba terapkan. Pada kode berikut, ada block expression dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"'append_with_even_number"),"."),(0,i.kt)("p",null,"Di dalam block itu, ada proses generate data numerik secara acak. Angka random tersebut kemudian di cek, jika ganjil maka block expression dihentikan secara paksa. Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"break 'append_with_even_number")," artinya menghentikan eksekusi block ",(0,i.kt)("inlineCode",{parentName:"p"},"'append_with_even_number"),"."),(0,i.kt)("p",null,"Jika angka genap, maka ditambahkan ke ",(0,i.kt)("inlineCode",{parentName:"p"},"total")," kemudian di-print."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    {\n        let mut total = 24;\n\n        'append_with_even_number: {\n            let n = rand::thread_rng().gen_range(0..100);\n\n            if n % 2 == 1 {\n                break 'append_with_even_number\n            }\n\n            total = n\n        }\n\n        println!(\"{total}\");\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Block",src:n(8872).Z,width:"457",height:"108"})),(0,i.kt)("h2",{id:"a305-async-block"},"A.30.5. Async block"),(0,i.kt)("p",null,"Pembahasan mengenai asynchronous block ada pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#/wip/async"},"Async"),"."),(0,i.kt)("h2",{id:"a306-unsafe-block"},"A.30.6. ",(0,i.kt)("em",{parentName:"h2"},"Unsafe")," block"),(0,i.kt)("p",null,"Pembahasan mengenai unsafe block expression ada pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#/wip/safe-unsafe"},"Safe & Unsafe"),"."),(0,i.kt)("h2",{id:"a307-manfaat-penerapan-block"},"A.30.7 Manfaat penerapan block"),(0,i.kt)("p",null,"Block biasa diterapkan untuk isolasi sebuah proses yang tidak perlu di-reuse. Jika proses adalah di-reuse, dianjurkan untuk menggunakan fungsi dalam penerapannya."),(0,i.kt)("p",null,"Di bahasa pemrograman lain juga ada block yang penerapannya kurang lebih adalah sama. Namun perlu diketahui, di Rust block memiliki berbedaan yang bisa dibilang signifikan, yaitu dalam hal manajemen memory."),(0,i.kt)("p",null,"Rust menerapkan konsep memory management bernama ",(0,i.kt)("strong",{parentName:"p"},"ownership"),". Setiap kali Rust selesai mengeksekusi block kode, baik itu fungsi, block expression, atau jenis block lainnya; akan dilakukan evaluasi pengecekan ownership yang ada dalam block tersebut. Untuk data yang owner-nya tidak berpindah ke luar scope, maka akan dilakukan proses dealokasi memory untuk data tersebut. Dengan approach ini penggunaan memory menjadi efisien."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lebih jelasnya mengenai memory management dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/basic-memory-management"},"Memory Management")),(0,i.kt)("li",{parentName:"ul"},"Lebih jelasnya mengenai ownership dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/ownership"},"Ownership"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/block_expression"},"github.com/novalagung/dasarpemrogramanrust-example/../block_expression")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/expressions/block-expr.html"},"https://doc.rust-lang.org/reference/expressions/block-expr.html"))),(0,i.kt)("hr",null),(0,i.kt)(l.Z,{mdxType:"Substack"}))}u.isMDXComponent=!0},9379:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAACQCAIAAAAKgszpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGdWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMDhUMTM6NTM6MDErMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTEzVDE3OjExOjE1KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTEzVDE3OjExOjE1KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBlNDllNWM0LWIwZjktMmY0YS1hYzA5LTY1NzI2NGQ4MTNiNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTJhYTgxNi04YWQ4LWNjNGItYmIwOS1kM2QwMzBhMzIzYzAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNTJhYTgxNi04YWQ4LWNjNGItYmIwOS1kM2QwMzBhMzIzYzAiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjI1MmFhODE2LThhZDgtY2M0Yi1iYjA5LWQzZDAzMGEzMjNjMDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1MmFhODE2LThhZDgtY2M0Yi1iYjA5LWQzZDAzMGEzMjNjMCIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0wOFQxMzo1MzowMSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTQ5ZTVjNC1iMGY5LTJmNGEtYWMwOS02NTcyNjRkODEzYjYiIHN0RXZ0OndoZW49IjIwMjItMTItMTNUMTc6MTE6MTUrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53hJdmAAASHUlEQVR42u2dO5LbRheFtRKOnSl2LCmdTOPEwQSjTKVU5aqpcqaFaAlahfJ/Uf8QIIB+nNt98SQIfl+5PCLYQD9xeNFoHLw7AQDAaryj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"},8872:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAckAAABsCAIAAACO+97PAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGdWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMTNUMTY6NTc6MDcrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTEzVDE3OjEwOjQ5KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTEzVDE3OjEwOjQ5KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1YjgyY2E2LWExMjEtNWM0ZC04NDMzLWM1MGFlNWQ2MzgyYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyZDlkOWM2Ny05ZGY3LWI0NDEtYTkxNi0xZDFmMTUyNGUyMGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZDlkOWM2Ny05ZGY3LWI0NDEtYTkxNi0xZDFmMTUyNGUyMGUiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjJkOWQ5YzY3LTlkZjctYjQ0MS1hOTE2LTFkMWYxNTI0ZTIwZTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkOWQ5YzY3LTlkZjctYjQ0MS1hOTE2LTFkMWYxNTI0ZTIwZSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0xM1QxNjo1NzowNyswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NWI4MmNhNi1hMTIxLTVjNGQtODQzMy1jNTBhZTVkNjM4MmEiIHN0RXZ0OndoZW49IjIwMjItMTItMTNUMTc6MTA6NDkrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vR0lHAAAQtElEQVR42u1dPXLcOBfUOVy2ZGeOHdtKlVlOHGwwzlROXVulqs18kD2CT7H5d6hPQw5JAK/fDzgkB+J011atxQHx8wA0Hx7A5s0tQRDN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"}}]);