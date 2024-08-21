import{a as k}from"./workspaceStore.6948c802.js";import{d as _,L as w,N as d,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.24d9536b.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.d61233dc.js";import{P as V}from"./api.cab48d8b.js";import{A as c,T as W}from"./TabPane.c62bc570.js";import"./Card.ad43f53d.js";import"./url.352511fb.js";import"./fetch.2c9fba3a.js";import"./metadata.ad5ee12f.js";import"./PhBug.vue.5196332d.js";import"./PhCheckCircle.vue.819c94ca.js";import"./PhKanban.vue.4bf2750f.js";import"./PhWebhooksLogo.vue.71994fc4.js";import"./asyncComputed.e744a4d2.js";import"./PhQuestion.vue.2f9d2fa8.js";import"./ant-design.20c5fa4a.js";import"./index.2e292160.js";import"./index.b9ab8df7.js";import"./index.98d38faf.js";import"./CollapsePanel.e5a04a4b.js";import"./index.b64192de.js";import"./index.418d9541.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.a22ec588.js";import"./model.c56dde74.js";import"./workspaces.ac5352c5.js";import"./record.d233cb3b.js";import"./validations.c6ddf7f9.js";import"./string.690da998.js";import"./PhArrowSquareOut.vue.da9c639e.js";import"./index.05bd8e79.js";import"./Badge.f55d1303.js";import"./index.0da84a4d.js";import"./uuid.29435d73.js";import"./LoadingOutlined.795f253a.js";import"./DeleteOutlined.d81ace67.js";import"./PhDownloadSimple.vue.e4158f16.js";import"./utils.7de14152.js";import"./LoadingContainer.29223ab3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="81fdc072-3583-458d-80ac-1164a133aec3",t._sentryDebugIdIdentifier="sentry-dbid-81fdc072-3583-458d-80ac-1164a133aec3")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const o=k().authHeaders,u=new V(o),i=new P(o),b=new S(o),y=new w(d.array(d.string()),"kanban-selected-stages"),a=g("kanban");return(B,l)=>(s(),v("div",x,[r(e(W),{activeKey:a.value,"onUpdate:activeKey":l[0]||(l[0]=f=>a.value=f)},{default:h(()=>[r(e(c),{key:"kanban",tab:"Kanban View"}),r(e(c),{key:"table",tab:"Table View"}),r(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(b)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const we=T(A,[["__scopeId","data-v-86c0b860"]]);export{we as default};
//# sourceMappingURL=Threads.a9a89a97.js.map
