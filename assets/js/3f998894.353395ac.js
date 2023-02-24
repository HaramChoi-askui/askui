"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65406],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const i={},o="Recommended Practices",l={unversionedId:"general/Guides/recommended-practices",id:"version-0.7.0/general/Guides/recommended-practices",title:"Recommended Practices",description:"This page will give you examples of how to use askui efficiently and effectively.",source:"@site/versioned_docs/version-0.7.0/general/03-Guides/recommended-practices.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/recommended-practices",permalink:"/docs/0.7.0/general/Guides/recommended-practices",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.0/general/03-Guides/recommended-practices.md",tags:[],version:"0.7.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Text Selectors",permalink:"/docs/0.7.0/general/Guides/guide-text-selectors"},next:{title:"askui UI Controller Docker Images",permalink:"/docs/0.7.0/general/Continuous Integration/askui-ui-controller-docker-images"}},c={},s=[{value:"General Considerations on Speed of Inference for Different Selectors",id:"general-considerations-on-speed-of-inference-for-different-selectors",level:2},{value:"Avoid Optical Character Recognition (OCR) on Too Many Element",id:"avoid-optical-character-recognition-ocr-on-too-many-element",level:3},{value:"Avoid Custom Element Detection if Possible",id:"avoid-custom-element-detection-if-possible",level:3},{value:"Scrolling",id:"scrolling",level:2},{value:"Scrolling on Touch Displays",id:"scrolling-on-touch-displays",level:3},{value:"Scrolling With Mouse Wheel",id:"scrolling-with-mouse-wheel",level:3},{value:"Scrolling With Key Press",id:"scrolling-with-key-press",level:3},{value:"Wait for an Element to Appear",id:"wait-for-an-element-to-appear",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recommended-practices"},"Recommended Practices"),(0,r.kt)("p",null,"This page will give you examples of how to use askui efficiently and effectively. "),(0,r.kt)("h2",{id:"general-considerations-on-speed-of-inference-for-different-selectors"},"General Considerations on Speed of Inference for Different Selectors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Selector"),(0,r.kt)("th",{parentName:"tr",align:null},"Tasks"),(0,r.kt)("th",{parentName:"tr",align:null},"Speed"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Common elements, e.g. a button or textfield"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon Classifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Predict the class of an icon, e.g., a user icon"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optical Character Recognition (OCR)"),(0,r.kt)("td",{parentName:"tr",align:null},"Recognize text"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Element Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Search via an image inside the screen"),(0,r.kt)("td",{parentName:"tr",align:null},"slow \ud83d\udc0c")))),(0,r.kt)("h3",{id:"avoid-optical-character-recognition-ocr-on-too-many-element"},"Avoid Optical Character Recognition (OCR) on Too Many Element"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"containsText()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withText()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withExactText()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," ",(0,r.kt)("strong",{parentName:"p"},"OCR")," is applied to all elements detected on your screen. This can slow down askui. It is more efficient to narrow down the elements first. For example, if you want to click a ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," with a specific text you should select all buttons first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Do this\nawait aui.click().button().withText('See here').exec();\nawait aui.click().text().withText('Sign in').exec();\n\n// And NOT this\nawait aui.click().withText('See here').exec();\nawait aui.click().withText('Sign in').exec();\n")),(0,r.kt)("h3",{id:"avoid-custom-element-detection-if-possible"},"Avoid Custom Element Detection if Possible"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"customElement()")," you are doing an image-in-image search. Use this sparingly only for specific custom elements as the execution time is slow!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Do this\nawait aui.click().button().withText('Login').exec();\nawait aui.click().text().withText('Overview').exec();\n\n// And NOT this\nawait aui.click().customElement({\n  customImage: '.../login_button.png', \n  name: 'login button',\n}).exec();\nawait aui.click().customElement({\n  customImage: '.../text_overview.png', \n  name: 'overview button',\n}).exec();\n")),(0,r.kt)("h2",{id:"scrolling"},"Scrolling"),(0,r.kt)("p",null,"When you use askui you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements."),(0,r.kt)("h3",{id:"scrolling-on-touch-displays"},"Scrolling on Touch Displays"),(0,r.kt)("p",null,"On touch displays you have to recreate the swipe gesture:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Touch the display with your finger, move finger to the left, release\nawait aui.mouseToggleDown().exec()\nawait aui.moveMouseRelatively(-1500, 0).exec()\nawait aui.mouseToggleUp().exec()\n")),(0,r.kt)("h3",{id:"scrolling-with-mouse-wheel"},"Scrolling With Mouse Wheel"),(0,r.kt)("p",null,"If you want to scroll with your mouse wheel you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll()")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Scroll 10 down in y direction<>\nawait aui.scroll(0, -10).exec()\n")),(0,r.kt)("h3",{id:"scrolling-with-key-press"},"Scrolling With Key Press"),(0,r.kt)("p",null,"If you want to scroll with a key press you could use your arrow keys (",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"down"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," ) or the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagedown"),"-key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Press down arrow key\nawait aui.pressKey('down').exec()\n\n// Press up arrow key\nawait aui.pressKey('down').exec()\n\n// Scroll down a page\nawait aui.pressKey('pagedown').exec()\n\n// Scroll up a page\nawait aui.pressKey('pageup').exec()\n")),(0,r.kt)("h2",{id:"wait-for-an-element-to-appear"},"Wait for an Element to Appear"),(0,r.kt)("p",null,"askui implements a conservative retry strategy to wait for an element to appear. But sometimes this is not long enough.\nYou can wait for an element to appear with the following helper function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Retry the command 5 times with a\n// wait time of 2 seconds between each try\nasync function waitUntil(askuiCommand: Promise<void>, maxTry = 5) {\n  try {\n    await askuiCommand\n  }\n  catch (error) {\n    if (maxTry == 0) {\n      throw error\n    }\n    console.log(`Retry predicting command, ${maxTry} tries left`)\n    await aui.waitFor(2000).exec()\n    await waitUntil(askuiCommand, maxTry - 1)\n  }\n}\n\n// Wait for the text 'Github' to be displayed\nawait waitUntil(\n    aui.expect().text().withText('Github').exists().exec()\n)\n")))}p.isMDXComponent=!0}}]);