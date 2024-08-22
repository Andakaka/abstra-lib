import{P as Ae}from"./PlayerNavbar.dbb3117a.js";import{b as Fe}from"./workspaceStore.2a20eb5e.js";import{B as Te}from"./BaseLayout.2f84cbaf.js";import{R as Me,S as Ie,E as Ue,a as Re,I as Ee,L as Ve}from"./SourceCode.54637a05.js";import{S as Le}from"./SaveButton.0731daab.js";import{F as B,a as Be,b as He,c as $e,d as De,r as Ne}from"./FormRunner.4c42e831.js";import{d as V,B as H,f as E,o as p,W as A,Z as Pe,R as x,e5 as We,a as T,V as Ze,D as ze,c as b,w as t,b as a,u as e,cE as re,$ as N,e as S,d5 as L,ax as m,cP as ne,d1 as Q,cs as C,bD as F,cr as se,aJ as ue,ef as ie,eg as de,bG as le,bL as U,e9 as Oe,d9 as D,ek as je,e7 as Qe,aC as qe,g as oe,L as Ge,N as Je,ed as Ke,y as Ye,d4 as z,e6 as O,bp as Xe,cH as ea,d2 as aa,aN as $,eB as ta}from"./vue-router.9a8a0cbc.js";import{A as q}from"./api.7b82610c.js";import{a as la}from"./asyncComputed.193155d5.js";import{W as oa}from"./WidgetsFrame.ffcc90bc.js";import{F as ra}from"./PhArrowSquareOut.vue.fe151a84.js";import{G as na}from"./PhFlowArrow.vue.00c10f7a.js";import{F as sa}from"./metadata.9ba5314d.js";import{F as ua}from"./forms.67e43594.js";import"./editor.df1dd027.js";import{W as G}from"./workspaces.a976ea46.js";import{T as ia}from"./ThreadSelector.88270c50.js";import{A as da}from"./index.c7ba272a.js";import{A as pa}from"./index.474947d4.js";import{N as ca}from"./NavbarControls.f126c8a0.js";import{b as ma}from"./index.bf250df3.js";import{A as j,T as va}from"./TabPane.47e25cf5.js";import{B as fa}from"./Badge.c967e1ff.js";import{A as ga}from"./index.69857b0a.js";import{C as ha}from"./Card.120df81d.js";import"./PhSignOut.vue.f25575cf.js";import"./index.079e7c7d.js";import"./Avatar.e7f0023e.js";import"./url.5f44133f.js";import"./uuid.85f07156.js";import"./scripts.70e5cac3.js";import"./record.174cf1dc.js";import"./validations.5aecd39e.js";import"./string.64ac450d.js";import"./PhCopy.vue.8a2e8204.js";import"./PhCheckCircle.vue.02d3a0f7.js";import"./PhCopySimple.vue.3964f7f1.js";import"./PhCaretRight.vue.980abe9c.js";import"./PhBug.vue.0b4bc585.js";import"./PhQuestion.vue.d36c1e5b.js";import"./LoadingOutlined.7fbefa00.js";import"./PhPencil.vue.224557a2.js";import"./toggleHighContrast.b9ec9de8.js";import"./ExclamationCircleOutlined.00e3fdf6.js";import"./Login.vue_vue_type_script_setup_true_lang.3a276b67.js";import"./CircularLoading.36b278c1.js";import"./Steps.f5b72dce.js";import"./Watermark.a9d7fc40.js";import"./fetch.8b555e4c.js";import"./PhKanban.vue.e35ef5fa.js";import"./PhWebhooksLogo.vue.903f1582.js";import"./index.45b08440.js";import"./CloseCircleOutlined.055ff9e0.js";import"./popupNotifcation.58a3e7a1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.03633a47.js";import"./BookOutlined.3f08cad8.js";import"./PhChats.vue.851f26e5.js";import"./isNumeric.75337b1e.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h=new Error().stack;h&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[h]="10a63966-6300-4aa5-b242-e49d0763c4f3",g._sentryDebugIdIdentifier="sentry-dbid-10a63966-6300-4aa5-b242-e49d0763c4f3")}catch{}})();const ya=["width","height","fill","transform"],_a={key:0},ba=T("path",{d:"M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z"},null,-1),ka=[ba],wa={key:1},Sa=T("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"},null,-1),xa=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Ca=[Sa,xa],Aa={key:2},Fa=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Ta=[Fa],Ma={key:3},Ia=T("path",{d:"M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z"},null,-1),Ua=[Ia],Ra={key:4},Ea=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Va=[Ea],La={key:5},Ba=T("path",{d:"M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z"},null,-1),Ha=[Ba],$a={name:"PhArrowsClockwise"},Da=V({...$a,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(g){const h=g,l=H("weight","regular"),k=H("size","1em"),n=H("color","currentColor"),o=H("mirrored",!1),d=E(()=>{var f;return(f=h.weight)!=null?f:l}),y=E(()=>{var f;return(f=h.size)!=null?f:k}),w=E(()=>{var f;return(f=h.color)!=null?f:n}),v=E(()=>h.mirrored!==void 0?h.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(f,_)=>(p(),A("svg",We({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:w.value,transform:v.value},f.$attrs),[Pe(f.$slots,"default"),d.value==="bold"?(p(),A("g",_a,ka)):d.value==="duotone"?(p(),A("g",wa,Ca)):d.value==="fill"?(p(),A("g",Aa,Ta)):d.value==="light"?(p(),A("g",Ma,Ua)):d.value==="regular"?(p(),A("g",Ra,Va)):d.value==="thin"?(p(),A("g",La,Ha)):x("",!0)],16,ya))}}),Na=V({__name:"ThreadSelectorModal",props:{showThreadModal:{type:Boolean},stage:{},executionConfig:{}},emits:["fix-invalid-json","update:execution-config","update:show-thread-modal"],setup(g,{emit:h}){const l=()=>{h("update:show-thread-modal",!1),G.writeTestData(k.threadData)};Ze(async()=>k.threadData=await G.readTestData());const k=ze({threadData:"{}"});return(n,o)=>(p(),b(e(re),{open:n.showThreadModal,footer:null,onCancel:l},{default:t(()=>[a(ia,{stage:n.stage,"execution-config":n.executionConfig,"onUpdate:executionConfig":o[0]||(o[0]=d=>h("update:execution-config",d)),"onUpdate:showThreadModal":o[1]||(o[1]=d=>h("update:show-thread-modal",d)),onFixInvalidJson:o[2]||(o[2]=d=>h("fix-invalid-json",d,d))},null,8,["stage","execution-config"])]),_:1},8,["open"]))}});const Pa=N(Na,[["__scopeId","data-v-24845f55"]]),pe=g=>(ie("data-v-b2ed6a6d"),g=g(),de(),g),Wa=pe(()=>T("i",null,"string",-1)),Za=pe(()=>T("i",null,"string list",-1)),za=V({__name:"FormNotificationSettings",props:{form:{}},setup(g){const l=S(g.form);return(k,n)=>(p(),A(ue,null,[a(e(se),{layout:"vertical"},{default:t(()=>[a(e(L),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:t(()=>[m(" Thread waiting "),a(e(ne),{checked:l.value.notificationTrigger.enabled,"onUpdate:checked":n[0]||(n[0]=o=>l.value.notificationTrigger.enabled=o)},{default:t(()=>[m(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(Q),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:t(()=>[m(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(C),{label:"Variable name"},{default:t(()=>[a(e(F),{value:l.value.notificationTrigger.variable_name,"onUpdate:value":n[1]||(n[1]=o=>l.value.notificationTrigger.variable_name=o),disabled:!l.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(da),{type:"info"},{message:t(()=>[a(e(Q),null,{default:t(()=>[m(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),Wa,m(" or a "),Za,m(". ")]),_:1})]),_:1})],64))}});const Oa=N(za,[["__scopeId","data-v-b2ed6a6d"]]),ja=V({__name:"FormSettings",props:{form:{}},setup(g){const l=S(g.form);return(k,n)=>(p(),b(e(se),{layout:"vertical",class:"form-settings"},{default:t(()=>[a(Me,{runtime:l.value},null,8,["runtime"]),a(e(C),{label:"Form name"},{default:t(()=>[a(e(F),{value:l.value.title,"onUpdate:value":n[0]||(n[0]=o=>l.value.title=o),type:"text",onChange:n[1]||(n[1]=o=>{var d;return l.value.title=(d=o.target.value)!=null?d:""})},null,8,["value"])]),_:1}),a(e(L),{level:3},{default:t(()=>[m(" Texts ")]),_:1}),a(e(L),{level:4},{default:t(()=>[m(" Welcome Screen ")]),_:1}),a(e(C),{label:"Title"},{default:t(()=>[a(e(F),{value:l.value.welcomeTitle,"onUpdate:value":n[2]||(n[2]=o=>l.value.welcomeTitle=o),type:"text",placeholder:l.value.title,disabled:l.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(C),{label:"Description"},{default:t(()=>[a(e(F),{value:l.value.startMessage,"onUpdate:value":n[3]||(n[3]=o=>l.value.startMessage=o),type:"text",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(C),{label:"Start button label"},{default:t(()=>[a(e(F),{value:l.value.startButtonText,"onUpdate:value":n[4]||(n[4]=o=>l.value.startButtonText=o),type:"text",placeholder:"Start",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(C),null,{default:t(()=>[a(e(le),{checked:l.value.autoStart,"onUpdate:checked":n[5]||(n[5]=o=>l.value.autoStart=o)},{default:t(()=>[m("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(L),{level:4},{default:t(()=>[m(" End Screen ")]),_:1}),a(e(C),{label:"End text"},{default:t(()=>[a(e(F),{value:l.value.endMessage,"onUpdate:value":n[6]||(n[6]=o=>l.value.endMessage=o),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(C),{label:"Restart button label"},{default:t(()=>[a(e(F),{value:l.value.restartButtonText,"onUpdate:value":n[7]||(n[7]=o=>l.value.restartButtonText=o),placeholder:"Restart",type:"text",disabled:!l.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(C),{help:!l.value.isInitial&&"Only initial forms can be restarted"},{default:t(()=>[a(e(le),{checked:l.value.allowRestart,"onUpdate:checked":n[8]||(n[8]=o=>l.value.allowRestart=o),disabled:!l.value.isInitial},{default:t(()=>[m("Show restart button at the end")]),_:1},8,["checked","disabled"])]),_:1},8,["help"]),a(e(L),{level:4},{default:t(()=>[m(" Alert Messages ")]),_:1}),a(e(C),{label:"Error message"},{default:t(()=>[a(e(F),{value:l.value.errorMessage,"onUpdate:value":n[9]||(n[9]=o=>l.value.errorMessage=o),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}});const Qa=N(ja,[["__scopeId","data-v-aff64cb2"]]),qa=V({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(g,{emit:h}){const k=S(n(g.queryParams));function n(v){return Object.entries(v).map(([f,_])=>({key:f,value:_,id:Math.random().toString()}))}function o(){const v={};return k.value.forEach(({key:f,value:_})=>{v[f]=_}),v}const d=(v,f,_)=>{k.value[v]={key:f,value:_},h("update:query-params",o())},y=()=>{const v=k.value.length;k.value.push({key:`param-${v}`,value:"value"}),h("update:query-params",o())},w=v=>{k.value.splice(v,1),h("update:query-params",o())};return(v,f)=>(p(),b(e(re),{open:v.open,onCancel:v.close},{footer:t(()=>[a(e(U),{type:"primary",onClick:v.close},{default:t(()=>[m("OK")]),_:1},8,["onClick"])]),default:t(()=>[a(e(D),{vertical:"",gap:"20"},{default:t(()=>[a(e(Q),null,{default:t(()=>[m("Query params")]),_:1}),(p(!0),A(ue,null,Oe(k.value,(_,i)=>(p(),b(e(C),{key:i},{default:t(()=>[a(e(pa),null,{default:t(()=>[a(e(F),{value:_.key,"onUpdate:value":M=>_.key=M,type:"text",placeholder:"name",onChange:()=>d(i,_.key,_.value)},null,8,["value","onUpdate:value","onChange"]),a(e(F),{value:_.value,"onUpdate:value":M=>_.value=M,type:"text",placeholder:"value",disabled:_.key===e(q),onChange:()=>d(i,_.key,_.value)},null,8,["value","onUpdate:value","disabled","onChange"]),a(e(U),{danger:"",onClick:M=>w(i)},{default:t(()=>[m("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(C),null,{default:t(()=>[a(e(U),{type:"dashed",style:{width:"100%"},onClick:y},{default:t(()=>[m(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),Ga=g=>(ie("data-v-3ed1e354"),g=g(),de(),g),Ja={key:0},Ka={key:1},Ya=Ga(()=>T("br",null,null,-1)),Xa={class:"form-preview-container"},et=V({__name:"FormEditor",setup(g){var ee;const h=je(),l=Qe(),k=Fe(),n=S(null),o=S("source-code"),d=S(null),y=S(null),w=S(null),v=S({}),f=S(!1),_=s=>i.value={...i.value,attached:!!s},i=S({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),M=E(()=>{var s;return(s=c.value)!=null&&s.form.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:i.value.attached&&i.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!i.value.isInitial&&i.value.attached&&!i.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),ce=(s,r)=>{var u;(u=n.value)==null||u.setHighlight(s,r)},me=()=>{var s,r;(s=n.value)==null||s.restartEditor(),(r=n.value)==null||r.startPreviewMode()},ve=E(()=>!i.value.isInitial&&i.value.attached&&!!(i.value.pendingFork||!i.value.stageRunId));qe(()=>i.value.stageRunId?v.value={...v.value,[q]:i.value.stageRunId}:null);const{result:c,loading:fe,refetch:ge}=la(async()=>{const[s,r]=await Promise.all([ua.get(l.params.id),G.get()]);return i.value.isInitial=s.isInitial,Ye({form:s,workspace:r})});oe([()=>i.value.attached,v,c],()=>{J()});function he(){var r;if(!c.value)return;const s=c.value.form.codeContent;(r=n.value)==null||r.updateLocalEditorCode(s),J()}function J(){if(!c.value)return;const s=!i.value.attached;w.value=c.value.form.makeRunnerData(c.value.workspace),d.value=new $e({formRunnerData:w.value,logService:Y,connectionManager:new De(c.value.form.id,"editor",v.value,s),onFormStart:me,onFormEnd:ye,onRedirect:we,onStateUpdate:u=>y.value=u,onStackTraceUpdate:ce});const r=d.value.getState();y.value=r.formState}const ye=()=>{var s,r,u;i.value={attached:!1,stageRunId:null,pendingFork:!1,isInitial:(r=(s=c.value)==null?void 0:s.form.isInitial)!=null?r:!1},(u=n.value)==null||u.restartEditor()};function _e(){var s,r;(s=P.value)==null||s.closeConsole(),(r=d.value)==null||r.start()}function K(){var s,r;(s=n.value)==null||s.restartEditor(),(r=d.value)==null||r.resetForm()}function be(){h.push({name:"stages"})}const P=S(null),ke=s=>{!c.value||(c.value.form.file=s)},Y=Ve.create();function we(s,r){Ne("editor",h,s,r)}const Se=()=>{var u;let s=`/${(u=c.value)==null?void 0:u.form.path}`;const r=new URLSearchParams(v.value);i.value.attached&&i.value.stageRunId&&r.set(q,i.value.stageRunId),window.open(`${s}?${r.toString()}`,"_blank")},W=S(!1),xe=E(()=>{if(!w.value)return"";const s=Object.entries(v.value),r="?"+s.map(([I,R])=>`${I}=${R}`).join("&"),u=s.length?r:"";return`/${w.value.path}${u}`}),X=new Ge(Je.boolean(),"dontShowReloadHelper"),Z=S((ee=X.get())!=null?ee:!1),Ce=()=>{X.set(!0),Z.value=!0};return oe(()=>l.params.id,()=>{ge()}),(s,r)=>(p(),b(Te,null,Ke({navbar:t(()=>[e(c)?(p(),b(e(ma),{key:0,title:e(c).form.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:be},{extra:t(()=>[a(ca,{"docs-path":"concepts/forms","editing-model":e(c).form},null,8,["editing-model"])]),_:1},8,["title"])):x("",!0)]),content:t(()=>[e(c)?(p(),b(Ue,{key:0},{left:t(()=>[a(e(va),{"active-key":o.value,"onUpdate:activeKey":r[0]||(r[0]=u=>o.value=u)},{rightExtra:t(()=>[a(Le,{model:e(c).form,onSave:he},null,8,["model"])]),default:t(()=>[a(e(j),{key:"source-code",tab:"Source code"}),a(e(j),{key:"settings",tab:"Settings"}),a(e(j),{key:"notifications",tab:"Notifications"})]),_:1},8,["active-key"]),o.value==="source-code"?(p(),b(Re,{key:0,ref_key:"code",ref:n,script:e(c).form,workspace:e(c).workspace,onUpdateFile:ke},null,8,["script","workspace"])):x("",!0),o.value==="settings"?(p(),b(Qa,{key:1,form:e(c).form},null,8,["form"])):x("",!0),o.value==="notifications"?(p(),b(Oa,{key:2,form:e(c).form},null,8,["form"])):x("",!0),f.value?(p(),b(Pa,{key:3,"execution-config":i.value,"onUpdate:executionConfig":r[1]||(r[1]=u=>i.value=u),"show-thread-modal":f.value,"onUpdate:showThreadModal":r[2]||(r[2]=u=>f.value=u),stage:e(c).form,onFixInvalidJson:r[3]||(r[3]=(u,I)=>{var R;return(R=P.value)==null?void 0:R.fixJson(u,I)})},null,8,["execution-config","show-thread-modal","stage"])):x("",!0)]),right:t(()=>[a(e(D),{gap:"10",align:"center",justify:"right",style:{"margin-top":"6px"}},{default:t(()=>{var u;return[a(e(z),null,{default:t(()=>[m(O(i.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ne),{disabled:!!y.value&&e(B).includes((u=y.value)==null?void 0:u.type),checked:i.value.attached,"onUpdate:checked":_},null,8,["disabled","checked"]),a(e(fa),{dot:ve.value},{default:t(()=>{var I;return[a(e(U),{disabled:!!y.value&&e(B).includes((I=y.value)==null?void 0:I.type),style:{display:"flex",gap:"5px"},onClick:r[4]||(r[4]=R=>f.value=!0)},{icon:t(()=>[a(e(na),{size:"20"})]),default:t(()=>[m("Thread")]),_:1},8,["disabled"])]}),_:1},8,["dot"])]}),_:1}),a(e(ga),{style:{margin:"7px 0px 16px"}}),e(fe)||!w.value||!y.value?(p(),b(e(Xe),{key:0})):x("",!0),y.value&&w.value?(p(),b(e(D),{key:1,vertical:"",gap:"10",style:{height:"100%",overflow:"hidden"}},{default:t(()=>[a(e(D),{gap:"small"},{default:t(()=>[y.value.type&&e(Be).includes(y.value.type)?(p(),b(e(ea),{key:0,placement:"bottom",open:Z.value?void 0:!0},{content:t(()=>[Z.value?(p(),A("span",Ja,"Reload form")):(p(),A("span",Ka,[m(" You can reload the form here"),Ya,a(e(aa),{onClick:Ce},{default:t(()=>[m("Don't show this again")]),_:1})]))]),default:t(()=>[a(e(U),{disabled:!!M.value,onClick:K},{default:t(()=>[a(e(Da),{size:"20"})]),_:1},8,["disabled"])]),_:1},8,["open"])):x("",!0),e(B).includes(y.value.type)?(p(),b(e($),{key:1,placement:"bottom"},{title:t(()=>[m("Stop form")]),default:t(()=>[a(e(U),{onClick:K},{default:t(()=>[a(e(Ee),{size:"20"})]),_:1})]),_:1})):x("",!0),y.value.type==="waiting"?(p(),b(e($),{key:2,placement:"bottom"},{title:t(()=>[m("Start form")]),default:t(()=>[a(e(U),{disabled:!!M.value,onClick:_e},{default:t(()=>[a(e(ta),{size:"20"})]),_:1},8,["disabled"])]),_:1})):x("",!0),a(e(F),{disabled:"",value:xe.value},null,8,["value"]),a(e($),{placement:"bottom"},{title:t(()=>[m("Edit query params")]),default:t(()=>{var u;return[a(e(U),{disabled:!!y.value&&e(B).includes((u=y.value)==null?void 0:u.type),onClick:r[5]||(r[5]=I=>W.value=!0)},{default:t(()=>[a(e(sa),{size:"20"})]),_:1},8,["disabled"])]}),_:1}),a(e($),{placement:"bottom"},{title:t(()=>[m("Open in Full Screen")]),default:t(()=>[a(e(U),{target:"_blank","aria-label":"Open in Full Screen","aria-describedby":"sss",disabled:!i.value.attached,onClick:Se},{default:t(()=>[a(e(ra),{size:"20"})]),_:1},8,["disabled"])]),_:1})]),_:1}),T("div",Xa,[M.value?(p(),b(e(ha),{key:0,class:"unsaved-changes"},{default:t(()=>[a(e(z),{style:{"font-size":"18px","font-weight":"500"}},{default:t(()=>[m(O(M.value.title),1)]),_:1}),a(e(z),{style:{"margin-bottom":"6px"}},{default:t(()=>[m(O(M.value.message),1)]),_:1})]),_:1})):x("",!0),a(oa,{class:"center","main-color":w.value.mainColor,theme:w.value.theme,"font-family":w.value.fontFamily,locale:w.value.language},{default:t(()=>{var u,I,R,ae,te;return[a(Ae,{"current-path":e(c).form.path,"hide-login":!0},null,8,["current-path"]),a(He,{"is-preview":"",class:"runner","form-runner-data":w.value,"form-state":y.value,"user-email":(u=e(k).user)==null?void 0:u.claims.email,onUpdateWidgetErrors:(I=d.value)==null?void 0:I.updateWidgetFrontendErrors,onUpdateWidgetValue:(R=d.value)==null?void 0:R.updateWidgetValue,onActionClicked:(ae=d.value)==null?void 0:ae.handleActionClick,onAutoFillClicked:(te=d.value)==null?void 0:te.handleAutofillClick},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onAutoFillClicked"])]}),_:1},8,["main-color","theme","font-family","locale"])])]),_:1})):x("",!0),a(qa,{"query-params":v.value,"onUpdate:queryParams":r[6]||(r[6]=u=>v.value=u),open:W.value,close:()=>W.value=!1},null,8,["query-params","open","close"])]),_:1})):x("",!0)]),_:2},[e(c)?{name:"footer",fn:t(()=>[a(Ie,{ref_key:"smartConsole",ref:P,"stage-type":"forms",stage:e(c).form,"log-service":e(Y),workspace:e(c).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});const rl=N(et,[["__scopeId","data-v-3ed1e354"]]);export{rl as default};
//# sourceMappingURL=FormEditor.fef7f2d8.js.map
