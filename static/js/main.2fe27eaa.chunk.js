(this["webpackJsonpposter-frames"]=this["webpackJsonpposter-frames"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(13),r=n.n(o),l=(n(20),n(7)),s=n(2),i=n(6),j=(n(21),n(40)),d=n(41),p=n(42),u=n(15),b=n.n(u),h=(n(33),n.p+"static/media/welcome_poster.528fed64.png"),m=n.p+"static/media/pbs_logo.fc562c9d.png",f=n(0);var O=function(){var e=Object(a.useState)({name:"",place:"",sponser:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),r=Object(i.a)(o,2),u=r[0],O=r[1],x=Object(a.useRef)(null),g=Object(a.useRef)(null),C=Object(a.useState)({unit:"px",width:200,aspect:3/4}),v=Object(i.a)(C,2),w=v[0],L=v[1],S=Object(a.useState)(null),I=Object(i.a)(S,2),N=I[0],y=I[1],R=function(e){c(Object(s.a)(Object(s.a)({},n),{},Object(l.a)({},e.name,e.value)))},U=Object(a.useCallback)((function(e){x.current=e}),[]);return Object(a.useEffect)((function(){if(N&&g.current&&x.current){var e=x.current,t=g.current,a=N,c=e.naturalWidth/e.width,o=e.naturalHeight/e.height,r=t.getContext("2d");window.devicePixelRatio;t.width=1200,t.height=1200,r.imageSmoothingQuality="high";var l=new Image;l.src=h,l.onload=function(){r.drawImage(l,0,0,t.width,t.width),r.fillStyle="#fff",r.font="700 26px Montserrat",r.fillText(n.name.toLocaleUpperCase(),830,690),r.font="600 24px Montserrat",r.fillText(n.place.toLocaleUpperCase(),830,720),r.font="600 24px Montserrat",r.fillStyle="#0f3d54",r.fillText(n.sponser.toLocaleUpperCase(),27,1150)},r.drawImage(e,a.x*c,a.y*o,a.width*c,a.height*o,445,0,800,1066)}}),[N]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"Navbar-container",children:[Object(f.jsx)("img",{src:m,width:"70px"}),Object(f.jsx)("h4",{children:"PRAVEEN BUSINESS SCHOOL"})]}),Object(f.jsx)(j.a,{fluid:"md",className:"form-container",children:Object(f.jsxs)(d.a,{children:[Object(f.jsxs)(d.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(f.jsx)(d.a.Label,{children:"Poster type"}),Object(f.jsxs)(d.a.Select,{onChange:function(e){},children:[Object(f.jsx)("option",{children:"choose option.."}),Object(f.jsx)("option",{value:"1",selected:!0,children:"Welcome Poster"})]})]}),Object(f.jsxs)(d.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(f.jsx)(d.a.Label,{children:"Name"}),Object(f.jsx)(d.a.Control,{type:"text",placeholder:"Name",name:"name",value:n.name,onChange:function(e){return R(e.currentTarget)}})]}),Object(f.jsxs)(d.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput2",children:[Object(f.jsx)(d.a.Label,{children:"Place"}),Object(f.jsx)(d.a.Control,{type:"text",placeholder:"Place",name:"place",value:n.place,onChange:function(e){return R(e.target)}})]}),Object(f.jsxs)(d.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput2",children:[Object(f.jsx)(d.a.Label,{children:"Sponser Name"}),Object(f.jsx)(d.a.Control,{type:"text",placeholder:"Sponser Name",name:"sponser",value:n.sponser,onChange:function(e){return R(e.target)}})]}),Object(f.jsxs)(d.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(f.jsx)(d.a.Label,{children:"choose photo"}),Object(f.jsx)(d.a.Control,{type:"file",accept:"image/png, image/jpeg",disabled:!n.name||!n.place||!n.sponser,onChange:function(e){return function(e){e.target.files&&e.target.files[0]&&O(URL.createObjectURL(e.target.files[0]))}(e)}})]}),u&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{src:u,keepSelection:!0,onImageLoaded:U,crop:w,onChange:function(e){return L(e)},onComplete:function(e){return y(e)}}),Object(f.jsx)("div",{className:"frame-container",children:Object(f.jsx)("canvas",{ref:g,style:{width:"100%"}})})]}),Object(f.jsx)(p.a,{variant:"primary",disabled:!(null===N||void 0===N?void 0:N.width)||!(null===N||void 0===N?void 0:N.height),onClick:function(){return function(e,t){t&&e&&e.toBlob((function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.download="poster.png",n.href=URL.createObjectURL(e),n.click(),window.URL.revokeObjectURL(t)}),"image/png",1)}(g.current,N)},children:"Download"})]})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};n(37);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[38,1,2]]]);
//# sourceMappingURL=main.2fe27eaa.chunk.js.map