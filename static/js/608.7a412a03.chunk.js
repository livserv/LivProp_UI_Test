"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[608],{25040:(e,t,i)=>{i.d(t,{c:()=>s});var n=i(74836),o=i(97884);function s(e){let{children:t,type:i}=e;return(0,o.jsx)(n.q.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}s.defaultProps={type:"scale"}},96140:(e,t,i)=>{i.d(t,{c:()=>l});i(99584);var n=i(89668),o=i(91552),s=i(26488),a=i(55704),r=i(43924),c=i(97884);const l=e=>{const{title:t,children:i,open:l,setOpen:d,onConfirm:p}=e;return(0,c.jsxs)(n.c,{open:l,onClose:()=>d(!1),style:{zIndex:1e4},children:[(0,c.jsx)(o.c,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,c.jsx)(s.c,{dividers:!0,children:i}),(0,c.jsxs)(a.c,{children:[(0,c.jsx)(r.c,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>d(!1),children:"No"}),(0,c.jsx)(r.c,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{d(!1),p()},children:"Yes"})]})]})}},58092:(e,t,i)=>{i.d(t,{c:()=>a});var n=i(99584),o=i(4568),s=i(97884);const a=n.forwardRef((function(e,t){return(0,s.jsx)(o.c,{direction:"up",ref:t,...e})}))},1816:(e,t,i)=>{i.d(t,{c:()=>p});var n=i(99584),o=i(60392),s=i(65936),a=i(78640),r=i(43664),c=i(36744),l=i(97884);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},p=(0,n.forwardRef)(((e,t)=>{let{border:i=!0,boxShadow:n,children:p,content:u=!0,contentSX:h={},darkTitle:m,elevation:x,secondary:f,shadow:g,sx:v={},title:y,...b}=e;const j=(0,o.c)();return n="dark"===j.palette.mode?n||!0:n,(0,l.jsxs)(s.c,{elevation:x||0,ref:t,...b,sx:{border:i?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!n||i&&"dark"!==j.palette.mode?"inherit":g||j.customShadows.z1,":hover":{boxShadow:n?g||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...v},children:[!m&&y&&(0,l.jsx)(a.c,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:y,action:f}),m&&y&&(0,l.jsx)(a.c,{sx:d,title:(0,l.jsx)(r.c,{variant:"h3",children:y}),action:f}),u&&(0,l.jsx)(c.c,{sx:h,children:p}),!u&&p]})}))},64296:(e,t,i)=>{i.d(t,{c:()=>h});i(99584);var n=i(58092),o=i(89668),s=i(91552),a=i(26488),r=i(86632),c=i(25496),l=i(60392),d=i(62624),p=i(97884);const u=(0,c.cp)(o.c)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function h(e){const t=(0,l.c)(),{breakpoints:i}=t,{openPopUpDialog:o,setPopUpDialog:c,title:h}=e;return(0,p.jsxs)(u,{TransitionComponent:n.c,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:"60%",[i.down("sm")]:{width:"90%"}}},children:[(0,p.jsx)(s.c,{sx:{m:0,p:2},id:"customized-dialog-title",children:h}),(0,p.jsx)(d.c,{"aria-label":"close",onClick:()=>{c(!1)},sx:{position:"absolute",right:8,top:8},children:(0,p.jsx)(r.c,{})}),(0,p.jsx)(a.c,{dividers:!0,children:e.children})]})}},62216:(e,t,i)=>{i.d(t,{c:()=>r});var n=i(99584),o=i(43924),s=i(49700),a=i(97884);const r=function(e){let{onClick:t,disabled:i,isLoading:r,children:c,...l}=e;const[d,p]=n.useState(r);return(0,a.jsxs)(o.c,{onClick:e=>{if(!t)return;const i=t(e);"function"===typeof(null===i||void 0===i?void 0:i.finally)&&(p(!0),i.finally((()=>p(!1))))},disabled:d||r||i,...l,children:[(d||r)&&(0,a.jsx)(s.c,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},5628:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var n=i(99584),o=i(86344),s=i(43664),a=i(90760),r=i(2496),c=i(25528),l=i(49892),d=i(36744),p=i(43924),u=i(9608),h=i(55056),m=i(62624),x=i(58632),f=i(34144),g=i(5060),v=i(54096),y=i(65848),b=i(80712),j=i(72512),S=i(12316),w=i(79028),C=i(1816),_=i(25040),k=i(69700),A=i(76312),E=i(53632);const M=i.p+"static/media/media-image.16ef5ffabad85fb7ba76.png";var R=i(64296),T=i(62216),z=i(35240);var I=i(96140);function P(e,t,i,n){!function(e,t,i,n){const{botsList:o}=A.mW.getState(),s=o.find((t=>t._id===e));if(s){const o=s.conversationMedia.map((e=>{if(e.url===t){let t=null;return"add"===n?e.keywords.includes(i)?(t=[...e.keywords],(0,k.l)(!0,"The keyword already in the keyword list, Please add another keyword","error")):t=[...e.keywords,i]:"delete"===n&&(t=e.keywords.filter((e=>e!==i))),{...e,keywords:t}}return e}));((e,t)=>{A.mW.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,conversationMedia:t}:i));return{...i,botsList:n}}))})(e,o),A.mW.setState((()=>({conversationMediaUpdate:!0})))}else(0,k.l)(!0,"Bot not found for the given ID.","error")}(i,e,t,n)}var D=i(97884);const N=function(){var e;const t=(0,A.mW)((e=>e.botsList)),[i]=(0,E._)(),n=null===(e=t.find((e=>e._id===i)))||void 0===e?void 0:e.conversationMedia,o=(0,A.mW)((e=>e.organizationId));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(O,{organizationId:o,botId:i}),(0,D.jsx)(L,{botId:i,organizationId:o,conversationMediaList:n})]})};function O(e){var t;let{organizationId:i,botId:u}=e;const[h,m]=(0,n.useState)(!1),[x,v]=n.useState(!1),y=(0,A.mW)((e=>e.conversationMediaUpdate)),b=null===(t=(0,A.mW)((e=>e.botsList)).find((e=>e._id===u)))||void 0===t?void 0:t.conversationMedia,C=w.vc?w.vc:5242880,E=j.kt().shape({file:j.Er().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(C/1048576," MB"),(e=>e&&e.size<=C))});return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(o.cp,{container:!0,spacing:3,children:[(0,D.jsx)(o.cp,{item:!0,xs:8,children:(0,D.jsx)(s.c,{variant:"h5",children:"Conversation Media"})}),(0,D.jsx)(o.cp,{item:!0,xs:3,sx:{position:"relative",display:"flex",justifyContent:"flex-end"},children:y&&(0,D.jsx)("div",{style:{position:"fixed"},children:(0,D.jsx)(_.c,{children:(0,D.jsx)(T.c,{isLoading:h,disabled:h,variant:"contained",color:"success",size:"large",onClick:async()=>{m(!0);try{const e={botId:u,organizationId:i,conversationMedia:b};await async function(e,t){const i=await z.s$("/bot/save-conversation-media",e),{conversationMedia:n}=i;((e,t)=>{A.mW.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,conversationMedia:t}:i));return{...i,botsList:n}}))})(t,n)}(e,u),A.mW.setState((()=>({conversationMediaUpdate:!1}))),(0,k.l)(!0,"The conversation Media keywords updated successfully!","success"),m(!1)}catch(e){m(!1),(0,k.l)(!0,"Not able to update conversation Media keywords. Try after sometime!","error")}},children:"Save Changes"})})})}),(0,D.jsx)(o.cp,{item:!0,xs:1,sx:{position:"relative"},style:{paddingTop:25,display:"flex",justifyContent:"right"},children:(0,D.jsx)(l.c,{title:"Upload Conversation Media",children:(0,D.jsx)(f.c,{color:"primary",size:"small",style:{position:"fixed"},onClick:()=>{v(!0)},children:(0,D.jsx)(g.c,{})})})})]}),(0,D.jsx)(R.c,{openPopUpDialog:x,setPopUpDialog:v,title:"Upload Conversation Media",children:(0,D.jsx)(a.c,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,D.jsxs)(o.cp,{container:!0,spacing:3,justify:"center",children:[(0,D.jsx)(o.cp,{item:!0,xs:12,style:{padding:0,display:"flex",alignItems:"baseline",justifyContent:"center"},children:"Upload Media (*.png,*.jpeg,*.jpg,*.mpeg,*.mp4,*.pdf)"}),(0,D.jsx)(o.cp,{item:!0,xs:12,justify:"center",children:(0,D.jsx)(d.c,{style:{padding:0,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:(0,D.jsx)(r.c,{spacing:1,children:(0,D.jsx)(S.QJ,{initialValues:{file:null},validationSchema:E,onSubmit:async(e,t)=>{let{setErrors:n,setStatus:o,setSubmitting:s}=t;try{const{name:t}=e.file;b.some((e=>e.name===t))?(0,k.l)(!0,"The file already uploaded!. Please select another file","error"):(await async function(e,t,i){const n=new FormData;n.append("file",e);const o={},s=sessionStorage.getItem("token");s&&(o.Authorization="Bearer ".concat(s)),o.Botid=t,o.Organizationid=i,o.Accept="application/json";const a=z.wz("/bot/upload-conversation-media");await fetch(a,{headers:o,method:"POST",body:n}).then((e=>e.json())).then((e=>{const{conversationMedia:i}=e.data;((e,t)=>{A.mW.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,conversationMedia:t}:i));return{...i,botsList:n}}))})(t,i)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}(e.file,u,i),o({success:!0}),s(!0),v(!1),(0,k.l)(!0,"The file uploaded successfully!","success"))}catch(a){o({success:!1}),n({submit:a.message}),s(!1),v(!1),(0,k.l)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:i,isSubmitting:n,setFieldValue:a}=e;return(0,D.jsxs)(S.QF,{children:[(0,D.jsxs)(o.cp,{container:!0,spacing:2,children:[(0,D.jsx)(o.cp,{item:!0,xs:12,md:12,children:t.file&&(0,D.jsxs)(s.c,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,D.jsx)(o.cp,{item:!0,xs:6,md:6,style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},children:(0,D.jsx)(S.IN,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,D.jsx)(_.c,{children:(0,D.jsxs)(p.c,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",children:["SelectFile",(0,D.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{a("file",e.currentTarget.files[0])},accept:".png,.jpeg,.jpg,.mpeg,.mp4,.pdf"})]})})}})}),(0,D.jsx)(o.cp,{item:!0,xs:6,md:6,children:(0,D.jsx)(_.c,{children:(0,D.jsx)(p.c,{variant:"contained",size:"large",type:"submit",disabled:n,children:n?"Uploading...":"Upload"})})})]}),(0,D.jsx)(o.cp,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,D.jsx)(c.c,{error:!0,id:"helper-text-file-input",children:i.file})})]})}})})})})]})})})]})}function L(e){let{conversationMediaList:t,botId:i,organizationId:n}=e;return(0,D.jsx)(a.c,{children:(0,D.jsxs)(o.cp,{container:!0,spacing:3,justify:"center",children:[(0,D.jsx)(o.cp,{item:!0,xs:12,children:t&&0===t.length&&(0,D.jsx)(s.c,{variant:"caption",color:"#FF0000",children:(0,D.jsxs)(o.cp,{container:!0,spacing:1,children:[(0,D.jsx)(o.cp,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,D.jsx)(b.c,{style:{fontSize:40}})}),(0,D.jsx)(o.cp,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:"Conversation Media and Keywords are not uploaded!"})]})})}),t&&t.map(((e,t)=>(0,D.jsx)(o.cp,{item:!0,xs:12,sm:6,justify:"center",children:(0,D.jsx)(K,{media:e,botId:i,organizationId:n})},t)))]})})}function K(e){let{media:t,botId:i,organizationId:s}=e;const[a,r]=n.useState(!1),p=async(e,t,i,n)=>{try{const o={organizationId:n,botId:i,fileName:t,fileUrl:e};await async function(e,t){const i=await z.s$("/bot/delete-conversation-media",e),{conversationMedia:n}=i;((e,t)=>{A.mW.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,conversationMedia:t}:i));return{...i,botsList:n}}))})(t,n)}(o,i),(0,k.l)(!0,"The file deleted successfully!","success")}catch(o){(0,k.l)(!0,"Not able to delete the file. Try after sometime!","error")}};return(0,D.jsxs)(C.c,{contentSX:{p:2.25},children:[(0,D.jsx)(d.c,{style:{padding:0,minHeight:"120px",maxHeight:"120px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:(0,D.jsxs)(o.cp,{container:!0,spacing:3,justify:"center",children:[(0,D.jsx)(o.cp,{item:!0,xs:4,children:"image"===t.type.split("/")[0]?(0,D.jsx)("img",{src:t.url,alt:t.name,width:"100px",style:{maxHeight:"100px"}}):"application"===t.type.split("/")[0]?(0,D.jsxs)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:[(0,D.jsx)("div",{className:"text-center",children:(0,D.jsx)("img",{src:M,alt:"LivServ",width:"100px"})}),(0,D.jsx)("div",{style:{fontSize:"12px",textDecoration:"none",color:"black"},children:t.name})]}):(0,D.jsxs)("video",{controls:!0,width:"50%",children:[(0,D.jsx)("source",{src:t.url,type:"video/mp4"}),(0,D.jsx)("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]})}),(0,D.jsx)(o.cp,{item:!0,xs:8,style:{overflowY:"auto",height:"150px"},children:t.keywords.map(((e,n)=>(0,D.jsx)(x.c,{label:e,style:{margin:"4px"},onDelete:()=>{P(t.url,e,i,"delete")}},n)))})]})}),(0,D.jsx)(u.c,{style:{justifyContent:"flex-end",padding:"5px"},children:(0,D.jsxs)(o.cp,{container:!0,children:[(0,D.jsx)(o.cp,{item:!0,xs:10,md:10,children:(0,D.jsx)(S.QJ,{initialValues:{mediaKeywords:"",url:t.url},validationSchema:j.kt().shape({mediaKeywords:j.Qb().max(50,"Media keyword length must be less than 50 characters").min(3,"Media keyword length must be at least 3 characters").required("Media keyword is required")}),onSubmit:(e,t)=>{let{setErrors:n,setStatus:o,setSubmitting:s,resetForm:a}=t;const{mediaKeywords:r,url:c}=e;try{P(c,r,i,"add"),o({success:!1}),s(!1),a()}catch(l){o({success:!1}),n({submit:l.message}),s(!1)}},children:e=>{let{errors:t,handleBlur:i,handleChange:n,handleSubmit:s,isSubmitting:a,touched:r,values:l}=e;return(0,D.jsx)("form",{noValidate:!0,onSubmit:s,children:(0,D.jsxs)(o.cp,{container:!0,spacing:1,children:[(0,D.jsxs)(o.cp,{item:!0,xs:9,md:9,children:[(0,D.jsx)(h.c,{id:"mediaKeywords",type:"mediaKeywords",name:"mediaKeywords",placeholder:"Keywords",fullWidth:!0,value:l.mediaKeywords,onBlur:i,onChange:n,autoComplete:"off",error:Boolean(r.mediaKeywords&&t&&t.mediaKeywords)}),r.mediaKeywords&&t.mediaKeywords&&(0,D.jsx)(c.c,{error:!0,id:"helper-text--media-keyword",children:t.mediaKeywords})]}),(0,D.jsx)(o.cp,{item:!0,xs:3,md:3,children:(0,D.jsx)(_.c,{children:(0,D.jsx)(T.c,{isLoading:a,disabled:a,disableElevation:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Add"})})})]})})}})}),(0,D.jsx)(o.cp,{item:!0,xs:1,md:1,children:(0,D.jsx)(m.c,{variant:"text",onClick:()=>{return e=t.url,void window.open(e);var e},children:(0,D.jsx)(l.c,{title:"View",children:(0,D.jsx)(y.c,{style:{color:"#5ad74e"}})})})}),(0,D.jsxs)(o.cp,{item:!0,xs:1,md:1,children:[(0,D.jsx)(m.c,{variant:"text",onClick:()=>r(!0),children:(0,D.jsx)(l.c,{title:"Delete",children:(0,D.jsx)(v.c,{style:{color:"#ff0000"},fontSize:"small"})})}),(0,D.jsxs)(I.c,{title:"Delete file?",open:a,setOpen:r,onConfirm:()=>p(t.url,t.name,i,s),children:["Confirm the deletion of ",t.name,"?"]})]})]})})]})}},35240:(e,t,i)=>{i.d(t,{Aj:()=>r,_M:()=>s,aE:()=>c,s$:()=>a,wz:()=>p});var n=i(52216),o=i(79028);async function s(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,i){let{headers:n,noAuth:o,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;if(t=p(t,a?void 0:i),i=i&&"object"===typeof i&&a?JSON.stringify(i):void 0,n||(n={}),n["Content-Type"]="application/json",n.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(n.Authorization="Bearer ".concat(e))}try{const o=await fetch(t,{...s,headers:n,body:i,method:e}),a=await o.json();if(o.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(c){var r;throw console.error("Error calling API: ",c),null!==(r=c.message)&&void 0!==r&&r.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error("Unknown server error")}}const d=(0,n.Sm)(o.UX,"/");function p(e,t){if(!e)return e;const i=t&&Object.keys(t);if(null!==i&&void 0!==i&&i.length){const n=i.reduce(((e,i)=>{let n=t[i];return null===n||void 0===n?e:(n="".concat(i,"=").concat(encodeURIComponent(n)),e?"".concat(e,"&").concat(n):n)}),"");n&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(n))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},53632:(e,t,i)=>{i.d(t,{_:()=>o});var n=i(76312);function o(e){const t=(0,n.mW)((e=>e.selectedBotId)),i=(0,n.mW)((i=>i.botsMap[e||t]));return[e||t,i]}},52216:(e,t,i)=>{function n(e,t){return e.replace(new RegExp("".concat(o(t),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(e){const t=new Date(e),i=t.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"".concat(n," ").concat(i,", ").concat(o)}i.d(t,{Sm:()=>n,_m:()=>s})},79028:(e,t,i)=>{i.d(t,{AZ:()=>o,So:()=>r,UX:()=>n,cX:()=>s,vc:()=>a});const n="https://devbackend.livhousing.com",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,r="https://60f1-203-192-224-75.ngrok-free.app"},5060:(e,t,i)=>{var n=i(22411);t.c=void 0;var o=n(i(2124)),s=i(97884);t.c=(0,o.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},54096:(e,t,i)=>{var n=i(22411);t.c=void 0;var o=n(i(2124)),s=i(97884);t.c=(0,o.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},65848:(e,t,i)=>{var n=i(22411);t.c=void 0;var o=n(i(2124)),s=i(97884);t.c=(0,o.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},80712:(e,t,i)=>{var n=i(22411);t.c=void 0;var o=n(i(2124)),s=i(97884);t.c=(0,o.default)([(0,s.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,s.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber")},9608:(e,t,i)=>{i.d(t,{c:()=>f});var n=i(95656),o=i(45072),s=i(99584),a=i(11208),r=i(43980),c=i(25496),l=i(47901),d=i(82952),p=i(10948);function u(e){return(0,p.cp)("MuiCardActions",e)}(0,d.c)("MuiCardActions",["root","spacing"]);var h=i(97884);const m=["disableSpacing","className"],x=(0,c.cp)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,o.c)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),f=s.forwardRef((function(e,t){const i=(0,l.c)({props:e,name:"MuiCardActions"}),{disableSpacing:s=!1,className:c}=i,d=(0,n.c)(i,m),p=(0,o.c)({},i,{disableSpacing:s}),f=(e=>{const{classes:t,disableSpacing:i}=e,n={root:["root",!i&&"spacing"]};return(0,r.c)(n,u,t)})(p);return(0,h.jsx)(x,(0,o.c)({className:(0,a.c)(f.root,c),ownerState:p,ref:t},d))}))},55704:(e,t,i)=>{i.d(t,{c:()=>f});var n=i(95656),o=i(45072),s=i(99584),a=i(11208),r=i(43980),c=i(25496),l=i(47901),d=i(82952),p=i(10948);function u(e){return(0,p.cp)("MuiDialogActions",e)}(0,d.c)("MuiDialogActions",["root","spacing"]);var h=i(97884);const m=["className","disableSpacing"],x=(0,c.cp)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,o.c)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),f=s.forwardRef((function(e,t){const i=(0,l.c)({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:c=!1}=i,d=(0,n.c)(i,m),p=(0,o.c)({},i,{disableSpacing:c}),f=(e=>{const{classes:t,disableSpacing:i}=e,n={root:["root",!i&&"spacing"]};return(0,r.c)(n,u,t)})(p);return(0,h.jsx)(x,(0,o.c)({className:(0,a.c)(f.root,s),ownerState:p,ref:t},d))}))},34144:(e,t,i)=>{i.d(t,{c:()=>y});var n=i(95656),o=i(45072),s=i(99584),a=i(11208),r=i(43980),c=i(7848),l=i(84892),d=i(47901),p=i(82952),u=i(10948);function h(e){return(0,u.cp)("MuiFab",e)}const m=(0,p.c)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var x=i(25496),f=i(97884);const g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=(0,x.cp)(c.c,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,x.CU)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],t["size".concat((0,l.c)(i.size))],"inherit"===i.color&&t.colorInherit,t[(0,l.c)(i.size)],t[i.color]]}})((e=>{let{theme:t,ownerState:i}=e;var n,s;return(0,o.c)({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:null==(n=(s=t.palette).getContrastText)?void 0:n.call(s,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},["&.".concat(m.focusVisible)]:{boxShadow:(t.vars||t).shadows[6]}},"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(e=>{let{theme:t,ownerState:i}=e;return(0,o.c)({},"inherit"!==i.color&&"default"!==i.color&&null!=(t.vars||t).palette[i.color]&&{color:(t.vars||t).palette[i.color].contrastText,backgroundColor:(t.vars||t).palette[i.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[i.color].main}}})}),(e=>{let{theme:t}=e;return{["&.".concat(m.disabled)]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}})),y=s.forwardRef((function(e,t){const i=(0,d.c)({props:e,name:"MuiFab"}),{children:s,className:c,color:p="default",component:u="button",disabled:m=!1,disableFocusRipple:x=!1,focusVisibleClassName:y,size:b="large",variant:j="circular"}=i,S=(0,n.c)(i,g),w=(0,o.c)({},i,{color:p,component:u,disabled:m,disableFocusRipple:x,size:b,variant:j}),C=(e=>{const{color:t,variant:i,classes:n,size:s}=e,a={root:["root",i,"size".concat((0,l.c)(s)),"inherit"===t?"colorInherit":t]},c=(0,r.c)(a,h,n);return(0,o.c)({},n,c)})(w);return(0,f.jsx)(v,(0,o.c)({className:(0,a.c)(C.root,c),component:u,disabled:m,focusRipple:!x,focusVisibleClassName:(0,a.c)(C.focusVisible,y),ownerState:w,ref:t},S,{classes:C,children:s}))}))}}]);