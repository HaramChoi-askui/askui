"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31461],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(25773),o=(t(27378),t(35318));const a={displayed_sidebar:"apiSidebar",custom_edit_url:null},i="contains",l={unversionedId:"api/Relations/contains",id:"version-0.2.6/api/Relations/contains",title:"contains",description:"Filters for an element containing another element.",source:"@site/versioned_docs/version-0.2.6/api/04-Relations/contains.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/contains",permalink:"/docs/api/Relations/contains",draft:!1,editUrl:null,tags:[],version:"0.2.6",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar"},c={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contains"},"contains"),(0,o.kt)("p",null,"Filters for an element containing another element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n\n// Returns outerEl because outerEl contains innerEl\n...outerEl().contains().innerEl()\n//  Returns no element because innerEl contains no outerEl\n...innerEl().contains().outerEl()\n")))}u.isMDXComponent=!0}}]);