var be=Object.defineProperty;var Ee=(a,e,t)=>e in a?be(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var E=(a,e,t)=>(Ee(a,typeof e!="symbol"?e+"":e,t),t);import{d as N,B as $,f as w,o as n,W as r,Z as K,R as S,es as de,a as l,$ as G,D as _e,e as b,c as x,w as h,ax as k,et as B,u,aN as T,eu as $e,g as re,J as ce,V as Ce,a7 as we,r as Le,b as _,er as j,X as Ve,aJ as Me,ew as Ze,eZ as xe,e_ as Ie,d5 as Ne,eC as De,eD as Pe,eA as Oe,bD as Ae,co as He,Q as ae,d0 as fe,bL as oe}from"./vue-router.6ef80130.js";import{u as ue}from"./uuid.e7cc849f.js";import{G as ge}from"./PhCaretRight.vue.6fe9fc98.js";import{A as ve,H as ze,J as Te}from"./ai.c33f1eb5.js";import{u as Be}from"./editor.fe60db0b.js";import{H as Fe}from"./PhCheckCircle.vue.df110077.js";import{I as We}from"./PhCopySimple.vue.6f214744.js";import{L as Re}from"./LoadingOutlined.5c2f3d15.js";import"./linters.a074a237.js";import{S as je}from"./scripts.f7241ddc.js";import{d as Je,v as Ke,e as Ge}from"./validations.0998558f.js";import{W as le}from"./workspaces.bf172934.js";import{a as me}from"./asyncComputed.0893981e.js";import{G as qe}from"./PhPencil.vue.0b2bc667.js";import{l as se,R as ke,e as J,M as R}from"./toggleHighContrast.3ab771ce.js";import{A as Ue}from"./index.233bd23b.js";import{C as Ye}from"./Card.f13a0c4d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="a8d185ee-daa8-415d-9c7a-54135eac089d",a._sentryDebugIdIdentifier="sentry-dbid-a8d185ee-daa8-415d-9c7a-54135eac089d")}catch{}})();const Qe=["width","height","fill","transform"],Xe={key:0},et=l("path",{d:"M237.24,213.21C216.12,203,204,180.64,204,152V134.73a19.94,19.94,0,0,0-12.62-18.59l-24.86-9.81a4,4,0,0,1-2.26-5.14l21.33-53A32,32,0,0,0,167.17,6,32.13,32.13,0,0,0,126.25,24.2l-.07.18-21,53.09a3.94,3.94,0,0,1-2.14,2.2,3.89,3.89,0,0,1-3,.06L74.6,69.43A19.89,19.89,0,0,0,52.87,74C31.06,96.43,20,122.68,20,152a115.46,115.46,0,0,0,32.29,80.3A12,12,0,0,0,61,236H232a12,12,0,0,0,5.24-22.79ZM68.19,92.73,91.06,102A28,28,0,0,0,127.5,86.31l20.95-53a8.32,8.32,0,0,1,10.33-4.81,8,8,0,0,1,4.61,10.57,1.17,1.17,0,0,0,0,.11L142,92.29a28.05,28.05,0,0,0,15.68,36.33L180,137.45V152c0,1,0,2.07.05,3.1l-122.44-49A101.91,101.91,0,0,1,68.19,92.73ZM116.74,212a83.73,83.73,0,0,1-22.09-39,12,12,0,0,0-23.25,6,110.27,110.27,0,0,0,14.49,33H66.25A91.53,91.53,0,0,1,44,152a84,84,0,0,1,3.41-24.11l136.67,54.66A86.58,86.58,0,0,0,198.66,212Z"},null,-1),tt=[et],ot={key:1},at=l("path",{d:"M192.8,165.12,43.93,105.57A110.88,110.88,0,0,1,61.47,82.38a8,8,0,0,1,8.67-1.81L95.52,90.85a16,16,0,0,0,20.82-9l21-53.1c4.15-10,15.47-15.33,25.63-11.53a20,20,0,0,1,11.51,26.39L153.13,96.71a16,16,0,0,0,8.93,20.75L187,127.3a8,8,0,0,1,5,7.43V152A104.58,104.58,0,0,0,192.8,165.12Z",opacity:"0.2"},null,-1),st=l("path",{d:"M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"},null,-1),nt=[at,st],it={key:2},lt=l("path",{d:"M235.29,216.7C212.86,205.69,200,182.12,200,152V134.69a15.94,15.94,0,0,0-10.09-14.87l-28.65-11.46A8,8,0,0,1,156.79,98l22.32-56.67C184,28.79,178,14.21,165.34,9.51a24,24,0,0,0-30.7,13.71L112.25,80.08a8,8,0,0,1-10.41,4.5L73.11,73.08a15.91,15.91,0,0,0-17.38,3.66C34.68,98.4,24,123.71,24,152a111.53,111.53,0,0,0,31.15,77.53A8.06,8.06,0,0,0,61,232H232a8,8,0,0,0,8-7.51A8.21,8.21,0,0,0,235.29,216.7ZM115.11,216a87.52,87.52,0,0,1-24.26-41.71,8.21,8.21,0,0,0-9.25-6.18A8,8,0,0,0,75.28,178a105.33,105.33,0,0,0,18.36,38H64.44A95.62,95.62,0,0,1,40,152a85.92,85.92,0,0,1,7.73-36.3l137.8,55.13c3,18.06,10.55,33.5,21.89,45.19Z"},null,-1),rt=[lt],ct={key:3},ut=l("path",{d:"M234.62,218.6C211.35,207.29,198,183,198,152V134.7a14,14,0,0,0-8.82-13l-24.89-9.83a10,10,0,0,1-5.59-13L180,45.9a26,26,0,0,0-15-34.33c-12.95-4.83-27.88,1.84-33.31,15l-21,53.11a10,10,0,0,1-13,5.61L72.37,75a13.9,13.9,0,0,0-15.2,3.19C36.49,99.42,26,124.26,26,152a109.53,109.53,0,0,0,30.62,76.16A6,6,0,0,0,61,230H232a6,6,0,0,0,2.62-11.4ZM65.77,86.52a2,2,0,0,1,2.12-.43l25.4,10.29a22,22,0,0,0,28.63-12.32l21-53c3-7.13,11-10.81,18-8.21a14,14,0,0,1,8,18.54l-21.36,53.1A22.05,22.05,0,0,0,159.86,123l24.88,9.83A2,2,0,0,1,186,134.7V152c0,1.34,0,2.65.08,4L52.74,102.61A110.07,110.07,0,0,1,65.77,86.52ZM114.33,218a89.6,89.6,0,0,1-25.5-43.5,6,6,0,1,0-11.62,3A102.87,102.87,0,0,0,97.81,218H63.56A97.56,97.56,0,0,1,38,152a87.42,87.42,0,0,1,8.71-38.86L187.35,169.4c3.15,19.92,11.77,36.66,25,48.6Z"},null,-1),dt=[ut],pt={key:4},ht=l("path",{d:"M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"},null,-1),ft=[ht],gt={key:5},vt=l("path",{d:"M233.75,220.4C209.76,208.75,196,183.82,196,152V134.72a12,12,0,0,0-7.56-11.15l-24.89-9.83a12,12,0,0,1-6.71-15.55l21.33-53a23.88,23.88,0,0,0-31.93-31A24.72,24.72,0,0,0,133.62,27.3l-21,53.1A12,12,0,0,1,97,87.13L71.63,76.84a12,12,0,0,0-13,2.73C38.3,100.45,28,124.82,28,152a107.5,107.5,0,0,0,30.07,74.77A4,4,0,0,0,61,228H232a4,4,0,0,0,1.75-7.6ZM64.34,85.15a3.94,3.94,0,0,1,4.3-.89L94,94.55a20,20,0,0,0,26-11.2l21-53C144.39,22.19,153.61,18,161.58,21a16,16,0,0,1,9.19,21.16L149.41,95.22a20,20,0,0,0,11.18,26l24.9,9.83a4,4,0,0,1,2.51,3.72V152c0,2.36.08,4.69.22,7l-138.5-55.4A110.84,110.84,0,0,1,64.34,85.15ZM113.56,220A91.35,91.35,0,0,1,86.9,175a4,4,0,0,0-7.75,2,100.21,100.21,0,0,0,23.09,43H62.68A99.5,99.5,0,0,1,36,152a89.37,89.37,0,0,1,9.73-41.4L189.13,168c3.22,22,13.23,40.09,28.8,52Z"},null,-1),mt=[vt],yt={name:"PhBroom"},_t=N({...yt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,t=$("weight","regular"),o=$("size","1em"),d=$("color","currentColor"),m=$("mirrored",!1),c=w(()=>{var s;return(s=e.weight)!=null?s:t}),M=w(()=>{var s;return(s=e.size)!=null?s:o}),y=w(()=>{var s;return(s=e.color)!=null?s:d}),C=w(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:m?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",de({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:M.value,height:M.value,fill:y.value,transform:C.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",Xe,tt)):c.value==="duotone"?(n(),r("g",ot,nt)):c.value==="fill"?(n(),r("g",it,rt)):c.value==="light"?(n(),r("g",ct,dt)):c.value==="regular"?(n(),r("g",pt,ft)):c.value==="thin"?(n(),r("g",gt,mt)):S("",!0)],16,Qe))}}),Ct=["width","height","fill","transform"],wt={key:0},Mt=l("path",{d:"M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z"},null,-1),At=[Mt],Ht={key:1},kt=l("path",{d:"M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",opacity:"0.2"},null,-1),St=l("path",{d:"M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z"},null,-1),bt=[kt,St],Et={key:2},$t=l("path",{d:"M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z"},null,-1),Lt=[$t],Vt={key:3},Zt=l("path",{d:"M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2Z"},null,-1),xt=[Zt],It={key:4},Nt=l("path",{d:"M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"},null,-1),Dt=[Nt],Pt={key:5},Ot=l("path",{d:"M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM36,56a4,4,0,0,1,4-4H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4Z"},null,-1),zt=[Ot],Tt={name:"PhFolder"},Bt=N({...Tt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,t=$("weight","regular"),o=$("size","1em"),d=$("color","currentColor"),m=$("mirrored",!1),c=w(()=>{var s;return(s=e.weight)!=null?s:t}),M=w(()=>{var s;return(s=e.size)!=null?s:o}),y=w(()=>{var s;return(s=e.color)!=null?s:d}),C=w(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:m?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",de({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:M.value,height:M.value,fill:y.value,transform:C.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",wt,At)):c.value==="duotone"?(n(),r("g",Ht,bt)):c.value==="fill"?(n(),r("g",Et,Lt)):c.value==="light"?(n(),r("g",Vt,xt)):c.value==="regular"?(n(),r("g",It,Dt)):c.value==="thin"?(n(),r("g",Pt,zt)):S("",!0)],16,Ct))}}),Ft=["width","height","fill","transform"],Wt={key:0},Rt=l("path",{d:"M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"},null,-1),jt=[Rt],Jt={key:1},Kt=l("path",{d:"M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"},null,-1),Gt=l("path",{d:"M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"},null,-1),qt=[Kt,Gt],Ut={key:2},Yt=l("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"},null,-1),Qt=[Yt],Xt={key:3},eo=l("path",{d:"M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"},null,-1),to=[eo],oo={key:4},ao=l("path",{d:"M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"},null,-1),so=[ao],no={key:5},io=l("path",{d:"M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"},null,-1),lo=[io],ro={name:"PhTerminalWindow"},co=N({...ro,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,t=$("weight","regular"),o=$("size","1em"),d=$("color","currentColor"),m=$("mirrored",!1),c=w(()=>{var s;return(s=e.weight)!=null?s:t}),M=w(()=>{var s;return(s=e.size)!=null?s:o}),y=w(()=>{var s;return(s=e.color)!=null?s:d}),C=w(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:m?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",de({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:M.value,height:M.value,fill:y.value,transform:C.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",Wt,jt)):c.value==="duotone"?(n(),r("g",Jt,qt)):c.value==="fill"?(n(),r("g",Ut,Qt)):c.value==="light"?(n(),r("g",Xt,to)):c.value==="regular"?(n(),r("g",oo,so)):c.value==="thin"?(n(),r("g",no,lo)):S("",!0)],16,Ft))}}),uo={class:"editor-layout"},po={class:"layout-left"},ho={class:"layout-right"},fo=N({__name:"EditorLayout",props:{fullWidth:{type:Boolean}},setup(a){return(e,t)=>(n(),r("div",uo,[l("section",po,[K(e.$slots,"left",{},void 0,!0)]),l("section",ho,[K(e.$slots,"right",{},void 0,!0)])]))}});const ca=G(fo,[["__scopeId","data-v-74db9fe9"]]);class Se{constructor(){E(this,"logState",_e({log:[]}));E(this,"_listeners",{})}static create(){return new Se}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const o=t?this.logs.find(d=>d.id===t):null;return o?(o.type==="stderr"&&e.type==="stderr"&&(e.log=o.log+`
`+e.log),Object.assign(o,e)):this.logs.push({...e,id:t||ue()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=ue();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}const go="/assets/typing.c1831e40.svg";class vo{constructor(e,t){E(this,"ws",null);E(this,"selfClosed",!1);this.onMessage=e,this.stageId=t}get url(){return"/_editor/api/stdio/listen"}handleMessage(e){const t=JSON.parse(e.data);t.stage_id===this.stageId&&this.onMessage(t)}handleClose(e){this.selfClosed||this.reset()}async close(){if(!!this.ws){try{this.ws.close()}catch{console.warn("already closed")}this.ws=null,this.selfClosed=!0}}async reset(){await this.close(),await this.connect()}async connect(){return await new Promise(e=>{this.ws=new WebSocket(this.url),this.ws.onopen=()=>e(),this.ws.onclose=t=>this.handleClose(t),this.ws.onmessage=t=>this.handleMessage(t)})}}const mo=N({__name:"SmartConsoleCopy",props:{textToCopy:{}},setup(a){const e=a,t=b(!1),o=()=>{navigator.clipboard.writeText(e.textToCopy),t.value=!0,setTimeout(()=>t.value=!1,2e3)},d=w(()=>t.value?"Copied!":"Copy to clipboard");return(m,c)=>(n(),x(u(T),null,{title:h(()=>[k(B(d.value),1)]),default:h(()=>[l("div",{class:"copy-button",onClick:o},[t.value?(n(),x(u(Fe),{key:1,color:"#fff",size:"22"})):(n(),x(u(We),{key:0,color:"#fff",size:"22"}))])]),_:1}))}});const yo=G(mo,[["__scopeId","data-v-a88bb6d9"]]),_o=a=>(De("data-v-6832b214"),a=a(),Pe(),a),Co={class:"smart-console"},wo={class:"header"},Mo={class:"left"},Ao={class:"right"},Ho=["unseen-severity"],ko={class:"cli"},So={class:"left"},bo=_o(()=>l("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),Eo={key:1,class:"local-entry"},$o=["contenteditable","onKeydown"],Lo={class:"right"},Vo={key:1,class:"typing-img",src:go},Zo=N({__name:"SmartConsole",props:{logService:{},workspace:{},stageType:{},stage:{}},emits:["clear-terminal","enter"],setup(a,{expose:e,emit:t}){const o=a,d=b(null),m=b(""),c=b(null),M=$e(),y=b({type:"seen"}),C=b("idle"),s=w(()=>C.value!=="idle");async function A(){var f;if(L.value=!L.value,L.value){if(y.value={type:"seen"},await ce(),!c.value)return;c.value.scrollTop=(f=c.value)==null?void 0:f.scrollHeight}}function I(){L.value=!1}re(M,()=>{o.logService.clear(),t("clear-terminal")});const H=()=>{document.querySelectorAll("pre").forEach(i=>{i.style.position="relative";const p=_(yo,{textToCopy:i.textContent});Ie(p,i)})},V=b(null),F=async f=>{var i;if(f.preventDefault(),m.value=((i=V.value)==null?void 0:i.innerText)||"",f.shiftKey){document.execCommand("insertLineBreak");return}V.value&&(V.value.innerText=""),await q()},q=async()=>{t("enter",m.value),o.logService.log({type:"ai-input",log:m.value}),C.value="processing";const f=o.workspace&&o.stage?await o.workspace.readFile(o.stage.file):null;let i="";for(let v=o.logService.logs.length-1;v>=0;v--){const Z=o.logService.logs[v];if(Z.type==="stderr"){i=Z.log;break}}const p=[{role:"user",content:`If necessary to check, this is my current code:
${f||"No code found"}
. Otherwise, just IGNORE it.

`}];i.length&&p.push({role:"user",content:`If necessary to check, I got this error during execution:
${i}. Otherwise, just IGNORE it.`});try{const v=ue();let Z="";const ee=ve.sendMessage([{role:"system",content:"The Python code and its possible errors during execution are sent by default, but it should be IGNORED if the main question is not about them."},...p,{role:"user",content:m.value}],o.stageType,d.value);for await(const te of ee)C.value==="processing"&&(C.value="answering"),Z+=te,o.logService.log({type:"ai-output",log:Z},v);m.value=""}catch(v){o.logService.log({type:"ai-output",log:"Sorry, there was an issue processing your request. Plese try again later."}),console.error(v),Ne(v)}finally{C.value="idle",H()}};e({closeConsole:I,fixJson:async(f,i)=>{o.logService.clear(),o.logService.log({type:"ai-input",log:`here is my json code:
      ${f}
      And I got this error:`}),o.logService.log({type:"stderr",log:i}),L.value=!0,y.value={type:"seen"},m.value="Can you fix this JSON?",await q()}});const P=()=>{o.logService.clear(),W()};o.logService.listen(async f=>{L.value||(y.value={type:"unseen",count:y.value.type==="unseen"?y.value.count+1:1,severity:f.type==="stderr"?"error":"info"}),f.type!=="restart"&&(await ce(),c.value&&(c.value.scrollTop=c.value.scrollHeight))});const L=b(!1),O=b(400),ie=w(()=>({height:`${O.value}px`})),g=b(!1),U=()=>g.value=!0,Y=f=>{!g.value||(O.value=document.body.clientHeight-f.clientY)},Q=()=>g.value=!1,W=async()=>{const{thread:f}=await ve.createThread();d.value=f},X=new vo(f=>o.logService.log(f),o.stage.id),he=Be();return re(()=>{var f;return(f=he.cloudProject)==null?void 0:f.id},async f=>f&&W()),Ce(async()=>{document.addEventListener("mousemove",Y),document.addEventListener("mouseup",Q),W(),H(),await X.connect()}),we(async()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",Q),await X.close()}),(f,i)=>{const p=Le("Markdown");return n(),r("div",Co,[l("div",wo,[l("div",Mo,[_(u(co),{size:"20"}),k(" Smart Console ")]),l("div",Ao,[_(u(T),{placement:"left","mouse-enter-delay":.5,title:L.value?"Hide Smart Console":"Show Smart Console"},{default:h(()=>[l("div",{class:"toggle-button",onClick:A},[_(u(ge),{class:j(["icon",{open:L.value}]),color:"#fff",size:"20",style:{padding:"5px"}},null,8,["class"]),y.value.type==="unseen"?(n(),r("div",{key:0,class:"unseen-count","unseen-severity":y.value.severity},B(y.value.count),9,Ho)):S("",!0)])]),_:1},8,["title"])])]),L.value?(n(),r("div",{key:0,class:"terminal",style:Ve(ie.value)},[l("div",{class:"resize-handler",onMousedown:U},null,32),l("div",ko,[l("div",So,[l("div",{ref_key:"entriesContainer",ref:c,class:"entries"},[bo,(n(!0),r(Me,null,Ze(o.logService.logs,(v,Z)=>(n(),r("div",{key:Z,class:j([v.type,"entry"])},[v.type==="ai-output"?(n(),x(p,{key:0,source:v.log},null,8,["source"])):(n(),r("div",Eo,B(v.type==="restart"?"-- restarted --":v.log),1))],2))),128))],512),l("div",{class:j(["input",{disabled:s.value}])},[_(u(ge),{color:"white"}),l("div",{ref_key:"inputRef",ref:V,class:"input-text",contenteditable:!s.value,placeholder:"Ask AI anything",onKeydown:xe(F,["enter"])},null,40,$o)],2)]),l("div",Lo,[_(u(T),{placement:"left",title:"Start new conversation"},{default:h(()=>[l("div",{class:"icons",onClick:P},[_(u(_t),{size:"20",color:"#AAA"})])]),_:1}),C.value==="processing"?(n(),x(u(Re),{key:0,style:{color:"#aaa","font-size":"18px"}})):S("",!0),C.value==="answering"?(n(),r("img",Vo)):S("",!0)])])],4)):S("",!0)])}}});const ua=G(Zo,[["__scopeId","data-v-6832b214"]]),xo=N({__name:"PathInput",props:{runtime:{}},setup(a){const e=a,t=()=>{const o=Je(e.runtime.path);o&&o!==e.runtime.path&&(e.runtime.path=o)};return(o,d)=>(n(),x(u(Ae),{value:o.runtime.path,"onUpdate:value":d[0]||(d[0]=m=>o.runtime.path=m),type:"text",onBlur:t},Oe({_:2},[o.runtime instanceof u(ze)?{name:"addonBefore",fn:h(()=>[k(" https://[your-subdomain].abstra.app/_hooks/ ")]),key:"0"}:{name:"addonBefore",fn:h(()=>[k(" https://[your-subdomain].abstra.app/ ")]),key:"1"}]),1032,["value"]))}}),Io={key:1},No=N({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(a){const e=_e({pathError:null});return(t,o)=>(n(),r(Me,null,[t.runtime instanceof u(Te)||t.runtime instanceof u(je)?S("",!0):(n(),x(u(He),{key:0,label:"URL path"},{default:h(()=>[_(xo,{runtime:t.runtime},null,8,["runtime"])]),_:1})),e.pathError?(n(),r("div",Io,B(e.pathError),1)):S("",!0)],64))}});const da=G(No,[["__scopeId","data-v-18856675"]]);class pe{static async getAutocomplete(e){try{return await(await fetch("/_editor/api/pysa/autocomplete",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}static async getHelp(e){try{return await(await fetch("/_editor/api/pysa/help",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}static async getLint(e){try{return await(await fetch("/_editor/api/pysa/lint",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}}let ne={};function Do(a){return a in ne?"\n\n```python\n"+a+" = "+ne[a]+"\n```":""}function Po(a){switch(a){case"error":return R.Error;case"warning":return R.Warning;case"info":return R.Info;case"hint":return R.Hint;default:return R.Error}}se.registerHoverProvider("python",{async provideHover(a,e){const t=a.getWordAtPosition(e);return t?{contents:(await pe.getHelp({code:a.getValue(),line:e.lineNumber,column:e.column})).map(d=>({value:d.docstring+Do(d.name)})),range:new ke(e.lineNumber,t.startColumn,e.lineNumber,t.endColumn)}:null}});se.registerCompletionItemProvider("python",{async provideCompletionItems(a,e){const t=await pe.getAutocomplete({code:a.getValue(),line:e.lineNumber,column:e.column-1}),o=a.getWordUntilPosition(e);return{suggestions:t.map(d=>({label:d.name,kind:se.CompletionItemKind.Function,documentation:d.documentation,insertText:d.name,insertTextRules:se.CompletionItemInsertTextRule.InsertAsSnippet,range:{startLineNumber:e.lineNumber,endLineNumber:e.lineNumber,startColumn:o.startColumn,endColumn:o.endColumn}}))}}});const ye=a=>{pe.getLint({code:a.getValue(),line:0,column:0}).then(e=>{J.setModelMarkers(a,"python",e.map(t=>({startLineNumber:t.line,startColumn:t.column,endLineNumber:t.until_line,endColumn:t.until_column,message:t.message,severity:Po(t.severity)})))})},Oo=(a,e,t={})=>{var s;const o=J.create(a,{language:"python",value:e,minimap:{enabled:!1},readOnly:(s=t.readOnly)!=null?s:!1,contextmenu:!t.readOnly,automaticLayout:!t.readOnly,tabSize:4,fixedOverflowWidgets:!0,theme:t.theme?t.theme:"vs",fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:t.readOnly?0:5,scrollBeyondLastLine:!t.readOnly,renderLineHighlight:t.readOnly?"none":"all",scrollbar:{useShadows:!1,alwaysConsumeMouseWheel:!1}}),d=o.getContribution("editor.contrib.messageController");o.onDidAttemptReadOnlyEdit(()=>{d.showMessage("Cannot edit during preview execution",o.getPosition())});const m=o.createDecorationsCollection([]),c=(A,I)=>{m.set(A.map(H=>({range:new ke(H.lineno,1,H.lineno,1),options:{isWholeLine:!0,className:I}}))),ne=A.reduce((H,V)=>({...H,...V.locals}),{})},M=(A,I)=>H=>{const V=H.filter(F=>F.filename.endsWith(I));c(V,A)},y=()=>{m.clear(),ne={}},C=A=>{o.updateOptions({readOnly:A})};return ye(o.getModel()),o.onDidChangeModelContent(()=>{ye(o.getModel())}),{editor:o,highlight:M,clearHighlights:y,setReadOnly:C}},zo=(a,e,t)=>{const o=J.createModel(e),d=J.createModel(t),m=J.createDiffEditor(a,{minimap:{enabled:!1},readOnly:!0,contextmenu:!1,automaticLayout:!0,renderWhitespace:"none",guides:{indentation:!1},fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:0,scrollBeyondLastLine:!1,renderLineHighlight:"none"});return m.setModel({original:o,modified:d}),{diffEditor:m}};class To{constructor(e,t){E(this,"_script");E(this,"_localEditorCode");E(this,"_monacoEditor");E(this,"_diffEditor");E(this,"_viewMode");E(this,"_alertMessage");E(this,"_conflictingChanges");this._localEditorCode=e,this._script=t,this._monacoEditor=null,this._diffEditor=null,this._viewMode=ae("editor"),this._alertMessage=ae(""),this._conflictingChanges=ae(!1)}get alertMessage(){return this._alertMessage.value}set alertMessage(e){this._alertMessage.value=e}get conflictingChanges(){return this._conflictingChanges.value}set conflictingChanges(e){this._conflictingChanges.value=e}get viewMode(){return this._viewMode.value}set viewMode(e){this._viewMode.value=e}get abstraIDECode(){return this._script.codeContent}get localEditorCode(){return this._localEditorCode}set localEditorCode(e){this._localEditorCode=e}set monacoEditor(e){this._monacoEditor=e}set diffEditor(e){this._diffEditor=e}finishPreview(){var e;this._viewMode.value="editor",this._script.codeContent=this._localEditorCode,(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.updateInitialState("code_content",this._localEditorCode),this.alertMessage=""}updateCodeWhileEditing(e){var d;const t=e!==this._localEditorCode;if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1;return}const o=!this._script.hasChanges("code_content");if(o){(d=this._monacoEditor)==null||d.setValue(e),this._script.codeContent=e,this._script.updateInitialState("code_content",e);return}if(!o&&t){this.alertMessage="You have conflicting changes with your local editor code",this.conflictingChanges=!0;return}}updateCodeWhileDiff(e){var t,o;if(e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1,this.viewMode="editor",this._localEditorCode=e;return}if(e!==this._localEditorCode){(o=(t=this._diffEditor)==null?void 0:t.getModel())==null||o.modified.setValue(e),this._localEditorCode=e;return}}updateCodeWhilePreview(e){if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="";return}this.alertMessage="The changes on your code will be shown after the preview stops running"}updateCode(e){switch(this._viewMode.value){case"editor":return this.updateCodeWhileEditing(e);case"diff":return this.updateCodeWhileDiff(e);case"preview":return this.updateCodeWhilePreview(e)}}keepAbstraIDECode(){var e;(e=this._monacoEditor)==null||e.setValue(this._script.codeContent),this._script.save("code_content"),this._script.updateInitialState("code_content",this._script.codeContent),this._localEditorCode=this._script.codeContent,this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}keepLocalEditor(){var e;(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.updateInitialState("code_content",this._localEditorCode),this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}}const Bo={class:"source-code-container"},Fo={class:"code-container"},Wo={key:0,class:"not-found-container"},Ro=N({__name:"SourceCode",props:{script:{},workspace:{}},emits:["update-file"],setup(a,{expose:e,emit:t}){const o=a,d=()=>{!o.script.file||le.openFile(o.script.file)},m=()=>{g.value.viewMode="diff",X()},c=b(null),M=b(null);let y,C,s,A;const{result:I}=me(()=>fetch("/_editor/api/workspace/root").then(i=>i.text())),H=b(o.script.file);re(()=>o.script.file,()=>H.value=o.script.file);const{result:V,refetch:F}=me(()=>le.checkFile(H.value)),q=()=>{P.value.valid?t("update-file",Ge(H.value)):t("update-file",H.value),F()},P=w(()=>{var p;const i=Ke(H.value);return i.valid?((p=V.value)==null?void 0:p.exists)&&o.script.hasChanges("file")?{valid:!0,help:"This file already exists"}:o.script.hasChanges("file")?{valid:!0,help:"The original file will be renamed"}:i:i}),L=()=>{!o.workspace||!I.value||le.openFile(".")},O=b(!1),ie=async()=>{var p;if(!o.script.file)return;const i=await o.workspace.readFile(o.script.file);if(i===null){O.value=!0;return}O.value=!1,(p=g.value)==null||p.updateCode(i)},g=ae(null);let U;Ce(()=>{W(),U=setInterval(ie,1e3)}),we(()=>{clearInterval(U)});const Y=()=>{A(!0),g.value.viewMode="preview"},Q=(i,p)=>{if(p)return s("error-line",o.script.file)(i);s("executing-line",o.script.file)(i)},W=async()=>{await ce(),o.workspace.readFile(o.script.file).then(i=>{const p=i!=null?i:"";o.script.codeContent=p,o.script.updateInitialState("code_content",p),g.value=new To(p,o.script);const v=Oo(c.value,p);C=v.clearHighlights,s=v.highlight,A=v.setReadOnly,y=v.editor,g.value.monacoEditor=y,y.onDidChangeModelContent(()=>{o.script.codeContent=y.getValue()})})},X=async()=>{const i=await o.workspace.readFile(o.script.file);if(!i)return;const p=o.script.codeContent,v=zo(M.value,p,i);g.value.diffEditor=v.diffEditor};return e({startPreviewMode:Y,setHighlight:Q,restartEditor:()=>{var i;C(),A(!1),(i=g.value)==null||i.finishPreview()},updateLocalEditorCode:i=>{g.value.localEditorCode=i}}),(i,p)=>{var v,Z,ee,te;return n(),r("div",Bo,[_(u(He),{"validate-status":P.value.valid?"success":"error",help:P.value.valid?P.value.help:P.value.reason,class:"file-input"},{default:h(()=>[_(u(Ae),{value:i.script.file,"onUpdate:value":p[0]||(p[0]=z=>i.script.file=z),onBlur:q},{addonBefore:h(()=>[u(I)?(n(),r("span",{key:0,class:"clickable",onClick:L},[_(u(T),{placement:"bottomLeft","overlay-style":{maxWidth:"none"}},{title:h(()=>[k(B(u(I)),1)]),default:h(()=>[_(u(Bt),{size:"22"})]),_:1})])):S("",!0)]),addonAfter:h(()=>[l("span",{class:"clickable",onClick:d},[k(" Open in editor "),_(u(qe),{size:"20"})])]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),(v=g.value)!=null&&v.alertMessage?(n(),x(u(Ue),{key:0,type:"warning","show-icon":""},{message:h(()=>{var z;return[k(B((z=g.value)==null?void 0:z.alertMessage),1)]}),action:h(()=>[g.value.conflictingChanges&&g.value.viewMode!=="diff"?(n(),x(u(fe),{key:0,gap:"small"},{default:h(()=>[_(u(oe),{type:"primary",onClick:m},{default:h(()=>[k("Compare")]),_:1}),_(u(T),null,{title:h(()=>[k("Keep the local editor version")]),default:h(()=>[_(u(oe),{onClick:p[1]||(p[1]=z=>{var D;return(D=g.value)==null?void 0:D.keepLocalEditor()})},{default:h(()=>[k("Discard")]),_:1})]),_:1})]),_:1})):S("",!0),g.value.conflictingChanges&&g.value.viewMode==="diff"?(n(),x(u(fe),{key:1,gap:"small"},{default:h(()=>[_(u(T),null,{title:h(()=>[k("Keep your current changes")]),default:h(()=>[_(u(oe),{onClick:p[2]||(p[2]=z=>{var D;return(D=g.value)==null?void 0:D.keepAbstraIDECode()})},{default:h(()=>[k("Keep left")]),_:1})]),_:1}),_(u(T),null,{title:h(()=>[k("Keep the local editor version")]),default:h(()=>[_(u(oe),{onClick:p[3]||(p[3]=z=>{var D;return(D=g.value)==null?void 0:D.keepLocalEditor()})},{default:h(()=>[k("Keep right")]),_:1})]),_:1})]),_:1})):S("",!0)]),_:1})):S("",!0),l("div",Fo,[O.value?(n(),r("div",Wo,[_(u(Ye),null,{title:h(()=>[k("File not found")]),_:1})])):S("",!0),l("div",{id:"code",ref_key:"codeComponent",ref:c,class:j(["monaco-element",{hide:((Z=g.value)==null?void 0:Z.viewMode)==="diff",blur:O.value}])},null,2)]),((ee=g.value)==null?void 0:ee.viewMode)==="diff"?(n(),r("div",{key:1,id:"code",ref_key:"codeDiffComponent",ref:M,class:j(["monaco-element",{hide:((te=g.value)==null?void 0:te.viewMode)!=="diff"}])},null,2)):S("",!0)])}}});const pa=G(Ro,[["__scopeId","data-v-3541748c"]]);export{ca as E,Se as L,da as R,ua as S,pa as a};
//# sourceMappingURL=SourceCode.be82969d.js.map
