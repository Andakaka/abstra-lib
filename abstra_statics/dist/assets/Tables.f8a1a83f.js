import{C as T}from"./CrudView.768c086c.js";import{a as _}from"./asyncComputed.153bdca4.js";import{n}from"./string.a4078f51.js";import{G as k}from"./PhPencil.vue.95b565e0.js";import{d as h,eq as w,ed as I,f as x,c as N,w as l,u as i,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.fefb0937.js";import"./gateway.206addb4.js";import{T as m}from"./tables.91ce9442.js";import"./router.04944121.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f3f82ad8.js";import"./BookOutlined.cda0dd31.js";import"./url.2fdec9f0.js";import"./PhDotsThreeVertical.vue.ed161e83.js";import"./index.fd722477.js";import"./popupNotifcation.c7fab4cc.js";import"./record.7a783372.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="394affc1-1416-442f-894f-e156fd023050",o._sentryDebugIdIdentifier="sentry-dbid-394affc1-1416-442f-894f-e156fd023050")}catch{}})();const U=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:c,result:p,refetch:u}=_(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){await s.delete(t,s.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>n(e,!0),blur:e=>n(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:i(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f},{more:l(()=>[D(i(q),{onClick:b},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.f8a1a83f.js.map
