import{P as k}from"./api.b407c99e.js";import{b as _}from"./workspaceStore.fc9ab0fe.js";import{d as w,L as g,N as b,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.d5728aa9.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.111c946c.js";import{A as l,T as x}from"./TabPane.673a69c7.js";import"./Card.451212a2.js";import"./fetch.87e3b159.js";import"./metadata.d227186b.js";import"./PhBug.vue.c1e9f407.js";import"./PhCheckCircle.vue.9d22971e.js";import"./PhKanban.vue.cda204b0.js";import"./PhWebhooksLogo.vue.25326843.js";import"./url.53bccc57.js";import"./colorHelpers.3c62cfaf.js";import"./polling.8b7ec81b.js";import"./asyncComputed.b0c24f38.js";import"./PhQuestion.vue.f9efd565.js";import"./ant-design.6f415bb7.js";import"./index.5d42f9e4.js";import"./index.3aa33d2d.js";import"./index.1b33a8cd.js";import"./CollapsePanel.afeecc96.js";import"./index.c8d5d70d.js";import"./index.c519ae4c.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.0971b018.js";import"./Workflow.29b9dfe5.js";import"./PhArrowClockwise.vue.8b651f3a.js";import"./validations.b7a82536.js";import"./string.219476ec.js";import"./uuid.2905bda4.js";import"./index.5ebf1926.js";import"./workspaces.16c59021.js";import"./record.c9ccc0f1.js";import"./index.b5c1dd83.js";import"./Badge.69be308c.js";import"./LoadingOutlined.66f553c0.js";import"./DeleteOutlined.b4db9e0b.js";import"./PhDownloadSimple.vue.6a9f482a.js";import"./utils.4443fbc0.js";import"./LoadingContainer.b6d06a5e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="34c1ae88-0813-401e-90ed-65124ab0e40f",t._sentryDebugIdIdentifier="sentry-dbid-34c1ae88-0813-401e-90ed-65124ab0e40f")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,u=new k(a),i=new S(a),c=new V(a),y=new g(b.array(b.string()),"kanban-selected-stages"),o=v("kanban");return(B,d)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":d[0]||(d[0]=f=>o.value=f)},{default:T(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(c)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=K(A,[["__scopeId","data-v-d2894db4"]]);export{ve as default};
//# sourceMappingURL=Threads.da7afb01.js.map
