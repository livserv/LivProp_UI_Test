"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[9377],{8478:(e,t,n)=>{n.d(t,{Jt:()=>r,TF:()=>d,bE:()=>o,yJ:()=>a});var i=n(32026),s=n(44364);async function r(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function o(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:s,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i=`${n}=${encodeURIComponent(i)}`,e?`${e}&${i}`:i)}),"");i&&(e=`${e}${e.includes("?")?"&":"?"}${i}`)}if(e.startsWith("https://"))return e;return`${c}${e}`}(t,o?void 0:n);const a=n instanceof FormData;if(a||(n=n&&"object"===typeof n&&o?JSON.stringify(n):void 0),i||(i={}),a||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==s){const e=sessionStorage.getItem("token");e&&(i.Authorization=`Bearer ${e}`)}try{const s=await fetch(t,{...r,headers:i,body:n,method:e}),o=await s.json();if(s.ok){const{data:e,...t}=o;return delete t.status,e&&!Object.keys(t).length?e:o}throw o.message?new Error(o.message):o}catch(l){var d;throw console.error("Error calling API: ",l),null!==(d=l.message)&&void 0!==d&&d.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const c=(0,i.s8)(s.jn,"/")},32026:(e,t,n)=>{n.d(t,{G6:()=>a,Ke:()=>A,OX:()=>l,PE:()=>u,TZ:()=>m,Yq:()=>o,do:()=>c,qW:()=>d,s8:()=>s,wE:()=>h});var i=n(44364);function s(e,t){return e.replace(new RegExp(`${r(t)}+$`),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function a(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const s=t.indexOf("."),r=t.substring(0,s),o=t.substring(s+1);i[r]=a(e[r],o,n)}else i[t]=n;return i}function d(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function c(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const s=t.indexOf("."),r=t.substring(0,s),o=t.substring(s+1);i[r]=c(e[r],o,n)}else i[t]=n;return i}function u(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}function A(e,t){return!t||t.startsWith("http")?t:(t.startsWith("/")&&(t=t.substring(1)),`${i.J}/${e}/${t}`)}function m(e){let t=document.querySelector("link[rel~='icon']");t||(t=document.createElement("link"),t.rel="icon",document.getElementsByTagName("head")[0].appendChild(t)),null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.favicon&&(t.href=A(null===e||void 0===e?void 0:e.domain,null===e||void 0===e?void 0:e.favicon)):t.href="/favicon.png"}function h(e){null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.displayName&&(document.title=null===e||void 0===e?void 0:e.displayName):document.title="LivServ"}},32829:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(25371),s=n(44414);function r(e){let{children:t,type:n}=e;return(0,s.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},41507:(e,t,n)=>{n.d(t,{Ds:()=>d,L_:()=>o,NC:()=>a,YS:()=>r,cw:()=>c,qb:()=>l});var i=n(8478),s=n(33340);async function r(e,t){const n=await async function(){const e=s.nc.getState();let{organizationList:t,organizationId:n,organization:r}=e;if(!e.isSuperUser||Array.isArray(t))return;if(t=await i.bE("/organization/list"),t.length)if(n=n||sessionStorage.getItem("orgId"),n){if(!r){var o;r=null===(o=t)||void 0===o?void 0:o.filter((e=>e._id===n))[0]}}else{const e=t[0];n=e._id,r=e}return s.nc.setState({organizationList:t,organizationId:n,organization:r}),!0}(),{organizationId:r}=s.nc.getState();return e?e!==r&&s.nc.setState({organizationId:e}):e=r,!e||(n||await async function(e){const t=await i.bE("/organization/get-organization-by-id",{organizationId:e});s.nc.setState({organization:t})}(e),await d(e,t),!0)}async function o(e,t){t||(t=s.nc.getState().organizationId);const n=await i.yJ(`/organization/${t}`,e);s.nc.setState((e=>{const{organizationList:i,organizationId:s,organization:r}=e,o={};return s===t&&(o.organization={...r,...n}),i&&(o.organizationList=i.map((e=>e._id===t?{...e,...n}:e))),o}))}function a(e){if(!e||"object"!==typeof e)return;let{organization:t}=s.nc.getState();t&&(t={...t,...e},s.nc.setState({organization:t}))}async function d(e,t){var n;const r=await i.Jt(`/bot/${e}/list`),o=t||(null===(n=r[0])||void 0===n?void 0:n._id),a=r.reduce(((e,t)=>(e[t._id]=t,e)),{});return s.nc.setState({organizationId:e,botsList:r,botsMap:a,selectedBotId:o}),o}function l(e){s.nc.setState({selectedBotId:e})}async function c(){const e=await i.Jt("/organization/invoice/list");s.nc.setState({organizationsInvoiceList:e})}},44364:(e,t,n)=>{n.d(t,{DX:()=>l,J:()=>d,Og:()=>r,jn:()=>i,mB:()=>a,pA:()=>o,pR:()=>s});const i="https://devbackend.livhousing.com:444",s="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,a="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",d={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_AMAZON_S3_BUCKET,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),s=n(14857),r=n(48089),o=n(45180),a=n(82053),d=n(50704),l=n(44414);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:A=!0,contentSX:m={},darkTitle:h,elevation:b,secondary:g,shadow:p,sx:f={},title:x,...y}=e;const _=(0,s.A)();return i="dark"===_.palette.mode?i||!0:i,(0,l.jsxs)(r.A,{elevation:b||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===_.palette.mode?_.palette.divider:_.palette.grey.A800,boxShadow:!i||n&&"dark"!==_.palette.mode?"inherit":p||_.customShadows.z1,":hover":{boxShadow:i?p||_.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:_.typography.fontFamily,fontSize:"0.75rem"},...f},children:[!h&&x&&(0,l.jsx)(o.A,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:x,action:g}),h&&x&&(0,l.jsx)(o.A,{sx:c,title:(0,l.jsx)(a.A,{variant:"h3",children:x}),action:g}),A&&(0,l.jsx)(d.A,{sx:m,children:u}),!A&&u]})}))},89377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});n(9950);var i=n(61467),s=n(29714),r=n(78317),o=n(60899),a=n(82053),d=n(74745),l=n(81616),c=n(3788),u=n(2660),A=n(24516),m=n(51637),h=n(32829),b=n(93383),g=n(21788),p=n(33340),f=n(41507),x=n(44414);const y={margin:{xs:2.5,md:2},"& > *":{flexGrow:1,flexBasis:"50%"}};const _=function(){return(0,x.jsx)(r.A,{children:(0,x.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,x.jsx)(o.Ay,{item:!0,xs:11,children:(0,x.jsx)(a.A,{variant:"h5",children:"Billing"})}),(0,x.jsx)(o.Ay,{children:(0,x.jsx)(m.A,{sx:y,content:!1,border:!1,boxShadow:!0,children:(0,x.jsx)(r.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,x.jsx)(v,{})})})})]})})};function v(){let e=!1;(0,p.nc)((e=>e.isSuperUser));const t=(0,p.nc)((e=>e.organizationId)),n=(0,p.nc)((e=>e.organization.billingDetails)),r={businessAddress:(null===n||void 0===n?void 0:n.businessAddress)||"",country:(null===n||void 0===n?void 0:n.country)||"",state:(null===n||void 0===n?void 0:n.state)||"",city:(null===n||void 0===n?void 0:n.city)||"",postalCode:(null===n||void 0===n?void 0:n.postalCode)||"",businessRegistrationNumber:(null===n||void 0===n?void 0:n.businessRegistrationNumber)||"",gstNumber:(null===n||void 0===n?void 0:n.gstNumber)||"",panNumber:(null===n||void 0===n?void 0:n.panNumber)||""};return(0,x.jsx)(i.l1,{initialValues:r,enableReinitialize:!0,validationSchema:s.Ik().shape({businessAddress:s.Yj().max(255).required("Business Address is required"),country:s.Yj().max(50).required("Country is required"),state:s.Yj().max(50).required("State is required"),city:s.Yj().max(50).required("City is required"),postalCode:s.ai().test("len","Maximum 10 digits are allowed",(e=>e.toString().length<=10)).required("Postal Code is required"),businessRegistrationNumber:s.Yj().max(150).nullable(!0),gstNumber:s.Yj().max(150).nullable(!0),panNumber:s.Yj().max(50).nullable(!0)}),onSubmit:async(e,n)=>{let{setErrors:i,setStatus:s,setSubmitting:r}=n;try{r(!0),await(0,f.L_)({billingDetails:e},t),s({success:!0}),(0,g.i)(!0,"Billing details updated successfully!","success")}catch(o){s({success:!1}),i({submit:o.message}),r(!1),(0,g.i)(!0,"Not able to update the billing details. Try after sometime!","error")}},children:t=>{let{errors:n,handleBlur:i,handleChange:s,handleSubmit:r,isSubmitting:m,touched:g,values:p}=t;return(0,x.jsx)("form",{onSubmit:r,children:(0,x.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,x.jsx)(o.Ay,{item:!0,xs:12,children:(0,x.jsx)(d.A,{children:(0,x.jsx)(a.A,{variant:"subtitle1",children:"Billing Details"})})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:12,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"businessAddress",children:"*Business Address"}),(0,x.jsx)(u.A,{id:"businessAddress",type:"businessAddress",value:p.businessAddress,name:"businessAddress",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.businessAddress&&n.businessAddress),disabled:e}),g.businessAddress&&n.businessAddress&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-businessAddress",children:n.businessAddress})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:4,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"country",children:"*Country"}),(0,x.jsx)(u.A,{id:"country",type:"country",value:p.country,name:"country",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.country&&n.country),disabled:e}),g.country&&n.country&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-country",children:n.country})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:4,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"state",children:"*State"}),(0,x.jsx)(u.A,{id:"state",type:"state",value:p.state,name:"state",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.state&&n.state),disabled:e}),g.state&&n.state&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-state",children:n.state})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:4,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"city",children:"*City"}),(0,x.jsx)(u.A,{id:"city",type:"city",value:p.city,name:"city",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.city&&n.city),disabled:e}),g.city&&n.city&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-city",children:n.city})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"postalCode",children:"*Postal Code"}),(0,x.jsx)(u.A,{id:"postalCode",type:"postalCode",value:p.postalCode,name:"postalCode",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.postalCode&&n.postalCode),disabled:e}),g.postalCode&&n.postalCode&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-postalCode",children:n.postalCode})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"businessRegistrationNumber",children:"Business Registration Number"}),(0,x.jsx)(u.A,{id:"businessRegistrationNumber",type:"businessRegistrationNumber",value:p.businessRegistrationNumber,name:"businessRegistrationNumber",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.businessRegistrationNumber&&n.businessRegistrationNumber),disabled:e}),g.businessRegistrationNumber&&n.businessRegistrationNumber&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-businessRegistrationNumber",children:n.businessRegistrationNumber})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"gstNumber",children:"GST Number"}),(0,x.jsx)(u.A,{id:"gstNumber",type:"gstNumber",value:p.gstNumber,name:"gstNumber",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.gstNumber&&n.gstNumber),disabled:e}),g.gstNumber&&n.gstNumber&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-gstNumber",children:n.gstNumber})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,x.jsxs)(l.A,{spacing:1,children:[(0,x.jsx)(c.A,{htmlFor:"panNumber",children:"PAN Number"}),(0,x.jsx)(u.A,{id:"panNumber",type:"panNumber",value:p.panNumber,name:"panNumber",autoComplete:"off",onBlur:i,onChange:s,fullWidth:!0,error:Boolean(g.panNumber&&n.panNumber),disabled:e}),g.panNumber&&n.panNumber&&(0,x.jsx)(A.A,{error:!0,id:"helper-text-panNumber",children:n.panNumber})]})}),(0,x.jsx)(o.Ay,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,x.jsx)(h.A,{children:(0,x.jsx)(b.A,{isLoading:m,disabled:m,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})})}})}},93383:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(9950),s=n(10226),r=n(46639),o=n(44414);const a=function(e){let{onClick:t,disabled:n,isLoading:a,children:d,...l}=e;const[c,u]=i.useState(a);return(0,o.jsxs)(s.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:c||a||n,...l,children:[(c||a)&&(0,o.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),d]})}}}]);