import{P as k}from"./api.575a6ab8.js";import{b as _}from"./workspaceStore.5d887c43.js";import{d as w,L as g,N as d,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.98973d36.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.33cce3e2.js";import{A as l,T as x}from"./TabPane.7571065d.js";import"./Card.c0998a10.js";import"./fetch.66b4a7e9.js";import"./metadata.550875ae.js";import"./PhBug.vue.3d388beb.js";import"./PhCheckCircle.vue.8332f1ff.js";import"./PhKanban.vue.dfeb8520.js";import"./PhWebhooksLogo.vue.86a2dde4.js";import"./url.62ffa01c.js";import"./colorHelpers.e9c273bf.js";import"./polling.5fd6436d.js";import"./asyncComputed.7fd9b310.js";import"./PhQuestion.vue.cc10dea2.js";import"./ant-design.502681f4.js";import"./index.f0136ade.js";import"./index.ef9c4f8f.js";import"./index.f6ae37cf.js";import"./CollapsePanel.0d3bc107.js";import"./index.5a4c09e5.js";import"./index.43ee8a54.js";import"./Badge.388ff735.js";import"./PhArrowCounterClockwise.vue.496045d5.js";import"./Workflow.2dde9019.js";import"./validations.56c15260.js";import"./string.0852fe5f.js";import"./uuid.d49ba673.js";import"./index.f62f9b25.js";import"./workspaces.59b77c58.js";import"./record.fb954fec.js";import"./index.612768f5.js";import"./PhArrowDown.vue.5df42c0d.js";import"./LoadingOutlined.4fb31140.js";import"./DeleteOutlined.2fca538a.js";import"./PhDownloadSimple.vue.ec3e0ff7.js";import"./utils.cb5c0f8e.js";import"./LoadingContainer.69b189f2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="cdaa893a-0ce6-4221-a2b3-e0c928e23f65",t._sentryDebugIdIdentifier="sentry-dbid-cdaa893a-0ce6-4221-a2b3-e0c928e23f65")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const o=_().authHeaders,b=new k(o),i=new S(o),u=new V(o),y=new g(d.array(d.string()),"kanban-selected-stages"),a=v("kanban");return(B,c)=>(s(),h("div",W,[r(e(x),{activeKey:a.value,"onUpdate:activeKey":c[0]||(c[0]=f=>a.value=f)},{default:T(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.cbce5d28.js.map
