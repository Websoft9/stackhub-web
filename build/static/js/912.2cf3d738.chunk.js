"use strict";(self.webpackChunkappstore=self.webpackChunkappstore||[]).push([[912],{7430:function(e,t,s){s(2791);t.Z=s.p+"static/media/logo.21467f3ddba355981c892c73331678c6.svg"},5665:function(e,t,s){s(2791);t.Z=s.p+"static/media/websoft9.a364f73ed04449bcc81e97399dc8e8de.svg"},5912:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=s(4165),n=s(5861),r=s(9439),o=s(1413),i=s(5200),l=s(1694),c=s.n(l),d=s(7346),p=s.n(d),u=s(2791),h=s(2869),x=s(3360),g=s(4849),f=s(7689),m=s(1087),v=s(954);var j=s.p+"static/media/logo-sm.53b8ca70620b0b2968874a3660f195dd.svg",b=s(7430),w=s(5665),Z=s(184),k=p().gettext,y=p().language,N=u.forwardRef((function(e,t){return(0,Z.jsx)(i.Z,(0,o.Z)({elevation:6,ref:t,variant:"filled"},e))})),S=function(e){var t=e.hideLogo,s=e.navCssClasses,o=(e.openLeftMenuCallBack,e.topbarDark,s||""),i=t?"":"container-fluid",l=(0,u.useState)(""),d=(0,r.Z)(l,2),S=d[0],C=d[1],z=(0,u.useState)(!1),H=(0,r.Z)(z,2),U=H[0],A=H[1],B=(0,u.useState)(""),D=(0,r.Z)(B,2),L=D[0],E=D[1],I=(0,u.useState)(!1),_=(0,r.Z)(I,2),F=_[0],M=_[1],O=(0,u.useState)(!1),R=(0,r.Z)(O,2),T=R[0],J=R[1],P=(0,u.useState)(!1),q=(0,r.Z)(P,2),G=q[0],K=q[1],Q=(0,u.useState)(!1),V=(0,r.Z)(Q,2),W=V[0],X=V[1],Y=(0,f.s0)(),$=function(){X(!W),window.location.reload(!0)},ee=function(e,t){"clickaway"!==t&&(A(!1),C(""))};function te(){return(te=(0,n.Z)((0,a.Z)().mark((function e(){var t,s,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),A(!1),J(!0),K(!0),e.prev=4,e.next=7,p().spawn(["docker","inspect","-f","{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}","websoft9-appmanage"]);case 7:if(t=e.sent,!(s=t.trim())){e.next=15;break}return e.next=12,p().http({address:s,port:5e3}).get("/AppStoreUpdate");case 12:n=e.sent,(n=JSON.parse(n)).data.Error?(A(!0),E("error"),C(n.data.Error.Message)):(r=n.data.ResponseData.Update_content)?(X(!0),C(r)):(A(!0),E("success"),C(k("The app store is already the latest version")));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),Y("/error-500");case 20:return e.prev=20,J(!1),M(!1),K(!1),e.finish(20);case 25:case"end":return e.stop()}}),e,null,[[4,17,20,25]])})))).apply(this,arguments)}return(0,Z.jsxs)(Z.Fragment,{children:[F&&(0,Z.jsx)("div",{className:"card-disabled",style:{zIndex:999},children:(0,Z.jsx)(g.Z,{className:"dis_mid",style:{marginTop:"200px"}})}),(0,Z.jsx)("div",{className:c()("navbar-custom",o),style:{pointerEvents:G?"none":"auto"},children:(0,Z.jsxs)("div",{className:i,children:[!t&&(0,Z.jsxs)(m.rU,{to:"/",className:"topnav-logo",children:[(0,Z.jsx)("span",{className:"topnav-logo-lg",children:"zh_CN"===y?(0,Z.jsx)("img",{src:b.Z,alt:"logo",width:"99"}):(0,Z.jsx)("img",{src:w.Z,alt:"logo",width:"99"})}),(0,Z.jsx)("span",{className:"topnav-logo-sm",children:(0,Z.jsx)("img",{src:j,alt:"logo",width:"24px",height:"24"})})]}),(0,Z.jsx)("ul",{style:{display:"flex",justifyContent:"flex-end",flexDirection:"row",alignItems:"center",minHeight:"70px",fontSize:"16px",listStyle:"none",marginBottom:"0px"},children:(0,Z.jsx)("li",{children:(0,Z.jsx)("button",{onClick:function(){return te.apply(this,arguments)},disabled:T,className:"nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none",style:{color:"#428bca",fontSize:"16px"},children:k("Update Application List")})})})]})}),U&&(0,Z.jsx)(v.Z,{open:U,autoHideDuration:3e3,onClose:ee,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(N,{onClose:ee,severity:L,sx:{width:"100%"},children:S})}),W&&(0,Z.jsxs)(h.Z,{show:W,onHide:$,size:"lg",scrollable:"true",backdrop:"static",children:[(0,Z.jsx)(h.Z.Header,{onHide:$,closeButton:!0,className:c()("modal-colored-header","bg-primary"),children:(0,Z.jsxs)("h4",{children:[k("App Store")," ",k("Update Log")]})}),(0,Z.jsx)(h.Z.Body,{className:"row",children:S.map((function(e,t){return(0,Z.jsxs)("p",{children:[t+1," : ",e]},t)}))}),(0,Z.jsx)(h.Z.Footer,{children:(0,Z.jsx)(x.Z,{variant:"primary",onClick:$,children:k("Close")})})]})]})}}}]);
//# sourceMappingURL=912.2cf3d738.chunk.js.map