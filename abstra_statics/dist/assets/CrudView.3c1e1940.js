import{A as U,a as M,r as z}from"./router.145586c0.js";import{_ as O}from"./DocsButton.vue_vue_type_script_setup_true_lang.d6c16905.js";import{i as E}from"./url.81eb06c7.js";import{G as L}from"./PhDotsThreeVertical.vue.23e57b83.js";import{d as P,D as j,e as $,c as r,w as n,u as s,cI as x,o,b as c,aF as d,ec as y,d7 as N,X as V,ee as S,cv as H,bH as Y,cA as G,aA as Q,aR as B,cQ as X,R as m,cu as Z,cH as q,f as J,r as W,dd as R,d9 as K,Z as w,bP as ee,cU as te,Y as ae,d8 as A,d1 as le,bN as ne,by as se,bw as oe,a as ue,ef as re,cK as ie,bx as pe,$ as ce}from"./vue-router.7393b5b9.js";import{B as de}from"./Badge.cd0d78d1.js";import{A as ye}from"./index.affcb387.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[f]="844a5165-6a0e-4fbb-b813-119942dfeb54",v._sentryDebugIdIdentifier="sentry-dbid-844a5165-6a0e-4fbb-b813-119942dfeb54")}catch{}})();const fe=P({__name:"CreationModal",props:{entityName:{},fields:{},create:{type:Function}},setup(v,{expose:f}){const b=v,I=`Create a new ${b.entityName}`,i=j({inputValue:{}}),g=$(!1),T=()=>g.value=!0,e=()=>g.value=!1,C=async()=>{try{await b.create(i.inputValue),e()}catch(a){a instanceof Error&&x.error({message:"Failed to create",description:a.message})}},k=(a,l)=>{const t=a.target.value,p=b.fields.find(_=>_.key===l);p!=null&&p.format?i.inputValue[l]=p.format(t):i.inputValue[l]=t},h=(a,l)=>{const t=a.target.value,p=b.fields.find(_=>_.key===l);p!=null&&p.blur?i.inputValue[l]=p.blur(t):i.inputValue[l]=t};return f({open:T,close:e}),(a,l)=>(o(),r(s(q),{open:g.value,title:I,onCancel:e,onOk:C},{default:n(()=>[c(s(N),null,{default:n(()=>[d(" You may edit the "+y(a.entityName)+" name afterwards at Settings. ",1)]),_:1}),c(s(Z),{layout:"vertical"},{default:n(()=>[(o(!0),V(B,null,S(a.fields,t=>{var p;return o(),r(s(H),{key:t.key,label:t.label,help:(p=t.hint)==null?void 0:p.call(t,i.inputValue[t.key])},{default:n(()=>{var _,D,F;return[!t.type||t.type==="text"||t.type==="password"?(o(),r(s(Y),{key:0,value:i.inputValue[t.key],"onUpdate:value":u=>i.inputValue[t.key]=u,placeholder:(_=t.placeholder)!=null?_:"",type:(D=t.type)!=null?D:"text",onInput:u=>k(u,t.key),onBlur:u=>h(u,t.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):t.type==="multiline-text"?(o(),r(s(G),{key:1,value:i.inputValue[t.key],"onUpdate:value":u=>i.inputValue[t.key]=u,placeholder:(F=t.placeholder)!=null?F:"",onInput:u=>k(u,t.key),onBlur:u=>h(u,t.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(t.type)?(o(),r(s(Q),{key:2,value:i.inputValue[t.key],"onUpdate:value":u=>i.inputValue[t.key]=u},{default:n(()=>[(o(!0),V(B,null,S(t.type,u=>(o(),r(s(X),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:n(()=>[d(y(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):m("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},ve=P({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},create:{type:Function},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},setup(v){const f=v,b=$(null),I=async()=>{var e;f.fields?(e=b.value)==null||e.open():f.create&&await f.create({})},i=$(!1);async function g(e,C){var k;if(!i.value){i.value=!0;try{"onClick"in e?await((k=e.onClick)==null?void 0:k.call(e,{key:C.key})):"link"in e&&(typeof e.link=="string"&&E(e.link)?open(e.link,"_blank"):z.push(e.link))}finally{i.value=!1}}}const T=J(()=>({"--columnCount":`${f.table.columns.length}`}));return(e,C)=>{const k=W("RouterLink");return o(),V(B,null,[c(s(ye),{direction:"vertical",class:"crud-view"},{default:n(()=>{var h;return[c(s(R),{align:"center",justify:"space-between"},{default:n(()=>[e.title?(o(),r(s(K),{key:0},{default:n(()=>[d(y(e.title),1)]),_:1})):m("",!0),w(e.$slots,"more",{},void 0,!0)]),_:3}),e.description?(o(),r(s(N),{key:0},{default:n(()=>[d(y(e.description)+" ",1),w(e.$slots,"description",{},void 0,!0),e.docsPath?(o(),r(O,{key:0,path:e.docsPath},null,8,["path"])):m("",!0)]),_:3})):m("",!0),c(s(R),{gap:"middle"},{default:n(()=>[e.createButtonText?(o(),r(s(ee),{key:0,type:"primary",onClick:I},{default:n(()=>[d(y(e.createButtonText),1)]),_:1})):m("",!0),w(e.$slots,"secondary",{},void 0,!0)]),_:3}),w(e.$slots,"extra",{},void 0,!0),c(s(te),{size:"small",style:ae(T.value),"data-source":e.table.rows,loading:i.value||e.loading&&!e.live,height:400,columns:(h=e.table.columns)==null?void 0:h.map(({name:a,align:l},t,p)=>({title:a,key:t,align:l!=null?l:"center"}))},{emptyText:n(()=>[d(y(e.emptyTitle),1)]),headerCell:n(a=>[d(y(a.title),1)]),bodyCell:n(({column:{key:a},record:l})=>[l.cells[a].type==="slot"?w(e.$slots,l.cells[a].key,{key:0,payload:l.cells[a].payload},void 0,!0):(o(),r(s(ie),{key:1,open:l.cells[a].hover?void 0:!1},{content:n(()=>[c(s(N),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:l.cells[a].hover},null,8,["content"])]),default:n(()=>[l.cells[a].type==="text"?(o(),r(s(A),{key:0,secondary:l.cells[a].secondary,code:l.cells[a].code},{default:n(()=>[c(s(de),{dot:l.cells[a].contentType==="warning",color:"#faad14"},{default:n(()=>[d(y(l.cells[a].text),1)]),_:2},1032,["dot"])]),_:2},1032,["secondary","code"])):l.cells[a].type==="secret"?(o(),r(s(A),{key:1,copyable:{text:l.cells[a].text}},{default:n(()=>[d(" ******** ")]),_:2},1032,["copyable"])):l.cells[a].type==="tag"?(o(),r(s(le),{key:2,color:l.cells[a].tagColor},{default:n(()=>[d(y(l.cells[a].text),1)]),_:2},1032,["color"])):l.cells[a].type==="link"?(o(),r(k,{key:3,to:l.cells[a].to},{default:n(()=>[d(y(l.cells[a].text),1)]),_:2},1032,["to"])):l.cells[a].type==="actions"?(o(),r(s(ne),{key:4},{overlay:n(()=>[c(s(se),{disabled:i.value},{default:n(()=>[(o(!0),V(B,null,S(l.cells[a].actions.filter(t=>!t.hide),(t,p)=>(o(),r(s(oe),{key:p,danger:t.dangerous,onClick:_=>g(t,l)},{default:n(()=>[ue("div",me,[t.icon?(o(),r(re(t.icon),{key:0})):m("",!0),c(s(A),null,{default:n(()=>[d(y(t.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:n(()=>[c(s(L),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):m("",!0)]),_:2},1032,["open"]))]),footer:n(()=>[e.live?(o(),r(s(M),{key:0,justify:"end",gutter:10},{default:n(()=>[c(s(U),null,{default:n(()=>[c(s(pe),{size:"small"})]),_:1}),c(s(U),null,{default:n(()=>[c(s(A),null,{default:n(()=>[d(" auto updating ")]),_:1})]),_:1})]),_:1})):m("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),e.fields&&e.create?(o(),r(fe,{key:0,ref_key:"modalRef",ref:b,fields:e.fields,"entity-name":e.entityName,create:e.create},null,8,["fields","entity-name","create"])):m("",!0)],64)}}});const Ae=ce(ve,[["__scopeId","data-v-93f8bde0"]]);export{Ae as C};
//# sourceMappingURL=CrudView.3c1e1940.js.map
