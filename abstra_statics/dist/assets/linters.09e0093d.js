var c=Object.defineProperty;var l=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>(l(t,typeof e!="symbol"?e+"":e,s),s);import{a as f}from"./asyncComputed.62a55306.js";import"./vue-router.693c9aae.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="84a7ddca-f7ba-4a74-af6b-812656061ff2",t._sentryDebugIdIdentifier="sentry-dbid-84a7ddca-f7ba-4a74-af6b-812656061ff2")}catch{}})();class u{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const n=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return i.refetch(),n.json()}}const r=new u,i=f(async()=>(await r.check()).map(e=>new m(e)));class d{constructor(e,s){a(this,"name");a(this,"label");a(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class h{constructor(e,s){a(this,"label");a(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(n=>new d(n,s))}}class m{constructor(e){a(this,"name");a(this,"label");a(this,"type");a(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new h(s,this.name))}static get asyncComputed(){return i}static fromName(e){var n;const s=(n=i.result.value)==null?void 0:n.find(o=>o.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{m as L};
//# sourceMappingURL=linters.09e0093d.js.map
