import{i as k}from"./metadata.99b98ca2.js";import{W as h}from"./Watermark.2c70c0e2.js";import{F as b}from"./PhArrowSquareOut.vue.c350c99c.js";import{d as w,eq as v,f as x,e as C,u as e,X as m,b as c,w as r,R as D,o as t,c as n,aF as f,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.7c54f186.js";import{u as L}from"./workspaceStore.004e654c.js";import"./index.06cd4e0e.js";import{L as N}from"./LoadingOutlined.546bbab5.js";import{C as R}from"./Card.eec7aa2d.js";import"./PhBug.vue.ee46ed66.js";import"./PhCheckCircle.vue.88697476.js";import"./PhKanban.vue.228527b9.js";import"./PhWebhooksLogo.vue.ab77448f.js";import"./url.d360a955.js";import"./colorHelpers.cbcfc360.js";import"./TabPane.821a14ec.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="75774b8e-83f1-406a-b4aa-2a3b1e7d0461",o._sentryDebugIdIdentifier="sentry-dbid-75774b8e-83f1-406a-b4aa-2a3b1e7d0461")}catch{}})();const S={key:0,class:"home-container"},V=w({__name:"Home",setup(o){const i=v(),l=L(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(p=>p.id!=="home"))||[]}),d=C(null),g=async(s,p)=>{d.value=p,await i.push({path:`/${s}`}),d.value=null};return(s,p)=>e(l).state.workspace?(t(),m("div",S,[c(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(t(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(t(!0),m(I,{key:1},z(u.value,a=>(t(),n(e(R),{key:a.id,class:B(["form-card",{loading:d.value===a.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(a.path,a.id)},{default:r(()=>[c(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(t(),n(F(e(k)(a.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),c(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(T(a.name),1)]),_:2},1024),d.value!==a.id?(t(),n(e(b),{key:0,size:"20"})):(t(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),c(h,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.2f635edf.js.map
