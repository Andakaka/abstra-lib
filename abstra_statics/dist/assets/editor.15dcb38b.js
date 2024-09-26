var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.723a7ff4.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.979a558c.js";import{a as ae}from"./asyncComputed.b5739f4e.js";import"./url.7a9ddd81.js";import"./colorHelpers.119ecc4d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="a7547ca5-db09-44f3-904c-2f948634baec",o._sentryDebugIdIdentifier="sentry-dbid-a7547ca5-db09-44f3-904c-2f948634baec")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"1808e24d5bc627fc20b6e43693760c5204b4235b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.2e783002.js"),["assets/Home.2e783002.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.988b080a.js"),["assets/Workspace.988b080a.js","assets/BaseLayout.b9b7d9f0.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.91f19ea3.js","assets/NavbarControls.da9e35f0.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/CloseCircleOutlined.31fbbbde.js","assets/index.92cc169f.js","assets/index.31fdfb21.js","assets/workspaces.ec1de8f1.js","assets/record.d525df57.js","assets/popupNotifcation.b794ba95.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhChats.vue.fa9774f5.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c42ecfe7.js","assets/Logo.c31c04ac.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.96783c3d.js","assets/PhCaretRight.vue.22d28cf6.js","assets/PhFlowArrow.vue.9604c04b.js","assets/PhKanban.vue.855407b5.js","assets/index.9e1213c7.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js","assets/asyncComputed.b5739f4e.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.f7ac9413.js"),["assets/Stages.f7ac9413.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/ContentLayout.fb962df2.js","assets/ContentLayout.ee57a545.css","assets/CrudView.57e7b0d3.js","assets/router.5aa0fd91.js","assets/gateway.6018e5d6.js","assets/popupNotifcation.b794ba95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/url.7a9ddd81.js","assets/PhDotsThreeVertical.vue.fe19e19a.js","assets/Badge.9fe13d11.js","assets/index.31fdfb21.js","assets/CrudView.2fb0614c.css","assets/ant-design.fb3d1aba.js","assets/asyncComputed.b5739f4e.js","assets/string.d306ef40.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/forms.5e40d516.js","assets/record.d525df57.js","assets/scripts.21c488aa.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/colorHelpers.119ecc4d.js","assets/index.92cc169f.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/validations.801b4baf.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.3c9a3c1b.js"),["assets/WorkflowEditor.3c9a3c1b.js","assets/api.e75a7e1e.js","assets/fetch.2f6d7caa.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/metadata.d88106f2.js","assets/PhBug.vue.6e4334fa.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/Workflow.fe0ddbe3.js","assets/PhArrowCounterClockwise.vue.d28060aa.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/uuid.fe810c1e.js","assets/index.d2f132d4.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/record.d525df57.js","assets/polling.b6bcc22f.js","assets/index.70260d90.js","assets/Badge.9fe13d11.js","assets/PhArrowDown.vue.a2d3fa05.js","assets/Workflow.c1addbc6.css","assets/asyncComputed.b5739f4e.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.81180d14.js","assets/WorkflowEditor.d0e998ad.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.1253a14a.js"),["assets/WorkflowThreads.1253a14a.js","assets/api.e75a7e1e.js","assets/fetch.2f6d7caa.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/metadata.d88106f2.js","assets/PhBug.vue.6e4334fa.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/ContentLayout.fb962df2.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.e8121d0d.js","assets/polling.b6bcc22f.js","assets/asyncComputed.b5739f4e.js","assets/PhQuestion.vue.02564144.js","assets/ant-design.fb3d1aba.js","assets/index.31fdfb21.js","assets/index.fbf6a16d.js","assets/index.f6835f94.js","assets/CollapsePanel.17315e99.js","assets/index.81180d14.js","assets/index.6f6469cd.js","assets/Badge.9fe13d11.js","assets/PhArrowCounterClockwise.vue.d28060aa.js","assets/Workflow.fe0ddbe3.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/uuid.fe810c1e.js","assets/index.d2f132d4.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/record.d525df57.js","assets/index.70260d90.js","assets/PhArrowDown.vue.a2d3fa05.js","assets/Workflow.c1addbc6.css","assets/Card.8b1ab068.js","assets/TabPane.6ca40813.js","assets/LoadingOutlined.6bfcad05.js","assets/DeleteOutlined.b04259ea.js","assets/PhDownloadSimple.vue.d0bb0fc7.js","assets/utils.9803846d.js","assets/LoadingContainer.95347b24.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.1a273c04.js"),["assets/PreferencesEditor.1a273c04.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/record.d525df57.js","assets/PlayerNavbar.9a9852c1.js","assets/metadata.d88106f2.js","assets/PhBug.vue.6e4334fa.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/LoadingOutlined.6bfcad05.js","assets/PhSignOut.vue.91f19ea3.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.8bf6ca02.js","assets/index.d2f132d4.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.da201a6f.js","assets/ContentLayout.fb962df2.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.95347b24.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.b5739f4e.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.bb059f60.js"),["assets/RequirementsEditor.bb059f60.js","assets/ContentLayout.fb962df2.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.57e7b0d3.js","assets/router.5aa0fd91.js","assets/gateway.6018e5d6.js","assets/popupNotifcation.b794ba95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/url.7a9ddd81.js","assets/PhDotsThreeVertical.vue.fe19e19a.js","assets/Badge.9fe13d11.js","assets/index.31fdfb21.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/record.d525df57.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/colorHelpers.119ecc4d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.4d5af0fe.js"),["assets/EnvVarsEditor.4d5af0fe.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/record.d525df57.js","assets/ContentLayout.fb962df2.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.d35cc879.js","assets/gateway.6018e5d6.js","assets/popupNotifcation.b794ba95.js","assets/fetch.2f6d7caa.js","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.57e7b0d3.js","assets/router.5aa0fd91.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhDotsThreeVertical.vue.fe19e19a.js","assets/Badge.9fe13d11.js","assets/index.31fdfb21.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/PhPencil.vue.b98879d6.js","assets/index.92cc169f.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.20d943bd.js"),["assets/VSCodeConnection.20d943bd.js","assets/ContentLayout.fb962df2.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/polling.b6bcc22f.js","assets/index.31fdfb21.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.d312e460.js"),["assets/AccessControlEditor.d312e460.js","assets/ContentLayout.fb962df2.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/fetch.2f6d7caa.js","assets/record.d525df57.js","assets/repository.164445c4.js","assets/gateway.6018e5d6.js","assets/popupNotifcation.b794ba95.js","assets/asyncComputed.b5739f4e.js","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.f390f8c3.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/index.81180d14.js","assets/metadata.d88106f2.js","assets/PhBug.vue.6e4334fa.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/index.92cc169f.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.46089ce4.js"),["assets/ProjectLogin.46089ce4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c42ecfe7.js","assets/Logo.c31c04ac.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/Logo.03290bf7.css","assets/BaseLayout.b9b7d9f0.js","assets/BaseLayout.b7a1f19a.css","assets/index.9e1213c7.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js","assets/index.31fdfb21.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/asyncComputed.b5739f4e.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.2836c081.js"),["assets/FormEditor.2836c081.js","assets/api.e75a7e1e.js","assets/fetch.2f6d7caa.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/metadata.d88106f2.js","assets/PhBug.vue.6e4334fa.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/PlayerNavbar.9a9852c1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/LoadingOutlined.6bfcad05.js","assets/PhSignOut.vue.91f19ea3.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.b9b7d9f0.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.02d41ced.js","assets/uuid.fe810c1e.js","assets/scripts.21c488aa.js","assets/record.d525df57.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/PhCopy.vue.20d43e18.js","assets/PhCopySimple.vue.ef048462.js","assets/PhCaretRight.vue.22d28cf6.js","assets/Badge.9fe13d11.js","assets/PhQuestion.vue.02564144.js","assets/workspaces.ec1de8f1.js","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/PhPencil.vue.b98879d6.js","assets/toggleHighContrast.3e4ed7d5.js","assets/toggleHighContrast.30d77c87.css","assets/index.92cc169f.js","assets/Card.8b1ab068.js","assets/TabPane.6ca40813.js","assets/SourceCode.c657f354.css","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.c13d6b9a.js","assets/Login.vue_vue_type_script_setup_true_lang.e0ae29f8.js","assets/Logo.c31c04ac.js","assets/Logo.03290bf7.css","assets/CircularLoading.0c1381c2.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.5f886ff3.js","assets/index.ece7eb8b.js","assets/Steps.4d03c6c1.css","assets/Watermark.59ebefe3.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.8bf6ca02.js","assets/index.d2f132d4.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.6821763c.js","assets/PhFlowArrow.vue.9604c04b.js","assets/forms.5e40d516.js","assets/ThreadSelector.e90bc74e.js","assets/index.fbf6a16d.js","assets/index.81180d14.js","assets/ThreadSelector.8aa77ab2.css","assets/index.31fdfb21.js","assets/NavbarControls.da9e35f0.js","assets/CloseCircleOutlined.31fbbbde.js","assets/popupNotifcation.b794ba95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhChats.vue.fa9774f5.js","assets/NavbarControls.8216d9aa.css","assets/index.9e1213c7.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.5d6d4120.js"),["assets/JobEditor.5d6d4120.js","assets/BaseLayout.b9b7d9f0.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.02d41ced.js","assets/uuid.fe810c1e.js","assets/scripts.21c488aa.js","assets/record.d525df57.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/PhCopy.vue.20d43e18.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhCopySimple.vue.ef048462.js","assets/PhCaretRight.vue.22d28cf6.js","assets/Badge.9fe13d11.js","assets/PhBug.vue.6e4334fa.js","assets/PhQuestion.vue.02564144.js","assets/LoadingOutlined.6bfcad05.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/PhPencil.vue.b98879d6.js","assets/toggleHighContrast.3e4ed7d5.js","assets/toggleHighContrast.30d77c87.css","assets/index.92cc169f.js","assets/Card.8b1ab068.js","assets/TabPane.6ca40813.js","assets/SourceCode.c657f354.css","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.23130c74.js","assets/index.31fdfb21.js","assets/RunButton.vue_vue_type_script_setup_true_lang.e2942192.js","assets/NavbarControls.da9e35f0.js","assets/CloseCircleOutlined.31fbbbde.js","assets/popupNotifcation.b794ba95.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhChats.vue.fa9774f5.js","assets/NavbarControls.8216d9aa.css","assets/index.9e1213c7.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.618ed3c8.js"),["assets/HookEditor.618ed3c8.js","assets/BaseLayout.b9b7d9f0.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.02d41ced.js","assets/uuid.fe810c1e.js","assets/scripts.21c488aa.js","assets/record.d525df57.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/PhCopy.vue.20d43e18.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhCopySimple.vue.ef048462.js","assets/PhCaretRight.vue.22d28cf6.js","assets/Badge.9fe13d11.js","assets/PhBug.vue.6e4334fa.js","assets/PhQuestion.vue.02564144.js","assets/LoadingOutlined.6bfcad05.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/PhPencil.vue.b98879d6.js","assets/toggleHighContrast.3e4ed7d5.js","assets/toggleHighContrast.30d77c87.css","assets/index.92cc169f.js","assets/Card.8b1ab068.js","assets/TabPane.6ca40813.js","assets/SourceCode.c657f354.css","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e2942192.js","assets/api.e75a7e1e.js","assets/fetch.2f6d7caa.js","assets/metadata.d88106f2.js","assets/PhKanban.vue.855407b5.js","assets/PhWebhooksLogo.vue.ca1c086e.js","assets/ThreadSelector.e90bc74e.js","assets/index.fbf6a16d.js","assets/index.81180d14.js","assets/ThreadSelector.8aa77ab2.css","assets/index.4aaf887a.js","assets/CollapsePanel.17315e99.js","assets/index.31fdfb21.js","assets/NavbarControls.da9e35f0.js","assets/CloseCircleOutlined.31fbbbde.js","assets/popupNotifcation.b794ba95.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhChats.vue.fa9774f5.js","assets/NavbarControls.8216d9aa.css","assets/index.9e1213c7.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.3ff3ea8d.js"),["assets/ScriptEditor.3ff3ea8d.js","assets/BaseLayout.b9b7d9f0.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.02d41ced.js","assets/uuid.fe810c1e.js","assets/scripts.21c488aa.js","assets/record.d525df57.js","assets/validations.801b4baf.js","assets/string.d306ef40.js","assets/PhCopy.vue.20d43e18.js","assets/PhCheckCircle.vue.3dd90bc1.js","assets/PhCopySimple.vue.ef048462.js","assets/PhCaretRight.vue.22d28cf6.js","assets/Badge.9fe13d11.js","assets/PhBug.vue.6e4334fa.js","assets/PhQuestion.vue.02564144.js","assets/LoadingOutlined.6bfcad05.js","assets/workspaces.ec1de8f1.js","assets/workspaceStore.979a558c.js","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/asyncComputed.b5739f4e.js","assets/polling.b6bcc22f.js","assets/PhPencil.vue.b98879d6.js","assets/toggleHighContrast.3e4ed7d5.js","assets/toggleHighContrast.30d77c87.css","assets/index.92cc169f.js","assets/Card.8b1ab068.js","assets/TabPane.6ca40813.js","assets/SourceCode.c657f354.css","assets/SaveButton.cc4b9289.js","assets/UnsavedChangesHandler.8c38cc39.js","assets/ExclamationCircleOutlined.d9fdad58.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e2942192.js","assets/ThreadSelector.e90bc74e.js","assets/index.fbf6a16d.js","assets/index.81180d14.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.da9e35f0.js","assets/CloseCircleOutlined.31fbbbde.js","assets/index.31fdfb21.js","assets/popupNotifcation.b794ba95.js","assets/PhArrowSquareOut.vue.6821763c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0b357a74.js","assets/BookOutlined.0097c7bc.js","assets/PhChats.vue.fa9774f5.js","assets/NavbarControls.8216d9aa.css","assets/index.9e1213c7.js","assets/index.0d840e97.js","assets/Avatar.5560eeef.js","assets/CollapsePanel.17315e99.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.8ff694ef.js"),["assets/App.8ff694ef.js","assets/App.vue_vue_type_style_index_0_lang.c7bd386d.js","assets/workspaceStore.979a558c.js","assets/vue-router.723a7ff4.js","assets/vue-router.960f756c.css","assets/url.7a9ddd81.js","assets/colorHelpers.119ecc4d.js","assets/PlayerConfigProvider.8bf6ca02.js","assets/index.d2f132d4.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.15dcb38b.js.map
