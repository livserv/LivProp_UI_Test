"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[580],{83787:(e,n,r)=>{r.r(n),r.d(n,{default:()=>F});var i=r(47313),o=r(2135),l=r(9019),s=r(42832),a=r(61113),t=r(46417);const d=function(e){let{email:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Registration Successful"})}),(0,t.jsxs)("p",{children:["Thank you for choosing LivProp. A verification email has been sent to: ",(0,t.jsx)("strong",{children:n})]}),(0,t.jsx)("p",{children:"To complete your registration, please click the verification link provided in the email."}),(0,t.jsx)("p",{children:"You may now close this tab."}),(0,t.jsx)("p",{children:"If you encounter any issues or have questions, feel free to contact our support team."})]})};var c=r(23306),u=r(37843),m=r(15480),h=r(41727),p=r(47131),x=r(1550),g=r(41806),Z=r(21933),j=r(24977),v=r(88983);const b=e=>{let n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(n+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(n+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(n+=1),n};var f=r(31741),y=r(44874),w=r(48232),P=r(63089),S=r(99007);r(35724);const C=function(e){let{code:n,phone:r,placeholder:o,className:l,onChange:s,onBlur:a,codeField:d="code",phoneField:c="phone"}=e;const u=(n||"")+" "+(r||""),m=i.useCallback(((e,n)=>{var r,i,o,l,a;let{country:{dialCode:t}={}}=n;t="+"+((null===(r=t)||void 0===r?void 0:r.trim())||""),e=null===(i=e)||void 0===i||null===(o=i.trim())||void 0===o||null===(l=o.substring(null===(a=t)||void 0===a?void 0:a.length))||void 0===l?void 0:l.trim(),s(d,t),s(c,e)}),[d,c,s]);return(0,t.jsx)(S.sb,{className:l,value:u,defaultCountry:"in",onChange:m,disableFormatting:!0,inputProps:{placeholder:o,name:c,onBlur:a,style:{width:"100%"}}})},W=Z.Ry().shape({name:Z.Z_().max(255).required("Admin Name is required"),company:Z.Z_().max(255).required("Company Name is required"),email:Z.Z_().email("Must be a valid email").max(255).required("Email is required"),phone:Z.Rx("Must be a valid mobile number").min(3e6,"Must be a valid mobile number").max(999999999999,"Must be a valid mobile number").required("Phone number is required"),password:Z.Z_().max(30).required("Password is required")}),B=e=>{let{onRegistered:n}=e;const[r,o]=(0,i.useState)(),[d,Z]=(0,i.useState)(!1),S=()=>{Z(!d)},B=e=>e.preventDefault(),q=e=>{const n=b(e);var r;o((r=n)<2?{label:"Poor",color:"error.main"}:r<3?{label:"Weak",color:"warning.main"}:r<4?{label:"Normal",color:"warning.dark"}:r<5?{label:"Good",color:"success.main"}:r<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"})};(0,i.useEffect)((()=>{q("")}),[]);return(0,t.jsx)(j.J9,{initialValues:{name:"",email:"",company:"",password:"",code:"+91",phone:"",submit:null},validationSchema:W,onSubmit:async(e,r)=>{let{setErrors:i,setStatus:o,setSubmitting:l}=r;try{await(0,w.a$)(e)&&n(e),o({success:!1}),l(!1)}catch(s){console.error(s),o({success:!1}),i({submit:s.message}),l(!1)}},children:e=>{let{errors:n,handleBlur:i,handleChange:o,setFieldValue:Z,handleSubmit:j,isSubmitting:b,touched:w,values:W}=e;return(0,t.jsx)("form",{noValidate:!0,onSubmit:j,children:(0,t.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{spacing:1,children:[(0,t.jsx)(c.Z,{htmlFor:"adminname-signup",children:"Admin Name*"}),(0,t.jsx)(u.Z,{id:"adminname-signup",type:"name",value:W.name,name:"name",onBlur:i,onChange:o,fullWidth:!0,error:Boolean(w.name&&n.name)}),w.name&&n.name&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-admin-name-signup",children:n.name})]})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{spacing:1,children:[(0,t.jsx)(c.Z,{htmlFor:"company-signup",children:"Company *"}),(0,t.jsx)(u.Z,{fullWidth:!0,error:Boolean(w.company&&n.company),id:"company-signup",value:W.company,name:"company",onBlur:i,onChange:o,placeholder:"Demo Inc.",inputProps:{}}),w.company&&n.company&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-company-signup",children:n.company})]})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{spacing:1,children:[(0,t.jsx)(c.Z,{htmlFor:"email-signup",children:"Work Email *"}),(0,t.jsx)(u.Z,{fullWidth:!0,error:Boolean(w.email&&n.email),id:"email-login",type:"email",value:W.email,name:"email",onBlur:i,onChange:o,placeholder:"admin@company.com",inputProps:{}}),w.email&&n.email&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-email-signup",children:n.email})]})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{spacing:1,children:[(0,t.jsx)(c.Z,{htmlFor:"email-signup",children:"Phone number *"}),(0,t.jsx)("div",{children:(0,t.jsx)(C,{className:w.code&&n.code||w.phone&&n.phone?"error":"",code:W.code,phone:W.phone,onBlur:i,onChange:Z})}),w.code&&n.code&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-phone-code-signup",children:n.code}),w.phone&&n.phone&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-phone-signup",children:n.phone})]})}),(0,t.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,t.jsxs)(s.Z,{spacing:1,children:[(0,t.jsx)(c.Z,{htmlFor:"password-signup",children:"Password *"}),(0,t.jsx)(u.Z,{fullWidth:!0,error:Boolean(w.password&&n.password),id:"password-signup",type:d?"text":"password",value:W.password,name:"password",onBlur:i,onChange:e=>{o(e),q(e.target.value)},endAdornment:(0,t.jsx)(h.Z,{position:"end",children:(0,t.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:S,onMouseDown:B,edge:"end",size:"large",children:d?(0,t.jsx)(f.Z,{}):(0,t.jsx)(y.Z,{})})}),placeholder:"******",inputProps:{}}),w.password&&n.password&&(0,t.jsx)(m.Z,{error:!0,id:"helper-text-password-signup",children:n.password})]}),(0,t.jsx)(x.Z,{fullWidth:!0,sx:{mt:2},children:(0,t.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,t.jsx)(l.ZP,{item:!0,children:(0,t.jsx)(g.Z,{sx:{bgcolor:null===r||void 0===r?void 0:r.color,width:85,height:8,borderRadius:"7px"}})}),(0,t.jsx)(l.ZP,{item:!0,children:(0,t.jsx)(a.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===r||void 0===r?void 0:r.label})})]})})]}),n.submit&&(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsx)(m.Z,{error:!0,children:n.submit})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsx)(v.Z,{children:(0,t.jsx)(P.Z,{disableElevation:!0,isLoading:b,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})}})};var q=r(91905);const F=()=>{const[e,n]=i.useState(null);return(0,t.jsx)(q.Z,{children:(0,t.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(l.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,t.jsx)(a.Z,{variant:"h3",children:e?"Registration Successful":"Register"}),!e&&(0,t.jsx)(a.Z,{component:o.rU,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,t.jsxs)(l.ZP,{item:!0,xs:12,children:[!e&&(0,t.jsx)(B,{onRegistered:n}),e&&(0,t.jsx)(d,{email:e.email})]})]})})}},1550:(e,n,r)=>{r.d(n,{Z:()=>b});var i=r(63366),o=r(87462),l=r(47313),s=r(94146),a=r(21921),t=r(77342),d=r(17592),c=r(96837),u=r(91615),m=r(27816),h=r(91397),p=r(77430),x=r(32298);function g(e){return(0,x.Z)("MuiFormControl",e)}(0,p.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var Z=r(46417);const j=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],v=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:r}=e;return(0,o.Z)({},n.root,n["margin".concat((0,u.Z)(r.margin))],r.fullWidth&&n.fullWidth)}})((e=>{let{ownerState:n}=e;return(0,o.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===n.margin&&{marginTop:16,marginBottom:8},"dense"===n.margin&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})})),b=l.forwardRef((function(e,n){const r=(0,t.Z)({props:e,name:"MuiFormControl"}),{children:d,className:p,color:x="primary",component:b="div",disabled:f=!1,error:y=!1,focused:w,fullWidth:P=!1,hiddenLabel:S=!1,margin:C="none",required:W=!1,size:B="medium",variant:q="outlined"}=r,F=(0,i.Z)(r,j),R=(0,o.Z)({},r,{color:x,component:b,disabled:f,error:y,fullWidth:P,hiddenLabel:S,margin:C,required:W,size:B,variant:q}),E=(e=>{const{classes:n,margin:r,fullWidth:i}=e,o={root:["root","none"!==r&&"margin".concat((0,u.Z)(r)),i&&"fullWidth"]};return(0,a.Z)(o,g,n)})(R),[N,k]=l.useState((()=>{let e=!1;return d&&l.Children.forEach(d,(n=>{if(!(0,m.Z)(n,["Input","Select"]))return;const r=(0,m.Z)(n,["Select"])?n.props.input:n;r&&(0,c.B7)(r.props)&&(e=!0)})),e})),[M,_]=l.useState((()=>{let e=!1;return d&&l.Children.forEach(d,(n=>{(0,m.Z)(n,["Input","Select"])&&((0,c.vd)(n.props,!0)||(0,c.vd)(n.props.inputProps,!0))&&(e=!0)})),e})),[A,z]=l.useState(!1);f&&A&&z(!1);const D=void 0===w||f?A:w;let I;const L=l.useMemo((()=>({adornedStart:N,setAdornedStart:k,color:x,disabled:f,error:y,filled:M,focused:D,fullWidth:P,hiddenLabel:S,size:B,onBlur:()=>{z(!1)},onEmpty:()=>{_(!1)},onFilled:()=>{_(!0)},onFocus:()=>{z(!0)},registerEffect:I,required:W,variant:q})),[N,x,f,y,M,D,P,S,I,W,B,q]);return(0,Z.jsx)(h.Z.Provider,{value:L,children:(0,Z.jsx)(v,(0,o.Z)({as:b,ownerState:R,className:(0,s.Z)(E.root,p),ref:n},F,{children:d}))})}))},27816:(e,n,r)=>{r.d(n,{Z:()=>o});var i=r(47313);const o=function(e,n){var r,o;return i.isValidElement(e)&&-1!==n.indexOf(null!=(r=e.type.muiName)?r:null==(o=e.type)||null==(o=o._payload)||null==(o=o.value)?void 0:o.muiName)}}}]);