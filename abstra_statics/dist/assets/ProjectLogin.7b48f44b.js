import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.33bc493e.js";import{B as y}from"./BaseLayout.95cdee13.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ed as w,eq as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.2d887e19.js";import{u as x}from"./editor.87e5db8d.js";import{b as B}from"./index.127ebd37.js";import"./Logo.76aec3d0.js";import"./workspaceStore.d97cb2a7.js";import"./url.f75e09e9.js";import"./colorHelpers.b1af7ab8.js";import"./asyncComputed.5296271c.js";import"./index.68c01c57.js";import"./Avatar.4ebcf8ba.js";import"./index.0a87c2c6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="68e017c7-226d-4f1a-a8ab-ebd9793aeca2",e._sentryDebugIdIdentifier="sentry-dbid-68e017c7-226d-4f1a-a8ab-ebd9793aeca2")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(a)}}});const D={class:"v-spinner"};function P(e,a,o,d,c,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const a=w(),o=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function l(){const t=a.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){o.push({name:"error"});return}await d.createLogin(t).then(c),o.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.7b48f44b.js.map
