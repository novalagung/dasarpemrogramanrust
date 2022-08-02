"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[477],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>p});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),d=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},k=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=t,A=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(A,l(l({ref:a},k),{},{components:n})):r.createElement(A,l({ref:a},k))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9810:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),t=(n(7294),n(3905));const i={sidebar_position:9},l="A.9. (WIP) Seleksi Kondisi (if)",o={unversionedId:"basic/seleksi-kondisi-if",id:"basic/seleksi-kondisi-if",title:"A.9. (WIP) Seleksi Kondisi (if)",description:"Pada chapter ini kita akan bahas tentang penerapan if untuk kontrol alur program.",source:"@site/docs/basic/seleksi-kondisi-if.md",sourceDirName:"basic",slug:"/basic/seleksi-kondisi-if",permalink:"/basic/seleksi-kondisi-if",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"A.8. (WIP) Operator",permalink:"/basic/operator"},next:{title:"A.10. (WIP) Perulangan (for)",permalink:"/basic/perulangan-for"}},s={},d=[{value:"A.9.1. Keyword <code>if</code>",id:"a91-keyword-if",level:2},{value:"A.9.2. Keyword <code>if</code> dan <code>else</code>",id:"a92-keyword-if-dan-else",level:2},{value:"Source code &amp; referensi",id:"source-code--referensi",level:2}],k={toc:d};function f(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},k,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"a9-wip-seleksi-kondisi-if"},"A.9. (WIP) Seleksi Kondisi (if)"),(0,t.kt)("p",null,"Pada chapter ini kita akan bahas tentang penerapan ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," untuk kontrol alur program."),(0,t.kt)("p",null,"Seleksi kondisi sendiri merupakan teknik untuk grouping blok kode yang eksekusinya tergantung hasil ekspresi seleksi kondisi.  Analoginya mirip seperti fungsi rambu lalu lintas di jalan raya. Kapan kendaraan diperbolehkan melaju dan kapan harus berhenti diatur oleh rambu tersebut. Seleksi kondisi pada program juga kurang lebih sama, kapan sebuah blok kode akan dieksekusi dikontrol."),(0,t.kt)("h2",{id:"a91-keyword-if"},"A.9.1. Keyword ",(0,t.kt)("inlineCode",{parentName:"h2"},"if")),(0,t.kt)("p",null,"Di rust hanya ada 1 keyword untuk seleksi kondisi, yaitu ",(0,t.kt)("inlineCode",{parentName:"p"},"if"),", penggunaannya sangat mudah, yaitu dengan cukup tulis keyword tersebut diikuti dengan data boolean (atau ekspresi logika yang hasilnya boolean), lalu diikuti blok kode. Notasi penulisan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," seperti berikut."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"if operasiLogika {\n    // blok kode\n}\n")),(0,t.kt)("p",null,"Pada notasi di atas, ",(0,t.kt)("inlineCode",{parentName:"p"},"operasiLogika")," bisa diisi dengan variabel yang bertipe ",(0,t.kt)("inlineCode",{parentName:"p"},"bool"),", atau statement ekspresi perbandingan seperti ",(0,t.kt)("inlineCode",{parentName:"p"},"a == b"),". Lebih jelasnya sekarang silakan perhatikan dan coba kode berikut."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'let number = 3;\nif number < 5 {\n    println!("angka adalah dibawah 5");\n}\n\nlet result = number >= 5;\nif result {\n    println!("angka adalah diatas atau sama dengan 5");\n}\n')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"komentar rust",src:n(8038).Z,width:"506",height:"82"})),(0,t.kt)("p",null,"Pada kode di atas ada dua buah blok kode ",(0,t.kt)("inlineCode",{parentName:"p"},"if"),". Yang pertama mengecek hasil ekspresi logika ",(0,t.kt)("inlineCode",{parentName:"p"},"apakah variabel number dibawah 5?"),". Jika hasilnya benar atau ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," maka blok kode setelahnya yang diapit tanda kurung kurawal akan dieksekusi, hasilnya menampilkan tulisan ",(0,t.kt)("inlineCode",{parentName:"p"},"angka adalah dibawah 5"),"."),(0,t.kt)("p",null,"Blok kode ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," kedua adalah mengecek nilai ",(0,t.kt)("inlineCode",{parentName:"p"},"bool")," variabel ",(0,t.kt)("inlineCode",{parentName:"p"},"result"),". Variabel ",(0,t.kt)("inlineCode",{parentName:"p"},"result")," sendiri isinya berasal dari ekspresi logika ",(0,t.kt)("inlineCode",{parentName:"p"},"apakah variabel number lebih besar atau sama dengan 5?"),". Jika hasilnya ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," maka blok kode setelahnya (yang diapit tanda kurung kurawal) dieksekusi. Namun, pada contoh di atas, hasilnya adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"false"),", karena variabel ",(0,t.kt)("inlineCode",{parentName:"p"},"number")," nilainya adalah tidak lebih besar atau sama dengan 5, dengan demikian blok kode tidak dieksekusi."),(0,t.kt)("h2",{id:"a92-keyword-if-dan-else"},"A.9.2. Keyword ",(0,t.kt)("inlineCode",{parentName:"h2"},"if")," dan ",(0,t.kt)("inlineCode",{parentName:"h2"},"else")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"source-code--referensi"},"Source code & referensi"),(0,t.kt)("p",null,"Source code praktek pada chapter ini bisa dilihat di link berikut:"),(0,t.kt)("pre",null,(0,t.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app8_control_flow_if"},"github.com/novalagung/dasarpemrogramanrust/tree/master/hands-on/app8_control_flow_if")),(0,t.kt)("p",null,"Beberapa referensi terkait chapter ini:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch03-05-control-flow.html"},"https://doc.rust-lang.org/book/ch03-05-control-flow.html"))),(0,t.kt)("hr",null))}f.isMDXComponent=!0},8038:(e,a,n)=>{n.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);