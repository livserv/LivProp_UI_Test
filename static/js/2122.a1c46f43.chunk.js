"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[2122],{32829:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(25371),o=n(44414);function i(e){let{children:t,type:n}=e;return(0,o.jsx)(s.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}i.defaultProps={type:"scale"}},78023:(e,t,n)=>{function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;const{chatWindowWidth:n,chatWindowHeight:s,chatDisclaimer:i,hideLivservBranding:l,windowAlign:r,minimizeOnClick:a,paddingLeft:c,paddingBottom:d,fontType:h,fontName:u,remoteFontLink:m,launcherType:g,buttonOnMobile:p,barText:v,launcherSpacingCorner:x,launcherSpacingBottom:f,titleText:b,subTitleText:j,bgColor:y,fontColor:C,headerPadding:A,logoWidth:w,logoHeight:k,headerLogoMargin:S,headerFontSize:T,botLogo:M,visitorBorderColor:N,visitorBackgroundColor:_,visitorFontColor:P,visitorMessageLogo:E,visitorBubbleBorderCurve:L,botBorderColor:B,botBackgroundColor:I,botFontColor:R,botMessageLogo:z,botBubbleBorderCurve:D,messageBubbleLogo:O,fontSize:$,botChatButton:F,placeholder:U}=e,{url:H}=M||{},{url:V}=E||{},{url:G}=z||{},{url:q}=F||{},W={launcherType:g,buttonLogoUrl:q,spacingCorner:x,spacingBottom:f};"bar"===g&&(W.buttonOnMobile=p&&window.outerWidth<=700,W.barText=v);const K=o(y);return{window:{width:n||"380px",height:s||"500px",align:r,minimizeOnClick:a,spacingCorner:c||"5px",spacingBottom:d||"5px",fontFamily:u,disclaimer:i,hideLivservBranding:l,...t.window},remoteFontLink:"remote"===h?m:void 0,launcher:{...W,...t.launcher},header:{titleText:b,subTitleText:j,bgColor:y,secBgColor:K,fontColor:C,padding:A,fontSize:T,logo:H?{width:w,height:k,margin:S,url:H}:void 0,...t.header},body:{visitorBlock:{borderColor:N,backgroundColor:_,color:P,useLogo:!!V,logoUrl:V,borderRadius:L,showLogo:O,fontSize:$},assistantBlock:{borderColor:B,backgroundColor:I,color:R,useLogo:!!G,logoUrl:G,borderRadius:D,showLogo:O,fontSize:$}},composer:{placeholder:U,pColor:y,bgColor:o(y,25),secBgColor:K,iconColor:C}}}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70;if(!e)return e;let n=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return n=Math.min(255,n+t),s=Math.min(255,s+t),o=Math.min(255,o+t),"#"+(1<<24|n<<16|s<<8|o).toString(16).slice(1)}n.d(t,{Y:()=>s})},15820:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(9950),o=n(28891),i=n(1628),l=n(9257),r=(n(52879),n(44414));const a=function(e){let{botDesign:t,messages:n,showTime:o,displayComponents:l,disabledMessage:a,optionsRenderer:h,onUserMessage:u,onHistoryChange:p,onClear:v,onHide:x,onCallback:f}=e;const[b,j]=s.useState([]),[y,C]=s.useState(!1),A=s.useRef({});A.current.history=b,A.current.onUserMessage=u,A.current.onHistoryChange=p;const{window:w={},header:k,body:S,composer:T}=t||{},M={width:w.width,height:w.height,marginRight:w.spacingCorner,marginLeft:w.spacingCorner,fontFamily:w.fontFamily,bottom:(parseFloat(w.height)||500)+(parseFloat(w.spacingBottom)||0)+"px"},N=s.useCallback((e=>{const{history:t,onHistoryChange:n,onUserMessage:s}=A.current;let o=t.length;if("string"===typeof e){const s=[...t,{role:"user",type:"text",content:e}];o=s.length,j(s),null===n||void 0===n||n(s)}else null===n||void 0===n||n(t);C(!0),s(e).then((e=>{let t=[...A.current.history];Array.isArray(e)?t.splice(o,0,...e):t.splice(o,0,e);const s=t.length-1;t=t.filter(((e,t)=>!i.V.includes(e.type)||t===s)),j(t),null===n||void 0===n||n(t)})).finally((()=>{C(!1)}))}),[]);s.useEffect((()=>{j(n||[])}),[n]);const _=s.useMemo((()=>({...i.A,...l})),[l]);return(0,r.jsx)("div",{className:"chat-container",style:M,children:(0,r.jsxs)("div",{className:"chat-window",children:[(0,r.jsx)(c,{design:k,onClear:v,onHide:x}),(0,r.jsx)(d,{design:S,messages:b,displayComponents:_,showTime:o,showLoader:y,optionsRenderer:h,onSendMessage:N,onCallback:f}),(0,r.jsx)(m,{design:T,onSend:a?void 0:N}),(0,r.jsx)(g,{message:w.disclaimer,hideLivservBranding:w.hideLivservBranding})]})})};function c(e){let{design:t,onClear:n,onHide:s}=e;const{logo:i,bgColor:l,secBgColor:a,fontColor:c,titleText:d="Live Chat",subTitleText:h,padding:u,fontSize:m}=t||{};return(0,r.jsxs)("div",{className:"header",style:{background:"linear-gradient(to right, "+l+", "+a+")",padding:u,height:u?"initial":void 0},children:[!i&&(0,r.jsx)("div",{className:"icon-block",children:o.N6}),i&&(0,r.jsx)("div",{className:"image-block",children:(0,r.jsx)("img",{src:i.url,alt:"",style:{width:i.width,height:i.height,margin:i.margin}})}),(0,r.jsxs)("div",{className:"title-block",children:[(0,r.jsx)("span",{className:"title",style:{color:c,fontSize:m},children:d}),h&&(0,r.jsx)("span",{className:"sub-title",style:{color:c,fontSize:m},children:h})]}),(s||n)&&(0,r.jsxs)("div",{className:"controls-block",style:s&&n?{width:"110px"}:void 0,children:[s&&(0,r.jsx)("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:s,style:{color:c},children:o.ut}),n&&(0,r.jsx)("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:n,style:{color:c},children:o.pS})]})]})}function d(e){let{messages:t,showTime:n,displayComponents:o,showLoader:i,design:a={},optionsRenderer:c,onSendMessage:d,onCallback:u}=e;const m=s.useRef();return s.useEffect((()=>{m.current&&setTimeout((()=>m.current.scrollTo({top:m.current.scrollHeight,behavior:"smooth"})),30)}),[t]),(0,r.jsxs)("div",{className:"chat-body",ref:m,children:[null===t||void 0===t?void 0:t.map(((e,t)=>(0,r.jsx)(h,{message:e,displayComponents:o,showTime:n,design:a,options:null===c||void 0===c?void 0:c(e,t),onSendMessage:d,onCallback:u},t))),i&&(0,r.jsx)(h,{message:{role:"assistant",type:"loader"},design:a,children:(0,r.jsx)("img",{src:l,alt:"",style:{height:"42px"}})})]})}function h(e){let{message:t,displayComponents:n,showTime:s,children:i,design:l,options:a,onSendMessage:c,onCallback:d}=e;const{role:h,contentType:m,type:g,createdAt:p,...v}=t,x="user"===h,f=(x?null===l||void 0===l?void 0:l.visitorBlock:null===l||void 0===l?void 0:l.assistantBlock)||{},{useLogo:b,logoUrl:j,showLogo:y,...C}=f,A={width:"24px",height:"24px"};if(!i){const e=n[m||g];if(!e)return null;i=(0,r.jsx)(e,{...v,type:g,isUser:x,contentStyle:C,onSendMessage:c,onCallback:d}),!0!==e.noContainer&&(i=(0,r.jsxs)("div",{className:"content",style:C,children:[i,s&&!1!==e.showTime&&(0,r.jsx)("div",{className:"message-time "+(x?"user":"system"),children:u(p)})]}))}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"message "+(y?"":"no-logo ")+(x?"user-message":"system-message"),children:[y&&!x&&(0,r.jsx)("div",{className:"chat-logo",children:b?(0,r.jsx)("img",{src:j,alt:"assistant",style:A}):o.iO}),a&&x&&(0,r.jsx)("div",{className:"options-block",children:a}),i,a&&!x&&(0,r.jsx)("div",{className:"options-block",children:a}),y&&x&&(0,r.jsx)("div",{className:"chat-logo",children:b?(0,r.jsx)("img",{src:j,alt:"you",style:A}):o.tI})]})})}function u(e){if("string"===typeof e&&(e=new Date(e)),!(e instanceof Date)||isNaN(e))return null;let t=e.getHours(),n=e.getMinutes();const s=t>=12?"PM":"AM";t%=12,t=t||12,n=n<10?"0"+n:n;return`${t}:${n} ${s}`}function m(e){let{design:t,onSend:n}=e;const{placeholder:i="Type your message...",pColor:l,bgColor:a,secBgColor:c,iconColor:d}=t||{},[h,u]=s.useState(""),m=()=>{n&&null!==h&&void 0!==h&&h.trim()&&(n(h.trim()),u(""))},g=e=>{13===e.keyCode&&m()},p=s.useCallback((e=>{const t=e.currentTarget.value;u(t)}),[]);return(0,r.jsxs)("div",{className:"message-block",children:[(0,r.jsx)("input",{style:{borderColor:c},value:h,placeholder:i,disabled:!n,onChange:p,onKeyDown:g}),(0,r.jsx)("div",{style:{backgroundColor:a,outlineColor:l,color:d},role:"button",tabIndex:0,className:"send-icon",disabled:!n,onClick:m,onKeyDown:g,children:o.AO})]})}function g(e){let{message:t,hideLivservBranding:n}=e;const[i,l]=s.useState(!1);return(0,r.jsxs)("div",{className:"disclaimer-block",children:[i&&(0,r.jsx)("div",{className:"disclaimerMessage",children:t}),(0,r.jsxs)("div",{style:{textAlign:"right"},children:[!n&&(0,r.jsxs)("span",{className:"link",style:{display:"inline"},children:["Powered by ",(0,r.jsx)("a",{href:"https://livserv.ai",target:"_blank",rel:"noreferrer",children:"Livserv.ai"})]})," ",t&&(0,r.jsx)("span",{className:"message",style:{display:"inline",cursor:"pointer"},onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:n?"Disclaimer":o.Qd})]})]})}},28891:(e,t,n)=>{n.d(t,{AO:()=>r,N6:()=>a,Or:()=>m,Qd:()=>g,_h:()=>h,bh:()=>u,iO:()=>d,pS:()=>l,ri:()=>o,tI:()=>c,ut:()=>i});var s=n(44414);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"16px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0 0 24 24";return(0,s.jsx)("svg",{width:e,height:e,viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"})})},i=o(),l=(0,s.jsx)("svg",{fill:"currentColor",width:"16px",height:"16px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0",fillRule:"evenodd"})}),r=(0,s.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 1024 1024",version:"1.1",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("defs",{}),(0,s.jsx)("path",{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"})]}),a=(0,s.jsx)("span",{style:{fontSize:"22px"},children:"\ud83d\udfe2"}),c=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",height:"24px",width:"24px",children:[(0,s.jsx)("path",{fill:"#42c3cf",d:"M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"}),(0,s.jsx)("circle",{cx:24,cy:16,r:12,fill:"#42c3cf"})]}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24px";return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:e,width:e,children:[(0,s.jsx)("path",{fill:"#8a6845",d:"M7 23V9C7 4.3 10.8.5 15.5.5S24 4.3 24 9v14"}),(0,s.jsx)("path",{fill:"#745539",d:"M11 9.5V12c0 2.3 1.2 4.3 3 5.5v3.6l-2 .1v.5c.1.3.2 1.6.3 1.8h10.3c.1-.3.2-.6.3-.8l-1.9-.6v-4.6c1.8-1.2 3-3.2 3-5.5V9.5H11z"}),(0,s.jsx)("path",{fill:"#745539",d:"M16.5.6c-.3 0-.7-.1-1-.1C10.8.5 7 4.3 7 9v14h2V9c0-4.4 3.3-7.9 7.5-8.4z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M24.6 22.4L21 21.2c-.5 2.8-5.4 5-5.4 5s-4.9-2.2-5.4-5l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h25v-4.4c0-2.1-1.4-4.1-3.4-4.7z"}),(0,s.jsx)("path",{fill:"#4b6c85",d:"M14.5 25.7c-1.1-.6-2.8-1.7-3.8-3.1-.3-.5-.6-.9-.7-1.4l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h2v-4.1c0-1.7 1.1-3.3 2.7-3.8.8-.3 1.7-.1 2.4.5l1.2.9c1.2.8 2.7 1.2 4.2 1.2 0 0-.7-.3-1-.5z"}),(0,s.jsx)("path",{fill:"#004463",d:"M20.5 16h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c1.4 0 2.5-1.1 2.5-2.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 1.9-1.6 3.5-3.5 3.5z"}),(0,s.jsx)("path",{fill:"#f0c9ae",d:"M19 20.5v-3h-7v3l-2 .6c.5 2.8 5.4 5 5.4 5s4.9-2.2 5.4-5l-1.8-.6zM20.9 21.2h.1z"}),(0,s.jsx)("path",{fill:"#4b6c85",d:"M28 31.5v-4.4c0-.9-.3-1.8-.7-2.6-3 .4-5.3 2.9-5.3 6v1h6zM3 31.5v-4.4c0-.9.3-1.8.7-2.6 3 .4 5.3 2.9 5.3 6v1H3z"}),(0,s.jsx)("path",{fill:"#40657c",d:"M5.7 25.2c-.6-.3-1.3-.5-2-.6l-.3.6v.1c-.1.2-.1.4-.2.5 0 .1 0 .2-.1.2 0 .1-.1.3-.1.4V31.5h2v-4.1c0-.8.3-1.6.7-2.2z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M10 12.5H8c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2v3zM24 12.5h-3v-3h2c.6 0 1 .4 1 1v2z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M14 18.5v-1h-2v3l-2 .6c.5 2.8 5.4 5 5.4 5h.1c.2-.1.5-.2.9-.5-1.1-.6-2.8-1.7-3.8-3-.2-.3-.1-.7.2-.8l.3-.1c.4-.1.7-.5.7-.9v-2.3z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M19 17.5h-7v1c1 .6 2.2 1 3.5 1 1.3 0 2.5-.4 3.5-1v-1z"}),(0,s.jsx)("path",{fill:"#f0c9ae",d:"M20.9 21.2h.1zM15 9.5c-1.9 0-3.4-1.3-3.9-3H11v1c0 1.1-.9 2-2 2V12c0 3.6 2.9 6.5 6.5 6.5S22 15.6 22 12V9.5h-7z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M13.6 17.9C11.9 16 11 13.6 11 11.1v-.9c.3-.2.5-.4.7-.6.7 1.1 1.9 1.9 3.3 1.9h7v-2h-7c-.2 0-.4 0-.6-.1-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1-.2-.1-.3-.1-.5-.2h-.1c-.2-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.2-.2-.5-.4-.7-.7-.1-.2-.3-.4-.4-.6 0-.1-.1-.1-.1-.2-.1-.3-.2-.5-.3-.8H11v1c0 1.1-.9 2-2 2V12.9c0 .2 0 .3.1.5 0 .1 0 .2.1.2 0 .1.1.3.1.4 0 .1.1.2.1.2.1.1.1.3.2.4 0 .1.1.1.1.2.1.2.2.3.2.4l.1.1c.1.2.2.3.4.5.9 1.1 2.1 1.9 3.6 2.3l-.4-.2z"}),(0,s.jsx)("path",{fill:"#004463",d:"M22.4 14.1c-.5.5-1.1.9-1.9.9h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c1.3 0 2.5-.8 3.1-1.9h-1.2z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M17.5 16.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1z"})]})}(),h=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,s.jsx)("path",{fill:"currentColor",d:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"})}),u=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,s.jsx)("path",{fill:"currentColor",d:"M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"})}),m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32px";return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 512 512",className:"svg-icon-caret-up",children:(0,s.jsx)("path",{fill:"currentColor",d:"M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"})})}(),g=(0,s.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",children:[(0,s.jsx)("path",{d:"M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"}),(0,s.jsx)("path",{d:"M12 8v4M12 16h.01"})]})},47587:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(20330),o=n(44414);const i={pdf:s},l={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:n}=e;const{type:r,name:a,url:c}=t[0]||{},d=i[null===r||void 0===r?void 0:r.toLowerCase()]||s;return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{style:l,children:n||`Please refer to below ${r.toUpperCase()} for more details`}),(0,o.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",width:200,children:(0,o.jsx)("img",{src:d,alt:a,width:60,className:"media-style"})}),(null===t||void 0===t?void 0:t.length)>1&&t.map(((e,t)=>(0,o.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",style:{display:"block"},children:e.name},t)))]})}},68218:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(9950),o=n(30249),i=n(44414);const l={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:n,onCallback:r}=e;const[a,c]=s.useState(!1),d=s.useCallback((()=>{c(!0),null===r||void 0===r||r("toggleFS",{isFullScreen:!0})}),[r]),h=s.useCallback((()=>{c(!1),null===r||void 0===r||r("toggleFS",{isFullScreen:!1})}),[r]),{url:u,name:m}=t[0]||{};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[null!==n&&(0,i.jsx)("span",{style:l,children:n||"Please refer to below image for more details"}),(0,i.jsx)("img",{alt:m,src:u,width:200,className:"media-style",tabIndex:0,onClick:d})]}),a&&(0,i.jsx)(o.A,{media:t,type:"image",onClose:h})]})}},63462:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(9950),o=n(90771),i=(n(13953),n(87172),n(10694)),l=n(44414);const r=function(e){var t;let{content:n,profile:i,updateContact:r,botSettings:c}=e;const d=c&&(null===(t=c.defaultCountryCode)||void 0===t?void 0:t.countryId)||"in",[h,u]=s.useState({name:"",email:"",phone:""}),[m,g]=s.useState({}),[p,v]=s.useState(!1),{isNameTaken:x,isPhoneNumberTaken:f,isEmailTaken:b}=i||{},{name:j,email:y,phone:C}=h,A=!((x||j.trim())&&(b||y.trim())&&(f||C.trim().length>=5));return(0,l.jsx)("div",{className:"message-box-form",children:(0,l.jsxs)("div",{className:"block",style:{boxSizing:"border-box"},children:[(0,l.jsx)("span",{className:"info-text",children:n||"Please enter your contact Information"}),!x&&(0,l.jsx)("input",{type:"text",className:"text-box mb-2"+(m.name?" error":""),value:h.name,onChange:e=>{u((t=>({...t,name:e.target.value}))),g((e=>({...e,name:!1})))},placeholder:"Name *"}),!b&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"text",className:"text-box mb-2"+(m.email?" error":""),value:h.email,onChange:e=>{u((t=>({...t,email:e.target.value}))),g((e=>({...e,email:!1})))},placeholder:"Email *"}),m.email&&(0,l.jsx)("div",{className:"error",children:"Email id is not valid"})]}),!f&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.LR,{className:m.email?" error":"",value:h.phone||"",defaultCountry:d,onChange:(e,t)=>{const{inputValue:n,country:{iso2:s}={}}=t;e&&e!==n&&(u((t=>({...t,phone:e.trim(),dialCode:n,countryCode:s}))),g((e=>({...e,phone:!1}))))},disableFormatting:!0,inputProps:{placeholder:"Phone number *"}}),m.phone&&(0,l.jsx)("div",{className:"error",children:"Phone number is not valid"})]}),(0,l.jsx)("button",{className:"save-form",onClick:async()=>{const e=function(e,t){const n={},{isNameTaken:s,isPhoneNumberTaken:o,isEmailTaken:i}=t||{};var l;s||(n.name=!(null!==(l=e.name)&&void 0!==l&&l.trim().length));i||(n.email=!function(e){var t;if(e=null===(t=e)||void 0===t?void 0:t.trim(),!e)return!1;return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}(e.email));o||(n.phone=!function(e){try{return a.isValidNumber(a.parseAndKeepRawInput(e))}catch(t){return!1}}(e.phone));return!!Object.values(n).some((e=>e))&&n}(h,i);g(e||{}),e||(v(!0),await r({method:"lead-form",contact:h,flowId:i.flowId}),v(!1))},disabled:A||p,children:p?"Please wait...":"Submit"})]})})};const a=i.PhoneNumberUtil.getInstance()},30249:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(9950),o=n(17119),i=n(28891),l=(n(60043),n(44414));const r=(e,t)=>"image"===e.type?(0,l.jsx)("img",{className:"media-renderer",src:e.url,alt:e.name,onLoad:t}):"video"===e.type?(0,l.jsxs)("video",{controls:!0,width:200,className:"media-renderer",title:e.name,children:[(0,l.jsx)("source",{src:e.url,type:"video/mp4"}),(0,l.jsx)("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video playback."]}):"pdf"===e.type?(0,l.jsx)("iframe",{className:"media-renderer",src:e.url,title:e.name,onLoad:t}):null,a=(0,i.ri)("52px","0 0 24 24");const c=function(e){let{onClose:t,media:n}=e;const[c,d]=s.useState(0),[h,u]=s.useState(!1),m=n[c];return o.createPortal((0,l.jsxs)("div",{className:"lp-light-box",children:[(0,l.jsx)("div",{className:"close-icon",onClick:t,title:"Click to close",children:a}),(0,l.jsxs)("div",{className:"nav-button-container "+(n.length>1?"multi":"single"),children:[(0,l.jsx)("div",{className:"nav-icon",onClick:()=>{u(!0);const e=(c-1+n.length)%n.length;d(e)},children:i.bh}),(0,l.jsxs)("div",{className:"media-container",children:[h&&(0,l.jsx)("div",{children:"Loading..."}),r(m,(()=>{u(!1)}))]}),(0,l.jsx)("div",{className:"nav-icon",onClick:()=>{u(!0);const e=(c+1)%n.length;d(e)},children:i._h})]})]}),document.getElementsByTagName("body")[0])}},82701:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(9950),o=(n(78928),n(80150)),i=n(44414);const l={display:"block",marginBottom:"15px"};function r(e){let{media:t,content:n,contentStyle:r,onSendMessage:a}=e;const[d,h]=s.useState(),{options:u,flowId:m}=t||{},{borderColor:g,backgroundColor:p,color:v}=r||{},x=s.useCallback(((e,t)=>{h(e),a({method:"flow-response",type:"options",flowId:m,selected:e,selectedIndex:t})}),[m,a]);return d?(0,i.jsx)("div",{className:"content",style:r,children:(0,i.jsx)(o.A,{content:[d.title,d.subTitle].filter(Boolean).join(", ")})}):(0,i.jsx)("div",{className:"options-content",children:(0,i.jsxs)("div",{className:"options-list",children:[n&&(0,i.jsx)("span",{style:l,children:n}),u.map(((e,t)=>(0,i.jsx)(c,{index:t,option:e,onClick:x,style:{borderColor:g,backgroundColor:p,color:v}},t)))]})})}r.noContainer=!0;const a=r;function c(e){let{option:t,style:n,index:s,onClick:o}=e;return(0,i.jsxs)("div",{className:"option",style:n,onClick:()=>o(t,s),children:[(0,i.jsx)("span",{className:"title",children:t.title}),(0,i.jsx)("span",{className:"sub-title",children:t.subTitle})]})}},80150:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(9950),o=n(1628),i=n(44414);const l=function(e){let{content:t,onCallback:n}=e;return s.useMemo((()=>function(e,t){if("string"!==typeof e)return(0,i.jsx)("span",{children:"Unknown content"});const n=function(e){const t=e.split(/(\n|!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)|https?:\/\/\S+)/).filter(Boolean);return d(t)}(e);let l=[],r=[];n.forEach((e=>{const t=e.trim();if(!t)return void l.push("\n");const n=t.match(/!\[(.*?)\]\((.*?)\)/);if(n){const e=n[1],t=n[2];r.push({type:e,url:t})}else r.length>0&&(l.push(r),r=[]),l.push(t)})),r.length>0&&l.push(r);l=d(l);const a=[];for(let d=0;d<l.length;d++){const e=l[d];if(Array.isArray(e)){const n=o.A[e[0].type];n&&a.push((0,i.jsx)(n,{media:e,content:null,onCallback:t},a.length))}else if("\n"===e)a.push((0,i.jsx)("br",{},d));else{if(e.match(/((?:\[.*?\]\(.*?\))|(https?:\/\/[^\s]+))/g)){a.push(c(e,d));continue}a.push((0,i.jsx)(s.Fragment,{children:e},a.length))}}return a}(t,n)),[t,n])};function r(e){let{href:t,children:n,...s}=e;return(0,i.jsx)("a",{href:a(t,".","[","]"),rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},...s,children:n})}function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];for(;n.includes(e[e.length-1]);)e=e.substring(0,e.length-2);for(;n.includes(e[0]);)e=e.substring(1);return e}function c(e,t){if(e.startsWith("[")&&e.endsWith(")")){const n=e.match(/\[(.*?)\]\((.*?)\)/),s=n[1];let o=n[2];return o.endsWith(".")&&(o=o.slice(0,-1)),(0,i.jsx)(r,{href:o,children:s},t)}{let n=e;return e.endsWith(".")&&(n=e.slice(0,-1)),(0,i.jsx)(r,{href:n,children:e},t)}}function d(e){return e.reduce(((e,t)=>"string"!==typeof t?(e.push(t),e):(t.match(/^\s+$/)&&(t="\n"),"\n"===t&&e.length&&"\n"===e[e.length-1]&&e.length>1&&"\n"===e[e.length-2]||e.push(t),e)),[])}},18924:(e,t,n)=>{n.d(t,{A:()=>o});n(9950);var s=n(44414);const o=function(e){let{media:t=[],content:n}=e;const{url:o,name:i}=t[0]||{};return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:n||"Please refer to below video for more details"}),(0,s.jsxs)("video",{controls:!0,width:200,className:"media-style",title:i,children:[(0,s.jsx)("source",{src:o,type:"video/mp4"}),(0,s.jsx)("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video playback."]})]})}},1628:(e,t,n)=>{n.d(t,{A:()=>c,V:()=>d});var s=n(47587),o=n(68218),i=n(63462),l=n(82701),r=n(80150),a=n(18924);const c={default:r.A,image:o.A,form:r.A,lead:i.A,options:l.A,file:s.A,pdf:s.A,text:r.A,video:a.A},d=["options"]},65387:(e,t,n)=>{n.d(t,{A:()=>c});n(9950);var s=n(70006),o=n(23266),i=n(24516),l=n(44414);const r=[{value:"gpt-3.5-turbo-0125",label:"GPT 3.5 Latest Stable (default)",description:"Latest stable model of GPT 3.5. More performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."},{value:"gpt-4o-mini",label:"GPT 4o Mini Latest",description:"Current Latest Mini model of GPT 4o. Cheaper and faster than GPT 4o."},{value:"gpt-4o-mini-2024-07-18",label:"GPT 4o Mini (July 2024)",description:"Mini model of GPT 4o. Cheaper and faster than GPT 4o."},{value:"gpt-4o",label:"GPT 4o Latest",description:"Latest model of GPT 4o. More capable, cheaper and faster than GPT 4 Turbo."},{value:"gpt-4o-2024-05-13",label:"GPT 4o (May 2024) (suggested)",description:"May 2024 Release of GPT 4o. More capable, cheaper and faster than GPT 4 Turbo."},{value:"gpt-4",label:"GPT 4 Turbo",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."}],a=r.reduce(((e,t)=>(e[t.value]=t,e)),{});const c=function(e){var t;let{value:n,hideDescription:c,...d}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.A,{...d,value:n,defaultValue:r[0].value,children:[r.map((e=>(0,l.jsx)(o.A,{value:e.value,children:e.label},e.value))),!a[n]&&(0,l.jsx)(o.A,{value:n,children:n},n)]}),!c&&(0,l.jsx)(i.A,{id:"bot-model-description",children:n?null===(t=a[n])||void 0===t?void 0:t.description:r[0].description})]})}},93383:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(9950),o=n(10226),i=n(46639),l=n(44414);const r=function(e){let{onClick:t,disabled:n,isLoading:r,children:a,...c}=e;const[d,h]=s.useState(r);return(0,l.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(h(!0),n.finally((()=>h(!1))))},disabled:d||r||n,...c,children:[(d||r)&&(0,l.jsx)(i.A,{size:16,color:"primary",style:{marginRight:"10px"}}),a]})}},6834:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(9950),o=n(60899),i=n(3788),l=n(93230),r=n(2660),a=n(10226),c=n(29714),d=n(61467),h=n(24516),u=n(21788),m=n(32829),g=n(93383),p=n(77382),v=n(44414);const x=()=>c.Yj(),f=c.Ik().shape({question:x(),content:x()});const b=function(e){let{document:t={},onCancel:n,onUpdate:c}=e;const x=s.useCallback((()=>n(!1)),[n]);return(0,v.jsx)(d.l1,{initialValues:t,validationSchema:f,onSubmit:async(e,t)=>{let{setStatus:n,setSubmitting:s}=t;try{const t=await(0,p.Mk)(e);n({success:!1}),s(!1),x(),(0,u.i)(!0,"Content added successfully!","success"),null===c||void 0===c||c(t)}catch(o){console.error(o),(0,u.i)(!0,"Error occurred while trying to save content.","error")}},children:e=>{let{values:t,errors:n,handleChange:s,touched:c,isSubmitting:d,handleSubmit:u}=e;return(0,v.jsxs)("form",{noValidate:!0,onSubmit:u,children:[(0,v.jsxs)(o.Ay,{item:!0,xs:12,mt:5,children:[(0,v.jsx)(i.A,{htmlFor:"question",children:"Question"}),(0,v.jsxs)(l.A,{spacing:2,mb:3,children:[(0,v.jsx)(r.A,{multiline:!0,fullWidth:!0,id:"question",name:"question",value:t.question,onChange:s,placeholder:"Please enter the question"}),c.question&&n.question&&(0,v.jsx)(h.A,{error:!0,id:"helper-text-message-placeholder",children:n.question})]}),(0,v.jsx)(i.A,{htmlFor:"content",children:"Answer"}),(0,v.jsxs)(l.A,{spacing:2,mb:3,children:[(0,v.jsx)(r.A,{multiline:!0,rows:6,fullWidth:!0,id:"content",name:"content",value:t.content,onChange:s,placeholder:"Please enter the answer"}),c.content&&n.content&&(0,v.jsx)(h.A,{error:!0,id:"helper-text-message-placeholder",children:n.content})]})]}),(0,v.jsx)(o.Ay,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:(0,v.jsxs)(l.A,{spacing:2,direction:"row",children:[(0,v.jsx)(a.A,{variant:"outlined",onClick:x,children:"Cancel"}),(0,v.jsx)(m.A,{children:(0,v.jsx)(g.A,{isLoading:d,color:"primary",size:"large",type:"submit",variant:"contained",onClick:u,children:"Save"})})]})})]})}})}},68033:(e,t,n)=>{n.d(t,{A:()=>A});var s=n(9950),o=n(60899),i=n(82053),l=n(10226),r=n(63464),a=n(40033),c=n(79739),d=n(57988),h=n(7999),u=n(25333),m=n(63359),g=n(85967),p=n(74745),v=n(21788),x=n(32829),f=n(93383),b=n(70855),j=n(6834),y=n(77382),C=n(44414);const A=function(e){let{docsList:t,onUpdate:n}=e;const[,s]=(0,b.G)();return null===t||void 0===t?void 0:t.map(((e,t)=>(0,C.jsx)(w,{index:t,document:e,trainingMedia:s.trainingMedia,onUpdate:n},e._id)))};function w(e){let{document:t,index:n,trainingMedia:o,onUpdate:i}=e;const[l,r]=s.useState(!1);return l?(0,C.jsx)(j.A,{document:t,onCancel:r,onUpdate:i}):(0,C.jsx)(k,{index:n,document:t,trainingMedia:o,onEdit:r})}function k(e){let{document:t,index:n,trainingMedia:l,onEdit:r}=e;const a=s.useCallback((()=>r(!0)),[r]);return(0,C.jsxs)(o.Ay,{container:!0,mt:1,children:[(0,C.jsxs)(o.Ay,{item:!0,children:[(0,C.jsxs)(i.A,{variant:"h5",children:["Q",n+1," . ",t.question]}),(0,C.jsxs)(i.A,{variant:"body2",children:[(0,C.jsx)("b",{children:"Ans . "})," ",t.content]}),t.sourceDocument&&(null===l||void 0===l?void 0:l.length)>0&&(0,C.jsx)(S,{document:t,trainingMedia:l})]}),(0,C.jsxs)(o.Ay,{xs:12,item:!0,display:"flex",justifyContent:"flex-end",children:[(0,C.jsx)(u.A,{size:"small",sx:{color:m.A[500]},onClick:a,children:(0,C.jsx)(h.A,{})}),(0,C.jsx)(T,{documentId:t._id})]}),(0,C.jsx)(p.A,{xs:12,sx:{width:"100%",borderColor:"#b6abab"}})]})}function S(e){let{document:t,trainingMedia:n}=e;const o=t.sourceDocument,l=s.useMemo((()=>{const e=n.filter((e=>e.docId===o))[0];if(!e)return e;const t=decodeURIComponent(e.url.substring(e.url.lastIndexOf("/")+1));return{...e,fileName:t}}),[o,n]);return l?(0,C.jsxs)(i.A,{variant:"body2",children:[(0,C.jsx)("b",{children:"Source Document:"})," ",(0,C.jsxs)("a",{href:l.url,rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},children:[l.fileName,l.name?` ( ${l.name} )`:""]})]}):null}function T(e){let{documentId:t}=e;const[n,o]=s.useState(!1),h=()=>o((e=>!e)),m=s.useCallback((async()=>{await(0,y.CA)(t),o(!1),(0,v.i)(!0,"Deleted response successfully","success")}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u.A,{sx:{color:g.A[500]},onClick:h,children:(0,C.jsx)(d.A,{})}),n&&(0,C.jsxs)(r.A,{open:n,onClose:h,children:[(0,C.jsx)(a.A,{id:"delete-confirm-dialog-title",children:(0,C.jsx)(i.A,{gutterBottom:!0,children:"Are sure you want to delete the response ?"})}),(0,C.jsxs)(c.A,{children:[(0,C.jsx)(l.A,{onClick:h,children:"Cancel"}),(0,C.jsx)(x.A,{children:(0,C.jsx)(f.A,{color:"primary",type:"submit",variant:"contained",onClick:m,children:"Delete"})})]})]})]})}},73225:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(9950),o=n(68033),i=n(77382),l=n(65387),r=n(93383),a=n(44414);const c=function(e){let{message:t,isSuperUser:n,onReplay:c}=e;const{content:d,searchQuery:h,passedDocIds:u,index:m,model:g}=t,[p,v]=(0,s.useState)([]),[x,f]=(0,s.useState)(g);(0,s.useEffect)((()=>{(0,i.L3)(u).then(v)}),[u]),(0,s.useEffect)((()=>{f(t.model)}),[t]);const b=s.useCallback((e=>{var t;return f(null===(t=e.target)||void 0===t?void 0:t.value)}),[]);return(0,a.jsxs)("div",{className:"kb-docs-editor",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Selected Bot: "}),(0,a.jsx)(l.A,{value:x,hideDescription:!0,onChange:b}),(0,a.jsx)(r.A,{style:{marginLeft:8},variant:"contained",color:"primary",size:"medium",onClick:()=>c(m,x),children:"Replay"})]}),(0,a.jsxs)("div",{className:"ellipsis",children:[(0,a.jsx)("strong",{children:"Message: "}),(0,a.jsx)("span",{children:d})]}),n&&h&&(0,a.jsxs)("div",{className:"ellipsis",children:[(0,a.jsx)("strong",{children:"Search Query: "}),(0,a.jsx)("span",{children:h})]}),(0,a.jsx)("div",{children:(0,a.jsx)(o.A,{docsList:p,onUpdate:e=>v((t=>t.map((t=>t._id===e._id?e:t))))})})]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>i,TF:()=>a,bE:()=>l,yJ:()=>r});var s=n(32026),o=n(44364);async function i(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,n){let{headers:s,noAuth:o,...i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const l="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const s=n.reduce(((e,n)=>{let s=t[n];return null===s||void 0===s?e:(s=`${n}=${encodeURIComponent(s)}`,e?`${e}&${s}`:s)}),"");s&&(e=`${e}${e.includes("?")?"&":"?"}${s}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,l?void 0:n);const r=n instanceof FormData;if(r||(n=n&&"object"===typeof n&&l?JSON.stringify(n):void 0),s||(s={}),r||(s["Content-Type"]="application/json"),s.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(s.Authorization=`Bearer ${e}`)}try{const o=await fetch(t,{...i,headers:s,body:n,method:e}),l=await o.json();if(o.ok){const{data:e,...t}=l;return delete t.status,e&&!Object.keys(t).length?e:l}throw l.message?new Error(l.message):l}catch(c){var a;throw console.error("Error calling API: ",c),null!==(a=c.message)&&void 0!==a&&a.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,s.s8)(o.jn,"/")},77382:(e,t,n)=>{n.d(t,{CA:()=>u,L3:()=>h,Mk:()=>a,bZ:()=>c,gJ:()=>d});var s=n(8478),o=n(33340),i=n(32026),l=n(59051),r=n.n(l);async function a(e){const{organizationId:t,selectedBotId:n}=o.nc.getState(),i=await s.bE(`/bot/${t}/${n}/knowledge-base`,e);return o.nc.setState((t=>{const s={...t.kbDocs||{}},o=s[n];if(!o)return{};if(s[n]=[...o],e._id){const e=s[n].findIndex((e=>e._id===i._id));e>=0?s[n][e]=i:s[n].push(i)}else s[n].push(i);return{kbDocs:s}})),i}async function c(e){const{organizationId:t,selectedBotId:n,kbDocs:i}=o.nc.getState();if(e&&Array.isArray(null===i||void 0===i?void 0:i[n]))return;const l=await s.Jt(`/bot/${t}/${n}/knowledge-base/list`);o.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:l}})))}async function d(){var e;const{organizationId:t,selectedBotId:n,botsMap:l}=o.nc.getState(),a=`/bot/${t}/${n}/knowledge-base/download`,c=await s.Jt(a),d=(null===(e=l[n])||void 0===e?void 0:e.botName)||"KBDocs";(0,i.PE)(c,d+"_"+r()().format("YYYYMMDD")+".csv")}async function h(e){if(null===e||void 0===e||!e.length)return[];const{organizationId:t,selectedBotId:n}=o.nc.getState();return await s.Jt(`/bot/${t}/${n}/knowledge-base/list?${e.map((e=>`docIds=${e}`)).join("&")}`)}async function u(e){const{organizationId:t,selectedBotId:n}=o.nc.getState();await s.TF(`/bot/${t}/${n}/knowledge-base/${e}`),o.nc.setState((t=>{var s;const o={...t.kbDocs||{}};return o[n]=null===(s=o[n])||void 0===s?void 0:s.filter((t=>t._id!==e)),{kbDocs:o}}))}},70855:(e,t,n)=>{n.d(t,{G:()=>o});var s=n(33340);function o(e){const t=(0,s.nc)((e=>e.selectedBotId)),n=(0,s.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function s(e,t){return e.replace(new RegExp(`${o(t)}+$`),"")}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function i(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function l(e,t,n){if(!t&&!e)return n;e=e||{};const s=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),i=t.substring(0,o),r=t.substring(o+1);s[i]=l(e[i],r,n)}else s[t]=n;return s}function r(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let s=0;s<e;s++)n+=t.charAt(Math.floor(36*Math.random()));return n}function c(e,t,n){if(!t&&!e)return n;e=e||{};const s=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),i=t.substring(0,o),l=t.substring(o+1);s[i]=c(e[i],l,n)}else s[t]=n;return s}function d(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s)}n.d(t,{G6:()=>l,OX:()=>a,PE:()=>d,Yq:()=>i,do:()=>c,qW:()=>r,s8:()=>s})},44364:(e,t,n)=>{n.d(t,{DX:()=>r,Og:()=>i,jn:()=>s,pA:()=>l,pR:()=>o});const s="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},52879:()=>{},87172:()=>{},60043:()=>{},78928:()=>{},20330:(e,t,n)=>{e.exports=n.p+"static/media/pdf.c65c4221835f46233e5f.png"},9257:(e,t,n)=>{e.exports=n.p+"static/media/typing.2ce5c7c546f39287aac0.gif"}}]);