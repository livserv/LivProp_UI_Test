"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[497],{18678:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(93701),n=r(46417);function o(e){let{children:t,type:r}=e;return(0,n.jsx)(a.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}o.defaultProps={type:"scale"}},31381:(e,t,r)=>{r.d(t,{Z:()=>c});r(47313);var a=r(66149),n=r(33604),o=r(96467),i=r(4117),l=r(31095),s=r(46417);const c=e=>{const{title:t,children:r,open:c,setOpen:d,onConfirm:p}=e;return(0,s.jsxs)(a.Z,{open:c,onClose:()=>d(!1),style:{zIndex:1e4},children:[(0,s.jsx)(n.Z,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,s.jsx)(o.Z,{dividers:!0,children:r}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>d(!1),children:"No"}),(0,s.jsx)(l.Z,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{d(!1),p()},children:"Yes"})]})]})}},57514:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(47313),n=r(50301),o=r(46417);const i=a.forwardRef((function(e,t){return(0,o.jsx)(n.Z,{direction:"up",ref:t,...e})}))},6505:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(47313),n=r(19860),o=r(73428),i=r(54641),l=r(61113),s=r(93405),c=r(46417);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},p=(0,a.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:a,children:p,content:h=!0,contentSX:u={},darkTitle:m,elevation:x,secondary:f,shadow:b,sx:g={},title:Z,...j}=e;const v=(0,n.Z)();return a="dark"===v.palette.mode?a||!0:a,(0,c.jsxs)(o.Z,{elevation:x||0,ref:t,...j,sx:{border:r?"1px solid":"none",borderRadius:2,borderColor:"dark"===v.palette.mode?v.palette.divider:v.palette.grey.A800,boxShadow:!a||r&&"dark"!==v.palette.mode?"inherit":b||v.customShadows.z1,":hover":{boxShadow:a?b||v.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:v.typography.fontFamily,fontSize:"0.75rem"},...g},children:[!m&&Z&&(0,c.jsx)(i.Z,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:Z,action:f}),m&&Z&&(0,c.jsx)(i.Z,{sx:d,title:(0,c.jsx)(l.Z,{variant:"h3",children:Z}),action:f}),h&&(0,c.jsx)(s.Z,{sx:u,children:p}),!h&&p]})}))},68200:(e,t,r)=>{r.d(t,{Z:()=>u});r(47313);var a=r(57514),n=r(66149),o=r(33604),i=r(96467),l=r(11198),s=r(17592),c=r(19860),d=r(47131),p=r(46417);const h=(0,s.ZP)(n.Z)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function u(e){const t=(0,c.Z)(),{breakpoints:r}=t,{openPopUpDialog:n,setPopUpDialog:s,title:u}=e;return(0,p.jsxs)(h,{TransitionComponent:a.Z,"aria-labelledby":"customized-dialog-title",open:n,PaperProps:{sx:{width:"60%",[r.down("sm")]:{width:"90%"}}},children:[(0,p.jsx)(o.Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:u}),(0,p.jsx)(d.Z,{"aria-label":"close",onClick:()=>{s(!1)},sx:{position:"absolute",right:8,top:8},children:(0,p.jsx)(l.Z,{})}),(0,p.jsx)(i.Z,{dividers:!0,children:e.children})]})}},94100:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(47313),n=r(31095),o=r(85281),i=r(46417);const l=function(e){let{onClick:t,disabled:r,isLoading:l,children:s,...c}=e;const[d,p]=a.useState(l);return(0,i.jsxs)(n.Z,{onClick:e=>{if(!t)return;const r=t(e);"function"===typeof(null===r||void 0===r?void 0:r.finally)&&(p(!0),r.finally((()=>p(!1))))},disabled:d||l||r,...c,children:[(d||l)&&(0,i.jsx)(o.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},43497:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(47313),n=r(41806),o=r(9019),i=r(61113),l=r(49709),s=r(93405),c=r(37843),d=r(15480),p=r(17592),h=r(29210),u=r(70246),m=r(11686),x=r(47597),f=r(2927),b=r(65954),g=r(51997),Z=r(47131),j=r(24977),v=r(21933),C=r(23509),y=r(969),k=r(80730),S=r(25151);async function P(e){const t=await k.U2("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration/list")),{botId:r}=e;((e,t)=>{C.tN.setState((r=>{const a=r.botsList.map((r=>r._id===e?{...r,integrations:t}:r));return{...r,botsList:a}}))})(r,t)}async function R(e){const t=await k.v_("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration"),e),r={organizationId:t.organizationId,botId:t.botId};try{await P(r)}catch(a){(0,S.W)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}var _=r(68200),T=r(6505),N=r(31381),w=r(18678),A=r(94100),U=r(42832),I=r(23306),E=r(46417);const M=function(e){let{botId:t,organizationId:r,setPopUpDialog:a}=e;return(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(j.J9,{initialValues:{crmCallBackUrl:""},validationSchema:v.Ry().shape({crmCallBackUrl:v.Z_().matches(/^(https?:\/\/)/,"Enter valid url!").required("CRM Callback URL is required")}),onSubmit:async(e,n)=>{let{setErrors:o,setStatus:i,setSubmitting:l}=n;try{const n={botId:t,organizationId:r,callbackURL:e.crmCallBackUrl,channelId:"CRM_Callback_123",channelName:"CRM_Callback"};await R(n),i({success:!0}),l(!0),a(!1),(0,S.W)(!0,"The CRM callback url added successfully!","success")}catch(s){i({success:!1}),o({submit:s.message}),l(!1),(0,S.W)(!0,"Not able to CRM callback url. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:r,handleChange:a,handleSubmit:n,isSubmitting:i,touched:l,values:s}=e;return(0,E.jsx)("form",{noValidate:!0,onSubmit:n,children:(0,E.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,E.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"email-login",children:"CRM callback URL"}),(0,E.jsx)(c.Z,{id:"crmCallBackUrl",type:"url",defaultValue:s.crmCallBackUrl,name:"crmCallBackUrl",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.crmCallBackUrl&&t.crmCallBackUrl)}),l.crmCallBackUrl&&t.crmCallBackUrl&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-crm-url",children:t.crmCallBackUrl})]})}),t.submit&&(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(d.Z,{error:!0,children:t.submit})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,E.jsx)(w.Z,{children:(0,E.jsx)(A.Z,{isLoading:i,disabled:i,color:"primary",size:"large",type:"submit",variant:"contained",children:"Add"})})})]})})}})})};var D=r(32203);const B=function(e){let{botId:t,organizationId:r,setPopUpDialog:a}=e;return(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(j.J9,{initialValues:{webHookUrl:"".concat(D.LC,"/whatsapp/entrypoint?botId=").concat(t),webHookSecret:"".concat(r,"_").concat(t,"_whatsapp_123"),appId:"",appSecret:"",appName:"",phoneNumber:"",verificationToken:""},validationSchema:v.Ry().shape({appId:v.Rx().required("App id must be a number"),appSecret:v.Z_().required("App secret key is required"),appName:v.Z_().required("App name is required"),phoneNumber:v.Rx().min(10,"Please enter a valid phone number").required("Phone number is required"),verificationToken:v.Z_().required("verification Token  is required")}),onSubmit:async(e,n)=>{let{setErrors:o,setStatus:i,setSubmitting:l}=n;try{const n={organizationId:r,botId:t,data:e};console.log(n),i({success:!0}),l(!0),a(!1),(0,S.W)(!0,"The WhatsApp integration added successfully!","success")}catch(s){i({success:!1}),o({submit:s.message}),l(!1),(0,S.W)(!0,"Not able to activate WhatsApp integration. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:r,handleChange:a,handleSubmit:n,isSubmitting:i,touched:l,values:s}=e;return(0,E.jsx)("form",{noValidate:!0,onSubmit:n,children:(0,E.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"webhook-url",children:"Webhook Url *"}),(0,E.jsx)(c.Z,{id:"webHookUrl",type:"url",defaultValue:s.webHookUrl,name:"webHookUrl",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.webHookUrl&&t.webHookUrl)}),l.webHookUrl&&t.webHookUrl&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-webHookUrl",children:t.webHookUrl})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"webHook-secret",children:"WebHook Secret *"}),(0,E.jsx)(c.Z,{id:"webHookSecret",type:"url",defaultValue:s.webHookSecret,name:"webHookSecret",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.webHookSecret&&t.webHookSecret)}),l.webHookSecret&&t.webHookSecret&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-webHookSecret",children:t.webHookSecret})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"app-id",children:"AppId *"}),(0,E.jsx)(c.Z,{id:"appId",type:"url",defaultValue:s.appId,name:"appId",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.appId&&t.appId)}),l.appId&&t.appId&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-appId",children:t.appId})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"app-secret",children:"App Secret Key*"}),(0,E.jsx)(c.Z,{id:"appSecret",type:"url",defaultValue:s.appSecret,name:"appSecret",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.appSecret&&t.appSecret)}),l.appSecret&&t.appSecret&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-appSecret",children:t.appSecret})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"app-name",children:"App Name *"}),(0,E.jsx)(c.Z,{id:"appName",type:"url",defaultValue:s.appName,name:"appName",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.appName&&t.appName)}),l.appName&&t.appName&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-appName",children:t.appName})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"phone-number",children:"Phone Number *"}),(0,E.jsx)(c.Z,{id:"phoneNumber",type:"phone",defaultValue:s.phoneNumber,name:"phoneNumber",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.phoneNumber&&t.phoneNumber)}),l.phoneNumber&&t.phoneNumber&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-phoneNumber",children:t.phoneNumber})]})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsxs)(U.Z,{spacing:1,children:[(0,E.jsx)(I.Z,{htmlFor:"verification-token",children:"Verification Token *"}),(0,E.jsx)(c.Z,{id:"verificationToken",type:"phone",defaultValue:s.verificationToken,name:"verificationToken",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.verificationToken&&t.verificationToken)}),l.verificationToken&&t.verificationToken&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-verificationToken",children:t.verificationToken})]})}),t.submit&&(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(d.Z,{error:!0,children:t.submit})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,E.jsx)(w.Z,{children:(0,E.jsx)(A.Z,{isLoading:i,disabled:i,color:"primary",size:"large",type:"submit",variant:"contained",children:"Add"})})})]})})}})})},L=(0,p.ZP)(h.Z)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));const H=function(){var e;const[t]=(0,y.g)(),r=(0,C.tN)((e=>e.botsList)),l=(0,C.tN)((e=>e.organizationId));a.useEffect((()=>{(async()=>{const e={organizationId:l,botId:t};try{await P(e)}catch(r){(0,S.W)(!0,"Not able to fetch integrations details. Try after sometime!","error")}})()}),[t,l]);const s=null===(e=r.find((e=>e._id===t)))||void 0===e?void 0:e.integrations;return(0,E.jsxs)(n.Z,{children:[(0,E.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,E.jsxs)(o.ZP,{item:!0,xs:11,children:[(0,E.jsx)(i.Z,{variant:"h5",children:"Integrations"}),(0,E.jsx)("br",{})]}),(0,E.jsx)(o.ZP,{item:!0,xs:1,sx:{position:"relative"},id:"trainingDocumentsSpeedDial",children:(0,E.jsx)(O,{botId:t,organizationId:l,integrations:s})})]}),(0,E.jsx)(o.ZP,{container:!0,spacing:3,children:s&&s.map(((e,t)=>(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(W,{integrationObj:e})},t)))})]})};function O(e){let{botId:t,organizationId:r,integrations:n}=e,o=null;void 0!==n&&(o=n.find((e=>"CRM_Callback"===e.channelName)));const[i,l]=a.useState(!1),[s,c]=a.useState(!1),d=[{icon:(0,E.jsx)(x.Z,{style:{fill:"#45B735"}}),name:"WhatsApp integration",method:()=>{l(!0)}},{icon:(0,E.jsx)(f.Z,{style:{fill:"#7476EF"}}),name:"Add crm callback url",method:()=>{c(!0)}}];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(L,{ariaLabel:"Upload Training Documents",hidden:!1,icon:(0,E.jsx)(u.Z,{}),direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},children:d.map((e=>(0,E.jsx)(m.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,E.jsx)(_.Z,{openPopUpDialog:i,setPopUpDialog:l,title:"WhatsApp integration",children:(0,E.jsx)(B,{botId:t,organizationId:r,setPopUpDialog:l})}),(0,E.jsx)(_.Z,{openPopUpDialog:s,setPopUpDialog:c,title:"Add CRM callback URL",children:o?"The CRM Callback URL has been successfully configured.":(0,E.jsx)(M,{botId:t,organizationId:r,setPopUpDialog:c})})]})}function W(e){let{integrationObj:t}=e;const[r,n]=(0,a.useState)(!1),[p,h]=(0,a.useState)(!1),u=async e=>{try{await async function(e){await k.Od("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration/").concat(e._id),e);try{await P(e)}catch(t){(0,S.W)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}(e),(0,S.W)(!0,"The crm callback url deleted successfully!","success")}catch(t){(0,S.W)(!0,"Not able to delete the crm callback url. Try after sometime!","error")}},m=async(e,t)=>{let{setErrors:r,setStatus:a,setSubmitting:o}=t;try{await R(e),a({success:!0}),o(!0),(0,S.W)(!0,"The CRM callback url updated successfully!","success"),n(!1)}catch(i){a({success:!1}),r({submit:i.message}),o(!1),(0,S.W)(!0,"Not able to CRM callback url. Try after sometime!","error")}},x=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(t)};let f=null;return"Webchat"===t.channelName?f=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{variant:"h6",children:(0,E.jsx)("strong",{children:"Chat window Script Tag"})}),(0,E.jsx)(i.Z,{variant:"h6",children:t.scriptTag}),(0,E.jsxs)(i.Z,{variant:"h6",children:[(0,E.jsx)("strong",{children:"Integrated At : "}),x(t.integratedAt)]})]}):"CRM_Callback"===t.channelName&&(f=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{variant:"h6",children:(0,E.jsx)("strong",{children:"CRM Callback URL"})}),r?(0,E.jsx)(j.J9,{initialValues:t,validationSchema:v.Ry().shape({callbackURL:v.Z_().matches(/^(https?:\/\/)/,"Enter valid url!").required("CRM Callback URL is required")}),onSubmit:m,children:e=>{let{errors:t,handleBlur:r,handleChange:a,handleSubmit:n,isSubmitting:i,touched:l,values:s}=e;return(0,E.jsx)("form",{noValidate:!0,onSubmit:n,children:(0,E.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,E.jsxs)(o.ZP,{item:!0,xs:10,md:10,children:[(0,E.jsx)(c.Z,{id:"callbackURL",type:"url",defaultValue:s.callbackURL,name:"callbackURL",onBlur:r,onChange:a,fullWidth:!0,autoComplete:"off",error:Boolean(l.callbackURL&&t.callbackURL)}),l.callbackURL&&t.callbackURL&&(0,E.jsx)(d.Z,{error:!0,id:"helper-text-crm-url",children:t.callbackURL})]}),(0,E.jsx)(o.ZP,{item:!0,xs:2,md:2,children:(0,E.jsx)(w.Z,{children:(0,E.jsx)(A.Z,{isLoading:i,disabled:i,color:"primary",size:"large",type:"submit",variant:"contained",children:"Update"})})}),t.submit&&(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(d.Z,{error:!0,children:t.submit})})]})})}}):(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(o.ZP,{container:!0,children:[(0,E.jsx)(o.ZP,{item:!0,children:(0,E.jsx)(i.Z,{variant:"h6",children:t.callbackURL})}),(0,E.jsxs)(o.ZP,{item:!0,display:"flex",justifyContent:"flex-end",children:[(0,E.jsx)(l.Z,{title:"Edit",children:(0,E.jsx)(Z.Z,{sx:{color:"#3386FF"},size:"small",onClick:()=>n(!0),children:(0,E.jsx)(b.Z,{})})}),(0,E.jsx)(l.Z,{title:"Delete",children:(0,E.jsx)(Z.Z,{sx:{color:"#FF5733"},size:"small",onClick:()=>h(!0),children:(0,E.jsx)(g.Z,{})})}),(0,E.jsx)(N.Z,{title:"Delete CRM callback URL?",open:p,setOpen:h,onConfirm:()=>u(t),children:"Confirm the deletion of CRM callback URL."})]})]})}),(0,E.jsxs)(i.Z,{variant:"h6",children:[(0,E.jsx)("strong",{children:"Integrated At : "}),x(t.integratedAt)]})]})),(0,E.jsx)(T.Z,{contentSX:{p:2.25},children:(0,E.jsx)(s.Z,{style:{padding:0},children:f})})}},80730:(e,t,r)=>{r.d(t,{Od:()=>l,TY:()=>d,U2:()=>o,v_:()=>i});var a=r(89637),n=r(32203);async function o(e,t){return s("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return s("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return s("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t,r){let{headers:a,noAuth:n,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;if(t=d(t),r=r&&"object"===typeof r&&i?JSON.stringify(r):void 0,a||(a={}),a["Content-Type"]="application/json",a.Accept="application/json",!1!==n){const e=sessionStorage.getItem("token");e&&(a.Authorization="Bearer ".concat(e))}const l=await fetch(t,{...o,headers:a,body:r,method:e}),s=await l.json();if(l.ok){const{data:e,...t}=s;return delete t.status,e&&!Object.keys(t).length?e:s}throw s.message?new Error(s.message):s}const c=(0,a.lf)(n.Hi,"/");function d(e){return e?e.startsWith("https://")?e:"".concat(c).concat(e):e}},969:(e,t,r)=>{r.d(t,{g:()=>n});var a=r(23509);function n(e){const t=(0,a.tN)((e=>e.selectedBotId)),r=(0,a.tN)((r=>r.botsMap[e||t]));return[e||t,r]}},89637:(e,t,r)=>{function a(e,t){return e.replace(new RegExp("".concat(n(t),"+$")),"")}function n(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),r=t.getDate(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=t.getFullYear();return"".concat(a," ").concat(r,", ").concat(n)}r.d(t,{lf:()=>a,p6:()=>o})},32203:(e,t,r)=>{r.d(t,{Hi:()=>a,LC:()=>l,lB:()=>n,rn:()=>i,yu:()=>o});const a="https://devbackend.livhousing.com",n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,l="https://60f1-203-192-224-75.ngrok-free.app"},2927:(e,t,r)=>{var a=r(64836);t.Z=void 0;var n=a(r(45045)),o=r(46417);t.Z=(0,n.default)([(0,o.jsx)("path",{d:"M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z"},"0"),(0,o.jsx)("path",{d:"M12 18c0-1.1.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2h-2c-1.1 0-2-.9-2-2m8-4h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4"},"1"),(0,o.jsx)("path",{d:"M14 17h6v2h-6z"},"2")],"DatasetLinked")},65954:(e,t,r)=>{var a=r(64836);t.Z=void 0;var n=a(r(45045)),o=r(46417);t.Z=(0,n.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},47597:(e,t,r)=>{var a=r(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,r&&r.set(e,a)}(r(47313));var n=a(r(45045)),o=r(46417);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.Z=(0,n.default)((0,o.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp")},73428:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(87462),n=r(63366),o=r(47313),i=r(94146),l=r(21921),s=r(17592),c=r(77342),d=r(70501),p=r(77430),h=r(32298);function u(e){return(0,h.ZP)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var m=r(46417);const x=["className","raised"],f=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=r,d=(0,n.Z)(r,x),p=(0,a.Z)({},r,{raised:s}),h=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)})(p);return(0,m.jsx)(f,(0,a.Z)({className:(0,i.Z)(h.root,o),elevation:s?8:void 0,ref:t,ownerState:p},d))}))},93405:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(87462),n=r(63366),o=r(47313),i=r(94146),l=r(21921),s=r(17592),c=r(77342),d=r(77430),p=r(32298);function h(e){return(0,p.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var u=r(46417);const m=["className","component"],x=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:s="div"}=r,d=(0,n.Z)(r,m),p=(0,a.Z)({},r,{component:s}),f=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)})(p);return(0,u.jsx)(x,(0,a.Z)({as:s,className:(0,i.Z)(f.root,o),ownerState:p,ref:t},d))}))},54641:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(63366),n=r(87462),o=r(47313),i=r(94146),l=r(21921),s=r(61113),c=r(77342),d=r(17592),p=r(77430),h=r(32298);function u(e){return(0,h.ZP)("MuiCardHeader",e)}const m=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var x=r(46417);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({["& .".concat(m.title)]:t.title,["& .".concat(m.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),v=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:p,component:h="div",disableTypography:m=!1,subheader:v,subheaderTypographyProps:C,title:y,titleTypographyProps:k}=r,S=(0,a.Z)(r,f),P=(0,n.Z)({},r,{component:h,disableTypography:m}),R=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(P);let _=y;null==_||_.type===s.Z||m||(_=(0,x.jsx)(s.Z,(0,n.Z)({variant:d?"body2":"h5",className:R.title,component:"span",display:"block"},k,{children:_})));let T=v;return null==T||T.type===s.Z||m||(T=(0,x.jsx)(s.Z,(0,n.Z)({variant:d?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),(0,x.jsxs)(b,(0,n.Z)({className:(0,i.Z)(R.root,p),as:h,ref:t,ownerState:P},S,{children:[d&&(0,x.jsx)(g,{className:R.avatar,ownerState:P,children:d}),(0,x.jsxs)(j,{className:R.content,ownerState:P,children:[_,T]}),o&&(0,x.jsx)(Z,{className:R.action,ownerState:P,children:o})]}))}))}}]);