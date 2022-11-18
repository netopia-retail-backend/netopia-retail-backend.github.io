(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3750],{97003:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketing-files/view",function(){return r(95867)}])},64534:function(e,a,r){"use strict";r.d(a,{k:function(){return i}});var n=r(85893),t=r(10638),i=function(e){var a=e.className,r=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-background dark:bg-background-dark md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(t.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(a),children:r})]})}},91578:function(e,a,r){"use strict";r.d(a,{yR:function(){return s},q4:function(){return d},AC:function(){return x},ZW:function(){return m},XJ:function(){return v},B2:function(){return p}});var n=r(85893),t=r(34784),i=r(41698),s=function(e){var a=e.data,r=e.status,s=(0,t.h)(a);s.locations=a&&a.locations&&Object.fromEntries(a.locations.map((function(e){return[e.guid,!0]})));var c="edit-marketing-file-".concat(r);return(0,n.jsx)(i.sn,{initialValues:s},c)},c=r(4374),l=r(10638),d=function(e){var a=e.guid,r=e.name,t=e.media,i=e.created_at,s=e.type,d=(0,c.$)().t;return(0,n.jsx)(l.rU,{href:"/marketing-files/view?guid=".concat(a),children:(0,n.jsxs)("div",{className:"box dark:border-font-dark-variant cursor-pointer flex flex-col gap-4",title:d("marketing-file.view"),children:[(0,n.jsx)(x,{media:t,type:s}),(0,n.jsx)("div",{className:"text-sm text-gray-400",children:(0,n.jsx)(l.cs,{date:i,text:d("created")})}),(0,n.jsx)("div",{className:"truncate text-xl text-primary dark:text-font-dark font-semibold",children:r})]})})},o=r(26042),u=r(99534),x=function(e){var a=e.media,r=e.type,t=(0,u.Z)(e,["media","type"]),i=(a||"").full_picture;return(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,n.jsx)("div",{className:"flex flex-col w-36 h-36 justify-center",children:(null===r||void 0===r?void 0:r.startsWith("image/"))?(0,n.jsx)("img",(0,o.Z)({className:"object-contain rounded",src:i,loading:"lazy",decoding:"async"},t)):(0,n.jsx)("div",{className:"absolute bg-white",children:(0,n.jsx)("div",{className:"flex flex-col rounded w-36 h-36 justify-center border items-center text-gray-400 bg-gray-100",children:(0,n.jsx)("i",{className:"fas fa-video text-4xl"})})})})})})},f=r(29815),m=(r(67294),function(e){var a=(e.pages||[]).reduce((function(e,a){return(0,f.Z)(e).concat((0,f.Z)(a))}),[]);return(0,n.jsx)(n.Fragment,{children:0===a.length?(0,n.jsx)(l.X6,{}):(0,n.jsx)("div",{className:"select-none grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:a.map((function(e){return function(e){var a=e.guid,r=(e.company_guid,e.type),t=(0,u.Z)(e,["guid","company_guid","type"]);return(0,n.jsx)(d,(0,o.Z)({guid:a,type:r},t),a)}(e)}))})})}),v=function(e){var a=e.data,r=e.status;return(0,n.jsxs)("div",{className:"flex",children:["loading"===r&&(0,n.jsx)(l.gb,{}),"error"===r&&(0,n.jsx)(l.jj,{}),"success"===r&&(0,n.jsx)(p,(0,o.Z)({},a))]})},g=r(1029),j=r(4058),p=function(e){var a=e.created_at,r=e.guid,t=e.media,i=e.type,s=e.name,d=e.locations,o=e.company_name,u=(0,c.$)().t;return(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"title dark:text-font-dark",children:s}),(0,n.jsx)(l.cs,{date:a,text:u("created")})]}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap sm:justify-between justify-center gap-2",children:[(0,n.jsx)(l.zx,{className:"button secondary dark:border-font-dark-variant dark:text-font-dark",href:"/marketing-files/edit?guid=/".concat(r),children:(0,n.jsx)("i",{className:"far fa-pen-to-square"})}),(0,n.jsx)(j.vS,{guid:r,api:"second-screen-media",removeFunction:g.rK,redirect:"/marketing-files"})]})]}),(0,n.jsxs)("div",{className:"flex lg:flex-row flex-col gap-4",children:[(0,n.jsxs)("div",{className:"flex gap-4 flex-col lg:w-1/3 w-full box dark:border-font-dark-variant",children:[(0,n.jsx)("h3",{className:"flex-1 title dark:text-font-dark",children:u("details")}),(0,n.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,n.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,n.jsx)("span",{className:"description-label",children:u("company")}),(0,n.jsx)("span",{className:"description-content dark:text-font-dark",children:o})]}),(0,n.jsxs)("div",{className:"description dark:border-font-dark-variant",children:[(0,n.jsx)("span",{className:"description-label",children:u("locations.title")}),(0,n.jsx)("span",{className:"description-content dark:text-font-dark",children:null===d||void 0===d?void 0:d.map((function(e){return e.name})).join(", ")})]})]})]}),(0,n.jsx)("div",{className:"flex box dark:border-font-dark-variant w-full h-full lg:flex-1 justify-center",children:(null===i||void 0===i?void 0:i.startsWith("image/"))?(0,n.jsx)("img",{className:"object-contain max-w-[18rem] h-72 rounded",src:null===t||void 0===t?void 0:t.full_picture,loading:"lazy",decoding:"async"}):(0,n.jsx)("video",{controls:!0,className:"rounded lg:max-w-[38rem] w-full",children:(0,n.jsx)("source",{src:null===t||void 0===t?void 0:t.full_picture,type:i})})})]})]})}},95867:function(e,a,r){"use strict";r.r(a);var n=r(85893),t=r(10638),i=r(64534),s=r(91578),c=r(2428);a.default=(0,t.EN)((function(e){var a=e.guid,r=(0,c.aM)("api/second-screen-media/".concat(a)),t=r.data,l=r.status;return(0,n.jsx)(i.k,{children:(0,n.jsx)(s.XJ,{data:t,status:l})})}))}},function(e){e.O(0,[9774,2888,179],(function(){return a=97003,e(e.s=a);var a}));var a=e.O();_N_E=a}]);