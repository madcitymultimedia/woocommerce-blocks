(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[25,31],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"Block",(function(){return p}));var c=a(0),n=a(1),l=a(4),s=a.n(l),r=a(29),o=a(23),u=a(154),i=a(99),d=a(82),b=a(130),m=a(42);a(260);const p=e=>{const{className:t,align:a}=e,{parentClassName:l}=Object(o.useInnerBlockLayoutContext)(),{product:m}=Object(o.useProductDataContext)(),p=Object(u.a)(e),g=Object(i.a)(e),O=Object(d.a)(e),j=Object(b.a)(e);if(!m.id||!m.on_sale)return null;const f="string"==typeof a?"wc-block-components-product-sale-badge--align-"+a:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,f,{[l+"__product-onsale"]:l},g.className,p.className),style:{...g.style,...p.style,...O.style,...j.style}},Object(c.createElement)(r.a,{label:Object(n.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(n.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(m.withProductDataContext)(p)},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(5),n=a(61),l=a(33),s=a(115);const r=e=>{if(!Object(n.b)())return{className:"",style:{}};const t=Object(l.a)(e)?e:{},a=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:a})}},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(6),n=a.n(c),l=a(0),s=a(1),r=a(4),o=a.n(r),u=a(2),i=a(23),d=a(82),b=a(154),m=a(130),p=a(42),g=a(70),O=a(141);a(262);const j=e=>{const{className:t,imageSizing:a="full-size",showProductLink:c=!0,showSaleBadge:n,saleBadgeAlign:r="right"}=e,{parentClassName:u}=Object(i.useInnerBlockLayoutContext)(),{product:p,isLoading:j}=Object(i.useProductDataContext)(),{dispatchStoreEvent:y}=Object(g.a)(),k=Object(d.a)(e),h=Object(b.a)(e),E=Object(m.a)(e);if(!p.id)return Object(l.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[u+"__product-image"]:u},h.className),style:{...k.style,...h.style,...E.style}},Object(l.createElement)(f,null));const _=!!p.images.length,N=_?p.images[0]:null,C=c?"a":l.Fragment,L=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),p.name),v={href:p.permalink,...!_&&{"aria-label":L},onClick:()=>{y("product-view-link",{product:p})}};return Object(l.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[u+"__product-image"]:u},h.className),style:{...k.style,...h.style,...E.style}},Object(l.createElement)(C,c&&v,!!n&&Object(l.createElement)(O.default,{align:r,product:p}),Object(l.createElement)(w,{fallbackAlt:p.name,image:N,loaded:!j,showFullSize:"cropped"!==a})))},f=()=>Object(l.createElement)("img",{src:u.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),w=e=>{let{image:t,loaded:a,showFullSize:c,fallbackAlt:s}=e;const{thumbnail:r,src:o,srcset:u,sizes:i,alt:d}=t||{},b={alt:d||s,hidden:!a,src:r,...c&&{src:o,srcSet:u,sizes:i}};return Object(l.createElement)(l.Fragment,null,b.src&&Object(l.createElement)("img",n()({"data-testid":"product-image"},b)),!t&&Object(l.createElement)(f,null))};t.b=Object(p.withProductDataContext)(j)},260:function(e,t){},262:function(e,t){},29:function(e,t,a){"use strict";var c=a(0),n=a(4),l=a.n(n);t.a=e=>{let t,{label:a,screenReaderLabel:n,wrapperElement:s,wrapperProps:r={}}=e;const o=null!=a,u=null!=n;return!o&&u?(t=s||"span",r={...r,className:l()(r.className,"screen-reader-text")},Object(c.createElement)(t,r,n)):(t=s||c.Fragment,o&&u&&a!==n?Object(c.createElement)(t,r,Object(c.createElement)("span",{"aria-hidden":"true"},a),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,r,a))}},316:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));const c={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}}},567:function(e,t,a){"use strict";a.r(t);var c=a(42),n=a(195),l=a(316);t.default=Object(c.withFilteredAttributes)(l.a)(n.b)}}]);