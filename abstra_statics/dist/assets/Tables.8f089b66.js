import{C as T}from"./CrudView.3b1747b4.js";import{a as _}from"./asyncComputed.759156ac.js";import{n as i}from"./string.8fb477be.js";import{G as k}from"./PhPencil.vue.5d3154e5.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as m,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.0c08de6f.js";import"./gateway.4e317ed1.js";import{T as d}from"./tables.fde9a84e.js";import{a as A}from"./ant-design.efc074ef.js";import"./router.6b95a4d3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.092369ee.js";import"./BookOutlined.1187b12b.js";import"./url.845d3bb1.js";import"./PhDotsThreeVertical.vue.40cc7d93.js";import"./index.fa9383d8.js";import"./popupNotifcation.40b5353d.js";import"./record.01e4f4c5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="406e4c13-81e3-4495-9941-846b7892f78d",o._sentryDebugIdIdentifier="sentry-dbid-406e4c13-81e3-4495-9941-846b7892f78d")}catch{}})();const X=w({__name:"Tables",setup(o){const a=h(),t=I().params.projectId,{loading:u,result:p,refetch:b}=_(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){a.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:m(u),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",onCreate:f},{more:l(()=>[D(m(q),{onClick:y},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.8f089b66.js.map
