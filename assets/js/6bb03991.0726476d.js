"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85739],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(25773),r=(n(27378),n(35318));const l={},o="askui UI Controller",a={unversionedId:"api/Configuration/askui-ui-controller",id:"version-0.2.7/api/Configuration/askui-ui-controller",title:"askui UI Controller",description:"Properties",source:"@site/versioned_docs/version-0.2.7/api/06-Configuration/askui-ui-controller.md",sourceDirName:"api/06-Configuration",slug:"/api/Configuration/askui-ui-controller",permalink:"/docs/0.2.7/api/Configuration/askui-ui-controller",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.2.7/api/06-Configuration/askui-ui-controller.md",tags:[],version:"0.2.7",frontMatter:{},sidebar:"apiSidebar",previous:{title:"askui UI Control Client",permalink:"/docs/0.2.7/api/Configuration/askui-ui-control-client"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"binaryVersion",id:"binaryversion",level:3},{value:"display",id:"display",level:3},{value:"host",id:"host",level:3},{value:"logFilePath",id:"logfilepath",level:3},{value:"logLevel",id:"loglevel",level:3},{value:"minimize",id:"minimize",level:3},{value:"overWriteBinary",id:"overwritebinary",level:3},{value:"port",id:"port",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"askui-ui-controller"},"askui UI Controller"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"binaryversion"},"binaryVersion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"binaryVersion"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"))),(0,r.kt)("p",null,"There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.\nYou can specify which binary version of server you want to download and use. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," which will\ndownload the newest version."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"display"},"display"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"display"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"))),(0,r.kt)("p",null,"You can choose on which display you want to excecute all\ntests. You can only perform all tests on one display.\nThe application which you want to test should be open and selected on your chosen display."),(0,r.kt)("p",null,"The default value of display is ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," which is your main monitor. If you want to use your\nsecond monitor you can change the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (",(0,r.kt)("inlineCode",{parentName:"p"},"2")," for your third monitor etc.)."),(0,r.kt)("p",null,"There is also a possibility to detect the value of your monitors.\nAfter the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option ",(0,r.kt)("inlineCode",{parentName:"p"},"Show"),".\nYou will see the same window as the following image."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Monitor Option",src:n(22132).Z,width:"512",height:"358"})),(0,r.kt)("p",null," Now you can identify the order of your monitors and you can also select the monitor in this configuration."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"host"},"host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"host"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1"))),(0,r.kt)("p",null,"The host the askui UI Controller is running on."),(0,r.kt)("h3",{id:"logfilepath"},"logFilePath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"logFilePath"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"<temp-dir>/askui/askui-server.log"))),(0,r.kt)("p",null,"It is possible to specify a path for your log files. Per default we create the askui-server.log file and askui folder in your temp folder."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loglevel"},"logLevel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"logLevel"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"LogLevels")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"debug"))),(0,r.kt)("p",null,"You can set the log level using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LogLevels"),". The following values are available: ",(0,r.kt)("inlineCode",{parentName:"p"},'"fatal"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"error"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"warn"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"info"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"debug"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"trace"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"silent"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"verbose"'),". All log levels are defined in an ",(0,r.kt)("inlineCode",{parentName:"p"},"LogLevels")," enum."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minimize"},"minimize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minimize"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("p",null,"The default value of this property is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This means that\naskui UI Controller will be started as minimized window."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overwritebinary"},"overWriteBinary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overWriteBinary"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"port"},"port"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"port"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"6769"))),(0,r.kt)("p",null,"The port the askui UI Controller is running on."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UiControlClient, UiController, LogLevels } from 'askui';\n\ndescribe('jest with askui', () => {\n  \n  // Server for controlling the operating system\n  let uiController: UiController;\n  \n  beforeAll(async () => {\n    uiController = new UiController({\n    \n    // choosing the second monitor \n    display: 1,\n\n    // download the latest version of the server\n    binaryVersion: 'latest',\n\n    // start askui UI Controller as minimized application\n    minimize: true,\n\n    // using error loglevel\n    logLevel: LogLevels.ERROR,\n\n    });\n  })\n})\n")))}d.isMDXComponent=!0},22132:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-monitor-7fb53b3c1759a29abc877c37097c9022.png"}}]);