import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.8f584e46.js";import{d as v,ed as A,eq as x,f as w,X as I,b as c,w as a,u as e,c as p,R as f,o as i,aF as s,ec as l,d9 as C,d5 as m,bP as N,a as B,d6 as D,eV as o,$ as T}from"./vue-router.8b9cf673.js";import{u as V}from"./workspaceStore.d9427cb2.js";import{C as E}from"./Card.ff5a8f6a.js";import"./Logo.17192eda.js";import"./url.40b7d21e.js";import"./colorHelpers.28f6db8a.js";import"./TabPane.cf5c4e77.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new H().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="a27b683b-d0ca-4536-bc95-ed23260ae82b",r._sentryDebugIdIdentifier="sentry-dbid-a27b683b-d0ca-4536-bc95-ed23260ae82b")}catch{}})();const R={class:"inner-content"},S={class:"card-content"},$=v({__name:"Error",setup(r){const d=A(),b=x(),u=V(),g=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{b.push({name:"playerHome"})};return(t,_)=>(i(),I("div",R,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",S,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(g.value?`the ${g.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const H=T($,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.8a80e424.js.map
