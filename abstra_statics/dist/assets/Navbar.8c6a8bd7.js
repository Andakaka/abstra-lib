import{d as h,ek as A,r as B,u as e,o as s,c as i,bp as C,W as m,b as a,w as t,ax as r,bL as d,a as f,d4 as L,e6 as _,cH as w,ei as N,e9 as I,eL as D,aJ as g,R,Z as z,$ as S}from"./vue-router.90d4c520.js";import{a as $}from"./asyncComputed.de06baf7.js";import{G as V}from"./PhChats.vue.e6fc4d8d.js";import{F as T}from"./PhSignOut.vue.3f13fa28.js";import{C as E}from"./router.026cd7e0.js";import{a as k}from"./gateway.b7abc910.js";import{A as F}from"./index.062293b9.js";import{A as H}from"./Avatar.487b8393.js";import{B as P,A as j,b as q}from"./index.9b9ec797.js";import{B as G}from"./BookOutlined.5675c001.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="c7797a46-9369-4e6e-bed4-f21043c60a05",n._sentryDebugIdIdentifier="sentry-dbid-c7797a46-9369-4e6e-bed4-f21043c60a05")}catch{}})();const J={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},M={style:{display:"flex","flex-direction":"column",gap:"10px"}},O={style:{display:"flex",gap:"5px"}},U=h({__name:"LoginBlock",setup(n){function o(y){const b=y.split("@")[0];return N.exports.kebabCase(b).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const c=A(),{result:l,loading:p,refetch:x}=$(async()=>k.getAuthor());function v(){k.removeAuthor(),E.shutdown(),x(),c.push({name:"login"})}return(y,b)=>{const u=B("RouterLink");return e(p)?(s(),i(e(C),{key:0})):e(l)?(s(),m("div",J,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(V),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(w),{placement:"bottomRight"},{content:t(()=>[f("div",M,[a(e(L),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:v},{default:t(()=>[f("div",O,[a(e(T),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(F),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(H),{shape:"square"},{default:t(()=>[r(_(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(s(),i(e(d),{key:2},{default:t(()=>[a(u,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),W={class:"extra"},Z=h({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(o,c)=>(s(),i(e(q),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(s(),i(e(P),{key:0},{default:t(()=>[(s(!0),m(g,null,I(o.breadcrumb,(l,p)=>(s(),i(e(j),{key:p},{default:t(()=>[a(e(D),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):R("",!0)]),extra:t(()=>[f("div",W,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(G))]),default:t(()=>[o.$slots.default?z(o.$slots,"default",{key:0},void 0,!0):(s(),m(g,{key:1},[r("Docs")],64))]),_:3}),a(U)])]),_:3}))}});const ne=S(Z,[["__scopeId","data-v-5ef7b378"]]);export{ne as N};
//# sourceMappingURL=Navbar.8c6a8bd7.js.map
