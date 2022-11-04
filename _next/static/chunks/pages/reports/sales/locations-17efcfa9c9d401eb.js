(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{83249:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/sales/locations",function(){return a(66155)}])},47685:function(e,t,a){"use strict";a.d(t,{w:function(){return m}});var s=a(47568),r=a(26042),n=a(69396),o=a(34051),l=a.n(o),i=a(17563),c=a(32809),d=a(47715),m=function(){var e=(0,s.Z)(l().mark((function e(t,a){var s,o,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,i.stringifyUrl)({url:t,query:(0,n.Z)((0,r.Z)({},a),{csv:!0})}),e.next=3,d.o.get(s,{responseType:"blob"});case 3:o=e.sent,m=o.headers["content-disposition"].split("filename=")[1],(0,c.S)(o.data,m);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},64534:function(e,t,a){"use strict";a.d(t,{k:function(){return n}});var s=a(85893),r=a(88194),n=function(e){var t=e.className,a=e.children;return(0,s.jsxs)("div",{className:"text-sm bg-[#F2F6FB] md:grid print:flex print:bg-white relative",id:"main",children:[(0,s.jsx)(r.v2,{}),(0,s.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(t),children:a})]})}},66155:function(e,t,a){"use strict";a.r(t);var s=a(47568),r=a(26042),n=a(99534),o=a(828),l=a(29815),i=a(34051),c=a.n(i),d=a(85893),m=a(32912),u=a(67294),p=a(4374),f=a(47685),h=a(88194),x=a(77358),w=a(34913),v=a(76166),N=a(64534),g=a(25230),j=a(61503);t.default=function(){var e,t,a=(0,p.$)().t,i=(0,o.Z)((0,j.dd)(),2),y=i[0],_=i[1],k="sales-report-locations",C="api/reports/sales-report-locations/",b=[{name:a("location"),field:"location_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:a("company"),field:"company_name",cellClassName:"whitespace-nowrap  sm:w-72",columnClassName:"whitespace-nowrap"},{name:a("products.quantity"),field:"quantity",format:g.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("total"),field:"total",format:g.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("tvaSum"),field:"vat_sum",format:g.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("subtotal"),field:"subtotal",format:g.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"}],Z=new Date;Z.setDate(1);var F=new Date(Z);Z.setMonth(Z.getMonth()+1),Z.setDate(0);var L=new Date(Z),D=(0,j.M_)({date_from:(0,m.default)(F,"yyyy-MM-dd"),date_to:(0,m.default)(L,"yyyy-MM-dd")},k),M=D.options,E=D.setOptions,S=(0,u.useCallback)((function(e){E((function(t){return(0,r.Z)({},t,e)})),_.hide()}),[]),z=(0,j.NS)(C,M),I=z.data,P=(0,n.Z)(z,["data"]),q=null===I||void 0===I||null===(e=I.pages)||void 0===e?void 0:e.reduce((function(e,t){return(0,l.Z)(e).concat((0,l.Z)(t))}),[]),O=null===I||void 0===I||null===(t=I.pageParams)||void 0===t?void 0:t.totals,T=(0,u.useState)(!1),U=T[0],R=T[1],X=(0,u.useCallback)((0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U){e.next=11;break}return R(!0),e.prev=2,e.next=5,(0,f.w)(C,M);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:R(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[C,M,U]);return(0,d.jsxs)(N.k,{className:"flex flex-col",children:[(0,d.jsxs)(h.Ax,{links:[{name:a("categories.reportProducts"),href:"/reports/sales/products"},{name:a("categories.saleReport"),href:"/reports/sales/categories"},{name:a("categories.reportLoc"),href:"/reports/sales/locations"},{name:a("categories.reportCustomers"),href:"/reports/sales/customers"},{name:a("products.locStocks"),href:"/reports/stocks"},{name:a("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/sales/locations",name:a("categories.reportLoc"),children:[(0,d.jsx)(h.zx,{className:"button secondary",onClick:X,children:(0,d.jsx)("i",{className:U?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,d.jsx)(h.zx,{className:"button secondary",onClick:function(){return _.show()},children:(0,d.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,d.jsx)(v.Z,{show:y,modal:_,children:(0,d.jsx)(h.kI,{onFilters:S,children:function(e){var t=e.handleFilter,s=e.applyFilters;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"text-sm text-white",children:a("filter")}),(0,d.jsx)("h3",{className:"title mt-2 text-white",children:a("categories.reportLoc")})]}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:k,label:a("from"),id:"date_from",onNewDate:t,value:M.date_from}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:k,label:a("to"),id:"date_to",onNewDate:t,value:M.date_to}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,d.jsx)("h3",{className:"text-xl font-medium mt-2",children:a("search_by")}),b.map((function(e,a){return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"flex flex-col text-left",children:(0,d.jsx)(x.II,{classes:"text-white",label:e.name,name:e.field,onChange:function(e){t(e.target.name,e.target.value)}})})},"header-".concat(a))}))]})]}),(0,d.jsx)("div",{children:(0,d.jsx)(h.zx,{onClick:s,className:"filter-btn",children:a("applyFilters")})})]})}})})]}),(0,d.jsx)(h.zI,(0,r.Z)({columns:b,data:q,totals:O,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},P))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=83249,e(e.s=t);var t}));var t=e.O();_N_E=t}]);