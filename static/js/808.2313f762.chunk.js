"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[808],{18678:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(93701),a=n(46417);function o(e){let{children:t,type:n}=e;return(0,a.jsx)(i.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}o.defaultProps={type:"scale"}},31381:(e,t,n)=>{n.d(t,{Z:()=>c});n(47313);var i=n(66149),a=n(33604),o=n(96467),r=n(4117),s=n(31095),d=n(46417);const c=e=>{const{title:t,children:n,open:c,setOpen:l,onConfirm:u}=e;return(0,d.jsxs)(i.Z,{open:c,onClose:()=>l(!1),style:{zIndex:1e4},children:[(0,d.jsx)(a.Z,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,d.jsx)(o.Z,{dividers:!0,children:n}),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(s.Z,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>l(!1),children:"No"}),(0,d.jsx)(s.Z,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{l(!1),u()},children:"Yes"})]})]})}},57514:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(47313),a=n(50301),o=n(46417);const r=i.forwardRef((function(e,t){return(0,o.jsx)(a.Z,{direction:"up",ref:t,...e})}))},6505:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(47313),a=n(19860),o=n(73428),r=n(54641),s=n(61113),d=n(93405),c=n(46417);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:p=!0,contentSX:h={},darkTitle:m,elevation:g,secondary:x,shadow:f,sx:Z={},title:b,...v}=e;const j=(0,a.Z)();return i="dark"===j.palette.mode?i||!0:i,(0,c.jsxs)(o.Z,{elevation:g||0,ref:t,...v,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!i||n&&"dark"!==j.palette.mode?"inherit":f||j.customShadows.z1,":hover":{boxShadow:i?f||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...Z},children:[!m&&b&&(0,c.jsx)(r.Z,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:b,action:x}),m&&b&&(0,c.jsx)(r.Z,{sx:l,title:(0,c.jsx)(s.Z,{variant:"h3",children:b}),action:x}),p&&(0,c.jsx)(d.Z,{sx:h,children:u}),!p&&u]})}))},68200:(e,t,n)=>{n.d(t,{Z:()=>h});n(47313);var i=n(57514),a=n(66149),o=n(33604),r=n(96467),s=n(11198),d=n(17592),c=n(19860),l=n(47131),u=n(46417);const p=(0,d.ZP)(a.Z)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function h(e){const t=(0,c.Z)(),{breakpoints:n}=t,{openPopUpDialog:a,setPopUpDialog:d,title:h}=e;return(0,u.jsxs)(p,{TransitionComponent:i.Z,"aria-labelledby":"customized-dialog-title",open:a,PaperProps:{sx:{width:"60%",[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(o.Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:h}),(0,u.jsx)(l.Z,{"aria-label":"close",onClick:()=>{d(!1)},sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(s.Z,{})}),(0,u.jsx)(r.Z,{dividers:!0,children:e.children})]})}},94100:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(47313),a=n(31095),o=n(85281),r=n(46417);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:d,...c}=e;const[l,u]=i.useState(s);return(0,r.jsxs)(a.Z,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||s||n,...c,children:[(l||s)&&(0,r.jsx)(o.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),d]})}},18757:(e,t,n)=>{n.d(t,{Z:()=>Z});n(47313);var i=n(9019),a=n(42832),o=n(23306),r=n(61113),s=n(31095),d=n(15480),c=n(21933),l=n(24977),u=n(18678),p=n(68200),h=n(32203),m=n(13032),g=n(969),x=n(26478),f=n(46417);const Z=function(e){let{isOpen:t,toggleOpen:n}=e;return(0,f.jsx)(p.Z,{openPopUpDialog:t,setPopUpDialog:n,title:"Upload Training Documents",children:(0,f.jsx)(j,{setDocumentUploadDialogOpen:n})})},b=h.yu?h.yu:5242880,v=c.Ry().shape({file:c.nK().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(b/1048576," MB"),(e=>e&&e.size<=b))});function j(e){let{setDocumentUploadDialogOpen:t}=e;const[,n]=(0,g.g)(),c=null===n||void 0===n?void 0:n.trainingMedia;return(0,f.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(a.Z,{spacing:1,children:(0,f.jsx)(o.Z,{children:"File Upload (.pdf,.doc,.docx,.txt,.csv)"})})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(l.J9,{initialValues:{file:null},validationSchema:v,onSubmit:async(e,n)=>{let{setErrors:i,setStatus:a,setSubmitting:o}=n;try{const{name:n}=e.file;c.some((e=>e.originalName===n))?(0,x.W)(!0,"The file already uploaded!. Please select another file","error"):(o(!0),await(0,m.Ur)(e.file),a({success:!0}),t(!1),(0,x.W)(!0,"The file uploaded successfully!","success"))}catch(r){console.error("Error uploading the document:",r),a({success:!1}),i({submit:r.message}),o(!1),t(!1),(0,x.W)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:n,isSubmitting:a,setFieldValue:o}=e;return(0,f.jsxs)(l.l0,{children:[(0,f.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,md:12,children:t.file&&(0,f.jsxs)(r.Z,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,f.jsx)(i.ZP,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,f.jsx)(l.gN,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,f.jsx)(u.Z,{children:(0,f.jsxs)(s.Z,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,f.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{o("file",e.currentTarget.files[0])},accept:".pdf,.doc,.docx,.txt,text/plain"})]})})}})}),(0,f.jsx)(i.ZP,{item:!0,xs:6,md:6,children:(0,f.jsx)(u.Z,{children:(0,f.jsx)(s.Z,{variant:"contained",size:"large",type:"submit",disabled:a,children:a?"Uploading...":"Upload"})})})]}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(d.Z,{error:!0,id:"helper-text-file-input",children:n.file})})]})}})})]})}},35808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(47313),a=n(41806),o=n(9019),r=n(61113),s=n(42832),d=n(23306),c=n(49914),l=n(15480),u=n(11686),p=n(17592),h=n(29210),m=n(70246),g=n(14487),x=n(44661),f=n(19259),Z=n(21933),b=n(24977),v=n(23509),j=n(969),y=n(18678),S=n(13032),P=n(94100),C=n(68200),w=n(26478),N=n(51997),_=n(10237),T=n(93405),D=n(49709),M=n(56104),R=n(47131),A=n(66212),E=n(6505),I=n(31381);function U(e,t,n,i){function a(e,t,n){const{botsList:i}=v.tN.getState(),a=i.find((t=>t._id===e));if(a){const i=a.trainingMedia.map((e=>e.url===t?{...e,name:n}:e));((e,t)=>{v.tN.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(e,i),v.tN.setState((()=>({trainingMediaUpdate:!0})))}else console.error("Bot not found for the given ID.")}a(n,e,"delete"===i?e:t)}var k=n(46417);const z=function(e){let{media:t,botId:n,organizationId:a}=e;const[s,d]=i.useState(!1),{name:u,url:p,type:h,originalName:m}=t;return(0,k.jsxs)(E.Z,{contentSX:{p:2.25},children:[(0,k.jsxs)(T.Z,{style:{padding:0,minHeight:"65px",maxHeight:"65px"},children:[m&&(0,k.jsxs)(r.Z,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,k.jsx)("strong",{children:"File Name :"})," ",(0,k.jsx)(D.Z,{style:{cursor:"pointer"},title:m,children:(0,k.jsx)("span",{children:(0,k.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:m})})})]}),"single_page"===h&&(0,k.jsxs)(r.Z,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,k.jsx)("strong",{children:"URL :"})," ",(0,k.jsx)(D.Z,{style:{cursor:"pointer"},title:p,children:(0,k.jsx)("span",{children:p})})]}),(0,k.jsxs)(r.Z,{variant:"h6",children:[(0,k.jsx)("strong",{children:"Type :"})," ","single_page"===h?"Web Page":"Document"]}),(0,k.jsxs)(r.Z,{variant:"h6",children:[(0,k.jsx)("strong",{children:"Document Name :"})," ",u===p?"NA":(0,k.jsx)(A.Z,{label:u,onDelete:()=>((e,t,n)=>{U(e,t,n,"delete")})(p,u,n)})]})]}),(0,k.jsx)(M.Z,{style:{justifyContent:"flex-end",padding:"1px"},children:(0,k.jsxs)(o.ZP,{container:!0,children:[(0,k.jsx)(o.ZP,{item:!0,xs:10,md:10,children:u===p&&(0,k.jsx)(b.J9,{initialValues:{trainingMediaName:"",url:p},validationSchema:Z.Ry().shape({trainingMediaName:Z.Z_().max(50,"Training Media Name length must be less than 50 characters").min(3,"Training Media Name length must be at least 3 characters").required("Training Media Name is required")}),onSubmit:async(e,t)=>{let{setErrors:i,setStatus:a,setSubmitting:o}=t;const{trainingMediaName:r}=e;try{U(p,r,n,"add"),a({success:!0}),o(!0)}catch(s){a({success:!1}),i({submit:s.message}),o(!1)}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:r,touched:s,values:d}=e;return(0,k.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,k.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,k.jsxs)(o.ZP,{item:!0,xs:8,md:8,children:[(0,k.jsx)(c.Z,{id:"trainingMediaName",type:"trainingMediaName",name:"trainingMediaName",placeholder:"Document Name",defaultValue:d.trainingMediaName,onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.trainingMediaName&&t&&t.trainingMediaName)}),s.trainingMediaName&&t.trainingMediaName&&(0,k.jsx)(l.Z,{error:!0,id:"helper-text-training-media-name",children:t.trainingMediaName})]}),(0,k.jsx)(o.ZP,{item:!0,xs:1,md:1,children:(0,k.jsx)(y.Z,{children:(0,k.jsx)(P.Z,{isLoading:r,disabled:r,type:"submit",variant:"contained",color:"primary",children:"Add"})})})]})})}})}),(0,k.jsx)(o.ZP,{item:!0,xs:1,md:1,children:(0,k.jsx)(D.Z,{title:"text/plain"===h?"View Document":"View Web Page",children:(0,k.jsx)(R.Z,{variant:"text",onClick:()=>{return e=p,void window.open(e);var e},children:(0,k.jsx)(_.Z,{style:{color:"#5ad74e"}})})})}),(0,k.jsxs)(o.ZP,{item:!0,xs:1,md:1,children:[(0,k.jsx)(D.Z,{title:"Delete",children:(0,k.jsx)(R.Z,{variant:"text",onClick:()=>d(!0),children:(0,k.jsx)(N.Z,{style:{color:"#ff0000"},fontSize:"small"})})}),(0,k.jsxs)(I.Z,{title:"Delete file?",open:s,setOpen:d,onConfirm:()=>(async(e,t,n,i)=>{try{const a={organizationId:i,botId:n,fileName:t,fileUrl:e};await(0,S.e7)(a,n,i),(0,w.W)(!0,"The file deleted successfully!","success")}catch(a){(0,w.W)(!0,"Not able to delete the file. Try after sometime!","error")}})(p,u,n,a),children:["Confirm the deletion of ",m||p,"?"]})]})]})})]})};var O=n(18757);const L=(0,p.ZP)(h.Z)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));function W(e){let{botId:t,organizationId:n}=e;const[a,o]=i.useState(!1),[r,s]=i.useState(!1),d=[{icon:(0,k.jsx)(g.Z,{}),name:"File Upload (.pdf,.doc,.docx,.txt)",method:()=>{s(!0)}},{icon:(0,k.jsx)(x.Z,{}),name:"Add Web Page url",method:()=>{o(!0)}}];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(L,{ariaLabel:"Upload Training Documents",hidden:!1,icon:(0,k.jsx)(m.Z,{}),direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},children:d.map((e=>(0,k.jsx)(u.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,k.jsx)(C.Z,{openPopUpDialog:a,setPopUpDialog:o,title:"Upload Training Documents",children:(0,k.jsx)(F,{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:o})}),(0,k.jsx)(O.Z,{isOpen:r,toggleOpen:s})]})}const H=function(){var e;const[t,n]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!1),c=(0,v.tN)((e=>e.botsList)),l=(0,v.tN)((e=>e.organizationId)),u=(0,v.tN)((e=>e.trainingMediaUpdate)),[p]=(0,j.g)(),h=null===(e=c.find((e=>e._id===p)))||void 0===e?void 0:e.trainingMedia;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(a.Z,{children:[(0,k.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(o.ZP,{item:!0,xs:3,children:(0,k.jsx)(r.Z,{variant:"h5",children:"Training Documents"})}),(0,k.jsx)(o.ZP,{item:!0,xs:6,sx:{position:"relative",display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)("div",{style:{position:"fixed",right:75},children:(0,k.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(o.ZP,{item:!0,children:u&&(0,k.jsx)(y.Z,{children:(0,k.jsx)(P.Z,{isLoading:t,disabled:t,variant:"contained",color:"success",size:"large",onClick:async()=>{try{n(!0);const e={botId:p,organizationId:l,trainingDocument:h};await(0,S.u7)(e,p),v.tN.setState((()=>({trainingMediaUpdate:!1}))),(0,w.W)(!0,"The document names updated successfully!","success"),n(!1)}catch(e){n(!1),(0,w.W)(!0,"Not able to add document names. Try after sometime!","error")}},children:"Save Changes"})})}),(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(y.Z,{children:(0,k.jsx)(P.Z,{isLoading:s,disabled:s,variant:"contained",color:"success",size:"large",onClick:async()=>{d(!0);try{const e=await(0,S.Vu)(p,l),{deleted:t,totalDocs:i,supportedDocsCount:a,processedDocsCount:o,created:r,failedDocsId:s}=e,c=s.length,u=c>0?c+" are failed to process":"all supported files processed successfully";d(!1),(0,w.W)(!0,"The bot training completed successfully! in ".concat(i," files ").concat(a," are supported, ").concat(o," files processed, ").concat(t," files deleted, ").concat(r," canned responses created and ").concat(u),"success"),n(!1)}catch(e){d(!1),(0,w.W)(!0,"Not able to train the bot. Try after sometime!","error")}},children:"Train the bot"})})})]})})}),(0,k.jsx)(o.ZP,{item:!0,xs:1,sx:{position:"relative"},id:"trainingDocumentsSpeedDial",children:(0,k.jsx)(W,{botId:p,organizationId:l})})]}),(0,k.jsx)(a.Z,{children:(0,k.jsx)(o.ZP,{container:!0,spacing:3,children:(0,k.jsx)(B,{trainingMedia:h,botId:p,organizationId:l})})})]})})};function F(e){let{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:i}=e;const a=(0,v.tN)((e=>e.botsList));return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsx)(b.J9,{initialValues:{webpageUrl:""},validationSchema:Z.Ry().shape({webpageUrl:Z.Z_().url("Enter valid url!").required("please enter webpage url")}),onSubmit:async(e,o)=>{let{setErrors:r,setStatus:s,setSubmitting:d}=o;try{var c;const o=(null===(c=a.find((e=>e._id===t)))||void 0===c?void 0:c.trainingMedia).some((t=>t.url===e.webpageUrl)),r={url:e.webpageUrl};o?(0,w.W)(!0,"This URL already available in the Training Documents!. Please add another URL","error"):(d(!0),await(0,S.jZ)(r,t,n),s({success:!0}),i(!1),(0,w.W)(!0,"The url added successfully!","success"))}catch(l){s({success:!1}),r({submit:l.message}),d(!1),i(!1),(0,w.W)(!0,"Not able to add the url. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:r,touched:u,values:p}=e;return(0,k.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,k.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(o.ZP,{item:!0,xs:9,md:9,children:(0,k.jsxs)(s.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{htmlFor:"webpage-url",children:"Webpage Url"}),(0,k.jsx)(c.Z,{id:"webpage-url",type:"webpageUrl",defaultValue:p.webpageUrl,name:"webpageUrl",onBlur:n,onChange:i,autoComplete:"off",fullWidth:!0,placeholder:"http://www.abc.com/index.html",error:Boolean(u.webpageUrl&&t.webpageUrl)}),u.webpageUrl&&t.webpageUrl&&(0,k.jsx)(l.Z,{error:!0,id:"helper-text-webpage-url",children:t.webpageUrl})]})}),(0,k.jsx)(o.ZP,{item:!0,xs:2,md:2,children:(0,k.jsxs)(s.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{children:"\xa0"}),(0,k.jsx)(y.Z,{children:(0,k.jsx)(P.Z,{isLoading:r,disabled:r,color:"primary",size:"large",type:"submit",variant:"contained",id:"webpageUrlSubmit",children:"Add"})})]})})]})})}})})})}function B(e){let{trainingMedia:t,botId:n,organizationId:i}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,children:t&&0===t.length&&(0,k.jsx)(r.Z,{variant:"caption",color:"#FF0000",children:(0,k.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,k.jsx)(f.Z,{style:{fontSize:40}})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:"Training Documents are not uploaded!"})]})})}),t&&t.map(((e,t)=>(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,k.jsx)(z,{media:e,botId:n,organizationId:i})},t)))]})}},80730:(e,t,n)=>{n.d(t,{Od:()=>d,TY:()=>u,U2:()=>o,gz:()=>s,v_:()=>r});var i=n(89637),a=n(32203);async function o(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,n){let{headers:i,noAuth:a,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===e||"PUT"===e||"DELETE"===e;if(t=u(t,r?void 0:n),n=n&&"object"===typeof n&&r?JSON.stringify(n):void 0,i||(i={}),i["Content-Type"]="application/json",i.Accept="application/json",!1!==a){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}const s=await fetch(t,{...o,headers:i,body:n,method:e}),d=await s.json();if(s.ok){const{data:e,...t}=d;return delete t.status,e&&!Object.keys(t).length?e:d}throw d.message?new Error(d.message):d}const l=(0,i.lf)(a.Hi,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}return e.startsWith("https://")?e:"".concat(l).concat(e)}},62619:(e,t,n)=>{n.d(t,{Cm:()=>s,fR:()=>r,vR:()=>o});var i=n(80730),a=n(23509);async function o(e){const{organizationId:t,selectedBotId:n}=a.tN.getState(),o=await i.v_("/bot/".concat(t,"/").concat(n,"/knowledge-base"),e);a.tN.setState((t=>{const i={...t.kbDocs||{}};if(i[n]=[...i[n]],e._id){const e=i[n].findIndex((e=>e._id===o._id));e>=0?i[n][e]=o:i[n].push(o)}else i[n].push(o);return{kbDocs:i}}))}async function r(e){const{organizationId:t,selectedBotId:n,kbDocs:o}=a.tN.getState();if(e&&Array.isArray(null===o||void 0===o?void 0:o[n]))return;const r=await i.U2("/bot/".concat(t,"/").concat(n,"/knowledge-base/list"));a.tN.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:r}})))}async function s(e){const{organizationId:t,selectedBotId:n}=a.tN.getState();await i.Od("/bot/".concat(t,"/").concat(n,"/knowledge-base/").concat(e)),a.tN.setState((t=>{var i;const a={...t.kbDocs||{}};return a[n]=null===(i=a[n])||void 0===i?void 0:i.filter((t=>t._id!==e)),{kbDocs:a}}))}},13032:(e,t,n)=>{n.d(t,{Rm:()=>u,Ur:()=>d,Vu:()=>l,e7:()=>s,jZ:()=>r,u7:()=>c});var i=n(80730),a=n(23509),o=n(62619);async function r(e,t,n){const o=await i.v_("/bot/add-training-media",e,{headers:{botId:t,organizationId:n}}),{trainingMedia:r}=o;((e,t)=>{a.tN.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,r)}async function s(e,t,n){const o=await i.v_("/bot/delete-training-media-document",e,{headers:{botId:t,organizationId:n}}),{trainingDocuments:r}=o;((e,t)=>{a.tN.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,r)}async function d(e){const{organizationId:t,selectedBotId:n}=a.tN.getState(),o=new FormData;o.append("file",e);const r={},s=sessionStorage.getItem("token");s&&(r.Authorization="Bearer ".concat(s)),r.Botid=n,r.Organizationid=t,r.Accept="application/json";const d=(0,i.TY)("/bot/add-training-media");await fetch(d,{headers:r,method:"POST",body:o}).then((e=>e.json())).then((e=>{const{trainingMedia:t}=e.data;((e,t)=>{a.tN.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(n,t)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}async function c(e,t){const n=await i.v_("/bot/add-tranining-document-name",e),{trainingMedia:o}=n;((e,t)=>{a.tN.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,o)}async function l(e,t){const n=await i.v_("/bot/".concat(t,"/").concat(e,"/knowledge-base/train"));return a.tN.setState((t=>{const n={...t.kbDocs||{}};return delete n[e],(0,o.fR)().catch((e=>console.error("Error fetching Knowledge base content:",e))),{kbDocs:n}})),n}async function u(e){const t=await i.v_("/bot/add-bot-tax-details",e);return a.tN.setState((t=>{const n={...t.botVerificationDetails||{}};return delete n[e.botId],{botVerificationDetails:n}})),t}},969:(e,t,n)=>{n.d(t,{g:()=>a});var i=n(23509);function a(e){const t=(0,i.tN)((e=>e.selectedBotId)),n=(0,i.tN)((n=>n.botsMap[e||t]));return[e||t,n]}},89637:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(a(t),"+$")),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(a)}n.d(t,{lf:()=>i,p6:()=>o})},32203:(e,t,n)=>{n.d(t,{Hi:()=>i,LC:()=>s,lB:()=>a,rn:()=>r,yu:()=>o});const i="https://devbackend.livhousing.com",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,s="https://60f1-203-192-224-75.ngrok-free.app"},44661:(e,t,n)=>{var i=n(64836);t.Z=void 0;var a=i(n(45045)),o=n(46417);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"}),"AddLink")},14487:(e,t,n)=>{var i=n(64836);t.Z=void 0;var a=i(n(45045)),o=n(46417);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},10237:(e,t,n)=>{var i=n(64836);t.Z=void 0;var a=i(n(45045)),o=n(46417);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},19259:(e,t,n)=>{var i=n(64836);t.Z=void 0;var a=i(n(45045)),o=n(46417);t.Z=(0,a.default)([(0,o.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,o.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber")},73428:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(87462),a=n(63366),o=n(47313),r=n(94146),s=n(21921),d=n(17592),c=n(77342),l=n(70501),u=n(77430),p=n(32298);function h(e){return(0,p.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=n(46417);const g=["className","raised"],x=(0,d.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:d=!1}=n,l=(0,a.Z)(n,g),u=(0,i.Z)({},n,{raised:d}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)})(u);return(0,m.jsx)(x,(0,i.Z)({className:(0,r.Z)(p.root,o),elevation:d?8:void 0,ref:t,ownerState:u},l))}))},56104:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(63366),a=n(87462),o=n(47313),r=n(94146),s=n(21921),d=n(17592),c=n(77342),l=n(77430),u=n(32298);function p(e){return(0,u.ZP)("MuiCardActions",e)}(0,l.Z)("MuiCardActions",["root","spacing"]);var h=n(46417);const m=["disableSpacing","className"],g=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),x=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:d}=n,l=(0,i.Z)(n,m),u=(0,a.Z)({},n,{disableSpacing:o}),x=(e=>{const{classes:t,disableSpacing:n}=e,i={root:["root",!n&&"spacing"]};return(0,s.Z)(i,p,t)})(u);return(0,h.jsx)(g,(0,a.Z)({className:(0,r.Z)(x.root,d),ownerState:u,ref:t},l))}))},93405:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(87462),a=n(63366),o=n(47313),r=n(94146),s=n(21921),d=n(17592),c=n(77342),l=n(77430),u=n(32298);function p(e){return(0,u.ZP)("MuiCardContent",e)}(0,l.Z)("MuiCardContent",["root"]);var h=n(46417);const m=["className","component"],g=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:d="div"}=n,l=(0,a.Z)(n,m),u=(0,i.Z)({},n,{component:d}),x=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(u);return(0,h.jsx)(g,(0,i.Z)({as:d,className:(0,r.Z)(x.root,o),ownerState:u,ref:t},l))}))},54641:(e,t,n)=>{n.d(t,{Z:()=>j});var i=n(63366),a=n(87462),o=n(47313),r=n(94146),s=n(21921),d=n(61113),c=n(77342),l=n(17592),u=n(77430),p=n(32298);function h(e){return(0,p.ZP)("MuiCardHeader",e)}const m=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=n(46417);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({["& .".concat(m.title)]:t.title,["& .".concat(m.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),j=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:l,className:u,component:p="div",disableTypography:m=!1,subheader:j,subheaderTypographyProps:y,title:S,titleTypographyProps:P}=n,C=(0,i.Z)(n,x),w=(0,a.Z)({},n,{component:p,disableTypography:m}),N=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(w);let _=S;null==_||_.type===d.Z||m||(_=(0,g.jsx)(d.Z,(0,a.Z)({variant:l?"body2":"h5",className:N.title,component:"span",display:"block"},P,{children:_})));let T=j;return null==T||T.type===d.Z||m||(T=(0,g.jsx)(d.Z,(0,a.Z)({variant:l?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:T}))),(0,g.jsxs)(f,(0,a.Z)({className:(0,r.Z)(N.root,u),as:p,ref:t,ownerState:w},C,{children:[l&&(0,g.jsx)(Z,{className:N.avatar,ownerState:w,children:l}),(0,g.jsxs)(v,{className:N.content,ownerState:w,children:[_,T]}),o&&(0,g.jsx)(b,{className:N.action,ownerState:w,children:o})]}))}))}}]);