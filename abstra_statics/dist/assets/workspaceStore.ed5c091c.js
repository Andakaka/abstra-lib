import{d as o}from"./router.6cffb65f.js";import{g as t}from"./api.e036e6c3.js";import{e as s}from"./vue-router.e425a84b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="aac34495-c4d0-4315-aaa0-e7bde931f476",e._sentryDebugIdIdentifier="sentry-dbid-aac34495-c4d0-4315-aaa0-e7bde931f476")}catch{}})();const f=o("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await t(),e.value.loading=!1}}}});export{f as u};
//# sourceMappingURL=workspaceStore.ed5c091c.js.map
