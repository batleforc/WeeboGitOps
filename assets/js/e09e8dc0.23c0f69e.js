"use strict";(self.webpackChunkweebogitops=self.webpackChunkweebogitops||[]).push([[347],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8989:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:2},l="Hot Reload",i={unversionedId:"SubProject/HotReload",id:"SubProject/HotReload",title:"Hot Reload",description:"Has we already have the nodejs package installed why not go further with integrating a base hot reload ?",source:"@site/docs/SubProject/HotReload.md",sourceDirName:"SubProject",slug:"/SubProject/HotReload",permalink:"/WeeboGitOps/docs/SubProject/HotReload",draft:!1,editUrl:"https://github.com/batleforc/WeeboGitOps/tree/Doc/Main/docs/SubProject/HotReload.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Husky",permalink:"/WeeboGitOps/docs/SubProject/Husky"},next:{title:"Dagger",permalink:"/WeeboGitOps/docs/SubProject/CiCd/Dagger"}},s={},p=[{value:"What is HotReload ?",id:"what-is-hotreload-",level:2},{value:"Install Nodemon",id:"install-nodemon",level:2},{value:"Setup Hot Reload with NodeTs",id:"setup-hot-reload-with-nodets",level:2},{value:"Setup Hot Reload with Golang",id:"setup-hot-reload-with-golang",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hot-reload"},"Hot Reload"),(0,a.kt)("p",null,"Has we already have the nodejs package installed why not go further with integrating a base hot reload ?"),(0,a.kt)("p",null,"You need to take into account that if you create a project who natively support hot reload (like React / Csharp / Java Quarkus) you should not use the hot reload provided by this doc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"During your reading of the next part i ask you to take into account the fact that these example need to be modified in order to follow you need.")),(0,a.kt)("h2",{id:"what-is-hotreload-"},"What is HotReload ?"),(0,a.kt)("p",null,"Hot Reload allow you to watch a folder or multiple for change. if a file change, the server will stop the current process and restart it."),(0,a.kt)("p",null,"In a lot's of case it allow for faster workflow when the language you use has fast start and stop process like golang."),(0,a.kt)("h2",{id:"install-nodemon"},"Install Nodemon"),(0,a.kt)("p",null,"Your first need for the two next part is the ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install nodemon --save-dev\n# or\nyarn add nodemon --dev\n")),(0,a.kt)("p",null,"In the next exemple nodemon support more flag like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'-w ","[path]","' | '--watch ","[path]","' allow you to watch a folder for changes. can be repeated to watch multiple folders.")),(0,a.kt)("h2",{id:"setup-hot-reload-with-nodets"},"Setup Hot Reload with NodeTs"),(0,a.kt)("p",null,"Because you are the kind of person whoknow what to do and has a big brain, you use TypeScript and has already banished Js since a long time ago."),(0,a.kt)("p",null,"So to getStarted you need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," package to your dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install ts-node --save-dev\n# or\nyarn add ts-node --dev\n")),(0,a.kt)("p",null,"then add a script to you ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in order for it to run on your repo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ... // your package.json\n  "scripts": {\n    "watch": "nodemon ./main.ts"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If needed a past project use a more complexe startup workflow based on multiple package."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/batleforc/UnlabeledProject/blob/master/package.json"},"UnlabeledProject"))),(0,a.kt)("h2",{id:"setup-hot-reload-with-golang"},"Setup Hot Reload with Golang"),(0,a.kt)("p",null,"Once you have installed nodemon you need to add a scripts inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ... // your package.json\n  "scripts": {\n    "watch": "nodemon --exec go run main.go"\n  }\n}\n')),(0,a.kt)("p",null,"this script is gonna watch your currrent directory and on change will restart the application."))}c.isMDXComponent=!0}}]);