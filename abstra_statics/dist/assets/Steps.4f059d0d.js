import{d as p,f as l,W as n,a as o,aJ as d,e9 as r,R as f,o as a,e4 as _,e6 as i,$ as u}from"./vue-router.e73c6da6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="2f387c35-dd31-4fe0-80ff-89d324abd16f",e._sentryDebugIdIdentifier="sentry-dbid-2f387c35-dd31-4fe0-80ff-89d324abd16f")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(a(),n("nav",m,[o("ol",y,[(a(!0),n(d,null,r(c.value,(v,t)=>(a(),n("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.4f059d0d.js.map
