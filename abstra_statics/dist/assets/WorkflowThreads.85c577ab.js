import{E as y}from"./api.8e14d3f2.js";import{C as w}from"./ContentLayout.f0132d1e.js";import{d as c,L as g,N as f,e as _,c as a,w as l,o as n,b as i,u as o,R as s}from"./vue-router.eed3d3bc.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.6e342e7c.js";import{A as p,T as V}from"./TabPane.ad4dca31.js";import"./fetch.cd98fdc7.js";import"./metadata.7e7f5b33.js";import"./PhBug.vue.2888c014.js";import"./PhCheckCircle.vue.c84338b1.js";import"./PhKanban.vue.0e7165ee.js";import"./PhWebhooksLogo.vue.657d6265.js";import"./polling.be2c3e17.js";import"./asyncComputed.5f4d924b.js";import"./PhQuestion.vue.e89f30c6.js";import"./ant-design.1d073e1f.js";import"./index.9e18d13f.js";import"./index.93541a32.js";import"./index.a4e96513.js";import"./CollapsePanel.5e84fda8.js";import"./index.114a769a.js";import"./index.238e5932.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.f1ba04b7.js";import"./Workflow.b155dec8.js";import"./PhArrowClockwise.vue.f85bdf28.js";import"./validations.2e05df41.js";import"./string.26800109.js";import"./uuid.41199707.js";import"./workspaces.ccaacec0.js";import"./workspaceStore.a35ab44b.js";import"./url.6179d3da.js";import"./record.4f9129b6.js";import"./index.db3aacb7.js";import"./Badge.5653da20.js";import"./Card.8ed3806d.js";import"./LoadingOutlined.fd4fc15e.js";import"./DeleteOutlined.677da91f.js";import"./PhDownloadSimple.vue.f1cc8215.js";import"./utils.4f0e7137.js";import"./LoadingContainer.8ec71c2a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d16b9453-f6e4-4d40-bf53-79b44efc11e2",e._sentryDebugIdIdentifier="sentry-dbid-d16b9453-f6e4-4d40-bf53-79b44efc11e2")}catch{}})();const ko=c({__name:"WorkflowThreads",setup(e){const t=new E,m=new T,d=new g(f.array(f.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,b)=>(n(),a(w,{"full-width":""},{default:l(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=k=>r.value=k)},{default:l(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(n(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(n(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.85c577ab.js.map
