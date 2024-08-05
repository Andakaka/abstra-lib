import{C as y}from"./CrudView.aa29c570.js";import{a as d}from"./ant-design.24d83e4f.js";import{a as g}from"./asyncComputed.2ff227ab.js";import{d as w,eu as _,eH as h,f as I,c as k,u as v,eI as x,o as C}from"./vue-router.41961d24.js";import{a as z}from"./gateway.97ffd250.js";import{M as n}from"./member.c863c03b.js";import"./tables.da095271.js";import"./router.c71bd213.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.77377f11.js";import"./BookOutlined.481ea44a.js";import"./url.025a0430.js";import"./PhDotsThree.vue.556636a6.js";import"./index.80a5c376.js";import"./index.f1820335.js";import"./popupNotifcation.e1e165b7.js";import"./record.4f1added.js";import"./string.753320cb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="d0922deb-327f-48b9-b9a7-86bfb181a042",o._sentryDebugIdIdentifier="sentry-dbid-d0922deb-327f-48b9-b9a7-86bfb181a042")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),m()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),m())}const{loading:f,result:p,refetch:m}=g(()=>n.list(r)),b=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(y,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:b.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.ca073ff2.js.map
