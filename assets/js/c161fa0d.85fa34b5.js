"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5488],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(5773),i=n(808),o=(n(7378),n(5318)),a=["components"],c={displayed_sidebar:"apiSidebar",custom_edit_url:null},l="containsText",s={unversionedId:"api/Filters/containstext",id:"api/Filters/containstext",title:"containsText",description:"Filters for text containing the text provided as an argument.",source:"@site/docs/api/03-Filters/containstext.md",sourceDirName:"api/03-Filters",slug:"/api/Filters/containstext",permalink:"/docs/api/Filters/containstext",editUrl:null,tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"colored",permalink:"/docs/api/Filters/colored"},next:{title:"customElement",permalink:"/docs/api/Filters/customelement"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containstext"},"containsText"),(0,o.kt)("p",null,"Filters for text containing the text provided as an argument."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"'This is an text' === containsText('text') => true\n'This is an text' === containsText('other text') => false\n'This is an text' === containsText('other') => false\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {string} text - A text to be matched.")))}d.isMDXComponent=!0}}]);