(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8090],{45170:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/stocks",function(){return a(99489)}])},47685:function(e,r,a){"use strict";a.d(r,{w:function(){return u}});var s=a(47568),t=a(26042),n=a(69396),c=a(34051),o=a.n(c),i=a(17563),l=a(32809),d=a(47715),u=function(){var e=(0,s.Z)(o().mark((function e(r,a){var s,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,i.stringifyUrl)({url:r,query:(0,n.Z)((0,t.Z)({},a),{csv:!0})}),e.next=3,d.o.get(s,{responseType:"blob"});case 3:c=e.sent,u=c.headers["content-disposition"].split("filename=")[1],(0,l.S)(c.data,u);case 6:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}()},64534:function(e,r,a){"use strict";a.d(r,{k:function(){return n}});var s=a(85893),t=a(10638),n=function(e){var r=e.className,a=e.children;return(0,s.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,s.jsx)(t.v2,{}),(0,s.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(r),children:a})]})}},99489:function(e,r,a){"use strict";a.r(r);var s=a(47568),t=a(26042),n=a(99534),c=a(828),o=a(29815),i=a(34051),l=a.n(i),d=a(85893),u=a(67294),p=a(4374),m=a(47685),f=a(10638),h=a(77358),x=a(76166),v=a(64534),w=a(50856),k=a(2428),g=a(11860);r.default=function(){var e,r,a=(0,p.$)().t,i=(0,k.M_)(),N=i.options,j=i.setOptions,b=(0,c.Z)((0,k.dd)(),2),y=b[0],_=b[1],C="api/product-stock",Z=(0,k.NS)(C,N),S=Z.data,E=Z.error,F=(0,n.Z)(Z,["data","error"]);(0,u.useEffect)((function(){var e=null===E||void 0===E?void 0:E.message;e&&w.mv.error(a("err.".concat(e)))}),[E]);var z=null===S||void 0===S||null===(e=S.pages)||void 0===e?void 0:e.reduce((function(e,r){return(0,o.Z)(e).concat((0,o.Z)(r))}),[]),I=null===S||void 0===S||null===(r=S.pageParams)||void 0===r?void 0:r.totals,O=(0,u.useCallback)((function(e){j((function(r){return(0,t.Z)({},r,e)})),_.hide()}),[]),P=(0,u.useCallback)((function(e){var r,a=JSON.parse(e.properties);return r=a.length?a.reduce((function(e,r){return(0,o.Z)(e).concat(["".concat(r.property_name,": ").concat(r.value)])}),[]).map((function(e,r){return(0,d.jsx)("div",{children:e},r)})):"Default SKU",(0,d.jsxs)("div",{children:[e.product_name,(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"text-xs font-light",children:r})]})}),[]),q=[{name:a("product"),field:"product_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap",renderRecordCell:P},{name:a("categories.titles"),field:"category_name",cellClassName:"whitespace-nowrap sm:w-60",columnClassName:"whitespace-nowrap"},{name:a("company"),field:"company_name",cellClassName:"whitespace-nowrap sm:w-60",columnClassName:"whitespace-nowrap"},{name:a("location"),field:"location_name",cellClassName:"whitespace-nowrap sm:w-48",columnClassName:"whitespace-nowrap"},{name:a("products.quantity"),field:"quantity",format:w.Lx,cellClassName:"whitespace-nowrap sm:w-36",columnClassName:"whitespace-nowrap"}],L=(0,u.useState)(!1),R=L[0],T=L[1],X=(0,u.useCallback)((0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=11;break}return T(!0),e.prev=2,e.next=5,(0,m.w)(C,N);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:T(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[C,N,R]);return(0,d.jsxs)(v.k,{children:[(0,d.jsxs)(f.Ax,{links:[{name:a("categories.reportProducts"),href:"/reports/sales/products"},{name:a("categories.saleReport"),href:"/reports/sales/categories"},{name:a("categories.reportLoc"),href:"/reports/sales/locations"},{name:a("categories.reportCustomers"),href:"/reports/sales/customers"},{name:a("products.locStocks"),href:"/reports/stocks"},{name:a("cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/stocks",name:a("products.locStocks"),children:[(0,d.jsx)(f.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:X,children:(0,d.jsx)("i",{className:R?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,d.jsx)(f.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:function(){return _.show()},children:(0,d.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,d.jsx)(x.Z,{show:y,modal:_,children:(0,d.jsx)(f.kI,{onFilters:O,children:function(e){var r=e.handleFilter,s=e.applyFilters;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"text-sm text-white",children:a("filter")}),(0,d.jsx)("h3",{className:"title mt-2 text-white",children:a("products.locStocks")})]}),(0,d.jsx)("div",{className:"space-y-2 pt-4 h-[60vh] overflow-y-auto",children:(0,d.jsxs)("div",{className:"grid grid-flow-row gap-8",children:[(0,d.jsx)("h3",{className:"text-xl font-medium",children:a("search_by")}),q.map((function(e,a){return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"flex flex-col text-left",children:(0,d.jsx)(h.II,{classes:"text-white",label:e.name,name:e.field,value:g.session.get("product-stock--".concat(e.name)),onChange:function(a){g.session.set("product-stock--".concat(e.name),a.target.value),r(a.target.name,a.target.value)}})})},"header-".concat(a))}))]})})]}),(0,d.jsx)("div",{children:(0,d.jsx)(f.zx,{onClick:s,className:"filter-btn",children:a("applyFilters")})})]})}})})]}),0===(null===z||void 0===z?void 0:z.length)?(0,d.jsx)(f.X6,{}):(0,d.jsx)(f.zI,(0,t.Z)({columns:q,data:z,totals:I,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price}},F))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=45170,e(e.s=r);var r}));var r=e.O();_N_E=r}]);