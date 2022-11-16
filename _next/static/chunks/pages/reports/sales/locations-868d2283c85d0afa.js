(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{83249:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/sales/locations",function(){return a(66155)}])},47685:function(e,t,a){"use strict";a.d(t,{w:function(){return u}});var s=a(47568),r=a(26042),n=a(69396),o=a(34051),l=a.n(o),i=a(17563),c=a(32809),d=a(47715),u=function(){var e=(0,s.Z)(l().mark((function e(t,a){var s,o,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,i.stringifyUrl)({url:t,query:(0,n.Z)((0,r.Z)({},a),{csv:!0})}),e.next=3,d.o.get(s,{responseType:"blob"});case 3:o=e.sent,u=o.headers["content-disposition"].split("filename=")[1],(0,c.S)(o.data,u);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},64534:function(e,t,a){"use strict";a.d(t,{k:function(){return n}});var s=a(85893),r=a(55695),n=function(e){var t=e.className,a=e.children;return(0,s.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,s.jsx)(r.v2,{}),(0,s.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(t),children:a})]})}},66155:function(e,t,a){"use strict";a.r(t);var s=a(47568),r=a(26042),n=a(99534),o=a(828),l=a(29815),i=a(34051),c=a.n(i),d=a(85893),u=a(32912),m=a(67294),p=a(4374),f=a(47685),h=a(55695),x=a(77358),w=a(34913),v=a(76166),g=a(64534),N=a(25230),j=a(61503),k=a(11860);t.default=function(){var e,t,a=(0,p.$)().t,i=(0,o.Z)((0,j.dd)(),2),y=i[0],_=i[1],b="sales-report-locations",C="api/reports/sales-report-locations/",Z=[{name:a("location"),field:"location_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:a("company"),field:"company_name",cellClassName:"whitespace-nowrap  sm:w-72",columnClassName:"whitespace-nowrap"},{name:a("products.quantity"),field:"quantity",format:N.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("total"),field:"total",format:N.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("tvaSum"),field:"vat_sum",format:N.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("subtotal"),field:"subtotal",format:N.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"}],F=new Date;F.setDate(1);var L=new Date(F);F.setMonth(F.getMonth()+1),F.setDate(0);var D=new Date(F),M=(0,j.M_)({date_from:(0,u.default)(L,"yyyy-MM-dd"),date_to:(0,u.default)(D,"yyyy-MM-dd")},b),E=M.options,S=M.setOptions,z=(0,m.useCallback)((function(e){S((function(t){return(0,r.Z)({},t,e)})),_.hide()}),[]),I=(0,j.NS)(C,E),P=I.data,q=I.error,O=(0,n.Z)(I,["data","error"]);(0,m.useEffect)((function(){var e=null===q||void 0===q?void 0:q.message;e&&N.mv.error(a("err.".concat(e)))}),[q]);var T=null===P||void 0===P||null===(e=P.pages)||void 0===e?void 0:e.reduce((function(e,t){return(0,l.Z)(e).concat((0,l.Z)(t))}),[]),U=null===P||void 0===P||null===(t=P.pageParams)||void 0===t?void 0:t.totals,X=(0,m.useState)(!1),R=X[0],A=X[1],B=(0,m.useCallback)((0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=11;break}return A(!0),e.prev=2,e.next=5,(0,f.w)(C,E);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:A(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[C,E,R]);return(0,d.jsxs)(g.k,{className:"flex flex-col",children:[(0,d.jsxs)(h.Ax,{links:[{name:a("categories.reportProducts"),href:"/reports/sales/products"},{name:a("categories.saleReport"),href:"/reports/sales/categories"},{name:a("categories.reportLoc"),href:"/reports/sales/locations"},{name:a("categories.reportCustomers"),href:"/reports/sales/customers"},{name:a("products.locStocks"),href:"/reports/stocks"},{name:a("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/sales/locations",name:a("categories.reportLoc"),children:[(0,d.jsx)(h.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:B,children:(0,d.jsx)("i",{className:R?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,d.jsx)(h.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:function(){return _.show()},children:(0,d.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,d.jsx)(v.Z,{show:y,modal:_,children:(0,d.jsx)(h.kI,{onFilters:z,children:function(e){var t=e.handleFilter,s=e.applyFilters;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"text-sm text-white",children:a("filter")}),(0,d.jsx)("h3",{className:"title mt-2 text-white",children:a("categories.reportLoc")})]}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:b,label:a("from"),id:"date_from",onNewDate:t,value:E.date_from}),(0,d.jsx)(w.fU,{classes:"text-white",prefix:b,label:a("to"),id:"date_to",onNewDate:t,value:E.date_to}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,d.jsx)("h3",{className:"text-xl font-medium mt-2",children:a("search_by")}),Z.map((function(e,a){return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"flex flex-col text-left",children:(0,d.jsx)(x.II,{classes:"text-white",label:e.name,name:e.field,value:k.session.get("".concat(b,"--").concat(e.name)),onChange:function(a){k.session.set("".concat(b,"--").concat(e.name),a.target.value),t(a.target.name,a.target.value)}})})},"header-".concat(a))}))]})]}),(0,d.jsx)("div",{children:(0,d.jsx)(h.zx,{onClick:s,className:"filter-btn",children:a("applyFilters")})})]})}})})]}),0===(null===T||void 0===T?void 0:T.length)?(0,d.jsx)(h.X6,{}):(0,d.jsx)(h.zI,(0,r.Z)({columns:Z,data:T,totals:U,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},O))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=83249,e(e.s=t);var t}));var t=e.O();_N_E=t}]);