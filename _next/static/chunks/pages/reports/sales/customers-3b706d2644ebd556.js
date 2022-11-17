(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2222],{14245:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/sales/customers",function(){return s(20896)}])},47685:function(e,t,s){"use strict";s.d(t,{w:function(){return d}});var a=s(47568),r=s(26042),n=s(69396),o=s(34051),l=s.n(o),c=s(17563),i=s(32809),u=s(47715),d=function(){var e=(0,a.Z)(l().mark((function e(t,s){var a,o,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,c.stringifyUrl)({url:t,query:(0,n.Z)((0,r.Z)({},s),{csv:!0})}),e.next=3,u.o.get(a,{responseType:"blob"});case 3:o=e.sent,d=o.headers["content-disposition"].split("filename=")[1],(0,i.S)(o.data,d);case 6:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},64534:function(e,t,s){"use strict";s.d(t,{k:function(){return n}});var a=s(85893),r=s(10638),n=function(e){var t=e.className,s=e.children;return(0,a.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,a.jsx)(r.v2,{}),(0,a.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(t),children:s})]})}},20896:function(e,t,s){"use strict";s.r(t);var a=s(47568),r=s(26042),n=s(99534),o=s(828),l=s(29815),c=s(34051),i=s.n(c),u=s(85893),d=s(32912),m=s(67294),p=s(4374),f=s(47685),h=s(10638),x=s(77358),w=s(70011),v=s(76166),N=s(64534),g=s(50856),j=s(2428),k=s(11860);t.default=function(){var e,t,s=(0,p.$)().t,c=(0,o.Z)((0,j.dd)(),2),y=c[0],_=c[1],b=[{name:s("partners.customer"),field:"partner_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:s("products.quantity"),field:"quantity",format:g.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"},{name:s("subtotal"),field:"subtotal",format:g.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"},{name:s("tvaSum"),field:"vat_sum",format:g.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"},{name:s("total"),field:"total",format:g.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"}],C=new Date;C.setDate(1);var Z=new Date(C);C.setMonth(C.getMonth()+1),C.setDate(0);var F=new Date(C),D="sales-report-customers",M="api/reports/sales-report-customers/",E=(0,j.M_)({date_from:(0,d.default)(Z,"yyyy-MM-dd"),date_to:(0,d.default)(F,"yyyy-MM-dd")},D),L=E.options,S=E.setOptions,z=(0,j.NS)(M,L),I=z.data,P=z.error,q=(0,n.Z)(z,["data","error"]);(0,m.useEffect)((function(){var e=null===P||void 0===P?void 0:P.message;e&&g.mv.error(s("err.".concat(e)))}),[P]);var O=null===I||void 0===I||null===(e=I.pages)||void 0===e?void 0:e.reduce((function(e,t){return(0,l.Z)(e).concat((0,l.Z)(t))}),[]),T=null===I||void 0===I||null===(t=I.pageParams)||void 0===t?void 0:t.totals,U=(0,m.useCallback)((function(e){S((function(t){return(0,r.Z)({},t,e)})),_.hide()}),[]),X=(0,m.useState)(!1),R=X[0],A=X[1],B=(0,m.useCallback)((0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=11;break}return A(!0),e.prev=2,e.next=5,(0,f.w)(M,L);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:A(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[M,L,R]);return(0,u.jsxs)(N.k,{className:"flex flex-col",children:[(0,u.jsxs)(h.Ax,{links:[{name:s("categories.reportProducts"),href:"/reports/sales/products"},{name:s("categories.saleReport"),href:"/reports/sales/categories"},{name:s("categories.reportLoc"),href:"/reports/sales/locations"},{name:s("categories.reportCustomers"),href:"/reports/sales/customers"},{name:s("products.locStocks"),href:"/reports/stocks"},{name:s("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/sales/customers",name:s("categories.reportCustomers"),children:[(0,u.jsx)(h.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:B,children:(0,u.jsx)("i",{className:R?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,u.jsx)(h.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:function(){return _.show()},children:(0,u.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,u.jsx)(v.Z,{show:y,modal:_,children:(0,u.jsx)(h.kI,{onFilters:U,children:function(e){var t=e.handleFilter,a=e.applyFilters;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"text-sm text-white",children:s("filter")}),(0,u.jsx)("h3",{className:"title mt-2 text-white",children:s("categories.reportCustomers")})]}),(0,u.jsx)(w.fU,{prefix:D,label:s("from"),id:"date_from",onNewDate:t,value:L.date_from,classes:"text-white"}),(0,u.jsx)(w.fU,{prefix:D,label:s("to"),id:"date_to",onNewDate:t,value:L.date_to,classes:"text-white"}),(0,u.jsx)("div",{className:"space-y-4 pt-4 h-[60vh] overflow-y-auto",children:(0,u.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,u.jsx)("h3",{className:"text-xl font-medium mt-2",children:s("search_by")}),b.map((function(e,s){return(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"flex flex-col text-left",children:(0,u.jsx)(x.II,{classes:"text-white",label:e.name,name:e.field,value:k.session.get("".concat(D,"--").concat(e.name)),onChange:function(s){k.session.set("".concat(D,"--").concat(e.name),s.target.value),t(s.target.name,s.target.value)}})})},"header-".concat(s))}))]})})]}),(0,u.jsx)("div",{children:(0,u.jsx)(h.zx,{onClick:a,className:"filter-btn",children:s("applyFilters")})})," "]})}})})]}),0===(null===O||void 0===O?void 0:O.length)?(0,u.jsx)(h.X6,{}):(0,u.jsx)(h.zI,(0,r.Z)({columns:b,data:O,totals:T,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},q))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=14245,e(e.s=t);var t}));var t=e.O();_N_E=t}]);