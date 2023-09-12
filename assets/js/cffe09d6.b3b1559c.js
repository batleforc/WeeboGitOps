"use strict";(self.webpackChunkgit_ops_doc=self.webpackChunkgit_ops_doc||[]).push([[914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(u,".").concat(d)]||c[d]||h[d]||n;return a?o.createElement(m,i(i({ref:t},s),{},{components:a})):o.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={slug:"Auth",title:"Auto Auth",authors:"batleforc",tags:["Zitadel","terraform","flux","gitops","daily"]},i=void 0,l={permalink:"/WeeboGitOps/blog/Auth",editUrl:"https://github.com/batleforc/WeeboGitOps/tree/Doc/Main/blog/2023-08-20-Auth.md",source:"@site/blog/2023-08-20-Auth.md",title:"Auto Auth",description:"What's new",date:"2023-08-20T00:00:00.000Z",formattedDate:"20 ao\xfbt 2023",tags:[{label:"Zitadel",permalink:"/WeeboGitOps/blog/tags/zitadel"},{label:"terraform",permalink:"/WeeboGitOps/blog/tags/terraform"},{label:"flux",permalink:"/WeeboGitOps/blog/tags/flux"},{label:"gitops",permalink:"/WeeboGitOps/blog/tags/gitops"},{label:"daily",permalink:"/WeeboGitOps/blog/tags/daily"}],readingTime:1.39,hasTruncateMarker:!1,authors:[{name:"Maxime",title:"Developer of this project",url:"https://github.com/batleforc",imageURL:"https://github.com/batleforc.png",key:"batleforc"}],frontMatter:{slug:"Auth",title:"Auto Auth",authors:"batleforc",tags:["Zitadel","terraform","flux","gitops","daily"]},prevItem:{title:"GitOps Layering",permalink:"/WeeboGitOps/blog/layering"},nextItem:{title:"Renovate And Co",permalink:"/WeeboGitOps/blog/Renovate-co"}},u={authorsImageUrls:[void 0]},p=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Automate me",id:"automate-me",level:2},{value:"Upgrade",id:"upgrade",level:3},{value:"Next to do",id:"next-to-do",level:3}],s={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-new"},"What's new"),(0,r.kt)("p",null,"During the night i finnaly found a way to automate Sonarqube with the help of... Oauth2Proxy and Terraform !!!!"),(0,r.kt)("h2",{id:"automate-me"},"Automate me"),(0,r.kt)("p",null,"So it's the turn of Sonarqube to be automated with... terraform again. I love this tool ! So what does the automation and upgrade does ?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Separate Sonarqube from it's database with two helm release"),(0,r.kt)("li",{parentName:"ul"},"Setup Oauth2Proxy to handle the authentication of Sonarqube and ignore path that doesn't need authentication"),(0,r.kt)("li",{parentName:"ul"},"Setup the ingress to handle the authentication and the path to Sonarqube/Oauth2Proxy"),(0,r.kt)("li",{parentName:"ul"},"Automate the configuration of Sonarqube with TF"),(0,r.kt)("li",{parentName:"ul"},"Automate the creation of Sonarqube secret with TF"),(0,r.kt)("li",{parentName:"ul"},"RollBack to the previous version of Sonarqube from 10 to 9.9")),(0,r.kt)("h3",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"In order to facilitate my upgrade process, i setup ",(0,r.kt)("a",{parentName:"p",href:"https://www.mend.io/renovate/"},"Renovate")," to handle the upgrade of my dependencies. It's really easy to use and it's working really well. I just need to execute the renovate job daily and it create PR when needed and merge it when i think it's ok."),(0,r.kt)("p",null,"Well we need everything to be up to date, so i upgraded everything to the latest version available like"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No Upgrade this time")),(0,r.kt)("p",null,"While working on the upgrade part, i ended up thinking that setting up Changelog would be a good thing. So i'm thinking of including ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cocogitto.io/"},"cog"),"."),(0,r.kt)("h3",{id:"next-to-do"},"Next to do"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup Changelog")),(0,r.kt)("p",null,"While i was upgrading everything it become obvious that i need to upgrade my use of Github. Then i moved from the old Github Dashboard to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/users/batleforc/projects/7/views/1"},"the new one"),". Event if i wasn't writing the doc, i was still working on the project and updating the dashboard and issues."))}h.isMDXComponent=!0}}]);