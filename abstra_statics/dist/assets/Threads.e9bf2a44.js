import{u as k}from"./router.5af9ced0.js";import{d as _,L as w,N as c,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.737fb521.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.25a1ed54.js";import{P as V}from"./api.dad6bd57.js";import{A as l,T as W}from"./TabPane.718a603c.js";import"./Card.5a9a4d43.js";import"./fetch.378d4fb9.js";import"./linters.c80b75fa.js";import"./asyncComputed.d82bffed.js";import"./scripts.83573166.js";import"./record.a07156c4.js";import"./metadata.7c3d9df6.js";import"./PhBug.vue.39e433b1.js";import"./PhCheckCircle.vue.ff544232.js";import"./PhKanban.vue.c6f6014f.js";import"./PhWebhooksLogo.vue.e42f16e6.js";import"./PhQuestion.vue.32ea60cd.js";import"./ant-design.5affd6c8.js";import"./index.27104fb8.js";import"./index.b738f867.js";import"./index.67b10449.js";import"./index.4fad9899.js";import"./CollapsePanel.d83dc5f8.js";import"./index.3fcd998e.js";import"./index.edf4d73e.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.f0e7b136.js";import"./model.1bcb7dff.js";import"./workspaces.d2407849.js";import"./runnerData.280784dc.js";import"./url.956d43c6.js";import"./validations.f8d98fea.js";import"./string.368288f6.js";import"./PhArrowSquareOut.vue.12fced16.js";import"./index.91dfe4b6.js";import"./Badge.420afe6e.js";import"./index.4e7b401b.js";import"./uuid.1f355636.js";import"./LoadingOutlined.cb564abc.js";import"./DeleteOutlined.d7404e0e.js";import"./PhDownloadSimple.vue.2b75bec5.js";import"./utils.d907f0d2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="2ec1f7b1-791a-414b-afa6-202e915a0941",t._sentryDebugIdIdentifier="sentry-dbid-2ec1f7b1-791a-414b-afa6-202e915a0941")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const a=k().authHeaders,u=new V(a),i=new P(a),y=new S(a),d=new w(c.array(c.string()),"kanban-selected-stages"),o=g("kanban");return(B,b)=>(s(),v("div",x,[r(e(W),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:h(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(d),"stage-run-repository":e(y)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const he=T(A,[["__scopeId","data-v-86c0b860"]]);export{he as default};
//# sourceMappingURL=Threads.e9bf2a44.js.map
