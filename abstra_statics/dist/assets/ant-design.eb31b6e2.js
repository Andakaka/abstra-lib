import{eF as n,cA as y}from"./vue-router.6a68d184.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="9de17a85-2849-4580-94a0-0a6032855340",e._sentryDebugIdIdentifier="sentry-dbid-9de17a85-2849-4580-94a0-0a6032855340")}catch{}})();function u(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const l=t?`'${t}': ${u(e)}`:u(e);if(n.exports.isArray(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>c(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>c(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,c as t};
//# sourceMappingURL=ant-design.eb31b6e2.js.map
