(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2700],{68825:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/sales/categories",function(){return a(89094)}])},47685:function(e,t,a){"use strict";a.d(t,{w:function(){return u}});var s=a(47568),r=a(26042),n=a(69396),o=a(34051),i=a.n(o),l=a(17563),c=a(32809),d=a(47715),u=function(){var e=(0,s.Z)(i().mark((function e(t,a){var s,o,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,l.stringifyUrl)({url:t,query:(0,n.Z)((0,r.Z)({},a),{csv:!0})}),e.next=3,d.o.get(s,{responseType:"blob"});case 3:o=e.sent,u=o.headers["content-disposition"].split("filename=")[1],(0,c.S)(o.data,u);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},64534:function(e,t,a){"use strict";a.d(t,{k:function(){return n}});var s=a(85893),r=a(10638),n=function(e){var t=e.className,a=e.children;return(0,s.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,s.jsx)(r.v2,{}),(0,s.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(t),children:a})]})}},89094:function(e,t,a){"use strict";a.r(t);var s=a(47568),r=a(26042),n=a(99534),o=a(828),i=a(29815),l=a(34051),c=a.n(l),d=a(85893),u=a(32912),m=a(67294),p=a(4374),f=a(47685),h=a(10638),x=a(77358),w=a(70011),v=a(76166),g=a(64534),k=a(50856),N=a(2428),j=a(11860);t.default=function(){var e,t,a=(0,p.$)().t,l=(0,o.Z)((0,N.dd)(),2),b=l[0],y=l[1],_="sales-report-categories",C="api/reports/sales-report-categories/",Z=[{name:a("categories.titles"),field:"category_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:a("products.quantity"),field:"quantity",format:k.Lx,cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"},{name:a("subtotal"),field:"subtotal",format:k.Lx,cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"},{name:a("tvaSum"),field:"vat_sum",format:k.Lx,cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"},{name:a("total"),field:"total",format:k.Lx,cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"}],D=new Date;D.setDate(1);var M=new Date(D);D.setMonth(D.getMonth()+1),D.setDate(0);var E=new Date(D),F=(0,N.M_)({date_from:(0,u.default)(M,"yyyy-MM-dd"),date_to:(0,u.default)(E,"yyyy-MM-dd")},_),L=F.options,P=F.setOptions,S=(0,N.NS)(C,L),z=S.data,I=S.error,q=(0,n.Z)(S,["data","error"]);(0,m.useEffect)((function(){var e=null===I||void 0===I?void 0:I.message;e&&k.mv.error(a("err.".concat(e)))}),[I]);var O=null===z||void 0===z||null===(e=z.pages)||void 0===e?void 0:e.reduce((function(e,t){return(0,i.Z)(e).concat((0,i.Z)(t))}),[]),R=null===z||void 0===z||null===(t=z.pageParams)||void 0===t?void 0:t.totals,T=(0,m.useCallback)((function(e){P((function(t){return(0,r.Z)({},t,e)})),y.hide()}),[]),U=(0,m.useState)(!1),X=U[0],A=U[1],$=(0,m.useCallback)((0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=11;break}return A(!0),e.prev=2,e.next=5,(0,f.w)(C,L);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:A(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[C,L,X]);return(0,d.jsxs)(g.k,{className:"flex flex-col",children:[(0,d.jsxs)(h.Ax,{links:[{name:a("categories.reportProducts"),href:"/reports/sales/products"},{name:a("categories.saleReport"),href:"/reports/sales/categories"},{name:a("categories.reportLoc"),href:"/reports/sales/locations"},{name:a("categories.reportCustomers"),href:"/reports/sales/customers"},{name:a("products.locStocks"),href:"/reports/stocks"},{name:a("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/sales/categories",name:a("categories.reportProducts"),children:[(0,d.jsx)(h.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:$,children:(0,d.jsx)("i",{className:X?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,d.jsx)(h.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:function(){return y.show()},children:(0,d.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,d.jsx)(v.Z,{show:b,modal:y,children:(0,d.jsx)(h.kI,{onFilters:T,children:function(e){var t=e.handleFilter,s=e.applyFilters;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"text-sm text-white",children:a("filter")}),(0,d.jsx)("h3",{className:"title mt-2 text-white",children:a("categories.saleReport")})]}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:_,label:a("from"),id:"date_from",onNewDate:t,value:L.date_from}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:_,label:a("to"),id:"date_to",onNewDate:t,value:L.date_to}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,d.jsx)("h3",{className:"text-xl font-medium mt-2",children:a("search_by")}),Z.map((function(e,a){return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"flex flex-col text-left",children:(0,d.jsx)(x.II,{classes:"text-white",label:e.name,name:e.field,value:j.session.get("".concat(_,"--").concat(e.name)),onChange:function(a){j.session.set("".concat(_,"--").concat(e.name),a.target.value),t(a.target.name,a.target.value)}})})},"header-".concat(a))}))]})]}),(0,d.jsx)("div",{children:(0,d.jsx)(h.zx,{onClick:s,className:"filter-btn",children:a("applyFilters")})})]})}})})]}),0===(null===O||void 0===O?void 0:O.length)?(0,d.jsx)(h.X6,{}):(0,d.jsx)(h.zI,(0,r.Z)({columns:Z,data:O,totals:R,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},q))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=68825,e(e.s=t);var t}));var t=e.O();_N_E=t}]);