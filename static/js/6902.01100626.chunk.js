"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6902],{32829:(e,r,n)=>{n.d(r,{A:()=>o});var s=n(25371),t=n(44414);function o(e){let{children:r,type:n}=e;return(0,t.jsx)(s.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:r})}o.defaultProps={type:"scale"}},51637:(e,r,n)=>{n.d(r,{A:()=>u});var s=n(9950),t=n(14857),o=n(48089),i=n(45180),a=n(82053),c=n(50704),d=n(44414);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,s.forwardRef)(((e,r)=>{let{border:n=!0,boxShadow:s,children:u,content:h=!0,contentSX:A={},darkTitle:p,elevation:w,secondary:x,shadow:m,sx:f={},title:P,...g}=e;const _=(0,t.A)();return s="dark"===_.palette.mode?s||!0:s,(0,d.jsxs)(o.A,{elevation:w||0,ref:r,...g,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===_.palette.mode?_.palette.divider:_.palette.grey.A800,boxShadow:!s||n&&"dark"!==_.palette.mode?"inherit":m||_.customShadows.z1,":hover":{boxShadow:s?m||_.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:_.typography.fontFamily,fontSize:"0.75rem"},...f},children:[!p&&P&&(0,d.jsx)(i.A,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:P,action:x}),p&&P&&(0,d.jsx)(i.A,{sx:l,title:(0,d.jsx)(a.A,{variant:"h3",children:P}),action:x}),h&&(0,d.jsx)(c.A,{sx:A,children:u}),!h&&u]})}))},93383:(e,r,n)=>{n.d(r,{A:()=>a});var s=n(9950),t=n(10226),o=n(46639),i=n(44414);const a=function(e){let{onClick:r,disabled:n,isLoading:a,children:c,...d}=e;const[l,u]=s.useState(a);return(0,i.jsxs)(t.A,{onClick:e=>{if(!r)return;const n=r(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||a||n,...d,children:[(l||a)&&(0,i.jsx)(o.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},76902:(e,r,n)=>{n.r(r),n.d(r,{default:()=>C});var s=n(9950),t=n(16491),o=n(60899),i=n(82053),a=n(74745),c=n(51637),d=n(93230),l=n(3788),u=n(2660),h=n(2046),A=n(25333),p=n(24516),w=n(25979),x=n(29714),m=n(61467),f=n(12678),P=n(4729),g=n(32829),_=n(3734),E=n(93383),v=n(21788),j=n(86604),b=n(33340),S=n(44414);const y=()=>{const e=(0,b.nc)((e=>e.organizationId)),[r,n]=(0,s.useState)(),[a,c]=(0,s.useState)(!1),[y,T]=(0,s.useState)(!1),[C,R]=(0,s.useState)(!1),O=()=>{c(!a)},D=()=>{T(!y)},k=()=>{R(!C)},I=e=>e.preventDefault(),N=e=>{const r=(0,_.x)(e);n((0,_.t)(r))};(0,s.useEffect)((()=>{N("")}),[]);return(0,S.jsx)(m.l1,{initialValues:{currentPassword:"",newPassword:"",confirmPassword:""},validationSchema:x.Ik().shape({currentPassword:x.Yj().max(30).required("Current Password is required"),newPassword:x.Yj().max(30).required("New Password is required"),confirmPassword:x.Yj().oneOf([x.KR("newPassword"),null],"New Password and Confirm Password must match").max(30).required("Confirm Password is required")}),onSubmit:async(r,n)=>{let{setErrors:s,setStatus:t,setSubmitting:o,resetForm:i}=n;try{await(0,j.f3)(r.currentPassword,r.newPassword,e),t({success:!0}),o(!1),(0,v.i)(!0,"Password updated","success"),i()}catch(a){t({success:!1}),s({submit:a.message}),o(!1),(0,v.i)(!0,a.message,"error")}},children:e=>{let{errors:n,handleBlur:s,handleChange:c,handleSubmit:x,isSubmitting:m,touched:_,values:v}=e;return(0,S.jsx)("form",{noValidate:!0,onSubmit:x,children:(0,S.jsx)(o.Ay,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:(0,S.jsxs)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:4,children:[(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsxs)(d.A,{spacing:1,children:[(0,S.jsx)(l.A,{htmlFor:"current-password",style:{marginTop:"2px"},children:"Current Password"}),(0,S.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(_.currentPassword&&n.currentPassword),id:"current-password",type:C?"text":"password",value:v.currentPassword,name:"currentPassword",onBlur:s,onChange:e=>{c(e)},endAdornment:(0,S.jsx)(h.A,{position:"end",children:(0,S.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:k,onMouseDown:I,edge:"end",size:"large",children:C?(0,S.jsx)(f.A,{}):(0,S.jsx)(P.A,{})})}),placeholder:"******",inputProps:{}}),_.currentPassword&&n.currentPassword&&(0,S.jsx)(p.A,{error:!0,id:"helper-text-new-current-password",children:n.currentPassword})]})}),(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsxs)(d.A,{spacing:1,children:[(0,S.jsx)(l.A,{htmlFor:"new-password",style:{marginTop:"10px"},children:"New Password"}),(0,S.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(_.newPassword&&n.newPassword),id:"new-password",type:a?"text":"password",value:v.newPassword,name:"newPassword",onBlur:s,onChange:e=>{c(e),N(e.target.value)},endAdornment:(0,S.jsx)(h.A,{position:"end",children:(0,S.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:O,onMouseDown:I,edge:"end",size:"large",children:a?(0,S.jsx)(f.A,{}):(0,S.jsx)(P.A,{})})}),placeholder:"******",inputProps:{}}),_.newPassword&&n.newPassword&&(0,S.jsx)(p.A,{error:!0,id:"helper-text-new-password",children:n.newPassword})]})}),(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsxs)(d.A,{spacing:1,children:[(0,S.jsx)(l.A,{htmlFor:"confirm-password",style:{marginTop:"10px"},children:"Confirm Password"}),(0,S.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(_.confirmPassword&&n.confirmPassword),id:"confirm-password",type:y?"text":"password",value:v.confirmPassword,name:"confirmPassword",onBlur:s,onChange:e=>{c(e)},endAdornment:(0,S.jsx)(h.A,{position:"end",children:(0,S.jsx)(A.A,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:I,edge:"end",size:"large",children:y?(0,S.jsx)(f.A,{}):(0,S.jsx)(P.A,{})})}),placeholder:"******",inputProps:{}}),_.confirmPassword&&n.confirmPassword&&(0,S.jsx)(p.A,{error:!0,id:"helper-text-confirm-password",children:n.confirmPassword})]})}),n.submit&&(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsx)(p.A,{error:!0,children:n.submit})}),(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsx)(w.A,{fullWidth:!0,sx:{mt:2},children:(0,S.jsxs)(o.Ay,{container:!0,spacing:2,alignItems:"center",children:[(0,S.jsx)(o.Ay,{item:!0,children:(0,S.jsx)(t.A,{sx:{bgcolor:null===r||void 0===r?void 0:r.color,width:85,height:8,borderRadius:"7px"}})}),(0,S.jsx)(o.Ay,{item:!0,children:(0,S.jsx)(i.A,{variant:"subtitle1",fontSize:"0.75rem",children:null===r||void 0===r?void 0:r.label})})]})})}),(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsx)(g.A,{children:(0,S.jsx)(E.A,{disableElevation:!0,isLoading:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Update Password"})})})]})})})}})};const T=function(){return(0,S.jsxs)(c.A,{contentSX:{p:2.25},children:[(0,S.jsx)(a.A,{children:(0,S.jsx)(i.A,{variant:"subtitle1",children:"Update Password"})}),(0,S.jsx)(t.A,{marginY:2,children:(0,S.jsx)(y,{})})]})};const C=function(){return(0,S.jsx)(t.A,{children:(0,S.jsxs)(o.Ay,{container:!0,item:!0,xs:12,children:[(0,S.jsxs)(o.Ay,{item:!0,xs:12,children:[(0,S.jsx)(i.A,{variant:"h5",children:"Account Settings"}),(0,S.jsx)("br",{})]}),(0,S.jsx)(o.Ay,{item:!0,xs:12,children:(0,S.jsx)(T,{})})]})})}},8478:(e,r,n)=>{n.d(r,{Jt:()=>o,TF:()=>c,bE:()=>i,yJ:()=>a});var s=n(32026),t=n(44364);async function o(e,r){return d("GET",e,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,r){return d("POST",e,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,r){return d("PUT",e,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,r){return d("DELETE",e,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,r,n){let{headers:s,noAuth:t,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;r=function(e,r){if(!e)return e;const n=r&&Object.keys(r);if(null!==n&&void 0!==n&&n.length){const s=n.reduce(((e,n)=>{let s=r[n];return null===s||void 0===s?e:(s=`${n}=${encodeURIComponent(s)}`,e?`${e}&${s}`:s)}),"");s&&(e=`${e}${e.includes("?")?"&":"?"}${s}`)}if(e.startsWith("https://"))return e;return`${l}${e}`}(r,i?void 0:n);const a=n instanceof FormData;if(a||(n=n&&"object"===typeof n&&i?JSON.stringify(n):void 0),s||(s={}),a||(s["Content-Type"]="application/json"),s.Accept="application/json",!1!==t){const e=sessionStorage.getItem("token");e&&(s.Authorization=`Bearer ${e}`)}try{const t=await fetch(r,{...o,headers:s,body:n,method:e}),i=await t.json();if(t.ok){const{data:e,...r}=i;return delete r.status,e&&!Object.keys(r).length?e:i}throw i.message?new Error(i.message):i}catch(d){var c;throw console.error("Error calling API: ",d),null!==(c=d.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,s.s8)(t.jn,"/")},86604:(e,r,n)=>{n.d(r,{f3:()=>i,ti:()=>t,xw:()=>o});var s=n(8478);async function t(e){return await s.bE("/organization/forgot-password",{email:e},{noAuth:!0})}async function o(e,r,n){return await s.bE("/organization/reset-password",{password:e,email:r,code:n},{noAuth:!0})}async function i(e,r,n){return await s.bE(`/organization/${n}/update-password`,{currentPassword:e,newPassword:r})}},32026:(e,r,n)=>{function s(e,r){return e.replace(new RegExp(`${t(r)}+$`),"")}function t(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const r=new Date(e),n=r.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()]} ${n}, ${r.getFullYear()}`}function i(e,r,n){if(!r&&!e)return n;e=e||{};const s=Array.isArray(e)?[...e]:{...e};if(r.includes(".")){const t=r.indexOf("."),o=r.substring(0,t),a=r.substring(t+1);s[o]=i(e[o],a,n)}else s[r]=n;return s}function a(e,r){return btoa(`${e}_${r}_whatsapp_int`)}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const r="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let s=0;s<e;s++)n+=r.charAt(Math.floor(36*Math.random()));return n}function d(e,r,n){if(!r&&!e)return n;e=e||{};const s=Array.isArray(e)?[...e]:{...e};if(r.includes(".")){const t=r.indexOf("."),o=r.substring(0,t),i=r.substring(t+1);s[o]=d(e[o],i,n)}else s[r]=n;return s}function l(e,r){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=r,document.body.appendChild(s),s.click(),document.body.removeChild(s)}n.d(r,{G6:()=>i,OX:()=>c,PE:()=>l,Yq:()=>o,do:()=>d,qW:()=>a,s8:()=>s})},44364:(e,r,n)=>{n.d(r,{DX:()=>c,Og:()=>o,jn:()=>s,mB:()=>a,pA:()=>i,pR:()=>t});const s="https://devbackend.livhousing.com:444",t="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.GOOGLE_MAPS_API_KEY,c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},3734:(e,r,n)=>{n.d(r,{t:()=>s,x:()=>t});const s=e=>e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},t=e=>{let r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(r+=1),r}}}]);