import{a as g}from"./asyncComputed.df150d99.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,d9 as C,aF as p,dd as h,bP as I,a as k,ec as v}from"./vue-router.d3011e56.js";import"./gateway.26f1a505.js";import{O as B}from"./organization.6cf93806.js";import"./tables.43e613d1.js";import{C as c}from"./router.5232d9df.js";import{L as D}from"./LoadingContainer.3f664807.js";import{A as N}from"./index.930334e4.js";import{C as z}from"./Card.09360ba2.js";import"./popupNotifcation.c8a5f973.js";import"./record.e2850acf.js";import"./string.6f3d2657.js";import"./TabPane.c65a522b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="d5f769c5-5e36-4007-beb2-5edf717d0187",t._sentryDebugIdIdentifier="sentry-dbid-d5f769c5-5e36-4007-beb2-5edf717d0187")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.4c90c815.js.map
