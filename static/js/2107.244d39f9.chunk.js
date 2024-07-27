"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[2107],{32829:(e,n,t)=>{t.d(n,{A:()=>s});var c=t(25371),o=t(44414);function s(e){let{children:n,type:t}=e;return(0,o.jsx)(c.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}s.defaultProps={type:"scale"}},93383:(e,n,t)=>{t.d(n,{A:()=>a});var c=t(9950),o=t(10226),s=t(46639),i=t(44414);const a=function(e){let{onClick:n,disabled:t,isLoading:a,children:r,...d}=e;const[l,u]=c.useState(a);return(0,i.jsxs)(o.A,{onClick:e=>{if(!n)return;const t=n(e);"function"===typeof(null===t||void 0===t?void 0:t.finally)&&(u(!0),t.finally((()=>u(!1))))},disabled:l||a||t,...d,children:[(l||a)&&(0,i.jsx)(s.A,{size:16,color:"primary",style:{marginRight:"10px"}}),r]})}},6834:(e,n,t)=>{t.d(n,{A:()=>x});var c=t(9950),o=t(60899),s=t(3788),i=t(93230),a=t(2660),r=t(10226),d=t(29714),l=t(61467),u=t(24516),h=t(21788),A=t(32829),f=t(93383),g=t(77382),p=t(44414);const v=()=>d.Yj(),m=d.Ik().shape({question:v(),content:v()});const x=function(e){let{document:n={},onCancel:t,onUpdate:d}=e;const v=c.useCallback((()=>t(!1)),[t]);return(0,p.jsx)(l.l1,{initialValues:n,validationSchema:m,onSubmit:async(e,n)=>{let{setStatus:t,setSubmitting:c}=n;try{const n=await(0,g.Mk)(e);t({success:!1}),c(!1),v(),(0,h.i)(!0,"Content added successfully!","success"),null===d||void 0===d||d(n)}catch(o){console.error(o),(0,h.i)(!0,"Error occurred while trying to save content.","error")}},children:e=>{let{values:n,errors:t,handleChange:c,touched:d,isSubmitting:l,handleSubmit:h}=e;return(0,p.jsxs)("form",{noValidate:!0,onSubmit:h,children:[(0,p.jsxs)(o.Ay,{item:!0,xs:12,mt:5,children:[(0,p.jsx)(s.A,{htmlFor:"question",children:"Question"}),(0,p.jsxs)(i.A,{spacing:2,mb:3,children:[(0,p.jsx)(a.A,{multiline:!0,fullWidth:!0,id:"question",name:"question",value:n.question,onChange:c,placeholder:"Please enter the question"}),d.question&&t.question&&(0,p.jsx)(u.A,{error:!0,id:"helper-text-message-placeholder",children:t.question})]}),(0,p.jsx)(s.A,{htmlFor:"content",children:"Answer"}),(0,p.jsxs)(i.A,{spacing:2,mb:3,children:[(0,p.jsx)(a.A,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",value:n.content,onChange:c,placeholder:"Please enter the answer"}),d.content&&t.content&&(0,p.jsx)(u.A,{error:!0,id:"helper-text-message-placeholder",children:t.content})]})]}),(0,p.jsx)(o.Ay,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,p.jsxs)(i.A,{spacing:2,direction:"row",children:[(0,p.jsx)(r.A,{variant:"outlined",onClick:v,children:"Cancel"}),(0,p.jsx)(A.A,{children:(0,p.jsx)(f.A,{isLoading:l,color:"primary",size:"large",type:"submit",variant:"contained",onClick:h,children:"Save"})})]})})]})}})}},68033:(e,n,t)=>{t.d(n,{A:()=>_});var c=t(9950),o=t(60899),s=t(82053),i=t(10226),a=t(63464),r=t(40033),d=t(79739),l=t(57988),u=t(7999),h=t(25333),A=t(63359),f=t(85967),g=t(74745),p=t(21788),v=t(32829),m=t(93383),x=t(70855),b=t(6834),j=t(44414);const _=function(e){let{docsList:n,onUpdate:t}=e;const[c]=(0,x.G)();return null===n||void 0===n?void 0:n.map(((e,n)=>(0,j.jsx)(y,{index:n,document:e,trainingMedia:c.trainingMedia,onUpdate:t},e._id)))};function y(e){let{document:n,index:t,trainingMedia:o,onUpdate:s}=e;const[i,a]=c.useState(!1);return i?(0,j.jsx)(b.A,{document:n,onCancel:a,onUpdate:s}):(0,j.jsx)(S,{index:t,document:n,trainingMedia:o,onEdit:a})}function S(e){let{document:n,index:t,trainingMedia:i,onEdit:a}=e;const r=c.useCallback((()=>a(!0)),[a]);return(0,j.jsxs)(o.Ay,{container:!0,mt:1,children:[(0,j.jsxs)(o.Ay,{item:!0,children:[(0,j.jsxs)(s.A,{variant:"h5",children:["Q",t+1," . ",n.question]}),(0,j.jsxs)(s.A,{variant:"body2",children:[(0,j.jsx)("b",{children:"Ans . "})," ",n.content]}),n.sourceDocument&&(null===i||void 0===i?void 0:i.length)>0&&(0,j.jsx)(E,{document:n,trainingMedia:i})]}),(0,j.jsxs)(o.Ay,{xs:12,item:!0,display:"flex",justifyContent:"flex-end",children:[(0,j.jsx)(h.A,{size:"small",sx:{color:A.A[500]},onClick:r,children:(0,j.jsx)(u.A,{})}),(0,j.jsx)(C,{documentId:n._id})]}),(0,j.jsx)(g.A,{xs:12,sx:{width:"100%",borderColor:"#b6abab"}})]})}function E(e){let{document:n,trainingMedia:t}=e;const o=n.sourceDocument,i=c.useMemo((()=>{const e=t.filter((e=>e.docId===o))[0];if(!e)return e;const n=decodeURIComponent(e.url.substring(e.url.lastIndexOf("/")+1));return{...e,fileName:n}}),[o,t]);return i?(0,j.jsxs)(s.A,{variant:"body2",children:[(0,j.jsx)("b",{children:"Source Document:"})," ",(0,j.jsxs)("a",{href:i.url,rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},children:[i.fileName,i.name?" ( ".concat(i.name," )"):""]})]}):null}function C(e){let{documentId:n}=e;const[t,o]=c.useState(!1),u=()=>o((e=>!e)),A=c.useCallback((async()=>{await deleteCannedResponse(n),o(!1),(0,p.i)(!0,"Deleted response successfully","success")}),[n]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.A,{sx:{color:f.A[500]},onClick:u,children:(0,j.jsx)(l.A,{})}),t&&(0,j.jsxs)(a.A,{open:t,onClose:u,children:[(0,j.jsx)(r.A,{id:"delete-confirm-dialog-title",children:(0,j.jsx)(s.A,{gutterBottom:!0,children:"Are sure you want to delete the response ?"})}),(0,j.jsxs)(d.A,{children:[(0,j.jsx)(i.A,{onClick:u,children:"Cancel"}),(0,j.jsx)(v.A,{children:(0,j.jsx)(m.A,{color:"primary",type:"submit",variant:"contained",onClick:A,children:"Delete"})})]})]})]})}},82921:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var c=t(9950),o=t(28429),s=t(32026),i=t(8478),a=t(15820),r=t(78023),d=t(33340),l=t(34735),u=t(68033),h=t(77382),A=t(44414);const f=function(){const{organizationId:e,botId:n,recipientId:t,chatId:u}=(0,o.g)(),{isAuthenticated:h,isSuperUser:f}=(0,d.nc)(),[p,v]=c.useState(),[m,x]=c.useState();return c.useEffect((()=>{i.Jt("/bot/".concat(e,"/").concat(n,"/chat/history/").concat(t,"/").concat(u,"?includeBot=1").concat(h?"&includeKB=1":"")).then((e=>{var n;const t=(0,s.Yq)(null===(n=e.messages[0])||void 0===n?void 0:n.createdAt);e.botDesign=(0,r.Y)(e.botDesign,{window:{width:"600px",height:"calc(100vh - 120px)"},header:{titleText:t+" (".concat(e.titleText,")")}}),v(e)}),(e=>{console.error("Unable to load chat conversations:",e)}))}),[e,n,t,u,h]),p?(0,A.jsxs)("div",{className:"conversation-history"+(h?" authenticated":""),children:[(0,A.jsx)("div",{children:(0,A.jsx)(a.A,{botDesign:p.botDesign,messages:p.messages,showTime:!0,disabledMessage:!0,optionsRenderer:e=>{const{role:n,type:t,passedDocIds:c,searchQuery:o}=e||{};if("assistant"===n&&"text"===t&&(null!==c&&void 0!==c&&c.length||o))return(0,A.jsx)("span",{className:"show-icon",onClick:()=>x(e),children:(0,A.jsx)(l.A,{})})}})}),m&&(0,A.jsx)(g,{message:m,onClose:()=>m(null),isSuperUser:f})]}):(0,A.jsx)("div",{children:"Loading... Please wait..."})};function g(e){let{message:n,isSuperUser:t}=e;const{content:o,searchQuery:s,passedDocIds:i}=n,[a,r]=(0,c.useState)([]);(0,c.useEffect)((()=>{(0,h.L3)(i).then(r)}),[i]);return(0,A.jsxs)("div",{className:"kb-docs-editor",children:[(0,A.jsxs)("div",{className:"ellipsis",children:[(0,A.jsx)("strong",{children:"Message: "}),(0,A.jsx)("span",{children:o})]}),t&&s&&(0,A.jsxs)("div",{className:"ellipsis",children:[(0,A.jsx)("strong",{children:"Search Query: "}),(0,A.jsx)("span",{children:s})]}),(0,A.jsx)("div",{children:(0,A.jsx)(u.A,{docsList:a,onUpdate:e=>r((n=>n.map((n=>n._id===e._id?e:n))))})})]})}},8478:(e,n,t)=>{t.d(n,{Jt:()=>s,TF:()=>r,bE:()=>i,yJ:()=>a});var c=t(32026),o=t(44364);async function s(e,n){return d("GET",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,n){return d("POST",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,n){return d("PUT",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,n){return d("DELETE",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,n,t){let{headers:c,noAuth:o,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;n=function(e,n){if(!e)return e;const t=n&&Object.keys(n);if(null!==t&&void 0!==t&&t.length){const c=t.reduce(((e,t)=>{let c=n[t];return null===c||void 0===c?e:(c="".concat(t,"=").concat(encodeURIComponent(c)),e?"".concat(e,"&").concat(c):c)}),"");c&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(c))}if(e.startsWith("https://"))return e;return"".concat(l).concat(e)}(n,i?void 0:t);const a=t instanceof FormData;if(a||(t=t&&"object"===typeof t&&i?JSON.stringify(t):void 0),c||(c={}),a||(c["Content-Type"]="application/json"),c.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(c.Authorization="Bearer ".concat(e))}try{const o=await fetch(n,{...s,headers:c,body:t,method:e}),i=await o.json();if(o.ok){const{data:e,...n}=i;return delete n.status,e&&!Object.keys(n).length?e:i}throw i.message?new Error(i.message):i}catch(d){var r;throw console.error("Error calling API: ",d),null!==(r=d.message)&&void 0!==r&&r.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,c.s8)(o.jn,"/")},77382:(e,n,t)=>{t.d(n,{L3:()=>u,Mk:()=>r,bZ:()=>d,gJ:()=>l});var c=t(8478),o=t(33340),s=t(32026),i=t(59051),a=t.n(i);async function r(e){const{organizationId:n,selectedBotId:t}=o.nc.getState(),s=await c.bE("/bot/".concat(n,"/").concat(t,"/knowledge-base"),e);return o.nc.setState((n=>{const c={...n.kbDocs||{}},o=c[t];if(!o)return{};if(c[t]=[...o],e._id){const e=c[t].findIndex((e=>e._id===s._id));e>=0?c[t][e]=s:c[t].push(s)}else c[t].push(s);return{kbDocs:c}})),s}async function d(e){const{organizationId:n,selectedBotId:t,kbDocs:s}=o.nc.getState();if(e&&Array.isArray(null===s||void 0===s?void 0:s[t]))return;const i=await c.Jt("/bot/".concat(n,"/").concat(t,"/knowledge-base/list"));o.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[t]:i}})))}async function l(){var e;const{organizationId:n,selectedBotId:t,botsMap:i}=o.nc.getState(),r="/bot/".concat(n,"/").concat(t,"/knowledge-base/download"),d=await c.Jt(r),l=(null===(e=i[t])||void 0===e?void 0:e.botName)||"KBDocs";(0,s.PE)(d,l+"_"+a()().format("YYYYMMDD")+".csv")}async function u(e){if(null===e||void 0===e||!e.length)return[];const{organizationId:n,selectedBotId:t}=o.nc.getState();return await c.Jt("/bot/".concat(n,"/").concat(t,"/knowledge-base/list?").concat(e.map((e=>"docIds=".concat(e))).join("&")))}},70855:(e,n,t)=>{t.d(n,{G:()=>o});var c=t(33340);function o(e){const n=(0,c.nc)((e=>e.selectedBotId)),t=(0,c.nc)((t=>t.botsMap[e||n]));return[e||n,t]}},32026:(e,n,t)=>{function c(e,n){return e.replace(new RegExp("".concat(o(n),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(e){const n=new Date(e),t=n.getDate(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],o=n.getFullYear();return"".concat(c," ").concat(t,", ").concat(o)}function i(e,n,t){if(!n&&!e)return t;e=e||{};const c=Array.isArray(e)?[...e]:{...e};if(n.includes(".")){const o=n.indexOf("."),s=n.substring(0,o),a=n.substring(o+1);c[s]=i(e[s],a,t)}else c[n]=t;return c}function a(e,n){return btoa("".concat(e,"_").concat(n,"_whatsapp_int"))}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const n="abcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let c=0;c<e;c++)t+=n.charAt(Math.floor(36*Math.random()));return t}function d(e,n,t){if(!n&&!e)return t;e=e||{};const c=Array.isArray(e)?[...e]:{...e};if(n.includes(".")){const o=n.indexOf("."),s=n.substring(0,o),i=n.substring(o+1);c[s]=d(e[s],i,t)}else c[n]=t;return c}function l(e,n){const t=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),c=document.createElement("a");c.href=URL.createObjectURL(t),c.download=n,document.body.appendChild(c),c.click(),document.body.removeChild(c)}t.d(n,{G6:()=>i,OX:()=>r,PE:()=>l,Yq:()=>s,do:()=>d,qW:()=>a,s8:()=>c})},44364:(e,n,t)=>{t.d(n,{DX:()=>a,Og:()=>s,jn:()=>c,pA:()=>i,pR:()=>o});const c="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},57988:(e,n,t)=>{var c=t(24994);n.A=void 0;var o=c(t(79526)),s=t(44414);n.A=(0,o.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},7999:(e,n,t)=>{var c=t(24994);n.A=void 0;var o=c(t(79526)),s=t(44414);n.A=(0,o.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},34735:(e,n,t)=>{var c=t(24994);n.A=void 0;var o=c(t(79526)),s=t(44414);n.A=(0,o.default)((0,s.jsx)("path",{d:"M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"}),"LibraryBooksRounded")},79739:(e,n,t)=>{t.d(n,{A:()=>p});var c=t(98587),o=t(58168),s=t(9950),i=t(72004),a=t(88465),r=t(59254),d=t(18463),l=t(1763),u=t(423);function h(e){return(0,u.Ay)("MuiDialogActions",e)}(0,l.A)("MuiDialogActions",["root","spacing"]);var A=t(44414);const f=["className","disableSpacing"],g=(0,r.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})((e=>{let{ownerState:n}=e;return(0,o.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),p=s.forwardRef((function(e,n){const t=(0,d.b)({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=t,l=(0,c.A)(t,f),u=(0,o.A)({},t,{disableSpacing:r}),p=(e=>{const{classes:n,disableSpacing:t}=e,c={root:["root",!t&&"spacing"]};return(0,a.A)(c,h,n)})(u);return(0,A.jsx)(g,(0,o.A)({className:(0,i.A)(p.root,s),ownerState:u,ref:n},l))}))},85967:(e,n,t)=>{t.d(n,{A:()=>c});const c={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}}}]);