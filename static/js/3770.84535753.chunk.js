"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[3770],{32829:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(25371),r=n(44414);function a(e){let{children:t,type:n}=e;return(0,r.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(9950),r=n(14857),a=n(48089),i=n(45180),s=n(82053),l=n(50704),d=n(44414);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,o.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:o,children:u,content:h=!0,contentSX:p={},darkTitle:m,elevation:A,secondary:f,shadow:x,sx:y={},title:g,...b}=e;const v=(0,r.A)();return o="dark"===v.palette.mode?o||!0:o,(0,d.jsxs)(a.A,{elevation:A||0,ref:t,...b,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===v.palette.mode?v.palette.divider:v.palette.grey.A800,boxShadow:!o||n&&"dark"!==v.palette.mode?"inherit":x||v.customShadows.z1,":hover":{boxShadow:o?x||v.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:v.typography.fontFamily,fontSize:"0.75rem"},...y},children:[!m&&g&&(0,d.jsx)(i.A,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:g,action:f}),m&&g&&(0,d.jsx)(i.A,{sx:c,title:(0,d.jsx)(s.A,{variant:"h3",children:g}),action:f}),h&&(0,d.jsx)(l.A,{sx:p,children:u}),!h&&u]})}))},93383:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(9950),r=n(10226),a=n(46639),i=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:l,...d}=e;const[c,u]=o.useState(s);return(0,i.jsxs)(r.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:c||s||n,...d,children:[(c||s)&&(0,i.jsx)(a.A,{size:16,color:"primary",style:{marginRight:"10px"}}),l]})}},22403:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var o=n(9950),r=n(16491),a=n(60899),i=n(74745),s=n(82053),l=n(93230),d=n(3788),c=n(23114),u=n(16497),h=n(85815),p=n(93038),m=n(24516),A=n(2660),f=n(44414),x=n(25277),y=n(59254),g=n(96319),b=n(39325),v=n(25333),C=n(8145);const w={enter:"Enter",backspace:"Backspace"},j=229,S={ChipStyled:(0,y.Ay)(x.A)((e=>{let{theme:t,size:n}=e;return`\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ${"small"===n?"26px":"32px"};\n\n\n    &[aria-disabled="true"] > svg {\n      color: ${t.palette.action.disabled};\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ${t.palette.primary.light};\n      color: ${t.palette.primary.contrastText};\n    }\n  `}))},E=e=>{let{className:t,index:n,onDelete:o,disabled:r,onEdit:a,isEditing:i,disableEdition:s,...l}=e;return(0,f.jsx)(S.ChipStyled,{className:`MuiChipsInput-Chip ${i?"MuiChipsInput-Chip-Editing":""} ${t||""}`,onKeyDown:e=>{e.key===w.enter&&o(n)},disabled:r,onDoubleClick:s?void 0:e=>{e.target.textContent===l.label&&(r||a(n))},tabIndex:r?-1:0,"aria-disabled":r,onDelete:e=>{e?.preventDefault?.(),e?.stopPropagation?.(),o(n)},...l})};function P(e,t){"function"==typeof t?t(e):t&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)&&"current"in t&&(t.current=e)}const I=(0,y.Ay)("div")`
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  position: absolute;
`,_=(0,y.Ay)(C.A)((e=>`\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ${"small"===e.size?"5px":"9px"};\n      padding-right: ${e.InputProps?.endAdornment?"30px":"9px"};\n      padding-bottom: ${"small"===e.size?"5px":"9px"};\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ${"small"===e.size?"3.5px 4px":"7.5px 4px"};\n        align-self: center;\n      }\n    }\n  `)),T={ChipStyled:(0,y.Ay)(x.A)((e=>{let{theme:t,size:n}=e;return`\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ${"small"===n?"26px":"32px"};\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ${t.palette.action.disabled};\n      cursor: default;\n    }\n  `})),TextFieldStyled:_,EndAdornmentClose:I},R=o.forwardRef(((e,t)=>{let{chips:n,onAddChip:r,onEditChip:a,onDeleteChip:i,InputProps:s,onInputChange:l,disabled:d,clearInputOnBlur:c,addOnBlur:u,validate:h,error:p,helperText:m,hideClearAll:A,inputProps:x,size:y,disableDeleteOnBackspace:C,disableEdition:S,className:I,renderChip:_,addOnWhichKey:R,onFocus:k,onDeleteAllChips:D,inputRef:N,inputValue:M,...F}=e;const[$,O]=o.useState(""),[z,K]=o.useState(""),B=o.useRef(null),L=o.useRef(!1),V=o.useRef("string"==typeof M),[H,U]=o.useState(null),{onKeyDown:W,...G}=x||{},{inputRef:J,...X}=s||{},Y=()=>{K("")},q=V.current,Z=q?M:$,Q=e=>{l?.(e),q||O(e)},ee=()=>{U(null)},te=()=>{Y(),Q("")},ne=(e,t)=>n=>{if("function"==typeof h){const n=h(e);if(!1===n)return void t?.preventDefault();if(!function(e){return"boolean"==typeof e}(n)&&n.isError)return t?.preventDefault(),void K(n.textError)}n()},oe=(e,t,n)=>{ne(e,n)((()=>{a?.(e,t),ee(),te()}))},re=(e,t)=>{ne(e,t)((()=>{r?.(Z.trim()),te()}))},ae=()=>{if(L.current){if(null!==H)ee(),te();else if(u){if(Z.length>0){const e=Z.trim();0===e.length?te():null!==H?oe(e,H):re(e)}}else c&&te();L.current=!1}},ie=e=>{e===H?(te(),ee()):(e=>{Q(n[e]),U(e),Y()})(e),B.current?.focus()},se=e=>{d||(i?.(e),null!==H&&(ee(),te()))},le=n.length>0;return(0,f.jsx)(b.x,{onClickAway:ae,children:(0,f.jsx)(T.TextFieldStyled,{value:Z,onChange:e=>{Q(e.target.value)},ref:t,className:`MuiChipsInput-TextField ${I||""}`,size:y,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),k?.(e),L.current=!0},inputProps:{onKeyDown:e=>{const t=((e,t)=>t!==j&&(R?Array.isArray(R)?R.some((t=>t===e)):R===e:e===w.enter))(e.key,e.keyCode),o=e.key===w.backspace,r=Z.trim();if(t||"Tab"!==e.code){if(t&&e.preventDefault(),Z.length>0&&t)0===r.length?te():null!==H?oe(r,H,e):re(r,e);else if(o&&0===Z.length&&n.length>0&&!C){const e=n.length-1;i?.(e),H===e&&ee()}W?.(e)}else ae()},enterKeyHint:"done",...G},disabled:d,error:!!z||p,helperText:z||m,InputProps:{inputRef:e=>{B.current=e,N&&P(e,N),t&&P(e,t)},startAdornment:le?n.map(((e,t)=>{const n=`chip-${t}`,r={index:t,onEdit:ie,label:e,title:e,isEditing:t===H,size:y,disabled:d,disableEdition:S,onDelete:se};return _?_(E,n,r):(0,o.createElement)(E,{...r,key:n})})):null,endAdornment:A?null:(0,f.jsx)(T.EndAdornmentClose,{style:{visibility:le?"visible":"hidden"},children:(0,f.jsx)(v.A,{"aria-label":"Clear",title:"Clear",disabled:d,size:"small",onClick:e=>{e.preventDefault(),!A&&!d&&(D?.(),te(),ee())},children:(0,f.jsx)(g.A,{fontSize:"small"})})}),...X},...F})})}));const k=[],D=o.forwardRef(((e,t)=>{let{value:n=k,onChange:o,onAddChip:r,onInputChange:a,onDeleteChip:i,disabled:s,validate:l,clearInputOnBlur:d,addOnBlur:c,hideClearAll:u,disableDeleteOnBackspace:h,onEditChip:p,renderChip:m,disableEdition:A,addOnWhichKey:x=w.enter,inputValue:y,...g}=e;return(0,f.jsx)(R,{chips:n,onAddChip:e=>{if(s)return;const t=function(e,t){return[...e,t]}(n,e),a=t.length-1;r?.(e,a),o?.(t)},onInputChange:a,disableDeleteOnBackspace:h,onDeleteChip:e=>{if(s)return;const t=n[e];o?.(function(e,t){return e.filter(((e,n)=>t!==n))}(n,e)),i?.(t,e)},onEditChip:(e,t)=>{s||A||(o?.(function(e,t,n){return e.map(((e,o)=>t===o?n:e))}(n,t,e)),p?.(e,t))},renderChip:m,onDeleteAllChips:()=>{o?.([])},clearInputOnBlur:d,addOnBlur:c,disabled:s,disableEdition:A,validate:l,inputValue:y,hideClearAll:u,addOnWhichKey:x,...g,ref:t})}));var N=n(61467),M=n(51637),F=n(32829),$=n(70855),O=n(98415),z=n(93383),K=n(21788),B=n(90771);n(13953);const L={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},V={leadCaptureType:"flow",leadCaptureFormMode:"count",showFormAfterChats:3,defaultCountryCode:{countryId:"in",dialCode:"+91"}};const H=function(){const[e,t]=(0,$.G)();if(!t)return null;const{botSettings:n=V}=t;return(0,f.jsx)(M.A,{sx:L,content:!1,border:!1,boxShadow:!0,children:(0,f.jsx)(r.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,f.jsx)(N.l1,{initialValues:n,onSubmit:async(t,n)=>{let{setErrors:o,setStatus:r,setSubmitting:a}=n;try{await(0,O.gR)(e,t),r({success:!1}),a(!1),(0,K.i)(!0,"Settings saved successfully!","success")}catch(i){console.error(i),(0,K.i)(!0,"Unable to save settings. Please try again later.","error"),r({success:!1}),o({submit:i.message}),a(!1)}},children:e=>(0,f.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,f.jsxs)(a.Ay,{container:!0,spacing:3,children:[(0,f.jsx)(W,{...e}),(0,f.jsx)(G,{...e}),(0,f.jsx)(J,{...e}),(0,f.jsx)(X,{...e})]})})})})})};function U(e){"Enter"===e.key&&e.preventDefault()}function W(e){var t,n,r;let{values:A,touched:x,errors:y,handleBlur:g,handleChange:b,setFieldValue:v}=e;const C="form"===A.leadCaptureType,w="form"!==A.leadCaptureType||"keyword"===A.leadCaptureFormMode,[j,S]=o.useState((null===(t=A.defaultCountryCode)||void 0===t?void 0:t.countryId)||"in"),[E,P]=o.useState((null===(n=A.defaultCountryCode)||void 0===n?void 0:n.dialCode)||"+91");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsx)(i.A,{children:(0,f.jsx)(s.A,{variant:"subtitle1",children:"Lead Capture Settings"})})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"leadCaptureType",children:"Input Type"}),(0,f.jsxs)(c.A,{value:A.leadCaptureType,defaultValue:"flow",name:"leadCaptureType",onChange:b,children:[(0,f.jsx)(u.A,{value:"flow",control:(0,f.jsx)(h.A,{}),label:"Flow"}),(0,f.jsx)(u.A,{value:"form",control:(0,f.jsx)(h.A,{}),label:"Form"})]})]})}),C&&(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"leadCaptureFormMode",children:"When you want the form to be displayed?"}),(0,f.jsxs)(c.A,{value:A.leadCaptureFormMode,defaultValue:"count",id:"leadCaptureFormMode",name:"leadCaptureFormMode",onChange:b,children:[(0,f.jsx)(u.A,{value:"keyword",control:(0,f.jsx)(h.A,{}),label:"Show form when the keyword matches"}),(0,f.jsx)(u.A,{value:"count",control:(0,f.jsx)(h.A,{}),label:(0,f.jsxs)(f.Fragment,{children:["Show form after conversations:"," ",(0,f.jsx)("input",{value:null===(r=A.showFormAfterChats)||void 0===r?void 0:r.toString(),maxLength:2,style:{width:"50px"},disabled:"form"!==A.leadCaptureType||A.leadCaptureFormMode&&"count"!==A.leadCaptureFormMode,onChange:e=>v("showFormAfterChats",function(e,t){if(!e)return e;if(isNaN(e))return t;return Number(e)}(e.target.value,A.showFormAfterChats)),onKeyDown:U})]})})]})]})}),!C&&(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"leadCaptureFlowMandatory",children:"Can user proceed without providing contact details?"}),(0,f.jsx)(u.A,{value:"keyword",control:(0,f.jsx)(p.A,{checked:A.leadCaptureFlowMandatory,name:"leadCaptureFlowMandatory",onChange:b}),label:"Make the input mandatory"})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:12,children:"Default Phone number country code in contact form"}),(0,f.jsxs)(a.Ay,{item:!0,xs:12,md:3,sx:{position:"relative",display:"flex",alignItems:"center"},children:[(0,f.jsx)(B.cf,{selectedCountry:j,onSelect:e=>{let{iso2:t,dialCode:n}=e;S(t),v("defaultCountryCode",{countryId:t,dialCode:"+"+n}),P("+"+n)},onBlur:g,country:j,name:"defaultCountryCode",id:"defaultCountryCode"}),(0,f.jsxs)("span",{style:{marginLeft:"8px"},children:[" ",E]})]}),w&&(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"phoneNumberKeywords",children:"Keywords for Phone Number Collection *"}),(0,f.jsx)(Y,{name:"phoneNumberKeywords",value:A.phoneNumberKeywords||[],error:Boolean(x.phoneNumberKeywords&&y.phoneNumberKeywords),onBlur:g,onChange:v,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),x.phoneNumberKeywords&&y.phoneNumberKeywords&&(0,f.jsx)(m.A,{error:!0,id:"helper-text-email-keywords",children:y.phoneNumberKeywords})]})}),w&&(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"emailKeywords",children:"Keywords for Email Address Collection *"}),(0,f.jsx)(Y,{name:"emailKeywords",value:A.emailKeywords||[],error:Boolean(x.emailKeywords&&y.emailKeywords),onBlur:g,onChange:v,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),x.emailKeywords&&y.emailKeywords&&(0,f.jsx)(m.A,{error:!0,id:"helper-text-email-keywords",children:y.emailKeywords})]})})]})}function G(e){let{values:t,handleChange:n}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsx)(i.A,{children:(0,f.jsx)(s.A,{variant:"subtitle1",children:"Bot Industry and Role settings"})})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:4,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"industry",children:"Industry"}),(0,f.jsx)(A.A,{id:"industry",name:"industry",value:t.industry,onChange:n,"aria-label":"industry",onKeyDown:U})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:4,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"botRole",children:"Bot Role"}),(0,f.jsx)(A.A,{id:"botRole",name:"botRole",defaultValue:t.botRole,onChange:n,"aria-label":"bot role",onKeyDown:U})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:4,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"organizationName",children:"Organization Name"}),(0,f.jsx)(A.A,{id:"organizationName",name:"organizationName",defaultValue:t.organizationName,onChange:n,"aria-label":"organization name",onKeyDown:U})]})})]})}function J(e){let{values:t,handleChange:n}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsx)(i.A,{children:(0,f.jsx)(s.A,{variant:"subtitle1",children:"Allow / Block chat window"})})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"allowedIP",children:"Allowed IP"}),(0,f.jsx)(A.A,{id:"allowedIP",name:"allowedIP",value:t.allowedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341",onKeyDown:U})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"deniedIP",children:"Denied IP"}),(0,f.jsx)(A.A,{id:"deniedIP",name:"deniedIP",defaultValue:t.deniedIP,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341",onKeyDown:U})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"allowedPages",children:"Allowed Pages"}),(0,f.jsx)(A.A,{id:"allowedPages",name:"allowedPages",defaultValue:t.allowedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com",onKeyDown:U})]})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(l.A,{spacing:1,children:[(0,f.jsx)(d.A,{htmlFor:"deniedPages",children:"Denied Pages"}),(0,f.jsx)(A.A,{id:"deniedPages",name:"deniedPages",defaultValue:t.deniedPages,onChange:n,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com",onKeyDown:U})]})})]})}function X(e){let{errors:t,isSubmitting:n}=e;return(0,f.jsxs)(f.Fragment,{children:[t.submit&&(0,f.jsx)(a.Ay,{item:!0,xs:12,children:(0,f.jsx)(m.A,{error:!0,children:t.submit})}),(0,f.jsx)(a.Ay,{item:!0,xs:12,mt:2,children:(0,f.jsx)(F.A,{children:(0,f.jsx)(z.A,{disableElevation:!0,isLoading:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})})]})}function Y(e){let{id:t,name:n,value:r,onChange:a,...i}=e;const s=o.useRef(),l=e=>a(n,e);return(0,f.jsx)(D,{ref:s,id:t||n,name:n,addOnBlur:!0,value:r||[],onChange:l,onInputChange:e=>{e.endsWith(",")&&(r=[...r,e.substring(0,e.length-1)],l(r),s.current.value="")},...i})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>a,TF:()=>l,bE:()=>i,yJ:()=>s});var o=n(32026),r=n(44364);async function a(e,t){return d("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(e,t){return d("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return d("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return d("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,t,n){let{headers:o,noAuth:r,...a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const o=n.reduce(((e,n)=>{let o=t[n];return null===o||void 0===o?e:(o=`${n}=${encodeURIComponent(o)}`,e?`${e}&${o}`:o)}),"");o&&(e=`${e}${e.includes("?")?"&":"?"}${o}`)}if(e.startsWith("https://"))return e;return`${c}${e}`}(t,i?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&i?JSON.stringify(n):void 0),o||(o={}),s||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(o.Authorization=`Bearer ${e}`)}try{const r=await fetch(t,{...a,headers:o,body:n,method:e}),i=await r.json();if(r.ok){const{data:e,...t}=i;return delete t.status,e&&!Object.keys(t).length?e:i}throw i.message?new Error(i.message):i}catch(d){var l;throw console.error("Error calling API: ",d),null!==(l=d.message)&&void 0!==l&&l.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(d.message)}}const c=(0,o.s8)(r.jn,"/")},98415:(e,t,n)=>{n.d(t,{Ci:()=>u,I4:()=>c,TF:()=>l,gI:()=>i,gR:()=>p,jo:()=>d,rv:()=>m,so:()=>h,yo:()=>s});var o=n(8478),r=n(33340),a=n(32026);async function i(e){const{organization:{websiteUrl:t,_id:n}}=r.nc.getState(),a={organizationId:n,websiteUrl:t,botName:e,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};A(await o.bE(`/bot/${n}`,a),!0)}async function s(e,t,n){const{organizationId:a}=r.nc.getState();if(!a||!e)throw new Error("Bot details not found");const i=await o.yJ(`/bot/${a}/${e}`,t);return A(i,n),i}async function l(e){const{organizationId:t,selectedBotId:n}=r.nc.getState();if(!t||!e)throw new Error("Bot details not found");const{deleted:a}=await o.TF(`/bot/${t}/${e}`);if(a){let{botsMap:e,botsList:t}=r.nc.getState();e={...e},t=[...t],delete e[a];const o=t.findIndex((e=>e._id===a));o>=0&&t.splice(o,1);const s={botsMap:e,botsList:t};var i;if(n===a)s.selectedBotId=(null===(i=t[0])||void 0===i?void 0:i._id)||null;r.nc.setState(s)}return!!a}function d(e,t){let{botDesign:n}=r.nc.getState();return n={...n,...t},s(e,{botDesign:n})}async function c(e,t){const{organizationId:n,selectedBotId:a}=r.nc.getState(),i=new FormData;i.append("file",t);const s=await o.bE(`/bot/${n}/${a}/update-logo/${e}`,i);return m(a,s),s[`botDesign.${e}`]}async function u(e){const{organizationId:t,selectedBotId:n}=r.nc.getState(),a=await o.TF(`/bot/${t}/${n}/update-logo/${e}`);return m(n,a),a[`botDesign.${e}`]}function h(e,t){return s(e,{botName:t})}function p(e,t){let{botSettings:n={}}=r.nc.getState();return n={...n,...t},s(e,{botSettings:n})}function m(e,t){const{botsMap:n}=r.nc.getState(),o=n[e];if(!o)return;A(Object.keys(t).reduce(((e,n)=>(0,a.G6)(e,n,t[n])),o))}function A(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=e._id;let{botsMap:o,botsList:a}=r.nc.getState();o={...o,[n]:e},a=[...a];const i=a.findIndex((e=>e._id===n));i>=0?a[i]=e:a.push(e);const s={botsMap:o,botsList:a};t&&(s.selectedBotId=n),r.nc.setState(s)}},70855:(e,t,n)=>{n.d(t,{G:()=>r});var o=n(33340);function r(e){const t=(0,o.nc)((e=>e.selectedBotId)),n=(0,o.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function o(e,t){return e.replace(new RegExp(`${r(t)}+$`),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function i(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),a=t.substring(0,r),s=t.substring(r+1);o[a]=i(e[a],s,n)}else o[t]=n;return o}function s(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(36*Math.random()));return n}function d(e,t,n){if(!t&&!e)return n;e=e||{};const o=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const r=t.indexOf("."),a=t.substring(0,r),i=t.substring(r+1);o[a]=d(e[a],i,n)}else o[t]=n;return o}function c(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}n.d(t,{G6:()=>i,OX:()=>l,PE:()=>c,Yq:()=>a,do:()=>d,qW:()=>s,s8:()=>o})},44364:(e,t,n)=>{n.d(t,{DX:()=>s,Og:()=>a,jn:()=>o,pA:()=>i,pR:()=>r});const o="https://devbackend.livhousing.com:444",r="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},79526:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(75865)},16491:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(58168),r=n(98587),a=n(9950),i=n(72004),s=n(2199),l=n(70505),d=n(80237),c=n(7148),u=n(44414);const h=["className","component"];var p=n(44501),m=n(80376),A=n(67550);const f=(0,n(1763).A)("MuiBox",["root"]),x=(0,m.A)(),y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:p="MuiBox-root",generateClassName:m}=e,A=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.A);return a.forwardRef((function(e,a){const s=(0,c.A)(n),l=(0,d.A)(e),{className:f,component:x="div"}=l,y=(0,r.A)(l,h);return(0,u.jsx)(A,(0,o.A)({as:x,ref:a,className:(0,i.A)(f,m?m(p):p),theme:t&&s[t]||s},y))}))}({themeId:A.A,defaultTheme:x,defaultClassName:f.root,generateClassName:p.A.generate}),g=y},48089:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(58168),r=n(98587),a=n(9950),i=n(72004),s=n(88465),l=n(59254),d=n(18463),c=n(2235),u=n(1763),h=n(423);function p(e){return(0,h.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var m=n(44414);const A=["className","raised"],f=(0,l.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),x=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=n,c=(0,r.A)(n,A),u=(0,o.A)({},n,{raised:l}),h=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},p,t)})(u);return(0,m.jsx)(f,(0,o.A)({className:(0,i.A)(h.root,a),elevation:l?8:void 0,ref:t,ownerState:u},c))}))},50704:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(58168),r=n(98587),a=n(9950),i=n(72004),s=n(88465),l=n(59254),d=n(18463),c=n(1763),u=n(423);function h(e){return(0,u.Ay)("MuiCardContent",e)}(0,c.A)("MuiCardContent",["root"]);var p=n(44414);const m=["className","component"],A=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=n,c=(0,r.A)(n,m),u=(0,o.A)({},n,{component:l}),f=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},h,t)})(u);return(0,p.jsx)(A,(0,o.A)({as:l,className:(0,i.A)(f.root,a),ownerState:u,ref:t},c))}))},45180:(e,t,n)=>{n.d(t,{A:()=>v});var o=n(98587),r=n(58168),a=n(9950),i=n(72004),s=n(88465),l=n(82053),d=n(18463),c=n(59254),u=n(1763),h=n(423);function p(e){return(0,h.Ay)("MuiCardHeader",e)}const m=(0,u.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var A=n(44414);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.A)({[`& .${m.title}`]:t.title,[`& .${m.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),v=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiCardHeader"}),{action:a,avatar:c,className:u,component:h="div",disableTypography:m=!1,subheader:v,subheaderTypographyProps:C,title:w,titleTypographyProps:j}=n,S=(0,o.A)(n,f),E=(0,r.A)({},n,{component:h,disableTypography:m}),P=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(E);let I=w;null==I||I.type===l.A||m||(I=(0,A.jsx)(l.A,(0,r.A)({variant:c?"body2":"h5",className:P.title,component:"span",display:"block"},j,{children:I})));let _=v;return null==_||_.type===l.A||m||(_=(0,A.jsx)(l.A,(0,r.A)({variant:c?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:_}))),(0,A.jsxs)(x,(0,r.A)({className:(0,i.A)(P.root,u),as:h,ref:t,ownerState:E},S,{children:[c&&(0,A.jsx)(y,{className:P.avatar,ownerState:E,children:c}),(0,A.jsxs)(b,{className:P.content,ownerState:E,children:[I,_]}),a&&(0,A.jsx)(g,{className:P.action,ownerState:E,children:a})]}))}))},93038:(e,t,n)=>{n.d(t,{A:()=>I});var o=n(98587),r=n(58168),a=n(9950),i=n(72004),s=n(88465),l=n(99269),d=n(46282),c=n(23235),u=n(44414);const h=(0,c.A)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,c.A)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,c.A)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var A=n(61676),f=n(18463),x=n(59254),y=n(19608),g=n(1763),b=n(423);function v(e){return(0,b.Ay)("MuiCheckbox",e)}const C=(0,g.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,x.Ay)(d.A,{shouldForwardProp:e=>(0,y.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t[`size${(0,A.A)(n.size)}`],"default"!==n.color&&t[`color${(0,A.A)(n.color)}`]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,l.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${C.checked}, &.${C.indeterminate}`]:{color:(t.vars||t).palette[n.color].main},[`&.${C.disabled}`]:{color:(t.vars||t).palette.action.disabled}})})),S=(0,u.jsx)(p,{}),E=(0,u.jsx)(h,{}),P=(0,u.jsx)(m,{}),I=a.forwardRef((function(e,t){var n,l;const d=(0,f.b)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=S,color:h="primary",icon:p=E,indeterminate:m=!1,indeterminateIcon:x=P,inputProps:y,size:g="medium",className:b}=d,C=(0,o.A)(d,w),I=m?x:p,_=m?x:c,T=(0,r.A)({},d,{color:h,indeterminate:m,size:g}),R=(e=>{const{classes:t,indeterminate:n,color:o,size:a}=e,i={root:["root",n&&"indeterminate",`color${(0,A.A)(o)}`,`size${(0,A.A)(a)}`]},l=(0,s.A)(i,v,t);return(0,r.A)({},t,l)})(T);return(0,u.jsx)(j,(0,r.A)({type:"checkbox",inputProps:(0,r.A)({"data-indeterminate":m},y),icon:a.cloneElement(I,{fontSize:null!=(n=I.props.fontSize)?n:g}),checkedIcon:a.cloneElement(_,{fontSize:null!=(l=_.props.fontSize)?l:g}),ownerState:T,ref:t,className:(0,i.A)(R.root,b)},C,{classes:R}))}))},25920:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(85511).A},75865:(e,t,n)=>{n.r(t),n.d(t,{capitalize:()=>r.A,createChainedFunction:()=>a.A,createSvgIcon:()=>i.A,debounce:()=>s.A,deprecatedPropType:()=>l,isMuiElement:()=>d.A,ownerDocument:()=>c.A,ownerWindow:()=>u.A,requirePropFactory:()=>h,setRef:()=>p,unstable_ClassNameGenerator:()=>v,unstable_useEnhancedEffect:()=>m.A,unstable_useId:()=>A.A,unsupportedProp:()=>f,useControlled:()=>x.A,useEventCallback:()=>y.A,useForkRef:()=>g.A,useIsFocusVisible:()=>b.A});var o=n(44501),r=n(61676),a=n(25920),i=n(23235),s=n(21209);const l=function(e,t){return()=>null};var d=n(3828),c=n(27402),u=n(70827);n(58168);const h=function(e,t){return()=>null};const p=n(75587).A;var m=n(79044),A=n(31014);const f=function(e,t,n,o,r){return null};var x=n(48733),y=n(1976),g=n(31506),b=n(32937);const v={configure:e=>{o.A.configure(e)}}},31014:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(93539).A}}]);