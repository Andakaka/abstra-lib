import{C as g}from"./CrudView.52c10b59.js";import{a as l}from"./ant-design.6f415bb7.js";import{a as b}from"./asyncComputed.b0c24f38.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as C}from"./vue-router.d5728aa9.js";import{a as z}from"./gateway.c7913573.js";import{M as n}from"./member.520adf90.js";import"./tables.451ea3a6.js";import"./router.80d3eb5e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.546a80d0.js";import"./BookOutlined.d39c84cf.js";import"./url.53bccc57.js";import"./PhDotsThreeVertical.vue.f56e3885.js";import"./index.5d42f9e4.js";import"./popupNotifcation.1e9d6dca.js";import"./record.c9ccc0f1.js";import"./string.219476ec.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="159e5f1d-4950-4360-872f-9e77a43d8bd1",o._sentryDebugIdIdentifier="sentry-dbid-159e5f1d-4950-4360-872f-9e77a43d8bd1")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:c},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.2a14f3fe.js.map
