import{i as k}from"./metadata.498e4b1b.js";import{W as h}from"./Watermark.69c7e613.js";import{F as b}from"./PhArrowSquareOut.vue.a50218e6.js";import{d as w,eq as v,f as x,e as C,u as e,X as m,b as p,w as r,R as D,o as t,c as n,aF as f,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.d3011e56.js";import{u as L}from"./workspaceStore.2d455729.js";import"./index.cbc888fe.js";import{L as N}from"./LoadingOutlined.a0324898.js";import{C as R}from"./Card.09360ba2.js";import"./PhBug.vue.172bea79.js";import"./PhCheckCircle.vue.e21adf45.js";import"./PhKanban.vue.c3e15b05.js";import"./PhWebhooksLogo.vue.f34ed213.js";import"./url.4b8c8e77.js";import"./colorHelpers.de45e804.js";import"./TabPane.c65a522b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="e4c0d296-47ad-4ef6-a1b3-a0a5c0c4bb23",o._sentryDebugIdIdentifier="sentry-dbid-e4c0d296-47ad-4ef6-a1b3-a0a5c0c4bb23")}catch{}})();const S={key:0,class:"home-container"},V=w({__name:"Home",setup(o){const i=v(),l=L(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(d=>d.id!=="home"))||[]}),c=C(null),g=async(s,d)=>{c.value=d,await i.push({path:`/${s}`}),c.value=null};return(s,d)=>e(l).state.workspace?(t(),m("div",S,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(t(!0),m(I,{key:1},z(u.value,a=>(t(),n(e(R),{key:a.id,class:B(["form-card",{loading:c.value===a.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(F(e(k)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(T(a.name),1)]),_:2},1024),c.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.3b3c4bbd.js.map
