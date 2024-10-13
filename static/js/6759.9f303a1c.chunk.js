"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6759],{92728:(e,o,t)=>{t.d(o,{A:()=>l});var n=t(9950),i=t(48205),r=t(44414);const l=n.forwardRef((function(e,o){return(0,r.jsx)(i.A,{direction:"up",ref:o,...e})}))},51637:(e,o,t)=>{t.d(o,{A:()=>h});var n=t(9950),i=t(14857),r=t(48089),l=t(45180),a=t(82053),s=t(50704),d=t(44414);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=(0,n.forwardRef)(((e,o)=>{let{border:t=!0,boxShadow:n,children:h,content:g=!0,contentSX:u={},darkTitle:x,elevation:m,secondary:p,shadow:b,sx:j={},title:A,...v}=e;const C=(0,i.A)();return n="dark"===C.palette.mode?n||!0:n,(0,d.jsxs)(r.A,{elevation:m||0,ref:o,...v,sx:{border:t?"1px solid":"none",borderRadius:2,borderColor:"dark"===C.palette.mode?C.palette.divider:C.palette.grey.A800,boxShadow:!n||t&&"dark"!==C.palette.mode?"inherit":b||C.customShadows.z1,":hover":{boxShadow:n?b||C.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:C.typography.fontFamily,fontSize:"0.75rem"},...j},children:[!x&&A&&(0,d.jsx)(l.A,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:A,action:p}),x&&A&&(0,d.jsx)(l.A,{sx:c,title:(0,d.jsx)(a.A,{variant:"h3",children:A}),action:p}),g&&(0,d.jsx)(s.A,{sx:u,children:h}),!g&&h]})}))},26092:(e,o,t)=>{t.d(o,{A:()=>u});t(9950);var n=t(92728),i=t(63464),r=t(40033),l=t(28170),a=t(96319),s=t(59254),d=t(14857),c=t(25333),h=t(44414);const g=(0,s.Ay)(i.A)((e=>{let{theme:o}=e;return{"& .MuiDialogContent-root":{padding:o.spacing(2)},"& .MuiDialogActions-root":{padding:o.spacing(1)},zIndex:11010}}));function u(e){const o=(0,d.A)(),{breakpoints:t}=o,{openPopUpDialog:i,setPopUpDialog:s,onClose:u=()=>s(!1),title:x,width:m="70%"}=e;return(0,h.jsxs)(g,{TransitionComponent:n.A,"aria-labelledby":"customized-dialog-title",open:i,PaperProps:{sx:{width:{width:m},[t.down("sm")]:{width:"90%"}}},children:[(0,h.jsx)(r.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:x}),(0,h.jsx)(c.A,{"aria-label":"close",onClick:u,sx:{position:"absolute",right:8,top:8},children:(0,h.jsx)(a.A,{})}),(0,h.jsx)(l.A,{dividers:!0,children:e.children})]})}},55895:(e,o,t)=>{t.r(o),t.d(o,{default:()=>ce});var n=t(9950),i=t(8478),r=t(33340),l=t(60899),a=t(82053),s=t(47014),d=t(70855),c=t(41507),h=t(32829),g=t(93383),u=t(26092),x=t(11172),m=t(16491),p=t(74745),b=t(93230),j=t(3788),A=t(24516),v=t(2660),C=t(23114),f=t(16497),y=t(85815),B=t(10226),L=t(70006),S=t(57988),F=t(23266),w=t(29714),k=t(61467),I=t(51637),z=t(27463),M=t(44414);const W=function(e){let{value:o,onChange:t,...i}=e;const[r,l]=n.useState(!1),a=n.useRef(),s=n.useRef(),d=e=>{let{hex:o}=e;t(i.name,o)};return n.useEffect((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,M.jsxs)("div",{ref:a,style:{position:"relative"},children:[(0,M.jsx)("div",{style:{backgroundColor:o,height:"35px",width:"35px",position:"absolute",top:"3px",left:"3px"}}),(0,M.jsx)(v.A,{inputRef:s,value:o,onChange:e=>d({hex:e.currentTarget.value}),maxLength:9,...i,type:"text",onFocus:()=>l(!0),style:{paddingLeft:"32px"}}),r&&(0,M.jsx)("div",{style:{position:"absolute",zIndex:1,top:"45px"},children:(0,M.jsx)(z.xk,{color:o,onChange:d})})]})};var U=t(98415);const D=function(e){let{value:o,onChange:t,...i}=e;const r=n.useCallback((e=>t(i.name,"yes"===e.target.value)),[i.name,t]);return(0,M.jsxs)(L.A,{...i,value:o?"yes":"no",defaultValue:o?"yes":"no",onChange:r,children:[(0,M.jsx)(F.A,{value:"no",children:"No"}),(0,M.jsx)(F.A,{value:"yes",children:"Yes"})]})};var V=t(78023),P=t(65387),T=t(59254),$=t(10939),N=t(21788);const E=[{code:"ar",name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",native:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{code:"af",name:"Afrikaans",native:"Afrikaans"},{code:"ml",name:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",native:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"}];const R=function(e){let{value:o,onChange:t,disabled:i,...r}=e;const[l,a]=(0,n.useState)(o||[]);return(0,M.jsx)(L.A,{...r,multiple:!0,value:l.map((e=>e.code)),onChange:e=>{const o=e.target.value,n=E.filter((e=>o.includes(e.code)));a(n),t("translateLanguages",n)},input:(0,M.jsx)(v.A,{label:"Select Languages"}),disabled:i,children:E.map((e=>(0,M.jsx)(F.A,{value:e.code,children:e.name},e.code)))})},H=()=>w.Yj().matches(/^#([0-9A-Fa-f]{3}){1,2}$/,"Is not a valid color code").required("Background color is required"),_=e=>w.Yj().matches(/^(\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%|\d+%)$/,`Invalid ${e}! Use the format: 1px 2px 3px 4px not a valid code`),q=w.Ik().shape({bgColor:H(),fontColor:H(),headerPadding:_("padding"),headerLogoMargin:_("margin"),visitorBubbleBorderCurve:_("border-radius"),botBubbleBorderCurve:_("border-radius")}),J={maxWidth:{xs:600,lg:700,xl:1050},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const G=function(e){let{onChange:o}=e;const[t,i]=(0,d.G)(),s=(0,r.nc)((e=>{var o,t;return null===(o=e.organization)||void 0===o||null===(t=o.availableCredits)||void 0===t?void 0:t.toFixed(3)})),[c,u]=(0,n.useState)(!1),x=(0,r.nc)((e=>e.isSuperUser));if(!i)return null;const{botName:p,botDesign:b={}}=i,j={bgColor:b.backgroundColor||"#484a49",botBorderColor:b.botBorderColor||"#484a49",botBackgroundColor:b.botBackgroundColor||"#dfd9df",botFontColor:b.botFontColor||"#000000",visitorBorderColor:b.visitorBorderColor||"#000000",visitorBackgroundColor:b.visitorBackgroundColor||"#ffffff",visitorFontColor:b.visitorFontColor||"#000000",fontType:b.fontType||"normal-font",windowAlign:b.windowAlign||"bottomRight",fontColor:b.textColor||"#484a49",titleText:p,placeholder:"Type your message...",launcherType:"bar",messageBubbleLogo:!0,botLogo:b.botLogo||{},visitorMessageLogo:b.visitorMessageLogo||{},botMessageLogo:b.botMessageLogo||{},botChatButton:b.botChatButton||{},hideLivservBranding:b.hideLivservBranding||!1,...b},A=()=>{u(!1===c)};return(0,M.jsx)(I.A,{sx:J,content:!1,border:!1,boxShadow:!0,children:(0,M.jsx)(m.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,M.jsx)(k.l1,{initialValues:j,validationSchema:q,onSubmit:async(e,o)=>{let{setErrors:n,setStatus:i,setSubmitting:r}=o;try{var l,a,s,d,c,h,g,u;(null===(l=e.botChatButton)||void 0===l?void 0:l.name)!==(null===(a=b.botChatButton)||void 0===a?void 0:a.name)&&(e.botChatButton=b.botChatButton),(null===(s=e.botLogo)||void 0===s?void 0:s.name)!==(null===(d=b.botLogo)||void 0===d?void 0:d.name)&&(e.botLogo=b.botLogo),(null===(c=e.visitorMessageLogo)||void 0===c?void 0:c.name)!==(null===(h=b.visitorMessageLogo)||void 0===h?void 0:h.name)&&(e.visitorMessageLogo=b.visitorMessageLogo),(null===(g=e.botMessageLogo)||void 0===g?void 0:g.name)!==(null===(u=b.botMessageLogo)||void 0===u?void 0:u.name)&&(e.botMessageLogo=b.botMessageLogo),await(0,U.jo)(t,e),i({success:!1}),r(!1)}catch(x){console.error(x),i({success:!1}),n({submit:x.message}),r(!1)}},children:e=>(0,M.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,M.jsxs)(l.Ay,{container:!0,spacing:3,children:[(0,M.jsxs)(l.Ay,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:["Balance : \xa0",(0,M.jsxs)(a.A,{variant:"subtitle1",color:"green",children:[s,"\xa0$"]})]}),(0,M.jsx)(Y,{...e}),(0,M.jsx)(re,{...e}),(0,M.jsx)(K,{...e}),(0,M.jsx)(Q,{...e}),(0,M.jsx)(O,{...e}),(0,M.jsx)(X,{...e}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(h.A,{children:(0,M.jsx)(g.A,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:A,children:"Advance settings"})})}),c&&(0,M.jsx)(oe,{...e}),c&&x&&(0,M.jsx)(te,{...e}),c&&(0,M.jsx)(ne,{...e}),(0,M.jsx)(ie,{...e})]}),(0,M.jsx)(le,{onChange:o})]})})})})};function Y(e){let{values:o,touched:t,errors:n,handleBlur:i,handleChange:r}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"General Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"botModelName",children:"Underlying GPT Model *"}),(0,M.jsx)(P.A,{id:"botModelName",value:o.botModelName,name:"botModelName",onBlur:i,onChange:r,error:Boolean(t.botModelName&&n.botModelName)}),t.botModelName&&n.botModelName&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:n.botModelName})]})})]})}function O(e){let{values:o,touched:t,errors:n,handleBlur:i,handleChange:r,setFieldValue:s}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Header Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"bgColor",children:"Background Color *"}),(0,M.jsx)(W,{id:"bgColor",type:"color",value:o.bgColor,name:"bgColor",onBlur:i,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.bgColor&&n.bgColor)}),t.bgColor&&n.bgColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:n.bgColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"fontColor",children:"Font Color *"}),(0,M.jsx)(W,{id:"fontColor",type:"color",value:o.fontColor,name:"fontColor",onBlur:i,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.fontColor&&n.fontColor)}),t.fontColor&&n.fontColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-font-color",children:n.fontColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"headerFontSize",children:"Font Size"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"headerFontSize",name:"headerFontSize",defaultValue:o.headerFontSize,onChange:r,placeholder:"18px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"titleText",children:"Chat Window Title *"}),(0,M.jsx)(v.A,{fullWidth:!0,error:Boolean(t.titleText&&n.titleText),id:"titleText",value:o.titleText,name:"titleText",onBlur:i,onChange:r,placeholder:"Provide your bot title text",inputProps:{maxLength:25}}),t.titleText&&n.titleText&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bot-title",children:n.titleText})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"headerPadding",style:{paddingBottom:"6px"},children:"Chat Window Header Padding"}),(0,M.jsx)(v.A,{id:"headerPadding",name:"headerPadding",value:o.headerPadding,onBlur:i,onChange:r,placeholder:"padding: 2px 5px 2px 5px"}),t.headerPadding&&n.headerPadding&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:n.headerPadding})]})})]})}function K(e){let{values:o,touched:t,errors:n,handleBlur:i,handleChange:r}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Composer Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"placeholder",children:"Placeholder Text *"}),(0,M.jsx)(v.A,{fullWidth:!0,error:Boolean(t.placeholder&&n.placeholder),id:"placeholder",defaultValue:o.placeholder,name:"placeholder",onBlur:i,onChange:r,placeholder:"Type your message...",inputProps:{maxLength:30}}),t.placeholder&&n.placeholder&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-message-placeholder",children:n.placeholder})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"fontType",children:"Font source"}),(0,M.jsxs)(C.A,{row:!0,id:"fontType",name:"fontType",defaultValue:o.fontType,onChange:r,children:[(0,M.jsx)(f.A,{value:"regular",control:(0,M.jsx)(y.A,{}),label:"Regular"}),(0,M.jsx)(f.A,{value:"remote",control:(0,M.jsx)(y.A,{}),label:"Remote"})]})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"fontType",children:"Font name"}),(0,M.jsx)(v.A,{fullWidth:!0,id:"fontName",name:"fontName",defaultValue:o.fontName,onChange:r,placeholder:"Provide Font Name"})]})}),"remote"==o.fontType&&(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"remoteFontLink",children:"Paste Remote Font Link"}),(0,M.jsx)(v.A,{multiline:!0,id:"remoteFontLink",name:"remoteFontLink",defaultValue:o.remoteFontLink,onChange:r,placeholder:"Ex: https://fonts.googleapis.com"})]})})]})}function Q(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Chat Window Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"windowAlign",children:"Window Align"}),(0,M.jsxs)(L.A,{labelId:"windowAlign",defaultValue:o.windowAlign,name:"windowAlign",onChange:t,children:[(0,M.jsx)(F.A,{value:"bottomLeft",children:"Bottom Left"}),(0,M.jsx)(F.A,{value:"bottomRight",children:"Bottom Right"})]})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"paddingLeft",children:"Spacing on corner"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"paddingLeft",name:"paddingLeft",defaultValue:o.paddingLeft,onChange:t,placeholder:"0px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"paddingBottom",children:"Spacing on Bottom"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"paddingBottom",name:"paddingBottom",defaultValue:o.paddingBottom,onChange:t,placeholder:"0px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"autoLaunch",children:"Desktop proactive window"}),(0,M.jsx)(D,{value:o.autoLaunch,name:"autoLaunch",defaultValue:!1,onChange:n})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"mobileAutoLaunch",children:"Mobile proactive window"}),(0,M.jsx)(D,{value:o.mobileAutoLaunch,name:"mobileAutoLaunch",defaultValue:!1,onChange:n})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"chatWindowWidth",children:"Chat Window Width"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"chatWindowWidth",name:"chatWindowWidth",defaultValue:o.chatWindowWidth,onChange:t,placeholder:"380px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"chatWindowHeight",children:"Chat Window Height"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"chatWindowHeight",name:"chatWindowHeight",defaultValue:o.chatWindowHeight,onChange:t,placeholder:"500px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Chat Window Language Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"multiLanguageChat",children:"Enable multi language chat"}),(0,M.jsx)(D,{value:o.multiLanguageChat,name:"multiLanguageChat",defaultValue:!1,onChange:n})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"multiLanguageChat",children:"Select languages"}),(0,M.jsx)(R,{onChange:n,name:"translateLanguages",value:o.translateLanguages,disabled:!o.multiLanguageChat||"No"===o.multiLanguageChat})]})})]})}function X(e){var o;let{values:t,errors:n,handleBlur:i,touched:r,handleChange:s,setFieldValue:d}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Header Logo Settings"})})}),(0,M.jsxs)(l.Ay,{item:!0,xs:12,md:6,children:[(0,M.jsx)(j.A,{htmlFor:"uploadHeaderLogo",children:"Upload Header Logo"}),(0,M.jsx)(ee,{imageUrl:null===(o=t.botLogo)||void 0===o?void 0:o.url,imageName:"botLogo",onChange:d,bgColor:t.bgColor})]}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"headerLogoMargin",children:"Header Logo Margin"}),(0,M.jsx)(v.A,{id:"headerLogoMargin",name:"headerLogoMargin",value:t.headerLogoMargin,onBlur:i,onChange:s,placeholder:"border : 1px 2px 3px 4px"}),r.headerLogoMargin&&n.headerLogoMargin&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:n.headerLogoMargin})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"logoWidth",children:"Width"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"logoWidth",name:"logoWidth",defaultValue:t.logoWidth,onChange:s,placeholder:"64px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"logoHeight",children:"Height"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"logoHeight",name:"logoHeight",defaultValue:t.logoHeight,onChange:s,placeholder:"64px"})]})})]})}const Z=(0,T.Ay)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ee(e){let{imageUrl:o,imageName:t,maxImageSize:i=25e4,onChange:r,bgColor:s}=e;const[d,c]=(0,n.useState)(null),[u,x]=(0,n.useState)(o),m=s&&null!==u&&void 0!==u&&u.endsWith(".png")?s:"transparent",p=!!d,j=!p&&o,A=u?"Replace image":"Select image";return(0,M.jsxs)(M.Fragment,{children:[u&&(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)("img",{src:u,alt:"headerLogo",height:50,style:{backgroundColor:m}})}),(0,M.jsxs)(b.A,{spacing:2,direction:"row",children:[(0,M.jsxs)(B.A,{component:"label",variant:"contained",children:[A,(0,M.jsx)(Z,{name:t,type:"file",onChange:e=>{try{const o=e.target.files[0],t=o.size;if(o.type.startsWith("image/")&&t<=i){c(o),x(URL.createObjectURL(o));const e=new FileReader;e.onloadend=()=>{x(e.result)},e.readAsDataURL(o)}else(0,N.i)(!0,`Please upload valid image file and size is <= ${i/1e3} kb`,"error"),c(null),e.target.value=null}catch(o){console.log("Error uploading the image ::",o),(0,N.i)(!0,"Please select the image file","error"),e.target.value=null}}},d?d.name:"")]}),j&&(0,M.jsx)(B.A,{variant:"outlined",onClick:async()=>{try{await(0,U.Ci)(t),r(t,null),x(null),c(null),(0,N.i)(!0,"Logo deleted successfully.","success")}catch(e){console.log("Deleting logo failed. Please try again later.",e)}},startIcon:(0,M.jsx)(S.A,{}),children:"Delete"}),p&&(0,M.jsx)(h.A,{children:(0,M.jsx)(g.A,{color:"primary",variant:"contained",startIcon:(0,M.jsx)($.A,{}),onClick:async()=>{try{const e=await(0,U.I4)(t,d);r(t,e),c(null),(0,N.i)(!0,"Logo uploaded successfully.","success")}catch(e){console.log("File upload failed. Please try again later.",e)}},ml:5,children:"Upload"})})]}),d&&(0,M.jsxs)(a.A,{variant:"body2",children:["File Name : ",d.name," "]})]})}function oe(e){let{values:o,handleChange:t}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Legal requirements"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:12,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"chatDisclaimer",children:"Chat Disclaimer"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"chatDisclaimer",name:"chatDisclaimer",defaultValue:o.chatDisclaimer,onChange:t,inputProps:{maxLength:260},placeholder:"Provide the disclaimer to be shown in chat window"})]})})]})}function te(e){let{values:o,setFieldValue:t}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Hide Livserv branding"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"hideLivservBranding",children:"Hide Livserv branding"}),(0,M.jsx)(D,{id:"hideLivservBranding",name:"hideLivservBranding",value:o.hideLivservBranding,defaultValue:!1,onChange:t})]})})]})}function ne(e){var o,t;let{values:n,touched:i,errors:r,handleBlur:s,handleChange:d,setFieldValue:c}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Message Bubble Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"messageBubbleLogo",children:"Show Message Bubble Logo"}),(0,M.jsx)(D,{id:"messageBubbleLogo",name:"messageBubbleLogo",value:n.messageBubbleLogo,defaultValue:!1,onChange:c})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"fontSize",children:"Font Size"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"fontSize",name:"fontSize",defaultValue:n.fontSize,onChange:d,placeholder:"12px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(a.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Visitor Bubble Settings"})}),n.messageBubbleLogo&&(0,M.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,M.jsx)(j.A,{htmlFor:"uploadVisitorLogo",children:"Upload Visitor Logo"}),(0,M.jsx)(ee,{imageUrl:null===(o=n.visitorMessageLogo)||void 0===o?void 0:o.url,imageName:"visitorMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"visitorBackgroundColor",children:"Background Color"}),(0,M.jsx)(W,{id:"visitorBackgroundColor",type:"color",value:n.visitorBackgroundColor,name:"visitorBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.visitorBackgroundColor&&r.visitorBackgroundColor)}),i.visitorBackgroundColor&&r.visitorBackgroundColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.visitorBackgroundColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"visitorFontColor",children:"Font Color"}),(0,M.jsx)(W,{id:"visitorFontColor",type:"color",value:n.visitorFontColor,name:"visitorFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.visitorFontColor&&r.visitorFontColor)}),i.visitorFontColor&&r.visitorFontColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.visitorFontColor})]})}),n.visitorLogo&&(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"visitorLogoImage",children:"Upload Visitor Logo"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"file",id:"visitorLogoImage",name:"visitorLogoImage",onChange:d,placeholder:"0px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"visitorBorderColor",children:"Border Color"}),(0,M.jsx)(W,{id:"visitorBorderColor",type:"color",value:n.visitorBorderColor,name:"visitorBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.visitorBorderColor&&r.visitorBorderColor)}),i.visitorBorderColor&&r.visitorBorderColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.visitorBorderColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"visitorBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,M.jsx)(v.A,{id:"visitorBubbleBorderCurve",name:"visitorBubbleBorderCurve",value:n.visitorBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),i.visitorBubbleBorderCurve&&r.visitorBubbleBorderCurve&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.visitorBubbleBorderCurve})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(a.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Bot Bubble Settings"})}),n.messageBubbleLogo&&(0,M.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,M.jsx)(j.A,{htmlFor:"uploadBotLogo",children:"Upload Bot Logo"}),(0,M.jsx)(ee,{imageUrl:null===(t=n.botMessageLogo)||void 0===t?void 0:t.url,imageName:"botMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"botBackgroundColor",children:"Background Color"}),(0,M.jsx)(W,{id:"botBackgroundColor",type:"color",value:n.botBackgroundColor,name:"botBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.botBackgroundColor&&r.botBackgroundColor)}),i.botBackgroundColor&&r.botBackgroundColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.botBackgroundColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"botFontColor",children:"Font Color"}),(0,M.jsx)(W,{id:"botFontColor",type:"color",value:n.botFontColor,name:"botFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.botFontColor&&r.botFontColor)}),i.botFontColor&&r.botFontColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.botFontColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"botBorderColor",children:"Border Color"}),(0,M.jsx)(W,{id:"botBorderColor",type:"color",value:n.botBorderColor,name:"botBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(i.botBorderColor&&r.botBorderColor)}),i.botBorderColor&&r.botBorderColor&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.botBorderColor})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"botBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,M.jsx)(v.A,{id:"botBubbleBorderCurve",name:"botBubbleBorderCurve",value:n.botBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),i.botBubbleBorderCurve&&r.botBubbleBorderCurve&&(0,M.jsx)(A.A,{error:!0,id:"helper-text-bg-color",children:r.botBubbleBorderCurve})]})})]})}function ie(e){let{errors:o,isSubmitting:t}=e;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,M.jsx)(A.A,{error:!0,children:o.submit}),(0,M.jsx)(h.A,{children:(0,M.jsx)(g.A,{disableElevation:!0,disabled:Boolean(o.submit),isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})]})})}function re(e){var o;let{values:t,handleChange:n,setFieldValue:i}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,children:(0,M.jsx)(p.A,{children:(0,M.jsx)(a.A,{variant:"subtitle1",children:"Chat Launcher Settings"})})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"messagePlaceholder",children:"Chat Launcher Type *"}),(0,M.jsxs)(C.A,{row:!0,name:"launcherType",defaultValue:t.launcherType,onChange:n,children:[(0,M.jsx)(f.A,{value:"icon",control:(0,M.jsx)(y.A,{}),label:"Button"}),(0,M.jsx)(f.A,{value:"bar",control:(0,M.jsx)(y.A,{}),label:"Bar"}),(0,M.jsx)(f.A,{value:"expand",control:(0,M.jsx)(y.A,{}),label:"Expand Button"})]})]})}),"bar"!==t.launcherType&&(0,M.jsxs)(l.Ay,{item:!0,xs:12,md:6,children:[(0,M.jsx)(j.A,{htmlFor:"uploadChatButton",children:"Upload Chat Button"}),(0,M.jsx)(ee,{imageUrl:null===(o=t.botChatButton)||void 0===o?void 0:o.url,imageName:"botChatButton",onChange:i})]}),"bar"===t.launcherType&&(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{id:"buttonOnMobile",children:"Button on Mobile"}),(0,M.jsx)(D,{name:"buttonOnMobile",value:t.buttonOnMobile,defaultValue:!1,onChange:i})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"launcherSpacingCorner",children:"Spacing on corner"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"launcherSpacingCorner",name:"launcherSpacingCorner",defaultValue:t.launcherSpacingCorner,onChange:n,placeholder:"0px"})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,M.jsxs)(b.A,{spacing:1,children:[(0,M.jsx)(j.A,{htmlFor:"launcherSpacingBottom",children:"Spacing on Bottom"}),(0,M.jsx)(v.A,{fullWidth:!0,type:"text",id:"launcherSpacingBottom",name:"launcherSpacingBottom",defaultValue:t.launcherSpacingBottom,onChange:n,placeholder:"0px"})]})})]})}function le(e){let{onChange:o}=e;const{values:t}=(0,k.j7)();return n.useEffect((()=>{t&&o((0,V.Y)(t))}),[t,o]),null}var ae=t(34735),se=t(73225),de=t(31739);const ce=()=>{var e;const[o,t]=n.useState(),[m,p]=(0,n.useState)(!1),[b,j]=n.useState({}),[A,v]=n.useState(),[C,f]=(0,d.G)(),[y,B]=(0,n.useState)(!1),L=(0,r.nc)((e=>e.organizationId)),{isSuperUser:S}=(0,r.nc)();if(n.useEffect((()=>{L&&C&&i.Jt(`/bot/${L}/${C}/chat/startup-flow`,{recipientId:(0,de.J)()}).then((e=>v(e||!1)))}),[C,L]),void 0===A)return;const F=e=>{t(e),p(!0)};return(0,M.jsxs)(l.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,M.jsx)(l.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,M.jsxs)(l.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,M.jsx)(l.Ay,{item:!0,xs:6,children:(0,M.jsx)(a.A,{variant:"h5",children:"Chat Window Design"})}),(0,M.jsxs)(l.Ay,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:[(0,M.jsx)(h.A,{children:(0,M.jsx)(g.A,{isLoading:y,disabled:y,variant:"contained",color:"success",size:"large",onClick:()=>B(!0),children:"Deploy Bot"})}),(0,M.jsx)(u.A,{openPopUpDialog:y,setPopUpDialog:B,title:"Add Bot Details",children:(0,M.jsx)(x.A,{setIsDeployBot:B,botId:C,organizationId:L})})]})]})}),(0,M.jsx)(l.Ay,{item:!0,xs:12,sm:12,md:12,lg:8,children:(0,M.jsx)(G,{onChange:j})}),(0,M.jsxs)(l.Ay,{item:!0,xs:12,sm:12,md:12,lg:4,children:[(0,M.jsx)(s.A,{botDetails:f,botDesign:b,startupFlow:A,autoLaunch:null===f||void 0===f||null===(e=f.botDesign)||void 0===e?void 0:e.autoLaunch,recipientId:(0,de.J)(),onReceiveChatResponse:e=>(0,c.NC)(e.organization),onCallback:de.u,optionsRenderer:e=>{const{role:o,type:t,passedDocIds:n,searchQuery:i}=e||{};if("assistant"===o&&"text"===t&&(null!==n&&void 0!==n&&n.length||i))return(0,M.jsx)("span",{className:"show-icon",onClick:()=>F(e),children:(0,M.jsx)(ae.A,{})})}}),(0,M.jsx)(u.A,{openPopUpDialog:m,setPopUpDialog:p,title:"View and update Knowledge base",children:o&&(0,M.jsx)(se.A,{message:o,onClose:()=>o(null),isSuperUser:S})})]}),(0,M.jsx)(l.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})}},11172:(e,o,t)=>{t.d(o,{A:()=>b});t(9950);var n=t(61467),i=t(29714),r=t(60899),l=t(93230),a=t(3788),s=t(2660),d=t(24516),c=t(32829),h=t(93383),g=t(21788),u=t(30334),x=t(33340),m=t(98415),p=t(44414);const b=function(e){const{setIsDeployBot:o,botId:t,organizationId:b}=e,j=(0,x.nc)((e=>e.botsList)).find((e=>e._id===t)),A=null===j||void 0===j?void 0:j.botDetailsForVerification,v=(0,x.nc)((e=>e.isSuperUser)),C={integrationUrl:(null===A||void 0===A?void 0:A.integrationUrl)||""},f=async()=>{const e=C.integrationUrl;try{if(e||""!==e.trim()){await(0,m.yo)(t,{verificationStatus:!0})?(0,g.i)(!0,"The bot verified successfully","success"):(0,g.i)(!0,"Not able to verify the bot. Try after sometime!","error")}else(0,g.i)(!0,"Integration Url is mandatory for bot verification","error")}catch(o){(0,g.i)(!0,"Not able to verify the bot. Try after sometime!","error")}};return(0,p.jsx)(n.l1,{initialValues:C,enableReinitialize:!0,validationSchema:i.Ik().shape({integrationUrl:i.Yj().url("Enter valid url!").max(255).required("Integration Url is required")}),onSubmit:async(e,n)=>{let{setErrors:i,setStatus:r,setSubmitting:l}=n;const a={botDetailsForVerification:{...e}};try{l(!0),await(0,u.pn)(a,b,t),r({success:!0}),o(!1),(0,g.i)(!0,"The bot deployed successfully!","success")}catch(s){r({success:!1}),i({submit:s.message}),l(!1),(0,g.i)(!0,"Not able to deploy the bot. Try after sometime!","error")}},children:e=>{let{errors:o,handleBlur:t,handleChange:n,handleSubmit:i,isSubmitting:g,touched:u,values:x}=e;return(0,p.jsx)("form",{onSubmit:i,children:(0,p.jsxs)(r.Ay,{container:!0,spacing:1,children:[(0,p.jsx)(r.Ay,{item:!0,xs:12,md:12,children:(0,p.jsxs)(l.A,{spacing:1,children:[(0,p.jsx)(a.A,{htmlFor:"integrationUrl",children:"*Integration Url"}),(0,p.jsx)(s.A,{id:"integrationUrl",type:"integrationUrl",value:x.integrationUrl,name:"integrationUrl",autoComplete:"off",onBlur:t,onChange:n,fullWidth:!0,error:Boolean(u.integrationUrl&&o.integrationUrl)}),u.integrationUrl&&o.integrationUrl&&(0,p.jsx)(d.A,{error:!0,id:"helper-text-integrationUrl",children:o.integrationUrl})]})}),(0,p.jsxs)(r.Ay,{container:!0,spacing:2,justifyContent:"flex-end",sx:{mt:1},children:[v&&(0,p.jsx)(r.Ay,{item:!0,children:(0,p.jsx)(c.A,{children:(0,p.jsx)(h.A,{isLoading:g,disabled:g,color:"primary",size:"large",type:"button",variant:"contained",id:"deployBotVerify",onClick:f,children:"Verify"})})}),(0,p.jsx)(r.Ay,{item:!0,children:(0,p.jsx)(c.A,{children:(0,p.jsx)(h.A,{isLoading:g,disabled:g,color:"primary",size:"large",type:"submit",variant:"contained",id:"deployBotSubmit",children:"Submit"})})})]})]})})}})}},98415:(e,o,t)=>{t.d(o,{Ci:()=>h,I4:()=>c,TF:()=>s,gI:()=>l,gR:()=>u,jo:()=>d,rv:()=>x,so:()=>g,yo:()=>a});var n=t(8478),i=t(33340),r=t(32026);async function l(e){const{organization:{websiteUrl:o,_id:t}}=i.nc.getState(),r={organizationId:t,websiteUrl:o,botName:e,botDesign:{visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},botChatButton:{name:"",url:""},botLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}};m(await n.bE(`/bot/${t}`,r),!0)}async function a(e,o,t){const{organizationId:r}=i.nc.getState();if(!r||!e)throw new Error("Bot details not found");const l=await n.yJ(`/bot/${r}/${e}`,o);return m(l,t),l}async function s(e){const{organizationId:o,selectedBotId:t}=i.nc.getState();if(!o||!e)throw new Error("Bot details not found");const{deleted:r}=await n.TF(`/bot/${o}/${e}`);if(r){let{botsMap:e,botsList:o}=i.nc.getState();e={...e},o=[...o],delete e[r];const n=o.findIndex((e=>e._id===r));n>=0&&o.splice(n,1);const a={botsMap:e,botsList:o};var l;if(t===r)a.selectedBotId=(null===(l=o[0])||void 0===l?void 0:l._id)||null;i.nc.setState(a)}return!!r}function d(e,o){let{botDesign:t}=i.nc.getState();return t={...t,...o},a(e,{botDesign:t})}async function c(e,o){const{organizationId:t,selectedBotId:r}=i.nc.getState(),l=new FormData;l.append("file",o);const a=await n.bE(`/bot/${t}/${r}/update-logo/${e}`,l);return x(r,a),a[`botDesign.${e}`]}async function h(e){const{organizationId:o,selectedBotId:t}=i.nc.getState(),r=await n.TF(`/bot/${o}/${t}/update-logo/${e}`);return x(t,r),r[`botDesign.${e}`]}function g(e,o){return a(e,{botName:o})}function u(e,o){let{botSettings:t={}}=i.nc.getState();return t={...t,...o},a(e,{botSettings:t})}function x(e,o){const{botsMap:t}=i.nc.getState(),n=t[e];if(!n)return;m(Object.keys(o).reduce(((e,t)=>(0,r.G6)(e,t,o[t])),n))}function m(e){let o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=e._id;let{botsMap:n,botsList:r}=i.nc.getState();n={...n,[t]:e},r=[...r];const l=r.findIndex((e=>e._id===t));l>=0?r[l]=e:r.push(e);const a={botsMap:n,botsList:r};o&&(a.selectedBotId=t),i.nc.setState(a)}},41507:(e,o,t)=>{t.d(o,{Ds:()=>s,L_:()=>l,NC:()=>a,YS:()=>r,cw:()=>c,qb:()=>d});var n=t(8478),i=t(33340);async function r(e,o){const t=await async function(){const e=i.nc.getState();let{organizationList:o,organizationId:t,organization:r}=e;if(!e.isSuperUser||Array.isArray(o))return;if(o=await n.bE("/organization/list"),o.length)if(t=t||sessionStorage.getItem("orgId"),t){if(!r){var l;r=null===(l=o)||void 0===l?void 0:l.filter((e=>e._id===t))[0]}}else{const e=o[0];t=e._id,r=e}return i.nc.setState({organizationList:o,organizationId:t,organization:r}),!0}(),{organizationId:r}=i.nc.getState();return e?e!==r&&i.nc.setState({organizationId:e}):e=r,!e||(t||await async function(e){const o=await n.bE("/organization/get-organization-by-id",{organizationId:e});i.nc.setState({organization:o})}(e),await s(e,o),!0)}async function l(e,o){o||(o=i.nc.getState().organizationId);const t=await n.yJ(`/organization/${o}`,e);i.nc.setState((e=>{const{organizationList:n,organizationId:i,organization:r}=e,l={};return i===o&&(l.organization={...r,...t}),n&&(l.organizationList=n.map((e=>e._id===o?{...e,...t}:e))),l}))}function a(e){if(!e||"object"!==typeof e)return;let{organization:o}=i.nc.getState();o&&(o={...o,...e},i.nc.setState({organization:o}))}async function s(e,o){var t;const r=await n.Jt(`/bot/${e}/list`),l=o||(null===(t=r[0])||void 0===t?void 0:t._id),a=r.reduce(((e,o)=>(e[o._id]=o,e)),{});return i.nc.setState({organizationId:e,botsList:r,botsMap:a,selectedBotId:l}),l}function d(e){i.nc.setState({selectedBotId:e})}async function c(){const e=await n.Jt("/organization/invoice/list");i.nc.setState({organizationsInvoiceList:e})}},30334:(e,o,t)=>{t.d(o,{Ei:()=>c,KM:()=>a,MD:()=>s,pn:()=>h,qt:()=>d});var n=t(8478),i=t(33340),r=t(77382),l=t(98415);async function a(e,o,t){const i=await n.bE(`/bot/${t}/${o}/add-training-media`,e);(0,l.rv)(o,{trainingMedia:i.trainingMedia})}async function s(e){const{organizationId:o,selectedBotId:t}=i.nc.getState(),r=new FormData;r.append("file",e);try{const e=await n.bE(`/bot/${o}/${t}/add-training-media`,r);(0,l.rv)(t,{trainingMedia:e.trainingMedia})}catch(a){throw new Error("File upload failed. Please try again.",a)}}async function d(e,o,t){const i=await n.bE(`/bot/${t}/${o}/delete-training-media-document`,e);(0,l.rv)(o,{trainingMedia:i.trainingDocuments})}async function c(e,o){const t=await n.bE(`/bot/${o}/${e}/knowledge-base/train`);return i.nc.setState((o=>{const t={...o.kbDocs||{}};return delete t[e],{kbDocs:t}})),(0,r.bZ)().catch((e=>console.error("Error fetching Knowledge base content:",e))),t}async function h(e,o,t){const i=await n.bE(`/bot/${o}/${t}/add-bot-tax-details`,e),{_id:r,botDetailsForVerification:a}=i;return(0,l.rv)(r,{botDetailsForVerification:a}),a}}}]);