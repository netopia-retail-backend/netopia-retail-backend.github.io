(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3043],{236:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations/view",function(){return n(77180)}])},35355:function(e,a,n){"use strict";var s=n(85893),t=n(59072),i=n(67294);a.Z=function(e){var a=e.locations;return(0,i.useEffect)((function(){setTimeout((function(){var e=new window.google.maps.Map(document.getElementById("map"),{}),n=new window.google.maps.LatLngBounds,s=a.map((function(a){var s=a.name,t=a.lat,i=a.lng,r=new window.google.maps.InfoWindow({content:s,disableAutoPan:!0}),c=new window.google.maps.Marker({position:{lat:t,lng:i}});return n.extend(c.position),c.addListener("click",(function(){r.open(e,c)})),c}));e.fitBounds(n),new t.XL({markers:s,map:e})}),1e3)}),[]),(0,s.jsx)("div",{className:"h-[50vh] md:h-full w-full rounded",children:(0,s.jsx)("div",{id:"map",className:"w-full h-full rounded"})})}},64534:function(e,a,n){"use strict";n.d(a,{k:function(){return i}});var s=n(85893),t=n(10638),i=function(e){var a=e.className,n=e.children;return(0,s.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,s.jsx)(t.v2,{}),(0,s.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(a),children:n})]})}},19155:function(e,a,n){"use strict";n.d(a,{Re:function(){return c},h4:function(){return p},IT:function(){return j},uD:function(){return g}});var s=n(85893),t=n(67294),i=n(2428),r=n(41698),c=function(e){var a=e.guid,n=e.setLoading,c=(0,i.aM)("api/locations/".concat(a)),o=c.data,l=c.status,d=c.isLoading;(0,t.useEffect)((function(){n(d)}),[d]);var u=o||{},m="edit-location-".concat(l);return(0,s.jsx)(r.x2,{initialValues:u},m)},o=(n(23099),n(65234),n(29815)),l=n(4374),d=n(74259),u=n(27106),m=n(4058),f=n(17108),x=n(56070),p=function(e){var a=e.pages,n=(0,l.$)().t,r=(0,i.M_)().company,c=t.useCallback((function(e){var a=e.guid;return(0,s.jsxs)("div",{className:"render-action",children:[(0,s.jsx)(u.Z,{className:"render-action-btn text-primary",href:"/locations/view?guid=".concat(a),children:(0,s.jsx)("i",{className:"fas fa-eye"})}),(0,s.jsx)(u.Z,{className:"render-action-btn text-primary",href:"/locations/edit?guid=".concat(a),children:(0,s.jsx)("i",{className:"fas fa-pen"})}),(0,s.jsx)(m.vS,{guid:a,small:!0,api:"locations",removeFunction:d.Mv,redirect:"/locations"})]})}),[r]),p=[{name:n("locations.name"),cellClassName:"whitespace-nowrap flex-1",columnClassName:"whitespace-nowrap",renderRecordCell:function(e){var a=e.guid,t=e.name;return(0,s.jsx)(u.Z,{title:n("locations.view"),href:"/locations/view?guid=".concat(a),children:t})}},{name:n("companies.name"),field:"company_name",cellClassName:"whitespace-nowrap flex-1",columnClassName:"whitespace-nowrap"},{name:n("actions"),cellClassName:"whitespace-nowrap",columnClassName:"whitespace-nowrap",renderRecordCell:c}],v=(a||[]).reduce((function(e,a){return(0,o.Z)(e).concat((0,o.Z)(a))}),[]);return(0,s.jsx)(s.Fragment,{children:0===(null===v||void 0===v?void 0:v.length)?(0,s.jsx)(f.Z,{}):(0,s.jsx)(x.Z,{columns:p,data:v,keyFunction:function(e){return e.guid}})})},v=n(26042),h=n(10638),j=function(e){var a=e.guid,n=(0,i.aM)("api/locations/".concat(a)),t=n.data,r=n.status;return(0,s.jsxs)("div",{className:"flex",children:["loading"===r&&(0,s.jsx)(h.gb,{}),"error"===r&&(0,s.jsx)(h.jj,{}),"success"===r&&(0,s.jsx)(g,(0,v.Z)({},t))]})},w=n(35355),g=function(e){var a=e.guid,n=e.name,t=e.code,i=e.company_name,r=e.sale_price_list_name,c=e.created_at,o=e.extra_data,u=(0,l.$)().t,f=Number(null===o||void 0===o?void 0:o.lat),x=Number(null===o||void 0===o?void 0:o.lng);return(0,s.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"title dark:text-font-dark",children:n}),(0,s.jsx)(h.cs,{date:c,text:u("created")})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2 justify-between py-5 ",children:[(0,s.jsx)(h.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",href:"/locations/edit?guid=".concat(a),children:(0,s.jsx)("i",{className:"far fa-pen-to-square"})}),(0,s.jsx)(m.vS,{guid:a,api:"locations",removeFunction:d.Mv,redirect:"/locations"})]})]}),(0,s.jsxs)("div",{className:"flex md:flex-row flex-col items-start gap-4 justify-items-stretch",children:[(0,s.jsxs)("div",{className:"flex flex-col box md:w-3/6 w-full dark:border-font-dark-variant",children:[(0,s.jsx)("h3",{className:"flex-1 title dark:text-font-dark",children:u("locations.details")}),(0,s.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,s.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,s.jsx)("span",{className:"description-label",children:u("company")}),(0,s.jsx)("span",{className:"description-content dark:text-font-dark",children:i})]}),t&&(0,s.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,s.jsx)("span",{className:"description-label",children:u("cod")}),(0,s.jsx)("span",{className:"description-content dark:text-font-dark",children:t})]}),(0,s.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,s.jsxs)("span",{className:"description-label",children:[" ",u("address")]}),(0,s.jsx)("span",{className:"description-content dark:text-font-dark",children:o.address})]}),(0,s.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,s.jsxs)("span",{className:"description-label",children:[" ",u("price-list.name")]}),(0,s.jsx)("span",{className:"description-content dark:text-font-dark",children:r})]})]})]}),(0,s.jsx)(w.Z,{locations:[{lat:f,lng:x,name:n}]})]})]})}},77180:function(e,a,n){"use strict";n.r(a);var s=n(85893),t=n(10638),i=n(64534),r=n(19155);a.default=(0,t.EN)((function(e){var a=e.guid;return(0,s.jsx)(i.k,{children:(0,s.jsx)(r.IT,{guid:a})})}))}},function(e){e.O(0,[9072,9774,2888,179],(function(){return a=236,e(e.s=a);var a}));var a=e.O();_N_E=a}]);