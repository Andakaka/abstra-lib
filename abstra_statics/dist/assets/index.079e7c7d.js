import{u as w,A as r,a as A}from"./Avatar.e7f0023e.js";import{d as I,a8 as $,f as k,aC as D,bM as G,au as _,aw as j,b as l,cH as E,ab as c}from"./vue-router.9a8a0cbc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="202ec777-1d55-47f0-bd23-edb332df3e1e",e._sentryDebugIdIdentifier="sentry-dbid-202ec777-1d55-47f0-bd23-edb332df3e1e")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),d=k(()=>`${y.value}-group`),[v,b]=w(y);return D(()=>{const i={size:e.size,shape:e.shape};A(i)}),()=>{const{maxPopoverPlacement:i="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,g={[d.value]:!0,[`${d.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=G(m,e),s=_(P).map((o,p)=>j(o,{key:`avatar-key-${p}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),p=s.slice(a,u);return o.push(l(E,{key:"avatar-popover-key",content:p,trigger:C,placement:i,overlayClassName:`${d.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.079e7c7d.js.map
