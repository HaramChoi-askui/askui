"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81356],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=a.createContext({}),s=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,A=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,g=p["".concat(A,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(25773),i=(n(27378),n(35318));const l={custom_edit_url:null},r="Selecting UI Elements",o={unversionedId:"general/Best Practice/selecting_ui_elements",id:"version-0.2.4/general/Best Practice/selecting_ui_elements",title:"Selecting UI Elements",description:"UI testing is all about interacting with UI elements. UIs are built as a human interfaces and not as a machine interfaces. During the development process the underlying source code gets extended, refactored or deleted. This leads to hard to understand, unstable and unreliable element selectors. askui enables you to select UI elements based on the visual features.",source:"@site/versioned_docs/version-0.2.4/general/03-Best Practice/selecting_ui_elements.mdx",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/selecting_ui_elements",permalink:"/docs/0.2.4/general/Best Practice/selecting_ui_elements",draft:!1,editUrl:null,tags:[],version:"0.2.4",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Configure Test Frameworks",permalink:"/docs/0.2.4/general/Best Practice/configure_test_framework"},next:{title:"Speed Up Execution",permalink:"/docs/0.2.4/general/Best Practice/speed_up_execution"}},A={},s=[{value:"1. Generalization vs. Specialization",id:"1-generalization-vs-specialization",level:2},{value:"2. Selecting with Text",id:"2-selecting-with-text",level:2},{value:"3. Visual Relations",id:"3-visual-relations",level:2},{value:"4. Selecting Undetected Elements",id:"4-selecting-undetected-elements",level:2}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"selecting-ui-elements"},"Selecting UI Elements"),(0,i.kt)("p",null,"UI testing is all about interacting with UI elements. UIs are built as a human interfaces and not as a machine interfaces. During the development process the underlying source code gets extended, refactored or deleted. This leads to hard to understand, unstable and unreliable element selectors. askui enables you to select UI elements based on the visual features.  "),(0,i.kt)("p",null,"Hovering over the red bounding boxes in Figure 1 shows a tooltip with the detected UI element and the detected text. As you can see, the ",(0,i.kt)("i",null,"login button")," was detected as a UI element ",(0,i.kt)("i",null,"button")," containing a UI element ",(0,i.kt)("i",null,"text")," with the text 'Login'. Additionally, the main three colors were detected."),(0,i.kt)("p",null,"If we want to click on the login button, we can write the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"await aui.click().button().withText('Login').exec()")),(0,i.kt)("iframe",{id:"figure-1",src:"/annotations/selecting_ui_elements.html",width:"100%",height:"450px"}),(0,i.kt)("center",null,"Figure 1: Interactive Annotation"),(0,i.kt)("h2",{id:"1-generalization-vs-specialization"},"1. Generalization vs. Specialization"),(0,i.kt)("p",null,"A selector should be as specialized as needed and as generalized as possible. This helps a selector to be reliable against source code changes."),(0,i.kt)("p",null,"Let's assume we want to click on any button, then we can write the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().button().exec();\n")),(0,i.kt)("p",null,"In many cases, the given instruction is too general. In the example from above where multiple buttons are visible, sometimes the 'Login' button and sometimes the 'Sign in with Google' button would be clicked."),(0,i.kt)("p",null,"We could make the instruction more specialized by making it click the text 'Login'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().text().withText('Login').exec();\n")),(0,i.kt)("p",null,"But if the text 'Sign in' is renamed to 'Login', the test step would fail again. Therefore, we need to further specialize it."),(0,i.kt)("p",null,"Now we filter for the login button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().button().withText('Login').exec();\n")),(0,i.kt)("p",null,"This is an almost perfect mix between generalization and specialization. The login button can now be moved to the right or somewhere else on the page and the test step would click it. "),(0,i.kt)("p",null,"The following instruction is an example of too much specialization. The dependency between the position of the two buttons can easily lead to a failing instruction when the buttons are positioned differently."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().button().withText('Login').below().text().withText('Sign in').exec();\n")),(0,i.kt)("h2",{id:"2-selecting-with-text"},"2. Selecting with Text"),(0,i.kt)("p",null,"A human usually needs only the written text or visual properties of elements to use a UI. The askui library provides multiple methods to interact with text of the UI. "),(0,i.kt)("p",null,"The OCR model that converts the image to text, like a human, sometimes makes spelling mistakes. To implement a reliable text selector, we have implemented several text filtering methods. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"withText('text')")," method is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Approximate_string_matching"},"fuzzy matching algorithm")," and, therefore, forgives minor spelling mistakes. This method should be used by ",(0,i.kt)("b",null,"default"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().withText('Login').exec();\n")),(0,i.kt)("p",null,"Sometimes two words are so similar, e.g., 'text' and 'test', that the previous method is selecting the wrong text. In this cases the ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactTest('text')")," method can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().withExactText('Login').exec();\n")),(0,i.kt)("p",null,"If you have an article number, e.g., 'AN-8463', which consists of a dynamic part and a static part, then you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText('AN-')")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().containsText('AN-').exec();\n")),(0,i.kt)("h2",{id:"3-visual-relations"},"3. Visual Relations"),(0,i.kt)("p",null,"UIs are designed the same across websites to make the design concepts easier to understand. E.g., a relation between a textfield and a label is visually categorized in 3 classes:"),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8047).Z,width:"468",height:"176"})),(0,i.kt)("p",null,"Figure 2: textfield label relation")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Label is above the textfield."),(0,i.kt)("li",{parentName:"ol"},"Label is left of the textfield."),(0,i.kt)("li",{parentName:"ol"},"Label is in the textfield.")),(0,i.kt)("p",null,"The askui library provides the following visual relation selectors: ",(0,i.kt)("inlineCode",{parentName:"p"},"nearest()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"above()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"below()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rightOf()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"leftOf()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"contains()"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"in()"),"."),(0,i.kt)("p",null,"To fill out the form, the ",(0,i.kt)("inlineCode",{parentName:"p"},"nearest()")," relation should be used by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.typeIn('text to type').textfield().nearest().text().withText('One').exec();\n")),(0,i.kt)("p",null,"This prevents that the instruction fails, when the developer decides to change the position of the label. "),(0,i.kt)("p",null,"As an alternative of the first example, the relation ",(0,i.kt)("inlineCode",{parentName:"p"},"below()")," could be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.typeIn('text to type').textfield().below().text().withText('One').exec();\n")),(0,i.kt)("p",null,"For the second example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rightOf()")," relation can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.typeIn('text to type').textfield().rightOf().text().withText('Two').exec();\n")),(0,i.kt)("p",null,"The third example is trickier, because the textfield contains (",(0,i.kt)("inlineCode",{parentName:"p"},"contains()"),") the label."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.typeIn('text to type').textfield().contains().text().withText('Third').exec();\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"in()")," relation can be used, e.g., to click on the 'Home' text in the header in the example shown in ",(0,i.kt)("a",{parentName:"p",href:"#figure-1"},"Figure 1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().text().withText('Home').in().header().exec();\n")),(0,i.kt)("h2",{id:"4-selecting-undetected-elements"},"4. Selecting Undetected Elements"),(0,i.kt)("p",null,"Sometimes, elements are not detected or classified well. If you hover over the Discord icon right of the 'Get Early Access' button, you will see that the icon is not classified as Discord. "),(0,i.kt)("iframe",{src:"/annotations/not_detected_element.html",width:"100%",height:"500"}),(0,i.kt)("center",null,"Figure 3: Custom Elements"),(0,i.kt)("br",null),"In these cases and cases where elements are not detected at all, custom elements can be used to interact with them.",(0,i.kt)("p",null,"Take a screenshot and crop out the element. Then, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"customElement()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().customElement({customImage: 'path/to/cropped_out_image', name: 'discord'}).withText('discord').exec();\n")))}u.isMDXComponent=!0},8047:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);