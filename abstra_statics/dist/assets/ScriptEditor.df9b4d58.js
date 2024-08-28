import{B as E}from"./BaseLayout.35112ef8.js";import{R as N,S as U,E as W,a as L,L as P}from"./SourceCode.72d96f96.js";import{S as D}from"./SaveButton.fd7759c4.js";import{a as V}from"./asyncComputed.04f6ff66.js";import{d as w,e as f,o as c,c as m,w as a,b as t,u as e,bK as $,cy as K,cx as q,X as J,eq as M,ed as O,f as j,ej as H,y as X,R as y,df as S,da as C,aF as I,ec as z,cV as G}from"./vue-router.7b6aba34.js";import"./editor.65c0f9f9.js";import{S as Q}from"./scripts.3fb739c6.js";import{W as Y}from"./workspaces.2dd82719.js";import{_ as Z}from"./RunButton.vue_vue_type_script_setup_true_lang.db7ba6dc.js";import{T as ee}from"./ThreadSelector.831cd073.js";import{N as te}from"./NavbarControls.bb496c20.js";import{b as ae}from"./index.5ba0108c.js";import{A as b,T as R}from"./TabPane.324c720a.js";import{A as oe,C as re}from"./CollapsePanel.4a471b08.js";import{B as ie}from"./Badge.dc872c27.js";import"./uuid.53270c2d.js";import"./validations.49a91848.js";import"./string.77e999f8.js";import"./PhCopy.vue.faedff6b.js";import"./PhCheckCircle.vue.81a9b654.js";import"./PhCopySimple.vue.e6057757.js";import"./PhCaretRight.vue.59e8c5e6.js";import"./PhBug.vue.01392c4f.js";import"./PhQuestion.vue.d1296a10.js";import"./LoadingOutlined.96f4db4a.js";import"./polling.947d93e8.js";import"./PhPencil.vue.f64db52d.js";import"./toggleHighContrast.e3898fbe.js";import"./index.96ea0ecb.js";import"./Card.069077c0.js";import"./UnsavedChangesHandler.daf0cd46.js";import"./ExclamationCircleOutlined.aff84e2a.js";import"./workspaceStore.2b569901.js";import"./url.7ee5b2cf.js";import"./colorHelpers.abe0916a.js";import"./record.07d6050d.js";import"./index.5f223cfe.js";import"./index.a006263c.js";import"./CloseCircleOutlined.e26379c6.js";import"./index.60a354dc.js";import"./popupNotifcation.c74f5544.js";import"./PhArrowSquareOut.vue.81971c16.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1a64f6c8.js";import"./BookOutlined.f8e3fb55.js";import"./PhChats.vue.97a0fbdd.js";import"./index.f046cf80.js";import"./Avatar.b1647cdd.js";import"./isNumeric.75337b1e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[d]="b42f5e2c-b09a-473c-b2bc-e2b55ed97f13",l._sentryDebugIdIdentifier="sentry-dbid-b42f5e2c-b09a-473c-b2bc-e2b55ed97f13")}catch{}})();const se=w({__name:"ScriptSettings",props:{script:{}},setup(l){const n=f(l.script);return(g,v)=>(c(),m(e(q),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(K),{label:"Name",required:""},{default:a(()=>[t(e($),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=s=>n.value.title=s)},null,8,["value"])]),_:1}),t(N,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),ne={style:{width:"100%",display:"flex","flex-direction":"column"}},le=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(l,{emit:d}){const n=l,g=f(!1),v=async()=>{var s;g.value=!0;try{n.executionConfig.attached?await n.script.run((s=n.executionConfig.stageRunId)!=null?s:null):await n.script.test()}finally{g.value=!1,d("update-stage-run-id",null)}};return(s,k)=>(c(),J("div",ne,[t(Z,{loading:g.value,disabled:s.disabledWarning,onClick:v,onSave:k[0]||(k[0]=x=>s.script.save())},null,8,["loading","disabled"])]))}}),ot=w({__name:"ScriptEditor",setup(l){const d=M(),n=O();function g(){d.push({name:"stages"})}const v=f(null),s=f("source-code"),k=f("preview");function x(){var i;if(!r.value)return;const u=r.value.script.codeContent;(i=v.value)==null||i.updateLocalEditorCode(u)}const o=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=u=>o.value={...o.value,attached:!!u},T=j(()=>{var u;return(u=r.value)!=null&&u.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!o.value.isInitial&&o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[u,i]=await Promise.all([Y.get(),Q.get(n.params.id)]);return o.value.isInitial=i.isInitial,X({workspace:u,script:i})}),A=P.create(),_=f(null);return(u,i)=>(c(),m(E,null,H({navbar:a(()=>[e(r)?(c(),m(e(ae),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(te,{"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(r)?(c(),m(W,{key:0},{left:a(()=>[t(e(R),{"active-key":s.value,"onUpdate:activeKey":i[0]||(i[0]=p=>s.value=p)},{rightExtra:a(()=>[t(D,{model:e(r).script,onSave:x},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),s.value==="source-code"?(c(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):y("",!0),e(r).script&&s.value==="settings"?(c(),m(se,{key:1,script:e(r).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(R),{"active-key":k.value,"onUpdate:activeKey":i[1]||(i[1]=p=>k.value=p)},{rightExtra:a(()=>[t(e(S),{align:"center",gap:"middle"},{default:a(()=>[t(e(S),{gap:"small"},{default:a(()=>[t(e(C),null,{default:a(()=>[I(z(o.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(G),{checked:o.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&k.value==="preview"?(c(),m(le,{key:0,ref:"tester",script:e(r).script,"execution-config":o.value,"disabled-warning":T.value,onUpdateStageRunId:i[2]||(i[2]=p=>o.value={...o.value,stageRunId:p})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(re),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(ie),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(C),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(ee,{"execution-config":o.value,"onUpdate:executionConfig":i[3]||(i[3]=p=>o.value=p),stage:e(r).script,onFixInvalidJson:i[4]||(i[4]=(p,B)=>{var h;return(h=_.value)==null?void 0:h.fixJson(p,B)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(U,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(r).script,"log-service":e(A),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{ot as default};
//# sourceMappingURL=ScriptEditor.df9b4d58.js.map
