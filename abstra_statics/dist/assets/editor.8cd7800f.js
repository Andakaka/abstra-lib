var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.0c866027.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.91b78bac.js";import{a as ae}from"./asyncComputed.982eaa66.js";import"./url.292545d8.js";import"./colorHelpers.7c0c60f9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="c4192e4a-72cb-42a7-8e23-5cd1b1821359",o._sentryDebugIdIdentifier="sentry-dbid-c4192e4a-72cb-42a7-8e23-5cd1b1821359")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"207aa0da0b9cd5d406a7d775d7701dc371159333",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.9811dba3.js"),["assets/Home.9811dba3.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.8e36a051.js"),["assets/Workspace.8e36a051.js","assets/BaseLayout.4a936d9b.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.da64673b.js","assets/NavbarControls.f8546d82.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/CloseCircleOutlined.967d37fa.js","assets/index.b0036605.js","assets/index.10fe6907.js","assets/workspaces.c1edb670.js","assets/record.36ebc23b.js","assets/popupNotifcation.e8b26059.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhChats.vue.e221accc.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.119ad9ee.js","assets/Logo.5efc0bb6.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.fc5244ca.js","assets/PhCaretRight.vue.711129b5.js","assets/PhFlowArrow.vue.8d144cd2.js","assets/PhKanban.vue.8ab91357.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/asyncComputed.982eaa66.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.d688e4d6.js"),["assets/Stages.d688e4d6.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b7c32ec8.js","assets/router.1e2b485f.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/ant-design.dc4aa0ab.js","assets/asyncComputed.982eaa66.js","assets/string.23ad9559.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/forms.f75f305c.js","assets/record.36ebc23b.js","assets/scripts.33547c32.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/colorHelpers.7c0c60f9.js","assets/index.b0036605.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/validations.4827dde7.js","assets/Stages.d72505e1.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.c167ead9.js"),["assets/WorkflowEditor.c167ead9.js","assets/api.1b19fd20.js","assets/fetch.d454d88f.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/metadata.96edcd01.js","assets/PhBug.vue.dc47a21d.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/Workflow.1eadc1ad.js","assets/PhArrowCounterClockwise.vue.784bb2c5.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/uuid.dd68c7a9.js","assets/index.bc41eb74.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/record.36ebc23b.js","assets/polling.72ce848f.js","assets/index.83f050a0.js","assets/Badge.c5673cc6.js","assets/isNumeric.75337b1e.js","assets/Workflow.d528bc48.css","assets/asyncComputed.982eaa66.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.56474945.js","assets/WorkflowEditor.13da6a50.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.d844ad5a.js"),["assets/WorkflowThreads.d844ad5a.js","assets/api.1b19fd20.js","assets/fetch.d454d88f.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/metadata.96edcd01.js","assets/PhBug.vue.dc47a21d.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.0a3fac11.js","assets/polling.72ce848f.js","assets/asyncComputed.982eaa66.js","assets/PhQuestion.vue.3752f2ef.js","assets/ant-design.dc4aa0ab.js","assets/index.10fe6907.js","assets/index.36a2687f.js","assets/index.1fb1e694.js","assets/CollapsePanel.89234c60.js","assets/index.56474945.js","assets/index.74e4f92a.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.784bb2c5.js","assets/Workflow.1eadc1ad.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/uuid.dd68c7a9.js","assets/index.bc41eb74.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/record.36ebc23b.js","assets/index.83f050a0.js","assets/Badge.c5673cc6.js","assets/Workflow.d528bc48.css","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/LoadingOutlined.9844cd76.js","assets/DeleteOutlined.11f42d9c.js","assets/PhDownloadSimple.vue.d8b1a8ff.js","assets/utils.58543493.js","assets/LoadingContainer.9798a9eb.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.8a3e2717.js"),["assets/PreferencesEditor.8a3e2717.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/record.36ebc23b.js","assets/PlayerNavbar.4f427a05.js","assets/metadata.96edcd01.js","assets/PhBug.vue.dc47a21d.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/PhSignOut.vue.da64673b.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/PlayerNavbar.b72557ee.css","assets/PlayerConfigProvider.1264971f.js","assets/index.bc41eb74.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.80326aa6.js","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.9798a9eb.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.982eaa66.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.33863271.js"),["assets/RequirementsEditor.33863271.js","assets/ContentLayout.9680170d.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/CrudView.b7c32ec8.js","assets/router.1e2b485f.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/record.36ebc23b.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/colorHelpers.7c0c60f9.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.471a519e.js"),["assets/EnvVarsEditor.471a519e.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/record.36ebc23b.js","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.ddfecf5c.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/fetch.d454d88f.js","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.b7c32ec8.js","assets/router.1e2b485f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.6dd58fda.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/index.b0036605.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.4c8a568f.js"),["assets/VSCodeConnection.4c8a568f.js","assets/ContentLayout.9680170d.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/polling.72ce848f.js","assets/index.10fe6907.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.eacc1533.js"),["assets/AccessControlEditor.eacc1533.js","assets/ContentLayout.9680170d.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/fetch.d454d88f.js","assets/record.36ebc23b.js","assets/repository.96432bd4.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/asyncComputed.982eaa66.js","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.400abff7.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/index.56474945.js","assets/metadata.96edcd01.js","assets/PhBug.vue.dc47a21d.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/index.b0036605.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.6213d6f0.js"),["assets/ProjectLogin.6213d6f0.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.119ad9ee.js","assets/Logo.5efc0bb6.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/Logo.03290bf7.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/index.10fe6907.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/asyncComputed.982eaa66.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.f035f448.js"),["assets/FormEditor.f035f448.js","assets/api.1b19fd20.js","assets/fetch.d454d88f.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/metadata.96edcd01.js","assets/PhBug.vue.dc47a21d.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/PlayerNavbar.4f427a05.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/PhSignOut.vue.da64673b.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/PlayerNavbar.b72557ee.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.dd15aa2a.js","assets/uuid.dd68c7a9.js","assets/scripts.33547c32.js","assets/record.36ebc23b.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/PhCopy.vue.a65ebc35.js","assets/PhCopySimple.vue.265d8215.js","assets/PhCaretRight.vue.711129b5.js","assets/Badge.c5673cc6.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.3752f2ef.js","assets/LoadingOutlined.9844cd76.js","assets/workspaces.c1edb670.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/toggleHighContrast.67f28729.js","assets/toggleHighContrast.30d77c87.css","assets/index.b0036605.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/SourceCode.c657f354.css","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.25b5f276.js","assets/Login.vue_vue_type_script_setup_true_lang.d08d5309.js","assets/Logo.5efc0bb6.js","assets/Logo.03290bf7.css","assets/CircularLoading.9ccc89d1.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.1f42c016.js","assets/Steps.d681065f.css","assets/Watermark.1e01f1b5.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.102e1e46.css","assets/PlayerConfigProvider.1264971f.js","assets/index.bc41eb74.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.9de9626c.js","assets/PhFlowArrow.vue.8d144cd2.js","assets/forms.f75f305c.js","assets/ThreadSelector.0f185d4a.js","assets/index.36a2687f.js","assets/index.56474945.js","assets/ThreadSelector.8aa77ab2.css","assets/index.10fe6907.js","assets/NavbarControls.f8546d82.js","assets/CloseCircleOutlined.967d37fa.js","assets/popupNotifcation.e8b26059.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhChats.vue.e221accc.js","assets/NavbarControls.8216d9aa.css","assets/index.7b03bf61.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.316265ca.js"),["assets/JobEditor.316265ca.js","assets/BaseLayout.4a936d9b.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.dd15aa2a.js","assets/uuid.dd68c7a9.js","assets/scripts.33547c32.js","assets/record.36ebc23b.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/PhCopy.vue.a65ebc35.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhCopySimple.vue.265d8215.js","assets/PhCaretRight.vue.711129b5.js","assets/Badge.c5673cc6.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.dc47a21d.js","assets/PhQuestion.vue.3752f2ef.js","assets/LoadingOutlined.9844cd76.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/toggleHighContrast.67f28729.js","assets/toggleHighContrast.30d77c87.css","assets/index.b0036605.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/SourceCode.c657f354.css","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.086150a9.js","assets/index.10fe6907.js","assets/RunButton.vue_vue_type_script_setup_true_lang.eba7a0a4.js","assets/NavbarControls.f8546d82.js","assets/CloseCircleOutlined.967d37fa.js","assets/popupNotifcation.e8b26059.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhChats.vue.e221accc.js","assets/NavbarControls.8216d9aa.css","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.d9a41c19.js"),["assets/HookEditor.d9a41c19.js","assets/BaseLayout.4a936d9b.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.dd15aa2a.js","assets/uuid.dd68c7a9.js","assets/scripts.33547c32.js","assets/record.36ebc23b.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/PhCopy.vue.a65ebc35.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhCopySimple.vue.265d8215.js","assets/PhCaretRight.vue.711129b5.js","assets/Badge.c5673cc6.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.dc47a21d.js","assets/PhQuestion.vue.3752f2ef.js","assets/LoadingOutlined.9844cd76.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/toggleHighContrast.67f28729.js","assets/toggleHighContrast.30d77c87.css","assets/index.b0036605.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/SourceCode.c657f354.css","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.eba7a0a4.js","assets/api.1b19fd20.js","assets/fetch.d454d88f.js","assets/metadata.96edcd01.js","assets/PhKanban.vue.8ab91357.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/ThreadSelector.0f185d4a.js","assets/index.36a2687f.js","assets/index.56474945.js","assets/ThreadSelector.8aa77ab2.css","assets/index.6eb9f718.js","assets/CollapsePanel.89234c60.js","assets/index.10fe6907.js","assets/NavbarControls.f8546d82.js","assets/CloseCircleOutlined.967d37fa.js","assets/popupNotifcation.e8b26059.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhChats.vue.e221accc.js","assets/NavbarControls.8216d9aa.css","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.435ac381.js"),["assets/ScriptEditor.435ac381.js","assets/BaseLayout.4a936d9b.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.dd15aa2a.js","assets/uuid.dd68c7a9.js","assets/scripts.33547c32.js","assets/record.36ebc23b.js","assets/validations.4827dde7.js","assets/string.23ad9559.js","assets/PhCopy.vue.a65ebc35.js","assets/PhCheckCircle.vue.92143e8c.js","assets/PhCopySimple.vue.265d8215.js","assets/PhCaretRight.vue.711129b5.js","assets/Badge.c5673cc6.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.dc47a21d.js","assets/PhQuestion.vue.3752f2ef.js","assets/LoadingOutlined.9844cd76.js","assets/workspaces.c1edb670.js","assets/workspaceStore.91b78bac.js","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/toggleHighContrast.67f28729.js","assets/toggleHighContrast.30d77c87.css","assets/index.b0036605.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/SourceCode.c657f354.css","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.eba7a0a4.js","assets/ThreadSelector.0f185d4a.js","assets/index.36a2687f.js","assets/index.56474945.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.f8546d82.js","assets/CloseCircleOutlined.967d37fa.js","assets/index.10fe6907.js","assets/popupNotifcation.e8b26059.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/PhChats.vue.e221accc.js","assets/NavbarControls.8216d9aa.css","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/CollapsePanel.89234c60.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.be42d615.js"),["assets/App.be42d615.js","assets/App.vue_vue_type_style_index_0_lang.9aa7470d.js","assets/workspaceStore.91b78bac.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/url.292545d8.js","assets/colorHelpers.7c0c60f9.js","assets/PlayerConfigProvider.1264971f.js","assets/index.bc41eb74.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.8cd7800f.js.map
