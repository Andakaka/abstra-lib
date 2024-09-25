var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.be64e328.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.5f592602.js";import{a as ae}from"./asyncComputed.51dda6f4.js";import"./url.cb5b0259.js";import"./colorHelpers.fafeb24a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="65a3254f-0a10-45a2-a158-a5e00dd05b56",o._sentryDebugIdIdentifier="sentry-dbid-65a3254f-0a10-45a2-a158-a5e00dd05b56")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"d1b8a0c5687c113a7f56229a24f351fcb9f721b8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.c6639d40.js"),["assets/Home.c6639d40.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.d881620a.js"),["assets/Workspace.d881620a.js","assets/BaseLayout.9caee3a7.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.bdc9e7f7.js","assets/NavbarControls.c99f9aaf.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/CloseCircleOutlined.d9e5bd09.js","assets/index.03d1721c.js","assets/index.e94a7ccc.js","assets/workspaces.e0f7e222.js","assets/record.7d40488d.js","assets/popupNotifcation.53f63205.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhChats.vue.3b491393.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8d8381a8.js","assets/Logo.86e0ebff.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.94d0cdc5.js","assets/PhCaretRight.vue.d988cc70.js","assets/PhFlowArrow.vue.04e88041.js","assets/PhKanban.vue.b35d6db5.js","assets/index.52012fc5.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js","assets/asyncComputed.51dda6f4.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.3f912f44.js"),["assets/Stages.3f912f44.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/ContentLayout.64ff12a6.js","assets/ContentLayout.ee57a545.css","assets/CrudView.c160aaca.js","assets/router.8a019a87.js","assets/gateway.1252f45c.js","assets/popupNotifcation.53f63205.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/url.cb5b0259.js","assets/PhDotsThreeVertical.vue.ac46162c.js","assets/Badge.66638ea9.js","assets/index.e94a7ccc.js","assets/CrudView.2fb0614c.css","assets/ant-design.b3ff515e.js","assets/asyncComputed.51dda6f4.js","assets/string.8192a7eb.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/forms.65cebfd3.js","assets/record.7d40488d.js","assets/scripts.20d57466.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/colorHelpers.fafeb24a.js","assets/index.03d1721c.js","assets/PhWebhooksLogo.vue.281df540.js","assets/validations.82c5e02a.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.37114252.js"),["assets/WorkflowEditor.37114252.js","assets/api.8dbda649.js","assets/fetch.c994fe97.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/metadata.1e9c3a31.js","assets/PhBug.vue.1e839570.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/Workflow.6132708c.js","assets/PhArrowCounterClockwise.vue.77da4a3b.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/uuid.f5b41739.js","assets/index.08e31202.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/record.7d40488d.js","assets/polling.10aa663d.js","assets/index.2e62cbcd.js","assets/Badge.66638ea9.js","assets/PhArrowDown.vue.be1c719b.js","assets/Workflow.c1addbc6.css","assets/asyncComputed.51dda6f4.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.8f97376f.js","assets/WorkflowEditor.d0e998ad.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.9e02dfd2.js"),["assets/WorkflowThreads.9e02dfd2.js","assets/api.8dbda649.js","assets/fetch.c994fe97.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/metadata.1e9c3a31.js","assets/PhBug.vue.1e839570.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/ContentLayout.64ff12a6.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.42ff6f96.js","assets/polling.10aa663d.js","assets/asyncComputed.51dda6f4.js","assets/PhQuestion.vue.210b73e2.js","assets/ant-design.b3ff515e.js","assets/index.e94a7ccc.js","assets/index.70f9588e.js","assets/index.bd506ea4.js","assets/CollapsePanel.14a2a58b.js","assets/index.8f97376f.js","assets/index.c9b4b939.js","assets/Badge.66638ea9.js","assets/PhArrowCounterClockwise.vue.77da4a3b.js","assets/Workflow.6132708c.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/uuid.f5b41739.js","assets/index.08e31202.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/record.7d40488d.js","assets/index.2e62cbcd.js","assets/PhArrowDown.vue.be1c719b.js","assets/Workflow.c1addbc6.css","assets/Card.25954e67.js","assets/TabPane.4b482962.js","assets/LoadingOutlined.144bd515.js","assets/DeleteOutlined.8b734350.js","assets/PhDownloadSimple.vue.cffebb4b.js","assets/utils.6911617e.js","assets/LoadingContainer.e3a5d1cc.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.0eba7d75.js"),["assets/PreferencesEditor.0eba7d75.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/record.7d40488d.js","assets/PlayerNavbar.62fcdde6.js","assets/metadata.1e9c3a31.js","assets/PhBug.vue.1e839570.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/LoadingOutlined.144bd515.js","assets/PhSignOut.vue.bdc9e7f7.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.18e68a6d.js","assets/index.08e31202.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.237dcacc.js","assets/ContentLayout.64ff12a6.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.e3a5d1cc.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.51dda6f4.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.f27ea9c3.js"),["assets/RequirementsEditor.f27ea9c3.js","assets/ContentLayout.64ff12a6.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.c160aaca.js","assets/router.8a019a87.js","assets/gateway.1252f45c.js","assets/popupNotifcation.53f63205.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/url.cb5b0259.js","assets/PhDotsThreeVertical.vue.ac46162c.js","assets/Badge.66638ea9.js","assets/index.e94a7ccc.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/record.7d40488d.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/colorHelpers.fafeb24a.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c3804fe9.js"),["assets/EnvVarsEditor.c3804fe9.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/record.7d40488d.js","assets/ContentLayout.64ff12a6.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.c6df4c95.js","assets/gateway.1252f45c.js","assets/popupNotifcation.53f63205.js","assets/fetch.c994fe97.js","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.c160aaca.js","assets/router.8a019a87.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhDotsThreeVertical.vue.ac46162c.js","assets/Badge.66638ea9.js","assets/index.e94a7ccc.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/PhPencil.vue.bf55e93f.js","assets/index.03d1721c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.ccf30458.js"),["assets/VSCodeConnection.ccf30458.js","assets/ContentLayout.64ff12a6.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/polling.10aa663d.js","assets/index.e94a7ccc.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.aa6267d6.js"),["assets/AccessControlEditor.aa6267d6.js","assets/ContentLayout.64ff12a6.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/fetch.c994fe97.js","assets/record.7d40488d.js","assets/repository.fd8b0491.js","assets/gateway.1252f45c.js","assets/popupNotifcation.53f63205.js","assets/asyncComputed.51dda6f4.js","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.ed800677.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/index.8f97376f.js","assets/metadata.1e9c3a31.js","assets/PhBug.vue.1e839570.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/index.03d1721c.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.72c3066d.js"),["assets/ProjectLogin.72c3066d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8d8381a8.js","assets/Logo.86e0ebff.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/Logo.03290bf7.css","assets/BaseLayout.9caee3a7.js","assets/BaseLayout.b7a1f19a.css","assets/index.52012fc5.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js","assets/index.e94a7ccc.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/asyncComputed.51dda6f4.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.bb133f61.js"),["assets/FormEditor.bb133f61.js","assets/api.8dbda649.js","assets/fetch.c994fe97.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/metadata.1e9c3a31.js","assets/PhBug.vue.1e839570.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/PlayerNavbar.62fcdde6.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/LoadingOutlined.144bd515.js","assets/PhSignOut.vue.bdc9e7f7.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.9caee3a7.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.c30d5703.js","assets/uuid.f5b41739.js","assets/scripts.20d57466.js","assets/record.7d40488d.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/PhCopy.vue.f385e2e5.js","assets/PhCopySimple.vue.c5f69a5b.js","assets/PhCaretRight.vue.d988cc70.js","assets/Badge.66638ea9.js","assets/PhQuestion.vue.210b73e2.js","assets/workspaces.e0f7e222.js","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/PhPencil.vue.bf55e93f.js","assets/toggleHighContrast.c80e3327.js","assets/toggleHighContrast.30d77c87.css","assets/index.03d1721c.js","assets/Card.25954e67.js","assets/TabPane.4b482962.js","assets/SourceCode.c657f354.css","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.7ac84851.js","assets/Login.vue_vue_type_script_setup_true_lang.57e07285.js","assets/Logo.86e0ebff.js","assets/Logo.03290bf7.css","assets/CircularLoading.4b5470ef.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.ac8e09f1.js","assets/index.628dd463.js","assets/Steps.4d03c6c1.css","assets/Watermark.bbdf8a02.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.18e68a6d.js","assets/index.08e31202.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.480701a9.js","assets/PhFlowArrow.vue.04e88041.js","assets/forms.65cebfd3.js","assets/ThreadSelector.e53d67fc.js","assets/index.70f9588e.js","assets/index.8f97376f.js","assets/ThreadSelector.8aa77ab2.css","assets/index.e94a7ccc.js","assets/NavbarControls.c99f9aaf.js","assets/CloseCircleOutlined.d9e5bd09.js","assets/popupNotifcation.53f63205.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhChats.vue.3b491393.js","assets/NavbarControls.8216d9aa.css","assets/index.52012fc5.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.2dbcadac.js"),["assets/JobEditor.2dbcadac.js","assets/BaseLayout.9caee3a7.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.c30d5703.js","assets/uuid.f5b41739.js","assets/scripts.20d57466.js","assets/record.7d40488d.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/PhCopy.vue.f385e2e5.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhCopySimple.vue.c5f69a5b.js","assets/PhCaretRight.vue.d988cc70.js","assets/Badge.66638ea9.js","assets/PhBug.vue.1e839570.js","assets/PhQuestion.vue.210b73e2.js","assets/LoadingOutlined.144bd515.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/PhPencil.vue.bf55e93f.js","assets/toggleHighContrast.c80e3327.js","assets/toggleHighContrast.30d77c87.css","assets/index.03d1721c.js","assets/Card.25954e67.js","assets/TabPane.4b482962.js","assets/SourceCode.c657f354.css","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.4b60842c.js","assets/index.e94a7ccc.js","assets/RunButton.vue_vue_type_script_setup_true_lang.910354b2.js","assets/NavbarControls.c99f9aaf.js","assets/CloseCircleOutlined.d9e5bd09.js","assets/popupNotifcation.53f63205.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhChats.vue.3b491393.js","assets/NavbarControls.8216d9aa.css","assets/index.52012fc5.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.0f0e59a6.js"),["assets/HookEditor.0f0e59a6.js","assets/BaseLayout.9caee3a7.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.c30d5703.js","assets/uuid.f5b41739.js","assets/scripts.20d57466.js","assets/record.7d40488d.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/PhCopy.vue.f385e2e5.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhCopySimple.vue.c5f69a5b.js","assets/PhCaretRight.vue.d988cc70.js","assets/Badge.66638ea9.js","assets/PhBug.vue.1e839570.js","assets/PhQuestion.vue.210b73e2.js","assets/LoadingOutlined.144bd515.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/PhPencil.vue.bf55e93f.js","assets/toggleHighContrast.c80e3327.js","assets/toggleHighContrast.30d77c87.css","assets/index.03d1721c.js","assets/Card.25954e67.js","assets/TabPane.4b482962.js","assets/SourceCode.c657f354.css","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.910354b2.js","assets/api.8dbda649.js","assets/fetch.c994fe97.js","assets/metadata.1e9c3a31.js","assets/PhKanban.vue.b35d6db5.js","assets/PhWebhooksLogo.vue.281df540.js","assets/ThreadSelector.e53d67fc.js","assets/index.70f9588e.js","assets/index.8f97376f.js","assets/ThreadSelector.8aa77ab2.css","assets/index.6c765186.js","assets/CollapsePanel.14a2a58b.js","assets/index.e94a7ccc.js","assets/NavbarControls.c99f9aaf.js","assets/CloseCircleOutlined.d9e5bd09.js","assets/popupNotifcation.53f63205.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhChats.vue.3b491393.js","assets/NavbarControls.8216d9aa.css","assets/index.52012fc5.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.155b12bd.js"),["assets/ScriptEditor.155b12bd.js","assets/BaseLayout.9caee3a7.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.c30d5703.js","assets/uuid.f5b41739.js","assets/scripts.20d57466.js","assets/record.7d40488d.js","assets/validations.82c5e02a.js","assets/string.8192a7eb.js","assets/PhCopy.vue.f385e2e5.js","assets/PhCheckCircle.vue.310e1003.js","assets/PhCopySimple.vue.c5f69a5b.js","assets/PhCaretRight.vue.d988cc70.js","assets/Badge.66638ea9.js","assets/PhBug.vue.1e839570.js","assets/PhQuestion.vue.210b73e2.js","assets/LoadingOutlined.144bd515.js","assets/workspaces.e0f7e222.js","assets/workspaceStore.5f592602.js","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/asyncComputed.51dda6f4.js","assets/polling.10aa663d.js","assets/PhPencil.vue.bf55e93f.js","assets/toggleHighContrast.c80e3327.js","assets/toggleHighContrast.30d77c87.css","assets/index.03d1721c.js","assets/Card.25954e67.js","assets/TabPane.4b482962.js","assets/SourceCode.c657f354.css","assets/SaveButton.27ea82cd.js","assets/UnsavedChangesHandler.5e987089.js","assets/ExclamationCircleOutlined.4706ef85.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.910354b2.js","assets/ThreadSelector.e53d67fc.js","assets/index.70f9588e.js","assets/index.8f97376f.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.c99f9aaf.js","assets/CloseCircleOutlined.d9e5bd09.js","assets/index.e94a7ccc.js","assets/popupNotifcation.53f63205.js","assets/PhArrowSquareOut.vue.480701a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js","assets/BookOutlined.e3a46b7e.js","assets/PhChats.vue.3b491393.js","assets/NavbarControls.8216d9aa.css","assets/index.52012fc5.js","assets/index.7ce27b29.js","assets/Avatar.89d4560f.js","assets/CollapsePanel.14a2a58b.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.63992a8e.js"),["assets/App.63992a8e.js","assets/App.vue_vue_type_style_index_0_lang.c957bc13.js","assets/workspaceStore.5f592602.js","assets/vue-router.be64e328.js","assets/vue-router.960f756c.css","assets/url.cb5b0259.js","assets/colorHelpers.fafeb24a.js","assets/PlayerConfigProvider.18e68a6d.js","assets/index.08e31202.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.a53a5b71.js.map
