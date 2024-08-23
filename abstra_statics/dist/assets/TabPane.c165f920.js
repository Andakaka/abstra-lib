import{dY as Ke,dZ as et,d_ as ft,d$ as pt,e0 as ht,e1 as gt,e2 as mt,e3 as $t,Q as W,aq as Oe,a9 as ye,d as ee,e as U,f as H,b as p,b7 as q,ai as ie,aK as we,S as T,cj as L,W as Pe,g as se,bC as yt,e4 as xt,by as St,bw as _t,e5 as Ct,au as Ie,aN as F,V as Tt,B as wt,K as Pt,bF as It,al as Ge,ak as J,as as xe,e6 as $e,aE as Rt,aP as Et,e7 as Xe,ac as Bt,ad as Lt,an as At,ao as tt,dv as at,ap as nt,aC as Dt,aj as Ot,aL as Ce,b6 as Mt,aM as kt,az as Nt,bY as Wt,at as Ht,c7 as De,ah as zt,b4 as Kt,aW as je,a$ as Gt}from"./vue-router.d51a64d9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e5089b05-f86b-4a00-8838-8f881ceb39db",e._sentryDebugIdIdentifier="sentry-dbid-e5089b05-f86b-4a00-8838-8f881ceb39db")}catch{}})();function Xt(e,t,a,o){if(!Ke(e))return e;t=et(t,e);for(var i=-1,l=t.length,n=l-1,c=e;c!=null&&++i<l;){var u=ft(t[i]),v=a;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=n){var b=c[u];v=o?o(b,u,c):void 0,v===void 0&&(v=Ke(b)?b:pt(t[i+1])?[]:{})}ht(c,u,v),c=c[u]}return e}function jt(e,t,a){for(var o=-1,i=t.length,l={};++o<i;){var n=t[o],c=gt(e,n);a(c,n)&&Xt(l,et(n,e),c)}return l}function Ft(e,t){return jt(e,t,function(a,o){return mt(e,o)})}var Vt=$t(function(e,t){return e==null?{}:Ft(e,t)});const ot=Vt;function Yt(e){const t=W(),a=W(!1);function o(){for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];a.value||(ye.cancel(t.value),t.value=ye(()=>{e(...l)}))}return Oe(()=>{a.value=!0,ye.cancel(t.value)}),o}function qt(e){const t=W([]),a=W(typeof e=="function"?e():e),o=Yt(()=>{let l=a.value;t.value.forEach(n=>{l=n(l)}),t.value=[],a.value=l});function i(l){t.value.push(l),o()}return[a,i]}const Ut=ee({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:o}=t;const i=U();function l(u){var v;!((v=e.tab)===null||v===void 0)&&v.disabled||e.onClick(u)}a({domRef:i});function n(u){var v;u.preventDefault(),u.stopPropagation(),e.editable.onEdit("remove",{key:(v=e.tab)===null||v===void 0?void 0:v.key,event:u})}const c=H(()=>{var u;return e.editable&&e.closable!==!1&&!(!((u=e.tab)===null||u===void 0)&&u.disabled)});return()=>{var u;const{prefixCls:v,id:b,active:S,tab:{key:h,tab:s,disabled:y,closeIcon:x},renderWrapper:w,removeAriaLabel:_,editable:D,onFocus:K}=e,O=`${v}-tab`,r=p("div",{key:h,ref:i,class:ie(O,{[`${O}-with-remove`]:c.value,[`${O}-active`]:S,[`${O}-disabled`]:y}),style:o.style,onClick:l},[p("div",{role:"tab","aria-selected":S,id:b&&`${b}-tab-${h}`,class:`${O}-btn`,"aria-controls":b&&`${b}-panel-${h}`,"aria-disabled":y,tabindex:y?null:0,onClick:m=>{m.stopPropagation(),l(m)},onKeydown:m=>{[q.SPACE,q.ENTER].includes(m.which)&&(m.preventDefault(),l(m))},onFocus:K},[typeof s=="function"?s():s]),c.value&&p("button",{type:"button","aria-label":_||"remove",tabindex:0,class:`${O}-remove`,onClick:m=>{m.stopPropagation(),n(m)}},[(x==null?void 0:x())||((u=D.removeIcon)===null||u===void 0?void 0:u.call(D))||"\xD7"])]);return w?w(r):r}}}),Fe={width:0,height:0,left:0,top:0};function Zt(e,t){const a=U(new Map);return we(()=>{var o,i;const l=new Map,n=e.value,c=t.value.get((o=n[0])===null||o===void 0?void 0:o.key)||Fe,u=c.left+c.width;for(let v=0;v<n.length;v+=1){const{key:b}=n[v];let S=t.value.get(b);S||(S=t.value.get((i=n[v-1])===null||i===void 0?void 0:i.key)||Fe);const h=l.get(b)||T({},S);h.right=u-h.left-h.width,l.set(b,h)}a.value=new Map(l)}),a}const it=ee({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:o}=t;const i=U();return a({domRef:i}),()=>{const{prefixCls:l,editable:n,locale:c}=e;return!n||n.showAdd===!1?null:p("button",{ref:i,type:"button",class:`${l}-nav-add`,style:o.style,"aria-label":(c==null?void 0:c.addAriaLabel)||"Add tab",onClick:u=>{n.onEdit("add",{event:u})}},[n.addIcon?n.addIcon():"+"])}}}),Qt={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ie.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:F()},Jt=ee({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:Qt,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const[i,l]=L(!1),[n,c]=L(null),u=s=>{const y=e.tabs.filter(_=>!_.disabled);let x=y.findIndex(_=>_.key===n.value)||0;const w=y.length;for(let _=0;_<w;_+=1){x=(x+s+w)%w;const D=y[x];if(!D.disabled){c(D.key);return}}},v=s=>{const{which:y}=s;if(!i.value){[q.DOWN,q.SPACE,q.ENTER].includes(y)&&(l(!0),s.preventDefault());return}switch(y){case q.UP:u(-1),s.preventDefault();break;case q.DOWN:u(1),s.preventDefault();break;case q.ESC:l(!1);break;case q.SPACE:case q.ENTER:n.value!==null&&e.onTabClick(n.value,s);break}},b=H(()=>`${e.id}-more-popup`),S=H(()=>n.value!==null?`${b.value}-${n.value}`:null),h=(s,y)=>{s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:y,event:s})};return Pe(()=>{se(n,()=>{const s=document.getElementById(S.value);s&&s.scrollIntoView&&s.scrollIntoView(!1)},{flush:"post",immediate:!0})}),se(i,()=>{i.value||c(null)}),yt({}),()=>{var s;const{prefixCls:y,id:x,tabs:w,locale:_,mobile:D,moreIcon:K=((s=o.moreIcon)===null||s===void 0?void 0:s.call(o))||p(xt,null,null),moreTransitionName:O,editable:r,tabBarGutter:m,rtl:d,onTabClick:$,popupClassName:E}=e;if(!w.length)return null;const P=`${y}-dropdown`,G=_==null?void 0:_.dropdownAriaLabel,le={[d?"marginRight":"marginLeft"]:m};w.length||(le.visibility="hidden",le.order=1);const de=ie({[`${P}-rtl`]:d,[`${E}`]:!0}),be=D?null:p(Ct,{prefixCls:P,trigger:["hover"],visible:i.value,transitionName:O,onVisibleChange:l,overlayClassName:de,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>p(St,{onClick:I=>{let{key:Z,domEvent:M}=I;$(Z,M),l(!1)},id:b.value,tabindex:-1,role:"listbox","aria-activedescendant":S.value,selectedKeys:[n.value],"aria-label":G!==void 0?G:"expanded dropdown"},{default:()=>[w.map(I=>{var Z,M;const V=r&&I.closable!==!1&&!I.disabled;return p(_t,{key:I.key,id:`${b.value}-${I.key}`,role:"option","aria-controls":x&&`${x}-panel-${I.key}`,disabled:I.disabled},{default:()=>[p("span",null,[typeof I.tab=="function"?I.tab():I.tab]),V&&p("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${P}-menu-item-remove`,onClick:Y=>{Y.stopPropagation(),h(Y,I.key)}},[((Z=I.closeIcon)===null||Z===void 0?void 0:Z.call(I))||((M=r.removeIcon)===null||M===void 0?void 0:M.call(r))||"\xD7"])]})})]}),default:()=>p("button",{type:"button",class:`${y}-nav-more`,style:le,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":b.value,id:`${x}-more`,"aria-expanded":i.value,onKeydown:v},[K])});return p("div",{class:ie(`${y}-nav-operations`,a.class),style:a.style},[be,p(it,{prefixCls:y,locale:_,editable:r},null)])}}}),lt=Symbol("tabsContextKey"),rt=e=>{Tt(lt,e)},st=()=>wt(lt,{tabs:U([]),prefixCls:U()});ee({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup(e,t){let{slots:a}=t;return rt(Pt(e)),()=>{var o;return(o=a.default)===null||o===void 0?void 0:o.call(a)}}});const ea=.1,Ve=.01,Te=20,Ye=Math.pow(.995,Te);function ta(e,t){const[a,o]=L(),[i,l]=L(0),[n,c]=L(0),[u,v]=L(),b=U();function S(r){const{screenX:m,screenY:d}=r.touches[0];o({x:m,y:d}),clearInterval(b.value)}function h(r){if(!a.value)return;r.preventDefault();const{screenX:m,screenY:d}=r.touches[0],$=m-a.value.x,E=d-a.value.y;t($,E),o({x:m,y:d});const P=Date.now();c(P-i.value),l(P),v({x:$,y:E})}function s(){if(!a.value)return;const r=u.value;if(o(null),v(null),r){const m=r.x/n.value,d=r.y/n.value,$=Math.abs(m),E=Math.abs(d);if(Math.max($,E)<ea)return;let P=m,G=d;b.value=setInterval(()=>{if(Math.abs(P)<Ve&&Math.abs(G)<Ve){clearInterval(b.value);return}P*=Ye,G*=Ye,t(P*Te,G*Te)},Te)}}const y=U();function x(r){const{deltaX:m,deltaY:d}=r;let $=0;const E=Math.abs(m),P=Math.abs(d);E===P?$=y.value==="x"?m:d:E>P?($=m,y.value="x"):($=d,y.value="y"),t(-$,-$)&&r.preventDefault()}const w=U({onTouchStart:S,onTouchMove:h,onTouchEnd:s,onWheel:x});function _(r){w.value.onTouchStart(r)}function D(r){w.value.onTouchMove(r)}function K(r){w.value.onTouchEnd(r)}function O(r){w.value.onWheel(r)}Pe(()=>{var r,m;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",K,{passive:!1}),(r=e.value)===null||r===void 0||r.addEventListener("touchstart",_,{passive:!1}),(m=e.value)===null||m===void 0||m.addEventListener("wheel",O,{passive:!1})}),Oe(()=>{document.removeEventListener("touchmove",D),document.removeEventListener("touchend",K)})}function qe(e,t){const a=U(e);function o(i){const l=typeof i=="function"?i(a.value):i;l!==a.value&&t(l,a.value),a.value=l}return[a,o]}const Ue={width:0,height:0,left:0,top:0,right:0},aa=()=>({id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:xe(),editable:xe(),moreIcon:Ie.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:xe(),popupClassName:String,getPopupContainer:F(),onTabClick:{type:Function},onTabScroll:{type:Function}}),Ze=ee({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:aa(),slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:a,slots:o}=t;const{tabs:i,prefixCls:l}=st(),n=W(),c=W(),u=W(),v=W(),[b,S]=It(),h=H(()=>e.tabPosition==="top"||e.tabPosition==="bottom"),[s,y]=qe(0,(g,f)=>{h.value&&e.onTabScroll&&e.onTabScroll({direction:g>f?"left":"right"})}),[x,w]=qe(0,(g,f)=>{!h.value&&e.onTabScroll&&e.onTabScroll({direction:g>f?"top":"bottom"})}),[_,D]=L(0),[K,O]=L(0),[r,m]=L(null),[d,$]=L(null),[E,P]=L(0),[G,le]=L(0),[de,be]=qt(new Map),I=Zt(i,de),Z=H(()=>`${l.value}-nav-operations-hidden`),M=W(0),V=W(0);we(()=>{h.value?e.rtl?(M.value=0,V.value=Math.max(0,_.value-r.value)):(M.value=Math.min(0,r.value-_.value),V.value=0):(M.value=Math.min(0,d.value-K.value),V.value=0)});const Y=g=>g<M.value?M.value:g>V.value?V.value:g,fe=W(),[z,pe]=L(),he=()=>{pe(Date.now())},ge=()=>{clearTimeout(fe.value)},Se=(g,f)=>{g(C=>Y(C+f))};ta(n,(g,f)=>{if(h.value){if(r.value>=_.value)return!1;Se(y,g)}else{if(d.value>=K.value)return!1;Se(w,f)}return ge(),he(),!0}),se(z,()=>{ge(),z.value&&(fe.value=setTimeout(()=>{pe(0)},100))});const ce=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey;const f=I.value.get(g)||{width:0,height:0,left:0,right:0,top:0};if(h.value){let C=s.value;e.rtl?f.right<s.value?C=f.right:f.right+f.width>s.value+r.value&&(C=f.right+f.width-r.value):f.left<-s.value?C=-f.left:f.left+f.width>-s.value+r.value&&(C=-(f.left+f.width-r.value)),w(0),y(Y(C))}else{let C=x.value;f.top<-x.value?C=-f.top:f.top+f.height>-x.value+d.value&&(C=-(f.top+f.height-d.value)),y(0),w(Y(C))}},Re=W(0),Ee=W(0);we(()=>{let g,f,C,R,k,N;const re=I.value;["top","bottom"].includes(e.tabPosition)?(g="width",R=r.value,k=_.value,N=E.value,f=e.rtl?"right":"left",C=Math.abs(s.value)):(g="height",R=d.value,k=_.value,N=G.value,f="top",C=-x.value);let X=R;k+N>R&&k<R&&(X=R-N);const Q=i.value;if(!Q.length)return[Re.value,Ee.value]=[0,0];const ae=Q.length;let ue=ae;for(let A=0;A<ae;A+=1){const j=re.get(Q[A].key)||Ue;if(j[f]+j[g]>C+X){ue=A-1;break}}let B=0;for(let A=ae-1;A>=0;A-=1)if((re.get(Q[A].key)||Ue)[f]<C){B=A+1;break}return[Re.value,Ee.value]=[B,ue]});const Be=()=>{var g,f,C,R,k;const N=((g=n.value)===null||g===void 0?void 0:g.offsetWidth)||0,re=((f=n.value)===null||f===void 0?void 0:f.offsetHeight)||0,X=((C=v.value)===null||C===void 0?void 0:C.$el)||{},Q=X.offsetWidth||0,ae=X.offsetHeight||0;m(N),$(re),P(Q),le(ae);const ue=(((R=c.value)===null||R===void 0?void 0:R.offsetWidth)||0)-Q,B=(((k=c.value)===null||k===void 0?void 0:k.offsetHeight)||0)-ae;D(ue),O(B),be(()=>{const A=new Map;return i.value.forEach(j=>{let{key:ve}=j;const ne=S.value.get(ve),oe=(ne==null?void 0:ne.$el)||ne;oe&&A.set(ve,{width:oe.offsetWidth,height:oe.offsetHeight,left:oe.offsetLeft,top:oe.offsetTop})}),A})},ke=H(()=>[...i.value.slice(0,Re.value),...i.value.slice(Ee.value+1)]),[ct,ut]=L(),te=H(()=>I.value.get(e.activeKey)),Ne=W(),We=()=>{ye.cancel(Ne.value)};se([te,h,()=>e.rtl],()=>{const g={};te.value&&(h.value?(e.rtl?g.right=$e(te.value.right):g.left=$e(te.value.left),g.width=$e(te.value.width)):(g.top=$e(te.value.top),g.height=$e(te.value.height))),We(),Ne.value=ye(()=>{ut(g)})}),se([()=>e.activeKey,te,I,h],()=>{ce()},{flush:"post"}),se([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>i.value],()=>{Be()},{flush:"post"});const Le=g=>{let{position:f,prefixCls:C,extra:R}=g;if(!R)return null;const k=R==null?void 0:R({position:f});return k?p("div",{class:`${C}-extra-content`},[k]):null};return Oe(()=>{ge(),We()}),()=>{const{id:g,animated:f,activeKey:C,rtl:R,editable:k,locale:N,tabPosition:re,tabBarGutter:X,onTabClick:Q}=e,{class:ae,style:ue}=a,B=l.value,A=!!ke.value.length,j=`${B}-nav-wrap`;let ve,ne,oe,He;h.value?R?(ne=s.value>0,ve=s.value+r.value<_.value):(ve=s.value<0,ne=-s.value+r.value<_.value):(oe=x.value<0,He=-x.value+d.value<K.value);const _e={};re==="top"||re==="bottom"?_e[R?"marginRight":"marginLeft"]=typeof X=="number"?`${X}px`:X:_e.marginTop=typeof X=="number"?`${X}px`:X;const ze=i.value.map((Ae,vt)=>{const{key:me}=Ae;return p(Ut,{id:g,prefixCls:B,key:me,tab:Ae,style:vt===0?void 0:_e,closable:Ae.closable,editable:k,active:me===C,removeAriaLabel:N==null?void 0:N.removeAriaLabel,ref:b(me),onClick:bt=>{Q(me,bt)},onFocus:()=>{ce(me),he(),n.value&&(R||(n.value.scrollLeft=0),n.value.scrollTop=0)}},o)});return p("div",{role:"tablist",class:ie(`${B}-nav`,ae),style:ue,onKeydown:()=>{he()}},[p(Le,{position:"left",prefixCls:B,extra:o.leftExtra},null),p(Ge,{onResize:Be},{default:()=>[p("div",{class:ie(j,{[`${j}-ping-left`]:ve,[`${j}-ping-right`]:ne,[`${j}-ping-top`]:oe,[`${j}-ping-bottom`]:He}),ref:n},[p(Ge,{onResize:Be},{default:()=>[p("div",{ref:c,class:`${B}-nav-list`,style:{transform:`translate(${s.value}px, ${x.value}px)`,transition:z.value?"none":void 0}},[ze,p(it,{ref:v,prefixCls:B,locale:N,editable:k,style:T(T({},ze.length===0?void 0:_e),{visibility:A?"hidden":null})},null),p("div",{class:ie(`${B}-ink-bar`,{[`${B}-ink-bar-animated`]:f.inkBar}),style:ct.value},null)])]})])]}),p(Jt,J(J({},e),{},{removeAriaLabel:N==null?void 0:N.removeAriaLabel,ref:u,prefixCls:B,tabs:ke.value,class:!A&&Z.value}),ot(o,["moreIcon"])),p(Le,{position:"right",prefixCls:B,extra:o.rightExtra},null),p(Le,{position:"right",prefixCls:B,extra:o.tabBarExtraContent},null)])}}}),na=ee({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=st();return()=>{const{id:o,activeKey:i,animated:l,tabPosition:n,rtl:c,destroyInactiveTabPane:u}=e,v=l.tabPane,b=a.value,S=t.value.findIndex(h=>h.key===i);return p("div",{class:`${b}-content-holder`},[p("div",{class:[`${b}-content`,`${b}-content-${n}`,{[`${b}-content-animated`]:v}],style:S&&v?{[c?"marginRight":"marginLeft"]:`-${S}00%`}:null},[t.value.map(h=>Rt(h.node,{key:h.key,prefixCls:b,tabKey:h.key,id:o,animated:v,active:h.key===i,destroyInactiveTabPane:u}))])])}}});var oa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const ia=oa;function Qe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){la(e,i,a[i])})}return e}function la(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Me=function(t,a){var o=Qe({},t,a.attrs);return p(Et,Qe({},o,{icon:ia}),null)};Me.displayName="PlusOutlined";Me.inheritAttrs=!1;const ra=Me,sa=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[Xe(e,"slide-up"),Xe(e,"slide-down")]]},da=sa,ca=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:o,tabsCardGutter:i,colorSplit:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:o,border:`${e.lineWidth}px ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${i}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${i}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ua=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:o}=e;return{[`${t}-dropdown`]:T(T({},tt(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${o}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":T(T({},At),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},va=e=>{const{componentCls:t,margin:a,colorSplit:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${o}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ba=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},fa=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:o,iconCls:i,tabsHorizontalGutter:l}=e,n=`${t}-tab`;return{[n]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":T({"&:focus:not(:focus-visible), &:active":{color:a}},at(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:o},[`&${n}-active ${n}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${n}-disabled ${n}-btn, &${n}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${n}-remove ${i}`]:{margin:0},[i]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${n} + ${n}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${l}px`}}}},pa=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:o,tabsCardGutter:i}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[o]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[o]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${i}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ha=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:o,tabsCardGutter:i,tabsHoverColor:l,tabsActiveColor:n,colorSplit:c}=e;return{[t]:T(T(T(T({},tt(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:T({minWidth:`${o}px`,marginLeft:{_skip_check_:!0,value:`${i}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:n}},at(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),fa(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%",["&-animated"]:{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},ga=Bt("Tabs",e=>{const t=e.controlHeightLG,a=Lt(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[ba(a),pa(a),va(a),ua(a),ca(a),ha(a),da(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));let Je=0;const dt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:F(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:Ce(),animated:Mt([Boolean,Object]),renderTabBar:F(),tabBarGutter:{type:Number},tabBarStyle:xe(),tabPosition:Ce(),destroyInactiveTabPane:kt(),hideAdd:Boolean,type:Ce(),size:Ce(),centered:Boolean,onEdit:F(),onChange:F(),onTabClick:F(),onTabScroll:F(),"onUpdate:activeKey":F(),locale:xe(),onPrevClick:F(),onNextClick:F(),tabBarExtraContent:Ie.any});function ma(e){return e.map(t=>{if(Nt(t)){const a=T({},t.props||{});for(const[h,s]of Object.entries(a))delete a[h],a[Wt(h)]=s;const o=t.children||{},i=t.key!==void 0?t.key:void 0,{tab:l=o.tab,disabled:n,forceRender:c,closable:u,animated:v,active:b,destroyInactiveTabPane:S}=a;return T(T({key:i},a),{node:t,closeIcon:o.closeIcon,tab:l,disabled:n===""||n,forceRender:c===""||c,closable:u===""||u,animated:v===""||v,active:b===""||b,destroyInactiveTabPane:S===""||S})}return null}).filter(t=>t)}const $a=ee({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:T(T({},nt(dt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:Ht()}),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;De(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),De(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),De(o.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:i,direction:l,size:n,rootPrefixCls:c,getPopupContainer:u}=zt("tabs",e),[v,b]=ga(i),S=H(()=>l.value==="rtl"),h=H(()=>{const{animated:d,tabPosition:$}=e;return d===!1||["left","right"].includes($)?{inkBar:!1,tabPane:!1}:d===!0?{inkBar:!0,tabPane:!0}:T({inkBar:!0,tabPane:!1},typeof d=="object"?d:{})}),[s,y]=L(!1);Pe(()=>{y(Kt())});const[x,w]=je(()=>{var d;return(d=e.tabs[0])===null||d===void 0?void 0:d.key},{value:H(()=>e.activeKey),defaultValue:e.defaultActiveKey}),[_,D]=L(()=>e.tabs.findIndex(d=>d.key===x.value));we(()=>{var d;let $=e.tabs.findIndex(E=>E.key===x.value);$===-1&&($=Math.max(0,Math.min(_.value,e.tabs.length-1)),w((d=e.tabs[$])===null||d===void 0?void 0:d.key)),D($)});const[K,O]=je(null,{value:H(()=>e.id)}),r=H(()=>s.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition);Pe(()=>{e.id||(O(`rc-tabs-${Je}`),Je+=1)});const m=(d,$)=>{var E,P;(E=e.onTabClick)===null||E===void 0||E.call(e,d,$);const G=d!==x.value;w(d),G&&((P=e.onChange)===null||P===void 0||P.call(e,d))};return rt({tabs:H(()=>e.tabs),prefixCls:i}),()=>{const{id:d,type:$,tabBarGutter:E,tabBarStyle:P,locale:G,destroyInactiveTabPane:le,renderTabBar:de=o.renderTabBar,onTabScroll:be,hideAdd:I,centered:Z}=e,M={id:K.value,activeKey:x.value,animated:h.value,tabPosition:r.value,rtl:S.value,mobile:s.value};let V;$==="editable-card"&&(V={onEdit:(pe,he)=>{let{key:ge,event:Se}=he;var ce;(ce=e.onEdit)===null||ce===void 0||ce.call(e,pe==="add"?Se:ge,pe)},removeIcon:()=>p(Gt,null,null),addIcon:o.addIcon?o.addIcon:()=>p(ra,null,null),showAdd:I!==!0});let Y;const fe=T(T({},M),{moreTransitionName:`${c.value}-slide-up`,editable:V,locale:G,tabBarGutter:E,onTabClick:m,onTabScroll:be,style:P,getPopupContainer:u.value,popupClassName:ie(e.popupClassName,b.value)});de?Y=de(T(T({},fe),{DefaultTabBar:Ze})):Y=p(Ze,fe,ot(o,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const z=i.value;return v(p("div",J(J({},a),{},{id:d,class:ie(z,`${z}-${r.value}`,{[b.value]:!0,[`${z}-${n.value}`]:n.value,[`${z}-card`]:["card","editable-card"].includes($),[`${z}-editable-card`]:$==="editable-card",[`${z}-centered`]:Z,[`${z}-mobile`]:s.value,[`${z}-editable`]:$==="editable-card",[`${z}-rtl`]:S.value},a.class)}),[Y,p(na,J(J({destroyInactiveTabPane:le},M),{},{animated:h.value}),null)]))}}}),Sa=ee({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:nt(dt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:o,emit:i}=t;const l=n=>{i("update:activeKey",n),i("change",n)};return()=>{var n;const c=ma(Dt((n=o.default)===null||n===void 0?void 0:n.call(o)));return p($a,J(J(J({},Ot(e,["onUpdate:activeKey"])),a),{},{onChange:l,tabs:c}),o)}}}),ya=()=>({tab:Ie.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}),_a=ee({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:ya(),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const i=U(e.forceRender);se([()=>e.active,()=>e.destroyInactiveTabPane],()=>{e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});const l=H(()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"});return()=>{var n;const{prefixCls:c,forceRender:u,id:v,active:b,tabKey:S}=e;return p("div",{id:v&&`${v}-panel-${S}`,role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":v&&`${v}-tab-${S}`,"aria-hidden":!b,style:[l.value,a.style],class:[`${c}-tabpane`,b&&`${c}-tabpane-active`,a.class]},[(b||i.value||u)&&((n=o.default)===null||n===void 0?void 0:n.call(o))])}}});export{_a as A,ia as P,Sa as T};
//# sourceMappingURL=TabPane.c165f920.js.map
