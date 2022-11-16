(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{85190:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return t(28582)}])},2765:function(e,s,t){"use strict";t.d(s,{wg:function(){return l},dH:function(){return b},C6:function(){return k}});var n=t(26042),r=t(69396),a=t(99534),i=t(85893),c=t(55695),o=t(61503),l=function(e){var s=e.options,t=(0,o.NS)("api/product-categories",s,{cacheTime:0}),l=t.data,d=(0,a.Z)(t,["data"]),u=d.isLoading,m=d.isError,p=d.isSuccess;return(0,i.jsxs)("div",{className:"flex-1 space-y-4",children:[m&&(0,i.jsx)(c.jj,{error:"categories.error"}),u&&(0,i.jsx)(c.gb,{}),p&&(0,i.jsx)(b,(0,r.Z)((0,n.Z)({},l),{options:s})),p&&(0,i.jsx)(c.fr,(0,n.Z)({},d))]})},d=t(828),u=t(29815),m=t(80454),p=t.n(m),f=t(67294),h=t(4374),x=t(94261),g=t(27106),w=t(5477),j=t(17108),v=t(42337),N=t(56070),b=function(e){var s=e.pages,t=e.options,n=(0,h.$)().t,r=(0,o.M_)().company,a=(s||[]).reduce((function(e,s){return(0,u.Z)(e).concat((0,u.Z)(s))}),[]),c=(0,d.Z)(f.useState(a),2),l=c[0],m=c[1],b=f.useRef();(0,f.useEffect)((function(){"order_index"==t.sort&&b.current&&((0,x.lP)(l),b.current=!1)}),[l]);var C=f.useCallback((function(e){var s=e.guid,t=e.has_access;return(0,i.jsxs)("div",{className:"render-action",children:[(0,i.jsx)(g.Z,{className:"render-action-btn text-primary",title:n("categories.view"),href:"/categories/view?guid=".concat(s),children:(0,i.jsx)("i",{className:"fas fa-shopping-bag"})}),!0===t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{className:"render-action-btn text-primary",href:"/categories/edit?guid=".concat(s),children:(0,i.jsx)("i",{className:"fas fa-pen"})}),(0,i.jsx)(w.Z,{guid:s,api:"product-categories",small:!0,redirect:"/categories",removeFunction:x.sT})]})]})}),[r]),_=[{name:n("categories.name"),cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem] pt-4 sm:pt-0",columnClassName:"whitespace-nowrap",renderRecordCell:function(e){var s=e.guid,t=e.name;return(0,i.jsx)(g.Z,{title:n("categories.view"),href:"/categories/view?guid=".concat(s),children:t})}},{name:n("companies.name"),field:"company_name",cellClassName:"whitespace-nowrap sm:w-72",columnClassName:"whitespace-nowrap"},{name:n("products.title"),field:"productCount",cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"},{name:n("actions"),cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap sm:w-36 sm:text-center",renderRecordCell:C}],k="order_index"==t.sort?v.Z:N.Z;return(0,i.jsxs)(i.Fragment,{children:[0===(null===a||void 0===a?void 0:a.length)?(0,i.jsx)(j.Z,{}):(0,i.jsx)(k,{columns:_,data:a,renderActions:C,items:l,keyFunction:function(e){return e.guid+e.location_guid},onSortEnd:function(e,s){m((function(t){return p()(t,e,s)})),b.current=!0}})," "]})},C=t(84254),_=t(46521),k=function(e){var s=e.guid,t=e.setLoading,n=(0,o.aM)("api/product-categories/".concat(s)),r=n.data,a=n.status,c=n.isLoading;(0,f.useEffect)((function(){t(c)}),[c]);var l=r||{};(0,C.Rw)(r)&&(l.media=(0,C.om)(r));var d="edit-category-".concat(a);return(0,i.jsx)(_.BE,{initialValues:l},d)}},64534:function(e,s,t){"use strict";t.d(s,{k:function(){return a}});var n=t(85893),r=t(55695),a=function(e){var s=e.className,t=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(r.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:t})]})}},28582:function(e,s,t){"use strict";t.r(s);var n=t(26042),r=t(828),a=t(85893),i=t(67294),c=t(4374),o=t(55695),l=t(2765),d=t(34913),u=t(76166),m=t(64534),p=t(61503);s.default=function(){var e=(0,p.M_)({},"categories"),s=e.options,t=e.setOptions,f=(0,c.$)().t,h=(0,r.Z)((0,p.dd)(),2),x=h[0],g=h[1],w=(0,i.useCallback)((function(e){t((function(s){return(0,n.Z)({},s,e)})),g.hide()}),[]);return(0,a.jsxs)(m.k,{children:[(0,a.jsxs)(o.Ax,{links:[{name:f("categories.title"),href:"/categories"},{name:f("products.title"),href:"/products"},{name:f("price-list.title"),href:"/price-lists"}],activeLink:"/categories",btnLabel:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"sm:block hidden",children:f("addNew")}),(0,a.jsx)("i",{className:"fas fa-plus"})]}),name:f("categories.title"),href:"/categories/add",children:[(0,a.jsx)(d.ol,{classNameInput:"border-b-1",setOptions:t}),(0,a.jsx)(o.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:function(){return g.show()},children:(0,a.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,a.jsx)(u.Z,{show:x,modal:g,children:(0,a.jsx)(o.kI,{onFilters:w,children:function(e){var s=e.handleFilter,t=e.applyFilters;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-sm text-white",children:f("filter")}),(0,a.jsx)("h3",{className:"title mt-2 text-white",children:f("categories.title")})]}),(0,a.jsx)(d.KM,{id:"categories",setOptions:s,addCustomOrder:!0})]}),(0,a.jsx)("div",{children:(0,a.jsx)(o.zx,{onClick:t,className:"filter-btn",children:f("applyFilters")})})]})}})})]}),(0,a.jsx)(l.wg,{options:s})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return s=85190,e(e.s=s);var s}));var s=e.O();_N_E=s}]);