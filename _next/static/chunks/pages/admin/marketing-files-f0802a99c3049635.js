(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5633],{32567:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/marketing-files",function(){return i(60674)}])},64534:function(e,s,i){"use strict";i.d(s,{k:function(){return a}});var n=i(85893),t=i(15204),a=function(e){var s=e.className,i=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-[#F2F6FB] md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(t.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:i})]})}},62382:function(e,s,i){"use strict";var n=i(26042),t=i(99534),a=i(85893),l=i(91578),r=i(15204),c=i(61503);s.Z=function(e){var s=e.options,i=(0,c.NS)("api/second-screen-media",s,{cacheTime:0}),d=i.data,o=(0,t.Z)(i,["data"]),u=o.isLoading,x=o.isError,f=o.isSuccess;return(0,a.jsxs)("div",{className:"flex-1 space-y-4",children:[u&&(0,a.jsx)(r.gb,{}),x&&(0,a.jsx)(r.jj,{}),f&&(0,a.jsx)(l.ZW,(0,n.Z)({},d)),f&&(0,a.jsx)(r.fr,(0,n.Z)({},o))]})}},91578:function(e,s,i){"use strict";i.d(s,{yR:function(){return l},q4:function(){return d},AC:function(){return x},ZW:function(){return m},XJ:function(){return j},B2:function(){return p}});var n=i(85893),t=i(34784),a=i(19249),l=function(e){var s=e.data,i=e.status,l=(0,t.h)(s);l.locations=s&&s.locations&&Object.fromEntries(s.locations.map((function(e){return[e.guid,!0]})));var r="edit-marketing-file-".concat(i);return(0,n.jsx)(a.sn,{initialValues:l},r)},r=i(4374),c=i(15204),d=function(e){var s=e.guid,i=e.name,t=e.media,a=e.created_at,l=e.type,d=(0,r.$)().t;return(0,n.jsx)(c.rU,{href:"/admin/view-marketing-file/".concat(s),children:(0,n.jsxs)("div",{className:"box cursor-pointer flex flex-col gap-4",title:d("marketing-file.view"),children:[(0,n.jsx)(x,{media:t,type:l}),(0,n.jsx)("div",{className:"text-sm text-gray-400",children:(0,n.jsx)(c.cs,{date:a,text:d("created")})}),(0,n.jsx)("div",{className:"truncate text-xl text-primary font-semibold",children:i})]})})},o=i(26042),u=i(99534),x=function(e){var s=e.media,i=e.type,t=(0,u.Z)(e,["media","type"]),a=(s||"").full_picture;return(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,n.jsx)("div",{className:"flex flex-col w-36 h-36 justify-center",children:(null===i||void 0===i?void 0:i.startsWith("image/"))?(0,n.jsx)("img",(0,o.Z)({className:"object-contain rounded",src:a,loading:"lazy",decoding:"async"},t)):(0,n.jsx)("div",{className:"absolute bg-white",children:(0,n.jsx)("div",{className:"flex flex-col rounded w-36 h-36 justify-center border items-center text-gray-400 bg-gray-100",children:(0,n.jsx)("i",{className:"fas fa-video text-4xl"})})})})})})},f=(i(62382),i(29815)),m=(i(67294),function(e){var s=(e.pages||[]).reduce((function(e,s){return(0,f.Z)(e).concat((0,f.Z)(s))}),[]);return(0,n.jsx)("div",{className:"select-none grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:s.map((function(e){return function(e){var s=e.guid,i=(e.company_guid,e.type),t=(0,u.Z)(e,["guid","company_guid","type"]);return(0,n.jsx)(d,(0,o.Z)({guid:s,type:i},t),s)}(e)}))})}),j=function(e){var s=e.data,i=e.status;return(0,n.jsxs)("div",{className:"flex",children:["loading"===i&&(0,n.jsx)(c.gb,{}),"error"===i&&(0,n.jsx)(c.jj,{}),"success"===i&&(0,n.jsx)(p,(0,o.Z)({},s))]})},h=i(65323),p=function(e){var s=e.created_at,i=e.guid,t=e.media,a=e.type,l=e.name,d=e.locations,o=e.company_name,u=(0,r.$)().t;return(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"title",children:l}),(0,n.jsx)(c.cs,{date:s,text:u("created")})]}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap sm:justify-between justify-center gap-2",children:[(0,n.jsx)(c.zx,{className:"button secondary",href:"/admin/edit-marketing-file/".concat(i),children:(0,n.jsx)("i",{className:"far fa-pen-to-square"})}),(0,n.jsx)(h.BU,{guid:i})]})]}),(0,n.jsxs)("div",{className:"flex lg:flex-row flex-col gap-4",children:[(0,n.jsxs)("div",{className:"flex gap-4 flex-col lg:w-1/3 w-full box",children:[(0,n.jsx)("h3",{className:"flex-1 title",children:u("details")}),(0,n.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,n.jsxs)("div",{className:"description",children:[(0,n.jsx)("span",{className:"description-label",children:u("company")}),(0,n.jsx)("span",{className:"description-content",children:o})]}),(0,n.jsxs)("div",{className:"description",children:[(0,n.jsx)("span",{className:"description-label",children:u("locations.title")}),(0,n.jsx)("span",{className:"description-content",children:null===d||void 0===d?void 0:d.map((function(e){return e.name})).join(", ")})]})]})]}),(0,n.jsx)("div",{className:"flex box w-full h-full lg:flex-1 justify-center",children:(null===a||void 0===a?void 0:a.startsWith("image/"))?(0,n.jsx)("img",{className:"object-contain max-w-[18rem] h-72 rounded",src:null===t||void 0===t?void 0:t.full_picture,loading:"lazy",decoding:"async"}):(0,n.jsx)("video",{controls:!0,className:"rounded lg:max-w-[38rem] w-full",children:(0,n.jsx)("source",{src:null===t||void 0===t?void 0:t.full_picture,type:a})})})]})]})}},60674:function(e,s,i){"use strict";i.r(s);var n=i(26042),t=i(828),a=i(85893),l=i(67294),r=i(4374),c=i(15204),d=i(34913),o=i(76166),u=i(64534),x=i(62382),f=i(61503);s.default=function(){var e=(0,r.$)().t,s=(0,t.Z)((0,f.dd)(),2),i=s[0],m=s[1],j=(0,f.M_)(),h=j.options,p=j.setOptions,v=(0,l.useCallback)((function(e){p((function(s){return(0,n.Z)({},s,e)})),m.hide()}),[]),g=(0,l.useRef)();return(0,l.useEffect)((function(){g.current=h}),[]),(0,a.jsxs)(u.k,{children:[(0,a.jsxs)(c.h4,{name:e("marketing-file.title"),btnLabel:(0,a.jsxs)(a.Fragment,{children:[e("addNew"),(0,a.jsx)("i",{className:"fas fa-plus"})]}),href:"/admin/add-marketing-file",children:[(0,a.jsx)(d.ol,{classNameInput:"border-b-1 py-3",className:"w-full pr-2",setOptions:p}),(0,a.jsx)(c.zx,{className:"button secondary",onClick:function(){return m.show()},children:(0,a.jsx)("i",{className:"fa-solid fa-sliders"})}),(0,a.jsx)(o.Z,{show:i,modal:m,children:(0,a.jsx)(c.kI,{onFilters:v,children:function(s){var i=s.handleFilter,n=s.applyFilters;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-sm text-white",children:e("filter")}),(0,a.jsx)("h3",{className:"title mt-2 text-white",children:e("marketing-file.title")})]}),(0,a.jsx)(d.KM,{id:"marketing-file-order",setOptions:i})]}),(0,a.jsx)("div",{children:(0,a.jsx)(c.zx,{onClick:n,className:"filter-btn",children:e("applyFilters")})})]})}})})]}),(0,a.jsx)(x.Z,{options:h})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return s=32567,e(e.s=s);var s}));var s=e.O();_N_E=s}]);