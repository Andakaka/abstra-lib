import{C as g}from"./CrudView.2e03555b.js";import{a as d}from"./ant-design.db09407d.js";import{a as b}from"./asyncComputed.b13121c7.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as C}from"./vue-router.6c90459c.js";import{a as z}from"./gateway.cd25c5f8.js";import{M as n}from"./member.49e2246b.js";import"./tables.cfb725dc.js";import"./router.3a1235c9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e28ba76c.js";import"./BookOutlined.c7c607bb.js";import"./url.3df68aac.js";import"./PhDotsThreeVertical.vue.b45c9611.js";import"./index.0ab364e8.js";import"./popupNotifcation.20a67f6d.js";import"./record.08a02a5d.js";import"./string.d7d296b7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f49e72cd-13f3-478b-adc8-20cd2315bcff",o._sentryDebugIdIdentifier="sentry-dbid-f49e72cd-13f3-478b-adc8-20cd2315bcff")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.f48488b7.js.map
