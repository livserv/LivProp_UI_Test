"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[973],{18678:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(93701),r=n(46417);function a(e){let{children:t,type:n}=e;return(0,r.jsx)(o.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},6505:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(47313),r=n(19860),a=n(73428),i=n(54641),l=n(61113),s=n(93405),d=n(46417);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:u,content:p=!0,contentSX:h={},darkTitle:m,elevation:x,secondary:f,shadow:v,sx:g={},title:b,...Z}=e;const C=(0,r.Z)();return o="dark"===C.palette.mode?o||!0:o,(0,d.jsxs)(a.Z,{elevation:x||0,ref:t,...Z,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===C.palette.mode?C.palette.divider:C.palette.grey.A800,boxShadow:!o||n&&"dark"!==C.palette.mode?"inherit":v||C.customShadows.z1,":hover":{boxShadow:o?v||C.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:C.typography.fontFamily,fontSize:"0.75rem"},...g},children:[!m&&b&&(0,d.jsx)(i.Z,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:b,action:f}),m&&b&&(0,d.jsx)(i.Z,{sx:c,title:(0,d.jsx)(l.Z,{variant:"h3",children:b}),action:f}),p&&(0,d.jsx)(s.Z,{sx:h,children:u}),!p&&u]})}))},94100:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(47313),r=n(31095),a=n(85281),i=n(46417);const l=function(e){let{onClick:t,disabled:n,isLoading:l,children:s,...d}=e;const[c,u]=o.useState(l);return(0,i.jsxs)(r.Z,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:c||l||n,...d,children:[(c||l)&&(0,i.jsx)(a.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},45973:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var o=n(47313),r=n(41806),a=n(9019),i=n(19536),l=n(61113),s=n(42832),d=n(23306),c=n(55685),u=n(83929),p=n(74268),h=n(63366),m=n(87462),x=n(94146),f=n(21921),v=n(17551),g=n(97423),b=n(81171),Z=n(46417);const C=(0,b.Z)((0,Z.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),y=(0,b.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),w=(0,b.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var P=n(91615),j=n(77342),S=n(17592),k=n(77430),E=n(32298);function A(e){return(0,E.ZP)("MuiCheckbox",e)}const N=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],_=(0,S.ZP)(g.Z,{shouldForwardProp:e=>(0,S.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t["size".concat((0,P.Z)(n.size))],"default"!==n.color&&t["color".concat((0,P.Z)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,m.Z)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,v.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(N.checked,", &.").concat(N.indeterminate)]:{color:(t.vars||t).palette[n.color].main},["&.".concat(N.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),R=(0,Z.jsx)(y,{}),T=(0,Z.jsx)(C,{}),M=(0,Z.jsx)(w,{}),z=o.forwardRef((function(e,t){var n,r;const a=(0,j.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:i=R,color:l="primary",icon:s=T,indeterminate:d=!1,indeterminateIcon:c=M,inputProps:u,size:p="medium",className:v}=a,g=(0,h.Z)(a,I),b=d?c:s,C=d?c:i,y=(0,m.Z)({},a,{color:l,indeterminate:d,size:p}),w=(e=>{const{classes:t,indeterminate:n,color:o,size:r}=e,a={root:["root",n&&"indeterminate","color".concat((0,P.Z)(o)),"size".concat((0,P.Z)(r))]},i=(0,f.Z)(a,A,t);return(0,m.Z)({},t,i)})(y);return(0,Z.jsx)(_,(0,m.Z)({type:"checkbox",inputProps:(0,m.Z)({"data-indeterminate":d},u),icon:o.cloneElement(b,{fontSize:null!=(n=b.props.fontSize)?n:p}),checkedIcon:o.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:p}),ownerState:y,ref:t,className:(0,x.Z)(w.root,v)},g,{classes:w}))}));var F,O=n(15480),D=n(49914),B=n(30168),K=n(66212),L=n(11198),H=n(31685),W=n(47131),V=n(24631);const U={enter:"Enter",backspace:"Backspace"},q=229,G={ChipStyled:(0,S.ZP)(K.Z)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n\n    &[aria-disabled="true"] > svg {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ").concat(t.palette.primary.light,";\n      color: ").concat(t.palette.primary.contrastText,";\n    }\n  ")}))},J=e=>{let{className:t,index:n,onDelete:o,disabled:r,onEdit:a,isEditing:i,disableEdition:l,...s}=e;return(0,Z.jsx)(G.ChipStyled,{className:"MuiChipsInput-Chip ".concat(i?"MuiChipsInput-Chip-Editing":""," ").concat(t||""),onKeyDown:e=>{e.key===U.enter&&o(n)},disabled:r,onDoubleClick:l?void 0:e=>{e.target.textContent===s.label&&(r||a(n))},tabIndex:r?-1:0,"aria-disabled":r,onDelete:e=>{var t,r;null!==e&&void 0!==e&&null!==(t=e.preventDefault)&&void 0!==t&&t.call(e),null!==e&&void 0!==e&&null!==(r=e.stopPropagation)&&void 0!==r&&r.call(e),o(n)},...s})};function Y(e,t){"function"==typeof t?t(e):t&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)&&"current"in t&&(t.current=e)}const X=(0,S.ZP)("div")(F||(F=(0,B.Z)(["\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  position: absolute;\n"]))),$=(0,S.ZP)(V.Z)((e=>{var t;return"\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ".concat("small"===e.size?"5px":"9px",";\n      padding-right: ").concat(null!==(t=e.InputProps)&&void 0!==t&&t.endAdornment?"30px":"9px",";\n      padding-bottom: ").concat("small"===e.size?"5px":"9px",";\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ").concat("small"===e.size?"3.5px 4px":"7.5px 4px",";\n        align-self: center;\n      }\n    }\n  ")})),Q={ChipStyled:(0,S.ZP)(K.Z)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n  ")})),TextFieldStyled:$,EndAdornmentClose:X},ee=o.forwardRef(((e,t)=>{let{chips:n,onAddChip:r,onEditChip:a,onDeleteChip:i,InputProps:l,onInputChange:s,disabled:d,clearInputOnBlur:c,addOnBlur:u,validate:p,error:h,helperText:m,hideClearAll:x,inputProps:f,size:v,disableDeleteOnBackspace:g,disableEdition:b,className:C,renderChip:y,addOnWhichKey:w,onFocus:P,onDeleteAllChips:j,inputRef:S,inputValue:k,...E}=e;const[A,N]=o.useState(""),[I,_]=o.useState(""),R=o.useRef(null),T=o.useRef(!1),M=o.useRef("string"==typeof k),[z,F]=o.useState(null),{onKeyDown:O,...D}=f||{},{inputRef:B,...K}=l||{},V=()=>{_("")},G=M.current,X=G?k:A,$=e=>{null!==s&&void 0!==s&&s(e),G||N(e)},ee=()=>{F(null)},te=()=>{V(),$("")},ne=(e,t)=>n=>{if("function"==typeof p){const n=p(e);if(!1===n)return void(null===t||void 0===t||t.preventDefault());if(!function(e){return"boolean"==typeof e}(n)&&n.isError)return null!==t&&void 0!==t&&t.preventDefault(),void _(n.textError)}n()},oe=(e,t,n)=>{ne(e,n)((()=>{null!==a&&void 0!==a&&a(e,t),ee(),te()}))},re=(e,t)=>{ne(e,t)((()=>{null!==r&&void 0!==r&&r(X.trim()),te()}))},ae=()=>{if(T.current){if(null!==z)ee(),te();else if(u){if(X.length>0){const e=X.trim();0===e.length?te():null!==z?oe(e,z):re(e)}}else c&&te();T.current=!1}},ie=e=>{var t;e===z?(te(),ee()):(e=>{$(n[e]),F(e),V()})(e),null===(t=R.current)||void 0===t||t.focus()},le=e=>{d||(null!==i&&void 0!==i&&i(e),null!==z&&(ee(),te()))},se=n.length>0;return(0,Z.jsx)(H.d,{onClickAway:ae,children:(0,Z.jsx)(Q.TextFieldStyled,{value:X,onChange:e=>{$(e.target.value)},ref:t,className:"MuiChipsInput-TextField ".concat(C||""),size:v,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),null!==P&&void 0!==P&&P(e),T.current=!0},inputProps:{onKeyDown:e=>{const t=((e,t)=>t!==q&&(w?Array.isArray(w)?w.some((t=>t===e)):w===e:e===U.enter))(e.key,e.keyCode),o=e.key===U.backspace,r=X.trim();if(t||"Tab"!==e.code){if(t&&e.preventDefault(),X.length>0&&t)0===r.length?te():null!==z?oe(r,z,e):re(r,e);else if(o&&0===X.length&&n.length>0&&!g){const e=n.length-1;null!==i&&void 0!==i&&i(e),z===e&&ee()}null===O||void 0===O||O(e)}else ae()},...D},disabled:d,error:!!I||h,helperText:I||m,InputProps:{inputRef:e=>{R.current=e,S&&Y(e,S),t&&Y(e,t)},startAdornment:se?n.map(((e,t)=>{const n="chip-".concat(t),r={index:t,onEdit:ie,label:e,title:e,isEditing:t===z,size:v,disabled:d,disableEdition:b,onDelete:le};return y?y(J,n,r):(0,o.createElement)(J,{...r,key:n})})):null,endAdornment:x?null:(0,Z.jsx)(Q.EndAdornmentClose,{style:{visibility:se?"visible":"hidden"},children:(0,Z.jsx)(W.Z,{"aria-label":"Clear",title:"Clear",disabled:d,size:"small",onClick:e=>{e.preventDefault(),!x&&!d&&(null!==j&&void 0!==j&&j(),te(),ee())},children:(0,Z.jsx)(L.Z,{fontSize:"small"})})}),...K},...E})})}));const te=[],ne=o.forwardRef(((e,t)=>{let{value:n=te,onChange:o,onAddChip:r,onInputChange:a,onDeleteChip:i,disabled:l,validate:s,clearInputOnBlur:d,addOnBlur:c,hideClearAll:u,disableDeleteOnBackspace:p,onEditChip:h,renderChip:m,disableEdition:x,addOnWhichKey:f=U.enter,inputValue:v,...g}=e;return(0,Z.jsx)(ee,{chips:n,onAddChip:e=>{if(l)return;const t=function(e,t){return[...e,t]}(n,e),a=t.length-1;null!==r&&void 0!==r&&r(e,a),null===o||void 0===o||o(t)},onInputChange:a,disableDeleteOnBackspace:p,onDeleteChip:e=>{if(l)return;const t=n[e];null!==o&&void 0!==o&&o(function(e,t){return e.filter(((e,n)=>t!==n))}(n,e)),null===i||void 0===i||i(t,e)},onEditChip:(e,t)=>{l||x||(null!==o&&void 0!==o&&o(function(e,t,n){return e.map(((e,o)=>t===o?n:e))}(n,t,e)),null===h||void 0===h||h(e,t))},renderChip:m,onDeleteAllChips:()=>{null===o||void 0===o||o([])},clearInputOnBlur:d,addOnBlur:c,disabled:l,disableEdition:x,validate:s,inputValue:v,hideClearAll:u,addOnWhichKey:f,...g,ref:t})}));var oe=n(24977),re=n(6505),ae=n(18678),ie=n(969),le=n(45960),se=n(94100),de=n(26478);const ce={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},ue={leadCaptureType:"flow",leadCaptureFormMode:"count",showFormAfterChats:3};const pe=function(){const[e,t]=(0,ie.g)(),{botSettings:n=ue}=t;return(0,Z.jsx)(re.Z,{sx:ce,content:!1,border:!1,boxShadow:!0,children:(0,Z.jsx)(r.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,Z.jsx)(oe.J9,{initialValues:n,onSubmit:async(t,n)=>{let{setErrors:o,setStatus:r,setSubmitting:a}=n;try{await(0,le.pb)(e,t),r({success:!1}),a(!1),(0,de.W)(!0,"Settings saved successfully!","success")}catch(i){console.error(i),(0,de.W)(!0,"Unable to save settings. Please try again later.","error"),r({success:!1}),o({submit:i.message}),a(!1)}},children:e=>(0,Z.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,Z.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,Z.jsx)(he,{...e}),(0,Z.jsxs)(a.ZP,{item:!0,xs:6,children:[(0,Z.jsx)(me,{...e}),(0,Z.jsx)(xe,{...e})]})]})})})})})};function he(e){let{values:t,touched:n,errors:o,handleBlur:r,handleChange:h,setFieldValue:m}=e;const x="form"===t.leadCaptureType,f="form"!==t.leadCaptureType||"keyword"===t.leadCaptureFormMode;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(l.Z,{variant:"subtitle1",children:"Lead Capture Settings"})})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"leadCaptureType",children:"Input Type"}),(0,Z.jsxs)(c.Z,{value:t.leadCaptureType,defaultValue:"flow",name:"leadCaptureType",onChange:h,children:[(0,Z.jsx)(u.Z,{value:"flow",control:(0,Z.jsx)(p.Z,{}),label:"Flow"}),(0,Z.jsx)(u.Z,{value:"form",control:(0,Z.jsx)(p.Z,{}),label:"Form"})]})]})}),x&&(0,Z.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"leadCaptureFormMode",children:"When you want the form to be displayed?"}),(0,Z.jsxs)(c.Z,{value:t.leadCaptureFormMode,defaultValue:"count",id:"leadCaptureFormMode",name:"leadCaptureFormMode",onChange:h,children:[(0,Z.jsx)(u.Z,{value:"keyword",control:(0,Z.jsx)(p.Z,{}),label:"Show form when the keyword matches"}),(0,Z.jsx)(u.Z,{value:"count",control:(0,Z.jsx)(p.Z,{}),label:(0,Z.jsxs)(Z.Fragment,{children:["Show form after conversations:"," ",(0,Z.jsx)("input",{value:t.showFormAfterChats,maxLength:2,style:{width:"50px"},disabled:"form"!==t.leadCaptureType||t.leadCaptureFormMode&&"count"!==t.leadCaptureFormMode,onChange:e=>console.log({showFormAfterChats:fe(e.target.value,t.showFormAfterChats)})})]})})]})]})}),!x&&(0,Z.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"leadCaptureFlowMandatory",children:"Can user proceed without providing contact details?"}),(0,Z.jsx)(u.Z,{value:"keyword",control:(0,Z.jsx)(z,{checked:t.leadCaptureFlowMandatory,name:"leadCaptureFlowMandatory",onChange:h}),label:"Make the input mandatory"})]})}),f&&(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"phoneNumberKeywords",children:"Keywords for Phone Number Collection *"}),(0,Z.jsx)(ve,{name:"phoneNumberKeywords",value:t.phoneNumberKeywords||[],error:Boolean(n.phoneNumberKeywords&&o.phoneNumberKeywords),onBlur:r,onChange:m,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),n.phoneNumberKeywords&&o.phoneNumberKeywords&&(0,Z.jsx)(O.Z,{error:!0,id:"helper-text-email-keywords",children:o.phoneNumberKeywords})]})}),f&&(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"emailKeywords",children:"Keywords for Email Address Collection *"}),(0,Z.jsx)(ve,{name:"emailKeywords",value:t.emailKeywords||[],error:Boolean(n.emailKeywords&&o.emailKeywords),onBlur:r,onChange:m,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),n.emailKeywords&&o.emailKeywords&&(0,Z.jsx)(O.Z,{error:!0,id:"helper-text-email-keywords",children:o.emailKeywords})]})})]})}function me(e){let{values:t,handleChange:n}=e;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(l.Z,{variant:"subtitle1",children:"Allow / Block chat window"})})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"allowedIP",children:"Allowed IP"}),(0,Z.jsx)(D.Z,{multiline:!0,id:"allowedIP",name:"allowedIP",value:t.allowedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"deniedIP",children:"Denied IP"}),(0,Z.jsx)(D.Z,{multiline:!0,id:"deniedIP",name:"deniedIP",defaultValue:t.deniedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"allowedPages",children:"Allowed Pages"}),(0,Z.jsx)(D.Z,{multiline:!0,id:"allowedPages",name:"allowedPages",defaultValue:t.allowedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(s.Z,{spacing:1,children:[(0,Z.jsx)(d.Z,{htmlFor:"deniedPages",children:"Denied Pages"}),(0,Z.jsx)(D.Z,{multiline:!0,id:"deniedPages",name:"deniedPages",defaultValue:t.deniedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})})]})}function xe(e){let{errors:t,isSubmitting:n}=e;return(0,Z.jsxs)(Z.Fragment,{children:[t.submit&&(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(O.Z,{error:!0,children:t.submit})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,mt:2,children:(0,Z.jsx)(ae.Z,{children:(0,Z.jsx)(se.Z,{disableElevation:!0,isLoading:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})})]})}function fe(e,t){return e?isNaN(e)?t:Number(e):e}function ve(e){let{id:t,name:n,value:r,onChange:a,...i}=e;const l=o.useRef(),s=e=>a(n,e);return(0,Z.jsx)(ne,{ref:l,id:t||n,name:n,addOnBlur:!0,value:r||[],onChange:s,onInputChange:e=>{e.endsWith(",")&&(r=[...r,e.substring(0,e.length-1)],s(r),l.current.value="")},...i})}},80730:(e,t,n)=>{n.d(t,{Od:()=>s,TY:()=>u,U2:()=>a,gz:()=>l,v_:()=>i});var o=n(89637),r=n(32203);async function a(e,t){return d("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return d("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return d("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return d("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t,n){let{headers:o,noAuth:r,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;if(t=u(t,i?void 0:n),n=n&&"object"===typeof n&&i?JSON.stringify(n):void 0,o||(o={}),o["Content-Type"]="application/json",o.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(o.Authorization="Bearer ".concat(e))}const l=await fetch(t,{...a,headers:o,body:n,method:e}),s=await l.json();if(l.ok){const{data:e,...t}=s;return delete t.status,e&&!Object.keys(t).length?e:s}throw s.message?new Error(s.message):s}const c=(0,o.lf)(r.Hi,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o="".concat(n,"=").concat(encodeURIComponent(o)),e?"".concat(e,"&").concat(o):o)}),"");o&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(o))}return e.startsWith("https://")?e:"".concat(c).concat(e)}},45960:(e,t,n)=>{n.d(t,{Bc:()=>s,Iz:()=>d,Od:()=>l,lz:()=>a,pb:()=>c});var o=n(80730),r=n(23509);async function a(e){const{organization:{websiteUrl:t,_id:n}}=r.tN.getState(),a={organizationId:n,websiteUrl:t,botName:e,botDesign:{botLogo:{name:"",url:""},visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}},i=await o.v_("/bot/initialize-create-bot",a),l=i._id;let{botsMap:s,botsList:d}=r.tN.getState();s={...s,[l]:i},d=[...d],d.push(i._doc),r.tN.setState({selectedBotId:l,botsMap:s,botsList:d})}async function i(e,t,n){const{organizationId:a}=r.tN.getState();if(!a||!e)throw new Error("Bot details not found");const i=await o.gz("/bot/".concat(a,"/").concat(e),t);return u(i,n),i}async function l(e){const{organizationId:t,selectedBotId:n}=r.tN.getState();if(!t||!e)throw new Error("Bot details not found");const{deleted:a}=await o.Od("/bot/".concat(t,"/").concat(e));if(a){let{botsMap:e,botsList:t}=r.tN.getState();e={...e},t=[...t],delete e[a];const o=t.findIndex((e=>e._id===a));o>=0&&t.splice(o,1);const l={botsMap:e,botsList:t};var i;if(n===a)l.selectedBotId=(null===(i=t[0])||void 0===i?void 0:i._id)||null;r.tN.setState(l)}return!!a}function s(e,t){let{botDesign:n}=r.tN.getState();return n={...n,...t},i(e,{botDesign:n})}function d(e,t){return i(e,{botName:t})}function c(e,t){let{botSettings:n={}}=r.tN.getState();return n={...n,...t},i(e,{botSettings:n})}function u(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e._id;let{botsMap:o,botsList:a}=r.tN.getState();o={...o,[n]:e},a=[...a];const i=a.findIndex((e=>e._id===n));i>=0?a[i]=e:a.push(e);const l={botsMap:o,botsList:a};t&&(l.selectedBotId=n),r.tN.setState(l)}},969:(e,t,n)=>{n.d(t,{g:()=>r});var o=n(23509);function r(e){const t=(0,o.tN)((e=>e.selectedBotId)),n=(0,o.tN)((n=>n.botsMap[e||t]));return[e||t,n]}},89637:(e,t,n)=>{function o(e,t){return e.replace(new RegExp("".concat(r(t),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getFullYear();return"".concat(o," ").concat(n,", ").concat(r)}n.d(t,{lf:()=>o,p6:()=>a})},32203:(e,t,n)=>{n.d(t,{Hi:()=>o,LC:()=>l,lB:()=>r,rn:()=>i,yu:()=>a});const o="https://devbackend.livhousing.com",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,l="https://60f1-203-192-224-75.ngrok-free.app"},11198:(e,t,n)=>{var o=n(64836);t.Z=void 0;var r=o(n(45045)),a=n(46417);t.Z=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},73428:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(87462),r=n(63366),a=n(47313),i=n(94146),l=n(21921),s=n(17592),d=n(77342),c=n(70501),u=n(77430),p=n(32298);function h(e){return(0,p.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=n(46417);const x=["className","raised"],f=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=n,c=(0,r.Z)(n,x),u=(0,o.Z)({},n,{raised:s}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)})(u);return(0,m.jsx)(f,(0,o.Z)({className:(0,i.Z)(p.root,a),elevation:s?8:void 0,ref:t,ownerState:u},c))}))},93405:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),r=n(63366),a=n(47313),i=n(94146),l=n(21921),s=n(17592),d=n(77342),c=n(77430),u=n(32298);function p(e){return(0,u.ZP)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=n(46417);const m=["className","component"],x=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:a,component:s="div"}=n,c=(0,r.Z)(n,m),u=(0,o.Z)({},n,{component:s}),f=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(u);return(0,h.jsx)(x,(0,o.Z)({as:s,className:(0,i.Z)(f.root,a),ownerState:u,ref:t},c))}))},54641:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(63366),r=n(87462),a=n(47313),i=n(94146),l=n(21921),s=n(61113),d=n(77342),c=n(17592),u=n(77430),p=n(32298);function h(e){return(0,p.ZP)("MuiCardHeader",e)}const m=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var x=n(46417);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({["& .".concat(m.title)]:t.title,["& .".concat(m.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),C=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:c,className:u,component:p="div",disableTypography:m=!1,subheader:C,subheaderTypographyProps:y,title:w,titleTypographyProps:P}=n,j=(0,o.Z)(n,f),S=(0,r.Z)({},n,{component:p,disableTypography:m}),k=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(S);let E=w;null==E||E.type===s.Z||m||(E=(0,x.jsx)(s.Z,(0,r.Z)({variant:c?"body2":"h5",className:k.title,component:"span",display:"block"},P,{children:E})));let A=C;return null==A||A.type===s.Z||m||(A=(0,x.jsx)(s.Z,(0,r.Z)({variant:c?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:A}))),(0,x.jsxs)(v,(0,r.Z)({className:(0,i.Z)(k.root,u),as:p,ref:t,ownerState:S},j,{children:[c&&(0,x.jsx)(g,{className:k.avatar,ownerState:S,children:c}),(0,x.jsxs)(Z,{className:k.content,ownerState:S,children:[E,A]}),a&&(0,x.jsx)(b,{className:k.action,ownerState:S,children:a})]}))}))},23306:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(63366),r=n(87462),a=n(47313),i=n(21921),l=n(94146),s=n(80300),d=n(99008),c=n(91615),u=n(77342),p=n(17592),h=n(77430),m=n(32298);function x(e){return(0,m.ZP)("MuiFormLabel",e)}const f=(0,h.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);var v=n(46417);const g=["children","className","color","component","disabled","error","filled","focused","required"],b=(0,p.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return(0,r.Z)({},t.root,"secondary"===n.color&&t.colorSecondary,n.filled&&t.filled)}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.Z)({color:(t.vars||t).palette.text.secondary},t.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",["&.".concat(f.focused)]:{color:(t.vars||t).palette[n.color].main},["&.".concat(f.disabled)]:{color:(t.vars||t).palette.text.disabled},["&.".concat(f.error)]:{color:(t.vars||t).palette.error.main}})})),Z=(0,p.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((e=>{let{theme:t}=e;return{["&.".concat(f.error)]:{color:(t.vars||t).palette.error.main}}})),C=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiFormLabel"}),{children:a,className:p,component:h="label"}=n,m=(0,o.Z)(n,g),f=(0,d.Z)(),C=(0,s.Z)({props:n,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),y=(0,r.Z)({},n,{color:C.color||"primary",component:h,disabled:C.disabled,error:C.error,filled:C.filled,focused:C.focused,required:C.required}),w=(e=>{const{classes:t,color:n,focused:o,disabled:r,error:a,filled:l,required:s}=e,d={root:["root","color".concat((0,c.Z)(n)),r&&"disabled",a&&"error",l&&"filled",o&&"focused",s&&"required"],asterisk:["asterisk",a&&"error"]};return(0,i.Z)(d,x,t)})(y);return(0,v.jsxs)(b,(0,r.Z)({as:h,ownerState:y,className:(0,l.Z)(w.root,p),ref:t},m,{children:[a,C.required&&(0,v.jsxs)(Z,{ownerState:y,"aria-hidden":!0,className:w.asterisk,children:["\u2009","*"]})]}))}));function y(e){return(0,m.ZP)("MuiInputLabel",e)}(0,h.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const w=["disableAnimation","margin","shrink","variant","className"],P=(0,p.ZP)(C,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{["& .".concat(f.asterisk)]:t.asterisk},t.root,n.formControl&&t.formControl,"small"===n.size&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,n.focused&&t.focused,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},n.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===n.size&&{transform:"translate(0, 17px) scale(1)"},n.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!n.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},"filled"===n.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===n.size&&{transform:"translate(12px, 13px) scale(1)"},n.shrink&&(0,r.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===n.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===n.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===n.size&&{transform:"translate(14px, 9px) scale(1)"},n.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))})),j=a.forwardRef((function(e,t){const n=(0,u.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:a=!1,shrink:p,className:h}=n,m=(0,o.Z)(n,w),x=(0,d.Z)();let f=p;"undefined"===typeof f&&x&&(f=x.filled||x.focused||x.adornedStart);const g=(0,s.Z)({props:n,muiFormControl:x,states:["size","variant","required","focused"]}),b=(0,r.Z)({},n,{disableAnimation:a,formControl:x,shrink:f,size:g.size,variant:g.variant,required:g.required,focused:g.focused}),Z=(e=>{const{classes:t,formControl:n,size:o,shrink:a,disableAnimation:l,variant:s,required:d}=e,u={root:["root",n&&"formControl",!l&&"animated",a&&"shrink",o&&"normal"!==o&&"size".concat((0,c.Z)(o)),s],asterisk:[d&&"asterisk"]},p=(0,i.Z)(u,y,t);return(0,r.Z)({},t,p)})(b);return(0,v.jsx)(P,(0,r.Z)({"data-shrink":f,ownerState:b,ref:t,className:(0,l.Z)(Z.root,h)},m,{classes:Z}))}))}}]);