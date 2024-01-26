"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[651],{6505:(e,t,o)=>{o.d(t,{Z:()=>h});var a=o(47313),n=o(19860),r=o(73428),i=o(54641),s=o(61113),c=o(93405),l=o(46417);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=(0,a.forwardRef)(((e,t)=>{let{border:o=!0,boxShadow:a,children:h,content:u=!0,contentSX:p={},darkTitle:m,elevation:b,secondary:g,shadow:v,sx:f={},title:x,...Z}=e;const S=(0,n.Z)();return a="dark"===S.palette.mode?a||!0:a,(0,l.jsxs)(r.Z,{elevation:b||0,ref:t,...Z,sx:{border:o?"1px solid":"none",borderRadius:2,borderColor:"dark"===S.palette.mode?S.palette.divider:S.palette.grey.A800,boxShadow:!a||o&&"dark"!==S.palette.mode?"inherit":v||S.customShadows.z1,":hover":{boxShadow:a?v||S.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:S.typography.fontFamily,fontSize:"0.75rem"},...f},children:[!m&&x&&(0,l.jsx)(i.Z,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:x,action:g}),m&&x&&(0,l.jsx)(i.Z,{sx:d,title:(0,l.jsx)(s.Z,{variant:"h3",children:x}),action:g}),u&&(0,l.jsx)(c.Z,{sx:p,children:h}),!u&&h]})}))},94100:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(47313),n=o(31095),r=o(85281),i=o(46417);const s=function(e){let{onClick:t,disabled:o,isLoading:s,children:c,...l}=e;const[d,h]=a.useState(s);return(0,i.jsxs)(n.Z,{onClick:e=>{if(!t)return;const o=t(e);"function"===typeof(null===o||void 0===o?void 0:o.finally)&&(h(!0),o.finally((()=>h(!1))))},disabled:d||s||o,...l,children:[(d||s)&&(0,i.jsx)(r.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},98651:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Y});var a=o(47313),n=o(9019),r=o(61113),i=o(42832),s=o(41806),c=o(50301),l=o(66149),d=o(33604),h=o(96467),u=o(49914),p=o(4117),m=o(31095),b=o(42420),g=o(5211),v=o(65954),f=o(51997),x=o(47131),Z=o(89994),S=o(11623),k=o(49709),w=o(78041),y=o(17592),P=o(63366),C=o(87462),j=o(94146),_=o(21921),R=o(17551),N=o(91615),E=o(97423),A=o(77342),I=o(77430),T=o(32298);function B(e){return(0,T.ZP)("MuiSwitch",e)}const D=(0,I.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var L=o(46417);const M=["className","color","edge","size","sx"],O=(0,y.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t["edge".concat((0,N.Z)(o.edge))],t["size".concat((0,N.Z)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,C.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===t.edge&&{marginLeft:-8},"end"===t.edge&&{marginRight:-8},"small"===t.size&&{width:40,height:24,padding:7,["& .".concat(D.thumb)]:{width:16,height:16},["& .".concat(D.switchBase)]:{padding:4,["&.".concat(D.checked)]:{transform:"translateX(16px)"}}})})),z=(0,y.ZP)(E.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{["& .".concat(D.input)]:t.input},"default"!==o.color&&t["color".concat((0,N.Z)(o.color))]]}})((e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat("light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),["&.".concat(D.checked)]:{transform:"translateX(20px)"},["&.".concat(D.disabled)]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat("light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600])},["&.".concat(D.checked," + .").concat(D.track)]:{opacity:.5},["&.".concat(D.disabled," + .").concat(D.track)]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat("light"===t.palette.mode?.12:.2)},["& .".concat(D.input)]:{left:"-100%",width:"300%"}}}),(e=>{let{theme:t,ownerState:o}=e;return(0,C.Z)({"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{["&.".concat(D.checked)]:{color:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(D.disabled)]:{color:t.vars?t.vars.palette.Switch["".concat(o.color,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,R.$n)(t.palette[o.color].main,.62):(0,R._j)(t.palette[o.color].main,.55))}},["&.".concat(D.checked," + .").concat(D.track)]:{backgroundColor:(t.vars||t).palette[o.color].main}})})),F=(0,y.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),K=(0,y.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),W=a.forwardRef((function(e,t){const o=(0,A.Z)({props:e,name:"MuiSwitch"}),{className:a,color:n="primary",edge:r=!1,size:i="medium",sx:s}=o,c=(0,P.Z)(o,M),l=(0,C.Z)({},o,{color:n,edge:r,size:i}),d=(e=>{const{classes:t,edge:o,size:a,color:n,checked:r,disabled:i}=e,s={root:["root",o&&"edge".concat((0,N.Z)(o)),"size".concat((0,N.Z)(a))],switchBase:["switchBase","color".concat((0,N.Z)(n)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=(0,_.Z)(s,B,t);return(0,C.Z)({},t,c)})(l),h=(0,L.jsx)(K,{className:d.thumb,ownerState:l});return(0,L.jsxs)(O,{className:(0,j.Z)(d.root,a),sx:s,ownerState:l,children:[(0,L.jsx)(z,(0,C.Z)({type:"checkbox",icon:h,checkedIcon:h,ref:t,ownerState:l},c,{classes:(0,C.Z)({},d,{root:d.switchBase})})),(0,L.jsx)(F,{className:d.track,ownerState:l})]})}));var U=o(83929),q=o(26478),H=o(6505),V=o(23509),G=o(94100),X=o(45960),J=o(89637),$=o(80730);const Y=()=>{const e=(0,V.tN)((e=>e.botsList));return(0,L.jsxs)(n.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,L.jsxs)(n.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:[(0,L.jsx)(r.Z,{variant:"h5",children:"Bots List"}),(0,L.jsx)(n.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,L.jsx)(te,{})})]}),e.map(((e,t)=>(0,L.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,L.jsx)(Q,{bot:e})},t))),(0,L.jsx)(n.ZP,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})},Q=e=>{let{bot:t}=e;const{color:o,botName:c,createdAt:l,_id:d,organizationId:h,getPreSaleLeads:u}=t,[p,m]=a.useState({status:u}),b=$.v_("/bot/".concat(h,"/").concat(d,"/presale-lead-status"),p);return console.log("pre State ::",b),(0,L.jsxs)(H.Z,{contentSX:{p:2.25},children:[(0,L.jsxs)(i.Z,{spacing:.5,children:[(0,L.jsx)(r.Z,{variant:"h6",color:"textSecondary",children:"Bot Name"}),(0,L.jsx)(n.ZP,{container:!0,alignItems:"center",children:(0,L.jsxs)(n.ZP,{item:!0,children:[(0,L.jsx)(r.Z,{variant:"h4",color:"inherit",children:c}),(0,L.jsx)(n.ZP,{item:!0,children:(0,L.jsx)(U.Z,{style:{float:"right"},label:"Get Presale Lead",control:(0,L.jsx)(W,{checked:p.status,onChange:async e=>{m({[e.target.name]:e.target.checked})},name:"status"})})})]})}),(0,L.jsxs)(n.ZP,{alignItems:"right",children:[(0,L.jsx)(oe,{bot:t}),(0,L.jsx)(ae,{bot:t})]})]}),(0,L.jsx)(s.Z,{sx:{pt:2.25},children:(0,L.jsxs)(r.Z,{variant:"caption",color:"textSecondary",children:["Created on:"," ",(0,L.jsx)(r.Z,{component:"span",variant:"caption",sx:{color:"".concat(o||"primary",".main")},children:(0,J.p6)(l)})]})})]})},ee=a.forwardRef((function(e,t){return(0,L.jsx)(c.Z,{direction:"up",ref:t,...e})}));function te(){const e=(0,y.ZP)((e=>{let{className:t,...o}=e;return(0,L.jsx)(k.Z,{...o,arrow:!0,classes:{popper:t}})}))((e=>{let{theme:t}=e;return{["& .".concat(w.Z.arrow)]:{color:t.palette.common.black},["& .".concat(w.Z.tooltip)]:{backgroundColor:t.palette.common.black}}})),[t,o]=(0,a.useState)(""),[n,i]=a.useState(!1),s=()=>i(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(e,{title:"Add new bot",placement:"right",children:(0,L.jsx)(b.Z,{color:"primary",size:"medium",onClick:()=>i(!0),children:(0,L.jsx)(g.Z,{})})}),(0,L.jsxs)(l.Z,{open:n,TransitionComponent:ee,keepMounted:!0,onClose:s,maxWidth:"md",children:[(0,L.jsx)(d.Z,{style:{width:"400px"},children:(0,L.jsx)(r.Z,{color:"inherit",children:"Create New Bot"})}),(0,L.jsx)(h.Z,{children:(0,L.jsx)(u.Z,{fullWidth:!0,type:"text",id:"botName",name:"botName",onChange:e=>o(e.target.value),placeholder:"Bot Name",autoComplete:"off"})}),(0,L.jsxs)(p.Z,{children:[(0,L.jsx)(m.Z,{onClick:s,children:"Cancel"}),(0,L.jsx)(G.Z,{variant:"contained",disabled:(null===t||void 0===t?void 0:t.trim().length)<3,onClick:async()=>{try{await(0,X.lz)(t),s(),(0,q.W)(!0,"New bot added successfully","success")}catch(e){(0,q.W)(!0,"Bot already exist","error")}},children:"Create"})]})]})]})}function oe(e){let{bot:t}=e;const{_id:o,botName:n,organizationId:i}=t,[s,c]=(0,a.useState)(""),[b,g]=a.useState(!1),[f,S]=(0,a.useState)(),k=()=>{c(""),g(!1)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x.Z,{"aria-label":"edit",sx:{color:Z.Z[500]},onClick:()=>g(!0),children:(0,L.jsx)(v.Z,{})}),(0,L.jsxs)(l.Z,{open:b,TransitionComponent:ee,keepMounted:!0,onClose:k,maxWidth:"md",children:[(0,L.jsx)(d.Z,{style:{width:"400px"},children:(0,L.jsx)(r.Z,{color:"inherit",children:"Edit Bot Name"})}),(0,L.jsx)(h.Z,{children:(0,L.jsx)(u.Z,{fullWidth:!0,type:"text",id:"editBotName",name:"editBotName",defaultValue:n,onChange:e=>{""===e.target.value?S("Invalid Bot Name"):(S(""),c(e.target.value))},placeholder:"Bot Name",autoComplete:"off"})}),(0,L.jsxs)(p.Z,{children:[f&&(0,L.jsxs)("div",{style:{color:"red"},children:[" *",f," "]}),(0,L.jsx)(m.Z,{onClick:k,children:"Cancel"}),(0,L.jsx)(G.Z,{variant:"contained",disabled:(null===s||void 0===s?void 0:s.trim().length)<3,onClick:async()=>{const e={botId:o,botName:s,organizationId:i};await(0,X.Iz)(o,e),k(),(0,q.W)(!0,"Bot name updated successfully","success")},children:"Update"})]})]})]})}function ae(e){let{bot:t}=e;const{_id:o}=t,[n,i]=a.useState(!1),s=()=>{i(!1)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x.Z,{"aria-label":"delete",sx:{color:S.Z[500]},onClick:()=>{i(!0)},children:(0,L.jsx)(f.Z,{})}),(0,L.jsxs)(l.Z,{open:n,onClose:s,children:[(0,L.jsx)(d.Z,{id:"alert-dialog-title",children:(0,L.jsx)(r.Z,{gutterBottom:!0,children:"Are sure you want to delete the bot ?"})}),(0,L.jsxs)(p.Z,{children:[(0,L.jsx)(m.Z,{onClick:s,children:"Cancel"}),(0,L.jsx)(G.Z,{variant:"contained",onClick:async()=>{console.log("----delete----",o)},children:"Delete"})]})]})]})}},80730:(e,t,o)=>{o.d(t,{Od:()=>s,TY:()=>d,U2:()=>r,v_:()=>i});var a=o(89637),n=o(32203);async function r(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,o){let{headers:a,noAuth:n,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;if(t=d(t,i?void 0:o),o=o&&"object"===typeof o&&i?JSON.stringify(o):void 0,a||(a={}),a["Content-Type"]="application/json",a.Accept="application/json",!1!==n){const e=sessionStorage.getItem("token");e&&(a.Authorization="Bearer ".concat(e))}const s=await fetch(t,{...r,headers:a,body:o,method:e}),c=await s.json();if(s.ok){const{data:e,...t}=c;return delete t.status,e&&!Object.keys(t).length?e:c}throw c.message?new Error(c.message):c}const l=(0,a.lf)(n.Hi,"/");function d(e,t){if(!e)return e;const o=t&&new URLSearchParams(t);return null!==o&&void 0!==o&&o.size&&(e.includes("?")?e+="&"+o.toString():e+="?"+o.toString()),e.startsWith("https://")?e:"".concat(l).concat(e)}},45960:(e,t,o)=>{o.d(t,{Bc:()=>i,Iz:()=>s,lz:()=>r,pb:()=>c});var a=o(80730),n=o(23509);async function r(e){const{organization:{websiteUrl:t,_id:o}}=n.tN.getState(),r={organizationId:o,websiteUrl:t,botName:e,botDesign:{botLogo:{name:"",url:""},visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}},i=await a.v_("/bot/initialize-create-bot",r),s=i._id;let{botsMap:c,botsList:l}=n.tN.getState();c={...c,[s]:i},l=[...l],l.push(i._doc),n.tN.setState({selectedBotId:s,botsMap:c,botsList:l})}async function i(e,t){let{botDesign:o}=n.tN.getState();o={...o,...t};l(await a.v_("/bot/save-bot-design",{botDesign:o},{headers:{botId:e}}))}async function s(e,t){const o=await a.v_("/bot/edit-bot-details",t);let{botsMap:r,botsList:i}=n.tN.getState();r={...r,[e]:o},i=[...i];const s=i.findIndex((t=>t._id===e));s>=0&&(i[s]=o[s]),n.tN.setState({selectedBotId:e,botsMap:r,botsList:i})}async function c(e,t){let{botSettings:o={}}=n.tN.getState();o={...o,...t};l(await a.v_("/bot/save-bot-settings",{botSettings:o},{headers:{botId:e}}))}function l(e){const t=e._id;let{botsMap:o,botsList:a}=n.tN.getState();o={...o,[t]:e},a=[...a];const r=a.findIndex((e=>e._id===t));r>=0?a[r]=e:a.push(e),n.tN.setState({selectedBotId:t,botsMap:o,botsList:a})}},89637:(e,t,o)=>{function a(e,t){return e.replace(new RegExp("".concat(n(t),"+$")),"")}function n(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){const t=new Date(e),o=t.getDate(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=t.getFullYear();return"".concat(a," ").concat(o,", ").concat(n)}o.d(t,{lf:()=>a,p6:()=>r})},32203:(e,t,o)=>{o.d(t,{Hi:()=>a,LC:()=>s,lB:()=>n,rn:()=>i,yu:()=>r});const a="https://devbackend.livhousing.com",n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,s="https://60f1-203-192-224-75.ngrok-free.app"},65954:(e,t,o)=>{var a=o(64836);t.Z=void 0;var n=a(o(45045)),r=o(46417);t.Z=(0,n.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},85281:(e,t,o)=>{o.d(t,{Z:()=>A});var a=o(30168),n=o(63366),r=o(87462),i=o(47313),s=o(94146),c=o(21921),l=o(30686),d=o(91615),h=o(77342),u=o(17592),p=o(77430),m=o(32298);function b(e){return(0,m.ZP)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g,v,f,x,Z=o(46417);const S=["className","color","disableShrink","size","style","thickness","value","variant"];let k,w,y,P;const C=44,j=(0,l.F4)(k||(k=g||(g=(0,a.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),_=(0,l.F4)(w||(w=v||(v=(0,a.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),R=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["color".concat((0,d.Z)(o.color))]]}})((e=>{let{ownerState:t,theme:o}=e;return(0,r.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:o.transitions.create("transform")},"inherit"!==t.color&&{color:(o.vars||o).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,l.iv)(y||(y=f||(f=(0,a.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),j)})),N=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),E=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.circle,t["circle".concat((0,d.Z)(o.variant))],o.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:o}=e;return(0,r.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:o.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,l.iv)(P||(P=x||(x=(0,a.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),_)})),A=i.forwardRef((function(e,t){const o=(0,h.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:i="primary",disableShrink:l=!1,size:u=40,style:p,thickness:m=3.6,value:g=0,variant:v="indeterminate"}=o,f=(0,n.Z)(o,S),x=(0,r.Z)({},o,{color:i,disableShrink:l,size:u,thickness:m,value:g,variant:v}),k=(e=>{const{classes:t,variant:o,color:a,disableShrink:n}=e,r={root:["root",o,"color".concat((0,d.Z)(a))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(o)),n&&"circleDisableShrink"]};return(0,c.Z)(r,b,t)})(x),w={},y={},P={};if("determinate"===v){const e=2*Math.PI*((C-m)/2);w.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(g),w.strokeDashoffset="".concat(((100-g)/100*e).toFixed(3),"px"),y.transform="rotate(-90deg)"}return(0,Z.jsx)(R,(0,r.Z)({className:(0,s.Z)(k.root,a),style:(0,r.Z)({width:u,height:u},y,p),ownerState:x,ref:t,role:"progressbar"},P,f,{children:(0,Z.jsx)(N,{className:k.svg,ownerState:x,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,Z.jsx)(E,{className:k.circle,style:w,ownerState:x,cx:C,cy:C,r:(C-m)/2,fill:"none",strokeWidth:m})})}))}))},83929:(e,t,o)=>{o.d(t,{Z:()=>w});var a=o(63366),n=o(87462),r=o(47313),i=o(94146),s=o(21921),c=o(99008),l=o(42832),d=o(61113),h=o(91615),u=o(17592),p=o(77342),m=o(77430),b=o(32298);function g(e){return(0,b.ZP)("MuiFormControlLabel",e)}const v=(0,m.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var f=o(80300),x=o(46417);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],S=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(v.label)]:t.label},t.root,t["labelPlacement".concat((0,h.Z)(o.labelPlacement))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(v.disabled)]:{cursor:"default"}},"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(v.label)]:{["&.".concat(v.disabled)]:{color:(t.vars||t).palette.text.disabled}}})})),k=(0,u.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((e=>{let{theme:t}=e;return{["&.".concat(v.error)]:{color:(t.vars||t).palette.error.main}}})),w=r.forwardRef((function(e,t){var o,u;const m=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:b,componentsProps:v={},control:w,disabled:y,disableTypography:P,label:C,labelPlacement:j="end",required:_,slotProps:R={}}=m,N=(0,a.Z)(m,Z),E=(0,c.Z)(),A=null!=(o=null!=y?y:w.props.disabled)?o:null==E?void 0:E.disabled,I=null!=_?_:w.props.required,T={disabled:A,required:I};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof w.props[e]&&"undefined"!==typeof m[e]&&(T[e]=m[e])}));const B=(0,f.Z)({props:m,muiFormControl:E,states:["error"]}),D=(0,n.Z)({},m,{disabled:A,labelPlacement:j,required:I,error:B.error}),L=(e=>{const{classes:t,disabled:o,labelPlacement:a,error:n,required:r}=e,i={root:["root",o&&"disabled","labelPlacement".concat((0,h.Z)(a)),n&&"error",r&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,s.Z)(i,g,t)})(D),M=null!=(u=R.typography)?u:v.typography;let O=C;return null==O||O.type===d.Z||P||(O=(0,x.jsx)(d.Z,(0,n.Z)({component:"span"},M,{className:(0,i.Z)(L.label,null==M?void 0:M.className),children:O}))),(0,x.jsxs)(S,(0,n.Z)({className:(0,i.Z)(L.root,b),ownerState:D,ref:t},N,{children:[r.cloneElement(w,T),I?(0,x.jsxs)(l.Z,{display:"block",children:[O,(0,x.jsxs)(k,{ownerState:D,"aria-hidden":!0,className:L.asterisk,children:["\u2009","*"]})]}):O]}))}))},11623:(e,t,o)=>{o.d(t,{Z:()=>a});const a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}},97423:(e,t,o)=>{o.d(t,{Z:()=>Z});var a=o(63366),n=o(87462),r=o(47313),i=o(94146),s=o(21921),c=o(91615),l=o(17592),d=o(53800),h=o(99008),u=o(35272),p=o(77430),m=o(32298);function b(e){return(0,m.ZP)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=o(46417);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=(0,l.ZP)(u.Z)((e=>{let{ownerState:t}=e;return(0,n.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),x=(0,l.ZP)("input",{shouldForwardProp:l.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Z=r.forwardRef((function(e,t){const{autoFocus:o,checked:r,checkedIcon:l,className:u,defaultChecked:p,disabled:m,disableFocusRipple:Z=!1,edge:S=!1,icon:k,id:w,inputProps:y,inputRef:P,name:C,onBlur:j,onChange:_,onFocus:R,readOnly:N,required:E=!1,tabIndex:A,type:I,value:T}=e,B=(0,a.Z)(e,v),[D,L]=(0,d.Z)({controlled:r,default:Boolean(p),name:"SwitchBase",state:"checked"}),M=(0,h.Z)();let O=m;M&&"undefined"===typeof O&&(O=M.disabled);const z="checkbox"===I||"radio"===I,F=(0,n.Z)({},e,{checked:D,disabled:O,disableFocusRipple:Z,edge:S}),K=(e=>{const{classes:t,checked:o,disabled:a,edge:n}=e,r={root:["root",o&&"checked",a&&"disabled",n&&"edge".concat((0,c.Z)(n))],input:["input"]};return(0,s.Z)(r,b,t)})(F);return(0,g.jsxs)(f,(0,n.Z)({component:"span",className:(0,i.Z)(K.root,u),centerRipple:!0,focusRipple:!Z,disabled:O,tabIndex:null,role:void 0,onFocus:e=>{R&&R(e),M&&M.onFocus&&M.onFocus(e)},onBlur:e=>{j&&j(e),M&&M.onBlur&&M.onBlur(e)},ownerState:F,ref:t},B,{children:[(0,g.jsx)(x,(0,n.Z)({autoFocus:o,checked:r,defaultChecked:p,className:K.input,disabled:O,id:z?w:void 0,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;L(t),_&&_(e,t)},readOnly:N,ref:P,required:E,ownerState:F,tabIndex:A,type:I},"checkbox"===I&&void 0===T?{}:{value:T},y)),D?l:k]}))}))}}]);