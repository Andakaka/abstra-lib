import{A as x,a as P,r as z}from"./router.df86d934.js";import{_ as O}from"./DocsButton.vue_vue_type_script_setup_true_lang.736a89a6.js";import{i as L}from"./url.66be2883.js";import{G as j}from"./PhDotsThreeVertical.vue.55b5cef2.js";import{d as M,D as E,e as N,c as r,w as l,u as n,o as s,b as i,aF as c,ec as d,d9 as D,X as B,ee as R,cy as Y,bK as G,cD as Q,aA as W,aR as I,cS as X,R as f,cx as Z,cK as q,f as H,r as J,df as F,db as K,Z as A,bS as ee,cW as te,Y as ae,da as V,d3 as le,bQ as ne,by as se,bw as oe,a as ue,ef as re,cN as pe,bx as ie,$ as ce}from"./vue-router.05bb9324.js";import{A as de}from"./index.60205747.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b=new Error().stack;b&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[b]="c261416b-c197-4801-9c1d-b6d96d24d99d",v._sentryDebugIdIdentifier="sentry-dbid-c261416b-c197-4801-9c1d-b6d96d24d99d")}catch{}})();const ye=M({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(v,{expose:b,emit:g}){const k=v,T=`Create a new ${k.entityName}`,p=E({inputValue:{}}),h=N(!1),S=()=>h.value=!0,C=()=>h.value=!1,t=()=>{g("create",p.inputValue),p.inputValue={},C()},w=(y,a)=>{const e=y.target.value,u=k.fields.find(m=>m.key===a);u!=null&&u.format?p.inputValue[a]=u.format(e):p.inputValue[a]=e},_=(y,a)=>{const e=y.target.value,u=k.fields.find(m=>m.key===a);u!=null&&u.blur?p.inputValue[a]=u.blur(e):p.inputValue[a]=e};return b({open:S,close:C}),(y,a)=>(s(),r(n(q),{open:h.value,title:T,onCancel:C,onOk:t},{default:l(()=>[i(n(D),null,{default:l(()=>[c(" You may edit the "+d(y.entityName)+" name afterwards at Settings. ",1)]),_:1}),i(n(Z),{layout:"vertical"},{default:l(()=>[(s(!0),B(I,null,R(y.fields,e=>{var u;return s(),r(n(Y),{key:e.key,label:e.label,help:(u=e.hint)==null?void 0:u.call(e,p.inputValue[e.key])},{default:l(()=>{var m,$,U;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(G),{key:0,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(m=e.placeholder)!=null?m:"",type:($=e.type)!=null?$:"text",onInput:o=>w(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(Q),{key:1,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(U=e.placeholder)!=null?U:"",onInput:o=>w(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(s(),r(n(W),{key:2,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o},{default:l(()=>[(s(!0),B(I,null,R(e.type,o=>(s(),r(n(X),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:l(()=>[c(d(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):f("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},fe=M({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(v,{emit:b}){const g=v,k=N(null),T=()=>{var t;g.fields?(t=k.value)==null||t.open():b("create",{})},p=N(!1);async function h(t,w){var _;if(!p.value){p.value=!0;try{"onClick"in t?await((_=t.onClick)==null?void 0:_.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&L(t.link)?open(t.link,"_blank"):z.push(t.link))}finally{p.value=!1}}}async function S(t){b("create",t)}const C=H(()=>({"--columnCount":`${g.table.columns.length}`}));return(t,w)=>{const _=J("RouterLink");return s(),B(I,null,[i(n(de),{direction:"vertical",class:"crud-view"},{default:l(()=>{var y;return[i(n(F),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(s(),r(n(K),{key:0},{default:l(()=>[c(d(t.title),1)]),_:1})):f("",!0),A(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(D),{key:0},{default:l(()=>[c(d(t.description)+" ",1),A(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(O,{key:0,path:t.docsPath},null,8,["path"])):f("",!0)]),_:3})):f("",!0),i(n(F),{gap:"middle"},{default:l(()=>[t.createButtonText?(s(),r(n(ee),{key:0,type:"primary",onClick:T},{default:l(()=>[c(d(t.createButtonText),1)]),_:1})):f("",!0),A(t.$slots,"secondary",{},void 0,!0)]),_:3}),A(t.$slots,"extra",{},void 0,!0),i(n(te),{size:"small",style:ae(C.value),"data-source":t.table.rows,loading:p.value||t.loading&&!t.live,height:400,columns:(y=t.table.columns)==null?void 0:y.map(({name:a,align:e},u,m)=>({title:a,key:u,align:e!=null?e:"center"}))},{emptyText:l(()=>[c(d(t.emptyTitle),1)]),headerCell:l(a=>[c(d(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?A(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(s(),r(n(pe),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[i(n(D),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(s(),r(n(V),{key:0,secondary:e.cells[a].secondary,type:e.cells[a].contentType,code:e.cells[a].code},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["secondary","type","code"])):e.cells[a].type==="secret"?(s(),r(n(V),{key:1,copyable:{text:e.cells[a].text}},{default:l(()=>[c(" ******** ")]),_:2},1032,["copyable"])):e.cells[a].type==="tag"?(s(),r(n(le),{key:2,color:e.cells[a].tagColor},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(s(),r(_,{key:3,to:e.cells[a].to},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(s(),r(n(ne),{key:4},{overlay:l(()=>[i(n(se),{disabled:p.value},{default:l(()=>[(s(!0),B(I,null,R(e.cells[a].actions.filter(u=>!u.hide),(u,m)=>(s(),r(n(oe),{key:m,danger:u.dangerous,onClick:$=>h(u,e)},{default:l(()=>[ue("div",me,[u.icon?(s(),r(re(u.icon),{key:0})):f("",!0),i(n(V),null,{default:l(()=>[c(d(u.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[i(n(j),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):f("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(s(),r(n(P),{key:0,justify:"end",gutter:10},{default:l(()=>[i(n(x),null,{default:l(()=>[i(n(ie),{size:"small"})]),_:1}),i(n(x),null,{default:l(()=>[i(n(V),null,{default:l(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):f("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(s(),r(ye,{key:0,ref_key:"modalRef",ref:k,fields:t.fields,"entity-name":t.entityName,onCreate:S},null,8,["fields","entity-name"])):f("",!0)],64)}}});const Ce=ce(fe,[["__scopeId","data-v-90603a23"]]);export{Ce as C};
//# sourceMappingURL=CrudView.33509575.js.map
