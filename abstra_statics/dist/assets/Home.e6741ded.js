import{i as b}from"./metadata.c02d6822.js";import{W as k}from"./Watermark.1740098f.js";import{F as h}from"./PhArrowSquareOut.vue.d8b09f07.js";import{d as w,eq as v,f as x,e as C,u as e,X as m,b as c,w as r,R as D,o as a,c as n,aF as f,d5 as y,aR as I,ee as z,dd as _,ef as F,ec as T,ea as B,$ as H}from"./vue-router.242d8088.js";import{u as L}from"./workspaceStore.badcba41.js";import"./index.0a3042b4.js";import{L as N}from"./LoadingOutlined.9e99c826.js";import{C as R}from"./Card.e99acec7.js";import"./PhBug.vue.97c4cb30.js";import"./PhCheckCircle.vue.ab9d572b.js";import"./PhKanban.vue.9364bb54.js";import"./PhWebhooksLogo.vue.d91f8891.js";import"./url.c6ccd98b.js";import"./colorHelpers.e0593aae.js";import"./TabPane.eef6d1c3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="0a5b5e99-3319-4b2d-bf17-ab82edae513d",o._sentryDebugIdIdentifier="sentry-dbid-0a5b5e99-3319-4b2d-bf17-ab82edae513d")}catch{}})();const S={key:0,class:"home-container"},V=w({__name:"Home",setup(o){const i=v(),l=L(),u=x(()=>{var s;return((s=l.state.workspace)==null?void 0:s.sidebar.filter(p=>p.id!=="home"))||[]}),d=C(null),g=async(s,p)=>{d.value=p,await i.push({path:`/${s}`}),d.value=null};return(s,p)=>e(l).state.workspace?(a(),m("div",S,[c(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[u.value.length===0?(a(),n(e(y),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[f(" There are no forms available for you. ")]),_:1})):(a(!0),m(I,{key:1},z(u.value,t=>(a(),n(e(R),{key:t.id,class:B(["form-card",{loading:d.value===t.id}]),"body-style":{cursor:"pointer"},onClick:W=>g(t.path,t.id)},{default:r(()=>[c(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(a(),n(F(e(b)(t.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),c(e(y),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[f(T(t.name),1)]),_:2},1024),d.value!==t.id?(a(),n(e(h),{key:0,size:"20"})):(a(),n(e(N),{key:1,style:{"font-size":"20px"}}))]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1}),c(k,{class:"watermark","page-id":"home",locale:e(l).state.workspace.language},null,8,["locale"])])):D("",!0)}});const Z=H(V,[["__scopeId","data-v-060376d1"]]);export{Z as default};
//# sourceMappingURL=Home.e6741ded.js.map
