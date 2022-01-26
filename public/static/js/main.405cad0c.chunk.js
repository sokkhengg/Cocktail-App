(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},112:function(e,t,n){},115:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(26),r=n.n(a),s=(n(101),n(4)),i=(n(102),n(16)),j=n(18),l=n(8),o=n(17),d=n(15),u=n(10),b=n(1);var O=function(e){var t=e.setCurrentUser,n=Object(c.useState)([]),a=Object(s.a)(n,2),r=(a[0],a[1]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:6,children:Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var n={username:e.target[0].value,password:e.target[1].value};console.log(n),fetch("signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return r(e.errors)}))}))},children:[Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(l.a.Label,{children:"Username"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Enter username"})]}),Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(l.a.Label,{children:"Password"}),Object(b.jsx)(l.a.Control,{type:"password",placeholder:"Password"})]}),Object(b.jsx)("p",{children:"Click Sign Up to create a new account"}),Object(b.jsx)(j.a,{variant:"primary",type:"submit",children:"Sign Up"})]})}),Object(b.jsx)(u.a,{})]})})})},h=n(66),x=n(39),m=n(85),p=n(60);n(112);var f=function(e){var t=e.currentUser,n="Logged in as ".concat(t.username);return Object(b.jsx)(h.a,{className:"sticky-top nav-bar",collapseOnSelect:!0,expand:"lg",variant:"dark",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h.a.Brand,{path:"/home",className:"title",children:"Cocktail App"}),Object(b.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsx)("div",{children:Object(b.jsxs)(x.a,{className:"nav-container",children:[Object(b.jsx)(p.LinkContainer,{to:"/my-cocktail-list",children:Object(b.jsx)(x.a.Link,{className:"nav-links",children:" My Cocktails"})}),Object(b.jsx)(p.LinkContainer,{className:"nav-links",to:"/cocktail-list",children:Object(b.jsx)(x.a.Link,{children:"Cocktails"})}),Object(b.jsx)(p.LinkContainer,{to:"/my-liquor-cabinet",children:Object(b.jsx)(x.a.Link,{className:"nav-links",children:"My Liquor Cabinet"})}),Object(b.jsx)(p.LinkContainer,{to:"/new-cocktail",children:Object(b.jsx)(x.a.Link,{className:"nav-links",children:"New Cocktail"})}),t.username?Object(b.jsx)(m.a,{title:n,id:"basic-nav-dropdown",children:Object(b.jsx)(m.a.Item,{href:"/login",children:"Logout"})}):Object(b.jsx)(p.LinkContainer,{to:"/login",children:Object(b.jsx)(x.a.Link,{className:"nav-links",children:"Login"})})]})})})]})})};var g=function(e){var t=e.setCurrentUser;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:6,children:Object(b.jsxs)(l.a,{onSubmit:function(e){return function(e){e.preventDefault(),console.log(e);var n={username:e.target[0].value,password:e.target[1].value};fetch("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return console.log(e)}))}))}(e)},children:[Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(l.a.Label,{children:"Username"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Enter username"})]}),Object(b.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(l.a.Label,{children:"Password"}),Object(b.jsx)(l.a.Control,{type:"password",placeholder:"Password"})]}),Object(b.jsx)(j.a,{variant:"primary",type:"submit",children:"Log in"})]})}),Object(b.jsx)(u.a,{})]})})})},v=n(93),_=n(86);function N(e){var t=e.currentUser,n=e.setCurrentUser;return Object(b.jsx)("div",{children:Object(b.jsxs)(v.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(b.jsx)(_.a,{eventKey:"login",title:"Login",children:Object(b.jsx)(g,{setCurrentUser:n,currentUser:t})}),Object(b.jsx)(_.a,{eventKey:"signup",title:"Signup",children:Object(b.jsx)(O,{setCurrentUser:n,currentUser:t})})]})})}var k=n(9),y=(n(115),n(30)),C=n(19);var S=function(e){var t=e.cocktail,n=(e.currentUser,Object(c.useState)([])),a=Object(s.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)([]),o=Object(s.a)(l,2),d=o[0],u=o[1],O=t.name,h=(t.instructions,t.alcoholic),x=(t.category,t.image,t.glass,t.iba,t.ingredient_1_name),m=t.ingredient_2_name,p=t.ingredient_3_name,f=t.ingredient_4_name,g=t.ingredient_5_name,v=t.ingredient_6_name,_=t.ingredient_1_id,N=t.ingredient_2_id,k=t.ingredient_3_id,S=t.ingredient_4_id,I=t.ingredient_5_id,U=t.ingredient_6_id,L=t.measure_1,G=t.measure_2,w=t.measure_3,T=t.measure_4,E=(t.measure_5,t.measure_6);Object(c.useEffect)((function(){fetch("http://localhost:3000/user_ingredients/1").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]);var P=d.find((function(e){return e.ingredient.name===x})),D=d.find((function(e){return e.ingredient.name===m})),F=d.find((function(e){return e.ingredient.name===p})),B=d.find((function(e){return e.ingredient.name===f})),A=d.find((function(e){return e.ingredient.name===g})),q=d.find((function(e){return e.ingredient.name===v}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(y.a,{border:"secondary",style:{width:"18rem",margin:"10px"},children:[Object(b.jsx)(C.Link,{to:t?"/cocktails/".concat(t.id):null,children:Object(b.jsx)(y.a.Img,{className:"card-image-top",variant:"top",style:{width:"109.5%"},src:"https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"border"}),Object(b.jsxs)(y.a.Body,{children:[Object(b.jsxs)(y.a.Title,{children:[O," ",Object(b.jsx)("span",{className:"alcoholic",children:h})]}),Object(b.jsx)("div",{className:"border"}),Object(b.jsx)(y.a.Text,{children:Object(b.jsxs)("ul",{children:[_?Object(b.jsxs)("li",{children:[L," ",x," ",P?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,N?Object(b.jsxs)("li",{children:[G," ",m," ",D?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,k?Object(b.jsxs)("li",{children:[w," ",p," ",F?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,S?Object(b.jsxs)("li",{children:[T," ",f," ",B?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,I?Object(b.jsxs)("li",{children:[E," ",g," ",A?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,U?Object(b.jsxs)("li",{children:[E," ",v," ",q?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null]})}),Object(b.jsx)(C.Link,{className:"make",to:t?"/cocktails/".concat(t.id):null,children:Object(b.jsxs)(j.a,{variant:"success",children:["Make a ",O]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)(j.a,{variant:"outline-danger",size:"sm","data-cocktail-id":t.id,onClick:function(e){return function(e){var t=e.target.attributes[0].value;fetch("http://localhost:3000/cocktails/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),i(!r)}))}(e)},children:"\ud83d\uddd1\ufe0f"})]})})},I=n(25);var U=function(e){var t,n=e.currentUser,a=Object(c.useState)(""),r=Object(s.a)(a,2),i=r[0],j=r[1],O=Object(c.useState)(1),h=Object(s.a)(O,2),x=h[0],m=h[1],p=Object(c.useState)(),f=Object(s.a)(p,2),g=f[0],v=f[1],_=Object(c.useState)(24),N=Object(s.a)(_,2),y=N[0],C=N[1];function U(){m(x+1)}function L(){m(x-1)}function G(e){m(parseInt(e.target.text))}Object(c.useEffect)((function(){fetch("/cocktails?per_page=".concat(y,"&page=").concat(x)).then((function(e){return e.json()})).then((function(e){j(e)}))}),[x,y]),Object(c.useEffect)((function(){fetch("/cocktail-total").then((function(e){return e.json()})).then((function(e){return v(e)}))}),[y]);for(var w=[],T=1;T<=Math.ceil(g/y);T++)w.push(Object(b.jsx)(I.a.Item,{active:T===x,onClick:G,children:T},T));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{id:"top-pagination",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{children:Object(b.jsxs)(l.a.Select,{"aria-label":"Results per page",onChange:function(e){C(parseInt(e.target.value))},children:[Object(b.jsx)("option",{children:"Results per page"}),Object(b.jsx)("option",{value:"24",children:"24"}),Object(b.jsx)("option",{value:"48",children:"48"}),Object(b.jsx)("option",{value:"72",children:"72"})]})}),Object(b.jsx)(u.a,{xs:10,flex:!0,className:"d-flex justify-content-center",children:Object(b.jsxs)(I.a,{children:[1===x?Object(b.jsx)(I.a.Prev,{disabled:!0}):Object(b.jsx)(I.a.Prev,{onClick:L}),Object(b.jsx)(I.a,{children:w}),x===Math.ceil(g/24)?Object(b.jsx)(I.a.Next,{disabled:!0}):Object(b.jsx)(I.a.Next,{onClick:U})]})}),Object(b.jsx)(u.a,{})]})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(d.a,(t={xs:1,md:3,className:"g-4"},Object(k.a)(t,"className","d-flex justify-content-center"),Object(k.a)(t,"children",i?i.map((function(e){return Object(b.jsx)(S,{cocktail:e,currentUser:n},e.id)})):null),t))}),Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:10,flex:!0,className:"d-flex justify-content-center",children:Object(b.jsxs)(I.a,{children:[1===x?Object(b.jsx)(I.a.Prev,{disabled:!0}):Object(b.jsx)(I.a.Prev,{onClick:L}),Object(b.jsx)(I.a,{children:w}),x===Math.ceil(g/24)?Object(b.jsx)(I.a.Next,{disabled:!0}):Object(b.jsx)(I.a.Next,{onClick:U})]})}),Object(b.jsx)(u.a,{})]})})]})};var L=function(e){e.currentUser;var t,n=Object(c.useState)([]),a=Object(s.a)(n,2),r=a[0],i=a[1],j=Object(c.useState)(!1),l=Object(s.a)(j,2);return l[0],l[1],Object(c.useEffect)((function(){fetch("/my-custom-cocktails/?id=1").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(y.a,{className:"text-center",children:Object(b.jsx)(y.a.Body,{children:Object(b.jsxs)(y.a.Title,{children:["You can make ",r.length," cocktails!"]})})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(d.a,(t={xs:1,md:3,className:"g-4"},Object(k.a)(t,"className","d-flex justify-content-center"),Object(k.a)(t,"children",r?r.map((function(e){return Object(b.jsx)(S,{cocktail:e},e.id)})):null),t))})]})},G=n(29),w=n(40);var T=function(e){for(var t=e.ingredients,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],O=Object(c.useState)(""),h=Object(s.a)(O,2),x=(h[0],h[1]),m=Object(c.useState)(""),p=Object(s.a)(m,2),f=p[0],g=p[1],v=Object(c.useState)(""),_=Object(s.a)(v,2),N=_[0],y=_[1],S=Object(c.useState)(""),I=Object(s.a)(S,2),U=I[0],L=I[1],T=Object(c.useState)(""),E=Object(s.a)(T,2),P=E[0],D=E[1],F=Object(c.useState)(""),B=Object(s.a)(F,2),A=B[0],q=B[1],J=Object(c.useState)(""),M=Object(s.a)(J,2),R=M[0],z=M[1],H=Object(c.useState)(""),K=Object(s.a)(H,2),V=K[0],Y=K[1],Q=Object(c.useState)(""),W=Object(s.a)(Q,2),X=W[0],Z=W[1],$=Object(c.useState)(""),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(""),ae=Object(s.a)(ce,2),re=ae[0],se=ae[1],ie=Object(c.useState)(""),je=Object(s.a)(ie,2),le=je[0],oe=je[1],de=Object(c.useState)(""),ue=Object(s.a)(de,2),be=ue[0],Oe=ue[1],he={id:"value",name:"label"},xe=[],me=0;me<t.length;me++){var pe=fe(t[me],he);xe.push(pe)}function fe(e,t){var n=Object.keys(e).map((function(n){var c=t[n]||n;return Object(k.a)({},c,e[n])}));return Object.assign.apply(Object,[{}].concat(Object(G.a)(n)))}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C.Link,{to:"/cocktails/".concat(r),children:Object(b.jsx)(j.a,{onClick:function(){return i("")},children:"Check out your cocktail!"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(j.a,{onClick:function(){return i("")},children:"Add another cocktail!"})]}):Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(e);var t={name:e.target[0].value,category:e.target[1].value,image:e.target[2].value,glass:e.target[3].value,instructions:e.target[4].value,ingredient_1_name:f,ingredient_1_id:N,measure_1:e.target[6].value,ingredient_2_name:U,ingredient_2_id:P,measure_2:e.target[8].value,ingredient_3_name:A,ingredient_3_id:R,measure_3:e.target[10].value,ingredient_4_name:V,ingredient_4_id:X,measure_4:e.target[12].value,ingredient_5_name:te,ingredient_5_id:re,measure_5:e.target[14].value,ingredient_6_name:le,ingredient_6_id:be,measure_6:e.target[16].value};console.log(t),fetch("http://localhost:3000/cocktails",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json().then((function(e){console.log(e),i(e)})):e.json().then((function(e){return x(e)}))}))},children:[Object(b.jsx)("h4",{children:"Add a New Cocktail"}),Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Cocktail Name:"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Cocktail Name"})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Image URL:"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Image URL"})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Glass Type:"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Glass Type"})]})]}),Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Instructions:"}),Object(b.jsx)(l.a.Control,{type:"text",placeholder:"Instructions"})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Cocktail Name:"}),Object(b.jsxs)(l.a.Select,{defaultValue:"Choose...",children:[Object(b.jsx)("option",{children:"Choose Category..."}),Object(b.jsx)("option",{value:"Beer",children:"Beer"}),Object(b.jsx)("option",{value:"Cocktail",children:"Cocktail"}),Object(b.jsx)("option",{value:"Cocoa",children:"Cocoa"}),Object(b.jsx)("option",{value:"Coffee / Tea",children:"Coffee / Tea"}),Object(b.jsx)("option",{value:"Homemade Liqueur",children:"Homemade Liqueur"}),Object(b.jsx)("option",{value:"Milk / Float / Shake",children:"Milk / Float / Shake"}),Object(b.jsx)("option",{value:"Ordinary Drink",children:"Ordinary Drink"}),Object(b.jsx)("option",{value:"Other",children:"Other"}),Object(b.jsx)("option",{value:"Punch / Party Drink",children:"Punch / Party Drink"}),Object(b.jsx)("option",{value:"Shot",children:"Shot"}),Object(b.jsx)("option",{value:"Soft Drink / Soda",children:"Soft Drink / Soda"})]})]})]}),Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 1:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),g(e.label),y(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...1"})})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 2:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),L(e.label),D(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...2"})})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 3:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),q(e.label),z(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...3"})})]})]}),Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 4:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),Y(e.label),Z(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...4"})})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 5:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),ne(e.label),se(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...5"})})]}),Object(b.jsxs)(l.a.Group,{as:u.a,controlId:"formGridName",children:[Object(b.jsx)(l.a.Label,{children:"Ingredients 6:"}),Object(b.jsx)(w.a,{options:xe,onChange:function(e){return function(e){console.log(e),oe(e.label),Oe(e.value)}(e)}}),Object(b.jsx)(l.a.Group,{as:u.a,controlId:"formGridName",children:Object(b.jsx)(l.a.Control,{type:"text",placeholder:"measure...6"})})]})]}),Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:"auto",children:Object(b.jsx)(j.a,{variant:"primary",type:"submit",children:"Add Cocktail"})}),Object(b.jsx)(u.a,{})]})})})};var E=function(e){for(var t=e.ingredients,n=(e.currentUser,e.ingredientsUpdated),a=e.setIngredientsUpdated,r=Object(c.useState)(""),i=Object(s.a)(r,2),O=i[0],h=i[1],x=Object(c.useState)(""),m=Object(s.a)(x,2),p=m[0],f=m[1],g=Object(c.useState)(""),v=Object(s.a)(g,2),_=v[0],N=v[1],y={id:"value",name:"label"},C=[],S=0;S<t.length;S++){var I=U(t[S],y);C.push(I)}function U(e,t){var n=Object.keys(e).map((function(n){var c=t[n]||n;return Object(k.a)({},c,e[n])}));return Object.assign.apply(Object,[{}].concat(Object(G.a)(n)))}return Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:6,children:Object(b.jsx)(l.a,{onSubmit:function(e){return function(e){e.preventDefault();var t={user_id:1,ingredient_id:O.value};fetch("http://localhost:3000/user_ingredients/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json().then((function(e){a(!n),f(e),setTimeout((function(){f("")}),3e3)})):e.json().then((function(e){N(e),setTimeout((function(){N("")}),3e3)}))}))}(e)},className:"text-center",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{xs:10,children:Object(b.jsx)(w.a,{options:C,onChange:function(e){return function(e){h(e)}(e)}})}),Object(b.jsx)(u.a,{children:Object(b.jsx)(j.a,{variant:"primary",type:"submit",children:"Add"})}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)("br",{}),p?Object(b.jsxs)("p",{children:["\ud83c\udf89 \xa0\xa0Added ",p.name,"!"]}):null,_?Object(b.jsx)("p",{children:"You already added that!"}):null]})]})})}),Object(b.jsx)(u.a,{})]})})})},P=n(87);var D=function(e){e.currentUser;var t,n=e.currentIngredients,a=e.setCurrentIngredients,r=e.ingredientsUpdated,s=e.setIngredientsUpdated;return Object(c.useEffect)((function(){fetch("http://localhost:3000/user_ingredients/1").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(d.a,(t={xs:1,md:2,className:"g-4"},Object(k.a)(t,"className","d-flex justify-content-center"),Object(k.a)(t,"children",Object(b.jsx)(P.a,{as:"ul",variant:"flush",children:n.length>0?n.filter((function(e){return 289!==e.ingredient.id})).map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(P.a.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:[Object(b.jsx)("div",{className:"ms-2 me-auto",children:Object(b.jsx)("div",{className:"fw-bold",children:e.ingredient.name})}),Object(b.jsx)(j.a,{variant:"outline-danger",size:"sm","data-useringredient-id":e.id,onClick:function(e){return function(e){var t=e.target.attributes[0].value;fetch("http://localhost:3000/user_ingredients/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(!r)}))}(e)},children:"\ud83d\uddd1\ufe0f"})]},e.ingredient.id)})})):"You don't have any ingredients"})),t))})})};var F=function(e){var t=e.ingredients,n=e.currentUser,a=Object(c.useState)(!1),r=Object(s.a)(a,2),i=r[0],j=r[1],l=Object(c.useState)([]),O=Object(s.a)(l,2),h=O[0],x=O[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(u.a,{xs:10,className:"text-center",children:Object(b.jsx)("h3",{children:"Add/delete what you have in your liquor cabinet, fridge, and pantry."})}),Object(b.jsx)(u.a,{})]})}),Object(b.jsx)("br",{}),Object(b.jsx)(E,{ingredients:t,currentUser:n,ingredientsUpdated:i,setIngredientsUpdated:j}),Object(b.jsx)("br",{}),Object(b.jsx)(D,{currentUser:n,currentIngredients:h,setCurrentIngredients:x,ingredientsUpdated:i,setIngredientsUpdated:j})]})},B=n(94);var A=function(e){Object(B.a)(e);var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)([]),l=Object(s.a)(j,2),o=l[0],d=l[1],u=Object(i.m)().id;Object(c.useEffect)((function(){fetch("http://localhost:3000/cocktails/".concat(u)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var O=a.name,h=a.instructions,x=a.alcoholic,m=a.category,p=(a.image,a.glass),f=a.iba,g=a.ingredient_1_name,v=a.ingredient_2_name,_=a.ingredient_3_name,N=a.ingredient_4_name,k=a.ingredient_5_name,y=a.ingredient_6_name,C=a.ingredient_1_id,S=a.ingredient_2_id,I=a.ingredient_3_id,U=a.ingredient_4_id,L=a.ingredient_5_id,G=a.ingredient_6_id,w=a.measure_1,T=a.measure_2,E=a.measure_3,P=a.measure_4,D=(a.measure_5,a.measure_6);Object(c.useEffect)((function(){fetch("http://localhost:3000/user_ingredients/1").then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]);var F=o.find((function(e){return e.ingredient.name===g})),A=o.find((function(e){return e.ingredient.name===v})),q=o.find((function(e){return e.ingredient.name===_})),J=o.find((function(e){return e.ingredient.name===N})),M=o.find((function(e){return e.ingredient.name===k})),R=o.find((function(e){return e.ingredient.name===y}));return Object(b.jsxs)("div",{className:"detail-container",children:[Object(b.jsx)("img",{className:"cocktail-image",src:"https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg",alt:O}),Object(b.jsxs)("h1",{children:[O," ",Object(b.jsx)("span",{className:"alcoholic",children:x})]}),Object(b.jsxs)("h6",{children:["Category: ",m]}),f?Object(b.jsxs)("p",{children:["IBA: ",f]}):null,p?Object(b.jsxs)("p",{children:["Glass: ",p]}):null,Object(b.jsxs)("div",{className:"instructions",children:[Object(b.jsx)("h6",{children:"Ingredients:"}),Object(b.jsxs)("ul",{className:"ingredient-list",children:[C?Object(b.jsxs)("li",{children:[w," ",g," ",F?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,S?Object(b.jsxs)("li",{children:[T," ",v," ",A?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,I?Object(b.jsxs)("li",{children:[E," ",_," ",q?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,U?Object(b.jsxs)("li",{children:[P," ",N," ",J?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,L?Object(b.jsxs)("li",{children:[D," ",k," ",M?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null,G?Object(b.jsxs)("li",{children:[D," ",y," ",R?Object(b.jsx)("span",{className:"have",children:"\u2705"}):Object(b.jsx)("span",{className:"need",children:"Need"})]}):null]}),Object(b.jsx)("p",{children:h})]})]})};var q=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),j=Object(s.a)(r,2),l=j[0],o=j[1];return Object(c.useEffect)((function(){fetch("auth").then((function(e){e.ok&&e.json().then((function(e){return a([e])}))}))}),[]),Object(c.useEffect)((function(){fetch("/ingredients").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{currentUser:n}),Object(b.jsxs)(i.g,{children:[Object(b.jsx)(i.d,{path:"/cocktails/:id",component:function(){return Object(b.jsx)(A,{currentUser:n})}}),Object(b.jsx)(i.d,{path:"/signup",component:function(){return Object(b.jsx)(O,{setCurrentUser:a,currentUser:n})}}),Object(b.jsx)(i.d,{path:"/login",component:function(){return Object(b.jsx)(N,{setCurrentUser:a,currentUser:n})}}),Object(b.jsx)(i.d,{path:"/cocktail-list",component:function(){return Object(b.jsx)(U,{currentUser:n})}}),Object(b.jsx)(i.d,{path:"/my-cocktail-list",component:function(){return Object(b.jsx)(L,{currentUser:n})}}),Object(b.jsx)(i.d,{path:"/new-cocktail",component:function(){return Object(b.jsx)(T,{ingredients:l})}}),Object(b.jsx)(i.d,{path:"/my-liquor-cabinet",component:function(){return Object(b.jsx)(F,{ingredients:l,currentUser:n})}})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(130);r.a.render(Object(b.jsx)(C.BrowserRouter,{children:Object(b.jsx)(i.d,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),J()}},[[131,1,2]]]);
//# sourceMappingURL=main.405cad0c.chunk.js.map