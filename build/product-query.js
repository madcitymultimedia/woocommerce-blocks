this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-query"]=function(e){function t(t){for(var r,u,a=t[0],i=t[1],s=t[2],b=0,d=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);d.length;)d.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,a=1;a<o.length;a++){var i=o[a];0!==c[i]&&(r=!1)}r&&(n.splice(t--,1),e=u(u.s=o[0]))}return e}var r={},c={32:0},n=[];function u(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=r,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(o,r,function(t){return e[t]}.bind(null,r));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=i;return n.push([461,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){e.exports=window.wp.primitives},114:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return l}));var r=o(0),c=o(1),n=o(79),u=o(303),a=o(227);o(201);const i=e=>{let{text:t,title:o=Object(c.__)("Feedback?","woo-gutenberg-products-block"),url:i="https://ideas.woocommerce.com/forums/133476-woocommerce?category_id=384565"}=e;const[s,l]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{l(!0)},[]),s&&Object(r.createElement)("div",{className:"wc-block-feedback-prompt"},Object(r.createElement)(n.a,{icon:u.a}),Object(r.createElement)("h2",{className:"wc-block-feedback-prompt__title"},o),Object(r.createElement)("p",{className:"wc-block-feedback-prompt__text"},t),Object(r.createElement)("a",{href:i,className:"wc-block-feedback-prompt__link",rel:"noreferrer noopener",target:"_blank"},Object(c.__)("Give us your feedback.","woo-gutenberg-products-block"),Object(r.createElement)(n.a,{icon:a.a,size:16})))},s=()=>Object(r.createElement)(i,{text:Object(c.__)("We are currently working on improving our cart and checkout blocks to provide merchants with the tools and customization options they need.","woo-gutenberg-products-block"),url:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/issues/new?template=--cart-checkout-feedback.md"}),l=()=>Object(r.createElement)(i,{text:Object(c.__)("Thanks for trying out the Products block! Help us make it better by sharing your feedback.","woo-gutenberg-products-block"),title:Object(c.__)("Share your feedback!","woo-gutenberg-products-block"),url:"https://airtable.com/shrFX5FAqmCY6hVYI"})},115:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return s}));var r=o(0),c=o(1),n=o(79),u=o(343);const a=Object(c.__)("Product Summary","woo-gutenberg-products-block"),i=Object(r.createElement)(n.a,{icon:u.a,className:"wc-block-editor-components-block-icon"}),s=Object(c.__)("Display a short description about a product.","woo-gutenberg-products-block")},130:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return s}));var r=o(0),c=o(1),n=o(79),u=o(342);const a=Object(c.__)("Product Title","woo-gutenberg-products-block"),i=Object(r.createElement)(n.a,{icon:u.a,className:"wc-block-editor-components-block-icon"}),s=Object(c.__)("Display the title of a product.","woo-gutenberg-products-block")},15:function(e,t){e.exports=window.wp.apiFetch},17:function(e,t){e.exports=window.wp.url},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,o){"use strict";o.d(t,"o",(function(){return n})),o.d(t,"m",(function(){return u})),o.d(t,"l",(function(){return a})),o.d(t,"n",(function(){return i})),o.d(t,"j",(function(){return s})),o.d(t,"e",(function(){return l})),o.d(t,"g",(function(){return b})),o.d(t,"k",(function(){return d})),o.d(t,"c",(function(){return p})),o.d(t,"d",(function(){return m})),o.d(t,"h",(function(){return g})),o.d(t,"a",(function(){return w})),o.d(t,"i",(function(){return f})),o.d(t,"b",(function(){return _})),o.d(t,"f",(function(){return O}));var r,c=o(2);const n=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),u=n.pluginUrl+"images/",a=n.pluginUrl+"build/",i=n.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,l=c.STORE_PAGES.checkout.id,b=(c.STORE_PAGES.checkout.permalink,c.STORE_PAGES.privacy.permalink),d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),p=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),m=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),w=Object(c.getSetting)("allowedCountries",{}),f=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{}),O=Object(c.getSetting)("localPickupEnabled",!1)},201:function(e,t){},26:function(e,t,o){"use strict";o.d(t,"h",(function(){return s})),o.d(t,"e",(function(){return l})),o.d(t,"b",(function(){return b})),o.d(t,"i",(function(){return d})),o.d(t,"f",(function(){return p})),o.d(t,"c",(function(){return m})),o.d(t,"d",(function(){return g})),o.d(t,"g",(function(){return w})),o.d(t,"a",(function(){return f}));var r=o(17),c=o(15),n=o.n(c),u=o(8),a=o(2),i=o(20);const s=e=>{let{selected:t=[],search:o="",queryArgs:c={}}=e;const a=(e=>{let{selected:t=[],search:o="",queryArgs:c={}}=e;const n=i.o.productCount>100,u={per_page:n?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},a=[Object(r.addQueryArgs)("/wc/store/v1/products",{...u,...c})];return n&&t.length&&a.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:o,queryArgs:c});return Promise.all(a.map(e=>n()({path:e}))).then(e=>Object(u.uniqBy)(Object(u.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},l=e=>n()({path:"/wc/store/v1/products/"+e}),b=()=>n()({path:"wc/store/v1/products/attributes"}),d=e=>n()({path:`wc/store/v1/products/attributes/${e}/terms`}),p=e=>{let{selected:t=[],search:o}=e;const c=(e=>{let{selected:t=[],search:o}=e;const c=Object(a.getSetting)("limitTags",!1),n=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:o})];return c&&t.length&&n.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),n})({selected:t,search:o});return Promise.all(c.map(e=>n()({path:e}))).then(e=>Object(u.uniqBy)(Object(u.flatten)(e),"id"))},m=e=>n()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>n()({path:"wc/store/v1/products/categories/"+e}),w=e=>n()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),f=(e,t)=>{if(!e.title.raw)return e.slug;const o=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(o?"":" - "+e.slug)}},3:function(e,t){e.exports=window.wp.components},43:function(e,t){e.exports=window.wp.hooks},461:function(e,t,o){e.exports=o(485)},462:function(e,t){},463:function(e,t){},485:function(e,t,o){"use strict";o.r(t);var r=o(43),c=o(2),n=o(0),u=o(3),a=o(130),i=o(342),s=o(9);function l(e,t){let{blockDescription:o,blockIcon:r,blockTitle:c,variationName:n}=t;Object(s.registerBlockVariation)(e,{description:o,name:n,title:c,isActive:e=>e.__woocommerceNamespace===n,icon:{src:r},attributes:{__woocommerceNamespace:n},scope:["block","inserter"]})}l("core/post-title",{blockDescription:a.a,blockIcon:Object(n.createElement)(u.Icon,{icon:i.a}),blockTitle:a.c,variationName:"woocommerce/product-query/product-title"});var b=o(115),d=o(343);l("core/post-excerpt",{blockDescription:b.a,blockIcon:Object(n.createElement)(u.Icon,{icon:d.a}),blockTitle:b.c,variationName:"woocommerce/product-query/product-summary"});var p=o(1),m=o(567);l("core/post-template",{blockDescription:Object(p.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woo-gutenberg-products-block"),blockIcon:Object(n.createElement)(u.Icon,{icon:m.a}),blockTitle:Object(p.__)("Product template","woo-gutenberg-products-block"),variationName:"woocommerce/product-query/product-template"});var g=o(6),w=o.n(g),f=o(5),_=o(7),O=o(114);const k=["attributes","presets","onSale","stockStatus","wooInherit"],y=["taxQuery","search",...k],h=Object(c.getSetting)("stockStatusOptions",[]),j={allowedControls:y,displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:Object(c.getSetting)("hideOutOfStockItems",!1)?Object.keys(function(e,t){const{[t]:o,...r}=e;return r}(h,"outofstock")):Object.keys(h)}};let v;function S(e,t){const{query:o}=e.attributes;e.setAttributes({query:{...o,...t}})}!function(e){e.PRODUCT_QUERY="woocommerce/product-query"}(v||(v={}));const E=[{key:"title/asc",name:Object(p.__)("Sorted by title","woo-gutenberg-products-block")},{key:"date/desc",name:Object(p.__)("Newest","woo-gutenberg-products-block")},{key:"popularity/desc",name:Object(p.__)("Best Selling","woo-gutenberg-products-block")},{key:"rating/desc",name:Object(p.__)("Top Rated","woo-gutenberg-products-block")}];function x(e){const{query:t}=e.attributes;return Object(n.createElement)(u.PanelBody,{className:"woocommerce-product-query-panel__sort",title:Object(p.__)("Popular Filters","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)("p",null,Object(p.__)("Arrange products by popular pre-sets.","woo-gutenberg-products-block")),Object(n.createElement)(u.CustomSelectControl,{hideLabelFromVision:!0,label:Object(p.__)("Choose among these pre-sets","woo-gutenberg-products-block"),onChange:t=>{var o,r,c;if(null===(o=t.selectedItem)||void 0===o||!o.key)return;const[n,u]=null===(r=t.selectedItem)||void 0===r||null===(c=r.key)||void 0===c?void 0:c.split("/");S(e,{order:u,orderBy:n})},options:E,value:E.find(e=>e.key===`${t.orderBy}/${t.order}`)}))}var A=o(26);o(462);const P=k.map(e=>`__woocommerce${e[0].toUpperCase()}${e.slice(1)}`);function q(e){var t;const o="string"==typeof e?e:e.value;return null===(t=Object.entries(h).find(e=>{let[,t]=e;return t===o}))||void 0===t?void 0:t[0]}const C={attributes:e=>{const{query:t}=e.attributes,{isLoadingAttributes:o,productsAttributes:r}=function(e){const t=Object(c.getSetting)("attributes",[]),[o,r]=Object(n.useState)(!1),[u,a]=Object(n.useState)([]),i=Object(n.useRef)(!1);return Object(n.useEffect)(()=>{if(!o&&!i.current)return async function(){r(!0);for(const e of t){const t=await Object(A.i)(Number(e.attribute_id));a(o=>[...o,{...e,terms:t}])}i.current=!0,r(!1)}(),()=>{i.current=!0}},[t,o,!0]),{isLoadingAttributes:o,productsAttributes:u}}(),a=r.reduce((e,t)=>[...e,...t.terms.map(e=>`${t.attribute_label}: ${e.name}`)],[]);return Object(n.createElement)(u.__experimentalToolsPanelItem,{label:Object(p.__)("Product Attributes","woo-gutenberg-products-block"),hasValue:()=>{var e;return null===(e=t.__woocommerceAttributes)||void 0===e?void 0:e.length}},Object(n.createElement)(u.FormTokenField,{disabled:o,label:Object(p.__)("Product Attributes","woo-gutenberg-products-block"),onChange:t=>{let o;try{o=t.map(e=>function(e,t){const[o,r]=e.split(": "),c=t.find(e=>e.attribute_label===o);if(!c)throw new Error("Product Query Filter: Invalid attribute label");const n=c.terms.find(e=>e.name===r);if(!n)throw new Error("Product Query Filter: Invalid term name");return{taxonomy:"pa_"+c.attribute_name,termId:n.id}}(e="string"==typeof e?e:e.value,r)),S(e,{__woocommerceAttributes:o})}catch(e){}},suggestions:a,validateInput:e=>a.includes(e),value:o?[Object(p.__)("Loading…","woo-gutenberg-products-block")]:(i=t.__woocommerceAttributes,s=r,(null==i?void 0:i.map(e=>{const{taxonomy:t,term:o}=function(e,t){const o=t.find(t=>t.attribute_name===e.taxonomy.slice(3));return{taxonomy:o,term:null==o?void 0:o.terms.find(t=>t.id===e.termId)}}(e,s);return t&&o?`${t.attribute_label}: ${o.name}`:{title:Object(p.__)("Saved taxonomy was perhaps deleted or the slug was changed.","woo-gutenberg-products-block"),value:Object(p.__)("Error with saved taxonomy","woo-gutenberg-products-block"),status:"error"}}))||[]),__experimentalExpandOnFocus:!0}));var i,s},onSale:e=>{const{query:t}=e.attributes;return Object(n.createElement)(u.__experimentalToolsPanelItem,{label:Object(p.__)("Sale status","woo-gutenberg-products-block"),hasValue:()=>t.__woocommerceOnSale},Object(n.createElement)(u.ToggleControl,{label:Object(p.__)("Show only products on sale","woo-gutenberg-products-block"),checked:t.__woocommerceOnSale||!1,onChange:t=>{S(e,{__woocommerceOnSale:t})}}))},stockStatus:e=>{var t;const{query:o}=e.attributes;return Object(n.createElement)(u.__experimentalToolsPanelItem,{label:Object(p.__)("Stock status","woo-gutenberg-products-block"),hasValue:()=>o.__woocommerceStockStatus},Object(n.createElement)(u.FormTokenField,{label:Object(p.__)("Stock status","woo-gutenberg-products-block"),onChange:t=>{const o=t.map(q).filter(Boolean);S(e,{__woocommerceStockStatus:o})},suggestions:Object.values(h),validateInput:e=>Object.values(h).includes(e),value:(null==o||null===(t=o.__woocommerceStockStatus)||void 0===t?void 0:t.map(e=>h[e]))||[],__experimentalExpandOnFocus:!0}))},wooInherit:e=>Object(n.createElement)(u.ToggleControl,{className:"woo-inherit-query-toggle",label:Object(p.__)("Inherit query from template","woo-gutenberg-products-block"),help:Object(p.__)("Toggle to use the global query context that is set with the current template, such as variations of the product catalog or search. Disable to customize the filtering independently.","woo-gutenberg-products-block"),checked:e.attributes.query.inherit||!1,onChange:t=>S(e,{inherit:t})})},T=e=>{const t=function(e){const t=void 0!==Object(_.useSelect)("core/edit-site"),o=Object(_.useSelect)(t=>{var o;return null===(o=t(s.store).getActiveBlockVariation("core/query",e))||void 0===o?void 0:o.allowedControls},[e]);return t?function(e){return e.query.inherit}(e)?o.filter(e=>"wooInherit"===e):o:o.filter(e=>"wooInherit"!==e)}(e.attributes),o=function(e){const t=Object(_.useSelect)(t=>{var o;return null===(o=t("core/blocks").getBlockVariations("core/query").find(t=>t.name===e))||void 0===o?void 0:o.attributes});return t?Object.assign({},...P.map(e=>({[e]:t.query[e]}))):{}}(e.attributes.namespace);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(f.InspectorControls,null,(null==t?void 0:t.includes("presets"))&&Object(n.createElement)(x,e),Object(n.createElement)(u.__experimentalToolsPanel,{className:"woocommerce-product-query-toolspanel",label:Object(p.__)("Advanced Filters","woo-gutenberg-products-block"),resetAll:()=>{S(e,o)}},Object.entries(C).map(o=>{let[r,c]=o;return null!=t&&t.includes(r)?Object(n.createElement)(c,w()({},e,{key:r})):null}))),Object(n.createElement)(f.InspectorControls,{__experimentalGroup:"color"},Object(n.createElement)(O.b,null)))};Object(r.addFilter)("editor.BlockEdit","core/query",e=>t=>{return"core/query"===(o=t).name&&Object.values(v).includes(o.attributes.namespace)?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(T,t),Object(n.createElement)(e,t)):Object(n.createElement)(e,t);var o}),o(463);var I=o(11),N=Object(n.createElement)(I.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z"}));Object(c.isWpVersion)("6.1",">=")&&Object(s.registerBlockVariation)("core/query",{description:Object(p.__)("A block that displays a selection of products in your store.","woo-gutenberg-products-block"),name:"woocommerce/product-query",
/* translators: “Products“ is the name of the block. */
title:Object(p.__)("Products (Beta)","woo-gutenberg-products-block"),isActive:e=>"woocommerce/product-query"===e.namespace,icon:Object(n.createElement)(u.Icon,{icon:N,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"}),attributes:{...j,namespace:"woocommerce/product-query"},allowedControls:y,innerBlocks:[["core/post-template",{__woocommerceNamespace:"woocommerce/product-query/product-template"},[["woocommerce/product-image"],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",__woocommerceNamespace:"woocommerce/product-query/product-title"},[]],["woocommerce/product-price",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"1rem"}}}},[]],["woocommerce/product-button",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"1rem"}}}},[]]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}},[]],["core/query-no-results"]],scope:["inserter"]});const B=["core/post-excerpt","core/post-template","core/post-title"];Object(c.isWpVersion)("6.1",">=")&&Object(r.addFilter)("blocks.registerBlockType","core/custom-class-name/attribute",(function(e,t){return B.includes(t)&&(e.attributes={...e.attributes,__woocommerceNamespace:{type:"string"}}),e}))},5:function(e,t){e.exports=window.wp.blockEditor},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},9:function(e,t){e.exports=window.wp.blocks}});