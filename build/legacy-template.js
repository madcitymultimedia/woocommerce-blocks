this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["legacy-template"]=function(e){function t(t){for(var c,l,i=t[0],u=t[1],a=t[2],p=0,d=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);for(s&&s(t);d.length;)d.shift()();return n.push.apply(n,a||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var c={},r={15:0},n=[];function l(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=c,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(o,c,function(t){return e[t]}.bind(null,c));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var s=u;return n.push([468,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},12:function(e,t){e.exports=window.wp.primitives},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,o){"use strict";o.d(t,"o",(function(){return n})),o.d(t,"m",(function(){return l})),o.d(t,"l",(function(){return i})),o.d(t,"n",(function(){return u})),o.d(t,"j",(function(){return a})),o.d(t,"e",(function(){return s})),o.d(t,"f",(function(){return p})),o.d(t,"g",(function(){return d})),o.d(t,"k",(function(){return b})),o.d(t,"c",(function(){return m})),o.d(t,"d",(function(){return f})),o.d(t,"h",(function(){return g})),o.d(t,"a",(function(){return w})),o.d(t,"i",(function(){return h})),o.d(t,"b",(function(){return O}));var c,r=o(2);const n=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=n.pluginUrl+"images/",i=n.pluginUrl+"build/",u=n.buildPhase,a=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,s=r.STORE_PAGES.checkout.id,p=r.STORE_PAGES.checkout.permalink,d=r.STORE_PAGES.privacy.permalink,b=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),m=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),f=r.STORE_PAGES.cart.permalink,g=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),w=Object(r.getSetting)("allowedCountries",{}),h=Object(r.getSetting)("shippingStates",{}),O=Object(r.getSetting)("allowedStates",{})},3:function(e,t){e.exports=window.wp.components},468:function(e,t,o){e.exports=o(503)},469:function(e,t){},470:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},503:function(e,t,o){"use strict";o.r(t);var c=o(0),r=o(9),n=o(55),l=o(20),i=o(5),u=o(3),a=o(1),s=o(538),p=o(79),d=o(7);o(469),o(470);const b="woocommerce/legacy-template",m={"single-product":{title:Object(a.__)("WooCommerce Single Product Block","woo-gutenberg-products-block"),placeholder:"single-product"},"archive-product":{title:Object(a.__)("WooCommerce Product Grid Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_cat":{title:Object(a.__)("WooCommerce Product Taxonomy Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_tag":{title:Object(a.__)("WooCommerce Product Tag Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_attribute":{title:Object(a.__)("WooCommerce Product Attribute Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"product-search-results":{title:Object(a.__)("WooCommerce Product Search Results Block","woo-gutenberg-products-block"),placeholder:"archive-product"}};function f(e,t){const o=Object.keys(t);let c=null;for(let r=0;o.length>r;r++){const n=t[e.substr(0,o[r].length)];if(n){c=n;break}}return c}function g(e,t){return!!f(e,t)}const w=e=>{var t,o;let{clientId:p,attributes:b,setAttributes:g}=e;const{replaceBlock:w}=Object(d.useDispatch)("core/block-editor"),h=Object(i.useBlockProps)(),O=f(b.template,m),k=null!==(t=null==O?void 0:O.title)&&void 0!==t?t:b.template,_=null!==(o=null==O?void 0:O.placeholder)&&void 0!==o?o:"fallback";return Object(c.useEffect)(()=>{var e;return g({template:b.template,align:null!==(e=b.align)&&void 0!==e?e:"wide"})},[b.align,b.template,g]),Object(c.createElement)("div",h,Object(c.createElement)(u.Placeholder,{icon:s.a,label:k,className:"wp-block-woocommerce-classic-template__placeholder"},Object(c.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},Object(c.createElement)("p",{className:"wp-block-woocommerce-classic-template__placeholder-warning"},Object(c.createElement)("strong",null,Object(a.__)("Do not remove this block!","woo-gutenberg-products-block"))," ",Object(a.__)("Removing this will cause unintended effects on your store.","woo-gutenberg-products-block")),Object(c.createElement)("p",null,Object(a.sprintf)(
/* translators: %s is the template title */
Object(a.__)("This is a placeholder for the %s. In your store it will display the actual product image, title, price, etc. You can move this placeholder around and add more blocks around it to customize the template.","woo-gutenberg-products-block"),k))),Object(c.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},Object(n.a)()&&Object(c.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},Object(c.createElement)(u.Button,{isPrimary:!0,onClick:()=>{w(p,Object(r.createBlock)("core/paragraph",{content:"Instead of this block, the new Product Grid Block will be rendered"}))},text:Object(a.__)("Use the blockified Product Grid Block","woo-gutenberg-products-block")})),Object(c.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${l.m}template-placeholders/${_}.svg`,alt:k}))))},h=e=>{let{template:t,inserter:o}=e;Object(r.registerBlockType)(b,{title:t&&m[t]?m[t].title:Object(a.__)("WooCommerce Classic Template","woo-gutenberg-products-block"),icon:Object(c.createElement)(p.a,{icon:s.a,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Renders classic WooCommerce PHP templates.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:o},example:{attributes:{isPreview:!0}},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:e=>{let{attributes:o,clientId:r,setAttributes:n}=e;const l=null!=t?t:o.template;return Object(c.createElement)(w,{attributes:{...o,template:l},setAttributes:n,clientId:r})},save:()=>null})};let O;Object(n.a)()?Object(d.subscribe)(()=>{var e;const t=O,o=Object(d.select)("core/edit-site");if(O=null==o?void 0:o.getEditedPostId(),t===O)return;const c=null===(e=O)||void 0===e?void 0:e.split("//")[1];if(null==c)return;const n=Object(r.getBlockType)(b);if(void 0!==n&&(!g(c,m)||function(e,t){const o=f(t,m);return(null==e?void 0:e.title)!==(null==o?void 0:o.title)}(n,c)))return Object(r.unregisterBlockType)(b),void(O=void 0);void 0===n&&g(c,m)&&h({template:c,inserter:!0})}):h({inserter:!1})},55:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return l})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return u}));var c=o(9),r=o(20);const n=(e,t)=>{if(r.n>2)return Object(c.registerBlockType)(e,t)},l=(e,t)=>{if(r.n>1)return Object(c.registerBlockType)(e,t)},i=()=>r.n>2,u=()=>r.n>1},7:function(e,t){e.exports=window.wp.data},9:function(e,t){e.exports=window.wp.blocks}});