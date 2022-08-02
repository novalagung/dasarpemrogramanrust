"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[622],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>c});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=n.createContext({}),o=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},u=function(a){var e=o(a.components);return n.createElement(s.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},A=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,u=p(a,["components","mdxType","originalType","parentName"]),A=o(t),c=i,g=A["".concat(s,".").concat(c)]||A[c]||d[c]||r;return t?n.createElement(g,l(l({ref:e},u),{},{components:t})):n.createElement(g,l({ref:e},u))}));function c(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,l=new Array(r);l[0]=A;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=a,p.mdxType="string"==typeof a?a:i,l[1]=p;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}A.displayName="MDXCreateElement"},8007:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:6},l="A.6. Tipe Data: String Literal (&str)",p={unversionedId:"basic/tipe-data-string-literal",id:"basic/tipe-data-string-literal",title:"A.6. Tipe Data: String Literal (&str)",description:"String adalah tipe data penting dalam pemrograman. Biasanya tiap bahasa punya cara berbeda dalam meng-handle tipe satu ini. Di bahasa rust, ada dua jenis tipe data string:",source:"@site/docs/basic/tipe-data-string-literal.md",sourceDirName:"basic",slug:"/basic/tipe-data-string-literal",permalink:"/basic/tipe-data-string-literal",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"A.5. Tipe Data: Primitive Scalar",permalink:"/basic/tipe-data-primitive-scalar"},next:{title:"A.7. Konstanta",permalink:"/basic/konstanta"}},s={},o=[{value:"A.6.1. String literal atau <code>&amp;str</code>",id:"a61-string-literal-atau-str",level:2},{value:"Source code &amp; referensi",id:"source-code--referensi",level:2}],u={toc:o};function d(a){let{components:e,...r}=a;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a6-tipe-data-string-literal-str"},"A.6. Tipe Data: String Literal (&str)"),(0,i.kt)("p",null,"String adalah tipe data penting dalam pemrograman. Biasanya tiap bahasa punya cara berbeda dalam meng-handle tipe satu ini. Di bahasa rust, ada dua jenis tipe data string:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tipe string literal (kadang disebut dengan string slice, atau ",(0,i.kt)("inlineCode",{parentName:"li"},"&str"),"). Tipe data ini ada pada nilai yang dideklarasikan dengan diapit tanda petik dua (string literal), contohnya ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, world!"'),"."),(0,i.kt)("li",{parentName:"ul"},"Tipe ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," yang merupakan ",(0,i.kt)("strong",{parentName:"li"},"custom types"),". Untuk tipe ini akan kita bahas pada chapter lain.")),(0,i.kt)("p",null,"Chapter ini fokus pada string literal."),(0,i.kt)("h2",{id:"a61-string-literal-atau-str"},"A.6.1. String literal atau ",(0,i.kt)("inlineCode",{parentName:"h2"},"&str")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kita tidak akan bahas terlalu low-level untuk topik ini, karena memang masih di bab awal-awal.")),(0,i.kt)("p",null,"Rust adalah bahasa yang ",(0,i.kt)("em",{parentName:"p"},"statically typed"),", tipe data harus diketahui saat kompilasi. Setiap pendefinisian variabel, entah itu dengan di-specify tipe datanya (contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"let x: i32 = 5;"),") atau menggunakan teknik ",(0,i.kt)("em",{parentName:"p"},"type inference")," (contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"let x = 5;"),"), tipe datanya akan diketahui di awal saat kompilasi program."),(0,i.kt)("p",null,"Begitu juga pada tipe string. Sebagai contoh, statement ",(0,i.kt)("inlineCode",{parentName:"p"},'let y = "hello";'),", variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," disini memiliki tipe data, yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"&str"),"."),(0,i.kt)("p",null,"Apa itu tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"&str"),"? Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"str")," merupakan salah satu tipe primitif yang ada di rust. Penulisan ",(0,i.kt)("inlineCode",{parentName:"p"},"&str")," menandakan bahwa tipe tersebut adalah ",(0,i.kt)("strong",{parentName:"p"},"pointer ",(0,i.kt)("inlineCode",{parentName:"strong"},"str")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Untuk pembahasan lebih detail mengenai tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," pada tipe data akan dibahas pada chapter terpisah.")),(0,i.kt)("p",null,"Untuk kawan-kawan yang menggunakan VSCode dengan ekstensi ",(0,i.kt)("inlineCode",{parentName:"p"},"rust-analyzer"),", tipe data variabel bisa terlihat saat definisi."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rust string literal",src:t(273).Z,width:"316",height:"151"})),(0,i.kt)("p",null,"Ok, sampai sini yang paling penting adalah dipahami dulu bahwa string literal tipe datanya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"&str"),". Jadi selanjutnya kalau melihat tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"&str")," jangan bingung, itu berarti string."),(0,i.kt)("p",null,"Sementara sampai disini dulu aja pembahasan tipe data setidaknya untuk awal ini. Nanti kita akan kembali ke pembahasan yang lebih detail setelah selesai dengan chapter fundamental lainnya."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"source-code--referensi"},"Source code & referensi"),(0,i.kt)("p",null,"Source code praktek pada chapter ini bisa dilihat di link berikut:"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app5_tipe_data_string_literal"},"github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app5_tipe_data_string_literal")),(0,i.kt)("p",null,"Beberapa referensi terkait chapter ini:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/strings.html"},"https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/strings.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/str/index.html"},"https://doc.rust-lang.org/std/str/index.html"))),(0,i.kt)("hr",null))}d.isMDXComponent=!0},273:(a,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);