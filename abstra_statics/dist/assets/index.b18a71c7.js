import{d as Q,ah as T,dQ as V,dR as L,f as o,e as O,g as U,aQ as W,b as f,S as m,aR as q,ak as G,cU as h,au as R,bt as j,aM as H,ai as J}from"./vue-router.40a17711.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="aee46aa6-94c5-433b-91c1-e967436280fc",e._sentryDebugIdIdentifier="sentry-dbid-aee46aa6-94c5-433b-91c1-e967436280fc")}catch{}})();const K={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:R.oneOf(j("horizontal","vertical")).def("horizontal"),align:R.oneOf(j("start","end","center","baseline")),wrap:H()});function Y(e){return typeof e=="string"?K[e]:e||0}const r=Q({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:x}=T("space",e),[k,B]=V(n),z=L(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=y==null?void 0:y.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),b=O(),u=O();U(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>Y(a))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),E=o(()=>J(n.value,B.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),F=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),M=o(()=>{const a={};return z.value&&(a.columnGap=`${b.value}px`,a.rowGap=`${u.value}px`),m(m({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:P="horizontal"}=e,_=(a=l.default)===null||a===void 0?void 0:a.call(l),C=W(_),I=C.length;if(I===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),A=`${n.value}-item`,D=b.value,S=I-1;return f("div",G(G({},g),{},{class:[E.value,g.class],style:[M.value,g.style]}),[C.map((N,v)=>{let $=_.indexOf(N);$===-1&&($=`$$space-${v}`);let p={};return z.value||(P==="vertical"?v<S&&(p={marginBottom:`${D/(d?2:1)}px`}):p=m(m({},v<S&&{[F.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),k(f(q,{key:$},[f("div",{class:A,style:p},[N]),v<S&&d&&f("span",{class:`${A}-split`,style:p},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.b18a71c7.js.map
