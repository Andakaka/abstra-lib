import{C as g}from"./CrudView.96e497a2.js";import{a as m}from"./ant-design.8494e002.js";import{a as b}from"./asyncComputed.4e9f7e90.js";import{d as w,eu as _,eH as h,f as I,c as k,u as v,eI as x,o as C}from"./vue-router.0161af35.js";import{a as z}from"./gateway.7d4c7b56.js";import{M as n}from"./member.11c3cea3.js";import"./tables.c953a881.js";import"./router.d7a21442.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ad97d0e5.js";import"./BookOutlined.3f558833.js";import"./url.e9545d58.js";import"./PhDotsThree.vue.6b090be7.js";import"./index.71a6c991.js";import"./index.be56b932.js";import"./popupNotifcation.f1632c74.js";import"./record.38c7dd1d.js";import"./string.a1aa2ba8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="13cc0b92-2ec7-4240-9483-fc602ea87d13",o._sentryDebugIdIdentifier="sentry-dbid-13cc0b92-2ec7-4240-9483-fc602ea87d13")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:p,result:f,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=f.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.29fd333a.js.map
