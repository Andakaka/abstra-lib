import{C as y}from"./ContentLayout.1136f8e2.js";import{d as w,L as c,N as l,e as g,c as a,w as d,o as i,b as n,u as o,R as s}from"./vue-router.3d5f6db5.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.29eff36d.js";import{E as T}from"./api.d4df5142.js";import{A as p,T as V}from"./TabPane.c192203b.js";import"./fetch.3f634026.js";import"./linters.e1671c76.js";import"./asyncComputed.35fdac0f.js";import"./scripts.e163d15f.js";import"./record.a8c03fef.js";import"./metadata.543a6908.js";import"./PhBug.vue.1b71844e.js";import"./PhCheckCircle.vue.c4f3930e.js";import"./PhKanban.vue.d01d3b2f.js";import"./PhWebhooksLogo.vue.daf3517b.js";import"./PhQuestion.vue.ba32a503.js";import"./ant-design.74d2c6ec.js";import"./index.c9db68a9.js";import"./index.9152bc6f.js";import"./index.b303bafd.js";import"./CollapsePanel.b62ef703.js";import"./index.06972e34.js";import"./index.144e2047.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.beffeff3.js";import"./model.4156ceeb.js";import"./workspaces.7b3e2145.js";import"./runnerData.ad71af2b.js";import"./url.ee42e626.js";import"./validations.15461d27.js";import"./string.ddec07a4.js";import"./PhArrowSquareOut.vue.33bc6b5b.js";import"./index.ab0de272.js";import"./Badge.9f16ec12.js";import"./index.e53b40a9.js";import"./Card.44738d09.js";import"./uuid.15a093c6.js";import"./LoadingOutlined.76ea2e69.js";import"./DeleteOutlined.a5282334.js";import"./PhDownloadSimple.vue.48f015d3.js";import"./utils.2a78f371.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="4d370534-b2e1-4cf4-96bd-61b05ba5cbd2",r._sentryDebugIdIdentifier="sentry-dbid-4d370534-b2e1-4cf4-96bd-61b05ba5cbd2")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(r){const t=new R,m=new E,f=new c(l.array(l.string()),"kanban-selected-stages"),u=new T,e=g("kanban");return(W,b)=>(i(),a(y,{"full-width":""},{default:d(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":b[0]||(b[0]=k=>e.value=k)},{default:d(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(K,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.71677356.js.map
