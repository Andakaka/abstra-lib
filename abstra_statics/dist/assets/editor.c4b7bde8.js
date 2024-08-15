var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as V,c as A,w as I,a as j,b as D,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as r,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.018a176e.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.193e0ab4.js";import"./linters.0e74203c.js";import"./url.2004faf0.js";import"./asyncComputed.78aca1f6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fff1b997-6bd9-425a-9d9f-9849fb4199c3",t._sentryDebugIdIdentifier="sentry-dbid-fff1b997-6bd9-425a-9d9f-9849fb4199c3")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return V(),A(O(U),{theme:e,"page-header":{ghost:!1}},{default:I(()=>[j("div",te,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let d=n;m(d,"booted",!1);const re={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"12edec05b9bd61328501ef3d76dbe9f93d589449",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||re[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var a,i;return(i=(a=e.value)==null?void 0:a.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async a=>{const i=await t.createLogin(a);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async a=>{if(a&&"info"in a){const{email:i,intercomHash:y}=a.info;d.boot(i,y)}else d.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),l=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>r(()=>import("./Home.367ec19a.js"),["assets/Home.367ec19a.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>r(()=>import("./Workspace.4c3273c7.js"),["assets/Workspace.4c3273c7.js","assets/BaseLayout.79f6f9c4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.0156e9e1.css","assets/PhSignOut.vue.169b4bb5.js","assets/NavbarControls.6befa261.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/CloseCircleOutlined.3deae93a.js","assets/index.ddd99e7c.js","assets/index.8f109c48.js","assets/workspaces.d7e678f1.js","assets/record.35c2ce07.js","assets/popupNotifcation.893d977f.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhChats.vue.c71d73e4.js","assets/NavbarControls.5a022bc4.css","assets/Logo.155c3106.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.a4a08b27.js","assets/PhCaretRight.vue.47bd5e2a.js","assets/PhFlowArrow.vue.0682c779.js","assets/PhKanban.vue.ef02fc5f.js","assets/index.f9a552b4.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js","assets/Workspace.f4e56ef5.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>r(()=>import("./Stages.c976ea9f.js"),["assets/Stages.c976ea9f.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.4d1667aa.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b732f4af.js","assets/router.8f9e6a1a.js","assets/gateway.a2429270.js","assets/popupNotifcation.893d977f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/url.2004faf0.js","assets/PhDotsThree.vue.798bbe8f.js","assets/index.8f109c48.js","assets/CrudView.80dd6085.css","assets/ant-design.95acc834.js","assets/asyncComputed.78aca1f6.js","assets/string.679c26ad.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/forms.4792e8cd.js","assets/record.35c2ce07.js","assets/jobs.e77cac2a.js","assets/linters.0e74203c.js","assets/scripts.b52db220.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/index.ddd99e7c.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/validations.49d6c95e.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>r(()=>import("./WorkflowEditor.dd95283e.js"),["assets/WorkflowEditor.dd95283e.js","assets/LoadingContainer.068b6c3d.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/model.71348df3.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/record.35c2ce07.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/metadata.bedb6a33.js","assets/PhBug.vue.78dd6a41.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/index.83bc530d.js","assets/Badge.7d8fcacf.js","assets/isNumeric.75337b1e.js","assets/index.8f109c48.js","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/api.97edf344.js","assets/fetch.dc3ab7e4.js","assets/uuid.2529782e.js","assets/model.4debe324.css","assets/asyncComputed.78aca1f6.js","assets/index.49ec9ff2.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>r(()=>import("./WorkflowThreads.bbe42e77.js"),["assets/WorkflowThreads.bbe42e77.js","assets/ContentLayout.4d1667aa.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.22c6ec68.js","assets/fetch.dc3ab7e4.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/scripts.b52db220.js","assets/record.35c2ce07.js","assets/api.97edf344.js","assets/metadata.bedb6a33.js","assets/PhBug.vue.78dd6a41.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/PhQuestion.vue.b2523c78.js","assets/ant-design.95acc834.js","assets/index.8f109c48.js","assets/index.e2d149b3.js","assets/index.a8fcabf7.js","assets/CollapsePanel.319b9c34.js","assets/index.49ec9ff2.js","assets/index.01546f55.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.cdd47f02.js","assets/model.71348df3.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/index.83bc530d.js","assets/Badge.7d8fcacf.js","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/uuid.2529782e.js","assets/model.4debe324.css","assets/LoadingOutlined.1a0b5fcb.js","assets/DeleteOutlined.cbdd788a.js","assets/PhDownloadSimple.vue.1a4c5d93.js","assets/utils.ac2865f7.js","assets/LoadingContainer.068b6c3d.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.c75aa74f.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>r(()=>import("./PreferencesEditor.94c576f8.js"),["assets/PreferencesEditor.94c576f8.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/record.35c2ce07.js","assets/PlayerNavbar.335286c4.js","assets/metadata.bedb6a33.js","assets/PhBug.vue.78dd6a41.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/PhSignOut.vue.169b4bb5.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js","assets/PlayerNavbar.3eae3a31.css","assets/WidgetsFrame.da4f3fb4.js","assets/WidgetsFrame.e0c6be76.css","assets/ContentLayout.4d1667aa.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.068b6c3d.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>r(()=>import("./RequirementsEditor.004c6db6.js"),["assets/RequirementsEditor.004c6db6.js","assets/ContentLayout.4d1667aa.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.ee57a545.css","assets/CrudView.b732f4af.js","assets/router.8f9e6a1a.js","assets/gateway.a2429270.js","assets/popupNotifcation.893d977f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/url.2004faf0.js","assets/PhDotsThree.vue.798bbe8f.js","assets/index.8f109c48.js","assets/CrudView.80dd6085.css","assets/asyncComputed.78aca1f6.js","assets/linters.0e74203c.js","assets/record.35c2ce07.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>r(()=>import("./EnvVarsEditor.19abc7db.js"),["assets/EnvVarsEditor.19abc7db.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/record.35c2ce07.js","assets/ContentLayout.4d1667aa.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.4a77979c.js","assets/gateway.a2429270.js","assets/popupNotifcation.893d977f.js","assets/fetch.dc3ab7e4.js","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/CrudView.b732f4af.js","assets/router.8f9e6a1a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhDotsThree.vue.798bbe8f.js","assets/index.8f109c48.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.5cda3c21.js","assets/PhPencil.vue.19ca3261.js","assets/index.ddd99e7c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>r(()=>import("./VSCodeConnection.cfb4c374.js"),["assets/VSCodeConnection.cfb4c374.js","assets/ContentLayout.4d1667aa.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.ee57a545.css","assets/index.8f109c48.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>r(()=>import("./AccessControlEditor.0a54ed52.js"),["assets/AccessControlEditor.0a54ed52.js","assets/ContentLayout.4d1667aa.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.ee57a545.css","assets/fetch.dc3ab7e4.js","assets/record.35c2ce07.js","assets/repository.ecd9e63c.js","assets/gateway.a2429270.js","assets/popupNotifcation.893d977f.js","assets/asyncComputed.78aca1f6.js","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.161a9c4a.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/index.49ec9ff2.js","assets/metadata.bedb6a33.js","assets/PhBug.vue.78dd6a41.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/index.ddd99e7c.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/linters.0e74203c.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>r(()=>import("./ProjectLogin.f865a1e1.js"),["assets/ProjectLogin.f865a1e1.js","assets/BaseLayout.79f6f9c4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.0156e9e1.css","assets/Logo.155c3106.js","assets/Logo.21e86751.css","assets/index.f9a552b4.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js","assets/index.8f109c48.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>r(()=>import("./FormEditor.b753b510.js"),["assets/FormEditor.b753b510.js","assets/PlayerNavbar.335286c4.js","assets/workspaceStore.193e0ab4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/url.2004faf0.js","assets/metadata.bedb6a33.js","assets/PhBug.vue.78dd6a41.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/PhSignOut.vue.169b4bb5.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js","assets/PlayerNavbar.3eae3a31.css","assets/BaseLayout.79f6f9c4.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.ee4d71d8.js","assets/uuid.2529782e.js","assets/jobs.e77cac2a.js","assets/record.35c2ce07.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/scripts.b52db220.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhCopy.vue.d06ba580.js","assets/PhCopySimple.vue.df17e749.js","assets/PhCaretRight.vue.47bd5e2a.js","assets/Badge.7d8fcacf.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.b2523c78.js","assets/LoadingOutlined.1a0b5fcb.js","assets/workspaces.d7e678f1.js","assets/PhPencil.vue.19ca3261.js","assets/toggleHighContrast.ef90362a.js","assets/toggleHighContrast.30d77c87.css","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/SourceCode.65c11816.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/FormRunner.c3eaa70b.js","assets/Login.vue_vue_type_script_setup_true_lang.337b69fc.js","assets/CircularLoading.0ff5b879.js","assets/CircularLoading.e156a2b0.css","assets/Login.4b756628.css","assets/WidgetsFrame.da4f3fb4.js","assets/WidgetsFrame.e0c6be76.css","assets/Steps.437d5c1f.js","assets/Steps.4a8d55e8.css","assets/Watermark.3570eb6f.js","assets/Watermark.77541699.css","assets/FormRunner.4f9601e1.css","assets/api.97edf344.js","assets/fetch.dc3ab7e4.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/PhFlowArrow.vue.0682c779.js","assets/forms.4792e8cd.js","assets/ThreadSelector.1dfe36d2.js","assets/index.e2d149b3.js","assets/index.49ec9ff2.js","assets/ThreadSelector.8aa77ab2.css","assets/index.8f109c48.js","assets/NavbarControls.6befa261.js","assets/CloseCircleOutlined.3deae93a.js","assets/popupNotifcation.893d977f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhChats.vue.c71d73e4.js","assets/NavbarControls.5a022bc4.css","assets/index.f9a552b4.js","assets/FormEditor.83f358af.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>r(()=>import("./JobEditor.bb8832bd.js"),["assets/JobEditor.bb8832bd.js","assets/BaseLayout.79f6f9c4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.ee4d71d8.js","assets/uuid.2529782e.js","assets/jobs.e77cac2a.js","assets/record.35c2ce07.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/scripts.b52db220.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhCopy.vue.d06ba580.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhCopySimple.vue.df17e749.js","assets/PhCaretRight.vue.47bd5e2a.js","assets/Badge.7d8fcacf.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.78dd6a41.js","assets/PhQuestion.vue.b2523c78.js","assets/LoadingOutlined.1a0b5fcb.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/PhPencil.vue.19ca3261.js","assets/toggleHighContrast.ef90362a.js","assets/toggleHighContrast.30d77c87.css","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/SourceCode.65c11816.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/index.2a5d3fa4.js","assets/index.8f109c48.js","assets/RunButton.vue_vue_type_script_setup_true_lang.a62c1b90.js","assets/NavbarControls.6befa261.js","assets/CloseCircleOutlined.3deae93a.js","assets/popupNotifcation.893d977f.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhChats.vue.c71d73e4.js","assets/NavbarControls.5a022bc4.css","assets/index.f9a552b4.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>r(()=>import("./HookEditor.4d2febf5.js"),["assets/HookEditor.4d2febf5.js","assets/BaseLayout.79f6f9c4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.ee4d71d8.js","assets/uuid.2529782e.js","assets/jobs.e77cac2a.js","assets/record.35c2ce07.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/scripts.b52db220.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhCopy.vue.d06ba580.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhCopySimple.vue.df17e749.js","assets/PhCaretRight.vue.47bd5e2a.js","assets/Badge.7d8fcacf.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.78dd6a41.js","assets/PhQuestion.vue.b2523c78.js","assets/LoadingOutlined.1a0b5fcb.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/PhPencil.vue.19ca3261.js","assets/toggleHighContrast.ef90362a.js","assets/toggleHighContrast.30d77c87.css","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/SourceCode.65c11816.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a62c1b90.js","assets/api.97edf344.js","assets/fetch.dc3ab7e4.js","assets/metadata.bedb6a33.js","assets/PhKanban.vue.ef02fc5f.js","assets/PhWebhooksLogo.vue.c279985f.js","assets/ThreadSelector.1dfe36d2.js","assets/index.e2d149b3.js","assets/index.49ec9ff2.js","assets/ThreadSelector.8aa77ab2.css","assets/index.f20de9bd.js","assets/CollapsePanel.319b9c34.js","assets/index.8f109c48.js","assets/NavbarControls.6befa261.js","assets/CloseCircleOutlined.3deae93a.js","assets/popupNotifcation.893d977f.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhChats.vue.c71d73e4.js","assets/NavbarControls.5a022bc4.css","assets/index.f9a552b4.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>r(()=>import("./ScriptEditor.34067168.js"),["assets/ScriptEditor.34067168.js","assets/BaseLayout.79f6f9c4.js","assets/vue-router.018a176e.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.ee4d71d8.js","assets/uuid.2529782e.js","assets/jobs.e77cac2a.js","assets/record.35c2ce07.js","assets/linters.0e74203c.js","assets/asyncComputed.78aca1f6.js","assets/scripts.b52db220.js","assets/validations.49d6c95e.js","assets/string.679c26ad.js","assets/PhCopy.vue.d06ba580.js","assets/PhCheckCircle.vue.49b89582.js","assets/PhCopySimple.vue.df17e749.js","assets/PhCaretRight.vue.47bd5e2a.js","assets/Badge.7d8fcacf.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.78dd6a41.js","assets/PhQuestion.vue.b2523c78.js","assets/LoadingOutlined.1a0b5fcb.js","assets/workspaces.d7e678f1.js","assets/workspaceStore.193e0ab4.js","assets/url.2004faf0.js","assets/PhPencil.vue.19ca3261.js","assets/toggleHighContrast.ef90362a.js","assets/toggleHighContrast.30d77c87.css","assets/index.ddd99e7c.js","assets/Card.de385b48.js","assets/TabPane.002a4934.js","assets/SourceCode.65c11816.css","assets/SaveButton.c2bde375.js","assets/ExclamationCircleOutlined.51bcc826.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a62c1b90.js","assets/ThreadSelector.1dfe36d2.js","assets/index.e2d149b3.js","assets/index.49ec9ff2.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.6befa261.js","assets/CloseCircleOutlined.3deae93a.js","assets/index.8f109c48.js","assets/popupNotifcation.893d977f.js","assets/PhArrowSquareOut.vue.4798c83f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bb996264.js","assets/BookOutlined.87b0cec0.js","assets/PhChats.vue.c71d73e4.js","assets/NavbarControls.5a022bc4.css","assets/index.f9a552b4.js","assets/index.fc2ab7af.js","assets/Avatar.20618829.js","assets/CollapsePanel.319b9c34.js"]),meta:{title:"Script Editor"}}]},...se],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(l);l.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=W({render:()=>F(oe)});x.init(),B(e,l),e.use(l),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.c4b7bde8.js.map
