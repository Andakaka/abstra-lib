import{ac as S,ad as w,S as s,ao as y,ae as z,d as C,ah as M,f as d,aC as I,b as c,ak as u}from"./vue-router.61d77913.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2ddf27e6-ea36-43e6-94de-0a917a90038c",e._sentryDebugIdIdentifier="sentry-dbid-2ddf27e6-ea36-43e6-94de-0a917a90038c")}catch{}})();const D=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=e;return{[t]:s(s({},y(e)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:o}}})}},B=S("Divider",e=>{const t=w(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[D(t)]},{sizePaddingEdgeHorizontal:0}),E=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),G=C({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:E(),setup(e,t){let{slots:o,attrs:r}=t;const{prefixCls:i,direction:v}=M("divider",e),[b,g]=B(i),h=d(()=>e.orientation==="left"&&e.orientationMargin!=null),f=d(()=>e.orientation==="right"&&e.orientationMargin!=null),$=d(()=>{const{type:n,dashed:l,plain:x}=e,a=i.value;return{[a]:!0,[g.value]:!!g.value,[`${a}-${n}`]:!0,[`${a}-dashed`]:!!l,[`${a}-plain`]:!!x,[`${a}-rtl`]:v.value==="rtl",[`${a}-no-default-orientation-margin-left`]:h.value,[`${a}-no-default-orientation-margin-right`]:f.value}}),m=d(()=>{const n=typeof e.orientationMargin=="number"?`${e.orientationMargin}px`:e.orientationMargin;return s(s({},h.value&&{marginLeft:n}),f.value&&{marginRight:n})}),p=d(()=>e.orientation.length>0?"-"+e.orientation:e.orientation);return()=>{var n;const l=I((n=o.default)===null||n===void 0?void 0:n.call(o));return b(c("div",u(u({},r),{},{class:[$.value,l.length?`${i.value}-with-text ${i.value}-with-text${p.value}`:"",r.class],role:"separator"}),[l.length?c("span",{class:`${i.value}-inner-text`,style:m.value},[l]):null]))}}}),W=z(G);export{W as A};
//# sourceMappingURL=index.b583b173.js.map
