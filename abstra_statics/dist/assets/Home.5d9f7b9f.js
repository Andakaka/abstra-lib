import{d as y,e8 as v,D as m,X as c,a as l,u as g,Y as r,Z as p,R as w,e9 as h,ea as S,o as d,$ as b,e as k,r as C,b as u,w as I,aR as D}from"./vue-router.81a421ec.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e46ef31e-5c01-4b2a-a7fe-2a239c54e7cb",e._sentryDebugIdIdentifier="sentry-dbid-e46ef31e-5c01-4b2a-a7fe-2a239c54e7cb")}catch{}})();const V=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=b(V,[["__scopeId","data-v-4d878495"]]),O=["src"],R=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("RouterView");return d(),c(D,null,[u(n,{class:"router"}),u(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const x=b(R,[["__scopeId","data-v-f5f64833"]]);export{x as default};
//# sourceMappingURL=Home.5d9f7b9f.js.map
