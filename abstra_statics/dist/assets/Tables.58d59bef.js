import{C as T}from"./CrudView.a38804ce.js";import{a as _}from"./asyncComputed.b50a9563.js";import{n as i}from"./string.0986f6de.js";import{G as k}from"./PhPencil.vue.9c2aab9a.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as m,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.1df2f73b.js";import"./gateway.1e9b66ae.js";import{T as c}from"./tables.b891af2a.js";import{a as A}from"./ant-design.27a861ff.js";import"./router.12c65195.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3e5ff30a.js";import"./BookOutlined.af62472a.js";import"./url.fef55179.js";import"./PhDotsThreeVertical.vue.04aea7fc.js";import"./index.c7759e49.js";import"./popupNotifcation.fa334fca.js";import"./record.934f76be.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="099909bc-9436-4a76-ab5c-eea469839f3a",o._sentryDebugIdIdentifier="sentry-dbid-099909bc-9436-4a76-ab5c-eea469839f3a")}catch{}})();const X=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:u,result:p,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:m(u),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",onCreate:f},{more:l(()=>[D(m(q),{onClick:y},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.58d59bef.js.map
