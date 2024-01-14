"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[887],{97316:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(47313),i=r(19860),a=r(73428),n=r(54641),o=r(61113),l=r(93405),c=r(46417);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=(0,s.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:s,children:h,content:x=!0,contentSX:p={},darkTitle:m,elevation:j,secondary:Z,shadow:u,sx:g={},title:y,...b}=e;const f=(0,i.Z)();return s="dark"===f.palette.mode?s||!0:s,(0,c.jsxs)(a.Z,{elevation:j||0,ref:t,...b,sx:{border:r?"1px solid":"none",borderRadius:2,borderColor:"dark"===f.palette.mode?f.palette.divider:f.palette.grey.A800,boxShadow:!s||r&&"dark"!==f.palette.mode?"inherit":u||f.customShadows.z1,":hover":{boxShadow:s?u||f.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:f.typography.fontFamily,fontSize:"0.75rem"},...g},children:[!m&&y&&(0,c.jsx)(n.Z,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:y,action:Z}),m&&y&&(0,c.jsx)(n.Z,{sx:d,title:(0,c.jsx)(o.Z,{variant:"h3",children:y}),action:Z}),x&&(0,c.jsx)(l.Z,{sx:p,children:h}),!x&&h]})}))},88887:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ae});var s=r(47313),i=r(9019),a=r(61113),n=r(42832),o=r(31095),l=r(41806),c=r(48310),d=r(45624),h=r(83213),x=r(24631),p=r(51405),m=r(32600),j=r(48119),Z=r(51824),u=r(2135),g=r(23477),y=r(24076),b=r(67478),f=r(51629),v=r(66835),w=r(57861),P=r(90891),S=r(62870),k=r(19860),T=r(46417);const C=e=>{let{color:t,size:r}=e;const s=(0,k.Z)();let i;switch(t){case"secondary":i=s.palette.secondary.main;break;case"error":i=s.palette.error.main;break;case"warning":i=s.palette.warning.main;break;case"info":i=s.palette.info.main;break;case"success":i=s.palette.success.main;break;default:i=s.palette.primary.main}return(0,T.jsx)(l.Z,{sx:{width:r||8,height:r||8,borderRadius:"50%",bgcolor:i}})};function M(e,t,r,s,i){return{trackingNo:e,name:t,fat:r,carbs:s,protein:i}}const I=[M(84564564,"Camera Lens",40,2,40570),M(98764564,"Laptop",300,0,180139),M(98756325,"Mobile",355,1,90989),M(98652366,"Handset",50,1,10239),M(13286564,"Computer Accessories",100,1,83348),M(86739658,"TV",99,0,410780),M(13256498,"Keyboard",125,2,70999),M(98753263,"Mouse",89,2,10570),M(98753275,"Desktop",185,1,98063),M(98753291,"Chair",100,0,14001)];function z(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0}function A(e,t){return"desc"===e?(e,r)=>z(e,r,t):(e,r)=>-z(e,r,t)}function W(e,t){const r=e.map(((e,t)=>[e,t]));return r.sort(((e,r)=>{const s=t(e[0],r[0]);return 0!==s?s:e[1]-r[1]})),r.map((e=>e[0]))}const L=[{id:"trackingNo",align:"left",disablePadding:!1,label:"Tracking No."},{id:"name",align:"left",disablePadding:!0,label:"Product Name"},{id:"fat",align:"right",disablePadding:!1,label:"Total Order"},{id:"carbs",align:"left",disablePadding:!1,label:"Status"},{id:"protein",align:"right",disablePadding:!1,label:"Total Amount"}];function N(e){let{order:t,orderBy:r}=e;return(0,T.jsx)(g.Z,{children:(0,T.jsx)(y.Z,{children:L.map((e=>(0,T.jsx)(b.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:e.label},e.id)))})})}const R=e=>{let t,r,{status:s}=e;switch(s){case 0:t="warning",r="Pending";break;case 1:t="success",r="Approved";break;case 2:t="error",r="Rejected";break;default:t="primary",r="None"}return(0,T.jsxs)(n.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,T.jsx)(C,{color:t}),(0,T.jsx)(a.Z,{children:r})]})};function O(){const[e]=(0,s.useState)("asc"),[t]=(0,s.useState)("trackingNo"),[r]=(0,s.useState)([]);return(0,T.jsx)(l.Z,{children:(0,T.jsx)(f.Z,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,T.jsxs)(v.Z,{"aria-labelledby":"tableTitle",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,T.jsx)(N,{order:e,orderBy:t}),(0,T.jsx)(w.Z,{children:W(I,A(e,t)).map(((e,t)=>{const s=(i=e.trackingNo,-1!==r.indexOf(i));var i;const a="enhanced-table-checkbox-".concat(t);return(0,T.jsxs)(y.Z,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},"aria-checked":s,tabIndex:-1,selected:s,children:[(0,T.jsx)(b.Z,{component:"th",id:a,scope:"row",align:"left",children:(0,T.jsx)(P.Z,{color:"secondary",component:u.rU,to:"",children:e.trackingNo})}),(0,T.jsx)(b.Z,{align:"left",children:e.name}),(0,T.jsx)(b.Z,{align:"right",children:e.fat}),(0,T.jsx)(b.Z,{align:"left",children:(0,T.jsx)(R,{status:e.carbs})}),(0,T.jsx)(b.Z,{align:"right",children:(0,T.jsx)(S.Z,{value:e.protein,displayType:"text",thousandSeparator:!0,prefix:"$"})})]},e.trackingNo)}))})]})})})}var $=r(58446);const B={chart:{height:450,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},grid:{strokeDashArray:0}},F=e=>{let{slot:t}=e;const r=(0,k.Z)(),{primary:i,secondary:a}=r.palette.text,n=r.palette.divider,[o,l]=(0,s.useState)(B);(0,s.useEffect)((()=>{l((e=>({...e,colors:[r.palette.primary.main,r.palette.primary[700]],xaxis:{categories:"month"===t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],labels:{style:{colors:[a,a,a,a,a,a,a,a,a,a,a,a]}},axisBorder:{show:!0,color:n},tickAmount:"month"===t?11:7},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:n},tooltip:{theme:"light"}})))}),[i,a,n,r,t]);const[c,d]=(0,s.useState)([{name:"Page Views",data:[0,86,28,115,48,210,136]},{name:"Sessions",data:[0,43,14,56,24,105,68]}]);return(0,s.useEffect)((()=>{d([{name:"Page Views",data:"month"===t?[76,85,101,98,87,105,91,114,94,86,115,35]:[31,40,28,51,42,109,100]},{name:"Sessions",data:"month"===t?[110,60,150,35,60,36,26,45,65,52,53,41]:[11,32,45,32,34,52,41]}])}),[t]),(0,T.jsx)($.Z,{options:o,series:c,type:"area",height:450})},D={chart:{type:"bar",height:365,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"45%",borderRadius:4}},dataLabels:{enabled:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},grid:{show:!1}},E=()=>{const e=(0,k.Z)(),{primary:t,secondary:r}=e.palette.text,i=e.palette.info.light,[a]=(0,s.useState)([{data:[80,95,70,42,65,55,78]}]),[n,o]=(0,s.useState)(D);return(0,s.useEffect)((()=>{o((e=>({...e,colors:[i],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r]}}},tooltip:{theme:"light"}})))}),[t,i,r]),(0,T.jsx)("div",{id:"chart",children:(0,T.jsx)($.Z,{options:n,series:a,type:"bar",height:365})})},H={chart:{height:340,type:"line",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1.5},grid:{strokeDashArray:4},xaxis:{type:"datetime",categories:["2018-05-19T00:00:00.000Z","2018-06-19T00:00:00.000Z","2018-07-19T01:30:00.000Z","2018-08-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-10-19T04:30:00.000Z","2018-11-19T05:30:00.000Z","2018-12-19T06:30:00.000Z"],labels:{format:"MMM"},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{format:"MM"}}},J=()=>{const e=(0,k.Z)(),{primary:t,secondary:r}=e.palette.text,i=e.palette.divider,[a,n]=(0,s.useState)(H);(0,s.useEffect)((()=>{n((t=>({...t,colors:[e.palette.warning.main],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r,r]}}},grid:{borderColor:i},tooltip:{theme:"light"},legend:{labels:{colors:"grey.500"}}})))}),[t,r,i,e]);const[o]=(0,s.useState)([{name:"Series 1",data:[58,115,28,83,63,75,35,55]}]);return(0,T.jsx)($.Z,{options:a,series:o,type:"line",height:345})},V={chart:{type:"bar",height:430,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"30%",borderRadius:4}},dataLabels:{enabled:!1},stroke:{show:!0,width:8,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:e=>"$ ".concat(e," thousands")}},legend:{show:!0,fontFamily:"'Public Sans', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:"50%",offsexX:2,offsexY:2},itemMargin:{horizontal:15,vertical:50}},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]},X=()=>{const e=(0,k.Z)(),{primary:t,secondary:r}=e.palette.text,i=e.palette.divider,a=e.palette.warning.main,n=e.palette.primary.main,o=e.palette.success.dark,[l]=(0,s.useState)([{name:"Net Profit",data:[180,90,135,114,120,145]},{name:"Revenue",data:[120,45,78,150,168,99]}]),[c,d]=(0,s.useState)(V);return(0,s.useEffect)((()=>{d((e=>({...e,colors:[a,n],xaxis:{labels:{style:{colors:[r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:i},tooltip:{theme:"light"},legend:{position:"top",horizontalAlign:"right",labels:{colors:"grey.500"}}})))}),[t,r,i,a,n,o]),(0,T.jsx)("div",{id:"chart",children:(0,T.jsx)($.Z,{options:c,series:l,type:"bar",height:430})})};var Y=r(97316),_=r(66212),U=r(27164),q=r(77552);const G=e=>{let{color:t,title:r,count:s,percentage:o,isLoss:c,extra:d}=e;return(0,T.jsxs)(Y.Z,{contentSX:{p:2.25},children:[(0,T.jsxs)(n.Z,{spacing:.5,children:[(0,T.jsx)(a.Z,{variant:"h6",color:"textSecondary",children:r}),(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h4",color:"inherit",children:s})}),o&&(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(_.Z,{variant:"combined",color:t,icon:(0,T.jsxs)(T.Fragment,{children:[!c&&(0,T.jsx)(U.Z,{style:{fontSize:"0.75rem",color:"inherit"}}),c&&(0,T.jsx)(q.Z,{style:{fontSize:"0.75rem",color:"inherit"}})]}),label:"".concat(o,"%"),sx:{ml:1.25,pl:1},size:"small"})})]})]}),(0,T.jsx)(l.Z,{sx:{pt:2.25},children:(0,T.jsxs)(a.Z,{variant:"caption",color:"textSecondary",children:["You made an extra"," ",(0,T.jsx)(a.Z,{component:"span",variant:"caption",sx:{color:"".concat(t||"primary",".main")},children:d})," ","this year"]})})]})};G.defaultProps={color:"primary"};const K=G;var Q=r(81002),ee=r(54757),te=r(69893);const re={width:36,height:36,fontSize:"1rem"},se={mt:.75,ml:1,top:"auto",right:"auto",alignSelf:"flex-start",transform:"none"},ie=[{value:"today",label:"Today"},{value:"month",label:"This Month"},{value:"year",label:"This Year"}],ae=()=>{const[e,t]=(0,s.useState)("today"),[r,u]=(0,s.useState)("week");return(0,T.jsxs)(i.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,T.jsx)(i.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:(0,T.jsx)(a.Z,{variant:"h5",children:"Dashboard"})}),(0,T.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(K,{title:"Total Page Views",count:"4,42,236",percentage:59.3,extra:"35,000"})}),(0,T.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(K,{title:"Total Users",count:"78,250",percentage:70.5,extra:"8,900"})}),(0,T.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(K,{title:"Total Order",count:"18,800",percentage:27.4,isLoss:!0,color:"warning",extra:"1,943"})}),(0,T.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(K,{title:"Total Sales",count:"$35,078",percentage:27.4,isLoss:!0,color:"warning",extra:"$20,395"})}),(0,T.jsx)(i.ZP,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:7,lg:8,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Unique Visitor"})}),(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsxs)(n.Z,{direction:"row",alignItems:"center",spacing:0,children:[(0,T.jsx)(o.Z,{size:"small",onClick:()=>u("month"),color:"month"===r?"primary":"secondary",variant:"month"===r?"outlined":"text",children:"Month"}),(0,T.jsx)(o.Z,{size:"small",onClick:()=>u("week"),color:"week"===r?"primary":"secondary",variant:"week"===r?"outlined":"text",children:"Week"})]})})]}),(0,T.jsx)(Y.Z,{content:!1,sx:{mt:1.5},children:(0,T.jsx)(l.Z,{sx:{pt:1,pr:2},children:(0,T.jsx)(F,{slot:r})})})]}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:5,lg:4,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Income Overview"})}),(0,T.jsx)(i.ZP,{item:!0})]}),(0,T.jsxs)(Y.Z,{sx:{mt:2},content:!1,children:[(0,T.jsx)(l.Z,{sx:{p:3,pb:0},children:(0,T.jsxs)(n.Z,{spacing:2,children:[(0,T.jsx)(a.Z,{variant:"h6",color:"textSecondary",children:"This Week Statistics"}),(0,T.jsx)(a.Z,{variant:"h3",children:"$7,650"})]})}),(0,T.jsx)(E,{})]})]}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:7,lg:8,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Recent Orders"})}),(0,T.jsx)(i.ZP,{item:!0})]}),(0,T.jsx)(Y.Z,{sx:{mt:2},content:!1,children:(0,T.jsx)(O,{})})]}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:5,lg:4,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Analytics Report"})}),(0,T.jsx)(i.ZP,{item:!0})]}),(0,T.jsxs)(Y.Z,{sx:{mt:2},content:!1,children:[(0,T.jsxs)(c.Z,{sx:{p:0,"& .MuiListItemButton-root":{py:2}},children:[(0,T.jsxs)(d.Z,{divider:!0,children:[(0,T.jsx)(h.Z,{primary:"Company Finance Growth"}),(0,T.jsx)(a.Z,{variant:"h5",children:"+45.14%"})]}),(0,T.jsxs)(d.Z,{divider:!0,children:[(0,T.jsx)(h.Z,{primary:"Company Expenses Ratio"}),(0,T.jsx)(a.Z,{variant:"h5",children:"0.58%"})]}),(0,T.jsxs)(d.Z,{children:[(0,T.jsx)(h.Z,{primary:"Business Risk Cases"}),(0,T.jsx)(a.Z,{variant:"h5",children:"Low"})]})]}),(0,T.jsx)(J,{})]})]}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:7,lg:8,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Sales Report"})}),(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(x.Z,{id:"standard-select-currency",size:"small",select:!0,value:e,onChange:e=>t(e.target.value),sx:{"& .MuiInputBase-input":{py:.5,fontSize:"0.875rem"}},children:ie.map((e=>(0,T.jsx)(p.Z,{value:e.value,children:e.label},e.value)))})})]}),(0,T.jsxs)(Y.Z,{sx:{mt:1.75},children:[(0,T.jsxs)(n.Z,{spacing:1.5,sx:{mb:-12},children:[(0,T.jsx)(a.Z,{variant:"h6",color:"secondary",children:"Net Profit"}),(0,T.jsx)(a.Z,{variant:"h4",children:"$1560"})]}),(0,T.jsx)(X,{})]})]}),(0,T.jsxs)(i.ZP,{item:!0,xs:12,md:5,lg:4,children:[(0,T.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsx)(a.Z,{variant:"h5",children:"Transaction History"})}),(0,T.jsx)(i.ZP,{item:!0})]}),(0,T.jsx)(Y.Z,{sx:{mt:2},content:!1,children:(0,T.jsxs)(c.Z,{component:"nav",sx:{px:0,py:0,"& .MuiListItemButton-root":{py:1.5,"& .MuiAvatar-root":re,"& .MuiListItemSecondaryAction-root":{...se,position:"relative"}}},children:[(0,T.jsxs)(d.Z,{divider:!0,children:[(0,T.jsx)(m.Z,{children:(0,T.jsx)(j.Z,{sx:{color:"success.main",bgcolor:"success.lighter"},children:(0,T.jsx)(Q.Z,{})})}),(0,T.jsx)(h.Z,{primary:(0,T.jsx)(a.Z,{variant:"subtitle1",children:"Order #002434"}),secondary:"Today, 2:00 AM"}),(0,T.jsx)(Z.Z,{children:(0,T.jsxs)(n.Z,{alignItems:"flex-end",children:[(0,T.jsx)(a.Z,{variant:"subtitle1",noWrap:!0,children:"+ $1,430"}),(0,T.jsx)(a.Z,{variant:"h6",color:"secondary",noWrap:!0,children:"78%"})]})})]}),(0,T.jsxs)(d.Z,{divider:!0,children:[(0,T.jsx)(m.Z,{children:(0,T.jsx)(j.Z,{sx:{color:"primary.main",bgcolor:"primary.lighter"},children:(0,T.jsx)(ee.Z,{})})}),(0,T.jsx)(h.Z,{primary:(0,T.jsx)(a.Z,{variant:"subtitle1",children:"Order #984947"}),secondary:"5 August, 1:45 PM"}),(0,T.jsx)(Z.Z,{children:(0,T.jsxs)(n.Z,{alignItems:"flex-end",children:[(0,T.jsx)(a.Z,{variant:"subtitle1",noWrap:!0,children:"+ $302"}),(0,T.jsx)(a.Z,{variant:"h6",color:"secondary",noWrap:!0,children:"8%"})]})})]}),(0,T.jsxs)(d.Z,{children:[(0,T.jsx)(m.Z,{children:(0,T.jsx)(j.Z,{sx:{color:"error.main",bgcolor:"error.lighter"},children:(0,T.jsx)(te.Z,{})})}),(0,T.jsx)(h.Z,{primary:(0,T.jsx)(a.Z,{variant:"subtitle1",children:"Order #988784"}),secondary:"7 hours ago"}),(0,T.jsx)(Z.Z,{children:(0,T.jsxs)(n.Z,{alignItems:"flex-end",children:[(0,T.jsx)(a.Z,{variant:"subtitle1",noWrap:!0,children:"+ $682"}),(0,T.jsx)(a.Z,{variant:"h6",color:"secondary",noWrap:!0,children:"16%"})]})})]})]})}),(0,T.jsx)(Y.Z,{sx:{mt:2},children:(0,T.jsxs)(n.Z,{spacing:3,children:[(0,T.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,T.jsx)(i.ZP,{item:!0,children:(0,T.jsxs)(n.Z,{children:[(0,T.jsx)(a.Z,{variant:"h5",noWrap:!0,children:"Help & Support Chat"}),(0,T.jsx)(a.Z,{variant:"caption",color:"secondary",noWrap:!0,children:"Typical replay within 5 min"})]})}),(0,T.jsx)(i.ZP,{item:!0})]}),(0,T.jsx)(o.Z,{size:"small",variant:"contained",sx:{textTransform:"capitalize"},children:"Need Help?"})]})})]})]})}}}]);