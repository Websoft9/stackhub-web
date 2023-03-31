"use strict";(self.webpackChunkapps=self.webpackChunkapps||[]).push([[918],{3131:function(e,n,t){var s=t(5987),l=t(1413),a=t(9439),r=t(2791),i=t(3161),o=t(9795),c=t(1694),d=t.n(c),u=t(184),p=["label","type","name","placeholder","register","errors","className","labelClassName","containerClass","refCallback","children"],m=function(e){var n=e.name,t=e.placeholder,s=e.refCallback,c=e.errors,p=e.register,m=e.className,h=(0,r.useState)(!1),v=(0,a.Z)(h,2),x=v[0],g=v[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,{className:"mb-0",children:[(0,u.jsx)(o.Z.Control,(0,l.Z)((0,l.Z)({type:x?"text":"password",placeholder:t,name:n,id:n,as:"input",ref:function(e){s&&s(e)},className:m,isInvalid:!(!c||!c[n])},p?p(n):{}),{},{autoComplete:n})),(0,u.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":x}),"data-password":x?"true":"false",children:(0,u.jsx)("span",{className:"password-eye",onClick:function(){g(!x)}})})]})})};n.Z=function(e){var n=e.label,t=e.type,a=e.name,r=e.placeholder,i=e.register,c=e.errors,d=e.className,h=e.labelClassName,v=e.containerClass,x=e.refCallback,g=e.children,f=(0,s.Z)(e,p),j="textarea"===t?"textarea":"select"===t?"select":"input";return(0,u.jsx)(u.Fragment,{children:"hidden"===t?(0,u.jsx)("input",(0,l.Z)((0,l.Z)({type:t,name:a},i?i(a):{}),f)):(0,u.jsx)(u.Fragment,{children:"password"===t?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z.Group,{className:v,children:[n?(0,u.jsxs)(u.Fragment,{children:[" ",(0,u.jsx)(o.Z.Label,{className:h,children:n})," ",g," "]}):null,(0,u.jsx)(m,{name:a,placeholder:r,refCallback:x,errors:c,register:i,className:d}),c&&c[a]?(0,u.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:c[a].message}):null]})}):(0,u.jsx)(u.Fragment,{children:"select"===t?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z.Group,{className:v,children:[n?(0,u.jsx)(o.Z.Label,{className:h,children:n}):null,(0,u.jsx)(o.Z.Select,(0,l.Z)((0,l.Z)((0,l.Z)({type:t,label:n,name:a,id:a,ref:function(e){x&&x(e)},comp:j,className:d,isInvalid:!(!c||!c[a])},i?i(a):{}),f),{},{children:g})),c&&c[a]?(0,u.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[a].message}):null]})}):(0,u.jsx)(u.Fragment,{children:"checkbox"===t||"radio"===t?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z.Group,{className:v,children:[(0,u.jsx)(o.Z.Check,(0,l.Z)((0,l.Z)({type:t,label:n,name:a,id:a,ref:function(e){x&&x(e)},className:d,isInvalid:!(!c||!c[a])},i?i(a):{}),f)),c&&c[a]?(0,u.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[a].message}):null]})}):(0,u.jsxs)(o.Z.Group,{className:v,children:[n?(0,u.jsx)(o.Z.Label,{className:h,children:n}):null,(0,u.jsx)(o.Z.Control,(0,l.Z)((0,l.Z)((0,l.Z)({type:t,placeholder:r,name:a,id:a,as:j,ref:function(e){x&&x(e)},className:d,isInvalid:!(!c||!c[a])},i?i(a):{}),f),{},{autoComplete:a,children:g||null})),c&&c[a]?(0,u.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[a].message}):null]})})})})})}},2733:function(e,n,t){var s=t(4942),l=(t(2791),t(1694)),a=t.n(l),r=t(184),i=function(e){var n=e.children||null,t=e.tag||"div",l=e.color||"secondary",i=e.size||"";return(0,r.jsx)(t,{role:"status",className:a()({"spinner-border":"bordered"===e.type,"spinner-grow":"grow"===e.type},["text-".concat(l)],(0,s.Z)({},"avatar-".concat(i),i),e.className),children:n})};i.defaultProps={tag:"div",type:"bordered"},n.Z=i},165:function(e,n,t){t.d(n,{t:function(){return h},ob:function(){return u},V7:function(){return c},eI:function(){return o},GP:function(){return m},jO:function(){return p},Wv:function(){return d}});var s=t(3144),l=t(5671),a=t(1243),r=t(7689);t(184);a.Z.defaults.headers.post["Content-Type"]="application/json",a.Z.defaults.headers.get["Content-Type"]="application/json",a.Z.defaults.headers={"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"},a.Z.interceptors.response.use((function(e){return e}),(function(e){var n;if(e&&e.response&&404===e.response.status)r.Fg;else{if(!e||!e.response||500!==e.response.status)return n=e.response&&e.response.data?e.response.data.message:e.message||e,Promise.reject(n);r.Fg}}));var i=new((0,s.Z)((function e(){(0,l.Z)(this,e),this.get=function(e,n){var t;if(n){var s=n?Object.keys(n).map((function(e){return e+"="+n[e]})).join("&"):"";t=a.Z.get("".concat(e,"?").concat(s),n)}else t=a.Z.get("".concat(e),n);return t},this.create=function(e,n){return a.Z.post(e,n)}})));function o(e){return i.get("".concat("/api/v1/apps/install"),e)}function c(e){return i.get("".concat("/api/v1/apps"),e)}function d(e){return i.get("".concat("/api/v1/apps/uninstall"),e)}function u(e){return i.get("".concat("/api/v1/apps/process"),e)}function p(e){return i.get("".concat("/api/v1/apps/stop"),e)}function m(e){return i.get("".concat("/api/v1/apps/start"),e)}function h(e){return i.get("".concat("/api/v1/apps/details"),e)}},918:function(e,n,t){t.r(n);var s,l=t(4165),a=t(5861),r=t(9439),i=t(168),o=t(3306),c=t(3173),d=t(2791),u=t(2025),p=t(9920),m=t(2469),h=t(3360),v=t(9743),x=t(2677),g=t(9795),f=t(7689),j=t(3131),Z=t(2733),y=t(165),k=t(184),C=(0,o.Ps)(s||(s=(0,i.Z)(['\n    query{\n        productCollection {\n            items {\n            sys {\n                id\n            }\n            key\n            trademark\n            summary\n            overview\n            websiteurl\n            description\n            screenshots\n            distribution\n            highlights\n            vcpu\n            memory\n            storage\n            logo {\n                imageurl\n            }\n            catalogCollection(limit:20) {\n                items {\n                key\n                title\n                catalogCollection(limit:1){\n                    items{\n                        key\n                        title\n                    }\n                    }\n                }\n            }\n            }\n        }\n        catalog(id: "2Yp0TY3kBHgG6VDjsHZNpK") {\n            linkedFrom(allowedLocales:["en-US"]) {\n            catalogCollection(limit:20) {\n                items {\n                key\n                title\n                linkedFrom(allowedLocales:["en-US"]) {\n                    catalogCollection(limit:20) {\n                    items {\n                        key\n                        title\n                    }\n                    }\n                }\n                }\n            }\n            }\n        }\n    }\n']))),b=function(e){var n,t=e.product,s=e.showFlag,i=e.onClose,o=(0,d.useState)(0),c=(0,r.Z)(o,2),v=c[0],x=c[1],g=(0,f.s0)(),Z=(0,d.useState)(!0),C=(0,r.Z)(Z,2),b=C[0],N=C[1],w=(0,d.useState)(""),F=(0,r.Z)(w,2),S=F[0],A=F[1],I=(0,d.useState)(!1),P=(0,r.Z)(I,2),G=P[0],L=P[1],_=(0,d.useState)(""),T=(0,r.Z)(_,2),B=T[0],H=T[1],R=(0,d.useState)(!1),D=(0,r.Z)(R,2),V=D[0],z=D[1];function E(){return(E=(0,a.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=18;break}if(S){e.next=6;break}L(!0),H("Please enter custom name "),e.next=17;break;case 6:return e.prev=6,z(!0),e.next=10,(0,y.eI)({app_name:t.key,app_version:Y,customer_app_name:S});case 10:0===(n=e.sent).data.code?g("/myapps"):-1===n.data.code&&(L(!0),H(n.data.message),z(!1)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),g("/error-500");case 17:return e.abrupt("return");case 18:N(!b);case 19:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}var O=((null===(n=t.distribution)||void 0===n?void 0:n.filter((function(e){return"Community"===e.key})))||[]).map((function(e){return e.value})),U=O&&1===O.length?O.toString().split(","):O,q=(0,d.useState)(U[0]),W=(0,r.Z)(q,2),Y=W[0],K=W[1];return(0,k.jsxs)(u.Z,{show:s,onHide:i,size:"lg",scrollable:"true",backdrop:"static",children:[(0,k.jsx)(u.Z.Header,{onHide:i,closeButton:!0,children:(0,k.jsxs)("div",{style:{padding:"10px"},children:[(0,k.jsx)("div",{className:"appstore-item-content-icon col-same-height",children:(0,k.jsx)("img",{src:t.logo.imageurl,alt:"",className:"app-icon"})}),(0,k.jsxs)("div",{className:"col-same-height",children:[(0,k.jsx)("h4",{className:"appstore-item-content-title",style:{marginTop:"5px"},children:t.trademark}),(0,k.jsx)("div",{children:(0,k.jsxs)("a",{rel:"noreferrer",href:"https://support.websoft9.com/docs/"+t.key,target:"_blank",style:{color:"#2196f3"},children:[t.trademark," developers"]})}),(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,k.jsx)("span",{style:{marginRight:"5px"},children:"Version :"})," ",O]}),(0,k.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,k.jsxs)("span",{style:{marginRight:"5px"},children:["Requires at least : ",t.vcpu," vCPU,  ",t.memory,"  GB memory, ",t.storage," GB storage"]})})]})]})}),(0,k.jsxs)(u.Z.Body,{children:[(0,k.jsxs)("div",{style:{display:b?"block":"none"},children:[(0,k.jsx)(p.Z,{activeIndex:v,onSelect:function(e,n){x(e)},style:{width:"80%",margin:"0 auto"},children:(t.screenshots||[]).map((function(e){return(0,k.jsx)(p.Z.Item,{children:(0,k.jsx)("img",{className:"d-block",src:null===e||void 0===e?void 0:e.value,alt:null===e||void 0===e?void 0:e.key,width:"100%",height:"300px"})},null===e||void 0===e?void 0:e.id)}))}),(0,k.jsxs)("div",{style:{padding:"10px"},children:[(0,k.jsx)("h4",{children:"Overview"}),t.overview]}),(0,k.jsxs)("div",{style:{padding:"10px"},children:[(0,k.jsx)("h4",{children:"Description"}),t.description]})]}),(0,k.jsx)("div",{style:{display:b?"none":"block"},children:(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("span",{style:{marginRight:"5px"},children:"Version :"}),U&&(0,k.jsx)(j.Z,{name:"select",type:"select",className:"form-select",onChange:function(e){return n=e.target.value,void K(n);var n},children:(U||[]).map((function(e,n){return(0,k.jsx)("option",{value:e,children:e},e+n)}))},"select")]}),(0,k.jsxs)("div",{style:{marginTop:"5px"},children:[(0,k.jsx)("span",{style:{marginRight:"5px"},children:"Name :"}),(0,k.jsx)(j.Z,{type:"text",value:S,name:"app_Name",placeholder:"Please enter a custom application name",onChange:function(e){!function(e){e?(L(!1),H("")):(L(!0),H("Please enter custom name"));var n=e.replace(/[^a-z0-9]/gi,"").toLowerCase();A(n)}(e.target.value)}}),(0,k.jsx)("span",{style:{fontStyle:"italic",color:"green",marginLeft:"5px"},children:"it can only be a combination of lowercase letters and numbers"})]}),(0,k.jsx)("div",{children:G&&(0,k.jsx)(m.Z,{variant:"danger",className:"my-2",children:B})})]})})]}),(0,k.jsxs)(u.Z.Footer,{children:[(0,k.jsx)(h.Z,{variant:"light",onClick:i,children:"Close"})," ",(0,k.jsx)(h.Z,{disabled:V,variant:"primary",onClick:function(){return E.apply(this,arguments)},children:"Install"})]})]})};n.default=function(){var e,n=(0,d.useState)(!1),t=(0,r.Z)(n,2),s=t[0],l=t[1],a=(0,d.useState)(null),i=(0,r.Z)(a,2),o=i[0],u=i[1],p=(0,d.useState)(null),m=(0,r.Z)(p,2),h=m[0],f=m[1],y=(0,d.useState)(null),N=(0,r.Z)(y,2),w=N[0],F=N[1],S=(0,d.useState)("All"),A=(0,r.Z)(S,2),I=A[0],P=A[1],G=(0,d.useState)("All"),L=(0,r.Z)(G,2),_=L[0],T=L[1],B=(0,c.a)(C),H=B.loading,R=B.error,D=B.data,V=null===D||void 0===D?void 0:D.catalog.linkedFrom.catalogCollection.items,z=null===D||void 0===D||null===(e=D.productCollection)||void 0===e?void 0:e.items,E=(0,d.useState)(z),O=(0,r.Z)(E,2),U=O[0],q=O[1];if((0,d.useEffect)((function(){q(z)}),[z]),H)return(0,k.jsx)(Z.Z,{className:"dis_mid"});if(R)return(0,k.jsxs)("p",{children:["Error : $",R.message," "]});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(v.Z,{className:"mb-2",children:[(0,k.jsx)(x.Z,{sm:6,children:(0,k.jsxs)(g.Z.Group,{as:v.Z,children:[(0,k.jsx)(x.Z,{sm:6,children:(0,k.jsxs)(j.Z,{value:I,name:"select",type:"select",className:"form-select",onChange:function(e){return function(e){var n,t,s,l,a,r;a="All"===e?[]:null===(n=V.filter((function(n){return n.key===e})))||void 0===n||null===(t=n[0])||void 0===t||null===(s=t.linkedFrom)||void 0===s||null===(l=s.catalogCollection)||void 0===l?void 0:l.items,f(a),r=z.filter((function(n){var t;return null===n||void 0===n||null===(t=n.catalogCollection)||void 0===t?void 0:t.items.some((function(n){var t;return null===n||void 0===n||null===(t=n.catalogCollection)||void 0===t?void 0:t.items.some((function(n){return n.key===e}))}))})),q("All"===e?z:r),F(r),P(e)}(e.target.value)},children:[(0,k.jsx)("option",{value:"All",children:"All"}),(V||[]).map((function(e,n){return(0,k.jsx)("option",{value:null===e||void 0===e?void 0:e.key,children:null===e||void 0===e?void 0:e.title},(null===e||void 0===e?void 0:e.key)+n)}))]},"select")}),(0,k.jsx)(x.Z,{sm:6,children:(0,k.jsxs)(j.Z,{value:_,name:"select",type:"select",className:"form-select",onChange:function(e){return function(e){var n;n="All"===e?w:z.filter((function(n){var t;return null===n||void 0===n||null===(t=n.catalogCollection)||void 0===t?void 0:t.items.some((function(n){return n.key===e}))})),q(n),T(e)}(e.target.value)},children:[(0,k.jsx)("option",{value:"All",children:"All"}),(h||[]).map((function(e,n){return(0,k.jsx)("option",{value:null===e||void 0===e?void 0:e.key,children:null===e||void 0===e?void 0:e.title},(null===e||void 0===e?void 0:e.key)+n)}))]},"select")})]})}),(0,k.jsx)(x.Z,{sm:6,children:(0,k.jsx)(x.Z,{xs:"auto",children:(0,k.jsx)(j.Z,{type:"text",name:"search",placeholder:"Search for apps like WordPress, Dropbox, Slack, Trello, \u2026",onChange:function(e){return function(e){var n;n=""===e?z:z.filter((function(n){return n.trademark.toLowerCase().includes(e)||n.key.toLowerCase().includes(e)})),q(n),P("All"),T("All")}(e.target.value)}})})})]}),(0,k.jsx)(v.Z,{children:(U||[]).map((function(e,n){return(0,k.jsx)(x.Z,{xxl:3,md:6,className:"appstore-item",children:(0,k.jsxs)("div",{className:"appstore-item-content highlight",onClick:function(){u(e),l(!0)},children:[(0,k.jsx)("div",{className:"appstore-item-content-icon col-same-height",children:(0,k.jsx)("img",{src:e.logo.imageurl,alt:"",className:"app-icon"})}),(0,k.jsxs)("div",{className:"col-same-height",children:[(0,k.jsx)("h4",{className:"appstore-item-content-title",children:e.trademark}),(0,k.jsx)("div",{className:"appstore-item-content-tagline text-muted",children:e.summary})]})]})},e.sys.id)}))}),s&&(0,k.jsx)(b,{product:o,showFlag:s,onClose:function(){l(!1),u(null)}})]})}}}]);
//# sourceMappingURL=918.7bbcb756.chunk.js.map