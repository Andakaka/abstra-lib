import{d as p,f as l,X as n,a,aR as r,ee as d,R as f,o,ea as _,ec as i,$ as u}from"./vue-router.de4299d2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ac6eb9e8-6adf-4fe5-91ab-9b035daeb406",e._sentryDebugIdIdentifier="sentry-dbid-ac6eb9e8-6adf-4fe5-91ab-9b035daeb406")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(o(),n("nav",b,[a("ol",m,[(o(!0),n(r,null,d(c.value,(v,t)=>(o(),n("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.46af6120.js.map
