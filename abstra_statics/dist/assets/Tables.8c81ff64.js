import{C as T}from"./CrudView.e19ee550.js";import{a as _}from"./asyncComputed.1675cffb.js";import{n as i}from"./string.99acff13.js";import{G as k}from"./PhPencil.vue.20b9fa62.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as d,o as D,b as E,aF as S,bP as q,er as v}from"./vue-router.4af43212.js";import"./gateway.5ab348f4.js";import{T as m}from"./tables.f0224dfc.js";import{a as A}from"./ant-design.45f1f5ad.js";import"./router.97fb4246.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ea10d03f.js";import"./BookOutlined.f1c2baf0.js";import"./url.80b0c73c.js";import"./PhDotsThreeVertical.vue.d94a8a34.js";import"./Badge.940e5367.js";import"./index.c1153188.js";import"./popupNotifcation.df9de95f.js";import"./record.561a4449.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="5e395902-2121-4020-add8-75dcc9b06983",o._sentryDebugIdIdentifier="sentry-dbid-5e395902-2121-4020-add8-75dcc9b06983")}catch{}})();const Y=w({__name:"Tables",setup(o){const a=h(),t=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){a.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:f},{more:l(()=>[E(d(q),{onClick:y},{default:l(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.8c81ff64.js.map
