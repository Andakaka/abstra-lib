import{i as g}from"./metadata.df7ae857.js";import{W as h}from"./Watermark.0c5b9466.js";import{F as k}from"./PhArrowSquareOut.vue.1ca6c931.js";import{d as b,eq as w,f as x,u as e,X as d,b as o,w as r,R as v,o as s,c as p,aF as m,d7 as u,aR as C,ee as D,df as _,ef as I,ec as F,$ as T}from"./vue-router.de4299d2.js";import{u as z}from"./workspaceStore.8eef0e90.js";import"./index.301cbd74.js";import{C as B}from"./Card.ccef518c.js";import"./PhBug.vue.481a2361.js";import"./PhCheckCircle.vue.54daedad.js";import"./PhKanban.vue.15fd6ae2.js";import"./PhWebhooksLogo.vue.3f8061a2.js";import"./url.8fbb8311.js";import"./colorHelpers.2b97f396.js";import"./TabPane.9a86d2a6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="8a379323-2ef0-4e2e-8bf0-4c56ea5cefb4",t._sentryDebugIdIdentifier="sentry-dbid-8a379323-2ef0-4e2e-8bf0-4c56ea5cefb4")}catch{}})();const H={key:0,class:"home-container"},N=b({__name:"Home",setup(t){const n=w(),c=z(),l=x(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(f=>f.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,f)=>e(c).state.workspace?(s(),d("div",H,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[l.value.length===0?(s(),p(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),d(C,{key:1},D(l.value,i=>(s(),p(e(B),{key:i.id,class:"form-card",onClick:R=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(g)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(h,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const M=T(N,[["__scopeId","data-v-a0bfe546"]]);export{M as default};
//# sourceMappingURL=Home.1e90e931.js.map
