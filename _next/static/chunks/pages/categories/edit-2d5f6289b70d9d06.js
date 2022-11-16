(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7422],{84815:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/edit",function(){return t(6594)}])},2765:function(e,s,t){"use strict";t.d(s,{wg:function(){return o},dH:function(){return b},C6:function(){return _}});var n=t(26042),a=t(69396),i=t(99534),r=t(85893),c=t(55695),l=t(61503),o=function(e){var s=e.options,t=(0,l.NS)("api/product-categories",s,{cacheTime:0}),o=t.data,d=(0,i.Z)(t,["data"]),u=d.isLoading,m=d.isError,x=d.isSuccess;return(0,r.jsxs)("div",{className:"flex-1 space-y-4",children:[m&&(0,r.jsx)(c.jj,{error:"categories.error"}),u&&(0,r.jsx)(c.gb,{}),x&&(0,r.jsx)(b,(0,a.Z)((0,n.Z)({},o),{options:s})),x&&(0,r.jsx)(c.fr,(0,n.Z)({},d))]})},d=t(828),u=t(29815),m=t(80454),x=t.n(m),p=t(67294),f=t(4374),h=t(94261),j=t(27106),g=t(5477),v=t(17108),N=t(42337),w=t(56070),b=function(e){var s=e.pages,t=e.options,n=(0,f.$)().t,a=(0,l.M_)().company,i=(s||[]).reduce((function(e,s){return(0,u.Z)(e).concat((0,u.Z)(s))}),[]),c=(0,d.Z)(p.useState(i),2),o=c[0],m=c[1],b=p.useRef();(0,p.useEffect)((function(){"order_index"==t.sort&&b.current&&((0,h.lP)(o),b.current=!1)}),[o]);var q=p.useCallback((function(e){var s=e.guid,t=e.has_access;return(0,r.jsxs)("div",{className:"render-action",children:[(0,r.jsx)(j.Z,{className:"render-action-btn text-primary",title:n("categories.view"),href:"/categories/view?guid=".concat(s),children:(0,r.jsx)("i",{className:"fas fa-shopping-bag"})}),!0===t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{className:"render-action-btn text-primary",href:"/categories/edit?guid=".concat(s),children:(0,r.jsx)("i",{className:"fas fa-pen"})}),(0,r.jsx)(g.Z,{guid:s,api:"product-categories",small:!0,redirect:"/categories",removeFunction:h.sT})]})]})}),[a]),y=[{name:n("categories.name"),cellClassName:"whitespace-nowrap flex-1 sm:min-w-[18rem] pt-4 sm:pt-0",columnClassName:"whitespace-nowrap",renderRecordCell:function(e){var s=e.guid,t=e.name;return(0,r.jsx)(j.Z,{title:n("categories.view"),href:"/categories/view?guid=".concat(s),children:t})}},{name:n("companies.name"),field:"company_name",cellClassName:"whitespace-nowrap sm:w-72",columnClassName:"whitespace-nowrap"},{name:n("products.title"),field:"productCount",cellClassName:"whitespace-nowrap sm:w-36 sm:text-right",columnClassName:"whitespace-nowrap"},{name:n("actions"),cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap sm:w-36 sm:text-center",renderRecordCell:q}],_="order_index"==t.sort?N.Z:w.Z;return(0,r.jsxs)(r.Fragment,{children:[0===(null===i||void 0===i?void 0:i.length)?(0,r.jsx)(v.Z,{}):(0,r.jsx)(_,{columns:y,data:i,renderActions:q,items:o,keyFunction:function(e){return e.guid+e.location_guid},onSortEnd:function(e,s){m((function(t){return x()(t,e,s)})),b.current=!0}})," "]})},q=t(84254),y=t(46521),_=function(e){var s=e.guid,t=e.setLoading,n=(0,l.aM)("api/product-categories/".concat(s)),a=n.data,i=n.status,c=n.isLoading;(0,p.useEffect)((function(){t(c)}),[c]);var o=a||{};(0,q.Rw)(a)&&(o.media=(0,q.om)(a));var d="edit-category-".concat(i);return(0,r.jsx)(y.BE,{initialValues:o},d)}},80790:function(e,s,t){"use strict";t.d(s,{uQ:function(){return i},cG:function(){return r},Q0:function(){return c},$i:function(){return l},KF:function(){return o},V_:function(){return d},jN:function(){return u},fH:function(){return m},DO:function(){return x}});var n=t(85893),a=t(4374),i=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("categories.catHelp")})]}),(0,n.jsx)("p",{children:e("categories.catP1")}),(0,n.jsx)("p",{children:e("categories.catP2")})]})},r=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("companies.compHelp")})]}),(0,n.jsx)("p",{children:e("companies.compP1")}),(0,n.jsx)("p",{children:e("companies.compP2")}),(0,n.jsx)("p",{children:e("companies.compP3")})]})},c=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("receipts.help")})]}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),(0,n.jsx)("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},l=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("locations.locHelp")})]}),(0,n.jsx)("p",{children:e("locations.locP1")}),(0,n.jsx)("p",{children:e("locations.locP2")})]})},o=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("partners.help")})]}),(0,n.jsx)("p",{children:e("partners.helpP1")}),(0,n.jsx)("p",{children:e("partners.helpP2")})]})},d=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("products.help")})]}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare arcu. Ut enim blandit volutpat maecenas volutpat blandit. Nunc vel risus commodo viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Rhoncus mattis rhoncus urna neque viverra."}),(0,n.jsx)("p",{children:e("products.helpP1")})]})},u=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("restaurant.help")})]}),(0,n.jsx)("p",{children:e("restaurant.helpP1")}),(0,n.jsx)("p",{children:e("restaurant.helpP2")})]})},m=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("products.skuHelp")})]}),(0,n.jsx)("p",{children:e("products.skuHelpP1")}),(0,n.jsx)("p",{children:e("products.skuHelpP2")})]})},x=function(){var e=(0,a.$)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("i",{className:"fas fa-question-circle text-secondary"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:e("vendor.help")})]}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),(0,n.jsx)("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}},64534:function(e,s,t){"use strict";t.d(s,{k:function(){return i}});var n=t(85893),a=t(55695),i=function(e){var s=e.className,t=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(a.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:t})]})}},6594:function(e,s,t){"use strict";t.r(s);var n=t(828),a=t(85893),i=t(67294),r=t(4374),c=t(55695),l=t(2765),o=t(80790),d=t(76166),u=t(64534),m=t(61503);s.default=(0,c.EN)((function(e){var s=e.guid,t=(0,i.useState)(!1),x=t[0],p=t[1],f=(0,r.$)().t,h=(0,n.Z)((0,m.dd)(),2),j=h[0],g=h[1];return(0,a.jsx)(u.k,{children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"title dark:text-slate-200",children:f("categories.editCategory")}),(0,a.jsx)(c.$j,{show:x})]}),(0,a.jsx)(c.zx,{className:"text-2xl text-primary",onClick:function(){return g.show()},children:(0,a.jsx)("i",{className:"fas fa-question-circle"})})]}),(0,a.jsx)(l.C6,{guid:s,setLoading:p}),(0,a.jsx)(d.Z,{show:j,modal:g,children:(0,a.jsx)(o.uQ,{})})]})})}))}},function(e){e.O(0,[9774,2888,179],(function(){return s=84815,e(e.s=s);var s}));var s=e.O();_N_E=s}]);