import{C as o}from"./Card.8ed3806d.js";import{d as g,a8 as b,bM as i,b as r,bw as d,f as y}from"./vue-router.eed3d3bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0139af52-d514-4701-a187-a1c309806d44",e._sentryDebugIdIdentifier="sentry-dbid-0139af52-d514-4701-a187-a1c309806d44")}catch{}})();const M=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),c=g({compatConfig:{MODE:3},name:"ACardMeta",props:M(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),v=i(a,e,"title"),f=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,p=f?r("div",{class:`${t.value}-meta-description`},[f]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),_=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=g({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:_(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.48bef0d8.js.map
