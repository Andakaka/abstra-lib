import{W as g}from"./Watermark.0e781c21.js";import{i as h}from"./metadata.d370f6a9.js";import{F as k}from"./PhArrowSquareOut.vue.3f1dba0e.js";import{d as b,eH as w,f as x,u as e,W as f,b as o,w as r,R as v,o as s,c as p,ax as m,cU as u,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.e425a84b.js";import{u as T}from"./workspaceStore.ed5c091c.js";import"./index.909ab75d.js";import{C as W}from"./Card.1c9735a9.js";import"./router.6cffb65f.js";import"./PhBug.vue.f13d53d6.js";import"./PhCheckCircle.vue.e699e75a.js";import"./PhKanban.vue.1ac5ba07.js";import"./PhWebhooksLogo.vue.947fd827.js";import"./api.e036e6c3.js";import"./runnerData.d185ebf8.js";import"./url.fe950e3a.js";import"./TabPane.1c4151be.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="03dbe951-65a7-4bda-bf6a-96faa5cf5fea",t._sentryDebugIdIdentifier="sentry-dbid-03dbe951-65a7-4bda-bf6a-96faa5cf5fea")}catch{}})();const z={key:0,class:"home-container"},B=b({__name:"Home",setup(t){const n=w(),i=T(),d=x(()=>{var a;return((a=i.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(i).state.workspace?(s(),f("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[d.value.length===0?(s(),p(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),f(C,{key:1},D(d.value,c=>(s(),p(e(W),{key:c.id,class:"form-card",onClick:N=>y(c.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(h)(c.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(c.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(i).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=H(B,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.4fa060e1.js.map
