(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9411],{94747:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners/file",function(){return n(44622)}])},47685:function(e,a,n){"use strict";n.d(a,{w:function(){return p}});var t=n(47568),r=n(26042),s=n(69396),i=n(34051),o=n.n(i),c=n(17563),l=n(32809),u=n(47715),p=function(){var e=(0,t.Z)(o().mark((function e(a,n){var t,i,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,c.stringifyUrl)({url:a,query:(0,s.Z)((0,r.Z)({},n),{csv:!0})}),e.next=3,u.o.get(t,{responseType:"blob"});case 3:i=e.sent,p=i.headers["content-disposition"].split("filename=")[1],(0,l.S)(i.data,p);case 6:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}()},64534:function(e,a,n){"use strict";n.d(a,{k:function(){return s}});var t=n(85893),r=n(37566),s=function(e){var a=e.className,n=e.children;return(0,t.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,t.jsx)(r.v2,{}),(0,t.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(a),children:n})]})}},44622:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return k}});var t=n(47568),r=n(34051),s=n.n(r),i=n(85893),o=n(67294),c=n(4374),l=n(47685),u=n(37566),p=n(26042),d=n(69396),m=n(88379),f=n(17108),w=n(56070),h=function(e){var a=e.pages,n=(0,c.$)().t,t=(0,o.useMemo)((function(){var e=a[0].initial_balance;return a[0].records.map((function(a,n){return e=e+a.in-a.out,(0,d.Z)((0,p.Z)({},a),{index:n+1,sold:e})}))}),[]),r=[{name:n("date"),field:"date",format:m.vc,dateFormat:"dd/MM/yyyy",cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap"},{name:n("documents.type"),field:"type",cellClassName:"whitespace-nowrap sm:w-36 flex-1",columnClassName:"whitespace-nowrap"},{name:n("documents.title"),field:"number",cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap"},{name:n("details"),field:"details",cellClassName:"whitespace-nowrap sm:w-44 flex-1 sm:text-right",columnClassName:"whitespace-nowrap"},{name:n("cashOut"),field:"out",format:m.Lx,cellClassName:"whitespace-nowrap sm:w-44 sm:text-right",columnClassName:"whitespace-nowrap"},{name:n("cashIn"),field:"in",format:m.Lx,cellClassName:"whitespace-nowrap sm:w-44 sm:text-right",columnClassName:"whitespace-nowrap"},{name:n("sold"),field:"sold",format:m.Lx,cellClassName:"whitespace-nowrap sm:min-w-42 sm:text-right flex-1",columnClassName:"whitespace-nowrap"}];return(0,i.jsx)(i.Fragment,{children:0===(null===t||void 0===t?void 0:t.length)?(0,i.jsx)(f.Z,{}):(0,i.jsx)(w.Z,{header_label:n("initialSold"),header_value:(0,m.Lx)(a[0].initial_balance),columns:r,data:t,keyFunction:function(e){return e.nr}})})},x=n(64534),v=n(2428),k=(0,u.EN)((function(e){var a=e.guid,n=(0,c.$)().t,r=(0,v.M_)({partner_guid:a},a),p=r.options,d=r.setOptions,m="api/partners/balance",f=(0,o.useState)(!1),w=f[0],k=f[1],N=(0,o.useCallback)((0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=11;break}return k(!0),e.prev=2,e.next=5,(0,l.w)(m,p);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:k(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[m,p,w]);return(0,i.jsxs)(x.k,{children:[(0,i.jsxs)(u.h4,{name:n("partners.customerFile"),children:[(0,i.jsx)(u.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",title:n("documents.print"),onClick:function(){return window.print()},children:(0,i.jsx)("i",{className:"fas fa-print"})}),(0,i.jsx)(u.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:N,children:(0,i.jsx)("i",{className:w?"fas fa-spinner animate-spin":"fas fa-download cursor-pointer"})}),(0,i.jsx)(u.wn,{setOptions:d,options:p,id:"partner_file",title:n("products.title"),filters:{date_from:!0,date_to:!0}})]}),(0,i.jsx)(u.lk,{options:p,as:h,url:"api/partners/balance"})]})}))}},function(e){e.O(0,[9774,2888,179],(function(){return a=94747,e(e.s=a);var a}));var a=e.O();_N_E=a}]);