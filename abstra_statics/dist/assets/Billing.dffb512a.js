import{a as g}from"./asyncComputed.06aab964.js";import{d as y,ed as _,W as w,u as e,c as b,X as x,b as a,w as o,o as l,db as C,aF as p,df as h,bS as I,a as k,ec as v}from"./vue-router.81a421ec.js";import"./gateway.5adaf899.js";import{O as B}from"./organization.f8892023.js";import"./tables.c3b19b37.js";import{C as c}from"./router.d9c300ef.js";import{L as D}from"./LoadingContainer.ed411933.js";import{A as N}from"./index.62b9b70f.js";import{C as z}from"./Card.a332eb0e.js";import"./popupNotifcation.9e7c7c9b.js";import"./record.ccbd35de.js";import"./string.47cd6433.js";import"./TabPane.da4de918.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a92d1fe7-7bf4-471e-91d9-7aeac2781a6e",t._sentryDebugIdIdentifier="sentry-dbid-a92d1fe7-7bf4-471e-91d9-7aeac2781a6e")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:f,result:u}=g(()=>B.get(s));w(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const m=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(f)?(l(),b(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.dffb512a.js.map
