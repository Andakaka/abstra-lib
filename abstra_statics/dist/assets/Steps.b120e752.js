import{d as p,f as l,o as n,W as a,a as o,aJ as d,e9 as r,e4 as _,e6 as i,R as u,$ as f}from"./vue-router.876358f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6cda6241-d997-4805-8d0a-6e53ced40597",e._sentryDebugIdIdentifier="sentry-dbid-6cda6241-d997-4805-8d0a-6e53ced40597")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},g={class:"p-menuitem-link"},I={class:"p-steps-number"},b=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(d,null,r(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",g,[o("span",I,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(b,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.b120e752.js.map
