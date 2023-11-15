"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2293],{92660:(e,i,n)=>{n.d(i,{Z:()=>l});n(67294);var o=n(480),t=n(86628),a=n(50506),s=n(53437),r=n(85893);function l(e){window.__c={n:"DefaultPopupOrModal"};const i=(0,o.O7)(),{modalStore:n,render:l}=e,{device:c}=i,d=(0,t.VK)((()=>n.state.open),[n]);return c.isMobile?(0,r.jsx)(s.ZP,{ariaLabel:e.ariaLabel,open:d,popupType:s.ZP.PopupType.SlideUp,origin:e.origin,onDismiss:e.onDismiss,render:l,style:e.style}):(0,r.jsx)(a.Z,{ariaLabel:e.ariaLabel,open:d,preventHideChildrenWhileOpening:!0,render:l,onDismiss:e.onDismiss,style:e.style,innerStyle:e.innerStyle})}},71933:(e,i,n)=>{n.r(i),n.d(i,{default:()=>h});var o=n(67294),t=n(86628),a=n(24405),s=n(57671),r=n(97880),l=n(82990),c=n(31412),d=n(42922),p=n(85740),u=n(92660),g=n(29551),m=n(36225),f=n(85893);function h(e){let{}=e;window.__c={n:"ConfirmPrivilegedActionModal"};const i=(0,t.VK)((()=>m.Z.state),[]),n=(0,o.useCallback)((()=>{i.open&&(i.onAccept(),m.Z.setState({open:!1}))}),[i]),h=(0,o.useCallback)((()=>{i.open&&(i.onCancel(),m.Z.setState({open:!1}))}),[i]),y=(0,a.yK)((e=>({innerModal:{borderRadius:8,padding:20,width:300},shieldIcon:{color:e.accentColors.yellow[500],width:21,height:21},title:{marginTop:8,color:e.regularTextColor,fontWeight:l.Z.fontWeight.semibold,fontSize:17},description:{color:e.mediumTextColor,textAlign:"center",fontSize:l.Z.fontSize.UIRegular.desktop,marginTop:8,marginBottom:24},button:{width:"100%",justifyContent:"center"},buttonGap:{paddingTop:5}})),[]);if(!i.open)return null;let v;switch(i.type){case"joinTeamAsOwner":case"upgradeToOwner":v=(0,f.jsx)(c.FormattedMessage,{id:"confirmPrivilegedActionModal.becomeOwnerConfirmation.description",defaultMessage:"Becoming an owner in a Teamspace is a privileged action, which appears in your workspace’s audit log."});break;case"joinClosedOrPrivateTeamAsMember":v=(0,f.jsx)(c.FormattedMessage,{id:"confirmPrivilegedActionModal.joinPrivateOrClosedTeamConfirmation.description",defaultMessage:"Joining a private or closed Teamspace is a privileged action, which appears in your workspace’s audit log."});break;default:(0,r.t1)(i.type)}return(0,f.jsx)(u.Z,{innerStyle:y.innerModal,onDismiss:h,render:()=>(0,f.jsxs)(g.gq,{flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.d)(y.shieldIcon),(0,f.jsx)("div",{style:y.title,children:(0,f.jsx)(c.FormattedMessage,{id:"confirmPrivilegedActionModal.title",defaultMessage:"This is a privileged action"})}),(0,f.jsx)("div",{style:y.description,children:v}),(0,f.jsx)(d.Z,{style:y.button,onClick:n,children:(0,f.jsx)(c.FormattedMessage,{id:"confirmPrivilegedActionModal.continueAnyway",defaultMessage:"Continue anyway"})}),(0,f.jsx)("div",{style:y.buttonGap}),(0,f.jsx)(p.Z,{style:y.button,isGray:!0,onClick:h,children:(0,f.jsx)(c.FormattedMessage,{id:"confirmPrivilegedActionModal.cancel",defaultMessage:"Cancel"})})]}),requireOnline:!0,modalStore:m.Z})}},57671:(e,i,n)=>{n.d(i,{d:()=>a});n(67294);var o=n(45238),t=n(85893);const a=(0,o.I)("infoShield",{viewBox:"0 0 17 21",svg:(0,t.jsx)("path",{d:"M8.305 20.076c.078 0 .175-.016.293-.049a1.81 1.81 0 00.361-.146 74.562 74.562 0 003.516-2.08c.957-.6 1.725-1.182 2.304-1.748.58-.567.996-1.179 1.25-1.836.26-.664.39-1.442.39-2.334v-7.47c0-.515-.107-.883-.321-1.104-.215-.222-.53-.42-.948-.596a21.677 21.677 0 00-.947-.371c-.403-.156-.85-.322-1.338-.498a95.936 95.936 0 00-1.455-.537A243.644 243.644 0 009.125.496a3.78 3.78 0 00-.41-.098 1.765 1.765 0 00-.82 0l-.4.098c-.235.065-.554.17-.958.313-.404.136-.85.296-1.338.478a148.96 148.96 0 00-2.793 1.045c-.403.156-.72.283-.947.38-.41.17-.726.369-.947.597-.215.22-.323.589-.323 1.103v7.47c0 .893.13 1.668.391 2.325.26.658.68 1.27 1.26 1.836.58.566 1.344 1.152 2.295 1.758a81.927 81.927 0 003.515 2.08c.124.065.245.114.362.146.117.033.215.05.293.05zm0-1.767a.648.648 0 01-.254-.059 2.175 2.175 0 01-.352-.176 165.742 165.742 0 01-2.842-1.758c-.761-.494-1.37-.963-1.826-1.406-.455-.45-.784-.937-.986-1.465-.202-.527-.303-1.168-.303-1.924V4.715c0-.163.02-.283.059-.361.045-.085.137-.153.273-.206.293-.117.635-.247 1.026-.39.39-.143.804-.293 1.24-.45.436-.156.872-.309 1.308-.458a152 152 0 001.24-.45c.391-.143.733-.273 1.026-.39.078-.033.15-.056.215-.069a.905.905 0 01.176-.02c.052 0 .11.007.175.02.066.013.137.036.215.069.293.117.635.25 1.026.4.39.143.8.296 1.23.46.436.155.87.312 1.299.468.436.156.85.306 1.24.45l1.055.36c.13.046.215.111.254.196a.8.8 0 01.068.37v6.807c0 .756-.1 1.397-.303 1.924-.195.528-.524 1.013-.986 1.455-.456.443-1.068.912-1.836 1.407-.762.494-1.706 1.084-2.832 1.767-.143.085-.26.143-.351.176a.648.648 0 01-.254.059zm0-6.807c.488 0 .735-.257.742-.772l.146-5.156a.773.773 0 00-.254-.615.873.873 0 00-.644-.254.905.905 0 00-.654.244.802.802 0 00-.235.615l.127 5.166c.013.515.27.772.772.772zm0 3.174c.28 0 .524-.098.732-.293a.938.938 0 00.322-.723.951.951 0 00-.312-.723 1.048 1.048 0 00-.742-.292c-.287 0-.534.1-.742.302a.94.94 0 00-.313.713c0 .28.104.521.313.723.208.195.455.293.742.293z"})})}}]);