import{Q as c,f as l}from"./vue-router.462557a9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="adbdc8da-6ed4-4bbc-90a8-90613e5ee5ca",r._sentryDebugIdIdentifier="sentry-dbid-adbdc8da-6ed4-4bbc-90a8-90613e5ee5ca")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o));a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.772c2ff0.js.map
