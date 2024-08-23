var T=Object.defineProperty;var D=(i,e,s)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var M=(i,e,s)=>(D(i,typeof e!="symbol"?e+"":e,s),s);import{C as E}from"./ContentLayout.2a48a10e.js";import{l as I}from"./fetch.66595d39.js";import{E as N}from"./record.2785593c.js";import{d as C,B as A,f as b,o as n,X as y,Z as $,R as k,eb as O,a as _,c as v,ej as U,w as r,aF as g,b as a,u as t,bS as z,ee as S,cS as L,ec as P,aR as H,cR as F,aA as G,ef as J,aV as Q,d7 as W,cQ as X,cP as Z,df as w,da as Y,d3 as K,db as ee,d9 as j,d8 as te,E as se}from"./vue-router.d51a64d9.js";import{E as oe}from"./repository.92cd0f25.js";import{a as q}from"./asyncComputed.f6676d35.js";import{S as re}from"./SaveButton.9857c080.js";import{I as ae}from"./PhGlobe.vue.6238ada3.js";import{u as x}from"./editor.5bc79d9b.js";import{F as le}from"./PhArrowSquareOut.vue.a3078663.js";import{A as ne}from"./index.276deeef.js";import{i as ie}from"./metadata.31753b7a.js";import{A as B}from"./index.88cbb0cc.js";import"./gateway.937d59a9.js";import"./popupNotifcation.90b507d5.js";import"./UnsavedChangesHandler.0d62f2fb.js";import"./ExclamationCircleOutlined.99c00652.js";import"./workspaceStore.4ddc0c2a.js";import"./url.ddeb86a1.js";import"./colorHelpers.dfb3ca42.js";import"./PhBug.vue.f8e7a129.js";import"./PhCheckCircle.vue.0141cbb3.js";import"./PhKanban.vue.6b206f75.js";import"./PhWebhooksLogo.vue.20fa25af.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="c86f3695-20d6-485e-9d60-84193aa8b63c",i._sentryDebugIdIdentifier="sentry-dbid-c86f3695-20d6-485e-9d60-84193aa8b63c")}catch{}})();const ce=["width","height","fill","transform"],ue={key:0},de=_("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"},null,-1),pe=[de],he={key:1},ge=_("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"},null,-1),fe=_("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"},null,-1),me=[ge,fe],ye={key:2},ve=_("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"},null,-1),be=[ve],_e={key:3},Ce=_("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"},null,-1),we=[Ce],Ve={key:4},Ae=_("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"},null,-1),He=[Ae],ke={key:5},Se=_("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"},null,-1),Pe=[Se],Re={name:"PhLockSimple"},Me=C({...Re,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(i){const e=i,s=A("weight","regular"),c=A("size","1em"),f=A("color","currentColor"),m=A("mirrored",!1),o=b(()=>{var l;return(l=e.weight)!=null?l:s}),h=b(()=>{var l;return(l=e.size)!=null?l:c}),d=b(()=>{var l;return(l=e.color)!=null?l:f}),u=b(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:m?"scale(-1, 1)":void 0);return(l,p)=>(n(),y("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:h.value,height:h.value,fill:d.value,transform:u.value},l.$attrs),[$(l.$slots,"default"),o.value==="bold"?(n(),y("g",ue,pe)):o.value==="duotone"?(n(),y("g",he,me)):o.value==="fill"?(n(),y("g",ye,be)):o.value==="light"?(n(),y("g",_e,we)):o.value==="regular"?(n(),y("g",Ve,He)):o.value==="thin"?(n(),y("g",ke,Pe)):k("",!0)],16,ce))}});class R{constructor(e){M(this,"record");this.record=N.from(e)}get id(){return this.record.get("id")}get type(){return this.record.get("type")}get title(){return this.record.get("title")}get isPublic(){return this.record.get("is_public")}set isPublic(e){e&&this.record.set("required_roles",[]),this.record.set("is_public",e)}get requiredRoles(){return this.record.get("required_roles")}set requiredRoles(e){e.length!==0&&this.record.set("is_public",!1),this.record.set("required_roles",e)}makePublic(){this.isPublic=!0}makeProtected(){this.isPublic=!1,this.requiredRoles=[]}require(e){e.length!==0&&(this.isPublic=!1),this.requiredRoles=e}get visibility(){return this.isPublic?"public":"private"}hasChanges(){return this.record.hasChanges("is_public")||this.record.hasChangesDeep("required_roles")}get changes(){return this.record.changes}get initialState(){return this.record.initialState}toUpdateDTO(){return{id:this.id,is_public:this.isPublic,required_roles:this.requiredRoles}}commit(){this.record.commit()}static from(e){return new R(e)}}class Ze{constructor(e=I){this.fetch=e}async list(){return(await(await this.fetch("/_editor/api/access-control",{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(R.from)}async update(e){const s=e.reduce((f,m)=>(m.hasChanges()&&f.push({id:m.id,...m.changes}),f),[]);return await(await fetch("/_editor/api/access-control",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json()}}const je=_("span",null," Project Roles ",-1),qe=C({__name:"RoleSelector",props:{value:{},roleOptions:{},disabled:{type:Boolean}},emits:["update:value"],setup(i,{emit:e}){const s=i,c=x(),f=o=>{e("update:value",o)},m=C({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}});return(o,h)=>(n(),v(t(G),{value:o.value,mode:"multiple",disabled:o.disabled,"show-arrow":"","onUpdate:value":f},U({dropdownRender:r(({menuNode:d})=>[a(t(m),{vnodes:d},null,8,["vnodes"]),a(t(ne),{style:{margin:"4px 0"}}),t(c).links?(n(),v(t(z),{key:0,type:"default",style:{display:"flex","align-items":"center","justify-content":"center",width:"100%",gap:"4px"},href:t(c).links.roles,target:"abstra_project"},{default:r(()=>[a(t(le),{size:"16"}),g(" Manage roles in Cloud Console ")]),_:1},8,["href"])):k("",!0)]),default:r(()=>[a(t(F),null,{label:r(()=>[je]),default:r(()=>[(n(!0),y(H,null,S(o.roleOptions,d=>(n(),v(t(L),{key:d,value:d},{default:r(()=>[g(P(d),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:2},[s.disabled?void 0:{name:"placeholder",fn:r(()=>[g(" Leave empty to allow all listed users ")]),key:"0"}]),1032,["value","disabled"]))}}),xe=C({__name:"AccessControlItem",props:{accessControl:{},roles:{}},emits:["update:access-control"],setup(i,{emit:e}){const s=i,c=b(()=>s.roles.map(o=>o.name)),f=o=>{o?s.accessControl.makePublic():s.accessControl.makeProtected(),e("update:access-control",s.accessControl)},m=o=>{s.accessControl.require(o),o.length!==0&&(s.accessControl.isPublic=!1),e("update:access-control",s.accessControl)};return(o,h)=>(n(),v(t(w),{justify:"space-between",align:"center",gap:"small"},{default:r(()=>[(n(),v(J(t(ie)(o.accessControl.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),a(t(W),{style:{width:"300px","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}},{default:r(()=>[a(t(Q),{title:o.accessControl.title,placement:"left",open:o.accessControl.title.length>36?void 0:!1},{default:r(()=>[g(P(o.accessControl.title),1)]),_:1},8,["title","open"])]),_:1}),a(t(w),{gap:"large",align:"center"},{default:r(()=>[a(qe,{disabled:o.accessControl.visibility==="public",style:{width:"320px"},value:o.accessControl.requiredRoles||[],"role-options":c.value||[],"onUpdate:value":h[0]||(h[0]=d=>m(d))},null,8,["disabled","value","role-options"]),a(t(X),{value:o.accessControl.visibility},{default:r(()=>[a(t(Z),{value:"public",onChange:h[1]||(h[1]=d=>f(!0))},{default:r(()=>[a(t(w),{align:"center",gap:"small"},{default:r(()=>[g(" Public "),a(t(ae),{size:14})]),_:1})]),_:1}),a(t(Z),{value:"private",onChange:h[2]||(h[2]=d=>f(!1))},{default:r(()=>[a(t(w),{align:"center",gap:"small"},{default:r(()=>[g(" Private "),a(t(Me),{size:14})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}))}}),Be=C({__name:"DanglingRolesAlert",props:{danglingRoles:{}},setup(i){return(e,s)=>(n(),v(t(B),{type:"warning","show-icon":"",closable:"",style:{margin:"5px"}},{description:r(()=>[a(t(Y),null,{default:r(()=>[g("The following roles are not defined in the Cloud Console:")]),_:1}),(n(!0),y(H,null,S(e.danglingRoles,c=>(n(),v(t(K),{key:c,style:{margin:"2px"},color:"red"},{default:r(()=>[g(P(c),1)]),_:2},1024))),128))]),_:1}))}}),Te=C({__name:"View",props:{accessControls:{},roles:{},loading:{type:Boolean}},emits:["update:access-controls","save"],setup(i,{emit:e}){const s=i,c=u=>{const l=s.accessControls.findIndex(p=>p.id===u.id);l!==-1&&(s.accessControls[l]=u,e("update:access-controls",[...s.accessControls]))},f=b(()=>{var u;return((u=s.accessControls)==null?void 0:u.filter(l=>l.hasChanges()))||[]}),m=b(()=>f.value.length>0),h={save:async()=>{e("save")},hasChanges:()=>m.value},d=b(()=>{const u=[...new Set(s.accessControls.flatMap(p=>p.requiredRoles)||[])],l=s.roles.map(p=>p.name)||[];return(u==null?void 0:u.filter(p=>!l.includes(p)))||[]});return(u,l)=>(n(),y(H,null,[!u.loading&&d.value.length>0?(n(),v(Be,{key:0,"dangling-roles":d.value},null,8,["dangling-roles"])):k("",!0),a(re,{model:h}),a(t(w),{vertical:"",gap:"small",style:{"margin-top":"10px"}},{default:r(()=>[(n(!0),y(H,null,S(u.accessControls,p=>(n(),v(t(w),{key:p.id},{default:r(()=>[a(xe,{"access-control":p,roles:u.roles,"onUpdate:accessControl":c},null,8,["access-control","roles"])]),_:2},1024))),128))]),_:1})],64))}}),it=C({__name:"AccessControlEditor",setup(i){const e=x(),s=new Ze,{result:c,refetch:f}=q(async()=>await s.list()),m=b(()=>{var l;return((l=c.value)==null?void 0:l.filter(p=>p.hasChanges()))||[]}),o=async()=>{await s.update(m.value),await f()},h=new oe,{result:d,loading:u}=q(()=>h.list(100,0));return(l,p)=>(n(),v(E,null,{default:r(()=>[a(t(ee),null,{default:r(()=>[g("Access Control")]),_:1}),a(t(j),null,{default:r(()=>[g(" Set your project\u2019s pages as public, accessible to all users, or restricted to users with specific roles. ")]),_:1}),a(t(j),null,{default:r(()=>{var V;return[g(" Manage users and roles on the cloud's "),a(t(te),{href:(V=t(e).links)==null?void 0:V.users,target:"abstra_project"},{default:r(()=>[g("Access Control tab")]),_:1},8,["href"]),g(". Settings applied here will be enforced only in the cloud environment. ")]}),_:1}),a(t(B),{style:{width:"fit-content","margin-bottom":"24px"}},{message:r(()=>[g(" You may need to refresh this page to sync the roles with the cloud environment ")]),_:1}),t(c)?(n(),v(Te,{key:0,"access-controls":t(c),"onUpdate:accessControls":p[0]||(p[0]=V=>se(c)?c.value=V:null),roles:t(d)||[],loading:t(u),onSave:o},null,8,["access-controls","roles","loading"])):k("",!0)]),_:1}))}});export{it as default};
//# sourceMappingURL=AccessControlEditor.34d91f59.js.map
