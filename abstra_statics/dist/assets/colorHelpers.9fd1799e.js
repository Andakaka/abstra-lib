import"./vue-router.4826ade2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d74fdfaa-2f5b-4d90-a39b-16fd2e836567",t._sentryDebugIdIdentifier="sentry-dbid-d74fdfaa-2f5b-4d90-a39b-16fd2e836567")}catch{}})();function p(t,e){const{r:n,g:r,b:a,usePound:o}=f(t);return w(c(n,-e),c(r,-e),c(a,-e),o)}function c(t,e){const n=t*(100+e*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(t){return t.startsWith("#")||t.match(/^(rgb|hsl)/)}const v=(t,e)=>y(p(y(t),e)),P=t=>k(t)?v(t,.1):p(t,.1);function k(t){const{r:e,g:n,b:r}=f(t);return e*.299+n*.587+r*.114<186}function f(t){let e=!1;t[0]=="#"&&(t=t.slice(1),e=!0);const n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:e}}function y(t){const{r:e,g:n,b:r,usePound:a}=f(t);return w(255-e,255-n,255-r,a)}const w=(t,e,n,r=!0)=>(r?"#":"")+(n|e<<8|t<<16).toString(16).padStart(6,"0");function _(t){return new Promise((e,n)=>{const r=document.createElement("img");r.src=t,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let a=0;r.onerror=o=>n(new Error(`Failed to load image: ${o}`)),r.onload=()=>{const{width:o,height:g}=r,s=document.createElement("canvas");s.width=o,s.height=g;const u=s.getContext("2d");if(!u)return e(!1);u.drawImage(r,0,0);const I=u.getImageData(0,0,s.width,s.height),{data:i}=I;let l,b,h,m;for(let d=0,x=i.length;d<x;d+=4)l=i[d],b=i[d+1],h=i[d+2],m=Math.floor((l+b+h)/3),a+=m;const D=Math.floor(a/(o*g));document.body.removeChild(r),e(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.9fd1799e.js.map
