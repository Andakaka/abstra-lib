import{u as w,A as r,a as A}from"./Avatar.b304db6d.js";import{d as I,ah as $,f as k,aK as D,bT as E,aC as G,aE as N,b as l,cN as _,ak as c}from"./vue-router.5aefd93b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c9d6fb31-a759-41dc-bc67-d57f9124f2eb",e._sentryDebugIdIdentifier="sentry-dbid-c9d6fb31-a759-41dc-bc67-d57f9124f2eb")}catch{}})();const j=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:j(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=k(()=>`${y.value}-group`),[v,b]=w(y);return D(()=>{const d={size:e.size,shape:e.shape};A(d)}),()=>{const{maxPopoverPlacement:d="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=E(m,e),s=G(P).map((o,f)=>N(o,{key:`avatar-key-${f}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),f=s.slice(a,u);return o.push(l(_,{key:"avatar-popover-key",content:f,trigger:C,placement:d,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),p=O;r.Group=p;r.install=function(e){return e.component(r.name,r),e.component(p.name,p),e};export{p as G};
//# sourceMappingURL=index.13245bd3.js.map
