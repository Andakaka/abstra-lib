import{d as i,r as c,u as a,o as p,c as d,w as m,b as f,R as u,k as l,T as _,m as w,P as g,C as y,M as h,s as k,n as s,p as v,q as b,t as C,v as I}from"./vue-router.d073354d.js";import{s as W,c as V,a as o}from"./router.3d554840.js";import{W as A}from"./WidgetsFrame.bd31a1c6.js";import{u as D}from"./workspaceStore.5fe66e94.js";import"./api.dbdd2fac.js";import"./runnerData.50c0b249.js";import"./url.a0e2e3af.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3af7205d-a2f3-4c17-87c4-78a2e22df8e0",t._sentryDebugIdIdentifier="sentry-dbid-3af7205d-a2f3-4c17-87c4-78a2e22df8e0")}catch{}})();const M=i({__name:"App",setup(t){const e=D();return e.actions.fetch(),(n,S)=>{const r=c("RouterView");return a(e).state.workspace?(p(),d(A,{key:0,"main-color":a(e).state.workspace.mainColor,theme:a(e).state.workspace.theme,"font-family":a(e).state.workspace.fontFamily,locale:a(e).state.workspace.language},{default:m(()=>[f(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):u("",!0)}}});class P{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await W();const t=V(),e=l({render:()=>v(M)});_.init(),w(e,o),P.init(),e.use(o),e.use(t),e.use(g),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",h),e.component("Message",k),s(e,b),s(e,C),s(e,I)})();
//# sourceMappingURL=player.8ce82ae6.js.map
