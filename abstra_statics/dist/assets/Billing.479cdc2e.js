import{a as g}from"./asyncComputed.f77117da.js";import{d as y,eu as _,V as w,u as e,c as b,W as x,b as a,w as o,o as l,cY as C,ax as p,d0 as h,bL as I,a as k,et as v}from"./vue-router.6a68d184.js";import"./gateway.46301256.js";import{O as B}from"./organization.f30cf663.js";import"./tables.97d8f468.js";import{C as c}from"./router.2b01b91e.js";import{L as D}from"./LoadingContainer.35e80d23.js";import{A as N}from"./index.484a2057.js";import{C as z}from"./Card.5a15af6f.js";import"./popupNotifcation.782e5078.js";import"./record.048ae4ac.js";import"./string.1c036a5c.js";import"./TabPane.61754fc5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="75a1776f-a827-46bd-a380-c251544794a4",t._sentryDebugIdIdentifier="sentry-dbid-75a1776f-a827-46bd-a380-c251544794a4")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:u,result:f}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,L)=>e(u)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.479cdc2e.js.map
