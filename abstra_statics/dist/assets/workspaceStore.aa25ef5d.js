import{d as t}from"./router.9af638d9.js";import{g as a}from"./api.19292dd2.js";import{e as s}from"./vue-router.693c9aae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="086cd4a1-5edc-495f-8045-ee4759102f7c",e._sentryDebugIdIdentifier="sentry-dbid-086cd4a1-5edc-495f-8045-ee4759102f7c")}catch{}})();const f=t("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await a(),e.value.loading=!1}}}});export{f as u};
//# sourceMappingURL=workspaceStore.aa25ef5d.js.map
