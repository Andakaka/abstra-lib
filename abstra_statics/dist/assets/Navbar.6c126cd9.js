import{d as h,eq as A,r as B,u as e,o as s,c as i,bx as C,X as m,b as a,w as t,aF as r,bS as d,a as f,da as N,ec as _,cN as w,em as I,ee as L,f0 as R,aR as g,R as D,Z as S,$ as z}from"./vue-router.b4931b0a.js";import{a as $}from"./asyncComputed.064bbccc.js";import{G as V}from"./PhChats.vue.309f29cf.js";import{F}from"./PhSignOut.vue.1aeddd15.js";import{C as T}from"./router.6a48b86c.js";import{a as k}from"./gateway.741fa7d8.js";import{A as q}from"./index.37a9d15a.js";import{A as E}from"./Avatar.a1071fb5.js";import{B as P,A as j,b as G}from"./index.32a3874c.js";import{B as H}from"./BookOutlined.3373d010.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="33fd11a2-b704-43b2-919a-826e2b7b5a45",n._sentryDebugIdIdentifier="sentry-dbid-33fd11a2-b704-43b2-919a-826e2b7b5a45")}catch{}})();const M={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},O={style:{display:"flex","flex-direction":"column",gap:"10px"}},U={style:{display:"flex",gap:"5px"}},X=h({__name:"LoginBlock",setup(n){function o(b){const y=b.split("@")[0];return I.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:l,loading:u,refetch:x}=$(async()=>k.getAuthor());function v(){k.removeAuthor(),T.shutdown(),x(),c.push({name:"login"})}return(b,y)=>{const p=B("RouterLink");return e(u)?(s(),i(e(C),{key:0})):e(l)?(s(),m("div",M,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(V),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(w),{placement:"bottomRight"},{content:t(()=>[f("div",O,[a(e(N),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:v},{default:t(()=>[f("div",U,[a(e(F),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(q),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(E),{shape:"square"},{default:t(()=>[r(_(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(s(),i(e(d),{key:2},{default:t(()=>[a(p,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),Z={class:"extra"},J=h({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(o,c)=>(s(),i(e(G),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(s(),i(e(P),{key:0},{default:t(()=>[(s(!0),m(g,null,L(o.breadcrumb,(l,u)=>(s(),i(e(j),{key:u},{default:t(()=>[a(e(R),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),extra:t(()=>[f("div",Z,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(H))]),default:t(()=>[o.$slots.default?S(o.$slots,"default",{key:0},void 0,!0):(s(),m(g,{key:1},[r("Docs")],64))]),_:3}),a(X)])]),_:3}))}});const ne=z(J,[["__scopeId","data-v-5ef7b378"]]);export{ne as N};
//# sourceMappingURL=Navbar.6c126cd9.js.map
