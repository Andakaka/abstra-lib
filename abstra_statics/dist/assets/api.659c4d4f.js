import{u as n}from"./router.b996562f.js";import{r as o,w as s}from"./runnerData.2063ecde.js";import"./vue-router.21f91ffc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b12d12e3-9859-4ee9-9025-abf8eaf8820e",e._sentryDebugIdIdentifier="sentry-dbid-b12d12e3-9859-4ee9-9025-abf8eaf8820e")}catch{}})();async function d(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function c(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{d as f,c as g};
//# sourceMappingURL=api.659c4d4f.js.map
