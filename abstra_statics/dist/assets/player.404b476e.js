import{d as i,r as c,u as s,o as p,c as m,w as d,b as u,R as l,k as f,T as _,m as w,P as g,C as y,M as h,s as k,n as a,p as b,q as v,t as C,v as I}from"./vue-router.e425a84b.js";import{s as W,c as V,a as o}from"./router.6cffb65f.js";import{W as A}from"./WidgetsFrame.89f74ff6.js";import{u as D}from"./workspaceStore.ed5c091c.js";import"./api.e036e6c3.js";import"./runnerData.d185ebf8.js";import"./url.fe950e3a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="508892ec-8c20-4759-b1a7-9d3702b67c37",t._sentryDebugIdIdentifier="sentry-dbid-508892ec-8c20-4759-b1a7-9d3702b67c37")}catch{}})();const M=i({__name:"App",setup(t){const e=D();return e.actions.fetch(),(n,S)=>{const r=c("RouterView");return s(e).state.workspace?(p(),m(A,{key:0,"main-color":s(e).state.workspace.mainColor,theme:s(e).state.workspace.theme,"font-family":s(e).state.workspace.fontFamily,locale:s(e).state.workspace.language},{default:d(()=>[u(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):l("",!0)}}});class P{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await W();const t=V(),e=f({render:()=>b(M)});_.init(),w(e,o),P.init(),e.use(o),e.use(t),e.use(g),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",h),e.component("Message",k),a(e,v),a(e,C),a(e,I)})();
//# sourceMappingURL=player.404b476e.js.map
