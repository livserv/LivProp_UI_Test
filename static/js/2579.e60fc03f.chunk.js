"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[2579],{32829:(t,n,e)=>{e.d(n,{A:()=>a});var o=e(25371),i=e(44414);function a(t){let{children:n,type:e}=t;return(0,i.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}a.defaultProps={type:"scale"}},92728:(t,n,e)=>{e.d(n,{A:()=>c});var o=e(9950),i=e(48205),a=e(44414);const c=o.forwardRef((function(t,n){return(0,a.jsx)(i.A,{direction:"up",ref:n,...t})}))},51637:(t,n,e)=>{e.d(n,{A:()=>u});var o=e(9950),i=e(14857),a=e(48089),c=e(45180),r=e(82053),s=e(50704),d=e(44414);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((t,n)=>{let{border:e=!0,boxShadow:o,children:u,content:g=!0,contentSX:f={},darkTitle:b,elevation:h,secondary:p,shadow:A,sx:y={},title:v,..._}=t;const m=(0,i.A)();return o="dark"===m.palette.mode?o||!0:o,(0,d.jsxs)(a.A,{elevation:h||0,ref:n,..._,sx:{border:e?"1px solid":"none",borderRadius:2,borderColor:"dark"===m.palette.mode?m.palette.divider:m.palette.grey.A800,boxShadow:!o||e&&"dark"!==m.palette.mode?"inherit":A||m.customShadows.z1,":hover":{boxShadow:o?A||m.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:m.typography.fontFamily,fontSize:"0.75rem"},...y},children:[!b&&v&&(0,d.jsx)(c.A,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:v,action:p}),b&&v&&(0,d.jsx)(c.A,{sx:l,title:(0,d.jsx)(r.A,{variant:"h3",children:v}),action:p}),g&&(0,d.jsx)(s.A,{sx:f,children:u}),!g&&u]})}))},26092:(t,n,e)=>{e.d(n,{A:()=>f});e(9950);var o=e(92728),i=e(63464),a=e(40033),c=e(28170),r=e(96319),s=e(59254),d=e(14857),l=e(25333),u=e(44414);const g=(0,s.Ay)(i.A)((t=>{let{theme:n}=t;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function f(t){const n=(0,d.A)(),{breakpoints:e}=n,{openPopUpDialog:i,setPopUpDialog:s,onClose:f=()=>s(!1),title:b,width:h="70%"}=t;return(0,u.jsxs)(g,{TransitionComponent:o.A,"aria-labelledby":"customized-dialog-title",open:i,PaperProps:{sx:{width:{width:h},[e.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(a.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:b}),(0,u.jsx)(l.A,{"aria-label":"close",onClick:f,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(r.A,{})}),(0,u.jsx)(c.A,{dividers:!0,children:t.children})]})}},93383:(t,n,e)=>{e.d(n,{A:()=>r});var o=e(9950),i=e(10226),a=e(46639),c=e(44414);const r=function(t){let{onClick:n,disabled:e,isLoading:r,children:s,...d}=t;const[l,u]=o.useState(r);return(0,c.jsxs)(i.A,{onClick:t=>{if(!n)return;const e=n(t);"function"===typeof(null===e||void 0===e?void 0:e.finally)&&(u(!0),e.finally((()=>u(!1))))},disabled:l||r||e,...d,children:[(l||r)&&(0,c.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},11172:(t,n,e)=>{e.d(n,{A:()=>A});e(9950);var o=e(61467),i=e(29714),a=e(60899),c=e(93230),r=e(3788),s=e(2660),d=e(24516),l=e(32829),u=e(93383),g=e(58178),f=e(30334),b=e(33340),h=e(98415),p=e(44414);const A=function(t){const{setIsDeployBot:n,botId:e,organizationId:A}=t,y=(0,b.nc)((t=>t.botsList)).find((t=>t._id===e)),v=null===y||void 0===y?void 0:y.botDetailsForVerification;let _=!1;const m=(0,b.nc)((t=>t.isSuperUser));m&&(_=!0);const S={integrationUrl:(null===v||void 0===v?void 0:v.integrationUrl)||""},E=async()=>{const t=S.integrationUrl;try{if(t||""!==t.trim()){await(0,h.yo)(e,{verificationStatus:!0})?(0,g.i)(!0,"The bot verified successfully","success"):(0,g.i)(!0,"Not able to verify the bot. Try after sometime!","error")}else(0,g.i)(!0,"Integration Url is mandatory for bot verification","error")}catch(n){(0,g.i)(!0,"Not able to verify the bot. Try after sometime!","error")}};return(0,p.jsx)(o.l1,{initialValues:S,enableReinitialize:!0,validationSchema:i.Ik().shape({integrationUrl:i.Yj().url("Enter valid url!").max(255).required("Integration Url is required")}),onSubmit:async(t,o)=>{let{setErrors:i,setStatus:a,setSubmitting:c}=o;const r={botDetailsForVerification:{...t}};try{c(!0),await(0,f.pn)(r,A,e),a({success:!0}),n(!1),(0,g.i)(!0,"The bot deployed successfully!","success")}catch(s){a({success:!1}),i({submit:s.message}),c(!1),(0,g.i)(!0,"Not able to deploy the bot. Try after sometime!","error")}},children:t=>{let{errors:n,handleBlur:e,handleChange:o,handleSubmit:i,isSubmitting:g,touched:f,values:b}=t;return(0,p.jsx)("form",{onSubmit:i,children:(0,p.jsxs)(a.Ay,{container:!0,spacing:1,children:[(0,p.jsx)(a.Ay,{item:!0,xs:12,md:12,children:(0,p.jsxs)(c.A,{spacing:1,children:[(0,p.jsx)(r.A,{htmlFor:"integrationUrl",children:"*Integration Url"}),(0,p.jsx)(s.A,{id:"integrationUrl",type:"integrationUrl",value:b.integrationUrl,name:"integrationUrl",autoComplete:"off",onBlur:e,onChange:o,fullWidth:!0,error:Boolean(f.integrationUrl&&n.integrationUrl),disabled:_}),f.integrationUrl&&n.integrationUrl&&(0,p.jsx)(d.A,{error:!0,id:"helper-text-integrationUrl",children:n.integrationUrl})]})}),m?(0,p.jsx)(a.Ay,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,p.jsx)(l.A,{children:(0,p.jsx)(u.A,{isLoading:g,disabled:g,color:"primary",size:"large",type:"button",variant:"contained",id:"deployBotVerify",onClick:E,children:"Verify"})})}):(0,p.jsx)(a.Ay,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,p.jsx)(l.A,{children:(0,p.jsx)(u.A,{isLoading:g,disabled:g,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})})}})}},8478:(t,n,e)=>{e.d(n,{Jt:()=>a,TF:()=>s,bE:()=>c,yJ:()=>r});var o=e(32026),i=e(44364);async function a(t,n){return d("GET",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(t,n){return d("POST",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(t,n){return d("PUT",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(t,n){return d("DELETE",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(t,n,e){let{headers:o,noAuth:i,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c="POST"===t||"PUT"===t||"DELETE"===t;n=function(t,n){if(!t)return t;const e=n&&Object.keys(n);if(null!==e&&void 0!==e&&e.length){const o=e.reduce(((t,e)=>{let o=n[e];return null===o||void 0===o?t:(o="".concat(e,"=").concat(encodeURIComponent(o)),t?"".concat(t,"&").concat(o):o)}),"");o&&(t="".concat(t).concat(t.includes("?")?"&":"?").concat(o))}if(t.startsWith("https://"))return t;return"".concat(l).concat(t)}(n,c?void 0:e);const r=e instanceof FormData;if(r||(e=e&&"object"===typeof e&&c?JSON.stringify(e):void 0),o||(o={}),r||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==i){const t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t))}try{const i=await fetch(n,{...a,headers:o,body:e,method:t}),c=await i.json();if(i.ok){const{data:t,...n}=c;return delete n.status,t&&!Object.keys(n).length?t:c}throw c.message?new Error(c.message):c}catch(d){var s;throw console.error("Error calling API: ",d),null!==(s=d.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,o.s8)(i.jn,"/")},98415:(t,n,e)=>{e.d(n,{Ci:()=>u,I4:()=>l,TF:()=>s,gI:()=>c,gR:()=>f,jo:()=>d,rv:()=>b,so:()=>g,yo:()=>r});var o=e(8478),i=e(33340),a=e(32026);async function c(t){const{organization:{websiteUrl:n,_id:e}}=i.nc.getState(),a={organizationId:e,websiteUrl:n,botName:t,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};h(await o.bE("/bot/".concat(e),a),!0)}async function r(t,n,e){const{organizationId:a}=i.nc.getState();if(!a||!t)throw new Error("Bot details not found");const c=await o.yJ("/bot/".concat(a,"/").concat(t),n);return h(c,e),c}async function s(t){const{organizationId:n,selectedBotId:e}=i.nc.getState();if(!n||!t)throw new Error("Bot details not found");const{deleted:a}=await o.TF("/bot/".concat(n,"/").concat(t));if(a){let{botsMap:t,botsList:n}=i.nc.getState();t={...t},n=[...n],delete t[a];const o=n.findIndex((t=>t._id===a));o>=0&&n.splice(o,1);const r={botsMap:t,botsList:n};var c;if(e===a)r.selectedBotId=(null===(c=n[0])||void 0===c?void 0:c._id)||null;i.nc.setState(r)}return!!a}function d(t,n){let{botDesign:e}=i.nc.getState();return e={...e,...n},r(t,{botDesign:e})}async function l(t,n){const{organizationId:e,selectedBotId:a}=i.nc.getState(),c=new FormData;c.append("file",n);const r=await o.bE("/bot/".concat(e,"/").concat(a,"/update-logo/").concat(t),c);return b(a,r),r["botDesign.".concat(t)]}async function u(t){const{organizationId:n,selectedBotId:e}=i.nc.getState(),a=await o.TF("/bot/".concat(n,"/").concat(e,"/update-logo/").concat(t));return b(e,a),a["botDesign.".concat(t)]}function g(t,n){return r(t,{botName:n})}function f(t,n){let{botSettings:e={}}=i.nc.getState();return e={...e,...n},r(t,{botSettings:e})}function b(t,n){const{botsMap:e}=i.nc.getState(),o=e[t];if(!o)return;h(Object.keys(n).reduce(((t,e)=>(0,a.G6)(t,e,n[e])),o))}function h(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const e=t._id;let{botsMap:o,botsList:a}=i.nc.getState();o={...o,[e]:t},a=[...a];const c=a.findIndex((t=>t._id===e));c>=0?a[c]=t:a.push(t);const r={botsMap:o,botsList:a};n&&(r.selectedBotId=e),i.nc.setState(r)}},77382:(t,n,e)=>{e.d(n,{CA:()=>r,Mk:()=>a,bZ:()=>c});var o=e(8478),i=e(33340);async function a(t){const{organizationId:n,selectedBotId:e}=i.nc.getState(),a=await o.bE("/bot/".concat(n,"/").concat(e,"/knowledge-base"),t);i.nc.setState((n=>{const o={...n.kbDocs||{}};if(o[e]=[...o[e]],t._id){const t=o[e].findIndex((t=>t._id===a._id));t>=0?o[e][t]=a:o[e].push(a)}else o[e].push(a);return{kbDocs:o}}))}async function c(t){const{organizationId:n,selectedBotId:e,kbDocs:a}=i.nc.getState();if(t&&Array.isArray(null===a||void 0===a?void 0:a[e]))return;const c=await o.Jt("/bot/".concat(n,"/").concat(e,"/knowledge-base/list"));i.nc.setState((t=>({kbDocs:{...t.kbDocs||{},[e]:c}})))}async function r(t){const{organizationId:n,selectedBotId:e}=i.nc.getState();await o.TF("/bot/".concat(n,"/").concat(e,"/knowledge-base/").concat(t)),i.nc.setState((n=>{var o;const i={...n.kbDocs||{}};return i[e]=null===(o=i[e])||void 0===o?void 0:o.filter((n=>n._id!==t)),{kbDocs:i}}))}},30334:(t,n,e)=>{e.d(n,{Ei:()=>l,KM:()=>r,MD:()=>s,pn:()=>u,qt:()=>d});var o=e(8478),i=e(33340),a=e(77382),c=e(98415);async function r(t,n,e){const i=await o.bE("/bot/".concat(e,"/").concat(n,"/add-training-media"),t);(0,c.rv)(n,{trainingMedia:i.trainingMedia})}async function s(t){const{organizationId:n,selectedBotId:e}=i.nc.getState(),a=new FormData;a.append("file",t);try{const t=await o.bE("/bot/".concat(n,"/").concat(e,"/add-training-media"),a);(0,c.rv)(e,{trainingMedia:t.trainingMedia})}catch(r){throw new Error("File upload failed. Please try again.",r)}}async function d(t,n,e){const i=await o.bE("/bot/".concat(e,"/").concat(n,"/delete-training-media-document"),t);(0,c.rv)(n,{trainingMedia:i.trainingDocuments})}async function l(t,n){const e=await o.bE("/bot/".concat(n,"/").concat(t,"/knowledge-base/train"));return i.nc.setState((n=>{const e={...n.kbDocs||{}};return delete e[t],{kbDocs:e}})),(0,a.bZ)().catch((t=>console.error("Error fetching Knowledge base content:",t))),e}async function u(t,n,e){const i=await o.bE("/bot/".concat(n,"/").concat(e,"/add-bot-tax-details"),t),{_id:a,botDetailsForVerification:r}=i;return(0,c.rv)(a,{botDetailsForVerification:r}),r}},32026:(t,n,e)=>{function o(t,n){return t.replace(new RegExp("".concat(i(n),"+$")),"")}function i(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(t){const n=new Date(t),e=n.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],i=n.getFullYear();return"".concat(o," ").concat(e,", ").concat(i)}function c(t,n,e){if(!n&&!t)return e;t=t||{};const o=Array.isArray(t)?[...t]:{...t};if(n.includes(".")){const i=n.indexOf("."),a=n.substring(0,i),r=n.substring(i+1);o[a]=c(t[a],r,e)}else o[n]=e;return o}function r(t,n){return btoa("".concat(t,"_").concat(n,"_whatsapp_int"))}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const n="abcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let o=0;o<t;o++)e+=n.charAt(Math.floor(36*Math.random()));return e}function d(t,n,e){if(!n&&!t)return e;t=t||{};const o=Array.isArray(t)?[...t]:{...t};if(n.includes(".")){const i=n.indexOf("."),a=n.substring(0,i),c=n.substring(i+1);o[a]=d(t[a],c,e)}else o[n]=e;return o}e.d(n,{G6:()=>c,OX:()=>s,Yq:()=>a,do:()=>d,qW:()=>r,s8:()=>o})},44364:(t,n,e)=>{e.d(n,{DX:()=>r,Og:()=>a,jn:()=>o,pA:()=>c,pR:()=>i});const o="https://devbackend.livhousing.com:444",i="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"}}]);