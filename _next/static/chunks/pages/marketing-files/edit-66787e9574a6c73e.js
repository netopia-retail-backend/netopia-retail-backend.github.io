(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5413],{42725:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketing-files/edit",function(){return i(45977)}])},64534:function(e,s,i){"use strict";i.d(s,{k:function(){return t}});var n=i(85893),a=i(88194),t=function(e){var s=e.className,i=e.children;return(0,n.jsxs)("div",{className:"text-sm bg-[#F2F6FB] md:grid print:flex print:bg-white relative",id:"main",children:[(0,n.jsx)(a.v2,{}),(0,n.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:i})]})}},62382:function(e,s,i){"use strict";var n=i(26042),a=i(99534),t=i(85893),c=i(91578),r=i(88194),l=i(61503);s.Z=function(e){var s=e.options,i=(0,l.NS)("api/second-screen-media",s,{cacheTime:0}),d=i.data,o=(0,a.Z)(i,["data"]),u=o.isLoading,x=o.isError,f=o.isSuccess;return(0,t.jsxs)("div",{className:"flex-1 space-y-4",children:[u&&(0,t.jsx)(r.gb,{}),x&&(0,t.jsx)(r.jj,{}),f&&(0,t.jsx)(c.ZW,(0,n.Z)({},d)),f&&(0,t.jsx)(r.fr,(0,n.Z)({},o))]})}},91578:function(e,s,i){"use strict";i.d(s,{yR:function(){return c},q4:function(){return d},AC:function(){return x},ZW:function(){return m},XJ:function(){return j},B2:function(){return h}});var n=i(85893),a=i(34784),t=i(60764),c=function(e){var s=e.data,i=e.status,c=(0,a.h)(s);c.locations=s&&s.locations&&Object.fromEntries(s.locations.map((function(e){return[e.guid,!0]})));var r="edit-marketing-file-".concat(i);return(0,n.jsx)(t.sn,{initialValues:c},r)},r=i(4374),l=i(88194),d=function(e){var s=e.guid,i=e.name,a=e.media,t=e.created_at,c=e.type,d=(0,r.$)().t;return(0,n.jsx)(l.rU,{href:"/marketing-files/view?guid=".concat(s),children:(0,n.jsxs)("div",{className:"box cursor-pointer flex flex-col gap-4",title:d("marketing-file.view"),children:[(0,n.jsx)(x,{media:a,type:c}),(0,n.jsx)("div",{className:"text-sm text-gray-400",children:(0,n.jsx)(l.cs,{date:t,text:d("created")})}),(0,n.jsx)("div",{className:"truncate text-xl text-primary font-semibold",children:i})]})})},o=i(26042),u=i(99534),x=function(e){var s=e.media,i=e.type,a=(0,u.Z)(e,["media","type"]),t=(s||"").full_picture;return(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,n.jsx)("div",{className:"flex flex-col w-36 h-36 justify-center",children:(null===i||void 0===i?void 0:i.startsWith("image/"))?(0,n.jsx)("img",(0,o.Z)({className:"object-contain rounded",src:t,loading:"lazy",decoding:"async"},a)):(0,n.jsx)("div",{className:"absolute bg-white",children:(0,n.jsx)("div",{className:"flex flex-col rounded w-36 h-36 justify-center border items-center text-gray-400 bg-gray-100",children:(0,n.jsx)("i",{className:"fas fa-video text-4xl"})})})})})})},f=(i(62382),i(29815)),m=(i(67294),function(e){var s=(e.pages||[]).reduce((function(e,s){return(0,f.Z)(e).concat((0,f.Z)(s))}),[]);return(0,n.jsx)("div",{className:"select-none grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:s.map((function(e){return function(e){var s=e.guid,i=(e.company_guid,e.type),a=(0,u.Z)(e,["guid","company_guid","type"]);return(0,n.jsx)(d,(0,o.Z)({guid:s,type:i},a),s)}(e)}))})}),j=function(e){var s=e.data,i=e.status;return(0,n.jsxs)("div",{className:"flex",children:["loading"===i&&(0,n.jsx)(l.gb,{}),"error"===i&&(0,n.jsx)(l.jj,{}),"success"===i&&(0,n.jsx)(h,(0,o.Z)({},s))]})},p=i(1029),v=i(89315),h=function(e){var s=e.created_at,i=e.guid,a=e.media,t=e.type,c=e.name,d=e.locations,o=e.company_name,u=(0,r.$)().t;return(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"title",children:c}),(0,n.jsx)(l.cs,{date:s,text:u("created")})]}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap sm:justify-between justify-center gap-2",children:[(0,n.jsx)(l.zx,{className:"button secondary",href:"/marketing-files/edit?guid=/".concat(i),children:(0,n.jsx)("i",{className:"far fa-pen-to-square"})}),(0,n.jsx)(v.vS,{guid:i,api:"second-screen-media",removeFunction:p.rK,redirect:"/marketing-files"})]})]}),(0,n.jsxs)("div",{className:"flex lg:flex-row flex-col gap-4",children:[(0,n.jsxs)("div",{className:"flex gap-4 flex-col lg:w-1/3 w-full box",children:[(0,n.jsx)("h3",{className:"flex-1 title",children:u("details")}),(0,n.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,n.jsxs)("div",{className:"description",children:[(0,n.jsx)("span",{className:"description-label",children:u("company")}),(0,n.jsx)("span",{className:"description-content",children:o})]}),(0,n.jsxs)("div",{className:"description",children:[(0,n.jsx)("span",{className:"description-label",children:u("locations.title")}),(0,n.jsx)("span",{className:"description-content",children:null===d||void 0===d?void 0:d.map((function(e){return e.name})).join(", ")})]})]})]}),(0,n.jsx)("div",{className:"flex box w-full h-full lg:flex-1 justify-center",children:(null===t||void 0===t?void 0:t.startsWith("image/"))?(0,n.jsx)("img",{className:"object-contain max-w-[18rem] h-72 rounded",src:null===a||void 0===a?void 0:a.full_picture,loading:"lazy",decoding:"async"}):(0,n.jsx)("video",{controls:!0,className:"rounded lg:max-w-[38rem] w-full",children:(0,n.jsx)("source",{src:null===a||void 0===a?void 0:a.full_picture,type:t})})})]})]})}},45977:function(e,s,i){"use strict";i.r(s);var n=i(85893),a=i(4374),t=i(88194),c=i(64534),r=i(91578),l=i(61503);s.default=(0,t.EN)((function(e){var s=e.guid,i=(0,a.$)().t,d=(0,l.aM)("api/second-screen-media/".concat(s)),o=d.data,u=d.status,x=d.isLoading;return(0,n.jsx)(c.k,{children:(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("div",{className:"flex items-center space-x-2",children:(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("h3",{className:"title",children:i("products.edit")}),(0,n.jsx)(t.$j,{show:x})]})}),(0,n.jsx)(r.yR,{data:o,status:u})]})})}))}},function(e){e.O(0,[9774,2888,179],(function(){return s=42725,e(e.s=s);var s}));var s=e.O();_N_E=s}]);