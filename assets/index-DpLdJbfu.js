(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ap=()=>{};var ac={};/**
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
 */const Ju=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,w=d&63;c||(w=64,o||(g=64)),r.push(t[f],t[m],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Cp;const g=s<<2|l>>4;if(r.push(g),d!==64){const w=l<<4&240|d>>2;if(r.push(w),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(n){const e=Ju(n);return Xu.encodeByteArray(e,!0)},Bi=function(n){return Pp(n).replace(/\./g,"")},Yu=function(n){try{return Xu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xp=()=>Rp().__FIREBASE_DEFAULTS__,kp=()=>{if(typeof process>"u"||typeof ac>"u")return;const n=ac.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yu(n[1]);return e&&JSON.parse(e)},fs=()=>{try{return Ap()||xp()||kp()||Dp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zu=n=>{var e,t;return(t=(e=fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mp=n=>{const e=Zu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ed=()=>{var n;return(n=fs())===null||n===void 0?void 0:n.config},td=n=>{var e;return(e=fs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Vp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bi(JSON.stringify(t)),Bi(JSON.stringify(o)),""].join(".")}const Sr={};function Op(){const n={prod:[],emulator:[]};for(const e of Object.keys(Sr))Sr[e]?n.emulator.push(e):n.prod.push(e);return n}function Lp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let oc=!1;function rd(n,e){if(typeof window>"u"||typeof document>"u"||!Hn(window.location.host)||Sr[n]===e||Sr[n]||oc)return;Sr[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=Op().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{oc=!0,o()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Lp(r),w=t("text"),C=document.getElementById(w)||document.createElement("span"),D=t("learnmore"),P=document.getElementById(D)||document.createElement("a"),j=t("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;l($),f(P,D);const Y=d();c(F,j),$.append(F,C,P,Y),document.body.appendChild($)}s?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function $p(){var n;const e=(n=fs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Up(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bp(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zp(){return!$p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hp(){try{return typeof indexedDB=="object"}catch{return!1}}function Gp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Wp="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wp,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kp(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wt(i,l,r)}}function Kp(n,e){return n.replace(Qp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qp=/\{\$([^}]+)}/g;function Jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ut(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(lc(s)&&lc(o)){if(!Ut(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lc(n){return n!==null&&typeof n=="object"}/**
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
 */function zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function br(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xp(n,e){const t=new Yp(n,e);return t.subscribe.bind(t)}class Yp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function la(){}/**
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
 */function ge(n){return n&&n._delegate?n._delegate:n}class cn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class em{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Np;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nm(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(n){return n===sn?void 0:n}function nm(n){return n.instantiationMode==="EAGER"}/**
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
 */class rm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new em(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const im={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},sm=K.INFO,am={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},om=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=am[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class io{constructor(e){this.name=e,this._logLevel=sm,this._logHandler=om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const lm=(n,e)=>e.some(t=>n instanceof t);let cc,uc;function cm(){return cc||(cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return uc||(uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const id=new WeakMap,Ia=new WeakMap,sd=new WeakMap,ca=new WeakMap,so=new WeakMap;function dm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ot(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&id.set(t,n)}).catch(()=>{}),so.set(e,n),e}function hm(n){if(Ia.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ia.set(n,e)}let Aa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ia.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fm(n){Aa=n(Aa)}function pm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ua(this),e,...t);return sd.set(r,e.sort?e.sort():[e]),Ot(r)}:um().includes(n)?function(...e){return n.apply(ua(this),e),Ot(id.get(this))}:function(...e){return Ot(n.apply(ua(this),e))}}function mm(n){return typeof n=="function"?pm(n):(n instanceof IDBTransaction&&hm(n),lm(n,cm())?new Proxy(n,Aa):n)}function Ot(n){if(n instanceof IDBRequest)return dm(n);if(ca.has(n))return ca.get(n);const e=mm(n);return e!==n&&(ca.set(n,e),so.set(e,n)),e}const ua=n=>so.get(n);function gm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=Ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const vm=["get","getKey","getAll","getAllKeys","count"],ym=["put","add","delete","clear"],da=new Map;function dc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ym.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vm.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return da.set(e,s),s}fm(n=>({...n,get:(e,t,r)=>dc(e,t)||n.get(e,t,r),has:(e,t)=>!!dc(e,t)||n.has(e,t)}));/**
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
 */class _m{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Em(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Em(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sa="@firebase/app",hc="0.13.2";/**
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
 */const _t=new io("@firebase/app"),bm="@firebase/app-compat",Tm="@firebase/analytics-compat",wm="@firebase/analytics",Im="@firebase/app-check-compat",Am="@firebase/app-check",Sm="@firebase/auth",Cm="@firebase/auth-compat",Pm="@firebase/database",Rm="@firebase/data-connect",xm="@firebase/database-compat",km="@firebase/functions",Dm="@firebase/functions-compat",Mm="@firebase/installations",Nm="@firebase/installations-compat",Vm="@firebase/messaging",Om="@firebase/messaging-compat",Lm="@firebase/performance",Fm="@firebase/performance-compat",$m="@firebase/remote-config",qm="@firebase/remote-config-compat",Um="@firebase/storage",jm="@firebase/storage-compat",Bm="@firebase/firestore",zm="@firebase/ai",Hm="@firebase/firestore-compat",Gm="firebase",Wm="11.10.0";/**
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
 */const Ca="[DEFAULT]",Km={[Sa]:"fire-core",[bm]:"fire-core-compat",[wm]:"fire-analytics",[Tm]:"fire-analytics-compat",[Am]:"fire-app-check",[Im]:"fire-app-check-compat",[Sm]:"fire-auth",[Cm]:"fire-auth-compat",[Pm]:"fire-rtdb",[Rm]:"fire-data-connect",[xm]:"fire-rtdb-compat",[km]:"fire-fn",[Dm]:"fire-fn-compat",[Mm]:"fire-iid",[Nm]:"fire-iid-compat",[Vm]:"fire-fcm",[Om]:"fire-fcm-compat",[Lm]:"fire-perf",[Fm]:"fire-perf-compat",[$m]:"fire-rc",[qm]:"fire-rc-compat",[Um]:"fire-gcs",[jm]:"fire-gcs-compat",[Bm]:"fire-fst",[Hm]:"fire-fst-compat",[zm]:"fire-vertex","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const zi=new Map,Qm=new Map,Pa=new Map;function fc(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function On(n){const e=n.name;if(Pa.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,n);for(const t of zi.values())fc(t,n);for(const t of Qm.values())fc(t,n);return!0}function ao(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Br("app","Firebase",Jm);/**
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
 */class Xm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=Wm;function ad(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ca,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(t||(t=ed()),!t)throw Lt.create("no-options");const s=zi.get(i);if(s){if(Ut(t,s.options)&&Ut(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const o=new rm(i);for(const c of Pa.values())o.addComponent(c);const l=new Xm(t,r,o);return zi.set(i,l),l}function od(n=Ca){const e=zi.get(n);if(!e&&n===Ca&&ed())return ad();if(!e)throw Lt.create("no-app",{appName:n});return e}function Ft(n,e,t){var r;let i=(r=Km[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(l.join(" "));return}On(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ym="firebase-heartbeat-database",Zm=1,Mr="firebase-heartbeat-store";let ha=null;function ld(){return ha||(ha=gm(Ym,Zm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),ha}async function eg(n){try{const t=(await ld()).transaction(Mr),r=await t.objectStore(Mr).get(cd(n));return await t.done,r}catch(e){if(e instanceof wt)_t.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function pc(n,e){try{const r=(await ld()).transaction(Mr,"readwrite");await r.objectStore(Mr).put(e,cd(n)),await r.done}catch(t){if(t instanceof wt)_t.warn(t.message);else{const r=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function cd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tg=1024,ng=30;class rg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ng){const o=ag(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mc(),{heartbeatsToSend:r,unsentEntries:i}=ig(this._heartbeatsCache.heartbeats),s=Bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return _t.warn(t),""}}}function mc(){return new Date().toISOString().substring(0,10)}function ig(n,e=tg){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hp()?Gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gc(n){return Bi(JSON.stringify({version:2,heartbeats:n})).length}function ag(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function og(n){On(new cn("platform-logger",e=>new _m(e),"PRIVATE")),On(new cn("heartbeat",e=>new rg(e),"PRIVATE")),Ft(Sa,hc,n),Ft(Sa,hc,"esm2017"),Ft("fire-js","")}og("");function oo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ud(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lg=ud,dd=new Br("auth","Firebase",ud());/**
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
 */const Hi=new io("@firebase/auth");function cg(n,...e){Hi.logLevel<=K.WARN&&Hi.warn(`Auth (${Gn}): ${n}`,...e)}function xi(n,...e){Hi.logLevel<=K.ERROR&&Hi.error(`Auth (${Gn}): ${n}`,...e)}/**
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
 */function He(n,...e){throw co(n,...e)}function Je(n,...e){return co(n,...e)}function lo(n,e,t){const r=Object.assign(Object.assign({},lg()),{[e]:t});return new Br("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return lo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ug(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(n,"argument-error"),lo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function co(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return dd.create(n,...e)}function q(n,e,...t){if(!n)throw co(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xi(e),new Error(e)}function Et(n,e){n||mt(e)}/**
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
 */function Ra(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dg(){return vc()==="http:"||vc()==="https:"}function vc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||Up()||"connection"in navigator)?navigator.onLine:!0}function fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=Fp()||jp()}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uo(n,e){Et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gg=new Hr(3e4,6e4);function Jt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function It(n,e,t,r,i={}){return fd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},s);return qp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(d.credentials="include"),hd.fetch()(await pd(n,n.config.apiHost,t,l),d)})}async function fd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pg),e);try{const i=new yg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ii(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lo(n,f,d);He(n,f)}}catch(i){if(i instanceof wt)throw i;He(n,"network-request-failed",{message:String(i)})}}async function Gr(n,e,t,r,i={}){const s=await It(n,e,t,r,i);return"mfaPendingCredential"in s&&He(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function pd(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?uo(n.config,i):`${n.config.apiScheme}://${i}`;return mg.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function vg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),gg.get())})}}function Ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Je(n,e,r);return i.customData._tokenResponse=t,i}function yc(n){return n!==void 0&&n.enterprise!==void 0}class _g{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Eg(n,e){return It(n,"GET","/v2/recaptchaConfig",Jt(n,e))}/**
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
 */async function bg(n,e){return It(n,"POST","/v1/accounts:delete",e)}async function Gi(n,e){return It(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tg(n,e=!1){const t=ge(n),r=await t.getIdToken(e),i=ho(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cr(fa(i.auth_time)),issuedAtTime:Cr(fa(i.iat)),expirationTime:Cr(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fa(n){return Number(n)*1e3}function ho(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yu(t);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _c(n){const e=ho(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ln(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&wg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ln(n,Gi(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?md(s.providerUserInfo):[],l=Sg(n.providerData,o),c=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Ag(n){const e=ge(n);await Wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function md(n){return n.map(e=>{var{providerId:t}=e,r=oo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cg(n,e){const t=await fd(n,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await pd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(c.credentials="include"),hd.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pg(n,e){return It(n,"POST","/v2/accounts:revokeToken",Jt(n,e))}/**
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
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=_c(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Cg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new xn;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function xt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tg(this,e)}reload(){return Ag(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await Ln(this,bg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,c,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:Y,isAnonymous:re,providerData:W,stsTokenManager:b}=t;q($&&b,e,"internal-error");const v=xn.fromJSON(this.name,b);q(typeof $=="string",e,"internal-error"),xt(m,e.name),xt(g,e.name),q(typeof Y=="boolean",e,"internal-error"),q(typeof re=="boolean",e,"internal-error"),xt(w,e.name),xt(C,e.name),xt(D,e.name),xt(P,e.name),xt(j,e.name),xt(F,e.name);const y=new Ke({uid:$,auth:e,email:g,emailVerified:Y,displayName:m,isAnonymous:re,photoURL:C,phoneNumber:w,tenantId:D,stsTokenManager:v,createdAt:j,lastLoginAt:F});return W&&Array.isArray(W)&&(y.providerData=W.map(E=>Object.assign({},E))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,r=!1){const i=new xn;i.updateFromServerResponse(t);const s=new Ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?md(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xn;l.updateFromIdToken(r);const c=new Ke({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
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
 */const Ec=new Map;function gt(n){Et(n instanceof Function,"Expected a class definition");let e=Ec.get(n);return e?(Et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ec.set(n,e),e)}/**
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
 */class gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gd.type="NONE";const bc=gd;/**
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
 */function ki(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=ki("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gi(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kn(gt(bc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||gt(bc);const o=ki(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(o);if(f){let m;if(typeof f=="string"){const g=await Gi(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Ke._fromGetAccountInfoResponse(e,g,f)}else m=Ke._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new kn(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new kn(s,e,r))}}/**
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
 */function Tc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Td(e))return"Blackberry";if(wd(e))return"Webos";if(yd(e))return"Safari";if((e.includes("chrome/")||_d(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vd(n=ke()){return/firefox\//i.test(n)}function yd(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _d(n=ke()){return/crios\//i.test(n)}function Ed(n=ke()){return/iemobile/i.test(n)}function bd(n=ke()){return/android/i.test(n)}function Td(n=ke()){return/blackberry/i.test(n)}function wd(n=ke()){return/webos/i.test(n)}function fo(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rg(n=ke()){var e;return fo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xg(){return Bp()&&document.documentMode===10}function Id(n=ke()){return fo(n)||bd(n)||wd(n)||Td(n)||/windows phone/i.test(n)||Ed(n)}/**
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
 */function Ad(n,e=[]){let t;switch(n){case"Browser":t=Tc(ke());break;case"Worker":t=`${Tc(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${r}`}/**
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
 */class kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Dg(n,e={}){return It(n,"GET","/v2/passwordPolicy",Jt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Mg=6;class Ng{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Mg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Vg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wc(this),this.idTokenSubscription=new wc(this),this.beforeStateQueue=new kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gi(this,{idToken:e}),r=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(vt(this));const t=e?ge(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dg(this),t=new Ng(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xt(n){return ge(n)}class wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xp(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Og(n){ps=n}function Sd(n){return ps.loadJS(n)}function Lg(){return ps.recaptchaEnterpriseScript}function Fg(){return ps.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class qg{constructor(){this.enterprise=new Ug}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ug{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jg="recaptcha-enterprise",Cd="NO_RECAPTCHA";class Bg{constructor(e){this.type=jg,this.auth=Xt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Eg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new _g(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;yc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Cd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qg().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&yc(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Lg();c.length!==0&&(c+=l),Sd(c).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Ic(n,e,t,r=!1,i=!1){const s=new Bg(n);let o;if(i)o=Cd;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ka(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ic(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ic(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function zg(n,e){const t=ao(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ut(s,e??{}))return i;He(i,"already-initialized")}return t.initialize({options:e})}function Hg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gg(n,e,t){const r=Xt(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Pd(e),{host:o,port:l}=Wg(e),c=l===null?"":`:${l}`,d={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Ut(d,r.config.emulator)&&Ut(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Hn(o)?(nd(`${s}//${o}${c}`),rd("Auth",!0)):Kg()}function Pd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wg(n){const e=Pd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ac(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ac(o)}}}function Ac(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class po{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function Qg(n,e){return It(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jg(n,e){return Gr(n,"POST","/v1/accounts:signInWithPassword",Jt(n,e))}/**
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
 */async function Xg(n,e){return Gr(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}async function Yg(n,e){return Gr(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}/**
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
 */class Nr extends po{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Nr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,t,"signInWithPassword",Jg);case"emailLink":return Xg(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,r,"signUpPassword",Qg);case"emailLink":return Yg(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dn(n,e){return Gr(n,"POST","/v1/accounts:signInWithIdp",Jt(n,e))}/**
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
 */const Zg="http://localhost";class un extends po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=oo(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Dn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:Zg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}}/**
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
 */function ev(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tv(n){const e=Er(br(n)).link,t=e?Er(br(e)).deep_link_id:null,r=Er(br(n)).deep_link_id;return(r?Er(br(r)).link:null)||r||t||e||n}class mo{constructor(e){var t,r,i,s,o,l;const c=Er(br(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=ev((i=c.mode)!==null&&i!==void 0?i:null);q(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=tv(e);try{return new mo(t)}catch{return null}}}/**
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
 */class Wn{constructor(){this.providerId=Wn.PROVIDER_ID}static credential(e,t){return Nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mo.parseLink(t);return q(r,"argument-error"),Nr._fromEmailAndCode(e,r.code,r.tenantId)}}Wn.PROVIDER_ID="password";Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class go{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends go{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends Wr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class Dt extends Wr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Wr{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function nv(n,e){return Gr(n,"POST","/v1/accounts:signUp",Jt(n,e))}/**
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
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ke._fromIdTokenResponse(e,r,i),o=Sc(r);return new dn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Sc(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Sc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ki extends wt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ki.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ki(e,t,r,i)}}function Rd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ki._fromErrorAndOperation(n,s,e,r):s})}async function rv(n,e,t=!1){const r=await Ln(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}/**
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
 */async function iv(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(vt(r));const i="reauthenticate";try{const s=await Ln(n,Rd(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=ho(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(n.uid===l,r,"user-mismatch"),dn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
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
 */async function xd(n,e,t=!1){if(Ue(n.app))return Promise.reject(vt(n));const r="signIn",i=await Rd(n,r,e),s=await dn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function sv(n,e){return xd(Xt(n),e)}/**
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
 */async function kd(n){const e=Xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function av(n,e,t){if(Ue(n.app))return Promise.reject(vt(n));const r=Xt(n),o=await ka(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&kd(n),c}),l=await dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ov(n,e,t){return Ue(n.app)?Promise.reject(vt(n)):sv(ge(n),Wn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kd(n),r})}/**
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
 */async function lv(n,e){return It(n,"POST","/v1/accounts:update",e)}/**
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
 */async function cv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ge(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ln(r,lv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function uv(n,e,t,r){return ge(n).onIdTokenChanged(e,t,r)}function dv(n,e,t){return ge(n).beforeAuthStateChanged(e,t)}function hv(n,e,t,r){return ge(n).onAuthStateChanged(e,t,r)}function fv(n){return ge(n).signOut()}const Qi="__sak";/**
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
 */class Dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qi,"1"),this.storage.removeItem(Qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pv=1e3,mv=10;class Md extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const gv=Md;/**
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
 */class Nd extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nd.type="SESSION";const Vd=Nd;/**
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
 */function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,s)),c=await vv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
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
 */function vo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const d=vo("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function _v(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Od(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Ev(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tv(){return Od()?self:null}/**
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
 */const Ld="firebaseLocalStorageDb",wv=1,Ji="firebaseLocalStorage",Fd="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gs(n,e){return n.transaction([Ji],e?"readwrite":"readonly").objectStore(Ji)}function Iv(){const n=indexedDB.deleteDatabase(Ld);return new Kr(n).toPromise()}function Da(){const n=indexedDB.open(Ld,wv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ji,{keyPath:Fd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ji)?e(r):(r.close(),await Iv(),e(await Da()))})})}async function Cc(n,e,t){const r=gs(n,!0).put({[Fd]:e,value:t});return new Kr(r).toPromise()}async function Av(n,e){const t=gs(n,!1).get(e),r=await new Kr(t).toPromise();return r===void 0?null:r.value}function Pc(n,e){const t=gs(n,!0).delete(e);return new Kr(t).toPromise()}const Sv=800,Cv=3;class $d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Da(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Tv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ev(),!this.activeServiceWorker)return;this.sender=new yv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Da();return await Cc(e,Qi,"1"),await Pc(e,Qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Av(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gs(i,!1).getAll();return new Kr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$d.type="LOCAL";const Pv=$d;new Hr(3e4,6e4);/**
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
 */function qd(n,e){return e?gt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yo extends po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rv(n){return xd(n.auth,new yo(n),n.bypassAuthState)}function xv(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),iv(t,new yo(n),n.bypassAuthState)}async function kv(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),rv(t,new yo(n),n.bypassAuthState)}/**
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
 */class Ud{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rv;case"linkViaPopup":case"linkViaRedirect":return kv;case"reauthViaPopup":case"reauthViaRedirect":return xv;default:He(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dv=new Hr(2e3,1e4);async function Mv(n,e,t){if(Ue(n.app))return Promise.reject(Je(n,"operation-not-supported-in-this-environment"));const r=Xt(n);ug(n,e,go);const i=qd(r,t);return new an(r,"signInViaPopup",e,i).executeNotNull()}class an extends Ud{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dv.get())};e()}}an.currentPopupAction=null;/**
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
 */const Nv="pendingRedirect",Di=new Map;class Vv extends Ud{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Di.get(this.auth._key());if(!e){try{const r=await Ov(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Di.set(this.auth._key(),e)}return this.bypassAuthState||Di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ov(n,e){const t=$v(e),r=Fv(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Lv(n,e){Di.set(n._key(),e)}function Fv(n){return gt(n._redirectPersistence)}function $v(n){return ki(Nv,n.config.apiKey,n.name)}async function qv(n,e,t=!1){if(Ue(n.app))return Promise.reject(vt(n));const r=Xt(n),i=qd(r,e),o=await new Vv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Uv=10*60*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(e))}saveEventToCache(e){this.cachedEventUids.add(Rc(e)),this.lastProcessedEventTime=Date.now()}}function Rc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(n);default:return!1}}/**
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
 */async function zv(n,e={}){return It(n,"GET","/v1/projects",e)}/**
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
 */const Hv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gv=/^https?/;async function Wv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zv(n);for(const t of e)try{if(Kv(t))return}catch{}He(n,"unauthorized-domain")}function Kv(n){const e=Ra(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Gv.test(t))return!1;if(Hv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Qv=new Hr(3e4,6e4);function xc(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jv(n){return new Promise((e,t)=>{var r,i,s;function o(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(Je(n,"network-request-failed"))},timeout:Qv.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const l=$g("iframefcb");return tt()[l]=()=>{gapi.load?o():t(Je(n,"network-request-failed"))},Sd(`${Fg()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function Xv(n){return Mi=Mi||Jv(n),Mi}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Yv=new Hr(5e3,15e3),Zv="__/auth/iframe",ey="emulator/auth/iframe",ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ry(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uo(e,ey):`https://${n.config.authDomain}/${Zv}`,r={apiKey:e.apiKey,appName:n.name,v:Gn},i=ny.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${zr(r).slice(1)}`}async function iy(n){const e=await Xv(n),t=tt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:ry(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ty,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),l=tt().setTimeout(()=>{s(o)},Yv.get());function c(){tt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ay=500,oy=600,ly="_blank",cy="http://localhost";class kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uy(n,e,t,r=ay,i=oy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sy),{width:r.toString(),height:i.toString(),top:s,left:o}),d=ke().toLowerCase();t&&(l=_d(d)?ly:t),vd(d)&&(e=e||cy,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[w,C])=>`${g}${w}=${C},`,"");if(Rg(d)&&l!=="_self")return dy(e||"",l),new kc(null);const m=window.open(e||"",l,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new kc(m)}function dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const hy="__/auth/handler",fy="emulator/auth/handler",py=encodeURIComponent("fac");async function Dc(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gn,eventId:i};if(e instanceof go){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Jp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Wr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),d=c?`#${py}=${encodeURIComponent(c)}`:"";return`${my(n)}?${zr(l).slice(1)}${d}`}function my({config:n}){return n.emulator?uo(n,fy):`https://${n.authDomain}/${hy}`}/**
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
 */const pa="webStorageSupport";class gy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=qv,this._overrideRedirectResult=Lv}async _openPopup(e,t,r,i){var s;Et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dc(e,t,r,Ra(),i);return uy(e,o,vo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Dc(e,t,r,Ra(),i);return _v(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iy(e),r=new jv(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pa,{type:pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pa];o!==void 0&&t(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Id()||yd()||fo()}}const vy=gy;var Mc="@firebase/auth",Nc="1.10.8";/**
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
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _y(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ey(n){On(new cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ad(n)},d=new Vg(r,i,s,c);return Hg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),On(new cn("auth-internal",e=>{const t=Xt(e.getProvider("auth").getImmediate());return(r=>new yy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Mc,Nc,_y(n)),Ft(Mc,Nc,"esm2017")}/**
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
 */const by=5*60,Ty=td("authIdTokenMaxAge")||by;let Vc=null;const wy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ty)return;const i=t==null?void 0:t.token;Vc!==i&&(Vc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iy(n=od()){const e=ao(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zg(n,{popupRedirectResolver:vy,persistence:[Pv,gv,Vd]}),r=td("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wy(s.toString());dv(t,o,()=>o(t.currentUser)),uv(t,l=>o(l))}}const i=Zu("auth");return i&&Gg(t,`http://${i}`),t}function Ay(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Og({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Ay().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ey("Browser");var Sy="firebase",Cy="11.10.0";/**
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
 */Ft(Sy,Cy,"app");var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Bd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(E,T,A){for(var _=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)_[lt-2]=arguments[lt];return v.prototype[T].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,y){y||(y=0);var E=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)E[T]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(T=0;16>T;++T)E[T]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],T=b.g[2];var A=b.g[3],_=v+(A^y&(T^A))+E[0]+3614090360&4294967295;v=y+(_<<7&4294967295|_>>>25),_=A+(T^v&(y^T))+E[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=T+(y^A&(v^y))+E[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(v^T&(A^v))+E[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=v+(A^y&(T^A))+E[4]+4118548399&4294967295,v=y+(_<<7&4294967295|_>>>25),_=A+(T^v&(y^T))+E[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=T+(y^A&(v^y))+E[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(v^T&(A^v))+E[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=v+(A^y&(T^A))+E[8]+1770035416&4294967295,v=y+(_<<7&4294967295|_>>>25),_=A+(T^v&(y^T))+E[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=T+(y^A&(v^y))+E[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(v^T&(A^v))+E[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=v+(A^y&(T^A))+E[12]+1804603682&4294967295,v=y+(_<<7&4294967295|_>>>25),_=A+(T^v&(y^T))+E[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=T+(y^A&(v^y))+E[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(v^T&(A^v))+E[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=v+(T^A&(y^T))+E[1]+4129170786&4294967295,v=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(v^y))+E[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=T+(v^y&(A^v))+E[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^v&(T^A))+E[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=v+(T^A&(y^T))+E[5]+3593408605&4294967295,v=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(v^y))+E[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=T+(v^y&(A^v))+E[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^v&(T^A))+E[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=v+(T^A&(y^T))+E[9]+568446438&4294967295,v=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(v^y))+E[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=T+(v^y&(A^v))+E[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^v&(T^A))+E[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=v+(T^A&(y^T))+E[13]+2850285829&4294967295,v=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(v^y))+E[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=T+(v^y&(A^v))+E[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^v&(T^A))+E[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=v+(y^T^A)+E[5]+4294588738&4294967295,v=y+(_<<4&4294967295|_>>>28),_=A+(v^y^T)+E[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=T+(A^v^y)+E[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^v)+E[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=v+(y^T^A)+E[1]+2763975236&4294967295,v=y+(_<<4&4294967295|_>>>28),_=A+(v^y^T)+E[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=T+(A^v^y)+E[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^v)+E[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=v+(y^T^A)+E[13]+681279174&4294967295,v=y+(_<<4&4294967295|_>>>28),_=A+(v^y^T)+E[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=T+(A^v^y)+E[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^v)+E[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=v+(y^T^A)+E[9]+3654602809&4294967295,v=y+(_<<4&4294967295|_>>>28),_=A+(v^y^T)+E[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=T+(A^v^y)+E[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^v)+E[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=v+(T^(y|~A))+E[0]+4096336452&4294967295,v=y+(_<<6&4294967295|_>>>26),_=A+(y^(v|~T))+E[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=T+(v^(A|~y))+E[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~v))+E[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=v+(T^(y|~A))+E[12]+1700485571&4294967295,v=y+(_<<6&4294967295|_>>>26),_=A+(y^(v|~T))+E[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=T+(v^(A|~y))+E[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~v))+E[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=v+(T^(y|~A))+E[8]+1873313359&4294967295,v=y+(_<<6&4294967295|_>>>26),_=A+(y^(v|~T))+E[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=T+(v^(A|~y))+E[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~v))+E[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=v+(T^(y|~A))+E[4]+4149444226&4294967295,v=y+(_<<6&4294967295|_>>>26),_=A+(y^(v|~T))+E[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=T+(v^(A|~y))+E[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~v))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,E=this.B,T=this.h,A=0;A<v;){if(T==0)for(;A<=y;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(E[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,E),T=0;break}}else for(;A<v;)if(E[T++]=b[A++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var E=0;32>E;E+=8)b[y++]=this.g[v]>>>E&255;return b};function s(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],E=!0,T=b.length-1;0<=T;T--){var A=b[T]|0;E&&A==v||(y[T]=A,E=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?s(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return P(d(-b));for(var v=[],y=1,E=0;b>=y;E++)v[E]=b/y|0,y*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return P(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(v,8)),E=m,T=0;T<b.length;T+=8){var A=Math.min(8,b.length-T),_=parseInt(b.substring(T,T+A),v);8>A?(A=d(Math.pow(v,A)),E=E.j(A).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var m=c(0),g=c(1),w=c(16777216);n=o.prototype,n.m=function(){if(D(this))return-P(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var E=this.i(y);b+=(0<=E?E:4294967296+E)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(D(this))return"-"+P(this).toString(b);for(var v=d(Math.pow(b,6)),y=this,E="";;){var T=Y(y,v).g;y=j(y,T.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=T,C(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function D(b){return b.h==-1}n.l=function(b){return b=j(this,b),D(b)?-1:C(b)?0:1};function P(b){for(var v=b.g.length,y=[],E=0;E<v;E++)y[E]=~b.g[E];return new o(y,~b.h).add(g)}n.abs=function(){return D(this)?P(this):this},n.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],E=0,T=0;T<=v;T++){var A=E+(this.i(T)&65535)+(b.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=_>>>16,A&=65535,_&=65535,y[T]=_<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(b,v){return b.add(P(v))}n.j=function(b){if(C(this)||C(b))return m;if(D(this))return D(b)?P(this).j(P(b)):P(P(this).j(b));if(D(b))return P(this.j(P(b)));if(0>this.l(w)&&0>b.l(w))return d(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],E=0;E<2*v;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var A=this.i(E)>>>16,_=this.i(E)&65535,lt=b.i(T)>>>16,nr=b.i(T)&65535;y[2*E+2*T]+=_*nr,F(y,2*E+2*T),y[2*E+2*T+1]+=A*nr,F(y,2*E+2*T+1),y[2*E+2*T+1]+=_*lt,F(y,2*E+2*T+1),y[2*E+2*T+2]+=A*lt,F(y,2*E+2*T+2)}for(E=0;E<v;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=v;E<2*v;E++)y[E]=0;return new o(y,0)};function F(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function $(b,v){this.g=b,this.h=v}function Y(b,v){if(C(v))throw Error("division by zero");if(C(b))return new $(m,m);if(D(b))return v=Y(P(b),v),new $(P(v.g),P(v.h));if(D(v))return v=Y(b,P(v)),new $(P(v.g),v.h);if(30<b.g.length){if(D(b)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=v;0>=E.l(b);)y=re(y),E=re(E);var T=W(y,1),A=W(E,1);for(E=W(E,2),y=W(y,2);!C(E);){var _=A.add(E);0>=_.l(b)&&(T=T.add(y),A=_),E=W(E,1),y=W(y,1)}return v=j(b,T.j(v)),new $(T,v)}for(T=m;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(y),_=A.j(v);D(_)||0<_.l(b);)y-=E,A=d(y),_=A.j(v);C(A)&&(A=g),T=T.add(A),b=j(b,_)}return new $(T,b)}n.A=function(b){return Y(this,b).h},n.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)&b.i(E);return new o(y,this.h&b.h)},n.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)|b.i(E);return new o(y,this.h|b.h)},n.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)^b.i(E);return new o(y,this.h^b.h)};function re(b){for(var v=b.g.length+1,y=[],E=0;E<v;E++)y[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(y,b.h)}function W(b,v){var y=v>>5;v%=32;for(var E=b.g.length-y,T=[],A=0;A<E;A++)T[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,$t=o}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zd,Tr,Hd,Ni,Ma,Gd,Wd,Kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var h=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var I=a[p];if(!(I in h))break e;h=h[I]}a=a[a.length-1],p=h[a],u=u(p),u!=p&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var h=0,p=!1,I={next:function(){if(!p&&h<a.length){var S=h++;return{value:u(S,a[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function m(a,u,h){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,p),a.apply(u,I)}}return function(){return a.apply(u,arguments)}}function g(a,u,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(p,I,S){for(var M=Array(arguments.length-2),te=2;te<arguments.length;te++)M[te-2]=arguments[te];return u.prototype[I].apply(p,M)}}function D(a){const u=a.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=a[p];return h}return[]}function P(a,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const I=a.length||0,S=p.length||0;a.length=I+S;for(let M=0;M<S;M++)a[I+M]=p[M]}else a.push(p)}}class j{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var re=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function W(a,u,h){for(const p in a)u.call(h,a[p],p,a)}function b(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function v(a){const u={};for(const h in a)u[h]=a[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)a[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(a[h]=p[h])}}function T(a){var u=1;a=a.split(":");const h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function A(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Fs;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,h){const p=nr.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var nr=new j(()=>new zf,a=>a.reset());class zf{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let rr,ir=!1,Fs=new lt,al=()=>{const a=l.Promise.resolve(void 0);rr=()=>{a.then(Hf)}};var Hf=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(h){A(h)}var u=nr;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ir=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Gf=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return a}();function sr(a,u){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(re){e:{try{Y(u.nodeName);var I=!0;break e}catch{}I=!1}I||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wf[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sr.aa.h.call(this)}}C(sr,Ie);var Wf={2:"touch",3:"pen",4:"mouse"};sr.prototype.h=function(){sr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var si="closure_listenable_"+(1e6*Math.random()|0),Kf=0;function Qf(a,u,h,p,I){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=I,this.key=++Kf,this.da=this.fa=!1}function ai(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oi(a){this.src=a,this.g={},this.h=0}oi.prototype.add=function(a,u,h,p,I){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var M=qs(a,u,p,I);return-1<M?(u=a[M],h||(u.fa=!1)):(u=new Qf(u,this.src,S,!!p,I),u.fa=h,a.push(u)),u};function $s(a,u){var h=u.type;if(h in a.g){var p=a.g[h],I=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=I)&&Array.prototype.splice.call(p,I,1),S&&(ai(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function qs(a,u,h,p){for(var I=0;I<a.length;++I){var S=a[I];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==p)return I}return-1}var Us="closure_lm_"+(1e6*Math.random()|0),js={};function ol(a,u,h,p,I){if(Array.isArray(u)){for(var S=0;S<u.length;S++)ol(a,u[S],h,p,I);return null}return h=ul(h),a&&a[si]?a.K(u,h,d(p)?!!p.capture:!1,I):Jf(a,u,h,!1,p,I)}function Jf(a,u,h,p,I,S){if(!u)throw Error("Invalid event type");var M=d(I)?!!I.capture:!!I,te=zs(a);if(te||(a[Us]=te=new oi(a)),h=te.add(u,h,p,M,S),h.proxy)return h;if(p=Xf(),h.proxy=p,p.src=a,p.listener=h,a.addEventListener)Gf||(I=M),I===void 0&&(I=!1),a.addEventListener(u.toString(),p,I);else if(a.attachEvent)a.attachEvent(cl(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xf(){function a(h){return u.call(a.src,a.listener,h)}const u=Yf;return a}function ll(a,u,h,p,I){if(Array.isArray(u))for(var S=0;S<u.length;S++)ll(a,u[S],h,p,I);else p=d(p)?!!p.capture:!!p,h=ul(h),a&&a[si]?(a=a.i,u=String(u).toString(),u in a.g&&(S=a.g[u],h=qs(S,h,p,I),-1<h&&(ai(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete a.g[u],a.h--)))):a&&(a=zs(a))&&(u=a.g[u.toString()],a=-1,u&&(a=qs(u,h,p,I)),(h=-1<a?u[a]:null)&&Bs(h))}function Bs(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[si])$s(u.i,a);else{var h=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(h,p,a.capture):u.detachEvent?u.detachEvent(cl(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=zs(u))?($s(h,a),h.h==0&&(h.src=null,u[Us]=null)):ai(a)}}}function cl(a){return a in js?js[a]:js[a]="on"+a}function Yf(a,u){if(a.da)a=!0;else{u=new sr(u,this);var h=a.listener,p=a.ha||a.src;a.fa&&Bs(a),a=h.call(p,u)}return a}function zs(a){return a=a[Us],a instanceof oi?a:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ul(a){return typeof a=="function"?a:(a[Hs]||(a[Hs]=function(u){return a.handleEvent(u)}),a[Hs])}function Ae(){St.call(this),this.i=new oi(this),this.M=this,this.F=null}C(Ae,St),Ae.prototype[si]=!0,Ae.prototype.removeEventListener=function(a,u,h,p){ll(this,a,u,h,p)};function De(a,u){var h,p=a.F;if(p)for(h=[];p;p=p.F)h.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new Ie(u,a);else if(u instanceof Ie)u.target=u.target||a;else{var I=u;u=new Ie(p,a),E(u,I)}if(I=!0,h)for(var S=h.length-1;0<=S;S--){var M=u.g=h[S];I=li(M,p,!0,u)&&I}if(M=u.g=a,I=li(M,p,!0,u)&&I,I=li(M,p,!1,u)&&I,h)for(S=0;S<h.length;S++)M=u.g=h[S],I=li(M,p,!1,u)&&I}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],p=0;p<h.length;p++)ai(h[p]);delete a.g[u],a.h--}}this.F=null},Ae.prototype.K=function(a,u,h,p){return this.i.add(String(a),u,!1,h,p)},Ae.prototype.L=function(a,u,h,p){return this.i.add(String(a),u,!0,h,p)};function li(a,u,h,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,S=0;S<u.length;++S){var M=u[S];if(M&&!M.da&&M.capture==h){var te=M.listener,_e=M.ha||M.src;M.fa&&$s(a.i,M),I=te.call(_e,p)!==!1&&I}}return I&&!p.defaultPrevented}function dl(a,u,h){if(typeof a=="function")h&&(a=g(a,h));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function hl(a){a.g=dl(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Zf extends St{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ar(a){St.call(this),this.h=a,this.g={}}C(ar,St);var fl=[];function pl(a){W(a.g,function(u,h){this.g.hasOwnProperty(h)&&Bs(u)},a),a.g={}}ar.prototype.N=function(){ar.aa.N.call(this),pl(this)},ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=l.JSON.stringify,ep=l.JSON.parse,tp=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ws(){}Ws.prototype.h=null;function ml(a){return a.h||(a.h=a.i())}function gl(){}var or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ks(){Ie.call(this,"d")}C(Ks,Ie);function Qs(){Ie.call(this,"c")}C(Qs,Ie);var en={},vl=null;function ci(){return vl=vl||new Ae}en.La="serverreachability";function yl(a){Ie.call(this,en.La,a)}C(yl,Ie);function lr(a){const u=ci();De(u,new yl(u))}en.STAT_EVENT="statevent";function _l(a,u){Ie.call(this,en.STAT_EVENT,a),this.stat=u}C(_l,Ie);function Me(a){const u=ci();De(u,new _l(u,a))}en.Ma="timingevent";function El(a,u){Ie.call(this,en.Ma,a),this.size=u}C(El,Ie);function cr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function np(a,u,h,p,I,S){a.info(function(){if(a.g)if(S)for(var M="",te=S.split("&"),_e=0;_e<te.length;_e++){var X=te[_e].split("=");if(1<X.length){var Se=X[0];X=X[1];var Ce=Se.split("_");M=2<=Ce.length&&Ce[1]=="type"?M+(Se+"="+X+"&"):M+(Se+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+u+`
`+h+`
`+M})}function rp(a,u,h,p,I,S,M){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+u+`
`+h+`
`+S+" "+M})}function En(a,u,h,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+sp(a,h)+(p?" "+p:"")})}function ip(a,u){a.info(function(){return"TIMEOUT: "+u})}ur.prototype.info=function(){};function sp(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var p=h[a];if(!(2>p.length)){var I=p[1];if(Array.isArray(I)&&!(1>I.length)){var S=I[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<I.length;M++)I[M]=""}}}}return Gs(h)}catch{return u}}var ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Js;function di(){}C(di,Ws),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},Js=new di;function Ct(a,u,h,p){this.j=a,this.i=u,this.l=h,this.R=p||1,this.U=new ar(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var wl={},Xs={};function Ys(a,u,h){a.L=1,a.v=mi(ct(u)),a.m=h,a.P=!0,Il(a,null)}function Il(a,u){a.F=Date.now(),hi(a),a.A=ct(a.v);var h=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Fl(h.i,"t",p),a.C=0,h=a.j.J,a.h=new Tl,a.g=nc(a.j,h?u:null,!a.m),0<a.O&&(a.M=new Zf(g(a.Y,a,a.g),a.O)),u=a.U,h=a.g,p=a.ca;var I="readystatechange";Array.isArray(I)||(I&&(fl[0]=I.toString()),I=fl);for(var S=0;S<I.length;S++){var M=ol(h,I[S],p||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),lr(),np(a.i,a.u,a.A,a.l,a.R,a.m)}Ct.prototype.ca=function(a){a=a.target;const u=this.M;u&&ut(a)==3?u.j():this.Y(a)},Ct.prototype.Y=function(a){try{if(a==this.g)e:{const Ce=ut(this.g);var u=this.g.Ba();const wn=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||Hl(this.g)))){this.J||Ce!=4||u==7||(u==8||0>=wn?lr(3):lr(2)),Zs(this);var h=this.g.Z();this.X=h;t:if(Al(this)){var p=Hl(this.g);a="";var I=p.length,S=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),dr(this);var M="";break t}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(S&&u==I-1)});p.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,rp(this.i,this.u,this.A,this.l,this.R,Ce,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,_e=this.g;if((te=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(te)){var X=te;break t}}X=null}if(h=X)En(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,h);else{this.o=!1,this.s=3,Me(12),tn(this),dr(this);break e}}if(this.P){h=!0;let Ge;for(;!this.J&&this.C<M.length;)if(Ge=ap(this,M),Ge==Xs){Ce==4&&(this.s=4,Me(14),h=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==wl){this.s=4,Me(15),En(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else En(this.i,this.l,Ge,null),ea(this,Ge);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||M.length!=0||this.h.h||(this.s=1,Me(16),h=!1),this.o=this.o&&h,!h)En(this.i,this.l,M,"[Invalid Chunked Response]"),tn(this),dr(this);else if(0<M.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),aa(Se),Se.M=!0,Me(11))}}else En(this.i,this.l,M,null),ea(this,M);Ce==4&&tn(this),this.o&&!this.J&&(Ce==4?Yl(this.j,this):(this.o=!1,hi(this)))}else wp(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),tn(this),dr(this)}}}catch{}finally{}};function Al(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ap(a,u){var h=a.C,p=u.indexOf(`
`,h);return p==-1?Xs:(h=Number(u.substring(h,p)),isNaN(h)?wl:(p+=1,p+h>u.length?Xs:(u=u.slice(p,p+h),a.C=p+h,u)))}Ct.prototype.cancel=function(){this.J=!0,tn(this)};function hi(a){a.S=Date.now()+a.I,Sl(a,a.I)}function Sl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cr(g(a.ba,a),u)}function Zs(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ct.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ip(this.i,this.A),this.L!=2&&(lr(),Me(17)),tn(this),this.s=2,dr(this)):Sl(this,this.S-a)};function dr(a){a.j.G==0||a.J||Yl(a.j,a)}function tn(a){Zs(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,pl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ea(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||ta(h.h,a))){if(!a.K&&ta(h.h,a)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)bi(h),_i(h);else break e;sa(h),Me(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=cr(g(h.Za,h),6e3));if(1>=Rl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else rn(h,11)}else if((a.K||h.g==a)&&bi(h),!F(u))for(I=h.Da.g.parse(u),u=0;u<I.length;u++){let X=I[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Se=X[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const Ce=X[4];Ce!=null&&(h.Aa=Ce,h.j.info("SVER="+h.Aa));const wn=X[5];wn!=null&&typeof wn=="number"&&0<wn&&(p=1.5*wn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ge=a.g;if(Ge){const wi=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wi){var S=p.h;S.g||wi.indexOf("spdy")==-1&&wi.indexOf("quic")==-1&&wi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(na(S,S.h),S.h=null))}if(p.D){const oa=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(p.ya=oa,ie(p.I,p.D,oa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var M=a;if(p.qa=tc(p,p.J?p.ia:null,p.W),M.K){xl(p.h,M);var te=M,_e=p.L;_e&&(te.I=_e),te.B&&(Zs(te),hi(te)),p.g=M}else Jl(p);0<h.i.length&&Ei(h)}else X[0]!="stop"&&X[0]!="close"||rn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?rn(h,7):ia(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}lr(4)}catch{}}var op=class{constructor(a,u){this.g=a,this.map=u}};function Cl(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rl(a){return a.h?1:a.g?a.g.size:0}function ta(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function na(a,u){a.g?a.g.add(u):a.h=u}function xl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Cl.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.D);return u}return D(a.i)}function lp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],h=a.length,p=0;p<h;p++)u.push(a[p]);return u}u=[],h=0;for(p in a)u[h++]=a[p];return u}function cp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(const p in a)u[h++]=p;return u}}}function Dl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=cp(a),p=lp(a),I=p.length,S=0;S<I;S++)u.call(void 0,p[S],h&&h[S],a)}var Ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function up(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var p=a[h].indexOf("="),I=null;if(0<=p){var S=a[h].substring(0,p);I=a[h].substring(p+1)}else S=a[h];u(S,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function nn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof nn){this.h=a.h,fi(this,a.j),this.o=a.o,this.g=a.g,pi(this,a.s),this.l=a.l;var u=a.i,h=new pr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Nl(this,h),this.m=a.m}else a&&(u=String(a).match(Ml))?(this.h=!1,fi(this,u[1]||"",!0),this.o=hr(u[2]||""),this.g=hr(u[3]||"",!0),pi(this,u[4]),this.l=hr(u[5]||"",!0),Nl(this,u[6]||"",!0),this.m=hr(u[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}nn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(fr(u,Vl,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(fr(u,Vl,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(fr(h,h.charAt(0)=="/"?fp:hp,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",fr(h,mp)),a.join("")};function ct(a){return new nn(a)}function fi(a,u,h){a.j=h?hr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function pi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Nl(a,u,h){u instanceof pr?(a.i=u,gp(a.i,a.h)):(h||(u=fr(u,pp)),a.i=new pr(u,a.h))}function ie(a,u,h){a.i.set(u,h)}function mi(a){return ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fr(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,dp),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vl=/[#\/\?@]/g,hp=/[#\?:]/g,fp=/[#\?]/g,pp=/[#\?@]/g,mp=/#/g;function pr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Pt(a){a.g||(a.g=new Map,a.h=0,a.i&&up(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=pr.prototype,n.add=function(a,u){Pt(this),this.i=null,a=bn(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function Ol(a,u){Pt(a),u=bn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ll(a,u){return Pt(a),u=bn(a,u),a.g.has(u)}n.forEach=function(a,u){Pt(this),this.g.forEach(function(h,p){h.forEach(function(I){a.call(u,I,p,this)},this)},this)},n.na=function(){Pt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const I=a[p];for(let S=0;S<I.length;S++)h.push(u[p])}return h},n.V=function(a){Pt(this);let u=[];if(typeof a=="string")Ll(this,a)&&(u=u.concat(this.g.get(bn(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return Pt(this),this.i=null,a=bn(this,a),Ll(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Fl(a,u,h){Ol(a,u),0<h.length&&(a.i=null,a.g.set(bn(a,u),D(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const S=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var I=S;M[p]!==""&&(I+="="+encodeURIComponent(String(M[p]))),a.push(I)}}return this.i=a.join("&")};function bn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function gp(a,u){u&&!a.j&&(Pt(a),a.i=null,a.g.forEach(function(h,p){var I=p.toLowerCase();p!=I&&(Ol(this,p),Fl(this,I,h))},a)),a.j=u}function vp(a,u){const h=new ur;if(l.Image){const p=new Image;p.onload=w(Rt,h,"TestLoadImage: loaded",!0,u,p),p.onerror=w(Rt,h,"TestLoadImage: error",!1,u,p),p.onabort=w(Rt,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(Rt,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function yp(a,u){const h=new ur,p=new AbortController,I=setTimeout(()=>{p.abort(),Rt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(I),S.ok?Rt(h,"TestPingServer: ok",!0,u):Rt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Rt(h,"TestPingServer: error",!1,u)})}function Rt(a,u,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function _p(){this.g=new tp}function Ep(a,u,h){const p=h||"";try{Dl(a,function(I,S){let M=I;d(I)&&(M=Gs(I)),u.push(p+S+"="+encodeURIComponent(M))})}catch(I){throw u.push(p+"type="+encodeURIComponent("_badmap")),I}}function gi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(gi,Ws),gi.prototype.g=function(){return new vi(this.l,this.j)},gi.prototype.i=function(a){return function(){return a}}({});function vi(a,u){Ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(vi,Ae),n=vi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,gr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$l(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $l(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?mr(this):gr(this),this.readyState==3&&$l(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,mr(this))},n.Qa=function(a){this.g&&(this.response=a,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gr(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function gr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ql(a){let u="";return W(a,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function ra(a,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ql(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ie(a,u,h))}function oe(a){Ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(oe,Ae);var bp=/^https?$/i,Tp=["POST","PUT"];n=oe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Js.g(),this.v=this.o?ml(this.o):ml(Js),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){Ul(this,S);return}if(a=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),I=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tp,u,void 0))||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of h)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zl(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){Ul(this,S)}};function Ul(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,jl(a),yi(a)}function jl(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bl(this):this.bb())},n.bb=function(){Bl(this)};function Bl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ut(a)!=4||a.Z()!=2)){if(a.u&&ut(a)==4)dl(a.Ea,0,a);else if(De(a,"readystatechange"),ut(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=M===0){var I=String(a.D).match(Ml)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),p=!bp.test(I?I.toLowerCase():"")}h=p}if(h)De(a,"complete"),De(a,"success");else{a.m=6;try{var S=2<ut(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",jl(a)}}finally{yi(a)}}}}function yi(a,u){if(a.g){zl(a);const h=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||De(a,"ready");try{h.onreadystatechange=p}catch{}}}function zl(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function ut(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ep(u)}};function Hl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wp(a){const u={};a=(a.g&&2<=ut(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(F(a[p]))continue;var h=T(a[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[I]||[];u[I]=S,S.push(h)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function Gl(a){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,a),this.cb=vr("retryDelaySeedMs",1e4,a),this.Wa=vr("forwardChannelMaxRetries",2,a),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cl(a&&a.concurrentRequestLimit),this.Da=new _p,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gl.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,p){Me(0),this.W=a,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=tc(this,null,this.W),Ei(this)};function ia(a){if(Wl(a),a.G==3){var u=a.U++,h=ct(a.I);if(ie(h,"SID",a.K),ie(h,"RID",u),ie(h,"TYPE","terminate"),yr(a,h),u=new Ct(a,a.j,u),u.L=2,u.v=mi(ct(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=nc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),hi(u)}ec(a)}function _i(a){a.g&&(aa(a),a.g.cancel(),a.g=null)}function Wl(a){_i(a),a.u&&(l.clearTimeout(a.u),a.u=null),bi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ei(a){if(!Pl(a.h)&&!a.s){a.s=!0;var u=a.Ga;rr||al(),ir||(rr(),ir=!0),Fs.add(u,a),a.B=0}}function Ip(a,u){return Rl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cr(g(a.Ga,a,u),Zl(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const I=new Ct(this,this.j,a);let S=this.o;if(this.S&&(S?(S=v(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(I.H=S,S=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Ql(this,I,u),h=ct(this.I),ie(h,"RID",a),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),yr(this,h),S&&(this.O?u="headers="+encodeURIComponent(String(ql(S)))+"&"+u:this.m&&ra(h,this.m,S)),na(this.h,I),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",u),ie(h,"SID","null"),I.T=!0,Ys(I,h,null)):Ys(I,h,u),this.G=2}}else this.G==3&&(a?Kl(this,a):this.i.length==0||Pl(this.h)||Kl(this))};function Kl(a,u){var h;u?h=u.l:h=a.U++;const p=ct(a.I);ie(p,"SID",a.K),ie(p,"RID",h),ie(p,"AID",a.T),yr(a,p),a.m&&a.o&&ra(p,a.m,a.o),h=new Ct(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ql(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),na(a.h,h),Ys(h,p,u)}function yr(a,u){a.H&&W(a.H,function(h,p){ie(u,p,h)}),a.l&&Dl({},function(h,p){ie(u,p,h)})}function Ql(a,u,h){h=Math.min(a.i.length,h);var p=a.l?g(a.l.Na,a.l,a):null;e:{var I=a.i;let S=-1;for(;;){const M=["count="+h];S==-1?0<h?(S=I[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let te=!0;for(let _e=0;_e<h;_e++){let X=I[_e].g;const Se=I[_e].map;if(X-=S,0>X)S=Math.max(0,I[_e].g-100),te=!1;else try{Ep(Se,M,"req"+X+"_")}catch{p&&p(Se)}}if(te){p=M.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,p}function Jl(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;rr||al(),ir||(rr(),ir=!0),Fs.add(u,a),a.v=0}}function sa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cr(g(a.Fa,a),Zl(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cr(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),_i(this),Xl(this))};function aa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xl(a){a.g=new Ct(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ct(a.qa);ie(u,"RID","rpc"),ie(u,"SID",a.K),ie(u,"AID",a.T),ie(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ie(u,"TO",a.ja),ie(u,"TYPE","xmlhttp"),yr(a,u),a.m&&a.o&&ra(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=mi(ct(u)),h.m=null,h.P=!0,Il(h,a)}n.Za=function(){this.C!=null&&(this.C=null,_i(this),sa(this),Me(19))};function bi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Yl(a,u){var h=null;if(a.g==u){bi(a),aa(a),a.g=null;var p=2}else if(ta(a.h,u))h=u.D,xl(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var I=a.B;p=ci(),De(p,new El(p,h)),Ei(a)}else Jl(a);else if(I=u.s,I==3||I==0&&0<u.X||!(p==1&&Ip(a,u)||p==2&&sa(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),I){case 1:rn(a,5);break;case 4:rn(a,10);break;case 3:rn(a,6);break;default:rn(a,2)}}}function Zl(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function rn(a,u){if(a.j.info("Error code "+u),u==2){var h=g(a.fb,a),p=a.Xa;const I=!p;p=new nn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fi(p,"https"),mi(p),I?vp(p.toString(),h):yp(p.toString(),h)}else Me(2);a.G=0,a.l&&a.l.sa(u),ec(a),Wl(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function ec(a){if(a.G=0,a.ka=[],a.l){const u=kl(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function tc(a,u,h){var p=h instanceof nn?ct(h):new nn(h);if(p.g!="")u&&(p.g=u+"."+p.g),pi(p,p.s);else{var I=l.location;p=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var S=new nn(null);p&&fi(S,p),u&&(S.g=u),I&&pi(S,I),h&&(S.l=h),p=S}return h=a.D,u=a.ya,h&&u&&ie(p,h,u),ie(p,"VER",a.la),yr(a,p),p}function nc(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new oe(new gi({eb:h})):new oe(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}n=rc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ti(){}Ti.prototype.g=function(a,u){return new Fe(a,u)};function Fe(a,u){Ae.call(this),this.g=new Gl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Tn(this)}C(Fe,Ae),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){ia(this.g)},Fe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Gs(a),a=h);u.i.push(new op(u.Ya++,a)),u.G==3&&Ei(u)},Fe.prototype.N=function(){this.g.l=null,delete this.j,ia(this.g),delete this.g,Fe.aa.N.call(this)};function ic(a){Ks.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ic,Ks);function sc(){Qs.call(this),this.status=1}C(sc,Qs);function Tn(a){this.g=a}C(Tn,rc),Tn.prototype.ua=function(){De(this.g,"a")},Tn.prototype.ta=function(a){De(this.g,new ic(a))},Tn.prototype.sa=function(a){De(this.g,new sc)},Tn.prototype.ra=function(){De(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Kd=function(){return new Ti},Wd=function(){return ci()},Gd=en,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ui.NO_ERROR=0,ui.TIMEOUT=8,ui.HTTP_ERROR=6,Ni=ui,bl.COMPLETE="complete",Hd=bl,gl.EventType=or,or.OPEN="a",or.CLOSE="b",or.ERROR="c",or.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,Tr=gl,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,zd=oe}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});const Lc="@firebase/firestore",Fc="4.8.0";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let Kn="11.10.0";/**
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
 */const hn=new io("@firebase/firestore");function An(){return hn.logLevel}function V(n,...e){if(hn.logLevel<=K.DEBUG){const t=e.map(_o);hn.debug(`Firestore (${Kn}): ${n}`,...t)}}function bt(n,...e){if(hn.logLevel<=K.ERROR){const t=e.map(_o);hn.error(`Firestore (${Kn}): ${n}`,...t)}}function jt(n,...e){if(hn.logLevel<=K.WARN){const t=e.map(_o);hn.warn(`Firestore (${Kn}): ${n}`,...t)}}function _o(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qd(n,r,t)}function Qd(n,e,t){let r=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bt(r),new Error(r)}function Z(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Qd(e,i,r)}function H(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Py{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class Ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xy{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class ky{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ky(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $c{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $c(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $c(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ny(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Xd(){return new TextEncoder}/**
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
 */class Eo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ny(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Na(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return G(r,i);{const s=Xd(),o=Vy(s.encode(qc(n,t)),s.encode(qc(e,t)));return o!==0?o:G(r,i)}}t+=r>65535?2:1}return G(n.length,e.length)}function qc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Vy(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return G(n[t],e[t]);return G(n.length,e.length)}function Fn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Uc="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=et.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return G(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),i=et.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?et.extractNumericId(e).compare(et.extractNumericId(t)):Na(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class ne extends et{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const Oy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends et{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Oy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uc}static keyField(){return new Te([Uc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ne.fromString(e))}static fromName(e){return new O(ne.fromString(e).popFirst(5))}static empty(){return new O(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ne(e.slice()))}}/**
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
 */function Yd(n,e,t){if(!t)throw new N(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ly(n,e,t,r){if(e===!0&&r===!0)throw new N(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jc(n){if(!O.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bc(n){if(O.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vs(n);throw new N(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qr(n,e){if(!Zd(n))throw new N(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new N(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const zc=-62135596800,Hc=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hc);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zc)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hc}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qr(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:he("string",se._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new se(0,0))}static max(){return new z(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vr=-1;function Fy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new Bt(i,O.empty(),e)}function $y(n){return new Bt(n.readTime,n.key,Vr)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt(z.min(),O.empty(),Vr)}static max(){return new Bt(z.max(),O.empty(),Vr)}}function qy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const Uy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Uy)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const d=c;t(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new x((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function By(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ys{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ys.ue=-1;/**
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
 */const bo=-1;function _s(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function zy(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const eh="";function Hy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gc(e)),e=Gy(n.get(t),e);return Gc(e)}function Gy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case eh:t+="";break;default:t+=s}}return t}function Gc(n){return n+eh+""}/**
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
 */function Wc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Si(this.root,e,this.comparator,!1)}getReverseIterator(){return new Si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Si(this.root,e,this.comparator,!0)}}class Si{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=i??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ee(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kc(this.data.getIterator())}getIteratorFrom(e){return new Kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class je{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new je([])}unionWith(e){let t=new pe(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class nh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nh("Invalid base64 string: "+s):s}}(e);return new we(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Wy.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */const rh="server_timestamp",ih="__type__",sh="__previous_value__",ah="__local_write_time__";function To(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ih])===null||t===void 0?void 0:t.stringValue)===rh}function Es(n){const e=n.mapValue.fields[sh];return To(e)?Es(e):e}function Or(n){const e=zt(n.mapValue.fields[ah].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Ky{constructor(e,t,r,i,s,o,l,c,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=f}}const Yi="(default)";class Lr{constructor(e,t){this.projectId=e,this.database=t||Yi}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database===Yi}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oh="__type__",Qy="__max__",Ci={mapValue:{}},lh="__vector__",Zi="value";function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?To(n)?4:Xy(n)?9007199254740991:Jy(n)?10:11:U(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Gt(n);if(t!==Gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Or(n).isEqual(Or(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zt(i.timestampValue),l=zt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=le(i.doubleValue),l=le(s.doubleValue);return o===l?Xi(o)===Xi(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Fn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Wc(o)!==Wc(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!at(o[c],l[c])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function Fr(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function $n(n,e){if(n===e)return 0;const t=Gt(n),r=Gt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=le(s.integerValue||s.doubleValue),c=le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Qc(n.timestampValue,e.timestampValue);case 4:return Qc(Or(n),Or(e));case 5:return Na(n.stringValue,e.stringValue);case 6:return function(s,o){const l=Ht(s),c=Ht(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=G(l[d],c[d]);if(f!==0)return f}return G(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=G(le(s.latitude),le(o.latitude));return l!==0?l:G(le(s.longitude),le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Jc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,d,f;const m=s.fields||{},g=o.fields||{},w=(l=m[Zi])===null||l===void 0?void 0:l.arrayValue,C=(c=g[Zi])===null||c===void 0?void 0:c.arrayValue,D=G(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Jc(w,C)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ci.mapValue&&o===Ci.mapValue)return 0;if(s===Ci.mapValue)return 1;if(o===Ci.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),d=o.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Na(c[m],f[m]);if(g!==0)return g;const w=$n(l[c[m]],d[f[m]]);if(w!==0)return w}return G(c.length,f.length)}(n.mapValue,e.mapValue);default:throw U(23264,{le:t})}}function Qc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=zt(n),r=zt(e),i=G(t.seconds,r.seconds);return i!==0?i:G(t.nanos,r.nanos)}function Jc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=$n(t[i],r[i]);if(s)return s}return G(t.length,r.length)}function qn(n){return Va(n)}function Va(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Va(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Va(t.fields[o])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function Vi(n){switch(Gt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Es(n);return e?16+Vi(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Vi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yt(r.fields,(s,o)=>{i+=s.length+Vi(o)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function Xc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Oa(n){return!!n&&"integerValue"in n}function wo(n){return!!n&&"arrayValue"in n}function Yc(n){return!!n&&"nullValue"in n}function Zc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Oi(n){return!!n&&"mapValue"in n}function Jy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[oh])===null||t===void 0?void 0:t.stringValue)===lh}function Pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Pr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qy}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Oi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pr(t)}setAll(e){let t=Te.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=Pr(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Oi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Oi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Oe(Pr(this.value))}}function ch(n){const e=[];return Yt(n.fields,(t,r)=>{const i=new Te([t]);if(Oi(r)){const s=ch(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new je(e)}/**
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
 */class xe{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,z.min(),z.min(),z.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,z.min(),z.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,z.min(),z.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class es{constructor(e,t){this.position=e,this.inclusive=t}}function eu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=$n(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class uh{}class de extends uh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new e_(e,t,r):t==="array-contains"?new r_(e,r):t==="in"?new i_(e,r):t==="not-in"?new s_(e,r):t==="array-contains-any"?new a_(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new t_(e,r):new n_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($n(t,this.value)):t!==null&&Gt(this.value)===Gt(t)&&this.matchesComparison($n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends uh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ye(e,t)}matches(e){return dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function dh(n){return n.op==="and"}function hh(n){return Zy(n)&&dh(n)}function Zy(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function La(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(hh(n))return n.filters.map(e=>La(e)).join(",");{const e=n.filters.map(t=>La(t)).join(",");return`${n.op}(${e})`}}function fh(n,e){return n instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.field.isEqual(i.field)&&at(r.value,i.value)}(n,e):n instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&fh(o,i.filters[l]),!0):!1}(n,e):void U(19439)}function ph(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class e_ extends de{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class t_ extends de{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class n_ extends de{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class r_ extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wo(t)&&Fr(t.arrayValue,this.value)}}class i_ extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fr(this.value.arrayValue,t)}}class s_ extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fr(this.value.arrayValue,t)}}class a_ extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Fr(this.value.arrayValue,r))}}/**
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
 */class o_{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function nu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new o_(n,e,t,r,i,s,o)}function Io(n){const e=H(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>La(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qn(r)).join(",")),e.Pe=t}return e.Pe}function Ao(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function Fa(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jr{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function l_(n,e,t,r,i,s,o,l){return new Jr(n,e,t,r,i,s,o,l)}function So(n){return new Jr(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gh(n){return n.collectionGroup!==null}function Rr(n){const e=H(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pe(Te.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ts(s,r))}),t.has(Te.keyField().canonicalString())||e.Te.push(new ts(Te.keyField(),r))}return e.Te}function nt(n){const e=H(n);return e.Ie||(e.Ie=c_(e,Rr(n))),e.Ie}function c_(n,e){if(n.limitType==="F")return nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ts(i.field,s)});const t=n.endAt?new es(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new es(n.startAt.position,n.startAt.inclusive):null;return nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $a(n,e){const t=n.filters.concat([e]);return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qa(n,e,t){return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bs(n,e){return Ao(nt(n),nt(e))&&n.limitType===e.limitType}function vh(n){return`${Io(nt(n))}|lt:${n.limitType}`}function Sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ph(i)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qn(i)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function Ts(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Rr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const d=eu(o,l,c);return o.inclusive?d<=0:d<0}(r.startAt,Rr(r),i)||r.endAt&&!function(o,l,c){const d=eu(o,l,c);return o.inclusive?d>=0:d>0}(r.endAt,Rr(r),i))}(n,e)}function u_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yh(n){return(e,t)=>{let r=!1;for(const i of Rr(n)){const s=d_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function d_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),d=l.data.field(s);return c!==null&&d!==null?$n(c,d):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return th(this.inner)}size(){return this.innerSize}}/**
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
 */const h_=new ae(O.comparator);function Tt(){return h_}const _h=new ae(O.comparator);function wr(...n){let e=_h;for(const t of n)e=e.insert(t.key,t);return e}function Eh(n){let e=_h;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function on(){return xr()}function bh(){return xr()}function xr(){return new pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const f_=new ae(O.comparator),p_=new pe(O.comparator);function Q(...n){let e=p_;for(const t of n)e=e.add(t);return e}const m_=new pe(G);function g_(){return m_}/**
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
 */function Co(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function Th(n){return{integerValue:""+n}}function v_(n,e){return zy(e)?Th(e):Co(n,e)}/**
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
 */class ws{constructor(){this._=void 0}}function y_(n,e,t){return n instanceof $r?function(i,s){const o={fields:{[ih]:{stringValue:rh},[ah]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&To(s)&&(s=Es(s)),s&&(o.fields[sh]=s),{mapValue:o}}(t,e):n instanceof Un?Ih(n,e):n instanceof qr?Ah(n,e):function(i,s){const o=wh(i,s),l=iu(o)+iu(i.Ee);return Oa(o)&&Oa(i.Ee)?Th(l):Co(i.serializer,l)}(n,e)}function __(n,e,t){return n instanceof Un?Ih(n,e):n instanceof qr?Ah(n,e):t}function wh(n,e){return n instanceof ns?function(r){return Oa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $r extends ws{}class Un extends ws{constructor(e){super(),this.elements=e}}function Ih(n,e){const t=Sh(e);for(const r of n.elements)t.some(i=>at(i,r))||t.push(r);return{arrayValue:{values:t}}}class qr extends ws{constructor(e){super(),this.elements=e}}function Ah(n,e){let t=Sh(e);for(const r of n.elements)t=t.filter(i=>!at(i,r));return{arrayValue:{values:t}}}class ns extends ws{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iu(n){return le(n.integerValue||n.doubleValue)}function Sh(n){return wo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ch{constructor(e,t){this.field=e,this.transform=t}}function E_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Un&&i instanceof Un||r instanceof qr&&i instanceof qr?Fn(r.elements,i.elements,at):r instanceof ns&&i instanceof ns?at(r.Ee,i.Ee):r instanceof $r&&i instanceof $r}(n.transform,e.transform)}class b_{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Is{}function Ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Po(n.key,ze.none()):new Xr(n.key,n.data,ze.none());{const t=n.data,r=Oe.empty();let i=new pe(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(n.key,r,new je(i.toArray()),ze.none())}}function T_(n,e,t){n instanceof Xr?function(i,s,o){const l=i.value.clone(),c=au(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(i,s,o){if(!Li(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=au(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Rh(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function kr(n,e,t,r){return n instanceof Xr?function(s,o,l,c){if(!Li(s.precondition,o))return l;const d=s.value.clone(),f=ou(s.fieldTransforms,c,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zt?function(s,o,l,c){if(!Li(s.precondition,o))return l;const d=ou(s.fieldTransforms,c,o),f=o.data;return f.setAll(Rh(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,l){return Li(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function w_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=wh(r.transform,i||null);s!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,s))}return t||null}function su(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fn(r,i,(s,o)=>E_(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xr extends Is{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends Is{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Rh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function au(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,__(o,l,t[i]))}return r}function ou(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,y_(s,o,e))}return r}class Po extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I_ extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bh();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=Ph(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(t,r)=>su(t,r))&&Fn(this.baseMutations,e.baseMutations,(t,r)=>su(t,r))}}class Ro{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Z(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return f_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ro(e,t,r,i)}}/**
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
 */class S_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class C_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,J;function P_(n){switch(n){case R.OK:return U(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function xh(n){if(n===void 0)return bt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ue.OK:return R.OK;case ue.CANCELLED:return R.CANCELLED;case ue.UNKNOWN:return R.UNKNOWN;case ue.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ue.INTERNAL:return R.INTERNAL;case ue.UNAVAILABLE:return R.UNAVAILABLE;case ue.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ue.NOT_FOUND:return R.NOT_FOUND;case ue.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ue.ABORTED:return R.ABORTED;case ue.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ue.DATA_LOSS:return R.DATA_LOSS;default:return U(39323,{code:n})}}(J=ue||(ue={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const R_=new $t([4294967295,4294967295],0);function lu(n){const e=Xd().encode(n),t=new Bd;return t.update(e),new Uint8Array(t.digest())}function cu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $t([t,r],0),new $t([i,s],0)]}class xo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=$t.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply($t.fromNumber(r)));return i.compare(R_)===1&&(i=new $t([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=lu(e),[r,i]=cu(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xo(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const t=lu(e),[r,i]=cu(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class As{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new As(z.min(),i,new ae(G),Tt(),Q())}}class Yr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Yr(r,t,Q(),Q(),Q())}}/**
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
 */class Fi{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class kh{constructor(e,t){this.targetId=e,this.De=t}}class Dh{constructor(e,t,r=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class uu{constructor(){this.ve=0,this.Ce=du(),this.Fe=we.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Q(),t=Q(),r=Q();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:s})}}),new Yr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=du()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class x_{constructor(e){this.We=e,this.Ge=new Map,this.ze=Tt(),this.je=Pi(),this.Je=Pi(),this.He=new ae(G)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(Fa(s))if(r===0){const o=new O(s.path);this.Xe(t,o,xe.newNoDocument(o,z.min()))}else Z(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=Ht(r).toUint8Array()}catch(c){if(c instanceof nh)return jt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xo(o,i,s)}catch(c){return jt(c instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Fa(l.target)){const c=new O(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,xe.newNoDocument(c,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=Q();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.st(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new As(e,t,this.He,this.ze,r);return this.ze=Tt(),this.je=Pi(),this.Je=Pi(),this.He=new ae(G),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new uu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(G),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(G),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new uu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Pi(){return new ae(O.comparator)}function du(){return new ae(O.comparator)}const k_={asc:"ASCENDING",desc:"DESCENDING"},D_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},M_={and:"AND",or:"OR"};class N_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ua(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function rs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function V_(n,e){return rs(n,e.toTimestamp())}function rt(n){return Z(!!n,49232),z.fromTimestamp(function(t){const r=zt(t);return new se(r.seconds,r.nanos)}(n))}function ko(n,e){return ja(n,e).canonicalString()}function ja(n,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nh(n){const e=ne.fromString(n);return Z($h(e),10190,{key:e.toString()}),e}function Ba(n,e){return ko(n.databaseId,e.path)}function ma(n,e){const t=Nh(e);if(t.get(1)!==n.databaseId.projectId)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Oh(t))}function Vh(n,e){return ko(n.databaseId,e)}function O_(n){const e=Nh(n);return e.length===4?ne.emptyPath():Oh(e)}function za(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Oh(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hu(n,e,t){return{name:Ba(n,e),fields:t.value.mapValue.fields}}function L_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?R.UNKNOWN:xh(d.code);return new N(f,d.message||"")}(o);t=new Dh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(n,r.document.name),s=rt(r.document.updateTime),o=r.document.createTime?rt(r.document.createTime):z.min(),l=new Oe({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Fi(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(n,r.document),s=r.readTime?rt(r.readTime):z.min(),o=xe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Fi([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(n,r.document),s=r.removedTargetIds||[];t=new Fi([],s,i,null)}else{if(!("filter"in e))return U(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new C_(i,s),l=r.targetId;t=new kh(l,o)}}return t}function F_(n,e){let t;if(e instanceof Xr)t={update:hu(n,e.key,e.value)};else if(e instanceof Po)t={delete:Ba(n,e.key)};else if(e instanceof Zt)t={update:hu(n,e.key,e.data),updateMask:W_(e.fieldMask)};else{if(!(e instanceof I_))return U(16599,{Rt:e.type});t={verify:Ba(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof $r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Un)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ns)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw U(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U(27497)}(n,e.precondition)),t}function $_(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?rt(i.updateTime):rt(s);return o.isEqual(z.min())&&(o=rt(s)),new b_(o,i.transformResults||[])}(t,e))):[]}function q_(n,e){return{documents:[Vh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Vh(n,i);const s=function(d){if(d.length!==0)return Fh(Ye.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Cn(g.field),direction:z_(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ua(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function j_(n){let e=O_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Z(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=Lh(m);return g instanceof Ye&&hh(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(g=>function(C){return new ts(Pn(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,_s(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(m){const g=!!m.before,w=m.values||[];return new es(w,g)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const g=!m.before,w=m.values||[];return new es(w,g)}(t.endAt)),l_(e,i,o,s,l,"F",c,d)}function B_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pn(t.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pn(t.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pn(t.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return de.create(Pn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>Lh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function z_(n){return k_[n]}function H_(n){return D_[n]}function G_(n){return M_[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Pn(n){return Te.fromServerFormat(n.fieldPath)}function Fh(n){return n instanceof de?function(t){if(t.op==="=="){if(Zc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NAN"}};if(Yc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NAN"}};if(Yc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(t.field),op:H_(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const r=t.getFilters().map(i=>Fh(i));return r.length===1?r[0]:{compositeFilter:{op:G_(t.op),filters:r}}}(n):U(54877,{filter:n})}function W_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $h(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vt{constructor(e,t,r,i,s=z.min(),o=z.min(),l=we.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class K_{constructor(e){this.gt=e}}function Q_(n){const e=j_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qa(e,e.limit,"L"):e}/**
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
 */class J_{constructor(){this.Dn=new X_}addToCollectionParentIndex(e,t){return this.Dn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Bt.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class X_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(ne.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ne.comparator)).toArray()}}/**
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
 */const fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qh=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(qh,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
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
 */class jn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new jn(0)}static ur(){return new jn(-1)}}/**
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
 */const pu="LruGarbageCollector",Y_=1048576;function mu([n,e],[t,r]){const i=G(n,t);return i===0?G(e,r):i}class Z_{constructor(e){this.Tr=e,this.buffer=new pe(mu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(pu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jn(t)?V(pu,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.Rr(3e5)})}}class tE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(ys.ue);const r=new Z_(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(fu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fu):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,l,c,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),An()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function nE(n,e){return new tE(n,e)}/**
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
 */class rE{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class sE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&kr(r.mutation,i,je.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=on();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=wr();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=on();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=Tt();const o=xr(),l=function(){return xr()}();return t.forEach((c,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Zt)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),kr(f.mutation,d,f.mutation.getFieldMask(),se.now())):o.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var m;return l.set(d,new iE(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=xr();let i=new ae((o,l)=>o-l),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=r.get(c)||je.empty();f=l.applyToLocalView(d,f),r.set(c,f);const m=(i.get(l.batchId)||Q()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,m=bh();f.forEach(g=>{if(!s.has(g)){const w=Ph(t.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):x.resolve(on());let l=Vr,c=s;return o.next(d=>x.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,Q())).next(f=>({batchId:l,changes:Eh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=wr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=wr();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,c=>{const d=function(m,g){return new Jr(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,xe.newInvalidDocument(f)))});let l=wr();return o.forEach((c,d)=>{const f=s.get(c);f!==void 0&&kr(f.mutation,d,je.empty(),se.now()),Ts(t,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class aE{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return x.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:rt(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Q_(i.bundledQuery),readTime:rt(i.readTime)}}(t)),x.resolve()}}/**
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
 */class oE{constructor(){this.overlays=new ae(O.comparator),this.kr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=on();return x.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=on(),s=t.length+1,o=new O(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ae((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=on(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=on(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return x.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new S_(t,r));let s=this.kr.get(t);s===void 0&&(s=Q(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lE{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class Do{constructor(){this.qr=new pe(ve.Qr),this.$r=new pe(ve.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ve(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new O(new ne([])),r=new ve(t,e),i=new ve(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new O(new ne([])),r=new ve(t,e),i=new ve(t,e+1);let s=Q();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ve(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return O.comparator(e.key,t.key)||G(e.Hr,t.Hr)}static Ur(e,t){return G(e.Hr,t.Hr)||O.comparator(e.key,t.key)}}/**
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
 */class cE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(ve.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A_(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?bo:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),i=new ve(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(G);return t.forEach(i=>{const s=new ve(i,0),o=new ve(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ve(new O(s),0);let l=new pe(G);return this.Yr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Hr)),!0)},o),x.resolve(this.ei(l))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Z(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(t.mutations,i=>{const s=new ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new ve(t,0),i=this.Yr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uE{constructor(e){this.ni=e,this.docs=function(){return new ae(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=Tt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Tt();const o=t.path,l=new O(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||qy($y(f),r)<=0||(i.has(f.key)||Ts(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,t,r,i){U(9500)}ri(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new dE(this)}getSize(e){return x.resolve(this.size)}}class dE extends rE{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class hE{constructor(e){this.persistence=e,this.ii=new pn(t=>Io(t),Ao),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new Do,this.targetCount=0,this._i=jn.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),x.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new jn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.hr(t),x.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.oi.containsKey(t))}}/**
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
 */class Uh{constructor(e,t){this.ai={},this.overlays={},this.ui=new ys(0),this.ci=!1,this.ci=!0,this.li=new lE,this.referenceDelegate=e(this),this.hi=new hE(this),this.indexManager=new J_,this.remoteDocumentCache=function(i){return new uE(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new K_(t),this.Ti=new aE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new cE(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new fE(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return x.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class fE extends jy{constructor(e){super(),this.currentSequenceNumber=e}}class Mo{constructor(e){this.persistence=e,this.Ai=new Do,this.Ri=null}static Vi(e){return new Mo(e)}get mi(){if(this.Ri)return this.Ri;throw U(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,r=>{const i=O.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return x.or([()=>x.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class is{constructor(e,t){this.persistence=e,this.gi=new pn(r=>Hy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=nE(this,t)}static Vi(e,t){return new is(e,t)}Ii(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return x.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?x.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(l=>{l||(r++,s.removeEntry(o,z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vi(e.data.value)),t}Sr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class No{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new No(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class pE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mE{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return zp()?8:By(ke())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pE;return this.ws(e,t,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,t,o,l.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(An()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(An()<=K.DEBUG&&V("QueryEngine","Query:",Sn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(An()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):x.resolve())}ps(e,t){if(ru(t))return x.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=qa(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.bs(t,l);return this.Ds(t,d,o,c.readTime)?this.ps(e,qa(t,null,"F")):this.vs(e,d,t,c)}))})))}ys(e,t,r,i){return ru(t)||i.isEqual(z.min())?x.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?x.resolve(null):(An()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sn(t)),this.vs(e,o,t,Fy(i,Vr)).next(l=>l))})}bs(e,t){let r=new pe(yh(e));return t.forEach((i,s)=>{Ts(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return An()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Sn(t)),this.gs.getDocumentsMatchingQuery(e,t,Bt.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Vo="LocalStore",gE=3e8;class vE{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ae(G),this.Ms=new pn(s=>Io(s),Ao),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sE(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function yE(n,e,t,r){return new vE(n,e,t,r)}async function jh(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=Q();for(const d of i){o.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:l}))})})}function _E(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const m=d.batch,g=m.keys();let w=x.resolve();return g.forEach(C=>{w=w.next(()=>f.getEntry(c,C)).next(D=>{const P=d.docVersions.get(C);Z(P!==null,48541),D.version.compareTo(P)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Bh(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function EE(n,e){const t=H(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(we.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(m,w),function(D,P,j){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=gE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,w,f)&&l.push(t.hi.updateTargetData(s,w))});let c=Tt(),d=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(bE(s,o,e.documentUpdates).next(f=>{c=f.Ls,d=f.ks})),!r.isEqual(z.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(t.Fs=i,s))}function bE(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Tt();return t.forEach((l,c)=>{const d=s.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):V(Vo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ls:o,ks:i}})}function TE(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wE(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Ha(n,e,t){const r=H(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jn(o))throw o;V(Vo,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function gu(n,e,t){const r=H(n);let i=z.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,f){const m=H(c),g=m.Ms.get(f);return g!==void 0?x.resolve(m.Fs.get(g)):m.hi.getTargetData(d,f)}(r,o,nt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:z.min(),t?s:Q())).next(l=>(IE(r,u_(e),l),{documents:l,qs:s})))}function IE(n,e,t){let r=n.xs.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}class vu{constructor(){this.activeTargetIds=g_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AE{constructor(){this.Fo=new vu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new vu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SE{xo(e){}shutdown(){}}/**
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
 */const yu="ConnectivityMonitor";class _u{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(yu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(yu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ri=null;function Ga(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
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
 */const ga="RestConnection",CE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PE{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Yi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Ga(),l=this.Go(e,t.toUriEncodedString());V(ga,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:d}=new URL(l),f=Hn(d);return this.jo(e,l,c,r,f).then(m=>(V(ga,`Received RPC '${e}' ${o}: `,m),m),m=>{throw jt(ga,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=CE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class RE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Pe="WebChannelConnection";class xE extends PE{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=Ga();return new Promise((l,c)=>{const d=new zd;d.setWithCredentials(!0),d.listenOnce(Hd.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ni.NO_ERROR:const m=d.getResponseJson();V(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Ni.TIMEOUT:V(Pe,`RPC '${e}' ${o} timed out`),c(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const g=d.getStatus();if(V(Pe,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let w=d.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const D=function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(F)>=0?F:R.UNKNOWN}(C.status);c(new N(D,C.message))}else c(new N(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(R.UNAVAILABLE,"Connection failed."));break;default:U(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(Pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);V(Pe,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",f,r,15)})}P_(e,t,r){const i=Ga(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kd(),l=Wd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");V(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);this.T_(m);let g=!1,w=!1;const C=new RE({Ho:P=>{w?V(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(V(Pe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),V(Pe,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},Yo:()=>m.close()}),D=(P,j,F)=>{P.listen(j,$=>{try{F($)}catch(Y){setTimeout(()=>{throw Y},0)}})};return D(m,Tr.EventType.OPEN,()=>{w||(V(Pe,`RPC '${e}' stream ${i} transport opened.`),C.s_())}),D(m,Tr.EventType.CLOSE,()=>{w||(w=!0,V(Pe,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(m))}),D(m,Tr.EventType.ERROR,P=>{w||(w=!0,jt(Pe,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),C.__(new N(R.UNAVAILABLE,"The operation could not be completed")))}),D(m,Tr.EventType.MESSAGE,P=>{var j;if(!w){const F=P.data[0];Z(!!F,16349);const $=F,Y=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(Y){V(Pe,`RPC '${e}' stream ${i} received error:`,Y);const re=Y.status;let W=function(y){const E=ue[y];if(E!==void 0)return xh(E)}(re),b=Y.message;W===void 0&&(W=R.INTERNAL,b="Unknown error status: "+re+" with message "+Y.message),w=!0,C.__(new N(W,b)),m.close()}else V(Pe,`RPC '${e}' stream ${i} received:`,F),C.a_(F)}}),D(l,Gd.STAT_EVENT,P=>{P.stat===Ma.PROXY?V(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ma.NOPROXY&&V(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function va(){return typeof document<"u"?document:null}/**
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
 */function Ss(n){return new N_(n,!0)}/**
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
 */class zh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Eu="PersistentStream";class Hh{constructor(e,t,r,i,s,o,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new N(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(Eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(Eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kE extends Hh{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=L_(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?rt(o.readTime):z.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=za(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=Fa(c)?{documents:q_(s,c)}:{query:U_(s,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Mh(s,o.resumeToken);const d=Ua(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(z.min())>0){l.readTime=rs(s,o.snapshotVersion.toTimestamp());const d=Ua(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=B_(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=za(this.serializer),t.removeTarget=e,this.k_(t)}}class DE extends Hh{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=$_(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=za(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>F_(this.serializer,r))};this.k_(t)}}/**
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
 */class ME{}class NE extends ME{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,ja(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(R.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,ja(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(R.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class VE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(bt(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const fn="RemoteStore";class OE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{mn(this)&&(V(fn,"Restarting streams for network reachability change."),await async function(c){const d=H(c);d.Ia.add(4),await Zr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Cs(d)}(this))})}),this.Aa=new VE(r,i)}}async function Cs(n){if(mn(n))for(const e of n.da)await e(!0)}async function Zr(n){for(const e of n.da)await e(!1)}function Gh(n,e){const t=H(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),$o(t)?Fo(t):Xn(t).x_()&&Lo(t,e))}function Oo(n,e){const t=H(n),r=Xn(t);t.Ta.delete(e),r.x_()&&Wh(t,e),t.Ta.size===0&&(r.x_()?r.B_():mn(t)&&t.Aa.set("Unknown"))}function Lo(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).H_(e)}function Wh(n,e){n.Ra.$e(e),Xn(n).Y_(e)}function Fo(n){n.Ra=new x_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.Aa.aa()}function $o(n){return mn(n)&&!Xn(n).M_()&&n.Ta.size>0}function mn(n){return H(n).Ia.size===0}function Kh(n){n.Ra=void 0}async function LE(n){n.Aa.set("Online")}async function FE(n){n.Ta.forEach((e,t)=>{Lo(n,e)})}async function $E(n,e){Kh(n),$o(n)?(n.Aa.la(e),Fo(n)):n.Aa.set("Unknown")}async function qE(n,e,t){if(n.Aa.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(n,e)}catch(r){V(fn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ss(n,r)}else if(e instanceof Fi?n.Ra.Ye(e):e instanceof kh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(z.min()))try{const r=await Bh(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Wh(s,c);const m=new Vt(f.target,c,d,f.sequenceNumber);Lo(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){V(fn,"Failed to raise snapshot:",r),await ss(n,r)}}async function ss(n,e,t){if(!Jn(e))throw e;n.Ia.add(1),await Zr(n),n.Aa.set("Offline"),t||(t=()=>Bh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(fn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Cs(n)})}function Qh(n,e){return e().catch(t=>ss(n,t,e))}async function Ps(n){const e=H(n),t=Wt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bo;for(;UE(e);)try{const i=await TE(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,jE(e,i)}catch(i){await ss(e,i)}Jh(e)&&Xh(e)}function UE(n){return mn(n)&&n.Pa.length<10}function jE(n,e){n.Pa.push(e);const t=Wt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Jh(n){return mn(n)&&!Wt(n).M_()&&n.Pa.length>0}function Xh(n){Wt(n).start()}async function BE(n){Wt(n).na()}async function zE(n){const e=Wt(n);for(const t of n.Pa)e.X_(t.mutations)}async function HE(n,e,t){const r=n.Pa.shift(),i=Ro.from(r,e,t);await Qh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ps(n)}async function GE(n,e){e&&Wt(n).Z_&&await async function(r,i){if(function(o){return P_(o)&&o!==R.ABORTED}(i.code)){const s=r.Pa.shift();Wt(r).N_(),await Qh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ps(r)}}(n,e),Jh(n)&&Xh(n)}async function bu(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),V(fn,"RemoteStore received new credentials");const r=mn(t);t.Ia.add(3),await Zr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Cs(t)}async function WE(n,e){const t=H(n);e?(t.Ia.delete(2),await Cs(t)):e||(t.Ia.add(2),await Zr(t),t.Aa.set("Unknown"))}function Xn(n){return n.Va||(n.Va=function(t,r,i){const s=H(t);return s.ia(),new kE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:LE.bind(null,n),e_:FE.bind(null,n),n_:$E.bind(null,n),J_:qE.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),$o(n)?Fo(n):n.Aa.set("Unknown")):(await n.Va.stop(),Kh(n))})),n.Va}function Wt(n){return n.ma||(n.ma=function(t,r,i){const s=H(t);return s.ia(),new DE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:BE.bind(null,n),n_:GE.bind(null,n),ea:zE.bind(null,n),ta:HE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Ps(n)):(await n.ma.stop(),n.Pa.length>0&&(V(fn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class qo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new qo(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(bt("AsyncQueue",`${e}: ${n}`),Jn(n))return new N(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mn{static emptySet(e){return new Mn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=wr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Tu{constructor(){this.fa=new ae(O.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):U(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Bn{constructor(e,t,r,i,s,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Bn(e,t,Mn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class KE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class QE{constructor(){this.queries=wu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=H(t),s=i.queries;i.queries=wu(),s.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new N(R.ABORTED,"Firestore shutting down"))}}function wu(){return new pn(n=>vh(n),bs)}async function Yh(n,e){const t=H(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new KE,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=Uo(o,`Initialization of query '${Sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&jo(t)}async function Zh(n,e){const t=H(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function JE(n,e){const t=H(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&jo(t)}function XE(n,e,t){const r=H(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function jo(n){n.Da.forEach(e=>{e.next()})}var Wa,Iu;(Iu=Wa||(Wa={})).Fa="default",Iu.Cache="cache";class ef{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wa.Cache}}/**
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
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class YE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Q(),this.mutatedKeys=Q(),this.Xa=yh(e),this.eu=new Mn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Tu,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),w=Ts(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;g&&w?g.data.isEqual(w.data)?C!==D&&(r.track({type:3,doc:w}),P=!0):this.iu(g,w)||(r.track({type:2,doc:w}),P=!0,(c&&this.Xa(w,c)>0||d&&this.Xa(w,d)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),P=!0):g&&!w&&(r.track({type:1,doc:g}),P=!0,(c||d)&&(l=!0)),P&&(w?(o=o.add(w),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(w,C){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{At:P})}};return D(w)-D(C)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,d=c!==this.Ya;return this.Ya=c,o.length!==0||d?{snapshot:new Bn(this.query,e.eu,s,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Tu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Q(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new nf(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new tf(r))}),t}uu(e){this.Ha=e.qs,this.Za=Q();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Bo="SyncEngine";class ZE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eb{constructor(e){this.key=e,this.lu=!1}}class tb{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new pn(l=>vh(l),bs),this.Tu=new Map,this.Iu=new Set,this.du=new ae(O.comparator),this.Eu=new Map,this.Au=new Do,this.Ru={},this.Vu=new Map,this.mu=jn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nb(n,e,t=!0){const r=cf(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await rf(r,e,t,!0),i}async function rb(n,e){const t=cf(n);await rf(t,e,!0,!1)}async function rf(n,e,t,r){const i=await wE(n.localStore,nt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await ib(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Gh(n.remoteStore,i),l}async function ib(n,e,t,r,i){n.gu=(m,g,w)=>async function(D,P,j,F){let $=P.view.nu(j);$.Ds&&($=await gu(D.localStore,P.query,!1).then(({documents:b})=>P.view.nu(b,$)));const Y=F&&F.targetChanges.get(P.targetId),re=F&&F.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges($,D.isPrimaryClient,Y,re);return Su(D,P.targetId,W._u),W.snapshot}(n,m,g,w);const s=await gu(n.localStore,e,!0),o=new YE(e,s.qs),l=o.nu(s.documents),c=Yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(l,n.isPrimaryClient,c);Su(n,t,d._u);const f=new ZE(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function sb(n,e,t){const r=H(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!bs(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ha(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Oo(r.remoteStore,i.targetId),Ka(r,i.targetId)}).catch(Qn)):(Ka(r,i.targetId),await Ha(r.localStore,i.targetId,!0))}async function ab(n,e){const t=H(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Oo(t.remoteStore,r.targetId))}async function ob(n,e,t){const r=pb(n);try{const i=await function(o,l){const c=H(o),d=se.now(),f=l.reduce((w,C)=>w.add(C.key),Q());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=Tt(),D=Q();return c.Os.getEntries(w,f).next(P=>{C=P,C.forEach((j,F)=>{F.isValidDocument()||(D=D.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,C)).next(P=>{m=P;const j=[];for(const F of l){const $=w_(F,m.get(F.key).overlayedDocument);$!=null&&j.push(new Zt(F.key,$,ch($.value.mapValue),ze.exists(!0)))}return c.mutationQueue.addMutationBatch(w,d,j,l)}).next(P=>{g=P;const j=P.applyToLocalDocumentSet(m,D);return c.documentOverlayCache.saveOverlays(w,P.batchId,j)})}).then(()=>({batchId:g.batchId,changes:Eh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let d=o.Ru[o.currentUser.toKey()];d||(d=new ae(G)),d=d.insert(l,c),o.Ru[o.currentUser.toKey()]=d}(r,i.batchId,t),await ei(r,i.changes),await Ps(r.remoteStore)}catch(i){const s=Uo(i,"Failed to persist write");t.reject(s)}}async function sf(n,e){const t=H(n);try{const r=await EE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Z(o.lu,14607):i.removedDocuments.size>0&&(Z(o.lu,42227),o.lu=!1))}),await ei(t,r,e)}catch(r){await Qn(r)}}function Au(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=H(o);c.onlineState=l;let d=!1;c.queries.forEach((f,m)=>{for(const g of m.wa)g.va(l)&&(d=!0)}),d&&jo(c)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lb(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ae(O.comparator);o=o.insert(s,xe.newNoDocument(s,z.min()));const l=Q().add(s),c=new As(z.min(),new Map,new ae(G),o,l);await sf(r,c),r.du=r.du.remove(s),r.Eu.delete(e),zo(r)}else await Ha(r.localStore,e,!1).then(()=>Ka(r,e,t)).catch(Qn)}async function cb(n,e){const t=H(n),r=e.batch.batchId;try{const i=await _E(t.localStore,e);of(t,r,null),af(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ei(t,i)}catch(i){await Qn(i)}}async function ub(n,e,t){const r=H(n);try{const i=await function(o,l){const c=H(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(m=>(Z(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);of(r,e,t),af(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ei(r,i)}catch(i){await Qn(i)}}function af(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function of(n,e,t){const r=H(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Ka(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||lf(n,r)})}function lf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Oo(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),zo(n))}function Su(n,e,t){for(const r of t)r instanceof tf?(n.Au.addReference(r.key,e),db(n,r)):r instanceof nf?(V(Bo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||lf(n,r.key)):U(19791,{yu:r})}function db(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(V(Bo,"New document in limbo: "+t),n.Iu.add(r),zo(n))}function zo(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new O(ne.fromString(e)),r=n.mu.next();n.Eu.set(r,new eb(t)),n.du=n.du.insert(t,r),Gh(n.remoteStore,new Vt(nt(So(t.path)),r,"TargetPurposeLimboResolution",ys.ue))}}async function ei(n,e,t){const r=H(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){i.push(d);const m=No.Es(c.targetId,d);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(c,d){const f=H(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>x.forEach(d,g=>x.forEach(g.Is,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>x.forEach(g.ds,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!Jn(m))throw m;V(Vo,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const w=f.Fs.get(g),C=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,D)}}}(r.localStore,s))}async function hb(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){V(Bo,"User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(c=>{c.reject(new N(R.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(t,r.Bs)}}function fb(n,e){const t=H(n),r=t.Eu.get(e);if(r&&r.lu)return Q().add(r.key);{let i=Q();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const l=t.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function cf(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lb.bind(null,e),e.hu.J_=JE.bind(null,e.eventManager),e.hu.pu=XE.bind(null,e.eventManager),e}function pb(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ub.bind(null,e),e}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ss(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return yE(this.persistence,new mE,e.initialUser,this.serializer)}Du(e){return new Uh(Mo.Vi,this.serializer)}bu(e){return new AE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class mb extends as{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Z(this.persistence.referenceDelegate instanceof is,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eE(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Uh(r=>is.Vi(r,t),this.serializer)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Au(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hb.bind(null,this.syncEngine),await WE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QE}()}createDatastore(e){const t=Ss(e.databaseInfo.databaseId),r=function(s){return new xE(s)}(e.databaseInfo);return function(s,o,l,c){return new NE(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new OE(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Au(this.syncEngine,t,0),function(){return _u.C()?new _u:new SE}())}createSyncEngine(e,t){return function(i,s,o,l,c,d,f){const m=new tb(i,s,o,l,c,d);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=H(i);V(fn,"RemoteStore shutting down."),s.Ia.add(5),await Zr(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qa.provider={build:()=>new Qa};/**
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
 */class uf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Kt="FirestoreClient";class gb{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Re.UNAUTHENTICATED,this.clientId=Eo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{V(Kt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V(Kt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ya(n,e){n.asyncQueue.verifyOperationInProgress(),V(Kt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{jt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{jt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Cu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vb(n);V(Kt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>bu(e.remoteStore,i)),n._onlineComponents=e}async function vb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Kt,"Using user provided OfflineComponentProvider");try{await ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;jt("Error using user provided cache. Falling back to memory cache: "+t),await ya(n,new as)}}else V(Kt,"Using default OfflineComponentProvider"),await ya(n,new mb(void 0));return n._offlineComponents}async function df(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Kt,"Using user provided OnlineComponentProvider"),await Cu(n,n._uninitializedComponentsProvider._online)):(V(Kt,"Using default OnlineComponentProvider"),await Cu(n,new Qa))),n._onlineComponents}function yb(n){return df(n).then(e=>e.syncEngine)}async function hf(n){const e=await df(n),t=e.eventManager;return t.onListen=nb.bind(null,e.syncEngine),t.onUnlisten=sb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ab.bind(null,e.syncEngine),t}function _b(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,d){const f=new uf({next:g=>{f.Ou(),o.enqueueAndForget(()=>Zh(s,m));const w=g.docs.has(l);!w&&g.fromCache?d.reject(new N(R.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&c&&c.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new ef(So(l.path),f,{includeMetadataChanges:!0,ka:!0});return Yh(s,m)}(await hf(n),n.asyncQueue,e,t,r)),r.promise}function Eb(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,d){const f=new uf({next:g=>{f.Ou(),o.enqueueAndForget(()=>Zh(s,m)),g.fromCache&&c.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new ef(l,f,{includeMetadataChanges:!0,ka:!0});return Yh(s,m)}(await hf(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ff(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pu=new Map;/**
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
 */const pf="firestore.googleapis.com",Ru=!0;class xu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pf,this.ssl=Ru}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ru;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Y_)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ly("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ff((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Py;switch(r.type){case"firstParty":return new Dy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pu.get(t);r&&(V("ComponentProvider","Removing Datastore"),Pu.delete(t),r.terminate())}(this),Promise.resolve()}}function bb(n,e,t,r={}){var i;n=Xe(n,Rs);const s=Hn(e),o=n._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s&&(nd(`https://${c}`),rd("Firestore",!0)),o.host!==pf&&o.host!==c&&jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:r});if(!Ut(d,l)&&(n._setSettings(d),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Re.MOCK_USER;else{f=Vp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new N(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Re(g)}n._authCredentials=new Ry(new Jd(f,m))}}/**
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
 */class Yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Qr(t,ce._jsonSchema))return new ce(e,r||null,new O(ne.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:he("string",ce._jsonSchemaVersion),referencePath:he("string")};class qt extends Yn{constructor(e,t,r){super(e,t,So(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new O(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function ot(n,e,...t){if(n=ge(n),Yd("collection","path",e),n instanceof Rs){const r=ne.fromString(e,...t);return Bc(r),new qt(n,null,r)}{if(!(n instanceof ce||n instanceof qt))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Bc(r),new qt(n.firestore,null,r)}}function At(n,e,...t){if(n=ge(n),arguments.length===1&&(e=Eo.newId()),Yd("doc","path",e),n instanceof Rs){const r=ne.fromString(e,...t);return jc(r),new ce(n,null,new O(r))}{if(!(n instanceof ce||n instanceof qt))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return jc(r),new ce(n.firestore,n instanceof qt?n.converter:null,new O(r))}}/**
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
 */const ku="AsyncQueue";class Du{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zh(this,"async_queue_retry"),this.oc=()=>{const r=va();r&&V(ku,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new yt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Jn(e))throw e;V(ku,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,bt("INTERNAL UNHANDLED ERROR: ",Mu(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=qo.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&U(47125,{hc:Mu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Mu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class gn extends Rs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Du,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Du(e),this._firestoreClient=void 0,await e}}}function Tb(n,e){const t=typeof n=="object"?n:od(),r=typeof n=="string"?n:Yi,i=ao(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Mp("firestore");s&&bb(i,...s)}return i}function Ho(n){if(n._terminated)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wb(n),n._firestoreClient}function wb(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,d,f){return new Ky(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ff(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gb(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(we.fromBase64String(e))}catch(t){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:he("string",Be._jsonSchemaVersion),bytes:he("string")};/**
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
 */class xs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ti{constructor(e){this._methodName=e}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(Qr(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:he("string",it._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qr(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new N(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:he("string",st._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const Ib=/^__.*__$/;class Ab{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xr(e,this.data,t,this.fieldTransforms)}}class mf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ec:n})}}class ks{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ks(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return os(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(gf(this.Ec)&&Ib.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Sb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ss(e)}Dc(e,t,r,i=!1){return new ks({Ec:e,methodName:t,bc:r,path:Te.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ds(n){const e=n._freezeSettings(),t=Ss(n._databaseId);return new Sb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vf(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Ko("Data must be an object, but it was:",o,r);const l=yf(r,o);let c,d;if(s.merge)c=new je(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Ja(e,m,t);if(!o.contains(g))throw new N(R.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ef(f,g)||f.push(g)}c=new je(f),d=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=o.fieldTransforms;return new Ab(new Oe(l),c,d)}class Ms extends ti{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ms}}function Cb(n,e,t){return new ks({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Go extends ti{_toFieldTransform(e){return new Ch(e.path,new $r)}isEqual(e){return e instanceof Go}}class Wo extends ti{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Cb(this,e,!0),r=this.vc.map(s=>Zn(s,t)),i=new Un(r);return new Ch(e.path,i)}isEqual(e){return e instanceof Wo&&Ut(this.vc,e.vc)}}function Pb(n,e,t,r){const i=n.Dc(1,e,t);Ko("Data must be an object, but it was:",i,r);const s=[],o=Oe.empty();Yt(r,(c,d)=>{const f=Qo(e,c,t);d=ge(d);const m=i.gc(f);if(d instanceof Ms)s.push(f);else{const g=Zn(d,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new je(s);return new mf(o,l,i.fieldTransforms)}function Rb(n,e,t,r,i,s){const o=n.Dc(1,e,t),l=[Ja(e,r,t)],c=[i];if(s.length%2!=0)throw new N(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ja(e,s[g])),c.push(s[g+1]);const d=[],f=Oe.empty();for(let g=l.length-1;g>=0;--g)if(!Ef(d,l[g])){const w=l[g];let C=c[g];C=ge(C);const D=o.gc(w);if(C instanceof Ms)d.push(w);else{const P=Zn(C,D);P!=null&&(d.push(w),f.set(w,P))}}const m=new je(d);return new mf(f,m,o.fieldTransforms)}function xb(n,e,t,r=!1){return Zn(t,n.Dc(r?4:3,e))}function Zn(n,e){if(_f(n=ge(n)))return Ko("Unsupported field value:",e,n),yf(n,e);if(n instanceof ti)return function(r,i){if(!gf(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Zn(l,i.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:rs(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rs(i.serializer,s)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:Mh(i.serializer,r._byteString)};if(r instanceof ce){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ko(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof st)return function(o,l){return{mapValue:{fields:{[oh]:{stringValue:lh},[Zi]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Co(l.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${vs(r)}`)}(n,e)}function yf(n,e){const t={};return th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,(r,i)=>{const s=Zn(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function _f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof it||n instanceof Be||n instanceof ce||n instanceof ti||n instanceof st)}function Ko(n,e,t){if(!_f(t)||!Zd(t)){const r=vs(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ja(n,e,t){if((e=ge(e))instanceof xs)return e._internalPath;if(typeof e=="string")return Qo(n,e);throw os("Field path arguments must be of type string or ",n,!1,void 0,t)}const kb=new RegExp("[~\\*/\\[\\]]");function Qo(n,e,t){if(e.search(kb)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xs(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function os(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new N(R.INVALID_ARGUMENT,l+n+c)}function Ef(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class bf{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Db extends bf{data(){return super.data()}}function Jo(n,e){return typeof e=="string"?Qo(n,e):e instanceof xs?e._internalPath:e._delegate._internalPath}/**
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
 */function Mb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xo{}class Nb extends Xo{}function vn(n,e,...t){let r=[];e instanceof Xo&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof Yo).length,l=s.filter(c=>c instanceof Ns).length;if(o>1||o>0&&l>0)throw new N(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ns extends Nb{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ns(e,t,r)}_apply(e){const t=this._parse(e);return Tf(e._query,t),new Yn(e.firestore,e.converter,$a(e._query,t))}_parse(e){const t=Ds(e.firestore);return function(s,o,l,c,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Vu(m,f);const C=[];for(const D of m)C.push(Nu(c,s,D));g={arrayValue:{values:C}}}else g=Nu(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Vu(m,f),g=xb(l,o,m,f==="in"||f==="not-in");return de.create(d,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qt(n,e,t){const r=e,i=Jo("where",n);return Ns._create(i,r,t)}class Yo extends Xo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)Tf(o,c),o=$a(o,c)}(e._query,t),new Yn(e.firestore,e.converter,$a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nu(n,e,t){if(typeof(t=ge(t))=="string"){if(t==="")throw new N(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gh(e)&&t.indexOf("/")!==-1)throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!O.isDocumentKey(r))throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xc(n,new O(r))}if(t instanceof ce)return Xc(n,t._key);throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(t)}.`)}function Vu(n,e){if(!Array.isArray(n)||n.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tf(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Vb{convertValue(e,t="none"){switch(Gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Zi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>le(o.doubleValue));return new st(s)}convertGeoPoint(e){return new it(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Es(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const t=zt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);Z($h(r),9688,{name:e});const i=new Lr(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(t)||bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function wf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ln extends bf{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ln._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ln._jsonSchemaVersion="firestore/documentSnapshot/1.0",ln._jsonSchema={type:he("string",ln._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class $i extends ln{data(e={}){return super.data(e)}}class Nn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Ob(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Eo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ob(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */function Zo(n){n=Xe(n,ce);const e=Xe(n.firestore,gn);return _b(Ho(e),n._key).then(t=>Fb(e,n,t))}Nn._jsonSchemaVersion="firestore/querySnapshot/1.0",Nn._jsonSchema={type:he("string",Nn._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class If extends Vb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function yn(n){n=Xe(n,Yn);const e=Xe(n.firestore,gn),t=Ho(e),r=new If(e);return Mb(n._query),Eb(t,n._query).then(i=>new Nn(e,r,n,i))}function Af(n,e,t){n=Xe(n,ce);const r=Xe(n.firestore,gn),i=wf(n.converter,e,t);return Vs(r,[vf(Ds(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function el(n,e,t,...r){n=Xe(n,ce);const i=Xe(n.firestore,gn),s=Ds(i);let o;return o=typeof(e=ge(e))=="string"||e instanceof xs?Rb(s,"updateDoc",n._key,e,t,r):Pb(s,"updateDoc",n._key,e),Vs(i,[o.toMutation(n._key,ze.exists(!0))])}function Lb(n){return Vs(Xe(n.firestore,gn),[new Po(n._key,ze.none())])}function tl(n,e){const t=Xe(n.firestore,gn),r=At(n),i=wf(n.converter,e);return Vs(t,[vf(Ds(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function Vs(n,e){return function(r,i){const s=new yt;return r.asyncQueue.enqueueAndForget(async()=>ob(await yb(r),i,s)),s.promise}(Ho(n),e)}function Fb(n,e,t){const r=t.docs.get(e._key),i=new If(n);return new ln(n,i,e._key,r,new Ar(t.hasPendingWrites,t.fromCache),e.converter)}function Ur(){return new Go("serverTimestamp")}function Xa(...n){return new Wo("arrayUnion",n)}(function(e,t=!0){(function(i){Kn=i})(Gn),On(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gn(new xy(r.getProvider("auth-internal")),new My(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ft(Lc,Fc,e),Ft(Lc,Fc,"esm2017")})();const $b={apiKey:"AIzaSyC-NphT5yoEBjG2r0IrQJrJSb5K5AYbEMc",authDomain:"flow-docent-app.firebaseapp.com",projectId:"flow-docent-app",storageBucket:"flow-docent-app.firebasestorage.app",messagingSenderId:"254132663644",appId:"1:254132663644:web:de97eb7ed43da37c297d99"},Sf=ad($b),ye=Tb(Sf),ni=Iy(Sf);async function nl(n){const e=await Zo(At(ye,"users",n));return e.exists()?{id:e.id,...e.data()}:null}async function er(n,e){await Af(At(ye,"users",n),e,{merge:!0})}function qb(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}async function Ub(n,e,t){let r,i=!0;for(;i;){r=qb();const o=vn(ot(ye,"classes"),Qt("codi","==",r));i=!(await yn(o)).empty}const s=await tl(ot(ye,"classes"),{codi:r,nom:t,professorId:n,professorNom:e,alumnes:[],createdAt:Ur()});return await er(n,{classesCreades:Xa(s.id)}),{id:s.id,codi:r,nom:t}}async function jb(n){const e=vn(ot(ye,"classes"),Qt("codi","==",n.toUpperCase().trim())),t=await yn(e);if(t.empty)return null;const r=t.docs[0];return{id:r.id,...r.data()}}async function Bb(n,e){await el(At(ye,"classes",n),{alumnes:Xa(e)}),await er(e.uid,{classesUnides:Xa(n)})}async function Cf(n){const e=await Zo(At(ye,"classes",n));return e.exists()?{id:e.id,...e.data()}:null}async function Pf(n){const e=vn(ot(ye,"classes"),Qt("professorId","==",n));return(await yn(e)).docs.map(r=>({id:r.id,...r.data()}))}async function zb(n){return n!=null&&n.length?(await Promise.all(n.map(t=>Cf(t)))).filter(Boolean):[]}async function Hb(n){return{id:(await tl(ot(ye,"tasques"),{...n,createdAt:Ur()})).id,...n}}async function Rf(n){const e=vn(ot(ye,"tasques"),Qt("classeId","==",n));return(await yn(e)).docs.map(r=>({id:r.id,...r.data()})).sort((r,i)=>{var l,c,d,f;const s=((c=(l=r.createdAt)==null?void 0:l.toMillis)==null?void 0:c.call(l))||0;return(((f=(d=i.createdAt)==null?void 0:d.toMillis)==null?void 0:f.call(d))||0)-s})}async function Gb(n){await Lb(At(ye,"tasques",n))}async function Wb(n){const e=vn(ot(ye,"lliuraments"),Qt("tasqueId","==",n.tasqueId),Qt("alumneId","==",n.alumneId)),t=await yn(e);return t.empty?{id:(await tl(ot(ye,"lliuraments"),{...n,nota:null,comentariProf:"",dataEnviat:Ur()})).id,...n}:(await el(t.docs[0].ref,{...n,updatedAt:Ur()}),{id:t.docs[0].id,...n})}async function Kb(n){const e=vn(ot(ye,"lliuraments"),Qt("tasqueId","==",n));return(await yn(e)).docs.map(r=>({id:r.id,...r.data()}))}async function Qb(n){const e=vn(ot(ye,"lliuraments"),Qt("alumneId","==",n));return(await yn(e)).docs.map(r=>({id:r.id,...r.data()}))}async function Jb(n,e,t){await el(At(ye,"lliuraments",n),{nota:parseFloat(e),comentariProf:t,qualificatAt:Ur()})}async function Xb(n){const e=await Zo(At(ye,"cami",n));return e.exists()?e.data():{}}async function Yb(n,e,t){await Af(At(ye,"cami",n),{[e]:t},{merge:!0})}let Qe=null,be=null;const Zb=new pt;function fe(){return Qe}function _n(){return be}function eT(){return(be==null?void 0:be.rol)||null}function Os(){return eT()==="professor"}function tT(n,e){return new Promise(t=>{hv(ni,async r=>{r?(Qe=r,be=await nl(r.uid),be?(n(Qe,be),t(be)):(Qe=r,be=null,t(null))):(Qe=null,be=null,e(),t(null))})})}async function nT(n,e,t,r){const i=await av(ni,e,t);await cv(i.user,{displayName:n});const s={nom:n,email:e,rol:r,classeActiva:null,classesCreades:[],classesUnides:[]};return await er(i.user.uid,s),Qe=i.user,be=s,{user:i.user,profile:s}}async function rT(n,e){const t=await ov(ni,n,e);return Qe=t.user,be=await nl(t.user.uid),{user:t.user,profile:be}}async function iT(n=null){const t=(await Mv(ni,Zb)).user;Qe=t;let r=await nl(t.uid);if(!r){if(!n)throw new Error("ROL_NEEDED");r={nom:t.displayName||t.email.split("@")[0],email:t.email,rol:n,classeActiva:null,classesCreades:[],classesUnides:[]},await er(t.uid,r)}return be=r,{user:t,profile:r}}async function sT(n){if(!Qe)throw new Error("No hi ha sessió activa");const e={...be,rol:n};return await er(Qe.uid,e),be=e,e}async function aT(){await fv(ni),Qe=null,be=null}function k(n=""){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function xf(n="",e=""){return(n[0]||"")+(e[0]||"")}function oT(){return new Date().toLocaleDateString("ca-ES",{day:"numeric",month:"long",year:"numeric"})}function Ls(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Ou(n){const e=parseFloat(n.min)||0,t=parseFloat(n.max)||100,i=((parseFloat(n.value)||0)-e)/(t-e)*100;n.style.setProperty("--pct",`${i}%`)}function lT(n,e){n.innerHTML=cT(),uT(n,e)}function cT(){return`
    <div class="auth-wrap">
      <div class="auth-card">
        <!-- Brand -->
        <div class="auth-brand">
          <div class="auth-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="none"/>
            </svg>
          </div>
          <h1 class="auth-title">Orientació Acadèmica</h1>
          <p class="auth-subtitle">Plataforma de referència per a estudiants i docents · Olot</p>
        </div>

        <!-- Rol selector -->
        <div class="auth-step" id="auth-step-rol">
          <p class="auth-step-label">Qui ets?</p>
          <div class="rol-grid">
            <button class="rol-card" data-rol="professor">
              <div class="rol-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span class="rol-card-name">Sóc docent</span>
              <span class="rol-card-desc">Gestiono classes, publico tasques i segueixo l'alumnat</span>
            </button>
            <button class="rol-card" data-rol="alumne">
              <div class="rol-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <span class="rol-card-name">Sóc alumne/a</span>
              <span class="rol-card-desc">M'uneixo a una classe i faig el seguiment del meu camí</span>
            </button>
          </div>
        </div>

        <!-- Auth form -->
        <div class="auth-step" id="auth-step-form" style="display:none;">
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-login">Accedeix</button>
            <button class="auth-tab" id="tab-register">Registra't</button>
          </div>

          <!-- Login form -->
          <div id="auth-form-login">
            <div class="auth-google-btn" id="auth-btn-google">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continua amb Google
            </div>
            <div class="auth-divider"><span>o</span></div>
            <div class="form-group mb-3">
              <label class="form-label" for="login-email">Correu electrònic</label>
              <input class="form-input" id="login-email" type="email" autocomplete="email" placeholder="nom@escola.cat" />
            </div>
            <div class="form-group mb-4">
              <label class="form-label" for="login-password">Contrasenya</label>
              <input class="form-input" id="login-password" type="password" autocomplete="current-password" placeholder="••••••••" />
            </div>
            <button class="btn btn--primary w-full" id="auth-btn-login">Accedir</button>
          </div>

          <!-- Register form -->
          <div id="auth-form-register" style="display:none;">
            <div class="auth-google-btn" id="auth-btn-google-reg">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continua amb Google
            </div>
            <div class="auth-divider"><span>o</span></div>
            <div class="form-group mb-3">
              <label class="form-label" for="reg-nom">Nom i cognoms</label>
              <input class="form-input" id="reg-nom" type="text" autocomplete="name" placeholder="Maria Garcia..." />
            </div>
            <div class="form-group mb-3">
              <label class="form-label" for="reg-email">Correu electrònic</label>
              <input class="form-input" id="reg-email" type="email" autocomplete="email" placeholder="nom@escola.cat" />
            </div>
            <div class="form-group mb-4">
              <label class="form-label" for="reg-password">Contrasenya (mínim 6 caràcters)</label>
              <input class="form-input" id="reg-password" type="password" autocomplete="new-password" placeholder="••••••••" />
            </div>
            <button class="btn btn--primary w-full" id="auth-btn-register">Crear compte</button>
          </div>

          <p id="auth-error" class="auth-error" style="display:none;"></p>
        </div>

        <div class="auth-back-row" id="auth-back-row" style="display:none;">
          <button class="btn btn--ghost btn--sm" id="auth-btn-back">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Torna enrere
          </button>
        </div>
      </div>
    </div>`}function uT(n,e){var i,s,o,l,c,d,f;let t=null;n.querySelectorAll(".rol-card").forEach(m=>{m.addEventListener("click",()=>{t=m.dataset.rol,n.querySelectorAll(".rol-card").forEach(g=>g.classList.remove("active")),m.classList.add("active"),n.querySelector("#auth-step-rol").style.display="none",n.querySelector("#auth-step-form").style.display="",n.querySelector("#auth-back-row").style.display=""})}),(i=n.querySelector("#tab-login"))==null||i.addEventListener("click",()=>{n.querySelector("#tab-login").classList.add("active"),n.querySelector("#tab-register").classList.remove("active"),n.querySelector("#auth-form-login").style.display="",n.querySelector("#auth-form-register").style.display="none",_a(n)}),(s=n.querySelector("#tab-register"))==null||s.addEventListener("click",()=>{n.querySelector("#tab-register").classList.add("active"),n.querySelector("#tab-login").classList.remove("active"),n.querySelector("#auth-form-login").style.display="none",n.querySelector("#auth-form-register").style.display="",_a(n)}),(o=n.querySelector("#auth-btn-back"))==null||o.addEventListener("click",()=>{n.querySelector("#auth-step-rol").style.display="",n.querySelector("#auth-step-form").style.display="none",n.querySelector("#auth-back-row").style.display="none",t=null,_a(n)}),(l=n.querySelector("#auth-btn-login"))==null||l.addEventListener("click",async()=>{var w,C,D;const m=(C=(w=n.querySelector("#login-email"))==null?void 0:w.value)==null?void 0:C.trim(),g=(D=n.querySelector("#login-password"))==null?void 0:D.value;if(!m||!g){dt(n,"Omple tots els camps.");return}try{In(n,!0);const{profile:P}=await rT(m,g);if(!P){dt(n,"No s'ha trobat el perfil. Contacta amb el teu centre.");return}e(P)}catch(P){dt(n,Ea(P))}finally{In(n,!1)}}),(c=n.querySelector("#auth-btn-register"))==null||c.addEventListener("click",async()=>{var C,D,P,j,F;const m=(D=(C=n.querySelector("#reg-nom"))==null?void 0:C.value)==null?void 0:D.trim(),g=(j=(P=n.querySelector("#reg-email"))==null?void 0:P.value)==null?void 0:j.trim(),w=(F=n.querySelector("#reg-password"))==null?void 0:F.value;if(!m||!g||!w){dt(n,"Omple tots els camps.");return}if(!t){dt(n,"Torna enrere i selecciona el teu rol.");return}if(w.length<6){dt(n,"La contrasenya ha de tenir almenys 6 caràcters.");return}try{In(n,!0);const{profile:$}=await nT(m,g,w,t);e($)}catch($){dt(n,Ea($))}finally{In(n,!1)}});const r=async(m,g)=>{try{In(m,!0);const{profile:w}=await iT(g||t);e(w)}catch(w){w.message==="ROL_NEEDED"?dt(m,"Selecciona primer si ets docent o alumne/a."):dt(m,Ea(w))}finally{In(m,!1)}};(d=n.querySelector("#auth-btn-google"))==null||d.addEventListener("click",()=>r(n,t)),(f=n.querySelector("#auth-btn-google-reg"))==null||f.addEventListener("click",()=>r(n,t))}function dt(n,e){const t=n.querySelector("#auth-error");t&&(t.textContent=e,t.style.display="")}function _a(n){const e=n.querySelector("#auth-error");e&&(e.style.display="none")}function In(n,e){n.querySelectorAll(".btn--primary, .auth-google-btn").forEach(t=>{t.disabled=e,t.style.opacity=e?"0.6":""})}function Ea(n){return{"auth/user-not-found":"No existeix cap compte amb aquest correu.","auth/wrong-password":"Contrasenya incorrecta.","auth/email-already-in-use":"Aquest correu ja té un compte. Prova a accedir.","auth/invalid-email":"El format del correu no és vàlid.","auth/weak-password":"La contrasenya és massa feble (mínim 6 caràcters).","auth/too-many-requests":"Massa intents fallits. Espera uns minuts i torna a provar.","auth/popup-closed-by-user":"Has tancat la finestra de Google. Torna a provar.","auth/invalid-credential":"Les credencials no són vàlides. Comprova correu i contrasenya."}[n.code]||`Error: ${n.message}`}const ri={eso:{id:"eso",label:"ESO",sublabel:"4t curs",color:"#4f8ef7",info:{titol:"Educació Secundària Obligatòria (ESO)",descripcio:"L'ESO és l'etapa obligatòria fins als 16 anys. En acabar, tens diverses opcions acadèmiques i professionals que s'adapten a les teves capacitats i interessos.",durada:"4 anys (fins els 16)",sortides:["Batxillerat","Cicles — Grau Mitjà","PTT / PFI","Treballar"],notaMinima:null,salari:null}},batxillerat:{id:"batxillerat",label:"Batxillerat",sublabel:"2 anys",color:"#8b7cf8",info:{titol:"Batxillerat",descripcio:"Etapa postobligatòria de 2 anys que prepara per a la universitat (via selectivitat). Existeixen tres modalitats a Olot. Requereix constància i motivació acadèmica.",durada:"2 anys",sortides:["Selectivitat (PAU)","Cicles — Grau Superior","Món laboral"],notaMinima:5,salari:null,modalitats:["Ciències i Tecnologia","Humanitats i Ciències Socials","Batxillerat d'Arts"]}},cicles:{id:"cicles",label:"Cicles d'Olot",sublabel:"FP a Olot",color:"#2dd4bf",info:{titol:"Cicles Formatius a Olot",descripcio:"La Formació Professional (FP) a Olot ofereix cicles de Grau Mitjà i Grau Superior en àmbits molt diversos. És un camí pràctic, orientat a l'ocupació, amb molt bona inserció laboral.",durada:"2 anys per cicle",sortides:["Treballar","Grau Superior","Universitat (algunes opcions)"],notaMinima:4,salari:null}},grauMitja:{id:"grauMitja",label:"Grau mitjà",sublabel:"FP nivell 3",color:"#2dd4bf",info:{titol:"Cicle Formatiu de Grau Mitjà",descripcio:"El Grau Mitjà és el primer nivell de la Formació Professional. Té una durada de 2 anys (inclou FCT — pràctiques en empresa). Permet accedir directament al món laboral o continuar cap al Grau Superior.",durada:"2 anys + pràctiques (FCT)",sortides:["Treballar","Grau Superior (mateix àmbit)","Batxillerat (en alguns casos)"],notaMinima:4,salari:"18.000–24.000 € bruts/any inicials"}},grauSuperior:{id:"grauSuperior",label:"Grau superior",sublabel:"FP nivell 5",color:"#4f8ef7",info:{titol:"Cicle Formatiu de Grau Superior",descripcio:"El Grau Superior és el segon nivell de la FP. Permet accedir-hi des del Batxillerat o des d'un Grau Mitjà del mateix àmbit. Inclou pràctiques (FCT) i és equivalent a nivell 5 del Marc Europeu de Qualificacions.",durada:"2 anys + pràctiques (FCT)",sortides:["Treballar (llocs de responsabilitat)","Universitat (convalidació de crèdits)","Màster professional"],notaMinima:5,salari:"22.000–32.000 € bruts/any inicials"}},pttPfi:{id:"pttPfi",label:"PTT / PFI",sublabel:"Transició i inserció",color:"#fbbf24",info:{titol:"PTT (Programa de Transició al Treball) / PFI (Programa de Formació i Inserció)",descripcio:"Programes pensats per a joves que han acabat l'ESO però necessiten un suport addicional per entrar al mercat laboral o per orientar-se cap a altres estudis. Combinen formació bàsica professional amb orientació laboral.",durada:"1 any",sortides:["Treballar","Cicles — Grau Mitjà","Preparació per a proves d'accés"],notaMinima:null,salari:null}},treballar:{id:"treballar",label:"Treballar",sublabel:"Món laboral",color:"#f472b6",info:{titol:"Incorporació al món laboral",descripcio:"Algunes persones opten per incorporar-se directament al mercat laboral en acabar l'ESO. És una opció vàlida, però és recomanable tenir almenys algun certificat professional o el Graduat en ESO per facilitar l'accés i la progressió.",durada:"—",sortides:["Formació contínua","Certificats de professionalitat","Tornar als estudis més endavant"],notaMinima:null,salari:"16.000–20.000 € bruts/any inicials (sense qualificació)"}},selectivitat:{id:"selectivitat",label:"Selectivitat",sublabel:"PAU",color:"#a78bfa",info:{titol:"Selectivitat — Proves d'Accés a la Universitat (PAU)",descripcio:"Les PAU (o selectivitat) són les proves que es fan en acabar el Batxillerat per accedir a la universitat. La nota final és la mitjana del batxillerat (60%) + nota de les proves (40%). Pots millorar nota amb matèries de fase específica.",durada:"Juny / setembre (exàmens)",sortides:["Universitat / Grau universitari"],notaMinima:5,salari:null}},universitat:{id:"universitat",label:"Universitat / Grau",sublabel:"4 anys",color:"#f59e0b",info:{titol:"Universitat — Grau Universitari",descripcio:"El grau universitari és la primera titulació universitària. Té una durada de 4 anys (240 crèdits ECTS). S'accedeix via selectivitat o, en alguns casos, via Grau Superior amb convalidació de crèdits.",durada:"4 anys (o més)",sortides:["Món laboral (titulació superior)","Màster universitari","Doctorat"],notaMinima:5,salari:"24.000–45.000 € bruts/any inicials (molt variable per àmbit)"}}},Lu=[{id:"batx-univ",nom:"Batxillerat → Universitat",color:"#8b7cf8",perfil:["academic","ciencies","lletres","arts","universitat"],explicacio:"Camí acadèmic clàssic. Idoni per a qui vol estudiar una carrera universitària.",ruta:["eso","batxillerat","selectivitat","universitat"]},{id:"batx-gs",nom:"Batxillerat → Grau Superior",color:"#4f8ef7",perfil:["academic","tecnologia","practic"],explicacio:"Combina la solidesa del Batxillerat amb la professionalització d'un Grau Superior.",ruta:["eso","batxillerat","grauSuperior","treballar"]},{id:"gm-gs",nom:"Grau Mitjà → Grau Superior",color:"#2dd4bf",perfil:["practic","tecnologia","hands-on"],explicacio:"Camí professional progressiu. Molt bon accés al mercat laboral amb alta qualificació.",ruta:["eso","cicles","grauMitja","grauSuperior","treballar"]},{id:"gm-treball",nom:"Grau Mitjà → Treballar",color:"#f472b6",perfil:["practic","immediat","hands-on"],explicacio:"Formació professional directa i inserció ràpida al mercat laboral. Molt efectiu.",ruta:["eso","cicles","grauMitja","treballar"]},{id:"pfi-gm",nom:"PTT/PFI → Grau Mitjà",color:"#fbbf24",perfil:["suport","reorientacio","practica"],explicacio:"Per a qui necessita un acompanyament addicional abans d'entrar a un cicle formatiu.",ruta:["eso","pttPfi","grauMitja","treballar"]},{id:"eso-treballar",nom:"Treballar directament",color:"#f59e0b",perfil:["immediat","economic","practic"],explicacio:"Incorporació directa al mon laboral. Recomanable combinar-ho amb certificats professionals.",ruta:["eso","treballar"]}],dT=[{paraules:["universitat","carrera","medicina","dret","enginyeria","arquitectura","psicologia","farmacia"],perfils:["academic","universitat"],recorreguts:["batx-univ"]},{paraules:["ciencies","fisica","quimica","mates","matematiques","biologia","tecnologia","programacio","informatica"],perfils:["ciencies","tecnologia","academic"],recorreguts:["batx-univ","batx-gs"]},{paraules:["art","dibuix","disseny","moda","fotografia","animacio","creative","creatiu","creativa","musica","teatre","dansa"],perfils:["arts"],recorreguts:["batx-univ","gm-gs"]},{paraules:["practic","practica","praques","feina","treballar","treball","aviat","rapid","diner","sou","empresa"],perfils:["practic","immediat"],recorreguts:["gm-treball","gm-gs"]},{paraules:["cuina","restaurant","hostaleria","turisme","cuiner","pastisseria"],perfils:["practic","hands-on"],recorreguts:["gm-gs","gm-treball"]},{paraules:["sanitari","sanitat","infermer","infermeria","metge","salut","cures","ajudar","persones","social"],perfils:["practic","academic"],recorreguts:["batx-univ","gm-gs"]},{paraules:["esport","educacio","mestre","professor","nen","nens","monitors"],perfils:["academic","practic"],recorreguts:["batx-univ","gm-gs"]},{paraules:["no se","no sap","dubt","confus","confusa","perdut","perduda","suport","ajuda"],perfils:["suport","reorientacio"],recorreguts:["pfi-gm","gm-treball"]}],Ze=[{id:"bosc-de-la-coma",nom:"Institut Bosc de la Coma",adreca:"Carrer dels Caputxins, 104, 17800 Olot",coordenades:[42.1727,2.4763],color:"#4f8ef7",colorHex:"#4f8ef7",web:"https://agora.xtec.cat/iesbosccoma/",descripcio:"Institut públic d'Olot amb àmplia oferta de batxillerat i cicles formatius. Referent de la zona en formació professional. Molt ben valorat per la seva diversitat d'oferta i acompanyament a l'alumnat.",batxillerats:[{nom:"Humanitats i Ciències Socials",assignatures:["Història de la Filosofia","Història de l'Art","Història","Economia","Grec","Llatí","Literatura Catalana","Literatura Castellana","Matemàtiques Aplicades a les CC. Socials","Anglès"]},{nom:"Ciències i Tecnologia",assignatures:["Matemàtiques","Física","Química","Biologia","Geologia","Tecnologia Industrial","Electrotècnia","Ciències de la Terra","Anglès"]}],cicles:[{nom:"Gestió Administrativa",tipus:"Grau Mitjà",familia:"Administració i gestió",durada:"2000 h",prova:!0},{nom:"Cures Auxiliars d'Infermeria",tipus:"Grau Mitjà",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Transport i Logística",tipus:"Grau Mitjà",familia:"Transport i manteniment",durada:"2000 h",prova:!1},{nom:"Activitats Comercials",tipus:"Grau Mitjà",familia:"Comerç i màrqueting",durada:"2000 h",prova:!1},{nom:"Administració i Finances",tipus:"Grau Superior",familia:"Administració i gestió",durada:"2000 h",prova:!0},{nom:"Integració Social",tipus:"Grau Superior",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!0},{nom:"Educació Infantil",tipus:"Grau Superior",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!0}]},{id:"la-garrotxa",nom:"Institut La Garrotxa",adreca:"Avinguda de les Tries, 26, 17800 Olot",coordenades:[42.1859,2.4741],color:"#8b7cf8",colorHex:"#8b7cf8",web:"https://agora.xtec.cat/ieslagarrotxa/",descripcio:"Centre especialitzat en batxillerat científic i cicles del sector tecnològic i industrial. Excel·lent en formació tècnica i reconegut per la seva vocació STEM.",batxillerats:[{nom:"Ciències i Tecnologia",assignatures:["Matemàtiques","Física","Química","Biologia","Tecnologia Industrial","Electrotècnia","Ciències de la Terra","Dibuix Tècnic","Anglès"]},{nom:"Humanitats i Ciències Socials",assignatures:["Llengua Catalana","Llengua Castellana","Anglès","Història","Filosofia","Economia","Matemàtiques Aplicades a les CC. Socials"]}],cicles:[{nom:"Instal·lació i Manteniment Electromecànic",tipus:"Grau Mitjà",familia:"Electricitat i electrònica",durada:"2000 h",prova:!1},{nom:"Equipaments i Instal·lacions Domòtiques",tipus:"Grau Mitjà",familia:"Edificació i obra civil",durada:"2000 h",prova:!1},{nom:"Producció en Indústries d'Arts Gràfiques",tipus:"Grau Mitjà",familia:"Arts gràfiques",durada:"2000 h",prova:!1},{nom:"Sistemes de Telecomunicació i Informàtics",tipus:"Grau Superior",familia:"Electricitat i electrònica",durada:"2000 h",prova:!1},{nom:"Prevenció de Riscos Professionals",tipus:"Grau Superior",familia:"Seguretat i medi ambient",durada:"2000 h",prova:!1},{nom:"Mecatrònica Industrial",tipus:"Grau Superior",familia:"Fabricació mecànica",durada:"2000 h",prova:!1}]},{id:"escola-art",nom:"Escola d'Art d'Olot",adreca:"Carrer del Bisbe Lorenzana, 12, 17800 Olot",coordenades:[42.1815,2.4842],color:"#f472b6",colorHex:"#f472b6",web:"https://escoladartolot.cat/",descripcio:"Centre especialitzat en arts plàstiques i disseny. Únic al territori de la Garrotxa. Altament recomanat per a perfils creatius i artístics. Ambient molt inspirador.",batxillerats:[{nom:"Batxillerat d'Arts",assignatures:["Dibuix Artístic I i II","Dibuix Tècnic I i II","Volum","Fonaments de les Arts I i II","Imatge i So","Cultura Audiovisual","Disseny","Arts Escèniques","Taller d'Arts Plàstiques i Disseny"]}],cicles:[{nom:"Il·lustració",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Disseny Gràfic",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Animació",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Fotografia",tipus:"Grau Mitjà",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Arts Aplicades a la Indumentària",tipus:"Grau Mitjà",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0}]},{id:"montsacopa",nom:"Institut Montsacopa",adreca:"Carrer de la Roureda, 1, 17800 Olot",coordenades:[42.1882,2.482],color:"#2dd4bf",colorHex:"#2dd4bf",web:"https://agora.xtec.cat/iesmontsacopa/",descripcio:"Institut públic amb oferta de batxillerat i cicles de l'àmbit sanitari, social i de l'hostaleria. Excel·lent acompanyament tutorial i clima de centre molt positiu.",batxillerats:[{nom:"Humanitats i Ciències Socials",assignatures:["Llatí I i II","Grec I i II","Història de la Filosofia","Economia","Literatura Catalana","Literatura Castellana","Matemàtiques Aplicades a les CC. Socials","Anglès"]},{nom:"Ciències i Tecnologia",assignatures:["Biologia","Química","Física","Matemàtiques","Ciències de la Terra","Anglès"]}],cicles:[{nom:"Farmàcia i Parafarmàcia",tipus:"Grau Mitjà",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Atenció a Persones en Situació de Dependència",tipus:"Grau Mitjà",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!1},{nom:"Cuina i Gastronomia",tipus:"Grau Mitjà",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1},{nom:"Dietètica",tipus:"Grau Superior",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Salut Ambiental",tipus:"Grau Superior",familia:"Sanitat",durada:"2000 h",prova:!1},{nom:"Direcció de Cuina",tipus:"Grau Superior",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1},{nom:"Guia, Informació i Assistència Turística",tipus:"Grau Superior",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1}]}],B={ORIENTADOR_CHAT:"ornt_chat",OPCIONS_GENERADES:"ornt_opcions",OPCIO_SEL:"ornt_opcio_sel",RECORREGUTS:"ornt_recorreguts",STUDENTS:"ornt_students",STUDENT_ACTIVE:"ornt_student_active",PISSARRA_ITEMS:"ornt_pissarra",PISSARRA_PREGUNTA:"ornt_piss_q",MAPA_TIPUS:"ornt_mapa_tipus",MAPA_OPCIO:"ornt_mapa_opcio",MAPA_CENTRE:"ornt_mapa_centre",PLANNER_ITEMS:"ornt_planner"};function me(n,e=null){try{const t=localStorage.getItem(n);return t!==null?JSON.parse(t):e}catch{return e}}function ee(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}const ht=140,qi=46,hT=4,ls={eso:{cx:410,cy:55},batxillerat:{cx:175,cy:165},grauMitja:{cx:410,cy:165},pttPfi:{cx:645,cy:165},selectivitat:{cx:175,cy:290},grauSuperior:{cx:410,cy:290},treballar:{cx:730,cy:227},universitat:{cx:290,cy:400},master:{cx:290,cy:510}};ri.master={id:"master",label:"Màster / Postgrau",sublabel:"Especialització",color:"#f59e0b",info:{titol:"Màster universitari",descripcio:"Especialització després del Grau. Molt valorat en el sector.",sortides:["Treballar professional","Doctorat"]}};function Fu(n){const e=ls[n];return{x:e.cx-ht/2,y:e.cy-qi/2}}function $u(n){return ls[n]||{cx:0,cy:0}}let zn=[],Vn=null;function fT(n){n.innerHTML=pT(),vT(n),PT(n)}function pT(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          ${_r("map")}
        </span>
        Itineraris acadèmics
      </h1>
      <p class="section-subtitle">Explora els camins possibles després de l'ESO a Olot. Fes clic als nodes per veure detalls.</p>
    </div>

    <div class="it-layout">
      <!-- Column A: Diagram + Info -->
      <div class="it-main">

        <!-- Diagram -->
        <div class="glass-card mb-6 card-accent-top" style="padding:var(--s4)">
          <div class="diagram-wrap">
            ${gT()}
          </div>
        </div>

        <!-- Info panel -->
        <div class="glass-card it-info-panel" id="it-info-panel">
          <p class="text-secondary text-sm">Fes clic a qualsevol node del diagrama per veure informació detallada sobre aquella via.</p>
        </div>

        <!-- Subtria -->
        <div id="it-subtria" style="display:none; margin-top:var(--s6);"></div>

        <!-- Opcions generades -->
        <div id="it-opcions-bloc" class="glass-card" style="display:none; margin-top:var(--s6);">
          <h3 class="font-bold mb-4" style="font-size:1rem; color:var(--t-1);">Opcions recomanades</h3>
          <div id="it-opcions-list"></div>
          <div class="divider"></div>
          <div class="resum-docent" id="it-resum-docent" style="display:none;"></div>
        </div>
      </div>

      <!-- Column B: Orientador -->
      <aside class="it-sidebar">
        <div class="glass-card card-accent-top">
          <div class="orientador-header">
            <div class="orientador-avatar" aria-hidden="true">${_r("chat")}</div>
            <div>
              <div class="orientador-name">Orientador local</div>
              <div class="orientador-role">Anàlisi de perfil · Sense connexió externa</div>
            </div>
          </div>

          <div class="chat-history" id="it-chat-history" aria-live="polite" aria-label="Historial de missatges"></div>

          <div class="form-group mb-4">
            <label class="form-label" for="it-input">Descriu els teus interessos i preferències</label>
            <textarea class="form-textarea" id="it-input" rows="4"
              placeholder="Per exemple: m'agrada molt la informàtica, prefereixo algo pràctic, m'encanta crear coses i dissenyar, no m'agrada molt llegir..."></textarea>
          </div>

          <div class="flex gap-2 mb-4">
            <button class="btn btn--primary flex-1" id="it-btn-generar">
              ${_r("spark")} Genera opcions
            </button>
            <button class="btn btn--ghost btn--sm btn--icon" id="it-btn-reset" title="Reiniciar conversa" aria-label="Reiniciar">
              ${_r("refresh")}
            </button>
          </div>

          <div class="divider"></div>

          <div class="form-group mb-3">
            <label class="form-label" for="it-nom-recorregut">Nom del recorregut</label>
            <input class="form-input" id="it-nom-recorregut" type="text" placeholder="El meu camí" />
          </div>
          <button class="btn btn--secondary w-full" id="it-btn-desar">
            ${_r("save")} Desa recorregut seleccionat
          </button>
          <p id="it-desar-hint" class="text-xs text-muted mt-2" style="display:none;text-align:center;">Selecciona primer una de les opcions generades.</p>
        </div>
      </aside>
    </div>
  `}function mT(n,e,t,r,i="vertical"){if(Math.abs(n-t)<2)return`M${n},${e} L${t},${r}`;if(Math.abs(e-r)<2)return`M${n},${e} L${t},${r}`;const o=(e+r)/2,l=(n+t)/2,c=t>n?1:-1,d=r>e?1:-1;return i==="vertical"?`M${n},${e} L${n},${o-4*d} Q${n},${o} ${n+4*c},${o} L${t-4*c},${o} Q${t},${o} ${t},${o+4*d} L${t},${r}`:`M${n},${e} L${l-4*c},${e} Q${l},${e} ${l},${e+4*d} L${l},${r-4*d} Q${l},${r} ${l+4*c},${r} L${t},${r}`}function gT(){const r=[{id:"e-eso-bat",from:"eso",to:"batxillerat",style:"main",ori:"vertical"},{id:"e-eso-gm",from:"eso",to:"grauMitja",style:"main",ori:"vertical"},{id:"e-eso-pfi",from:"eso",to:"pttPfi",style:"alt",ori:"vertical"},{id:"e-eso-trb",from:"eso",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-bat-sel",from:"batxillerat",to:"selectivitat",style:"main",ori:"vertical"},{id:"e-bat-gs",from:"batxillerat",to:"grauSuperior",style:"alt",ori:"horizontal"},{id:"e-pfi-gm",from:"pttPfi",to:"grauMitja",style:"main",ori:"horizontal",attachment:"left"},{id:"e-gm-gs",from:"grauMitja",to:"grauSuperior",style:"main",ori:"vertical"},{id:"e-gm-trb",from:"grauMitja",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-sel-uni",from:"selectivitat",to:"universitat",style:"main",ori:"horizontal"},{id:"e-gs-uni",from:"grauSuperior",to:"universitat",style:"alt",ori:"vertical"},{id:"e-gs-trb",from:"grauSuperior",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-uni-mas",from:"universitat",to:"master",style:"main",ori:"vertical"},{id:"e-uni-trb",from:"universitat",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-mas-trb",from:"master",to:"treballar",style:"side",ori:"horizontal",attachment:"right"}].map(l=>{const c=$u(l.from),d=$u(l.to),f=Fu(l.from),m=Fu(l.to);let g,w,C,D;if(l.attachment==="right"){if(g=f.x+ht,w=c.cy,C=d.cx,D=m.y,l.to==="treballar"){C=f.x+ht+20,D=c.cy;const re=ls.treballar.cx;return`<g class="diagram-edge-group"><path class="diagram-edge" d="${`M${g},${w} L${re},${w} L${re},${m.y}`}" stroke="${{main:"#6b7fbe",side:"#8b7cf8",alt:"#4f8ef7"}[l.style]}" stroke-opacity="0.4" fill="none" marker-end="url(#arrowhead-${l.style})"/></g>`}}else l.attachment==="left"?(g=f.x,w=c.cy,C=m.x+ht,D=d.cy):l.ori==="vertical"?(g=c.cx,w=f.y+qi,C=d.cx,D=m.y):(g=f.x+ht,w=c.cy,C=m.x,D=d.cy,c.cy<d.cy&&Math.abs(c.cx-d.cx)>ht&&(D=m.y),c.cx>d.cx&&(g=f.x,C=m.x+ht));const P=mT(g,w,C,D,l.ori),F={main:"#6b7fbe",side:"#8b7cf8",alt:"#4f8ef7"}[l.style]||"#6b7fbe",Y={main:"0.6",side:"0.4",alt:"0.5"}[l.style]||"0.5";return`
      <g class="diagram-edge-group" data-edge-id="${l.id}">
        <path class="diagram-edge" id="${l.id}"
          d="${P}" stroke="${F}" stroke-opacity="${Y}" fill="none"
          stroke-linejoin="round"
          marker-end="url(#arrowhead-${l.style})"/>
      </g>`}).join(""),i=Object.entries(ls).map(([l,c])=>{const d=ri[l];if(!d)return"";const f=c.cx-ht/2,m=c.cy-qi/2,w=["eso","grauMitja","grauSuperior","universitat"].includes(l)?2:1.5;return`
      <g class="diagram-node" data-node="${l}"
         role="button" tabindex="0"
         aria-label="${k(d.label)}">
        <!-- Main rect, sense efectes -->
        <rect class="node-rect" id="nr-${l}"
          x="${f}" y="${m}" width="${ht}" height="${qi}" rx="${hT}"
          fill="${d.color}15" stroke="${d.color}" stroke-opacity="0.85" stroke-width="${w}"/>
        <!-- Label principal -->
        <text class="node-label" x="${c.cx}" y="${c.cy-2}"
          text-anchor="middle" fill="#fff" font-weight="600" font-size="13">${k(d.label)}</text>
        <!-- Sublabel -->
        ${d.sublabel?`<text class="node-sublabel" x="${c.cx}" y="${c.cy+13}"
          text-anchor="middle" fill="#a1a1aa" font-size="10">${k(d.sublabel)}</text>`:""}
      </g>`}).join(""),o=[{col:"#6b7fbe",label:"Camí principal"},{col:"#4f8ef7",label:"Via alternativa"},{col:"#8b7cf8",label:"Sortida laboral"}].map((l,c)=>`
    <g transform="translate(${10+c*140}, 0)">
      <line x1="0" y1="6" x2="18" y2="6" stroke="${l.col}" stroke-width="1.5" opacity="0.7"/>
      <polygon points="16,3 22,6 16,9" fill="${l.col}" opacity="0.7"/>
      <text x="26" y="10" class="legend-text">${k(l.label)}</text>
    </g>`).join("");return`
    <svg class="diagram-svg" viewBox="0 0 840 600"
         xmlns="http://www.w3.org/2000/svg"
         aria-label="Diagrama d'itineraris acadèmics després de l'ESO">
      <defs>
        <!-- Arrowheads per a cada estil -->
        <marker id="arrowhead-main" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#6b7fbe" opacity="0.75"/>
        </marker>
        <marker id="arrowhead-alt" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#4f8ef7" opacity="0.75"/>
        </marker>
        <marker id="arrowhead-side" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#8b7cf8" opacity="0.65"/>
        </marker>
        <marker id="arrowhead-main-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#6b7fbe"/>
        </marker>
        <marker id="arrowhead-alt-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#4f8ef7"/>
        </marker>
        <marker id="arrowhead-side-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#8b7cf8"/>
        </marker>
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Edges -->
      <g class="diagram-edges">${r}</g>

      <!-- Nodes -->
      <g class="diagram-nodes">${i}</g>

      <!-- Legend -->
      <g transform="translate(20, 572)">${o}</g>
    </svg>`}function vT(n){var e,t,r;n.querySelectorAll(".diagram-node").forEach(i=>{i.addEventListener("click",()=>qu(i.dataset.node,n)),i.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),qu(i.dataset.node,n))})}),(e=n.querySelector("#it-btn-generar"))==null||e.addEventListener("click",()=>IT(n)),(t=n.querySelector("#it-btn-reset"))==null||t.addEventListener("click",()=>CT(n)),(r=n.querySelector("#it-btn-desar"))==null||r.addEventListener("click",()=>ST(n))}function qu(n,e){const t=ri[n];if(!t)return;e.querySelectorAll(".node-rect").forEach(i=>{i.removeAttribute("filter"),i.style.strokeWidth=""});const r=e.querySelector(`#nr-${n}`);r&&(r.setAttribute("filter","url(#node-glow)"),r.style.strokeWidth="2.5"),yT(t,e),_T(n,e)}function yT(n,e){const t=n.info,r=e.querySelector("#it-info-panel");if(!r)return;const i=(t.sortides||[]).map(l=>`<span class="badge badge--blue">${k(l)}</span>`).join(""),s=[];t.durada&&s.push(["Durada",t.durada]),t.notaMinima&&s.push(["Nota mínima orientativa",`${t.notaMinima.toFixed(1)}`]),t.salari&&s.push(["Salari orientatiu inicial",t.salari]);const o=s.map(([l,c])=>`
    <div class="metric-item">
      <span class="metric-value">${k(c)}</span>
      <div class="metric-label">${k(l)}</div>
    </div>`).join("");r.innerHTML=`
    <div class="flex items-center gap-3 mb-4">
      <div style="width:5px;height:36px;border-radius:3px;background:${n.color};flex-shrink:0;"></div>
      <h2 class="it-info-title">${k(t.titol)}</h2>
    </div>
    <p class="it-info-desc">${k(t.descripcio)}</p>
    ${i?`<div class="flex flex-wrap gap-2 mb-4">${i}</div>`:""}
    ${o?`<div class="metric-grid">${o}</div>`:""}`}function _T(n,e){const t=e.querySelector("#it-subtria");t&&(n==="batxillerat"?(ET(t),t.style.display=""):["grauMitja","grauSuperior"].includes(n)?(TT(t,n),t.style.display=""):(t.style.display="none",t.innerHTML=""))}function ET(n,e){const t=Ze.filter(r=>{var i;return(i=r.batxillerats)==null?void 0:i.length});n.innerHTML=`
    <div class="glass-card">
      <h3 class="font-bold mb-5" style="color:var(--t-1);">Modalitats de Batxillerat a Olot</h3>
      ${t.map(r=>`
        <div class="centre-block mb-5">
          <div class="centre-block-header">
            <div class="centre-dot" style="background:${r.color};"></div>
            <h4 class="font-semibold" style="color:${r.color}; font-size:var(--fz-sm);">${k(r.nom)}</h4>
          </div>
          <div class="subtria-grid">
            ${r.batxillerats.map(i=>`
              <div class="subtria-card" data-centre="${r.id}" data-bat="${k(i.nom)}" tabindex="0"
                   style="--card-color:${r.color};">
                <span class="subtria-card-title">${k(i.nom)}</span>
              </div>`).join("")}
          </div>
        </div>`).join("")}
      <div id="it-bat-detail" style="display:none;"></div>
    </div>`,n.querySelectorAll(".subtria-card").forEach(r=>{const i=()=>{n.querySelectorAll(".subtria-card").forEach(s=>s.classList.remove("active")),r.classList.add("active"),bT(n,r.dataset.centre,r.dataset.bat)};r.addEventListener("click",i),r.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&i()})})}function bT(n,e,t){const r=Ze.find(l=>l.id===e),i=r==null?void 0:r.batxillerats.find(l=>l.nom===t);if(!i||!r)return;const s=(i.assignatures||[]).map(l=>`<span class="badge badge--violet">${k(l)}</span>`).join(""),o=n.querySelector("#it-bat-detail");o&&(o.style.display="",o.innerHTML=`
    <div class="sub-detail-card" style="border-color:${r.color}33;">
      <h4 class="font-semibold mb-2" style="color:${r.color};">${k(i.nom)} — ${k(r.nom)}</h4>
      <p class="text-sm text-secondary mb-3">${k(r.descripcio)}</p>
      <div class="flex flex-wrap gap-2">${s}</div>
    </div>`)}function TT(n,e,t){const r=e==="grauSuperior"?"Grau Superior":"Grau Mitjà",i=e==="grauSuperior"?"Cicles de Grau Superior a Olot":"Cicles de Grau Mitjà a Olot";n.innerHTML=`
    <div class="glass-card">
      <h3 class="font-bold mb-5" style="color:var(--t-1);">${k(i)}</h3>
      ${Ze.map(s=>{const o=s.cicles.filter(l=>l.tipus===r);return o.length?`
          <div class="centre-block mb-5">
            <div class="centre-block-header">
              <div class="centre-dot" style="background:${s.color};"></div>
              <h4 class="font-semibold" style="color:${s.color}; font-size:var(--fz-sm);">${k(s.nom)}</h4>
            </div>
            <div class="subtria-grid">
              ${o.map(l=>`
                <div class="subtria-card" data-centre="${s.id}" data-cicle="${k(l.nom)}" tabindex="0"
                     style="--card-color:${s.color};">
                  <span class="subtria-card-title">${k(l.nom)}</span>
                  <span class="subtria-card-meta">${k(l.familia)}</span>
                </div>`).join("")}
            </div>
          </div>`:""}).join("")}
      <div id="it-cicle-detail" style="display:none;"></div>
    </div>`,n.querySelectorAll(".subtria-card").forEach(s=>{const o=()=>{n.querySelectorAll(".subtria-card").forEach(l=>l.classList.remove("active")),s.classList.add("active"),wT(n,s.dataset.centre,s.dataset.cicle)};s.addEventListener("click",o),s.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&o()})})}function wT(n,e,t){const r=Ze.find(o=>o.id===e),i=r==null?void 0:r.cicles.find(o=>o.nom===t);if(!i||!r)return;const s=n.querySelector("#it-cicle-detail");s&&(s.style.display="",s.innerHTML=`
    <div class="sub-detail-card" style="border-color:${r.color}33;">
      <h4 class="font-semibold mb-2" style="color:${r.color};">${k(i.nom)}</h4>
      <div class="flex gap-2 flex-wrap mb-3">
        <span class="badge badge--teal">${k(i.tipus)}</span>
        <span class="badge badge--violet">${k(i.familia)}</span>
        <span class="badge badge--blue">${k(r.nom)}</span>
        ${i.durada?`<span class="badge badge--amber">${k(i.durada)}</span>`:""}
      </div>
      <p class="text-sm text-secondary mb-2">${k(r.descripcio)}</p>
      <p class="text-xs text-muted">${k(r.adreca)} · Inclou FCT (pràctiques en empresa)</p>
      ${i.prova?`<p class="text-xs text-muted mt-1">Pot requerir prova d'accés o curs de preparació</p>`:""}
    </div>`)}function IT(n){var s;const e=n.querySelector("#it-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){e==null||e.focus();return}Uu(n,t,"user");const r=AT(t);zn=r,Vn=null;const i=`Perfil detectat: "${t.slice(0,80)}${t.length>80?"...":""}". Recomanacions: ${r.map(o=>o.nom).join(", ")}.`;Uu(n,`He analitzat el teu perfil. Aquí tens ${r.length} camins adaptats als teus interessos.`,"system"),kf(n,r,i),ee(B.OPCIONS_GENERADES,r),ee(B.OPCIO_SEL,null)}function AT(n){const e=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[.,!?;:'"]/g," "),t=e.split(/\s+/).filter(g=>g.length>2);let r={academic:0,practic:0,creatiu:0,social:0,tec:0,rapid:0,incert:0};const i={academic:["universitat","carrera","medicina","dret","enginyeria","arquitectura","psicologia","farmacia","biologia","ciencies","fisica","quimica","mates","matematiques","estudiar","llibres","llegir","investigar"],practic:["practic","practica","taller","manipular","crear","construir","feina","treballar","ofici","hands","fer","practiques"],creatiu:["art","dibuix","dibujar","disseny","moda","fotografia","animacio","creative","creatiu","creativa","musica","teatre","dansa","pintura","il·lustracio","illustracio","estetic"],social:["ajudar","persones","gent","infants","nens","vells","cures","social","serveis","educacio","mestre","professor","sanitari","infermer","infermeria","psicolog"],tec:["informatica","programar","programacio","ordinador","tecnologia","xarxes","sistemes","dades","software","hardware","robot","electronics","electrica","electro","mecanica"],rapid:["aviat","rapid","ja","inmediata","feina","diner","sou","independencia","economic","autonomia","treballar","no estudiar","no mes estudis"],incert:["no se","no sap","dubt","confus","confosa","perdut","perduda","suport","ajuda","orientacio","no tinc clar","no saber"]};for(const[g,w]of Object.entries(i)){for(const C of w)e.includes(C)&&(r[g]+=2);for(const C of t)w.some(D=>D.includes(C)&&C.length>3)&&(r[g]+=.5)}const s=Object.entries(r).sort((g,w)=>w[1]-g[1]),o=s[0][0],l=s[1][0],c={academic:["batx-univ","batx-gs","gm-gs"],creatiu:["batx-univ","gm-gs","gm-treball"],tec:["batx-gs","gm-gs","batx-univ"],social:["batx-univ","gm-gs","gm-treball"],practic:["gm-treball","gm-gs","pfi-gm"],rapid:["gm-treball","pfi-gm","eso-treballar"],incert:["pfi-gm","gm-treball","gm-gs"]},d=c[o]||c.incert,f={"batx-univ":{academic:"Tens un perfil clarament acadèmic. El Batxillerat és el millor punkt de partida cap a la universitat.",creatiu:"El Batxillerat d'Arts a l'Escola d'Art d'Olot és perfecte per a tu. Combina creativitat amb accés a la universitat per estudiar arts, disseny o arquitectura.",social:"Amb el teu interès per les persones, el Batxillerat (Humanitats o Ciències) et portarà cap a carreres com Psicologia, Educació Social o Infermeria.",tec:"Batxillerat de Ciències i Tecnologia, l'accés natural per a Enginyeria Informàtica o Enginyeria Industrial."},"batx-gs":{tec:"El Batxillerat científic + Grau Superior tècnic és una combinació molt potent i ben valorada al mercat laboral.",academic:"Una bona opció si vols sòlida formació acadèmica i professional sense passar per la universitat completa."},"gm-gs":{practic:"Grau Mitjà primer i Grau Superior després: progressió professional clara, amb molta pràctica i inserció laboral molt bona.",tec:"Cicles tècnics (instal·lació, mecatrònica, informàtica): molt pràctics i amb alta demanda laboral.",creatiu:"Cicles d'arts plàstiques o disseny a l'Escola d'Art d'Olot: il·lustració, disseny gràfic, animació.",social:"Grau Mitjà d'Atenció a Persones o Auxiliar d'Infermeria, i après Grau Superior d'Integració Social o Dietètica."},"gm-treball":{practic:"Cicle de Grau Mitjà + inserció laboral directa. Alta taxa d'ocupació, pràctiques en empresa incloses.",rapid:"La via més ràpida per tenir una qualificació professional reconeguda i trobar feina en 2 anys."},"pfi-gm":{incert:"Comença pel PTT/PFI per clarificar preferències i guanyar confiança. Després podàs saltar a qualsevol Grau Mitjà.",rapid:"El PTT/PFI és un any de transició que facilita l'accés a un Grau Mitjà adaptat als teus interessos."},"eso-treballar":{rapid:"Incorporació directa al mon laboral. Recomanem combinar-ho amb certificats de professionalitat per progressar."}},m=d.slice(0,3).map(g=>{var D,P;const w=Lu.find(j=>j.id===g);if(!w)return null;const C=((D=f[g])==null?void 0:D[o])||((P=f[g])==null?void 0:P[l])||w.explicacio;return{...w,explicacio:C}}).filter(Boolean);return m.length>=2?m:Lu.slice(0,3)}function kf(n,e,t){const r=n.querySelector("#it-opcions-bloc"),i=n.querySelector("#it-opcions-list"),s=n.querySelector("#it-resum-docent");!r||!i||!s||(r.style.display="",i.innerHTML="",e.forEach((o,l)=>{const c=(o.ruta||[]).map(f=>{const m=ri[f];return`<span class="opcio-step">${k((m==null?void 0:m.label)||f)}</span>`}).join(""),d=document.createElement("div");d.className="opcio-card",d.dataset.idx=l,d.style.cssText=`border-color:${o.color}33; --op-color:${o.color};`,d.innerHTML=`
      <div class="opcio-name">
        <span class="opcio-dot" style="background:${o.color};box-shadow:0 0 6px ${o.color}88;"></span>
        <span>${k(o.nom)}</span>
      </div>
      <p class="opcio-why">${k(o.explicacio)}</p>
      <div class="opcio-path">${c}</div>`,d.addEventListener("click",()=>Df(n,l)),i.appendChild(d)}),s.style.display="",s.innerHTML=`<strong>Resum per al docent:</strong>&nbsp;${k(t)}`)}function Df(n,e){Vn=e;const t=zn[e];if(!t)return;n.querySelectorAll(".opcio-card").forEach((i,s)=>{i.classList.toggle("selected",s===e)}),Mf(n,t.ruta,t.color),ee(B.OPCIO_SEL,e);const r=n.querySelector("#it-desar-hint");r&&(r.style.display="none")}function Mf(n,e=[],t){n.querySelectorAll(".diagram-edge").forEach(r=>{r.style.strokeOpacity="",r.style.stroke=""}),n.querySelectorAll(".node-rect").forEach(r=>{r.removeAttribute("filter")});for(let r=0;r<e.length-1;r++){const i=e[r],s=e[r+1];n.querySelector(`.diagram-edge[d*="${i}"]`),n.querySelectorAll(".diagram-edge").forEach(o=>{const l=o.closest(".diagram-edge-group");if(!l)return;const c=l.dataset.edgeId||"",d=i.replace("grauMitja","gm").replace("grauSuperior","gs").replace("batxillerat","bat").replace("selectivitat","sel").replace("universitat","uni").replace("pttPfi","pfi").replace("treballar","trb"),f=s.replace("grauMitja","gm").replace("grauSuperior","gs").replace("batxillerat","bat").replace("selectivitat","sel").replace("universitat","uni").replace("pttPfi","pfi").replace("treballar","trb");c.includes(d)&&c.includes(f)&&(o.style.stroke=t,o.style.strokeOpacity="0.95",o.style.strokeWidth="2.5")}),[i,s].forEach(o=>{const l=n.querySelector(`#nr-${o}`);l&&l.setAttribute("filter","url(#node-glow)")})}}function Uu(n,e,t){const r=n.querySelector("#it-chat-history");if(!r)return;const i=me(B.ORIENTADOR_CHAT,[]);i.push({role:t,text:e,ts:Date.now()}),i.length>40&&i.splice(0,i.length-40),ee(B.ORIENTADOR_CHAT,i);const s=document.createElement("div");s.className=`chat-msg chat-msg--${t}`,s.textContent=e,r.appendChild(s),r.scrollTop=r.scrollHeight}function ST(n){var o,l,c;const e=n.querySelector("#it-desar-hint");if(Vn===null||!zn[Vn]){e&&(e.style.display="");return}const t=(l=(o=n.querySelector("#it-nom-recorregut"))==null?void 0:o.value)==null?void 0:l.trim();if(!t){(c=n.querySelector("#it-nom-recorregut"))==null||c.focus();return}const r=zn[Vn],i=me(B.RECORREGUTS,[]);i.push({id:Ls(),nom:t,base:r.id,nomBase:r.nom,explicacio:r.explicacio,ruta:r.ruta,color:r.color,data:new Date().toLocaleDateString("ca-ES")}),ee(B.RECORREGUTS,i);const s=n.querySelector("#it-btn-desar");if(s){const d=s.innerHTML;s.textContent="Desat correctament",s.disabled=!0,setTimeout(()=>{s.innerHTML=d,s.disabled=!1},2200)}e&&(e.style.display="none")}function CT(n){zn=[],Vn=null;const e=n.querySelector("#it-chat-history"),t=n.querySelector("#it-input"),r=n.querySelector("#it-opcions-bloc"),i=n.querySelector("#it-info-panel"),s=n.querySelector("#it-subtria");e&&(e.innerHTML=""),t&&(t.value=""),r&&(r.style.display="none"),s&&(s.style.display="none",s.innerHTML=""),i&&(i.innerHTML='<p class="text-secondary text-sm">Fes clic a qualsevol node del diagrama per veure informació detallada sobre aquella via.</p>'),n.querySelectorAll(".diagram-edge").forEach(o=>{o.style.stroke="",o.style.strokeOpacity="",o.style.strokeWidth=""}),n.querySelectorAll(".node-rect").forEach(o=>o.removeAttribute("filter")),ee(B.ORIENTADOR_CHAT,[]),ee(B.OPCIONS_GENERADES,[]),ee(B.OPCIO_SEL,null)}function PT(n){const e=me(B.ORIENTADOR_CHAT,[]),t=n.querySelector("#it-chat-history");t&&e.length&&(e.forEach(i=>{const s=document.createElement("div");s.className=`chat-msg chat-msg--${i.role}`,s.textContent=i.text,t.appendChild(s)}),t.scrollTop=t.scrollHeight);const r=me(B.OPCIONS_GENERADES,[]);if(r.length){zn=r;const i=me(B.OPCIO_SEL,null);kf(n,r,""),i!==null&&Df(n,i)}}function RT(n){document.querySelectorAll(".app-section").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".nav-btn").forEach(t=>t.classList.toggle("active",t.dataset.section==="itineraris"));const e=document.querySelector("#section-itineraris");e&&(e.classList.add("active"),setTimeout(()=>Mf(e,n.ruta,n.color),100))}function _r(n){return{map:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',chat:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>'}[n]||""}const xT=[{id:"pol",nom:"Pol",cognom:"García",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"toni",nom:"Toni",cognom:"Martínez",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"maria",nom:"Maria",cognom:"Puig",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"jana",nom:"Jana",cognom:"Oliveras",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"marc",nom:"Marc",cognom:"Codina",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"anna",nom:"Anna",cognom:"Soler",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"carles",nom:"Carles",cognom:"Vilar",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"laia",nom:"Laia",cognom:"Roca",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"jordi",nom:"Jordi",cognom:"Mas",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"nuria",nom:"Núria",cognom:"Borrós",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"guillem",nom:"Guillem",cognom:"Cornella",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"marta",nom:"Marta",cognom:"Castellà",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""}];function rl(n){if(!n)return"sense definir";const e=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.includes("batxillerat")||e.includes("batx")?"batxillerat":e.includes("cicle")||e.includes("grau mitja")||e.includes("grau superior")||e.includes("cfgm")||e.includes("cfgs")||e.includes("gm")||e.includes("gs")?"cicles":e.includes("ptt")||e.includes("pfi")||e.includes("transicio")||e.includes("insercio")?"ptt":e.includes("treballar")||e.includes("treball")||e.includes("feina")?"treballar":"sense definir"}const ba={"batxillerat ciencies i tecnologia":5,"batxillerat humanitats i ciencies socials":5,"batxillerat d'arts":5,"batxillerat arts":5,"ciencies i tecnologia":5,"humanitats i ciencies socials":5,"gestio administrativa":5,"cures auxiliars d'infermeria":6,"transport i logistica":4,"activitats comercials":4,"installacio i manteniment electromecanico":4,"equipaments i installacions domestiques":4,"produccio en industries d'arts grafiques":4.5,"farmacia i parafarmacia":5.5,"atencio a persones en situacio de dependencia":4,"cuina i gastronomia":4.5,fotografia:6,"arts aplicades a la indumentaria":5,"administracio i finances":6,"integracio social":7,"educacio infantil":6.5,"sistemes de telecomunicacio i informatics":6,"prevencio de riscos professionals":5.5,"mecatronica industrial":6,"il·lustracio":7,"il.lustracio":7,illustracio:7,"disseny grafic":7,animacio:7.5,dietetica:6.5,"salut ambiental":6,"direccio de cuina":6,"guia informacio i assistencia turistica":5.5,ptt:4,pfi:4,"programa de transicio al treball":4,"programa de formacio i insercio":4};function kT(n){if(!n)return null;const e=DT(n);if(ba[e]!==void 0)return ba[e];for(const[t,r]of Object.entries(ba))if(e.includes(t)||t.includes(e))return r;return null}function DT(n){return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/['''`]/g,"'").replace(/\s+/g," ").trim()}let Le=[],Dr=null;async function MT(n){const e=_n();Os()?await NT(n,e):OT(n,e)}async function NT(n,e){var i;let t=[];const r=e==null?void 0:e.classeActiva;if(r)try{const s=await Cf(r);t=(s==null?void 0:s.alumnes)||[]}catch{}if(t.length){const s=me(B.STUDENTS,[]);Le=t.map(o=>s.find(c=>c.id===o.uid||c.nom===o.nom)||{id:o.uid||o.nom,nom:o.nom,cognom:"",email:o.email||"",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""})}else{const s=me(B.STUDENTS,null);Le=s&&s.length?s:xT.map(o=>({...o}))}ee(B.STUDENTS,Le),Dr=me(B.STUDENT_ACTIVE,((i=Le[0])==null?void 0:i.id)||null),n.innerHTML=VT(r),Nf(n),Vf(n),Dr&&Ya(n,Dr)}function VT(n){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        Alumnat
      </h1>
      <p class="section-subtitle">${n?"Alumnes inscrits a la teva classe activa.":"No tens cap classe activa. Ves a Classes per crear-ne una."}</p>
    </div>
    <div class="noms-layout">
      <aside>
        <div class="glass-card mb-4 card-accent-top">
          <h2 class="font-semibold text-xs text-muted mb-3" style="text-transform:uppercase;letter-spacing:.06em;">Alumnes</h2>
          <div class="student-list" id="noms-list" role="list"></div>
        </div>
        <div class="glass-card" id="noms-stats">
          <h2 class="font-semibold text-xs text-muted mb-4" style="text-transform:uppercase;letter-spacing:.06em;">Distribució de la classe</h2>
          <div class="stats-grid" id="stats-grid"></div>
        </div>
      </aside>
      <div>
        <div class="glass-card card-accent-top" id="noms-ficha">
          <p class="text-secondary text-sm">Selecciona un alumne o alumna per veure o editar la seva fitxa.</p>
        </div>
      </div>
    </div>`}function OT(n,e){var s,o,l;if(!e){n.innerHTML='<p class="text-muted text-sm">Sessió no iniciada.</p>';return}const t=e.nom||((s=fe())==null?void 0:s.displayName)||"Alumne",r=me(B.STUDENTS,[]);let i=r.find(c=>{var d;return c.id===((d=fe())==null?void 0:d.uid)});i||(i={id:((o=fe())==null?void 0:o.uid)||t,nom:t,cognom:"",email:((l=fe())==null?void 0:l.email)||"",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},r.push(i),ee(B.STUDENTS,r)),n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </span>
        La meva fitxa
      </h1>
      <p class="section-subtitle">Les teves dades personals d'orientació. Guardades localment al teu dispositiu.</p>
    </div>
    <div class="glass-card card-accent-top" id="noms-ficha"></div>`,il(n,i,!0)}function Nf(n){const e=n.querySelector("#noms-list");e&&(e.innerHTML=Le.length?Le.map(t=>{const r=rl(t.itinerariPreferit),i=Of(r);return`
          <div class="student-item ${t.id===Dr?"active":""}"
               data-id="${t.id}" role="listitem" tabindex="0">
            <div class="student-avatar" style="background:${i};">${k(xf(t.nom,t.cognom))}</div>
            <div>
              <div class="student-name">${k(t.nom)} ${k(t.cognom)}</div>
              <div class="student-tag">${Lf(r)}</div>
            </div>
          </div>`}).join(""):'<p class="text-xs text-muted">Encara no hi ha alumnes inscrits. Comparteix el codi de la classe.</p>',e.querySelectorAll(".student-item").forEach(t=>{t.addEventListener("click",()=>Ya(n,t.dataset.id)),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&Ya(n,t.dataset.id)})}))}function Ya(n,e){Dr=e,ee(B.STUDENT_ACTIVE,e);const t=Le.find(r=>r.id===e);t&&(n.querySelectorAll(".student-item").forEach(r=>r.classList.toggle("active",r.dataset.id===e)),il(n,t,!1))}function il(n,e,t=!1){var c,d;const r=n.querySelector("#noms-ficha");if(!r)return;const i=kT(e.cicleModalitat||e.itinerariPreferit),s=i!==null?`<div class="nota-hint nota-hint--found">Nota de tall detectada: <strong>${i.toFixed(1)}</strong></div>`:e.cicleModalitat?`<div class="nota-hint nota-hint--notfound">No s'ha trobat nota de tall orientativa per a aquesta opció.</div>`:"",o=rl(e.itinerariPreferit),l=Of(o);r.innerHTML=`
    <div class="flex items-center gap-4 mb-6">
      <div class="student-avatar" style="width:52px;height:52px;font-size:1.1rem;border-radius:var(--r2);background:${l};">
        ${k(xf(e.nom,e.cognom))}
      </div>
      <div>
        <h2 class="font-bold" style="font-size:var(--fz-xl);">${k(e.nom)} ${k(e.cognom)}</h2>
        <span class="badge badge--violet" style="margin-top:4px;display:inline-block;">${Lf(o)}</span>
      </div>
    </div>
    <div class="student-edit-grid mb-6">
      <div class="form-group">
        <label class="form-label" for="noms-itinerari">Itinerari preferit</label>
        <input class="form-input" id="noms-itinerari" type="text"
          value="${k(e.itinerariPreferit)}"
          placeholder="Batxillerat Ciències, Grau Mitjà Cuina…" ${t&&Os(),""} />
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-cicle">Cicle / Modalitat concreta</label>
        <input class="form-input" id="noms-cicle" type="text"
          value="${k(e.cicleModalitat)}"
          placeholder="Gestió Administrativa, Il·lustració…" />
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-nota">Nota de tall orientativa</label>
        <input class="form-input" id="noms-nota" type="text"
          value="${k(e.notaTall)}"
          placeholder="p. ex. 6.5" />
        ${s}
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-obs">Observacions</label>
        <input class="form-input" id="noms-obs" type="text"
          value="${k(e.observacions)}"
          placeholder="Notes privades…" />
      </div>
    </div>
    <div class="flex gap-3 mb-6">
      <button class="btn btn--primary" id="noms-btn-desar">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Desa canvis
      </button>
    </div>
    <div class="divider"></div>
    <div class="mt-4">
      <h3 class="font-semibold mb-2" style="font-size:var(--fz-sm);color:var(--t-1);">Orientació ràpida</h3>
      <p class="text-xs text-muted mb-3">Descripció del perfil → orientació argumentada (sense IA externa).</p>
      <div class="form-group mb-3">
        <textarea class="form-textarea" id="noms-ai-input" rows="2"
          placeholder="Ex: Li agrada molt la sanitat, és molt empàtic, vol treballar amb persones…"></textarea>
      </div>
      <button class="btn btn--secondary btn--sm mb-4" id="noms-btn-orientar">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Genera orientació
      </button>
      <div id="noms-ai-result" class="resum-docent" style="display:none;"></div>
    </div>`,(c=r.querySelector("#noms-btn-desar"))==null||c.addEventListener("click",()=>{var m,g,w,C,D,P,j,F;e.itinerariPreferit=((g=(m=r.querySelector("#noms-itinerari"))==null?void 0:m.value)==null?void 0:g.trim())||"",e.cicleModalitat=((C=(w=r.querySelector("#noms-cicle"))==null?void 0:w.value)==null?void 0:C.trim())||"",e.notaTall=((P=(D=r.querySelector("#noms-nota"))==null?void 0:D.value)==null?void 0:P.trim())||"",e.observacions=((F=(j=r.querySelector("#noms-obs"))==null?void 0:j.value)==null?void 0:F.trim())||"";const f=Le.findIndex($=>$.id===e.id);f!==-1?Le[f]=e:Le.push(e),ee(B.STUDENTS,Le),t||(Nf(n),Vf(n)),il(n,e,t)}),(d=r.querySelector("#noms-btn-orientar"))==null||d.addEventListener("click",()=>{var g,w;const f=((w=(g=r.querySelector("#noms-ai-input"))==null?void 0:g.value)==null?void 0:w.trim())||"",m=r.querySelector("#noms-ai-result");!f||!m||(m.style.display="",m.innerHTML=`<strong>Orientació:</strong> ${k(LT(f))}`)})}function Vf(n){const e=n.querySelector("#stats-grid");if(!e)return;const t={batxillerat:0,cicles:0,ptt:0,treballar:0,"sense definir":0};Le.forEach(s=>{const o=rl(s.itinerariPreferit);t[o]=(t[o]||0)+1});const r={batxillerat:"#7c68e8",cicles:"#1ea882",ptt:"#e09d2a",treballar:"#c4507e","sense definir":"#4a5280"},i={batxillerat:"Batxillerat",cicles:"Cicles FP",ptt:"PTT/PFI",treballar:"Treballar","sense definir":"Sense definir"};e.innerHTML=Object.entries(t).map(([s,o])=>`
    <div class="metric-item">
      <span class="metric-value" style="color:${r[s]};">${o}</span>
      <div class="metric-label">${i[s]||s}</div>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${Le.length?(o/Le.length*100).toFixed(0):0}%;background:${r[s]};"></div></div>
    </div>`).join("")}function LT(n){const e=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=new Set;return dT.forEach(r=>{r.paraules.some(i=>e.includes(i))&&r.perfils.forEach(i=>t.add(i))}),t.has("universitat")||t.has("ciencies")||t.has("academic")?"El perfil descrit s'orienta cap al Batxillerat i la Universitat. Caldria potenciar les assignatures de ciències si el projecte és una carrera científica o sanitària.":t.has("arts")?"El perfil creatiu és dominant. El Batxillerat d'Arts a l'Escola d'Art d'Olot o un Cicle de Grau Mitjà/Superior en Disseny, Il·lustració o Animació encaixen molt bé.":t.has("practic")||t.has("hands-on")?"Un Cicle Formatiu de Grau Mitjà és una excel·lent opció: formació pràctica de qualitat, pràctiques en empresa (FCT) i alta inserció laboral. Pot continuar cap al Grau Superior si ho decideix.":t.has("suport")||t.has("reorientacio")?"Considereu un PTT/PFI com a any de transició, o un Grau Mitjà en un àmbit que desperte interès. L'acompanyament tutorial és fonamental en aquest perfil.":"Per a concretar l'orientació caldria una entrevista individual. Es recomana explorar conjuntament la via acadèmica (Batxillerat) i la professional (Cicles Formatius), per detectar motivacions i expectatives."}function Of(n){return{batxillerat:"#7c68e8",cicles:"#1ea882",ptt:"#e09d2a",treballar:"#c4507e","sense definir":"#4e5878"}[n]||"#4a7fd4"}function Lf(n=""){return n.charAt(0).toUpperCase()+n.slice(1)}const Rn=[{emoji:"🎯",text:"Si poguessis aprendre qualsevol cosa durant un any sense preocupar-te per la feina ni els diners, ¿Que faries?"},{emoji:"💼",text:"Descriu la teva feina ideal en 3 paraules."},{emoji:"🌍",text:"Si poguessis treballar en qualsevol lloc del món, ¿On aniràs i per que?"},{emoji:"🤔",text:"¿Quina és la decisió més difícil que has pres fins ara?"},{emoji:"⭐",text:"¿En quina cosa ets bo o bona que et costa explicar a les persones?"},{emoji:"🚀",text:"¿Quina professió et faria llevar amb ganes cada dia?"},{emoji:"📚",text:"Si haguessis d'ensenyar alguna cosa als altres, ¿Que ensenyaries?"},{emoji:"💰",text:"¿Faries una feina que t'encanta però que paga poc, o una que et resulta indiferent però paga bé?"},{emoji:"🎨",text:"¿Prefereixes treballar sol o en equip? ¿Per que?"},{emoji:"🔬",text:"¿Quin invent o descoberta voldries que existís però no existeix?"},{emoji:"🏆",text:"¿Quin és el teu major assoliment fins ara, estudiant o personal?"},{emoji:"🌱",text:"¿Cóm t'imagines als 25 anys? ¿Que estàs fent?"},{emoji:"💡",text:"¿Quina és la millor idea que has tingut i mai has pogut portar a la pràctica?"},{emoji:"🤝",text:"¿Prefereixes un treball on ajudes persones directament o un treball on crees coses?"},{emoji:"🎭",text:"¿Quines assignatures t'agraden i per que? ¿Les que s'assemblen a la teva vida ideal?"},{emoji:"🏗️",text:"Si montessis la teva pròpia empresa, ¿De que tractaria?"},{emoji:"📱",text:"¿La tecnologia és part central de la teva vida ideal o és una eina que fas servir quan cal?"},{emoji:"🌅",text:"¿Prefereixes rutina i certesa, o canvi i aventura en la teva futura feina?"}],FT=[{emoji:"🗺️",titol:"El diagrama del meu futur",descripcio:"Cada alumne/a dibuixa el seu camí possible després de l'ESO en un full i el comparteix amb la classe. El docent recull les tendències al mapa col·lectiu."},{emoji:"🎲",titol:"Roda de perfils",descripcio:"El docent mostra perfils ficticis d'alumnat i la classe decideix quin itinerari els recomanaria. Estimula la reflexió sense pressió personal."},{emoji:"💬",titol:"Mur de preguntes",descripcio:"Cada alumne/a escriu en un post-it la seva pregunta sobre el futur. Les preguntes s'agrupen per temes i es responen en grup o amb professionals invitats."},{emoji:"⚡",titol:"Debat ràpid: Estudis vs. Treball",descripcio:"Dos equips defensen posicions oposades durant 10 minuts. Fomenta argumentació i empatia amb punts de vista diferents."},{emoji:"🎤",titol:"1 minut per convèncer",descripcio:"Cada alumne/a té 1 minut per convèncer la resta que el seu itinerari escollit és el millor. Dinàmica ràpida i divertida."},{emoji:"🔍",titol:"Detectiu de professions",descripcio:"Donades 5 pistes sobre una professió (sou, estudis, tasques, sortides), l'alumnat ha d'endevinar de quina professió es tracta."},{emoji:"🎯",titol:"Semàfor d'opcions",descripcio:"Cada alumne/a valora cada opció (batxillerat, FP, treballar) amb un color: verd=interessant, groc=dubtes, vermell=no per mi. Es fa una posada en comú visual."},{emoji:"📊",titol:"Enquesta de classe en temps real",descripcio:"El docent llança preguntes sobre preferències i es fa un recompte en directe per veure la distribució d'interessos del grup."}];let Nt=null,We=[],ft=0;function $T(n){We=me(B.PISSARRA_ITEMS,[]),ft=me(B.PISSARRA_PREGUNTA,0),Nt=Rn[ft]||Rn[0],n.innerHTML=qT(),Za(n),cs(n),UT(n),jT(n)}function qT(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </span>
        Pissarra de dinàmiques
      </h1>
      <p class="section-subtitle">Eina interactiva per dinamitzar sessions d'orientació a l'aula</p>
    </div>

    <div class="pissarra-layout">
      <div>
        <!-- Pregunta -->
        <div class="glass-card question-card card-accent-top mb-6">
          <span class="question-icon" id="pissarra-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--violet-l)">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </span>
          <p class="question-text" id="pissarra-pregunta-text">Carregant pregunta…</p>
          <div class="flex gap-3 justify-center mb-6">
            <button class="btn btn--ghost btn--sm" id="pissarra-btn-nova">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>
              Següent pregunta
            </button>
            <button class="btn btn--ghost btn--sm" id="pissarra-btn-aleatoria">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Aleatòria
            </button>
          </div>
          <div class="form-group" style="max-width:460px;margin:0 auto;">
            <label class="form-label" for="pissarra-resposta">La teva resposta</label>
            <textarea class="form-textarea" id="pissarra-resposta" rows="3"
              placeholder="Escriu la teva resposta aquí…"></textarea>
          </div>
          <div class="flex gap-3 justify-center mt-4">
            <button class="btn btn--primary" id="pissarra-btn-desar">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Penja a la pissarra
            </button>
          </div>
        </div>

        <!-- Pissarra items -->
        <div class="glass-card">
          <div class="flex justify-between items-center mb-4">
            <h2 class="font-semibold text-sm" style="color:var(--t-1);">
              Pissarra — <span id="pissarra-count">0</span> entrades
            </h2>
            <button class="btn btn--danger btn--sm" id="pissarra-btn-buidar">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
              Buidar
            </button>
          </div>
          <div class="pissarra-items" id="pissarra-items" role="list"></div>
        </div>
      </div>

      <!-- Sidebar: Idees de dinàmica -->
      <aside>
        <div class="glass-card card-accent-top">
          <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm); color:var(--t-1);">Idees de dinàmica d'aula</h2>
          <div class="ideas-grid" id="pissarra-idees"></div>
        </div>
      </aside>
    </div>
  `}function Za(n){const e=n.querySelector("#pissarra-pregunta-text");e&&Nt&&(e.textContent=Nt.text)}function cs(n){const e=n.querySelector("#pissarra-items"),t=n.querySelector("#pissarra-count");if(e){if(t&&(t.textContent=We.length),!We.length){e.innerHTML='<p class="text-muted text-xs" style="padding:var(--s4);">La pissarra és buida. Afegiu respostes per veure-les aquí.</p>';return}e.innerHTML=We.map(r=>`
    <div class="pissarra-item" data-id="${r.id}" role="listitem">
      <div class="pissarra-item-text">
        <span class="text-xs text-muted" style="display:block;margin-bottom:3px;">${k(r.pregunta.slice(0,60))}…</span>
        ${k(r.resposta)}
      </div>
      <button class="btn btn--icon btn--sm" data-delete="${r.id}" title="Eliminar" aria-label="Eliminar resposta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`).join(""),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",()=>{We=We.filter(i=>i.id!==r.dataset.delete),ee(B.PISSARRA_ITEMS,We),cs(n)})})}}const ju=['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>'];function UT(n){const e=n.querySelector("#pissarra-idees");e&&(e.innerHTML=FT.map((t,r)=>`
    <div class="idea-item">
      <div class="idea-icon" style="color:var(--violet-l);">${ju[r%ju.length]}</div>
      <div>
        <div class="idea-title">${k(t.titol)}</div>
        <div class="idea-desc">${k(t.descripcio)}</div>
      </div>
    </div>`).join(""))}function jT(n){var e,t,r,i;(e=n.querySelector("#pissarra-btn-nova"))==null||e.addEventListener("click",()=>{ft=(ft+1)%Rn.length,Nt=Rn[ft],ee(B.PISSARRA_PREGUNTA,ft),Za(n);const s=n.querySelector("#pissarra-icon");s&&(s.style.animation="none",s.offsetHeight,s.style.animation="")}),(t=n.querySelector("#pissarra-btn-aleatoria"))==null||t.addEventListener("click",()=>{ft=Math.floor(Math.random()*Rn.length),Nt=Rn[ft],ee(B.PISSARRA_PREGUNTA,ft),Za(n)}),(r=n.querySelector("#pissarra-btn-desar"))==null||r.addEventListener("click",()=>{var l;const s=n.querySelector("#pissarra-resposta"),o=(l=s==null?void 0:s.value)==null?void 0:l.trim();if(!o){s==null||s.focus();return}We.push({id:Ls(),pregunta:(Nt==null?void 0:Nt.text)||"",resposta:o,ts:Date.now()}),ee(B.PISSARRA_ITEMS,We),s.value="",cs(n)}),(i=n.querySelector("#pissarra-btn-buidar"))==null||i.addEventListener("click",()=>{confirm("Estàs segur/a? S'eliminaran totes les entrades de la pissarra.")&&(We=[],ee(B.PISSARRA_ITEMS,We),cs(n))})}function BT(n){n.innerHTML=zT(),Ff(n)}function zT(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </span>
        Recorreguts guardats
      </h1>
      <p class="section-subtitle">Recorreguts personalitzats desats des de la secció Itineraris</p>
    </div>
    <div id="recorreguts-grid" class="recorreguts-grid"></div>`}function Ff(n){const e=n.querySelector("#recorreguts-grid");if(!e)return;const t=me(B.RECORREGUTS,[]);if(!t.length){e.innerHTML=`
      <div class="glass-card card-accent-top" style="grid-column:1/-1;text-align:center;padding:var(--s12);">
        <div style="width:56px;height:56px;margin:0 auto var(--s4);border-radius:var(--r2);background:var(--bg-card);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="var(--t-3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
        </div>
        <h3 class="font-semibold mb-2" style="color:var(--t-1);">Cap recorregut desat</h3>
        <p class="text-muted text-sm">Genera opcions a la secció <strong style="color:var(--t-2);">Itineraris</strong>, selecciona-ne una i anomena-la per desar-la aquí.</p>
      </div>`;return}e.innerHTML=t.map(r=>{const i=(r.ruta||[]).map(s=>{const o=ri[s];return`<span class="recorregut-step">${k((o==null?void 0:o.label)||s)}</span>`}).join("");return`
      <div class="glass-card recorregut-card" style="border-top:2px solid ${k(r.color||"var(--blue)")};padding-top:calc(var(--s6) + 2px);">
        <div>
          <div class="recorregut-name">${k(r.nom)}</div>
          <div class="text-xs text-muted mb-2">${k(r.data||"")} · ${k(r.nomBase||"")}</div>
        </div>
        <p class="recorregut-why">${k(r.explicacio||"")}</p>
        <div class="recorregut-path">${i}</div>
        <div class="recorregut-actions">
          <button class="btn btn--primary btn--sm" data-veure="${r.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Veure al diagrama
          </button>
          <button class="btn btn--danger btn--sm" data-delete="${r.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
            Eliminar
          </button>
        </div>
      </div>`}).join(""),e.querySelectorAll("[data-veure]").forEach(r=>{r.addEventListener("click",()=>{const i=me(B.RECORREGUTS,[]).find(s=>s.id===r.dataset.veure);i&&RT(i)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",()=>{if(!confirm("Vols eliminar aquest recorregut?"))return;const i=me(B.RECORREGUTS,[]).filter(s=>s.id!==r.dataset.delete);ee(B.RECORREGUTS,i),Ff(n)})})}let Ne=null,qe={};function HT(n){n.innerHTML=WT(),us(n,me(B.MAPA_TIPUS,"batxillerat")),YT(n)}function GT(n){if(!n)return;Ne?setTimeout(()=>Ne.invalidateSize(),200):KT(n);const e=me(B.MAPA_TIPUS,"batxillerat"),t=n.querySelector("#mapa-tipus");t&&(t.value=e,us(n,e));const r=n.querySelector("#mapa-opcio"),i=me(B.MAPA_OPCIO,"");r&&i&&(r.value=i);const s=me(B.MAPA_CENTRE,null);s&&tr(n,s)}function WT(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </span>
        Mapa de centres
      </h1>
      <p class="section-subtitle">Localitza i compara els centres educatius d'Olot sobre el mapa</p>
    </div>

    <div class="mapa-layout">
      <aside>
        <div class="glass-card mb-4 card-accent-top">
          <h2 class="font-semibold text-sm mb-4" style="color:var(--t-1);">Cerca per estudi</h2>
          <div class="form-group mb-3">
            <label class="form-label" for="mapa-tipus">Tipus d'estudi</label>
            <select class="form-select" id="mapa-tipus">
              <option value="batxillerat">Batxillerat</option>
              <option value="cicles">Cicles Formatius</option>
            </select>
          </div>
          <div class="form-group mb-4">
            <label class="form-label" for="mapa-opcio">Opció concreta</label>
            <select class="form-select" id="mapa-opcio">
              <option value="">— Totes les opcions —</option>
            </select>
          </div>
          <div class="flex gap-2">
            <button class="btn btn--primary flex-1" id="mapa-btn-cercar">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Cerca
            </button>
            <button class="btn btn--ghost btn--sm btn--icon" id="mapa-btn-reset" title="Reinicia" aria-label="Reinicia cerca">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>
            </button>
          </div>
          <div id="mapa-resum" class="text-xs text-muted mt-3" style="display:none;"></div>
        </div>

        <div class="glass-card mb-4">
          <h2 class="font-semibold text-sm mb-3" style="color:var(--t-1);">Centres</h2>
          <div class="ranking-list" id="mapa-ranking">
            <p class="text-muted text-xs">Fes una cerca per veure el ranking de centres.</p>
          </div>
        </div>

        <div class="glass-card" id="mapa-centre-info" style="display:none;">
          <h2 class="font-semibold text-sm mb-3" style="color:var(--t-1);">Informació del centre</h2>
          <div id="mapa-centre-detail"></div>
        </div>
      </aside>

      <div>
        <div id="leaflet-map"></div>
        <p class="text-xs text-muted mt-2 text-center" style="opacity:0.7;">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-2px;margin-right:2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Avís: Les ubicacions en aquest mapa són aproximades i poden no ser completament exactes.
        </p>
      </div>
    </div>`}function KT(n){if(!window.L){console.warn("[mapa] Leaflet no disponible");return}const e=n.querySelector("#leaflet-map");e&&(Ne=L.map(e,{zoomControl:!0,scrollWheelZoom:!0}),Ne.setView([42.182,2.487],15),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',maxZoom:19}).addTo(Ne),Ze.forEach(t=>{const r=sl(t,!1);qe[t.id]=r,r.addTo(Ne),r.bindTooltip(`<strong>${t.nom}</strong>`,{permanent:!1,direction:"top"}),r.on("click",()=>{ee(B.MAPA_CENTRE,t.id),tr(n,t.id),ii(t.id,n)})}),setTimeout(()=>Ne.invalidateSize(),350))}function sl(n,e){const t=e?18:13;return L.marker(n.coordenades,{icon:L.divIcon({className:"",html:`<div style="width:${t}px;height:${t}px;background:${n.color};border:2.5px solid rgba(255,255,255,.85);border-radius:50%;box-shadow:0 2px 10px rgba(0,0,0,.55),0 0 0 ${e?5:0}px ${n.color}44;transition:all .2s;"></div>`,iconSize:[t,t],iconAnchor:[t/2,t/2]}),title:n.nom})}function ii(n,e){Ze.forEach(t=>{qe[t.id]&&(qe[t.id].remove(),qe[t.id]=sl(t,t.id===n),qe[t.id].addTo(Ne),qe[t.id].bindTooltip(`<strong>${t.nom}</strong>`,{permanent:!1,direction:"top"}),qe[t.id].on("click",()=>{ee(B.MAPA_CENTRE,t.id),tr(e,t.id),ii(t.id,e)}))})}function us(n,e){const t=n.querySelector("#mapa-opcio");if(!t)return;t.innerHTML='<option value="">— Totes les opcions —</option>';const r=new Set;Ze.forEach(i=>{const s=e==="batxillerat"?i.batxillerats:i.cicles;s==null||s.forEach(o=>{if(!r.has(o.nom)){r.add(o.nom);const l=document.createElement("option");l.value=l.textContent=o.nom,t.appendChild(l)}})})}function QT(n){var s,o,l;const e=((s=n.querySelector("#mapa-tipus"))==null?void 0:s.value)||"batxillerat",t=((o=n.querySelector("#mapa-opcio"))==null?void 0:o.value)||"";ee(B.MAPA_TIPUS,e),ee(B.MAPA_OPCIO,t);const r=Ze.map(c=>({centre:c,punts:JT(c,e,t)})).sort((c,d)=>d.punts-c.punts);XT(n,r);const i=n.querySelector("#mapa-resum");if(i&&(i.style.display="",i.textContent=t?`"${t}" (${e}) — ${r.filter(c=>c.punts>0).length} centres rellevants`:`Mostrant tots els centres de ${e==="batxillerat"?"Batxillerat":"Cicles Formatius"}`),((l=r[0])==null?void 0:l.punts)>0&&Ne){const c=r[0].centre;Ne.setView(c.coordenades,16,{animate:!0}),ii(c.id,n),ee(B.MAPA_CENTRE,c.id),tr(n,c.id)}}function JT(n,e,t){const r=e==="batxillerat"?n.batxillerats:n.cicles;return t?r!=null&&r.some(i=>i.nom===t)?100:r!=null&&r.some(i=>{const s=t.toLowerCase(),o=i.nom.toLowerCase();return s.split(" ").some(l=>l.length>3&&o.includes(l))})?45:r!=null&&r.length?8:0:r!=null&&r.length?50:0}function XT(n,e){const t=n.querySelector("#mapa-ranking");t&&(t.innerHTML=e.map((r,i)=>`
    <div class="ranking-item" data-centre="${r.centre.id}" role="button" tabindex="0">
      <div class="ranking-pos">${i+1}</div>
      <div style="flex:1;min-width:0;">
        <div class="text-xs truncate" style="color:${r.centre.color}; font-weight:600;">${k(r.centre.nom)}</div>
        <div class="ranking-bar" style="margin-top:4px;"><div class="ranking-bar-fill" style="width:${r.punts}%;background:${r.centre.color};"></div></div>
      </div>
      <div class="ranking-score">${r.punts}</div>
    </div>`).join(""),t.querySelectorAll(".ranking-item").forEach(r=>{const i=()=>{const s=Ze.find(o=>o.id===r.dataset.centre);s&&(ee(B.MAPA_CENTRE,s.id),tr(n,s.id),ii(s.id,n),Ne&&Ne.setView(s.coordenades,16,{animate:!0}))};r.addEventListener("click",i),r.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&i()})}))}function tr(n,e){var l,c;const t=Ze.find(d=>d.id===e);if(!t)return;const r=n.querySelector("#mapa-centre-info"),i=n.querySelector("#mapa-centre-detail");if(!r||!i)return;r.style.display="";const s=((l=t.batxillerats)==null?void 0:l.map(d=>`<li class="text-xs text-muted" style="margin-bottom:2px;">· ${k(d.nom)}</li>`).join(""))||"",o=((c=t.cicles)==null?void 0:c.map(d=>`<li class="text-xs text-muted" style="margin-bottom:2px;">· ${k(d.nom)} <span style="color:var(--t-3);">(${k(d.tipus)})</span></li>`).join(""))||"";i.innerHTML=`
    <div style="border-left:3px solid ${t.color};padding-left:var(--s3);margin-bottom:var(--s4);">
      <div class="font-semibold" style="color:${t.color}; font-size:var(--fz-sm);">${k(t.nom)}</div>
      <div class="text-xs text-muted">${k(t.adreca)}</div>
    </div>
    <p class="text-xs text-secondary mb-4" style="line-height:1.6;">${k(t.descripcio)}</p>
    ${s?`<div class="mb-3"><div class="text-xs font-semibold mb-1" style="color:var(--t-2);">Batxillerat</div><ul>${s}</ul></div>`:""}
    ${o?`<div><div class="text-xs font-semibold mb-1" style="color:var(--t-2);">Cicles Formatius</div><ul>${o}</ul></div>`:""}
    ${t.web?`<div class="mt-4"><a href="${k(t.web)}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--sm" style="font-size:var(--fz-2xs);"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Web del centre</a></div>`:""}`}function YT(n){var e,t,r;(e=n.querySelector("#mapa-tipus"))==null||e.addEventListener("change",i=>us(n,i.target.value)),(t=n.querySelector("#mapa-btn-cercar"))==null||t.addEventListener("click",()=>QT(n)),(r=n.querySelector("#mapa-btn-reset"))==null||r.addEventListener("click",()=>{const i=n.querySelector("#mapa-tipus");i&&(i.value="batxillerat",us(n,"batxillerat"));const s=n.querySelector("#mapa-opcio");s&&(s.value="");const o=n.querySelector("#mapa-resum");o&&(o.style.display="none");const l=n.querySelector("#mapa-ranking");l&&(l.innerHTML='<p class="text-muted text-xs">Fes una cerca per veure el ranking de centres.</p>');const c=n.querySelector("#mapa-centre-info");c&&(c.style.display="none"),Ne&&(Ne.setView([42.182,2.487],15,{animate:!0}),Ze.forEach(d=>{qe[d.id]&&(qe[d.id].remove(),qe[d.id]=sl(d,!1),qe[d.id].addTo(Ne),qe[d.id].bindTooltip(`<strong>${d.nom}</strong>`,{permanent:!1,direction:"top"}),qe[d.id].on("click",()=>{ee(B.MAPA_CENTRE,d.id),tr(document.querySelector("#section-mapa"),d.id),ii(d.id,document.querySelector("#section-mapa"))}))}))})}const Ui={batxillerat:{nom:"Batxillerat",durada:"2 anys (+ Selectivitat si s'opta per la universitat)",estil:"Acadèmic i teòric. Matèries curriculars en grups-classe",continuitat:"Selectivitat (PAU) → Universitat | Grau Superior (accés directe)",salari:"Depèn completament de la titulació universitària posterior",perfil:"Bon rendiment acadèmic, motivació per estudiar a la universitat, curiositat intel·lectual",avantatges:"Accés directe a totes les titulacions universitàries; molt valorat en entorns acadèmics",inconvenients:"Menys pràctic i orientat a l'ofici; 2 anys fins a selectivitat; sense inserció laboral directa"},"grau-mitja":{nom:"Cicle de Grau Mitjà (FP)",durada:"2.000 hores ~2 anys, inclou FCT (pràctiques en empresa)",estil:"Professional i pràctic. Aprenentatge basat en competències reals d'ofici",continuitat:"Inserció laboral | Grau Superior de la mateixa família (sin prova)",salari:"18.000 – 24.000 €/any de sortida (variable per sector)",perfil:"Preferència pel treball manual i pràctic; vol treballar aviat; interès per un ofici concret",avantatges:"Alta taxa d'inserció laboral; pràctiques en empresa incloses; accessible des de l'ESO",inconvenients:"Accés a universitat requereix proves addicionals; menys reconeixement social en alguns sectors"},"grau-superior":{nom:"Cicle de Grau Superior (FP)",durada:"2.000 hores ~2 anys, inclou FCT (pràctiques en empresa)",estil:"Professional avançat: combina teoria especialitzada i pràctica intensiva",continuitat:"Càrrecs de responsabilitat | Universitat amb convalidació parcial de crèdits",salari:"22.000 – 35.000 €/any de sortida (molt variable per família professional)",perfil:"Vol qualificació professional alta; perfil tècnic; bon rendiment o experiència laboral prèvia",avantatges:"Alta demanda al mercat; convalidació universitària; formació molt específica i reconeguda",inconvenients:"Requereix Batxillerat o Grau Mitjà de la mateixa família; selecció pot ser competitiva"},"ptt-pfi":{nom:"PTT / PFI (Transició al Treball)",durada:"1 any escolar, orientació professional inclosa",estil:"Orientació, iniciació professional, adaptació al món laboral",continuitat:"Grau Mitjà (mateixa família) | Treballs amb perfil bàsic",salari:"16.000 – 18.000 €/any (sense qualificació FP completa)",perfil:"Alumnat que necessita un any addicional de maduresa i orientació professional",avantatges:"Ritme adaptat; acompanyament personalitzat; molt bon orientació per triar Grau Mitjà",inconvenients:"No és una titulació FP homologada; posicions laborals molt limitades fins a assolir el GM"},treballar:{nom:"Incorporació directa al món laboral",durada:"Immediata (no requereix formació addicional)",estil:"Aprenentatge al lloc de treball; formació contínua informal",continuitat:"Certificats de professionalitat; FP per a majors de 18 anys; progressió interna",salari:"16.000 – 20.000 €/any (sense qualificació específica)",perfil:"Necessitat econòmica immediata; motivació laboral molt clara i decidida",avantatges:"Ingressos immediats; experiència real des del primer dia; autonomia",inconvenients:"Sense titulació formal; progressió professional limitada; accés restringit a certs sectors"}};function ZT(n){n.innerHTML=e0(),t0(n)}function e0(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
        </span>
        Comparador de camins
      </h1>
      <p class="section-subtitle">Compara dues opcions acadèmiques o professionals cara a cara</p>
    </div>

    <div class="glass-card mb-6">
      <div class="flex gap-4 items-end flex-wrap">
        <div class="form-group" style="flex:1;min-width:180px;">
          <label class="form-label" for="comp-a">Opció A</label>
          <select class="form-select" id="comp-a">${Object.entries(Ui).map(([e,t])=>`<option value="${e}">${k(t.nom)}</option>`).join("")}</select>
        </div>
        <div style="font-size:var(--fz-xl);padding-bottom:.2rem;font-weight:var(--fw-7);color:var(--t-3);">vs</div>
        <div class="form-group" style="flex:1;min-width:180px;">
          <label class="form-label" for="comp-b">Opció B</label>
          <select class="form-select" id="comp-b"></select>
        </div>
        <button class="btn btn--primary" id="comp-btn-comparar">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
          Comparar
        </button>
      </div>
    </div>

    <div id="comp-resultat" style="display:none;">
      <div class="comparador-grid">
        <div class="glass-card compare-card compare-card--a" id="comp-card-a"></div>
        <div class="glass-card compare-card compare-card--b" id="comp-card-b"></div>
      </div>
    </div>`}function t0(n){var i;const e=n.querySelector("#comp-a"),t=n.querySelector("#comp-b");function r(){const s=e==null?void 0:e.value;t.innerHTML=Object.entries(Ui).filter(([o])=>o!==s).map(([o,l])=>`<option value="${o}">${k(l.nom)}</option>`).join("")}r(),e==null||e.addEventListener("change",r),(i=n.querySelector("#comp-btn-comparar"))==null||i.addEventListener("click",()=>{const s=e==null?void 0:e.value,o=t==null?void 0:t.value;if(!s||!o)return;const l=n.querySelector("#comp-resultat");l&&(l.style.display=""),Bu(n.querySelector("#comp-card-a"),Ui[s],"#5b8ef0"),Bu(n.querySelector("#comp-card-b"),Ui[o],"#e8619a")})}function Bu(n,e,t){if(!n||!e)return;const r=[["Durada",e.durada],["Estil d'aprenentatge",e.estil],["Continuïtat possible",e.continuitat],["Salari orientatiu",e.salari],["Perfil recomanat",e.perfil],["Avantatges",e.avantatges],["Inconvenients",e.inconvenients]];n.innerHTML=`
    <div class="compare-header" style="color:${t};">${k(e.nom)}</div>
    ${r.map(([i,s])=>`
      <div class="compare-row">
        <div class="compare-key">${k(i)}</div>
        <div class="compare-val">${k(s)}</div>
      </div>`).join("")}`}const eo=[{id:"pratic",label:"M'agrada el treball pràctic i manual",min:0,max:10,step:1,def:5},{id:"creatiu",label:"Tinc un perfil creatiu (art, disseny…)",min:0,max:10,step:1,def:5},{id:"tec",label:"M'interessa la tecnologia i la informàtica",min:0,max:10,step:1,def:5},{id:"social",label:"M'agrada treballar amb persones i ajudar",min:0,max:10,step:1,def:5},{id:"continuar",label:"Vull continuar estudiant durant molts anys",min:0,max:10,step:1,def:5}];function n0(n){n.innerHTML=r0(),i0(n)}function r0(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
        </span>
        Simulador de decisió
      </h1>
      <p class="section-subtitle">Ajusta els controls per obtenir una recomanació personalitzada basada en el teu perfil</p>
    </div>
    <div class="simulador-layout">
      <div class="glass-card card-accent-top mb-6">
        <h2 class="font-semibold mb-6" style="color:var(--t-1); font-size:var(--fz-sm);">Defineix el teu perfil:</h2>
        ${eo.map(e=>`
    <div class="slider-group">
      <div class="slider-header">
        <label class="slider-label" for="sim-${e.id}">${k(e.label)}</label>
        <span class="slider-value" id="sim-val-${e.id}">${e.def}</span>
      </div>
      <input type="range" id="sim-${e.id}"
        min="${e.min}" max="${e.max}" step="${e.step}" value="${e.def}"
        aria-label="${k(e.label)}" />
    </div>`).join("")}
        <div class="flex justify-center mt-8">
          <button class="btn btn--primary btn--lg" id="sim-btn-calcular">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Calcula la meva opció
          </button>
        </div>
      </div>
      <div id="sim-resultat" style="display:none;">
        <div class="glass-card result-card card-accent-top" id="sim-result-card"></div>
      </div>
    </div>`}function i0(n){var e;eo.forEach(t=>{const r=n.querySelector(`#sim-${t.id}`),i=n.querySelector(`#sim-val-${t.id}`);!r||!i||(Ou(r),r.addEventListener("input",()=>{i.textContent=r.value,Ou(r)}))}),(e=n.querySelector("#sim-btn-calcular"))==null||e.addEventListener("click",()=>{const t={};eo.forEach(r=>{var i;t[r.id]=parseInt(((i=n.querySelector(`#sim-${r.id}`))==null?void 0:i.value)||r.def,10)}),s0(n,t)})}function s0(n,e){const t=n.querySelector("#sim-resultat"),r=n.querySelector("#sim-result-card");if(!t||!r)return;t.style.display="";const i=o0(e);r.innerHTML=`
    <div class="result-icon" style="color:${i.color};" aria-hidden="true">${i.icon}</div>
    <div class="result-title">${k(i.nom)}</div>
    <p class="result-reason">${k(i.motiu)}</p>
    <div class="mt-6 flex flex-wrap gap-2" style="justify-content:center;">
      ${i.tags.map(s=>`<span class="badge badge--blue">${k(s)}</span>`).join("")}
    </div>`,t.scrollIntoView({behavior:"smooth",block:"nearest"})}const a0={batxillerat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',grauSuperior:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',grauMitja:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>',arts:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>',pttPfi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};function o0(n){const{pratic:e,creatiu:t,tec:r,social:i,continuar:s}=n,o={batxillerat:s*1.6+(10-e)*.5+r*.3+i*.2,grauSuperior:e*.7+r*1.2+s*.6+i*.5,grauMitja:e*1.6+(10-s)*.9+r*.4,arts:t*2+(10-s)*.25+e*.3,pttPfi:(10-s)*.7+e*.8+(10-r)*.2+(10-t)*.1},l=Object.entries(o).sort((d,f)=>f[1]-d[1])[0][0];return{...{batxillerat:{nom:"Batxillerat",color:"var(--violet-l)",motiu:"Tens un perfil acadèmic marcat i vols continuar estudiant. El Batxillerat és el millor punt de partida, especialment si t'interessen Ciències, Humanitats o Arts. T'obrirà les portes de la Universitat i del Grau Superior.",tags:["Batxillerat","Universitat","Selectivitat (PAU)"]},grauSuperior:{nom:"Grau Superior de FP",color:"var(--blue-l)",motiu:"Barreges bé la visió tècnica amb el component pràctic. Un Grau Superior t'ofereix formació professional d'alt nivell, pràctiques reals en empresa i la possibilitat d'accedir a la universitat amb convalidació de crèdits.",tags:["Grau Superior","FP","Alta qualificació"]},grauMitja:{nom:"Grau Mitjà de FP",color:"var(--teal)",motiu:"Prefereixes aprendre fent coses reals. Un Grau Mitjà és l'opció ideal: formació pràctica d'alta qualitat, pràctiques en empresa incloses i molt bona inserció laboral. Sempre podràs continuar cap al Grau Superior si vols avançar.",tags:["Grau Mitjà","FP","Pràctiques FCT"]},arts:{nom:"Cicles d'Arts i Disseny",color:"var(--rose)",motiu:"El teu perfil creatiu és clarament dominant. Considera el Batxillerat d'Arts a l'Escola d'Art d'Olot o un Grau Mitjà / Superior en Il·lustració, Disseny Gràfic, Animació o Fotografia. Entorns molt estimulants per a perfils artístics.",tags:["Escola d'Art d'Olot","Disseny Gràfic","Il·lustració","Animació"]},pttPfi:{nom:"PTT / PFI — Transició al Treball",color:"var(--amber)",motiu:"Un any de transició pot ser el millor inici. El PTT/PFI t'acompanya en la definició del teu camí, guanya confiança i orientació professional real. Després podràs accedir a qualsevol Grau Mitjà amb molt millor base.",tags:["PTT","PFI","Orientació","Inserció laboral"]}}[l],icon:a0[l]}}const l0=["Mirar les jornades de portes obertes dels centres","Parlar amb la família sobre les opcions","Visitar l'Institut Bosc de la Coma","Visitar l'Institut La Garrotxa","Visitar l'Escola d'Art d'Olot","Visitar l'Institut Montsacopa","Decidir entre Batxillerat i Cicles Formatius","Consultar les notes de tall orientatives","Fer la preinscripció al centre escollit","Parlar amb l'orientador/a del centre actual","Investigar sortides professionals de l'opció escollida","Preguntar a antics alumnes sobre la seva experiència"];let $e=[];function c0(n){$e=me(B.PLANNER_ITEMS,[]),n.innerHTML=u0(),jr(n),d0(n),h0(n)}function u0(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </span>
        Planner d'orientació
      </h1>
      <p class="section-subtitle">Organitza els passos del procés d'orientació en una línia temporal personal</p>
    </div>

    <div class="planner-layout">
      <div class="glass-card card-accent-top mb-6">
        <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm); color:var(--t-1);">Afegir un nou pas</h2>
        <div class="planner-add">
          <div class="form-group flex-1">
            <input class="form-input" id="planner-input" type="text"
              placeholder="Descriu el pas… ex: Visitar el centre, parlar amb orientadora…" />
          </div>
          <button class="btn btn--primary" id="planner-btn-afegir">Afegir</button>
        </div>
        <div>
          <p class="form-label mb-2">O afegeix un pas suggerit:</p>
          <div class="chip-group" id="planner-chips"></div>
        </div>
      </div>

      <div class="glass-card">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold text-sm" style="color:var(--t-1);">
            El teu pla — <span id="planner-count">0</span> passos
          </h2>
          <button class="btn btn--danger btn--sm" id="planner-btn-buidar">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Buidar
          </button>
        </div>
        <div class="planner-timeline" id="planner-timeline"></div>
      </div>
    </div>`}function jr(n){const e=n.querySelector("#planner-timeline"),t=n.querySelector("#planner-count");if(e){if(t&&(t.textContent=$e.length),!$e.length){e.innerHTML=`<p class="text-muted text-sm" style="padding:var(--s4) var(--s8);">Cap pas afegit encara. Comença definint el primer pas del teu pla d'orientació.</p>`;return}e.innerHTML=$e.map(r=>`
    <div class="planner-item ${r.completat?"planner-completed":""}" data-id="${r.id}">
      <div class="planner-dot"></div>
      <div class="planner-content">
        <div class="flex justify-between items-start gap-3">
          <div class="flex-1">
            <div class="planner-text">${k(r.text)}</div>
            <div class="planner-date">${k(r.data)}</div>
          </div>
          <div class="flex gap-2" style="flex-shrink:0;">
            <button class="btn btn--icon btn--sm" data-toggle="${r.id}"
              title="${r.completat?"Marca com a pendent":"Marca com a completat"}"
              aria-label="${r.completat?"Descompletar":"Completar"}">
              ${r.completat?'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>':'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'}
            </button>
            <button class="btn btn--icon btn--sm btn--danger" data-delete="${r.id}"
              title="Eliminar" aria-label="Eliminar pas">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>`).join(""),e.querySelectorAll("[data-toggle]").forEach(r=>{r.addEventListener("click",()=>{const i=$e.find(s=>s.id===r.dataset.toggle);i&&(i.completat=!i.completat,ee(B.PLANNER_ITEMS,$e),jr(n))})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",()=>{$e=$e.filter(i=>i.id!==r.dataset.delete),ee(B.PLANNER_ITEMS,$e),jr(n)})})}}function d0(n){const e=n.querySelector("#planner-chips");e&&(e.innerHTML=l0.map(t=>`<button class="chip" data-pas="${k(t)}">${k(t)}</button>`).join(""),e.querySelectorAll(".chip").forEach(t=>{t.addEventListener("click",()=>to(n,t.dataset.pas))}))}function to(n,e){e!=null&&e.trim()&&($e.push({id:Ls(),text:e.trim(),data:oT(),completat:!1}),ee(B.PLANNER_ITEMS,$e),jr(n))}function h0(n){var t,r;const e=n.querySelector("#planner-input");(t=n.querySelector("#planner-btn-afegir"))==null||t.addEventListener("click",()=>{var s;const i=(s=e==null?void 0:e.value)==null?void 0:s.trim();i&&(to(n,i),e.value="")}),e==null||e.addEventListener("keydown",i=>{var s;if(i.key==="Enter"){const o=(s=e.value)==null?void 0:s.trim();o&&(to(n,o),e.value="")}}),(r=n.querySelector("#planner-btn-buidar"))==null||r.addEventListener("click",()=>{confirm("Estàs segur/a? S'eliminaran tots els passos del planner.")&&($e=[],ee(B.PLANNER_ITEMS,$e),jr(n))})}async function f0(n){n.innerHTML='<div class="loading-state">Carregant classes…</div>';const e=_n();if(e)if(Os()){const t=await Pf(fe().uid);p0(n,t)}else{const t=await zb(e.classesUnides||[]);m0(n,t,e)}}function p0(n,e){var r;const t=e.map(i=>zu(i)).join("");n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </span>
        Les meves classes
      </h1>
      <p class="section-subtitle">Crea i gestiona les teves classes. Cada classe té un codi d'invitació únic.</p>
    </div>

    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="color:var(--t-1);font-size:var(--fz-sm);">Crear nova classe</h2>
      <div class="flex gap-3 items-end">
        <div class="form-group flex-1">
          <label class="form-label" for="classe-nom">Nom de la classe</label>
          <input class="form-input" id="classe-nom" type="text" placeholder="Ex: 4t ESO B — Orientació 2025" />
        </div>
        <button class="btn btn--primary" id="btn-crear-classe">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Crear classe
        </button>
      </div>
      <p id="classe-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <div class="classes-grid" id="classes-grid">
      ${t||`<div class="text-muted text-sm" style="padding:var(--s4);">Encara no has creat cap classe. Crea la primera per obtenir el codi d'invitació.</div>`}
    </div>`,(r=n.querySelector("#btn-crear-classe"))==null||r.addEventListener("click",async()=>{var s,o;const i=(o=(s=n.querySelector("#classe-nom"))==null?void 0:s.value)==null?void 0:o.trim();if(!i){Gu(n,"Escriu un nom per a la classe.");return}try{n.querySelector("#btn-crear-classe").disabled=!0;const l=_n().nom||fe().displayName||fe().email||"Docent",c=await Ub(fe().uid,l,i),d=n.querySelector("#classes-grid");if(d){const f=document.createElement("div");f.innerHTML=zu(c),d.prepend(f.firstElementChild)}n.querySelector("#classe-nom").value="",n.querySelector("#classe-error").style.display="none"}catch(l){Gu(n,`Error: ${l.message}`)}finally{n.querySelector("#btn-crear-classe").disabled=!1}})}function zu(n){return`
    <div class="glass-card classe-card card-accent-top" data-id="${n.id}">
      <div class="classe-card-header">
        <div>
          <div class="classe-card-name">${k(n.nom)}</div>
          <div class="text-xs text-muted">${(n.alumnes||[]).length} alumnes inscrits</div>
        </div>
        <div class="codi-badge" title="Codi d'invitació per als alumnes">
          <span class="codi-label">Codi</span>
          <span class="codi-val">${k(n.codi)}</span>
        </div>
      </div>
      <div class="alumnes-mini-list">
        ${(n.alumnes||[]).length===0?`<p class="text-xs text-muted">Encara no hi ha alumnes. Comparteix el codi per a que s'uneixin.</p>`:(n.alumnes||[]).map(e=>`
              <div class="alumne-mini-item">
                <div class="alumne-mini-avatar" style="background:${v0(e.nom)}">${g0(e.nom)}</div>
                <span class="text-xs">${k(e.nom)}</span>
              </div>`).join("")}
      </div>
    </div>`}function m0(n,e,t){var i;const r=t.classeActiva;n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </span>
        La meva classe
      </h1>
      <p class="section-subtitle">Uneix-te a una classe amb el codi que et faciliti el teu docent.</p>
    </div>

    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="color:var(--t-1);font-size:var(--fz-sm);">Unir-se a una classe</h2>
      <div class="flex gap-3 items-end">
        <div class="form-group flex-1">
          <label class="form-label" for="codi-input">Codi de la classe (6 caràcters)</label>
          <input class="form-input" id="codi-input" type="text" maxlength="6"
            style="text-transform:uppercase;letter-spacing:.18em;font-weight:700;font-size:1.1rem;"
            placeholder="EX: AB3K7X" />
        </div>
        <button class="btn btn--primary" id="btn-unirse">Unir-me</button>
      </div>
      <p id="codi-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <div id="classes-alumne" class="classes-grid">
      ${e.map(s=>Hu(s,r)).join("")||`<div class="text-muted text-sm" style="padding:var(--s4);">Encara no pertanys a cap classe. Entra el codi que t'ha facilitat el teu docent.</div>`}
    </div>`,(i=n.querySelector("#btn-unirse"))==null||i.addEventListener("click",async()=>{var l,c,d,f;const s=(c=(l=n.querySelector("#codi-input"))==null?void 0:l.value)==null?void 0:c.trim().toUpperCase(),o=n.querySelector("#codi-error");if(!s||s.length<6){Ta(o,"El codi ha de tenir 6 caràcters.");return}try{n.querySelector("#btn-unirse").disabled=!0;const m=await jb(s);if(!m){Ta(o,"No s'ha trobat cap classe amb aquest codi. Comprova que sigui correcte.");return}const g=_n().nom||fe().displayName||((d=fe().email)==null?void 0:d.split("@")[0])||"Alumne/a",w=fe().email||"Sense correu",C={uid:fe().uid,nom:g,email:w};(f=m.alumnes)!=null&&f.some(P=>P.uid===C.uid)||await Bb(m.id,C),await er(fe().uid,{classeActiva:m.id});const D=n.querySelector("#classes-alumne");if(D){const P=document.createElement("div");P.innerHTML=Hu(m,m.id),D.prepend(P.firstElementChild)}n.querySelector("#codi-input").value="",o&&(o.style.display="none")}catch(m){Ta(o,`Error: ${m.message}`)}finally{n.querySelector("#btn-unirse").disabled=!1}})}function Hu(n,e){const t=n.id===e;return`
    <div class="glass-card classe-card ${t?"classe-activa":""}" data-id="${n.id}">
      <div class="classe-card-header">
        <div>
          <div class="classe-card-name">${k(n.nom)}</div>
          <div class="text-xs text-muted">Docent: ${k(n.professorNom)} · ${(n.alumnes||[]).length} alumnes</div>
        </div>
        ${t?'<span class="badge badge--green">Activa</span>':""}
      </div>
    </div>`}function Gu(n,e){const t=n.querySelector("#classe-error");t&&(t.textContent=e,t.style.display="")}function Ta(n,e){n&&(n.textContent=e,n.style.display="")}function g0(n=""){return n.split(" ").slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function v0(n=""){const e=["#4a7fd4","#7c68e8","#1ea882","#c4507e","#e09d2a","#3b9ec4"];let t=0;for(const r of n)t=(t*31+r.charCodeAt(0))%e.length;return e[Math.abs(t)%e.length]}async function y0(n){n.innerHTML='<div class="loading-state">Carregant tasques…</div>';const e=_n();if(!e){n.innerHTML='<p class="text-muted text-sm">Inicia sessió primer.</p>';return}if(Os()){const t=await Pf(fe().uid);if(!t.length){Wu(n,"professor");return}const r=t.some(i=>i.id===e.classeActiva)?e.classeActiva:t[0].id;await _0(n,t,r)}else{const t=e.classeActiva;if(!t){Wu(n,"alumne");return}await qf(n,t)}}function Wu(n,e){n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </span>
        Tasques
      </h1>
    </div>
    <div class="glass-card" style="text-align:center;padding:var(--s12);">
      <p class="text-secondary">Has de pertànyer a una classe per veure les tasques.</p>
      <p class="text-muted text-sm mt-4">Ves a la secció <strong>Classes</strong> per ${e==="professor"?"crear una classe":"unir-te a una classe"}.</p>
    </div>`}async function _0(n,e,t){var m;let r=t;n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </span>
        Publicar tasques
      </h1>
      <p class="section-subtitle">Dissenya activitats (text, documents, quiz) per aules específiques.</p>
    </div>

    <!-- Selector de classe -->
    <div class="glass-card mb-5 flex items-center gap-3">
      <label class="form-label mb-0" style="white-space:nowrap;">Classe activa:</label>
      <select class="form-input w-full" id="t-classe-sel">
        ${e.map(g=>`<option value="${g.id}" ${g.id===r?"selected":""}>${k(g.nom)}</option>`).join("")}
      </select>
    </div>

    <!-- Crear tasca -->
    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm);color:var(--t-1);">📝 Crear nova tasca</h2>
      
      <div class="form-group mb-3">
        <label class="form-label" for="t-titol">Títol de la tasca</label>
        <input class="form-input" id="t-titol" type="text" placeholder="Ex: Investigació sobre GM de Sanitat…" />
      </div>

      <div class="student-edit-grid mb-3">
        <div class="form-group">
          <label class="form-label" for="t-limit">Data límit (opcional)</label>
          <input class="form-input" id="t-limit" type="date" />
        </div>
        <div class="form-group">
          <label class="form-label" for="t-tipus">Format que han de lliurar els alumnes</label>
          <select class="form-input" id="t-tipus">
            <option value="text">Document de Text (Lliure)</option>
            <option value="fitxer">Pujar un Fitxer (Imatge, PDF, etc)</option>
            <option value="quiz">Qüestionari tipus test (Quiz)</option>
          </select>
        </div>
      </div>

      <div class="form-group mb-4">
        <label class="form-label" for="t-desc">Descripció i material adjunt</label>
        <textarea class="form-textarea" id="t-desc" rows="4"
          placeholder="Escriu les instruccions detallades. Pots afegir-hi enllaços a vídeos o articles aquí."></textarea>
      </div>

      <!-- Zona dinàmica (per quiz principalment) -->
      <div id="t-zona-dinamica" style="display:none; margin-bottom:var(--s4); padding:var(--s4); border-radius:var(--r2); background:rgba(255,255,255,0.03); border:1px solid var(--border);">
        <h3 class="font-semibold text-sm mb-3">Preguntes del test</h3>
        <div id="quiz-preguntes-llista" class="flex flex-col gap-3"></div>
        <button class="btn btn--secondary btn--sm mt-3" id="btn-add-pregunta">+ Afegir pregunta</button>
      </div>

      <button class="btn btn--primary" id="btn-publicar-tasca">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Publicar tasca
      </button>
      <p id="t-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <!-- Llista de tasques -->
    <div id="tasques-llista" class="tasques-grid"></div>`;let i=[];const s=n.querySelector("#t-classe-sel");s&&s.addEventListener("change",async g=>{r=g.target.value,await f(r)});const o=n.querySelector("#t-tipus"),l=n.querySelector("#t-zona-dinamica");o&&o.addEventListener("change",g=>{l.style.display=g.target.value==="quiz"?"block":"none"});const c=n.querySelector("#btn-add-pregunta"),d=n.querySelector("#quiz-preguntes-llista");c&&c.addEventListener("click",()=>{const g=Ls();i.push({id:g,titol:"",opcions:["","",""],correcte:0}),$f(d,i)});const f=async g=>{const w=n.querySelector("#tasques-llista");w.innerHTML='<div class="loading-state">...</div>';const C=await Rf(g);E0(w,C)};await f(r),(m=n.querySelector("#btn-publicar-tasca"))==null||m.addEventListener("click",async()=>{var j,F,$,Y,re;const g=(F=(j=n.querySelector("#t-titol"))==null?void 0:j.value)==null?void 0:F.trim(),w=(Y=($=n.querySelector("#t-desc"))==null?void 0:$.value)==null?void 0:Y.trim(),C=(re=n.querySelector("#t-limit"))==null?void 0:re.value,D=o==null?void 0:o.value,P=n.querySelector("#t-error");if(!g||!w){P&&(P.textContent="El títol i la descripció són obligatoris.",P.style.display="");return}if(D==="quiz"){if(!i.length){P&&(P.textContent="Afegeix al menys una pregunta al test.",P.style.display="");return}for(const W of i)if(!W.titol.trim()){P&&(P.textContent="Totes les preguntes han de tenir un enunciat.",P.style.display="");return}}try{n.querySelector("#btn-publicar-tasca").disabled=!0,await Hb({classeId:r,titol:g,desc:w,tipus:D,limit:C||null,quiz:D==="quiz"?i:null,professorId:fe().uid}),n.querySelector("#t-titol").value="",n.querySelector("#t-desc").value="",n.querySelector("#t-limit").value="",o&&(o.value="text"),l.style.display="none",P&&(P.style.display="none"),i=[],d&&(d.innerHTML=""),await f(r)}catch(W){P&&(P.textContent=`Error: ${W.message}`,P.style.display="")}finally{n.querySelector("#btn-publicar-tasca").disabled=!1}})}function $f(n,e){n.innerHTML=e.map((t,r)=>`
    <div class="glass-card card-accent-top p-3" style="--card-color:var(--violet);">
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-bold text-violet-l">Pregunta ${r+1}</span>
        <button class="btn btn--danger btn--sm" data-rem-q="${t.id}" style="padding:4px 8px;">Esborrar</button>
      </div>
      <input type="text" class="form-input text-sm mb-2" data-q-tit="${t.id}" value="${k(t.titol)}" placeholder="Enunciat de la pregunta" />
      <div class="flex flex-col gap-1">
        ${t.opcions.map((i,s)=>`
          <div class="flex items-center gap-2">
            <input type="radio" name="corr-${t.id}" value="${s}" ${t.correcte===s?"checked":""} title="Marcar com a resposta correcta">
            <input type="text" class="form-input text-xs flex-1" data-q-opt="${t.id}-${s}" value="${k(i)}" placeholder="Opció ${s+1}" />
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""),e.forEach(t=>{var r,i;(r=n.querySelector(`[data-q-tit="${t.id}"]`))==null||r.addEventListener("input",s=>t.titol=s.target.value),t.opcions.forEach((s,o)=>{var l;(l=n.querySelector(`[data-q-opt="${t.id}-${o}"]`))==null||l.addEventListener("input",c=>{t.opcions[o]=c.target.value})}),n.querySelectorAll(`input[name="corr-${t.id}"]`).forEach(s=>{s.addEventListener("change",o=>t.correcte=parseInt(o.target.value))}),(i=n.querySelector(`[data-rem-q="${t.id}"]`))==null||i.addEventListener("click",()=>{e.splice(e.findIndex(s=>s.id===t.id),1),$f(n,e)})})}async function E0(n,e){var t;if(n){if(!e.length){n.innerHTML='<p class="text-muted text-sm">Aquesta classe no té cap tasca publicada.</p>';return}n.innerHTML="";for(const r of e){const i=await Kb(r.id),s=i.filter(d=>d.nota!==null&&d.nota!==void 0);i.filter(d=>d.nota===null||d.nota===void 0);const o=s.length?(s.reduce((d,f)=>d+f.nota,0)/s.length).toFixed(1):null,l=r.tipus==="quiz"?"Test (Quiz)":r.tipus==="fitxer"?"Entrega de fitxer":"Text lliure",c=document.createElement("div");c.className="glass-card tasca-card card-accent-top",c.innerHTML=`
      <div class="tasca-card-header">
        <div>
          <div class="tasca-card-titol flex gap-2 items-center">
            ${k(r.titol)}
            <span class="badge badge--violet" style="font-size:0.6rem;">${l}</span>
          </div>
          ${r.limit?`<div class="text-xs text-muted mt-1">Data límit: ${k(r.limit)}</div>`:""}
        </div>
        <div class="flex gap-2 items-center">
          ${o!==null?`<span class="badge badge--green">Mitja: ${o}</span>`:""}
          <span class="badge badge--blue">${i.length} lliur.</span>
          <button class="btn btn--danger btn--sm" data-delete="${r.id}" title="Eliminar tasca">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
          </button>
        </div>
      </div>
      <p class="text-sm text-secondary mb-3">${k(r.desc)}</p>

      <!-- Lliuraments -->
      <div class="lliuraments-zona">
        ${i.length?i.map(d=>{let f="";return r.tipus==="quiz"&&d.respostesQuiz?f=`<div class="p-3 bg-black/20 rounded border border-border mt-2">
                  <p class="text-xs font-semibold text-blue-l mb-2">Respostes (${d.respostesQuiz.filter(g=>g.correcte).length} encerts de ${d.respostesQuiz.length}):</p>
                  <ul class="text-xs text-secondary list-disc ml-4">
                    ${d.respostesQuiz.map(g=>`<li>
                      ${k(g.preg)}<br>
                      <span style="color:${g.correcte?"var(--green-l)":"var(--rose-l)"}">
                        ↪ ${k(g.resp)} ${g.correcte?"(Correcte)":"(Incorrecte)"}
                      </span>
                    </li>`).join("")}
                  </ul>
                </div>`:r.tipus==="fitxer"&&d.adjunt?f=`<div class="mt-2"><img src="${d.adjunt}" class="lliurament-img" alt="Fitxer alumne" /></div>`:r.tipus==="text"&&d.textData&&(f=`<div class="mt-2 text-sm text-secondary bg-black/20 p-3 rounded border border-border" style="white-space:pre-wrap;">${k(d.textData)}</div>`),`
                <div class="lliurament-item" id="ll-${d.id}">
                  <div class="lliurament-header">
                    <span class="font-semibold text-sm">${k(d.alumneNom)}</span>
                    ${d.nota!==null&&d.nota!==void 0?`<span class="badge badge--${d.nota>=5?"green":"rose"}">${d.nota} / 10</span>`:'<span class="badge badge--amber">Sense qualificar</span>'}
                  </div>
                  ${f}
                  <div class="nota-zona flex flex-wrap gap-2 items-center mt-3 pt-3 border-t border-border">
                    <input type="number" min="0" max="10" step="0.5"
                      class="form-input" style="width:70px;padding:6px 10px;"
                      value="${d.nota??""}" placeholder="Nota" data-id="${d.id}" />
                    <input type="text" class="form-input" style="flex:1;min-width:140px;padding:6px 10px;"
                      value="${k(d.comentariProf||"")}" placeholder="Comentari docent…" data-com="${d.id}" />
                    <button class="btn btn--primary btn--sm" data-qualificar="${d.id}">Qualificar</button>
                  </div>
                </div>`}).join(""):'<p class="text-muted text-xs">Cap alumne ha lliurat aquesta tasca encara.</p>'}
      </div>`,(t=c.querySelector(`[data-delete="${r.id}"]`))==null||t.addEventListener("click",async()=>{confirm("Vols eliminar aquesta tasca i tots els seus lliuraments? Aquesta acció és irreversible.")&&(await Gb(r.id),c.remove())}),c.querySelectorAll("[data-qualificar]").forEach(d=>{d.addEventListener("click",async()=>{var D;const f=d.dataset.qualificar,m=c.querySelector(`[data-id="${f}"]`),g=c.querySelector(`[data-com="${f}"]`),w=parseFloat(m==null?void 0:m.value);if(isNaN(w)||w<0||w>10){alert("La nota ha de ser numèrica entre 0 i 10.");return}await Jb(f,w,((D=g==null?void 0:g.value)==null?void 0:D.trim())||""),d.textContent="Fet!",d.disabled=!0,setTimeout(()=>{d.textContent="Qualificar",d.disabled=!1},2e3);const C=c.querySelector(`#ll-${f} .lliurament-header span:last-child`);C&&(C.className=`badge badge--${w>=5?"green":"rose"}`,C.textContent=`${w} / 10`)})}),n.appendChild(c)}}}async function qf(n,e){const t=fe().uid,r=await Rf(e),i=await Qb(t),s=i.map(c=>c.nota).filter(c=>c!=null),o=s.length?(s.reduce((c,d)=>c+d,0)/s.length).toFixed(1):null;n.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </span>
        Les meves tasques
      </h1>
      <p class="section-subtitle">${s.length?`${s.length} tasques qualificades · Nota mitjana global: <strong>${o} / 10</strong>`:"Resol i lliura el que et demana el docent."}</p>
    </div>

    ${o!==null?`
    <div class="glass-card card-accent-top mb-6 text-center">
      <div style="font-size:3rem;font-weight:800;background:var(--grad-h);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${o}</div>
      <p class="text-secondary text-sm">Nota mitja actual de classe</p>
    </div>`:""}

    <div class="tasques-grid" id="tasques-alumne"></div>`;const l=n.querySelector("#tasques-alumne");if(!r.length){l.innerHTML='<p class="text-muted text-sm glass-card">Sense tasques publicades.</p>';return}r.forEach(c=>{var g;const d=i.find(w=>w.tasqueId===c.id),f=`
      <div class="tasca-card-titol flex items-center gap-2">
        ${k(c.titol)}
        <span class="badge badge--violet" style="font-size:0.6rem;">${c.tipus==="quiz"?"Test":c.tipus==="fitxer"?"Fitxer":"Document"}</span>
      </div>`,m=document.createElement("div");m.className="glass-card tasca-card card-accent-top",m.innerHTML=`
      <div class="tasca-card-header">
        <div>
          ${f}
          ${c.limit?`<div class="text-xs text-muted mt-1">Data límit: ${k(c.limit)}</div>`:""}
        </div>
        ${(d==null?void 0:d.nota)!==null&&(d==null?void 0:d.nota)!==void 0?`<span class="badge badge--${d.nota>=5?"green":"rose"}">${d.nota} / 10</span>`:d?'<span class="badge badge--amber">Lliurat, pendent nota</span>':'<span class="badge badge--violet">Per lliurar</span>'}
      </div>
      <div class="text-sm text-secondary mb-4 p-3 bg-black/10 rounded border border-border" style="white-space:pre-wrap;">${k(c.desc)}</div>
      
      ${d!=null&&d.comentariProf?`<div class="comentari-prof"><strong>Feedback Docent:</strong><br>${k(d.comentariProf)}</div>`:""}

      ${d?`
        <div class="lliurat-ok flex gap-3 items-center border border-green/20 bg-green/5 p-3 rounded">
          <svg width="20" height="20" stroke="var(--green-l)" fill="none" viewBox="0 0 24 24"><path stroke-width="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline stroke-width="2" points="22 4 12 14.01 9 11.01"/></svg>
          <span class="text-sm font-semibold text-green-l">Tasca lliurada correctament.</span>
        </div>
      `:b0(c)}
    `,d||(g=m.querySelector(`[data-lliurar="${c.id}"]`))==null||g.addEventListener("click",async()=>{var D,P,j,F,$,Y;const w=m.querySelector(`[data-lliurar="${c.id}"]`),C=m.querySelector(`.arr-${c.id}`);C.style.display="none";try{let re={tasqueId:c.id,classeId:e,alumneId:t,alumneNom:_n().nom||((D=fe().email)==null?void 0:D.split("@")[0])||"Alumne/a"};if(c.tipus==="text"){const W=(j=(P=m.querySelector(`#val-${c.id}`))==null?void 0:P.value)==null?void 0:j.trim();if(!W)throw new Error("Escriu la teva resposta.");re.textData=W}else if(c.tipus==="fitxer"){const W=($=(F=m.querySelector(`#val-${c.id}`))==null?void 0:F.files)==null?void 0:$[0];if(!W)throw new Error("Adjunta un fitxer.");if(W.size>2*1024*1024)throw new Error("Fitxer massa gran (màx 2MB).");re.adjunt=await T0(W)}else if(c.tipus==="quiz"){const W=[];let b=!1;if((c.quiz||[]).forEach(v=>{const y=m.querySelector(`input[name="ans-${v.id}"]:checked`);if(!y)b=!0;else{const E=parseInt(y.value);W.push({preg:v.titol,resp:v.opcions[E],correcte:v.correcte===E})}}),b||W.length<(((Y=c.quiz)==null?void 0:Y.length)||0))throw new Error("Respon totes les preguntes.");re.respostesQuiz=W}w.disabled=!0,w.textContent="Enviant...",await Wb(re),await qf(n,e)}catch(re){C.textContent=re.message,C.style.display="",w.disabled=!1,w.textContent="Enviar lliurament"}}),l.appendChild(m)})}function b0(n){let e="";return n.tipus==="text"?e=`
      <div class="form-group mb-3">
        <label class="form-label text-xs">Això és un document de text. Escriu aquí la teva entrega:</label>
        <textarea class="form-textarea" rows="4" id="val-${n.id}" placeholder="Escriu i desenvolupa la tasca..."></textarea>
      </div>`:n.tipus==="fitxer"?e=`
      <div class="form-group mb-3">
        <label class="form-label text-xs">Afegeix una captura de pantalla, foto o PDF (Màx 2MB):</label>
        <input type="file" class="form-input" id="val-${n.id}" accept="image/*,application/pdf" style="padding:8px;" />
      </div>`:n.tipus==="quiz"&&(e=`<div class="mb-4">${(n.quiz||[]).map((r,i)=>`
      <div class="mb-4">
        <span class="block text-sm font-semibold mb-2">${i+1}. ${k(r.titol)}</span>
        ${r.opcions.map((s,o)=>s.trim()?`
          <label class="flex items-center gap-2 mb-1 px-3 py-2 border border-border rounded bg-black/10 cursor-pointer hover:bg-black/20 text-sm">
            <input type="radio" name="ans-${r.id}" value="${o}">
            ${k(s)}
          </label>
        `:"").join("")}
      </div>
    `).join("")}</div>`),`
    <div class="lliurament-form pt-4 border-t border-border mt-2">
      ${e}
      <button class="btn btn--primary" data-lliurar="${n.id}">Enviar lliurament</button>
      <p class="arr-${n.id} text-xs text-rose-l mt-2" style="display:none;"></p>
    </div>
  `}function T0(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=t,r.readAsDataURL(n)})}const no={eso:{id:"eso",nom:"ESO",nivell:0,desc:"Educació Secundària Obligatòria (12–16 anys). La base de tota la formació posterior.",seguits:["batxillerat","grauMitja","pttPfi","treballar"]},batxillerat:{id:"batxillerat",nom:"Batxillerat",nivell:1,desc:"2 anys. Via acadèmica que dona accés a la Selectivitat (PAU) i a la Universitat. Modalitats: Ciències, Humanitats/Socials, Arts.",seguits:["selectivitat","grauSuperior"]},grauMitja:{id:"grauMitja",nom:"Grau Mitjà (FP)",nivell:1,desc:"Cicle Formatiu de Grau Mitjà. 2 anys (~2.000h). Formació professional pràctica amb pràctiques en empresa (FCT). Accés directe des de l'ESO.",seguits:["grauSuperior","treballar"]},pttPfi:{id:"pttPfi",nom:"PTT / PFI",nivell:1,desc:"Programa de Transició al Treball o Programes de Formació i Inserció. 1 any. Via d'orientació i acompanyament professional per a qui necessita un any addicional de suport.",seguits:["grauMitja","treballar"]},treballar:{id:"treballar",nom:"Treballar directament",nivell:1,desc:"Incorporació directa al mercat laboral. Sense titulació FP, amb possibilitat d'obtenir certificats de professionalitat i formació contínua. Possible des de l'ESO, el Grau Mitjà o el Grau Superior.",seguits:["formacioContínua","certProfessionalitat"]},selectivitat:{id:"selectivitat",nom:"Selectivitat (PAU)",nivell:2,desc:"Proves d'Accés a la Universitat. Es fan al juny i setembre. La nota final (Batx. + PAU) determina l'accés a cada carrera.",seguits:["universitat","grauSuperior"]},grauSuperior:{id:"grauSuperior",nom:"Grau Superior (FP)",nivell:2,desc:"Cicle Formatiu de Grau Superior. 2 anys (~2.000h). Alta qualificació professional, pràctiques en empresa i accés a la universitat amb convalidació de crèdits.",seguits:["universitat","treballar","mestreFP"]},universitat:{id:"universitat",nom:"Universitat",nivell:3,desc:"Grau universitari (3–5 anys). Accés per PAU o per Grau Superior (convalidació). Titulació de Grau o equivalent.",seguits:["master","treballar"]},formacioContínua:{id:"formacioContínua",nom:"Formació Contínua",nivell:2,desc:"Cursos de formació per a treballadors en actiu. Finançats per FOAP/SEPE. Permeten actualitzar competències i accedir a millors posicions.",seguits:[]},certProfessionalitat:{id:"certProfessionalitat",nom:"Certificat de Professionalitat",nivell:2,desc:"Titulació oficial que acredita competències professionals específiques. Expedit pel Servei Públic d'Ocupació i reconegut a tot l'Estat.",seguits:["grauMitja"]},mestreFP:{id:"mestreFP",nom:"Especialització FP",nivell:3,desc:"Cursos d'especialització de FP (6 mesos). Formació avançada en àmbits com la ciberseguretat, la intel·ligència artificial, la indústria 4.0, etc.",seguits:["treballar"]},master:{id:"master",nom:"Màster / Postgrau",nivell:4,desc:"Formació universitària de postgrau. 1–2 anys. Especialització professional o investigació (Màster Universitari reconegut per l'ANECA).",seguits:["doctorat"]},doctorat:{id:"doctorat",nom:"Doctorat",nivell:5,desc:"Màxim nivell d'estudis. 3–5 anys de recerca. Accés a posicions d'investigació i docència universitària.",seguits:[]}},ro={0:"#4a7fd4",1:"#7c68e8",2:"#1ea882",3:"#c4507e",4:"#e09d2a",5:"#6b7fbe"};async function w0(n){var r;n.innerHTML='<div class="loading-state">Carregant el teu camí…</div>';const e=(r=fe())==null?void 0:r.uid,t=e?await Xb(e):{};n.innerHTML=I0(t),A0(n,t)}function I0(n){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
        </span>
        Camí acadèmic
      </h1>
      <p class="section-subtitle">Selecciona les etapes que has completat o estàs cursant. Veuràs totes les teves opcions a continuació.</p>
    </div>

    <div class="cami-layout">
      <!-- Arbre d'etapes -->
      <div class="cami-tree" id="cami-tree">
        ${Uf(n)}
      </div>

      <!-- Panel d'opcions -->
      <aside>
        <div class="glass-card card-accent-top" id="cami-opcions-panel">
          <p class="text-secondary text-sm">Selecciona una etapa per veure la informació detallada i totes les opcions disponibles a continuació.</p>
        </div>
      </aside>
    </div>`}function Uf(n){return Object.values(no).map(e=>{const t=n[e.id]||"pendent",r=ro[e.nivell]||"#4a7fd4";return`
      <div class="cami-node cami-node--${t} cami-nivell-${e.nivell}"
           data-id="${e.id}" tabindex="0" role="button"
           aria-label="${k(e.nom)} — ${k(t)}"
           style="--node-color:${r};">
        <div class="cami-node-indicator">
          ${t==="completat"?'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':t==="en_curs"?'<div class="cami-pulse"></div>':""}
        </div>
        <div class="cami-node-body">
          <div class="cami-node-nom">${k(e.nom)}</div>
          <div class="cami-node-status">${t==="completat"?"Completat":t==="en_curs"?"En curs":"Pendent"}</div>
        </div>
      </div>`}).join("")}function A0(n,e){const t=n.querySelector("#cami-tree"),r=n.querySelector("#cami-opcions-panel");t==null||t.querySelectorAll(".cami-node").forEach(i=>{const s=()=>{t.querySelectorAll(".cami-node").forEach(c=>c.classList.remove("selected")),i.classList.add("selected");const o=i.dataset.id,l=e[o]||"pendent";ds(r,o,l,e,n)};i.addEventListener("click",s),i.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&s()})})}function ds(n,e,t,r,i){const s=no[e];if(!n||!s)return;const o=ro[s.nivell]||"#4a7fd4",l=s.seguits.map(c=>no[c]).filter(Boolean);n.innerHTML=`
    <div style="border-left:3px solid ${o};padding-left:var(--s3);margin-bottom:var(--s5);">
      <div class="font-bold" style="color:${o};font-size:var(--fz-lg);">${k(s.nom)}</div>
      <div class="text-xs text-muted">Nivell ${s.nivell}</div>
    </div>
    <p class="text-sm text-secondary mb-6" style="line-height:1.7;">${k(s.desc)}</p>

    <!-- Botons d'estat -->
    <div class="cami-estat-btns mb-6">
      <div class="form-label mb-2">Marca el teu estat:</div>
      <div class="flex gap-2 flex-wrap">
        ${["pendent","en_curs","completat"].map(c=>`
          <button class="estat-btn ${t===c?"active":""}" data-estat="${c}"
            style="${t===c?`background:${o}22;border-color:${o};color:${o};`:""}">
            ${c==="pendent"?"Pendent":c==="en_curs"?"En curs":"Completat"}
          </button>`).join("")}
      </div>
    </div>

    <!-- Opcions posteriors -->
    ${l.length?`
    <div class="font-semibold text-sm mb-3" style="color:var(--t-1);">Opcions disponibles a continuació:</div>
    <div class="opcions-posteriors">
      ${l.map(c=>{const d=ro[c.nivell]||"#4a7fd4",f=r[c.id]||"pendent";return`
          <div class="opcio-posterior" data-goto="${c.id}" tabindex="0" role="button"
               style="border-left:2px solid ${d}33;">
            <div style="color:${d};font-weight:600;font-size:var(--fz-sm);">${k(c.nom)}</div>
            <div class="text-xs text-muted">${k(c.desc.slice(0,90))}…</div>
            <span class="badge badge--${f==="completat"?"green":f==="en_curs"?"violet":"blue"}" style="margin-top:6px;">
              ${f==="completat"?"Completat":f==="en_curs"?"En curs":"Explorar"}
            </span>
          </div>`}).join("")}
    </div>`:'<p class="text-muted text-sm">Aquesta és una fita terminal del teu camí acadèmic.</p>'}`,n.querySelectorAll(".estat-btn").forEach(c=>{c.addEventListener("click",async()=>{var g;const d=c.dataset.estat;r[e]=d;const f=(g=fe())==null?void 0:g.uid;f&&await Yb(f,e,d);const m=i.querySelector("#cami-tree");m&&(m.innerHTML=Uf(r)),S0(m,n,r,i),ds(n,e,d,r,i)})}),n.querySelectorAll(".opcio-posterior").forEach(c=>{const d=()=>{const f=c.dataset.goto,m=i.querySelector("#cami-tree"),g=m==null?void 0:m.querySelector(`[data-id="${f}"]`);g&&(m.querySelectorAll(".cami-node").forEach(w=>w.classList.remove("selected")),g.classList.add("selected"),g.scrollIntoView({behavior:"smooth",block:"center"}),ds(n,f,r[f]||"pendent",r,i))};c.addEventListener("click",d),c.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&d()})})}function S0(n,e,t,r){n==null||n.querySelectorAll(".cami-node").forEach(i=>{const s=()=>{n.querySelectorAll(".cami-node").forEach(o=>o.classList.remove("selected")),i.classList.add("selected"),ds(e,i.dataset.id,t[i.dataset.id]||"pendent",t,r)};i.addEventListener("click",s),i.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&s()})})}const ji=document.getElementById("auth-screen"),jf=document.getElementById("app"),hs=new Set;function wa(n){document.querySelectorAll(".nav-btn[data-section]").forEach(t=>t.classList.toggle("active",t.dataset.section===n)),document.querySelectorAll(".app-section").forEach(t=>t.classList.toggle("active",t.id===`section-${n}`));const e=document.getElementById(`section-${n}`);if(e){if(!hs.has(n))switch(hs.add(n),n){case"itineraris":fT(e);break;case"cami":w0(e);break;case"noms":MT(e);break;case"pissarra":$T(e);break;case"recorreguts":BT(e);break;case"mapa":HT(e);break;case"comparador":ZT(e);break;case"simulador":n0(e);break;case"planner":c0(e);break;case"classes":f0(e);break;case"tasques":y0(e);break}n==="mapa"&&GT(e)}}function Ku(n){const e=document.getElementById("user-name"),t=document.getElementById("user-rol"),r=document.getElementById("user-avatar"),i=document.getElementById("brand-subtitle"),s=document.getElementById("btn-switch-rol"),o=(n==null?void 0:n.rol)==="professor"?"Docent":(n==null?void 0:n.rol)==="alumne"?"Alumne/a":"—",l=(n==null?void 0:n.rol)==="professor"?"alumne":"professor",c=(n==null?void 0:n.rol)==="professor"?"Mode alumne":"Mode docent";e&&(e.textContent=(n==null?void 0:n.nom)||"—"),t&&(t.textContent=o),i&&(i.textContent=`Olot · ${o}`),r&&(r.textContent=((n==null?void 0:n.nom)||"?")[0].toUpperCase()),s&&(s.title=`Canviar a ${c}`,s.dataset.newRol=l,s.innerHTML=`
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
      ${c}`)}function Qu(n,e){var i,s,o,l;(i=document.getElementById("app-modal"))==null||i.remove();const t=document.createElement("div");t.id="app-modal",t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="modal-box">
      <p class="modal-msg">${n}</p>
      <div class="modal-actions">
        <button class="btn btn--ghost" id="modal-cancel">Cancel·lar</button>
        <button class="btn btn--danger" id="modal-confirm">Confirmar</button>
      </div>
    </div>`,document.body.appendChild(t);const r=()=>t.remove();(s=t.querySelector("#modal-cancel"))==null||s.addEventListener("click",r),(o=t.querySelector(".modal-backdrop"))==null||o.addEventListener("click",r),(l=t.querySelector("#modal-confirm"))==null||l.addEventListener("click",()=>{r(),e()}),setTimeout(()=>{var c;return(c=t.querySelector("#modal-confirm"))==null?void 0:c.focus()},50)}function Bf(n){var e,t;ji.style.display="none",jf.style.display="",Ku(n),document.querySelectorAll(".nav-btn[data-section]").forEach(r=>{r.addEventListener("click",()=>wa(r.dataset.section))}),wa("itineraris"),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{Qu("Vols tancar la sessió?",async()=>{await aT()})}),(t=document.getElementById("btn-switch-rol"))==null||t.addEventListener("click",async r=>{const i=r.currentTarget.dataset.newRol;if(!i)return;Qu(`Canviar a ${i==="professor"?"mode docent":"mode alumne"}?`,async()=>{try{await sT(i);const o=_n();hs.clear(),Ku(o),wa("itineraris")}catch(o){console.error("Error canviant rol:",o)}})})}function C0(){ji.innerHTML="",ji.style.display="",jf.style.display="none",hs.clear(),lT(ji,n=>Bf(n))}tT((n,e)=>{Bf(e)},()=>{C0()});
