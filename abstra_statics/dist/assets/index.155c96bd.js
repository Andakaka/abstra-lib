import{a0 as f,a1 as S,a2 as y,S as n,a3 as i,a4 as h,a5 as b,a6 as z,a7 as g,a8 as C}from"./vue-router.c5124aea.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="b2aa92a9-506a-4775-acd4-7447c8d4bb60",o._sentryDebugIdIdentifier="sentry-dbid-b2aa92a9-506a-4775-acd4-7447c8d4bb60")}catch{}})();const s=(o,e)=>new f(o).setAlpha(e).toRgbString(),l=(o,e)=>new f(o).lighten(e).toHexString(),B=o=>{const e=S(o,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},M=(o,e)=>{const r=o||"#000",t=e||"#fff";return{colorBgBase:r,colorTextBase:t,colorText:s(t,.85),colorTextSecondary:s(t,.65),colorTextTertiary:s(t,.45),colorTextQuaternary:s(t,.25),colorFill:s(t,.18),colorFillSecondary:s(t,.12),colorFillTertiary:s(t,.08),colorFillQuaternary:s(t,.04),colorBgElevated:l(r,12),colorBgContainer:l(r,8),colorBgLayout:l(r,0),colorBgSpotlight:l(r,26),colorBorder:l(r,26),colorBorderSecondary:l(r,19)}},p=(o,e)=>{const r=Object.keys(y).map(a=>{const c=S(o[a],{theme:"dark"});return new Array(10).fill(1).reduce((d,A,u)=>(d[`${a}-${u+1}`]=c[u],d),{})}).reduce((a,c)=>(a=n(n({},a),c),a),{}),t=e!=null?e:i(o);return n(n(n({},t),r),h(o,{generateColorPalettes:B,generateNeutralColorPalettes:M}))},v=p;function w(o){const{sizeUnit:e,sizeStep:r}=o,t=r-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const x=(o,e)=>{const r=e!=null?e:i(o),t=r.fontSizeSM,a=r.controlHeight-4;return n(n(n(n(n({},r),w(e!=null?e:o)),z(t)),{controlHeight:a}),b(n(n({},r),{controlHeight:a})))},T=x;function m(){const[o,e,r]=C();return{theme:o,token:e,hashId:r}}const X={defaultConfig:g,defaultSeed:g.token,useToken:m,defaultAlgorithm:i,darkAlgorithm:v,compactAlgorithm:T};export{X as t};
//# sourceMappingURL=index.155c96bd.js.map
