import"./vue-router.242d8088.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d53f211e-2172-475b-beb2-248f753ac14f",e._sentryDebugIdIdentifier="sentry-dbid-d53f211e-2172-475b-beb2-248f753ac14f")}catch{}})();const i=1e3,f=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{f as u};
//# sourceMappingURL=polling.9ba35b1a.js.map
