import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.d16be7f8.js";import{B as y}from"./BaseLayout.85e2a010.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ed as w,eq as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.fa6ba029.js";import{u as x}from"./editor.d0f6c4d9.js";import{b as B}from"./index.da0d93cc.js";import"./Logo.c60e078b.js";import"./workspaceStore.79147443.js";import"./url.e2372995.js";import"./colorHelpers.39de1c69.js";import"./asyncComputed.570a73bf.js";import"./index.9b3a0c21.js";import"./Avatar.c62b786a.js";import"./index.b485bcdc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="a7103147-d41a-49d1-9283-a9fa0b469d51",e._sentryDebugIdIdentifier="sentry-dbid-a7103147-d41a-49d1-9283-a9fa0b469d51")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(a)}}});const D={class:"v-spinner"};function P(e,a,o,d,c,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const a=w(),o=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function l(){const t=a.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){o.push({name:"error"});return}await d.createLogin(t).then(c),o.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.9cd02fa4.js.map
