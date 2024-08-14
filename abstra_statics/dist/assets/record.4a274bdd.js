var l=Object.defineProperty;var o=(i,t,s)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var n=(i,t,s)=>(o(i,typeof t!="symbol"?t+"":t,s),s);import{Q as b,y as r,eG as g}from"./vue-router.4417a734.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[t]="03710fe8-bd6d-493d-824e-ae4bee3bb975",i._sentryDebugIdIdentifier="sentry-dbid-03710fe8-bd6d-493d-824e-ae4bee3bb975")}catch{}})();class d{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(t,s){const e=(++this.subUid).toString();return this.topics[t]||(this.topics[t]=[]),this.topics[t].push({token:e,func:s}),e}async wait(t){return new Promise(s=>{const e=this.subscribe(t,a=>{this.unsubscribe(e),s(a)})})}async publish(t,...s){if(!this.topics[t])return!1;const e=this.topics[t];let a=e?e.length:0;for(;a--;)await e[a].func(s[0]);return!0}unsubscribe(t){for(const s in this.topics)if(this.topics[s]){for(let e=0,a=this.topics[s].length;e<a;e++)if(this.topics[s][e].token===t)return this.topics[s].splice(e,1),t}return!1}reset(){this.topics={},this.subUid=-1}}class h{constructor(t){n(this,"initialState");n(this,"pubsub");n(this,"_changes");this.initialState=t,this.pubsub=new d,this._changes=b({})}static from(t){return r(new h(t))}get changes(){return this._changes.value}get(t){var s;return(s=this.changes[t])!=null?s:this.initialState[t]}set(t,s){this._changes.value={...this.changes,[t]:s}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!g.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}onUpdate(t){this.pubsub.subscribe("update",t)}commit(){this.initialState=this.state,this._changes.value={}}toDTO(){return{...this.state,...this._changes.value}}update(t){this._changes.value={...this.changes,...t}}}class u extends h{constructor(s,e){super(e);n(this,"api");this.api=s}static create(s,e){return r(new u(s,e))}getInitialState(s){return this.initialState[s]}updateInitialState(s,e){this.initialState[s]=e,delete this._changes.value[s]}async save(s){if(Object.keys(this.changes).length===0||s&&!(s in this.changes))return;if(s){const a={[s]:this.changes[s]},c=await this.api.update(this.initialState.id,a);this.initialState={...this.initialState,...c},delete this._changes.value[s];return}this.initialState=await this.api.update(this.initialState.id,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{u as A,h as E};
//# sourceMappingURL=record.4a274bdd.js.map
