import{d as w,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.01251d23.js";import{a as K}from"./asyncComputed.9b1f3283.js";import{A as p}from"./apiKey.940467a4.js";import"./gateway.28e08973.js";import{M as T}from"./member.8bd566a6.js";import{P as V}from"./project.54a480ed.js";import"./tables.0fcb1c77.js";import{C as B}from"./CrudView.52c012ae.js";import"./popupNotifcation.ca6e0990.js";import"./record.c8672aee.js";import"./string.768333c6.js";import"./router.a138e2d8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e6960c2f.js";import"./BookOutlined.cf0cc76e.js";import"./url.0596a20e.js";import"./PhDotsThreeVertical.vue.8a2f24de.js";import"./Badge.a54ab328.js";import"./index.9a4374fd.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="f87374eb-6785-4db7-afad-f5e6296856b1",n._sentryDebugIdIdentifier="sentry-dbid-f87374eb-6785-4db7-afad-f5e6296856b1")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),c=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([p.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),o.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:j(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:c,create:b},null,8,["loading","table"]),l(i(M),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.ab6ed078.js.map
