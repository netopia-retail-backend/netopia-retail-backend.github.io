(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6755],{81095:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketing-files",function(){return r(34509)}])},64534:function(e,s,r){"use strict";r.d(s,{k:function(){return t}});var n=r(85893),a=r(10638),t=function(e){var s=e.className,r=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(a.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:r})]})}},91578:function(e,s,r){"use strict";r.d(s,{yR:function(){return i},q4:function(){return d},AC:function(){return x},ZW:function(){return m},XJ:function(){return h},B2:function(){return v}});var n=r(85893),a=r(34784),t=r(41698),i=function(e){var s=e.data,r=e.status,i=(0,a.h)(s);i.locations=s&&s.locations&&Object.fromEntries(s.locations.map((function(e){return[e.guid,!0]})));var l="edit-marketing-file-".concat(r);return(0,n.jsx)(t.sn,{initialValues:i},l)},l=r(4374),c=r(10638),d=function(e){var s=e.guid,r=e.name,a=e.media,t=e.created_at,i=e.type,d=(0,l.$)().t;return(0,n.jsx)(c.rU,{href:"/marketing-files/view?guid=".concat(s),children:(0,n.jsxs)("div",{className:"box dark:border-font-dark-variant cursor-pointer flex flex-col gap-4",title:d("marketing-file.view"),children:[(0,n.jsx)(x,{media:a,type:i}),(0,n.jsx)("div",{className:"text-sm text-gray-400",children:(0,n.jsx)(c.cs,{date:t,text:d("created")})}),(0,n.jsx)("div",{className:"truncate text-xl text-primary dark:text-font-dark font-semibold",children:r})]})})},o=r(26042),u=r(99534),x=function(e){var s=e.media,r=e.type,a=(0,u.Z)(e,["media","type"]),t=(s||"").full_picture;return(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,n.jsx)("div",{className:"flex flex-col w-36 h-36 justify-center",children:(null===r||void 0===r?void 0:r.startsWith("image/"))?(0,n.jsx)("img",(0,o.Z)({className:"object-contain rounded",src:t,loading:"lazy",decoding:"async"},a)):(0,n.jsx)("div",{className:"absolute bg-white",children:(0,n.jsx)("div",{className:"flex flex-col rounded w-36 h-36 justify-center border items-center text-gray-400 bg-gray-100",children:(0,n.jsx)("i",{className:"fas fa-video text-4xl"})})})})})})},f=r(29815),m=(r(67294),function(e){var s=(e.pages||[]).reduce((function(e,s){return(0,f.Z)(e).concat((0,f.Z)(s))}),[]);return(0,n.jsx)(n.Fragment,{children:0===s.length?(0,n.jsx)(c.X6,{}):(0,n.jsx)("div",{className:"select-none grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:s.map((function(e){return function(e){var s=e.guid,r=(e.company_guid,e.type),a=(0,u.Z)(e,["guid","company_guid","type"]);return(0,n.jsx)(d,(0,o.Z)({guid:s,type:r},a),s)}(e)}))})})}),h=function(e){var s=e.data,r=e.status;return(0,n.jsxs)("div",{className:"flex",children:["loading"===r&&(0,n.jsx)(c.gb,{}),"error"===r&&(0,n.jsx)(c.jj,{}),"success"===r&&(0,n.jsx)(v,(0,o.Z)({},s))]})},j=r(1029),p=r(4058),v=function(e){var s=e.created_at,r=e.guid,a=e.media,t=e.type,i=e.name,d=e.locations,o=e.company_name,u=(0,l.$)().t;return(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"title dark:text-font-dark",children:i}),(0,n.jsx)(c.cs,{date:s,text:u("created")})]}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap sm:justify-between justify-center gap-2",children:[(0,n.jsx)(c.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",href:"/marketing-files/edit?guid=/".concat(r),children:(0,n.jsx)("i",{className:"far fa-pen-to-square"})}),(0,n.jsx)(p.vS,{guid:r,api:"second-screen-media",removeFunction:j.rK,redirect:"/marketing-files"})]})]}),(0,n.jsxs)("div",{className:"flex lg:flex-row flex-col gap-4",children:[(0,n.jsxs)("div",{className:"flex gap-4 flex-col lg:w-1/3 w-full box dark:border-font-dark-variant",children:[(0,n.jsx)("h3",{className:"flex-1 title dark:text-font-dark",children:u("details")}),(0,n.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,n.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,n.jsx)("span",{className:"description-label",children:u("company")}),(0,n.jsx)("span",{className:"description-content dark:text-font-dark",children:o})]}),(0,n.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,n.jsx)("span",{className:"description-label",children:u("locations.title")}),(0,n.jsx)("span",{className:"description-content dark:text-font-dark",children:null===d||void 0===d?void 0:d.map((function(e){return e.name})).join(", ")})]})]})]}),(0,n.jsx)("div",{className:"flex box dark:border-font-dark-variant w-full h-full lg:flex-1 justify-center",children:(null===t||void 0===t?void 0:t.startsWith("image/"))?(0,n.jsx)("img",{className:"object-contain max-w-[18rem] h-72 rounded",src:null===a||void 0===a?void 0:a.full_picture,loading:"lazy",decoding:"async"}):(0,n.jsx)("video",{controls:!0,className:"rounded lg:max-w-[38rem] w-full",children:(0,n.jsx)("source",{src:null===a||void 0===a?void 0:a.full_picture,type:t})})})]})]})}},34509:function(e,s,r){"use strict";r.r(s);var n=r(26042),a=r(828),t=r(85893),i=r(67294),l=r(4374),c=r(10638),d=r(70011),o=r(76166),u=r(64534),x=r(91578),f=r(2428);s.default=function(){var e=(0,l.$)().t,s=(0,a.Z)((0,f.dd)(),2),r=s[0],m=s[1],h=(0,f.M_)(),j=h.options,p=h.setOptions,v=(0,i.useCallback)((function(e){p((function(s){return(0,n.Z)({},s,e)})),m.hide()}),[]),g=(0,i.useRef)();return(0,i.useEffect)((function(){g.current=j}),[]),(0,t.jsxs)(u.k,{children:[(0,t.jsxs)(c.h4,{name:e("marketing-file.title"),btnLabel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"sm:block hidden",children:e("addNew")}),(0,t.jsx)("i",{className:"fas fa-plus"})]}),href:"/marketing-files/add",children:[(0,t.jsx)(d.ol,{classNameInput:"border-b-1",className:"w-full pr-2",setOptions:p}),(0,t.jsx)(c.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",onClick:function(){return m.show()},children:(0,t.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,t.jsx)(o.Z,{show:r,modal:m,children:(0,t.jsx)(c.kI,{onFilters:v,children:function(s){var r=s.handleFilter,n=s.applyFilters;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-sm text-white",children:e("filter")}),(0,t.jsx)("h3",{className:"title mt-2 text-white",children:e("marketing-file.title")})]}),(0,t.jsx)(d.KM,{id:"marketing-file-order",setOptions:r})]}),(0,t.jsx)("div",{children:(0,t.jsx)(c.zx,{onClick:n,className:"filter-btn",children:e("applyFilters")})})]})}})})]}),(0,t.jsx)(c.lk,{options:j,as:x.ZW,url:"api/second-screen-media"})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return s=81095,e(e.s=s);var s}));var s=e.O();_N_E=s}]);