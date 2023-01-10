(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{83249:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/sales/locations",function(){return a(66155)}])},47685:function(e,t,a){"use strict";a.d(t,{w:function(){return u}});var r=a(47568),s=a(26042),n=a(69396),o=a(34051),c=a.n(o),i=a(17563),l=a(32809),p=a(47715),u=function(){var e=(0,r.Z)(c().mark((function e(t,a){var r,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.stringifyUrl)({url:t,query:(0,n.Z)((0,s.Z)({},a),{csv:!0})}),e.next=3,p.o.get(r,{responseType:"blob"});case 3:o=e.sent,u=o.headers["content-disposition"].split("filename=")[1],(0,l.S)(o.data,u);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},64534:function(e,t,a){"use strict";a.d(t,{k:function(){return n}});var r=a(85893),s=a(37566),n=function(e){var t=e.className,a=e.children;return(0,r.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,r.jsx)(s.v2,{}),(0,r.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(t),children:a})]})}},66155:function(e,t,a){"use strict";a.r(t);var r=a(47568),s=a(26042),n=a(99534),o=a(29815),c=a(34051),i=a.n(c),l=a(85893),p=a(32912),u=a(67294),m=a(4374),d=a(47685),f=a(37566),w=a(64534),h=a(88379),v=a(2428);t.default=function(){var e,t,a=(0,m.$)().t,c="sales-report-locations",x="api/reports/sales-report-locations/",k=[{name:a("location"),field:"location_name",cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem]",columnClassName:"whitespace-nowrap"},{name:a("company"),field:"company_name",cellClassName:"whitespace-nowrap  sm:w-72",columnClassName:"whitespace-nowrap"},{name:a("products.quantity"),field:"quantity",format:h.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("products.total"),field:"total",format:h.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("tvaSum"),field:"vat_sum",format:h.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"},{name:a("subtotal"),field:"subtotal",format:h.Lx,cellClassName:"whitespace-nowrap sm:text-right sm:w-36",columnClassName:"whitespace-nowrap"}],g=new Date;g.setDate(1),g.setHours(0,0);var y=new Date(g);g.setMonth(g.getMonth()+1),g.setDate(0),g.setHours(23,59);var N=new Date(g),_=(0,v.M_)({from:(0,p.default)(y,"yyyy-MM-dd HH:mm"),to:(0,p.default)(N,"yyyy-MM-dd HH:mm")},c),b=_.options,C=_.setOptions,j=(0,v.NS)(x,b),Z=j.data,E=j.error,M=(0,n.Z)(j,["data","error"]);(0,u.useEffect)((function(){var e=null===E||void 0===E?void 0:E.message;e&&h.mv.error(a("err.".concat(e)))}),[E]);var S=null===Z||void 0===Z||null===(e=Z.pages)||void 0===e?void 0:e.reduce((function(e,t){return(0,o.Z)(e).concat((0,o.Z)(t))}),[]),H=null===Z||void 0===Z||null===(t=Z.pageParams)||void 0===t?void 0:t.totals,D=(0,u.useState)(!1),L=D[0],O=D[1],T=(0,u.useCallback)((0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=11;break}return O(!0),e.prev=2,e.next=5,(0,d.w)(x,b);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:O(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[x,b,L]);return(0,l.jsxs)(w.k,{className:"flex flex-col",children:[(0,l.jsxs)(f.Ax,{links:[{name:a("reports.product"),href:"/reports/sales/products"},{name:a("reports.category"),href:"/reports/sales/categories"},{name:a("reports.location"),href:"/reports/sales/locations"},{name:a("reports.customer"),href:"/reports/sales/customers"},{name:a("reports.productStocks"),href:"/reports/stocks"},{name:a("reports.cashRegister"),href:"/reports/cash-register"}],activeLink:"/reports/sales/locations",name:a("reports.location"),children:[(0,l.jsx)(f.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:T,children:(0,l.jsx)("i",{className:L?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,l.jsx)(f.wn,{setOptions:C,options:b,id:c,title:a("reports.location"),filters:(0,s.Z)({date_from:{showTimeSelect:!0},date_to:{showTimeSelect:!0},user:!0},Object.fromEntries(k.map((function(e){return[e.field,{label:e.name,key:"".concat(c,"--").concat(e.name)}]}))))})]}),0===(null===S||void 0===S?void 0:S.length)?(0,l.jsx)(f.X6,{}):(0,l.jsx)(f.zI,(0,s.Z)({columns:k,data:S,totals:H,keyFunction:function(e){return e.guid+e.location_guid+e.sale_price+e.total}},M))]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=83249,e(e.s=t);var t}));var t=e.O();_N_E=t}]);