"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1132],{27386:(e,t,n)=>{n.d(t,{Z:()=>u,k:()=>d});n(67294);var i=n(83355),o=n(34859),s=n(91754),r=n(61519),a=n(53336),l=n(85893);function d(e){return e?18:60}class c extends i.Z{static renderDivider(){return(0,l.jsx)(r.Z,{size:37})}renderComponent(){const{device:e}=this.environment,{children:t,controlRow:n,bannerText:i,controlRowPaddingTopBottom:r=16,removeBoxShadow:c=!1,contentPaddingLeftRight:u,controlRowPaddingLeftRight:p,getPaddingTopBottom:g=(()=>e.isMobile?18:36)}=this.props;return this.props.disableScroller?(0,l.jsxs)("div",{style:{paddingLeft:d(e.isMobile),paddingRight:d(e.isMobile)},children:[(0,l.jsx)("div",{style:{paddingTop:g(),paddingBottom:g()},children:t}),n&&(0,l.jsx)("div",{style:{paddingTop:r,paddingBottom:r,boxShadow:`0 -1px 0 ${this.theme.regularDividerColor}`},children:n})]}):(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",backgroundColor:this.theme.cardContentBackground},children:[i&&(0,l.jsx)(s.Z,{styleKey:s.v.Blue,isMobile:!1,children:i}),(0,l.jsx)(a.Z,{type:o.Z.All,style:{flexGrow:1,WebkitOverflowScrolling:"touch",transform:"translateZ(0)",paddingLeft:u??d(e.isMobile),paddingRight:u??d(e.isMobile),paddingTop:i?15:g(),paddingBottom:i?22:g()},children:t}),n&&(0,l.jsx)("div",{style:{flexGrow:0,flexShrink:0,paddingLeft:p??d(e.isMobile),paddingRight:p??d(e.isMobile),paddingTop:r,paddingBottom:r,boxShadow:c?void 0:`0 -1px 0 ${this.theme.regularDividerColor}`},children:n})]})}}c.displayName="SettingBox";const u=c},4550:(e,t,n)=>{n.d(t,{Z:()=>T});n(21703),n(57658);var i=n(67294),o=n(480),s=n(86628),r=n(24405),a=n(11751),l=n(82990),d=n(31412),c=n(50906),u=n(65544),p=n(42402),g=n(18514),m=n(85893);const h=function(e){window.__c={n:"AddOnDiscountMessage"};const t=(n=e.reduceTopMargin,(0,r.yK)((e=>({discountDescription:{alignItems:"center",marginBottom:36,color:e.mediumTextColor,fontSize:12,lineHeight:l.Z.lineHeight.UISmall.desktop,marginTop:n?-8:void 0}})),[n]));var n;return(0,m.jsx)("div",{style:t.discountDescription,children:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.addOnsSection.discountMessage",defaultMessage:"Get an additional <bold>50% off Notion AI</bold> for the next 3 months with a paid plan. <terms>See details.</terms>",values:{bold:e=>(0,m.jsx)("b",{children:e}),terms:e=>(0,m.jsx)(p.Z,{href:(0,g.UY)("terms.discounts.ai.summer.2023"),children:e})}})})};var x=n(70060),b=n(18168);function f(){return(0,r.yK)((e=>({discountText:{color:e.invoiceGreen,fontSize:12},icon:{width:16,height:16},mainTextSelected:{fontWeight:l.Z.fontWeight.medium,color:e.regularTextColor,fontSize:14,lineHeight:"14px"},mainTextUnselected:{color:e.mediumTextColor,fontSize:14,lineHeight:"14px"},priceText:{fontSize:14,color:e.mediumTextColor,marginTop:2},row:{display:"flex",alignItems:"center",justifyContent:"center",gap:4,lineHeight:"14px"},section:{marginBottom:20},sectionHeader:{display:"flex",alignItems:"center",marginBottom:11,fontSize:11,fontWeight:l.Z.fontWeight.semibold,color:e.mediumTextColor}})),[])}function S(e){window.__c={n:"Section"};const{header:t,children:n}=e,i=f();return(0,m.jsxs)("div",{style:i.section,children:[(0,m.jsx)("div",{style:i.sectionHeader,children:t}),n]})}function y(e){window.__c={n:"BillingIntervalOption"};const{isSelected:t,billingInterval:n}=e,i=f(),o=t?i.mainTextSelected:i.mainTextUnselected;let s;switch(n){case"month":s=(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.monthly",defaultMessage:"Monthly"});break;case"year":s=(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearly",defaultMessage:"Yearly"});break;default:throw new Error(`Unsupported billing interval: ${n}`)}return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:i.row,children:[(0,m.jsx)("div",{style:o,children:s}),"year"===n?(0,m.jsx)("div",{style:i.discountText,children:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearlyDiscount",defaultMessage:"{percent}% off",values:{percent:20}})}):null]})})}function v(e){window.__c={n:"NoThanksOption"};const{isSelected:t}=e,n=f(),i=t?n.mainTextSelected:n.mainTextUnselected;return(0,m.jsx)("div",{style:i,children:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.addOnsSection.noThanks",defaultMessage:"No thanks"})})}function j(e){window.__c={n:"AiOption"};const{coupon:t,isSelected:n}=e,i=f(),o=n?i.mainTextSelected:i.mainTextUnselected;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:i.row,children:[(0,a.t)(i.icon),(0,m.jsx)("div",{style:o,children:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.addOnsSection.notionAi",defaultMessage:"Notion AI"})}),t?(0,m.jsx)("div",{style:i.discountText,children:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.aiDiscount",defaultMessage:"{percent}% off",values:{percent:50}})}):null]})})}function T(e){window.__c={n:"SpaceSubscriptionOrderOptions"};const{subscriptionTier:t,billingInterval:n,addOnFeature:r,canAddAI:a,coupon:l,onChangeBillingInterval:p,onChangeAddOnFeature:g,isTrial:f,modalId:T}=e,C=(0,o.O7)(),M=(0,s.VK)((()=>x.F4()),[]);(0,i.useEffect)((()=>{u.W_(C)}),[C,n,r]);const w=(0,i.useMemo)((()=>{const e={key:"month",render:()=>(0,m.jsx)(y,{isSelected:"month"===n,billingInterval:"month",subscriptionTier:t,coupon:l})},i={key:"year",render:()=>(0,m.jsx)(y,{isSelected:"year"===n,billingInterval:"year",subscriptionTier:t,coupon:l})};return M?[i,e]:[e,i]}),[n,t,M,l]),B=(0,i.useMemo)((()=>[{key:"none",render:()=>(0,m.jsx)(v,{isSelected:!r,coupon:l})},{key:"ai",render:()=>(0,m.jsx)(j,{isSelected:!!r,coupon:l})}]),[r,l]);return f?null:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S,{header:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.header",defaultMessage:"Billing period"}),children:(0,m.jsx)(b.Z,{items:w,value:n,onChange:e=>{c.FRI(C,{billingInterval:e,modal_id:T}),p(e)}})}),a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S,{header:(0,m.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.addOnsSection.header",defaultMessage:"Add-ons"}),children:(0,m.jsx)(b.Z,{items:B,value:r??"none",onChange:e=>{const t=[];let n;switch(e){case"ai":n="ai",t.push("ai");break;default:n=void 0}c.qzU(C,{addOnFeatures:t,modal_id:T}),g&&g(n)}})}),l?(0,m.jsx)(h,{reduceTopMargin:!0}):null]}):null]})}},10644:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var i=n(31412),o=n(64369),s=n(27386),r=n(85893);const a=function(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{isSmall:!0,style:{textAlign:"center"},children:(0,r.jsx)(i.FormattedMessage,{id:"spaceSubscriptionPlans.offlineMessage",defaultMessage:"Please go online to manage your plan."})})})}},859:(e,t,n)=>{n.d(t,{iQ:()=>b,ni:()=>f.n});var i=n(67294),o=n(480),s=n(86628),r=n(72126),a=n(65544),l=n(27242),d=n(24405),c=n(82990),u=n(31412),p=n(74194),g=n(26388),m=n(85893);function h(e){window.__c={n:"FormGroup"};const t=(0,d.yK)((t=>({group:{display:"flex",borderBottomColor:t.groupedFormBorder,borderBottomWidth:1,borderBottomStyle:"solid",alignItems:"center",flex:1,...e.style}})),[e.style]);return(0,m.jsx)("div",{style:t.group,children:e.children})}function x(e){window.__c={n:"CheckoutVATCodeInput"};const{temporaryVatCode:t,vatApplicable:n,disabled:o,tooltip:s,onChange:r}=e,a=(0,d.yK)((e=>({container:{backgroundColor:e.cardContentBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBorder,borderRadius:4,borderBottom:"none"},header:{display:"flex",alignItems:"center",marginBottom:6,fontSize:12,fontWeight:c.Z.fontWeight.semibold,color:e.mediumTextColor,justifyContent:"space-between",paddingTop:20},input:{background:"none",boxShadow:"none",padding:8},subtitle:{color:e.mediumTextColor,fontSize:c.Z.fontSize.UISmall.desktop,marginTop:5,marginBottom:10},whiteSpace:{marginBottom:20}})),[]),l=(0,u.useIntl)(),x=(0,i.useCallback)((e=>{r(e.target.value)}),[r]);return n?(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{style:a.header,children:(0,m.jsx)(u.FormattedMessage,{id:"spaceSubscriptionPaymentForm.vatCountryCode.header",defaultMessage:"VAT (optional)"})}),(0,m.jsx)(g.Z,{placement:g.Z.Placement.Top,alignment:g.Z.Alignment.End,render:e=>(0,m.jsx)("div",{...e,style:a.container,children:(0,m.jsx)(h,{children:(0,m.jsx)(p.Z,{value:t,style:a.input,disabled:o,placeholder:l.formatMessage({id:"spaceSubscriptionPaymentForm.vatCountryCode.placeholder",defaultMessage:"VAT/GST number"}),onChange:x})})}),disableTooltip:!s,renderTooltip:()=>s}),(0,m.jsx)("div",{style:a.subtitle,children:(0,m.jsx)(u.FormattedMessage,{id:"spaceSubscriptionBilling.vatCountryCode.subtitle",defaultMessage:"Please include your country code"})})]}):(0,m.jsx)("div",{style:a.whiteSpace})}function b(){window.__c={n:"CheckoutPayment"};const{temporaryVATCode:e,vatApplicable:t}=(0,s.VK)((()=>{const{state:e}=l.Z;return e.open?{temporaryVATCode:e.temporaryVatCode,vatApplicable:e.vatApplicable}:{temporaryVATCode:"",vatApplicable:!1}}),[]),n=function(){const e=(0,o.O7)(),t=(0,i.useMemo)((()=>(0,r.Ds)((async()=>{await a.W_(e)}),3e3)),[e]);return(0,i.useCallback)((async e=>{l.Z.update((t=>({...t,temporaryVatCode:e}))),await t()}),[t])}();return(0,m.jsxs)("div",{children:[(0,m.jsx)(f.n,{}),(0,m.jsx)(x,{onChange:n,temporaryVatCode:e,vatApplicable:t})]})}var f=n(23412);n(36797)},48122:(e,t,n)=>{n.d(t,{f:()=>T});n(67294);var i=n(24405),o=n(8848),s=n(64369),r=n(85893);function a(e){window.__c={n:"CheckoutErrorMessage"};const{error:t}=e.state,n=(0,i.yK)((()=>({label:{marginTop:8,color:o.ZP.red}})),[]);return t?(0,r.jsx)(s.Z,{isMultiline:!0,style:n.label,children:t}):null}var l=n(64717),d=n(3951),c=n(480),u=n(86628),p=n(61736),g=n(47425),m=n(82990),h=n(31412),x=n(50906),b=n(63296),f=n(80444),S=n(77080),y=n(73796),v=n(88893);function j(e){window.__c={n:"ContactSalesButton"};const{state:t}=e,n=(0,c.O7)(),o=(0,h.useIntl)(),s=(0,i.yK)((e=>({contactSalesButton:{width:"100%",height:40,marginTop:10},contactSalesCta:{fontWeight:m.Z.fontWeight.medium},contactSalesIcon:{height:18,width:20,marginRight:6},contactSalesQuestionsText:{color:e.mediumTextColor,fontSize:12,lineHeight:m.Z.lineHeight.UISmall.desktop}})),[]),[a,l]=(0,u.VK)((()=>{const e=S.default.getEligibleGroup({experimentId:"in_app_contact_sales_cta_billing",defaultGroup:"control"});return[t.subscriptionTier,e]}),[t]);if(!(0,g.Rs)(a))return null;const d="on"===l?(0,r.jsx)(h.FormattedMessage,{defaultMessage:"Request a demo",id:"helpButton.salesChat.menuItemDemoVariant"}):(0,r.jsx)(h.FormattedMessage,{id:"spaceSubscriptionSettings.upgradeModal.contactSales",defaultMessage:"Contact sales"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.Z,{style:s.contactSalesButton,onClick:()=>{const{currentUserStore:e}=f.default.state,i=null!=e&&e.isDefined()?null==e?void 0:e.getModel():void 0;y.Z.setState({open:!0,email:i&&i.getEmail(),name:i&&i.getDisplayName(o),question:v.m_(t.subscriptionTier)}),x.Zbu(n)},children:[(0,p.n)(s.contactSalesIcon),(0,r.jsx)("span",{style:s.contactSalesCta,children:d})]}),(0,r.jsx)("p",{style:s.contactSalesQuestionsText,children:(0,r.jsx)(h.FormattedMessage,{id:"spaceSubscriptionSettings.upgradeModal.sales.questions",defaultMessage:"Questions? Contact our sales team for more information."})})]})}function T(e){const{state:t,products:n,onClickUpgrade:i}=e,{isTrial:o,subscriptionTier:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[(0,r.jsx)(d.Z,{state:t,onClickUpgrade:i}),(0,r.jsx)(l.E,{products:n,subscriptionTier:s,isTrial:o})]}),(0,r.jsx)(a,{state:t}),o?null:(0,r.jsx)(j,{state:t})]})}},3951:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var i=n(86628),o=n(24405),s=n(31412),r=n(42922),a=(n(95477),n(27242)),l=n(78291),d=n(70060),c=n(88893),u=n(85893);function p(e){const{state:t}=e,{open:n,type:i,isTrial:o,subscriptionTier:r}=t;return n?i===a.U.TargetSpace?(0,u.jsx)(s.FormattedMessage,{id:"subscriptionUpgradeModal.targetSpace.button.enterprise",defaultMessage:"Claim & Upgrade to Enterprise"}):o?(0,u.jsx)(s.FormattedMessage,{id:"subscriptionUpgradeModal.upgradeButton.startTrial",defaultMessage:"Start {subscriptionTier, select, business {Business} other {Plus}} Trial",values:{subscriptionTier:r}}):(0,u.jsx)(s.FormattedMessage,{id:"subscriptionUpgradeModal.upgradeButton.upgradeNow",defaultMessage:"Upgrade now"}):null}function g(e){window.__c={n:"CheckoutUpgradeButton"};const{state:t,onClickUpgrade:n,customStyles:s}=e,a=(0,o.yK)((()=>({upgradeButton:{height:40,marginTop:24,fontSize:16}})),[]),g=(0,i.VK)((()=>{var e;return void 0!==(null===(e=(0,c.aS)(l.default.state.data))||void 0===e?void 0:e.customerId)}),[]),m=(0,i.VK)((()=>(0,d.G2)()&&!1),[g]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Z,{disabled:"disabled"===t.payButtonState,style:{...a.upgradeButton,...s},onClick:()=>n({useTestClock:!1}),children:(0,u.jsx)(p,{state:t})}),m?(0,u.jsx)(r.Z,{disabled:"disabled"===t.payButtonState,style:a.upgradeButton,onClick:()=>n({useTestClock:!0}),children:"🚧 Upgrade with Test Clock 🚧"}):void 0]})}},61736:(e,t,n)=>{n.d(t,{n:()=>s});n(67294);var i=n(45238),o=n(85893);const s=(0,i.I)("chat",{viewBox:"0 0 32 32",svg:(0,o.jsx)("path",{d:"M7.52 28.727c.591 0 .993-.205 1.706-.842l3.732-3.41c.802.898 2.017 1.375 3.566 1.375h3.844l3.721 3.252c.68.591 1.048.898 1.582.898.77 0 1.204-.557 1.204-1.421V25.85h.468c2.796 0 4.657-1.716 4.657-4.695v-6.719c0-2.978-1.86-4.695-4.657-4.695h-1.75v-.864C25.593 5.785 23.8 4 20.77 4H4.825C1.916 4 0 5.785 0 8.877v10.47c0 3.093 1.916 4.878 4.825 4.878h1.47v3.103c0 .876.435 1.399 1.226 1.399zm.458-5.264c0-.648-.38-.955-.87-.955H4.937c-1.972 0-3.142-1.091-3.142-3.217V8.934c0-2.115 1.17-3.229 3.142-3.229h15.721c1.973 0 3.142 1.114 3.142 3.229v.807h-7.275c-2.92 0-4.647 1.717-4.647 4.695v6.72c0 .613.067 1.17.212 1.682l-4.111 3.865v-3.24zm17.225 4.48l-3.576-3.275c-.446-.398-.713-.523-1.326-.523h-3.666c-1.86 0-2.975-1.034-2.975-3.047l.011-6.605c0-2 1.103-3.047 2.964-3.047h10.607c1.85 0 2.964 1.046 2.964 3.047v6.605c0 2.013-1.114 3.047-2.964 3.047h-1.18c-.48 0-.859.284-.859.932v2.865z"})})}}]);