"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54673],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(25773),i=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},o="typeIn",s={unversionedId:"api/Commands/typein",id:"version-0.6.0/api/Commands/typein",title:"typeIn",description:"Puts the focus on the filtered element by click/tap and types in the text.",source:"@site/versioned_docs/version-0.6.0/api/02-Commands/typein.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/typein",permalink:"/docs/0.6.0/api/Commands/typein",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.0/api/02-Commands/typein.md",tags:[],version:"0.6.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},l=[],c={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typein"},"typeIn"),(0,i.kt)("p",null,"Puts the focus on the filtered element by click/tap and types in the text."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," is included in the logs and sent over to the askui Inference server to\npredict in which context the typing has to occur. You can exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," from the logs\nand the request to the askui Inference server setting ",(0,i.kt)("inlineCode",{parentName:"p"},"options.isSecret")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nThis should not change the quality of the prediction of the askui Inference server. In this\ncase, ",(0,i.kt)("inlineCode",{parentName:"p"},"options.secretMask")," is included in logs and sent over instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),".  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.typeIn('Type some text').textfield().exec()\n\n// mask the text so it is not send to the askui-inference server\nawait aui.typeIn('Type some text', { isSecret: true, secretMask: '**' }).textfield().exec()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} text - A text to type"),(0,i.kt)("li",{parentName:"ul"},"@param {Object} ","[options]"),(0,i.kt)("li",{parentName:"ul"},"@param {boolean} ","[options.isSecret = false]"," - If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," is neither included in\nlogs of askui nor sent over to askui Inference for prediction."),(0,i.kt)("li",{parentName:"ul"},"@param {string} ","[options.secretMask = '****']"," - If ",(0,i.kt)("inlineCode",{parentName:"li"},"options.isSecret")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", this\nis included in logs and sent over to askui Inference for prediction instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10716).Z,width:"1920",height:"1080"})))}d.isMDXComponent=!0},10716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/typeIn-67ee6732071fa623693b6204b79892d7.gif"}}]);