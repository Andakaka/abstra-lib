var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.462557a9.js";import{C as c,a as v}from"./gateway.da179935.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d9d0d5e8-9fcd-4b78-8b5c-d19d4cc00985",t._sentryDebugIdIdentifier="sentry-dbid-d9d0d5e8-9fcd-4b78-8b5c-d19d4cc00985")}catch{}})();const T=m(h),D=m(u);class f{async getInfo(){return await c.get("authors/info")}}const I=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.f676374b.js"),["assets/WidgetPreview.f676374b.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/Steps.1ab848bb.js","assets/index.dbe10eba.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.cbe550bc.js","assets/colorHelpers.0417ed21.js","assets/index.8829c317.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.eb0b644a.js"),["assets/Login.eb0b644a.js","assets/CircularLoading.ded7bbdf.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.10380b48.js","assets/Logo.e7ecac8b.js","assets/Logo.03290bf7.css","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/member.321ace7a.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.b62b905e.js"),["assets/EditorLogin.b62b905e.js","assets/Navbar.44d00788.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/PhChats.vue.43d289eb.js","assets/PhSignOut.vue.0d2397b6.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/index.69e3ab2c.js","assets/Avatar.a8c1b60d.js","assets/index.5a2c3802.js","assets/index.96bbf005.js","assets/BookOutlined.884cbd82.js","assets/Navbar.a899b0d6.css","assets/url.f24e141b.js","assets/apiKey.bd6d4365.js","assets/organization.aedd1f98.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.6dc32691.js"),["assets/Organizations.6dc32691.js","assets/Navbar.44d00788.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/PhChats.vue.43d289eb.js","assets/PhSignOut.vue.0d2397b6.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/index.69e3ab2c.js","assets/Avatar.a8c1b60d.js","assets/index.5a2c3802.js","assets/index.96bbf005.js","assets/BookOutlined.884cbd82.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4063fdf4.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.bd1d4890.js","assets/ContentLayout.ee57a545.css","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/CrudView.2fb0614c.css","assets/ant-design.3e2423ff.js","assets/PhArrowSquareOut.vue.15dd8877.js","assets/PhPencil.vue.c51b4fc7.js","assets/organization.aedd1f98.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.9d9f0e67.js"),["assets/Organization.9d9f0e67.js","assets/Navbar.44d00788.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/PhChats.vue.43d289eb.js","assets/PhSignOut.vue.0d2397b6.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/index.69e3ab2c.js","assets/Avatar.a8c1b60d.js","assets/index.5a2c3802.js","assets/index.96bbf005.js","assets/BookOutlined.884cbd82.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4063fdf4.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.bd1d4890.js","assets/ContentLayout.ee57a545.css","assets/organization.aedd1f98.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js","assets/Sidebar.b415e520.js","assets/index.ee26a253.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.10380b48.js","assets/Logo.e7ecac8b.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.b27f7da2.js"),["assets/Projects.b27f7da2.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/ant-design.3e2423ff.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/organization.aedd1f98.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/PhArrowSquareOut.vue.15dd8877.js","assets/PhCopy.vue.2d1da101.js","assets/PhPencil.vue.c51b4fc7.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.0f6422ff.js"),["assets/Editors.0f6422ff.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/ant-design.3e2423ff.js","assets/asyncComputed.772c2ff0.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/member.321ace7a.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.fa61e4d2.js"),["assets/Billing.fa61e4d2.js","assets/asyncComputed.772c2ff0.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/organization.aedd1f98.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js","assets/LoadingContainer.359289eb.js","assets/LoadingContainer.56fa997a.css","assets/index.6ed647e1.js","assets/Card.e4eb075b.js","assets/TabPane.478ca2e3.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.3301a9c6.js"),["assets/Project.3301a9c6.js","assets/Navbar.44d00788.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/PhChats.vue.43d289eb.js","assets/PhSignOut.vue.0d2397b6.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/index.69e3ab2c.js","assets/Avatar.a8c1b60d.js","assets/index.5a2c3802.js","assets/index.96bbf005.js","assets/BookOutlined.884cbd82.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4063fdf4.js","assets/BaseLayout.b7a1f19a.css","assets/organization.aedd1f98.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/Sidebar.b415e520.js","assets/index.ee26a253.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.10380b48.js","assets/Logo.e7ecac8b.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.bd1d4890.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.835952b5.js","assets/PhIdentificationBadge.vue.81db631c.js","assets/PhCube.vue.1a148fd6.js","assets/PhGlobe.vue.7d061e1a.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.be44e915.js"),["assets/Live.be44e915.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.772c2ff0.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/datetime.2cab256d.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/polling.d600da16.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e0667bad.js","assets/LoadingOutlined.af080ff0.js","assets/PhArrowCounterClockwise.vue.835952b5.js","assets/PhArrowSquareOut.vue.15dd8877.js","assets/PhChats.vue.43d289eb.js","assets/PhCopySimple.vue.d079a1ff.js","assets/index.91521b3f.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.d3da28dc.js"),["assets/Builds.d3da28dc.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.772c2ff0.js","assets/datetime.2cab256d.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/polling.d600da16.js","assets/PhArrowCounterClockwise.vue.835952b5.js","assets/PhCube.vue.1a148fd6.js","assets/PhDownloadSimple.vue.a2246f85.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/PhWebhooksLogo.vue.3ebcecd7.js","assets/index.a12039d8.js","assets/ExclamationCircleOutlined.1a2b0ac4.js","assets/CloseCircleOutlined.ebea1398.js","assets/LoadingOutlined.af080ff0.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.8a7af9bb.js"),["assets/ConnectorsView.8a7af9bb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.28462a83.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/Avatar.a8c1b60d.js","assets/Card.e4eb075b.js","assets/TabPane.478ca2e3.js","assets/index.69e3ab2c.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.7312caf5.js"),["assets/Tables.7312caf5.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.772c2ff0.js","assets/string.5d8c97ce.js","assets/PhPencil.vue.c51b4fc7.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/ant-design.3e2423ff.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.5efdbb1c.js"),["assets/Sql.5efdbb1c.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/utils.4562bd37.js","assets/PhDownloadSimple.vue.a2246f85.js","assets/toggleHighContrast.2a542bdc.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.f39dbb4b.js"),["assets/ApiKeys.f39dbb4b.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/asyncComputed.772c2ff0.js","assets/apiKey.bd6d4365.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/member.321ace7a.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.ecc8c76e.js"),["assets/Logs.ecc8c76e.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/datetime.2cab256d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e0667bad.js","assets/LoadingOutlined.af080ff0.js","assets/string.5d8c97ce.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/ant-design.3e2423ff.js","assets/index.69e3ab2c.js","assets/dayjs.f95e19ea.js","assets/CollapsePanel.27431785.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.7bb6c2ce.js"),["assets/ProjectSettings.7bb6c2ce.js","assets/asyncComputed.772c2ff0.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/SaveButton.94579c4d.js","assets/UnsavedChangesHandler.490e94dc.js","assets/ExclamationCircleOutlined.1a2b0ac4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.69e3ab2c.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.b24c20c1.js"),["assets/EnvVars.b24c20c1.js","assets/View.vue_vue_type_script_setup_true_lang.318214f5.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/fetch.9abf63e0.js","assets/record.e4f2e937.js","assets/SaveButton.94579c4d.js","assets/UnsavedChangesHandler.490e94dc.js","assets/ExclamationCircleOutlined.1a2b0ac4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.6c0de652.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/Badge.b996bf06.js","assets/index.69e3ab2c.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.772c2ff0.js","assets/polling.d600da16.js","assets/PhPencil.vue.c51b4fc7.js","assets/index.ee26a253.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.d22312d2.js"),["assets/Files.d22312d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/ContentLayout.bd1d4890.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.f30d1abe.js","assets/ant-design.3e2423ff.js","assets/asyncComputed.772c2ff0.js","assets/gateway.da179935.js","assets/tables.624a5205.js","assets/record.e4f2e937.js","assets/string.5d8c97ce.js","assets/DeleteOutlined.bb0137c3.js","assets/Card.e4eb075b.js","assets/TabPane.478ca2e3.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1d34dd20.js"),["assets/View.1d34dd20.js","assets/asyncComputed.772c2ff0.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/index.69e3ab2c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eaf7a597.js","assets/BookOutlined.884cbd82.js","assets/index.58c31a78.js","assets/Badge.b996bf06.js","assets/CrudView.6c0de652.js","assets/url.f24e141b.js","assets/PhDotsThreeVertical.vue.df41c4c2.js","assets/CrudView.2fb0614c.css","assets/PhPencil.vue.c51b4fc7.js","assets/repository.d1b64a78.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/fetch.9abf63e0.js","assets/record.e4f2e937.js","assets/ant-design.3e2423ff.js","assets/TabPane.478ca2e3.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.e5a90798.js"),["assets/TableEditor.e5a90798.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.28462a83.js","assets/vue-router.462557a9.js","assets/vue-router.960f756c.css","assets/BaseLayout.4063fdf4.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.772c2ff0.js","assets/gateway.da179935.js","assets/popupNotifcation.f30d1abe.js","assets/organization.aedd1f98.js","assets/project.00efdb30.js","assets/record.e4f2e937.js","assets/tables.624a5205.js","assets/string.5d8c97ce.js","assets/ContentLayout.bd1d4890.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.912539f9.js","assets/index.f15ef822.js","assets/index.69e3ab2c.js","assets/index.58c31a78.js","assets/Badge.b996bf06.js","assets/ant-design.3e2423ff.js","assets/PhCaretRight.vue.d2a1c617.js","assets/PhArrowDown.vue.95b511fe.js","assets/LoadingOutlined.af080ff0.js","assets/index.5a2c3802.js","assets/index.96bbf005.js","assets/Avatar.a8c1b60d.js","assets/TableEditor.d539c504.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.26d617f1.js.map
