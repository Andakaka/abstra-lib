import{B as f}from"./BaseLayout.6860d7d0.js";import{L as y}from"./Logo.6d86624e.js";import{d as u,D as m,K as b,$ as p,aZ as g,a_ as v,o as _,X as h,a as s,Y as a,ed as w,eq as L,W as S,c as k,w as n,b as i,u as x}from"./vue-router.4826ade2.js";import{u as B}from"./editor.425eaa6f.js";import{b as I}from"./index.8c59771a.js";import"./workspaceStore.14c2924e.js";import"./url.adacee7c.js";import"./colorHelpers.9fd1799e.js";import"./asyncComputed.4ccaf5b7.js";import"./index.defc7d84.js";import"./Avatar.1bd6b822.js";import"./index.b781350b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8e61d881-b7cc-4150-9cb8-46b0c5991d56",e._sentryDebugIdIdentifier="sentry-dbid-8e61d881-b7cc-4150-9cb8-46b0c5991d56")}catch{}})();const $=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,r,c,d,l){return g((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4)],512)),[[v,e.loading]])}const K=p($,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),r=L(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),r.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return S(async()=>{const t=l();if(!t){r.push({name:"error"});return}await c.createLogin(t).then(d),r.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:n(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(y)]),_:1})]),content:n(()=>[s("div",R,[i(K)])]),_:1}))}});const Y=p(j,[["__scopeId","data-v-6ca995fe"]]);export{Y as default};
//# sourceMappingURL=ProjectLogin.9e770067.js.map
