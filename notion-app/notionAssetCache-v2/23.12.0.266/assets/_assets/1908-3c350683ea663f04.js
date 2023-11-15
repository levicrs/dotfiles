"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1908],{1101:(e,t,i)=>{i.d(t,{Z:()=>m});i(67294);var n=i(83355),o=i(56666),s=i(82990),r=i(87279),c=i(61766),a=i(48019),l=i(64921),d=i(31945),u=i(78140),p=i(72495),h=i(85893);class g extends n.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:c.Z}}renderComponent(){const{device:e}=this.environment;let t;return t=e.isMobile?{menuType:r.og.ActionSheet}:{menuType:r.og.Popup},(0,h.jsxs)("div",{style:this.getContainerStyle(),children:[(0,h.jsx)("div",{style:(i=this.environment,{fontSize:i.device.isMobile?14:11,lineHeight:s.Z.lineHeight.UISmall.desktop,fontWeight:s.Z.fontWeight.medium}),children:this.props.emailAddress}),(0,h.jsx)(d.ZP,{popupType:e.isMobile?d.Z4.SlideUp:d.Z4.Popup,buttonPopupStore:this.stores.buttonPopupStore,renderOrigin:e=>{if(!this.props.disabled)return(0,h.jsx)(l.Z,{...e,style:M(this.environment),children:(0,o.o)(C(this.environment))})},render:()=>(0,h.jsx)(u.Z,{...t,children:(0,h.jsx)(a.Z,{sections:[{key:"option section",render:e=>(0,h.jsx)(p.Z,{...e}),actions:this.props.accountActions}],context:{environment:this.environment,blocks:[],publicEditMode:void 0}})})})]});var i}getContainerStyle(){return{marginTop:this.environment.device.isMobile?20:8,marginLeft:12,marginRight:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:this.theme.mediumTextColor}}}g.displayName="SidebarAccountHeader";const m=g;function M(e){const{device:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:t.isMobile?24:20,height:t.isMobile?24:20,borderRadius:4}}function C(e){const{device:t}=e;return{width:t.isMobile?18:12,height:t.isMobile?18:12}}},27177:(e,t,i)=>{i.d(t,{Z:()=>b});i(21703),i(67294);var n=i(83355),o=i(31412),s=i(50906),r=i(75018),c=i(52275),a=i(31945),l=i(46457),d=i(43250),u=i(88632),p=i(96071),h=i(30278),g=i(85974),m=i(91190),M=i(78861),C=i(85893);class x extends n.Z{constructor(){super(...arguments),this.storeTypes={loginStore:g.Z,loginPermissionsStore:h.Z,loginModalStore:p.Z},this.renderAccountActionModal=(e,t)=>{let i,n;switch(e){case"add-account":i=(0,C.jsx)(o.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),n=(0,C.jsx)(o.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."});break;case"create-work":i=(0,C.jsx)(o.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.title",defaultMessage:"Create a work account"}),n=(0,C.jsx)(o.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.description",defaultMessage:"We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."});break;default:throw new Error(this.props.intl.formatMessage({defaultMessage:"Unexpected createType in SidebarSwitcherMultiAccount",id:"sidebarSwitcherMultiAccount.errorMessage"}))}return(0,C.jsx)(l._,{loginModalStore:this.stores.loginModalStore,loginStore:this.stores.loginStore,title:i,description:n,disableLoginLink:this.props.disableLoginLink,className:d.zYS,redirectURL:this.props.redirectURL,onDismiss:t})},this.supportsNativeHomeOnPhone=()=>{const{mobileNative:e}=this.environment;return(null==e?void 0:e.supportsNativeHomeOnPhone())||!1},this.getAccountActionStyle=()=>{const{device:e}=this.environment;return{display:"flex",color:this.theme.mediumTextColor,whiteSpace:"nowrap",fontSize:e.isMobile?16:12}}}willMount(e){super.willMount(e);const{loginStore:t}=this.stores;"email"===t.state.loginType&&this.environment.device.isMobile&&t.setState({...t.state,loginType:"google"})}renderComponent(){const{online:e}=u.Z.state,{device:t}=this.environment,{createType:i}=this.props,n=this.supportsNativeHomeOnPhone();return t.isMobile?(0,C.jsx)(a.ZP,{popupType:a.Z4.SlideUp,hidesMobileNativeBottomBar:n,preventSlideUpTransition:n,buttonPopupStore:"add-account"===i?m.C:m.E,alignmentToOrigin:a.vR.Start,placementToOrigin:a.pO.Top,originGap:0,isFullWidthOnMobile:!0,render:e=>this.renderAccountActionModal(i,(()=>{this.supportsNativeHomeOnPhone()?r.navigateToHomeTab(this.environment,e.close):e.close()})),preventScaleTransition:!0,renderOrigin:t=>(0,C.jsx)(c.Z,{focused:!1,disabled:!e,title:this.renderMenuButtonLoginTitle(i),icon:this.props.icon,...t})}):(0,C.jsxs)("div",{onClick:()=>{e&&(s.D6i(this.environment,{createType:i}),M.Z.setState({...M.Z.getState(),createType:i}),this.stores.loginModalStore.setState({open:!0}))},children:[(0,C.jsx)(c.Z,{focused:!1,disabled:!e,title:this.renderMenuButtonLoginTitle(i),icon:this.props.icon}),this.renderAccountActionModal(i)]})}renderMenuButtonLoginTitle(e){switch(e){case"create-work":return(0,C.jsx)("div",{style:this.getAccountActionStyle(),children:(0,C.jsx)(o.FormattedMessage,{defaultMessage:"Create work account",id:"sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label"})});case"add-account":return(0,C.jsx)("div",{style:this.getAccountActionStyle(),children:(0,C.jsx)(o.FormattedMessage,{defaultMessage:"Add another account",id:"sidebarSwitcherMultiAccount.addAccountButton.label"})})}}}x.displayName="SidebarSwitcherLoginModal";const b=(0,o.injectIntl)(x)},77062:(e,t,i)=>{i.d(t,{Z:()=>C});i(67294);var n=i(83355),o=i(480),s=i(47453),r=i(98519),c=i(64921),a=i(5145),l=i(31278),d=i(26388),u=i(64369),p=i(39849),h=i(87279),g=i(4023),m=i(85893);class M extends n.Z{renderComponent(){const{device:e}=this.environment,{id:t,onClick:i,focused:n,isAddButton:o,title:s,caption:l,shortcut:p,tooltipMessage:h,disableTooltip:M,disabled:C,showDragHandle:b}=this.props,S=this.environment.device.isMobile,f=this.props.isCheck;return(0,m.jsx)(d.Z,{renderTooltip:()=>h,disableTooltip:M,placement:g.u.Bottom,render:t=>(0,m.jsxs)(c.Z,{...t,mobileFeedback:this.environment.device.isMobile,onClick:i,hovered:n,disabled:C,style:this.getStyle(),children:[b&&(0,m.jsx)(a.ZP,{iconSize:12,style:{marginLeft:-6,marginRight:4,visibility:this.props.isAddButton?"hidden":"visible"}}),o?this.renderAddIcon():(0,m.jsx)(x,{id:this.props.id,icon:this.props.icon,spaceName:this.props.spaceName,unreadMentions:this.props.unreadMentions}),(0,m.jsxs)("div",{style:{marginLeft:12,marginRight:p||f?12:0,minWidth:0},children:[(0,m.jsx)(u.Z,{className:"notranslate",isMobile:e.isMobile,children:s}),l&&(0,m.jsx)(u.Z,{isSmall:!0,isMobile:e.isMobile,children:l})]}),f&&(0,r.k)({width:14,height:14,marginLeft:"auto"}),this.props.right,p&&!S&&!f&&(0,m.jsx)("div",{style:this.getShortcutStyle(),children:p})]})},`sidebarswitchermenuitem-tooltip-${t}`)}renderAddIcon(){const e=this.environment.device.isMobile?36:32;return(0,m.jsx)("div",{style:{...this.getIconWrapStyle(),width:e,height:e},children:this.getPlusIcon()})}getStyle(){const e=this.environment.device.isMobile,{WindowSizeStore:t}=this.environment,{disabled:i,removeDefaultMargin:n}=this.props,o=n?0:4;return{display:"flex",alignItems:"center",lineHeight:"120%",width:0===o?"100%":`$calc(100% - ${2*o}px)`,marginLeft:o,marginRight:o,borderRadius:4,paddingTop:e?8:4,paddingBottom:e?8:4,paddingLeft:e?t.getSafePaddingLeftCSS(16):14,paddingRight:e?t.getSafePaddingRightCSS(16):14,...e&&{boxShadow:`0 1px 0 ${this.theme.regularDividerColor}`},marginBottom:n?0:1,fontSize:e?16:14,...e&&{background:this.theme.popoverBackground},height:e?54:44,...this.props.isAddButton&&!e&&{boxShadow:"none",marginBottom:0},...i&&{opacity:.4}}}getPlusIcon(){return(0,s.R)({flexGrow:0,flexShrink:0,width:16,height:16,fill:this.theme.popoverBackground})}getIconWrapStyle(){return{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:this.theme.lightIconColor,borderRadius:4,flexShrink:0}}getShortcutStyle(){return{color:this.theme.lightTextColor,fontSize:12,whiteSpace:"nowrap",marginLeft:"auto",flexShrink:0}}}M.displayName="SidebarSwitcherMenuItem",M.contextTypes={...h.mw,...n.w},M.dragHandleEffectiveWidth=16;const C=M;function x(e){let{id:t,icon:i,spaceName:n,unreadMentions:s}=e;window.__c={n:"Icon"};const r=(0,o.O7)().device.isMobile;return(0,m.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,m.jsxs)("div",{style:{position:"relative"},children:[t&&(0,m.jsx)(l.Z,{disabled:!0,icon:i,isEmptyPage:!1,title:n,size:r?36:32,isLarge:!0}),(0,m.jsx)(p.Z,{color:p.Z.Color.Red,count:s,style:{position:"absolute",top:-5,right:-5}})]})})}},29741:(e,t,i)=>{i.d(t,{LP:()=>oe,ZP:()=>ie,Ax:()=>se,rR:()=>ge,bM:()=>he});i(57658);var n=i(67294),o=i(480),s=i(86628),r=i(24405),c=i(16691),a=i(47453),l=i(72126),d=i(606),u=i(89101),p=i(23867),h=i(77858),g=i(66079),m=i(31412),M=i(87586),C=i(86488),x=i(50906),b=i(97977),S=i(70782),f=i(55081),v=i(97852),w=i(88632),Z=i(62967);const y=(0,m.defineMessages)({joinOrCreateWorkspace:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"},logOut:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label",defaultMessage:"Log out"}});function j(e){return(0,Z.cN)({key:"join or create a workspace",displayName:y.joinOrCreateWorkspace,analyticsName:y.joinOrCreateWorkspace.defaultMessage,svg:C.p,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;v.Z.reset(),i.currentUser.id!==e?S.x({environment:i,newCurrentUserId:e}).then((e=>{f.xN(e)})):f.xN(i)}})}function A(e){return(0,Z.cN)({key:"log out of a single account",displayName:y.logOut,analyticsName:y.logOut.defaultMessage,svg:M.B,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;const{online:n}=w.Z.state;n&&(b.logoutSingleAccount({environment:i,userId:e}),x.HYP(i))}})}var k=i(29974),I=i(39699),V=i(64921),L=i(52275),H=i(79131),T=i(88198),P=i(16354),N=i(78140),O=i(32163),B=i(40721),U=i(72495),R=i(1101),W=i(14694),_=i(28125),F=i(87279),E=i(38755),D=i(5162),K=i(80444),z=i(24042),$=i(81236),G=i(26350),Y=i(32856),J=i(24646),q=i(19034),Q=i(78861),X=i(27177),ee=i(77062),te=i(85893);function ie(e){window.__c={n:"SidebarSwitcherMultiAccountPopup"};const{parent:t,redirectURL:i,disableLoginLink:n,onSpaceClick:s,loginStore:r,loginPermissionsStore:c}=e;let a;const l=(0,o.O7)(),d=(0,o.Fy)(),u=Q.Z.getUserIds(l),p=(0,te.jsx)(re,{redirectURL:i,disableLoginLink:n,loginStore:r,loginPermissionsStore:c});return a=d.isMobile?{menuType:F.og.Modal,title:(0,te.jsx)(m.FormattedMessage,{defaultMessage:"Accounts & Workspaces",id:"sidebarSwitcherMultiAccount.mobileMenu.title"}),right:(0,te.jsx)(B.DoneMenuText,{}),onClickRight:t.close}:{menuType:F.og.Popup,minWidth:270,maxWidth:360,footer:p},(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(Y.D,{experimentId:"quick_workspace_creation",groups:{on:(0,te.jsx)(ne,{})}}),(0,te.jsxs)(N.Z,{...a,children:[u.map(((e,t)=>(0,te.jsx)(oe,{userId:e,isLastUser:t===u.length-1,onSpaceClick:s},e))),d.isMobile&&p]})]})}function ne(){window.__c={n:"CreateOrJoinButton"};const e=(0,o.O7)(),t=(0,r.yK)((e=>({button:{boxShadow:`0 -1px 0 ${e.regularDividerColor}`},sidebarItem:{color:e.mediumTextColor,height:45},plusIconContainer:{display:"flex",alignItems:"center",justifyContent:"center"},plusIcon:{fill:e.mediumIconColor,width:16,height:16}})),[]);return(0,te.jsx)(V.Z,{onClick:()=>function(e){v.Z.reset(),f.xN(e),x.iSD(e)}(e),style:t.button,children:(0,te.jsx)(W.Z,{style:t.sidebarItem,left:(0,te.jsx)("div",{style:t.plusIconContainer,children:(0,a.R)(t.plusIcon)}),children:(0,te.jsx)(m.FormattedMessage,{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"})})})}function oe(e){window.__c={n:"UserSpaceViewList"};const{userId:t,isLastUser:i,onSpaceClick:a,disableAccountActions:d,hideShortcuts:u}=e,h=(0,o.O7)(),g=(0,o.Fy)(),M=(0,r.yK)((e=>({menuListMobile:{paddingTop:10},menuListNotLast:{borderBottom:`1px solid ${e.lightDividerColor}`}})),[]),C=(0,s.VK)((()=>[...Q.Z.getSpaceViewStores(h,t).map((e=>e.pointer)).map((e=>({id:e.id,spaceId:(0,p.C)(e.spaceId)}))).map(c.vY),"create-workspace-row"]),[h,t]),{currentUserRootStore:b,currentSpaceStore:S}=(0,s.VK)((()=>K.default.state),[]),{isElectronUsingCommandNumber:f}=(0,s.VK)((()=>z.Z.state),[]),v=(0,s.VK)((()=>Q.Z.getSpaceViewStores(h,t)),[h,t]),Z=(0,s.VK)((()=>Q.Z.getAllSpaceViewStores(h)),[h]),y=(0,m.useIntl)(),j=(0,s.VK)((()=>{if(!b||!S)return[];const e=[];for(const[i,n]of v.entries()){const i=n.getSpaceStore();if(i){const o=t===b.id&&i.id===S.id,{results:s}=q.Z.state,r=s.find((e=>e.spaceId===i.id)),c=l.cx(Z,(e=>e.id===n.id))+1,d=(0,E.rn)(h,i),p=he(h,y,i),m=ge(h,y,i);e.push({key:n.id,render:e=>{const{online:n}=w.Z.state,s=!ae({userId:t,environment:h})&&!g.isMobile;return(0,te.jsx)(ee.Z,{...e,id:i.id,icon:(0,E.Wd)(h,i),spaceName:d,title:p,caption:m,isCheck:o,unreadMentions:t===h.currentUser.id&&r&&r.spaceId!==S.id&&r.unread.mentions>0?r.unread.mentions:void 0,showDragHandle:s,shortcut:u?void 0:me({isElectronMac:g.isElectronMac,isElectronUsingCommandNumber:f,shortcutIndex:g.isElectron?c:void 0}),disabled:!n&&h.currentUser.id!==t,disableTooltip:!0})},action:async e=>{let{event:t}=e;ue(),o||await a({event:t,spaceViewStore:n}),x.sos(h)}})}}return e}),[Z,S,b,g.isElectron,g.isElectronMac,g.isMobile,h,u,y,f,a,v,t]),A=0===j.length?[]:[{key:"spaces",render:e=>(0,te.jsx)(U.Z,{...e,disableMobilePadding:!0,topBorder:g.isMobile,children:g.isMobile?e.children:(0,te.jsx)(n.Fragment,{children:(0,te.jsx)(H.ZP,{direction:"vertical",keys:C,renderKey:t=>e.children[C.indexOf(t)],onDrop:pe({userId:t,environment:h}),style:{marginBottom:1}})})}),items:j}];return A.length>0?(0,te.jsxs)(n.Fragment,{children:[(0,te.jsx)(ce,{userId:t,disableAccountActions:d}),(0,te.jsx)("div",{style:g.isMobile?M.menuListMobile:i?{}:M.menuListNotLast,children:(0,te.jsx)(O.Z,{type:O.i.Vertical,sections:A,initialFocus:void 0})})]},t):null}function se(e){const{isMobile:t,theme:i}=e;return t?{}:{backgroundColor:i.sidebarSwitcherFooterBackground}}function re(e){window.__c={n:"Footer"};const{redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:c}=e,a=(0,o.Fy)().isMobile,l=(0,r.yK)((e=>({footer:se({isMobile:a,theme:e})})),[a]),d=(0,o.O7)(),u=(0,s.VK)((()=>Q.Z.hasAtLeastOneTeamPlan(d)),[d]),p=(0,te.jsxs)(te.Fragment,{children:[!u&&(0,te.jsx)(X.Z,{createType:"create-work",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:c}),!(0,D.Y)("supportsNativeHome")&&(0,te.jsx)(X.Z,{createType:"add-account",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:c})]});return(0,te.jsxs)("div",{style:l.footer,children:[(0,te.jsxs)(U.Z,{topBorder:!0,children:[_.k(d)&&p,(0,te.jsx)(le,{})]}),!a&&(0,te.jsx)(U.Z,{topBorder:!0,children:(0,te.jsx)(de,{})})]})}function ce(e){window.__c={n:"AccountHeader"};const{userId:t,disableAccountActions:i=!1}=e,{online:n}=(0,s.VK)((()=>w.Z.state),[]),r=(0,o.O7)(),c=(0,s.VK)((()=>Q.Z.getUserEmailAddress(r,t)),[r,t]);if(!c)return null;const a=i?[]:[j(t),A(t)];return(0,te.jsx)(R.Z,{emailAddress:c,userId:t,disabled:!n||i,accountActions:a})}function ae(e){const{userId:t,environment:i}=e;return 1===(t?Q.Z.getSpaceViewStores(i,t):Q.Z.getAllSpaceViewStores(i)).length}function le(){window.__c={n:"LogoutAll"};const e=(0,s.VK)((()=>w.Z.state.online),[]),t=(0,o.O7)(),i=t.device.isMobile,c=(0,s.VK)((()=>Q.Z.getUserIds(t)),[t]).length>1,a=(0,r.yK)((e=>({accountAction:{display:"flex",color:e.mediumTextColor,whiteSpace:"nowrap",fontSize:i?16:12,paddingLeft:0}})),[i]),l=(0,n.useCallback)((()=>{const{online:e}=w.Z.state;e&&(v.Z.setState({...v.Z.state,open:!1}),x.HYP(t),b.logout(t))}),[t]);return(0,te.jsx)(L.Z,{onClick:l,focused:!1,disabled:!e,title:(0,te.jsx)("div",{style:a.accountAction,children:(0,te.jsx)(m.FormattedMessage,{defaultMessage:"{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",id:"sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label",values:{isLoggedIntoMultipleAccounts:c}})})})}function de(){window.__c={n:"DownloadApps"};const e=(0,o.O7)(),t=(0,o.Fy)(),i=t.isElectron,s=(0,r.yK)((e=>({title:{color:e.mediumTextColor,fontSize:12}})),[]),c=(0,n.useCallback)((()=>{ue(),t.isWindows?x.dyr(e,{from:"sidebar",app_platform:"windows"}):x.dyr(e,{from:"sidebar",app_platform:"mac"})}),[t.isWindows,e]),a=(0,n.useCallback)((()=>{ue(),x.YY6(e,{from:"sidebar"})}),[e]);return i?(0,te.jsx)(P.Z,{external:!0,href:u.AR.mobile,onClick:a,children:(0,te.jsx)(L.Z,{focused:!1,title:(0,te.jsx)("div",{style:s.title,children:(0,te.jsx)(m.FormattedMessage,{defaultMessage:"Get iOS & Android app",id:"sidebarMultiSwitcher.desktopAppGetMobileApp.prompt"})})})}):(0,te.jsx)(P.Z,{external:!0,href:u.AR.desktop,onClick:c,children:(0,te.jsx)(L.Z,{focused:!1,title:(0,te.jsx)("div",{style:s.title,children:t.isWindows?(0,te.jsx)(m.FormattedMessage,{defaultMessage:"Get Windows app",id:"sidebarMultiSwitcher.windowsAppButton.text"}):(0,te.jsx)(m.FormattedMessage,{defaultMessage:"Get Mac app",id:"sidebarMultiSwitcher.macAppButton.text"})})})})}function ue(){v.Z.setState({...v.Z.state,open:!1})}function pe(e){const{userId:t,environment:i}=e;return function(e){const n=e.filter((e=>"create-workspace-row"!==e)).map(c.Vg).map((e=>d.dr.fromSpaceShardRecordId(e,h.zU))),o=new G.r9(i,{table:g.dx,id:t},{userId:t});I.createAndCommit({userAction:"SidebarSwitcherMultiAccount.handleDraggableListDrop",environment:i,perform:e=>{k._Q({userRootStore:o,transaction:e,spaceViewIds:n.map((e=>e.id)),spaceViewPointers:n})},userId:t}),x.Q4L(i,{workspace_count:e.length})}}function he(e,t,i){const n=(0,E.rn)(e,i),o=$.Z.getPublicSpaceData(e,i.id);return o&&"none"===o.role?(0,te.jsxs)("div",{style:{display:"flex"},children:[(0,te.jsx)("span",{style:{flexShrink:1,textOverflow:"ellipsis",overflow:"hidden"},children:n}),(0,te.jsx)("div",{style:{marginLeft:"8px",alignSelf:"center"},children:(0,te.jsx)(T.b,{})})]}):n}function ge(e,t,i){const n=$.Z.getPublicSpaceData(e,i.id);if(!n||"none"===n.role)return;const o=(0,J.em)(n.subscriptionTier),s=t.formatNumber(n.memberCount),r=t.formatMessage(o);return t.formatMessage(J.js.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:s,planType:r})}function me(e){if(e.shortcutIndex&&!(e.shortcutIndex>9))return e.isElectronMac?e.isElectronUsingCommandNumber?`⌃⇧${e.shortcutIndex}`:`⌘${e.shortcutIndex}`:e.isElectronUsingCommandNumber?`alt+shift+${e.shortcutIndex}`:`ctrl+${e.shortcutIndex}`}},30278:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(49085);class o extends n.default{getInitialState(){return{contacts:!1}}}const s=o},32856:(e,t,i)=>{i.d(t,{D:()=>s});var n=i(86628),o=i(77080);function s(e){window.__c={n:"ExperimentSwitch"};const{experimentId:t,groups:i,disableExposureLogging:s}=e;return i[function(e){const{experimentId:t,disableExposureLogging:i,defaultGroup:s}=e;return(0,n.VK)((()=>o.default.getEligibleGroup({experimentId:t,defaultGroup:s??"control",disableExposureLogging:i})),[t,i,s])}({experimentId:t,disableExposureLogging:s})]}},87586:(e,t,i)=>{i.d(t,{B:()=>s});i(67294);var n=i(45238),o=i(85893);const s=(0,n.I)("circleCross",{viewBox:"0 0 30 30",svg:(0,o.jsx)("path",{d:"M15 28.354c7.305 0 13.354-6.049 13.354-13.354 0-7.292-6.062-13.354-13.367-13.354C7.695 1.646 1.646 7.708 1.646 15c0 7.305 6.062 13.354 13.354 13.354zm0-2.226A11.075 11.075 0 013.885 15c0-6.166 4.922-11.128 11.102-11.128 6.18 0 11.128 4.962 11.141 11.128A11.078 11.078 0 0115 26.128zm-4.477-5.577a.99.99 0 00.746-.327l3.718-3.731 3.731 3.73c.197.197.445.328.747.328.576 0 1.047-.484 1.047-1.06a.979.979 0 00-.314-.747l-3.718-3.718 3.73-3.744c.223-.223.315-.445.315-.733 0-.59-.471-1.048-1.047-1.048-.275 0-.498.092-.72.315l-3.771 3.744-3.744-3.731c-.184-.21-.432-.301-.72-.301-.577 0-1.048.445-1.048 1.034a.97.97 0 00.314.733l3.719 3.731-3.719 3.732a.951.951 0 00-.314.733c0 .576.471 1.06 1.048 1.06z"})})},40462:(e,t,i)=>{i.d(t,{o:()=>s});i(67294);var n=i(45238),o=i(85893);const s=(0,n.I)("globe2",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},49364:(e,t,i)=>{i.d(t,{R:()=>s});i(67294);var n=i(45238),o=i(85893);const s=(0,n.I)("openTeam",{viewBox:"0 0 28 28",svg:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{d:"M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"})})})},86488:(e,t,i)=>{i.d(t,{p:()=>s});i(67294);var n=i(45238),o=i(85893);const s=(0,n.I)("squarePlus",{viewBox:"0 0 30 30",svg:(0,o.jsx)("path",{d:"M7.059 27.052H22.94c2.75 0 4.11-1.361 4.11-4.059V7.007c0-2.697-1.36-4.059-4.11-4.059H7.059c-2.736 0-4.111 1.349-4.111 4.059v15.986c0 2.71 1.375 4.06 4.11 4.06zm.026-2.108c-1.31 0-2.03-.694-2.03-2.055V7.112c0-1.362.72-2.056 2.03-2.056h15.83c1.296 0 2.029.694 2.029 2.056v15.777c0 1.361-.733 2.055-2.03 2.055H7.085zm7.895-3.758c.707 0 1.113-.484 1.113-1.243V16.08h4.111c.733 0 1.231-.392 1.231-1.086 0-.707-.471-1.113-1.23-1.113h-4.112V9.769c0-.759-.406-1.243-1.113-1.243-.694 0-1.073.51-1.073 1.243v4.112H9.822c-.773 0-1.257.405-1.257 1.112 0 .694.523 1.087 1.257 1.087h4.085v3.863c0 .733.38 1.243 1.073 1.243z"})})}}]);