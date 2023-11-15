"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6464],{10912:(e,t,r)=>{r.d(t,{Z:()=>j});r(57658),r(67294);var o=r(83355),i=r(27531),s=r(41432),n=r(80951),a=r(95538),l=r(21202),d=r(97880),p=r(78316),c=r(17311),h=r(35328),g=r(26350),u=r(3490),v=r(12981),m=r(43568),y=r(81865),C=r(33411),S=r(35541),x=r(85893);function f(e){return"number"==typeof e}class b extends o.Z{constructor(){super(...arguments),this.renderContentBlock=e=>{const{store:t,renderAdditionalBlocks:r,rendererBlockStyle:o}=this.props,s=g.G.createChildStore(t,{table:l.iU,id:e}),n=s.getType(),a=r&&void 0!==n?(0,S.u)(s):(0,u.h)(s);if(a)return(0,x.jsx)(i.D,{value:this.restrictedContentStore,children:(0,x.jsx)(a,{store:s,disabled:!0,disableCommentMenu:!0,disableHoverMenu:!0,hideContent:(0,h.BX)(s),style:{fontSize:12,opacity:.8,pointerEvents:"none",...o},isQuickFind:!0,numberedListCounterStore:this.createComputedStore((()=>({depth:0,numberedListBlockIdsWithFormat:this.createNumberedListCounterStore(e)})))})},e)},this.coverStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1}=this.props,r=(0,p.NU)(e,t);return r.image?r.image:!(this.props.showLoadingShimmer&&0===r.blockIds.length&&!r.isDefined)&&r.blockIds})),this.restrictedContentStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1}=this.props,r=(0,p.wK)(e,t);return r.image?void 0:r.blockIds})),this.numberedLists=this.createComputedStore((()=>{const{store:e}=this.props,t=this.coverStore.state,r=[];if(Array.isArray(t)){let o=0;for(;o<t.length;){let i=t[o],n=g.G.createChildStore(e,{table:l.iU,id:i});if(n.getType()===s.Ti.numberedList){const a=[{blockId:i,idx:1}],d=[{id:i,format:void 0,depth:a.length-1,index:a[0].idx}];for(o+=1;o<t.length&&(i=t[o],n=g.G.createChildStore(e,{table:l.iU,id:i}),n.getType()===s.Ti.numberedList);){{const e=n.getParentId();if(n.getParentId()===a[a.length-1].blockId)a.push({blockId:i,idx:1});else{let t=a[a.length-1].idx;for(;a.length>0&&a[a.length-1].blockId!==e;)t=a[a.length-1].idx,a.pop();a.push({blockId:i,idx:t+1})}d.push({id:i,format:void 0,depth:a.length-1,index:a[a.length-1].idx})}o+=1}r.push(d)}else o+=1}}return r}))}didUpdate(e){this.props.coverFormat.type!==e.coverFormat.type&&this.props.onLoadProxiedImage()}renderComponent(){const{coverFormat:e}=this.props;return"page_cover"===e.type?this.renderPageCover():"page_content"===e.type?this.renderPageContent():"property"===e.type?this.renderProperty(e.property):void 0}renderPageCover(){var e;const{store:t}=this.props,r=null===(e=t.getCover())||void 0===e?void 0:e.cover;return r?(0,x.jsxs)("div",{style:k(this.props.coverHeight,this.props.coverSizeFormat,this.props.imageCoverWrapStyle),children:[(0,x.jsx)(y.Z,{url:r,isAuthenticated:!0,permissionRecord:this.props.store.pointer,width:I(this.props.coverWidth,this.props.coverSizeFormat),onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),render:(e,t)=>{if(t)return(0,x.jsx)(v.Z,{style:{...w(this.props.style),...this.getCoverStyle(),...Z(this.props.coverAspectFormat),objectPosition:`center ${100*(1-L(this.props.store,this.props.coverPosition))}%`},src:t})}}),this.renderImageBorder()]}):this.props.showEmptyGalleryCover?(0,x.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle}):void 0}renderPageContent(){const e=this.coverStore.state,t=this.restrictedContentStore.state;if(!1===e)return(0,x.jsx)(z,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,loadingShimmerStyle:this.props.loadingShimmerStyle});if(e){if(!Array.isArray(e))return(0,x.jsxs)("div",{style:k(this.props.coverHeight,this.props.coverSizeFormat,this.props.imageCoverWrapStyle),children:[(0,x.jsx)(y.Z,{url:e.url,onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),isAuthenticated:!0,permissionRecord:e.pointer,width:I(this.props.coverWidth,this.props.coverSizeFormat),render:(e,t)=>{if(t)return(0,x.jsx)(v.Z,{style:{...w(this.props.style),...this.getPageContentImageStyle(),...Z(this.props.coverAspectFormat),objectPosition:`center ${100*(1-L(this.props.store,this.props.coverPosition))}%`},src:t})}}),this.renderImageBorder()]});if(e.length>0)return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{style:this.getContentWrapStyle(),children:[t?e.filter((e=>t.indexOf(e)>=0)).map(this.renderContentBlock):e.map(this.renderContentBlock),this.props.coverContentFadedOverlay&&(0,x.jsx)("div",{style:this.getContentFadedOverlayStyle()})]})});if(this.props.showEmptyGalleryCover)return(0,x.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle})}else if(this.props.showEmptyGalleryCover)return(0,x.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle})}renderProperty(e){const{store:t}=this.props,r=(0,n.g)(t.getPropertyValue(e)).find((e=>(0,a.SR)({url:e.url})));return r?(0,x.jsxs)("div",{style:k(this.props.coverHeight,this.props.coverSizeFormat,this.props.imageCoverWrapStyle),children:[(0,x.jsx)(y.Z,{onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),url:r.url,isAuthenticated:!0,permissionRecord:this.props.store.pointer,width:I(this.props.coverWidth,this.props.coverSizeFormat),render:(e,t)=>{if(t)return(0,x.jsx)(v.Z,{style:{...w(this.props.style),...this.getCoverStyle(),...Z(this.props.coverAspectFormat),objectPosition:`center ${100*(1-L(this.props.store,this.props.coverPosition))}%`},src:t})}}),this.renderImageBorder()]}):this.props.showEmptyGalleryCover?(0,x.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle}):void 0}renderImageBorder(){switch(this.props.variant){case"default":return null;case"gallery":return(0,x.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:0,borderBottom:`1px solid ${this.theme.regularDividerColor}`}});default:(0,d.t1)(this.props.variant)}}createNumberedListCounterStore(e){const t=this.numberedLists.state;for(const r of t)if(r.find((t=>t.id===e)))return r;return[]}getContentWrapVariantStyle(){const{ThemeStore:e}=this.environment,t="dark"===e.state.mode;switch(this.props.variant){case"default":return{};case"gallery":return{background:this.theme.collectionGalleryPreviewCardCover,padding:"8px 8px 0",boxShadow:t?"transparent":`inset 0 -1px 0 0 ${this.theme.regularDividerColor}`,...this.props.contentWrapStyle};default:(0,d.t1)(this.props.variant)}}getContentWrapStyle(){return{height:F(this.props.coverHeight,this.props.coverSizeFormat),pointerEvents:"none",overflow:"hidden",position:this.props.coverContentFadedOverlay?"relative":"static",...this.getContentWrapVariantStyle(),...this.props.contentWrapStyle}}getContentFadedOverlayStyle(){return{width:"100%",height:40,position:"absolute",bottom:0,left:0,background:`linear-gradient(to bottom, transparent, ${this.theme.accentColors.gray[30]} 100%)`,...this.props.coverContentFadedOverlayStyle}}getCoverVariantStyle(){switch(this.props.variant){case"default":return{border:`1px solid ${this.theme.stroke.regular}`,borderRadius:4};case"gallery":return{borderRadius:0,borderTopLeftRadius:1,borderTopRightRadius:1};default:(0,d.t1)(this.props.variant)}}getCoverStyle(){return{width:"100%",height:F(this.props.coverHeight,this.props.coverSizeFormat),...this.getCoverVariantStyle(),objectPosition:"center"}}getPageContentImageStyle(){return{...this.getCoverStyle(),objectPosition:"center center"}}}b.displayName="CollectionItemCover";const j=b;function L(e,t){if(f(t))return t;if(e.getFormatStore().isDefined()){const{page_cover_position:t,card_cover_position:r}=e.getFormat();if(f(r))return r;if(f(t))return t}return.5}function w(e){return e||{}}function F(e,t){if(e)return e;switch(t){case"large":return c.Z.card.desktop.large.height;case"small":return c.Z.card.desktop.small.height;case"medium":default:return c.Z.card.desktop.medium.height}}function I(e,t){return e||(0,p.rD)(t)}function Z(e){return{objectFit:void 0===e?"cover":e}}function k(e,t,r){return{height:F(e,t),position:"relative",pointerEvents:"none",overflow:"hidden",...r}}function M(e){let{coverHeight:t,coverSizeFormat:r,emptyGalleryCoverStyle:o}=e;return(0,x.jsx)("div",{style:{height:F(t,r),...o}})}function z(e){let{coverHeight:t,coverSizeFormat:r,loadingShimmerStyle:o}=e;return(0,x.jsx)("div",{style:{height:F(t,r),...o},children:(0,x.jsx)(C.Z,{show:!0,showDelay:100,showHold:0,render:e=>e?(0,x.jsx)(m.Z,{paragraphs:[{lineHeight:12,lineMargin:6,sectionWidths:[100,100,50],repeat:1,sectionMargin:0}]}):void 0})})}},39849:(e,t,r)=>{r.d(t,{Z:()=>d});r(67294);var o=r(83355),i=r(8848),s=r(82990),n=r(85893);let a=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});class l extends o.Z{renderComponent(){const{count:e}=this.props,t=this.props.color===a.Red;if(e&&!(e<=0))return(0,n.jsx)("div",{style:{...l.style,...this.props.style,...e>99&&{width:void 0,padding:2},background:t?this.theme.redBadgeBackground:this.theme.lightIconColor},children:(0,n.jsx)(p,{count:this.props.count,numberStyle:this.props.numberStyle})})}}l.displayName="MentionsBadge",l.Color=a,l.style={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:s.Z.fontWeight.semibold,borderRadius:4,color:i.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};const d=l;function p(e){let{count:t,numberStyle:r}=e;return t?1===t?(0,n.jsx)("span",{style:{marginLeft:-.5,...r},children:"1"}):t>99?(0,n.jsx)("span",{style:{letterSpacing:-.5,...r},children:"99+"}):t>9?(0,n.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...r},children:t}):(0,n.jsx)("span",{style:{...r},children:t}):null}},97820:(e,t,r)=>{r.d(t,{Z:()=>v});r(67294);var o=r(83355),i=r(480),s=r(86628),n=r(99036),a=r(39068),l=r(82990),d=r(19124),p=r(61766),c=r(33846),h=r(76836),g=r(85893);class u extends o.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:p.Z,nameInputStore:c.Z}}renderComponent(){const{device:e}=this.environment,{propertySchema:t,showIcon:r,hideName:o,showBadge:i,style:s}=this.props,n=e.isMobile?16:14;return(0,g.jsxs)("div",{style:{...u.baseStyle,fontSize:n,...s},children:[r&&(0,g.jsx)("div",{style:m(this.props.hideName,this.props.iconStyle),children:this.renderIcon()}),!o&&(0,g.jsx)("div",{style:{...l.Z.textOverflowStyle},children:t.name}),i&&(0,g.jsx)(y,{propertySchema:this.props.propertySchema})]})}renderIcon(){const{device:e}=this.environment,{propertySchema:t}=this.props,{theme:r}=this,o=e.isMobile?18:16;return(0,g.jsx)(a.ZP,{type:t.type,icon:t.icon,size:this.props.iconSize||o,theme:r,style:this.props.iconStyle})}}u.displayName="Property",u.baseStyle={display:"flex",alignItems:"center",lineHeight:"120%",minWidth:0};const v=u;function m(e,t){return{marginRight:e?void 0:6,...t}}function y(e){let{propertySchema:t}=e;window.__c={n:"Badge"};const r=(0,i.O7)();return(0,s.VK)((()=>(0,d.Zt)(r)&&n.qQ(t)&&n.q3(t)&&("text"===t.type||(0,d.KZ)())),[r,t])?(0,g.jsx)(h.Z,{}):null}},46457:(e,t,r)=>{r.d(t,{_:()=>u});var o=r(67294),i=r(480),s=r(86628),n=r(24405),a=r(31412),l=r(87279),d=r(77907),p=r(78140),c=r(40721),h=r(7184),g=r(85893);function u(e){let{loginModalStore:t,loginStore:r,title:n,description:a,isSignup:u,disableLoginLink:y,redirectURL:C,className:S,onDismiss:x}=e;window.__c={n:"LoginModal"};const f=(0,i.O7)(),b=(0,s.VK)((()=>t.state.open),[t]),j=(0,o.useId)(),L=(0,o.useId)(),w={loginStore:r,title:n,description:a,isSignup:u,redirectURL:C,disableLoginLink:y,titleAriaId:j,descriptionAriaId:L};if(f.device.isMobile){const e=()=>m({loginModalStore:t,loginStore:r,onDismiss:x});return(0,g.jsx)(p.Z,{menuType:l.og.Modal,left:(0,g.jsx)(c.CancelMenuText,{}),onClickLeft:e,onCancel:e,whiteBackground:!0,title:n,children:(0,g.jsx)(d.LazyLoginModalContent,{...w})})}return(0,g.jsx)(h.c,{ariaLabelledBy:j,ariaDescribedBy:L,isOpen:b,onDismiss:()=>{m({loginModalStore:t,loginStore:r,onDismiss:x})},areaConstraint:{width:{min:480,max:480},height:{scroll:!0}},children:(0,g.jsxs)("div",{className:S,children:[!f.device.isMobile&&(0,g.jsx)(v,{loginModalStore:t,loginStore:r,onDismiss:x}),(0,g.jsx)(d.LazyLoginModalContent,{...w})]})})}function v(e){let{loginModalStore:t,loginStore:r,onDismiss:o}=e;window.__c={n:"CancelButton"};const i=(0,n.Fg)();return(0,g.jsx)("div",{style:{fontSize:14,color:i.mediumTextColor,position:"absolute",right:0,marginTop:16,marginRight:16,cursor:"pointer"},onClick:()=>{m({loginModalStore:t,loginStore:r,onDismiss:o})},children:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Cancel",id:"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"})})}function m(e){const{loginModalStore:t,loginStore:r,onDismiss:o}=e;r.reset(),t.setState({open:!1}),o&&o()}},90683:(e,t,r)=>{r.d(t,{a:()=>l});r(67294);var o=r(66897),i=r(97880),s=r(70301),n=r(45653),a=r(85893);function l(e){const{actor:t}=e,r={size:e.size??14,style:{marginRight:2,...e.style}};return(0,o.YU)(t)?(0,a.jsx)(s.Z,{botValue:t.asActor,...r}):(0,o.$S)(t)?(0,a.jsx)(n.Z,{userValue:t.asActor,...r}):(0,o.Iq)(t)?(0,a.jsx)(n.Z,{userValue:void 0,...r}):void(0,i.t1)(t)}},34700:(e,t,r)=>{function o(e){return"drag"in e&&e.drag?{WebkitAppRegion:"drag"}:"noDrag"in e&&e.noDrag?{WebkitAppRegion:"no-drag"}:{}}r.d(t,{X:()=>o})},96071:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(49085);class i extends o.default{getInitialState(){return{open:!1}}}const s=i},72787:(e,t,r)=>{r.d(t,{Y:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("chevronDownThin",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M8.004 12a.72.72 0 00.54-.237l6.238-6.487A.735.735 0 0015 4.753c0-.426-.314-.753-.733-.753a.76.76 0 00-.524.213l-5.739 5.955-5.747-5.955A.73.73 0 001.733 4C1.314 4 1 4.327 1 4.753c0 .204.08.384.218.531l6.238 6.479a.751.751 0 00.548.237z"})})},13148:(e,t,r)=>{r.d(t,{U:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("close",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M2.89795 13.3428C3.18799 13.6262 3.6626 13.6262 3.93945 13.3494L7.99341 9.29541L12.0474 13.3494C12.3308 13.6262 12.8054 13.6328 13.0889 13.3428C13.3723 13.0593 13.3723 12.5847 13.0955 12.3079L9.0415 8.24731L13.0955 4.19336C13.3723 3.9165 13.3789 3.4353 13.0889 3.15845C12.7988 2.875 12.3308 2.875 12.0474 3.15186L7.99341 7.20581L3.93945 3.15186C3.6626 2.875 3.1814 2.86841 2.89795 3.15186C2.6145 3.44189 2.62109 3.9231 2.89795 4.19336L6.9519 8.24731L2.89795 12.3079C2.62109 12.5781 2.6145 13.0659 2.89795 13.3428Z"})})},64878:(e,t,r)=>{r.d(t,{h:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("dot",{viewBox:"0 0 5 4",svg:(0,i.jsx)("circle",{cx:"2.5",cy:"2",r:"2"})})},97439:(e,t,r)=>{r.d(t,{D:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("doubleChevronLeft",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.07031 13.8887C7.2207 14.0391 7.40527 14.1211 7.62402 14.1211C8.06836 14.1211 8.41699 13.7725 8.41699 13.3281C8.41699 13.1094 8.32812 12.9043 8.17773 12.7539L3.37207 8.05762L8.17773 3.375C8.32812 3.21777 8.41699 3.0127 8.41699 2.80078C8.41699 2.35645 8.06836 2.00781 7.62402 2.00781C7.40527 2.00781 7.2207 2.08984 7.07031 2.24023L1.73828 7.44922C1.56055 7.62012 1.46484 7.8252 1.46484 8.06445C1.46484 8.29688 1.55371 8.49512 1.73828 8.67969L7.07031 13.8887ZM13.1748 13.8887C13.3252 14.0391 13.5098 14.1211 13.7354 14.1211C14.1797 14.1211 14.5283 13.7725 14.5283 13.3281C14.5283 13.1094 14.4395 12.9043 14.2891 12.7539L9.4834 8.05762L14.2891 3.375C14.4395 3.21777 14.5283 3.0127 14.5283 2.80078C14.5283 2.35645 14.1797 2.00781 13.7354 2.00781C13.5098 2.00781 13.3252 2.08984 13.1748 2.24023L7.84961 7.44922C7.66504 7.62012 7.57617 7.8252 7.56934 8.06445C7.56934 8.29688 7.66504 8.49512 7.84961 8.67969L13.1748 13.8887Z"})})},27714:(e,t,r)=>{r.d(t,{N:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("link",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"})})},22686:(e,t,r)=>{r.d(t,{f:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("person",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,r)=>{r.d(t,{X:()=>s});r(67294);var o=r(45238),i=r(85893);const s=(0,o.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,i.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,i.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},35840:(e,t,r)=>{r.d(t,{R:()=>s,T:()=>i});r(67294);var o=r(45238);const i=(0,r(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),s=(0,o.I)("search",{viewBox:"0 0 16 16",svg:i})},80503:(e,t,r)=>{r.d(t,{Aj:()=>i,R6:()=>n,TT:()=>o,br:()=>s,u3:()=>a});const o=52,i=45,s=37;function n(e,t){return t?o:e?s:i}function a(e){return 2*n(e)}}}]);