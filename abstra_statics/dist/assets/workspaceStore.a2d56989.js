import{d as t}from"./router.e9ee8efe.js";import{g as a}from"./api.428ec519.js";import{e as s}from"./vue-router.3d5f6db5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="752cb463-0f6d-4e0e-8048-c6e73a50e825",e._sentryDebugIdIdentifier="sentry-dbid-752cb463-0f6d-4e0e-8048-c6e73a50e825")}catch{}})();const f=t("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await a(),e.value.loading=!1}}}});export{f as u};
//# sourceMappingURL=workspaceStore.a2d56989.js.map
