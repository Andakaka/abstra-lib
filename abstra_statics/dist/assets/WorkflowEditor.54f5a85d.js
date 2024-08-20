import{L as D}from"./LoadingContainer.56c3fdb1.js";import{S as h}from"./SaveButton.26e3146d.js";import{C as A,W as C}from"./model.f7c11cdc.js";import{E as W}from"./api.4e2ade5f.js";import{d as b,e as E,f as N,u as t,c as n,W as _,R as y,b as d,w as e,o as r,a as w,aJ as B,e9 as S,d4 as k,ax as f,e6 as c,ea as V,cH as G,d9 as L,$ as T}from"./vue-router.d9feb5a3.js";import{w as F}from"./metadata.12a669c4.js";import{a as M}from"./asyncComputed.5aa790b6.js";import{A as H}from"./index.3ceffa89.js";import{A as I}from"./index.30e709aa.js";import"./ExclamationCircleOutlined.3e6cd53f.js";import"./workspaces.f6b6ff86.js";import"./workspaceStore.012827c9.js";import"./url.99c6614b.js";import"./record.6cf0986e.js";import"./validations.e3661f0e.js";import"./string.c0b64362.js";import"./PhArrowSquareOut.vue.1c53182b.js";import"./index.7a12ec38.js";import"./Badge.82a04824.js";import"./isNumeric.75337b1e.js";import"./index.2bcec40e.js";import"./Card.afa2cbc4.js";import"./TabPane.51d9ffdd.js";import"./uuid.dddf5724.js";import"./fetch.5f113e8c.js";import"./PhBug.vue.2d3a598b.js";import"./PhCheckCircle.vue.e597d3cd.js";import"./PhKanban.vue.909e89e7.js";import"./PhWebhooksLogo.vue.208982f2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="4111804e-0d27-455f-9df2-138976f3792a",s._sentryDebugIdIdentifier="sentry-dbid-4111804e-0d27-455f-9df2-138976f3792a")}catch{}})();const J={key:1,class:"workflow-editor"},P={class:"workflow-toolbar"},R=["onDragstart"],$=b({__name:"WorkflowEditor",setup(s){const i=E(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new W,{result:l,loading:g}=M(()=>C.create(v)),x=(a,m)=>{var o,p;(o=m.dataTransfer)==null||o.setData("type",a),(p=u.value)==null||p.dragstart(a,m)};return(a,m)=>t(g)?(r(),n(D,{key:0})):(r(),_("div",J,[t(l)?(r(),n(A,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:e(()=>[w("div",P,[(r(!0),_(B,null,S(t(F).stages,o=>(r(),n(t(G),{key:o.typeName,placement:"top"},{title:e(()=>[d(t(H),null,{default:e(()=>[d(t(k),null,{default:e(()=>[f(c(o.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:e(()=>[f(c(o.key),1)]),_:2},1024)]),_:2},1024)]),content:e(()=>[f(c(o.description),1)]),default:e(()=>[w("span",{draggable:"true",onDragstart:p=>x(o.typeName,p)},[(r(),n(V(o.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(t(I),{type:"vertical"}),t(l)?(r(),n(h,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const vt=T($,[["__scopeId","data-v-de9c06f6"]]);export{vt as default};
//# sourceMappingURL=WorkflowEditor.54f5a85d.js.map
