this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks.breadcrumbs=function(e){function t(t){for(var o,i,s=t[0],a=t[1],l=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,s=1;s<r.length;s++){var a=r[s];0!==n[a]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={9:0},c=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;return c.push([384,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){e.exports=window.wp.primitives},290:function(e){e.exports=JSON.parse('{"name":"woocommerce/breadcrumbs","version":"1.0.0","title":"Store Breadcrumbs","description":"Enable customers to keep track of their location within the store and navigate back to parent pages.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woo-gutenberg-products-block","attributes":{"contentJustification":{"type":"string"},"fontSize":{"type":"string","default":"small"},"align":{"type":"string","default":"wide"}},"supports":{"align":["wide","full"],"color":{"background":false,"link":true,"__experimentalDefaultControls":{"text":true,"link":true}},"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}}},"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(e,t){e.exports=window.wp.components},384:function(e,t,r){e.exports=r(511)},5:function(e,t){e.exports=window.wp.blockEditor},511:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(9),c=r(79),i=r(551),s=r(290),a=r(5),l=r(3),u=r(1);Object(n.registerBlockType)(s,{icon:{src:Object(o.createElement)(c.a,{icon:i.a,className:"wc-block-editor-components-block-icon"})},attributes:{...s.attributes},edit:()=>{const e=Object(a.useBlockProps)({className:"woocommerce wc-block-breadcrumbs"});return Object(o.createElement)("div",e,Object(o.createElement)(l.Disabled,null,Object(o.createElement)("a",{href:"/"},Object(u.__)("Breadcrumbs","woo-gutenberg-products-block")),Object(u.__)(" / Navigation / Path","woo-gutenberg-products-block")))},save:()=>null})},9:function(e,t){e.exports=window.wp.blocks}});