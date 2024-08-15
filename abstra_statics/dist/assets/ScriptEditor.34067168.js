import{B as E}from"./BaseLayout.79f6f9c4.js";import{R as N,S as W,E as P,a as U,L as D}from"./SourceCode.ee4d71d8.js";import{S as L}from"./SaveButton.c2bde375.js";import{a as $}from"./asyncComputed.78aca1f6.js";import{d as b,e as f,o as d,c as m,w as a,b as t,u as e,bD as V,cs as J,cr as K,W as M,ek as O,e7 as q,f as H,ed as j,y as z,R as y,d9 as S,d4 as C,ax as I,e6 as G,cP as Q}from"./vue-router.018a176e.js";import"./linters.0e74203c.js";import{S as X}from"./scripts.b52db220.js";import{W as Y}from"./workspaces.d7e678f1.js";import{_ as Z}from"./RunButton.vue_vue_type_script_setup_true_lang.a62c1b90.js";import{T as ee}from"./ThreadSelector.1dfe36d2.js";import{N as te}from"./NavbarControls.6befa261.js";import{b as ae}from"./index.f9a552b4.js";import{A as w,T as R}from"./TabPane.002a4934.js";import{A as re,C as oe}from"./CollapsePanel.319b9c34.js";import{B as ie}from"./Badge.7d8fcacf.js";import"./uuid.2529782e.js";import"./jobs.e77cac2a.js";import"./record.35c2ce07.js";import"./validations.49d6c95e.js";import"./string.679c26ad.js";import"./editor.c4b7bde8.js";import"./workspaceStore.193e0ab4.js";import"./url.2004faf0.js";import"./PhCopy.vue.d06ba580.js";import"./PhCheckCircle.vue.49b89582.js";import"./PhCopySimple.vue.df17e749.js";import"./PhCaretRight.vue.47bd5e2a.js";import"./PhBug.vue.78dd6a41.js";import"./PhQuestion.vue.b2523c78.js";import"./LoadingOutlined.1a0b5fcb.js";import"./PhPencil.vue.19ca3261.js";import"./toggleHighContrast.ef90362a.js";import"./index.ddd99e7c.js";import"./Card.de385b48.js";import"./ExclamationCircleOutlined.51bcc826.js";import"./index.e2d149b3.js";import"./index.49ec9ff2.js";import"./CloseCircleOutlined.3deae93a.js";import"./index.8f109c48.js";import"./popupNotifcation.893d977f.js";import"./PhArrowSquareOut.vue.4798c83f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js";import"./BookOutlined.87b0cec0.js";import"./PhChats.vue.c71d73e4.js";import"./index.fc2ab7af.js";import"./Avatar.20618829.js";import"./isNumeric.75337b1e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="1a53560f-0b3a-4267-a94f-4a143af81795",l._sentryDebugIdIdentifier="sentry-dbid-1a53560f-0b3a-4267-a94f-4a143af81795")}catch{}})();const se=b({__name:"ScriptSettings",props:{script:{}},setup(l){const n=f(l.script);return(g,v)=>(d(),m(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e(V),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=s=>n.value.title=s)},null,8,["value"])]),_:1}),t(N,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),ne={style:{width:"100%",display:"flex","flex-direction":"column"}},le=b({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(l,{emit:c}){const n=l,g=f(!1),v=async()=>{var s;g.value=!0;try{n.executionConfig.attached?await n.script.run((s=n.executionConfig.stageRunId)!=null?s:null):await n.script.test()}finally{g.value=!1,c("update-stage-run-id",null)}};return(s,k)=>(d(),M("div",ne,[t(Z,{loading:g.value,disabled:s.disabledWarning,onClick:v,onSave:k[0]||(k[0]=x=>s.script.save())},null,8,["loading","disabled"])]))}}),at=b({__name:"ScriptEditor",setup(l){const c=O(),n=q();function g(){c.push({name:"stages"})}const v=f(null),s=f("source-code"),k=f("preview");function x(){var i;if(!o.value)return;const u=o.value.script.codeContent;(i=v.value)==null||i.updateLocalEditorCode(u)}const r=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),T=u=>r.value={...r.value,attached:!!u},A=H(()=>{var u;return(u=o.value)!=null&&u.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:r.value.attached&&r.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!r.value.isInitial&&r.value.attached&&!r.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=$(async()=>{const[u,i]=await Promise.all([Y.get(),X.get(n.params.id)]);return r.value.isInitial=i.isInitial,z({workspace:u,script:i})}),F=D.create(),_=f(null);return(u,i)=>(d(),m(E,null,j({navbar:a(()=>[e(o)?(d(),m(e(ae),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(te,{"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(o)?(d(),m(P,{key:0},{left:a(()=>[t(e(R),{"active-key":s.value,"onUpdate:activeKey":i[0]||(i[0]=p=>s.value=p)},{rightExtra:a(()=>[t(L,{model:e(o).script,onSave:x},null,8,["model"])]),default:a(()=>[t(e(w),{key:"source-code",tab:"Source code"}),t(e(w),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),s.value==="source-code"?(d(),m(U,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&s.value==="settings"?(d(),m(se,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(R),{"active-key":k.value,"onUpdate:activeKey":i[1]||(i[1]=p=>k.value=p)},{rightExtra:a(()=>[t(e(S),{align:"center",gap:"middle"},{default:a(()=>[t(e(S),{gap:"small"},{default:a(()=>[t(e(C),null,{default:a(()=>[I(G(r.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:r.value.attached,"onUpdate:checked":T},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&k.value==="preview"?(d(),m(le,{key:0,ref:"tester",script:e(o).script,"execution-config":r.value,"disabled-warning":A.value,onUpdateStageRunId:i[2]||(i[2]=p=>r.value={...r.value,stageRunId:p})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(oe),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(re),{key:"1"},{header:a(()=>[t(e(ie),{dot:r.value.attached&&!!(r.value.pendingFork||!r.value.stageRunId)},{default:a(()=>[t(e(C),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(ee,{"execution-config":r.value,"onUpdate:executionConfig":i[3]||(i[3]=p=>r.value=p),stage:e(o).script,onFixInvalidJson:i[4]||(i[4]=(p,B)=>{var h;return(h=_.value)==null?void 0:h.fixJson(p,B)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(o)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(o).script,"log-service":e(F),workspace:e(o).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{at as default};
//# sourceMappingURL=ScriptEditor.34067168.js.map
