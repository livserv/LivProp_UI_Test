"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[132],{25040:(e,t,n)=>{n.d(t,{c:()=>a});var o=n(74836),r=n(97884);function a(e){let{children:t,type:n}=e;return(0,r.jsx)(o.q.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},1816:(e,t,n)=>{n.d(t,{c:()=>h});var o=n(99584),r=n(60392),a=n(65936),s=n(78640),i=n(43664),c=n(36744),l=n(97884);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:h,content:u=!0,contentSX:p={},darkTitle:m,elevation:x,secondary:g,shadow:f,sx:b={},title:w,...y}=e;const j=(0,r.c)();return o="dark"===j.palette.mode?o||!0:o,(0,l.jsxs)(a.c,{elevation:x||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!o||n&&"dark"!==j.palette.mode?"inherit":f||j.customShadows.z1,":hover":{boxShadow:o?f||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...b},children:[!m&&w&&(0,l.jsx)(s.c,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:w,action:g}),m&&w&&(0,l.jsx)(s.c,{sx:d,title:(0,l.jsx)(i.c,{variant:"h3",children:w}),action:g}),u&&(0,l.jsx)(c.c,{sx:p,children:h}),!u&&h]})}))},62216:(e,t,n)=>{n.d(t,{c:()=>i});var o=n(99584),r=n(43924),a=n(49700),s=n(97884);const i=function(e){let{onClick:t,disabled:n,isLoading:i,children:c,...l}=e;const[d,h]=o.useState(i);return(0,s.jsxs)(r.c,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(h(!0),n.finally((()=>h(!1))))},disabled:d||i||n,...l,children:[(d||i)&&(0,s.jsx)(a.c,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},75132:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=n(99584),r=n(90760),a=n(86344),s=n(11968),i=n(43664),c=n(2496),l=n(59112),d=n(78192),h=n(40440),u=n(77676),p=n(98124),m=n(25528),x=n(55056),g=n(34452),f=n(12316),b=n(1816),w=n(25040),y=n(53632),j=n(8428),v=n(62216),C=n(69700),S=n(97884);const _={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},P={leadCaptureType:"flow",leadCaptureFormMode:"count",showFormAfterChats:3};const E=function(){const[e,t]=(0,y._)(),{botSettings:n=P}=t;return(0,S.jsx)(b.c,{sx:_,content:!1,border:!1,boxShadow:!0,children:(0,S.jsx)(r.c,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,S.jsx)(f.QJ,{initialValues:n,onSubmit:async(t,n)=>{let{setErrors:o,setStatus:r,setSubmitting:a}=n;try{await(0,j.cn)(e,t),r({success:!1}),a(!1),(0,C.l)(!0,"Settings saved successfully!","success")}catch(s){console.error(s),(0,C.l)(!0,"Unable to save settings. Please try again later.","error"),r({success:!1}),o({submit:s.message}),a(!1)}},children:e=>(0,S.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,S.jsxs)(a.cp,{container:!0,spacing:3,children:[(0,S.jsx)(A,{...e}),(0,S.jsx)(T,{...e}),(0,S.jsx)(I,{...e})]})})})})})};function A(e){let{values:t,touched:n,errors:o,handleBlur:r,handleChange:x,setFieldValue:g}=e;const f="form"===t.leadCaptureType,b="form"!==t.leadCaptureType||"keyword"===t.leadCaptureFormMode;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a.cp,{item:!0,xs:12,children:(0,S.jsx)(s.c,{children:(0,S.jsx)(i.c,{variant:"subtitle1",children:"Lead Capture Settings"})})}),(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"leadCaptureType",children:"Input Type"}),(0,S.jsxs)(d.c,{value:t.leadCaptureType,defaultValue:"flow",name:"leadCaptureType",onChange:x,children:[(0,S.jsx)(h.c,{value:"flow",control:(0,S.jsx)(u.c,{}),label:"Flow"}),(0,S.jsx)(h.c,{value:"form",control:(0,S.jsx)(u.c,{}),label:"Form"})]})]})}),f&&(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"leadCaptureFormMode",children:"When you want the form to be displayed?"}),(0,S.jsxs)(d.c,{value:t.leadCaptureFormMode,defaultValue:"count",id:"leadCaptureFormMode",name:"leadCaptureFormMode",onChange:x,children:[(0,S.jsx)(h.c,{value:"keyword",control:(0,S.jsx)(u.c,{}),label:"Show form when the keyword matches"}),(0,S.jsx)(h.c,{value:"count",control:(0,S.jsx)(u.c,{}),label:(0,S.jsxs)(S.Fragment,{children:["Show form after conversations:"," ",(0,S.jsx)("input",{value:t.showFormAfterChats,maxLength:2,style:{width:"50px"},disabled:"form"!==t.leadCaptureType||t.leadCaptureFormMode&&"count"!==t.leadCaptureFormMode,onChange:e=>console.log({showFormAfterChats:R(e.target.value,t.showFormAfterChats)})})]})})]})]})}),!f&&(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"leadCaptureFlowMandatory",children:"Can user proceed without providing contact details?"}),(0,S.jsx)(h.c,{value:"keyword",control:(0,S.jsx)(p.c,{checked:t.leadCaptureFlowMandatory,name:"leadCaptureFlowMandatory",onChange:x}),label:"Make the input mandatory"})]})}),b&&(0,S.jsx)(a.cp,{item:!0,xs:12,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"phoneNumberKeywords",children:"Keywords for Phone Number Collection *"}),(0,S.jsx)(F,{name:"phoneNumberKeywords",value:t.phoneNumberKeywords||[],error:Boolean(n.phoneNumberKeywords&&o.phoneNumberKeywords),onBlur:r,onChange:g,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),n.phoneNumberKeywords&&o.phoneNumberKeywords&&(0,S.jsx)(m.c,{error:!0,id:"helper-text-email-keywords",children:o.phoneNumberKeywords})]})}),b&&(0,S.jsx)(a.cp,{item:!0,xs:12,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"emailKeywords",children:"Keywords for Email Address Collection *"}),(0,S.jsx)(F,{name:"emailKeywords",value:t.emailKeywords||[],error:Boolean(n.emailKeywords&&o.emailKeywords),onBlur:r,onChange:g,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),n.emailKeywords&&o.emailKeywords&&(0,S.jsx)(m.c,{error:!0,id:"helper-text-email-keywords",children:o.emailKeywords})]})})]})}function T(e){let{values:t,handleChange:n}=e;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a.cp,{item:!0,xs:12,children:(0,S.jsx)(s.c,{children:(0,S.jsx)(i.c,{variant:"subtitle1",children:"Allow / Block chat window"})})}),(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"allowedIP",children:"Allowed IP"}),(0,S.jsx)(x.c,{multiline:!0,id:"allowedIP",name:"allowedIP",value:t.allowedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"deniedIP",children:"Denied IP"}),(0,S.jsx)(x.c,{multiline:!0,id:"deniedIP",name:"deniedIP",defaultValue:t.deniedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"allowedPages",children:"Allowed Pages"}),(0,S.jsx)(x.c,{multiline:!0,id:"allowedPages",name:"allowedPages",defaultValue:t.allowedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})}),(0,S.jsx)(a.cp,{item:!0,xs:12,md:6,children:(0,S.jsxs)(c.c,{spacing:1,children:[(0,S.jsx)(l.c,{htmlFor:"deniedPages",children:"Denied Pages"}),(0,S.jsx)(x.c,{multiline:!0,id:"deniedPages",name:"deniedPages",defaultValue:t.deniedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})})]})}function I(e){let{errors:t,isSubmitting:n}=e;return(0,S.jsxs)(S.Fragment,{children:[t.submit&&(0,S.jsx)(a.cp,{item:!0,xs:12,children:(0,S.jsx)(m.c,{error:!0,children:t.submit})}),(0,S.jsx)(a.cp,{item:!0,xs:12,mt:2,children:(0,S.jsx)(w.c,{children:(0,S.jsx)(v.c,{disableElevation:!0,isLoading:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})})]})}function R(e,t){return e?isNaN(e)?t:Number(e):e}function F(e){let{id:t,name:n,value:r,onChange:a,...s}=e;const i=o.useRef(),c=e=>a(n,e);return(0,S.jsx)(g.a,{ref:i,id:t||n,name:n,addOnBlur:!0,value:r||[],onChange:c,onInputChange:e=>{e.endsWith(",")&&(r=[...r,e.substring(0,e.length-1)],c(r),i.current.value="")},...s})}},35240:(e,t,n)=>{n.d(t,{Aj:()=>i,_M:()=>a,aE:()=>c,s$:()=>s,wz:()=>h});var o=n(52216),r=n(79028);async function a(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:o,noAuth:r,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s="POST"===e||"PUT"===e||"DELETE"===e;if(t=h(t,s?void 0:n),n=n&&"object"===typeof n&&s?JSON.stringify(n):void 0,o||(o={}),o["Content-Type"]="application/json",o.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(o.Authorization="Bearer ".concat(e))}try{const r=await fetch(t,{...a,headers:o,body:n,method:e}),s=await r.json();if(r.ok){const{data:e,...t}=s;return delete t.status,e&&!Object.keys(t).length?e:s}throw s.message?new Error(s.message):s}catch(c){var i;throw console.error("Error calling API: ",c),null!==(i=c.message)&&void 0!==i&&i.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error("Unknown server error")}}const d=(0,o.Sm)(r.UX,"/");function h(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o="".concat(n,"=").concat(encodeURIComponent(o)),e?"".concat(e,"&").concat(o):o)}),"");o&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(o))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},8428:(e,t,n)=>{n.d(t,{A1:()=>l,Jr:()=>s,WS:()=>c,aE:()=>i,cn:()=>d,y0:()=>a});var o=n(35240),r=n(76312);async function a(e){const{organization:{websiteUrl:t,_id:n}}=r.mW.getState(),a={organizationId:n,websiteUrl:t,botName:e,botDesign:{botLogo:{name:"",url:""},visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}},s=await o.s$("/bot/initialize-create-bot",a),i=s._id;let{botsMap:c,botsList:l}=r.mW.getState();c={...c,[i]:s},l=[...l],l.push(s._doc),r.mW.setState({selectedBotId:i,botsMap:c,botsList:l})}async function s(e,t,n){const{organizationId:a}=r.mW.getState();if(!a||!e)throw new Error("Bot details not found");const s=await o.Aj("/bot/".concat(a,"/").concat(e),t);return h(s,n),s}async function i(e){const{organizationId:t,selectedBotId:n}=r.mW.getState();if(!t||!e)throw new Error("Bot details not found");const{deleted:a}=await o.aE("/bot/".concat(t,"/").concat(e));if(a){let{botsMap:e,botsList:t}=r.mW.getState();e={...e},t=[...t],delete e[a];const o=t.findIndex((e=>e._id===a));o>=0&&t.splice(o,1);const i={botsMap:e,botsList:t};var s;if(n===a)i.selectedBotId=(null===(s=t[0])||void 0===s?void 0:s._id)||null;r.mW.setState(i)}return!!a}function c(e,t){let{botDesign:n}=r.mW.getState();return n={...n,...t},s(e,{botDesign:n})}function l(e,t){return s(e,{botName:t})}function d(e,t){let{botSettings:n={}}=r.mW.getState();return n={...n,...t},s(e,{botSettings:n})}function h(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e._id;let{botsMap:o,botsList:a}=r.mW.getState();o={...o,[n]:e},a=[...a];const s=a.findIndex((e=>e._id===n));s>=0?a[s]=e:a.push(e);const i={botsMap:o,botsList:a};t&&(i.selectedBotId=n),r.mW.setState(i)}},53632:(e,t,n)=>{n.d(t,{_:()=>r});var o=n(76312);function r(e){const t=(0,o.mW)((e=>e.selectedBotId)),n=(0,o.mW)((n=>n.botsMap[e||t]));return[e||t,n]}},52216:(e,t,n)=>{function o(e,t){return e.replace(new RegExp("".concat(r(t),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getFullYear();return"".concat(o," ").concat(n,", ").concat(r)}n.d(t,{Sm:()=>o,_m:()=>a})},79028:(e,t,n)=>{n.d(t,{AZ:()=>r,So:()=>i,UX:()=>o,cX:()=>a,vc:()=>s});const o="https://devbackend.livhousing.com",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,i="https://60f1-203-192-224-75.ngrok-free.app"}}]);