"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[7331],{32829:(n,e,t)=>{t.d(e,{A:()=>i});var c=t(25371),o=t(44414);function i(n){let{children:e,type:t}=n;return(0,o.jsx)(c.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:e})}i.defaultProps={type:"scale"}},93383:(n,e,t)=>{t.d(e,{A:()=>a});var c=t(9950),o=t(10226),i=t(46639),r=t(44414);const a=function(n){let{onClick:e,disabled:t,isLoading:a,children:s,...d}=n;const[l,u]=c.useState(a);return(0,r.jsxs)(o.A,{onClick:n=>{if(!e)return;const t=e(n);"function"===typeof(null===t||void 0===t?void 0:t.finally)&&(u(!0),t.finally((()=>u(!1))))},disabled:l||a||t,...d,children:[(l||a)&&(0,r.jsx)(i.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},57331:(n,e,t)=>{t.r(e),t.d(e,{default:()=>l});var c=t(9950),o=t(60899),i=t(8478),r=t(32829),a=t(93383),s=t(28429),d=t(44414);const l=function(){var n;const{invoiceId:e}=(0,s.g)(),[t,l]=c.useState(),[u,_]=c.useState();if(c.useEffect((()=>{!async function(n){let e=document.querySelector('script[id="razorpay-script"]');if(e)return!0;new Promise((t=>{e=document.createElement("script"),e.id="razorpay-script",e.src=n,e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},document.body.appendChild(e)}))}("https://checkout.razorpay.com/v1/checkout.js")}),[]),c.useEffect((()=>{i.Jt("/organization/invoice/view/".concat(e)).then(l)}),[e]),t)return(0,d.jsxs)(o.Ay,{item:!0,xs:12,children:[(0,d.jsx)("div",{children:(0,d.jsx)("iframe",{src:t.pdfUrl,title:"View Invoice",style:{width:"100%",height:t.isPaid?"calc(100vh - 12px)":"calc(100vh - 60px)"}})}),!t.isPaid&&(0,d.jsx)(o.Ay,{item:!0,xs:12,children:(0,d.jsx)("div",{style:{width:"260px",marginLeft:"auto",padding:"5px 25px"},children:(0,d.jsx)(r.A,{children:(0,d.jsxs)(a.A,{disableElevation:!0,isLoading:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",onClick:async()=>{_(!0);const n=await i.bE("/organization/invoice/".concat(t.invoiceId,"/make-payment"));new window.Razorpay(n).open(),_(!1)},children:["Pay ",t.currencyPrefix," ",null===(n=t.amount)||void 0===n?void 0:n.toFixed(2)]})})})})]})}},8478:(n,e,t)=>{t.d(e,{Jt:()=>i,TF:()=>s,bE:()=>r,yJ:()=>a});var c=t(32026),o=t(44364);async function i(n,e){return d("GET",n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(n,e){return d("POST",n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(n,e){return d("PUT",n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(n,e){return d("DELETE",n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(n,e,t){let{headers:c,noAuth:o,...i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===n||"PUT"===n||"DELETE"===n;e=function(n,e){if(!n)return n;const t=e&&Object.keys(e);if(null!==t&&void 0!==t&&t.length){const c=t.reduce(((n,t)=>{let c=e[t];return null===c||void 0===c?n:(c="".concat(t,"=").concat(encodeURIComponent(c)),n?"".concat(n,"&").concat(c):c)}),"");c&&(n="".concat(n).concat(n.includes("?")?"&":"?").concat(c))}if(n.startsWith("https://"))return n;return"".concat(l).concat(n)}(e,r?void 0:t);const a=t instanceof FormData;if(a||(t=t&&"object"===typeof t&&r?JSON.stringify(t):void 0),c||(c={}),a||(c["Content-Type"]="application/json"),c.Accept="application/json",!1!==o){const n=sessionStorage.getItem("token");n&&(c.Authorization="Bearer ".concat(n))}try{const o=await fetch(e,{...i,headers:c,body:t,method:n}),r=await o.json();if(o.ok){const{data:n,...e}=r;return delete e.status,n&&!Object.keys(e).length?n:r}throw r.message?new Error(r.message):r}catch(d){var s;throw console.error("Error calling API: ",d),null!==(s=d.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,c.s8)(o.jn,"/")},32026:(n,e,t)=>{function c(n,e){return n.replace(new RegExp("".concat(o(e),"+$")),"")}function o(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function i(n){const e=new Date(n),t=e.getDate(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],o=e.getFullYear();return"".concat(c," ").concat(t,", ").concat(o)}function r(n,e,t){if(!e&&!n)return t;n=n||{};const c=Array.isArray(n)?[...n]:{...n};if(e.includes(".")){const o=e.indexOf("."),i=e.substring(0,o),a=e.substring(o+1);c[i]=r(n[i],a,t)}else c[e]=t;return c}function a(n,e){return btoa("".concat(n,"_").concat(e,"_whatsapp_int"))}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const e="abcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let c=0;c<n;c++)t+=e.charAt(Math.floor(36*Math.random()));return t}function d(n,e,t){if(!e&&!n)return t;n=n||{};const c=Array.isArray(n)?[...n]:{...n};if(e.includes(".")){const o=e.indexOf("."),i=e.substring(0,o),r=e.substring(o+1);c[i]=d(n[i],r,t)}else c[e]=t;return c}t.d(e,{G6:()=>r,OX:()=>s,Yq:()=>i,do:()=>d,qW:()=>a,s8:()=>c})},44364:(n,e,t)=>{t.d(e,{DX:()=>a,Og:()=>i,jn:()=>c,pA:()=>r,pR:()=>o});const c="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"}}]);