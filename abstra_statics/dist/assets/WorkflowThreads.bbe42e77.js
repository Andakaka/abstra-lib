import{C as y}from"./ContentLayout.4d1667aa.js";import{d as c,L as w,N as l,e as g,c as a,w as b,o as i,b as n,u as o,R as s}from"./vue-router.018a176e.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.22c6ec68.js";import{E as T}from"./api.97edf344.js";import{A as p,T as V}from"./TabPane.002a4934.js";import"./fetch.dc3ab7e4.js";import"./linters.0e74203c.js";import"./asyncComputed.78aca1f6.js";import"./scripts.b52db220.js";import"./record.35c2ce07.js";import"./metadata.bedb6a33.js";import"./PhBug.vue.78dd6a41.js";import"./PhCheckCircle.vue.49b89582.js";import"./PhKanban.vue.ef02fc5f.js";import"./PhWebhooksLogo.vue.c279985f.js";import"./PhQuestion.vue.b2523c78.js";import"./ant-design.95acc834.js";import"./index.8f109c48.js";import"./index.e2d149b3.js";import"./index.a8fcabf7.js";import"./CollapsePanel.319b9c34.js";import"./index.49ec9ff2.js";import"./index.01546f55.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.cdd47f02.js";import"./model.71348df3.js";import"./workspaces.d7e678f1.js";import"./workspaceStore.193e0ab4.js";import"./url.2004faf0.js";import"./validations.49d6c95e.js";import"./string.679c26ad.js";import"./PhArrowSquareOut.vue.4798c83f.js";import"./index.83bc530d.js";import"./Badge.7d8fcacf.js";import"./index.ddd99e7c.js";import"./Card.de385b48.js";import"./uuid.2529782e.js";import"./LoadingOutlined.1a0b5fcb.js";import"./DeleteOutlined.cbdd788a.js";import"./PhDownloadSimple.vue.1a4c5d93.js";import"./utils.ac2865f7.js";import"./LoadingContainer.068b6c3d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="df7c716c-27e8-4f79-ae7a-5e76f0abdc8d",e._sentryDebugIdIdentifier="sentry-dbid-df7c716c-27e8-4f79-ae7a-5e76f0abdc8d")}catch{}})();const co=c({__name:"WorkflowThreads",setup(e){const t=new R,m=new E,d=new w(l.array(l.string()),"kanban-selected-stages"),u=new T,r=g("kanban");return(W,f)=>(i(),a(y,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":f[0]||(f[0]=k=>r.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(i(),a(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(i(),a(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(i(),a(K,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{co as default};
//# sourceMappingURL=WorkflowThreads.bbe42e77.js.map
