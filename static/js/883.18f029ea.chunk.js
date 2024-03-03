"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[883],{81020:(e,o,t)=>{t.r(o),t.d(o,{default:()=>fe});var n=t(9950),r=t(69713),i=t(60899),l=t(82053),a=t(15820),s=t(87946),d=t(44364),c=t(8478);const h="lp-cid";let u;function g(){try{return sessionStorage.getItem(h)}catch(e){return console.error("Unable to use browser cache",e),u}}function x(e){try{u=e,sessionStorage.setItem(h,e)}catch(o){console.error("Unable to use browser cache",o)}}function m(){try{u=void 0,sessionStorage.removeItem(h)}catch(e){console.error("Unable to use browser cache",e)}}function p(){const e=new URLSearchParams(window.location.search),o=e.get("sourceUrl")||void 0,t=e.get("referrerUrl")||void 0;return{utmParameters:Array.from(e.keys()).reduce(((o,t)=>{if(t.startsWith("utm_")){o=o||{};const n=e.get(t);n&&"null"!==n&&(o[t]=n)}return o}),void 0),sourceUrl:o,referrerUrl:t}}var b=t(28891),v=t(78023),j=t(44414);const C=function(e){var o,t;let{botDetails:r,botDesign:i,onReceiveChatResponse:l,autoLaunch:h,recipientId:u,onCallback:b}=e;const[C,y]=n.useState(h||!1),[f,S]=n.useState(i),[I,T]=n.useState(!1),[W,M]=n.useState(r),[z,P]=n.useState(u),[U,N]=n.useState([]),[R,_]=n.useState(),H=n.useRef({autoLaunch:h});H.current.recipientId=z,H.current.setAndBroadcastHistory=n.useCallback((e=>{"function"===typeof e?N((o=>{const t=e(o);return k(t,!0),t})):(N(e),k(e,!0))}),[]),H.current.onCallback=n.useCallback(((e,o)=>{"set-visitor-id"===e&&o.recipientId&&P(o.recipientId),null===b||void 0===b||b(e,o)}),[b]),H.current.history=U,H.current.showBot=C,H.current.design=f,H.current.bot=W,H.current.locationDetails=R,H.current.onReceiveChatResponse=l,n.useEffect((()=>{M(r)}),[r]),n.useEffect((()=>{S(i)}),[i]),n.useEffect((()=>{const{updateContact:e,bot:o,recipientId:t,autoLaunch:n,setAndBroadcastHistory:r}=H.current;return o?w(o,t,e,n).then(r):async function(){try{const e=new URLSearchParams(window.location.search),o={authToken:e.get("token")};return await c.Jt("/bot/get-bot-details-by-auth-token",o,{noAuth:!0})}catch(e){console.log("Failed to init chat:-",e)}}().then((o=>{M(o);const{design:i}=H.current;!i&&o.botDesign&&S((0,v.Y)(o.botDesign)),w(o,t,e,n).then(r)})),async function(){var e,o,t;const n=d.pR;let r=await c.Jt("https://api.ipdata.co?api-key=".concat(n)).catch((e=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:e.message})));const i=(new s.UAParser).getResult()||{},{ip:l,is_eu:a,city:h,region:u,region_code:g,region_type:x,country_name:m,country_code:b,continent_name:v,continent_code:j,latitude:C,longitude:A,postal:y,calling_code:f,time_zone:B,currency:w}=r,L={ipAddress:l,deviceType:null===(e=i.device)||void 0===e?void 0:e.type,browserName:null===(o=i.browser)||void 0===o?void 0:o.name,osName:null===(t=i.os)||void 0===t?void 0:t.name,...p()};return L.locationDetails={is_eu:a,city:h,region:u,region_code:g,region_type:x,country_name:m,country_code:b,continent_name:v,continent_code:j,latitude:C,longitude:A,postal:y,calling_code:f,time_zone:B,currency:w},L}().then(_),function(e){try{return L=new BroadcastChannel("lp_web_chat"),L.addEventListener("message",F(e)),L.postMessage({action:"GetConversationId"}),()=>{L&&(L.removeEventListener("message",F),L.close(),L=null)}}catch(o){console.error("Unable to start session sharing:",o)}}({onHistoryChange:e=>{var o;(null!==e&&void 0!==e&&e.length||null!==(o=H.current.history)&&void 0!==o&&o.length)&&N(e)},getHistory:()=>H.current.history})}),[]);const V=n.useCallback(((e,o)=>{var t,n,r,i;let{showBot:l,design:a,onCallback:s}=H.current;l=e?!l:l,null===s||void 0===s||s("windowToggle",{state:l,design:l?{width:null===a||void 0===a||null===(t=a.window)||void 0===t?void 0:t.width,height:null===a||void 0===a||null===(n=a.window)||void 0===n?void 0:n.height,spacingBottom:null===a||void 0===a||null===(r=a.window)||void 0===r?void 0:r.spacingBottom,spacingCorner:null===a||void 0===a||null===(i=a.window)||void 0===i?void 0:i.spacingCorner}:o})}),[]),D=n.useCallback((e=>{var o;null!==(o=H.current.history)&&void 0!==o&&o.length||setTimeout((()=>{const e={role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"};H.current.setAndBroadcastHistory((o=>o?o.concat(e):[e]))}),e||1700)}),[]),E=n.useCallback((()=>{V(!0),y((e=>!e)),T(!0),setTimeout((()=>T(!1)),1e3),D()}),[V,D]);n.useLayoutEffect((()=>{f&&V(!1,!0)}),[f,V]);const G=n.useCallback((async e=>{const{updateContact:o,onReceiveChatResponse:t,bot:n,locationDetails:r,onCallback:i,recipientId:l}=H.current;return await async function(e,o,t,n){let{onReceiveChatResponse:r,updateContact:i,onCallback:l,recipientId:a}=t;const s=g(),{_id:d,organizationId:h}=o,u={userQuery:e,recipientDetails:{recipientId:a,conversationId:s,...n}};r&&(u.testMode=!0);try{const e=await c.bE("/bot/".concat(h,"/").concat(d,"/chat"),u,{noAuth:!0});return null===r||void 0===r||r(e),function(e,o){let{updateContact:t,onCallback:n}=o;const{chatRefId:r,recipientId:i,messages:l}=e;return x(r),null===n||void 0===n||n("set-visitor-id",{recipientId:i}),B(l,t)}(e,{updateContact:i,onCallback:l})}catch(m){return[{role:"assistant",type:"text",content:m.message||"Unknown Server error"}]}}(e,n,{onReceiveChatResponse:t,updateContact:o,onCallback:i,recipientId:l},r)}),[]);H.current.updateContact=n.useCallback((async e=>{const o=await G(e);H.current.setAndBroadcastHistory((e=>e.filter((e=>"lead"!==e.type)).concat(...o)))}),[G]);const q=n.useCallback((()=>{H.current.setAndBroadcastHistory([]),m(),delete H.current.history,D(700)}),[D]);if(!W||!R)return null;let O="hide-chat";C&&I?O="opening":C&&!I?O="show-chat":!C&&I&&(O="closing"),O+="bottomLeft"===(null===f||void 0===f||null===(o=f.window)||void 0===o?void 0:o.align)?" bottom-left ":" bottom-right ",l&&(O+=" test-console");const Y=U&&"lead"===(null===(t=U[U.length-1])||void 0===t?void 0:t.type);return(0,j.jsxs)("div",{className:"chat-handler "+O,children:[C&&(0,j.jsx)(a.A,{botDesign:f,messages:U,showTime:!0,onUserMessage:Y?void 0:G,onHistoryChange:H.current.setAndBroadcastHistory,onClear:q,onHide:E,onCallback:b}),!C&&!I&&(0,j.jsx)(A,{design:f,onToggle:E})]})};function A(e){let{design:o,onToggle:t}=e;const{launcher:{launcherType:n,buttonLogoUrl:r,buttonOnMobile:i,barText:l,fontSize:a}={},header:{bgColor:s,secBgColor:d,fontColor:c}={},window:{fontFamily:h,align:u}}=o||{};return"icon"===n||i?(0,j.jsxs)("div",{id:"lp-launcher",className:"lp-launcher button"+(r?"":" bordered"),onClick:t,style:{borderColor:s,color:c,background:r?"transparent":"linear-gradient(to right,"+s+", "+d+")",verticalAlign:"middle",padding:r?void 0:"16px",display:"flex"},children:[(0,j.jsx)(f,{}),r&&(0,j.jsx)("img",{src:r,alt:"Live Chat"}),!r&&b.Or]}):"expand"===n?(0,j.jsx)(y,{position:u,color:c,bgColor:s,secBgColor:d,imageUrl:r,chatIcon:b.Or,barText:l,fontSize:a,onClick:t}):(0,j.jsxs)("div",{id:"lp-launcher",className:"lp-launcher bar",onClick:t,style:{background:"linear-gradient(to right, "+s+", "+d+")",color:c,fontFamily:h},children:[b.Or,(0,j.jsx)("span",{children:l||"Live Chat"})]})}function y(e){let{position:o,bgColor:t,secBgColor:r,imageUrl:i,chatIcon:l,barText:a="Live Chat",fontSize:s,color:d,autoAnimate:c=!0,onClick:h}=e;const u="bottomLeft"===o?"bottom-left":"bottom-right",g={backgroundColor:t},x={backgroundImage:"linear-gradient(90deg, ".concat(t,", ").concat(r,")")},m=n.useRef();return n.useEffect((()=>{if(c){const e=setInterval((()=>{var e;null===(e=m.current)||void 0===e||e.classList.remove("bar-hide"),setTimeout((()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.classList.add("bar-hide")}),7e3)}),18e3);return()=>clearInterval(e)}}),[c]),(0,j.jsxs)("div",{className:"lp-launcher expand-button ".concat(u),onClick:h,children:[(0,j.jsx)("div",{ref:m,className:"text-container bar-hide",style:x,children:(0,j.jsx)("div",{className:"bar-text",style:{minWidth:"150px",fontSize:s,color:d},children:(0,j.jsxs)("p",{children:["Hi there, ",(0,j.jsx)("img",{draggable:!1,className:"chat-hand",alt:"\ud83d\udc4b",src:"https://cwc.livserv.in/uploads/Templates/cwc_trend1/hand.png"})," We are online!"]})})}),(0,j.jsx)("div",{className:"image-container",style:g,children:(0,j.jsxs)("div",{className:"image-sub-container",children:[i&&(0,j.jsx)("img",{src:i,alt:a}),!i&&l]})})]})}function f(e){let{text:o="We are Online!",onHide:t}=e;const[r,i]=n.useState(!0),l=n.useCallback((e=>{e.preventDefault(),e.stopPropagation(),i(!1),null===t||void 0===t||t()}),[t]);return r?(0,j.jsxs)("div",{className:"button-tooltip",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("img",{draggable:!1,className:"chat-hand",alt:"\ud83d\udc4b",src:"https://cwc.livserv.in/uploads/Templates/cwc_trend1/hand.png"}),(0,j.jsx)("b",{children:o}),(0,j.jsx)("br",{})]}),(0,j.jsx)("a",{className:"close-indicator",onClick:l,children:(0,j.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:(0,j.jsx)("path",{d:"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294 294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68 28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z",fill:"#fff"})})})]}):null}function B(e,o){if(null===e||void 0===e||!e.length)return e;const t=e[e.length-1];return"form"===t.type&&e.push({role:"user",type:"lead",content:"",profile:t.media,updateContact:o}),e}async function w(e,o,t,n){const{_id:r,organizationId:i}=e,l=g();if(!o||!l)return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[];try{const e=await c.Jt("/bot/".concat(i,"/").concat(r,"/chat/history/").concat(o,"/").concat(l),null,{noAuth:!0}),{messages:n}=e||{};return B(n,t)}catch(a){console.log("Failed to fetch chat history:-",a)}return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[]}let L=null;function F(e){let{onHistoryChange:o,getHistory:t}=e;return e=>{try{var n,r;if("GetConversationId"===(null===(n=e.data)||void 0===n?void 0:n.action)){k(t())}else if("SetConversationId"===(null===(r=e.data)||void 0===r?void 0:r.action)){const{conversationId:t,history:n}=e.data;t?x(t||void 0):m(),n&&(null===o||void 0===o||o(n))}}catch(i){console.log("Error occurred when trying to handle session sharing:",i)}}}function k(e,o){if(L)try{const t=g()||"";if(!o&&!t)return;L.postMessage({action:"SetConversationId",conversationId:t,history:e})}catch(t){console.error("Error sharing session:",t)}}var S=t(70855),I=t(41507),T=t(32829),W=t(93383),M=t(26092),z=t(81857),P=t(16491),U=t(74745),N=t(93230),R=t(3788),_=t(24516),H=t(2660),V=t(41626),D=t(16497),E=t(85815),G=t(10226),q=t(70006),O=t(57988),Y=t(23266),J=t(29714),$=t(61467),Q=t(51637),K=t(27463);const X=function(e){let{value:o,onChange:t,...r}=e;const[i,l]=n.useState(!1),a=n.useRef(),s=n.useRef(),d=e=>{let{hex:o}=e;t(r.name,o)};return n.useEffect((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,j.jsxs)("div",{ref:a,style:{position:"relative"},children:[(0,j.jsx)("div",{style:{backgroundColor:o,height:"35px",width:"35px",position:"absolute",top:"3px",left:"3px"}}),(0,j.jsx)(H.A,{inputRef:s,value:o,onChange:e=>d({hex:e.currentTarget.value}),maxLength:9,...r,type:"text",onFocus:()=>l(!0),style:{paddingLeft:"32px"}}),i&&(0,j.jsx)("div",{style:{position:"absolute",zIndex:1,top:"45px"},children:(0,j.jsx)(K.xk,{color:o,onChange:d})})]})};var Z=t(98415);const ee=function(e){let{value:o,onChange:t,...r}=e;const i=n.useCallback((e=>t(r.name,"yes"===e.target.value)),[r.name,t]);return(0,j.jsxs)(q.A,{...r,value:o?"yes":"no",defaultValue:o?"yes":"no",onChange:i,children:[(0,j.jsx)(Y.A,{value:"no",children:"No"}),(0,j.jsx)(Y.A,{value:"yes",children:"Yes"})]})},oe=[{value:"gpt-3.5-turbo-16k",label:"GPT 3.5 Latest Stable (default)",description:"Latest stable model of GPT 3.5. Cheapest and more performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."},{value:"gpt-4",label:"GPT 4 Latest Stable",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview (suggested)",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."}],te=oe.reduce(((e,o)=>(e[o.value]=o,e)),{});const ne=function(e){var o;let{value:t,...n}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(q.A,{...n,value:t,defaultValue:oe[0].value,children:oe.map((e=>(0,j.jsx)(Y.A,{value:e.value,children:e.label},e.value)))}),(0,j.jsx)(_.A,{id:"bot-model-description",children:t?null===(o=te[t])||void 0===o?void 0:o.description:oe[0].description})]})};var re=t(59254),ie=t(10939),le=t(8950);const ae=()=>J.Yj().matches(/^#([0-9A-Fa-f]{3}){1,2}$/,"Is not a valid color code").required("Background color is required"),se=e=>J.Yj().matches(/^(\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%|\d+%)$/,"Invalid ".concat(e,"! Use the format: 1px 2px 3px 4px not a valid code")),de=J.Ik().shape({bgColor:ae(),fontColor:ae(),headerPadding:se("padding"),headerLogoMargin:se("margin"),visitorBubbleBorderCurve:se("border-radius"),botBubbleBorderCurve:se("border-radius")}),ce={maxWidth:{xs:600,lg:700,xl:1050},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const he=function(e){let{onChange:o}=e;const[t,a]=(0,S.G)(),s=(0,r.nc)((e=>{var o,t;return null===(o=e.organization)||void 0===o||null===(t=o.availableCredits)||void 0===t?void 0:t.toFixed(3)})),[d,c]=(0,n.useState)(!1);if(!a)return null;const{botName:h,botDesign:u={}}=a,g={bgColor:u.backgroundColor||"#484a49",botBorderColor:u.botBorderColor||"#484a49",botBackgroundColor:u.botBackgroundColor||"#dfd9df",botFontColor:u.botFontColor||"#000000",visitorBorderColor:u.visitorBorderColor||"#000000",visitorBackgroundColor:u.visitorBackgroundColor||"#ffffff",visitorFontColor:u.visitorFontColor||"#000000",fontType:u.fontType||"normal-font",windowAlign:u.windowAlign||"bottomRight",fontColor:u.textColor||"#484a49",titleText:h,placeholder:"Type your message...",launcherType:"bar",messageBubbleLogo:!0,botLogo:u.botLogo||{},visitorMessageLogo:u.visitorMessageLogo||{},botMessageLogo:u.botMessageLogo||{},botChatButton:u.botChatButton||{},...u},x=()=>{c(!1===d)};return(0,j.jsx)(Q.A,{sx:ce,content:!1,border:!1,boxShadow:!0,children:(0,j.jsx)(P.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,j.jsx)($.l1,{initialValues:g,validationSchema:de,onSubmit:async(e,o)=>{let{setErrors:n,setStatus:r,setSubmitting:i}=o;try{var l,a,s,d;e.botChatButton.name!==(null===(l=u.botChatButton)||void 0===l?void 0:l.name)&&(e.botChatButton=u.botChatButton),e.botLogo.name!==(null===(a=u.botLogo)||void 0===a?void 0:a.name)&&(e.botLogo=u.botLogo),e.visitorMessageLogo.name!==(null===(s=u.visitorMessageLogo)||void 0===s?void 0:s.name)&&(e.visitorMessageLogo=u.visitorMessageLogo),e.botMessageLogo.name!==(null===(d=u.botMessageLogo)||void 0===d?void 0:d.name)&&(e.botMessageLogo=u.botMessageLogo),await(0,Z.jo)(t,e),r({success:!1}),i(!1)}catch(c){console.error(c),r({success:!1}),n({submit:c.message}),i(!1)}},children:e=>(0,j.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,j.jsxs)(i.Ay,{container:!0,spacing:3,children:[(0,j.jsxs)(i.Ay,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:["Balance : \xa0",(0,j.jsxs)(l.A,{variant:"subtitle1",color:"green",children:[s,"\xa0$"]})]}),(0,j.jsx)(ue,{...e}),(0,j.jsx)(Ae,{...e}),(0,j.jsx)(xe,{...e}),(0,j.jsx)(me,{...e}),(0,j.jsx)(ge,{...e}),(0,j.jsx)(pe,{...e}),(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(T.A,{children:(0,j.jsx)(W.A,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:x,children:"Advance settings"})})}),d&&(0,j.jsx)(je,{...e}),(0,j.jsx)(Ce,{...e})]}),(0,j.jsx)(ye,{onChange:o})]})})})})};function ue(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"General Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"botModelName",children:"Underlying GPT Model *"}),(0,j.jsx)(ne,{id:"botModelName",value:o.botModelName,name:"botModelName",onBlur:r,onChange:a,error:Boolean(t.botModelName&&n.botModelName)}),t.botModelName&&n.botModelName&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:n.botModelName})]})})]})}function ge(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a,setFieldValue:s}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Header Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"bgColor",children:"Background Color *"}),(0,j.jsx)(X,{id:"bgColor",type:"color",value:o.bgColor,name:"bgColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.bgColor&&n.bgColor)}),t.bgColor&&n.bgColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:n.bgColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"fontColor",children:"Font Color *"}),(0,j.jsx)(X,{id:"fontColor",type:"color",value:o.fontColor,name:"fontColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.fontColor&&n.fontColor)}),t.fontColor&&n.fontColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-font-color",children:n.fontColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"headerFontSize",children:"Font Size"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"headerFontSize",name:"headerFontSize",defaultValue:o.headerFontSize,onChange:a,placeholder:"18px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"titleText",children:"Chat Window Title *"}),(0,j.jsx)(H.A,{fullWidth:!0,error:Boolean(t.titleText&&n.titleText),id:"titleText",value:o.titleText,name:"titleText",onBlur:r,onChange:a,placeholder:"Provide your bot title text",inputProps:{maxLength:25}}),t.titleText&&n.titleText&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bot-title",children:n.titleText})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"headerPadding",style:{paddingBottom:"6px"},children:"Chat Window Header Padding"}),(0,j.jsx)(H.A,{id:"headerPadding",name:"headerPadding",value:o.headerPadding,onBlur:r,onChange:a,placeholder:"padding: 2px 5px 2px 5px"}),t.headerPadding&&n.headerPadding&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:n.headerPadding})]})})]})}function xe(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:a}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Composer Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"placeholder",children:"Placeholder Text *"}),(0,j.jsx)(H.A,{fullWidth:!0,error:Boolean(t.placeholder&&n.placeholder),id:"placeholder",defaultValue:o.placeholder,name:"placeholder",onBlur:r,onChange:a,placeholder:"Type your message...",inputProps:{maxLength:30}}),t.placeholder&&n.placeholder&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-message-placeholder",children:n.placeholder})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"fontType",children:"Font source"}),(0,j.jsxs)(V.A,{row:!0,id:"fontType",name:"fontType",defaultValue:o.fontType,onChange:a,children:[(0,j.jsx)(D.A,{value:"regular",control:(0,j.jsx)(E.A,{}),label:"Regular"}),(0,j.jsx)(D.A,{value:"remote",control:(0,j.jsx)(E.A,{}),label:"Remote"})]})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"fontType",children:"Font name"}),(0,j.jsx)(H.A,{fullWidth:!0,id:"fontName",name:"fontName",defaultValue:o.fontName,onChange:a,placeholder:"Provide Font Name"})]})}),"remote"==o.fontType&&(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"remoteFontLink",children:"Paste Remote Font Link"}),(0,j.jsx)(H.A,{multiline:!0,id:"remoteFontLink",name:"remoteFontLink",defaultValue:o.remoteFontLink,onChange:a,placeholder:"Ex: https://fonts.googleapis.com"})]})})]})}function me(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Chat Window Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{id:"windowAlign",children:"Window Align"}),(0,j.jsxs)(q.A,{labelId:"windowAlign",defaultValue:o.windowAlign,name:"windowAlign",onChange:t,children:[(0,j.jsx)(Y.A,{value:"bottomLeft",children:"Bottom Left"}),(0,j.jsx)(Y.A,{value:"bottomRight",children:"Bottom Right"})]})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"paddingLeft",children:"Spacing on corner"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"paddingLeft",name:"paddingLeft",defaultValue:o.paddingLeft,onChange:t,placeholder:"0px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"paddingBottom",children:"Spacing on Bottom"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"paddingBottom",name:"paddingBottom",defaultValue:o.paddingBottom,onChange:t,placeholder:"0px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{id:"autoLaunch",children:"Proactive window"}),(0,j.jsx)(ee,{value:o.autoLaunch,name:"autoLaunch",defaultValue:!1,onChange:n})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"chatWindowWidth",children:"Chat Window Width"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"chatWindowWidth",name:"chatWindowWidth",defaultValue:o.chatWindowWidth,onChange:t,placeholder:"300px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:4,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"chatWindowHeight",children:"Chat Window Height"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"chatWindowHeight",name:"chatWindowHeight",defaultValue:o.chatWindowHeight,onChange:t,placeholder:"320px"})]})})]})}function pe(e){var o;let{values:t,errors:n,handleBlur:r,touched:a,handleChange:s,setFieldValue:d}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Header Logo Settings"})})}),(0,j.jsxs)(i.Ay,{item:!0,xs:12,md:6,children:[(0,j.jsx)(R.A,{htmlFor:"uploadHeaderLogo",children:"Upload Header Logo"}),(0,j.jsx)(ve,{imageUrl:null===(o=t.botLogo)||void 0===o?void 0:o.url,imageName:"botLogo",onChange:d,bgColor:t.bgColor})]}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"headerLogoMargin",children:"Header Logo Margin"}),(0,j.jsx)(H.A,{id:"headerLogoMargin",name:"headerLogoMargin",value:t.headerLogoMargin,onBlur:r,onChange:s,placeholder:"border : 1px 2px 3px 4px"}),a.headerLogoMargin&&n.headerLogoMargin&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:n.headerLogoMargin})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"logoWidth",children:"Width"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"logoWidth",name:"logoWidth",defaultValue:t.logoWidth,onChange:s,placeholder:"64px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"logoHeight",children:"Height"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"logoHeight",name:"logoHeight",defaultValue:t.logoHeight,onChange:s,placeholder:"64px"})]})})]})}const be=(0,re.Ay)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ve(e){let{imageUrl:o,imageName:t,maxImageSize:r=25e4,onChange:a,bgColor:s}=e;const[d,c]=(0,n.useState)(null),[h,u]=(0,n.useState)(o),g=s&&null!==h&&void 0!==h&&h.endsWith(".png")?s:"transparent",x=!!d,m=!x&&o,p=h?"Replace image":"Select image";return(0,j.jsxs)(j.Fragment,{children:[h&&(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)("img",{src:h,alt:"headerLogo",height:50,style:{backgroundColor:g}})}),(0,j.jsxs)(N.A,{spacing:2,direction:"row",children:[(0,j.jsxs)(G.A,{component:"label",variant:"contained",children:[p,(0,j.jsx)(be,{name:t,type:"file",onChange:e=>{try{const o=e.target.files[0],t=o.size;if(o.type.startsWith("image/")&&t<=r){c(o),u(URL.createObjectURL(o));const e=new FileReader;e.onloadend=()=>{u(e.result)},e.readAsDataURL(o)}else(0,le.i)(!0,"Please upload valid image file and size is <= ".concat(r/1e3," kb"),"error"),c(null)}catch(o){console.log("Error uploading the image ::",o),(0,le.i)(!0,"Please select the image file","error")}}})]}),m&&(0,j.jsx)(G.A,{variant:"outlined",onClick:async()=>{try{await(0,Z.Ci)(t),a(t,null),u(null),(0,le.i)(!0,"Logo deleted successfully.","success")}catch(e){console.log("Deleting logo failed. Please try again later.",e)}},startIcon:(0,j.jsx)(O.A,{}),children:"Delete"}),x&&(0,j.jsx)(T.A,{children:(0,j.jsx)(W.A,{color:"primary",variant:"contained",startIcon:(0,j.jsx)(ie.A,{}),onClick:async()=>{try{const e=await(0,Z.I4)(t,d);a(t,e),c(null),(0,le.i)(!0,"Logo uploaded successfully.","success")}catch(e){console.log("File upload failed. Please try again later.",e)}},ml:5,children:"Upload"})})]}),d&&(0,j.jsxs)(l.A,{variant:"body2",children:["File Name : ",d.name," "]})]})}function je(e){var o,t;let{values:n,touched:r,errors:a,handleBlur:s,handleChange:d,setFieldValue:c}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Message Bubble Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"messageBubbleLogo",children:"Show Message Bubble Logo"}),(0,j.jsx)(ee,{id:"messageBubbleLogo",name:"messageBubbleLogo",value:n.messageBubbleLogo,defaultValue:!1,onChange:c})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"fontSize",children:"Font Size"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"text",id:"fontSize",name:"fontSize",defaultValue:n.fontSize,onChange:d,placeholder:"12px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(l.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Visitor Bubble Settings"})}),n.messageBubbleLogo&&(0,j.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,j.jsx)(R.A,{htmlFor:"uploadVisitorLogo",children:"Upload Visitor Logo"}),(0,j.jsx)(ve,{imageUrl:null===(o=n.visitorMessageLogo)||void 0===o?void 0:o.url,imageName:"visitorMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"visitorBackgroundColor",children:"Background Color"}),(0,j.jsx)(X,{id:"visitorBackgroundColor",type:"color",value:n.visitorBackgroundColor,name:"visitorBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBackgroundColor&&a.visitorBackgroundColor)}),r.visitorBackgroundColor&&a.visitorBackgroundColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.visitorBackgroundColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"visitorFontColor",children:"Font Color"}),(0,j.jsx)(X,{id:"visitorFontColor",type:"color",value:n.visitorFontColor,name:"visitorFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorFontColor&&a.visitorFontColor)}),r.visitorFontColor&&a.visitorFontColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.visitorFontColor})]})}),n.visitorLogo&&(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"visitorLogoImage",children:"Upload Visitor Logo"}),(0,j.jsx)(H.A,{fullWidth:!0,type:"file",id:"visitorLogoImage",name:"visitorLogoImage",onChange:d,placeholder:"0px"})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"visitorBorderColor",children:"Border Color"}),(0,j.jsx)(X,{id:"visitorBorderColor",type:"color",value:n.visitorBorderColor,name:"visitorBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBorderColor&&a.visitorBorderColor)}),r.visitorBorderColor&&a.visitorBorderColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.visitorBorderColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"visitorBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,j.jsx)(H.A,{id:"visitorBubbleBorderCurve",name:"visitorBubbleBorderCurve",value:n.visitorBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),r.visitorBubbleBorderCurve&&a.visitorBubbleBorderCurve&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.visitorBubbleBorderCurve})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(l.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Bot Bubble Settings"})}),n.messageBubbleLogo&&(0,j.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,j.jsx)(R.A,{htmlFor:"uploadBotLogo",children:"Upload Bot Logo"}),(0,j.jsx)(ve,{imageUrl:null===(t=n.botMessageLogo)||void 0===t?void 0:t.url,imageName:"botMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"botBackgroundColor",children:"Background Color"}),(0,j.jsx)(X,{id:"botBackgroundColor",type:"color",value:n.botBackgroundColor,name:"botBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botBackgroundColor&&a.botBackgroundColor)}),r.botBackgroundColor&&a.botBackgroundColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.botBackgroundColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"botFontColor",children:"Font Color"}),(0,j.jsx)(X,{id:"botFontColor",type:"color",value:n.botFontColor,name:"botFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botFontColor&&a.botFontColor)}),r.botFontColor&&a.botFontColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.botFontColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"botBorderColor",children:"Border Color"}),(0,j.jsx)(X,{id:"botBorderColor",type:"color",value:n.botBorderColor,name:"botBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botBorderColor&&a.botBorderColor)}),r.botBorderColor&&a.botBorderColor&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.botBorderColor})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"botBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,j.jsx)(H.A,{id:"botBubbleBorderCurve",name:"botBubbleBorderCurve",value:n.botBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),r.botBubbleBorderCurve&&a.botBubbleBorderCurve&&(0,j.jsx)(_.A,{error:!0,id:"helper-text-bg-color",children:a.botBubbleBorderCurve})]})})]})}function Ce(e){let{errors:o,isSubmitting:t}=e;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,j.jsx)(_.A,{error:!0,children:o.submit}),(0,j.jsx)(T.A,{children:(0,j.jsx)(W.A,{disableElevation:!0,disabled:Boolean(o.submit),isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})]})})}function Ae(e){var o;let{values:t,handleChange:n,setFieldValue:r}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,children:(0,j.jsx)(U.A,{children:(0,j.jsx)(l.A,{variant:"subtitle1",children:"Chat Launcher Settings"})})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{htmlFor:"messagePlaceholder",children:"Chat Launcher Type *"}),(0,j.jsxs)(V.A,{row:!0,name:"launcherType",defaultValue:t.launcherType,onChange:n,children:[(0,j.jsx)(D.A,{value:"icon",control:(0,j.jsx)(E.A,{}),label:"Button"}),(0,j.jsx)(D.A,{value:"bar",control:(0,j.jsx)(E.A,{}),label:"Bar"}),(0,j.jsx)(D.A,{value:"expand",control:(0,j.jsx)(E.A,{}),label:"Expand Button"})]})]})}),"icon"==t.launcherType&&(0,j.jsxs)(i.Ay,{item:!0,xs:12,md:6,children:[(0,j.jsx)(R.A,{htmlFor:"uploadChatButton",children:"Upload Chat Button"}),(0,j.jsx)(ve,{imageUrl:null===(o=t.botChatButton)||void 0===o?void 0:o.url,imageName:"botChatButton",onChange:r})]}),"bar"==t.launcherType&&(0,j.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(N.A,{spacing:1,children:[(0,j.jsx)(R.A,{id:"buttonOnMobile",children:"Button on Mobile"}),(0,j.jsx)(ee,{name:"buttonOnMobile",value:t.buttonOnMobile,defaultValue:!1,onChange:r})]})})]})}function ye(e){let{onChange:o}=e;const{values:t}=(0,$.j7)();return n.useEffect((()=>{t&&o((0,v.Y)(t))}),[t,o]),null}const fe=()=>{var e;const[o,t]=n.useState({}),[a,s]=(0,S.G)(),[d,c]=(0,n.useState)(!1),h=(0,r.nc)((e=>e.organizationId));return(0,j.jsxs)(i.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,j.jsx)(i.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,j.jsxs)(i.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,j.jsx)(i.Ay,{item:!0,xs:6,children:(0,j.jsx)(l.A,{variant:"h5",children:"Chat Window Design"})}),(0,j.jsxs)(i.Ay,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:[(0,j.jsx)(T.A,{children:(0,j.jsx)(W.A,{isLoading:d,disabled:d,variant:"contained",color:"success",size:"large",onClick:()=>c(!0),children:"Deploy Bot"})}),(0,j.jsx)(M.A,{openPopUpDialog:d,setPopUpDialog:c,title:"Add Bot Details",children:(0,j.jsx)(z.A,{setIsDeployBot:c,botId:a,organizationId:h})})]})]})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,sm:12,md:12,lg:8,children:(0,j.jsx)(he,{onChange:t})}),(0,j.jsx)(i.Ay,{item:!0,xs:12,sm:12,md:12,lg:4,children:(0,j.jsx)(C,{botDetails:s,botDesign:o,autoLaunch:null===s||void 0===s||null===(e=s.botDesign)||void 0===e?void 0:e.autoLaunch,recipientId:Fe(),onReceiveChatResponse:e=>(0,I.NC)(e.organization),onCallback:Be})}),(0,j.jsx)(i.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})};function Be(e,o){if("set-visitor-id"===e){const{recipientId:e}=o||{};e&&ke(e)}}const we="lp-vid",Le="permanent-app-id";function Fe(){try{let e=localStorage.getItem(we);return e||(e=localStorage.getItem(Le),e&&(ke(e),localStorage.removeItem(Le))),e}catch(e){console.error("Unable to use browser cache",e)}}function ke(e){try{localStorage.setItem(we,e)}catch(o){console.error("Unable to use browser cache",o)}}},41507:(e,o,t)=>{t.d(o,{Ds:()=>a,NC:()=>l,YS:()=>i,qb:()=>s});var n=t(8478),r=t(69713);async function i(e,o){const t=await async function(){const e=r.nc.getState();let{organizationList:o,organizationId:t,organization:i}=e;if(!e.isSuperUser||Array.isArray(o))return;if(o=await n.bE("/superAdmin/get-all-organization"),o.length)if(t=t||sessionStorage.getItem("orgId"),t){if(!i){var l;i=null===(l=o)||void 0===l?void 0:l.filter((e=>e._id===t))[0]}}else{const e=o[0];t=e._id,i=e}return r.nc.setState({organizationList:o,organizationId:t,organization:i}),!0}(),{organizationId:i}=r.nc.getState();return e?e!==i&&r.nc.setState({organizationId:e}):e=i,!e||(t||await async function(e){const o=await n.bE("/organization/get-organization-by-id",{organizationId:e});r.nc.setState({organization:o})}(e),await a(e,o),!0)}function l(e){if(!e||"object"!==typeof e)return;let{organization:o}=r.nc.getState();o&&(o={...o,...e},r.nc.setState({organization:o}))}async function a(e,o){var t;const i=await n.bE("/bot/get-all-bots",{organizationId:e}),l=o||(null===(t=i[0])||void 0===t?void 0:t._id),a=i.reduce(((e,o)=>(e[o._id]=o,e)),{});return r.nc.setState({organizationId:e,botsList:i,botsMap:a,selectedBotId:l}),l}function s(e){r.nc.setState({selectedBotId:e})}},70855:(e,o,t)=>{t.d(o,{G:()=>r});var n=t(69713);function r(e){const o=(0,n.nc)((e=>e.selectedBotId)),t=(0,n.nc)((t=>t.botsMap[e||o]));return[e||o,t]}}}]);