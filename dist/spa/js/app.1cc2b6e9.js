(()=>{"use strict";var e={1953:(e,t,r)=>{var n=r(1957),o=r(1947),a=r(499),i=r(9835);function l(e,t,r,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(s,[["render",l]]),d=u;var p=r(3340),f=r(1809);const h=(0,p.h)((()=>{const e=(0,f.WB)();return e}));var m=r(8339),b=r(7562);const v=(0,p.BC)((function(){const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b.Z,history:e("/")});return t}));async function g(e,t){const r=e(d);r.use(o.Z,t);const n="function"===typeof h?await h({}):h;r.use(n);const i=(0,a.Xl)("function"===typeof v?await v({store:n}):v);return n.use((({store:e})=>{e.router=i})),{app:r,store:n,router:i}}var y=r(8084),w=r(3703),P=r(4462),j=r(6827),O=r(6950);const k={config:{},iconSet:y.Z,plugins:{LocalStorage:w.Z,Dialog:P.Z,Notify:j.Z,Loading:O.Z}},S="/";async function C({app:e,router:t,store:r},n){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:S})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(n.ri,k).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,3612)),Promise.resolve().then(r.bind(r,4136))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));C(e,r)}))}))},4136:(e,t,r)=>{r.r(t),r.d(t,{axiosInstance:()=>o});var n=r(7524);const o=n.Z.create({baseURL:"http://150.158.156.90/api",timeout:1e4,headers:{}})},3612:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(3340),o=r(7712);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,n.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",legacy:!1,messages:i});e.use(t)}))},7562:(e,t,r)=>{r.d(t,{Z:()=>o});const n=[{path:"/",redirect:"/admin",children:[{path:"/admin",name:"",redirect:"/admin/home",meta:{icon:"bi-inboxes-fill",label:"管理系统"},component:()=>Promise.all([r.e(736),r.e(190)]).then(r.bind(r,5190)),children:[{path:"home",name:"home",meta:{icon:"bi-speedometer2",label:"主页"},component:()=>Promise.all([r.e(736),r.e(867)]).then(r.bind(r,5867))},{path:"todo",name:"todo",meta:{icon:"bi-list-check",label:"待办事项"},component:()=>Promise.all([r.e(736),r.e(802)]).then(r.bind(r,802))},{path:"chart",name:"chart",meta:{icon:"bi-pie-chart",label:"图表"},component:()=>Promise.all([r.e(736),r.e(782)]).then(r.bind(r,7782))},{path:"userManage",name:"userManage",meta:{icon:"bi-people",label:"用户管理"},component:()=>Promise.all([r.e(736),r.e(50)]).then(r.bind(r,2050))},{path:"info",name:"info",meta:{icon:"bi-info-circle",label:"关于"},component:()=>Promise.all([r.e(736),r.e(519)]).then(r.bind(r,5519))}]},{path:"auth",name:"auth",redirect:"/auth/login",component:()=>Promise.all([r.e(736),r.e(324)]).then(r.bind(r,324)),children:[{path:"login",name:"login",component:()=>Promise.all([r.e(736),r.e(541)]).then(r.bind(r,541))},{path:"signup",name:"signup",component:()=>Promise.all([r.e(736),r.e(127)]).then(r.bind(r,6127))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(357)]).then(r.bind(r,3357))}],o=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{50:"86e73959",127:"f572c120",190:"7f91f764",324:"f54995aa",357:"2e3c1777",519:"ca8d94ed",541:"f2ffab01",782:"1e6e5119",802:"cf4025bc",867:"037bef72"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{190:"da88ef32",324:"5155697c",802:"68f1360b"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={190:1,324:1,802:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(1953)));n=r.O(n)})();