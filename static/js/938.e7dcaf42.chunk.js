"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[938],{81020:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Fe});var n=t(9950),r=t(8478),i=t(69713),l=t(60899),a=t(82053),s=t(17119),d=t(15820),c=t(87946),u=t(44364);const h="lp-cid";let g;function x(){try{return sessionStorage.getItem(h)}catch(e){return console.error("Unable to use browser cache",e),g}}function m(e){try{g=e,sessionStorage.setItem(h,e)}catch(o){console.error("Unable to use browser cache",o)}}function p(){try{g=void 0,sessionStorage.removeItem(h)}catch(e){console.error("Unable to use browser cache",e)}}function b(){const e=new URLSearchParams(window.location.search),o=e.get("sourceUrl")||void 0,t=e.get("referrerUrl")||void 0;return{utmParameters:Array.from(e.keys()).reduce(((o,t)=>{if(t.startsWith("utm_")){o=o||{};const n=e.get(t);n&&"null"!==n&&(o[t]=n)}return o}),void 0),sourceUrl:o,referrerUrl:t}}var v=t(28891),j=t(78023),C=t(44414);const f={window:{spacingCorner:"0px",spacingBottom:"7px"},launcher:{spacingCorner:"0px",spacingBottom:"7px"}},A=["lead","options"];const y=function(e){var o,t;let{botDetails:i,botDesign:l,startupFlow:a,onReceiveChatResponse:s,autoLaunch:h,recipientId:g,origin:v,onCallback:y}=e;const[w,L]=n.useState(h||!1),[T,z]=n.useState(l),[U,P]=n.useState(!1),[N,_]=n.useState(i),[R,H]=n.useState(a),[V,E]=n.useState(g),[D,G]=n.useState([]),[q,O]=n.useState(),J=n.useRef({autoLaunch:h});J.current.recipientId=V,J.current.bot=N,J.current.startupMessages=R,J.current.origin=v,J.current.setAndBroadcastHistory=n.useCallback((e=>{var o;"function"===typeof e?G((o=>{var t;const n=e(o);return W(n,J.current.origin,null===(t=J.current.bot)||void 0===t?void 0:t._id,!0),n})):(G(e),W(e,J.current.origin,null===(o=J.current.bot)||void 0===o?void 0:o._id,!0))}),[]),J.current.onCallback=n.useCallback(((e,o)=>{if("set-visitor-id"===e&&o.recipientId)E(o.recipientId);else if("flow-response"===e)return void J.current.handleQueryCallback(o);null===y||void 0===y||y(e,o)}),[y]),J.current.history=D,J.current.showBot=w,J.current.design=T,J.current.locationDetails=q,J.current.onReceiveChatResponse=s,J.current.isLoadedInConsole=!!s,n.useEffect((()=>{_(i)}),[i]),n.useEffect((()=>{H(a)}),[a]),n.useEffect((()=>{if(N&&!J.current.isLoadedInConsole)return function(e){e.origin||(e.origin=null);e.botId||(e.botId=null);try{const{origin:o,botId:t}=e;return k=new BroadcastChannel("lp_web_chat"),k.addEventListener("message",I(e)),k.postMessage({action:"GetConversationId",origin:o,botId:t}),()=>{k&&(k.removeEventListener("message",I),k.close(),k=null)}}catch(o){console.error("Unable to start session sharing:",o)}}({botId:N._id,origin:J.current.origin,onHistoryChange:e=>{var o;(null!==e&&void 0!==e&&e.length||null!==(o=J.current.history)&&void 0!==o&&o.length)&&G(e)},getHistory:()=>J.current.history})}),[N]),n.useEffect((()=>{z(l)}),[l]),n.useEffect((()=>{const{updateContact:e,bot:o,recipientId:t,autoLaunch:n,setAndBroadcastHistory:i}=J.current;o?S(o,t,e,n).then(i):async function(){try{const e=new URLSearchParams(window.location.search),o={authToken:e.get("token")},{startupFlow:t,...n}=await r.Jt("/bot/get-bot-details-by-auth-token",o,{noAuth:!0});return{startupFlow:t,bot:n}}catch(e){console.log("Failed to init chat:-",e)}}().then((o=>{let{bot:r,startupFlow:l}=o;_(r),H(l);const{design:a,isLoadedInConsole:s}=J.current;!a&&r.botDesign&&z((0,j.Y)(r.botDesign,s?void 0:f)),S(r,t,e,n).then(i)})),async function(){var e,o,t;const n=u.pR;let i=null;const l=sessionStorage.getItem("locationDetails");if(l)try{i=JSON.parse(l)}catch(S){i={country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:"Error parsing from sessionStorage"}}else i=await r.Jt("https://api.ipdata.co?api-key=".concat(n)).catch((e=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:e.message}))),sessionStorage.setItem("locationDetails",JSON.stringify(i));const a=(new c.UAParser).getResult()||{},{ip:s,is_eu:d,city:h,region:g,region_code:x,region_type:m,country_name:p,country_code:v,continent_name:j,continent_code:C,latitude:f,longitude:A,postal:y,calling_code:B,time_zone:w,currency:L}=i,F={ipAddress:s,deviceType:null===(e=a.device)||void 0===e?void 0:e.type,browserName:null===(o=a.browser)||void 0===o?void 0:o.name,osName:null===(t=a.os)||void 0===t?void 0:t.name,...b()};return F.locationDetails={is_eu:d,city:h,region:g,region_code:x,region_type:m,country_name:p,country_code:v,continent_name:j,continent_code:C,latitude:f,longitude:A,postal:y,calling_code:B,time_zone:w,currency:L},F}().then(O)}),[]);const Y=n.useCallback(((e,o)=>{var t,n,r,i;let{showBot:l,design:a,onCallback:s}=J.current;l=e?!l:l,null===s||void 0===s||s("windowToggle",{state:l,design:l?{width:null===a||void 0===a||null===(t=a.window)||void 0===t?void 0:t.width,height:null===a||void 0===a||null===(n=a.window)||void 0===n?void 0:n.height,spacingBottom:null===a||void 0===a||null===(r=a.window)||void 0===r?void 0:r.spacingBottom,spacingCorner:null===a||void 0===a||null===(i=a.window)||void 0===i?void 0:i.spacingCorner}:o})}),[]),Q=n.useCallback((async e=>{var o;null!==(o=J.current.history)&&void 0!==o&&o.length||setTimeout((()=>{var e;if(null!==(e=J.current.startupMessages)&&void 0!==e&&e.length)return void J.current.setAndBroadcastHistory((e=>e.concat(...J.current.startupMessages)));const o={role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"};J.current.setAndBroadcastHistory((e=>e?e.concat(o):[o]))}),e||1700)}),[]),$=n.useCallback((()=>{Y(!0),L((e=>!e)),P(!0),setTimeout((()=>P(!1)),1e3),Q()}),[Y,Q]);n.useLayoutEffect((()=>{T&&Y(!1,!0)}),[T,Y]);const K=n.useCallback((async e=>function(e,o){const{updateContact:t,onReceiveChatResponse:n,bot:i,locationDetails:l,onCallback:a,recipientId:s}=o;return async function(e,o,t,n){let{onReceiveChatResponse:i,updateContact:l,onCallback:a,recipientId:s}=t;const d=x(),{_id:c,organizationId:u,botSettings:h}=o,g={userQuery:e,recipientDetails:{recipientId:s,conversationId:d,...n}};i&&(g.testMode=!0);try{const e=await r.bE("/bot/".concat(u,"/").concat(c,"/chat"),g,{noAuth:!0});return null===i||void 0===i||i(e),function(e,o){let{updateContact:t,botSettings:n,onCallback:r}=o;const{chatRefId:i,recipientId:l,messages:a}=e;return m(i),null===r||void 0===r||r("set-visitor-id",{recipientId:l}),F(a,{updateContact:t,botSettings:n})}(e,{updateContact:l,botSettings:h,onCallback:a})}catch(p){return[{role:"assistant",type:"text",content:p.message||"Unknown Server error"}]}}(e,i,{onReceiveChatResponse:n,updateContact:t,onCallback:a,recipientId:s},l)}(e,J.current)),[]);J.current.handleQueryCallback=n.useCallback((async e=>{const o=await K(e);J.current.setAndBroadcastHistory((e=>e.filter((e=>!A.includes(e.type))).concat(...o)))}),[K]),J.current.updateContact=J.current.handleQueryCallback;const X=n.useCallback((()=>{J.current.setAndBroadcastHistory([]),p(),delete J.current.history,Q(700)}),[Q]);if(!N||!q)return null;let Z="hide-chat";w&&U?Z="opening":w&&!U?Z="show-chat":!w&&U&&(Z="closing"),Z+="bottomLeft"===(null===T||void 0===T||null===(o=T.window)||void 0===o?void 0:o.align)?" bottom-left ":" bottom-right ",s&&(Z+=" test-console");const ee=D&&"lead"===(null===(t=D[D.length-1])||void 0===t?void 0:t.type);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(M,{design:T}),(0,C.jsxs)("div",{className:"chat-handler "+Z,children:[w&&(0,C.jsx)(d.A,{botDesign:T,messages:D,showTime:!0,onUserMessage:ee?void 0:K,onHistoryChange:J.current.setAndBroadcastHistory,onClear:X,onHide:$,onCallback:J.current.onCallback}),!w&&!U&&(0,C.jsx)(B,{design:T,onToggle:$})]})]})};function B(e){let{design:o,onToggle:t}=e;const{launcher:{launcherType:n,buttonLogoUrl:r,buttonOnMobile:i,barText:l,fontSize:a,spacingCorner:s,spacingBottom:d}={},header:{bgColor:c,secBgColor:u,fontColor:h}={},window:{fontFamily:g,align:x}={}}=o||{},m="bottomLeft"===x,p={bottom:d,[m?"left":"right"]:s};return"icon"===n||i?(0,C.jsxs)("div",{id:"lp-launcher",className:"lp-launcher button"+(r?"":" bordered"),onClick:t,style:{borderColor:c,color:h,background:r?"transparent":"linear-gradient(to right,"+c+", "+u+")",verticalAlign:"middle",padding:r?void 0:"16px",display:"flex",...p},children:[(0,C.jsx)(L,{design:o,isLeft:m}),r&&(0,C.jsx)("img",{src:r,alt:"Live Chat"}),!r&&v.Or]}):"expand"===n?(0,C.jsx)(w,{isLeft:m,color:h,style:p,bgColor:c,secBgColor:u,imageUrl:r,chatIcon:v.Or,barText:l,fontSize:a,onClick:t}):(0,C.jsxs)("div",{id:"lp-launcher",className:"lp-launcher bar",onClick:t,style:{background:"linear-gradient(to right, "+c+", "+u+")",color:h,fontFamily:g,...p},children:[v.Or,(0,C.jsx)("span",{children:l||"Live Chat"})]})}function w(e){let{isLeft:o,bgColor:t,secBgColor:r,imageUrl:i,chatIcon:l,barText:a="Live Chat",fontSize:s,color:d,autoAnimate:c=!0,style:u,onClick:h}=e;const g=o?"bottom-left":"bottom-right",x={backgroundColor:t},m={backgroundImage:"linear-gradient(90deg, ".concat(t,", ").concat(r,")")},p=n.useRef();return n.useEffect((()=>{if(c){const e=setInterval((()=>{var e;null===(e=p.current)||void 0===e||e.classList.remove("bar-hide"),setTimeout((()=>{var e;return null===(e=p.current)||void 0===e?void 0:e.classList.add("bar-hide")}),7e3)}),35e3);return()=>clearInterval(e)}}),[c]),(0,C.jsxs)("div",{className:"lp-launcher expand-button ".concat(g),onClick:h,style:u,children:[(0,C.jsx)("div",{ref:p,className:"text-container bar-hide",style:m,children:(0,C.jsx)("div",{className:"bar-text",style:{minWidth:"150px",fontSize:s,color:d},children:(0,C.jsxs)("p",{children:["Hi there, ",(0,C.jsx)("img",{draggable:!1,className:"chat-hand",alt:"\ud83d\udc4b",src:"https://cwc.livserv.in/uploads/Templates/cwc_trend1/hand.png"})," We are online!"]})})}),(0,C.jsx)("div",{className:"image-container",style:x,children:(0,C.jsxs)("div",{className:"image-sub-container",children:[i&&(0,C.jsx)("img",{src:i,alt:a}),!i&&l]})})]})}function L(e){let{text:o="We are Online!",onHide:t,design:r,isLeft:i}=e;const l=function(e,o){let{spacingCorner:t,spacingBottom:n}=(null===e||void 0===e?void 0:e.launcher)||{};if(t=parseFloat(t)||void 0,n=parseFloat(n)||void 0,t&&(t+=5),n&&(n+=75),t||n)return{bottom:n,[o?"left":"right"]:t}}(r,i),[a,s]=n.useState(!0),d=n.useCallback((e=>{e.preventDefault(),e.stopPropagation(),s(!1),null===t||void 0===t||t()}),[t]);return a?(0,C.jsxs)("div",{className:"button-tooltip",style:l,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("img",{draggable:!1,className:"chat-hand",alt:"\ud83d\udc4b",src:"https://cwc.livserv.in/uploads/Templates/cwc_trend1/hand.png"}),(0,C.jsx)("b",{children:o}),(0,C.jsx)("br",{})]}),(0,C.jsx)("a",{className:"close-indicator",onClick:d,children:(0,C.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:(0,C.jsx)("path",{d:"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294 294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68 28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z",fill:"#fff"})})})]}):null}function F(e,o){let{updateContact:t,botSettings:n}=o;if(null===e||void 0===e||!e.length)return e;const r=e[e.length-1];return"form"===r.type&&e.push({role:"user",type:"lead",content:"",profile:r.media,updateContact:t,botSettings:n}),e}async function S(e,o,t,n){const{_id:i,organizationId:l,botSettings:a={}}=e,s=x();if(!o||!s)return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[];try{const e=await r.Jt("/bot/".concat(l,"/").concat(i,"/chat/history/").concat(o,"/").concat(s),null,{noAuth:!0}),{messages:n}=e||{};return F(n,{updateContact:t,botSettings:a})}catch(d){console.log("Failed to fetch chat history:-",d)}return n?[{role:"assistant",type:"text",content:"Hello, greetings for the day, how may I assist you?"}]:[]}let k=null;function I(e){let{onHistoryChange:o,getHistory:t,origin:n=null,botId:r=null}=e;return e=>{const i=e.data||{};if(i.origin===n&&i.botId===r)try{if("GetConversationId"===i.action){W(t(),n,r)}else if("SetConversationId"===i.action){const{conversationId:e,history:t}=i;e?m(e||void 0):p(),t&&(null===o||void 0===o||o(t))}}catch(l){console.log("Error occurred when trying to handle session sharing:",l)}}}function W(e,o,t,n){if(k)try{const r=x()||"";if(!n&&!r)return;k.postMessage({action:"SetConversationId",origin:o,botId:t,conversationId:r,history:e})}catch(r){console.error("Error sharing session:",r)}}function M(e){let{design:o}=e;const t=null===o||void 0===o?void 0:o.remoteFontLink;return t?s.createPortal((0,C.jsx)("link",{rel:"stylesheet",href:t}),document.head,"remoteFont"):null}var T=t(70855),z=t(41507),U=t(32829),P=t(93383),N=t(26092),_=t(81857),R=t(16491),H=t(74745),V=t(93230),E=t(3788),D=t(24516),G=t(2660),q=t(41626),O=t(16497),J=t(85815),Y=t(10226),Q=t(70006),$=t(57988),K=t(23266),X=t(29714),Z=t(61467),ee=t(51637),oe=t(27463);const te=function(e){let{value:o,onChange:t,...r}=e;const[i,l]=n.useState(!1),a=n.useRef(),s=n.useRef(),d=e=>{let{hex:o}=e;t(r.name,o)};return n.useEffect((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,C.jsxs)("div",{ref:a,style:{position:"relative"},children:[(0,C.jsx)("div",{style:{backgroundColor:o,height:"35px",width:"35px",position:"absolute",top:"3px",left:"3px"}}),(0,C.jsx)(G.A,{inputRef:s,value:o,onChange:e=>d({hex:e.currentTarget.value}),maxLength:9,...r,type:"text",onFocus:()=>l(!0),style:{paddingLeft:"32px"}}),i&&(0,C.jsx)("div",{style:{position:"absolute",zIndex:1,top:"45px"},children:(0,C.jsx)(oe.xk,{color:o,onChange:d})})]})};var ne=t(98415);const re=function(e){let{value:o,onChange:t,...r}=e;const i=n.useCallback((e=>t(r.name,"yes"===e.target.value)),[r.name,t]);return(0,C.jsxs)(Q.A,{...r,value:o?"yes":"no",defaultValue:o?"yes":"no",onChange:i,children:[(0,C.jsx)(K.A,{value:"no",children:"No"}),(0,C.jsx)(K.A,{value:"yes",children:"Yes"})]})},ie=[{value:"gpt-3.5-turbo-16k",label:"GPT 3.5 Latest Stable (default)",description:"Latest stable model of GPT 3.5. Cheapest and more performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."},{value:"gpt-4",label:"GPT 4 Latest Stable",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview (suggested)",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."}],le=ie.reduce(((e,o)=>(e[o.value]=o,e)),{});const ae=function(e){var o;let{value:t,...n}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q.A,{...n,value:t,defaultValue:ie[0].value,children:ie.map((e=>(0,C.jsx)(K.A,{value:e.value,children:e.label},e.value)))}),(0,C.jsx)(D.A,{id:"bot-model-description",children:t?null===(o=le[t])||void 0===o?void 0:o.description:ie[0].description})]})};var se=t(59254),de=t(10939),ce=t(8950);const ue=()=>X.Yj().matches(/^#([0-9A-Fa-f]{3}){1,2}$/,"Is not a valid color code").required("Background color is required"),he=e=>X.Yj().matches(/^(\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%) (\d+px|\d+%|\d+%)$/,"Invalid ".concat(e,"! Use the format: 1px 2px 3px 4px not a valid code")),ge=X.Ik().shape({bgColor:ue(),fontColor:ue(),headerPadding:he("padding"),headerLogoMargin:he("margin"),visitorBubbleBorderCurve:he("border-radius"),botBubbleBorderCurve:he("border-radius")}),xe={maxWidth:{xs:600,lg:700,xl:1050},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const me=function(e){let{onChange:o}=e;const[t,r]=(0,T.G)(),s=(0,i.nc)((e=>{var o,t;return null===(o=e.organization)||void 0===o||null===(t=o.availableCredits)||void 0===t?void 0:t.toFixed(3)})),[d,c]=(0,n.useState)(!1);if(!r)return null;const{botName:u,botDesign:h={}}=r,g={bgColor:h.backgroundColor||"#484a49",botBorderColor:h.botBorderColor||"#484a49",botBackgroundColor:h.botBackgroundColor||"#dfd9df",botFontColor:h.botFontColor||"#000000",visitorBorderColor:h.visitorBorderColor||"#000000",visitorBackgroundColor:h.visitorBackgroundColor||"#ffffff",visitorFontColor:h.visitorFontColor||"#000000",fontType:h.fontType||"normal-font",windowAlign:h.windowAlign||"bottomRight",fontColor:h.textColor||"#484a49",titleText:u,placeholder:"Type your message...",launcherType:"bar",messageBubbleLogo:!0,botLogo:h.botLogo||{},visitorMessageLogo:h.visitorMessageLogo||{},botMessageLogo:h.botMessageLogo||{},botChatButton:h.botChatButton||{},...h},x=()=>{c(!1===d)};return(0,C.jsx)(ee.A,{sx:xe,content:!1,border:!1,boxShadow:!0,children:(0,C.jsx)(R.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,C.jsx)(Z.l1,{initialValues:g,validationSchema:ge,onSubmit:async(e,o)=>{let{setErrors:n,setStatus:r,setSubmitting:i}=o;try{var l,a,s,d;e.botChatButton.name!==(null===(l=h.botChatButton)||void 0===l?void 0:l.name)&&(e.botChatButton=h.botChatButton),e.botLogo.name!==(null===(a=h.botLogo)||void 0===a?void 0:a.name)&&(e.botLogo=h.botLogo),e.visitorMessageLogo.name!==(null===(s=h.visitorMessageLogo)||void 0===s?void 0:s.name)&&(e.visitorMessageLogo=h.visitorMessageLogo),e.botMessageLogo.name!==(null===(d=h.botMessageLogo)||void 0===d?void 0:d.name)&&(e.botMessageLogo=h.botMessageLogo),await(0,ne.jo)(t,e),r({success:!1}),i(!1)}catch(c){console.error(c),r({success:!1}),n({submit:c.message}),i(!1)}},children:e=>(0,C.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,C.jsxs)(l.Ay,{container:!0,spacing:3,children:[(0,C.jsxs)(l.Ay,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:["Balance : \xa0",(0,C.jsxs)(a.A,{variant:"subtitle1",color:"green",children:[s,"\xa0$"]})]}),(0,C.jsx)(pe,{...e}),(0,C.jsx)(we,{...e}),(0,C.jsx)(ve,{...e}),(0,C.jsx)(je,{...e}),(0,C.jsx)(be,{...e}),(0,C.jsx)(Ce,{...e}),(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(U.A,{children:(0,C.jsx)(P.A,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:x,children:"Advance settings"})})}),d&&(0,C.jsx)(ye,{...e}),(0,C.jsx)(Be,{...e})]}),(0,C.jsx)(Le,{onChange:o})]})})})})};function pe(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:i}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"General Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"botModelName",children:"Underlying GPT Model *"}),(0,C.jsx)(ae,{id:"botModelName",value:o.botModelName,name:"botModelName",onBlur:r,onChange:i,error:Boolean(t.botModelName&&n.botModelName)}),t.botModelName&&n.botModelName&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:n.botModelName})]})})]})}function be(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:i,setFieldValue:s}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Header Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"bgColor",children:"Background Color *"}),(0,C.jsx)(te,{id:"bgColor",type:"color",value:o.bgColor,name:"bgColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.bgColor&&n.bgColor)}),t.bgColor&&n.bgColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:n.bgColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"fontColor",children:"Font Color *"}),(0,C.jsx)(te,{id:"fontColor",type:"color",value:o.fontColor,name:"fontColor",onBlur:r,onChange:s,placeholder:"",fullWidth:!0,error:Boolean(t.fontColor&&n.fontColor)}),t.fontColor&&n.fontColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-font-color",children:n.fontColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"headerFontSize",children:"Font Size"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"headerFontSize",name:"headerFontSize",defaultValue:o.headerFontSize,onChange:i,placeholder:"18px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"titleText",children:"Chat Window Title *"}),(0,C.jsx)(G.A,{fullWidth:!0,error:Boolean(t.titleText&&n.titleText),id:"titleText",value:o.titleText,name:"titleText",onBlur:r,onChange:i,placeholder:"Provide your bot title text",inputProps:{maxLength:25}}),t.titleText&&n.titleText&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bot-title",children:n.titleText})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"headerPadding",style:{paddingBottom:"6px"},children:"Chat Window Header Padding"}),(0,C.jsx)(G.A,{id:"headerPadding",name:"headerPadding",value:o.headerPadding,onBlur:r,onChange:i,placeholder:"padding: 2px 5px 2px 5px"}),t.headerPadding&&n.headerPadding&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:n.headerPadding})]})})]})}function ve(e){let{values:o,touched:t,errors:n,handleBlur:r,handleChange:i}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Composer Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"placeholder",children:"Placeholder Text *"}),(0,C.jsx)(G.A,{fullWidth:!0,error:Boolean(t.placeholder&&n.placeholder),id:"placeholder",defaultValue:o.placeholder,name:"placeholder",onBlur:r,onChange:i,placeholder:"Type your message...",inputProps:{maxLength:30}}),t.placeholder&&n.placeholder&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-message-placeholder",children:n.placeholder})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"fontType",children:"Font source"}),(0,C.jsxs)(q.A,{row:!0,id:"fontType",name:"fontType",defaultValue:o.fontType,onChange:i,children:[(0,C.jsx)(O.A,{value:"regular",control:(0,C.jsx)(J.A,{}),label:"Regular"}),(0,C.jsx)(O.A,{value:"remote",control:(0,C.jsx)(J.A,{}),label:"Remote"})]})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"fontType",children:"Font name"}),(0,C.jsx)(G.A,{fullWidth:!0,id:"fontName",name:"fontName",defaultValue:o.fontName,onChange:i,placeholder:"Provide Font Name"})]})}),"remote"==o.fontType&&(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"remoteFontLink",children:"Paste Remote Font Link"}),(0,C.jsx)(G.A,{multiline:!0,id:"remoteFontLink",name:"remoteFontLink",defaultValue:o.remoteFontLink,onChange:i,placeholder:"Ex: https://fonts.googleapis.com"})]})})]})}function je(e){let{values:o,handleChange:t,setFieldValue:n}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Chat Window Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{id:"windowAlign",children:"Window Align"}),(0,C.jsxs)(Q.A,{labelId:"windowAlign",defaultValue:o.windowAlign,name:"windowAlign",onChange:t,children:[(0,C.jsx)(K.A,{value:"bottomLeft",children:"Bottom Left"}),(0,C.jsx)(K.A,{value:"bottomRight",children:"Bottom Right"})]})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"paddingLeft",children:"Spacing on corner"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"paddingLeft",name:"paddingLeft",defaultValue:o.paddingLeft,onChange:t,placeholder:"0px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"paddingBottom",children:"Spacing on Bottom"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"paddingBottom",name:"paddingBottom",defaultValue:o.paddingBottom,onChange:t,placeholder:"0px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{id:"autoLaunch",children:"Proactive window"}),(0,C.jsx)(re,{value:o.autoLaunch,name:"autoLaunch",defaultValue:!1,onChange:n})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"chatWindowWidth",children:"Chat Window Width"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"chatWindowWidth",name:"chatWindowWidth",defaultValue:o.chatWindowWidth,onChange:t,placeholder:"380px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"chatWindowHeight",children:"Chat Window Height"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"chatWindowHeight",name:"chatWindowHeight",defaultValue:o.chatWindowHeight,onChange:t,placeholder:"500px"})]})})]})}function Ce(e){var o;let{values:t,errors:n,handleBlur:r,touched:i,handleChange:s,setFieldValue:d}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Header Logo Settings"})})}),(0,C.jsxs)(l.Ay,{item:!0,xs:12,md:6,children:[(0,C.jsx)(E.A,{htmlFor:"uploadHeaderLogo",children:"Upload Header Logo"}),(0,C.jsx)(Ae,{imageUrl:null===(o=t.botLogo)||void 0===o?void 0:o.url,imageName:"botLogo",onChange:d,bgColor:t.bgColor})]}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"headerLogoMargin",children:"Header Logo Margin"}),(0,C.jsx)(G.A,{id:"headerLogoMargin",name:"headerLogoMargin",value:t.headerLogoMargin,onBlur:r,onChange:s,placeholder:"border : 1px 2px 3px 4px"}),i.headerLogoMargin&&n.headerLogoMargin&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:n.headerLogoMargin})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"logoWidth",children:"Width"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"logoWidth",name:"logoWidth",defaultValue:t.logoWidth,onChange:s,placeholder:"64px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"logoHeight",children:"Height"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"logoHeight",name:"logoHeight",defaultValue:t.logoHeight,onChange:s,placeholder:"64px"})]})})]})}const fe=(0,se.Ay)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function Ae(e){let{imageUrl:o,imageName:t,maxImageSize:r=25e4,onChange:i,bgColor:s}=e;const[d,c]=(0,n.useState)(null),[u,h]=(0,n.useState)(o),g=s&&null!==u&&void 0!==u&&u.endsWith(".png")?s:"transparent",x=!!d,m=!x&&o,p=u?"Replace image":"Select image";return(0,C.jsxs)(C.Fragment,{children:[u&&(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)("img",{src:u,alt:"headerLogo",height:50,style:{backgroundColor:g}})}),(0,C.jsxs)(V.A,{spacing:2,direction:"row",children:[(0,C.jsxs)(Y.A,{component:"label",variant:"contained",children:[p,(0,C.jsx)(fe,{name:t,type:"file",onChange:e=>{try{const o=e.target.files[0],t=o.size;if(o.type.startsWith("image/")&&t<=r){c(o),h(URL.createObjectURL(o));const e=new FileReader;e.onloadend=()=>{h(e.result)},e.readAsDataURL(o)}else(0,ce.i)(!0,"Please upload valid image file and size is <= ".concat(r/1e3," kb"),"error"),c(null)}catch(o){console.log("Error uploading the image ::",o),(0,ce.i)(!0,"Please select the image file","error")}}})]}),m&&(0,C.jsx)(Y.A,{variant:"outlined",onClick:async()=>{try{await(0,ne.Ci)(t),i(t,null),h(null),(0,ce.i)(!0,"Logo deleted successfully.","success")}catch(e){console.log("Deleting logo failed. Please try again later.",e)}},startIcon:(0,C.jsx)($.A,{}),children:"Delete"}),x&&(0,C.jsx)(U.A,{children:(0,C.jsx)(P.A,{color:"primary",variant:"contained",startIcon:(0,C.jsx)(de.A,{}),onClick:async()=>{try{const e=await(0,ne.I4)(t,d);i(t,e),c(null),(0,ce.i)(!0,"Logo uploaded successfully.","success")}catch(e){console.log("File upload failed. Please try again later.",e)}},ml:5,children:"Upload"})})]}),d&&(0,C.jsxs)(a.A,{variant:"body2",children:["File Name : ",d.name," "]})]})}function ye(e){var o,t;let{values:n,touched:r,errors:i,handleBlur:s,handleChange:d,setFieldValue:c}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Message Bubble Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"messageBubbleLogo",children:"Show Message Bubble Logo"}),(0,C.jsx)(re,{id:"messageBubbleLogo",name:"messageBubbleLogo",value:n.messageBubbleLogo,defaultValue:!1,onChange:c})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"fontSize",children:"Font Size"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"fontSize",name:"fontSize",defaultValue:n.fontSize,onChange:d,placeholder:"12px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(a.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Visitor Bubble Settings"})}),n.messageBubbleLogo&&(0,C.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,C.jsx)(E.A,{htmlFor:"uploadVisitorLogo",children:"Upload Visitor Logo"}),(0,C.jsx)(Ae,{imageUrl:null===(o=n.visitorMessageLogo)||void 0===o?void 0:o.url,imageName:"visitorMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"visitorBackgroundColor",children:"Background Color"}),(0,C.jsx)(te,{id:"visitorBackgroundColor",type:"color",value:n.visitorBackgroundColor,name:"visitorBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBackgroundColor&&i.visitorBackgroundColor)}),r.visitorBackgroundColor&&i.visitorBackgroundColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.visitorBackgroundColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"visitorFontColor",children:"Font Color"}),(0,C.jsx)(te,{id:"visitorFontColor",type:"color",value:n.visitorFontColor,name:"visitorFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorFontColor&&i.visitorFontColor)}),r.visitorFontColor&&i.visitorFontColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.visitorFontColor})]})}),n.visitorLogo&&(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"visitorLogoImage",children:"Upload Visitor Logo"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"file",id:"visitorLogoImage",name:"visitorLogoImage",onChange:d,placeholder:"0px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"visitorBorderColor",children:"Border Color"}),(0,C.jsx)(te,{id:"visitorBorderColor",type:"color",value:n.visitorBorderColor,name:"visitorBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.visitorBorderColor&&i.visitorBorderColor)}),r.visitorBorderColor&&i.visitorBorderColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.visitorBorderColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"visitorBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,C.jsx)(G.A,{id:"visitorBubbleBorderCurve",name:"visitorBubbleBorderCurve",value:n.visitorBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),r.visitorBubbleBorderCurve&&i.visitorBubbleBorderCurve&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.visitorBubbleBorderCurve})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(a.A,{variant:"overline",display:"block",style:{color:"#9C27B0"},children:"Bot Bubble Settings"})}),n.messageBubbleLogo&&(0,C.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,C.jsx)(E.A,{htmlFor:"uploadBotLogo",children:"Upload Bot Logo"}),(0,C.jsx)(Ae,{imageUrl:null===(t=n.botMessageLogo)||void 0===t?void 0:t.url,imageName:"botMessageLogo",maxImageSize:5e4,onChange:c})]}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"botBackgroundColor",children:"Background Color"}),(0,C.jsx)(te,{id:"botBackgroundColor",type:"color",value:n.botBackgroundColor,name:"botBackgroundColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botBackgroundColor&&i.botBackgroundColor)}),r.botBackgroundColor&&i.botBackgroundColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.botBackgroundColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"botFontColor",children:"Font Color"}),(0,C.jsx)(te,{id:"botFontColor",type:"color",value:n.botFontColor,name:"botFontColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botFontColor&&i.botFontColor)}),r.botFontColor&&i.botFontColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.botFontColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"botBorderColor",children:"Border Color"}),(0,C.jsx)(te,{id:"botBorderColor",type:"color",value:n.botBorderColor,name:"botBorderColor",onBlur:s,onChange:c,placeholder:"",fullWidth:!0,error:Boolean(r.botBorderColor&&i.botBorderColor)}),r.botBorderColor&&i.botBorderColor&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.botBorderColor})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"botBubbleBorderCurve",style:{paddingBottom:"6px"},children:"Border Radius"}),(0,C.jsx)(G.A,{id:"botBubbleBorderCurve",name:"botBubbleBorderCurve",value:n.botBubbleBorderCurve,onBlur:s,onChange:d,placeholder:"border : 1px 2px 3px 4px"}),r.botBubbleBorderCurve&&i.botBubbleBorderCurve&&(0,C.jsx)(D.A,{error:!0,id:"helper-text-bg-color",children:i.botBubbleBorderCurve})]})})]})}function Be(e){let{errors:o,isSubmitting:t}=e;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,C.jsx)(D.A,{error:!0,children:o.submit}),(0,C.jsx)(U.A,{children:(0,C.jsx)(P.A,{disableElevation:!0,disabled:Boolean(o.submit),isLoading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Save Settings"})})]})})}function we(e){var o;let{values:t,handleChange:n,setFieldValue:r}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,children:(0,C.jsx)(H.A,{children:(0,C.jsx)(a.A,{variant:"subtitle1",children:"Chat Launcher Settings"})})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"messagePlaceholder",children:"Chat Launcher Type *"}),(0,C.jsxs)(q.A,{row:!0,name:"launcherType",defaultValue:t.launcherType,onChange:n,children:[(0,C.jsx)(O.A,{value:"icon",control:(0,C.jsx)(J.A,{}),label:"Button"}),(0,C.jsx)(O.A,{value:"bar",control:(0,C.jsx)(J.A,{}),label:"Bar"}),(0,C.jsx)(O.A,{value:"expand",control:(0,C.jsx)(J.A,{}),label:"Expand Button"})]})]})}),"bar"!==t.launcherType&&(0,C.jsxs)(l.Ay,{item:!0,xs:12,md:6,children:[(0,C.jsx)(E.A,{htmlFor:"uploadChatButton",children:"Upload Chat Button"}),(0,C.jsx)(Ae,{imageUrl:null===(o=t.botChatButton)||void 0===o?void 0:o.url,imageName:"botChatButton",onChange:r})]}),"bar"===t.launcherType&&(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{id:"buttonOnMobile",children:"Button on Mobile"}),(0,C.jsx)(re,{name:"buttonOnMobile",value:t.buttonOnMobile,defaultValue:!1,onChange:r})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"launcherSpacingCorner",children:"Spacing on corner"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"launcherSpacingCorner",name:"launcherSpacingCorner",defaultValue:t.launcherSpacingCorner,onChange:n,placeholder:"0px"})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,md:6,children:(0,C.jsxs)(V.A,{spacing:1,children:[(0,C.jsx)(E.A,{htmlFor:"launcherSpacingBottom",children:"Spacing on Bottom"}),(0,C.jsx)(G.A,{fullWidth:!0,type:"text",id:"launcherSpacingBottom",name:"launcherSpacingBottom",defaultValue:t.launcherSpacingBottom,onChange:n,placeholder:"0px"})]})})]})}function Le(e){let{onChange:o}=e;const{values:t}=(0,Z.j7)();return n.useEffect((()=>{t&&o((0,j.Y)(t))}),[t,o]),null}const Fe=()=>{var e;const[o,t]=n.useState({}),[s,d]=n.useState(),[c,u]=(0,T.G)(),[h,g]=(0,n.useState)(!1),x=(0,i.nc)((e=>e.organizationId));return n.useEffect((()=>{r.Jt("/bot/".concat(x,"/").concat(c,"/chat/startup-flow")).then(d)}),[c,x]),(0,C.jsxs)(l.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,C.jsx)(l.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,C.jsxs)(l.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,C.jsx)(l.Ay,{item:!0,xs:6,children:(0,C.jsx)(a.A,{variant:"h5",children:"Chat Window Design"})}),(0,C.jsxs)(l.Ay,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:[(0,C.jsx)(U.A,{children:(0,C.jsx)(P.A,{isLoading:h,disabled:h,variant:"contained",color:"success",size:"large",onClick:()=>g(!0),children:"Deploy Bot"})}),(0,C.jsx)(N.A,{openPopUpDialog:h,setPopUpDialog:g,title:"Add Bot Details",children:(0,C.jsx)(_.A,{setIsDeployBot:g,botId:c,organizationId:x})})]})]})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,sm:12,md:12,lg:8,children:(0,C.jsx)(me,{onChange:t})}),(0,C.jsx)(l.Ay,{item:!0,xs:12,sm:12,md:12,lg:4,children:(0,C.jsx)(y,{botDetails:u,botDesign:o,startupFlow:s,autoLaunch:null===u||void 0===u||null===(e=u.botDesign)||void 0===e?void 0:e.autoLaunch,recipientId:We(),onReceiveChatResponse:e=>(0,z.NC)(e.organization),onCallback:Se})}),(0,C.jsx)(l.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}})]})};function Se(e,o){if("set-visitor-id"===e){const{recipientId:e}=o||{};e&&Me(e)}}const ke="lp-vid",Ie="permanent-app-id";function We(){try{let e=localStorage.getItem(ke);return e||(e=localStorage.getItem(Ie),e&&(Me(e),localStorage.removeItem(Ie))),e}catch(e){console.error("Unable to use browser cache",e)}}function Me(e){try{localStorage.setItem(ke,e)}catch(o){console.error("Unable to use browser cache",o)}}},41507:(e,o,t)=>{t.d(o,{Ds:()=>a,NC:()=>l,YS:()=>i,qb:()=>s});var n=t(8478),r=t(69713);async function i(e,o){const t=await async function(){const e=r.nc.getState();let{organizationList:o,organizationId:t,organization:i}=e;if(!e.isSuperUser||Array.isArray(o))return;if(o=await n.bE("/superAdmin/get-all-organization"),o.length)if(t=t||sessionStorage.getItem("orgId"),t){if(!i){var l;i=null===(l=o)||void 0===l?void 0:l.filter((e=>e._id===t))[0]}}else{const e=o[0];t=e._id,i=e}return r.nc.setState({organizationList:o,organizationId:t,organization:i}),!0}(),{organizationId:i}=r.nc.getState();return e?e!==i&&r.nc.setState({organizationId:e}):e=i,!e||(t||await async function(e){const o=await n.bE("/organization/get-organization-by-id",{organizationId:e});r.nc.setState({organization:o})}(e),await a(e,o),!0)}function l(e){if(!e||"object"!==typeof e)return;let{organization:o}=r.nc.getState();o&&(o={...o,...e},r.nc.setState({organization:o}))}async function a(e,o){var t;const i=await n.bE("/bot/get-all-bots",{organizationId:e}),l=o||(null===(t=i[0])||void 0===t?void 0:t._id),a=i.reduce(((e,o)=>(e[o._id]=o,e)),{});return r.nc.setState({organizationId:e,botsList:i,botsMap:a,selectedBotId:l}),l}function s(e){r.nc.setState({selectedBotId:e})}},70855:(e,o,t)=>{t.d(o,{G:()=>r});var n=t(69713);function r(e){const o=(0,n.nc)((e=>e.selectedBotId)),t=(0,n.nc)((t=>t.botsMap[e||o]));return[e||o,t]}}}]);