"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26996],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},s="exists",o={unversionedId:"api/Checks/exists",id:"version-0.7.1/api/Checks/exists",title:"exists",description:"Expects that filtered element exists.",source:"@site/versioned_docs/version-0.7.1/api/05-Checks/exists.md",sourceDirName:"api/05-Checks",slug:"/api/Checks/exists",permalink:"/docs/0.7.1/api/Checks/exists",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.1/api/05-Checks/exists.md",tags:[],version:"0.7.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exists"},"exists"),(0,i.kt)("p",null,"Expects that filtered element exists."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.expect().text().withText('Login').exists().exec()\n")))}u.isMDXComponent=!0}}]);