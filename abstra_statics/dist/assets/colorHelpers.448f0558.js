import"./vue-router.5275df78.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a2194664-eb7a-4ba5-a6af-21bd25622a4d",t._sentryDebugIdIdentifier="sentry-dbid-a2194664-eb7a-4ba5-a6af-21bd25622a4d")}catch{}})();function p(t,e){const{r:n,g:r,b:a,usePound:o}=g(t);return w(c(n,-e),c(r,-e),c(a,-e),o)}function c(t,e){const n=t*(100+e*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(t){return t.startsWith("#")||t.match(/^(rgb|hsl)/)}const v=(t,e)=>y(p(y(t),e)),P=t=>k(t)?v(t,.1):p(t,.1);function k(t){const{r:e,g:n,b:r}=g(t);return e*.299+n*.587+r*.114<186}function g(t){let e=!1;t[0]=="#"&&(t=t.slice(1),e=!0);const n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:e}}function y(t){const{r:e,g:n,b:r,usePound:a}=g(t);return w(255-e,255-n,255-r,a)}const w=(t,e,n,r=!0)=>(r?"#":"")+(n|e<<8|t<<16).toString(16).padStart(6,"0");function _(t){return new Promise((e,n)=>{const r=document.createElement("img");r.src=t,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let a=0;r.onerror=o=>n(new Error(`Failed to load image: ${o}`)),r.onload=()=>{const{width:o,height:l}=r,s=document.createElement("canvas");s.width=o,s.height=l;const u=s.getContext("2d");if(!u)return e(!1);u.drawImage(r,0,0);const I=u.getImageData(0,0,s.width,s.height),{data:d}=I;let f,b,h,m;for(let i=0,x=d.length;i<x;i+=4)f=d[i],b=d[i+1],h=d[i+2],m=Math.floor((f+b+h)/3),a+=m;const D=Math.floor(a/(o*l));document.body.removeChild(r),e(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.448f0558.js.map
