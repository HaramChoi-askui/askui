"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83131],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar",custom_edit_url:null},o="withTextRegex",l={unversionedId:"api/Filters/withtextregex",id:"api/Filters/withtextregex",title:"withTextRegex",description:"Filters for texts, which match the regex pattern.",source:"@site/docs/api/03-Filters/withtextregex.md",sourceDirName:"api/03-Filters",slug:"/api/Filters/withtextregex",permalink:"/docs/next/api/Filters/withtextregex",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"withText",permalink:"/docs/next/api/Filters/withtext"},next:{title:"wizard",permalink:"/docs/next/api/Filters/wizard"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withtextregex"},"withTextRegex"),(0,i.kt)("p",null,"Filters for texts, which match the regex pattern."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"'The rain in Spain' === withTextRegex('\\b[Ss]\\w+') => true\n'The rain in Portugal' === withTextRegex('\\b[Ss]\\w+') => false\n'The rain in switzerland' === withTextRegex('\\b[Ss]\\w+') => true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} regex_pattern - An regex pattern")))}u.isMDXComponent=!0}}]);