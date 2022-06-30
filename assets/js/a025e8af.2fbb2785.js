"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2156],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||r;return n?l.createElement(d,i(i({ref:t},s),{},{components:n})):l.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(5773),a=(n(7378),n(5318));const r={custom_edit_url:null},i="askui UI Control Client",o={unversionedId:"api/Configuration/askui-ui-control-client",id:"version-0.2.0/api/Configuration/askui-ui-control-client",title:"askui UI Control Client",description:"Table of Contents",source:"@site/versioned_docs/version-0.2.0/api/06-Configuration/askui-ui-control-client.md",sourceDirName:"api/06-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/api/Configuration/askui-ui-control-client",draft:!1,editUrl:null,tags:[],version:"0.2.0",frontMatter:{custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/api/Checks/notexists"},next:{title:"askui UI Controller",permalink:"/docs/api/Configuration/askui-ui-controller"}},u={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceClientUrl",id:"inferenceclienturl",level:3},{value:"annotationLevel",id:"annotationlevel",level:3},{value:"credentials",id:"credentials",level:3},{value:"Set Log Level",id:"set-log-level",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"askui-ui-control-client"},"askui UI Control Client"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#properties"},"Properties"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#uiControllerUrl"},"uiControllerUrl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inferenceClientUrl"},"inferenceClientUrl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#annotationLevel"},"annotationLevel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#credentials"},"credentials")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#set-log-level"},"Set Log Level"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#example"},"Example"),"  ")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"uicontrollerurl"},"uiControllerUrl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"uiControllerUrl"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:6769"))),(0,a.kt)("p",null,"The url of the askui UI Controller controlling the OS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inferenceclienturl"},"inferenceClientUrl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inferenceClientUrl"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://inference.askui.com"))),(0,a.kt)("p",null,"The address of the askui Inference server."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"annotationlevel"},"annotationLevel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"annotationLevel"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"AnnotationLevel")," - Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"AnnotationLevel.DISABLED"))),(0,a.kt)("p",null,"AnnotationLevel is implemented as an enum. You have three options: ",(0,a.kt)("inlineCode",{parentName:"p"},"DISABLED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALL"),":  Runs the ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/Tooling/annotate-image"},"annotate")," command after the execution of each test step."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),": Runs the annotate command if the test step fails "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DISABLED"),": Never runs the annotate command after test steps"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"credentials"},"credentials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"credentials"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Credentials")," Your user credentials - Optional.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tenant"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Your tenant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"email"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Your e-mail address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"token"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," An access token for authentication with the askui Inference Server")))),(0,a.kt)("p",null,"You can provide credentials for authentication with the askui Inference Server. This allows you to use dedidacted ressources instead of our public ressources which allows you to run tests more stable and faster. You may also provide the credentials using the environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"ASKUI_TENANT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ASKUI_EMAIL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ASKUI_TOKEN")," but they are only taken if you don't provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials")," here as a property."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"set-log-level"},"Set Log Level"),(0,a.kt)("p",null,"Set the log level of the askui UI Control Client using the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable.\nThe following log levels are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"fatal"'),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"error"'),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"warn"'),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"info"'),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"debug"'),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"trace"'),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"silent"')," and "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"verbose"'),".\nThe log level defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"info"),".")),(0,a.kt)("p",null,"On Linux and MacOS use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export LOG_LEVEL=verbose\n")),(0,a.kt)("p",null,"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$env:LOG_LEVEL="verbose"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    annotationLevel: AnnotationLevel.DISABLED,\n    credentials: {\n      tenant: 'user',\n      email: 'user@mail.com',\n      token: 'userToken',\n    }\n  });\n")))}c.isMDXComponent=!0}}]);