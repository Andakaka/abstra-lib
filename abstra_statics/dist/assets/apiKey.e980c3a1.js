var i=Object.defineProperty;var o=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.276f0a1b.js";import"./vue-router.861ebc0c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="e0dc8275-7747-4d0f-895d-bbbc6de379c4",s._sentryDebugIdIdentifier="sentry-dbid-e0dc8275-7747-4d0f-895d-bbbc6de379c4")}catch{}})();class u{constructor(){d(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return r.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await r.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return r.get(`projects/${t}/${this.urlPath}`)}}const a=new u;class n{constructor(t){this.dto=t}static async list(t){return(await a.list(t)).map(c=>new n(c))}static async create(t){const e=await a.create(t);return new n(e)}static async delete(t,e){await a.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{n as A};
//# sourceMappingURL=apiKey.e980c3a1.js.map
