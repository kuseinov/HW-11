(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__i45rn",control:"Login_control__35dqL",invalid:"Login_invalid__3YLbJ",actions:"Login_actions__2xbaJ"}},,,function(e,t,n){e.exports={card:"Card_card__1LxM5"}},function(e,t,n){e.exports={button:"Button_button__YYLHF"}},function(e,t,n){e.exports={home:"Home_home__2Iec-"}},function(e,t,n){e.exports={nav:"Navigation_nav__2b7ql"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__21BLR"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),o=n.n(i),s=(n(15),n(2)),l=n(6),r=n.n(l),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=n(3),b=n.n(j),h=n(7),O=n.n(h),m=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})};function p(e,t){return"INPUT_EMAIL"===t.type||"INPUT_PASSWORD"===t.type?{emailValue:t.val,isValid:t.val.includes("@"),passwordValue:t.val,passwordIsValid:t.val.trim().length>6}:{emailValue:"",isValid:void 0,passwordValue:"",passwordIsValid:void 0}}var x={emailValue:"",isValid:void 0,passwordValue:"",passwordIsValid:void 0},g=function(e){var t=Object(a.useReducer)(p,x),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useReducer)(p,x),l=Object(s.a)(o,2),r=l[0],j=l[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),g=O[0],v=O[1];Object(a.useEffect)((function(){var e=setTimeout((function(){v(c.emailValue.includes("@")&&r.passwordValue.trim().length>6)}),1500);return function(){clearTimeout(e)}}),[c.isValid,r.passwordIsValid]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(c.emailValue,r.passwordValue)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===c.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:c.emailValue,onChange:function(e){i({type:"INPUT_EMAIL",val:e.target.value})},onBlur:function(){}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===r.passwordIsValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:r.passwordValue,onChange:function(e){j({type:"INPUT_PASSWORD",val:e.target.value}),v(e.target.value.trim().length>6&&c.emailValue.includes("@"))},onBlur:function(){}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(m,{type:"submit",className:b.a.btn,disabled:!g,children:"Login"})})]})})},v=n(8),f=n.n(v),_=function(e){return Object(u.jsx)(d,{className:f.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},L=n(9),V=n.n(L),I=function(e){return Object(u.jsx)("nav",{className:V.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),w=n.n(N),y=function(e){return Object(u.jsxs)("header",{className:w.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(I,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};function S(e,t){return"PLUS"===t.type?e+1:"MINUS"===t.type?e>1?e-1:e:void 0}var P=function(){var e=Object(a.useReducer)(S,0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("button",{onClick:function(){c({type:"PLUS"})},children:"+"}),Object(u.jsx)("button",{onClick:function(){c({type:"MINUS"})},children:"-"})]})};var U=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){"1"===localStorage.getItem("isLogin")&&i("true")}),[]);var o=function(){i(!1)};return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(y,{isAuthenticated:n,onLogout:o}),Object(u.jsxs)("main",{children:[!n&&Object(u.jsx)(g,{onLogin:function(e,t){localStorage.setItem("isLogin","1"),i(!0)}}),n&&Object(u.jsx)(_,{onLogout:o}),Object(u.jsx)(P,{})]})]})};o.a.render(Object(u.jsx)(U,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.3bbd27ae.chunk.js.map