import{C as T}from"./CrudView.6eed759b.js";import{a as _}from"./asyncComputed.dbaaa4a3.js";import{n as i}from"./string.a97413c6.js";import{G as k}from"./PhPencil.vue.667bdabb.js";import{d as h,eH as w,eu as I,f as x,c as N,w as l,u as c,eI as S,o as D,b as E,ax as v,bL as B}from"./vue-router.e3679951.js";import"./gateway.a88dfbe5.js";import{T as d}from"./tables.648d1446.js";import"./router.a1b58065.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b3bdedab.js";import"./BookOutlined.87c2db56.js";import"./url.1254a653.js";import"./PhDotsThree.vue.b61a0945.js";import"./index.614a0351.js";import"./index.3956625b.js";import"./popupNotifcation.a64ef878.js";import"./record.796b1c19.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c2e18068-39d3-43cd-9a28-1c960babc35d",o._sentryDebugIdIdentifier="sentry-dbid-c2e18068-39d3-43cd-9a28-1c960babc35d")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>d.list(a)),f=async e=>{const r=await d.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(c(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.5f9cf135.js.map
