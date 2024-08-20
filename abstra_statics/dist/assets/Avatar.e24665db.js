import{a3 as X,a4 as N,S as g,ag as K,B as V,ae as q,d as J,Q as $,a8 as Q,f as U,aG as Y,dF as Z,g as M,V as ee,J as B,bM as te,b as z,ac as ae,ab as _,am as re,dC as ne}from"./vue-router.9783e47b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="a20252d0-a7fa-461e-945d-6a98aad25ec3",e._sentryDebugIdIdentifier="sentry-dbid-a20252d0-a7fa-461e-945d-6a98aad25ec3")}catch{}})();const oe=e=>{const{antCls:a,componentCls:r,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:v,textFontSize:h,textFontSizeLG:m,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:k}=e,f=(y,t,o)=>({width:y,height:y,lineHeight:`${y-u*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:o},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:g(g(g(g({},K(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${k} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),f(l,h,C)),{["&-lg"]:g({},f(c,m,s)),["&-sm"]:g({},f(v,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:a,groupBorderColor:r,groupOverlapping:n,groupSpace:i}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${a}-group-popover`]:{[`${a} + ${a}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:a,colorTextPlaceholder:r}=e,n=N(e,{avatarBg:r,avatarColor:a});return[oe(n),se(n)]},e=>{const{controlHeight:a,controlHeightLG:r,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:v,marginXXS:h,colorBorderBg:m}=e;return{containerSize:a,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-v,groupBorderColor:m}}),L=Symbol("AvatarContextKey"),le=()=>V(L,{}),ge=e=>q(L,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:re.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=J({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,a){let{slots:r,attrs:n}=a;const i=$(!0),S=$(!1),l=$(1),c=$(null),v=$(null),{prefixCls:h}=Q("avatar",e),[m,w]=ie(h),C=le(),s=U(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(p=>A.value[p]);return e.size[t]}),k=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},f=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,o=v.value.offsetWidth;if(t!==0&&o!==0){const{gap:p=4}=e;p*2<o&&(l.value=o-p*2<t?(o-p*2)/t:1)}},y=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return M(()=>e.src,()=>{B(()=>{i.value=!0,l.value=1})}),M(()=>e.gap,()=>{B(()=>{f()})}),ee(()=>{B(()=>{f(),S.value=!0})}),()=>{var t,o;const{shape:p,src:I,alt:G,srcset:H,draggable:O,crossOrigin:T}=e,j=(t=C.shape)!==null&&t!==void 0?t:p,b=te(r,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${j}`]:!0,[`${d}-image`]:I&&i.value,[`${d}-icon`]:b,[w.value]:!0},P=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:b?`${s.value/2}px`:"18px"}:{},F=(o=r.default)===null||o===void 0?void 0:o.call(r);let x;if(I&&i.value)x=z("img",{draggable:O,src:I,srcset:H,onError:y,alt:G,crossorigin:T},null);else if(b)x=b;else if(S.value||l.value!==1){const R=`scale(${l.value}) translateX(-50%)`,W={msTransform:R,WebkitTransform:R,transform:R},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(ae,{onResize:f},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),W)},[F])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[F]);return m(z("span",_(_({},n),{},{ref:v,class:E,style:[P,k(!!b),n.style]}),[x]))}}}),ve=ue;export{ve as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.e24665db.js.map
