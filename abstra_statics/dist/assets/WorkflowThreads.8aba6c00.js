import{C as y}from"./ContentLayout.ffd5d513.js";import{d as w,L as c,N as b,e as g,c as a,w as l,o as i,b as n,u as o,R as s}from"./vue-router.f4a1103d.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.48d098c6.js";import{E as T}from"./api.fb7a3acf.js";import{A as p,T as V}from"./TabPane.1f7d4f89.js";import"./fetch.9f3590dd.js";import"./polling.334f16a6.js";import"./metadata.f4c0ca83.js";import"./PhBug.vue.7278fd77.js";import"./PhCheckCircle.vue.70eb5801.js";import"./PhKanban.vue.0df8d477.js";import"./PhWebhooksLogo.vue.e8a2bb87.js";import"./asyncComputed.be896cd6.js";import"./PhQuestion.vue.e7344ad1.js";import"./ant-design.5e3d93c7.js";import"./index.649b6cc8.js";import"./index.c34b9d49.js";import"./index.34da5989.js";import"./CollapsePanel.ef420dee.js";import"./index.9983eb71.js";import"./index.8041617f.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.ed88bfbd.js";import"./model.2a460cea.js";import"./workspaces.39c46e51.js";import"./workspaceStore.07c6a73e.js";import"./url.76443c6a.js";import"./record.d47c947d.js";import"./validations.55f00a3e.js";import"./string.7402454c.js";import"./PhArrowSquareOut.vue.f797cc27.js";import"./index.6c33b111.js";import"./Badge.3afbc8a9.js";import"./index.8cb0ec90.js";import"./Card.22bba385.js";import"./uuid.7de764bf.js";import"./LoadingOutlined.d8e3f05b.js";import"./DeleteOutlined.bc05b8f6.js";import"./PhDownloadSimple.vue.8ffaa975.js";import"./utils.548ec070.js";import"./LoadingContainer.9eb5e308.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="215c8429-0b81-4e58-bd2f-f37af6e8077a",r._sentryDebugIdIdentifier="sentry-dbid-215c8429-0b81-4e58-bd2f-f37af6e8077a")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(r){const t=new R,m=new E,u=new c(b.array(b.string()),"kanban-selected-stages"),k=new T,e=g("kanban");return(W,f)=>(i(),a(y,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":f[0]||(f[0]=d=>e.value=d)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.8aba6c00.js.map
