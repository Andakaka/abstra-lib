var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.e3e1f7d8.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.12524cff.js";import{a as ae}from"./asyncComputed.87d81fb3.js";import"./url.3ec4b369.js";import"./colorHelpers.ca3b7e92.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="2b7b352e-a560-4275-af4b-d3f512cf95e2",o._sentryDebugIdIdentifier="sentry-dbid-2b7b352e-a560-4275-af4b-d3f512cf95e2")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"a4a399e3df7886573123cc3c880d8a5bab157f9f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.7b3d4112.js"),["assets/Home.7b3d4112.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.d872b64d.js"),["assets/Workspace.d872b64d.js","assets/BaseLayout.a95a3f15.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.eee3f063.js","assets/NavbarControls.a3e48b4d.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/CloseCircleOutlined.f8e7b0fa.js","assets/index.060ff204.js","assets/index.00d5f273.js","assets/workspaces.8c434502.js","assets/record.368ca995.js","assets/popupNotifcation.02456d01.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhChats.vue.81b10aea.js","assets/NavbarControls.88cd9418.css","assets/Logo.7a241e31.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.dde9d0f9.js","assets/PhCaretRight.vue.05311a15.js","assets/PhFlowArrow.vue.56fe03d9.js","assets/PhKanban.vue.18091603.js","assets/index.6ad82a15.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js","assets/asyncComputed.87d81fb3.js","assets/Workspace.f4e56ef5.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.c2eee32b.js"),["assets/Stages.c2eee32b.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.38b49712.js","assets/ContentLayout.ee57a545.css","assets/CrudView.ca1b46f4.js","assets/router.910f8171.js","assets/gateway.6bb15e53.js","assets/popupNotifcation.02456d01.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/url.3ec4b369.js","assets/PhDotsThreeVertical.vue.997d636b.js","assets/index.00d5f273.js","assets/CrudView.6b6b336a.css","assets/ant-design.3128159b.js","assets/asyncComputed.87d81fb3.js","assets/string.d128e34b.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/forms.78456ab3.js","assets/record.368ca995.js","assets/scripts.1deed308.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/colorHelpers.ca3b7e92.js","assets/index.060ff204.js","assets/PhWebhooksLogo.vue.40989099.js","assets/validations.69e49dcb.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.85421aca.js"),["assets/WorkflowEditor.85421aca.js","assets/api.bad54bf1.js","assets/fetch.47411cfe.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/metadata.7b6c895a.js","assets/PhBug.vue.621c828f.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/Workflow.fb6be8af.js","assets/PhArrowClockwise.vue.30877a6a.js","assets/PhArrowCounterClockwise.vue.c5654a9b.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/uuid.499d751e.js","assets/index.1f8a4ecb.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/record.368ca995.js","assets/polling.25fe7b2b.js","assets/index.a9dd6810.js","assets/Badge.80269ee8.js","assets/isNumeric.75337b1e.js","assets/Workflow.6fe906b3.css","assets/asyncComputed.87d81fb3.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.9e5c3f97.js","assets/WorkflowEditor.f9f21f8b.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.bc2d40e3.js"),["assets/WorkflowThreads.bc2d40e3.js","assets/api.bad54bf1.js","assets/fetch.47411cfe.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/metadata.7b6c895a.js","assets/PhBug.vue.621c828f.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/ContentLayout.38b49712.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.11d6d1d0.js","assets/polling.25fe7b2b.js","assets/asyncComputed.87d81fb3.js","assets/PhQuestion.vue.2eb98d4f.js","assets/ant-design.3128159b.js","assets/index.00d5f273.js","assets/index.e528fdf1.js","assets/index.a662407c.js","assets/CollapsePanel.017c540f.js","assets/index.9e5c3f97.js","assets/index.72c51b08.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.c5654a9b.js","assets/Workflow.fb6be8af.js","assets/PhArrowClockwise.vue.30877a6a.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/uuid.499d751e.js","assets/index.1f8a4ecb.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/record.368ca995.js","assets/index.a9dd6810.js","assets/Badge.80269ee8.js","assets/Workflow.6fe906b3.css","assets/Card.6fb49d8f.js","assets/TabPane.d9d07b1b.js","assets/LoadingOutlined.d271fbba.js","assets/DeleteOutlined.88d3ea57.js","assets/PhDownloadSimple.vue.9978f1dd.js","assets/utils.b7e781df.js","assets/LoadingContainer.22212025.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.318cca73.js"),["assets/PreferencesEditor.318cca73.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/record.368ca995.js","assets/PlayerNavbar.f4868079.js","assets/metadata.7b6c895a.js","assets/PhBug.vue.621c828f.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/PhSignOut.vue.eee3f063.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js","assets/PlayerNavbar.b72557ee.css","assets/PlayerConfigProvider.8cd1a4a5.js","assets/index.1f8a4ecb.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.063fdd10.js","assets/ContentLayout.38b49712.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.22212025.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.87d81fb3.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.f6ef14dc.js"),["assets/RequirementsEditor.f6ef14dc.js","assets/ContentLayout.38b49712.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.ca1b46f4.js","assets/router.910f8171.js","assets/gateway.6bb15e53.js","assets/popupNotifcation.02456d01.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/url.3ec4b369.js","assets/PhDotsThreeVertical.vue.997d636b.js","assets/index.00d5f273.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/record.368ca995.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/colorHelpers.ca3b7e92.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.b9dcda6c.js"),["assets/EnvVarsEditor.b9dcda6c.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/record.368ca995.js","assets/ContentLayout.38b49712.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.2e8ebd4a.js","assets/gateway.6bb15e53.js","assets/popupNotifcation.02456d01.js","assets/fetch.47411cfe.js","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.ca1b46f4.js","assets/router.910f8171.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhDotsThreeVertical.vue.997d636b.js","assets/index.00d5f273.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.6967ec7d.js","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/PhPencil.vue.2d00653d.js","assets/index.060ff204.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.7ed5b3e7.js"),["assets/VSCodeConnection.7ed5b3e7.js","assets/ContentLayout.38b49712.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.ee57a545.css","assets/polling.25fe7b2b.js","assets/index.00d5f273.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.3380ff04.js"),["assets/AccessControlEditor.3380ff04.js","assets/ContentLayout.38b49712.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.ee57a545.css","assets/fetch.47411cfe.js","assets/record.368ca995.js","assets/repository.2d4d99b9.js","assets/gateway.6bb15e53.js","assets/popupNotifcation.02456d01.js","assets/asyncComputed.87d81fb3.js","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.c671f59f.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/index.9e5c3f97.js","assets/metadata.7b6c895a.js","assets/PhBug.vue.621c828f.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/index.060ff204.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.50689575.js"),["assets/ProjectLogin.50689575.js","assets/BaseLayout.a95a3f15.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.b7a1f19a.css","assets/Logo.7a241e31.js","assets/Logo.21e86751.css","assets/index.6ad82a15.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js","assets/index.00d5f273.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/asyncComputed.87d81fb3.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.d24688f3.js"),["assets/FormEditor.d24688f3.js","assets/api.bad54bf1.js","assets/fetch.47411cfe.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/metadata.7b6c895a.js","assets/PhBug.vue.621c828f.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/PlayerNavbar.f4868079.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/PhSignOut.vue.eee3f063.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js","assets/PlayerNavbar.b72557ee.css","assets/BaseLayout.a95a3f15.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.95024192.js","assets/uuid.499d751e.js","assets/scripts.1deed308.js","assets/record.368ca995.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/PhCopy.vue.f4154f49.js","assets/PhCopySimple.vue.cef65023.js","assets/PhCaretRight.vue.05311a15.js","assets/Badge.80269ee8.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.2eb98d4f.js","assets/LoadingOutlined.d271fbba.js","assets/workspaces.8c434502.js","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/PhPencil.vue.2d00653d.js","assets/toggleHighContrast.1a87c8eb.js","assets/toggleHighContrast.30d77c87.css","assets/index.060ff204.js","assets/Card.6fb49d8f.js","assets/TabPane.d9d07b1b.js","assets/SourceCode.c657f354.css","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.9f69dfed.js","assets/Login.vue_vue_type_script_setup_true_lang.ae5c9fff.js","assets/CircularLoading.e817de0a.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.30877a6a.js","assets/Login.d43fdc58.css","assets/Steps.dd42ff56.js","assets/Steps.d681065f.css","assets/Watermark.ae552f3b.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.30bf18bf.css","assets/PlayerConfigProvider.8cd1a4a5.js","assets/index.1f8a4ecb.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.75d3b286.js","assets/PhFlowArrow.vue.56fe03d9.js","assets/forms.78456ab3.js","assets/ThreadSelector.9e3bc6fd.js","assets/index.e528fdf1.js","assets/index.9e5c3f97.js","assets/ThreadSelector.8aa77ab2.css","assets/index.00d5f273.js","assets/NavbarControls.a3e48b4d.js","assets/CloseCircleOutlined.f8e7b0fa.js","assets/popupNotifcation.02456d01.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhChats.vue.81b10aea.js","assets/NavbarControls.88cd9418.css","assets/index.6ad82a15.js","assets/FormEditor.2de57d1a.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.9e374632.js"),["assets/JobEditor.9e374632.js","assets/BaseLayout.a95a3f15.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.95024192.js","assets/uuid.499d751e.js","assets/scripts.1deed308.js","assets/record.368ca995.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/PhCopy.vue.f4154f49.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhCopySimple.vue.cef65023.js","assets/PhCaretRight.vue.05311a15.js","assets/Badge.80269ee8.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.621c828f.js","assets/PhQuestion.vue.2eb98d4f.js","assets/LoadingOutlined.d271fbba.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/PhPencil.vue.2d00653d.js","assets/toggleHighContrast.1a87c8eb.js","assets/toggleHighContrast.30d77c87.css","assets/index.060ff204.js","assets/Card.6fb49d8f.js","assets/TabPane.d9d07b1b.js","assets/SourceCode.c657f354.css","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.c24c2717.js","assets/index.00d5f273.js","assets/RunButton.vue_vue_type_script_setup_true_lang.64f88936.js","assets/NavbarControls.a3e48b4d.js","assets/CloseCircleOutlined.f8e7b0fa.js","assets/popupNotifcation.02456d01.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhChats.vue.81b10aea.js","assets/NavbarControls.88cd9418.css","assets/index.6ad82a15.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f7256670.js"),["assets/HookEditor.f7256670.js","assets/BaseLayout.a95a3f15.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.95024192.js","assets/uuid.499d751e.js","assets/scripts.1deed308.js","assets/record.368ca995.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/PhCopy.vue.f4154f49.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhCopySimple.vue.cef65023.js","assets/PhCaretRight.vue.05311a15.js","assets/Badge.80269ee8.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.621c828f.js","assets/PhQuestion.vue.2eb98d4f.js","assets/LoadingOutlined.d271fbba.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/PhPencil.vue.2d00653d.js","assets/toggleHighContrast.1a87c8eb.js","assets/toggleHighContrast.30d77c87.css","assets/index.060ff204.js","assets/Card.6fb49d8f.js","assets/TabPane.d9d07b1b.js","assets/SourceCode.c657f354.css","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.64f88936.js","assets/api.bad54bf1.js","assets/fetch.47411cfe.js","assets/metadata.7b6c895a.js","assets/PhKanban.vue.18091603.js","assets/PhWebhooksLogo.vue.40989099.js","assets/ThreadSelector.9e3bc6fd.js","assets/index.e528fdf1.js","assets/index.9e5c3f97.js","assets/ThreadSelector.8aa77ab2.css","assets/index.392f203e.js","assets/CollapsePanel.017c540f.js","assets/index.00d5f273.js","assets/NavbarControls.a3e48b4d.js","assets/CloseCircleOutlined.f8e7b0fa.js","assets/popupNotifcation.02456d01.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhChats.vue.81b10aea.js","assets/NavbarControls.88cd9418.css","assets/index.6ad82a15.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.d7dc904d.js"),["assets/ScriptEditor.d7dc904d.js","assets/BaseLayout.a95a3f15.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.95024192.js","assets/uuid.499d751e.js","assets/scripts.1deed308.js","assets/record.368ca995.js","assets/validations.69e49dcb.js","assets/string.d128e34b.js","assets/PhCopy.vue.f4154f49.js","assets/PhCheckCircle.vue.c3c4fd01.js","assets/PhCopySimple.vue.cef65023.js","assets/PhCaretRight.vue.05311a15.js","assets/Badge.80269ee8.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.621c828f.js","assets/PhQuestion.vue.2eb98d4f.js","assets/LoadingOutlined.d271fbba.js","assets/workspaces.8c434502.js","assets/workspaceStore.12524cff.js","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/asyncComputed.87d81fb3.js","assets/polling.25fe7b2b.js","assets/PhPencil.vue.2d00653d.js","assets/toggleHighContrast.1a87c8eb.js","assets/toggleHighContrast.30d77c87.css","assets/index.060ff204.js","assets/Card.6fb49d8f.js","assets/TabPane.d9d07b1b.js","assets/SourceCode.c657f354.css","assets/SaveButton.2bbb2bf6.js","assets/UnsavedChangesHandler.485f30fe.js","assets/ExclamationCircleOutlined.ddac0cc6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.64f88936.js","assets/ThreadSelector.9e3bc6fd.js","assets/index.e528fdf1.js","assets/index.9e5c3f97.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.a3e48b4d.js","assets/CloseCircleOutlined.f8e7b0fa.js","assets/index.00d5f273.js","assets/popupNotifcation.02456d01.js","assets/PhArrowSquareOut.vue.75d3b286.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1627ef4.js","assets/BookOutlined.32d3a336.js","assets/PhChats.vue.81b10aea.js","assets/NavbarControls.88cd9418.css","assets/index.6ad82a15.js","assets/index.785e8cc8.js","assets/Avatar.011c82df.js","assets/CollapsePanel.017c540f.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.a8194f80.js"),["assets/App.a8194f80.js","assets/App.vue_vue_type_style_index_0_lang.eb3c4c55.js","assets/workspaceStore.12524cff.js","assets/vue-router.e3e1f7d8.js","assets/vue-router.3a0fae2e.css","assets/url.3ec4b369.js","assets/colorHelpers.ca3b7e92.js","assets/PlayerConfigProvider.8cd1a4a5.js","assets/index.1f8a4ecb.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.cb63bb97.js.map
