var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.0c866027.js";import{C as c,a as w}from"./gateway.0ef21e5f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="945d7e22-d5e5-4bf7-9379-03792a88d422",t._sentryDebugIdIdentifier="sentry-dbid-945d7e22-d5e5-4bf7-9379-03792a88d422")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.9e1a9ce0.js"),["assets/WidgetPreview.9e1a9ce0.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/Steps.1f42c016.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.1264971f.js","assets/colorHelpers.7c0c60f9.js","assets/index.bc41eb74.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.23648d95.js"),["assets/Login.23648d95.js","assets/CircularLoading.9ccc89d1.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.119ad9ee.js","assets/Logo.5efc0bb6.js","assets/Logo.03290bf7.css","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/member.397e4f7a.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.960db323.js"),["assets/EditorLogin.960db323.js","assets/Navbar.cf5c68f2.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/PhChats.vue.e221accc.js","assets/PhSignOut.vue.da64673b.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/index.10fe6907.js","assets/Avatar.f2808c9d.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/BookOutlined.ad59ac41.js","assets/Navbar.a899b0d6.css","assets/url.292545d8.js","assets/apiKey.2133f436.js","assets/organization.f1587f8e.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.8a68a219.js"),["assets/Organizations.8a68a219.js","assets/Navbar.cf5c68f2.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/PhChats.vue.e221accc.js","assets/PhSignOut.vue.da64673b.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/index.10fe6907.js","assets/Avatar.f2808c9d.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/BookOutlined.ad59ac41.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/CrudView.6b6b336a.css","assets/ant-design.dc4aa0ab.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/PhPencil.vue.e025cd00.js","assets/organization.f1587f8e.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.0e7f25d0.js"),["assets/Organization.0e7f25d0.js","assets/Navbar.cf5c68f2.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/PhChats.vue.e221accc.js","assets/PhSignOut.vue.da64673b.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/index.10fe6907.js","assets/Avatar.f2808c9d.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/BookOutlined.ad59ac41.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/organization.f1587f8e.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js","assets/Sidebar.987d0195.js","assets/index.b0036605.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.119ad9ee.js","assets/Logo.5efc0bb6.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.2c3967b9.js"),["assets/Projects.2c3967b9.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/ant-design.dc4aa0ab.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/organization.f1587f8e.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.9de9626c.js","assets/PhCopy.vue.a65ebc35.js","assets/PhPencil.vue.e025cd00.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.73c0ae90.js"),["assets/Editors.73c0ae90.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/ant-design.dc4aa0ab.js","assets/asyncComputed.982eaa66.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/member.397e4f7a.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.7e64f93d.js"),["assets/Billing.7e64f93d.js","assets/asyncComputed.982eaa66.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/organization.f1587f8e.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js","assets/LoadingContainer.9798a9eb.js","assets/LoadingContainer.56fa997a.css","assets/index.56474945.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.3c288d02.js"),["assets/Project.3c288d02.js","assets/Navbar.cf5c68f2.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/PhChats.vue.e221accc.js","assets/PhSignOut.vue.da64673b.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/index.10fe6907.js","assets/Avatar.f2808c9d.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/BookOutlined.ad59ac41.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/organization.f1587f8e.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/Sidebar.987d0195.js","assets/index.b0036605.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.119ad9ee.js","assets/Logo.5efc0bb6.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.784bb2c5.js","assets/PhIdentificationBadge.vue.fc5244ca.js","assets/PhCube.vue.01ea4170.js","assets/PhGlobe.vue.400abff7.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.bc3babac.js"),["assets/Live.bc3babac.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.982eaa66.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/datetime.c18d8780.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/polling.72ce848f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1f3a7a34.js","assets/LoadingOutlined.9844cd76.js","assets/PhArrowCounterClockwise.vue.784bb2c5.js","assets/PhArrowSquareOut.vue.9de9626c.js","assets/PhChats.vue.e221accc.js","assets/PhCopySimple.vue.265d8215.js","assets/PhRocketLaunch.vue.6dd58fda.js","assets/index.ddb5c2e4.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.ccc40f73.js"),["assets/Builds.ccc40f73.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.982eaa66.js","assets/datetime.c18d8780.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/polling.72ce848f.js","assets/PhArrowCounterClockwise.vue.784bb2c5.js","assets/PhCube.vue.01ea4170.js","assets/PhDownloadSimple.vue.d8b1a8ff.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/PhWebhooksLogo.vue.0ee772eb.js","assets/index.086150a9.js","assets/ExclamationCircleOutlined.8858c489.js","assets/CloseCircleOutlined.967d37fa.js","assets/LoadingOutlined.9844cd76.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.7731423a.js"),["assets/ConnectorsView.7731423a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.80326aa6.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/Avatar.f2808c9d.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/index.10fe6907.js","assets/ConnectorsView.57c087c2.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.2b3ce53a.js"),["assets/Tables.2b3ce53a.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.982eaa66.js","assets/string.23ad9559.js","assets/PhPencil.vue.e025cd00.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/ant-design.dc4aa0ab.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.58620e2f.js"),["assets/Sql.58620e2f.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/utils.58543493.js","assets/PhDownloadSimple.vue.d8b1a8ff.js","assets/toggleHighContrast.67f28729.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.32dee72d.js"),["assets/ApiKeys.32dee72d.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.982eaa66.js","assets/apiKey.2133f436.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/member.397e4f7a.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.8ce7ca3b.js"),["assets/Logs.8ce7ca3b.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/datetime.c18d8780.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1f3a7a34.js","assets/LoadingOutlined.9844cd76.js","assets/string.23ad9559.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/dayjs.88c1e82b.js","assets/index.10fe6907.js","assets/CollapsePanel.89234c60.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.84cf7e5e.js"),["assets/ProjectSettings.84cf7e5e.js","assets/asyncComputed.982eaa66.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.10fe6907.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.e653e70a.js"),["assets/EnvVars.e653e70a.js","assets/View.vue_vue_type_script_setup_true_lang.ddfecf5c.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/fetch.d454d88f.js","assets/record.36ebc23b.js","assets/SaveButton.385bba34.js","assets/UnsavedChangesHandler.1cd723bc.js","assets/ExclamationCircleOutlined.8858c489.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.b7c32ec8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/index.10fe6907.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.6dd58fda.js","assets/asyncComputed.982eaa66.js","assets/polling.72ce848f.js","assets/PhPencil.vue.e025cd00.js","assets/index.b0036605.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.42100549.js"),["assets/Files.42100549.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.e8b26059.js","assets/ant-design.dc4aa0ab.js","assets/asyncComputed.982eaa66.js","assets/gateway.0ef21e5f.js","assets/tables.efb5f012.js","assets/record.36ebc23b.js","assets/string.23ad9559.js","assets/DeleteOutlined.11f42d9c.js","assets/Card.edd974b1.js","assets/TabPane.37b1f3b8.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.40a2f940.js"),["assets/View.40a2f940.js","assets/asyncComputed.982eaa66.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/index.10fe6907.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13208669.js","assets/BookOutlined.ad59ac41.js","assets/index.74e4f92a.js","assets/isNumeric.75337b1e.js","assets/CrudView.b7c32ec8.js","assets/url.292545d8.js","assets/PhDotsThreeVertical.vue.efed2e5c.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.e025cd00.js","assets/repository.96432bd4.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/fetch.d454d88f.js","assets/record.36ebc23b.js","assets/ant-design.dc4aa0ab.js","assets/TabPane.37b1f3b8.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.9543bb74.js"),["assets/TableEditor.9543bb74.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.80326aa6.js","assets/vue-router.0c866027.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.4a936d9b.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.982eaa66.js","assets/gateway.0ef21e5f.js","assets/popupNotifcation.e8b26059.js","assets/organization.f1587f8e.js","assets/project.3d363c01.js","assets/record.36ebc23b.js","assets/tables.efb5f012.js","assets/string.23ad9559.js","assets/ContentLayout.9680170d.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.92143e8c.js","assets/index.6cea71c3.js","assets/index.10fe6907.js","assets/index.74e4f92a.js","assets/isNumeric.75337b1e.js","assets/ant-design.dc4aa0ab.js","assets/PhCaretRight.vue.711129b5.js","assets/LoadingOutlined.9844cd76.js","assets/index.7b03bf61.js","assets/index.7dcc65bc.js","assets/Avatar.f2808c9d.js","assets/TableEditor.b1663dd4.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.1e2b485f.js.map
