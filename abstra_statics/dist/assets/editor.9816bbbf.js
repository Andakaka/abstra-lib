var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.19236b74.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.758c3a00.js";import{a as ae}from"./asyncComputed.66375437.js";import"./url.ab8046a8.js";import"./colorHelpers.a7e9b985.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="d4676f2d-28d5-4ac6-9bcd-fb9e1c58a1aa",o._sentryDebugIdIdentifier="sentry-dbid-d4676f2d-28d5-4ac6-9bcd-fb9e1c58a1aa")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"2084bf396ef666dca3f356cb42d9bcc8e562525c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.6f543468.js"),["assets/Home.6f543468.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.66ab51e6.js"),["assets/Workspace.66ab51e6.js","assets/BaseLayout.97467314.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.ce0b6565.js","assets/NavbarControls.e7c1ad88.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/CloseCircleOutlined.a975f4d6.js","assets/index.a4640a9c.js","assets/index.12b8f10b.js","assets/workspaces.0470cd87.js","assets/record.5596a412.js","assets/popupNotifcation.4c887f98.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhChats.vue.7421ab91.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.5c26ee40.js","assets/Logo.74fc21ee.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.75d6779e.js","assets/PhCaretRight.vue.04257d43.js","assets/PhFlowArrow.vue.6d7d55ab.js","assets/PhKanban.vue.fac01d14.js","assets/index.42fd1052.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js","assets/asyncComputed.66375437.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.4583fe56.js"),["assets/Stages.4583fe56.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/ContentLayout.d7ca9990.js","assets/ContentLayout.ee57a545.css","assets/CrudView.dbc36b00.js","assets/router.72f0e3c2.js","assets/gateway.ddc9f239.js","assets/popupNotifcation.4c887f98.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/url.ab8046a8.js","assets/PhDotsThreeVertical.vue.75c8e31d.js","assets/index.12b8f10b.js","assets/CrudView.0d926139.css","assets/ant-design.18956191.js","assets/asyncComputed.66375437.js","assets/string.ca61b7fb.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/forms.c2fb51ec.js","assets/record.5596a412.js","assets/scripts.3b774a4d.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/colorHelpers.a7e9b985.js","assets/index.a4640a9c.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/validations.f0c0e22b.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.a80d23c9.js"),["assets/WorkflowEditor.a80d23c9.js","assets/api.485d67ae.js","assets/fetch.d22cd33a.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/metadata.f9e90557.js","assets/PhBug.vue.27175e5d.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/Workflow.7af70eb4.js","assets/PhArrowCounterClockwise.vue.0e37b440.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/uuid.beaf58fe.js","assets/index.0fb064af.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/record.5596a412.js","assets/polling.4d0d87ab.js","assets/index.b5041d6f.js","assets/Badge.57270d51.js","assets/isNumeric.75337b1e.js","assets/PhArrowDown.vue.efacfa60.js","assets/Workflow.387f2403.css","assets/asyncComputed.66375437.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.ee6c6372.js","assets/WorkflowEditor.13da6a50.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.c9a1686f.js"),["assets/WorkflowThreads.c9a1686f.js","assets/api.485d67ae.js","assets/fetch.d22cd33a.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/metadata.f9e90557.js","assets/PhBug.vue.27175e5d.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/ContentLayout.d7ca9990.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.dd04591b.js","assets/polling.4d0d87ab.js","assets/asyncComputed.66375437.js","assets/PhQuestion.vue.58a9b208.js","assets/ant-design.18956191.js","assets/index.12b8f10b.js","assets/index.c53225df.js","assets/index.85fe8394.js","assets/CollapsePanel.c5530a8f.js","assets/index.ee6c6372.js","assets/index.085ab2aa.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.0e37b440.js","assets/Workflow.7af70eb4.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/uuid.beaf58fe.js","assets/index.0fb064af.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/record.5596a412.js","assets/index.b5041d6f.js","assets/Badge.57270d51.js","assets/PhArrowDown.vue.efacfa60.js","assets/Workflow.387f2403.css","assets/Card.9d6f03f8.js","assets/TabPane.23e9f139.js","assets/LoadingOutlined.90d1de62.js","assets/DeleteOutlined.60c78564.js","assets/PhDownloadSimple.vue.bfccd533.js","assets/utils.363c17cf.js","assets/LoadingContainer.777ca1c5.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.0d9977ee.js"),["assets/PreferencesEditor.0d9977ee.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/record.5596a412.js","assets/PlayerNavbar.75f29844.js","assets/metadata.f9e90557.js","assets/PhBug.vue.27175e5d.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/PhSignOut.vue.ce0b6565.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js","assets/PlayerNavbar.b72557ee.css","assets/PlayerConfigProvider.73e28a1c.js","assets/index.0fb064af.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.696ab742.js","assets/ContentLayout.d7ca9990.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.777ca1c5.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.66375437.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.d8b4fff3.js"),["assets/RequirementsEditor.d8b4fff3.js","assets/ContentLayout.d7ca9990.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.dbc36b00.js","assets/router.72f0e3c2.js","assets/gateway.ddc9f239.js","assets/popupNotifcation.4c887f98.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/url.ab8046a8.js","assets/PhDotsThreeVertical.vue.75c8e31d.js","assets/index.12b8f10b.js","assets/CrudView.0d926139.css","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/record.5596a412.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/colorHelpers.a7e9b985.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.aa0ec2ce.js"),["assets/EnvVarsEditor.aa0ec2ce.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/record.5596a412.js","assets/ContentLayout.d7ca9990.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.57ecbba7.js","assets/gateway.ddc9f239.js","assets/popupNotifcation.4c887f98.js","assets/fetch.d22cd33a.js","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.dbc36b00.js","assets/router.72f0e3c2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhDotsThreeVertical.vue.75c8e31d.js","assets/index.12b8f10b.js","assets/CrudView.0d926139.css","assets/PhRocketLaunch.vue.fdf27845.js","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/PhPencil.vue.77f17687.js","assets/index.a4640a9c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.5d98f2cc.js"),["assets/VSCodeConnection.5d98f2cc.js","assets/ContentLayout.d7ca9990.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/polling.4d0d87ab.js","assets/index.12b8f10b.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.4b6dde2f.js"),["assets/AccessControlEditor.4b6dde2f.js","assets/ContentLayout.d7ca9990.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/ContentLayout.ee57a545.css","assets/fetch.d22cd33a.js","assets/record.5596a412.js","assets/repository.4f5f5c06.js","assets/gateway.ddc9f239.js","assets/popupNotifcation.4c887f98.js","assets/asyncComputed.66375437.js","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.0cf9c61a.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/index.ee6c6372.js","assets/metadata.f9e90557.js","assets/PhBug.vue.27175e5d.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/index.a4640a9c.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.7d54a167.js"),["assets/ProjectLogin.7d54a167.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.5c26ee40.js","assets/Logo.74fc21ee.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/Logo.03290bf7.css","assets/BaseLayout.97467314.js","assets/BaseLayout.b7a1f19a.css","assets/index.42fd1052.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js","assets/index.12b8f10b.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/asyncComputed.66375437.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.f9a6ed98.js"),["assets/FormEditor.f9a6ed98.js","assets/api.485d67ae.js","assets/fetch.d22cd33a.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/metadata.f9e90557.js","assets/PhBug.vue.27175e5d.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/PlayerNavbar.75f29844.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/PhSignOut.vue.ce0b6565.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js","assets/PlayerNavbar.b72557ee.css","assets/BaseLayout.97467314.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8a0f2e79.js","assets/uuid.beaf58fe.js","assets/scripts.3b774a4d.js","assets/record.5596a412.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/PhCopy.vue.0fd4c9c1.js","assets/PhCopySimple.vue.db2ecf70.js","assets/PhCaretRight.vue.04257d43.js","assets/Badge.57270d51.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.58a9b208.js","assets/LoadingOutlined.90d1de62.js","assets/workspaces.0470cd87.js","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/PhPencil.vue.77f17687.js","assets/toggleHighContrast.0f02da00.js","assets/toggleHighContrast.30d77c87.css","assets/index.a4640a9c.js","assets/Card.9d6f03f8.js","assets/TabPane.23e9f139.js","assets/SourceCode.c657f354.css","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.79436f11.js","assets/Login.vue_vue_type_script_setup_true_lang.b601a3dd.js","assets/Logo.74fc21ee.js","assets/Logo.03290bf7.css","assets/CircularLoading.a7d44bb2.js","assets/CircularLoading.e156a2b0.css","assets/Login.6de5ff07.css","assets/Steps.33735e97.js","assets/Steps.d681065f.css","assets/Watermark.4abcd4f9.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.102e1e46.css","assets/PlayerConfigProvider.73e28a1c.js","assets/index.0fb064af.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/PhFlowArrow.vue.6d7d55ab.js","assets/forms.c2fb51ec.js","assets/ThreadSelector.de1f8131.js","assets/index.c53225df.js","assets/index.ee6c6372.js","assets/ThreadSelector.8aa77ab2.css","assets/index.12b8f10b.js","assets/NavbarControls.e7c1ad88.js","assets/CloseCircleOutlined.a975f4d6.js","assets/popupNotifcation.4c887f98.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhChats.vue.7421ab91.js","assets/NavbarControls.8216d9aa.css","assets/index.42fd1052.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.738e627b.js"),["assets/JobEditor.738e627b.js","assets/BaseLayout.97467314.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8a0f2e79.js","assets/uuid.beaf58fe.js","assets/scripts.3b774a4d.js","assets/record.5596a412.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/PhCopy.vue.0fd4c9c1.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhCopySimple.vue.db2ecf70.js","assets/PhCaretRight.vue.04257d43.js","assets/Badge.57270d51.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.27175e5d.js","assets/PhQuestion.vue.58a9b208.js","assets/LoadingOutlined.90d1de62.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/PhPencil.vue.77f17687.js","assets/toggleHighContrast.0f02da00.js","assets/toggleHighContrast.30d77c87.css","assets/index.a4640a9c.js","assets/Card.9d6f03f8.js","assets/TabPane.23e9f139.js","assets/SourceCode.c657f354.css","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.6baeba19.js","assets/index.12b8f10b.js","assets/RunButton.vue_vue_type_script_setup_true_lang.74a7cb5a.js","assets/NavbarControls.e7c1ad88.js","assets/CloseCircleOutlined.a975f4d6.js","assets/popupNotifcation.4c887f98.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhChats.vue.7421ab91.js","assets/NavbarControls.8216d9aa.css","assets/index.42fd1052.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.52271d9b.js"),["assets/HookEditor.52271d9b.js","assets/BaseLayout.97467314.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8a0f2e79.js","assets/uuid.beaf58fe.js","assets/scripts.3b774a4d.js","assets/record.5596a412.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/PhCopy.vue.0fd4c9c1.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhCopySimple.vue.db2ecf70.js","assets/PhCaretRight.vue.04257d43.js","assets/Badge.57270d51.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.27175e5d.js","assets/PhQuestion.vue.58a9b208.js","assets/LoadingOutlined.90d1de62.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/PhPencil.vue.77f17687.js","assets/toggleHighContrast.0f02da00.js","assets/toggleHighContrast.30d77c87.css","assets/index.a4640a9c.js","assets/Card.9d6f03f8.js","assets/TabPane.23e9f139.js","assets/SourceCode.c657f354.css","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.74a7cb5a.js","assets/api.485d67ae.js","assets/fetch.d22cd33a.js","assets/metadata.f9e90557.js","assets/PhKanban.vue.fac01d14.js","assets/PhWebhooksLogo.vue.b2b2b411.js","assets/ThreadSelector.de1f8131.js","assets/index.c53225df.js","assets/index.ee6c6372.js","assets/ThreadSelector.8aa77ab2.css","assets/index.2de2aaa6.js","assets/CollapsePanel.c5530a8f.js","assets/index.12b8f10b.js","assets/NavbarControls.e7c1ad88.js","assets/CloseCircleOutlined.a975f4d6.js","assets/popupNotifcation.4c887f98.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhChats.vue.7421ab91.js","assets/NavbarControls.8216d9aa.css","assets/index.42fd1052.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.d8e2c6c0.js"),["assets/ScriptEditor.d8e2c6c0.js","assets/BaseLayout.97467314.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.8a0f2e79.js","assets/uuid.beaf58fe.js","assets/scripts.3b774a4d.js","assets/record.5596a412.js","assets/validations.f0c0e22b.js","assets/string.ca61b7fb.js","assets/PhCopy.vue.0fd4c9c1.js","assets/PhCheckCircle.vue.ae04ca5d.js","assets/PhCopySimple.vue.db2ecf70.js","assets/PhCaretRight.vue.04257d43.js","assets/Badge.57270d51.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.27175e5d.js","assets/PhQuestion.vue.58a9b208.js","assets/LoadingOutlined.90d1de62.js","assets/workspaces.0470cd87.js","assets/workspaceStore.758c3a00.js","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/asyncComputed.66375437.js","assets/polling.4d0d87ab.js","assets/PhPencil.vue.77f17687.js","assets/toggleHighContrast.0f02da00.js","assets/toggleHighContrast.30d77c87.css","assets/index.a4640a9c.js","assets/Card.9d6f03f8.js","assets/TabPane.23e9f139.js","assets/SourceCode.c657f354.css","assets/SaveButton.d56b9bf3.js","assets/UnsavedChangesHandler.a727d4e1.js","assets/ExclamationCircleOutlined.fcbc7bc5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.74a7cb5a.js","assets/ThreadSelector.de1f8131.js","assets/index.c53225df.js","assets/index.ee6c6372.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.e7c1ad88.js","assets/CloseCircleOutlined.a975f4d6.js","assets/index.12b8f10b.js","assets/popupNotifcation.4c887f98.js","assets/PhArrowSquareOut.vue.d36e98e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7ea4bd67.js","assets/BookOutlined.0e90dcf2.js","assets/PhChats.vue.7421ab91.js","assets/NavbarControls.8216d9aa.css","assets/index.42fd1052.js","assets/index.7fef0f41.js","assets/Avatar.006a748a.js","assets/CollapsePanel.c5530a8f.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.da078247.js"),["assets/App.da078247.js","assets/App.vue_vue_type_style_index_0_lang.4b12cd8b.js","assets/workspaceStore.758c3a00.js","assets/vue-router.19236b74.js","assets/vue-router.960f756c.css","assets/url.ab8046a8.js","assets/colorHelpers.a7e9b985.js","assets/PlayerConfigProvider.73e28a1c.js","assets/index.0fb064af.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.9816bbbf.js.map
