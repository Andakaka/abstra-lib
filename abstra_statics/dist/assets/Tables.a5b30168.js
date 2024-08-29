import{C as T}from"./CrudView.55d9706a.js";import{a as _}from"./asyncComputed.5ed95967.js";import{n}from"./string.4a502d87.js";import{G as k}from"./PhPencil.vue.06f38da3.js";import{d as h,eq as w,ed as I,f as x,c as N,w as l,u as i,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.a6706c97.js";import"./gateway.470a30c6.js";import{T as c}from"./tables.88b693c5.js";import"./router.4553091e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.33199d08.js";import"./BookOutlined.55495355.js";import"./url.ffe85f8b.js";import"./PhDotsThreeVertical.vue.30041dec.js";import"./index.c097efb6.js";import"./popupNotifcation.7a3b3357.js";import"./record.cea7722f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="58b016aa-ac70-4eb5-9ec1-9299fc2a8fa4",o._sentryDebugIdIdentifier="sentry-dbid-58b016aa-ac70-4eb5-9ec1-9299fc2a8fa4")}catch{}})();const U=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:d,result:p,refetch:u}=_(()=>c.list(a)),b=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},f=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){await s.delete(a,s.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>n(e,!0),blur:e=>n(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:i(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:b},{more:l(()=>[D(i(q),{onClick:f},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.a5b30168.js.map
