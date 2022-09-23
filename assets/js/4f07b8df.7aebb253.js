"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56055],{35318:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57925:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(25773),o=(t(27378),t(35318));const a={displayed_sidebar:"apiSidebar"},i="scroll",s={unversionedId:"api/Commands/scroll",id:"version-0.2.7/api/Commands/scroll",title:"scroll",description:"Scrolls based on the current mouse position in the x and y direction.",source:"@site/versioned_docs/version-0.2.7/api/02-Commands/scroll.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/scroll",permalink:"/docs/0.2.7/api/Commands/scroll",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.2.7/api/02-Commands/scroll.md",tags:[],version:"0.2.7",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scroll"},"scroll"),(0,o.kt)("p",null,"Scrolls based on the current mouse position in the x and y direction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important"),": Mouse must be positioned in a scrollable area."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,o.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")))}u.isMDXComponent=!0}}]);