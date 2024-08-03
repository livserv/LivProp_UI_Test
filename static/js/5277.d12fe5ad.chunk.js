"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[5277],{25277:(e,a,o)=>{o.d(a,{A:()=>I});var t=o(98587),l=o(58168),r=o(9950),n=o(72004),i=o(88465),c=o(99269),s=o(23235),d=o(44414);const p=(0,s.A)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var v=o(31506),m=o(61676),u=o(8079),b=o(18463),g=o(59254),$=o(1763),h=o(423);function C(e){return(0,h.Ay)("MuiChip",e)}const y=(0,$.A)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),f=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],A=(0,g.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e,{color:t,iconColor:l,clickable:r,onDelete:n,size:i,variant:c}=o;return[{[`& .${y.avatar}`]:a.avatar},{[`& .${y.avatar}`]:a[`avatar${(0,m.A)(i)}`]},{[`& .${y.avatar}`]:a[`avatarColor${(0,m.A)(t)}`]},{[`& .${y.icon}`]:a.icon},{[`& .${y.icon}`]:a[`icon${(0,m.A)(i)}`]},{[`& .${y.icon}`]:a[`iconColor${(0,m.A)(l)}`]},{[`& .${y.deleteIcon}`]:a.deleteIcon},{[`& .${y.deleteIcon}`]:a[`deleteIcon${(0,m.A)(i)}`]},{[`& .${y.deleteIcon}`]:a[`deleteIconColor${(0,m.A)(t)}`]},{[`& .${y.deleteIcon}`]:a[`deleteIcon${(0,m.A)(c)}Color${(0,m.A)(t)}`]},a.root,a[`size${(0,m.A)(i)}`],a[`color${(0,m.A)(t)}`],r&&a.clickable,r&&"default"!==t&&a[`clickableColor${(0,m.A)(t)})`],n&&a.deletable,n&&"default"!==t&&a[`deletableColor${(0,m.A)(t)}`],a[c],a[`${c}${(0,m.A)(t)}`]]}})((e=>{let{theme:a,ownerState:o}=e;const t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return(0,l.A)({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${y.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${y.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},[`& .${y.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${y.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${y.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${y.icon}`]:(0,l.A)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,l.A)({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},"default"!==o.color&&{color:"inherit"})),[`& .${y.deleteIcon}`]:(0,l.A)({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:(0,c.X4)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:(0,c.X4)(a.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:(0,c.X4)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${y.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:(0,c.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${y.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,l.A)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:(0,c.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${y.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:(0,c.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${y.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,l.A)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${y.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${y.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${y.avatar}`]:{marginLeft:4},[`& .${y.avatarSmall}`]:{marginLeft:2},[`& .${y.icon}`]:{marginLeft:4},[`& .${y.iconSmall}`]:{marginLeft:2},[`& .${y.deleteIcon}`]:{marginRight:5},[`& .${y.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:(0,c.X4)(a.palette[o.color].main,.7)}`,[`&.${y.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,c.X4)(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${y.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:(0,c.X4)(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${y.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:(0,c.X4)(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})})),k=(0,g.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:o}=e,{size:t}=o;return[a.label,a[`label${(0,m.A)(t)}`]]}})((e=>{let{ownerState:a}=e;return(0,l.A)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===a.variant&&{paddingLeft:11,paddingRight:11},"small"===a.size&&{paddingLeft:8,paddingRight:8},"small"===a.size&&"outlined"===a.variant&&{paddingLeft:7,paddingRight:7})}));function S(e){return"Backspace"===e.key||"Delete"===e.key}const I=r.forwardRef((function(e,a){const o=(0,b.b)({props:e,name:"MuiChip"}),{avatar:c,className:s,clickable:g,color:$="default",component:h,deleteIcon:y,disabled:I=!1,icon:x,label:w,onClick:z,onDelete:R,onKeyDown:O,onKeyUp:D,size:L="medium",variant:T="filled",tabIndex:V,skipFocusWhenDisabled:N=!1}=o,P=(0,t.A)(o,f),M=r.useRef(null),E=(0,v.A)(M,a),X=e=>{e.stopPropagation(),R&&R(e)},F=!(!1===g||!z)||g,K=F||R?u.A:h||"div",W=(0,l.A)({},o,{component:K,disabled:I,size:L,color:$,iconColor:r.isValidElement(x)&&x.props.color||$,onDelete:!!R,clickable:F,variant:T}),j=(e=>{const{classes:a,disabled:o,size:t,color:l,iconColor:r,onDelete:n,clickable:c,variant:s}=e,d={root:["root",s,o&&"disabled",`size${(0,m.A)(t)}`,`color${(0,m.A)(l)}`,c&&"clickable",c&&`clickableColor${(0,m.A)(l)}`,n&&"deletable",n&&`deletableColor${(0,m.A)(l)}`,`${s}${(0,m.A)(l)}`],label:["label",`label${(0,m.A)(t)}`],avatar:["avatar",`avatar${(0,m.A)(t)}`,`avatarColor${(0,m.A)(l)}`],icon:["icon",`icon${(0,m.A)(t)}`,`iconColor${(0,m.A)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.A)(t)}`,`deleteIconColor${(0,m.A)(l)}`,`deleteIcon${(0,m.A)(s)}Color${(0,m.A)(l)}`]};return(0,i.A)(d,C,a)})(W),_=K===u.A?(0,l.A)({component:h||"div",focusVisibleClassName:j.focusVisible},R&&{disableRipple:!0}):{};let U=null;R&&(U=y&&r.isValidElement(y)?r.cloneElement(y,{className:(0,n.A)(y.props.className,j.deleteIcon),onClick:X}):(0,d.jsx)(p,{className:(0,n.A)(j.deleteIcon),onClick:X}));let B=null;c&&r.isValidElement(c)&&(B=r.cloneElement(c,{className:(0,n.A)(j.avatar,c.props.className)}));let H=null;return x&&r.isValidElement(x)&&(H=r.cloneElement(x,{className:(0,n.A)(j.icon,x.props.className)})),(0,d.jsxs)(A,(0,l.A)({as:K,className:(0,n.A)(j.root,s),disabled:!(!F||!I)||void 0,onClick:z,onKeyDown:e=>{e.currentTarget===e.target&&S(e)&&e.preventDefault(),O&&O(e)},onKeyUp:e=>{e.currentTarget===e.target&&(R&&S(e)?R(e):"Escape"===e.key&&M.current&&M.current.blur()),D&&D(e)},ref:E,tabIndex:N&&I?-1:V,ownerState:W},_,P,{children:[B||H,(0,d.jsx)(k,{className:(0,n.A)(j.label),ownerState:W,children:w}),U]}))}))}}]);