"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[557],{5187:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(9950),r=t(17119),i=t(44093),s=t(14131),l=t(25679),a=t(44414);const c=o.forwardRef((function(e,n){const{children:t,container:c,disablePortal:d=!1}=e,[u,p]=o.useState(null),f=(0,i.A)(o.isValidElement(t)?t.ref:null,n);if((0,s.A)((()=>{d||p(function(e){return"function"===typeof e?e():e}(c)||document.body)}),[c,d]),(0,s.A)((()=>{if(u&&!d)return(0,l.A)(n,u),()=>{(0,l.A)(n,null)}}),[n,u,d]),d){if(o.isValidElement(t)){const e={ref:f};return o.cloneElement(t,e)}return(0,a.jsx)(o.Fragment,{children:t})}return(0,a.jsx)(o.Fragment,{children:u?r.createPortal(t,u):u})}))},55158:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(98587),r=t(58168),i=t(9950),s=t(72004),l=t(74061),a=t(59254),c=t(48283),d=t(57191),u=t(80863),p=t(68483);function f(e){return(0,p.Ay)("MuiBackdrop",e)}(0,u.A)("MuiBackdrop",["root","invisible"]);var m=t(44414);const h=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],b=(0,a.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.invisible&&n.invisible]}})((e=>{let{ownerState:n}=e;return(0,r.A)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),v=i.forwardRef((function(e,n){var t,i,a;const u=(0,c.A)({props:e,name:"MuiBackdrop"}),{children:p,className:v,component:A="div",components:E={},componentsProps:g={},invisible:y=!1,open:x,slotProps:k={},slots:R={},TransitionComponent:T=d.A,transitionDuration:P}=u,w=(0,o.A)(u,h),S=(0,r.A)({},u,{component:A,invisible:y}),C=(e=>{const{classes:n,invisible:t}=e,o={root:["root",t&&"invisible"]};return(0,l.A)(o,f,n)})(S),I=null!=(t=k.root)?t:g.root;return(0,m.jsx)(T,(0,r.A)({in:x,timeout:P},w,{children:(0,m.jsx)(b,(0,r.A)({"aria-hidden":!0},I,{as:null!=(i=null!=(a=R.root)?a:E.Root)?i:A,className:(0,s.A)(C.root,v,null==I?void 0:I.className),ownerState:(0,r.A)({},S,null==I?void 0:I.ownerState),classes:C,ref:n,children:p}))}))}))},57191:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(58168),r=t(98587),i=t(9950),s=t(32448),l=t(14857),a=t(70576),c=t(31506),d=t(44414);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{opacity:1},entered:{opacity:1}},f=i.forwardRef((function(e,n){const t=(0,l.A)(),f={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:m,appear:h=!0,children:b,easing:v,in:A,onEnter:E,onEntered:g,onEntering:y,onExit:x,onExited:k,onExiting:R,style:T,timeout:P=f,TransitionComponent:w=s.Ay}=e,S=(0,r.A)(e,u),C=i.useRef(null),I=(0,c.A)(C,b.ref,n),N=e=>n=>{if(e){const t=C.current;void 0===n?e(t):e(t,n)}},M=N(y),F=N(((e,n)=>{(0,a.q)(e);const o=(0,a.c)({style:T,timeout:P,easing:v},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),E&&E(e,n)})),L=N(g),O=N(R),B=N((e=>{const n=(0,a.c)({style:T,timeout:P,easing:v},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),x&&x(e)})),D=N(k);return(0,d.jsx)(w,(0,o.A)({appear:h,in:A,nodeRef:C,onEnter:F,onEntered:L,onEntering:M,onExit:B,onExited:D,onExiting:O,addEndListener:e=>{m&&m(C.current,e)},timeout:P},S,{children:(e,n)=>i.cloneElement(b,(0,o.A)({style:(0,o.A)({opacity:0,visibility:"exited"!==e||A?void 0:"hidden"},p[e],T,b.props.style),ref:I},n))}))}))},44389:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(98587),r=t(58168),i=t(9950),s=t(72004),l=t(43161),a=t(44093),c=t(3511),d=t(62877),u=t(97603),p=t(67176),f=t(98727),m=t(79847);function h(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function b(e){return parseInt((0,f.A)(e).getComputedStyle(e).paddingRight,10)||0}function v(e,n,t,o,r){const i=[n,t,...o];[].forEach.call(e.children,(e=>{const n=-1===i.indexOf(e),t=!function(e){const n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&h(e,r)}))}function A(e,n){let t=-1;return e.some(((e,o)=>!!n(e)&&(t=o,!0))),t}function E(e,n){const t=[],o=e.container;if(!n.disableScrollLock){if(function(e){const n=(0,c.A)(e);return n.body===e?(0,f.A)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=(0,m.A)((0,c.A)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(b(o)+e,"px");const n=(0,c.A)(o).querySelectorAll(".mui-fixed");[].forEach.call(n,(n=>{t.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight="".concat(b(n)+e,"px")}))}let e;if(o.parentNode instanceof DocumentFragment)e=(0,c.A)(o).body;else{const n=o.parentElement,t=(0,f.A)(o);e="HTML"===(null==n?void 0:n.nodeName)&&"scroll"===t.getComputedStyle(n).overflowY?n:o}t.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{t.forEach((e=>{let{value:n,el:t,property:o}=e;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}const g=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,n){let t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&h(e.modalRef,!1);const o=function(e){const n=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);v(n,e.mount,e.modalRef,o,!0);const r=A(this.containers,(e=>e.container===n));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}mount(e,n){const t=A(this.containers,(n=>-1!==n.modals.indexOf(e))),o=this.containers[t];o.restore||(o.restore=E(o,n))}remove(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=this.modals.indexOf(e);if(-1===t)return t;const o=A(this.containers,(n=>-1!==n.modals.indexOf(e))),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&h(e.modalRef,n),v(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&h(e.modalRef,!1)}return t}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function y(e){const{container:n,disableEscapeKeyDown:t=!1,disableScrollLock:o=!1,manager:s=g,closeAfterTransition:l=!1,onTransitionEnter:f,onTransitionExited:m,children:b,onClose:v,open:A,rootRef:E}=e,y=i.useRef({}),x=i.useRef(null),k=i.useRef(null),R=(0,a.A)(k,E),[T,P]=i.useState(!A),w=function(e){return!!e&&e.props.hasOwnProperty("in")}(b);let S=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(S=!1);const C=()=>(y.current.modalRef=k.current,y.current.mount=x.current,y.current),I=()=>{s.mount(C(),{disableScrollLock:o}),k.current&&(k.current.scrollTop=0)},N=(0,d.A)((()=>{const e=function(e){return"function"===typeof e?e():e}(n)||(0,c.A)(x.current).body;s.add(C(),e),k.current&&I()})),M=i.useCallback((()=>s.isTopModal(C())),[s]),F=(0,d.A)((e=>{x.current=e,e&&(A&&M()?I():k.current&&h(k.current,S))})),L=i.useCallback((()=>{s.remove(C(),S)}),[S,s]);i.useEffect((()=>()=>{L()}),[L]),i.useEffect((()=>{A?N():w&&l||L()}),[A,L,w,l,N]);const O=e=>n=>{var o;null==(o=e.onKeyDown)||o.call(e,n),"Escape"===n.key&&229!==n.which&&M()&&(t||(n.stopPropagation(),v&&v(n,"escapeKeyDown")))},B=e=>n=>{var t;null==(t=e.onClick)||t.call(e,n),n.target===n.currentTarget&&v&&v(n,"backdropClick")};return{getRootProps:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,p.h)(e);delete t.onTransitionEnter,delete t.onTransitionExited;const o=(0,r.A)({},t,n);return(0,r.A)({role:"presentation"},o,{onKeyDown:O(o),ref:R})},getBackdropProps:function(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.A)({"aria-hidden":!0},e,{onClick:B(e),open:A})},getTransitionProps:()=>({onEnter:(0,u.A)((()=>{P(!1),f&&f()}),null==b?void 0:b.props.onEnter),onExited:(0,u.A)((()=>{P(!0),m&&m(),l&&L()}),null==b?void 0:b.props.onExited)}),rootRef:R,portalRef:F,isTopModal:M,exited:T,hasTransition:w}}var x=t(74061),k=t(44414);const R=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function T(e){const n=[],t=[];return Array.from(e.querySelectorAll(R)).forEach(((e,o)=>{const r=function(e){const n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const n=n=>e.ownerDocument.querySelector('input[type="radio"]'.concat(n));let t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort(((e,n)=>e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex)).map((e=>e.node)).concat(n)}function P(){return!0}function w(e){const{children:n,disableAutoFocus:t=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:s=T,isEnabled:l=P,open:d}=e,u=i.useRef(!1),p=i.useRef(null),f=i.useRef(null),m=i.useRef(null),h=i.useRef(null),b=i.useRef(!1),v=i.useRef(null),A=(0,a.A)(n.ref,v),E=i.useRef(null);i.useEffect((()=>{d&&v.current&&(b.current=!t)}),[t,d]),i.useEffect((()=>{if(!d||!v.current)return;const e=(0,c.A)(v.current);return v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),b.current&&v.current.focus()),()=>{r||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}}),[d]),i.useEffect((()=>{if(!d||!v.current)return;const e=(0,c.A)(v.current),n=n=>{E.current=n,!o&&l()&&"Tab"===n.key&&e.activeElement===v.current&&n.shiftKey&&(u.current=!0,f.current&&f.current.focus())},t=()=>{const n=v.current;if(null===n)return;if(!e.hasFocus()||!l()||u.current)return void(u.current=!1);if(n.contains(e.activeElement))return;if(o&&e.activeElement!==p.current&&e.activeElement!==f.current)return;if(e.activeElement!==h.current)h.current=null;else if(null!==h.current)return;if(!b.current)return;let t=[];if(e.activeElement!==p.current&&e.activeElement!==f.current||(t=s(v.current)),t.length>0){var r,i;const e=Boolean((null==(r=E.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=E.current)?void 0:i.key)),n=t[0],o=t[t.length-1];"string"!==typeof n&&"string"!==typeof o&&(e?o.focus():n.focus())}else n.focus()};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[t,o,r,l,d,s]);const g=e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0};return(0,k.jsxs)(i.Fragment,{children:[(0,k.jsx)("div",{tabIndex:d?0:-1,onFocus:g,ref:p,"data-testid":"sentinelStart"}),i.cloneElement(n,{ref:A,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),b.current=!0,h.current=e.target;const t=n.props.onFocus;t&&t(e)}}),(0,k.jsx)("div",{tabIndex:d?0:-1,onFocus:g,ref:f,"data-testid":"sentinelEnd"})]})}var S=t(5187),C=t(59254),I=t(48283),N=t(55158),M=t(80863),F=t(68483);function L(e){return(0,F.Ay)("MuiModal",e)}(0,M.A)("MuiModal",["root","hidden","backdrop"]);const O=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],B=(0,C.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.open&&t.exited&&n.hidden]}})((e=>{let{theme:n,ownerState:t}=e;return(0,r.A)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),D=(0,C.Ay)(N.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,n)=>n.backdrop})({zIndex:-1}),j=i.forwardRef((function(e,n){var t,a,c,d,u,p;const f=(0,I.A)({name:"MuiModal",props:e}),{BackdropComponent:m=D,BackdropProps:h,className:b,closeAfterTransition:v=!1,children:A,container:E,component:g,components:R={},componentsProps:T={},disableAutoFocus:P=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:N=!1,disablePortal:M=!1,disableRestoreFocus:F=!1,disableScrollLock:j=!1,hideBackdrop:K=!1,keepMounted:U=!1,onBackdropClick:W,open:q,slotProps:H,slots:Y}=f,_=(0,o.A)(f,O),z=(0,r.A)({},f,{closeAfterTransition:v,disableAutoFocus:P,disableEnforceFocus:C,disableEscapeKeyDown:N,disablePortal:M,disableRestoreFocus:F,disableScrollLock:j,hideBackdrop:K,keepMounted:U}),{getRootProps:V,getBackdropProps:Q,getTransitionProps:Z,portalRef:G,isTopModal:X,exited:J,hasTransition:$}=y((0,r.A)({},z,{rootRef:n})),ee=(0,r.A)({},z,{exited:J}),ne=(e=>{const{open:n,exited:t,classes:o}=e,r={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,x.A)(r,L,o)})(ee),te={};if(void 0===A.props.tabIndex&&(te.tabIndex="-1"),$){const{onEnter:e,onExited:n}=Z();te.onEnter=e,te.onExited=n}const oe=null!=(t=null!=(a=null==Y?void 0:Y.root)?a:R.Root)?t:B,re=null!=(c=null!=(d=null==Y?void 0:Y.backdrop)?d:R.Backdrop)?c:m,ie=null!=(u=null==H?void 0:H.root)?u:T.root,se=null!=(p=null==H?void 0:H.backdrop)?p:T.backdrop,le=(0,l.Q)({elementType:oe,externalSlotProps:ie,externalForwardedProps:_,getSlotProps:V,additionalProps:{ref:n,as:g},ownerState:ee,className:(0,s.A)(b,null==ie?void 0:ie.className,null==ne?void 0:ne.root,!ee.open&&ee.exited&&(null==ne?void 0:ne.hidden))}),ae=(0,l.Q)({elementType:re,externalSlotProps:se,additionalProps:h,getSlotProps:e=>Q((0,r.A)({},e,{onClick:n=>{W&&W(n),null!=e&&e.onClick&&e.onClick(n)}})),className:(0,s.A)(null==se?void 0:se.className,null==h?void 0:h.className,null==ne?void 0:ne.backdrop),ownerState:ee});return U||q||$&&!J?(0,k.jsx)(S.Z,{ref:G,container:E,disablePortal:M,children:(0,k.jsxs)(oe,(0,r.A)({},le,{children:[!K&&m?(0,k.jsx)(re,(0,r.A)({},ae)):null,(0,k.jsx)(w,{disableEnforceFocus:C,disableAutoFocus:P,disableRestoreFocus:F,isEnabled:X,open:q,children:i.cloneElement(A,te)})]}))}):null}))},27402:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(3511).A},48733:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(9543).A},31014:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(28767).A},97603:(e,n,t)=>{function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce(((e,n)=>null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}),(()=>{}))}t.d(n,{A:()=>o})},79847:(e,n,t)=>{function o(e){const n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}t.d(n,{A:()=>o})},9543:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(9950);function r(e){let{controlled:n,default:t,name:r,state:i="value"}=e;const{current:s}=o.useRef(void 0!==n),[l,a]=o.useState(t);return[s?n:l,o.useCallback((e=>{s||a(e)}),[])]}},28767:(e,n,t)=>{var o;t.d(n,{A:()=>l});var r=t(9950);let i=0;const s=(o||(o=t.t(r,2)))["useId".toString()];function l(e){if(void 0!==s){const n=s();return null!=e?e:n}return function(e){const[n,t]=r.useState(e),o=e||n;return r.useEffect((()=>{null==n&&(i+=1,t("mui-".concat(i)))}),[n]),o}(e)}}}]);