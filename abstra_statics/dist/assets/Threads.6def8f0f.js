import{P as k}from"./api.fb630c89.js";import{b as _}from"./workspaceStore.79147443.js";import{d as w,L as g,N as b,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.fa6ba029.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.f0919b2b.js";import{A as d,T as x}from"./TabPane.8a02f18f.js";import"./Card.166bb5c4.js";import"./fetch.9c607f98.js";import"./metadata.78a10120.js";import"./PhBug.vue.18dd9a94.js";import"./PhCheckCircle.vue.2e2de5f1.js";import"./PhKanban.vue.654b230b.js";import"./PhWebhooksLogo.vue.b06e923b.js";import"./url.e2372995.js";import"./colorHelpers.39de1c69.js";import"./polling.ba212ac6.js";import"./asyncComputed.570a73bf.js";import"./PhQuestion.vue.9d67060b.js";import"./ant-design.f5775644.js";import"./index.b485bcdc.js";import"./index.be675425.js";import"./index.24ca640e.js";import"./CollapsePanel.75db658f.js";import"./index.8b64cffa.js";import"./index.88c7d072.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.9ae09824.js";import"./Workflow.1e6f153f.js";import"./validations.890a1c2d.js";import"./string.c5c689d7.js";import"./uuid.6d5be9d3.js";import"./index.ecee17c7.js";import"./workspaces.61c178df.js";import"./record.e352c963.js";import"./index.366f10df.js";import"./Badge.243a2f1f.js";import"./LoadingOutlined.6ace5cb8.js";import"./DeleteOutlined.4c1ea19f.js";import"./PhDownloadSimple.vue.0d46d046.js";import"./utils.816871e8.js";import"./LoadingContainer.272cd920.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="151d83d7-b314-4c1a-ac78-d03af507290d",t._sentryDebugIdIdentifier="sentry-dbid-151d83d7-b314-4c1a-ac78-d03af507290d")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,c=new k(a),i=new S(a),u=new V(a),y=new g(b.array(b.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:T(()=>[r(e(d),{key:"kanban",tab:"Kanban View"}),r(e(d),{key:"table",tab:"Table View"}),r(e(d),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(c)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.6def8f0f.js.map
