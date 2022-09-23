"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96458],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(25773),i=(n(27378),n(35318));const a={},l="Online Shop Test Tutorial",r={unversionedId:"general/Tutorials/shop-demo",id:"version-0.2.7/general/Tutorials/shop-demo",title:"Online Shop Test Tutorial",description:"The following tutorial shows how to test the login process of a simple demo online shop.",source:"@site/versioned_docs/version-0.2.7/general/06-Tutorials/shop-demo.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/shop-demo",permalink:"/docs/0.2.7/general/Tutorials/shop-demo",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.2.7/general/06-Tutorials/shop-demo.md",tags:[],version:"0.2.7",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Annotate Interactively",permalink:"/docs/0.2.7/general/Tooling/annotate-interactively"},next:{title:"Desktop App Automation Tutorial",permalink:"/docs/0.2.7/general/Tutorials/spotify-tutorial"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Test",id:"test",level:2},{value:"1. Open the Demo Shop",id:"1-open-the-demo-shop",level:3},{value:"2. Navigate to the Login Dialog",id:"2-navigate-to-the-login-dialog",level:3},{value:"3. Fill out Login Information",id:"3-fill-out-login-information",level:3},{value:"4. Click on Login Button",id:"4-click-on-login-button",level:3},{value:"5. Check whether Login worked &amp; Log out",id:"5-check-whether-login-worked--log-out",level:3},{value:"Result",id:"result",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"online-shop-test-tutorial"},"Online Shop Test Tutorial"),(0,i.kt)("p",null,"The following tutorial shows how to test the login process of a simple demo online shop."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new npm project (create an empty folder and run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm init -y"),")"),(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.2.7/general/Getting%20Started/getting-started"},"askui installation guide")),(0,i.kt)("li",{parentName:"ul"},"Generate the askui example project files with ",(0,i.kt)("inlineCode",{parentName:"li"},"npx askui init")),(0,i.kt)("li",{parentName:"ul"},"Open a browser on your screen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,i.kt)("inlineCode",{parentName:"li"},"helpers/askui-helper.ts"))))),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"After running the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,i.kt)("inlineCode",{parentName:"p"},"specs/my-first-askui-test-suite.spec.ts"),". In this file add a new test inside the body of the callback passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the test suite */, () => {\n    ... (other tests)\n\n    it('Should log into account', async () => {\n\n    });\n});\n")),(0,i.kt)("h3",{id:"1-open-the-demo-shop"},"1. Open the Demo Shop"),(0,i.kt)("p",null,"First we need to open the demo shop in the browser. For that we can type the url into the url bar and hit enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    await aui.typeIn('https://askui-demo-shop-6e358.web.app/').url().exec();\n    await aui.pressKey('enter').exec();\n});\n")),(0,i.kt)("p",null,"When you run this test with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx jest --config ./test/jest.config.ts"),", you should see the demo online shop opening in the browser you opened."),(0,i.kt)("h3",{id:"2-navigate-to-the-login-dialog"},"2. Navigate to the Login Dialog"),(0,i.kt)("p",null,"Next, to open the login dialog, we need to click the text login at the top of the page. We can do this with the following instruction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.click().text().withText('Login').exec();\n});\n")),(0,i.kt)("h3",{id:"3-fill-out-login-information"},"3. Fill out Login Information"),(0,i.kt)("p",null,"After opening the login dialog, we need to enter an email address and a password. For this we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeIn")," command. After filling in an email address, depending on the browser used the textfield may open an auto-complete dropdown that overlaps with the password field:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Overlap",src:n(60169).Z,width:"636",height:"259"})),(0,i.kt)("p",null,'To keep the password field visible, we have to hide the auto-complete dropdown. In order to do this, we have to blur the email input field. We do this by clicking on the headline of the page ("Login"). Afterwards, we can type into the password field.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.typeIn('test@askui.com').textfield().contains().text().withText('Email Address').exec();\n    await aui.click().text().withText('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text().withText('Password').exec();\n});\n")),(0,i.kt)("h3",{id:"4-click-on-login-button"},"4. Click on Login Button"),(0,i.kt)("p",null,"After filling in email and password, we need to click the login button. The following instruction does that for us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.click().button().contains().text().withText('Log in').exec();\n});\n")),(0,i.kt)("h3",{id:"5-check-whether-login-worked--log-out"},"5. Check whether Login worked & Log out"),(0,i.kt)("p",null,'Finally, we need to check whether the login worked. We can do this by checking if the text "Logout ',(0,i.kt)("a",{parentName:"p",href:"mailto:test@askui.com"},"test@askui.com"),'" is displayed in the header as this is only displayed if we are logged in. We complete the test by logging out so that the test can easily be rerun without having to log out manually.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.expect().text().withText('Logout test@askui.com').exists().exec();\n    await aui.click().text().withText('Logout test@askui.com').exec();\n});\n")),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("p",null,"The following code block shows the finished test for the login of the web shop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    await aui.typeIn('https://askui-demo-shop-6e358.web.app/').url().exec();\n    await aui.pressKey('enter').exec();\n    await aui.click().text().withText('Login').exec();\n    await aui.typeIn('test@askui.com').textfield().contains().text().withText('Email Address').exec();\n    await aui.click().text().withText('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text().withText('Password').exec();\n    await aui.click().button().contains().text().withText('Log in').exec();\n    await aui.expect().text().withText('test@askui.com').exists().exec();\n    await aui.click().text().withText('Logout test@askui.com').exec();\n});\n")),(0,i.kt)("p",null,"To run this test use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx jest --config ./test/jest.config.ts")," command."))}p.isMDXComponent=!0},60169:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login_overlap-921106721ef24aae573bbe95725ebf68.png"}}]);