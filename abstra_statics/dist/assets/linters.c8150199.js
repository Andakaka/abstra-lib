var l=Object.defineProperty;var c=(t,e,s)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(c(t,typeof e!="symbol"?e+"":e,s),s);import{a as b}from"./asyncComputed.f502ed1b.js";import"./vue-router.923cbcd8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b4bd5b79-b945-4f46-b514-45fb6d2ab8b4",t._sentryDebugIdIdentifier="sentry-dbid-b4bd5b79-b945-4f46-b514-45fb6d2ab8b4")}catch{}})();class f{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const a=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!a.ok)throw new Error("Failed to fix");return i.refetch(),a.json()}}const r=new f,i=b(async()=>(await r.check()).map(e=>new h(e)));class u{constructor(e,s){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class d{constructor(e,s){n(this,"label");n(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(a=>new u(a,s))}}class h{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new d(s,this.name))}static get asyncComputed(){return i}static fromName(e){var a;const s=(a=i.result.value)==null?void 0:a.find(o=>o.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{h as L};
//# sourceMappingURL=linters.c8150199.js.map
