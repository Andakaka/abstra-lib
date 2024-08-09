import{d as p,B as n,f as d,o as t,W as r,Z,R as h,es as y,a as o}from"./vue-router.6a68d184.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[a]="64c88f35-ef39-4ce8-93fa-51130b770780",l._sentryDebugIdIdentifier="sentry-dbid-64c88f35-ef39-4ce8-93fa-51130b770780")}catch{}})();const A=["width","height","fill","transform"],w={key:0},M=o("path",{d:"M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z"},null,-1),b=[M],k={key:1},C=o("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),B=o("path",{d:"M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"},null,-1),D=[C,B],I={key:2},S=o("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"},null,-1),_=[S],x={key:3},z=o("path",{d:"M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"},null,-1),N=[z],V={key:4},E=o("path",{d:"M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"},null,-1),P=[E],$={key:5},j=o("path",{d:"M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"},null,-1),Q=[j],W={name:"PhQuestion"},H=p({...W,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(l){const a=l,i=n("weight","regular"),v=n("size","1em"),u=n("color","currentColor"),m=n("mirrored",!1),s=d(()=>{var e;return(e=a.weight)!=null?e:i}),c=d(()=>{var e;return(e=a.size)!=null?e:v}),g=d(()=>{var e;return(e=a.color)!=null?e:u}),f=d(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:m?"scale(-1, 1)":void 0);return(e,q)=>(t(),r("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:c.value,height:c.value,fill:g.value,transform:f.value},e.$attrs),[Z(e.$slots,"default"),s.value==="bold"?(t(),r("g",w,b)):s.value==="duotone"?(t(),r("g",k,D)):s.value==="fill"?(t(),r("g",I,_)):s.value==="light"?(t(),r("g",x,N)):s.value==="regular"?(t(),r("g",V,P)):s.value==="thin"?(t(),r("g",$,Q)):h("",!0)],16,A))}});export{H};
//# sourceMappingURL=PhQuestion.vue.6e215bce.js.map
