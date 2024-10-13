"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[6674],{86230:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),s=n(4709),l=(n(37092),n(44414));function i(e,t){const n=[...e];return t.forEach((e=>{n.some((t=>e.name&&t.name===e.name||e.code&&t.code===e.code||e.native&&t.native===e.native))||n.push(e)})),n}const r=function(e){var t;let{value:n="en",onChange:r,translateLanguages:a}=e;const[c,d]=(0,o.useState)(s.lc),[h,u]=(0,o.useState)(!1),g=(0,o.useRef)(null);(0,o.useEffect)((()=>{(async function(e){e=e||[];const t=await(0,s.e)();if(Array.isArray(null===t||void 0===t?void 0:t.languages)){const n=i(s.lc,t.languages);return i(n,e)}return s.lc})(a).then(d)}),[a]);const m=(("string"===typeof n?n:(null===n||void 0===n?void 0:n.code)||(null===n||void 0===n?void 0:n.name))||"en").toLowerCase(),p=c.find((e=>{var t,n;return(null===(t=e.code)||void 0===t?void 0:t.toLowerCase())===m||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase())===m}));return(0,o.useEffect)((()=>{const e=e=>{g.current&&!g.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,l.jsxs)("div",{ref:g,className:"language-dropdown",children:[(0,l.jsx)("button",{onClick:()=>u(!h),className:"language-button",children:null===p||void 0===p||null===(t=p.code)||void 0===t?void 0:t.toUpperCase()}),h&&(0,l.jsxs)("div",{className:"language-dropdown-popover",children:[(0,l.jsx)("div",{className:"popover-header",children:"Choose Language"}),(0,l.jsx)("div",{className:"language-list",children:c.map(((e,t)=>(0,l.jsx)("div",{className:"language-item "+((null===p||void 0===p?void 0:p.code)===e.code?"selected":""),onClick:()=>(r(e),void u(!1)),children:e.native},t)))})]})]})}},78023:(e,t,n)=>{function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;const{chatWindowWidth:n,chatWindowHeight:o,chatDisclaimer:l,hideLivservBranding:i,windowAlign:r,minimizeOnClick:a,paddingLeft:c,paddingBottom:d,fontType:h,fontName:u,remoteFontLink:g,multiLanguageChat:m,translateLanguages:p,launcherType:v,buttonOnMobile:x,barText:f,launcherSpacingCorner:b,launcherSpacingBottom:y,titleText:j,subTitleText:w,bgColor:C,fontColor:k,headerPadding:N,logoWidth:S,logoHeight:A,headerLogoMargin:L,headerFontSize:M,botLogo:B,visitorBorderColor:z,visitorBackgroundColor:T,visitorFontColor:_,visitorMessageLogo:U,visitorBubbleBorderCurve:I,botBorderColor:P,botBackgroundColor:F,botFontColor:H,botMessageLogo:R,botBubbleBorderCurve:V,messageBubbleLogo:E,fontSize:W,botChatButton:D,placeholder:O}=e,{url:q}=B||{},{url:$}=U||{},{url:J}=R||{},{url:Y}=D||{},Z={launcherType:v,buttonLogoUrl:Y,spacingCorner:b,spacingBottom:y};"bar"===v&&(Z.buttonOnMobile=x&&window.outerWidth<=700,Z.barText=f);const K=s(C);return{window:{width:n||"380px",height:o||"500px",align:r,minimizeOnClick:a,spacingCorner:c||"5px",spacingBottom:d||"5px",fontFamily:u,disclaimer:l,hideLivservBranding:i,...t.window},remoteFontLink:"remote"===h?g:void 0,launcher:{...Z,...t.launcher},header:{titleText:j,subTitleText:w,bgColor:C,secBgColor:K,fontColor:k,padding:N,fontSize:M,logo:q?{width:S,height:A,margin:L,url:q}:void 0,...t.header},body:{visitorBlock:{borderColor:z,backgroundColor:T,color:_,useLogo:!!$,logoUrl:$,borderRadius:I,showLogo:E,fontSize:W},assistantBlock:{borderColor:P,backgroundColor:F,color:H,useLogo:!!J,logoUrl:J,borderRadius:V,showLogo:E,fontSize:W}},composer:{placeholder:O,pColor:C,bgColor:s(C,25),secBgColor:K,iconColor:k,fontSize:W,multiLanguageChat:m,translateLanguages:p}}}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70;if(!e)return e;let n=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return n=Math.min(255,n+t),o=Math.min(255,o+t),s=Math.min(255,s+t),"#"+(1<<24|n<<16|o<<8|s).toString(16).slice(1)}n.d(t,{Y:()=>o})},4709:(e,t,n)=>{n.d(t,{Db:()=>c,a:()=>g,cO:()=>x,d6:()=>d,e:()=>u,eB:()=>f,lc:()=>p,oy:()=>h});var o=n(87946),s=n(44364),l=n(8478),i=n(91006);const r="lp-cid";let a;function c(){try{return sessionStorage.getItem(r)}catch(e){return console.error("Unable to use browser cache",e),a}}function d(e){try{a=e,sessionStorage.setItem(r,e)}catch(t){console.error("Unable to use browser cache",t)}}function h(){try{a=void 0,sessionStorage.removeItem(r)}catch(e){console.error("Unable to use browser cache",e)}}async function u(){const e=s.pR;let t=null;const n=sessionStorage.getItem("locationDetails");if(n)try{t=JSON.parse(n)}catch(o){t={country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:"Error parsing from sessionStorage"}}else t=await(0,i.A)((()=>l.Jt(`https://api.ipdata.co?api-key=${e}`))).catch((e=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:e.message}))),sessionStorage.setItem("locationDetails",JSON.stringify(t));return t}async function g(){var e,t,n;const s=await u(),l=(new o.UAParser).getResult()||{},{ip:i,is_eu:r,city:a,region:c,region_code:d,region_type:h,country_name:g,country_code:m,continent_name:p,continent_code:v,latitude:x,longitude:f,postal:y,calling_code:j,time_zone:w,currency:C}=s,k={ipAddress:i,deviceType:null===(e=l.device)||void 0===e?void 0:e.type,browserName:null===(t=l.browser)||void 0===t?void 0:t.name,osName:null===(n=l.os)||void 0===n?void 0:n.name,...b()};return k.locationDetails={is_eu:r,city:a,region:c,region_code:d,region_type:h,country_name:g,country_code:m,continent_name:p,continent_code:v,latitude:x,longitude:f,postal:y,calling_code:j,time_zone:w,currency:C},k}const m={name:"English",native:"English",code:"en"},p=[m],v="lp_prefLang";function x(){let e=null;const t=localStorage.getItem(v);if(t)try{const{name:n,native:o,code:s}=JSON.parse(t);n&&o&&s&&(e={name:n,native:o,code:s})}catch(n){console.log("Error parsing language preference:",n)}return e||m}function f(e){e&&localStorage.setItem(v,JSON.stringify(e))}function b(){const e=new URLSearchParams(window.location.search),t=e.get("sourceUrl")||void 0,n=e.get("referrerUrl")||void 0;return{utmParameters:Array.from(e.keys()).reduce(((t,n)=>{if(n.startsWith("utm_")){t=t||{};const o=e.get(n);o&&"null"!==o&&(t[n]=o)}return t}),void 0),sourceUrl:t,referrerUrl:n}}},79075:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(28891),s=n(44414);const l=function(e){let{design:t,onClear:n,onHide:l}=e;const{logo:i,bgColor:r,secBgColor:a,fontColor:c,titleText:d="Live Chat",subTitleText:h,padding:u,fontSize:g}=t||{};return(0,s.jsxs)("div",{className:"header",style:{background:"linear-gradient(to right, "+r+", "+a+")",padding:u,height:u?"initial":void 0},children:[!i&&(0,s.jsx)("div",{className:"icon-block",children:o.N6}),i&&(0,s.jsx)("div",{className:"image-block",children:(0,s.jsx)("img",{src:i.url,alt:"",style:{width:i.width,height:i.height,margin:i.margin}})}),(0,s.jsxs)("div",{className:"title-block",children:[(0,s.jsx)("span",{className:"title",style:{color:c,fontSize:g},children:d}),h&&(0,s.jsx)("span",{className:"sub-title",style:{color:c,fontSize:g},children:h})]}),(l||n)&&(0,s.jsxs)("div",{className:"controls-block",style:l&&n?{width:"110px"}:void 0,children:[l&&(0,s.jsx)("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:l,style:{color:c},children:o.ut}),n&&(0,s.jsx)("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:n,style:{color:c},children:o.pS})]})]})}},11531:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(28891),s=n(50407),l=n(44414);const i=function(e){let{message:t,displayComponents:n,showTime:i,children:r,design:a,options:c,onSendMessage:d,onCallback:h}=e;const{role:u,contentType:g,type:m,createdAt:p,...v}=t,x="user"===u,f=(x?null===a||void 0===a?void 0:a.visitorBlock:null===a||void 0===a?void 0:a.assistantBlock)||{},{useLogo:b,logoUrl:y,showLogo:j,...w}=f,C={width:"24px",height:"24px"};if(!r){var k;let e=n[g||m];if(e||"question"!==(null===(k=v.media)||void 0===k?void 0:k.flowType)||(e=n.default),!e)return null;r=(0,l.jsx)(e,{...v,type:m,isUser:x,contentStyle:w,onSendMessage:d,onCallback:h}),!0!==e.noContainer&&(r=(0,l.jsxs)("div",{className:"content",style:w,children:[r,i&&!1!==e.showTime&&(0,l.jsx)("div",{className:"message-time "+(x?"user":"system"),children:(0,s.f)(p)})]}))}return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"message "+(j?"":"no-logo ")+(x?"user-message":"system-message"),children:[j&&!x&&(0,l.jsx)("div",{className:"chat-logo",children:b?(0,l.jsx)("img",{src:y,alt:"assistant",style:C}):o.iO}),c&&x&&(0,l.jsx)("div",{className:"options-block",children:c}),r,c&&!x&&(0,l.jsx)("div",{className:"options-block",children:c}),j&&x&&(0,l.jsx)("div",{className:"chat-logo",children:b?(0,l.jsx)("img",{src:y,alt:"you",style:C}):o.tI})]})})}},55092:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),s=n(9257),l=n(11531),i=n(44414);const r=function(e){let{messages:t,showTime:n,displayComponents:r,showLoader:a,design:c={},optionsRenderer:d,onSendMessage:h,onCallback:u}=e;const g=o.useRef();return o.useEffect((()=>{g.current&&setTimeout((()=>g.current.scrollTo({top:g.current.scrollHeight,behavior:"smooth"})),30)}),[t]),(0,i.jsxs)("div",{className:"chat-body",ref:g,children:[null===t||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)(l.A,{message:e,displayComponents:r,showTime:n,design:c,options:null===d||void 0===d?void 0:d(e,t),onSendMessage:h,onCallback:u},t))),a&&(0,i.jsx)(l.A,{message:{role:"assistant",type:"loader"},design:c,children:(0,i.jsx)("img",{src:s,alt:"",style:{height:"42px"}})})]})}},20178:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(9950),s=n(28891),l=n(44414);const i=function(e){let{message:t,hideLivservBranding:n}=e;const[i,r]=o.useState(!1);return(0,l.jsxs)("div",{className:"disclaimer-block",children:[i&&(0,l.jsx)("div",{className:"disclaimerMessage",children:t}),(0,l.jsxs)("div",{style:{textAlign:"right"},children:[!n&&(0,l.jsxs)("span",{className:"link",style:{display:"inline"},children:["Powered by ",(0,l.jsx)("a",{href:"https://livserv.ai",target:"_blank",rel:"noreferrer",children:"Livserv.ai"})]})," ",t&&(0,l.jsx)("span",{className:"message",style:{display:"inline",cursor:"pointer"},onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:n?"Disclaimer":s.Qd})]})]})}},55670:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),s=n(28891),l=n(86230),i=n(44414);const r=function(e){let{design:t,language:n,onSend:r,onChangeLanguage:a}=e;const{placeholder:c="Type your message...",pColor:d,bgColor:h,secBgColor:u,iconColor:g,fontSize:m,multiLanguageChat:p,translateLanguages:v}=t||{},[x,f]=o.useState(""),b=()=>{r&&null!==x&&void 0!==x&&x.trim()&&(r(x.trim()),f(""))},y=e=>{13===e.keyCode&&b()},j=o.useCallback((e=>{const t=e.currentTarget.value;f(t)}),[]);return(0,i.jsxs)("div",{className:"message-block",children:[p&&(0,i.jsx)(l.A,{value:n,onChange:a,translateLanguages:v}),(0,i.jsx)("input",{style:{borderColor:u,fontSize:m},value:x,placeholder:c,disabled:!r,onChange:j,onKeyDown:y}),(0,i.jsx)("div",{style:{backgroundColor:h,outlineColor:d,color:g},role:"button",tabIndex:0,className:"send-icon",disabled:!r,onClick:b,onKeyDown:y,children:s.AO})]})}},15820:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(9950),s=n(1628),l=(n(52879),n(79075)),i=n(55092),r=n(55670),a=n(20178),c=n(44414);const d=function(e){let{botDesign:t,messages:n,showTime:d,displayComponents:h,disabledMessage:u,optionsRenderer:g,onUserMessage:m,onHistoryChange:p,onClear:v,onHide:x,onCallback:f,language:b,setLanguage:y}=e;const[j,w]=o.useState([]),[C,k]=o.useState(!1),N=o.useRef({});N.current.history=j,N.current.onUserMessage=m,N.current.onHistoryChange=p;const{window:S={},header:A,body:L,composer:M}=t||{},B={width:S.width,height:S.height,marginRight:S.spacingCorner,marginLeft:S.spacingCorner,fontFamily:S.fontFamily,bottom:(parseFloat(S.height)||500)+(parseFloat(S.spacingBottom)||0)+"px"},z=o.useCallback((e=>{const{history:t,onHistoryChange:n,onUserMessage:o}=N.current;let l=t.length;if("string"===typeof e){const o=[...t,{role:"user",type:"text",content:e}];l=o.length,w(o),null===n||void 0===n||n(o)}else null===n||void 0===n||n(t);k(!0),o(e).then((e=>{let t=[...N.current.history];Array.isArray(e)?t.splice(l,0,...e):t.splice(l,0,e);const o=t.length-1;t=t.filter(((e,t)=>!s.V.includes(e.type)||t===o)),w(t),null===n||void 0===n||n(t)})).finally((()=>{k(!1)}))}),[]);o.useEffect((()=>{w(n||[])}),[n]);const T=o.useMemo((()=>h?{...s.A,...h}:s.A),[h]);return(0,c.jsx)("div",{className:"chat-container",style:B,children:(0,c.jsxs)("div",{className:"chat-window",children:[(0,c.jsx)(l.A,{design:A,onClear:v,onHide:x}),(0,c.jsx)(i.A,{design:L,messages:j,displayComponents:T,showTime:d,showLoader:C,optionsRenderer:g,onSendMessage:m?z:void 0,onCallback:f}),(0,c.jsx)(r.A,{design:M,language:b,onSend:u?void 0:z,onChangeLanguage:y}),(0,c.jsx)(a.A,{message:S.disclaimer,hideLivservBranding:S.hideLivservBranding})]})})}},28891:(e,t,n)=>{n.d(t,{AO:()=>r,N6:()=>a,Or:()=>g,Qd:()=>m,_h:()=>h,bh:()=>u,iO:()=>d,pS:()=>i,ri:()=>s,tI:()=>c,ut:()=>l});var o=n(44414);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"16px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0 0 24 24";return(0,o.jsx)("svg",{width:e,height:e,viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"})})},l=s(),i=(0,o.jsx)("svg",{fill:"currentColor",width:"16px",height:"16px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0",fillRule:"evenodd"})}),r=(0,o.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 1024 1024",version:"1.1",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("defs",{}),(0,o.jsx)("path",{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"})]}),a=(0,o.jsx)("span",{style:{fontSize:"22px"},children:"\ud83d\udfe2"}),c=(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",height:"24px",width:"24px",children:[(0,o.jsx)("path",{fill:"#42c3cf",d:"M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"}),(0,o.jsx)("circle",{cx:24,cy:16,r:12,fill:"#42c3cf"})]}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24px";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:e,width:e,children:[(0,o.jsx)("path",{fill:"#8a6845",d:"M7 23V9C7 4.3 10.8.5 15.5.5S24 4.3 24 9v14"}),(0,o.jsx)("path",{fill:"#745539",d:"M11 9.5V12c0 2.3 1.2 4.3 3 5.5v3.6l-2 .1v.5c.1.3.2 1.6.3 1.8h10.3c.1-.3.2-.6.3-.8l-1.9-.6v-4.6c1.8-1.2 3-3.2 3-5.5V9.5H11z"}),(0,o.jsx)("path",{fill:"#745539",d:"M16.5.6c-.3 0-.7-.1-1-.1C10.8.5 7 4.3 7 9v14h2V9c0-4.4 3.3-7.9 7.5-8.4z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M24.6 22.4L21 21.2c-.5 2.8-5.4 5-5.4 5s-4.9-2.2-5.4-5l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h25v-4.4c0-2.1-1.4-4.1-3.4-4.7z"}),(0,o.jsx)("path",{fill:"#4b6c85",d:"M14.5 25.7c-1.1-.6-2.8-1.7-3.8-3.1-.3-.5-.6-.9-.7-1.4l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h2v-4.1c0-1.7 1.1-3.3 2.7-3.8.8-.3 1.7-.1 2.4.5l1.2.9c1.2.8 2.7 1.2 4.2 1.2 0 0-.7-.3-1-.5z"}),(0,o.jsx)("path",{fill:"#004463",d:"M20.5 16h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c1.4 0 2.5-1.1 2.5-2.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 1.9-1.6 3.5-3.5 3.5z"}),(0,o.jsx)("path",{fill:"#f0c9ae",d:"M19 20.5v-3h-7v3l-2 .6c.5 2.8 5.4 5 5.4 5s4.9-2.2 5.4-5l-1.8-.6zM20.9 21.2h.1z"}),(0,o.jsx)("path",{fill:"#4b6c85",d:"M28 31.5v-4.4c0-.9-.3-1.8-.7-2.6-3 .4-5.3 2.9-5.3 6v1h6zM3 31.5v-4.4c0-.9.3-1.8.7-2.6 3 .4 5.3 2.9 5.3 6v1H3z"}),(0,o.jsx)("path",{fill:"#40657c",d:"M5.7 25.2c-.6-.3-1.3-.5-2-.6l-.3.6v.1c-.1.2-.1.4-.2.5 0 .1 0 .2-.1.2 0 .1-.1.3-.1.4V31.5h2v-4.1c0-.8.3-1.6.7-2.2z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M10 12.5H8c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2v3zM24 12.5h-3v-3h2c.6 0 1 .4 1 1v2z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M14 18.5v-1h-2v3l-2 .6c.5 2.8 5.4 5 5.4 5h.1c.2-.1.5-.2.9-.5-1.1-.6-2.8-1.7-3.8-3-.2-.3-.1-.7.2-.8l.3-.1c.4-.1.7-.5.7-.9v-2.3z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M19 17.5h-7v1c1 .6 2.2 1 3.5 1 1.3 0 2.5-.4 3.5-1v-1z"}),(0,o.jsx)("path",{fill:"#f0c9ae",d:"M20.9 21.2h.1zM15 9.5c-1.9 0-3.4-1.3-3.9-3H11v1c0 1.1-.9 2-2 2V12c0 3.6 2.9 6.5 6.5 6.5S22 15.6 22 12V9.5h-7z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M13.6 17.9C11.9 16 11 13.6 11 11.1v-.9c.3-.2.5-.4.7-.6.7 1.1 1.9 1.9 3.3 1.9h7v-2h-7c-.2 0-.4 0-.6-.1-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1-.2-.1-.3-.1-.5-.2h-.1c-.2-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.2-.2-.5-.4-.7-.7-.1-.2-.3-.4-.4-.6 0-.1-.1-.1-.1-.2-.1-.3-.2-.5-.3-.8H11v1c0 1.1-.9 2-2 2V12.9c0 .2 0 .3.1.5 0 .1 0 .2.1.2 0 .1.1.3.1.4 0 .1.1.2.1.2.1.1.1.3.2.4 0 .1.1.1.1.2.1.2.2.3.2.4l.1.1c.1.2.2.3.4.5.9 1.1 2.1 1.9 3.6 2.3l-.4-.2z"}),(0,o.jsx)("path",{fill:"#004463",d:"M22.4 14.1c-.5.5-1.1.9-1.9.9h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c1.3 0 2.5-.8 3.1-1.9h-1.2z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M17.5 16.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1z"})]})}(),h=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,o.jsx)("path",{fill:"currentColor",d:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"})}),u=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,o.jsx)("path",{fill:"currentColor",d:"M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"})}),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32px";return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 512 512",className:"svg-icon-caret-up",children:(0,o.jsx)("path",{fill:"currentColor",d:"M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"})})}(),m=(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",children:[(0,o.jsx)("path",{d:"M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"}),(0,o.jsx)("path",{d:"M12 8v4M12 16h.01"})]})},58473:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(9950),s=n(44414);const l={display:"block",marginBottom:"10px"};const i=function(e){let{content:t,onDateSelect:n,minDate:i,maxDate:r}=e;const[a,c]=(0,o.useState)("");return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:l,children:t||"Please select a date:"}),(0,s.jsx)("input",{type:"date",value:a,onChange:e=>{c(e.target.value),n(e.target.value)},min:i,max:r,style:{padding:"8px",fontSize:"14px",width:"100%",color:"black"}})]})}},33400:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(9950),s=n(44414);const l={display:"block",marginBottom:"10px"};const i=function(e){let{content:t,onDateTimeSelect:n,minDateTime:i,maxDateTime:r}=e;const[a,c]=(0,o.useState)("");return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:l,children:t||"Please select a date and time:"}),(0,s.jsx)("input",{type:"datetime-local",value:a,onChange:async e=>{const t=e.target.value;c(t),await n(t)},min:i,max:r,style:{padding:"8px",fontSize:"14px",width:"100%",color:"black"}})]})}},47587:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(20330),s=n(44414);const l={pdf:o},i={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:n}=e;const{type:r,name:a,url:c}=t[0]||{},d=l[null===r||void 0===r?void 0:r.toLowerCase()]||o;return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:i,children:n||`Please refer to below ${r.toUpperCase()} for more details`}),(0,s.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",width:200,children:(0,s.jsx)("img",{src:d,alt:a,width:60,className:"media-style"})}),(null===t||void 0===t?void 0:t.length)>1&&t.map(((e,t)=>(0,s.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",style:{display:"block"},children:e.name},t)))]})}},9177:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(44364),s=n(44414);const l=function(e){let{url:t,content:n}=e;const l=function(e){if(!e)return e;if(e.includes("maps/embed"))return e;return`https://www.google.com/maps/embed/v1/place?key=${o.mB}&q=${encodeURIComponent(e)}`}(t);return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:n||"Please refer to below video for more details"}),(0,s.jsx)("div",{className:"google-map-container",children:(0,s.jsx)("iframe",{title:"Google Map",src:l,width:"100%",height:"200",style:{border:0},allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"})})]})}},68218:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),s=n(30249),l=n(44414);const i={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:n,onCallback:r}=e;const[a,c]=o.useState(!1),d=o.useCallback((()=>{c(!0),null===r||void 0===r||r("toggleFS",{isFullScreen:!0})}),[r]),h=o.useCallback((()=>{c(!1),null===r||void 0===r||r("toggleFS",{isFullScreen:!1})}),[r]),{url:u,name:g}=t[0]||{};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[null!==n&&(0,l.jsx)("span",{style:i,children:n||"Please refer to below image for more details"}),(0,l.jsx)("img",{alt:g,src:u,width:200,className:"media-style",tabIndex:0,onClick:d})]}),a&&(0,l.jsx)(s.A,{media:t,type:"image",onClose:h})]})}},63462:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9950),s=n(90771),l=(n(13953),n(87172),n(10694)),i=n(44414);const r=function(e){var t;let{content:n,profile:l,updateContact:r,botSettings:c}=e;const d=c&&(null===(t=c.defaultCountryCode)||void 0===t?void 0:t.countryId)||"in",[h,u]=o.useState({name:"",email:"",phone:""}),[g,m]=o.useState({}),[p,v]=o.useState(!1),{isNameTaken:x,isPhoneNumberTaken:f,isEmailTaken:b}=l||{},{name:y,email:j,phone:w}=h,C=!((x||y.trim())&&(b||j.trim())&&(f||w.trim().length>=5));return(0,i.jsx)("div",{className:"message-box-form",children:(0,i.jsxs)("div",{className:"block",style:{boxSizing:"border-box"},children:[(0,i.jsx)("span",{className:"info-text",children:n||"Please enter your contact Information"}),!x&&(0,i.jsx)("input",{type:"text",className:"text-box mb-2"+(g.name?" error":""),value:h.name,onChange:e=>{u((t=>({...t,name:e.target.value}))),m((e=>({...e,name:!1})))},placeholder:"Name *"}),!b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"text",className:"text-box mb-2"+(g.email?" error":""),value:h.email,onChange:e=>{u((t=>({...t,email:e.target.value}))),m((e=>({...e,email:!1})))},placeholder:"Email *"}),g.email&&(0,i.jsx)("div",{className:"error",children:"Email id is not valid"})]}),!f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.LR,{className:g.email?" error":"",value:h.phone||"",defaultCountry:d,onChange:(e,t)=>{const{inputValue:n,country:{iso2:o}={}}=t;e&&e!==n&&(u((t=>({...t,phone:e.trim(),dialCode:n,countryCode:o}))),m((e=>({...e,phone:!1}))))},disableFormatting:!0,inputProps:{placeholder:"Phone number *"}}),g.phone&&(0,i.jsx)("div",{className:"error",children:"Phone number is not valid"})]}),(0,i.jsx)("button",{className:"save-form",onClick:async()=>{const e=function(e,t){const n={},{isNameTaken:o,isPhoneNumberTaken:s,isEmailTaken:l}=t||{};var i;o||(n.name=!(null!==(i=e.name)&&void 0!==i&&i.trim().length));l||(n.email=!function(e){var t;if(e=null===(t=e)||void 0===t?void 0:t.trim(),!e)return!1;return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}(e.email));s||(n.phone=!function(e){try{return a.isValidNumber(a.parseAndKeepRawInput(e))}catch(t){return!1}}(e.phone));return!!Object.values(n).some((e=>e))&&n}(h,l);m(e||{}),e||(v(!0),await r({method:"lead-form",contact:h,flowId:l.flowId}),v(!1))},disabled:C||p,children:p?"Please wait...":"Submit"})]})})};const a=l.PhoneNumberUtil.getInstance()},30249:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(9950),s=n(17119),l=n(28891),i=(n(60043),n(44414));const r=(e,t)=>"image"===e.type?(0,i.jsx)("img",{className:"media-renderer",src:e.url,alt:e.name,onLoad:t}):"video"===e.type?(0,i.jsxs)("video",{controls:!0,width:200,className:"media-renderer",title:e.name,children:[(0,i.jsx)("source",{src:e.url,type:"video/mp4"}),(0,i.jsx)("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video playback."]}):"pdf"===e.type?(0,i.jsx)("iframe",{className:"media-renderer",src:e.url,title:e.name,onLoad:t}):null,a=(0,l.ri)("52px","0 0 24 24");const c=function(e){let{onClose:t,media:n}=e;const[c,d]=o.useState(0),[h,u]=o.useState(!1),g=n[c];return s.createPortal((0,i.jsxs)("div",{className:"lp-light-box",children:[(0,i.jsx)("div",{className:"close-icon",onClick:t,title:"Click to close",children:a}),(0,i.jsxs)("div",{className:"nav-button-container "+(n.length>1?"multi":"single"),children:[(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{u(!0);const e=(c-1+n.length)%n.length;d(e)},children:l.bh}),(0,i.jsxs)("div",{className:"media-container",children:[h&&(0,i.jsx)("div",{children:"Loading..."}),r(g,(()=>{u(!1)}))]}),(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{u(!0);const e=(c+1)%n.length;d(e)},children:l._h})]})]}),document.getElementsByTagName("body")[0])}},82701:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(9950),s=(n(78928),n(80150)),l=n(44414);const i={display:"block",marginBottom:"15px"};function r(e){let{media:t,content:n,contentStyle:r,onSendMessage:a}=e;const[d,h]=o.useState(),{options:u,flowId:g}=t||{},{borderColor:m,backgroundColor:p,color:v,...x}=r||{},f=o.useCallback(((e,t)=>{a&&(h(e),a({method:"flow-response",type:"options",flowId:g,selected:e,selectedIndex:t}))}),[g,a]);return d?(0,l.jsx)("div",{className:"content",style:r,children:(0,l.jsx)(s.A,{content:[d.title,d.subTitle].filter(Boolean).join(", ")})}):(0,l.jsx)("div",{className:"options-content",style:x,children:(0,l.jsxs)("div",{className:"options-list",children:[n&&(0,l.jsx)("span",{style:i,children:n}),u.map(((e,t)=>(0,l.jsx)(c,{index:t,option:e,onClick:f,style:{borderColor:m,backgroundColor:p,color:v}},t)))]})})}r.noContainer=!0;const a=r;function c(e){let{option:t,style:n,index:o,onClick:s}=e;const{color:i,...r}=n;return(0,l.jsxs)("div",{className:"option",style:r,onClick:()=>s(t,o),children:[(0,l.jsx)("span",{className:"title",style:{color:i},children:t.title}),(0,l.jsx)("span",{className:"sub-title",style:{color:i},children:t.subTitle})]})}},80150:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(9950),s=n(1628),l=n(44414);const i=function(e){let{content:t,onCallback:n}=e;return o.useMemo((()=>function(e,t){if("string"!==typeof e)return(0,l.jsx)("span",{children:"Unknown content"});const n=function(e){const t=e.split(/(\n|!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)|https?:\/\/\S+|[*_~][^*_~]+[*_~])/).filter(Boolean);return d(t)}(e);let o=[],i=[];n.forEach((e=>{const t=e.trim();if(!t)return void o.push("\n");const n=t.match(/!\[(.*?)\]\((.*?)\)/);if(n){const e=n[1],t=n[2];i.push({type:e,url:t})}else i.length>0&&(o.push(i),i=[]),o.push(t)})),i.length>0&&o.push(i);return o=d(o),function(e,t){const n=[];for(let o=0;o<e.length;o++){const i=e[o];if(Array.isArray(i)){const e=s.A[i[0].type];e&&n.push((0,l.jsx)(e,{media:i,content:null,onCallback:t},n.length))}else if("\n"===i)n.push((0,l.jsx)("br",{},o));else{if(i.match(/((?:\[.*?\]\(.*?\))|(https?:\/\/[^\s]+))/g)){n.push(c(i,o));continue}n.push(h(i,o))}}return n}(o,t)}(t,n)),[t,n])};function r(e){let{href:t,children:n,...o}=e;return(0,l.jsx)("a",{href:a(t,".","[","]"),rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},...o,children:n})}function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(;n.includes(e[e.length-1]);)e=e.substring(0,e.length-2);for(;n.includes(e[0]);)e=e.substring(1);return e}function c(e,t){if(e.startsWith("[")&&e.endsWith(")")){const n=e.match(/\[(.*?)\]\((.*?)\)/),o=n[1];let s=n[2];return s.endsWith(".")&&(s=s.slice(0,-1)),(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(r,{href:s,children:o},t),"\xa0"]})}{let n=e;return e.endsWith(".")&&(n=e.slice(0,-1)),(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(r,{href:n,children:e},t),"\xa0"]})}}function d(e){return e.reduce(((e,t)=>"string"!==typeof t?(e.push(t),e):(t.match(/^\s+$/)&&(t="\n"),"\n"===t&&e.length&&"\n"===e[e.length-1]&&e.length>1&&"\n"===e[e.length-2]||e.push(t),e)),[])}function h(e,t){if(!e.match(/([*_~])([^\1]+?)\1/g))return(0,l.jsx)(o.Fragment,{children:e},t);const n=e.split(/([*_~][^*_~]+[*_~])/).filter(Boolean);return(0,l.jsxs)(o.Fragment,{children:["\xa0",n.map(((e,t)=>e.startsWith("*")&&e.endsWith("*")?(0,l.jsx)("b",{children:e.slice(1,-1)},t):e.startsWith("_")&&e.endsWith("_")?(0,l.jsx)("i",{children:e.slice(1,-1)},t):e.startsWith("~")&&e.endsWith("~")?(0,l.jsx)("s",{children:e.slice(1,-1)},t):e)),"\xa0"]},t)}},57828:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(9950),s=n(44414);const l={display:"block",marginBottom:"10px"};const i=function(e){let{content:t,onTimeSelect:n,minTime:i,maxTime:r}=e;const[a,c]=(0,o.useState)("");return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:l,children:t||"Please select a time:"}),(0,s.jsx)("input",{type:"time",value:a,onChange:e=>{c(e.target.value),n(e.target.value)},min:i,max:r,style:{padding:"8px",fontSize:"14px",width:"100%",color:"black"}})]})}},18924:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(12101),s=n(44414);const l=function(e){let{media:t=[],content:n}=e;const{url:l,name:i}=t[0]||{};return l.includes("youtube.com")?(0,s.jsx)(o.A,{media:t,content:n}):(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:n||"Please refer to below video for more details"}),(0,s.jsxs)("video",{controls:!0,width:200,className:"media-style",title:i,children:[(0,s.jsx)("source",{src:l,type:"video/mp4"}),(0,s.jsx)("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video playback."]})]})}},12101:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(44414);const s=function(e){let{media:t=[],content:n}=e;const{url:s,name:l}=t[0]||{},i=`https://www.youtube.com/embed/${new URLSearchParams(new URL(s).search).get("v")}`;return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:n||"Please refer to below video for more details"}),(0,o.jsx)("iframe",{width:"100%",src:i,frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:l||"YouTube video player"})]})}},1628:(e,t,n)=>{n.d(t,{A:()=>m,V:()=>p});var o=n(47587),s=n(9177),l=n(68218),i=n(63462),r=n(82701),a=n(80150),c=n(18924),d=n(12101),h=n(58473),u=n(57828),g=n(33400);const m={default:a.A,map:s.A,image:l.A,form:a.A,lead:i.A,options:r.A,file:o.A,pdf:o.A,text:a.A,video:c.A,youtube:d.A,date:h.A,time:u.A,dateTime:g.A},p=["options"]},50407:(e,t,n)=>{function o(e){if("string"===typeof e&&(e=new Date(e)),!(e instanceof Date)||isNaN(e))return null;let t=e.getHours(),n=e.getMinutes();const o=t>=12?"PM":"AM";t%=12,t=t||12,n=n<10?"0"+n:n;return`${t}:${n} ${o}`}n.d(t,{f:()=>o})},91006:(e,t,n)=>{n.d(t,{A:()=>s});const o=new Map;function s(e){const t=e.toString();if(o.has(t))return o.get(t);const n=new Promise(((n,s)=>{e().then((e=>{n(e),o.delete(t)})).catch((e=>{s(e),o.delete(t)}))}));return o.set(t,n),n}},37092:()=>{},52879:()=>{},87172:()=>{},60043:()=>{},78928:()=>{},20330:(e,t,n)=>{e.exports=n.p+"static/media/pdf.c65c4221835f46233e5f.png"},9257:(e,t,n)=>{e.exports=n.p+"static/media/typing.2ce5c7c546f39287aac0.gif"}}]);