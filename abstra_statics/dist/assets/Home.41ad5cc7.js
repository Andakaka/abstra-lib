import{i as k}from"./metadata.12bb16ad.js";import{W as h}from"./Watermark.d9d26897.js";import{F as b}from"./PhArrowSquareOut.vue.06e9e0bf.js";import{d as w,eq as v,f as x,e as C,u as e,X as u,b as p,w as r,R as D,o as t,c as n,aF as m,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.7f70d690.js";import{u as L}from"./workspaceStore.d96a06ec.js";import"./index.28e2b908.js";import{L as N}from"./LoadingOutlined.225173cb.js";import{C as R}from"./Card.1878e86e.js";import"./PhBug.vue.691f4ab3.js";import"./PhCheckCircle.vue.d4ebe9a9.js";import"./PhKanban.vue.8bd9f168.js";import"./PhWebhooksLogo.vue.316e8588.js";import"./url.874a6f3b.js";import"./colorHelpers.ffa30104.js";import"./TabPane.c5308c05.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="fffbfe88-4223-468e-8cd9-1ad60aa93a0b",o._sentryDebugIdIdentifier="sentry-dbid-fffbfe88-4223-468e-8cd9-1ad60aa93a0b")}catch{}})();const S={key:0,class:"home-container"},V=w({__name:"Home",setup(o){const i=v(),l=L(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(t(),u("div",S,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(t(!0),u(I,{key:1},z(f.value,a=>(t(),n(e(R),{key:a.id,class:B(["form-card",{loading:d.value===a.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(a.path,a.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(F(e(k)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(T(a.name),1)]),_:2},1024),d.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.41ad5cc7.js.map
