"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[264],{32829:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(25371),i=n(44414);function s(t){let{children:e,type:n}=t;return(0,i.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:e})}s.defaultProps={type:"scale"}},92728:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(9950),i=n(48205),s=n(44414);const r=o.forwardRef((function(t,e){return(0,s.jsx)(i.A,{direction:"up",ref:e,...t})}))},51637:(t,e,n)=>{n.d(e,{A:()=>u});var o=n(9950),i=n(14857),s=n(48089),r=n(45180),a=n(82053),c=n(50704),d=n(44414);const l={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((t,e)=>{let{border:n=!0,boxShadow:o,children:u,content:b=!0,contentSX:g={},darkTitle:h,elevation:p,secondary:m,shadow:f,sx:A={},title:y,...x}=t;const v=(0,i.A)();return o="dark"===v.palette.mode?o||!0:o,(0,d.jsxs)(s.A,{elevation:p||0,ref:e,...x,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===v.palette.mode?v.palette.divider:v.palette.grey.A800,boxShadow:!o||n&&"dark"!==v.palette.mode?"inherit":f||v.customShadows.z1,":hover":{boxShadow:o?f||v.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:v.typography.fontFamily,fontSize:"0.75rem"},...A},children:[!h&&y&&(0,d.jsx)(r.A,{sx:l,titleTypographyProps:{variant:"subtitle1"},title:y,action:m}),h&&y&&(0,d.jsx)(r.A,{sx:l,title:(0,d.jsx)(a.A,{variant:"h3",children:y}),action:m}),b&&(0,d.jsx)(c.A,{sx:g,children:u}),!b&&u]})}))},26092:(t,e,n)=>{n.d(e,{A:()=>g});n(9950);var o=n(92728),i=n(63464),s=n(40033),r=n(28170),a=n(96319),c=n(59254),d=n(14857),l=n(25333),u=n(44414);const b=(0,c.Ay)(i.A)((t=>{let{theme:e}=t;return{"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}}));function g(t){const e=(0,d.A)(),{breakpoints:n}=e,{openPopUpDialog:i,setPopUpDialog:c,title:g}=t;return(0,u.jsxs)(b,{TransitionComponent:o.A,"aria-labelledby":"customized-dialog-title",open:i,PaperProps:{sx:{width:"60%",[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(s.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:g}),(0,u.jsx)(l.A,{"aria-label":"close",onClick:()=>{c(!1)},sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(a.A,{})}),(0,u.jsx)(r.A,{dividers:!0,children:t.children})]})}},93383:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(9950),i=n(10226),s=n(46639),r=n(44414);const a=function(t){let{onClick:e,disabled:n,isLoading:a,children:c,...d}=t;const[l,u]=o.useState(a);return(0,r.jsxs)(i.A,{onClick:t=>{if(!e)return;const n=e(t);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:l||a||n,...d,children:[(l||a)&&(0,r.jsx)(s.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},81857:(t,e,n)=>{n.d(e,{A:()=>f});n(9950);var o=n(61467),i=n(29714),s=n(60899),r=n(93230),a=n(3788),c=n(2660),d=n(24516),l=n(32829),u=n(93383),b=n(58178),g=n(30334),h=n(8478),p=n(69713);var m=n(44414);const f=function(t){const{setIsDeployBot:e,botId:n,organizationId:f}=t,A=(0,p.nc)((t=>t.botsList)).find((t=>t._id===n)),y=null===A||void 0===A?void 0:A.botDetailsForVerification;let x=!1;const v=(0,p.nc)((t=>t.isSuperUser));v&&(x=!0);const S={integrationUrl:(null===y||void 0===y?void 0:y.integrationUrl)||"",businessAddress:(null===y||void 0===y?void 0:y.businessAddress)||"",country:(null===y||void 0===y?void 0:y.country)||"",state:(null===y||void 0===y?void 0:y.state)||"",city:(null===y||void 0===y?void 0:y.city)||"",postalCode:(null===y||void 0===y?void 0:y.postalCode)||"",businessRegistrationNumber:(null===y||void 0===y?void 0:y.businessRegistrationNumber)||"",gstNumber:(null===y||void 0===y?void 0:y.gstNumber)||"",panNumber:(null===y||void 0===y?void 0:y.panNumber)||""},j=async()=>{const t=S.integrationUrl,e={organizationId:f,botId:n,verificationStatus:!0};try{if(t||""!==t.trim()){const t=await async function(t){const e=await h.bE("/bot/verify-bot-details",t),{_id:n,verificationStatus:o}=e;return((t,e)=>{p.nc.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,verificationStatus:e}:n));return{...n,botsList:o}}))})(n,o),o}(e);t?(0,b.i)(!0,"The bot verified successfully","success"):(0,b.i)(!0,"Not able to verify the bot. Try after sometime!","error")}else(0,b.i)(!0,"Integration Url is mandatory for bot verification","error")}catch(o){(0,b.i)(!0,"Not able to verify the bot. Try after sometime!","error")}};return(0,m.jsx)(o.l1,{initialValues:S,enableReinitialize:!0,validationSchema:i.Ik().shape({integrationUrl:i.Yj().url("Enter valid url!").max(255).required("Integration Url is required"),businessAddress:i.Yj().max(255).required("Business Address is required"),country:i.Yj().max(50).required("Country is required"),state:i.Yj().max(50).required("State is required"),city:i.Yj().max(50).required("City is required"),postalCode:i.ai().test("len","Maximum 10 digits are allowed",(t=>t.toString().length<=10)).required("Postal Code is required"),businessRegistrationNumber:i.Yj().max(150).nullable(!0),gstNumber:i.Yj().max(150).nullable(!0),panNumber:i.Yj().max(50).nullable(!0)}),onSubmit:async(t,o)=>{let{setErrors:i,setStatus:s,setSubmitting:r}=o;const a={organizationId:f,botId:n,botDetailsForVerification:{...t}};try{r(!0),await(0,g.pn)(a),s({success:!0}),e(!1),(0,b.i)(!0,"The bot deployed successfully!","success")}catch(c){s({success:!1}),i({submit:c.message}),r(!1),(0,b.i)(!0,"Not able to deploy the bot. Try after sometime!","error")}},children:t=>{let{errors:e,handleBlur:n,handleChange:o,handleSubmit:i,isSubmitting:b,touched:g,values:h}=t;return(0,m.jsx)("form",{onSubmit:i,children:(0,m.jsxs)(s.Ay,{container:!0,spacing:1,children:[(0,m.jsx)(s.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"integrationUrl",children:"*Integration Url"}),(0,m.jsx)(c.A,{id:"integrationUrl",type:"integrationUrl",value:h.integrationUrl,name:"integrationUrl",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.integrationUrl&&e.integrationUrl),disabled:x}),g.integrationUrl&&e.integrationUrl&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-integrationUrl",children:e.integrationUrl})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"businessAddress",children:"*Business Address"}),(0,m.jsx)(c.A,{id:"businessAddress",type:"businessAddress",value:h.businessAddress,name:"businessAddress",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.businessAddress&&e.businessAddress),disabled:x}),g.businessAddress&&e.businessAddress&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-businessAddress",children:e.businessAddress})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"country",children:"*Country"}),(0,m.jsx)(c.A,{id:"country",type:"country",value:h.country,name:"country",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.country&&e.country),disabled:x}),g.country&&e.country&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-country",children:e.country})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"state",children:"*State"}),(0,m.jsx)(c.A,{id:"state",type:"state",value:h.state,name:"state",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.state&&e.state),disabled:x}),g.state&&e.state&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-state",children:e.state})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"city",children:"*City"}),(0,m.jsx)(c.A,{id:"city",type:"city",value:h.city,name:"city",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.city&&e.city),disabled:x}),g.city&&e.city&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-city",children:e.city})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"postalCode",children:"*Postal Code"}),(0,m.jsx)(c.A,{id:"postalCode",type:"postalCode",value:h.postalCode,name:"postalCode",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.postalCode&&e.postalCode),disabled:x}),g.postalCode&&e.postalCode&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-postalCode",children:e.postalCode})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"businessRegistrationNumber",children:"Business Registration Number"}),(0,m.jsx)(c.A,{id:"businessRegistrationNumber",type:"businessRegistrationNumber",value:h.businessRegistrationNumber,name:"businessRegistrationNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.businessRegistrationNumber&&e.businessRegistrationNumber),disabled:x}),g.businessRegistrationNumber&&e.businessRegistrationNumber&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-businessRegistrationNumber",children:e.businessRegistrationNumber})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"gstNumber",children:"GST Number"}),(0,m.jsx)(c.A,{id:"gstNumber",type:"gstNumber",value:h.gstNumber,name:"gstNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.gstNumber&&e.gstNumber),disabled:x}),g.gstNumber&&e.gstNumber&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-gstNumber",children:e.gstNumber})]})}),(0,m.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,m.jsxs)(r.A,{spacing:1,children:[(0,m.jsx)(a.A,{htmlFor:"panNumber",children:"PAN Number"}),(0,m.jsx)(c.A,{id:"panNumber",type:"panNumber",value:h.panNumber,name:"panNumber",autoComplete:"off",onBlur:n,onChange:o,fullWidth:!0,error:Boolean(g.panNumber&&e.panNumber),disabled:x}),g.panNumber&&e.panNumber&&(0,m.jsx)(d.A,{error:!0,id:"helper-text-panNumber",children:e.panNumber})]})}),v?(0,m.jsx)(s.Ay,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,m.jsx)(l.A,{children:(0,m.jsx)(u.A,{isLoading:b,disabled:b,color:"primary",size:"large",type:"button",variant:"contained",id:"deployBotVerify",onClick:j,children:"Verify"})})}):(0,m.jsx)(s.Ay,{item:!0,xs:12,md:12,container:!0,justifyContent:"flex-end",children:(0,m.jsx)(l.A,{children:(0,m.jsx)(u.A,{isLoading:b,disabled:b,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})})}})}},8478:(t,e,n)=>{n.d(e,{Jt:()=>s,Ne:()=>u,TF:()=>c,bE:()=>r,yJ:()=>a});var o=n(32026),i=n(44364);async function s(t,e){return d("GET",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(t,e){return d("POST",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(t,e){return d("PUT",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(t,e){return d("DELETE",t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(t,e,n){let{headers:o,noAuth:i,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===t||"PUT"===t||"DELETE"===t;e=u(e,r?void 0:n);const a=n instanceof FormData;if(a||(n=n&&"object"===typeof n&&r?JSON.stringify(n):void 0),o||(o={}),a||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==i){const t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t))}try{const i=await fetch(e,{...s,headers:o,body:n,method:t}),r=await i.json();if(i.ok){const{data:t,...e}=r;return delete e.status,t&&!Object.keys(e).length?t:r}throw r.message?new Error(r.message):r}catch(d){var c;throw console.error("Error calling API: ",d),null!==(c=d.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const l=(0,o.s8)(i.jn,"/");function u(t,e){if(!t)return t;const n=e&&Object.keys(e);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((t,n)=>{let o=e[n];return null===o||void 0===o?t:(o="".concat(n,"=").concat(encodeURIComponent(o)),t?"".concat(t,"&").concat(o):o)}),"");o&&(t="".concat(t).concat(t.includes("?")?"&":"?").concat(o))}return t.startsWith("https://")?t:"".concat(l).concat(t)}},98415:(t,e,n)=>{n.d(e,{Ci:()=>u,I4:()=>l,TF:()=>c,gI:()=>r,gR:()=>g,jo:()=>d,so:()=>b,yo:()=>a});var o=n(8478),i=n(69713),s=n(32026);async function r(t){const{organization:{websiteUrl:e,_id:n}}=i.nc.getState(),s={organizationId:n,websiteUrl:e,botName:t,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};p(await o.bE("/bot/initialize-create-bot",s),!0)}async function a(t,e,n){const{organizationId:s}=i.nc.getState();if(!s||!t)throw new Error("Bot details not found");const r=await o.yJ("/bot/".concat(s,"/").concat(t),e);return p(r,n),r}async function c(t){const{organizationId:e,selectedBotId:n}=i.nc.getState();if(!e||!t)throw new Error("Bot details not found");const{deleted:s}=await o.TF("/bot/".concat(e,"/").concat(t));if(s){let{botsMap:t,botsList:e}=i.nc.getState();t={...t},e=[...e],delete t[s];const o=e.findIndex((t=>t._id===s));o>=0&&e.splice(o,1);const a={botsMap:t,botsList:e};var r;if(n===s)a.selectedBotId=(null===(r=e[0])||void 0===r?void 0:r._id)||null;i.nc.setState(a)}return!!s}function d(t,e){let{botDesign:n}=i.nc.getState();return n={...n,...e},a(t,{botDesign:n})}async function l(t,e){const{organizationId:n,selectedBotId:s}=i.nc.getState(),r=new FormData;r.append("file",e);const a=await o.bE("/bot/".concat(n,"/").concat(s,"/update-logo/").concat(t),r);return h(s,a),a["botDesign.".concat(t)]}async function u(t){const{organizationId:e,selectedBotId:n}=i.nc.getState(),s=await o.TF("/bot/".concat(e,"/").concat(n,"/update-logo/").concat(t));return h(n,s),s["botDesign.".concat(t)]}function b(t,e){return a(t,{botName:e})}function g(t,e){let{botSettings:n={}}=i.nc.getState();return n={...n,...e},a(t,{botSettings:n})}function h(t,e){const{botsMap:n}=i.nc.getState(),o=n[t];if(!o)return;p(Object.keys(e).reduce(((t,n)=>(0,s.G6)(t,n,e[n])),o))}function p(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=t._id;let{botsMap:o,botsList:s}=i.nc.getState();o={...o,[n]:t},s=[...s];const r=s.findIndex((t=>t._id===n));r>=0?s[r]=t:s.push(t);const a={botsMap:o,botsList:s};e&&(a.selectedBotId=n),i.nc.setState(a)}},77382:(t,e,n)=>{n.d(e,{CA:()=>a,Mk:()=>s,bZ:()=>r});var o=n(8478),i=n(69713);async function s(t){const{organizationId:e,selectedBotId:n}=i.nc.getState(),s=await o.bE("/bot/".concat(e,"/").concat(n,"/knowledge-base"),t);i.nc.setState((e=>{const o={...e.kbDocs||{}};if(o[n]=[...o[n]],t._id){const t=o[n].findIndex((t=>t._id===s._id));t>=0?o[n][t]=s:o[n].push(s)}else o[n].push(s);return{kbDocs:o}}))}async function r(t){const{organizationId:e,selectedBotId:n,kbDocs:s}=i.nc.getState();if(t&&Array.isArray(null===s||void 0===s?void 0:s[n]))return;const r=await o.Jt("/bot/".concat(e,"/").concat(n,"/knowledge-base/list"));i.nc.setState((t=>({kbDocs:{...t.kbDocs||{},[n]:r}})))}async function a(t){const{organizationId:e,selectedBotId:n}=i.nc.getState();await o.TF("/bot/".concat(e,"/").concat(n,"/knowledge-base/").concat(t)),i.nc.setState((e=>{var o;const i={...e.kbDocs||{}};return i[n]=null===(o=i[n])||void 0===o?void 0:o.filter((e=>e._id!==t)),{kbDocs:i}}))}},30334:(t,e,n)=>{n.d(e,{Ei:()=>l,KM:()=>r,MD:()=>c,pn:()=>u,qt:()=>a,xW:()=>d});var o=n(8478),i=n(69713),s=n(77382);async function r(t,e,n){const s=await o.bE("/bot/add-training-media",t,{headers:{botId:e,organizationId:n}}),{trainingMedia:r}=s;((t,e)=>{i.nc.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,r)}async function a(t,e,n){const s=await o.bE("/bot/delete-training-media-document",t,{headers:{botId:e,organizationId:n}}),{trainingDocuments:r}=s;((t,e)=>{i.nc.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,r)}async function c(t){const{organizationId:e,selectedBotId:n}=i.nc.getState(),s=new FormData;s.append("file",t);const r={},a=sessionStorage.getItem("token");a&&(r.Authorization="Bearer ".concat(a)),r.Botid=n,r.Organizationid=e,r.Accept="application/json";const c=(0,o.Ne)("/bot/add-training-media");await fetch(c,{headers:r,method:"POST",body:s}).then((t=>t.json())).then((t=>{const{trainingMedia:e}=t.data;((t,e)=>{i.nc.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(n,e)})).catch((t=>{throw new Error("File upload failed. Please try again.",t)}))}async function d(t,e){const n=await o.bE("/bot/add-tranining-document-name",t),{trainingMedia:s}=n;((t,e)=>{i.nc.setState((n=>{const o=n.botsList.map((n=>n._id===t?{...n,trainingMedia:e}:n));return{...n,botsList:o}}))})(e,s)}async function l(t,e){const n=await o.bE("/bot/".concat(e,"/").concat(t,"/knowledge-base/train"));return i.nc.setState((e=>{const n={...e.kbDocs||{}};return delete n[t],(0,s.bZ)().catch((t=>console.error("Error fetching Knowledge base content:",t))),{kbDocs:n}})),n}async function u(t){const e=await o.bE("/bot/add-bot-tax-details",t),{_id:n,botDetailsForVerification:s}=e;var r,a;return r=n,a=s,i.nc.setState((t=>{const e=t.botsList.map((t=>t._id===r?{...t,botDetailsForVerification:a}:t));return{...t,botsList:e}})),s}},32026:(t,e,n)=>{function o(t,e){return t.replace(new RegExp("".concat(i(e),"+$")),"")}function i(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(t){const e=new Date(t),n=e.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],i=e.getFullYear();return"".concat(o," ").concat(n,", ").concat(i)}function r(t,e,n){if(!e&&!t)return n;t=t||{};const o=Array.isArray(t)?[...t]:{...t};if(e.includes(".")){const i=e.indexOf("."),s=e.substring(0,i),a=e.substring(i+1);o[s]=r(t[s],a,n)}else o[e]=n;return o}n.d(e,{G6:()=>r,Yq:()=>s,s8:()=>o})},44364:(t,e,n)=>{n.d(e,{DX:()=>a,Og:()=>s,jn:()=>o,pA:()=>r,pR:()=>i});const o="https://devbackend.livhousing.com",i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,a="https://60f1-203-192-224-75.ngrok-free.app"}}]);