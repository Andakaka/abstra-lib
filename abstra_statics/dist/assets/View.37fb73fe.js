var ye=Object.defineProperty;var fe=(s,e,a)=>e in s?ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var U=(s,e,a)=>(fe(s,typeof e!="symbol"?e+"":e,a),a);import{a as q}from"./asyncComputed.0bf323b3.js";import{d as b,e as E,c as g,w as l,u as t,o as m,b as r,cI as z,ax as h,as as G,cK as ge,bL as _,d9 as he,D as T,cs as w,bD as N,cr as F,f as W,el as H,W as Q,e9 as ve,cZ as _e,e6 as we,aJ as X,cx as Y,e7 as be,V as Ce,R as $,d5 as ke,d3 as Pe}from"./vue-router.dd717642.js";import{A as x}from"./index.d975b3ce.js";import{_ as Ue}from"./DocsButton.vue_vue_type_script_setup_true_lang.7bd10fe6.js";import{A as B}from"./index.90023384.js";import{C as ee}from"./CrudView.ee2a268a.js";import{G as te}from"./PhPencil.vue.3d887111.js";import{C as Re}from"./repository.b01877fc.js";import{C as R}from"./gateway.e1fbd9c2.js";import{E as ae}from"./record.72e2da8f.js";import{p as k}from"./popupNotifcation.de66387b.js";import{a as K}from"./ant-design.427fb3e3.js";import{A as M,T as xe}from"./TabPane.ec4620b2.js";import"./BookOutlined.2414c180.js";import"./isNumeric.75337b1e.js";import"./router.4c787d53.js";import"./url.2a0380b6.js";import"./PhDotsThreeVertical.vue.bd4addcb.js";import"./fetch.a00c4fd2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="ce9bebd4-dcd7-45c1-9dc5-8912863bc828",s._sentryDebugIdIdentifier="sentry-dbid-ce9bebd4-dcd7-45c1-9dc5-8912863bc828")}catch{}})();const Ee=b({__name:"View",props:{signupPolicy:{}},emits:["updated","save"],setup(s,{emit:e}){const a=s,o=E(a.signupPolicy.strategy),n=E(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns:[]),i=E(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns.map(c=>({label:c})):[]),y=c=>{const C=c;if(n.value=C,C.length===0){o.value="inviteOnly",f("inviteOnly");return}i.value=C.map(P=>({label:P})),a.signupPolicy.emailPatterns=c,e("updated",a.signupPolicy)},p=()=>{e("save")},f=c=>{o.value=c,c!=="patternOnly"&&(c==="inviteOnly"&&a.signupPolicy.allowOnlyInvited(),e("updated",a.signupPolicy))};return(c,C)=>(m(),g(t(he),{style:{"padding-top":"8px",width:"100%"},justify:"space-between",align:"flex-end"},{default:l(()=>[r(t(ge),{value:o.value,"onUpdate:value":f},{default:l(()=>[r(t(x),{direction:"vertical"},{default:l(()=>[r(t(z),{value:"inviteOnly"},{default:l(()=>[h("Allow listed users only")]),_:1}),r(t(x),null,{default:l(()=>[r(t(z),{value:"patternOnly"},{default:l(()=>[h("Allow everyone from this domain:")]),_:1}),r(t(G),{mode:"tags",value:c.signupPolicy.emailPatterns,style:{"min-width":"300px"},placeholder:"@domain.com or sub.domain.com",disabled:o.value!=="patternOnly",options:i.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":y},null,8,["value","disabled","options"])]),_:1})]),_:1})]),_:1},8,["value"]),r(t(_),{disabled:!c.signupPolicy.hasChanges,type:"primary",onClick:p},{default:l(()=>[h(" Save changes ")]),_:1},8,["disabled"])]),_:1}))}}),Ae=b({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(s,{emit:e}){const o=s.roleOptions.map(p=>({label:p.name,value:p.name})),n=T({email:"",roles:[]});function i(){e("cancel")}function y(){!n.email||e("created",n)}return(p,f)=>(m(),g(t(B),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(x),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email",required:!0},{default:l(()=>[r(t(N),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),De=b({__name:"UpdateUser",props:{roleOptions:{},email:{},roles:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=a.roleOptions.map(p=>({label:p.name,value:p.name})),n=T({email:a.email,roles:a.roles});function i(){e("cancel")}function y(){e("updated",n)}return(p,f)=>(m(),g(t(B),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(x),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email"},{default:l(()=>[r(t(N),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Oe=b({__name:"View",props:{loading:{type:Boolean},users:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=W(()=>{var o;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(o=e.users.map(n=>({key:n.email,cells:[{type:"text",text:n.email},{type:"slot",key:"roles",payload:{roles:n.roles}},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:H,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"users",title:"",loading:o.loading,description:"List all app users.","empty-title":"No users yet",table:a.value,"create-button-text":"Add users",onCreate:o.onCreate},{roles:l(({payload:i})=>[(m(!0),Q(X,null,ve(i.roles,y=>(m(),g(t(_e),{key:y,bordered:""},{default:l(()=>[h(we(y),1)]),_:2},1024))),128))]),_:1},8,["loading","table","onCreate"]))}}),Ie=b({__name:"NewRole",emits:["created","cancel"],setup(s,{emit:e}){const a=T({name:"",description:""});function o(){e("cancel")}function n(){!a.name||e("created",a)}return(i,y)=>(m(),g(t(B),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:o},{extra:l(()=>[r(t(x),null,{default:l(()=>[r(t(_),{onClick:o},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:n},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:a,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name",required:!0},{default:l(()=>[r(t(N),{value:a.name,"onUpdate:value":y[0]||(y[0]=p=>a.name=p)},null,8,["value"])]),_:1}),r(t(w),{key:"description",label:"Description"},{default:l(()=>[r(t(Y),{value:a.description,"onUpdate:value":y[1]||(y[1]=p=>a.description=p),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),$e=b({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=T({description:a.description});function n(){e("cancel")}function i(){e("updated",o)}return(y,p)=>(m(),g(t(B),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:l(()=>[r(t(x),null,{default:l(()=>[r(t(_),{onClick:n},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:i},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:o,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name"},{default:l(()=>[r(t(N),{value:a.name,disabled:""},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(Y),{value:o.description,"onUpdate:value":p[0]||(p[0]=f=>o.description=f),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),je=b({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=W(()=>{var o;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(o=e.roles.map(n=>({key:n.id,cells:[{type:"text",text:n.name},{type:"text",text:n.description},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:H,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"roles",loading:o.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:a.value,"create-button-text":"Add roles",onCreate:o.onCreate},null,8,["loading","table","onCreate"]))}}),S=class{constructor(e){U(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new S(e)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":"patternOnly"}get changes(){return this.record.changes}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(e){return S.pattern.test(e)}};let A=S;U(A,"pattern",new RegExp("^@?(?!-)[A-Za-z0-9-]{1,}(?<!-)(\\.[A-Za-z]{2,})+$"));class Se{constructor(){U(this,"urlPath","signup-policy")}async update(e,a){return R.patch(`projects/${e}/${this.urlPath}`,a)}async get(e){return R.get(`projects/${e}/${this.urlPath}`)}}const J=new Se;class Te{constructor(e){this.projectId=e}async update(e){const{emailPatterns:a}=e.changes;if(!a)return e;const o=await J.update(this.projectId,{emailPatterns:a});return A.from(o)}async get(){const e=await J.get(this.projectId);return A.from(e)}}class Z{constructor(e){U(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new Z(e)}toDTO(){return this.record.toDTO()}get changes(){return this.record.changes}get id(){return this.record.get("id")}get email(){return this.record.get("email")}set email(e){this.record.set("email",e)}get projectId(){return this.record.get("projectId")}get roles(){return this.record.get("roles")}set roles(e){this.record.set("roles",e)}update(e){this.record.update(e)}resetChanges(){this.record.resetChanges()}}class Ne{constructor(){U(this,"urlPath","users")}async create(e,a){return R.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await R.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:o}){const n={};a&&(n.limit=a.toString()),o&&(n.offset=o.toString());const i=new URLSearchParams(n);return R.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,o){return R.patch(`projects/${e}/${this.urlPath}/${a}`,o)}}const j=new Ne;class Fe{constructor(e){this.projectId=e}async create(e){await j.create(this.projectId,e)}async update(e,a){await j.update(this.projectId,e,a)}async delete(e){await j.delete(this.projectId,e)}async list(e,a){return(await j.list(this.projectId,{limit:e,offset:a})).map(Z.from)}}const rt=b({__name:"View",setup(s){const a=be().params.projectId,o=E({type:"initial"}),n=E("users");Ce(()=>{const d=new URLSearchParams(location.search).get("selected-panel")||"users",v=["roles","users"].includes(d)?d:"users";d&&(n.value=v)});const i=()=>{o.value.type="initial"},y=()=>{o.value.type="creatingUser"},p=u=>{o.value={type:"editingUser",payload:u}},f=()=>{o.value.type="creatingRole"},c=u=>{o.value={type:"editingRole",payload:u}},C=new Te(a),{result:P,refetch:oe}=q(()=>C.get()),ne=async()=>{if(!!P.value)try{await C.update(P.value),oe()}catch(u){u instanceof Error&&k("Update Error",u.message)}},D=new Fe(a),{loading:re,result:le,refetch:O}=q(()=>D.list(100,0)),I=new Re(a),{loading:se,result:V,refetch:L}=q(()=>I.list(100,0)),ie=async u=>{try{if(o.value.type!=="creatingUser")return;await D.create(u),i(),O()}catch(d){d instanceof Error&&k("Create Error",d.message)}},ce=async u=>{try{if(o.value.type!=="editingUser")return;await D.update(o.value.payload.id,u),i(),O()}catch(d){d instanceof Error&&k("Update Error",d.message)}},ue=async u=>{if(!!await K("Deleting users revoke their access to your application (in case they aren't allowed by a domain rule). Are you sure you want to continue?"))try{await D.delete(u.id),O()}catch(v){v instanceof Error&&k("Delete Error",v.message)}},de=async u=>{try{if(o.value.type!=="creatingRole")return;await I.create(u),i(),L()}catch(d){d instanceof Error&&k("Create Error",d.message)}},pe=async u=>{try{if(o.value.type!=="editingRole")return;await I.update(o.value.payload.id,u),i(),L()}catch(d){d instanceof Error&&k("Update Error",d.message)}},me=async u=>{if(!!await K("Deleteing roles may revoke access to some features in your application. Are you sure you want to continue?"))try{await I.delete(u.id),L(),O()}catch(v){v instanceof Error&&k("Delete Error",v.message)}};return(u,d)=>(m(),Q(X,null,[r(t(ke),null,{default:l(()=>[h("Access Control")]),_:1}),r(t(Pe),null,{default:l(()=>[h(" Manage how your end users interect with your application. "),r(Ue,{path:"concepts/access-control"})]),_:1}),r(t(xe),{"active-key":n.value,"onUpdate:activeKey":d[0]||(d[0]=v=>n.value=v)},{default:l(()=>[r(t(M),{key:"users",tab:"Users"}),r(t(M),{key:"roles",tab:"Roles"})]),_:1},8,["active-key"]),n.value==="users"&&t(P)?(m(),g(Ee,{key:0,"signup-policy":t(P),onSave:ne},null,8,["signup-policy"])):$("",!0),n.value==="users"?(m(),g(Oe,{key:1,loading:t(re),users:t(le)||[],onCreate:y,onEdit:p,onDelete:ue},null,8,["loading","users"])):$("",!0),n.value==="roles"?(m(),g(je,{key:2,loading:t(se),roles:t(V)||[],onCreate:f,onEdit:c,onDelete:me},null,8,["loading","roles"])):$("",!0),o.value.type==="creatingUser"?(m(),g(Ae,{key:3,"role-options":t(V)||[],onCancel:i,onCreated:ie},null,8,["role-options"])):o.value.type==="editingUser"?(m(),g(De,{key:4,email:o.value.payload.email,roles:o.value.payload.roles||[],"role-options":t(V)||[],onUpdated:ce,onCancel:i},null,8,["email","roles","role-options"])):o.value.type==="creatingRole"?(m(),g(Ie,{key:5,onCancel:i,onCreated:de})):o.value.type==="editingRole"?(m(),g($e,{key:6,name:o.value.payload.name,description:o.value.payload.description,onUpdated:pe,onCancel:i},null,8,["name","description"])):$("",!0)],64))}});export{rt as default};
//# sourceMappingURL=View.37fb73fe.js.map
