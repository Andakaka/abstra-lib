import{N as O}from"./Navbar.41d90f94.js";import{B as I}from"./BaseLayout.212afc17.js";import{C as _}from"./ContentLayout.2a48a10e.js";import{C as x}from"./CrudView.84f30214.js";import{a as R}from"./ant-design.750daa31.js";import{a as h}from"./asyncComputed.f6676d35.js";import{F as B}from"./PhArrowSquareOut.vue.a3078663.js";import{G as D}from"./PhPencil.vue.4f61dfe8.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cy as E,bK as K,cx as L,R as U,cK as q,er as P}from"./vue-router.d51a64d9.js";import"./gateway.937d59a9.js";import{O as d}from"./organization.1ed25ec7.js";import"./tables.09c287af.js";import"./PhChats.vue.41c7b217.js";import"./PhSignOut.vue.faf4e9bf.js";import"./router.17eb0281.js";import"./index.c6f78a77.js";import"./Avatar.9a645f7a.js";import"./index.a2975bb2.js";import"./index.968d61eb.js";import"./BookOutlined.92c75688.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9b63bf4d.js";import"./url.ddeb86a1.js";import"./PhDotsThreeVertical.vue.8dd8456f.js";import"./popupNotifcation.90b507d5.js";import"./record.2785593c.js";import"./string.806b9bd4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="54d90305-e0f6-4703-9397-4deeea105e2b",r._sentryDebugIdIdentifier="sentry-dbid-54d90305-e0f6-4703-9397-4deeea105e2b")}catch{}})();const be=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(K),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=Organizations.b2ba2331.js.map
