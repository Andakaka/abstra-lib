import{a as g}from"./asyncComputed.53683822.js";import{d as y,ed as _,W as b,u as e,c as w,X as x,b as a,w as o,o as l,db as C,aF as p,df as h,bS as I,a as k,ec as v}from"./vue-router.a6971673.js";import"./gateway.d30c1762.js";import{O as B}from"./organization.71d46d4f.js";import"./tables.6ad1c28e.js";import{C as f}from"./router.ac5cb643.js";import{L as D}from"./LoadingContainer.794776e7.js";import{A as N}from"./index.b15200e8.js";import{C as z}from"./Card.f9d63b65.js";import"./popupNotifcation.55116843.js";import"./record.2e7dfac5.js";import"./string.0cafa7d2.js";import"./TabPane.f0359f4b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="5a36e96a-f379-4dfb-bf39-0222ad48d842",t._sentryDebugIdIdentifier="sentry-dbid-5a36e96a-f379-4dfb-bf39-0222ad48d842")}catch{}})();const M={key:1},A={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},H=y({__name:"Billing",setup(t){const s=_().params.organizationId,{loading:c,result:u}=g(()=>B.get(s));b(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const m=()=>f.showNewMessage("I want to upgrade my plan");return(V,j)=>e(c)?(l(),w(D,{key:0})):(l(),x("div",M,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[p("Current plan")]),_:1})]),_:1}),a(e(N),{style:{"margin-top":"0"}}),a(e(z),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(I),{onClick:m},{default:o(()=>[p("Upgrade")]),_:1})]),default:o(()=>{var r,i,d;return[k("div",A,v((d=(i=(r=e(u))==null?void 0:r.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{H as default};
//# sourceMappingURL=Billing.1a4186cc.js.map
