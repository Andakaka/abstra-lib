import{L as D}from"./LoadingContainer.ebf8b0d6.js";import{S as b}from"./SaveButton.b49d6866.js";import{C as h,W as A}from"./model.ade59691.js";import{E as C}from"./api.3a6d8e4f.js";import{d as W,e as E,f as N,u as t,c as n,W as _,R as y,b as d,w as o,o as r,a as w,aJ as B,ew as S,cX as k,ax as m,et as f,ex as V,cD as G,d0 as L,$ as T}from"./vue-router.21f91ffc.js";import{w as F}from"./metadata.68e400ef.js";import{a as M}from"./asyncComputed.bdfd1ce3.js";import{A as I}from"./index.bf4f11d5.js";import{A as J}from"./index.4a2614cd.js";import"./ExclamationCircleOutlined.72962960.js";import"./workspaces.f9bdd538.js";import"./runnerData.2063ecde.js";import"./url.8be66a3e.js";import"./record.7fd6f068.js";import"./validations.2c2825c4.js";import"./string.6588470a.js";import"./PhArrowSquareOut.vue.d836389b.js";import"./index.0c43b06c.js";import"./Badge.ed08f50e.js";import"./isNumeric.75337b1e.js";import"./index.113dcb0e.js";import"./Card.add858f3.js";import"./TabPane.13f7e891.js";import"./uuid.0cb3f131.js";import"./fetch.eaab3b3e.js";import"./PhBug.vue.a2c9216a.js";import"./PhCheckCircle.vue.c2b7f8af.js";import"./PhKanban.vue.303a5703.js";import"./PhWebhooksLogo.vue.e569f3de.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="c1942fe9-78e9-488c-a70b-691f08d523ea",s._sentryDebugIdIdentifier="sentry-dbid-c1942fe9-78e9-488c-a70b-691f08d523ea")}catch{}})();const P={key:1,class:"workflow-editor"},R={class:"workflow-toolbar"},X=["onDragstart"],$=W({__name:"WorkflowEditor",setup(s){const i=E(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new C,{result:l,loading:g}=M(()=>A.create(v)),x=(a,c)=>{var e,p;(e=c.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>t(g)?(r(),n(D,{key:0})):(r(),_("div",P,[t(l)?(r(),n(h,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:o(()=>[w("div",R,[(r(!0),_(B,null,S(t(F).stages,e=>(r(),n(t(G),{key:e.typeName,placement:"top"},{title:o(()=>[d(t(I),null,{default:o(()=>[d(t(k),null,{default:o(()=>[m(f(e.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:o(()=>[m(f(e.key),1)]),_:2},1024)]),_:2},1024)]),content:o(()=>[m(f(e.description),1)]),default:o(()=>[w("span",{draggable:"true",onDragstart:p=>x(e.typeName,p)},[(r(),n(V(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,X)]),_:2},1024))),128)),d(t(J),{type:"vertical"}),t(l)?(r(),n(b,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const vt=T($,[["__scopeId","data-v-de9c06f6"]]);export{vt as default};
//# sourceMappingURL=WorkflowEditor.d789abe7.js.map
