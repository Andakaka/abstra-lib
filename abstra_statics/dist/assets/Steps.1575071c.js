import{A as n}from"./index.6badd21f.js";import{d as a,f as o,X as r,b as f,u as c,Y as l,R as p,o as d,$ as u}from"./vue-router.8b9cf673.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="aebf6fa3-b022-4284-87e2-91ab1942ce9b",e._sentryDebugIdIdentifier="sentry-dbid-aebf6fa3-b022-4284-87e2-91ab1942ce9b")}catch{}})();const i=a({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=o(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",description:""})):[]);return(b,m)=>e.stepsInfo?(d(),r("nav",{key:0,class:"p-steps",style:l({maxWidth:Math.min(e.stepsInfo.total*3.5,100)+"%"})},[f(c(n),{current:e.stepsInfo.current-1,items:s.value,responsive:!1},null,8,["current","items"])],4)):p("",!0)}});const I=u(i,[["__scopeId","data-v-1ef844ba"]]);export{I as S};
//# sourceMappingURL=Steps.1575071c.js.map
