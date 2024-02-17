"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[489],{32829:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(25371),a=n(44414);function r(e){let{children:t,type:n}=e;return(0,a.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},46278:(e,t,n)=>{n.d(t,{A:()=>d});n(9950);var i=n(63464),a=n(40033),r=n(28170),o=n(79739),s=n(10226),c=n(44414);const d=e=>{const{title:t,children:n,open:d,setOpen:l,onConfirm:u}=e;return(0,c.jsxs)(i.A,{open:d,onClose:()=>l(!1),style:{zIndex:1e4},children:[(0,c.jsx)(a.A,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,c.jsx)(r.A,{dividers:!0,children:n}),(0,c.jsxs)(o.A,{children:[(0,c.jsx)(s.A,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>l(!1),children:"No"}),(0,c.jsx)(s.A,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{l(!1),u()},children:"Yes"})]})]})}},92728:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(9950),a=n(48205),r=n(44414);const o=i.forwardRef((function(e,t){return(0,r.jsx)(a.A,{direction:"up",ref:t,...e})}))},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),a=n(14857),r=n(48089),o=n(45180),s=n(82053),c=n(50704),d=n(44414);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:p=!0,contentSX:h={},darkTitle:g,elevation:m,secondary:A,shadow:x,sx:f={},title:b,...y}=e;const v=(0,a.A)();return i="dark"===v.palette.mode?i||!0:i,(0,d.jsxs)(r.A,{elevation:m||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===v.palette.mode?v.palette.divider:v.palette.grey.A800,boxShadow:!i||n&&"dark"!==v.palette.mode?"inherit":x||v.customShadows.z1,":hover":{boxShadow:i?x||v.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:v.typography.fontFamily,fontSize:"0.75rem"},...f},children:[!g&&b&&(0,d.jsx)(o.A,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:b,action:A}),g&&b&&(0,d.jsx)(o.A,{sx:l,title:(0,d.jsx)(s.A,{variant:"h3",children:b}),action:A}),p&&(0,d.jsx)(c.A,{sx:h,children:u}),!p&&u]})}))},26092:(e,t,n)=>{n.d(t,{A:()=>h});n(9950);var i=n(92728),a=n(63464),r=n(40033),o=n(28170),s=n(96319),c=n(59254),d=n(14857),l=n(25333),u=n(44414);const p=(0,c.Ay)(a.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function h(e){const t=(0,d.A)(),{breakpoints:n}=t,{openPopUpDialog:a,setPopUpDialog:c,title:h}=e;return(0,u.jsxs)(p,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:a,PaperProps:{sx:{width:"60%",[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(r.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:h}),(0,u.jsx)(l.A,{"aria-label":"close",onClick:()=>{c(!1)},sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(s.A,{})}),(0,u.jsx)(o.A,{dividers:!0,children:e.children})]})}},93383:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(9950),a=n(10226),r=n(46639),o=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:c,...d}=e;const[l,u]=i.useState(s);return(0,o.jsxs)(a.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||s||n,...d,children:[(l||s)&&(0,o.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},6716:(e,t,n)=>{n.d(t,{A:()=>f});n(9950);var i=n(60899),a=n(93230),r=n(3788),o=n(82053),s=n(10226),c=n(24516),d=n(29714),l=n(61467),u=n(32829),p=n(26092),h=n(44364),g=n(30334),m=n(70855),A=n(58178),x=n(44414);const f=function(e){let{isOpen:t,toggleOpen:n}=e;return(0,x.jsx)(p.A,{openPopUpDialog:t,setPopUpDialog:n,title:"Upload Training Documents",children:(0,x.jsx)(v,{setDocumentUploadDialogOpen:n})})},b=h.Og?h.Og:5242880,y=d.Ik().shape({file:d.gl().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(b/1048576," MB"),(e=>e&&e.size<=b))});function v(e){let{setDocumentUploadDialogOpen:t}=e;const[,n]=(0,m.G)(),d=null===n||void 0===n?void 0:n.trainingMedia;return(0,x.jsxs)(i.Ay,{container:!0,spacing:1,children:[(0,x.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(a.A,{spacing:1,children:(0,x.jsx)(r.A,{children:"File Upload (.csv, .txt, .docx, .pdf)"})})}),(0,x.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(l.l1,{initialValues:{file:null},validationSchema:y,onSubmit:async(e,n)=>{let{setErrors:i,setStatus:a,setSubmitting:r}=n;try{const{name:n}=e.file;d.some((e=>e.originalName===n))?(0,A.i)(!0,"The file already uploaded!. Please select another file","error"):(r(!0),await(0,g.MD)(e.file),a({success:!0}),t(!1),(0,A.i)(!0,"The file uploaded successfully!","success"))}catch(o){console.error("Error uploading the document:",o),a({success:!1}),i({submit:o.message}),r(!1),t(!1),(0,A.i)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:n,isSubmitting:a,setFieldValue:r}=e;return(0,x.jsxs)(l.lV,{children:[(0,x.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,x.jsx)(i.Ay,{item:!0,xs:12,md:12,children:t.file&&(0,x.jsxs)(o.A,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,x.jsx)(i.Ay,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,x.jsx)(l.D0,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,x.jsx)(u.A,{children:(0,x.jsxs)(s.A,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,x.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{r("file",e.currentTarget.files[0])},accept:".csv,.txt,.docx,.doc,.pdf,text/plain"})]})})}})}),(0,x.jsx)(i.Ay,{item:!0,xs:6,md:6,children:(0,x.jsx)(u.A,{children:(0,x.jsx)(s.A,{variant:"contained",size:"large",type:"submit",disabled:a,children:a?"Uploading...":"Upload"})})})]}),(0,x.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(c.A,{error:!0,id:"helper-text-file-input",children:n.file})})]})}})})]})}},11489:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var i=n(9950),a=n(16491),r=n(60899),o=n(82053),s=n(93230),c=n(3788),d=n(2660),l=n(24516),u=n(33092),p=n(59254),h=n(80417),g=n(79046),m=n(12504),A=n(4120),x=n(94540),f=n(29714),b=n(61467),y=n(69713),v=n(70855),j=n(32829),S=n(30334),w=n(93383),C=n(26092),D=n(58178),M=n(57988),_=n(62375),T=n(50704),E=n(53065),N=n(25713),R=n(25333),I=n(25277),P=n(51637),k=n(46278);function U(e,t,n,i){function a(e,t,n){const{botsList:i}=y.nc.getState(),a=i.find((t=>t._id===e));if(a){const i=a.trainingMedia.map((e=>e.url===t?{...e,name:n}:e));((e,t)=>{y.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(e,i),y.nc.setState((()=>({trainingMediaUpdate:!0})))}else console.error("Bot not found for the given ID.")}a(n,e,"delete"===i?e:t)}var O=n(44414);const z=function(e){let{media:t,botId:n,organizationId:a}=e;const[s,c]=i.useState(!1),{name:u,url:p,type:h,originalName:g}=t;return(0,O.jsxs)(P.A,{contentSX:{p:2.25},children:[(0,O.jsxs)(T.A,{style:{padding:0,minHeight:"65px",maxHeight:"65px"},children:[g&&(0,O.jsxs)(o.A,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,O.jsx)("strong",{children:"File Name :"})," ",(0,O.jsx)(E.A,{style:{cursor:"pointer"},title:g,children:(0,O.jsx)("span",{children:(0,O.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:g})})})]}),"single_page"===h&&(0,O.jsxs)(o.A,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,O.jsx)("strong",{children:"URL :"})," ",(0,O.jsx)(E.A,{style:{cursor:"pointer"},title:p,children:(0,O.jsx)("span",{children:(0,O.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:p})})})]}),(0,O.jsxs)(o.A,{variant:"h6",children:[(0,O.jsx)("strong",{children:"Type :"})," ","single_page"===h?"Web Page":"Document"]}),(0,O.jsxs)(o.A,{variant:"h6",children:[(0,O.jsx)("strong",{children:"Document Name :"})," ",u===p?"NA":(0,O.jsx)(I.A,{label:u,onDelete:()=>((e,t,n)=>{U(e,t,n,"delete")})(p,u,n)})]})]}),(0,O.jsx)(N.A,{style:{justifyContent:"flex-end",padding:"1px"},children:(0,O.jsxs)(r.Ay,{container:!0,children:[(0,O.jsx)(r.Ay,{item:!0,xs:10,md:10,children:u===p&&(0,O.jsx)(b.l1,{initialValues:{trainingMediaName:"",url:p},validationSchema:f.Ik().shape({trainingMediaName:f.Yj().max(50,"Training Media Name length must be less than 50 characters").min(3,"Training Media Name length must be at least 3 characters").required("Training Media Name is required")}),onSubmit:async(e,t)=>{let{setErrors:i,setStatus:a,setSubmitting:r}=t;const{trainingMediaName:o}=e;try{U(p,o,n,"add"),a({success:!0}),r(!0)}catch(s){a({success:!1}),i({submit:s.message}),r(!1)}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:o,touched:s,values:c}=e;return(0,O.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,O.jsxs)(r.Ay,{container:!0,spacing:1,children:[(0,O.jsxs)(r.Ay,{item:!0,xs:8,md:8,children:[(0,O.jsx)(d.A,{id:"trainingMediaName",type:"trainingMediaName",name:"trainingMediaName",placeholder:"Document Name",defaultValue:c.trainingMediaName,onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(s.trainingMediaName&&t&&t.trainingMediaName)}),s.trainingMediaName&&t.trainingMediaName&&(0,O.jsx)(l.A,{error:!0,id:"helper-text-training-media-name",children:t.trainingMediaName})]}),(0,O.jsx)(r.Ay,{item:!0,xs:1,md:1,children:(0,O.jsx)(j.A,{children:(0,O.jsx)(w.A,{isLoading:o,disabled:o,type:"submit",variant:"contained",color:"primary",children:"Add"})})})]})})}})}),(0,O.jsx)(r.Ay,{item:!0,xs:1,md:1,children:(0,O.jsx)(E.A,{title:"text/plain"===h?"View Document":"View Web Page",children:(0,O.jsx)(R.A,{variant:"text",onClick:()=>{return e=p,void window.open(e);var e},children:(0,O.jsx)(_.A,{style:{color:"#5ad74e"}})})})}),(0,O.jsxs)(r.Ay,{item:!0,xs:1,md:1,children:[(0,O.jsx)(E.A,{title:"Delete",children:(0,O.jsx)(R.A,{variant:"text",onClick:()=>c(!0),children:(0,O.jsx)(M.A,{style:{color:"#ff0000"},fontSize:"small"})})}),(0,O.jsxs)(k.A,{title:"Delete file?",open:s,setOpen:c,onConfirm:()=>(async(e,t,n,i)=>{try{const a={organizationId:i,botId:n,fileName:t,fileUrl:e};await(0,S.qt)(a,n,i),(0,D.i)(!0,"The file deleted successfully!","success")}catch(a){(0,D.i)(!0,"Not able to delete the file. Try after sometime!","error")}})(p,u,n,a),children:["Confirm the deletion of ",g||p,"?"]})]})]})})]})};var L=n(6716);const F=(0,p.Ay)(h.A)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));function H(e){let{botId:t,organizationId:n}=e;const[a,r]=i.useState(!1),[o,s]=i.useState(!1),c=[{icon:(0,O.jsx)(m.A,{}),name:"File Upload (.csv, .txt, .docx, .pdf)",method:()=>{s(!0)}},{icon:(0,O.jsx)(A.A,{}),name:"Add Web Page url",method:()=>{r(!0)}}];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(F,{ariaLabel:"Upload Training Documents",hidden:!1,icon:(0,O.jsx)(g.A,{}),direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},children:c.map((e=>(0,O.jsx)(u.A,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,O.jsx)(C.A,{openPopUpDialog:a,setPopUpDialog:r,title:"Upload Training Documents",children:(0,O.jsx)(V,{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:r})}),(0,O.jsx)(L.A,{isOpen:o,toggleOpen:s})]})}const B=function(){var e;const[t,n]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),d=(0,y.nc)((e=>e.botsList)),l=(0,y.nc)((e=>e.organizationId)),u=(0,y.nc)((e=>e.trainingMediaUpdate)),[p]=(0,v.G)(),h=null===(e=d.find((e=>e._id===p)))||void 0===e?void 0:e.trainingMedia;return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(a.A,{children:[(0,O.jsxs)(r.Ay,{container:!0,spacing:3,children:[(0,O.jsx)(r.Ay,{item:!0,xs:3,children:(0,O.jsx)(o.A,{variant:"h5",children:"Training Documents"})}),(0,O.jsx)(r.Ay,{item:!0,xs:6,sx:{position:"relative",display:"flex",justifyContent:"flex-end"},children:(0,O.jsx)("div",{style:{position:"fixed",right:75},children:(0,O.jsxs)(r.Ay,{container:!0,spacing:3,children:[(0,O.jsx)(r.Ay,{item:!0,children:u&&(0,O.jsx)(j.A,{children:(0,O.jsx)(w.A,{isLoading:t,disabled:t,variant:"contained",color:"success",size:"large",onClick:async()=>{try{n(!0);const e={botId:p,organizationId:l,trainingDocument:h};await(0,S.xW)(e,p),y.nc.setState((()=>({trainingMediaUpdate:!1}))),(0,D.i)(!0,"The document names updated successfully!","success"),n(!1)}catch(e){n(!1),(0,D.i)(!0,"Not able to add document names. Try after sometime!","error")}},children:"Save Changes"})})}),(0,O.jsx)(r.Ay,{item:!0,children:(0,O.jsx)(j.A,{children:(0,O.jsx)(w.A,{isLoading:s,disabled:s,variant:"contained",color:"success",size:"large",onClick:async()=>{c(!0);try{const e=await(0,S.Ei)(p,l),{deleted:t,totalDocs:i,supportedDocsCount:a,processedDocsCount:r,created:o,failedDocs:s}=e,d=s.length,u=d>0?d+" are failed to process":"all supported files processed successfully";c(!1),(0,D.i)(!0,"The bot training completed successfully! In ".concat(i," files ").concat(a," are supported, ").concat(r," files processed, ").concat(t," FAQ's deleted, ").concat(o," FAQ's created and ").concat(u),"success"),n(!1)}catch(e){c(!1),(0,D.i)(!0,"Not able to train the bot. Try after sometime!","error")}},children:"Train the bot"})})})]})})}),(0,O.jsx)(r.Ay,{item:!0,xs:1,sx:{position:"relative"},id:"trainingDocumentsSpeedDial",children:(0,O.jsx)(H,{botId:p,organizationId:l})})]}),(0,O.jsx)(a.A,{children:(0,O.jsx)(r.Ay,{container:!0,spacing:3,children:(0,O.jsx)(W,{trainingMedia:h,botId:p,organizationId:l})})})]})})};function V(e){let{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:i}=e;const[,a]=(0,v.G)();return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(r.Ay,{item:!0,xs:12,children:(0,O.jsx)(b.l1,{initialValues:{webpageUrl:""},validationSchema:f.Ik().shape({webpageUrl:f.Yj().url("Enter valid url!").required("please enter webpage url")}),onSubmit:async(e,r)=>{let{setErrors:o,setStatus:s,setSubmitting:c}=r;try{const{trainingMedia:r}=a;if(r.some((t=>{var n,i;return(null===(n=t.url)||void 0===n?void 0:n.toLowerCase())===(null===(i=e.webpageUrl)||void 0===i?void 0:i.toLowerCase())})))(0,D.i)(!0,"This URL already available in the Training Documents!. Please add another URL","error");else{const a={url:e.webpageUrl};c(!0),await(0,S.KM)(a,t,n),s({success:!0}),i(!1),(0,D.i)(!0,"The url added successfully!","success")}}catch(d){console.error("Error adding training documents:-",d),s({success:!1}),o({submit:d.message}),c(!1),i(!1),(0,D.i)(!0,"Not able to add the url. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:o,touched:u,values:p}=e;return(0,O.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,O.jsxs)(r.Ay,{container:!0,spacing:1,children:[(0,O.jsx)(r.Ay,{item:!0,xs:9,md:9,children:(0,O.jsxs)(s.A,{spacing:1,children:[(0,O.jsx)(c.A,{htmlFor:"webpage-url",children:"Webpage Url"}),(0,O.jsx)(d.A,{id:"webpage-url",type:"webpageUrl",defaultValue:p.webpageUrl,name:"webpageUrl",onBlur:n,onChange:i,autoComplete:"off",fullWidth:!0,placeholder:"https://www.yourwebsite.com/product-info",error:Boolean(u.webpageUrl&&t.webpageUrl)}),u.webpageUrl&&t.webpageUrl&&(0,O.jsx)(l.A,{error:!0,id:"helper-text-webpage-url",children:t.webpageUrl})]})}),(0,O.jsx)(r.Ay,{item:!0,xs:2,md:2,children:(0,O.jsxs)(s.A,{spacing:1,children:[(0,O.jsx)(c.A,{children:"\xa0"}),(0,O.jsx)(j.A,{children:(0,O.jsx)(w.A,{isLoading:o,disabled:o,color:"primary",size:"large",type:"submit",variant:"contained",id:"webpageUrlSubmit",children:"Add"})})]})})]})})}})})})}function W(e){let{trainingMedia:t,botId:n,organizationId:i}=e;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(r.Ay,{item:!0,xs:12,children:t&&0===t.length&&(0,O.jsx)(o.A,{variant:"caption",color:"#FF0000",children:(0,O.jsxs)(r.Ay,{container:!0,spacing:1,children:[(0,O.jsx)(r.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,O.jsx)(x.A,{style:{fontSize:40}})}),(0,O.jsx)(r.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:"Training Documents are not uploaded!"})]})})}),t&&t.map(((e,t)=>(0,O.jsx)(r.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,O.jsx)(z,{media:e,botId:n,organizationId:i})},t)))]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>r,Ne:()=>u,TF:()=>c,bE:()=>o,yJ:()=>s});var i=n(32026),a=n(44364);async function r(e,t){return d("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function o(e,t){return d("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return d("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return d("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t,n){let{headers:i,noAuth:a,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o="POST"===e||"PUT"===e||"DELETE"===e;t=u(t,o?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&o?JSON.stringify(n):void 0),i||(i={}),s||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==a){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const a=await fetch(t,{...r,headers:i,body:n,method:e}),o=await a.json();if(a.ok){const{data:e,...t}=o;return delete t.status,e&&!Object.keys(t).length?e:o}throw o.message?new Error(o.message):o}catch(d){var c;throw console.error("Error calling API: ",d),null!==(c=d.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,i.s8)(a.jn,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}return e.startsWith("https://")?e:"".concat(l).concat(e)}},77382:(e,t,n)=>{n.d(t,{CA:()=>s,Mk:()=>r,bZ:()=>o});var i=n(8478),a=n(69713);async function r(e){const{organizationId:t,selectedBotId:n}=a.nc.getState(),r=await i.bE("/bot/".concat(t,"/").concat(n,"/knowledge-base"),e);a.nc.setState((t=>{const i={...t.kbDocs||{}};if(i[n]=[...i[n]],e._id){const e=i[n].findIndex((e=>e._id===r._id));e>=0?i[n][e]=r:i[n].push(r)}else i[n].push(r);return{kbDocs:i}}))}async function o(e){const{organizationId:t,selectedBotId:n,kbDocs:r}=a.nc.getState();if(e&&Array.isArray(null===r||void 0===r?void 0:r[n]))return;const o=await i.Jt("/bot/".concat(t,"/").concat(n,"/knowledge-base/list"));a.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:o}})))}async function s(e){const{organizationId:t,selectedBotId:n}=a.nc.getState();await i.TF("/bot/".concat(t,"/").concat(n,"/knowledge-base/").concat(e)),a.nc.setState((t=>{var i;const a={...t.kbDocs||{}};return a[n]=null===(i=a[n])||void 0===i?void 0:i.filter((t=>t._id!==e)),{kbDocs:a}}))}},30334:(e,t,n)=>{n.d(t,{Ei:()=>l,KM:()=>o,MD:()=>c,pn:()=>u,qt:()=>s,xW:()=>d});var i=n(8478),a=n(69713),r=n(77382);async function o(e,t,n){const r=await i.bE("/bot/add-training-media",e,{headers:{botId:t,organizationId:n}}),{trainingMedia:o}=r;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,o)}async function s(e,t,n){const r=await i.bE("/bot/delete-training-media-document",e,{headers:{botId:t,organizationId:n}}),{trainingDocuments:o}=r;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,o)}async function c(e){const{organizationId:t,selectedBotId:n}=a.nc.getState(),r=new FormData;r.append("file",e);const o={},s=sessionStorage.getItem("token");s&&(o.Authorization="Bearer ".concat(s)),o.Botid=n,o.Organizationid=t,o.Accept="application/json";const c=(0,i.Ne)("/bot/add-training-media");await fetch(c,{headers:o,method:"POST",body:r}).then((e=>e.json())).then((e=>{const{trainingMedia:t}=e.data;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(n,t)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}async function d(e,t){const n=await i.bE("/bot/add-tranining-document-name",e),{trainingMedia:r}=n;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,r)}async function l(e,t){const n=await i.bE("/bot/".concat(t,"/").concat(e,"/knowledge-base/train"));return a.nc.setState((t=>{const n={...t.kbDocs||{}};return delete n[e],(0,r.bZ)().catch((e=>console.error("Error fetching Knowledge base content:",e))),{kbDocs:n}})),n}async function u(e){const t=await i.bE("/bot/add-bot-tax-details",e),{_id:n,botDetailsForVerification:r}=t;var o,s;return o=n,s=r,a.nc.setState((e=>{const t=e.botsList.map((e=>e._id===o?{...e,botDetailsForVerification:s}:e));return{...e,botsList:t}})),r}},70855:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(69713);function a(e){const t=(0,i.nc)((e=>e.selectedBotId)),n=(0,i.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(a(t),"+$")),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(a)}function o(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),r=t.substring(0,a),s=t.substring(a+1);i[r]=o(e[r],s,n)}else i[t]=n;return i}n.d(t,{G6:()=>o,Yq:()=>r,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>s,Og:()=>r,jn:()=>i,pA:()=>o,pR:()=>a});const i="https://devbackend.livhousing.com",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,s="https://60f1-203-192-224-75.ngrok-free.app"},4120:(e,t,n)=>{var i=n(24994);t.A=void 0;var a=i(n(79526)),r=n(44414);t.A=(0,a.default)((0,r.jsx)("path",{d:"M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"}),"AddLink")},12504:(e,t,n)=>{var i=n(24994);t.A=void 0;var a=i(n(79526)),r=n(44414);t.A=(0,a.default)((0,r.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},62375:(e,t,n)=>{var i=n(24994);t.A=void 0;var a=i(n(79526)),r=n(44414);t.A=(0,a.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},94540:(e,t,n)=>{var i=n(24994);t.A=void 0;var a=i(n(79526)),r=n(44414);t.A=(0,a.default)([(0,r.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,r.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber")},48089:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(58168),a=n(98587),r=n(9950),o=n(72004),s=n(74061),c=n(59254),d=n(48283),l=n(2235),u=n(80863),p=n(68483);function h(e){return(0,p.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var g=n(44414);const m=["className","raised"],A=(0,c.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),x=r.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCard"}),{className:r,raised:c=!1}=n,l=(0,a.A)(n,m),u=(0,i.A)({},n,{raised:c}),p=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},h,t)})(u);return(0,g.jsx)(A,(0,i.A)({className:(0,o.A)(p.root,r),elevation:c?8:void 0,ref:t,ownerState:u},l))}))},25713:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(98587),a=n(58168),r=n(9950),o=n(72004),s=n(74061),c=n(59254),d=n(48283),l=n(80863),u=n(68483);function p(e){return(0,u.Ay)("MuiCardActions",e)}(0,l.A)("MuiCardActions",["root","spacing"]);var h=n(44414);const g=["disableSpacing","className"],m=(0,c.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,a.A)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),A=r.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:c}=n,l=(0,i.A)(n,g),u=(0,a.A)({},n,{disableSpacing:r}),A=(e=>{const{classes:t,disableSpacing:n}=e,i={root:["root",!n&&"spacing"]};return(0,s.A)(i,p,t)})(u);return(0,h.jsx)(m,(0,a.A)({className:(0,o.A)(A.root,c),ownerState:u,ref:t},l))}))},50704:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(58168),a=n(98587),r=n(9950),o=n(72004),s=n(74061),c=n(59254),d=n(48283),l=n(80863),u=n(68483);function p(e){return(0,u.Ay)("MuiCardContent",e)}(0,l.A)("MuiCardContent",["root"]);var h=n(44414);const g=["className","component"],m=(0,c.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),A=r.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCardContent"}),{className:r,component:c="div"}=n,l=(0,a.A)(n,g),u=(0,i.A)({},n,{component:c}),A=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},p,t)})(u);return(0,h.jsx)(m,(0,i.A)({as:c,className:(0,o.A)(A.root,r),ownerState:u,ref:t},l))}))},45180:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(98587),a=n(58168),r=n(9950),o=n(72004),s=n(74061),c=n(82053),d=n(48283),l=n(59254),u=n(80863),p=n(68483);function h(e){return(0,p.Ay)("MuiCardHeader",e)}const g=(0,u.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var m=n(44414);const A=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.A)({["& .".concat(g.title)]:t.title,["& .".concat(g.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),v=r.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCardHeader"}),{action:r,avatar:l,className:u,component:p="div",disableTypography:g=!1,subheader:v,subheaderTypographyProps:j,title:S,titleTypographyProps:w}=n,C=(0,i.A)(n,A),D=(0,a.A)({},n,{component:p,disableTypography:g}),M=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(D);let _=S;null==_||_.type===c.A||g||(_=(0,m.jsx)(c.A,(0,a.A)({variant:l?"body2":"h5",className:M.title,component:"span",display:"block"},w,{children:_})));let T=v;return null==T||T.type===c.A||g||(T=(0,m.jsx)(c.A,(0,a.A)({variant:l?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:T}))),(0,m.jsxs)(x,(0,a.A)({className:(0,o.A)(M.root,u),as:p,ref:t,ownerState:D},C,{children:[l&&(0,m.jsx)(f,{className:M.avatar,ownerState:D,children:l}),(0,m.jsxs)(y,{className:M.content,ownerState:D,children:[_,T]}),r&&(0,m.jsx)(b,{className:M.action,ownerState:D,children:r})]}))}))}}]);