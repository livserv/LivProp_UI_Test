"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[5270],{5270:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var n=i(9950),a=i(78317),o=i(60899),r=i(82053),s=i(52472),l=i(99532),c=i(33340),d=i(70855),u=i(43983),h=i(26092),m=i(21788),A=i(81616),v=i(3788),p=i(2660),g=i(24516),x=i(16497),f=i(37324),y=i(25333),b=i(61467),j=i(29714),S=i(45165),C=i(93383),T=i(32829),D=i(70006),E=i(25277),_=i(23266),P=i(42209),I=i(44414);const w=e=>{let{options:t,values:i,label:n="Multiple Select",onChange:a,handleDelete:o}=e;return(0,I.jsx)(D.A,{multiple:!0,value:(null===i||void 0===i?void 0:i.map((e=>null===e||void 0===e?void 0:e.code)))||null,onChange:e=>{const i=e.target.value.map((e=>t.find((t=>t.code===e))));a(i)},input:(0,I.jsx)(p.A,{label:n}),renderValue:e=>(0,I.jsx)(A.A,{gap:1,direction:"row",flexWrap:"wrap",children:null===e||void 0===e?void 0:e.map((e=>{const i=t.find((t=>t.code===e));return(0,I.jsx)(E.A,{label:i?i.name:e,onDelete:()=>o(e),deleteIcon:(0,I.jsx)(P.A,{onMouseDown:e=>e.stopPropagation()})},e)}))}),MenuProps:{style:{zIndex:35001}},children:t.map((e=>(0,I.jsx)(_.A,{value:e.code,children:e.name},e.code)))})},O=[{name:"Sunday",code:"SUN"},{name:"Monday",code:"MON"},{name:"Tuesday",code:"TUE"},{name:"Wednesday",code:"WED"},{name:"Thursday",code:"THU"},{name:"Friday",code:"FRI"},{name:"Saturday",code:"SAT"}];const N=function(e){var t;let{botId:i,organizationId:n,setPopUpDialog:a,callConnectObj:r,setCallConnectObj:s,edit:l,setEditMode:c}=e;const d=j.Ik().shape({name:j.Yj().required("Name is required"),phoneNumbers:j.YO().of(j.Yj().required("Phone number is required").matches(/^\d{10}$/,"Each number should contain exactly 10 digits")),serviceStartTime:j.Yj().required("Service start time is required"),serviceEndTime:j.Yj().required("Service end time is required"),callCost:j.ai().required("Call cost is required"),serviceStatus:j.zM(),messageToPlay:j.Yj().required("Service status is required"),deniedDays:j.YO(),billingActivationDate:j.p6(),modifiedAt:j.p6()});return(0,I.jsx)(o.Ay,{item:!0,xs:12,children:(0,I.jsx)(b.l1,{initialValues:null!==(t=null===r||void 0===r?void 0:r.serviceDetails)&&void 0!==t?t:{},validationSchema:d,onSubmit:async(e,t)=>{let{setErrors:o,setStatus:l,setSubmitting:d}=t;try{let t={botId:i,organizationId:n,channelId:"callConnect_123",channelName:"callConnect",serviceDetails:{...e}};const o=null===r||void 0===r?void 0:r._id;o&&(t={...t,_id:o}),await(0,u.uV)(t),a(!1),l({success:!0}),d(!1),s({}),c(!1),(0,m.i)(!0,"The Call Connect Details added successfully!","success")}catch(h){l({success:!1}),o({submit:h.message}),d(!1),(0,m.i)(!0,"Not able to activate Call Connect. Try after sometime!","error")}},children:e=>{var t;let{values:i,errors:n,touched:a,isSubmitting:r,handleChange:s,handleBlur:c,handleSubmit:d,setFieldValue:u}=e;return(0,I.jsx)("form",{noValidate:!0,onSubmit:d,children:(0,I.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"name",children:"Name *"}),(0,I.jsx)(p.A,{id:"name",name:"name",value:i.name,onBlur:c,onChange:s,error:Boolean(a.name&&n.name),fullWidth:!0}),(0,I.jsx)(g.A,{error:!0,children:a.name&&n.name})]})}),[0,1,2].map((e=>(0,I.jsx)(R,{index:e,value:i.phoneNumbers,error:n.phoneNumbers,touched:a.phoneNumbers,setFieldValue:u,handleBlur:c},e))),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"serviceStartTime",children:"Service Start Time *"}),(0,I.jsx)(S.V,{id:"serviceStartTime",name:"serviceStartTime",value:i.serviceStartTime?new Date(i.serviceStartTime):null,onBlur:c,tooltipOptions:{position:"top"},onChange:s,error:Boolean(a.serviceStartTime&&n.serviceStartTime),timeOnly:!0,hourFormat:"24",showIcon:!0,autoZIndex:!0,appendTo:"self"}),(0,I.jsx)(g.A,{error:!0,children:a.serviceStartTime&&n.serviceStartTime})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"serviceEndTime",children:"Service End Time *"}),(0,I.jsx)(S.V,{id:"serviceEndTime",name:"serviceEndTime",value:i.serviceEndTime?new Date(i.serviceEndTime):null,onBlur:c,onChange:s,autoZIndex:!0,appendTo:"self",hourFormat:"24",timeOnly:!0,showIcon:!0,error:Boolean(a.serviceEndTime&&n.serviceEndTime)}),(0,I.jsx)(g.A,{error:!0,children:a.serviceEndTime&&n.serviceEndTime})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"deniedDays",children:"Denied Days *"}),(0,I.jsx)(w,{name:"deniedDays",options:O,values:null!==(t=null===i||void 0===i?void 0:i.deniedDays)&&void 0!==t?t:[],setFieldValue:u,label:"Select Denied Days",handleDelete:e=>u("deniedDays",i.deniedDays.filter((t=>t.code!==e))),onChange:e=>u("deniedDays",e)})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"messageToPlay",children:"Message To Play *"}),(0,I.jsx)(p.A,{id:"messageToPlay",name:"messageToPlay",value:i.messageToPlay,onBlur:c,onChange:s,error:Boolean(a.messageToPlay&&n.messageToPlay),fullWidth:!0}),(0,I.jsx)(g.A,{error:!0,children:a.messageToPlay&&n.messageToPlay})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"billingActivationDate",children:"Billing Activation Date *"}),(0,I.jsx)(S.V,{id:"billingActivationDate",name:"billingActivationDate",value:i.billingActivationDate?new Date(i.billingActivationDate):null,onBlur:c,onChange:s,autoZIndex:!0,appendTo:"self",showIcon:!0,error:Boolean(a.billingActivationDate&&n.billingActivationDate)}),(0,I.jsx)(g.A,{error:!0,children:a.billingActivationDate&&n.billingActivationDate})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:"callCost",children:"Call Cost *"}),(0,I.jsx)(p.A,{id:"callCost",name:"callCost",value:i.callCost,onBlur:c,onChange:s,error:Boolean(a.callCost&&n.callCost),fullWidth:!0}),(0,I.jsx)(g.A,{error:!0,children:a.callCost&&n.callCost})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(x.A,{control:(0,I.jsx)(f.A,{id:"serviceStatus",name:"serviceStatus",value:i.serviceStatus,onBlur:c,onChange:e=>u("serviceStatus",e.target.checked),error:Boolean(a.serviceStatus&&n.serviceStatus),checked:i.serviceStatus}),label:"Service Status"}),(0,I.jsx)(g.A,{error:!0,children:a.serviceStatus&&n.serviceStatus})]})}),(0,I.jsx)(o.Ay,{item:!0,xs:12,container:!0,justifyContent:"flex-end",children:(0,I.jsx)(T.A,{children:(0,I.jsx)(C.A,{isLoading:r,disabled:r,color:"primary",size:"large",type:"submit",variant:"contained",children:l?"Edit":"Add"})})})]})})}})})},R=e=>{let{index:t,value:i=[],error:n,touched:a,setFieldValue:r,handleBlur:s}=e;return(0,I.jsx)(o.Ay,{item:!0,xs:12,md:6,children:(0,I.jsxs)(A.A,{spacing:1,children:[(0,I.jsx)(v.A,{htmlFor:`phoneNumbers.${t}`,children:"Phone Number *"}),(0,I.jsx)(p.A,{id:`phoneNumbers.${t}`,name:`phoneNumbers.${t}`,value:i&&i?i[t]:"",onBlur:s,onChange:e=>{console.log(e,i);const n=[...i];n[t]=e.target.value,r("phoneNumbers",n)},error:Boolean((null===a||void 0===a?void 0:a[t])&&(null===n||void 0===n?void 0:n[t])),fullWidth:!0,startAdornment:(0,I.jsx)(y.A,{sx:{p:"10px"},"aria-label":"phone-icon",children:"91"}),inputProps:{"aria-label":"phone number"}}),(0,I.jsx)(g.A,{error:!0,children:(null===a||void 0===a?void 0:a[t])&&(null===n||void 0===n?void 0:n[t])})]})},`phoneNumbers-${t}`)};var $=i(53065),k=i(64697);const z=(0,i(59254).Ay)((e=>{let{className:t,...i}=e;return(0,I.jsx)($.A,{...i,arrow:!0,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{[`& .${k.A.arrow}`]:{color:t.palette.common.black},[`& .${k.A.tooltip}`]:{backgroundColor:t.palette.common.black}}})),B=z;var M=i(50704),F=i(51637),L=i(35217),U=i(2401),V=i(7999),Y=i(57988),G=i(46278);const K=e=>{let{data:t,columns:i,actions:a,handleEdit:o,handleDelete:r}=e;const[s,l]=(0,n.useState)({open:!1,rowData:null}),c=e=>(0,I.jsxs)(I.Fragment,{children:[a.includes("edit")&&(0,I.jsx)(y.A,{color:"primary",onClick:()=>o(e._id),children:(0,I.jsx)(V.A,{})}),a.includes("delete")&&(0,I.jsx)(y.A,{color:"secondary",onClick:()=>l({open:!0,rowData:e}),children:(0,I.jsx)(Y.A,{})})]});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(L.b,{value:t,paginator:!0,rows:5,stripedRows:!0,scrollable:!0,showGridlines:!0,rowsPerPageOptions:[5,10,20],tableStyle:{minWidth:"150rem"},children:i.map((e=>(0,I.jsx)(U.V,{field:e.field,header:e.header,filter:e.filter||!1,filterPlaceholder:e.filter?`Search by ${e.header}`:null,body:"actions"===e.field?c:null,style:{width:e.width||"auto"}},e.field)))}),(0,I.jsx)(G.A,{title:"Delete Call Connect integration?",open:s.open,setOpen:e=>l((t=>({...t,open:e}))),onConfirm:()=>{r(s.rowData),l({open:!1,rowData:null})},children:"Confirm the deletion of Call Connect Details."})]})},W=[{field:"serviceDetails.name",header:"Name",filter:!0,width:"10rem"},{field:"agent1",header:"Agent 1",filter:!0,width:"5rem"},{field:"agent2",header:"Agent 2",filter:!1,width:"5rem"},{field:"agent3",header:"Agent 3",width:"5rem"},{field:"serviceStartTime",header:"Service Start Time",filter:!0,width:"10rem"},{field:"serviceEndTime",header:"Service End Time",filter:!0,width:"10rem"},{field:"serviceDetails.callCost",header:"Call Cost",filter:!0,width:"5rem"},{field:"serviceDetails.serviceStatus",header:"Service Status",filter:!1,width:"5rem"},{field:"serviceDetails.messageToPlay",header:"Message To Play",filter:!1,width:"10rem"},{field:"deniedDays",header:"Denied Days",filter:!0,width:"10rem"},{field:"billingActivationDate",header:"Billing Activation Date",filter:!0,width:"10rem"},{field:"actions",header:"Actions",width:"5rem"}],q=e=>{let{botId:t,organizationId:i,botList:a,setCallConnectObj:o,setEditMode:r,setCallConnectDialogOpen:s}=e;const[l,c]=(0,n.useState)([]),[d,h]=(0,n.useState)([]);(0,n.useEffect)((()=>{var e,i;const n=null===(e=a.find((e=>e._id===t)))||void 0===e||null===(i=e.integrations)||void 0===i?void 0:i.filter((e=>"callConnect_123"===e.channelId));if(n){c(n);const e=n.map((e=>{var t;return{...e,agent1:e.serviceDetails.phoneNumbers[0]||"",agent2:e.serviceDetails.phoneNumbers[1]||"",agent3:e.serviceDetails.phoneNumbers[2]||"",serviceStartTime:new Date(e.serviceDetails.serviceStartTime).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),serviceEndTime:new Date(e.serviceDetails.serviceEndTime).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),deniedDays:(null===(t=e.serviceDetails.deniedDays)||void 0===t?void 0:t.map((e=>e.name)).join(", "))||"",billingActivationDate:new Date(e.serviceDetails.billingActivationDate).toLocaleDateString("en-GB")||"",actions:null}}));h(e)}}),[t,a]);return(0,I.jsx)(F.A,{contentSX:{p:2.25},children:(0,I.jsx)(M.A,{style:{padding:0},children:(0,I.jsx)(K,{data:d,columns:W,actions:["edit","delete"],handleEdit:e=>{const t=null===l||void 0===l?void 0:l.find((t=>t._id===e));o(t),r(!0),s(!0)},handleDelete:async e=>{try{let n={botId:t,organizationId:i,...e};await(0,u.qo)(n),(0,m.i)(!0,"Call Connect deleted successfully!","success")}catch(n){(0,m.i)(!0,"Unable to delete. Try again later.","error")}}})})})};i(97881),i(4501);const J=()=>{const[e]=(0,d.G)(),t=(0,c.nc)((e=>e.botsList)),i=(0,c.nc)((e=>e.organizationId)),[A,v]=(0,n.useState)({}),[p,g]=(0,n.useState)(!1),[x,f]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{const t={organizationId:i,botId:e};try{await(0,u.Yl)(t)}catch(n){(0,m.i)(!0,"Not able to fetch integrations details. Try after sometime!","error")}})()}),[e,i,x]),(0,I.jsxs)(a.A,{children:[(0,I.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,I.jsx)(o.Ay,{item:!0,xs:11,children:(0,I.jsx)(r.A,{variant:"h5",children:"Call Connect"})}),(0,I.jsx)(o.Ay,{item:!0,xs:1,children:(0,I.jsx)(B,{title:"Add call connect",placement:"right",children:(0,I.jsx)(s.A,{color:"primary",onClick:()=>g(!0),children:(0,I.jsx)(l.A,{})})})})]}),(0,I.jsx)(o.Ay,{container:!0,spacing:3,children:(0,I.jsx)(o.Ay,{item:!0,xs:12,children:(0,I.jsx)(q,{botId:e,organizationId:i,botList:t,setCallConnectObj:v,setEditMode:f,setCallConnectDialogOpen:g})})}),(0,I.jsx)(h.A,{openPopUpDialog:p,setPopUpDialog:g,title:"Call Connect Integration",setFieldsValues:v,children:(0,I.jsx)(N,{botId:e,organizationId:i,setPopUpDialog:g,callConnectObj:A,setCallConnectObj:v,edit:x,setEditMode:f})})]})}},8478:(e,t,i)=>{i.d(t,{Jt:()=>o,TF:()=>l,bE:()=>r,yJ:()=>s});var n=i(32026),a=i(44364);async function o(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,i){let{headers:n,noAuth:a,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const i=t&&Object.keys(t);if(null!==i&&void 0!==i&&i.length){const n=i.reduce(((e,i)=>{let n=t[i];return null===n||void 0===n?e:(n=`${i}=${encodeURIComponent(n)}`,e?`${e}&${n}`:n)}),"");n&&(e=`${e}${e.includes("?")?"&":"?"}${n}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,r?void 0:i);const s=i instanceof FormData;if(s||(i=i&&"object"===typeof i&&r?JSON.stringify(i):void 0),n||(n={}),s||(n["Content-Type"]="application/json"),n.Accept="application/json",!1!==a){const e=sessionStorage.getItem("token");e&&(n.Authorization=`Bearer ${e}`)}try{const a=await fetch(t,{...o,headers:n,body:i,method:e}),r=await a.json();if(a.ok){const{data:e,...t}=r;return delete t.status,e&&!Object.keys(t).length?e:r}throw r.message?new Error(r.message):r}catch(c){var l;throw console.error("Error calling API: ",c),null!==(l=c.message)&&void 0!==l&&l.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,n.s8)(a.jn,"/")},26092:(e,t,i)=>{i.d(t,{A:()=>m});i(9950);var n=i(92728),a=i(63464),o=i(40033),r=i(28170),s=i(96319),l=i(59254),c=i(14857),d=i(25333),u=i(44414);const h=(0,l.Ay)(a.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)},zIndex:11010}}));function m(e){const t=(0,c.A)(),{breakpoints:i}=t,{openPopUpDialog:a,setPopUpDialog:l,setFieldsValues:m,onClose:A=()=>(l(!1),null===m||void 0===m?void 0:m({})),title:v,width:p="70%"}=e;return(0,u.jsxs)(h,{TransitionComponent:n.A,"aria-labelledby":"customized-dialog-title",open:a,PaperProps:{sx:{width:{width:p},[i.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(o.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:v}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:A,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(s.A,{})}),(0,u.jsx)(r.A,{dividers:!0,children:e.children})]})}},32026:(e,t,i)=>{function n(e,t){return e.replace(new RegExp(`${a(t)}+$`),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),i=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${i}, ${t.getFullYear()}`}function r(e,t,i){if(!t&&!e)return i;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),o=t.substring(0,a),s=t.substring(a+1);n[o]=r(e[o],s,i)}else n[t]=i;return n}function s(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<e;n++)i+=t.charAt(Math.floor(36*Math.random()));return i}function c(e,t,i){if(!t&&!e)return i;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),o=t.substring(0,a),r=t.substring(a+1);n[o]=c(e[o],r,i)}else n[t]=i;return n}function d(e,t){const i=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}i.d(t,{G6:()=>r,OX:()=>l,PE:()=>d,Yq:()=>o,do:()=>c,qW:()=>s,s8:()=>n})},32829:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(25371),a=i(44414);function o(e){let{children:t,type:i}=e;return(0,a.jsx)(n.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}o.defaultProps={type:"scale"}},43983:(e,t,i)=>{i.d(t,{Ay:()=>l,Yl:()=>r,qo:()=>s,u4:()=>d,uV:()=>c});var n=i(8478),a=i(33340),o=i(21788);async function r(e){const t=await n.Jt(`/integrations/${e.organizationId}/${e.botId}/list`),{botId:i}=e;((e,t)=>{a.nc.setState((i=>{const n=i.botsList.map((i=>i._id===e?{...i,integrations:t}:i));return{...i,botsList:n}}))})(i,t)}async function s(e){await n.TF(`/integrations/${e.organizationId}/${e.botId}/${e._id}`,e);try{await r(e)}catch(t){(0,o.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}async function l(e){const t=await n.bE(`/integrations/${e.organizationId}/${e.botId}/crm-callback-integration`,e),i={organizationId:t.organizationId,botId:t.botId};try{await r(i)}catch(a){(0,o.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}async function c(e){const t=await n.bE(`/integrations/${e.organizationId}/${e.botId}`,e),i={organizationId:t.organizationId,botId:t.botId};try{await r(i)}catch(a){(0,o.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}async function d(e){const{organizationId:t,selectedBotId:i}=a.nc.getState();await n.bE(`/integrations/${t}/${i}/whatsapp`,e);try{await r({organizationId:t,botId:i})}catch(s){(0,o.i)(!0,"Not able to fetch all integrations. Try after sometime!","error")}}},44364:(e,t,i)=>{i.d(t,{DX:()=>l,Og:()=>o,jn:()=>n,mB:()=>s,pA:()=>r,pR:()=>a});const n="https://devbackend.livhousing.com:444",a="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},46278:(e,t,i)=>{i.d(t,{A:()=>c});i(9950);var n=i(63464),a=i(40033),o=i(28170),r=i(79739),s=i(10226),l=i(44414);const c=e=>{const{title:t,children:i,open:c,setOpen:d,onConfirm:u}=e;return(0,l.jsxs)(n.A,{open:c,onClose:()=>d(!1),style:{zIndex:1e4},children:[(0,l.jsx)(a.A,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,l.jsx)(o.A,{dividers:!0,children:i}),(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>d(!1),children:"No"}),(0,l.jsx)(s.A,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{d(!1),u()},children:"Yes"})]})]})}},51637:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(9950),a=i(14857),o=i(48089),r=i(45180),s=i(82053),l=i(50704),c=i(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,n.forwardRef)(((e,t)=>{let{border:i=!0,boxShadow:n,children:u,content:h=!0,contentSX:m={},darkTitle:A,elevation:v,secondary:p,shadow:g,sx:x={},title:f,...y}=e;const b=(0,a.A)();return n="dark"===b.palette.mode?n||!0:n,(0,c.jsxs)(o.A,{elevation:v||0,ref:t,...y,sx:{border:i?"1px solid":"none",borderRadius:2,borderColor:"dark"===b.palette.mode?b.palette.divider:b.palette.grey.A800,boxShadow:!n||i&&"dark"!==b.palette.mode?"inherit":g||b.customShadows.z1,":hover":{boxShadow:n?g||b.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:b.typography.fontFamily,fontSize:"0.75rem"},...x},children:[!A&&f&&(0,c.jsx)(r.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:f,action:p}),A&&f&&(0,c.jsx)(r.A,{sx:d,title:(0,c.jsx)(s.A,{variant:"h3",children:f}),action:p}),h&&(0,c.jsx)(l.A,{sx:m,children:u}),!h&&u]})}))},70855:(e,t,i)=>{i.d(t,{G:()=>a});var n=i(33340);function a(e){const t=(0,n.nc)((e=>e.selectedBotId)),i=(0,n.nc)((i=>i.botsMap[e||t]));return[e||t,i]}},92728:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(9950),a=i(48205),o=i(44414);const r=n.forwardRef((function(e,t){return(0,o.jsx)(a.A,{direction:"up",ref:t,...e})}))},93383:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(9950),a=i(10226),o=i(46639),r=i(44414);const s=function(e){let{onClick:t,disabled:i,isLoading:s,children:l,...c}=e;const[d,u]=n.useState(s);return(0,r.jsxs)(a.A,{onClick:e=>{if(!t)return;const i=t(e);"function"===typeof(null===i||void 0===i?void 0:i.finally)&&(u(!0),i.finally((()=>u(!1))))},disabled:d||s||i,...c,children:[(d||s)&&(0,r.jsx)(o.A,{size:16,color:"primary",style:{marginRight:"10px"}}),l]})}}}]);