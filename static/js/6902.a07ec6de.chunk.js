"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6902],{32829:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(25371),i=r(44414);function o(e){let{children:t,type:r}=e;return(0,i.jsx)(n.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}o.defaultProps={type:"scale"}},51637:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(9950),i=r(14857),o=r(48089),a=r(45180),s=r(82053),l=r(50704),d=r(44414);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,n.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:u,content:h=!0,contentSX:A={},darkTitle:p,elevation:m,secondary:w,shadow:f,sx:g={},title:x,...v}=e;const P=(0,i.A)();return n="dark"===P.palette.mode?n||!0:n,(0,d.jsxs)(o.A,{elevation:m||0,ref:t,...v,sx:{border:r?"1px solid":"none",borderRadius:2,borderColor:"dark"===P.palette.mode?P.palette.divider:P.palette.grey.A800,boxShadow:!n||r&&"dark"!==P.palette.mode?"inherit":f||P.customShadows.z1,":hover":{boxShadow:n?f||P.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:P.typography.fontFamily,fontSize:"0.75rem"},...g},children:[!p&&x&&(0,d.jsx)(a.A,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:x,action:w}),p&&x&&(0,d.jsx)(a.A,{sx:c,title:(0,d.jsx)(s.A,{variant:"h3",children:x}),action:w}),h&&(0,d.jsx)(l.A,{sx:A,children:u}),!h&&u]})}))},93383:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(9950),i=r(10226),o=r(46639),a=r(44414);const s=function(e){let{onClick:t,disabled:r,isLoading:s,children:l,...d}=e;const[c,u]=n.useState(s);return(0,a.jsxs)(i.A,{onClick:e=>{if(!t)return;const r=t(e);"function"===typeof(null===r||void 0===r?void 0:r.finally)&&(u(!0),r.finally((()=>u(!1))))},disabled:c||s||r,...d,children:[(c||s)&&(0,a.jsx)(o.A,{size:16,color:"primary",style:{marginRight:"10px"}}),l]})}},76902:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var n=r(9950),i=r(16491),o=r(60899),a=r(82053),s=r(74745),l=r(51637),d=r(93230),c=r(3788),u=r(2660),h=r(2046),A=r(25333),p=r(24516),m=r(25979),w=r(29714),f=r(61467),g=r(12678),x=r(4729),v=r(32829),P=r(3734),b=r(93383),S=r(21788),_=r(86604),y=r(33340),E=r(44414);const j=()=>{const e=(0,y.nc)((e=>e.organizationId)),[t,r]=(0,n.useState)(),[s,l]=(0,n.useState)(!1),[j,C]=(0,n.useState)(!1),[R,T]=(0,n.useState)(!1),D=()=>{l(!s)},I=()=>{C(!j)},O=()=>{T(!R)},k=e=>e.preventDefault(),N=e=>{const t=(0,P.x)(e);r((0,P.t)(t))};(0,n.useEffect)((()=>{N("")}),[]);return(0,E.jsx)(f.l1,{initialValues:{currentPassword:"",newPassword:"",confirmPassword:""},validationSchema:w.Ik().shape({currentPassword:w.Yj().max(30).required("Current Password is required"),newPassword:w.Yj().max(30).required("New Password is required"),confirmPassword:w.Yj().oneOf([w.KR("newPassword"),null],"New Password and Confirm Password must match").max(30).required("Confirm Password is required")}),onSubmit:async(t,r)=>{let{setErrors:n,setStatus:i,setSubmitting:o,resetForm:a}=r;try{await(0,_.f3)(t.currentPassword,t.newPassword,e),i({success:!0}),o(!1),(0,S.i)(!0,"Password updated","success"),a()}catch(s){i({success:!1}),n({submit:s.message}),o(!1),(0,S.i)(!0,s.message,"error")}},children:e=>{let{errors:r,handleBlur:n,handleChange:l,handleSubmit:w,isSubmitting:f,touched:P,values:S}=e;return(0,E.jsx)("form",{noValidate:!0,onSubmit:w,children:(0,E.jsx)(o.Ay,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:(0,E.jsxs)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:4,children:[(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(c.A,{htmlFor:"current-password",style:{marginTop:"2px"},children:"Current Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(P.currentPassword&&r.currentPassword),id:"current-password",type:R?"text":"password",value:S.currentPassword,name:"currentPassword",onBlur:n,onChange:e=>{l(e)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:O,onMouseDown:k,edge:"end",size:"large",children:R?(0,E.jsx)(g.A,{}):(0,E.jsx)(x.A,{})})}),placeholder:"******",inputProps:{}}),P.currentPassword&&r.currentPassword&&(0,E.jsx)(p.A,{error:!0,id:"helper-text-new-current-password",children:r.currentPassword})]})}),(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(c.A,{htmlFor:"new-password",style:{marginTop:"10px"},children:"New Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(P.newPassword&&r.newPassword),id:"new-password",type:s?"text":"password",value:S.newPassword,name:"newPassword",onBlur:n,onChange:e=>{l(e),N(e.target.value)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:k,edge:"end",size:"large",children:s?(0,E.jsx)(g.A,{}):(0,E.jsx)(x.A,{})})}),placeholder:"******",inputProps:{}}),P.newPassword&&r.newPassword&&(0,E.jsx)(p.A,{error:!0,id:"helper-text-new-password",children:r.newPassword})]})}),(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(c.A,{htmlFor:"confirm-password",style:{marginTop:"10px"},children:"Confirm Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(P.confirmPassword&&r.confirmPassword),id:"confirm-password",type:j?"text":"password",value:S.confirmPassword,name:"confirmPassword",onBlur:n,onChange:e=>{l(e)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:I,onMouseDown:k,edge:"end",size:"large",children:j?(0,E.jsx)(g.A,{}):(0,E.jsx)(x.A,{})})}),placeholder:"******",inputProps:{}}),P.confirmPassword&&r.confirmPassword&&(0,E.jsx)(p.A,{error:!0,id:"helper-text-confirm-password",children:r.confirmPassword})]})}),r.submit&&(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsx)(p.A,{error:!0,children:r.submit})}),(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsx)(m.A,{fullWidth:!0,sx:{mt:2},children:(0,E.jsxs)(o.Ay,{container:!0,spacing:2,alignItems:"center",children:[(0,E.jsx)(o.Ay,{item:!0,children:(0,E.jsx)(i.A,{sx:{bgcolor:null===t||void 0===t?void 0:t.color,width:85,height:8,borderRadius:"7px"}})}),(0,E.jsx)(o.Ay,{item:!0,children:(0,E.jsx)(a.A,{variant:"subtitle1",fontSize:"0.75rem",children:null===t||void 0===t?void 0:t.label})})]})})}),(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsx)(v.A,{children:(0,E.jsx)(b.A,{disableElevation:!0,isLoading:f,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Update Password"})})})]})})})}})};const C=function(){return(0,E.jsxs)(l.A,{contentSX:{p:2.25},children:[(0,E.jsx)(s.A,{children:(0,E.jsx)(a.A,{variant:"subtitle1",children:"Update Password"})}),(0,E.jsx)(i.A,{marginY:2,children:(0,E.jsx)(j,{})})]})};const R=function(){return(0,E.jsx)(i.A,{children:(0,E.jsxs)(o.Ay,{container:!0,item:!0,xs:12,children:[(0,E.jsxs)(o.Ay,{item:!0,xs:12,children:[(0,E.jsx)(a.A,{variant:"h5",children:"Account Settings"}),(0,E.jsx)("br",{})]}),(0,E.jsx)(o.Ay,{item:!0,xs:12,children:(0,E.jsx)(C,{})})]})})}},8478:(e,t,r)=>{r.d(t,{Jt:()=>o,TF:()=>l,bE:()=>a,yJ:()=>s});var n=r(32026),i=r(44364);async function o(e,t){return d("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return d("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return d("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return d("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t,r){let{headers:n,noAuth:i,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const r=t&&Object.keys(t);if(null!==r&&void 0!==r&&r.length){const n=r.reduce(((e,r)=>{let n=t[r];return null===n||void 0===n?e:(n=`${r}=${encodeURIComponent(n)}`,e?`${e}&${n}`:n)}),"");n&&(e=`${e}${e.includes("?")?"&":"?"}${n}`)}if(e.startsWith("https://"))return e;return`${c}${e}`}(t,a?void 0:r);const s=r instanceof FormData;if(s||(r=r&&"object"===typeof r&&a?JSON.stringify(r):void 0),n||(n={}),s||(n["Content-Type"]="application/json"),n.Accept="application/json",!1!==i){const e=sessionStorage.getItem("token");e&&(n.Authorization=`Bearer ${e}`)}try{const i=await fetch(t,{...o,headers:n,body:r,method:e}),a=await i.json();if(i.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(d){var l;throw console.error("Error calling API: ",d),null!==(l=d.message)&&void 0!==l&&l.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const c=(0,n.s8)(i.jn,"/")},86604:(e,t,r)=>{r.d(t,{f3:()=>a,ti:()=>i,xw:()=>o});var n=r(8478);async function i(e){return await n.bE("/organization/forgot-password",{email:e},{noAuth:!0})}async function o(e,t,r){return await n.bE("/organization/reset-password",{password:e,email:t,code:r},{noAuth:!0})}async function a(e,t,r){return await n.bE(`/organization/${r}/update-password`,{currentPassword:e,newPassword:t})}},32026:(e,t,r)=>{function n(e,t){return e.replace(new RegExp(`${i(t)}+$`),"")}function i(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),r=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${r}, ${t.getFullYear()}`}function a(e,t,r){if(!t&&!e)return r;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),o=t.substring(0,i),s=t.substring(i+1);n[o]=a(e[o],s,r)}else n[t]=r;return n}function s(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let n=0;n<e;n++)r+=t.charAt(Math.floor(36*Math.random()));return r}function d(e,t,r){if(!t&&!e)return r;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),o=t.substring(0,i),a=t.substring(i+1);n[o]=d(e[o],a,r)}else n[t]=r;return n}function c(e,t){const r=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}r.d(t,{G6:()=>a,OX:()=>l,PE:()=>c,Yq:()=>o,do:()=>d,qW:()=>s,s8:()=>n})},44364:(e,t,r)=>{r.d(t,{DX:()=>l,Og:()=>o,jn:()=>n,mB:()=>s,pA:()=>a,pR:()=>i});const n="https://devbackend.livhousing.com:444",i="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},3734:(e,t,r)=>{r.d(t,{t:()=>n,x:()=>i});const n=e=>e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},i=e=>{let t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(t+=1),t}},74745:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(98587),i=r(58168),o=r(9950),a=r(72004),s=r(88465),l=r(99269),d=r(59254),c=r(18463),u=r(40777),h=r(44414);const A=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,d.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,l.X4)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,i.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,i.A)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,i.A)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}})}),(e=>{let{ownerState:t}=e;return(0,i.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),m=(0,d.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.A)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===r.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})})),w=o.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:d,component:w=(l?"div":"hr"),flexItem:f=!1,light:g=!1,orientation:x="horizontal",role:v=("hr"!==w?"separator":void 0),textAlign:P="center",variant:b="fullWidth"}=r,S=(0,n.A)(r,A),_=(0,i.A)({},r,{absolute:o,component:w,flexItem:f,light:g,orientation:x,role:v,textAlign:P,variant:b}),y=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:o,orientation:a,textAlign:l,variant:d}=e,c={root:["root",t&&"absolute",d,o&&"light","vertical"===a&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,s.A)(c,u.K,n)})(_);return(0,h.jsx)(p,(0,i.A)({as:w,className:(0,a.A)(y.root,d),role:v,ref:t,ownerState:_},S,{children:l?(0,h.jsx)(m,{className:y.wrapper,ownerState:_,children:l}):null}))}));w.muiSkipListHighlight=!0;const f=w},40777:(e,t,r)=>{r.d(t,{A:()=>a,K:()=>o});var n=r(1763),i=r(423);function o(e){return(0,i.Ay)("MuiDivider",e)}const a=(0,n.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);