"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6106],{6716:(t,e,n)=>{n.d(e,{A:()=>_});n(9950);var i=n(60899),o=n(81616),a=n(3788),s=n(82053),c=n(10226),r=n(24516),d=n(29714),l=n(61467),u=n(32829),f=n(26092),g=n(44364),p=n(30334),b=n(70855),h=n(21788),A=n(44414);const _=function(t){let{isOpen:e,toggleOpen:n}=t;return(0,A.jsx)(f.A,{openPopUpDialog:e,setPopUpDialog:n,title:"Upload Training Documents",children:(0,A.jsx)(E,{setDocumentUploadDialogOpen:n})})},m=g.Og?g.Og:5242880,y=d.Ik().shape({file:d.gl().required("File is not selected").test("is-valid-size",`Maximum allowed file size is ${m/1048576} MB`,(t=>t&&t.size<=m))});function E(t){let{setDocumentUploadDialogOpen:e}=t;const[,n]=(0,b.G)(),d=null===n||void 0===n?void 0:n.trainingMedia;return(0,A.jsxs)(i.Ay,{container:!0,spacing:1,children:[(0,A.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,A.jsx)(o.A,{spacing:1,children:(0,A.jsx)(a.A,{children:"File Upload (.csv, .txt, .docx, .pdf)"})})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,A.jsx)(l.l1,{initialValues:{file:null},validationSchema:y,onSubmit:async(t,n)=>{let{setErrors:i,setStatus:o,setSubmitting:a}=n;try{const{name:n}=t.file;d.some((t=>t.originalName===n))?(0,h.i)(!0,"The file already uploaded!. Please select another file","error"):(a(!0),await(0,p.MD)(t.file),o({success:!0}),e(!1),(0,h.i)(!0,"The file uploaded successfully!","success"))}catch(s){console.error("Error uploading the document:",s),o({success:!1}),i({submit:s.message}),a(!1),e(!1),(0,h.i)(!0,"Not able to upload the file. Try after sometime!","error")}},children:t=>{let{values:e,errors:n,isSubmitting:o,setFieldValue:a}=t;return(0,A.jsxs)(l.lV,{children:[(0,A.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,A.jsx)(i.Ay,{item:!0,xs:12,md:12,children:e.file&&(0,A.jsxs)(s.A,{variant:"body2",children:["Selected File: ",e.file.name]})}),(0,A.jsx)(i.Ay,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,A.jsx)(l.D0,{type:"file",name:"file",as:t=>{let{field:e}=t;return(0,A.jsx)(u.A,{children:(0,A.jsxs)(c.A,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,A.jsx)("input",{...e,type:"file",id:"file-input",style:{display:"none"},onChange:t=>{a("file",t.currentTarget.files[0])},accept:".csv,.txt,.docx,.doc,.pdf,text/plain"})]})})}})}),(0,A.jsx)(i.Ay,{item:!0,xs:6,md:6,children:(0,A.jsx)(u.A,{children:(0,A.jsx)(c.A,{variant:"contained",size:"large",type:"submit",disabled:o,children:o?"Uploading...":"Upload"})})})]}),(0,A.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,A.jsx)(r.A,{error:!0,id:"helper-text-file-input",children:n.file})})]})}})})]})}},8478:(t,e,n)=>{n.d(e,{Jt:()=>a,TF:()=>r,bE:()=>s,yJ:()=>c});var i=n(32026),o=n(44364);async function a(t,e){return d("GET",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(t,e){return d("POST",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(t,e){return d("PUT",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(t,e){return d("DELETE",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(t,e,n){let{headers:i,noAuth:o,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s="POST"===t||"PUT"===t||"DELETE"===t;e=function(t,e){if(!t)return t;const n=e&&Object.keys(e);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((t,n)=>{let i=e[n];return null===i||void 0===i?t:(i=`${n}=${encodeURIComponent(i)}`,t?`${t}&${i}`:i)}),"");i&&(t=`${t}${t.includes("?")?"&":"?"}${i}`)}if(t.startsWith("https://"))return t;return`${l}${t}`}(e,s?void 0:n);const c=n instanceof FormData;if(c||(n=n&&"object"===typeof n&&s?JSON.stringify(n):void 0),i||(i={}),c||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const t=sessionStorage.getItem("token");t&&(i.Authorization=`Bearer ${t}`)}try{const o=await fetch(e,{...a,headers:i,body:n,method:t}),s=await o.json();if(o.ok){const{data:t,...e}=s;return delete e.status,t&&!Object.keys(e).length?t:s}throw s.message?new Error(s.message):s}catch(d){var r;throw console.error("Error calling API: ",d),null!==(r=d.message)&&void 0!==r&&r.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,i.s8)(o.jn,"/")},26092:(t,e,n)=>{n.d(e,{A:()=>g});n(9950);var i=n(92728),o=n(63464),a=n(40033),s=n(28170),c=n(96319),r=n(59254),d=n(14857),l=n(25333),u=n(44414);const f=(0,r.Ay)(o.A)((t=>{let{theme:e}=t;return{"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)},zIndex:11010}}));function g(t){const e=(0,d.A)(),{breakpoints:n}=e,{openPopUpDialog:o,setPopUpDialog:r,setFieldsValues:g,onClose:p=()=>(r(!1),null===g||void 0===g?void 0:g({})),title:b,width:h="70%"}=t;return(0,u.jsxs)(f,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:{width:h},[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(a.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:b}),(0,u.jsx)(l.A,{"aria-label":"close",onClick:p,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(c.A,{})}),(0,u.jsx)(s.A,{dividers:!0,children:t.children})]})}},30334:(t,e,n)=>{n.d(e,{Ei:()=>l,KM:()=>c,MD:()=>r,pn:()=>u,qt:()=>d});var i=n(8478),o=n(33340),a=n(77382),s=n(98415);async function c(t,e,n){const o=await i.bE(`/bot/${n}/${e}/add-training-media`,t);(0,s.rv)(e,{trainingMedia:o.trainingMedia})}async function r(t){const{organizationId:e,selectedBotId:n}=o.nc.getState(),a=new FormData;a.append("file",t);try{const t=await i.bE(`/bot/${e}/${n}/add-training-media`,a);(0,s.rv)(n,{trainingMedia:t.trainingMedia})}catch(c){throw new Error("File upload failed. Please try again.",c)}}async function d(t,e,n){const o=await i.bE(`/bot/${n}/${e}/delete-training-media-document`,t);(0,s.rv)(e,{trainingMedia:o.trainingDocuments})}async function l(t,e){const n=await i.bE(`/bot/${e}/${t}/knowledge-base/train`);return o.nc.setState((e=>{const n={...e.kbDocs||{}};return delete n[t],{kbDocs:n}})),(0,a.bZ)().catch((t=>console.error("Error fetching Knowledge base content:",t))),n}async function u(t,e,n){const o=await i.bE(`/bot/${e}/${n}/add-bot-tax-details`,t),{_id:a,botDetailsForVerification:c}=o;return(0,s.rv)(a,{botDetailsForVerification:c}),c}},32026:(t,e,n)=>{function i(t,e){return t.replace(new RegExp(`${o(e)}+$`),"")}function o(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(t){const e=new Date(t),n=e.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]} ${n}, ${e.getFullYear()}`}function s(t,e,n){if(!e&&!t)return n;t=t||{};const i=Array.isArray(t)?[...t]:{...t};if(e.includes(".")){const o=e.indexOf("."),a=e.substring(0,o),c=e.substring(o+1);i[a]=s(t[a],c,n)}else i[e]=n;return i}function c(t,e){return btoa(`${t}_${e}_whatsapp_int`)}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const e="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<t;i++)n+=e.charAt(Math.floor(36*Math.random()));return n}function d(t,e,n){if(!e&&!t)return n;t=t||{};const i=Array.isArray(t)?[...t]:{...t};if(e.includes(".")){const o=e.indexOf("."),a=e.substring(0,o),s=e.substring(o+1);i[a]=d(t[a],s,n)}else i[e]=n;return i}function l(t,e){const n=new Blob([t],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i)}n.d(e,{G6:()=>s,OX:()=>r,PE:()=>l,Yq:()=>a,do:()=>d,qW:()=>c,s8:()=>i})},32829:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(25371),o=n(44414);function a(t){let{children:e,type:n}=t;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:e})}a.defaultProps={type:"scale"}},44364:(t,e,n)=>{n.d(e,{DX:()=>r,Og:()=>a,jn:()=>i,mB:()=>c,pA:()=>s,pR:()=>o});const i="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,c="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},70855:(t,e,n)=>{n.d(e,{G:()=>o});var i=n(33340);function o(t){const e=(0,i.nc)((t=>t.selectedBotId)),n=(0,i.nc)((n=>n.botsMap[t||e]));return[t||e,n]}},77382:(t,e,n)=>{n.d(e,{CA:()=>f,L3:()=>u,Mk:()=>r,bZ:()=>d,gJ:()=>l});var i=n(8478),o=n(33340),a=n(32026),s=n(59051),c=n.n(s);async function r(t){const{organizationId:e,selectedBotId:n}=o.nc.getState(),a=await i.bE(`/bot/${e}/${n}/knowledge-base`,t);return o.nc.setState((e=>{const i={...e.kbDocs||{}},o=i[n];if(!o)return{};if(i[n]=[...o],t._id){const t=i[n].findIndex((t=>t._id===a._id));t>=0?i[n][t]=a:i[n].push(a)}else i[n].push(a);return{kbDocs:i}})),a}async function d(t){const{organizationId:e,selectedBotId:n,kbDocs:a}=o.nc.getState();if(t&&Array.isArray(null===a||void 0===a?void 0:a[n]))return;const s=await i.Jt(`/bot/${e}/${n}/knowledge-base/list`);o.nc.setState((t=>({kbDocs:{...t.kbDocs||{},[n]:s}})))}async function l(){var t;const{organizationId:e,selectedBotId:n,botsMap:s}=o.nc.getState(),r=`/bot/${e}/${n}/knowledge-base/download`,d=await i.Jt(r),l=(null===(t=s[n])||void 0===t?void 0:t.botName)||"KBDocs";(0,a.PE)(d,l+"_"+c()().format("YYYYMMDD")+".csv")}async function u(t){if(null===t||void 0===t||!t.length)return[];const{organizationId:e,selectedBotId:n}=o.nc.getState();return await i.Jt(`/bot/${e}/${n}/knowledge-base/list?${t.map((t=>`docIds=${t}`)).join("&")}`)}async function f(t){const{organizationId:e,selectedBotId:n}=o.nc.getState();await i.TF(`/bot/${e}/${n}/knowledge-base/${t}`),o.nc.setState((e=>{var i;const o={...e.kbDocs||{}};return o[n]=null===(i=o[n])||void 0===i?void 0:i.filter((e=>e._id!==t)),{kbDocs:o}}))}},92728:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(9950),o=n(48205),a=n(44414);const s=i.forwardRef((function(t,e){return(0,a.jsx)(o.A,{direction:"up",ref:e,...t})}))},93383:(t,e,n)=>{n.d(e,{A:()=>c});var i=n(9950),o=n(10226),a=n(46639),s=n(44414);const c=function(t){let{onClick:e,disabled:n,isLoading:c,children:r,...d}=t;const[l,u]=i.useState(c);return(0,s.jsxs)(o.A,{onClick:t=>{if(!e)return;const n=e(t);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||c||n,...d,children:[(l||c)&&(0,s.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),r]})}},98415:(t,e,n)=>{n.d(e,{Ci:()=>u,I4:()=>l,TF:()=>r,gI:()=>s,gR:()=>g,jo:()=>d,rv:()=>p,so:()=>f,yo:()=>c});var i=n(8478),o=n(33340),a=n(32026);async function s(t){const{organization:{websiteUrl:e,_id:n}}=o.nc.getState(),a={organizationId:n,websiteUrl:e,botName:t,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};b(await i.bE(`/bot/${n}`,a),!0)}async function c(t,e,n){const{organizationId:a}=o.nc.getState();if(!a||!t)throw new Error("Bot details not found");const s=await i.yJ(`/bot/${a}/${t}`,e);return b(s,n),s}async function r(t){const{organizationId:e,selectedBotId:n}=o.nc.getState();if(!e||!t)throw new Error("Bot details not found");const{deleted:a}=await i.TF(`/bot/${e}/${t}`);if(a){let{botsMap:t,botsList:e}=o.nc.getState();t={...t},e=[...e],delete t[a];const i=e.findIndex((t=>t._id===a));i>=0&&e.splice(i,1);const c={botsMap:t,botsList:e};var s;if(n===a)c.selectedBotId=(null===(s=e[0])||void 0===s?void 0:s._id)||null;o.nc.setState(c)}return!!a}function d(t,e){let{botDesign:n}=o.nc.getState();return n={...n,...e},c(t,{botDesign:n})}async function l(t,e){const{organizationId:n,selectedBotId:a}=o.nc.getState(),s=new FormData;s.append("file",e);const c=await i.bE(`/bot/${n}/${a}/update-logo/${t}`,s);return p(a,c),c[`botDesign.${t}`]}async function u(t){const{organizationId:e,selectedBotId:n}=o.nc.getState(),a=await i.TF(`/bot/${e}/${n}/update-logo/${t}`);return p(n,a),a[`botDesign.${t}`]}function f(t,e){return c(t,{botName:e})}function g(t,e){let{botSettings:n={}}=o.nc.getState();return n={...n,...e},c(t,{botSettings:n})}function p(t,e){const{botsMap:n}=o.nc.getState(),i=n[t];if(!i)return;b(Object.keys(e).reduce(((t,n)=>(0,a.G6)(t,n,e[n])),i))}function b(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=t._id;let{botsMap:i,botsList:a}=o.nc.getState();i={...i,[n]:t},a=[...a];const s=a.findIndex((t=>t._id===n));s>=0?a[s]=t:a.push(t);const c={botsMap:i,botsList:a};e&&(c.selectedBotId=n),o.nc.setState(c)}}}]);