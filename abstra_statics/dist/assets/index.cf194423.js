import{C as o}from"./Card.d180b1c5.js";import{d as g,a8 as b,bM as c,b as r,bw as i,f as y}from"./vue-router.693c9aae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ec6087a5-c34c-4e0d-8e62-3ca440285560",e._sentryDebugIdIdentifier="sentry-dbid-ec6087a5-c34c-4e0d-8e62-3ca440285560")}catch{}})();const M=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),d=g({compatConfig:{MODE:3},name:"ACardMeta",props:M(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=c(a,e,"avatar"),v=c(a,e,"title"),m=c(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,f=v?r("div",{class:`${t.value}-meta-title`},[v]):null,p=m?r("div",{class:`${t.value}-meta-description`},[m]):null,D=f||p?r("div",{class:`${t.value}-meta-detail`},[f,p]):null;return r("div",{class:l},[C,D])}}}),_=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=g({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:_(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=d;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(d.name,d),e.component(u.name,u),e};export{u as G,d as M};
//# sourceMappingURL=index.cf194423.js.map
