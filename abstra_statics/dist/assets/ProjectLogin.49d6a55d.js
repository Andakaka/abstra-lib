import{B as _}from"./BaseLayout.6554febb.js";import{L as y}from"./Logo.a21a2cf3.js";import{d as u,D as m,K as v,$ as p,aR as g,aS as b,o as f,W as h,a as s,X as n,ev as w,eI as S,V as L,c as k,w as r,b as i,u as I}from"./vue-router.4417a734.js";import{u as x}from"./editor.f6db7727.js";import{b as B}from"./index.9af46941.js";import"./router.5c0ab92b.js";import"./linters.2ac3fe02.js";import"./asyncComputed.f9aa56a3.js";import"./index.c70e4f4e.js";import"./Avatar.1240cf82.js";import"./index.467b6d22.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b94fa0c0-6387-4c85-8c1d-0499f48cf8d2",e._sentryDebugIdIdentifier="sentry-dbid-b94fa0c0-6387-4c85-8c1d-0499f48cf8d2")}catch{}})();const $=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...v(o)}}});const D={class:"v-spinner"};function P(e,o,a,c,d,l){return g((f(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(f(),k(_,null,{navbar:r(()=>[i(I(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i(R)])]),_:1}))}});const X=p(j,[["__scopeId","data-v-6ca995fe"]]);export{X as default};
//# sourceMappingURL=ProjectLogin.49d6a55d.js.map
