(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6138],{72535:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners/view",function(){return n(86502)}])},64534:function(e,a,n){"use strict";n.d(a,{k:function(){return s}});var r=n(85893),t=n(37566),s=function(e){var a=e.className,n=e.children;return(0,r.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,r.jsx)(t.v2,{}),(0,r.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(a),children:n})]})}},58421:function(e,a,n){"use strict";n.d(a,{KR:function(){return o},M5:function(){return j},Iy:function(){return y},Nj:function(){return g}});var r=n(85893),t=n(67294),s=n(96486),c=n(20704),i=function(e){try{return(0,s.pick)(e,Object.keys(c.oL))}catch(a){return{}}},l=n(2428),u=n(99446),o=function(e){var a=e.guid,n=e.setLoading,s=(0,l.aM)("api/partners/".concat(a)),c=s.data,o=s.status,d=s.isLoading;(0,t.useEffect)((function(){n(d)}),[d]);var p=i(c);(function(e){try{return JSON.parse(e.extra_data)}catch(a){return!1}})(c)&&(p.extra_data=JSON.parse(c.extra_data));var m="edit-partner-".concat(o);return(0,r.jsx)(u.T4,{data:c,initialValues:p},m)},d=n(29815),p=n(4374),m=n(25487),f=n(27106),x=n(67622),h=n(17108),v=n(56070),j=function(e){var a=e.pages,n=(0,p.$)().t,s=(0,l.M_)().company,c=t.useCallback((function(e){var a=e.guid,t=e.has_access;return(0,r.jsxs)("div",{className:"render-action",children:[(0,r.jsx)(f.Z,{className:"render-action-btn text-primary",href:"/partners/view?guid=".concat(a),children:(0,r.jsx)("i",{className:"fas fa-eye"})}),(0,r.jsx)(f.Z,{className:"text-base flex items-center justify-center rounded-full text-primary",href:"/partners/file?guid=".concat(a),title:n("partners.customerFile"),children:(0,r.jsx)("i",{className:"fas fa-file-invoice"})}),1==t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{className:"render-action-btn text-primary",href:"/partners/edit?guid=".concat(a),children:(0,r.jsx)("i",{className:"fas fa-pen"})}),(0,r.jsx)(x.vS,{guid:a,small:!0,api:"partners",removeFunction:m.Y5,redirect:"/partners"})]})]})}),[s]),i=[{name:n("partners.name"),field:"name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:n("partners.type"),field:"type",cellClassName:"whitespace-nowrap sm:w-44",columnClassName:"whitespace-nowrap"},{name:n("companies.name"),field:"company_name",cellClassName:"whitespace-nowrap sm:w-44",columnClassName:"whitespace-nowrap"},{name:n("actions"),cellClassName:"whitespace-nowrap justify-between",columnClassName:"whitespace-nowrap sm:w-28",renderRecordCell:c}],u=(a||[]).reduce((function(e,a){return(0,d.Z)(e).concat((0,d.Z)(a))}),[]);return(0,r.jsx)(r.Fragment,{children:0===(null===u||void 0===u?void 0:u.length)?(0,r.jsx)(h.Z,{}):(0,r.jsx)(v.Z,{columns:i,data:u,keyFunction:function(e){return e.guid}})})},w=n(26042),N=n(37566),y=function(e){var a=e.guid,n=(0,l.aM)("api/partners/".concat(a)),t=n.data,s=n.status;return(0,r.jsxs)("div",{className:"flex",children:["loading"===s&&(0,r.jsx)(N.gb,{}),"error"===s&&(0,r.jsx)(N.jj,{}),"success"===s&&(0,r.jsx)(g,(0,w.Z)({},t))]})},g=function(e){var a=e.guid,n=e.name,t=e.company_name,s=e.type,c=e.created_at,i=e.extra_data,l=e.cui,u=e.email,o=e.phone,f=e.regcom,h=e.has_access,v=(0,p.$)().t,j=JSON.parse(i),w=Object.keys(j).map((function(e){return{key:v(e),value:v(j[e])}})),y=[{key:v("filters.type"),value:s},{key:v("companies.name"),value:t},{key:v("cui"),value:l},{key:v("regcom"),value:f},{key:v("phone"),value:o},{key:v("email"),value:u}].concat((0,d.Z)(w));return(0,r.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"title dark:text-font-dark",children:v("partners.details")}),(0,r.jsx)(N.cs,{date:c,text:v("created")})]}),1==h&&(0,r.jsxs)("div",{className:"flex items-center space-x-2 justify-between py-5 ",children:[(0,r.jsx)(N.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",href:"/partners/edit?guid=".concat(a),children:(0,r.jsx)("i",{className:"far fa-pen-to-square"})}),(0,r.jsx)(x.vS,{guid:a,api:"partners",removeFunction:m.Y5,redirect:"/partners"})]})]}),(0,r.jsx)("div",{className:"flex sm:flex-row flex-col gap-4",children:(0,r.jsx)(N.gn,{title:n,data:y})})]})}},86502:function(e,a,n){"use strict";n.r(a);var r=n(85893),t=n(37566),s=n(64534),c=n(58421);a.default=(0,t.EN)((function(e){var a=e.guid;return(0,r.jsx)(s.k,{children:(0,r.jsx)(c.Iy,{guid:a})})}))}},function(e){e.O(0,[9774,2888,179],(function(){return a=72535,e(e.s=a);var a}));var a=e.O();_N_E=a}]);