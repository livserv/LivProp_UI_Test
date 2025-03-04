"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[37],{8478:(e,t,n)=>{n.d(t,{Jt:()=>r,TF:()=>c,bE:()=>a,yJ:()=>s});var i=n(32026),o=n(44364);async function r(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:o,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i=`${n}=${encodeURIComponent(i)}`,e?`${e}&${i}`:i)}),"");i&&(e=`${e}${e.includes("?")?"&":"?"}${i}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,a?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&a?JSON.stringify(n):void 0),i||(i={}),s||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(i.Authorization=`Bearer ${e}`)}try{const o=await fetch(t,{...r,headers:i,body:n,method:e}),a=await o.json();if(o.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(l){var c;throw console.error("Error calling API: ",l),null!==(c=l.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,i.s8)(o.jn,"/")},15744:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(42074),o=n(24184);const r=n.p+"static/media/logo-dark.d226cf818f1e58f97ab4.png";var a=n(16243),s=n(49556),c=n(33340),l=n(32026),d=n(44414);const u=e=>{let{sx:t,to:n,consoleDesign:u}=e;const h=(0,c.C$)((e=>e.defaultId));let A=r;return null!==u&&void 0!==u&&u.logo&&(A=(0,l.Ke)(null===u||void 0===u?void 0:u.domain,null===u||void 0===u?void 0:u.logo)),(0,d.jsx)(o.A,{disableRipple:!0,component:i.N_,onClick:()=>(0,s.G8)([h]),to:n||a.Ay.defaultPath,sx:t,children:(0,d.jsx)("img",{src:A,alt:null!==u&&void 0!==u&&u.name?null===u||void 0===u?void 0:u.name:"LivServ",width:"100"})})}},16243:(e,t,n)=>{n.d(t,{Ay:()=>i,Y7:()=>o});const i={defaultPath:"/dashboard/default",fontFamily:"'Public Sans', sans-serif",i18n:"en",miniDrawer:!1,container:!0,mode:"light",presetColor:"default",themeDirection:"ltr"},o=260},21537:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(9950),o=n(78317),r=n(60899),a=n(51637),s=n(44414);const c=e=>{let{children:t,...n}=e;return(0,s.jsx)(a.A,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,border:!1,boxShadow:!0,children:(0,s.jsx)(o.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:t})})};var l=n(15744),d=n(72930),u=n(62999),h=n(81616),A=n(82053),m=n(36080);const x=e=>{let{consoleDesign:t}=e;const n=(0,d.A)((e=>e.breakpoints.down("sm")));return(0,s.jsx)(u.A,{maxWidth:"xl",children:(0,s.jsxs)(h.A,{direction:n?"column":"row",justifyContent:n?"center":"space-between",spacing:2,textAlign:n?"center":"inherit",children:[(0,s.jsxs)(A.A,{variant:"subtitle2",color:"secondary",component:"span",children:["\xa9 \xa0",(0,s.jsx)(A.A,{component:m.A,variant:"subtitle2",href:null!==t&&void 0!==t&&t.website?t.website:"https://livserv.ai/",target:"_blank",underline:"hover",children:null!==t&&void 0!==t&&t.name?t.name:"LivServ"}),"\xa0 ",null!==t&&void 0!==t&&t.copyright?t.copyright:2025]}),(0,s.jsxs)(h.A,{direction:n?"column":"row",spacing:n?1:3,textAlign:n?"center":"inherit",children:[(0,s.jsx)(A.A,{variant:"subtitle2",color:"secondary",component:m.A,href:null!==t&&void 0!==t&&t.privacyPolicyUrl?t.privacyPolicyUrl:"https://livserv.com/livservprivacypolicy.html",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,s.jsx)(A.A,{variant:"subtitle2",color:"secondary",component:m.A,href:null!==t&&void 0!==t&&t.contactUrl?t.contactUrl:"https://livserv.ai/contact-us/",target:"_blank",underline:"hover",children:"Contact us"})]})]})})};var p=n(75157);const f=()=>(0,s.jsx)(o.A,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0}}),v=e=>{let{children:t}=e;const[n,a]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(async()=>{const e=window.location.hostname;try{const t=await(0,p.O)(e);a(t)}catch(t){a({}),console.error("Failed to fetch organization props:",t)}})()}),[]),(0,s.jsxs)(o.A,{sx:{minHeight:"100vh"},children:[(0,s.jsx)(f,{}),(0,s.jsxs)(r.Ay,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,s.jsx)(l.A,{consoleDesign:n})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,children:(0,s.jsx)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,s.jsx)(r.Ay,{item:!0,children:(0,s.jsx)(c,{children:t})})})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,s.jsx)(x,{consoleDesign:n})})]})]})}},32026:(e,t,n)=>{n.d(t,{G6:()=>s,Ke:()=>h,OX:()=>l,PE:()=>u,Yq:()=>a,do:()=>d,qW:()=>c,s8:()=>o});var i=n(44364);function o(e,t){return e.replace(new RegExp(`${r(t)}+$`),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function s(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),r=t.substring(0,o),a=t.substring(o+1);i[r]=s(e[r],a,n)}else i[t]=n;return i}function c(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function d(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),r=t.substring(0,o),a=t.substring(o+1);i[r]=d(e[r],a,n)}else i[t]=n;return i}function u(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}function h(e,t){return!t||t.startsWith("http")?t:(t.startsWith("/")&&(t=t.substring(1)),`${i.J}/${e}/${t}`)}},32829:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(25371),o=n(44414);function r(e){let{children:t,type:n}=e;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},44364:(e,t,n)=>{n.d(t,{DX:()=>l,J:()=>c,Og:()=>r,jn:()=>i,mB:()=>s,pA:()=>a,pR:()=>o});const i="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",c="https://livserv-organizations.s3.ap-south-1.amazonaws.com",l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},49556:(e,t,n)=>{n.d(t,{G8:()=>o,sd:()=>r});var i=n(33340);function o(e){i.C$.setState({openItem:e})}function r(e){i.C$.setState({drawerOpen:e})}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),o=n(14857),r=n(48089),a=n(45180),s=n(82053),c=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:h=!0,contentSX:A={},darkTitle:m,elevation:x,secondary:p,shadow:f,sx:v={},title:y,...g}=e;const _=(0,o.A)();return i="dark"===_.palette.mode?i||!0:i,(0,l.jsxs)(r.A,{elevation:x||0,ref:t,...g,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===_.palette.mode?_.palette.divider:_.palette.grey.A800,boxShadow:!i||n&&"dark"!==_.palette.mode?"inherit":f||_.customShadows.z1,":hover":{boxShadow:i?f||_.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:_.typography.fontFamily,fontSize:"0.75rem"},...v},children:[!m&&y&&(0,l.jsx)(a.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:y,action:p}),m&&y&&(0,l.jsx)(a.A,{sx:d,title:(0,l.jsx)(s.A,{variant:"h3",children:y}),action:p}),h&&(0,l.jsx)(c.A,{sx:A,children:u}),!h&&u]})}))},75157:(e,t,n)=>{n.d(t,{O:()=>o});var i=n(8478);async function o(e){return await i.Jt(`/organization/organization-props/${e}`,{},{noAuth:!0})}},78317:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(58168),o=n(98587),r=n(9950),a=n(72004),s=n(62595),c=n(84222),l=n(28620),d=n(84917),u=n(44414);const h=["className","component"];var A=n(44501),m=n(80376),x=n(67550);const p=(0,n(1763).A)("MuiBox",["root"]),f=(0,m.A)(),v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:A="MuiBox-root",generateClassName:m}=e,x=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.A);return r.forwardRef((function(e,r){const s=(0,d.A)(n),c=(0,l.A)(e),{className:p,component:f="div"}=c,v=(0,o.A)(c,h);return(0,u.jsx)(x,(0,i.A)({as:f,ref:r,className:(0,a.A)(p,m?m(A):A),theme:t&&s[t]||s},v))}))}({themeId:x.A,defaultTheme:f,defaultClassName:p.root,generateClassName:A.A.generate}),y=v},86604:(e,t,n)=>{n.d(t,{f3:()=>a,ti:()=>o,xw:()=>r});var i=n(8478);async function o(e){return await i.bE("/organization/forgot-password",{email:e},{noAuth:!0})}async function r(e,t,n){return await i.bE("/organization/reset-password",{password:e,email:t,code:n},{noAuth:!0})}async function a(e,t,n){return await i.bE(`/organization/${n}/update-password`,{currentPassword:e,newPassword:t})}},89609:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var i=n(42074),o=n(60899),r=n(81616),a=n(82053),s=n(9950),c=n(3788),l=n(2660),d=n(24516),u=n(29714),h=n(61467),A=n(32829),m=n(93383),x=n(86604),p=n(44414);const f=()=>{const[e,t]=(0,s.useState)(!1),[n,i]=(0,s.useState)("");return e?(0,p.jsx)(v,{email:n}):(0,p.jsx)(h.l1,{initialValues:{email:""},validationSchema:u.Ik().shape({email:u.Yj().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(e,n)=>{let{setErrors:o,setStatus:r,setSubmitting:a}=n;try{await(0,x.ti)(e.email),r({success:!0}),a(!1),t(!0),i(e.email)}catch(s){r({success:!1}),o({submit:s.message}),a(!1)}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:s,touched:u,values:h}=e;return(0,p.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,p.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,p.jsx)(o.Ay,{item:!0,xs:12,children:(0,p.jsxs)(r.A,{spacing:1,children:[(0,p.jsx)(c.A,{htmlFor:"verify-email",children:"Email Address"}),(0,p.jsx)(l.A,{id:"verify-email",type:"email",value:h.email,name:"email",onBlur:n,onChange:i,placeholder:"Enter email address",fullWidth:!0,error:Boolean(u.email&&t.email)}),u.email&&t.email&&(0,p.jsx)(d.A,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]})}),t.submit&&(0,p.jsx)(o.Ay,{item:!0,xs:12,children:(0,p.jsx)(d.A,{error:!0,children:t.submit})}),(0,p.jsx)(o.Ay,{item:!0,xs:12,children:(0,p.jsx)(A.A,{children:(0,p.jsx)(m.A,{disableElevation:!0,isLoading:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Verify Email"})})})]})})}})};function v(e){let{email:t}=e;return(0,p.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,p.jsxs)(o.Ay,{item:!0,xs:12,children:["A verification email has been sent to ",(0,p.jsxs)("b",{children:[t,"."]})]}),(0,p.jsx)(o.Ay,{item:!0,xs:12,children:"To initiate the password reset process, kindly click on the verification link enclosed in the email."})]})}var y=n(21537);const g=()=>(0,p.jsx)(y.A,{children:(0,p.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,p.jsx)(o.Ay,{item:!0,xs:12,children:(0,p.jsx)(r.A,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,p.jsx)(a.A,{variant:"h3",children:"Email Verification"})})}),(0,p.jsx)(o.Ay,{item:!0,xs:12,children:(0,p.jsx)(f,{})}),(0,p.jsx)(o.Ay,{container:!0,justifyContent:"center",children:(0,p.jsx)(a.A,{component:i.N_,to:"/login",variant:"body1",sx:{textDecoration:"none",paddingTop:2},color:"primary",children:"Back to login"})})]})})},93383:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(9950),o=n(10226),r=n(46639),a=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:c,...l}=e;const[d,u]=i.useState(s);return(0,a.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||s||n,...l,children:[(d||s)&&(0,a.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}}}]);