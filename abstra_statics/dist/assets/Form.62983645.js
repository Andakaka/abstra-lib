import{u as U}from"./router.ff1ad2ec.js";import{b as F,r as I,c as A,d as x}from"./FormRunner.a3bc3967.js";import{A as T}from"./api.dfaa46a6.js";import{d as V,eu as W,eH as L,D as N,e as w,g as B,f as K,aC as M,V as q,a7 as G,u as t,W as H,b as f,c as D,w as y,R as P,o as _,ax as R,cY as Y,cU as $,d0 as j,$ as z}from"./vue-router.4f089fa7.js";import{a as J}from"./asyncComputed.287a2ad2.js";import{u as k}from"./uuid.172efdc4.js";import{L as O}from"./CircularLoading.05efe435.js";import{f as Q}from"./api.97fec139.js";import"./url.a2ea222e.js";import"./Login.vue_vue_type_script_setup_true_lang.d0b8d48f.js";import"./index.276253cc.js";import"./WidgetsFrame.f0000940.js";import"./Steps.8eff65ec.js";import"./Watermark.926e8182.js";import"./Card.708c2711.js";import"./TabPane.2700508f.js";import"./fetch.afd3ff80.js";import"./metadata.0fbcc1fc.js";import"./PhCheckCircle.vue.2cba69be.js";import"./PhKanban.vue.e1b8bc79.js";import"./PhWebhooksLogo.vue.bc396d4d.js";import"./runnerData.1ff7c984.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="37b0b3b5-4ada-4a7b-9ba0-20b8dc7e2315",l._sentryDebugIdIdentifier="sentry-dbid-37b0b3b5-4ada-4a7b-9ba0-20b8dc7e2315")}catch{}})();const X={key:0,class:"loading"},Z=V({__name:"Form",setup(l){const o=W(),c=L(),b=N({playerKey:k()}),E=U(),u=w(null),h=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:v,refetch:C}=J(async()=>{b.playerKey=k();const a=o.path.slice(1),e=await Q(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){h.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:g,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!v,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function g(a,e){window.removeEventListener("beforeunload",p),I("player",c,a,e)}q(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),H("div",X,[f(O)])):h.value?(_(),D(t(j),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[f(t(Y),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),f(t($),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(v)&&!t(m)?(_(),D(F,{key:b.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:g,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const De=z(Z,[["__scopeId","data-v-d667e7b2"]]);export{De as default};
//# sourceMappingURL=Form.62983645.js.map
