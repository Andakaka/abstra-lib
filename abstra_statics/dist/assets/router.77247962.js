var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.b3d87860.js";import{C as c,a as w}from"./gateway.cf46e151.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="bd154190-de42-4d79-ab92-669646e3d38d",t._sentryDebugIdIdentifier="sentry-dbid-bd154190-de42-4d79-ab92-669646e3d38d")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.43700f99.js"),["assets/WidgetPreview.43700f99.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/Steps.f0ee27f0.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.7212858f.js","assets/colorHelpers.eb5a31e5.js","assets/index.0ae9b264.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.35ca3d06.js"),["assets/Login.35ca3d06.js","assets/CircularLoading.d7a7c493.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d9226768.js","assets/Logo.f44f9c53.js","assets/Logo.03290bf7.css","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/member.cf6f84ce.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.5b28c60f.js"),["assets/EditorLogin.5b28c60f.js","assets/Navbar.a16b2104.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/PhChats.vue.2f9a605f.js","assets/PhSignOut.vue.fa94bd4d.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/index.7f5251aa.js","assets/Avatar.97855abc.js","assets/index.b559ce35.js","assets/index.da0fd45c.js","assets/BookOutlined.14a6cd77.js","assets/Navbar.a899b0d6.css","assets/url.8be449d1.js","assets/apiKey.d3d88321.js","assets/organization.d7606c73.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.37c6bd59.js"),["assets/Organizations.37c6bd59.js","assets/Navbar.a16b2104.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/PhChats.vue.2f9a605f.js","assets/PhSignOut.vue.fa94bd4d.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/index.7f5251aa.js","assets/Avatar.97855abc.js","assets/index.b559ce35.js","assets/index.da0fd45c.js","assets/BookOutlined.14a6cd77.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d19d0c68.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.2c547a14.js","assets/ContentLayout.ee57a545.css","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/CrudView.6b6b336a.css","assets/ant-design.13ae4285.js","assets/PhArrowSquareOut.vue.8355ab64.js","assets/PhPencil.vue.ed4cac92.js","assets/organization.d7606c73.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.877796bf.js"),["assets/Organization.877796bf.js","assets/Navbar.a16b2104.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/PhChats.vue.2f9a605f.js","assets/PhSignOut.vue.fa94bd4d.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/index.7f5251aa.js","assets/Avatar.97855abc.js","assets/index.b559ce35.js","assets/index.da0fd45c.js","assets/BookOutlined.14a6cd77.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d19d0c68.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.2c547a14.js","assets/ContentLayout.ee57a545.css","assets/organization.d7606c73.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js","assets/Sidebar.6c8b2748.js","assets/index.36182742.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d9226768.js","assets/Logo.f44f9c53.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.5f3ef569.js"),["assets/Projects.5f3ef569.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/ant-design.13ae4285.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/organization.d7606c73.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.8355ab64.js","assets/PhCopy.vue.4079c6fc.js","assets/PhPencil.vue.ed4cac92.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.d7256e4c.js"),["assets/Editors.d7256e4c.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/ant-design.13ae4285.js","assets/asyncComputed.5b8dedf2.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/member.cf6f84ce.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.597f5375.js"),["assets/Billing.597f5375.js","assets/asyncComputed.5b8dedf2.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/organization.d7606c73.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js","assets/LoadingContainer.d8d4d264.js","assets/LoadingContainer.56fa997a.css","assets/index.8d50b7de.js","assets/Card.e77abf73.js","assets/TabPane.624892b5.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.e0935430.js"),["assets/Project.e0935430.js","assets/Navbar.a16b2104.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/PhChats.vue.2f9a605f.js","assets/PhSignOut.vue.fa94bd4d.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/index.7f5251aa.js","assets/Avatar.97855abc.js","assets/index.b559ce35.js","assets/index.da0fd45c.js","assets/BookOutlined.14a6cd77.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d19d0c68.js","assets/BaseLayout.b7a1f19a.css","assets/organization.d7606c73.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/Sidebar.6c8b2748.js","assets/index.36182742.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d9226768.js","assets/Logo.f44f9c53.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.2c547a14.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.a86d697d.js","assets/PhIdentificationBadge.vue.7192f90b.js","assets/PhCube.vue.82402227.js","assets/PhGlobe.vue.4afb1f1b.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.fe2656d0.js"),["assets/Live.fe2656d0.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.5b8dedf2.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/datetime.b1af74b3.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/polling.6d5cc071.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.70569333.js","assets/LoadingOutlined.ca16f6bb.js","assets/PhArrowCounterClockwise.vue.a86d697d.js","assets/PhArrowSquareOut.vue.8355ab64.js","assets/PhChats.vue.2f9a605f.js","assets/PhCopySimple.vue.50f9d977.js","assets/PhRocketLaunch.vue.62e3d8cf.js","assets/index.0dd82db5.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.89683fd3.js"),["assets/Builds.89683fd3.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.5b8dedf2.js","assets/datetime.b1af74b3.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/polling.6d5cc071.js","assets/PhArrowCounterClockwise.vue.a86d697d.js","assets/PhCube.vue.82402227.js","assets/PhDownloadSimple.vue.4aac942a.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/PhWebhooksLogo.vue.a1ba035d.js","assets/index.176c51cd.js","assets/ExclamationCircleOutlined.ad9b87ec.js","assets/CloseCircleOutlined.3efd3125.js","assets/LoadingOutlined.ca16f6bb.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.4941a376.js"),["assets/ConnectorsView.4941a376.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.105b1f56.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/Avatar.97855abc.js","assets/Card.e77abf73.js","assets/TabPane.624892b5.js","assets/index.7f5251aa.js","assets/ConnectorsView.57c087c2.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.f7309483.js"),["assets/Tables.f7309483.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.5b8dedf2.js","assets/string.15b49b2b.js","assets/PhPencil.vue.ed4cac92.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/ant-design.13ae4285.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.ba44e911.js"),["assets/Sql.ba44e911.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/utils.94aa6b14.js","assets/PhDownloadSimple.vue.4aac942a.js","assets/toggleHighContrast.1ebf826a.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.e6bef24f.js"),["assets/ApiKeys.e6bef24f.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.5b8dedf2.js","assets/apiKey.d3d88321.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/member.cf6f84ce.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.95089b86.js"),["assets/Logs.95089b86.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/datetime.b1af74b3.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.70569333.js","assets/LoadingOutlined.ca16f6bb.js","assets/string.15b49b2b.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/ant-design.13ae4285.js","assets/index.7f5251aa.js","assets/dayjs.8d8492e3.js","assets/CollapsePanel.41c04a06.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.124e41ea.js"),["assets/ProjectSettings.124e41ea.js","assets/asyncComputed.5b8dedf2.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/SaveButton.dbf054f2.js","assets/UnsavedChangesHandler.2a1bfc78.js","assets/ExclamationCircleOutlined.ad9b87ec.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.7f5251aa.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.5b50b929.js"),["assets/EnvVars.5b50b929.js","assets/View.vue_vue_type_script_setup_true_lang.aef8e764.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/fetch.7d3cb32d.js","assets/record.bfd24593.js","assets/SaveButton.dbf054f2.js","assets/UnsavedChangesHandler.2a1bfc78.js","assets/ExclamationCircleOutlined.ad9b87ec.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.3e48cfb2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/index.7f5251aa.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.62e3d8cf.js","assets/asyncComputed.5b8dedf2.js","assets/polling.6d5cc071.js","assets/PhPencil.vue.ed4cac92.js","assets/index.36182742.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.0a96ccc6.js"),["assets/Files.0a96ccc6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.2c547a14.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.a3b1e55e.js","assets/ant-design.13ae4285.js","assets/asyncComputed.5b8dedf2.js","assets/gateway.cf46e151.js","assets/tables.0baad986.js","assets/record.bfd24593.js","assets/string.15b49b2b.js","assets/DeleteOutlined.f2e8da9f.js","assets/Card.e77abf73.js","assets/TabPane.624892b5.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1af5c41a.js"),["assets/View.1af5c41a.js","assets/asyncComputed.5b8dedf2.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/index.7f5251aa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.561f9725.js","assets/BookOutlined.14a6cd77.js","assets/index.a1fe4615.js","assets/isNumeric.75337b1e.js","assets/CrudView.3e48cfb2.js","assets/url.8be449d1.js","assets/PhDotsThreeVertical.vue.0cf0f7cb.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.ed4cac92.js","assets/repository.6cf61022.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/fetch.7d3cb32d.js","assets/record.bfd24593.js","assets/ant-design.13ae4285.js","assets/TabPane.624892b5.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.3094faf6.js"),["assets/TableEditor.3094faf6.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.105b1f56.js","assets/vue-router.b3d87860.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.d19d0c68.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.5b8dedf2.js","assets/gateway.cf46e151.js","assets/popupNotifcation.a3b1e55e.js","assets/organization.d7606c73.js","assets/project.ea40dde4.js","assets/record.bfd24593.js","assets/tables.0baad986.js","assets/string.15b49b2b.js","assets/ContentLayout.2c547a14.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.6ca33e9f.js","assets/index.38ce6580.js","assets/index.7f5251aa.js","assets/index.a1fe4615.js","assets/isNumeric.75337b1e.js","assets/ant-design.13ae4285.js","assets/PhCaretRight.vue.edc36f59.js","assets/LoadingOutlined.ca16f6bb.js","assets/index.b559ce35.js","assets/index.da0fd45c.js","assets/Avatar.97855abc.js","assets/TableEditor.b1663dd4.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.77247962.js.map
