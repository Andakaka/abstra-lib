var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.ff326466.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.72afcc0a.js";import{a as ae}from"./asyncComputed.c6b819ef.js";import"./url.8c39f2db.js";import"./colorHelpers.e1700088.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="dd67a1f2-07c1-45b7-b775-3de933931eb7",o._sentryDebugIdIdentifier="sentry-dbid-dd67a1f2-07c1-45b7-b775-3de933931eb7")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"49e8180d605b542521359abf8a6bf18f47736241",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.bd3f145d.js"),["assets/Home.bd3f145d.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.032de8e9.js"),["assets/Workspace.032de8e9.js","assets/BaseLayout.a40d8353.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.ec85f8c7.js","assets/NavbarControls.28ef502b.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/CloseCircleOutlined.73f8358e.js","assets/index.fdf4a446.js","assets/index.6ed30515.js","assets/workspaces.5f69e8a0.js","assets/record.ab8e1dcc.js","assets/popupNotifcation.b42f0ce9.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhChats.vue.e875b059.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1518aead.js","assets/Logo.7f6f905b.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.5a4c7662.js","assets/PhCaretRight.vue.65dd4e3e.js","assets/PhFlowArrow.vue.0199e3a5.js","assets/PhKanban.vue.0a2a3adc.js","assets/index.66de9c8c.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js","assets/asyncComputed.c6b819ef.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.83db053e.js"),["assets/Stages.83db053e.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.eff998f7.js","assets/ContentLayout.ee57a545.css","assets/CrudView.6bd96f48.js","assets/router.7831db01.js","assets/gateway.07d983cf.js","assets/popupNotifcation.b42f0ce9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/url.8c39f2db.js","assets/PhDotsThreeVertical.vue.b7d8d096.js","assets/index.6ed30515.js","assets/CrudView.0d926139.css","assets/ant-design.991d1cc6.js","assets/asyncComputed.c6b819ef.js","assets/string.e74c1948.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/forms.76688799.js","assets/record.ab8e1dcc.js","assets/scripts.14e0f22e.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/colorHelpers.e1700088.js","assets/index.fdf4a446.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/validations.d5574d47.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.2da955c8.js"),["assets/WorkflowEditor.2da955c8.js","assets/api.4ade1dfc.js","assets/fetch.1c35522f.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/metadata.c26c74f7.js","assets/PhBug.vue.df18f943.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/Workflow.d390b034.js","assets/PhArrowCounterClockwise.vue.ab5acdb5.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/uuid.8913c8f3.js","assets/index.99014f99.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/record.ab8e1dcc.js","assets/polling.8dfe9004.js","assets/index.1f29b9e0.js","assets/Badge.653a7eff.js","assets/isNumeric.75337b1e.js","assets/Workflow.d528bc48.css","assets/asyncComputed.c6b819ef.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.6ce22210.js","assets/WorkflowEditor.13da6a50.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.88a5c73e.js"),["assets/WorkflowThreads.88a5c73e.js","assets/api.4ade1dfc.js","assets/fetch.1c35522f.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/metadata.c26c74f7.js","assets/PhBug.vue.df18f943.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/ContentLayout.eff998f7.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.bf60db81.js","assets/polling.8dfe9004.js","assets/asyncComputed.c6b819ef.js","assets/PhQuestion.vue.33c1ab34.js","assets/ant-design.991d1cc6.js","assets/index.6ed30515.js","assets/index.a3498ee7.js","assets/index.8ea7b8ed.js","assets/CollapsePanel.87ad9ac9.js","assets/index.6ce22210.js","assets/index.eeec780f.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.ab5acdb5.js","assets/Workflow.d390b034.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/uuid.8913c8f3.js","assets/index.99014f99.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/record.ab8e1dcc.js","assets/index.1f29b9e0.js","assets/Badge.653a7eff.js","assets/Workflow.d528bc48.css","assets/Card.af585f04.js","assets/TabPane.37baf532.js","assets/LoadingOutlined.9fcf1c04.js","assets/DeleteOutlined.235e3f6c.js","assets/PhDownloadSimple.vue.741e91d2.js","assets/utils.c13ff29b.js","assets/LoadingContainer.a73fc6b2.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.cdd11298.js"),["assets/PreferencesEditor.cdd11298.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/record.ab8e1dcc.js","assets/PlayerNavbar.294bb682.js","assets/metadata.c26c74f7.js","assets/PhBug.vue.df18f943.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/PhSignOut.vue.ec85f8c7.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js","assets/PlayerNavbar.b72557ee.css","assets/PlayerConfigProvider.8cd3fb3e.js","assets/index.99014f99.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.6987e98c.js","assets/ContentLayout.eff998f7.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.a73fc6b2.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.c6b819ef.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.da3d0a88.js"),["assets/RequirementsEditor.da3d0a88.js","assets/ContentLayout.eff998f7.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/CrudView.6bd96f48.js","assets/router.7831db01.js","assets/gateway.07d983cf.js","assets/popupNotifcation.b42f0ce9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/url.8c39f2db.js","assets/PhDotsThreeVertical.vue.b7d8d096.js","assets/index.6ed30515.js","assets/CrudView.0d926139.css","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/record.ab8e1dcc.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/colorHelpers.e1700088.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.1ad10de6.js"),["assets/EnvVarsEditor.1ad10de6.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/record.ab8e1dcc.js","assets/ContentLayout.eff998f7.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.9a46cb18.js","assets/gateway.07d983cf.js","assets/popupNotifcation.b42f0ce9.js","assets/fetch.1c35522f.js","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.6bd96f48.js","assets/router.7831db01.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhDotsThreeVertical.vue.b7d8d096.js","assets/index.6ed30515.js","assets/CrudView.0d926139.css","assets/PhRocketLaunch.vue.35cccaa5.js","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/PhPencil.vue.cc6217e2.js","assets/index.fdf4a446.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.efc99352.js"),["assets/VSCodeConnection.efc99352.js","assets/ContentLayout.eff998f7.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/polling.8dfe9004.js","assets/index.6ed30515.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.72e87508.js"),["assets/AccessControlEditor.72e87508.js","assets/ContentLayout.eff998f7.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.ee57a545.css","assets/fetch.1c35522f.js","assets/record.ab8e1dcc.js","assets/repository.b819ee09.js","assets/gateway.07d983cf.js","assets/popupNotifcation.b42f0ce9.js","assets/asyncComputed.c6b819ef.js","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.43ad70cd.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/index.6ce22210.js","assets/metadata.c26c74f7.js","assets/PhBug.vue.df18f943.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/index.fdf4a446.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.cc3b7d8b.js"),["assets/ProjectLogin.cc3b7d8b.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1518aead.js","assets/Logo.7f6f905b.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/Logo.03290bf7.css","assets/BaseLayout.a40d8353.js","assets/BaseLayout.b7a1f19a.css","assets/index.66de9c8c.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js","assets/index.6ed30515.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/asyncComputed.c6b819ef.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.b7d73b64.js"),["assets/FormEditor.b7d73b64.js","assets/api.4ade1dfc.js","assets/fetch.1c35522f.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/metadata.c26c74f7.js","assets/PhBug.vue.df18f943.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/PlayerNavbar.294bb682.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/PhSignOut.vue.ec85f8c7.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js","assets/PlayerNavbar.b72557ee.css","assets/BaseLayout.a40d8353.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8987ae99.js","assets/uuid.8913c8f3.js","assets/scripts.14e0f22e.js","assets/record.ab8e1dcc.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/PhCopy.vue.f55cf97f.js","assets/PhCopySimple.vue.568e9aae.js","assets/PhCaretRight.vue.65dd4e3e.js","assets/Badge.653a7eff.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.33c1ab34.js","assets/LoadingOutlined.9fcf1c04.js","assets/workspaces.5f69e8a0.js","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/PhPencil.vue.cc6217e2.js","assets/toggleHighContrast.da158d09.js","assets/toggleHighContrast.30d77c87.css","assets/index.fdf4a446.js","assets/Card.af585f04.js","assets/TabPane.37baf532.js","assets/SourceCode.c657f354.css","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.27d3c32b.js","assets/Login.vue_vue_type_script_setup_true_lang.525d8508.js","assets/Logo.7f6f905b.js","assets/Logo.03290bf7.css","assets/CircularLoading.d1ec4ad2.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.da320145.js","assets/Steps.d681065f.css","assets/Watermark.e179b2ae.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.102e1e46.css","assets/PlayerConfigProvider.8cd3fb3e.js","assets/index.99014f99.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/PhFlowArrow.vue.0199e3a5.js","assets/forms.76688799.js","assets/ThreadSelector.0a3c5ec1.js","assets/index.a3498ee7.js","assets/index.6ce22210.js","assets/ThreadSelector.8aa77ab2.css","assets/index.6ed30515.js","assets/NavbarControls.28ef502b.js","assets/CloseCircleOutlined.73f8358e.js","assets/popupNotifcation.b42f0ce9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhChats.vue.e875b059.js","assets/NavbarControls.8216d9aa.css","assets/index.66de9c8c.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.f9aa2cb1.js"),["assets/JobEditor.f9aa2cb1.js","assets/BaseLayout.a40d8353.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8987ae99.js","assets/uuid.8913c8f3.js","assets/scripts.14e0f22e.js","assets/record.ab8e1dcc.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/PhCopy.vue.f55cf97f.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhCopySimple.vue.568e9aae.js","assets/PhCaretRight.vue.65dd4e3e.js","assets/Badge.653a7eff.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.df18f943.js","assets/PhQuestion.vue.33c1ab34.js","assets/LoadingOutlined.9fcf1c04.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/PhPencil.vue.cc6217e2.js","assets/toggleHighContrast.da158d09.js","assets/toggleHighContrast.30d77c87.css","assets/index.fdf4a446.js","assets/Card.af585f04.js","assets/TabPane.37baf532.js","assets/SourceCode.c657f354.css","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.ee0e3d03.js","assets/index.6ed30515.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ad5094b5.js","assets/NavbarControls.28ef502b.js","assets/CloseCircleOutlined.73f8358e.js","assets/popupNotifcation.b42f0ce9.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhChats.vue.e875b059.js","assets/NavbarControls.8216d9aa.css","assets/index.66de9c8c.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.e07befbd.js"),["assets/HookEditor.e07befbd.js","assets/BaseLayout.a40d8353.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8987ae99.js","assets/uuid.8913c8f3.js","assets/scripts.14e0f22e.js","assets/record.ab8e1dcc.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/PhCopy.vue.f55cf97f.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhCopySimple.vue.568e9aae.js","assets/PhCaretRight.vue.65dd4e3e.js","assets/Badge.653a7eff.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.df18f943.js","assets/PhQuestion.vue.33c1ab34.js","assets/LoadingOutlined.9fcf1c04.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/PhPencil.vue.cc6217e2.js","assets/toggleHighContrast.da158d09.js","assets/toggleHighContrast.30d77c87.css","assets/index.fdf4a446.js","assets/Card.af585f04.js","assets/TabPane.37baf532.js","assets/SourceCode.c657f354.css","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ad5094b5.js","assets/api.4ade1dfc.js","assets/fetch.1c35522f.js","assets/metadata.c26c74f7.js","assets/PhKanban.vue.0a2a3adc.js","assets/PhWebhooksLogo.vue.ba10eb2f.js","assets/ThreadSelector.0a3c5ec1.js","assets/index.a3498ee7.js","assets/index.6ce22210.js","assets/ThreadSelector.8aa77ab2.css","assets/index.f31ccd2b.js","assets/CollapsePanel.87ad9ac9.js","assets/index.6ed30515.js","assets/NavbarControls.28ef502b.js","assets/CloseCircleOutlined.73f8358e.js","assets/popupNotifcation.b42f0ce9.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhChats.vue.e875b059.js","assets/NavbarControls.8216d9aa.css","assets/index.66de9c8c.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.c1250fb2.js"),["assets/ScriptEditor.c1250fb2.js","assets/BaseLayout.a40d8353.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8987ae99.js","assets/uuid.8913c8f3.js","assets/scripts.14e0f22e.js","assets/record.ab8e1dcc.js","assets/validations.d5574d47.js","assets/string.e74c1948.js","assets/PhCopy.vue.f55cf97f.js","assets/PhCheckCircle.vue.3b619eb1.js","assets/PhCopySimple.vue.568e9aae.js","assets/PhCaretRight.vue.65dd4e3e.js","assets/Badge.653a7eff.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.df18f943.js","assets/PhQuestion.vue.33c1ab34.js","assets/LoadingOutlined.9fcf1c04.js","assets/workspaces.5f69e8a0.js","assets/workspaceStore.72afcc0a.js","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/asyncComputed.c6b819ef.js","assets/polling.8dfe9004.js","assets/PhPencil.vue.cc6217e2.js","assets/toggleHighContrast.da158d09.js","assets/toggleHighContrast.30d77c87.css","assets/index.fdf4a446.js","assets/Card.af585f04.js","assets/TabPane.37baf532.js","assets/SourceCode.c657f354.css","assets/SaveButton.2965f2ec.js","assets/UnsavedChangesHandler.7756ab18.js","assets/ExclamationCircleOutlined.b5e63c91.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ad5094b5.js","assets/ThreadSelector.0a3c5ec1.js","assets/index.a3498ee7.js","assets/index.6ce22210.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.28ef502b.js","assets/CloseCircleOutlined.73f8358e.js","assets/index.6ed30515.js","assets/popupNotifcation.b42f0ce9.js","assets/PhArrowSquareOut.vue.02d9c1c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js","assets/BookOutlined.865d2725.js","assets/PhChats.vue.e875b059.js","assets/NavbarControls.8216d9aa.css","assets/index.66de9c8c.js","assets/index.55400885.js","assets/Avatar.8df6b4a9.js","assets/CollapsePanel.87ad9ac9.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.cc2a5462.js"),["assets/App.cc2a5462.js","assets/App.vue_vue_type_style_index_0_lang.7e5ae8b5.js","assets/workspaceStore.72afcc0a.js","assets/vue-router.ff326466.js","assets/vue-router.6b4b78cf.css","assets/url.8c39f2db.js","assets/colorHelpers.e1700088.js","assets/PlayerConfigProvider.8cd3fb3e.js","assets/index.99014f99.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.aa1a2e1b.js.map
