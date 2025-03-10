"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[9485],{7999:(e,t,n)=>{var o=n(24994);t.A=void 0;var i=o(n(79526)),a=n(44414);t.A=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},8478:(e,t,n)=>{n.d(t,{Jt:()=>a,TF:()=>c,bE:()=>r,yJ:()=>s});var o=n(32026),i=n(44364);async function a(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:o,noAuth:i,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o=`${n}=${encodeURIComponent(o)}`,e?`${e}&${o}`:o)}),"");o&&(e=`${e}${e.includes("?")?"&":"?"}${o}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,r?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&r?JSON.stringify(n):void 0),o||(o={}),s||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==i){const e=sessionStorage.getItem("token");e&&(o.Authorization=`Bearer ${e}`)}try{const i=await fetch(t,{...a,headers:o,body:n,method:e}),r=await i.json();if(i.ok){const{data:e,...t}=r;return delete t.status,e&&!Object.keys(t).length?e:r}throw r.message?new Error(r.message):r}catch(l){var c;throw console.error("Error calling API: ",l),null!==(c=l.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,o.s8)(i.jn,"/")},11172:(e,t,n)=>{n.d(t,{A:()=>b});n(9950);var o=n(61467),i=n(29714),a=n(60899),r=n(81616),s=n(3788),c=n(2660),l=n(24516),d=n(32829),u=n(93383),h=n(21788),A=n(30334),g=n(33340),p=n(98415),f=n(44414);const b=function(e){const{setIsDeployBot:t,botId:n,organizationId:b}=e,m=(0,g.nc)((e=>e.botsList)).find((e=>e._id===n)),v=null===m||void 0===m?void 0:m.botDetailsForVerification,x=(0,g.nc)((e=>e.isSuperUser)),y={integrationUrl:(null===v||void 0===v?void 0:v.integrationUrl)||""},S=async()=>{const e=y.integrationUrl;try{if(e||""!==e.trim()){await(0,p.yo)(n,{verificationStatus:!0})?(0,h.i)(!0,"The bot verified successfully","success"):(0,h.i)(!0,"Not able to verify the bot. Try after sometime!","error")}else(0,h.i)(!0,"Integration Url is mandatory for bot verification","error")}catch(t){(0,h.i)(!0,"Not able to verify the bot. Try after sometime!","error")}};return(0,f.jsx)(o.l1,{initialValues:y,enableReinitialize:!0,validationSchema:i.Ik().shape({integrationUrl:i.Yj().url("Enter valid url!").max(255).required("Integration Url is required")}),onSubmit:async(e,o)=>{let{setErrors:i,setStatus:a,setSubmitting:r}=o;const s={botDetailsForVerification:{...e}};try{r(!0),await(0,A.pn)(s,b,n),a({success:!0}),t(!1),(0,h.i)(!0,"The bot deployed successfully!","success")}catch(c){a({success:!1}),i({submit:c.message}),r(!1),(0,h.i)(!0,"Not able to deploy the bot. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:o,handleSubmit:i,isSubmitting:h,touched:A,values:g}=e;return(0,f.jsx)("form",{onSubmit:i,children:(0,f.jsxs)(a.Ay,{container:!0,spacing:1,children:[(0,f.jsx)(a.Ay,{item:!0,xs:12,md:12,children:(0,f.jsxs)(r.A,{spacing:1,children:[(0,f.jsx)(s.A,{htmlFor:"integrationUrl",children:"*Integration Url"}),(0,f.jsx)(c.A,{id:"integrationUrl",type:"integrationUrl",value:g.integrationUrl,name:"integrationUrl",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(A.integrationUrl&&t.integrationUrl)}),A.integrationUrl&&t.integrationUrl&&(0,f.jsx)(l.A,{error:!0,id:"helper-text-integrationUrl",children:t.integrationUrl})]})}),(0,f.jsxs)(a.Ay,{container:!0,spacing:2,justifyContent:"flex-end",sx:{mt:1},children:[x&&(0,f.jsx)(a.Ay,{item:!0,children:(0,f.jsx)(d.A,{children:(0,f.jsx)(u.A,{isLoading:h,disabled:h,color:"primary",size:"large",type:"button",variant:"contained",id:"deployBotVerify",onClick:S,children:"Verify"})})}),(0,f.jsx)(a.Ay,{item:!0,children:(0,f.jsx)(d.A,{children:(0,f.jsx)(u.A,{isLoading:h,disabled:h,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})]})})}})}},26092:(e,t,n)=>{n.d(t,{A:()=>A});n(9950);var o=n(92728),i=n(63464),a=n(40033),r=n(28170),s=n(96319),c=n(59254),l=n(14857),d=n(25333),u=n(44414);const h=(0,c.Ay)(i.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)},zIndex:11010}}));function A(e){const t=(0,l.A)(),{breakpoints:n}=t,{openPopUpDialog:i,setPopUpDialog:c,setFieldsValues:A,onClose:g=()=>(c(!1),null===A||void 0===A?void 0:A({})),title:p,width:f="70%"}=e;return(0,u.jsxs)(h,{TransitionComponent:o.A,"aria-labelledby":"customized-dialog-title",open:i,PaperProps:{sx:{width:{width:f},[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(a.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:p}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:g,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(s.A,{})}),(0,u.jsx)(r.A,{dividers:!0,children:e.children})]})}},30334:(e,t,n)=>{n.d(t,{Ei:()=>d,KM:()=>s,MD:()=>c,pn:()=>u,qt:()=>l});var o=n(8478),i=n(33340),a=n(77382),r=n(98415);async function s(e,t,n){const i=await o.bE(`/bot/${n}/${t}/add-training-media`,e);(0,r.rv)(t,{trainingMedia:i.trainingMedia})}async function c(e){const{organizationId:t,selectedBotId:n}=i.nc.getState(),a=new FormData;a.append("file",e);try{const e=await o.bE(`/bot/${t}/${n}/add-training-media`,a);(0,r.rv)(n,{trainingMedia:e.trainingMedia})}catch(s){throw new Error("File upload failed. Please try again.",s)}}async function l(e,t,n){const i=await o.bE(`/bot/${n}/${t}/delete-training-media-document`,e);(0,r.rv)(t,{trainingMedia:i.trainingDocuments})}async function d(e,t){const n=await o.bE(`/bot/${t}/${e}/knowledge-base/train`);return i.nc.setState((t=>{const n={...t.kbDocs||{}};return delete n[e],{kbDocs:n}})),(0,a.bZ)().catch((e=>console.error("Error fetching Knowledge base content:",e))),n}async function u(e,t,n){const i=await o.bE(`/bot/${t}/${n}/add-bot-tax-details`,e),{_id:a,botDetailsForVerification:s}=i;return(0,r.rv)(a,{botDetailsForVerification:s}),s}},32026:(e,t,n)=>{n.d(t,{G6:()=>s,Ke:()=>h,OX:()=>l,PE:()=>u,TZ:()=>A,Yq:()=>r,do:()=>d,qW:()=>c,s8:()=>i,wE:()=>g});var o=n(44364);function i(e,t){return e.replace(new RegExp(`${a(t)}+$`),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function s(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),a=t.substring(0,i),r=t.substring(i+1);o[a]=s(e[a],r,n)}else o[t]=n;return o}function c(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(36*Math.random()));return n}function d(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),a=t.substring(0,i),r=t.substring(i+1);o[a]=d(e[a],r,n)}else o[t]=n;return o}function u(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function h(e,t){return!t||t.startsWith("http")?t:(t.startsWith("/")&&(t=t.substring(1)),`${o.J}/${e}/${t}`)}function A(e){let t=document.querySelector("link[rel~='icon']");t||(t=document.createElement("link"),t.rel="icon",document.getElementsByTagName("head")[0].appendChild(t)),null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.favicon&&(t.href=h(null===e||void 0===e?void 0:e.domain,null===e||void 0===e?void 0:e.favicon)):t.href="/favicon.png"}function g(e){null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.displayName&&(document.title=null===e||void 0===e?void 0:e.displayName):document.title="LivServ"}},32829:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(25371),i=n(44414);function a(e){let{children:t,type:n}=e;return(0,i.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},44364:(e,t,n)=>{n.d(t,{DX:()=>l,J:()=>c,Og:()=>a,jn:()=>o,mB:()=>s,pA:()=>r,pR:()=>i});const o="https://devbackend.livhousing.com:444",i="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_AMAZON_S3_BUCKET,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},49485:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var o=n(9950),i=n(60899),a=n(82053),r=n(81616),s=n(25277),c=n(78317),l=n(48205),d=n(63464),u=n(40033),h=n(28170),A=n(2660),g=n(79739),p=n(10226),f=n(52472),b=n(99532),m=n(7999),v=n(57988),x=n(70520),y=n(25333),S=n(51519),_=n(63359),j=n(85967),w=n(53065),E=n(64697),C=n(59254),P=n(37324),I=n(16497),T=n(21788),D=n(51637),k=n(33340),R=n(93383),$=n(98415),N=n(32026),M=n(11172),z=n(26092),B=n(44414);const O=()=>{const e=(0,k.nc)((e=>e.botsList)),t=(0,k.nc)((e=>e.organizationId)),[n,r]=(0,o.useState)(!1),[s,c]=(0,o.useState)(),l=e=>{r(!0),c(e)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(i.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,B.jsxs)(i.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:[(0,B.jsx)(a.A,{variant:"h5",children:"Bots List"}),(0,B.jsx)(i.Ay,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,B.jsx)(F,{})})]}),e.map(((e,t)=>(0,B.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,B.jsx)(L,{bot:e,verifyBot:l})},t))),(0,B.jsx)(i.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]}),(0,B.jsx)(z.A,{openPopUpDialog:n,setPopUpDialog:r,title:"Verify Bot Details",children:(0,B.jsx)(M.A,{setIsDeployBot:r,botId:s,organizationId:t})})]})},L=e=>{let{bot:t,verifyBot:n}=e;const{color:o,botName:l,createdAt:d,_id:u,verificationStatus:h}=t,A=(0,k.nc)((e=>e.isSuperUser)),g=async e=>await $.yo(u,{[e.target.name]:e.target.checked},!1);return(0,B.jsxs)(D.A,{contentSX:{p:2.25},children:[(0,B.jsxs)(r.A,{spacing:.5,children:[(0,B.jsxs)(i.Ay,{container:!0,direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(i.Ay,{item:!0,xs:7,children:(0,B.jsx)(a.A,{variant:"h6",color:"textSecondary",children:"Bot Name"})}),(0,B.jsx)(i.Ay,{item:!0,xs:5,align:"right",children:A&&(0,B.jsx)(s.A,{icon:(0,B.jsx)(x.A,{style:{color:h?"#65EE55":"#ff0000"}}),label:"Verify",size:"small",sx:{cursor:"pointer",boxShadow:3},onClick:()=>n(u)})})]}),(0,B.jsx)(i.Ay,{container:!0,alignItems:"center",children:(0,B.jsxs)(i.Ay,{item:!0,children:[(0,B.jsx)(a.A,{variant:"h4",color:"inherit",children:l}),h?(0,B.jsxs)(i.Ay,{container:!0,direction:"row",alignItems:"center",children:[(0,B.jsx)(S.A,{style:{color:"#65EE55"}}),"\xa0Verified"]}):(0,B.jsxs)(i.Ay,{container:!0,direction:"row",alignItems:"center",children:[(0,B.jsx)(S.A,{style:{color:"#ff0000"}}),"\xa0Not verified"]}),(0,B.jsx)(i.Ay,{item:!0,children:(0,B.jsx)(I.A,{label:"Get Presale Lead",control:(0,B.jsx)(P.A,{checked:t.getPreSaleLeads,onChange:g,name:"getPreSaleLeads"})})}),A&&(0,B.jsx)(i.Ay,{item:!0,children:(0,B.jsx)(I.A,{label:"Is Bot Active",control:(0,B.jsx)(P.A,{checked:t.isBotActivate,onChange:g,name:"isBotActivate"})})})]})}),(0,B.jsxs)(i.Ay,{alignItems:"right",children:[(0,B.jsx)(V,{bot:t}),(0,B.jsx)(K,{bot:t})]})]}),(0,B.jsx)(c.A,{sx:{pt:2.25},children:(0,B.jsxs)(a.A,{variant:"caption",color:"textSecondary",children:["Created on:"," ",(0,B.jsx)(a.A,{component:"span",variant:"caption",sx:{color:`${o||"primary"}.main`},children:(0,N.Yq)(d)})]})})]})},U=o.forwardRef((function(e,t){return(0,B.jsx)(l.A,{direction:"up",ref:t,...e})}));function F(){const e=(0,C.Ay)((e=>{let{className:t,...n}=e;return(0,B.jsx)(w.A,{...n,arrow:!0,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${E.A.arrow}`]:{color:t.palette.common.black},[`& .${E.A.tooltip}`]:{backgroundColor:t.palette.common.black}}})),[t,n]=(0,o.useState)(""),[i,r]=o.useState(!1),s=()=>r(!1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(e,{title:"Add new bot",placement:"right",children:(0,B.jsx)(f.A,{color:"primary",size:"medium",onClick:()=>r(!0),children:(0,B.jsx)(b.A,{})})}),(0,B.jsxs)(d.A,{open:i,TransitionComponent:U,keepMounted:!0,onClose:s,maxWidth:"md",children:[(0,B.jsx)(u.A,{style:{width:"400px"},children:(0,B.jsx)(a.A,{color:"inherit",children:"Create New Bot"})}),(0,B.jsx)(h.A,{children:(0,B.jsx)(A.A,{fullWidth:!0,type:"text",id:"botName",name:"botName",onChange:e=>n(e.target.value),placeholder:"Bot Name",autoComplete:"off"})}),(0,B.jsxs)(g.A,{children:[(0,B.jsx)(p.A,{onClick:s,children:"Cancel"}),(0,B.jsx)(R.A,{variant:"contained",disabled:(null===t||void 0===t?void 0:t.trim().length)<3,onClick:async()=>{try{await(0,$.gI)(t),s(),(0,T.i)(!0,"New bot added successfully","success")}catch(e){(0,T.i)(!0,"Bot already exist","error")}},children:"Create"})]})]})]})}function V(e){let{bot:t}=e;const{_id:n,botName:i}=t,[r,s]=(0,o.useState)(""),[c,l]=o.useState(!1),[f,b]=(0,o.useState)(),v=()=>{s(""),l(!1)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y.A,{"aria-label":"edit",sx:{color:_.A[500]},onClick:()=>l(!0),children:(0,B.jsx)(m.A,{})}),(0,B.jsxs)(d.A,{open:c,TransitionComponent:U,keepMounted:!0,onClose:v,maxWidth:"md",children:[(0,B.jsx)(u.A,{style:{width:"400px"},children:(0,B.jsx)(a.A,{color:"inherit",children:"Edit Bot Name"})}),(0,B.jsx)(h.A,{children:(0,B.jsx)(A.A,{fullWidth:!0,type:"text",id:"editBotName",name:"editBotName",defaultValue:i,onChange:e=>{""===e.target.value?b("Invalid Bot Name"):(b(""),s(e.target.value))},placeholder:"Bot Name",autoComplete:"off"})}),(0,B.jsxs)(g.A,{children:[f&&(0,B.jsxs)("div",{style:{color:"red"},children:[" ","*",f," "]}),(0,B.jsx)(p.A,{onClick:v,children:"Cancel"}),(0,B.jsx)(R.A,{variant:"contained",disabled:(null===r||void 0===r?void 0:r.trim().length)<3,onClick:async()=>{await(0,$.so)(n,r),v(),(0,T.i)(!0,"Bot name updated successfully","success")},children:"Update"})]})]})]})}function K(e){let{bot:t}=e;const{_id:n}=t,[i,r]=o.useState(!1),s=()=>{r(!1)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y.A,{"aria-label":"delete",sx:{color:j.A[500]},onClick:()=>{r(!0)},children:(0,B.jsx)(v.A,{})}),(0,B.jsxs)(d.A,{open:i,onClose:s,children:[(0,B.jsx)(u.A,{id:"alert-dialog-title",children:(0,B.jsx)(a.A,{gutterBottom:!0,children:"Are sure you want to delete the bot ?"})}),(0,B.jsxs)(g.A,{children:[(0,B.jsx)(p.A,{onClick:s,children:"Cancel"}),(0,B.jsx)(R.A,{variant:"contained",onClick:async()=>{await $.TF(n),r(!1)},children:"Delete"})]})]})]})}},51519:(e,t,n)=>{var o=n(24994);t.A=void 0;var i=o(n(79526)),a=n(44414);t.A=(0,i.default)((0,a.jsx)("path",{d:"m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"}),"Verified")},51637:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(9950),i=n(14857),a=n(48089),r=n(45180),s=n(82053),c=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:u,content:h=!0,contentSX:A={},darkTitle:g,elevation:p,secondary:f,shadow:b,sx:m={},title:v,...x}=e;const y=(0,i.A)();return o="dark"===y.palette.mode?o||!0:o,(0,l.jsxs)(a.A,{elevation:p||0,ref:t,...x,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===y.palette.mode?y.palette.divider:y.palette.grey.A800,boxShadow:!o||n&&"dark"!==y.palette.mode?"inherit":b||y.customShadows.z1,":hover":{boxShadow:o?b||y.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:y.typography.fontFamily,fontSize:"0.75rem"},...m},children:[!g&&v&&(0,l.jsx)(r.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:v,action:f}),g&&v&&(0,l.jsx)(r.A,{sx:d,title:(0,l.jsx)(s.A,{variant:"h3",children:v}),action:f}),h&&(0,l.jsx)(c.A,{sx:A,children:u}),!h&&u]})}))},52472:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(98587),i=n(58168),a=n(9950),r=n(72004),s=n(88465),c=n(24184),l=n(61676),d=n(18463),u=n(1763),h=n(423);function A(e){return(0,h.Ay)("MuiFab",e)}const g=(0,u.A)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var p=n(59254),f=n(19608),b=n(44414);const m=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=(0,p.Ay)(c.A,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,f.A)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,l.A)(n.size)}`],"inherit"===n.color&&t.colorInherit,t[(0,l.A)(n.size)],t[n.color]]}})((e=>{let{theme:t,ownerState:n}=e;var o,a;return(0,i.A)({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:null==(o=(a=t.palette).getContrastText)?void 0:o.call(a,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${g.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]}},"small"===n.size&&{width:40,height:40},"medium"===n.size&&{width:48,height:48},"extended"===n.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===n.variant&&"small"===n.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===n.variant&&"medium"===n.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===n.color&&{color:"inherit"})}),(e=>{let{theme:t,ownerState:n}=e;return(0,i.A)({},"inherit"!==n.color&&"default"!==n.color&&null!=(t.vars||t).palette[n.color]&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}})}),(e=>{let{theme:t}=e;return{[`&.${g.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}})),x=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiFab"}),{children:a,className:c,color:u="default",component:h="button",disabled:g=!1,disableFocusRipple:p=!1,focusVisibleClassName:f,size:x="large",variant:y="circular"}=n,S=(0,o.A)(n,m),_=(0,i.A)({},n,{color:u,component:h,disabled:g,disableFocusRipple:p,size:x,variant:y}),j=(e=>{const{color:t,variant:n,classes:o,size:a}=e,r={root:["root",n,`size${(0,l.A)(a)}`,"inherit"===t?"colorInherit":t]},c=(0,s.A)(r,A,o);return(0,i.A)({},o,c)})(_);return(0,b.jsx)(v,(0,i.A)({className:(0,r.A)(j.root,c),component:h,disabled:g,focusRipple:!p,focusVisibleClassName:(0,r.A)(j.focusVisible,f),ownerState:_,ref:t},S,{classes:j,children:a}))}))},57988:(e,t,n)=>{var o=n(24994);t.A=void 0;var i=o(n(79526)),a=n(44414);t.A=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},70520:(e,t,n)=>{var o=n(24994);t.A=void 0;var i=o(n(79526)),a=n(44414);t.A=(0,i.default)((0,a.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser")},77382:(e,t,n)=>{n.d(t,{CA:()=>h,L3:()=>u,Mk:()=>c,bZ:()=>l,gJ:()=>d});var o=n(8478),i=n(33340),a=n(32026),r=n(59051),s=n.n(r);async function c(e){const{organizationId:t,selectedBotId:n}=i.nc.getState(),a=await o.bE(`/bot/${t}/${n}/knowledge-base`,e);return i.nc.setState((t=>{const o={...t.kbDocs||{}},i=o[n];if(!i)return{};if(o[n]=[...i],e._id){const e=o[n].findIndex((e=>e._id===a._id));e>=0?o[n][e]=a:o[n].push(a)}else o[n].push(a);return{kbDocs:o}})),a}async function l(e){const{organizationId:t,selectedBotId:n,kbDocs:a}=i.nc.getState();if(e&&Array.isArray(null===a||void 0===a?void 0:a[n]))return;const r=await o.Jt(`/bot/${t}/${n}/knowledge-base/list`);i.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:r}})))}async function d(){var e;const{organizationId:t,selectedBotId:n,botsMap:r}=i.nc.getState(),c=`/bot/${t}/${n}/knowledge-base/download`,l=await o.Jt(c),d=(null===(e=r[n])||void 0===e?void 0:e.botName)||"KBDocs";(0,a.PE)(l,d+"_"+s()().format("YYYYMMDD")+".csv")}async function u(e){if(null===e||void 0===e||!e.length)return[];const{organizationId:t,selectedBotId:n}=i.nc.getState();return await o.Jt(`/bot/${t}/${n}/knowledge-base/list?${e.map((e=>`docIds=${e}`)).join("&")}`)}async function h(e){const{organizationId:t,selectedBotId:n}=i.nc.getState();await o.TF(`/bot/${t}/${n}/knowledge-base/${e}`),i.nc.setState((t=>{var o;const i={...t.kbDocs||{}};return i[n]=null===(o=i[n])||void 0===o?void 0:o.filter((t=>t._id!==e)),{kbDocs:i}}))}},79739:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(98587),i=n(58168),a=n(9950),r=n(72004),s=n(88465),c=n(59254),l=n(18463),d=n(1763),u=n(423);function h(e){return(0,u.Ay)("MuiDialogActions",e)}(0,d.A)("MuiDialogActions",["root","spacing"]);var A=n(44414);const g=["className","disableSpacing"],p=(0,c.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,i.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),f=a.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:c=!1}=n,d=(0,o.A)(n,g),u=(0,i.A)({},n,{disableSpacing:c}),f=(e=>{const{classes:t,disableSpacing:n}=e,o={root:["root",!n&&"spacing"]};return(0,s.A)(o,h,t)})(u);return(0,A.jsx)(p,(0,i.A)({className:(0,r.A)(f.root,a),ownerState:u,ref:t},d))}))},85967:(e,t,n)=>{n.d(t,{A:()=>o});const o={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}},92728:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),i=n(48205),a=n(44414);const r=o.forwardRef((function(e,t){return(0,a.jsx)(i.A,{direction:"up",ref:t,...e})}))},93383:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(9950),i=n(10226),a=n(46639),r=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:c,...l}=e;const[d,u]=o.useState(s);return(0,r.jsxs)(i.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||s||n,...l,children:[(d||s)&&(0,r.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},98415:(e,t,n)=>{n.d(t,{Ci:()=>u,I4:()=>d,TF:()=>c,gI:()=>r,gR:()=>A,jo:()=>l,rv:()=>g,so:()=>h,yo:()=>s});var o=n(8478),i=n(33340),a=n(32026);async function r(e){const{organization:{websiteUrl:t,_id:n}}=i.nc.getState(),a={organizationId:n,websiteUrl:t,botName:e,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};p(await o.bE(`/bot/${n}`,a),!0)}async function s(e,t,n){const{organizationId:a}=i.nc.getState();if(!a||!e)throw new Error("Bot details not found");const r=await o.yJ(`/bot/${a}/${e}`,t);return p(r,n),r}async function c(e){const{organizationId:t,selectedBotId:n}=i.nc.getState();if(!t||!e)throw new Error("Bot details not found");const{deleted:a}=await o.TF(`/bot/${t}/${e}`);if(a){let{botsMap:e,botsList:t}=i.nc.getState();e={...e},t=[...t],delete e[a];const o=t.findIndex((e=>e._id===a));o>=0&&t.splice(o,1);const s={botsMap:e,botsList:t};var r;if(n===a)s.selectedBotId=(null===(r=t[0])||void 0===r?void 0:r._id)||null;i.nc.setState(s)}return!!a}function l(e,t){let{botDesign:n}=i.nc.getState();return n={...n,...t},s(e,{botDesign:n})}async function d(e,t){const{organizationId:n,selectedBotId:a}=i.nc.getState(),r=new FormData;r.append("file",t);const s=await o.bE(`/bot/${n}/${a}/update-logo/${e}`,r);return g(a,s),s[`botDesign.${e}`]}async function u(e){const{organizationId:t,selectedBotId:n}=i.nc.getState(),a=await o.TF(`/bot/${t}/${n}/update-logo/${e}`);return g(n,a),a[`botDesign.${e}`]}function h(e,t){return s(e,{botName:t})}function A(e,t){let{botSettings:n={}}=i.nc.getState();return n={...n,...t},s(e,{botSettings:n})}function g(e,t){const{botsMap:n}=i.nc.getState(),o=n[e];if(!o)return;p(Object.keys(t).reduce(((e,n)=>(0,a.G6)(e,n,t[n])),o))}function p(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e._id;let{botsMap:o,botsList:a}=i.nc.getState();o={...o,[n]:e},a=[...a];const r=a.findIndex((e=>e._id===n));r>=0?a[r]=e:a.push(e);const s={botsMap:o,botsList:a};t&&(s.selectedBotId=n),i.nc.setState(s)}},99532:(e,t,n)=>{var o=n(24994);t.A=void 0;var i=o(n(79526)),a=n(44414);t.A=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")}}]);