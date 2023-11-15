"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7983],{14694:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(480),s=n(86628),a=n(24405),i=n(39567),o=n(50659),l=n(85893);function d(){window.__c={n:"AliasIcon"};const e=(0,a.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,l.jsx)("div",{children:(0,i.Y)(e.icon)})}function c(e){var t;window.__c={n:"SidebarItem"};const n=(0,r.O7)(),i=n.device.isMobile,c=(0,s.VK)((()=>{var t,r;if(i)return n.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(r=e.style)||void 0===r?void 0:r.paddingLeft:10)}),[n.WindowSizeStore,i,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,a.yK)((t=>({wrapper:{...i?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,o.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:i?28:22,height:i?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:i?26:22,height:i?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!i?"clip":"ellipsis",...e.childrenStyle}})),[i,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,l.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:u.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,l.jsx)("div",{style:u.left,children:e.left}),e.icon&&(0,l.jsxs)("div",{style:u.icon,children:[e.icon,e.isAlias&&(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{style:u.children,children:e.children}),e.right&&(0,l.jsx)("div",{style:u.right,children:e.right})]})}},60652:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var r=n(86664),s=n(67294),a=n(480),i=n(86628),o=n(3791),l=n(31412),d=n(43250),c=n(38755),u=n(16100),p=n(80444),m=n(88632),y=n(27242),g=n(78291),f=n(68626),h=n(90850),x=n(50906),b=n(47307),v=n(92625),M=n(92083),j=n(88893),S=n(33493),C=n(22616),w=n(34583),I=n(85893);const _=(0,l.defineMessages)({cancelFailedSubscription:{id:"subscription.upgrade.cancel_failed_subscription",defaultMessage:"Cancelling subscription..."},finishingUp:{id:"subscription.upgrade.finishing",defaultMessage:"Finishing up..."}});async function T(e){const{environment:t,state:n,data:r,stripe:s,elements:a,intl:i,useTestClock:o}=e;if(!a||!s)return void f.log({level:"error",from:"SpaceSubscriptionUpgradeModal",type:"StripeError",error:{miscDataString:"Stripe elements not initialized when user tried to upgrade"}});let d=n.paymentData;if(!d){const{error:e}=await a.submit();if(e)return x.VQs(t,{error:"could not submit form",error_type:"payment_method",modal_id:n.sessionId}),void y.Z.setState({...n,error:i.formatMessage({id:"spaceSubscriptionUpgradeModal.payment.genericError",defaultMessage:"Your payment could not be processed. Please try again."})});const r=await s.createPaymentMethod({elements:a});if(r.error)return x.VQs(t,{error:r.error.message,error_type:"payment_method",modal_id:n.sessionId}),void y.Z.setState({...n,error:u.translateStripeError(t,i,r.error)});if(!r.paymentMethod)return x.VQs(t,{error:"could not create token",error_type:"payment_method",modal_id:n.sessionId}),void y.Z.setState({...n,error:i.formatMessage({id:"spaceSubscriptionUpgradeModal.payment.genericError",defaultMessage:"Your payment could not be processed. Please try again."})});d={type:"paymentMethodId",value:r.paymentMethod.id},y.Z.setState({...n,paymentData:d})}await async function(e){var t,n;const{environment:r,data:s,paymentData:a,stripe:i,useTestClock:o}=e,d=p.default.state.currentSpaceStore,c=y.Z.state;d&&C.Z({environment:r,spaceId:d.id});const{status:m,prices:g,selectedCurrencyCode:f}=S.Z.state;if(!c.open||!d||"ready"!==m)return;const T=c.sessionId,O=j.GD(c.temporaryBillingInterval),F=j.Md(c,s),Z=null===(t=g.find((e=>e.product===c.subscriptionTier&&e.billingInterval===O&&e.currencyCode===f)))||void 0===t?void 0:t.externalId,B=null===(n=g.find((e=>e.product===c.addOnFeature&&e.billingInterval===O&&e.currencyCode===f)))||void 0===n?void 0:n.externalId,A=c.appliedPromo,k=c.temporaryAddress;try{const e=await w.Mg({environment:r,spaceStore:d,plan:Z,paymentData:a,billingEmail:F,coupon:A&&"coupon"===A.source?A.code:void 0,customerName:k.name,businessName:k.businessName,addressLine1:k.addressLine1,addressCity:k.city,addressZip:k.zipCode,addressState:k.state,addressCountry:k.country,vatId:c.vatApplicable?c.temporaryVatCode:void 0,promoCodeId:A&&"promo_code"===A.source?A.code:void 0,from:"subscription_upgrade_modal",addOns:B?[{priceId:B,isCancellation:!1}]:[],useTestClock:o,sessionId:c.sessionId,inAppOffer:"ai"===c.addOnFeature?c.coupon:void 0,isTrial:c.isTrial});v.j({message:_.finishingUp});const t=e.paymentIntentClientSecret,n=e.paymentIntentId;let s=e.paymentIntentStatus;if(t&&"requires_action"===s){const{paymentIntent:e,error:n}=await i.handleNextAction({clientSecret:t});e?s=e.status:null!=n&&n.payment_intent&&(s=n.payment_intent.status)}"succeeded"===s?x.fZH(r,{payment_intent_id:n,modal_id:T}):u.paymentIntentRequiresPaymentMethod({status:s})&&b.showDialog({message:"trialing"===e.subscriptionStatus?(0,I.jsx)(l.FormattedMessage,{id:"subscription.upgrade.payment_failed.trial",defaultMessage:"Please provide an alternate payment method to complete your upgrade."}):(0,I.jsx)(l.FormattedMessage,{id:"subscription.upgrade.payment_failed",defaultMessage:"Your payment could not be processed. Please provide an alternate payment method or you will lose access to Notion."}),showCancel:!1,keepFocus:!1,disableBackgroundDismiss:!0,items:[{label:(0,I.jsx)(l.FormattedMessage,{id:"subscription.upgrade.payment_failed.pay_invoice",defaultMessage:"Complete payment"}),onAccept:()=>{x.AqV(r,{payment_intent_id:n,modal_id:T}),window.open(e.invoiceUrl,"_blank")},color:"red"},{label:(0,I.jsx)(l.FormattedMessage,{id:"subscription.upgrade.payment_failed.cancel",defaultMessage:"Cancel upgrade"}),onAccept:async()=>{x.cYL(r,{payment_intent_id:n,modal_id:T}),v.j({message:_.cancelFailedSubscription}),await w.EO({environment:r,spaceStore:d,planType:d.getPlanType()??"personal",from:"subscription_upgrade_modal-failed_payment"}),v.x()}}]}),A&&(0,h.$r)(r.currentUser.id),function(e){const{environment:t,modalId:n}=e;y.Z.reset(),x.LYj(t,{modal_id:n})}({environment:r,modalId:T}),M.Z.setState({...M.Z.state,currentTab:"billing",defaultSubtab:void 0})}catch{x.cYL(r,{modal_id:T})}v.x()}({environment:t,data:r,paymentData:d,stripe:s,useTestClock:o})}var O=n(859),F=n(48122),Z=n(91624),B=n(51133),A=n(29497),k=n(7184),V=n(4550),D=n(10644),P=n(24405),L=n(97880),U=n(82990),R=n(38461),z=n(27533),W=n(91493),E=n(59148),K=n(42329),N=n(92041),Y=n(61519),G=n(68785),H=n(1063);function q(e){window.__c={n:"SpaceSubscriptionOrderSummary"};const{state:t,data:n,promo:r}=e,{coupon:s,isTrial:o}=t,d=(0,a.O7)(),c=(0,P.yK)((e=>({container:{display:"flex",flexDirection:"column",gap:16},header:{alignItems:"center",color:e.regularTextColor,display:"flex",fontSize:16,fontWeight:U.Z.fontWeight.semibold,gap:8,marginBottom:11,lineHeight:"22px"},couponLink:{fontSize:12}})),[]),{availableCurrencyCodes:u,selectedCurrencyCode:p}=(0,i.VK)((()=>({availableCurrencyCodes:S.Z.availableCurrencyCodes,selectedCurrencyCode:S.Z.selectedCurrencyCode})),[]),m=t.temporaryBillingInterval??"month",y=B.Zr(r),g=B.Lp(t),f=(0,i.VK)((()=>g.map((e=>S.Z.getPrice(d,(t=>t.product===e&&t.billingInterval===m))))),[m,d,g]);if(f.some((e=>!e.isLoaded)))return(0,I.jsx)(G.Z,{});const h=f.map((e=>e.result)).filter(Boolean),x=j.su(n),b=h[0].unitAmount.currencyValue,v=B.cv({prices:h,quantity:x,coupon:s}),M=B.VT({calculatingTax:t.calculatingTax,taxAmount:t.taxAmount,currencyValue:b}),w=B.rF({prices:h,quantity:x,promo:y}),_=B.Et(n,b),T=v.plus(M).minus(w).minus(_),O=T.amount<0?T.withMultipliedAmount(0):T;return(0,I.jsxs)("div",{style:c.container,children:[o?null:(0,I.jsxs)("label",{style:c.header,children:[(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.header",defaultMessage:"Order summary"}),(0,I.jsx)(R.V,{availableCurrencyCodes:u,from:"upgrade_modal",onSelectCurrency:C.y,selectedCurrencyCode:p})]}),(0,I.jsx)($,{prices:h,coupon:t.coupon,data:n,isTrial:o}),j.Fu(t.subscriptionTier)&&(0,I.jsx)(H.X,{tier:t.subscriptionTier}),(0,I.jsx)(Y.Z,{size:1}),o?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(X,{subtotal:v,tax:M,discount:w,accountBalance:_,promo:y,state:t,style:{marginBottom:8}}),(0,I.jsx)(Q,{total:O})]})]})}function Q(e){const t=B.hr();return(0,I.jsxs)("div",{style:t.itemContainer,children:[(0,I.jsx)("div",{style:t.captionContainer,children:(0,I.jsx)("span",{style:t.totalName,children:(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeOrderSummary.totalForToday",defaultMessage:"Total for today"})})}),(0,I.jsx)("span",{style:t.totalPrice,children:(0,I.jsx)(z.W,{cost:e.total.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}function X(e){const{subtotal:t,tax:n,discount:r,accountBalance:s,style:a,promo:i}=e,{calculatingTax:o,coupon:l}=e.state;return(0,I.jsxs)("div",{style:a,children:[(0,I.jsx)(K.r,{subtotal:t}),(0,I.jsx)(N.u,{tax:n,calculatingTax:o}),i&&!l?(0,I.jsx)(E.T,{discount:r,promo:i}):void 0,(0,I.jsx)(W.G,{accountBalance:s})]})}function $(e){const{coupon:t,data:n,prices:r,isTrial:s}=e;return(0,I.jsx)(I.Fragment,{children:r.map((e=>(0,I.jsx)(J,{price:e,data:n,coupon:t,isTrial:s},e.externalId)))})}function J(e){window.__c={n:"SpaceSubscriptionGrossOrderItem"};const{price:t,data:n,coupon:r,isTrial:s}=e,a=(0,P.yK)((e=>({container:{display:"flex",justifyContent:"space-between"},item:{},title:{fontSize:14,fontWeight:U.Z.fontWeight.medium,marginBottom:4},subtitle:{color:e.mediumTextColor,fontSize:12},price:{fontSize:14}})),[]),i=j.su(n),o=t.getCostPerBillingInterval({quantity:i,coupon:r}),l=(0,I.jsx)(z.W,{cost:o.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"});return(0,I.jsxs)("div",{style:a.container,children:[(0,I.jsxs)("div",{style:a.item,children:[(0,I.jsx)("div",{style:a.title,children:(0,I.jsx)(ee,{price:t})}),(0,I.jsx)("div",{style:a.subtitle,children:(0,I.jsx)(te,{price:t,data:n,coupon:r,isTrial:s})})]}),s?null:(0,I.jsx)("div",{style:a.price,children:l})]})}function ee(e){const{price:t}=e;switch(t.product){case"free":case"student":return null;case"ai":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.ai.addOn",defaultMessage:"Notion AI"});case"personal":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.singlePlayerPlusPlan",defaultMessage:"Plus plan with a 1-member limit"});case"plus":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.plusPlan",defaultMessage:"Plus plan"});case"business":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.businessPlan",defaultMessage:"Business plan"});case"enterprise":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan",defaultMessage:"Enterprise plan"});default:(0,L.t1)(t.product)}}function te(e){const{price:t,data:n,coupon:r,isTrial:s}=e,a=j.su(n),i=t.getMonthlyUnitCost(r),o=(0,I.jsx)(z.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"});if(s)return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.trial.billedYearly",defaultMessage:"{price} / member / month",values:{br:(0,I.jsx)("br",{}),price:o}});switch(t.billingInterval){case"year":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed yearly",values:{br:(0,I.jsx)("br",{}),price:o,numberOfMembers:a}});case"month":return(0,I.jsx)(l.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed monthly",values:{br:(0,I.jsx)("br",{}),price:o,numberOfMembers:a}});default:(0,L.t1)(t.billingInterval)}}function ne(e){window.__c={n:"ModalContentWrapper"};const{state:t,data:n,spaceStore:s}=e,{subscriptionTier:a,onlyShowAddOn:o,calculatingTax:l,temporaryBillingInterval:d,taxAmount:c,addOnFeature:p,coupon:m}=t,y=j.XX(n),g=(0,i.VK)((()=>(null==y?void 0:y.currencyCode)??S.Z.selectedCurrencyCode),[y]),{payAmount:f}=j.uN({subscriptionTier:a,currencyCode:g,promo:t.appliedPromo,data:n,onlyShowAddOn:o,calculatingTax:l,billingInterval:d??"year",taxAmount:c,addOnFeature:p,coupon:m}),h=(0,u.useElementsOptions)({type:"subscription",amount:f.amount,currency:f.currencyCode});return(0,I.jsx)(r.Elements,{stripe:(0,u.getStripe)(),options:h,children:(0,I.jsx)(re,{state:t,data:n,spaceStore:s})})}function re(e){window.__c={n:"ModalContent"};const{state:t,data:n,spaceStore:s}=e,d=(0,a.O7)(),u=(0,l.useIntl)(),{isMobile:p}=(0,a.Fy)(),f=(0,r.useStripe)(),h=(0,r.useElements)(),b=(0,i.VK)((()=>m.Z.state.online),[]),[v,M,j,S,C]=(0,i.VK)((()=>{var e;const n=(null===(e=g.default.state.data)||void 0===e?void 0:e.addOns)??[],r=(0,c.CV)(s);return[t.subscriptionTier,t.temporaryBillingInterval,t.addOnFeature,!r&&!(0,o.de)(n),t.coupon]}),[t,s]);if(!t.open)return null;if(!b)return(0,I.jsx)(D.Z,{});const w=B.Lp(t);return(0,I.jsx)(A.CT,{showDismissButton:!0,main:(0,I.jsx)(A.T1,{width:p?"fill":450,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{style:{paddingBottom:24},children:(0,I.jsx)(Z.Q,{subscriptionTier:t.subscriptionTier,onlyShowAddOn:t.onlyShowAddOn,addOnFeature:t.addOnFeature,type:t.type,isTrial:t.isTrial})}),t.onlyShowAddOn?null:(0,I.jsx)(V.Z,{subscriptionTier:v,billingInterval:M,addOnFeature:j,canAddAI:S,isTrial:t.isTrial,modalId:t.sessionId,coupon:C,onChangeBillingInterval:e=>{y.Z.update((t=>({...t,temporaryBillingInterval:e})))},onChangeAddOnFeature:e=>{y.Z.update((t=>({...t,addOnFeature:e})))}}),(0,I.jsx)(O.iQ,{})]})}),sidebar:(0,I.jsxs)(A.T6,{width:p?"fill":300,children:[(0,I.jsx)(q,{state:t,data:n,promo:t.appliedPromo}),(0,I.jsx)(F.f,{state:t,products:w,onClickUpgrade:e=>async function(e){const{environment:t,state:n,data:r,stripe:s,elements:a,intl:i,useTestClock:o}=e;x.PNo(t,{modal_id:n.sessionId}),y.Z.update((e=>({...e,payButtonState:"disabled"}))),await T({environment:t,state:n,data:r,stripe:s,elements:a,intl:i,useTestClock:o});const l=y.Z.state;l.open&&y.Z.setState({...l,payButtonState:"enabled"})}({environment:d,intl:u,state:t,stripe:f,elements:h,data:n,useTestClock:e.useTestClock})})]})})}const se=function(e){window.__c={n:"SpaceSubscriptionUpgradeModal"};const{data:t,spaceStore:n}=e,r=(0,i.VK)((()=>y.Z.state),[]),o=(0,a.O7)(),c=(0,l.useIntl)();return(0,s.useEffect)((()=>{const{state:e}=y.Z;if(!e.open)return;const{currentUserStore:n}=p.default.state,r=null!=n&&n.isDefined()?n.getModel():void 0;if(r){const n=r.getDisplayName(c);var s;if(y.Z.setState({...e,temporaryAddress:{...e.temporaryAddress,name:n}}),"subscribed_admin"===t.type||"unsubscribed_admin"===t.type)y.Z.setState({...e,appliedPromo:null===(s=t.customerData)||void 0===s?void 0:s.stripe.promo})}}),[]),(0,I.jsx)(k.c,{ariaLabelledBy:d.BaY,isOpen:r.open,onDismiss:()=>w.Fp(o),children:r.open?(0,I.jsx)(ne,{state:r,data:t,spaceStore:n}):null})}},1063:(e,t,n)=>{n.d(t,{X:()=>c});n(67294);var r=n(480),s=n(24405),a=n(31412),i=n(50906),o=n(35057),l=n(42402),d=n(85893);function c(e){window.__c={n:"StartupCouponInlineTextLink"};const t=(0,r.O7)(),n=(0,s.yK)((()=>({couponLink:{fontSize:12}})),[]);return(0,d.jsx)(l.Z,{href:"https://notionup.typeform.com/to/qYXezfBW",external:!0,style:n.couponLink,onClick:()=>{const n=(0,o.zt)();i.sS1(t,{tier:e.tier,currentTier:n})},children:(0,d.jsx)("div",{children:(0,d.jsx)(a.FormattedMessage,{id:"startupCouponInlineLink.text",defaultMessage:"Are you a startup?"})})})}},69098:(e,t,n)=>{n.d(t,{j:()=>c,o:()=>r});var r={};n.r(r),n.d(r,{showAsyncModal:()=>p,showAsyncModalComponent:()=>m,testOnly:()=>M});var s=n(67294),a=n(86628),i=n(49085);class o extends i.default{getInitialState(){return{asyncModals:[]}}}const l=new o;var d=n(85893);const c=s.memo((e=>{window.__c={n:"AsyncModalRenderer"};const{store:t=l}=e,n=(0,a.VK)((()=>t.state.asyncModals),[t]);return(0,d.jsx)(d.Fragment,{children:n.map((e=>{const{id:t,internalRenderModal:n,isOpen:r}=e,a=n(r);return(0,d.jsx)(s.Fragment,{children:a},t)}))})}));var u=n(4615);function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return new Promise(((n,r)=>{try{y({asyncModal:x({renderModal:e,promiseResolve:n,promiseReject:r,store:t}),store:t})}catch(s){r(s)}}))}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;const n=t=>s.createElement(e,t);return p(n,t)}function y(e){const{asyncModal:t,store:n=l}=e;n.update((e=>({asyncModals:[...e.asyncModals,t]})))}function g(e){const{id:t,promiseResolve:n,store:r=l}=e;return e=>{const s=b({id:t,store:r});null!=s&&s.isOpen&&(v({id:t,store:r,update:{isOpen:!1}}),n(e))}}function f(e){const{id:t,promiseResolve:n,store:r=l}=e;return()=>{const e=b({id:t,store:r});null!=e&&e.isOpen&&(v({id:t,store:r,update:{isOpen:!1}}),n())}}function h(e){const{id:t,store:n=l}=e;return()=>{n.update((e=>({asyncModals:e.asyncModals.filter((e=>e.id!==t))})))}}function x(e){const{renderModal:t,promiseResolve:n,promiseReject:r,store:s=l}=e,a=(0,u.ZP)(),i=h({id:a,store:s}),o=f({id:a,promiseResolve:n,store:s}),d=g({id:a,promiseResolve:n,store:s});return{id:a,internalRenderModal:e=>{try{return t({isOpen:e,onClosed:i,onDismiss:o,resolve:d})}catch(n){throw r(n),n}},isOpen:!0}}function b(e){const{id:t,store:n=l}=e;return n.state.asyncModals.find((e=>e.id===t))}function v(e){const{id:t,update:n,store:r=l}=e;r.update((e=>({asyncModals:e.asyncModals.map((e=>e.id!==t?e:{...e,...n}))})))}const M={addAsyncModal:y,createAsyncModal:x,createOnClosed:h,createOnDismiss:f,createResolve:g,getAsyncModal:b,updateAsyncModal:v}},50659:(e,t,n)=>{n.d(t,{G$:()=>s,MF:()=>a,Z3:()=>r});function r(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function s(e){let{isMobile:t}=e;return t?{}:{...r({isMobile:t}),marginLeft:4,marginRight:4,width:"calc(100% - 8px)"}}function a(){return{paddingLeft:10,paddingRight:10}}},91493:(e,t,n)=>{n.d(t,{G:()=>o});n(67294);var r=n(31412),s=n(51133),a=n(27533),i=n(85893);function o(e){window.__c={n:"OrderSummaryAccountBalanceItem"};const t=(0,s.hr)(),{accountBalance:n}=e;return 0===n.amount?null:(0,i.jsxs)("div",{style:t.itemContainer,children:[(0,i.jsx)("div",{style:t.captionContainer,children:(0,i.jsx)("span",{style:t.name,children:(0,i.jsx)(r.FormattedMessage,{id:"subscriptionHelpers.lineItems.balance",defaultMessage:"Balance"})})}),(0,i.jsx)("span",{style:t.credit,children:(0,i.jsx)(a.W,{cost:n.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},59148:(e,t,n)=>{n.d(t,{T:()=>o});n(67294);var r=n(31412),s=n(51133),a=n(27533),i=n(85893);function o(e){window.__c={n:"OrderSummaryDiscountItem"};const t=(0,s.hr)(),{discount:n,promo:o}=e;return(0,i.jsxs)("div",{style:t.itemContainer,children:[(0,i.jsx)("div",{style:t.captionContainer,children:(0,i.jsx)("span",{style:t.name,children:(0,i.jsx)(r.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo",defaultMessage:"Coupon"})})}),o.duration_in_months?(0,i.jsx)("span",{style:t.caption,children:(0,i.jsx)(r.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo.subtitle",defaultMessage:"Valid for {durationInMonths} months",values:{durationInMonths:o.duration_in_months}})}):void 0,(0,i.jsx)("span",{style:t.credit,children:(0,i.jsx)(a.W,{cost:n.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},42329:(e,t,n)=>{n.d(t,{r:()=>o});n(67294);var r=n(31412),s=n(51133),a=n(27533),i=n(85893);function o(e){window.__c={n:"OrderSummarySubtotalItem"};const t=(0,s.hr)(),{subtotal:n}=e;return(0,i.jsxs)("div",{style:t.itemContainer,children:[(0,i.jsx)("div",{style:t.captionContainer,children:(0,i.jsx)("span",{style:t.name,children:(0,i.jsx)(r.FormattedMessage,{id:"subscriptionHelpers.lineItems.subTotal",defaultMessage:"Subtotal"})})}),(0,i.jsx)("span",{style:t.price,children:(0,i.jsx)(a.W,{cost:n.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},92041:(e,t,n)=>{n.d(t,{u:()=>l});n(67294);var r=n(31412),s=n(68785),a=n(51133),i=n(27533),o=n(85893);function l(e){window.__c={n:"OrderSummaryTaxItem"};const t=(0,a.hr)(),{tax:n,calculatingTax:l}=e;return(0,o.jsxs)("div",{style:t.itemContainer,children:[(0,o.jsx)("div",{style:t.captionContainer,children:(0,o.jsx)("span",{style:t.name,children:(0,o.jsx)(r.FormattedMessage,{id:"subscriptionHelpers.lineItems.taxIfApplicable.title",defaultMessage:"Tax if applicable"})})}),(0,o.jsx)("span",{style:t.price,children:l?(0,o.jsx)(s.Z,{}):0===n.amount?"—":(0,o.jsx)(i.W,{cost:n.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},72263:(e,t,n)=>{n.d(t,{_:()=>a});n(67294);var r=n(45238),s=n(85893);const a=(0,r.I)("settingsUpgrade",{viewBox:"0 0 20 20",svg:(0,s.jsx)("path",{d:"M9.969 17.938c4.36 0 7.969-3.618 7.969-7.97C17.938 5.61 14.32 2 9.96 2 5.609 2 2 5.61 2 9.969c0 4.351 3.617 7.969 7.969 7.969zm0-1.329a6.609 6.609 0 01-6.633-6.64 6.602 6.602 0 016.625-6.64 6.627 6.627 0 016.648 6.64 6.61 6.61 0 01-6.64 6.64zm0-2.734a.562.562 0 00.586-.586V9.383l-.063-1.656.797.945.922.937a.52.52 0 00.414.172c.32 0 .57-.242.57-.562a.566.566 0 00-.164-.406L10.43 6.219c-.149-.149-.29-.227-.461-.227-.164 0-.297.07-.453.227l-2.61 2.593a.555.555 0 00-.148.407c0 .32.242.562.562.562a.572.572 0 00.414-.172l.93-.937.781-.938-.062 1.649v3.906c0 .344.25.586.586.586z"})})}}]);