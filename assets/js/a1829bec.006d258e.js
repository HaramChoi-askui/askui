"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9643],{5318:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7345:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(5773),o=t(808),a=(t(7378),t(5318)),i=["components"],s={displayed_sidebar:"apiSidebar",custom_edit_url:null},p="pressThreeKeys",c={unversionedId:"api/Commands/pressthreekeys",id:"api/Commands/pressthreekeys",title:"pressThreeKeys",description:"Press three keys like CTRL+ALT+DEL",source:"@site/docs/api/02-Commands/pressthreekeys.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/pressthreekeys",permalink:"/docs/api/Commands/pressthreekeys",editUrl:null,tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"pressKey",permalink:"/docs/api/Commands/presskey"},next:{title:"pressTwoKeys",permalink:"/docs/api/Commands/presstwokeys"}},u={},l=[],m={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pressthreekeys"},"pressThreeKeys"),(0,a.kt)("p",null,"Press three keys like ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+ALT+DEL")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} first_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} second_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {PC_KEY} third_key - A key")))}d.isMDXComponent=!0}}]);