import{i as k}from"./metadata.bbb088a5.js";import{W as h}from"./Watermark.3b490351.js";import{F as w}from"./PhArrowSquareOut.vue.1c81607c.js";import{d as v,eq as b,f as x,e as C,u as e,X as u,b as p,w as r,R as D,o as a,c as n,aF as m,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.68579532.js";import{u as L}from"./workspaceStore.2af49844.js";import"./index.afc46cf9.js";import{L as N}from"./LoadingOutlined.1cb508ba.js";import{C as R}from"./Card.7e15f5ca.js";import"./PhBug.vue.152594c8.js";import"./PhCheckCircle.vue.e75f0350.js";import"./PhKanban.vue.29808c82.js";import"./PhWebhooksLogo.vue.09436db9.js";import"./url.fb8126f0.js";import"./colorHelpers.bf1a2a29.js";import"./TabPane.93b5910e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="cf53feea-de2e-4533-9da1-9b225729f6f1",o._sentryDebugIdIdentifier="sentry-dbid-cf53feea-de2e-4533-9da1-9b225729f6f1")}catch{}})();const S={key:0,class:"home-container"},V=v({__name:"Home",setup(o){const i=b(),l=L(),f=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(c=>c.id!=="home"))||[]}),d=C(null),g=async(s,c)=>{d.value=c,await i.push({path:`/${s}`}),d.value=null};return(s,c)=>e(l).state.workspace?(a(),u("div",S,[p(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[f.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(a(!0),u(I,{key:1},z(f.value,t=>(a(),n(e(R),{key:t.id,class:B(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(t.path,t.id)},{default:r(()=>[p(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(F(e(k)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),p(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(T(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(w),{key:0,size:"20"})):(a(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),p(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.8cfabfda.js.map
