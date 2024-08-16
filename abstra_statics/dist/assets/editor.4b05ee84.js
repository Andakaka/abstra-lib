var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as V,c as A,w as I,a as j,b as D,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.90d4c520.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.3b0b83a5.js";import"./linters.b6844524.js";import"./url.d9f1a928.js";import"./asyncComputed.de06baf7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4c86a05f-51fb-4b30-a22c-5cf8a121316c",t._sentryDebugIdIdentifier="sentry-dbid-4c86a05f-51fb-4b30-a22c-5cf8a121316c")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return V(),A(O(U),{theme:e,"page-header":{ghost:!1}},{default:I(()=>[j("div",te,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"3939adb7a0b86dde0df3c1110a436f178ca70881",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:y}=r.info;l.boot(i,y)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.25a54a06.js"),["assets/Home.25a54a06.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.b2ee037f.js"),["assets/Workspace.b2ee037f.js","assets/BaseLayout.47e297ee.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/PhSignOut.vue.3f13fa28.js","assets/NavbarControls.8bf68cb5.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/CloseCircleOutlined.28f642cf.js","assets/index.0e2d38f7.js","assets/index.062293b9.js","assets/workspaces.cf8726a8.js","assets/record.6d908f19.js","assets/popupNotifcation.f9c49539.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhChats.vue.e6fc4d8d.js","assets/NavbarControls.5a022bc4.css","assets/Logo.8096fd74.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.71c1528f.js","assets/PhCaretRight.vue.c9f22eb4.js","assets/PhFlowArrow.vue.88a9a98a.js","assets/PhKanban.vue.bdf8596e.js","assets/index.9b9ec797.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js","assets/Workspace.f4e56ef5.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b2b0004a.js"),["assets/Stages.b2b0004a.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.cf9a0d70.js","assets/ContentLayout.ee57a545.css","assets/CrudView.3e76a82f.js","assets/router.026cd7e0.js","assets/gateway.b7abc910.js","assets/popupNotifcation.f9c49539.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/url.d9f1a928.js","assets/PhDotsThree.vue.347239d8.js","assets/index.062293b9.js","assets/CrudView.80dd6085.css","assets/ant-design.ed1d9f9e.js","assets/asyncComputed.de06baf7.js","assets/string.3a8c4451.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/forms.a0208efa.js","assets/record.6d908f19.js","assets/jobs.e5bddd48.js","assets/linters.b6844524.js","assets/scripts.66a1d828.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/index.0e2d38f7.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/validations.bdbea1e0.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.92d37569.js"),["assets/WorkflowEditor.92d37569.js","assets/LoadingContainer.660ebb3e.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/model.11764dfe.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/record.6d908f19.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/metadata.2547ee96.js","assets/PhBug.vue.d7efdaf9.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/index.0371f444.js","assets/Badge.66130526.js","assets/isNumeric.75337b1e.js","assets/index.062293b9.js","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/api.0660efa4.js","assets/fetch.48809aae.js","assets/uuid.8d2426be.js","assets/model.4debe324.css","assets/asyncComputed.de06baf7.js","assets/index.785f3d20.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.ec62e84b.js"),["assets/WorkflowThreads.ec62e84b.js","assets/ContentLayout.cf9a0d70.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.f561e89f.js","assets/fetch.48809aae.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/scripts.66a1d828.js","assets/record.6d908f19.js","assets/api.0660efa4.js","assets/metadata.2547ee96.js","assets/PhBug.vue.d7efdaf9.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/PhQuestion.vue.76f06de4.js","assets/ant-design.ed1d9f9e.js","assets/index.062293b9.js","assets/index.b330ecee.js","assets/index.648e4c64.js","assets/CollapsePanel.5c876523.js","assets/index.785f3d20.js","assets/index.36194ed0.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.b5ac9d42.js","assets/model.11764dfe.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/index.0371f444.js","assets/Badge.66130526.js","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/uuid.8d2426be.js","assets/model.4debe324.css","assets/LoadingOutlined.a63c3f0d.js","assets/DeleteOutlined.b0f38e54.js","assets/PhDownloadSimple.vue.787c3cdc.js","assets/utils.72ba8b58.js","assets/LoadingContainer.660ebb3e.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.c75aa74f.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.b8579529.js"),["assets/PreferencesEditor.b8579529.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/record.6d908f19.js","assets/PlayerNavbar.53269229.js","assets/metadata.2547ee96.js","assets/PhBug.vue.d7efdaf9.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/PhSignOut.vue.3f13fa28.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js","assets/PlayerNavbar.3eae3a31.css","assets/WidgetsFrame.adaed575.js","assets/WidgetsFrame.e0c6be76.css","assets/ContentLayout.cf9a0d70.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.660ebb3e.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.48581b71.js"),["assets/RequirementsEditor.48581b71.js","assets/ContentLayout.cf9a0d70.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/CrudView.3e76a82f.js","assets/router.026cd7e0.js","assets/gateway.b7abc910.js","assets/popupNotifcation.f9c49539.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/url.d9f1a928.js","assets/PhDotsThree.vue.347239d8.js","assets/index.062293b9.js","assets/CrudView.80dd6085.css","assets/asyncComputed.de06baf7.js","assets/linters.b6844524.js","assets/record.6d908f19.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.758e0ec1.js"),["assets/EnvVarsEditor.758e0ec1.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/record.6d908f19.js","assets/ContentLayout.cf9a0d70.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.2c892ff1.js","assets/gateway.b7abc910.js","assets/popupNotifcation.f9c49539.js","assets/fetch.48809aae.js","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/CrudView.3e76a82f.js","assets/router.026cd7e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhDotsThree.vue.347239d8.js","assets/index.062293b9.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.aefe0301.js","assets/PhPencil.vue.cf43c8b8.js","assets/index.0e2d38f7.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.088157f7.js"),["assets/VSCodeConnection.088157f7.js","assets/ContentLayout.cf9a0d70.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/index.062293b9.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.6357a523.js"),["assets/AccessControlEditor.6357a523.js","assets/ContentLayout.cf9a0d70.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/fetch.48809aae.js","assets/record.6d908f19.js","assets/repository.9468c980.js","assets/gateway.b7abc910.js","assets/popupNotifcation.f9c49539.js","assets/asyncComputed.de06baf7.js","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.90f2e82f.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/index.785f3d20.js","assets/metadata.2547ee96.js","assets/PhBug.vue.d7efdaf9.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/index.0e2d38f7.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/linters.b6844524.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.11e0e724.js"),["assets/ProjectLogin.11e0e724.js","assets/BaseLayout.47e297ee.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/Logo.8096fd74.js","assets/Logo.21e86751.css","assets/index.9b9ec797.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js","assets/index.062293b9.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.7c8c3088.js"),["assets/FormEditor.7c8c3088.js","assets/PlayerNavbar.53269229.js","assets/workspaceStore.3b0b83a5.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/url.d9f1a928.js","assets/metadata.2547ee96.js","assets/PhBug.vue.d7efdaf9.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/PhSignOut.vue.3f13fa28.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js","assets/PlayerNavbar.3eae3a31.css","assets/BaseLayout.47e297ee.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.40229942.js","assets/uuid.8d2426be.js","assets/jobs.e5bddd48.js","assets/record.6d908f19.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/scripts.66a1d828.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhCopy.vue.b51f6604.js","assets/PhCopySimple.vue.72ac3778.js","assets/PhCaretRight.vue.c9f22eb4.js","assets/Badge.66130526.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.76f06de4.js","assets/LoadingOutlined.a63c3f0d.js","assets/workspaces.cf8726a8.js","assets/PhPencil.vue.cf43c8b8.js","assets/toggleHighContrast.5a6df5e1.js","assets/toggleHighContrast.30d77c87.css","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/SourceCode.65c11816.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/FormRunner.f2f10bbd.js","assets/Login.vue_vue_type_script_setup_true_lang.06c2d6a2.js","assets/CircularLoading.1204fc32.js","assets/CircularLoading.e156a2b0.css","assets/Login.4b756628.css","assets/WidgetsFrame.adaed575.js","assets/WidgetsFrame.e0c6be76.css","assets/Steps.69ff7d56.js","assets/Steps.4a8d55e8.css","assets/Watermark.0cf73358.js","assets/Watermark.77541699.css","assets/FormRunner.4f9601e1.css","assets/api.0660efa4.js","assets/fetch.48809aae.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/PhFlowArrow.vue.88a9a98a.js","assets/forms.a0208efa.js","assets/ThreadSelector.3d905d54.js","assets/index.b330ecee.js","assets/index.785f3d20.js","assets/ThreadSelector.8aa77ab2.css","assets/index.062293b9.js","assets/NavbarControls.8bf68cb5.js","assets/CloseCircleOutlined.28f642cf.js","assets/popupNotifcation.f9c49539.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhChats.vue.e6fc4d8d.js","assets/NavbarControls.5a022bc4.css","assets/index.9b9ec797.js","assets/FormEditor.83f358af.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.ecd62d7a.js"),["assets/JobEditor.ecd62d7a.js","assets/BaseLayout.47e297ee.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.40229942.js","assets/uuid.8d2426be.js","assets/jobs.e5bddd48.js","assets/record.6d908f19.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/scripts.66a1d828.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhCopy.vue.b51f6604.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhCopySimple.vue.72ac3778.js","assets/PhCaretRight.vue.c9f22eb4.js","assets/Badge.66130526.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d7efdaf9.js","assets/PhQuestion.vue.76f06de4.js","assets/LoadingOutlined.a63c3f0d.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/PhPencil.vue.cf43c8b8.js","assets/toggleHighContrast.5a6df5e1.js","assets/toggleHighContrast.30d77c87.css","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/SourceCode.65c11816.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/index.9139f1f1.js","assets/index.062293b9.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0f252076.js","assets/NavbarControls.8bf68cb5.js","assets/CloseCircleOutlined.28f642cf.js","assets/popupNotifcation.f9c49539.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhChats.vue.e6fc4d8d.js","assets/NavbarControls.5a022bc4.css","assets/index.9b9ec797.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.4bb63d65.js"),["assets/HookEditor.4bb63d65.js","assets/BaseLayout.47e297ee.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.40229942.js","assets/uuid.8d2426be.js","assets/jobs.e5bddd48.js","assets/record.6d908f19.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/scripts.66a1d828.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhCopy.vue.b51f6604.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhCopySimple.vue.72ac3778.js","assets/PhCaretRight.vue.c9f22eb4.js","assets/Badge.66130526.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d7efdaf9.js","assets/PhQuestion.vue.76f06de4.js","assets/LoadingOutlined.a63c3f0d.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/PhPencil.vue.cf43c8b8.js","assets/toggleHighContrast.5a6df5e1.js","assets/toggleHighContrast.30d77c87.css","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/SourceCode.65c11816.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0f252076.js","assets/api.0660efa4.js","assets/fetch.48809aae.js","assets/metadata.2547ee96.js","assets/PhKanban.vue.bdf8596e.js","assets/PhWebhooksLogo.vue.5dac9d02.js","assets/ThreadSelector.3d905d54.js","assets/index.b330ecee.js","assets/index.785f3d20.js","assets/ThreadSelector.8aa77ab2.css","assets/index.b67b2a79.js","assets/CollapsePanel.5c876523.js","assets/index.062293b9.js","assets/NavbarControls.8bf68cb5.js","assets/CloseCircleOutlined.28f642cf.js","assets/popupNotifcation.f9c49539.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhChats.vue.e6fc4d8d.js","assets/NavbarControls.5a022bc4.css","assets/index.9b9ec797.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.e5d726e3.js"),["assets/ScriptEditor.e5d726e3.js","assets/BaseLayout.47e297ee.js","assets/vue-router.90d4c520.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.40229942.js","assets/uuid.8d2426be.js","assets/jobs.e5bddd48.js","assets/record.6d908f19.js","assets/linters.b6844524.js","assets/asyncComputed.de06baf7.js","assets/scripts.66a1d828.js","assets/validations.bdbea1e0.js","assets/string.3a8c4451.js","assets/PhCopy.vue.b51f6604.js","assets/PhCheckCircle.vue.1350e67b.js","assets/PhCopySimple.vue.72ac3778.js","assets/PhCaretRight.vue.c9f22eb4.js","assets/Badge.66130526.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.d7efdaf9.js","assets/PhQuestion.vue.76f06de4.js","assets/LoadingOutlined.a63c3f0d.js","assets/workspaces.cf8726a8.js","assets/workspaceStore.3b0b83a5.js","assets/url.d9f1a928.js","assets/PhPencil.vue.cf43c8b8.js","assets/toggleHighContrast.5a6df5e1.js","assets/toggleHighContrast.30d77c87.css","assets/index.0e2d38f7.js","assets/Card.3ba1277b.js","assets/TabPane.d47c34e6.js","assets/SourceCode.65c11816.css","assets/SaveButton.e6cac2fa.js","assets/ExclamationCircleOutlined.9045872f.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0f252076.js","assets/ThreadSelector.3d905d54.js","assets/index.b330ecee.js","assets/index.785f3d20.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.8bf68cb5.js","assets/CloseCircleOutlined.28f642cf.js","assets/index.062293b9.js","assets/popupNotifcation.f9c49539.js","assets/PhArrowSquareOut.vue.56567f0c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js","assets/BookOutlined.5675c001.js","assets/PhChats.vue.e6fc4d8d.js","assets/NavbarControls.5a022bc4.css","assets/index.9b9ec797.js","assets/index.b9a24b04.js","assets/Avatar.487b8393.js","assets/CollapsePanel.5c876523.js"]),meta:{title:"Script Editor"}}]},...se],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=W({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.4b05ee84.js.map
