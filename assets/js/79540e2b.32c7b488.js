"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85117],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),c=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(f,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},l="leftOf",i={unversionedId:"api/Relations/leftof",id:"api/Relations/leftof",title:"leftOf",description:"Filters for an element left of another element.",source:"@site/docs/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/next/api/Relations/leftof",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/04-Relations/leftof.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"in",permalink:"/docs/next/api/Relations/in"},next:{title:"nearestTo",permalink:"/docs/next/api/Relations/nearestto"}},f={},c=[],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"leftof"},"leftOf"),(0,o.kt)("p",null,"Filters for an element left of another element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------\n|  leftEl    |  |  rightEl   |\n--------------  --------------\n\n// Returns leftEl because leftEl is left of rightEl\n...leftEl().leftOf().rightEl()\n// Returns no element because rightEl is left of leftEl\n...rightEl().leftOf().leftEl()\n")))}s.isMDXComponent=!0}}]);