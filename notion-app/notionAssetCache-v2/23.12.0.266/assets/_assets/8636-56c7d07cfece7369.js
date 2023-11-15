"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8636],{33052:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(49085),n=a(29369);class o extends s.default{getInitialState(){return{modalOpen:!1,tokenQuery:"",inviteTargets:[],inviteRole:"member",isInviteTargetsEmpty:!0,table:n.e0,isFocused:!0,flowId:void 0,inputFocus:"invitee",emailMessage:""}}}const r=o},49204:(e,t,a)=>{a.d(t,{Id:()=>w,Ng:()=>b,Px:()=>h,ow:()=>M,t_:()=>T,um:()=>y});var s=a(15145),n=a(19889),o=a(31412),r=a(50906),i=a(54642),u=a(9953),l=a(64964),m=a(29974),d=a(39699),c=a(33929),g=a(38755),f=a(80444),v=a(9867),p=a(28517);const S=(0,o.defineMessages)({joinTeamSuccessMessage:{id:"teamInviteLinkActions.joinTeam.confirmationMessage",defaultMessage:"Joined {teamName}"},requestTeamSuccessMessage:{id:"teamInviteLinkActions.requestAccess.successMessage",defaultMessage:"Successfully requested membership"},requestTeamFailureMessage:{id:"teamInviteLinkActions.requestAccess.failureMessage",defaultMessage:"Failed to request membership"}});async function y(e){let{environment:t,userId:a,teamStore:s,user:n}=e;const o=s.getSpaceId();if(!o)return;await v.Cj({environment:t,teamId:s.id,spaceId:o,teamMemberInfos:n,isSettingDefaultTeam:!1,inviterId:a})&&(r.UD9(t,{store:s,joined_role:"member",from:"team_invite_link"}),await T({environment:t,userId:a,teamStore:s}),l.oV({label:c.default.formatMessage(S.joinTeamSuccessMessage,{teamName:s.getName()})}))}async function T(e){let{environment:t,userId:a,teamStore:n}=e;const o=f.default.state.currentUserRootStore,r=n.getSpaceId();if(!r||!o)return;const i=o.getSpaceViewStores().filter((e=>e.getSpaceId()===r))[0];await m.y3({environment:t,spaceViewStore:i,userSettingsStore:void 0,userRootStore:o,pageVisitSource:s.tY.JoinTeam}),await p.I({environment:t,spaceId:r,userId:a}),v.hI({environment:t,teamStore:n,shouldScroll:!0})}async function h(e){let{environment:t,teamId:a,message:s}=e;if(!t.currentUser.id)return;"success"===(await i.requestAccess(t,{type:"current-actor-to-team",teamId:a,message:s})).type?(r.LBE(t,{teamId:a}),await w({environment:t}),new Promise((e=>setTimeout(e,500))).then((()=>{l.oV({label:c.default.formatMessage(S.requestTeamSuccessMessage)})}))):l.oV({label:c.default.formatMessage(S.requestTeamFailureMessage)})}async function M(e){let{environment:t,teamStore:a,accessRequestStore:s,status:o}=e;const i=s.getForActorId();if(!i)return;const l=s.getRecordModel({table:n.KJ,id:i});if(l){if("approved"===o){const e=[{type:"member",entity_type:"user",user_id:l.id}];if(!(await v.Uj({environment:t,teamStore:a,teamMemberInfos:e,isSettingDefaultTeam:!1,createNewTeamFlowId:void 0})))return}d.createAndCommit({userAction:"GrantAccessActivityAction.handleGrantAccess",environment:t,perform:e=>{u.sW({store:s,transaction:e,data:{resolved_time:Date.now(),resolved_by_table:n.KJ,resolved_by_id:t.currentUser.id,status:o}})}}),r.coX(t,{store:a,resolution:o})}}async function w(e){let{environment:t}=e;const{lastVisitedSpaceView:a,userRootStore:n,userSettingsStore:o}=await(0,g.iX)({environment:t,disableRedirectUrl:!1});a?await m.y3({environment:t,spaceViewStore:a,userRootStore:n,userSettingsStore:o,pageVisitSource:s.tY.BackForward}):await m.L5({environment:t,userRootStore:n,userSettingsStore:o,pageVisitSource:s.tY.BackForward})}async function b(e){let{environment:t,teamId:a}=e;const s=await i.getTeamAccessRequestMetadata(t,{teamId:a});if("success"===s.type)return s.data}},86232:(e,t,a)=>{a.d(t,{M:()=>M});var s=a(67294),n=a(480),o=a(86628),r=a(24405),i=a(82990),u=a(38755),l=a(95697),m=a(1083),d=a(64552),c=a(31412),g=a(89728),f=a(80444),v=a(9867),p=a(85893);const S=function(e){window.__c={n:"TeamJoinButton"};const{teamStore:t,from:a,navigateToTeamHomeOnJoin:r,onJoinedTeam:i,style:u,hoveredStyle:l,icon:m,isRed:d}=e,S=(0,n.O7)(),y=(0,o.VK)((()=>f.default.state.currentSpaceStore),[]),T=(0,s.useCallback)((async()=>{y&&(await v.um({environment:S,teamStore:t,currentSpaceStore:y,from:a,andNavigateToTeamHome:r??!1}),null==i||i())}),[y,S,t,a,r,i]);return(0,p.jsx)(g.Z,{style:u,hoveredStyle:l,onClick:T,icon:m,isRed:d,children:(0,p.jsx)(c.FormattedMessage,{id:"outlinerTeamToggleButton.joinTeamButton",defaultMessage:"Join"})})};var y=a(8787),T=a(14889);const h=function(e){window.__c={n:"TeamRequestButton"};const{teamStore:t,style:a,hoveredStyle:n}=e,[r,i]=(0,s.useState)(!1),u=(0,o.VK)((()=>t.getName()),[t]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.Z,{style:a,hoveredStyle:n,onClick:()=>i(!0),children:(0,p.jsx)(c.FormattedMessage,{id:"teamRequestButton.requestButton.label",defaultMessage:"Request"})}),(0,p.jsx)(T.Z,{teamStore:t,teamName:u,teamId:t.id,isModalOpen:r,onDismiss:()=>i(!1)})]})};function M(e){window.__c={n:"TeamJoinLeaveButton"};const{teamStore:t,style:a,hoveredStyle:s}=e,c=(0,n.O7)(),g=(0,m.Q)(),f=(0,d.e)(t),v=(0,o.VK)((()=>t.getTeamAccessLevel()),[t]),T=(0,r.yK)((e=>({joinTeamButton:{maxHeight:26,marginLeft:10,paddingLeft:10,paddingRight:10,borderRadius:100,fontSize:13,fontWeight:i.Z.fontWeight.semibold,background:e.buttonHoveredBackground,alignSelf:"center",...a},joinTeamButtonHoveredStyle:{background:e.buttonPressedBackground,...s}})),[a,s]),M=(0,o.VK)((()=>(0,l.Hu)({membership:t.getRawMembership()})&&(0,u.Fn)(c)),[c,t]),w=!f&&"open"===v||M,b=!f&&"closed"===v;return g?null:f?(0,p.jsx)(y.Z,{...e,style:T.joinTeamButton,hoveredStyle:T.joinTeamButtonHoveredStyle}):w?(0,p.jsx)(S,{...e,style:T.joinTeamButton,hoveredStyle:T.joinTeamButtonHoveredStyle}):b?(0,p.jsx)(h,{teamStore:t,style:T.joinTeamButton,hoveredStyle:T.joinTeamButtonHoveredStyle}):null}},8787:(e,t,a)=>{a.d(t,{Z:()=>v});var s=a(67294),n=a(480),o=a(86628),r=a(36591),i=a(72126),u=a(64684),l=a(31412),m=a(89728),d=a(26388),c=a(80444),g=a(9867);var f=a(85893);const v=function(e){window.__c={n:"TeamLeaveButton"};const{teamStore:t,from:a,onLeavingTeam:v,style:p,hoveredStyle:S,icon:y,isRed:T,placement:h,alignment:M,buttonInternals:w}=e,b=(0,n.O7)(),j=(0,o.VK)((()=>c.default.state.currentSpaceStore),[]),I=(0,s.useCallback)((async()=>{if(!j)return;await g.s({environment:b,teamStore:t,currentSpaceStore:j,from:a})&&(null==v||v())}),[j,b,t,a,v]),x=(0,f.jsx)(l.FormattedMessage,{id:"teamJoinLeaveButton.leaveTeam.enabledTooltip",defaultMessage:"Click to leave teamspace"}),B=function(e){let{teamStore:t}=e;const a=(0,n.O7)().currentUser.id,{isDefaultTeam:s}=(0,o.VK)((()=>({isDefaultTeam:t.isDefault()})),[t]),r=function(e){const t=(0,o.VK)((()=>c.default.state.currentSpaceStore),[]);return(0,o.VK)((()=>e.isDefined()&&null!=t&&t.isDefined()?(0,u.x4)({members:e.getMembers(),groups:(null==t?void 0:t.getPermissionGroups())??[]}):[]),[e,t])}(t),m=(0,o.VK)((()=>a?r.filter((e=>{var t;return null===(t=e.user_ids)||void 0===t?void 0:t.includes(a)})):[]),[r,a]),d=(0,o.VK)((()=>{if(!t.isReady())return!1;const e=(0,u.XO)({membership:t.getMembers()});return 1===e.length&&e[0]===a}),[t,a]);return function(e){let{isDefaultTeam:t,isOnlyTeamOwner:a,userGroups:s}=e;if(t)return(0,f.jsx)(l.FormattedMessage,{id:"teamBrowser.teamCard.leaveTeam.defaultTeamTooltip",defaultMessage:"You can’t leave this teamspace because everyone in the workspace must be a member"});if(a)return(0,f.jsx)(l.FormattedMessage,{id:"teamJoinLeaveButton.leaveTeam.onlyOwnerTooltip",defaultMessage:"Invite another teamspace owner to leave this teamspace"});if(s.length>0)return(0,f.jsx)(l.FormattedMessage,{id:"teamBrowser.teamCard.leaveTeam.groupTooltip",defaultMessage:"{groupNames, plural, one {You can't leave this teamspace because you're a member of multiple groups, {groupNames}.} other {You can't leave this teamspace because you're a member of the group, {groupNames}.}}",values:{groupNames:i.oA(s.map((e=>e.name))).join()}})}({isDefaultTeam:s,isOnlyTeamOwner:d,userGroups:m})}({teamStore:t}),R=Boolean(B),k=R?B:x;return(0,f.jsx)(d.Z,{style:R?{width:240}:void 0,disableTooltip:!Boolean(k),renderTooltip:e=>(0,f.jsx)("div",{...e,children:k}),textWrap:R,placement:h,alignment:M,render:e=>(0,f.jsx)(m.Z,{...e,style:p,hoveredStyle:S,onClick:I,disabled:R,disabledFeedback:R,icon:y,isRed:T,children:w||(0,f.jsxs)(f.Fragment,{children:[(0,r.e)({width:12.5,marginRight:4}),(0,f.jsx)(l.FormattedMessage,{id:"teamBrowser.teamCard.button.joined",defaultMessage:"Joined"})]})})})}},14889:(e,t,a)=>{a.d(t,{Z:()=>v});var s=a(67294),n=a(480),o=a(24405),r=a(31412),i=a(42922),u=a(74194),l=a(50506),m=a(64369),d=a(49204),c=a(74016),g=a(85893);const f=(0,r.defineMessages)({message_placeholder:{id:"teamInviteLinkRequestPage.message.placeholder",defaultMessage:"Message (optional)"}});const v=function(e){window.__c={n:"TeamInviteLinkRequestModal"};const{teamStore:t,teamName:a,teamId:v,isModalOpen:p,onDismiss:S}=e,[y,T]=(0,s.useState)(""),h=(0,n.O7)(),M=(0,r.useIntl)(),w=async()=>{await d.Px({environment:h,teamId:v,message:y}),S()},b=(0,o.yK)((()=>({modal:{alignSelf:"center",overflow:"visible",padding:15,width:420},requestTitle:{display:"inline-flex",marginBottom:10},icon:{marginLeft:4,marginRight:4},footer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:15},requestInvitesButton:{marginLeft:20},input:{padding:8}})),[]);return(0,g.jsx)(l.Z,{open:p,onDismiss:S,innerStyle:b.modal,preventHideChildrenWhileOpening:!0,render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:b.requestTitle,children:(0,g.jsx)(r.FormattedMessage,{id:"teamInviteLinkRequestModal.reasonForRequest.title",defaultMessage:"Request access to {icon} {teamName}",values:{teamName:a,icon:(0,g.jsx)(c.p,{style:b.icon,store:t,disabled:!0,size:22})}})}),(0,g.jsx)(u.Z,{textarea:!0,style:b.input,value:y,onChange:e=>{T(e.target.value)},placeholder:M.formatMessage(f.message_placeholder)}),(0,g.jsxs)("div",{style:b.footer,children:[(0,g.jsx)(m.Z,{isSecondaryColor:!0,isSmall:!0,isMultiline:!0,children:(0,g.jsx)(r.FormattedMessage,{id:"teamInviteLinkRequestModal.caption",defaultMessage:"Your teamspace owners will approve or decline your request."})}),(0,g.jsx)(i.Z,{isLarge:!0,style:b.requestInvitesButton,onClick:w,children:(0,g.jsx)(r.FormattedMessage,{id:"teamInviteLinkRequestModal.requestAccessButton.label",defaultMessage:"Request"})})]})]})})}},1083:(e,t,a)=>{a.d(t,{Q:()=>u});var s=a(480),n=a(86628),o=a(38755),r=a(80444),i=a(78291);function u(){const e=function(){const e=(0,s.O7)();return(0,n.VK)((()=>{const t=r.default.state.currentSpaceStore,a=i.default.state.data;return t?o.Cx(t)?a?{loading:!1,isUserTeamGuestOfSpace:o.di(e,a)}:{loading:!0}:{loading:!1,isUserTeamGuestOfSpace:!1}:{loading:!0}}),[e])}();return(0,n.VK)((()=>e.loading||e.isUserTeamGuestOfSpace),[e])}},64552:(e,t,a)=>{a.d(t,{e:()=>i});var s=a(480),n=a(86628),o=a(95697),r=a(80444);function i(e){const t=(0,s.O7)(),a=(0,n.VK)((()=>r.default.state.currentSpaceStore),[]);return(0,n.VK)((()=>(0,o.AL)({teamStore:e,spaceStore:a,userId:t.currentUser.id})),[a,t.currentUser.id,e])}}}]);