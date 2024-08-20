import{a3 as X,a4 as N,S as g,ag as K,B as V,ae as q,d as J,Q as $,a8 as Q,f as U,aG as Y,dF as Z,g as M,V as ee,J as B,bM as te,b as z,ac as re,ab as _,am as ae,dC as ne}from"./vue-router.d9feb5a3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="a0b17858-9bbc-4f25-8b98-d61d3e750407",e._sentryDebugIdIdentifier="sentry-dbid-a0b17858-9bbc-4f25-8b98-d61d3e750407")}catch{}})();const oe=e=>{const{antCls:r,componentCls:a,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:v,textFontSize:h,textFontSizeLG:b,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:k}=e,f=(m,t,o)=>({width:m,height:m,lineHeight:`${m-u*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:o},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[a]:g(g(g(g({},K(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${k} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),f(l,h,C)),{["&-lg"]:g({},f(c,b,s)),["&-sm"]:g({},f(v,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:r,groupBorderColor:a,groupOverlapping:n,groupSpace:i}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:a},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:a}=e,n=N(e,{avatarBg:a,avatarColor:r});return[oe(n),se(n)]},e=>{const{controlHeight:r,controlHeightLG:a,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:v,marginXXS:h,colorBorderBg:b}=e;return{containerSize:r,containerSizeLG:a,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-v,groupBorderColor:b}}),L=Symbol("AvatarContextKey"),le=()=>V(L,{}),ge=e=>q(L,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=J({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,r){let{slots:a,attrs:n}=r;const i=$(!0),S=$(!1),l=$(1),c=$(null),v=$(null),{prefixCls:h}=Q("avatar",e),[b,w]=ie(h),C=le(),s=U(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(p=>A.value[p]);return e.size[t]}),k=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},f=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,o=v.value.offsetWidth;if(t!==0&&o!==0){const{gap:p=4}=e;p*2<o&&(l.value=o-p*2<t?(o-p*2)/t:1)}},m=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return M(()=>e.src,()=>{B(()=>{i.value=!0,l.value=1})}),M(()=>e.gap,()=>{B(()=>{f()})}),ee(()=>{B(()=>{f(),S.value=!0})}),()=>{var t,o;const{shape:p,src:I,alt:G,srcset:H,draggable:O,crossOrigin:T}=e,j=(t=C.shape)!==null&&t!==void 0?t:p,y=te(a,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${j}`]:!0,[`${d}-image`]:I&&i.value,[`${d}-icon`]:y,[w.value]:!0},P=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:y?`${s.value/2}px`:"18px"}:{},F=(o=a.default)===null||o===void 0?void 0:o.call(a);let x;if(I&&i.value)x=z("img",{draggable:O,src:I,srcset:H,onError:m,alt:G,crossorigin:T},null);else if(y)x=y;else if(S.value||l.value!==1){const R=`scale(${l.value}) translateX(-50%)`,W={msTransform:R,WebkitTransform:R,transform:R},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(re,{onResize:f},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),W)},[F])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[F]);return b(z("span",_(_({},n),{},{ref:v,class:E,style:[P,k(!!y),n.style]}),[x]))}}}),ve=ue;export{ve as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.65572443.js.map
