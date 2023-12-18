"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[789],{88789:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var n=o(47313),r=o(9019),a=o(61113),i=o(42832),s=o(41806),l=o(50301),c=o(66149),d=o(33604),u=o(96467),h=o(24631),p=o(63366),b=o(87462),m=o(94146),x=o(21921),g=o(17592),v=o(77342),Z=o(77430),f=o(32298);function w(e){return(0,f.Z)("MuiDialogActions",e)}(0,Z.Z)("MuiDialogActions",["root","spacing"]);var j=o(46417);const S=["className","disableSpacing"],y=(0,g.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,b.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),C=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:r=!1}=o,a=(0,p.Z)(o,S),i=(0,b.Z)({},o,{disableSpacing:r}),s=(e=>{const{classes:t,disableSpacing:o}=e,n={root:["root",!o&&"spacing"]};return(0,x.Z)(n,w,t)})(i);return(0,j.jsx)(y,(0,b.Z)({className:(0,m.Z)(s.root,n),ownerState:i,ref:t},a))}));var P=o(31095),F=o(75729),R=o(35272),I=o(91615);function N(e){return(0,f.Z)("MuiFab",e)}const k=(0,Z.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),z=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],M=(0,g.ZP)(R.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["size".concat((0,I.Z)(o.size))],"inherit"===o.color&&t.colorInherit,t[(0,I.Z)(o.size)],t[o.color]]}})((e=>{let{theme:t,ownerState:o}=e;var n,r;return(0,b.Z)({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:null==(n=(r=t.palette).getContrastText)?void 0:n.call(r,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},["&.".concat(k.focusVisible)]:{boxShadow:(t.vars||t).shadows[6]}},"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(e=>{let{theme:t,ownerState:o}=e;return(0,b.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(t.vars||t).palette[o.color]&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}})}),(e=>{let{theme:t}=e;return{["&.".concat(k.disabled)]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}})),D=n.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiFab"}),{children:n,className:r,color:a="default",component:i="button",disabled:s=!1,disableFocusRipple:l=!1,focusVisibleClassName:c,size:d="large",variant:u="circular"}=o,h=(0,p.Z)(o,z),g=(0,b.Z)({},o,{color:a,component:i,disabled:s,disableFocusRipple:l,size:d,variant:u}),Z=(e=>{const{color:t,variant:o,classes:n,size:r}=e,a={root:["root",o,"size".concat((0,I.Z)(r)),"inherit"===t?"colorInherit":t]},i=(0,x.Z)(a,N,n);return(0,b.Z)({},n,i)})(g);return(0,j.jsx)(M,(0,b.Z)({className:(0,m.Z)(Z.root,r),component:i,disabled:s,focusRipple:!l,focusVisibleClassName:(0,m.Z)(Z.focusVisible,c),ownerState:g,ref:t},h,{classes:Z,children:n}))}));var B=o(5211),T=o(52830);const W=function(e){let{onClick:t,...o}=e;const[r,a]=n.useState(!1);return(0,j.jsx)(P.Z,{onClick:e=>{a(!0);const o=t(e);o&&"function"===typeof o.finally?o.finally((()=>a(!1))):a(!1)},disabled:r,...o})};var L=o(45960);const V=()=>{const e=(0,T.tN)((e=>e.botsList));return(0,j.jsxs)(r.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,j.jsx)(r.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:(0,j.jsx)(a.Z,{variant:"h5",children:"Bots List"})}),e.map(((e,t)=>(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,j.jsx)(A,{bot:e})},t))),(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,j.jsx)(_,{index:e.length})}),(0,j.jsx)(r.ZP,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})},A=e=>{let{bot:t}=e;const{color:o,botName:n,createdAt:l}=t;return(0,j.jsxs)(F.Z,{contentSX:{p:2.25},children:[(0,j.jsxs)(i.Z,{spacing:.5,children:[(0,j.jsx)(a.Z,{variant:"h6",color:"textSecondary",children:"Bot Name"}),(0,j.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,j.jsx)(r.ZP,{item:!0,children:(0,j.jsx)(a.Z,{variant:"h4",color:"inherit",children:n})})})]}),(0,j.jsx)(s.Z,{sx:{pt:2.25},children:(0,j.jsxs)(a.Z,{variant:"caption",color:"textSecondary",children:["Created on:"," ",(0,j.jsx)(a.Z,{component:"span",variant:"caption",sx:{color:"".concat(o||"primary",".main")},children:J(l)})]})})]})},_=e=>{let{index:t}=e;return(0,j.jsx)(F.Z,{contentSX:{p:2.25},children:(0,j.jsxs)(i.Z,{spacing:.5,children:[(0,j.jsx)(a.Z,{variant:"h6",color:"textSecondary",children:t?"Create a new Bot":"Create your first Bot"}),(0,j.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,j.jsx)(r.ZP,{item:!0,children:(0,j.jsx)(q,{})})})]})})},H=n.forwardRef((function(e,t){return(0,j.jsx)(l.Z,{direction:"up",ref:t,...e})}));function q(){const[e,t]=(0,n.useState)(""),[o,r]=n.useState(!1),i=()=>r(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{color:"primary","aria-label":"add",size:"small",onClick:()=>r(!0),children:(0,j.jsx)(B.Z,{})}),(0,j.jsxs)(c.Z,{open:o,TransitionComponent:H,keepMounted:!0,onClose:i,maxWidth:"md",children:[(0,j.jsx)(d.Z,{children:(0,j.jsx)(a.Z,{variant:"h4",color:"inherit",children:"Create New Bot"})}),(0,j.jsx)(u.Z,{children:(0,j.jsx)(h.Z,{autoFocus:!0,margin:"dense",type:"text",id:"botName",label:"New Bot Name",fullWidth:!0,variant:"standard",onChange:e=>t(e.target.value)})}),(0,j.jsxs)(C,{children:[(0,j.jsx)(P.Z,{onClick:i,children:"Cancel"}),(0,j.jsx)(W,{variant:"contained",onClick:async()=>{await(0,L.lz)(e),i()},children:"Create"})]})]})]})}function J(e){const t=new Date(e),o=t.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getFullYear();return"".concat(n," ").concat(o,", ").concat(r)}},45960:(e,t,o)=>{o.d(t,{Bc:()=>i,lz:()=>a,pb:()=>s});var n=o(69753),r=o(52830);async function a(e){const{organization:{websiteUrl:t,_id:o}}=r.tN.getState(),a={organizationId:o,websiteUrl:t,botName:e,botDesign:{botLogo:{name:"",url:""},backgroundColor:"coral",textColor:"#fff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};l(await n.v("/bot/initialize-create-bot",a))}async function i(e,t){let{botDesign:o}=r.tN.getState();o={...o,...t};l(await n.v("/bot/save-bot-design",{botDesign:o},{headers:{botId:e}}))}async function s(e,t){let{botSettings:o}=r.tN.getState();o={...botDesign,...t};l(await n.v("/bot/save-bot-settings",{botSettings:o},{headers:{botId:e}}))}function l(e){const t=e._id;let{botsMap:o,botsList:n}=r.tN.getState();o={...o,[t]:e},n=[...n];const a=n.findIndex((e=>e._id===t));a>=0?n[a]=e:n.push(e),r.tN.setState({selectedBotId:t,botsMap:o,botsList:n})}},5211:(e,t,o)=>{var n=o(64836);t.Z=void 0;var r=n(o(45045)),a=o(46417),i=(0,r.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},24631:(e,t,o)=>{o.d(t,{Z:()=>C});var n=o(87462),r=o(63366),a=o(47313),i=o(94146),s=o(21921),l=o(28334),c=o(17592),d=o(77342),u=o(42461),h=o(47482),p=o(37843),b=o(23306),m=o(1550),x=o(15480),g=o(24256),v=o(77430),Z=o(32298);function f(e){return(0,Z.Z)("MuiTextField",e)}(0,v.Z)("MuiTextField",["root"]);var w=o(46417);const j=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],S={standard:u.Z,filled:h.Z,outlined:p.Z},y=(0,c.ZP)(m.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),C=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:c=!1,children:u,className:h,color:p="primary",defaultValue:m,disabled:v=!1,error:Z=!1,FormHelperTextProps:C,fullWidth:P=!1,helperText:F,id:R,InputLabelProps:I,inputProps:N,InputProps:k,inputRef:z,label:M,maxRows:D,minRows:B,multiline:T=!1,name:W,onBlur:L,onChange:V,onFocus:A,placeholder:_,required:H=!1,rows:q,select:J=!1,SelectProps:O,type:U,value:X,variant:Y="outlined"}=o,E=(0,r.Z)(o,j),G=(0,n.Z)({},o,{autoFocus:c,color:p,disabled:v,error:Z,fullWidth:P,multiline:T,required:H,select:J,variant:Y}),K=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},f,t)})(G);const Q={};"outlined"===Y&&(I&&"undefined"!==typeof I.shrink&&(Q.notched=I.shrink),Q.label=M),J&&(O&&O.native||(Q.id=void 0),Q["aria-describedby"]=void 0);const $=(0,l.Z)(R),ee=F&&$?"".concat($,"-helper-text"):void 0,te=M&&$?"".concat($,"-label"):void 0,oe=S[Y],ne=(0,w.jsx)(oe,(0,n.Z)({"aria-describedby":ee,autoComplete:a,autoFocus:c,defaultValue:m,fullWidth:P,multiline:T,name:W,rows:q,maxRows:D,minRows:B,type:U,value:X,id:$,inputRef:z,onBlur:L,onChange:V,onFocus:A,placeholder:_,inputProps:N},Q,k));return(0,w.jsxs)(y,(0,n.Z)({className:(0,i.Z)(K.root,h),disabled:v,error:Z,fullWidth:P,ref:t,required:H,color:p,variant:Y,ownerState:G},E,{children:[null!=M&&""!==M&&(0,w.jsx)(b.Z,(0,n.Z)({htmlFor:$,id:te},I,{children:M})),J?(0,w.jsx)(g.Z,(0,n.Z)({"aria-describedby":ee,id:$,labelId:te,value:X,input:ne},O,{children:u})):ne,F&&(0,w.jsx)(x.Z,(0,n.Z)({id:ee},C,{children:F}))]}))}))}}]);