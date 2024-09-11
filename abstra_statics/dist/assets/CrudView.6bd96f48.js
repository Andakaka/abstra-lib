import{A as R,a as P,r as z}from"./router.7831db01.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.7fd4613d.js";import{i as O}from"./url.8c39f2db.js";import{G as x}from"./PhDotsThreeVertical.vue.b7d8d096.js";import{d as M,D as E,e as S,c as r,w as n,u as s,cL as j,o,b as p,aF as y,ec as d,d9 as $,X as V,ee as N,cy as Y,bK as G,cD as Q,aA as W,aR as B,cS as X,R as m,cx as Z,cK as q,f as H,r as J,df as U,db as K,Z as w,bS as ee,cW as te,Y as ae,da as A,d3 as le,bQ as ne,by as se,bw as oe,a as ue,ef as re,cN as ce,bx as ie,$ as pe}from"./vue-router.ff326466.js";import{A as ye}from"./index.6ed30515.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[f]="35c86268-1802-483d-9f34-e6eac1ac4c3e",v._sentryDebugIdIdentifier="sentry-dbid-35c86268-1802-483d-9f34-e6eac1ac4c3e")}catch{}})();const de=M({__name:"CreationModal",props:{entityName:{},fields:{},create:{type:Function}},setup(v,{expose:f}){const k=v,I=`Create a new ${k.entityName}`,c=E({inputValue:{}}),g=S(!1),T=()=>g.value=!0,e=()=>g.value=!1,C=async()=>{try{await k.create(c.inputValue),e()}catch(a){a instanceof Error&&j.error({message:"Failed to create",description:a.message})}},_=(a,l)=>{const t=a.target.value,i=k.fields.find(b=>b.key===l);i!=null&&i.format?c.inputValue[l]=i.format(t):c.inputValue[l]=t},h=(a,l)=>{const t=a.target.value,i=k.fields.find(b=>b.key===l);i!=null&&i.blur?c.inputValue[l]=i.blur(t):c.inputValue[l]=t};return f({open:T,close:e}),(a,l)=>(o(),r(s(q),{open:g.value,title:I,onCancel:e,onOk:C},{default:n(()=>[p(s($),null,{default:n(()=>[y(" You may edit the "+d(a.entityName)+" name afterwards at Settings. ",1)]),_:1}),p(s(Z),{layout:"vertical"},{default:n(()=>[(o(!0),V(B,null,N(a.fields,t=>{var i;return o(),r(s(Y),{key:t.key,label:t.label,help:(i=t.hint)==null?void 0:i.call(t,c.inputValue[t.key])},{default:n(()=>{var b,D,F;return[!t.type||t.type==="text"||t.type==="password"?(o(),r(s(G),{key:0,value:c.inputValue[t.key],"onUpdate:value":u=>c.inputValue[t.key]=u,placeholder:(b=t.placeholder)!=null?b:"",type:(D=t.type)!=null?D:"text",onInput:u=>_(u,t.key),onBlur:u=>h(u,t.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):t.type==="multiline-text"?(o(),r(s(Q),{key:1,value:c.inputValue[t.key],"onUpdate:value":u=>c.inputValue[t.key]=u,placeholder:(F=t.placeholder)!=null?F:"",onInput:u=>_(u,t.key),onBlur:u=>h(u,t.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(t.type)?(o(),r(s(W),{key:2,value:c.inputValue[t.key],"onUpdate:value":u=>c.inputValue[t.key]=u},{default:n(()=>[(o(!0),V(B,null,N(t.type,u=>(o(),r(s(X),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:n(()=>[y(d(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):m("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),fe={class:"action-item"},me=M({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},create:{type:Function},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},setup(v){const f=v,k=S(null),I=async()=>{var e;f.fields?(e=k.value)==null||e.open():f.create&&await f.create({})},c=S(!1);async function g(e,C){var _;if(!c.value){c.value=!0;try{"onClick"in e?await((_=e.onClick)==null?void 0:_.call(e,{key:C.key})):"link"in e&&(typeof e.link=="string"&&O(e.link)?open(e.link,"_blank"):z.push(e.link))}finally{c.value=!1}}}const T=H(()=>({"--columnCount":`${f.table.columns.length}`}));return(e,C)=>{const _=J("RouterLink");return o(),V(B,null,[p(s(ye),{direction:"vertical",class:"crud-view"},{default:n(()=>{var h;return[p(s(U),{align:"center",justify:"space-between"},{default:n(()=>[e.title?(o(),r(s(K),{key:0},{default:n(()=>[y(d(e.title),1)]),_:1})):m("",!0),w(e.$slots,"more",{},void 0,!0)]),_:3}),e.description?(o(),r(s($),{key:0},{default:n(()=>[y(d(e.description)+" ",1),w(e.$slots,"description",{},void 0,!0),e.docsPath?(o(),r(L,{key:0,path:e.docsPath},null,8,["path"])):m("",!0)]),_:3})):m("",!0),p(s(U),{gap:"middle"},{default:n(()=>[e.createButtonText?(o(),r(s(ee),{key:0,type:"primary",onClick:I},{default:n(()=>[y(d(e.createButtonText),1)]),_:1})):m("",!0),w(e.$slots,"secondary",{},void 0,!0)]),_:3}),w(e.$slots,"extra",{},void 0,!0),p(s(te),{size:"small",style:ae(T.value),"data-source":e.table.rows,loading:c.value||e.loading&&!e.live,height:400,columns:(h=e.table.columns)==null?void 0:h.map(({name:a,align:l},t,i)=>({title:a,key:t,align:l!=null?l:"center"}))},{emptyText:n(()=>[y(d(e.emptyTitle),1)]),headerCell:n(a=>[y(d(a.title),1)]),bodyCell:n(({column:{key:a},record:l})=>[l.cells[a].type==="slot"?w(e.$slots,l.cells[a].key,{key:0,payload:l.cells[a].payload},void 0,!0):(o(),r(s(ce),{key:1,open:l.cells[a].hover?void 0:!1},{content:n(()=>[p(s($),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:l.cells[a].hover},null,8,["content"])]),default:n(()=>[l.cells[a].type==="text"?(o(),r(s(A),{key:0,secondary:l.cells[a].secondary,type:l.cells[a].contentType,code:l.cells[a].code},{default:n(()=>[y(d(l.cells[a].text),1)]),_:2},1032,["secondary","type","code"])):l.cells[a].type==="secret"?(o(),r(s(A),{key:1,copyable:{text:l.cells[a].text}},{default:n(()=>[y(" ******** ")]),_:2},1032,["copyable"])):l.cells[a].type==="tag"?(o(),r(s(le),{key:2,color:l.cells[a].tagColor},{default:n(()=>[y(d(l.cells[a].text),1)]),_:2},1032,["color"])):l.cells[a].type==="link"?(o(),r(_,{key:3,to:l.cells[a].to},{default:n(()=>[y(d(l.cells[a].text),1)]),_:2},1032,["to"])):l.cells[a].type==="actions"?(o(),r(s(ne),{key:4},{overlay:n(()=>[p(s(se),{disabled:c.value},{default:n(()=>[(o(!0),V(B,null,N(l.cells[a].actions.filter(t=>!t.hide),(t,i)=>(o(),r(s(oe),{key:i,danger:t.dangerous,onClick:b=>g(t,l)},{default:n(()=>[ue("div",fe,[t.icon?(o(),r(re(t.icon),{key:0})):m("",!0),p(s(A),null,{default:n(()=>[y(d(t.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:n(()=>[p(s(x),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):m("",!0)]),_:2},1032,["open"]))]),footer:n(()=>[e.live?(o(),r(s(P),{key:0,justify:"end",gutter:10},{default:n(()=>[p(s(R),null,{default:n(()=>[p(s(ie),{size:"small"})]),_:1}),p(s(R),null,{default:n(()=>[p(s(A),null,{default:n(()=>[y(" auto updating ")]),_:1})]),_:1})]),_:1})):m("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),e.fields&&e.create?(o(),r(de,{key:0,ref_key:"modalRef",ref:k,fields:e.fields,"entity-name":e.entityName,create:e.create},null,8,["fields","entity-name","create"])):m("",!0)],64)}}});const we=pe(me,[["__scopeId","data-v-f75c317c"]]);export{we as C};
//# sourceMappingURL=CrudView.6bd96f48.js.map
