import{d as i,r as c,u as a,o as p,c as m,w as d,b as u,R as f,k as l,T as _,m as w,P as g,C as y,M as h,s as k,n as s,p as b,q as v,t as C,v as I}from"./vue-router.9b7ac35a.js";import{s as W,c as V,a as o}from"./router.519ca6c8.js";import{W as A}from"./WidgetsFrame.3fad439e.js";import{u as D}from"./workspaceStore.e40e81ee.js";import"./api.7cac27f3.js";import"./runnerData.7d0159cd.js";import"./url.c2ea602e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ab866422-3c4c-4f0f-aa65-7616c364194d",t._sentryDebugIdIdentifier="sentry-dbid-ab866422-3c4c-4f0f-aa65-7616c364194d")}catch{}})();const M=i({__name:"App",setup(t){const e=D();return e.actions.fetch(),(n,S)=>{const r=c("RouterView");return a(e).state.workspace?(p(),m(A,{key:0,"main-color":a(e).state.workspace.mainColor,theme:a(e).state.workspace.theme,"font-family":a(e).state.workspace.fontFamily,locale:a(e).state.workspace.language},{default:d(()=>[u(r,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","theme","font-family","locale"])):f("",!0)}}});class P{static init(){setInterval(()=>fetch("/_version"),20*1e3)}}(async()=>{await W();const t=V(),e=l({render:()=>b(M)});_.init(),w(e,o),P.init(),e.use(o),e.use(t),e.use(g),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",h),e.component("Message",k),s(e,v),s(e,C),s(e,I)})();
//# sourceMappingURL=player.b1976464.js.map
