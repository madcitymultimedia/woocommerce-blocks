(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[52],{117:function(e,t,n){"use strict";var c=n(12),a=n.n(c),s=n(0),o=n(148),i=n(4),l=n.n(i);n(214);const r=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:i,displayType:p="text",...d}=e;const b="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(b))return null;const u=b/10**c.minorUnit;if(!Number.isFinite(u))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),g={...d,...r(c),value:void 0,currency:void 0,onValueChange:void 0},O=i?e=>{const t=+e.value*10**c.minorUnit;i(t)}:()=>{};return Object(s.createElement)(o.a,a()({className:m,displayType:p},g,{value:u,onValueChange:O}))}},146:function(e,t,n){"use strict";var c=n(0);n(215),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},147:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(4),o=n.n(s),i=(n(218),n(146));t.a=e=>{let{children:t,className:n,screenReaderLabel:s,showSpinner:l=!1,isLoading:r=!0}=e;return Object(c.createElement)("div",{className:o()(n,{"wc-block-components-loading-mask":r})},r&&l&&Object(c.createElement)(i.a,null),Object(c.createElement)("div",{className:o()({"wc-block-components-loading-mask__children":r}),"aria-hidden":r},t),r&&Object(c.createElement)("span",{className:"screen-reader-text"},s||Object(a.__)("Loading…","woo-gutenberg-products-block")))}},19:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:o,wrapperProps:i={}}=e;const l=null!=n,r=null!=a;return!l&&r?(t=o||"span",i={...i,className:s()(i.className,"screen-reader-text")},Object(c.createElement)(t,i,a)):(t=o||c.Fragment,l&&r&&n!==a?Object(c.createElement)(t,i,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,i,n))}},214:function(e,t){},215:function(e,t){},218:function(e,t){},297:function(e,t,n){"use strict";var c=n(12),a=n.n(c),s=n(0),o=n(4),i=n.n(o);n(298),t.a=e=>{let{children:t,className:n,headingLevel:c,...o}=e;const l=i()("wc-block-components-title",n),r="h"+c;return Object(s.createElement)(r,a()({className:l},o),t)}},298:function(e,t){},299:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(300);t.a=e=>{let{checked:t,name:n,onChange:a,option:i}=e;const{value:l,label:r,description:p,secondaryLabel:d,secondaryDescription:b}=i;return Object(c.createElement)("label",{className:s()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${l}`},Object(c.createElement)("input",{id:`${n}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:l,onChange:e=>a(e.target.value),checked:t,"aria-describedby":s()({[`${n}-${l}__label`]:r,[`${n}-${l}__secondary-label`]:d,[`${n}-${l}__description`]:p,[`${n}-${l}__secondary-description`]:b})}),Object(c.createElement)(o.a,{id:`${n}-${l}`,label:r,secondaryLabel:d,description:p,secondaryDescription:b}))}},300:function(e,t,n){"use strict";var c=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:a,secondaryDescription:s,id:o}=e;return Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(c.createElement)("span",{id:o&&o+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(c.createElement)("span",{id:o&&o+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},a&&Object(c.createElement)("span",{id:o&&o+"__description",className:"wc-block-components-radio-control__description"},a),s&&Object(c.createElement)("span",{id:o&&o+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},s)))}},303:function(e,t){},304:function(e,t,n){"use strict";var c=n(1);t.a=e=>{let{defaultTitle:t=Object(c.__)("Step","woo-gutenberg-products-block"),defaultDescription:n=Object(c.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:a=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:a}}}},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),a=n(0),s=n(6),o=n(3),i=n(75),l=n(119);const r=()=>{const{needsShipping:e}=Object(l.a)(),{useShippingAsBilling:t}=Object(s.useSelect)(e=>e(o.CHECKOUT_STORE_KEY).getCheckoutState()),{__internalSetUseShippingAsBilling:n}=Object(s.useDispatch)(o.CHECKOUT_STORE_KEY),{billingAddress:r,setBillingAddress:p,shippingAddress:d,setShippingAddress:b}=Object(i.a)(),u=Object(a.useCallback)(e=>{p({email:e})},[p]),m=Object(a.useCallback)(e=>{p({phone:e})},[p]),g=Object(a.useCallback)(e=>{b({phone:e})},[b]),O=Object(c.getSetting)("forcedBillingAddress",!1);return{shippingAddress:d,billingAddress:r,setShippingAddress:b,setBillingAddress:p,setEmail:u,setBillingPhone:m,setShippingPhone:g,defaultAddressFields:c.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:n,showShippingFields:!O&&e,showBillingFields:!e||!t,forcedBillingAddress:O}}},322:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(11),i=n(299);n(323);const l=e=>{let{className:t="",id:n,selected:a,onChange:r,options:p=[]}=e;const d=Object(o.useInstanceId)(l),b=n||d;return p.length?Object(c.createElement)("div",{className:s()("wc-block-components-radio-control",t)},p.map(e=>Object(c.createElement)(i.a,{key:`${b}-${e.value}`,name:"radio-control-"+b,checked:e.value===a,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},323:function(e,t){},330:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(297);n(303);const i=e=>{let{title:t,stepHeadingContent:n}=e;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:a,legend:o,description:l,children:r,disabled:p=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const u=o||a?"fieldset":"div";return Object(c.createElement)(u,{className:s()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":p}),id:t,disabled:p},!(!o&&!a)&&Object(c.createElement)("legend",{className:"screen-reader-text"},o||a),!!a&&Object(c.createElement)(i,{title:a,stepHeadingContent:b()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},r)))}},359:function(e,t){},372:function(e,t,n){"use strict";var c=n(9),a=n(0),s=n(4),o=n.n(s),i=n(11),l=n(41);t.a=function({icon:e,children:t,label:n,instructions:s,className:r,notices:p,preview:d,isColumnLayout:b,...u}){const[m,{width:g}]=Object(i.useResizeObserver)();let O;"number"==typeof g&&(O={"is-large":g>=480,"is-medium":g>=160&&g<480,"is-small":g<160});const h=o()("components-placeholder",r,O),j=o()("components-placeholder__fieldset",{"is-column-layout":b});return Object(a.createElement)("div",Object(c.a)({},u,{className:h}),m,p,d&&Object(a.createElement)("div",{className:"components-placeholder__preview"},d),Object(a.createElement)("div",{className:"components-placeholder__label"},Object(a.createElement)(l.a,{icon:e}),n),!!s&&Object(a.createElement)("div",{className:"components-placeholder__instructions"},s),Object(a.createElement)("div",{className:j},t))}},385:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(24),o=n(147),i=n(10),l=n(419),r=n(38),p=n(36),d=n(4),b=n.n(d),u=n(23),m=n(19),g=n(93),O=n(109),h=n(322),j=n(300),_=n(40),k=n(117),E=n(2);const w=e=>{const t=Object(E.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(u.decodeEntities)(e.name),value:e.rate_id,description:Object(c.createElement)(c.Fragment,null,Number.isFinite(t)&&Object(c.createElement)(k.a,{currency:Object(_.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(u.decodeEntities)(e.delivery_time))}};var f=e=>{let{className:t="",noResultsMessage:n,onSelectRate:a,rates:s,renderOption:o=w,selectedRate:i}=e;const l=(null==i?void 0:i.rate_id)||"",[r,p]=Object(c.useState)(l);if(Object(c.useEffect)(()=>{l&&p(l)},[l]),0===s.length)return n;if(s.length>1)return Object(c.createElement)(h.a,{className:t,onChange:e=>{p(e),a(e)},selected:r,options:s.map(o)});const{label:d,secondaryLabel:b,description:u,secondaryDescription:m}=o(s[0]);return Object(c.createElement)(j.a,{label:d,secondaryLabel:b,description:u,secondaryDescription:m})};n(359);var v=e=>{let{packageId:t,className:n="",noResultsMessage:s,renderOption:o,packageData:l,collapsible:r=!1,collapse:p=!1,showItems:d=!1}=e;const{selectShippingRate:h}=Object(g.a)(),j=Object(c.createElement)(c.Fragment,null,(d||r)&&Object(c.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:Object(O.a)(l.name)}}),d&&Object(c.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(l.items).map(e=>{const t=Object(u.decodeEntities)(e.name),n=e.quantity;return Object(c.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(c.createElement)(m.a,{label:n>1?`${t} × ${n}`:""+t,screenReaderLabel:Object(a.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(a._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woo-gutenberg-products-block"),t,n)}))}))),_=Object(c.createElement)(f,{className:n,noResultsMessage:s,rates:l.shipping_rates,onSelectRate:e=>h(e,t),selectedRate:l.shipping_rates.find(e=>e.selected),renderOption:o});return r?Object(c.createElement)(i.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!p,title:j},_):Object(c.createElement)("div",{className:b()("wc-block-components-shipping-rates-control__package",n)},j,_)};const N=e=>{let{packages:t,collapse:n,showItems:a,collapsible:s,noResultsMessage:o,renderOption:i}=e;return t.length?Object(c.createElement)(c.Fragment,null,t.map(e=>{let{package_id:l,...r}=e;return Object(c.createElement)(v,{key:l,packageId:l,packageData:r,collapsible:!!s,collapse:!!n,showItems:a||t.length>1,noResultsMessage:o,renderOption:i})})):null};t.a=e=>{let{shippingRates:t,isLoadingRates:n,className:d,collapsible:b=!1,noResultsMessage:u,renderOption:m,context:g}=e;Object(c.useEffect)(()=>{if(n)return;const e=Object(l.a)(t),c=Object(l.b)(t);1===e?Object(s.speak)(Object(a.sprintf)(
/* translators: %d number of shipping options found. */
Object(a._n)("%d shipping option was found.","%d shipping options were found.",c,"woo-gutenberg-products-block"),c)):Object(s.speak)(Object(a.sprintf)(
/* translators: %d number of shipping packages packages. */
Object(a._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woo-gutenberg-products-block"),e)+" "+Object(a.sprintf)(
/* translators: %d number of shipping options available. */
Object(a._n)("%d shipping option was found","%d shipping options were found",c,"woo-gutenberg-products-block"),c))},[n,t]);const{extensions:O,receiveCart:h,...j}=Object(r.a)(),_={className:d,collapsible:b,noResultsMessage:u,renderOption:m,extensions:O,cart:j,components:{ShippingRatesControlPackage:v},context:g,shippingRates:t},{isEditor:k}=Object(p.a)();return Object(c.createElement)(o.a,{isLoading:n,screenReaderLabel:Object(a.__)("Loading shipping rates…","woo-gutenberg-products-block"),showSpinner:!0},k?Object(c.createElement)(N,{packages:t,noResultsMessage:u,renderOption:m}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.ExperimentalOrderShippingPackages.Slot,_),Object(c.createElement)(i.ExperimentalOrderShippingPackages,null,Object(c.createElement)(N,{showItems:t.length>1,packages:t,noResultsMessage:u,renderOption:m}))))}},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>e.length,a=e=>e.reduce((function(e,t){return e+t.shipping_rates.length}),0)},421:function(e,t){},422:function(e,t){},472:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),s=n.n(a),o=n(134),i=n(330),l=n(316),r=n(6),p=n(3),d=n(1),b=n(119),u=n(385),m=n(419),g=n(40),O=n(117),h=n(36),j=n(23),_=n(98),k=n(2),E=n(372),w=n(44),f=n(114),v=n(15),N=Object(c.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(v.Path,{d:"M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"}));n(422);var y=()=>Object(c.createElement)(E.a,{icon:Object(c.createElement)(f.a,{icon:N}),label:Object(d.__)("Shipping options","woo-gutenberg-products-block"),className:"wc-block-checkout__no-shipping-placeholder"},Object(c.createElement)("span",{className:"wc-block-checkout__no-shipping-placeholder-description"},Object(d.__)("Your store does not have any Shipping Options configured. Once you have added your Shipping Options they will appear here.","woo-gutenberg-products-block")),Object(c.createElement)(w.a,{isSecondary:!0,href:k.ADMIN_URL+"admin.php?page=wc-settings&tab=shipping",target:"_blank",rel:"noopener noreferrer"},Object(d.__)("Configure Shipping Options","woo-gutenberg-products-block")));n(421);const S=e=>{const t=Object(k.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(j.decodeEntities)(e.name),value:e.rate_id,description:Object(j.decodeEntities)(e.description),secondaryLabel:Object(c.createElement)(O.a,{currency:Object(g.getCurrencyFromPriceResponse)(e),value:t}),secondaryDescription:Object(j.decodeEntities)(e.delivery_time)}};var C=()=>{const{isEditor:e}=Object(h.a)(),{shippingRates:t,needsShipping:n,isLoadingRates:a,hasCalculatedShipping:o}=Object(b.a)();if(!n)return null;const i=Object(m.a)(t);return e||o||i?Object(c.createElement)(c.Fragment,null,e&&!i?Object(c.createElement)(y,null):Object(c.createElement)(u.a,{noResultsMessage:Object(c.createElement)(_.a,{isDismissible:!1,className:s()("wc-block-components-shipping-rates-control__no-results-notice","woocommerce-error")},Object(d.__)("There are no shipping options available. Please check your shipping address.","woo-gutenberg-products-block")),renderOption:S,shippingRates:t,isLoadingRates:a,context:"woocommerce/checkout"})):Object(c.createElement)("p",null,Object(d.__)("Shipping options will be displayed here after entering your full shipping address.","woo-gutenberg-products-block"))},R=n(304),x={...Object(R.a)({defaultTitle:Object(d.__)("Shipping options","woo-gutenberg-products-block"),defaultDescription:""}),allowCreateAccount:{type:"boolean",default:!1},className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(o.withFilteredAttributes)(x)(e=>{let{title:t,description:n,showStepNumber:a,children:o,className:d}=e;const b=Object(r.useSelect)(e=>e(p.CHECKOUT_STORE_KEY).isProcessing()),{showShippingFields:u,forcedBillingAddress:m}=Object(l.a)();return u||m?Object(c.createElement)(i.a,{id:"shipping-option",disabled:b,className:s()("wc-block-checkout__shipping-option",d),title:t,description:n,showStepNumber:a},Object(c.createElement)(C,null),o):null})}}]);