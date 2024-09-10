import{C as T}from"./CrudView.c59cc963.js";import{a as _}from"./asyncComputed.831f3a93.js";import{n as i}from"./string.f7fa59f6.js";import{G as k}from"./PhPencil.vue.902696df.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as m,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.48643073.js";import"./gateway.ec19a3a0.js";import{T as c}from"./tables.e9c8a014.js";import{a as A}from"./ant-design.72b3143b.js";import"./router.ea1ff6ad.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2e3579aa.js";import"./BookOutlined.9ae7d210.js";import"./url.c57f660a.js";import"./PhDotsThreeVertical.vue.13794448.js";import"./index.dbc122ad.js";import"./popupNotifcation.e85a7319.js";import"./record.989c2937.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c070bb41-13fc-4a74-aa9f-b0b927ebf76f",o._sentryDebugIdIdentifier="sentry-dbid-c070bb41-13fc-4a74-aa9f-b0b927ebf76f")}catch{}})();const X=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:b,result:u,refetch:p}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),p())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:m(b),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",onCreate:f},{more:l(()=>[D(m(q),{onClick:y},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.f1432614.js.map
