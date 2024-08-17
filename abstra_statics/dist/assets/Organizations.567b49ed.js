import{N as O}from"./Navbar.f8c26f2e.js";import{B as I}from"./BaseLayout.d8bfd856.js";import{C as _}from"./ContentLayout.e74490b8.js";import{C as x}from"./CrudView.ee2a268a.js";import{a as R}from"./ant-design.427fb3e3.js";import{a as D}from"./asyncComputed.0bf323b3.js";import{F as h}from"./PhArrowSquareOut.vue.7a88e4b2.js";import{G as B}from"./PhPencil.vue.3d887111.js";import{d as F,ek as M,e as $,f as A,W as E,b as o,w as i,u as l,aJ as G,el as V,o as b,c as j,cs as L,bD as U,cr as J,R as P,cE as S}from"./vue-router.dd717642.js";import"./gateway.e1fbd9c2.js";import{O as c}from"./organization.2fb76dc6.js";import"./tables.7cdc7f7d.js";import"./PhChats.vue.b4c5d7a2.js";import"./PhSignOut.vue.216e8a04.js";import"./router.4c787d53.js";import"./index.d975b3ce.js";import"./Avatar.27c8a0fe.js";import"./index.865e5172.js";import"./index.d39251dd.js";import"./BookOutlined.2414c180.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7bd10fe6.js";import"./url.2a0380b6.js";import"./PhDotsThreeVertical.vue.bd4addcb.js";import"./popupNotifcation.de66387b.js";import"./record.72e2da8f.js";import"./string.c2176fe7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="c2e24bc6-1263-4535-b8b8-6f983449e417",r._sentryDebugIdIdentifier="sentry-dbid-c2e24bc6-1263-4535-b8b8-6f983449e417")}catch{}})();const be=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=D(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await c.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await c.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await R("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:h,label:"Go to projects",onClick:g},{icon:B,label:"Rename",onClick:()=>w(a)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),E(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(S),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(J),{key:0,layout:"vertical"},{default:i(()=>[o(l(L),{label:"New name"},{default:i(()=>[o(l(U),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):P("",!0)]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=Organizations.567b49ed.js.map
