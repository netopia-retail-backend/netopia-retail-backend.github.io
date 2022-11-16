(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6689],{64530:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations",function(){return a(88667)}])},35355:function(e,s,a){"use strict";var n=a(85893),t=a(59072),i=a(67294);s.Z=function(e){var s=e.locations;return(0,i.useEffect)((function(){setTimeout((function(){var e=new window.google.maps.Map(document.getElementById("map"),{}),a=new window.google.maps.LatLngBounds,n=s.map((function(s){var n=s.name,t=s.lat,i=s.lng,l=new window.google.maps.InfoWindow({content:n,disableAutoPan:!0}),r=new window.google.maps.Marker({position:{lat:t,lng:i}});return a.extend(r.position),r.addListener("click",(function(){l.open(e,r)})),r}));e.fitBounds(a),new t.XL({markers:n,map:e})}),1e3)}),[]),(0,n.jsx)("div",{className:"h-[50vh] md:h-full w-full rounded",children:(0,n.jsx)("div",{id:"map",className:"w-full h-full rounded"})})}},64534:function(e,s,a){"use strict";a.d(s,{k:function(){return i}});var n=a(85893),t=a(55695),i=function(e){var s=e.className,a=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-[#F2F6FB] dark:bg-slate-900 md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(t.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:a})]})}},79899:function(e,s,a){"use strict";a.d(s,{Re:function(){return r},e3:function(){return u},h4:function(){return N},IT:function(){return w},uD:function(){return b}});var n=a(85893),t=a(67294),i=a(61503),l=a(46521),r=function(e){var s=e.guid,a=e.setLoading,r=(0,i.aM)("api/locations/".concat(s)),c=r.data,o=r.status,d=r.isLoading;(0,t.useEffect)((function(){a(d)}),[d]);var u=c||{},x="edit-location-".concat(o);return(0,n.jsx)(l.x2,{initialValues:u},x)},c=(a(23099),a(26042)),o=a(99534),d=a(55695),u=function(e){var s=e.options,a=(0,i.NS)("api/locations",s),t=a.data,l=(0,o.Z)(a,["data"]),r=l.isLoading,u=l.isError,x=l.isSuccess;return(0,n.jsxs)("div",{className:"flex-1 space-y-4",children:[r&&(0,n.jsx)(d.gb,{}),u&&(0,n.jsx)(d.jj,{}),x&&(0,n.jsx)(N,(0,c.Z)({},t)),x&&(0,n.jsx)(d.fr,(0,c.Z)({},l))]})},x=(a(65234),a(29815)),m=a(4374),p=a(74259),f=a(27106),h=a(75273),j=a(17108),v=a(56070),N=function(e){var s=e.pages,a=(0,m.$)().t,l=(0,i.M_)().company,r=t.useCallback((function(e){var s=e.guid;return(0,n.jsxs)("div",{className:"render-action",children:[(0,n.jsx)(f.Z,{className:"render-action-btn text-primary",href:"/locations/view?guid=".concat(s),children:(0,n.jsx)("i",{className:"fas fa-eye"})}),(0,n.jsx)(f.Z,{className:"render-action-btn text-primary",href:"/locations/edit?guid=".concat(s),children:(0,n.jsx)("i",{className:"fas fa-pen"})}),(0,n.jsx)(h.vS,{guid:s,small:!0,api:"locations",removeFunction:p.Mv,redirect:"/locations"})]})}),[l]),c=[{name:a("locations.name"),cellClassName:"whitespace-nowrap flex-1",columnClassName:"whitespace-nowrap",renderRecordCell:function(e){var s=e.guid,t=e.name;return(0,n.jsx)(f.Z,{title:a("locations.view"),href:"/locations/view?guid=".concat(s),children:t})}},{name:a("companies.name"),field:"company_name",cellClassName:"whitespace-nowrap flex-1",columnClassName:"whitespace-nowrap"},{name:a("actions"),cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap",renderRecordCell:r}],o=(s||[]).reduce((function(e,s){return(0,x.Z)(e).concat((0,x.Z)(s))}),[]);return(0,n.jsx)(n.Fragment,{children:0===(null===o||void 0===o?void 0:o.length)?(0,n.jsx)(j.Z,{}):(0,n.jsx)(v.Z,{columns:c,data:o,keyFunction:function(e){return e.guid}})})},w=function(e){var s=e.guid,a=(0,i.aM)("api/locations/".concat(s)),t=a.data,l=a.status;return(0,n.jsxs)("div",{className:"flex",children:["loading"===l&&(0,n.jsx)(d.gb,{}),"error"===l&&(0,n.jsx)(d.jj,{}),"success"===l&&(0,n.jsx)(b,(0,c.Z)({},t))]})},g=a(35355),b=function(e){var s=e.guid,a=e.name,t=e.code,i=e.company_name,l=e.sale_price_list_name,r=e.created_at,c=e.extra_data,o=(0,m.$)().t,u=Number(null===c||void 0===c?void 0:c.lat),x=Number(null===c||void 0===c?void 0:c.lng);return(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"title dark:text-slate-200",children:a}),(0,n.jsx)(d.cs,{date:r,text:o("created")})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2 justify-between py-5 ",children:[(0,n.jsx)(d.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",href:"/locations/edit?guid=".concat(s),children:(0,n.jsx)("i",{className:"far fa-pen-to-square"})}),(0,n.jsx)(h.vS,{guid:s,api:"locations",removeFunction:p.Mv,redirect:"/locations"})]})]}),(0,n.jsxs)("div",{className:"flex md:flex-row flex-col items-start gap-4 justify-items-stretch",children:[(0,n.jsxs)("div",{className:"flex flex-col box md:w-3/6 w-full dark:border-slate-600",children:[(0,n.jsx)("h3",{className:"flex-1 title dark:text-slate-200",children:o("locations.details")}),(0,n.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,n.jsxs)("div",{className:"description dark:border-slate-600",children:[(0,n.jsx)("span",{className:"description-label",children:o("company")}),(0,n.jsx)("span",{className:"description-content dark:text-slate-200",children:i})]}),t&&(0,n.jsxs)("div",{className:"description dark:border-slate-600",children:[(0,n.jsx)("span",{className:"description-label",children:o("cod")}),(0,n.jsx)("span",{className:"description-content dark:text-slate-200",children:t})]}),(0,n.jsxs)("div",{className:"description dark:border-slate-600",children:[(0,n.jsxs)("span",{className:"description-label",children:[" ",o("address")]}),(0,n.jsx)("span",{className:"description-content dark:text-slate-200",children:c.address})]}),(0,n.jsxs)("div",{className:"description dark:border-slate-600",children:[(0,n.jsxs)("span",{className:"description-label",children:[" ",o("price-list.name")]}),(0,n.jsx)("span",{className:"description-content dark:text-slate-200",children:l})]})]})]}),(0,n.jsx)(g.Z,{locations:[{lat:u,lng:x,name:a}]})]})]})}},88667:function(e,s,a){"use strict";a.r(s);var n=a(26042),t=a(828),i=a(85893),l=a(67294),r=a(4374),c=a(55695),o=a(34913),d=a(76166),u=a(64534),x=a(79899),m=a(61503);s.default=function(){var e=(0,r.$)().t,s=(0,m.M_)(),a=s.options,p=s.setOptions,f=(0,t.Z)((0,m.dd)(),2),h=f[0],j=f[1],v=(0,l.useCallback)((function(e){p((function(s){return(0,n.Z)({},s,e)})),j.hide()}),[]);return(0,i.jsxs)(u.k,{children:[(0,i.jsxs)(c.h4,{name:e("locations.title"),btnLabel:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"sm:block hidden",children:e("addNew")}),(0,i.jsx)("i",{className:"fas fa-plus"})]}),href:"/locations/add",children:[(0,i.jsx)(o.ol,{classNameInput:"border-b-1",className:"w-full pr-2",setOptions:p}),(0,i.jsx)(c.zx,{className:"button secondary dark:border-slate-600 dark:text-slate-200",onClick:function(){return j.show()},children:(0,i.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,i.jsx)(d.Z,{show:h,modal:j,children:(0,i.jsx)(c.kI,{onFilters:v,children:function(s){var a=s.handleFilter,n=s.applyFilters;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"text-sm text-white",children:e("filter")}),(0,i.jsx)("h3",{className:"title mt-2 text-white",children:e("locations.title")})]}),(0,i.jsx)(o.KM,{id:"locations-order",setOptions:a})]}),(0,i.jsx)("div",{children:(0,i.jsx)(c.zx,{onClick:n,className:"filter-btn",children:e("applyFilters")})})]})}})})]}),(0,i.jsx)(x.e3,{options:a})]})}}},function(e){e.O(0,[9072,9774,2888,179],(function(){return s=64530,e(e.s=s);var s}));var s=e.O();_N_E=s}]);