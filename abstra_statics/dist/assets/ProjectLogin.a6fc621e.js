import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.281176d2.js";import{B as y}from"./BaseLayout.bd7f4c6c.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ed as w,eq as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.de4299d2.js";import{u as x}from"./editor.3c2aa6bc.js";import{b as B}from"./index.7a6929eb.js";import"./Logo.b293f624.js";import"./workspaceStore.8eef0e90.js";import"./url.8fbb8311.js";import"./colorHelpers.2b97f396.js";import"./asyncComputed.ef956a27.js";import"./index.0966f720.js";import"./Avatar.f3ac33b1.js";import"./index.103d75f9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1f1820a7-bdcc-4e47-9cc4-75a80d195385",e._sentryDebugIdIdentifier="sentry-dbid-1f1820a7-bdcc-4e47-9cc4-75a80d195385")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,a,c,d,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.a6fc621e.js.map
