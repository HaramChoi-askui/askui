"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50718],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const a={},i="Deprecated Endpoints",l={unversionedId:"general/Troubleshooting/deprecated-endpoints",id:"general/Troubleshooting/deprecated-endpoints",title:"Deprecated Endpoints",description:"If you are using the askui library you may see this warning:",source:"@site/docs/general/07-Troubleshooting/deprecated-endpoints.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/deprecated-endpoints",permalink:"/docs/next/general/Troubleshooting/deprecated-endpoints",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/deprecated-endpoints.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/next/general/Troubleshooting/"},next:{title:"IPv6",permalink:"/docs/next/general/Troubleshooting/ipv6"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deprecated-endpoints"},"Deprecated Endpoints"),(0,o.kt)("p",null,"If you are using the askui library you may see this warning:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"This endpoint will deprecate. Please upgrade your askui version")),(0,o.kt)("p",null,"This means that you are using an askui version, which will stop working in the near future. "),(0,o.kt)("p",null,"You can upgrade your askui version with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install askui@latest\n")))}u.isMDXComponent=!0}}]);