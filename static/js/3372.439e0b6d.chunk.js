"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[3372],{16497:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(98587),o=a(58168),l=a(9950),n=a(72004),c=a(88465),i=a(39766),s=a(81616),d=a(82053),p=a(61676),m=a(59254),h=a(18463),u=a(1763),b=a(423);function g(e){return(0,b.Ay)("MuiFormControlLabel",e)}const v=(0,u.A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var k=a(68624),w=a(44414);const A=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],y=(0,m.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{["& .".concat(v.label)]:t.label},t.root,t["labelPlacement".concat((0,p.A)(a.labelPlacement))]]}})(e=>{let{theme:t,ownerState:a}=e;return(0,o.A)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(v.disabled)]:{cursor:"default"}},"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(v.label)]:{["&.".concat(v.disabled)]:{color:(t.vars||t).palette.text.disabled}}})}),f=(0,m.Ay)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(e=>{let{theme:t}=e;return{["&.".concat(v.error)]:{color:(t.vars||t).palette.error.main}}}),x=l.forwardRef(function(e,t){var a,m;const u=(0,h.b)({props:e,name:"MuiFormControlLabel"}),{className:b,componentsProps:v={},control:x,disabled:S,disableTypography:C,label:P,labelPlacement:R="end",required:z,slotProps:M={}}=u,N=(0,r.A)(u,A),j=(0,i.A)(),L=null!=(a=null!=S?S:x.props.disabled)?a:null==j?void 0:j.disabled,B=null!=z?z:x.props.required,q={disabled:L,required:B};["checked","name","onChange","value","inputRef"].forEach(e=>{"undefined"===typeof x.props[e]&&"undefined"!==typeof u[e]&&(q[e]=u[e])});const T=(0,k.A)({props:u,muiFormControl:j,states:["error"]}),D=(0,o.A)({},u,{disabled:L,labelPlacement:R,required:B,error:T.error}),F=(e=>{const{classes:t,disabled:a,labelPlacement:r,error:o,required:l}=e,n={root:["root",a&&"disabled","labelPlacement".concat((0,p.A)(r)),o&&"error",l&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,c.A)(n,g,t)})(D),I=null!=(m=M.typography)?m:v.typography;let O=P;return null==O||O.type===d.A||C||(O=(0,w.jsx)(d.A,(0,o.A)({component:"span"},I,{className:(0,n.A)(F.label,null==I?void 0:I.className),children:O}))),(0,w.jsxs)(y,(0,o.A)({className:(0,n.A)(F.root,b),ownerState:D,ref:t},N,{children:[l.cloneElement(x,q),B?(0,w.jsxs)(s.A,{display:"block",children:[O,(0,w.jsxs)(f,{ownerState:D,"aria-hidden":!0,className:F.asterisk,children:["\u2009","*"]})]}):O]}))})},37324:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(98587),o=a(58168),l=a(9950),n=a(72004),c=a(88465),i=a(9240),s=a(61676),d=a(46282),p=a(59254),m=a(18463),h=a(1763),u=a(423);function b(e){return(0,u.Ay)("MuiSwitch",e)}const g=(0,h.A)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var v=a(44414);const k=["className","color","edge","size","sx"],w=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t["edge".concat((0,s.A)(a.edge))],t["size".concat((0,s.A)(a.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,["& .".concat(g.thumb)]:{width:16,height:16},["& .".concat(g.switchBase)]:{padding:4,["&.".concat(g.checked)]:{transform:"translateX(16px)"}}}}]}),A=(0,p.Ay)(d.A,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{["& .".concat(g.input)]:t.input},"default"!==a.color&&t["color".concat((0,s.A)(a.color))]]}})(e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat("light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),["&.".concat(g.checked)]:{transform:"translateX(20px)"},["&.".concat(g.disabled)]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat("light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600])},["&.".concat(g.checked," + .").concat(g.track)]:{opacity:.5},["&.".concat(g.disabled," + .").concat(g.track)]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat("light"===t.palette.mode?.12:.2)},["& .".concat(g.input)]:{left:"-100%",width:"300%"}}},e=>{let{theme:t}=e;return{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[a]=e;return{props:{color:a},style:{["&.".concat(g.checked)]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.X4)(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(g.disabled)]:{color:t.vars?t.vars.palette.Switch["".concat(a,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,i.a)(t.palette[a].main,.62):(0,i.e$)(t.palette[a].main,.55))}},["&.".concat(g.checked," + .").concat(g.track)]:{backgroundColor:(t.vars||t).palette[a].main}}}})]}}),y=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}}),f=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}),x=l.forwardRef(function(e,t){const a=(0,m.b)({props:e,name:"MuiSwitch"}),{className:l,color:i="primary",edge:d=!1,size:p="medium",sx:h}=a,u=(0,r.A)(a,k),g=(0,o.A)({},a,{color:i,edge:d,size:p}),x=(e=>{const{classes:t,edge:a,size:r,color:l,checked:n,disabled:i}=e,d={root:["root",a&&"edge".concat((0,s.A)(a)),"size".concat((0,s.A)(r))],switchBase:["switchBase","color".concat((0,s.A)(l)),n&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=(0,c.A)(d,b,t);return(0,o.A)({},t,p)})(g),S=(0,v.jsx)(f,{className:x.thumb,ownerState:g});return(0,v.jsxs)(w,{className:(0,n.A)(x.root,l),sx:h,ownerState:g,children:[(0,v.jsx)(A,(0,o.A)({type:"checkbox",icon:S,checkedIcon:S,ref:t,ownerState:g},u,{classes:(0,o.A)({},x,{root:x.switchBase})})),(0,v.jsx)(y,{className:x.track,ownerState:g})]})})}}]);