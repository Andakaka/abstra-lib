import{d as k,e as B,W as S,o as n,c as u,w as p,b as A,aF as I,ec as P,ea as C,eU as D,u as y,bS as N,eZ as q,$ as W,ed as V,R as g,a as b,X as c,ee as v,ef as x,aR as w,q as E,t as $}from"./vue-router.ff326466.js";import{S as F}from"./Steps.da320145.js";import{W as L}from"./PlayerConfigProvider.8cd3fb3e.js";import"./colorHelpers.e1700088.js";import"./index.99014f99.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e88f6845-fd2d-4786-9b04-dfcd434cea07",o._sentryDebugIdIdentifier="sentry-dbid-e88f6845-fd2d-4786-9b04-dfcd434cea07")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return S(()=>{l.value&&d.action.setElement(l.value)}),(r,i)=>(n(),u(y(q),null,{default:p(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=f=>t("click")),onKeydown:i[1]||(i[1]=D(f=>t("click"),["enter"]))},{default:p(()=>[I(P(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const R=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},z={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(o){const t=V(),d=B([]);function l(e){return E[e]||$[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function f(){return t.query.steps==="true"}function _(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const m=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(L,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:p(()=>[f()?(n(),u(F,{key:0,class:"steps","steps-info":{current:1,total:3}})):g("",!0),b("div",M,[b("div",O,[(n(!0),c(w,null,v(i(),(a,h)=>(n(),c("div",{key:h,class:"widget"},[(n(),u(x(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),_().length?(n(),c("div",z,[(n(!0),c(w,null,v(_(),a=>(n(),u(R,{key:a,"display-name":m(a).name,action:m(a)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const H=W(J,[["__scopeId","data-v-0c6cef1d"]]);export{H as default};
//# sourceMappingURL=WidgetPreview.21a8fb4c.js.map
