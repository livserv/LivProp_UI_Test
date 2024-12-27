"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[5015],{79526:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(75865)},63464:(e,o,r)=>{r.d(o,{A:()=>P});var t=r(98587),a=r(58168),n=r(9950),i=r(72004),l=r(88465),c=r(93539),s=r(61676),p=r(66633),d=r(57191),u=r(2235),A=r(18463),m=r(59254),h=r(1763),x=r(423);function b(e){return(0,x.Ay)("MuiDialog",e)}const f=(0,h.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var v=r(5536),g=r(55158),W=r(14857),k=r(44414);const y=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=(0,m.Ay)(g.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),w=(0,m.Ay)(p.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),C=(0,m.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.container,o["scroll".concat((0,s.A)(r.scroll))]]}})((e=>{let{ownerState:o}=e;return(0,a.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=(0,m.Ay)(u.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.paper,o["scrollPaper".concat((0,s.A)(r.scroll))],o["paperWidth".concat((0,s.A)(String(r.maxWidth)))],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((e=>{let{theme:o,ownerState:r}=e;return(0,a.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"max(".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit,", 444px)"),["&.".concat(f.paperScrollBody)]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:"".concat(o.breakpoints.values[r.maxWidth]).concat(o.breakpoints.unit),["&.".concat(f.paperScrollBody)]:{[o.breakpoints.down(o.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(f.paperScrollBody)]:{margin:0,maxWidth:"100%"}})})),P=n.forwardRef((function(e,o){const r=(0,A.b)({props:e,name:"MuiDialog"}),p=(0,W.A)(),m={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{"aria-describedby":h,"aria-labelledby":x,BackdropComponent:f,BackdropProps:g,children:P,className:M,disableEscapeKeyDown:B=!1,fullScreen:R=!1,fullWidth:F=!1,maxWidth:T="sm",onBackdropClick:N,onClick:j,onClose:_,open:E,PaperComponent:I=u.A,PaperProps:K={},scroll:X="paper",TransitionComponent:Y=d.A,transitionDuration:z=m,TransitionProps:H}=r,O=(0,t.A)(r,y),q=(0,a.A)({},r,{disableEscapeKeyDown:B,fullScreen:R,fullWidth:F,maxWidth:T,scroll:X}),G=(e=>{const{classes:o,scroll:r,maxWidth:t,fullWidth:a,fullScreen:n}=e,i={root:["root"],container:["container","scroll".concat((0,s.A)(r))],paper:["paper","paperScroll".concat((0,s.A)(r)),"paperWidth".concat((0,s.A)(String(t))),a&&"paperFullWidth",n&&"paperFullScreen"]};return(0,l.A)(i,b,o)})(q),L=n.useRef(),V=(0,c.A)(x),J=n.useMemo((()=>({titleId:V})),[V]);return(0,k.jsx)(w,(0,a.A)({className:(0,i.A)(G.root,M),closeAfterTransition:!0,components:{Backdrop:S},componentsProps:{backdrop:(0,a.A)({transitionDuration:z,as:f},g)},disableEscapeKeyDown:B,onClose:_,open:E,ref:o,onClick:e=>{j&&j(e),L.current&&(L.current=null,N&&N(e),_&&_(e,"backdropClick"))},ownerState:q},O,{children:(0,k.jsx)(Y,(0,a.A)({appear:!0,in:E,timeout:z,role:"presentation"},H,{children:(0,k.jsx)(C,{className:(0,i.A)(G.container),onMouseDown:e=>{L.current=e.target===e.currentTarget},ownerState:q,children:(0,k.jsx)(D,(0,a.A)({as:I,elevation:24,role:"dialog","aria-describedby":h,"aria-labelledby":V},K,{className:(0,i.A)(G.paper,K.className),ownerState:q,children:(0,k.jsx)(v.A.Provider,{value:J,children:P})}))})}))}))}))},5536:(e,o,r)=>{r.d(o,{A:()=>t});const t=r(9950).createContext({})},40033:(e,o,r)=>{r.d(o,{A:()=>x});var t=r(58168),a=r(98587),n=r(9950),i=r(72004),l=r(88465),c=r(82053),s=r(59254),p=r(18463),d=r(23025),u=r(5536),A=r(44414);const m=["className","id"],h=(0,s.Ay)(c.A,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),x=n.forwardRef((function(e,o){const r=(0,p.b)({props:e,name:"MuiDialogTitle"}),{className:c,id:s}=r,x=(0,a.A)(r,m),b=r,f=(e=>{const{classes:o}=e;return(0,l.A)({root:["root"]},d.t,o)})(b),{titleId:v=s}=n.useContext(u.A);return(0,A.jsx)(h,(0,t.A)({component:"h2",className:(0,i.A)(f.root,c),ownerState:b,ref:o,variant:"h6",id:null!=s?s:v},x))}))},23025:(e,o,r)=>{r.d(o,{A:()=>i,t:()=>n});var t=r(1763),a=r(423);function n(e){return(0,a.Ay)("MuiDialogTitle",e)}const i=(0,t.A)("MuiDialogTitle",["root"])},25920:(e,o,r)=>{r.d(o,{A:()=>t});const t=r(85511).A},75865:(e,o,r)=>{r.r(o),r.d(o,{capitalize:()=>a.A,createChainedFunction:()=>n.A,createSvgIcon:()=>i.A,debounce:()=>l.A,deprecatedPropType:()=>c,isMuiElement:()=>s.A,ownerDocument:()=>p.A,ownerWindow:()=>d.A,requirePropFactory:()=>u,setRef:()=>A,unstable_ClassNameGenerator:()=>W,unstable_useEnhancedEffect:()=>m.A,unstable_useId:()=>h.A,unsupportedProp:()=>x,useControlled:()=>b.A,useEventCallback:()=>f.A,useForkRef:()=>v.A,useIsFocusVisible:()=>g.A});var t=r(44501),a=r(61676),n=r(25920),i=r(23235),l=r(21209);const c=function(e,o){return()=>null};var s=r(3828),p=r(27402),d=r(70827);r(58168);const u=function(e,o){return()=>null};const A=r(75587).A;var m=r(79044),h=r(31014);const x=function(e,o,r,t,a){return null};var b=r(48733),f=r(1976),v=r(31506),g=r(32937);const W={configure:e=>{t.A.configure(e)}}},31014:(e,o,r)=>{r.d(o,{A:()=>t});const t=r(93539).A}}]);