import{P as _}from"./PlayerNavbar.6495f094.js";import{u as m,i as l}from"./workspaceStore.1f11d00f.js";import{d as f,eq as h,ed as r,f as g,r as y,X as k,u as o,c as v,R as w,a as b,b as L,o as s,$ as I}from"./vue-router.5aefd93b.js";import"./metadata.fa82b8ee.js";import"./PhBug.vue.f9dd5264.js";import"./PhCheckCircle.vue.527a7db9.js";import"./PhKanban.vue.793f53f8.js";import"./PhWebhooksLogo.vue.2a25967e.js";import"./PhSignOut.vue.5741d33c.js";import"./index.13245bd3.js";import"./Avatar.b304db6d.js";import"./url.838a80f4.js";import"./colorHelpers.f15e2382.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c40d1785-801a-42cc-9c5d-fa45181aa8a5",t._sentryDebugIdIdentifier="sentry-dbid-c40d1785-801a-42cc-9c5d-fa45181aa8a5")}catch{}})();const N={class:"main-container"},C={class:"content"},R=f({__name:"Main",setup(t){const e=h(),a=m(),c=r().path,i=({path:n})=>{e.push({path:`/${n}`})},d=()=>{e.push({name:"playerLogin"})},p=g(()=>!!r().meta.hideLogin);return l(()=>e.push({name:"playerLogin"})),(n,V)=>{const u=y("RouterView");return s(),k("div",N,[o(a).state.workspace?(s(),v(_,{key:0,"current-path":o(c),"hide-login":p.value,"runner-data":o(a).state.workspace,onNavigate:i,onLoginClick:d},null,8,["current-path","hide-login","runner-data"])):w("",!0),b("section",C,[L(u)])])}}});const A=I(R,[["__scopeId","data-v-aeaee359"]]);export{A as default};
//# sourceMappingURL=Main.f75d7855.js.map
