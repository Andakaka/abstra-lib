import{C as b}from"./CrudView.532dbc3a.js";import{a as d}from"./ant-design.a6f67afd.js";import{a as g}from"./asyncComputed.06aab964.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as C}from"./vue-router.81a421ec.js";import{a as z}from"./gateway.5adaf899.js";import{M as n}from"./member.0840f156.js";import"./tables.c3b19b37.js";import"./router.d9c300ef.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a956c150.js";import"./BookOutlined.cab7ea9a.js";import"./url.20bc0cdc.js";import"./PhDotsThreeVertical.vue.3e42849c.js";import"./index.695d09ff.js";import"./popupNotifcation.9e7c7c9b.js";import"./record.ccbd35de.js";import"./string.47cd6433.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b546368c-cb15-4f45-bdd0-670476e2ff27",o._sentryDebugIdIdentifier="sentry-dbid-b546368c-cb15-4f45-bdd0-670476e2ff27")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.44759637.js.map
