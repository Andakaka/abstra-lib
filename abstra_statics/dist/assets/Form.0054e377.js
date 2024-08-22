import{b as F,j as I}from"./workspaceStore.2a20eb5e.js";import{b as U,r as A,c as x,d as T}from"./FormRunner.4c42e831.js";import{A as V}from"./api.7b82610c.js";import{d as W,e7 as L,ek as N,D as B,e as w,g as K,f as M,aC as q,V as j,a7 as G,u as t,W as P,b as p,c as D,w as y,R as $,o as _,ax as k,d5 as z,d1 as H,d9 as J,$ as O}from"./vue-router.9a8a0cbc.js";import{a as Q}from"./asyncComputed.193155d5.js";import{u as R}from"./uuid.85f07156.js";import{L as X}from"./CircularLoading.36b278c1.js";import"./url.5f44133f.js";import"./Login.vue_vue_type_script_setup_true_lang.3a276b67.js";import"./index.c7ba272a.js";import"./Steps.f5b72dce.js";import"./Watermark.a9d7fc40.js";import"./fetch.8b555e4c.js";import"./metadata.9ba5314d.js";import"./PhBug.vue.0b4bc585.js";import"./PhCheckCircle.vue.02d3a0f7.js";import"./PhKanban.vue.e35ef5fa.js";import"./PhWebhooksLogo.vue.903f1582.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="9b396c97-1076-437c-93ca-b711f26d7dc0",l._sentryDebugIdIdentifier="sentry-dbid-9b396c97-1076-437c-93ca-b711f26d7dc0")}catch{}})();const Y={key:0,class:"loading"},Z=W({__name:"Form",setup(l){const o=L(),c=N(),h=B({playerKey:R()}),E=F(),u=w(null),v=w(!1);K(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=Q(async()=>{h.playerKey=R();const a=o.path.slice(1),e=await I(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[V];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new T(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=M(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});q(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),A("player",c,a,e)}j(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),P("div",Y,[p(X)])):v.value?(_(),D(t(J),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t(z),null,{default:y(()=>[k("Cannot open this link directly")]),_:1}),p(t(H),{class:"message"},{default:y(()=>[k(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(U,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):$("",!0)}}});const ve=O(Z,[["__scopeId","data-v-d667e7b2"]]);export{ve as default};
//# sourceMappingURL=Form.0054e377.js.map
