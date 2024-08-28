var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{p as y}from"./popupNotifcation.d430940c.js";import{L as b,N as E,O as A,l as h}from"./vue-router.4a8a3251.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="10d87c98-0782-49b1-9db0-50ce26c1c532",e._sentryDebugIdIdentifier="sentry-dbid-10d87c98-0782-49b1-9db0-50ce26c1c532")}catch{}})();class m{constructor(){d(this,"storage");this.storage=new b(E.string(),"auth:jwt")}async authenticate(t){f.post("authn/authenticate",{email:t})}async verify(t,o){const n=await f.post("authn/verify",{email:t,token:o});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const o=A(t);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:t,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new m,T=()=>window.location.host.includes(".abstra.io"),R={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},O={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=e=>{const t="VITE_"+h.toUpper(h.snakeCase(e)),o={VITE_SENTRY_RELEASE:"ac8206fe437b5f80b38046af19aa2d92a8dc3ac4",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return o||(T()?R[e]:O[e])},i={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class u extends Error{constructor(t,o){super(t),this.status=o}static async fromResponse(t){const o=await t.text();return new u(o,t.status)}}class f{static async get(t,o){const n=Object.fromEntries(Object.entries(o!=null?o:{}).filter(([,p])=>p!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${i.cloudApi}/console/${t}${s}`,{headers:{...c.headers}});if(a.status===403){y("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${i.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,o,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${i.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:s?o:JSON.stringify(o)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,o){const n=await fetch(`${i.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(o)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const o=await fetch(`${i.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!o.ok)throw await u.fromResponse(o)}}export{f as C,i as E,c as a};
//# sourceMappingURL=gateway.8fe65dcb.js.map
