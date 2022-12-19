"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42330],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const o={displayed_sidebar:"apiSidebar"},a="rightOf",l={unversionedId:"api/Relations/rightof",id:"version-0.6.0/api/Relations/rightof",title:"rightOf",description:"Filters for an element right of another element.",source:"@site/versioned_docs/version-0.6.0/api/04-Relations/rightof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/rightof",permalink:"/docs/0.6.0/api/Relations/rightof",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.0/api/04-Relations/rightof.md",tags:[],version:"0.6.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},c=[],p={toc:c};function f(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rightof"},"rightOf"),(0,i.kt)("p",null,"Filters for an element right of another element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------\n|  leftEl    |  |  rightEl   |\n--------------  --------------\n\n// Returns rightEl because rightEl is right of leftEl\n...rightEl().rightOf().leftEl()\n// Returns no element because leftEl is left of rightEl\n...leftEl().rightOf().rightEl()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(92015).Z,width:"1920",height:"1080"})))}f.isMDXComponent=!0},92015:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"}}]);