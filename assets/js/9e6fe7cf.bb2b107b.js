"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[623],{3905:(t,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>d});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function s(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function i(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=e.createContext({}),o=function(t){var n=e.useContext(u),a=n;return t&&(a="function"==typeof t?t(n):s(s({},n),t)),a},p=function(t){var n=o(t.components);return e.createElement(u.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},g=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),g=o(a),d=r,k=g["".concat(u,".").concat(d)]||g[d]||m[d]||l;return a?e.createElement(k,s(s({ref:n},p),{},{components:a})):e.createElement(k,s({ref:n},p))}));function d(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return e.createElement.apply(null,s)}return e.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2508:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var e=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,title:"Instalasi Rust",sidebar_label:"Instalasi Rust"},s=void 0,i={unversionedId:"installation/instalasi-rust",id:"installation/instalasi-rust",title:"Instalasi Rust",description:"Pada chapter ini kita akan belajar cara instalasi Rust. Pembaca bisa mengikuti panduan instalasi ini, atau langsung saja navigasi ke https://www.rust-lang.org/tools/install.",source:"@site/docs/installation/instalasi-rust.md",sourceDirName:"installation",slug:"/installation/instalasi-rust",permalink:"/installation/instalasi-rust",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Instalasi Rust",sidebar_label:"Instalasi Rust"},sidebar:"tutorialSidebar",previous:{title:"Lisensi dan Distribusi Konten",permalink:"/LICENSE"},next:{title:"Rust Editor & Plugin",permalink:"/installation/rust-editor-plugin"}},u={},o=[{value:"Install Rust menggunakan <code>rustup</code>",id:"install-rust-menggunakan-rustup",level:2},{value:"\u25c9 MacOS, Linux, Unix",id:"-macos-linux-unix",level:3},{value:"\u25c9 Windows",id:"-windows",level:3},{value:"Install Rust menggunakan installer",id:"install-rust-menggunakan-installer",level:2},{value:"Update versi Rust tooling",id:"update-versi-rust-tooling",level:2},{value:"Referensi",id:"referensi",level:2}],p={toc:o};function m(t){let{components:n,...a}=t;return(0,r.kt)("wrapper",(0,e.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada chapter ini kita akan belajar cara instalasi Rust. Pembaca bisa mengikuti panduan instalasi ini, atau langsung saja navigasi ke ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install"),"."),(0,r.kt)("p",null,"Ada dua metode instalasi yang penulis anjurkan, yaitu menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," atau menggunakan installer."),(0,r.kt)("h2",{id:"install-rust-menggunakan-rustup"},"Install Rust menggunakan ",(0,r.kt)("inlineCode",{parentName:"h2"},"rustup")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," adalah tool resmi untuk manajemen ",(0,r.kt)("em",{parentName:"p"},"Rust tooling"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," mempermudah proses instalasi, update versi, ataupun penggantian versi Rust."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Instalasi Rust tooling menggunakan metode ini lebih direkomendasikan")),(0,r.kt)("p",null,"Cara instalasi ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," untuk tiap sistem operasi bisa dilihat di bawah ini:"),(0,r.kt)("h3",{id:"-macos-linux-unix"},"\u25c9 MacOS, Linux, Unix"),(0,r.kt)("p",null,"Jalankan command berikut untuk instal ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," dan mengecek hasil instalasi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh\n\nrustup --version\nrustc --version\ncargo --version\n")),(0,r.kt)("h3",{id:"-windows"},"\u25c9 Windows"),(0,r.kt)("p",null,"Silakan download file ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup-init.exe")," di ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install"),". Jalankan installar, lalu run command berikut untuk mengecek hasil instalasi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\nrustc --version\ncargo --version\n")),(0,r.kt)("p",null,"Untuk pengguna WSL (Windows Subsystem for Linux), bisa menggunakan command berikut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\nrustup --version\nrustc --version\ncargo --version\n")),(0,r.kt)("h2",{id:"install-rust-menggunakan-installer"},"Install Rust menggunakan installer"),(0,r.kt)("p",null,"Silakan download installer sesuai dengan sistem operasi dan platform yang digunakan menggunakan link berikut:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers"},"https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers"))),(0,r.kt)("p",null,"Lalu run command di bawah ini untuk mengecek hasil instalasi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\nrustc --version\ncargo --version\n")),(0,r.kt)("h2",{id:"update-versi-rust-tooling"},"Update versi Rust tooling"),(0,r.kt)("p",null,"Jika pembaca menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup"),", update Rust tooling dilakukan cukup dengan menjalankan command berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\nrustup --version\n")),(0,r.kt)("p",null,"Terutuntuk Rust yang di-install menggunakan installer, cara update dilakukan dengan download dan run installer versi terbaru yang bisa didownload dari link berikut:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers"},"https://forge.rust-lang.org/infra/other-installation-methods.html#standalone-installers"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"referensi"},"Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forge.rust-lang.org/infra/other-installation-methods.html"},"https://forge.rust-lang.org/infra/other-installation-methods.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"https://doc.rust-lang.org/book/ch01-01-installation.html"))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);