var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.daa9090b.js";import{C as c,a as v}from"./gateway.143b9d5b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4d689a3b-7d7d-45d7-b88b-0b5f0b5572bc",t._sentryDebugIdIdentifier="sentry-dbid-4d689a3b-7d7d-45d7-b88b-0b5f0b5572bc")}catch{}})();const T=m(h),D=m(u);class f{async getInfo(){return await c.get("authors/info")}}const I=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.dafabe0e.js"),["assets/WidgetPreview.dafabe0e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/Steps.064493d4.js","assets/index.512f41d0.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.700775a6.js","assets/colorHelpers.cbe2471c.js","assets/index.dfb6b150.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.92d9be15.js"),["assets/Login.92d9be15.js","assets/CircularLoading.12e4b10b.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.67d8d69f.js","assets/Logo.217c4b13.js","assets/Logo.03290bf7.css","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/member.5499e17d.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.c9b4e91e.js"),["assets/EditorLogin.c9b4e91e.js","assets/Navbar.059ea32c.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/PhChats.vue.ec150648.js","assets/PhSignOut.vue.68035fe5.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/index.91d5283b.js","assets/Avatar.0aead593.js","assets/index.5a8cc23a.js","assets/index.76587169.js","assets/BookOutlined.37a8944e.js","assets/Navbar.a899b0d6.css","assets/url.f89b68d7.js","assets/apiKey.eba8befd.js","assets/organization.430f5ff2.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.f29cab7a.js"),["assets/Organizations.f29cab7a.js","assets/Navbar.059ea32c.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/PhChats.vue.ec150648.js","assets/PhSignOut.vue.68035fe5.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/index.91d5283b.js","assets/Avatar.0aead593.js","assets/index.5a8cc23a.js","assets/index.76587169.js","assets/BookOutlined.37a8944e.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ab0d5715.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.124197f3.js","assets/ContentLayout.ee57a545.css","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/CrudView.0d926139.css","assets/ant-design.635db699.js","assets/PhArrowSquareOut.vue.0aa4e14a.js","assets/PhPencil.vue.16557b70.js","assets/organization.430f5ff2.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.65012560.js"),["assets/Organization.65012560.js","assets/Navbar.059ea32c.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/PhChats.vue.ec150648.js","assets/PhSignOut.vue.68035fe5.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/index.91d5283b.js","assets/Avatar.0aead593.js","assets/index.5a8cc23a.js","assets/index.76587169.js","assets/BookOutlined.37a8944e.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ab0d5715.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.124197f3.js","assets/ContentLayout.ee57a545.css","assets/organization.430f5ff2.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js","assets/Sidebar.13dcf869.js","assets/index.2b93a546.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.67d8d69f.js","assets/Logo.217c4b13.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.d7beae5f.js"),["assets/Projects.d7beae5f.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/ant-design.635db699.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/organization.430f5ff2.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/PhArrowSquareOut.vue.0aa4e14a.js","assets/PhCopy.vue.04eecf39.js","assets/PhPencil.vue.16557b70.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.a7e9d3d8.js"),["assets/Editors.a7e9d3d8.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/ant-design.635db699.js","assets/asyncComputed.a9aefa60.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/member.5499e17d.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.0d6ad32b.js"),["assets/Billing.0d6ad32b.js","assets/asyncComputed.a9aefa60.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/organization.430f5ff2.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js","assets/LoadingContainer.614dadf2.js","assets/LoadingContainer.56fa997a.css","assets/index.e7e56391.js","assets/Card.23870b32.js","assets/TabPane.1d197b12.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.c7edbc85.js"),["assets/Project.c7edbc85.js","assets/Navbar.059ea32c.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/PhChats.vue.ec150648.js","assets/PhSignOut.vue.68035fe5.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/index.91d5283b.js","assets/Avatar.0aead593.js","assets/index.5a8cc23a.js","assets/index.76587169.js","assets/BookOutlined.37a8944e.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ab0d5715.js","assets/BaseLayout.b7a1f19a.css","assets/organization.430f5ff2.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/Sidebar.13dcf869.js","assets/index.2b93a546.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.67d8d69f.js","assets/Logo.217c4b13.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.124197f3.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.81fdc59e.js","assets/PhIdentificationBadge.vue.bb1b8cc7.js","assets/PhCube.vue.ceb7a0d2.js","assets/PhGlobe.vue.ca8434d3.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.22dbd80b.js"),["assets/Live.22dbd80b.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/asyncComputed.a9aefa60.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/datetime.e0bb10fd.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/polling.1a044af4.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.91637b19.js","assets/LoadingOutlined.d9c72a6b.js","assets/PhArrowCounterClockwise.vue.81fdc59e.js","assets/PhArrowSquareOut.vue.0aa4e14a.js","assets/PhChats.vue.ec150648.js","assets/PhCopySimple.vue.ad3f2b7d.js","assets/PhRocketLaunch.vue.c8d1dc06.js","assets/index.c441aec0.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.dc1592fb.js"),["assets/Builds.dc1592fb.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/asyncComputed.a9aefa60.js","assets/datetime.e0bb10fd.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/polling.1a044af4.js","assets/PhArrowCounterClockwise.vue.81fdc59e.js","assets/PhCube.vue.ceb7a0d2.js","assets/PhDownloadSimple.vue.d803e97a.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/PhWebhooksLogo.vue.f053cb83.js","assets/index.cd44a8d3.js","assets/ExclamationCircleOutlined.7c4bcdbe.js","assets/CloseCircleOutlined.60f195e5.js","assets/LoadingOutlined.d9c72a6b.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.67e1349f.js"),["assets/ConnectorsView.67e1349f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c70f46aa.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/Avatar.0aead593.js","assets/Card.23870b32.js","assets/TabPane.1d197b12.js","assets/index.91d5283b.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.93395e3b.js"),["assets/Tables.93395e3b.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/asyncComputed.a9aefa60.js","assets/string.c6f29545.js","assets/PhPencil.vue.16557b70.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/ant-design.635db699.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.e4aadd37.js"),["assets/Sql.e4aadd37.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/utils.2e53d9ec.js","assets/PhDownloadSimple.vue.d803e97a.js","assets/toggleHighContrast.547f9df4.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.0336a221.js"),["assets/ApiKeys.0336a221.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/asyncComputed.a9aefa60.js","assets/apiKey.eba8befd.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/member.5499e17d.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.2e70af25.js"),["assets/Logs.2e70af25.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/datetime.e0bb10fd.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.91637b19.js","assets/LoadingOutlined.d9c72a6b.js","assets/string.c6f29545.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/ant-design.635db699.js","assets/index.91d5283b.js","assets/dayjs.dac22aa2.js","assets/CollapsePanel.166dd9f1.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.1b25f186.js"),["assets/ProjectSettings.1b25f186.js","assets/asyncComputed.a9aefa60.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/SaveButton.9e982791.js","assets/UnsavedChangesHandler.d79063f6.js","assets/ExclamationCircleOutlined.7c4bcdbe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.91d5283b.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.42f04e57.js"),["assets/EnvVars.42f04e57.js","assets/View.vue_vue_type_script_setup_true_lang.947bc889.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/fetch.10591b87.js","assets/record.7a59ec24.js","assets/SaveButton.9e982791.js","assets/UnsavedChangesHandler.d79063f6.js","assets/ExclamationCircleOutlined.7c4bcdbe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.187e7b93.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/index.91d5283b.js","assets/CrudView.0d926139.css","assets/PhRocketLaunch.vue.c8d1dc06.js","assets/asyncComputed.a9aefa60.js","assets/polling.1a044af4.js","assets/PhPencil.vue.16557b70.js","assets/index.2b93a546.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.291ae4b1.js"),["assets/Files.291ae4b1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/ContentLayout.124197f3.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.6bc3253c.js","assets/ant-design.635db699.js","assets/asyncComputed.a9aefa60.js","assets/gateway.143b9d5b.js","assets/tables.6c4080db.js","assets/record.7a59ec24.js","assets/string.c6f29545.js","assets/DeleteOutlined.0ea8bc83.js","assets/Card.23870b32.js","assets/TabPane.1d197b12.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.734300b1.js"),["assets/View.734300b1.js","assets/asyncComputed.a9aefa60.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/index.91d5283b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ef44101d.js","assets/BookOutlined.37a8944e.js","assets/index.f6011d65.js","assets/isNumeric.75337b1e.js","assets/CrudView.187e7b93.js","assets/url.f89b68d7.js","assets/PhDotsThreeVertical.vue.00f8a21a.js","assets/CrudView.0d926139.css","assets/PhPencil.vue.16557b70.js","assets/repository.5f81acb0.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/fetch.10591b87.js","assets/record.7a59ec24.js","assets/ant-design.635db699.js","assets/TabPane.1d197b12.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.a139cfd6.js"),["assets/TableEditor.a139cfd6.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c70f46aa.js","assets/vue-router.daa9090b.js","assets/vue-router.960f756c.css","assets/BaseLayout.ab0d5715.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.a9aefa60.js","assets/gateway.143b9d5b.js","assets/popupNotifcation.6bc3253c.js","assets/organization.430f5ff2.js","assets/project.c819dd2a.js","assets/record.7a59ec24.js","assets/tables.6c4080db.js","assets/string.c6f29545.js","assets/ContentLayout.124197f3.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.f1a7707c.js","assets/index.2514423e.js","assets/index.91d5283b.js","assets/index.f6011d65.js","assets/isNumeric.75337b1e.js","assets/ant-design.635db699.js","assets/PhCaretRight.vue.d4a4494f.js","assets/PhArrowDown.vue.ad01ca75.js","assets/LoadingOutlined.d9c72a6b.js","assets/index.5a8cc23a.js","assets/index.76587169.js","assets/Avatar.0aead593.js","assets/TableEditor.4c7fcf87.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.2e40d4d3.js.map
