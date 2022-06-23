"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7764],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(5773),a=(r(7378),r(5318));const i={displayed_sidebar:"apiSidebar",custom_edit_url:null},o="withExactText",l={unversionedId:"api/Filters/withexacttext",id:"version-0.1.6/api/Filters/withexacttext",title:"withExactText",description:"Filters for equal text.",source:"@site/versioned_docs/version-0.1.6/api/03-Filters/withexacttext.md",sourceDirName:"api/03-Filters",slug:"/api/Filters/withexacttext",permalink:"/docs/0.1.6/api/Filters/withexacttext",draft:!1,editUrl:null,tags:[],version:"0.1.6",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar"},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"withexacttext"},"withExactText"),(0,a.kt)("p",null,"Filters for equal text."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This should be only used in cases where the similarity\ncomparison of {@link FluentFilters.withText()} allows not for\nspecific enough filtering (too many elements)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"'text' === withExactText('text') => true\n'test' === withExactText('text') => false\n'other' === withExactText('text') => false\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {string} text - A text to be matched.")))}u.isMDXComponent=!0}}]);