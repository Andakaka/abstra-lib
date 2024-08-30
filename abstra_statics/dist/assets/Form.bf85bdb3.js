import{A as S}from"./api.ac4ed80b.js";import{b as I,j as U}from"./workspaceStore.7be9b349.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.8e923486.js";import{d as L,ed as V,eq as K,D as N,e as w,g as B,f as q,aK as M,W as j,ag as G,u as t,X as P,b as p,c as D,w as y,R as X,o as _,aF as R,db as $,d7 as z,df as H,$ as J}from"./vue-router.de3049e8.js";import{a as O}from"./asyncComputed.e9c28e12.js";import{u as k}from"./uuid.94394670.js";import{L as Q}from"./CircularLoading.b344a164.js";import"./fetch.03a915bd.js";import"./metadata.200cead3.js";import"./PhBug.vue.9d17dffd.js";import"./PhCheckCircle.vue.ceb32c13.js";import"./PhKanban.vue.abd922fe.js";import"./PhWebhooksLogo.vue.dfef8192.js";import"./url.40a23209.js";import"./colorHelpers.c05f7c13.js";import"./Login.vue_vue_type_script_setup_true_lang.947141c0.js";import"./index.2889c880.js";import"./PhArrowClockwise.vue.910127a9.js";import"./Steps.1a5acf50.js";import"./Watermark.99859415.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="f74e0382-f859-4aa1-8b43-fe809181741c",l._sentryDebugIdIdentifier="sentry-dbid-f74e0382-f859-4aa1-8b43-fe809181741c")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),d=K(),h=N({playerKey:k()}),E=I(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=O(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await U(a);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),F=q(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;F.value&&d.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),T("player",d,a,e)}j(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,c;return t(m)?(_(),P("div",Y,[p(Q)])):v.value?(_(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t($),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),p(t(z),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(A,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=t(r))==null?void 0:c.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const be=J(Z,[["__scopeId","data-v-bd0f6275"]]);export{be as default};
//# sourceMappingURL=Form.bf85bdb3.js.map
