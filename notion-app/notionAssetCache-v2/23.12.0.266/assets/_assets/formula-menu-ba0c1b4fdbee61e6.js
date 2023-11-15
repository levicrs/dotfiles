"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[71],{41389:(e,t,s)=>{s.r(t),s.d(t,{default:()=>de});s(21703);var n=s(67294),i=s(83355),o=s(99036),r=s(8848),a=s(84682),l=s(18955),d=s(91905),p=s(42875),h=s(72126),c=s(82990),u=s(31412),m=s(50906),g=s(62134),y=s(66890),f=s(75079),x=s(87279),S=s(18514),v=s(77907),b=s(34859),j=s(80444),C=s(49085);class M extends C.default{getInitialState(){return{value:"",html:"",query:""}}}const k=M;var T=s(29798),I=s(48019),w=s(78140),F=s(40721),R=s(53336),Z=s(72495),D=s(13991),L=s(76725),W=s(85893);class P extends i.Z{renderComponent(){const{entry:e}=this.props;if(e){const{name:t,examples:s}=e,n=(0,l.EP)(this.props.Prism,(s||[]).join("\n")),i=function(e){if(!e)return[];const{name:t,category:s}=e;return s===d.WD.property?[(0,W.jsxs)("span",{children:["prop(",JSON.stringify(t),")"]},0)]:s===d.WD.constant?[(0,W.jsx)("span",{children:t},0)]:s===d.WD.function?H(e):s===d.WD.operator?function(e){const{operator:t}=e;return h.oA(z(e).map(((e,s)=>{let{arity:n}=e;if(1===n.length){const[e]=n;return(0,W.jsxs)("span",{children:[t," ",(0,W.jsx)("i",{children:e})]},-s-1)}if(2===n.length){const[e,i]=n;return(0,W.jsxs)("span",{children:[(0,W.jsx)("i",{children:e})," ",t," ",(0,W.jsx)("i",{children:i})]},-s-1)}if(3===n.length){const[e,t,i]=n;return(0,W.jsxs)("span",{children:[(0,W.jsx)("i",{children:e})," ","? ",(0,W.jsx)("i",{children:t})," ",": ",(0,W.jsx)("i",{children:i})]},-s-1)}})).concat(H(e)))}(e):[]}(this.props.entry);return(0,W.jsxs)("div",{children:[(0,W.jsx)("h1",{style:P.headerStyle,children:t}),(0,W.jsx)("p",{style:P.textStyle,children:(0,W.jsx)(N,{entry:this.props.entry})}),(0,W.jsx)("p",{style:P.textStyle,children:(0,W.jsx)("b",{children:(0,W.jsx)(u.FormattedMessage,{id:"database.formula.syntaxSection.title",defaultMessage:"Syntax"})})}),(0,W.jsx)("pre",{style:this.getCodeStyle(),children:(0,L.Z)(i,(e=>(0,W.jsx)("br",{},`sep:${e}`)))}),s&&s.length>0&&(0,W.jsx)("p",{style:P.textStyle,children:(0,W.jsx)("b",{children:(0,W.jsx)(u.FormattedMessage,{id:"database.formula.examplesSection.title",defaultMessage:"Examples"})})}),(0,W.jsx)("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:n}})]})}return(0,W.jsx)("div",{})}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:4,fontSize:13,margin:0,fontFamily:c.Z.getCompositeFontFamily(D.SP).mono,lineHeight:1.4}}}P.displayName="FormulaDocumentation",P.headerStyle={fontSize:20,margin:0,lineHeight:1,marginTop:4,marginBottom:12},P.textStyle={whiteSpace:"normal",marginTop:8,marginBottom:8,fontSize:13,lineHeight:1.4};const E=(0,v.withDependency)(v.deps.prismjs,((e,t)=>(0,W.jsx)(P,{...t,Prism:e}))),B={checkbox:"boolean",number:"number",text:"text",date:"date"};function z(e){const{name:t,signatures:s}=e;return"if"===t?[{arity:["boolean","value","value"]}]:"format"===t||"unaryPlus"===t?[{arity:["value"]}]:"equal"===t||"unequal"===t?[{arity:["value","value"]}]:s.map((e=>{let{arity:t,variadic:s}=e;return{variadic:s?B[s]:void 0,arity:t?h.oA(t.map((e=>B[e]))):[]}}))}function H(e){const{name:t}=e;return z(e).map(((e,s)=>{let{variadic:n,arity:i}=e;return n?(0,W.jsxs)("span",{children:[t,"(",(0,W.jsx)("i",{children:n}),"...)"]},s):(0,W.jsxs)("span",{children:[t,"(",(0,L.Z)(i.map(((e,t)=>(0,W.jsx)("i",{children:e},t))),(e=>(0,W.jsxs)("span",{children:[","," "]},`sep:${e}`))),")"]},s)}))}function N(e){let{entry:t}=e;if(t){const{descriptionMessage:e,fallbackDescription:s}=t;if(e)return(0,W.jsx)(u.FormattedMessage,{...e});if(s)return(0,W.jsx)(W.Fragment,{children:s})}return null}var $=s(39068),O=s(56505),U=s(64921),A=s(52275),_=s(31945),q=s(28992);class K extends i.Z{renderComponent(){const{entry:{name:e}}=this.props;return(0,W.jsx)(A.Z,{focused:this.props.focused,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,icon:(0,W.jsx)("div",{style:{...$.f,...this.environment.device.isMobile&&{marginLeft:14}},children:this.renderPropertyIcon()}),title:e,right:this.renderDocumentationButtonPopup(),style:{...!this.environment.device.isMobile&&{paddingLeft:8,paddingRight:8}},desktopIconStyle:{marginLeft:0}})}renderDocumentationButtonPopup(){const{device:e}=this.environment;if(this.environment.device.isMobile)return(0,W.jsx)(_.ZP,{popupType:e.isMobile?_.Z4.SlideUp:_.Z4.Popup,renderOrigin:e=>(0,W.jsx)(U.Z,{mobileFeedback:!0,style:{width:16,height:16},...e,children:(0,O.S)({fill:this.theme.mediumIconColor})}),render:t=>{let s;return s=e.isMobile?{menuType:x.og.Modal,title:(0,W.jsx)(u.FormattedMessage,{defaultMessage:"Documentation",id:"database.formulaPropertyEntryMenuItem.title"}),right:(0,W.jsx)(F.DoneMenuText,{}),onClickRight:t.close}:{menuType:x.og.Popup},(0,W.jsx)(w.Z,{...s,children:(0,W.jsx)(Z.Z,{children:(0,W.jsx)(q.Z,{title:(0,W.jsx)(E,{entry:this.props.entry}),style:{paddingTop:10,paddingBottom:16}})})})}})}renderPropertyIcon(){const{entry:e}=this.props,{theme:t}=this;if(e.category===d.WD.property||e.category===d.WD.constant){const{resultType:s}=e;return(0,W.jsx)($.ZP,{type:s,icon:void 0,size:16,theme:t})}if(e.category===d.WD.function||e.category===d.WD.operator){const{signatures:[{resultType:s}]}=e;return(0,W.jsx)($.ZP,{type:s,icon:void 0,size:16,theme:t})}}}K.displayName="FormulaEntryMenuItem",K.contextTypes={...x.mw,...i.w};const G=K;var J=s(63143),Y=s(52821),V=s(45023),X=s(33929),Q=s(89224),ee=s(42922),te=s(3386),se=s(26388);const ne=(0,u.defineMessages)({placeholder:{id:"database.formula.placeholder",defaultMessage:"Type a formula"}});class ie extends i.Z{constructor(){super(...arguments),this.updateTimer=void 0,this.latestSelectionRange=void 0,this.storeTypes={store:k},this.handleSelectionChange=()=>{const e=Q.get();e&&this.input.contains(e.commonAncestorContainer)&&(this.latestSelectionRange=e)},this.handleInputMount=e=>this.input=e,this.handleInput=e=>{const{target:{textContent:t}}=e;this.updateValue(t),J.z4(this.updateTimer)&&(this.updateTimer=window.setTimeout((()=>this.executeUpdate()),ie.delay))},this.handlePaste=e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)},this.handleKeyUp=e=>{this.updateSelection()},this.handleClick=e=>{this.updateSelection()},this.handleKeyDown=e=>{(0,V.Z)(this.environment,e,"command+enter")&&(this.handleAccept(),e.stopPropagation())},this.getStyle=()=>({flexGrow:1,position:"relative",minWidth:0,...this.props.inputContainerStyle})}insertEntry(e){var t,s;const{value:n}=this.stores.store.state,{name:i}=e,o=ie.getCompletion(e),r=(null===(t=this.latestSelectionRange)||void 0===t?void 0:t.startOffset)??0;let a=r,d=(null===(s=this.latestSelectionRange)||void 0===s?void 0:s.endOffset)??0;const p=l.wo(n,r);if(p){const[e,t]=p,s=n.slice(e,t).toLowerCase();s!==o.toLowerCase().slice(0,t-e)&&s!==i.toLowerCase().slice(0,t-e)||(a=e,d=t)}this.input.focus();const h=this.input.firstChild||this.input,c=document.createRange();c.setStart(h,a),c.setEnd(h,d),Q.set(c,this.environment.device),a<d&&document.execCommand("delete",!1),document.execCommand("insertText",!1,o);const u=(d+o.length)/(this.input&&this.input.textContent&&this.input.textContent.length||0)*this.container.scrollWidth;u>this.container.scrollLeft+this.container.offsetWidth&&(this.container.scrollLeft=u-this.container.offsetWidth)}handleAccept(){this.updateTimer&&(window.clearTimeout(this.updateTimer),this.updateTimer=void 0);const{value:e}=this.stores.store.state;if(""===e.trim())this.props.onSubmit();else{const{formula:t,error:s}=re(e,this.props.schema,this.props.property,this.props.formulaStringHelpers);s||this.props.onSubmit(t)}}willMount(e){super.willMount(e);const{formula:t,schema:s}=e,n=this.props.formulaStringHelpers.formulaToString(t,s);this.updateValue(n)}didMount(){const{device:e}=this.environment,{value:t}=this.stores.store.state;if(this.input&&(this.input.textContent=t,e.isMobile||this.input.focus(),t)){const e=document.getSelection();this.input.firstChild&&e.collapse(this.input.firstChild,t.length),this.container.scrollLeft=this.container.scrollWidth-this.container.offsetWidth}document.addEventListener("selectionchange",this.handleSelectionChange)}willUnmount(){document.removeEventListener("selectionchange",this.handleSelectionChange)}renderComponent(){const{device:e}=this.environment,{disabled:t}=this.props,{command:s}=g.fg(this.environment),{html:n}=this.stores.store.state;return(0,W.jsxs)("div",{style:this.getWrapStyle(),children:[(0,W.jsxs)("div",{ref:e=>{e&&(this.container=e)},style:this.getStyle(),children:[(0,W.jsx)(te.Z,{capture:!t,onLeft:h.yR,onRight:h.yR,onSelectAll:h.yR,onRedo:h.yR,onUndo:h.yR,onToggleBold:h.yR,onToggleItalics:h.yR,onToggleCode:h.yR,onCut:h.yR,onCopy:h.yR,onPaste:h.yR,onKeypress:h.yR,onDelete:h.yR,onBackspace:h.yR,children:(0,W.jsx)("div",{ref:this.handleInputMount,contentEditable:!t,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onPaste:this.handlePaste,style:this.getInputStyle()})}),(0,W.jsx)("div",{style:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:n}})]}),!e.isMobile&&!t&&(0,W.jsx)(se.Z,{renderTooltip:()=>(0,W.jsxs)("div",{children:[(0,W.jsx)("span",{children:(0,W.jsx)(u.FormattedMessage,{defaultMessage:"Accept",id:"database.formula.acceptFormulaInput.tooltip"})})," ",(0,W.jsxs)("span",{style:{color:this.theme.mediumInvertedTextColor},children:[s,"+Enter"]})]}),render:t=>(0,W.jsx)(ee.Z,{disabled:Boolean(this.stores.store.state.error),onClick:()=>this.handleAccept(),style:{height:24,padding:"0 8px",alignSelf:"flex-end",marginRight:6,marginBottom:4,...e.isMobile&&{marginRight:12}},...t,children:(0,W.jsx)(u.FormattedMessage,{id:"database.formula.doneButton.label",defaultMessage:"Done"})})})]})}updateValue(e){const t=""===e.trim()?this.props.disabled?"":X.default.formatMessage(ne.placeholder):l.EP(this.props.Prism,e);this.stores.store.setState({...this.stores.store.state,html:t,value:e})}updateSelection(){const e=document.getSelection().anchorOffset,{value:t}=this.stores.store.state,s=l.wo(t,e),n=s?t.slice(s[0],s[1]):"";n!==this.stores.store.state.query&&this.stores.store.setState({...this.stores.store.state,query:n})}executeUpdate(){const{value:e}=this.stores.store.state,{error:t,formula:s}=re(e,this.props.schema,this.props.property,this.props.formulaStringHelpers);!t&&s&&this.props.onChange(s),this.updateTimer=void 0,this.stores.store.setState({...this.stores.store.state,error:t})}static getCompletion(e){const{category:t,name:s}=e;return t===d.WD.property?`prop(${JSON.stringify(s)})`:t===d.WD.constant?s:`${s}(`}getWrapStyle(){const{device:e,WindowSizeStore:t}=this.environment;return{display:"flex",flex:"none",background:this.theme.inputBackground,minHeight:33,borderTopLeftRadius:4,borderTopRightRadius:4,...this.props.disabled&&{background:this.theme.contentBackground,borderRadius:4},...e.isMobile&&{borderBottom:`1px solid ${this.theme.regularDividerColor}`,background:this.theme.popoverBackground,minHeight:44,paddingLeft:t.state.paddingLeftCSS,paddingRight:t.state.paddingRightCSS},...this.props.wrapStyle}}getOverlayStyle(){const{device:e}=this.environment,{value:t}=this.stores.store.state;return{...e.isMobile?ie.mobileInputStyle:ie.desktopInputStyle,zIndex:0,...""===t.trim()&&{color:this.theme.mediumTextColor},position:void 0}}getInputStyle(){const{device:e}=this.environment,t=e.isSafari||e.isChrome?"WebkitTextFillColor":"color";return{...e.isMobile?ie.mobileInputStyle:ie.desktopInputStyle,border:"none",background:"none",[t]:""===this.stores.store.state.value?this.theme.regularTextColor:r.ZP.transparent,caretColor:this.theme.regularTextColor,zIndex:1,width:"100%"}}}ie.displayName="FormulaInput",ie.delay=0,ie.desktopInputStyle={alignItems:"center",position:"absolute",minWidth:"100%",minHeight:32,margin:0,padding:0,paddingLeft:10,paddingRight:8,paddingTop:8,fontSize:13,fontFamily:c.Z.getCompositeFontFamily(D.SP).mono,wordWrap:"break-word"},ie.mobileInputStyle={alignItems:"center",position:"absolute",minWidth:"100%",minHeight:44,margin:0,paddingLeft:16,paddingRight:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:c.Z.getCompositeFontFamily(D.SP).githubMono};const oe=ie;function re(e,t,s,n){if(""===e.trim())return{error:void 0,formula:void 0,type:void 0};{const i=n.stringToFormula({str:e,property:s,schema:t,intl:X.default.getIntl(),propertyTypeDisplayName:Y.SO});if(i&&"error"===i.type){const{message:e}=i;return{formula:void 0,error:e,type:void 0}}return{formula:i,error:void 0,type:void 0}}}var ae=s(74523);class le extends i.Z{constructor(){super(...arguments),this.storeTypes={formulaInputStore:k,menuListStore:T.Z},this.state={filteredSections:[]},this.handleFilteredSectionsChange=e=>{h.Xy(e.map((e=>e.key)),this.state.filteredSections.map((e=>e.key)))||this.setState({filteredSections:e})}}renderComponent(){const{device:e}=this.environment,{schema:t,property:s,disabled:i}=this.props,{error:o}=this.stores.formulaInputStore.state,{formula:r}=t[s],a=(0,W.jsxs)(n.Fragment,{children:[(0,W.jsx)(v.DependencyConsumer,{dependency:v.deps.prismjs,children:e=>(0,W.jsx)(v.DependencyConsumer,{dependency:v.deps.formulaStringHelpers,children:n=>(0,W.jsx)(oe,{ref:e=>{e&&(this.formulaInput=e)},Prism:e,formulaStringHelpers:n,store:this.stores.formulaInputStore,formula:r,schema:t,property:s,disabled:i,onChange:e=>this.handleInputChange(e),onSubmit:e=>this.handleInputSubmit(e),wrapStyle:{overflow:"hidden"},inputContainerStyle:{maxHeight:"45vh",overflow:"scroll"}})})}),e.isMobile&&this.renderStatus()]});let l;return l=e.isMobile?{menuType:x.og.Modal,title:(0,W.jsx)(u.FormattedMessage,{id:"database.mobileFormulaModal.title",defaultMessage:"Formula"}),left:(0,W.jsx)(F.CancelMenuText,{}),right:o?void 0:(0,W.jsx)(u.FormattedMessage,{id:"database.mobileFormulaModal.saveButton.label",defaultMessage:"Save"}),onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:x.og.Popup,width:580,height:i?"none":void 0,minHeight:358,disableScroller:!0,header:a,footer:this.renderStatus(),scrollerStyle:{display:"flex"}},(0,W.jsx)(w.Z,{...l,children:!i&&this.renderContent()})}renderContent(){const{device:e}=this.environment,t=function(e,t,s,n){const i=Object.keys(e).filter((s=>{const n=e[s];return!(s===t||n&&o.rX.includes(n.type))})).map((t=>{const i=e[t];if(!i)throw new Error("Property not found.");const{name:o}=i,r=s?a.Qs({property:t,schema:e,block:s,getRecordModel:j.default.getCurrentBlockModelFn(),collectionRequestContext:{userId:void 0,userTimeZone:(0,p.r)(),intl:n,depth:0,resultCache:new Map,visitedProperties:new Set}}):void 0;return{name:o,category:d.WD.property,fallbackDescription:n.formatMessage({id:"database.formula.property.description",defaultMessage:"Returns the {propertyName} property for each entry."},{propertyName:o}),resultType:l.z6(i),examples:r?[`prop(${JSON.stringify(o)}) == ${JSON.stringify(r)}`]:[]}}));return[d.jQ(d.WD.property,i),...d.ZY]}(this.props.schema,this.props.property,this.props.exampleBlock,this.props.intl),s=this.getFocusedEntry(t);return e.isMobile?(0,W.jsx)(I.Z,{initialFocus:0,context:{blocks:[],environment:this.environment,publicEditMode:void 0},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,onFilteredSectionsChange:this.handleFilteredSectionsChange}):(0,W.jsxs)("div",{style:{display:"flex",flexGrow:1,boxShadow:`\n\t\t\t\t\t\t\tinset 0 1px 0 ${this.theme.regularDividerColor},\n\t\t\t\t\t\t\tinset 0 -1px 0 ${this.theme.regularDividerColor}\n\t\t\t\t\t\t`,maxHeight:295},children:[(0,W.jsx)(R.Z,{type:b.Z.Y,style:{width:180,flexGrow:0,flexShrink:0},children:(0,W.jsx)(I.Z,{initialFocus:0,context:{blocks:[],environment:this.environment,publicEditMode:void 0},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,onFilteredSectionsChange:this.handleFilteredSectionsChange})}),(0,W.jsx)(R.Z,{type:b.Z.Y,style:{padding:12,boxShadow:`inset 1px 0 0 ${this.theme.regularDividerColor}`,flexGrow:1},children:(0,W.jsx)(E,{entry:s})})]})}renderStatus(){const{device:e}=this.environment,{disabled:t}=this.props,{command:s}=g.fg(this.environment),{error:n}=this.stores.formulaInputStore.state;return n?(0,W.jsxs)("div",{style:e.isMobile?this.getMobileStatusWrapStyle():this.getDesktopStatusWrapStyle(),children:[(0,W.jsx)("span",{style:{...e.isMobile&&le.mobileStatusStyle,...le.errorStatusStyle},children:n}),!e.isMobile&&(0,W.jsx)(he,{})]}):e.isMobile?(0,W.jsx)("div",{style:this.getMobileStatusWrapStyle(),children:(0,W.jsx)("span",{style:le.mobileStatusStyle,children:(0,W.jsx)(u.FormattedMessage,{defaultMessage:"No errors.",id:"database.formula.mobileNoErrors.message"})})}):t?void 0:(0,W.jsxs)("div",{style:this.getDesktopStatusWrapStyle(),children:[(0,W.jsx)("span",{children:(0,W.jsx)(u.FormattedMessage,{id:"database.formula.keyboardShortcutHint",defaultMessage:"{commandEnter} to accept",values:{commandEnter:(0,W.jsxs)("span",{style:{fontWeight:c.Z.fontWeight.medium},children:[s,"+Enter"]})}})}),(0,W.jsx)(he,{})]})}renderSections(e){return e.map((e=>({key:e.key,title:this.props.intl.formatMessage(e.titleMessage),render:e=>(0,W.jsx)(Z.Z,{...e,desktopTitleStyle:{paddingLeft:8,paddingRight:8}}),actions:e.entries.map(((e,t)=>({key:pe(e,t),displayName:e.name,analyticsName:e.name,searchName:e.name,render:t=>(0,W.jsx)(G,{...t,entry:e}),action:()=>{this.formulaInput.insertEntry(e)},closeParentMenu:!1})))})))}handleUpdate(e,t){const{onChange:s,schema:n,property:i,analyticsFrom:o}=this.props;if(e&&"error"===e.type);else{const r=n[i];s({propertySchema:{...r,formula:e},close:t}),r&&m.$qu(this.environment,{...(0,f.Pn)(this.context.collectionContextStore),property_type:r.type,action:"formula_edit",from:o})}}getFocusedEntry(e){var t;const{focus:{section:s,indexLocal:n}}=this.stores.menuListStore.state,i="number"==typeof s&&"number"==typeof n?null===(t=this.state.filteredSections[s])||void 0===t||null===(t=t.actions[n])||void 0===t?void 0:t.key:void 0;if(void 0!==i)for(const o of e)for(const[e,t]of o.entries.entries())if(pe(t,e)===i)return t}getDesktopStatusWrapStyle(){return{display:"flex",flex:"none",alignItems:"center",fontSize:12,paddingLeft:8,paddingRight:8,height:30,color:this.theme.mediumTextColor}}getMobileStatusWrapStyle(){const{WindowSizeStore:e}=this.environment;return{display:"flex",flex:"none",alignItems:"center",fontSize:14,height:28,color:this.theme.mediumTextColor,background:this.theme.popoverBackground,boxShadow:`0 1px 0 ${this.theme.regularDividerColor}`,paddingLeft:e.state.paddingLeftCSS,paddingRight:e.state.paddingRightCSS}}handleInputChange(e){this.handleUpdate(e,!1)}handleInputSubmit(e){this.handleUpdate(e,!0)}}le.displayName="FormulaPropertyMenu",le.contextTypes={...i.w,...y.xm},le.mobileStatusStyle={paddingLeft:16,paddingRight:16},le.errorStatusStyle={color:r.ZP.redWithAlpha(.8),...c.Z.textOverflowStyle};const de=(0,u.injectIntl)(le);function pe(e,t){return`${e.name} ${t}`}function he(){return(0,W.jsx)("div",{style:{marginLeft:"auto"},children:(0,W.jsx)(ae.Z,{title:(0,W.jsx)("span",{style:{fontSize:c.Z.fontSize.UISmall.desktop},children:(0,W.jsx)(u.FormattedMessage,{defaultMessage:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})}),href:(0,S.UY)("guides.formulas"),analyticsFrom:"formula_property_menu"})})}}}]);