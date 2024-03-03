"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[674],{78023:(e,t,l)=>{function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;const{chatWindowWidth:l,chatWindowHeight:o,windowAlign:n,minimizeOnClick:i,paddingLeft:r,paddingBottom:a,fontType:c,fontName:d,remoteFontLink:h,launcherType:g,buttonOnMobile:m,barText:u,titleText:p,subTitleText:x,bgColor:v,fontColor:f,headerPadding:b,logoWidth:j,logoHeight:C,headerLogoMargin:w,headerFontSize:y,botLogo:k,visitorBorderColor:N,visitorBackgroundColor:M,visitorFontColor:z,visitorMessageLogo:S,visitorBubbleBorderCurve:B,botBorderColor:L,botBackgroundColor:A,botFontColor:T,botMessageLogo:H,botBubbleBorderCurve:F,messageBubbleLogo:V,fontSize:q,botChatButton:P,placeholder:O}=e,{url:I}=k||{},{url:R}=S||{},{url:W}=H||{},{url:_}=P||{},U={launcherType:g,buttonLogoUrl:_};"bar"===g&&(U.buttonOnMobile=m&&window.outerWidth<=700,U.barText=u);const E=s(v);return{window:{width:l||"370px",height:o||"500px",align:n,minimizeOnClick:i,spacingCorner:r||"5px",spacingBottom:a||"5px",fontFamily:d,...t.window},webLink:"remote"===c?h:void 0,launcher:U,header:{titleText:p,subTitleText:x,bgColor:v,secBgColor:E,fontColor:f,padding:b,fontSize:y,logo:I?{width:j,height:C,margin:w,url:I}:void 0,...t.header},body:{visitorBlock:{borderColor:N,backgroundColor:M,color:z,useLogo:!!R,logoUrl:R,borderRadius:B,showLogo:V,fontSize:q},assistantBlock:{borderColor:L,backgroundColor:A,color:T,useLogo:!!W,logoUrl:W,borderRadius:F,showLogo:V,fontSize:q}},composer:{placeholder:O,pColor:v,bgColor:s(v,25),secBgColor:E,iconColor:f}}}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70;if(!e)return e;let l=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return l=Math.min(255,l+t),o=Math.min(255,o+t),s=Math.min(255,s+t),"#"+(1<<24|l<<16|o<<8|s).toString(16).slice(1)}l.d(t,{Y:()=>o})},15820:(e,t,l)=>{l.d(t,{A:()=>a});var o=l(9950),s=l(28891),n=l(1628),i=l(9257),r=(l(52879),l(44414));const a=function(e){let{botDesign:t,messages:l,showTime:s,displayComponents:i,onUserMessage:a,onHistoryChange:h,onClear:g,onHide:u,onCallback:p}=e;const[x,v]=o.useState([]),[f,b]=o.useState(!1),j=o.useRef({});j.current.history=x,j.current.onUserMessage=a,j.current.onHistoryChange=h;const{window:C={},header:w,body:y,composer:k}=t||{},N={width:C.width,height:C.height,marginBottom:C.spacingBottom,paddingRight:C.spacingCorner,paddingLeft:C.spacingCorner,fontFamily:C.fontFamily,bottom:(parseFloat(C.height)||500)+(parseFloat(C.spacingBottom)||5)+"px"},M=o.useCallback((e=>{const{history:t,onHistoryChange:l,onUserMessage:o}=j.current,s=[...t,{role:"user",type:"text",content:e}],n=s.length;v(s),null===l||void 0===l||l(s),b(!0),o(e).then((e=>{const t=[...j.current.history];Array.isArray(e)?t.splice(n,0,...e):t.splice(n,0,e),v(t),null===l||void 0===l||l(t)})).finally((()=>{b(!1)}))}),[]);o.useEffect((()=>{v(l||[])}),[l]);const z=o.useMemo((()=>({...n.A,...i})),[i]);return(0,r.jsx)("div",{className:"chat-container",style:N,children:(0,r.jsxs)("div",{className:"chat-window",children:[(0,r.jsx)(c,{design:w,onClear:g,onHide:u}),(0,r.jsx)(d,{design:y,messages:x,displayComponents:z,showTime:s,showLoader:f,onCallback:p}),(0,r.jsx)(m,{design:k,onSend:a?M:void 0})]})})};function c(e){let{design:t,onClear:l,onHide:o}=e;const{logo:n,bgColor:i,secBgColor:a,fontColor:c,titleText:d="Live Chat",subTitleText:h,padding:g,fontSize:m}=t||{};return(0,r.jsxs)("div",{className:"header",style:{background:"linear-gradient(to right, "+i+", "+a+")",padding:g,height:g?"initial":void 0},children:[!n&&(0,r.jsx)("div",{className:"icon-block",children:s.N6}),n&&(0,r.jsx)("div",{className:"image-block",children:(0,r.jsx)("img",{src:n.url,alt:"",style:{width:n.width,height:n.height,margin:n.margin}})}),(0,r.jsxs)("div",{className:"title-block",children:[(0,r.jsx)("span",{className:"title",style:{color:c,fontSize:m},children:d}),h&&(0,r.jsx)("span",{className:"sub-title",style:{color:c,fontSize:m},children:h})]}),(o||l)&&(0,r.jsxs)("div",{className:"controls-block",style:o&&l?{width:"110px"}:void 0,children:[o&&(0,r.jsx)("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:o,children:s.ut}),l&&(0,r.jsx)("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:l,children:s.pS})]})]})}function d(e){let{messages:t,showTime:l,displayComponents:s,showLoader:n,design:a={},onCallback:c}=e;const d=o.useRef();return o.useEffect((()=>{d.current&&setTimeout((()=>d.current.scrollTo({top:d.current.scrollHeight,behavior:"smooth"})),30)}),[t]),(0,r.jsxs)("div",{className:"chat-body",ref:d,children:[null===t||void 0===t?void 0:t.map(((e,t)=>(0,r.jsx)(h,{message:e,displayComponents:s,showTime:l,design:a,onCallback:c},t))),n&&(0,r.jsx)(h,{message:{role:"assistant",type:"loader"},design:a,children:(0,r.jsx)("img",{src:i,alt:"",style:{height:"42px"}})})]})}function h(e){let{message:t,displayComponents:l,showTime:o,children:n,design:i,onCallback:a}=e;const{role:c,contentType:d,type:h,createdAt:m,...u}=t,p="user"===c,x=(p?null===i||void 0===i?void 0:i.visitorBlock:null===i||void 0===i?void 0:i.assistantBlock)||{},{useLogo:v,logoUrl:f,showLogo:b,...j}=x,C={width:"24px",height:"24px"};if(!n){const e=l[d||h]||l.default;n=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"content",style:j,children:[(0,r.jsx)(e,{...u,type:h,isUser:p,onCallback:a}),o&&(0,r.jsx)("div",{className:"message-time "+(p?"user":"system"),children:g(m)})]})})}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"message "+(b?"":"no-logo ")+(p?"user-message":"system-message"),children:[b&&!p&&(0,r.jsx)("div",{className:"chat-logo",children:v?(0,r.jsx)("img",{src:f,alt:"assistant",style:C}):s.iO}),n,b&&p&&(0,r.jsx)("div",{className:"chat-logo",children:v?(0,r.jsx)("img",{src:f,alt:"you",style:C}):s.tI})]})})}function g(e){if("string"===typeof e&&(e=new Date(e)),!(e instanceof Date)||isNaN(e))return null;let t=e.getHours(),l=e.getMinutes();const o=t>=12?"PM":"AM";t%=12,t=t||12,l=l<10?"0"+l:l;return"".concat(t,":").concat(l," ").concat(o)}function m(e){let{design:t,onSend:l}=e;const{placeholder:n="Type your message...",pColor:i,bgColor:a,secBgColor:c,iconColor:d}=t||{},[h,g]=o.useState(""),m=()=>{l&&null!==h&&void 0!==h&&h.trim()&&(l(h.trim()),g(""))},u=e=>{13===e.keyCode&&m()},p=o.useCallback((e=>{const t=e.currentTarget.value;g(t)}),[]);return(0,r.jsxs)("div",{className:"message-block",children:[(0,r.jsx)("input",{style:{borderColor:c},value:h,placeholder:n,disabled:!l,onChange:p,onKeyDown:u}),(0,r.jsx)("div",{style:{backgroundColor:a,outlineColor:i,color:d},role:"button",tabIndex:0,className:"send-icon",disabled:!l,onClick:m,onKeyDown:u,children:s.AO})]})}},28891:(e,t,l)=>{l.d(t,{AO:()=>r,N6:()=>a,Or:()=>m,_h:()=>h,bh:()=>g,iO:()=>d,pS:()=>i,ri:()=>s,tI:()=>c,ut:()=>n});var o=l(44414);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"16px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0 0 24 24";return(0,o.jsx)("svg",{width:e,height:e,viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"})})},n=s(),i=(0,o.jsx)("svg",{fill:"currentColor",width:"16px",height:"16px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0",fillRule:"evenodd"})}),r=(0,o.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 1024 1024",version:"1.1",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("defs",{}),(0,o.jsx)("path",{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"})]}),a=(0,o.jsx)("span",{style:{fontSize:"22px"},children:"\ud83d\udfe2"}),c=(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",height:"24px",width:"24px",children:[(0,o.jsx)("path",{fill:"#42c3cf",d:"M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"}),(0,o.jsx)("circle",{cx:24,cy:16,r:12,fill:"#42c3cf"})]}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24px";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:e,width:e,children:[(0,o.jsx)("path",{fill:"#8a6845",d:"M7 23V9C7 4.3 10.8.5 15.5.5S24 4.3 24 9v14"}),(0,o.jsx)("path",{fill:"#745539",d:"M11 9.5V12c0 2.3 1.2 4.3 3 5.5v3.6l-2 .1v.5c.1.3.2 1.6.3 1.8h10.3c.1-.3.2-.6.3-.8l-1.9-.6v-4.6c1.8-1.2 3-3.2 3-5.5V9.5H11z"}),(0,o.jsx)("path",{fill:"#745539",d:"M16.5.6c-.3 0-.7-.1-1-.1C10.8.5 7 4.3 7 9v14h2V9c0-4.4 3.3-7.9 7.5-8.4z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M24.6 22.4L21 21.2c-.5 2.8-5.4 5-5.4 5s-4.9-2.2-5.4-5l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h25v-4.4c0-2.1-1.4-4.1-3.4-4.7z"}),(0,o.jsx)("path",{fill:"#4b6c85",d:"M14.5 25.7c-1.1-.6-2.8-1.7-3.8-3.1-.3-.5-.6-.9-.7-1.4l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h2v-4.1c0-1.7 1.1-3.3 2.7-3.8.8-.3 1.7-.1 2.4.5l1.2.9c1.2.8 2.7 1.2 4.2 1.2 0 0-.7-.3-1-.5z"}),(0,o.jsx)("path",{fill:"#004463",d:"M20.5 16h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c1.4 0 2.5-1.1 2.5-2.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 1.9-1.6 3.5-3.5 3.5z"}),(0,o.jsx)("path",{fill:"#f0c9ae",d:"M19 20.5v-3h-7v3l-2 .6c.5 2.8 5.4 5 5.4 5s4.9-2.2 5.4-5l-1.8-.6zM20.9 21.2h.1z"}),(0,o.jsx)("path",{fill:"#4b6c85",d:"M28 31.5v-4.4c0-.9-.3-1.8-.7-2.6-3 .4-5.3 2.9-5.3 6v1h6zM3 31.5v-4.4c0-.9.3-1.8.7-2.6 3 .4 5.3 2.9 5.3 6v1H3z"}),(0,o.jsx)("path",{fill:"#40657c",d:"M5.7 25.2c-.6-.3-1.3-.5-2-.6l-.3.6v.1c-.1.2-.1.4-.2.5 0 .1 0 .2-.1.2 0 .1-.1.3-.1.4V31.5h2v-4.1c0-.8.3-1.6.7-2.2z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M10 12.5H8c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2v3zM24 12.5h-3v-3h2c.6 0 1 .4 1 1v2z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M14 18.5v-1h-2v3l-2 .6c.5 2.8 5.4 5 5.4 5h.1c.2-.1.5-.2.9-.5-1.1-.6-2.8-1.7-3.8-3-.2-.3-.1-.7.2-.8l.3-.1c.4-.1.7-.5.7-.9v-2.3z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M19 17.5h-7v1c1 .6 2.2 1 3.5 1 1.3 0 2.5-.4 3.5-1v-1z"}),(0,o.jsx)("path",{fill:"#f0c9ae",d:"M20.9 21.2h.1zM15 9.5c-1.9 0-3.4-1.3-3.9-3H11v1c0 1.1-.9 2-2 2V12c0 3.6 2.9 6.5 6.5 6.5S22 15.6 22 12V9.5h-7z"}),(0,o.jsx)("path",{fill:"#e2b698",d:"M13.6 17.9C11.9 16 11 13.6 11 11.1v-.9c.3-.2.5-.4.7-.6.7 1.1 1.9 1.9 3.3 1.9h7v-2h-7c-.2 0-.4 0-.6-.1-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1-.2-.1-.3-.1-.5-.2h-.1c-.2-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.2-.2-.5-.4-.7-.7-.1-.2-.3-.4-.4-.6 0-.1-.1-.1-.1-.2-.1-.3-.2-.5-.3-.8H11v1c0 1.1-.9 2-2 2V12.9c0 .2 0 .3.1.5 0 .1 0 .2.1.2 0 .1.1.3.1.4 0 .1.1.2.1.2.1.1.1.3.2.4 0 .1.1.1.1.2.1.2.2.3.2.4l.1.1c.1.2.2.3.4.5.9 1.1 2.1 1.9 3.6 2.3l-.4-.2z"}),(0,o.jsx)("path",{fill:"#004463",d:"M22.4 14.1c-.5.5-1.1.9-1.9.9h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c1.3 0 2.5-.8 3.1-1.9h-1.2z"}),(0,o.jsx)("path",{fill:"#607d95",d:"M17.5 16.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1z"})]})}(),h=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,o.jsx)("path",{fill:"currentColor",d:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"})}),g=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,o.jsx)("path",{fill:"currentColor",d:"M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"})}),m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32px";return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 512 512",className:"svg-icon-caret-up",children:(0,o.jsx)("path",{fill:"currentColor",d:"M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"})})}()},47587:(e,t,l)=>{l.d(t,{A:()=>r});var o=l(20330),s=l(44414);const n={pdf:o},i={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:l}=e;const{type:r,name:a,url:c}=t[0]||{},d=n[null===r||void 0===r?void 0:r.toLowerCase()]||o;return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:i,children:l||"Please refer to below ".concat(r.toUpperCase()," for more details")}),(0,s.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",width:200,children:(0,s.jsx)("img",{src:d,alt:a,width:60,className:"media-style"})}),(null===t||void 0===t?void 0:t.length)>1&&t.map(((e,t)=>(0,s.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",style:{display:"block"},children:e.name},t)))]})}},68218:(e,t,l)=>{l.d(t,{A:()=>r});var o=l(9950),s=l(30249),n=l(44414);const i={display:"block",marginBottom:"15px"};const r=function(e){let{media:t=[],content:l,onCallback:r}=e;const[a,c]=o.useState(!1),d=o.useCallback((()=>{c(!0),null===r||void 0===r||r("toggleFS",{isFullScreen:!0})}),[r]),h=o.useCallback((()=>{c(!1),null===r||void 0===r||r("toggleFS",{isFullScreen:!1})}),[r]),{url:g,name:m}=t[0]||{};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{style:i,children:l||"Please refer to below image for more details"}),(0,n.jsx)("img",{alt:m,src:g,width:200,className:"media-style",tabIndex:0,onClick:d})]}),a&&(0,n.jsx)(s.A,{media:t,type:"image",onClose:h})]})}},63462:(e,t,l)=>{l.d(t,{A:()=>i});var o=l(9950),s=l(90771),n=(l(13953),l(87172),l(44414));const i=function(e){let{content:t,profile:l,updateContact:i}=e;const[r,a]=o.useState({name:"",email:"",phone:""}),[c,d]=o.useState({}),[h,g]=o.useState(!1),{isNameTaken:m,isPhoneNumberTaken:u,isEmailTaken:p}=l||{},{name:x,email:v,phone:f}=r,b=!((m||x.trim())&&(p||v.trim())&&(u||f.trim().length>=5));return(0,n.jsx)("div",{className:"message-box-form",children:(0,n.jsxs)("div",{className:"block",style:{boxSizing:"border-box"},children:[(0,n.jsx)("span",{className:"info-text",children:t||"Please enter your contact Information"}),!m&&(0,n.jsx)("input",{type:"text",className:"text-box mb-2"+(c.name?" error":""),value:r.name,onChange:e=>{a((t=>({...t,name:e.target.value}))),d((e=>({...e,name:!1})))},placeholder:"Name *"}),!p&&(0,n.jsx)("input",{type:"text",className:"text-box mb-2"+(c.email?" error":""),value:r.email,onChange:e=>{a((t=>({...t,email:e.target.value}))),d((e=>({...e,email:!1})))},placeholder:"Email *"}),!u&&(0,n.jsx)(s.LR,{className:c.email?" error":"",value:r.phone||"",defaultCountry:"in",onChange:(e,t)=>{const{inputValue:l,country:{iso2:o}={}}=t;e&&e!==l&&(a((t=>({...t,phone:e.trim(),dialCode:l,countryCode:o}))),d((e=>({...e,phone:!1}))))},disableFormatting:!0,inputProps:{placeholder:"Phone number *"}}),(0,n.jsx)("button",{className:"save-form",onClick:async()=>{const e=function(e,t){const l={},{isNameTaken:o,isPhoneNumberTaken:s,isEmailTaken:n}=t||{};var i,r;o||(l.name=!(null!==(i=e.name)&&void 0!==i&&i.trim().length));n||(l.email=!function(e){var t;if(e=null===(t=e)||void 0===t?void 0:t.trim(),!e)return!1;return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}(e.email));s||(l.phone=(null===(r=e.phone)||void 0===r?void 0:r.length)<8);return!!Object.values(l).some((e=>e))&&l}(r,l);d(e||{}),e||(g(!0),await i({method:"lead-form",contact:r}),g(!1))},disabled:b||h,children:h?"Please wait...":"Submit"})]})})}},30249:(e,t,l)=>{l.d(t,{A:()=>c});var o=l(9950),s=l(17119),n=l(28891),i=(l(60043),l(44414));const r=(e,t)=>"image"===e.type?(0,i.jsx)("img",{className:"media-renderer",src:e.url,alt:e.name,onLoad:t}):"video"===e.type?(0,i.jsx)("video",{className:"media-renderer",src:e.url,title:e.name}):"pdf"===e.type?(0,i.jsx)("iframe",{className:"media-renderer",src:e.url,title:e.name,onLoad:t}):null,a=(0,n.ri)("52px","0 0 24 24");const c=function(e){let{onClose:t,media:l}=e;const[c,d]=o.useState(0),[h,g]=o.useState(!1),m=l[c];return s.createPortal((0,i.jsxs)("div",{className:"lp-light-box",children:[(0,i.jsx)("div",{className:"close-icon",onClick:t,title:"Click to close",children:a}),(0,i.jsxs)("div",{className:"nav-button-container "+(l.length>1?"multi":"single"),children:[(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{g(!0);const e=(c-1+l.length)%l.length;d(e)},children:n.bh}),(0,i.jsxs)("div",{className:"media-container",children:[h&&(0,i.jsx)("div",{children:"Loading..."}),r(m,(()=>{g(!1)}))]}),(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{g(!0);const e=(c+1)%l.length;d(e)},children:n._h})]})]}),document.getElementsByTagName("body")[0])}},80150:(e,t,l)=>{l.d(t,{A:()=>n});var o=l(9950),s=l(44414);const n=function(e){let{content:t}=e;return t.split("\n").map(((e,t)=>{if(!e)return(0,s.jsx)("br",{},t);const l=/((https?:\/\/[^\s]+)|(?:\[.*?\]\(.*?\)))/g,n=e.split(l).filter(((e,t,l)=>e&&l.indexOf(e)===t));return(0,s.jsxs)(o.Fragment,{children:[!!t&&(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:n.map(((e,t)=>{if(e.match(l)){if(e.startsWith("[")&&e.endsWith(")")){const l=e.match(/\[(.*?)\]\((.*?)\)/),o=l[1];let n=l[2];return n.endsWith(".")&&(n=n.slice(0,-1)),(0,s.jsx)(i,{href:n,children:o},t)}{let l=e;return e.endsWith(".")&&(l=e.slice(0,-1)),(0,s.jsx)(i,{href:l,children:e},t)}}return(0,s.jsx)("span",{children:e},t)}))})]},t)}))};function i(e){let{href:t,children:l,...o}=e;return(0,s.jsx)("a",{href:r(t,".","[","]"),rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},...o,children:l})}function r(e){for(var t=arguments.length,l=new Array(t>1?t-1:0),o=1;o<t;o++)l[o-1]=arguments[o];for(;l.includes(e[e.length-1]);)e=e.substring(0,e.length-2);for(;l.includes(e[0]);)e=e.substring(1);return e}},18924:(e,t,l)=>{l.d(t,{A:()=>i});var o=l(9950),s=l(30249),n=l(44414);const i=function(e){let{media:t=[],content:l,onCallback:i}=e;const[r,a]=o.useState(!1),c=o.useCallback((()=>{a(!0),null===i||void 0===i||i("toggleFS",{isFullScreen:!0})}),[i]),d=o.useCallback((()=>{a(!1),null===i||void 0===i||i("toggleFS",{isFullScreen:!1})}),[i]),{url:h,name:g}=t[0]||{};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:l||"Please refer to below video for more details"}),(0,n.jsx)("video",{src:h,width:200,className:"media-style",title:g,onClick:c})]}),r&&(0,n.jsx)(s.A,{media:t,type:"image",onClose:d})]})}},1628:(e,t,l)=>{l.d(t,{A:()=>a});var o=l(47587),s=l(68218),n=l(63462),i=l(80150),r=l(18924);const a={default:i.A,image:s.A,form:i.A,lead:n.A,file:o.A,pdf:o.A,text:i.A,video:r.A}},52879:()=>{},87172:()=>{},60043:()=>{},20330:(e,t,l)=>{e.exports=l.p+"static/media/pdf.c65c4221835f46233e5f.png"},9257:(e,t,l)=>{e.exports=l.p+"static/media/typing.2ce5c7c546f39287aac0.gif"}}]);