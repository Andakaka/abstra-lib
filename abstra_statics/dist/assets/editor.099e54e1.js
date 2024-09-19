var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.e82def5f.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.3752e094.js";import{a as ae}from"./asyncComputed.fac685e1.js";import"./url.00f5481c.js";import"./colorHelpers.f4ba867b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="7d82d44d-dc74-46e0-8e8d-6f278eff6529",o._sentryDebugIdIdentifier="sentry-dbid-7d82d44d-dc74-46e0-8e8d-6f278eff6529")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const y=new se,_=ae(async()=>(await y.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await y.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"e36a4d3da483d01d60f3b280ae50563dad59bf23",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),L=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:b,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.796facb6.js"),["assets/Home.796facb6.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.05a12b52.js"),["assets/Workspace.05a12b52.js","assets/BaseLayout.d37ae550.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.bcf2370b.js","assets/NavbarControls.e0ca33ad.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/CloseCircleOutlined.af13d5b7.js","assets/index.a43e8fe9.js","assets/index.0033f685.js","assets/workspaces.6e905eae.js","assets/record.1e26e845.js","assets/popupNotifcation.9131d22d.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhChats.vue.1b5929e7.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.051e4e18.js","assets/Logo.889c3349.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.a2b014ce.js","assets/PhCaretRight.vue.a3c1f7bc.js","assets/PhFlowArrow.vue.46f9e5b4.js","assets/PhKanban.vue.b3502e7f.js","assets/index.1a7036bf.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js","assets/asyncComputed.fac685e1.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.e79383e6.js"),["assets/Stages.e79383e6.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/ContentLayout.be09fd93.js","assets/ContentLayout.ee57a545.css","assets/CrudView.7d552a61.js","assets/router.ca85d4f8.js","assets/gateway.212f2763.js","assets/popupNotifcation.9131d22d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/url.00f5481c.js","assets/PhDotsThreeVertical.vue.35bac81f.js","assets/index.0033f685.js","assets/CrudView.0d926139.css","assets/ant-design.590426c2.js","assets/asyncComputed.fac685e1.js","assets/string.f511f26e.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/forms.6028b947.js","assets/record.1e26e845.js","assets/scripts.30087864.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/colorHelpers.f4ba867b.js","assets/index.a43e8fe9.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/validations.d58d9bb9.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.889f768c.js"),["assets/WorkflowEditor.889f768c.js","assets/api.8b500cd6.js","assets/fetch.dab2afb8.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/metadata.87c46623.js","assets/PhBug.vue.d57c2f11.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/Workflow.e3b3402a.js","assets/PhArrowCounterClockwise.vue.9ccefa39.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/uuid.c0abdefe.js","assets/index.58996552.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/record.1e26e845.js","assets/polling.66df9430.js","assets/index.6b1386dd.js","assets/Badge.2c1d57f2.js","assets/isNumeric.75337b1e.js","assets/PhArrowDown.vue.442e1199.js","assets/Workflow.347cf587.css","assets/asyncComputed.fac685e1.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.e261aef3.js","assets/WorkflowEditor.4bfc554a.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.cbcd6af7.js"),["assets/WorkflowThreads.cbcd6af7.js","assets/api.8b500cd6.js","assets/fetch.dab2afb8.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/metadata.87c46623.js","assets/PhBug.vue.d57c2f11.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/ContentLayout.be09fd93.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.e6d651a7.js","assets/polling.66df9430.js","assets/asyncComputed.fac685e1.js","assets/PhQuestion.vue.5fc66915.js","assets/ant-design.590426c2.js","assets/index.0033f685.js","assets/index.fb770b38.js","assets/index.006b98f8.js","assets/CollapsePanel.c67b45a4.js","assets/index.e261aef3.js","assets/index.30611990.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.9ccefa39.js","assets/Workflow.e3b3402a.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/uuid.c0abdefe.js","assets/index.58996552.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/record.1e26e845.js","assets/index.6b1386dd.js","assets/Badge.2c1d57f2.js","assets/PhArrowDown.vue.442e1199.js","assets/Workflow.347cf587.css","assets/Card.42ee0e0d.js","assets/TabPane.747c6d61.js","assets/LoadingOutlined.38d8ebc7.js","assets/DeleteOutlined.f91eaa99.js","assets/PhDownloadSimple.vue.c90c820d.js","assets/utils.3237a3ea.js","assets/LoadingContainer.f2dd0e59.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.188f2554.js"),["assets/PreferencesEditor.188f2554.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/record.1e26e845.js","assets/PlayerNavbar.fd96a2a0.js","assets/metadata.87c46623.js","assets/PhBug.vue.d57c2f11.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/PhSignOut.vue.bcf2370b.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js","assets/PlayerNavbar.b72557ee.css","assets/PlayerConfigProvider.a4144885.js","assets/index.58996552.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.35cde425.js","assets/ContentLayout.be09fd93.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.f2dd0e59.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.fac685e1.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.09a19b26.js"),["assets/RequirementsEditor.09a19b26.js","assets/ContentLayout.be09fd93.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.7d552a61.js","assets/router.ca85d4f8.js","assets/gateway.212f2763.js","assets/popupNotifcation.9131d22d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/url.00f5481c.js","assets/PhDotsThreeVertical.vue.35bac81f.js","assets/index.0033f685.js","assets/CrudView.0d926139.css","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/record.1e26e845.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/colorHelpers.f4ba867b.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.044600fa.js"),["assets/EnvVarsEditor.044600fa.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/record.1e26e845.js","assets/ContentLayout.be09fd93.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.832eb6a8.js","assets/gateway.212f2763.js","assets/popupNotifcation.9131d22d.js","assets/fetch.dab2afb8.js","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.7d552a61.js","assets/router.ca85d4f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhDotsThreeVertical.vue.35bac81f.js","assets/index.0033f685.js","assets/CrudView.0d926139.css","assets/PhRocketLaunch.vue.111e2fe4.js","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/PhPencil.vue.8bd74360.js","assets/index.a43e8fe9.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.d00e3b7d.js"),["assets/VSCodeConnection.d00e3b7d.js","assets/ContentLayout.be09fd93.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/polling.66df9430.js","assets/index.0033f685.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.fd5bf03f.js"),["assets/AccessControlEditor.fd5bf03f.js","assets/ContentLayout.be09fd93.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/fetch.dab2afb8.js","assets/record.1e26e845.js","assets/repository.e4d8748d.js","assets/gateway.212f2763.js","assets/popupNotifcation.9131d22d.js","assets/asyncComputed.fac685e1.js","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.7dd4393a.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/index.e261aef3.js","assets/metadata.87c46623.js","assets/PhBug.vue.d57c2f11.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/index.a43e8fe9.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.4d08a313.js"),["assets/ProjectLogin.4d08a313.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.051e4e18.js","assets/Logo.889c3349.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/Logo.03290bf7.css","assets/BaseLayout.d37ae550.js","assets/BaseLayout.b7a1f19a.css","assets/index.1a7036bf.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js","assets/index.0033f685.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/asyncComputed.fac685e1.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.76753762.js"),["assets/FormEditor.76753762.js","assets/api.8b500cd6.js","assets/fetch.dab2afb8.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/metadata.87c46623.js","assets/PhBug.vue.d57c2f11.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/PlayerNavbar.fd96a2a0.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/PhSignOut.vue.bcf2370b.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js","assets/PlayerNavbar.b72557ee.css","assets/BaseLayout.d37ae550.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.aa123e78.js","assets/uuid.c0abdefe.js","assets/scripts.30087864.js","assets/record.1e26e845.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/PhCopy.vue.ad7f7d14.js","assets/PhCopySimple.vue.c8577989.js","assets/PhCaretRight.vue.a3c1f7bc.js","assets/Badge.2c1d57f2.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.5fc66915.js","assets/LoadingOutlined.38d8ebc7.js","assets/workspaces.6e905eae.js","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/PhPencil.vue.8bd74360.js","assets/toggleHighContrast.a358e5dc.js","assets/toggleHighContrast.30d77c87.css","assets/index.a43e8fe9.js","assets/Card.42ee0e0d.js","assets/TabPane.747c6d61.js","assets/SourceCode.c657f354.css","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.a1cad301.js","assets/Login.vue_vue_type_script_setup_true_lang.7a8c934d.js","assets/Logo.889c3349.js","assets/Logo.03290bf7.css","assets/CircularLoading.5f88deb7.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.42580503.js","assets/index.27a06887.js","assets/Steps.4d03c6c1.css","assets/Watermark.265a4a75.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.a4144885.js","assets/index.58996552.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.203266f5.js","assets/PhFlowArrow.vue.46f9e5b4.js","assets/forms.6028b947.js","assets/ThreadSelector.7d1f1b6b.js","assets/index.fb770b38.js","assets/index.e261aef3.js","assets/ThreadSelector.8aa77ab2.css","assets/index.0033f685.js","assets/NavbarControls.e0ca33ad.js","assets/CloseCircleOutlined.af13d5b7.js","assets/popupNotifcation.9131d22d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhChats.vue.1b5929e7.js","assets/NavbarControls.8216d9aa.css","assets/index.1a7036bf.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.8e0d9028.js"),["assets/JobEditor.8e0d9028.js","assets/BaseLayout.d37ae550.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.aa123e78.js","assets/uuid.c0abdefe.js","assets/scripts.30087864.js","assets/record.1e26e845.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/PhCopy.vue.ad7f7d14.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhCopySimple.vue.c8577989.js","assets/PhCaretRight.vue.a3c1f7bc.js","assets/Badge.2c1d57f2.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d57c2f11.js","assets/PhQuestion.vue.5fc66915.js","assets/LoadingOutlined.38d8ebc7.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/PhPencil.vue.8bd74360.js","assets/toggleHighContrast.a358e5dc.js","assets/toggleHighContrast.30d77c87.css","assets/index.a43e8fe9.js","assets/Card.42ee0e0d.js","assets/TabPane.747c6d61.js","assets/SourceCode.c657f354.css","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.9390e646.js","assets/index.0033f685.js","assets/RunButton.vue_vue_type_script_setup_true_lang.4e61f0f7.js","assets/NavbarControls.e0ca33ad.js","assets/CloseCircleOutlined.af13d5b7.js","assets/popupNotifcation.9131d22d.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhChats.vue.1b5929e7.js","assets/NavbarControls.8216d9aa.css","assets/index.1a7036bf.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.95e9e552.js"),["assets/HookEditor.95e9e552.js","assets/BaseLayout.d37ae550.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.aa123e78.js","assets/uuid.c0abdefe.js","assets/scripts.30087864.js","assets/record.1e26e845.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/PhCopy.vue.ad7f7d14.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhCopySimple.vue.c8577989.js","assets/PhCaretRight.vue.a3c1f7bc.js","assets/Badge.2c1d57f2.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d57c2f11.js","assets/PhQuestion.vue.5fc66915.js","assets/LoadingOutlined.38d8ebc7.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/PhPencil.vue.8bd74360.js","assets/toggleHighContrast.a358e5dc.js","assets/toggleHighContrast.30d77c87.css","assets/index.a43e8fe9.js","assets/Card.42ee0e0d.js","assets/TabPane.747c6d61.js","assets/SourceCode.c657f354.css","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4e61f0f7.js","assets/api.8b500cd6.js","assets/fetch.dab2afb8.js","assets/metadata.87c46623.js","assets/PhKanban.vue.b3502e7f.js","assets/PhWebhooksLogo.vue.4003e945.js","assets/ThreadSelector.7d1f1b6b.js","assets/index.fb770b38.js","assets/index.e261aef3.js","assets/ThreadSelector.8aa77ab2.css","assets/index.795dfdb9.js","assets/CollapsePanel.c67b45a4.js","assets/index.0033f685.js","assets/NavbarControls.e0ca33ad.js","assets/CloseCircleOutlined.af13d5b7.js","assets/popupNotifcation.9131d22d.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhChats.vue.1b5929e7.js","assets/NavbarControls.8216d9aa.css","assets/index.1a7036bf.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.7ff07267.js"),["assets/ScriptEditor.7ff07267.js","assets/BaseLayout.d37ae550.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.aa123e78.js","assets/uuid.c0abdefe.js","assets/scripts.30087864.js","assets/record.1e26e845.js","assets/validations.d58d9bb9.js","assets/string.f511f26e.js","assets/PhCopy.vue.ad7f7d14.js","assets/PhCheckCircle.vue.6d92d69c.js","assets/PhCopySimple.vue.c8577989.js","assets/PhCaretRight.vue.a3c1f7bc.js","assets/Badge.2c1d57f2.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d57c2f11.js","assets/PhQuestion.vue.5fc66915.js","assets/LoadingOutlined.38d8ebc7.js","assets/workspaces.6e905eae.js","assets/workspaceStore.3752e094.js","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/asyncComputed.fac685e1.js","assets/polling.66df9430.js","assets/PhPencil.vue.8bd74360.js","assets/toggleHighContrast.a358e5dc.js","assets/toggleHighContrast.30d77c87.css","assets/index.a43e8fe9.js","assets/Card.42ee0e0d.js","assets/TabPane.747c6d61.js","assets/SourceCode.c657f354.css","assets/SaveButton.6ad68565.js","assets/UnsavedChangesHandler.6f7747c0.js","assets/ExclamationCircleOutlined.0c1a44eb.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4e61f0f7.js","assets/ThreadSelector.7d1f1b6b.js","assets/index.fb770b38.js","assets/index.e261aef3.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.e0ca33ad.js","assets/CloseCircleOutlined.af13d5b7.js","assets/index.0033f685.js","assets/popupNotifcation.9131d22d.js","assets/PhArrowSquareOut.vue.203266f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0f93dfac.js","assets/BookOutlined.6bc48c74.js","assets/PhChats.vue.1b5929e7.js","assets/NavbarControls.8216d9aa.css","assets/index.1a7036bf.js","assets/index.8ee3af7d.js","assets/Avatar.1591878f.js","assets/CollapsePanel.c67b45a4.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.db3cc80c.js"),["assets/App.db3cc80c.js","assets/App.vue_vue_type_style_index_0_lang.9fece532.js","assets/workspaceStore.3752e094.js","assets/vue-router.e82def5f.js","assets/vue-router.960f756c.css","assets/url.00f5481c.js","assets/colorHelpers.f4ba867b.js","assets/PlayerConfigProvider.a4144885.js","assets/index.58996552.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.099e54e1.js.map
