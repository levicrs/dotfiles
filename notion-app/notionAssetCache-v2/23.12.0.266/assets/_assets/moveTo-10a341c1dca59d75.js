"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4670],{54814:(e,t,o)=>{o.d(t,{nc:()=>d,rG:()=>i});o(57658);var n=o(6287),a=o(98165),s=o(26350),r=o(54642);async function i(e){let{environment:t,spaceId:o,databaseType:a,parentStore:i}=e;if(!o)return;const d=await r.getTypedDatabases(t,{spaceId:o,databaseType:a});return"success"===d.type?d.data.result.map((e=>s.NW.createChildStore(i,{table:n.v,id:e.collectionId}))):void 0}async function d(e){let{environment:t,spaceId:o,databaseTypes:n,parentStore:s,teamId:r}=e;const d=[];return await Promise.all(n.map((async e=>{await async function(e){let{environment:t,spaceId:o,databaseType:n,parentStore:s,teamId:r}=e;const d=await i({spaceId:o,environment:t,databaseType:n,parentStore:s});if(!d)return!1;for(const i of d){const e=a.VP(i);if(e&&e.id===r)return!0}return!1}({environment:t,spaceId:o,databaseType:e,parentStore:s,teamId:r})&&d.push(e)}))),d}},60442:(e,t,o)=>{o.d(t,{Z:()=>r});o(67294);var n=o(82990),a=o(47853),s=o(85893);const r=function(e){let{imageURL:t,imageWidth:o,imageHeight:n,caption:r,title:d}=e;if(t){const e=(0,a.D)(t);return(0,s.jsxs)("div",{style:{width:o||200,marginTop:4,marginBottom:4},children:[(0,s.jsx)("div",{style:{width:"100%",height:n||100,borderRadius:4,backgroundImage:`url(${e})`,backgroundSize:"cover",marginBottom:6}}),(0,s.jsx)(i,{caption:r,title:d})]})}return(0,s.jsx)(i,{caption:r,title:d,style:{width:o}})};function i(e){let{style:t,caption:o,title:a}=e;return(0,s.jsxs)("div",{style:{whiteSpace:"normal",lineHeight:1.4,...t},children:[a&&(0,s.jsx)("header",{style:{fontWeight:n.Z.fontWeight.bold,marginBottom:4},children:a}),o]})}},83564:(e,t,o)=>{o.r(t),o.d(t,{MoveOrDuplicateProgress:()=>g.Z,MoveToMenuRenderer:()=>v,MoveToOrCreateMenu:()=>n.Z,MoveToSnackbarButtons:()=>C.Z});var n=o(20069),a=(o(67294),o(480)),s=o(86628),r=o(50906),i=o(48299),d=o(11302),c=o(53437),p=o(75770),l=o(42330),u=o(85893);function m(){window.__c={n:"MoveToMenuModal"};const e=(0,a.O7)(),t=(0,s.VK)((()=>{const e=l.ZP.state;if(e.isOpen)return{autocompleteQuery:e.autocompleteQuery,targets:e.targets,isAddTo:e.isAddTo,isOpen:e.isOpen}}),[]);if(void 0===t||!t.isOpen)return null;const o=()=>{if(l.ZP.state.isOpen){const{flowId:t,targets:o,moveToContext:n}=l.ZP.state;r.A6G(e,{from:n,render_type:"web",target_block_ids:o.map((e=>e.id)),flowId:t})}d.xv(e)},{autocompleteQuery:c,targets:m,isAddTo:v}=t,C=e.device.isMobile;return(0,u.jsx)(n.Z,{captureSelection:!0,restoreSelection:!C,autocompleteQuery:c,targets:m,onAutocompleteQueryChange:t=>{if(l.ZP.state.isOpen){l.ZP.setState({...l.ZP.state,autocompleteQuery:t});const{flowId:o,moveToContext:n}=l.ZP.state;r.a6v(e,{flowId:o,from:n,newValue:t})}},onAccept:async t=>{const n=l.ZP.state.isOpen&&l.ZP.state.targets||[],a=await(0,p.ed)({environment:e,blocks:n,from:"moveTo",moveToArgs:{moveToValue:t,destination:(0,p.uw)(t)}});if(!a.confirmed)return void o();for(const r of n){const t=await i.NN({environment:e,block:r,action:"move"});"user_canceled"===t?o():t.length>1&&l.ZP.state.isOpen&&l.ZP.setState({...l.ZP.state,targets:t})}if(l.ZP.state.isOpen){const{flowId:o,targets:n,moveToContext:a,openedTimeMs:s}=l.ZP.state;r.mfs(e,{from:a,render_type:"web",type:t.type,target_block_ids:n.map((e=>e.id)),time_to_select_ms:Date.now()-s,flowId:o})}const{shouldClearPagePermissions:s}=a;(async t=>{let{value:o,shouldClearPagePermissions:n}=t;await d.pB({environment:e,value:o,useSudoMode:l.ZP.state.isOpen&&l.ZP.state.useSudoMode,renderType:"web",shouldClearPagePermissions:n})})({value:t,shouldClearPagePermissions:s})},onCancel:o,desktopWidth:330,isAddTo:v,isCreateIn:!1})}function v(){window.__c={n:"MoveToMenuRenderer"};const e=(0,a.O7)(),t=e.device.isMobile,o=(0,s.VK)((()=>{const e=l.ZP.state;if(e.isOpen)return{renderType:e.renderType,isOpen:e.isOpen,rect:e.rect}}),[]);return(0,u.jsx)(c.ZP,{popupType:t?c.ZP.PopupType.SlideUp:c.ZP.PopupType.Popup,alignmentToOrigin:c.ZP.Alignment.Start,open:void 0!==o&&"mobileNative"!==o.renderType&&o.isOpen,render:()=>(0,u.jsx)(m,{}),originRect:null==o?void 0:o.rect,onDismiss:()=>{if(l.ZP.state.isOpen){const{flowId:t,targets:o,moveToContext:n}=l.ZP.state;r.A6G(e,{from:n,render_type:"web",target_block_ids:o.map((e=>e.id)),flowId:t})}d.xv(e)}})}v.displayName="MoveToMenuRenderer";var C=o(98110),g=o(91948)},16184:(e,t,o)=>{o.d(t,{Q:()=>s});o(67294);var n=o(45238),a=o(85893);const s=(0,n.I)("lockedFilled",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M4.69141 14.6338H11.3018C12.2178 14.6338 12.6689 14.1826 12.6689 13.1914V8.08496C12.6689 7.18945 12.293 6.72461 11.541 6.64941V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.67676C3.74805 6.78613 3.32422 7.2373 3.32422 8.08496V13.1914C3.32422 14.1826 3.77539 14.6338 4.69141 14.6338ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.64258L5.75098 6.64941V4.83105Z"})})},22686:(e,t,o)=>{o.d(t,{f:()=>s});o(67294);var n=o(45238),a=o(85893);const s=(0,n.I)("person",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,o)=>{o.d(t,{X:()=>s});o(67294);var n=o(45238),a=o(85893);const s=(0,n.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,a.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,a.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},35840:(e,t,o)=>{o.d(t,{R:()=>s,T:()=>a});o(67294);var n=o(45238);const a=(0,o(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),s=(0,n.I)("search",{viewBox:"0 0 16 16",svg:a})}}]);