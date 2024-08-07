import{C as g}from"./CrudView.dbcf4f97.js";import{a as m}from"./ant-design.3906c1b9.js";import{a as b}from"./asyncComputed.86d2af81.js";import{d as w,eu as _,eH as h,f as I,c as k,u as v,eI as x,o as C}from"./vue-router.2dca7c0b.js";import{a as z}from"./gateway.a8c9a52b.js";import{M as n}from"./member.43479d27.js";import"./tables.fcd3fdf0.js";import"./router.b3da1508.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.41e9c1d9.js";import"./BookOutlined.1f896305.js";import"./url.2ff24572.js";import"./PhDotsThree.vue.baa69e23.js";import"./index.40bebf63.js";import"./index.7a242f44.js";import"./popupNotifcation.b288604f.js";import"./record.75ee7852.js";import"./string.941d9e1e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="ce718721-aa14-468c-9c07-7339af8f0327",o._sentryDebugIdIdentifier="sentry-dbid-ce718721-aa14-468c-9c07-7339af8f0327")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.0d924843.js.map
