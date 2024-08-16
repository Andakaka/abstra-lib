import{C as T}from"./CrudView.3e76a82f.js";import{a as _}from"./asyncComputed.de06baf7.js";import{n}from"./string.3a8c4451.js";import{G as k}from"./PhPencil.vue.cf43c8b8.js";import{d as h,ek as w,e7 as x,f as I,c as N,w as l,u as i,el as D,o as E,b as S,ax as v,bL as B}from"./vue-router.90d4c520.js";import"./gateway.b7abc910.js";import{T as d}from"./tables.50809c24.js";import"./router.026cd7e0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fb4ad09d.js";import"./BookOutlined.5675c001.js";import"./url.d9f1a928.js";import"./PhDotsThree.vue.347239d8.js";import"./index.062293b9.js";import"./popupNotifcation.f9c49539.js";import"./record.6d908f19.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e5540d21-651d-48e7-b78a-c6a2843193dd",o._sentryDebugIdIdentifier="sentry-dbid-e5540d21-651d-48e7-b78a-c6a2843193dd")}catch{}})();const U=h({__name:"Tables",setup(o){const t=w(),a=x().params.projectId,{loading:c,result:p,refetch:u}=_(()=>d.list(a)),b=async e=>{const r=await d.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},f=()=>{t.push({name:"sql",params:{projectId:a}})},y=I(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await s.delete(a,s.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>n(e,!0),blur:e=>n(e,!1)}];return(e,r)=>(E(),N(T,{"entity-name":"table",loading:i(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:b},{more:l(()=>[S(i(B),{onClick:f},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.1c855208.js.map
