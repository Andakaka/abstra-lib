var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,d3 as h,d4 as u,d5 as b,h as E,i as A,_ as o,j as g}from"./vue-router.41961d24.js";import{C as c,a as w}from"./gateway.97ffd250.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6cf49892-ab57-4a05-acc8-e3df429927fb",t._sentryDebugIdIdentifier="sentry-dbid-6cf49892-ab57-4a05-acc8-e3df429927fb")}catch{}})();const L=p(h),T=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.77cafb0b.js"),["assets/WidgetPreview.77cafb0b.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/Steps.16cdae61.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.02c043a8.js","assets/WidgetsFrame.295ac367.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.2ba5ab42.js"),["assets/Login.2ba5ab42.js","assets/CircularLoading.9f980273.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/CircularLoading.e156a2b0.css","assets/Logo.6d8bc12c.js","assets/Logo.21e86751.css","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/member.c863c03b.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.182a2257.js"),["assets/EditorLogin.182a2257.js","assets/Navbar.5b1ef4b3.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/PhChats.vue.8aa5ce1b.js","assets/PhSignOut.vue.cfdc3707.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/index.f1820335.js","assets/index.92171da5.js","assets/index.7ae04628.js","assets/BookOutlined.481ea44a.js","assets/Navbar.a899b0d6.css","assets/url.025a0430.js","assets/apiKey.c7876416.js","assets/organization.32c26d48.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.7dc055a0.js"),["assets/Organizations.7dc055a0.js","assets/Navbar.5b1ef4b3.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/PhChats.vue.8aa5ce1b.js","assets/PhSignOut.vue.cfdc3707.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/index.f1820335.js","assets/index.92171da5.js","assets/index.7ae04628.js","assets/BookOutlined.481ea44a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.61003891.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.8a8a7d83.js","assets/ContentLayout.ee57a545.css","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/CrudView.80dd6085.css","assets/ant-design.24d83e4f.js","assets/PhArrowSquareOut.vue.52dd934a.js","assets/PhPencil.vue.8c2e21ca.js","assets/organization.32c26d48.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.814e2913.js"),["assets/Organization.814e2913.js","assets/Navbar.5b1ef4b3.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/PhChats.vue.8aa5ce1b.js","assets/PhSignOut.vue.cfdc3707.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/index.f1820335.js","assets/index.92171da5.js","assets/index.7ae04628.js","assets/BookOutlined.481ea44a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.61003891.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.8a8a7d83.js","assets/ContentLayout.ee57a545.css","assets/organization.32c26d48.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js","assets/Sidebar.44a78991.js","assets/index.87c025ca.js","assets/Logo.6d8bc12c.js","assets/Logo.21e86751.css","assets/index.80a5c376.js","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.5f5bc27e.js"),["assets/Projects.5f5bc27e.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/ant-design.24d83e4f.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/organization.32c26d48.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.52dd934a.js","assets/PhCopy.vue.d23569d6.js","assets/PhPencil.vue.8c2e21ca.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.ca073ff2.js"),["assets/Editors.ca073ff2.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/ant-design.24d83e4f.js","assets/asyncComputed.2ff227ab.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/member.c863c03b.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.2a777a28.js"),["assets/Billing.2a777a28.js","assets/asyncComputed.2ff227ab.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/organization.32c26d48.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js","assets/LoadingContainer.4b25c940.js","assets/LoadingContainer.56fa997a.css","assets/index.7fbc98f7.js","assets/Card.70302131.js","assets/TabPane.85ec75e3.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.5ea4996f.js"),["assets/Project.5ea4996f.js","assets/Navbar.5b1ef4b3.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/PhChats.vue.8aa5ce1b.js","assets/PhSignOut.vue.cfdc3707.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/index.f1820335.js","assets/index.92171da5.js","assets/index.7ae04628.js","assets/BookOutlined.481ea44a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.61003891.js","assets/BaseLayout.0156e9e1.css","assets/organization.32c26d48.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/Sidebar.44a78991.js","assets/index.87c025ca.js","assets/Logo.6d8bc12c.js","assets/Logo.21e86751.css","assets/index.80a5c376.js","assets/Sidebar.83c5c451.css","assets/ContentLayout.8a8a7d83.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.9e139fdc.js","assets/PhIdentificationBadge.vue.6b96df9c.js","assets/PhCube.vue.eb6b4196.js","assets/PhGlobe.vue.3c515d13.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.b016b1d5.js"),["assets/Live.b016b1d5.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/asyncComputed.2ff227ab.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/datetime.71878ec0.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b14be5fd.js","assets/LoadingOutlined.b39d35f3.js","assets/PhArrowCounterClockwise.vue.9e139fdc.js","assets/PhArrowSquareOut.vue.52dd934a.js","assets/PhChats.vue.8aa5ce1b.js","assets/PhCopySimple.vue.03a36cd7.js","assets/PhRocketLaunch.vue.f52d90bb.js","assets/index.58b72acb.js","assets/Live.119ef975.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.9cd5bb65.js"),["assets/Builds.9cd5bb65.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/asyncComputed.2ff227ab.js","assets/datetime.71878ec0.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/PhArrowCounterClockwise.vue.9e139fdc.js","assets/PhCube.vue.eb6b4196.js","assets/PhDownloadSimple.vue.9c803d93.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/PhWebhooksLogo.vue.2ecb430e.js","assets/index.998aadcf.js","assets/ExclamationCircleOutlined.a1d84f8c.js","assets/CloseCircleOutlined.9771fdf0.js","assets/LoadingOutlined.b39d35f3.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.576abb42.js"),["assets/Tables.576abb42.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/asyncComputed.2ff227ab.js","assets/string.753320cb.js","assets/PhPencil.vue.8c2e21ca.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/tables.da095271.js","assets/record.4f1added.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.2a94cb9f.js"),["assets/Sql.2a94cb9f.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/utils.8d60dccc.js","assets/PhDownloadSimple.vue.9c803d93.js","assets/toggleHighContrast.66ee6d13.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.dfab95c7.js"),["assets/ApiKeys.dfab95c7.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/asyncComputed.2ff227ab.js","assets/apiKey.c7876416.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/member.c863c03b.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.1080c31f.js"),["assets/Logs.1080c31f.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/datetime.71878ec0.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b14be5fd.js","assets/LoadingOutlined.b39d35f3.js","assets/string.753320cb.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/dayjs.aa936bb2.js","assets/index.3ed3aff2.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CollapsePanel.e73f73eb.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.83a42c4f.js"),["assets/ProjectSettings.83a42c4f.js","assets/asyncComputed.2ff227ab.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/SaveButton.1049a17a.js","assets/ExclamationCircleOutlined.a1d84f8c.js","assets/SaveButton.ae5051de.css","assets/index.f1820335.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.6eb91b59.js"),["assets/EnvVars.6eb91b59.js","assets/View.vue_vue_type_script_setup_true_lang.93910777.js","assets/gateway.97ffd250.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/popupNotifcation.e1e165b7.js","assets/fetch.eeeee337.js","assets/record.4f1added.js","assets/SaveButton.1049a17a.js","assets/ExclamationCircleOutlined.a1d84f8c.js","assets/SaveButton.ae5051de.css","assets/CrudView.aa29c570.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/index.f1820335.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.f52d90bb.js","assets/asyncComputed.2ff227ab.js","assets/PhPencil.vue.8c2e21ca.js","assets/index.87c025ca.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.7ddc5e73.js"),["assets/Files.7ddc5e73.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/ContentLayout.8a8a7d83.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.e1e165b7.js","assets/ant-design.24d83e4f.js","assets/asyncComputed.2ff227ab.js","assets/PhDotsThree.vue.556636a6.js","assets/gateway.97ffd250.js","assets/tables.da095271.js","assets/record.4f1added.js","assets/string.753320cb.js","assets/DeleteOutlined.a0a15447.js","assets/Card.70302131.js","assets/TabPane.85ec75e3.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.d8bd2fbd.js"),["assets/View.d8bd2fbd.js","assets/asyncComputed.2ff227ab.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/index.f1820335.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js","assets/BookOutlined.481ea44a.js","assets/index.188de477.js","assets/isNumeric.75337b1e.js","assets/CrudView.aa29c570.js","assets/url.025a0430.js","assets/PhDotsThree.vue.556636a6.js","assets/index.80a5c376.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.8c2e21ca.js","assets/repository.2fc237c9.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/fetch.eeeee337.js","assets/record.4f1added.js","assets/ant-design.24d83e4f.js","assets/TabPane.85ec75e3.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.fccd85c5.js"),["assets/TableEditor.fccd85c5.js","assets/vue-router.41961d24.js","assets/vue-router.08f4004b.css","assets/BaseLayout.61003891.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.2ff227ab.js","assets/gateway.97ffd250.js","assets/popupNotifcation.e1e165b7.js","assets/organization.32c26d48.js","assets/project.518c2e43.js","assets/record.4f1added.js","assets/tables.da095271.js","assets/string.753320cb.js","assets/ContentLayout.8a8a7d83.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.959cb13b.js","assets/index.f09a3294.js","assets/index.f1820335.js","assets/index.d959b189.js","assets/index.188de477.js","assets/isNumeric.75337b1e.js","assets/ant-design.24d83e4f.js","assets/PhCaretRight.vue.132b4276.js","assets/LoadingOutlined.b39d35f3.js","assets/index.7ae04628.js","assets/index.92171da5.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{L as A,i as C,P as T,T as a,m as r};
//# sourceMappingURL=router.c71bd213.js.map
