import{d as o}from"./router.e6d88338.js";import{g as t}from"./api.3c3692c6.js";import{e as s}from"./vue-router.923cbcd8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="50d2e22c-3faa-4775-9a8f-3116e9493cc8",e._sentryDebugIdIdentifier="sentry-dbid-50d2e22c-3faa-4775-9a8f-3116e9493cc8")}catch{}})();const f=o("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await t(),e.value.loading=!1}}}});export{f as u};
//# sourceMappingURL=workspaceStore.81bd05eb.js.map
