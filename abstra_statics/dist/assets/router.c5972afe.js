var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.2a09679a.js";import{C as c,a as w}from"./gateway.b08a6336.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7c5a1d93-27bf-4336-a00d-40c68d114904",t._sentryDebugIdIdentifier="sentry-dbid-7c5a1d93-27bf-4336-a00d-40c68d114904")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.f9e30210.js"),["assets/WidgetPreview.f9e30210.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/Steps.ac5a26fb.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.fb1068fd.js","assets/colorHelpers.23e83093.js","assets/index.4445038d.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.bcf7a381.js"),["assets/Login.bcf7a381.js","assets/CircularLoading.7699468a.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7c2a202d.js","assets/Logo.4bfdee2e.js","assets/Logo.03290bf7.css","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/member.53ae5da8.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.d884833a.js"),["assets/EditorLogin.d884833a.js","assets/Navbar.56f78ac6.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/PhChats.vue.5239035f.js","assets/PhSignOut.vue.aaa2624c.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/index.b153c6c8.js","assets/Avatar.98f1e3cf.js","assets/index.c1ea635c.js","assets/index.2ec31d33.js","assets/BookOutlined.b0ead745.js","assets/Navbar.a899b0d6.css","assets/url.fd4f4aec.js","assets/apiKey.69e058a0.js","assets/organization.a48d7686.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.b004bbf5.js"),["assets/Organizations.b004bbf5.js","assets/Navbar.56f78ac6.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/PhChats.vue.5239035f.js","assets/PhSignOut.vue.aaa2624c.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/index.b153c6c8.js","assets/Avatar.98f1e3cf.js","assets/index.c1ea635c.js","assets/index.2ec31d33.js","assets/BookOutlined.b0ead745.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.41153fe3.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a6c9e47a.js","assets/ContentLayout.ee57a545.css","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/CrudView.6b6b336a.css","assets/ant-design.e55e1bbe.js","assets/PhArrowSquareOut.vue.e47ec562.js","assets/PhPencil.vue.6b4fe7f8.js","assets/organization.a48d7686.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.e866a751.js"),["assets/Organization.e866a751.js","assets/Navbar.56f78ac6.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/PhChats.vue.5239035f.js","assets/PhSignOut.vue.aaa2624c.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/index.b153c6c8.js","assets/Avatar.98f1e3cf.js","assets/index.c1ea635c.js","assets/index.2ec31d33.js","assets/BookOutlined.b0ead745.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.41153fe3.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a6c9e47a.js","assets/ContentLayout.ee57a545.css","assets/organization.a48d7686.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js","assets/Sidebar.5a43d44e.js","assets/index.90bdaa5c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7c2a202d.js","assets/Logo.4bfdee2e.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.c4c58bb0.js"),["assets/Projects.c4c58bb0.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/ant-design.e55e1bbe.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/organization.a48d7686.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.e47ec562.js","assets/PhCopy.vue.c940073f.js","assets/PhPencil.vue.6b4fe7f8.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.36a0f678.js"),["assets/Editors.36a0f678.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/ant-design.e55e1bbe.js","assets/asyncComputed.1e9d0abf.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/member.53ae5da8.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.5a015632.js"),["assets/Billing.5a015632.js","assets/asyncComputed.1e9d0abf.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/organization.a48d7686.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js","assets/LoadingContainer.c638438c.js","assets/LoadingContainer.56fa997a.css","assets/index.a1e30a9e.js","assets/Card.9e59e121.js","assets/TabPane.bbbaa995.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.569a0e5d.js"),["assets/Project.569a0e5d.js","assets/Navbar.56f78ac6.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/PhChats.vue.5239035f.js","assets/PhSignOut.vue.aaa2624c.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/index.b153c6c8.js","assets/Avatar.98f1e3cf.js","assets/index.c1ea635c.js","assets/index.2ec31d33.js","assets/BookOutlined.b0ead745.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.41153fe3.js","assets/BaseLayout.b7a1f19a.css","assets/organization.a48d7686.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/Sidebar.5a43d44e.js","assets/index.90bdaa5c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7c2a202d.js","assets/Logo.4bfdee2e.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.a6c9e47a.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.1aca0e04.js","assets/PhIdentificationBadge.vue.98301f9a.js","assets/PhCube.vue.e6dc6f69.js","assets/PhGlobe.vue.70623329.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.b98b4537.js"),["assets/Live.b98b4537.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.1e9d0abf.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/datetime.26f8ad53.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/polling.33063483.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.600832db.js","assets/LoadingOutlined.4136294d.js","assets/PhArrowCounterClockwise.vue.1aca0e04.js","assets/PhArrowSquareOut.vue.e47ec562.js","assets/PhChats.vue.5239035f.js","assets/PhCopySimple.vue.67702090.js","assets/PhRocketLaunch.vue.c82a4e99.js","assets/index.92fd35e3.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.3fcc9134.js"),["assets/Builds.3fcc9134.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.1e9d0abf.js","assets/datetime.26f8ad53.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/polling.33063483.js","assets/PhArrowCounterClockwise.vue.1aca0e04.js","assets/PhCube.vue.e6dc6f69.js","assets/PhDownloadSimple.vue.d33f3e03.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/PhWebhooksLogo.vue.718bf526.js","assets/index.5edc7291.js","assets/ExclamationCircleOutlined.caa1c4dd.js","assets/CloseCircleOutlined.853a45eb.js","assets/LoadingOutlined.4136294d.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.da78d923.js"),["assets/ConnectorsView.da78d923.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b88154c2.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/Avatar.98f1e3cf.js","assets/Card.9e59e121.js","assets/TabPane.bbbaa995.js","assets/index.b153c6c8.js","assets/ConnectorsView.57c087c2.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.60f131e2.js"),["assets/Tables.60f131e2.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.1e9d0abf.js","assets/string.6792602f.js","assets/PhPencil.vue.6b4fe7f8.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/ant-design.e55e1bbe.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.0967b4e8.js"),["assets/Sql.0967b4e8.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/utils.2ac115d2.js","assets/PhDownloadSimple.vue.d33f3e03.js","assets/toggleHighContrast.99f88ee2.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.d04040d7.js"),["assets/ApiKeys.d04040d7.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.1e9d0abf.js","assets/apiKey.69e058a0.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/member.53ae5da8.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.9dfc3fb8.js"),["assets/Logs.9dfc3fb8.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/datetime.26f8ad53.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.600832db.js","assets/LoadingOutlined.4136294d.js","assets/string.6792602f.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/dayjs.280c40ad.js","assets/index.b153c6c8.js","assets/CollapsePanel.cc4f4f35.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.059c2cb2.js"),["assets/ProjectSettings.059c2cb2.js","assets/asyncComputed.1e9d0abf.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/SaveButton.b7f2e2dd.js","assets/UnsavedChangesHandler.fdad812d.js","assets/ExclamationCircleOutlined.caa1c4dd.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.b153c6c8.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.a67935f8.js"),["assets/EnvVars.a67935f8.js","assets/View.vue_vue_type_script_setup_true_lang.a29d9cad.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/fetch.0c05edc9.js","assets/record.1f9cddba.js","assets/SaveButton.b7f2e2dd.js","assets/UnsavedChangesHandler.fdad812d.js","assets/ExclamationCircleOutlined.caa1c4dd.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.5c576934.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/index.b153c6c8.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.c82a4e99.js","assets/asyncComputed.1e9d0abf.js","assets/polling.33063483.js","assets/PhPencil.vue.6b4fe7f8.js","assets/index.90bdaa5c.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.4ec82880.js"),["assets/Files.4ec82880.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.a6c9e47a.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.ed0bf79d.js","assets/ant-design.e55e1bbe.js","assets/asyncComputed.1e9d0abf.js","assets/gateway.b08a6336.js","assets/tables.adb160d4.js","assets/record.1f9cddba.js","assets/string.6792602f.js","assets/DeleteOutlined.7c4710e4.js","assets/Card.9e59e121.js","assets/TabPane.bbbaa995.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.4e7867ed.js"),["assets/View.4e7867ed.js","assets/asyncComputed.1e9d0abf.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/index.b153c6c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b6793306.js","assets/BookOutlined.b0ead745.js","assets/index.2bc8c913.js","assets/isNumeric.75337b1e.js","assets/CrudView.5c576934.js","assets/url.fd4f4aec.js","assets/PhDotsThreeVertical.vue.1b4932cb.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.6b4fe7f8.js","assets/repository.70269053.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/fetch.0c05edc9.js","assets/record.1f9cddba.js","assets/ant-design.e55e1bbe.js","assets/TabPane.bbbaa995.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.a4b34591.js"),["assets/TableEditor.a4b34591.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b88154c2.js","assets/vue-router.2a09679a.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.41153fe3.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.1e9d0abf.js","assets/gateway.b08a6336.js","assets/popupNotifcation.ed0bf79d.js","assets/organization.a48d7686.js","assets/project.3520299d.js","assets/record.1f9cddba.js","assets/tables.adb160d4.js","assets/string.6792602f.js","assets/ContentLayout.a6c9e47a.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.bbecc176.js","assets/index.71f39352.js","assets/index.b153c6c8.js","assets/index.2bc8c913.js","assets/isNumeric.75337b1e.js","assets/ant-design.e55e1bbe.js","assets/PhCaretRight.vue.1fde7c7d.js","assets/LoadingOutlined.4136294d.js","assets/index.c1ea635c.js","assets/index.2ec31d33.js","assets/Avatar.98f1e3cf.js","assets/TableEditor.b1663dd4.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.c5972afe.js.map
