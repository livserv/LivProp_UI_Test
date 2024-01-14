"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[700],{88983:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(93701),o=i(46417);function r(e){let{children:t,type:i}=e;return(0,o.jsx)(n.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},61489:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(47313),o=i(50301),r=i(46417);const s=n.forwardRef((function(e,t){return(0,r.jsx)(o.Z,{direction:"up",ref:t,...e})}))},46538:(e,t,i)=>{i.d(t,{Z:()=>p});i(47313);var n=i(61489),o=i(66149),r=i(33604),s=i(96467),a=i(11198),l=i(17592),c=i(19860),d=i(47131),h=i(46417);const u=(0,l.ZP)(o.Z)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function p(e){const t=(0,c.Z)(),{breakpoints:i}=t,{openPopUpDialog:o,setPopUpDialog:l,title:p}=e;return(0,h.jsxs)(u,{TransitionComponent:n.Z,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:"60%",[i.down("sm")]:{width:"90%"}}},children:[(0,h.jsx)(r.Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:p}),(0,h.jsx)(d.Z,{"aria-label":"close",onClick:()=>{l(!1)},sx:{position:"absolute",right:8,top:8},children:(0,h.jsx)(a.Z,{})}),(0,h.jsx)(s.Z,{dividers:!0,children:e.children})]})}},66578:(e,t,i)=>{i.d(t,{Z:()=>s});i(47313);var n=i(31095),o=i(85281),r=i(46417);const s=e=>{let{isLoading:t,children:i,...s}=e;return(0,r.jsx)(n.Z,{...s,children:t?(0,r.jsx)(o.Z,{size:25,color:"primary"}):i})}},24700:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var n=i(47313),o=i(41806),r=i(9019),s=i(61113),a=i(31095),l=i(42832),c=i(23306),d=i(37843),h=i(21933),u=i(24977),p=i(15480),x=i(66149),g=i(33604),m=i(4117),f=i(23509),v=i(86043),Z=i(51997),b=i(65954),j=i(47131),S=i(89994),_=i(11623),C=i(19536),w=i(88983),A=i(66578),P=i(969),y=i(29210),R=i(70246),E=i(11686),D=i(86426),I=i(14487),T=i(17592),L=i(32203),z=i(2316),O=i(62619),N=i(46538),k=i(46417);const F=()=>h.Z_().required("This field is required"),U=h.Ry().shape({question:F(),content:F()});const M=function(){var e;const t=(0,f.tN)((e=>e.organizationId)),i=(0,f.tN)((e=>e.botsList)),[a]=(0,P.g)(),l=null===(e=i.find((e=>e._id===a)))||void 0===e?void 0:e.cannedResponse,c=()=>{x(!1),m(!0),h({organizationId:t,question:"",content:""})},[d,h]=(0,n.useState)({organizationId:t,question:"",content:""}),[p,x]=(0,n.useState)(!1),[g,m]=(0,n.useState)(!0),Z=()=>{x(!0),m(!1),h({organizationId:t,question:"",content:""})};return n.useEffect((()=>{(async()=>{if(null===l||"undefined"!=l)try{await(0,O.fR)(t,a)}catch(e){console.error("Error fetching organization details:",e)}})()}),[t,a]),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(u.J9,{initialValues:d,validationSchema:U,onSubmit:async(e,t)=>{let{setErrors:i,setStatus:n,setSubmitting:o}=t;try{await(0,O.X2)(e,a),n({success:!1}),o(!1),x(!1),m(!0),(0,v.W)(!0,"Added response successfully","success")}catch(r){console.error(r),n({success:!1}),i({submit:r.message}),o(!1)}},children:e=>(0,k.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,k.jsxs)(r.ZP,{container:!0,item:!0,xs:12,children:[(0,k.jsx)(s.Z,{variant:"h5",children:"Canned Response"}),g&&(0,k.jsx)(r.ZP,{item:!0,sx:{marginLeft:"60px"},children:(0,k.jsx)(V,{clickOpenForm:Z,organizationId:t,botId:a})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,mt:1,children:p&&(0,k.jsx)(r.ZP,{item:!0,xs:12,lg:8,mt:5,children:(0,k.jsx)(K,{...e,clsForm:c})})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,mt:5,children:(0,k.jsx)(q,{cannedResponse:l,organizationId:t,botId:a,openForm:Z,clsForm:c})})]})})}),(0,k.jsx)(o.Z,{children:(0,k.jsx)(r.ZP,{container:!0})})]})};function V(e){let{organizationId:t,botId:i,clickOpenForm:r}=e;const s=(0,T.ZP)(y.Z)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}})),[a,l]=n.useState(!1),c=[{icon:(0,k.jsx)(D.Z,{}),name:"Add Question & Answer",method:()=>{r()}},{icon:(0,k.jsx)(I.Z,{}),name:"File Upload (.pdf,.doc,.docx,.txt)",method:()=>{l(!0)}}];return(0,k.jsxs)(o.Z,{sx:{height:150,transform:"translateZ(0px)",flexGrow:1},children:[(0,k.jsx)(s,{ariaLabel:"SpeedDial basic example",direction:"right",sx:{position:"absolute",bottom:16,right:16},icon:(0,k.jsx)(R.Z,{}),children:c.map((e=>(0,k.jsx)(E.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,k.jsx)(N.Z,{openPopUpDialog:a,setPopUpDialog:l,title:"Upload Document",children:(0,k.jsx)(W,{organizationId:t,botId:i,setDocumentUploadDialogOpen:l})})]})}function W(e){let{organizationId:t,botId:i,setDocumentUploadDialogOpen:n}=e;const o=L.yu?L.yu:5242880,d=h.Ry().shape({file:h.nK().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(o/1048576," MB"),(e=>e&&e.size<=o))}),x=(0,T.ZP)(a.Z)((e=>{let{theme:t}=e;return{color:t.palette.getContrastText(z.Z[500]),backgroundColor:z.Z[500],"&:hover":{backgroundColor:z.Z[700]}}}));return(0,k.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,k.jsx)(l.Z,{spacing:1,children:(0,k.jsx)(c.Z,{children:"File Upload (.pdf,.doc,.docx,.txt)"})})}),(0,k.jsx)(r.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,k.jsx)(u.J9,{initialValues:{file:null},validationSchema:d,onSubmit:async(e,o)=>{let{setErrors:r,setStatus:s,setSubmitting:a}=o;try{a(!0),await(0,O.Sn)(e.file,i,t),s({success:!0}),n(!1),(0,v.W)(!0,"The file uploaded successfully!","success")}catch(l){s({success:!1}),r({submit:l.message}),a(!1),n(!1),(0,v.W)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:i,isSubmitting:n,setFieldValue:o}=e;return(0,k.jsxs)(u.l0,{children:[(0,k.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,k.jsx)(r.ZP,{item:!0,xs:12,md:12,children:t.file&&(0,k.jsxs)(s.Z,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,k.jsx)(r.ZP,{item:!0,xs:6,md:6,children:(0,k.jsx)(u.gN,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,k.jsx)(w.Z,{children:(0,k.jsxs)(x,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",children:["SelectFile",(0,k.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{o("file",e.currentTarget.files[0])},accept:".pdf,.doc,.docx,.txt,text/plain"})]})})}})}),(0,k.jsx)(r.ZP,{item:!0,xs:6,md:6,children:(0,k.jsx)(w.Z,{children:(0,k.jsx)(a.Z,{variant:"contained",size:"large",type:"submit",disabled:n,children:n?"Uploading...":"Upload"})})})]}),(0,k.jsx)(r.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,k.jsx)(p.Z,{error:!0,id:"helper-text-file-input",children:i.file})})]})}})})]})}function q(e){let{cannedResponse:t,organizationId:i,botId:o,clsForm:h,isSubmitting:u}=e;const[p,x]=(0,n.useState)(-1),[g,m]=(0,n.useState)(""),[f,Z]=(0,n.useState)(""),_=e=>{m(e.target.value)},P=e=>{Z(e.target.value)},y=()=>{x(-1)},R={_id:p,organizationId:i,question:g,content:f},E=async()=>{try{await(0,O.Mu)(o,R),m(""),Z(""),x(-1),(0,v.W)(!0,"Updated response successfully","success")}catch(e){console.error(e)}};return(0,k.jsx)(k.Fragment,{children:t?t.map(((e,t)=>e._id===p?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(r.ZP,{item:!0,xs:12,mt:5,children:[(0,k.jsx)(c.Z,{htmlFor:"question",children:"Question"}),(0,k.jsx)(l.Z,{spacing:2,mb:3,children:(0,k.jsx)(d.Z,{multiline:!0,fullWidth:!0,id:"question",name:"question",value:g,onChange:_,placeholder:"Please enter the question"})}),(0,k.jsx)(c.Z,{htmlFor:"content",children:"Answer"}),(0,k.jsx)(l.Z,{spacing:2,mb:3,children:(0,k.jsx)(d.Z,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",value:f,onChange:P,placeholder:"Please enter the question"})})]},t),(0,k.jsx)(r.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,k.jsxs)(l.Z,{spacing:2,direction:"row",children:[(0,k.jsx)(a.Z,{variant:"outlined",onClick:y,children:"Cancel"}),(0,k.jsx)(w.Z,{children:(0,k.jsx)(A.Z,{isLoading:u,disabled:u,color:"primary",size:"large",onClick:E,variant:"contained",children:"Update"})})]})})]}):(0,k.jsxs)(r.ZP,{container:!0,mt:1,children:[(0,k.jsxs)(r.ZP,{item:!0,children:[(0,k.jsxs)(s.Z,{variant:"h5",children:["Q",t+1," . ",e.question]}),(0,k.jsxs)(s.Z,{variant:"body2",children:[(0,k.jsx)("b",{children:"Ans . "})," ",e.content]})]}),(0,k.jsxs)(r.ZP,{xs:12,item:!0,display:"flex",justifyContent:"flex-end",children:[(0,k.jsx)(j.Z,{size:"small",sx:{color:S.Z[500]},onClick:()=>((e,t,i)=>{x(e),m(t),Z(i),h(!1)})(e._id,e.question,e.content),children:(0,k.jsx)(b.Z,{})}),(0,k.jsx)(B,{organizationId:i,botId:o,canDelID:e._id})]}),(0,k.jsx)(C.Z,{xs:12,sx:{width:"100%",borderColor:"#b6abab"}})]},t))):null})}function K(e){let{touched:t,errors:i,handleChange:n,clsForm:o,...s}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(r.ZP,{item:!0,xs:12,mt:5,children:[(0,k.jsx)(c.Z,{htmlFor:"question",children:"Question"}),(0,k.jsxs)(l.Z,{spacing:2,mb:3,children:[(0,k.jsx)(d.Z,{multiline:!0,fullWidth:!0,id:"question",name:"question",onChange:n,placeholder:"Please enter the question"}),t.question&&i.question&&(0,k.jsx)(p.Z,{error:!0,id:"helper-text-message-placeholder",children:i.question})]}),(0,k.jsx)(c.Z,{htmlFor:"content",children:"Answer"}),(0,k.jsxs)(l.Z,{spacing:2,mb:3,children:[(0,k.jsx)(d.Z,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",onChange:n,placeholder:"Please enter the question"}),t.content&&i.content&&(0,k.jsx)(p.Z,{error:!0,id:"helper-text-message-placeholder",children:i.content})]})]}),(0,k.jsx)(r.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,k.jsxs)(l.Z,{spacing:2,direction:"row",children:[(0,k.jsx)(a.Z,{variant:"outlined",onClick:()=>{o(!1)},children:"Cancel"}),(0,k.jsx)(w.Z,{children:(0,k.jsx)(A.Z,{isLoading:s.isSubmitting,disabled:s.isSubmitting,color:"primary",size:"large",type:"submit",variant:"contained",children:"Save"})})]})})]})}function B(e){let{organizationId:t,botId:i,canDelID:o,...r}=e;const[l,c]=n.useState(!1),d=()=>{c(!1)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{sx:{color:_.Z[500]},onClick:()=>{c(!0)},children:(0,k.jsx)(Z.Z,{})}),(0,k.jsxs)(x.Z,{open:l,onClose:d,children:[(0,k.jsx)(g.Z,{id:"alert-dialog-title",children:(0,k.jsx)(s.Z,{gutterBottom:!0,children:"Are sure you want to delete the response ?"})}),(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(a.Z,{onClick:d,children:"Cancel"}),(0,k.jsx)(w.Z,{children:(0,k.jsx)(A.Z,{isLoading:r.isSubmitting,disabled:r.isSubmitting,color:"primary",type:"submit",variant:"contained",onClick:()=>(async()=>{await(0,O.Cm)(t,i,o),d(),(0,v.W)(!0,"Deleted response successfully","success")})(),children:"Delete"})})]})]})]})}},69753:(e,t,i)=>{function n(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i.d(t,{U2:()=>r,v_:()=>s,TY:()=>u,Od:()=>a});var o=i(32203);async function r(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,i){let{headers:n,noAuth:o,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s="POST"===e||"PUT"===e||"DELETE"===e;if(t=u(t),i=i&&"object"===typeof i&&s?JSON.stringify(i):void 0,n||(n={}),n["Content-Type"]="application/json",n.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(n.Authorization="Bearer ".concat(e))}const a=await fetch(t,{...r,headers:n,body:i,method:e}),l=await a.json();if(a.ok){const{data:e,...t}=l;return delete t.status,e&&!Object.keys(t).length?e:l}throw l.message?new Error(l.message):l}const c=(d=o.Hi,h="/",d.replace(new RegExp("".concat(n(h),"+$")),""));var d,h;function u(e){return e?e.startsWith("https://")?e:"".concat(c).concat(e):e}},62619:(e,t,i)=>{i.d(t,{Cm:()=>c,Mu:()=>s,Sn:()=>l,X2:()=>r,fR:()=>a});var n=i(69753),o=i(23509);async function r(e,t){((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,cannedResponse:[...i.cannedResponse,t]}:i));return{...i,botsList:n}}))})(t,await n.v_("/bot/".concat(e.organizationId,"/").concat(t,"/knowledge-base"),e))}async function s(e,t){((e,i)=>{o.tN.setState((n=>{const o=n.botsList.map((n=>{if(n._id===e){const e=n.cannedResponse.filter((e=>e._id!=i._id));return{...n,cannedResponse:[...e,t]}}return n}));return{...n,botsList:o}}))})(e,await n.v_("/bot/".concat(t.organizationId,"/").concat(e,"/knowledge-base"),t))}async function a(e,t){((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,cannedResponse:t}:i));return{...i,botsList:n}}))})(t,await n.U2("/bot/".concat(e,"/").concat(t,"/knowledge-base/list")))}async function l(e,t,i){console.log("In upload document.......",e),console.log("BotID :",t),console.log("OrganiztionID :",i)}async function c(e,t,i){await n.Od("/bot/".concat(e,"/").concat(t,"/knowledge-base/").concat(i));((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>{if(i._id===e){const e=i.cannedResponse.filter((e=>e._id!=t));return{...i,cannedResponse:[...e]}}return i}));return{...i,botsList:n}}))})(t,i)}},969:(e,t,i)=>{i.d(t,{g:()=>o});var n=i(23509);function o(e){const t=(0,n.tN)((e=>e.selectedBotId)),i=(0,n.tN)((i=>i.botsMap[e||t]));return[e||t,i]}},32203:(e,t,i)=>{i.d(t,{Hi:()=>n,LC:()=>a,lB:()=>o,rn:()=>s,yu:()=>r});const n="https://devbackend.livhousing.com",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,a="https://60f1-203-192-224-75.ngrok-free.app"},65954:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},86426:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined")},14487:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},19536:(e,t,i)=>{i.d(t,{Z:()=>f});var n=i(63366),o=i(87462),r=i(47313),s=i(94146),a=i(21921),l=i(17551),c=i(17592),d=i(77342),h=i(99273),u=i(46417);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,l.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=r.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:l,className:c,component:m=(l?"div":"hr"),flexItem:f=!1,light:v=!1,orientation:Z="horizontal",role:b=("hr"!==m?"separator":void 0),textAlign:j="center",variant:S="fullWidth"}=i,_=(0,n.Z)(i,p),C=(0,o.Z)({},i,{absolute:r,component:m,flexItem:f,light:v,orientation:Z,role:b,textAlign:j,variant:S}),w=(e=>{const{absolute:t,children:i,classes:n,flexItem:o,light:r,orientation:s,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,r&&"light","vertical"===s&&"vertical",o&&"flexItem",i&&"withChildren",i&&"vertical"===s&&"withChildrenVertical","right"===l&&"vertical"!==s&&"textAlignRight","left"===l&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]};return(0,a.Z)(d,h.V,n)})(C);return(0,u.jsx)(x,(0,o.Z)({as:m,className:(0,s.Z)(w.root,c),role:b,ref:t,ownerState:C},_,{children:l?(0,u.jsx)(g,{className:w.wrapper,ownerState:C,children:l}):null}))}));m.muiSkipListHighlight=!0;const f=m},99273:(e,t,i)=>{i.d(t,{V:()=>r,Z:()=>s});var n=i(77430),o=i(32298);function r(e){return(0,o.Z)("MuiDivider",e)}const s=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},11623:(e,t,i)=>{i.d(t,{Z:()=>n});const n={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}}}]);