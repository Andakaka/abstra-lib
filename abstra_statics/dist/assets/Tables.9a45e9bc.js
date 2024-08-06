import{C as T}from"./CrudView.7ac4b160.js";import{a as _}from"./asyncComputed.59581216.js";import{n as i}from"./string.110b880e.js";import{G as k}from"./PhPencil.vue.e027ba5c.js";import{d as h,eH as w,eu as I,f as x,c as N,w as l,u as m,eI as S,o as D,b as E,ax as v,bL as B}from"./vue-router.c87b6e30.js";import"./gateway.271aa2ec.js";import{T as c}from"./tables.cebe0611.js";import"./router.23e96bec.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2aecdb7.js";import"./BookOutlined.3c3eff9e.js";import"./url.4804bcbd.js";import"./PhDotsThree.vue.c5240cec.js";import"./index.1008ed53.js";import"./index.f9536d18.js";import"./popupNotifcation.18263527.js";import"./record.3394947d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="1e6837bd-f506-4bb0-94c3-b279a3ab7f25",o._sentryDebugIdIdentifier="sentry-dbid-1e6837bd-f506-4bb0-94c3-b279a3ab7f25")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:b,result:p,refetch:u}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:m(b),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.9a45e9bc.js.map
