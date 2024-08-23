var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,dc as h,dd as u,de as b,h as E,i as A,_ as o,j as g}from"./vue-router.0d249036.js";import{C as c,a as w}from"./gateway.bfe698c1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c3cd8bec-ddc6-48d8-9016-5bc8340f6ddb",t._sentryDebugIdIdentifier="sentry-dbid-c3cd8bec-ddc6-48d8-9016-5bc8340f6ddb")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.f97f9a07.js"),["assets/WidgetPreview.f97f9a07.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/Steps.264a6a00.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.82c6d29c.js","assets/WidgetsFrame.e0c6be76.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.08c8bdd2.js"),["assets/Login.08c8bdd2.js","assets/CircularLoading.3977628f.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/CircularLoading.e156a2b0.css","assets/Logo.7f1703c6.js","assets/Logo.21e86751.css","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/member.1f46be73.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js","assets/Login.694d57fb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.b6cad926.js"),["assets/EditorLogin.b6cad926.js","assets/Navbar.34b88323.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/PhChats.vue.e030eead.js","assets/PhSignOut.vue.a2a6da9c.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/index.48a9e8c7.js","assets/Avatar.e58c87c7.js","assets/index.15c057c2.js","assets/index.eab2d1c2.js","assets/BookOutlined.28278d06.js","assets/Navbar.a899b0d6.css","assets/url.30108cf2.js","assets/apiKey.ea214785.js","assets/organization.e4ff4318.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.2600a179.js"),["assets/Organizations.2600a179.js","assets/Navbar.34b88323.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/PhChats.vue.e030eead.js","assets/PhSignOut.vue.a2a6da9c.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/index.48a9e8c7.js","assets/Avatar.e58c87c7.js","assets/index.15c057c2.js","assets/index.eab2d1c2.js","assets/BookOutlined.28278d06.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0e629d6b.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c6f12bf8.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/CrudView.6b6b336a.css","assets/ant-design.f1be37a2.js","assets/PhArrowSquareOut.vue.2c230856.js","assets/PhPencil.vue.041a2c9f.js","assets/organization.e4ff4318.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.b1c9d3b5.js"),["assets/Organization.b1c9d3b5.js","assets/Navbar.34b88323.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/PhChats.vue.e030eead.js","assets/PhSignOut.vue.a2a6da9c.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/index.48a9e8c7.js","assets/Avatar.e58c87c7.js","assets/index.15c057c2.js","assets/index.eab2d1c2.js","assets/BookOutlined.28278d06.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0e629d6b.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c6f12bf8.js","assets/ContentLayout.ee57a545.css","assets/organization.e4ff4318.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js","assets/Sidebar.e4f8a665.js","assets/index.3d7f5696.js","assets/Logo.7f1703c6.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.ca08e9fb.js"),["assets/Projects.ca08e9fb.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/ant-design.f1be37a2.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/organization.e4ff4318.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.2c230856.js","assets/PhCopy.vue.ee74daac.js","assets/PhPencil.vue.041a2c9f.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.ee0db78f.js"),["assets/Editors.ee0db78f.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/ant-design.f1be37a2.js","assets/asyncComputed.6a2a04b8.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/member.1f46be73.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.a81da5b9.js"),["assets/Billing.a81da5b9.js","assets/asyncComputed.6a2a04b8.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/organization.e4ff4318.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js","assets/LoadingContainer.0e8195fc.js","assets/LoadingContainer.56fa997a.css","assets/index.a1820ce0.js","assets/Card.66983d3e.js","assets/TabPane.25d0f125.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.0f216b6d.js"),["assets/Project.0f216b6d.js","assets/Navbar.34b88323.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/PhChats.vue.e030eead.js","assets/PhSignOut.vue.a2a6da9c.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/index.48a9e8c7.js","assets/Avatar.e58c87c7.js","assets/index.15c057c2.js","assets/index.eab2d1c2.js","assets/BookOutlined.28278d06.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0e629d6b.js","assets/BaseLayout.0156e9e1.css","assets/organization.e4ff4318.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/Sidebar.e4f8a665.js","assets/index.3d7f5696.js","assets/Logo.7f1703c6.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.c6f12bf8.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.2b5885ed.js","assets/PhIdentificationBadge.vue.bb493680.js","assets/PhCube.vue.6debc8d2.js","assets/PhGlobe.vue.565084ee.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.8acad1c3.js"),["assets/Live.8acad1c3.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.6a2a04b8.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/datetime.d68a9353.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/polling.026543cb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ba1a235c.js","assets/LoadingOutlined.2650c779.js","assets/PhArrowCounterClockwise.vue.2b5885ed.js","assets/PhArrowSquareOut.vue.2c230856.js","assets/PhChats.vue.e030eead.js","assets/PhCopySimple.vue.0ab56054.js","assets/PhRocketLaunch.vue.c77dd396.js","assets/index.d6539619.js","assets/Live.47326f2f.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.f6c87829.js"),["assets/Builds.f6c87829.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.6a2a04b8.js","assets/datetime.d68a9353.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/polling.026543cb.js","assets/PhArrowCounterClockwise.vue.2b5885ed.js","assets/PhCube.vue.6debc8d2.js","assets/PhDownloadSimple.vue.42b40fb3.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/PhWebhooksLogo.vue.25d5ea5c.js","assets/index.ddbe9921.js","assets/ExclamationCircleOutlined.5fedbaaa.js","assets/CloseCircleOutlined.a02a7a13.js","assets/LoadingOutlined.2650c779.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.e143d922.js"),["assets/ConnectorsView.e143d922.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b0411ebd.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/Avatar.e58c87c7.js","assets/Card.66983d3e.js","assets/TabPane.25d0f125.js","assets/index.48a9e8c7.js","assets/ConnectorsView.c9ae7dfb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.2ba4cd08.js"),["assets/Tables.2ba4cd08.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.6a2a04b8.js","assets/string.3c7d3293.js","assets/PhPencil.vue.041a2c9f.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.92c1d119.js"),["assets/Sql.92c1d119.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/utils.2bd9b6ce.js","assets/PhDownloadSimple.vue.42b40fb3.js","assets/toggleHighContrast.9145848b.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.4f7496ff.js"),["assets/ApiKeys.4f7496ff.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.6a2a04b8.js","assets/apiKey.ea214785.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/member.1f46be73.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.cdfdc911.js"),["assets/Logs.cdfdc911.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/datetime.d68a9353.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ba1a235c.js","assets/LoadingOutlined.2650c779.js","assets/string.3c7d3293.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/dayjs.e8d27c24.js","assets/index.48a9e8c7.js","assets/CollapsePanel.7b1693fe.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.5549313c.js"),["assets/ProjectSettings.5549313c.js","assets/asyncComputed.6a2a04b8.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/SaveButton.233b4c62.js","assets/ExclamationCircleOutlined.5fedbaaa.js","assets/SaveButton.ae5051de.css","assets/index.48a9e8c7.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.2852cde3.js"),["assets/EnvVars.2852cde3.js","assets/View.vue_vue_type_script_setup_true_lang.f9048c97.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/fetch.1f62286a.js","assets/record.b9dc7ad5.js","assets/SaveButton.233b4c62.js","assets/ExclamationCircleOutlined.5fedbaaa.js","assets/SaveButton.ae5051de.css","assets/CrudView.b71308e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/index.48a9e8c7.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.c77dd396.js","assets/asyncComputed.6a2a04b8.js","assets/polling.026543cb.js","assets/PhPencil.vue.041a2c9f.js","assets/index.3d7f5696.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.402813a9.js"),["assets/Files.402813a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.c6f12bf8.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.d78d39ed.js","assets/ant-design.f1be37a2.js","assets/asyncComputed.6a2a04b8.js","assets/gateway.bfe698c1.js","assets/tables.08ca87a5.js","assets/record.b9dc7ad5.js","assets/string.3c7d3293.js","assets/DeleteOutlined.2714938b.js","assets/Card.66983d3e.js","assets/TabPane.25d0f125.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.fbb69db9.js"),["assets/View.fbb69db9.js","assets/asyncComputed.6a2a04b8.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/index.48a9e8c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.89bcf467.js","assets/BookOutlined.28278d06.js","assets/index.1a06b32f.js","assets/isNumeric.75337b1e.js","assets/CrudView.b71308e5.js","assets/url.30108cf2.js","assets/PhDotsThreeVertical.vue.4a506d93.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.041a2c9f.js","assets/repository.891411b9.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/fetch.1f62286a.js","assets/record.b9dc7ad5.js","assets/ant-design.f1be37a2.js","assets/TabPane.25d0f125.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.611214a5.js"),["assets/TableEditor.611214a5.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b0411ebd.js","assets/vue-router.0d249036.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0e629d6b.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.6a2a04b8.js","assets/gateway.bfe698c1.js","assets/popupNotifcation.d78d39ed.js","assets/organization.e4ff4318.js","assets/project.96d476a8.js","assets/record.b9dc7ad5.js","assets/tables.08ca87a5.js","assets/string.3c7d3293.js","assets/ContentLayout.c6f12bf8.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.ecf88d7b.js","assets/index.e37d3fdb.js","assets/index.48a9e8c7.js","assets/index.1a06b32f.js","assets/isNumeric.75337b1e.js","assets/ant-design.f1be37a2.js","assets/PhCaretRight.vue.47b4354d.js","assets/LoadingOutlined.2650c779.js","assets/index.15c057c2.js","assets/index.eab2d1c2.js","assets/Avatar.e58c87c7.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.d608ae28.js.map
