import{u as U}from"./router.3d554840.js";import{b as F,r as I,c as A,d as x}from"./FormRunner.3bc179ce.js";import{A as T}from"./api.8cde44e9.js";import{d as V,eu as W,eH as L,D as N,e as w,g as B,f as K,aC as M,V as q,a7 as G,u as t,W as H,b as p,c as D,w as y,R as P,o as _,ax as R,cY as Y,cU as $,d0 as j,$ as z}from"./vue-router.d073354d.js";import{a as J}from"./asyncComputed.1cda9525.js";import{u as k}from"./uuid.eb57b87c.js";import{L as O}from"./CircularLoading.bdb9e12a.js";import{f as Q}from"./api.dbdd2fac.js";import"./url.a0e2e3af.js";import"./Login.vue_vue_type_script_setup_true_lang.450bfefa.js";import"./index.0b158015.js";import"./WidgetsFrame.bd31a1c6.js";import"./Steps.5432c8e3.js";import"./Watermark.d1f6ade0.js";import"./Card.30691bf4.js";import"./TabPane.a4bb3797.js";import"./fetch.4a39849d.js";import"./metadata.ff92a75a.js";import"./PhBug.vue.30e71611.js";import"./PhCheckCircle.vue.cd042115.js";import"./PhKanban.vue.625c2093.js";import"./PhWebhooksLogo.vue.052146c0.js";import"./runnerData.50c0b249.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="8fea3fe9-a60c-4310-a6fb-6a5059b7f77b",l._sentryDebugIdIdentifier="sentry-dbid-8fea3fe9-a60c-4310-a6fb-6a5059b7f77b")}catch{}})();const X={key:0,class:"loading"},Z=V({__name:"Form",setup(l){const o=W(),c=L(),h=N({playerKey:k()}),E=U(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=J(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await Q(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){v.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),I("player",c,a,e)}q(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),H("div",X,[p(O)])):v.value?(_(),D(t(j),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t(Y),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),p(t($),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const Re=z(Z,[["__scopeId","data-v-d667e7b2"]]);export{Re as default};
//# sourceMappingURL=Form.eb581255.js.map
