"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[3917],{32829:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(25371),r=n(44414);function o(e){let{children:t,type:n}=e;return(0,r.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}o.defaultProps={type:"scale"}},46278:(e,t,n)=>{n.d(t,{A:()=>c});n(9950);var i=n(63464),r=n(40033),o=n(28170),a=n(79739),l=n(10226),s=n(44414);const c=e=>{const{title:t,children:n,open:c,setOpen:d,onConfirm:p}=e;return(0,s.jsxs)(i.A,{open:c,onClose:()=>d(!1),style:{zIndex:1e4},children:[(0,s.jsx)(r.A,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,s.jsx)(o.A,{dividers:!0,children:n}),(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>d(!1),children:"No"}),(0,s.jsx)(l.A,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{d(!1),p()},children:"Yes"})]})]})}},92728:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(9950),r=n(48205),o=n(44414);const a=i.forwardRef((function(e,t){return(0,o.jsx)(r.A,{direction:"up",ref:t,...e})}))},51637:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(9950),r=n(14857),o=n(48089),a=n(45180),l=n(82053),s=n(50704),c=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},p=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:p,content:h=!0,contentSX:u={},darkTitle:m,elevation:x,secondary:A,shadow:j,sx:b={},title:g,...f}=e;const y=(0,r.A)();return i="dark"===y.palette.mode?i||!0:i,(0,c.jsxs)(o.A,{elevation:x||0,ref:t,...f,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===y.palette.mode?y.palette.divider:y.palette.grey.A800,boxShadow:!i||n&&"dark"!==y.palette.mode?"inherit":j||y.customShadows.z1,":hover":{boxShadow:i?j||y.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:y.typography.fontFamily,fontSize:"0.75rem"},...b},children:[!m&&g&&(0,c.jsx)(a.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:g,action:A}),m&&g&&(0,c.jsx)(a.A,{sx:d,title:(0,c.jsx)(l.A,{variant:"h3",children:g}),action:A}),h&&(0,c.jsx)(s.A,{sx:u,children:p}),!h&&p]})}))},26092:(e,t,n)=>{n.d(t,{A:()=>u});n(9950);var i=n(92728),r=n(63464),o=n(40033),a=n(28170),l=n(96319),s=n(59254),c=n(14857),d=n(25333),p=n(44414);const h=(0,s.Ay)(r.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function u(e){const t=(0,c.A)(),{breakpoints:n}=t,{openPopUpDialog:r,setPopUpDialog:s,onClose:u=(()=>s(!1)),title:m,width:x="70%"}=e;return(0,p.jsxs)(h,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:r,PaperProps:{sx:{width:{width:x},[n.down("sm")]:{width:"90%"}}},children:[(0,p.jsx)(o.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:m}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:u,sx:{position:"absolute",right:8,top:8},children:(0,p.jsx)(l.A,{})}),(0,p.jsx)(a.A,{dividers:!0,children:e.children})]})}},93383:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(9950),r=n(10226),o=n(46639),a=n(44414);const l=function(e){let{onClick:t,disabled:n,isLoading:l,children:s,...c}=e;const[d,p]=i.useState(l);return(0,a.jsxs)(r.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(p(!0),n.finally((()=>p(!1))))},disabled:d||l||n,...c,children:[(d||l)&&(0,a.jsx)(o.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},23917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var i=n(9950),r=n(16491),o=n(60899),a=n(82053),l=n(10226),s=n(53065),c=n(2660),d=n(24516),p=n(50704),h=n(59254),u=n(80417),m=n(79046),x=n(33092),A=n(92613),j=n(15942),b=n(7999),g=n(57988),f=n(25333),y=n(69935),I=n(61467),k=n(29714),C=n(33340),v=n(70855),S=n(8478),U=n(58178);async function w(e){const t=await S.Jt("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration/list")),{botId:n}=e;((e,t)=>{C.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,integrations:t}:n));return{...n,botsList:i}}))})(n,t)}async function N(e){const t=await S.bE("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration"),e),n={organizationId:t.organizationId,botId:t.botId};try{await w(n)}catch(i){(0,U.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}async function T(e){const{organizationId:t,selectedBotId:n}=C.nc.getState();await S.bE("/integrations/".concat(t,"/").concat(n,"/whatsapp"),e);try{await w({organizationId:t,botId:n})}catch(i){(0,U.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}var _=n(95189),R=n.n(_),D=n(26092),E=n(51637),P=n(46278),B=n(32829),z=n(93383),L=n(93230),W=n(3788),F=n(44414);const H=function(e){let{botId:t,organizationId:n,setPopUpDialog:i}=e;return(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(I.l1,{initialValues:{crmCallBackUrl:""},validationSchema:k.Ik().shape({crmCallBackUrl:k.Yj().url("Enter valid url!").required("CRM Callback URL is required")}),onSubmit:async(e,r)=>{let{setErrors:o,setStatus:a,setSubmitting:l}=r;try{const r={botId:t,organizationId:n,callbackURL:e.crmCallBackUrl,channelId:"CRM_Callback_123",channelName:"CRM_Callback"};await N(r),a({success:!0}),l(!0),i(!1),(0,U.i)(!0,"The CRM callback url added successfully!","success")}catch(s){a({success:!1}),o({submit:s.message}),l(!1),(0,U.i)(!0,"Not able to CRM callback url. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:r,isSubmitting:a,touched:l,values:s}=e;return(0,F.jsx)("form",{noValidate:!0,onSubmit:r,children:(0,F.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,F.jsx)(o.Ay,{item:!0,xs:12,md:12,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"email-login",children:"CRM callback URL"}),(0,F.jsx)(c.A,{id:"crmCallBackUrl",type:"url",defaultValue:s.crmCallBackUrl,name:"crmCallBackUrl",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(l.crmCallBackUrl&&t.crmCallBackUrl)}),l.crmCallBackUrl&&t.crmCallBackUrl&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-crm-url",children:t.crmCallBackUrl})]})}),t.submit&&(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(d.A,{error:!0,children:t.submit})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,F.jsx)(B.A,{children:(0,F.jsx)(z.A,{isLoading:a,disabled:a,color:"primary",size:"large",type:"submit",variant:"contained",children:"Add"})})})]})})}})})};var O=n(44364),M=n(32026);const V=function(e){let{botId:t,organizationId:n,setPopUpDialog:i,whatsappIntegrationObj:r,edit:a}=e;return(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(I.l1,{initialValues:{webHookUrl:"".concat(O.DX,"/whatsapp/").concat(n,"/").concat(t,"/entrypoint"),webHookSecret:(0,M.qW)(n,t),appId:(null===r||void 0===r?void 0:r.appId)||"",appSecret:(null===r||void 0===r?void 0:r.appSecret)||"",appName:(null===r||void 0===r?void 0:r.appName)||"",phoneNumberId:(null===r||void 0===r?void 0:r.phoneNumberId)||"",verificationToken:(null===r||void 0===r?void 0:r.verificationToken)||"",channelId:"whatsapp_123",channelName:"whatsapp"},validationSchema:k.Ik().shape({appId:k.ai().required("App ID must be a number"),appSecret:k.Yj().required("App secret is required"),appName:k.Yj().required("App name is required"),phoneNumberId:k.ai().min(10,"Please enter a valid phone number id").required("Phone number is required"),verificationToken:k.Yj().required("verification Token  is required")}),onSubmit:async(e,t)=>{let{setErrors:n,setStatus:o,setSubmitting:a}=t;try{let t=e;const n=null===r||void 0===r?void 0:r._id;n&&(t={...e,objId:n}),await T(t),o({success:!0}),a(!0),i(!1),(0,U.i)(!0,"The WhatsApp integration added successfully!","success")}catch(l){o({success:!1}),n({submit:l.message}),a(!1),(0,U.i)(!0,"Not able to activate WhatsApp integration. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:r,isSubmitting:l,touched:s,values:p}=e;return(0,F.jsx)("form",{noValidate:!0,onSubmit:r,children:(0,F.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"webhook-url",children:"Webhook Callback URL *"}),(0,F.jsx)(R(),{text:p.webHookUrl,onCopy:()=>(0,U.i)(!0,"Webhook Callback URL copied to clipboard","success"),children:(0,F.jsx)(c.A,{id:"webHookUrl",type:"url",defaultValue:p.webHookUrl,name:"webHookUrl",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.webHookUrl&&t.webHookUrl)})}),s.webHookUrl&&t.webHookUrl&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-webHookUrl",children:t.webHookUrl})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"webHookSecret",children:"Webhook Verify Token *"}),(0,F.jsx)(R(),{text:p.webHookSecret,onCopy:()=>(0,U.i)(!0,"Webhook Verify Token copied to clipboard","success"),children:(0,F.jsx)(c.A,{id:"webHookSecret",type:"url",defaultValue:p.webHookSecret,name:"webHookSecret",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.webHookSecret&&t.webHookSecret)})}),s.webHookSecret&&t.webHookSecret&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-webHookSecret",children:t.webHookSecret})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"app-id",children:"App ID *"}),(0,F.jsx)(c.A,{id:"appId",type:"url",defaultValue:p.appId,name:"appId",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.appId&&t.appId)}),s.appId&&t.appId&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-appId",children:t.appId})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"app-secret",children:"App Secret *"}),(0,F.jsx)(c.A,{id:"appSecret",type:"url",defaultValue:p.appSecret,name:"appSecret",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.appSecret&&t.appSecret)}),s.appSecret&&t.appSecret&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-appSecret",children:t.appSecret})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"app-name",children:"App Name *"}),(0,F.jsx)(c.A,{id:"appName",type:"url",defaultValue:p.appName,name:"appName",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.appName&&t.appName)}),s.appName&&t.appName&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-appName",children:t.appName})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"phone-number",children:"Phone Number ID *"}),(0,F.jsx)(c.A,{id:"phoneNumberId",type:"text",defaultValue:p.phoneNumberId,name:"phoneNumberId",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.phoneNumberId&&t.phoneNumberId)}),s.phoneNumberId&&t.phoneNumberId&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-phoneNumberId",children:t.phoneNumberId})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"verification-token",children:"Access Token *"}),(0,F.jsx)(c.A,{id:"verificationToken",type:"phone",defaultValue:p.verificationToken,name:"verificationToken",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.verificationToken&&t.verificationToken)}),s.verificationToken&&t.verificationToken&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-verificationToken",children:t.verificationToken})]})}),t.submit&&(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(d.A,{error:!0,children:t.submit})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,F.jsx)(B.A,{children:(0,F.jsx)(z.A,{isLoading:l,disabled:l,color:"primary",size:"large",type:"submit",variant:"contained",children:a?"Edit":"Add"})})})]})})}})})};const q=function(){const e=(0,C.nc)((e=>{var t;return null===(t=e.organization)||void 0===t?void 0:t.admins}));return(0,F.jsx)(E.A,{contentSX:{p:2.25},children:(0,F.jsxs)(p.A,{style:{padding:0},children:[(0,F.jsx)(a.A,{variant:"h6",children:(0,F.jsx)("strong",{children:"Lead emails are sending to below given email ids"})}),e&&e.map(((e,t)=>(0,F.jsx)(o.Ay,{item:!0,xs:12,children:e.email},t))),(0,F.jsx)(o.Ay,{})]})})};const G=function(e){let{botId:t,organizationId:n,setPopUpDialog:i,gupshupIntegrationObj:r,edit:a}=e;return(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(I.l1,{initialValues:{webHookUrl:"".concat(O.DX,"/gupshup/").concat(n,"/").concat(t,"/entrypoint"),appId:(null===r||void 0===r?void 0:r.appId)||"",appName:(null===r||void 0===r?void 0:r.appName)||"",phoneNumberId:(null===r||void 0===r?void 0:r.phoneNumberId)||"",channelId:"gupshup_123",channelName:"gupshup"},validationSchema:k.Ik().shape({appId:k.Yj().required("App ID must is required"),appName:k.Yj().required("App name is required"),phoneNumberId:k.ai().min(10,"Please enter a valid phone number id").required("Phone number is required")}),onSubmit:async(e,t)=>{let{setErrors:n,setStatus:o,setSubmitting:a}=t;try{let t=e;const n=null===r||void 0===r?void 0:r._id;r&&(t={...e,objId:n}),await T(t),o({success:!0}),a(!0),i(!1),(0,U.i)(!0,"The Gupshup integration added successfully!","success")}catch(l){o({success:!1}),n({submit:l.message}),a(!1),(0,U.i)(!0,"Not able to activate Gupshup integration. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:r,isSubmitting:l,touched:s,values:p}=e;return(0,F.jsx)("form",{noValidate:!0,onSubmit:r,children:(0,F.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"webhook-url",children:"Gupshup Callback URL *"}),(0,F.jsx)(R(),{text:p.webHookUrl,onCopy:()=>(0,U.i)(!0,"Webhook Callback URL copied to clipboard","success"),children:(0,F.jsx)(c.A,{id:"webHookUrl",type:"url",defaultValue:p.webHookUrl,name:"webHookUrl",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.webHookUrl&&t.webHookUrl)})}),s.webHookUrl&&t.webHookUrl&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-webHookUrl",children:t.webHookUrl})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"app-id",children:"Gupshup App ID *"}),(0,F.jsx)(c.A,{id:"appId",type:"appId",defaultValue:p.appId,name:"appId",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.appId&&t.appId)}),s.appId&&t.appId&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-appId",children:t.appId})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"app-name",children:"Gupshup App Name *"}),(0,F.jsx)(c.A,{id:"appName",type:"url",defaultValue:p.appName,name:"appName",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.appName&&t.appName)}),s.appName&&t.appName&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-appName",children:t.appName})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,F.jsxs)(L.A,{spacing:1,children:[(0,F.jsx)(W.A,{htmlFor:"phone-number",children:"Phone Number *"}),(0,F.jsx)(c.A,{id:"phoneNumberId",type:"number",defaultValue:p.phoneNumberId,name:"phoneNumberId",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.phoneNumberId&&t.phoneNumberId)}),s.phoneNumberId&&t.phoneNumberId&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-phoneNumberId",children:t.phoneNumberId})]})}),t.submit&&(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(d.A,{error:!0,children:t.submit})}),(0,F.jsx)(o.Ay,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,F.jsx)(B.A,{children:(0,F.jsx)(z.A,{isLoading:l,disabled:l,color:"primary",size:"large",type:"submit",variant:"contained",children:a?"Edit":"Add"})})})]})})}})})},K=(0,h.Ay)(u.A)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));const Y=function(){var e;const[t]=(0,v.G)(),n=(0,C.nc)((e=>e.botsList)),l=(0,C.nc)((e=>e.organizationId)),s=(0,C.nc)((e=>e.isSuperUser));i.useEffect((()=>{(async()=>{const e={organizationId:l,botId:t};try{await w(e)}catch(n){(0,U.i)(!0,"Not able to fetch integrations details. Try after sometime!","error")}})()}),[t,l]);const c=null===(e=n.find((e=>e._id===t)))||void 0===e?void 0:e.integrations;return(0,F.jsxs)(r.A,{children:[(0,F.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,F.jsxs)(o.Ay,{item:!0,xs:11,children:[(0,F.jsx)(a.A,{variant:"h5",children:"Integrations"}),(0,F.jsx)("br",{})]}),(0,F.jsx)(o.Ay,{item:!0,xs:1,sx:{position:"relative"},id:"trainingDocumentsSpeedDial",children:(0,F.jsx)(X,{botId:t,organizationId:l,integrations:c})})]}),(0,F.jsxs)(o.Ay,{container:!0,spacing:3,children:[c&&c.map(((e,t)=>(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(J,{integrationObj:e})},t))),s&&(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(q,{})})]})]})};function X(e){let{botId:t,organizationId:n,integrations:r}=e;const o=(0,C.nc)((e=>e.isSuperUser));let a=null,l=null,s=null;void 0!==r&&(a=r.find((e=>"CRM_Callback"===e.channelName)),l=r.find((e=>"whatsapp"===e.channelName)),s=r.find((e=>"gupshup"===e.channelName)));const[c,d]=i.useState(!1),[p,h]=i.useState(!1),[u,b]=i.useState(!1),g=[{icon:(0,F.jsx)(A.A,{style:{fill:"#45B735"}}),name:"WhatsApp integration",method:()=>{d(!0)}},{icon:(0,F.jsx)(j.A,{style:{fill:"#7476EF"}}),name:"Add crm callback url",method:()=>{h(!0)}},{icon:(0,F.jsx)(A.A,{style:{fill:"#7476EF"}}),name:"Gupshup Integration",method:()=>{b(!0)}}],f=o?g:g.filter((e=>"Gupshup Integration"!==e.name));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(K,{ariaLabel:"Upload Training Documents",hidden:!1,icon:(0,F.jsx)(m.A,{}),direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},children:f.map((e=>(0,F.jsx)(x.A,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,F.jsx)(D.A,{openPopUpDialog:c,setPopUpDialog:d,title:"WhatsApp integration",children:l?"The Whatsapp integration already configured.":(0,F.jsx)(V,{botId:t,organizationId:n,setPopUpDialog:d})}),(0,F.jsx)(D.A,{openPopUpDialog:p,setPopUpDialog:h,title:"Add CRM callback URL",children:a?"The CRM Callback URL has been successfully configured.":(0,F.jsx)(H,{botId:t,organizationId:n,setPopUpDialog:h})}),(0,F.jsx)(D.A,{openPopUpDialog:u,setPopUpDialog:b,title:"Gupshup integration",children:s?"The Gupshup integration already configured.":(0,F.jsx)(G,{botId:t,organizationId:n,setPopUpDialog:d})})]})}function J(e){let{integrationObj:t}=e;const[n,r]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[m,x]=(0,i.useState)(!1),[A,j]=(0,i.useState)(!1),C=async(e,t)=>{try{await async function(e){await S.TF("/integrations/".concat(e.organizationId,"/").concat(e.botId,"/crm-callback-integration/").concat(e._id),e);try{await w(e)}catch(t){(0,U.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}(e),(0,U.i)(!0,"The  ".concat(t," deleted successfully!"),"success")}catch(n){(0,U.i)(!0,"Not able to delete the ".concat(t,". Try after sometime!"),"error")}},v=async(e,t)=>{let{setErrors:n,setStatus:i,setSubmitting:o}=t;try{await N(e),i({success:!0}),o(!0),(0,U.i)(!0,"The CRM callback url updated successfully!","success"),r(!1)}catch(a){i({success:!1}),n({submit:a.message}),o(!1),(0,U.i)(!0,"Not able to update CRM callback url. Try after sometime!","error")}},T=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(t)};let R=null;"Webchat"===t.channelName&&(R=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a.A,{variant:"h5",children:(0,F.jsx)("strong",{children:"Chat window Script Tag"})}),(0,F.jsxs)(o.Ay,{container:!0,children:[(0,F.jsx)(o.Ay,{item:!0,xs:10,md:10,children:(0,F.jsx)(a.A,{variant:"h6",children:t.scriptTag})}),(0,F.jsx)(o.Ay,{children:(0,F.jsx)(B.A,{children:(0,F.jsx)(l.A,{startIcon:(0,F.jsx)(y.A,{}),variant:"outlined",size:"medium",children:(0,F.jsx)(_.CopyToClipboard,{text:t.scriptTag,onCopy:()=>(0,U.i)(!0,"chat script copied to clipboard","success"),children:(0,F.jsx)("span",{children:"Copy"})})})})})]}),(0,F.jsxs)(a.A,{variant:"h6",children:[(0,F.jsx)("strong",{children:"Integrated At : "}),T(t.integratedAt)]})]}));const L={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"500px",display:"inline-block",verticalAlign:"bottom"};if("whatsapp"===t.channelName){const e="".concat(O.DX,"/whatsapp/").concat(t.organizationId,"/").concat(t.botId,"/entrypoint"),n=(0,M.qW)(t.organizationId,t.botId);R=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(o.Ay,{container:!0,children:[(0,F.jsx)(o.Ay,{item:!0,children:(0,F.jsx)(a.A,{variant:"h5",children:(0,F.jsx)("strong",{children:"WhatsApp Integration"})})}),(0,F.jsxs)(o.Ay,{item:!0,children:[(0,F.jsx)(s.A,{title:"Edit",children:(0,F.jsx)(f.A,{sx:{color:"#3386FF"},size:"small",onClick:()=>u(!0),children:(0,F.jsx)(b.A,{})})}),(0,F.jsx)(s.A,{title:"Delete",children:(0,F.jsx)(f.A,{sx:{color:"#FF5733"},size:"small",onClick:()=>j(!0),children:(0,F.jsx)(g.A,{})})}),(0,F.jsx)(P.A,{title:"Delete Whatsapp integration?",open:A,setOpen:j,onConfirm:()=>C(t,"Whatsapp integration"),children:"Confirm the deletion of Whatsapp integration."})]})]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"App Name :"})," ",t.appName]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"App Id :"})," ",t.appId]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"Phone Number ID :"})," ",t.phoneNumberId]}),(0,F.jsx)("div",{children:(0,F.jsx)(_.CopyToClipboard,{text:e,onCopy:()=>(0,U.i)(!0,"Web hook callback url copied to clipboard","success"),children:(0,F.jsxs)("span",{children:[(0,F.jsx)("strong",{children:"Webhook Callback Url : "})," ",(0,F.jsx)("div",{style:L,children:e})," ",(0,F.jsx)(s.A,{title:"Copy",children:(0,F.jsx)(y.A,{style:{cursor:"pointer",fontSize:"14px"}})})]})})}),(0,F.jsxs)("div",{children:[(0,F.jsx)("strong",{children:"Verification Token : "})," ",(0,F.jsx)("div",{style:L,children:n})," ",(0,F.jsx)(_.CopyToClipboard,{text:n,onCopy:()=>(0,U.i)(!0,"Web hook callback url verification token copied to clipboard","success"),children:(0,F.jsx)(s.A,{title:"Copy",children:(0,F.jsx)(y.A,{style:{cursor:"pointer",fontSize:"14px"}})})})]}),(0,F.jsxs)(a.A,{variant:"h6",children:[(0,F.jsx)("strong",{children:"Integrated At : "}),T(t.integratedAt)]}),h&&(0,F.jsx)(D.A,{openPopUpDialog:h,setPopUpDialog:u,title:"Update WhatsApp integration",children:(0,F.jsx)(V,{botId:t.botId,organizationId:t.organizationId,setPopUpDialog:u,whatsappIntegrationObj:t,edit:!0})})]})}else if("gupshup"===t.channelName){const e="".concat(O.DX,"/whatsapp/").concat(t.organizationId,"/").concat(t.botId,"/entrypoint");R=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(o.Ay,{container:!0,children:[(0,F.jsx)(o.Ay,{item:!0,children:(0,F.jsx)(a.A,{variant:"h5",children:(0,F.jsx)("strong",{children:"Gupshup Integration"})})}),(0,F.jsxs)(o.Ay,{item:!0,children:[(0,F.jsx)(s.A,{title:"Edit",children:(0,F.jsx)(f.A,{sx:{color:"#3386FF"},size:"small",onClick:()=>x(!0),children:(0,F.jsx)(b.A,{})})}),(0,F.jsx)(s.A,{title:"Delete",children:(0,F.jsx)(f.A,{sx:{color:"#FF5733"},size:"small",onClick:()=>j(!0),children:(0,F.jsx)(g.A,{})})}),(0,F.jsx)(P.A,{title:"Delete Gupshup integration?",open:A,setOpen:j,onConfirm:()=>C(t,"Gupshup integration"),children:"Confirm the deletion of Gupshup integration."})]})]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"App Name :"})," ",t.appName]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"App Id :"})," ",t.appId]}),(0,F.jsxs)(a.A,{children:[(0,F.jsx)("strong",{children:"Phone Number :"})," ",t.phoneNumberId]}),(0,F.jsx)("div",{children:(0,F.jsx)(_.CopyToClipboard,{text:e,onCopy:()=>(0,U.i)(!0,"Web hook callback url copied to clipboard","success"),children:(0,F.jsxs)("span",{children:[(0,F.jsx)("strong",{children:"Webhook Callback Url : "})," ",(0,F.jsx)("div",{style:L,children:e})," ",(0,F.jsx)(s.A,{title:"Copy",children:(0,F.jsx)(y.A,{style:{cursor:"pointer",fontSize:"14px"}})})]})})}),(0,F.jsxs)(a.A,{variant:"h6",children:[(0,F.jsx)("strong",{children:"Integrated At : "}),T(t.integratedAt)]}),m&&(0,F.jsx)(D.A,{openPopUpDialog:m,setPopUpDialog:x,title:"Update Gupshup integration",children:(0,F.jsx)(G,{botId:t.botId,organizationId:t.organizationId,setPopUpDialog:x,gupshupIntegrationObj:t,edit:!0})})]})}else"CRM_Callback"===t.channelName&&(R=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a.A,{variant:"h6",children:(0,F.jsx)("strong",{children:"CRM Callback URL"})}),n?(0,F.jsx)(I.l1,{initialValues:t,validationSchema:k.Ik().shape({callbackURL:k.Yj().url("Enter valid url!").required("CRM Callback URL is required")}),onSubmit:v,children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:r,isSubmitting:a,touched:l,values:s}=e;return(0,F.jsx)("form",{noValidate:!0,onSubmit:r,children:(0,F.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,F.jsxs)(o.Ay,{item:!0,xs:10,md:10,children:[(0,F.jsx)(c.A,{id:"callbackURL",type:"url",defaultValue:s.callbackURL,name:"callbackURL",onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(l.callbackURL&&t.callbackURL)}),l.callbackURL&&t.callbackURL&&(0,F.jsx)(d.A,{error:!0,id:"helper-text-crm-url",children:t.callbackURL})]}),(0,F.jsx)(o.Ay,{item:!0,xs:2,md:2,children:(0,F.jsx)(B.A,{children:(0,F.jsx)(z.A,{isLoading:a,disabled:a,color:"primary",size:"large",type:"submit",variant:"contained",children:"Update"})})}),t.submit&&(0,F.jsx)(o.Ay,{item:!0,xs:12,children:(0,F.jsx)(d.A,{error:!0,children:t.submit})})]})})}}):(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(o.Ay,{container:!0,children:[(0,F.jsx)(o.Ay,{item:!0,xs:10,md:10,children:(0,F.jsxs)(o.Ay,{container:!0,children:[(0,F.jsx)(o.Ay,{item:!0,children:(0,F.jsx)(a.A,{variant:"h6",children:t.callbackURL})}),(0,F.jsxs)(o.Ay,{item:!0,display:"flex",justifyContent:"flex-end",children:[(0,F.jsx)(s.A,{title:"Edit",children:(0,F.jsx)(f.A,{sx:{color:"#3386FF"},size:"small",onClick:()=>r(!0),children:(0,F.jsx)(b.A,{})})}),(0,F.jsx)(s.A,{title:"Delete",children:(0,F.jsx)(f.A,{sx:{color:"#FF5733"},size:"small",onClick:()=>j(!0),children:(0,F.jsx)(g.A,{})})}),(0,F.jsx)(P.A,{title:"Delete CRM callback URL?",open:A,setOpen:j,onConfirm:()=>C(t,"crm callback url"),children:"Confirm the deletion of CRM callback URL."})]})]})}),(0,F.jsx)(o.Ay,{item:!0,xs:2,md:2,children:(0,F.jsx)(B.A,{children:(0,F.jsx)(l.A,{startIcon:(0,F.jsx)(y.A,{}),variant:"outlined",size:"medium",children:(0,F.jsx)(_.CopyToClipboard,{text:t.callbackURL,onCopy:()=>(0,U.i)(!0,"CRM callback URL copied to clipboard","success"),children:(0,F.jsx)("span",{children:"Copy"})})})})})]})}),(0,F.jsxs)(a.A,{variant:"h6",children:[(0,F.jsx)("strong",{children:"Integrated At : "}),T(t.integratedAt)]})]}));return(0,F.jsx)(E.A,{contentSX:{p:2.25},children:(0,F.jsx)(p.A,{style:{padding:0},children:R})})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>o,TF:()=>s,bE:()=>a,yJ:()=>l});var i=n(32026),r=n(44364);async function o(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,n){let{headers:i,noAuth:r,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}if(e.startsWith("https://"))return e;return"".concat(d).concat(e)}(t,a?void 0:n);const l=n instanceof FormData;if(l||(n=n&&"object"===typeof n&&a?JSON.stringify(n):void 0),i||(i={}),l||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const r=await fetch(t,{...o,headers:i,body:n,method:e}),a=await r.json();if(r.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(c){var s;throw console.error("Error calling API: ",c),null!==(s=c.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,i.s8)(r.jn,"/")},70855:(e,t,n)=>{n.d(t,{G:()=>r});var i=n(33340);function r(e){const t=(0,i.nc)((e=>e.selectedBotId)),n=(0,i.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(r(t),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(r)}function a(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),o=t.substring(0,r),l=t.substring(r+1);i[o]=a(e[o],l,n)}else i[t]=n;return i}function l(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function c(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),o=t.substring(0,r),a=t.substring(r+1);i[o]=c(e[o],a,n)}else i[t]=n;return i}n.d(t,{G6:()=>a,OX:()=>s,Yq:()=>o,do:()=>c,qW:()=>l,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>l,Og:()=>o,jn:()=>i,pA:()=>a,pR:()=>r});const i="https://devbackend.livhousing.com:444",r="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"}}]);