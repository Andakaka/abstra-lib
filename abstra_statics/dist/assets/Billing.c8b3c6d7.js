import{a as g}from"./asyncComputed.b13121c7.js";import{d as b,ed as y,W as _,u as e,c as w,X as x,b as a,w as o,o as l,db as C,aF as p,df as h,bS as I,a as k,ec as v}from"./vue-router.6c90459c.js";import"./gateway.cd25c5f8.js";import{O as B}from"./organization.1fab8480.js";import"./tables.cfb725dc.js";import{C as c}from"./router.3a1235c9.js";import{L as D}from"./LoadingContainer.5ab9806b.js";import{A as N}from"./index.a56cad83.js";import{C as z}from"./Card.96f85b7d.js";import"./popupNotifcation.20a67f6d.js";import"./record.08a02a5d.js";import"./string.d7d296b7.js";import"./TabPane.96570f1e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c658bab8-2089-4a49-97ab-722b042ba5e3",t._sentryDebugIdIdentifier="sentry-dbid-c658bab8-2089-4a49-97ab-722b042ba5e3")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=b({__name:"Billing",setup(t){const s=y().params.organizationId,{loading:u,result:f}=g(()=>B.get(s));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(u)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(f))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.c8b3c6d7.js.map
