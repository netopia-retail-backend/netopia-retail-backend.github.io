(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{99132:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/cash-register",function(){return a(19851)}])},64534:function(e,s,a){"use strict";a.d(s,{k:function(){return r}});var t=a(85893),n=a(15204),r=function(e){var s=e.className,a=e.children;return(0,t.jsxs)("div",{className:"text-sm bg-[#F2F6FB] md:grid print:flex print:bg-white relative",id:"main",children:[(0,t.jsx)(n.v2,{}),(0,t.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:a})]})}},19851:function(e,s,a){"use strict";a.r(s);var t=a(26042),n=a(69396),r=a(99534),i=a(828),l=a(85893),c=a(67294),o=a(4374),m=a(15204),d=a(34913),p=a(76166),h=a(64534),u=a(25230),f=a(61503);s.default=function(){var e=(0,o.$)().t,s="cash_register",a=(0,i.Z)((0,f.dd)(),2),x=a[0],w=a[1],N=(0,f.M_)({},s),g=N.options,v=N.setOptions,j=(0,c.useCallback)((function(e){v((function(s){return(0,t.Z)({},s,e)})),w.hide()}),[]),C=(0,c.useRef)();(0,c.useEffect)((function(){C.current=g}),[]);var _=(0,f.NS)("api/cash-register",g),y=_.data,k=(_.status,(0,r.Z)(_,["data","status"])),b=null===y||void 0===y?void 0:y.pages[0].initial_sold,F=(0,c.useMemo)((function(){return null===y||void 0===y?void 0:y.pages[0].records.map((function(e,s){return b=b+e.income-e.expense,(0,n.Z)((0,t.Z)({},e),{index:s+1,sold:b})}))}),[y]),Z=[{name:e("nr"),field:"index",cellClassName:"whitespace-nowrap sm:w-20",columnClassName:"whitespace-nowrap"},{name:e("date"),field:"date",format:u.vc,dateFormat:"dd/MM/yyyy",cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap"},{name:e("docNo"),field:"nr",cellClassName:"whitespace-nowrap sm:w-42 sm:text-right",columnClassName:"whitespace-nowrap"},{name:e("type"),field:"type",cellClassName:"whitespace-nowrap flex-1",columnClassName:"whitespace-nowrap"},{name:e("cashOut"),field:"income",format:u.Lx,cellClassName:"whitespace-nowrap sm:w-44 sm:text-right",columnClassName:"whitespace-nowrap"},{name:e("cashIn"),field:"expense",format:u.Lx,cellClassName:"whitespace-nowrap sm:w-44 sm:text-right",columnClassName:"whitespace-nowrap"},{name:e("sold"),field:"sold",format:u.Lx,cellClassName:"whitespace-nowrap sm:min-w-42 sm:text-right flex-1",columnClassName:"whitespace-nowrap"}];return(0,l.jsxs)(h.k,{className:"flex flex-col",children:[(0,l.jsxs)(m.Ax,{links:[{name:e("categories.reportProducts"),href:"/admin/sales-report-products"},{name:e("categories.saleReport"),href:"/admin/sales-report-categories"},{name:e("categories.reportLoc"),href:"/admin/sales-report-locations"},{name:e("categories.reportCustomers"),href:"/admin/sales-report-customers"},{name:e("products.locStocks"),href:"/admin/product-location-stocks"},{name:e("cashRegister"),href:"/admin/cash-register"}],activeLink:"/admin/cash-register",name:e("cashRegister"),children:[(0,l.jsx)(m.zx,{className:"button secondary",title:e("documents.print"),onClick:function(){return window.print()},children:(0,l.jsx)("i",{className:"fas fa-print"})}),(0,l.jsx)(m.zx,{className:"button secondary",onClick:function(){return w.show()},children:(0,l.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,l.jsx)(p.Z,{show:x,modal:w,children:(0,l.jsx)(m.kI,{onFilters:j,children:function(a){var t=a.handleFilter,n=a.applyFilters;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"text-sm text-white",children:e("filter")}),(0,l.jsx)("h3",{className:"title mt-2 text-white",children:e("cashRegister")})]}),(0,l.jsx)(d.fU,{classes:"text-white",prefix:s,label:e("from"),id:"from",onNewDate:t}),(0,l.jsx)(d.fU,{classes:"text-white",prefix:s,label:e("to"),id:"to",onNewDate:t})]}),(0,l.jsx)("div",{children:(0,l.jsx)(m.zx,{onClick:n,className:"filter-btn",children:e("applyFilters")})})]})}})})]}),g.company_guid&&y?(0,l.jsx)(m.zI,(0,t.Z)({header_label:e("initialSold"),header_value:(0,u.Lx)(b),columns:Z,data:F,keyFunction:function(e){return e.nr}},k)):(0,l.jsx)("p",{className:"text-gray-800",children:e("vendor.cannotShow")})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return s=99132,e(e.s=s);var s}));var s=e.O();_N_E=s}]);