import"./vue-router.e3e1f7d8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3d436d2e-958c-4f3b-9d89-26bef132d56d",e._sentryDebugIdIdentifier="sentry-dbid-3d436d2e-958c-4f3b-9d89-26bef132d56d")}catch{}})();const l=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var d;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(d=e.interval)!=null?d:l)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.25fe7b2b.js.map
