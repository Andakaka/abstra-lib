import{W as g}from"./Watermark.926e8182.js";import{i as h}from"./metadata.0fbcc1fc.js";import{F as k}from"./PhArrowSquareOut.vue.6b8c2166.js";import{d as w,eH as x,f as b,u as e,W as f,b as o,w as r,R as v,o as s,c as d,ax as m,cU as u,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.4f089fa7.js";import{u as T}from"./workspaceStore.33a0628d.js";import"./index.b91a92e1.js";import{C as W}from"./Card.708c2711.js";import"./router.ff1ad2ec.js";import"./PhCheckCircle.vue.2cba69be.js";import"./PhKanban.vue.e1b8bc79.js";import"./PhWebhooksLogo.vue.bc396d4d.js";import"./api.97fec139.js";import"./runnerData.1ff7c984.js";import"./url.a2ea222e.js";import"./TabPane.2700508f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="1c905a1d-9a2f-474d-9b2a-dd7f77a3f4a0",t._sentryDebugIdIdentifier="sentry-dbid-1c905a1d-9a2f-474d-9b2a-dd7f77a3f4a0")}catch{}})();const z={key:0,class:"home-container"},B=w({__name:"Home",setup(t){const n=x(),c=T(),p=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(c).state.workspace?(s(),f("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[p.value.length===0?(s(),d(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),f(C,{key:1},D(p.value,i=>(s(),d(e(W),{key:i.id,class:"form-card",onClick:N=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),d(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const O=H(B,[["__scopeId","data-v-2ee244f8"]]);export{O as default};
//# sourceMappingURL=Home.284f3508.js.map
