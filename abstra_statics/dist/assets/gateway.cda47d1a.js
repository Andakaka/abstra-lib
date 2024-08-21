var b=Object.defineProperty;var w=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var h=(e,t,o)=>(w(e,typeof t!="symbol"?t+"":t,o),o);import{p as g}from"./popupNotifcation.4eefefd9.js";import{L as y,N as E,O as A,l}from"./vue-router.72bc35d4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="48b6db44-b6fb-4364-8424-bc2e51aafbfb",e._sentryDebugIdIdentifier="sentry-dbid-48b6db44-b6fb-4364-8424-bc2e51aafbfb")}catch{}})();class m{constructor(){h(this,"storage");this.storage=new y(E.string(),"auth:jwt")}async authenticate(t){f.post("authn/authenticate",{email:t})}async verify(t,o){const n=await f.post("authn/verify",{email:t,token:o});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const o=A(t);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:t,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const i=new m,T=()=>window.location.host.includes(".abstra.io"),R={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},O={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},d=e=>{const t="VITE_"+l.toUpper(l.snakeCase(e)),o={VITE_SENTRY_RELEASE:"c467457b02030e0b4bfba23999f1db1fc483707b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return o||(T()?R[e]:O[e])},c={cloudApi:d("cloud-api"),onboarding:d("onboarding")};class u extends Error{constructor(t,o){super(t),this.status=o}static async fromResponse(t){const o=await t.text();return new u(o,t.status)}}class f{static async get(t,o){const n=Object.fromEntries(Object.entries(o!=null?o:{}).filter(([,p])=>p!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${c.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(a.status===403){g("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${c.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,o,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${c.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?o:JSON.stringify(o)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,o){const n=await fetch(`${c.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(o)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const o=await fetch(`${c.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!o.ok)throw await u.fromResponse(o)}}export{f as C,c as E,i as a};
//# sourceMappingURL=gateway.cda47d1a.js.map
