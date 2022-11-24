(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4235],{89411:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return a(88422)}])},64534:function(e,r,a){"use strict";a.d(r,{k:function(){return t}});var n=a(85893),s=a(10638),t=function(e){var r=e.className,a=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(s.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(r),children:a})]})}},88422:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return _}});var n=a(47568),s=a(34051),t=a.n(s),l=a(85893),i=a(17015),o=a(82175),d=a(11163),u=a.n(d),c=a(67294),p=a(4374),m=a(47715),x=function(){var e=(0,n.Z)(t().mark((function e(r){var a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={media:{base64:r.base64,name:r.name}},e.abrupt("return",m.o.post("api/users/upload-profile-picture",a));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.o.post("api/users/save-settings",r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=a(10638),v=a(77358),w=a(17203),b=a(64534),g=a(89385),k=a(50856),j=a(74231),N=j.Ry().shape({email:j.Z_().required("user.emailReq"),name:j.Z_().required("user.nameReq"),password:j.Z_().nullable(),newpassword:j.Z_().nullable(),media:j.Ry().shape({full_picture:j.Z_().nullable()}).nullable(),settings:j.Ry().shape({themeColor:j.Z_().nullable(),themeMode:j.Z_().nullable()}).nullable()}),_=function(){var e=(0,p.$)().t,r=(0,c.useContext)(h.Il),a=r.userClaims,s=r.userSettings,d=r.refreshUserSettings,m=(0,c.useState)(!1),j=m[0],_=m[1],y="google.com"===(null===a||void 0===a?void 0:a.firebase.sign_in_provider),Z=function(){var r=(0,n.Z)(t().mark((function r(a){var n,s,l,o,c,p,m,h;return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=a.email,s=a.name,l=a.password,o=a.newpassword,c=a.media,p=a.settings,_(!0),y){r.next=18;break}return m=i.w9.credential(n,l),r.next=6,(0,i.aF)(g.I8.currentUser,m);case 6:if(h=r.sent.user,r.t0=n!==h.email,!r.t0){r.next=11;break}return r.next=11,(0,i.s)(h,n);case 11:if(r.t1=s!==h.displayName,!r.t1){r.next=15;break}return r.next=15,(0,i.ck)(h,{displayName:s});case 15:if(!o){r.next=18;break}return r.next=18,(0,i.gQ)(h,o);case 18:if(r.t2=null===c||void 0===c?void 0:c.base64,!r.t2){r.next=22;break}return r.next=22,x(c);case 22:return r.next=24,f(p);case 24:return d(),k.mv.success(e("user.success")),r.next=28,u().push("/");case 28:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),C=(0,c.useMemo)((function(){return{email:(null===a||void 0===a?void 0:a.email)||"",name:(null===a||void 0===a?void 0:a.name)||"",media:(null===a||void 0===a?void 0:a.picture)||"",settings:{themeColor:null===s||void 0===s?void 0:s.themeColor,themeMode:null===s||void 0===s?void 0:s.themeMode}}}),[a,null===s||void 0===s?void 0:s.themeColor]),I="edit-user-".concat(C.email);return(0,l.jsx)(b.k,{children:(0,l.jsxs)("div",{className:"space-y-4 flex flex-col",children:[(0,l.jsx)("h3",{className:"flex-1 title dark:text-font-dark",children:e("profile")}),(0,l.jsx)(o.J9,{validationSchema:N,onSubmit:Z,initialValues:C,initialStatus:"edit",children:(0,l.jsxs)(o.l0,{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"box dark:border-font-dark-variant flex flex-col w-full flex-wrap gap-8",children:[(0,l.jsxs)("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-4 mt-2",children:[(0,l.jsx)(w.pg,{name:"name",children:(0,l.jsx)(o.gN,{name:"name",as:v.II,label:e("name"),disabled:y})}),(0,l.jsx)(w.pg,{name:"email",children:(0,l.jsx)(o.gN,{name:"email",as:v.II,label:e("email"),disabled:y})})]}),!y&&(0,l.jsxs)("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-4",children:[(0,l.jsx)(w.pg,{name:"password",children:(0,l.jsx)(o.gN,{name:"password",as:v.ro,label:e("oldPassword")})}),(0,l.jsx)(w.pg,{name:"newpassword",children:(0,l.jsx)(o.gN,{name:"newpassword",as:v.ro,label:e("newPassword")})})]})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-4 sm:flex-nowrap flex-wrap",children:[(0,l.jsxs)("div",{className:"box dark:border-font-dark-variant flex-1 flex flex-col gap-4 sm:w-auto w-full",children:[(0,l.jsx)("h3",{className:"title dark:text-font-dark whitespace-nowrap",children:e("user.profileImg")}),(0,l.jsx)(w.fe,{})]}),(0,l.jsxs)("div",{className:"box dark:border-font-dark-variant flex-1 flex flex-col gap-4",children:[(0,l.jsx)("h3",{className:"flex-1 title dark:text-font-dark",children:e("user.theme")}),(0,l.jsx)(h.JK,{}),(0,l.jsx)(h.hY,{})]})]}),(0,l.jsx)(w.k4,{label:e("update"),isLoading:j})]})},I)]})})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=89411,e(e.s=r);var r}));var r=e.O();_N_E=r}]);