"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[3770],{32829:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(79875),a=t(44414);function r(e){let{children:n,type:t}=e;return(0,a.jsx)(o.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}r.defaultProps={type:"scale"}},51637:(e,n,t)=>{t.d(n,{A:()=>A});var o=t(89379),a=t(80045),r=t(9950),i=t(14857),l=t(48089),s=t(45180),d=t(82053),c=t(50704),u=t(44414);const h=["border","boxShadow","children","content","contentSX","darkTitle","elevation","secondary","shadow","sx","title"],p={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},A=(0,r.forwardRef)(((e,n)=>{let{border:t=!0,boxShadow:r,children:A,content:m=!0,contentSX:x={},darkTitle:f,elevation:g,secondary:y,shadow:b,sx:C={},title:v}=e,w=(0,a.A)(e,h);const j=(0,i.A)();return r="dark"===j.palette.mode?r||!0:r,(0,u.jsxs)(l.A,(0,o.A)((0,o.A)({elevation:g||0,ref:n},w),{},{sx:(0,o.A)({border:t?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!r||t&&"dark"!==j.palette.mode?"inherit":b||j.customShadows.z1,":hover":{boxShadow:r?b||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"}},C),children:[!f&&v&&(0,u.jsx)(s.A,{sx:p,titleTypographyProps:{variant:"subtitle1"},title:v,action:y}),f&&v&&(0,u.jsx)(s.A,{sx:p,title:(0,u.jsx)(d.A,{variant:"h3",children:v}),action:y}),m&&(0,u.jsx)(c.A,{sx:x,children:A}),!m&&A]}))}))},93383:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(89379),a=t(80045),r=t(9950),i=t(10226),l=t(46639),s=t(44414);const d=["onClick","disabled","isLoading","children"];const c=function(e){let{onClick:n,disabled:t,isLoading:c,children:u}=e,h=(0,a.A)(e,d);const[p,A]=r.useState(c);return(0,s.jsxs)(i.A,(0,o.A)((0,o.A)({onClick:e=>{if(!n)return;const t=n(e);"function"===typeof(null===t||void 0===t?void 0:t.finally)&&(A(!0),t.finally((()=>A(!1))))},disabled:p||c||t},h),{},{children:[(p||c)&&(0,s.jsx)(l.A,{size:16,color:"primary",style:{marginRight:"10px"}}),u]}))}},22403:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ne});var o,a=t(80045),r=t(89379),i=t(9950),l=t(78317),s=t(60899),d=t(74745),c=t(82053),u=t(81616),h=t(3788),p=t(23114),A=t(16497),m=t(85815),x=t(93038),f=t(24516),g=t(2660),y=t(57528),b=t(44414),C=t(25277),v=t(59254),w=t(96319),j=t(39325),S=t(25333),P=t(8145);const E=["className","index","onDelete","disabled","onEdit","isEditing","disableEdition"],I=["chips","onAddChip","onEditChip","onDeleteChip","InputProps","onInputChange","disabled","clearInputOnBlur","addOnBlur","validate","error","helperText","hideClearAll","inputProps","size","disableDeleteOnBackspace","disableEdition","className","renderChip","addOnWhichKey","onFocus","onDeleteAllChips","inputRef","inputValue"],_=["onKeyDown"],T=["inputRef"],D=["value","onChange","onAddChip","onInputChange","onDeleteChip","disabled","validate","clearInputOnBlur","addOnBlur","hideClearAll","disableDeleteOnBackspace","onEditChip","renderChip","disableEdition","addOnWhichKey","inputValue"],k={enter:"Enter",backspace:"Backspace"},R=229,O={ChipStyled:(0,v.Ay)(C.A)((e=>{let{theme:n,size:t}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===t?"26px":"32px",';\n\n\n    &[aria-disabled="true"] > svg {\n      color: ').concat(n.palette.action.disabled,";\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ").concat(n.palette.primary.light,";\n      color: ").concat(n.palette.primary.contrastText,";\n    }\n  ")}))},F=e=>{let{className:n,index:t,onDelete:o,disabled:i,onEdit:l,isEditing:s,disableEdition:d}=e,c=(0,a.A)(e,E);return(0,b.jsx)(O.ChipStyled,(0,r.A)({className:"MuiChipsInput-Chip ".concat(s?"MuiChipsInput-Chip-Editing":""," ").concat(n||""),onKeyDown:e=>{e.key===k.enter&&o(t)},disabled:i,onDoubleClick:d?void 0:e=>{e.target.textContent===c.label&&(i||l(t))},tabIndex:i?-1:0,"aria-disabled":i,onDelete:e=>{var n,a;null!==e&&void 0!==e&&null!==(n=e.preventDefault)&&void 0!==n&&n.call(e),null!==e&&void 0!==e&&null!==(a=e.stopPropagation)&&void 0!==a&&a.call(e),o(t)}},c))};function M(e,n){"function"==typeof n?n(e):n&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(n)&&"current"in n&&(n.current=e)}const K=(0,v.Ay)("div")(o||(o=(0,y.A)(["\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  position: absolute;\n"]))),z=(0,v.Ay)(P.A)((e=>{var n;return"\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ".concat("small"===e.size?"5px":"9px",";\n      padding-right: ").concat(null!==(n=e.InputProps)&&void 0!==n&&n.endAdornment?"30px":"9px",";\n      padding-bottom: ").concat("small"===e.size?"5px":"9px",";\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ").concat("small"===e.size?"3.5px 4px":"7.5px 4px",";\n        align-self: center;\n      }\n    }\n  ")})),N={ChipStyled:(0,v.Ay)(C.A)((e=>{let{theme:n,size:t}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===t?"26px":"32px",';\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ').concat(n.palette.action.disabled,";\n      cursor: default;\n    }\n  ")})),TextFieldStyled:z,EndAdornmentClose:K},B=i.forwardRef(((e,n)=>{let{chips:t,onAddChip:o,onEditChip:l,onDeleteChip:s,InputProps:d,onInputChange:c,disabled:u,clearInputOnBlur:h,addOnBlur:p,validate:A,error:m,helperText:x,hideClearAll:f,inputProps:g,size:y,disableDeleteOnBackspace:C,disableEdition:v,className:P,renderChip:E,addOnWhichKey:D,onFocus:O,onDeleteAllChips:K,inputRef:z,inputValue:B}=e,L=(0,a.A)(e,I);const[V,G]=i.useState(""),[U,W]=i.useState(""),H=i.useRef(null),J=i.useRef(!1),Y=i.useRef("string"==typeof B),[X,Z]=i.useState(null),q=g||{},{onKeyDown:Q}=q,$=(0,a.A)(q,_),ee=d||{},{inputRef:ne}=ee,te=(0,a.A)(ee,T),oe=()=>{W("")},ae=Y.current,re=ae?B:V,ie=e=>{null!==c&&void 0!==c&&c(e),ae||G(e)},le=()=>{Z(null)},se=()=>{oe(),ie("")},de=(e,n)=>t=>{if("function"==typeof A){const t=A(e);if(!1===t)return void(null===n||void 0===n||n.preventDefault());if(!function(e){return"boolean"==typeof e}(t)&&t.isError)return null!==n&&void 0!==n&&n.preventDefault(),void W(t.textError)}t()},ce=(e,n,t)=>{de(e,t)((()=>{null!==l&&void 0!==l&&l(e,n),le(),se()}))},ue=(e,n)=>{de(e,n)((()=>{null!==o&&void 0!==o&&o(re.trim()),se()}))},he=()=>{if(J.current){if(null!==X)le(),se();else if(p){if(re.length>0){const e=re.trim();0===e.length?se():null!==X?ce(e,X):ue(e)}}else h&&se();J.current=!1}},pe=e=>{var n;e===X?(se(),le()):(e=>{ie(t[e]),Z(e),oe()})(e),null===(n=H.current)||void 0===n||n.focus()},Ae=e=>{u||(null!==s&&void 0!==s&&s(e),null!==X&&(le(),se()))},me=t.length>0;return(0,b.jsx)(j.x,{onClickAway:he,children:(0,b.jsx)(N.TextFieldStyled,(0,r.A)({value:re,onChange:e=>{ie(e.target.value)},ref:n,className:"MuiChipsInput-TextField ".concat(P||""),size:y,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),null!==O&&void 0!==O&&O(e),J.current=!0},inputProps:(0,r.A)({onKeyDown:e=>{const n=((e,n)=>n!==R&&(D?Array.isArray(D)?D.some((n=>n===e)):D===e:e===k.enter))(e.key,e.keyCode),o=e.key===k.backspace,a=re.trim();if(n||"Tab"!==e.code){if(n&&e.preventDefault(),re.length>0&&n)0===a.length?se():null!==X?ce(a,X,e):ue(a,e);else if(o&&0===re.length&&t.length>0&&!C){const e=t.length-1;null!==s&&void 0!==s&&s(e),X===e&&le()}null===Q||void 0===Q||Q(e)}else he()},enterKeyHint:"done"},$),disabled:u,error:!!U||m,helperText:U||x,InputProps:(0,r.A)({inputRef:e=>{H.current=e,z&&M(e,z),n&&M(e,n)},startAdornment:me?t.map(((e,n)=>{const t="chip-".concat(n),o={index:n,onEdit:pe,label:e,title:e,isEditing:n===X,size:y,disabled:u,disableEdition:v,onDelete:Ae};return E?E(F,t,o):(0,i.createElement)(F,(0,r.A)((0,r.A)({},o),{},{key:t}))})):null,endAdornment:f?null:(0,b.jsx)(N.EndAdornmentClose,{style:{visibility:me?"visible":"hidden"},children:(0,b.jsx)(S.A,{"aria-label":"Clear",title:"Clear",disabled:u,size:"small",onClick:e=>{e.preventDefault(),!f&&!u&&(null!==K&&void 0!==K&&K(),se(),le())},children:(0,b.jsx)(w.A,{fontSize:"small"})})})},te)},L))})}));const L=[],V=i.forwardRef(((e,n)=>{let{value:t=L,onChange:o,onAddChip:i,onInputChange:l,onDeleteChip:s,disabled:d,validate:c,clearInputOnBlur:u,addOnBlur:h,hideClearAll:p,disableDeleteOnBackspace:A,onEditChip:m,renderChip:x,disableEdition:f,addOnWhichKey:g=k.enter,inputValue:y}=e,C=(0,a.A)(e,D);return(0,b.jsx)(B,(0,r.A)((0,r.A)({chips:t,onAddChip:e=>{if(d)return;const n=function(e,n){return[...e,n]}(t,e),a=n.length-1;null!==i&&void 0!==i&&i(e,a),null===o||void 0===o||o(n)},onInputChange:l,disableDeleteOnBackspace:A,onDeleteChip:e=>{if(d)return;const n=t[e];null!==o&&void 0!==o&&o(function(e,n){return e.filter(((e,t)=>n!==t))}(t,e)),null===s||void 0===s||s(n,e)},onEditChip:(e,n)=>{d||f||(null!==o&&void 0!==o&&o(function(e,n,t){return e.map(((e,o)=>n===o?t:e))}(t,n,e)),null===m||void 0===m||m(e,n))},renderChip:x,onDeleteAllChips:()=>{null===o||void 0===o||o([])},clearInputOnBlur:u,addOnBlur:h,disabled:d,disableEdition:f,validate:c,inputValue:y,hideClearAll:p,addOnWhichKey:g},C),{},{ref:n}))}));var G=t(61467),U=t(51637),W=t(32829),H=t(70855),J=t(98415),Y=t(93383),X=t(21788),Z=t(90771),q=t(33340);t(13953);const Q=["id","name","value","onChange"],$={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},ee={leadCaptureType:"flow",leadCaptureFormMode:"count",showFormAfterChats:3,defaultCountryCode:{countryId:"in",dialCode:"+91"}};const ne=function(){const[e,n]=(0,H.G)();if(!n)return null;const{botSettings:t=ee}=n;return(0,b.jsx)(U.A,{sx:$,content:!1,border:!1,boxShadow:!0,children:(0,b.jsx)(l.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,b.jsx)(G.l1,{initialValues:t,onSubmit:async(n,t)=>{let{setErrors:o,setStatus:a,setSubmitting:r}=t;try{await(0,J.gR)(e,n),a({success:!1}),r(!1),(0,X.i)(!0,"Settings saved successfully!","success")}catch(i){console.error(i),(0,X.i)(!0,"Unable to save settings. Please try again later.","error"),a({success:!1}),o({submit:i.message}),r(!1)}},children:e=>(0,b.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:(0,b.jsxs)(s.Ay,{container:!0,spacing:3,children:[(0,b.jsx)(oe,(0,r.A)({},e)),(0,b.jsx)(ae,(0,r.A)({},e)),(0,b.jsx)(re,(0,r.A)({},e)),(0,b.jsx)(ie,(0,r.A)({},e))]})})})})})};function te(e){"Enter"===e.key&&e.preventDefault()}function oe(e){var n,t,o,a;let{values:r,touched:l,errors:g,handleBlur:y,handleChange:C,setFieldValue:v}=e;const w="form"===r.leadCaptureType,j="form"!==r.leadCaptureType||"keyword"===r.leadCaptureFormMode,[S,P]=i.useState((null===(n=r.defaultCountryCode)||void 0===n?void 0:n.countryId)||"in"),[E,I]=i.useState((null===(t=r.defaultCountryCode)||void 0===t?void 0:t.dialCode)||"+91");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsx)(d.A,{children:(0,b.jsx)(c.A,{variant:"subtitle1",children:"Lead Capture Settings"})})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"leadCaptureType",children:"Input Type"}),(0,b.jsxs)(p.A,{value:r.leadCaptureType,defaultValue:"flow",name:"leadCaptureType",onChange:C,children:[(0,b.jsx)(A.A,{value:"flow",control:(0,b.jsx)(m.A,{}),label:"Flow"}),(0,b.jsx)(A.A,{value:"form",control:(0,b.jsx)(m.A,{}),label:"Form"})]})]})}),w&&(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"leadCaptureFormMode",children:"When you want the form to be displayed?"}),(0,b.jsxs)(p.A,{value:r.leadCaptureFormMode,defaultValue:"count",id:"leadCaptureFormMode",name:"leadCaptureFormMode",onChange:C,children:[(0,b.jsx)(A.A,{value:"keyword",control:(0,b.jsx)(m.A,{}),label:"Show form when the keyword matches"}),(0,b.jsx)(A.A,{value:"count",control:(0,b.jsx)(m.A,{}),label:(0,b.jsxs)(b.Fragment,{children:["Show form after conversations:"," ",(0,b.jsx)("input",{value:null===(o=r.showFormAfterChats)||void 0===o?void 0:o.toString(),maxLength:2,style:{width:"50px"},disabled:"form"!==r.leadCaptureType||r.leadCaptureFormMode&&"count"!==r.leadCaptureFormMode,onChange:e=>v("showFormAfterChats",le(e.target.value,r.showFormAfterChats)),onKeyDown:te})]})})]})]})}),!w&&(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"leadCaptureFlowMandatory",children:"Can user proceed without providing contact details?"}),(0,b.jsx)(A.A,{value:"keyword",control:(0,b.jsx)(x.A,{checked:r.leadCaptureFlowMandatory,name:"leadCaptureFlowMandatory",onChange:C}),label:"Make the input mandatory"})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:12,children:"Default Phone number country code in contact form"}),(0,b.jsxs)(s.Ay,{item:!0,xs:12,md:3,sx:{position:"relative",display:"flex",alignItems:"center"},children:[(0,b.jsx)(Z.cf,{selectedCountry:S,onSelect:e=>{let{iso2:n,dialCode:t}=e;P(n),v("defaultCountryCode",{countryId:n,dialCode:"+"+t}),I("+"+t)},onBlur:y,country:S,name:"defaultCountryCode",id:"defaultCountryCode"}),(0,b.jsxs)("span",{style:{marginLeft:"8px"},children:[" ",E]})]}),(0,b.jsxs)(s.Ay,{item:!0,xs:12,md:12,children:["Number of visitor messages send to GPT for answer "," ",(0,b.jsx)("input",{value:(null===(a=r.maxChatMessagesToSentToGPT)||void 0===a?void 0:a.toString())||17,maxLength:2,style:{width:"50px"},onChange:e=>v("maxChatMessagesToSentToGPT",le(e.target.value,r.maxChatMessagesToSentToGPT)),onKeyDown:te})]}),j&&(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"phoneNumberKeywords",children:"Keywords for Phone Number Collection *"}),(0,b.jsx)(se,{name:"phoneNumberKeywords",value:r.phoneNumberKeywords||[],error:Boolean(l.phoneNumberKeywords&&g.phoneNumberKeywords),onBlur:y,onChange:v,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),l.phoneNumberKeywords&&g.phoneNumberKeywords&&(0,b.jsx)(f.A,{error:!0,id:"helper-text-email-keywords",children:g.phoneNumberKeywords})]})}),j&&(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"emailKeywords",children:"Keywords for Email Address Collection *"}),(0,b.jsx)(se,{name:"emailKeywords",value:r.emailKeywords||[],error:Boolean(l.emailKeywords&&g.emailKeywords),onBlur:y,onChange:v,placeholder:"Type keyword and press enter to add more...",inputProps:{maxLength:25}}),l.emailKeywords&&g.emailKeywords&&(0,b.jsx)(f.A,{error:!0,id:"helper-text-email-keywords",children:g.emailKeywords})]})})]})}function ae(e){let{values:n,handleChange:t}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsx)(d.A,{children:(0,b.jsx)(c.A,{variant:"subtitle1",children:"Bot Industry and Role settings"})})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"industry",children:"Industry"}),(0,b.jsx)(g.A,{id:"industry",name:"industry",value:n.industry,onChange:t,"aria-label":"industry",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"botRole",children:"Bot Role"}),(0,b.jsx)(g.A,{id:"botRole",name:"botRole",defaultValue:n.botRole,onChange:t,"aria-label":"bot role",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:4,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"organizationName",children:"Organization Name"}),(0,b.jsx)(g.A,{id:"organizationName",name:"organizationName",defaultValue:n.organizationName,onChange:t,"aria-label":"organization name",onKeyDown:te})]})})]})}function re(e){let{values:n,handleChange:t}=e;const o=(0,q.nc)((e=>e.isSuperUser));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsx)(d.A,{children:(0,b.jsx)(c.A,{variant:"subtitle1",children:"Allow / Block chat window"})})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"allowedIP",children:"Allowed IP"}),(0,b.jsx)(g.A,{id:"allowedIP",name:"allowedIP",value:n.allowedIP,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"deniedIP",children:"Denied IP"}),(0,b.jsx)(g.A,{id:"deniedIP",name:"deniedIP",defaultValue:n.deniedIP,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: 192.167.22.340, 192.167.22.341",onKeyDown:te})]})}),o&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"allowedPages",children:"Allowed Pages"}),(0,b.jsx)(g.A,{id:"allowedPages",name:"allowedPages",defaultValue:n.allowedPages,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"deniedPages",children:"Denied Pages"}),(0,b.jsx)(g.A,{id:"deniedPages",name:"deniedPages",defaultValue:n.deniedPages,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: https://xyz.com, https://abc.com",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"allowedCountries",children:"Allowed Countries"}),(0,b.jsx)(g.A,{id:"allowedCountries",name:"allowedCountries",defaultValue:n.allowedCountries,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: India, Oman, Australia",onKeyDown:te})]})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,md:6,children:(0,b.jsxs)(u.A,{spacing:1,children:[(0,b.jsx)(h.A,{htmlFor:"deniedCountries",children:"Denied Countries"}),(0,b.jsx)(g.A,{id:"deniedCountries",name:"deniedCountries",defaultValue:n.deniedCountries,onChange:t,"aria-label":"empty textarea",placeholder:"Ex: Sri Lanka, Bhutan",onKeyDown:te})]})})]})]})}function ie(e){let{errors:n,isSubmitting:t}=e;return(0,b.jsxs)(b.Fragment,{children:[n.submit&&(0,b.jsx)(s.Ay,{item:!0,xs:12,children:(0,b.jsx)(f.A,{error:!0,children:n.submit})}),(0,b.jsx)(s.Ay,{item:!0,xs:12,mt:2,children:(0,b.jsx)(W.A,{children:(0,b.jsx)(Y.A,{disableElevation:!0,isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})})]})}function le(e,n){return e?isNaN(e)?n:Number(e):e}function se(e){let{id:n,name:t,value:o,onChange:l}=e,s=(0,a.A)(e,Q);const d=i.useRef(),c=e=>l(t,e);return(0,b.jsx)(V,(0,r.A)({ref:d,id:n||t,name:t,addOnBlur:!0,value:o||[],onChange:c,onInputChange:e=>{e.endsWith(",")&&(o=[...o,e.substring(0,e.length-1)],c(o),d.current.value="")}},s))}},8478:(e,n,t)=>{t.d(n,{Jt:()=>d,TF:()=>h,bE:()=>c,yJ:()=>u});var o=t(89379),a=t(80045),r=t(32026),i=t(44364);const l=["headers","noAuth"],s=["data"];async function d(e,n){return p("GET",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,n){return p("POST",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function u(e,n){return p("PUT",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function h(e,n){return p("DELETE",e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function p(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{headers:i,noAuth:d}=r,c=(0,a.A)(r,l);const u="POST"===e||"PUT"===e||"DELETE"===e;n=function(e,n){if(!e)return e;const t=n&&Object.keys(n);if(null!==t&&void 0!==t&&t.length){const o=t.reduce(((e,t)=>{let o=n[t];return null===o||void 0===o?e:(o="".concat(t,"=").concat(encodeURIComponent(o)),e?"".concat(e,"&").concat(o):o)}),"");o&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(o))}if(e.startsWith("https://"))return e;return"".concat(A).concat(e)}(n,u?void 0:t);const h=t instanceof FormData;if(h||(t=t&&"object"===typeof t&&u?JSON.stringify(t):void 0),i||(i={}),h||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==d){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const r=await fetch(n,(0,o.A)((0,o.A)({},c),{},{headers:i,body:t,method:e})),l=await r.json();if(r.ok){const{data:e}=l,n=(0,a.A)(l,s);return delete n.status,e&&!Object.keys(n).length?e:l}throw l.message?new Error(l.message):l}catch(m){var p;throw console.error("Error calling API: ",m),null!==(p=m.message)&&void 0!==p&&p.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(m.message)}}const A=(0,r.s8)(i.jn,"/")},98415:(e,n,t)=>{t.d(n,{Ci:()=>h,I4:()=>u,TF:()=>d,gI:()=>l,gR:()=>A,jo:()=>c,rv:()=>m,so:()=>p,yo:()=>s});var o=t(89379),a=t(8478),r=t(33340),i=t(32026);async function l(e){const{organization:{websiteUrl:n,_id:t}}=r.nc.getState(),o={organizationId:t,websiteUrl:n,botName:e,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};x(await a.bE("/bot/".concat(t),o),!0)}async function s(e,n,t){const{organizationId:o}=r.nc.getState();if(!o||!e)throw new Error("Bot details not found");const i=await a.yJ("/bot/".concat(o,"/").concat(e),n);return x(i,t),i}async function d(e){const{organizationId:n,selectedBotId:t}=r.nc.getState();if(!n||!e)throw new Error("Bot details not found");const{deleted:i}=await a.TF("/bot/".concat(n,"/").concat(e));if(i){let{botsMap:e,botsList:n}=r.nc.getState();e=(0,o.A)({},e),n=[...n],delete e[i];const a=n.findIndex((e=>e._id===i));a>=0&&n.splice(a,1);const s={botsMap:e,botsList:n};var l;if(t===i)s.selectedBotId=(null===(l=n[0])||void 0===l?void 0:l._id)||null;r.nc.setState(s)}return!!i}function c(e,n){let{botDesign:t}=r.nc.getState();return t=(0,o.A)((0,o.A)({},t),n),s(e,{botDesign:t})}async function u(e,n){const{organizationId:t,selectedBotId:o}=r.nc.getState(),i=new FormData;i.append("file",n);const l=await a.bE("/bot/".concat(t,"/").concat(o,"/update-logo/").concat(e),i);return m(o,l),l["botDesign.".concat(e)]}async function h(e){const{organizationId:n,selectedBotId:t}=r.nc.getState(),o=await a.TF("/bot/".concat(n,"/").concat(t,"/update-logo/").concat(e));return m(t,o),o["botDesign.".concat(e)]}function p(e,n){return s(e,{botName:n})}function A(e,n){let{botSettings:t={}}=r.nc.getState();return t=(0,o.A)((0,o.A)({},t),n),s(e,{botSettings:t})}function m(e,n){const{botsMap:t}=r.nc.getState(),o=t[e];if(!o)return;x(Object.keys(n).reduce(((e,t)=>(0,i.G6)(e,t,n[t])),o))}function x(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=e._id;let{botsMap:a,botsList:i}=r.nc.getState();a=(0,o.A)((0,o.A)({},a),{},{[t]:e}),i=[...i];const l=i.findIndex((e=>e._id===t));l>=0?i[l]=e:i.push(e);const s={botsMap:a,botsList:i};n&&(s.selectedBotId=t),r.nc.setState(s)}},70855:(e,n,t)=>{t.d(n,{G:()=>a});var o=t(33340);function a(e){const n=(0,o.nc)((e=>e.selectedBotId)),t=(0,o.nc)((t=>t.botsMap[e||n]));return[e||n,t]}},32026:(e,n,t)=>{t.d(n,{G6:()=>l,OX:()=>d,PE:()=>u,Yq:()=>i,do:()=>c,qW:()=>s,s8:()=>a});var o=t(89379);function a(e,n){return e.replace(new RegExp("".concat(r(n),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function i(e){const n=new Date(e),t=n.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],a=n.getFullYear();return"".concat(o," ").concat(t,", ").concat(a)}function l(e,n,t){if(!n&&!e)return t;e=e||{};const a=Array.isArray(e)?[...e]:(0,o.A)({},e);if(n.includes(".")){const o=n.indexOf("."),r=n.substring(0,o),i=n.substring(o+1);a[r]=l(e[r],i,t)}else a[n]=t;return a}function s(e,n){return btoa("".concat(e,"_").concat(n,"_whatsapp_int"))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const n="abcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let o=0;o<e;o++)t+=n.charAt(Math.floor(36*Math.random()));return t}function c(e,n,t){if(!n&&!e)return t;e=e||{};const a=Array.isArray(e)?[...e]:(0,o.A)({},e);if(n.includes(".")){const o=n.indexOf("."),r=n.substring(0,o),i=n.substring(o+1);a[r]=c(e[r],i,t)}else a[n]=t;return a}function u(e,n){const t=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o)}},44364:(e,n,t)=>{t.d(n,{DX:()=>s,Og:()=>r,jn:()=>o,mB:()=>l,pA:()=>i,pR:()=>a});const o="https://devbackend.livhousing.com:444",a="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,l="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},79526:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(75865)},93038:(e,n,t)=>{t.d(n,{A:()=>I});var o=t(98587),a=t(58168),r=t(9950),i=t(72004),l=t(88465),s=t(9240),d=t(46282),c=t(23235),u=t(44414);const h=(0,c.A)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,c.A)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),A=(0,c.A)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var m=t(61676),x=t(18463),f=t(59254),g=t(19608),y=t(1763),b=t(423);function C(e){return(0,b.Ay)("MuiCheckbox",e)}const v=(0,y.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,f.Ay)(d.A,{shouldForwardProp:e=>(0,g.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,n["size".concat((0,m.A)(t.size))],"default"!==t.color&&n["color".concat((0,m.A)(t.color))]]}})((e=>{let{theme:n,ownerState:t}=e;return(0,a.A)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette[t.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.X4)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{["&.".concat(v.checked,", &.").concat(v.indeterminate)]:{color:(n.vars||n).palette[t.color].main},["&.".concat(v.disabled)]:{color:(n.vars||n).palette.action.disabled}})})),S=(0,u.jsx)(p,{}),P=(0,u.jsx)(h,{}),E=(0,u.jsx)(A,{}),I=r.forwardRef((function(e,n){var t,s;const d=(0,x.b)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=S,color:h="primary",icon:p=P,indeterminate:A=!1,indeterminateIcon:f=E,inputProps:g,size:y="medium",className:b}=d,v=(0,o.A)(d,w),I=A?f:p,_=A?f:c,T=(0,a.A)({},d,{color:h,indeterminate:A,size:y}),D=(e=>{const{classes:n,indeterminate:t,color:o,size:r}=e,i={root:["root",t&&"indeterminate","color".concat((0,m.A)(o)),"size".concat((0,m.A)(r))]},s=(0,l.A)(i,C,n);return(0,a.A)({},n,s)})(T);return(0,u.jsx)(j,(0,a.A)({type:"checkbox",inputProps:(0,a.A)({"data-indeterminate":A},g),icon:r.cloneElement(I,{fontSize:null!=(t=I.props.fontSize)?t:y}),checkedIcon:r.cloneElement(_,{fontSize:null!=(s=_.props.fontSize)?s:y}),ownerState:T,ref:n,className:(0,i.A)(D.root,b)},v,{classes:D}))}))},25920:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(85511).A},75865:(e,n,t)=>{t.r(n),t.d(n,{capitalize:()=>a.A,createChainedFunction:()=>r.A,createSvgIcon:()=>i.A,debounce:()=>l.A,deprecatedPropType:()=>s,isMuiElement:()=>d.A,ownerDocument:()=>c.A,ownerWindow:()=>u.A,requirePropFactory:()=>h,setRef:()=>p,unstable_ClassNameGenerator:()=>C,unstable_useEnhancedEffect:()=>A.A,unstable_useId:()=>m.A,unsupportedProp:()=>x,useControlled:()=>f.A,useEventCallback:()=>g.A,useForkRef:()=>y.A,useIsFocusVisible:()=>b.A});var o=t(44501),a=t(61676),r=t(25920),i=t(23235),l=t(21209);const s=function(e,n){return()=>null};var d=t(3828),c=t(27402),u=t(70827);t(58168);const h=function(e,n){return()=>null};const p=t(75587).A;var A=t(79044),m=t(31014);const x=function(e,n,t,o,a){return null};var f=t(48733),g=t(1976),y=t(31506),b=t(32937);const C={configure:e=>{o.A.configure(e)}}},31014:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(93539).A}}]);