"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[7863],{32829:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(25371),a=n(44414);function r(e){let{children:t,type:n}=e;return(0,a.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(9950),a=n(14857),r=n(48089),i=n(45180),l=n(82053),s=n(50704),c=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:u,content:p=!0,contentSX:h={},darkTitle:m,elevation:A,secondary:x,shadow:f,sx:g={},title:y,...v}=e;const b=(0,a.A)();return o="dark"===b.palette.mode?o||!0:o,(0,c.jsxs)(r.A,{elevation:A||0,ref:t,...v,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===b.palette.mode?b.palette.divider:b.palette.grey.A800,boxShadow:!o||n&&"dark"!==b.palette.mode?"inherit":f||b.customShadows.z1,":hover":{boxShadow:o?f||b.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:b.typography.fontFamily,fontSize:"0.75rem"},...g},children:[!m&&y&&(0,c.jsx)(i.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:y,action:x}),m&&y&&(0,c.jsx)(i.A,{sx:d,title:(0,c.jsx)(l.A,{variant:"h3",children:y}),action:x}),p&&(0,c.jsx)(s.A,{sx:h,children:u}),!p&&u]})}))},93383:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(9950),a=n(10226),r=n(46639),i=n(44414);const l=function(e){let{onClick:t,disabled:n,isLoading:l,children:s,...c}=e;const[d,u]=o.useState(l);return(0,i.jsxs)(a.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||l||n,...c,children:[(d||l)&&(0,i.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},22403:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var o,a=n(9950),r=n(16491),i=n(60899),l=n(74745),s=n(82053),c=n(93230),d=n(3788),u=n(23114),p=n(16497),h=n(85815),m=n(93038),A=n(24516),x=n(2660),f=n(57528),g=n(44414),y=n(25277),v=n(59254),b=n(96319),C=n(47177),j=n(25333),w=n(8145);const S={enter:"Enter",backspace:"Backspace"},P=229,E={ChipStyled:(0,v.Ay)(y.A)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n\n    &[aria-disabled="true"] > svg {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ").concat(t.palette.primary.light,";\n      color: ").concat(t.palette.primary.contrastText,";\n    }\n  ")}))},I=e=>{let{className:t,index:n,onDelete:o,disabled:a,onEdit:r,isEditing:i,disableEdition:l,...s}=e;return(0,g.jsx)(E.ChipStyled,{className:"MuiChipsInput-Chip ".concat(i?"MuiChipsInput-Chip-Editing":""," ").concat(t||""),onKeyDown:e=>{e.key===S.enter&&o(n)},disabled:a,onDoubleClick:l?void 0:e=>{e.target.textContent===s.label&&(a||r(n))},tabIndex:a?-1:0,"aria-disabled":a,onDelete:e=>{var t,a;null!==e&&void 0!==e&&null!==(t=e.preventDefault)&&void 0!==t&&t.call(e),null!==e&&void 0!==e&&null!==(a=e.stopPropagation)&&void 0!==a&&a.call(e),o(n)},...s})};function _(e,t){"function"==typeof t?t(e):t&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)&&"current"in t&&(t.current=e)}const T=(0,v.Ay)("div")(o||(o=(0,f.A)(["\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  position: absolute;\n"]))),R=(0,v.Ay)(w.A)((e=>{var t;return"\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ".concat("small"===e.size?"5px":"9px",";\n      padding-right: ").concat(null!==(t=e.InputProps)&&void 0!==t&&t.endAdornment?"30px":"9px",";\n      padding-bottom: ").concat("small"===e.size?"5px":"9px",";\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ").concat("small"===e.size?"3.5px 4px":"7.5px 4px",";\n        align-self: center;\n      }\n    }\n  ")})),k={ChipStyled:(0,v.Ay)(y.A)((e=>{let{theme:t,size:n}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===n?"26px":"32px",';\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n  ")})),TextFieldStyled:R,EndAdornmentClose:T},M=a.forwardRef(((e,t)=>{let{chips:n,onAddChip:o,onEditChip:r,onDeleteChip:i,InputProps:l,onInputChange:s,disabled:c,clearInputOnBlur:d,addOnBlur:u,validate:p,error:h,helperText:m,hideClearAll:A,inputProps:x,size:f,disableDeleteOnBackspace:y,disableEdition:v,className:w,renderChip:E,addOnWhichKey:T,onFocus:R,onDeleteAllChips:M,inputRef:F,inputValue:N,...D}=e;const[O,z]=a.useState(""),[B,K]=a.useState(""),L=a.useRef(null),V=a.useRef(!1),H=a.useRef("string"==typeof N),[W,U]=a.useState(null),{onKeyDown:G,...J}=x||{},{inputRef:X,...Y}=l||{},q=()=>{K("")},$=H.current,Z=$?N:O,Q=e=>{null!==s&&void 0!==s&&s(e),$||z(e)},ee=()=>{U(null)},te=()=>{q(),Q("")},ne=(e,t)=>n=>{if("function"==typeof p){const n=p(e);if(!1===n)return void(null===t||void 0===t||t.preventDefault());if(!function(e){return"boolean"==typeof e}(n)&&n.isError)return null!==t&&void 0!==t&&t.preventDefault(),void K(n.textError)}n()},oe=(e,t,n)=>{ne(e,n)((()=>{null!==r&&void 0!==r&&r(e,t),ee(),te()}))},ae=(e,t)=>{ne(e,t)((()=>{null!==o&&void 0!==o&&o(Z.trim()),te()}))},re=()=>{if(V.current){if(null!==W)ee(),te();else if(u){if(Z.length>0){const e=Z.trim();0===e.length?te():null!==W?oe(e,W):ae(e)}}else d&&te();V.current=!1}},ie=e=>{var t;e===W?(te(),ee()):(e=>{Q(n[e]),U(e),q()})(e),null===(t=L.current)||void 0===t||t.focus()},le=e=>{c||(null!==i&&void 0!==i&&i(e),null!==W&&(ee(),te()))},se=n.length>0;return(0,g.jsx)(C.x,{onClickAway:re,children:(0,g.jsx)(k.TextFieldStyled,{value:Z,onChange:e=>{Q(e.target.value)},ref:t,className:"MuiChipsInput-TextField ".concat(w||""),size:f,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),null!==R&&void 0!==R&&R(e),V.current=!0},inputProps:{onKeyDown:e=>{const t=((e,t)=>t!==P&&(T?Array.isArray(T)?T.some((t=>t===e)):T===e:e===S.enter))(e.key,e.keyCode),o=e.key===S.backspace,a=Z.trim();if(t||"Tab"!==e.code){if(t&&e.preventDefault(),Z.length>0&&t)0===a.length?te():null!==W?oe(a,W,e):ae(a,e);else if(o&&0===Z.length&&n.length>0&&!y){const e=n.length-1;null!==i&&void 0!==i&&i(e),W===e&&ee()}null===G||void 0===G||G(e)}else re()},enterKeyHint:"done",...J},disabled:c,error:!!B||h,helperText:B||m,InputProps:{inputRef:e=>{L.current=e,F&&_(e,F),t&&_(e,t)},startAdornment:se?n.map(((e,t)=>{const n="chip-".concat(t),o={index:t,onEdit:ie,label:e,title:e,isEditing:t===W,size:f,disabled:c,disableEdition:v,onDelete:le};return E?E(I,n,o):(0,a.createElement)(I,{...o,key:n})})):null,endAdornment:A?null:(0,g.jsx)(k.EndAdornmentClose,{style:{visibility:se?"visible":"hidden"},children:(0,g.jsx)(j.A,{"aria-label":"Clear",title:"Clear",disabled:c,size:"small",onClick:e=>{e.preventDefault(),!A&&!c&&(null!==M&&void 0!==M&&M(),te(),ee())},children:(0,g.jsx)(b.A,{fontSize:"small"})})}),...Y},...D})})}));const F=[],N=a.forwardRef(((e,t)=>{let{value:n=F,onChange:o,onAddChip:a,onInputChange:r,onDeleteChip:i,disabled:l,validate:s,clearInputOnBlur:c,addOnBlur:d,hideClearAll:u,disableDeleteOnBackspace:p,onEditChip:h,renderChip:m,disableEdition:A,addOnWhichKey:x=S.enter,inputValue:f,...y}=e;return(0,g.jsx)(M,{chips:n,onAddChip:e=>{if(l)return;const t=function(e,t){return[...e,t]}(n,e),r=t.length-1;null!==a&&void 0!==a&&a(e,r),null===o||void 0===o||o(t)},onInputChange:r,disableDeleteOnBackspace:p,onDeleteChip:e=>{if(l)return;const t=n[e];null!==o&&void 0!==o&&o(function(e,t){return e.filter(((e,n)=>t!==n))}(n,e)),null===i||void 0===i||i(t,e)},onEditChip:(e,t)=>{l||A||(null!==o&&void 0!==o&&o(function(e,t,n){return e.map(((e,o)=>t===o?n:e))}(n,t,e)),null===h||void 0===h||h(e,t))},renderChip:m,onDeleteAllChips:()=>{null===o||void 0===o||o([])},clearInputOnBlur:c,addOnBlur:d,disabled:l,disableEdition:A,validate:s,inputValue:f,hideClearAll:u,addOnWhichKey:x,...y,ref:t})}));var D=n(61467),O=n(51637),z=n(32829),B=n(70855),K=n(98415),L=n(93383),V=n(58178),H=n(90771);n(13953);const W={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},U={leadCaptureType:"flow",leadCaptureFormMode:"count",showFormAfterChats:3,defaultCountryCode:{countryId:"in",dialCode:"+91"}};const G=function(){const[e,t]=(0,B.G)();if(!t)return null;const{botSettings:n=U}=t;return(0,g.jsx)(O.A,{sx:W,content:!1,border:!1,boxShadow:!0,children:(0,g.jsx)(r.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,g.jsx)(D.l1,{initialValues:n,onSubmit:async(t,n)=>{let{setErrors:o,setStatus:a,setSubmitting:r}=n;try{await(0,K.gR)(e,t),a({success:!1}),r(!1),(0,V.i)(!0,"Settings saved successfully!","success")}catch(i){console.error(i),(0,V.i)(!0,"Unable to save settings. Please try again later.","error"),a({success:!1}),o({submit:i.message}),r(!1)}},children:e=>(0,g.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,g.jsxs)(i.Ay,{container:!0,spacing:3,children:[(0,g.jsx)(J,{...e}),(0,g.jsx)(X,{...e}),(0,g.jsx)(Y,{...e}),(0,g.jsx)(q,{...e})]})})})})})};function J(e){var t,n,o;let{values:r,touched:x,errors:f,handleBlur:y,handleChange:v,setFieldValue:b}=e;const C="form"===r.leadCaptureType,j="form"!==r.leadCaptureType||"keyword"===r.leadCaptureFormMode,[w,S]=a.useState((null===(t=r.defaultCountryCode)||void 0===t?void 0:t.countryId)||"in"),[P,E]=a.useState((null===(n=r.defaultCountryCode)||void 0===n?void 0:n.dialCode)||"+91");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsx)(l.A,{children:(0,g.jsx)(s.A,{variant:"subtitle1",children:"Lead Capture Settings"})})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"leadCaptureType",children:"Input Type"}),(0,g.jsxs)(u.A,{value:r.leadCaptureType,defaultValue:"flow",name:"leadCaptureType",onChange:v,children:[(0,g.jsx)(p.A,{value:"flow",control:(0,g.jsx)(h.A,{}),label:"Flow"}),(0,g.jsx)(p.A,{value:"form",control:(0,g.jsx)(h.A,{}),label:"Form"})]})]})}),C&&(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"leadCaptureFormMode",children:"When you want the form to be displayed?"}),(0,g.jsxs)(u.A,{value:r.leadCaptureFormMode,defaultValue:"count",id:"leadCaptureFormMode",name:"leadCaptureFormMode",onChange:v,children:[(0,g.jsx)(p.A,{value:"keyword",control:(0,g.jsx)(h.A,{}),label:"Show form when the keyword matches"}),(0,g.jsx)(p.A,{value:"count",control:(0,g.jsx)(h.A,{}),label:(0,g.jsxs)(g.Fragment,{children:["Show form after conversations:"," ",(0,g.jsx)("input",{value:null===(o=r.showFormAfterChats)||void 0===o?void 0:o.toString(),maxLength:2,style:{width:"50px"},disabled:"form"!==r.leadCaptureType||r.leadCaptureFormMode&&"count"!==r.leadCaptureFormMode,onChange:e=>b("showFormAfterChats",function(e,t){if(!e)return e;if(isNaN(e))return t;return Number(e)}(e.target.value,r.showFormAfterChats))})]})})]})]})}),!C&&(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"leadCaptureFlowMandatory",children:"Can user proceed without providing contact details?"}),(0,g.jsx)(p.A,{value:"keyword",control:(0,g.jsx)(m.A,{checked:r.leadCaptureFlowMandatory,name:"leadCaptureFlowMandatory",onChange:v}),label:"Make the input mandatory"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:12,children:"Default Phone number country code in contact form"}),(0,g.jsxs)(i.Ay,{item:!0,xs:12,md:3,sx:{position:"relative",display:"flex",alignItems:"center"},children:[(0,g.jsx)(H.cf,{selectedCountry:w,onSelect:e=>{let{iso2:t,dialCode:n}=e;S(t),b("defaultCountryCode",{countryId:t,dialCode:"+"+n}),E("+"+n)},onBlur:y,country:w,name:"defaultCountryCode",id:"defaultCountryCode"}),(0,g.jsxs)("span",{style:{marginLeft:"8px"},children:[" ",P]})]}),j&&(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"phoneNumberKeywords",children:"Keywords for Phone Number Collection *"}),(0,g.jsx)($,{name:"phoneNumberKeywords",value:r.phoneNumberKeywords||[],error:Boolean(x.phoneNumberKeywords&&f.phoneNumberKeywords),onBlur:y,onChange:b,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),x.phoneNumberKeywords&&f.phoneNumberKeywords&&(0,g.jsx)(A.A,{error:!0,id:"helper-text-email-keywords",children:f.phoneNumberKeywords})]})}),j&&(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"emailKeywords",children:"Keywords for Email Address Collection *"}),(0,g.jsx)($,{name:"emailKeywords",value:r.emailKeywords||[],error:Boolean(x.emailKeywords&&f.emailKeywords),onBlur:y,onChange:b,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),x.emailKeywords&&f.emailKeywords&&(0,g.jsx)(A.A,{error:!0,id:"helper-text-email-keywords",children:f.emailKeywords})]})})]})}function X(e){let{values:t,handleChange:n}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsx)(l.A,{children:(0,g.jsx)(s.A,{variant:"subtitle1",children:"Bot Industry and Role settings"})})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"industry",children:"Industry"}),(0,g.jsx)(x.A,{multiline:!0,id:"industry",name:"industry",value:t.industry,onChange:n,"aria-label":"industry"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"botRole",children:"Bot Role"}),(0,g.jsx)(x.A,{multiline:!0,id:"botRole",name:"botRole",defaultValue:t.botRole,onChange:n,"aria-label":"bot role"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"organizationName",children:"Organization Name"}),(0,g.jsx)(x.A,{multiline:!0,id:"organizationName",name:"organizationName",defaultValue:t.organizationName,onChange:n,"aria-label":"organization name"})]})})]})}function Y(e){let{values:t,handleChange:n}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsx)(l.A,{children:(0,g.jsx)(s.A,{variant:"subtitle1",children:"Allow / Block chat window"})})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"allowedIP",children:"Allowed IP"}),(0,g.jsx)(x.A,{multiline:!0,id:"allowedIP",name:"allowedIP",value:t.allowedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"deniedIP",children:"Denied IP"}),(0,g.jsx)(x.A,{multiline:!0,id:"deniedIP",name:"deniedIP",defaultValue:t.deniedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"allowedPages",children:"Allowed Pages"}),(0,g.jsx)(x.A,{multiline:!0,id:"allowedPages",name:"allowedPages",defaultValue:t.allowedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.A,{spacing:1,children:[(0,g.jsx)(d.A,{htmlFor:"deniedPages",children:"Denied Pages"}),(0,g.jsx)(x.A,{multiline:!0,id:"deniedPages",name:"deniedPages",defaultValue:t.deniedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com"})]})})]})}function q(e){let{errors:t,isSubmitting:n}=e;return(0,g.jsxs)(g.Fragment,{children:[t.submit&&(0,g.jsx)(i.Ay,{item:!0,xs:12,children:(0,g.jsx)(A.A,{error:!0,children:t.submit})}),(0,g.jsx)(i.Ay,{item:!0,xs:12,mt:2,children:(0,g.jsx)(z.A,{children:(0,g.jsx)(L.A,{disableElevation:!0,isLoading:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})})]})}function $(e){let{id:t,name:n,value:o,onChange:r,...i}=e;const l=a.useRef(),s=e=>r(n,e);return(0,g.jsx)(N,{ref:l,id:t||n,name:n,addOnBlur:!0,value:o||[],onChange:s,onInputChange:e=>{e.endsWith(",")&&(o=[...o,e.substring(0,e.length-1)],s(o),l.current.value="")},...i})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>r,TF:()=>s,bE:()=>i,yJ:()=>l});var o=n(32026),a=n(44364);async function r(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,n){let{headers:o,noAuth:a,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o="".concat(n,"=").concat(encodeURIComponent(o)),e?"".concat(e,"&").concat(o):o)}),"");o&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(o))}if(e.startsWith("https://"))return e;return"".concat(d).concat(e)}(t,i?void 0:n);const l=n instanceof FormData;if(l||(n=n&&"object"===typeof n&&i?JSON.stringify(n):void 0),o||(o={}),l||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==a){const e=sessionStorage.getItem("token");e&&(o.Authorization="Bearer ".concat(e))}try{const a=await fetch(t,{...r,headers:o,body:n,method:e}),i=await a.json();if(a.ok){const{data:e,...t}=i;return delete t.status,e&&!Object.keys(t).length?e:i}throw i.message?new Error(i.message):i}catch(c){var s;throw console.error("Error calling API: ",c),null!==(s=c.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,o.s8)(a.jn,"/")},98415:(e,t,n)=>{n.d(t,{Ci:()=>u,I4:()=>d,TF:()=>s,gI:()=>i,gR:()=>h,jo:()=>c,rv:()=>m,so:()=>p,yo:()=>l});var o=n(8478),a=n(33340),r=n(32026);async function i(e){const{organization:{websiteUrl:t,_id:n}}=a.nc.getState(),r={organizationId:n,websiteUrl:t,botName:e,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};A(await o.bE("/bot/".concat(n),r),!0)}async function l(e,t,n){const{organizationId:r}=a.nc.getState();if(!r||!e)throw new Error("Bot details not found");const i=await o.yJ("/bot/".concat(r,"/").concat(e),t);return A(i,n),i}async function s(e){const{organizationId:t,selectedBotId:n}=a.nc.getState();if(!t||!e)throw new Error("Bot details not found");const{deleted:r}=await o.TF("/bot/".concat(t,"/").concat(e));if(r){let{botsMap:e,botsList:t}=a.nc.getState();e={...e},t=[...t],delete e[r];const o=t.findIndex((e=>e._id===r));o>=0&&t.splice(o,1);const l={botsMap:e,botsList:t};var i;if(n===r)l.selectedBotId=(null===(i=t[0])||void 0===i?void 0:i._id)||null;a.nc.setState(l)}return!!r}function c(e,t){let{botDesign:n}=a.nc.getState();return n={...n,...t},l(e,{botDesign:n})}async function d(e,t){const{organizationId:n,selectedBotId:r}=a.nc.getState(),i=new FormData;i.append("file",t);const l=await o.bE("/bot/".concat(n,"/").concat(r,"/update-logo/").concat(e),i);return m(r,l),l["botDesign.".concat(e)]}async function u(e){const{organizationId:t,selectedBotId:n}=a.nc.getState(),r=await o.TF("/bot/".concat(t,"/").concat(n,"/update-logo/").concat(e));return m(n,r),r["botDesign.".concat(e)]}function p(e,t){return l(e,{botName:t})}function h(e,t){let{botSettings:n={}}=a.nc.getState();return n={...n,...t},l(e,{botSettings:n})}function m(e,t){const{botsMap:n}=a.nc.getState(),o=n[e];if(!o)return;A(Object.keys(t).reduce(((e,n)=>(0,r.G6)(e,n,t[n])),o))}function A(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e._id;let{botsMap:o,botsList:r}=a.nc.getState();o={...o,[n]:e},r=[...r];const i=r.findIndex((e=>e._id===n));i>=0?r[i]=e:r.push(e);const l={botsMap:o,botsList:r};t&&(l.selectedBotId=n),a.nc.setState(l)}},70855:(e,t,n)=>{n.d(t,{G:()=>a});var o=n(33340);function a(e){const t=(0,o.nc)((e=>e.selectedBotId)),n=(0,o.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function o(e,t){return e.replace(new RegExp("".concat(a(t),"+$")),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){const t=new Date(e),n=t.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getFullYear();return"".concat(o," ").concat(n,", ").concat(a)}function i(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),r=t.substring(0,a),l=t.substring(a+1);o[r]=i(e[r],l,n)}else o[t]=n;return o}function l(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(36*Math.random()));return n}function c(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),r=t.substring(0,a),i=t.substring(a+1);o[r]=c(e[r],i,n)}else o[t]=n;return o}n.d(t,{G6:()=>i,OX:()=>s,Yq:()=>r,do:()=>c,qW:()=>l,s8:()=>o})},44364:(e,t,n)=>{n.d(t,{DX:()=>l,Og:()=>r,jn:()=>o,pA:()=>i,pR:()=>a});const o="https://devbackend.livhousing.com:444",a="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},96319:(e,t,n)=>{var o=n(24994);t.A=void 0;var a=o(n(79526)),r=n(44414);t.A=(0,a.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},79526:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(92079)},48089:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(58168),a=n(98587),r=n(9950),i=n(72004),l=n(74061),s=n(59254),c=n(48283),d=n(2235),u=n(80863),p=n(68483);function h(e){return(0,p.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var m=n(44414);const A=["className","raised"],x=(0,s.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=n,d=(0,a.A)(n,A),u=(0,o.A)({},n,{raised:s}),p=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},h,t)})(u);return(0,m.jsx)(x,(0,o.A)({className:(0,i.A)(p.root,r),elevation:s?8:void 0,ref:t,ownerState:u},d))}))},50704:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(58168),a=n(98587),r=n(9950),i=n(72004),l=n(74061),s=n(59254),c=n(48283),d=n(80863),u=n(68483);function p(e){return(0,u.Ay)("MuiCardContent",e)}(0,d.A)("MuiCardContent",["root"]);var h=n(44414);const m=["className","component"],A=(0,s.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardContent"}),{className:r,component:s="div"}=n,d=(0,a.A)(n,m),u=(0,o.A)({},n,{component:s}),x=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},p,t)})(u);return(0,h.jsx)(A,(0,o.A)({as:s,className:(0,i.A)(x.root,r),ownerState:u,ref:t},d))}))},45180:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(98587),a=n(58168),r=n(9950),i=n(72004),l=n(74061),s=n(82053),c=n(48283),d=n(59254),u=n(80863),p=n(68483);function h(e){return(0,p.Ay)("MuiCardHeader",e)}const m=(0,u.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var A=n(44414);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,d.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.A)({["& .".concat(m.title)]:t.title,["& .".concat(m.subheader)]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,d.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,d.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=(0,d.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),b=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardHeader"}),{action:r,avatar:d,className:u,component:p="div",disableTypography:m=!1,subheader:b,subheaderTypographyProps:C,title:j,titleTypographyProps:w}=n,S=(0,o.A)(n,x),P=(0,a.A)({},n,{component:p,disableTypography:m}),E=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(P);let I=j;null==I||I.type===s.A||m||(I=(0,A.jsx)(s.A,(0,a.A)({variant:d?"body2":"h5",className:E.title,component:"span",display:"block"},w,{children:I})));let _=b;return null==_||_.type===s.A||m||(_=(0,A.jsx)(s.A,(0,a.A)({variant:d?"body2":"body1",className:E.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:_}))),(0,A.jsxs)(f,(0,a.A)({className:(0,i.A)(E.root,u),as:p,ref:t,ownerState:P},S,{children:[d&&(0,A.jsx)(g,{className:E.avatar,ownerState:P,children:d}),(0,A.jsxs)(v,{className:E.content,ownerState:P,children:[I,_]}),r&&(0,A.jsx)(y,{className:E.action,ownerState:P,children:r})]}))}))},93038:(e,t,n)=>{n.d(t,{A:()=>I});var o=n(98587),a=n(58168),r=n(9950),i=n(72004),l=n(74061),s=n(99269),c=n(46282),d=n(23235),u=n(44414);const p=(0,d.A)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var A=n(61676),x=n(48283),f=n(59254),g=n(19608),y=n(80863),v=n(68483);function b(e){return(0,v.Ay)("MuiCheckbox",e)}const C=(0,y.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=(0,f.Ay)(c.A,{shouldForwardProp:e=>(0,g.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t["size".concat((0,A.A)(n.size))],"default"!==n.color&&t["color".concat((0,A.A)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.A)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(C.checked,", &.").concat(C.indeterminate)]:{color:(t.vars||t).palette[n.color].main},["&.".concat(C.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),S=(0,u.jsx)(h,{}),P=(0,u.jsx)(p,{}),E=(0,u.jsx)(m,{}),I=r.forwardRef((function(e,t){var n,s;const c=(0,x.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=S,color:p="primary",icon:h=P,indeterminate:m=!1,indeterminateIcon:f=E,inputProps:g,size:y="medium",className:v}=c,C=(0,o.A)(c,j),I=m?f:h,_=m?f:d,T=(0,a.A)({},c,{color:p,indeterminate:m,size:y}),R=(e=>{const{classes:t,indeterminate:n,color:o,size:r}=e,i={root:["root",n&&"indeterminate","color".concat((0,A.A)(o)),"size".concat((0,A.A)(r))]},s=(0,l.A)(i,b,t);return(0,a.A)({},t,s)})(T);return(0,u.jsx)(w,(0,a.A)({type:"checkbox",inputProps:(0,a.A)({"data-indeterminate":m},g),icon:r.cloneElement(I,{fontSize:null!=(n=I.props.fontSize)?n:y}),checkedIcon:r.cloneElement(_,{fontSize:null!=(s=_.props.fontSize)?s:y}),ownerState:T,ref:t,className:(0,i.A)(R.root,v)},C,{classes:R}))}))},25920:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(97603).A},92079:(e,t,n)=>{n.r(t),n.d(t,{capitalize:()=>a.A,createChainedFunction:()=>r.A,createSvgIcon:()=>i.A,debounce:()=>l.A,deprecatedPropType:()=>s,isMuiElement:()=>c.A,ownerDocument:()=>d.A,ownerWindow:()=>u.A,requirePropFactory:()=>p,setRef:()=>h,unstable_ClassNameGenerator:()=>b,unstable_useEnhancedEffect:()=>m.A,unstable_useId:()=>A.A,unsupportedProp:()=>x,useControlled:()=>f.A,useEventCallback:()=>g.A,useForkRef:()=>y.A,useIsFocusVisible:()=>v.A});var o=n(41681),a=n(61676),r=n(25920),i=n(23235),l=n(21209);const s=function(e,t){return()=>null};var c=n(60096),d=n(27402),u=n(70827);n(58168);const p=function(e,t){return()=>null};const h=n(25679).A;var m=n(79044),A=n(31014);const x=function(e,t,n,o,a){return null};var f=n(48733),g=n(1976),y=n(31506),v=n(94106);const b={configure:e=>{o.A.configure(e)}}},31014:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(28767).A}}]);