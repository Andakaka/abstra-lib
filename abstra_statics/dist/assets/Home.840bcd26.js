import{W as g}from"./Watermark.9e70c53e.js";import{i as h}from"./metadata.556d883d.js";import{F as k}from"./PhArrowSquareOut.vue.8e94edf9.js";import{d as w,ek as x,f as b,u as e,W as f,b as o,w as r,R as v,o as s,c as i,ax as m,d1 as u,aJ as C,e9 as D,d9 as _,ea as I,e6 as F,$ as T}from"./vue-router.4ef05375.js";import{u as W}from"./workspaceStore.430fece1.js";import"./index.2e998341.js";import{C as z}from"./Card.67ad3d90.js";import"./PhBug.vue.4d1a18db.js";import"./PhCheckCircle.vue.f884a646.js";import"./PhKanban.vue.ad84d679.js";import"./PhWebhooksLogo.vue.5b38d592.js";import"./url.b3a67b9d.js";import"./TabPane.0bb6765d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="3cf71dd7-66e8-4210-a3d3-20f606f4064d",t._sentryDebugIdIdentifier="sentry-dbid-3cf71dd7-66e8-4210-a3d3-20f606f4064d")}catch{}})();const B={key:0,class:"home-container"},H=w({__name:"Home",setup(t){const n=x(),c=W(),p=b(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(c).state.workspace?(s(),f("div",B,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[p.value.length===0?(s(),i(e(u),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[m(" There are no forms available for you. ")]),_:1})):(s(!0),f(C,{key:1},D(p.value,d=>(s(),i(e(z),{key:d.id,class:"form-card",onClick:N=>y(d.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),i(I(e(h)(d.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(u),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[m(F(d.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const M=T(H,[["__scopeId","data-v-2ee244f8"]]);export{M as default};
//# sourceMappingURL=Home.840bcd26.js.map
