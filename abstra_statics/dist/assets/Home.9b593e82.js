import{W as g}from"./Watermark.fe1c054f.js";import{i as h}from"./metadata.59a2f863.js";import{F as k}from"./PhArrowSquareOut.vue.caae6e2d.js";import{d as w,eH as b,f as x,u as e,W as m,b as o,w as r,R as v,o as s,c as p,ax as f,cU as u,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.6bf58d5e.js";import{u as T}from"./workspaceStore.1c9bdf75.js";import"./index.c6889742.js";import{C as W}from"./Card.32bc43eb.js";import"./router.d2520ff3.js";import"./PhBug.vue.dc700425.js";import"./PhCheckCircle.vue.894f41da.js";import"./PhKanban.vue.e4feb556.js";import"./PhWebhooksLogo.vue.659796c6.js";import"./api.4a62832b.js";import"./runnerData.4bf49c3a.js";import"./url.305bd866.js";import"./TabPane.5bb2c7e6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="fbaa7396-3c1e-4eb5-a323-7ddf90e370e3",t._sentryDebugIdIdentifier="sentry-dbid-fbaa7396-3c1e-4eb5-a323-7ddf90e370e3")}catch{}})();const z={key:0,class:"home-container"},B=w({__name:"Home",setup(t){const n=b(),i=T(),d=x(()=>{var a;return((a=i.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(i).state.workspace?(s(),m("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[d.value.length===0?(s(),p(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(s(!0),m(C,{key:1},D(d.value,c=>(s(),p(e(W),{key:c.id,class:"form-card",onClick:N=>y(c.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(h)(c.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(F(c.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(i).state.workspace.language},null,8,["locale"])])):v("",!0)}});const Q=H(B,[["__scopeId","data-v-2ee244f8"]]);export{Q as default};
//# sourceMappingURL=Home.9b593e82.js.map
