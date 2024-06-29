"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[7888],{57988:(e,o,t)=>{var n=t(24994);o.A=void 0;var r=n(t(79526)),a=t(44414);o.A=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},79739:(e,o,t)=>{t.d(o,{A:()=>h});var n=t(98587),r=t(58168),a=t(9950),i=t(72004),s=t(74061),c=t(59254),l=t(48283),d=t(80863),p=t(68483);function u(e){return(0,p.Ay)("MuiDialogActions",e)}(0,d.A)("MuiDialogActions",["root","spacing"]);var m=t(44414);const f=["className","disableSpacing"],A=(0,c.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})((e=>{let{ownerState:o}=e;return(0,r.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),h=a.forwardRef((function(e,o){const t=(0,l.A)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:c=!1}=t,d=(0,n.A)(t,f),p=(0,r.A)({},t,{disableSpacing:c}),h=(e=>{const{classes:o,disableSpacing:t}=e,n={root:["root",!t&&"spacing"]};return(0,s.A)(n,u,o)})(p);return(0,m.jsx)(A,(0,r.A)({className:(0,i.A)(h.root,a),ownerState:p,ref:o},d))}))},52472:(e,o,t)=>{t.d(o,{A:()=>y});var n=t(98587),r=t(58168),a=t(9950),i=t(72004),s=t(74061),c=t(8079),l=t(61676),d=t(48283),p=t(80863),u=t(68483);function m(e){return(0,u.Ay)("MuiFab",e)}const f=(0,p.A)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var A=t(59254),h=t(19608),b=t(44414);const v=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],g=(0,A.Ay)(c.A,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,h.A)(e)||"classes"===e,overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o["size".concat((0,l.A)(t.size))],"inherit"===t.color&&o.colorInherit,o[(0,l.A)(t.size)],o[t.color]]}})((e=>{let{theme:o,ownerState:t}=e;var n,a;return(0,r.A)({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:null==(n=(a=o.palette).getContrastText)?void 0:n.call(a,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},["&.".concat(f.focusVisible)]:{boxShadow:(o.vars||o).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})}),(e=>{let{theme:o,ownerState:t}=e;return(0,r.A)({},"inherit"!==t.color&&"default"!==t.color&&null!=(o.vars||o).palette[t.color]&&{color:(o.vars||o).palette[t.color].contrastText,backgroundColor:(o.vars||o).palette[t.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[t.color].main}}})}),(e=>{let{theme:o}=e;return{["&.".concat(f.disabled)]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}})),y=a.forwardRef((function(e,o){const t=(0,d.A)({props:e,name:"MuiFab"}),{children:a,className:c,color:p="default",component:u="button",disabled:f=!1,disableFocusRipple:A=!1,focusVisibleClassName:h,size:y="large",variant:x="circular"}=t,w=(0,n.A)(t,v),S=(0,r.A)({},t,{color:p,component:u,disabled:f,disableFocusRipple:A,size:y,variant:x}),D=(e=>{const{color:o,variant:t,classes:n,size:a}=e,i={root:["root",t,"size".concat((0,l.A)(a)),"inherit"===o?"colorInherit":o]},c=(0,s.A)(i,m,n);return(0,r.A)({},n,c)})(S);return(0,b.jsx)(g,(0,r.A)({className:(0,i.A)(D.root,c),component:u,disabled:f,focusRipple:!A,focusVisibleClassName:(0,i.A)(D.focusVisible,h),ownerState:S,ref:o},w,{classes:D,children:a}))}))},80417:(e,o,t)=>{t.d(o,{A:()=>P});var n=t(98587),r=t(58168),a=t(9950),i=(t(26429),t(72004)),s=t(74061),c=t(74522),l=t(68935),d=t(59254),p=t(48283),u=t(14857),m=t(32448),f=t(70576),A=t(31506),h=t(44414);const b=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],v={entering:{transform:"none"},entered:{transform:"none"}},g=a.forwardRef((function(e,o){const t=(0,u.A)(),i={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:s,appear:c=!0,children:l,easing:d,in:p,onEnter:g,onEntered:y,onEntering:x,onExit:w,onExited:S,onExiting:D,style:C,timeout:E=i,TransitionComponent:R=m.Ay}=e,I=(0,n.A)(e,b),M=a.useRef(null),T=(0,A.A)(M,l.ref,o),k=e=>o=>{if(e){const t=M.current;void 0===o?e(t):e(t,o)}},N=k(x),z=k(((e,o)=>{(0,f.q)(e);const n=(0,f.c)({style:C,timeout:E,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("transform",n),e.style.transition=t.transitions.create("transform",n),g&&g(e,o)})),L=k(y),P=k(D),F=k((e=>{const o=(0,f.c)({style:C,timeout:E,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("transform",o),e.style.transition=t.transitions.create("transform",o),w&&w(e)})),O=k(S);return(0,h.jsx)(R,(0,r.A)({appear:c,in:p,nodeRef:M,onEnter:z,onEntered:L,onEntering:N,onExit:F,onExited:O,onExiting:P,addEndListener:e=>{s&&s(M.current,e)},timeout:E},I,{children:(e,o)=>a.cloneElement(l,(0,r.A)({style:(0,r.A)({transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden"},v[e],C,l.props.style),ref:T},o))}))}));var y=t(52472),x=t(61676),w=t(60096),S=t(48733),D=t(80863),C=t(68483);function E(e){return(0,C.Ay)("MuiSpeedDial",e)}const R=(0,D.A)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),I=["ref"],M=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],T=["ref"];function k(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const N=(0,d.Ay)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o["direction".concat((0,x.A)(t.direction))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,r.A)({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===t.direction&&{flexDirection:"column-reverse",["& .".concat(R.actions)]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===t.direction&&{flexDirection:"column",["& .".concat(R.actions)]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===t.direction&&{flexDirection:"row-reverse",["& .".concat(R.actions)]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===t.direction&&{flexDirection:"row",["& .".concat(R.actions)]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}})})),z=(0,d.Ay)(y.A,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})((()=>({pointerEvents:"auto"}))),L=(0,d.Ay)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.actions,!t.open&&o.actionsClosed]}})((e=>{let{ownerState:o}=e;return(0,r.A)({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),P=a.forwardRef((function(e,o){const t=(0,p.A)({props:e,name:"MuiSpeedDial"}),d=(0,u.A)(),m={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{ariaLabel:f,FabProps:{ref:b}={},children:v,className:y,direction:D="up",hidden:C=!1,icon:R,onBlur:P,onClose:F,onFocus:O,onKeyDown:j,onMouseEnter:V,onMouseLeave:B,onOpen:W,open:H,TransitionComponent:K=g,transitionDuration:_=m,TransitionProps:q}=t,U=(0,n.A)(t.FabProps,I),G=(0,n.A)(t,M),[J,Q]=(0,S.A)({controlled:H,default:!1,name:"SpeedDial",state:"open"}),X=(0,r.A)({},t,{open:J,direction:D}),Y=(e=>{const{classes:o,open:t,direction:n}=e,r={root:["root","direction".concat((0,x.A)(n))],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return(0,s.A)(r,E,o)})(X),Z=(0,c.A)(),$=a.useRef(0),ee=a.useRef(),oe=a.useRef([]);oe.current=[oe.current[0]];const te=a.useCallback((e=>{oe.current[0]=e}),[]),ne=(0,A.A)(b,te),re=(e,o)=>t=>{oe.current[e+1]=t,o&&o(t)};a.useEffect((()=>{J||($.current=0,ee.current=void 0)}),[J]);const ae=e=>{"mouseleave"===e.type&&B&&B(e),"blur"===e.type&&P&&P(e),Z.clear(),"blur"===e.type?Z.start(0,(()=>{Q(!1),F&&F(e,"blur")})):(Q(!1),F&&F(e,"mouseLeave"))},ie=e=>{"mouseenter"===e.type&&V&&V(e),"focus"===e.type&&O&&O(e),Z.clear(),J||Z.start(0,(()=>{if(Q(!0),W){W(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}}))},se=f.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ce=a.Children.toArray(v).filter((e=>a.isValidElement(e))),le=ce.map(((e,o)=>{const t=e.props,{FabProps:{ref:i}={},tooltipPlacement:s}=t,c=(0,n.A)(t.FabProps,T),l=s||("vertical"===k(D)?"left":"top");return a.cloneElement(e,{FabProps:(0,r.A)({},c,{ref:re(o,i)}),delay:30*(J?o:ce.length-o),open:J,tooltipPlacement:l,id:"".concat(se,"-action-").concat(o)})}));return(0,h.jsxs)(N,(0,r.A)({className:(0,i.A)(Y.root,y),ref:o,role:"presentation",onKeyDown:e=>{j&&j(e);const o=e.key.replace("Arrow","").toLowerCase(),{current:t=o}=ee;if("Escape"===e.key)return Q(!1),oe.current[0].focus(),void(F&&F(e,"escapeKeyDown"));if(k(o)===k(t)&&void 0!==k(o)){e.preventDefault();const n=o===t?1:-1,r=(0,l.A)($.current+n,0,oe.current.length-1);oe.current[r].focus(),$.current=r,ee.current=t}},onBlur:ae,onFocus:ie,onMouseEnter:ie,onMouseLeave:ae,ownerState:X},G,{children:[(0,h.jsx)(K,(0,r.A)({in:!C,timeout:_,unmountOnExit:!0},q,{children:(0,h.jsx)(z,(0,r.A)({color:"primary","aria-label":f,"aria-haspopup":"true","aria-expanded":J,"aria-controls":"".concat(se,"-actions")},U,{onClick:e=>{U.onClick&&U.onClick(e),Z.clear(),J?(Q(!1),F&&F(e,"toggle")):(Q(!0),W&&W(e,"toggle"))},className:(0,i.A)(Y.fab,U.className),ref:ne,ownerState:X,children:a.isValidElement(R)&&(0,w.A)(R,["SpeedDialIcon"])?a.cloneElement(R,{open:J}):R}))})),(0,h.jsx)(L,{id:"".concat(se,"-actions"),role:"menu","aria-orientation":k(D),className:(0,i.A)(Y.actions,!J&&Y.actionsClosed),ownerState:X,children:le})]}))}))},33092:(e,o,t)=>{t.d(o,{A:()=>S});var n=t(98587),r=t(58168),a=t(9950),i=t(72004),s=t(74061),c=t(99269),l=t(59254),d=t(48283),p=t(52472),u=t(53065),m=t(61676),f=t(80863),A=t(68483);function h(e){return(0,A.Ay)("MuiSpeedDialAction",e)}const b=(0,f.A)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]);var v=t(44414);const g=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],y=(0,l.Ay)(p.A,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.fab,!t.open&&o.fabClosed]}})((e=>{let{theme:o,ownerState:t}=e;return(0,r.A)({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:(0,c.tL)(o.palette.background.paper,.15)},transition:"".concat(o.transitions.create("transform",{duration:o.transitions.duration.shorter}),", opacity 0.8s"),opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})})),x=(0,l.Ay)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.staticTooltip,!t.open&&o.staticTooltipClosed,o["tooltipPlacement".concat((0,m.A)(t.tooltipPlacement))]]}})((e=>{let{theme:o,ownerState:t}=e;return{position:"relative",display:"flex",alignItems:"center",["& .".concat(b.staticTooltipLabel)]:(0,r.A)({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},"left"===t.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===t.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})}})),w=(0,l.Ay)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,o)=>o.staticTooltipLabel})((e=>{let{theme:o}=e;return(0,r.A)({position:"absolute"},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})})),S=a.forwardRef((function(e,o){const t=(0,d.A)({props:e,name:"MuiSpeedDialAction"}),{className:c,delay:l=0,FabProps:p={},icon:f,id:A,open:b,TooltipClasses:S,tooltipOpen:D=!1,tooltipPlacement:C="left",tooltipTitle:E}=t,R=(0,n.A)(t,g),I=(0,r.A)({},t,{tooltipPlacement:C}),M=(e=>{const{open:o,tooltipPlacement:t,classes:n}=e,r={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip","tooltipPlacement".concat((0,m.A)(t)),!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,s.A)(r,h,n)})(I),[T,k]=a.useState(D),N={transitionDelay:"".concat(l,"ms")},z=(0,v.jsx)(y,(0,r.A)({size:"small",className:(0,i.A)(M.fab,c),tabIndex:-1,role:"menuitem",ownerState:I},p,{style:(0,r.A)({},N,p.style),children:f}));return D?(0,v.jsxs)(x,(0,r.A)({id:A,ref:o,className:M.staticTooltip,ownerState:I},R,{children:[(0,v.jsx)(w,{style:N,id:"".concat(A,"-label"),className:M.staticTooltipLabel,ownerState:I,children:E}),a.cloneElement(z,{"aria-labelledby":"".concat(A,"-label")})]})):(!b&&T&&k(!1),(0,v.jsx)(u.A,(0,r.A)({id:A,ref:o,title:E,placement:C,onClose:()=>{k(!1)},onOpen:()=>{k(!0)},open:b&&T,classes:S},R,{children:z})))}))},79046:(e,o,t)=>{t.d(o,{A:()=>y});var n=t(98587),r=t(58168),a=t(9950),i=t(72004),s=t(74061),c=t(59254),l=t(48283),d=t(23235),p=t(44414);const u=(0,d.A)((0,p.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");var m=t(80863),f=t(68483);function A(e){return(0,f.Ay)("MuiSpeedDialIcon",e)}const h=(0,m.A)("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),b=["className","icon","open","openIcon"],v=(0,c.Ay)("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{["& .".concat(h.icon)]:o.icon},{["& .".concat(h.icon)]:t.open&&o.iconOpen},{["& .".concat(h.icon)]:t.open&&t.openIcon&&o.iconWithOpenIconOpen},{["& .".concat(h.openIcon)]:o.openIcon},{["& .".concat(h.openIcon)]:t.open&&o.openIconOpen},o.root]}})((e=>{let{theme:o,ownerState:t}=e;return{height:24,["& .".concat(h.icon)]:(0,r.A)({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},t.open&&(0,r.A)({transform:"rotate(45deg)"},t.openIcon&&{opacity:0})),["& .".concat(h.openIcon)]:(0,r.A)({position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},t.open&&{transform:"rotate(0deg)",opacity:1})}})),g=a.forwardRef((function(e,o){const t=(0,l.A)({props:e,name:"MuiSpeedDialIcon"}),{className:c,icon:d,openIcon:m}=t,f=(0,n.A)(t,b),h=t,g=(e=>{const{classes:o,open:t,openIcon:n}=e,r={root:["root"],icon:["icon",t&&"iconOpen",n&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]};return(0,s.A)(r,A,o)})(h);function y(e,o){return a.isValidElement(e)?a.cloneElement(e,{className:o}):e}return(0,p.jsxs)(v,(0,r.A)({className:(0,i.A)(g.root,c),ref:o,ownerState:h},f,{children:[m?y(m,g.openIcon):null,d?y(d,g.icon):(0,p.jsx)(u,{className:g.icon})]}))}));g.muiName="SpeedDialIcon";const y=g}}]);