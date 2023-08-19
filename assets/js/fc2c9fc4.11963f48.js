"use strict";(self.webpackChunkgit_ops_doc=self.webpackChunkgit_ops_doc||[]).push([[764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={slug:"Renovate-co",title:"Renovate And Co",authors:"batleforc",tags:["renovate","flux","gitops","daily"]},i=void 0,l={permalink:"/WeeboGitOps/blog/Renovate-co",editUrl:"https://github.com/batleforc/WeeboGitOps/tree/Doc/Main/blog/2023-08-19-Renovate.md",source:"@site/blog/2023-08-19-Renovate.md",title:"Renovate And Co",description:"One mont later, what happened ?",date:"2023-08-19T00:00:00.000Z",formattedDate:"19 ao\xfbt 2023",tags:[{label:"renovate",permalink:"/WeeboGitOps/blog/tags/renovate"},{label:"flux",permalink:"/WeeboGitOps/blog/tags/flux"},{label:"gitops",permalink:"/WeeboGitOps/blog/tags/gitops"},{label:"daily",permalink:"/WeeboGitOps/blog/tags/daily"}],readingTime:1.92,hasTruncateMarker:!1,authors:[{name:"Maxime",title:"Developer of this project",url:"https://github.com/batleforc",imageURL:"https://github.com/batleforc.png",key:"batleforc"}],frontMatter:{slug:"Renovate-co",title:"Renovate And Co",authors:"batleforc",tags:["renovate","flux","gitops","daily"]},nextItem:{title:"One year later",permalink:"/WeeboGitOps/blog/one-year-later"}},s={authorsImageUrls:[void 0]},p=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Automate me",id:"automate-me",level:2},{value:"Upgrade",id:"upgrade",level:3},{value:"Next to do",id:"next-to-do",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One mont later, what happened ?"),(0,o.kt)("h2",{id:"whats-new"},"What's new"),(0,o.kt)("p",null,"During the past month another project had my focus, the rewrite of my Rust Template with in the TDD/DDD way. I'm still working on it, but i was feeling the need to do something else.\nSo i decided to get back to my GitOps project and to do some cleanup and upgrade."),(0,o.kt)("h2",{id:"automate-me"},"Automate me"),(0,o.kt)("p",null,"Who's turn ? it's ",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"Wireguard's")," turn to be automated with... terraform again. I'm starting to like this tool, it's really easy to use and to understand. And it's really powerfull. So what does the automation and upgrade does ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the Wireguard configuration (Peer, Interface, ...)"),(0,o.kt)("li",{parentName:"ul"},"Create a secret with each peer (Server, Client1, ...)"),(0,o.kt)("li",{parentName:"ul"},"Include AdGuard Home and the hability to access the Kubernetes internal DNS."),(0,o.kt)("li",{parentName:"ul"},"Build my own image of Wireguard to handle exposing metrics to Prometheus.")),(0,o.kt)("h3",{id:"upgrade"},"Upgrade"),(0,o.kt)("p",null,"In order to facilitate my upgrade process, i setup ",(0,o.kt)("a",{parentName:"p",href:"https://www.mend.io/renovate/"},"Renovate")," to handle the upgrade of my dependencies. It's really easy to use and it's working really well. I just need to execute the renovate job daily and it create PR when needed and merge it when i think it's ok."),(0,o.kt)("p",null,"Well we need everything to be up to date, so i upgraded everything to the latest version available like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terraform Zitadel from v1.0.0-alpha.18 to v1.0.0-alpha.19"),(0,o.kt)("li",{parentName:"ul"},"Terraform Harbor from v3.9.4 to v3.10.1"),(0,o.kt)("li",{parentName:"ul"},"Terraform Kubernetes from v2.22.0 to v2.23.0"),(0,o.kt)("li",{parentName:"ul"},"Helm Release Loki from v4.6.1 to v5.14.1"),(0,o.kt)("li",{parentName:"ul"},"Helm Release Tempo from v1.3.1 to v1.5.0"),(0,o.kt)("li",{parentName:"ul"},"Helm Release Postgres from v12.6.5 to v12.8.3"),(0,o.kt)("li",{parentName:"ul"},"Helm Release Redis from v17.13.2 to v17.15.5"),(0,o.kt)("li",{parentName:"ul"},"Container Buildkit from v0.10.6 to v0.12.1 (and caching with harbor)")),(0,o.kt)("p",null,"While working on the upgrade part, i ended up thinking that setting up Changelog would be a good thing. So i'm thinking of including ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cocogitto.io/"},"cog"),"."),(0,o.kt)("h3",{id:"next-to-do"},"Next to do"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup Changelog"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup Cog"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automate Sonarqube ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/batleforc/WeeboGitOps/issues/52"},"#52")," that would end the automation of Zitadel ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/batleforc/WeeboGitOps/issues/44"},"#44"))),(0,o.kt)("p",null,"While i was upgrading everything it become obvious that i need to upgrade my use of Github. Then i moved from the old Github Dashboard to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/users/batleforc/projects/7/views/1"},"the new one"),". Event if i wasn't writing the doc, i was still working on the project and updating the dashboard and issues."))}d.isMDXComponent=!0}}]);