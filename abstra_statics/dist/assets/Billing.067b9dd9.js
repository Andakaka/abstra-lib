import{a as g}from"./asyncComputed.e9c28e12.js";import{d as b,ed as y,W as _,u as e,c as w,X as x,b as a,w as o,o as l,db as C,aF as p,df as h,bS as I,a as k,ec as v}from"./vue-router.de3049e8.js";import"./gateway.d03e173d.js";import{O as B}from"./organization.3b90e321.js";import"./tables.6f171ec3.js";import{C as c}from"./router.44e1f25f.js";import{L as D}from"./LoadingContainer.c76b982c.js";import{A as N}from"./index.50e6f1bb.js";import{C as z}from"./Card.9bcd1058.js";import"./popupNotifcation.deaef444.js";import"./record.a483d677.js";import"./string.32f59e79.js";import"./TabPane.e49c36f4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="fdeb39a5-e8b6-4141-8550-0bb3d2b2451e",t._sentryDebugIdIdentifier="sentry-dbid-fdeb39a5-e8b6-4141-8550-0bb3d2b2451e")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=b({__name:"Billing",setup(t){const s=y().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.067b9dd9.js.map
