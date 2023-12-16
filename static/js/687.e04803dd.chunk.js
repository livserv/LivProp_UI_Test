"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[687],{70687:(e,i,n)=>{n.r(i),n.d(i,{default:()=>U});n(47313);var s=n(41806),t=n(9019),l=n(19536),r=n(61113),a=n(42832),d=n(23306),c=n(15480),o=n(70035),x=n(52830),h=n(969),m=n(37843),j=n(31095),u=n(93405),p=n(56104),Z=n(61689),g=n(47131),b=n(51997),f=n(10237),w=n(77021),v=n(3463),y=n(24977),z=n(46417);const P=e=>{window.open(e)},S={margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}};const U=function(){var e;const i=(0,x.tN)((e=>e.botsList)),[n]=(0,h.g)(),l=null===(e=i.find((e=>e._id===n)))||void 0===e?void 0:e.trainingMedia;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{sx:S,content:!1,border:!1,boxShadow:!0,children:(0,z.jsx)(s.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,z.jsx)(t.ZP,{container:!0,spacing:3,children:(0,z.jsx)(C,{})})})}),(0,z.jsx)(o.Z,{sx:S,content:!1,border:!1,boxShadow:!0,children:(0,z.jsx)(s.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,z.jsx)(t.ZP,{container:!0,spacing:3,children:(0,z.jsx)(M,{trainingMedia:l})})})})]})};function C(){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(t.ZP,{item:!0,xs:12,children:(0,z.jsx)(l.Z,{children:(0,z.jsx)(r.Z,{variant:"caption",children:"Upload Training Documents"})})}),(0,z.jsx)(t.ZP,{item:!0,xs:12,children:(0,z.jsx)(y.J9,{initialValues:{websiteUrl:""},validationSchema:v.Ry().shape({websiteUrl:v.Z_().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-za-z0-9#]+)*\/?(\?[a-za-z0-9-_]+=[a-za-z0-9-%]+&?)?$/,"Enter valid url!").required("please enter website url")}),onSubmit:async(e,i)=>{let{setErrors:n,setStatus:s,setSubmitting:t}=i;try{const i={organizationId:sessionStorage.getItem("organizationId"),data:e};console.log(i),s({success:!1}),t(!1)}catch(l){s({success:!1}),n({submit:l.message}),t(!1)}},children:e=>{let{errors:i,handleBlur:n,handleChange:s,handleSubmit:l,isSubmitting:o,touched:x,values:h}=e;return(0,z.jsx)("form",{noValidate:!0,onSubmit:l,children:(0,z.jsxs)(t.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(t.ZP,{item:!0,xs:12,md:4,children:(0,z.jsxs)(a.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"website-url",children:"Website Url"}),(0,z.jsx)(m.Z,{id:"websiteUrl",type:"websiteUrl",defaultValue:h.websiteUrl,name:"websiteUrl",onBlur:n,onChange:s,fullWidth:!0,placeholder:"http://www.abc.com/index.html",error:Boolean(x.websiteUrl&&i.websiteUrl)}),x.websiteUrl&&i.websiteUrl&&(0,z.jsx)(c.Z,{error:!0,id:"helper-text-firstname-signup",children:i.websiteUrl})]})}),(0,z.jsx)(t.ZP,{item:!0,xs:12,md:2,children:(0,z.jsxs)(a.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{children:"\xa0"}),(0,z.jsx)(w.Z,{children:(0,z.jsx)(j.Z,{disableElevation:!0,disabled:o,size:"large",type:"submit",variant:"contained",color:"primary",id:"websiteUrlSubmit",children:"Submit"})})]})}),(0,z.jsx)(t.ZP,{item:!0,xs:12,md:1,children:(0,z.jsx)(r.Z,{variant:"caption",children:"OR"})}),(0,z.jsx)(t.ZP,{item:!0,xs:12,md:5,children:(0,z.jsxs)(a.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{children:"File Upload (.pdf,.doc,.docx,.txt)"}),(0,z.jsx)(F,{})]})})]})})}})})]})}function F(){return(0,z.jsx)(y.J9,{initialValues:{file:""},validationSchema:v.Ry({files:v.nK().required("please enter website url")}),onSubmit:async(e,i)=>{let{setErrors:n,setStatus:s,setSubmitting:t}=i;try{const i={organizationId:sessionStorage.getItem("organizationId"),data:e};console.log(i),s({success:!1}),t(!1)}catch(l){s({success:!1}),n({submit:l.message}),t(!1)}},children:(0,z.jsx)("form",{children:(0,z.jsx)(y.gN,{type:"file",name:"file",as:e=>{let{field:i}=e;return(0,z.jsx)(w.Z,{children:(0,z.jsxs)(j.Z,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",children:["Upload File",(0,z.jsx)("input",{...i,type:"file",id:"file-input",style:{display:"none"},onChange:e=>handleFileChange(e,setFieldValue),accept:".pdf,.doc,.docx,.txt,text/plain"})]})})}})})})}function M(e){let{trainingMedia:i}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(t.ZP,{item:!0,xs:12,children:(0,z.jsx)(l.Z,{children:(0,z.jsx)(r.Z,{variant:"caption",children:"Uploaded Training Documents"})})}),i.map(((e,i)=>(0,z.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(N,{media:e})},i)))]})}function N(e){let{media:i}=e;const{name:n,url:s,type:l,originalName:a}=i;return(0,z.jsxs)(o.Z,{contentSX:{p:2.25},border:!1,boxShadow:!0,children:[(0,z.jsxs)(u.Z,{style:{padding:0,minHeight:"100px",maxHeight:"100px"},children:[a&&(0,z.jsxs)(r.Z,{variant:"h6",children:[(0,z.jsx)("strong",{children:"File Name :"})," ",a]}),"single_page"===l&&(0,z.jsxs)(r.Z,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis"},children:[(0,z.jsx)("strong",{children:"URL :"})," ",s]}),(0,z.jsxs)(r.Z,{variant:"h6",children:[(0,z.jsx)("strong",{children:"Type :"})," ","text/plain"===l?"Document":"Web Page"]}),(0,z.jsxs)(r.Z,{variant:"h6",children:[(0,z.jsx)("strong",{children:"Document Name :"})," ",n===s?"NA":n]})]}),(0,z.jsx)(p.Z,{style:{justifyContent:"flex-end",padding:"5px"},children:(0,z.jsxs)(t.ZP,{container:!0,children:[(0,z.jsx)(t.ZP,{item:!0,xs:10,md:10,children:n===s&&(0,z.jsxs)(t.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(t.ZP,{item:!0,xs:9,md:9,children:(0,z.jsx)(m.Z,{id:"trainingMediaName",type:"trainingMediaName",name:"trainingMediaName",placeholder:"Document Name",fullWidth:!0})}),(0,z.jsx)(t.ZP,{item:!0,xs:3,md:3,children:(0,z.jsx)(w.Z,{children:(0,z.jsx)(j.Z,{disableElevation:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Add"})})})]})}),(0,z.jsx)(t.ZP,{item:!0,xs:1,md:1,children:(0,z.jsx)(Z.Z,{title:"text/plain"===l?"View Document":"View Web Page",children:(0,z.jsx)(g.Z,{variant:"text",onClick:()=>P(s),children:(0,z.jsx)(f.Z,{style:{color:"#5ad74e"}})})})}),(0,z.jsx)(t.ZP,{item:!0,xs:1,md:1,children:(0,z.jsx)(Z.Z,{title:"Delete",children:(0,z.jsx)(g.Z,{variant:"text",onClick:()=>onClickDeleteFile(item),children:(0,z.jsx)(b.Z,{style:{color:"#ff0000"},fontSize:"small"})})})})]})})]})}},51997:(e,i,n)=>{var s=n(64836);i.Z=void 0;var t=s(n(45045)),l=n(46417),r=(0,t.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");i.Z=r},10237:(e,i,n)=>{var s=n(64836);i.Z=void 0;var t=s(n(45045)),l=n(46417),r=(0,t.default)((0,l.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");i.Z=r}}]);