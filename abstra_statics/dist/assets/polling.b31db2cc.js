import"./vue-router.48643073.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0831e883-822e-4379-959f-44e7a672e429",e._sentryDebugIdIdentifier="sentry-dbid-0831e883-822e-4379-959f-44e7a672e429")}catch{}})();const i=1e3,r=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{r as u};
//# sourceMappingURL=polling.b31db2cc.js.map
