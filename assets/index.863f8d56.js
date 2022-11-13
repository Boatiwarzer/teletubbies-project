(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function f9(e,c){const a=Object.create(null),s=e.split(",");for(let t=0;t<s.length;t++)a[s[t]]=!0;return c?t=>!!a[t.toLowerCase()]:t=>!!a[t]}function z5(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++){const s=e[a],t=D1(s)?vz(s):z5(s);if(t)for(const r in t)c[r]=t[r]}return c}else{if(D1(e))return e;if(x1(e))return e}}const hz=/;(?![^(]*\))/g,uz=/:([^]+)/,mz=/\/\*.*?\*\//gs;function vz(e){const c={};return e.replace(mz,"").split(hz).forEach(a=>{if(a){const s=a.split(uz);s.length>1&&(c[s[0].trim()]=s[1].trim())}}),c}function h9(e){let c="";if(D1(e))c=e;else if(Q(e))for(let a=0;a<e.length;a++){const s=h9(e[a]);s&&(c+=s+" ")}else if(x1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const Cz="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pz=f9(Cz);function zt(e){return!!e||e===""}const h3=e=>D1(e)?e:e==null?"":Q(e)||x1(e)&&(e.toString===gt||!Y(e.toString))?JSON.stringify(e,Ht,2):String(e),Ht=(e,c)=>c&&c.__v_isRef?Ht(e,c.value):p4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[s,t])=>(a[`${s} =>`]=t,a),{})}:Mt(c)?{[`Set(${c.size})`]:[...c.values()]}:x1(c)&&!Q(c)&&!Lt(c)?String(c):c,g1={},C4=[],N2=()=>{},dz=()=>!1,zz=/^on[^a-z]/,H5=e=>zz.test(e),u9=e=>e.startsWith("onUpdate:"),t2=Object.assign,m9=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},Hz=Object.prototype.hasOwnProperty,i1=(e,c)=>Hz.call(e,c),Q=Array.isArray,p4=e=>M5(e)==="[object Map]",Mt=e=>M5(e)==="[object Set]",Y=e=>typeof e=="function",D1=e=>typeof e=="string",v9=e=>typeof e=="symbol",x1=e=>e!==null&&typeof e=="object",Vt=e=>x1(e)&&Y(e.then)&&Y(e.catch),gt=Object.prototype.toString,M5=e=>gt.call(e),Mz=e=>M5(e).slice(8,-1),Lt=e=>M5(e)==="[object Object]",C9=e=>D1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,D8=f9(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),V5=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},Vz=/-(\w)/g,q2=V5(e=>e.replace(Vz,(c,a)=>a?a.toUpperCase():"")),gz=/\B([A-Z])/g,_4=V5(e=>e.replace(gz,"-$1").toLowerCase()),g5=V5(e=>e.charAt(0).toUpperCase()+e.slice(1)),S0=V5(e=>e?`on${g5(e)}`:""),M6=(e,c)=>!Object.is(e,c),N0=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},$8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},bt=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Ge;const Lz=()=>Ge||(Ge=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let P2;class xt{constructor(c=!1){this.detached=c,this.active=!0,this.effects=[],this.cleanups=[],this.parent=P2,!c&&P2&&(this.index=(P2.scopes||(P2.scopes=[])).push(this)-1)}run(c){if(this.active){const a=P2;try{return P2=this,c()}finally{P2=a}}}on(){P2=this}off(){P2=this.parent}stop(c){if(this.active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function yt(e){return new xt(e)}function bz(e,c=P2){c&&c.active&&c.effects.push(e)}const p9=e=>{const c=new Set(e);return c.w=0,c.n=0,c},St=e=>(e.w&z3)>0,Nt=e=>(e.n&z3)>0,xz=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=z3},yz=e=>{const{deps:c}=e;if(c.length){let a=0;for(let s=0;s<c.length;s++){const t=c[s];St(t)&&!Nt(t)?t.delete(e):c[a++]=t,t.w&=~z3,t.n&=~z3}c.length=a}},r7=new WeakMap;let c6=0,z3=1;const n7=30;let b2;const q3=Symbol(""),i7=Symbol("");class d9{constructor(c,a=null,s){this.fn=c,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,bz(this,s)}run(){if(!this.active)return this.fn();let c=b2,a=u3;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=b2,b2=this,u3=!0,z3=1<<++c6,c6<=n7?xz(this):je(this),this.fn()}finally{c6<=n7&&yz(this),z3=1<<--c6,b2=this.parent,u3=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b2===this?this.deferStop=!0:this.active&&(je(this),this.onStop&&this.onStop(),this.active=!1)}}function je(e){const{deps:c}=e;if(c.length){for(let a=0;a<c.length;a++)c[a].delete(e);c.length=0}}let u3=!0;const wt=[];function F4(){wt.push(u3),u3=!1}function B4(){const e=wt.pop();u3=e===void 0?!0:e}function p2(e,c,a){if(u3&&b2){let s=r7.get(e);s||r7.set(e,s=new Map);let t=s.get(a);t||s.set(a,t=p9()),kt(t)}}function kt(e,c){let a=!1;c6<=n7?Nt(e)||(e.n|=z3,a=!St(e)):a=!e.has(b2),a&&(e.add(b2),b2.deps.push(e))}function K2(e,c,a,s,t,r){const n=r7.get(e);if(!n)return;let i=[];if(c==="clear")i=[...n.values()];else if(a==="length"&&Q(e)){const o=bt(s);n.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(a!==void 0&&i.push(n.get(a)),c){case"add":Q(e)?C9(a)&&i.push(n.get("length")):(i.push(n.get(q3)),p4(e)&&i.push(n.get(i7)));break;case"delete":Q(e)||(i.push(n.get(q3)),p4(e)&&i.push(n.get(i7)));break;case"set":p4(e)&&i.push(n.get(q3));break}if(i.length===1)i[0]&&o7(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);o7(p9(o))}}function o7(e,c){const a=Q(e)?e:[...e];for(const s of a)s.computed&&We(s);for(const s of a)s.computed||We(s)}function We(e,c){(e!==b2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Sz=f9("__proto__,__v_isRef,__isVue"),At=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(v9)),Nz=z9(),wz=z9(!1,!0),kz=z9(!0),Ke=Az();function Az(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const s=h1(this);for(let r=0,n=this.length;r<n;r++)p2(s,"get",r+"");const t=s[c](...a);return t===-1||t===!1?s[c](...a.map(h1)):t}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){F4();const s=h1(this)[c].apply(this,a);return B4(),s}}),e}function z9(e=!1,c=!1){return function(s,t,r){if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return c;if(t==="__v_raw"&&r===(e?c?Wz:Dt:c?It:Pt).get(s))return s;const n=Q(s);if(!e&&n&&i1(Ke,t))return Reflect.get(Ke,t,r);const i=Reflect.get(s,t,r);return(v9(t)?At.has(t):Sz(t))||(e||p2(s,"get",t),c)?i:k1(i)?n&&C9(t)?i:i.value:x1(i)?e?Rt(i):O4(i):i}}const Tz=Tt(),Ez=Tt(!0);function Tt(e=!1){return function(a,s,t,r){let n=a[s];if(b4(n)&&k1(n)&&!k1(t))return!1;if(!e&&(!G8(t)&&!b4(t)&&(n=h1(n),t=h1(t)),!Q(a)&&k1(n)&&!k1(t)))return n.value=t,!0;const i=Q(a)&&C9(s)?Number(s)<a.length:i1(a,s),o=Reflect.set(a,s,t,r);return a===h1(r)&&(i?M6(t,n)&&K2(a,"set",s,t):K2(a,"add",s,t)),o}}function Pz(e,c){const a=i1(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&K2(e,"delete",c,void 0),s}function Iz(e,c){const a=Reflect.has(e,c);return(!v9(c)||!At.has(c))&&p2(e,"has",c),a}function Dz(e){return p2(e,"iterate",Q(e)?"length":q3),Reflect.ownKeys(e)}const Et={get:Nz,set:Tz,deleteProperty:Pz,has:Iz,ownKeys:Dz},Rz={get:kz,set(e,c){return!0},deleteProperty(e,c){return!0}},_z=t2({},Et,{get:wz,set:Ez}),H9=e=>e,L5=e=>Reflect.getPrototypeOf(e);function v8(e,c,a=!1,s=!1){e=e.__v_raw;const t=h1(e),r=h1(c);a||(c!==r&&p2(t,"get",c),p2(t,"get",r));const{has:n}=L5(t),i=s?H9:a?g9:V6;if(n.call(t,c))return i(e.get(c));if(n.call(t,r))return i(e.get(r));e!==t&&e.get(c)}function C8(e,c=!1){const a=this.__v_raw,s=h1(a),t=h1(e);return c||(e!==t&&p2(s,"has",e),p2(s,"has",t)),e===t?a.has(e):a.has(e)||a.has(t)}function p8(e,c=!1){return e=e.__v_raw,!c&&p2(h1(e),"iterate",q3),Reflect.get(e,"size",e)}function Ze(e){e=h1(e);const c=h1(this);return L5(c).has.call(c,e)||(c.add(e),K2(c,"add",e,e)),this}function Qe(e,c){c=h1(c);const a=h1(this),{has:s,get:t}=L5(a);let r=s.call(a,e);r||(e=h1(e),r=s.call(a,e));const n=t.call(a,e);return a.set(e,c),r?M6(c,n)&&K2(a,"set",e,c):K2(a,"add",e,c),this}function Ye(e){const c=h1(this),{has:a,get:s}=L5(c);let t=a.call(c,e);t||(e=h1(e),t=a.call(c,e)),s&&s.call(c,e);const r=c.delete(e);return t&&K2(c,"delete",e,void 0),r}function Xe(){const e=h1(this),c=e.size!==0,a=e.clear();return c&&K2(e,"clear",void 0,void 0),a}function d8(e,c){return function(s,t){const r=this,n=r.__v_raw,i=h1(n),o=c?H9:e?g9:V6;return!e&&p2(i,"iterate",q3),n.forEach((l,f)=>s.call(t,o(l),o(f),r))}}function z8(e,c,a){return function(...s){const t=this.__v_raw,r=h1(t),n=p4(r),i=e==="entries"||e===Symbol.iterator&&n,o=e==="keys"&&n,l=t[e](...s),f=a?H9:c?g9:V6;return!c&&p2(r,"iterate",o?i7:q3),{next(){const{value:h,done:u}=l.next();return u?{value:h,done:u}:{value:i?[f(h[0]),f(h[1])]:f(h),done:u}},[Symbol.iterator](){return this}}}}function r3(e){return function(...c){return e==="delete"?!1:this}}function Fz(){const e={get(r){return v8(this,r)},get size(){return p8(this)},has:C8,add:Ze,set:Qe,delete:Ye,clear:Xe,forEach:d8(!1,!1)},c={get(r){return v8(this,r,!1,!0)},get size(){return p8(this)},has:C8,add:Ze,set:Qe,delete:Ye,clear:Xe,forEach:d8(!1,!0)},a={get(r){return v8(this,r,!0)},get size(){return p8(this,!0)},has(r){return C8.call(this,r,!0)},add:r3("add"),set:r3("set"),delete:r3("delete"),clear:r3("clear"),forEach:d8(!0,!1)},s={get(r){return v8(this,r,!0,!0)},get size(){return p8(this,!0)},has(r){return C8.call(this,r,!0)},add:r3("add"),set:r3("set"),delete:r3("delete"),clear:r3("clear"),forEach:d8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=z8(r,!1,!1),a[r]=z8(r,!0,!1),c[r]=z8(r,!1,!0),s[r]=z8(r,!0,!0)}),[e,a,c,s]}const[Bz,Oz,qz,Uz]=Fz();function M9(e,c){const a=c?e?Uz:qz:e?Oz:Bz;return(s,t,r)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?s:Reflect.get(i1(a,t)&&t in s?a:s,t,r)}const $z={get:M9(!1,!1)},Gz={get:M9(!1,!0)},jz={get:M9(!0,!1)},Pt=new WeakMap,It=new WeakMap,Dt=new WeakMap,Wz=new WeakMap;function Kz(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zz(e){return e.__v_skip||!Object.isExtensible(e)?0:Kz(Mz(e))}function O4(e){return b4(e)?e:V9(e,!1,Et,$z,Pt)}function Qz(e){return V9(e,!1,_z,Gz,It)}function Rt(e){return V9(e,!0,Rz,jz,Dt)}function V9(e,c,a,s,t){if(!x1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const r=t.get(e);if(r)return r;const n=Zz(e);if(n===0)return e;const i=new Proxy(e,n===2?s:a);return t.set(e,i),i}function m3(e){return b4(e)?m3(e.__v_raw):!!(e&&e.__v_isReactive)}function b4(e){return!!(e&&e.__v_isReadonly)}function G8(e){return!!(e&&e.__v_isShallow)}function _t(e){return m3(e)||b4(e)}function h1(e){const c=e&&e.__v_raw;return c?h1(c):e}function x4(e){return $8(e,"__v_skip",!0),e}const V6=e=>x1(e)?O4(e):e,g9=e=>x1(e)?Rt(e):e;function Ft(e){u3&&b2&&(e=h1(e),kt(e.dep||(e.dep=p9())))}function Bt(e,c){e=h1(e),e.dep&&o7(e.dep)}function k1(e){return!!(e&&e.__v_isRef===!0)}function L9(e){return Ot(e,!1)}function Yz(e){return Ot(e,!0)}function Ot(e,c){return k1(e)?e:new Xz(e,c)}class Xz{constructor(c,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?c:h1(c),this._value=a?c:V6(c)}get value(){return Ft(this),this._value}set value(c){const a=this.__v_isShallow||G8(c)||b4(c);c=a?c:h1(c),M6(c,this._rawValue)&&(this._rawValue=c,this._value=a?c:V6(c),Bt(this))}}function d4(e){return k1(e)?e.value:e}const Jz={get:(e,c,a)=>d4(Reflect.get(e,c,a)),set:(e,c,a,s)=>{const t=e[c];return k1(t)&&!k1(a)?(t.value=a,!0):Reflect.set(e,c,a,s)}};function qt(e){return m3(e)?e:new Proxy(e,Jz)}function cH(e){const c=Q(e)?new Array(e.length):{};for(const a in e)c[a]=aH(e,a);return c}class eH{constructor(c,a,s){this._object=c,this._key=a,this._defaultValue=s,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}}function aH(e,c,a){const s=e[c];return k1(s)?s:new eH(e,c,a)}var Ut;class sH{constructor(c,a,s,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[Ut]=!1,this._dirty=!0,this.effect=new d9(c,()=>{this._dirty||(this._dirty=!0,Bt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=s}get value(){const c=h1(this);return Ft(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}Ut="__v_isReadonly";function tH(e,c,a=!1){let s,t;const r=Y(e);return r?(s=e,t=N2):(s=e.get,t=e.set),new sH(s,t,r||!t,a)}function v3(e,c,a,s){let t;try{t=s?e(...s):e()}catch(r){b5(r,c,a)}return t}function w2(e,c,a,s){if(Y(e)){const r=v3(e,c,a,s);return r&&Vt(r)&&r.catch(n=>{b5(n,c,a)}),r}const t=[];for(let r=0;r<e.length;r++)t.push(w2(e[r],c,a,s));return t}function b5(e,c,a,s=!0){const t=c?c.vnode:null;if(c){let r=c.parent;const n=c.proxy,i=a;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,n,i)===!1)return}r=r.parent}const o=c.appContext.config.errorHandler;if(o){v3(o,null,10,[e,n,i]);return}}rH(e,a,t,s)}function rH(e,c,a,s=!0){console.error(e)}let g6=!1,l7=!1;const Q1=[];let D2=0;const z4=[];let G2=null,P3=0;const $t=Promise.resolve();let b9=null;function x9(e){const c=b9||$t;return e?c.then(this?e.bind(this):e):c}function nH(e){let c=D2+1,a=Q1.length;for(;c<a;){const s=c+a>>>1;L6(Q1[s])<e?c=s+1:a=s}return c}function y9(e){(!Q1.length||!Q1.includes(e,g6&&e.allowRecurse?D2+1:D2))&&(e.id==null?Q1.push(e):Q1.splice(nH(e.id),0,e),Gt())}function Gt(){!g6&&!l7&&(l7=!0,b9=$t.then(Wt))}function iH(e){const c=Q1.indexOf(e);c>D2&&Q1.splice(c,1)}function oH(e){Q(e)?z4.push(...e):(!G2||!G2.includes(e,e.allowRecurse?P3+1:P3))&&z4.push(e),Gt()}function Je(e,c=g6?D2+1:0){for(;c<Q1.length;c++){const a=Q1[c];a&&a.pre&&(Q1.splice(c,1),c--,a())}}function jt(e){if(z4.length){const c=[...new Set(z4)];if(z4.length=0,G2){G2.push(...c);return}for(G2=c,G2.sort((a,s)=>L6(a)-L6(s)),P3=0;P3<G2.length;P3++)G2[P3]();G2=null,P3=0}}const L6=e=>e.id==null?1/0:e.id,lH=(e,c)=>{const a=L6(e)-L6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function Wt(e){l7=!1,g6=!0,Q1.sort(lH);const c=N2;try{for(D2=0;D2<Q1.length;D2++){const a=Q1[D2];a&&a.active!==!1&&v3(a,null,14)}}finally{D2=0,Q1.length=0,jt(),g6=!1,b9=null,(Q1.length||z4.length)&&Wt()}}function fH(e,c,...a){if(e.isUnmounted)return;const s=e.vnode.props||g1;let t=a;const r=c.startsWith("update:"),n=r&&c.slice(7);if(n&&n in s){const f=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:u}=s[f]||g1;u&&(t=a.map(C=>D1(C)?C.trim():C)),h&&(t=a.map(bt))}let i,o=s[i=S0(c)]||s[i=S0(q2(c))];!o&&r&&(o=s[i=S0(_4(c))]),o&&w2(o,e,6,t);const l=s[i+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,w2(l,e,6,t)}}function Kt(e,c,a=!1){const s=c.emitsCache,t=s.get(e);if(t!==void 0)return t;const r=e.emits;let n={},i=!1;if(!Y(e)){const o=l=>{const f=Kt(l,c,!0);f&&(i=!0,t2(n,f))};!a&&c.mixins.length&&c.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!i?(x1(e)&&s.set(e,null),null):(Q(r)?r.forEach(o=>n[o]=null):t2(n,r),x1(e)&&s.set(e,n),n)}function x5(e,c){return!e||!H5(c)?!1:(c=c.slice(2).replace(/Once$/,""),i1(e,c[0].toLowerCase()+c.slice(1))||i1(e,_4(c))||i1(e,c))}let Y1=null,Zt=null;function j8(e){const c=Y1;return Y1=e,Zt=e&&e.type.__scopeId||null,c}function C3(e,c=Y1,a){if(!c||e._n)return e;const s=(...t)=>{s._d&&oa(-1);const r=j8(c);let n;try{n=e(...t)}finally{j8(r),s._d&&oa(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function w0(e){const{type:c,vnode:a,proxy:s,withProxy:t,props:r,propsOptions:[n],slots:i,attrs:o,emit:l,render:f,renderCache:h,data:u,setupState:C,ctx:z,inheritAttrs:L}=e;let w,d;const M=j8(e);try{if(a.shapeFlag&4){const F=t||s;w=I2(f.call(F,F,h,r,C,u,z)),d=o}else{const F=c;w=I2(F.length>1?F(r,{attrs:o,slots:i,emit:l}):F(r,null)),d=c.props?o:hH(o)}}catch(F){i6.length=0,b5(F,e,1),w=t1(y4)}let y=w;if(d&&L!==!1){const F=Object.keys(d),{shapeFlag:$}=y;F.length&&$&7&&(n&&F.some(u9)&&(d=uH(d,n)),y=S4(y,d))}return a.dirs&&(y=S4(y),y.dirs=y.dirs?y.dirs.concat(a.dirs):a.dirs),a.transition&&(y.transition=a.transition),w=y,j8(M),w}const hH=e=>{let c;for(const a in e)(a==="class"||a==="style"||H5(a))&&((c||(c={}))[a]=e[a]);return c},uH=(e,c)=>{const a={};for(const s in e)(!u9(s)||!(s.slice(9)in c))&&(a[s]=e[s]);return a};function mH(e,c,a){const{props:s,children:t,component:r}=e,{props:n,children:i,patchFlag:o}=c,l=r.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return s?ca(s,n,l):!!n;if(o&8){const f=c.dynamicProps;for(let h=0;h<f.length;h++){const u=f[h];if(n[u]!==s[u]&&!x5(l,u))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:s===n?!1:s?n?ca(s,n,l):!0:!!n;return!1}function ca(e,c,a){const s=Object.keys(c);if(s.length!==Object.keys(e).length)return!0;for(let t=0;t<s.length;t++){const r=s[t];if(c[r]!==e[r]&&!x5(a,r))return!0}return!1}function vH({vnode:e,parent:c},a){for(;c&&c.subTree===e;)(e=c.vnode).el=a,c=c.parent}const CH=e=>e.__isSuspense;function pH(e,c){c&&c.pendingBranch?Q(e)?c.effects.push(...e):c.effects.push(e):oH(e)}function R8(e,c){if(q1){let a=q1.provides;const s=q1.parent&&q1.parent.provides;s===a&&(a=q1.provides=Object.create(s)),a[e]=c}}function B2(e,c,a=!1){const s=q1||Y1;if(s){const t=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(t&&e in t)return t[e];if(arguments.length>1)return a&&Y(c)?c.call(s.proxy):c}}const H8={};function H4(e,c,a){return Qt(e,c,a)}function Qt(e,c,{immediate:a,deep:s,flush:t,onTrack:r,onTrigger:n}=g1){const i=q1;let o,l=!1,f=!1;if(k1(e)?(o=()=>e.value,l=G8(e)):m3(e)?(o=()=>e,s=!0):Q(e)?(f=!0,l=e.some(y=>m3(y)||G8(y)),o=()=>e.map(y=>{if(k1(y))return y.value;if(m3(y))return f4(y);if(Y(y))return v3(y,i,2)})):Y(e)?c?o=()=>v3(e,i,2):o=()=>{if(!(i&&i.isUnmounted))return h&&h(),w2(e,i,3,[u])}:o=N2,c&&s){const y=o;o=()=>f4(y())}let h,u=y=>{h=d.onStop=()=>{v3(y,i,4)}},C;if(x6)if(u=N2,c?a&&w2(c,i,3,[o(),f?[]:void 0,u]):o(),t==="sync"){const y=lM();C=y.__watcherHandles||(y.__watcherHandles=[])}else return N2;let z=f?new Array(e.length).fill(H8):H8;const L=()=>{if(!!d.active)if(c){const y=d.run();(s||l||(f?y.some((F,$)=>M6(F,z[$])):M6(y,z)))&&(h&&h(),w2(c,i,3,[y,z===H8?void 0:f&&z[0]===H8?[]:z,u]),z=y)}else d.run()};L.allowRecurse=!!c;let w;t==="sync"?w=L:t==="post"?w=()=>o2(L,i&&i.suspense):(L.pre=!0,i&&(L.id=i.uid),w=()=>y9(L));const d=new d9(o,w);c?a?L():z=d.run():t==="post"?o2(d.run.bind(d),i&&i.suspense):d.run();const M=()=>{d.stop(),i&&i.scope&&m9(i.scope.effects,d)};return C&&C.push(M),M}function dH(e,c,a){const s=this.proxy,t=D1(e)?e.includes(".")?Yt(s,e):()=>s[e]:e.bind(s,s);let r;Y(c)?r=c:(r=c.handler,a=c);const n=q1;N4(this);const i=Qt(t,r.bind(s),a);return n?N4(n):U3(),i}function Yt(e,c){const a=c.split(".");return()=>{let s=e;for(let t=0;t<a.length&&s;t++)s=s[a[t]];return s}}function f4(e,c){if(!x1(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),k1(e))f4(e.value,c);else if(Q(e))for(let a=0;a<e.length;a++)f4(e[a],c);else if(Mt(e)||p4(e))e.forEach(a=>{f4(a,c)});else if(Lt(e))for(const a in e)f4(e[a],c);return e}function $6(e){return Y(e)?{setup:e,name:e.name}:e}const r6=e=>!!e.type.__asyncLoader,Xt=e=>e.type.__isKeepAlive;function zH(e,c){Jt(e,"a",c)}function HH(e,c){Jt(e,"da",c)}function Jt(e,c,a=q1){const s=e.__wdc||(e.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(y5(c,s,a),a){let t=a.parent;for(;t&&t.parent;)Xt(t.parent.vnode)&&MH(s,c,a,t),t=t.parent}}function MH(e,c,a,s){const t=y5(c,e,s,!0);S9(()=>{m9(s[c],t)},a)}function y5(e,c,a=q1,s=!1){if(a){const t=a[e]||(a[e]=[]),r=c.__weh||(c.__weh=(...n)=>{if(a.isUnmounted)return;F4(),N4(a);const i=w2(c,a,e,n);return U3(),B4(),i});return s?t.unshift(r):t.push(r),r}}const a3=e=>(c,a=q1)=>(!x6||e==="sp")&&y5(e,(...s)=>c(...s),a),VH=a3("bm"),gH=a3("m"),LH=a3("bu"),bH=a3("u"),xH=a3("bum"),S9=a3("um"),yH=a3("sp"),SH=a3("rtg"),NH=a3("rtc");function wH(e,c=q1){y5("ec",e,c)}function k3(e,c,a,s){const t=e.dirs,r=c&&c.dirs;for(let n=0;n<t.length;n++){const i=t[n];r&&(i.oldValue=r[n].value);let o=i.dir[s];o&&(F4(),w2(o,a,8,[e.el,i,e,c]),B4())}}const N9="components";function Z3(e,c){return er(N9,e,!0,c)||e}const cr=Symbol();function kH(e){return D1(e)?er(N9,e,!1)||e:e||cr}function er(e,c,a=!0,s=!1){const t=Y1||q1;if(t){const r=t.type;if(e===N9){const i=nM(r,!1);if(i&&(i===c||i===q2(c)||i===g5(q2(c))))return r}const n=ea(t[e]||r[e],c)||ea(t.appContext[e],c);return!n&&s?r:n}}function ea(e,c){return e&&(e[c]||e[q2(c)]||e[g5(q2(c))])}function ar(e,c,a,s){let t;const r=a&&a[s];if(Q(e)||D1(e)){t=new Array(e.length);for(let n=0,i=e.length;n<i;n++)t[n]=c(e[n],n,void 0,r&&r[n])}else if(typeof e=="number"){t=new Array(e);for(let n=0;n<e;n++)t[n]=c(n+1,n,void 0,r&&r[n])}else if(x1(e))if(e[Symbol.iterator])t=Array.from(e,(n,i)=>c(n,i,void 0,r&&r[i]));else{const n=Object.keys(e);t=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const l=n[i];t[i]=c(e[l],l,i,r&&r[i])}}else t=[];return a&&(a[s]=t),t}function AH(e,c,a={},s,t){if(Y1.isCE||Y1.parent&&r6(Y1.parent)&&Y1.parent.isCE)return c!=="default"&&(a.name=c),t1("slot",a,s&&s());let r=e[c];r&&r._c&&(r._d=!1),k2();const n=r&&sr(r(a)),i=mr(v2,{key:a.key||n&&n.key||`_${c}`},n||(s?s():[]),n&&e._===1?64:-2);return!t&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function sr(e){return e.some(c=>K8(c)?!(c.type===y4||c.type===v2&&!sr(c.children)):!0)?e:null}const f7=e=>e?pr(e)?T9(e)||e.proxy:f7(e.parent):null,n6=t2(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>f7(e.parent),$root:e=>f7(e.root),$emit:e=>e.emit,$options:e=>w9(e),$forceUpdate:e=>e.f||(e.f=()=>y9(e.update)),$nextTick:e=>e.n||(e.n=x9.bind(e.proxy)),$watch:e=>dH.bind(e)}),k0=(e,c)=>e!==g1&&!e.__isScriptSetup&&i1(e,c),TH={get({_:e},c){const{ctx:a,setupState:s,data:t,props:r,accessCache:n,type:i,appContext:o}=e;let l;if(c[0]!=="$"){const C=n[c];if(C!==void 0)switch(C){case 1:return s[c];case 2:return t[c];case 4:return a[c];case 3:return r[c]}else{if(k0(s,c))return n[c]=1,s[c];if(t!==g1&&i1(t,c))return n[c]=2,t[c];if((l=e.propsOptions[0])&&i1(l,c))return n[c]=3,r[c];if(a!==g1&&i1(a,c))return n[c]=4,a[c];h7&&(n[c]=0)}}const f=n6[c];let h,u;if(f)return c==="$attrs"&&p2(e,"get",c),f(e);if((h=i.__cssModules)&&(h=h[c]))return h;if(a!==g1&&i1(a,c))return n[c]=4,a[c];if(u=o.config.globalProperties,i1(u,c))return u[c]},set({_:e},c,a){const{data:s,setupState:t,ctx:r}=e;return k0(t,c)?(t[c]=a,!0):s!==g1&&i1(s,c)?(s[c]=a,!0):i1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(r[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:s,appContext:t,propsOptions:r}},n){let i;return!!a[n]||e!==g1&&i1(e,n)||k0(c,n)||(i=r[0])&&i1(i,n)||i1(s,n)||i1(n6,n)||i1(t.config.globalProperties,n)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:i1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};let h7=!0;function EH(e){const c=w9(e),a=e.proxy,s=e.ctx;h7=!1,c.beforeCreate&&aa(c.beforeCreate,e,"bc");const{data:t,computed:r,methods:n,watch:i,provide:o,inject:l,created:f,beforeMount:h,mounted:u,beforeUpdate:C,updated:z,activated:L,deactivated:w,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:F,render:$,renderTracked:l1,renderTriggered:j,errorCaptured:e1,serverPrefetch:V1,expose:F1,inheritAttrs:r2,components:H2,directives:t3,filters:u2}=c;if(l&&PH(l,s,null,e.appContext.config.unwrapInjectedRef),n)for(const d1 in n){const C1=n[d1];Y(C1)&&(s[d1]=C1.bind(a))}if(t){const d1=t.call(a,a);x1(d1)&&(e.data=O4(d1))}if(h7=!0,r)for(const d1 in r){const C1=r[d1],V2=Y(C1)?C1.bind(a,a):Y(C1.get)?C1.get.bind(a,a):N2,w3=!Y(C1)&&Y(C1.set)?C1.set.bind(a):N2,g2=L1({get:V2,set:w3});Object.defineProperty(s,d1,{enumerable:!0,configurable:!0,get:()=>g2.value,set:n2=>g2.value=n2})}if(i)for(const d1 in i)tr(i[d1],s,a,d1);if(o){const d1=Y(o)?o.call(a):o;Reflect.ownKeys(d1).forEach(C1=>{R8(C1,d1[C1])})}f&&aa(f,e,"c");function A1(d1,C1){Q(C1)?C1.forEach(V2=>d1(V2.bind(a))):C1&&d1(C1.bind(a))}if(A1(VH,h),A1(gH,u),A1(LH,C),A1(bH,z),A1(zH,L),A1(HH,w),A1(wH,e1),A1(NH,l1),A1(SH,j),A1(xH,M),A1(S9,F),A1(yH,V1),Q(F1))if(F1.length){const d1=e.exposed||(e.exposed={});F1.forEach(C1=>{Object.defineProperty(d1,C1,{get:()=>a[C1],set:V2=>a[C1]=V2})})}else e.exposed||(e.exposed={});$&&e.render===N2&&(e.render=$),r2!=null&&(e.inheritAttrs=r2),H2&&(e.components=H2),t3&&(e.directives=t3)}function PH(e,c,a=N2,s=!1){Q(e)&&(e=u7(e));for(const t in e){const r=e[t];let n;x1(r)?"default"in r?n=B2(r.from||t,r.default,!0):n=B2(r.from||t):n=B2(r),k1(n)&&s?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function aa(e,c,a){w2(Q(e)?e.map(s=>s.bind(c.proxy)):e.bind(c.proxy),c,a)}function tr(e,c,a,s){const t=s.includes(".")?Yt(a,s):()=>a[s];if(D1(e)){const r=c[e];Y(r)&&H4(t,r)}else if(Y(e))H4(t,e.bind(a));else if(x1(e))if(Q(e))e.forEach(r=>tr(r,c,a,s));else{const r=Y(e.handler)?e.handler.bind(a):c[e.handler];Y(r)&&H4(t,r,e)}}function w9(e){const c=e.type,{mixins:a,extends:s}=c,{mixins:t,optionsCache:r,config:{optionMergeStrategies:n}}=e.appContext,i=r.get(c);let o;return i?o=i:!t.length&&!a&&!s?o=c:(o={},t.length&&t.forEach(l=>W8(o,l,n,!0)),W8(o,c,n)),x1(c)&&r.set(c,o),o}function W8(e,c,a,s=!1){const{mixins:t,extends:r}=c;r&&W8(e,r,a,!0),t&&t.forEach(n=>W8(e,n,a,!0));for(const n in c)if(!(s&&n==="expose")){const i=IH[n]||a&&a[n];e[n]=i?i(e[n],c[n]):c[n]}return e}const IH={data:sa,props:T3,emits:T3,methods:T3,computed:T3,beforeCreate:e2,created:e2,beforeMount:e2,mounted:e2,beforeUpdate:e2,updated:e2,beforeDestroy:e2,beforeUnmount:e2,destroyed:e2,unmounted:e2,activated:e2,deactivated:e2,errorCaptured:e2,serverPrefetch:e2,components:T3,directives:T3,watch:RH,provide:sa,inject:DH};function sa(e,c){return c?e?function(){return t2(Y(e)?e.call(this,this):e,Y(c)?c.call(this,this):c)}:c:e}function DH(e,c){return T3(u7(e),u7(c))}function u7(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function e2(e,c){return e?[...new Set([].concat(e,c))]:c}function T3(e,c){return e?t2(t2(Object.create(null),e),c):c}function RH(e,c){if(!e)return c;if(!c)return e;const a=t2(Object.create(null),e);for(const s in c)a[s]=e2(e[s],c[s]);return a}function _H(e,c,a,s=!1){const t={},r={};$8(r,N5,1),e.propsDefaults=Object.create(null),rr(e,c,t,r);for(const n in e.propsOptions[0])n in t||(t[n]=void 0);a?e.props=s?t:Qz(t):e.type.props?e.props=t:e.props=r,e.attrs=r}function FH(e,c,a,s){const{props:t,attrs:r,vnode:{patchFlag:n}}=e,i=h1(t),[o]=e.propsOptions;let l=!1;if((s||n>0)&&!(n&16)){if(n&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let u=f[h];if(x5(e.emitsOptions,u))continue;const C=c[u];if(o)if(i1(r,u))C!==r[u]&&(r[u]=C,l=!0);else{const z=q2(u);t[z]=m7(o,i,z,C,e,!1)}else C!==r[u]&&(r[u]=C,l=!0)}}}else{rr(e,c,t,r)&&(l=!0);let f;for(const h in i)(!c||!i1(c,h)&&((f=_4(h))===h||!i1(c,f)))&&(o?a&&(a[h]!==void 0||a[f]!==void 0)&&(t[h]=m7(o,i,h,void 0,e,!0)):delete t[h]);if(r!==i)for(const h in r)(!c||!i1(c,h)&&!0)&&(delete r[h],l=!0)}l&&K2(e,"set","$attrs")}function rr(e,c,a,s){const[t,r]=e.propsOptions;let n=!1,i;if(c)for(let o in c){if(D8(o))continue;const l=c[o];let f;t&&i1(t,f=q2(o))?!r||!r.includes(f)?a[f]=l:(i||(i={}))[f]=l:x5(e.emitsOptions,o)||(!(o in s)||l!==s[o])&&(s[o]=l,n=!0)}if(r){const o=h1(a),l=i||g1;for(let f=0;f<r.length;f++){const h=r[f];a[h]=m7(t,o,h,l[h],e,!i1(l,h))}}return n}function m7(e,c,a,s,t,r){const n=e[a];if(n!=null){const i=i1(n,"default");if(i&&s===void 0){const o=n.default;if(n.type!==Function&&Y(o)){const{propsDefaults:l}=t;a in l?s=l[a]:(N4(t),s=l[a]=o.call(null,c),U3())}else s=o}n[0]&&(r&&!i?s=!1:n[1]&&(s===""||s===_4(a))&&(s=!0))}return s}function nr(e,c,a=!1){const s=c.propsCache,t=s.get(e);if(t)return t;const r=e.props,n={},i=[];let o=!1;if(!Y(e)){const f=h=>{o=!0;const[u,C]=nr(h,c,!0);t2(n,u),C&&i.push(...C)};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!o)return x1(e)&&s.set(e,C4),C4;if(Q(r))for(let f=0;f<r.length;f++){const h=q2(r[f]);ta(h)&&(n[h]=g1)}else if(r)for(const f in r){const h=q2(f);if(ta(h)){const u=r[f],C=n[h]=Q(u)||Y(u)?{type:u}:Object.assign({},u);if(C){const z=ia(Boolean,C.type),L=ia(String,C.type);C[0]=z>-1,C[1]=L<0||z<L,(z>-1||i1(C,"default"))&&i.push(h)}}}const l=[n,i];return x1(e)&&s.set(e,l),l}function ta(e){return e[0]!=="$"}function ra(e){const c=e&&e.toString().match(/^\s*function (\w+)/);return c?c[1]:e===null?"null":""}function na(e,c){return ra(e)===ra(c)}function ia(e,c){return Q(c)?c.findIndex(a=>na(a,e)):Y(c)&&na(c,e)?0:-1}const ir=e=>e[0]==="_"||e==="$stable",k9=e=>Q(e)?e.map(I2):[I2(e)],BH=(e,c,a)=>{if(c._n)return c;const s=C3((...t)=>k9(c(...t)),a);return s._c=!1,s},or=(e,c,a)=>{const s=e._ctx;for(const t in e){if(ir(t))continue;const r=e[t];if(Y(r))c[t]=BH(t,r,s);else if(r!=null){const n=k9(r);c[t]=()=>n}}},lr=(e,c)=>{const a=k9(c);e.slots.default=()=>a},OH=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=h1(c),$8(c,"_",a)):or(c,e.slots={})}else e.slots={},c&&lr(e,c);$8(e.slots,N5,1)},qH=(e,c,a)=>{const{vnode:s,slots:t}=e;let r=!0,n=g1;if(s.shapeFlag&32){const i=c._;i?a&&i===1?r=!1:(t2(t,c),!a&&i===1&&delete t._):(r=!c.$stable,or(c,t)),n=c}else c&&(lr(e,c),n={default:1});if(r)for(const i in t)!ir(i)&&!(i in n)&&delete t[i]};function fr(){return{app:null,config:{isNativeTag:dz,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UH=0;function $H(e,c){return function(s,t=null){Y(s)||(s=Object.assign({},s)),t!=null&&!x1(t)&&(t=null);const r=fr(),n=new Set;let i=!1;const o=r.app={_uid:UH++,_component:s,_props:t,_container:null,_context:r,_instance:null,version:fM,get config(){return r.config},set config(l){},use(l,...f){return n.has(l)||(l&&Y(l.install)?(n.add(l),l.install(o,...f)):Y(l)&&(n.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,h){if(!i){const u=t1(s,t);return u.appContext=r,f&&c?c(u,l):e(u,l,h),i=!0,o._container=l,l.__vue_app__=o,T9(u.component)||u.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o}};return o}}function v7(e,c,a,s,t=!1){if(Q(e)){e.forEach((u,C)=>v7(u,c&&(Q(c)?c[C]:c),a,s,t));return}if(r6(s)&&!t)return;const r=s.shapeFlag&4?T9(s.component)||s.component.proxy:s.el,n=t?null:r,{i,r:o}=e,l=c&&c.r,f=i.refs===g1?i.refs={}:i.refs,h=i.setupState;if(l!=null&&l!==o&&(D1(l)?(f[l]=null,i1(h,l)&&(h[l]=null)):k1(l)&&(l.value=null)),Y(o))v3(o,i,12,[n,f]);else{const u=D1(o),C=k1(o);if(u||C){const z=()=>{if(e.f){const L=u?i1(h,o)?h[o]:f[o]:o.value;t?Q(L)&&m9(L,r):Q(L)?L.includes(r)||L.push(r):u?(f[o]=[r],i1(h,o)&&(h[o]=f[o])):(o.value=[r],e.k&&(f[e.k]=o.value))}else u?(f[o]=n,i1(h,o)&&(h[o]=n)):C&&(o.value=n,e.k&&(f[e.k]=n))};n?(z.id=-1,o2(z,a)):z()}}}const o2=pH;function GH(e){return jH(e)}function jH(e,c){const a=Lz();a.__VUE__=!0;const{insert:s,remove:t,patchProp:r,createElement:n,createText:i,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:u,setScopeId:C=N2,insertStaticContent:z}=e,L=(m,v,p,H=null,g=null,N=null,E=!1,S=null,k=!!v.dynamicChildren)=>{if(m===v)return;m&&!Y4(m,v)&&(H=A(m),n2(m,g,N,!0),m=null),v.patchFlag===-2&&(k=!1,v.dynamicChildren=null);const{type:b,ref:q,shapeFlag:D}=v;switch(b){case S5:w(m,v,p,H);break;case y4:d(m,v,p,H);break;case A0:m==null&&M(v,p,H,E);break;case v2:H2(m,v,p,H,g,N,E,S,k);break;default:D&1?$(m,v,p,H,g,N,E,S,k):D&6?t3(m,v,p,H,g,N,E,S,k):(D&64||D&128)&&b.process(m,v,p,H,g,N,E,S,k,n1)}q!=null&&g&&v7(q,m&&m.ref,N,v||m,!v)},w=(m,v,p,H)=>{if(m==null)s(v.el=i(v.children),p,H);else{const g=v.el=m.el;v.children!==m.children&&l(g,v.children)}},d=(m,v,p,H)=>{m==null?s(v.el=o(v.children||""),p,H):v.el=m.el},M=(m,v,p,H)=>{[m.el,m.anchor]=z(m.children,v,p,H,m.el,m.anchor)},y=({el:m,anchor:v},p,H)=>{let g;for(;m&&m!==v;)g=u(m),s(m,p,H),m=g;s(v,p,H)},F=({el:m,anchor:v})=>{let p;for(;m&&m!==v;)p=u(m),t(m),m=p;t(v)},$=(m,v,p,H,g,N,E,S,k)=>{E=E||v.type==="svg",m==null?l1(v,p,H,g,N,E,S,k):V1(m,v,g,N,E,S,k)},l1=(m,v,p,H,g,N,E,S)=>{let k,b;const{type:q,props:D,shapeFlag:U,transition:Z,dirs:s1}=m;if(k=m.el=n(m.type,N,D&&D.is,D),U&8?f(k,m.children):U&16&&e1(m.children,k,null,H,g,N&&q!=="foreignObject",E,S),s1&&k3(m,null,H,"created"),D){for(const p1 in D)p1!=="value"&&!D8(p1)&&r(k,p1,null,D[p1],N,m.children,H,g,P);"value"in D&&r(k,"value",null,D.value),(b=D.onVnodeBeforeMount)&&E2(b,H,m)}j(k,m,m.scopeId,E,H),s1&&k3(m,null,H,"beforeMount");const z1=(!g||g&&!g.pendingBranch)&&Z&&!Z.persisted;z1&&Z.beforeEnter(k),s(k,v,p),((b=D&&D.onVnodeMounted)||z1||s1)&&o2(()=>{b&&E2(b,H,m),z1&&Z.enter(k),s1&&k3(m,null,H,"mounted")},g)},j=(m,v,p,H,g)=>{if(p&&C(m,p),H)for(let N=0;N<H.length;N++)C(m,H[N]);if(g){let N=g.subTree;if(v===N){const E=g.vnode;j(m,E,E.scopeId,E.slotScopeIds,g.parent)}}},e1=(m,v,p,H,g,N,E,S,k=0)=>{for(let b=k;b<m.length;b++){const q=m[b]=S?o3(m[b]):I2(m[b]);L(null,q,v,p,H,g,N,E,S)}},V1=(m,v,p,H,g,N,E)=>{const S=v.el=m.el;let{patchFlag:k,dynamicChildren:b,dirs:q}=v;k|=m.patchFlag&16;const D=m.props||g1,U=v.props||g1;let Z;p&&A3(p,!1),(Z=U.onVnodeBeforeUpdate)&&E2(Z,p,v,m),q&&k3(v,m,p,"beforeUpdate"),p&&A3(p,!0);const s1=g&&v.type!=="foreignObject";if(b?F1(m.dynamicChildren,b,S,p,H,s1,N):E||C1(m,v,S,null,p,H,s1,N,!1),k>0){if(k&16)r2(S,v,D,U,p,H,g);else if(k&2&&D.class!==U.class&&r(S,"class",null,U.class,g),k&4&&r(S,"style",D.style,U.style,g),k&8){const z1=v.dynamicProps;for(let p1=0;p1<z1.length;p1++){const T1=z1[p1],L2=D[T1],r4=U[T1];(r4!==L2||T1==="value")&&r(S,T1,L2,r4,g,m.children,p,H,P)}}k&1&&m.children!==v.children&&f(S,v.children)}else!E&&b==null&&r2(S,v,D,U,p,H,g);((Z=U.onVnodeUpdated)||q)&&o2(()=>{Z&&E2(Z,p,v,m),q&&k3(v,m,p,"updated")},H)},F1=(m,v,p,H,g,N,E)=>{for(let S=0;S<v.length;S++){const k=m[S],b=v[S],q=k.el&&(k.type===v2||!Y4(k,b)||k.shapeFlag&70)?h(k.el):p;L(k,b,q,null,H,g,N,E,!0)}},r2=(m,v,p,H,g,N,E)=>{if(p!==H){if(p!==g1)for(const S in p)!D8(S)&&!(S in H)&&r(m,S,p[S],null,E,v.children,g,N,P);for(const S in H){if(D8(S))continue;const k=H[S],b=p[S];k!==b&&S!=="value"&&r(m,S,b,k,E,v.children,g,N,P)}"value"in H&&r(m,"value",p.value,H.value)}},H2=(m,v,p,H,g,N,E,S,k)=>{const b=v.el=m?m.el:i(""),q=v.anchor=m?m.anchor:i("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:Z}=v;Z&&(S=S?S.concat(Z):Z),m==null?(s(b,p,H),s(q,p,H),e1(v.children,p,q,g,N,E,S,k)):D>0&&D&64&&U&&m.dynamicChildren?(F1(m.dynamicChildren,U,p,g,N,E,S),(v.key!=null||g&&v===g.subTree)&&hr(m,v,!0)):C1(m,v,p,q,g,N,E,S,k)},t3=(m,v,p,H,g,N,E,S,k)=>{v.slotScopeIds=S,m==null?v.shapeFlag&512?g.ctx.activate(v,p,H,E,k):u2(v,p,H,g,N,E,k):B1(m,v,k)},u2=(m,v,p,H,g,N,E)=>{const S=m.component=eM(m,H,g);if(Xt(m)&&(S.ctx.renderer=n1),aM(S),S.asyncDep){if(g&&g.registerDep(S,A1),!m.el){const k=S.subTree=t1(y4);d(null,k,v,p)}return}A1(S,m,v,p,g,N,E)},B1=(m,v,p)=>{const H=v.component=m.component;if(mH(m,v,p))if(H.asyncDep&&!H.asyncResolved){d1(H,v,p);return}else H.next=v,iH(H.update),H.update();else v.el=m.el,H.vnode=v},A1=(m,v,p,H,g,N,E)=>{const S=()=>{if(m.isMounted){let{next:q,bu:D,u:U,parent:Z,vnode:s1}=m,z1=q,p1;A3(m,!1),q?(q.el=s1.el,d1(m,q,E)):q=s1,D&&N0(D),(p1=q.props&&q.props.onVnodeBeforeUpdate)&&E2(p1,Z,q,s1),A3(m,!0);const T1=w0(m),L2=m.subTree;m.subTree=T1,L(L2,T1,h(L2.el),A(L2),m,g,N),q.el=T1.el,z1===null&&vH(m,T1.el),U&&o2(U,g),(p1=q.props&&q.props.onVnodeUpdated)&&o2(()=>E2(p1,Z,q,s1),g)}else{let q;const{el:D,props:U}=v,{bm:Z,m:s1,parent:z1}=m,p1=r6(v);if(A3(m,!1),Z&&N0(Z),!p1&&(q=U&&U.onVnodeBeforeMount)&&E2(q,z1,v),A3(m,!0),D&&X){const T1=()=>{m.subTree=w0(m),X(D,m.subTree,m,g,null)};p1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&T1()):T1()}else{const T1=m.subTree=w0(m);L(null,T1,p,H,m,g,N),v.el=T1.el}if(s1&&o2(s1,g),!p1&&(q=U&&U.onVnodeMounted)){const T1=v;o2(()=>E2(q,z1,T1),g)}(v.shapeFlag&256||z1&&r6(z1.vnode)&&z1.vnode.shapeFlag&256)&&m.a&&o2(m.a,g),m.isMounted=!0,v=p=H=null}},k=m.effect=new d9(S,()=>y9(b),m.scope),b=m.update=()=>k.run();b.id=m.uid,A3(m,!0),b()},d1=(m,v,p)=>{v.component=m;const H=m.vnode.props;m.vnode=v,m.next=null,FH(m,v.props,H,p),qH(m,v.children,p),F4(),Je(),B4()},C1=(m,v,p,H,g,N,E,S,k=!1)=>{const b=m&&m.children,q=m?m.shapeFlag:0,D=v.children,{patchFlag:U,shapeFlag:Z}=v;if(U>0){if(U&128){w3(b,D,p,H,g,N,E,S,k);return}else if(U&256){V2(b,D,p,H,g,N,E,S,k);return}}Z&8?(q&16&&P(b,g,N),D!==b&&f(p,D)):q&16?Z&16?w3(b,D,p,H,g,N,E,S,k):P(b,g,N,!0):(q&8&&f(p,""),Z&16&&e1(D,p,H,g,N,E,S,k))},V2=(m,v,p,H,g,N,E,S,k)=>{m=m||C4,v=v||C4;const b=m.length,q=v.length,D=Math.min(b,q);let U;for(U=0;U<D;U++){const Z=v[U]=k?o3(v[U]):I2(v[U]);L(m[U],Z,p,null,g,N,E,S,k)}b>q?P(m,g,N,!0,!1,D):e1(v,p,H,g,N,E,S,k,D)},w3=(m,v,p,H,g,N,E,S,k)=>{let b=0;const q=v.length;let D=m.length-1,U=q-1;for(;b<=D&&b<=U;){const Z=m[b],s1=v[b]=k?o3(v[b]):I2(v[b]);if(Y4(Z,s1))L(Z,s1,p,null,g,N,E,S,k);else break;b++}for(;b<=D&&b<=U;){const Z=m[D],s1=v[U]=k?o3(v[U]):I2(v[U]);if(Y4(Z,s1))L(Z,s1,p,null,g,N,E,S,k);else break;D--,U--}if(b>D){if(b<=U){const Z=U+1,s1=Z<q?v[Z].el:H;for(;b<=U;)L(null,v[b]=k?o3(v[b]):I2(v[b]),p,s1,g,N,E,S,k),b++}}else if(b>U)for(;b<=D;)n2(m[b],g,N,!0),b++;else{const Z=b,s1=b,z1=new Map;for(b=s1;b<=U;b++){const m2=v[b]=k?o3(v[b]):I2(v[b]);m2.key!=null&&z1.set(m2.key,b)}let p1,T1=0;const L2=U-s1+1;let r4=!1,qe=0;const Q4=new Array(L2);for(b=0;b<L2;b++)Q4[b]=0;for(b=Z;b<=D;b++){const m2=m[b];if(T1>=L2){n2(m2,g,N,!0);continue}let T2;if(m2.key!=null)T2=z1.get(m2.key);else for(p1=s1;p1<=U;p1++)if(Q4[p1-s1]===0&&Y4(m2,v[p1])){T2=p1;break}T2===void 0?n2(m2,g,N,!0):(Q4[T2-s1]=b+1,T2>=qe?qe=T2:r4=!0,L(m2,v[T2],p,null,g,N,E,S,k),T1++)}const Ue=r4?WH(Q4):C4;for(p1=Ue.length-1,b=L2-1;b>=0;b--){const m2=s1+b,T2=v[m2],$e=m2+1<q?v[m2+1].el:H;Q4[b]===0?L(null,T2,p,$e,g,N,E,S,k):r4&&(p1<0||b!==Ue[p1]?g2(T2,p,$e,2):p1--)}}},g2=(m,v,p,H,g=null)=>{const{el:N,type:E,transition:S,children:k,shapeFlag:b}=m;if(b&6){g2(m.component.subTree,v,p,H);return}if(b&128){m.suspense.move(v,p,H);return}if(b&64){E.move(m,v,p,n1);return}if(E===v2){s(N,v,p);for(let D=0;D<k.length;D++)g2(k[D],v,p,H);s(m.anchor,v,p);return}if(E===A0){y(m,v,p);return}if(H!==2&&b&1&&S)if(H===0)S.beforeEnter(N),s(N,v,p),o2(()=>S.enter(N),g);else{const{leave:D,delayLeave:U,afterLeave:Z}=S,s1=()=>s(N,v,p),z1=()=>{D(N,()=>{s1(),Z&&Z()})};U?U(N,s1,z1):z1()}else s(N,v,p)},n2=(m,v,p,H=!1,g=!1)=>{const{type:N,props:E,ref:S,children:k,dynamicChildren:b,shapeFlag:q,patchFlag:D,dirs:U}=m;if(S!=null&&v7(S,null,p,m,!0),q&256){v.ctx.deactivate(m);return}const Z=q&1&&U,s1=!r6(m);let z1;if(s1&&(z1=E&&E.onVnodeBeforeUnmount)&&E2(z1,v,m),q&6)V(m.component,p,H);else{if(q&128){m.suspense.unmount(p,H);return}Z&&k3(m,null,v,"beforeUnmount"),q&64?m.type.remove(m,v,p,g,n1,H):b&&(N!==v2||D>0&&D&64)?P(b,v,p,!1,!0):(N===v2&&D&384||!g&&q&16)&&P(k,v,p),H&&t4(m)}(s1&&(z1=E&&E.onVnodeUnmounted)||Z)&&o2(()=>{z1&&E2(z1,v,m),Z&&k3(m,null,v,"unmounted")},p)},t4=m=>{const{type:v,el:p,anchor:H,transition:g}=m;if(v===v2){m8(p,H);return}if(v===A0){F(m);return}const N=()=>{t(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(m.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:S}=g,k=()=>E(p,N);S?S(m.el,N,k):k()}else N()},m8=(m,v)=>{let p;for(;m!==v;)p=u(m),t(m),m=p;t(v)},V=(m,v,p)=>{const{bum:H,scope:g,update:N,subTree:E,um:S}=m;H&&N0(H),g.stop(),N&&(N.active=!1,n2(E,m,v,p)),S&&o2(S,v),o2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},P=(m,v,p,H=!1,g=!1,N=0)=>{for(let E=N;E<m.length;E++)n2(m[E],v,p,H,g)},A=m=>m.shapeFlag&6?A(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el),O=(m,v,p)=>{m==null?v._vnode&&n2(v._vnode,null,null,!0):L(v._vnode||null,m,v,null,null,null,p),Je(),jt(),v._vnode=m},n1={p:L,um:n2,m:g2,r:t4,mt:u2,mc:e1,pc:C1,pbc:F1,n:A,o:e};let y1,X;return c&&([y1,X]=c(n1)),{render:O,hydrate:y1,createApp:$H(O,y1)}}function A3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function hr(e,c,a=!1){const s=e.children,t=c.children;if(Q(s)&&Q(t))for(let r=0;r<s.length;r++){const n=s[r];let i=t[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[r]=o3(t[r]),i.el=n.el),a||hr(n,i)),i.type===S5&&(i.el=n.el)}}function WH(e){const c=e.slice(),a=[0];let s,t,r,n,i;const o=e.length;for(s=0;s<o;s++){const l=e[s];if(l!==0){if(t=a[a.length-1],e[t]<l){c[s]=t,a.push(s);continue}for(r=0,n=a.length-1;r<n;)i=r+n>>1,e[a[i]]<l?r=i+1:n=i;l<e[a[r]]&&(r>0&&(c[s]=a[r-1]),a[r]=s)}}for(r=a.length,n=a[r-1];r-- >0;)a[r]=n,n=c[n];return a}const KH=e=>e.__isTeleport,v2=Symbol(void 0),S5=Symbol(void 0),y4=Symbol(void 0),A0=Symbol(void 0),i6=[];let y2=null;function k2(e=!1){i6.push(y2=e?null:[])}function ZH(){i6.pop(),y2=i6[i6.length-1]||null}let b6=1;function oa(e){b6+=e}function ur(e){return e.dynamicChildren=b6>0?y2||C4:null,ZH(),b6>0&&y2&&y2.push(e),e}function W2(e,c,a,s,t,r){return ur(J(e,c,a,s,t,r,!0))}function mr(e,c,a,s,t){return ur(t1(e,c,a,s,t,!0))}function K8(e){return e?e.__v_isVNode===!0:!1}function Y4(e,c){return e.type===c.type&&e.key===c.key}const N5="__vInternal",vr=({key:e})=>e!=null?e:null,_8=({ref:e,ref_key:c,ref_for:a})=>e!=null?D1(e)||k1(e)||Y(e)?{i:Y1,r:e,k:c,f:!!a}:e:null;function J(e,c=null,a=null,s=0,t=null,r=e===v2?0:1,n=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&vr(c),ref:c&&_8(c),scopeId:Zt,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:Y1};return i?(A9(o,a),r&128&&e.normalize(o)):a&&(o.shapeFlag|=D1(a)?8:16),b6>0&&!n&&y2&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&y2.push(o),o}const t1=QH;function QH(e,c=null,a=null,s=0,t=null,r=!1){if((!e||e===cr)&&(e=y4),K8(e)){const i=S4(e,c,!0);return a&&A9(i,a),b6>0&&!r&&y2&&(i.shapeFlag&6?y2[y2.indexOf(e)]=i:y2.push(i)),i.patchFlag|=-2,i}if(iM(e)&&(e=e.__vccOpts),c){c=YH(c);let{class:i,style:o}=c;i&&!D1(i)&&(c.class=h9(i)),x1(o)&&(_t(o)&&!Q(o)&&(o=t2({},o)),c.style=z5(o))}const n=D1(e)?1:CH(e)?128:KH(e)?64:x1(e)?4:Y(e)?2:0;return J(e,c,a,s,t,n,r,!0)}function YH(e){return e?_t(e)||N5 in e?t2({},e):e:null}function S4(e,c,a=!1){const{props:s,ref:t,patchFlag:r,children:n}=e,i=c?XH(s||{},c):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&vr(i),ref:c&&c.ref?a&&t?Q(t)?t.concat(_8(c)):[t,_8(c)]:_8(c):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==v2?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&S4(e.ssContent),ssFallback:e.ssFallback&&S4(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function a2(e=" ",c=0){return t1(S5,null,e,c)}function I2(e){return e==null||typeof e=="boolean"?t1(y4):Q(e)?t1(v2,null,e.slice()):typeof e=="object"?o3(e):t1(S5,null,String(e))}function o3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:S4(e)}function A9(e,c){let a=0;const{shapeFlag:s}=e;if(c==null)c=null;else if(Q(c))a=16;else if(typeof c=="object")if(s&65){const t=c.default;t&&(t._c&&(t._d=!1),A9(e,t()),t._c&&(t._d=!0));return}else{a=32;const t=c._;!t&&!(N5 in c)?c._ctx=Y1:t===3&&Y1&&(Y1.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else Y(c)?(c={default:c,_ctx:Y1},a=32):(c=String(c),s&64?(a=16,c=[a2(c)]):a=8);e.children=c,e.shapeFlag|=a}function XH(...e){const c={};for(let a=0;a<e.length;a++){const s=e[a];for(const t in s)if(t==="class")c.class!==s.class&&(c.class=h9([c.class,s.class]));else if(t==="style")c.style=z5([c.style,s.style]);else if(H5(t)){const r=c[t],n=s[t];n&&r!==n&&!(Q(r)&&r.includes(n))&&(c[t]=r?[].concat(r,n):n)}else t!==""&&(c[t]=s[t])}return c}function E2(e,c,a,s=null){w2(e,c,7,[a,s])}const JH=fr();let cM=0;function eM(e,c,a){const s=e.type,t=(c?c.appContext:e.appContext)||JH,r={uid:cM++,vnode:e,type:s,parent:c,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new xt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nr(s,t),emitsOptions:Kt(s,t),emit:null,emitted:null,propsDefaults:g1,inheritAttrs:s.inheritAttrs,ctx:g1,data:g1,props:g1,attrs:g1,slots:g1,refs:g1,setupState:g1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=fH.bind(null,r),e.ce&&e.ce(r),r}let q1=null;const Cr=()=>q1||Y1,N4=e=>{q1=e,e.scope.on()},U3=()=>{q1&&q1.scope.off(),q1=null};function pr(e){return e.vnode.shapeFlag&4}let x6=!1;function aM(e,c=!1){x6=c;const{props:a,children:s}=e.vnode,t=pr(e);_H(e,a,t,c),OH(e,s);const r=t?sM(e,c):void 0;return x6=!1,r}function sM(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=x4(new Proxy(e.ctx,TH));const{setup:s}=a;if(s){const t=e.setupContext=s.length>1?rM(e):null;N4(e),F4();const r=v3(s,e,0,[e.props,t]);if(B4(),U3(),Vt(r)){if(r.then(U3,U3),c)return r.then(n=>{la(e,n,c)}).catch(n=>{b5(n,e,0)});e.asyncDep=r}else la(e,r,c)}else dr(e,c)}function la(e,c,a){Y(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:x1(c)&&(e.setupState=qt(c)),dr(e,a)}let fa;function dr(e,c,a){const s=e.type;if(!e.render){if(!c&&fa&&!s.render){const t=s.template||w9(e).template;if(t){const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,l=t2(t2({isCustomElement:r,delimiters:i},n),o);s.render=fa(t,l)}}e.render=s.render||N2}N4(e),F4(),EH(e),B4(),U3()}function tM(e){return new Proxy(e.attrs,{get(c,a){return p2(e,"get","$attrs"),c[a]}})}function rM(e){const c=s=>{e.exposed=s||{}};let a;return{get attrs(){return a||(a=tM(e))},slots:e.slots,emit:e.emit,expose:c}}function T9(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qt(x4(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in n6)return n6[a](e)},has(c,a){return a in c||a in n6}}))}function nM(e,c=!0){return Y(e)?e.displayName||e.name:e.name||c&&e.__name}function iM(e){return Y(e)&&"__vccOpts"in e}const L1=(e,c)=>tH(e,c,x6);function w5(e,c,a){const s=arguments.length;return s===2?x1(c)&&!Q(c)?K8(c)?t1(e,null,[c]):t1(e,c):t1(e,null,c):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&K8(a)&&(a=[a]),t1(e,c,a))}const oM=Symbol(""),lM=()=>B2(oM),fM="3.2.45",hM="http://www.w3.org/2000/svg",I3=typeof document<"u"?document:null,ha=I3&&I3.createElement("template"),uM={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,s)=>{const t=c?I3.createElementNS(hM,e):I3.createElement(e,a?{is:a}:void 0);return e==="select"&&s&&s.multiple!=null&&t.setAttribute("multiple",s.multiple),t},createText:e=>I3.createTextNode(e),createComment:e=>I3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>I3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,s,t,r){const n=a?a.previousSibling:c.lastChild;if(t&&(t===r||t.nextSibling))for(;c.insertBefore(t.cloneNode(!0),a),!(t===r||!(t=t.nextSibling)););else{ha.innerHTML=s?`<svg>${e}</svg>`:e;const i=ha.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}c.insertBefore(i,a)}return[n?n.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}};function mM(e,c,a){const s=e._vtc;s&&(c=(c?[c,...s]:[...s]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}function vM(e,c,a){const s=e.style,t=D1(a);if(a&&!t){for(const r in a)C7(s,r,a[r]);if(c&&!D1(c))for(const r in c)a[r]==null&&C7(s,r,"")}else{const r=s.display;t?c!==a&&(s.cssText=a):c&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const ua=/\s*!important$/;function C7(e,c,a){if(Q(a))a.forEach(s=>C7(e,c,s));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const s=CM(e,c);ua.test(a)?e.setProperty(_4(s),a.replace(ua,""),"important"):e[s]=a}}const ma=["Webkit","Moz","ms"],T0={};function CM(e,c){const a=T0[c];if(a)return a;let s=q2(c);if(s!=="filter"&&s in e)return T0[c]=s;s=g5(s);for(let t=0;t<ma.length;t++){const r=ma[t]+s;if(r in e)return T0[c]=r}return c}const va="http://www.w3.org/1999/xlink";function pM(e,c,a,s,t){if(s&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(va,c.slice(6,c.length)):e.setAttributeNS(va,c,a);else{const r=pz(c);a==null||r&&!zt(a)?e.removeAttribute(c):e.setAttribute(c,r?"":a)}}function dM(e,c,a,s,t,r,n){if(c==="innerHTML"||c==="textContent"){s&&n(s,t,r),e[c]=a==null?"":a;return}if(c==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const o=a==null?"":a;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),a==null&&e.removeAttribute(c);return}let i=!1;if(a===""||a==null){const o=typeof e[c];o==="boolean"?a=zt(a):a==null&&o==="string"?(a="",i=!0):o==="number"&&(a=0,i=!0)}try{e[c]=a}catch{}i&&e.removeAttribute(c)}function zM(e,c,a,s){e.addEventListener(c,a,s)}function HM(e,c,a,s){e.removeEventListener(c,a,s)}function MM(e,c,a,s,t=null){const r=e._vei||(e._vei={}),n=r[c];if(s&&n)n.value=s;else{const[i,o]=VM(c);if(s){const l=r[c]=bM(s,t);zM(e,i,l,o)}else n&&(HM(e,i,n,o),r[c]=void 0)}}const Ca=/(?:Once|Passive|Capture)$/;function VM(e){let c;if(Ca.test(e)){c={};let s;for(;s=e.match(Ca);)e=e.slice(0,e.length-s[0].length),c[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_4(e.slice(2)),c]}let E0=0;const gM=Promise.resolve(),LM=()=>E0||(gM.then(()=>E0=0),E0=Date.now());function bM(e,c){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;w2(xM(s,a.value),c,5,[s])};return a.value=e,a.attached=LM(),a}function xM(e,c){if(Q(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(s=>t=>!t._stopped&&s&&s(t))}else return c}const pa=/^on[a-z]/,yM=(e,c,a,s,t=!1,r,n,i,o)=>{c==="class"?mM(e,s,t):c==="style"?vM(e,a,s):H5(c)?u9(c)||MM(e,c,a,s,n):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):SM(e,c,s,t))?dM(e,c,s,r,n,i,o):(c==="true-value"?e._trueValue=s:c==="false-value"&&(e._falseValue=s),pM(e,c,s,t))};function SM(e,c,a,s){return s?!!(c==="innerHTML"||c==="textContent"||c in e&&pa.test(c)&&Y(a)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA"||pa.test(c)&&D1(a)?!1:c in e}const NM=t2({patchProp:yM},uM);let da;function wM(){return da||(da=GH(NM))}const kM=(...e)=>{const c=wM().createApp(...e),{mount:a}=c;return c.mount=s=>{const t=AM(s);if(!t)return;const r=c._component;!Y(r)&&!r.render&&!r.template&&(r.template=t.innerHTML),t.innerHTML="";const n=a(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),n},c};function AM(e){return D1(e)?document.querySelector(e):e}var TM=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let zr;const k5=e=>zr=e,Hr=Symbol();function p7(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var o6;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(o6||(o6={}));function EM(){const e=yt(!0),c=e.run(()=>L9({}));let a=[],s=[];const t=x4({install(r){k5(t),t._a=r,r.provide(Hr,t),r.config.globalProperties.$pinia=t,s.forEach(n=>a.push(n)),s=[]},use(r){return!this._a&&!TM?s.push(r):a.push(r),this},_p:a,_a:null,_e:e,_s:new Map,state:c});return t}const Mr=()=>{};function za(e,c,a,s=Mr){e.push(c);const t=()=>{const r=e.indexOf(c);r>-1&&(e.splice(r,1),s())};return!a&&Cr()&&S9(t),t}function n4(e,...c){e.slice().forEach(a=>{a(...c)})}function d7(e,c){e instanceof Map&&c instanceof Map&&c.forEach((a,s)=>e.set(s,a)),e instanceof Set&&c instanceof Set&&c.forEach(e.add,e);for(const a in c){if(!c.hasOwnProperty(a))continue;const s=c[a],t=e[a];p7(t)&&p7(s)&&e.hasOwnProperty(a)&&!k1(s)&&!m3(s)?e[a]=d7(t,s):e[a]=s}return e}const PM=Symbol();function IM(e){return!p7(e)||!e.hasOwnProperty(PM)}const{assign:l3}=Object;function DM(e){return!!(k1(e)&&e.effect)}function RM(e,c,a,s){const{state:t,actions:r,getters:n}=c,i=a.state.value[e];let o;function l(){i||(a.state.value[e]=t?t():{});const f=cH(a.state.value[e]);return l3(f,r,Object.keys(n||{}).reduce((h,u)=>(h[u]=x4(L1(()=>{k5(a);const C=a._s.get(e);return n[u].call(C,C)})),h),{}))}return o=Vr(e,l,c,a,s,!0),o.$reset=function(){const h=t?t():{};this.$patch(u=>{l3(u,h)})},o}function Vr(e,c,a={},s,t,r){let n;const i=l3({actions:{}},a),o={deep:!0};let l,f,h=x4([]),u=x4([]),C;const z=s.state.value[e];!r&&!z&&(s.state.value[e]={}),L9({});let L;function w(j){let e1;l=f=!1,typeof j=="function"?(j(s.state.value[e]),e1={type:o6.patchFunction,storeId:e,events:C}):(d7(s.state.value[e],j),e1={type:o6.patchObject,payload:j,storeId:e,events:C});const V1=L=Symbol();x9().then(()=>{L===V1&&(l=!0)}),f=!0,n4(h,e1,s.state.value[e])}const d=Mr;function M(){n.stop(),h=[],u=[],s._s.delete(e)}function y(j,e1){return function(){k5(s);const V1=Array.from(arguments),F1=[],r2=[];function H2(B1){F1.push(B1)}function t3(B1){r2.push(B1)}n4(u,{args:V1,name:j,store:$,after:H2,onError:t3});let u2;try{u2=e1.apply(this&&this.$id===e?this:$,V1)}catch(B1){throw n4(r2,B1),B1}return u2 instanceof Promise?u2.then(B1=>(n4(F1,B1),B1)).catch(B1=>(n4(r2,B1),Promise.reject(B1))):(n4(F1,u2),u2)}}const F={_p:s,$id:e,$onAction:za.bind(null,u),$patch:w,$reset:d,$subscribe(j,e1={}){const V1=za(h,j,e1.detached,()=>F1()),F1=n.run(()=>H4(()=>s.state.value[e],r2=>{(e1.flush==="sync"?f:l)&&j({storeId:e,type:o6.direct,events:C},r2)},l3({},o,e1)));return V1},$dispose:M},$=O4(F);s._s.set(e,$);const l1=s._e.run(()=>(n=yt(),n.run(()=>c())));for(const j in l1){const e1=l1[j];if(k1(e1)&&!DM(e1)||m3(e1))r||(z&&IM(e1)&&(k1(e1)?e1.value=z[j]:d7(e1,z[j])),s.state.value[e][j]=e1);else if(typeof e1=="function"){const V1=y(j,e1);l1[j]=V1,i.actions[j]=e1}}return l3($,l1),l3(h1($),l1),Object.defineProperty($,"$state",{get:()=>s.state.value[e],set:j=>{w(e1=>{l3(e1,j)})}}),s._p.forEach(j=>{l3($,n.run(()=>j({store:$,app:s._a,pinia:s,options:i})))}),z&&r&&a.hydrate&&a.hydrate($.$state,z),l=!0,f=!0,$}function _M(e,c,a){let s,t;const r=typeof c=="function";typeof e=="string"?(s=e,t=r?a:c):(t=e,s=e.id);function n(i,o){const l=Cr();return i=i||l&&B2(Hr),i&&k5(i),i=zr,i._s.has(s)||(r?Vr(s,c,t,i):RM(s,t,i)),i._s.get(s)}return n.$id=s,n}const q4=(e,c)=>{const a=e.__vccOpts||e;for(const[s,t]of c)a[s]=t;return a},FM={},BM={id:"background",class:"min-h-screen"},OM={class:""},qM=J("div",null,[J("h1",{class:"h1"},[J("strong",null,[J("ins",null,"Team Teletubbie")])])],-1),UM=J("div",null,[J("p",{class:"test2"},[J("strong",null,"PreDevCamp")])],-1),$M=J("div",{class:"font"},[J("strong",null,"This is website about Teletubbie Mambers"),J("p",null,"\u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E40\u0E17\u0E40\u0E25\u0E17\u0E31\u0E1A\u0E1A\u0E35\u0E49 \u0E0A\u0E2D\u0E1A\u0E17\u0E33\u0E15\u0E31\u0E27\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E40\u0E14\u0E47\u0E01 \u0E40\u0E19\u0E49\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E31\u0E27\u0E40\u0E23\u0E32\u0E30 \u0E17\u0E33\u0E15\u0E31\u0E27\u0E2A\u0E1A\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E19\u0E38\u0E01\u0E2A\u0E19\u0E32\u0E19 \u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E25\u0E38\u0E48\u0E21\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E35")],-1),GM={class:"icons"};function jM(e,c,a,s,t,r){const n=Z3("router-link"),i=Z3("font-awesome-icon");return k2(),W2("div",BM,[J("div",null,[J("div",OM,[t1(n,{to:"/",class:"button"},{default:C3(()=>[a2("Home")]),_:1}),t1(n,{to:"/profile",class:"button"},{default:C3(()=>[a2("Profile")]),_:1}),t1(n,{to:"/myhome",class:"button"},{default:C3(()=>[a2("Myfreinds")]),_:1})])]),qM,UM,$M,J("div",GM,[t1(i,{icon:"fa-brands fa-vuejs ",class:"text-lime-500"}),t1(i,{icon:"fa-brands fa-html5",class:"text-orange-500"}),t1(i,{icon:"fa-brands fa-js",class:"text-yellow-300"}),t1(i,{icon:"fa-solid fa-font-awesome ",class:"text-sky-500"}),t1(i,{icon:"fa-solid fa-code-branch"}),t1(i,{icon:"fa-brands fa-github",class:"text-black"})])])}const WM=q4(FM,[["render",jM]]);const KM={},ZM={class:"head2"},QM=J("div",{class:"fontDefault"}," Profile Teletubbie ",-1);function YM(e,c,a,s,t,r){const n=Z3("router-link");return k2(),W2("div",ZM,[t1(n,{to:"/",class:"button"},{default:C3(()=>[a2("Home")]),_:1}),t1(n,{to:"/profile",class:"button"},{default:C3(()=>[a2("Profile")]),_:1}),t1(n,{to:"/myhome",class:"button"},{default:C3(()=>[a2("Myfreinds")]),_:1}),QM,AH(e.$slots,"default")])}const Ha=q4(KM,[["render",YM]]),XM={components:{Main:WM,Default:Ha},computed:{layout(){return console.log(this.$route.meta),this.$route.meta.layout||Ha}}};function JM(e,c,a,s,t,r){const n=Z3("RouterView");return k2(),mr(kH(r.layout),null,{default:C3(()=>[t1(n)]),_:1})}const cV=q4(XM,[["render",JM]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const l4=typeof window<"u";function eV(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const m1=Object.assign;function P0(e,c){const a={};for(const s in c){const t=c[s];a[s]=A2(t)?t.map(e):e(t)}return a}const l6=()=>{},A2=Array.isArray,aV=/\/$/,sV=e=>e.replace(aV,"");function I0(e,c,a="/"){let s,t={},r="",n="";const i=c.indexOf("#");let o=c.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=c.slice(0,o),r=c.slice(o+1,i>-1?i:c.length),t=e(r)),i>-1&&(s=s||c.slice(0,i),n=c.slice(i,c.length)),s=iV(s!=null?s:c,a),{fullPath:s+(r&&"?")+r+n,path:s,query:t,hash:n}}function tV(e,c){const a=c.query?e(c.query):"";return c.path+(a&&"?")+a+(c.hash||"")}function Ma(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function rV(e,c,a){const s=c.matched.length-1,t=a.matched.length-1;return s>-1&&s===t&&w4(c.matched[s],a.matched[t])&&gr(c.params,a.params)&&e(c.query)===e(a.query)&&c.hash===a.hash}function w4(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function gr(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const a in e)if(!nV(e[a],c[a]))return!1;return!0}function nV(e,c){return A2(e)?Va(e,c):A2(c)?Va(c,e):e===c}function Va(e,c){return A2(c)?e.length===c.length&&e.every((a,s)=>a===c[s]):e.length===1&&e[0]===c}function iV(e,c){if(e.startsWith("/"))return e;if(!e)return c;const a=c.split("/"),s=e.split("/");let t=a.length-1,r,n;for(r=0;r<s.length;r++)if(n=s[r],n!==".")if(n==="..")t>1&&t--;else break;return a.slice(0,t).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var y6;(function(e){e.pop="pop",e.push="push"})(y6||(y6={}));var f6;(function(e){e.back="back",e.forward="forward",e.unknown=""})(f6||(f6={}));function oV(e){if(!e)if(l4){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sV(e)}const lV=/^[^#]+#/;function fV(e,c){return e.replace(lV,"#")+c}function hV(e,c){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:c.behavior,left:s.left-a.left-(c.left||0),top:s.top-a.top-(c.top||0)}}const A5=()=>({left:window.pageXOffset,top:window.pageYOffset});function uV(e){let c;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;c=hV(t,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function ga(e,c){return(history.state?history.state.position-c:-1)+e}const z7=new Map;function mV(e,c){z7.set(e,c)}function vV(e){const c=z7.get(e);return z7.delete(e),c}let CV=()=>location.protocol+"//"+location.host;function Lr(e,c){const{pathname:a,search:s,hash:t}=c,r=e.indexOf("#");if(r>-1){let i=t.includes(e.slice(r))?e.slice(r).length:1,o=t.slice(i);return o[0]!=="/"&&(o="/"+o),Ma(o,"")}return Ma(a,e)+s+t}function pV(e,c,a,s){let t=[],r=[],n=null;const i=({state:u})=>{const C=Lr(e,location),z=a.value,L=c.value;let w=0;if(u){if(a.value=C,c.value=u,n&&n===z){n=null;return}w=L?u.position-L.position:0}else s(C);t.forEach(d=>{d(a.value,z,{delta:w,type:y6.pop,direction:w?w>0?f6.forward:f6.back:f6.unknown})})};function o(){n=a.value}function l(u){t.push(u);const C=()=>{const z=t.indexOf(u);z>-1&&t.splice(z,1)};return r.push(C),C}function f(){const{history:u}=window;!u.state||u.replaceState(m1({},u.state,{scroll:A5()}),"")}function h(){for(const u of r)u();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:l,destroy:h}}function La(e,c,a,s=!1,t=!1){return{back:e,current:c,forward:a,replaced:s,position:window.history.length,scroll:t?A5():null}}function dV(e){const{history:c,location:a}=window,s={value:Lr(e,a)},t={value:c.state};t.value||r(s.value,{back:null,current:s.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const h=e.indexOf("#"),u=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+o:CV()+e+o;try{c[f?"replaceState":"pushState"](l,"",u),t.value=l}catch(C){console.error(C),a[f?"replace":"assign"](u)}}function n(o,l){const f=m1({},c.state,La(t.value.back,o,t.value.forward,!0),l,{position:t.value.position});r(o,f,!0),s.value=o}function i(o,l){const f=m1({},t.value,c.state,{forward:o,scroll:A5()});r(f.current,f,!0);const h=m1({},La(s.value,o,null),{position:f.position+1},l);r(o,h,!1),s.value=o}return{location:s,state:t,push:i,replace:n}}function zV(e){e=oV(e);const c=dV(e),a=pV(e,c.state,c.location,c.replace);function s(r,n=!0){n||a.pauseListeners(),history.go(r)}const t=m1({location:"",base:e,go:s,createHref:fV.bind(null,e)},c,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>c.state.value}),t}function HV(e){return typeof e=="string"||e&&typeof e=="object"}function br(e){return typeof e=="string"||typeof e=="symbol"}const n3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xr=Symbol("");var ba;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ba||(ba={}));function k4(e,c){return m1(new Error,{type:e,[xr]:!0},c)}function $2(e,c){return e instanceof Error&&xr in e&&(c==null||!!(e.type&c))}const xa="[^/]+?",MV={sensitive:!1,strict:!1,start:!0,end:!0},VV=/[.+*?^${}()[\]/\\]/g;function gV(e,c){const a=m1({},MV,c),s=[];let t=a.start?"^":"";const r=[];for(const l of e){const f=l.length?[]:[90];a.strict&&!l.length&&(t+="/");for(let h=0;h<l.length;h++){const u=l[h];let C=40+(a.sensitive?.25:0);if(u.type===0)h||(t+="/"),t+=u.value.replace(VV,"\\$&"),C+=40;else if(u.type===1){const{value:z,repeatable:L,optional:w,regexp:d}=u;r.push({name:z,repeatable:L,optional:w});const M=d||xa;if(M!==xa){C+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${z}" (${M}): `+F.message)}}let y=L?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(y=w&&l.length<2?`(?:/${y})`:"/"+y),w&&(y+="?"),t+=y,C+=20,w&&(C+=-8),L&&(C+=-20),M===".*"&&(C+=-50)}f.push(C)}s.push(f)}if(a.strict&&a.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const n=new RegExp(t,a.sensitive?"":"i");function i(l){const f=l.match(n),h={};if(!f)return null;for(let u=1;u<f.length;u++){const C=f[u]||"",z=r[u-1];h[z.name]=C&&z.repeatable?C.split("/"):C}return h}function o(l){let f="",h=!1;for(const u of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const C of u)if(C.type===0)f+=C.value;else if(C.type===1){const{value:z,repeatable:L,optional:w}=C,d=z in l?l[z]:"";if(A2(d)&&!L)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const M=A2(d)?d.join("/"):d;if(!M)if(w)u.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${z}"`);f+=M}}return f||"/"}return{re:n,score:s,keys:r,parse:i,stringify:o}}function LV(e,c){let a=0;for(;a<e.length&&a<c.length;){const s=c[a]-e[a];if(s)return s;a++}return e.length<c.length?e.length===1&&e[0]===40+40?-1:1:e.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function bV(e,c){let a=0;const s=e.score,t=c.score;for(;a<s.length&&a<t.length;){const r=LV(s[a],t[a]);if(r)return r;a++}if(Math.abs(t.length-s.length)===1){if(ya(s))return 1;if(ya(t))return-1}return t.length-s.length}function ya(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const xV={type:0,value:""},yV=/[a-zA-Z0-9_]/;function SV(e){if(!e)return[[]];if(e==="/")return[[xV]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(C){throw new Error(`ERR (${a})/"${l}": ${C}`)}let a=0,s=a;const t=[];let r;function n(){r&&t.push(r),r=[]}let i=0,o,l="",f="";function h(){!l||(a===0?r.push({type:0,value:l}):a===1||a===2||a===3?(r.length>1&&(o==="*"||o==="+")&&c(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):c("Invalid state to consume buffer"),l="")}function u(){l+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:o==="/"?(l&&h(),n()):o===":"?(h(),a=1):u();break;case 4:u(),a=s;break;case 1:o==="("?a=2:yV.test(o)?u():(h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:c("Unknown state");break}}return a===2&&c(`Unfinished custom RegExp for param "${l}"`),h(),n(),t}function NV(e,c,a){const s=gV(SV(e.path),a),t=m1(s,{record:e,parent:c,children:[],alias:[]});return c&&!t.record.aliasOf==!c.record.aliasOf&&c.children.push(t),t}function wV(e,c){const a=[],s=new Map;c=wa({strict:!1,end:!0,sensitive:!1},c);function t(f){return s.get(f)}function r(f,h,u){const C=!u,z=kV(f);z.aliasOf=u&&u.record;const L=wa(c,f),w=[z];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of y)w.push(m1({},z,{components:u?u.record.components:z.components,path:F,aliasOf:u?u.record:z}))}let d,M;for(const y of w){const{path:F}=y;if(h&&F[0]!=="/"){const $=h.record.path,l1=$[$.length-1]==="/"?"":"/";y.path=h.record.path+(F&&l1+F)}if(d=NV(y,h,L),u?u.alias.push(d):(M=M||d,M!==d&&M.alias.push(d),C&&f.name&&!Na(d)&&n(f.name)),z.children){const $=z.children;for(let l1=0;l1<$.length;l1++)r($[l1],d,u&&u.children[l1])}u=u||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&o(d)}return M?()=>{n(M)}:l6}function n(f){if(br(f)){const h=s.get(f);h&&(s.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(n),h.alias.forEach(n))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(n),f.alias.forEach(n))}}function i(){return a}function o(f){let h=0;for(;h<a.length&&bV(f,a[h])>=0&&(f.record.path!==a[h].record.path||!yr(f,a[h]));)h++;a.splice(h,0,f),f.record.name&&!Na(f)&&s.set(f.record.name,f)}function l(f,h){let u,C={},z,L;if("name"in f&&f.name){if(u=s.get(f.name),!u)throw k4(1,{location:f});L=u.record.name,C=m1(Sa(h.params,u.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&Sa(f.params,u.keys.map(M=>M.name))),z=u.stringify(C)}else if("path"in f)z=f.path,u=a.find(M=>M.re.test(z)),u&&(C=u.parse(z),L=u.record.name);else{if(u=h.name?s.get(h.name):a.find(M=>M.re.test(h.path)),!u)throw k4(1,{location:f,currentLocation:h});L=u.record.name,C=m1({},h.params,f.params),z=u.stringify(C)}const w=[];let d=u;for(;d;)w.unshift(d.record),d=d.parent;return{name:L,path:z,params:C,matched:w,meta:TV(w)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:n,getRoutes:i,getRecordMatcher:t}}function Sa(e,c){const a={};for(const s of c)s in e&&(a[s]=e[s]);return a}function kV(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:AV(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function AV(e){const c={},a=e.props||!1;if("component"in e)c.default=a;else for(const s in e.components)c[s]=typeof a=="boolean"?a:a[s];return c}function Na(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function TV(e){return e.reduce((c,a)=>m1(c,a.meta),{})}function wa(e,c){const a={};for(const s in e)a[s]=s in c?c[s]:e[s];return a}function yr(e,c){return c.children.some(a=>a===e||yr(e,a))}const Sr=/#/g,EV=/&/g,PV=/\//g,IV=/=/g,DV=/\?/g,Nr=/\+/g,RV=/%5B/g,_V=/%5D/g,wr=/%5E/g,FV=/%60/g,kr=/%7B/g,BV=/%7C/g,Ar=/%7D/g,OV=/%20/g;function E9(e){return encodeURI(""+e).replace(BV,"|").replace(RV,"[").replace(_V,"]")}function qV(e){return E9(e).replace(kr,"{").replace(Ar,"}").replace(wr,"^")}function H7(e){return E9(e).replace(Nr,"%2B").replace(OV,"+").replace(Sr,"%23").replace(EV,"%26").replace(FV,"`").replace(kr,"{").replace(Ar,"}").replace(wr,"^")}function UV(e){return H7(e).replace(IV,"%3D")}function $V(e){return E9(e).replace(Sr,"%23").replace(DV,"%3F")}function GV(e){return e==null?"":$V(e).replace(PV,"%2F")}function Z8(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function jV(e){const c={};if(e===""||e==="?")return c;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<s.length;++t){const r=s[t].replace(Nr," "),n=r.indexOf("="),i=Z8(n<0?r:r.slice(0,n)),o=n<0?null:Z8(r.slice(n+1));if(i in c){let l=c[i];A2(l)||(l=c[i]=[l]),l.push(o)}else c[i]=o}return c}function ka(e){let c="";for(let a in e){const s=e[a];if(a=UV(a),s==null){s!==void 0&&(c+=(c.length?"&":"")+a);continue}(A2(s)?s.map(r=>r&&H7(r)):[s&&H7(s)]).forEach(r=>{r!==void 0&&(c+=(c.length?"&":"")+a,r!=null&&(c+="="+r))})}return c}function WV(e){const c={};for(const a in e){const s=e[a];s!==void 0&&(c[a]=A2(s)?s.map(t=>t==null?null:""+t):s==null?s:""+s)}return c}const KV=Symbol(""),Aa=Symbol(""),P9=Symbol(""),Tr=Symbol(""),M7=Symbol("");function X4(){let e=[];function c(s){return e.push(s),()=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)}}function a(){e=[]}return{add:c,list:()=>e,reset:a}}function f3(e,c,a,s,t){const r=s&&(s.enterCallbacks[t]=s.enterCallbacks[t]||[]);return()=>new Promise((n,i)=>{const o=h=>{h===!1?i(k4(4,{from:a,to:c})):h instanceof Error?i(h):HV(h)?i(k4(2,{from:c,to:h})):(r&&s.enterCallbacks[t]===r&&typeof h=="function"&&r.push(h),n())},l=e.call(s&&s.instances[t],c,a,o);let f=Promise.resolve(l);e.length<3&&(f=f.then(o)),f.catch(h=>i(h))})}function D0(e,c,a,s){const t=[];for(const r of e)for(const n in r.components){let i=r.components[n];if(!(c!=="beforeRouteEnter"&&!r.instances[n]))if(ZV(i)){const l=(i.__vccOpts||i)[c];l&&t.push(f3(l,a,s,r,n))}else{let o=i();t.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${r.path}"`));const f=eV(l)?l.default:l;r.components[n]=f;const u=(f.__vccOpts||f)[c];return u&&f3(u,a,s,r,n)()}))}}return t}function ZV(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ta(e){const c=B2(P9),a=B2(Tr),s=L1(()=>c.resolve(d4(e.to))),t=L1(()=>{const{matched:o}=s.value,{length:l}=o,f=o[l-1],h=a.matched;if(!f||!h.length)return-1;const u=h.findIndex(w4.bind(null,f));if(u>-1)return u;const C=Ea(o[l-2]);return l>1&&Ea(f)===C&&h[h.length-1].path!==C?h.findIndex(w4.bind(null,o[l-2])):u}),r=L1(()=>t.value>-1&&JV(a.params,s.value.params)),n=L1(()=>t.value>-1&&t.value===a.matched.length-1&&gr(a.params,s.value.params));function i(o={}){return XV(o)?c[d4(e.replace)?"replace":"push"](d4(e.to)).catch(l6):Promise.resolve()}return{route:s,href:L1(()=>s.value.href),isActive:r,isExactActive:n,navigate:i}}const QV=$6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ta,setup(e,{slots:c}){const a=O4(Ta(e)),{options:s}=B2(P9),t=L1(()=>({[Pa(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Pa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=c.default&&c.default(a);return e.custom?r:w5("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},r)}}}),YV=QV;function XV(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function JV(e,c){for(const a in c){const s=c[a],t=e[a];if(typeof s=="string"){if(s!==t)return!1}else if(!A2(t)||t.length!==s.length||s.some((r,n)=>r!==t[n]))return!1}return!0}function Ea(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pa=(e,c,a)=>e!=null?e:c!=null?c:a,cg=$6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:a}){const s=B2(M7),t=L1(()=>e.route||s.value),r=B2(Aa,0),n=L1(()=>{let l=d4(r);const{matched:f}=t.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),i=L1(()=>t.value.matched[n.value]);R8(Aa,L1(()=>n.value+1)),R8(KV,i),R8(M7,t);const o=L9();return H4(()=>[o.value,i.value,e.name],([l,f,h],[u,C,z])=>{f&&(f.instances[h]=l,C&&C!==f&&l&&l===u&&(f.leaveGuards.size||(f.leaveGuards=C.leaveGuards),f.updateGuards.size||(f.updateGuards=C.updateGuards))),l&&f&&(!C||!w4(f,C)||!u)&&(f.enterCallbacks[h]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=t.value,f=e.name,h=i.value,u=h&&h.components[f];if(!u)return Ia(a.default,{Component:u,route:l});const C=h.props[f],z=C?C===!0?l.params:typeof C=="function"?C(l):C:null,w=w5(u,m1({},z,c,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return Ia(a.default,{Component:w,route:l})||w}}});function Ia(e,c){if(!e)return null;const a=e(c);return a.length===1?a[0]:a}const eg=cg;function ag(e){const c=wV(e.routes,e),a=e.parseQuery||jV,s=e.stringifyQuery||ka,t=e.history,r=X4(),n=X4(),i=X4(),o=Yz(n3);let l=n3;l4&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=P0.bind(null,V=>""+V),h=P0.bind(null,GV),u=P0.bind(null,Z8);function C(V,P){let A,O;return br(V)?(A=c.getRecordMatcher(V),O=P):O=V,c.addRoute(O,A)}function z(V){const P=c.getRecordMatcher(V);P&&c.removeRoute(P)}function L(){return c.getRoutes().map(V=>V.record)}function w(V){return!!c.getRecordMatcher(V)}function d(V,P){if(P=m1({},P||o.value),typeof V=="string"){const m=I0(a,V,P.path),v=c.resolve({path:m.path},P),p=t.createHref(m.fullPath);return m1(m,v,{params:u(v.params),hash:Z8(m.hash),redirectedFrom:void 0,href:p})}let A;if("path"in V)A=m1({},V,{path:I0(a,V.path,P.path).path});else{const m=m1({},V.params);for(const v in m)m[v]==null&&delete m[v];A=m1({},V,{params:h(V.params)}),P.params=h(P.params)}const O=c.resolve(A,P),n1=V.hash||"";O.params=f(u(O.params));const y1=tV(s,m1({},V,{hash:qV(n1),path:O.path})),X=t.createHref(y1);return m1({fullPath:y1,hash:n1,query:s===ka?WV(V.query):V.query||{}},O,{redirectedFrom:void 0,href:X})}function M(V){return typeof V=="string"?I0(a,V,o.value.path):m1({},V)}function y(V,P){if(l!==V)return k4(8,{from:P,to:V})}function F(V){return j(V)}function $(V){return F(m1(M(V),{replace:!0}))}function l1(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:A}=P;let O=typeof A=="function"?A(V):A;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),m1({query:V.query,hash:V.hash,params:"path"in O?{}:V.params},O)}}function j(V,P){const A=l=d(V),O=o.value,n1=V.state,y1=V.force,X=V.replace===!0,m=l1(A);if(m)return j(m1(M(m),{state:typeof m=="object"?m1({},n1,m.state):n1,force:y1,replace:X}),P||A);const v=A;v.redirectedFrom=P;let p;return!y1&&rV(s,O,A)&&(p=k4(16,{to:v,from:O}),w3(O,O,!0,!1)),(p?Promise.resolve(p):V1(v,O)).catch(H=>$2(H)?$2(H,2)?H:V2(H):d1(H,v,O)).then(H=>{if(H){if($2(H,2))return j(m1({replace:X},M(H.to),{state:typeof H.to=="object"?m1({},n1,H.to.state):n1,force:y1}),P||v)}else H=r2(v,O,!0,X,n1);return F1(v,O,H),H})}function e1(V,P){const A=y(V,P);return A?Promise.reject(A):Promise.resolve()}function V1(V,P){let A;const[O,n1,y1]=sg(V,P);A=D0(O.reverse(),"beforeRouteLeave",V,P);for(const m of O)m.leaveGuards.forEach(v=>{A.push(f3(v,V,P))});const X=e1.bind(null,V,P);return A.push(X),i4(A).then(()=>{A=[];for(const m of r.list())A.push(f3(m,V,P));return A.push(X),i4(A)}).then(()=>{A=D0(n1,"beforeRouteUpdate",V,P);for(const m of n1)m.updateGuards.forEach(v=>{A.push(f3(v,V,P))});return A.push(X),i4(A)}).then(()=>{A=[];for(const m of V.matched)if(m.beforeEnter&&!P.matched.includes(m))if(A2(m.beforeEnter))for(const v of m.beforeEnter)A.push(f3(v,V,P));else A.push(f3(m.beforeEnter,V,P));return A.push(X),i4(A)}).then(()=>(V.matched.forEach(m=>m.enterCallbacks={}),A=D0(y1,"beforeRouteEnter",V,P),A.push(X),i4(A))).then(()=>{A=[];for(const m of n.list())A.push(f3(m,V,P));return A.push(X),i4(A)}).catch(m=>$2(m,8)?m:Promise.reject(m))}function F1(V,P,A){for(const O of i.list())O(V,P,A)}function r2(V,P,A,O,n1){const y1=y(V,P);if(y1)return y1;const X=P===n3,m=l4?history.state:{};A&&(O||X?t.replace(V.fullPath,m1({scroll:X&&m&&m.scroll},n1)):t.push(V.fullPath,n1)),o.value=V,w3(V,P,A,X),V2()}let H2;function t3(){H2||(H2=t.listen((V,P,A)=>{if(!m8.listening)return;const O=d(V),n1=l1(O);if(n1){j(m1(n1,{replace:!0}),O).catch(l6);return}l=O;const y1=o.value;l4&&mV(ga(y1.fullPath,A.delta),A5()),V1(O,y1).catch(X=>$2(X,12)?X:$2(X,2)?(j(X.to,O).then(m=>{$2(m,20)&&!A.delta&&A.type===y6.pop&&t.go(-1,!1)}).catch(l6),Promise.reject()):(A.delta&&t.go(-A.delta,!1),d1(X,O,y1))).then(X=>{X=X||r2(O,y1,!1),X&&(A.delta&&!$2(X,8)?t.go(-A.delta,!1):A.type===y6.pop&&$2(X,20)&&t.go(-1,!1)),F1(O,y1,X)}).catch(l6)}))}let u2=X4(),B1=X4(),A1;function d1(V,P,A){V2(V);const O=B1.list();return O.length?O.forEach(n1=>n1(V,P,A)):console.error(V),Promise.reject(V)}function C1(){return A1&&o.value!==n3?Promise.resolve():new Promise((V,P)=>{u2.add([V,P])})}function V2(V){return A1||(A1=!V,t3(),u2.list().forEach(([P,A])=>V?A(V):P()),u2.reset()),V}function w3(V,P,A,O){const{scrollBehavior:n1}=e;if(!l4||!n1)return Promise.resolve();const y1=!A&&vV(ga(V.fullPath,0))||(O||!A)&&history.state&&history.state.scroll||null;return x9().then(()=>n1(V,P,y1)).then(X=>X&&uV(X)).catch(X=>d1(X,V,P))}const g2=V=>t.go(V);let n2;const t4=new Set,m8={currentRoute:o,listening:!0,addRoute:C,removeRoute:z,hasRoute:w,getRoutes:L,resolve:d,options:e,push:F,replace:$,go:g2,back:()=>g2(-1),forward:()=>g2(1),beforeEach:r.add,beforeResolve:n.add,afterEach:i.add,onError:B1.add,isReady:C1,install(V){const P=this;V.component("RouterLink",YV),V.component("RouterView",eg),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>d4(o)}),l4&&!n2&&o.value===n3&&(n2=!0,F(t.location).catch(n1=>{}));const A={};for(const n1 in n3)A[n1]=L1(()=>o.value[n1]);V.provide(P9,P),V.provide(Tr,O4(A)),V.provide(M7,o);const O=V.unmount;t4.add(V),V.unmount=function(){t4.delete(V),t4.size<1&&(l=n3,H2&&H2(),H2=null,o.value=n3,n2=!1,A1=!1),O()}}};return m8}function i4(e){return e.reduce((c,a)=>c.then(()=>a()),Promise.resolve())}function sg(e,c){const a=[],s=[],t=[],r=Math.max(c.matched.length,e.matched.length);for(let n=0;n<r;n++){const i=c.matched[n];i&&(e.matched.find(l=>w4(l,i))?s.push(i):a.push(i));const o=e.matched[n];o&&(c.matched.find(l=>w4(l,o))||t.push(o))}return[a,s,t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=function(e){const c=[];let a=0;for(let s=0;s<e.length;s++){let t=e.charCodeAt(s);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++s)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},tg=function(e){const c=[];let a=0,s=0;for(;a<e.length;){const t=e[a++];if(t<128)c[s++]=String.fromCharCode(t);else if(t>191&&t<224){const r=e[a++];c[s++]=String.fromCharCode((t&31)<<6|r&63)}else if(t>239&&t<365){const r=e[a++],n=e[a++],i=e[a++],o=((t&7)<<18|(r&63)<<12|(n&63)<<6|i&63)-65536;c[s++]=String.fromCharCode(55296+(o>>10)),c[s++]=String.fromCharCode(56320+(o&1023))}else{const r=e[a++],n=e[a++];c[s++]=String.fromCharCode((t&15)<<12|(r&63)<<6|n&63)}}return c.join("")},Pr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],n=t+1<e.length,i=n?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,f=r>>2,h=(r&3)<<4|i>>4;let u=(i&15)<<2|l>>6,C=l&63;o||(C=64,n||(u=64)),s.push(a[f],a[h],a[u],a[C])}return s.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(Er(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):tg(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=a[e.charAt(t++)],i=t<e.length?a[e.charAt(t)]:0;++t;const l=t<e.length?a[e.charAt(t)]:64;++t;const h=t<e.length?a[e.charAt(t)]:64;if(++t,r==null||i==null||l==null||h==null)throw Error();const u=r<<2|i>>4;if(s.push(u),l!==64){const C=i<<4&240|l>>2;if(s.push(C),h!==64){const z=l<<6&192|h;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},rg=function(e){const c=Er(e);return Pr.encodeByteArray(c,!0)},Q8=function(e){return rg(e).replace(/\./g,"")},ng=function(e){try{return Pr.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};function ig(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ir(){return typeof indexedDB=="object"}function Dr(){return new Promise((e,c)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(s);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(s),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var r;c(((r=t.error)===null||r===void 0?void 0:r.message)||"")}}catch(a){c(a)}})}function og(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function lg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=()=>lg().__FIREBASE_DEFAULTS__,hg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ug=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&ng(e[1]);return c&&JSON.parse(c)},Rr=()=>{try{return fg()||hg()||ug()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mg=e=>{var c,a;return(a=(c=Rr())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},vg=e=>{const c=mg(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const s=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),s]:[c.substring(0,a),s]},Cg=()=>{var e;return(e=Rr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},s=c||"demo-project",t=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const n=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:t,exp:t+3600,auth_time:t,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),i="";return[Q8(JSON.stringify(a)),Q8(JSON.stringify(n)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="FirebaseError";class y3 extends Error{constructor(c,a,s){super(a),this.code=c,this.customData=s,this.name=zg,Object.setPrototypeOf(this,y3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T5.prototype.create)}}class T5{constructor(c,a,s){this.service=c,this.serviceName=a,this.errors=s}create(c,...a){const s=a[0]||{},t=`${this.service}/${c}`,r=this.errors[c],n=r?Hg(r,s):"Error",i=`${this.serviceName}: ${n} (${t}).`;return new y3(t,i,s)}}function Hg(e,c){return e.replace(Mg,(a,s)=>{const t=c[s];return t!=null?String(t):`<${s}?>`})}const Mg=/\{\$([^}]+)}/g;function Y8(e,c){if(e===c)return!0;const a=Object.keys(e),s=Object.keys(c);for(const t of a){if(!s.includes(t))return!1;const r=e[t],n=c[t];if(Da(r)&&Da(n)){if(!Y8(r,n))return!1}else if(r!==n)return!1}for(const t of s)if(!a.includes(t))return!1;return!0}function Da(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1e3,gg=2,Lg=4*60*60*1e3,bg=.5;function Ra(e,c=Vg,a=gg){const s=c*Math.pow(a,e),t=Math.round(bg*s*(Math.random()-.5)*2);return Math.min(Lg,s+t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I9(e){return e&&e._delegate?e._delegate:e}class Z2{constructor(c,a,s){this.name=c,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const s=new pg;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&s.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const s=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(t)return null;throw r}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(Sg(c))try{this.getOrInitializeService({instanceIdentifier:E3})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:t});s.resolve(r)}catch{}}}}clearInstance(c=E3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=E3){return this.instances.has(c)}getOptions(c=E3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);s===i&&n.resolve(t)}return t}onInit(c,a){var s;const t=this.normalizeInstanceIdentifier(a),r=(s=this.onInitCallbacks.get(t))!==null&&s!==void 0?s:new Set;r.add(c),this.onInitCallbacks.set(t,r);const n=this.instances.get(t);return n&&c(n,t),()=>{r.delete(c)}}invokeOnInitCallbacks(c,a){const s=this.onInitCallbacks.get(a);if(!!s)for(const t of s)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let s=this.instances.get(c);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yg(c),options:a}),this.instances.set(c,s),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(s,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,s)}catch{}return s||null}normalizeInstanceIdentifier(c=E3){return this.component?this.component.multipleInstances?c:E3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yg(e){return e===E3?void 0:e}function Sg(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new xg(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u1||(u1={}));const wg={debug:u1.DEBUG,verbose:u1.VERBOSE,info:u1.INFO,warn:u1.WARN,error:u1.ERROR,silent:u1.SILENT},kg=u1.INFO,Ag={[u1.DEBUG]:"log",[u1.VERBOSE]:"log",[u1.INFO]:"info",[u1.WARN]:"warn",[u1.ERROR]:"error"},Tg=(e,c,...a)=>{if(c<e.logLevel)return;const s=new Date().toISOString(),t=Ag[c];if(t)console[t](`[${s}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class D9{constructor(c){this.name=c,this._logLevel=kg,this._logHandler=Tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in u1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?wg[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,u1.DEBUG,...c),this._logHandler(this,u1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,u1.VERBOSE,...c),this._logHandler(this,u1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,u1.INFO,...c),this._logHandler(this,u1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,u1.WARN,...c),this._logHandler(this,u1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,u1.ERROR,...c),this._logHandler(this,u1.ERROR,...c)}}const Eg=(e,c)=>c.some(a=>e instanceof a);let _a,Fa;function Pg(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ig(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _r=new WeakMap,V7=new WeakMap,Fr=new WeakMap,R0=new WeakMap,R9=new WeakMap;function Dg(e){const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("success",r),e.removeEventListener("error",n)},r=()=>{a(p3(e.result)),t()},n=()=>{s(e.error),t()};e.addEventListener("success",r),e.addEventListener("error",n)});return c.then(a=>{a instanceof IDBCursor&&_r.set(a,e)}).catch(()=>{}),R9.set(c,e),c}function Rg(e){if(V7.has(e))return;const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",n),e.removeEventListener("abort",n)},r=()=>{a(),t()},n=()=>{s(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",r),e.addEventListener("error",n),e.addEventListener("abort",n)});V7.set(e,c)}let g7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return V7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||Fr.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return p3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function _g(e){g7=e(g7)}function Fg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const s=e.call(_0(this),c,...a);return Fr.set(s,c.sort?c.sort():[c]),p3(s)}:Ig().includes(e)?function(...c){return e.apply(_0(this),c),p3(_r.get(this))}:function(...c){return p3(e.apply(_0(this),c))}}function Bg(e){return typeof e=="function"?Fg(e):(e instanceof IDBTransaction&&Rg(e),Eg(e,Pg())?new Proxy(e,g7):e)}function p3(e){if(e instanceof IDBRequest)return Dg(e);if(R0.has(e))return R0.get(e);const c=Bg(e);return c!==e&&(R0.set(e,c),R9.set(c,e)),c}const _0=e=>R9.get(e);function Br(e,c,{blocked:a,upgrade:s,blocking:t,terminated:r}={}){const n=indexedDB.open(e,c),i=p3(n);return s&&n.addEventListener("upgradeneeded",o=>{s(p3(n.result),o.oldVersion,o.newVersion,p3(n.transaction))}),a&&n.addEventListener("blocked",()=>a()),i.then(o=>{r&&o.addEventListener("close",()=>r()),t&&o.addEventListener("versionchange",()=>t())}).catch(()=>{}),i}const Og=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],F0=new Map;function Ba(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(F0.get(c))return F0.get(c);const a=c.replace(/FromIndex$/,""),s=c!==a,t=qg.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(t||Og.includes(a)))return;const r=async function(n,...i){const o=this.transaction(n,t?"readwrite":"readonly");let l=o.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[a](...i),t&&o.done]))[0]};return F0.set(c,r),r}_g(e=>({...e,get:(c,a,s)=>Ba(c,a)||e.get(c,a,s),has:(c,a)=>!!Ba(c,a)||e.has(c,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if($g(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function $g(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const L7="@firebase/app",Oa="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=new D9("@firebase/app"),Gg="@firebase/app-compat",jg="@firebase/analytics-compat",Wg="@firebase/analytics",Kg="@firebase/app-check-compat",Zg="@firebase/app-check",Qg="@firebase/auth",Yg="@firebase/auth-compat",Xg="@firebase/database",Jg="@firebase/database-compat",cL="@firebase/functions",eL="@firebase/functions-compat",aL="@firebase/installations",sL="@firebase/installations-compat",tL="@firebase/messaging",rL="@firebase/messaging-compat",nL="@firebase/performance",iL="@firebase/performance-compat",oL="@firebase/remote-config",lL="@firebase/remote-config-compat",fL="@firebase/storage",hL="@firebase/storage-compat",uL="@firebase/firestore",mL="@firebase/firestore-compat",vL="firebase",CL="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b7="[DEFAULT]",pL={[L7]:"fire-core",[Gg]:"fire-core-compat",[Wg]:"fire-analytics",[jg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Qg]:"fire-auth",[Yg]:"fire-auth-compat",[Xg]:"fire-rtdb",[Jg]:"fire-rtdb-compat",[cL]:"fire-fn",[eL]:"fire-fn-compat",[aL]:"fire-iid",[sL]:"fire-iid-compat",[tL]:"fire-fcm",[rL]:"fire-fcm-compat",[nL]:"fire-perf",[iL]:"fire-perf-compat",[oL]:"fire-rc",[lL]:"fire-rc-compat",[fL]:"fire-gcs",[hL]:"fire-gcs-compat",[uL]:"fire-fst",[mL]:"fire-fst-compat","fire-js":"fire-js",[vL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8=new Map,x7=new Map;function dL(e,c){try{e.container.addComponent(c)}catch(a){Q3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function H3(e){const c=e.name;if(x7.has(c))return Q3.debug(`There were multiple attempts to register component ${c}.`),!1;x7.set(c,e);for(const a of X8.values())dL(a,e);return!0}function G6(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},d3=new T5("app","Firebase",zL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(c,a,s){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Z2("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw d3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=CL;function Or(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const s=Object.assign({name:b7,automaticDataCollectionEnabled:!1},c),t=s.name;if(typeof t!="string"||!t)throw d3.create("bad-app-name",{appName:String(t)});if(a||(a=Cg()),!a)throw d3.create("no-options");const r=X8.get(t);if(r){if(Y8(a,r.options)&&Y8(s,r.config))return r;throw d3.create("duplicate-app",{appName:t})}const n=new Ng(t);for(const o of x7.values())n.addComponent(o);const i=new HL(a,s,n);return X8.set(t,i),i}function qr(e=b7){const c=X8.get(e);if(!c&&e===b7)return Or();if(!c)throw d3.create("no-app",{appName:e});return c}function O2(e,c,a){var s;let t=(s=pL[e])!==null&&s!==void 0?s:e;a&&(t+=`-${a}`);const r=t.match(/\s|\//),n=c.match(/\s|\//);if(r||n){const i=[`Unable to register library "${t}" with version "${c}":`];r&&i.push(`library name "${t}" contains illegal characters (whitespace or "/")`),r&&n&&i.push("and"),n&&i.push(`version name "${c}" contains illegal characters (whitespace or "/")`),Q3.warn(i.join(" "));return}H3(new Z2(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL="firebase-heartbeat-database",gL=1,S6="firebase-heartbeat-store";let B0=null;function Ur(){return B0||(B0=Br(VL,gL,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(S6)}}}).catch(e=>{throw d3.create("idb-open",{originalErrorMessage:e.message})})),B0}async function LL(e){var c;try{return(await Ur()).transaction(S6).objectStore(S6).get($r(e))}catch(a){if(a instanceof y3)Q3.warn(a.message);else{const s=d3.create("idb-get",{originalErrorMessage:(c=a)===null||c===void 0?void 0:c.message});Q3.warn(s.message)}}}async function qa(e,c){var a;try{const t=(await Ur()).transaction(S6,"readwrite");return await t.objectStore(S6).put(c,$r(e)),t.done}catch(s){if(s instanceof y3)Q3.warn(s.message);else{const t=d3.create("idb-set",{originalErrorMessage:(a=s)===null||a===void 0?void 0:a.message});Q3.warn(t.message)}}}function $r(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL=1024,xL=30*24*60*60*1e3;class yL{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new NL(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ua();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(t=>t.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const r=new Date(t.date).valueOf();return Date.now()-r<=xL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Ua(),{heartbeatsToSend:a,unsentEntries:s}=SL(this._heartbeatsCache.heartbeats),t=Q8(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function Ua(){return new Date().toISOString().substring(0,10)}function SL(e,c=bL){const a=[];let s=e.slice();for(const t of e){const r=a.find(n=>n.agent===t.agent);if(r){if(r.dates.push(t.date),$a(a)>c){r.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),$a(a)>c){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class NL{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ir()?Dr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LL(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return qa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return qa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function $a(e){return Q8(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(e){H3(new Z2("platform-logger",c=>new Ug(c),"PRIVATE")),H3(new Z2("heartbeat",c=>new yL(c),"PRIVATE")),O2(L7,Oa,e),O2(L7,Oa,"esm2017"),O2("fire-js","")}wL("");var kL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,_9=_9||{},K=kL||self;function J8(){}function E5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function j6(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function AL(e){return Object.prototype.hasOwnProperty.call(e,O0)&&e[O0]||(e[O0]=++TL)}var O0="closure_uid_"+(1e9*Math.random()>>>0),TL=0;function EL(e,c,a){return e.call.apply(e.bind,arguments)}function PL(e,c,a){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,s),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function X1(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X1=EL:X1=PL,X1.apply(null,arguments)}function M8(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var s=a.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K1(e,c){function a(){}a.prototype=c.prototype,e.X=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.Wb=function(s,t,r){for(var n=Array(arguments.length-2),i=2;i<arguments.length;i++)n[i-2]=arguments[i];return c.prototype[t].apply(s,n)}}function S3(){this.s=this.s,this.o=this.o}var IL=0;S3.prototype.s=!1;S3.prototype.na=function(){!this.s&&(this.s=!0,this.M(),IL!=0)&&AL(this)};S3.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gr=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function F9(e){const c=e.length;if(0<c){const a=Array(c);for(let s=0;s<c;s++)a[s]=e[s];return a}return[]}function Ga(e,c){for(let a=1;a<arguments.length;a++){const s=arguments[a];if(E5(s)){const t=e.length||0,r=s.length||0;e.length=t+r;for(let n=0;n<r;n++)e[t+n]=s[n]}else e.push(s)}}function J1(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}J1.prototype.h=function(){this.defaultPrevented=!0};var DL=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{K.addEventListener("test",J8,c),K.removeEventListener("test",J8,c)}catch{}return e}();function c5(e){return/^[\s\xa0]*$/.test(e)}var ja=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function q0(e,c){return e<c?-1:e>c?1:0}function P5(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function R2(e){return P5().indexOf(e)!=-1}function B9(e){return B9[" "](e),e}B9[" "]=J8;function RL(e){var c=BL;return Object.prototype.hasOwnProperty.call(c,9)?c[9]:c[9]=e(9)}var _L=R2("Opera"),A4=R2("Trident")||R2("MSIE"),jr=R2("Edge"),y7=jr||A4,Wr=R2("Gecko")&&!(P5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge"))&&!(R2("Trident")||R2("MSIE"))&&!R2("Edge"),FL=P5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge");function Kr(){var e=K.document;return e?e.documentMode:void 0}var e5;c:{var U0="",$0=function(){var e=P5();if(Wr)return/rv:([^\);]+)(\)|;)/.exec(e);if(jr)return/Edge\/([\d\.]+)/.exec(e);if(A4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(FL)return/WebKit\/(\S+)/.exec(e);if(_L)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($0&&(U0=$0?$0[1]:""),A4){var G0=Kr();if(G0!=null&&G0>parseFloat(U0)){e5=String(G0);break c}}e5=U0}var BL={};function OL(){return RL(function(){let e=0;const c=ja(String(e5)).split("."),a=ja("9").split("."),s=Math.max(c.length,a.length);for(let n=0;e==0&&n<s;n++){var t=c[n]||"",r=a[n]||"";do{if(t=/(\d*)(\D*)(.*)/.exec(t)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],t[0].length==0&&r[0].length==0)break;e=q0(t[1].length==0?0:parseInt(t[1],10),r[1].length==0?0:parseInt(r[1],10))||q0(t[2].length==0,r[2].length==0)||q0(t[2],r[2]),t=t[3],r=r[3]}while(e==0)}return 0<=e})}var S7;if(K.document&&A4){var Wa=Kr();S7=Wa||parseInt(e5,10)||void 0}else S7=void 0;var qL=S7;function N6(e,c){if(J1.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(Wr){c:{try{B9(c.nodeName);var t=!0;break c}catch{}t=!1}t||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:UL[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&N6.X.h.call(this)}}K1(N6,J1);var UL={2:"touch",3:"pen",4:"mouse"};N6.prototype.h=function(){N6.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W6="closure_listenable_"+(1e6*Math.random()|0),$L=0;function GL(e,c,a,s,t){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!s,this.ha=t,this.key=++$L,this.ba=this.ea=!1}function I5(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function O9(e,c,a){for(const s in e)c.call(a,e[s],s,e)}function Zr(e){const c={};for(const a in e)c[a]=e[a];return c}const Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qr(e,c){let a,s;for(let t=1;t<arguments.length;t++){s=arguments[t];for(a in s)e[a]=s[a];for(let r=0;r<Ka.length;r++)a=Ka[r],Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}}function D5(e){this.src=e,this.g={},this.h=0}D5.prototype.add=function(e,c,a,s,t){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var n=w7(e,c,s,t);return-1<n?(c=e[n],a||(c.ea=!1)):(c=new GL(c,this.src,r,!!s,t),c.ea=a,e.push(c)),c};function N7(e,c){var a=c.type;if(a in e.g){var s=e.g[a],t=Gr(s,c),r;(r=0<=t)&&Array.prototype.splice.call(s,t,1),r&&(I5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function w7(e,c,a,s){for(var t=0;t<e.length;++t){var r=e[t];if(!r.ba&&r.listener==c&&r.capture==!!a&&r.ha==s)return t}return-1}var q9="closure_lm_"+(1e6*Math.random()|0),j0={};function Yr(e,c,a,s,t){if(s&&s.once)return Jr(e,c,a,s,t);if(Array.isArray(c)){for(var r=0;r<c.length;r++)Yr(e,c[r],a,s,t);return null}return a=G9(a),e&&e[W6]?e.N(c,a,j6(s)?!!s.capture:!!s,t):Xr(e,c,a,!1,s,t)}function Xr(e,c,a,s,t,r){if(!c)throw Error("Invalid event type");var n=j6(t)?!!t.capture:!!t,i=$9(e);if(i||(e[q9]=i=new D5(e)),a=i.add(c,a,s,n,r),a.proxy)return a;if(s=jL(),a.proxy=s,s.src=e,s.listener=a,e.addEventListener)DL||(t=n),t===void 0&&(t=!1),e.addEventListener(c.toString(),s,t);else if(e.attachEvent)e.attachEvent(en(c.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return a}function jL(){function e(a){return c.call(e.src,e.listener,a)}const c=WL;return e}function Jr(e,c,a,s,t){if(Array.isArray(c)){for(var r=0;r<c.length;r++)Jr(e,c[r],a,s,t);return null}return a=G9(a),e&&e[W6]?e.O(c,a,j6(s)?!!s.capture:!!s,t):Xr(e,c,a,!0,s,t)}function cn(e,c,a,s,t){if(Array.isArray(c))for(var r=0;r<c.length;r++)cn(e,c[r],a,s,t);else s=j6(s)?!!s.capture:!!s,a=G9(a),e&&e[W6]?(e=e.i,c=String(c).toString(),c in e.g&&(r=e.g[c],a=w7(r,a,s,t),-1<a&&(I5(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[c],e.h--)))):e&&(e=$9(e))&&(c=e.g[c.toString()],e=-1,c&&(e=w7(c,a,s,t)),(a=-1<e?c[e]:null)&&U9(a))}function U9(e){if(typeof e!="number"&&e&&!e.ba){var c=e.src;if(c&&c[W6])N7(c.i,e);else{var a=e.type,s=e.proxy;c.removeEventListener?c.removeEventListener(a,s,e.capture):c.detachEvent?c.detachEvent(en(a),s):c.addListener&&c.removeListener&&c.removeListener(s),(a=$9(c))?(N7(a,e),a.h==0&&(a.src=null,c[q9]=null)):I5(e)}}}function en(e){return e in j0?j0[e]:j0[e]="on"+e}function WL(e,c){if(e.ba)e=!0;else{c=new N6(c,this);var a=e.listener,s=e.ha||e.src;e.ea&&U9(e),e=a.call(s,c)}return e}function $9(e){return e=e[q9],e instanceof D5?e:null}var W0="__closure_events_fn_"+(1e9*Math.random()>>>0);function G9(e){return typeof e=="function"?e:(e[W0]||(e[W0]=function(c){return e.handleEvent(c)}),e[W0])}function U1(){S3.call(this),this.i=new D5(this),this.P=this,this.I=null}K1(U1,S3);U1.prototype[W6]=!0;U1.prototype.removeEventListener=function(e,c,a,s){cn(this,e,c,a,s)};function W1(e,c){var a,s=e.I;if(s)for(a=[];s;s=s.I)a.push(s);if(e=e.P,s=c.type||c,typeof c=="string")c=new J1(c,e);else if(c instanceof J1)c.target=c.target||e;else{var t=c;c=new J1(s,e),Qr(c,t)}if(t=!0,a)for(var r=a.length-1;0<=r;r--){var n=c.g=a[r];t=V8(n,s,!0,c)&&t}if(n=c.g=e,t=V8(n,s,!0,c)&&t,t=V8(n,s,!1,c)&&t,a)for(r=0;r<a.length;r++)n=c.g=a[r],t=V8(n,s,!1,c)&&t}U1.prototype.M=function(){if(U1.X.M.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],s=0;s<a.length;s++)I5(a[s]);delete e.g[c],e.h--}}this.I=null};U1.prototype.N=function(e,c,a,s){return this.i.add(String(e),c,!1,a,s)};U1.prototype.O=function(e,c,a,s){return this.i.add(String(e),c,!0,a,s)};function V8(e,c,a,s){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var t=!0,r=0;r<c.length;++r){var n=c[r];if(n&&!n.ba&&n.capture==a){var i=n.listener,o=n.ha||n.src;n.ea&&N7(e.i,n),t=i.call(o,s)!==!1&&t}}return t&&!s.defaultPrevented}var j9=K.JSON.stringify;function KL(){var e=tn;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class ZL{constructor(){this.h=this.g=null}add(c,a){const s=an.get();s.set(c,a),this.h?this.h.next=s:this.g=s,this.h=s}}var an=new class{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new QL,e=>e.reset());class QL{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function YL(e){K.setTimeout(()=>{throw e},0)}function sn(e,c){k7||XL(),A7||(k7(),A7=!0),tn.add(e,c)}var k7;function XL(){var e=K.Promise.resolve(void 0);k7=function(){e.then(JL)}}var A7=!1,tn=new ZL;function JL(){for(var e;e=KL();){try{e.h.call(e.g)}catch(a){YL(a)}var c=an;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}A7=!1}function R5(e,c){U1.call(this),this.h=e||1,this.g=c||K,this.j=X1(this.lb,this),this.l=Date.now()}K1(R5,U1);_=R5.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),W1(this,"tick"),this.ca&&(W9(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function W9(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}_.M=function(){R5.X.M.call(this),W9(this),delete this.g};function K9(e,c,a){if(typeof e=="function")a&&(e=X1(e,a));else if(e&&typeof e.handleEvent=="function")e=X1(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:K.setTimeout(e,c||0)}function rn(e){e.g=K9(()=>{e.g=null,e.i&&(e.i=!1,rn(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class cb extends S3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:rn(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function w6(e){S3.call(this),this.h=e,this.g={}}K1(w6,S3);var Za=[];function nn(e,c,a,s){Array.isArray(a)||(a&&(Za[0]=a.toString()),a=Za);for(var t=0;t<a.length;t++){var r=Yr(c,a[t],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function on(e){O9(e.g,function(c,a){this.g.hasOwnProperty(a)&&U9(c)},e),e.g={}}w6.prototype.M=function(){w6.X.M.call(this),on(this)};w6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _5(){this.g=!0}_5.prototype.Aa=function(){this.g=!1};function eb(e,c,a,s,t,r){e.info(function(){if(e.g)if(r)for(var n="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var h=f.split("_");n=2<=h.length&&h[1]=="type"?n+(f+"="+l+"&"):n+(f+"=redacted&")}}else n=null;else n=r;return"XMLHTTP REQ ("+s+") [attempt "+t+"]: "+c+`
`+a+`
`+n})}function ab(e,c,a,s,t,r,n){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+t+"]: "+c+`
`+a+`
`+r+" "+n})}function h4(e,c,a,s){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+tb(e,a)+(s?" "+s:"")})}function sb(e,c){e.info(function(){return"TIMEOUT: "+c})}_5.prototype.info=function(){};function tb(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var s=a[e];if(!(2>s.length)){var t=s[1];if(Array.isArray(t)&&!(1>t.length)){var r=t[0];if(r!="noop"&&r!="stop"&&r!="close")for(var n=1;n<t.length;n++)t[n]=""}}}}return j9(a)}catch{return c}}var s4={},Qa=null;function F5(){return Qa=Qa||new U1}s4.Pa="serverreachability";function ln(e){J1.call(this,s4.Pa,e)}K1(ln,J1);function k6(e){const c=F5();W1(c,new ln(c))}s4.STAT_EVENT="statevent";function fn(e,c){J1.call(this,s4.STAT_EVENT,e),this.stat=c}K1(fn,J1);function s2(e){const c=F5();W1(c,new fn(c,e))}s4.Qa="timingevent";function hn(e,c){J1.call(this,s4.Qa,e),this.size=c}K1(hn,J1);function K6(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},c)}var B5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},un={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Z9(){}Z9.prototype.h=null;function Ya(e){return e.h||(e.h=e.i())}function mn(){}var Z6={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Q9(){J1.call(this,"d")}K1(Q9,J1);function Y9(){J1.call(this,"c")}K1(Y9,J1);var T7;function O5(){}K1(O5,Z9);O5.prototype.g=function(){return new XMLHttpRequest};O5.prototype.i=function(){return{}};T7=new O5;function Q6(e,c,a,s){this.l=e,this.j=c,this.m=a,this.U=s||1,this.S=new w6(this),this.O=rb,e=y7?125:void 0,this.T=new R5(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vn}function vn(){this.i=null,this.g="",this.h=!1}var rb=45e3,E7={},a5={};_=Q6.prototype;_.setTimeout=function(e){this.O=e};function P7(e,c,a){e.K=1,e.v=U5(Q2(c)),e.s=a,e.P=!0,Cn(e,null)}function Cn(e,c){e.F=Date.now(),Y6(e),e.A=Q2(e.v);var a=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Ln(a.i,"t",s),e.C=0,a=e.l.H,e.h=new vn,e.g=$n(e.l,a?c:null,!e.s),0<e.N&&(e.L=new cb(X1(e.La,e,e.g),e.N)),nn(e.S,e.g,"readystatechange",e.ib),c=e.H?Zr(e.H):{},e.s?(e.u||(e.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,c)):(e.u="GET",e.g.da(e.A,e.u,null,c)),k6(),eb(e.j,e.u,e.A,e.m,e.U,e.s)}_.ib=function(e){e=e.target;const c=this.L;c&&j2(e)==3?c.l():this.La(e)};_.La=function(e){try{if(e==this.g)c:{const f=j2(this.g);var c=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||y7||this.g&&(this.h.h||this.g.fa()||es(this.g)))){this.I||f!=4||c==7||(c==8||0>=h?k6(3):k6(2)),q5(this);var a=this.g.aa();this.Y=a;e:if(pn(this)){var s=es(this.g);e="";var t=s.length,r=j2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){D3(this),h6(this);var n="";break e}this.h.i=new K.TextDecoder}for(c=0;c<t;c++)this.h.h=!0,e+=this.h.i.decode(s[c],{stream:r&&c==t-1});s.splice(0,t),this.h.g+=e,this.C=0,n=this.h.g}else n=this.g.fa();if(this.i=a==200,ab(this.j,this.u,this.A,this.m,this.U,f,a),this.i){if(this.Z&&!this.J){e:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!c5(i)){var l=i;break e}}l=null}if(a=l)h4(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,I7(this,a);else{this.i=!1,this.o=3,s2(12),D3(this),h6(this);break c}}this.P?(dn(this,f,n),y7&&this.i&&f==3&&(nn(this.S,this.T,"tick",this.hb),this.T.start())):(h4(this.j,this.m,n,null),I7(this,n)),f==4&&D3(this),this.i&&!this.I&&(f==4?Bn(this.l,this):(this.i=!1,Y6(this)))}else a==400&&0<n.indexOf("Unknown SID")?(this.o=3,s2(12)):(this.o=0,s2(13)),D3(this),h6(this)}}}catch{}finally{}};function pn(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function dn(e,c,a){let s=!0,t;for(;!e.I&&e.C<a.length;)if(t=nb(e,a),t==a5){c==4&&(e.o=4,s2(14),s=!1),h4(e.j,e.m,null,"[Incomplete Response]");break}else if(t==E7){e.o=4,s2(15),h4(e.j,e.m,a,"[Invalid Chunk]"),s=!1;break}else h4(e.j,e.m,t,null),I7(e,t);pn(e)&&t!=a5&&t!=E7&&(e.h.g="",e.C=0),c!=4||a.length!=0||e.h.h||(e.o=1,s2(16),s=!1),e.i=e.i&&s,s?0<a.length&&!e.$&&(e.$=!0,c=e.l,c.g==e&&c.$&&!c.K&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tc(c),c.K=!0,s2(11))):(h4(e.j,e.m,a,"[Invalid Chunked Response]"),D3(e),h6(e))}_.hb=function(){if(this.g){var e=j2(this.g),c=this.g.fa();this.C<c.length&&(q5(this),dn(this,e,c),this.i&&e!=4&&Y6(this))}};function nb(e,c){var a=e.C,s=c.indexOf(`
`,a);return s==-1?a5:(a=Number(c.substring(a,s)),isNaN(a)?E7:(s+=1,s+a>c.length?a5:(c=c.substr(s,a),e.C=s+a,c)))}_.cancel=function(){this.I=!0,D3(this)};function Y6(e){e.V=Date.now()+e.O,zn(e,e.O)}function zn(e,c){if(e.B!=null)throw Error("WatchDog timer not null");e.B=K6(X1(e.gb,e),c)}function q5(e){e.B&&(K.clearTimeout(e.B),e.B=null)}_.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(sb(this.j,this.A),this.K!=2&&(k6(),s2(17)),D3(this),this.o=2,h6(this)):zn(this,this.V-e)};function h6(e){e.l.G==0||e.I||Bn(e.l,e)}function D3(e){q5(e);var c=e.L;c&&typeof c.na=="function"&&c.na(),e.L=null,W9(e.T),on(e.S),e.g&&(c=e.g,e.g=null,c.abort(),c.na())}function I7(e,c){try{var a=e.l;if(a.G!=0&&(a.g==e||D7(a.h,e))){if(!e.J&&D7(a.h,e)&&a.G==3){try{var s=a.Fa.g.parse(c)}catch{s=null}if(Array.isArray(s)&&s.length==3){var t=s;if(t[0]==0){c:if(!a.u){if(a.g)if(a.g.F+3e3<e.F)r5(a),j5(a);else break c;sc(a),s2(18)}}else a.Ba=t[1],0<a.Ba-a.T&&37500>t[2]&&a.L&&a.A==0&&!a.v&&(a.v=K6(X1(a.cb,a),6e3));if(1>=yn(a.h)&&a.ja){try{a.ja()}catch{}a.ja=void 0}}else R3(a,11)}else if((e.J||a.g==e)&&r5(a),!c5(c))for(t=a.Fa.g.parse(c),c=0;c<t.length;c++){let l=t[c];if(a.T=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.I=l[1],a.ka=l[2];const f=l[3];f!=null&&(a.ma=f,a.j.info("VER="+a.ma));const h=l[4];h!=null&&(a.Ca=h,a.j.info("SVER="+a.Ca));const u=l[5];u!=null&&typeof u=="number"&&0<u&&(s=1.5*u,a.J=s,a.j.info("backChannelRequestTimeoutMs_="+s)),s=a;const C=e.g;if(C){const z=C.g?C.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(z){var r=s.h;r.g||z.indexOf("spdy")==-1&&z.indexOf("quic")==-1&&z.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(X9(r,r.h),r.h=null))}if(s.D){const L=C.g?C.g.getResponseHeader("X-HTTP-Session-Id"):null;L&&(s.za=L,b1(s.F,s.D,L))}}a.G=3,a.l&&a.l.xa(),a.$&&(a.P=Date.now()-e.F,a.j.info("Handshake RTT: "+a.P+"ms")),s=a;var n=e;if(s.sa=Un(s,s.H?s.ka:null,s.V),n.J){Sn(s.h,n);var i=n,o=s.J;o&&i.setTimeout(o),i.B&&(q5(i),Y6(i)),s.g=n}else _n(s);0<a.i.length&&W5(a)}else l[0]!="stop"&&l[0]!="close"||R3(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?R3(a,7):ac(a):l[0]!="noop"&&a.l&&a.l.wa(l),a.A=0)}}k6(4)}catch{}}function ib(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(E5(e)){for(var c=[],a=e.length,s=0;s<a;s++)c.push(e[s]);return c}c=[],a=0;for(s in e)c[a++]=e[s];return c}function ob(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(E5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const s in e)c[a++]=s;return c}}}function Hn(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(E5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=ob(e),s=ib(e),t=s.length,r=0;r<t;r++)c.call(void 0,s[r],a&&a[r],e)}var Mn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lb(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var s=e[a].indexOf("="),t=null;if(0<=s){var r=e[a].substring(0,s);t=e[a].substring(s+1)}else r=e[a];c(r,t?decodeURIComponent(t.replace(/\+/g," ")):"")}}}function $3(e,c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $3){this.h=c!==void 0?c:e.h,s5(this,e.j),this.s=e.s,this.g=e.g,t5(this,e.m),this.l=e.l,c=e.i;var a=new A6;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),Xa(this,a),this.o=e.o}else e&&(a=String(e).match(Mn))?(this.h=!!c,s5(this,a[1]||"",!0),this.s=e6(a[2]||""),this.g=e6(a[3]||"",!0),t5(this,a[4]),this.l=e6(a[5]||"",!0),Xa(this,a[6]||"",!0),this.o=e6(a[7]||"")):(this.h=!!c,this.i=new A6(null,this.h))}$3.prototype.toString=function(){var e=[],c=this.j;c&&e.push(a6(c,Ja,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push(a6(c,Ja,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(a6(a,a.charAt(0)=="/"?ub:hb,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",a6(a,vb)),e.join("")};function Q2(e){return new $3(e)}function s5(e,c,a){e.j=a?e6(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function t5(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function Xa(e,c,a){c instanceof A6?(e.i=c,Cb(e.i,e.h)):(a||(c=a6(c,mb)),e.i=new A6(c,e.h))}function b1(e,c,a){e.i.set(c,a)}function U5(e){return b1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function e6(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function a6(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,fb),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ja=/[#\/\?@]/g,hb=/[#\?:]/g,ub=/[#\?]/g,mb=/[#\?@]/g,vb=/#/g;function A6(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function N3(e){e.g||(e.g=new Map,e.h=0,e.i&&lb(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}_=A6.prototype;_.add=function(e,c){N3(this),this.i=null,e=U4(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function Vn(e,c){N3(e),c=U4(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function gn(e,c){return N3(e),c=U4(e,c),e.g.has(c)}_.forEach=function(e,c){N3(this),this.g.forEach(function(a,s){a.forEach(function(t){e.call(c,t,s,this)},this)},this)};_.oa=function(){N3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let s=0;s<c.length;s++){const t=e[s];for(let r=0;r<t.length;r++)a.push(c[s])}return a};_.W=function(e){N3(this);let c=[];if(typeof e=="string")gn(this,e)&&(c=c.concat(this.g.get(U4(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};_.set=function(e,c){return N3(this),this.i=null,e=U4(this,e),gn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};_.get=function(e,c){return e?(e=this.W(e),0<e.length?String(e[0]):c):c};function Ln(e,c,a){Vn(e,c),0<a.length&&(e.i=null,e.g.set(U4(e,c),F9(a)),e.h+=a.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var s=c[a];const r=encodeURIComponent(String(s)),n=this.W(s);for(s=0;s<n.length;s++){var t=r;n[s]!==""&&(t+="="+encodeURIComponent(String(n[s]))),e.push(t)}}return this.i=e.join("&")};function U4(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function Cb(e,c){c&&!e.j&&(N3(e),e.i=null,e.g.forEach(function(a,s){var t=s.toLowerCase();s!=t&&(Vn(this,s),Ln(this,t,a))},e)),e.j=c}var pb=class{constructor(e,c){this.h=e,this.g=c}};function bn(e){this.l=e||db,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function xn(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function yn(e){return e.h?1:e.g?e.g.size:0}function D7(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function X9(e,c){e.g?e.g.add(c):e.h=c}function Sn(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}bn.prototype.cancel=function(){if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Nn(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.D);return c}return F9(e.i)}function J9(){}J9.prototype.stringify=function(e){return K.JSON.stringify(e,void 0)};J9.prototype.parse=function(e){return K.JSON.parse(e,void 0)};function zb(){this.g=new J9}function Hb(e,c,a){const s=a||"";try{Hn(e,function(t,r){let n=t;j6(t)&&(n=j9(t)),c.push(s+r+"="+encodeURIComponent(n))})}catch(t){throw c.push(s+"type="+encodeURIComponent("_badmap")),t}}function Mb(e,c){const a=new _5;if(K.Image){const s=new Image;s.onload=M8(g8,a,s,"TestLoadImage: loaded",!0,c),s.onerror=M8(g8,a,s,"TestLoadImage: error",!1,c),s.onabort=M8(g8,a,s,"TestLoadImage: abort",!1,c),s.ontimeout=M8(g8,a,s,"TestLoadImage: timeout",!1,c),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else c(!1)}function g8(e,c,a,s,t){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,t(s)}catch{}}function X6(e){this.l=e.ac||null,this.j=e.jb||!1}K1(X6,Z9);X6.prototype.g=function(){return new $5(this.l,this.j)};X6.prototype.i=function(e){return function(){return e}}({});function $5(e,c){U1.call(this),this.D=e,this.u=c,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K1($5,U1);var cc=0;_=$5.prototype;_.open=function(e,c){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,T6(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.D||K).fetch(new Request(this.B,c)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,J6(this)),this.readyState=cc};_.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,T6(this)),this.g&&(this.readyState=3,T6(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function wn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}_.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?J6(this):T6(this),this.readyState==3&&wn(this)}};_.Va=function(e){this.g&&(this.response=this.responseText=e,J6(this))};_.Ua=function(e){this.g&&(this.response=e,J6(this))};_.ga=function(){this.g&&J6(this)};function J6(e){e.readyState=4,e.l=null,e.j=null,e.A=null,T6(e)}_.setRequestHeader=function(e,c){this.v.append(e,c)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function T6(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty($5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Vb=K.JSON.parse;function w1(e){U1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kn,this.K=this.L=!1}K1(w1,U1);var kn="",gb=/^https?$/i,Lb=["POST","PUT"];_=w1.prototype;_.Ka=function(e){this.L=e};_.da=function(e,c,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);c=c?c.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():T7.g(),this.C=this.u?Ya(this.u):Ya(T7),this.g.onreadystatechange=X1(this.Ha,this);try{this.F=!0,this.g.open(c,String(e),!0),this.F=!1}catch(r){cs(this,r);return}if(e=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var t in s)a.set(t,s[t]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())a.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(a.keys()).find(r=>r.toLowerCase()=="content-type"),t=K.FormData&&e instanceof K.FormData,!(0<=Gr(Lb,c))||s||t||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,n]of a)this.g.setRequestHeader(r,n);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{En(this),0<this.B&&((this.K=bb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X1(this.qa,this)):this.A=K9(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){cs(this,r)}};function bb(e){return A4&&OL()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.qa=function(){typeof _9<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W1(this,"timeout"),this.abort(8))};function cs(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,An(e),G5(e)}function An(e){e.D||(e.D=!0,W1(e,"complete"),W1(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W1(this,"complete"),W1(this,"abort"),G5(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),G5(this,!0)),w1.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Tn(this):this.fb())};_.fb=function(){Tn(this)};function Tn(e){if(e.h&&typeof _9<"u"&&(!e.C[1]||j2(e)!=4||e.aa()!=2)){if(e.v&&j2(e)==4)K9(e.Ha,0,e);else if(W1(e,"readystatechange"),j2(e)==4){e.h=!1;try{const i=e.aa();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var s;if(s=i===0){var t=String(e.H).match(Mn)[1]||null;if(!t&&K.self&&K.self.location){var r=K.self.location.protocol;t=r.substr(0,r.length-1)}s=!gb.test(t?t.toLowerCase():"")}a=s}if(a)W1(e,"complete"),W1(e,"success");else{e.m=6;try{var n=2<j2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.aa()+"]",An(e)}}finally{G5(e)}}}}function G5(e,c){if(e.g){En(e);const a=e.g,s=e.C[0]?J8:null;e.g=null,e.C=null,c||W1(e,"ready");try{a.onreadystatechange=s}catch{}}}function En(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}function j2(e){return e.g?e.g.readyState:0}_.aa=function(){try{return 2<j2(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),Vb(c)}};function es(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case kn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pn(e){let c="";return O9(e,function(a,s){c+=s,c+=":",c+=a,c+=`\r
`}),c}function ec(e,c,a){c:{for(s in a){var s=!1;break c}s=!0}s||(a=Pn(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):b1(e,c,a))}function J4(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function In(e){this.Ca=0,this.i=[],this.j=new _5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=J4("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=J4("baseRetryDelayMs",5e3,e),this.bb=J4("retryDelaySeedMs",1e4,e),this.$a=J4("forwardChannelMaxRetries",2,e),this.ta=J4("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new bn(e&&e.concurrentRequestLimit),this.Fa=new zb,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=In.prototype;_.ma=8;_.G=1;function ac(e){if(Dn(e),e.G==3){var c=e.U++,a=Q2(e.F);b1(a,"SID",e.I),b1(a,"RID",c),b1(a,"TYPE","terminate"),c8(e,a),c=new Q6(e,e.j,c,void 0),c.K=2,c.v=U5(Q2(a)),a=!1,K.navigator&&K.navigator.sendBeacon&&(a=K.navigator.sendBeacon(c.v.toString(),"")),!a&&K.Image&&(new Image().src=c.v,a=!0),a||(c.g=$n(c.l,null),c.g.da(c.v)),c.F=Date.now(),Y6(c)}qn(e)}function j5(e){e.g&&(tc(e),e.g.cancel(),e.g=null)}function Dn(e){j5(e),e.u&&(K.clearTimeout(e.u),e.u=null),r5(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function W5(e){xn(e.h)||e.m||(e.m=!0,sn(e.Ja,e),e.C=0)}function xb(e,c){return yn(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=c.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=K6(X1(e.Ja,e,c),On(e,e.C)),e.C++,!0)}_.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const t=new Q6(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Zr(r),Qr(r,this.S)):r=this.S),this.o!==null||this.N||(t.H=r,r=null),this.O)c:{for(var c=0,a=0;a<this.i.length;a++){e:{var s=this.i[a];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(c+=s,4096<c){c=a;break c}if(c===4096||a===this.i.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=Rn(this,t,c),a=Q2(this.F),b1(a,"RID",e),b1(a,"CVER",22),this.D&&b1(a,"X-HTTP-Session-Id",this.D),c8(this,a),r&&(this.N?c="headers="+encodeURIComponent(String(Pn(r)))+"&"+c:this.o&&ec(a,this.o,r)),X9(this.h,t),this.Ya&&b1(a,"TYPE","init"),this.O?(b1(a,"$req",c),b1(a,"SID","null"),t.Z=!0,P7(t,a,null)):P7(t,a,c),this.G=2}}else this.G==3&&(e?as(this,e):this.i.length==0||xn(this.h)||as(this))};function as(e,c){var a;c?a=c.m:a=e.U++;const s=Q2(e.F);b1(s,"SID",e.I),b1(s,"RID",a),b1(s,"AID",e.T),c8(e,s),e.o&&e.s&&ec(s,e.o,e.s),a=new Q6(e,e.j,a,e.C+1),e.o===null&&(a.H=e.s),c&&(e.i=c.D.concat(e.i)),c=Rn(e,a,1e3),a.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),X9(e.h,a),P7(a,s,c)}function c8(e,c){e.ia&&O9(e.ia,function(a,s){b1(c,s,a)}),e.l&&Hn({},function(a,s){b1(c,s,a)})}function Rn(e,c,a){a=Math.min(e.i.length,a);var s=e.l?X1(e.l.Ra,e.l,e):null;c:{var t=e.i;let r=-1;for(;;){const n=["count="+a];r==-1?0<a?(r=t[0].h,n.push("ofs="+r)):r=0:n.push("ofs="+r);let i=!0;for(let o=0;o<a;o++){let l=t[o].h;const f=t[o].g;if(l-=r,0>l)r=Math.max(0,t[o].h-100),i=!1;else try{Hb(f,n,"req"+l+"_")}catch{s&&s(f)}}if(i){s=n.join("&");break c}}}return e=e.i.splice(0,a),c.D=e,s}function _n(e){e.g||e.u||(e.Z=1,sn(e.Ia,e),e.A=0)}function sc(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=K6(X1(e.Ia,e),On(e,e.A)),e.A++,!0)}_.Ia=function(){if(this.u=null,Fn(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=K6(X1(this.eb,this),e)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,s2(10),j5(this),Fn(this))};function tc(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function Fn(e){e.g=new Q6(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var c=Q2(e.sa);b1(c,"RID","rpc"),b1(c,"SID",e.I),b1(c,"CI",e.L?"0":"1"),b1(c,"AID",e.T),b1(c,"TYPE","xmlhttp"),c8(e,c),e.o&&e.s&&ec(c,e.o,e.s),e.J&&e.g.setTimeout(e.J);var a=e.g;e=e.ka,a.K=1,a.v=U5(Q2(c)),a.s=null,a.P=!0,Cn(a,e)}_.cb=function(){this.v!=null&&(this.v=null,j5(this),sc(this),s2(19))};function r5(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function Bn(e,c){var a=null;if(e.g==c){r5(e),tc(e),e.g=null;var s=2}else if(D7(e.h,c))a=c.D,Sn(e.h,c),s=1;else return;if(e.G!=0){if(e.pa=c.Y,c.i)if(s==1){a=c.s?c.s.length:0,c=Date.now()-c.F;var t=e.C;s=F5(),W1(s,new hn(s,a)),W5(e)}else _n(e);else if(t=c.o,t==3||t==0&&0<e.pa||!(s==1&&xb(e,c)||s==2&&sc(e)))switch(a&&0<a.length&&(c=e.h,c.i=c.i.concat(a)),t){case 1:R3(e,5);break;case 4:R3(e,10);break;case 3:R3(e,6);break;default:R3(e,2)}}}function On(e,c){let a=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(a*=2),a*c}function R3(e,c){if(e.j.info("Error code "+c),c==2){var a=null;e.l&&(a=null);var s=X1(e.kb,e);a||(a=new $3("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||s5(a,"https"),U5(a)),Mb(a.toString(),s)}else s2(2);e.G=0,e.l&&e.l.va(c),qn(e),Dn(e)}_.kb=function(e){e?(this.j.info("Successfully pinged google.com"),s2(2)):(this.j.info("Failed to ping google.com"),s2(1))};function qn(e){if(e.G=0,e.la=[],e.l){const c=Nn(e.h);(c.length!=0||e.i.length!=0)&&(Ga(e.la,c),Ga(e.la,e.i),e.h.i.length=0,F9(e.i),e.i.length=0),e.l.ua()}}function Un(e,c,a){var s=a instanceof $3?Q2(a):new $3(a,void 0);if(s.g!="")c&&(s.g=c+"."+s.g),t5(s,s.m);else{var t=K.location;s=t.protocol,c=c?c+"."+t.hostname:t.hostname,t=+t.port;var r=new $3(null,void 0);s&&s5(r,s),c&&(r.g=c),t&&t5(r,t),a&&(r.l=a),s=r}return a=e.D,c=e.za,a&&c&&b1(s,a,c),b1(s,"VER",e.ma),c8(e,s),s}function $n(e,c,a){if(c&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return c=a&&e.Da&&!e.ra?new w1(new X6({jb:!0})):new w1(e.ra),c.Ka(e.H),c}function Gn(){}_=Gn.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function n5(){if(A4&&!(10<=Number(qL)))throw Error("Environmental error: no available transport.")}n5.prototype.g=function(e,c){return new d2(e,c)};function d2(e,c){U1.call(this),this.g=new In(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.ya&&(e?e["X-WebChannel-Client-Profile"]=c.ya:e={"X-WebChannel-Client-Profile":c.ya}),this.g.S=e,(e=c&&c.Yb)&&!c5(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!c5(c)&&(this.g.D=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new $4(this)}K1(d2,U1);d2.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,c=this.l,a=this.h||void 0;s2(0),e.V=c,e.ia=a||{},e.L=e.Y,e.F=Un(e,null,e.V),W5(e)};d2.prototype.close=function(){ac(this.g)};d2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=j9(e),e=a);c.i.push(new pb(c.ab++,e)),c.G==3&&W5(c)};d2.prototype.M=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,d2.X.M.call(this)};function jn(e){Q9.call(this);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}K1(jn,Q9);function Wn(){Y9.call(this),this.status=1}K1(Wn,Y9);function $4(e){this.g=e}K1($4,Gn);$4.prototype.xa=function(){W1(this.g,"a")};$4.prototype.wa=function(e){W1(this.g,new jn(e))};$4.prototype.va=function(e){W1(this.g,new Wn)};$4.prototype.ua=function(){W1(this.g,"b")};n5.prototype.createWebChannel=n5.prototype.g;d2.prototype.send=d2.prototype.u;d2.prototype.open=d2.prototype.m;d2.prototype.close=d2.prototype.close;B5.NO_ERROR=0;B5.TIMEOUT=8;B5.HTTP_ERROR=6;un.COMPLETE="complete";mn.EventType=Z6;Z6.OPEN="a";Z6.CLOSE="b";Z6.ERROR="c";Z6.MESSAGE="d";U1.prototype.listen=U1.prototype.N;w1.prototype.listenOnce=w1.prototype.O;w1.prototype.getLastError=w1.prototype.Oa;w1.prototype.getLastErrorCode=w1.prototype.Ea;w1.prototype.getStatus=w1.prototype.aa;w1.prototype.getResponseJson=w1.prototype.Sa;w1.prototype.getResponseText=w1.prototype.fa;w1.prototype.send=w1.prototype.da;w1.prototype.setWithCredentials=w1.prototype.Ka;var yb=function(){return new n5},Sb=function(){return F5()},K0=B5,Nb=un,wb=s4,ss={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kb=X6,L8=mn,Ab=w1;const ts="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}Z1.UNAUTHENTICATED=new Z1(null),Z1.GOOGLE_CREDENTIALS=new Z1("google-credentials-uid"),Z1.FIRST_PARTY=new Z1("first-party-uid"),Z1.MOCK_USER=new Z1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G4="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y3=new D9("@firebase/firestore");function rs(){return Y3.logLevel}function B(e,...c){if(Y3.logLevel<=u1.DEBUG){const a=c.map(rc);Y3.debug(`Firestore (${G4}): ${e}`,...a)}}function Y2(e,...c){if(Y3.logLevel<=u1.ERROR){const a=c.map(rc);Y3.error(`Firestore (${G4}): ${e}`,...a)}}function R7(e,...c){if(Y3.logLevel<=u1.WARN){const a=c.map(rc);Y3.warn(`Firestore (${G4}): ${e}`,...a)}}function rc(e){if(typeof e=="string")return e;try{return c=e,JSON.stringify(c)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(e="Unexpected state"){const c=`FIRESTORE (${G4}) INTERNAL ASSERTION FAILED: `+e;throw Y2(c),new Error(c)}function I1(e,c){e||c1()}function f1(e,c){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends y3{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class Tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(Z1.UNAUTHENTICATED))}shutdown(){}}class Eb{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class Pb{constructor(c){this.t=c,this.currentUser=Z1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let s=this.i;const t=o=>this.i!==s?(s=this.i,a(o)):Promise.resolve();let r=new G3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new G3,c.enqueueRetryable(()=>t(this.currentUser))};const n=()=>{const o=r;c.enqueueRetryable(async()=>{await o.promise,await t(this.currentUser)})},i=o=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new G3)}},0),n()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(s=>this.i!==c?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(I1(typeof s.accessToken=="string"),new Kn(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return I1(c===null||typeof c=="string"),new Z1(c)}}class Ib{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t,this.type="FirstParty",this.user=Z1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(I1(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const c=this.I();return c&&this.p.set("Authorization",c),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Db{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t}getToken(){return Promise.resolve(new Ib(this.h,this.l,this.m,this.g))}start(c,a){c.enqueueRetryable(()=>a(Z1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rb{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _b{constructor(c){this.T=c,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(c,a){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const n=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?a(r.token):Promise.resolve()};this.o=r=>{c.enqueueRetryable(()=>s(r))};const t=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>t(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?t(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(I1(typeof a.token=="string"),this.A=a.token,new Rb(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let s=0;s<e;s++)a[s]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{static R(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let s="";for(;s.length<20;){const t=Fb(40);for(let r=0;r<t.length;++r)s.length<20&&t[r]<a&&(s+=c.charAt(t[r]%c.length))}return s}}function v1(e,c){return e<c?-1:e>c?1:0}function T4(e,c,a){return e.length===c.length&&e.every((s,t)=>a(s,c[t]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new W(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new W(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new W(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new W(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return h2.fromMillis(Date.now())}static fromDate(c){return h2.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),s=Math.floor(1e6*(c-1e3*a));return new h2(a,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?v1(this.nanoseconds,c.nanoseconds):v1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new a1(c)}static min(){return new a1(new h2(0,0))}static max(){return new a1(new h2(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(c,a,s){a===void 0?a=0:a>c.length&&c1(),s===void 0?s=c.length-a:s>c.length-a&&c1(),this.segments=c,this.offset=a,this.len=s}get length(){return this.len}isEqual(c){return E6.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof E6?c.forEach(s=>{a.push(s)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,s=this.limit();a<s;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const s=Math.min(c.length,a.length);for(let t=0;t<s;t++){const r=c.get(t),n=a.get(t);if(r<n)return-1;if(r>n)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class N1 extends E6{construct(c,a,s){return new N1(c,a,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){const a=[];for(const s of c){if(s.indexOf("//")>=0)throw new W(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);a.push(...s.split("/").filter(t=>t.length>0))}return new N1(a)}static emptyPath(){return new N1([])}}const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class l2 extends E6{construct(c,a,s){return new l2(c,a,s)}static isValidIdentifier(c){return Ob.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),l2.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new l2(["__name__"])}static fromServerFormat(c){const a=[];let s="",t=0;const r=()=>{if(s.length===0)throw new W(T.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(s),s=""};let n=!1;for(;t<c.length;){const i=c[t];if(i==="\\"){if(t+1===c.length)throw new W(T.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const o=c[t+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new W(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);s+=o,t+=2}else i==="`"?(n=!n,t++):i!=="."||n?(s+=i,t++):(r(),t++)}if(r(),n)throw new W(T.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new l2(a)}static emptyPath(){return new l2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(c){this.path=c}static fromPath(c){return new G(N1.fromString(c))}static fromName(c){return new G(N1.fromString(c).popFirst(5))}static empty(){return new G(N1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&N1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return N1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new G(new N1(c.slice()))}}function qb(e,c){const a=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,t=a1.fromTimestamp(s===1e9?new h2(a+1,0):new h2(a,s));return new M3(t,G.empty(),c)}function Ub(e){return new M3(e.readTime,e.key,-1)}class M3{constructor(c,a,s){this.readTime=c,this.documentKey=a,this.largestBatchId=s}static min(){return new M3(a1.min(),G.empty(),-1)}static max(){return new M3(a1.max(),G.empty(),-1)}}function $b(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=G.comparator(e.documentKey,c.documentKey),a!==0?a:v1(e.largestBatchId,c.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==Gb)throw e;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&c1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new x((s,t)=>{this.nextCallback=r=>{this.wrapSuccess(c,r).next(s,t)},this.catchCallback=r=>{this.wrapFailure(a,r).next(s,t)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof x?a:x.resolve(a)}catch(a){return x.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):x.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):x.reject(a)}static resolve(c){return new x((a,s)=>{a(c)})}static reject(c){return new x((a,s)=>{s(c)})}static waitFor(c){return new x((a,s)=>{let t=0,r=0,n=!1;c.forEach(i=>{++t,i.next(()=>{++r,n&&r===t&&a()},o=>s(o))}),n=!0,r===t&&a()})}static or(c){let a=x.resolve(!1);for(const s of c)a=a.next(t=>t?x.resolve(t):s());return a}static forEach(c,a){const s=[];return c.forEach((t,r)=>{s.push(a.call(this,t,r))}),this.waitFor(s)}static mapArray(c,a){return new x((s,t)=>{const r=c.length,n=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;a(c[l]).next(f=>{n[l]=f,++i,i===r&&s(n)},f=>t(f))}})}static doWhile(c,a){return new x((s,t)=>{const r=()=>{c()===!0?a().next(()=>{r()},t):s()};r()})}}function e8(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>a.writeSequenceNumber(s))}ut(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.ct&&this.ct(c),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function K5(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function Wb(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ic.at=-1;class $1{constructor(c,a){this.comparator=c,this.root=a||G1.EMPTY}insert(c,a){return new $1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,G1.BLACK,null,null))}remove(c){return new $1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,G1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const s=this.comparator(c,a.key);if(s===0)return a.value;s<0?a=a.left:s>0&&(a=a.right)}return null}indexOf(c){let a=0,s=this.root;for(;!s.isEmpty();){const t=this.comparator(c,s.key);if(t===0)return a+s.left.size;t<0?s=s.left:(a+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,s)=>(c(a,s),!1))}toString(){const c=[];return this.inorderTraversal((a,s)=>(c.push(`${a}:${s}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new b8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new b8(this.root,c,this.comparator,!1)}getReverseIterator(){return new b8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new b8(this.root,c,this.comparator,!0)}}class b8{constructor(c,a,s,t){this.isReverse=t,this.nodeStack=[];let r=1;for(;!c.isEmpty();)if(r=a?s(c.key,a):1,a&&t&&(r*=-1),r<0)c=this.isReverse?c.left:c.right;else{if(r===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class G1{constructor(c,a,s,t,r){this.key=c,this.value=a,this.color=s!=null?s:G1.RED,this.left=t!=null?t:G1.EMPTY,this.right=r!=null?r:G1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,s,t,r){return new G1(c!=null?c:this.key,a!=null?a:this.value,s!=null?s:this.color,t!=null?t:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,s){let t=this;const r=s(c,t.key);return t=r<0?t.copy(null,null,null,t.left.insert(c,a,s),null):r===0?t.copy(null,a,null,null,null):t.copy(null,null,null,null,t.right.insert(c,a,s)),t.fixUp()}removeMin(){if(this.left.isEmpty())return G1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let s,t=this;if(a(c,t.key)<0)t.left.isEmpty()||t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.remove(c,a),null);else{if(t.left.isRed()&&(t=t.rotateRight()),t.right.isEmpty()||t.right.isRed()||t.right.left.isRed()||(t=t.moveRedRight()),a(c,t.key)===0){if(t.right.isEmpty())return G1.EMPTY;s=t.right.min(),t=t.copy(s.key,s.value,null,null,t.right.removeMin())}t=t.copy(null,null,null,null,t.right.remove(c,a))}return t.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,G1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,G1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c1();const c=this.left.check();if(c!==this.right.check())throw c1();return c+(this.isRed()?0:1)}}G1.EMPTY=null,G1.RED=!0,G1.BLACK=!1;G1.EMPTY=new class{constructor(){this.size=0}get key(){throw c1()}get value(){throw c1()}get color(){throw c1()}get left(){throw c1()}get right(){throw c1()}copy(e,c,a,s,t){return this}insert(e,c,a){return new G1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(c){this.comparator=c,this.data=new $1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,s)=>(c(a),!1))}forEachInRange(c,a){const s=this.data.getIteratorFrom(c[0]);for(;s.hasNext();){const t=s.getNext();if(this.comparator(t.key,c[1])>=0)return;a(t.key)}}forEachWhile(c,a){let s;for(s=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();s.hasNext();)if(!c(s.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new is(this.data.getIterator())}getIteratorFrom(c){return new is(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(s=>{a=a.add(s)}),a}isEqual(c){if(!(c instanceof R1)||this.size!==c.size)return!1;const a=this.data.getIterator(),s=c.data.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(this.comparator(t,r)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new R1(this.comparator);return a.data=c,a}}class is{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(c){this.fields=c,c.sort(l2.comparator)}static empty(){return new j3([])}unionWith(c){let a=new R1(l2.comparator);for(const s of this.fields)a=a.add(s);for(const s of c)a=a.add(s);return new j3(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return T4(this.fields,c.fields,(a,s)=>a.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(c){this.binaryString=c}static fromBase64String(c){const a=atob(c);return new c2(a)}static fromUint8Array(c){const a=function(s){let t="";for(let r=0;r<s.length;++r)t+=String.fromCharCode(s[r]);return t}(c);return new c2(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return c=this.binaryString,btoa(c);var c}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let s=0;s<c.length;s++)a[s]=c.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return v1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}c2.EMPTY_BYTE_STRING=new c2("");const Kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function V3(e){if(I1(!!e),typeof e=="string"){let c=0;const a=Kb.exec(e);if(I1(!!a),a[1]){let t=a[1];t=(t+"000000000").substr(0,9),c=Number(t)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:c}}return{seconds:P1(e.seconds),nanos:P1(e.nanos)}}function P1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function E4(e){return typeof e=="string"?c2.fromBase64String(e):c2.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){var c,a;return((a=(((c=e==null?void 0:e.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function Qn(e){const c=e.mapValue.fields.__previous_value__;return Zn(c)?Qn(c):c}function P6(e){const c=V3(e.mapValue.fields.__local_write_time__.timestampValue);return new h2(c.seconds,c.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(c,a,s,t,r,n,i,o){this.databaseId=c,this.appId=a,this.persistenceKey=s,this.host=t,this.ssl=r,this.forceLongPolling=n,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class I6{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new I6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof I6&&c.projectId===this.projectId&&c.database===this.database}}function Z5(e){return e==null}function _7(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function X3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zn(e)?4:Qb(e)?9007199254740991:10:c1()}function U2(e,c){if(e===c)return!0;const a=X3(e);if(a!==X3(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return P6(e).isEqual(P6(c));case 3:return function(s,t){if(typeof s.timestampValue=="string"&&typeof t.timestampValue=="string"&&s.timestampValue.length===t.timestampValue.length)return s.timestampValue===t.timestampValue;const r=V3(s.timestampValue),n=V3(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(s,t){return E4(s.bytesValue).isEqual(E4(t.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(s,t){return P1(s.geoPointValue.latitude)===P1(t.geoPointValue.latitude)&&P1(s.geoPointValue.longitude)===P1(t.geoPointValue.longitude)}(e,c);case 2:return function(s,t){if("integerValue"in s&&"integerValue"in t)return P1(s.integerValue)===P1(t.integerValue);if("doubleValue"in s&&"doubleValue"in t){const r=P1(s.doubleValue),n=P1(t.doubleValue);return r===n?_7(r)===_7(n):isNaN(r)&&isNaN(n)}return!1}(e,c);case 9:return T4(e.arrayValue.values||[],c.arrayValue.values||[],U2);case 10:return function(s,t){const r=s.mapValue.fields||{},n=t.mapValue.fields||{};if(ns(r)!==ns(n))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(n[i]===void 0||!U2(r[i],n[i])))return!1;return!0}(e,c);default:return c1()}}function D6(e,c){return(e.values||[]).find(a=>U2(a,c))!==void 0}function P4(e,c){if(e===c)return 0;const a=X3(e),s=X3(c);if(a!==s)return v1(a,s);switch(a){case 0:case 9007199254740991:return 0;case 1:return v1(e.booleanValue,c.booleanValue);case 2:return function(t,r){const n=P1(t.integerValue||t.doubleValue),i=P1(r.integerValue||r.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,c);case 3:return os(e.timestampValue,c.timestampValue);case 4:return os(P6(e),P6(c));case 5:return v1(e.stringValue,c.stringValue);case 6:return function(t,r){const n=E4(t),i=E4(r);return n.compareTo(i)}(e.bytesValue,c.bytesValue);case 7:return function(t,r){const n=t.split("/"),i=r.split("/");for(let o=0;o<n.length&&o<i.length;o++){const l=v1(n[o],i[o]);if(l!==0)return l}return v1(n.length,i.length)}(e.referenceValue,c.referenceValue);case 8:return function(t,r){const n=v1(P1(t.latitude),P1(r.latitude));return n!==0?n:v1(P1(t.longitude),P1(r.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(t,r){const n=t.values||[],i=r.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=P4(n[o],i[o]);if(l)return l}return v1(n.length,i.length)}(e.arrayValue,c.arrayValue);case 10:return function(t,r){if(t===x8.mapValue&&r===x8.mapValue)return 0;if(t===x8.mapValue)return 1;if(r===x8.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let f=0;f<i.length&&f<l.length;++f){const h=v1(i[f],l[f]);if(h!==0)return h;const u=P4(n[i[f]],o[l[f]]);if(u!==0)return u}return v1(i.length,l.length)}(e.mapValue,c.mapValue);default:throw c1()}}function os(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return v1(e,c);const a=V3(e),s=V3(c),t=v1(a.seconds,s.seconds);return t!==0?t:v1(a.nanos,s.nanos)}function M4(e){return F7(e)}function F7(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const t=V3(s);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?E4(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,G.fromName(a).toString()):"geoPointValue"in e?`geo(${(c=e.geoPointValue).latitude},${c.longitude})`:"arrayValue"in e?function(s){let t="[",r=!0;for(const n of s.values||[])r?r=!1:t+=",",t+=F7(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(s){const t=Object.keys(s.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${F7(s.fields[i])}`;return r+"}"}(e.mapValue):c1();var c,a}function B7(e){return!!e&&"integerValue"in e}function oc(e){return!!e&&"arrayValue"in e}function ls(e){return!!e&&"nullValue"in e}function fs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Z0(e){return!!e&&"mapValue"in e}function u6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return K5(e.mapValue.fields,(a,s)=>c.mapValue.fields[a]=u6(s)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=u6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function Qb(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(c){this.value=c}static empty(){return new _2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let s=0;s<c.length-1;++s)if(a=(a.mapValue.fields||{})[c.get(s)],!Z0(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=u6(a)}setAll(c){let a=l2.emptyPath(),s={},t=[];c.forEach((n,i)=>{if(!a.isImmediateParentOf(i)){const o=this.getFieldsMap(a);this.applyChanges(o,s,t),s={},t=[],a=i.popLast()}n?s[i.lastSegment()]=u6(n):t.push(i.lastSegment())});const r=this.getFieldsMap(a);this.applyChanges(r,s,t)}delete(c){const a=this.field(c.popLast());Z0(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return U2(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let s=0;s<c.length;++s){let t=a.mapValue.fields[c.get(s)];Z0(t)&&t.mapValue.fields||(t={mapValue:{fields:{}}},a.mapValue.fields[c.get(s)]=t),a=t}return a.mapValue.fields}applyChanges(c,a,s){K5(a,(t,r)=>c[t]=r);for(const t of s)delete c[t]}clone(){return new _2(u6(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(c,a,s,t,r,n){this.key=c,this.documentType=a,this.version=s,this.readTime=t,this.data=r,this.documentState=n}static newInvalidDocument(c){return new j1(c,0,a1.min(),a1.min(),_2.empty(),0)}static newFoundDocument(c,a,s){return new j1(c,1,a,a1.min(),s,0)}static newNoDocument(c,a){return new j1(c,2,a,a1.min(),_2.empty(),0)}static newUnknownDocument(c,a){return new j1(c,3,a,a1.min(),_2.empty(),2)}convertToFoundDocument(c,a){return this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=_2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=_2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=a1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof j1&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new j1(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(c,a=null,s=[],t=[],r=null,n=null,i=null){this.path=c,this.collectionGroup=a,this.orderBy=s,this.filters=t,this.limit=r,this.startAt=n,this.endAt=i,this.ht=null}}function hs(e,c=null,a=[],s=[],t=null,r=null,n=null){return new Yb(e,c,a,s,t,r,n)}function lc(e){const c=f1(e);if(c.ht===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(s=>{return(t=s).field.canonicalString()+t.op.toString()+M4(t.value);var t}).join(","),a+="|ob:",a+=c.orderBy.map(s=>function(t){return t.field.canonicalString()+t.dir}(s)).join(","),Z5(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(s=>M4(s)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(s=>M4(s)).join(",")),c.ht=a}return c.ht}function Xb(e){let c=e.path.canonicalString();return e.collectionGroup!==null&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map(a=>{return`${(s=a).field.canonicalString()} ${s.op} ${M4(s.value)}`;var s}).join(", ")}]`),Z5(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map(a=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(a)).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>M4(a)).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>M4(a)).join(",")),`Target(${c})`}function fc(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let t=0;t<e.orderBy.length;t++)if(!nx(e.orderBy[t],c.orderBy[t]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let t=0;t<e.filters.length;t++)if(a=e.filters[t],s=c.filters[t],a.op!==s.op||!a.field.isEqual(s.field)||!U2(a.value,s.value))return!1;var a,s;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!ms(e.startAt,c.startAt)&&ms(e.endAt,c.endAt)}function O7(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class f2 extends class{}{constructor(c,a,s){super(),this.field=c,this.op=a,this.value=s}static create(c,a,s){return c.isKeyField()?a==="in"||a==="not-in"?this.lt(c,a,s):new Jb(c,a,s):a==="array-contains"?new ax(c,s):a==="in"?new sx(c,s):a==="not-in"?new tx(c,s):a==="array-contains-any"?new rx(c,s):new f2(c,a,s)}static lt(c,a,s){return a==="in"?new cx(c,s):new ex(c,s)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.ft(P4(a,this.value)):a!==null&&X3(this.value)===X3(a)&&this.ft(P4(a,this.value))}ft(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return c1()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Jb extends f2{constructor(c,a,s){super(c,a,s),this.key=G.fromName(s.referenceValue)}matches(c){const a=G.comparator(c.key,this.key);return this.ft(a)}}class cx extends f2{constructor(c,a){super(c,"in",a),this.keys=Yn("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class ex extends f2{constructor(c,a){super(c,"not-in",a),this.keys=Yn("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function Yn(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(s=>G.fromName(s.referenceValue))}class ax extends f2{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return oc(a)&&D6(a.arrayValue,this.value)}}class sx extends f2{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&D6(this.value.arrayValue,a)}}class tx extends f2{constructor(c,a){super(c,"not-in",a)}matches(c){if(D6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!D6(this.value.arrayValue,a)}}class rx extends f2{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!oc(a)||!a.arrayValue.values)&&a.arrayValue.values.some(s=>D6(this.value.arrayValue,s))}}class i5{constructor(c,a){this.position=c,this.inclusive=a}}class m6{constructor(c,a="asc"){this.field=c,this.dir=a}}function nx(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}function us(e,c,a){let s=0;for(let t=0;t<e.position.length;t++){const r=c[t],n=e.position[t];if(r.field.isKeyField()?s=G.comparator(G.fromName(n.referenceValue),a.key):s=P4(n,a.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ms(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!U2(e.position[a],c.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(c,a=null,s=[],t=[],r=null,n="F",i=null,o=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=s,this.filters=t,this.limit=r,this.limitType=n,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function ix(e,c,a,s,t,r,n,i){return new Q5(e,c,a,s,t,r,n,i)}function Xn(e){return new Q5(e)}function vs(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ox(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function lx(e){for(const c of e.filters)if(c.dt())return c.field;return null}function fx(e){return e.collectionGroup!==null}function R6(e){const c=f1(e);if(c._t===null){c._t=[];const a=lx(c),s=ox(c);if(a!==null&&s===null)a.isKeyField()||c._t.push(new m6(a)),c._t.push(new m6(l2.keyField(),"asc"));else{let t=!1;for(const r of c.explicitOrderBy)c._t.push(r),r.field.isKeyField()&&(t=!0);if(!t){const r=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new m6(l2.keyField(),r))}}}return c._t}function X2(e){const c=f1(e);if(!c.wt)if(c.limitType==="F")c.wt=hs(c.path,c.collectionGroup,R6(c),c.filters,c.limit,c.startAt,c.endAt);else{const a=[];for(const r of R6(c)){const n=r.dir==="desc"?"asc":"desc";a.push(new m6(r.field,n))}const s=c.endAt?new i5(c.endAt.position,c.endAt.inclusive):null,t=c.startAt?new i5(c.startAt.position,c.startAt.inclusive):null;c.wt=hs(c.path,c.collectionGroup,a,c.filters,c.limit,s,t)}return c.wt}function q7(e,c,a){return new Q5(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function Y5(e,c){return fc(X2(e),X2(c))&&e.limitType===c.limitType}function Jn(e){return`${lc(X2(e))}|lt:${e.limitType}`}function U7(e){return`Query(target=${Xb(X2(e))}; limitType=${e.limitType})`}function hc(e,c){return c.isFoundDocument()&&function(a,s){const t=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(t):G.isDocumentKey(a.path)?a.path.isEqual(t):a.path.isImmediateParentOf(t)}(e,c)&&function(a,s){for(const t of a.explicitOrderBy)if(!t.field.isKeyField()&&s.data.field(t.field)===null)return!1;return!0}(e,c)&&function(a,s){for(const t of a.filters)if(!t.matches(s))return!1;return!0}(e,c)&&function(a,s){return!(a.startAt&&!function(t,r,n){const i=us(t,r,n);return t.inclusive?i<=0:i<0}(a.startAt,R6(a),s)||a.endAt&&!function(t,r,n){const i=us(t,r,n);return t.inclusive?i>=0:i>0}(a.endAt,R6(a),s))}(e,c)}function hx(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ci(e){return(c,a)=>{let s=!1;for(const t of R6(e)){const r=ux(t,c,a);if(r!==0)return r;s=s||t.field.isKeyField()}return 0}}function ux(e,c,a){const s=e.field.isKeyField()?G.comparator(c.key,a.key):function(t,r,n){const i=r.data.field(t),o=n.data.field(t);return i!==null&&o!==null?P4(i,o):c1()}(e.field,c,a);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return c1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(e,c){if(e.gt){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_7(c)?"-0":c}}function vx(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(){this._=void 0}}function Cx(e,c,a){return e instanceof $7?function(s,t){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(a,c):e instanceof o5?ei(e,c):e instanceof l5?ai(e,c):function(s,t){const r=dx(s,t),n=Cs(r)+Cs(s.yt);return B7(r)&&B7(s.yt)?vx(n):mx(s.It,n)}(e,c)}function px(e,c,a){return e instanceof o5?ei(e,c):e instanceof l5?ai(e,c):a}function dx(e,c){return e instanceof G7?B7(a=c)||function(s){return!!s&&"doubleValue"in s}(a)?c:{integerValue:0}:null;var a}class $7 extends X5{}class o5 extends X5{constructor(c){super(),this.elements=c}}function ei(e,c){const a=si(c);for(const s of e.elements)a.some(t=>U2(t,s))||a.push(s);return{arrayValue:{values:a}}}class l5 extends X5{constructor(c){super(),this.elements=c}}function ai(e,c){let a=si(c);for(const s of e.elements)a=a.filter(t=>!U2(t,s));return{arrayValue:{values:a}}}class G7 extends X5{constructor(c,a){super(),this.It=c,this.yt=a}}function Cs(e){return P1(e.integerValue||e.doubleValue)}function si(e){return oc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function zx(e,c){return e.field.isEqual(c.field)&&function(a,s){return a instanceof o5&&s instanceof o5||a instanceof l5&&s instanceof l5?T4(a.elements,s.elements,U2):a instanceof G7&&s instanceof G7?U2(a.yt,s.yt):a instanceof $7&&s instanceof $7}(e.transform,c.transform)}class W3{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new W3}static exists(c){return new W3(void 0,c)}static updateTime(c){return new W3(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function F8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class uc{}function ti(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new Mx(e.key,W3.none()):new mc(e.key,e.data,W3.none());{const a=e.data,s=_2.empty();let t=new R1(l2.comparator);for(let r of c.fields)if(!t.has(r)){let n=a.field(r);n===null&&r.length>1&&(r=r.popLast(),n=a.field(r)),n===null?s.delete(r):s.set(r,n),t=t.add(r)}return new J5(e.key,s,new j3(t.toArray()),W3.none())}}function Hx(e,c,a){e instanceof mc?function(s,t,r){const n=s.value.clone(),i=ds(s.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,c,a):e instanceof J5?function(s,t,r){if(!F8(s.precondition,t))return void t.convertToUnknownDocument(r.version);const n=ds(s.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(ri(s)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,c,a):function(s,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,c,a)}function v6(e,c,a,s){return e instanceof mc?function(t,r,n,i){if(!F8(t.precondition,r))return n;const o=t.value.clone(),l=zs(t.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(e,c,a,s):e instanceof J5?function(t,r,n,i){if(!F8(t.precondition,r))return n;const o=zs(t.fieldTransforms,i,r),l=r.data;return l.setAll(ri(t)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),n===null?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(f=>f.field))}(e,c,a,s):function(t,r,n){return F8(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):n}(e,c,a)}function ps(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&T4(a,s,(t,r)=>zx(t,r))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class mc extends uc{constructor(c,a,s,t=[]){super(),this.key=c,this.value=a,this.precondition=s,this.fieldTransforms=t,this.type=0}getFieldMask(){return null}}class J5 extends uc{constructor(c,a,s,t,r=[]){super(),this.key=c,this.data=a,this.fieldMask=s,this.precondition=t,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ri(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const s=e.data.field(a);c.set(a,s)}}),c}function ds(e,c,a){const s=new Map;I1(e.length===a.length);for(let t=0;t<a.length;t++){const r=e[t],n=r.transform,i=c.data.field(r.field);s.set(r.field,px(n,i,a[t]))}return s}function zs(e,c,a){const s=new Map;for(const t of e){const r=t.transform,n=a.data.field(t.field);s.set(t.field,Cx(r,n,c))}return s}class Mx extends uc{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(c){this.count=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E1,r1;function ni(e){if(e===void 0)return Y2("GRPC error has no .code"),T.UNKNOWN;switch(e){case E1.OK:return T.OK;case E1.CANCELLED:return T.CANCELLED;case E1.UNKNOWN:return T.UNKNOWN;case E1.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case E1.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case E1.INTERNAL:return T.INTERNAL;case E1.UNAVAILABLE:return T.UNAVAILABLE;case E1.UNAUTHENTICATED:return T.UNAUTHENTICATED;case E1.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case E1.NOT_FOUND:return T.NOT_FOUND;case E1.ALREADY_EXISTS:return T.ALREADY_EXISTS;case E1.PERMISSION_DENIED:return T.PERMISSION_DENIED;case E1.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case E1.ABORTED:return T.ABORTED;case E1.OUT_OF_RANGE:return T.OUT_OF_RANGE;case E1.UNIMPLEMENTED:return T.UNIMPLEMENTED;case E1.DATA_LOSS:return T.DATA_LOSS;default:return c1()}}(r1=E1||(E1={}))[r1.OK=0]="OK",r1[r1.CANCELLED=1]="CANCELLED",r1[r1.UNKNOWN=2]="UNKNOWN",r1[r1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r1[r1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r1[r1.NOT_FOUND=5]="NOT_FOUND",r1[r1.ALREADY_EXISTS=6]="ALREADY_EXISTS",r1[r1.PERMISSION_DENIED=7]="PERMISSION_DENIED",r1[r1.UNAUTHENTICATED=16]="UNAUTHENTICATED",r1[r1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r1[r1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r1[r1.ABORTED=10]="ABORTED",r1[r1.OUT_OF_RANGE=11]="OUT_OF_RANGE",r1[r1.UNIMPLEMENTED=12]="UNIMPLEMENTED",r1[r1.INTERNAL=13]="INTERNAL",r1[r1.UNAVAILABLE=14]="UNAVAILABLE",r1[r1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s!==void 0){for(const[t,r]of s)if(this.equalsFn(t,c))return r}}has(c){return this.get(c)!==void 0}set(c,a){const s=this.mapKeyFn(c),t=this.inner[s];if(t===void 0)return this.inner[s]=[[c,a]],void this.innerSize++;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return void(t[r]=[c,a]);t.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s===void 0)return!1;for(let t=0;t<s.length;t++)if(this.equalsFn(s[t][0],c))return s.length===1?delete this.inner[a]:s.splice(t,1),this.innerSize--,!0;return!1}forEach(c){K5(this.inner,(a,s)=>{for(const[t,r]of s)c(t,r)})}isEmpty(){return Wb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new $1(G.comparator);function g3(){return gx}const ii=new $1(G.comparator);function s6(...e){let c=ii;for(const a of e)c=c.insert(a.key,a);return c}function Lx(e){let c=ii;return e.forEach((a,s)=>c=c.insert(a,s.overlayedDocument)),c}function _3(){return C6()}function oi(){return C6()}function C6(){return new j4(e=>e.toString(),(e,c)=>e.isEqual(c))}new $1(G.comparator);const bx=new R1(G.comparator);function o1(...e){let c=bx;for(const a of e)c=c.add(a);return c}const xx=new R1(v1);function li(){return xx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(c,a,s,t,r){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=s,this.documentUpdates=t,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(c,a,s){const t=new Map;return t.set(c,a8.createSynthesizedTargetChangeForCurrentChange(c,a,s)),new c0(a1.min(),t,li(),g3(),o1())}}class a8{constructor(c,a,s,t,r){this.resumeToken=c,this.current=a,this.addedDocuments=s,this.modifiedDocuments=t,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(c,a,s){return new a8(s,a,o1(),o1(),o1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B8{constructor(c,a,s,t){this.Tt=c,this.removedTargetIds=a,this.key=s,this.Et=t}}class fi{constructor(c,a){this.targetId=c,this.At=a}}class hi{constructor(c,a,s=c2.EMPTY_BYTE_STRING,t=null){this.state=c,this.targetIds=a,this.resumeToken=s,this.cause=t}}class Hs{constructor(){this.Rt=0,this.bt=Vs(),this.Pt=c2.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(c){c.approximateByteSize()>0&&(this.Vt=!0,this.Pt=c)}xt(){let c=o1(),a=o1(),s=o1();return this.bt.forEach((t,r)=>{switch(r){case 0:c=c.add(t);break;case 2:a=a.add(t);break;case 1:s=s.add(t);break;default:c1()}}),new a8(this.Pt,this.vt,c,a,s)}Nt(){this.Vt=!1,this.bt=Vs()}kt(c,a){this.Vt=!0,this.bt=this.bt.insert(c,a)}Ot(c){this.Vt=!0,this.bt=this.bt.remove(c)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class yx{constructor(c){this.Bt=c,this.Lt=new Map,this.Ut=g3(),this.qt=Ms(),this.Kt=new R1(v1)}Gt(c){for(const a of c.Tt)c.Et&&c.Et.isFoundDocument()?this.Qt(a,c.Et):this.jt(a,c.key,c.Et);for(const a of c.removedTargetIds)this.jt(a,c.key,c.Et)}Wt(c){this.forEachTarget(c,a=>{const s=this.zt(a);switch(c.state){case 0:this.Ht(a)&&s.Ct(c.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(c.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(a);break;case 3:this.Ht(a)&&(s.$t(),s.Ct(c.resumeToken));break;case 4:this.Ht(a)&&(this.Jt(a),s.Ct(c.resumeToken));break;default:c1()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.Lt.forEach((s,t)=>{this.Ht(t)&&a(t)})}Yt(c){const a=c.targetId,s=c.At.count,t=this.Xt(a);if(t){const r=t.target;if(O7(r))if(s===0){const n=new G(r.path);this.jt(a,n,j1.newNoDocument(n,a1.min()))}else I1(s===1);else this.Zt(a)!==s&&(this.Jt(a),this.Kt=this.Kt.add(a))}}te(c){const a=new Map;this.Lt.forEach((r,n)=>{const i=this.Xt(n);if(i){if(r.current&&O7(i.target)){const o=new G(i.target.path);this.Ut.get(o)!==null||this.ee(n,o)||this.jt(n,o,j1.newNoDocument(o,c))}r.Dt&&(a.set(n,r.xt()),r.Nt())}});let s=o1();this.qt.forEach((r,n)=>{let i=!0;n.forEachWhile(o=>{const l=this.Xt(o);return!l||l.purpose===2||(i=!1,!1)}),i&&(s=s.add(r))}),this.Ut.forEach((r,n)=>n.setReadTime(c));const t=new c0(c,a,this.Kt,this.Ut,s);return this.Ut=g3(),this.qt=Ms(),this.Kt=new R1(v1),t}Qt(c,a){if(!this.Ht(c))return;const s=this.ee(c,a.key)?2:0;this.zt(c).kt(a.key,s),this.Ut=this.Ut.insert(a.key,a),this.qt=this.qt.insert(a.key,this.ne(a.key).add(c))}jt(c,a,s){if(!this.Ht(c))return;const t=this.zt(c);this.ee(c,a)?t.kt(a,1):t.Ot(a),this.qt=this.qt.insert(a,this.ne(a).delete(c)),s&&(this.Ut=this.Ut.insert(a,s))}removeTarget(c){this.Lt.delete(c)}Zt(c){const a=this.zt(c).xt();return this.Bt.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Mt(c){this.zt(c).Mt()}zt(c){let a=this.Lt.get(c);return a||(a=new Hs,this.Lt.set(c,a)),a}ne(c){let a=this.qt.get(c);return a||(a=new R1(v1),this.qt=this.qt.insert(c,a)),a}Ht(c){const a=this.Xt(c)!==null;return a||B("WatchChangeAggregator","Detected inactive target",c),a}Xt(c){const a=this.Lt.get(c);return a&&a.St?null:this.Bt.se(c)}Jt(c){this.Lt.set(c,new Hs),this.Bt.getRemoteKeysForTarget(c).forEach(a=>{this.jt(c,a,null)})}ee(c,a){return this.Bt.getRemoteKeysForTarget(c).has(a)}}function Ms(){return new $1(G.comparator)}function Vs(){return new $1(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Nx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wx{constructor(c,a){this.databaseId=c,this.gt=a}}function kx(e,c){return e.gt?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Ax(e,c){return e.gt?c.toBase64():c.toUint8Array()}function _6(e){return I1(!!e),a1.fromTimestamp(function(c){const a=V3(c);return new h2(a.seconds,a.nanos)}(e))}function Tx(e,c){return function(a){return new N1(["projects",a.projectId,"databases",a.database])}(e).child("documents").child(c).canonicalString()}function ui(e){const c=N1.fromString(e);return I1(Ci(c)),c}function Q0(e,c){const a=ui(c);if(a.get(1)!==e.databaseId.projectId)throw new W(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new W(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new G(mi(a))}function j7(e,c){return Tx(e.databaseId,c)}function Ex(e){const c=ui(e);return c.length===4?N1.emptyPath():mi(c)}function gs(e){return new N1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mi(e){return I1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Px(e,c){let a;if("targetChange"in c){c.targetChange;const s=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:c1()}(c.targetChange.targetChangeType||"NO_CHANGE"),t=c.targetChange.targetIds||[],r=function(o,l){return o.gt?(I1(l===void 0||typeof l=="string"),c2.fromBase64String(l||"")):(I1(l===void 0||l instanceof Uint8Array),c2.fromUint8Array(l||new Uint8Array))}(e,c.targetChange.resumeToken),n=c.targetChange.cause,i=n&&function(o){const l=o.code===void 0?T.UNKNOWN:ni(o.code);return new W(l,o.message||"")}(n);a=new hi(s,t,r,i||null)}else if("documentChange"in c){c.documentChange;const s=c.documentChange;s.document,s.document.name,s.document.updateTime;const t=Q0(e,s.document.name),r=_6(s.document.updateTime),n=new _2({mapValue:{fields:s.document.fields}}),i=j1.newFoundDocument(t,r,n),o=s.targetIds||[],l=s.removedTargetIds||[];a=new B8(o,l,i.key,i)}else if("documentDelete"in c){c.documentDelete;const s=c.documentDelete;s.document;const t=Q0(e,s.document),r=s.readTime?_6(s.readTime):a1.min(),n=j1.newNoDocument(t,r),i=s.removedTargetIds||[];a=new B8([],i,n.key,n)}else if("documentRemove"in c){c.documentRemove;const s=c.documentRemove;s.document;const t=Q0(e,s.document),r=s.removedTargetIds||[];a=new B8([],r,t,null)}else{if(!("filter"in c))return c1();{c.filter;const s=c.filter;s.targetId;const t=s.count||0,r=new Vx(t),n=s.targetId;a=new fi(n,r)}}return a}function Ix(e,c){return{documents:[j7(e,c.path)]}}function Dx(e,c){const a={structuredQuery:{}},s=c.path;c.collectionGroup!==null?(a.parent=j7(e,s),a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(a.parent=j7(e,s.popLast()),a.structuredQuery.from=[{collectionId:s.lastSegment()}]);const t=function(o){if(o.length===0)return;const l=o.map(f=>function(h){if(h.op==="=="){if(fs(h.value))return{unaryFilter:{field:o4(h.field),op:"IS_NAN"}};if(ls(h.value))return{unaryFilter:{field:o4(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(fs(h.value))return{unaryFilter:{field:o4(h.field),op:"IS_NOT_NAN"}};if(ls(h.value))return{unaryFilter:{field:o4(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:o4(h.field),op:Bx(h.op),value:h.value}}}(f));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(c.filters);t&&(a.structuredQuery.where=t);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:o4(f.field),direction:Fx(f.dir)}}(l))}(c.orderBy);r&&(a.structuredQuery.orderBy=r);const n=function(o,l){return o.gt||Z5(l)?l:{value:l}}(e,c.limit);var i;return n!==null&&(a.structuredQuery.limit=n),c.startAt&&(a.structuredQuery.startAt={before:(i=c.startAt).inclusive,values:i.position}),c.endAt&&(a.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(c.endAt)),a}function Rx(e){let c=Ex(e.parent);const a=e.structuredQuery,s=a.from?a.from.length:0;let t=null;if(s>0){I1(s===1);const f=a.from[0];f.allDescendants?t=f.collectionId:c=c.child(f.collectionId)}let r=[];a.where&&(r=vi(a.where));let n=[];a.orderBy&&(n=a.orderBy.map(f=>function(h){return new m6(u4(h.field),function(u){switch(u){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let i=null;a.limit&&(i=function(f){let h;return h=typeof f=="object"?f.value:f,Z5(h)?null:h}(a.limit));let o=null;a.startAt&&(o=function(f){const h=!!f.before,u=f.values||[];return new i5(u,h)}(a.startAt));let l=null;return a.endAt&&(l=function(f){const h=!f.before,u=f.values||[];return new i5(u,h)}(a.endAt)),ix(c,t,n,r,i,"F",o,l)}function _x(e,c){const a=function(s,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return c1()}}(0,c.purpose);return a==null?null:{"goog-listen-tags":a}}function vi(e){return e?e.unaryFilter!==void 0?[qx(e)]:e.fieldFilter!==void 0?[Ox(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(c=>vi(c)).reduce((c,a)=>c.concat(a)):c1():[]}function Fx(e){return Sx[e]}function Bx(e){return Nx[e]}function o4(e){return{fieldPath:e.canonicalString()}}function u4(e){return l2.fromServerFormat(e.fieldPath)}function Ox(e){return f2.create(u4(e.fieldFilter.field),function(c){switch(c){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c1()}}(e.fieldFilter.op),e.fieldFilter.value)}function qx(e){switch(e.unaryFilter.op){case"IS_NAN":const c=u4(e.unaryFilter.field);return f2.create(c,"==",{doubleValue:NaN});case"IS_NULL":const a=u4(e.unaryFilter.field);return f2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=u4(e.unaryFilter.field);return f2.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const t=u4(e.unaryFilter.field);return f2.create(t,"!=",{nullValue:"NULL_VALUE"});default:return c1()}}function Ci(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(c,a,s,t){this.batchId=c,this.localWriteTime=a,this.baseMutations=s,this.mutations=t}applyToRemoteDocument(c,a){const s=a.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(c.key)&&Hx(r,c,s[t])}}applyToLocalView(c,a){for(const s of this.baseMutations)s.key.isEqual(c.key)&&(a=v6(s,c,a,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(c.key)&&(a=v6(s,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const s=oi();return this.mutations.forEach(t=>{const r=c.get(t.key),n=r.overlayedDocument;let i=this.applyToLocalView(n,r.mutatedFields);i=a.has(t.key)?null:i;const o=ti(n,i);o!==null&&s.set(t.key,o),n.isValidDocument()||n.convertToNoDocument(a1.min())}),s}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),o1())}isEqual(c){return this.batchId===c.batchId&&T4(this.mutations,c.mutations,(a,s)=>ps(a,s))&&T4(this.baseMutations,c.baseMutations,(a,s)=>ps(a,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(c,a,s,t,r=a1.min(),n=a1.min(),i=c2.EMPTY_BYTE_STRING){this.target=c,this.targetId=a,this.purpose=s,this.sequenceNumber=t,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=n,this.resumeToken=i}withSequenceNumber(c){return new K3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(c,a){return new K3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c)}withLastLimboFreeSnapshotVersion(c){return new K3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(c){this.re=c}}function jx(e){const c=Rx({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?q7(c,c.limit,"L"):c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.Ye=new Kx}addToCollectionParentIndex(c,a){return this.Ye.add(a),x.resolve()}getCollectionParents(c,a){return x.resolve(this.Ye.getEntries(a))}addFieldIndex(c,a){return x.resolve()}deleteFieldIndex(c,a){return x.resolve()}getDocumentsMatchingTarget(c,a){return x.resolve(null)}getIndexType(c,a){return x.resolve(0)}getFieldIndexes(c,a){return x.resolve([])}getNextCollectionGroupToUpdate(c){return x.resolve(null)}getMinOffset(c,a){return x.resolve(M3.min())}getMinOffsetFromCollectionGroup(c,a){return x.resolve(M3.min())}updateCollectionGroup(c,a,s){return x.resolve()}updateIndexEntries(c,a){return x.resolve()}}class Kx{constructor(){this.index={}}add(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a]||new R1(N1.comparator),r=!t.has(s);return this.index[a]=t.add(s),r}has(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a];return t&&t.has(s)}getEntries(c){return(this.index[c]||new R1(N1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(c){this.bn=c}next(){return this.bn+=2,this.bn}static Pn(){return new I4(0)}static vn(){return new I4(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.changes=new j4(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,j1.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const s=this.changes.get(a);return s!==void 0?x.resolve(s):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(c,a,s,t){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=s,this.indexManager=t}getDocument(c,a){let s=null;return this.documentOverlayCache.getOverlay(c,a).next(t=>(s=t,this.getBaseDocument(c,a,s))).next(t=>(s!==null&&v6(s.mutation,t,j3.empty(),h2.now()),t))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.getLocalViewOfDocuments(c,s,o1()).next(()=>s))}getLocalViewOfDocuments(c,a,s=o1()){const t=_3();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,s).next(r=>{let n=s6();return r.forEach((i,o)=>{n=n.insert(i,o.overlayedDocument)}),n}))}getOverlayedDocuments(c,a){const s=_3();return this.populateOverlays(c,s,a).next(()=>this.computeViews(c,a,s,o1()))}populateOverlays(c,a,s){const t=[];return s.forEach(r=>{a.has(r)||t.push(r)}),this.documentOverlayCache.getOverlays(c,t).next(r=>{r.forEach((n,i)=>{a.set(n,i)})})}computeViews(c,a,s,t){let r=g3();const n=C6(),i=C6();return a.forEach((o,l)=>{const f=s.get(l.key);t.has(l.key)&&(f===void 0||f.mutation instanceof J5)?r=r.insert(l.key,l):f!==void 0&&(n.set(l.key,f.mutation.getFieldMask()),v6(f.mutation,l,f.mutation.getFieldMask(),h2.now()))}),this.recalculateAndSaveOverlays(c,r).next(o=>(o.forEach((l,f)=>n.set(l,f)),a.forEach((l,f)=>{var h;return i.set(l,new Qx(f,(h=n.get(l))!==null&&h!==void 0?h:null))}),i))}recalculateAndSaveOverlays(c,a){const s=C6();let t=new $1((n,i)=>n-i),r=o1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(n=>{for(const i of n)i.keys().forEach(o=>{const l=a.get(o);if(l===null)return;let f=s.get(o)||j3.empty();f=i.applyToLocalView(l,f),s.set(o,f);const h=(t.get(i.batchId)||o1()).add(o);t=t.insert(i.batchId,h)})}).next(()=>{const n=[],i=t.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,h=oi();f.forEach(u=>{if(!r.has(u)){const C=ti(a.get(u),s.get(u));C!==null&&h.set(u,C),r=r.add(u)}}),n.push(this.documentOverlayCache.saveOverlays(c,l,h))}return x.waitFor(n)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.recalculateAndSaveOverlays(c,s))}getDocumentsMatchingQuery(c,a,s){return function(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):fx(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,s):this.getDocumentsMatchingCollectionQuery(c,a,s)}getNextDocuments(c,a,s,t){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,s,t).next(r=>{const n=t-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,s.largestBatchId,t-r.size):x.resolve(_3());let i=-1,o=r;return n.next(l=>x.forEach(l,(f,h)=>(i<h.largestBatchId&&(i=h.largestBatchId),r.get(f)?x.resolve():this.getBaseDocument(c,f,h).next(u=>{o=o.insert(f,u)}))).next(()=>this.populateOverlays(c,l,r)).next(()=>this.computeViews(c,o,l,o1())).next(f=>({batchId:i,changes:Lx(f)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new G(a)).next(s=>{let t=s6();return s.isFoundDocument()&&(t=t.insert(s.key,s)),t})}getDocumentsMatchingCollectionGroupQuery(c,a,s){const t=a.collectionGroup;let r=s6();return this.indexManager.getCollectionParents(c,t).next(n=>x.forEach(n,i=>{const o=function(l,f){return new Q5(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(a,i.child(t));return this.getDocumentsMatchingCollectionQuery(c,o,s).next(l=>{l.forEach((f,h)=>{r=r.insert(f,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(c,a,s){let t;return this.remoteDocumentCache.getAllFromCollection(c,a.path,s).next(r=>(t=r,this.documentOverlayCache.getOverlaysForCollection(c,a.path,s.largestBatchId))).next(r=>{r.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,j1.newInvalidDocument(l)))});let n=s6();return t.forEach((i,o)=>{const l=r.get(i);l!==void 0&&v6(l.mutation,o,j3.empty(),h2.now()),hc(a,o)&&(n=n.insert(i,o))}),n})}getBaseDocument(c,a,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(c,a):x.resolve(j1.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(c){this.It=c,this.Zn=new Map,this.ts=new Map}getBundleMetadata(c,a){return x.resolve(this.Zn.get(a))}saveBundleMetadata(c,a){var s;return this.Zn.set(a.id,{id:(s=a).id,version:s.version,createTime:_6(s.createTime)}),x.resolve()}getNamedQuery(c,a){return x.resolve(this.ts.get(a))}saveNamedQuery(c,a){return this.ts.set(a.name,function(s){return{name:s.name,query:jx(s.bundledQuery),readTime:_6(s.readTime)}}(a)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.overlays=new $1(G.comparator),this.es=new Map}getOverlay(c,a){return x.resolve(this.overlays.get(a))}getOverlays(c,a){const s=_3();return x.forEach(a,t=>this.getOverlay(c,t).next(r=>{r!==null&&s.set(t,r)})).next(()=>s)}saveOverlays(c,a,s){return s.forEach((t,r)=>{this.ue(c,a,r)}),x.resolve()}removeOverlaysForBatchId(c,a,s){const t=this.es.get(s);return t!==void 0&&(t.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),x.resolve()}getOverlaysForCollection(c,a,s){const t=_3(),r=a.length+1,n=new G(a.child("")),i=this.overlays.getIteratorFrom(n);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!a.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>s&&t.set(o.getKey(),o)}return x.resolve(t)}getOverlaysForCollectionGroup(c,a,s,t){let r=new $1((l,f)=>l-f);const n=this.overlays.getIterator();for(;n.hasNext();){const l=n.getNext().value;if(l.getKey().getCollectionGroup()===a&&l.largestBatchId>s){let f=r.get(l.largestBatchId);f===null&&(f=_3(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=_3(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=t)););return x.resolve(i)}ue(c,a,s){const t=this.overlays.get(s.key);if(t!==null){const n=this.es.get(t.largestBatchId).delete(s.key);this.es.set(t.largestBatchId,n)}this.overlays=this.overlays.insert(s.key,new $x(a,s));let r=this.es.get(a);r===void 0&&(r=o1(),this.es.set(a,r)),this.es.set(a,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.ns=new R1(O1.ss),this.rs=new R1(O1.os)}isEmpty(){return this.ns.isEmpty()}addReference(c,a){const s=new O1(c,a);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(c,a){c.forEach(s=>this.addReference(s,a))}removeReference(c,a){this.cs(new O1(c,a))}hs(c,a){c.forEach(s=>this.removeReference(s,a))}ls(c){const a=new G(new N1([])),s=new O1(a,c),t=new O1(a,c+1),r=[];return this.rs.forEachInRange([s,t],n=>{this.cs(n),r.push(n.key)}),r}fs(){this.ns.forEach(c=>this.cs(c))}cs(c){this.ns=this.ns.delete(c),this.rs=this.rs.delete(c)}ds(c){const a=new G(new N1([])),s=new O1(a,c),t=new O1(a,c+1);let r=o1();return this.rs.forEachInRange([s,t],n=>{r=r.add(n.key)}),r}containsKey(c){const a=new O1(c,0),s=this.ns.firstAfterOrEqual(a);return s!==null&&c.isEqual(s.key)}}class O1{constructor(c,a){this.key=c,this._s=a}static ss(c,a){return G.comparator(c.key,a.key)||v1(c._s,a._s)}static os(c,a){return v1(c._s,a._s)||G.comparator(c.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.ws=1,this.gs=new R1(O1.ss)}checkEmpty(c){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,s,t){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const n=new Ux(r,a,s,t);this.mutationQueue.push(n);for(const i of t)this.gs=this.gs.add(new O1(i.key,r)),this.indexManager.addToCollectionParentIndex(c,i.key.path.popLast());return x.resolve(n)}lookupMutationBatch(c,a){return x.resolve(this.ys(a))}getNextMutationBatchAfterBatchId(c,a){const s=a+1,t=this.ps(s),r=t<0?0:t;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(c){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const s=new O1(a,0),t=new O1(a,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,t],n=>{const i=this.ys(n._s);r.push(i)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(c,a){let s=new R1(v1);return a.forEach(t=>{const r=new O1(t,0),n=new O1(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,n],i=>{s=s.add(i._s)})}),x.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(c,a){const s=a.path,t=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const n=new O1(new G(r),0);let i=new R1(v1);return this.gs.forEachWhile(o=>{const l=o.key.path;return!!s.isPrefixOf(l)&&(l.length===t&&(i=i.add(o._s)),!0)},n),x.resolve(this.Is(i))}Is(c){const a=[];return c.forEach(s=>{const t=this.ys(s);t!==null&&a.push(t)}),a}removeMutationBatch(c,a){I1(this.Ts(a.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return x.forEach(a.mutations,t=>{const r=new O1(t.key,a.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(c,t.key)}).next(()=>{this.gs=s})}An(c){}containsKey(c,a){const s=new O1(a,0),t=this.gs.firstAfterOrEqual(s);return x.resolve(a.isEqual(t&&t.key))}performConsistencyCheck(c){return this.mutationQueue.length,x.resolve()}Ts(c,a){return this.ps(c)}ps(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}ys(c){const a=this.ps(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(c){this.Es=c,this.docs=new $1(G.comparator),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const s=a.key,t=this.docs.get(s),r=t?t.size:0,n=this.Es(a);return this.docs=this.docs.insert(s,{document:a.mutableCopy(),size:n}),this.size+=n-r,this.indexManager.addToCollectionParentIndex(c,s.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const s=this.docs.get(a);return x.resolve(s?s.document.mutableCopy():j1.newInvalidDocument(a))}getEntries(c,a){let s=g3();return a.forEach(t=>{const r=this.docs.get(t);s=s.insert(t,r?r.document.mutableCopy():j1.newInvalidDocument(t))}),x.resolve(s)}getAllFromCollection(c,a,s){let t=g3();const r=new G(a.child("")),n=this.docs.getIteratorFrom(r);for(;n.hasNext();){const{key:i,value:{document:o}}=n.getNext();if(!a.isPrefixOf(i.path))break;i.path.length>a.length+1||$b(Ub(o),s)<=0||(t=t.insert(o.key,o.mutableCopy()))}return x.resolve(t)}getAllFromCollectionGroup(c,a,s,t){c1()}As(c,a){return x.forEach(this.docs,s=>a(s))}newChangeBuffer(c){return new ay(this)}getSize(c){return x.resolve(this.size)}}class ay extends Zx{constructor(c){super(),this.Yn=c}applyChanges(c){const a=[];return this.changes.forEach((s,t)=>{t.isValidDocument()?a.push(this.Yn.addEntry(c,t)):this.Yn.removeEntry(s)}),x.waitFor(a)}getFromCache(c,a){return this.Yn.getEntry(c,a)}getAllFromCache(c,a){return this.Yn.getEntries(c,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(c){this.persistence=c,this.Rs=new j4(a=>lc(a),fc),this.lastRemoteSnapshotVersion=a1.min(),this.highestTargetId=0,this.bs=0,this.Ps=new vc,this.targetCount=0,this.vs=I4.Pn()}forEachTarget(c,a){return this.Rs.forEach((s,t)=>a(t)),x.resolve()}getLastRemoteSnapshotVersion(c){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return x.resolve(this.bs)}allocateTargetId(c){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(c,a,s){return s&&(this.lastRemoteSnapshotVersion=s),a>this.bs&&(this.bs=a),x.resolve()}Dn(c){this.Rs.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.vs=new I4(a),this.highestTargetId=a),c.sequenceNumber>this.bs&&(this.bs=c.sequenceNumber)}addTargetData(c,a){return this.Dn(a),this.targetCount+=1,x.resolve()}updateTargetData(c,a){return this.Dn(a),x.resolve()}removeTargetData(c,a){return this.Rs.delete(a.target),this.Ps.ls(a.targetId),this.targetCount-=1,x.resolve()}removeTargets(c,a,s){let t=0;const r=[];return this.Rs.forEach((n,i)=>{i.sequenceNumber<=a&&s.get(i.targetId)===null&&(this.Rs.delete(n),r.push(this.removeMatchingKeysForTargetId(c,i.targetId)),t++)}),x.waitFor(r).next(()=>t)}getTargetCount(c){return x.resolve(this.targetCount)}getTargetData(c,a){const s=this.Rs.get(a)||null;return x.resolve(s)}addMatchingKeys(c,a,s){return this.Ps.us(a,s),x.resolve()}removeMatchingKeys(c,a,s){this.Ps.hs(a,s);const t=this.persistence.referenceDelegate,r=[];return t&&a.forEach(n=>{r.push(t.markPotentiallyOrphaned(c,n))}),x.waitFor(r)}removeMatchingKeysForTargetId(c,a){return this.Ps.ls(a),x.resolve()}getMatchingKeysForTargetId(c,a){const s=this.Ps.ds(a);return x.resolve(s)}containsKey(c,a){return x.resolve(this.Ps.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(c,a){this.Vs={},this.overlays={},this.Ss=new ic(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=c(this),this.Cs=new sy(this),this.indexManager=new Wx,this.remoteDocumentCache=function(s){return new ey(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Gx(a),this.Ns=new Xx(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new Jx,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let s=this.Vs[c.toKey()];return s||(s=new cy(a,this.referenceDelegate),this.Vs[c.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(c,a,s){B("MemoryPersistence","Starting transaction:",c);const t=new ry(this.Ss.next());return this.referenceDelegate.ks(),s(t).next(r=>this.referenceDelegate.Os(t).next(()=>r)).toPromise().then(r=>(t.raiseOnCommittedEvent(),r))}Ms(c,a){return x.or(Object.values(this.Vs).map(s=>()=>s.containsKey(c,a)))}}class ry extends jb{constructor(c){super(),this.currentSequenceNumber=c}}class Cc{constructor(c){this.persistence=c,this.Fs=new vc,this.$s=null}static Bs(c){return new Cc(c)}get Ls(){if(this.$s)return this.$s;throw c1()}addReference(c,a,s){return this.Fs.addReference(s,a),this.Ls.delete(s.toString()),x.resolve()}removeReference(c,a,s){return this.Fs.removeReference(s,a),this.Ls.add(s.toString()),x.resolve()}markPotentiallyOrphaned(c,a){return this.Ls.add(a.toString()),x.resolve()}removeTarget(c,a){this.Fs.ls(a.targetId).forEach(t=>this.Ls.add(t.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(c,a.targetId).next(t=>{t.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(c,a))}ks(){this.$s=new Set}Os(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,s=>{const t=G.fromPath(s);return this.Us(c,t).next(r=>{r||a.removeEntry(t,a1.min())})}).next(()=>(this.$s=null,a.apply(c)))}updateLimboDocument(c,a){return this.Us(c,a).next(s=>{s?this.Ls.delete(a.toString()):this.Ls.add(a.toString())})}xs(c){return 0}Us(c,a){return x.or([()=>x.resolve(this.Fs.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Ms(c,a)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(c,a,s,t){this.targetId=c,this.fromCache=a,this.Si=s,this.Di=t}static Ci(c,a){let s=o1(),t=o1();for(const r of a.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:t=t.add(r.doc.key)}return new pc(c,a.fromCache,s,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.xi=!1}initialize(c,a){this.Ni=c,this.indexManager=a,this.xi=!0}getDocumentsMatchingQuery(c,a,s,t){return this.ki(c,a).next(r=>r||this.Oi(c,a,t,s)).next(r=>r||this.Mi(c,a))}ki(c,a){if(vs(a))return x.resolve(null);let s=X2(a);return this.indexManager.getIndexType(c,s).next(t=>t===0?null:(a.limit!==null&&t===1&&(a=q7(a,null,"F"),s=X2(a)),this.indexManager.getDocumentsMatchingTarget(c,s).next(r=>{const n=o1(...r);return this.Ni.getDocuments(c,n).next(i=>this.indexManager.getMinOffset(c,s).next(o=>{const l=this.Fi(a,i);return this.$i(a,l,n,o.readTime)?this.ki(c,q7(a,null,"F")):this.Bi(c,l,a,o)}))})))}Oi(c,a,s,t){return vs(a)||t.isEqual(a1.min())?this.Mi(c,a):this.Ni.getDocuments(c,s).next(r=>{const n=this.Fi(a,r);return this.$i(a,n,s,t)?this.Mi(c,a):(rs()<=u1.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",t.toString(),U7(a)),this.Bi(c,n,a,qb(t,-1)))})}Fi(c,a){let s=new R1(ci(c));return a.forEach((t,r)=>{hc(c,r)&&(s=s.add(r))}),s}$i(c,a,s,t){if(c.limit===null)return!1;if(s.size!==a.size)return!0;const r=c.limitType==="F"?a.last():a.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(t)>0)}Mi(c,a){return rs()<=u1.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",U7(a)),this.Ni.getDocumentsMatchingQuery(c,a,M3.min())}Bi(c,a,s,t){return this.Ni.getDocumentsMatchingQuery(c,s,t).next(r=>(a.forEach(n=>{r=r.insert(n.key,n)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(c,a,s,t){this.persistence=c,this.Li=a,this.It=t,this.Ui=new $1(v1),this.qi=new j4(r=>lc(r),fc),this.Ki=new Map,this.Gi=c.getRemoteDocumentCache(),this.Cs=c.getTargetCache(),this.Ns=c.getBundleCache(),this.Qi(s)}Qi(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new Yx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.Ui))}}function oy(e,c,a,s){return new iy(e,c,a,s)}async function pi(e,c){const a=f1(e);return await a.persistence.runTransaction("Handle user change","readonly",s=>{let t;return a.mutationQueue.getAllMutationBatches(s).next(r=>(t=r,a.Qi(c),a.mutationQueue.getAllMutationBatches(s))).next(r=>{const n=[],i=[];let o=o1();for(const l of t){n.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return a.localDocuments.getDocuments(s,o).next(l=>({ji:l,removedBatchIds:n,addedBatchIds:i}))})})}function di(e){const c=f1(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function ly(e,c){const a=f1(e),s=c.snapshotVersion;let t=a.Ui;return a.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const n=a.Gi.newChangeBuffer({trackRemovals:!0});t=a.Ui;const i=[];c.targetChanges.forEach((f,h)=>{const u=t.get(h);if(!u)return;i.push(a.Cs.removeMatchingKeys(r,f.removedDocuments,h).next(()=>a.Cs.addMatchingKeys(r,f.addedDocuments,h)));let C=u.withSequenceNumber(r.currentSequenceNumber);c.targetMismatches.has(h)?C=C.withResumeToken(c2.EMPTY_BYTE_STRING,a1.min()).withLastLimboFreeSnapshotVersion(a1.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,s)),t=t.insert(h,C),function(z,L,w){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(u,C,f)&&i.push(a.Cs.updateTargetData(r,C))});let o=g3(),l=o1();if(c.documentUpdates.forEach(f=>{c.resolvedLimboDocuments.has(f)&&i.push(a.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(fy(r,n,c.documentUpdates).next(f=>{o=f.Wi,l=f.zi})),!s.isEqual(a1.min())){const f=a.Cs.getLastRemoteSnapshotVersion(r).next(h=>a.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));i.push(f)}return x.waitFor(i).next(()=>n.apply(r)).next(()=>a.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(a.Ui=t,r))}function fy(e,c,a){let s=o1(),t=o1();return a.forEach(r=>s=s.add(r)),c.getEntries(e,s).next(r=>{let n=g3();return a.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(t=t.add(i)),o.isNoDocument()&&o.version.isEqual(a1.min())?(c.removeEntry(i,o.readTime),n=n.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(c.addEntry(o),n=n.insert(i,o)):B("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{Wi:n,zi:t}})}function hy(e,c){const a=f1(e);return a.persistence.runTransaction("Allocate target","readwrite",s=>{let t;return a.Cs.getTargetData(s,c).next(r=>r?(t=r,x.resolve(t)):a.Cs.allocateTargetId(s).next(n=>(t=new K3(c,n,0,s.currentSequenceNumber),a.Cs.addTargetData(s,t).next(()=>t))))}).then(s=>{const t=a.Ui.get(s.targetId);return(t===null||s.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(a.Ui=a.Ui.insert(s.targetId,s),a.qi.set(c,s.targetId)),s})}async function W7(e,c,a){const s=f1(e),t=s.Ui.get(c),r=a?"readwrite":"readwrite-primary";try{a||await s.persistence.runTransaction("Release target",r,n=>s.persistence.referenceDelegate.removeTarget(n,t))}catch(n){if(!e8(n))throw n;B("LocalStore",`Failed to update sequence numbers for target ${c}: ${n}`)}s.Ui=s.Ui.remove(c),s.qi.delete(t.target)}function Ls(e,c,a){const s=f1(e);let t=a1.min(),r=o1();return s.persistence.runTransaction("Execute query","readonly",n=>function(i,o,l){const f=f1(i),h=f.qi.get(l);return h!==void 0?x.resolve(f.Ui.get(h)):f.Cs.getTargetData(o,l)}(s,n,X2(c)).next(i=>{if(i)return t=i.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(n,i.targetId).next(o=>{r=o})}).next(()=>s.Li.getDocumentsMatchingQuery(n,c,a?t:a1.min(),a?r:o1())).next(i=>(uy(s,hx(c),i),{documents:i,Hi:r})))}function uy(e,c,a){let s=e.Ki.get(c)||a1.min();a.forEach((t,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(c,s)}class bs{constructor(){this.activeTargetIds=li()}er(c){this.activeTargetIds=this.activeTargetIds.add(c)}nr(c){this.activeTargetIds=this.activeTargetIds.delete(c)}tr(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class my{constructor(){this.Lr=new bs,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,s){}addLocalQueryTarget(c){return this.Lr.er(c),this.Ur[c]||"not-current"}updateQueryState(c,a,s){this.Ur[c]=a}removeLocalQueryTarget(c){this.Lr.nr(c)}isLocalQueryTarget(c){return this.Lr.activeTargetIds.has(c)}clearQueryState(c){delete this.Ur[c]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(c){return this.Lr.activeTargetIds.has(c)}start(){return this.Lr=new bs,Promise.resolve()}handleUserChange(c,a,s){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{qr(c){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(c){this.Wr.push(c)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.Wr)c(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.Wr)c(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(c){this.Hr=c.Hr,this.Jr=c.Jr}Yr(c){this.Xr=c}Zr(c){this.eo=c}onMessage(c){this.no=c}close(){this.Jr()}send(c){this.Hr(c)}so(){this.Xr()}io(c){this.eo(c)}ro(c){this.no(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http";this.oo=a+"://"+c.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(c,a,s,t,r){const n=this.ho(c,a);B("RestConnection","Sending: ",n,s);const i={};return this.lo(i,t,r),this.fo(c,n,i,s).then(o=>(B("RestConnection","Received: ",o),o),o=>{throw R7("RestConnection",`${c} failed with error: `,o,"url: ",n,"request:",s),o})}_o(c,a,s,t,r,n){return this.ao(c,a,s,t,r)}lo(c,a,s){c["X-Goog-Api-Client"]="gl-js/ fire/"+G4,c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((t,r)=>c[r]=t),s&&s.headers.forEach((t,r)=>c[r]=t)}ho(c,a){const s=Cy[c];return`${this.oo}/v1/${a}:${s}`}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams}fo(c,a,s,t){return new Promise((r,n)=>{const i=new Ab;i.setWithCredentials(!0),i.listenOnce(Nb.COMPLETE,()=>{var l;try{switch(i.getLastErrorCode()){case K0.NO_ERROR:const f=i.getResponseJson();B("Connection","XHR received:",JSON.stringify(f)),r(f);break;case K0.TIMEOUT:B("Connection",'RPC "'+c+'" timed out'),n(new W(T.DEADLINE_EXCEEDED,"Request time out"));break;case K0.HTTP_ERROR:const h=i.getStatus();if(B("Connection",'RPC "'+c+'" failed with status:',h,"response text:",i.getResponseText()),h>0){let u=i.getResponseJson();Array.isArray(u)&&(u=u[0]);const C=(l=u)===null||l===void 0?void 0:l.error;if(C&&C.status&&C.message){const z=function(L){const w=L.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(w)>=0?w:T.UNKNOWN}(C.status);n(new W(z,C.message))}else n(new W(T.UNKNOWN,"Server responded with status "+i.getStatus()))}else n(new W(T.UNAVAILABLE,"Connection failed."));break;default:c1()}}finally{B("Connection",'RPC "'+c+'" completed.')}});const o=JSON.stringify(t);i.send(a,"POST",o,s,15)})}wo(c,a,s){const t=[this.oo,"/","google.firestore.v1.Firestore","/",c,"/channel"],r=yb(),n=Sb(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new kb({})),this.lo(i.initMessageHeaders,a,s),i.encodeInitMessageHeaders=!0;const o=t.join("");B("Connection","Creating WebChannel: "+o,i);const l=r.createWebChannel(o,i);let f=!1,h=!1;const u=new py({Hr:z=>{h?B("Connection","Not sending because WebChannel is closed:",z):(f||(B("Connection","Opening WebChannel transport."),l.open(),f=!0),B("Connection","WebChannel sending:",z),l.send(z))},Jr:()=>l.close()}),C=(z,L,w)=>{z.listen(L,d=>{try{w(d)}catch(M){setTimeout(()=>{throw M},0)}})};return C(l,L8.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),C(l,L8.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),u.io())}),C(l,L8.EventType.ERROR,z=>{h||(h=!0,R7("Connection","WebChannel transport errored:",z),u.io(new W(T.UNAVAILABLE,"The operation could not be completed")))}),C(l,L8.EventType.MESSAGE,z=>{var L;if(!h){const w=z.data[0];I1(!!w);const d=w,M=d.error||((L=d[0])===null||L===void 0?void 0:L.error);if(M){B("Connection","WebChannel received error:",M);const y=M.status;let F=function(l1){const j=E1[l1];if(j!==void 0)return ni(j)}(y),$=M.message;F===void 0&&(F=T.INTERNAL,$="Unknown error status: "+y+" with message "+M.message),h=!0,u.io(new W(F,$)),l.close()}else B("Connection","WebChannel received:",w),u.ro(w)}}),C(n,wb.STAT_EVENT,z=>{z.stat===ss.PROXY?B("Connection","Detected buffering proxy"):z.stat===ss.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{u.so()},0),u}}function Y0(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return new wx(e,!0)}class Hi{constructor(c,a,s=1e3,t=1.5,r=6e4){this.Hs=c,this.timerId=a,this.mo=s,this.yo=t,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(c){this.cancel();const a=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),t=Math.max(0,a-s);t>0&&B("ExponentialBackoff",`Backing off for ${t} ms (base delay: ${this.Io} ms, delay with jitter: ${a} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,t,()=>(this.Eo=Date.now(),c())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(c,a,s,t,r,n,i,o){this.Hs=c,this.vo=s,this.Vo=t,this.connection=r,this.authCredentialsProvider=n,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Hi(c,a)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(c){this.Lo(),this.stream.send(c)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(c,a){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,c!==4?this.xo.reset():a&&a.code===T.RESOURCE_EXHAUSTED?(Y2(a.toString()),Y2("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):a&&a.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=c,await this.listener.Zr(a)}qo(){}auth(){this.state=1;const c=this.Ko(this.So),a=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,t])=>{this.So===a&&this.Go(s,t)},s=>{c(()=>{const t=new W(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(t)})})}Go(c,a){const s=this.Ko(this.So);this.stream=this.jo(c,a),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{s(()=>this.Qo(t))}),this.stream.onMessage(t=>{s(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(c){return B("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}Ko(c){return a=>{this.Hs.enqueueAndForget(()=>this.So===c?a():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hy extends zy{constructor(c,a,s,t,r,n){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,s,t,n),this.It=r}jo(c,a){return this.connection.wo("Listen",c,a)}onMessage(c){this.xo.reset();const a=Px(this.It,c),s=function(t){if(!("targetChange"in t))return a1.min();const r=t.targetChange;return r.targetIds&&r.targetIds.length?a1.min():r.readTime?_6(r.readTime):a1.min()}(c);return this.listener.Wo(a,s)}zo(c){const a={};a.database=gs(this.It),a.addTarget=function(t,r){let n;const i=r.target;return n=O7(i)?{documents:Ix(t,i)}:{query:Dx(t,i)},n.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?n.resumeToken=Ax(t,r.resumeToken):r.snapshotVersion.compareTo(a1.min())>0&&(n.readTime=kx(t,r.snapshotVersion.toTimestamp())),n}(this.It,c);const s=_x(this.It,c);s&&(a.labels=s),this.Bo(a)}Ho(c){const a={};a.database=gs(this.It),a.removeTarget=c,this.Bo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends class{}{constructor(c,a,s,t){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=s,this.It=t,this.nu=!1}su(){if(this.nu)throw new W(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(c,a,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([t,r])=>this.connection.ao(c,a,s,t,r)).catch(t=>{throw t.name==="FirebaseError"?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new W(T.UNKNOWN,t.toString())})}_o(c,a,s,t){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,n])=>this.connection._o(c,a,s,r,n,t)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(T.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Vy{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(c){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.cu("Offline")))}set(c){this.lu(),this.iu=0,c==="Online"&&(this.ou=!1),this.cu(c)}cu(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}au(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Y2(a),this.ou=!1):B("OnlineStateTracker",a)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(c,a,s,t,r){this.localStore=c,this.datastore=a,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(n=>{s.enqueueAndForget(async()=>{t8(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=f1(i);o._u.add(4),await s8(o),o.gu.set("Unknown"),o._u.delete(4),await e0(o)}(this))})}),this.gu=new Vy(s,t)}}async function e0(e){if(t8(e))for(const c of e.wu)await c(!0)}async function s8(e){for(const c of e.wu)await c(!1)}function Mi(e,c){const a=f1(e);a.du.has(c.targetId)||(a.du.set(c.targetId,c),Hc(a)?zc(a):W4(a).ko()&&dc(a,c))}function Vi(e,c){const a=f1(e),s=W4(a);a.du.delete(c),s.ko()&&gi(a,c),a.du.size===0&&(s.ko()?s.Fo():t8(a)&&a.gu.set("Unknown"))}function dc(e,c){e.yu.Mt(c.targetId),W4(e).zo(c)}function gi(e,c){e.yu.Mt(c),W4(e).Ho(c)}function zc(e){e.yu=new yx({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),se:c=>e.du.get(c)||null}),W4(e).start(),e.gu.uu()}function Hc(e){return t8(e)&&!W4(e).No()&&e.du.size>0}function t8(e){return f1(e)._u.size===0}function Li(e){e.yu=void 0}async function Ly(e){e.du.forEach((c,a)=>{dc(e,c)})}async function by(e,c){Li(e),Hc(e)?(e.gu.hu(c),zc(e)):e.gu.set("Unknown")}async function xy(e,c,a){if(e.gu.set("Online"),c instanceof hi&&c.state===2&&c.cause)try{await async function(s,t){const r=t.cause;for(const n of t.targetIds)s.du.has(n)&&(await s.remoteSyncer.rejectListen(n,r),s.du.delete(n),s.yu.removeTarget(n))}(e,c)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),s),await ys(e,s)}else if(c instanceof B8?e.yu.Gt(c):c instanceof fi?e.yu.Yt(c):e.yu.Wt(c),!a.isEqual(a1.min()))try{const s=await di(e.localStore);a.compareTo(s)>=0&&await function(t,r){const n=t.yu.te(r);return n.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=t.du.get(o);l&&t.du.set(o,l.withResumeToken(i.resumeToken,r))}}),n.targetMismatches.forEach(i=>{const o=t.du.get(i);if(!o)return;t.du.set(i,o.withResumeToken(c2.EMPTY_BYTE_STRING,o.snapshotVersion)),gi(t,i);const l=new K3(o.target,i,1,o.sequenceNumber);dc(t,l)}),t.remoteSyncer.applyRemoteEvent(n)}(e,a)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await ys(e,s)}}async function ys(e,c,a){if(!e8(c))throw c;e._u.add(1),await s8(e),e.gu.set("Offline"),a||(a=()=>di(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await a(),e._u.delete(1),await e0(e)})}async function Ss(e,c){const a=f1(e);a.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=t8(a);a._u.add(3),await s8(a),s&&a.gu.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a._u.delete(3),await e0(a)}async function yy(e,c){const a=f1(e);c?(a._u.delete(2),await e0(a)):c||(a._u.add(2),await s8(a),a.gu.set("Unknown"))}function W4(e){return e.pu||(e.pu=function(c,a,s){const t=f1(c);return t.su(),new Hy(a,t.connection,t.authCredentials,t.appCheckCredentials,t.It,s)}(e.datastore,e.asyncQueue,{Yr:Ly.bind(null,e),Zr:by.bind(null,e),Wo:xy.bind(null,e)}),e.wu.push(async c=>{c?(e.pu.Mo(),Hc(e)?zc(e):e.gu.set("Unknown")):(await e.pu.stop(),Li(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(c,a,s,t,r){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=s,this.op=t,this.removalCallback=r,this.deferred=new G3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}static createAndSchedule(c,a,s,t,r){const n=Date.now()+s,i=new Mc(c,a,n,t,r);return i.start(s),i}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(T.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bi(e,c){if(Y2("AsyncQueue",`${c}: ${e}`),e8(e))return new W(T.UNAVAILABLE,`${c}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(c){this.comparator=c?(a,s)=>c(a,s)||G.comparator(a.key,s.key):(a,s)=>G.comparator(a.key,s.key),this.keyedMap=s6(),this.sortedSet=new $1(this.comparator)}static emptySet(c){return new V4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,s)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof V4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),s=c.sortedSet.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const s=new V4;return s.comparator=this.comparator,s.keyedMap=c,s.sortedSet=a,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.Tu=new $1(G.comparator)}track(c){const a=c.doc.key,s=this.Tu.get(a);s?c.type!==0&&s.type===3?this.Tu=this.Tu.insert(a,c):c.type===3&&s.type!==1?this.Tu=this.Tu.insert(a,{type:s.type,doc:c.doc}):c.type===2&&s.type===2?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c.type===2&&s.type===0?this.Tu=this.Tu.insert(a,{type:0,doc:c.doc}):c.type===1&&s.type===0?this.Tu=this.Tu.remove(a):c.type===1&&s.type===2?this.Tu=this.Tu.insert(a,{type:1,doc:s.doc}):c.type===0&&s.type===1?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c1():this.Tu=this.Tu.insert(a,c)}Eu(){const c=[];return this.Tu.inorderTraversal((a,s)=>{c.push(s)}),c}}class D4{constructor(c,a,s,t,r,n,i,o,l){this.query=c,this.docs=a,this.oldDocs=s,this.docChanges=t,this.mutatedKeys=r,this.fromCache=n,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(c,a,s,t,r){const n=[];return a.forEach(i=>{n.push({type:0,doc:i})}),new D4(c,a,V4.emptySet(a),n,s,t,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&Y5(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,s=c.docChanges;if(a.length!==s.length)return!1;for(let t=0;t<a.length;t++)if(a[t].type!==s[t].type||!a[t].doc.isEqual(s[t].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.Au=void 0,this.listeners=[]}}class Ny{constructor(){this.queries=new j4(c=>Jn(c),Y5),this.onlineState="Unknown",this.Ru=new Set}}async function wy(e,c){const a=f1(e),s=c.query;let t=!1,r=a.queries.get(s);if(r||(t=!0,r=new Sy),t)try{r.Au=await a.onListen(s)}catch(n){const i=bi(n,`Initialization of query '${U7(c.query)}' failed`);return void c.onError(i)}a.queries.set(s,r),r.listeners.push(c),c.bu(a.onlineState),r.Au&&c.Pu(r.Au)&&Vc(a)}async function ky(e,c){const a=f1(e),s=c.query;let t=!1;const r=a.queries.get(s);if(r){const n=r.listeners.indexOf(c);n>=0&&(r.listeners.splice(n,1),t=r.listeners.length===0)}if(t)return a.queries.delete(s),a.onUnlisten(s)}function Ay(e,c){const a=f1(e);let s=!1;for(const t of c){const r=t.query,n=a.queries.get(r);if(n){for(const i of n.listeners)i.Pu(t)&&(s=!0);n.Au=t}}s&&Vc(a)}function Ty(e,c,a){const s=f1(e),t=s.queries.get(c);if(t)for(const r of t.listeners)r.onError(a);s.queries.delete(c)}function Vc(e){e.Ru.forEach(c=>{c.next()})}class Ey{constructor(c,a,s){this.query=c,this.vu=a,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(c){if(!this.options.includeMetadataChanges){const s=[];for(const t of c.docChanges)t.type!==3&&s.push(t);c=new D4(c.query,c.docs,c.oldDocs,s,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.Vu?this.Du(c)&&(this.vu.next(c),a=!0):this.Cu(c,this.onlineState)&&(this.xu(c),a=!0),this.Su=c,a}onError(c){this.vu.error(c)}bu(c){this.onlineState=c;let a=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,c)&&(this.xu(this.Su),a=!0),a}Cu(c,a){if(!c.fromCache)return!0;const s=a!=="Offline";return(!this.options.Nu||!s)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Du(c){if(c.docChanges.length>0)return!0;const a=this.Su&&this.Su.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}xu(c){c=D4.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.Vu=!0,this.vu.next(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(c){this.key=c}}class yi{constructor(c){this.key=c}}class Py{constructor(c,a){this.query=c,this.Uu=a,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=o1(),this.mutatedKeys=o1(),this.Gu=ci(c),this.Qu=new V4(this.Gu)}get ju(){return this.Uu}Wu(c,a){const s=a?a.zu:new Ns,t=a?a.Qu:this.Qu;let r=a?a.mutatedKeys:this.mutatedKeys,n=t,i=!1;const o=this.query.limitType==="F"&&t.size===this.query.limit?t.last():null,l=this.query.limitType==="L"&&t.size===this.query.limit?t.first():null;if(c.inorderTraversal((f,h)=>{const u=t.get(f),C=hc(this.query,h)?h:null,z=!!u&&this.mutatedKeys.has(u.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let w=!1;u&&C?u.data.isEqual(C.data)?z!==L&&(s.track({type:3,doc:C}),w=!0):this.Hu(u,C)||(s.track({type:2,doc:C}),w=!0,(o&&this.Gu(C,o)>0||l&&this.Gu(C,l)<0)&&(i=!0)):!u&&C?(s.track({type:0,doc:C}),w=!0):u&&!C&&(s.track({type:1,doc:u}),w=!0,(o||l)&&(i=!0)),w&&(C?(n=n.add(C),r=L?r.add(f):r.delete(f)):(n=n.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;n.size>this.query.limit;){const f=this.query.limitType==="F"?n.last():n.first();n=n.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Qu:n,zu:s,$i:i,mutatedKeys:r}}Hu(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,s){const t=this.Qu;this.Qu=c.Qu,this.mutatedKeys=c.mutatedKeys;const r=c.zu.Eu();r.sort((l,f)=>function(h,u){const C=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c1()}};return C(h)-C(u)}(l.type,f.type)||this.Gu(l.doc,f.doc)),this.Ju(s);const n=a?this.Yu():[],i=this.Ku.size===0&&this.current?1:0,o=i!==this.qu;return this.qu=i,r.length!==0||o?{snapshot:new D4(this.query,c.Qu,t,r,c.mutatedKeys,i===0,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:n}:{Xu:n}}bu(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ns,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(c){return!this.Uu.has(c)&&!!this.Qu.has(c)&&!this.Qu.get(c).hasLocalMutations}Ju(c){c&&(c.addedDocuments.forEach(a=>this.Uu=this.Uu.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.Uu=this.Uu.delete(a)),this.current=c.current)}Yu(){if(!this.current)return[];const c=this.Ku;this.Ku=o1(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const a=[];return c.forEach(s=>{this.Ku.has(s)||a.push(new yi(s))}),this.Ku.forEach(s=>{c.has(s)||a.push(new xi(s))}),a}tc(c){this.Uu=c.Hi,this.Ku=o1();const a=this.Wu(c.documents);return this.applyChanges(a,!0)}ec(){return D4.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Iy{constructor(c,a,s){this.query=c,this.targetId=a,this.view=s}}class Dy{constructor(c){this.key=c,this.nc=!1}}class Ry{constructor(c,a,s,t,r,n){this.localStore=c,this.remoteStore=a,this.eventManager=s,this.sharedClientState=t,this.currentUser=r,this.maxConcurrentLimboResolutions=n,this.sc={},this.ic=new j4(i=>Jn(i),Y5),this.rc=new Map,this.oc=new Set,this.uc=new $1(G.comparator),this.cc=new Map,this.ac=new vc,this.hc={},this.lc=new Map,this.fc=I4.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function _y(e,c){const a=Gy(e);let s,t;const r=a.ic.get(c);if(r)s=r.targetId,a.sharedClientState.addLocalQueryTarget(s),t=r.view.ec();else{const n=await hy(a.localStore,X2(c));a.isPrimaryClient&&Mi(a.remoteStore,n);const i=a.sharedClientState.addLocalQueryTarget(n.targetId);s=n.targetId,t=await Fy(a,c,s,i==="current",n.resumeToken)}return t}async function Fy(e,c,a,s,t){e._c=(h,u,C)=>async function(z,L,w,d){let M=L.view.Wu(w);M.$i&&(M=await Ls(z.localStore,L.query,!1).then(({documents:$})=>L.view.Wu($,M)));const y=d&&d.targetChanges.get(L.targetId),F=L.view.applyChanges(M,z.isPrimaryClient,y);return ks(z,L.targetId,F.Xu),F.snapshot}(e,h,u,C);const r=await Ls(e.localStore,c,!0),n=new Py(c,r.Hi),i=n.Wu(r.documents),o=a8.createSynthesizedTargetChangeForCurrentChange(a,s&&e.onlineState!=="Offline",t),l=n.applyChanges(i,e.isPrimaryClient,o);ks(e,a,l.Xu);const f=new Iy(c,a,n);return e.ic.set(c,f),e.rc.has(a)?e.rc.get(a).push(c):e.rc.set(a,[c]),l.snapshot}async function By(e,c){const a=f1(e),s=a.ic.get(c),t=a.rc.get(s.targetId);if(t.length>1)return a.rc.set(s.targetId,t.filter(r=>!Y5(r,c))),void a.ic.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await W7(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),Vi(a.remoteStore,s.targetId),K7(a,s.targetId)}).catch(nc)):(K7(a,s.targetId),await W7(a.localStore,s.targetId,!0))}async function Si(e,c){const a=f1(e);try{const s=await ly(a.localStore,c);c.targetChanges.forEach((t,r)=>{const n=a.cc.get(r);n&&(I1(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.nc=!0:t.modifiedDocuments.size>0?I1(n.nc):t.removedDocuments.size>0&&(I1(n.nc),n.nc=!1))}),await wi(a,s,c)}catch(s){await nc(s)}}function ws(e,c,a){const s=f1(e);if(s.isPrimaryClient&&a===0||!s.isPrimaryClient&&a===1){const t=[];s.ic.forEach((r,n)=>{const i=n.view.bu(c);i.snapshot&&t.push(i.snapshot)}),function(r,n){const i=f1(r);i.onlineState=n;let o=!1;i.queries.forEach((l,f)=>{for(const h of f.listeners)h.bu(n)&&(o=!0)}),o&&Vc(i)}(s.eventManager,c),t.length&&s.sc.Wo(t),s.onlineState=c,s.isPrimaryClient&&s.sharedClientState.setOnlineState(c)}}async function Oy(e,c,a){const s=f1(e);s.sharedClientState.updateQueryState(c,"rejected",a);const t=s.cc.get(c),r=t&&t.key;if(r){let n=new $1(G.comparator);n=n.insert(r,j1.newNoDocument(r,a1.min()));const i=o1().add(r),o=new c0(a1.min(),new Map,new R1(v1),n,i);await Si(s,o),s.uc=s.uc.remove(r),s.cc.delete(c),gc(s)}else await W7(s.localStore,c,!1).then(()=>K7(s,c,a)).catch(nc)}function K7(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const s of e.rc.get(c))e.ic.delete(s),a&&e.sc.wc(s,a);e.rc.delete(c),e.isPrimaryClient&&e.ac.ls(c).forEach(s=>{e.ac.containsKey(s)||Ni(e,s)})}function Ni(e,c){e.oc.delete(c.path.canonicalString());const a=e.uc.get(c);a!==null&&(Vi(e.remoteStore,a),e.uc=e.uc.remove(c),e.cc.delete(a),gc(e))}function ks(e,c,a){for(const s of a)s instanceof xi?(e.ac.addReference(s.key,c),qy(e,s)):s instanceof yi?(B("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,c),e.ac.containsKey(s.key)||Ni(e,s.key)):c1()}function qy(e,c){const a=c.key,s=a.path.canonicalString();e.uc.get(a)||e.oc.has(s)||(B("SyncEngine","New document in limbo: "+a),e.oc.add(s),gc(e))}function gc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const c=e.oc.values().next().value;e.oc.delete(c);const a=new G(N1.fromString(c)),s=e.fc.next();e.cc.set(s,new Dy(a)),e.uc=e.uc.insert(a,s),Mi(e.remoteStore,new K3(X2(Xn(a.path)),s,2,ic.at))}}async function wi(e,c,a){const s=f1(e),t=[],r=[],n=[];s.ic.isEmpty()||(s.ic.forEach((i,o)=>{n.push(s._c(o,c,a).then(l=>{if((l||a)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){t.push(l);const f=pc.Ci(o.targetId,l);r.push(f)}}))}),await Promise.all(n),s.sc.Wo(t),await async function(i,o){const l=f1(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(o,h=>x.forEach(h.Si,u=>l.persistence.referenceDelegate.addReference(f,h.targetId,u)).next(()=>x.forEach(h.Di,u=>l.persistence.referenceDelegate.removeReference(f,h.targetId,u)))))}catch(f){if(!e8(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const h=f.targetId;if(!f.fromCache){const u=l.Ui.get(h),C=u.snapshotVersion,z=u.withLastLimboFreeSnapshotVersion(C);l.Ui=l.Ui.insert(h,z)}}}(s.localStore,r))}async function Uy(e,c){const a=f1(e);if(!a.currentUser.isEqual(c)){B("SyncEngine","User change. New user:",c.toKey());const s=await pi(a.localStore,c);a.currentUser=c,function(t,r){t.lc.forEach(n=>{n.forEach(i=>{i.reject(new W(T.CANCELLED,r))})}),t.lc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,s.removedBatchIds,s.addedBatchIds),await wi(a,s.ji)}}function $y(e,c){const a=f1(e),s=a.cc.get(c);if(s&&s.nc)return o1().add(s.key);{let t=o1();const r=a.rc.get(c);if(!r)return t;for(const n of r){const i=a.ic.get(n);t=t.unionWith(i.view.ju)}return t}}function Gy(e){const c=f1(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=Si.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=$y.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=Oy.bind(null,c),c.sc.Wo=Ay.bind(null,c.eventManager),c.sc.wc=Ty.bind(null,c.eventManager),c}class jy{constructor(){this.synchronizeTabs=!1}async initialize(c){this.It=zi(c.databaseInfo.databaseId),this.sharedClientState=this.gc(c),this.persistence=this.yc(c),await this.persistence.start(),this.localStore=this.Ic(c),this.gcScheduler=this.Tc(c,this.localStore),this.indexBackfillerScheduler=this.Ec(c,this.localStore)}Tc(c,a){return null}Ec(c,a){return null}Ic(c){return oy(this.persistence,new ny,c.initialUser,this.It)}yc(c){return new ty(Cc.Bs,this.It)}gc(c){return new my}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wy{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ws(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uy.bind(null,this.syncEngine),await yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return new Ny}createDatastore(c){const a=zi(c.databaseInfo.databaseId),s=(t=c.databaseInfo,new dy(t));var t;return function(r,n,i,o){return new My(r,n,i,o)}(c.authCredentials,c.appCheckCredentials,s,a)}createRemoteStore(c){return a=this.localStore,s=this.datastore,t=c.asyncQueue,r=i=>ws(this.syncEngine,i,0),n=xs.C()?new xs:new vy,new gy(a,s,t,r,n);var a,s,t,r,n}createSyncEngine(c,a){return function(s,t,r,n,i,o,l){const f=new Ry(s,t,r,n,i,o);return l&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}terminate(){return async function(c){const a=f1(c);B("RemoteStore","RemoteStore shutting down."),a._u.add(5),await s8(a),a.mu.shutdown(),a.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(e,c,a){if(!a)throw new W(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function Zy(e,c,a,s){if(c===!0&&s===!0)throw new W(T.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function As(e){if(G.isDocumentKey(e))throw new W(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(a){return a.constructor?a.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":c1()}function Z7(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new W(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=Qy(e);throw new W(T.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map;class Es{constructor(c){var a;if(c.host===void 0){if(c.ssl!==void 0)throw new W(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new W(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.useFetchStreams=!!c.useFetchStreams,Zy("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling)}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(c,a,s,t){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=s,this._app=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Es({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new W(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Es(c),c.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Tb;switch(a.type){case"gapi":const s=a.client;return new Db(s,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new W(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=Ts.get(c);a&&(B("ComponentProvider","Removing Datastore"),Ts.delete(c),a.terminate())}(this),Promise.resolve()}}function Yy(e,c,a,s={}){var t;const r=(e=Z7(e,Lc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==c&&R7("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${c}:${a}`,ssl:!1})),s.mockUserToken){let n,i;if(typeof s.mockUserToken=="string")n=s.mockUserToken,i=Z1.MOCK_USER;else{n=dg(s.mockUserToken,(t=e._app)===null||t===void 0?void 0:t.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new W(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Z1(o)}e._authCredentials=new Eb(new Kn(n,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(c,a,s){this.converter=a,this._key=s,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new g4(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new K4(this.firestore,c,this._key)}}class a0{constructor(c,a,s){this.converter=a,this._query=s,this.type="query",this.firestore=c}withConverter(c){return new a0(this.firestore,c,this._query)}}class g4 extends a0{constructor(c,a,s){super(c,a,Xn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new K4(this.firestore,null,new G(c))}withConverter(c){return new g4(this.firestore,c,this._path)}}function Xy(e,c,...a){if(e=I9(e),Ky("collection","path",c),e instanceof Lc){const s=N1.fromString(c,...a);return As(s),new g4(e,null,s)}{if(!(e instanceof K4||e instanceof g4))throw new W(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(N1.fromString(c,...a));return As(s),new g4(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.Rc(this.observer.next,c)}error(c){this.observer.error?this.Rc(this.observer.error,c):Y2("Uncaught Error in snapshot listener:",c.toString())}bc(){this.muted=!0}Rc(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(c,a,s,t){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=s,this.databaseInfo=t,this.user=Z1.UNAUTHENTICATED,this.clientId=Bb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new G3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const s=bi(a,"Failed to shutdown persistence");c.reject(s)}}),c.promise}}async function eS(e,c){e.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await c.initialize(a);let s=a.initialUser;e.setCredentialChangeListener(async t=>{s.isEqual(t)||(await pi(c.localStore,t),s=t)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=c}async function aS(e,c){e.asyncQueue.verifyOperationInProgress();const a=await sS(e);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await c.initialize(a,s),e.setCredentialChangeListener(t=>Ss(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>Ss(c.remoteStore,r)),e.onlineComponents=c}async function sS(e){return e.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await eS(e,new jy)),e.offlineComponents}async function tS(e){return e.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await aS(e,new Wy)),e.onlineComponents}async function rS(e){const c=await tS(e),a=c.eventManager;return a.onListen=_y.bind(null,c.syncEngine),a.onUnlisten=By.bind(null,c.syncEngine),a}function nS(e,c,a={}){const s=new G3;return e.asyncQueue.enqueueAndForget(async()=>function(t,r,n,i,o){const l=new Jy({next:h=>{r.enqueueAndForget(()=>ky(t,f)),h.fromCache&&i.source==="server"?o.reject(new W(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(h)},error:h=>o.reject(h)}),f=new Ey(n,l,{includeMetadataChanges:!0,Nu:!0});return wy(t,f)}(await rS(e),e.asyncQueue,c,a,s)),s.promise}class iS{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Hi(this,"async_queue_retry"),this.Wc=()=>{const a=Y0();a&&B("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};const c=Y0();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.zc(),this.Hc(c)}enterRestrictedMode(c){if(!this.Uc){this.Uc=!0,this.Qc=c||!1;const a=Y0();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Wc)}}enqueue(c){if(this.zc(),this.Uc)return new Promise(()=>{});const a=new G3;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.Lc.push(c),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(c){if(!e8(c))throw c;B("AsyncQueue","Operation failed with retryable error: "+c)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(c){const a=this.Bc.then(()=>(this.Gc=!0,c().catch(s=>{this.Kc=s,this.Gc=!1;const t=function(r){let n=r.message||"";return r.stack&&(n=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),n}(s);throw Y2("INTERNAL UNHANDLED ERROR: ",t),s}).then(s=>(this.Gc=!1,s))));return this.Bc=a,a}enqueueAfterDelay(c,a,s){this.zc(),this.jc.indexOf(c)>-1&&(a=0);const t=Mc.createAndSchedule(this,c,a,s,r=>this.Yc(r));return this.qc.push(t),t}zc(){this.Kc&&c1()}verifyOperationInProgress(){}async Xc(){let c;do c=this.Bc,await c;while(c!==this.Bc)}Zc(c){for(const a of this.qc)if(a.timerId===c)return!0;return!1}ta(c){return this.Xc().then(()=>{this.qc.sort((a,s)=>a.targetTimeMs-s.targetTimeMs);for(const a of this.qc)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Xc()})}ea(c){this.jc.push(c)}Yc(c){const a=this.qc.indexOf(c);this.qc.splice(a,1)}}class ki extends Lc{constructor(c,a,s,t){super(c,a,s,t),this.type="firestore",this._queue=new iS,this._persistenceKey=(t==null?void 0:t.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ai(this),this._firestoreClient.terminate()}}function oS(e,c){const a=typeof e=="object"?e:qr(),s=typeof e=="string"?e:c||"(default)",t=G6(a,"firestore").getImmediate({identifier:s});if(!t._initialized){const r=vg("firestore");r&&Yy(t,...r)}return t}function lS(e){return e._firestoreClient||Ai(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ai(e){var c;const a=e._freezeSettings(),s=function(t,r,n,i){return new Zb(t,r,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new cS(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(c){this._byteString=c}static fromBase64String(c){try{return new f5(c2.fromBase64String(c))}catch(a){throw new W(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new f5(c2.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new W(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new l2(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new W(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new W(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return v1(this._lat,c._lat)||v1(this._long,c._long)}}const hS=new RegExp("[~\\*/\\[\\]]");function uS(e,c,a){if(c.search(hS)>=0)throw Ps(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Ti(...c.split("."))._internalPath}catch{throw Ps(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function Ps(e,c,a,s,t){const r=s&&!s.isEmpty(),n=t!==void 0;let i=`Function ${c}() called with invalid data`;a&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||n)&&(o+=" (found",r&&(o+=` in field ${s}`),n&&(o+=` in document ${t}`),o+=")"),new W(T.INVALID_ARGUMENT,i+e+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(c,a,s,t,r){this._firestore=c,this._userDataWriter=a,this._key=s,this._document=t,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new K4(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new mS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(Pi("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class mS extends Ei{data(){return super.data()}}function Pi(e,c){return typeof c=="string"?uS(e,c):c instanceof Ti?c._internalPath:c._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new W(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{convertValue(c,a="none"){switch(X3(c)){case 0:return null;case 1:return c.booleanValue;case 2:return P1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(E4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw c1()}}convertObject(c,a){const s={};return K5(c.fields,(t,r)=>{s[t]=this.convertValue(r,a)}),s}convertGeoPoint(c){return new fS(P1(c.latitude),P1(c.longitude))}convertArray(c,a){return(c.values||[]).map(s=>this.convertValue(s,a))}convertServerTimestamp(c,a){switch(a){case"previous":const s=Qn(c);return s==null?null:this.convertValue(s,a);case"estimate":return this.convertTimestamp(P6(c));default:return null}}convertTimestamp(c){const a=V3(c);return new h2(a.seconds,a.nanos)}convertDocumentKey(c,a){const s=N1.fromString(c);I1(Ci(s));const t=new I6(s.get(1),s.get(3)),r=new G(s.popFirst(5));return t.isEqual(a)||Y2(`Document ${r} contains a document reference within a different database (${t.projectId}/${t.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y8{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class pS extends Ei{constructor(c,a,s,t,r,n){super(c,a,s,t,n),this._firestore=c,this._firestoreImpl=c,this.metadata=r}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new O8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const s=this._document.data.field(Pi("DocumentSnapshot.get",c));if(s!==null)return this._userDataWriter.convertValue(s,a.serverTimestamps)}}}class O8 extends pS{data(c={}){return super.data(c)}}class dS{constructor(c,a,s,t){this._firestore=c,this._userDataWriter=a,this._snapshot=t,this.metadata=new y8(t.hasPendingWrites,t.fromCache),this.query=s}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(s=>{c.call(a,new O8(this._firestore,this._userDataWriter,s.key,s,new y8(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new W(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(s,t){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(n=>{const i=new O8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new y8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(n=>t||n.type!==3).map(n=>{const i=new O8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new y8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);let o=-1,l=-1;return n.type!==0&&(o=r.indexOf(n.doc.key),r=r.delete(n.doc.key)),n.type!==1&&(r=r.add(n.doc),l=r.indexOf(n.doc.key)),{type:zS(n.type),doc:i,oldIndex:o,newIndex:l}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function zS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c1()}}class HS extends CS{constructor(c){super(),this.firestore=c}convertBytes(c){return new f5(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new K4(this.firestore,null,a)}}function MS(e){e=Z7(e,a0);const c=Z7(e.firestore,ki),a=lS(c),s=new HS(c);return vS(e._query),nS(a,e._query).then(t=>new dS(c,s,e,t))}(function(e,c=!0){(function(a){G4=a})(ML),H3(new Z2("firestore",(a,{instanceIdentifier:s,options:t})=>{const r=a.getProvider("app").getImmediate(),n=new ki(new Pb(a.getProvider("auth-internal")),new _b(a.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new I6(i.options.projectId,o)}(r,s),r);return t=Object.assign({useFetchStreams:c},t),n._setSettings(t),n},"PUBLIC").setMultipleInstances(!0)),O2(ts,"3.7.3",e),O2(ts,"3.7.3","esm2017")})();var VS="firebase",gS="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O2(VS,gS,"app");const Ii="@firebase/installations",bc="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e4,Ri=`w:${bc}`,_i="FIS_v2",LS="https://firebaseinstallations.googleapis.com/v1",bS=60*60*1e3,xS="installations",yS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},J3=new T5(xS,yS,SS);function Fi(e){return e instanceof y3&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi({projectId:e}){return`${LS}/projects/${e}/installations`}function Oi(e){return{token:e.token,requestStatus:2,expiresIn:wS(e.expiresIn),creationTime:Date.now()}}async function qi(e,c){const s=(await c.json()).error;return J3.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ui({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function NS(e,{refreshToken:c}){const a=Ui(e);return a.append("Authorization",kS(c)),a}async function $i(e){const c=await e();return c.status>=500&&c.status<600?e():c}function wS(e){return Number(e.replace("s","000"))}function kS(e){return`${_i} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS({appConfig:e,heartbeatServiceProvider:c},{fid:a}){const s=Bi(e),t=Ui(e),r=c.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&t.append("x-firebase-client",l)}const n={fid:a,authVersion:_i,appId:e.appId,sdkVersion:Ri},i={method:"POST",headers:t,body:JSON.stringify(n)},o=await $i(()=>fetch(s,i));if(o.ok){const l=await o.json();return{fid:l.fid||a,registrationStatus:2,refreshToken:l.refreshToken,authToken:Oi(l.authToken)}}else throw await qi("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){return new Promise(c=>{setTimeout(c,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=/^[cdef][\w-]{21}$/,Q7="";function PS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=IS(e);return ES.test(a)?a:Q7}catch{return Q7}}function IS(e){return TS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map;function Wi(e,c){const a=s0(e);Ki(a,c),DS(a,c)}function Ki(e,c){const a=ji.get(e);if(!!a)for(const s of a)s(c)}function DS(e,c){const a=RS();a&&a.postMessage({key:e,fid:c}),_S()}let F3=null;function RS(){return!F3&&"BroadcastChannel"in self&&(F3=new BroadcastChannel("[Firebase] FID Change"),F3.onmessage=e=>{Ki(e.data.key,e.data.fid)}),F3}function _S(){ji.size===0&&F3&&(F3.close(),F3=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="firebase-installations-database",BS=1,c4="firebase-installations-store";let X0=null;function xc(){return X0||(X0=Br(FS,BS,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(c4)}}})),X0}async function h5(e,c){const a=s0(e),t=(await xc()).transaction(c4,"readwrite"),r=t.objectStore(c4),n=await r.get(a);return await r.put(c,a),await t.done,(!n||n.fid!==c.fid)&&Wi(e,c.fid),c}async function Zi(e){const c=s0(e),s=(await xc()).transaction(c4,"readwrite");await s.objectStore(c4).delete(c),await s.done}async function t0(e,c){const a=s0(e),t=(await xc()).transaction(c4,"readwrite"),r=t.objectStore(c4),n=await r.get(a),i=c(n);return i===void 0?await r.delete(a):await r.put(i,a),await t.done,i&&(!n||n.fid!==i.fid)&&Wi(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(e){let c;const a=await t0(e.appConfig,s=>{const t=OS(s),r=qS(e,t);return c=r.registrationPromise,r.installationEntry});return a.fid===Q7?{installationEntry:await c}:{installationEntry:a,registrationPromise:c}}function OS(e){const c=e||{fid:PS(),registrationStatus:0};return Qi(c)}function qS(e,c){if(c.registrationStatus===0){if(!navigator.onLine){const t=Promise.reject(J3.create("app-offline"));return{installationEntry:c,registrationPromise:t}}const a={fid:c.fid,registrationStatus:1,registrationTime:Date.now()},s=US(e,a);return{installationEntry:a,registrationPromise:s}}else return c.registrationStatus===1?{installationEntry:c,registrationPromise:$S(e)}:{installationEntry:c}}async function US(e,c){try{const a=await AS(e,c);return h5(e.appConfig,a)}catch(a){throw Fi(a)&&a.customData.serverCode===409?await Zi(e.appConfig):await h5(e.appConfig,{fid:c.fid,registrationStatus:0}),a}}async function $S(e){let c=await Is(e.appConfig);for(;c.registrationStatus===1;)await Gi(100),c=await Is(e.appConfig);if(c.registrationStatus===0){const{installationEntry:a,registrationPromise:s}=await yc(e);return s||a}return c}function Is(e){return t0(e,c=>{if(!c)throw J3.create("installation-not-found");return Qi(c)})}function Qi(e){return GS(e)?{fid:e.fid,registrationStatus:0}:e}function GS(e){return e.registrationStatus===1&&e.registrationTime+Di<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS({appConfig:e,heartbeatServiceProvider:c},a){const s=WS(e,a),t=NS(e,a),r=c.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&t.append("x-firebase-client",l)}const n={installation:{sdkVersion:Ri,appId:e.appId}},i={method:"POST",headers:t,body:JSON.stringify(n)},o=await $i(()=>fetch(s,i));if(o.ok){const l=await o.json();return Oi(l)}else throw await qi("Generate Auth Token",o)}function WS(e,{fid:c}){return`${Bi(e)}/${c}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(e,c=!1){let a;const s=await t0(e.appConfig,r=>{if(!Yi(r))throw J3.create("not-registered");const n=r.authToken;if(!c&&QS(n))return r;if(n.requestStatus===1)return a=KS(e,c),r;{if(!navigator.onLine)throw J3.create("app-offline");const i=XS(r);return a=ZS(e,i),i}});return a?await a:s.authToken}async function KS(e,c){let a=await Ds(e.appConfig);for(;a.authToken.requestStatus===1;)await Gi(100),a=await Ds(e.appConfig);const s=a.authToken;return s.requestStatus===0?Sc(e,c):s}function Ds(e){return t0(e,c=>{if(!Yi(c))throw J3.create("not-registered");const a=c.authToken;return JS(a)?Object.assign(Object.assign({},c),{authToken:{requestStatus:0}}):c})}async function ZS(e,c){try{const a=await jS(e,c),s=Object.assign(Object.assign({},c),{authToken:a});return await h5(e.appConfig,s),a}catch(a){if(Fi(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await Zi(e.appConfig);else{const s=Object.assign(Object.assign({},c),{authToken:{requestStatus:0}});await h5(e.appConfig,s)}throw a}}function Yi(e){return e!==void 0&&e.registrationStatus===2}function QS(e){return e.requestStatus===2&&!YS(e)}function YS(e){const c=Date.now();return c<e.creationTime||e.creationTime+e.expiresIn<c+bS}function XS(e){const c={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:c})}function JS(e){return e.requestStatus===1&&e.requestTime+Di<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(e){const c=e,{installationEntry:a,registrationPromise:s}=await yc(c);return s?s.catch(console.error):Sc(c).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,c=!1){const a=e;return await aN(a),(await Sc(a,c)).token}async function aN(e){const{registrationPromise:c}=await yc(e);c&&await c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(e){if(!e||!e.options)throw J0("App Configuration");if(!e.name)throw J0("App Name");const c=["projectId","apiKey","appId"];for(const a of c)if(!e.options[a])throw J0(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function J0(e){return J3.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="installations",tN="installations-internal",rN=e=>{const c=e.getProvider("app").getImmediate(),a=sN(c),s=G6(c,"heartbeat");return{app:c,appConfig:a,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},nN=e=>{const c=e.getProvider("app").getImmediate(),a=G6(c,Xi).getImmediate();return{getId:()=>cN(a),getToken:t=>eN(a,t)}};function iN(){H3(new Z2(Xi,rN,"PUBLIC")),H3(new Z2(tN,nN,"PRIVATE"))}iN();O2(Ii,bc);O2(Ii,bc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5="analytics",oN="firebase_id",lN="origin",fN=60*1e3,hN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ji="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=new D9("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){return Promise.all(e.map(c=>c.catch(a=>a)))}function uN(e,c){const a=document.createElement("script");a.src=`${Ji}?l=${e}&id=${c}`,a.async=!0,document.head.appendChild(a)}function mN(e){let c=[];return Array.isArray(window[e])?c=window[e]:window[e]=c,c}async function vN(e,c,a,s,t,r){const n=s[t];try{if(n)await c[n];else{const o=(await co(a)).find(l=>l.measurementId===t);o&&await c[o.appId]}}catch(i){C2.error(i)}e("config",t,r)}async function CN(e,c,a,s,t){try{let r=[];if(t&&t.send_to){let n=t.send_to;Array.isArray(n)||(n=[n]);const i=await co(a);for(const o of n){const l=i.find(h=>h.measurementId===o),f=l&&c[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(c)),await Promise.all(r),e("event",s,t||{})}catch(r){C2.error(r)}}function pN(e,c,a,s){async function t(r,n,i){try{r==="event"?await CN(e,c,a,n,i):r==="config"?await vN(e,c,a,s,n,i):r==="consent"?e("consent","update",i):e("set",n)}catch(o){C2.error(o)}}return t}function dN(e,c,a,s,t){let r=function(...n){window[s].push(arguments)};return window[t]&&typeof window[t]=="function"&&(r=window[t]),window[t]=pN(r,e,c,a),{gtagCore:r,wrappedGtag:window[t]}}function zN(e){const c=window.document.getElementsByTagName("script");for(const a of Object.values(c))if(a.src&&a.src.includes(Ji)&&a.src.includes(e))return a;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},M2=new T5("analytics","Analytics",HN);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=30,VN=1e3;class gN{constructor(c={},a=VN){this.throttleMetadata=c,this.intervalMillis=a}getThrottleMetadata(c){return this.throttleMetadata[c]}setThrottleMetadata(c,a){this.throttleMetadata[c]=a}deleteThrottleMetadata(c){delete this.throttleMetadata[c]}}const eo=new gN;function LN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bN(e){var c;const{appId:a,apiKey:s}=e,t={method:"GET",headers:LN(s)},r=hN.replace("{app-id}",a),n=await fetch(r,t);if(n.status!==200&&n.status!==304){let i="";try{const o=await n.json();!((c=o.error)===null||c===void 0)&&c.message&&(i=o.error.message)}catch{}throw M2.create("config-fetch-failed",{httpStatus:n.status,responseMessage:i})}return n.json()}async function xN(e,c=eo,a){const{appId:s,apiKey:t,measurementId:r}=e.options;if(!s)throw M2.create("no-app-id");if(!t){if(r)return{measurementId:r,appId:s};throw M2.create("no-api-key")}const n=c.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new NN;return setTimeout(async()=>{i.abort()},a!==void 0?a:fN),ao({appId:s,apiKey:t,measurementId:r},n,i,c)}async function ao(e,{throttleEndTimeMillis:c,backoffCount:a},s,t=eo){var r,n;const{appId:i,measurementId:o}=e;try{await yN(s,c)}catch(l){if(o)return C2.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${(r=l)===null||r===void 0?void 0:r.message}]`),{appId:i,measurementId:o};throw l}try{const l=await bN(e);return t.deleteThrottleMetadata(i),l}catch(l){const f=l;if(!SN(f)){if(t.deleteThrottleMetadata(i),o)return C2.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:o};throw l}const h=Number((n=f==null?void 0:f.customData)===null||n===void 0?void 0:n.httpStatus)===503?Ra(a,t.intervalMillis,MN):Ra(a,t.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:a+1};return t.setThrottleMetadata(i,u),C2.debug(`Calling attemptFetch again in ${h} millis`),ao(e,u,s,t)}}function yN(e,c){return new Promise((a,s)=>{const t=Math.max(c-Date.now(),0),r=setTimeout(a,t);e.addEventListener(()=>{clearTimeout(r),s(M2.create("fetch-throttle",{throttleEndTimeMillis:c}))})})}function SN(e){if(!(e instanceof y3)||!e.customData)return!1;const c=Number(e.customData.httpStatus);return c===429||c===500||c===503||c===504}class NN{constructor(){this.listeners=[]}addEventListener(c){this.listeners.push(c)}abort(){this.listeners.forEach(c=>c())}}async function wN(e,c,a,s,t){if(t&&t.global){e("event",a,s);return}else{const r=await c,n=Object.assign(Object.assign({},s),{send_to:r});e("event",a,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(){var e;if(Ir())try{await Dr()}catch(c){return C2.warn(M2.create("indexeddb-unavailable",{errorInfo:(e=c)===null||e===void 0?void 0:e.toString()}).message),!1}else return C2.warn(M2.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AN(e,c,a,s,t,r,n){var i;const o=xN(e);o.then(C=>{a[C.measurementId]=C.appId,e.options.measurementId&&C.measurementId!==e.options.measurementId&&C2.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>C2.error(C)),c.push(o);const l=kN().then(C=>{if(C)return s.getId()}),[f,h]=await Promise.all([o,l]);zN(r)||uN(r,f.measurementId),t("js",new Date);const u=(i=n==null?void 0:n.config)!==null&&i!==void 0?i:{};return u[lN]="firebase",u.update=!0,h!=null&&(u[oN]=h),t("config",f.measurementId,u),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(c){this.app=c}_delete(){return delete p6[this.app.options.appId],Promise.resolve()}}let p6={},Rs=[];const _s={};let c7="dataLayer",EN="gtag",Fs,so,Bs=!1;function PN(){const e=[];if(ig()&&e.push("This is a browser extension environment."),og()||e.push("Cookies are not available."),e.length>0){const c=e.map((s,t)=>`(${t+1}) ${s}`).join(" "),a=M2.create("invalid-analytics-context",{errorInfo:c});C2.warn(a.message)}}function IN(e,c,a){PN();const s=e.options.appId;if(!s)throw M2.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)C2.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw M2.create("no-api-key");if(p6[s]!=null)throw M2.create("already-exists",{id:s});if(!Bs){mN(c7);const{wrappedGtag:r,gtagCore:n}=dN(p6,Rs,_s,c7,EN);so=r,Fs=n,Bs=!0}return p6[s]=AN(e,Rs,_s,c,Fs,c7,a),new TN(e)}function DN(e=qr()){e=I9(e);const c=G6(e,u5);return c.isInitialized()?c.getImmediate():RN(e)}function RN(e,c={}){const a=G6(e,u5);if(a.isInitialized()){const t=a.getImmediate();if(Y8(c,a.getOptions()))return t;throw M2.create("already-initialized")}return a.initialize({options:c})}function _N(e,c,a,s){e=I9(e),wN(so,p6[e.app.options.appId],c,a,s).catch(t=>C2.error(t))}const Os="@firebase/analytics",qs="0.8.4";function FN(){H3(new Z2(u5,(c,{options:a})=>{const s=c.getProvider("app").getImmediate(),t=c.getProvider("installations-internal").getImmediate();return IN(s,t,a)},"PUBLIC")),H3(new Z2("analytics-internal",e,"PRIVATE")),O2(Os,qs),O2(Os,qs,"esm2017");function e(c){try{const a=c.getProvider(u5).getImmediate();return{logEvent:(s,t,r)=>_N(a,s,t,r)}}catch(a){throw M2.create("interop-component-reg-failed",{reason:a})}}}FN();const BN={apiKey:"AIzaSyADPNamIVS-1HmgWCYb7QK5wmyIMnax-WY",authDomain:"teletubbie-project.firebaseapp.com",projectId:"teletubbie-project",storageBucket:"teletubbie-project.appspot.com",messagingSenderId:"941444811716",appId:"1:941444811716:web:4ad7a617bb7146ca0eb291",measurementId:"G-CKQ9DBX3R6"},to=Or(BN);DN(to);const ON=oS(to),Us=_M("profiles",{state:()=>({profiles:{profiles:[]}}),getters:{getProfiles:e=>e.profiles},actions:{async fetchData(){const e=await MS(Xy(ON,"profiles"));this.profiles=e.docs.map(c=>c.data())}}});const qN={data(){return{profiles:[]}},async mounted(){await Us().fetchData(),this.profiles=Us().getProfiles}},UN={class:"profile"},$N={class:"boxs"},GN=["src"],jN=J("strong",null,"Name:",-1),WN=J("strong",null,"Content:",-1),KN=J("strong",null,"Birthday:",-1),ZN={class:"mx-auto text-right space-x-3 border-t-2 p-3 mt-5"};function QN(e,c,a,s,t,r){const n=Z3("font-awesome-icon");return k2(),W2("div",UN,[(k2(!0),W2(v2,null,ar(t.profiles,i=>(k2(),W2("div",{key:i.id,class:"profilecolor2"},[J("div",$N,[J("div",null,[J("img",{class:"bg-contain bg-center w-96 h-96 scale-70 rounded-full m-1",src:i.Img,alt:"..."},null,8,GN)]),J("div",null,[jN,a2(" "+h3(i.nickname),1)]),J("div",null,[WN,a2(" "+h3(i.content),1)]),KN,a2(" "+h3(i.birthday),1)]),J("div",ZN,[t1(n,{icon:"fa-brands fa-instagram",class:"text-2xl text-red-500"}),t1(n,{icon:"fa-brands fa-twitter",class:"text-2xl text-blue-400"}),t1(n,{icon:"fa-brands fa-facebook",class:"text-2xl text-blue-800"}),t1(n,{icon:"fa-brands fa-github",class:"text-2xl text-black"})])]))),128))])}const $s=q4(qN,[["render",QN]]);const YN={props:{img:{type:String,default:"/assets/images/E.jpg"},name:{type:String,default:"--------"},id:{type:String,default:"--------"},nickname:{type:String,default:"---------"},content:{type:String,default:"----------"},birthday:{type:String,default:"xx - xx - xxxx"}},methods:{getUrlImage(e){return{"background-image":'url("'+e+'")'}}}},XN={class:"profilecolor"},JN={class:"boxs"},cw=J("strong",null," Name :",-1),ew=J("strong",null," Id :",-1),aw=J("strong",null," Nickname :",-1),sw=J("strong",null," Content :",-1),tw=J("strong",null," Birthday :",-1),rw={class:"mx-auto text-right space-x-3 border-t-2 p-2 mt-5"};function nw(e,c,a,s,t,r){const n=Z3("font-awesome-icon");return k2(),W2("div",XN,[J("div",JN,[J("div",{class:"bg-contain bg-center w-96 h-96 scale-70 rounded-full m-2",style:z5(r.getUrlImage(a.img))},null,4),J("div",null,[cw,a2(" "+h3(a.name),1)]),J("div",null,[ew,a2(" "+h3(a.id),1)]),J("div",null,[aw,a2(" "+h3(a.nickname),1)]),J("div",null,[sw,a2(" "+h3(a.content),1)]),J("div",null,[tw,a2(" "+h3(a.birthday),1)]),J("div",rw,[t1(n,{icon:"fa-brands fa-instagram",class:"text-2xl text-red-500"}),t1(n,{icon:"fa-brands fa-twitter",class:"text-2xl text-blue-400"}),t1(n,{icon:"fa-brands fa-facebook",class:"text-2xl text-blue-800"}),t1(n,{icon:"fa-brands fa-github",class:"text-2xl text-black"})])])])}const iw=q4(YN,[["render",nw]]);const ow={data(){return{members:[{img:"https://cdn.discordapp.com/attachments/925320359052451851/1039028567394238504/IMG_0709.jpg",name:"Putita Paiboontanasombut",id:"6410451245",nickname:"bow",content:"KU81",birthday:"03-08-2001"},{img:"https://cdn.discordapp.com/attachments/990831156847050752/1039183549179375738/IMG_20221105_193105_371.jpg",name:"Puttipong Srina",id:"6410450206",nickname:"Boat",content:"KU81",birthday:"24-01-2003"},{img:"https://cdn.discordapp.com/attachments/925320359052451851/1039030661740249138/IMG_1440.jpg",name:"Hataichanok Kladngam",id:"6410451512",nickname:"Earth",content:"KU81",birthday:"18-01-2003"}]}},components:{profileCard:iw}},lw={class:"profiles"};function fw(e,c,a,s,t,r){const n=Z3("profileCard");return k2(),W2("div",lw,[(k2(!0),W2(v2,null,ar(t.members,i=>(k2(),W2("div",{key:i},[t1(n,{img:i.img,name:i.name,id:i.id,nickname:i.nickname,content:i.content,birthday:i.birthday},null,8,["img","name","id","nickname","content","birthday"])]))),128))])}const hw=q4(ow,[["render",fw]]),uw=ag({history:zV("/teletubbies-project/"),routes:[{path:"/",name:"home",component:$s,meta:{layout:"Main"}},{path:"/profile",name:"profile",component:hw},{path:"/myhome",name:"myhome",component:$s}]});function Gs(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function I(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?Gs(Object(a),!0).forEach(function(s){_1(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Gs(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function m5(e){return m5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},m5(e)}function mw(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function js(e,c){for(var a=0;a<c.length;a++){var s=c[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function vw(e,c,a){return c&&js(e.prototype,c),a&&js(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function _1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Nc(e,c){return pw(e)||zw(e,c)||ro(e,c)||Mw()}function r8(e){return Cw(e)||dw(e)||ro(e)||Hw()}function Cw(e){if(Array.isArray(e))return Y7(e)}function pw(e){if(Array.isArray(e))return e}function dw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zw(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var s=[],t=!0,r=!1,n,i;try{for(a=a.call(e);!(t=(n=a.next()).done)&&(s.push(n.value),!(c&&s.length===c));t=!0);}catch(o){r=!0,i=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}return s}}function ro(e,c){if(!!e){if(typeof e=="string")return Y7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Y7(e,c)}}function Y7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function Hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ws=function(){},wc={},no={},io=null,oo={mark:Ws,measure:Ws};try{typeof window<"u"&&(wc=window),typeof document<"u"&&(no=document),typeof MutationObserver<"u"&&(io=MutationObserver),typeof performance<"u"&&(oo=performance)}catch{}var Vw=wc.navigator||{},Ks=Vw.userAgent,Zs=Ks===void 0?"":Ks,L3=wc,M1=no,Qs=io,S8=oo;L3.document;var s3=!!M1.documentElement&&!!M1.head&&typeof M1.addEventListener=="function"&&typeof M1.createElement=="function",lo=~Zs.indexOf("MSIE")||~Zs.indexOf("Trident/"),N8,w8,k8,A8,T8,J2="___FONT_AWESOME___",X7=16,fo="fa",ho="svg-inline--fa",e4="data-fa-i2svg",J7="data-fa-pseudo-element",gw="data-fa-pseudo-element-pending",kc="data-prefix",Ac="data-icon",Ys="fontawesome-i2svg",Lw="async",bw=["HTML","HEAD","STYLE","SCRIPT"],uo=function(){try{return!0}catch{return!1}}(),H1="classic",S1="sharp",Tc=[H1,S1];function n8(e){return new Proxy(e,{get:function(a,s){return s in a?a[s]:a[H1]}})}var F6=n8((N8={},_1(N8,H1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_1(N8,S1,{fa:"solid",fass:"solid","fa-solid":"solid"}),N8)),B6=n8((w8={},_1(w8,H1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_1(w8,S1,{solid:"fass"}),w8)),O6=n8((k8={},_1(k8,H1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_1(k8,S1,{fass:"fa-solid"}),k8)),xw=n8((A8={},_1(A8,H1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_1(A8,S1,{"fa-solid":"fass"}),A8)),yw=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,mo="fa-layers-text",Sw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nw=n8((T8={},_1(T8,H1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_1(T8,S1,{900:"fass"}),T8)),vo=[1,2,3,4,5,6,7,8,9,10],ww=vo.concat([11,12,13,14,15,16,17,18,19,20]),kw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q6=new Set;Object.keys(B6[H1]).map(q6.add.bind(q6));Object.keys(B6[S1]).map(q6.add.bind(q6));var Aw=[].concat(Tc,r8(q6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B3.GROUP,B3.SWAP_OPACITY,B3.PRIMARY,B3.SECONDARY]).concat(vo.map(function(e){return"".concat(e,"x")})).concat(ww.map(function(e){return"w-".concat(e)})),d6=L3.FontAwesomeConfig||{};function Tw(e){var c=M1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function Ew(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(M1&&typeof M1.querySelector=="function"){var Pw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pw.forEach(function(e){var c=Nc(e,2),a=c[0],s=c[1],t=Ew(Tw(a));t!=null&&(d6[s]=t)})}var Co={styleDefault:"solid",familyDefault:"classic",cssPrefix:fo,replacementClass:ho,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d6.familyPrefix&&(d6.cssPrefix=d6.familyPrefix);var R4=I(I({},Co),d6);R4.autoReplaceSvg||(R4.observeMutations=!1);var R={};Object.keys(Co).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(a){R4[e]=a,z6.forEach(function(s){return s(R)})},get:function(){return R4[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(c){R4.cssPrefix=c,z6.forEach(function(a){return a(R)})},get:function(){return R4.cssPrefix}});L3.FontAwesomeConfig=R;var z6=[];function Iw(e){return z6.push(e),function(){z6.splice(z6.indexOf(e),1)}}var i3=X7,F2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dw(e){if(!(!e||!s3)){var c=M1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=M1.head.childNodes,s=null,t=a.length-1;t>-1;t--){var r=a[t],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=r)}return M1.head.insertBefore(c,s),e}}var Rw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U6(){for(var e=12,c="";e-- >0;)c+=Rw[Math.random()*62|0];return c}function Z4(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function Ec(e){return e.classList?Z4(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function po(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _w(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(po(e[a]),'" ')},"").trim()}function r0(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Pc(e){return e.size!==F2.size||e.x!==F2.x||e.y!==F2.y||e.rotate!==F2.rotate||e.flipX||e.flipY}function Fw(e){var c=e.transform,a=e.containerWidth,s=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(n," ").concat(i)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:t,inner:o,path:l}}function Bw(e){var c=e.transform,a=e.width,s=a===void 0?X7:a,t=e.height,r=t===void 0?X7:t,n=e.startCentered,i=n===void 0?!1:n,o="";return i&&lo?o+="translate(".concat(c.x/i3-s/2,"em, ").concat(c.y/i3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(c.x/i3,"em), calc(-50% + ").concat(c.y/i3,"em)) "):o+="translate(".concat(c.x/i3,"em, ").concat(c.y/i3,"em) "),o+="scale(".concat(c.size/i3*(c.flipX?-1:1),", ").concat(c.size/i3*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var Ow=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zo(){var e=fo,c=ho,a=R.cssPrefix,s=R.replacementClass,t=Ow;if(a!==e||s!==c){var r=new RegExp("\\.".concat(e,"\\-"),"g"),n=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");t=t.replace(r,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(i,".".concat(s))}return t}var Xs=!1;function e7(){R.autoAddCss&&!Xs&&(Dw(zo()),Xs=!0)}var qw={mixout:function(){return{dom:{css:zo,insertCss:e7}}},hooks:function(){return{beforeDOMElementCreation:function(){e7()},beforeI2svg:function(){e7()}}}},c3=L3||{};c3[J2]||(c3[J2]={});c3[J2].styles||(c3[J2].styles={});c3[J2].hooks||(c3[J2].hooks={});c3[J2].shims||(c3[J2].shims=[]);var S2=c3[J2],Ho=[],Uw=function e(){M1.removeEventListener("DOMContentLoaded",e),v5=1,Ho.map(function(c){return c()})},v5=!1;s3&&(v5=(M1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M1.readyState),v5||M1.addEventListener("DOMContentLoaded",Uw));function $w(e){!s3||(v5?setTimeout(e,0):Ho.push(e))}function i8(e){var c=e.tag,a=e.attributes,s=a===void 0?{}:a,t=e.children,r=t===void 0?[]:t;return typeof e=="string"?po(e):"<".concat(c," ").concat(_w(s),">").concat(r.map(i8).join(""),"</").concat(c,">")}function Js(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var Gw=function(c,a){return function(s,t,r,n){return c.call(a,s,t,r,n)}},a7=function(c,a,s,t){var r=Object.keys(c),n=r.length,i=t!==void 0?Gw(a,t):a,o,l,f;for(s===void 0?(o=1,f=c[r[0]]):(o=0,f=s);o<n;o++)l=r[o],f=i(f,c[l],l,c);return f};function jw(e){for(var c=[],a=0,s=e.length;a<s;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<s){var r=e.charCodeAt(a++);(r&64512)==56320?c.push(((t&1023)<<10)+(r&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function c9(e){var c=jw(e);return c.length===1?c[0].toString(16):null}function Ww(e,c){var a=e.length,s=e.charCodeAt(c),t;return s>=55296&&s<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(s-55296)*1024+t-56320+65536:s}function ct(e){return Object.keys(e).reduce(function(c,a){var s=e[a],t=!!s.icon;return t?c[s.iconName]=s.icon:c[a]=s,c},{})}function e9(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,t=s===void 0?!1:s,r=ct(c);typeof S2.hooks.addPack=="function"&&!t?S2.hooks.addPack(e,ct(c)):S2.styles[e]=I(I({},S2.styles[e]||{}),r),e==="fas"&&e9("fa",c)}var E8,P8,I8,m4=S2.styles,Kw=S2.shims,Zw=(E8={},_1(E8,H1,Object.values(O6[H1])),_1(E8,S1,Object.values(O6[S1])),E8),Ic=null,Mo={},Vo={},go={},Lo={},bo={},Qw=(P8={},_1(P8,H1,Object.keys(F6[H1])),_1(P8,S1,Object.keys(F6[S1])),P8);function Yw(e){return~Aw.indexOf(e)}function Xw(e,c){var a=c.split("-"),s=a[0],t=a.slice(1).join("-");return s===e&&t!==""&&!Yw(t)?t:null}var xo=function(){var c=function(r){return a7(m4,function(n,i,o){return n[o]=a7(i,r,{}),n},{})};Mo=c(function(t,r,n){if(r[3]&&(t[r[3]]=n),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){t[o.toString(16)]=n})}return t}),Vo=c(function(t,r,n){if(t[n]=n,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){t[o]=n})}return t}),bo=c(function(t,r,n){var i=r[2];return t[n]=n,i.forEach(function(o){t[o]=n}),t});var a="far"in m4||R.autoFetchSvg,s=a7(Kw,function(t,r){var n=r[0],i=r[1],o=r[2];return i==="far"&&!a&&(i="fas"),typeof n=="string"&&(t.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(t.unicodes[n.toString(16)]={prefix:i,iconName:o}),t},{names:{},unicodes:{}});go=s.names,Lo=s.unicodes,Ic=n0(R.styleDefault,{family:R.familyDefault})};Iw(function(e){Ic=n0(e.styleDefault,{family:R.familyDefault})});xo();function Dc(e,c){return(Mo[e]||{})[c]}function Jw(e,c){return(Vo[e]||{})[c]}function O3(e,c){return(bo[e]||{})[c]}function yo(e){return go[e]||{prefix:null,iconName:null}}function ck(e){var c=Lo[e],a=Dc("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function b3(){return Ic}var Rc=function(){return{prefix:null,iconName:null,rest:[]}};function n0(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,s=a===void 0?H1:a,t=F6[s][e],r=B6[s][e]||B6[s][t],n=e in S2.styles?e:null;return r||n||null}var et=(I8={},_1(I8,H1,Object.keys(O6[H1])),_1(I8,S1,Object.keys(O6[S1])),I8);function i0(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,t=s===void 0?!1:s,r=(c={},_1(c,H1,"".concat(R.cssPrefix,"-").concat(H1)),_1(c,S1,"".concat(R.cssPrefix,"-").concat(S1)),c),n=null,i=H1;(e.includes(r[H1])||e.some(function(l){return et[H1].includes(l)}))&&(i=H1),(e.includes(r[S1])||e.some(function(l){return et[S1].includes(l)}))&&(i=S1);var o=e.reduce(function(l,f){var h=Xw(R.cssPrefix,f);if(m4[f]?(f=Zw[i].includes(f)?xw[i][f]:f,n=f,l.prefix=f):Qw[i].indexOf(f)>-1?(n=f,l.prefix=n0(f,{family:i})):h?l.iconName=h:f!==R.replacementClass&&f!==r[H1]&&f!==r[S1]&&l.rest.push(f),!t&&l.prefix&&l.iconName){var u=n==="fa"?yo(l.iconName):{},C=O3(l.prefix,l.iconName);u.prefix&&(n=null),l.iconName=u.iconName||C||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!m4.far&&m4.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},Rc());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===S1&&(m4.fass||R.autoFetchSvg)&&(o.prefix="fass",o.iconName=O3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=b3()||"fas"),o}var ek=function(){function e(){mw(this,e),this.definitions={}}return vw(e,[{key:"add",value:function(){for(var a=this,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];var n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(i){a.definitions[i]=I(I({},a.definitions[i]||{}),n[i]),e9(i,n[i]);var o=O6[H1][i];o&&e9(o,n[i]),xo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var t=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(t).map(function(r){var n=t[r],i=n.prefix,o=n.iconName,l=n.icon,f=l[2];a[i]||(a[i]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(a[i][h]=l)}),a[i][o]=l}),a}}]),e}(),at=[],v4={},L4={},ak=Object.keys(L4);function sk(e,c){var a=c.mixoutsTo;return at=e,v4={},Object.keys(L4).forEach(function(s){ak.indexOf(s)===-1&&delete L4[s]}),at.forEach(function(s){var t=s.mixout?s.mixout():{};if(Object.keys(t).forEach(function(n){typeof t[n]=="function"&&(a[n]=t[n]),m5(t[n])==="object"&&Object.keys(t[n]).forEach(function(i){a[n]||(a[n]={}),a[n][i]=t[n][i]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(n){v4[n]||(v4[n]=[]),v4[n].push(r[n])})}s.provides&&s.provides(L4)}),a}function a9(e,c){for(var a=arguments.length,s=new Array(a>2?a-2:0),t=2;t<a;t++)s[t-2]=arguments[t];var r=v4[e]||[];return r.forEach(function(n){c=n.apply(null,[c].concat(s))}),c}function a4(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),s=1;s<c;s++)a[s-1]=arguments[s];var t=v4[e]||[];t.forEach(function(r){r.apply(null,a)})}function e3(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return L4[e]?L4[e].apply(null,c):void 0}function s9(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||b3();if(!!c)return c=O3(a,c)||c,Js(So.definitions,a,c)||Js(S2.styles,a,c)}var So=new ek,tk=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,a4("noAuto")},rk={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s3?(a4("beforeI2svg",c),e3("pseudoElements2svg",c),e3("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,$w(function(){ik({autoReplaceSvgRoot:a}),a4("watch",c)})}},nk={icon:function(c){if(c===null)return null;if(m5(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:O3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=n0(c[0]);return{prefix:s,iconName:O3(s,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(R.cssPrefix,"-"))>-1||c.match(yw))){var t=i0(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||b3(),iconName:O3(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var r=b3();return{prefix:r,iconName:O3(r,c)||c}}}},z2={noAuto:tk,config:R,dom:rk,parse:nk,library:So,findIconDefinition:s9,toHtml:i8},ik=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,s=a===void 0?M1:a;(Object.keys(S2.styles).length>0||R.autoFetchSvg)&&s3&&R.autoReplaceSvg&&z2.dom.i2svg({node:s})};function o0(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(s){return i8(s)})}}),Object.defineProperty(e,"node",{get:function(){if(!!s3){var s=M1.createElement("div");return s.innerHTML=e.html,s.children}}}),e}function ok(e){var c=e.children,a=e.main,s=e.mask,t=e.attributes,r=e.styles,n=e.transform;if(Pc(n)&&a.found&&!s.found){var i=a.width,o=a.height,l={x:i/o/2,y:.5};t.style=r0(I(I({},r),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function lk(e){var c=e.prefix,a=e.iconName,s=e.children,t=e.attributes,r=e.symbol,n=r===!0?"".concat(c,"-").concat(R.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},t),{},{id:n}),children:s}]}]}function _c(e){var c=e.icons,a=c.main,s=c.mask,t=e.prefix,r=e.iconName,n=e.transform,i=e.symbol,o=e.title,l=e.maskId,f=e.titleId,h=e.extra,u=e.watchable,C=u===void 0?!1:u,z=s.found?s:a,L=z.width,w=z.height,d=t==="fak",M=[R.replacementClass,r?"".concat(R.cssPrefix,"-").concat(r):""].filter(function(V1){return h.classes.indexOf(V1)===-1}).filter(function(V1){return V1!==""||!!V1}).concat(h.classes).join(" "),y={children:[],attributes:I(I({},h.attributes),{},{"data-prefix":t,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(w)})},F=d&&!~h.classes.indexOf("fa-fw")?{width:"".concat(L/w*16*.0625,"em")}:{};C&&(y.attributes[e4]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||U6())},children:[o]}),delete y.attributes.title);var $=I(I({},y),{},{prefix:t,iconName:r,main:a,mask:s,maskId:l,transform:n,symbol:i,styles:I(I({},F),h.styles)}),l1=s.found&&a.found?e3("generateAbstractMask",$)||{children:[],attributes:{}}:e3("generateAbstractIcon",$)||{children:[],attributes:{}},j=l1.children,e1=l1.attributes;return $.children=j,$.attributes=e1,i?lk($):ok($)}function st(e){var c=e.content,a=e.width,s=e.height,t=e.transform,r=e.title,n=e.extra,i=e.watchable,o=i===void 0?!1:i,l=I(I(I({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});o&&(l[e4]="");var f=I({},n.styles);Pc(t)&&(f.transform=Bw({transform:t,startCentered:!0,width:a,height:s}),f["-webkit-transform"]=f.transform);var h=r0(f);h.length>0&&(l.style=h);var u=[];return u.push({tag:"span",attributes:l,children:[c]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function fk(e){var c=e.content,a=e.title,s=e.extra,t=I(I(I({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=r0(s.styles);r.length>0&&(t.style=r);var n=[];return n.push({tag:"span",attributes:t,children:[c]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var s7=S2.styles;function t9(e){var c=e[0],a=e[1],s=e.slice(4),t=Nc(s,1),r=t[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(B3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(B3.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(B3.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:a,icon:n}}var hk={found:!1,width:512,height:512};function uk(e,c){!uo&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function r9(e,c){var a=c;return c==="fa"&&R.styleDefault!==null&&(c=b3()),new Promise(function(s,t){if(e3("missingIconAbstract"),a==="fa"){var r=yo(e)||{};e=r.iconName||e,c=r.prefix||c}if(e&&c&&s7[c]&&s7[c][e]){var n=s7[c][e];return s(t9(n))}uk(e,c),s(I(I({},hk),{},{icon:R.showMissingIcons&&e?e3("missingIconAbstract")||{}:{}}))})}var tt=function(){},n9=R.measurePerformance&&S8&&S8.mark&&S8.measure?S8:{mark:tt,measure:tt},t6='FA "6.2.0"',mk=function(c){return n9.mark("".concat(t6," ").concat(c," begins")),function(){return No(c)}},No=function(c){n9.mark("".concat(t6," ").concat(c," ends")),n9.measure("".concat(t6," ").concat(c),"".concat(t6," ").concat(c," begins"),"".concat(t6," ").concat(c," ends"))},Fc={begin:mk,end:No},q8=function(){};function rt(e){var c=e.getAttribute?e.getAttribute(e4):null;return typeof c=="string"}function vk(e){var c=e.getAttribute?e.getAttribute(kc):null,a=e.getAttribute?e.getAttribute(Ac):null;return c&&a}function Ck(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function pk(){if(R.autoReplaceSvg===!0)return U8.replace;var e=U8[R.autoReplaceSvg];return e||U8.replace}function dk(e){return M1.createElementNS("http://www.w3.org/2000/svg",e)}function zk(e){return M1.createElement(e)}function wo(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,s=a===void 0?e.tag==="svg"?dk:zk:a;if(typeof e=="string")return M1.createTextNode(e);var t=s(e.tag);Object.keys(e.attributes||[]).forEach(function(n){t.setAttribute(n,e.attributes[n])});var r=e.children||[];return r.forEach(function(n){t.appendChild(wo(n,{ceFn:s}))}),t}function Hk(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var U8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(wo(t),a)}),a.getAttribute(e4)===null&&R.keepOriginalSource){var s=M1.createComment(Hk(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(c){var a=c[0],s=c[1];if(~Ec(a).indexOf(R.replacementClass))return U8.replace(c);var t=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(i,o){return o===R.replacementClass||o.match(t)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var n=s.map(function(i){return i8(i)}).join(`
`);a.setAttribute(e4,""),a.innerHTML=n}};function nt(e){e()}function ko(e,c){var a=typeof c=="function"?c:q8;if(e.length===0)a();else{var s=nt;R.mutateApproach===Lw&&(s=L3.requestAnimationFrame||nt),s(function(){var t=pk(),r=Fc.begin("mutate");e.map(t),r(),a()})}}var Bc=!1;function Ao(){Bc=!0}function i9(){Bc=!1}var C5=null;function it(e){if(!!Qs&&!!R.observeMutations){var c=e.treeCallback,a=c===void 0?q8:c,s=e.nodeCallback,t=s===void 0?q8:s,r=e.pseudoElementsCallback,n=r===void 0?q8:r,i=e.observeMutationsRoot,o=i===void 0?M1:i;C5=new Qs(function(l){if(!Bc){var f=b3();Z4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!rt(h.addedNodes[0])&&(R.searchPseudoElements&&n(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&R.searchPseudoElements&&n(h.target.parentNode),h.type==="attributes"&&rt(h.target)&&~kw.indexOf(h.attributeName))if(h.attributeName==="class"&&vk(h.target)){var u=i0(Ec(h.target)),C=u.prefix,z=u.iconName;h.target.setAttribute(kc,C||f),z&&h.target.setAttribute(Ac,z)}else Ck(h.target)&&t(h.target)})}}),s3&&C5.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mk(){!C5||C5.disconnect()}function Vk(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(s,t){var r=t.split(":"),n=r[0],i=r.slice(1);return n&&i.length>0&&(s[n]=i.join(":").trim()),s},{})),a}function gk(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",t=i0(Ec(e));return t.prefix||(t.prefix=b3()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&s.length>0&&(t.iconName=Jw(t.prefix,e.innerText)||Dc(t.prefix,c9(e.innerText))),!t.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function Lk(e){var c=Z4(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{}),a=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return R.autoA11y&&(a?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(s||U6()):(c["aria-hidden"]="true",c.focusable="false")),c}function bk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ot(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=gk(e),s=a.iconName,t=a.prefix,r=a.rest,n=Lk(e),i=a9("parseNodeAttributes",{},e),o=c.styleParser?Vk(e):[];return I({iconName:s,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:F2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:n}},i)}var xk=S2.styles;function To(e){var c=R.autoReplaceSvg==="nest"?ot(e,{styleParser:!1}):ot(e);return~c.extra.classes.indexOf(mo)?e3("generateLayersText",e,c):e3("generateSvgReplacementMutation",e,c)}var x3=new Set;Tc.map(function(e){x3.add("fa-".concat(e))});Object.keys(F6[H1]).map(x3.add.bind(x3));Object.keys(F6[S1]).map(x3.add.bind(x3));x3=r8(x3);function lt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s3)return Promise.resolve();var a=M1.documentElement.classList,s=function(h){return a.add("".concat(Ys,"-").concat(h))},t=function(h){return a.remove("".concat(Ys,"-").concat(h))},r=R.autoFetchSvg?x3:Tc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(xk));r.includes("fa")||r.push("fa");var n=[".".concat(mo,":not([").concat(e4,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(e4,"])")})).join(", ");if(n.length===0)return Promise.resolve();var i=[];try{i=Z4(e.querySelectorAll(n))}catch{}if(i.length>0)s("pending"),t("complete");else return Promise.resolve();var o=Fc.begin("onTree"),l=i.reduce(function(f,h){try{var u=To(h);u&&f.push(u)}catch(C){uo||C.name==="MissingIcon"&&console.error(C)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){ko(u,function(){s("active"),s("complete"),t("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(u){o(),h(u)})})}function yk(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;To(e).then(function(a){a&&ko([a],c)})}function Sk(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:s9(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:s9(t||{})),e(s,I(I({},a),{},{mask:t}))}}var Nk=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,t=s===void 0?F2:s,r=a.symbol,n=r===void 0?!1:r,i=a.mask,o=i===void 0?null:i,l=a.maskId,f=l===void 0?null:l,h=a.title,u=h===void 0?null:h,C=a.titleId,z=C===void 0?null:C,L=a.classes,w=L===void 0?[]:L,d=a.attributes,M=d===void 0?{}:d,y=a.styles,F=y===void 0?{}:y;if(!!c){var $=c.prefix,l1=c.iconName,j=c.icon;return o0(I({type:"icon"},c),function(){return a4("beforeDOMElementCreation",{iconDefinition:c,params:a}),R.autoA11y&&(u?M["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(z||U6()):(M["aria-hidden"]="true",M.focusable="false")),_c({icons:{main:t9(j),mask:o?t9(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:l1,transform:I(I({},F2),t),symbol:n,title:u,maskId:f,titleId:z,extra:{attributes:M,styles:F,classes:w}})})}},wk={mixout:function(){return{icon:Sk(Nk)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=lt,a.nodeCallback=yk,a}}},provides:function(c){c.i2svg=function(a){var s=a.node,t=s===void 0?M1:s,r=a.callback,n=r===void 0?function(){}:r;return lt(t,n)},c.generateSvgReplacementMutation=function(a,s){var t=s.iconName,r=s.title,n=s.titleId,i=s.prefix,o=s.transform,l=s.symbol,f=s.mask,h=s.maskId,u=s.extra;return new Promise(function(C,z){Promise.all([r9(t,i),f.iconName?r9(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var w=Nc(L,2),d=w[0],M=w[1];C([a,_c({icons:{main:d,mask:M},prefix:i,iconName:t,transform:o,symbol:l,maskId:h,title:r,titleId:n,extra:u,watchable:!0})])}).catch(z)})},c.generateAbstractIcon=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.transform,i=a.styles,o=r0(i);o.length>0&&(t.style=o);var l;return Pc(n)&&(l=e3("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:t}}}},kk={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.classes,r=t===void 0?[]:t;return o0({type:"layer"},function(){a4("beforeDOMElementCreation",{assembler:a,params:s});var n=[];return a(function(i){Array.isArray(i)?i.map(function(o){n=n.concat(o.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(r8(r)).join(" ")},children:n}]})}}}},Ak={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.title,r=t===void 0?null:t,n=s.classes,i=n===void 0?[]:n,o=s.attributes,l=o===void 0?{}:o,f=s.styles,h=f===void 0?{}:f;return o0({type:"counter",content:a},function(){return a4("beforeDOMElementCreation",{content:a,params:s}),fk({content:a.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(r8(i))}})})}}}},Tk={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.transform,r=t===void 0?F2:t,n=s.title,i=n===void 0?null:n,o=s.classes,l=o===void 0?[]:o,f=s.attributes,h=f===void 0?{}:f,u=s.styles,C=u===void 0?{}:u;return o0({type:"text",content:a},function(){return a4("beforeDOMElementCreation",{content:a,params:s}),st({content:a,transform:I(I({},F2),r),title:i,extra:{attributes:h,styles:C,classes:["".concat(R.cssPrefix,"-layers-text")].concat(r8(l))}})})}}},provides:function(c){c.generateLayersText=function(a,s){var t=s.title,r=s.transform,n=s.extra,i=null,o=null;if(lo){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,o=f.height/l}return R.autoA11y&&!t&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,st({content:a.innerHTML,width:i,height:o,transform:r,title:t,extra:n,watchable:!0})])}}},Ek=new RegExp('"',"ug"),ft=[1105920,1112319];function Pk(e){var c=e.replace(Ek,""),a=Ww(c,0),s=a>=ft[0]&&a<=ft[1],t=c.length===2?c[0]===c[1]:!1;return{value:c9(t?c[0]:c),isSecondary:s||t}}function ht(e,c){var a="".concat(gw).concat(c.replace(":","-"));return new Promise(function(s,t){if(e.getAttribute(a)!==null)return s();var r=Z4(e.children),n=r.filter(function(j){return j.getAttribute(J7)===c})[0],i=L3.getComputedStyle(e,c),o=i.getPropertyValue("font-family").match(Sw),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(n&&!o)return e.removeChild(n),s();if(o&&f!=="none"&&f!==""){var h=i.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?S1:H1,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B6[u][o[2].toLowerCase()]:Nw[u][l],z=Pk(h),L=z.value,w=z.isSecondary,d=o[0].startsWith("FontAwesome"),M=Dc(C,L),y=M;if(d){var F=ck(L);F.iconName&&F.prefix&&(M=F.iconName,C=F.prefix)}if(M&&!w&&(!n||n.getAttribute(kc)!==C||n.getAttribute(Ac)!==y)){e.setAttribute(a,y),n&&e.removeChild(n);var $=bk(),l1=$.extra;l1.attributes[J7]=c,r9(M,C).then(function(j){var e1=_c(I(I({},$),{},{icons:{main:j,mask:Rc()},prefix:C,iconName:y,extra:l1,watchable:!0})),V1=M1.createElement("svg");c==="::before"?e.insertBefore(V1,e.firstChild):e.appendChild(V1),V1.outerHTML=e1.map(function(F1){return i8(F1)}).join(`
`),e.removeAttribute(a),s()}).catch(t)}else s()}else s()})}function Ik(e){return Promise.all([ht(e,"::before"),ht(e,"::after")])}function Dk(e){return e.parentNode!==document.head&&!~bw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(J7)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ut(e){if(!!s3)return new Promise(function(c,a){var s=Z4(e.querySelectorAll("*")).filter(Dk).map(Ik),t=Fc.begin("searchPseudoElements");Ao(),Promise.all(s).then(function(){t(),i9(),c()}).catch(function(){t(),i9(),a()})})}var Rk={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ut,a}}},provides:function(c){c.pseudoElements2svg=function(a){var s=a.node,t=s===void 0?M1:s;R.searchPseudoElements&&ut(t)}}},mt=!1,_k={mixout:function(){return{dom:{unwatch:function(){Ao(),mt=!0}}}},hooks:function(){return{bootstrap:function(){it(a9("mutationObserverCallbacks",{}))},noAuto:function(){Mk()},watch:function(a){var s=a.observeMutationsRoot;mt?i9():it(a9("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},vt=function(c){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(s,t){var r=t.toLowerCase().split("-"),n=r[0],i=r.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},a)},Fk={mixout:function(){return{parse:{transform:function(a){return vt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-transform");return t&&(a.transform=vt(t)),a}}},provides:function(c){c.generateAbstractTransformGrouping=function(a){var s=a.main,t=a.transform,r=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),l="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},u={transform:"translate(".concat(n/2*-1," -256)")},C={outer:i,inner:h,path:u};return{tag:"g",attributes:I({},C.outer),children:[{tag:"g",attributes:I({},C.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:I(I({},s.icon.attributes),C.path)}]}]}}}},t7={x:0,y:0,width:"100%",height:"100%"};function Ct(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function Bk(e){return e.tag==="g"?e.children:[e]}var Ok={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-mask"),r=t?i0(t.split(" ").map(function(n){return n.trim()})):Rc();return r.prefix||(r.prefix=b3()),a.mask=r,a.maskId=s.getAttribute("data-fa-mask-id"),a}}},provides:function(c){c.generateAbstractMask=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.mask,i=a.maskId,o=a.transform,l=r.width,f=r.icon,h=n.width,u=n.icon,C=Fw({transform:o,containerWidth:h,iconWidth:l}),z={tag:"rect",attributes:I(I({},t7),{},{fill:"white"})},L=f.children?{children:f.children.map(Ct)}:{},w={tag:"g",attributes:I({},C.inner),children:[Ct(I({tag:f.tag,attributes:I(I({},f.attributes),C.path)},L))]},d={tag:"g",attributes:I({},C.outer),children:[w]},M="mask-".concat(i||U6()),y="clip-".concat(i||U6()),F={tag:"mask",attributes:I(I({},t7),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,d]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Bk(u)},F]};return s.push($,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(M,")")},t7)}),{children:s,attributes:t}}}},qk={provides:function(c){var a=!1;L3.matchMedia&&(a=L3.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var s=[],t={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:I(I({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=I(I({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:I(I({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||i.children.push({tag:"animate",attributes:I(I({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:I(I({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:I(I({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||s.push({tag:"path",attributes:I(I({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Uk={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return a.symbol=r,a}}}},$k=[qw,wk,kk,Ak,Tk,Rk,_k,Fk,Ok,qk,Uk];sk($k,{mixoutsTo:z2});z2.noAuto;var Eo=z2.config,Oc=z2.library;z2.dom;var p5=z2.parse;z2.findIconDefinition;z2.toHtml;var Gk=z2.icon;z2.layer;var jk=z2.text;z2.counter;function pt(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function x2(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?pt(Object(a),!0).forEach(function(s){i2(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pt(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function d5(e){return d5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d5(e)}function i2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Wk(e,c){if(e==null)return{};var a={},s=Object.keys(e),t,r;for(r=0;r<s.length;r++)t=s[r],!(c.indexOf(t)>=0)&&(a[t]=e[t]);return a}function Kk(e,c){if(e==null)return{};var a=Wk(e,c),s,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],!(c.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(a[s]=e[s]))}return a}function o9(e){return Zk(e)||Qk(e)||Yk(e)||Xk()}function Zk(e){if(Array.isArray(e))return l9(e)}function Qk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yk(e,c){if(!!e){if(typeof e=="string")return l9(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l9(e,c)}}function l9(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function Xk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.