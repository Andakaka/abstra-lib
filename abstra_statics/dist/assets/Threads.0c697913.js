import{u as k}from"./router.513aed38.js";import{d as _,L as w,N as c,e as g,W as v,b as a,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.861ebc0c.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.1b3e0e99.js";import{P as V}from"./api.8b698df4.js";import{A as b,T as W}from"./TabPane.620ff620.js";import"./Card.887a57b1.js";import"./fetch.e6b25107.js";import"./linters.eec1ed83.js";import"./asyncComputed.7177b690.js";import"./scripts.dfaa9d57.js";import"./record.4beff48d.js";import"./metadata.ec7ca514.js";import"./PhBug.vue.b6acd864.js";import"./PhCheckCircle.vue.c246f181.js";import"./PhKanban.vue.57db7890.js";import"./PhWebhooksLogo.vue.6e8ff809.js";import"./PhQuestion.vue.8932cf65.js";import"./ant-design.b6dd6d63.js";import"./index.fba019b5.js";import"./index.247d0e11.js";import"./index.f3e27b2f.js";import"./index.532aba85.js";import"./CollapsePanel.d214593e.js";import"./index.d03ac593.js";import"./index.9ee4c0a0.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.c8b36ed4.js";import"./model.019d9df0.js";import"./workspaces.73ad25c2.js";import"./runnerData.fac83b2c.js";import"./url.f627b7df.js";import"./validations.0a257fb7.js";import"./string.fe632c81.js";import"./PhArrowSquareOut.vue.5b4bb6bf.js";import"./index.b1ff8856.js";import"./Badge.006f54c7.js";import"./index.ec4a14e9.js";import"./uuid.592172c9.js";import"./LoadingOutlined.e4f314a3.js";import"./DeleteOutlined.7b9336ce.js";import"./PhDownloadSimple.vue.15027b84.js";import"./utils.bf0c484a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="0323be60-2106-4b62-8182-14acb285b8f9",t._sentryDebugIdIdentifier="sentry-dbid-0323be60-2106-4b62-8182-14acb285b8f9")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const r=k().authHeaders,u=new V(r),i=new P(r),y=new S(r),d=new w(c.array(c.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(s(),v("div",x,[a(e(W),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:h(()=>[a(e(b),{key:"kanban",tab:"Kanban View"}),a(e(b),{key:"table",tab:"Table View"}),a(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(d),"stage-run-repository":e(y)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const he=T(A,[["__scopeId","data-v-86c0b860"]]);export{he as default};
//# sourceMappingURL=Threads.0c697913.js.map
