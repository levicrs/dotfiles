"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6942],{28040:(e,t,s)=>{s.d(t,{i:()=>c});var i=s(26263),r=s(21202),n=s(80444),o=s(77080),a=s(26350),l=s(35057),d=s(54642);async function c(e){const{environment:t,sudoModeStore:s,pageBlockId:c}=e,g=s.state.privatePageStore&&s.state.privatePageStore.id===c;if(t.device.isMobile||g||s.state.loading||s.state.error)return;if(!o.default.checkGate("enable_get_private_page_info_endpoint"))return;const{currentSpaceStore:u}=n.default.state,h=null==u?void 0:u.canAdmin();if(!(c&&h&&u&&(0,l.wP)()))return;s.setState({...s.state,loading:!0});const m=u.id,p=await d.getPrivatePageInfo(t,{id:c});if("failed"===p.type)return void s.setState({...s.state,loading:!1,error:p.error});const f=p.data,v=new i.Z({name:"sudoModeActions.privatePageRecordCache"});for(const i of f)switch(i.table){case"block":case"collection":v.setRecord({pointer:{spaceId:m,table:i.table,id:i.value.id},userId:t.currentUser.id},{role:"editor",value:i.value});break;case"team":v.setRecord({pointer:{spaceId:m,table:i.table,id:i.value.id},userId:t.currentUser.id},{role:"editor",value:i.value})}const x=new a.G(t,{table:r.iU,id:c},{inMemoryRecordCache:v});x.inMemoryRecordCache.addCacheFallback(t.defaultRecordCache.inMemoryRecordCache),s.setState({...s.state,privatePageStore:x,loading:!1,error:void 0})}},6020:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Re});var i=s(67294),r=s(83355),n=s(13991),o=s(480),a=s(15145),l=s(8848),d=s(42875),c=s(69654),g=s(89971),u=s(60651),h=s(70954),m=s(62397),p=s(89101),f=s(23867),v=s(82990),x=s(31412),y=s(50906),S=s(90287),M=s(32603),j=s(97977),P=s(31304),b=s(75018),k=s(29974),C=s(28040),w=s(39634),A=s(28020),B=s(43250),I=s(33929),Z=s(28125),F=s(18514),R=s(77907),T=s(55081),E=s(10929),L=s(75538),q=s(28578),W=s(74948),N=s(80444),_=s(88632),U=s(80641),O=s(55899),D=s(33759),H=s(89403),G=s(96071),V=s(85974),z=s(5315),J=s(49085);class Y extends J.default{getInitialState(){return{isCreatingSpace:!1}}}const K=Y;var Q,$=s(72014),X=s(88923),ee=s(8675),te=s(42922),se=s(61519),ie=s(36488),re=s(16354),ne=s(84076),oe=s(63296),ae=s(89728),le=s(31278),de=s(64369),ce=s(36360),ge=s(67219),ue=s(42402),he=s(63780),me=s(46457),pe=s(12337),fe=s(54642),ve=s(33954),xe=s(87279),ye=s(61766),Se=s(1743),Me=s(74194),je=s(78140),Pe=s(50506),be=s(53437),ke=s(77137),Ce=s(85893);const we=(0,x.defineMessages)({requestAccessMessagePlaceholder:{defaultMessage:"Message (optional)",id:"requestAccessForm.messageInput.placeholder"}});function Ae(){return(0,Ce.jsx)(x.FormattedMessage,{defaultMessage:"Cancel",id:"requestAccessForm.cancelButton.label"})}class Be extends r.Z{constructor(){super(...arguments),this.storeTypes={requestAttempt:J.default.createClass(0),message:J.default.createClass(void 0),buttonPopupStore:ye.Z},this.renderPopup=()=>this.isPhone?(0,Ce.jsx)(je.Z,{menuType:xe.og.Modal,whiteBackground:!0,title:(0,Ce.jsx)(x.FormattedMessage,{id:"requestAccessForm.title.label",defaultMessage:"Request access"}),left:Ae(),onClickLeft:this.handleCloseClicked,right:(0,Ce.jsx)(x.FormattedMessage,{id:"requestAccessForm.mobileSend.label",defaultMessage:"Send"}),onClickRight:this.handleSendRequestClicked,children:(0,Ce.jsx)(Se.Z,{capture:!0,children:(0,Ce.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"stretch",alignItems:"stretch",width:"100%",height:"100%"},children:(0,Ce.jsx)(ke.Z,{request:this.stores.requestAttempt.state,performRequest:this.submitRequest,render:this.renderRequest})})})}):(0,Ce.jsx)(Se.Z,{capture:!0,children:(0,Ce.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evently",alignItems:"stretch",padding:"20px 28px 24px",width:"340px"},children:[(0,Ce.jsx)(ke.Z,{request:this.stores.requestAttempt.state,performRequest:this.submitRequest,render:this.renderRequest}),(0,Ce.jsx)(oe.Z,{onClick:this.handleCloseClicked,children:Ae()})]})}),this.renderRequest=(e,t,s)=>{const i=Boolean(0===this.stores.requestAttempt.state||s&&t&&t.error);return(0,Ce.jsxs)(Ce.Fragment,{children:[!this.isPhone&&(0,Ce.jsx)("div",{style:{fontSize:16,fontWeight:v.Z.fontWeight.semibold,marginBottom:16},children:(0,Ce.jsx)(x.FormattedMessage,{defaultMessage:"Request access",id:"requestAccessForm.sendRequestButton.title"})}),(0,Ce.jsx)(Me.Z,{format:this.isPhone?Me.Z.Format.Transparent:void 0,textarea:!0,value:this.stores.message.state||"",onChange:this.handleMessageChanged,disabled:!i,placeholder:this.props.intl.formatMessage(we.requestAccessMessagePlaceholder),style:{...this.isPhone?{...Be.mobileTextAreaStyle,padding:"16px"}:{...Be.marginBottomStyle,marginBottom:16,padding:"8px 12px",alignItems:"flex-start"}}}),!this.isPhone&&(0,Ce.jsx)(te.Z,{isLarge:!0,disabled:!i,onClick:this.handleSendRequestClicked,style:Be.marginBottomStyle,children:(0,Ce.jsx)(x.FormattedMessage,{defaultMessage:"Send request",id:"requestAccessForm.sendRequestButton.label"})}),(0,Ce.jsx)(Ze,{result:t})]})},this.submitRequest=async e=>{if(0===e)return;const t=this.stores.message.state,s="current-actor-to-block"===this.props.type?await fe.requestAccess(this.environment,{type:"current-actor-to-block",block:this.props.block,message:t}):await fe.requestAccess(this.environment,{type:"current-actor-to-space-via-team",teamId:this.props.teamId,message:t});return"success"!==s.type?{error:(0,ve.wf)(this.props.intl,s)}:(y.dUJ(this.environment),this.stores.buttonPopupStore.reset(),{value:!0})},this.handleSendRequestClicked=()=>{this.stores.requestAttempt.update((e=>e+1))},this.handleMessageChanged=e=>{this.stores.message.setState(e.target.value)},this.handleOpenClicked=()=>this.stores.buttonPopupStore.setState({open:!0}),this.handleCloseClicked=()=>this.stores.buttonPopupStore.setState({open:!1})}renderComponent(){const e=this.stores.requestAttempt.state>0;return(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)(te.Z,{isLarge:!0,disabled:e,onClick:this.handleOpenClicked,children:e?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.requestAccessButton.requested",defaultMessage:"Requested access"}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.requestAccessButton.label",defaultMessage:"Request access"})}),this.isPhone?(0,Ce.jsx)(be.ZP,{popupType:be.ZP.PopupType.SlideUp,open:this.stores.buttonPopupStore.state.open,render:this.renderPopup}):(0,Ce.jsx)(Pe.Z,{open:this.stores.buttonPopupStore.state.open,onDismiss:this.handleCloseClicked,render:this.renderPopup})]})}get isPhone(){return this.environment.device.isPhone}}Q=Be,Be.displayName="RequestAccessForm",Be.marginBottomStyle={marginBottom:10},Be.mobileTextAreaStyle={...Q.marginBottomStyle,width:"100%",height:"100%",padding:10,alignItems:"top",borderRadius:0};const Ie=(0,x.injectIntl)(Be);function Ze(e){let{result:t}=e;return t&&t.error?(0,Ce.jsx)("div",{style:{color:l.ZP.redWithAlpha(1),textAlign:"center",width:"100%"},children:t.error}):null}class Fe extends r.Z{constructor(){super(...arguments),this.didPerformAction=!1,this.storeTypes={store:K,sudoModeStore:ee.Z,inviteTargetsStore:O.ZP,loginModalStore:G.Z,loginStore:V.Z},this.handleHelpButtonClick=()=>{w.j({environment:this.environment,from:"page_error"})},this.handleGoBackClick=()=>{if(F.NW(this.environment))return void b.back(this.environment);const{currentUserRootStore:e,currentUserSettingsStore:t,currentSpaceViewStore:s}=N.default.state;e&&t?s?k.y3({environment:this.environment,spaceViewStore:s,userRootStore:e,userSettingsStore:t,pageVisitSource:a.tY.PageError}):k.L5({environment:this.environment,userRootStore:e,userSettingsStore:t,pageVisitSource:a.tY.PageError}):b.navigate({environment:this.environment,url:p._j.root,redirect:!0})},this.handleCreateAccountClick=async()=>{const{currentUserRootStore:e,currentUserStore:t}=N.default.state;e&&t&&(this.stores.store.setState({...this.stores.store.state,isCreatingSpace:!0}),await T.xN(this.environment),this.stores.store.setState({...this.stores.store.state,isCreatingSpace:!1}))},this.handleReturnToOnboarding=()=>{const e=L.default.state;e.isOnboarding?E.n0(e)?T.I1(this.environment,{type:"new-user",disableRedirectUrl:!0}):E.y7(e)?T.I1(this.environment,{type:"create-or-join",disableRedirectUrl:!0}):(L.default.reset(),b.navigate({environment:this.environment,url:p._j.root})):(L.default.reset(),b.navigate({environment:this.environment,url:p._j.root}))},this.handleContentClassificationProceed=()=>{const{mainEditorCurrentBlockStore:e}=N.default.state;e&&(U.Z.bypassPage(e.id),y.ux6(this.environment))}}willMount(){X.default.state.open&&P.E(X.default.state.presenceStore,this.environment,$.jx,X.default.state.target),P.E(N.default.state.presenceStore,this.environment,$.$g,N.default.state.mainEditorCurrentBlockStore),W.cancelSidebarInitialRenderLog()}didMount(){if(super.didMount(),M.setInitialRenderCompleted(),this.environment.device.isElectron||this.environment.mobileNative){var e;const t=null===(e=this.props.publicPageData)||void 0===e?void 0:e.requireInterstitial;if(t){const e=t+window.location.hash;b.navigateToExternalURL({environment:this.environment,url:e}),b.back(this.environment)}}}willMountOrUpdate(){var e;C.i({environment:this.environment,sudoModeStore:this.stores.sudoModeStore,pageBlockId:null===(e=N.default.state.mainEditorCurrentBlockStore)||void 0===e?void 0:e.id})}renderComponent(){const{publicPageData:e}=this.props;if(!this.didPerformAction){if(_.Z.state.online){if("teamsInvite"===this.props.route.name&&qe(this.environment))return this.renderWorkspaceNoAccess({data:e,source:"teamsInvite",canJoinSpace:!0});if(e&&"onboarding"===this.props.route.name)return this.renderWorkspaceNoAccess({data:e,source:"onboarding",canJoinSpace:!1});if(null!=e&&e.spaceName){var t;const{currentUserRootStore:s,mainEditorCurrentBlockStore:i}=N.default.state,r=null==i||null===(t=i.getModel())||void 0===t?void 0:t.isNonverifiedContentClassification();if(r&&e.requireInterstitial)return this.render404();if(e.requireInterstitial)return this.renderIncorrectDomainInterstitialBlock({href:e.requireInterstitial+window.location.hash,urlToDisplay:e.requireInterstitial});if(r)return this.renderContentClassificationBlock();if(qe(this.environment)){if(!s||!s.isReady())return;const t=s.getSpaceViewStores();if(!t.every((e=>e.isReady())))return;return t.find((t=>t.getSpaceId()===e.spaceId))&&"page"===this.props.route.name?this.renderWorkspacePrivatePageNoAccess(e):e.canJoinSpace?"space"===this.props.route.name?(this.performJoinWorkspaceRedirect(e),null):this.renderWorkspaceNoAccess({data:e,source:"workspace",canJoinSpace:!0}):this.renderWorkspaceNoAccess({data:e,source:"workspace",canJoinSpace:!1})}return e.requireLogin,this.renderLoggedOutWorkspace(e)}return this.render404()}return this.renderOffline()}}renderOffline(){return We("offline",this.environment),y.DCH(this.environment,{type:"page_error"}),(0,Ce.jsx)("div",{style:Ne(this.environment),children:(0,Ce.jsxs)("div",{style:this.getGreetingStyle(),children:[(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.offlineError.message",defaultMessage:"Oops, you seem to be offline. Please go online to view this page."}),this.renderLoggedInFooter()]})})}renderContentClassificationBlock(){const e=qe(this.environment);return We("content_classification_block",this.environment),(0,Ce.jsxs)("div",{style:Ne(this.environment),children:[(0,Ce.jsx)(pe.Z,{type:pe.Z.Type.Unsafe}),(0,Ce.jsx)("div",{style:this.getGreetingStyle(),children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.unsafePageError.title",defaultMessage:"This page has been flagged as unsafe"})}),(0,Ce.jsx)(de.Z,{isSmall:!1,isSecondaryColor:!0,isMultiline:!0,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.unsafePageError.message",defaultMessage:"This page may contain spam, phishing, illegal, or inappropriate content. If you received this link from an unknown source, we suggest you to close this tab. <proceedanywaylink>Proceed anyway</proceedanywaylink>",values:{proceedanywaylink:e=>(0,Ce.jsx)(ue.Z,{onClick:this.handleContentClassificationProceed,children:e})}})}),e&&this.renderNavigateButton("blue"),!e&&this.renderLoggedOutFooter()]})}renderIncorrectDomainInterstitialBlock(e){let{href:t,urlToDisplay:s}=e;return We("incorrect_domain_interstitial_block",this.environment),(0,Ce.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%"},children:[(0,Ce.jsxs)("div",{style:{...Ne(this.environment),height:"100%"},children:[(0,Ce.jsx)("div",{style:{...this.getGreetingStyle(),maxWidth:"240px"},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.publicDomainInterstitial.title",defaultMessage:"Continue to external site by following the link below"})}),(0,Ce.jsx)(de.Z,{isSmall:!1,isSecondaryColor:!0,isMultiline:!0,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,Ce.jsx)(re.Z,{href:t,external:!1,style:{textDecoration:"underline",color:l.ZP.blue,overflowWrap:"anywhere"},children:s})})]}),(0,Ce.jsx)("div",{style:{position:"fixed",width:"100%",bottom:0},children:this.renderMinimalInterstitialFooter()})]})}renderWorkspaceNoAccess(e){const{data:t,source:s,canJoinSpace:i}=e;if("onboarding"===s)We("onboarding_error",this.environment);else if("teamsInvite"===s)We("team_invite_no_access",this.environment);else if(t)return We("team_no_access",this.environment),this.renderRequestAccessLoggedInPrivatePage(t);return(0,Ce.jsxs)("div",{style:Ne(this.environment),children:[this.environment.device.isElectron&&(0,Ce.jsx)(ce.Z,{title:I.default.getIntl().formatMessage({defaultMessage:"No access",id:"errorPage.workspaceNoAccess.title"})}),(0,Ce.jsx)("div",{children:Te()}),(0,Ce.jsx)("div",{style:this.getGreetingStyle(),children:i?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.notInWorkspace.message",defaultMessage:"You are not in this workspace."}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.accessNotAllowed.message",defaultMessage:"You do not have access to this page."})}),"teamsInvite"===s?this.renderRequestSpaceAccessActions():this.renderNavigateButton("blue",i?t:void 0),this.renderLoggedInFooter()]})}renderWorkspacePrivatePageNoAccess(e){return We("team_page_no_access",this.environment),this.renderRequestAccessLoggedInPrivatePage(e)}getPrivatePageTitle(){const e=this.stores.sudoModeStore.state.privatePageStore;if(!this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()||!e)return;const t=e.getModel();if(!t)return;const s=t.getRenderTitle({getRecordModel:e.getRecordModel,userTimeZone:(0,d.r)(),intl:I.default.getIntl()}),i=t.getRenderIcon({getRecordModel:e.getRecordModel});return(0,Ce.jsxs)(Ce.Fragment,{children:[i&&(0,Ce.jsx)(le.Z,{isEmptyPage:!0,disabled:!0,icon:i,size:24,style:{display:"inline-block",marginRight:4}}),s&&(0,Ce.jsx)("span",{children:s})]})}renderChangingPermissionsHeading(){var e;const t=this.getPrivatePageTitle(),s=null===(e=N.default.state.currentSpaceStore)||void 0===e?void 0:e.getName();return(0,Ce.jsxs)("div",{style:{background:this.theme.cardBackground,borderRadius:4,padding:18,margin:"24px auto 0",width:400},children:[(0,Ce.jsx)("div",{style:{...this.getGreetingStyle(),fontWeight:v.Z.fontWeight.semibold,marginBottom:6},children:t?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.changePermissions.titleWithPageName",defaultMessage:"Change permissions for {pageTitle}",values:{pageTitle:t}}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.changePermissions.title",defaultMessage:"Change permissions for this page"})}),(0,Ce.jsx)(de.Z,{isMultiline:!0,style:{textAlign:"center"},children:s?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.workspaceOwner.changePermissions.descriptionWithSpaceName",defaultMessage:"As a workspace owner for <b>{spaceName}</b>, you can change the permissions of this page.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,Ce.jsx)("b",{children:t})},spaceName:s}}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.workspaceOwner.changePermissions.description",defaultMessage:"As an owner of this workspace, you can change the permissions of this page.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,Ce.jsx)("b",{children:t})}}})})]})}renderRequestAccessLoggedInPrivatePageHeading(e){const t=this.getPrivatePageTitle(),s=e.canRequestAccess;return(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)("div",{children:Te()}),(0,Ce.jsx)("div",{style:{...this.getGreetingStyle(),fontWeight:v.Z.fontWeight.semibold,marginBottom:6},children:s?t?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.canRequestAccess.titleWithPageName",defaultMessage:"No access to {pageTitle}",values:{pageTitle:t}}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.canRequestAccess.title",defaultMessage:"No access to this page"}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.noAccess.title",defaultMessage:"Page not found"})}),(0,Ce.jsx)("div",{style:{...this.getGreetingStyle(),color:this.theme.mediumTextColor,fontWeight:v.Z.fontWeight.regular,lineHeight:1.4},children:s?(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.canRequestAccess.message",defaultMessage:"You can access this page if someone approves your request."}):(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.cannotRequestAccess.message",defaultMessage:"Either this page doesn't exist or you don't have permission to access it."})})]})}renderRequestAccessLoggedInPrivatePage(e){const t=this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock&&this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.changePermissionsEnabled;return(0,Ce.jsxs)("div",{style:Ne(this.environment),children:[t?this.renderChangingPermissionsHeading():(0,Ce.jsxs)(Ce.Fragment,{children:[this.renderRequestAccessLoggedInPrivatePageHeading(e),this.renderRequestPageAccessActions()]}),this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()?this.renderPageBlockPermissionsMenu():null,this.renderLoggedInFooter()]})}renderLoggedOutWorkspace(e){var t,s;const{device:r,WindowSizeStore:n}=this.environment,o=r.isMobile||r.isMobileBrowser||n.state.width<852,a=null===(t=H.Z.getState())||void 0===t?void 0:t.inviteeEmail,d=null===(s=H.Z.getState())||void 0===s?void 0:s.inviterName,u=D.Z.isTemporaryPasscode()&&a===D.Z.state.email,h=(0,l.gh)({theme:"light"});return We("team_login",this.environment),(0,Ce.jsx)(ie.Z,{capture:!0,render:t=>(0,Ce.jsx)(ge.Z,{analyticsName:"team_login",hideNavItems:!0,hideNotificationBanner:!0,hideFooter:!0,children:(0,Ce.jsxs)("div",{style:_e(this.environment),...t,children:[this.renderTitle({isElectron:this.environment.device.isElectron,publicPageData:e,showInvitationVersion:u,inviterName:d,greetingStyle:{color:h.regularTextColor},iconBoxInitialStyle:{background:h.regularDividerColor,color:h.mediumTextColor}}),u?(0,Ce.jsx)("div",{style:{fontSize:"18px",fontWeight:400,width:"100%",maxWidth:358,textAlign:"center",color:"#535353",lineHeight:"145.34%",opacity:.78,marginBottom:24},children:(0,Ce.jsx)(Le,{inviteeEmail:a})}):null,(0,Ce.jsx)(he.Z,{emailLabelType:"email",style:Fe.loginStyle,emailPasscodePlaceholderType:u?"paste_code":"enter_code",emailInputAutoFocus:!0,from:"pageError",loginStore:D.Z,showInvitationVersion:u,isSignup:u,showMobileLayout:o,themeOverride:h}),r.isMobile&&!r.isMobileNative&&!u&&(0,Ce.jsxs)(i.Fragment,{children:[(0,Ce.jsx)("div",{style:{height:1,width:"100vw",background:this.theme.regularDividerColor,marginTop:36,marginBottom:36}}),(0,Ce.jsxs)(te.Z,{style:{width:280},isLarge:!0,onClick:()=>{b.openInNativeApp({url:window.location.href,environment:this.environment})},children:[r.isIOS?(0,c.o)(Fe.storeIconStyle):(0,g.G)(Fe.storeIconStyle),(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.openInMobileAppButton.label",defaultMessage:"Open in mobile app"})]}),(0,Ce.jsx)(ne.Z,{href:r.isIOS?p._j.appStore:p._j.playStore,external:!0,innerStyle:{marginTop:16},children:(0,Ce.jsx)(de.Z,{isSmall:!0,style:{textDecoration:"underline",fontSize:14,color:h.mediumTextColor},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.downloadMobileAppButton.label",defaultMessage:"Get mobile app"})})})]}),this.renderLoggedOutFooter({iconStyle:{fill:h.mediumTextColor},style:{color:h.mediumTextColor},pressedStyle:{background:h.buttonPressedBackground}})]})})})}render404(){const{device:e}=this.environment,t=qe(this.environment);return We("404",this.environment),(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)(Ue,{}),(0,Ce.jsxs)("div",{style:{..._e(this.environment),marginTop:e.isMobile?0:"12vh",justifyContent:"start"},children:[(0,Ce.jsx)(pe.Z,{type:pe.Z.Type.NotFound}),(0,Ce.jsx)("div",{style:this.getGreetingStyle(),children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.contentDoesNotExist.title",defaultMessage:"This content does not exist"})}),!t&&this.renderLoggedOutFooter(),t&&this.renderNavigateButton("blue"),(0,Ce.jsx)(Ee,{}),(0,Ce.jsx)(de.Z,{isSmall:!0,style:{textAlign:"center"},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.contentDoesNotExist.message",defaultMessage:"Having trouble? <helplink>Message support</helplink>",values:{helplink:e=>(0,Ce.jsx)(ue.Z,{onClick:this.handleHelpButtonClick,children:e})}})})]})]})}renderWorkspaceOwnerPermissionsMenu(){return this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.privatePageStore&&!this.stores.sudoModeStore.state.changePermissionsEnabled?(0,Ce.jsxs)("div",{style:{background:this.theme.cardBackground,borderRadius:4,padding:18,margin:24,width:400},children:[(0,Ce.jsx)(de.Z,{isMultiline:!0,style:{textAlign:"center"},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.workspaceOwner.canChangePermissionsMessage",defaultMessage:"As a <b>workspace owner</b>, you can change the permissions of this page to add yourself or others. Any changes will appear in the audit log.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,Ce.jsx)("b",{children:t})}}})}),(0,Ce.jsxs)(oe.Z,{style:{fontWeight:v.Z.fontWeight.medium,justifyContent:"center",margin:"18px auto 12px"},onClick:()=>this.stores.sudoModeStore.setState({...this.stores.sudoModeStore.state,changePermissionsEnabled:!0}),children:[(0,m.I)({width:16,height:16,marginRight:6}),(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.workspaceOwner.canChangePermissionsMessageButton",defaultMessage:"Change permissions"})]})]}):null}renderPageBlockPermissionsMenu(){return this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.privatePageStore&&this.stores.sudoModeStore.state.changePermissionsEnabled?(0,Ce.jsx)("div",{style:{textAlign:"left",borderRadius:4,background:this.theme.modalBackground,position:"relative",boxShadow:this.theme.mediumBoxShadow,width:470,margin:"24px auto"},children:(0,Ce.jsx)(R.LazyShareMenuContainer,{store:this.stores.sudoModeStore.state.privatePageStore,sudoModeStore:this.stores.sudoModeStore,inviteTargetsStore:this.stores.inviteTargetsStore,location:"no_access_page",onClose:()=>q.ZP.reset()})}):null}renderRequestPageAccessActions(){const{publicPageData:e}=this.props;if(!e)return this.renderNavigateButton("blue");if(!e.canRequestAccess)return this.renderNavigateButton("blue");const{mainEditorCurrentBlockStore:t}=N.default.state;return t?(0,Ce.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,Ce.jsx)("div",{style:{marginTop:8},children:(0,Ce.jsx)(Ie,{type:"current-actor-to-block",block:{id:t.id,spaceId:(0,f.C)(t.pointer.spaceId)}})}),(0,Ce.jsx)("div",{style:{width:10,height:10}}),this.renderNavigateButton("white")]}):this.renderNavigateButton("blue")}renderRequestSpaceAccessActions(){if("teamsInvite"!==this.props.route.name)return this.renderNavigateButton("blue");const{teamId:e}=this.props.route;return e?(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)("div",{style:{...this.getGreetingStyle(),color:this.theme.mediumTextColor,fontWeight:v.Z.fontWeight.regular,lineHeight:1.4},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.canRequestWorkspaceAccess.message",defaultMessage:"You can access this workspace if someone approves your request."})}),(0,Ce.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,Ce.jsx)("div",{style:{marginTop:8},children:(0,Ce.jsx)(Ie,{type:"current-actor-to-space-via-team",teamId:e})}),(0,Ce.jsx)("div",{style:{width:10,height:10}}),this.renderNavigateButton("white")]})]}):this.renderNavigateButton("blue")}renderNavigateButton(e,t){const{currentUserRootStore:s}=N.default.state,{isCreatingSpace:i}=this.stores.store.state,r=this.theme,n=t=>"blue"===e?(0,Ce.jsx)(te.Z,{...t}):(0,Ce.jsx)(oe.Z,{backgroundColor:r.whiteButtonBackground,...t,style:{fontWeight:v.Z.fontWeight.medium,height:"auto",...t.style}});return t?(0,Ce.jsx)(n,{isLarge:!0,style:{marginTop:8},onClick:()=>this.performJoinWorkspaceRedirect(t),children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.joinSpaceButton.label",defaultMessage:"Join the space"})}):"onboarding"===this.props.route.name?(0,Ce.jsx)(n,{isLarge:!0,onClick:this.handleReturnToOnboarding,children:(0,Ce.jsx)(x.FormattedMessage,{defaultMessage:"Back to onboarding",id:"fullPageError.returnToOnboardingButton.label"})}):s&&0===s.getSpaceViewPointers().length||i?(0,Ce.jsx)(n,{isLarge:!0,onClick:this.handleCreateAccountClick,disabled:i,children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.createOrJoinWorkspaceButton.label",defaultMessage:"Create or join a workspace"})}):(0,Ce.jsx)(n,{isLarge:!0,style:{marginTop:8},onClick:this.handleGoBackClick,children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.backToMyContentButton.label",defaultMessage:"Back to my content"})})}renderLoggedInFooter(){const e=(0,A.B7)(this.environment);let t;if(z.transactionQueue.hasTasks())t=(0,Ce.jsx)(de.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.sendMessageForHelp.message",defaultMessage:"<sendmessagelink>Message support</sendmessagelink> for help.",values:{sendmessagelink:e=>(0,Ce.jsx)(ue.Z,{onClick:this.handleHelpButtonClick,children:e})}})});else{const{mainEditorCurrentBlockStore:e}=N.default.state;e&&S._S({environment:this.environment,store:e}),t=(0,Ce.jsx)(de.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.wrongAccountRequestAccess.message",defaultMessage:"You might need to <loginlink>log in</loginlink> with a different email.",values:{loginlink:e=>Z.k(this.environment)?(0,Ce.jsxs)(ue.Z,{onClick:()=>{this.stores.loginModalStore.setState({open:!0})},children:[e,(0,Ce.jsx)(me._,{loginModalStore:this.stores.loginModalStore,loginStore:this.stores.loginStore,title:(0,Ce.jsx)(x.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),description:(0,Ce.jsx)(x.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."}),className:B.zYS})]}):(0,Ce.jsx)(ue.Z,{href:p._j.logout,onClick:()=>j.logout(this.environment),children:e})}})})}return(0,Ce.jsxs)("div",{style:{textAlign:"center"},children:[this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()?this.renderWorkspaceOwnerPermissionsMenu():(0,Ce.jsx)(Ee,{}),(0,Ce.jsx)(de.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.wrongLoggedInUserError.message",defaultMessage:"You're currently logged in as {currentlyLoggedInUser}",values:{currentlyLoggedInUser:(0,Ce.jsx)("span",{style:{color:this.theme.regularTextColor},children:null==e?void 0:e.getEmail()})}})}),t]})}renderTitle(e){let{isElectron:t,publicPageData:s,showInvitationVersion:i,inviterName:r,greetingStyle:o,iconBoxInitialStyle:a}=e;return(0,Ce.jsxs)(Ce.Fragment,{children:[t&&(0,Ce.jsx)(ce.Z,{title:I.default.getIntl().formatMessage({defaultMessage:"Log in",id:"errorPage.loggedOutWorkspace.title"})}),i?(0,Ce.jsx)("div",{style:{fontSize:28,fontWeight:700,maxWidth:358,letterSpacing:.364,lineHeight:1.2,textAlign:"center",fontFamily:v.Z.getCompositeFontFamily(n.SP).sans},children:r?(0,Ce.jsx)("div",{children:(0,Ce.jsx)(x.FormattedMessage,{id:"signupPage.title.showInvitationVersion",defaultMessage:"Verify your email to accept {inviter_name}'s invite",values:{inviter_name:r}})}):(0,Ce.jsx)("div",{children:(0,Ce.jsx)(x.FormattedMessage,{id:"signupPage.title.showInvitationVersion.noInviterName",defaultMessage:"Verify your email to accept the invite"})})}):(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)(pe.Z,{type:pe.Z.Type.NoAccess,publicPageData:s,iconBoxInitialStyle:a}),(0,Ce.jsx)("div",{style:this.getGreetingStyle(o),children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.loggedOut.message",defaultMessage:"Welcome to {workspaceName} on Notion.",values:{workspaceName:(0,Ce.jsx)("span",{style:Fe.headerBoldStyle,children:s.spaceName})}})})]})]})}renderMinimalInterstitialFooter(){return(0,Ce.jsx)("div",{style:Fe.loggedOutFooterWrapStyle,children:(0,Ce.jsx)(de.Z,{isSmall:!0,isSecondaryColor:!0,isMultiline:!1,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,Ce.jsxs)("div",{style:{display:"flex"},children:[(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.somethingWrong.label",defaultMessage:"Something wrong?"}),(0,Ce.jsx)(re.Z,{onClick:this.handleHelpButtonClick,style:{textDecoration:"underline",paddingLeft:"4px"},children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.reportAProblem.label",defaultMessage:"Report a problem"})})]})})})}renderLoggedOutFooter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,Ce.jsxs)("div",{style:Fe.loggedOutFooterWrapStyle,children:[(0,Ce.jsx)(re.Z,{href:p.AR.product,external:!0,children:(0,Ce.jsxs)(ae.Z,{isGray:!0,...e,children:[(0,u.h)({width:16,height:16,marginRight:8}),(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.whatIsNotionButton.label",defaultMessage:"What is Notion?"})]})}),(0,Ce.jsx)(ae.Z,{onClick:this.handleHelpButtonClick,...e,style:{marginLeft:4,...e.style},isGray:!0,children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.sendMessageButton.label",defaultMessage:"Message support"})}),(0,Ce.jsx)(re.Z,{href:p._j.termsAndPrivacy,external:!0,style:{marginLeft:4},children:(0,Ce.jsx)(ae.Z,{isGray:!0,...e,children:(0,Ce.jsx)(x.FormattedMessage,{id:"fullPageError.termsAndPrivacyButton.label",defaultMessage:"Terms"})})})]})}performJoinWorkspaceRedirect(e){this.didPerformAction=!0;const{currentUserRootStore:t,currentUserSettingsStore:s}=N.default.state;if(t&&s&&e.spaceId){const i=e.spaceId;k.j({environment:this.environment,userRootStore:t,spaceId:i,navigate:!0,analyticsFrom:"page_error",userSettingsStore:s})}}getGreetingStyle(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{device:t}=this.environment;return{fontSize:t.isMobile?18:20,marginBottom:10,textAlign:"center",color:this.theme.regularTextColor,fontWeight:500,maxWidth:350,...e}}}Fe.displayName="PageError",Fe.headerBoldStyle={fontWeight:v.Z.fontWeight.bold},Fe.loginStyle={maxWidth:280},Fe.storeIconStyle={width:14,height:14,marginRight:6,flexShrink:0},Fe.loggedOutFooterWrapStyle={display:"flex",justifyContent:"center",marginBottom:16,marginTop:16,flexWrap:"wrap"};const Re=Fe;function Te(){return(0,h.C)({width:50,height:50,marginBottom:16})}function Ee(){return(0,Ce.jsx)(se.Z,{size:48,innerStyle:{maxWidth:280}})}function Le(e){let{inviteeEmail:t}=e;return t?(0,Ce.jsx)(x.FormattedMessage,{id:"signupPage.subtitle.invitationVersion",defaultMessage:"Please check {invitee_email} for your temporary login code.",values:{invitee_email:(0,Ce.jsx)("b",{children:t})}}):null}function qe(e){return!!e.currentUser.id}function We(e,t){y.AMz(t,{type:e})}function Ne(e){const{device:t}=e;return{width:"100vw",paddingLeft:t.isMobile?16:30,paddingRight:t.isMobile?16:30,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}function _e(e){const{device:t}=e;return{width:"100vw",paddingLeft:t.isMobile?16:30,paddingRight:t.isMobile?16:30,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",paddingTop:t.isTablet?"20vh":"12vh"}}function Ue(){window.__c={n:"Topbar"};const e=(0,o.O7)(),{isMobile:t}=e.device;return(0,Ce.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:1300,height:80,paddingLeft:20,paddingRight:20},children:[(0,h.C)({width:t?28:30,height:t?28:30,marginRight:10,flexShrink:0}),(0,Ce.jsx)("div",{style:{fontWeight:v.Z.fontWeight.medium,fontSize:16},children:"Notion"})]})}},46457:(e,t,s)=>{s.d(t,{_:()=>m});var i=s(67294),r=s(480),n=s(86628),o=s(24405),a=s(31412),l=s(87279),d=s(77907),c=s(78140),g=s(40721),u=s(7184),h=s(85893);function m(e){let{loginModalStore:t,loginStore:s,title:o,description:a,isSignup:m,disableLoginLink:v,redirectURL:x,className:y,onDismiss:S}=e;window.__c={n:"LoginModal"};const M=(0,r.O7)(),j=(0,n.VK)((()=>t.state.open),[t]),P=(0,i.useId)(),b=(0,i.useId)(),k={loginStore:s,title:o,description:a,isSignup:m,redirectURL:x,disableLoginLink:v,titleAriaId:P,descriptionAriaId:b};if(M.device.isMobile){const e=()=>f({loginModalStore:t,loginStore:s,onDismiss:S});return(0,h.jsx)(c.Z,{menuType:l.og.Modal,left:(0,h.jsx)(g.CancelMenuText,{}),onClickLeft:e,onCancel:e,whiteBackground:!0,title:o,children:(0,h.jsx)(d.LazyLoginModalContent,{...k})})}return(0,h.jsx)(u.c,{ariaLabelledBy:P,ariaDescribedBy:b,isOpen:j,onDismiss:()=>{f({loginModalStore:t,loginStore:s,onDismiss:S})},areaConstraint:{width:{min:480,max:480},height:{scroll:!0}},children:(0,h.jsxs)("div",{className:y,children:[!M.device.isMobile&&(0,h.jsx)(p,{loginModalStore:t,loginStore:s,onDismiss:S}),(0,h.jsx)(d.LazyLoginModalContent,{...k})]})})}function p(e){let{loginModalStore:t,loginStore:s,onDismiss:i}=e;window.__c={n:"CancelButton"};const r=(0,o.Fg)();return(0,h.jsx)("div",{style:{fontSize:14,color:r.mediumTextColor,position:"absolute",right:0,marginTop:16,marginRight:16,cursor:"pointer"},onClick:()=>{f({loginModalStore:t,loginStore:s,onDismiss:i})},children:(0,h.jsx)(a.FormattedMessage,{defaultMessage:"Cancel",id:"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"})})}function f(e){const{loginModalStore:t,loginStore:s,onDismiss:i}=e;s.reset(),t.setState({open:!1}),i&&i()}},55899:(e,t,s)=>{s.d(t,{KU:()=>n,ZP:()=>a,fZ:()=>r});var i=s(49085);function r(e){return"existingUser"===e.type}function n(e){return"newUser"===e.type&&"email"!==e.source}class o extends i.default{getInitialState(){return{tokenQuery:"",inviteTargets:[]}}}const a=o},8675:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(49085),r=s(80444),n=s(77080),o=s(26350);class a extends i.default{getInitialState(){return{changePermissionsEnabled:!1,privatePageStore:void 0,loading:!1,error:void 0}}shouldSaveTransactionWithSudoMode(e){const t=e===this.state.privatePageStore,s=n.default.checkGate("enable_get_private_page_info_endpoint"),i=this.doesUserAlreadyHaveEditorAccessOnBlock(e.id);return t&&s&&this.state.changePermissionsEnabled&&!i}shouldUserHaveAccessToPrivatePageBlock(){var e,t;const s=null===(e=r.default.state.currentSpaceStore)||void 0===e?void 0:e.canAdmin(),i="enterprise"===(null===(t=r.default.state.currentSpaceStore)||void 0===t?void 0:t.getSubscriptionTier());return this.state.privatePageStore&&s&&i}doesUserAlreadyHaveEditorAccessOnBlock(e){const t=r.default.state.currentSpaceStore;if(!t)return!1;return o.G.createChildStore(t,{table:"block",id:e}).canAdmin()}}const l=a},96071:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(49085);class r extends i.default{getInitialState(){return{open:!1}}}const n=r},89971:(e,t,s)=>{s.d(t,{G:()=>n});s(67294);var i=s(45238),r=s(85893);const n=(0,i.I)("googlePlay",{viewBox:"0 0 14 14",svg:(0,r.jsx)("path",{d:"M3.41741,13.7929001 L13.0843,8.42241009 C14.2002,7.80245009 14.2002,6.19755009 13.0843,5.57759009 L3.41741,0.207109087 C2.33284,-0.395426913 1,0.388821087 1,1.62952009 L1,12.3705001 C1,13.6112001 2.33284,14.3954001 3.41741,13.7929001 Z"})})},62397:(e,t,s)=>{s.d(t,{I:()=>n});s(67294);var i=s(45238),r=s(85893);const n=(0,i.I)("settingsSecurity",{viewBox:"0 0 11 20",svg:(0,r.jsx)("path",{d:"M4.92129 19.3231C5.26719 19.627 5.74092 19.6649 6.07178 19.3383L8.38779 16.9913C8.71865 16.6571 8.70361 16.1558 8.38027 15.8292L7.2749 14.7127L8.92168 13.0569C9.2375 12.7379 9.22998 12.229 8.90664 11.8948L7.41026 10.3757C9.44805 9.35026 10.5985 7.64127 10.5985 5.62847C10.5985 2.78016 8.32012 0.486328 5.49277 0.486328C2.66543 0.486328 0.394531 2.77257 0.394531 5.62847C0.394531 7.67166 1.54502 9.50217 3.37979 10.3301V17.4622C3.37979 17.7357 3.4625 18.0471 3.69561 18.2446L4.92129 19.3231ZM5.49277 17.9863L4.68066 17.166V9.34266C2.95869 8.9629 1.73301 7.4438 1.73301 5.62847C1.73301 3.53972 3.40986 1.84592 5.49277 1.84592C7.57569 1.84592 9.24502 3.53212 9.24502 5.62847C9.24502 7.42101 8.01181 8.96289 6.13194 9.38824V11.0289L7.57569 12.4872L6.03418 14.0214V15.3887L7.04931 16.3989L5.49277 17.9863ZM5.49277 5.67405C6.23721 5.67405 6.83877 5.06641 6.83877 4.32205C6.83877 3.5777 6.23721 2.97005 5.49277 2.97005C4.74834 2.97005 4.1543 3.5701 4.1543 4.32205C4.1543 5.06641 4.75586 5.67405 5.49277 5.67405Z"})})}}]);