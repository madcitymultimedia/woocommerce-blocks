(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{474:function(e,t,i){"use strict";i.r(t);var l=i(0),s=i(7),n=i.n(s),d=i(129),o=i(327),r=i(310),c=i(5),a=i(3),b=i(64),u=i(35),h=i(380),p=i(377),m=i(378),g=e=>{let{showCompanyField:t=!1,showApartmentField:i=!1,showPhoneField:s=!1,requireCompanyField:n=!1,requirePhoneField:d=!1}=e;const{defaultAddressFields:o,billingAddress:c,setBillingAddress:a,setShippingAddress:g,setBillingPhone:w}=Object(r.a)(),{dispatchCheckoutEvent:O}=Object(b.a)(),{isEditor:j}=Object(u.a)(),{forcedBillingAddress:F}=Object(r.a)();Object(l.useEffect)(()=>{s||w("")},[s,w]);const f=Object(l.useMemo)(()=>({company:{hidden:!t,required:n},address_2:{hidden:!i}}),[t,n,i]),y=j?p.a:l.Fragment;return Object(l.createElement)(y,null,Object(l.createElement)(h.a,{id:"billing",type:"billing",onChange:e=>{a(e),F&&g(e),O("set-billing-address")},values:c,fields:Object.keys(o),fieldConfig:f}),s&&Object(l.createElement)(m.a,{isRequired:d,value:c.phone,onChange:e=>{w(e),O("set-phone-number",{step:"billing"})}}))},w=i(1),O=i(297),j={...Object(O.a)({defaultTitle:Object(w.__)("Billing address","woo-gutenberg-products-block"),defaultDescription:Object(w.__)("Enter the billing address that matches your payment method.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},F=i(148);t.default=Object(d.withFilteredAttributes)(j)(e=>{let{title:t,description:i,showStepNumber:s,children:d,className:b}=e;const u=Object(c.useSelect)(e=>e(a.CHECKOUT_STORE_KEY).isProcessing()),{requireCompanyField:h,requirePhoneField:p,showApartmentField:m,showCompanyField:w,showPhoneField:O}=Object(F.b)(),{showBillingFields:j,forcedBillingAddress:f}=Object(r.a)();return j||f?Object(l.createElement)(o.a,{id:"billing-fields",disabled:u,className:n()("wc-block-checkout__billing-fields",b),title:t,description:i,showStepNumber:s},Object(l.createElement)(g,{requireCompanyField:h,showApartmentField:m,showCompanyField:w,showPhoneField:O,requirePhoneField:p}),d):null})}}]);