this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var c,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={17:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([461,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)({}),o=()=>{const{wrapper:e}=Object(c.useContext)(r);return t=>{e&&e.current&&(e.current.hidden=!t)}}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(10),r=n(6),o=n(0),i=n(43);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:s=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(o.useRef)({results:[],isLoading:!0}),b=Object(i.a)(l),p=Object(i.a)(a),d=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),m=Object(r.useSelect)(e=>{if(!s)return null;const r=e(c.COLLECTIONS_STORE_KEY),o=[t,n,b,p],i=r.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(i)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,n,p,b,s]);return null!==m&&(u.current=m),u.current}},11:function(e,t){e.exports=window.wp.primitives},12:function(e,t){e.exports=window.wp.compose},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(0),r=n(1),o=n(8),i=n(6),a=n(2),l=n(5);const s=e=>{let{clientId:t,setAttributes:n,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(i.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(i.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(c.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(r.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(c.createElement)(l.Warning,{actions:m},Object(r.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},125:function(e,t,n){"use strict";var c=n(0),r=n(5),o=n(12),i=n(1);n(167),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:l}=e;const s="h"+n;return Object(c.createElement)(s,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+l},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(c.createElement)(r.PlainText,{id:"block-title-"+l,className:"wc-block-editor-components-title",value:a,onChange:o,style:{backgroundColor:"transparent"}}))})},126:function(e,t,n){"use strict";var c=n(0);n(168),t.a=e=>{let{children:t}=e;return Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},128:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),a=n(30);n(176),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(c.createElement)(a.a,{label:n,screenReaderLabel:l}))}},129:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),a=n(30);n(177),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(c.createElement)(a.a,{label:l,screenReaderLabel:u}))}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},144:function(e,t){},167:function(e,t){},168:function(e,t){},17:function(e,t){e.exports=window.wp.url},176:function(e,t){},177:function(e,t){},19:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return O})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return _}));var c,r=n(3);const o=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,b=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),p=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),d=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),m=r.STORE_PAGES.cart.permalink,f=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),g=Object(r.getSetting)("allowedCountries",{}),O=Object(r.getSetting)("shippingStates",{}),j=Object(r.getSetting)("allowedStates",{}),_=Object(r.getSetting)("localPickupEnabled",!1)},2:function(e,t){e.exports=window.wp.components},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}const o=e=>0===Object.keys(e).length},21:function(e,t){e.exports=window.wc.priceFormat},243:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));var c=n(17),r=n(3),o=n(131);const i=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function s(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}const b=e=>{const t=Object(c.getQueryArgs)(e);return Object(c.addQueryArgs)(e,t)}},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.React},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),r=n(264),o=n(9),i=n(43),a=n(20),l=n(56),s=n(109),u=n(48);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:d,productIds:m,isEditor:f=!1}=e,g=Object(u.a)();g+="-collection-data";const[O]=Object(l.a)(g),[j,_]=Object(l.b)("calculate_attribute_counts",[],g),[w,h]=Object(l.b)("calculate_price_range",null,g),[k,y]=Object(l.b)("calculate_stock_status_counts",null,g),[E,v]=Object(l.b)("calculate_rating_counts",null,g),x=Object(i.a)(t||{}),S=Object(i.a)(n),C=Object(i.a)(b),N=Object(i.a)(p);Object(c.useEffect)(()=>{"object"==typeof x&&Object.keys(x).length&&(j.find(e=>Object(a.c)(x,"taxonomy")&&e.taxonomy===x.taxonomy)||_([...j,x]))},[x,j,_]),Object(c.useEffect)(()=>{w!==S&&void 0!==S&&h(S)},[S,h,w]),Object(c.useEffect)(()=>{k!==C&&void 0!==C&&y(C)},[C,y,k]),Object(c.useEffect)(()=>{E!==N&&void 0!==N&&v(N)},[N,v,E]);const[F,T]=Object(c.useState)(f),[R]=Object(r.a)(F,200);F||T(!0);const P=Object(c.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(O),[O]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(m)&&{include:m},...P},shouldSelect:R})}},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,n){"use strict";var c=n(0),r=n(4),o=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:i,wrapperProps:a={}}=e;const l=null!=n,s=null!=r;return!l&&s?(t=i||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(c.createElement)(t,a,r)):(t=i||c.Fragment,l&&s&&n!==r?Object(c.createElement)(t,a,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,a,n))}},313:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},37:function(e,t,n){"use strict";var c=n(7),r=n.n(c),o=n(0),i=n(138),a=n(4),l=n.n(a);n(144);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:a,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**c.minorUnit;if(!Number.isFinite(d))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(c),value:void 0,currency:void 0,onValueChange:void 0},g=a?e=>{const t=+e.value*10**c.minorUnit;a(t)}:()=>{};return Object(o.createElement)(i.a,r()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),r=n(25),o=n.n(r);function i(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},461:function(e,t,n){e.exports=n(496)},462:function(e,t){},463:function(e,t){},464:function(e,t){},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)("page"),o=()=>Object(c.useContext)(r);r.Provider},496:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),o=n(0),i=n(8),a=n(4),l=n.n(a),s=n(89),u=n(543),b=n(5),p=n(1),d=n(3),m=n(19),f=n(125),g=n(321),O=n(2),j=n(97),_=n(56),w=n(278),h=n(37),k=n(20),y=n(135);n(464);const E=function(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const a=e=>Number.isFinite(e);return a(o)||(o=t||0),a(i)||(i=n||c),a(t)&&t>o&&(o=t),a(n)&&n<=o&&(o=n-c),a(t)&&t>=i&&(i=t+c),a(n)&&n<i&&(i=n),!r&&o>=i&&(o=i-c),r&&i<=o&&(i=o+c),[o,i]};var v=n(129);const x=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c<=t/10**n&&c>0}},S=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:c}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r>=t/10**c&&r<n/10**c}};var C=n(128),N=e=>{let{minPrice:t,maxPrice:n,minConstraint:c,maxConstraint:r,onChange:i,step:a,currency:s,showInputFields:u=!0,showFilterButton:b=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:f=!1,isEditor:g=!1,onSubmit:O=(()=>{})}=e;const j=Object(o.useRef)(null),_=Object(o.useRef)(null),w=a||10**s.minorUnit,[N,F]=Object(o.useState)(t),[T,R]=Object(o.useState)(n),P=Object(o.useRef)(null),[U,A]=Object(o.useState)(0);Object(o.useEffect)(()=>{F(t)},[t]),Object(o.useEffect)(()=>{R(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;d&&P.current&&A(null===(e=P.current)||void 0===e?void 0:e.offsetWidth)},[d,A]);const B=Object(o.useMemo)(()=>isFinite(c)&&isFinite(r),[c,r]),I=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&B?{"--low":Math.round((t-c)/(r-c)*100)-.5+"%","--high":Math.round((n-c)/(r-c)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,c,r,B]),L=Object(o.useCallback)(e=>{if(m||!B||!j.current||!_.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,c=j.current.offsetWidth,o=+j.current.value,i=_.current.offsetWidth,a=+_.current.value,l=c*(o/r),s=i*(a/r);Math.abs(n-l)>Math.abs(n-s)?(j.current.style.zIndex="20",_.current.style.zIndex="21"):(j.current.style.zIndex="21",_.current.style.zIndex="20")},[m,r,B]),M=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),a=+e.target.value,l=o?[Math.round(a/w)*w,n]:[t,Math.round(a/w)*w],s=E(l,c,r,w,o);i(s)},[i,t,n,c,r,w]),V=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(N>=T){const e=E([0,T],null,null,w,t);return i([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([N,T],null,null,w,t);i(n)},[i,w,N,T]),q=Object(y.a)(O,600),D=l()("wc-block-price-filter","wc-block-components-price-slider",u&&"wc-block-price-filter--has-input-fields",u&&"wc-block-components-price-slider--has-input-fields",b&&"wc-block-price-filter--has-filter-button",b&&"wc-block-components-price-slider--has-filter-button",!B&&"is-disabled",(d||U<=300)&&"wc-block-components-price-slider--is-input-inline"),G=Object(k.b)(j.current)?j.current.ownerDocument.activeElement:void 0,W=G&&G===j.current?w:1,Q=G&&G===_.current?w:1,Y=String(N/10**s.minorUnit),K=String(T/10**s.minorUnit),z=d&&U>300,J=Object(o.createElement)("div",{className:l()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&f}),onMouseMove:L,onFocus:L},B&&Object(o.createElement)("div",{"aria-hidden":u},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:I}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(p.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":Y,value:Number.isFinite(t)?t:c,onChange:M,step:W,min:c,max:r,ref:j,disabled:m&&!B,tabIndex:u?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(p.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":K,value:Number.isFinite(n)?n:r,onChange:M,step:Q,min:c,max:r,ref:_,disabled:m,tabIndex:u?-1:0})));return Object(o.createElement)("div",{className:D,ref:P},(!z||!u)&&J,u&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(p.__)("Filter products by minimum price","woo-gutenberg-products-block"),allowNegative:!1,isAllowed:S({minConstraint:c,minorUnit:s.minorUnit,currentMaxValue:T}),onValueChange:e=>{e!==N&&F(e)},onBlur:V,disabled:m||!B,value:N}),z&&J,f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(p.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:x({maxConstraint:r,minorUnit:s.minorUnit}),onValueChange:e=>{e!==T&&R(e)},onBlur:V,disabled:m||!B,value:T})),!u&&!f&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(h.a,{currency:s,value:t}),Object(o.createElement)(h.a,{currency:s,value:n})),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},(g||!f&&(t!==c||n!==r))&&Object(o.createElement)(C.a,{onClick:()=>{i([c,r]),q()},screenReaderLabel:Object(p.__)("Reset price filter","woo-gutenberg-products-block")}),b&&Object(o.createElement)(v.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:f,disabled:m||!B,onClick:O,screenReaderLabel:Object(p.__)("Apply price filter","woo-gutenberg-products-block")})))},F=n(126),T=n(21),R=n(17),P=n(243),U=n(131),A=n(65);const B=(e,t,n)=>{const c=10*10**t;let r=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?r=Math.ceil(o/c)*c:"ROUND_DOWN"===n&&(r=Math.floor(o/c)*c));const i=Object(j.a)(r,Number.isFinite);return Number.isFinite(r)?r:i};n(463);var I=n(105);function L(e,t){return Number(e)*10**t}var M=e=>{let{attributes:t,isEditor:n=!1}=e;const c=Object(I.a)(),r=Object(d.getSettingWithCoercion)("has_filterable_products",!1,U.a),i=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),a=n?[]:Object(d.getSettingWithCoercion)("product_ids",[],Array.isArray),[l,s]=Object(o.useState)(!1),u=Object(P.d)("min_price"),b=Object(P.d)("max_price"),[p]=Object(_.a)(),{results:m,isLoading:f}=Object(w.a)({queryPrices:!0,queryState:p,productIds:a,isEditor:n}),g=Object(T.getCurrencyFromPriceResponse)(Object(k.c)(m,"price_range")?m.price_range:void 0),[O,h]=Object(_.b)("min_price"),[E,v]=Object(_.b)("max_price"),[x,S]=Object(o.useState)(L(u,g.minorUnit)||null),[C,M]=Object(o.useState)(L(b,g.minorUnit)||null),{minConstraint:V,maxConstraint:q}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:c}=e;return{minConstraint:B(t||"",c,"ROUND_DOWN"),maxConstraint:B(n||"",c,"ROUND_UP")}})({minPrice:Object(k.c)(m,"price_range")&&Object(k.c)(m.price_range,"min_price")&&Object(A.a)(m.price_range.min_price)?m.price_range.min_price:void 0,maxPrice:Object(k.c)(m,"price_range")&&Object(k.c)(m.price_range,"max_price")&&Object(A.a)(m.price_range.max_price)?m.price_range.max_price:void 0,minorUnit:g.minorUnit});Object(o.useEffect)(()=>{l||(h(L(u,g.minorUnit)),v(L(b,g.minorUnit)),s(!0))},[g.minorUnit,l,b,u,v,h]);const[D,G]=Object(o.useState)(f),W=Object(o.useCallback)((e,t)=>{const n=t>=Number(q)?void 0:t,c=e<=Number(V)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,c]of Object.entries(t))c?n[e]=c.toString():delete n[e];const c=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(c,n)}(window.location.href,{min_price:c/10**g.minorUnit,max_price:n/10**g.minorUnit});window.location.href!==e&&Object(P.c)(e)}h(c),v(n)},[V,q,h,v,g.minorUnit]),Q=Object(y.a)(W,500),Y=Object(o.useCallback)(e=>{G(!0),e[0]!==x&&S(e[0]),e[1]!==C&&M(e[1]),i&&l&&!t.showFilterButton&&Q(e[0],e[1])},[x,C,S,M,i,l,Q,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||i||Q(x,C)},[x,C,t.showFilterButton,Q,i]);const K=Object(j.a)(O),z=Object(j.a)(E),J=Object(j.a)(V),X=Object(j.a)(q);if(Object(o.useEffect)(()=>{(!Number.isFinite(x)||O!==K&&O!==x||V!==J&&V!==x)&&S(Number.isFinite(O)?O:V),(!Number.isFinite(C)||E!==z&&E!==C||q!==X&&q!==C)&&M(Number.isFinite(E)?E:q)},[x,C,O,E,V,q,J,X,K,z]),!r)return c(!1),null;if(!f&&(null===V||null===q||V===q))return c(!1),null;const $="h"+t.headingLevel;c(!0),!f&&D&&G(!1);const H=Object(o.createElement)($,{className:"wc-block-price-filter__title"},t.heading),Z=f&&D?Object(o.createElement)(F.a,null,H):H;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Z,Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:V,maxConstraint:q,minPrice:x,maxPrice:C,currency:g,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Y,onSubmit:()=>W(x,C),isLoading:f,isUpdating:D,isEditor:n})))},V=(n(462),n(124)),q=n(313);const D={heading:{type:"string",default:Object(p.__)("Filter by price","woo-gutenberg-products-block")}};Object(i.registerBlockType)(q,{icon:{src:Object(o.createElement)(s.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},attributes:{...q.attributes,...D},edit:function(e){let{attributes:t,setAttributes:n,clientId:c}=e;const{heading:r,headingLevel:i,showInputFields:a,inlineInput:l,showFilterButton:j}=t,_=Object(b.useBlockProps)();return Object(o.createElement)("div",_,0===m.o.productCount?Object(o.createElement)(O.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{icon:u.a}),label:Object(p.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(p.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(p.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(p.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(s.a,{icon:g.a})),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(p.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.InspectorControls,{key:"inspector"},Object(o.createElement)(O.PanelBody,{title:Object(p.__)("Settings","woo-gutenberg-products-block")},Object(o.createElement)(O.__experimentalToggleGroupControl,{label:Object(p.__)("Price Range Selector","woo-gutenberg-products-block"),value:a?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"editable",label:Object(p.__)("Editable","woo-gutenberg-products-block")}),Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"text",label:Object(p.__)("Text","woo-gutenberg-products-block")})),a&&Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Inline input fields","woo-gutenberg-products-block"),checked:l,onChange:()=>n({inlineInput:!l}),help:Object(p.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:Object(p.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:j,onChange:()=>n({showFilterButton:!j})}))),Object(o.createElement)(V.a,{attributes:t,clientId:c,setAttributes:n,filterType:"price-filter"}),r&&Object(o.createElement)(f.a,{className:"wc-block-price-filter__title",headingLevel:i,heading:r,onChange:e=>n({heading:e})}),Object(o.createElement)(O.Disabled,null,Object(o.createElement)(M,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:c,showFilterButton:i,heading:a,headingLevel:s}=t,u={"data-showinputfields":c,"data-showfilterbutton":i,"data-heading":a,"data-heading-level":s};return Object(o.createElement)("div",r()({},b.useBlockProps.save({className:l()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var c=n(10),r=n(6),o=n(0),i=n(25),a=n.n(i),l=n(43),s=n(97),u=n(48);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(r.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const a=Object(r.useSelect)(r=>r(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(n,e,t)},[n,e,l])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[c,r]=b(t),i=Object(l.a)(c),p=Object(l.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(r(Object.assign({},i,p)),m.current=!0)},[i,p,d,r]),m.current?[c,r]:[e,r]}},6:function(e,t){e.exports=window.wp.data},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.lodash},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);function r(e,t){const n=Object(c.useRef)();return Object(c.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}}});