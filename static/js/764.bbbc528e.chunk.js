"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[764],{18678:(e,o,t)=>{t.d(o,{Z:()=>i});var n=t(93701),r=t(46417);function i(e){let{children:o,type:t}=e;return(0,r.jsx)(n.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:o})}i.defaultProps={type:"scale"}},6505:(e,o,t)=>{t.d(o,{Z:()=>h});var n=t(47313),r=t(19860),i=t(73428),l=t(54641),a=t(61113),s=t(93405),d=t(46417);const c={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=(0,n.forwardRef)(((e,o)=>{let{border:t=!0,boxShadow:n,children:h,content:u=!0,contentSX:g={},darkTitle:x,elevation:p,secondary:m,shadow:b,sx:v={},title:j,...f}=e;const C=(0,r.Z)();return n="dark"===C.palette.mode?n||!0:n,(0,d.jsxs)(i.Z,{elevation:p||0,ref:o,...f,sx:{border:t?"1px solid":"none",borderRadius:2,borderColor:"dark"===C.palette.mode?C.palette.divider:C.palette.grey.A800,boxShadow:!n||t&&"dark"!==C.palette.mode?"inherit":b||C.customShadows.z1,":hover":{boxShadow:n?b||C.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:C.typography.fontFamily,fontSize:"0.75rem"},...v},children:[!x&&j&&(0,d.jsx)(l.Z,{sx:c,titleTypographyProps:{variant:"subtitle1"},title:j,action:m}),x&&j&&(0,d.jsx)(l.Z,{sx:c,title:(0,d.jsx)(a.Z,{variant:"h3",children:j}),action:m}),u&&(0,d.jsx)(s.Z,{sx:g,children:h}),!u&&h]})}))},94100:(e,o,t)=>{t.d(o,{Z:()=>a});var n=t(47313),r=t(31095),i=t(85281),l=t(46417);const a=function(e){let{onClick:o,disabled:t,isLoading:a,children:s,...d}=e;const[c,h]=n.useState(a);return(0,l.jsxs)(r.Z,{onClick:e=>{if(!o)return;const t=o(e);"function"===typeof(null===t||void 0===t?void 0:t.finally)&&(h(!0),t.finally((()=>h(!1))))},disabled:c||a||t,...d,children:[(c||a)&&(0,l.jsx)(i.Z,{size:16,color:"primary",style:{marginRight:"10px"}}),s]})}},83289:(e,o,t)=>{t.r(o),t.d(o,{default:()=>ue});var n=t(47313),r=t(9019),i=t(61113),l=t(52825),a=t(91318),s=t(32203),d=t(80730);function c(){return sessionStorage.getItem("temporary-app-id")}function h(){return localStorage.getItem("permanent-app-id")}function u(){const e=new URLSearchParams(window.location.search),o=e.get("sourceUrl")||void 0,t=e.get("referrerUrl")||void 0;return{utmParameters:Array.from(e.keys()).reduce(((o,t)=>{if(t.startsWith("utm_")){o=o||{};const n=e.get(t);n&&"null"!==n&&(o[t]=n)}return o}),void 0),sourceUrl:o,referrerUrl:t}}var g=t(26863),x=t(75391),p=t(46417);const m=function(e){var o;let{botDetails:t,botDesign:r,onReceiveChatResponse:i,autoLaunch:g,onCallback:m}=e;const[b,C]=n.useState(g||!1),[Z,B]=n.useState(r),[y,P]=n.useState(!1),[S,L]=n.useState(t),[w,_]=n.useState([]),[F,T]=n.useState(),k=n.useRef({});k.current.history=w,k.current.showBot=b,k.current.design=Z,k.current.bot=S,k.current.locationDetails=F,k.current.onReceiveChatResponse=i,n.useEffect((()=>{L(t)}),[t]),n.useEffect((()=>{B(r)}),[r]),n.useEffect((()=>{const{updateContact:e,bot:o}=k.current;o?f(o,e).then(_):async function(){try{const e=new URLSearchParams(window.location.search),o={authToken:e.get("token")};return await d.U2("/bot/get-bot-details-by-auth-token",o,{noAuth:!0})}catch(e){console.log("Failed to init chat:-",e)}}().then((o=>{L(o);const{design:t}=k.current;!t&&o.botDesign&&B((0,x.K)(o.botDesign)),f(o,e).then(_)})),async function(){var e,o,t;const n=s.lB||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2";let r=await d.U2("https://api.ipdata.co?api-key=".concat(n));const i=(new a.UAParser).getResult()||{},{ip:l,is_eu:c,city:h,region:g,region_code:x,region_type:p,country_name:m,country_code:b,continent_name:v,continent_code:j,latitude:f,longitude:C,postal:Z,calling_code:B,time_zone:y,currency:P}=r,S={ipAddress:l,deviceType:null===(e=i.device)||void 0===e?void 0:e.type,browserName:null===(o=i.browser)||void 0===o?void 0:o.name,osName:null===(t=i.os)||void 0===t?void 0:t.name,...u()};return S.locationDetails={is_eu:c,city:h,region:g,region_code:x,region_type:p,country_name:m,country_code:b,continent_name:v,continent_code:j,latitude:f,longitude:C,postal:Z,calling_code:B,time_zone:y,currency:P},S}().then(T)}),[]);const I=n.useCallback(((e,o)=>{var t,n,r,i;let{showBot:l,design:a}=k.current;l=e?!l:l,null===m||void 0===m||m("windowToggle",{state:l,design:l?{width:null===a||void 0===a||null===(t=a.window)||void 0===t?void 0:t.width,height:null===a||void 0===a||null===(n=a.window)||void 0===n?void 0:n.height,spacingBottom:null===a||void 0===a||null===(r=a.window)||void 0===r?void 0:r.spacingBottom,spacingCorner:null===a||void 0===a||null===(i=a.window)||void 0===i?void 0:i.spacingCorner}:o})}),[m]),E=n.useCallback((e=>{var o;null!==(o=k.current.history)&&void 0!==o&&o.length||setTimeout((()=>{const e={role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"};_((o=>o?o.concat(e):[e]))}),e||1700)}),[]),N=n.useCallback((()=>{I(!0),C((e=>!e)),P(!0),setTimeout((()=>P(!1)),1e3),E()}),[I,E]);n.useLayoutEffect((()=>{Z&&I(!1,!0)}),[Z,I]);const A=n.useCallback((async e=>{const{updateContact:o,onReceiveChatResponse:t,bot:n,locationDetails:r}=k.current;return await async function(e,o,t,n,r){const i=h(),l=c(),{_id:a,organizationId:s}=o,u={userQuery:e,recipientDetails:{recipientId:i,conversationId:l,...r}};t&&(u.testMode=!0);try{const e=await d.v_("/bot/".concat(s,"/").concat(a,"/chat"),u,{noAuth:!0});return null===t||void 0===t||t(e),function(e,o){const{chatRefId:t,recipientId:n,messages:r}=e;return function(e){sessionStorage.setItem("temporary-app-id",e)}(t),function(e){localStorage.setItem("permanent-app-id",e)}(n),j(r,o)}(e,n)}catch(g){return[{role:"assistant",type:"text",content:g.message||"Unknown Server error"}]}}(e,n,t,o,r)}),[]);k.current.updateContact=n.useCallback((async e=>{const o=await A(e);_((e=>e.filter((e=>"lead"!==e.type)).concat(...o)))}),[A]);const R=n.useCallback((()=>{_([]),sessionStorage.removeItem("temporary-app-id"),delete k.current.history,E(700)}),[E]);if(!S||!F)return null;let W="hide-chat";return b&&y?W="opening":b&&!y?W="show-chat":!b&&y&&(W="closing"),W+="bottomLeft"===(null===Z||void 0===Z||null===(o=Z.window)||void 0===o?void 0:o.align)?" bottom-left ":" bottom-right ",(0,p.jsxs)("div",{className:"chat-handler "+W,children:[b&&(0,p.jsx)(l.Z,{botDesign:Z,messages:w,showTime:!0,onUserMessage:A,onHistoryChange:_,onClear:R,onHide:N,onCallback:m}),!b&&!y&&(0,p.jsx)(v,{design:Z,onToggle:N})]})},b=(0,g.yj)("42px");function v(e){let{design:o,onToggle:t}=e;const{launcher:{useBar:n=!1,buttonLogoUrl:r,buttonOnMobile:i,barText:l}={},header:{bgColor:a,fontColor:s}={}}=o||{};return!n||i?(0,p.jsxs)("div",{id:"lp-launcher",className:"lp-launcher button",onClick:t,style:{borderColor:a},children:[r&&(0,p.jsx)("img",{src:r,alt:"Live Chat"}),!r&&b]}):(0,p.jsx)("div",{id:"lp-launcher",className:"lp-launcher bar",onClick:t,style:{backgroundColor:a,color:s},children:(0,p.jsxs)("span",{children:[g.E," ",l||"Live Chat"]})})}function j(e,o){if(null===e||void 0===e||!e.length)return e;const t=e[e.length-1];return"form"===t.type&&e.push({role:"user",type:"lead",content:"",profile:t.media,updateContact:o}),e}async function f(e,o){const{_id:t,organizationId:n}=e,r=h(),i=c();if(!r||!i)return[];try{const e=await d.U2("/bot/".concat(n,"/").concat(t,"/chat/history/").concat(r,"/").concat(i),null,{noAuth:!0}),{messages:l}=e||{};return j(l,o)}catch(l){console.log("Failed to fetch chat history:-",l)}}var C=t(969),Z=t(49542),B=t(41806),y=t(19536),P=t(42832),S=t(23306),L=t(15480),w=t(49914),_=t(55685),F=t(83929),T=t(74268),k=t(31095),I=t(88797),E=t(51405),N=t(21933),A=t(24977),R=t(6505),W=t(18678),z=t(4450);const M=function(e){let{value:o,onChange:t,...r}=e;const[i,l]=n.useState(!1),a=n.useRef(),s=n.useRef(),d=e=>{let{hex:o}=e;t(r.name,o)};return n.useEffect((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,p.jsxs)("div",{ref:a,style:{position:"relative"},children:[(0,p.jsx)("div",{style:{backgroundColor:o,height:"35px",width:"35px",position:"absolute",top:"3px",left:"3px"}}),(0,p.jsx)(w.Z,{inputRef:s,value:o,onChange:e=>d({hex:e.currentTarget.value}),maxLength:9,...r,type:"text",onFocus:()=>l(!0),style:{paddingLeft:"32px"}}),i&&(0,p.jsx)("div",{style:{position:"absolute",zIndex:1,top:"45px"},children:(0,p.jsx)(z.AI,{color:o,onChange:d})})]})};var D=t(45960);const U=function(e){let{value:o,onChange:t,...r}=e;const i=n.useCallback((e=>t(r.name,"yes"===e.target.value)),[r.name,t]);return(0,p.jsxs)(I.Z,{...r,value:o?"yes":"no",defaultValue:o?"yes":"no",onChange:i,children:[(0,p.jsx)(E.Z,{value:"no",children:"No"}),(0,p.jsx)(E.Z,{value:"yes",children:"Yes"})]})},O=[{value:"gpt-3.5-turbo-16k",label:"GPT 3.5 Latest Stable (default)",description:"Latest stable model of GPT 3.5. Cheapest and more performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."},{value:"gpt-4",label:"GPT 4 Latest Stable",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview (suggested)",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."}],V=O.reduce(((e,o)=>(e[o.value]=o,e)),{});const H=function(e){var o;let{value:t,...n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(I.Z,{...n,value:t,defaultValue:O[0].value,children:O.map((e=>(0,p.jsx)(E.Z,{value:e.value,children:e.label},e.value)))}),(0,p.jsx)(L.Z,{id:"bot-model-description",children:t?null===(o=V[t])||void 0===o?void 0:o.description:O[0].description})]})};var K=t(94100),G=t(17592),$=t(63950),J=t(23509);const Y=()=>N.Z_().matches(/^#([0-9A-Fa-f]{3}){1,2}$/,"Is not a valid color code").required("Background color is required"),X=e=>N.Z_().matches(/^(\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%|\d+%)$/,"Invalid ".concat(e,"! Use the format: 1px 2px 3px 4px not a valid code")),q=N.Ry().shape({bgColor:Y(),fontColor:Y(),headerPadding:X("padding"),headerLogoMargin:X("margin"),visitorBubbleBorderCurve:X("border-radius"),botBubbleBorderCurve:X("border-radius")}),Q={maxWidth:{xs:600,lg:700,xl:1050},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const ee=function(e){var o,t,l;let{onChange:a}=e;const[s,d]=(0,C.g)(),{botName:c,botDesign:h={}}=d,u={bgColor:h.backgroundColor||"#484a49",botBorderColor:h.botBorderColor||"#484a49",botBackgroundColor:h.botBackgroundColor||"#9c27b0",botFontColor:h.botFontColor||"#000000",visitorBorderColor:h.visitorBorderColor||"#000000",visitorBackgroundColor:h.visitorBackgroundColor||"#ffffff",visitorFontColor:h.visitorFontColor||"#000000",fontType:h.fontType||"normal-font",windowAlign:h.windowAlign||"bottomRight",fontColor:h.textColor||"#484a49",titleText:c,placeholder:"Type your message...",launcherType:"bar",botLogoUrl:(null===(o=h.botLogo)||void 0===o?void 0:o.url)||"",chatButton:"",messageBubbleLogo:!0,visitorBubbleLogo:(null===(t=h.visitorMessageLogo)||void 0===t?void 0:t.url)||"",botBubbleLogo:(null===(l=h.botMessageLogo)||void 0===l?void 0:l.url)||"",...h},g=(0,J.tN)((e=>{var o,t;return null===(o=e.organization)||void 0===o||null===(t=o.availableCredits)||void 0===t?void 0:t.toFixed(3)})),[x,m]=(0,n.useState)(!1),b=()=>{m(!1===x)};return(0,p.jsx)(R.Z,{sx:Q,content:!1,border:!1,boxShadow:!0,children:(0,p.jsx)(B.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,p.jsx)(A.J9,{initialValues:u,validationSchema:q,onSubmit:async(e,o)=>{let{setErrors:t,setStatus:n,setSubmitting:r}=o;try{await(0,D.Bc)(s,e),n({success:!1}),r(!1)}catch(i){console.error(i),n({success:!1}),t({submit:i.message}),r(!1)}},children:e=>(0,p.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,p.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,p.jsxs)(r.ZP,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:["Balance : \xa0",(0,p.jsxs)(i.Z,{variant:"subtitle1",color:"green",children:[g,"\xa0$"]})]}),(0,p.jsx)(oe,{...e}),(0,p.jsx)(ce,{...e}),(0,p.jsx)(ne,{...e}),(0,p.jsx)(re,{...e}),(0,p.jsx)(te,{...e}),(0,p.jsx)(ie,{...e}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(W.Z,{children:(0,p.jsx)(K.Z,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:b,children:"Advance settings"})})}),x&&(0,p.jsx)(se,{...e}),(0,p.jsx)(de,{...e})]}),(0,p.jsx)(he,{onChange:a})]})})})})};function oe(e){let{values:o,touched:t,errors:n,handleBlur:l,handleChange:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"General Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"botModelName",children:"Underlying GPT Model *"}),(0,p.jsx)(H,{id:"botModelName",value:o.botModelName,name:"botModelName",onBlur:l,onChange:a,error:Boolean(t.botModelName&&n.botModelName)}),t.botModelName&&n.botModelName&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.botModelName})]})})]})}function te(e){let{values:o,touched:t,errors:n,handleBlur:l,handleChange:a,setFieldValue:s}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Header Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"bgColor",children:"Background Color *"}),(0,p.jsx)(M,{id:"bgColor",type:"color",value:o.bgColor,name:"bgColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.bgColor&&n.bgColor)}),t.bgColor&&n.bgColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.bgColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"fontColor",children:"Font Color *"}),(0,p.jsx)(M,{id:"fontColor",type:"color",value:o.fontColor,name:"fontColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.fontColor&&n.fontColor)}),t.fontColor&&n.fontColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-font-color",children:n.fontColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"titleText",children:"Chat Window Title *"}),(0,p.jsx)(w.Z,{fullWidth:!0,error:Boolean(t.titleText&&n.titleText),id:"titleText",value:o.titleText,name:"titleText",onBlur:l,onChange:a,placeholder:"Provide your bot title text",inputProps:{maxLength:25}}),t.titleText&&n.titleText&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bot-title",children:n.titleText})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"headerPadding",style:{paddingBottom:"6px"},children:"Chat Window Header Padding"}),(0,p.jsx)(w.Z,{id:"headerPadding",name:"headerPadding",value:o.headerPadding,onBlur:l,onChange:a,placeholder:"padding: 2px 5px 2px 5px"}),t.headerPadding&&n.headerPadding&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.headerPadding})]})})]})}function ne(e){let{values:o,touched:t,errors:n,handleBlur:l,handleChange:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Composer Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"placeholder",children:"Placeholder Text *"}),(0,p.jsx)(w.Z,{fullWidth:!0,error:Boolean(t.placeholder&&n.placeholder),id:"placeholder",defaultValue:o.placeholder,name:"placeholder",onBlur:l,onChange:a,placeholder:"Type your message...",inputProps:{maxLength:30}}),t.placeholder&&n.placeholder&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-message-placeholder",children:n.placeholder})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"fontType",children:"Font source"}),(0,p.jsxs)(_.Z,{row:!0,id:"fontType",name:"fontType",defaultValue:o.fontType,onChange:a,children:[(0,p.jsx)(F.Z,{value:"normalFont",control:(0,p.jsx)(T.Z,{}),label:"Regular"}),(0,p.jsx)(F.Z,{value:"googleFont",control:(0,p.jsx)(T.Z,{}),label:"Remote"})]})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"fontType",children:"Font name"}),(0,p.jsx)(w.Z,{fullWidth:!0,id:"fontName",name:"fontName",defaultValue:o.fontName,onChange:a,placeholder:"Provide Font Name"})]})}),"googleFont"==o.fontType&&(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"googleFontLink",children:"Paste Google Font Link"}),(0,p.jsx)(w.Z,{multiline:!0,id:"googleFontLink",name:"googleFontLink",defaultValue:o.googleFontLink,onChange:a,placeholder:"Ex: <link rel='preconnect' href='https://fonts.googleapis.com'>"})]})})]})}function re(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Chat Window Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{id:"windowAlign",children:"Window Align"}),(0,p.jsxs)(I.Z,{labelId:"windowAlign",defaultValue:o.windowAlign,name:"windowAlign",onChange:t,children:[(0,p.jsx)(E.Z,{value:"bottomLeft",children:"Bottom Left"}),(0,p.jsx)(E.Z,{value:"bottomRight",children:"Bottom Right"})]})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{id:"autoLaunch",children:"Proactive window"}),(0,p.jsx)(U,{value:o.autoLaunch,name:"autoLaunch",defaultValue:!1,onChange:n})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"fontsize",children:"Font Size"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"fontsize",name:"fontsize",defaultValue:o.fontsize,onChange:t,placeholder:"12px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"chatWindowWidth",children:"Chat Window Width"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"chatWindowWidth",name:"chatWindowWidth",defaultValue:o.chatWindowWidth,onChange:t,placeholder:"300px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"chatWindowHeight",children:"Chat Window Height"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"chatWindowHeight",name:"chatWindowHeight",defaultValue:o.chatWindowHeight,onChange:t,placeholder:"320px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"paddingLeft",children:"Spacing on corner"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"paddingLeft",name:"paddingLeft",defaultValue:o.paddingLeft,onChange:t,placeholder:"0px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"paddingBottom",children:"Spacing on Bottom"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"paddingBottom",name:"paddingBottom",defaultValue:o.paddingBottom,onChange:t,placeholder:"0px"})]})})]})}function ie(e){let{values:o,errors:t,handleBlur:n,touched:l,handleChange:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Header Logo Settings"})})}),(0,p.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[(0,p.jsx)(S.Z,{htmlFor:"uploadHeaderLogo",children:"Upload Header Logo"}),(0,p.jsx)(ae,{editImage:o.botLogoUrl,imageName:"headerLogo",maxImageSize:25e4})]}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"headerLogoMargin",children:"Header Logo Margin"}),(0,p.jsx)(w.Z,{id:"headerLogoMargin",name:"headerLogoMargin",value:o.headerLogoMargin,onBlur:n,onChange:a,placeholder:"border : 1px 2px 3px 4px"}),l.headerLogoMargin&&t.headerLogoMargin&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:t.headerLogoMargin})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"logoWidth",children:"Width"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"logoWidth",name:"logoWidth",defaultValue:o.logoWidth,onChange:a,placeholder:"64px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"logoHeight",children:"Height"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"text",id:"logoHeight",name:"logoHeight",defaultValue:o.logoHeight,onChange:a,placeholder:"64px"})]})})]})}const le=(0,G.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ae(e){let{editImage:o,imageName:t,maxImageSize:l}=e,a="",s="",c=0;const[h]=(0,C.g)(),u=(0,J.tN)((e=>e.organizationId)),[g,x]=(0,n.useState)(!1),[m,b]=(0,n.useState)(null),[v,j]=(0,n.useState)(o),[f,Z]=(0,n.useState)(""),[B,y]=(0,n.useState)("");switch(t){case"headerLogo":a=""===o?"Select Logo":"Edit Logo",s="/bot/add-bot-logo";break;case"visitorBubbleLogo":a=""===o?"Select Logo":"Edit Logo",s="/bot/".concat(u,"/").concat(h,"/visitor-message-logo");break;case"botBubbleLogo":a=""===o?"Select Logo":"Edit Logo",s="/bot/".concat(u,"/").concat(h,"/bot-message-logo");break;case"chatButton":a=""===o?"Select Logo":"Edit Logo",s="";break;default:a="Select Logo"}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:o&&(0,p.jsx)("img",{src:v,alt:"headerLogo",height:50})}),(0,p.jsxs)(P.Z,{spacing:2,direction:"row",children:[(0,p.jsxs)(k.Z,{component:"label",variant:"contained",children:[a,(0,p.jsx)(le,{type:"file",onChange:e=>{try{const o=e.target.files[0];if(c=o.size,o.type.startsWith("image/")&&c<=l){b(o);const e=new FileReader;e.onloadend=()=>{j(e.result)},e.readAsDataURL(o),x(!0),Z("")}else Z("Please upload valid image file and size is <= ".concat(l/1e3," kb")),b(""),x(!1)}catch(o){console.log("Error uploading the image ::",o),Z("Please select the image file")}}})]}),g&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(k.Z,{variant:"contained",startIcon:(0,p.jsx)($.Z,{}),onClick:async()=>{const e=new FormData;e.append("file",m);const o={},t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t)),o.Botid=h,o.Organizationid=u,o.Accept="application/json";const n=(0,d.TY)(s);await fetch(n,{headers:o,method:"POST",body:e}).then((e=>e.json())).then((e=>{console.log("FileUpload : ",e.data),x(!1),y("Logo uploaded successfully.")})).catch((e=>{console.log("File upload failed. Please try again.",e)}))},ml:5,children:"Upload"})})]}),m&&(0,p.jsxs)(i.Z,{variant:"body2",children:["File Name : ",m.name," "]}),B&&(0,p.jsxs)(i.Z,{variant:"body2",color:"green",children:[" ",B]}),""!=f&&(0,p.jsx)(i.Z,{variant:"body2",color:"red",children:f})]})}function se(e){let{values:o,touched:t,errors:n,handleBlur:l,handleChange:a,setFieldValue:s}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Message Bubble Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"messageBubbleLogo",children:"Show Message Bubble Logo"}),(0,p.jsx)(U,{id:"messageBubbleLogo",name:"messageBubbleLogo",value:o.messageBubbleLogo,defaultValue:!1,onChange:s})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(i.Z,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Visitor Bubble Settings"})}),o.messageBubbleLogo&&(0,p.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,p.jsx)(S.Z,{htmlFor:"uploadVisitorLogo",children:"Upload Visitor Logo"}),(0,p.jsx)(ae,{editImage:o.visitorBubbleLogo,imageName:"visitorBubbleLogo",maxImageSize:5e4})]}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"visitorBackgroundColor",children:"Background Color"}),(0,p.jsx)(M,{id:"visitorBackgroundColor",type:"color",value:o.visitorBackgroundColor,name:"visitorBackgroundColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.visitorBackgroundColor&&n.visitorBackgroundColor)}),t.visitorBackgroundColor&&n.visitorBackgroundColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.visitorBackgroundColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"visitorFontColor",children:"Font Color"}),(0,p.jsx)(M,{id:"visitorFontColor",type:"color",value:o.visitorFontColor,name:"visitorFontColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.visitorFontColor&&n.visitorFontColor)}),t.visitorFontColor&&n.visitorFontColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.visitorFontColor})]})}),o.visitorLogo&&(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"visitorLogoImage",children:"Upload Visitor Logo"}),(0,p.jsx)(w.Z,{fullWidth:!0,type:"file",id:"visitorLogoImage",name:"visitorLogoImage",onChange:a,placeholder:"0px"})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"visitorBorderColor",children:"Border Color"}),(0,p.jsx)(M,{id:"visitorBorderColor",type:"color",value:o.visitorBorderColor,name:"visitorBorderColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.visitorBorderColor&&n.visitorBorderColor)}),t.visitorBorderColor&&n.visitorBorderColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.visitorBorderColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"visitorBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,p.jsx)(w.Z,{id:"visitorBubbleBorderCurve",name:"visitorBubbleBorderCurve",value:o.visitorBubbleBorderCurve,onBlur:l,onChange:a,placeholder:"border : 1px 2px 3px 4px"}),t.visitorBubbleBorderCurve&&n.visitorBubbleBorderCurve&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.visitorBubbleBorderCurve})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(i.Z,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Bot Bubble Settings"})}),o.messageBubbleLogo&&(0,p.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,p.jsx)(S.Z,{htmlFor:"uploadBotLogo",children:"Upload Bot Logo"}),(0,p.jsx)(ae,{editImage:o.botBubbleLogo,imageName:"botBubbleLogo",maxImageSize:5e4})]}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"botBackgroundColor",children:"Background Color"}),(0,p.jsx)(M,{id:"botBackgroundColor",type:"color",value:o.botBackgroundColor,name:"botBackgroundColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.botBackgroundColor&&n.botBackgroundColor)}),t.botBackgroundColor&&n.botBackgroundColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.botBackgroundColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"botFontColor",children:"Font Color"}),(0,p.jsx)(M,{id:"botFontColor",type:"color",value:o.botFontColor,name:"botFontColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.botFontColor&&n.botFontColor)}),t.botFontColor&&n.botFontColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.botFontColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"botBorderColor",children:"Border Color"}),(0,p.jsx)(M,{id:"botBorderColor",type:"color",value:o.botBorderColor,name:"botBorderColor",onBlur:l,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.botBorderColor&&n.botBorderColor)}),t.botBorderColor&&n.botBorderColor&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.botBorderColor})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"botBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,p.jsx)(w.Z,{id:"botBubbleBorderCurve",name:"botBubbleBorderCurve",value:o.botBubbleBorderCurve,onBlur:l,onChange:a,placeholder:"border : 1px 2px 3px 4px"}),t.botBubbleBorderCurve&&n.botBubbleBorderCurve&&(0,p.jsx)(L.Z,{error:!0,id:"helper-text-bg-color",children:n.botBubbleBorderCurve})]})})]})}function de(e){let{errors:o,isSubmitting:t}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,p.jsx)(L.Z,{error:!0,children:o.submit}),(0,p.jsx)(W.Z,{children:(0,p.jsx)(K.Z,{disableElevation:!0,disabled:Boolean(o.submit),isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})]})})}function ce(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(y.Z,{children:(0,p.jsx)(i.Z,{variant:"subtitle1",children:"Chat Launcher Settings"})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{htmlFor:"messagePlaceholder",children:"Chat Launcher Type *"}),(0,p.jsxs)(_.Z,{row:!0,name:"launcherType",defaultValue:o.launcherType,onChange:t,children:[(0,p.jsx)(F.Z,{value:"icon",control:(0,p.jsx)(T.Z,{}),label:"Button"}),(0,p.jsx)(F.Z,{value:"bar",control:(0,p.jsx)(T.Z,{}),label:"Bar"})]})]})}),"icon"==o.launcherType&&(0,p.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[(0,p.jsx)(S.Z,{htmlFor:"uploadChatButton",children:"Upload Chat Button"}),(0,p.jsx)(ae,{editImage:o.chatButton,imageName:"chatButton",maxImageSize:25e4})]}),"bar"==o.launcherType&&(0,p.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,p.jsxs)(P.Z,{spacing:1,children:[(0,p.jsx)(S.Z,{id:"buttonOnMobile",children:"Button on Mobile"}),(0,p.jsx)(U,{name:"buttonOnMobile",value:o.buttonOnMobile,defaultValue:!1,onChange:n})]})})]})}function he(e){let{onChange:o}=e;const{values:t}=(0,A.u6)();return n.useEffect((()=>{t&&o((0,x.K)(t))}),[t,o]),null}const ue=()=>{var e;const[o,t]=n.useState({}),[,l]=(0,C.g)();return(0,p.jsxs)(r.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:(0,p.jsx)(i.Z,{variant:"h5",children:"Chat Window Design"})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:8,children:(0,p.jsx)(ee,{onChange:t})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:4,children:(0,p.jsx)(m,{botDetails:l,botDesign:o,autoLaunch:null===l||void 0===l||null===(e=l.botDesign)||void 0===e?void 0:e.autoLaunch,onReceiveChatResponse:e=>(0,Z.gy)(e.organization)})}),(0,p.jsx)(r.ZP,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})}},80730:(e,o,t)=>{t.d(o,{Od:()=>s,TY:()=>h,U2:()=>i,gz:()=>a,v_:()=>l});var n=t(89637),r=t(32203);async function i(e,o){return d("GET",e,o,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,o){return d("POST",e,o,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,o){return d("PUT",e,o,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,o){return d("DELETE",e,o,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function d(e,o,t){let{headers:n,noAuth:r,...i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const l="POST"===e||"PUT"===e||"DELETE"===e;if(o=h(o,l?void 0:t),t=t&&"object"===typeof t&&l?JSON.stringify(t):void 0,n||(n={}),n["Content-Type"]="application/json",n.Accept="application/json",!1!==r){const e=sessionStorage.getItem("token");e&&(n.Authorization="Bearer ".concat(e))}const a=await fetch(o,{...i,headers:n,body:t,method:e}),s=await a.json();if(a.ok){const{data:e,...o}=s;return delete o.status,e&&!Object.keys(o).length?e:s}throw s.message?new Error(s.message):s}const c=(0,n.lf)(r.Hi,"/");function h(e,o){if(!e)return e;const t=o&&Object.keys(o);if(null!==t&&void 0!==t&&t.length){const n=t.reduce(((e,t)=>{let n=o[t];return null===n||void 0===n?e:(n="".concat(t,"=").concat(encodeURIComponent(n)),e?"".concat(e,"&").concat(n):n)}),"");n&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(n))}return e.startsWith("https://")?e:"".concat(c).concat(e)}},45960:(e,o,t)=>{t.d(o,{Bc:()=>s,Iz:()=>d,Od:()=>a,lz:()=>i,pb:()=>c});var n=t(80730),r=t(23509);async function i(e){const{organization:{websiteUrl:o,_id:t}}=r.tN.getState(),i={organizationId:t,websiteUrl:o,botName:e,botDesign:{botLogo:{name:"",url:""},visitorMessageLogo:{name:"",url:""},botMessageLogo:{name:"",url:""},backgroundColor:"#e7a654",textColor:"#ffffff",dimensions:{heightInPixel:"500px",heightInPercent:"70%",widthInPixel:"350px",widthInPercent:"25%"},botLogoDimensions:{heightInPixel:"30px",heightInPercent:"100%",widthInPixel:"30px",widthInPercent:"100%"}}},l=await n.v_("/bot/initialize-create-bot",i),a=l._id;let{botsMap:s,botsList:d}=r.tN.getState();s={...s,[a]:l},d=[...d],d.push(l._doc),r.tN.setState({selectedBotId:a,botsMap:s,botsList:d})}async function l(e,o,t){const{organizationId:i}=r.tN.getState();if(!i||!e)throw new Error("Bot details not found");const l=await n.gz("/bot/".concat(i,"/").concat(e),o);return h(l,t),l}async function a(e){const{organizationId:o,selectedBotId:t}=r.tN.getState();if(!o||!e)throw new Error("Bot details not found");const{deleted:i}=await n.Od("/bot/".concat(o,"/").concat(e));if(i){let{botsMap:e,botsList:o}=r.tN.getState();e={...e},o=[...o],delete e[i];const n=o.findIndex((e=>e._id===i));n>=0&&o.splice(n,1);const a={botsMap:e,botsList:o};var l;if(t===i)a.selectedBotId=(null===(l=o[0])||void 0===l?void 0:l._id)||null;r.tN.setState(a)}return!!i}function s(e,o){let{botDesign:t}=r.tN.getState();return t={...t,...o},l(e,{botDesign:t})}function d(e,o){return l(e,{botName:o})}function c(e,o){let{botSettings:t={}}=r.tN.getState();return t={...t,...o},l(e,{botSettings:t})}function h(e){let o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=e._id;let{botsMap:n,botsList:i}=r.tN.getState();n={...n,[t]:e},i=[...i];const l=i.findIndex((e=>e._id===t));l>=0?i[l]=e:i.push(e);const a={botsMap:n,botsList:i};o&&(a.selectedBotId=t),r.tN.setState(a)}},49542:(e,o,t)=>{t.d(o,{RF:()=>i,gy:()=>l,uZ:()=>a,vv:()=>s});var n=t(80730),r=t(23509);async function i(e,o){await async function(){const e=r.tN.getState();let{organizationList:o,organizationId:t,organization:i}=e;if(!e.isSuperUser||Array.isArray(o))return;if(o=await n.v_("/superAdmin/get-all-organization"),o.length)if(t){if(!i){var l;i=null===(l=o)||void 0===l?void 0:l.filter((e=>e._id===t))[0]}}else{const e=o[0];t=e._id,i=e}r.tN.setState({organizationList:o,organizationId:t,organization:i})}();const{organizationId:t}=r.tN.getState();return e?e!==t&&r.tN.setState({organizationId:e}):e=t,!e||(await async function(e){const o=await n.v_("/organization/get-organization-by-id",{organizationId:e});r.tN.setState({organization:o})}(e),await a(e,o),!0)}function l(e){if(!e||"object"!==typeof e)return;let{organization:o}=r.tN.getState();o&&(o={...o,...e},r.tN.setState({organization:o}))}async function a(e,o){var t;const i=await n.v_("/bot/get-all-bots",{organizationId:e}),l=o||(null===(t=i[0])||void 0===t?void 0:t._id),a=i.reduce(((e,o)=>(e[o._id]=o,e)),{});r.tN.setState({organizationId:e,botsList:i,botsMap:a,selectedBotId:l})}function s(e){r.tN.setState({selectedBotId:e})}},969:(e,o,t)=>{t.d(o,{g:()=>r});var n=t(23509);function r(e){const o=(0,n.tN)((e=>e.selectedBotId)),t=(0,n.tN)((t=>t.botsMap[e||o]));return[e||o,t]}},89637:(e,o,t)=>{function n(e,o){return e.replace(new RegExp("".concat(r(o),"+$")),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function i(e){const o=new Date(e),t=o.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()],r=o.getFullYear();return"".concat(n," ").concat(t,", ").concat(r)}t.d(o,{lf:()=>n,p6:()=>i})},32203:(e,o,t)=>{t.d(o,{Hi:()=>n,LC:()=>a,lB:()=>r,rn:()=>l,yu:()=>i});const n="https://devbackend.livhousing.com",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY,i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,a="https://60f1-203-192-224-75.ngrok-free.app"}}]);