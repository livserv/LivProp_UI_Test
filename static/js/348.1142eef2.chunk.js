(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[348],{31685:(e,t,n)=>{"use strict";n.d(t,{d:()=>s});var o=n(47313),r=n(71577),i=n(76182),l=n(42504),a=n(46417);function c(e){return e.substring(2).toLowerCase()}function s(e){const{children:t,disableReactTree:n=!1,mouseEvent:s="onClick",onClickAway:d,touchEvent:u="onTouchEnd"}=e,p=o.useRef(!1),h=o.useRef(null),m=o.useRef(!1),f=o.useRef(!1);o.useEffect((()=>(setTimeout((()=>{m.current=!0}),0),()=>{m.current=!1})),[]);const v=(0,r.Z)(t.ref,h),b=(0,i.Z)((e=>{const t=f.current;f.current=!1;const o=(0,l.Z)(h.current);if(!m.current||!h.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,o))return;if(p.current)return void(p.current=!1);let r;r=e.composedPath?e.composedPath().indexOf(h.current)>-1:!o.documentElement.contains(e.target)||h.current.contains(e.target),r||!n&&t||d(e)})),Z=e=>n=>{f.current=!0;const o=t.props[e];o&&o(n)},g={ref:v};return!1!==u&&(g[u]=Z(u)),o.useEffect((()=>{if(!1!==u){const e=c(u),t=(0,l.Z)(h.current),n=()=>{p.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,u]),!1!==s&&(g[s]=Z(s)),o.useEffect((()=>{if(!1!==s){const e=c(s),t=(0,l.Z)(h.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,s]),(0,a.jsx)(o.Fragment,{children:o.cloneElement(t,g)})}},11198:(e,t,n)=>{"use strict";var o=n(64836);t.Z=void 0;var r=o(n(45045)),i=n(46417),l=(0,r.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=l},45045:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(28095)},44758:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var o=n(63366),r=n(87462),i=n(47313),l=n(94146),a=n(21921),c=n(17551),s=n(97423),d=n(81171),u=n(46417);const p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var f=n(91615),v=n(77342),b=n(17592),Z=n(77430),g=n(32298);function x(e){return(0,g.Z)("MuiCheckbox",e)}const C=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],z=(0,b.ZP)(s.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t["size".concat((0,f.Z)(n.size))],"default"!==n.color&&t["color".concat((0,f.Z)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.Z)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(C.checked,", &.").concat(C.indeterminate)]:{color:(t.vars||t).palette[n.color].main},["&.".concat(C.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),w=(0,u.jsx)(h,{}),R=(0,u.jsx)(p,{}),E=(0,u.jsx)(m,{}),k=i.forwardRef((function(e,t){var n,c;const s=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=w,color:p="primary",icon:h=R,indeterminate:m=!1,indeterminateIcon:b=E,inputProps:Z,size:g="medium",className:C}=s,k=(0,o.Z)(s,y),S=m?b:h,P=m?b:d,I=(0,r.Z)({},s,{color:p,indeterminate:m,size:g}),F=(e=>{const{classes:t,indeterminate:n,color:o,size:i}=e,l={root:["root",n&&"indeterminate","color".concat((0,f.Z)(o)),"size".concat((0,f.Z)(i))]},c=(0,a.Z)(l,x,t);return(0,r.Z)({},t,c)})(I);return(0,u.jsx)(z,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":m},Z),icon:i.cloneElement(S,{fontSize:null!=(n=S.props.fontSize)?n:g}),checkedIcon:i.cloneElement(P,{fontSize:null!=(c=P.props.fontSize)?c:g}),ownerState:I,ref:t,className:(0,l.Z)(F.root,C)},k,{classes:F}))}))},1550:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(63366),r=n(87462),i=n(47313),l=n(94146),a=n(21921),c=n(77342),s=n(17592),d=n(96837),u=n(91615),p=n(27816),h=n(91397),m=n(77430),f=n(32298);function v(e){return(0,f.Z)("MuiFormControl",e)}(0,m.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var b=n(46417);const Z=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],g=(0,s.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return(0,r.Z)({},t.root,t["margin".concat((0,u.Z)(n.margin))],n.fullWidth&&t.fullWidth)}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),x=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiFormControl"}),{children:s,className:m,color:f="primary",component:x="div",disabled:C=!1,error:y=!1,focused:z,fullWidth:w=!1,hiddenLabel:R=!1,margin:E="none",required:k=!1,size:S="medium",variant:P="outlined"}=n,I=(0,o.Z)(n,Z),F=(0,r.Z)({},n,{color:f,component:x,disabled:C,error:y,fullWidth:w,hiddenLabel:R,margin:E,required:k,size:S,variant:P}),M=(e=>{const{classes:t,margin:n,fullWidth:o}=e,r={root:["root","none"!==n&&"margin".concat((0,u.Z)(n)),o&&"fullWidth"]};return(0,a.Z)(r,v,t)})(F),[j,B]=i.useState((()=>{let e=!1;return s&&i.Children.forEach(s,(t=>{if(!(0,p.Z)(t,["Input","Select"]))return;const n=(0,p.Z)(t,["Select"])?t.props.input:t;n&&(0,d.B7)(n.props)&&(e=!0)})),e})),[T,D]=i.useState((()=>{let e=!1;return s&&i.Children.forEach(s,(t=>{(0,p.Z)(t,["Input","Select"])&&((0,d.vd)(t.props,!0)||(0,d.vd)(t.props.inputProps,!0))&&(e=!0)})),e})),[O,A]=i.useState(!1);C&&O&&A(!1);const W=void 0===z||C?O:z;let N;const L=i.useMemo((()=>({adornedStart:j,setAdornedStart:B,color:f,disabled:C,error:y,filled:T,focused:W,fullWidth:w,hiddenLabel:R,size:S,onBlur:()=>{A(!1)},onEmpty:()=>{D(!1)},onFilled:()=>{D(!0)},onFocus:()=>{A(!0)},registerEffect:N,required:k,variant:P})),[j,f,C,y,T,W,w,R,N,k,S,P]);return(0,b.jsx)(h.Z.Provider,{value:L,children:(0,b.jsx)(g,(0,r.Z)({as:x,ownerState:F,className:(0,l.Z)(M.root,m),ref:t},I,{children:s}))})}))},47131:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(63366),r=n(87462),i=n(47313),l=n(94146),a=n(21921),c=n(17551),s=n(17592),d=n(77342),u=n(35272),p=n(91615),h=n(77430),m=n(32298);function f(e){return(0,m.Z)("MuiIconButton",e)}const v=(0,h.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var b=n(46417);const Z=["edge","children","className","color","disabled","disableFocusRipple","size"],g=(0,s.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t["color".concat((0,p.Z)(n.color))],n.edge&&t["edge".concat((0,p.Z)(n.edge))],t["size".concat((0,p.Z)(n.size))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(e=>{let{theme:t,ownerState:n}=e;var o;const i=null==(o=(t.vars||t).palette)?void 0:o[n.color];return(0,r.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,r.Z)({color:null==i?void 0:i.main},!n.disableRipple&&{"&:hover":(0,r.Z)({},i&&{backgroundColor:t.vars?"rgba(".concat(i.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(i.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{["&.".concat(v.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})})),x=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:c,className:s,color:u="default",disabled:h=!1,disableFocusRipple:m=!1,size:v="medium"}=n,x=(0,o.Z)(n,Z),C=(0,r.Z)({},n,{edge:i,color:u,disabled:h,disableFocusRipple:m,size:v}),y=(e=>{const{classes:t,disabled:n,color:o,edge:r,size:i}=e,l={root:["root",n&&"disabled","default"!==o&&"color".concat((0,p.Z)(o)),r&&"edge".concat((0,p.Z)(r)),"size".concat((0,p.Z)(i))]};return(0,a.Z)(l,f,t)})(C);return(0,b.jsx)(g,(0,r.Z)({className:(0,l.Z)(y.root,s),centerRipple:!0,focusRipple:!m,disabled:h,ref:t,ownerState:C},x,{children:c}))}))},24631:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var o=n(87462),r=n(63366),i=n(47313),l=n(94146),a=n(21921),c=n(28334),s=n(17592),d=n(77342),u=n(42461),p=n(47482),h=n(37843),m=n(23306),f=n(1550),v=n(15480),b=n(24256),Z=n(77430),g=n(32298);function x(e){return(0,g.Z)("MuiTextField",e)}(0,Z.Z)("MuiTextField",["root"]);var C=n(46417);const y=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],z={standard:u.Z,filled:p.Z,outlined:h.Z},w=(0,s.ZP)(f.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),R=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiTextField"}),{autoComplete:i,autoFocus:s=!1,children:u,className:p,color:h="primary",defaultValue:f,disabled:Z=!1,error:g=!1,FormHelperTextProps:R,fullWidth:E=!1,helperText:k,id:S,InputLabelProps:P,inputProps:I,InputProps:F,inputRef:M,label:j,maxRows:B,minRows:T,multiline:D=!1,name:O,onBlur:A,onChange:W,onFocus:N,placeholder:L,required:_=!1,rows:q,select:V=!1,SelectProps:H,type:K,value:X,variant:Y="outlined"}=n,G=(0,r.Z)(n,y),J=(0,o.Z)({},n,{autoFocus:s,color:h,disabled:Z,error:g,fullWidth:E,multiline:D,required:_,select:V,variant:Y}),Q=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},x,t)})(J);const U={};"outlined"===Y&&(P&&"undefined"!==typeof P.shrink&&(U.notched=P.shrink),U.label=j),V&&(H&&H.native||(U.id=void 0),U["aria-describedby"]=void 0);const $=(0,c.Z)(S),ee=k&&$?"".concat($,"-helper-text"):void 0,te=j&&$?"".concat($,"-label"):void 0,ne=z[Y],oe=(0,C.jsx)(ne,(0,o.Z)({"aria-describedby":ee,autoComplete:i,autoFocus:s,defaultValue:f,fullWidth:E,multiline:D,name:O,rows:q,maxRows:B,minRows:T,type:K,value:X,id:$,inputRef:M,onBlur:A,onChange:W,onFocus:N,placeholder:L,inputProps:I},U,F));return(0,C.jsxs)(w,(0,o.Z)({className:(0,l.Z)(Q.root,p),disabled:Z,error:g,fullWidth:E,ref:t,required:_,color:h,variant:Y,ownerState:J},G,{children:[null!=j&&""!==j&&(0,C.jsx)(m.Z,(0,o.Z)({htmlFor:$,id:te},P,{children:j})),V?(0,C.jsx)(b.Z,(0,o.Z)({"aria-describedby":ee,id:$,labelId:te,value:X,input:oe},H,{children:u})):oe,k&&(0,C.jsx)(v.Z,(0,o.Z)({id:ee},R,{children:k}))]}))}))},28095:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>r.Z,createChainedFunction:()=>i.Z,createSvgIcon:()=>l.Z,debounce:()=>a.Z,deprecatedPropType:()=>c,isMuiElement:()=>s.Z,ownerDocument:()=>d.Z,ownerWindow:()=>u.Z,requirePropFactory:()=>p,setRef:()=>h,unstable_ClassNameGenerator:()=>C,unstable_useEnhancedEffect:()=>m.Z,unstable_useId:()=>f.Z,unsupportedProp:()=>v,useControlled:()=>b.Z,useEventCallback:()=>Z.Z,useForkRef:()=>g.Z,useIsFocusVisible:()=>x.Z});var o=n(41271),r=n(91615),i=n(85038),l=n(81171),a=n(88706);const c=function(e,t){return()=>null};var s=n(27816),d=n(6106),u=n(23533);n(87462);const p=function(e,t){return()=>null};const h=n(89265).Z;var m=n(24993),f=n(17677);const v=function(e,t,n,o,r){return null};var b=n(84951),Z=n(73236),g=n(86983),x=n(59127);const C={configure:e=>{o.Z.configure(e)}}},46676:(e,t,n)=>{"use strict";n.d(t,{V:()=>z});var o,r=n(30168),i=n(46417),l=n(47313),a=n(66212),c=n(17592),s=n(11198),d=n(31685),u=n(47131),p=n(24631);const h={enter:"Enter",backspace:"Backspace"},m=229,f={ChipStyled:(0,c.ZP)(a.Z)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n\n    &[aria-disabled="true"] > svg {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ").concat(t.palette.primary.light,";\n      color: ").concat(t.palette.primary.contrastText,";\n    }\n  ")}))},v=e=>{let{className:t,index:n,onDelete:o,disabled:r,onEdit:l,isEditing:a,disableEdition:c,...s}=e;return(0,i.jsx)(f.ChipStyled,{className:"MuiChipsInput-Chip ".concat(a?"MuiChipsInput-Chip-Editing":""," ").concat(t||""),onKeyDown:e=>{e.key===h.enter&&o(n)},disabled:r,onDoubleClick:c?void 0:e=>{e.target.textContent===s.label&&(r||l(n))},tabIndex:r?-1:0,"aria-disabled":r,onDelete:e=>{var t,r;null!==e&&void 0!==e&&null!==(t=e.preventDefault)&&void 0!==t&&t.call(e),null!==e&&void 0!==e&&null!==(r=e.stopPropagation)&&void 0!==r&&r.call(e),o(n)},...s})};function b(e,t){"function"==typeof t?t(e):t&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)&&"current"in t&&(t.current=e)}const Z=(0,c.ZP)("div")(o||(o=(0,r.Z)(["\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  position: absolute;\n"]))),g=(0,c.ZP)(p.Z)((e=>{var t;return"\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ".concat("small"===e.size?"5px":"9px",";\n      padding-right: ").concat(null!==(t=e.InputProps)&&void 0!==t&&t.endAdornment?"30px":"9px",";\n      padding-bottom: ").concat("small"===e.size?"5px":"9px",";\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ").concat("small"===e.size?"3.5px 4px":"7.5px 4px",";\n        align-self: center;\n      }\n    }\n  ")})),x={ChipStyled:(0,c.ZP)(a.Z)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n  ")})),TextFieldStyled:g,EndAdornmentClose:Z},C=l.forwardRef(((e,t)=>{let{chips:n,onAddChip:o,onEditChip:r,onDeleteChip:a,InputProps:c,onInputChange:p,disabled:f,clearInputOnBlur:Z,addOnBlur:g,validate:C,error:y,helperText:z,hideClearAll:w,inputProps:R,size:E,disableDeleteOnBackspace:k,disableEdition:S,className:P,renderChip:I,addOnWhichKey:F,onFocus:M,onDeleteAllChips:j,inputRef:B,inputValue:T,...D}=e;const[O,A]=l.useState(""),[W,N]=l.useState(""),L=l.useRef(null),_=l.useRef(!1),q=l.useRef("string"==typeof T),[V,H]=l.useState(null),{onKeyDown:K,...X}=R||{},{inputRef:Y,...G}=c||{},J=()=>{N("")},Q=q.current,U=Q?T:O,$=e=>{null!==p&&void 0!==p&&p(e),Q||A(e)},ee=()=>{H(null)},te=()=>{J(),$("")},ne=(e,t)=>n=>{if("function"==typeof C){const n=C(e);if(!1===n)return void(null===t||void 0===t||t.preventDefault());if(!function(e){return"boolean"==typeof e}(n)&&n.isError)return null!==t&&void 0!==t&&t.preventDefault(),void N(n.textError)}n()},oe=(e,t,n)=>{ne(e,n)((()=>{null!==r&&void 0!==r&&r(e,t),ee(),te()}))},re=(e,t)=>{ne(e,t)((()=>{null!==o&&void 0!==o&&o(U.trim()),te()}))},ie=()=>{if(_.current){if(null!==V)ee(),te();else if(g){if(U.length>0){const e=U.trim();0===e.length?te():null!==V?oe(e,V):re(e)}}else Z&&te();_.current=!1}},le=e=>{var t;e===V?(te(),ee()):(e=>{$(n[e]),H(e),J()})(e),null===(t=L.current)||void 0===t||t.focus()},ae=e=>{f||(null!==a&&void 0!==a&&a(e),null!==V&&(ee(),te()))},ce=n.length>0;return(0,i.jsx)(d.d,{onClickAway:ie,children:(0,i.jsx)(x.TextFieldStyled,{value:U,onChange:e=>{$(e.target.value)},ref:t,className:"MuiChipsInput-TextField ".concat(P||""),size:E,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),null!==M&&void 0!==M&&M(e),_.current=!0},inputProps:{onKeyDown:e=>{const t=((e,t)=>t!==m&&(F?Array.isArray(F)?F.some((t=>t===e)):F===e:e===h.enter))(e.key,e.keyCode),o=e.key===h.backspace,r=U.trim();if(t||"Tab"!==e.code){if(t&&e.preventDefault(),U.length>0&&t)0===r.length?te():null!==V?oe(r,V,e):re(r,e);else if(o&&0===U.length&&n.length>0&&!k){const e=n.length-1;null!==a&&void 0!==a&&a(e),V===e&&ee()}null===K||void 0===K||K(e)}else ie()},...X},disabled:f,error:!!W||y,helperText:W||z,InputProps:{inputRef:e=>{L.current=e,B&&b(e,B),t&&b(e,t)},startAdornment:ce?n.map(((e,t)=>{const n="chip-".concat(t),o={index:t,onEdit:le,label:e,title:e,isEditing:t===V,size:E,disabled:f,disableEdition:S,onDelete:ae};return I?I(v,n,o):(0,l.createElement)(v,{...o,key:n})})):null,endAdornment:w?null:(0,i.jsx)(x.EndAdornmentClose,{style:{visibility:ce?"visible":"hidden"},children:(0,i.jsx)(u.Z,{"aria-label":"Clear",title:"Clear",disabled:f,size:"small",onClick:e=>{e.preventDefault(),!w&&!f&&(null!==j&&void 0!==j&&j(),te(),ee())},children:(0,i.jsx)(s.Z,{fontSize:"small"})})}),...G},...D})})}));const y=[],z=l.forwardRef(((e,t)=>{let{value:n=y,onChange:o,onAddChip:r,onInputChange:l,onDeleteChip:a,disabled:c,validate:s,clearInputOnBlur:d,addOnBlur:u,hideClearAll:p,disableDeleteOnBackspace:m,onEditChip:f,renderChip:v,disableEdition:b,addOnWhichKey:Z=h.enter,inputValue:g,...x}=e;return(0,i.jsx)(C,{chips:n,onAddChip:e=>{if(c)return;const t=function(e,t){return[...e,t]}(n,e),i=t.length-1;null!==r&&void 0!==r&&r(e,i),null===o||void 0===o||o(t)},onInputChange:l,disableDeleteOnBackspace:m,onDeleteChip:e=>{if(c)return;const t=n[e];null!==o&&void 0!==o&&o(function(e,t){return e.filter(((e,n)=>t!==n))}(n,e)),null===a||void 0===a||a(t,e)},onEditChip:(e,t)=>{c||b||(null!==o&&void 0!==o&&o(function(e,t,n){return e.map(((e,o)=>t===o?n:e))}(n,t,e)),null===f||void 0===f||f(e,t))},renderChip:v,onDeleteAllChips:()=>{null===o||void 0===o||o([])},clearInputOnBlur:d,addOnBlur:u,disabled:c,disableEdition:b,validate:s,inputValue:g,hideClearAll:p,addOnWhichKey:Z,...x,ref:t})}))},64836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);