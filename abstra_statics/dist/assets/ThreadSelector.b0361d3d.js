import{d as O,B as _,f as w,o as g,W as m,Z as B,R,es as J,a as v,eF as F,e as E,V as W,g as T,D as z,b as f,w as p,u,co as U,as as q,cn as G,ax as L,c as j,d0 as N,bL as M,et as K,aJ as Q,eC as X,eD as Y,$ as aa}from"./vue-router.6ef80130.js";import"./linters.a074a237.js";import{W as $}from"./workspaces.bf172934.js";import{v as ea}from"./string.49c06dd4.js";import{e as ta}from"./toggleHighContrast.3ab771ce.js";import{f as A}from"./index.3a33aa13.js";import{A as na}from"./index.7c7b0b39.js";import{A as oa}from"./index.233bd23b.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[t]="ea2d2cd8-f5a9-4590-ac4e-5e10dc2b3775",i._sentryDebugIdIdentifier="sentry-dbid-ea2d2cd8-f5a9-4590-ac4e-5e10dc2b3775")}catch{}})();const sa=["width","height","fill","transform"],ia={key:0},ra=v("path",{d:"M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"},null,-1),da=[ra],la={key:1},ua=v("path",{d:"M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z",opacity:"0.2"},null,-1),ca=v("path",{d:"M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"},null,-1),ga=[ua,ca],ha={key:2},fa=v("path",{d:"M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"},null,-1),pa=[fa],va={key:3},ma=v("path",{d:"M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"},null,-1),wa=[ma],Sa={key:4},ya=v("path",{d:"M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"},null,-1),Va=[ya],xa={key:5},ba=v("path",{d:"M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"},null,-1),Ca=[ba],Za={name:"PhMagicWand"},_a=O({...Za,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(i){const t=i,e=_("weight","regular"),c=_("size","1em"),V=_("color","currentColor"),k=_("mirrored",!1),d=w(()=>{var r;return(r=t.weight)!=null?r:e}),b=w(()=>{var r;return(r=t.size)!=null?r:c}),C=w(()=>{var r;return(r=t.color)!=null?r:V}),H=w(()=>t.mirrored!==void 0?t.mirrored?"scale(-1, 1)":void 0:k?"scale(-1, 1)":void 0);return(r,I)=>(g(),m("svg",J({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:b.value,height:b.value,fill:C.value,transform:H.value},r.$attrs),[B(r.$slots,"default"),d.value==="bold"?(g(),m("g",ia,da)):d.value==="duotone"?(g(),m("g",la,ga)):d.value==="fill"?(g(),m("g",ha,pa)):d.value==="light"?(g(),m("g",va,wa)):d.value==="regular"?(g(),m("g",Sa,Va)):d.value==="thin"?(g(),m("g",xa,Ca)):R("",!0)],16,sa))}});class ka{async list(t){const e=new URLSearchParams({stage:t});return await(await fetch(`/_editor/api/stage_runs?${e}`)).json()}async listPast(t){const e=new URLSearchParams({stage:t});return await(await fetch(`/_editor/api/stage_runs/past?${e}`)).json()}async fork(t,e){return(await fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t,custom_thread_data:e}),headers:{"Content-Type":"application/json"}})).json()}}const D=new ka;class y{constructor(t){this.dto=t}static async list(t){return(await D.list(t)).map(c=>new y(c))}static async listPast(t){return(await D.listPast(t)).map(c=>new y(c))}async fork(t){const e=await D.fork(this.id,t);return new y(e)}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}get createdAt(){return new Date(this.dto.createdAt)}}const Ha=i=>(X("data-v-2042db9a"),i=i(),Y(),i),La=Ha(()=>v("span",null," Fix with AI ",-1)),Ma=O({__name:"ThreadSelector",props:{stage:{},executionConfig:{}},emits:["fix-invalid-json","update:execution-config","update:show-thread-modal"],setup(i,{emit:t}){const e=i,c=w(()=>e.executionConfig.attached?"Select a thread to continue the workflow":"Choose a thread to copy the data from"),V=w(()=>e.executionConfig.attached?"Select thread":"Use this thread data"),k=w(()=>e.executionConfig.attached?!e.executionConfig.stageRunId||e.executionConfig.pendingFork:!1),d=w(()=>{if(!a.threadData)return{valid:!0,parsed:{}};const n=ea(a.threadData);return n.valid&&!F.exports.isObject(n.parsed)?{valid:!1,message:"Thread data must be an object."}:n});function b(){d.value.valid||t("fix-invalid-json",a.threadData,d.value.message)}const C=E(null),H=n=>{const o=a.waitingStageRuns.find(S=>S.id===n),l=a.pastStageRuns.find(S=>S.id===n),x=o!=null?o:l;if(!x)throw new Error("Stage run not found");const s=JSON.stringify(x.data,null,2);h.setValue(s),a.threadData=s,a.selectedStageRunId=n,t("update:execution-config",{...e.executionConfig,stageRunId:n,pendingFork:!!l})},r=()=>{t("update:execution-config",{...e.executionConfig,stageRunId:null,pendingFork:!1})},I=()=>{t("update:show-thread-modal",!1),$.writeTestData(a.threadData)},P=async()=>{const n=[...a.waitingStageRuns,...a.pastStageRuns].find(l=>l.id===e.executionConfig.stageRunId),o=await(n==null?void 0:n.fork(a.threadData));if(o){t("update:execution-config",{...e.executionConfig,pendingFork:!1,stageRunId:o==null?void 0:o.id});const l={value:o.id,label:`Started ${A(new Date(o.createdAt),{addSuffix:!0})} (${o.status})`};a.options[0].options.unshift(l),a.waitingStageRuns.push(o),a.threadData=JSON.stringify(o.data,null,2),a.selectedStageRunId=o.id,h.setValue(a.threadData)}};let h;W(async()=>{var x;a.threadData=await $.readTestData(),a.selectedStageRunId=(x=e.executionConfig.stageRunId)!=null?x:void 0;const n=await y.list(e.stage.id),o=await y.listPast(e.stage.id);a.waitingStageRuns=n.filter(s=>s.status==="waiting"),a.pastStageRuns=[...o,...n.filter(s=>s.status!=="waiting")],a.options=[],a.waitingStageRuns.length>0&&a.options.push({label:"Waiting threads",options:a.waitingStageRuns.map(s=>({value:s.id,label:`Started ${A(s.createdAt,{addSuffix:!0})} (${s.status})`}))}),a.pastStageRuns.length>0&&a.options.push({label:"Past threads",options:a.pastStageRuns.map(s=>({value:s.id,label:`Started ${A(s.createdAt,{addSuffix:!0})} (${s.status})`}))}),h=ta.create(C.value,{language:"json",value:a.threadData,fontFamily:"monospace",lineNumbers:"off",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},readOnly:e.executionConfig.attached});const l=h.getContribution("editor.contrib.messageController");h.onDidAttemptReadOnlyEdit(()=>{l.showMessage("Can't edit thread data with workflow on",h.getPosition())}),h.onDidChangeModelContent(()=>{const s=h.getValue();if(a.threadData=s,e.executionConfig.attached&&a.selectedStageRunId){const S=[...a.waitingStageRuns,...a.pastStageRuns].find(Z=>Z.id===a.selectedStageRunId);if(!S){t("update:execution-config",{...e.executionConfig,pendingFork:!0});return}try{const Z=JSON.parse(s);F.exports.isEqual(S.data,Z)?t("update:execution-config",{...e.executionConfig,pendingFork:!1}):t("update:execution-config",{...e.executionConfig,pendingFork:!0})}catch{t("update:execution-config",{...e.executionConfig,pendingFork:!0})}}})}),T(()=>e.executionConfig.stageRunId,n=>{n?a.selectedStageRunId=n:a.selectedStageRunId=void 0}),T(()=>e.executionConfig.attached,n=>{h.updateOptions({readOnly:n})});const a=z({waitingStageRuns:[],pastStageRuns:[],options:[],loading:!1,threadData:"{}",selectedStageRunId:void 0});return(n,o)=>(g(),m(Q,null,[f(u(G),{layout:"vertical"},{default:p(()=>[f(u(U),{label:c.value},{default:p(()=>[f(u(q),{placeholder:"No thread selected","filter-option":"",style:{width:"100%"},"allow-clear":!0,options:a.options,value:a.selectedStageRunId,"not-found-content":"There are no threads",onSelect:o[0]||(o[0]=l=>H(l)),onClear:o[1]||(o[1]=l=>r())},null,8,["options","value"])]),_:1},8,["label"])]),_:1}),f(u(na),{orientation:"left"},{default:p(()=>[L("Data")]),_:1}),v("div",{ref_key:"dataJson",ref:C,class:"data-container"},null,512),d.value.valid===!1?(g(),j(u(oa),{key:0,type:"error",message:"Invalid JSON",description:d.value.message},{action:p(()=>[f(u(M),{onClick:b},{default:p(()=>[f(u(N),{align:"center",gap:"small"},{default:p(()=>[f(u(_a)),La]),_:1})]),_:1})]),_:1},8,["description"])):R("",!0),f(u(N),{justify:"end",gap:"middle",style:{"margin-top":"12px"}},{default:p(()=>[n.executionConfig.attached&&n.executionConfig.pendingFork?(g(),j(u(M),{key:0,onClick:P},{default:p(()=>[L("Fork")]),_:1})):R("",!0),f(u(M),{type:"primary",disabled:k.value,onClick:I},{default:p(()=>[L(K(V.value),1)]),_:1},8,["disabled"])]),_:1})],64))}});const $a=aa(Ma,[["__scopeId","data-v-2042db9a"]]);export{$a as T};
//# sourceMappingURL=ThreadSelector.b0361d3d.js.map
