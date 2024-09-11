import{d as w,L as S,N as C,e as b,o as k,X as B,b as n,w as s,a as D,u as o,d7 as E,aF as r,d8 as I,bS as L,Z as f,cN as N,cL as $,$ as A}from"./vue-router.5275df78.js";import{G as V,U as P}from"./UnsavedChangesHandler.228aad9d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[d]="661fa8bf-f65b-480d-a90f-583ff942dec2",a._sentryDebugIdIdentifier="sentry-dbid-661fa8bf-f65b-480d-a90f-583ff942dec2")}catch{}})();const U={class:"popup-container"},z={style:{padding:"0px 4px"}},K=w({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(a,{emit:d}){var h;const l=a,m=e=>{var t;return(t=e.parentElement)!=null?t:document.body},c=new S(C.boolean(),"dontShowUnsavedChanges"),p=b((h=c.get())!=null?h:!1),_=()=>{c.set(!0),p.value=!0},u=b(!1);async function v(){u.value=!0;try{await l.model.save(),d("save")}catch{$.error({message:"Error saving"})}finally{u.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),v())}),addEventListener("beforeunload",e=>{l.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,t)=>{var g;return k(),B("div",U,[n(o(N),{placement:"left",open:e.model.hasChanges()&&!p.value&&!e.neverShowPopover,"get-popup-container":m},{content:s(()=>[D("div",z,[n(o(E),null,{default:s(()=>[r("You have unsaved changes")]),_:1}),n(o(I),{onClick:_},{default:s(()=>[r("Don't show this again")]),_:1})])]),default:s(()=>{var y;return[n(o(L),{class:"save-button",loading:u.value,disabled:!((y=e.model)!=null&&y.hasChanges()),onClick:t[0]||(t[0]=i=>v())},{icon:s(()=>[f(e.$slots,"icon",{},()=>[n(o(V),{size:"18"})],!0)]),default:s(()=>{var i;return[(i=e.model)!=null&&i.hasChanges()?f(e.$slots,"with-changes",{key:0},()=>[r(" Save ")],!0):f(e.$slots,"without-changes",{key:1},()=>[r(" Saved ")],!0)]}),_:3},8,["loading","disabled"])]}),_:3},8,["open"]),n(P,{"has-changes":(g=e.model)==null?void 0:g.hasChanges()},null,8,["has-changes"])])}}});const G=A(K,[["__scopeId","data-v-e79e182b"]]);export{G as S};
//# sourceMappingURL=SaveButton.7e435442.js.map
