var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,d3 as h,d4 as u,d5 as b,h as E,i as A,_ as o,j as g}from"./vue-router.6ef80130.js";import{C as c,a as w}from"./gateway.9c0a6efb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="eca3fce5-6d2c-4abe-b99c-8f508572bd88",t._sentryDebugIdIdentifier="sentry-dbid-eca3fce5-6d2c-4abe-b99c-8f508572bd88")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.6059679e.js"),["assets/WidgetPreview.6059679e.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/Steps.a674b27c.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.667f3aa9.js","assets/WidgetsFrame.295ac367.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.a6e1073b.js"),["assets/Login.a6e1073b.js","assets/CircularLoading.87675a02.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/CircularLoading.e156a2b0.css","assets/Logo.3d2b42e4.js","assets/Logo.21e86751.css","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/member.16a7c37f.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.a1a37504.js"),["assets/EditorLogin.a1a37504.js","assets/Navbar.ddec86f5.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/PhChats.vue.c2f20d13.js","assets/PhSignOut.vue.4f318ec7.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/index.092ffd80.js","assets/index.bc051365.js","assets/index.f5175427.js","assets/BookOutlined.d9b34cd9.js","assets/Navbar.a899b0d6.css","assets/url.972679b5.js","assets/apiKey.121a4bb1.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/project.2335e2cb.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.bf5baf3d.js"),["assets/Organizations.bf5baf3d.js","assets/Navbar.ddec86f5.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/PhChats.vue.c2f20d13.js","assets/PhSignOut.vue.4f318ec7.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/index.092ffd80.js","assets/index.bc051365.js","assets/index.f5175427.js","assets/BookOutlined.d9b34cd9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e508c578.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.6e42ca21.js","assets/ContentLayout.ee57a545.css","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/CrudView.80dd6085.css","assets/ant-design.5938c731.js","assets/PhArrowSquareOut.vue.03faa943.js","assets/PhPencil.vue.0b2bc667.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.d3378634.js"),["assets/Organization.d3378634.js","assets/Navbar.ddec86f5.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/PhChats.vue.c2f20d13.js","assets/PhSignOut.vue.4f318ec7.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/index.092ffd80.js","assets/index.bc051365.js","assets/index.f5175427.js","assets/BookOutlined.d9b34cd9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e508c578.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.6e42ca21.js","assets/ContentLayout.ee57a545.css","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/Sidebar.b71e0ace.js","assets/index.233bd23b.js","assets/Logo.3d2b42e4.js","assets/Logo.21e86751.css","assets/index.8245e576.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.011c7e1d.js"),["assets/Projects.011c7e1d.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/ant-design.5938c731.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/project.2335e2cb.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.03faa943.js","assets/PhPencil.vue.0b2bc667.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.de19b37c.js"),["assets/Editors.de19b37c.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/ant-design.5938c731.js","assets/asyncComputed.0893981e.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/member.16a7c37f.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.2ba0c45e.js"),["assets/Billing.2ba0c45e.js","assets/asyncComputed.0893981e.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/LoadingContainer.48abba7b.js","assets/LoadingContainer.56fa997a.css","assets/index.7c7b0b39.js","assets/Card.f13a0c4d.js","assets/TabPane.60c47382.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.8e26cd4c.js"),["assets/Project.8e26cd4c.js","assets/Navbar.ddec86f5.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/PhChats.vue.c2f20d13.js","assets/PhSignOut.vue.4f318ec7.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/index.092ffd80.js","assets/index.bc051365.js","assets/index.f5175427.js","assets/BookOutlined.d9b34cd9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e508c578.js","assets/BaseLayout.0156e9e1.css","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/project.2335e2cb.js","assets/Sidebar.b71e0ace.js","assets/index.233bd23b.js","assets/Logo.3d2b42e4.js","assets/Logo.21e86751.css","assets/index.8245e576.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.6e42ca21.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.845bb794.js","assets/PhIdentificationBadge.vue.d8a247a8.js","assets/PhCube.vue.31c3ebea.js","assets/PhGlobe.vue.bb435ee4.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.5ad48a29.js"),["assets/Live.5ad48a29.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/asyncComputed.0893981e.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/datetime.e656a278.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/project.2335e2cb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a4ec46d1.js","assets/LoadingOutlined.5c2f3d15.js","assets/PhArrowCounterClockwise.vue.845bb794.js","assets/PhArrowSquareOut.vue.03faa943.js","assets/PhChats.vue.c2f20d13.js","assets/PhCopySimple.vue.6f214744.js","assets/PhRocketLaunch.vue.38212882.js","assets/index.ac68ea63.js","assets/Live.dfeefa78.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.40356e00.js"),["assets/Builds.40356e00.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/asyncComputed.0893981e.js","assets/datetime.e656a278.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/PhArrowCounterClockwise.vue.845bb794.js","assets/PhCube.vue.31c3ebea.js","assets/PhDownloadSimple.vue.5f3a60d7.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/project.2335e2cb.js","assets/PhWebhooksLogo.vue.705fd301.js","assets/index.306a67bb.js","assets/ExclamationCircleOutlined.2b9ba9f1.js","assets/CloseCircleOutlined.9bee6cd9.js","assets/LoadingOutlined.5c2f3d15.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.110da2ad.js"),["assets/Connectors.110da2ad.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/tables.7be625b1.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/connector.e2ff8357.js","assets/asyncComputed.0893981e.js","assets/PhPencil.vue.0b2bc667.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.a3dfd334.js"),["assets/Tables.a3dfd334.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/asyncComputed.0893981e.js","assets/string.49c06dd4.js","assets/PhPencil.vue.0b2bc667.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.a818e29b.js"),["assets/Sql.a818e29b.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/utils.fcb662d4.js","assets/PhDownloadSimple.vue.5f3a60d7.js","assets/toggleHighContrast.3ab771ce.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/project.2335e2cb.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.5de5e215.js"),["assets/ApiKeys.5de5e215.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/asyncComputed.0893981e.js","assets/apiKey.121a4bb1.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/member.16a7c37f.js","assets/project.2335e2cb.js","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.67748f1e.js"),["assets/Logs.67748f1e.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/datetime.e656a278.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a4ec46d1.js","assets/LoadingOutlined.5c2f3d15.js","assets/dayjs.05842b39.js","assets/index.8333eec4.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CollapsePanel.201d0eb8.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.7704bdca.js"),["assets/ProjectSettings.7704bdca.js","assets/asyncComputed.0893981e.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/project.2335e2cb.js","assets/SaveButton.5056451e.js","assets/ExclamationCircleOutlined.2b9ba9f1.js","assets/SaveButton.ae5051de.css","assets/index.092ffd80.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.188f7578.js"),["assets/EnvVars.188f7578.js","assets/View.vue_vue_type_script_setup_true_lang.bbb32cf1.js","assets/gateway.9c0a6efb.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/popupNotifcation.913d741b.js","assets/fetch.bbe14fe7.js","assets/record.8807b1d6.js","assets/SaveButton.5056451e.js","assets/ExclamationCircleOutlined.2b9ba9f1.js","assets/SaveButton.ae5051de.css","assets/CrudView.275f3633.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/index.092ffd80.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.38212882.js","assets/asyncComputed.0893981e.js","assets/PhPencil.vue.0b2bc667.js","assets/index.233bd23b.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.6c1f39e5.js"),["assets/Files.6c1f39e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/ContentLayout.6e42ca21.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.913d741b.js","assets/ant-design.5938c731.js","assets/asyncComputed.0893981e.js","assets/PhDotsThree.vue.089cdf13.js","assets/gateway.9c0a6efb.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/DeleteOutlined.ffd89392.js","assets/Card.f13a0c4d.js","assets/TabPane.60c47382.js","assets/Files.88cda06a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.5f9f54b3.js"),["assets/View.5f9f54b3.js","assets/asyncComputed.0893981e.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/index.092ffd80.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcb80c90.js","assets/BookOutlined.d9b34cd9.js","assets/index.5a1397f7.js","assets/isNumeric.75337b1e.js","assets/CrudView.275f3633.js","assets/url.972679b5.js","assets/PhDotsThree.vue.089cdf13.js","assets/index.8245e576.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.0b2bc667.js","assets/repository.d8ba8034.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/fetch.bbe14fe7.js","assets/record.8807b1d6.js","assets/ant-design.5938c731.js","assets/TabPane.60c47382.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.de324fba.js"),["assets/TableEditor.de324fba.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/BaseLayout.e508c578.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.0893981e.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/tables.7be625b1.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/organization.e88a3384.js","assets/project.2335e2cb.js","assets/ContentLayout.6e42ca21.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.df110077.js","assets/index.76dbfa1e.js","assets/index.092ffd80.js","assets/index.bd02652f.js","assets/index.5a1397f7.js","assets/isNumeric.75337b1e.js","assets/ant-design.5938c731.js","assets/PhCaretRight.vue.6fe9fc98.js","assets/LoadingOutlined.5c2f3d15.js","assets/index.7c7b0b39.js","assets/index.f5175427.js","assets/index.bc051365.js","assets/TableEditor.639fdc71.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.eb05aabf.js"),["assets/ConnectorEditor.eb05aabf.js","assets/BaseLayout.e508c578.js","assets/vue-router.6ef80130.js","assets/vue-router.08f4004b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.5056451e.js","assets/ExclamationCircleOutlined.2b9ba9f1.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.0893981e.js","assets/tables.7be625b1.js","assets/gateway.9c0a6efb.js","assets/popupNotifcation.913d741b.js","assets/record.8807b1d6.js","assets/string.49c06dd4.js","assets/connector.e2ff8357.js","assets/organization.e88a3384.js","assets/project.2335e2cb.js","assets/TabPane.60c47382.js","assets/index.f5175427.js","assets/index.bc051365.js","assets/index.092ffd80.js","assets/index.7c7b0b39.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.cceb82d5.js.map
