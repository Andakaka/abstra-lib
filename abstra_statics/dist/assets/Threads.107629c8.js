import{a as k}from"./workspaceStore.cca7419a.js";import{d as _,L as w,N as c,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.dd717642.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.ca6cbe63.js";import{P as V}from"./api.10f72b1e.js";import{A as l,T as W}from"./TabPane.ec4620b2.js";import"./Card.bf6ce532.js";import"./url.2a0380b6.js";import"./fetch.a00c4fd2.js";import"./linters.c0dd8e83.js";import"./asyncComputed.0bf323b3.js";import"./scripts.3337a883.js";import"./record.72e2da8f.js";import"./metadata.a5d68fe4.js";import"./PhBug.vue.c6c5c00d.js";import"./PhCheckCircle.vue.6c7e669d.js";import"./PhKanban.vue.c3f48b35.js";import"./PhWebhooksLogo.vue.504ab881.js";import"./PhQuestion.vue.0f95721d.js";import"./ant-design.427fb3e3.js";import"./index.d975b3ce.js";import"./index.73321e77.js";import"./index.4c6c10f9.js";import"./CollapsePanel.1bf29509.js";import"./index.1ccb8992.js";import"./index.90023384.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.e80623be.js";import"./model.cc9e40b6.js";import"./workspaces.df16e5c6.js";import"./validations.3a53ffbb.js";import"./string.c2176fe7.js";import"./PhArrowSquareOut.vue.7a88e4b2.js";import"./index.04689641.js";import"./Badge.9a77b0ea.js";import"./index.2dda2473.js";import"./uuid.0b83e0d0.js";import"./LoadingOutlined.5d7a9e89.js";import"./DeleteOutlined.778d574a.js";import"./PhDownloadSimple.vue.74d986d6.js";import"./utils.576e513e.js";import"./LoadingContainer.28fc8ea8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f808a664-a047-44fb-ba40-fe11613ed3c8",t._sentryDebugIdIdentifier="sentry-dbid-f808a664-a047-44fb-ba40-fe11613ed3c8")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const a=k().authHeaders,u=new V(a),i=new P(a),d=new S(a),f=new w(c.array(c.string()),"kanban-selected-stages"),o=g("kanban");return(B,b)=>(s(),v("div",x,[r(e(W),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=y=>o.value=y)},{default:h(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=T(A,[["__scopeId","data-v-86c0b860"]]);export{ve as default};
//# sourceMappingURL=Threads.107629c8.js.map
