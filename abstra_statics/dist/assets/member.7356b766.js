import{C as r}from"./gateway.237dc814.js";import"./vue-router.7c54f186.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="aad063e1-e599-4111-a5c4-a40e4e7d843b",n._sentryDebugIdIdentifier="sentry-dbid-aad063e1-e599-4111-a5c4-a40e4e7d843b")}catch{}})();class i{async create(t){return r.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return r.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return r.get(`organizations/${t}/members`)}async get(t,e){return r.get(`organizations/${t}/members/${e}`)}async onboarding(){return r.get("authors/onboarding")}}const o=new i;class s{constructor(t){this.dto=t}static async onboarding(){return o.onboarding()}static async list(t){return(await o.list(t)).map(a=>new s(a))}static async create(t,e){const a=await o.create({organizationId:t,email:e});return new s(a)}static async get(t,e){const a=await o.get(t,e);return new s(a)}static async delete(t,e){return o.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{s as M};
//# sourceMappingURL=member.7356b766.js.map
