(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[17],{286:function(e,t){},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n(45),s=n(17),c=n(5),o=n(3);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:i,availableExpressPaymentMethods:r}=Object(c.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(i).map(e=>{let{name:t}=e;return t}),d=Object.values(r).map(e=>{let{name:t}=e;return t}),m=Object(s.getPaymentMethods)(),p=Object(s.getExpressPaymentMethods)(),u=Object.keys(m).reduce((e,t)=>(l.includes(t)&&(e[t]=m[t]),e),{}),y=Object.keys(p).reduce((e,t)=>(d.includes(t)&&(e[t]=p[t]),e),{}),h=Object(a.a)(u),b=Object(a.a)(y);return{paymentMethods:e?b:h,isInitialized:e?n:t}},r=()=>i(!1),l=()=>i(!0)},307:function(e,t,n){"use strict";var a=n(9),s=n.n(a),c=n(0),o=n(6),i=n.n(o);const r=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var l=e=>{let{id:t,src:n=null,alt:a=""}=e;return n?Object(c.createElement)("img",{className:r(t),src:n,alt:a}):null},d=n(20);const m=[{id:"alipay",alt:"Alipay",src:d.n+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.n+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.n+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.n+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.n+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.n+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.n+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.n+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.n+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.n+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.n+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.n+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.n+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.n+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.n+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.n+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.n+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.n+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.n+"payment-methods/wechat.svg"}];var p=n(36);n(286),t.a=e=>{let{icons:t=[],align:n="center",className:a}=e;const o=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(p.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===o.length)return null;const r=i()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},a);return Object(c.createElement)("div",{className:r},o.map(e=>{const t={...e,...(n=e.id,m.find(e=>e.id===n)||{})};var n;return Object(c.createElement)(l,s()({key:"payment-method-icon-"+e.id},t))}))}},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),s=n(18),c=n.n(s);function o(e){const t=Object(a.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},507:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(307),c=n(292),o=n(423);t.default=e=>{let{className:t}=e;const{paymentMethods:n}=Object(c.b)();return Object(a.createElement)(s.a,{className:t,icons:Object(o.a)(n)})}}}]);