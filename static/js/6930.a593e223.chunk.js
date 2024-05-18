"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6930],{32829:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(25371),o=n(44414);function a(e){let{children:t,type:n}=e;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),o=n(14857),a=n(48089),c=n(45180),r=n(82053),s=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:h=!0,contentSX:g={},darkTitle:f,elevation:A,secondary:v,shadow:p,sx:x={},title:m,...b}=e;const _=(0,o.A)();return i="dark"===_.palette.mode?i||!0:i,(0,l.jsxs)(a.A,{elevation:A||0,ref:t,...b,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===_.palette.mode?_.palette.divider:_.palette.grey.A800,boxShadow:!i||n&&"dark"!==_.palette.mode?"inherit":p||_.customShadows.z1,":hover":{boxShadow:i?p||_.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:_.typography.fontFamily,fontSize:"0.75rem"},...x},children:[!f&&m&&(0,l.jsx)(c.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:m,action:v}),f&&m&&(0,l.jsx)(c.A,{sx:d,title:(0,l.jsx)(r.A,{variant:"h3",children:m}),action:v}),h&&(0,l.jsx)(s.A,{sx:g,children:u}),!h&&u]})}))},31408:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(59051),o=n.n(i);const a=function(e){let{value:t,dateOnly:n}=e;return o()(t).format(n?"DD-MMM-YYYY":"DD-MMM-YYYY HH:mm:ss")}},93383:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(9950),o=n(10226),a=n(46639),c=n(44414);const r=function(e){let{onClick:t,disabled:n,isLoading:r,children:s,...l}=e;const[d,u]=i.useState(r);return(0,c.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||r||n,...l,children:[(d||r)&&(0,c.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},36930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var i=n(9950),o=n(60899),a=n(82053),c=n(51637),r=n(32829),s=n(93383),l=n(58178),d=n(41507),u=n(16491),h=n(46639),g=n(1320),f=n(15769),A=n(69780),v=n(9213),p=n(21671),x=n(7251),m=n(34075),b=n(72595),_=n(6258),y=n(29635),S=n(69755),E=n(33340),P=n(31408),j=n(53065),w=n(8478);var I=n(44364),T=n(32026),C=n(44414);const z=function(e){let{defaultOrder:t,defaultOrderBy:n}=e;const[o,c]=(0,i.useState)(t),[r,s]=(0,i.useState)(n),[y]=(0,i.useState)([]),[S,P]=(0,i.useState)(10),[j,I]=(0,i.useState)(0),[T,z]=(0,i.useState)(!0),N=(0,E.nc)((e=>e.organizationsInvoiceList));if((0,i.useEffect)((()=>{N?z(!1):(async()=>{try{await(0,d.cw)()}catch(e){(0,l.i)(!0,"Not able to fetch Organizations Invoice. Try after sometime!","error")}finally{z(!1)}})()}),[N]),T)return(0,C.jsx)(u.A,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:(0,C.jsx)(h.A,{})});if(!N||0===N.length)return(0,C.jsx)(u.A,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:(0,C.jsx)(a.A,{variant:"h6",children:"No Data Available"})});const K=async e=>{try{const t=await async function(e){return await w.bE(e)}(e),{sentCount:n,totalCount:i}=t;(0,l.i)(!0,"".concat(n," invoices send out of ").concat(i," to the organizations"),"success")}catch(t){(0,l.i)(!0,"Not able to send the invoices send to  organizations. Try after sometime!","error")}};return(0,C.jsx)(u.A,{children:(0,C.jsx)(g.A,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,C.jsxs)(f.A,{"aria-labelledby":"organizationsInvoiceList",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,C.jsx)(A.A,{children:(0,C.jsx)(v.A,{children:D.map((e=>(0,C.jsxs)(p.A,{align:e.align||"left",padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&o,children:[!1===e.sortable&&e.label,!1!==e.sortable&&(0,C.jsxs)(x.A,{active:r===e.id,direction:r===e.id?o:"asc",onClick:()=>(e=>{c("asc"===o?"desc":"asc"),s(e)})(e.id),children:[e.label,r===e.id?(0,C.jsx)(u.A,{component:"span",sx:M,children:"desc"===o?"sorted descending":"sorted ascending"}):null]})]},e.id)))})}),(0,C.jsx)(m.A,{children:L(O(N),k(o,r)).slice(j*S,j*S+S).map(((e,t)=>{return(0,C.jsx)(R,{row:e,index:t,isSelected:(n=e.invoicePeriod,-1!==y.indexOf(n)),sendInvoice:K},t);var n}))}),(0,C.jsx)(b.A,{children:(0,C.jsx)(v.A,{children:(0,C.jsx)(p.A,{colSpan:D.length,children:(0,C.jsx)(_.A,{component:"div",count:N.length,page:j,rowsPerPage:S,onPageChange:(e,t)=>I(t),onRowsPerPageChange:e=>{P(parseInt(e.target.value,10)),I(0)}})})})})]})})})},D=[{id:"invoicePeriod",label:"Invoice Period"},{id:"totalInvoices",label:"Total Invoices"},{id:"invoiceDate",label:"Invoice Date"},{id:"totalAmount",label:"Total Amount"},{id:"emailPendingCount",label:"Pending Email"},{id:"downloadPath",label:"Download"},{id:"triggerEmailPath",label:"Send Email"}];function O(e){const t=[];return e.forEach((e=>{var n;t.push({invoicePeriod:(n=e).period,totalInvoices:n.totalInvoices,invoiceDate:n.invoiceDate,totalAmount:n.totalAmount,emailPendingCount:n.emailPendingCount,downloadPath:n.downloadPath,triggerEmailPath:n.triggerEmailPath})})),t}function R(e){let{row:t,index:n,isSelected:i,sendInvoice:o}=e;const a=(0,T.s8)(I.jn,"/"),c="enhanced-table-".concat(n);return(0,C.jsxs)(v.A,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,C.jsx)(p.A,{component:"th",id:c,scope:"row",align:"left",children:t.invoicePeriod}),(0,C.jsx)(p.A,{align:"center",children:t.totalInvoices}),(0,C.jsx)(p.A,{align:"left",children:(0,C.jsx)(P.A,{value:t.invoiceDate})}),(0,C.jsx)(p.A,{align:"center",children:t.totalAmount.toFixed(3)}),(0,C.jsx)(p.A,{align:"center",children:t.emailPendingCount}),(0,C.jsx)(p.A,{align:"center",children:(0,C.jsx)("a",{href:a+t.downloadPath,target:"_blank",rel:"noopener noreferrer",children:(0,C.jsx)(j.A,{title:"Download",children:(0,C.jsx)(y.A,{})})})}),(0,C.jsx)(p.A,{align:"center",children:(0,C.jsx)(j.A,{title:"Send email",children:(0,C.jsx)(S.A,{onClick:()=>o(t.triggerEmailPath)})})})]},"row-".concat(n))}function k(e,t){return"desc"===e?(e,n)=>N(e,n,t):(e,n)=>-N(e,n,t)}function N(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function L(e,t){const n=e.map(((e,t)=>[e,t]));return n.sort(((e,n)=>{const i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n.map((e=>e[0]))}const M={border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1};const K=function(){const[e,t]=(0,i.useState)(!1);return(0,C.jsxs)(o.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,C.jsx)(o.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,C.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,C.jsx)(o.Ay,{item:!0,xs:12,lg:6,md:12,children:(0,C.jsx)(a.A,{variant:"h5",children:"Organizations Invoice"})}),(0,C.jsx)(o.Ay,{item:!0,xs:12,lg:6,md:12,container:!0,justifyContent:"flex-end",children:(0,C.jsx)(r.A,{children:(0,C.jsx)(s.A,{isLoading:e,disabled:e,variant:"contained",color:"success",size:"large",onClick:async()=>{t(!0);const e=await(0,d.Zm)();if(e){t(!1);const{total:n}=e;(0,l.i)(!0,"All Organizations invoice generated. Total number of invoice generated "+n,"success")}else t(!1),(0,l.i)(!0,"Not able to generate invoices, Please try after some time","error")},children:"Generate Invoice"})})})]})}),(0,C.jsx)(o.Ay,{item:!0,xs:12,zeroMinWidth:!0,children:(0,C.jsx)(c.A,{sx:{mt:2},content:!1,children:(0,C.jsx)(z,{})})})]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>a,Ne:()=>u,TF:()=>s,bE:()=>c,yJ:()=>r});var i=n(32026),o=n(44364);async function a(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:o,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c="POST"===e||"PUT"===e||"DELETE"===e;t=u(t,c?void 0:n);const r=n instanceof FormData;if(r||(n=n&&"object"===typeof n&&c?JSON.stringify(n):void 0),i||(i={}),r||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const o=await fetch(t,{...a,headers:i,body:n,method:e}),c=await o.json();if(o.ok){const{data:e,...t}=c;return delete t.status,e&&!Object.keys(t).length?e:c}throw c.message?new Error(c.message):c}catch(l){var s;throw console.error("Error calling API: ",l),null!==(s=l.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,i.s8)(o.jn,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},41507:(e,t,n)=>{n.d(t,{Ds:()=>s,L_:()=>c,NC:()=>r,YS:()=>a,Zm:()=>l,cw:()=>u,qb:()=>d});var i=n(8478),o=n(33340);async function a(e,t){const n=await async function(){const e=o.nc.getState();let{organizationList:t,organizationId:n,organization:a}=e;if(!e.isSuperUser||Array.isArray(t))return;if(t=await i.bE("/superAdmin/get-all-organization"),t.length)if(n=n||sessionStorage.getItem("orgId"),n){if(!a){var c;a=null===(c=t)||void 0===c?void 0:c.filter((e=>e._id===n))[0]}}else{const e=t[0];n=e._id,a=e}return o.nc.setState({organizationList:t,organizationId:n,organization:a}),!0}(),{organizationId:a}=o.nc.getState();return e?e!==a&&o.nc.setState({organizationId:e}):e=a,!e||(n||await async function(e){const t=await i.bE("/organization/get-organization-by-id",{organizationId:e});o.nc.setState({organization:t})}(e),await s(e,t),!0)}async function c(e,t){t||(t=o.nc.getState().organizationId);const n=await i.yJ("/organization/".concat(t),e);o.nc.setState((e=>{const{organizationList:i,organizationId:o,organization:a}=e,c={};return o===t&&(c.organization={...a,...n}),i&&(c.organizationList=i.map((e=>e._id===t?{...e,...n}:e))),c}))}function r(e){if(!e||"object"!==typeof e)return;let{organization:t}=o.nc.getState();t&&(t={...t,...e},o.nc.setState({organization:t}))}async function s(e,t){var n;const a=await i.bE("/bot/get-all-bots",{organizationId:e}),c=t||(null===(n=a[0])||void 0===n?void 0:n._id),r=a.reduce(((e,t)=>(e[t._id]=t,e)),{});return o.nc.setState({organizationId:e,botsList:a,botsMap:r,selectedBotId:c}),c}async function l(){return await i.bE("/organization/invoice/generate")}function d(e){o.nc.setState({selectedBotId:e})}async function u(){const e=await i.Jt("/organization/invoice/list");o.nc.setState({organizationsInvoiceList:e})}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(o(t),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(o)}function c(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),a=t.substring(0,o),r=t.substring(o+1);i[a]=c(e[a],r,n)}else i[t]=n;return i}function r(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function l(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),a=t.substring(0,o),c=t.substring(o+1);i[a]=l(e[a],c,n)}else i[t]=n;return i}n.d(t,{G6:()=>c,OX:()=>s,Yq:()=>a,do:()=>l,qW:()=>r,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>r,Og:()=>a,jn:()=>i,pA:()=>c,pR:()=>o});const i="https://devbackend.livhousing.com",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com"}}]);