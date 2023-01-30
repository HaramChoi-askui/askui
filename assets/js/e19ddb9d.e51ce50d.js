"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29361],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(25773),a=(t(27378),t(35318));const o={displayed_sidebar:"apiSidebar"},i="and",c={unversionedId:"api/Relations/and",id:"version-0.7.2/api/Relations/and",title:"and",description:"Logic and operator",source:"@site/versioned_docs/version-0.7.2/api/04-Relations/and.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/and",permalink:"/docs/api/Relations/and",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/04-Relations/and.md",tags:[],version:"0.7.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"and"},"and"),(0,a.kt)("p",null,"Logic and operator"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example scene: \n ---------------   ----------------\n |  icon user  |   |  icon search |\n ---------------   ----------------```\n```typescript \nconst icons = await aui.get().icon().exec();\nconsole.log(icons);\n")),(0,a.kt)("p",null,"Using only the filter icon, the get command will return both icons "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 1000,\n        ymin: 1010,\n        xmax: 1020,\n        ymax: 1030\n     }\n  },\n  DetectedElement {\n     name: 'ICON',\n     text: 'search',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n")),(0,a.kt)("p",null,"You can combine filters with ",(0,a.kt)("strong",{parentName:"p"},"the ",(0,a.kt)("inlineCode",{parentName:"strong"},"and()")," relation")," and specify exactly which icon you want"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const icons = await aui.get().icon().and().withText('user').exec()\nconsole.log(icons)\n")),(0,a.kt)("p",null,"The get command returns only the user icon although both elements are icons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"}," console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n")))}u.isMDXComponent=!0}}]);