import{d as x,b as o,c as s,e as n,q as T,r as $,R as f,H as v,v as t,F as S,J as B,u as E,a as U,t as V,y as u,V as g,W as w,Y as I,B as H,N as q,O,w as k,L as A}from"./registerWidgets.fff064a1.js";import{R as D,T as J,B as N,a as R}from"./BackButton.ffb72b1d.js";import{L as P,a as G}from"./CircularLoading.59d7fd3d.js";import{H as M}from"./hooks.039c0cd9.js";import{z as L,A as Q,e as F}from"./icons.907f45d7.js";import{S as j}from"./SaveButton.90897407.js";import"./forms.7bc6baea.js";import"./utils.3371dfe5.js";import"./dashes.da7ff1db.js";import"./runnerData.9e14dd92.js";import"./jobs.af366134.js";const z={class:"hook-settings"},W=x({__name:"HookSettings",props:{hook:null},setup(l){return(p,_)=>(o(),s("div",z,[n(D,{runtime:l.hook},null,8,["runtime"])]))}});const Y=T(W,[["__scopeId","data-v-6e8accf0"]]),K={class:"options-wrapper"},X=["onClick"],Z=x({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(l,{emit:p}){const _=$(null),e=h=>{var c;p("select",h),(c=_.value)==null||c.blur()};return(h,c)=>(o(),s("div",{ref_key:"dropdown",ref:_,class:"dropdown",tabindex:"1"},[f(v(l.value)+" ",1),t("div",K,[(o(!0),s(S,null,B(l.options,m=>(o(),s("div",{key:m.value,class:"option",onClick:y=>e(m.value)},v(m.label),9,X))),128))])],512))}});const ee=T(Z,[["__scopeId","data-v-cac46a2e"]]),C=l=>(q("data-v-8956304f"),l=l(),O(),l),oe={class:"hook-runner"},te={class:"title"},se={class:"section"},ae=C(()=>t("div",{class:"section-header"},"Request configuration",-1)),ne=C(()=>t("div",{class:"subsection-label"},"Method",-1)),le={class:"subsection-label"},ie=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],de={key:0,class:"subsection-label"},re={class:"property"},ue=C(()=>t("div",{class:"property-label"},"Body is JSON",-1)),_e={class:"section"},pe=C(()=>t("div",{class:"section-header"},"Response",-1)),he={key:0,class:"section"},me={class:"no-execution-message"},ve={key:1,class:"section"},ye=x({__name:"HookRunner",props:{hook:null},setup(l){const p=l,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=E({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),h=async()=>{const y={"Content-Type":e.isBodyJson?"application/json":"text/plain"},i=await p.hook.run({method:e.method,query:e.queryParams.reduce((d,{name:a,value:r})=>(a&&r&&(d[a]=r),d),{}),body:e.body,headers:{...y}});e.response=i},c=()=>{e.queryParams.push({name:"",value:""})},m=y=>{e.queryParams=e.queryParams.filter((i,d)=>d!==y)};return(y,i)=>{const d=U("icon");return o(),s("div",oe,[t("div",te,[f(" Test your hook here "),e.loading?(o(),V(P,{key:0})):(o(),s("button",{key:1,class:"execution-button",onClick:h},[n(d,{path:u(L),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),f(" Run ")]))]),t("div",se,[ae,ne,n(ee,{value:e.method,options:_,onSelect:i[0]||(i[0]=a=>e.method=a)},null,8,["value"]),t("div",le,[f(" Query Params "),n(d,{class:"action-icon",path:u(Q),width:"16",height:"16","fill-hover":"#777777",onClick:c},null,8,["path"])]),(o(!0),s(S,null,B(e.queryParams,(a,r)=>(o(),s("div",{key:r,class:"params-input"},[g(t("input",{"onUpdate:modelValue":b=>a.name=b,type:"text",placeholder:"name"},null,8,ie),[[w,a.name]]),g(t("input",{"onUpdate:modelValue":b=>a.value=b,type:"text",placeholder:"value"},null,8,ce),[[w,a.value]]),n(d,{class:"delete-icon",path:u(F),"fill-hover":"#777777",onClick:b=>m(r)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),s("div",de,[f(" Request Body "),t("div",re,[g(t("input",{"onUpdate:modelValue":i[1]||(i[1]=a=>e.isBodyJson=a),class:"checkbox-input",type:"checkbox"},null,512),[[I,e.isBodyJson]]),ue])])):H("",!0),e.method!=="GET"?g((o(),s("textarea",{key:1,"onUpdate:modelValue":i[2]||(i[2]=a=>e.body=a)},null,512)),[[w,e.body]]):H("",!0)]),t("div",_e,[pe,e.loading?(o(),s("div",he,[t("div",me,[n(P)])])):e.response?(o(),s("div",ve,[t("pre",null,"Status: "+v(e.response.status),1),(o(!0),s(S,null,B(e.response.headers,(a,r)=>(o(),s("pre",{key:r},v(r)+": "+v(a),1))),128)),t("pre",null,v(e.response.body),1)])):H("",!0)])])}}});const ke=T(ye,[["__scopeId","data-v-8956304f"]]),fe={class:"page"},be={key:0,class:"loading"},ge=x({__name:"HookEditor",setup(l){const p=A(),{loading:_,result:e}=G(async()=>await M.get(p.params.hookPath)),h=async c=>{e.value&&(e.value.path=c,await e.value.save())};return(c,m)=>(o(),s("div",fe,[u(_)||!u(e)?(o(),s("div",be,[n(P)])):(o(),V(J,{key:1,class:"editor"},{left:k(()=>[n(N,{link:"/_editor/hooks"})]),right:k(()=>[n(j,{runtime:u(e)},null,8,["runtime"])]),default:k(()=>[n(R,{title:"Debug"},{default:k(()=>[n(ke,{hook:u(e)},null,8,["hook"])]),_:1}),n(R,{title:"Settings"},{default:k(()=>[n(Y,{hook:u(e),onUpdatePath:h},null,8,["hook"])]),_:1})]),_:1}))]))}});const Ee=T(ge,[["__scopeId","data-v-704eb04b"]]);export{Ee as default};
//# sourceMappingURL=HookEditor.530f253d.js.map
