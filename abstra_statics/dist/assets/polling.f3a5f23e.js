import"./vue-router.8b9cf673.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="20d36b8f-9cc8-4d81-802c-63968849530a",e._sentryDebugIdIdentifier="sentry-dbid-20d36b8f-9cc8-4d81-802c-63968849530a")}catch{}})();const i=1e3,c=e=>{let n=null;return{startPolling:()=>{const t=async()=>{var o;try{!document.hidden&&!e.keepPollingOnOutOfFocus&&await e.task()}finally{n=setTimeout(t,(o=e.interval)!=null?o:i)}};t()},endPolling:()=>{n&&clearTimeout(n)}}};export{c as u};
//# sourceMappingURL=polling.f3a5f23e.js.map
