import{u as w,A as r,a as A}from"./Avatar.3d79f694.js";import{d as I,ah as $,f as k,aK as D,bT as E,aC as G,aE as N,b as l,cN as _,ak as c}from"./vue-router.a6706c97.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="52546d3c-b611-44e5-8f48-5241db88eded",e._sentryDebugIdIdentifier="sentry-dbid-52546d3c-b611-44e5-8f48-5241db88eded")}catch{}})();const j=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:j(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),d=k(()=>`${y.value}-group`),[v,b]=w(y);return D(()=>{const i={size:e.size,shape:e.shape};A(i)}),()=>{const{maxPopoverPlacement:i="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,g={[d.value]:!0,[`${d.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=E(m,e),s=G(P).map((o,p)=>N(o,{key:`avatar-key-${p}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),p=s.slice(a,u);return o.push(l(_,{key:"avatar-popover-key",content:p,trigger:C,placement:i,overlayClassName:`${d.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.091cc73e.js.map
