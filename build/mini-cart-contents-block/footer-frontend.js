(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[61],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var c=n(5);let a;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(a||(a={}));const s={addEventCallback:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(c.uniqueId)(),type:a.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:n}},removeEventCallback:(e,t)=>({id:t,type:a.REMOVE_EVENT_CALLBACK,eventType:e})},o={},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:n,id:c,callback:s,priority:r}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(n)?new Map(e[n]):new Map;switch(t){case a.ADD_EVENT_CALLBACK:return i.set(c,{priority:r,callback:s}),{...e,[n]:i};case a.REMOVE_EVENT_CALLBACK:return i.delete(c),{...e,[n]:i}}}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m}));var c=n(0),a=n(7),s=n(3),o=n(106),r=n(223);const i=Object(c.createContext)({onPaymentProcessing:()=>()=>()=>{}}),l=()=>Object(c.useContext)(i),m=e=>{let{children:t}=e;const{isProcessing:n,isIdle:l,isCalculating:m,hasError:d}=Object(a.useSelect)(e=>{const t=e(s.CHECKOUT_STORE_KEY);return{isProcessing:t.isProcessing(),isIdle:t.isIdle(),hasError:t.hasError(),isCalculating:t.isCalculating()}}),{isPaymentSuccess:u,isPaymentFinished:b,isPaymentProcessing:p}=Object(a.useSelect)(e=>{const t=e(s.PAYMENT_STORE_KEY);return{isPaymentSuccess:t.isPaymentSuccess(),isPaymentFinished:t.isPaymentFinished(),isPaymentProcessing:t.isPaymentProcessing()}}),{setValidationErrors:y}=Object(a.useDispatch)(s.VALIDATION_STORE_KEY),[h,v]=Object(c.useReducer)(o.b,{}),{onPaymentProcessing:E}=(e=>Object(c.useMemo)(()=>({onPaymentProcessing:Object(r.a)("payment_processing",e)}),[e]))(v),g=Object(c.useRef)(h);Object(c.useEffect)(()=>{g.current=h},[h]);const{__internalSetPaymentProcessing:O,__internalSetPaymentPristine:f,__internalEmitPaymentProcessingEvent:j}=Object(a.useDispatch)(s.PAYMENT_STORE_KEY);Object(c.useEffect)(()=>{!n||d||m||b||O()},[n,d,m,b,O]),Object(c.useEffect)(()=>{l&&!u&&f()},[l,u,f]),Object(c.useEffect)(()=>{d&&u&&f()},[d,u,f]),Object(c.useEffect)(()=>{p&&j(g.current,y)},[p,y,j]);const _={onPaymentProcessing:E};return Object(c.createElement)(i.Provider,{value:_},t)}},148:function(e,t,n){"use strict";var c=n(0);n(215),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},215:function(e,t){},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(106);const a=(e,t)=>function(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const s=c.a.addEventCallback(e,n,a);return t(s),()=>{t(c.a.removeEventCallback(e,s.id))}}},282:function(e,t,n){"use strict";var c=n(15),a=n.n(c),s=n(0),o=n(54),r=n(6),i=n.n(r),l=n(148);n(283),t.a=e=>{let{className:t,showSpinner:n=!1,children:c,variant:r="contained",...m}=e;const d=i()("wc-block-components-button","wp-element-button",t,r,{"wc-block-components-button--loading":n});return Object(s.createElement)(o.a,a()({className:d},m),n&&Object(s.createElement)(l.a,null),Object(s.createElement)("span",{className:"wc-block-components-button__text"},c))}},283:function(e,t){},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0),a=n(13),s=n.n(a);function o(e){const t=Object(c.useRef)(e);return s()(e,t.current)||(t.current=e),t.current}},304:function(e,t){},309:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var c=n(30),a=n(18),s=n(7),o=n(3);const r=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:r,availableExpressPaymentMethods:i}=Object(s.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(r).map(e=>{let{name:t}=e;return t}),m=Object.values(i).map(e=>{let{name:t}=e;return t}),d=Object(a.getPaymentMethods)(),u=Object(a.getExpressPaymentMethods)(),b=Object.keys(d).reduce((e,t)=>(l.includes(t)&&(e[t]=d[t]),e),{}),p=Object.keys(u).reduce((e,t)=>(m.includes(t)&&(e[t]=u[t]),e),{}),y=Object(c.a)(b),h=Object(c.a)(p);return{paymentMethods:e?h:y,isInitialized:e?n:t}},i=()=>r(!1),l=()=>r(!0)},323:function(e,t,n){"use strict";var c=n(15),a=n.n(c),s=n(0),o=n(6),r=n.n(o);const i=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var l=e=>{let{id:t,src:n=null,alt:c=""}=e;return n?Object(s.createElement)("img",{className:i(t),src:n,alt:c}):null},m=n(37);const d=[{id:"alipay",alt:"Alipay",src:m.m+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:m.m+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:m.m+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:m.m+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:m.m+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:m.m+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:m.m+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:m.m+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:m.m+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:m.m+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:m.m+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:m.m+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:m.m+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:m.m+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:m.m+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:m.m+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:m.m+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:m.m+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:m.m+"payment-methods/wechat.svg"}];var u=n(23);n(304),t.a=e=>{let{icons:t=[],align:n="center",className:c}=e;const o=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(u.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===o.length)return null;const i=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},c);return Object(s.createElement)("div",{className:i},o.map(e=>{const t={...e,...(n=e.id,d.find(e=>e.id===n)||{})};var n;return Object(s.createElement)(l,a()({key:"payment-method-icon-"+e.id},t))}))}},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},530:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(11),o=n(43),r=n(309),i=n(42),l=n(323),m=n(438),d=n(2),u=n(37),b=n(282),p=n(123),y=n(6),h=n.n(y);const v=Object(a.__)("View my cart","woo-gutenberg-products-block"),E=Object(a.__)("Go to checkout","woo-gutenberg-products-block"),g=()=>{const{paymentMethods:e}=Object(r.b)();return Object(c.createElement)(l.a,{icons:Object(m.a)(e)})};t.default=e=>{let{className:t,cartButtonLabel:n,checkoutButtonLabel:r}=e;const{cartTotals:l}=Object(i.a)(),m=Object(d.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(l.total_items,10)+parseInt(l.total_items_tax,10):parseInt(l.total_items,10);return Object(c.createElement)("div",{className:h()(t,"wc-block-mini-cart__footer")},Object(c.createElement)(s.TotalsItem,{className:"wc-block-mini-cart__footer-subtotal",currency:Object(o.getCurrencyFromPriceResponse)(l),label:Object(a.__)("Subtotal","woo-gutenberg-products-block"),value:m,description:Object(a.__)("Shipping, taxes, and discounts calculated at checkout.","woo-gutenberg-products-block")}),Object(c.createElement)("div",{className:"wc-block-mini-cart__footer-actions"},u.c&&Object(c.createElement)(b.a,{className:"wc-block-mini-cart__footer-cart",href:u.c,variant:"outlined"},n||v),u.d&&Object(c.createElement)(b.a,{className:"wc-block-mini-cart__footer-checkout",href:u.d},r||E)),Object(c.createElement)(p.a,null,Object(c.createElement)(g,null)))}}}]);