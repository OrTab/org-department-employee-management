import{r as a,g as we,m as Ge,a as J,C as ce,c as Q,b as ft,z as Xe,e as Ke,F as Ie,f as Oe,i as Ne,_ as U,h as pt,k as gt,l as ht,n as bt,D as yt,p as xt,V as $t,q as Ct,s as vt,t as St,v as Ue,w as le,R as wt,x as It,y as fe,A as Re,B as Ot,E as Et,G as jt,H as _e,I as Mt,J as Ye,K as Ft,L as Pt,M as Nt,T as Rt,N as _t,O as Vt,P as Lt,Q as Tt,U as At,W as Je,X as Dt,Y as Wt,Z as Ht,$ as kt,a0 as qt,a1 as zt,a2 as Bt,a3 as Gt,a4 as Xt,u as Kt,j as q,S as Qe,d as he,a5 as Ut,o as Yt,a6 as Jt}from"./index-BzV15M6i.js";import{u as Qt,r as pe,R as Zt,a as en,s as ue,M as Ze,I as ve,B as et,F as tn}from"./Table-D02bRBXz.js";const Ve=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Le=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",$e=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Le(r.overflowY,t)||Le(r.overflowX,t)||(n=>{const o=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!o&&(o.clientHeight<n.scrollHeight||o.clientWidth<n.scrollWidth)})(e)}return!1},me=(e,t,r,n,o,l,s,u)=>l<e&&s>t||l>e&&s<t?0:l<=e&&u<=r||s>=t&&u>=r?l-e-n:s>t&&u<r||l<e&&u>r?s-t+o:0,nn=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Te=(e,t)=>{var r,n,o,l;if(typeof document>"u")return[];const{scrollMode:s,block:u,inline:c,boundary:m,skipOverflowHiddenElements:w}=t,h=typeof m=="function"?m:H=>H!==m;if(!Ve(e))throw new TypeError("Invalid target");const I=document.scrollingElement||document.documentElement,E=[];let C=e;for(;Ve(C)&&h(C);){if(C=nn(C),C===I){E.push(C);break}C!=null&&C===document.body&&$e(C)&&!$e(document.documentElement)||C!=null&&$e(C,w)&&E.push(C)}const b=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,$=(l=(o=window.visualViewport)==null?void 0:o.height)!=null?l:innerHeight,{scrollX:f,scrollY:M}=window,{height:d,width:y,top:i,right:p,bottom:_,left:O}=e.getBoundingClientRect(),{top:v,right:x,bottom:R,left:W}=(H=>{const g=window.getComputedStyle(H);return{top:parseFloat(g.scrollMarginTop)||0,right:parseFloat(g.scrollMarginRight)||0,bottom:parseFloat(g.scrollMarginBottom)||0,left:parseFloat(g.scrollMarginLeft)||0}})(e);let P=u==="start"||u==="nearest"?i-v:u==="end"?_+R:i+d/2-v+R,j=c==="center"?O+y/2-W+x:c==="end"?p+x:O-W;const L=[];for(let H=0;H<E.length;H++){const g=E[H],{height:T,width:F,top:z,right:A,bottom:B,left:Z}=g.getBoundingClientRect();if(s==="if-needed"&&i>=0&&O>=0&&_<=$&&p<=b&&i>=z&&_<=B&&O>=Z&&p<=A)return L;const re=getComputedStyle(g),ee=parseInt(re.borderLeftWidth,10),X=parseInt(re.borderTopWidth,10),S=parseInt(re.borderRightWidth,10),V=parseInt(re.borderBottomWidth,10);let N=0,k=0;const K="offsetWidth"in g?g.offsetWidth-g.clientWidth-ee-S:0,te="offsetHeight"in g?g.offsetHeight-g.clientHeight-X-V:0,ae="offsetWidth"in g?g.offsetWidth===0?0:F/g.offsetWidth:0,oe="offsetHeight"in g?g.offsetHeight===0?0:T/g.offsetHeight:0;if(I===g)N=u==="start"?P:u==="end"?P-$:u==="nearest"?me(M,M+$,$,X,V,M+P,M+P+d,d):P-$/2,k=c==="start"?j:c==="center"?j-b/2:c==="end"?j-b:me(f,f+b,b,ee,S,f+j,f+j+y,y),N=Math.max(0,N+M),k=Math.max(0,k+f);else{N=u==="start"?P-z-X:u==="end"?P-B+V+te:u==="nearest"?me(z,B,T,X,V+te,P,P+d,d):P-(z+T/2)+te/2,k=c==="start"?j-Z-ee:c==="center"?j-(Z+F/2)+K/2:c==="end"?j-A+S+K:me(Z,A,F,ee,S+K,j,j+y,y);const{scrollLeft:D,scrollTop:ne}=g;N=oe===0?0:Math.max(0,Math.min(ne+N/oe,g.scrollHeight-T/oe+te)),k=ae===0?0:Math.max(0,Math.min(D+k/ae,g.scrollWidth-F/ae+K)),P+=ne-N,j+=D-k}L.push({el:g,top:N,left:k})}return L},rn=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function on(e,t){if(!e.isConnected||!(o=>{let l=o;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(e))return;const r=(o=>{const l=window.getComputedStyle(o);return{top:parseFloat(l.scrollMarginTop)||0,right:parseFloat(l.scrollMarginRight)||0,bottom:parseFloat(l.scrollMarginBottom)||0,left:parseFloat(l.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Te(e,t));const n=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:l,left:s}of Te(e,rn(t))){const u=l-r.top+r.bottom,c=s-r.left+r.right;o.scroll({top:u,left:c,behavior:n})}}const tt=a.createContext({}),ln=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},an=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},sn=(e,t)=>{const{prefixCls:r,componentCls:n,gridColumns:o}=e,l={};for(let s=o;s>=0;s--)s===0?(l[`${n}${t}-${s}`]={display:"none"},l[`${n}-push-${s}`]={insetInlineStart:"auto"},l[`${n}-pull-${s}`]={insetInlineEnd:"auto"},l[`${n}${t}-push-${s}`]={insetInlineStart:"auto"},l[`${n}${t}-pull-${s}`]={insetInlineEnd:"auto"},l[`${n}${t}-offset-${s}`]={marginInlineStart:0},l[`${n}${t}-order-${s}`]={order:0}):(l[`${n}${t}-${s}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${s/o*100}%`,maxWidth:`${s/o*100}%`}],l[`${n}${t}-push-${s}`]={insetInlineStart:`${s/o*100}%`},l[`${n}${t}-pull-${s}`]={insetInlineEnd:`${s/o*100}%`},l[`${n}${t}-offset-${s}`]={marginInlineStart:`${s/o*100}%`},l[`${n}${t}-order-${s}`]={order:s});return l[`${n}${t}-flex`]={flex:`var(--${r}${t}-flex)`},l},Se=(e,t)=>sn(e,t),cn=(e,t,r)=>({[`@media (min-width: ${J(t)})`]:Object.assign({},Se(e,r))}),dn=()=>({}),un=()=>({}),mn=we("Grid",ln,dn),fn=we("Grid",e=>{const t=Ge(e,{gridColumns:24}),r={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[an(t),Se(t,""),Se(t,"-xs"),Object.keys(r).map(n=>cn(t,r[n],n)).reduce((n,o)=>Object.assign(Object.assign({},n),o),{})]},un);var pn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Ae(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const gn=["xs","sm","md","lg","xl","xxl"],nt=a.forwardRef((e,t)=>{const{getPrefixCls:r,direction:n}=a.useContext(ce),{gutter:o,wrap:l}=a.useContext(tt),{prefixCls:s,span:u,order:c,offset:m,push:w,pull:h,className:I,children:E,flex:C,style:b}=e,$=pn(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),f=r("col",s),[M,d,y]=fn(f),i={};let p={};gn.forEach(v=>{let x={};const R=e[v];typeof R=="number"?x.span=R:typeof R=="object"&&(x=R||{}),delete $[v],p=Object.assign(Object.assign({},p),{[`${f}-${v}-${x.span}`]:x.span!==void 0,[`${f}-${v}-order-${x.order}`]:x.order||x.order===0,[`${f}-${v}-offset-${x.offset}`]:x.offset||x.offset===0,[`${f}-${v}-push-${x.push}`]:x.push||x.push===0,[`${f}-${v}-pull-${x.pull}`]:x.pull||x.pull===0,[`${f}-rtl`]:n==="rtl"}),x.flex&&(p[`${f}-${v}-flex`]=!0,i[`--${f}-${v}-flex`]=Ae(x.flex))});const _=Q(f,{[`${f}-${u}`]:u!==void 0,[`${f}-order-${c}`]:c,[`${f}-offset-${m}`]:m,[`${f}-push-${w}`]:w,[`${f}-pull-${h}`]:h},I,p,d,y),O={};if(o&&o[0]>0){const v=o[0]/2;O.paddingLeft=v,O.paddingRight=v}return C&&(O.flex=Ae(C),l===!1&&!O.minWidth&&(O.minWidth=0)),M(a.createElement("div",Object.assign({},$,{style:Object.assign(Object.assign(Object.assign({},O),b),i),className:_,ref:t}),E))});var hn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function De(e,t){const[r,n]=a.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let l=0;l<pe.length;l++){const s=pe[l];if(!t[s])continue;const u=e[s];if(u!==void 0){n(u);return}}};return a.useEffect(()=>{o()},[JSON.stringify(e),t]),r}const bn=a.forwardRef((e,t)=>{const{prefixCls:r,justify:n,align:o,className:l,style:s,children:u,gutter:c=0,wrap:m}=e,w=hn(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:I}=a.useContext(ce),[E,C]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[b,$]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),f=De(o,b),M=De(n,b),d=a.useRef(c),y=Qt();a.useEffect(()=>{const g=y.subscribe(T=>{$(T);const F=d.current||0;(!Array.isArray(F)&&typeof F=="object"||Array.isArray(F)&&(typeof F[0]=="object"||typeof F[1]=="object"))&&C(T)});return()=>y.unsubscribe(g)},[]);const i=()=>{const g=[void 0,void 0];return(Array.isArray(c)?c:[c,void 0]).forEach((F,z)=>{if(typeof F=="object")for(let A=0;A<pe.length;A++){const B=pe[A];if(E[B]&&F[B]!==void 0){g[z]=F[B];break}}else g[z]=F}),g},p=h("row",r),[_,O,v]=mn(p),x=i(),R=Q(p,{[`${p}-no-wrap`]:m===!1,[`${p}-${M}`]:M,[`${p}-${f}`]:f,[`${p}-rtl`]:I==="rtl"},l,O,v),W={},P=x[0]!=null&&x[0]>0?x[0]/-2:void 0;P&&(W.marginLeft=P,W.marginRight=P);const[j,L]=x;W.rowGap=L;const H=a.useMemo(()=>({gutter:[j,L],wrap:m}),[j,L,m]);return _(a.createElement(tt.Provider,{value:H},a.createElement("div",Object.assign({},w,{className:R,style:Object.assign(Object.assign({},W),s),ref:t}),u)))});function ge(e){const[t,r]=a.useState(e);return a.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const yn=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},xn=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${J(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${J(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),We=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},$n=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Ke(e)),xn(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},We(e,e.controlHeightSM)),"&-large":Object.assign({},We(e,e.controlHeightLG))})}},Cn=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:o,antCls:l,labelRequiredMarkColor:s,labelColor:u,labelFontSize:c,labelHeight:m,labelColonMarginInlineStart:w,labelColonMarginInlineEnd:h,itemMarginBottom:I}=e;return{[t]:Object.assign(Object.assign({},Ke(e)),{marginBottom:I,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:m,color:u,fontSize:c,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:s,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:w,marginInlineEnd:h},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Xe,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},He=(e,t)=>{const{formItemCls:r}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]:{[`& + ${r}-control`]:{minWidth:"unset"}}}}},vn=e=>{const{componentCls:t,formItemCls:r,inlineItemMarginBottom:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:n,"&-row":{flexWrap:"nowrap"},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},Y=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),rt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${r} ${r}-label`]:Y(e),[`${t}:not(${t}-inline)`]:{[r]:{flexWrap:"wrap",[`${r}-label, ${r}-control`]:{[`&:not([class*=" ${n}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Sn=e=>{const{componentCls:t,formItemCls:r,antCls:n}=e;return{[`${t}-vertical`]:{[`${r}:not(${r}-horizontal)`]:{[`${r}-row`]:{flexDirection:"column"},[`${r}-label > label`]:{height:"auto"},[`${r}-control`]:{width:"100%"},[`${r}-label,
        ${n}-col-24${r}-label,
        ${n}-col-xl-24${r}-label`]:Y(e)}},[`@media (max-width: ${J(e.screenXSMax)})`]:[rt(e),{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-xs-24${r}-label`]:Y(e)}}}],[`@media (max-width: ${J(e.screenSMMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-sm-24${r}-label`]:Y(e)}}},[`@media (max-width: ${J(e.screenMDMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-md-24${r}-label`]:Y(e)}}},[`@media (max-width: ${J(e.screenLGMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-lg-24${r}-label`]:Y(e)}}}}},wn=e=>{const{formItemCls:t,antCls:r}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${r}-col-24${t}-label,
      ${r}-col-xl-24${t}-label`]:Y(e),[`@media (max-width: ${J(e.screenXSMax)})`]:[rt(e),{[t]:{[`${r}-col-xs-24${t}-label`]:Y(e)}}],[`@media (max-width: ${J(e.screenSMMax)})`]:{[t]:{[`${r}-col-sm-24${t}-label`]:Y(e)}},[`@media (max-width: ${J(e.screenMDMax)})`]:{[t]:{[`${r}-col-md-24${t}-label`]:Y(e)}},[`@media (max-width: ${J(e.screenLGMax)})`]:{[t]:{[`${r}-col-lg-24${t}-label`]:Y(e)}}}},In=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),ot=(e,t)=>Ge(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),Ee=we("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=ot(e,r);return[$n(n),Cn(n),yn(n),He(n,n.componentCls),He(n,n.formItemCls),vn(n),Sn(n),wn(n),ft(n),Xe]},In,{order:-1e3}),ke=[];function Ce(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const lt=e=>{let{help:t,helpStatus:r,errors:n=ke,warnings:o=ke,className:l,fieldId:s,onVisibleChanged:u}=e;const{prefixCls:c}=a.useContext(Ie),m=`${c}-item-explain`,w=Oe(c),[h,I,E]=Ee(c,w),C=a.useMemo(()=>Ne(c),[c]),b=ge(n),$=ge(o),f=a.useMemo(()=>t!=null?[Ce(t,"help",r)]:[].concat(U(b.map((y,i)=>Ce(y,"error","error",i))),U($.map((y,i)=>Ce(y,"warning","warning",i)))),[t,r,b,$]),M=a.useMemo(()=>{const y={};return f.forEach(i=>{let{key:p}=i;y[p]=(y[p]||0)+1}),f.map((i,p)=>Object.assign(Object.assign({},i),{key:y[i.key]>1?`${i.key}-fallback-${p}`:i.key}))},[f]),d={};return s&&(d.id=`${s}_help`),h(a.createElement(pt,{motionDeadline:C.motionDeadline,motionName:`${c}-show-help`,visible:!!M.length,onVisibleChanged:u},y=>{const{className:i,style:p}=y;return a.createElement("div",Object.assign({},d,{className:Q(m,i,E,w,l,I),style:p,role:"alert"}),a.createElement(gt,Object.assign({keys:M},Ne(c),{motionName:`${c}-show-help-item`,component:!1}),_=>{const{key:O,error:v,errorStatus:x,className:R,style:W}=_;return a.createElement("div",{key:O,className:Q(R,{[`${m}-${x}`]:x}),style:W},v)}))}))},On=["parentNode"],En="form_item";function ie(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function at(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:On.includes(r)?`${En}_${r}`:r}function st(e,t,r,n,o,l){let s=n;return l!==void 0?s=l:r.validating?s="validating":e.length?s="error":t.length?s="warning":(r.touched||o&&r.validated)&&(s="success"),s}function qe(e){return ie(e).join("_")}function ze(e,t){const r=t.getFieldInstance(e),n=bt(r);if(n)return n;const o=at(ie(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function it(e){const[t]=ht(),r=a.useRef({}),n=a.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>l=>{const s=qe(o);l?r.current[s]=l:delete r.current[s]}},scrollToField:function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=ze(o,n);s&&on(s,Object.assign({scrollMode:"if-needed",block:"nearest"},l))},focusField:o=>{var l;const s=ze(o,n);s&&((l=s.focus)===null||l===void 0||l.call(s))},getFieldInstance:o=>{const l=qe(o);return r.current[l]}}),[e,t]);return[n]}var jn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Mn=(e,t)=>{const r=a.useContext(yt),{getPrefixCls:n,direction:o,form:l}=a.useContext(ce),{prefixCls:s,className:u,rootClassName:c,size:m,disabled:w=r,form:h,colon:I,labelAlign:E,labelWrap:C,labelCol:b,wrapperCol:$,hideRequiredMark:f,layout:M="horizontal",scrollToFirstError:d,requiredMark:y,onFinishFailed:i,name:p,style:_,feedbackIcons:O,variant:v}=e,x=jn(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),R=xt(m),W=a.useContext($t),P=a.useMemo(()=>y!==void 0?y:f?!1:l&&l.requiredMark!==void 0?l.requiredMark:!0,[f,y,l]),j=I??(l==null?void 0:l.colon),L=n("form",s),H=Oe(L),[g,T,F]=Ee(L,H),z=Q(L,`${L}-${M}`,{[`${L}-hide-required-mark`]:P===!1,[`${L}-rtl`]:o==="rtl",[`${L}-${R}`]:R},F,H,T,l==null?void 0:l.className,u,c),[A]=it(h),{__INTERNAL__:B}=A;B.name=p;const Z=a.useMemo(()=>({name:p,labelAlign:E,labelCol:b,labelWrap:C,wrapperCol:$,vertical:M==="vertical",colon:j,requiredMark:P,itemRef:B.itemRef,form:A,feedbackIcons:O}),[p,E,b,$,M,j,P,A,O]),re=a.useRef(null);a.useImperativeHandle(t,()=>{var S;return Object.assign(Object.assign({},A),{nativeElement:(S=re.current)===null||S===void 0?void 0:S.nativeElement})});const ee=(S,V)=>{if(S){let N={block:"nearest"};typeof S=="object"&&(N=Object.assign(Object.assign({},N),S)),A.scrollToField(V,N),N.focus&&A.focusField(V)}},X=S=>{if(i==null||i(S),S.errorFields.length){const V=S.errorFields[0].name;if(d!==void 0){ee(d,V);return}l&&l.scrollToFirstError!==void 0&&ee(l.scrollToFirstError,V)}};return g(a.createElement(Ct.Provider,{value:v},a.createElement(vt,{disabled:w},a.createElement(St.Provider,{value:R},a.createElement(Ue,{validateMessages:W},a.createElement(le.Provider,{value:Z},a.createElement(wt,Object.assign({id:p},x,{name:p,onFinishFailed:X,form:A,ref:re,style:Object.assign(Object.assign({},l==null?void 0:l.style),_),className:z}))))))))},Fn=a.forwardRef(Mn);function Pn(e){if(typeof e=="function")return e;const t=It(e);return t.length<=1?t[0]:t}const ct=()=>{const{status:e,errors:t=[],warnings:r=[]}=a.useContext(fe);return{status:e,errors:t,warnings:r}};ct.Context=fe;function Nn(e){const[t,r]=a.useState(e),n=a.useRef(null),o=a.useRef([]),l=a.useRef(!1);a.useEffect(()=>(l.current=!1,()=>{l.current=!0,Re.cancel(n.current),n.current=null}),[]);function s(u){l.current||(n.current===null&&(o.current=[],n.current=Re(()=>{n.current=null,r(c=>{let m=c;return o.current.forEach(w=>{m=w(m)}),m})})),o.current.push(u))}return[t,s]}function Rn(){const{itemRef:e}=a.useContext(le),t=a.useRef({});function r(n,o){const l=o&&typeof o=="object"&&Ot(o),s=n.join("_");return(t.current.name!==s||t.current.originRef!==l)&&(t.current.name=s,t.current.originRef=l,t.current.ref=Et(e(n),l)),t.current.ref}return r}const _n=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},Vn=jt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:r}=t;const n=ot(e,r);return[_n(n)]});var Ln=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Tn=24,An=e=>{const{prefixCls:t,status:r,labelCol:n,wrapperCol:o,children:l,errors:s,warnings:u,_internalItemRender:c,extra:m,help:w,fieldId:h,marginBottom:I,onErrorVisibleChanged:E,label:C}=e,b=`${t}-item`,$=a.useContext(le),f=a.useMemo(()=>{let j=Object.assign({},o||$.wrapperCol||{});return C===null&&!n&&!o&&$.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(H=>{const g=H?[H]:[],T=_e($.labelCol,g),F=typeof T=="object"?T:{},z=_e(j,g),A=typeof z=="object"?z:{};"span"in F&&!("offset"in A)&&F.span<Tn&&(j=Mt(j,[].concat(g,["offset"]),F.span))}),j},[o,$]),M=Q(`${b}-control`,f.className),d=a.useMemo(()=>Ln($,["labelCol","wrapperCol"]),[$]),y=a.useRef(null),[i,p]=a.useState(0);Ye(()=>{m&&y.current?p(y.current.clientHeight):p(0)},[m]);const _=a.createElement("div",{className:`${b}-control-input`},a.createElement("div",{className:`${b}-control-input-content`},l)),O=a.useMemo(()=>({prefixCls:t,status:r}),[t,r]),v=I!==null||s.length||u.length?a.createElement(Ie.Provider,{value:O},a.createElement(lt,{fieldId:h,errors:s,warnings:u,help:w,helpStatus:r,className:`${b}-explain-connected`,onVisibleChanged:E})):null,x={};h&&(x.id=`${h}_extra`);const R=m?a.createElement("div",Object.assign({},x,{className:`${b}-extra`,ref:y}),m):null,W=v||R?a.createElement("div",{className:`${b}-additional`,style:I?{minHeight:I+i}:{}},v,R):null,P=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:_,errorList:v,extra:R}):a.createElement(a.Fragment,null,_,W);return a.createElement(le.Provider,{value:d},a.createElement(nt,Object.assign({},f,{className:M}),P),a.createElement(Vn,{prefixCls:t}))};var Dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},Wn=function(t,r){return a.createElement(Ft,Pt({},t,{ref:r,icon:Dn}))},Hn=a.forwardRef(Wn),kn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function qn(e){return e?typeof e=="object"&&!a.isValidElement(e)?e:{title:e}:null}const zn=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:o,labelAlign:l,colon:s,required:u,requiredMark:c,tooltip:m,vertical:w}=e;var h;const[I]=Nt("Form"),{labelAlign:E,labelCol:C,labelWrap:b,colon:$}=a.useContext(le);if(!r)return null;const f=o||C||{},M=l||E,d=`${t}-item-label`,y=Q(d,M==="left"&&`${d}-left`,f.className,{[`${d}-wrap`]:!!b});let i=r;const p=s===!0||$!==!1&&s!==!1;p&&!w&&typeof r=="string"&&r.trim()&&(i=r.replace(/[:|：]\s*$/,""));const O=qn(m);if(O){const{icon:W=a.createElement(Hn,null)}=O,P=kn(O,["icon"]),j=a.createElement(Rt,Object.assign({},P),a.cloneElement(W,{className:`${t}-item-tooltip`,title:"",onClick:L=>{L.preventDefault()},tabIndex:null}));i=a.createElement(a.Fragment,null,i,j)}const v=c==="optional",x=typeof c=="function";x?i=c(i,{required:!!u}):v&&!u&&(i=a.createElement(a.Fragment,null,i,a.createElement("span",{className:`${t}-item-optional`,title:""},(I==null?void 0:I.optional)||((h=_t.Form)===null||h===void 0?void 0:h.optional))));const R=Q({[`${t}-item-required`]:u,[`${t}-item-required-mark-optional`]:v||x,[`${t}-item-no-colon`]:!p});return a.createElement(nt,Object.assign({},f,{className:y}),a.createElement("label",{htmlFor:n,className:R,title:typeof r=="string"?r:""},i))},Bn={success:Zt,warning:en,error:Vt,validating:Lt};function dt(e){let{children:t,errors:r,warnings:n,hasFeedback:o,validateStatus:l,prefixCls:s,meta:u,noStyle:c}=e;const m=`${s}-item`,{feedbackIcons:w}=a.useContext(le),h=st(r,n,u,null,!!o,l),{isFormItemInput:I,status:E,hasFeedback:C,feedbackIcon:b}=a.useContext(fe),$=a.useMemo(()=>{var f;let M;if(o){const y=o!==!0&&o.icons||w,i=h&&((f=y==null?void 0:y({status:h,errors:r,warnings:n}))===null||f===void 0?void 0:f[h]),p=h&&Bn[h];M=i!==!1&&p?a.createElement("span",{className:Q(`${m}-feedback-icon`,`${m}-feedback-icon-${h}`)},i||a.createElement(p,null)):null}const d={status:h||"",errors:r,warnings:n,hasFeedback:!!o,feedbackIcon:M,isFormItemInput:!0};return c&&(d.status=(h??E)||"",d.isFormItemInput=I,d.hasFeedback=!!(o??C),d.feedbackIcon=o!==void 0?d.feedbackIcon:b),d},[h,o,c,I,E]);return a.createElement(fe.Provider,{value:$},t)}var Gn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Xn(e){const{prefixCls:t,className:r,rootClassName:n,style:o,help:l,errors:s,warnings:u,validateStatus:c,meta:m,hasFeedback:w,hidden:h,children:I,fieldId:E,required:C,isRequired:b,onSubItemMetaChange:$,layout:f}=e,M=Gn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),d=`${t}-item`,{requiredMark:y,vertical:i}=a.useContext(le),p=i||f==="vertical",_=a.useRef(null),O=ge(s),v=ge(u),x=l!=null,R=!!(x||s.length||u.length),W=!!_.current&&Tt(_.current),[P,j]=a.useState(null);Ye(()=>{if(R&&_.current){const F=getComputedStyle(_.current);j(parseInt(F.marginBottom,10))}},[R,W]);const L=F=>{F||j(null)},g=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const z=F?O:m.errors,A=F?v:m.warnings;return st(z,A,m,"",!!w,c)}(),T=Q(d,r,n,{[`${d}-with-help`]:x||O.length||v.length,[`${d}-has-feedback`]:g&&w,[`${d}-has-success`]:g==="success",[`${d}-has-warning`]:g==="warning",[`${d}-has-error`]:g==="error",[`${d}-is-validating`]:g==="validating",[`${d}-hidden`]:h,[`${d}-${f}`]:f});return a.createElement("div",{className:T,style:o,ref:_},a.createElement(bn,Object.assign({className:`${d}-row`},At(M,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),a.createElement(zn,Object.assign({htmlFor:E},e,{requiredMark:y,required:C??b,prefixCls:t,vertical:p})),a.createElement(An,Object.assign({},e,m,{errors:O,warnings:v,prefixCls:t,status:g,help:l,marginBottom:P,onErrorVisibleChanged:L}),a.createElement(Je.Provider,{value:$},a.createElement(dt,{prefixCls:t,meta:m,errors:m.errors,warnings:m.warnings,hasFeedback:w,validateStatus:g},I)))),!!P&&a.createElement("div",{className:`${d}-margin-offset`,style:{marginBottom:-P}}))}const Kn="__SPLIT__";function Un(e,t){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(o=>{const l=e[o],s=t[o];return l===s||typeof l=="function"||typeof s=="function"})}const Yn=a.memo(e=>{let{children:t}=e;return t},(e,t)=>Un(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function Be(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Jn(e){const{name:t,noStyle:r,className:n,dependencies:o,prefixCls:l,shouldUpdate:s,rules:u,children:c,required:m,label:w,messageVariables:h,trigger:I="onChange",validateTrigger:E,hidden:C,help:b,layout:$}=e,{getPrefixCls:f}=a.useContext(ce),{name:M}=a.useContext(le),d=Pn(c),y=typeof d=="function",i=a.useContext(Je),{validateTrigger:p}=a.useContext(Dt),_=E!==void 0?E:p,O=t!=null,v=f("form",l),x=Oe(v),[R,W,P]=Ee(v,x);Bt();const j=a.useContext(Wt),L=a.useRef(null),[H,g]=Nn({}),[T,F]=Ht(()=>Be()),z=S=>{const V=j==null?void 0:j.getKey(S.name);if(F(S.destroy?Be():S,!0),r&&b!==!1&&i){let N=S.name;if(S.destroy)N=L.current||N;else if(V!==void 0){const[k,K]=V;N=[k].concat(U(K)),L.current=N}i(S,N)}},A=(S,V)=>{g(N=>{const k=Object.assign({},N),te=[].concat(U(S.name.slice(0,-1)),U(V)).join(Kn);return S.destroy?delete k[te]:k[te]=S,k})},[B,Z]=a.useMemo(()=>{const S=U(T.errors),V=U(T.warnings);return Object.values(H).forEach(N=>{S.push.apply(S,U(N.errors||[])),V.push.apply(V,U(N.warnings||[]))}),[S,V]},[H,T.errors,T.warnings]),re=Rn();function ee(S,V,N){return r&&!C?a.createElement(dt,{prefixCls:v,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:T,errors:B,warnings:Z,noStyle:!0},S):a.createElement(Xn,Object.assign({key:"row"},e,{className:Q(n,P,x,W),prefixCls:v,fieldId:V,isRequired:N,errors:B,warnings:Z,meta:T,onSubItemMetaChange:A,layout:$}),S)}if(!O&&!y&&!o)return R(ee(d));let X={};return typeof w=="string"?X.label=w:t&&(X.label=String(t)),h&&(X=Object.assign(Object.assign({},X),h)),R(a.createElement(kt,Object.assign({},e,{messageVariables:X,trigger:I,validateTrigger:_,onMetaChange:z}),(S,V,N)=>{const k=ie(t).length&&V?V.name:[],K=at(k,M),te=m!==void 0?m:!!(u!=null&&u.some(D=>{if(D&&typeof D=="object"&&D.required&&!D.warningOnly)return!0;if(typeof D=="function"){const ne=D(N);return(ne==null?void 0:ne.required)&&!(ne!=null&&ne.warningOnly)}return!1})),ae=Object.assign({},S);let oe=null;if(Array.isArray(d)&&O)oe=d;else if(!(y&&(!(s||o)||O))){if(!(o&&!y&&!O))if(a.isValidElement(d)){const D=Object.assign(Object.assign({},d.props),ae);if(D.id||(D.id=K),b||B.length>0||Z.length>0||e.extra){const se=[];(b||B.length>0)&&se.push(`${K}_help`),e.extra&&se.push(`${K}_extra`),D["aria-describedby"]=se.join(" ")}B.length>0&&(D["aria-invalid"]="true"),te&&(D["aria-required"]="true"),qt(d)&&(D.ref=re(k,d)),new Set([].concat(U(ie(I)),U(ie(_)))).forEach(se=>{D[se]=function(){for(var je,Me,be,Fe,ye,Pe=arguments.length,xe=new Array(Pe),de=0;de<Pe;de++)xe[de]=arguments[de];(be=ae[se])===null||be===void 0||(je=be).call.apply(je,[ae].concat(xe)),(ye=(Fe=d.props)[se])===null||ye===void 0||(Me=ye).call.apply(Me,[Fe].concat(xe))}});const mt=[D["aria-required"],D["aria-invalid"],D["aria-describedby"]];oe=a.createElement(Yn,{control:ae,update:d,childProps:mt},zt(d,D))}else y&&(s||o)&&!O?oe=d(N):oe=d}return ee(oe,K,te)}))}const ut=Jn;ut.useStatus=ct;var Qn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Zn=e=>{var{prefixCls:t,children:r}=e,n=Qn(e,["prefixCls","children"]);const{getPrefixCls:o}=a.useContext(ce),l=o("form",t),s=a.useMemo(()=>({prefixCls:l,status:"error"}),[l]);return a.createElement(Gt,Object.assign({},n),(u,c,m)=>a.createElement(Ie.Provider,{value:s},r(u.map(w=>Object.assign(Object.assign({},w),{fieldKey:w.key})),c,{errors:m.errors,warnings:m.warnings})))};function er(){const{form:e}=a.useContext(le);return e}const G=Fn;G.Item=ut;G.List=Zn;G.ErrorList=lt;G.useForm=it;G.useFormInstance=er;G.useWatch=Xt;G.Provider=Ue;G.create=()=>{};const tr=(e,t)=>{let r;return(...n)=>{clearTimeout(r),r=setTimeout(()=>e(...n),t)}},nr=()=>{const{rootController:{companyController:e},rootStore:{companyStore:{selectedCompanyId:t,selectedCompany:{employees:r,departmentsById:n,employeesById:o,departments:l,employeesByDepartmentId:s}}}}=Kt(),[u,c]=a.useState(!1),[m,w]=a.useState(""),[h,I]=a.useState([]),[E]=G.useForm(),C=a.useCallback(async i=>{try{await e.deleteEmployee(i,t),ue.success("Employee deleted successfully")}catch{ue.error("Failed to delete employee")}},[e,t]),b=a.useCallback(i=>{const p=o[i];Ze.confirm({title:"Are you sure you want to delete this employee?",content:`Employee Name: ${p.name}`,onOk:()=>C(i)})},[o,C]),$=a.useCallback(()=>{c(!1),E.resetFields()},[E]),f=a.useCallback(async()=>{try{const i=await E.validateFields();await e.addEmployee(i,t),ue.success("Employee added successfully"),$()}catch{ue.error("Failed to add employee")}},[e,E,$,t]),M=a.useMemo(()=>h.length?h.reduce((i,p)=>(i.push(...s[p]),i),[]):r,[r,s,h]),d=a.useMemo(()=>M.filter(i=>{const p=m.toLowerCase().trim();return i.name.toLowerCase().includes(p)||i.email.toLowerCase().includes(p)}),[M,m]),y=a.useCallback(tr(w,300),[]);return{employees:d,setSearchText:y,isAddModalVisible:u,setIsAddModalVisible:c,handleAddEmployee:f,handleCloseModal:$,handleDeleteClick:b,form:E,departmentsById:n,departments:l,employeesByDepartmentId:s,selectedDepartments:h,setSelectedDepartments:I}},rr=({isAddModalVisible:e,handleAddEmployee:t,handleCloseModal:r,form:n,departments:o})=>q.jsx(Ze,{title:"Add Employee",open:e,onOk:t,onCancel:r,children:q.jsxs(G,{form:n,layout:"vertical",children:[q.jsx(G.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input the employee's name!"}],children:q.jsx(ve,{})}),q.jsx(G.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input the employee's email!"},{type:"email",message:"Please enter a valid email!"}],children:q.jsx(ve,{})}),q.jsx(G.Item,{label:"Department",name:"departmentId",rules:[{required:!0,message:"Please select a department!"}],children:q.jsx(Qe,{placeholder:"Select a department",options:o.map(l=>({value:l.id,label:l.name}))})})]})}),or=({setSearchText:e,selectedDepartments:t,setSelectedDepartments:r,departments:n,setIsAddModalVisible:o})=>q.jsxs(lr,{children:[q.jsx(ar,{placeholder:"Search employees by name or email",onChange:l=>e(l.target.value)}),q.jsx(sr,{placeholder:"Filter by department",allowClear:!0,mode:"multiple",value:t,onChange:l=>r(l),filterOption:(l,s)=>(s==null?void 0:s.label.toLowerCase().includes(l.toLowerCase()))??!1,options:n.map(l=>({value:l.id,label:l.name})),maxTagCount:2}),q.jsx(et,{type:"primary",onClick:()=>o(!0),children:"Add Employee"})]}),lr=he.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${Ut} {
    flex-direction: row;
  }
`,ar=he(ve)`
  && {
    width: 250px;
  }
`,sr=he(Qe)`
  && {
    width: 250px;
  }
`,ur=Yt(()=>{const{employees:e,setSearchText:t,isAddModalVisible:r,setIsAddModalVisible:n,handleAddEmployee:o,handleCloseModal:l,handleDeleteClick:s,departments:u,departmentsById:c,form:m,selectedDepartments:w,setSelectedDepartments:h}=nr(),{isMediumUp:I}=Jt(),E=a.useMemo(()=>[{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"Email",dataIndex:"email",key:"email"},{title:"Department",dataIndex:"departmentId",key:"department",render:b=>{var $;return(($=c[b])==null?void 0:$.name)||"Unknown"}},{title:"Actions",key:"actions",render:(b,$)=>q.jsx(et,{type:"primary",danger:!0,onClick:()=>s($.key),children:"Delete"})}],[c,s]),C=a.useMemo(()=>e.map(b=>({key:b.id,name:b.name,email:b.email,departmentId:b.departmentId})),[e]);return q.jsxs(ir,{children:[q.jsx(or,{setSearchText:t,selectedDepartments:w,setSelectedDepartments:h,departments:u,setIsAddModalVisible:n}),q.jsx(tn,{scroll:{x:"max-content"},dataSource:C,columns:E,rowKey:"key",pagination:I?{size:"default",pageSize:9}:!1}),q.jsx(rr,{isAddModalVisible:r,handleAddEmployee:o,handleCloseModal:l,form:m,departments:u})]})}),ir=he.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;export{ur as default};
