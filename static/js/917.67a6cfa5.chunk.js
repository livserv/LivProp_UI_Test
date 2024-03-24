"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[917],{16491:(e,t,o)=>{o.d(t,{A:()=>x});var n=o(58168),a=o(98587),r=o(9950),i=o(72004),c=o(2199),s=o(70505),l=o(80237),p=o(7148),d=o(44414);const u=["className","component"];var m=o(41681),h=o(80376),g=o(67550);const v=(0,o(80863).A)("MuiBox",["root"]),f=(0,h.A)(),b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:o,defaultClassName:m="MuiBox-root",generateClassName:h}=e,g=(0,c.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.A);return r.forwardRef((function(e,r){const c=(0,p.A)(o),s=(0,l.A)(e),{className:v,component:f="div"}=s,b=(0,a.A)(s,u);return(0,d.jsx)(g,(0,n.A)({as:f,ref:r,className:(0,i.A)(v,h?h(m):m),theme:t&&c[t]||c},b))}))}({themeId:g.A,defaultTheme:f,defaultClassName:v.root,generateClassName:m.A.generate}),x=b},10226:(e,t,o)=>{o.d(t,{A:()=>C});var n=o(98587),a=o(58168),r=o(9950),i=o(72004),c=o(57661),s=o(74061),l=o(99269),p=o(59254),d=o(19608),u=o(48283),m=o(8079),h=o(61676),g=o(80863),v=o(68483);function f(e){return(0,v.Ay)("MuiButton",e)}const b=(0,g.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const x=r.createContext({});const y=r.createContext(void 0);var A=o(44414);const S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=e=>(0,a.A)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,p.Ay)(m.A,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.A)(o.color))],t["size".concat((0,h.A)(o.size))],t["".concat(o.variant,"Size").concat((0,h.A)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:o}=e;var n,r;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],c="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,a.A)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,a.A)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.X4)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.X4)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat((t.vars||t).palette[o.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.X4)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:c,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}),"&:active":(0,a.A)({},"contained"===o.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(b.focusVisible)]:(0,a.A)({},"contained"===o.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(b.disabled)]:(0,a.A)({color:(t.vars||t).palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"contained"===o.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[o.color].mainChannel," / 0.5)"):"1px solid ".concat((0,l.X4)(t.palette[o.color].main,.5))},"contained"===o.variant&&{color:t.vars?t.vars.palette.text.primary:null==(n=(r=t.palette).getContrastText)?void 0:n.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(b.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(b.disabled)]:{boxShadow:"none"}}})),z=(0,p.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t["iconSize".concat((0,h.A)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,a.A)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},w(t))})),W=(0,p.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t["iconSize".concat((0,h.A)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,a.A)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},w(t))})),C=r.forwardRef((function(e,t){const o=r.useContext(x),l=r.useContext(y),p=(0,c.A)(o,e),d=(0,u.A)({props:p,name:"MuiButton"}),{children:m,color:g="primary",component:v="button",className:b,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:N=!1,endIcon:M,focusVisibleClassName:R,fullWidth:I=!1,size:B="medium",startIcon:T,type:E,variant:j="text"}=d,O=(0,n.A)(d,S),L=(0,a.A)({},d,{color:g,component:v,disabled:w,disableElevation:C,disableFocusRipple:N,fullWidth:I,size:B,type:E,variant:j}),_=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:r,variant:i,classes:c}=e,l={root:["root",i,"".concat(i).concat((0,h.A)(t)),"size".concat((0,h.A)(r)),"".concat(i,"Size").concat((0,h.A)(r)),"color".concat((0,h.A)(t)),o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon","iconSize".concat((0,h.A)(r))],endIcon:["icon","endIcon","iconSize".concat((0,h.A)(r))]},p=(0,s.A)(l,f,c);return(0,a.A)({},c,p)})(L),F=T&&(0,A.jsx)(z,{className:_.startIcon,ownerState:L,children:T}),P=M&&(0,A.jsx)(W,{className:_.endIcon,ownerState:L,children:M}),G=l||"";return(0,A.jsxs)(k,(0,a.A)({ownerState:L,className:(0,i.A)(o.className,_.root,b,G),component:v,disabled:w,focusRipple:!N,focusVisibleClassName:(0,i.A)(_.focusVisible,R),ref:t,type:E},O,{classes:_,children:[F,m,P]}))}))},60899:(e,t,o)=>{o.d(t,{Ay:()=>W});var n=o(98587),a=o(58168),r=o(9950),i=o(72004),c=o(28286),s=o(80237),l=o(74061),p=o(59254),d=o(48283),u=o(14857);const m=r.createContext();var h=o(80863),g=o(68483);function v(e){return(0,g.Ay)("MuiGrid",e)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,h.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>"spacing-xs-".concat(e))),...["column-reverse","column","row-reverse","row"].map((e=>"direction-xs-".concat(e))),...["nowrap","wrap-reverse","wrap"].map((e=>"wrap-xs-".concat(e))),...f.map((e=>"grid-xs-".concat(e))),...f.map((e=>"grid-sm-".concat(e))),...f.map((e=>"grid-md-".concat(e))),...f.map((e=>"grid-lg-".concat(e))),...f.map((e=>"grid-xl-".concat(e)))]);var x=o(44414);const y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function A(e){const t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function S(e){let{breakpoints:t,values:o}=e,n="";Object.keys(o).forEach((e=>{""===n&&0!==o[e]&&(n=e)}));const a=Object.keys(t).sort(((e,o)=>t[e]-t[o]));return a.slice(0,a.indexOf(n))}const w=(0,p.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:n,direction:a,item:r,spacing:i,wrap:c,zeroMinWidth:s,breakpoints:l}=o;let p=[];n&&(p=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[o["spacing-xs-".concat(String(e))]];const n=[];return t.forEach((t=>{const a=e[t];Number(a)>0&&n.push(o["spacing-".concat(t,"-").concat(String(a))])})),n}(i,l,t));const d=[];return l.forEach((e=>{const n=o[e];n&&d.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,n&&t.container,r&&t.item,s&&t.zeroMinWidth,...p,"row"!==a&&t["direction-xs-".concat(String(a))],"wrap"!==c&&t["wrap-xs-".concat(String(c))],...d]}})((e=>{let{ownerState:t}=e;return(0,a.A)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){let{theme:t,ownerState:o}=e;const n=(0,c.kW)({values:o.direction,breakpoints:t.breakpoints.values});return(0,c.NI)({theme:t},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(b.item)]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:o}=e;const{container:n,rowSpacing:a}=o;let r={};if(n&&0!==a){const e=(0,c.kW)({values:a,breakpoints:t.breakpoints.values});let o;"object"===typeof e&&(o=S({breakpoints:t.breakpoints.values,values:e})),r=(0,c.NI)({theme:t},e,((e,n)=>{var a;const r=t.spacing(e);return"0px"!==r?{marginTop:"-".concat(A(r)),["& > .".concat(b.item)]:{paddingTop:A(r)}}:null!=(a=o)&&a.includes(n)?{}:{marginTop:0,["& > .".concat(b.item)]:{paddingTop:0}}}))}return r}),(function(e){let{theme:t,ownerState:o}=e;const{container:n,columnSpacing:a}=o;let r={};if(n&&0!==a){const e=(0,c.kW)({values:a,breakpoints:t.breakpoints.values});let o;"object"===typeof e&&(o=S({breakpoints:t.breakpoints.values,values:e})),r=(0,c.NI)({theme:t},e,((e,n)=>{var a;const r=t.spacing(e);return"0px"!==r?{width:"calc(100% + ".concat(A(r),")"),marginLeft:"-".concat(A(r)),["& > .".concat(b.item)]:{paddingLeft:A(r)}}:null!=(a=o)&&a.includes(n)?{}:{width:"100%",marginLeft:0,["& > .".concat(b.item)]:{paddingLeft:0}}}))}return r}),(function(e){let t,{theme:o,ownerState:n}=e;return o.breakpoints.keys.reduce(((e,r)=>{let i={};if(n[r]&&(t=n[r]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.kW)({values:n.columns,breakpoints:o.breakpoints.values}),l="object"===typeof s?s[r]:s;if(void 0===l||null===l)return e;const p="".concat(Math.round(t/l*1e8)/1e6,"%");let d={};if(n.container&&n.item&&0!==n.columnSpacing){const e=o.spacing(n.columnSpacing);if("0px"!==e){const t="calc(".concat(p," + ").concat(A(e),")");d={flexBasis:t,maxWidth:t}}}i=(0,a.A)({flexBasis:p,flexGrow:0,maxWidth:p},d)}return 0===o.breakpoints.values[r]?Object.assign(e,i):e[o.breakpoints.up(r)]=i,e}),{})}));const k=e=>{const{classes:t,container:o,direction:n,item:a,spacing:r,wrap:i,zeroMinWidth:c,breakpoints:s}=e;let p=[];o&&(p=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];const o=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e="spacing-".concat(t,"-").concat(String(n));o.push(e)}})),o}(r,s));const d=[];s.forEach((t=>{const o=e[t];o&&d.push("grid-".concat(t,"-").concat(String(o)))}));const u={root:["root",o&&"container",a&&"item",c&&"zeroMinWidth",...p,"row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==i&&"wrap-xs-".concat(String(i)),...d]};return(0,l.A)(u,v,t)},z=r.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiGrid"}),{breakpoints:c}=(0,u.A)(),l=(0,s.A)(o),{className:p,columns:h,columnSpacing:g,component:v="div",container:f=!1,direction:b="row",item:A=!1,rowSpacing:S,spacing:z=0,wrap:W="wrap",zeroMinWidth:C=!1}=l,N=(0,n.A)(l,y),M=S||z,R=g||z,I=r.useContext(m),B=f?h||12:I,T={},E=(0,a.A)({},N);c.keys.forEach((e=>{null!=N[e]&&(T[e]=N[e],delete E[e])}));const j=(0,a.A)({},l,{columns:B,container:f,direction:b,item:A,rowSpacing:M,columnSpacing:R,wrap:W,zeroMinWidth:C,spacing:z},T,{breakpoints:c.keys}),O=k(j);return(0,x.jsx)(m.Provider,{value:B,children:(0,x.jsx)(w,(0,a.A)({ownerState:j,className:(0,i.A)(O.root,p),as:v,ref:t},E))})}));const W=z},93230:(e,t,o)=>{o.d(t,{A:()=>W});var n=o(98587),a=o(58168),r=o(9950),i=o(72004),c=o(66455),s=o(68483),l=o(74061),p=o(70146),d=o(62161),u=o(80237),m=o(12860),h=o(28286),g=o(47937),v=o(44414);const f=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,m.A)(),x=(0,p.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,d.A)({props:e,name:"MuiStack",defaultTheme:b})}function A(e,t){const o=r.Children.toArray(e).filter(Boolean);return o.reduce(((e,n,a)=>(e.push(n),a<o.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(a)})),e)),[])}const S=e=>{let{ownerState:t,theme:o}=e,n=(0,a.A)({display:"flex",flexDirection:"column"},(0,h.NI)({theme:o},(0,h.kW)({values:t.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,g.LX)(o),a=Object.keys(o.breakpoints.values).reduce(((e,o)=>(("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e)),{}),r=(0,h.kW)({values:t.direction,base:a}),i=(0,h.kW)({values:t.spacing,base:a});"object"===typeof r&&Object.keys(r).forEach(((e,t,o)=>{if(!r[e]){const n=t>0?r[o[t-1]]:"column";r[e]=n}}));const s=(o,n)=>{return t.useFlexGap?{gap:(0,g._W)(e,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((a=n?r[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]))]:(0,g._W)(e,o)}};var a};n=(0,c.A)(n,(0,h.NI)({theme:o},i,s))}return n=(0,h.iZ)(o.breakpoints,n),n};var w=o(59254),k=o(48283);const z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=x,useThemeProps:o=y,componentName:c="MuiStack"}=e,p=t(S),d=r.forwardRef((function(e,t){const r=o(e),d=(0,u.A)(r),{component:m="div",direction:h="column",spacing:g=0,divider:b,children:x,className:y,useFlexGap:S=!1}=d,w=(0,n.A)(d,f),k={direction:h,spacing:g,useFlexGap:S},z=(0,l.A)({root:["root"]},(e=>(0,s.Ay)(c,e)),{});return(0,v.jsx)(p,(0,a.A)({as:m,ownerState:k,ref:t,className:(0,i.A)(z.root,y)},w,{children:b?A(x,b):x}))}));return d}({createStyledComponent:(0,w.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,k.A)({props:e,name:"MuiStack"})}),W=z},82053:(e,t,o)=>{o.d(t,{A:()=>y});var n=o(98587),a=o(58168),r=o(9950),i=o(72004),c=o(80237),s=o(74061),l=o(59254),p=o(48283),d=o(61676),u=o(80863),m=o(68483);function h(e){return(0,m.Ay)("MuiTypography",e)}(0,u.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=o(44414);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],"inherit"!==o.align&&t["align".concat((0,d.A)(o.align))],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({margin:0},"inherit"===o.variant&&{font:"inherit"},"inherit"!==o.variant&&t.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=r.forwardRef((function(e,t){const o=(0,p.A)({props:e,name:"MuiTypography"}),r=(e=>x[e]||e)(o.color),l=(0,c.A)((0,a.A)({},o,{color:r})),{align:u="inherit",className:m,component:y,gutterBottom:A=!1,noWrap:S=!1,paragraph:w=!1,variant:k="body1",variantMapping:z=b}=l,W=(0,n.A)(l,v),C=(0,a.A)({},l,{align:u,color:r,className:m,component:y,gutterBottom:A,noWrap:S,paragraph:w,variant:k,variantMapping:z}),N=y||(w?"p":z[k]||b[k])||"span",M=(e=>{const{align:t,gutterBottom:o,noWrap:n,paragraph:a,variant:r,classes:i}=e,c={root:["root",r,"inherit"!==e.align&&"align".concat((0,d.A)(t)),o&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,s.A)(c,h,i)})(C);return(0,g.jsx)(f,(0,a.A)({as:N,ref:t,ownerState:C,className:(0,i.A)(M.root,m)},W))}))},70146:(e,t,o)=>{o.d(t,{A:()=>b});var n=o(58168),a=o(98587),r=o(2199),i=o(66455),c=o(12860),s=o(70505);const l=["ownerState"],p=["variants"],d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function u(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const m=(0,c.A)(),h=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function g(e){let{defaultTheme:t,theme:o,themeId:n}=e;return a=o,0===Object.keys(a).length?t:o[n]||o;var a}function v(e){return e?(t,o)=>o[e]:null}function f(e,t){let{ownerState:o}=t,r=(0,a.A)(t,l);const i="function"===typeof e?e((0,n.A)({ownerState:o},r)):e;if(Array.isArray(i))return i.flatMap((e=>f(e,(0,n.A)({ownerState:o},r))));if(i&&"object"===typeof i&&Array.isArray(i.variants)){const{variants:e=[]}=i;let t=(0,a.A)(i,p);return e.forEach((e=>{let a=!0;"function"===typeof e.props?a=e.props((0,n.A)({ownerState:o},r,o)):Object.keys(e.props).forEach((t=>{(null==o?void 0:o[t])!==e.props[t]&&r[t]!==e.props[t]&&(a=!1)})),a&&(Array.isArray(t)||(t=[t]),t.push("function"===typeof e.style?e.style((0,n.A)({ownerState:o},r,o)):e.style))})),t}return i}const b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:o=m,rootShouldForwardProp:c=u,slotShouldForwardProp:l=u}=e,p=e=>(0,s.A)((0,n.A)({},e,{theme:g((0,n.A)({},e,{defaultTheme:o,themeId:t}))}));return p.__mui_systemSx=!0,function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,r.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:m,slot:b,skipVariantsResolver:x,skipSx:y,overridesResolver:A=v(h(b))}=s,S=(0,a.A)(s,d),w=void 0!==x?x:b&&"Root"!==b&&"root"!==b||!1,k=y||!1;let z=u;"Root"===b||"root"===b?z=c:b?z=l:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(z=void 0);const W=(0,r.default)(e,(0,n.A)({shouldForwardProp:z,label:undefined},S)),C=e=>"function"===typeof e&&e.__emotion_real!==e||(0,i.Q)(e)?a=>f(e,(0,n.A)({},a,{theme:g({theme:a.theme,defaultTheme:o,themeId:t})})):e,N=function(a){let r=C(a);for(var i=arguments.length,c=new Array(i>1?i-1:0),s=1;s<i;s++)c[s-1]=arguments[s];const l=c?c.map(C):[];m&&A&&l.push((e=>{const a=g((0,n.A)({},e,{defaultTheme:o,themeId:t}));if(!a.components||!a.components[m]||!a.components[m].styleOverrides)return null;const r=a.components[m].styleOverrides,i={};return Object.entries(r).forEach((t=>{let[o,r]=t;i[o]=f(r,(0,n.A)({},e,{theme:a}))})),A(e,i)})),m&&!w&&l.push((e=>{var a;const r=g((0,n.A)({},e,{defaultTheme:o,themeId:t}));return f({variants:null==r||null==(a=r.components)||null==(a=a[m])?void 0:a.variants},(0,n.A)({},e,{theme:r}))})),k||l.push(p);const d=l.length-c.length;if(Array.isArray(a)&&d>0){const e=new Array(d).fill("");r=[...a,...e],r.raw=[...a.raw,...e]}const u=W(r,...l);return e.muiName&&(u.muiName=e.muiName),u};return W.withConfig&&(N.withConfig=W.withConfig),N}}()}}]);