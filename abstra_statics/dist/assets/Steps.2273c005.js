import{d as p,f as l,X as n,a,aR as d,ee as r,R as f,o,ea as _,ec as i,$ as u}from"./vue-router.4c13f3d4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="75f3b433-41d2-4ea5-9a0d-f656d62545fd",e._sentryDebugIdIdentifier="sentry-dbid-75f3b433-41d2-4ea5-9a0d-f656d62545fd")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(o(),n("nav",m,[a("ol",y,[(o(!0),n(d,null,r(c.value,(v,t)=>(o(),n("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.2273c005.js.map
