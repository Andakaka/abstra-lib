import{a as k}from"./workspaceStore.430fece1.js";import{d as _,L as w,N as b,e as g,W as v,b as a,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.4ef05375.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.9f7a2e15.js";import{P as V}from"./api.cdd80c29.js";import{A as c,T as W}from"./TabPane.0bb6765d.js";import"./Card.67ad3d90.js";import"./url.b3a67b9d.js";import"./fetch.6a3a470b.js";import"./linters.2e5f49d9.js";import"./asyncComputed.2c511abf.js";import"./scripts.e70c013c.js";import"./record.32a3cf94.js";import"./metadata.556d883d.js";import"./PhBug.vue.4d1a18db.js";import"./PhCheckCircle.vue.f884a646.js";import"./PhKanban.vue.ad84d679.js";import"./PhWebhooksLogo.vue.5b38d592.js";import"./PhQuestion.vue.49d549fb.js";import"./ant-design.40ead154.js";import"./index.c0da6309.js";import"./index.fe518556.js";import"./index.2dbb23df.js";import"./CollapsePanel.cf4ffc39.js";import"./index.9f8f7e93.js";import"./index.25e889fb.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.a5cb80d6.js";import"./model.a55f8c59.js";import"./workspaces.d2596764.js";import"./validations.b6668a8e.js";import"./string.56486a3b.js";import"./PhArrowSquareOut.vue.8e94edf9.js";import"./index.7bc409a5.js";import"./Badge.64e16eac.js";import"./index.9aa9766d.js";import"./uuid.39569747.js";import"./LoadingOutlined.e80598c2.js";import"./DeleteOutlined.24c15091.js";import"./PhDownloadSimple.vue.8ce83717.js";import"./utils.5768ff82.js";import"./LoadingContainer.043557dc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="73455470-cd69-436c-b9de-f237c9ee0447",t._sentryDebugIdIdentifier="sentry-dbid-73455470-cd69-436c-b9de-f237c9ee0447")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const r=k().authHeaders,d=new V(r),i=new P(r),u=new S(r),y=new w(b.array(b.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(s(),v("div",x,[a(e(W),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:h(()=>[a(e(c),{key:"kanban",tab:"Kanban View"}),a(e(c),{key:"table",tab:"Table View"}),a(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=T(A,[["__scopeId","data-v-86c0b860"]]);export{ve as default};
//# sourceMappingURL=Threads.c0ea021f.js.map
