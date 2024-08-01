var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as V,o as A,c as I,w as k,a as j,b as D,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.d83b1131.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.74661755.js";import"./linters.03a5c2ad.js";import"./asyncComputed.16431637.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="dfc96347-9f4f-49c9-9088-5b250a545d0b",t._sentryDebugIdIdentifier="sentry-dbid-dfc96347-9f4f-49c9-9088-5b250a545d0b")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=V("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:k(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const r=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>r.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let d=r;m(d,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"b8a4faa5ab7aff8f6f40cb1f175c273dc7ddd6ce",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var n,i;return(i=(n=e.value)==null?void 0:n.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async n=>{const i=await t.createLogin(n);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async n=>{if(n&&"info"in n){const{email:i,intercomHash:y}=n.info;d.boot(i,y)}else d.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),re=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),l=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.ab2cb1d8.js"),["assets/Home.ab2cb1d8.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.a04adfeb.js"),["assets/Workspace.a04adfeb.js","assets/BaseLayout.aa773e11.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.cdaf77ad.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/router.74661755.js","assets/CloseCircleOutlined.b4e7a4a8.js","assets/index.f9df9f28.js","assets/index.ac2310f2.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/record.6f93d08b.js","assets/popupNotifcation.82518158.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhChats.vue.bb03fd98.js","assets/NavbarControls.5a022bc4.css","assets/Logo.7eae28e3.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.bcb6e57a.js","assets/PhCaretRight.vue.8d3eccc9.js","assets/PhFlowArrow.vue.e252274e.js","assets/PhKanban.vue.79f0861f.js","assets/index.17e78c92.js","assets/index.e8088995.js","assets/Workspace.17ab5181.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.87708317.js"),["assets/Stages.87708317.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/ContentLayout.8f2e5bf9.js","assets/ContentLayout.ee57a545.css","assets/CrudView.0f68a176.js","assets/router.8d4a84df.js","assets/gateway.1db18831.js","assets/popupNotifcation.82518158.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/url.f04a312a.js","assets/PhDotsThree.vue.1b83ec2e.js","assets/index.ef661147.js","assets/index.ac2310f2.js","assets/CrudView.80dd6085.css","assets/ant-design.f6377d52.js","assets/asyncComputed.16431637.js","assets/string.17c36a27.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/forms.02398acb.js","assets/record.6f93d08b.js","assets/ai.6d0bf8a2.js","assets/linters.03a5c2ad.js","assets/scripts.95f47ff2.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/index.f9df9f28.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/validations.03112dd2.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.f72ba1e6.js"),["assets/WorkflowEditor.f72ba1e6.js","assets/LoadingContainer.3cd0319d.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/model.dca1ae8f.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/record.6f93d08b.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/metadata.cd5677bc.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/index.80fb046f.js","assets/Badge.bc4f0ead.js","assets/isNumeric.75337b1e.js","assets/index.ac2310f2.js","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/api.a151da14.js","assets/fetch.75fe2bdc.js","assets/uuid.0191d98d.js","assets/model.e8120bce.css","assets/asyncComputed.16431637.js","assets/index.a10ffbb0.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.ba1db5f3.js"),["assets/WorkflowThreads.ba1db5f3.js","assets/ContentLayout.8f2e5bf9.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.096a0e0b.js","assets/fetch.75fe2bdc.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/scripts.95f47ff2.js","assets/record.6f93d08b.js","assets/api.a151da14.js","assets/metadata.cd5677bc.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/ant-design.f6377d52.js","assets/index.ac2310f2.js","assets/index.ef661147.js","assets/index.3dbd51dd.js","assets/index.eee69d57.js","assets/CollapsePanel.6f91bfe0.js","assets/index.a10ffbb0.js","assets/index.b3af6ffa.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.fec2924e.js","assets/model.dca1ae8f.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/index.80fb046f.js","assets/Badge.bc4f0ead.js","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/uuid.0191d98d.js","assets/model.e8120bce.css","assets/LoadingOutlined.7a5b9f70.js","assets/DeleteOutlined.2b296f1f.js","assets/PhDownloadSimple.vue.37aa1c2b.js","assets/utils.01dbc74a.js","assets/WorkflowView.ae12211e.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.a8e1a62e.js"),["assets/PreferencesEditor.a8e1a62e.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/record.6f93d08b.js","assets/PlayerNavbar.35dea9a8.js","assets/router.74661755.js","assets/metadata.cd5677bc.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/PhSignOut.vue.49445310.js","assets/workspaceStore.add80352.js","assets/api.130e16e4.js","assets/index.e8088995.js","assets/PlayerNavbar.05528f8e.css","assets/WidgetsFrame.a3238a8c.js","assets/WidgetsFrame.295ac367.css","assets/ContentLayout.8f2e5bf9.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.3cd0319d.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.7ef22b05.js"),["assets/RequirementsEditor.7ef22b05.js","assets/ContentLayout.8f2e5bf9.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/ContentLayout.ee57a545.css","assets/CrudView.0f68a176.js","assets/router.8d4a84df.js","assets/gateway.1db18831.js","assets/popupNotifcation.82518158.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/url.f04a312a.js","assets/PhDotsThree.vue.1b83ec2e.js","assets/index.ef661147.js","assets/index.ac2310f2.js","assets/CrudView.80dd6085.css","assets/asyncComputed.16431637.js","assets/linters.03a5c2ad.js","assets/record.6f93d08b.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c1fff031.js"),["assets/EnvVarsEditor.c1fff031.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/record.6f93d08b.js","assets/ContentLayout.8f2e5bf9.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.f9c45eeb.js","assets/gateway.1db18831.js","assets/popupNotifcation.82518158.js","assets/fetch.75fe2bdc.js","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/CrudView.0f68a176.js","assets/router.8d4a84df.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhDotsThree.vue.1b83ec2e.js","assets/index.ef661147.js","assets/index.ac2310f2.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.52cf83ef.js","assets/PhPencil.vue.7c8f6bfb.js","assets/index.f9df9f28.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.661f8df5.js"),["assets/VSCodeConnection.661f8df5.js","assets/ContentLayout.8f2e5bf9.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/ContentLayout.ee57a545.css","assets/index.ac2310f2.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.275a7d93.js"),["assets/AccessControlEditor.275a7d93.js","assets/ContentLayout.8f2e5bf9.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/ContentLayout.ee57a545.css","assets/fetch.75fe2bdc.js","assets/record.6f93d08b.js","assets/repository.042df384.js","assets/gateway.1db18831.js","assets/popupNotifcation.82518158.js","assets/asyncComputed.16431637.js","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.199194f4.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/index.a10ffbb0.js","assets/metadata.cd5677bc.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/index.ef661147.js","assets/index.f9df9f28.js","assets/router.74661755.js","assets/linters.03a5c2ad.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.9cd909fc.js"),["assets/ProjectLogin.9cd909fc.js","assets/BaseLayout.aa773e11.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/Logo.7eae28e3.js","assets/Logo.21e86751.css","assets/index.17e78c92.js","assets/index.e8088995.js","assets/index.ac2310f2.js","assets/router.74661755.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.02d4b2f9.js"),["assets/FormEditor.02d4b2f9.js","assets/PlayerNavbar.35dea9a8.js","assets/router.74661755.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/metadata.cd5677bc.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/PhSignOut.vue.49445310.js","assets/workspaceStore.add80352.js","assets/api.130e16e4.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/index.e8088995.js","assets/PlayerNavbar.05528f8e.css","assets/BaseLayout.aa773e11.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.b786be30.js","assets/uuid.0191d98d.js","assets/PhCaretRight.vue.8d3eccc9.js","assets/ai.6d0bf8a2.js","assets/record.6f93d08b.js","assets/PhCopySimple.vue.3ceb7850.js","assets/LoadingOutlined.7a5b9f70.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/scripts.95f47ff2.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/workspaces.edf23c41.js","assets/PhPencil.vue.7c8f6bfb.js","assets/toggleHighContrast.9e67270c.js","assets/toggleHighContrast.30d77c87.css","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/SourceCode.391bfd76.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/FormRunner.c52646ea.js","assets/Login.vue_vue_type_script_setup_true_lang.bee2b7ea.js","assets/CircularLoading.62d77db8.js","assets/CircularLoading.e156a2b0.css","assets/Login.b7a048ae.css","assets/WidgetsFrame.a3238a8c.js","assets/WidgetsFrame.295ac367.css","assets/Steps.661e1ec6.js","assets/Steps.4a8d55e8.css","assets/Watermark.e9841be4.js","assets/Watermark.77541699.css","assets/FormRunner.b0cd3c55.css","assets/api.a151da14.js","assets/fetch.75fe2bdc.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/PhFlowArrow.vue.e252274e.js","assets/forms.02398acb.js","assets/ThreadSelector.9ca35f52.js","assets/index.3dbd51dd.js","assets/index.a10ffbb0.js","assets/ThreadSelector.8aa77ab2.css","assets/index.b2a30f36.js","assets/index.ac2310f2.js","assets/NavbarControls.cdaf77ad.js","assets/CloseCircleOutlined.b4e7a4a8.js","assets/popupNotifcation.82518158.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhChats.vue.bb03fd98.js","assets/NavbarControls.5a022bc4.css","assets/index.17e78c92.js","assets/Badge.bc4f0ead.js","assets/isNumeric.75337b1e.js","assets/FormEditor.ed28ea0b.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.76e13f58.js"),["assets/JobEditor.76e13f58.js","assets/BaseLayout.aa773e11.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.b786be30.js","assets/uuid.0191d98d.js","assets/PhCaretRight.vue.8d3eccc9.js","assets/ai.6d0bf8a2.js","assets/record.6f93d08b.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhCopySimple.vue.3ceb7850.js","assets/LoadingOutlined.7a5b9f70.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/scripts.95f47ff2.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/PhPencil.vue.7c8f6bfb.js","assets/toggleHighContrast.9e67270c.js","assets/toggleHighContrast.30d77c87.css","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/SourceCode.391bfd76.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/dayjs.f5bca2b6.js","assets/index.b80ccd34.js","assets/index.ef661147.js","assets/index.dd27c19e.js","assets/index.ac2310f2.js","assets/RunButton.vue_vue_type_script_setup_true_lang.edb96c78.js","assets/NavbarControls.cdaf77ad.js","assets/router.74661755.js","assets/CloseCircleOutlined.b4e7a4a8.js","assets/popupNotifcation.82518158.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhChats.vue.bb03fd98.js","assets/NavbarControls.5a022bc4.css","assets/index.17e78c92.js","assets/index.e8088995.js","assets/index.b2a30f36.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.55538e45.js"),["assets/HookEditor.55538e45.js","assets/BaseLayout.aa773e11.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.b786be30.js","assets/uuid.0191d98d.js","assets/PhCaretRight.vue.8d3eccc9.js","assets/ai.6d0bf8a2.js","assets/record.6f93d08b.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhCopySimple.vue.3ceb7850.js","assets/LoadingOutlined.7a5b9f70.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/scripts.95f47ff2.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/PhPencil.vue.7c8f6bfb.js","assets/toggleHighContrast.9e67270c.js","assets/toggleHighContrast.30d77c87.css","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/SourceCode.391bfd76.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.edb96c78.js","assets/api.a151da14.js","assets/fetch.75fe2bdc.js","assets/metadata.cd5677bc.js","assets/PhKanban.vue.79f0861f.js","assets/PhWebhooksLogo.vue.38ffb02d.js","assets/ThreadSelector.9ca35f52.js","assets/index.3dbd51dd.js","assets/index.a10ffbb0.js","assets/ThreadSelector.8aa77ab2.css","assets/index.856d49c2.js","assets/CollapsePanel.6f91bfe0.js","assets/index.ac2310f2.js","assets/Badge.bc4f0ead.js","assets/isNumeric.75337b1e.js","assets/index.ef661147.js","assets/NavbarControls.cdaf77ad.js","assets/router.74661755.js","assets/CloseCircleOutlined.b4e7a4a8.js","assets/popupNotifcation.82518158.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhChats.vue.bb03fd98.js","assets/NavbarControls.5a022bc4.css","assets/index.17e78c92.js","assets/index.e8088995.js","assets/index.b2a30f36.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.1f78107b.js"),["assets/ScriptEditor.1f78107b.js","assets/BaseLayout.aa773e11.js","assets/vue-router.d83b1131.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.b786be30.js","assets/uuid.0191d98d.js","assets/PhCaretRight.vue.8d3eccc9.js","assets/ai.6d0bf8a2.js","assets/record.6f93d08b.js","assets/PhCheckCircle.vue.70b9c4e9.js","assets/PhCopySimple.vue.3ceb7850.js","assets/LoadingOutlined.7a5b9f70.js","assets/linters.03a5c2ad.js","assets/asyncComputed.16431637.js","assets/scripts.95f47ff2.js","assets/validations.03112dd2.js","assets/string.17c36a27.js","assets/workspaces.edf23c41.js","assets/runnerData.87493489.js","assets/url.f04a312a.js","assets/PhPencil.vue.7c8f6bfb.js","assets/toggleHighContrast.9e67270c.js","assets/toggleHighContrast.30d77c87.css","assets/index.f9df9f28.js","assets/Card.5c4ddbe8.js","assets/TabPane.92af6318.js","assets/SourceCode.391bfd76.css","assets/SaveButton.b311f805.js","assets/ExclamationCircleOutlined.9458d037.js","assets/SaveButton.ae5051de.css","assets/ThreadSelector.9ca35f52.js","assets/index.3dbd51dd.js","assets/index.a10ffbb0.js","assets/ThreadSelector.8aa77ab2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.edb96c78.js","assets/NavbarControls.cdaf77ad.js","assets/router.74661755.js","assets/CloseCircleOutlined.b4e7a4a8.js","assets/index.ac2310f2.js","assets/popupNotifcation.82518158.js","assets/PhArrowSquareOut.vue.36864cd1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b66cc6d2.js","assets/BookOutlined.40b097bc.js","assets/PhChats.vue.bb03fd98.js","assets/NavbarControls.5a022bc4.css","assets/index.17e78c92.js","assets/index.e8088995.js","assets/index.b2a30f36.js","assets/CollapsePanel.6f91bfe0.js","assets/Badge.bc4f0ead.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...re],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(l);l.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,l),e.use(l),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.9fa949c0.js.map
