import{u as n}from"./router.dacf10ea.js";import{r as o,w as a}from"./runnerData.d647568b.js";import"./vue-router.2dca7c0b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1b6eb6f5-98b1-4b24-8dd8-45cabe6d8c31",e._sentryDebugIdIdentifier="sentry-dbid-1b6eb6f5-98b1-4b24-8dd8-45cabe6d8c31")}catch{}})();async function c(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:s}=await r.json();return s?o(s):null}async function i(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return a({});const r=await t.json();return a(r)}export{c as f,i as g};
//# sourceMappingURL=api.e0da5345.js.map
