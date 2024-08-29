import{d as w,e as A,ed as _,f as k,X as x,b as l,u as d,w as i,aR as C,o as v,d9 as P,aF as y,da as h,ec as D,cK as M,eJ as j,er as K}from"./vue-router.05bb9324.js";import{a as N}from"./asyncComputed.aa28adf0.js";import{A as c}from"./apiKey.dc9016e7.js";import"./gateway.b079fdd7.js";import{M as T}from"./member.2bba6e59.js";import{P as V}from"./project.58e1c5be.js";import"./tables.fd073e90.js";import{C as B}from"./CrudView.33509575.js";import"./popupNotifcation.87da223f.js";import"./record.c96e3c75.js";import"./string.8f7dafdb.js";import"./router.df86d934.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.736a89a6.js";import"./BookOutlined.aaf7e665.js";import"./url.66be2883.js";import"./PhDotsThreeVertical.vue.55b5cef2.js";import"./index.60205747.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="c0d114c4-3d9b-4bd7-97b6-281664fcb79f",n._sentryDebugIdIdentifier="sentry-dbid-c0d114c4-3d9b-4bd7-97b6-281664fcb79f")}catch{}})();const ee=w({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:b,refetch:u}=N(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),g=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:j(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:K,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,onCreate:g},null,8,["loading","table"]),l(d(M),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:i(()=>[]),default:i(()=>[l(d(P),null,{default:i(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(h),{code:"",copyable:""},{default:i(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.2af3cc71.js.map
