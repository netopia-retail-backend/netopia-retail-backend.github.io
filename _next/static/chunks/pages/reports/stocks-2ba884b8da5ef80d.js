(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8090],{45170:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/stocks",function(){return t(99489)}])},47685:function(e,s,t){"use strict";t.d(s,{w:function(){return d}});var a=t(47568),r=t(26042),n=t(69396),c=t(34051),o=t.n(c),i=t(17563),l=t(32809),u=t(47715),d=function(){var e=(0,a.Z)(o().mark((function e(s,t){var a,c,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,i.stringifyUrl)({url:s,query:(0,n.Z)((0,r.Z)({},t),{csv:!0})}),e.next=3,u.o.get(a,{responseType:"blob"});case 3:c=e.sent,d=c.headers["content-disposition"].split("filename=")[1],(0,l.S)(c.data,d);case 6:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}()},64534:function(e,s,t){"use strict";t.d(s,{k:function(){return n}});var a=t(85893),r=t(55695),n=function(e){var s=e.className,t=e.children;return(0,a.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,a.jsx)(r.v2,{}),(0,a.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:t})]})}},99489:function(e,s,t){"use strict";t.r(s);var a=t(47568),r=t(26042),n=t(99534),c=t(828),o=t(29815),i=t(34051),l=t.n(i),u=t(85893),d=t(67294),p=t(4374),m=t(47685),f=t(55695),h=t(77358),x=t(76166),v=t(64534),w=t(25230),g=t(61503),k=t(11860);s.default=function(){var e,s,t=(0,p.$)().t,i=(0,g.M_)(),N=i.options,j=i.setOptions,y=(0,c.Z)((0,g.dd)(),2),_=y[0],b=y[1],C="api/product-stock",Z=(0,g.NS)(C,N),F=Z.data,S=Z.error,E=(0,n.Z)(Z,["data","error"]);(0,d.useEffect)((function(){var e=null===S||void 0===S?void 0:S.message;e&&w.mv.error(t("err.".concat(e)))}),[S]);var z=null===F||void 0===F||null===(e=F.pages)||void 0===e?void 0:e.reduce((function(e,s){return(0,o.Z)(e).concat((0,o.Z)(s))}),[]),I=null===F||void 0===F||null===(s=F.pageParams)||void 0===s?void 0:s.totals,O=(0,d.useCallback)((function(e){j((function(s){return(0,r.Z)({},s,e)})),b.hide()}),[]),P=(0,d.useCallback)((function(e){var s,t=JSON.parse(e.properties);return s=t.length?t.reduce((function(e,s){return(0,o.Z)(e).concat(["".concat(s.property_name,": ").concat(s.value)])}),[]).map((function(e,s){return(0,u.jsx)("div",{children:e},s)})):"Default SKU",(0,u.jsxs)("div",{children:[e.product_name,(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:"text-xs font-light",children:s})]})}),[]),q=[{name:t("product"),field:"product_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap",renderRecordCell:P},{name:t("categories.titles"),field:"category_name",cellClassName:"whitespace-nowrap sm:w-60",columnClassName:"whitespace-nowrap"},{name:t("company"),field:"company_name",cellClassName:"whitespace-nowrap sm:w-60",columnClassName:"whitespace-nowrap"},{name:t("location"),field:"location_name",cellClassName:"whitespace-nowrap sm:w-48",columnClassName:"whitespace-nowrap"},{name:t("products.quantity"),field:"quantity",format:w.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"}],L=(0,d.useState)(!1),R=L[0],T=L[1],X=(0,d.useCallback)((0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=11;break}return T(!0),e.prev=2,e.next=5,(0,m.w)(C,N);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:T(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[C,N,R]);return(0,u.jsxs)(v.k,{children:[(0,u.jsxs)(f.Ax,{links:[{name:t("categories.reportProducts"),href:"/reports/sales/products"},{name:t("categories.saleReport"),href:"/reports/sales/categories"},{name:t("categories.reportLoc"),href:"/reports/sales/locations"},{name:t("categories.reportCustomers"),href:"/reports/sales/customers"},{name:t("products.locStocks"),href:"/reports/stocks"},{name:t("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/stocks",name:t("products.locStocks"),children:[(0,u.jsx)(f.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:X,children:(0,u.jsx)("i",{className:R?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,u.jsx)(f.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:function(){return b.show()},children:(0,u.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,u.jsx)(x.Z,{show:_,modal:b,children:(0,u.jsx)(f.kI,{onFilters:O,children:function(e){var s=e.handleFilter,a=e.applyFilters;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"text-sm text-white",children:t("filter")}),(0,u.jsx)("h3",{className:"title mt-2 text-white",children:t("products.locStocks")})]}),(0,u.jsx)("div",{className:"space-y-2 pt-4 h-[60vh] overflow-y-auto",children:(0,u.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,u.jsx)("h3",{className:"text-xl font-medium",children:t("search_by")}),q.map((function(e,t){return(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"flex flex-col text-left",children:(0,u.jsx)(h.II,{classes:"text-white",label:e.name,name:e.field,value:k.session.get("product-stock--".concat(e.name)),onChange:function(t){k.session.set("product-stock--".concat(e.name),t.target.value),s(t.target.name,t.target.value)}})})},"header-".concat(t))}))]})})]}),(0,u.jsx)("div",{children:(0,u.jsx)(f.zx,{onClick:a,className:"filter-btn",children:t("applyFilters")})})]})}})})]}),0===(null===z||void 0===z?void 0:z.length)?(0,u.jsx)(f.X6,{}):(0,u.jsx)(f.zI,(0,r.Z)({columns:q,data:z,totals:I,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},E))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return s=45170,e(e.s=s);var s}));var s=e.O();_N_E=s}]);