var c=Object.defineProperty;var f=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>(f(t,typeof e!="symbol"?e+"":e,s),s);import{a as l}from"./asyncComputed.bdfd1ce3.js";import"./vue-router.21f91ffc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="208da0f8-f3a4-47ff-afc8-da25ec0d34a6",t._sentryDebugIdIdentifier="sentry-dbid-208da0f8-f3a4-47ff-afc8-da25ec0d34a6")}catch{}})();class u{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,s){const n=await fetch(`/_editor/api/linters/fix/${e}/${s}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return i.refetch(),n.json()}}const r=new u,i=l(async()=>(await r.check()).map(e=>new m(e)));class d{constructor(e,s){a(this,"name");a(this,"label");a(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=s}async fix(){await r.fix(this.ruleName,this.name)}}class h{constructor(e,s){a(this,"label");a(this,"fixes");this.ruleName=s,this.label=e.label,this.fixes=e.fixes.map(n=>new d(n,s))}}class m{constructor(e){a(this,"name");a(this,"label");a(this,"type");a(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(s=>new h(s,this.name))}static get asyncComputed(){return i}static fromName(e){var n;const s=(n=i.result.value)==null?void 0:n.find(o=>o.name===e);if(!s)throw new Error(`Rule ${e} not found`);return s}}export{m as L};
//# sourceMappingURL=linters.32536d29.js.map
