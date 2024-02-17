"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[485],{49485:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var i=n(9950),o=n(60899),s=n(82053),r=n(93230),l=n(16491),a=n(48205),c=n(63464),d=n(40033),x=n(28170),h=n(2660),j=n(79739),A=n(10226),m=n(52472),u=n(99532),p=n(7999),y=n(57988),g=n(70520),f=n(25333),C=n(51519),b=n(63359),v=n(85967),k=n(53065),w=n(64697),B=n(59254),S=n(37324),N=n(16497),I=n(58178),_=n(51637),D=n(69713),F=n(93383),L=n(98415),P=n(32026),z=n(81857),U=n(26092),V=n(44414);const W=()=>{const e=(0,D.nc)((e=>e.botsList)),t=(0,D.nc)((e=>e.organizationId)),[n,r]=(0,i.useState)(!1),[l,a]=(0,i.useState)(),c=e=>{r(!0),a(e)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(o.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,V.jsxs)(o.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:[(0,V.jsx)(s.A,{variant:"h5",children:"Bots List"}),(0,V.jsx)(o.Ay,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,V.jsx)(M,{})})]}),e.map(((e,t)=>(0,V.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,V.jsx)(E,{bot:e,verifyBot:c})},t))),(0,V.jsx)(o.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]}),(0,V.jsx)(U.A,{openPopUpDialog:n,setPopUpDialog:r,title:"Verify Bot Details",children:(0,V.jsx)(z.A,{setIsDeployBot:r,botId:l,organizationId:t})})]})},E=e=>{let{bot:t,verifyBot:n}=e;const{color:i,botName:a,createdAt:c,_id:d,verificationStatus:x}=t,h=(0,D.nc)((e=>e.isSuperUser)),j=async e=>await L.yo(d,{[e.target.name]:e.target.checked},!1);return(0,V.jsxs)(_.A,{contentSX:{p:2.25},children:[(0,V.jsxs)(r.A,{spacing:.5,children:[(0,V.jsxs)(o.Ay,{container:!0,direction:"row",alignItems:"center",children:[(0,V.jsx)(s.A,{variant:"h6",color:"textSecondary",children:"Bot Name"}),h&&(0,V.jsx)(k.A,{title:"Verify the bot",children:(0,V.jsx)(g.A,{style:{color:"#075C97",cursor:"pointer"},fontSize:"small",onClick:()=>n(d)})})]}),(0,V.jsx)(o.Ay,{container:!0,alignItems:"center",children:(0,V.jsxs)(o.Ay,{item:!0,children:[(0,V.jsx)(s.A,{variant:"h4",color:"inherit",children:a}),x?(0,V.jsxs)(o.Ay,{container:!0,direction:"row",alignItems:"center",children:[(0,V.jsx)(C.A,{style:{color:"#65EE55"}}),"\xa0Verified"]}):(0,V.jsxs)(o.Ay,{container:!0,direction:"row",alignItems:"center",children:[(0,V.jsx)(C.A,{style:{color:"#ff0000"}}),"\xa0Not verified"]}),(0,V.jsx)(o.Ay,{item:!0,children:(0,V.jsx)(N.A,{label:"Get Presale Lead",control:(0,V.jsx)(S.A,{checked:t.getPreSaleLeads,onChange:j,name:"getPreSaleLeads"})})}),h&&(0,V.jsx)(o.Ay,{item:!0,children:(0,V.jsx)(N.A,{label:"Is Bot Active",control:(0,V.jsx)(S.A,{checked:t.isBotActivate,onChange:j,name:"isBotActivate"})})})]})}),(0,V.jsxs)(o.Ay,{alignItems:"right",children:[(0,V.jsx)(q,{bot:t}),(0,V.jsx)(G,{bot:t})]})]}),(0,V.jsx)(l.A,{sx:{pt:2.25},children:(0,V.jsxs)(s.A,{variant:"caption",color:"textSecondary",children:["Created on:"," ",(0,V.jsx)(s.A,{component:"span",variant:"caption",sx:{color:"".concat(i||"primary",".main")},children:(0,P.Yq)(c)})]})})]})},T=i.forwardRef((function(e,t){return(0,V.jsx)(a.A,{direction:"up",ref:t,...e})}));function M(){const e=(0,B.Ay)((e=>{let{className:t,...n}=e;return(0,V.jsx)(k.A,{...n,arrow:!0,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{["& .".concat(w.A.arrow)]:{color:t.palette.common.black},["& .".concat(w.A.tooltip)]:{backgroundColor:t.palette.common.black}}})),[t,n]=(0,i.useState)(""),[o,r]=i.useState(!1),l=()=>r(!1);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(e,{title:"Add new bot",placement:"right",children:(0,V.jsx)(m.A,{color:"primary",size:"medium",onClick:()=>r(!0),children:(0,V.jsx)(u.A,{})})}),(0,V.jsxs)(c.A,{open:o,TransitionComponent:T,keepMounted:!0,onClose:l,maxWidth:"md",children:[(0,V.jsx)(d.A,{style:{width:"400px"},children:(0,V.jsx)(s.A,{color:"inherit",children:"Create New Bot"})}),(0,V.jsx)(x.A,{children:(0,V.jsx)(h.A,{fullWidth:!0,type:"text",id:"botName",name:"botName",onChange:e=>n(e.target.value),placeholder:"Bot Name",autoComplete:"off"})}),(0,V.jsxs)(j.A,{children:[(0,V.jsx)(A.A,{onClick:l,children:"Cancel"}),(0,V.jsx)(F.A,{variant:"contained",disabled:(null===t||void 0===t?void 0:t.trim().length)<3,onClick:async()=>{try{await(0,L.gI)(t),l(),(0,I.i)(!0,"New bot added successfully","success")}catch(e){(0,I.i)(!0,"Bot already exist","error")}},children:"Create"})]})]})]})}function q(e){let{bot:t}=e;const{_id:n,botName:o}=t,[r,l]=(0,i.useState)(""),[a,m]=i.useState(!1),[u,y]=(0,i.useState)(),g=()=>{l(""),m(!1)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f.A,{"aria-label":"edit",sx:{color:b.A[500]},onClick:()=>m(!0),children:(0,V.jsx)(p.A,{})}),(0,V.jsxs)(c.A,{open:a,TransitionComponent:T,keepMounted:!0,onClose:g,maxWidth:"md",children:[(0,V.jsx)(d.A,{style:{width:"400px"},children:(0,V.jsx)(s.A,{color:"inherit",children:"Edit Bot Name"})}),(0,V.jsx)(x.A,{children:(0,V.jsx)(h.A,{fullWidth:!0,type:"text",id:"editBotName",name:"editBotName",defaultValue:o,onChange:e=>{""===e.target.value?y("Invalid Bot Name"):(y(""),l(e.target.value))},placeholder:"Bot Name",autoComplete:"off"})}),(0,V.jsxs)(j.A,{children:[u&&(0,V.jsxs)("div",{style:{color:"red"},children:[" *",u," "]}),(0,V.jsx)(A.A,{onClick:g,children:"Cancel"}),(0,V.jsx)(F.A,{variant:"contained",disabled:(null===r||void 0===r?void 0:r.trim().length)<3,onClick:async()=>{await(0,L.so)(n,r),g(),(0,I.i)(!0,"Bot name updated successfully","success")},children:"Update"})]})]})]})}function G(e){let{bot:t}=e;const{_id:n}=t,[o,r]=i.useState(!1),l=()=>{r(!1)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f.A,{"aria-label":"delete",sx:{color:v.A[500]},onClick:()=>{r(!0)},children:(0,V.jsx)(y.A,{})}),(0,V.jsxs)(c.A,{open:o,onClose:l,children:[(0,V.jsx)(d.A,{id:"alert-dialog-title",children:(0,V.jsx)(s.A,{gutterBottom:!0,children:"Are sure you want to delete the bot ?"})}),(0,V.jsxs)(j.A,{children:[(0,V.jsx)(A.A,{onClick:l,children:"Cancel"}),(0,V.jsx)(F.A,{variant:"contained",onClick:async()=>{await L.TF(n),r(!1)},children:"Delete"})]})]})]})}}}]);