import{C as b}from"./CrudView.55d9706a.js";import{a as l}from"./ant-design.b2832fed.js";import{a as g}from"./asyncComputed.5ed95967.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as C}from"./vue-router.a6706c97.js";import{a as z}from"./gateway.470a30c6.js";import{M as n}from"./member.e320e511.js";import"./tables.88b693c5.js";import"./router.4553091e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.33199d08.js";import"./BookOutlined.55495355.js";import"./url.ffe85f8b.js";import"./PhDotsThreeVertical.vue.30041dec.js";import"./index.c097efb6.js";import"./popupNotifcation.7a3b3357.js";import"./record.cea7722f.js";import"./string.4a502d87.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6b223dbd-112b-4e41-9088-853e5a5d186e",o._sentryDebugIdIdentifier="sentry-dbid-6b223dbd-112b-4e41-9088-853e5a5d186e")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:p,result:f,refetch:d}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=f.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(b,{"entity-name":"editors",loading:v(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:c},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.be7d353c.js.map
