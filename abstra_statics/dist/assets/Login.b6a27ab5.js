import{L as T}from"./CircularLoading.cc5d0da3.js";import{d as x,e as D,o as c,W as h,a as _,b as t,e6 as s,u as a,eE as n,c as b,w as u,bD as w,eD as I,cs as L,ax as p,bL as m,cr as R,R as P,$ as A,ek as C,e7 as q,f as E,dB as K}from"./vue-router.3d5f6db5.js";import{L as M}from"./Logo.71729ce0.js";import{T as U}from"./router.c5f4524a.js";import{a as v,E as $}from"./gateway.ed91bf48.js";import{M as N}from"./member.5096c897.js";import"./tables.3078590f.js";import"./popupNotifcation.fb821625.js";import"./record.a8c03fef.js";import"./string.ddec07a4.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="df6dd79b-a1c0-430a-ac22-b62734820b35",l._sentryDebugIdIdentifier="sentry-dbid-df6dd79b-a1c0-430a-ac22-b62734820b35")}catch{}})();const S={class:"form"},V={class:"header"},F={class:"description"},O={class:"description"},W={class:"footer"},j={key:2,class:"loading"},z=x({__name:"Passwordless",emits:["done"],setup(l,{emit:o}){const e=D({stage:"collect-info",info:{email:""},token:"",invalid:!1,secsToAllowResend:0});let i;const r=async()=>{e.value.stage="loading";try{await v.authenticate(e.value.info.email),e.value.stage="collect-token",e.value.secsToAllowResend=120,clearInterval(i),i=setInterval(()=>{e.value.secsToAllowResend-=1,e.value.secsToAllowResend<=0&&clearInterval(i)},1e3)}catch{e.value.invalid=!0,e.value.stage="collect-info"}},y=async()=>{var f;if(!!((f=e.value.info)!=null&&f.email)){e.value.stage="loading";try{const d=await v.verify(e.value.info.email,e.value.token);if(!d)throw new Error("[Passwordless] Login did not return an user");U.trackSession(),o("done",d),e.value.stage="done"}catch{e.value.invalid=!0,e.value.stage="collect-token"}}},k=()=>{e.value.info&&r()},B=()=>{e.value.stage="collect-info",e.value.info={email:""},e.value.token="",e.value.invalid=!1};return(f,d)=>(c(),h("div",S,[_("div",V,[t(M,{"hide-text":"",size:"large"}),_("h2",null,s(a(n).translate("i18n_auth_validate_your_email_login")),1)]),e.value.stage==="collect-info"?(c(),b(a(R),{key:0,class:"section"},{default:u(()=>[_("div",F,s(a(n).translate("i18n_auth_info_description")),1),t(a(L),{"has-feedback":"","validate-status":e.value.invalid?"error":"",help:e.value.invalid?a(n).translate("i18n_auth_info_invalid_email"):""},{default:u(()=>[t(a(w),{value:e.value.info.email,"onUpdate:value":d[0]||(d[0]=g=>e.value.info.email=g),placeholder:"Work email address",onKeyup:I(r,["enter"])},null,8,["value","onKeyup"])]),_:1},8,["validate-status","help"]),t(a(m),{type:"primary",onClick:r},{default:u(()=>[p(s(a(n).translate("i18n_auth_info_send_code")),1)]),_:1})]),_:1})):e.value.stage==="collect-token"?(c(),b(a(R),{key:1,class:"section"},{default:u(()=>[_("div",O,s(a(n).translate("i18n_auth_token_label",null,e.value.info)),1),t(a(L),{"has-feedback":"","validate-status":e.value.invalid?"error":"",help:e.value.invalid?a(n).translate("i18n_auth_token_invalid"):""},{default:u(()=>[t(a(w),{value:e.value.token,"onUpdate:value":d[1]||(d[1]=g=>e.value.token=g),type:"text",placeholder:"Type your verification code",onKeyup:I(y,["enter"])},null,8,["value","onKeyup"])]),_:1},8,["validate-status","help"]),t(a(m),{type:"primary",onClick:y},{default:u(()=>[p(s(a(n).translate("i18n_auth_token_verify_email")),1)]),_:1}),t(a(m),{onClick:B},{default:u(()=>[p(s(a(n).translate("i18n_auth_edit_email")),1)]),_:1}),t(a(m),{disabled:!!e.value.secsToAllowResend,onClick:k},{default:u(()=>[p(s(a(n).translate("i18n_auth_token_resend_email"))+" ("+s(e.value.secsToAllowResend)+" s) ",1)]),_:1},8,["disabled"]),_("div",W,s(a(n).translate("i18n_auth_token_footer_alternative_email")),1)]),_:1})):e.value.stage==="loading"?(c(),h("div",j,[t(T)])):P("",!0)]))}});const G=A(z,[["__scopeId","data-v-0a23904b"]]),H=async()=>{const l=await N.onboarding(),o=v.getAuthor();if(l.shouldBeOnboarded&&o){const e=`${$.onboarding}/schedule`,i=new URLSearchParams({token:o.jwt}),r=e+"?"+i;v.removeAuthor(),window.location.replace(r)}},J={key:0,class:"login"},Q={key:1,class:"loading"},X=x({__name:"Login",setup(l){const o=C(),e=q();async function i(){await H(),e.query.redirect?await o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}const r=E(()=>!v.getAuthor());return K(()=>{r.value||i()}),(y,k)=>r.value?(c(),h("div",J,[t(G,{onDone:i})])):(c(),h("div",Q,[t(T)]))}});const re=A(X,[["__scopeId","data-v-e4e9b925"]]);export{re as default};
//# sourceMappingURL=Login.b6a27ab5.js.map
