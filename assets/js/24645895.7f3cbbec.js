"use strict";(self.webpackChunkweebogitops=self.webpackChunkweebogitops||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="SubProject WorkFlow",l={unversionedId:"SubProject",id:"SubProject",title:"SubProject WorkFlow",description:"In order to sustain my need for multiple subproject, I need to have a workflow for it and to normalize the way I manage these subproject.",source:"@site/docs/SubProject.md",sourceDirName:".",slug:"/SubProject",permalink:"/WeeboGitOps/docs/SubProject",draft:!1,editUrl:"https://github.com/batleforc/WeeboGitOps/tree/Doc/Main/docs/SubProject.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/WeeboGitOps/docs/intro"},next:{title:"Project architecture",permalink:"/WeeboGitOps/docs/category/project-architecture"}},s={},u=[{value:"Git Structure",id:"git-structure",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Why ?",id:"why-",level:3},{value:"Dagger",id:"dagger",level:4},{value:"Tekton",id:"tekton",level:4},{value:"Husky",id:"husky",level:4},{value:"CI/CD",id:"cicd",level:3},{value:"Git hooks",id:"git-hooks",level:3},{value:"GitIgnore",id:"gitignore",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subproject-workflow"},"SubProject WorkFlow"),(0,r.kt)("p",null,"In order to sustain my need for multiple subproject, I need to have a workflow for it and to normalize the way I manage these subproject."),(0,r.kt)("h2",{id:"git-structure"},"Git Structure"),(0,r.kt)("p",null,'One of the amazing thing about Git is it\'s support for the char "/" in the branch name and what it means (having a folder structure).'),(0,r.kt)("p",null,"In order to use it to it's fullest potential the branch name must be in the form of:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<subproject>/<branch>")),(0,r.kt)("p",null,"And by example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Doc/Main")," ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyCloakOpe/Main")),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,"So, has of now we have our subproject represented with a Git Branch but we need a common base folder in order to have the minimal information shared accros project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},".\n+-- README.md : Must contains the basic information and presentation about the subproject and his usage.\n+-- .gitignore : Must contains the list of files to ignore in the subproject.\n+-- deploy : Must contains each component to deploy the app\n| +-- Dagger: dagger definition Build/Deploy\n| +-- Tekton: tekton definition Build/Deploy\n| +-- Helm: helm definition to deploy the app\n+-- .husky : Husky script to commit and use the project\n| +-- pre-commit : Pre commit script (gen swagger doc by example)\n| +-- prepare-commit-msg : Prepare commit message script like with GitMoji\n+-- package.json : Package.json with at least husky install\n+-- yarn.lcok : Yarn lock file with all the dependencies def (because yarn is better than npm)\n")),(0,r.kt)("h3",{id:"why-"},"Why ?"),(0,r.kt)("h4",{id:"dagger"},"Dagger"),(0,r.kt)("p",null,"Has of now ",(0,r.kt)("a",{parentName:"p",href:"https://dagger.io/"},"Dagger")," is being used in order to build image before the use of Tekton when the image is not available."),(0,r.kt)("p",null,"In our case Dagger is meant to be used with Github Action."),(0,r.kt)("h4",{id:"tekton"},"Tekton"),(0,r.kt)("p",null,"Has of now ",(0,r.kt)("a",{parentName:"p",href:"https://tekton.dev/"},"Tekton")," is the main CI/CD engine used inside of the Weebo kubernetes cluster, he is being used when the cluster is setup."),(0,r.kt)("p",null,"Tekton replace the previously used enfine who was Concourse. Concourse was good in it's own way but the development of this project doesn't go the way i was expecting."),(0,r.kt)("h4",{id:"husky"},"Husky"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"Husky")," is a tool who allow easier GitHooks. This tools has the downside of using nodejs but the documentation also use it so why not ?"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The husky configuration is explained in the ",(0,r.kt)("a",{parentName:"p",href:"./SubProject/Husky"},"SubProject part about husky"))),(0,r.kt)("h3",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"What the CI/CD need to do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build the image"),(0,r.kt)("li",{parentName:"ul"},"Code quality check"),(0,r.kt)("li",{parentName:"ul"},"Dependency check"),(0,r.kt)("li",{parentName:"ul"},"On tag make a release if needed"),(0,r.kt)("li",{parentName:"ul"},"Deploy the image/helm chart if needed")),(0,r.kt)("p",null,"If your GithubAction CI/CD need environment variable please create a separated Environments with branch who has access to these variable."),(0,r.kt)("h3",{id:"git-hooks"},"Git hooks"),(0,r.kt)("p",null,"What my git hooks need to do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format commit message with GitMoji"),(0,r.kt)("li",{parentName:"ul"},"Build Swagger doc or this kind of doc if needed"),(0,r.kt)("li",{parentName:"ul"},"Check sonarqube ? Gonna go to the CI")),(0,r.kt)("h3",{id:"gitignore"},"GitIgnore"),(0,r.kt)("p",null,"In order to keep your repo clean, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file to ignore some files."),(0,r.kt)("p",null,"If you need some template here is some link by language:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.toptal.com/developers/gitignore/api/yarn,node,sonarqube"},"NodeJs")," <- Default One"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.toptal.com/developers/gitignore/api/go,yarn,node,sonarqube"},"Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.toptal.com/developers/gitignore/api/yarn,node,react,sonarqube"},"React"))))}c.isMDXComponent=!0}}]);