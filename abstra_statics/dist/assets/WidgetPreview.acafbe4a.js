import{d as k,e as B,W as P,o as n,c as u,w as f,b as A,aF as I,ec as S,ea as C,eU as D,u as y,bP as N,eZ as q,$ as W,ed as V,R as g,a as b,X as c,ee as v,ef as x,aR as w,q as E,t as $}from"./vue-router.7c54f186.js";import{S as F}from"./Steps.0639b282.js";import{W as L}from"./PlayerConfigProvider.e1d8395f.js";import"./index.5822cc41.js";import"./colorHelpers.cbcfc360.js";import"./index.ccfdcd18.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="40e9ba38-cade-475a-aa05-2b530651f06d",a._sentryDebugIdIdentifier="sentry-dbid-40e9ba38-cade-475a-aa05-2b530651f06d")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(a,{emit:t}){const d=a,l=B(null);return P(()=>{l.value&&d.action.setElement(l.value)}),(o,i)=>(n(),u(y(q),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",o.disabled?"disabled":""]),loading:o.loading,disabled:o.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[I(S(o.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const R=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},z={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(a){const t=V(),d=B([]);function l(e){return E[e]||$[e]||null}function o(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(o).filter(Boolean):[o(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(L,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u(F,{key:0,class:"steps","steps-info":{current:1,total:3}})):g("",!0),b("div",M,[b("div",O,[(n(!0),c(w,null,v(i(),(r,h)=>(n(),c("div",{key:h,class:"widget"},[(n(),u(x(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",z,[(n(!0),c(w,null,v(m(),r=>(n(),u(R,{key:r,"display-name":_(r).name,action:_(r)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const Q=W(J,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.acafbe4a.js.map
