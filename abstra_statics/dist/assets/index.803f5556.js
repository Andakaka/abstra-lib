import{C as o}from"./Card.8b1ab068.js";import{d as b,ah as g,bQ as d,b as r,bE as i,f as y}from"./vue-router.723a7ff4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d0f2ffd1-0f6f-4e3e-9358-f6b41d3b7f0e",e._sentryDebugIdIdentifier="sentry-dbid-d0f2ffd1-0f6f-4e3e-9358-f6b41d3b7f0e")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),c=b({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=d(a,e,"avatar"),u=d(a,e,"title"),v=d(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=u?r("div",{class:`${t.value}-meta-title`},[u]):null,p=v?r("div",{class:`${t.value}-meta-description`},[v]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),f=b({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=f;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(f.name,f),e};export{f as G,c as M};
//# sourceMappingURL=index.803f5556.js.map
