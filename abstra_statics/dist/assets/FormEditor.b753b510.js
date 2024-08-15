import{P as Ce}from"./PlayerNavbar.335286c4.js";import{a as Ae}from"./workspaceStore.193e0ab4.js";import{B as Fe}from"./BaseLayout.79f6f9c4.js";import{R as Te,S as Me,E as Ie,a as Ue,I as Re,L as Ee}from"./SourceCode.ee4d71d8.js";import{S as Ve}from"./SaveButton.c2bde375.js";import{F as B,a as Le,b as Be,c as He,d as $e,r as De}from"./FormRunner.c3eaa70b.js";import{d as V,B as H,f as E,o as p,W as A,Z as Ne,R as S,e5 as Pe,a as T,V as Ze,D as We,c as b,w as t,b as a,u as e,cE as oe,$ as N,e as w,d5 as L,ax as m,cP as re,d1 as O,cs as x,bD as F,cr as ne,aJ as se,ef as ue,eg as ie,bG as te,bL as I,e9 as ze,d9 as D,ek as Oe,e7 as je,aC as Qe,g as le,L as qe,N as Ge,ed as Je,y as Ke,d4 as Ye,e6 as Xe,bp as ea,cH as aa,d2 as ta,aN as $,eB as la}from"./vue-router.018a176e.js";import{A as j}from"./api.97edf344.js";import{a as oa}from"./asyncComputed.78aca1f6.js";import{F as ra}from"./PhArrowSquareOut.vue.4798c83f.js";import{G as na}from"./PhFlowArrow.vue.0682c779.js";import{F as sa}from"./metadata.bedb6a33.js";import{F as ua}from"./forms.4792e8cd.js";import"./linters.0e74203c.js";import{W as Q}from"./workspaces.d7e678f1.js";import{T as ia}from"./ThreadSelector.1dfe36d2.js";import{A as da}from"./index.ddd99e7c.js";import{A as pa}from"./index.8f109c48.js";import{N as ca}from"./NavbarControls.6befa261.js";import{b as va}from"./index.f9a552b4.js";import{A as z,T as ma}from"./TabPane.002a4934.js";import{B as fa}from"./Badge.7d8fcacf.js";import{A as ga}from"./index.49ec9ff2.js";import"./PhSignOut.vue.169b4bb5.js";import"./index.fc2ab7af.js";import"./Avatar.20618829.js";import"./url.2004faf0.js";import"./uuid.2529782e.js";import"./jobs.e77cac2a.js";import"./record.35c2ce07.js";import"./scripts.b52db220.js";import"./validations.49d6c95e.js";import"./string.679c26ad.js";import"./editor.c4b7bde8.js";import"./PhCopy.vue.d06ba580.js";import"./PhCheckCircle.vue.49b89582.js";import"./PhCopySimple.vue.df17e749.js";import"./PhCaretRight.vue.47bd5e2a.js";import"./PhBug.vue.78dd6a41.js";import"./PhQuestion.vue.b2523c78.js";import"./LoadingOutlined.1a0b5fcb.js";import"./PhPencil.vue.19ca3261.js";import"./toggleHighContrast.ef90362a.js";import"./Card.de385b48.js";import"./ExclamationCircleOutlined.51bcc826.js";import"./Login.vue_vue_type_script_setup_true_lang.337b69fc.js";import"./CircularLoading.0ff5b879.js";import"./WidgetsFrame.da4f3fb4.js";import"./Steps.437d5c1f.js";import"./Watermark.3570eb6f.js";import"./fetch.dc3ab7e4.js";import"./PhKanban.vue.ef02fc5f.js";import"./PhWebhooksLogo.vue.c279985f.js";import"./index.e2d149b3.js";import"./CloseCircleOutlined.3deae93a.js";import"./popupNotifcation.893d977f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js";import"./BookOutlined.87b0cec0.js";import"./PhChats.vue.c71d73e4.js";import"./isNumeric.75337b1e.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h=new Error().stack;h&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[h]="d2364676-7a0d-44d3-8194-230103c2c404",g._sentryDebugIdIdentifier="sentry-dbid-d2364676-7a0d-44d3-8194-230103c2c404")}catch{}})();const ha=["width","height","fill","transform"],ya={key:0},_a=T("path",{d:"M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z"},null,-1),ba=[_a],ka={key:1},wa=T("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"},null,-1),Sa=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),xa=[wa,Sa],Ca={key:2},Aa=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Fa=[Aa],Ta={key:3},Ma=T("path",{d:"M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z"},null,-1),Ia=[Ma],Ua={key:4},Ra=T("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Ea=[Ra],Va={key:5},La=T("path",{d:"M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z"},null,-1),Ba=[La],Ha={name:"PhArrowsClockwise"},$a=V({...Ha,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(g){const h=g,l=H("weight","regular"),k=H("size","1em"),n=H("color","currentColor"),o=H("mirrored",!1),i=E(()=>{var f;return(f=h.weight)!=null?f:l}),y=E(()=>{var f;return(f=h.size)!=null?f:k}),C=E(()=>{var f;return(f=h.color)!=null?f:n}),v=E(()=>h.mirrored!==void 0?h.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(f,_)=>(p(),A("svg",Pe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:C.value,transform:v.value},f.$attrs),[Ne(f.$slots,"default"),i.value==="bold"?(p(),A("g",ya,ba)):i.value==="duotone"?(p(),A("g",ka,xa)):i.value==="fill"?(p(),A("g",Ca,Fa)):i.value==="light"?(p(),A("g",Ta,Ia)):i.value==="regular"?(p(),A("g",Ua,Ea)):i.value==="thin"?(p(),A("g",Va,Ba)):S("",!0)],16,ha))}}),Da=V({__name:"ThreadSelectorModal",props:{showThreadModal:{type:Boolean},stage:{},executionConfig:{}},emits:["fix-invalid-json","update:execution-config","update:show-thread-modal"],setup(g,{emit:h}){const l=()=>{h("update:show-thread-modal",!1),Q.writeTestData(k.threadData)};Ze(async()=>k.threadData=await Q.readTestData());const k=We({threadData:"{}"});return(n,o)=>(p(),b(e(oe),{open:n.showThreadModal,footer:null,onCancel:l},{default:t(()=>[a(ia,{stage:n.stage,"execution-config":n.executionConfig,"onUpdate:executionConfig":o[0]||(o[0]=i=>h("update:execution-config",i)),"onUpdate:showThreadModal":o[1]||(o[1]=i=>h("update:show-thread-modal",i)),onFixInvalidJson:o[2]||(o[2]=i=>h("fix-invalid-json",i,i))},null,8,["stage","execution-config"])]),_:1},8,["open"]))}});const Na=N(Da,[["__scopeId","data-v-24845f55"]]),de=g=>(ue("data-v-b2ed6a6d"),g=g(),ie(),g),Pa=de(()=>T("i",null,"string",-1)),Za=de(()=>T("i",null,"string list",-1)),Wa=V({__name:"FormNotificationSettings",props:{form:{}},setup(g){const l=w(g.form);return(k,n)=>(p(),A(se,null,[a(e(ne),{layout:"vertical"},{default:t(()=>[a(e(L),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:t(()=>[m(" Thread waiting "),a(e(re),{checked:l.value.notificationTrigger.enabled,"onUpdate:checked":n[0]||(n[0]=o=>l.value.notificationTrigger.enabled=o)},{default:t(()=>[m(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(O),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:t(()=>[m(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(x),{label:"Variable name"},{default:t(()=>[a(e(F),{value:l.value.notificationTrigger.variable_name,"onUpdate:value":n[1]||(n[1]=o=>l.value.notificationTrigger.variable_name=o),disabled:!l.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(da),{type:"info"},{message:t(()=>[a(e(O),null,{default:t(()=>[m(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),Pa,m(" or a "),Za,m(". ")]),_:1})]),_:1})],64))}});const za=N(Wa,[["__scopeId","data-v-b2ed6a6d"]]),Oa=V({__name:"FormSettings",props:{form:{}},setup(g){const l=w(g.form);return(k,n)=>(p(),b(e(ne),{layout:"vertical",class:"form-settings"},{default:t(()=>[a(Te,{runtime:l.value},null,8,["runtime"]),a(e(x),{label:"Form name"},{default:t(()=>[a(e(F),{value:l.value.title,"onUpdate:value":n[0]||(n[0]=o=>l.value.title=o),type:"text",onChange:n[1]||(n[1]=o=>{var i;return l.value.title=(i=o.target.value)!=null?i:""})},null,8,["value"])]),_:1}),a(e(L),{level:3},{default:t(()=>[m(" Texts ")]),_:1}),a(e(L),{level:4},{default:t(()=>[m(" Welcome Screen ")]),_:1}),a(e(x),{label:"Title"},{default:t(()=>[a(e(F),{value:l.value.welcomeTitle,"onUpdate:value":n[2]||(n[2]=o=>l.value.welcomeTitle=o),type:"text",placeholder:l.value.title,disabled:l.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(x),{label:"Description"},{default:t(()=>[a(e(F),{value:l.value.startMessage,"onUpdate:value":n[3]||(n[3]=o=>l.value.startMessage=o),type:"text",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(x),{label:"Start button label"},{default:t(()=>[a(e(F),{value:l.value.startButtonText,"onUpdate:value":n[4]||(n[4]=o=>l.value.startButtonText=o),type:"text",placeholder:"Start",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(x),null,{default:t(()=>[a(e(te),{checked:l.value.autoStart,"onUpdate:checked":n[5]||(n[5]=o=>l.value.autoStart=o)},{default:t(()=>[m("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(L),{level:4},{default:t(()=>[m(" End Screen ")]),_:1}),a(e(x),{label:"End text"},{default:t(()=>[a(e(F),{value:l.value.endMessage,"onUpdate:value":n[6]||(n[6]=o=>l.value.endMessage=o),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(x),{label:"Restart button label"},{default:t(()=>[a(e(F),{value:l.value.restartButtonText,"onUpdate:value":n[7]||(n[7]=o=>l.value.restartButtonText=o),placeholder:"Restart",type:"text",disabled:!l.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(x),{help:!l.value.isInitial&&"Only initial forms can be restarted"},{default:t(()=>[a(e(te),{checked:l.value.allowRestart,"onUpdate:checked":n[8]||(n[8]=o=>l.value.allowRestart=o),disabled:!l.value.isInitial},{default:t(()=>[m("Show restart button at the end")]),_:1},8,["checked","disabled"])]),_:1},8,["help"]),a(e(L),{level:4},{default:t(()=>[m(" Alert Messages ")]),_:1}),a(e(x),{label:"Error message"},{default:t(()=>[a(e(F),{value:l.value.errorMessage,"onUpdate:value":n[9]||(n[9]=o=>l.value.errorMessage=o),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}});const ja=N(Oa,[["__scopeId","data-v-aff64cb2"]]),Qa=V({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(g,{emit:h}){const k=w(n(g.queryParams));function n(v){return Object.entries(v).map(([f,_])=>({key:f,value:_,id:Math.random().toString()}))}function o(){const v={};return k.value.forEach(({key:f,value:_})=>{v[f]=_}),v}const i=(v,f,_)=>{k.value[v]={key:f,value:_},h("update:query-params",o())},y=()=>{const v=k.value.length;k.value.push({key:`param-${v}`,value:"value"}),h("update:query-params",o())},C=v=>{k.value.splice(v,1),h("update:query-params",o())};return(v,f)=>(p(),b(e(oe),{open:v.open,onCancel:v.close},{footer:t(()=>[a(e(I),{type:"primary",onClick:v.close},{default:t(()=>[m("OK")]),_:1},8,["onClick"])]),default:t(()=>[a(e(D),{vertical:"",gap:"20"},{default:t(()=>[a(e(O),null,{default:t(()=>[m("Query params")]),_:1}),(p(!0),A(se,null,ze(k.value,(_,u)=>(p(),b(e(x),{key:u},{default:t(()=>[a(e(pa),null,{default:t(()=>[a(e(F),{value:_.key,"onUpdate:value":U=>_.key=U,type:"text",placeholder:"name",onChange:()=>i(u,_.key,_.value)},null,8,["value","onUpdate:value","onChange"]),a(e(F),{value:_.value,"onUpdate:value":U=>_.value=U,type:"text",placeholder:"value",disabled:_.key===e(j),onChange:()=>i(u,_.key,_.value)},null,8,["value","onUpdate:value","disabled","onChange"]),a(e(I),{danger:"",onClick:U=>C(u)},{default:t(()=>[m("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(x),null,{default:t(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:y},{default:t(()=>[m(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),qa=g=>(ue("data-v-75e86c4d"),g=g(),ie(),g),Ga={key:0},Ja={key:1},Ka=qa(()=>T("br",null,null,-1)),Ya={class:"form-preview-container"},Xa=V({__name:"FormEditor",setup(g){var Y;const h=Oe(),l=je(),k=Ae(),n=w(null),o=w("source-code"),i=w(null),y=w(null),C=w(null),v=w({}),f=w(!1),_=s=>u.value={...u.value,attached:!!s},u=w({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),U=E(()=>{var s;return(s=c.value)!=null&&s.form.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:u.value.attached&&u.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!u.value.isInitial&&u.value.attached&&!u.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),pe=(s,r)=>{var d;(d=n.value)==null||d.setHighlight(s,r)},ce=()=>{var s,r;(s=n.value)==null||s.restartEditor(),(r=n.value)==null||r.startPreviewMode()},ve=E(()=>!u.value.isInitial&&u.value.attached&&!!(u.value.pendingFork||!u.value.stageRunId));Qe(()=>u.value.stageRunId?v.value={...v.value,[j]:u.value.stageRunId}:null);const{result:c,loading:me,refetch:fe}=oa(async()=>{const[s,r]=await Promise.all([ua.get(l.params.id),Q.get()]);return u.value.isInitial=s.isInitial,Ke({form:s,workspace:r})});le([()=>u.value.attached,v,c],()=>{q()});function ge(){var r;if(!c.value)return;const s=c.value.form.codeContent;(r=n.value)==null||r.updateLocalEditorCode(s),q()}function q(){if(!c.value)return;const s=!u.value.attached;C.value=c.value.form.makeRunnerData(c.value.workspace),i.value=new He({formRunnerData:C.value,logService:J,connectionManager:new $e(c.value.form.id,"editor",v.value,s),onFormStart:ce,onFormEnd:he,onRedirect:ke,onStateUpdate:d=>y.value=d,onStackTraceUpdate:pe});const r=i.value.getState();y.value=r.formState}const he=()=>{var s,r,d;u.value={attached:!1,stageRunId:null,pendingFork:!1,isInitial:(r=(s=c.value)==null?void 0:s.form.isInitial)!=null?r:!1},(d=n.value)==null||d.restartEditor()};function ye(){var s,r;(s=P.value)==null||s.closeConsole(),(r=i.value)==null||r.start()}function G(){var s,r;(s=n.value)==null||s.restartEditor(),(r=i.value)==null||r.resetForm()}function _e(){h.push({name:"stages"})}const P=w(null),be=s=>{!c.value||(c.value.form.file=s)},J=Ee.create();function ke(s,r){De("editor",h,s,r)}const we=()=>{var d;let s=`/${(d=c.value)==null?void 0:d.form.path}`;const r=new URLSearchParams(v.value);u.value.attached&&u.value.stageRunId&&r.set(j,u.value.stageRunId),window.open(`${s}?${r.toString()}`,"_blank")},Z=w(!1),Se=E(()=>{if(!C.value)return"";const s=Object.entries(v.value),r="?"+s.map(([M,R])=>`${M}=${R}`).join("&"),d=s.length?r:"";return`/${C.value.path}${d}`}),K=new qe(Ge.boolean(),"dontShowReloadHelper"),W=w((Y=K.get())!=null?Y:!1),xe=()=>{K.set(!0),W.value=!0};return le(()=>l.params.id,()=>{fe()}),(s,r)=>(p(),b(Fe,null,Je({navbar:t(()=>[e(c)?(p(),b(e(va),{key:0,title:e(c).form.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:_e},{extra:t(()=>[a(ca,{"docs-path":"concepts/forms","editing-model":e(c).form},null,8,["editing-model"])]),_:1},8,["title"])):S("",!0)]),content:t(()=>[e(c)?(p(),b(Ie,{key:0},{left:t(()=>[a(e(ma),{"active-key":o.value,"onUpdate:activeKey":r[0]||(r[0]=d=>o.value=d)},{rightExtra:t(()=>[a(Ve,{model:e(c).form,onSave:ge},null,8,["model"])]),default:t(()=>[a(e(z),{key:"source-code",tab:"Source code"}),a(e(z),{key:"settings",tab:"Settings"}),a(e(z),{key:"notifications",tab:"Notifications"})]),_:1},8,["active-key"]),o.value==="source-code"?(p(),b(Ue,{key:0,ref_key:"code",ref:n,script:e(c).form,workspace:e(c).workspace,onUpdateFile:be},null,8,["script","workspace"])):S("",!0),o.value==="settings"?(p(),b(ja,{key:1,form:e(c).form},null,8,["form"])):S("",!0),o.value==="notifications"?(p(),b(za,{key:2,form:e(c).form},null,8,["form"])):S("",!0),f.value?(p(),b(Na,{key:3,"execution-config":u.value,"onUpdate:executionConfig":r[1]||(r[1]=d=>u.value=d),"show-thread-modal":f.value,"onUpdate:showThreadModal":r[2]||(r[2]=d=>f.value=d),stage:e(c).form,onFixInvalidJson:r[3]||(r[3]=(d,M)=>{var R;return(R=P.value)==null?void 0:R.fixJson(d,M)})},null,8,["execution-config","show-thread-modal","stage"])):S("",!0)]),right:t(()=>[a(e(D),{gap:"10",align:"center",justify:"right",style:{"margin-top":"6px"}},{default:t(()=>{var d;return[a(e(Ye),null,{default:t(()=>[m(Xe(u.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(re),{disabled:!!y.value&&e(B).includes((d=y.value)==null?void 0:d.type),checked:u.value.attached,"onUpdate:checked":_},null,8,["disabled","checked"]),a(e(fa),{dot:ve.value},{default:t(()=>{var M;return[a(e(I),{disabled:!!y.value&&e(B).includes((M=y.value)==null?void 0:M.type),style:{display:"flex",gap:"5px"},onClick:r[4]||(r[4]=R=>f.value=!0)},{icon:t(()=>[a(e(na),{size:"20"})]),default:t(()=>[m("Thread")]),_:1},8,["disabled"])]}),_:1},8,["dot"])]}),_:1}),a(e(ga),{style:{margin:"7px 0px 16px"}}),e(me)||!C.value||!y.value?(p(),b(e(ea),{key:0})):S("",!0),y.value&&C.value?(p(),b(e(D),{key:1,vertical:"",gap:"10",style:{height:"100%",overflow:"hidden"}},{default:t(()=>{var d,M,R,X,ee;return[a(e(D),{gap:"small"},{default:t(()=>[y.value.type&&e(Le).includes(y.value.type)?(p(),b(e(aa),{key:0,placement:"bottom",open:W.value?void 0:!0},{content:t(()=>[W.value?(p(),A("span",Ga,"Reload form")):(p(),A("span",Ja,[m(" You can reload the form here"),Ka,a(e(ta),{onClick:xe},{default:t(()=>[m("Don't show this again")]),_:1})]))]),default:t(()=>[a(e(I),{disabled:!!U.value,onClick:G},{default:t(()=>[a(e($a),{size:"20"})]),_:1},8,["disabled"])]),_:1},8,["open"])):S("",!0),e(B).includes(y.value.type)?(p(),b(e($),{key:1,placement:"bottom"},{title:t(()=>[m("Stop form")]),default:t(()=>[a(e(I),{onClick:G},{default:t(()=>[a(e(Re),{size:"20"})]),_:1})]),_:1})):S("",!0),y.value.type==="waiting"?(p(),b(e($),{key:2,placement:"bottom"},{title:t(()=>[m("Start form")]),default:t(()=>[a(e(I),{disabled:!!U.value,onClick:ye},{default:t(()=>[a(e(la),{size:"20"})]),_:1},8,["disabled"])]),_:1})):S("",!0),a(e(F),{disabled:"",value:Se.value},null,8,["value"]),a(e($),{placement:"bottom"},{title:t(()=>[m("Edit query params")]),default:t(()=>{var ae;return[a(e(I),{disabled:!!y.value&&e(B).includes((ae=y.value)==null?void 0:ae.type),onClick:r[5]||(r[5]=et=>Z.value=!0)},{default:t(()=>[a(e(sa),{size:"20"})]),_:1},8,["disabled"])]}),_:1}),a(e($),{placement:"bottom"},{title:t(()=>[m("Open in Full Screen")]),default:t(()=>[a(e(I),{target:"_blank","aria-label":"Open in Full Screen","aria-describedby":"sss",disabled:!u.value.attached,onClick:we},{default:t(()=>[a(e(ra),{size:"20"})]),_:1},8,["disabled"])]),_:1})]),_:1}),T("div",Ya,[a(Ce,{"current-path":e(c).form.path,"hide-login":!0},null,8,["current-path"]),a(Be,{"is-preview":"",class:"runner","form-runner-data":C.value,disabled:U.value,"form-state":y.value,"user-email":(d=e(k).user)==null?void 0:d.claims.email,onUpdateWidgetErrors:(M=i.value)==null?void 0:M.updateWidgetFrontendErrors,onUpdateWidgetValue:(R=i.value)==null?void 0:R.updateWidgetValue,onActionClicked:(X=i.value)==null?void 0:X.handleActionClick,onAutoFillClicked:(ee=i.value)==null?void 0:ee.handleAutofillClick},null,8,["form-runner-data","disabled","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onAutoFillClicked"])])]}),_:1})):S("",!0),a(Qa,{"query-params":v.value,"onUpdate:queryParams":r[6]||(r[6]=d=>v.value=d),open:Z.value,close:()=>Z.value=!1},null,8,["query-params","open","close"])]),_:1})):S("",!0)]),_:2},[e(c)?{name:"footer",fn:t(()=>[a(Me,{ref_key:"smartConsole",ref:P,"stage-type":"forms",stage:e(c).form,"log-service":e(J),workspace:e(c).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});const sl=N(Xa,[["__scopeId","data-v-75e86c4d"]]);export{sl as default};
//# sourceMappingURL=FormEditor.b753b510.js.map
