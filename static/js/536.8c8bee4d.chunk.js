"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[536],{93748:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var o=n(99584),c=n(23424),r=n(52216),a=n(35240),i=n(4260),s=n(80156),_=n(97884);const d=function(){const{organizationId:t,botId:e,recipientId:n,chatId:d}=(0,c.W4)(),[E,u]=o.useState();return o.useEffect((()=>{a._M("/bot/".concat(t,"/").concat(e,"/chat/history/").concat(n,"/").concat(d,"?includeBot=1")).then((t=>{var e;const n=(0,r._m)(null===(e=t.messages[0])||void 0===e?void 0:e.createdAt);t.botDesign=(0,s.A)(t.botDesign,{window:{width:"600px",height:"calc(100vh - 120px)"},header:{titleText:n+" (".concat(t.titleText,")")}}),u(t)}),(t=>{console.error("Unable to load chat conversations:",t)}))}),[t,e,n,d]),E?(0,_.jsx)("div",{className:"conversation-history",children:(0,_.jsx)(i.c,{botDesign:E.botDesign,messages:E.messages,showTime:!0})}):(0,_.jsx)("div",{children:"Loading... Please wait..."})}},35240:(t,e,n)=>{n.d(e,{Aj:()=>i,_M:()=>r,aE:()=>s,s$:()=>a,wz:()=>E});var o=n(52216),c=n(79028);async function r(t,e){return _("GET",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(t,e){return _("POST",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(t,e){return _("PUT",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(t,e){return _("DELETE",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function _(t,e,n){let{headers:o,noAuth:c,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===t||"PUT"===t||"DELETE"===t;if(e=E(e,a?void 0:n),n=n&&"object"===typeof n&&a?JSON.stringify(n):void 0,o||(o={}),o["Content-Type"]="application/json",o.Accept="application/json",!1!==c){const t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t))}try{const c=await fetch(e,{...r,headers:o,body:n,method:t}),a=await c.json();if(c.ok){const{data:t,...e}=a;return delete e.status,t&&!Object.keys(e).length?t:a}throw a.message?new Error(a.message):a}catch(s){var i;throw console.error("Error calling API: ",s),null!==(i=s.message)&&void 0!==i&&i.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error("Unknown server error")}}const d=(0,o.Sm)(c.UX,"/");function E(t,e){if(!t)return t;const n=e&&Object.keys(e);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((t,n)=>{let o=e[n];return null===o||void 0===o?t:(o="".concat(n,"=").concat(encodeURIComponent(o)),t?"".concat(t,"&").concat(o):o)}),"");o&&(t="".concat(t).concat(t.includes("?")?"&":"?").concat(o))}return t.startsWith("https://")?t:"".concat(d).concat(t)}},52216:(t,e,n)=>{function o(t,e){return t.replace(new RegExp("".concat(c(e),"+$")),"")}function c(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(t){const e=new Date(t),n=e.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],c=e.getFullYear();return"".concat(o," ").concat(n,", ").concat(c)}n.d(e,{Sm:()=>o,_m:()=>r})},79028:(t,e,n)=>{n.d(e,{AZ:()=>c,So:()=>i,UX:()=>o,cX:()=>r,vc:()=>a});const o="https://devbackend.livhousing.com",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,i="https://60f1-203-192-224-75.ngrok-free.app"}}]);