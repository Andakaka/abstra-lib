import{L as x}from"./LoadingContainer.9eb5e308.js";import{S as D}from"./SaveButton.c817b0bb.js";import{C as h,W as A}from"./model.2a460cea.js";import{E as C}from"./api.fb7a3acf.js";import{d as W,e as E,f as N,u as t,c as n,W as _,R as y,b as d,w as o,o as r,a as w,aJ as B,e9 as S,d4 as k,ax as c,e6 as f,ea as V,cH as G,d9 as L,$ as T}from"./vue-router.f4a1103d.js";import{w as F}from"./metadata.f4c0ca83.js";import{a as M}from"./asyncComputed.be896cd6.js";import{A as H}from"./index.649b6cc8.js";import{A as I}from"./index.9983eb71.js";import"./ExclamationCircleOutlined.7f6ba1eb.js";import"./workspaces.39c46e51.js";import"./workspaceStore.07c6a73e.js";import"./url.76443c6a.js";import"./record.d47c947d.js";import"./validations.55f00a3e.js";import"./string.7402454c.js";import"./polling.334f16a6.js";import"./PhArrowSquareOut.vue.f797cc27.js";import"./index.6c33b111.js";import"./Badge.3afbc8a9.js";import"./isNumeric.75337b1e.js";import"./index.8cb0ec90.js";import"./Card.22bba385.js";import"./TabPane.1f7d4f89.js";import"./uuid.7de764bf.js";import"./fetch.9f3590dd.js";import"./PhBug.vue.7278fd77.js";import"./PhCheckCircle.vue.70eb5801.js";import"./PhKanban.vue.0df8d477.js";import"./PhWebhooksLogo.vue.e8a2bb87.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="318d8a2f-20fa-4b81-8de5-149e048d005d",s._sentryDebugIdIdentifier="sentry-dbid-318d8a2f-20fa-4b81-8de5-149e048d005d")}catch{}})();const J={key:1,class:"workflow-editor"},P={class:"workflow-toolbar"},R=["onDragstart"],$=W({__name:"WorkflowEditor",setup(s){const i=E(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new C,{result:l,loading:g}=M(()=>A.create(v)),b=(a,m)=>{var e,p;(e=m.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,m)};return(a,m)=>t(g)?(r(),n(x,{key:0})):(r(),_("div",J,[t(l)?(r(),n(h,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:o(()=>[w("div",P,[(r(!0),_(B,null,S(t(F).stages,e=>(r(),n(t(G),{key:e.typeName,placement:"top"},{title:o(()=>[d(t(H),null,{default:o(()=>[d(t(k),null,{default:o(()=>[c(f(e.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:o(()=>[c(f(e.key),1)]),_:2},1024)]),_:2},1024)]),content:o(()=>[c(f(e.description),1)]),default:o(()=>[w("span",{draggable:"true",onDragstart:p=>b(e.typeName,p)},[(r(),n(V(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(t(I),{type:"vertical"}),t(l)?(r(),n(D,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const gt=T($,[["__scopeId","data-v-de9c06f6"]]);export{gt as default};
//# sourceMappingURL=WorkflowEditor.b97b1bc1.js.map
