"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10364],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const o={},l="Proxy",i={unversionedId:"general/Troubleshooting/proxy",id:"version-0.7.1/general/Troubleshooting/proxy",title:"Proxy",description:"In enterprises, proxies are a standard to secure and control network traffic. We support the use of proxies in two ways.",source:"@site/versioned_docs/version-0.7.1/general/07-Troubleshooting/proxy.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/proxy",permalink:"/docs/general/Troubleshooting/proxy",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.1/general/07-Troubleshooting/proxy.md",tags:[],version:"0.7.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"macOS",permalink:"/docs/general/Troubleshooting/mac-os"},next:{title:"Windows",permalink:"/docs/general/Troubleshooting/windows"}},p={},s=[{value:"Using Default Configuration with hpagent",id:"using-default-configuration-with-hpagent",level:2},{value:"Manually Configuring the HTTP and HTTPS Agent",id:"manually-configuring-the-http-and-https-agent",level:2},{value:"Deep Package Inspection",id:"deep-package-inspection",level:2},{value:"Deactivate TLS certificate validation (NOT RECOMMENDED)",id:"deactivate-tls-certificate-validation-not-recommended",level:3},{value:"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)",id:"add-self-signed-certificate-as-extra-ca-certs-recommended",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proxy"},"Proxy"),(0,a.kt)("p",null,"In enterprises, ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server"},"proxies")," are a standard to secure and control network traffic. We support the use of proxies in two ways."),(0,a.kt)("h2",{id:"using-default-configuration-with-hpagent"},"Using Default Configuration with hpagent"),(0,a.kt)("p",null," Per default, our library uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent"},"hpagent")," to support the use of HTTP and HTTPS proxies. ",(0,a.kt)("inlineCode",{parentName:"p"},"hpagent")," is an open source package which provides HTTP(S) proxies that keeps connections alive. To use it, you need to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"install ",(0,a.kt)("inlineCode",{parentName:"li"},"hpagent"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev hpagent \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"configure which proxies to use by setting the proxies' URLs using the environment variables ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export HTTP_PROXY=http://<your-proxy-url>\nexport HTTPS_PROXY=https://<your-proxy-url>\n")),(0,a.kt)("h2",{id:"manually-configuring-the-http-and-https-agent"},"Manually Configuring the HTTP and HTTPS Agent"),(0,a.kt)("p",null,"If you need even more control, you can also configure an HTTP agent and HTTPS agent supporting your proxy manually for either one or both, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the UI Controller (configuring the ",(0,a.kt)("inlineCode",{parentName:"li"},"UiController"),") running on the OS you would like to control and"),(0,a.kt)("li",{parentName:"ul"},"the Inference API (configuring the ",(0,a.kt)("inlineCode",{parentName:"li"},"UiControlClient"),") running on our servers and providing the vision to run your tests.")),(0,a.kt)("p",null,"In the following example we are going to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent"},"hpagent")," again but you can use any HTTP and HTTPS agents that support proxies, e.g., the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpagent"},"http.Agent")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/https.html#class-httpsagent"},"https.Agent")," provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," module of Node.js, respectively."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"hpagent"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev hpagent \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Import ",(0,a.kt)("inlineCode",{parentName:"li"},"hpagent")," (or the agent(s) you would like to use) and configure the ",(0,a.kt)("strong",{parentName:"li"},"UiController")," and/or the ",(0,a.kt)("strong",{parentName:"li"},"UiControlClient")," inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.ts")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { HttpProxyAgent, HttpsProxyAgent } from \'hpagent\'; // <-- Add imports\n// other code\n\nbeforeAll(async () => {\n  // Add this block\n  const httpProxyUrl = "http://<your-proxy-url>" // <-- Adapt http proxy url\n  const httpsProxyUrl = "https://<your-proxy-url>" // <-- Adapt https proxy url\n\n  const proxyAgents = {\n    http: new HttpProxyAgent({\n      proxy: httpProxyUrl,\n    }),\n    https: new HttpsProxyAgent({\n      proxy: httpsProxyUrl,\n    }),\n  }\n\n  // other code\n\n  uiController = new UiController({\n    proxyAgents // <-- Set proxy agents\n  });\n  \n  // other code\n\n  aui = await UiControlClient.build({\n    proxyAgents // <-- Set proxy agents\n  });\n\n  // other code\n})\n')),(0,a.kt)("p",null,"Here are some example for the ",(0,a.kt)("inlineCode",{parentName:"p"},"httpProxyUrl")," (for more details see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent#usage"},"docs from hpagent"),")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Proxy Type"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,a.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,a.kt)("a",{parentName:"td",href:"http://proxy.company.com:8293"},"http://proxy.company.com:8293")),(0,a.kt)("td",{parentName:"tr",align:null},"A HTTP proxy without authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP + Basic Auth"),(0,a.kt)("td",{parentName:"tr",align:null},"e.g. http://username:",(0,a.kt)("a",{parentName:"td",href:"mailto:password@proxy.company.com"},"password@proxy.company.com"),":8293"),(0,a.kt)("td",{parentName:"tr",align:null},"A HTTP proxy with authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SOCKET"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Socket proxies are not supported by ",(0,a.kt)("inlineCode",{parentName:"td"},"hpagent"))))),(0,a.kt)("p",null,"Here are some example for the ",(0,a.kt)("inlineCode",{parentName:"p"},"httpsProxyUrl")," (for more details see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent#usage"},"docs from hpagent"),")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Proxy Type"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,a.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,a.kt)("a",{parentName:"td",href:"https://proxy.company.com:8293"},"https://proxy.company.com:8293")),(0,a.kt)("td",{parentName:"tr",align:null},"A HTTPS proxy without authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTPS + Basic Auth"),(0,a.kt)("td",{parentName:"tr",align:null},"e.g. https://username:",(0,a.kt)("a",{parentName:"td",href:"mailto:password@proxy.company.com"},"password@proxy.company.com"),":8293"),(0,a.kt)("td",{parentName:"tr",align:null},"A HTTP proxy with authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SOCKET"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Socket proxies are not supported by ",(0,a.kt)("inlineCode",{parentName:"td"},"hpagent"))))),(0,a.kt)("h2",{id:"deep-package-inspection"},"Deep Package Inspection"),(0,a.kt)("p",null,"Company proxies, like ",(0,a.kt)("a",{parentName:"p",href:"https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy"},"Zscalar"),", use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deep_packet_inspection"},"deep package inspection")," to analyze the network traffic. Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection."),(0,a.kt)("p",null,"This can result in the following error messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," RequestError: self signed certificate\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," RequestError: unable to verify the first certificate\n")),(0,a.kt)("p",null,"There are multiple options to deal with this:"),(0,a.kt)("h3",{id:"deactivate-tls-certificate-validation-not-recommended"},"Deactivate TLS certificate validation (NOT RECOMMENDED)"),(0,a.kt)("p",null,"This option deactivates the TLS validation (see ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue"},"here"),") and ",(0,a.kt)("strong",{parentName:"p"},"is not recommended"),". Only for testing!"),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"set NODE_TLS_REJECT_UNAUTHORIZED 0\n")),(0,a.kt)("p",null,"macOS/Unix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_TLS_REJECT_UNAUTHORIZED=0\n")),(0,a.kt)("h3",{id:"add-self-signed-certificate-as-extra-ca-certs-recommended"},"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)"),(0,a.kt)("p",null,"The other option is to add the self-signed certificate as ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile"},"extra certificates for Node.js"),". "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the certificate and convert it to a ",(0,a.kt)("inlineCode",{parentName:"li"},".pem")," file, e.g., by ",(0,a.kt)("a",{parentName:"li",href:"https://superuser.com/a/1292098"},"exporting it with Chrome"),"."),(0,a.kt)("li",{parentName:"ol"},"Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"NODE_EXTRA_CA_CERTS")," with the following commands:")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"set NODE_EXTRA_CA_CERTS '<path>\\<cert>.pem'\n")),(0,a.kt)("p",null,"macOS/Unix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additional information:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store"},"Get Zscalar custom certificate"))))}u.isMDXComponent=!0}}]);