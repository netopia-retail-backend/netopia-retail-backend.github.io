"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2165],{64534:function(e,s,t){t.d(s,{k:function(){return n}});var a=t(85893),c=t(15204),n=function(e){var s=e.className,t=e.children;return(0,a.jsxs)("div",{className:"text-sm bg-[#F2F6FB] md:grid print:flex print:bg-white relative",id:"main",children:[(0,a.jsx)(c.v2,{}),(0,a.jsx)("main",{"data-scroll":"scroll",className:"p-2 md:p-4 lg:p-8 md:px-12 space-y-4 h-screen overflow-y-auto print:overflow-y-hidden overflow-x-visible print:h-auto print:p-0 print:space-y-0 ".concat(s),children:t})]})}},91337:function(e,s,t){t.d(s,{mB:function(){return d},tA:function(){return x},Il:function(){return f},xy:function(){return v},RX:function(){return N},TD:function(){return E},mv:function(){return R},G9:function(){return P}});var a=t(85893),c=t(14924),n=t(26042),r=t(69396),i=t(34784),l=t(19249),d=function(e){var s=e.data,t=e.status,d=(0,i.h)(s);d.locations=s&&s.location_list&&s.location_list.reduce((function(e,s){var t=s.guid;return(0,r.Z)((0,n.Z)({},e),(0,c.Z)({},t,!0))}),{});var o="edit-product-".concat(t);return(0,a.jsx)(l.CN,{initialValues:d,product_category_guid:null===s||void 0===s?void 0:s.product_category_guid},o)},o=t(4374),u=t(25230),x=function(e){var s=e.purchase_price,t=e.sale_price,c=e.vat_rate,n=(0,o.$)().t,r=c?"| ".concat(c,"% ").concat(n("vat")):"| ".concat(n("noVat"));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-nowrap gap-2 items-baseline text-xl",children:[t&&(0,a.jsxs)("h4",{className:"whitespace-nowrap font-semibold text-font",children:[(0,u.Lx)(t)," ","RON"]}),(0,a.jsx)("span",{className:"text-font whitespace-nowrap font-light",children:r})]}),s>0&&(0,a.jsxs)("span",{className:"text-font whitespace-nowrap ",children:[n("purchasedAt")," ",(0,a.jsxs)("strong",{children:[(0,u.Lx)(s)," ","RON"]})]})]})},p=t(15204),m=t(99534),f=function(e){var s=e.guid,t=e.name,c=(e.barcode,e.type),r=e.unit_of_measure,i=e.media,l=(e.created_at,e.discount_percent,e.discount_value,(0,m.Z)(e,["guid","name","barcode","type","unit_of_measure","media","created_at","discount_percent","discount_value"])),d=(0,o.$)().t;return(0,a.jsx)(p.rU,{href:"/admin/view-product/".concat(s),children:(0,a.jsxs)("div",{className:"box cursor-pointer flex flex-col gap-4",title:d("products.view"),children:[(0,a.jsx)(v,{media:i}),(0,a.jsxs)("div",{className:"text-sm text-gray-400",children:[(0,u.x0)(d("products."+c))," |"," ",(0,u.x0)(d("products."+r))]}),(0,a.jsx)("div",{className:"truncate text-xl text-primary font-semibold",children:t}),(0,a.jsx)(x,(0,n.Z)({},l))]})})},h=t(67294),v=function(e){var s=e.media,t=(0,m.Z)(e,["media"]),c=(0,h.useState)(!1),r=c[0],i=c[1],l=(s||"").full_picture;return(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsxs)("div",{className:"relative w-28 h-28 overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute flex flex-col items-center",children:(0,a.jsx)("img",(0,n.Z)({onLoad:function(){return i(!0)},className:"object-cover w-28 h-28 rounded",src:l,loading:"lazy",decoding:"async"},t))}),!r&&(0,a.jsx)("div",{className:"absolute bg-white",children:(0,a.jsx)("div",{className:"flex flex-col rounded w-28 h-28 justify-center border items-center text-gray-400 bg-gray-100",children:(0,a.jsx)("i",{className:"fas fa-images text-4xl"})})})]})})},j=(t(34051),t(13867)),g=t(61503),N=function(e){var s=e.options,t=(0,g.NS)("api/products",s,{cacheTime:0}),c=t.data,i=(0,m.Z)(t,["data"]),l=i.isLoading,d=i.isError,o=i.isSuccess;return(0,a.jsxs)("div",{className:"flex-1 space-y-4",children:[l&&(0,a.jsx)(p.gb,{}),d&&(0,a.jsx)(p.jj,{}),o&&(0,a.jsx)(E,(0,r.Z)((0,n.Z)({},c),{options:s})),o&&(0,a.jsx)(p.fr,(0,n.Z)({},i))]})},_=t(29815),y=t(80454),b=t.n(y),w=t(96486),Z=t(2465),k=t(11860),E=function(e){var s=e.pages,t=e.pageParams,c=e.options,i=(0,o.$)().t,l=(0,h.useRef)(!1),d=(0,h.useState)([]),u=d[0],x=d[1];if((0,h.useEffect)((function(){l.current=!1;var e=(s||[]).reduce((function(e,s){return(0,_.Z)(e).concat((0,_.Z)(s))}),[]);x(e)}),[s]),k.local.set("count.products",t.count),(0,w.isEmpty)(s))return(0,a.jsx)("p",{children:i("empty")});(0,h.useEffect)((function(){"order_index"===c.sort&&l.current&&((0,j.me)(u),l.current=!1)}),[u]);var p=function(e){var s=e.guid,t=(e.company_guid,(0,m.Z)(e,["guid","company_guid"]));return(0,a.jsx)(f,(0,n.Z)({guid:s},t),s)},v="order_index"===c.sort,g=v?Z.ZP:"div",N=v?Z.TR:"div",y=v?{onSortEnd:function(e,s){x((function(t){return b()(t,e,s)})),l.current=!0},draggedItemClassName:"dragged"}:{};return(0,a.jsx)(g,(0,r.Z)((0,n.Z)({className:"select-none grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"},y),{children:u.map((function(e,s){return(0,a.jsx)(N,{children:(0,a.jsx)("div",{children:p(e)})},s)}))}))},R=function(e){var s=e.data,t=e.status;return(0,a.jsxs)("div",{className:"flex",children:["loading"===t&&(0,a.jsx)(p.gb,{}),"error"===t&&(0,a.jsx)(p.jj,{}),"success"===t&&(0,a.jsx)(P,(0,n.Z)({},s))]})},S=t(65323),C=t(60879),P=function(e){var s=e.barcode,t=e.created_at,c=e.description,n=e.guid,r=e.media,i=e.name,l=e.code,d=e.type,x=e.unit_of_measure,m=e.location_list,f=e.company_name,h=e.product_category_name,v=e.has_access,j=e.purchase_price_without_vat,g=e.vat_rate,N=e.sale_price_without_vat,_=e.sale_price,y=e.extra_data,b=e.discount_value,w=e.discount_percent,Z=(0,o.$)().t,k=[{key:Z("cod"),value:l},{key:Z("products.type"),value:(0,u.x0)(Z("products."+d))},{key:Z("products.purchaseWithout"),value:j},{key:Z("products.vatRate")+"%",value:g},{key:Z("products.salePriceWithout"),value:N},{key:Z("products.salePrice"),value:_},{key:Z("products.margin"),value:null===y||void 0===y?void 0:y.margin},{key:Z("products.discountValue"),value:b},{key:Z("products.discountPercent"),value:w},{key:Z("products.unit"),value:(0,u.x0)(Z("products."+x))},{key:Z("locations.title"),value:null===m||void 0===m?void 0:m.map((function(e){return e.name})).join(", ")}];return(0,a.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row w-full justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"title",children:Z("products.details")}),(0,a.jsx)(p.cs,{date:t,text:Z("created")})]}),!0===v&&(0,a.jsxs)("div",{className:"flex items-center flex-wrap sm:justify-between justify-center gap-2",children:[(0,a.jsxs)(p.zx,{className:"button secondary items-center gap-2",href:"/admin/add-product-sku/".concat(n),children:[(0,a.jsx)("i",{className:"fas fa-plus"}),Z("products.addSku")]}),(0,a.jsx)(p.zx,{className:"button secondary",href:"/admin/edit-product/".concat(n),children:(0,a.jsx)("i",{className:"far fa-pen-to-square"})}),(0,a.jsx)(S.R3,{guid:n})]})]}),(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex gap-4 flex-col lg:w-1/3 w-full",children:[(0,a.jsx)("div",{className:"flex flex-col box",children:(0,a.jsx)(p.pU,{media:r})}),(0,a.jsxs)("div",{className:"flex flex-col box gap-2",children:[(0,a.jsx)("h3",{className:"flex-1 title",children:Z("details")}),(0,a.jsxs)("div",{className:"grid grid-col gap-10",children:[(0,a.jsxs)("div",{className:"description",children:[(0,a.jsx)("span",{className:"description-label",children:Z("company")}),(0,a.jsx)("span",{className:"description-content",children:f})]}),(0,a.jsxs)("div",{className:"description",children:[(0,a.jsx)("span",{className:"description-label",children:Z("filterCategory")}),(0,a.jsx)("span",{className:"description-content",children:h})]}),s&&(0,a.jsxs)("div",{className:"description",children:[(0,a.jsx)("span",{className:"description-label",children:Z("products.barcode")}),(0,a.jsx)("span",{className:"description-content",children:s})]}),c&&(0,a.jsxs)("div",{className:"description",children:[(0,a.jsx)("span",{className:"description-label",children:Z("description")}),(0,a.jsx)("span",{className:"description-content",children:c})]})]})]})]}),(0,a.jsx)(p.gn,{title:i,data:k})]}),(0,a.jsx)(C.H1,{productGuid:n})]})}}}]);