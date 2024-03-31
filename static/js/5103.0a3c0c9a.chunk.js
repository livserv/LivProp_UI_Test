"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[5103],{51637:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(9950),r=a(14857),o=a(48089),i=a(45180),s=a(82053),l=a(50704),c=a(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,n.forwardRef)(((e,t)=>{let{border:a=!0,boxShadow:n,children:u,content:h=!0,contentSX:p={},darkTitle:x,elevation:m,secondary:g,shadow:f,sx:v={},title:y,...A}=e;const j=(0,r.A)();return n="dark"===j.palette.mode?n||!0:n,(0,c.jsxs)(o.A,{elevation:m||0,ref:t,...A,sx:{border:a?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!n||a&&"dark"!==j.palette.mode?"inherit":f||j.customShadows.z1,":hover":{boxShadow:n?f||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...v},children:[!x&&y&&(0,c.jsx)(i.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:y,action:g}),x&&y&&(0,c.jsx)(i.A,{sx:d,title:(0,c.jsx)(s.A,{variant:"h3",children:y}),action:g}),h&&(0,c.jsx)(l.A,{sx:p,children:u}),!h&&u]})}))},31408:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(59051),r=a.n(n);const o=function(e){let{value:t,dateOnly:a}=e;return r()(t).format(a?"DD-MMM-YYYY":"DD-MMM-YYYY HH:mm:ss")}},68338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var n=a(9950),r=a(59051),o=a.n(r),i=a(60899),s=a(82053),l=a(32796),c=(a(52010),a(44414));const d=["This month","One month","Prev month","This week","Last 7 days","Prev week","Prev 2 weeks","Last 14 days"];function u(){return{"This month":[o()().startOf("month").toDate(),o()().endOf("month").toDate()],"One month":[o()().subtract(1,"months").toDate(),o()().toDate()],"Prev month":[o()().subtract(1,"months").startOf("month").toDate(),o()().subtract(1,"months").endOf("month").toDate()],"This week":[o()().startOf("week").toDate(),o()().endOf("week").toDate()],"Last 7 days":[o()().subtract(6,"days").toDate(),o()().toDate()],"Prev week":[o()().subtract(1,"weeks").startOf("week").toDate(),o()().subtract(1,"weeks").endOf("week").toDate()]}}function h(e){const t=n.useMemo(u,[]),{timePicker24Hour:a,displayFormat:r}=function(e){let t=h.defaultTimeFormat||" hh:mm tt";const a=-1===t.indexOf("tt");t=t.replace("tt","A").replace(".ss","").replace(":ss","");const n=e.dateFormat||"DD-MMM-YYYY".concat(e.showTime?t:"");return{timePicker24Hour:a,displayFormat:n}}(e),{value:i,range:s}=e,[p,f]=n.useState((()=>x(i,s,r))),v=n.useCallback((e=>f((t=>({...t,...e})))),[f]),y=n.useRef(),A=n.useRef({props:e,state:p,displayFormat:r});A.current.state=p,A.current.props=e,A.current.displayFormat=r;const j=n.useCallback((()=>v(x(i,s,A.current.displayFormat))),[i,s,v]);n.useEffect((()=>{j()}),[j]);const b=n.useCallback(((e,t)=>{var a,n;const{props:r,displayFormat:o}=A.current;A.current.manuallyEdited=!1;const{range:i,field:s,args:l}=r;let c=t.startDate,u=null===(a=c)||void 0===a?void 0:a.toDate(),h="";if(i){const{chosenLabel:e,startDate:a,endDate:n}=t;if(a&&n){u={fromDate:a.toDate(),toDate:n.toDate()};const t=d.indexOf(e);t>=0&&(u.quickDate=t),h="".concat(a.format(o)," - ").concat(n.format(o)),c=[u.fromDate,u.toDate]}}else null!==(n=c)&&void 0!==n&&n.isValid()&&(h=c.format(o));v({value:c,displayDate:h}),r.onChange(u,s,l)}),[v]),D=n.useCallback((e=>{const{manuallyEdited:t,props:a,state:n,displayFormat:r}=A.current;if(t){let{target:{value:t}}=e;if(t=t.trim(),!t&&!0===a.allowClear)return void b(null,{startDate:null});let i=o()(t,r);i.isValid()||(i=o()(t)),i.isValid()&&i.format(r)===t||(i=n.value),y.setStartDate(i),y.setEndDate(i),b(null,{fromDate:i})}else null!==e&&void 0!==e&&e.currentTarget&&a.onBlur&&a.onBlur(e)}),[b]),S=n.useCallback((e=>{const{props:t}=A.current,{keyCode:a}=e;13===a?D(e):t.onKeyDown&&(27===a&&(j(t),A.current.manuallyEdited=!1),t.onKeyDown(e))}),[D,j]),w=n.useCallback((()=>A.current.manuallyEdited=!0),[]),{disabled:C,style:P,className:k,autoFocus:_}=e,{displayDate:E}=p;return(0,c.jsx)("div",{className:"react-bootstrap-daterangepicker-container "+(k||""),children:(0,c.jsx)(l.A,{ref:y,style:P,className:k,disabled:C,initialSettings:g({timePicker24Hour:a,dateRange:t,props:e,state:p}),onApply:b,children:(0,c.jsx)("span",{children:(0,c.jsx)("input",{type:"text",className:"date-range-ctl",value:E,readOnly:s,placeholder:m(e),autoFocus:_,onChange:s?void 0:w,onBlur:s?void 0:D,onKeyDown:S})})})})}const p=h;function x(e,t,a){const n={displayDate:""};return e?t?"object"===typeof e&&(e=e.quickDate>=0?function(e,t){if(0===e||e>0){const a=u(),n=d[e],r=n&&a[n]||[];return t?r.map((e=>o()(e))):r}}(e.quickDate,!0):"object"===typeof e&&e.fromDate?[o()(e.fromDate),o()(e.toDate)||null]:[],n.value=e,e[0]&&e[1]&&(n.displayDate="".concat(e[0].format(a)," - ").concat(e[1].format(a)))):(n.value=o()(e),n.displayDate=n.value.format(a)):t&&(n.value=[]),n}function m(e){const{range:t}=e;let{placeholder:a}=e;return!0===t&&(a=a||"Select a date range"),a||"Select a date"}function g(e){let{dateRange:t,timePicker24Hour:a,props:{showTime:n,range:r,minDate:o,maxDate:i,maxSpan:s=6},state:{value:l}}=e;const c={showDropdowns:!0,timePicker:n||!1,alwaysShowCalendars:!1,maxSpan:s,autoApply:!0,linkedCalendars:!1,autoUpdateInput:!1,minDate:o,maxDate:i};let d=null;return d=r?{...c,fromDate:l[0],toDate:l[1],ranges:t,singleDatePicker:!1,showCustomRangeLabel:!0}:{...c,singleDatePicker:!0,fromDate:l,toDate:l,timePicker24Hour:a},d}var f=a(93230),v=a(25277),y=a(16491),A=a(51637),j=a(40271),b=a(18182);const D=function(e){let{title:t,count:a,percentage:n,extra:r,period:o="month",color:l=(r<0?"warning":"success")}=e;const d=r<0;return r=Math.abs(r||0),(0,c.jsxs)(A.A,{contentSX:{p:2.25},children:[(0,c.jsxs)(f.A,{spacing:.5,children:[(0,c.jsx)(s.A,{variant:"h6",color:"textSecondary",children:t}),(0,c.jsxs)(i.Ay,{container:!0,alignItems:"center",children:[(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsx)(s.A,{variant:"h4",color:"inherit",children:a})}),!!n&&(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsx)(v.A,{variant:"combined",color:l,icon:(0,c.jsxs)(c.Fragment,{children:[!d&&(0,c.jsx)(j.A,{style:{fontSize:"0.75rem",color:"inherit"}}),d&&(0,c.jsx)(b.A,{style:{fontSize:"0.75rem",color:"inherit"}})]}),label:"".concat(n,"%"),sx:{ml:1.25,pl:1},size:"small"})})]})]}),d&&(0,c.jsx)(y.A,{sx:{pt:2.25},children:(0,c.jsxs)(s.A,{variant:"caption",color:"textSecondary",children:["You're down by "," ",(0,c.jsx)(s.A,{component:"span",variant:"caption",sx:{color:"".concat(l||"primary",".main")},children:r})," ","this ",o]})}),!d&&(0,c.jsx)(y.A,{sx:{pt:2.25},children:(0,c.jsxs)(s.A,{variant:"caption",color:"textSecondary",children:["You made an extra"," ",(0,c.jsx)(s.A,{component:"span",variant:"caption",sx:{color:"".concat(l||"primary",".main")},children:r})," ","this ",o]})})]})};var S=a(33340);const w=function(){const e=(0,S.qi)((e=>e.overview)),{current:t={},difference:a={},diffPercentage:n={}}=e||{};return(0,c.jsxs)(c.Fragment,{children:[t.totalVisitors>0&&(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"Total Visitors",count:t.totalVisitors,percentage:n.totalVisitors,extra:a.totalVisitors})}),(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"Interactive Visitors",count:t.interactiveVisitors,percentage:n.interactiveVisitors,extra:a.interactiveVisitors})}),(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"Presales",count:t.preSale,percentage:n.preSale,extra:a.preSale})}),(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"General",count:t.general,percentage:n.general,extra:a.general})}),!t.revisit&&(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"Others",count:t.others,percentage:n.others,extra:a.others})}),!!t.revisit&&(0,c.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,c.jsx)(D,{title:"Revisit Count",count:t.revisit,percentage:n.revisit,extra:a.revisit})}),(0,c.jsx)(i.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})};var C=a(8478);async function P(){const{organizationId:e,selectedBotId:t}=S.nc.getState(),a=S.qi.getState(),{organizationId:n,botId:r}=a;let{fromDate:i,toDate:s}=a;i=o()(i).startOf("day").toDate(),s=o()(s).endOf("day").toDate();e===n&&t===r||S.qi.setState((0,S.Vs)(e,t),!0);const l=await C.Jt("/analytics/".concat(e,"/").concat(t,"/dashboard/overview"),{fromDate:i,toDate:s}),c=function(e,t){e=o()(e),t=o()(t);const a=t.diff(e,"days"),n=e.clone().subtract(1,"days");return{start:n.clone().subtract(a,"days").startOf("day").toDate(),end:n.endOf("day").toDate()}}(i,s);i=c.start,s=c.end;const d=await C.Jt("/analytics/".concat(e,"/").concat(t,"/dashboard/overview"),{fromDate:i,toDate:s}),u={interactiveVisitors:(l.interactiveVisitors||0)-(d.interactiveVisitors||0),preSale:(l.preSale||0)-(d.preSale||0),general:(l.general||0)-(d.general||0),others:(l.others||0)-(d.others||0),revisit:(l.revisit||0)-(d.revisit||0)},h={current:l,previous:d,difference:u,diffPercentage:{interactiveVisitors:E(d.interactiveVisitors,u.interactiveVisitors),preSale:E(d.preSale,u.preSale),general:E(d.general,u.general),others:E(d.others,u.others),revisit:E(d.revisit,u.revisit)}};S.qi.setState({overview:h})}async function k(e){const{organizationId:t,selectedBotId:a}=S.nc.getState(),n=S.qi.getState();let{visitorProps:r}=n;r={page:1,count:10,...r,...e},S.qi.setState({visitorProps:r,visitorList:null,visitorsListTotal:0});const{total:o,visitorList:i}=await C.Jt("/analytics/".concat(t,"/").concat(a,"/dashboard/visitors-list"),r);S.qi.setState({visitorsListTotal:o,visitorList:i})}function _(e){let{fromDate:t,toDate:a}=e;return S.qi.setState({fromDate:o()(t).startOf("day").toDate(),toDate:o()(a).endOf("day").toDate()}),P()}function E(e,t){return t&&e?parseFloat((100*t/e).toFixed(2)):0}var T=a(10226);const O=function(e){let{showToday:t=!1,value:a=(t?"day":"week"),onChange:r}=e;const[s,l]=n.useState(a),d=n.useRef({onChange:r,slot:s}),u=n.useCallback((e=>{l(e);const{onChange:t}=d.current;if(t){t({fromDate:o()().add(-1,e).startOf("day").toDate(),toDate:o()().endOf("day").toDate()})}}),[]);return d.current.handleChange=u,n.useEffect((()=>{d.current.handleChange(d.current.slot)}),[]),(0,c.jsx)(i.Ay,{item:!0,style:{paddingTop:"14px"},children:(0,c.jsxs)(f.A,{direction:"row",alignItems:"center",spacing:0,children:[(0,c.jsx)(T.A,{size:"small",onClick:()=>u("month"),color:"month"===s?"primary":"secondary",variant:"month"===s?"outlined":"text",children:"Month"}),(0,c.jsx)(T.A,{size:"small",onClick:()=>u("week"),color:"week"===s?"primary":"secondary",variant:"week"===s?"outlined":"text",children:"Week"}),t&&(0,c.jsx)(T.A,{size:"small",onClick:()=>u("day"),color:"day"===s?"primary":"secondary",variant:"day"===s?"outlined":"text",children:"Today"})]})})};var I=a(69780),R=a(9213),V=a(21671),N=a(7251),L=a(72595),M=a(6258),F=a(1320),B=a(15769),q=a(34075),K=a(71295),H=a(14857);const Y=e=>{let{color:t,size:a}=e;const n=(0,H.A)();let r;switch(t){case"secondary":r=n.palette.secondary.main;break;case"error":r=n.palette.error.main;break;case"warning":r=n.palette.warning.main;break;case"info":r=n.palette.info.main;break;case"success":r=n.palette.success.main;break;default:r=n.palette.primary.main}return(0,c.jsx)(y.A,{sx:{width:a||8,height:a||8,borderRadius:"50%",bgcolor:r}})};var U=a(31408);const z=[{id:"name",label:"Name"},{id:"email",disablePadding:!0,label:"Email Id"},{id:"phoneNumber",label:"Phone Number",sortable:!1},{id:"country",label:"Country"},{id:"city",label:"City"},{id:"visitTime",label:"Visit Time"},{id:"category",label:"Category"},{id:"transcriptUrl",align:"right",label:"Transcript",sortable:!1}];function W(e){let{order:t,orderBy:a}=e;return(0,c.jsx)(I.A,{children:(0,c.jsx)(R.A,{children:z.map((e=>(0,c.jsxs)(V.A,{align:e.align||"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&("desc"===t?"asc":"desc"),children:[!1===e.sortable&&e.label,!1!==e.sortable&&(0,c.jsxs)(N.A,{active:a===e.id,direction:a===e.id?"desc"===t?"asc":"desc":"asc",onClick:()=>k({orderBy:e.id,order:a===e.id?"desc"===t?"asc":"desc":"asc"}),children:[e.label,a===e.id?(0,c.jsx)(y.A,{component:"span",sx:K.A,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})]},e.id)))})})}function G(e){let{page:t=0,rowsCount:a,rowsPerPage:n=10}=e;return(0,c.jsx)(L.A,{children:(0,c.jsx)(R.A,{children:(0,c.jsx)(V.A,{colSpan:z.length,children:(0,c.jsx)(M.A,{component:"div",count:a,page:t,rowsPerPage:n,onPageChange:(e,t)=>k({page:t+1}),onRowsPerPageChange:(e,t)=>{let{props:{value:a}}=t;return k({count:a})}})})})})}const J=e=>{let t,{value:a}=e;switch(a){case"Pre-Sale":t="success";break;case"General":t="primary";break;case"Others":t="warning";break;default:t="error"}return(0,c.jsxs)(f.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,c.jsx)(Y,{color:t}),(0,c.jsx)(s.A,{children:a})]})};function X(e){let{data:t,rowsCount:a,page:r,rowsPerPage:o,order:i,orderBy:s}=e;const[l]=(0,n.useState)([]);return(0,c.jsx)(y.A,{children:(0,c.jsx)(F.A,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,c.jsxs)(B.A,{"aria-labelledby":"VisitorList",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,c.jsx)(W,{order:i,orderBy:s}),(0,c.jsxs)(q.A,{children:[!(null!==t&&void 0!==t&&t.length)&&(0,c.jsx)(R.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,c.jsx)(V.A,{colSpan:7,children:"No visitors exists for the selected duration"})}),(null===t||void 0===t?void 0:t.length)>0&&t.map(((e,t)=>{return(0,c.jsx)($,{row:e,index:t,isSelected:(a=e._id,-1!==l.indexOf(a))},e._id);var a}))]}),(0,c.jsx)(G,{rowsCount:a,page:r,rowsPerPage:o,order:i,orderBy:s})]})})})}function $(e){let{row:t,index:a,isSelected:n}=e;const r="enhanced-table-checkbox-".concat(a);return(0,c.jsxs)(R.A,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},"aria-checked":n,tabIndex:-1,selected:n,children:[(0,c.jsx)(V.A,{component:"th",id:r,scope:"row",align:"left",children:t.name}),(0,c.jsx)(V.A,{align:"left",children:t.email}),(0,c.jsx)(V.A,{align:"left",children:t.phoneNumber}),(0,c.jsx)(V.A,{align:"left",children:t.country}),(0,c.jsx)(V.A,{align:"left",children:t.city}),(0,c.jsx)(V.A,{align:"left",children:(0,c.jsx)(U.A,{value:t.visitTime})}),(0,c.jsx)(V.A,{align:"left",children:(0,c.jsx)(J,{value:t.category})}),(0,c.jsx)(V.A,{align:"right",children:(0,c.jsx)("a",{href:t.transcriptUrl,target:"_blank",rel:"noreferrer",children:(0,c.jsx)(s.A,{children:"View"})})})]},t._id)}var Z=a(25979),Q=a(3788),ee=a(70006),te=a(2660),ae=a(23266),ne=a(93038),re=a(83563);const oe={PaperProps:{style:{maxHeight:224,width:250}}},ie=[{value:"preSale",label:"Pre-Sale"},{value:"general",label:"General"},{value:"others",label:"Others"}],se=ie.reduce(((e,t)=>(e[t.value]=t.label,e)),{});const le=function(e){let{value:t=[],onChange:a}=e;return(0,c.jsxs)(Z.A,{sx:{m:1,width:300,float:"left"},children:[(0,c.jsx)(Q.A,{id:"visitor-type-label",style:{lineHeight:"15px"},children:"Visitor Category"}),(0,c.jsx)(ee.A,{labelId:"visitor-type-label",id:"visitor-type",multiple:!0,value:t||[],onChange:e=>{a(e.target.value)},input:(0,c.jsx)(te.A,{label:"Visitor Category"}),renderValue:e=>e.map((e=>se[e])).join(", "),MenuProps:oe,children:ie.map((e=>{let{value:a,label:n}=e;return(0,c.jsxs)(ae.A,{value:a,children:[(0,c.jsx)(ne.A,{checked:null===t||void 0===t?void 0:t.includes(a)}),(0,c.jsx)(re.A,{primary:n})]},a)}))})]})};const ce=function(){const[e,t]=n.useState(),{visitorList:a,visitorProps:r,visitorsListTotal:o}=(0,S.qi)(),{category:l,count:d,page:u,orderBy:h,order:p}=r||{};return n.useEffect((()=>{e&&k(e).catch((e=>console.log("Error loading visitor list:-",e)))}),[e]),(0,c.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,c.jsxs)(i.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsx)(s.A,{variant:"h5",children:"Visitors List"})}),(0,c.jsx)(i.Ay,{item:!0,xs:9,alignItems:"right",children:(0,c.jsxs)(i.Ay,{container:!0,alignItems:"right",justifyContent:"flex-end",children:[(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsx)(le,{value:l,onChange:e=>k({category:e})})}),(0,c.jsx)(O,{showToday:!0,onChange:t})]})})]}),(0,c.jsx)(A.A,{sx:{mt:2},content:!1,children:(0,c.jsx)(X,{data:a,orderBy:h,order:p,category:l,rowsCount:o||0,rowsPerPage:d||10,page:(u||1)-1})})]})},de=[{value:"country",text:"Country"},{value:"city",text:"City"},{value:"os",text:"OS Name"},{value:"browser",text:"Browser"},{value:"date",text:"Date"},{value:"landing_page",text:"Landing Page"}],ue=de.reduce(((e,t)=>(e[t.value]=t.text,e)),{});const he=function(e){let{value:t,onChange:a}=e;return(0,c.jsx)(pe,{list:de,value:t,onChange:a})};function pe(e){let{list:t,value:a,onChange:n}=e;return(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsx)(f.A,{direction:"row",alignItems:"center",spacing:0,children:t.map((e=>(0,c.jsx)(T.A,{size:"small",onClick:()=>n(e.value),color:a===e.value?"primary":"secondary",variant:a===e.value?"outlined":"text",children:e.text},e.value)))})})}function xe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function me(e,t){return"desc"===e?(e,a)=>xe(e,a,t):(e,a)=>-xe(e,a,t)}function ge(e,t){const a=e.map(((e,t)=>[e,t]));return a.sort(((e,a)=>{const n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((e=>e[0]))}const fe=[{id:"group",label:"Group"},{id:"totalInteractions",disablePadding:!0,label:"Interactions"},{id:"preSale",label:"Pre-Sale"},{id:"general",label:"General"},{id:"others",label:"Others"}];function ve(e){let{order:t,orderBy:a}=e;return(0,c.jsx)(I.A,{children:(0,c.jsx)(R.A,{children:fe.map((e=>(0,c.jsx)(V.A,{align:e.align||"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&t,children:e.label},e.id)))})})}function ye(e){let{data:t}=e;const[a]=(0,n.useState)("asc"),[r]=(0,n.useState)("_id"),[o]=(0,n.useState)([]);return(0,c.jsx)(y.A,{children:(0,c.jsx)(F.A,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,c.jsxs)(B.A,{"aria-labelledby":"VisitorList",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,c.jsx)(ve,{order:a,orderBy:r}),(0,c.jsxs)(q.A,{children:[!(null!==t&&void 0!==t&&t.length)&&(0,c.jsx)(R.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,c.jsx)(V.A,{colSpan:7,children:"No visitors exists for the selected duration"})}),(null===t||void 0===t?void 0:t.length)>0&&ge(t,me(a,r)).map(((e,t)=>{return(0,c.jsx)(Ae,{row:e,index:t,isSelected:(a=e._id,-1!==o.indexOf(a))},e.group);var a}))]})]})})})}function Ae(e){let{row:t,index:a,isSelected:n}=e;const r="enhanced-table-checkbox-".concat(a);return(0,c.jsxs)(R.A,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},"aria-checked":n,tabIndex:-1,selected:n,children:[(0,c.jsx)(V.A,{component:"th",id:r,scope:"row",align:"left",children:t.group}),(0,c.jsx)(V.A,{align:"left",children:t.totalInteractions}),(0,c.jsx)(V.A,{align:"left",children:t.preSale||"-"}),(0,c.jsx)(V.A,{align:"left",children:t.general||"-"}),(0,c.jsx)(V.A,{align:"left",children:t.others||"-"})]})}const je=function(){const[e,t]=n.useState("country"),a=(0,S.qi)((e=>e.visitorGroupedList)),{fromDate:r,toDate:o}=S.qi.getState();return n.useEffect((()=>{e&&async function(e){const{organizationId:t,selectedBotId:a}=S.nc.getState(),{fromDate:n,toDate:r}=S.qi.getState();S.qi.setState({visitorGroupedList:null});const o=await C.Jt("/analytics/".concat(t,"/").concat(a,"/dashboard/grouped/").concat(e),{fromDate:n,toDate:r});S.qi.setState({visitorGroupedList:o})}(e).catch((e=>console.log("Error loading visitor grouped list:-",e)))}),[e]),(0,c.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,c.jsxs)(i.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,c.jsx)(i.Ay,{item:!0,children:(0,c.jsxs)(s.A,{variant:"h5",children:["Analytics - [",ue[e]," Wise] (",(0,c.jsx)(U.A,{value:r,dateOnly:!0})," - ",(0,c.jsx)(U.A,{value:o,dateOnly:!0}),")"]})}),(0,c.jsx)(he,{value:e,onChange:t})]}),(0,c.jsx)(A.A,{sx:{mt:2},content:!1,children:(0,c.jsx)(ye,{data:a})})]})},be=new Date("2023-10-01"),De=o()().endOf("day").toDate(),Se={month:3};const we=function(){const{fromDate:e,toDate:t}=(0,S.qi)(),a=n.useMemo((()=>({fromDate:e,toDate:t})),[e,t]);return n.useEffect((()=>{P().catch((e=>console.error("Unable to load analytics data",e)))}),[]),(0,c.jsxs)(i.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,c.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,c.jsx)(s.A,{variant:"h5",style:{display:"inline-block",marginRight:"18px"},children:"Dashboard"}),(0,c.jsx)(p,{range:!0,value:a,onChange:_,minDate:be,maxDate:De,maxSpan:Se})]}),(0,c.jsx)(i.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}}),(0,c.jsx)(w,{}),(0,c.jsx)(je,{}),(0,c.jsx)(ce,{})]})}},8478:(e,t,a)=>{a.d(t,{Jt:()=>o,Ne:()=>u,TF:()=>l,bE:()=>i,yJ:()=>s});var n=a(32026),r=a(44364);async function o(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,a){let{headers:n,noAuth:r,...o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;t=u(t,i?void 0:a);const s=a instanceof FormData;if(s||(a=a&&"object"===typeof a&&i?JSON.stringify(a):void 0),n||(n={}),s||(n["Content-Type"]="application/json"),n.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(n.Authorization="Bearer ".concat(e))}try{const r=await fetch(t,{...o,headers:n,body:a,method:e}),i=await r.json();if(r.ok){const{data:e,...t}=i;return delete t.status,e&&!Object.keys(t).length?e:i}throw i.message?new Error(i.message):i}catch(c){var l;throw console.error("Error calling API: ",c),null!==(l=c.message)&&void 0!==l&&l.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,n.s8)(r.jn,"/");function u(e,t){if(!e)return e;const a=t&&Object.keys(t);if(null!==a&&void 0!==a&&a.length){const n=a.reduce(((e,a)=>{let n=t[a];return null===n||void 0===n?e:(n="".concat(a,"=").concat(encodeURIComponent(n)),e?"".concat(e,"&").concat(n):n)}),"");n&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(n))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},32026:(e,t,a)=>{function n(e,t){return e.replace(new RegExp("".concat(r(t),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o(e){const t=new Date(e),a=t.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getFullYear();return"".concat(n," ").concat(a,", ").concat(r)}function i(e,t,a){if(!t&&!e)return a;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),o=t.substring(0,r),s=t.substring(r+1);n[o]=i(e[o],s,a)}else n[t]=a;return n}function s(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let a="";for(let n=0;n<e;n++)a+=t.charAt(Math.floor(36*Math.random()));return a}function c(e,t,a){if(!t&&!e)return a;e=e||{};const n=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),o=t.substring(0,r),i=t.substring(r+1);n[o]=c(e[o],i,a)}else n[t]=a;return n}a.d(t,{G6:()=>i,OX:()=>l,Yq:()=>o,do:()=>c,qW:()=>s,s8:()=>n})},44364:(e,t,a)=>{a.d(t,{DX:()=>s,Og:()=>o,jn:()=>n,pA:()=>i,pR:()=>r});const n="https://devbackend.livhousing.com",r="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com"}}]);