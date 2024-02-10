"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[160],{56328:(e,o,t)=>{t.r(o),t.d(o,{default:()=>be});var n=t(99584),r=t(76312),l=t(86344),i=t(43664),a=t(4260),s=t(74243),c=t(79028),d=t(35240);const h="lp-cid";let u;function g(){try{return sessionStorage.getItem(h)}catch(e){return console.error("Unable to use browser cache",e),u}}function x(){const e=new URLSearchParams(window.location.search),o=e.get("sourceUrl")||void 0,t=e.get("referrerUrl")||void 0;return{utmParameters:Array.from(e.keys()).reduce(((o,t)=>{if(t.startsWith("utm_")){o=o||{};const n=e.get(t);n&&"null"!==n&&(o[t]=n)}return o}),void 0),sourceUrl:o,referrerUrl:t}}var p=t(32676),m=t(80156),b=t(97884);const j=function(e){var o;let{botDetails:t,botDesign:r,onReceiveChatResponse:l,autoLaunch:i,recipientId:p,onCallback:j}=e;const[v,y]=n.useState(i||!1),[L,w]=n.useState(r),[F,k]=n.useState(!1),[S,W]=n.useState(t),[I,M]=n.useState(p),[T,z]=n.useState([]),[P,_]=n.useState(),U=n.useRef({autoLaunch:i});U.current.recipientId=I,U.current.onCallback=n.useCallback(((e,o)=>{"set-visitor-id"===e&&o.recipientId&&M(o.recipientId),null===j||void 0===j||j(e,o)}),[j]),U.current.history=T,U.current.showBot=v,U.current.design=L,U.current.bot=S,U.current.locationDetails=P,U.current.onReceiveChatResponse=l,n.useEffect((()=>{W(t)}),[t]),n.useEffect((()=>{w(r)}),[r]),n.useEffect((()=>{const{updateContact:e,bot:o,recipientId:t,autoLaunch:n}=U.current;o?B(o,t,e,n).then(z):async function(){try{const e=new URLSearchParams(window.location.search),o={authToken:e.get("token")};return await d._M("/bot/get-bot-details-by-auth-token",o,{noAuth:!0})}catch(e){console.log("Failed to init chat:-",e)}}().then((o=>{W(o);const{design:r}=U.current;!r&&o.botDesign&&w((0,m.A)(o.botDesign)),B(o,t,e,n).then(z)})),async function(){var e,o,t;const n=c.AZ;let r=await d._M("https://api.ipdata.co?api-key=".concat(n));const l=(new s.UAParser).getResult()||{},{ip:i,is_eu:a,city:h,region:u,region_code:g,region_type:p,country_name:m,country_code:b,continent_name:j,continent_code:v,latitude:C,longitude:f,postal:B,calling_code:y,time_zone:L,currency:w}=r,F={ipAddress:i,deviceType:null===(e=l.device)||void 0===e?void 0:e.type,browserName:null===(o=l.browser)||void 0===o?void 0:o.name,osName:null===(t=l.os)||void 0===t?void 0:t.name,...x()};return F.locationDetails={is_eu:a,city:h,region:u,region_code:g,region_type:p,country_name:m,country_code:b,continent_name:j,continent_code:v,latitude:C,longitude:f,postal:B,calling_code:y,time_zone:L,currency:w},F}().then(_)}),[]);const R=n.useCallback(((e,o)=>{var t,n,r,l;let{showBot:i,design:a,onCallback:s}=U.current;i=e?!i:i,null===s||void 0===s||s("windowToggle",{state:i,design:i?{width:null===a||void 0===a||null===(t=a.window)||void 0===t?void 0:t.width,height:null===a||void 0===a||null===(n=a.window)||void 0===n?void 0:n.height,spacingBottom:null===a||void 0===a||null===(r=a.window)||void 0===r?void 0:r.spacingBottom,spacingCorner:null===a||void 0===a||null===(l=a.window)||void 0===l?void 0:l.spacingCorner}:o})}),[]),V=n.useCallback((e=>{var o;null!==(o=U.current.history)&&void 0!==o&&o.length||setTimeout((()=>{const e={role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"};z((o=>o?o.concat(e):[e]))}),e||1700)}),[]),N=n.useCallback((()=>{R(!0),y((e=>!e)),k(!0),setTimeout((()=>k(!1)),1e3),V()}),[R,V]);n.useLayoutEffect((()=>{L&&R(!1,!0)}),[L,R]);const A=n.useCallback((async e=>{const{updateContact:o,onReceiveChatResponse:t,bot:n,locationDetails:r,onCallback:l,recipientId:i}=U.current;return await async function(e,o,t,n){let{onReceiveChatResponse:r,updateContact:l,onCallback:i,recipientId:a}=t;const s=g(),{_id:c,organizationId:x}=o,p={userQuery:e,recipientDetails:{recipientId:a,conversationId:s,...n}};r&&(p.testMode=!0);try{const e=await d.s$("/bot/".concat(x,"/").concat(c,"/chat"),p,{noAuth:!0});return null===r||void 0===r||r(e),function(e,o){let{updateContact:t,onCallback:n}=o;const{chatRefId:r,recipientId:l,messages:i}=e;return function(e){try{u=e,sessionStorage.setItem(h,e)}catch(o){console.error("Unable to use browser cache",o)}}(r),null===n||void 0===n||n("set-visitor-id",{recipientId:l}),f(i,t)}(e,{updateContact:l,onCallback:i})}catch(m){return[{role:"assistant",type:"text",content:m.message||"Unknown Server error"}]}}(e,n,{onReceiveChatResponse:t,updateContact:o,onCallback:l,recipientId:i},r)}),[]);U.current.updateContact=n.useCallback((async e=>{const o=await A(e);z((e=>e.filter((e=>"lead"!==e.type)).concat(...o)))}),[A]);const D=n.useCallback((()=>{z([]),function(){try{u=void 0,sessionStorage.removeItem(h)}catch(e){console.error("Unable to use browser cache",e)}}(),delete U.current.history,V(700)}),[V]);if(!S||!P)return null;let H="hide-chat";return v&&F?H="opening":v&&!F?H="show-chat":!v&&F&&(H="closing"),H+="bottomLeft"===(null===L||void 0===L||null===(o=L.window)||void 0===o?void 0:o.align)?" bottom-left ":" bottom-right ",(0,b.jsxs)("div",{className:"chat-handler "+H,children:[v&&(0,b.jsx)(a.c,{botDesign:L,messages:T,showTime:!0,onUserMessage:A,onHistoryChange:z,onClear:D,onHide:N,onCallback:j}),!v&&!F&&(0,b.jsx)(C,{design:L,onToggle:N})]})},v=(0,p.iO)("42px");function C(e){let{design:o,onToggle:t}=e;const{launcher:{useBar:n=!1,buttonLogoUrl:r,buttonOnMobile:l,barText:i}={},header:{bgColor:a,fontColor:s}={}}=o||{};return!n||l?(0,b.jsxs)("div",{id:"lp-launcher",className:"lp-launcher button",onClick:t,style:{borderColor:a},children:[r&&(0,b.jsx)("img",{src:r,alt:"Live Chat"}),!r&&v]}):(0,b.jsx)("div",{id:"lp-launcher",className:"lp-launcher bar",onClick:t,style:{backgroundColor:a,color:s},children:(0,b.jsxs)("span",{children:[p.gT," ",i||"Live Chat"]})})}function f(e,o){if(null===e||void 0===e||!e.length)return e;const t=e[e.length-1];return"form"===t.type&&e.push({role:"user",type:"lead",content:"",profile:t.media,updateContact:o}),e}async function B(e,o,t,n){const{_id:r,organizationId:l}=e,i=g();if(!o||!i)return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[];try{const e=await d._M("/bot/".concat(l,"/").concat(r,"/chat/history/").concat(o,"/").concat(i),null,{noAuth:!0}),{messages:n}=e||{};return f(n,t)}catch(a){console.log("Failed to fetch chat history:-",a)}return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[]}var y=t(53632),L=t(57752),w=t(25040),F=t(62216),k=t(64296),S=t(25348),W=t(90760),I=t(11968),M=t(2496),T=t(59112),z=t(25528),P=t(55056),_=t(78192),U=t(40440),R=t(77676),V=t(43924),N=t(44528),A=t(54096),D=t(64132),H=t(72512),E=t(12316),G=t(1816),O=t(47148);const $=function(e){let{value:o,onChange:t,...r}=e;const[l,i]=n.useState(!1),a=n.useRef(),s=n.useRef(),c=e=>{let{hex:o}=e;t(r.name,o)};return n.useEffect((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&i(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,b.jsxs)("div",{ref:a,style:{position:"relative"},children:[(0,b.jsx)("div",{style:{backgroundColor:o,height:"35px",width:"35px",position:"absolute",top:"3px",left:"3px"}}),(0,b.jsx)(P.c,{inputRef:s,value:o,onChange:e=>c({hex:e.currentTarget.value}),maxLength:9,...r,type:"text",onFocus:()=>i(!0),style:{paddingLeft:"32px"}}),l&&(0,b.jsx)("div",{style:{position:"absolute",zIndex:1,top:"45px"},children:(0,b.jsx)(O.Wm,{color:o,onChange:c})})]})};var Q=t(8428);const q=function(e){let{value:o,onChange:t,...r}=e;const l=n.useCallback((e=>t(r.name,"yes"===e.target.value)),[r.name,t]);return(0,b.jsxs)(N.c,{...r,value:o?"yes":"no",defaultValue:o?"yes":"no",onChange:l,children:[(0,b.jsx)(D.c,{value:"no",children:"No"}),(0,b.jsx)(D.c,{value:"yes",children:"Yes"})]})},J=[{value:"gpt-3.5-turbo-16k",label:"GPT 3.5 Latest Stable (default)",description:"Latest stable model of GPT 3.5. Cheapest and more performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."},{value:"gpt-4",label:"GPT 4 Latest Stable",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview (suggested)",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."}],Y=J.reduce(((e,o)=>(e[o.value]=o,e)),{});const Z=function(e){var o;let{value:t,...n}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N.c,{...n,value:t,defaultValue:J[0].value,children:J.map((e=>(0,b.jsx)(D.c,{value:e.value,children:e.label},e.value)))}),(0,b.jsx)(z.c,{id:"bot-model-description",children:t?null===(o=Y[t])||void 0===o?void 0:o.description:J[0].description})]})};var K=t(25496),X=t(46264),ee=t(69700);const oe=()=>H.Qb().matches(/^#([0-9A-Fa-f]{3}){1,2}$/,"Is not a valid color code").required("Background color is required"),te=e=>H.Qb().matches(/^(\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%|\d+%)$/,"Invalid ".concat(e,"! Use the format: 1px 2px 3px 4px not a valid code")),ne=H.kt().shape({bgColor:oe(),fontColor:oe(),headerPadding:te("padding"),headerLogoMargin:te("margin"),visitorBubbleBorderCurve:te("border-radius"),botBubbleBorderCurve:te("border-radius")}),re={maxWidth:{xs:600,lg:700,xl:1050},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const le=function(e){let{onChange:o}=e;const[t,a]=(0,y._)(),{botName:s,botDesign:c={}}=a,d={bgColor:c.backgroundColor||"#484a49",botBorderColor:c.botBorderColor||"#484a49",botBackgroundColor:c.botBackgroundColor||"#dfd9df",botFontColor:c.botFontColor||"#000000",visitorBorderColor:c.visitorBorderColor||"#000000",visitorBackgroundColor:c.visitorBackgroundColor||"#ffffff",visitorFontColor:c.visitorFontColor||"#000000",fontType:c.fontType||"normal-font",windowAlign:c.windowAlign||"bottomRight",fontColor:c.textColor||"#484a49",titleText:s,placeholder:"Type your message...",launcherType:"bar",messageBubbleLogo:!0,botLogo:c.botLogo||{},visitorMessageLogo:c.visitorMessageLogo||{},botMessageLogo:c.botMessageLogo||{},botChatButton:c.botChatButton||{},...c},h=(0,r.mW)((e=>{var o,t;return null===(o=e.organization)||void 0===o||null===(t=o.availableCredits)||void 0===t?void 0:t.toFixed(3)})),[u,g]=(0,n.useState)(!1),x=()=>{g(!1===u)};return(0,b.jsx)(G.c,{sx:re,content:!1,border:!1,boxShadow:!0,children:(0,b.jsx)(W.c,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,b.jsx)(E.QJ,{initialValues:d,validationSchema:ne,onSubmit:async(e,o)=>{let{setErrors:n,setStatus:r,setSubmitting:l}=o;try{var i,a,s,d;e.botChatButton.name!==(null===(i=c.botChatButton)||void 0===i?void 0:i.name)&&(e.botChatButton=c.botChatButton),e.botLogo.name!==(null===(a=c.botLogo)||void 0===a?void 0:a.name)&&(e.botLogo=c.botLogo),e.visitorMessageLogo.name!==(null===(s=c.visitorMessageLogo)||void 0===s?void 0:s.name)&&(e.visitorMessageLogo=c.visitorMessageLogo),e.botMessageLogo.name!==(null===(d=c.botMessageLogo)||void 0===d?void 0:d.name)&&(e.botMessageLogo=c.botMessageLogo),await(0,Q.WS)(t,e),r({success:!1}),l(!1)}catch(h){console.error(h),r({success:!1}),n({submit:h.message}),l(!1)}},children:e=>(0,b.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,b.jsxs)(l.cp,{container:!0,spacing:3,children:[(0,b.jsxs)(l.cp,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:["Balance : \xa0",(0,b.jsxs)(i.c,{variant:"subtitle1",color:"green",children:[h,"\xa0$"]})]}),(0,b.jsx)(ie,{...e}),(0,b.jsx)(pe,{...e}),(0,b.jsx)(se,{...e}),(0,b.jsx)(ce,{...e}),(0,b.jsx)(ae,{...e}),(0,b.jsx)(de,{...e}),(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(w.c,{children:(0,b.jsx)(F.c,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:x,children:"Advance settings"})})}),u&&(0,b.jsx)(ge,{...e}),(0,b.jsx)(xe,{...e})]}),(0,b.jsx)(me,{onChange:o})]})})})})};function ie(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"General Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"botModelName",children:"Underlying GPT Model *"}),(0,b.jsx)(Z,{id:"botModelName",value:o.botModelName,name:"botModelName",onBlur:r,onChange:a,error:Boolean(t.botModelName&&n.botModelName)}),t.botModelName&&n.botModelName&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:n.botModelName})]})})]})}function ae(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a,setFieldValue:s}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Header Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"bgColor",children:"Background Color *"}),(0,b.jsx)($,{id:"bgColor",type:"color",value:o.bgColor,name:"bgColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.bgColor&&n.bgColor)}),t.bgColor&&n.bgColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:n.bgColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"fontColor",children:"Font Color *"}),(0,b.jsx)($,{id:"fontColor",type:"color",value:o.fontColor,name:"fontColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.fontColor&&n.fontColor)}),t.fontColor&&n.fontColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-font-color",children:n.fontColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"headerFontSize",children:"Font Size"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"headerFontSize",name:"headerFontSize",defaultValue:o.headerFontSize,onChange:a,placeholder:"18px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"titleText",children:"Chat Window Title *"}),(0,b.jsx)(P.c,{fullWidth:!0,error:Boolean(t.titleText&&n.titleText),id:"titleText",value:o.titleText,name:"titleText",onBlur:r,onChange:a,placeholder:"Provide your bot title text",inputProps:{maxLength:25}}),t.titleText&&n.titleText&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bot-title",children:n.titleText})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"headerPadding",style:{paddingBottom:"6px"},children:"Chat Window Header Padding"}),(0,b.jsx)(P.c,{id:"headerPadding",name:"headerPadding",value:o.headerPadding,onBlur:r,onChange:a,placeholder:"padding: 2px 5px 2px 5px"}),t.headerPadding&&n.headerPadding&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:n.headerPadding})]})})]})}function se(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Composer Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"placeholder",children:"Placeholder Text *"}),(0,b.jsx)(P.c,{fullWidth:!0,error:Boolean(t.placeholder&&n.placeholder),id:"placeholder",defaultValue:o.placeholder,name:"placeholder",onBlur:r,onChange:a,placeholder:"Type your message...",inputProps:{maxLength:30}}),t.placeholder&&n.placeholder&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-message-placeholder",children:n.placeholder})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"fontType",children:"Font source"}),(0,b.jsxs)(_.c,{row:!0,id:"fontType",name:"fontType",defaultValue:o.fontType,onChange:a,children:[(0,b.jsx)(U.c,{value:"normalFont",control:(0,b.jsx)(R.c,{}),label:"Regular"}),(0,b.jsx)(U.c,{value:"googleFont",control:(0,b.jsx)(R.c,{}),label:"Remote"})]})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"fontType",children:"Font name"}),(0,b.jsx)(P.c,{fullWidth:!0,id:"fontName",name:"fontName",defaultValue:o.fontName,onChange:a,placeholder:"Provide Font Name"})]})}),"googleFont"==o.fontType&&(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"googleFontLink",children:"Paste Google Font Link"}),(0,b.jsx)(P.c,{multiline:!0,id:"googleFontLink",name:"googleFontLink",defaultValue:o.googleFontLink,onChange:a,placeholder:"Ex: <link rel='preconnect' href='https://fonts.googleapis.com'>"})]})})]})}function ce(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Chat Window Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{id:"windowAlign",children:"Window Align"}),(0,b.jsxs)(N.c,{labelId:"windowAlign",defaultValue:o.windowAlign,name:"windowAlign",onChange:t,children:[(0,b.jsx)(D.c,{value:"bottomLeft",children:"Bottom Left"}),(0,b.jsx)(D.c,{value:"bottomRight",children:"Bottom Right"})]})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"paddingLeft",children:"Spacing on corner"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"paddingLeft",name:"paddingLeft",defaultValue:o.paddingLeft,onChange:t,placeholder:"0px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"paddingBottom",children:"Spacing on Bottom"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"paddingBottom",name:"paddingBottom",defaultValue:o.paddingBottom,onChange:t,placeholder:"0px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{id:"autoLaunch",children:"Proactive window"}),(0,b.jsx)(q,{value:o.autoLaunch,name:"autoLaunch",defaultValue:!1,onChange:n})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"chatWindowWidth",children:"Chat Window Width"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"chatWindowWidth",name:"chatWindowWidth",defaultValue:o.chatWindowWidth,onChange:t,placeholder:"300px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:4,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"chatWindowHeight",children:"Chat Window Height"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"chatWindowHeight",name:"chatWindowHeight",defaultValue:o.chatWindowHeight,onChange:t,placeholder:"320px"})]})})]})}function de(e){var o;let{values:t,errors:n,handleBlur:r,touched:a,handleChange:s,setFieldValue:c}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Header Logo Settings"})})}),(0,b.jsxs)(l.cp,{item:!0,xs:12,md:6,children:[(0,b.jsx)(T.c,{htmlFor:"uploadHeaderLogo",children:"Upload Header Logo"}),(0,b.jsx)(ue,{imageUrl:null===(o=t.botLogo)||void 0===o?void 0:o.url,imageName:"botLogo",onChange:c})]}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"headerLogoMargin",children:"Header Logo Margin"}),(0,b.jsx)(P.c,{id:"headerLogoMargin",name:"headerLogoMargin",value:t.headerLogoMargin,onBlur:r,onChange:s,placeholder:"border : 1px 2px 3px 4px"}),a.headerLogoMargin&&n.headerLogoMargin&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:n.headerLogoMargin})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"logoWidth",children:"Width"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"logoWidth",name:"logoWidth",defaultValue:t.logoWidth,onChange:s,placeholder:"64px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"logoHeight",children:"Height"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"logoHeight",name:"logoHeight",defaultValue:t.logoHeight,onChange:s,placeholder:"64px"})]})})]})}const he=(0,K.cp)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ue(e){let{imageUrl:o,imageName:t,maxImageSize:r=25e4,onChange:a}=e;const[s,c]=(0,n.useState)(null),[d,h]=(0,n.useState)(o),u=!!s,g=!u&&o,x=d?"Replace image":"Select image";return(0,b.jsxs)(b.Fragment,{children:[d&&(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)("img",{src:d,alt:"headerLogo",height:50})}),(0,b.jsxs)(M.c,{spacing:2,direction:"row",children:[(0,b.jsxs)(V.c,{component:"label",variant:"contained",children:[x,(0,b.jsx)(he,{name:t,type:"file",onChange:e=>{try{const o=e.target.files[0],t=o.size;if(o.type.startsWith("image/")&&t<=r){c(o),h(URL.createObjectURL(o));const e=new FileReader;e.onloadend=()=>{h(e.result)},e.readAsDataURL(o)}else(0,ee.l)(!0,"Please upload valid image file and size is <= ".concat(r/1e3," kb"),"error"),c(null)}catch(o){console.log("Error uploading the image ::",o),(0,ee.l)(!0,"Please select the image file","error")}}})]}),g&&(0,b.jsx)(V.c,{variant:"outlined",onClick:async()=>{try{await(0,Q.In)(t),a(t,null),h(null),(0,ee.l)(!0,"Logo deleted successfully.","success")}catch(e){console.log("Deleting logo failed. Please try again later.",e)}},startIcon:(0,b.jsx)(A.c,{}),children:"Delete"}),u&&(0,b.jsx)(w.c,{children:(0,b.jsx)(F.c,{color:"primary",variant:"contained",startIcon:(0,b.jsx)(X.c,{}),onClick:async()=>{try{const e=await(0,Q.Ci)(t,s);a(t,e),c(null),(0,ee.l)(!0,"Logo uploaded successfully.","success")}catch(e){console.log("File upload failed. Please try again later.",e)}},ml:5,children:"Upload"})})]}),s&&(0,b.jsxs)(i.c,{variant:"body2",children:["File Name : ",s.name," "]})]})}function ge(e){var o,t;let{values:n,touched:r,errors:a,handleBlur:s,handleChange:c,setFieldValue:d}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Message Bubble Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"messageBubbleLogo",children:"Show Message Bubble Logo"}),(0,b.jsx)(q,{id:"messageBubbleLogo",name:"messageBubbleLogo",value:n.messageBubbleLogo,defaultValue:!1,onChange:d})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"fontSize",children:"Font Size"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"text",id:"fontSize",name:"fontSize",defaultValue:n.fontSize,onChange:c,placeholder:"12px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(i.c,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Visitor Bubble Settings"})}),n.messageBubbleLogo&&(0,b.jsxs)(l.cp,{item:!0,xs:12,children:[(0,b.jsx)(T.c,{htmlFor:"uploadVisitorLogo",children:"Upload Visitor Logo"}),(0,b.jsx)(ue,{imageUrl:null===(o=n.visitorMessageLogo)||void 0===o?void 0:o.url,imageName:"visitorMessageLogo",maxImageSize:5e4,onChange:d})]}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"visitorBackgroundColor",children:"Background Color"}),(0,b.jsx)($,{id:"visitorBackgroundColor",type:"color",value:n.visitorBackgroundColor,name:"visitorBackgroundColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBackgroundColor&&a.visitorBackgroundColor)}),r.visitorBackgroundColor&&a.visitorBackgroundColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.visitorBackgroundColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"visitorFontColor",children:"Font Color"}),(0,b.jsx)($,{id:"visitorFontColor",type:"color",value:n.visitorFontColor,name:"visitorFontColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.visitorFontColor&&a.visitorFontColor)}),r.visitorFontColor&&a.visitorFontColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.visitorFontColor})]})}),n.visitorLogo&&(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"visitorLogoImage",children:"Upload Visitor Logo"}),(0,b.jsx)(P.c,{fullWidth:!0,type:"file",id:"visitorLogoImage",name:"visitorLogoImage",onChange:c,placeholder:"0px"})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"visitorBorderColor",children:"Border Color"}),(0,b.jsx)($,{id:"visitorBorderColor",type:"color",value:n.visitorBorderColor,name:"visitorBorderColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBorderColor&&a.visitorBorderColor)}),r.visitorBorderColor&&a.visitorBorderColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.visitorBorderColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"visitorBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,b.jsx)(P.c,{id:"visitorBubbleBorderCurve",name:"visitorBubbleBorderCurve",value:n.visitorBubbleBorderCurve,onBlur:s,onChange:c,placeholder:"border : 1px 2px 3px 4px"}),r.visitorBubbleBorderCurve&&a.visitorBubbleBorderCurve&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.visitorBubbleBorderCurve})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(i.c,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Bot Bubble Settings"})}),n.messageBubbleLogo&&(0,b.jsxs)(l.cp,{item:!0,xs:12,children:[(0,b.jsx)(T.c,{htmlFor:"uploadBotLogo",children:"Upload Bot Logo"}),(0,b.jsx)(ue,{imageUrl:null===(t=n.botMessageLogo)||void 0===t?void 0:t.url,imageName:"botMessageLogo",maxImageSize:5e4,onChange:d})]}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"botBackgroundColor",children:"Background Color"}),(0,b.jsx)($,{id:"botBackgroundColor",type:"color",value:n.botBackgroundColor,name:"botBackgroundColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.botBackgroundColor&&a.botBackgroundColor)}),r.botBackgroundColor&&a.botBackgroundColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.botBackgroundColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"botFontColor",children:"Font Color"}),(0,b.jsx)($,{id:"botFontColor",type:"color",value:n.botFontColor,name:"botFontColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.botFontColor&&a.botFontColor)}),r.botFontColor&&a.botFontColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.botFontColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"botBorderColor",children:"Border Color"}),(0,b.jsx)($,{id:"botBorderColor",type:"color",value:n.botBorderColor,name:"botBorderColor",onBlur:s,onChange:d,placeholder:"",fullWidth:!0,error:Boolean(r.botBorderColor&&a.botBorderColor)}),r.botBorderColor&&a.botBorderColor&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.botBorderColor})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"botBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,b.jsx)(P.c,{id:"botBubbleBorderCurve",name:"botBubbleBorderCurve",value:n.botBubbleBorderCurve,onBlur:s,onChange:c,placeholder:"border : 1px 2px 3px 4px"}),r.botBubbleBorderCurve&&a.botBubbleBorderCurve&&(0,b.jsx)(z.c,{error:!0,id:"helper-text-bg-color",children:a.botBubbleBorderCurve})]})})]})}function xe(e){let{errors:o,isSubmitting:t}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(l.cp,{item:!0,xs:12,children:[(0,b.jsx)(z.c,{error:!0,children:o.submit}),(0,b.jsx)(w.c,{children:(0,b.jsx)(F.c,{disableElevation:!0,disabled:Boolean(o.submit),isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})]})})}function pe(e){var o;let{values:t,handleChange:n,setFieldValue:r}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.cp,{item:!0,xs:12,children:(0,b.jsx)(I.c,{children:(0,b.jsx)(i.c,{variant:"subtitle1",children:"Chat Launcher Settings"})})}),(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{htmlFor:"messagePlaceholder",children:"Chat Launcher Type *"}),(0,b.jsxs)(_.c,{row:!0,name:"launcherType",defaultValue:t.launcherType,onChange:n,children:[(0,b.jsx)(U.c,{value:"icon",control:(0,b.jsx)(R.c,{}),label:"Button"}),(0,b.jsx)(U.c,{value:"bar",control:(0,b.jsx)(R.c,{}),label:"Bar"})]})]})}),"icon"==t.launcherType&&(0,b.jsxs)(l.cp,{item:!0,xs:12,md:6,children:[(0,b.jsx)(T.c,{htmlFor:"uploadChatButton",children:"Upload Chat Button"}),(0,b.jsx)(ue,{imageUrl:null===(o=t.botChatButton)||void 0===o?void 0:o.url,imageName:"botChatButton",onChange:r})]}),"bar"==t.launcherType&&(0,b.jsx)(l.cp,{item:!0,xs:12,md:6,children:(0,b.jsxs)(M.c,{spacing:1,children:[(0,b.jsx)(T.c,{id:"buttonOnMobile",children:"Button on Mobile"}),(0,b.jsx)(q,{name:"buttonOnMobile",value:t.buttonOnMobile,defaultValue:!1,onChange:r})]})})]})}function me(e){let{onChange:o}=e;const{values:t}=(0,E.Sq)();return n.useEffect((()=>{t&&o((0,m.A)(t))}),[t,o]),null}const be=()=>{var e;const[o,t]=n.useState({}),[,a]=(0,y._)(),[s,c]=(0,n.useState)(!1),[d]=(0,y._)(),h=(0,r.mW)((e=>e.organizationId));return(0,b.jsxs)(l.cp,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,b.jsx)(l.cp,{item:!0,xs:12,sx:{mb:-2.25},children:(0,b.jsxs)(l.cp,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(l.cp,{item:!0,xs:6,children:(0,b.jsx)(i.c,{variant:"h5",children:"Chat Window Design"})}),(0,b.jsxs)(l.cp,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:[(0,b.jsx)(w.c,{children:(0,b.jsx)(F.c,{isLoading:s,disabled:s,variant:"contained",color:"success",size:"large",onClick:async()=>{c(!0)},children:"Deploy Bot"})}),(0,b.jsx)(k.c,{openPopUpDialog:s,setPopUpDialog:c,title:"Add Bot Details",children:(0,b.jsx)(S.c,{setIsDeployBot:c,botId:d,organizationId:h})})]})]})}),(0,b.jsx)(l.cp,{item:!0,xs:12,sm:12,md:12,lg:8,children:(0,b.jsx)(le,{onChange:t})}),(0,b.jsx)(l.cp,{item:!0,xs:12,sm:12,md:12,lg:4,children:(0,b.jsx)(j,{botDetails:a,botDesign:o,autoLaunch:null===a||void 0===a||null===(e=a.botDesign)||void 0===e?void 0:e.autoLaunch,recipientId:fe(),onReceiveChatResponse:e=>(0,L.ii)(e.organization),onCallback:je})}),(0,b.jsx)(l.cp,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})};function je(e,o){if("set-visitor-id"===e){const{recipientId:e}=o||{};e&&Be(e)}}const ve="lp-vid",Ce="permanent-app-id";function fe(){try{let e=localStorage.getItem(ve);return e||(e=localStorage.getItem(Ce),e&&(Be(e),localStorage.removeItem(Ce))),e}catch(e){console.error("Unable to use browser cache",e)}}function Be(e){try{localStorage.setItem(ve,e)}catch(o){console.error("Unable to use browser cache",o)}}},57752:(e,o,t)=>{t.d(o,{Il:()=>a,O8:()=>l,cH:()=>s,ii:()=>i});var n=t(35240),r=t(76312);async function l(e,o){await async function(){const e=r.mW.getState();let{organizationList:o,organizationId:t,organization:l}=e;if(!e.isSuperUser||Array.isArray(o))return;if(o=await n.s$("/superAdmin/get-all-organization"),o.length)if(t){if(!l){var i;l=null===(i=o)||void 0===i?void 0:i.filter((e=>e._id===t))[0]}}else{const e=o[0];t=e._id,l=e}r.mW.setState({organizationList:o,organizationId:t,organization:l})}();const{organizationId:t}=r.mW.getState();return e?e!==t&&r.mW.setState({organizationId:e}):e=t,!e||(await async function(e){const o=await n.s$("/organization/get-organization-by-id",{organizationId:e});r.mW.setState({organization:o})}(e),await a(e,o),!0)}function i(e){if(!e||"object"!==typeof e)return;let{organization:o}=r.mW.getState();o&&(o={...o,...e},r.mW.setState({organization:o}))}async function a(e,o){var t;const l=await n.s$("/bot/get-all-bots",{organizationId:e}),i=o||(null===(t=l[0])||void 0===t?void 0:t._id),a=l.reduce(((e,o)=>(e[o._id]=o,e)),{});r.mW.setState({organizationId:e,botsList:l,botsMap:a,selectedBotId:i})}function s(e){r.mW.setState({selectedBotId:e})}},53632:(e,o,t)=>{t.d(o,{_:()=>r});var n=t(76312);function r(e){const o=(0,n.mW)((e=>e.selectedBotId)),t=(0,n.mW)((t=>t.botsMap[e||o]));return[e||o,t]}}}]);