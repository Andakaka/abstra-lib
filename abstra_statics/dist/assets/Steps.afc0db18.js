import{d as p,f as l,o as n,W as a,a as o,aJ as r,ew as d,er as _,et as i,R as f,$ as u}from"./vue-router.21f91ffc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d7ce8484-88af-4561-9e4a-019e1c888a48",e._sentryDebugIdIdentifier="sentry-dbid-d7ce8484-88af-4561-9e4a-019e1c888a48")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},g={class:"p-menuitem-link"},I={class:"p-steps-number"},b=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",g,[o("span",I,i(t+1),1)])],2))),128))])])):f("",!0)}});const D=u(b,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.afc0db18.js.map
