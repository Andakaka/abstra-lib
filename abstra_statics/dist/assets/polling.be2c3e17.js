import"./vue-router.eed3d3bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6b4e8f53-9e16-4b13-89a4-abc5cf4f2013",e._sentryDebugIdIdentifier="sentry-dbid-6b4e8f53-9e16-4b13-89a4-abc5cf4f2013")}catch{}})();const i=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.be2c3e17.js.map
