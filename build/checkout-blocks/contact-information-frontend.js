(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[38],{22:function(e,t,c){"use strict";var n=c(0),a=c(5),r=c.n(a);t.a=e=>{let t,{label:c,screenReaderLabel:a,wrapperElement:l,wrapperProps:o={}}=e;const s=null!=c,i=null!=a;return!s&&i?(t=l||"span",o={...o,className:r()(o.className,"screen-reader-text")},Object(n.createElement)(t,o,a)):(t=l||n.Fragment,s&&i&&c!==a?Object(n.createElement)(t,o,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},a)):Object(n.createElement)(t,o,c))}},290:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),a=c(4),r=c(3);c(291);const l=e=>{let{errorMessage:t="",propertyName:c="",elementId:l=""}=e;const{validationError:o,validationErrorId:s}=Object(a.useSelect)(e=>{const t=e(r.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(c),validationErrorId:t.getValidationErrorId(l)}});if(!t||"string"!=typeof t){if(null==o||!o.message||null!=o&&o.hidden)return null;t=o.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:s},t))};t.b=l},291:function(e,t){},293:function(e,t){},296:function(e,t,c){"use strict";var n=c(11),a=c.n(n),r=c(0),l=c(5),o=c.n(l);c(297),t.a=e=>{let{children:t,className:c,headingLevel:n,...l}=e;const s=o()("wc-block-components-title",c),i="h"+n;return Object(r.createElement)(i,a()({className:s},l),t)}},297:function(e,t){},301:function(e,t){},302:function(e,t,c){"use strict";var n=c(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step","woo-gutenberg-products-block"),defaultDescription:c=Object(n.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:a=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:a}}}},314:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(2),a=c(0),r=c(4),l=c(3),o=c(72),s=c(118);const i=()=>{const{needsShipping:e}=Object(s.a)(),{useShippingAsBilling:t}=Object(r.useSelect)(e=>e(l.CHECKOUT_STORE_KEY).getCheckoutState()),{__internalSetUseShippingAsBilling:c}=Object(r.useDispatch)(l.CHECKOUT_STORE_KEY),{billingAddress:i,setBillingAddress:d,shippingAddress:u,setShippingAddress:b}=Object(o.a)(),p=Object(a.useCallback)(e=>{d({email:e})},[d]),m=Object(a.useCallback)(e=>{d({phone:e})},[d]),g=Object(a.useCallback)(e=>{b({phone:e})},[b]),O=Object(n.getSetting)("forcedBillingAddress",!1);return{shippingAddress:u,billingAddress:i,setShippingAddress:b,setBillingAddress:d,setEmail:p,setBillingPhone:m,setShippingPhone:g,defaultAddressFields:n.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:c,showShippingFields:!O&&e,showBillingFields:!e||!t,forcedBillingAddress:O}}},328:function(e,t,c){"use strict";var n=c(0),a=c(5),r=c.n(a),l=c(296);c(301);const o=e=>{let{title:t,stepHeadingContent:c}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(l.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:a,legend:l,description:s,children:i,disabled:d=!1,showStepNumber:u=!0,stepHeadingContent:b=(()=>{})}=e;const p=l||a?"fieldset":"div";return Object(n.createElement)(p,{className:r()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":u,"wc-block-components-checkout-step--disabled":d}),id:t,disabled:d},!(!l&&!a)&&Object(n.createElement)("legend",{className:"screen-reader-text"},l||a),!!a&&Object(n.createElement)(o,{title:a,stepHeadingContent:b()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!s&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},s),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},331:function(e,t,c){"use strict";var n=c(11),a=c.n(n),r=c(0),l=c(1),o=c(7),s=c(5),i=c.n(s),d=c(10),u=c(28),b=c(4),p=c(3),m=c(22);c(293);var g=Object(o.forwardRef)((e,t)=>{let{className:c,id:n,type:l="text",ariaLabel:o,ariaDescribedBy:s,label:d,screenReaderLabel:u,disabled:b,help:p,autoCapitalize:g="off",autoComplete:O="off",value:h="",onChange:E,required:j=!1,onBlur:_=(()=>{}),feedback:f,...v}=e;const[k,w]=Object(r.useState)(!1);return Object(r.createElement)("div",{className:i()("wc-block-components-text-input",c,{"is-active":k||h})},Object(r.createElement)("input",a()({type:l,id:n,value:h,ref:t,autoCapitalize:g,autoComplete:O,onChange:e=>{E(e.target.value)},onFocus:()=>w(!0),onBlur:e=>{_(e.target.value),w(!1)},"aria-label":o||d,disabled:b,"aria-describedby":p&&!s?n+"__help":s,required:j},v)),Object(r.createElement)(m.a,{label:d,screenReaderLabel:u||d,wrapperElement:"label",wrapperProps:{htmlFor:n},htmlFor:n}),!!p&&Object(r.createElement)("p",{id:n+"__help",className:"wc-block-components-text-input__help"},p),f)}),O=c(290);t.a=Object(d.withInstanceId)(e=>{let{className:t,instanceId:c,id:n,ariaDescribedBy:s,errorId:d,focusOnMount:m=!1,onChange:h,showError:E=!0,errorMessage:j="",value:_="",...f}=e;const[v,k]=Object(o.useState)(!0),w=Object(o.useRef)(null),{setValidationErrors:C,hideValidationError:S,clearValidationError:N}=Object(b.dispatch)(p.VALIDATION_STORE_KEY),A=void 0!==n?n:"textinput-"+c,I=void 0!==d?d:A,{validationError:T,validationErrorId:y}=Object(b.useSelect)(e=>{const t=e(p.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(I),validationErrorId:t.getValidationErrorId(I)}}),B=Object(o.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=w.current||null;if(!t)return;t.value=t.value.trim();const c=t.checkValidity();if(c)N(I);else{const c={[I]:{message:t.validationMessage||Object(l.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}};C(c)}}),[N,I,C]);Object(o.useEffect)(()=>{var e;v&&m&&(null===(e=w.current)||void 0===e||e.focus()),k(!1)},[m,v,k]),Object(o.useEffect)(()=>{var e,t;(null===(e=w.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==w.current&&B(!0)},[_,B]),Object(o.useEffect)(()=>()=>{N(I)},[N,I]),Object(u.a)(j)&&""!==j&&(T.message=j);const R=(null==T?void 0:T.message)&&!(null!=T&&T.hidden),K=E&&R&&y?y:s;return Object(r.createElement)(g,a()({className:i()(t,{"has-error":R}),"aria-invalid":!0===R,id:A,onBlur:()=>{B(!1)},feedback:E&&Object(r.createElement)(O.a,{errorMessage:j,propertyName:I}),ref:w,onChange:e=>{S(I),h(e)},ariaDescribedBy:K,value:_},f))})},471:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(5),r=c.n(a),l=c(132),o=c(328),s=c(4),i=c(3),d=c(1),u=c(331),b=c(314),p=c(66),m=c(2),g=c(9),O=e=>{let{allowCreateAccount:t}=e;const{customerId:c,shouldCreateAccount:a}=Object(s.useSelect)(e=>e(i.CHECKOUT_STORE_KEY).getCheckoutState()),{__internalSetShouldCreateAccount:r}=Object(s.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:l,setEmail:o}=Object(b.a)(),{dispatchCheckoutEvent:O}=Object(p.a)(),h=!c&&t&&Object(m.getSetting)("checkoutAllowsGuest",!1)&&Object(m.getSetting)("checkoutAllowsSignup",!1)&&Object(n.createElement)(g.CheckboxControl,{className:"wc-block-checkout__create-account",label:Object(d.__)("Create an account?","woo-gutenberg-products-block"),checked:a,onChange:e=>r(e)});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{id:"email",type:"email",label:Object(d.__)("Email address","woo-gutenberg-products-block"),value:l.email,autoComplete:"email",onChange:e=>{o(e),O("set-email-address")},required:!0}),h)},h=c(302),E={...Object(h.a)({defaultTitle:Object(d.__)("Contact information","woo-gutenberg-products-block"),defaultDescription:Object(d.__)("We'll use this email to send you details and updates about your order.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}};const j=`${c(44).e}?redirect_to=${encodeURIComponent(window.location.href)}`;var _=()=>{const e=Object(s.useSelect)(e=>e(i.CHECKOUT_STORE_KEY).getCustomerId());return!Object(m.getSetting)("checkoutShowLoginReminder",!0)||e?null:Object(n.createElement)(n.Fragment,null,Object(d.__)("Already have an account? ","woo-gutenberg-products-block"),Object(n.createElement)("a",{href:j},Object(d.__)("Log in.","woo-gutenberg-products-block")))},f=c(152);t.default=Object(l.withFilteredAttributes)(E)(e=>{let{title:t,description:c,showStepNumber:a,children:l,className:d}=e;const u=Object(s.useSelect)(e=>e(i.CHECKOUT_STORE_KEY).isProcessing()),{allowCreateAccount:b}=Object(f.b)();return Object(n.createElement)(o.a,{id:"contact-fields",disabled:u,className:r()("wc-block-checkout__contact-fields",d),title:t,description:c,showStepNumber:a,stepHeadingContent:()=>Object(n.createElement)(_,null)},Object(n.createElement)(O,{allowCreateAccount:b}),l)})}}]);