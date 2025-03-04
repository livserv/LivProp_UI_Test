"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[5677],{8478:(e,t,n)=>{n.d(t,{Jt:()=>r,TF:()=>c,bE:()=>a,yJ:()=>s});var o=n(32026),i=n(44364);async function r(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:o,noAuth:i,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o=`${n}=${encodeURIComponent(o)}`,e?`${e}&${o}`:o)}),"");o&&(e=`${e}${e.includes("?")?"&":"?"}${o}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,a?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&a?JSON.stringify(n):void 0),o||(o={}),s||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==i){const e=sessionStorage.getItem("token");e&&(o.Authorization=`Bearer ${e}`)}try{const i=await fetch(t,{...r,headers:o,body:n,method:e}),a=await i.json();if(i.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(l){var c;throw console.error("Error calling API: ",l),null!==(c=l.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,o.s8)(i.jn,"/")},15744:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(42074),i=n(24184);const r=n.p+"static/media/logo-dark.d226cf818f1e58f97ab4.png";var a=n(16243),s=n(49556),c=n(33340),l=n(32026),d=n(44414);const u=e=>{let{sx:t,to:n,consoleSettings:u}=e;const A=(0,c.C$)((e=>e.defaultId));let h=r;return null!==u&&void 0!==u&&u.logo&&(h=(0,l.Ke)(null===u||void 0===u?void 0:u.domain,null===u||void 0===u?void 0:u.logo)),(0,d.jsx)(i.A,{disableRipple:!0,component:o.N_,onClick:()=>(0,s.G8)([A]),to:n||a.Ay.defaultPath,sx:t,children:(0,d.jsx)("img",{src:h,alt:null!==u&&void 0!==u&&u.displayName?null===u||void 0===u?void 0:u.displayName:"LivServ",width:"100"})})}},16243:(e,t,n)=>{n.d(t,{Ay:()=>o,Y7:()=>i});const o={defaultPath:"/dashboard/default",fontFamily:"'Public Sans', sans-serif",i18n:"en",miniDrawer:!1,container:!0,mode:"light",presetColor:"default",themeDirection:"ltr"},i=260},21537:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(9950),i=n(78317),r=n(60899),a=n(51637),s=n(44414);const c=e=>{let{children:t,...n}=e;return(0,s.jsx)(a.A,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,border:!1,boxShadow:!0,children:(0,s.jsx)(i.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:t})})};var l=n(15744),d=n(72930),u=n(62999),A=n(81616),h=n(82053),f=n(36080);const v=e=>{var t,n,o,i,r,a;let{consoleSettings:c}=e;const l=(0,d.A)((e=>e.breakpoints.down("sm")));return(0,s.jsx)(u.A,{maxWidth:"xl",children:(0,s.jsxs)(A.A,{direction:l?"column":"row",justifyContent:l?"center":"space-between",spacing:2,textAlign:l?"center":"inherit",children:[(0,s.jsxs)(h.A,{variant:"subtitle2",color:"secondary",component:"span",children:["\xa9 \xa0",(0,s.jsx)(h.A,{component:f.A,variant:"subtitle2",href:null!==c&&void 0!==c&&c.website?c.website:"https://livserv.ai/",target:"_blank",underline:"hover",children:null!==c&&void 0!==c&&c.displayName?null===c||void 0===c?void 0:c.displayName:"LivServ"}),"\xa0 ",null!==c&&void 0!==c&&null!==(t=c.footer)&&void 0!==t&&t.copyright?null===c||void 0===c||null===(n=c.footer)||void 0===n?void 0:n.copyRightText:2025]}),(0,s.jsxs)(A.A,{direction:l?"column":"row",spacing:l?1:3,textAlign:l?"center":"inherit",children:[(0,s.jsx)(h.A,{variant:"subtitle2",color:"secondary",component:f.A,href:null!==c&&void 0!==c&&null!==(o=c.footer)&&void 0!==o&&o.privacyPolicyUrl?null===c||void 0===c||null===(i=c.footer)||void 0===i?void 0:i.privacyPolicyUrl:"https://livserv.com/livservprivacypolicy.html",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,s.jsx)(h.A,{variant:"subtitle2",color:"secondary",component:f.A,href:null!==c&&void 0!==c&&null!==(r=c.footer)&&void 0!==r&&r.contactUrl?null===c||void 0===c||null===(a=c.footer)||void 0===a?void 0:a.contactUrl:"https://livserv.ai/contact-us/",target:"_blank",underline:"hover",children:"Contact us"})]})]})})};var m=n(75157);const _=()=>(0,s.jsx)(i.A,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0}}),p=e=>{let{children:t}=e;const[n,a]=(0,o.useState)(null),[d,u]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{(async()=>{const e=window.location.hostname;try{const t=await(0,m.f)(e);a(t),u(!1)}catch(t){a({}),console.error("Failed to fetch organization props:",t)}})()}),[]),(0,s.jsxs)(i.A,{sx:{minHeight:"100vh"},children:[(0,s.jsx)(_,{}),(0,s.jsxs)(r.Ay,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{ml:3,mt:3},children:!d&&(0,s.jsx)(l.A,{consoleSettings:n})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,children:(0,s.jsx)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,s.jsx)(r.Ay,{item:!0,children:(0,s.jsx)(c,{children:t})})})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{m:3,mt:1},children:!d&&(0,s.jsx)(v,{consoleSettings:n})})]})]})}},31462:(e,t,n)=>{n.d(t,{DY:()=>r,QF:()=>s,Yf:()=>a,ri:()=>c});var o=n(8478),i=n(33340);async function r(e){return await o.bE("/organization/register",e,{noAuth:!0})}async function a(e){return await o.bE("/organization/verify-email",e,{noAuth:!0})}async function s(e,t){const n=await o.bE("/organization/login",{userName:e,password:t},{noAuth:!0}),{data:r,organizationList:a,jwt:s}=n;if(!s)throw new Error("Server Error. Unknown response!");sessionStorage.setItem("token",s);const c=(0,i.yV)();if(Array.isArray(a)&&a.length&&!c.organizationId){const e=a[0];c.organization=e,c.organizationId=e._id}return i.nc.setState({organization:r,organizationList:a,...c}),!0}function c(){sessionStorage.clear(),i.nc.setState((0,i.l1)(),!0)}},32026:(e,t,n)=>{n.d(t,{G6:()=>s,Ke:()=>A,OX:()=>l,PE:()=>u,Yq:()=>a,do:()=>d,qW:()=>c,s8:()=>i});var o=n(44364);function i(e,t){return e.replace(new RegExp(`${r(t)}+$`),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function s(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),r=t.substring(0,i),a=t.substring(i+1);o[r]=s(e[r],a,n)}else o[t]=n;return o}function c(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(36*Math.random()));return n}function d(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const i=t.indexOf("."),r=t.substring(0,i),a=t.substring(i+1);o[r]=d(e[r],a,n)}else o[t]=n;return o}function u(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function A(e,t){return!t||t.startsWith("http")?t:(t.startsWith("/")&&(t=t.substring(1)),`${o.J}/${e}/${t}`)}},32829:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(25371),i=n(44414);function r(e){let{children:t,type:n}=e;return(0,i.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},44364:(e,t,n)=>{n.d(t,{DX:()=>l,J:()=>c,Og:()=>r,jn:()=>o,mB:()=>s,pA:()=>a,pR:()=>i});const o="https://devbackend.livhousing.com:444",i="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_AMAZON_S3_BUCKET,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},49556:(e,t,n)=>{n.d(t,{G8:()=>i,sd:()=>r});var o=n(33340);function i(e){o.C$.setState({openItem:e})}function r(e){o.C$.setState({drawerOpen:e})}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(9950),i=n(14857),r=n(48089),a=n(45180),s=n(82053),c=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:u,content:A=!0,contentSX:h={},darkTitle:f,elevation:v,secondary:m,shadow:_,sx:p={},title:x,...y}=e;const g=(0,i.A)();return o="dark"===g.palette.mode?o||!0:o,(0,l.jsxs)(r.A,{elevation:v||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===g.palette.mode?g.palette.divider:g.palette.grey.A800,boxShadow:!o||n&&"dark"!==g.palette.mode?"inherit":_||g.customShadows.z1,":hover":{boxShadow:o?_||g.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:g.typography.fontFamily,fontSize:"0.75rem"},...p},children:[!f&&x&&(0,l.jsx)(a.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:x,action:m}),f&&x&&(0,l.jsx)(a.A,{sx:d,title:(0,l.jsx)(s.A,{variant:"h3",children:x}),action:m}),A&&(0,l.jsx)(c.A,{sx:h,children:u}),!A&&u]})}))},75157:(e,t,n)=>{n.d(t,{f:()=>i});var o=n(8478);async function i(e){return await o.Jt(`/organization/organization-props/console-settings/${e}`,{},{noAuth:!0})}},78317:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(58168),i=n(98587),r=n(9950),a=n(72004),s=n(62595),c=n(84222),l=n(28620),d=n(84917),u=n(44414);const A=["className","component"];var h=n(44501),f=n(80376),v=n(67550);const m=(0,n(1763).A)("MuiBox",["root"]),_=(0,f.A)(),p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:h="MuiBox-root",generateClassName:f}=e,v=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.A);return r.forwardRef((function(e,r){const s=(0,d.A)(n),c=(0,l.A)(e),{className:m,component:_="div"}=c,p=(0,i.A)(c,A);return(0,u.jsx)(v,(0,o.A)({as:_,ref:r,className:(0,a.A)(m,f?f(h):h),theme:t&&s[t]||s},p))}))}({themeId:v.A,defaultTheme:_,defaultClassName:m.root,generateClassName:h.A.generate}),x=p},91665:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(60899),i=n(81616),r=n(82053),a=n(21537),s=n(28429),c=n(32829),l=n(93383),d=n(21788),u=n(31462),A=n(44414);const h=()=>{const e=(0,s.zy)(),t=new URLSearchParams(e.search),n=t.get("email"),h=t.get("code"),f=(0,s.Zp)();return(0,A.jsx)(a.A,{children:(0,A.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,A.jsx)(o.Ay,{item:!0,xs:12,children:(0,A.jsx)(i.A,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,A.jsx)(r.A,{variant:"h3",children:"Email Id Verification"})})}),(0,A.jsx)(o.Ay,{item:!0,xs:12,children:(0,A.jsxs)(i.A,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:["Hi,",(0,A.jsx)("br",{})," ",(0,A.jsx)("br",{}),"Thanks for getting started with LivServ!",(0,A.jsx)("br",{}),(0,A.jsx)("br",{})," We need a little more information to complete your registration, including a confirmation of your email address.",(0,A.jsx)("br",{}),(0,A.jsx)("br",{})," Click below to confirm your email address"]})}),(0,A.jsx)(o.Ay,{item:!0,xs:12,children:(0,A.jsx)(c.A,{children:(0,A.jsx)(l.A,{disableElevation:!0,fullWidth:!0,size:"large",type:"button",variant:"contained",color:"primary",onClick:()=>(async()=>{try{const e={email:n,emailVerificationCode:h};await(0,u.Yf)(e),(0,d.i)(!0,"Email id verified Successfully","success"),f("/")}catch(e){(0,d.i)(!0,"Not able to verify the email id. Try after sometime!","error")}})(),children:"Verify Email Id"})})})]})})}},93383:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(9950),i=n(10226),r=n(46639),a=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:c,...l}=e;const[d,u]=o.useState(s);return(0,a.jsxs)(i.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||s||n,...l,children:[(d||s)&&(0,a.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}}}]);