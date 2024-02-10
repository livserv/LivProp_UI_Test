"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[720],{25040:(t,e,n)=>{n.d(e,{c:()=>s});var o=n(74836),i=n(97884);function s(t){let{children:e,type:n}=t;return(0,i.jsx)(o.q.div,{whileHover:{scale:1},whileTap:{scale:.9},children:e})}s.defaultProps={type:"scale"}},58092:(t,e,n)=>{n.d(e,{c:()=>r});var o=n(99584),i=n(4568),s=n(97884);const r=o.forwardRef((function(t,e){return(0,s.jsx)(i.c,{direction:"up",ref:e,...t})}))},1816:(t,e,n)=>{n.d(e,{c:()=>u});var o=n(99584),i=n(60392),s=n(65936),r=n(78640),a=n(43664),c=n(36744),d=n(97884);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((t,e)=>{let{border:n=!0,boxShadow:o,children:u,content:b=!0,contentSX:m={},darkTitle:p,elevation:g,secondary:h,shadow:f,sx:x={},title:y,...v}=t;const S=(0,i.c)();return o="dark"===S.palette.mode?o||!0:o,(0,d.jsxs)(s.c,{elevation:g||0,ref:e,...v,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===S.palette.mode?S.palette.divider:S.palette.grey.A800,boxShadow:!o||n&&"dark"!==S.palette.mode?"inherit":f||S.customShadows.z1,":hover":{boxShadow:o?f||S.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:S.typography.fontFamily,fontSize:"0.75rem"},...x},children:[!p&&y&&(0,d.jsx)(r.c,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:y,action:h}),p&&y&&(0,d.jsx)(r.c,{sx:l,title:(0,d.jsx)(a.c,{variant:"h3",children:y}),action:h}),b&&(0,d.jsx)(c.c,{sx:m,children:u}),!b&&u]})}))},64296:(t,e,n)=>{n.d(e,{c:()=>m});n(99584);var o=n(58092),i=n(89668),s=n(91552),r=n(26488),a=n(86632),c=n(25496),d=n(60392),l=n(62624),u=n(97884);const b=(0,c.cp)(i.c)((t=>{let{theme:e}=t;return{"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}}));function m(t){const e=(0,d.c)(),{breakpoints:n}=e,{openPopUpDialog:i,setPopUpDialog:c,title:m}=t;return(0,u.jsxs)(b,{TransitionComponent:o.c,"aria-labelledby":"customized-dialog-title",open:i,PaperProps:{sx:{width:"60%",[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(s.c,{sx:{m:0,p:2},id:"customized-dialog-title",children:m}),(0,u.jsx)(l.c,{"aria-label":"close",onClick:()=>{c(!1)},sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(a.c,{})}),(0,u.jsx)(r.c,{dividers:!0,children:t.children})]})}},62216:(t,e,n)=>{n.d(e,{c:()=>a});var o=n(99584),i=n(43924),s=n(49700),r=n(97884);const a=function(t){let{onClick:e,disabled:n,isLoading:a,children:c,...d}=t;const[l,u]=o.useState(a);return(0,r.jsxs)(i.c,{onClick:t=>{if(!e)return;const n=e(t);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||a||n,...d,children:[(l||a)&&(0,r.jsx)(s.c,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},25348:(t,e,n)=>{n.d(e,{c:()=>f});n(99584);var o=n(12316),i=n(72512),s=n(86344),r=n(2496),a=n(59112),c=n(55056),d=n(25528),l=n(25040),u=n(62216),b=n(69700),m=n(97544),p=n(35240),g=n(76312);var h=n(97884);const f=function(t){const{setIsDeployBot:e,botId:n,organizationId:f}=t,x=(0,g.mW)((t=>t.botsList)).find((t=>t._id===n)),y=null===x||void 0===x?void 0:x.botDetailsForVerification;let v=!1;const S=(0,g.mW)((t=>t.isSuperUser));S&&(v=!0);const C={integrationUrl:(null===y||void 0===y?void 0:y.integrationUrl)||"",businessAddress:(null===y||void 0===y?void 0:y.businessAddress)||"",country:(null===y||void 0===y?void 0:y.country)||"",state:(null===y||void 0===y?void 0:y.state)||"",city:(null===y||void 0===y?void 0:y.city)||"",postalCode:(null===y||void 0===y?void 0:y.postalCode)||"",businessRegistrationNumber:(null===y||void 0===y?void 0:y.businessRegistrationNumber)||"",gstNumber:(null===y||void 0===y?void 0:y.gstNumber)||"",panNumber:(null===y||void 0===y?void 0:y.panNumber)||""},_=async()=>{const t=C.integrationUrl,e={organizationId:f,botId:n,verificationStatus:!0};try{if(t||""!==t.trim()){const t=await async function(t){const e=await p.s$("/bot/verify-bot-details",t),{_id:n,verificationStatus:o}=e;return((t,e)=>{g.mW.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,verificationStatus:e}:n));return{...n,botsList:o}}))})(n,o),o}(e);t?(0,b.l)(!0,"The bot verified successfully","success"):(0,b.l)(!0,"Not able to verify the bot. Try after sometime!","error")}else(0,b.l)(!0,"Integration Url is mandatory for bot verification","error")}catch(o){(0,b.l)(!0,"Not able to verify the bot. Try after sometime!","error")}};return(0,h.jsx)(o.QJ,{initialValues:C,enableReinitialize:!0,validationSchema:i.kt().shape({integrationUrl:i.Qb().url("Enter valid url!").max(255).required("Integration Url is required"),businessAddress:i.Qb().max(255).required("Business Address is required"),country:i.Qb().max(50).required("Country is required"),state:i.Qb().max(50).required("State is required"),city:i.Qb().max(50).required("City is required"),postalCode:i.CQ().test("len","Maximum 10 digits are allowed",(t=>t.toString().length<=10)).required("Postal Code is required"),businessRegistrationNumber:i.Qb().max(150).nullable(!0),gstNumber:i.Qb().max(150).nullable(!0),panNumber:i.Qb().max(50).nullable(!0)}),onSubmit:async(t,o)=>{let{setErrors:i,setStatus:s,setSubmitting:r}=o;const a={organizationId:f,botId:n,botDetailsForVerification:{...t}};try{r(!0),await(0,m.wD)(a),s({success:!0}),e(!1),(0,b.l)(!0,"The bot deployed successfully!","success")}catch(c){s({success:!1}),i({submit:c.message}),r(!1),(0,b.l)(!0,"Not able to deploy the bot. Try after sometime!","error")}},children:t=>{let{errors:e,handleBlur:n,handleChange:o,handleSubmit:i,isSubmitting:b,touched:m,values:p}=t;return(0,h.jsx)("form",{onSubmit:i,children:(0,h.jsxs)(s.cp,{container:!0,spacing:1,children:[(0,h.jsx)(s.cp,{item:!0,xs:12,md:12,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"integrationUrl",children:"*Integration Url"}),(0,h.jsx)(c.c,{id:"integrationUrl",type:"integrationUrl",value:p.integrationUrl,name:"integrationUrl",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.integrationUrl&&e.integrationUrl),disabled:v}),m.integrationUrl&&e.integrationUrl&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-integrationUrl",children:e.integrationUrl})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:12,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"businessAddress",children:"*Business Address"}),(0,h.jsx)(c.c,{id:"businessAddress",type:"businessAddress",value:p.businessAddress,name:"businessAddress",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.businessAddress&&e.businessAddress),disabled:v}),m.businessAddress&&e.businessAddress&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-businessAddress",children:e.businessAddress})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:4,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"country",children:"*Country"}),(0,h.jsx)(c.c,{id:"country",type:"country",value:p.country,name:"country",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.country&&e.country),disabled:v}),m.country&&e.country&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-country",children:e.country})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:4,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"state",children:"*State"}),(0,h.jsx)(c.c,{id:"state",type:"state",value:p.state,name:"state",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.state&&e.state),disabled:v}),m.state&&e.state&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-state",children:e.state})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:4,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"city",children:"*City"}),(0,h.jsx)(c.c,{id:"city",type:"city",value:p.city,name:"city",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.city&&e.city),disabled:v}),m.city&&e.city&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-city",children:e.city})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:6,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"postalCode",children:"*Postal Code"}),(0,h.jsx)(c.c,{id:"postalCode",type:"postalCode",value:p.postalCode,name:"postalCode",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.postalCode&&e.postalCode),disabled:v}),m.postalCode&&e.postalCode&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-postalCode",children:e.postalCode})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:6,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"businessRegistrationNumber",children:"Business Registration Number"}),(0,h.jsx)(c.c,{id:"businessRegistrationNumber",type:"businessRegistrationNumber",value:p.businessRegistrationNumber,name:"businessRegistrationNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.businessRegistrationNumber&&e.businessRegistrationNumber),disabled:v}),m.businessRegistrationNumber&&e.businessRegistrationNumber&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-businessRegistrationNumber",children:e.businessRegistrationNumber})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:6,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"gstNumber",children:"GST Number"}),(0,h.jsx)(c.c,{id:"gstNumber",type:"gstNumber",value:p.gstNumber,name:"gstNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.gstNumber&&e.gstNumber),disabled:v}),m.gstNumber&&e.gstNumber&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-gstNumber",children:e.gstNumber})]})}),(0,h.jsx)(s.cp,{item:!0,xs:12,md:6,children:(0,h.jsxs)(r.c,{spacing:1,children:[(0,h.jsx)(a.c,{htmlFor:"panNumber",children:"PAN Number"}),(0,h.jsx)(c.c,{id:"panNumber",type:"panNumber",value:p.panNumber,name:"panNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(m.panNumber&&e.panNumber),disabled:v}),m.panNumber&&e.panNumber&&(0,h.jsx)(d.c,{error:!0,id:"helper-text-panNumber",children:e.panNumber})]})}),S?(0,h.jsx)(s.cp,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,h.jsx)(l.c,{children:(0,h.jsx)(u.c,{isLoading:b,disabled:b,color:"primary",size:"large",type:"button",variant:"contained",id:"deployBotVerify",onClick:_,children:"Verify"})})}):(0,h.jsx)(s.cp,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,h.jsx)(l.c,{children:(0,h.jsx)(u.c,{isLoading:b,disabled:b,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})})}})}},35240:(t,e,n)=>{n.d(e,{Aj:()=>a,_M:()=>s,aE:()=>c,s$:()=>r,wz:()=>u});var o=n(52216),i=n(79028);async function s(t,e){return d("GET",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(t,e){return d("POST",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(t,e){return d("PUT",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(t,e){return d("DELETE",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(t,e,n){let{headers:o,noAuth:i,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===t||"PUT"===t||"DELETE"===t;e=u(e,r?void 0:n);const a=n instanceof FormData;if(a||(n=n&&"object"===typeof n&&r?JSON.stringify(n):void 0),o||(o={}),a||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==i){const t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t))}try{const i=await fetch(e,{...s,headers:o,body:n,method:t}),r=await i.json();if(i.ok){const{data:t,...e}=r;return delete e.status,t&&!Object.keys(e).length?t:r}throw r.message?new Error(r.message):r}catch(d){var c;throw console.error("Error calling API: ",d),null!==(c=d.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,o.Sm)(i.UX,"/");function u(t,e){if(!t)return t;const n=e&&Object.keys(e);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((t,n)=>{let o=e[n];return null===o||void 0===o?t:(o="".concat(n,"=").concat(encodeURIComponent(o)),t?"".concat(t,"&").concat(o):o)}),"");o&&(t="".concat(t).concat(t.includes("?")?"&":"?").concat(o))}return t.startsWith("https://")?t:"".concat(l).concat(t)}},8428:(t,e,n)=>{n.d(e,{A1:()=>b,Ci:()=>l,In:()=>u,Jr:()=>a,WS:()=>d,aE:()=>c,cn:()=>m,y0:()=>r});var o=n(35240),i=n(76312),s=n(52216);async function r(t){const{organization:{websiteUrl:e,_id:n}}=i.mW.getState(),s={organizationId:n,websiteUrl:e,botName:t,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};g(await o.s$("/bot/initialize-create-bot",s),!0)}async function a(t,e,n){const{organizationId:s}=i.mW.getState();if(!s||!t)throw new Error("Bot details not found");const r=await o.Aj("/bot/".concat(s,"/").concat(t),e);return g(r,n),r}async function c(t){const{organizationId:e,selectedBotId:n}=i.mW.getState();if(!e||!t)throw new Error("Bot details not found");const{deleted:s}=await o.aE("/bot/".concat(e,"/").concat(t));if(s){let{botsMap:t,botsList:e}=i.mW.getState();t={...t},e=[...e],delete t[s];const o=e.findIndex((t=>t._id===s));o>=0&&e.splice(o,1);const a={botsMap:t,botsList:e};var r;if(n===s)a.selectedBotId=(null===(r=e[0])||void 0===r?void 0:r._id)||null;i.mW.setState(a)}return!!s}function d(t,e){let{botDesign:n}=i.mW.getState();return n={...n,...e},a(t,{botDesign:n})}async function l(t,e){const{organizationId:n,selectedBotId:s}=i.mW.getState(),r=new FormData;r.append("file",e);const a=await o.s$("/bot/".concat(n,"/").concat(s,"/update-logo/").concat(t),r);return p(s,a),a["botDesign.".concat(t)]}async function u(t){const{organizationId:e,selectedBotId:n}=i.mW.getState(),s=await o.aE("/bot/".concat(e,"/").concat(n,"/update-logo/").concat(t));return p(n,s),s["botDesign.".concat(t)]}function b(t,e){return a(t,{botName:e})}function m(t,e){let{botSettings:n={}}=i.mW.getState();return n={...n,...e},a(t,{botSettings:n})}function p(t,e){const{botsMap:n}=i.mW.getState(),o=n[t];if(!o)return;g(Object.keys(e).reduce(((t,n)=>(0,s.eQ)(t,n,e[n])),o))}function g(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=t._id;let{botsMap:o,botsList:s}=i.mW.getState();o={...o,[n]:t},s=[...s];const r=s.findIndex((t=>t._id===n));r>=0?s[r]=t:s.push(t);const a={botsMap:o,botsList:s};e&&(a.selectedBotId=n),i.mW.setState(a)}},92e3:(t,e,n)=>{n.d(e,{oB:()=>a,oD:()=>r,wz:()=>s});var o=n(35240),i=n(76312);async function s(t){const{organizationId:e,selectedBotId:n}=i.mW.getState(),s=await o.s$("/bot/".concat(e,"/").concat(n,"/knowledge-base"),t);i.mW.setState((e=>{const o={...e.kbDocs||{}};if(o[n]=[...o[n]],t._id){const t=o[n].findIndex((t=>t._id===s._id));t>=0?o[n][t]=s:o[n].push(s)}else o[n].push(s);return{kbDocs:o}}))}async function r(t){const{organizationId:e,selectedBotId:n,kbDocs:s}=i.mW.getState();if(t&&Array.isArray(null===s||void 0===s?void 0:s[n]))return;const r=await o._M("/bot/".concat(e,"/").concat(n,"/knowledge-base/list"));i.mW.setState((t=>({kbDocs:{...t.kbDocs||{},[n]:r}})))}async function a(t){const{organizationId:e,selectedBotId:n}=i.mW.getState();await o.aE("/bot/".concat(e,"/").concat(n,"/knowledge-base/").concat(t)),i.mW.setState((e=>{var o;const i={...e.kbDocs||{}};return i[n]=null===(o=i[n])||void 0===o?void 0:o.filter((e=>e._id!==t)),{kbDocs:i}}))}},97544:(t,e,n)=>{n.d(e,{AT:()=>r,QJ:()=>a,SC:()=>l,We:()=>c,uk:()=>d,wD:()=>u});var o=n(35240),i=n(76312),s=n(92e3);async function r(t,e,n){const s=await o.s$("/bot/add-training-media",t,{headers:{botId:e,organizationId:n}}),{trainingMedia:r}=s;((t,e)=>{i.mW.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,r)}async function a(t,e,n){const s=await o.s$("/bot/delete-training-media-document",t,{headers:{botId:e,organizationId:n}}),{trainingDocuments:r}=s;((t,e)=>{i.mW.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,r)}async function c(t){const{organizationId:e,selectedBotId:n}=i.mW.getState(),s=new FormData;s.append("file",t);const r={},a=sessionStorage.getItem("token");a&&(r.Authorization="Bearer ".concat(a)),r.Botid=n,r.Organizationid=e,r.Accept="application/json";const c=(0,o.wz)("/bot/add-training-media");await fetch(c,{headers:r,method:"POST",body:s}).then((t=>t.json())).then((t=>{const{trainingMedia:e}=t.data;((t,e)=>{i.mW.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(n,e)})).catch((t=>{throw new Error("File upload failed. Please try again.",t)}))}async function d(t,e){const n=await o.s$("/bot/add-tranining-document-name",t),{trainingMedia:s}=n;((t,e)=>{i.mW.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,s)}async function l(t,e){const n=await o.s$("/bot/".concat(e,"/").concat(t,"/knowledge-base/train"));return i.mW.setState((e=>{const n={...e.kbDocs||{}};return delete n[t],(0,s.oD)().catch((t=>console.error("Error fetching Knowledge base content:",t))),{kbDocs:n}})),n}async function u(t){const e=await o.s$("/bot/add-bot-tax-details",t),{_id:n,botDetailsForVerification:s}=e;var r,a;return r=n,a=s,i.mW.setState((t=>{const e=t.botsList.map((t=>t._id===r?{...t,botDetailsForVerification:a}:t));return{...t,botsList:e}})),s}},52216:(t,e,n)=>{function o(t,e){return t.replace(new RegExp("".concat(i(e),"+$")),"")}function i(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(t){const e=new Date(t),n=e.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],i=e.getFullYear();return"".concat(o," ").concat(n,", ").concat(i)}function r(t,e,n){if(!e&&!t)return n;t=t||{};const o=Array.isArray(t)?[...t]:{...t};if(e.includes(".")){const i=e.indexOf("."),s=e.substring(0,i),a=e.substring(i+1);o[s]=r(t[s],a,n)}else o[e]=n;return o}n.d(e,{Sm:()=>o,_m:()=>s,eQ:()=>r})},79028:(t,e,n)=>{n.d(e,{AZ:()=>i,So:()=>a,UX:()=>o,cX:()=>s,vc:()=>r});const o="https://devbackend.livhousing.com",i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,a="https://60f1-203-192-224-75.ngrok-free.app"}}]);