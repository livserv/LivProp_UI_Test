"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[752],{18678:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(93701),o=i(46417);function r(e){let{children:t,type:i}=e;return(0,o.jsx)(n.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},57514:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(47313),o=i(50301),r=i(46417);const a=n.forwardRef((function(e,t){return(0,r.jsx)(o.Z,{direction:"up",ref:t,...e})}))},68200:(e,t,i)=>{i.d(t,{Z:()=>p});i(47313);var n=i(57514),o=i(66149),r=i(33604),a=i(96467),s=i(11198),l=i(17592),c=i(19860),d=i(47131),u=i(46417);const h=(0,l.ZP)(o.Z)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function p(e){const t=(0,c.Z)(),{breakpoints:i}=t,{openPopUpDialog:o,setPopUpDialog:l,title:p}=e;return(0,u.jsxs)(h,{TransitionComponent:n.Z,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:"60%",[i.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(r.Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:p}),(0,u.jsx)(d.Z,{"aria-label":"close",onClick:()=>{l(!1)},sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(s.Z,{})}),(0,u.jsx)(a.Z,{dividers:!0,children:e.children})]})}},94100:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(47313),o=i(31095),r=i(85281),a=i(46417);const s=function(e){let{onClick:t,disabled:i,isLoading:s,children:l,...c}=e;const[d,u]=n.useState(s);return(0,a.jsxs)(o.Z,{onClick:e=>{if(!t)return;const i=t(e);"function"===typeof(null===i||void 0===i?void 0:i.finally)&&(u(!0),i.finally((()=>u(!1))))},disabled:d||s||i,...c,children:[(d||s)&&(0,a.jsx)(r.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),l]})}},14752:(e,t,i)=>{i.r(t),i.d(t,{default:()=>z});var n=i(47313),o=i(41806),r=i(9019),a=i(61113),s=i(23306),l=i(42832),c=i(37843),d=i(31095),u=i(21933),h=i(24977),p=i(15480),g=i(66149),f=i(33604),x=i(4117),m=i(51997),v=i(65954),b=i(47131),Z=i(89994),j=i(11623),S=i(19536),_=i(29210),w=i(70246),C=i(11686),A=i(86426),y=i(14487),P=i(17592),E=i(23509),D=i(25151),T=i(18678),R=i(94100),k=i(969),N=(i(32203),i(62619)),I=(i(68200),i(18757)),O=i(46417);const L=()=>u.Z_().required("This field is required"),M=u.Ry().shape({question:L(),content:L()});const z=function(){const[e,t]=n.useState(!1),i=n.useCallback((()=>t((e=>!e))),[]);return n.useEffect((()=>{(0,N.fR)().catch((e=>console.error("Error fetching organization details:",e)))}),[]),(0,O.jsx)(o.Z,{children:(0,O.jsxs)(r.ZP,{container:!0,item:!0,xs:12,children:[(0,O.jsx)(a.Z,{variant:"h5",children:"FAQ Knowledge base"}),!e&&(0,O.jsx)(r.ZP,{item:!0,sx:{marginLeft:"60px"},children:(0,O.jsx)(K,{onAddClick:i})}),e&&(0,O.jsx)(r.ZP,{item:!0,xs:12,mt:1,children:(0,O.jsx)(r.ZP,{item:!0,xs:12,lg:8,mt:5,children:(0,O.jsx)(W,{onCancel:i})})}),(0,O.jsx)(r.ZP,{item:!0,xs:12,mt:5,children:(0,O.jsx)(U,{})})]})})};function U(){const[e]=(0,k.g)(),t=(0,E.tN)((t=>{var i;return null===(i=t.kbDocs)||void 0===i?void 0:i[e]}));return null===t||void 0===t?void 0:t.map(((e,t)=>(0,O.jsx)(V,{index:t,document:e},e._id)))}function V(e){let{document:t,index:i}=e;const[o,r]=n.useState(!1);return o?(0,O.jsx)(W,{document:t,onCancel:r}):(0,O.jsx)(F,{index:i,document:t,onEdit:r})}function F(e){let{document:t,index:i,onEdit:o}=e;const s=n.useCallback((()=>o(!0)),[o]);return(0,O.jsxs)(r.ZP,{container:!0,mt:1,children:[(0,O.jsxs)(r.ZP,{item:!0,children:[(0,O.jsxs)(a.Z,{variant:"h5",children:["Q",i+1," . ",t.question]}),(0,O.jsxs)(a.Z,{variant:"body2",children:[(0,O.jsx)("b",{children:"Ans . "})," ",t.content]})]}),(0,O.jsxs)(r.ZP,{xs:12,item:!0,display:"flex",justifyContent:"flex-end",children:[(0,O.jsx)(b.Z,{size:"small",sx:{color:Z.Z[500]},onClick:s,children:(0,O.jsx)(v.Z,{})}),(0,O.jsx)(H,{documentId:t._id})]}),(0,O.jsx)(S.Z,{xs:12,sx:{width:"100%",borderColor:"#b6abab"}})]})}function W(e){let{document:t={},onCancel:i}=e;const o=n.useCallback((()=>i(!1)),[i]);return(0,O.jsx)(h.J9,{initialValues:t,validationSchema:M,onSubmit:async(e,t)=>{let{setErrors:i,setStatus:n,setSubmitting:r}=t;try{await(0,N.vR)(e),n({success:!1}),r(!1),o(),(0,D.W)(!0,"Content added successfully!","success")}catch(a){console.error(a),(0,D.W)(!0,"Error occurred while trying to save content.","error")}},children:e=>{let{values:t,errors:i,handleChange:n,touched:a,isSubmitting:u,handleSubmit:h}=e;return(0,O.jsxs)("form",{noValidate:!0,onSubmit:h,children:[(0,O.jsxs)(r.ZP,{item:!0,xs:12,mt:5,children:[(0,O.jsx)(s.Z,{htmlFor:"question",children:"Question"}),(0,O.jsxs)(l.Z,{spacing:2,mb:3,children:[(0,O.jsx)(c.Z,{multiline:!0,fullWidth:!0,id:"question",name:"question",value:t.question,onChange:n,placeholder:"Please enter the question"}),a.question&&i.question&&(0,O.jsx)(p.Z,{error:!0,id:"helper-text-message-placeholder",children:i.question})]}),(0,O.jsx)(s.Z,{htmlFor:"content",children:"Answer"}),(0,O.jsxs)(l.Z,{spacing:2,mb:3,children:[(0,O.jsx)(c.Z,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",value:t.content,onChange:n,placeholder:"Please enter the answer"}),a.content&&i.content&&(0,O.jsx)(p.Z,{error:!0,id:"helper-text-message-placeholder",children:i.content})]})]}),(0,O.jsx)(r.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,O.jsxs)(l.Z,{spacing:2,direction:"row",children:[(0,O.jsx)(d.Z,{variant:"outlined",onClick:o,children:"Cancel"}),(0,O.jsx)(T.Z,{children:(0,O.jsx)(R.Z,{isLoading:u,color:"primary",size:"large",type:"submit",variant:"contained",children:"Save"})})]})})]})}})}const B=(0,P.ZP)(_.Z)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));function K(e){let{onAddClick:t}=e;const[i,o]=n.useState(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(B,{ariaLabel:"Knowledge base options",direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},icon:(0,O.jsx)(w.Z,{}),children:[(0,O.jsx)(C.Z,{icon:(0,O.jsx)(A.Z,{}),tooltipTitle:"Add Question & Answer",onClick:t}),(0,O.jsx)(C.Z,{icon:(0,O.jsx)(y.Z,{}),tooltipTitle:"File Upload (.pdf,.doc,.docx,.txt)",onClick:()=>o(!0)})]}),i&&(0,O.jsx)(I.Z,{isOpen:i,toggleOpen:o})]})}function H(e){let{documentId:t}=e;const[i,o]=n.useState(!1),r=()=>o((e=>!e)),s=n.useCallback((async()=>{await(0,N.Cm)(t),o(!1),(0,D.W)(!0,"Deleted response successfully","success")}),[t]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b.Z,{sx:{color:j.Z[500]},onClick:r,children:(0,O.jsx)(m.Z,{})}),i&&(0,O.jsxs)(g.Z,{open:i,onClose:r,children:[(0,O.jsx)(f.Z,{id:"delete-confirm-dialog-title",children:(0,O.jsx)(a.Z,{gutterBottom:!0,children:"Are sure you want to delete the response ?"})}),(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(d.Z,{onClick:r,children:"Cancel"}),(0,O.jsx)(T.Z,{children:(0,O.jsx)(R.Z,{color:"primary",type:"submit",variant:"contained",onClick:s,children:"Delete"})})]})]})]})}},18757:(e,t,i)=>{i.d(t,{Z:()=>v});i(47313);var n=i(9019),o=i(42832),r=i(23306),a=i(61113),s=i(31095),l=i(15480),c=i(21933),d=i(24977),u=i(18678),h=i(68200),p=i(32203),g=i(13032),f=i(969),x=i(25151),m=i(46417);const v=function(e){let{isOpen:t,toggleOpen:i}=e;return(0,m.jsx)(h.Z,{openPopUpDialog:t,setPopUpDialog:i,title:"Upload Training Documents",children:(0,m.jsx)(j,{setDocumentUploadDialogOpen:i})})},b=p.yu?p.yu:5242880,Z=c.Ry().shape({file:c.nK().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(b/1048576," MB"),(e=>e&&e.size<=b))});function j(e){let{setDocumentUploadDialogOpen:t}=e;const[,i]=(0,f.g)(),c=null===i||void 0===i?void 0:i.trainingMedia;return(0,m.jsxs)(n.ZP,{container:!0,spacing:1,children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(o.Z,{spacing:1,children:(0,m.jsx)(r.Z,{children:"File Upload (.pdf,.doc,.docx,.txt,.csv)"})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(d.J9,{initialValues:{file:null},validationSchema:Z,onSubmit:async(e,i)=>{let{setErrors:n,setStatus:o,setSubmitting:r}=i;try{const{name:i}=e.file;c.some((e=>e.originalName===i))?(0,x.W)(!0,"The file already uploaded!. Please select another file","error"):(r(!0),await(0,g.Ur)(e.file),o({success:!0}),t(!1),(0,x.W)(!0,"The file uploaded successfully!","success"))}catch(a){console.error("Error uploading the document:",a),o({success:!1}),n({submit:a.message}),r(!1),t(!1),(0,x.W)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:i,isSubmitting:o,setFieldValue:r}=e;return(0,m.jsxs)(d.l0,{children:[(0,m.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,md:12,children:t.file&&(0,m.jsxs)(a.Z,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,m.jsx)(d.gN,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,m.jsx)(u.Z,{children:(0,m.jsxs)(s.Z,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,m.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{r("file",e.currentTarget.files[0])},accept:".pdf,.doc,.docx,.txt,text/plain"})]})})}})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,md:6,children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(s.Z,{variant:"contained",size:"large",type:"submit",disabled:o,children:o?"Uploading...":"Upload"})})})]}),(0,m.jsx)(n.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(l.Z,{error:!0,id:"helper-text-file-input",children:i.file})})]})}})})]})}},80730:(e,t,i)=>{i.d(t,{Od:()=>s,TY:()=>d,U2:()=>r,v_:()=>a});var n=i(89637),o=i(32203);async function r(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,i){let{headers:n,noAuth:o,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;if(t=d(t),i=i&&"object"===typeof i&&a?JSON.stringify(i):void 0,n||(n={}),n["Content-Type"]="application/json",n.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(n.Authorization="Bearer ".concat(e))}const s=await fetch(t,{...r,headers:n,body:i,method:e}),l=await s.json();if(s.ok){const{data:e,...t}=l;return delete t.status,e&&!Object.keys(t).length?e:l}throw l.message?new Error(l.message):l}const c=(0,n.lf)(o.Hi,"/");function d(e){return e?e.startsWith("https://")?e:"".concat(c).concat(e):e}},62619:(e,t,i)=>{i.d(t,{Cm:()=>s,fR:()=>a,vR:()=>r});var n=i(80730),o=i(23509);async function r(e){const{organizationId:t,selectedBotId:i}=o.tN.getState(),r=await n.v_("/bot/".concat(t,"/").concat(i,"/knowledge-base"),e);o.tN.setState((t=>{const n={...t.kbDocs||{}};if(n[i]=[...n[i]],e._id){const e=n[i].findIndex((e=>e._id!==r._id));e>=0?n[i][e]=r:n[i].push(r)}else n[i].push(r);return{kbDocs:n}}))}async function a(e){const{organizationId:t,selectedBotId:i,kbDocs:r}=o.tN.getState();if(e&&Array.isArray(null===r||void 0===r?void 0:r[i]))return;const a=await n.U2("/bot/".concat(t,"/").concat(i,"/knowledge-base/list"));o.tN.setState((e=>({kbDocs:{...e.kbDocs||{},[i]:a}})))}async function s(e){const{organizationId:t,selectedBotId:i}=o.tN.getState();await n.Od("/bot/".concat(t,"/").concat(i,"/knowledge-base/").concat(e)),o.tN.setState((t=>{var n;const o={...t.kbDocs||{}};return o[i]=null===(n=o[i])||void 0===n?void 0:n.filter((t=>t._id!==e)),{kbDocs:o}}))}},13032:(e,t,i)=>{i.d(t,{Ur:()=>s,Vu:()=>c,e7:()=>a,jZ:()=>r,u7:()=>l});var n=i(80730),o=i(23509);async function r(e,t,i){const r=await n.v_("/bot/add-training-media",e,{headers:{botId:t,organizationId:i}}),{trainingMedia:a}=r;((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,trainingMedia:t}:i));return{...i,botsList:n}}))})(t,a)}async function a(e,t,i){const r=await n.v_("/bot/delete-training-media-document",e,{headers:{botId:t,organizationId:i}}),{trainingDocuments:a}=r;((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,trainingMedia:t}:i));return{...i,botsList:n}}))})(t,a)}async function s(e){const{organizationId:t,selectedBotId:i}=o.tN.getState(),r=new FormData;r.append("file",e);const a={},s=sessionStorage.getItem("token");s&&(a.Authorization="Bearer ".concat(s)),a.Botid=i,a.Organizationid=t,a.Accept="application/json";const l=(0,n.TY)("/bot/add-training-media");await fetch(l,{headers:a,method:"POST",body:r}).then((e=>e.json())).then((e=>{const{trainingMedia:t}=e.data;((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,trainingMedia:t}:i));return{...i,botsList:n}}))})(i,t)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}async function l(e,t){const i=await n.v_("/bot/add-tranining-document-name",e),{trainingMedia:r}=i;((e,t)=>{o.tN.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,trainingMedia:t}:i));return{...i,botsList:n}}))})(t,r)}async function c(e,t){const i=await n.v_("/bot/".concat(t,"/").concat(e,"/knowledge-base/train"));return o.tN.setState((t=>{const i={...t.kbDocs||{}};return delete i[e],{kbDocs:i}})),i}},969:(e,t,i)=>{i.d(t,{g:()=>o});var n=i(23509);function o(e){const t=(0,n.tN)((e=>e.selectedBotId)),i=(0,n.tN)((i=>i.botsMap[e||t]));return[e||t,i]}},89637:(e,t,i)=>{function n(e,t){return e.replace(new RegExp("".concat(o(t),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){const t=new Date(e),i=t.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"".concat(n," ").concat(i,", ").concat(o)}i.d(t,{lf:()=>n,p6:()=>r})},32203:(e,t,i)=>{i.d(t,{Hi:()=>n,LC:()=>s,lB:()=>o,rn:()=>a,yu:()=>r});const n="https://devbackend.livhousing.com",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,s="https://60f1-203-192-224-75.ngrok-free.app"},65954:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},86426:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined")},14487:(e,t,i)=>{var n=i(64836);t.Z=void 0;var o=n(i(45045)),r=i(46417);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},19536:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(63366),o=i(87462),r=i(47313),a=i(94146),s=i(21921),l=i(17551),c=i(17592),d=i(77342),u=i(99273),h=i(46417);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,l.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),x=r.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:l,className:c,component:x=(l?"div":"hr"),flexItem:m=!1,light:v=!1,orientation:b="horizontal",role:Z=("hr"!==x?"separator":void 0),textAlign:j="center",variant:S="fullWidth"}=i,_=(0,n.Z)(i,p),w=(0,o.Z)({},i,{absolute:r,component:x,flexItem:m,light:v,orientation:b,role:Z,textAlign:j,variant:S}),C=(e=>{const{absolute:t,children:i,classes:n,flexItem:o,light:r,orientation:a,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,r&&"light","vertical"===a&&"vertical",o&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,s.Z)(d,u.V,n)})(w);return(0,h.jsx)(g,(0,o.Z)({as:x,className:(0,a.Z)(C.root,c),role:Z,ref:t,ownerState:w},_,{children:l?(0,h.jsx)(f,{className:C.wrapper,ownerState:w,children:l}):null}))}));x.muiSkipListHighlight=!0;const m=x},99273:(e,t,i)=>{i.d(t,{V:()=>r,Z:()=>a});var n=i(77430),o=i(32298);function r(e){return(0,o.Z)("MuiDivider",e)}const a=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},11623:(e,t,i)=>{i.d(t,{Z:()=>n});const n={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}}}]);