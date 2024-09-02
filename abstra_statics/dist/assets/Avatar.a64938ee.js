import{ac as X,ad as N,S as g,ao as K,B as V,V as q,d as J,Q as $,ah as Q,f as U,aO as Y,dL as Z,g as _,W as ee,J as B,bT as te,b as z,al as ae,ak as F,au as re,dI as ne}from"./vue-router.d5728aa9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="e756adfd-1fb3-4d21-bc75-a654d6d96730",e._sentryDebugIdIdentifier="sentry-dbid-e756adfd-1fb3-4d21-bc75-a654d6d96730")}catch{}})();const oe=e=>{const{antCls:a,componentCls:r,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:f,textFontSize:h,textFontSizeLG:b,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:k}=e,v=(m,t,o)=>({width:m,height:m,lineHeight:`${m-u*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:o},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:g(g(g(g({},K(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${k} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),v(l,h,C)),{["&-lg"]:g({},v(c,b,s)),["&-sm"]:g({},v(f,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:a,groupBorderColor:r,groupOverlapping:n,groupSpace:i}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${a}-group-popover`]:{[`${a} + ${a}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:a,colorTextPlaceholder:r}=e,n=N(e,{avatarBg:r,avatarColor:a});return[oe(n),se(n)]},e=>{const{controlHeight:a,controlHeightLG:r,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:f,marginXXS:h,colorBorderBg:b}=e;return{containerSize:a,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-f,groupBorderColor:b}}),M=Symbol("AvatarContextKey"),le=()=>V(M,{}),ge=e=>q(M,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:re.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=J({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,a){let{slots:r,attrs:n}=a;const i=$(!0),S=$(!1),l=$(1),c=$(null),f=$(null),{prefixCls:h}=Q("avatar",e),[b,w]=ie(h),C=le(),s=U(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(p=>A.value[p]);return e.size[t]}),k=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},v=()=>{if(!c.value||!f.value)return;const t=c.value.offsetWidth,o=f.value.offsetWidth;if(t!==0&&o!==0){const{gap:p=4}=e;p*2<o&&(l.value=o-p*2<t?(o-p*2)/t:1)}},m=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return _(()=>e.src,()=>{B(()=>{i.value=!0,l.value=1})}),_(()=>e.gap,()=>{B(()=>{v()})}),ee(()=>{B(()=>{v(),S.value=!0})}),()=>{var t,o;const{shape:p,src:I,alt:O,srcset:T,draggable:H,crossOrigin:j}=e,G=(t=C.shape)!==null&&t!==void 0?t:p,y=te(r,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${G}`]:!0,[`${d}-image`]:I&&i.value,[`${d}-icon`]:y,[w.value]:!0},W=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:y?`${s.value/2}px`:"18px"}:{},L=(o=r.default)===null||o===void 0?void 0:o.call(r);let x;if(I&&i.value)x=z("img",{draggable:H,src:I,srcset:T,onError:m,alt:O,crossorigin:j},null);else if(y)x=y;else if(S.value||l.value!==1){const R=`scale(${l.value}) translateX(-50%)`,P={msTransform:R,WebkitTransform:R,transform:R},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(ae,{onResize:v},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),P)},[L])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[L]);return b(z("span",F(F({},n),{},{ref:f,class:E,style:[W,k(!!y),n.style]}),[x]))}}}),fe=ue;export{fe as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.a64938ee.js.map
