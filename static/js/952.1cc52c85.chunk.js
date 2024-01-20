"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[952],{75391:(e,t,l)=>{function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;const{chatWindowWidth:l,chatWindowHeight:s,windowAlign:o,minimizeOnClick:n,paddingLeft:i,paddingBottom:a,fontType:r,fontName:c,googleFontLink:d,launcherType:h,buttonOnMobile:m,barText:g,buttonLogoUrl:u,titleText:x,bgColor:p,fontColor:v,headerPadding:f,logoWidth:j,logoHeight:b,headerLogoMargin:w,headerLogoUrl:C,visitorBorderColor:y,visitorBackgroundColor:k,visitorFontColor:N,visitorLogo:M,visitorLogoImage:z,visitorBubbleBorderCurve:L,botBorderColor:B,botBackgroundColor:S,botFontColor:F,botLogo:Z,botLogoImage:T,botBubbleBorderCurve:H,placeholder:q}=e,P="bar"===h,R={useBar:P,buttonLogoUrl:u};P&&(R.buttonOnMobile=m,R.barText=g);return{window:{width:l||"370px",height:s||"500px",align:o,minimizeOnClick:n,spacingCorner:i||"5px",spacingBottom:a||"5px",fontFamily:c,...t.window},webLink:"google-font"===r?d:void 0,launcher:R,header:{titleText:x,bgColor:p,fontColor:v,padding:f,logo:C?{width:j,height:b,margin:w,url:C}:void 0,...t.header},body:{visitorBlock:{borderColor:y,backgroundColor:k,color:N,useLogo:M&&z,logoUrl:z,borderRadius:L},assistantBlock:{borderColor:B,backgroundColor:S,color:F,useLogo:Z&&T,logoUrl:T,borderRadius:H}},composer:{placeholder:q}}}l.d(t,{K:()=>s})},52825:(e,t,l)=>{l.d(t,{Z:()=>r});var s=l(47313),o=l(26863),n=l(98477),i=l(2455),a=(l(97801),l(46417));const r=function(e){let{botDesign:t,messages:l,showTime:o,displayComponents:i,onUserMessage:r,onHistoryChange:h,onClear:m,onHide:u,onCallback:x}=e;const[p,v]=s.useState([]),[f,j]=s.useState(!1),b=s.useRef({});b.current.history=p;const{window:w={},header:C,body:y,composer:k}=t||{},N={width:w.width,height:w.height,marginBottom:w.spacingBottom,paddingRight:w.spacingCorner,paddingLeft:w.spacingCorner,fontFamily:w.fontFamily,bottom:(parseFloat(w.height)||500)+(parseFloat(w.spacingBottom)||5)+"px"};s.useEffect((()=>{v(l||[])}),[l]);const M=s.useMemo((()=>({...n.Z,...i})),[i]);return(0,a.jsx)("div",{className:"chat-container",style:N,children:(0,a.jsxs)("div",{className:"chat-window",children:[(0,a.jsx)(c,{design:C,onClear:m,onHide:u}),(0,a.jsx)(d,{design:y,messages:p,displayComponents:M,showTime:o,showLoader:f,onCallback:x}),(0,a.jsx)(g,{design:k,onSend:r?e=>{const t=[...b.current.history,{role:"user",type:"text",content:e}],l=t.length;v(t),null===h||void 0===h||h(t),j(!0),r(e).then((e=>{const t=[...b.current.history];Array.isArray(e)?t.splice(l,0,...e):t.splice(l,0,e),v(t),null===h||void 0===h||h(t)})).finally((()=>{j(!1)}))}:void 0})]})})};function c(e){let{design:t,onClear:l,onHide:s}=e;const{logo:n,bgColor:i,fontColor:r,titleText:c="Live Chat",padding:d}=t||{};return(0,a.jsxs)("div",{className:"header",style:{backgroundColor:i,padding:d,height:d?"initial":void 0},children:[(0,a.jsxs)("div",{className:"icon-block",children:[!n&&o.K8,n&&(0,a.jsx)("img",{src:n.url,alt:"",style:{width:n.width,height:n.height,margin:n.margin}})]}),(0,a.jsx)("div",{className:"title-block",children:(0,a.jsx)("span",{className:"title",style:{color:r},children:c})}),(s||l)&&(0,a.jsxs)("div",{className:"controls-block",children:[s&&(0,a.jsx)("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:s,children:o.UF}),l&&(0,a.jsx)("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:l,children:o.$I})]})]})}function d(e){let{messages:t,showTime:l,displayComponents:o,showLoader:n,design:r={},onCallback:c}=e;const d=s.useRef();return s.useEffect((()=>{d.current&&setTimeout((()=>d.current.scrollTo({top:d.current.scrollHeight,behavior:"smooth"})),30)}),[t]),(0,a.jsxs)("div",{className:"chat-body",ref:d,children:[null===t||void 0===t?void 0:t.map(((e,t)=>(0,a.jsx)(h,{message:e,displayComponents:o,showTime:l,design:r,onCallback:c},t))),n&&(0,a.jsx)(h,{message:{role:"assistant",type:"loader"},design:r,children:(0,a.jsx)("img",{src:i,alt:"",style:{height:"42px"}})})]})}function h(e){let{message:t,displayComponents:l,showTime:s,children:n,design:i,onCallback:r}=e;const{role:c,contentType:d,type:h,createdAt:g,...u}=t,x="user"===c,p=(x?null===i||void 0===i?void 0:i.visitorBlock:null===i||void 0===i?void 0:i.assistantBlock)||{},{useLogo:v,logoUrl:f,...j}=p,b={width:"24px",height:"24px"};if(!n){const e=l[d||h]||l.default;n=(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"content",style:j,children:[(0,a.jsx)(e,{...u,type:h,isUser:x,onCallback:r}),s&&(0,a.jsx)("div",{className:"message-time "+(x?"user":"system"),children:m(g)})]})})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"message "+(x?"user-message":"system-message"),children:[!x&&(0,a.jsx)("div",{className:"chat-logo",children:v?(0,a.jsx)("img",{src:f,alt:"assistant",style:b}):o.f7}),n,x&&(0,a.jsx)("div",{className:"chat-logo",children:v?(0,a.jsx)("img",{src:f,alt:"you",style:b}):o.sN})]})})}function m(e){if("string"===typeof e&&(e=new Date(e)),!(e instanceof Date)||isNaN(e))return null;let t=e.getHours(),l=e.getMinutes();const s=t>=12?"PM":"AM";t%=12,t=t||12,l=l<10?"0"+l:l;return"".concat(t,":").concat(l," ").concat(s)}function g(e){let{design:t,onSend:l}=e;const{placeholder:n="Type your message..."}=t||{},[i,r]=s.useState(""),c=()=>{l&&(l(i),r(""))},d=e=>{13===e.keyCode&&c()},h=s.useCallback((e=>{const t=e.currentTarget.value;r(t)}),[]);return(0,a.jsxs)("div",{className:"message-block",children:[(0,a.jsx)("input",{value:i,placeholder:n,disabled:!l,onChange:h,onKeyDown:d}),(0,a.jsx)("div",{role:"button",tabIndex:0,className:"send-icon",disabled:!l,onClick:c,onKeyDown:d,children:o.hZ})]})}},26863:(e,t,l)=>{l.d(t,{$I:()=>i,E:()=>u,K8:()=>r,UF:()=>n,WG:()=>o,f7:()=>h,hZ:()=>a,nR:()=>m,r$:()=>g,sN:()=>c,yj:()=>d});var s=l(46417);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"16px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0 0 24 24";return(0,s.jsx)("svg",{width:e,height:e,viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"})})},n=o(),i=(0,s.jsx)("svg",{fill:"currentColor",width:"16px",height:"16px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0",fillRule:"evenodd"})}),a=(0,s.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 1024 1024",version:"1.1",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("defs",{}),(0,s.jsx)("path",{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"})]}),r=(0,s.jsx)("span",{style:{fontSize:"22px"},children:"\ud83d\udfe2"}),c=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",height:"24px",width:"24px",children:[(0,s.jsx)("path",{fill:"#42c3cf",d:"M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"}),(0,s.jsx)("circle",{cx:24,cy:16,r:12,fill:"#42c3cf"})]}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24px";return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:e,width:e,children:[(0,s.jsx)("path",{fill:"#8a6845",d:"M7 23V9C7 4.3 10.8.5 15.5.5S24 4.3 24 9v14"}),(0,s.jsx)("path",{fill:"#745539",d:"M11 9.5V12c0 2.3 1.2 4.3 3 5.5v3.6l-2 .1v.5c.1.3.2 1.6.3 1.8h10.3c.1-.3.2-.6.3-.8l-1.9-.6v-4.6c1.8-1.2 3-3.2 3-5.5V9.5H11z"}),(0,s.jsx)("path",{fill:"#745539",d:"M16.5.6c-.3 0-.7-.1-1-.1C10.8.5 7 4.3 7 9v14h2V9c0-4.4 3.3-7.9 7.5-8.4z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M24.6 22.4L21 21.2c-.5 2.8-5.4 5-5.4 5s-4.9-2.2-5.4-5l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h25v-4.4c0-2.1-1.4-4.1-3.4-4.7z"}),(0,s.jsx)("path",{fill:"#4b6c85",d:"M14.5 25.7c-1.1-.6-2.8-1.7-3.8-3.1-.3-.5-.6-.9-.7-1.4l-3.6 1.2C4.4 23 3 25 3 27.1v4.4h2v-4.1c0-1.7 1.1-3.3 2.7-3.8.8-.3 1.7-.1 2.4.5l1.2.9c1.2.8 2.7 1.2 4.2 1.2 0 0-.7-.3-1-.5z"}),(0,s.jsx)("path",{fill:"#004463",d:"M20.5 16h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c1.4 0 2.5-1.1 2.5-2.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 1.9-1.6 3.5-3.5 3.5z"}),(0,s.jsx)("path",{fill:"#f0c9ae",d:"M19 20.5v-3h-7v3l-2 .6c.5 2.8 5.4 5 5.4 5s4.9-2.2 5.4-5l-1.8-.6zM20.9 21.2h.1z"}),(0,s.jsx)("path",{fill:"#4b6c85",d:"M28 31.5v-4.4c0-.9-.3-1.8-.7-2.6-3 .4-5.3 2.9-5.3 6v1h6zM3 31.5v-4.4c0-.9.3-1.8.7-2.6 3 .4 5.3 2.9 5.3 6v1H3z"}),(0,s.jsx)("path",{fill:"#40657c",d:"M5.7 25.2c-.6-.3-1.3-.5-2-.6l-.3.6v.1c-.1.2-.1.4-.2.5 0 .1 0 .2-.1.2 0 .1-.1.3-.1.4V31.5h2v-4.1c0-.8.3-1.6.7-2.2z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M10 12.5H8c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2v3zM24 12.5h-3v-3h2c.6 0 1 .4 1 1v2z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M14 18.5v-1h-2v3l-2 .6c.5 2.8 5.4 5 5.4 5h.1c.2-.1.5-.2.9-.5-1.1-.6-2.8-1.7-3.8-3-.2-.3-.1-.7.2-.8l.3-.1c.4-.1.7-.5.7-.9v-2.3z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M19 17.5h-7v1c1 .6 2.2 1 3.5 1 1.3 0 2.5-.4 3.5-1v-1z"}),(0,s.jsx)("path",{fill:"#f0c9ae",d:"M20.9 21.2h.1zM15 9.5c-1.9 0-3.4-1.3-3.9-3H11v1c0 1.1-.9 2-2 2V12c0 3.6 2.9 6.5 6.5 6.5S22 15.6 22 12V9.5h-7z"}),(0,s.jsx)("path",{fill:"#e2b698",d:"M13.6 17.9C11.9 16 11 13.6 11 11.1v-.9c.3-.2.5-.4.7-.6.7 1.1 1.9 1.9 3.3 1.9h7v-2h-7c-.2 0-.4 0-.6-.1-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1-.2-.1-.3-.1-.5-.2h-.1c-.2-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.2-.2-.5-.4-.7-.7-.1-.2-.3-.4-.4-.6 0-.1-.1-.1-.1-.2-.1-.3-.2-.5-.3-.8H11v1c0 1.1-.9 2-2 2V12.9c0 .2 0 .3.1.5 0 .1 0 .2.1.2 0 .1.1.3.1.4 0 .1.1.2.1.2.1.1.1.3.2.4 0 .1.1.1.1.2.1.2.2.3.2.4l.1.1c.1.2.2.3.4.5.9 1.1 2.1 1.9 3.6 2.3l-.4-.2z"}),(0,s.jsx)("path",{fill:"#004463",d:"M22.4 14.1c-.5.5-1.1.9-1.9.9h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c1.3 0 2.5-.8 3.1-1.9h-1.2z"}),(0,s.jsx)("path",{fill:"#607d95",d:"M17.5 16.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1z"})]})},h=d(),m=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,s.jsx)("path",{fill:"currentColor",d:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"})}),g=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",viewBox:"0 0 1792 1792",children:(0,s.jsx)("path",{fill:"currentColor",d:"M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"})}),u=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"32",viewBox:"4 6 18 12",className:"svg-icon-caret-up",children:(0,s.jsx)("path",{fill:"currentColor",d:"M5.161 14.908c-.707.809-.133 2.073.94 2.073h11.797c1.074 0 1.648-1.265.94-2.073l-5.521-6.31a1.75 1.75 0 00-2.634 0l-5.522 6.31zm1.492.573l5.159-5.896a.25.25 0 01.376 0l5.16 5.896H6.652z"})})},43686:(e,t,l)=>{l.d(t,{Z:()=>a});var s=l(90897),o=l(46417);const n={pdf:s},i={display:"block",marginBottom:"15px"};const a=function(e){let{media:t=[],content:l}=e;const{type:a,name:r,url:c}=t[0]||{},d=n[null===a||void 0===a?void 0:a.toLowerCase()]||s;return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{style:i,children:l||"For more information, please refer to below ".concat(a.toUpperCase()," for more details")}),(0,o.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",width:200,children:(0,o.jsx)("img",{src:d,alt:r,width:60,className:"media-style"})}),(null===t||void 0===t?void 0:t.length)>1&&t.map(((e,t)=>(0,o.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",style:{display:"block"},children:e.name},t)))]})}},95110:(e,t,l)=>{l.d(t,{Z:()=>a});var s=l(47313),o=l(15244),n=l(46417);const i={display:"block",marginBottom:"15px"};const a=function(e){let{media:t=[],content:l,onCallback:a}=e;const[r,c]=s.useState(!1),d=s.useCallback((()=>{c(!0),null===a||void 0===a||a("toggleFS",{isFullScreen:!0})}),[a]),h=s.useCallback((()=>{c(!1),null===a||void 0===a||a("toggleFS",{isFullScreen:!1})}),[a]),{url:m,name:g}=t[0]||{};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{style:i,children:l||"Please refer to below image for more details"}),(0,n.jsx)("img",{alt:g,src:m,width:200,className:"media-style",tabIndex:0,onClick:d})]}),r&&(0,n.jsx)(o.Z,{media:t,type:"image",onClose:h})]})}},12543:(e,t,l)=>{l.d(t,{Z:()=>i});var s=l(47313),o=l(99007),n=(l(35724),l(58618),l(46417));const i=function(e){let{content:t,profile:l,updateContact:i}=e;const[a,r]=s.useState({name:"",email:"",phone:""}),[c,d]=s.useState({}),[h,m]=s.useState(!1),{isNameTaken:g,isPhoneNumberTaken:u,isEmailTaken:x}=l||{},{name:p,email:v,phone:f}=a,j=!((g||p.trim())&&(x||v.trim())&&(u||f.trim().length>=5));return(0,n.jsx)("div",{className:"message-box-form",children:(0,n.jsxs)("div",{className:"block",style:{boxSizing:"border-box"},children:[(0,n.jsx)("span",{className:"info-text",children:t||"Please enter your contact Information"}),!g&&(0,n.jsx)("input",{type:"text",className:"text-box mb-2"+(c.name?" error":""),value:a.name,onChange:e=>{r((t=>({...t,name:e.target.value}))),d((e=>({...e,name:!1})))},placeholder:"Name *"}),!x&&(0,n.jsx)("input",{type:"text",className:"text-box mb-2"+(c.email?" error":""),value:a.email,onChange:e=>{r((t=>({...t,email:e.target.value}))),d((e=>({...e,email:!1})))},placeholder:"Email *"}),!u&&(0,n.jsx)(o.sb,{className:c.email?" error":"",value:a.phone||"",defaultCountry:"in",onChange:(e,t)=>{let{inputValue:l}=t;e&&e!==l&&(r((t=>({...t,phone:e.trim(),dialCode:l}))),d((e=>({...e,phone:!1}))))},disableFormatting:!0,inputProps:{placeholder:"Phone number *"}}),(0,n.jsx)("button",{className:"save-form",onClick:async()=>{const e=function(e,t){const l={},{isNameTaken:s,isPhoneNumberTaken:o,isEmailTaken:n}=t||{};var i,a;s||(l.name=!(null!==(i=e.name)&&void 0!==i&&i.trim().length));n||(l.email=!function(e){var t;if(e=null===(t=e)||void 0===t?void 0:t.trim(),!e)return!1;return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}(e.email));o||(l.phone=(null===(a=e.phone)||void 0===a?void 0:a.length)<8);return!!Object.values(l).some((e=>e))&&l}(a,l);d(e||{}),e||(m(!0),await i({method:"lead-form",contact:a}),m(!1))},disabled:j||h,children:h?"Please wait...":"Submit"})]})})}},15244:(e,t,l)=>{l.d(t,{Z:()=>c});var s=l(47313),o=l(1168),n=l(26863),i=(l(47586),l(46417));const a=(e,t)=>"image"===e.type?(0,i.jsx)("img",{className:"media-renderer",src:e.url,alt:e.name,onLoad:t}):"video"===e.type?(0,i.jsx)("video",{className:"media-renderer",src:e.url,title:e.name}):"pdf"===e.type?(0,i.jsx)("iframe",{className:"media-renderer",src:e.url,title:e.name,onLoad:t}):null,r=(0,n.WG)("52px","0 0 24 24");const c=function(e){let{onClose:t,media:l}=e;const[c,d]=s.useState(0),[h,m]=s.useState(!1),g=l[c];return o.createPortal((0,i.jsxs)("div",{className:"lp-light-box",children:[(0,i.jsx)("div",{className:"close-icon",onClick:t,title:"Click to close",children:r}),(0,i.jsxs)("div",{className:"nav-button-container "+(l.length>1?"multi":"single"),children:[(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{m(!0);const e=(c-1+l.length)%l.length;d(e)},children:n.r$}),(0,i.jsxs)("div",{className:"media-container",children:[h&&(0,i.jsx)("div",{children:"Loading..."}),a(g,(()=>{m(!1)}))]}),(0,i.jsx)("div",{className:"nav-icon",onClick:()=>{m(!0);const e=(c+1)%l.length;d(e)},children:n.nR})]})]}),document.getElementsByTagName("body")[0])}},23248:(e,t,l)=>{l.d(t,{Z:()=>n});var s=l(47313),o=l(46417);const n=function(e){let{content:t}=e;return t.split("\n").map(((e,t)=>{if(!e)return(0,o.jsx)("br",{},t);const l=/((https?:\/\/[^\s]+)|(?:\[.*?\]\(.*?\)))/g,n=e.split(l).filter(((e,t,l)=>e&&l.indexOf(e)===t));return(0,o.jsxs)(s.Fragment,{children:[!!t&&(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:n.map(((e,t)=>{if(e.match(l)){if(e.startsWith("[")&&e.endsWith(")")){const l=e.match(/\[(.*?)\]\((.*?)\)/),s=l[1],n=l[2];return(0,o.jsx)(i,{href:n,children:s},t)}return(0,o.jsx)(i,{href:e.endsWith(".")?e.substring(0,e.length-1):e,children:e},t)}return(0,o.jsx)("span",{children:e},t)}))})]},t)}))};function i(e){let{href:t,children:l,...s}=e;return(0,o.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",style:{cursor:"pointer"},...s,children:l})}},43088:(e,t,l)=>{l.d(t,{Z:()=>i});var s=l(47313),o=l(15244),n=l(46417);const i=function(e){let{media:t=[],content:l,onCallback:i}=e;const[a,r]=s.useState(!1),c=s.useCallback((()=>{r(!0),null===i||void 0===i||i("toggleFS",{isFullScreen:!0})}),[i]),d=s.useCallback((()=>{r(!1),null===i||void 0===i||i("toggleFS",{isFullScreen:!1})}),[i]),{url:h,name:m}=t[0]||{};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:l||"Please refer to below video for more details"}),(0,n.jsx)("video",{src:h,width:200,className:"media-style",title:m,onClick:c})]}),a&&(0,n.jsx)(o.Z,{media:t,type:"image",onClose:d})]})}},98477:(e,t,l)=>{l.d(t,{Z:()=>r});var s=l(43686),o=l(95110),n=l(12543),i=l(23248),a=l(43088);const r={default:i.Z,image:o.Z,form:i.Z,lead:n.Z,file:s.Z,pdf:s.Z,text:i.Z,video:a.Z}},97801:()=>{},58618:()=>{},47586:()=>{},90897:(e,t,l)=>{e.exports=l.p+"static/media/pdf.c65c4221835f46233e5f.png"},2455:(e,t,l)=>{e.exports=l.p+"static/media/typing.2ce5c7c546f39287aac0.gif"}}]);