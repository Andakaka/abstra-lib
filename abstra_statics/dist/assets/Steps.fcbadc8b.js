import{d as p,f as c,o as n,W as a,a as o,aJ as l,e9 as r,e4 as f,e6 as _,R as i,$ as u}from"./vue-router.72bc35d4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="68d18a81-f2d2-410a-b65d-2a89ef1dd4d6",e._sentryDebugIdIdentifier="sentry-dbid-68d18a81-f2d2-410a-b65d-2a89ef1dd4d6")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,d=c(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(l,null,r(d.value,(v,t)=>(n(),a("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.fcbadc8b.js.map
