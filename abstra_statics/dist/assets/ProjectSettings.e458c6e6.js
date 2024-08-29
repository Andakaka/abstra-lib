import{a as A}from"./asyncComputed.f5c89aee.js";import{d as _,e as I,eo as B,f as m,c as C,w as a,u as e,o as g,b as t,aF as s,db as h,d9 as P,da as i,a as b,ec as f,cy as E,bK as F,cx as D,ed as T,X as x,R as N}from"./vue-router.c174ce36.js";import"./gateway.7ce49fa4.js";import{P as j}from"./project.cb87c501.js";import"./tables.92663de7.js";import{S as R}from"./SaveButton.87226617.js";import{a as v}from"./router.bbdfcbc7.js";import{A as U}from"./index.758eef60.js";import"./popupNotifcation.747c5c5b.js";import"./record.1b1f8d53.js";import"./string.d8dc1ddf.js";import"./UnsavedChangesHandler.d712a57e.js";import"./ExclamationCircleOutlined.efc2bdf4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="91c9c286-b0a4-4a6d-8d2f-f00cb33d4be5",n._sentryDebugIdIdentifier="sentry-dbid-91c9c286-b0a4-4a6d-8d2f-f00cb33d4be5")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),d=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function u(){r.project.subdomain?(o.value="loading",d()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),u()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(U),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(v),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[b("span",null,f(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(v),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[b("span",null,f(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(D),null,{default:a(()=>[t(e(E),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(F),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(R,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Z=_({__name:"ProjectSettings",setup(n){const o=T().params.projectId,{result:d}=A(()=>j.get(o));return(u,c)=>e(d)?(g(),x("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(d)},null,8,["project"])])):N("",!0)}});export{Z as default};
//# sourceMappingURL=ProjectSettings.e458c6e6.js.map
