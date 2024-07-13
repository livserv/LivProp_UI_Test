"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[2393],{32829:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(25371),o=n(44414);function a(e){let{children:t,type:n}=e;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},92728:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(9950),o=n(48205),a=n(44414);const r=i.forwardRef((function(e,t){return(0,a.jsx)(o.A,{direction:"up",ref:t,...e})}))},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),o=n(14857),a=n(48089),r=n(45180),c=n(82053),s=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:m=!0,contentSX:v={},darkTitle:h,elevation:p,secondary:g,shadow:x,sx:A={},title:f,...y}=e;const j=(0,o.A)();return i="dark"===j.palette.mode?i||!0:i,(0,l.jsxs)(a.A,{elevation:p||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!i||n&&"dark"!==j.palette.mode?"inherit":x||j.customShadows.z1,":hover":{boxShadow:i?x||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...A},children:[!h&&f&&(0,l.jsx)(r.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:f,action:g}),h&&f&&(0,l.jsx)(r.A,{sx:d,title:(0,l.jsx)(c.A,{variant:"h3",children:f}),action:g}),m&&(0,l.jsx)(s.A,{sx:v,children:u}),!m&&u]})}))},26092:(e,t,n)=>{n.d(t,{A:()=>v});n(9950);var i=n(92728),o=n(63464),a=n(40033),r=n(28170),c=n(96319),s=n(59254),l=n(14857),d=n(25333),u=n(44414);const m=(0,s.Ay)(o.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function v(e){const t=(0,l.A)(),{breakpoints:n}=t,{openPopUpDialog:o,setPopUpDialog:s,onClose:v=()=>s(!1),title:h,width:p="70%"}=e;return(0,u.jsxs)(m,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:o,PaperProps:{sx:{width:{width:p},[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(a.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:h}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:v,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(c.A,{})}),(0,u.jsx)(r.A,{dividers:!0,children:e.children})]})}},31408:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(59051),o=n.n(i);const a=function(e){let{value:t,dateOnly:n}=e;return o()(t).format(n?"DD-MMM-YYYY":"DD-MMM-YYYY HH:mm:ss")}},3602:(e,t,n)=>{n.d(t,{Ay:()=>u});var i=n(9950),o=n(59051),a=n.n(o),r=n(32796),c=(n(52010),n(44414));const s=["This month","One month","Prev month","This week","Last 7 days","Prev week","Prev 2 weeks","Last 14 days"];function l(){return{"This month":[a()().startOf("month").toDate(),a()().endOf("month").toDate()],"One month":[a()().subtract(1,"months").toDate(),a()().toDate()],"Prev month":[a()().subtract(1,"months").startOf("month").toDate(),a()().subtract(1,"months").endOf("month").toDate()],"This week":[a()().startOf("week").toDate(),a()().endOf("week").toDate()],"Last 7 days":[a()().subtract(6,"days").toDate(),a()().toDate()],"Prev week":[a()().subtract(1,"weeks").startOf("week").toDate(),a()().subtract(1,"weeks").endOf("week").toDate()]}}function d(e){const t=i.useMemo(l,[]),{timePicker24Hour:n,displayFormat:o}=function(e){let t=d.defaultTimeFormat||" hh:mm tt";const n=-1===t.indexOf("tt");t=t.replace("tt","A").replace(".ss","").replace(":ss","");const i=e.dateFormat||"DD-MMM-YYYY".concat(e.showTime?t:"");return{timePicker24Hour:n,displayFormat:i}}(e),{value:u,range:p}=e,[g,x]=i.useState((()=>m(u,p,o))),A=i.useCallback((e=>x((t=>({...t,...e})))),[x]),f=i.useRef(),y=i.useRef({props:e,state:g,displayFormat:o});y.current.state=g,y.current.props=e,y.current.displayFormat=o;const j=i.useCallback((()=>A(m(u,p,y.current.displayFormat))),[u,p,A]);i.useEffect((()=>{j()}),[j]);const b=i.useCallback(((e,t)=>{var n,i;const{props:o,displayFormat:a}=y.current;y.current.manuallyEdited=!1;const{range:r,field:c,args:l}=o;let d=t.startDate,u=null===(n=d)||void 0===n?void 0:n.toDate(),m="";if(r){const{chosenLabel:e,startDate:n,endDate:i}=t;if(n&&i){u={fromDate:n.toDate(),toDate:i.toDate()};const t=s.indexOf(e);t>=0&&(u.quickDate=t),m="".concat(n.format(a)," - ").concat(i.format(a)),d=[u.fromDate,u.toDate]}}else null!==(i=d)&&void 0!==i&&i.isValid()&&(m=d.format(a));A({value:d,displayDate:m}),o.onChange(u,c,l)}),[A]),I=i.useCallback((e=>{const{manuallyEdited:t,props:n,state:i,displayFormat:o}=y.current;if(t){let{target:{value:t}}=e;if(t=t.trim(),!t&&!0===n.allowClear)return void b(null,{startDate:null});let r=a()(t,o);r.isValid()||(r=a()(t)),r.isValid()&&r.format(o)===t||(r=i.value),f.setStartDate(r),f.setEndDate(r),b(null,{fromDate:r})}else null!==e&&void 0!==e&&e.currentTarget&&n.onBlur&&n.onBlur(e)}),[b]),S=i.useCallback((e=>{const{props:t}=y.current,{keyCode:n}=e;13===n?I(e):t.onKeyDown&&(27===n&&(j(t),y.current.manuallyEdited=!1),t.onKeyDown(e))}),[I,j]),D=i.useCallback((()=>y.current.manuallyEdited=!0),[]),{disabled:C,style:w,className:P,autoFocus:E,fullWidth:k}=e,{displayDate:z}=g;return(0,c.jsx)("div",{className:"react-bootstrap-daterangepicker-container "+(P||""),children:(0,c.jsx)(r.A,{ref:f,style:w,className:P,disabled:C,initialSettings:h({timePicker24Hour:n,dateRange:t,props:e,state:g}),onApply:b,children:(0,c.jsx)("span",{children:(0,c.jsx)("input",{type:"text",className:"date-range-ctl",value:z,readOnly:p,placeholder:v(e),autoFocus:E,onChange:p?void 0:D,onBlur:p?void 0:I,onKeyDown:S,style:k?{width:"100%",height:"40px"}:null})})})})}const u=d;function m(e,t,n){const i={displayDate:""};return e?t?"object"===typeof e&&(e=e.quickDate>=0?function(e,t){if(0===e||e>0){const n=l(),i=s[e],o=i&&n[i]||[];return t?o.map((e=>a()(e))):o}}(e.quickDate,!0):"object"===typeof e&&e.fromDate?[a()(e.fromDate),a()(e.toDate)||null]:[],i.value=e,e[0]&&e[1]&&(i.displayDate="".concat(e[0].format(n)," - ").concat(e[1].format(n)))):(i.value=a()(e),i.displayDate=i.value.format(n)):t&&(i.value=[]),i}function v(e){const{range:t}=e;let{placeholder:n}=e;return!0===t&&(n=n||"Select a date range"),n||"Select a date"}function h(e){let{dateRange:t,timePicker24Hour:n,props:{showTime:i,range:o,minDate:a,maxDate:r,maxSpan:c=6},state:{value:s}}=e;const l={showDropdowns:!0,timePicker:i||!1,alwaysShowCalendars:!1,maxSpan:c,autoApply:!0,linkedCalendars:!1,autoUpdateInput:!1,minDate:a,maxDate:r};let d=null;return d=o?{...l,fromDate:s[0],toDate:s[1],ranges:t,singleDatePicker:!1,showCustomRangeLabel:!0}:{...l,singleDatePicker:!0,fromDate:s,toDate:s,timePicker24Hour:n},d}},93383:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(9950),o=n(10226),a=n(46639),r=n(44414);const c=function(e){let{onClick:t,disabled:n,isLoading:c,children:s,...l}=e;const[d,u]=i.useState(c);return(0,r.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||c||n,...l,children:[(d||c)&&(0,r.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},69420:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var i=n(9950),o=n(60899),a=n(82053),r=n(51637),c=n(32829),s=n(93383),l=n(58178),d=n(16491),u=n(46639),m=n(1320),v=n(15769),h=n(69780),p=n(9213),g=n(21671),x=n(7251),A=n(34075),f=n(72595),y=n(6258),j=n(29635),b=n(69755),I=n(41507),S=n(33340),D=n(31408),C=n(53065),w=n(8478);async function P(){try{const e=(await async function(){const e=w.Jt("/organization/invoice/last-invoice-number");return e}()).lastInvoiceNo,t=0!==e?e+1:"";return await w.bE("/organization/invoice/generate?invoiceNumber=".concat(t))}catch(e){throw console.error("Error generating invoice:",e),e}}var E=n(44364),k=n(32026),z=n(90587),_=n(44414);const T=function(e){let{defaultOrder:t,defaultOrderBy:n,updateInvoiceTable:o,setUpdateInvoiceTable:r}=e;const[c,s]=(0,i.useState)(t),[j,b]=(0,i.useState)(n),[D]=(0,i.useState)([]),[C,P]=(0,i.useState)(10),[E,k]=(0,i.useState)(0),[T,L]=(0,i.useState)(!0),[M,B]=(0,i.useState)(!1),F=(0,S.nc)((e=>e.organizationsInvoiceList));if((0,i.useEffect)((()=>{(async()=>{try{await(0,I.cw)()}catch(e){(0,l.i)(!0,"Not able to fetch Organizations Invoice. Try after sometime!","error")}finally{L(!1)}})()}),[o]),T)return(0,_.jsx)(d.A,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:(0,_.jsx)(u.A,{})});if(!F||0===F.length)return(0,_.jsx)(d.A,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:(0,_.jsx)(a.A,{variant:"h6",children:"No Data Available"})});const H=async e=>{try{B(!0);const t=await async function(e){return await w.bE(e)}(e);r(t);const{sentCount:n,totalCount:i}=t;(0,l.i)(!0,"".concat(n," invoices send out of ").concat(i," to the organizations"),"success"),B(!1)}catch(t){B(!1),(0,l.i)(!0,"Not able to send the invoices  to  organizations. Try after sometime!","error")}};return(0,_.jsx)(d.A,{children:(0,_.jsx)(m.A,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,_.jsxs)(v.A,{"aria-labelledby":"organizationsInvoiceList",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,_.jsx)(h.A,{children:(0,_.jsx)(p.A,{children:O.map((e=>(0,_.jsxs)(g.A,{align:e.align||"center",padding:e.disablePadding?"none":"normal",sortDirection:j===e.id&&c,children:[!1===e.sortable&&e.label,!1!==e.sortable&&(0,_.jsxs)(x.A,{active:j===e.id,direction:j===e.id?c:"asc",onClick:()=>(e=>{s("asc"===c?"desc":"asc"),b(e)})(e.id),children:[e.label,j===e.id?(0,_.jsx)(d.A,{component:"span",sx:R,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})]},e.id)))})}),(0,_.jsx)(A.A,{children:(0,z.q)(F,(0,z.h)(c,j)).slice(E*C,E*C+C).map(((e,t)=>{return(0,_.jsx)(N,{row:e,index:t,isSelected:(n=e.period,-1!==D.indexOf(n)),sendInvoice:H,isSendingEmail:M},t);var n}))}),(0,_.jsx)(f.A,{children:(0,_.jsx)(p.A,{children:(0,_.jsx)(g.A,{colSpan:O.length,children:(0,_.jsx)(y.A,{component:"div",count:F.length,page:E,rowsPerPage:C,onPageChange:(e,t)=>k(t),onRowsPerPageChange:e=>{P(parseInt(e.target.value,10)),k(0)}})})})})]})})})},O=[{id:"period",label:"Invoice Period",align:"left"},{id:"totalInvoices",label:"Total Invoices"},{id:"invoiceDate",label:"Invoice Date",align:"left"},{id:"totalAmount",label:"Total Amount"},{id:"emailPendingCount",label:"Pending Email"},{id:"downloadPath",label:"Download",sortable:!1},{id:"triggerEmailPath",label:"Send Email",sortable:!1}];function N(e){let{row:t,index:n,isSelected:i,sendInvoice:o,isSendingEmail:a}=e;const r=(0,k.s8)(E.jn,"/"),c="enhanced-table-".concat(n);return(0,_.jsxs)(p.A,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,_.jsx)(g.A,{component:"th",id:c,scope:"row",align:"left",children:t.period}),(0,_.jsx)(g.A,{align:"center",children:t.totalInvoices}),(0,_.jsx)(g.A,{align:"left",children:(0,_.jsx)(D.A,{value:t.invoiceDate})}),(0,_.jsx)(g.A,{align:"center",children:t.totalAmount.toFixed(3)}),(0,_.jsx)(g.A,{align:"center",children:t.emailPendingCount}),(0,_.jsx)(g.A,{align:"center",children:(0,_.jsx)("a",{href:r+t.downloadPath,target:"_blank",rel:"noopener noreferrer",children:(0,_.jsx)(C.A,{title:"Download",children:(0,_.jsx)(j.A,{})})})}),(0,_.jsx)(g.A,{align:"center",children:t.triggerEmailPath&&(0,_.jsx)(C.A,{title:"Send email",children:a?(0,_.jsx)(u.A,{size:16}):(0,_.jsx)(b.A,{onClick:()=>o(t.triggerEmailPath),sx:{cursor:"pointer"}})})})]},"row-".concat(n))}const R={border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1};var L=n(26092),M=n(2660),B=n(24516),F=n(25979),H=n(45735),U=n(83563),q=n(8145),V=n(2046),W=n(74745),Y=n(93038),K=n(10226),J=n(61467),X=n(29714),G=n(93230),$=n(3788),Q=n(47813);const Z=function(e){var t,n,i,a,r,c,s,l,d,u,m,v,h,p,g,x,A,f,y,j,b,I,S,D,C,w,P,E,k,z,T,O,N,R,L,F,H,U,q,V;let{invoice:Y,index:K,handleBlur:J,handleChange:X,errors:Z,touched:ee,remove:te}=e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:1,lg:1,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".itemNo"),children:"Sl. No"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".itemNo"),type:"text",value:Y.itemNo,name:"invoiceItems.".concat(K,".itemNo"),fullWidth:!0,disabled:!0})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:2,lg:2,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".desc"),children:"Description"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".desc"),type:"text",value:Y.desc,name:"invoiceItems.".concat(K,".desc"),autoComplete:"off",onBlur:J,onChange:X,fullWidth:!0,error:Boolean((null===(t=ee.invoiceItems)||void 0===t||null===(n=t[K])||void 0===n?void 0:n.desc)&&(null===(i=Z.invoiceItems)||void 0===i||null===(a=i[K])||void 0===a?void 0:a.desc))}),(null===(r=ee.invoiceItems)||void 0===r||null===(c=r[K])||void 0===c?void 0:c.desc)&&(null===(s=Z.invoiceItems)||void 0===s||null===(l=s[K])||void 0===l?void 0:l.desc)&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceItems.".concat(K,".desc"),children:Z.invoiceItems[K].desc})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:2,lg:2,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".uom"),children:"UMO"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".uom"),type:"text",value:Y.uom,name:"invoiceItems.".concat(K,".uom"),autoComplete:"off",onBlur:J,onChange:X,fullWidth:!0,error:Boolean((null===(d=ee.invoiceItems)||void 0===d||null===(u=d[K])||void 0===u?void 0:u.uom)&&(null===(m=Z.invoiceItems)||void 0===m||null===(v=m[K])||void 0===v?void 0:v.uom))}),(null===(h=ee.invoiceItems)||void 0===h||null===(p=h[K])||void 0===p?void 0:p.uom)&&(null===(g=Z.invoiceItems)||void 0===g||null===(x=g[K])||void 0===x?void 0:x.uom)&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceItems.".concat(K,".uom"),children:Z.invoiceItems[K].uom})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:2,lg:2,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".quantity"),children:"Quantity"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".quantity"),type:"number",value:Y.quantity,name:"invoiceItems.".concat(K,".quantity"),autoComplete:"off",onBlur:J,onChange:X,fullWidth:!0,error:Boolean((null===(A=ee.invoiceItems)||void 0===A||null===(f=A[K])||void 0===f?void 0:f.quantity)&&(null===(y=Z.invoiceItems)||void 0===y||null===(j=y[K])||void 0===j?void 0:j.quantity))}),(null===(b=ee.invoiceItems)||void 0===b||null===(I=b[K])||void 0===I?void 0:I.quantity)&&(null===(S=Z.invoiceItems)||void 0===S||null===(D=S[K])||void 0===D?void 0:D.quantity)&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceItems.".concat(K,".quantity"),children:Z.invoiceItems[K].quantity})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:2,lg:2,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".unitPrice"),children:"Unit Price"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".unitPrice"),type:"number",value:Y.unitPrice,name:"invoiceItems.".concat(K,".unitPrice"),autoComplete:"off",onBlur:J,onChange:X,fullWidth:!0,error:Boolean((null===(C=ee.invoiceItems)||void 0===C||null===(w=C[K])||void 0===w?void 0:w.unitPrice)&&(null===(P=Z.invoiceItems)||void 0===P||null===(E=P[K])||void 0===E?void 0:E.unitPrice))}),(null===(k=ee.invoiceItems)||void 0===k||null===(z=k[K])||void 0===z?void 0:z.unitPrice)&&(null===(T=Z.invoiceItems)||void 0===T||null===(O=T[K])||void 0===O?void 0:O.unitPrice)&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceItems.".concat(K,".unitPrice"),children:Z.invoiceItems[K].unitPrice})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:2,lg:2,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".total"),children:"Total"}),(0,_.jsx)(M.A,{id:"invoiceItems.".concat(K,".total"),type:"number",value:Y.total,name:"invoiceItems.".concat(K,".total"),autoComplete:"off",onBlur:J,onChange:X,fullWidth:!0,error:Boolean((null===(N=ee.invoiceItems)||void 0===N||null===(R=N[K])||void 0===R?void 0:R.total)&&(null===(L=Z.invoiceItems)||void 0===L||null===(F=L[K])||void 0===F?void 0:F.total))}),(null===(H=ee.invoiceItems)||void 0===H||null===(U=H[K])||void 0===U?void 0:U.total)&&(null===(q=Z.invoiceItems)||void 0===q||null===(V=q[K])||void 0===V?void 0:V.total)&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceItems.".concat(K,".total"),children:Z.invoiceItems[K].total})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:1,lg:1,children:(0,_.jsxs)(G.A,{spacing:1,children:[(0,_.jsx)($.A,{htmlFor:"invoiceItems.".concat(K,".delete"),children:"Delete"}),(0,_.jsx)(Q.A,{sx:{cursor:"pointer",color:"#ee2a2a"},onClick:()=>te(K)})]})})]}),(0,_.jsx)(W.A,{sx:{mt:2,mb:2}})]})};var ee=n(60767),te=n(3602);const ne=function(e){let{onDone:t,setUpdateInvoiceTable:n}=e;const[a,r]=(0,i.useState)(null),[u,m]=(0,i.useState)(!1),v=(0,S.nc)((e=>e.organizationList)),[h,p]=(0,i.useState)(null),[g,x]=(0,i.useState)(null);return(0,i.useEffect)((()=>{if(h&&g){r({organizationId:h,invoiceDate:g,details:{items:[{itemNo:1,desc:"",uom:"",quantity:0,unitPrice:0,total:0}]}})}}),[h,g]),(0,_.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,_.jsx)(o.Ay,{item:!0,xs:9,lg:9,md:9,children:u?(0,_.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,_.jsx)(o.Ay,{item:!0,xs:6,lg:6,md:6,children:(0,_.jsx)(F.A,{sx:{width:{xs:"100%",md:224}},children:(0,_.jsx)(H.A,{options:v,onChange:(e,t)=>{p(t?t._id:null),r(null)},renderOption:(e,t)=>(0,i.createElement)("li",{...e,key:t._id},(0,_.jsx)(U.A,{children:t.organizationName||"(".concat(t._id,")")})),getOptionLabel:e=>e.organizationName||"(".concat(e._id,")"),sx:{width:250},renderInput:e=>(0,_.jsx)(q.A,{size:"small",startAdornment:(0,_.jsx)(V.A,{position:"start",sx:{mr:-.5},children:(0,_.jsx)(ee.A,{})}),placeholder:"Select Organization",...e})})})}),(0,_.jsx)(o.Ay,{item:!0,xs:6,lg:6,md:6,children:(0,_.jsx)(te.Ay,{label:"Invoice Date",value:null,onChange:e=>x(e),renderInput:e=>(0,_.jsx)(q.A,{...e,size:"large"}),fullWidth:!0,autoComplete:"off"})})]}):(0,_.jsx)(J.l1,{initialValues:{invoiceNo:""},onSubmit:async(e,t)=>{let{setErrors:n,setStatus:i,setSubmitting:o}=t;try{o(!0);const t=await async function(e){return w.Jt("/organization/invoice/get/".concat(e))}(e.invoiceNo);r(t),i({success:!0})}catch(a){i({success:!1}),n({submit:a.message}),o(!1),(0,l.i)(!0,a.message,"error")}},validationSchema:X.Ik().shape({invoiceNo:X.Yj().max(25).required("Invoice Number is required")}),children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:o,isSubmitting:a,touched:r,values:l}=e;return(0,_.jsxs)("form",{onSubmit:o,children:[(0,_.jsxs)(d.A,{display:"flex",alignItems:"center",children:[(0,_.jsx)(M.A,{id:"invoiceNo",type:"text",value:l.invoiceNo,placeholder:"Invoice Number",name:"invoiceNo",autoComplete:"off",onBlur:n,onChange:i,error:Boolean(r.invoiceNo&&t.invoiceNo),sx:{marginRight:2}}),(0,_.jsx)(c.A,{children:(0,_.jsx)(s.A,{isLoading:a,disabled:a,color:"primary",size:"large",type:"submit",variant:"contained",id:"invoiceSearchBtn",children:"Search"})})]}),r.invoiceNo&&t.invoiceNo&&(0,_.jsx)(B.A,{error:!0,id:"helper-text-invoiceNo",children:t.invoiceNo})]})}})}),(0,_.jsx)(o.Ay,{item:!0,xs:3,lg:3,md:3,container:!0,justifyContent:"flex-end",children:(0,_.jsx)(c.A,{children:(0,_.jsx)(s.A,{isLoading:u,disabled:u,color:"primary",size:"large",type:"button",variant:"contained",id:"newInvoiceBtn",onClick:()=>{m(!0),r(null)},children:"New Invoice"})})}),a&&(0,_.jsxs)(o.Ay,{item:!0,xs:12,lg:12,md:12,children:[(0,_.jsx)(W.A,{sx:{mt:2,mb:2}}),(0,_.jsx)(ie,{invoice:a,onDone:t,createInvoice:u,setUpdateInvoiceTable:n})]})]})};function ie(e){let{invoice:t,onDone:n,createInvoice:i,setUpdateInvoiceTable:a}=e;const r={_id:(null===t||void 0===t?void 0:t._id)||"",invoiceDate:(null===t||void 0===t?void 0:t.invoiceDate)||"",organizationId:(null===t||void 0===t?void 0:t.organizationId)||"",period:(null===t||void 0===t?void 0:t.period)||"",invoiceItems:(null===t||void 0===t?void 0:t.details.items)||[],sendEmail:!1},d=X.Ik().shape({invoiceItems:X.YO().of(X.Ik().shape({desc:X.Yj().required("Description is required"),total:X.ai().required("Total is required").min(1,"Total value must be greater than 0"),quantity:X.ai().min(1,"Quantity value must be greater than 0"),unitPrice:X.ai().min(1,"Unit Price value must be greater than 0")}))});return(0,_.jsx)(J.l1,{initialValues:r,onSubmit:async(e,t)=>{let{setErrors:i,setStatus:o,setSubmitting:r}=t;try{r(!0);const t=await async function(e){return w.bE("/organization/invoice/create-or-update",e)}(e);a(t),n(),o({success:!0})}catch(c){o({success:!1}),i({submit:c.message}),r(!1),(0,l.i)(!0,c.message,"error")}},validationSchema:d,children:e=>{let{errors:t,handleBlur:n,handleChange:a,handleSubmit:r,isSubmitting:l,touched:d,values:u,setFieldValue:m}=e;return(0,_.jsx)("form",{onSubmit:e=>{r(e)},children:(0,_.jsx)(J.ED,{name:"invoiceItems",children:e=>{let{push:r,remove:v}=e;return(0,_.jsxs)(_.Fragment,{children:[u.invoiceItems.map(((e,i)=>(0,_.jsx)(Z,{invoice:e,index:i,handleBlur:n,handleChange:a,errors:t,touched:d,remove:e=>{v(e);const t=u.invoiceItems.filter(((t,n)=>n!==e)).map(((e,t)=>({...e,itemNo:t+1})));m("invoiceItems",t)}},i))),(0,_.jsxs)(o.Ay,{container:!0,justifyContent:"flex-end",children:[(0,_.jsxs)(o.Ay,{item:!0,children:[(0,_.jsx)(Y.A,{name:"sendEmail",onChange:a,inputProps:{"aria-label":"controlled"}}),"send email immediately"]}),(0,_.jsx)(o.Ay,{item:!0,sx:{marginLeft:2},children:(0,_.jsx)(c.A,{children:(0,_.jsx)(s.A,{isLoading:l,disabled:l,color:"primary",size:"large",type:"submit",variant:"contained",id:"invoiceSearchBtn",children:i?"Create Invoice":"Update Invoice"})})}),(0,_.jsx)(o.Ay,{item:!0,children:(0,_.jsx)(K.A,{sx:{marginLeft:2},variant:"contained",size:"large",onClick:()=>{const e=u.invoiceItems.length+1;r({itemNo:e,uom:"",quantity:0,unitPrice:0,desc:"",total:0})},children:"Add Item"})})]})]})}})})}})}const oe=function(){const[e,t]=(0,i.useState)(!1),[n,d]=(0,i.useState)(!1),[u,m]=i.useState(!1),v=()=>m(!1);return(0,_.jsxs)(o.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,_.jsx)(o.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,_.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,_.jsx)(o.Ay,{item:!0,xs:12,lg:6,md:12,children:(0,_.jsx)(a.A,{variant:"h5",children:"Organizations Invoice"})}),(0,_.jsxs)(o.Ay,{item:!0,xs:12,lg:6,md:12,container:!0,justifyContent:"flex-end",children:[(0,_.jsx)(c.A,{children:(0,_.jsx)(s.A,{isLoading:u,disabled:u,variant:"contained",color:"success",size:"large",onClick:async()=>{m(!0)},sx:{marginRight:2},children:"Create or Edit Invoice"})}),(0,_.jsx)(c.A,{children:(0,_.jsx)(s.A,{isLoading:n,disabled:n,variant:"contained",color:"success",size:"large",onClick:async()=>{d(!0);try{const e=await P();if(e){d(!1);const{generated:n}=e;t(e),(0,l.i)(!0,"All Organizations invoice generated. Total number of invoice generated "+n,"success")}else d(!1),(0,l.i)(!0,"Not able to generate invoices, Please try after some time","error")}catch(e){d(!1),(0,l.i)(!0,"Not able to generate invoices, Please try after some time","error")}},children:"Generate Invoice"})})]}),(0,_.jsx)(L.A,{openPopUpDialog:u,onClose:v,title:"Edit or Create invoice",children:(0,_.jsx)(ne,{onDone:v,setUpdateInvoiceTable:t})})]})}),(0,_.jsx)(o.Ay,{item:!0,xs:12,zeroMinWidth:!0,children:(0,_.jsx)(r.A,{sx:{mt:2},content:!1,children:(0,_.jsx)(T,{updateInvoiceTable:e,setUpdateInvoiceTable:t})})})]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>a,TF:()=>s,bE:()=>r,yJ:()=>c});var i=n(32026),o=n(44364);async function a(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:o,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}if(e.startsWith("https://"))return e;return"".concat(d).concat(e)}(t,r?void 0:n);const c=n instanceof FormData;if(c||(n=n&&"object"===typeof n&&r?JSON.stringify(n):void 0),i||(i={}),c||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const o=await fetch(t,{...a,headers:i,body:n,method:e}),r=await o.json();if(o.ok){const{data:e,...t}=r;return delete t.status,e&&!Object.keys(t).length?e:r}throw r.message?new Error(r.message):r}catch(l){var s;throw console.error("Error calling API: ",l),null!==(s=l.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,i.s8)(o.jn,"/")},41507:(e,t,n)=>{n.d(t,{Ds:()=>s,L_:()=>r,NC:()=>c,YS:()=>a,cw:()=>d,qb:()=>l});var i=n(8478),o=n(33340);async function a(e,t){const n=await async function(){const e=o.nc.getState();let{organizationList:t,organizationId:n,organization:a}=e;if(!e.isSuperUser||Array.isArray(t))return;if(t=await i.bE("/organization/list"),t.length)if(n=n||sessionStorage.getItem("orgId"),n){if(!a){var r;a=null===(r=t)||void 0===r?void 0:r.filter((e=>e._id===n))[0]}}else{const e=t[0];n=e._id,a=e}return o.nc.setState({organizationList:t,organizationId:n,organization:a}),!0}(),{organizationId:a}=o.nc.getState();return e?e!==a&&o.nc.setState({organizationId:e}):e=a,!e||(n||await async function(e){const t=await i.bE("/organization/get-organization-by-id",{organizationId:e});o.nc.setState({organization:t})}(e),await s(e,t),!0)}async function r(e,t){t||(t=o.nc.getState().organizationId);const n=await i.yJ("/organization/".concat(t),e);o.nc.setState((e=>{const{organizationList:i,organizationId:o,organization:a}=e,r={};return o===t&&(r.organization={...a,...n}),i&&(r.organizationList=i.map((e=>e._id===t?{...e,...n}:e))),r}))}function c(e){if(!e||"object"!==typeof e)return;let{organization:t}=o.nc.getState();t&&(t={...t,...e},o.nc.setState({organization:t}))}async function s(e,t){var n;const a=await i.Jt("/bot/".concat(e,"/list")),r=t||(null===(n=a[0])||void 0===n?void 0:n._id),c=a.reduce(((e,t)=>(e[t._id]=t,e)),{});return o.nc.setState({organizationId:e,botsList:a,botsMap:c,selectedBotId:r}),r}function l(e){o.nc.setState({selectedBotId:e})}async function d(){const e=await i.Jt("/organization/invoice/list");o.nc.setState({organizationsInvoiceList:e})}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(o(t),"+$")),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(o)}function r(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),a=t.substring(0,o),c=t.substring(o+1);i[a]=r(e[a],c,n)}else i[t]=n;return i}function c(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function l(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),a=t.substring(0,o),r=t.substring(o+1);i[a]=l(e[a],r,n)}else i[t]=n;return i}n.d(t,{G6:()=>r,OX:()=>s,Yq:()=>a,do:()=>l,qW:()=>c,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>c,Og:()=>a,jn:()=>i,pA:()=>r,pR:()=>o});const i="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},90587:(e,t,n)=>{function i(e,t){return"desc"===e?(e,n)=>o(e,n,t):(e,n)=>-o(e,n,t)}function o(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function a(e,t){const n=e.map(((e,t)=>[e,t]));return n.sort(((e,n)=>{const i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n.map((e=>e[0]))}n.d(t,{h:()=>i,q:()=>a})},47813:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),a=n(44414);t.A=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever")},29635:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),a=n(44414);t.A=(0,o.default)((0,a.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},69755:(e,t,n)=>{var i=n(24994);t.A=void 0;var o=i(n(79526)),a=n(44414);t.A=(0,o.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email")},93038:(e,t,n)=>{n.d(t,{A:()=>P});var i=n(98587),o=n(58168),a=n(9950),r=n(72004),c=n(74061),s=n(99269),l=n(46282),d=n(23235),u=n(44414);const m=(0,d.A)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var p=n(61676),g=n(18463),x=n(59254),A=n(19608),f=n(80863),y=n(68483);function j(e){return(0,y.Ay)("MuiCheckbox",e)}const b=(0,f.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],S=(0,x.Ay)(l.A,{shouldForwardProp:e=>(0,A.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t["size".concat((0,p.A)(n.size))],"default"!==n.color&&t["color".concat((0,p.A)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.A)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(b.checked,", &.").concat(b.indeterminate)]:{color:(t.vars||t).palette[n.color].main},["&.".concat(b.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),D=(0,u.jsx)(v,{}),C=(0,u.jsx)(m,{}),w=(0,u.jsx)(h,{}),P=a.forwardRef((function(e,t){var n,s;const l=(0,g.b)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=D,color:m="primary",icon:v=C,indeterminate:h=!1,indeterminateIcon:x=w,inputProps:A,size:f="medium",className:y}=l,b=(0,i.A)(l,I),P=h?x:v,E=h?x:d,k=(0,o.A)({},l,{color:m,indeterminate:h,size:f}),z=(e=>{const{classes:t,indeterminate:n,color:i,size:a}=e,r={root:["root",n&&"indeterminate","color".concat((0,p.A)(i)),"size".concat((0,p.A)(a))]},s=(0,c.A)(r,j,t);return(0,o.A)({},t,s)})(k);return(0,u.jsx)(S,(0,o.A)({type:"checkbox",inputProps:(0,o.A)({"data-indeterminate":h},A),icon:a.cloneElement(P,{fontSize:null!=(n=P.props.fontSize)?n:f}),checkedIcon:a.cloneElement(E,{fontSize:null!=(s=E.props.fontSize)?s:f}),ownerState:k,ref:t,className:(0,r.A)(z.root,y)},b,{classes:z}))}))}}]);