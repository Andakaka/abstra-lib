var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,dc as h,dd as u,de as b,h as E,i as A,_ as o,j as g}from"./vue-router.f4a1103d.js";import{C as c,a as w}from"./gateway.17a343c0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ec182c37-a36a-49d3-86fb-8d5431cda376",t._sentryDebugIdIdentifier="sentry-dbid-ec182c37-a36a-49d3-86fb-8d5431cda376")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.c6dc8701.js"),["assets/WidgetPreview.c6dc8701.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/Steps.98fd47a5.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.d1106dd8.js","assets/WidgetsFrame.e0c6be76.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.ca0170b6.js"),["assets/Login.ca0170b6.js","assets/CircularLoading.3d723e99.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/CircularLoading.e156a2b0.css","assets/Logo.51654322.js","assets/Logo.21e86751.css","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/member.b1dcaa02.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js","assets/Login.694d57fb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.e2084d1f.js"),["assets/EditorLogin.e2084d1f.js","assets/Navbar.080fc2da.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/PhChats.vue.a4b065f7.js","assets/PhSignOut.vue.7eac8066.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/index.649b6cc8.js","assets/Avatar.c2d797a5.js","assets/index.ea5a1ec5.js","assets/index.e6d549db.js","assets/BookOutlined.de91fc3b.js","assets/Navbar.a899b0d6.css","assets/url.76443c6a.js","assets/apiKey.1e4e4af4.js","assets/organization.2958562c.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.b3cee270.js"),["assets/Organizations.b3cee270.js","assets/Navbar.080fc2da.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/PhChats.vue.a4b065f7.js","assets/PhSignOut.vue.7eac8066.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/index.649b6cc8.js","assets/Avatar.c2d797a5.js","assets/index.ea5a1ec5.js","assets/index.e6d549db.js","assets/BookOutlined.de91fc3b.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.fbed4898.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.ffd5d513.js","assets/ContentLayout.ee57a545.css","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/CrudView.6b6b336a.css","assets/ant-design.5e3d93c7.js","assets/PhArrowSquareOut.vue.f797cc27.js","assets/PhPencil.vue.79ed469b.js","assets/organization.2958562c.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.1d566588.js"),["assets/Organization.1d566588.js","assets/Navbar.080fc2da.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/PhChats.vue.a4b065f7.js","assets/PhSignOut.vue.7eac8066.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/index.649b6cc8.js","assets/Avatar.c2d797a5.js","assets/index.ea5a1ec5.js","assets/index.e6d549db.js","assets/BookOutlined.de91fc3b.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.fbed4898.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.ffd5d513.js","assets/ContentLayout.ee57a545.css","assets/organization.2958562c.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js","assets/Sidebar.badf38e9.js","assets/index.8cb0ec90.js","assets/Logo.51654322.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.2b79ac5d.js"),["assets/Projects.2b79ac5d.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/ant-design.5e3d93c7.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/organization.2958562c.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.f797cc27.js","assets/PhCopy.vue.525012d7.js","assets/PhPencil.vue.79ed469b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.cb826663.js"),["assets/Editors.cb826663.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/ant-design.5e3d93c7.js","assets/asyncComputed.be896cd6.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/member.b1dcaa02.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.b874fef3.js"),["assets/Billing.b874fef3.js","assets/asyncComputed.be896cd6.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/organization.2958562c.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js","assets/LoadingContainer.9eb5e308.js","assets/LoadingContainer.56fa997a.css","assets/index.9983eb71.js","assets/Card.22bba385.js","assets/TabPane.1f7d4f89.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.ba99f5ed.js"),["assets/Project.ba99f5ed.js","assets/Navbar.080fc2da.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/PhChats.vue.a4b065f7.js","assets/PhSignOut.vue.7eac8066.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/index.649b6cc8.js","assets/Avatar.c2d797a5.js","assets/index.ea5a1ec5.js","assets/index.e6d549db.js","assets/BookOutlined.de91fc3b.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.fbed4898.js","assets/BaseLayout.0156e9e1.css","assets/organization.2958562c.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/Sidebar.badf38e9.js","assets/index.8cb0ec90.js","assets/Logo.51654322.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.ffd5d513.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.ed88bfbd.js","assets/PhIdentificationBadge.vue.ceeef7af.js","assets/PhCube.vue.53021064.js","assets/PhGlobe.vue.43767f86.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.fd71de7d.js"),["assets/Live.fd71de7d.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.be896cd6.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/datetime.d8b3148c.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/polling.334f16a6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.80c91a2d.js","assets/LoadingOutlined.d8e3f05b.js","assets/PhArrowCounterClockwise.vue.ed88bfbd.js","assets/PhArrowSquareOut.vue.f797cc27.js","assets/PhChats.vue.a4b065f7.js","assets/PhCopySimple.vue.96870743.js","assets/PhRocketLaunch.vue.36ca2ed5.js","assets/index.6a881e43.js","assets/Live.47326f2f.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.b9067e44.js"),["assets/Builds.b9067e44.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.be896cd6.js","assets/datetime.d8b3148c.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/polling.334f16a6.js","assets/PhArrowCounterClockwise.vue.ed88bfbd.js","assets/PhCube.vue.53021064.js","assets/PhDownloadSimple.vue.8ffaa975.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/PhWebhooksLogo.vue.e8a2bb87.js","assets/index.08dd7e4f.js","assets/ExclamationCircleOutlined.7f6ba1eb.js","assets/CloseCircleOutlined.da57bbff.js","assets/LoadingOutlined.d8e3f05b.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.ab1830ff.js"),["assets/ConnectorsView.ab1830ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.048c1f5d.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/Avatar.c2d797a5.js","assets/Card.22bba385.js","assets/TabPane.1f7d4f89.js","assets/index.649b6cc8.js","assets/ConnectorsView.c9ae7dfb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6b5843f2.js"),["assets/Tables.6b5843f2.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.be896cd6.js","assets/string.7402454c.js","assets/PhPencil.vue.79ed469b.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/tables.81718ace.js","assets/record.d47c947d.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.8f118a78.js"),["assets/Sql.8f118a78.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/utils.548ec070.js","assets/PhDownloadSimple.vue.8ffaa975.js","assets/toggleHighContrast.bff8a6d5.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.44286c25.js"),["assets/ApiKeys.44286c25.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.be896cd6.js","assets/apiKey.1e4e4af4.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/member.b1dcaa02.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.8a81b0db.js"),["assets/Logs.8a81b0db.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/datetime.d8b3148c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.80c91a2d.js","assets/LoadingOutlined.d8e3f05b.js","assets/string.7402454c.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/dayjs.63c8ee10.js","assets/index.649b6cc8.js","assets/CollapsePanel.ef420dee.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.3a8065be.js"),["assets/ProjectSettings.3a8065be.js","assets/asyncComputed.be896cd6.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/SaveButton.c817b0bb.js","assets/ExclamationCircleOutlined.7f6ba1eb.js","assets/SaveButton.ae5051de.css","assets/index.649b6cc8.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.4151ba42.js"),["assets/EnvVars.4151ba42.js","assets/View.vue_vue_type_script_setup_true_lang.8cd7e28e.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/fetch.9f3590dd.js","assets/record.d47c947d.js","assets/SaveButton.c817b0bb.js","assets/ExclamationCircleOutlined.7f6ba1eb.js","assets/SaveButton.ae5051de.css","assets/CrudView.d016816b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/index.649b6cc8.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.36ca2ed5.js","assets/asyncComputed.be896cd6.js","assets/polling.334f16a6.js","assets/PhPencil.vue.79ed469b.js","assets/index.8cb0ec90.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.f065b5e5.js"),["assets/Files.f065b5e5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ffd5d513.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.2ce681ac.js","assets/ant-design.5e3d93c7.js","assets/asyncComputed.be896cd6.js","assets/gateway.17a343c0.js","assets/tables.81718ace.js","assets/record.d47c947d.js","assets/string.7402454c.js","assets/DeleteOutlined.bc05b8f6.js","assets/Card.22bba385.js","assets/TabPane.1f7d4f89.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.18964992.js"),["assets/View.18964992.js","assets/asyncComputed.be896cd6.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/index.649b6cc8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3779916e.js","assets/BookOutlined.de91fc3b.js","assets/index.8041617f.js","assets/isNumeric.75337b1e.js","assets/CrudView.d016816b.js","assets/url.76443c6a.js","assets/PhDotsThreeVertical.vue.c9b0f434.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.79ed469b.js","assets/repository.aaf7c3da.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/fetch.9f3590dd.js","assets/record.d47c947d.js","assets/ant-design.5e3d93c7.js","assets/TabPane.1f7d4f89.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.4b0ae0f6.js"),["assets/TableEditor.4b0ae0f6.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.048c1f5d.js","assets/vue-router.f4a1103d.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.fbed4898.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.be896cd6.js","assets/gateway.17a343c0.js","assets/popupNotifcation.2ce681ac.js","assets/organization.2958562c.js","assets/project.bcb08762.js","assets/record.d47c947d.js","assets/tables.81718ace.js","assets/string.7402454c.js","assets/ContentLayout.ffd5d513.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.70eb5801.js","assets/index.0c31b220.js","assets/index.649b6cc8.js","assets/index.8041617f.js","assets/isNumeric.75337b1e.js","assets/ant-design.5e3d93c7.js","assets/PhCaretRight.vue.9e525a08.js","assets/LoadingOutlined.d8e3f05b.js","assets/index.ea5a1ec5.js","assets/index.e6d549db.js","assets/Avatar.c2d797a5.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.61879d15.js.map
