import{a as I}from"./asyncComputed.51dda6f4.js";import{d as h,e as D,em as P,f as p,c as B,w as t,u as e,o as _,b as o,aF as l,d9 as j,d7 as E,d8 as i,a as b,ec as f,cv as F,bH as T,cu as x,ed as H,X as N,R}from"./vue-router.be64e328.js";import"./gateway.1252f45c.js";import{P as y}from"./project.282ce23e.js";import"./tables.277162f9.js";import{S as V}from"./SaveButton.27ea82cd.js";import{a as g}from"./router.8a019a87.js";import{A as U}from"./index.e94a7ccc.js";import"./popupNotifcation.53f63205.js";import"./record.7d40488d.js";import"./string.8192a7eb.js";import"./UnsavedChangesHandler.5e987089.js";import"./ExclamationCircleOutlined.4706ef85.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[d]="87381a65-ed5d-4381-9262-a33c40003dae",s._sentryDebugIdIdentifier="sentry-dbid-87381a65-ed5d-4381-9262-a33c40003dae")}catch{}})();const q=h({__name:"SubdomainEditor",props:{project:{}},emits:["change-subdomain"],setup(s,{emit:d}){const n=s,a=D(void 0),c=P.exports.debounce(async()=>{try{const{available:r}=await n.project.checkSubdomain();a.value=r?"available":"unavailable"}catch{a.value=void 0}},500);function u(){if(!n.project.hasChangesDeep("subdomain")){a.value=void 0;return}n.project.subdomain?(a.value="loading",c()):a.value="invalid"}const m=p(()=>a.value!=="available"||!n.project.hasChangesDeep("subdomain")),S=p(()=>{switch(a.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),k=p(()=>{switch(a.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),w=()=>{const r=y.formatSubdomain(n.project.subdomain);d("change-subdomain",r),u()};function A(){n.project.resetChanges(),a.value=void 0}return(r,v)=>(_(),B(e(U),{direction:"vertical"},{default:t(()=>[o(e(j),{level:2},{default:t(()=>[l("Subdomain")]),_:1}),o(e(E),null,{default:t(()=>[l(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),o(e(g),null,{default:t(()=>[o(e(i),null,{default:t(()=>[l("Forms available at:")]),_:1}),o(e(i),{code:""},{default:t(()=>[b("span",null,f(r.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),o(e(g),null,{default:t(()=>[o(e(i),null,{default:t(()=>[l("Hooks available at:")]),_:1}),o(e(i),{code:""},{default:t(()=>[b("span",null,f(r.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),o(e(x),null,{default:t(()=>[o(e(F),{"validate-status":S.value,help:k.value,"has-feedback":""},{default:t(()=>[o(e(T),{value:r.project.subdomain,type:"text",loading:a.value==="loading",onBlur:w,onChange:v[0]||(v[0]=C=>d("change-subdomain",C.target.value))},{addonBefore:t(()=>[l("https://")]),addonAfter:t(()=>[l(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),o(V,{model:r.project,disabled:m.value,onError:A},null,8,["model","disabled"])]),_:1})]),_:1}))}}),M={key:0,class:"project-settings"},ae=h({__name:"ProjectSettings",setup(s){const n=H().params.projectId,{result:a}=I(()=>y.get(n)),c=u=>{a.value.subdomain=u};return(u,m)=>e(a)?(_(),N("div",M,[o(e(j),null,{default:t(()=>[l("Project Settings")]),_:1}),o(q,{project:e(a),onChangeSubdomain:c},null,8,["project"])])):R("",!0)}});export{ae as default};
//# sourceMappingURL=ProjectSettings.321a1aee.js.map
