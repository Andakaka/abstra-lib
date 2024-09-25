import{d as w,e as A,ed as _,f as k,X as x,b as l,u as d,w as i,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.be64e328.js";import{a as K}from"./asyncComputed.51dda6f4.js";import{A as c}from"./apiKey.1af34f0c.js";import"./gateway.1252f45c.js";import{M as T}from"./member.b4131ace.js";import{P as V}from"./project.282ce23e.js";import"./tables.277162f9.js";import{C as B}from"./CrudView.c160aaca.js";import"./popupNotifcation.53f63205.js";import"./record.7d40488d.js";import"./string.8192a7eb.js";import"./router.8a019a87.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ab40e4b1.js";import"./BookOutlined.e3a46b7e.js";import"./url.cb5b0259.js";import"./PhDotsThreeVertical.vue.ac46162c.js";import"./Badge.66638ea9.js";import"./index.e94a7ccc.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="8d3d917d-d229-40bd-97bc-2208426b5eef",n._sentryDebugIdIdentifier="sentry-dbid-8d3d917d-d229-40bd-97bc-2208426b5eef")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:j(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,create:b},null,8,["loading","table"]),l(d(M),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:i(()=>[]),default:i(()=>[l(d(P),null,{default:i(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(h),{code:"",copyable:""},{default:i(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.d0a6c037.js.map
