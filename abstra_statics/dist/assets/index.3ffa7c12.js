import{d as T,a8 as V,dK as J,dL as K,f as o,e as N,g as M,a9 as W,S as f,aI as q,b as m,aJ as H,ab as E,cO as h,am as G,bl as j,aE as Q}from"./vue-router.1705e631.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="40e12a27-d3e1-439f-b7b4-40c1aeaa52ce",e._sentryDebugIdIdentifier="sentry-dbid-40e12a27-d3e1-439f-b7b4-40c1aeaa52ce")}catch{}})();const U={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(j("horizontal","vertical")).def("horizontal"),align:G.oneOf(j("start","end","center","baseline")),wrap:Q()});function Y(e){return typeof e=="string"?U[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:x}=V("space",e),[B,F]=J(n),z=K(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=y==null?void 0:y.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),b=N(),u=N();M(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>Y(a))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),k=o(()=>W(n.value,F.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),L=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),P=o(()=>{const a={};return z.value&&(a.columnGap=`${b.value}px`,a.rowGap=`${u.value}px`),f(f({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:R="horizontal"}=e,_=(a=l.default)===null||a===void 0?void 0:a.call(l),I=q(_),C=I.length;if(C===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),A=`${n.value}-item`,D=b.value,S=C-1;return m("div",E(E({},g),{},{class:[k.value,g.class],style:[P.value,g.style]}),[I.map((O,v)=>{let $=_.indexOf(O);$===-1&&($=`$$space-${v}`);let p={};return z.value||(R==="vertical"?v<S&&(p={marginBottom:`${D/(d?2:1)}px`}):p=f(f({},v<S&&{[L.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(m(H,{key:$},[m("div",{class:A,style:p},[O]),v<S&&d&&m("span",{class:`${A}-split`,style:p},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.3ffa7c12.js.map
