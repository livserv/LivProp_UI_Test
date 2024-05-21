"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[9228],{32829:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(25371),o=n(44414);function c(e){let{children:t,type:n}=e;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}c.defaultProps={type:"scale"}},92728:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(9950),o=n(48205),c=n(44414);const s=i.forwardRef((function(e,t){return(0,c.jsx)(o.A,{direction:"up",ref:t,...e})}))},26092:(e,t,n)=>{n.d(t,{A:()=>f});n(9950);var i=n(92728),o=n(63464),c=n(40033),s=n(28170),a=n(96319),r=n(59254),l=n(14857),d=n(25333),u=n(44414);const h=(0,r.Ay)(o.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function f(e){const t=(0,l.A)(),{breakpoints:n}=t,{openPopUpDialog:o,setPopUpDialog:r,onClose:f=(()=>r(!1)),title:A,width:p="60%"}=e;return(0,u.jsxs)(h,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:{width:p},[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(c.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:A}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:f,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(a.A,{})}),(0,u.jsx)(s.A,{dividers:!0,children:e.children})]})}},93383:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(9950),o=n(10226),c=n(46639),s=n(44414);const a=function(e){let{onClick:t,disabled:n,isLoading:a,children:r,...l}=e;const[d,u]=i.useState(a);return(0,s.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||a||n,...l,children:[(d||a)&&(0,s.jsx)(c.A,{size:16,color:"primary",style:{marginRight:"10px"}}),r]})}},89228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var i=n(9950),o=n(16491),c=n(60899),s=n(82053),a=n(3788),r=n(93230),l=n(2660),d=n(10226),u=n(29714),h=n(61467),f=n(24516),A=n(63464),p=n(40033),x=n(79739),g=n(57988),m=n(7999),b=n(25333),j=n(63359),y=n(85967),v=n(74745),_=n(80417),S=n(79046),E=n(33092),C=n(89262),D=n(12504),w=n(59254),T=n(33340),P=n(58178),k=n(32829),O=n(93383),M=n(70855),I=n(77382),R=n(6716),L=n(44414);const z=()=>u.Yj().required("This field is required"),F=u.Ik().shape({question:z(),content:z()});const U=function(){const[e,t]=i.useState(!1),n=i.useCallback((()=>t((e=>!e))),[]);return i.useEffect((()=>{(0,I.bZ)().catch((e=>console.error("Error fetching organization details:",e)))}),[]),(0,L.jsx)(o.A,{children:(0,L.jsxs)(c.Ay,{container:!0,item:!0,xs:12,children:[(0,L.jsx)(s.A,{variant:"h5",children:"FAQ / Knowledge base"}),!e&&(0,L.jsx)(c.Ay,{item:!0,sx:{marginLeft:"60px"},children:(0,L.jsx)(W,{onAddClick:n})}),e&&(0,L.jsx)(c.Ay,{item:!0,xs:12,mt:1,children:(0,L.jsx)(c.Ay,{item:!0,xs:12,lg:8,mt:5,children:(0,L.jsx)(B,{onCancel:n})})}),(0,L.jsx)(c.Ay,{item:!0,xs:12,mt:5,children:(0,L.jsx)(N,{})})]})})};function N(){const[e,t]=(0,M.G)(),n=(0,T.nc)((t=>{var n;return null===(n=t.kbDocs)||void 0===n?void 0:n[e]}));return null===n||void 0===n?void 0:n.map(((e,n)=>(0,L.jsx)(K,{index:n,document:e,trainingMedia:t.trainingMedia},e._id)))}function K(e){let{document:t,index:n,trainingMedia:o}=e;const[c,s]=i.useState(!1);return c?(0,L.jsx)(B,{document:t,onCancel:s}):(0,L.jsx)(V,{index:n,document:t,trainingMedia:o,onEdit:s})}function V(e){let{document:t,index:n,trainingMedia:o,onEdit:a}=e;const r=i.useCallback((()=>a(!0)),[a]);return(0,L.jsxs)(c.Ay,{container:!0,mt:1,children:[(0,L.jsxs)(c.Ay,{item:!0,children:[(0,L.jsxs)(s.A,{variant:"h5",children:["Q",n+1," . ",t.question]}),(0,L.jsxs)(s.A,{variant:"body2",children:[(0,L.jsx)("b",{children:"Ans . "})," ",t.content]}),t.sourceDocument&&(null===o||void 0===o?void 0:o.length)>0&&(0,L.jsx)(q,{document:t,trainingMedia:o})]}),(0,L.jsxs)(c.Ay,{xs:12,item:!0,display:"flex",justifyContent:"flex-end",children:[(0,L.jsx)(b.A,{size:"small",sx:{color:j.A[500]},onClick:r,children:(0,L.jsx)(m.A,{})}),(0,L.jsx)(G,{documentId:t._id})]}),(0,L.jsx)(v.A,{xs:12,sx:{width:"100%",borderColor:"#b6abab"}})]})}function q(e){let{document:t,trainingMedia:n}=e;const o=t.sourceDocument,c=i.useMemo((()=>{const e=n.filter((e=>e.docId===o))[0];if(!e)return e;const t=decodeURIComponent(e.url.substring(e.url.lastIndexOf("/")+1));return{...e,fileName:t}}),[o,n]);return c?(0,L.jsxs)(s.A,{variant:"body2",children:[(0,L.jsx)("b",{children:"Source Document:"})," ",(0,L.jsxs)("a",{href:c.url,rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},children:[c.fileName,c.name?" ( ".concat(c.name," )"):""]})]}):null}function B(e){let{document:t={},onCancel:n}=e;const o=i.useCallback((()=>n(!1)),[n]);return(0,L.jsx)(h.l1,{initialValues:t,validationSchema:F,onSubmit:async(e,t)=>{let{setStatus:n,setSubmitting:i}=t;try{await(0,I.Mk)(e),n({success:!1}),i(!1),o(),(0,P.i)(!0,"Content added successfully!","success")}catch(c){console.error(c),(0,P.i)(!0,"Error occurred while trying to save content.","error")}},children:e=>{let{values:t,errors:n,handleChange:i,touched:s,isSubmitting:u,handleSubmit:h}=e;return(0,L.jsxs)("form",{noValidate:!0,onSubmit:h,children:[(0,L.jsxs)(c.Ay,{item:!0,xs:12,mt:5,children:[(0,L.jsx)(a.A,{htmlFor:"question",children:"Question"}),(0,L.jsxs)(r.A,{spacing:2,mb:3,children:[(0,L.jsx)(l.A,{multiline:!0,fullWidth:!0,id:"question",name:"question",value:t.question,onChange:i,placeholder:"Please enter the question"}),s.question&&n.question&&(0,L.jsx)(f.A,{error:!0,id:"helper-text-message-placeholder",children:n.question})]}),(0,L.jsx)(a.A,{htmlFor:"content",children:"Answer"}),(0,L.jsxs)(r.A,{spacing:2,mb:3,children:[(0,L.jsx)(l.A,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",value:t.content,onChange:i,placeholder:"Please enter the answer"}),s.content&&n.content&&(0,L.jsx)(f.A,{error:!0,id:"helper-text-message-placeholder",children:n.content})]})]}),(0,L.jsx)(c.Ay,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,L.jsxs)(r.A,{spacing:2,direction:"row",children:[(0,L.jsx)(d.A,{variant:"outlined",onClick:o,children:"Cancel"}),(0,L.jsx)(k.A,{children:(0,L.jsx)(O.A,{isLoading:u,color:"primary",size:"large",type:"submit",variant:"contained",children:"Save"})})]})})]})}})}const H=(0,w.Ay)(_.A)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));function W(e){let{onAddClick:t}=e;const[n,o]=i.useState(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(H,{ariaLabel:"Knowledge base options",direction:"down",sx:{position:"absolute",top:70,right:16},icon:(0,L.jsx)(S.A,{}),children:[(0,L.jsx)(E.A,{icon:(0,L.jsx)(C.A,{}),tooltipTitle:"Add Question & Answer",onClick:t}),(0,L.jsx)(E.A,{icon:(0,L.jsx)(D.A,{}),tooltipTitle:"Upload training document (.csv,.pdf,.doc,.docx,.txt)",onClick:()=>o(!0)})]}),n&&(0,L.jsx)(R.A,{isOpen:n,toggleOpen:o})]})}function G(e){let{documentId:t}=e;const[n,o]=i.useState(!1),c=()=>o((e=>!e)),a=i.useCallback((async()=>{await(0,I.CA)(t),o(!1),(0,P.i)(!0,"Deleted response successfully","success")}),[t]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(b.A,{sx:{color:y.A[500]},onClick:c,children:(0,L.jsx)(g.A,{})}),n&&(0,L.jsxs)(A.A,{open:n,onClose:c,children:[(0,L.jsx)(p.A,{id:"delete-confirm-dialog-title",children:(0,L.jsx)(s.A,{gutterBottom:!0,children:"Are sure you want to delete the response ?"})}),(0,L.jsxs)(x.A,{children:[(0,L.jsx)(d.A,{onClick:c,children:"Cancel"}),(0,L.jsx)(k.A,{children:(0,L.jsx)(O.A,{color:"primary",type:"submit",variant:"contained",onClick:a,children:"Delete"})})]})]})]})}},6716:(e,t,n)=>{n.d(t,{A:()=>m});n(9950);var i=n(60899),o=n(93230),c=n(3788),s=n(82053),a=n(10226),r=n(24516),l=n(29714),d=n(61467),u=n(32829),h=n(26092),f=n(44364),A=n(30334),p=n(70855),x=n(58178),g=n(44414);const m=function(e){let{isOpen:t,toggleOpen:n}=e;return(0,g.jsx)(h.A,{openPopUpDialog:t,setPopUpDialog:n,title:"Upload Training Documents",children:(0,g.jsx)(y,{setDocumentUploadDialogOpen:n})})},b=f.Og?f.Og:5242880,j=l.Ik().shape({file:l.gl().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(b/1048576," MB"),(e=>e&&e.size<=b))});function y(e){let{setDocumentUploadDialogOpen:t}=e;const[,n]=(0,p.G)(),l=null===n||void 0===n?void 0:n.trainingMedia;return(0,g.jsxs)(i.Ay,{container:!0,spacing:1,children:[(0,g.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(o.A,{spacing:1,children:(0,g.jsx)(c.A,{children:"File Upload (.csv, .txt, .docx, .pdf)"})})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(d.l1,{initialValues:{file:null},validationSchema:j,onSubmit:async(e,n)=>{let{setErrors:i,setStatus:o,setSubmitting:c}=n;try{const{name:n}=e.file;l.some((e=>e.originalName===n))?(0,x.i)(!0,"The file already uploaded!. Please select another file","error"):(c(!0),await(0,A.MD)(e.file),o({success:!0}),t(!1),(0,x.i)(!0,"The file uploaded successfully!","success"))}catch(s){console.error("Error uploading the document:",s),o({success:!1}),i({submit:s.message}),c(!1),t(!1),(0,x.i)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:n,isSubmitting:o,setFieldValue:c}=e;return(0,g.jsxs)(d.lV,{children:[(0,g.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,g.jsx)(i.Ay,{item:!0,xs:12,md:12,children:t.file&&(0,g.jsxs)(s.A,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,g.jsx)(i.Ay,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,g.jsx)(d.D0,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,g.jsx)(u.A,{children:(0,g.jsxs)(a.A,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,g.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{c("file",e.currentTarget.files[0])},accept:".csv,.txt,.docx,.doc,.pdf,text/plain"})]})})}})}),(0,g.jsx)(i.Ay,{item:!0,xs:6,md:6,children:(0,g.jsx)(u.A,{children:(0,g.jsx)(a.A,{variant:"contained",size:"large",type:"submit",disabled:o,children:o?"Uploading...":"Upload"})})})]}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(r.A,{error:!0,id:"helper-text-file-input",children:n.file})})]})}})})]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>c,Ne:()=>u,TF:()=>r,bE:()=>s,yJ:()=>a});var i=n(32026),o=n(44364);async function c(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:o,...c}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s="POST"===e||"PUT"===e||"DELETE"===e;t=u(t,s?void 0:n);const a=n instanceof FormData;if(a||(n=n&&"object"===typeof n&&s?JSON.stringify(n):void 0),i||(i={}),a||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const o=await fetch(t,{...c,headers:i,body:n,method:e}),s=await o.json();if(o.ok){const{data:e,...t}=s;return delete t.status,e&&!Object.keys(t).length?e:s}throw s.message?new Error(s.message):s}catch(l){var r;throw console.error("Error calling API: ",l),null!==(r=l.message)&&void 0!==r&&r.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,i.s8)(o.jn,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},77382:(e,t,n)=>{n.d(t,{CA:()=>a,Mk:()=>c,bZ:()=>s});var i=n(8478),o=n(33340);async function c(e){const{organizationId:t,selectedBotId:n}=o.nc.getState(),c=await i.bE("/bot/".concat(t,"/").concat(n,"/knowledge-base"),e);o.nc.setState((t=>{const i={...t.kbDocs||{}};if(i[n]=[...i[n]],e._id){const e=i[n].findIndex((e=>e._id===c._id));e>=0?i[n][e]=c:i[n].push(c)}else i[n].push(c);return{kbDocs:i}}))}async function s(e){const{organizationId:t,selectedBotId:n,kbDocs:c}=o.nc.getState();if(e&&Array.isArray(null===c||void 0===c?void 0:c[n]))return;const s=await i.Jt("/bot/".concat(t,"/").concat(n,"/knowledge-base/list"));o.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:s}})))}async function a(e){const{organizationId:t,selectedBotId:n}=o.nc.getState();await i.TF("/bot/".concat(t,"/").concat(n,"/knowledge-base/").concat(e)),o.nc.setState((t=>{var i;const o={...t.kbDocs||{}};return o[n]=null===(i=o[n])||void 0===i?void 0:i.filter((t=>t._id!==e)),{kbDocs:o}}))}},30334:(e,t,n)=>{n.d(t,{Ei:()=>d,KM:()=>s,MD:()=>r,pn:()=>u,qt:()=>a,xW:()=>l});var i=n(8478),o=n(33340),c=n(77382);async function s(e,t,n){const c=await i.bE("/bot/add-training-media",e,{headers:{botId:t,organizationId:n}}),{trainingMedia:s}=c;((e,t)=>{o.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,s)}async function a(e,t,n){const c=await i.bE("/bot/delete-training-media-document",e,{headers:{botId:t,organizationId:n}}),{trainingDocuments:s}=c;((e,t)=>{o.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,s)}async function r(e){const{organizationId:t,selectedBotId:n}=o.nc.getState(),c=new FormData;c.append("file",e);const s={},a=sessionStorage.getItem("token");a&&(s.Authorization="Bearer ".concat(a)),s.Botid=n,s.Organizationid=t,s.Accept="application/json";const r=(0,i.Ne)("/bot/add-training-media");await fetch(r,{headers:s,method:"POST",body:c}).then((e=>e.json())).then((e=>{const{trainingMedia:t}=e.data;((e,t)=>{o.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(n,t)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}async function l(e,t){const n=await i.bE("/bot/add-tranining-document-name",e),{trainingMedia:c}=n;((e,t)=>{o.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,c)}async function d(e,t){const n=await i.bE("/bot/".concat(t,"/").concat(e,"/knowledge-base/train"));return o.nc.setState((t=>{const n={...t.kbDocs||{}};return delete n[e],(0,c.bZ)().catch((e=>console.error("Error fetching Knowledge base content:",e))),{kbDocs:n}})),n}async function u(e){const t=await i.bE("/bot/add-bot-tax-details",e),{_id:n,botDetailsForVerification:c}=t;var s,a;return s=n,a=c,o.nc.setState((e=>{const t=e.botsList.map((e=>e._id===s?{...e,botDetailsForVerification:a}:e));return{...e,botsList:t}})),c}},70855:(e,t,n)=>{n.d(t,{G:()=>o});var i=n(33340);function o(e){const t=(0,i.nc)((e=>e.selectedBotId)),n=(0,i.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(o(t),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function c(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(o)}function s(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),c=t.substring(0,o),a=t.substring(o+1);i[c]=s(e[c],a,n)}else i[t]=n;return i}function a(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function l(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),c=t.substring(0,o),s=t.substring(o+1);i[c]=l(e[c],s,n)}else i[t]=n;return i}n.d(t,{G6:()=>s,OX:()=>r,Yq:()=>c,do:()=>l,qW:()=>a,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>a,Og:()=>c,jn:()=>i,pA:()=>s,pR:()=>o});const i="https://devbackend.livhousing.com",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com"},7999:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),c=n(44414);t.A=(0,o.default)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},89262:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),c=n(44414);t.A=(0,o.default)((0,c.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined")},12504:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),c=n(44414);t.A=(0,o.default)((0,c.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},85967:(e,t,n)=>{n.d(t,{A:()=>i});const i={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}}}]);