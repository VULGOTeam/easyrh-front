(this["webpackJsonpeasyrh-front"]=this["webpackJsonpeasyrh-front"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},164:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),r=a.n(s),l=(a(87),a(24)),o=a(12),i=(a(88),a(8)),j=a(11),d=a.n(j),O=a(15),b=a(177),u=a(181),h=a(178),x=a(182),p=a(75),m=(a(31),a(90),a(41)),v=a(42),f=a(74),g=a.n(f).a.create({baseURL:"http://staging-easyrh.sa-east-1.elasticbeanstalk.com/"}),y=function(){function e(){Object(m.a)(this,e)}return Object(v.a)(e,[{key:"sendOtp",value:function(e){return g.post("/users/sign-in",{email:e})}},{key:"verifyOtp",value:function(e,t){return g.put("/users/sign-in",{email:e,otp:t})}},{key:"signUp",value:function(e,t,a){return g.post("/users",{email:e,name:t,cnpj:a})}}]),e}(),S=a(13),N=a(1),C=Object(o.g)((function(e){var t=new y,a=function(){var a=Object(O.a)(d.a.mark((function a(c,n){var s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,t.sendOtp(n);case 4:e.history.push({pathname:"/OTP",state:{email:n}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),404===(null===(s=a.t0.response)||void 0===s?void 0:s.status)?e.history.push({pathname:"/cadastro",state:{email:n}}):Object(S.b)("Falha ao entrar, tente novamente mais tarde!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 10:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e,t){return a.apply(this,arguments)}}(),n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(N.jsx)(b.a,{children:Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)("div",{className:"logo-header",children:Object(N.jsx)("h1",{children:"EasyRH "})}),Object(N.jsxs)(u.a,{className:"m-lateral",children:[Object(N.jsxs)(u.a.Group,{className:"centro",controlId:"formBasicEmail",children:[Object(N.jsx)(u.a.Label,{children:"E-MAIL"}),Object(N.jsx)(u.a.Control,{onChange:function(e){return l(e.target.value)},type:"email",placeholder:""}),Object(N.jsx)(u.a.Text,{className:"text-muted",children:"Utilize seu e-mail cadastrado para receber o c\xf3digo de acesso ou digite o seu melhor e-mail para criar uma nova conta"})]}),Object(N.jsx)(h.a,{children:Object(N.jsx)("div",{className:"col-12 mt-5",children:Object(N.jsx)(x.a,{variant:"primary",onClick:function(e){return a(e,r)},type:"submit",className:"button-primary",children:"Continuar"})})}),Object(N.jsx)(h.a,{children:Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Text,{className:"hint-conta text-muted",children:"Se ainda n\xe3o possuir uma conta, fique tranquilo que criaremos uma para voc\xea"})})})]})]})})})),w=(a(118),Object(o.g)((function(e){Object(c.useEffect)((function(){console.log(e.location.state)}),[]);var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),o=l[0],j=l[1],b=new y,p=function(){var t=Object(O.a)(d.a.mark((function t(a,c,n){var s,r,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,b.signUp(e.location.state.email,c,n);case 4:return s=t.sent,r=s.data,t.next=8,b.sendOtp(r.email);case 8:e.history.push({pathname:"/OTP",state:{email:r.email}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),Object(S.b)((null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.message)||"Ops, ocorreu um erro, tente novamente!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a,c){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)("div",{className:"logo-header",children:Object(N.jsx)("h1",{children:"EasyRH "})}),Object(N.jsxs)(u.a,{className:"m-lateral",onSubmit:function(e){return e.preventDefault()},children:[Object(N.jsxs)(u.a.Group,{className:"centro",children:[Object(N.jsx)(u.a.Label,{children:Object(N.jsx)("p",{className:"font-weight-bold",children:"NOME DA EMPRESA"})}),Object(N.jsx)(u.a.Control,{type:"text",onChange:function(e){return j(e.target.value)},placeholder:""})]}),Object(N.jsxs)(u.a.Group,{children:[Object(N.jsx)(u.a.Label,{children:Object(N.jsx)("p",{className:"font-weight-bold",children:"CNPJ"})}),Object(N.jsx)(u.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Somente n\xfameros"})]}),Object(N.jsx)(h.a,{children:Object(N.jsx)("div",{className:"col-12 mt-5",children:Object(N.jsx)(x.a,{variant:"primary",onClick:function(e){return p(e,o,n)},type:"submit",className:"button-primary",children:"Continuar"})})}),Object(N.jsx)(h.a,{})]})]})}))),E=Object(o.g)((function(e){var t=new y,a=Object(c.useState)(""),n=Object(i.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){console.log(e)}),[]);var l=function(){var t=Object(O.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.history.push({pathname:"/"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var a=Object(O.a)(d.a.mark((function a(c){var n,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,t.verifyOtp(e.location.state.email,s);case 4:n=a.sent,r=n.data,console.log(r),localStorage.setItem("@TOKEN",null===r||void 0===r?void 0:r.token),localStorage.setItem("@USER",JSON.stringify(null===r||void 0===r?void 0:r.user)),e.history.push({pathname:"/dashboard",state:{email:null===r||void 0===r?void 0:r.user.email,name:null===r||void 0===r?void 0:r.user.name,cnpj:null===r||void 0===r?void 0:r.user.cnpj}}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),Object(S.b)(a.t0.response.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 15:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)("div",{className:"logo-header",children:Object(N.jsx)("h1",{children:"EasyRH "})}),Object(N.jsxs)(u.a,{className:"m-lateral",children:[Object(N.jsxs)(u.a.Group,{className:"centro",children:[Object(N.jsx)(u.a.Label,{children:"C\xd3DIGO DE ACESSO"}),Object(N.jsx)(u.a.Control,{type:"text",placeholder:"",onChange:function(e){return r(e.target.value)}}),Object(N.jsx)(u.a.Text,{className:"text-muted",children:"Utilize seu c\xf3digo de acesso recebido no e-mail"})]}),Object(N.jsxs)(h.a,{children:[Object(N.jsx)("div",{className:"col-12 mt-5",children:Object(N.jsx)(x.a,{variant:"primary",onClick:function(e){return o(e)},type:"submit",className:"button-primary",children:"Continuar"})}),Object(N.jsx)("div",{className:"col-12 mt-5 px-4",children:Object(N.jsx)(x.a,{variant:"outline-secondary",onClick:function(e){return l(e)},type:"submit",className:"button-primary",children:"Voltar"})})]}),Object(N.jsx)(h.a,{})]})]})})),k=a(179),L=(a(119),a(180)),R=(a(120),function(){function e(){Object(m.a)(this,e)}return Object(v.a)(e,[{key:"getEmployees",value:function(){return g.get("/employees",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("@TOKEN"))}})}},{key:"addEmployee",value:function(e){var t=e.name,a=e.gross,c=e.hired_at,n=e.department,s=e.vacations;return g.post("/employees",{name:t,gross:parseFloat(a),hired_at:c,department:n,vacations:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("@TOKEN"))}})}},{key:"calculateSalary",value:function(e){var t=e.gross,a=e.months,c=e.adds,n=e.vacation_days;return g.get("/salary/calculate",{params:{gross:t,months:a,adds:c,vacation_days:n},headers:{Authorization:"Bearer ".concat(localStorage.getItem("@TOKEN"))}})}},{key:"deleteEmployee",value:function(e){return g.delete("/employees/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("@TOKEN"))}})}},{key:"getEmployee",value:function(e){return g.get("/employees/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("@TOKEN"))}})}}]),e}()),I=a(52),A=a.n(I),D=(a(121),a(79));Object(I.registerLocale)("pt-BR",D.a),Object(I.setDefaultLocale)("pt-BR");var T=Object(o.g)((function(e){var t=new R,a=Object(c.useState)(Date.now()),n=Object(i.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(0),o=Object(i.a)(l,2),j=o[0],b=o[1],m=Object(c.useState)(""),v=Object(i.a)(m,2),f=v[0],g=v[1],y=Object(c.useState)(),C=Object(i.a)(y,2),w=C[0],E=C[1],k=Object(c.useState)(0),I=Object(i.a)(k,2),D=I[0],T=I[1],F=function(){var a=Object(O.a)(d.a.mark((function a(c){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,t.addEmployee({name:f,gross:j,department:w,vacations:D,hired_at:s});case 4:n=a.sent,n.data,e.setShow(!1),S.b.success("Funcion\xe1rio cadastrado com sucesso!",{autoClose:3e3,position:"bottom-center"}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0),Object(S.b)("Erro ao adicionar",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(e)}),[]),Object(N.jsx)(L.a,{show:e.show,onHide:function(){e.setShow(!1)},keyboard:!1,children:Object(N.jsx)(L.a.Dialog,{children:Object(N.jsx)(L.a.Body,{children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)("h1",{className:"text-center",children:"EasyRH "}),Object(N.jsx)("p",{className:"text-center",children:"Adicionar funcion\xe1rio"}),Object(N.jsx)(u.a.Label,{children:"NOME"}),Object(N.jsx)(u.a.Control,{onChange:function(e){return g(e.target.value)},placeholder:""}),Object(N.jsx)(u.a.Label,{class:"pt-2",children:"SETOR"}),Object(N.jsx)(u.a.Control,{onChange:function(e){return E(e.target.value)},placeholder:""}),Object(N.jsx)(u.a.Label,{class:"pt-2",children:"SAL\xc1RIO"}),Object(N.jsx)(u.a.Control,{onChange:function(e){return b(e.target.value)},placeholder:""}),Object(N.jsxs)(h.a,{children:[Object(N.jsxs)(p.a,{children:[Object(N.jsx)(u.a.Label,{className:"text-center col pt-3",children:"DATA DE ADMISS\xc3O"}),Object(N.jsx)(A.a,{className:"form-control text-center w-100",selected:s,onChange:function(e){return r(e)}})]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(u.a.Label,{className:"text-center col pt-3",children:"DIAS F\xc9RIAS"}),Object(N.jsx)(u.a.Control,{onChange:function(e){return T(e.target.value)},placeholder:""})]})]}),Object(N.jsx)(h.a,{children:Object(N.jsx)(p.a,{class:"col-12 pb-5 pt-4",children:Object(N.jsx)(x.a,{variant:"primary",onClick:function(e){return F(e)},type:"submit",className:"button-primary",children:"Continuar"})})})]})})})})})),F=(a(164),Object(o.g)((function(e){var t,a,n,s,r=new R,l=Object(c.useState)(0),o=Object(i.a)(l,2),j=o[0],b=o[1],x=Object(c.useState)(0),m=Object(i.a)(x,2),v=m[0],f=m[1],g=Object(c.useState)(0),y=Object(i.a)(g,2),C=y[0],w=y[1],E=Object(c.useState)(1),k=Object(i.a)(E,2),I=(k[0],k[1]),A=Object(c.useState)(0),D=Object(i.a)(A,2),T=D[0],F=D[1],B=Object(c.useState)(0),U=Object(i.a)(B,2),H=U[0],M=U[1],P=Object(c.useState)(""),q=Object(i.a)(P,2),z=q[0],$=q[1],K=Object(c.useState)("N/A"),Q=Object(i.a)(K,2),_=Q[0],V=Q[1],G=Object(c.useState)(0),J=Object(i.a)(G,2),Y=J[0],W=J[1],X=Object(c.useState)(15),Z=Object(i.a)(X,2),ee=Z[0],te=Z[1],ae=Object(c.useState)(0),ce=Object(i.a)(ae,2),ne=(ce[0],ce[1]),se=Object(c.useState)(0),re=Object(i.a)(se,2),le=(re[0],re[1]),oe=Object(c.useState)(0),ie=Object(i.a)(oe,2),je=ie[0],de=ie[1],Oe=Object(c.useState)(0),be=Object(i.a)(Oe,2),ue=be[0],he=be[1],xe=Object(c.useState)(0),pe=Object(i.a)(xe,2),me=pe[0],ve=pe[1],fe=Object(c.useState)(0),ge=Object(i.a)(fe,2),ye=ge[0],Se=ge[1],Ne=Object(c.useState)(0),Ce=Object(i.a)(Ne,2),we=Ce[0],Ee=Ce[1],ke=Object(c.useState)(0),Le=Object(i.a)(ke,2),Re=Le[0],Ie=Le[1],Ae=Object(c.useState)(0),De=Object(i.a)(Ae,2),Te=De[0],Fe=De[1],Be=Object(c.useState)(0),Ue=Object(i.a)(Be,2),He=Ue[0],Me=Ue[1],Pe=Object(c.useState)(0),qe=Object(i.a)(Pe,2),ze=qe[0],$e=qe[1],Ke=Object(c.useState)(0),Qe=Object(i.a)(Ke,2),_e=Qe[0],Ve=Qe[1],Ge=Object(c.useState)(0),Je=Object(i.a)(Ge,2),Ye=Je[0],We=(Je[1],Object(c.useState)(0)),Xe=Object(i.a)(We,2),Ze=Xe[0],et=Xe[1],tt=Object(c.useState)(0),at=Object(i.a)(tt,2),ct=at[0],nt=at[1];function st(e,t){var a;return a=12*(t.getFullYear()-e.getFullYear()),a-=e.getMonth(),(a+=t.getMonth())<=0?0:a}var rt=function(){var t=Object(O.a)(d.a.mark((function t(a){var c,n,s,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.getEmployee(e.employeeId);case 3:c=t.sent,n=c.data,console.log(n),f(n),V(n.department),b(n.gross),console.log(n.gross),$(n.name),s=new Date,l=new Date(n.hired_at),o=st(l,s),I(o),console.log(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),Object(S.b)("Erro ao calcular",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){lt()}),[v,ee,Y]);var lt=function(){var e=Object(O.a)(d.a.mark((function e(t){var a,c,n,s,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return a=new Date,c=new Date(v.hired_at),n=st(c,a),console.log(n),e.prev=6,s={gross:v.gross,months:n,adds:Y,vacation_days:ee},e.next=10,r.calculateSalary(s);case 10:l=e.sent,o=l.data,console.log(o),w(o.salary.liquid),b(o.salary.gross),F(o.vacation.liquid),M(o.thirteenth.liquid),Ie(o.salary.taxes.taxas.inss.deduction),Ee(o.salary.taxes.taxas.irrf.deduction),Me(o.salary.taxes.taxas.inss.aliquot),Fe(o.salary.taxes.taxas.irrf.aliquot),le(Re+He),ne(we+Te),de(o.vacation.taxes.taxas.irrf.deduction),he(o.vacation.taxes.taxas.inss.deduction),Se(o.vacation.taxes.taxas.inss.aliquot),ve(o.vacation.taxes.taxas.irrf.aliquot),Ve(o.thirteenth.taxes.taxas.inss.deduction),$e(o.thirteenth.taxes.taxas.inss.deduction),et(o.thirteenth.taxes.taxas.irrf.aliquot),et(o.thirteenth.taxes.taxas.irrf.aliquot),nt(o),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(6),Object(S.b)("Erro ao calcular",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 37:case"end":return e.stop()}}),e,null,[[6,34]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(L.a,{show:e.show,onHide:function(){e.setShow(!1)},keyboard:!1,onChange:function(e){return lt(e)},onShow:function(){return rt()},children:Object(N.jsx)(L.a.Dialog,{children:Object(N.jsx)(L.a.Body,{children:Object(N.jsxs)(u.a,{class:"pt-2 mx-2",children:[Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"NOME"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:z,readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"SETOR"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:_,readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"SAL\xc1RIO BRUTO (Mensal)"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+j.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"SAL\xc1RIO L\xcdQUIDO (Mensal)"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+C.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"TOTAL BRUTO (Per\xedodo Total)"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+(null===ct||void 0===ct||null===(t=ct.total)||void 0===t||null===(a=t.gross)||void 0===a?void 0:a.toFixed(2))||!1,readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"TOTAL L\xcdQUIDO (Per\xedodo Total)"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+(null===ct||void 0===ct||null===(n=ct.total)||void 0===n||null===(s=n.liquid)||void 0===s?void 0:s.toFixed(2))||!1,readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"ADICIONAIS/DESCONTOS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{onChange:function(e){W(e.target.value)},placeholder:Y})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O INSS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+Re.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA INSS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:He+" %",readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O IRRF"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+we.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA IRRF"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:Te+" %",readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"F\xc9RIAS (DIAS)"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+T.toFixed(2),readOnly:!0})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{onChange:function(e){te(e.target.value)},placeholder:ee})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O INSS F\xc9RIAS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+ue.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA INSS F\xc9RIAS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:ye+" %",readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O IRRF F\xc9RIAS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+je.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA IRRF F\xc9RIAS"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:me+" %",readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",children:"D\xc9CIMO TERCEIRO"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+H.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O INSS 13\xba"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+_e.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA INSS 13\xba"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:Ze+" %",readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"DEDU\xc7\xc3O IRRF 13\xba"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:"R$ "+ze.toFixed(2),readOnly:!0})})]}),Object(N.jsxs)(h.a,{className:"py-2",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Label,{className:"pl-2",readOnly:!0,children:"AL\xcdQUOTA IRRF 13\xba"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(u.a.Control,{placeholder:Ye+" %",readOnly:!0})})]}),Object(N.jsx)(h.a,{})]})})})})}))),B=Object(o.g)((function(e){var t=new R,a=Object(c.useState)(!1),n=Object(i.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),j=o[0],u=o[1],m=Object(c.useState)(),v=Object(i.a)(m,2),f=v[0],g=v[1],y=Object(c.useState)([]),C=Object(i.a)(y,2),w=C[0],E=C[1];Object(c.useEffect)((function(){I()}),[s]);var L=function(e,t){g(t),u(!j)},I=function(){var e=Object(O.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getEmployees();case 3:a=e.sent,c=a.data,E(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(O.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.history.push({pathname:"/sair"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(d.a.mark((function e(a,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,t.deleteEmployee(c);case 4:I(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(S.b)("Funcion\xe1rio deletado",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(T,{show:s,setShow:r}),Object(N.jsx)(F,{show:j,setShow:u,employeeId:f}),Object(N.jsxs)(b.a,{fluid:!0,children:[Object(N.jsx)(h.a,{children:Object(N.jsxs)(p.a,{class:"col-12 mt-4 mb-2 pl-5",children:[Object(N.jsx)("h1",{children:"EasyRH"}),Object(N.jsx)("p",{children:e.user.name}),Object(N.jsxs)("p",{children:["CNPJ: ",e.user.cnpj]}),Object(N.jsx)(x.a,{onClick:function(e){return A(e)},variant:"secundary",children:"Sair"})]})}),Object(N.jsx)(b.a,{fluid:"md",children:Object(N.jsx)(h.a,{children:Object(N.jsx)(p.a,{children:Object(N.jsxs)(k.a,{bordered:!0,hover:!0,responsive:!0,children:[Object(N.jsx)("thead",{class:"thead-dark",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",colSpan:"1",className:"text-center",children:"#"}),Object(N.jsx)("th",{scope:"col",colSpan:"2",children:"Nome"}),Object(N.jsx)("th",{scope:"col",colSpan:"3",children:"Setor"}),Object(N.jsx)("th",{scope:"col",colSpan:"4",className:"text-center",children:Object(N.jsx)(x.a,{id:"btnAdicionar",variant:"secundary",onClick:function(){return r(!s)},children:Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",class:"bi bi-plus-square",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(N.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]})})})]})}),Object(N.jsx)("tbody",{children:null===w||void 0===w?void 0:w.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"text-center",colSpan:"1",onClick:function(t){return L(0,e.id)},children:e.id.slice(e.id.length-4,e.id.length)}),Object(N.jsx)("td",{className:"text-center",colSpan:"2",onClick:function(t){return L(0,e.id)},children:e.name}),Object(N.jsx)("td",{className:"text-center",colSpan:"3",onClick:function(t){return L(0,e.id)},children:(null===e||void 0===e?void 0:e.department)||"N/A"}),Object(N.jsx)("td",{className:"text-center",colSpan:"4",children:Object(N.jsx)(x.a,{class:"btnExcluir",variant:"secundary",onClick:function(t){return D(t,e.id)},children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})})})})]},t)}))})]})})})})]})]})})),U=Object(o.g)((function(e){return Object(c.useEffect)((function(){localStorage.clear(),e.history.push({pathname:"/",state:{}}),S.b.success("Voc\xea saiu!",{autoClose:3e3,position:"top-right"})}),[]),Object(N.jsx)("div",{})})),H=a(40),M=a(80),P=(a(168),a(53));var q=function(e){var t=e.component,a=Object(M.a)(e,["component"]),n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(N.jsx)(o.b,Object(H.a)(Object(H.a)({},a),{},{render:function(e){return function(){var e=localStorage.getItem("@TOKEN");try{Object(P.a)(e)}catch(t){console.log(t)}return l(e),!!e&&!(Object(P.a)(e).exp<(new Date).getTime()/1e3)}()?Object(N.jsx)(t,Object(H.a)(Object(H.a)({},e),{},{user:Object(P.a)(localStorage.getItem("@TOKEN")),token:r})):Object(N.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var z=function(){return Object(N.jsx)(l.a,{children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{exact:!0,path:"/",children:Object(N.jsx)(C,{})}),Object(N.jsx)(o.b,{path:"/cadastro",children:Object(N.jsx)(w,{})}),Object(N.jsx)(o.b,{path:"/OTP",children:Object(N.jsx)(E,{})}),Object(N.jsx)(o.b,{path:"/sair",children:Object(N.jsx)(U,{})}),Object(N.jsx)(q,{path:"/dashboard",component:B})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(166);r.a.render(Object(N.jsxs)(n.a.StrictMode,{children:[Object(N.jsx)(z,{}),Object(N.jsx)(S.a,{})]}),document.getElementById("root")),$()},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.2ff94e5a.chunk.js.map