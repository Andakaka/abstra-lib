import{C as o}from"./Card.4dfad3d3.js";import{d as p,a8 as g,bM as d,b as r,bw as i,f as y}from"./vue-router.4417a734.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d54c2a58-2066-4db6-8fc8-84c31439bdb0",e._sentryDebugIdIdentifier="sentry-dbid-d54c2a58-2066-4db6-8fc8-84c31439bdb0")}catch{}})();const M=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),c=p({compatConfig:{MODE:3},name:"ACardMeta",props:M(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=d(a,e,"avatar"),v=d(a,e,"title"),f=d(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,b=f?r("div",{class:`${t.value}-meta-description`},[f]):null,D=m||b?r("div",{class:`${t.value}-meta-detail`},[m,b]):null;return r("div",{class:l},[C,D])}}}),_=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:_(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.0d452882.js.map
