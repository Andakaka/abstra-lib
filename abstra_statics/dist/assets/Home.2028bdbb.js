import{W as g}from"./Watermark.499d770f.js";import{i as h}from"./metadata.94cdc441.js";import{F as k}from"./PhArrowSquareOut.vue.d7ba5ee8.js";import{d as w,eI as x,f as b,u as e,W as m,b as o,w as r,R as v,o as s,c as p,ax as u,cV as f,aJ as C,ex as I,d1 as _,ey as D,eu as F,$ as T}from"./vue-router.4417a734.js";import{u as V}from"./workspaceStore.3e1ea797.js";import"./index.0d452882.js";import{C as W}from"./Card.4dfad3d3.js";import"./router.5c0ab92b.js";import"./PhBug.vue.0ad75fbb.js";import"./PhCheckCircle.vue.db31a6ec.js";import"./PhKanban.vue.1a4b0919.js";import"./PhWebhooksLogo.vue.53def32d.js";import"./api.7e5cedea.js";import"./runnerData.806bd783.js";import"./url.111d52bf.js";import"./TabPane.8566c8bd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a5c9b448-716e-48cd-830d-200956c9c650",t._sentryDebugIdIdentifier="sentry-dbid-a5c9b448-716e-48cd-830d-200956c9c650")}catch{}})();const z={key:0,class:"home-container"},B=w({__name:"Home",setup(t){const n=x(),c=V(),d=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(c).state.workspace?(s(),m("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[d.value.length===0?(s(),p(e(f),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[u(" There are no forms available for you. ")]),_:1})):(s(!0),m(C,{key:1},I(d.value,i=>(s(),p(e(W),{key:i.id,class:"form-card",onClick:H=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(D(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(f),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[u(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const U=T(B,[["__scopeId","data-v-2ee244f8"]]);export{U as default};
//# sourceMappingURL=Home.2028bdbb.js.map
