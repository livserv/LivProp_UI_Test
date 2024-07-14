"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6902],{32829:(e,n,r)=>{r.d(n,{A:()=>s});var t=r(25371),o=r(44414);function s(e){let{children:n,type:r}=e;return(0,o.jsx)(t.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}s.defaultProps={type:"scale"}},51637:(e,n,r)=>{r.d(n,{A:()=>u});var t=r(9950),o=r(14857),s=r(48089),a=r(45180),i=r(82053),c=r(50704),d=r(44414);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,t.forwardRef)(((e,n)=>{let{border:r=!0,boxShadow:t,children:u,content:h=!0,contentSX:p={},darkTitle:A,elevation:w,secondary:x,shadow:m,sx:f={},title:g,...P}=e;const j=(0,o.A)();return t="dark"===j.palette.mode?t||!0:t,(0,d.jsxs)(s.A,{elevation:w||0,ref:n,...P,sx:{border:r?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!t||r&&"dark"!==j.palette.mode?"inherit":m||j.customShadows.z1,":hover":{boxShadow:t?m||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...f},children:[!A&&g&&(0,d.jsx)(a.A,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:g,action:x}),A&&g&&(0,d.jsx)(a.A,{sx:l,title:(0,d.jsx)(i.A,{variant:"h3",children:g}),action:x}),h&&(0,d.jsx)(c.A,{sx:p,children:u}),!h&&u]})}))},93383:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(9950),o=r(10226),s=r(46639),a=r(44414);const i=function(e){let{onClick:n,disabled:r,isLoading:i,children:c,...d}=e;const[l,u]=t.useState(i);return(0,a.jsxs)(o.A,{onClick:e=>{if(!n)return;const r=n(e);"function"===typeof(null===r||void 0===r?void 0:r.finally)&&(u(!0),r.finally((()=>u(!1))))},disabled:l||i||r,...d,children:[(l||i)&&(0,a.jsx)(s.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},76902:(e,n,r)=>{r.r(n),r.d(n,{default:()=>T});var t=r(9950),o=r(16491),s=r(60899),a=r(82053),i=r(74745),c=r(51637),d=r(93230),l=r(3788),u=r(2660),h=r(2046),p=r(25333),A=r(24516),w=r(25979),x=r(29714),m=r(61467),f=r(12678),g=r(4729),P=r(32829),j=r(3734),v=r(93383),_=r(58178),b=r(86604),y=r(33340),E=r(44414);const S=()=>{const e=(0,y.nc)((e=>e.organizationId)),[n,r]=(0,t.useState)(),[i,c]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!1),[T,R]=(0,t.useState)(!1),O=()=>{c(!i)},D=()=>{C(!S)},k=()=>{R(!T)},I=e=>e.preventDefault(),N=e=>{const n=(0,j.x)(e);r((0,j.t)(n))};(0,t.useEffect)((()=>{N("")}),[]);return(0,E.jsx)(m.l1,{initialValues:{currentPassword:"",newPassword:"",confirmPassword:""},validationSchema:x.Ik().shape({currentPassword:x.Yj().max(30).required("Current Password is required"),newPassword:x.Yj().max(30).required("New Password is required"),confirmPassword:x.Yj().oneOf([x.KR("newPassword"),null],"New Password and Confirm Password must match").max(30).required("Confirm Password is required")}),onSubmit:async(n,r)=>{let{setErrors:t,setStatus:o,setSubmitting:s,resetForm:a}=r;try{await(0,b.f3)(n.currentPassword,n.newPassword,e),o({success:!0}),s(!1),(0,_.i)(!0,"Password updated","success"),a()}catch(i){o({success:!1}),t({submit:i.message}),s(!1),(0,_.i)(!0,i.message,"error")}},children:e=>{let{errors:r,handleBlur:t,handleChange:c,handleSubmit:x,isSubmitting:m,touched:j,values:_}=e;return(0,E.jsx)("form",{noValidate:!0,onSubmit:x,children:(0,E.jsx)(s.Ay,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:(0,E.jsxs)(s.Ay,{item:!0,xs:12,sm:6,md:4,lg:4,children:[(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(l.A,{htmlFor:"current-password",style:{marginTop:"2px"},children:"Current Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(j.currentPassword&&r.currentPassword),id:"current-password",type:T?"text":"password",value:_.currentPassword,name:"currentPassword",onBlur:t,onChange:e=>{c(e)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:k,onMouseDown:I,edge:"end",size:"large",children:T?(0,E.jsx)(f.A,{}):(0,E.jsx)(g.A,{})})}),placeholder:"******",inputProps:{}}),j.currentPassword&&r.currentPassword&&(0,E.jsx)(A.A,{error:!0,id:"helper-text-new-current-password",children:r.currentPassword})]})}),(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(l.A,{htmlFor:"new-password",style:{marginTop:"10px"},children:"New Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(j.newPassword&&r.newPassword),id:"new-password",type:i?"text":"password",value:_.newPassword,name:"newPassword",onBlur:t,onChange:e=>{c(e),N(e.target.value)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:O,onMouseDown:I,edge:"end",size:"large",children:i?(0,E.jsx)(f.A,{}):(0,E.jsx)(g.A,{})})}),placeholder:"******",inputProps:{}}),j.newPassword&&r.newPassword&&(0,E.jsx)(A.A,{error:!0,id:"helper-text-new-password",children:r.newPassword})]})}),(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsxs)(d.A,{spacing:1,children:[(0,E.jsx)(l.A,{htmlFor:"confirm-password",style:{marginTop:"10px"},children:"Confirm Password"}),(0,E.jsx)(u.A,{fullWidth:!0,autoComplete:"off",error:Boolean(j.confirmPassword&&r.confirmPassword),id:"confirm-password",type:S?"text":"password",value:_.confirmPassword,name:"confirmPassword",onBlur:t,onChange:e=>{c(e)},endAdornment:(0,E.jsx)(h.A,{position:"end",children:(0,E.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:I,edge:"end",size:"large",children:S?(0,E.jsx)(f.A,{}):(0,E.jsx)(g.A,{})})}),placeholder:"******",inputProps:{}}),j.confirmPassword&&r.confirmPassword&&(0,E.jsx)(A.A,{error:!0,id:"helper-text-confirm-password",children:r.confirmPassword})]})}),r.submit&&(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsx)(A.A,{error:!0,children:r.submit})}),(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsx)(w.A,{fullWidth:!0,sx:{mt:2},children:(0,E.jsxs)(s.Ay,{container:!0,spacing:2,alignItems:"center",children:[(0,E.jsx)(s.Ay,{item:!0,children:(0,E.jsx)(o.A,{sx:{bgcolor:null===n||void 0===n?void 0:n.color,width:85,height:8,borderRadius:"7px"}})}),(0,E.jsx)(s.Ay,{item:!0,children:(0,E.jsx)(a.A,{variant:"subtitle1",fontSize:"0.75rem",children:null===n||void 0===n?void 0:n.label})})]})})}),(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsx)(P.A,{children:(0,E.jsx)(v.A,{disableElevation:!0,isLoading:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Update Password"})})})]})})})}})};const C=function(){return(0,E.jsxs)(c.A,{contentSX:{p:2.25},children:[(0,E.jsx)(i.A,{children:(0,E.jsx)(a.A,{variant:"subtitle1",children:"Update Password"})}),(0,E.jsx)(o.A,{marginY:2,children:(0,E.jsx)(S,{})})]})};const T=function(){return(0,E.jsx)(o.A,{children:(0,E.jsxs)(s.Ay,{container:!0,item:!0,xs:12,children:[(0,E.jsxs)(s.Ay,{item:!0,xs:12,children:[(0,E.jsx)(a.A,{variant:"h5",children:"Account Settings"}),(0,E.jsx)("br",{})]}),(0,E.jsx)(s.Ay,{item:!0,xs:12,children:(0,E.jsx)(C,{})})]})})}},8478:(e,n,r)=>{r.d(n,{Jt:()=>s,TF:()=>c,bE:()=>a,yJ:()=>i});var t=r(32026),o=r(44364);async function s(e,n){return d("GET",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,n){return d("POST",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,n){return d("PUT",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,n){return d("DELETE",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,n,r){let{headers:t,noAuth:o,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;n=function(e,n){if(!e)return e;const r=n&&Object.keys(n);if(null!==r&&void 0!==r&&r.length){const t=r.reduce(((e,r)=>{let t=n[r];return null===t||void 0===t?e:(t="".concat(r,"=").concat(encodeURIComponent(t)),e?"".concat(e,"&").concat(t):t)}),"");t&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(t))}if(e.startsWith("https://"))return e;return"".concat(l).concat(e)}(n,a?void 0:r);const i=r instanceof FormData;if(i||(r=r&&"object"===typeof r&&a?JSON.stringify(r):void 0),t||(t={}),i||(t["Content-Type"]="application/json"),t.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(t.Authorization="Bearer ".concat(e))}try{const o=await fetch(n,{...s,headers:t,body:r,method:e}),a=await o.json();if(o.ok){const{data:e,...n}=a;return delete n.status,e&&!Object.keys(n).length?e:a}throw a.message?new Error(a.message):a}catch(d){var c;throw console.error("Error calling API: ",d),null!==(c=d.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,t.s8)(o.jn,"/")},86604:(e,n,r)=>{r.d(n,{f3:()=>a,ti:()=>o,xw:()=>s});var t=r(8478);async function o(e){return await t.bE("/organization/forgot-password",{email:e},{noAuth:!0})}async function s(e,n,r){return await t.bE("/organization/reset-password",{password:e,email:n,code:r},{noAuth:!0})}async function a(e,n,r){return await t.bE("/organization/".concat(r,"/update-password"),{currentPassword:e,newPassword:n})}},32026:(e,n,r)=>{function t(e,n){return e.replace(new RegExp("".concat(o(n),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(e){const n=new Date(e),r=n.getDate(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],o=n.getFullYear();return"".concat(t," ").concat(r,", ").concat(o)}function a(e,n,r){if(!n&&!e)return r;e=e||{};const t=Array.isArray(e)?[...e]:{...e};if(n.includes(".")){const o=n.indexOf("."),s=n.substring(0,o),i=n.substring(o+1);t[s]=a(e[s],i,r)}else t[n]=r;return t}function i(e,n){return btoa("".concat(e,"_").concat(n,"_whatsapp_int"))}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const n="abcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let t=0;t<e;t++)r+=n.charAt(Math.floor(36*Math.random()));return r}function d(e,n,r){if(!n&&!e)return r;e=e||{};const t=Array.isArray(e)?[...e]:{...e};if(n.includes(".")){const o=n.indexOf("."),s=n.substring(0,o),a=n.substring(o+1);t[s]=d(e[s],a,r)}else t[n]=r;return t}function l(e,n){const r=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),t=document.createElement("a");t.href=URL.createObjectURL(r),t.download=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)}r.d(n,{G6:()=>a,OX:()=>c,PE:()=>l,Yq:()=>s,do:()=>d,qW:()=>i,s8:()=>t})},44364:(e,n,r)=>{r.d(n,{DX:()=>i,Og:()=>s,jn:()=>t,pA:()=>a,pR:()=>o});const t="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},3734:(e,n,r)=>{r.d(n,{t:()=>t,x:()=>o});const t=e=>e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},o=e=>{let n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(n+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(n+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(n+=1),n}}}]);