import{d as y,B as Z,f,o as s,X as i,Z as O,R as k,eb as z,a,W as T,b as g,w as P,u as c,aF as b,el as $,em as L,d8 as E,$ as A,eV as p,D as I,ec as m,c as w,aZ as x,eQ as S,eU as C}from"./vue-router.d51a64d9.js";import{O as D,S as M,A as K}from"./workspaceStore.4ddc0c2a.js";import{L as H}from"./CircularLoading.a8487ce6.js";import{A as B}from"./index.88cbb0cc.js";import{G as U}from"./PhArrowClockwise.vue.bf7a88cd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="0141e09d-4972-43b8-8cbc-fa38d91d50b3",o._sentryDebugIdIdentifier="sentry-dbid-0141e09d-4972-43b8-8cbc-fa38d91d50b3")}catch{}})();const G=["width","height","fill","transform"],R={key:0},W=a("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"},null,-1),j=[W],X={key:1},q=a("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),F=a("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"},null,-1),Q=[q,F],J={key:2},Y=a("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"},null,-1),ee=[Y],ae={key:3},te=a("path",{d:"M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z"},null,-1),oe=[te],se={key:4},ne=a("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"},null,-1),le=[ne],ie={key:5},re=a("path",{d:"M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z"},null,-1),de=[re],ce={name:"PhSpinner"},_e=y({...ce,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(o){const n=o,e=Z("weight","regular"),r=Z("size","1em"),h=Z("color","currentColor"),v=Z("mirrored",!1),_=f(()=>{var d;return(d=n.weight)!=null?d:e}),t=f(()=>{var d;return(d=n.size)!=null?d:r}),u=f(()=>{var d;return(d=n.color)!=null?d:h}),l=f(()=>n.mirrored!==void 0?n.mirrored?"scale(-1, 1)":void 0:v?"scale(-1, 1)":void 0);return(d,V)=>(s(),i("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:t.value,height:t.value,fill:u.value,transform:l.value},d.$attrs),[O(d.$slots,"default"),_.value==="bold"?(s(),i("g",R,j)):_.value==="duotone"?(s(),i("g",X,Q)):_.value==="fill"?(s(),i("g",J,ee)):_.value==="light"?(s(),i("g",ae,oe)):_.value==="regular"?(s(),i("g",se,le)):_.value==="thin"?(s(),i("g",ie,de)):k("",!0)],16,G))}}),N=o=>($("data-v-b8567b17"),o=o(),L(),o),ue={class:"oidc-container"},pe=N(()=>a("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"3s",from:"0 0 0",to:"360 0 0",repeatCount:"indefinite"},null,-1)),he=N(()=>a("p",{class:"centered"},"Please complete the login process in the popup window.",-1)),me={class:"centered"},ve=y({__name:"Oidc",emits:["done"],setup(o,{emit:n}){const e=async()=>{if(!await new D().login())throw new Error("[OIDC] Login did not return an user");n("done")};return T(()=>e()),(r,h)=>(s(),i("div",ue,[g(c(_e),{size:60,style:{"margin-bottom":"50px"}},{default:P(()=>[pe]),_:1}),he,a("p",me,[b(" If it has not appear automatically, please "),g(c(E),{onClick:e},{default:P(()=>[b("click here")]),_:1}),b(". ")])]))}});const fe=A(ve,[["__scopeId","data-v-b8567b17"]]),ge=o=>($("data-v-dfdf2101"),o=o(),L(),o),ye={class:"auth-info"},ke={class:"auth-header"},Ze={class:"auth-label"},be={key:1,class:"description"},we=["onKeyup"],Ae={key:0,class:"span-error"},Me=ge(()=>a("div",{class:"spacer"},null,-1)),$e=y({__name:"AuthInfo",props:{invalid:{type:Boolean},locale:{}},emits:["sendAuthInfo"],setup(o,{emit:n}){const e=o,r={description:p.translate("i18n_local_auth_info_description",e.locale),button:p.translate("i18n_local_auth_info_authenticate",e.locale)},h={description:p.translate("i18n_auth_info_description",e.locale),button:p.translate("i18n_auth_info_send_code",e.locale)},v=f(()=>{var l;return(l=M.instance)==null?void 0:l.isLocal}),_=f(()=>{var l;return(l=M.instance)!=null&&l.isLocal?r:h}),t=I({email:""}),u=()=>{n("sendAuthInfo",t)};return(l,d)=>(s(),i("div",ye,[a("div",ke,[a("div",Ze,m(c(p).translate("i18n_auth_validate_your_email",l.locale)),1),v.value?(s(),w(c(B),{key:0,message:_.value.description,type:"warning","show-icon":"",style:{width:"100%","text-align":"left"}},null,8,["message"])):(s(),i("div",be,m(_.value.description),1))]),x(a("input",{"onUpdate:modelValue":d[0]||(d[0]=V=>t.email=V),type:"email",placeholder:"Work email address",class:"input email-input",onKeyup:C(u,["enter"])},null,40,we),[[S,t.email]]),e.invalid?(s(),i("span",Ae,m(c(p).translate("i18n_auth_info_invalid_email",l.locale)),1)):k("",!0),Me,a("button",{class:"next-button",onClick:u},m(_.value.button),1)]))}});const Le=A($e,[["__scopeId","data-v-dfdf2101"]]),Ie=o=>($("data-v-9a2f7db8"),o=o(),L(),o),Ve={class:"auth-token"},Pe={class:"auth-label"},He=["onKeyup"],Te={key:1,class:"span-error"},xe={key:2,class:"span-error"},Se=Ie(()=>a("div",{class:"spacer"},null,-1)),Ce={class:"footer"},De=y({__name:"AuthToken",props:{email:{},invalid:{type:Boolean},expired:{type:Boolean},locale:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:n}){const e=f(()=>{var t;return(t=M.instance)==null?void 0:t.isLocal}),r=I({token:""}),h=()=>{n("restartAuth")},v=()=>{n("resendToken")},_=()=>{n("sendToken",r.token)};return(t,u)=>(s(),i("div",Ve,[a("div",Pe,m(c(p).translate("i18n_auth_token_label",t.locale,{email:t.email})),1),e.value?(s(),w(c(B),{key:0,message:c(p).translate("i18n_auth_token_development_warning",t.locale),type:"warning","show-icon":"",style:{width:"100%","text-align":"left","margin-bottom":"20px"}},null,8,["message"])):k("",!0),x(a("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>r.token=l),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:C(_,["enter"])},null,40,He),[[S,r.token]]),t.expired?(s(),i("span",Te,m(c(p).translate("i18n_auth_token_expired",t.locale)),1)):k("",!0),t.invalid?(s(),i("span",xe,m(c(p).translate("i18n_auth_token_invalid",t.locale)),1)):k("",!0),Se,a("button",{class:"next-button",onClick:_},m(c(p).translate("i18n_auth_token_verify_email",t.locale)),1),a("button",{class:"secondary-button back",onClick:h},[g(c(U)),b(" "+m(c(p).translate("i18n_auth_edit_email",t.locale)),1)]),a("button",{class:"secondary-button back",onClick:v},m(c(p).translate("i18n_auth_token_resend_email",t.locale)),1),a("div",Ce,m(c(p).translate("i18n_auth_token_footer_alternative_email",t.locale)),1)]))}});const Be=A(De,[["__scopeId","data-v-9a2f7db8"]]),Ne={key:0,class:"form"},Oe={class:"form-wrapper"},ze={class:"loading"},Ee={key:1,class:"form"},Ke={class:"form-wrapper"},Ue={class:"widget"},Ge={key:2,class:"form"},Re={class:"form-wrapper"},We={class:"widget"},je={key:3,class:"form"},Xe={class:"form-wrapper"},qe={class:"loading"},Fe=y({__name:"Passwordless",props:{locale:{}},emits:["done"],setup(o,{emit:n}){const e=I({stage:"collect-info",userProvider:null,invalid:!1,expired:!1,token:null,info:null});T(()=>{e.userProvider=new K});const r=async t=>{if(!e.userProvider)return;e.info=t,e.stage="loading";const u=await e.userProvider.authenticate(t.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},h=async t=>{var u;if(!(!e.userProvider||!((u=e.info)!=null&&u.email))){e.token=t,e.stage="loading";try{const l=await e.userProvider.verify(e.info.email,e.token);if(!l)throw new Error("no user");n("done",l),e.stage="loading"}catch(l){l.message==="expired"?e.expired=!0:e.invalid=!0,e.stage="collect-info"}}},v=()=>{e.info&&r(e.info)},_=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(t,u)=>{var l,d;return e.userProvider?e.stage==="collect-info"?(s(),i("div",Ee,[a("div",Ke,[a("div",Ue,[g(Le,{invalid:e.invalid,locale:t.locale,onSendAuthInfo:r},null,8,["invalid","locale"])])])])):e.stage==="collect-token"?(s(),i("div",Ge,[a("div",Re,[a("div",We,[g(Be,{invalid:e.invalid,expired:e.expired,email:(d=(l=e.info)==null?void 0:l.email)!=null?d:"",locale:t.locale,onSendToken:h,onResendToken:v,onRestartAuth:_},null,8,["invalid","expired","email","locale"])])])])):(s(),i("div",je,[a("div",Xe,[a("div",qe,[g(H)])])])):(s(),i("div",Ne,[a("div",Oe,[a("div",ze,[g(H)])])]))}}});const Qe=A(Fe,[["__scopeId","data-v-f310a3bb"]]),oa=y({__name:"Login",props:{locale:{}},emits:["done"],setup(o,{emit:n}){return(e,r)=>c(D).isConfigured()?(s(),w(fe,{key:0,onDone:r[0]||(r[0]=h=>n("done"))})):(s(),w(Qe,{key:1,locale:e.locale,onDone:r[1]||(r[1]=h=>n("done"))},null,8,["locale"]))}});export{oa as _};
//# sourceMappingURL=Login.vue_vue_type_script_setup_true_lang.da29f874.js.map
