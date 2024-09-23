import{d as b,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as f,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.a4aff463.js";import{a as K}from"./asyncComputed.9b44b59f.js";import{A as c}from"./apiKey.f16c4cdc.js";import"./gateway.1fd76a21.js";import{M as T}from"./member.fcdd495e.js";import{P as V}from"./project.d2a4287b.js";import"./tables.398fae1a.js";import{C as B}from"./CrudView.1dc5defb.js";import"./popupNotifcation.ff2092be.js";import"./record.6e228eda.js";import"./string.41d33e8b.js";import"./router.ccd04d60.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0febdb41.js";import"./BookOutlined.ef4a7b58.js";import"./url.b1a8821a.js";import"./PhDotsThreeVertical.vue.c732e554.js";import"./index.bcb87b71.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="2f23901e-f965-4a55-80f3-4e504e77bf15",n._sentryDebugIdIdentifier="sentry-dbid-2f23901e-f965-4a55-80f3-4e504e77bf15")}catch{}})();const ee=b({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:j(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(M),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[f(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.124933fa.js.map
