import{d as y,e8 as b,D as m,X as d,a as c,u as g,Y as r,Z as p,R as w,e9 as h,ea as S,o as l,$ as v,e as k,r as C,b as u,w as I,aR as D}from"./vue-router.fa6ba029.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e5e01f95-5733-4f8a-9d05-c622c1dc7322",e._sentryDebugIdIdentifier="sentry-dbid-e5e01f95-5733-4f8a-9d05-c622c1dc7322")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(l(),d("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[c("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(l(),d("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),c("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(V,[["__scopeId","data-v-4d878495"]]),O=["src"],R=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return l(),d(D,null,[u(n,{class:"router"}),u(M,{ref_key:"modal",ref:o},{content:I(()=>[c("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const x=v(R,[["__scopeId","data-v-f5f64833"]]);export{x as default};
//# sourceMappingURL=Home.07c70d44.js.map
