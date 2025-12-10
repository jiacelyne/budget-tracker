(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function kE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vy={exports:{}},zl={},jy={exports:{}},Z={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ra=Symbol.for("react.element"),SE=Symbol.for("react.portal"),TE=Symbol.for("react.fragment"),_E=Symbol.for("react.strict_mode"),IE=Symbol.for("react.profiler"),CE=Symbol.for("react.provider"),NE=Symbol.for("react.context"),xE=Symbol.for("react.forward_ref"),AE=Symbol.for("react.suspense"),RE=Symbol.for("react.memo"),DE=Symbol.for("react.lazy"),Wp=Symbol.iterator;function PE(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$y=Object.assign,By={};function es(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||zy}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qy(){}qy.prototype=es.prototype;function ed(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||zy}var td=ed.prototype=new qy;td.constructor=ed;$y(td,es.prototype);td.isPureReactComponent=!0;var Qp=Array.isArray,Hy=Object.prototype.hasOwnProperty,nd={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hy.call(e,r)&&!Ky.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ra,type:t,key:s,ref:a,props:i,_owner:nd.current}}function LE(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function OE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xp=/\/+/g;function Qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OE(""+t.key):e.toString(36)}function No(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case SE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Qu(a,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Xp,"$&/")+"/"),No(i,e,n,"",function(h){return h})):i!=null&&(rd(i)&&(i=LE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Xp,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Qp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Qu(s,l);a+=No(s,e,n,u,i)}else if(u=PE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Qu(s,l++),a+=No(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(t,e,n){if(t==null)return t;var r=[],i=0;return No(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ME(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},xo={transition:null},UE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:xo,ReactCurrentOwner:nd};function Wy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=es;Z.Fragment=TE;Z.Profiler=IE;Z.PureComponent=ed;Z.StrictMode=_E;Z.Suspense=AE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;Z.act=Wy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$y({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Hy.call(e,u)&&!Ky.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ra,type:t.type,key:i,ref:s,props:r,_owner:a}};Z.createContext=function(t){return t={$$typeof:NE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CE,_context:t},t.Consumer=t};Z.createElement=Gy;Z.createFactory=function(t){var e=Gy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:xE,render:t}};Z.isValidElement=rd;Z.lazy=function(t){return{$$typeof:DE,_payload:{_status:-1,_result:t},_init:ME}};Z.memo=function(t,e){return{$$typeof:RE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=xo.transition;xo.transition={};try{t()}finally{xo.transition=e}};Z.unstable_act=Wy;Z.useCallback=function(t,e){return lt.current.useCallback(t,e)};Z.useContext=function(t){return lt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return lt.current.useEffect(t,e)};Z.useId=function(){return lt.current.useId()};Z.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return lt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};Z.useRef=function(t){return lt.current.useRef(t)};Z.useState=function(t){return lt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return lt.current.useTransition()};Z.version="18.3.1";jy.exports=Z;var Ce=jy.exports;const FE=kE(Ce);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var VE=Ce,jE=Symbol.for("react.element"),zE=Symbol.for("react.fragment"),$E=Object.prototype.hasOwnProperty,BE=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qE={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)$E.call(e,r)&&!qE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jE,type:t,key:s,ref:a,props:i,_owner:BE.current}}zl.Fragment=zE;zl.jsx=Qy;zl.jsxs=Qy;Vy.exports=zl;var D=Vy.exports,Mc={},Xy={exports:{}},kt={},Yy={exports:{}},Jy={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(z,K){var Q=z.length;z.push(K);e:for(;0<Q;){var le=Q-1>>>1,Se=z[le];if(0<i(Se,K))z[le]=K,z[Q]=Se,Q=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Q=z.pop();if(Q!==K){z[0]=Q;e:for(var le=0,Se=z.length,kr=Se>>>1;le<kr;){var Tt=2*(le+1)-1,Sr=z[Tt],Ot=Tt+1,Dn=z[Ot];if(0>i(Sr,Q))Ot<Se&&0>i(Dn,Sr)?(z[le]=Dn,z[Ot]=Q,le=Ot):(z[le]=Sr,z[Tt]=Q,le=Tt);else if(Ot<Se&&0>i(Dn,Q))z[le]=Dn,z[Ot]=Q,le=Ot;else break e}}return K}function i(z,K){var Q=z.sortIndex-K.sortIndex;return Q!==0?Q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,m=null,w=3,C=!1,x=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=z)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function L(z){if(P=!1,_(z),!x)if(n(u)!==null)x=!0,Xt(A);else{var K=n(h);K!==null&&Lt(L,K.startTime-z)}}function A(z,K){x=!1,P&&(P=!1,T(p),p=-1),C=!0;var Q=w;try{for(_(K),m=n(u);m!==null&&(!(m.expirationTime>K)||z&&!S());){var le=m.callback;if(typeof le=="function"){m.callback=null,w=m.priorityLevel;var Se=le(m.expirationTime<=K);K=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(u)&&r(u),_(K)}else r(u);m=n(u)}if(m!==null)var kr=!0;else{var Tt=n(h);Tt!==null&&Lt(L,Tt.startTime-K),kr=!1}return kr}finally{m=null,w=Q,C=!1}}var U=!1,v=null,p=-1,y=5,k=-1;function S(){return!(t.unstable_now()-k<y)}function I(){if(v!==null){var z=t.unstable_now();k=z;var K=!0;try{K=v(!0,z)}finally{K?b():(U=!1,v=null)}}else U=!1}var b;if(typeof E=="function")b=function(){E(I)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Oe=be.port2;be.port1.onmessage=I,b=function(){Oe.postMessage(null)}}else b=function(){V(I,0)};function Xt(z){v=z,U||(U=!0,b())}function Lt(z,K){p=V(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||C||(x=!0,Xt(A))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var Q=w;w=K;try{return z()}finally{w=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=w;w=z;try{return K()}finally{w=Q}},t.unstable_scheduleCallback=function(z,K,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,z={id:f++,callback:K,priorityLevel:z,startTime:Q,expirationTime:Se,sortIndex:-1},Q>le?(z.sortIndex=Q,e(h,z),n(u)===null&&z===n(h)&&(P?(T(p),p=-1):P=!0,Lt(L,Q-le))):(z.sortIndex=Se,e(u,z),x||C||(x=!0,Xt(A))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var K=w;return function(){var Q=w;w=K;try{return z.apply(this,arguments)}finally{w=Q}}}})(Jy);Yy.exports=Jy;var HE=Yy.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var KE=Ce,Et=HE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zy=new Set,ia={};function Xr(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(ia[t]=e,t=0;t<e.length;t++)Zy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,GE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yp={},Jp={};function WE(t){return Uc.call(Jp,t)?!0:Uc.call(Yp,t)?!1:GE.test(t)?Jp[t]=!0:(Yp[t]=!0,!1)}function QE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XE(t,e,n,r){if(e===null||typeof e>"u"||QE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,sd);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,sd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,sd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XE(e,n,i,r)&&(n=null),r||i===null?WE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Xu;function Os(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var Yu=!1;function Ju(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function YE(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Fc:return"Profiler";case od:return"StrictMode";case Vc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ud:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function JE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=ZE(t))}function iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sv(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function Bc(t,e){sv(t,e);var n=cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||Xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ms(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function av(t,e){var n=cr(e.value),r=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ov(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ov(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ek=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){ek.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tk=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gc(t,e){if(e){if(tk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xc=null,Ni=null,xi=null;function im(t){if(t=La(t)){if(typeof Xc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Kl(e),Xc(t.stateNode,t.type,e))}}function hv(t){Ni?xi?xi.push(t):xi=[t]:Ni=t}function dv(){if(Ni){var t=Ni,e=xi;if(xi=Ni=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function fv(t,e){return t(e)}function pv(){}var Zu=!1;function mv(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return fv(t,e,n)}finally{Zu=!1,(Ni!==null||xi!==null)&&(pv(),dv())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Yc=!1;if(Sn)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Yc=!1}function nk(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Bs=!1,Yo=null,Jo=!1,Jc=null,rk={onError:function(t){Bs=!0,Yo=t}};function ik(t,e,n,r,i,s,a,l,u){Bs=!1,Yo=null,nk.apply(rk,arguments)}function sk(t,e,n,r,i,s,a,l,u){if(ik.apply(this,arguments),Bs){if(Bs){var h=Yo;Bs=!1,Yo=null}else throw Error(F(198));Jo||(Jo=!0,Jc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(Yr(t)!==t)throw Error(F(188))}function ak(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function yv(t){return t=ak(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var wv=Et.unstable_scheduleCallback,am=Et.unstable_cancelCallback,ok=Et.unstable_shouldYield,lk=Et.unstable_requestPaint,_e=Et.unstable_now,uk=Et.unstable_getCurrentPriorityLevel,hd=Et.unstable_ImmediatePriority,bv=Et.unstable_UserBlockingPriority,Zo=Et.unstable_NormalPriority,ck=Et.unstable_LowPriority,Ev=Et.unstable_IdlePriority,$l=null,rn=null;function hk(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:pk,dk=Math.log,fk=Math.LN2;function pk(t){return t>>>=0,t===0?32:31-(dk(t)/fk|0)|0}var oo=64,lo=4194304;function Us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Us(l):(s&=a,s!==0&&(r=Us(s)))}else a=n&~i,a!==0?r=Us(a):s!==0&&(r=Us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function mk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=mk(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function yk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,fd,_v,Iv,Cv,eh=!1,uo=[],Yn=null,Jn=null,Zn=null,oa=new Map,la=new Map,Bn=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=La(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wk(t,e,n,r,i){switch(e){case"focusin":return Yn=xs(Yn,t,e,n,r,i),!0;case"dragenter":return Jn=xs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=xs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oa.set(s,xs(oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,la.set(s,xs(la.get(s)||null,t,e,n,r,i)),!0}return!1}function Nv(t){var e=Rr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return e=La(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Ao(t)&&n.delete(e)}function bk(){eh=!1,Yn!==null&&Ao(Yn)&&(Yn=null),Jn!==null&&Ao(Jn)&&(Jn=null),Zn!==null&&Ao(Zn)&&(Zn=null),oa.forEach(lm),la.forEach(lm)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,bk)))}function ua(t){function e(i){return As(i,t)}if(0<uo.length){As(uo[0],t);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&As(Yn,t),Jn!==null&&As(Jn,t),Zn!==null&&As(Zn,t),oa.forEach(e),la.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Nv(n),n.blockedOn===null&&Bn.shift()}var Ai=Rn.ReactCurrentBatchConfig,tl=!0;function Ek(t,e,n,r){var i=oe,s=Ai.transition;Ai.transition=null;try{oe=1,pd(t,e,n,r)}finally{oe=i,Ai.transition=s}}function kk(t,e,n,r){var i=oe,s=Ai.transition;Ai.transition=null;try{oe=4,pd(t,e,n,r)}finally{oe=i,Ai.transition=s}}function pd(t,e,n,r){if(tl){var i=th(t,e,n,r);if(i===null)cc(t,e,r,nl,n),om(t,r);else if(wk(i,t,e,n,r))r.stopPropagation();else if(om(t,r),e&4&&-1<vk.indexOf(t)){for(;i!==null;){var s=La(i);if(s!==null&&Tv(s),s=th(t,e,n,r),s===null&&cc(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cc(t,e,r,null,n)}}var nl=null;function th(t,e,n,r){if(nl=null,t=cd(r),t=Rr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uk()){case hd:return 1;case bv:return 4;case Zo:case ck:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var Wn=null,md=null,Ro=null;function Av(){if(Ro)return Ro;var t,e=md,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Ro=i.slice(t,1<r?1-r:void 0)}function Do(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function um(){return!1}function St(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:um,this.isPropagationStopped=um,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=St(ts),Pa=ve({},ts,{view:0,detail:0}),Sk=St(Pa),tc,nc,Rs,Bl=ve({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(tc=t.screenX-Rs.screenX,nc=t.screenY-Rs.screenY):nc=tc=0,Rs=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),cm=St(Bl),Tk=ve({},Bl,{dataTransfer:0}),_k=St(Tk),Ik=ve({},Pa,{relatedTarget:0}),rc=St(Ik),Ck=ve({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Nk=St(Ck),xk=ve({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ak=St(xk),Rk=ve({},ts,{data:0}),hm=St(Rk),Dk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ok(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lk[t])?!!e[t]:!1}function yd(){return Ok}var Mk=ve({},Pa,{key:function(t){if(t.key){var e=Dk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Do(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Do(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Do(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uk=St(Mk),Fk=ve({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=St(Fk),Vk=ve({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),jk=St(Vk),zk=ve({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),$k=St(zk),Bk=ve({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qk=St(Bk),Hk=[9,13,27,32],vd=Sn&&"CompositionEvent"in window,qs=null;Sn&&"documentMode"in document&&(qs=document.documentMode);var Kk=Sn&&"TextEvent"in window&&!qs,Rv=Sn&&(!vd||qs&&8<qs&&11>=qs),fm=" ",pm=!1;function Dv(t,e){switch(t){case"keyup":return Hk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function Gk(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function Wk(t,e){if(yi)return t==="compositionend"||!vd&&Dv(t,e)?(t=Av(),Ro=md=Wn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var Qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qk[t.type]:e==="textarea"}function Lv(t,e,n,r){hv(r),e=rl(e,"onChange"),0<e.length&&(n=new gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,ca=null;function Xk(t){Hv(t,0)}function ql(t){var e=bi(t);if(iv(e))return t}function Yk(t,e){if(t==="change")return e}var Ov=!1;if(Sn){var ic;if(Sn){var sc="oninput"in document;if(!sc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),sc=typeof gm.oninput=="function"}ic=sc}else ic=!1;Ov=ic&&(!document.documentMode||9<document.documentMode)}function ym(){Hs&&(Hs.detachEvent("onpropertychange",Mv),ca=Hs=null)}function Mv(t){if(t.propertyName==="value"&&ql(ca)){var e=[];Lv(e,ca,t,cd(t)),mv(Xk,e)}}function Jk(t,e,n){t==="focusin"?(ym(),Hs=e,ca=n,Hs.attachEvent("onpropertychange",Mv)):t==="focusout"&&ym()}function Zk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(ca)}function eS(t,e){if(t==="click")return ql(e)}function tS(t,e){if(t==="input"||t==="change")return ql(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:nS;function ha(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=vm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xo(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Fv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wm(n,s);var a=wm(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Sn&&"documentMode"in document&&11>=document.documentMode,vi=null,nh=null,Ks=null,rh=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||vi==null||vi!==Xo(r)||(r=vi,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ks&&ha(Ks,r)||(Ks=r,r=rl(nh,"onSelect"),0<r.length&&(e=new gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},ac={},Vv={};Sn&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Hl(t){if(ac[t])return ac[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return ac[t]=e[n];return t}var jv=Hl("animationend"),zv=Hl("animationiteration"),$v=Hl("animationstart"),Bv=Hl("transitionend"),qv=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){qv.set(t,e),Xr(e,[t])}for(var oc=0;oc<Em.length;oc++){var lc=Em[oc],sS=lc.toLowerCase(),aS=lc[0].toUpperCase()+lc.slice(1);wr(sS,"on"+aS)}wr(jv,"onAnimationEnd");wr(zv,"onAnimationIteration");wr($v,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Bv,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sk(r,e,void 0,t),t.currentTarget=null}function Hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;km(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;km(i,l,h),s=u}}}if(Jo)throw t=Jc,Jo=!1,Jc=null,t}function fe(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(Kv(e,t,2,!1),n.add(r))}function uc(t,e,n){var r=0;e&&(r|=4),Kv(n,t,r,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[fo]){t[fo]=!0,Zy.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,uc("selectionchange",!1,e))}}function Kv(t,e,n,r){switch(xv(e)){case 1:var i=Ek;break;case 4:i=kk;break;default:i=pd}n=i.bind(null,e,n,t),i=void 0,!Yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Rr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}mv(function(){var h=s,f=cd(n),m=[];e:{var w=qv.get(t);if(w!==void 0){var C=gd,x=t;switch(t){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":C=Uk;break;case"focusin":x="focus",C=rc;break;case"focusout":x="blur",C=rc;break;case"beforeblur":case"afterblur":C=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=_k;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=jk;break;case jv:case zv:case $v:C=Nk;break;case Bv:C=$k;break;case"scroll":C=Sk;break;case"wheel":C=qk;break;case"copy":case"cut":case"paste":C=Ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=dm}var P=(e&4)!==0,V=!P&&t==="scroll",T=P?w!==null?w+"Capture":null:w;P=[];for(var E=h,_;E!==null;){_=E;var L=_.stateNode;if(_.tag===5&&L!==null&&(_=L,T!==null&&(L=aa(E,T),L!=null&&P.push(fa(E,L,_)))),V)break;E=E.return}0<P.length&&(w=new C(w,x,null,n,f),m.push({event:w,listeners:P}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",w&&n!==Qc&&(x=n.relatedTarget||n.fromElement)&&(Rr(x)||x[Tn]))break e;if((C||w)&&(w=f.window===f?f:(w=f.ownerDocument)?w.defaultView||w.parentWindow:window,C?(x=n.relatedTarget||n.toElement,C=h,x=x?Rr(x):null,x!==null&&(V=Yr(x),x!==V||x.tag!==5&&x.tag!==6)&&(x=null)):(C=null,x=h),C!==x)){if(P=cm,L="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=dm,L="onPointerLeave",T="onPointerEnter",E="pointer"),V=C==null?w:bi(C),_=x==null?w:bi(x),w=new P(L,E+"leave",C,n,f),w.target=V,w.relatedTarget=_,L=null,Rr(f)===h&&(P=new P(T,E+"enter",x,n,f),P.target=_,P.relatedTarget=V,L=P),V=L,C&&x)t:{for(P=C,T=x,E=0,_=P;_;_=ui(_))E++;for(_=0,L=T;L;L=ui(L))_++;for(;0<E-_;)P=ui(P),E--;for(;0<_-E;)T=ui(T),_--;for(;E--;){if(P===T||T!==null&&P===T.alternate)break t;P=ui(P),T=ui(T)}P=null}else P=null;C!==null&&Sm(m,w,C,P,!1),x!==null&&V!==null&&Sm(m,V,x,P,!0)}}e:{if(w=h?bi(h):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var A=Yk;else if(mm(w))if(Ov)A=tS;else{A=Zk;var U=Jk}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=eS);if(A&&(A=A(t,h))){Lv(m,A,n,f);break e}U&&U(t,w,h),t==="focusout"&&(U=w._wrapperState)&&U.controlled&&w.type==="number"&&qc(w,"number",w.value)}switch(U=h?bi(h):window,t){case"focusin":(mm(U)||U.contentEditable==="true")&&(vi=U,nh=h,Ks=null);break;case"focusout":Ks=nh=vi=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,bm(m,n,f);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":bm(m,n,f)}var v;if(vd)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else yi?Dv(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Rv&&n.locale!=="ko"&&(yi||p!=="onCompositionStart"?p==="onCompositionEnd"&&yi&&(v=Av()):(Wn=f,md="value"in Wn?Wn.value:Wn.textContent,yi=!0)),U=rl(h,p),0<U.length&&(p=new hm(p,t,null,n,f),m.push({event:p,listeners:U}),v?p.data=v:(v=Pv(n),v!==null&&(p.data=v)))),(v=Kk?Gk(t,n):Wk(t,n))&&(h=rl(h,"onBeforeInput"),0<h.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Hv(m,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(fa(t,s,i)),s=aa(t,e),s!=null&&r.push(fa(t,s,i))),t=t.return}return r}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sm(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=aa(n,s),u!=null&&a.unshift(fa(n,u,l))):i||(u=aa(n,s),u!=null&&a.push(fa(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function Tm(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(uS,"")}function po(t,e,n){if(e=Tm(e),Tm(t)!==e&&n)throw Error(F(425))}function il(){}var ih=null,sh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(dS)}:oh;function dS(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ua(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),nn="__reactFiber$"+ns,pa="__reactProps$"+ns,Tn="__reactContainer$"+ns,lh="__reactEvents$"+ns,fS="__reactListeners$"+ns,pS="__reactHandles$"+ns;function Rr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[nn])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[nn]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Kl(t){return t[pa]||null}var uh=[],Ei=-1;function br(t){return{current:t}}function pe(t){0>Ei||(t.current=uh[Ei],uh[Ei]=null,Ei--)}function ce(t,e){Ei++,uh[Ei]=t.current,t.current=e}var hr={},et=br(hr),ft=br(!1),jr=hr;function zi(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function sl(){pe(ft),pe(et)}function Cm(t,e,n){if(et.current!==hr)throw Error(F(168));ce(et,e),ce(ft,n)}function Gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,JE(t)||"Unknown",i));return ve({},n,r)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,jr=et.current,ce(et,t),ce(ft,ft.current),!0}function Nm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Gv(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(et),ce(et,t)):pe(ft),ce(ft,n)}var gn=null,Gl=!1,dc=!1;function Wv(t){gn===null?gn=[t]:gn.push(t)}function mS(t){Gl=!0,Wv(t)}function Er(){if(!dc&&gn!==null){dc=!0;var t=0,e=oe;try{var n=gn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,Gl=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),wv(hd,Er),i}finally{oe=e,dc=!1}}return null}var ki=[],Si=0,ol=null,ll=0,_t=[],It=0,zr=null,vn=1,wn="";function Nr(t,e){ki[Si++]=ll,ki[Si++]=ol,ol=t,ll=e}function Qv(t,e,n){_t[It++]=vn,_t[It++]=wn,_t[It++]=zr,zr=t;var r=vn;t=wn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,vn=1<<32-Bt(e)+i|n<<i|r,wn=s+t}else vn=1<<s|n<<i|r,wn=t}function bd(t){t.return!==null&&(Nr(t,1),Qv(t,1,0))}function Ed(t){for(;t===ol;)ol=ki[--Si],ki[Si]=null,ll=ki[--Si],ki[Si]=null;for(;t===zr;)zr=_t[--It],_t[It]=null,wn=_t[--It],_t[It]=null,vn=_t[--It],_t[It]=null}var wt=null,vt=null,me=!1,Vt=null;function Xv(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:vn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(me){var e=vt;if(e){var n=e;if(!xm(t,e)){if(ch(t))throw Error(F(418));e=er(n.nextSibling);var r=wt;e&&xm(t,e)?Xv(r,n):(t.flags=t.flags&-4097|2,me=!1,wt=t)}}else{if(ch(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,wt=t}}}function Am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function mo(t){if(t!==wt)return!1;if(!me)return Am(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=vt)){if(ch(t))throw Yv(),Error(F(418));for(;e;)Xv(t,e),e=er(e.nextSibling)}if(Am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?er(t.stateNode.nextSibling):null;return!0}function Yv(){for(var t=vt;t;)t=er(t.nextSibling)}function $i(){vt=wt=null,me=!1}function kd(t){Vt===null?Vt=[t]:Vt.push(t)}var gS=Rn.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rm(t){var e=t._init;return e(t._payload)}function Jv(t){function e(T,E){if(t){var _=T.deletions;_===null?(T.deletions=[E],T.flags|=16):_.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=ir(T,E),T.index=0,T.sibling=null,T}function s(T,E,_){return T.index=_,t?(_=T.alternate,_!==null?(_=_.index,_<E?(T.flags|=2,E):_):(T.flags|=2,E)):(T.flags|=1048576,E)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,E,_,L){return E===null||E.tag!==6?(E=wc(_,T.mode,L),E.return=T,E):(E=i(E,_),E.return=T,E)}function u(T,E,_,L){var A=_.type;return A===gi?f(T,E,_.props.children,L,_.key):E!==null&&(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zn&&Rm(A)===E.type)?(L=i(E,_.props),L.ref=Ds(T,E,_),L.return=T,L):(L=Vo(_.type,_.key,_.props,null,T.mode,L),L.ref=Ds(T,E,_),L.return=T,L)}function h(T,E,_,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==_.containerInfo||E.stateNode.implementation!==_.implementation?(E=bc(_,T.mode,L),E.return=T,E):(E=i(E,_.children||[]),E.return=T,E)}function f(T,E,_,L,A){return E===null||E.tag!==7?(E=Fr(_,T.mode,L,A),E.return=T,E):(E=i(E,_),E.return=T,E)}function m(T,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return E=wc(""+E,T.mode,_),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return _=Vo(E.type,E.key,E.props,null,T.mode,_),_.ref=Ds(T,null,E),_.return=T,_;case mi:return E=bc(E,T.mode,_),E.return=T,E;case zn:var L=E._init;return m(T,L(E._payload),_)}if(Ms(E)||Cs(E))return E=Fr(E,T.mode,_,null),E.return=T,E;go(T,E)}return null}function w(T,E,_,L){var A=E!==null?E.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:l(T,E,""+_,L);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case io:return _.key===A?u(T,E,_,L):null;case mi:return _.key===A?h(T,E,_,L):null;case zn:return A=_._init,w(T,E,A(_._payload),L)}if(Ms(_)||Cs(_))return A!==null?null:f(T,E,_,L,null);go(T,_)}return null}function C(T,E,_,L,A){if(typeof L=="string"&&L!==""||typeof L=="number")return T=T.get(_)||null,l(E,T,""+L,A);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case io:return T=T.get(L.key===null?_:L.key)||null,u(E,T,L,A);case mi:return T=T.get(L.key===null?_:L.key)||null,h(E,T,L,A);case zn:var U=L._init;return C(T,E,_,U(L._payload),A)}if(Ms(L)||Cs(L))return T=T.get(_)||null,f(E,T,L,A,null);go(E,L)}return null}function x(T,E,_,L){for(var A=null,U=null,v=E,p=E=0,y=null;v!==null&&p<_.length;p++){v.index>p?(y=v,v=null):y=v.sibling;var k=w(T,v,_[p],L);if(k===null){v===null&&(v=y);break}t&&v&&k.alternate===null&&e(T,v),E=s(k,E,p),U===null?A=k:U.sibling=k,U=k,v=y}if(p===_.length)return n(T,v),me&&Nr(T,p),A;if(v===null){for(;p<_.length;p++)v=m(T,_[p],L),v!==null&&(E=s(v,E,p),U===null?A=v:U.sibling=v,U=v);return me&&Nr(T,p),A}for(v=r(T,v);p<_.length;p++)y=C(v,T,p,_[p],L),y!==null&&(t&&y.alternate!==null&&v.delete(y.key===null?p:y.key),E=s(y,E,p),U===null?A=y:U.sibling=y,U=y);return t&&v.forEach(function(S){return e(T,S)}),me&&Nr(T,p),A}function P(T,E,_,L){var A=Cs(_);if(typeof A!="function")throw Error(F(150));if(_=A.call(_),_==null)throw Error(F(151));for(var U=A=null,v=E,p=E=0,y=null,k=_.next();v!==null&&!k.done;p++,k=_.next()){v.index>p?(y=v,v=null):y=v.sibling;var S=w(T,v,k.value,L);if(S===null){v===null&&(v=y);break}t&&v&&S.alternate===null&&e(T,v),E=s(S,E,p),U===null?A=S:U.sibling=S,U=S,v=y}if(k.done)return n(T,v),me&&Nr(T,p),A;if(v===null){for(;!k.done;p++,k=_.next())k=m(T,k.value,L),k!==null&&(E=s(k,E,p),U===null?A=k:U.sibling=k,U=k);return me&&Nr(T,p),A}for(v=r(T,v);!k.done;p++,k=_.next())k=C(v,T,p,k.value,L),k!==null&&(t&&k.alternate!==null&&v.delete(k.key===null?p:k.key),E=s(k,E,p),U===null?A=k:U.sibling=k,U=k);return t&&v.forEach(function(I){return e(T,I)}),me&&Nr(T,p),A}function V(T,E,_,L){if(typeof _=="object"&&_!==null&&_.type===gi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case io:e:{for(var A=_.key,U=E;U!==null;){if(U.key===A){if(A=_.type,A===gi){if(U.tag===7){n(T,U.sibling),E=i(U,_.props.children),E.return=T,T=E;break e}}else if(U.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zn&&Rm(A)===U.type){n(T,U.sibling),E=i(U,_.props),E.ref=Ds(T,U,_),E.return=T,T=E;break e}n(T,U);break}else e(T,U);U=U.sibling}_.type===gi?(E=Fr(_.props.children,T.mode,L,_.key),E.return=T,T=E):(L=Vo(_.type,_.key,_.props,null,T.mode,L),L.ref=Ds(T,E,_),L.return=T,T=L)}return a(T);case mi:e:{for(U=_.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===_.containerInfo&&E.stateNode.implementation===_.implementation){n(T,E.sibling),E=i(E,_.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=bc(_,T.mode,L),E.return=T,T=E}return a(T);case zn:return U=_._init,V(T,E,U(_._payload),L)}if(Ms(_))return x(T,E,_,L);if(Cs(_))return P(T,E,_,L);go(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,_),E.return=T,T=E):(n(T,E),E=wc(_,T.mode,L),E.return=T,T=E),a(T)):n(T,E)}return V}var Bi=Jv(!0),Zv=Jv(!1),ul=br(null),cl=null,Ti=null,Sd=null;function Td(){Sd=Ti=cl=null}function _d(t){var e=ul.current;pe(ul),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){cl=t,Sd=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(cl===null)throw Error(F(308));Ti=t,cl.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Dr=null;function Id(t){Dr===null?Dr=[t]:Dr.push(t)}function ew(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Id(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,Id(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}function Dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=h=u=null,l=s;do{var w=l.lane,C=l.eventTime;if((r&w)===w){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(w=e,C=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(C,m,w);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,w=typeof x=="function"?x.call(C,m,w):x,w==null)break e;m=ve({},m,w);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=i.effects,w===null?i.effects=[l]:w.push(l))}else C={eventTime:C,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=m):f=f.next=C,a|=w;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;w=l,l=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=a,t.lanes=a,t.memoizedState=m}}function Pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Oa={},sn=br(Oa),ma=br(Oa),ga=br(Oa);function Pr(t){if(t===Oa)throw Error(F(174));return t}function Nd(t,e){switch(ce(ga,e),ce(ma,t),ce(sn,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}pe(sn),ce(sn,e)}function qi(){pe(sn),pe(ma),pe(ga)}function nw(t){Pr(ga.current);var e=Pr(sn.current),n=Kc(e,t.type);e!==n&&(ce(ma,t),ce(sn,n))}function xd(t){ma.current===t&&(pe(sn),pe(ma))}var ge=br(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Ad(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Lo=Rn.ReactCurrentDispatcher,pc=Rn.ReactCurrentBatchConfig,$r=0,ye=null,De=null,Fe=null,fl=!1,Gs=!1,ya=0,yS=0;function We(){throw Error(F(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,i,s){if($r=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lo.current=t===null||t.memoizedState===null?ES:kS,t=n(r,i),Gs){s=0;do{if(Gs=!1,ya=0,25<=s)throw Error(F(301));s+=1,Fe=De=null,e.updateQueue=null,Lo.current=SS,t=n(r,i)}while(Gs)}if(Lo.current=pl,e=De!==null&&De.next!==null,$r=0,Fe=De=ye=null,fl=!1,e)throw Error(F(300));return t}function Pd(){var t=ya!==0;return ya=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ye.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Pt(){if(De===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Fe===null?ye.memoizedState:Fe.next;if(e!==null)Fe=e,De=t;else{if(t===null)throw Error(F(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?ye.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function va(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if(($r&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,ye.lanes|=f,Br|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Kt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Kt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rw(){}function iw(t,e){var n=ye,r=Pt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,Ld(ow.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,wa(9,aw.bind(null,n,r,i,e),void 0,null),je===null)throw Error(F(349));$r&30||sw(n,e,i)}return i}function sw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aw(t,e,n,r){e.value=n,e.getSnapshot=r,lw(e)&&uw(t)}function ow(t,e,n){return n(function(){lw(e)&&uw(t)})}function lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function uw(t){var e=_n(t,1);e!==null&&qt(e,t,1,-1)}function Lm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,ye,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cw(){return Pt().memoizedState}function Oo(t,e,n,r){var i=en();ye.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(De!==null){var a=De.memoizedState;if(s=a.destroy,r!==null&&Rd(r,a.deps)){i.memoizedState=wa(e,n,s,r);return}}ye.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function Om(t,e){return Oo(8390656,8,t,e)}function Ld(t,e){return Wl(2048,8,t,e)}function hw(t,e){return Wl(4,2,t,e)}function dw(t,e){return Wl(4,4,t,e)}function fw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pw(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,fw.bind(null,e,t),n)}function Od(){}function mw(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gw(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yw(t,e,n){return $r&21?(Kt(n,e)||(n=kv(),ye.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function vS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=pc.transition;pc.transition={};try{t(!1),e()}finally{oe=n,pc.transition=r}}function vw(){return Pt().memoizedState}function wS(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ww(t))bw(e,n);else if(n=ew(t,e,n,r),n!==null){var i=at();qt(n,t,r,i),Ew(n,e,r)}}function bS(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ww(t))bw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,a)){var u=e.interleaved;u===null?(i.next=i,Id(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ew(t,e,i,r),n!==null&&(i=at(),qt(n,t,r,i),Ew(n,e,r))}}function ww(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function bw(t,e){Gs=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ew(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}var pl={readContext:Dt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},ES={readContext:Dt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,fw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wS.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Lm,useDebugValue:Od,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Lm(!1),e=t[0];return t=vS.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=en();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),je===null)throw Error(F(349));$r&30||sw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Om(ow.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,aw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=je.identifierPrefix;if(me){var n=wn,r=vn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Dt,useCallback:mw,useContext:Dt,useEffect:Ld,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:mc,useRef:cw,useState:function(){return mc(va)},useDebugValue:Od,useDeferredValue:function(t){var e=Pt();return yw(e,De.memoizedState,t)},useTransition:function(){var t=mc(va)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:iw,useId:vw,unstable_isNewReconciler:!1},SS={readContext:Dt,useCallback:mw,useContext:Dt,useEffect:Ld,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:gc,useRef:cw,useState:function(){return gc(va)},useDebugValue:Od,useDeferredValue:function(t){var e=Pt();return De===null?e.memoizedState=t:yw(e,De.memoizedState,t)},useTransition:function(){var t=gc(va)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:iw,useId:vw,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),Po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),Po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=rr(t),i=kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(qt(e,t,r,n),Po(e,t,r))}};function Mm(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!ha(n,r)||!ha(i,s):!0}function kw(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=pt(e)?jr:et.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Um(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=pt(e)?jr:et.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hi(t,e){try{var n="",r=e;do n+=YE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function Sw(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Th=r),mh(t,e)},n}function Tw(t,e,n){n=kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function Vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var _S=Rn.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?Zv(e,null,n,r):Bi(e,t.child,n,r)}function zm(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=Dd(t,e,n,r,s,i),n=Pd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&n&&bd(e),e.flags|=1,st(t,e,r,i),e.child)}function $m(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=Vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(a,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ha(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,In(t,e,i)}return gh(t,e,n,r,i)}function Iw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ii,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ii,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ii,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ii,yt),yt|=r;return st(t,e,i,n),e.child}function Cw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,i){var s=pt(n)?jr:et.current;return s=zi(e,s),Ri(e,i),n=Dd(t,e,n,r,s,i),r=Pd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&r&&bd(e),e.flags|=1,st(t,e,n,i),e.child)}function Bm(t,e,n,r,i){if(pt(n)){var s=!0;al(e)}else s=!1;if(Ri(e,i),e.stateNode===null)Mo(t,e),kw(e,n,r),ph(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=pt(n)?jr:et.current,h=zi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Um(e,a,r,h),$n=!1;var w=e.memoizedState;a.state=w,hl(e,r,a,i),u=e.memoizedState,l!==r||w!==u||ft.current||$n?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(l=$n||Mm(e,n,l,r,w,u,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,tw(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ut(e.type,l),a.props=h,m=e.pendingProps,w=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=pt(n)?jr:et.current,u=zi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||w!==u)&&Um(e,a,r,u),$n=!1,w=e.memoizedState,a.state=w,hl(e,r,a,i);var x=e.memoizedState;l!==m||w!==x||ft.current||$n?(typeof C=="function"&&(fh(e,n,C,r),x=e.memoizedState),(h=$n||Mm(e,n,h,r,w,x,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,s,i)}function yh(t,e,n,r,i,s){Cw(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Nm(e,n,!1),In(t,e,s);r=e.stateNode,_S.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Nm(e,n,!0),e.child}function Nw(t){var e=t.stateNode;e.pendingContext?Cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cm(t,e.context,!1),Nd(t,e.containerInfo)}function qm(t,e,n,r,i){return $i(),kd(i),e.flags|=256,st(t,e,n,r),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xw(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ge,i&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jl(a,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=vh,t):Md(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return IS(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?wh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=vh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Md(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,r){return r!==null&&kd(r),Bi(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IS(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=yc(Error(F(422))),yo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,a),e.child.memoizedState=wh(a),e.memoizedState=vh,s);if(!(e.mode&1))return yo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=yc(s,r,void 0),yo(t,e,a,r)}if(l=(a&t.childLanes)!==0,dt||l){if(r=je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),qt(r,t,i,-1))}return $d(),r=yc(Error(F(421))),yo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=er(i.nextSibling),wt=e,me=!0,Vt=null,t!==null&&(_t[It++]=vn,_t[It++]=wn,_t[It++]=zr,vn=t.id,wn=t.overflow,zr=e),e=Md(e,r.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Aw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CS(t,e,n){switch(e.tag){case 3:Nw(e),$i();break;case 5:nw(e);break;case 1:pt(e.type)&&al(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?xw(t,e,n):(ce(ge,ge.current&1),t=In(t,e,n),t!==null?t.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Aw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,Iw(t,e,n)}return In(t,e,n)}var Rw,bh,Dw,Pw;Rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};Dw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(sn.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Hc(t,i),r=Hc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}Gc(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ia.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ia.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NS(t,e,n){var r=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&sl(),Qe(e),null;case 3:return r=e.stateNode,qi(),pe(ft),pe(et),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vt!==null&&(Ch(Vt),Vt=null))),bh(t,e),Qe(e),null;case 5:xd(e);var i=Pr(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)Dw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=Pr(sn.current),mo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[pa]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)fe(Fs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":em(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":nm(r,s),fe("invalid",r)}Gc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&po(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&po(r.textContent,l,t),i=["children",""+l]):ia.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":so(r),tm(r,s,!0);break;case"textarea":so(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ov(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[nn]=e,t[pa]=r,Rw(t,e,!1,!1),e.stateNode=t;e:{switch(a=Wc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)fe(Fs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":em(t,r),i=$c(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),fe("invalid",t);break;case"textarea":nm(t,r),i=Hc(t,r),fe("invalid",t);break;default:i=r}Gc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?cv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&sa(t,u):typeof u=="number"&&sa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ia.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&ad(t,s,u,a))}switch(n){case"input":so(t),tm(t,r,!1);break;case"textarea":so(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Pr(ga.current),Pr(sn.current),mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&vt!==null&&e.mode&1&&!(e.flags&128))Yv(),$i(),e.flags|=98560,s=!1;else if(s=mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[nn]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Vt!==null&&(Ch(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Pe===0&&(Pe=3):$d())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return qi(),bh(t,e),t===null&&da(e.stateNode.containerInfo),Qe(e),null;case 10:return _d(e.type._context),Qe(e),null;case 17:return pt(e.type)&&sl(),Qe(e),null;case 19:if(pe(ge),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Ps(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=dl(t),a!==null){for(e.flags|=128,Ps(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>Ki&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!me)return Qe(e),null}else 2*_e()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function xS(t,e){switch(Ed(e),e.tag){case 1:return pt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),pe(ft),pe(et),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(pe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ge),null;case 4:return qi(),null;case 10:return _d(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var vo=!1,Je=!1,AS=typeof WeakSet=="function"?WeakSet:Set,q=null;function _i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Lw(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Km=!1;function RS(t,e){if(ih=tl,t=Fv(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,m=t,w=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(C=m.firstChild)!==null;)w=m,m=C;for(;;){if(m===t)break t;if(w===n&&++h===i&&(l=a),w===s&&++f===r&&(u=a),(C=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},tl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,V=x.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ut(e.type,P),V);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(L){ke(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=Km,Km=!1,x}function Ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lw(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ow(t){var e=t.alternate;e!==null&&(t.alternate=null,Ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[pa],delete e[lh],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mw(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var ze=null,Ft=!1;function Vn(t,e,n){for(n=n.child;n!==null;)Uw(t,e,n),n=n.sibling}function Uw(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Je||_i(n,e);case 6:var r=ze,i=Ft;ze=null,Vn(t,e,n),ze=r,Ft=i,ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),ua(t)):hc(ze,n.stateNode));break;case 4:r=ze,i=Ft,ze=n.stateNode.containerInfo,Ft=!0,Vn(t,e,n),ze=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Lw(n,e,a),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(_i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AS),e.forEach(function(r){var i=jS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ft=!1;break e;case 3:ze=l.stateNode.containerInfo,Ft=!0;break e;case 4:ze=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(ze===null)throw Error(F(160));Uw(s,a,i),ze=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ke(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fw(e,t),e=e.sibling}function Fw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Zt(t),r&4){try{Ws(3,t,t.return),Xl(3,t)}catch(P){ke(t,t.return,P)}try{Ws(5,t,t.return)}catch(P){ke(t,t.return,P)}}break;case 1:Mt(e,t),Zt(t),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Mt(e,t),Zt(t),r&512&&n!==null&&_i(n,n.return),t.flags&32){var i=t.stateNode;try{sa(i,"")}catch(P){ke(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&sv(i,s),Wc(l,a);var h=Wc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?cv(i,m):f==="dangerouslySetInnerHTML"?lv(i,m):f==="children"?sa(i,m):ad(i,f,m,h)}switch(l){case"input":Bc(i,s);break;case"textarea":av(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Ci(i,!!s.multiple,C,!1):w!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[pa]=s}catch(P){ke(t,t.return,P)}}break;case 6:if(Mt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ke(t,t.return,P)}}break;case 3:if(Mt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(P){ke(t,t.return,P)}break;case 4:Mt(e,t),Zt(t);break;case 13:Mt(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vd=_e())),r&4&&Wm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Mt(e,t),Je=h):Mt(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(w=q,C=w.child,w.tag){case 0:case 11:case 14:case 15:Ws(4,w,w.return);break;case 1:_i(w,w.return);var x=w.stateNode;if(typeof x.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){ke(r,n,P)}}break;case 5:_i(w,w.return);break;case 22:if(w.memoizedState!==null){Xm(m);continue}}C!==null?(C.return=w,q=C):Xm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=uv("display",a))}catch(P){ke(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){ke(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(e,t),Zt(t),r&4&&Wm(t);break;case 21:break;default:Mt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sa(i,""),r.flags&=-33);var s=Gm(t);Sh(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Gm(t);kh(t,l,a);break;default:throw Error(F(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DS(t,e,n){q=t,Vw(t)}function Vw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=vo;var h=Je;if(vo=a,(Je=u)&&!h)for(q=i;q!==null;)a=q,u=a.child,a.tag===22&&a.memoizedState!==null?Ym(i):u!==null?(u.return=a,q=u):Ym(i);for(;s!==null;)q=s,Vw(s),s=s.sibling;q=i,vo=l,Je=h}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Qm(t)}}function Qm(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pm(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pm(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ua(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&Eh(e)}catch(w){ke(e,e.return,w)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Xm(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Ym(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Eh(e)}catch(u){ke(e,s,u)}break;case 5:var a=e.return;try{Eh(e)}catch(u){ke(e,a,u)}}}catch(u){ke(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var PS=Math.ceil,ml=Rn.ReactCurrentDispatcher,Ud=Rn.ReactCurrentOwner,At=Rn.ReactCurrentBatchConfig,ie=0,je=null,Ne=null,qe=0,yt=0,Ii=br(0),Pe=0,ba=null,Br=0,Yl=0,Fd=0,Qs=null,ht=null,Vd=0,Ki=1/0,mn=null,gl=!1,Th=null,nr=null,wo=!1,Qn=null,yl=0,Xs=0,_h=null,Uo=-1,Fo=0;function at(){return ie&6?_e():Uo!==-1?Uo:Uo=_e()}function rr(t){return t.mode&1?ie&2&&qe!==0?qe&-qe:gS.transition!==null?(Fo===0&&(Fo=kv()),Fo):(t=oe,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function qt(t,e,n,r){if(50<Xs)throw Xs=0,_h=null,Error(F(185));Da(t,n,r),(!(ie&2)||t!==je)&&(t===je&&(!(ie&2)&&(Yl|=n),Pe===4&&qn(t,qe)),mt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ki=_e()+500,Gl&&Er()))}function mt(t,e){var n=t.callbackNode;gk(t,e);var r=el(t,t===je?qe:0);if(r===0)n!==null&&am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&am(n),e===1)t.tag===0?mS(Jm.bind(null,t)):Wv(Jm.bind(null,t)),hS(function(){!(ie&6)&&Er()}),n=null;else{switch(Sv(r)){case 1:n=hd;break;case 4:n=bv;break;case 16:n=Zo;break;case 536870912:n=Ev;break;default:n=Zo}n=Gw(n,jw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jw(t,e){if(Uo=-1,Fo=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=el(t,t===je?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var i=ie;ie|=2;var s=$w();(je!==t||qe!==e)&&(mn=null,Ki=_e()+500,Ur(t,e));do try{MS();break}catch(l){zw(t,l)}while(!0);Td(),ml.current=s,ie=i,Ne!==null?e=0:(je=null,qe=0,e=Pe)}if(e!==0){if(e===2&&(i=Zc(t),i!==0&&(r=i,e=Ih(t,i))),e===1)throw n=ba,Ur(t,0),qn(t,r),mt(t,_e()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!LS(i)&&(e=vl(t,r),e===2&&(s=Zc(t),s!==0&&(r=s,e=Ih(t,s))),e===1))throw n=ba,Ur(t,0),qn(t,r),mt(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:xr(t,ht,mn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Vd+500-_e(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oh(xr.bind(null,t,ht,mn),e);break}xr(t,ht,mn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Bt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PS(r/1960))-r,10<r){t.timeoutHandle=oh(xr.bind(null,t,ht,mn),r);break}xr(t,ht,mn);break;case 5:xr(t,ht,mn);break;default:throw Error(F(329))}}}return mt(t,_e()),t.callbackNode===n?jw.bind(null,t):null}function Ih(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=vl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Ch(e)),t}function Ch(t){ht===null?ht=t:ht.push.apply(ht,t)}function LS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Fd,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(ie&6)throw Error(F(327));Di();var e=el(t,0);if(!(e&1))return mt(t,_e()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=Ih(t,r))}if(n===1)throw n=ba,Ur(t,0),qn(t,e),mt(t,_e()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ht,mn),mt(t,_e()),null}function jd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ki=_e()+500,Gl&&Er())}}function qr(t){Qn!==null&&Qn.tag===0&&!(ie&6)&&Di();var e=ie;ie|=1;var n=At.transition,r=oe;try{if(At.transition=null,oe=1,t)return t()}finally{oe=r,At.transition=n,ie=e,!(ie&6)&&Er()}}function zd(){yt=Ii.current,pe(Ii)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:qi(),pe(ft),pe(et),Ad();break;case 5:xd(r);break;case 4:qi();break;case 13:pe(ge);break;case 19:pe(ge);break;case 10:_d(r.type._context);break;case 22:case 23:zd()}n=n.return}if(je=t,Ne=t=ir(t.current,null),qe=yt=e,Pe=0,ba=null,Fd=Yl=Br=0,ht=Qs=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Dr=null}return t}function zw(t,e){do{var n=Ne;try{if(Td(),Lo.current=pl,fl){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if($r=0,Fe=De=ye=null,Gs=!1,ya=0,Ud.current=null,n===null||n.return===null){Pe=1,ba=e,Ne=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var w=f.alternate;w?(f.updateQueue=w.updateQueue,f.memoizedState=w.memoizedState,f.lanes=w.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Vm(a);if(C!==null){C.flags&=-257,jm(C,a,l,s,e),C.mode&1&&Fm(s,h,e),e=C,u=h;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){Fm(s,h,e),$d();break e}u=Error(F(426))}}else if(me&&l.mode&1){var V=Vm(a);if(V!==null){!(V.flags&65536)&&(V.flags|=256),jm(V,a,l,s,e),kd(Hi(u,l));break e}}s=u=Hi(u,l),Pe!==4&&(Pe=2),Qs===null?Qs=[s]:Qs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Sw(s,u,e);Dm(s,T);break e;case 1:l=u;var E=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nr===null||!nr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Tw(s,l,e);Dm(s,L);break e}}s=s.return}while(s!==null)}qw(n)}catch(A){e=A,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function $w(){var t=ml.current;return ml.current=pl,t===null?pl:t}function $d(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),je===null||!(Br&268435455)&&!(Yl&268435455)||qn(je,qe)}function vl(t,e){var n=ie;ie|=2;var r=$w();(je!==t||qe!==e)&&(mn=null,Ur(t,e));do try{OS();break}catch(i){zw(t,i)}while(!0);if(Td(),ie=n,ml.current=r,Ne!==null)throw Error(F(261));return je=null,qe=0,Pe}function OS(){for(;Ne!==null;)Bw(Ne)}function MS(){for(;Ne!==null&&!ok();)Bw(Ne)}function Bw(t){var e=Kw(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?qw(t):Ne=e,Ud.current=null}function qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ne=null;return}}else if(n=NS(n,e,yt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Pe===0&&(Pe=5)}function xr(t,e,n){var r=oe,i=At.transition;try{At.transition=null,oe=1,US(t,e,n,r)}finally{At.transition=i,oe=r}return null}function US(t,e,n,r){do Di();while(Qn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yk(t,s),t===je&&(Ne=je=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Gw(Zo,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var a=oe;oe=1;var l=ie;ie|=4,Ud.current=null,RS(t,n),Fw(n,t),rS(sh),tl=!!ih,sh=ih=null,t.current=n,DS(n),lk(),ie=l,oe=a,At.transition=s}else t.current=n;if(wo&&(wo=!1,Qn=t,yl=i),s=t.pendingLanes,s===0&&(nr=null),hk(n.stateNode),mt(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=Th,Th=null,t;return yl&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===_h?Xs++:(Xs=0,_h=t):Xs=0,Er(),null}function Di(){if(Qn!==null){var t=Sv(yl),e=At.transition,n=oe;try{if(At.transition=null,oe=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,yl=0,ie&6)throw Error(F(331));var i=ie;for(ie|=4,q=t.current;q!==null;){var s=q,a=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Ws(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var w=f.sibling,C=f.return;if(Ow(f),f===h){q=null;break}if(w!==null){w.return=C,q=w;break}q=C}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,q=a;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,q=T;break e}q=s.return}}var E=t.current;for(q=E;q!==null;){a=q;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,q=_;else e:for(a=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(A){ke(l,l.return,A)}if(l===a){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(ie=i,Er(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{oe=n,At.transition=e}}return!1}function Zm(t,e,n){e=Hi(n,e),e=Sw(t,e,1),t=tr(t,e,1),e=at(),t!==null&&(Da(t,1,e),mt(t,e))}function ke(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Hi(n,t),t=Tw(e,t,1),e=tr(e,t,1),t=at(),e!==null&&(Da(e,1,t),mt(e,t));break}}e=e.return}}function FS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(qe&n)===n&&(Pe===4||Pe===3&&(qe&130023424)===qe&&500>_e()-Vd?Ur(t,0):Fd|=n),mt(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=at();t=_n(t,e),t!==null&&(Da(t,e,n),mt(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Hw(t,n)}var Kw;Kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,CS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,me&&e.flags&1048576&&Qv(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mo(t,e),t=e.pendingProps;var i=zi(e,et.current);Ri(e,n),i=Dd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cd(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&bd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$S(r),t=Ut(r,t),i){case 0:e=gh(null,e,r,t,n);break e;case 1:e=Bm(null,e,r,t,n);break e;case 11:e=zm(null,e,r,t,n);break e;case 14:e=$m(null,e,r,Ut(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Bm(t,e,r,i,n);case 3:e:{if(Nw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tw(t,e),hl(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(F(423)),e),e=qm(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(F(424)),e),e=qm(t,e,r,n,i);break e}else for(vt=er(e.stateNode.containerInfo.firstChild),wt=e,me=!0,Vt=null,n=Zv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=In(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return nw(e),t===null&&hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,ah(r,i)?a=null:s!==null&&ah(r,s)&&(e.flags|=32),Cw(t,e),st(t,e,a,n),e.child;case 6:return t===null&&hh(e),null;case 13:return xw(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),zm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ce(ul,r._currentValue),r._currentValue=a,s!==null)if(Kt(s.value,a)){if(s.children===i.children&&!ft.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(F(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),dh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),$m(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Mo(t,e),e.tag=1,pt(r)?(t=!0,al(e)):t=!1,Ri(e,n),kw(e,r,i),ph(e,r,i,n),yh(null,e,r,!0,t,n);case 19:return Aw(t,e,n);case 22:return Iw(t,e,n)}throw Error(F(156,e.tag))};function Gw(t,e){return wv(t,e)}function zS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new zS(t,e,n,r)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $S(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ld)return 11;if(t===ud)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vo(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Bd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gi:return Fr(n.children,i,s,e);case od:a=8,i|=8;break;case Fc:return t=xt(12,n,e,i|2),t.elementType=Fc,t.lanes=s,t;case Vc:return t=xt(13,n,e,i),t.elementType=Vc,t.lanes=s,t;case jc:return t=xt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case nv:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:a=10;break e;case tv:a=9;break e;case ld:a=11;break e;case ud:a=14;break e;case zn:a=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=xt(22,t,r,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,r,i,s,a,l,u){return t=new BS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),t}function qS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ww(t){if(!t)return hr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return Gv(t,n,e)}return e}function Qw(t,e,n,r,i,s,a,l,u){return t=qd(n,r,!0,t,i,s,a,l,u),t.context=Ww(null),n=t.current,r=at(),i=rr(n),s=kn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Da(t,i,r),mt(t,r),t}function Zl(t,e,n,r){var i=e.current,s=at(),a=rr(i);return n=Ww(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,a),t!==null&&(qt(t,i,a,s),Po(t,i,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hd(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function HS(){return null}var Xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}eu.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Zl(t,e,null,null)};eu.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Zl(null,t,null,null)}),e[Tn]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&Nv(t)}};function Gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function KS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=wl(a);s.call(h)}}var a=Qw(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=a,t[Tn]=a.current,da(t.nodeType===8?t.parentNode:t),qr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=wl(u);l.call(h)}}var u=qd(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=u,t[Tn]=u.current,da(t.nodeType===8?t.parentNode:t),qr(function(){Zl(e,u,n,r)}),u}function nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=wl(a);l.call(u)}}Zl(e,a,t,i)}else a=KS(n,e,t,i,r);return wl(a)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Us(e.pendingLanes);n!==0&&(dd(e,n|1),mt(e,_e()),!(ie&6)&&(Ki=_e()+500,Er()))}break;case 13:qr(function(){var r=_n(t,1);if(r!==null){var i=at();qt(r,t,1,i)}}),Hd(t,1)}};fd=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=at();qt(e,t,134217728,n)}Hd(t,134217728)}};_v=function(t){if(t.tag===13){var e=rr(t),n=_n(t,e);if(n!==null){var r=at();qt(n,t,e,r)}Hd(t,e)}};Iv=function(){return oe};Cv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Xc=function(t,e,n){switch(e){case"input":if(Bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(F(90));iv(r),Bc(r,i)}}}break;case"textarea":av(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};fv=jd;pv=qr;var GS={usingClientEntryPoint:!1,Events:[La,bi,Kl,hv,dv,jd]},Ls={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{$l=bo.inject(WS),rn=bo}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gd(e))throw Error(F(200));return qS(t,e,null,n)};kt.createRoot=function(t,e){if(!Gd(t))throw Error(F(299));var n=!1,r="",i=Xw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,da(t.nodeType===8?t.parentNode:t),new Kd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=yv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return qr(t)};kt.hydrate=function(t,e,n){if(!tu(e))throw Error(F(200));return nu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Gd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Xw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Qw(e,null,t,1,n??null,i,!1,s,a),t[Tn]=e.current,da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eu(e)};kt.render=function(t,e,n){if(!tu(e))throw Error(F(200));return nu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!tu(t))throw Error(F(40));return t._reactRootContainer?(qr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};kt.unstable_batchedUpdates=jd;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return nu(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function Yw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yw)}catch(t){console.error(t)}}Yw(),Xy.exports=kt;var QS=Xy.exports,ng=QS;Mc.createRoot=ng.createRoot,Mc.hydrateRoot=ng.hydrateRoot;const XS=()=>{};var rg={};/**
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
*/const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let w=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(w=64)),r.push(n[f],n[m],n[w],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new JS;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),u!==64){const m=l<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(t){const e=Jw(t);return Zw.encodeByteArray(e,!0)},bl=function(t){return ZS(t).replace(/\./g,"")},eb=function(t){try{return Zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function eT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const tT=()=>eT().__FIREBASE_DEFAULTS__,nT=()=>{if(typeof process>"u"||typeof rg>"u")return;const t=rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eb(t[1]);return e&&JSON.parse(e)},ru=()=>{try{return XS()||tT()||nT()||rT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tb=t=>{var e,n;return(n=(e=ru())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},iT=t=>{const e=tb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nb=()=>{var t;return(t=ru())==null?void 0:t.config},rb=t=>{var e;return(e=ru())==null?void 0:e[`_${t}`]};/**
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
*/class sT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
*/function rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ib(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
*/function aT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bl(JSON.stringify(n)),bl(JSON.stringify(a)),""].join(".")}const Ys={};function oT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?t.emulator.push(e):t.prod.push(e);return t}function lT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ig=!1;function sb(t,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||Ys[t]===e||Ys[t]||ig)return;Ys[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=oT().prod.length>0;function s(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ig=!0,s()},m}function h(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=lT(r),w=n("text"),C=document.getElementById(w)||document.createElement("span"),x=n("learnmore"),P=document.getElementById(x)||document.createElement("a"),V=n("preprendIcon"),T=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;a(E),h(P,x);const _=u();l(T,V),E.append(T,C,P,_),document.body.appendChild(E)}i?(C.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
*/function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function cT(){var t;const e=(t=ru())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ab(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fT(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pT(){return!cT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ob(){try{return typeof indexedDB=="object"}catch{return!1}}function lb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function mT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
*/const gT="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gT,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?yT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Qt(i,l,r)}}function yT(t,e){return t.replace(vT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vT=/\{\$([^}]+)}/g;function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(sg(s)&&sg(a)){if(!dr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sg(t){return t!==null&&typeof t=="object"}/**
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
*/function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bT(t,e){const n=new ET(t,e);return n.subscribe.bind(n)}class ET{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
*/const ST=1e3,TT=2,_T=4*60*60*1e3,IT=.5;function ag(t,e=ST,n=TT){const r=e*Math.pow(n,t),i=Math.round(IT*r*(Math.random()-.5)*2);return Math.min(_T,r+i)}/**
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
*/function nt(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ar="[DEFAULT]";/**
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
*/class CT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xT(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NT(t){return t===Ar?void 0:t}function xT(t){return t.instantiationMode==="EAGER"}/**
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
*/class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const RT={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},DT=ee.INFO,PT={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},LT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=DT,this._logHandler=LT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const OT=(t,e)=>e.some(n=>t instanceof n);let og,lg;function MT(){return og||(og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UT(){return lg||(lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ub=new WeakMap,Nh=new WeakMap,cb=new WeakMap,kc=new WeakMap,Wd=new WeakMap;function FT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(sr(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ub.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function VT(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Nh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jT(t){xh=t(xh)}function zT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return cb.set(r,e.sort?e.sort():[e]),sr(r)}:UT().includes(t)?function(...e){return t.apply(Sc(this),e),sr(ub.get(this))}:function(...e){return sr(t.apply(Sc(this),e))}}function $T(t){return typeof t=="function"?zT(t):(t instanceof IDBTransaction&&VT(t),OT(t,MT())?new Proxy(t,xh):t)}function sr(t){if(t instanceof IDBRequest)return FT(t);if(kc.has(t))return kc.get(t);const e=$T(t);return e!==t&&(kc.set(t,e),Wd.set(e,t)),e}const Sc=t=>Wd.get(t);function hb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=sr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(sr(a.result),u.oldVersion,u.newVersion,sr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const BT=["get","getKey","getAll","getAllKeys","count"],qT=["put","add","delete","clear"],Tc=new Map;function ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tc.get(e))return Tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BT.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Tc.set(e,s),s}jT(t=>({...t,get:(e,n,r)=>ug(e,n)||t.get(e,n,r),has:(e,n)=>!!ug(e,n)||t.has(e,n)}));/**
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
*/class HT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(KT(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function KT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",cg="0.14.5";/**
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
*/const Cn=new iu("@firebase/app"),GT="@firebase/app-compat",WT="@firebase/analytics-compat",QT="@firebase/analytics",XT="@firebase/app-check-compat",YT="@firebase/app-check",JT="@firebase/auth",ZT="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/data-connect",n_="@firebase/database-compat",r_="@firebase/functions",i_="@firebase/functions-compat",s_="@firebase/installations",a_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",u_="@firebase/performance",c_="@firebase/performance-compat",h_="@firebase/remote-config",d_="@firebase/remote-config-compat",f_="@firebase/storage",p_="@firebase/storage-compat",m_="@firebase/firestore",g_="@firebase/ai",y_="@firebase/firestore-compat",v_="firebase",w_="12.5.0";/**
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
*/const Rh="[DEFAULT]",b_={[Ah]:"fire-core",[GT]:"fire-core-compat",[QT]:"fire-analytics",[WT]:"fire-analytics-compat",[YT]:"fire-app-check",[XT]:"fire-app-check-compat",[JT]:"fire-auth",[ZT]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-data-connect",[n_]:"fire-rtdb-compat",[r_]:"fire-fn",[i_]:"fire-fn-compat",[s_]:"fire-iid",[a_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[u_]:"fire-perf",[c_]:"fire-perf-compat",[h_]:"fire-rc",[d_]:"fire-rc-compat",[f_]:"fire-gcs",[p_]:"fire-gcs-compat",[m_]:"fire-fst",[y_]:"fire-fst-compat",[g_]:"fire-vertex","fire-js":"fire-js",[v_]:"fire-js-all"};/**
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
*/const El=new Map,E_=new Map,Dh=new Map;function hg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Dh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Dh.set(e,t);for(const n of El.values())hg(n,t);for(const n of E_.values())hg(n,t);return!0}function Zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
*/const k_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Jr("app","Firebase",k_);/**
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
*/class S_{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
*/const is=w_;function db(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=nb()),!n)throw ar.create("no-options");const s=El.get(i);if(s){if(dr(n,s.options)&&dr(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const a=new AT(i);for(const u of Dh.values())a.addComponent(u);const l=new S_(n,r,a);return El.set(i,l),l}function Qd(t=Rh){const e=El.get(t);if(!e&&t===Rh&&nb())return db();if(!e)throw ar.create("no-app",{appName:t});return e}function Rt(t,e,n){let r=b_[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}dn(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
*/const T_="firebase-heartbeat-database",__=1,Ea="firebase-heartbeat-store";let _c=null;function fb(){return _c||(_c=hb(T_,__,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),_c}async function I_(t){try{const e=(await fb()).transaction(Ea),n=await e.objectStore(Ea).get(pb(t));return await e.done,n}catch(e){if(e instanceof Qt)Cn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function dg(t,e){try{const n=(await fb()).transaction(Ea,"readwrite");await n.objectStore(Ea).put(e,pb(t)),await n.done}catch(n){if(n instanceof Qt)Cn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function pb(t){return`${t.name}!${t.options.appId}`}/**
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
*/const C_=1024,N_=30;class x_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new R_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>N_){const s=D_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fg(),{heartbeatsToSend:r,unsentEntries:i}=A_(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function fg(){return new Date().toISOString().substring(0,10)}function A_(t,e=C_){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),pg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class R_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ob()?lb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await I_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function pg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}function D_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
*/function P_(t){dn(new Gt("platform-logger",e=>new HT(e),"PRIVATE")),dn(new Gt("heartbeat",e=>new x_(e),"PRIVATE")),Rt(Ah,cg,t),Rt(Ah,cg,"esm2020"),Rt("fire-js","")}P_("");var L_="firebase",O_="12.5.0";/**
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
*/Rt(L_,O_,"app");const mb="@firebase/installations",Xd="0.6.19";/**
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
*/const gb=1e4,yb=`w:${Xd}`,vb="FIS_v2",M_="https://firebaseinstallations.googleapis.com/v1",U_=60*60*1e3,F_="installations",V_="Installations";/**
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
*/const j_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hr=new Jr(F_,V_,j_);function wb(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
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
*/function bb({projectId:t}){return`${M_}/projects/${t}/installations`}function Eb(t){return{token:t.token,requestStatus:2,expiresIn:$_(t.expiresIn),creationTime:Date.now()}}async function kb(t,e){const n=(await e.json()).error;return Hr.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Sb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function z_(t,{refreshToken:e}){const n=Sb(t);return n.append("Authorization",B_(e)),n}async function Tb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $_(t){return Number(t.replace("s","000"))}function B_(t){return`${vb} ${t}`}/**
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
*/async function q_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bb(t),i=Sb(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:vb,appId:t.appId,sdkVersion:yb},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Tb(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Eb(h.authToken)}}else throw await kb("Create Installation",u)}/**
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
*/function _b(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
*/function H_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
*/const K_=/^[cdef][\w-]{21}$/,Ph="";function G_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=W_(t);return K_.test(e)?e:Ph}catch{return Ph}}function W_(t){return H_(t).substr(0,22)}/**
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
*/function su(t){return`${t.appName}!${t.appId}`}/**
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
*/const Ib=new Map;function Cb(t,e){const n=su(t);Nb(n,e),Q_(n,e)}function Nb(t,e){const n=Ib.get(t);if(n)for(const r of n)r(e)}function Q_(t,e){const n=X_();n&&n.postMessage({key:t,fid:e}),Y_()}let Lr=null;function X_(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=t=>{Nb(t.data.key,t.data.fid)}),Lr}function Y_(){Ib.size===0&&Lr&&(Lr.close(),Lr=null)}/**
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
*/const J_="firebase-installations-database",Z_=1,Kr="firebase-installations-store";let Ic=null;function Yd(){return Ic||(Ic=hb(J_,Z_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kr)}}})),Ic}async function kl(t,e){const n=su(t),r=(await Yd()).transaction(Kr,"readwrite"),i=r.objectStore(Kr),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&Cb(t,e.fid),e}async function xb(t){const e=su(t),n=(await Yd()).transaction(Kr,"readwrite");await n.objectStore(Kr).delete(e),await n.done}async function au(t,e){const n=su(t),r=(await Yd()).transaction(Kr,"readwrite"),i=r.objectStore(Kr),s=await i.get(n),a=e(s);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&Cb(t,a.fid),a}/**
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
*/async function Jd(t){let e;const n=await au(t.appConfig,r=>{const i=eI(r),s=tI(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ph?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eI(t){const e=t||{fid:G_(),registrationStatus:0};return Ab(e)}function tI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=nI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rI(t)}:{installationEntry:e}}async function nI(t,e){try{const n=await q_(t,e);return kl(t.appConfig,n)}catch(n){throw wb(n)&&n.customData.serverCode===409?await xb(t.appConfig):await kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rI(t){let e=await mg(t.appConfig);for(;e.registrationStatus===1;)await _b(100),e=await mg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jd(t);return r||n}return e}function mg(t){return au(t,e=>{if(!e)throw Hr.create("installation-not-found");return Ab(e)})}function Ab(t){return iI(t)?{fid:t.fid,registrationStatus:0}:t}function iI(t){return t.registrationStatus===1&&t.registrationTime+gb<Date.now()}/**
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
*/async function sI({appConfig:t,heartbeatServiceProvider:e},n){const r=aI(t,n),i=z_(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:yb,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Tb(()=>fetch(r,l));if(u.ok){const h=await u.json();return Eb(h)}else throw await kb("Generate Auth Token",u)}function aI(t,{fid:e}){return`${bb(t)}/${e}/authTokens:generate`}/**
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
*/async function Zd(t,e=!1){let n;const r=await au(t.appConfig,i=>{if(!Rb(i))throw Hr.create("not-registered");const s=i.authToken;if(!e&&uI(s))return i;if(s.requestStatus===1)return n=oI(t,e),i;{if(!navigator.onLine)throw Hr.create("app-offline");const a=hI(i);return n=lI(t,a),a}});return n?await n:r.authToken}async function oI(t,e){let n=await gg(t.appConfig);for(;n.authToken.requestStatus===1;)await _b(100),n=await gg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zd(t,e):r}function gg(t){return au(t,e=>{if(!Rb(e))throw Hr.create("not-registered");const n=e.authToken;return dI(n)?{...e,authToken:{requestStatus:0}}:e})}async function lI(t,e){try{const n=await sI(t,e),r={...e,authToken:n};return await kl(t.appConfig,r),n}catch(n){if(wb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xb(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await kl(t.appConfig,r)}throw n}}function Rb(t){return t!==void 0&&t.registrationStatus===2}function uI(t){return t.requestStatus===2&&!cI(t)}function cI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U_}function hI(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function dI(t){return t.requestStatus===1&&t.requestTime+gb<Date.now()}/**
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
*/async function fI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jd(e);return r?r.catch(console.error):Zd(e).catch(console.error),n.fid}/**
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
*/async function pI(t,e=!1){const n=t;return await mI(n),(await Zd(n,e)).token}async function mI(t){const{registrationPromise:e}=await Jd(t);e&&await e}/**
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
*/function gI(t){if(!t||!t.options)throw Cc("App Configuration");if(!t.name)throw Cc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cc(t){return Hr.create("missing-app-config-values",{valueName:t})}/**
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
*/const Db="installations",yI="installations-internal",vI=t=>{const e=t.getProvider("app").getImmediate(),n=gI(e),r=Zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wI=t=>{const e=t.getProvider("app").getImmediate(),n=Zr(e,Db).getImmediate();return{getId:()=>fI(n),getToken:r=>pI(n,r)}};function bI(){dn(new Gt(Db,vI,"PUBLIC")),dn(new Gt(yI,wI,"PRIVATE"))}bI();Rt(mb,Xd);Rt(mb,Xd,"esm2020");/**
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
*/const Sl="analytics",EI="firebase_id",kI="origin",SI=60*1e3,TI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ef="https://www.googletagmanager.com/gtag/js";/**
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
*/const ot=new iu("@firebase/analytics");/**
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
*/const _I={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Jr("analytics","Analytics",_I);/**
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
*/function II(t){if(!t.startsWith(ef)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return ot.warn(e.message),""}return t}function Pb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CI(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NI(t,e){const n=CI("firebase-js-sdk-policy",{createScriptURL:II}),r=document.createElement("script"),i=`${ef}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function AI(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await Pb(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(l){ot.error(l)}t("config",i,s)}async function RI(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await Pb(n);for(const u of a){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ot.error(s)}}function DI(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await RI(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await AI(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){ot.error(l)}}return i}function PI(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=DI(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function LI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ef)&&n.src.includes(t))return n;return null}/**
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
*/const OI=30,MI=1e3;class UI{constructor(e={},n=MI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Lb=new UI;function FI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VI(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:FI(r)},s=TI.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();(e=u.error)!=null&&e.message&&(l=u.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function jI(t,e=Lb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw bt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new BI;return setTimeout(async()=>{l.abort()},SI),Ob({appId:r,apiKey:i,measurementId:s},a,l,e)}async function Ob(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Lb){var s;const{appId:a,measurementId:l}=t;try{await zI(r,e)}catch(u){if(l)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await VI(t);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!$I(h)){if(i.deleteThrottleMetadata(a),l)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)==null?void 0:s.httpStatus)===503?ag(n,i.intervalMillis,OI):ag(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,m),ot.debug(`Calling attemptFetch again in ${f} millis`),Ob(t,m,r,i)}}function zI(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $I(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class BI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qI(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function HI(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
*/async function KI(){if(ob())try{await lb()}catch(t){return ot.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ot.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GI(t,e,n,r,i,s,a){const l=jI(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>ot.error(w)),e.push(l);const u=KI().then(w=>{if(w)return r.getId()}),[h,f]=await Promise.all([l,u]);LI(s)||NI(s,h.measurementId),i("js",new Date);const m=(a==null?void 0:a.config)??{};return m[kI]="firebase",m.update=!0,f!=null&&(m[EI]=f),i("config",h.measurementId,m),h.measurementId}/**
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
*/class WI{constructor(e){this.app=e}_delete(){return delete Pi[this.app.options.appId],Promise.resolve()}}let Pi={},yg=[];const vg={};let Nc="dataLayer",QI="gtag",wg,tf,bg=!1;function XI(){const t=[];if(ab()&&t.push("This is a browser extension environment."),mT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function YI(t,e,n){XI();const r=t.options.appId;if(!r)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(Pi[r]!=null)throw bt.create("already-exists",{id:r});if(!bg){xI(Nc);const{wrappedGtag:i,gtagCore:s}=PI(Pi,yg,vg,Nc,QI);tf=i,wg=s,bg=!0}return Pi[r]=GI(t,yg,vg,e,wg,Nc,n),new WI(t)}function JI(t=Qd()){t=nt(t);const e=Zr(t,Sl);return e.isInitialized()?e.getImmediate():ZI(t)}function ZI(t,e={}){const n=Zr(t,Sl);if(n.isInitialized()){const r=n.getImmediate();if(dr(e,n.getOptions()))return r;throw bt.create("already-initialized")}return n.initialize({options:e})}function eC(t,e,n){t=nt(t),HI(tf,Pi[t.app.options.appId],e,n).catch(r=>ot.error(r))}function tC(t,e,n,r){t=nt(t),qI(tf,Pi[t.app.options.appId],e,n,r).catch(i=>ot.error(i))}const Eg="@firebase/analytics",kg="0.10.19";function nC(){dn(new Gt(Sl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return YI(r,i,n)},"PUBLIC")),dn(new Gt("analytics-internal",t,"PRIVATE")),Rt(Eg,kg),Rt(Eg,kg,"esm2020");function t(e){try{const n=e.getProvider(Sl).getImmediate();return{logEvent:(r,i,s)=>tC(n,r,i,s),setUserProperties:(r,i)=>eC(n,r,i)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}nC();var Sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,Mb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,p){function y(){}y.prototype=p.prototype,v.F=p.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(k,S,I){for(var b=Array(arguments.length-2),be=2;be<arguments.length;be++)b[be-2]=arguments[be];return p.prototype[S].apply(k,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,y){y||(y=0);const k=Array(16);if(typeof p=="string")for(var S=0;S<16;++S)k[S]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(S=0;S<16;++S)k[S]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=v.g[0],y=v.g[1],S=v.g[2];let I=v.g[3],b;b=p+(I^y&(S^I))+k[0]+3614090360&4294967295,p=y+(b<<7&4294967295|b>>>25),b=I+(S^p&(y^S))+k[1]+3905402710&4294967295,I=p+(b<<12&4294967295|b>>>20),b=S+(y^I&(p^y))+k[2]+606105819&4294967295,S=I+(b<<17&4294967295|b>>>15),b=y+(p^S&(I^p))+k[3]+3250441966&4294967295,y=S+(b<<22&4294967295|b>>>10),b=p+(I^y&(S^I))+k[4]+4118548399&4294967295,p=y+(b<<7&4294967295|b>>>25),b=I+(S^p&(y^S))+k[5]+1200080426&4294967295,I=p+(b<<12&4294967295|b>>>20),b=S+(y^I&(p^y))+k[6]+2821735955&4294967295,S=I+(b<<17&4294967295|b>>>15),b=y+(p^S&(I^p))+k[7]+4249261313&4294967295,y=S+(b<<22&4294967295|b>>>10),b=p+(I^y&(S^I))+k[8]+1770035416&4294967295,p=y+(b<<7&4294967295|b>>>25),b=I+(S^p&(y^S))+k[9]+2336552879&4294967295,I=p+(b<<12&4294967295|b>>>20),b=S+(y^I&(p^y))+k[10]+4294925233&4294967295,S=I+(b<<17&4294967295|b>>>15),b=y+(p^S&(I^p))+k[11]+2304563134&4294967295,y=S+(b<<22&4294967295|b>>>10),b=p+(I^y&(S^I))+k[12]+1804603682&4294967295,p=y+(b<<7&4294967295|b>>>25),b=I+(S^p&(y^S))+k[13]+4254626195&4294967295,I=p+(b<<12&4294967295|b>>>20),b=S+(y^I&(p^y))+k[14]+2792965006&4294967295,S=I+(b<<17&4294967295|b>>>15),b=y+(p^S&(I^p))+k[15]+1236535329&4294967295,y=S+(b<<22&4294967295|b>>>10),b=p+(S^I&(y^S))+k[1]+4129170786&4294967295,p=y+(b<<5&4294967295|b>>>27),b=I+(y^S&(p^y))+k[6]+3225465664&4294967295,I=p+(b<<9&4294967295|b>>>23),b=S+(p^y&(I^p))+k[11]+643717713&4294967295,S=I+(b<<14&4294967295|b>>>18),b=y+(I^p&(S^I))+k[0]+3921069994&4294967295,y=S+(b<<20&4294967295|b>>>12),b=p+(S^I&(y^S))+k[5]+3593408605&4294967295,p=y+(b<<5&4294967295|b>>>27),b=I+(y^S&(p^y))+k[10]+38016083&4294967295,I=p+(b<<9&4294967295|b>>>23),b=S+(p^y&(I^p))+k[15]+3634488961&4294967295,S=I+(b<<14&4294967295|b>>>18),b=y+(I^p&(S^I))+k[4]+3889429448&4294967295,y=S+(b<<20&4294967295|b>>>12),b=p+(S^I&(y^S))+k[9]+568446438&4294967295,p=y+(b<<5&4294967295|b>>>27),b=I+(y^S&(p^y))+k[14]+3275163606&4294967295,I=p+(b<<9&4294967295|b>>>23),b=S+(p^y&(I^p))+k[3]+4107603335&4294967295,S=I+(b<<14&4294967295|b>>>18),b=y+(I^p&(S^I))+k[8]+1163531501&4294967295,y=S+(b<<20&4294967295|b>>>12),b=p+(S^I&(y^S))+k[13]+2850285829&4294967295,p=y+(b<<5&4294967295|b>>>27),b=I+(y^S&(p^y))+k[2]+4243563512&4294967295,I=p+(b<<9&4294967295|b>>>23),b=S+(p^y&(I^p))+k[7]+1735328473&4294967295,S=I+(b<<14&4294967295|b>>>18),b=y+(I^p&(S^I))+k[12]+2368359562&4294967295,y=S+(b<<20&4294967295|b>>>12),b=p+(y^S^I)+k[5]+4294588738&4294967295,p=y+(b<<4&4294967295|b>>>28),b=I+(p^y^S)+k[8]+2272392833&4294967295,I=p+(b<<11&4294967295|b>>>21),b=S+(I^p^y)+k[11]+1839030562&4294967295,S=I+(b<<16&4294967295|b>>>16),b=y+(S^I^p)+k[14]+4259657740&4294967295,y=S+(b<<23&4294967295|b>>>9),b=p+(y^S^I)+k[1]+2763975236&4294967295,p=y+(b<<4&4294967295|b>>>28),b=I+(p^y^S)+k[4]+1272893353&4294967295,I=p+(b<<11&4294967295|b>>>21),b=S+(I^p^y)+k[7]+4139469664&4294967295,S=I+(b<<16&4294967295|b>>>16),b=y+(S^I^p)+k[10]+3200236656&4294967295,y=S+(b<<23&4294967295|b>>>9),b=p+(y^S^I)+k[13]+681279174&4294967295,p=y+(b<<4&4294967295|b>>>28),b=I+(p^y^S)+k[0]+3936430074&4294967295,I=p+(b<<11&4294967295|b>>>21),b=S+(I^p^y)+k[3]+3572445317&4294967295,S=I+(b<<16&4294967295|b>>>16),b=y+(S^I^p)+k[6]+76029189&4294967295,y=S+(b<<23&4294967295|b>>>9),b=p+(y^S^I)+k[9]+3654602809&4294967295,p=y+(b<<4&4294967295|b>>>28),b=I+(p^y^S)+k[12]+3873151461&4294967295,I=p+(b<<11&4294967295|b>>>21),b=S+(I^p^y)+k[15]+530742520&4294967295,S=I+(b<<16&4294967295|b>>>16),b=y+(S^I^p)+k[2]+3299628645&4294967295,y=S+(b<<23&4294967295|b>>>9),b=p+(S^(y|~I))+k[0]+4096336452&4294967295,p=y+(b<<6&4294967295|b>>>26),b=I+(y^(p|~S))+k[7]+1126891415&4294967295,I=p+(b<<10&4294967295|b>>>22),b=S+(p^(I|~y))+k[14]+2878612391&4294967295,S=I+(b<<15&4294967295|b>>>17),b=y+(I^(S|~p))+k[5]+4237533241&4294967295,y=S+(b<<21&4294967295|b>>>11),b=p+(S^(y|~I))+k[12]+1700485571&4294967295,p=y+(b<<6&4294967295|b>>>26),b=I+(y^(p|~S))+k[3]+2399980690&4294967295,I=p+(b<<10&4294967295|b>>>22),b=S+(p^(I|~y))+k[10]+4293915773&4294967295,S=I+(b<<15&4294967295|b>>>17),b=y+(I^(S|~p))+k[1]+2240044497&4294967295,y=S+(b<<21&4294967295|b>>>11),b=p+(S^(y|~I))+k[8]+1873313359&4294967295,p=y+(b<<6&4294967295|b>>>26),b=I+(y^(p|~S))+k[15]+4264355552&4294967295,I=p+(b<<10&4294967295|b>>>22),b=S+(p^(I|~y))+k[6]+2734768916&4294967295,S=I+(b<<15&4294967295|b>>>17),b=y+(I^(S|~p))+k[13]+1309151649&4294967295,y=S+(b<<21&4294967295|b>>>11),b=p+(S^(y|~I))+k[4]+4149444226&4294967295,p=y+(b<<6&4294967295|b>>>26),b=I+(y^(p|~S))+k[11]+3174756917&4294967295,I=p+(b<<10&4294967295|b>>>22),b=S+(p^(I|~y))+k[2]+718787259&4294967295,S=I+(b<<15&4294967295|b>>>17),b=y+(I^(S|~p))+k[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.v=function(v,p){p===void 0&&(p=v.length);const y=p-this.blockSize,k=this.C;let S=this.h,I=0;for(;I<p;){if(S==0)for(;I<=y;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(k[S++]=v.charCodeAt(I++),S==this.blockSize){i(this,k),S=0;break}}else for(;I<p;)if(k[S++]=v[I++],S==this.blockSize){i(this,k),S=0;break}}this.h=S,this.o+=p},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;p=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=p&255,p/=256;for(this.v(v),v=Array(16),p=0,y=0;y<4;++y)for(let k=0;k<32;k+=8)v[p++]=this.g[y]>>>k&255;return v};function s(v,p){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=p(v)}function a(v,p){this.h=p;const y=[];let k=!0;for(let S=v.length-1;S>=0;S--){const I=v[S]|0;k&&I==p||(y[S]=I,k=!1)}this.g=y}var l={};function u(v){return-128<=v&&v<128?s(v,function(p){return new a([p|0],p<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return V(h(-v));const p=[];let y=1;for(let k=0;v>=y;k++)p[k]=v/y|0,y*=4294967296;return new a(p,0)}function f(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return V(f(v.substring(1),p));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(p,8));let k=m;for(let I=0;I<v.length;I+=8){var S=Math.min(8,v.length-I);const b=parseInt(v.substring(I,I+S),p);S<8?(S=h(Math.pow(p,S)),k=k.j(S).add(h(b))):(k=k.j(y),k=k.add(h(b)))}return k}var m=u(0),w=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(P(this))return-V(this).m();let v=0,p=1;for(let y=0;y<this.g.length;y++){const k=this.i(y);v+=(k>=0?k:4294967296+k)*p,p*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(P(this))return"-"+V(this).toString(v);const p=h(Math.pow(v,6));var y=this;let k="";for(;;){const S=L(y,p).g;y=T(y,S.j(p));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=S,x(y))return I+k;for(;I.length<6;)I="0"+I;k=I+k}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=T(this,v),P(v)?-1:x(v)?0:1};function V(v){const p=v.g.length,y=[];for(let k=0;k<p;k++)y[k]=~v.g[k];return new a(y,~v.h).add(w)}t.abs=function(){return P(this)?V(this):this},t.add=function(v){const p=Math.max(this.g.length,v.g.length),y=[];let k=0;for(let S=0;S<=p;S++){let I=k+(this.i(S)&65535)+(v.i(S)&65535),b=(I>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);k=b>>>16,I&=65535,b&=65535,y[S]=b<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function T(v,p){return v.add(V(p))}t.j=function(v){if(x(this)||x(v))return m;if(P(this))return P(v)?V(this).j(V(v)):V(V(this).j(v));if(P(v))return V(this.j(V(v)));if(this.l(C)<0&&v.l(C)<0)return h(this.m()*v.m());const p=this.g.length+v.g.length,y=[];for(var k=0;k<2*p;k++)y[k]=0;for(k=0;k<this.g.length;k++)for(let S=0;S<v.g.length;S++){const I=this.i(k)>>>16,b=this.i(k)&65535,be=v.i(S)>>>16,Oe=v.i(S)&65535;y[2*k+2*S]+=b*Oe,E(y,2*k+2*S),y[2*k+2*S+1]+=I*Oe,E(y,2*k+2*S+1),y[2*k+2*S+1]+=b*be,E(y,2*k+2*S+1),y[2*k+2*S+2]+=I*be,E(y,2*k+2*S+2)}for(v=0;v<p;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=p;v<2*p;v++)y[v]=0;return new a(y,0)};function E(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function _(v,p){this.g=v,this.h=p}function L(v,p){if(x(p))throw Error("division by zero");if(x(v))return new _(m,m);if(P(v))return p=L(V(v),p),new _(V(p.g),V(p.h));if(P(p))return p=L(v,V(p)),new _(V(p.g),p.h);if(v.g.length>30){if(P(v)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var y=w,k=p;k.l(v)<=0;)y=A(y),k=A(k);var S=U(y,1),I=U(k,1);for(k=U(k,2),y=U(y,2);!x(k);){var b=I.add(k);b.l(v)<=0&&(S=S.add(y),I=b),k=U(k,1),y=U(y,1)}return p=T(v,S.j(p)),new _(S,p)}for(S=m;v.l(p)>=0;){for(y=Math.max(1,Math.floor(v.m()/p.m())),k=Math.ceil(Math.log(y)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),I=h(y),b=I.j(p);P(b)||b.l(v)>0;)y-=k,I=h(y),b=I.j(p);x(I)&&(I=w),S=S.add(I),v=T(v,b)}return new _(S,v)}t.B=function(v){return L(this,v).h},t.and=function(v){const p=Math.max(this.g.length,v.g.length),y=[];for(let k=0;k<p;k++)y[k]=this.i(k)&v.i(k);return new a(y,this.h&v.h)},t.or=function(v){const p=Math.max(this.g.length,v.g.length),y=[];for(let k=0;k<p;k++)y[k]=this.i(k)|v.i(k);return new a(y,this.h|v.h)},t.xor=function(v){const p=Math.max(this.g.length,v.g.length),y=[];for(let k=0;k<p;k++)y[k]=this.i(k)^v.i(k);return new a(y,this.h^v.h)};function A(v){const p=v.g.length+1,y=[];for(let k=0;k<p;k++)y[k]=v.i(k)<<1|v.i(k-1)>>>31;return new a(y,v.h)}function U(v,p){const y=p>>5;p%=32;const k=v.g.length-y,S=[];for(let I=0;I<k;I++)S[I]=p>0?v.i(I+y)>>>p|v.i(I+y+1)<<32-p:v.i(I+y);return new a(S,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Mb=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,or=a}).apply(typeof Sg<"u"?Sg:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ub,Vs,Fb,jo,Lh,Vb,jb,zb;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in d))break e;d=d[N]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function m(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,N,R){for(var j=Array(arguments.length-2),J=2;J<arguments.length;J++)j[J-2]=arguments[J];return c.prototype[N].apply(g,j)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const c=o.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function x(o,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=o.length||0;const R=N.length||0;o.length=d+R;for(let j=0;j<R;j++)o[d+j]=N[j]}else o.push(N)}}class P{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(o){a.setTimeout(()=>{throw o},0)}function T(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const g=_.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var _=new P(()=>new L,o=>o.reset());class L{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let A,U=!1,v=new E,p=()=>{const o=Promise.resolve(void 0);A=()=>{o.then(y)}};function y(){for(var o;o=T();){try{o.h.call(o.g)}catch(d){V(d)}var c=_;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}U=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function b(o){return/^[\s\xa0]*$/.test(o)}function be(o,c){S.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(be,S),be.prototype.init=function(o,c){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&be.Z.h.call(this)},be.prototype.h=function(){be.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Oe="closure_listenable_"+(Math.random()*1e6|0),Xt=0;function Lt(o,c,d,g,N){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++Xt,this.da=this.fa=!1}function z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function K(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function Q(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function le(o){const c={};for(const d in o)c[d]=o[d];return c}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kr(o,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)o[d]=g[d];for(let R=0;R<Se.length;R++)d=Se[R],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function Tt(o){this.src=o,this.g={},this.h=0}Tt.prototype.add=function(o,c,d,g,N){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const j=Ot(o,c,g,N);return j>-1?(c=o[j],d||(c.fa=!1)):(c=new Lt(c,this.src,R,!!g,N),c.fa=d,o.push(c)),c};function Sr(o,c){const d=c.type;if(d in o.g){var g=o.g[d],N=Array.prototype.indexOf.call(g,c,void 0),R;(R=N>=0)&&Array.prototype.splice.call(g,N,1),R&&(z(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ot(o,c,d,g){for(let N=0;N<o.length;++N){const R=o[N];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==g)return N}return-1}var Dn="closure_lm_"+(Math.random()*1e6|0),Nu={};function Xf(o,c,d,g,N){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Xf(o,c[R],d,g,N);return null}return d=Zf(d),o&&o[Oe]?o.J(c,d,l(g)?!!g.capture:!1,N):G1(o,c,d,!1,g,N)}function G1(o,c,d,g,N,R){if(!c)throw Error("Invalid event type");const j=l(N)?!!N.capture:!!N;let J=Au(o);if(J||(o[Dn]=J=new Tt(o)),d=J.add(c,d,g,j,R),d.proxy)return d;if(g=W1(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)I||(N=j),N===void 0&&(N=!1),o.addEventListener(c.toString(),g,N);else if(o.attachEvent)o.attachEvent(Jf(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function W1(){function o(d){return c.call(o.src,o.listener,d)}const c=Q1;return o}function Yf(o,c,d,g,N){if(Array.isArray(c))for(var R=0;R<c.length;R++)Yf(o,c[R],d,g,N);else g=l(g)?!!g.capture:!!g,d=Zf(d),o&&o[Oe]?(o=o.i,R=String(c).toString(),R in o.g&&(c=o.g[R],d=Ot(c,d,g,N),d>-1&&(z(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[R],o.h--)))):o&&(o=Au(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ot(c,d,g,N)),(d=o>-1?c[o]:null)&&xu(d))}function xu(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Oe])Sr(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(Jf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Au(c))?(Sr(d,o),d.h==0&&(d.src=null,c[Dn]=null)):z(o)}}}function Jf(o){return o in Nu?Nu[o]:Nu[o]="on"+o}function Q1(o,c){if(o.da)o=!0;else{c=new be(c,this);const d=o.listener,g=o.ha||o.src;o.fa&&xu(o),o=d.call(g,c)}return o}function Au(o){return o=o[Dn],o instanceof Tt?o:null}var Ru="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zf(o){return typeof o=="function"?o:(o[Ru]||(o[Ru]=function(c){return o.handleEvent(c)}),o[Ru])}function Ge(){k.call(this),this.i=new Tt(this),this.M=this,this.G=null}m(Ge,k),Ge.prototype[Oe]=!0,Ge.prototype.removeEventListener=function(o,c,d,g){Yf(this,o,c,d,g)};function rt(o,c){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new S(c,o);else if(c instanceof S)c.target=c.target||o;else{var N=c;c=new S(g,o),kr(c,N)}N=!0;let R,j;if(d)for(j=d.length-1;j>=0;j--)R=c.g=d[j],N=Ha(R,g,!0,c)&&N;if(R=c.g=o,N=Ha(R,g,!0,c)&&N,N=Ha(R,g,!1,c)&&N,d)for(j=0;j<d.length;j++)R=c.g=d[j],N=Ha(R,g,!1,c)&&N}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let g=0;g<d.length;g++)z(d[g]);delete o.g[c],o.h--}}this.G=null},Ge.prototype.J=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},Ge.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function Ha(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let R=0;R<c.length;++R){const j=c[R];if(j&&!j.da&&j.capture==d){const J=j.listener,Re=j.ha||j.src;j.fa&&Sr(o.i,j),N=J.call(Re,g)!==!1&&N}}return N&&!g.defaultPrevented}function X1(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ep(o){o.g=X1(()=>{o.g=null,o.i&&(o.i=!1,ep(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Y1 extends k{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(o){k.call(this),this.h=o,this.g={}}m(hs,k);var tp=[];function np(o){K(o.g,function(c,d){this.g.hasOwnProperty(d)&&xu(c)},o),o.g={}}hs.prototype.N=function(){hs.Z.N.call(this),np(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Du=a.JSON.stringify,J1=a.JSON.parse,Z1=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function rp(){}function ip(){}var ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pu(){S.call(this,"d")}m(Pu,S);function Lu(){S.call(this,"c")}m(Lu,S);var Tr={},sp=null;function Ka(){return sp=sp||new Ge}Tr.Ia="serverreachability";function ap(o){S.call(this,Tr.Ia,o)}m(ap,S);function fs(o){const c=Ka();rt(c,new ap(c))}Tr.STAT_EVENT="statevent";function op(o,c){S.call(this,Tr.STAT_EVENT,o),this.stat=c}m(op,S);function it(o){const c=Ka();rt(c,new op(c,o))}Tr.Ja="timingevent";function lp(o,c){S.call(this,Tr.Ja,o),this.size=c}m(lp,S);function ps(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function eE(o,c,d,g,N,R){o.info(function(){if(o.g)if(R){var j="",J=R.split("&");for(let de=0;de<J.length;de++){var Re=J[de].split("=");if(Re.length>1){const Me=Re[0];Re=Re[1];const Jt=Me.split("_");j=Jt.length>=2&&Jt[1]=="type"?j+(Me+"="+Re+"&"):j+(Me+"=redacted&")}}}else j=null;else j=R;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+j})}function tE(o,c,d,g,N,R,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+R+" "+j})}function si(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+rE(o,d)+(g?" "+g:"")})}function nE(o,c){o.info(function(){return"TIMEOUT: "+c})}ms.prototype.info=function(){};function rE(o,c){if(!o.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var d=R[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return Du(R)}catch{return c}}var Ga={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},up={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cp;function Ou(){}m(Ou,rp),Ou.prototype.g=function(){return new XMLHttpRequest},cp=new Ou;function gs(o){return encodeURIComponent(String(o))}function iE(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function Pn(o,c,d,g){this.j=o,this.i=c,this.l=d,this.S=g||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var dp={},Mu={};function Uu(o,c,d){o.M=1,o.A=Qa(Yt(c)),o.u=d,o.R=!0,fp(o,null)}function fp(o,c){o.F=Date.now(),Wa(o),o.B=Yt(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Ip(d.i,"t",g),o.C=0,d=o.j.L,o.h=new hp,o.g=qp(o.j,d?c:null,!o.u),o.P>0&&(o.O=new Y1(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,g=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(tp[0]=N.toString()),N=tp);for(let R=0;R<N.length;R++){const j=Xf(d,N[R],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?le(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),fs(),eE(o.i,o.v,o.B,o.l,o.S,o.u)}Pn.prototype.ba=function(o){o=o.target;const c=this.O;c&&Mn(o)==3?c.j():this.Y(o)},Pn.prototype.Y=function(o){try{if(o==this.g)e:{const J=Mn(this.g),Re=this.g.ya(),de=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Pp(this.g)))){this.K||J!=4||Re==7||(Re==8||de<=0?fs(3):fs(2)),Fu(this);var c=this.g.ca();this.X=c;var d=sE(this);if(this.o=c==200,tE(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var R=g;break t}}R=null}if(o=R)si(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vu(this,o);else{this.o=!1,this.m=3,it(12),_r(this),ys(this);break e}}if(this.R){o=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=aE(this,d),Me==Mu){J==4&&(this.m=4,it(14),o=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==dp){this.m=4,it(15),si(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else si(this.i,this.l,Me,null),Vu(this,Me);if(pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,it(16),o=!1),this.o=this.o&&o,!o)si(this.i,this.l,d,"[Invalid Chunked Response]"),_r(this),ys(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Gu(j),j.P=!0,it(11))}}else si(this.i,this.l,d,null),Vu(this,d);J==4&&_r(this),this.o&&!this.K&&(J==4?jp(this.j,this):(this.o=!1,Wa(this)))}else bE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),_r(this),ys(this)}}}catch{}finally{}};function sE(o){if(!pp(o))return o.g.la();const c=Pp(o.g);if(c==="")return"";let d="";const g=c.length,N=Mn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return _r(o),ys(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<g;R++)o.h.h=!0,d+=o.h.i.decode(c[R],{stream:!(N&&R==g-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function pp(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function aE(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?Mu:(d=Number(c.substring(d,g)),isNaN(d)?dp:(g+=1,g+d>c.length?Mu:(c=c.slice(g,g+d),o.C=g+d,c)))}Pn.prototype.cancel=function(){this.K=!0,_r(this)};function Wa(o){o.T=Date.now()+o.H,mp(o,o.H)}function mp(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ps(h(o.aa,o),c)}function Fu(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(nE(this.i,this.B),this.M!=2&&(fs(),it(17)),_r(this),this.m=2,ys(this)):mp(this,this.T-o)};function ys(o){o.j.I==0||o.K||jp(o.j,o)}function _r(o){Fu(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,np(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Vu(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||ju(d.h,o))){if(!o.L&&ju(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)eo(d),Ja(d);else break e;Ku(d),it(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ps(h(d.Va,d),6e3));vp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Cr(d,11)}else if((o.L||d.g==o)&&eo(d),!b(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let de=N[c];const Me=de[0];if(!(Me<=d.K))if(d.K=Me,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const Jt=de[3];Jt!=null&&(d.ka=Jt,d.j.info("VER="+d.ka));const li=de[4];li!=null&&(d.za=li,d.j.info("SVER="+d.za));const Un=de[5];Un!=null&&typeof Un=="number"&&Un>0&&(g=1.5*Un,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Fn=o.g;if(Fn){const no=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(no){var R=g.h;R.g||no.indexOf("spdy")==-1&&no.indexOf("quic")==-1&&no.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(zu(R,R.h),R.h=null))}if(g.G){const Wu=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(g.wa=Wu,he(g.J,g.G,Wu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=o;if(g.na=Bp(g,g.L?g.ba:null,g.W),j.L){wp(g.h,j);var J=j,Re=g.O;Re&&(J.H=Re),J.D&&(Fu(J),Wa(J)),g.g=j}else Fp(g);d.i.length>0&&Za(d)}else de[0]!="stop"&&de[0]!="close"||Cr(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Cr(d,7):Hu(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}fs(4)}catch{}}var oE=class{constructor(o,c){this.g=o,this.map=c}};function gp(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yp(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vp(o){return o.h?1:o.g?o.g.size:0}function ju(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function zu(o,c){o.g?o.g.add(c):o.h=c}function wp(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}gp.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return C(o.i)}var Ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lE(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let N,R=null;g>=0?(N=o[d].substring(0,g),R=o[d].substring(g+1)):N=o[d],c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ln(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Ln?(this.l=o.l,vs(this,o.j),this.o=o.o,this.g=o.g,ws(this,o.u),this.h=o.h,$u(this,Cp(o.i)),this.m=o.m):o&&(c=String(o).match(Ep))?(this.l=!1,vs(this,c[1]||"",!0),this.o=bs(c[2]||""),this.g=bs(c[3]||"",!0),ws(this,c[4]),this.h=bs(c[5]||"",!0),$u(this,c[6]||"",!0),this.m=bs(c[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}Ln.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Es(c,kp,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Es(c,kp,!0),"@"),o.push(gs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Es(d,d.charAt(0)=="/"?hE:cE,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Es(d,fE)),o.join("")},Ln.prototype.resolve=function(o){const c=Yt(this);let d=!!o.j;d?vs(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var g=o.h;if(d)ws(c,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const R=[];for(let j=0;j<N.length;){const J=N[j++];J=="."?g&&j==N.length&&R.push(""):J==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&j==N.length&&R.push("")):(R.push(J),g=!0)}g=R.join("/")}else g=N}return d?c.h=g:d=o.i.toString()!=="",d?$u(c,Cp(o.i)):d=!!o.m,d&&(c.m=o.m),c};function Yt(o){return new Ln(o)}function vs(o,c,d){o.j=d?bs(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ws(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function $u(o,c,d){c instanceof ks?(o.i=c,pE(o.i,o.l)):(d||(c=Es(c,dE)),o.i=new ks(c,o.l))}function he(o,c,d){o.i.set(c,d)}function Qa(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function bs(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,uE),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function uE(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kp=/[#\/\?@]/g,cE=/[#\?:]/g,hE=/[#\?]/g,dE=/[#\?@]/g,fE=/#/g;function ks(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ir(o){o.g||(o.g=new Map,o.h=0,o.i&&lE(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(o,c){Ir(this),this.i=null,o=ai(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Sp(o,c){Ir(o),c=ai(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Tp(o,c){return Ir(o),c=ai(o,c),o.g.has(c)}t.forEach=function(o,c){Ir(this),this.g.forEach(function(d,g){d.forEach(function(N){o.call(c,N,g,this)},this)},this)};function _p(o,c){Ir(o);let d=[];if(typeof c=="string")Tp(o,c)&&(d=d.concat(o.g.get(ai(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}t.set=function(o,c){return Ir(this),this.i=null,o=ai(this,o),Tp(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=_p(this,o),o.length>0?String(o[0]):c):c};function Ip(o,c,d){Sp(o,c),d.length>0&&(o.i=null,o.g.set(ai(o,c),C(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=gs(d);d=_p(this,d);for(let R=0;R<d.length;R++){let j=N;d[R]!==""&&(j+="="+gs(d[R])),o.push(j)}}return this.i=o.join("&")};function Cp(o){const c=new ks;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function ai(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function pE(o,c){c&&!o.j&&(Ir(o),o.i=null,o.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Sp(this,g),Ip(this,N,d))},o)),o.j=c}function mE(o,c){const d=new ms;if(a.Image){const g=new Image;g.onload=f(On,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(On,d,"TestLoadImage: error",!1,c,g),g.onabort=f(On,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(On,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function gE(o,c){const d=new ms,g=new AbortController,N=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(N),R.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),On(d,"TestPingServer: error",!1,c)})}function On(o,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function yE(){this.g=new Z1}function Bu(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Bu,rp),Bu.prototype.g=function(){return new Xa(this.i,this.h)};function Xa(o,c){Ge.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Xa,Ge),t=Xa.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ts(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Np(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Np(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Ss(this):Ts(this),this.readyState==3&&Np(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},t.Na=function(o){this.g&&(this.response=o,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ts(o)}t.setRequestHeader=function(o,c){this.A.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xp(o){let c="";return K(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function qu(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=xp(d),typeof o=="string"?d!=null&&gs(d):he(o,c,d))}function Ee(o){Ge.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ee,Ge);var vE=/^https?$/i,wE=["POST","PUT"];t=Ee.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cp.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Ap(this,R);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())d.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),N=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(wE,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,j]of d)this.g.setRequestHeader(R,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){Ap(this,R)}};function Ap(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Rp(o),Ya(o)}function Rp(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),Ee.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Dp(this):this.Xa())},t.Xa=function(){Dp(this)};function Dp(o){if(o.h&&typeof s<"u"){if(o.v&&Mn(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),Mn(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=R===0){let j=String(o.D).match(Ep)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!vE.test(j?j.toLowerCase():"")}d=g}if(d)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var N=Mn(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",Rp(o)}}finally{Ya(o)}}}}function Ya(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||rt(o,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),J1(c)}};function Pp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bE(o){const c={};o=(o.g&&Mn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(b(o[g]))continue;var d=iE(o[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[N]||[];c[N]=R,R.push(d)}Q(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Lp(o){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_s("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_s("baseRetryDelayMs",5e3,o),this.Za=_s("retryDelaySeedMs",1e4,o),this.Ta=_s("forwardChannelMaxRetries",2,o),this.va=_s("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new gp(o&&o.concurrentRequestLimit),this.Ba=new yE,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Lp.prototype,t.ka=8,t.I=1,t.connect=function(o,c,d,g){it(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Bp(this,null,this.W),Za(this)};function Hu(o){if(Op(o),o.I==3){var c=o.V++,d=Yt(o.J);if(he(d,"SID",o.M),he(d,"RID",c),he(d,"TYPE","terminate"),Is(o,d),c=new Pn(o,o.j,c),c.M=2,c.A=Qa(Yt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=qp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Wa(c)}$p(o)}function Ja(o){o.g&&(Gu(o),o.g.cancel(),o.g=null)}function Op(o){Ja(o),o.v&&(a.clearTimeout(o.v),o.v=null),eo(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Za(o){if(!yp(o.h)&&!o.m){o.m=!0;var c=o.Ea;A||p(),U||(A(),U=!0),v.add(c,o),o.D=0}}function EE(o,c){return vp(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ps(h(o.Ea,o,c),zp(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new Pn(this,this.j,o);let R=this.o;if(this.U&&(R?(R=le(R),kr(R,this.U)):R=this.U),this.u!==null||this.R||(N.J=R,R=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Up(this,N,c),d=Yt(this.J),he(d,"RID",o),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Is(this,d),R&&(this.R?c="headers="+gs(xp(R))+"&"+c:this.u&&qu(d,this.u,R)),zu(this.h,N),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",c),he(d,"SID","null"),N.U=!0,Uu(N,d,null)):Uu(N,d,c),this.I=2}}else this.I==3&&(o?Mp(this,o):this.i.length==0||yp(this.h)||Mp(this))};function Mp(o,c){var d;c?d=c.l:d=o.V++;const g=Yt(o.J);he(g,"SID",o.M),he(g,"RID",d),he(g,"AID",o.K),Is(o,g),o.u&&o.o&&qu(g,o.u,o.o),d=new Pn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Up(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),zu(o.h,d),Uu(d,g,c)}function Is(o,c){o.H&&K(o.H,function(d,g){he(c,g,d)}),o.l&&K({},function(d,g){he(c,g,d)})}function Up(o,c,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var N=o.i;let J=-1;for(;;){const Re=["count="+d];J==-1?d>0?(J=N[0].g,Re.push("ofs="+J)):J=0:Re.push("ofs="+J);let de=!0;for(let Me=0;Me<d;Me++){var R=N[Me].g;const Jt=N[Me].map;if(R-=J,R<0)J=Math.max(0,N[Me].g-100),de=!1;else try{R="req"+R+"_"||"";try{var j=Jt instanceof Map?Jt:Object.entries(Jt);for(const[li,Un]of j){let Fn=Un;l(Un)&&(Fn=Du(Un)),Re.push(R+li+"="+encodeURIComponent(Fn))}}catch(li){throw Re.push(R+"type="+encodeURIComponent("_badmap")),li}}catch{g&&g(Jt)}}if(de){j=Re.join("&");break e}}j=void 0}return o=o.i.splice(0,d),c.G=o,j}function Fp(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;A||p(),U||(A(),U=!0),v.add(c,o),o.A=0}}function Ku(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ps(h(o.Da,o),zp(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Vp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ps(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),Ja(this),Vp(this))};function Gu(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Vp(o){o.g=new Pn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Yt(o.na);he(c,"RID","rpc"),he(c,"SID",o.M),he(c,"AID",o.K),he(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(c,"TO",o.ia),he(c,"TYPE","xmlhttp"),Is(o,c),o.u&&o.o&&qu(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Qa(Yt(c)),d.u=null,d.R=!0,fp(d,o)}t.Va=function(){this.C!=null&&(this.C=null,Ja(this),Ku(this),it(19))};function eo(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function jp(o,c){var d=null;if(o.g==c){eo(o),Gu(o),o.g=null;var g=2}else if(ju(o.h,c))d=c.G,wp(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=o.D;g=Ka(),rt(g,new lp(g,d)),Za(o)}else Fp(o);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&EE(o,c)||g==2&&Ku(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),N){case 1:Cr(o,5);break;case 4:Cr(o,10);break;case 3:Cr(o,6);break;default:Cr(o,2)}}}function zp(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function Cr(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),g=o.Ua;const N=!g;g=new Ln(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||vs(g,"https"),Qa(g),N?mE(g.toString(),d):gE(g.toString(),d)}else it(2);o.I=0,o.l&&o.l.pa(c),$p(o),Op(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function $p(o){if(o.I=0,o.ja=[],o.l){const c=bp(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ja,c),x(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function Bp(o,c,d){var g=d instanceof Ln?Yt(d):new Ln(d);if(g.g!="")c&&(g.g=c+"."+g.g),ws(g,g.u);else{var N=a.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const R=new Ln(null);g&&vs(R,g),c&&(R.g=c),N&&ws(R,N),d&&(R.h=d),g=R}return d=o.G,c=o.wa,d&&c&&he(g,d,c),he(g,"VER",o.ka),Is(o,g),g}function qp(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Ee(new Bu({ab:d})):new Ee(o.ma),c.Fa(o.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hp(){}t=Hp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function to(){}to.prototype.g=function(o,c){return new gt(o,c)};function gt(o,c){Ge.call(this),this.g=new Lp(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!b(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!b(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new oi(this)}m(gt,Ge),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Hu(this.g)},gt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Du(o),o=d);c.i.push(new oE(c.Ya++,o)),c.I==3&&Za(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,gt.Z.N.call(this)};function Kp(o){Pu.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Kp,Pu);function Gp(){Lu.call(this),this.status=1}m(Gp,Lu);function oi(o){this.g=o}m(oi,Hp),oi.prototype.ra=function(){rt(this.g,"a")},oi.prototype.qa=function(o){rt(this.g,new Kp(o))},oi.prototype.pa=function(o){rt(this.g,new Gp)},oi.prototype.oa=function(){rt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,zb=function(){return new to},jb=function(){return Ka()},Vb=Tr,Lh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ga.NO_ERROR=0,Ga.TIMEOUT=8,Ga.HTTP_ERROR=6,jo=Ga,up.COMPLETE="complete",Fb=up,ip.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,Vs=ip,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,Ub=Ee}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore",_g="4.9.2";/**
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
*/class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
*/let ss="12.3.0";/**
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
*/const Gr=new iu("@firebase/firestore");function hi(){return Gr.logLevel}function B(t,...e){if(Gr.logLevel<=ee.DEBUG){const n=e.map(nf);Gr.debug(`Firestore (${ss}): ${t}`,...n)}}function Nn(t,...e){if(Gr.logLevel<=ee.ERROR){const n=e.map(nf);Gr.error(`Firestore (${ss}): ${t}`,...n)}}function Gi(t,...e){if(Gr.logLevel<=ee.WARN){const n=e.map(nf);Gr.warn(`Firestore (${ss}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{/**
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
*/return function(e){return JSON.stringify(e)}(t)}catch{return t}}/**
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
*/function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$b(t,r,n)}function $b(t,e,n){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nn(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||$b(e,i,r)}function Y(t,e){return t}/**
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
*/const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
*/class Bb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Bb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function uC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
*/class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Oh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return xc(i)===xc(s)?te(i,s):xc(i)?1:-1}return te(t.length,e.length)}const cC=55296,hC=57343;function xc(t){const e=t.charCodeAt(0);return e>=cC&&e<=hC}function Wi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
*/const Cg="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),i=tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?tn.extractNumericId(e).compare(tn.extractNumericId(n)):Oh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class ue extends tn{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends tn{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cg}static keyField(){return new Be([Cg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
*/class H{constructor(e){this.path=e}static fromPath(e){return new H(ue.fromString(e))}static fromName(e){return new H(ue.fromString(e).popFirst(5))}static empty(){return new H(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ue(e.slice()))}}/**
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
*/function qb(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!H.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xg(t){if(H.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function ka(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
*/function Ae(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ua(t,e){if(!Hb(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
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
*/const Ag=-62135596800,Rg=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rg);return new ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ag)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ua(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ag;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:Ae("string",ae._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
*/class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ae(0,0))}static max(){return new X(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const Sa=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ae(n+1,0):new ae(n,r));return new fr(i,H.empty(),e)}function mC(t){return new fr(t.readTime,t.key,Sa)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(X.min(),H.empty(),Sa)}static max(){return new fr(X.max(),H.empty(),Sa)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
*/const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function as(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==yC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function os(t){return t.name==="IndexedDbTransactionError"}/**
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
*/class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lu.ce=-1;/**
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
*/const sf=-1;function uu(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function bC(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
*/const Kb="";function EC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dg(e)),e=kC(t.get(n),e);return Dg(e)}function kC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Kb:n+="";break;default:n+=s}}return n}function Dg(t){return t+Kb+""}/**
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
*/function Pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
*/class we{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class Le{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class zt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Le(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
*/class Wb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wb("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const SC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=SC.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
*/const Qb="server_timestamp",Xb="__type__",Yb="__previous_value__",Jb="__local_write_time__";function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[Xb])==null?void 0:n.stringValue)===Qb}function cu(t){const e=t.mapValue.fields[Yb];return af(e)?cu(e):e}function Ta(t){const e=pr(t.mapValue.fields[Jb].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
*/class TC{constructor(e,n,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const _l="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||_l}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===_l}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/const Zb="__type__",_C="__max__",So={mapValue:{}},e0="__vector__",Il="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:CC(t)?9007199254740991:IC(t)?10:11:G(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ta(t).isEqual(Ta(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=pr(r.timestampValue),a=pr(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mr(r.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Te(r.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(r.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Te(r.integerValue)===Te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Te(r.doubleValue),a=Te(i.doubleValue);return s===a?Tl(s)===Tl(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(r,i){const s=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Pg(s)!==Pg(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!fn(s[l],a[l])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Ia(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=Te(i.integerValue||i.doubleValue),l=Te(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Og(t.timestampValue,e.timestampValue);case 4:return Og(Ta(t),Ta(e));case 5:return Oh(t.stringValue,e.stringValue);case 6:return function(i,s){const a=mr(i),l=mr(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=te(a[u],l[u]);if(h!==0)return h}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=te(Te(i.latitude),Te(s.latitude));return a!==0?a:te(Te(i.longitude),Te(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mg(t.arrayValue,e.arrayValue);case 10:return function(i,s){var a,l,u,h;const f=i.fields||{},m=s.fields||{},w=(a=f[Il])==null?void 0:a.arrayValue,C=(l=m[Il])==null?void 0:l.arrayValue,x=te(((u=w==null?void 0:w.values)==null?void 0:u.length)||0,((h=C==null?void 0:C.values)==null?void 0:h.length)||0);return x!==0?x:Mg(w,C)}(t.mapValue,e.mapValue);case 11:return function(i,s){if(i===So.mapValue&&s===So.mapValue)return 0;if(i===So.mapValue)return 1;if(s===So.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=s.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=Oh(l[f],h[f]);if(m!==0)return m;const w=Qi(a[l[f]],u[h[f]]);if(w!==0)return w}return te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function Og(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=pr(t),r=pr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Mg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Xi(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const n=pr(e);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return mr(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return H.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=Mh(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${Mh(e.fields[s])}`;return r+"}"}(t.mapValue):G(61005,{value:t})}function zo(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(t);return e?16+zo(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+zo(i),0)}(t.arrayValue);case 10:case 11:return function(n){let r=0;return ei(n.fields,(i,s)=>{r+=i.length+zo(s)}),r}(t.mapValue);default:throw G(13486,{value:t})}}function Ug(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function Fg(t){return!!t&&"nullValue"in t}function Vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function IC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[Zb])==null?void 0:n.stringValue)===e0}function Js(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return{...t}}function CC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_C}/**
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
*/class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Js(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$o(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(Js(this.value))}}function t0(t){const e=[];return ei(t.fields,(n,r)=>{const i=new Be([n]);if($o(r)){const s=t0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new zt(e)}/**
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
*/class Ze{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,X.min(),X.min(),X.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,X.min(),X.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,X.min(),X.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function jg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),n.key):r=Qi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
*/class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function NC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
*/class n0{}class xe extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AC(e,n,r):n==="array-contains"?new PC(e,r):n==="in"?new LC(e,r):n==="not-in"?new OC(e,r):n==="array-contains-any"?new MC(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RC(e,r):new DC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qi(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Wt(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return xC(t)&&r0(t)}function xC(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Fh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(i0(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof xe?function(n,r){return r instanceof xe&&n.op===r.op&&n.field.isEqual(r.field)&&fn(n.value,r.value)}(t,e):t instanceof Wt?function(n,r){return r instanceof Wt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,a)=>i&&s0(s,r.filters[a]),!0):!1}(t,e):void G(19439)}function a0(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Xi(e.value)}`}(t):t instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(a0).join(" ,")+"}"}(t):"Filter"}class AC extends xe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class RC extends xe{constructor(e,n){super(e,"in",n),this.keys=o0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DC extends xe{constructor(e,n){super(e,"not-in",n),this.keys=o0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function o0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class PC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&Ia(n.arrayValue,this.value)}}class LC extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ia(this.value.arrayValue,n)}}class OC extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ia(this.value.arrayValue,n)}}class MC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ia(this.value.arrayValue,r))}}/**
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
*/class UC{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function $g(t,e=null,n=[],r=[],i=null,s=null,a=null){return new UC(t,e,n,r,i,s,a)}function lf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.Te=n}return e.Te}function uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zg(t.startAt,e.startAt)&&zg(t.endAt,e.endAt)}function Vh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
*/class ls{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function FC(t,e,n,r,i,s,a,l){return new ls(t,e,n,r,i,s,a,l)}function l0(t){return new ls(t)}function Bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u0(t){return t.collectionGroup!==null}function Zs(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new Le(Be.comparator);return i.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(s=s.add(l.field))})}),s})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ca(i,r))}),n.has(Be.keyField().canonicalString())||e.Ie.push(new Ca(Be.keyField(),r))}return e.Ie}function an(t){const e=Y(t);return e.Ee||(e.Ee=VC(e,Zs(t))),e.Ee}function VC(t,e){if(t.limitType==="F")return $g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ca(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return $g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jh(t,e){const n=t.filters.concat([e]);return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zh(t,e,n){return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hu(t,e){return uf(an(t),an(e))&&t.limitType===e.limitType}function c0(t){return`${lf(an(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>a0(r)).join(", ")}]`),uu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),`Target(${n})`}(an(t))}; limitType=${t.limitType})`}function du(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):H.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Zs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,a){const l=jg(i,s,a);return i.inclusive?l<=0:l<0}(n.startAt,Zs(n),r)||n.endAt&&!function(i,s,a){const l=jg(i,s,a);return i.inclusive?l>=0:l>0}(n.endAt,Zs(n),r))}(t,e)}function jC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h0(t){return(e,n)=>{let r=!1;for(const i of Zs(t)){const s=zC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,s,a){const l=s.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Qi(l,u):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
*/class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gb(this.inner)}size(){return this.innerSize}}/**
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
*/const $C=new we(H.comparator);function xn(){return $C}const d0=new we(H.comparator);function js(...t){let e=d0;for(const n of t)e=e.insert(n.key,n);return e}function f0(t){let e=d0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return ea()}function p0(){return ea()}function ea(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const BC=new we(H.comparator),qC=new Le(H.comparator);function ne(...t){let e=qC;for(const n of t)e=e.add(n);return e}const HC=new Le(te);function KC(){return HC}/**
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
*/function cf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function m0(t){return{integerValue:""+t}}function GC(t,e){return bC(e)?m0(e):cf(t,e)}/**
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
*/class fu{constructor(){this._=void 0}}function WC(t,e,n){return t instanceof Nl?function(r,i){const s={fields:{[Xb]:{stringValue:Qb},[Jb]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&af(i)&&(i=cu(i)),i&&(s.fields[Yb]=i),{mapValue:s}}(n,e):t instanceof Na?y0(t,e):t instanceof xa?v0(t,e):function(r,i){const s=g0(r,i),a=qg(s)+qg(r.Ae);return Uh(s)&&Uh(r.Ae)?m0(a):cf(r.serializer,a)}(t,e)}function QC(t,e,n){return t instanceof Na?y0(t,e):t instanceof xa?v0(t,e):n}function g0(t,e){return t instanceof xl?function(n){return Uh(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class Nl extends fu{}class Na extends fu{constructor(e){super(),this.elements=e}}function y0(t,e){const n=w0(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xa extends fu{constructor(e){super(),this.elements=e}}function v0(t,e){let n=w0(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class xl extends fu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function qg(t){return Te(t.integerValue||t.doubleValue)}function w0(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Na&&r instanceof Na||n instanceof xa&&r instanceof xa?Wi(n.elements,r.elements,fn):n instanceof xl&&r instanceof xl?fn(n.Ae,r.Ae):n instanceof Nl&&r instanceof Nl}(t.transform,e.transform)}class YC{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pu{}function b0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hf(t.key,on.none()):new Fa(t.key,t.data,on.none());{const n=t.data,r=Ct.empty();let i=new Le(Be.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ni(t.key,r,new zt(i.toArray()),on.none())}}function JC(t,e,n){t instanceof Fa?function(r,i,s){const a=r.value.clone(),l=Kg(r.fieldTransforms,i,s.transformResults);a.setAll(l),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ni?function(r,i,s){if(!Bo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const a=Kg(r.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(E0(r)),l.setAll(a),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof Fa?function(i,s,a,l){if(!Bo(i.precondition,s))return a;const u=i.value.clone(),h=Gg(i.fieldTransforms,l,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ni?function(i,s,a,l){if(!Bo(i.precondition,s))return a;const u=Gg(i.fieldTransforms,l,s),h=s.data;return h.setAll(E0(i)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,s,a){return Bo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=g0(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function Hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wi(n,r,(i,s)=>XC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kg(t,e,n){const r=new Map;se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,QC(a,l,n[i]))}return r}function Gg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,WC(s,a,e))}return r}class hf extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eN extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class tN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=p0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=b0(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>Hg(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>Hg(n,r))}}class df{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return BC}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new df(e,n,r,i)}}/**
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
*/class nN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class rN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
*/var Ie,re;function iN(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function k0(t){if(t===void 0)return Nn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ie.OK:return O.OK;case Ie.CANCELLED:return O.CANCELLED;case Ie.UNKNOWN:return O.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return O.INTERNAL;case Ie.UNAVAILABLE:return O.UNAVAILABLE;case Ie.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ie.NOT_FOUND:return O.NOT_FOUND;case Ie.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ie.ABORTED:return O.ABORTED;case Ie.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ie.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(re=Ie||(Ie={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function sN(){return new TextEncoder}/**
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
*/const aN=new or([4294967295,4294967295],0);function Wg(t){const e=sN().encode(t),n=new Mb;return n.update(e),new Uint8Array(n.digest())}function Qg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([n,r],0),new or([i,s],0)]}class ff{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=or.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(or.fromNumber(r)));return i.compare(aN)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Wg(e),[r,i]=Qg(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ff(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const n=Wg(e),[r,i]=Qg(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mu(X.min(),i,new we(te),xn(),ne())}}class Va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Va(r,n,ne(),ne(),ne())}}/**
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
*/class qo{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class S0{constructor(e,n){this.targetId=e,this.Ce=n}}class T0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xg{constructor(){this.ve=0,this.Fe=Yg(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Va(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Yg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class oN{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=To(),this.He=To(),this.Ye=new we(te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Vh(s))if(r===0){const a=new H(s.path);this.et(n,a,Ze.newNoDocument(a,X.min()))}else se(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=mr(r).toUint8Array()}catch(u){if(u instanceof Wb)return Gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ff(a,i,s)}catch(u){return Gi(u instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,a)=>{const l=this.ot(a);if(l){if(s.current&&Vh(l.target)){const u=new H(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ze.newNoDocument(u,e))}s.Be&&(n.set(a,s.ke()),s.qe())}});let r=ne();this.He.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new mu(e,n,this.Ye,this.je,r);return this.je=xn(),this.Je=To(),this.He=To(),this.Ye=new we(te),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Le(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function To(){return new we(H.comparator)}function Yg(){return new we(H.comparator)}const lN={asc:"ASCENDING",desc:"DESCENDING"},uN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cN={and:"AND",or:"OR"};class hN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dN(t,e){return Al(t,e.toTimestamp())}function ln(t){return se(!!t,49232),X.fromTimestamp(function(e){const n=pr(e);return new ae(n.seconds,n.nanos)}(t))}function pf(t,e){return Bh(t,e).canonicalString()}function Bh(t,e){const n=function(r){return new ue(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function I0(t){const e=ue.fromString(t);return se(R0(e),10190,{key:e.toString()}),e}function qh(t,e){return pf(t.databaseId,e.path)}function Ac(t,e){const n=I0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(N0(n))}function C0(t,e){return pf(t.databaseId,e)}function fN(t){const e=I0(t);return e.length===4?ue.emptyPath():N0(e)}function Hh(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function N0(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Jg(t,e,n){return{name:qh(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(se(h===void 0||typeof h=="string",58123),Ke.fromBase64String(h||"")):(se(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ke.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const h=u.code===void 0?O.UNKNOWN:k0(u.code);return new $(h,u.message||"")}(a);n=new T0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ac(t,r.document.name),s=ln(r.document.updateTime),a=r.document.createTime?ln(r.document.createTime):X.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new qo(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ac(t,r.document),s=r.readTime?ln(r.readTime):X.min(),a=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new qo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ac(t,r.document),s=r.removedTargetIds||[];n=new qo([],s,i,null)}else{if(!("filter"in e))return G(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new rN(i,s),l=r.targetId;n=new S0(l,a)}}return n}function mN(t,e){let n;if(e instanceof Fa)n={update:Jg(t,e.key,e.value)};else if(e instanceof hf)n={delete:qh(t,e.key)};else if(e instanceof ni)n={update:Jg(t,e.key,e.data),updateMask:TN(e.fieldMask)};else{if(!(e instanceof eN))return G(16599,{Vt:e.type});n={verify:qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof Nl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Na)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xl)return{fieldPath:s.field.canonicalString(),increment:a.Ae};throw G(20930,{transform:s.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:dN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function gN(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(r,i){let s=r.updateTime?ln(r.updateTime):ln(i);return s.isEqual(X.min())&&(s=ln(i)),new YC(s,r.transformResults||[])}(n,e))):[]}function yN(t,e){return{documents:[C0(t,e.path)]}}function vN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=C0(t,i);const s=function(u){if(u.length!==0)return A0(Wt.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:fi(f.field),direction:EN(f.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=$h(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function wN(t){let e=fN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(f){const m=x0(f);return m instanceof Wt&&i0(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(f){return f.map(m=>function(w){return new Ca(pi(w.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,uu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new Cl(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(f){const m=!f.before,w=f.values||[];return new Cl(w,m)}(n.endAt)),FC(e,i,a,s,l,"F",u,h)}function bN(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=pi(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=pi(e.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pi(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=pi(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(e){return xe.create(pi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(n=>x0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(e.compositeFilter.op))}(t):G(30097,{filter:t})}function EN(t){return lN[t]}function kN(t){return uN[t]}function SN(t){return cN[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return Be.fromServerFormat(t.fieldPath)}function A0(t){return t instanceof xe?function(e){if(e.op==="=="){if(Vg(e.value))return{unaryFilter:{field:fi(e.field),op:"IS_NAN"}};if(Fg(e.value))return{unaryFilter:{field:fi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vg(e.value))return{unaryFilter:{field:fi(e.field),op:"IS_NOT_NAN"}};if(Fg(e.value))return{unaryFilter:{field:fi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(e.field),op:kN(e.op),value:e.value}}}(t):t instanceof Wt?function(e){const n=e.getFilters().map(r=>A0(r));return n.length===1?n[0]:{compositeFilter:{op:SN(e.op),filters:n}}}(t):G(54877,{filter:t})}function TN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
*/class Xn{constructor(e,n,r,i,s=X.min(),a=X.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
*/class _N{constructor(e){this.yt=e}}function IN(t){const e=wN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
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
*/class CN{constructor(){this.Cn=new NN}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(fr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class NN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ue.comparator)).toArray()}}/**
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
*/const Zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},D0=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
*/ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(D0,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
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
*/class Yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yi(0)}static cr(){return new Yi(-1)}}/**
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
*/const ey="LruGarbageCollector",xN=1048576;function ty([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class AN{constructor(e){this.Ir=e,this.buffer=new Le(ty),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ty(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(ey,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){os(n)?B(ey,"Ignoring IndexedDB error during garbage collection: ",n):await as(n)}await this.Vr(3e5)})}}class DN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(lu.ce);const r=new AN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Zg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),hi()<=ee.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function PN(t,e){return new DN(t,e)}/**
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
*/class LN{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class ON{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
*/class MN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ta(r.mutation,i,zt.empty(),ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=js();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=xn();const a=ea(),l=function(){return ea()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ni)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ta(f.mutation,h,f.mutation.getFieldMask(),ae.now())):a.set(h.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>l.set(h,new ON(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ea();let i=new we((a,l)=>a-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=p0();f.forEach(w=>{if(!s.has(w)){const C=b0(n.get(w),r.get(w));C!==null&&m.set(w,C),s=s.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Or());let l=Sa,u=s;return a.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:f0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=js();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(f,m){return new ls(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ze.newInvalidDocument(f)))});let l=js();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ta(f.mutation,h,zt.empty(),ae.now()),du(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
*/class UN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:ln(r.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(r){return{name:r.name,query:IN(r.bundledQuery),readTime:ln(r.readTime)}}(n)),M.resolve()}}/**
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
*/class FN{constructor(){this.overlays=new we(H.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,a=new H(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Or(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Or(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nN(n,r));let s=this.qr.get(n);s===void 0&&(s=ne(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
*/class VN{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
*/class mf{constructor(){this.Qr=new Le(Ue.$r),this.Ur=new Le(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ue(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),s.push(a.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ne();return this.Ur.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return H.comparator(e.key,n.key)||te(e.Yr,n.Yr)}static Kr(e,n){return te(e.Yr,n.Yr)||H.comparator(e.key,n.key)}}/**
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
*/class jN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Le(Ue.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tN(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?sf:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],a=>{const l=this.Xr(a.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(te);return n.forEach(i=>{const s=new Ue(i,0),a=new Ue(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,a],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new Ue(new H(s),0);let l=new Le(te);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},a),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
*/class zN{constructor(e){this.ri=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xn();const a=n.path,l=new H(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gC(mC(f),r)<=0||(i.has(f.key)||du(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $N(this)}getSize(e){return M.resolve(this.size)}}class $N extends LN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
*/class BN{constructor(e){this.persistence=e,this.si=new ti(n=>lf(n),uf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new mf,this.targetCount=0,this.ai=Yi.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
*/class P0{constructor(e,n){this.ui={},this.overlays={},this.ci=new lu(0),this.li=!1,this.li=!0,this.hi=new VN,this.referenceDelegate=e(this),this.Pi=new BN(this),this.indexManager=new CN,this.remoteDocumentCache=function(r){return new zN(r)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new _N(n),this.Ii=new UN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new jN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new qN(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class qN extends vC{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.Ri=new mf,this.Vi=null}static mi(e){return new gf(e)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=H.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Rl{constructor(e,n){this.persistence=e,this.pi=new ti(r=>EC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=PN(this,n)}static mi(e,n){return new Rl(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,s.removeEntry(a,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zo(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class yf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yf(e,n.fromCache,r,i)}}/**
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
*/class HN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class KN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pT()?8:wC(tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new HN;return this.Ss(e,n,a).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(hi()<=ee.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(hi()<=ee.DEBUG&&B("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(hi()<=ee.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):M.resolve())}ys(e,n){if(Bg(n))return M.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zh(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ne(...s);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,a,u.readTime)?this.ys(e,zh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return Bg(n)||i.isEqual(X.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const a=this.Ds(n,s);return this.Cs(n,a,r,i)?M.resolve(null):(hi()<=ee.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(n)),this.vs(e,a,n,pC(i,Sa)).next(l=>l))})}Ds(e,n){let r=new Le(h0(e));return n.forEach((i,s)=>{du(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return hi()<=ee.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",di(n)),this.ps.getDocumentsMatchingQuery(e,n,fr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
*/const vf="LocalStore",GN=3e8;class WN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new we(te),this.xs=new ti(s=>lf(s),uf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function QN(t,e,n,r){return new WN(t,e,n,r)}async function L0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ne();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function XN(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,m=f.keys();let w=M.resolve();return m.forEach(C=>{w=w.next(()=>h.getEntry(l,C)).next(x=>{const P=u.docVersions.get(C);se(P!==null,48541),x.version.compareTo(P)<0&&(f.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),h.addEntry(x)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function O0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function YN(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const w=i.get(m);if(!w)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let C=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Ke.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(m,C),function(x,P,V){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=GN?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(w,C,f)&&l.push(n.Pi.updateTargetData(s,C))});let u=xn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(JN(s,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function JN(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=xn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B(vf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:i}})}function ZN(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function e2(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(a=>(i=new Xn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Kh(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!os(a))throw a;B(vf,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function ny(t,e,n){const r=Y(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,h){const f=Y(l),m=f.xs.get(h);return m!==void 0?M.resolve(f.Ms.get(m)):f.Pi.getTargetData(u,h)}(r,a,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,n?i:X.min(),n?s:ne())).next(l=>(t2(r,jC(e),l),{documents:l,Qs:s})))}function t2(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ry{constructor(){this.activeTargetIds=KC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class n2{constructor(){this.Mo=new ry,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class r2{Oo(e){}shutdown(){}}/**
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
*/const iy="ConnectivityMonitor";class sy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(iy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(iy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let _o=null;function Gh(){return _o===null?_o=function(){return 268435456+Math.round(2147483648*Math.random())}():_o++,"0x"+_o.toString(16)}/**
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
*/const Rc="RestConnection",i2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===_l?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const a=Gh(),l=this.zo(e,n.toUriEncodedString());B(Rc,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=rs(h);return this.Jo(e,l,u,r,f).then(m=>(B(Rc,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Gi(Rc,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,a){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=i2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
*/class a2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
*/const Xe="WebChannelConnection";class o2 extends s2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const a=Gh();return new Promise((l,u)=>{const h=new Ub;h.setWithCredentials(!0),h.listenOnce(Fb.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case jo.NO_ERROR:const m=h.getResponseJson();B(Xe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case jo.TIMEOUT:B(Xe,`RPC '${e}' ${a} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const w=h.getStatus();if(B(Xe,`RPC '${e}' ${a} failed with status:`,w,"response text:",h.getResponseText()),w>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const P=function(V){const T=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(T)>=0?T:O.UNKNOWN}(x.status);u(new $(P,x.message))}else u(new $(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Xe,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);B(Xe,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Gh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=zb(),l=jb(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let w=!1,C=!1;const x=new a2({Yo:V=>{C?B(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(w||(B(Xe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),w=!0),B(Xe,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Zo:()=>m.close()}),P=(V,T,E)=>{V.listen(T,_=>{try{E(_)}catch(L){setTimeout(()=>{throw L},0)}})};return P(m,Vs.EventType.OPEN,()=>{C||(B(Xe,`RPC '${e}' stream ${i} transport opened.`),x.o_())}),P(m,Vs.EventType.CLOSE,()=>{C||(C=!0,B(Xe,`RPC '${e}' stream ${i} transport closed`),x.a_(),this.E_(m))}),P(m,Vs.EventType.ERROR,V=>{C||(C=!0,Gi(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),x.a_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),P(m,Vs.EventType.MESSAGE,V=>{var T;if(!C){const E=V.data[0];se(!!E,16349);const _=E,L=(_==null?void 0:_.error)||((T=_[0])==null?void 0:T.error);if(L){B(Xe,`RPC '${e}' stream ${i} received error:`,L);const A=L.status;let U=function(p){const y=Ie[p];if(y!==void 0)return k0(y)}(A),v=L.message;U===void 0&&(U=O.INTERNAL,v="Unknown error status: "+A+" with message "+L.message),C=!0,x.a_(new $(U,v)),m.close()}else B(Xe,`RPC '${e}' stream ${i} received:`,E),x.u_(E)}}),P(l,Vb.STAT_EVENT,V=>{V.stat===Lh.PROXY?B(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Lh.NOPROXY&&B(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Dc(){return typeof document<"u"?document:null}/**
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
*/function gu(t){return new hN(t,!0)}/**
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
*/class M0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/const ay="PersistentStream";class U0{constructor(e,n,r,i,s,a,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new M0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l2 extends U0{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=pN(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?ln(s.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(i,s){let a;const l=s.target;if(a=Vh(l)?{documents:yN(i,l)}:{query:vN(i,l).ft},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=_0(i,s.resumeToken);const u=$h(i,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(X.min())>0){a.readTime=Al(i,s.snapshotVersion.toTimestamp());const u=$h(i,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=bN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.q_(n)}}class u2 extends U0{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=gN(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mN(this.serializer,r))};this.q_(n)}}/**
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
*/class c2{}class h2 extends c2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Go(e,Bh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Bh(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(O.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class d2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const Wr="RemoteStore";class f2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{ri(this)&&(B(Wr,"Restarting streams for network reachability change."),await async function(l){const u=Y(l);u.Ea.add(4),await ja(u),u.Ra.set("Unknown"),u.Ea.delete(4),await yu(u)}(this))})}),this.Ra=new d2(r,i)}}async function yu(t){if(ri(t))for(const e of t.da)await e(!0)}async function ja(t){for(const e of t.da)await e(!1)}function F0(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),kf(n)?Ef(n):us(n).O_()&&bf(n,e))}function wf(t,e){const n=Y(t),r=us(n);n.Ia.delete(e),r.O_()&&V0(n,e),n.Ia.size===0&&(r.O_()?r.L_():ri(n)&&n.Ra.set("Unknown"))}function bf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).Y_(e)}function V0(t,e){t.Va.Ue(e),us(t).Z_(e)}function Ef(t){t.Va=new oN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),us(t).start(),t.Ra.ua()}function kf(t){return ri(t)&&!us(t).x_()&&t.Ia.size>0}function ri(t){return Y(t).Ea.size===0}function j0(t){t.Va=void 0}async function p2(t){t.Ra.set("Online")}async function m2(t){t.Ia.forEach((e,n)=>{bf(t,e)})}async function g2(t,e){j0(t),kf(t)?(t.Ra.ha(e),Ef(t)):t.Ra.set("Unknown")}async function y2(t,e,n){if(t.Ra.set("Online"),e instanceof T0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const a of i.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,s),r.Ia.delete(a),r.Va.removeTarget(a))}(t,e)}catch(r){B(Wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof qo?t.Va.Ze(e):e instanceof S0?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await O0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.Va.Tt(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(Ke.EMPTY_BYTE_STRING,h.snapshotVersion)),V0(i,l);const f=new Xn(h.target,l,u,h.sequenceNumber);bf(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B(Wr,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!os(e))throw e;t.Ea.add(1),await ja(t),t.Ra.set("Offline"),n||(n=()=>O0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Wr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yu(t)})}function z0(t,e){return e().catch(n=>Dl(t,n,e))}async function vu(t){const e=Y(t),n=yr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:sf;for(;v2(e);)try{const i=await ZN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,w2(e,i)}catch(i){await Dl(e,i)}$0(e)&&B0(e)}function v2(t){return ri(t)&&t.Ta.length<10}function w2(t,e){t.Ta.push(e);const n=yr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function $0(t){return ri(t)&&!yr(t).x_()&&t.Ta.length>0}function B0(t){yr(t).start()}async function b2(t){yr(t).ra()}async function E2(t){const e=yr(t);for(const n of t.Ta)e.ea(n.mutations)}async function k2(t,e,n){const r=t.Ta.shift(),i=df.from(r,e,n);await z0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vu(t)}async function S2(t,e){e&&yr(t).X_&&await async function(n,r){if(function(i){return iN(i)&&i!==O.ABORTED}(r.code)){const i=n.Ta.shift();yr(n).B_(),await z0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await vu(n)}}(t,e),$0(t)&&B0(t)}async function oy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(Wr,"RemoteStore received new credentials");const r=ri(n);n.Ea.add(3),await ja(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yu(n)}async function T2(t,e){const n=Y(t);e?(n.Ea.delete(2),await yu(n)):e||(n.Ea.add(2),await ja(n),n.Ra.set("Unknown"))}function us(t){return t.ma||(t.ma=function(e,n,r){const i=Y(e);return i.sa(),new l2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:p2.bind(null,t),t_:m2.bind(null,t),r_:g2.bind(null,t),H_:y2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),kf(t)?Ef(t):t.Ra.set("Unknown")):(await t.ma.stop(),j0(t))})),t.ma}function yr(t){return t.fa||(t.fa=function(e,n,r){const i=Y(e);return i.sa(),new u2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:b2.bind(null,t),r_:S2.bind(null,t),ta:E2.bind(null,t),na:k2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await vu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(Wr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
*/class Sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Sf(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),os(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
*/class Li{static emptySet(e){return new Li(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=js(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
*/class ly{constructor(){this.ga=new we(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Ji(e,n,Li.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
*/class _2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class I2{constructor(){this.queries=uy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const r=Y(e),i=r.queries;r.queries=uy(),i.forEach((s,a)=>{for(const l of a.Sa)l.onError(n)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function uy(){return new ti(t=>c0(t),hu)}async function C2(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new _2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=Tf(a,`Initialization of query '${di(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&_f(n)}async function N2(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.Sa.indexOf(e);a>=0&&(s.Sa.splice(a,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function x2(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&_f(n)}function A2(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function _f(t){t.Ca.forEach(e=>{e.next()})}var Wh,cy;(cy=Wh||(Wh={})).Ma="default",cy.Cache="cache";class R2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wh.Cache}}/**
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
*/class q0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class D2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=h0(e),this.tu=new Li(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ly,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const w=i.get(f),C=du(this.query,m)?m:null,x=!!w&&this.mutatedKeys.has(w.key),P=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;w&&C?w.data.isEqual(C.data)?x!==P&&(r.track({type:3,doc:C}),V=!0):this.su(w,C)||(r.track({type:2,doc:C}),V=!0,(u&&this.eu(C,u)>0||h&&this.eu(C,h)<0)&&(l=!0)):!w&&C?(r.track({type:0,doc:C}),V=!0):w&&!C&&(r.track({type:1,doc:w}),V=!0,(u||h)&&(l=!0)),V&&(C?(a=a.add(C),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(w,C){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Rt:P})}};return x(w)-x(C)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Ji(this.query,e.tu,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ly,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new H0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new q0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ji.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const If="SyncEngine";class P2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class L2{constructor(e){this.key=e,this.hu=!1}}class O2{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ti(l=>c0(l),hu),this.Iu=new Map,this.Eu=new Set,this.du=new we(H.comparator),this.Au=new Map,this.Ru=new mf,this.Vu={},this.mu=new Map,this.fu=Yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function M2(t,e,n=!0){const r=Y0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await K0(r,e,n,!0),i}async function U2(t,e){const n=Y0(t);await K0(n,e,!0,!1)}async function K0(t,e,n,r){const i=await e2(t.localStore,an(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await F2(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&F0(t.remoteStore,i),l}async function F2(t,e,n,r,i){t.pu=(m,w,C)=>async function(x,P,V,T){let E=P.view.ru(V);E.Cs&&(E=await ny(x.localStore,P.query,!1).then(({documents:U})=>P.view.ru(U,E)));const _=T&&T.targetChanges.get(P.targetId),L=T&&T.targetMismatches.get(P.targetId)!=null,A=P.view.applyChanges(E,x.isPrimaryClient,_,L);return dy(x,P.targetId,A.au),A.snapshot}(t,m,w,C);const s=await ny(t.localStore,e,!0),a=new D2(e,s.Qs),l=a.ru(s.documents),u=Va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);dy(t,n,h.au);const f=new P2(e,n,a);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function V2(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(a=>!hu(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wf(r.remoteStore,i.targetId),Qh(r,i.targetId)}).catch(as)):(Qh(r,i.targetId),await Kh(r.localStore,i.targetId,!0))}async function j2(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wf(n.remoteStore,r.targetId))}async function z2(t,e,n){const r=W2(t);try{const i=await function(s,a){const l=Y(s),u=ae.now(),h=a.reduce((w,C)=>w.add(C.key),ne());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=xn(),x=ne();return l.Ns.getEntries(w,h).next(P=>{C=P,C.forEach((V,T)=>{T.isValidDocument()||(x=x.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(P=>{f=P;const V=[];for(const T of a){const E=ZC(T,f.get(T.key).overlayedDocument);E!=null&&V.push(new ni(T.key,E,t0(E.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,V,a)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(f,x);return l.documentOverlayCache.saveOverlays(w,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:f0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Vu[s.currentUser.toKey()];u||(u=new we(te)),u=u.insert(a,l),s.Vu[s.currentUser.toKey()]=u}(r,i.batchId,n),await za(r,i.changes),await vu(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function G0(t,e){const n=Y(t);try{const r=await YN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Au.get(s);a&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?se(a.hu,14607):i.removedDocuments.size>0&&(se(a.hu,42227),a.hu=!1))}),await za(n,r,e)}catch(r){await as(r)}}function hy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(s,a){const l=Y(s);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)}),u&&_f(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $2(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let a=new we(H.comparator);a=a.insert(s,Ze.newNoDocument(s,X.min()));const l=ne().add(s),u=new mu(X.min(),new Map,new we(te),a,l);await G0(r,u),r.du=r.du.remove(s),r.Au.delete(e),Cf(r)}else await Kh(r.localStore,e,!1).then(()=>Qh(r,e,n)).catch(as)}async function B2(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await XN(n.localStore,e);Q0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,i)}catch(i){await as(i)}}async function q2(t,e,n){const r=Y(t);try{const i=await function(s,a){const l=Y(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(se(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Q0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,i)}catch(i){await as(i)}}function W0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Q0(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||X0(t,r)})}function X0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Cf(t))}function dy(t,e,n){for(const r of n)r instanceof q0?(t.Ru.addReference(r.key,e),H2(t,r)):r instanceof H0?(B(If,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||X0(t,r.key)):G(19791,{wu:r})}function H2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(If,"New document in limbo: "+n),t.Eu.add(r),Cf(t))}function Cf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new L2(n)),t.du=t.du.insert(n,r),F0(t.remoteStore,new Xn(an(l0(n.path)),r,"TargetPurposeLimboResolution",lu.ce))}}async function za(t,e,n){const r=Y(t),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=yf.As(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(l,u){const h=Y(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,m=>M.forEach(m.Es,w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>M.forEach(m.ds,w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!os(f))throw f;B(vf,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=h.Ms.get(m),C=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(C);h.Ms=h.Ms.insert(m,x)}}}(r.localStore,s))}async function K2(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(If,"User change. New user:",e.toKey());const r=await L0(n.localStore,e);n.currentUser=e,function(i,s){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new $(O.CANCELLED,s))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r.Ls)}}function G2(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let i=ne();const s=n.Iu.get(e);if(!s)return i;for(const a of s){const l=n.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function Y0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$2.bind(null,e),e.Pu.H_=x2.bind(null,e.eventManager),e.Pu.yu=A2.bind(null,e.eventManager),e}function W2(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=B2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class Pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return QN(this.persistence,new KN,e.initialUser,this.serializer)}Cu(e){return new P0(gf.mi,this.serializer)}Du(e){return new n2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pl.provider={build:()=>new Pl};class Q2 extends Pl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){se(this.persistence.referenceDelegate instanceof Rl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new P0(r=>Rl.mi(r,n),this.serializer)}}class Xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K2.bind(null,this.syncEngine),await T2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new I2}()}createDatastore(e){const n=gu(e.databaseInfo.databaseId),r=function(i){return new o2(i)}(e.databaseInfo);return function(i,s,a,l){return new h2(i,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(n,r,i,s,a){return new f2(n,r,i,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>hy(this.syncEngine,n,0),function(){return sy.v()?new sy:new r2}())}createSyncEngine(e,n){return function(r,i,s,a,l,u,h){const f=new O2(r,i,s,a,l,u);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=Y(r);B(Wr,"RemoteStore shutting down."),i.Ea.add(5),await ja(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Xh.provider={build:()=>new Xh};/**
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
*/class X2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
*/const vr="FirestoreClient";class Y2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{B(vr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B(vr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),B(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await L0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J2(t);B(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>oy(e.remoteStore,i)),t._onlineComponents=e}async function J2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(vr,"Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Pl)}}else B(vr,"Using default OfflineComponentProvider"),await Pc(t,new Q2(void 0));return t._offlineComponents}async function J0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(vr,"Using user provided OnlineComponentProvider"),await fy(t,t._uninitializedComponentsProvider._online)):(B(vr,"Using default OnlineComponentProvider"),await fy(t,new Xh))),t._onlineComponents}function Z2(t){return J0(t).then(e=>e.syncEngine)}async function ex(t){const e=await J0(t),n=e.eventManager;return n.onListen=M2.bind(null,e.syncEngine),n.onUnlisten=V2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=U2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=j2.bind(null,e.syncEngine),n}function tx(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const h=new X2({next:m=>{h.Nu(),s.enqueueAndForget(()=>N2(i,f)),m.fromCache&&l.source==="server"?u.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new R2(a,h,{includeMetadataChanges:!0,qa:!0});return C2(i,f)}(await ex(t),t.asyncQueue,e,n,r)),r.promise}/**
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
*/function Z0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
*/const py=new Map;/**
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
*/const e1="firestore.googleapis.com",my=!0;class gy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=e1,this.ssl=my}else this.host=e.host,this.ssl=e.ssl??my;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=D0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xN)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z0(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rC;switch(n.type){case"firstParty":return new oC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=py.get(e);n&&(B("ComponentProvider","Removing Datastore"),py.delete(e),n.terminate())}(this),Promise.resolve()}}function nx(t,e,n,r={}){var i;t=ka(t,wu);const s=rs(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&(ib(`https://${u}`),sb("Firestore",!0)),a.host!==e1&&a.host!==u&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:s,emulatorOptions:r};if(!dr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ye.MOCK_USER;else{f=aT(r.mockUserToken,(i=t._app)==null?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ye(w)}t._authCredentials=new iC(new Bb(f,m))}}/**
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
*/class ii{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ii(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ua(n,Ve._jsonSchema))return new Ve(e,r||null,new H(ue.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Ae("string",Ve._jsonSchemaVersion),referencePath:Ae("string")};class ur extends ii{constructor(e,n,r){super(e,n,l0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new H(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function t1(t,e,...n){if(t=nt(t),qb("collection","path",e),t instanceof wu){const r=ue.fromString(e,...n);return xg(r),new ur(t,null,r)}{if(!(t instanceof Ve||t instanceof ur))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return xg(r),new ur(t.firestore,null,r)}}function bu(t,e,...n){if(t=nt(t),arguments.length===1&&(e=rf.newId()),qb("doc","path",e),t instanceof wu){const r=ue.fromString(e,...n);return Ng(r),new Ve(t,null,new H(r))}{if(!(t instanceof Ve||t instanceof ur))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ng(r),new Ve(t.firestore,t instanceof ur?t.converter:null,new H(r))}}/**
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
*/const yy="AsyncQueue";class vy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new M0(this,"async_queue_retry"),this._c=()=>{const r=Dc();r&&B(yy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!os(e))throw e;B(yy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nn("INTERNAL UNHANDLED ERROR: ",wy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Sf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:wy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function wy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Eu extends wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vy(e),this._firestoreClient=void 0,await e}}}function rx(t,e){const n=typeof t=="object"?t:Qd(),r=typeof t=="string"?t:_l,i=Zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iT("firestore");s&&nx(i,...s)}return i}function n1(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ix(t),t._firestoreClient}function ix(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new TC(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Z0(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)==null?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(n=i.localCache)!=null&&n._offlineComponentProvider&&(r=i.localCache)!=null&&r._onlineComponentProvider&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Y2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
*/class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ke.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ua(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Ae("string",Nt._jsonSchemaVersion),bytes:Ae("string")};/**
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
*/class Nf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class r1{constructor(e){this._methodName=e}}/**
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
*/class un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(Ua(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Ae("string",un._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
*/class cn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ua(e,cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new cn(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:Ae("string",cn._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
*/const sx=/^__.*__$/;class ax{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}function i1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ac:t})}}class xf{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new xf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.Vc({path:r,fc:!1});return i.gc(e),i}yc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.Vc({path:r,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ll(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(i1(this.Ac)&&sx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ox{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gu(e)}Cc(e,n,r,i=!1){return new xf({Ac:e,methodName:n,Dc:r,path:Be.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function s1(t){const e=t._freezeSettings(),n=gu(t._databaseId);return new ox(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lx(t,e,n,r,i,s={}){const a=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);l1("Data must be an object, but it was:",a,r);const l=a1(r,a);let u,h;if(s.merge)u=new zt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const w=cx(e,m,n);if(!a.contains(w))throw new $(O.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);dx(f,w)||f.push(w)}u=new zt(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new ax(new Ct(l),u,h)}function ux(t,e,n,r=!1){return Af(n,t.Cc(r?4:3,e))}function Af(t,e){if(o1(t=nt(t)))return l1("Unsupported field value:",e,t),a1(t,e);if(t instanceof r1)return function(n,r){if(!i1(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const a of n){let l=Af(a,r.wc(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GC(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ae.fromDate(n);return{timestampValue:Al(r.serializer,i)}}if(n instanceof ae){const i=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Al(r.serializer,i)}}if(n instanceof un)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nt)return{bytesValue:_0(r.serializer,n._byteString)};if(n instanceof Ve){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Sc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pf(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof cn)return function(i,s){return{mapValue:{fields:{[Zb]:{stringValue:e0},[Il]:{arrayValue:{values:i.toArray().map(a=>{if(typeof a!="number")throw s.Sc("VectorValues must only contain numeric values.");return cf(s.serializer,a)})}}}}}}(n,r);throw r.Sc(`Unsupported field value: ${ou(n)}`)}(t,e)}function a1(t,e){const n={};return Gb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=Af(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function o1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ae||t instanceof un||t instanceof Nt||t instanceof Ve||t instanceof r1||t instanceof cn)}function l1(t,e,n){if(!o1(n)||!Hb(n)){const r=ou(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function cx(t,e,n){if((e=nt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return u1(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const hx=new RegExp("[~\\*/\\[\\]]");function u1(t,e,n){if(e.search(hx)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nf(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function dx(t,e){return t.some(n=>n.isEqual(e))}/**
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
*/class c1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ku("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fx extends c1{data(){return super.data()}}function ku(t,e){return typeof e=="string"?u1(t,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
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
*/function px(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{}class h1 extends Rf{}function Df(t,e,...n){let r=[];e instanceof Rf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(l=>l instanceof Pf).length,a=i.filter(l=>l instanceof Su).length;if(s>1||s>0&&a>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Su extends h1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Su(e,n,r)}_apply(e){const n=this._parse(e);return f1(e._query,n),new ii(e.firestore,e.converter,jh(e._query,n))}_parse(e){const n=s1(e.firestore);return function(r,i,s,a,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ey(h,u);const m=[];for(const w of h)m.push(by(a,r,w));f={arrayValue:{values:m}}}else f=by(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ey(h,u),f=ux(s,i,h,u==="in"||u==="not-in");return xe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mx(t,e,n){const r=e,i=ku("where",t);return Su._create(i,r,n)}class Pf extends Rf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const a=i.getFlattenedFilters();for(const l of a)f1(s,l),s=jh(s,l)}(e._query,n),new ii(e.firestore,e.converter,jh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lf extends h1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lf(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ca(i,s)}(e._query,this._field,this._direction);return new ii(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ls(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function d1(t,e="asc"){const n=e,r=ku("orderBy",t);return Lf._create(r,n)}function by(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u0(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ug(t,new H(r))}if(n instanceof Ve)return Ug(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function Ey(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f1(t,e){const n=function(r,i){for(const s of r)for(const a of s.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gx{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)==null?void 0:n[Il].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>Te(a.doubleValue));return new cn(s)}convertGeoPoint(e){return new un(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const n=pr(e);return new ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);se(R0(r),9688,{name:e});const i=new _a(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
*/function yx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oi extends c1{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ku("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Oi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),n}}Oi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oi._jsonSchema={type:Ae("string",Oi._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Ho extends Oi{data(e={}){return super.data(e)}}class Mi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ho(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(a=>{const l=new Ho(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Io(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ho(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Io(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:vx(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:Ae("string",Mi._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class wx extends gx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function Of(t){t=ka(t,ii);const e=ka(t.firestore,Eu),n=n1(e),r=new wx(e);return px(t._query),tx(n,t._query).then(i=>new Mi(e,r,t,i))}function Mf(t){return m1(ka(t.firestore,Eu),[new hf(t._key,on.none())])}function p1(t,e){const n=ka(t.firestore,Eu),r=bu(t),i=yx(t.converter,e);return m1(n,[lx(s1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function m1(t,e){return function(n,r){const i=new lr;return n.asyncQueue.enqueueAndForget(async()=>z2(await Z2(n),r,i)),i.promise}(n1(t),e)}(function(t,e=!0){(function(n){ss=n})(is),dn(new Gt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),a=new Eu(new sC(n.getProvider("auth-internal")),new lC(s,n.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(l.options.projectId,u)}(s,r),s);return i={useFetchStreams:e,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Rt(Tg,_g,t),Rt(Tg,_g,"esm2020")})();function g1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=g1,y1=new Jr("auth","Firebase",g1());/**
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
*/const Ol=new iu("@firebase/auth");function Ex(t,...e){Ol.logLevel<=ee.WARN&&Ol.warn(`Auth (${is}): ${t}`,...e)}function Ko(t,...e){Ol.logLevel<=ee.ERROR&&Ol.error(`Auth (${is}): ${t}`,...e)}/**
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
*/function pn(t,...e){throw Ff(t,...e)}function Ht(t,...e){return Ff(t,...e)}function Uf(t,e,n){const r={...bx(),[e]:n};return new Jr("auth","Firebase",r).create(e,{appName:t.name})}function Vr(t){return Uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pn(t,"argument-error"),Uf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ff(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y1.create(t,...e)}function W(t,e,...n){if(!t)throw Ff(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ko(e),new Error(e)}function An(t,e){t||bn(e)}/**
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
*/function Yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Sx(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
*/function Tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sx()||ab()||"connection"in navigator)?navigator.onLine:!0}function _x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
*/class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=uT()||dT()}get(){return Tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Vf(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
*/class v1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Ix={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const Cx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nx=new $a(3e4,6e4);function jf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function cs(t,e,n,r,i={}){return w1(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Ma({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return hT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&rs(t.emulatorConfig.host)&&(h.credentials="include"),v1.fetch()(await b1(t,t.config.apiHost,n,l),h)})}async function w1(t,e,n){t._canInitEmulator=!1;const r={...Ix,...e};try{const i=new Ax(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Co(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Co(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uf(t,f,h);pn(t,f)}}catch(i){if(i instanceof Qt)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function xx(t,e,n,r,i={}){const s=await cs(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function b1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Vf(t.config,i):`${t.config.apiScheme}://${i}`;return Cx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class Ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),Nx.get())})}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
*/async function Rx(t,e){return cs(t,"POST","/v1/accounts:delete",e)}async function Ml(t,e){return cs(t,"POST","/v1/accounts:lookup",e)}/**
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
*/function na(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dx(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=zf(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:na(Lc(i.auth_time)),issuedAtTime:na(Lc(i.iat)),expirationTime:na(Lc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=eb(n);return i?JSON.parse(i):(Ko("Failed to decode base64 JWT payload"),null)}catch(i){return Ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sy(t){const e=zf(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&Px(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Px({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
*/class Lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=na(this.lastLoginAt),this.creationTime=na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,Ml(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=(e=s.providerUserInfo)!=null&&e.length?E1(s.providerUserInfo):[],l=Mx(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Jh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Ox(t){const e=nt(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mx(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function E1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
*/async function Ux(t,e){const n=await w1(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await b1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&rs(t.emulatorConfig.host)&&(u.credentials="include"),v1.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fx(t,e){return cs(t,"POST","/v2/accounts:revokeToken",jf(t,e))}/**
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
*/class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ux(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Ui;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
*/function jn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dx(this,e)}reload(){return Ox(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await Aa(this,Rx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:P}=n;W(m&&P,e,"internal-error");const V=Ui.fromJSON(this.name,P);W(typeof m=="string",e,"internal-error"),jn(r,e.name),jn(i,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof C=="boolean",e,"internal-error"),jn(s,e.name),jn(a,e.name),jn(l,e.name),jn(u,e.name),jn(h,e.name),jn(f,e.name);const T=new $t({uid:m,auth:e,email:i,emailVerified:w,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(T.providerData=x.map(E=>({...E}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?E1(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new $t({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
*/const Ty=new Map;function En(t){An(t instanceof Function,"Expected a class definition");let e=Ty.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ty.set(t,e),e)}/**
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
*/class k1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k1.type="NONE";const _y=k1;/**
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
*/function Go(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Go(this.userKey,i.apiKey,s),this.fullPersistenceKey=Go("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ml(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(En(_y),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||En(_y);const a=Go(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const w=await Ml(e,{idToken:f}).catch(()=>{});if(!w)break;m=await $t._fromGetAccountInfoResponse(e,w,f)}else m=$t._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fi(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Fi(s,e,r))}}/**
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
*/function Iy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N1(e))return"Blackberry";if(x1(e))return"Webos";if(T1(e))return"Safari";if((e.includes("chrome/")||_1(e))&&!e.includes("edge/"))return"Chrome";if(C1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S1(t=tt()){return/firefox\//i.test(t)}function T1(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _1(t=tt()){return/crios\//i.test(t)}function I1(t=tt()){return/iemobile/i.test(t)}function C1(t=tt()){return/android/i.test(t)}function N1(t=tt()){return/blackberry/i.test(t)}function x1(t=tt()){return/webos/i.test(t)}function $f(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vx(t=tt()){var e;return $f(t)&&!!((e=window.navigator)!=null&&e.standalone)}function jx(){return fT()&&document.documentMode===10}function A1(t=tt()){return $f(t)||C1(t)||x1(t)||N1(t)||/windows phone/i.test(t)||I1(t)}/**
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
*/function R1(t,e=[]){let n;switch(t){case"Browser":n=Iy(tt());break;case"Worker":n=`${Iy(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
*/class zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
*/async function $x(t,e={}){return cs(t,"GET","/v2/passwordPolicy",jf(t,e))}/**
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
*/const Bx=6;class qx{constructor(e){var n;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Bx,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
*/class Hx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cy(this),this.idTokenSubscription=new Cy(this),this.beforeStateQueue=new zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ml(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)==null?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u!=null&&u.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Vr(this));const n=e?nt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $x(this),n=new qx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return n!=null&&n.error&&Ex(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tu(t){return nt(t)}class Cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kx(t){Bf=t}function Gx(t){return Bf.loadJS(t)}function Wx(){return Bf.gapiScript}function Qx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
*/function Xx(t,e){const n=Zr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(dr(i,e??{}))return r;pn(r,"already-initialized")}return n.initialize({options:e})}function Yx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jx(t,e,n){const r=Tu(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=D1(e),{host:a,port:l}=Zx(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(dr(h,r.config.emulator)&&dr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,rs(a)?(ib(`${s}//${a}${u}`),sb("Auth",!0)):eA()}function D1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zx(t){const e=D1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ny(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Ny(a)}}}function Ny(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
*/class P1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
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
*/async function Vi(t,e){return xx(t,"POST","/v1/accounts:signInWithIdp",jf(t,e))}/**
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
*/const tA="http://localhost";class Qr extends P1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Qr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:tA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
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
*/class qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Ba extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class Hn extends Ba{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
*/class yn extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
*/class Kn extends Ba{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
*/class Gn extends Ba{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
*/class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),a=xy(r);return new Zi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xy(r);return new Zi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
*/class Fl extends Qt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fl(e,n,r,i)}}function L1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,i,e,r):i})}async function nA(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",r)}/**
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
*/async function rA(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Vr(r));const i="reauthenticate";try{const s=await Aa(t,L1(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=zf(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),Zi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
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
*/async function iA(t,e,n=!1){if(jt(t.app))return Promise.reject(Vr(t));const r="signIn",i=await L1(t,r,e),s=await Zi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sA(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function oA(t){return nt(t).signOut()}const Vl="__sak";/**
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
*/class O1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const lA=1e3,uA=10;class M1 extends O1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);jx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M1.type="LOCAL";const cA=M1;/**
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
*/class U1 extends O1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U1.type="SESSION";const F1=U1;/**
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
*/function hA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class _u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await hA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_u.receivers=[];/**
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
*/function Hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
*/class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Hf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function hn(){return window}function fA(t){hn().location.href=t}/**
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
*/function V1(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function pA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function gA(){return V1()?self:null}/**
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
*/const j1="firebaseLocalStorageDb",yA=1,jl="firebaseLocalStorage",z1="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function vA(){const t=indexedDB.deleteDatabase(j1);return new qa(t).toPromise()}function Zh(){const t=indexedDB.open(j1,yA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:z1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await vA(),e(await Zh()))})})}async function Ay(t,e,n){const r=Iu(t,!0).put({[z1]:e,value:n});return new qa(r).toPromise()}async function wA(t,e){const n=Iu(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function Ry(t,e){const n=Iu(t,!0).delete(e);return new qa(n).toPromise()}const bA=800,EA=3;class $1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_u._getInstance(gA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(e=r[0])!=null&&e.fulfilled&&(n=r[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zh();return await Ay(e,Vl,"1"),await Ry(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$1.type="LOCAL";const kA=$1;new $a(3e4,6e4);/**
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
*/function B1(t,e){return e?En(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
*/class Kf extends P1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SA(t){return iA(t.auth,new Kf(t),t.bypassAuthState)}function TA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rA(n,new Kf(t),t.bypassAuthState)}async function _A(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),nA(n,new Kf(t),t.bypassAuthState)}/**
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
*/class q1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return _A;case"reauthViaPopup":case"reauthViaRedirect":return TA;default:pn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const IA=new $a(2e3,1e4);async function CA(t,e,n){if(jt(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=Tu(t);kx(t,e,qf);const i=B1(r,n);return new Mr(r,"signInViaPopup",e,i).executeNotNull()}class Mr extends q1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IA.get())};e()}}Mr.currentPopupAction=null;/**
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
*/const NA="pendingRedirect",Wo=new Map;class xA extends q1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const n=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=PA(e),r=DA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RA(t,e){Wo.set(t._key(),e)}function DA(t){return En(t._redirectPersistence)}function PA(t){return Go(NA,t.config.apiKey,t.name)}async function LA(t,e,n=!1){if(jt(t.app))return Promise.reject(Vr(t));const r=Tu(t),i=B1(r,e),s=await new xA(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
*/const OA=10*60*1e3;class MA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H1(t);default:return!1}}/**
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
*/async function FA(t,e={}){return cs(t,"GET","/v1/projects",e)}/**
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
*/const VA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function zA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FA(t);for(const n of e)try{if($A(n))return}catch{}pn(t,"unauthorized-domain")}function $A(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!jA.test(n))return!1;if(VA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
*/const BA=new $a(3e4,6e4);function Py(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qA(t){return new Promise((e,n)=>{var r,i,s;function a(){Py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Py(),n(Ht(t,"network-request-failed"))},timeout:BA.get()})}if((i=(r=hn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((s=hn().gapi)!=null&&s.load)a();else{const l=Qx("iframefcb");return hn()[l]=()=>{gapi.load?a():n(Ht(t,"network-request-failed"))},Gx(`${Wx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function HA(t){return Qo=Qo||qA(t),Qo}/**
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
*/const KA=new $a(5e3,15e3),GA="__/auth/iframe",WA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vf(e,WA):`https://${t.config.authDomain}/${GA}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=XA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ma(r).slice(1)}`}async function JA(t){const e=await HA(t),n=hn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:YA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ht(t,"network-request-failed"),l=hn().setTimeout(()=>{s(a)},KA.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
*/const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eR=500,tR=600,nR="_blank",rR="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iR(t,e,n,r=eR,i=tR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ZA,width:r.toString(),height:i.toString(),top:s,left:a},h=tt().toLowerCase();n&&(l=_1(h)?nR:n),S1(h)&&(e=e||rR,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[C,x])=>`${w}${C}=${x},`,"");if(Vx(h)&&l!=="_self")return sR(e||"",l),new Ly(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new Ly(m)}function sR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
*/const aR="__/auth/handler",oR="emulator/auth/handler",lR=encodeURIComponent("fac");async function Oy(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",wT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Ba){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${lR}=${encodeURIComponent(u)}`:"";return`${uR(t)}?${Ma(l).slice(1)}${h}`}function uR({config:t}){return t.emulator?Vf(t,oR):`https://${t.authDomain}/${aR}`}/**
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
*/const Oc="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F1,this._completeRedirectFn=LA,this._overrideRedirectResult=RA}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Oy(e,n,r,Yh(),i);return iR(e,a,Hf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Oy(e,n,r,Yh(),i);return fA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JA(e),r=new MA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},r=>{var i;const s=(i=r==null?void 0:r[0])==null?void 0:i[Oc];s!==void 0&&n(!!s),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A1()||T1()||$f()}}const hR=cR;var My="@firebase/auth",Uy="1.11.1";/**
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
*/class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pR(t){dn(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R1(t)},h=new Hx(r,i,s,u);return Yx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Gt("auth-internal",e=>{const n=Tu(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(My,Uy,fR(t)),Rt(My,Uy,"esm2020")}/**
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
*/const mR=5*60,gR=rb("authIdTokenMaxAge")||mR;let Fy=null;const yR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gR)return;const i=n==null?void 0:n.token;Fy!==i&&(Fy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vR(t=Qd()){const e=Zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xx(t,{popupRedirectResolver:hR,persistence:[kA,cA,F1]}),r=rb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=yR(s.toString());aA(n,a,()=>a(n.currentUser)),sA(n,l=>a(l))}}const i=tb("auth");return i&&Jx(n,`http://${i}`),n}function wR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Kx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pR("Browser");const bR={apiKey:"AIzaSyC9sKP9wg9OO8csn470scn0CdB-tR35hR8",authDomain:"kouri-60627.firebaseapp.com",projectId:"kouri-60627",storageBucket:"kouri-60627.firebasestorage.app",messagingSenderId:"856794673897",appId:"1:856794673897:web:cb0fee179b8b06e585b678",measurementId:"G-QNJD5QQ5X4"},Gf=db(bR);JI(Gf);const K1=rx(Gf),Cu=vR(Gf),Wf=t=>t1(K1,"users",t,"budget");async function ER(t,e){const n={...e,date:ae.fromDate(new Date),createdAt:ae.now()};return{id:(await p1(Wf(t),n)).id,...n,date:n.date.toDate().toLocaleDateString()}}async function kR(t){try{return(await Of(Df(Wf(t),d1("createdAt","desc")))).docs.map(e=>{var n;return{id:e.id,...e.data(),date:((n=e.data().date)==null?void 0:n.toDate().toLocaleDateString())||new Date().toLocaleDateString()}})}catch(e){return console.error("Error fetching transactions:",e),[]}}async function SR(t,e){await Mf(bu(Wf(t),e))}function TR(){return CA(Cu,new yn)}function _R(){return oA(Cu)}function IR(){return Cu.currentUser.displayName}function Qf(){const[t,e]=Ce.useState(null);return Ce.useEffect(()=>Cu.onAuthStateChanged(n=>{e(n||null)}),[]),t}const ci=[{id:"food",name:"🍕 Food",color:"#FF6B6B"},{id:"shopping",name:"🛍️ Shopping",color:"#4ECDC4"},{id:"pay",name:"💰 Pay",color:"#45B7D1"},{id:"entertainment",name:"🎬 Entertainment",color:"#96CEB4"},{id:"transport",name:"🚗 Transport",color:"#FFEAA7"},{id:"bills",name:"💡 Bills",color:"#DDA0DD"},{id:"health",name:"🏥 Health",color:"#98D8C8"},{id:"other",name:"📦 Other",color:"#B0B0B0"}];function CR(){var t;const[e,n]=Ce.useState([]),[r,i]=Ce.useState(""),[s,a]=Ce.useState(""),[l,u]=Ce.useState("food"),[h,f]=Ce.useState("all"),[m,w]=Ce.useState(!0),C=Qf();Ce.useEffect(()=>{C?x():(n([]),w(!1))},[C]);const x=async()=>{try{w(!0);const A=await kR(C.uid);n(A)}catch(A){console.error("Error loading transactions:",A);const U=localStorage.getItem(`budget_${C.uid}`);U&&n(JSON.parse(U))}finally{w(!1)}},P=()=>{C&&localStorage.setItem(`budget_${C.uid}`,JSON.stringify(e))},V=async A=>{if(A.preventDefault(),!r.trim()||!s)return;const U=ci.find(p=>p.id===l)||ci[0],v={description:r,amount:parseFloat(s),tag:U.id,tagName:U.name,tagColor:U.color};try{if(C){const p=await ER(C.uid,v);n([p,...e])}else{const p={...v,id:Date.now(),date:new Date().toLocaleDateString()};n([p,...e]),P()}i(""),a(""),u("food")}catch(p){console.error("Error saving transaction:",p),alert("Failed to save transaction. Please try again.")}},T=async A=>{try{C&&await SR(C.uid,A),n(e.filter(U=>U.id!==A)),C&&P()}catch(U){console.error("Error deleting transaction:",U),alert("Failed to delete transaction. Please try again.")}},E=e.reduce((A,U)=>A+U.amount,0),_=h==="all"?e:e.filter(A=>A.tag===h),L=ci.map(A=>({...A,total:e.filter(U=>U.tag===A.id).reduce((U,v)=>U+v.amount,0)}));return C?m?D.jsxs("div",{className:"budget",children:[D.jsx("h2",{children:"Simple Budget Tracker"}),D.jsx("p",{style:{textAlign:"center",color:"#5e35b1",padding:"40px"},children:"Loading your transactions..."})]}):D.jsxs("div",{className:"budget",children:[D.jsx("h2",{children:"Simple Budget Tracker"}),D.jsxs("div",{className:"tag-summary",children:[D.jsx("h3",{children:"Category Breakdown"}),D.jsx("div",{className:"tag-buttons-container",children:L.map(A=>D.jsxs("div",{className:"tag-item",style:{"--tag-color":A.color},children:[D.jsx("span",{children:A.name.split(" ")[0]}),D.jsxs("span",{children:["$",A.total.toFixed(2)]})]},A.id))})]}),D.jsx("form",{onSubmit:V,children:D.jsxs("div",{className:"budget-form-container",children:[D.jsx("input",{type:"text",placeholder:"Description",value:r,onChange:A=>i(A.target.value),required:!0}),D.jsx("input",{type:"number",placeholder:"Amount",value:s,onChange:A=>a(A.target.value),required:!0,step:"0.01"}),D.jsxs("div",{children:[D.jsx("label",{className:"tag-selection-label",children:"Select Category:"}),D.jsx("div",{className:"tag-buttons-container",children:ci.map(A=>D.jsx("button",{type:"button",onClick:()=>u(A.id),className:`tag-button ${l===A.id?"selected":""}`,style:{"--tag-color":A.color,"--tag-color-40":`${A.color}40`},children:D.jsx("span",{children:A.name})},A.id))})]}),D.jsx("button",{type:"submit",className:"add-transaction-button",children:"Add Transaction"})]})}),D.jsxs("div",{className:"total-filter-section",children:[D.jsxs("h3",{className:"total-amount",children:["Total: $",E.toFixed(2)]}),D.jsxs("div",{children:[D.jsx("label",{className:"filter-label",children:"Filter by Category:"}),D.jsxs("select",{value:h,onChange:A=>f(A.target.value),className:"filter-dropdown",children:[D.jsx("option",{value:"all",children:"All Categories"}),ci.map(A=>D.jsx("option",{value:A.id,children:A.name},A.id))]})]})]}),D.jsxs("div",{children:[D.jsxs("h3",{className:"transactions-header",children:["Transactions ",h!=="all"?`(${(t=ci.find(A=>A.id===h))==null?void 0:t.name})`:""]}),_.length===0?D.jsx("p",{className:"no-transactions",children:"No transactions yet. Add one above!"}):D.jsx("ul",{children:_.map(A=>D.jsxs("li",{className:"transaction-item",children:[D.jsxs("div",{className:"transaction-content",children:[D.jsxs("div",{className:"transaction-header",children:[D.jsx("span",{className:"tag-indicator",style:{"--tag-color":A.tagColor}}),D.jsx("p",{className:"transaction-description",children:A.description})]}),D.jsxs("div",{className:"transaction-meta",children:[D.jsx("span",{className:"transaction-tag",style:{"--tag-color":A.tagColor,"--tag-color-40":`${A.tagColor}40`,"--tag-color-60":`${A.tagColor}60`},children:A.tagName}),D.jsx("span",{className:"transaction-date",children:A.date||new Date().toLocaleDateString()})]})]}),D.jsxs("div",{className:"transaction-amount-section",children:[D.jsxs("div",{className:`transaction-amount ${A.amount>=0?"positive":"negative"}`,children:["$",A.amount>=0?"+":"",A.amount.toFixed(2)]}),D.jsx("button",{onClick:()=>T(A.id),className:"remove-button",children:"Remove"})]})]},A.id))})]})]}):D.jsxs("div",{className:"budget",children:[D.jsx("h2",{children:"Simple Budget Tracker"}),D.jsx("p",{style:{textAlign:"center",color:"#5e35b1",padding:"40px"},children:"Please sign in to save and access your budget data"})]})}const ra=t=>t1(K1,"users",t,"stocks");async function NR(t,e){const n={...e,savedAt:ae.now(),lastUpdated:ae.now()},r=await Of(Df(ra(t),mx("symbol","==",e.symbol)));if(!r.empty){const i=r.docs[0].id;await Mf(bu(ra(t),i))}return{id:(await p1(ra(t),n)).id,...n}}async function xR(t){try{return(await Of(Df(ra(t),d1("savedAt","desc")))).docs.map(e=>{var n,r;return{id:e.id,...e.data(),savedAt:((n=e.data().savedAt)==null?void 0:n.toDate())||new Date,lastUpdated:((r=e.data().lastUpdated)==null?void 0:r.toDate())||new Date}})}catch(e){return console.error("Error fetching saved stocks:",e),[]}}async function AR(t,e){await Mf(bu(ra(t),e))}const RR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ALPHA_VANTAGE_API_KEY:"16EKNGT6IQ8R0KIS"},DR=()=>{const[t,e]=Ce.useState([]),[n,r]=Ce.useState(""),[i,s]=Ce.useState(""),[a,l]=Ce.useState(!1),[u,h]=Ce.useState(!0),f=Qf();Ce.useEffect(()=>{f?m():(e([]),h(!1))},[f]);const m=async()=>{try{h(!0);const p=await xR(f.uid);e(p)}catch(p){console.error("Error loading saved stocks:",p);const y=localStorage.getItem(`stocks_${f.uid}`);y&&e(JSON.parse(y))}finally{h(!1)}},w=async p=>{if(f)try{await NR(f.uid,p),console.log("Stock saved to Firebase:",p.symbol)}catch(y){console.error("Error saving stock to Firebase:",y),localStorage.setItem(`stocks_${f.uid}`,JSON.stringify(t))}},C=async p=>{if(f)try{await AR(f.uid,p),console.log("Stock removed from Firebase:",p)}catch(y){console.error("Error removing stock from Firebase:",y)}};Ce.useEffect(()=>{console.log("Vite env:",RR),console.log("API Key from env:","16EKNGT6IQ8R0KIS")},[]);const x=async p=>{l(!0),s("");try{const y="16EKNGT6IQ8R0KIS";console.log("API key loaded correctly, fetching GLOBAL_QUOTE for:",p);const k=await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${p}&apikey=${y}`);console.log("Response status:",k.status);const S=await k.json();if(console.log("Full API Response:",S),S["Error Message"])return console.log("Error Message found:",S["Error Message"]),s("❌ Invalid stock symbol. Please check the symbol and try again."),null;if(S.Note)return console.log("API Note:",S.Note),s("⚠️ API rate limit reached. Please wait 1 minute."),null;const I=S["Global Quote"];if(console.log("Global Quote data:",I),!I||Object.keys(I).length===0)return console.log("No Global Quote data found. Available keys:",Object.keys(S)),S.Information?(s(`API Info: ${S.Information}`),null):(s("📊 No stock data available for this symbol."),null);const b=parseFloat(I["05. price"]),be=parseFloat(I["02. open"]),Oe=parseFloat(I["03. high"]),Xt=parseFloat(I["04. low"]),Lt=parseInt(I["06. volume"]),z=parseFloat(I["08. previous close"]),K=parseFloat(I["09. change"]),Q=parseFloat(I["10. change percent"].replace("%","")),le=I["07. latest trading day"];return console.log("Parsed data:",{price:b,open:be,high:Oe,low:Xt,volume:Lt,previousClose:z,change:K,changePercent:Q,date:le}),{symbol:p.toUpperCase(),name:p.toUpperCase(),price:b,open:be,high:Oe,low:Xt,volume:Lt,change:K,changePercent:Q,date:le,id:Date.now()+Math.random()}}catch(y){return console.error("Fetch error:",y),s(`🌐 Network error: ${y.message}`),null}finally{l(!1)}},P=async p=>(console.log("Trying GLOBAL_QUOTE endpoint..."),await x(p)||(console.log("GLOBAL_QUOTE failed, trying TIME_SERIES_DAILY..."),await V(p))),V=async p=>{var y;try{const k=await(await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${p}&apikey=16EKNGT6IQ8R0KIS`)).json();if(console.log("TIME_SERIES_DAILY response:",k),k["Error Message"])return s("Invalid stock symbol."),null;if(k.Note)return s("API rate limit reached."),null;const S=k["Time Series (Daily)"];if(!S)return s("No time series data available"),null;const I=Object.keys(S);if(I.length<2)return s("Not enough data for this stock"),null;const b=I[0],be=I[1],Oe=S[b],Xt=S[be],Lt=parseFloat(Oe["4. close"]),z=parseFloat(Xt["4. close"]),K=Lt-z,Q=K/z*100;return{symbol:p.toUpperCase(),name:((y=k["Meta Data"])==null?void 0:y["2. Symbol"])||p.toUpperCase(),price:Lt,open:parseFloat(Oe["1. open"]),high:parseFloat(Oe["2. high"]),low:parseFloat(Oe["3. low"]),volume:parseInt(Oe["5. volume"]),change:K,changePercent:Q,date:b,id:Date.now()+Math.random()}}catch(k){return console.error("Time series fetch error:",k),null}},T=async p=>{if(p.preventDefault(),!n.trim()){s("Please enter a stock symbol");return}const y=await P(n.toUpperCase().trim());if(y){if(t.some(S=>S.symbol===y.symbol)){s("This stock is already in your dashboard");return}const k=[...t,y];e(k),r(""),s(""),f?await w(y):localStorage.setItem("guest_stocks",JSON.stringify(k))}},E=async p=>{f&&await C(p);const y=t.filter(k=>k.id!==p);e(y),f?localStorage.setItem(`stocks_${f.uid}`,JSON.stringify(y)):localStorage.setItem("guest_stocks",JSON.stringify(y))},_=()=>t.reduce((p,y)=>p+y.price,0),L=()=>t.reduce((p,y)=>p+y.change,0),A=p=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(p),U=p=>p>=1e6?`${(p/1e6).toFixed(1)}M`:p>=1e3?`${(p/1e3).toFixed(1)}K`:p.toLocaleString(),v=["AAPL","MSFT","GOOGL","TSLA","AMZN","META","NVDA","NFLX"];return D.jsxs("div",{className:"stock-tracker",children:[D.jsxs("div",{className:"stock-header",children:[D.jsx("h2",{children:"Stock Tracker"}),D.jsx("p",{children:"Track stocks for your budgeting and investment planning"}),D.jsxs("div",{style:{marginTop:"15px"},children:[D.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:"Try these common symbols:"}),D.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:v.map(p=>D.jsx("button",{onClick:()=>{r(p),setTimeout(()=>{var y;(y=document.querySelector(".stock-search-button"))==null||y.click()},100)},style:{padding:"8px 16px",background:"rgba(107, 70, 193, 0.8)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"},children:p},p))})]})]}),D.jsxs("div",{className:"stock-search-section",children:[D.jsx("form",{onSubmit:T,className:"stock-search-form",children:D.jsxs("div",{className:"search-input-wrapper",children:[D.jsx("input",{type:"text",value:n,onChange:p=>{r(p.target.value),s("")},placeholder:"Search stock symbol (e.g., AAPL, TSLA, MSFT)",className:"stock-search-input",disabled:a}),D.jsx("button",{type:"submit",className:"stock-search-button",disabled:a||!n.trim(),children:a?D.jsx("span",{className:"search-loading",children:"Searching..."}):"Add Stock"})]})}),i&&D.jsx("div",{className:"stock-error-message",children:D.jsxs("div",{className:"error-content",children:[D.jsx("p",{children:i}),i.includes("Invalid")&&D.jsx("small",{className:"error-hint",children:"Tip: Use stock symbols, not company names (e.g., AAPL for Apple)"})]})})]}),D.jsxs("div",{className:"dashboard-summary",children:[D.jsx("div",{className:"summary-card",children:D.jsxs("div",{className:"summary-content",children:[D.jsx("h4",{children:"Total Stocks"}),D.jsx("p",{className:"summary-value",children:t.length})]})}),D.jsx("div",{className:"summary-card",children:D.jsxs("div",{className:"summary-content",children:[D.jsx("h4",{children:"Total Value"}),D.jsx("p",{className:"summary-value",children:A(_())})]})}),D.jsx("div",{className:"summary-card",children:D.jsxs("div",{className:"summary-content",children:[D.jsx("h4",{children:"Daily Change"}),D.jsxs("p",{className:`summary-value ${L()>=0?"positive":"negative"}`,children:[L()>=0?"+":"",A(L())]})]})})]}),D.jsxs("div",{className:"stocks-container",children:[D.jsx("h3",{className:"stocks-title",children:"Your Stock Dashboard"}),t.length===0?D.jsxs("div",{className:"empty-dashboard",children:[D.jsx("h4",{children:"No stocks tracked yet"}),D.jsx("p",{children:"Search for stocks above to add them to your dashboard"})]}):D.jsx("div",{className:"stocks-grid",children:t.map(p=>D.jsxs("div",{className:"stock-card",children:[D.jsxs("div",{className:"stock-card-header",children:[D.jsxs("div",{className:"stock-symbol-info",children:[D.jsx("h3",{className:"stock-symbol",children:p.symbol}),D.jsx("p",{className:"stock-name",children:p.name})]}),D.jsx("button",{onClick:()=>E(p.id),className:"remove-stock-button",title:"Remove from dashboard",children:"✕"})]}),D.jsxs("div",{className:"stock-card-body",children:[D.jsxs("div",{className:"stock-price-info",children:[D.jsx("span",{className:"stock-price",children:A(p.price)}),D.jsxs("span",{className:`stock-change ${p.change>=0?"positive":"negative"}`,children:[p.change>=0?"↗":"↘",A(Math.abs(p.change)),"(",p.changePercent>=0?"+":"",p.changePercent.toFixed(2),"%)"]})]}),D.jsxs("div",{className:"stock-details",children:[D.jsxs("div",{className:"detail-row",children:[D.jsx("span",{className:"detail-label",children:"Open:"}),D.jsx("span",{className:"detail-value",children:A(p.open)})]}),D.jsxs("div",{className:"detail-row",children:[D.jsx("span",{className:"detail-label",children:"High/Low:"}),D.jsxs("span",{className:"detail-value",children:[A(p.high)," / ",A(p.low)]})]}),D.jsxs("div",{className:"detail-row",children:[D.jsx("span",{className:"detail-label",children:"Volume:"}),D.jsx("span",{className:"detail-value",children:U(p.volume)})]}),D.jsxs("div",{className:"detail-row",children:[D.jsx("span",{className:"detail-label",children:"Date:"}),D.jsx("span",{className:"detail-value",children:p.date})]})]})]})]},p.id))})]})]})};function PR(){return D.jsx("button",{onClick:TR,children:"Sign In"})}function LR(){return D.jsxs("div",{children:["Hello, ",IR(),D.jsx("button",{onClick:_R,children:"Sign Out"})]})}function OR(){Ce.useState("budget");const t=Qf();return D.jsxs("div",{className:"App",children:[D.jsxs("header",{children:[D.jsx("span",{}),D.jsxs("div",{className:"header-controls",children:[t&&D.jsx("div",{className:"tab-buttons"}),D.jsx("div",{className:"auth-section",children:t?D.jsx(LR,{}):D.jsx(PR,{})})]})]}),t?D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"budget-container",children:D.jsx(CR,{})}),D.jsx("div",{className:"Stock",children:D.jsx(DR,{})})]}):D.jsx("div",{className:"login-prompt",children:"Please sign in to manage your budgets and track stocks"}),D.jsx("footer",{className:"signature-footer",children:D.jsxs("div",{className:"signature",children:[D.jsx("span",{className:"made-by",children:"Made by Jia and Cindy"}),D.jsxs("div",{className:"signature-images",children:[D.jsx("img",{src:"https://i.pinimg.com/474x/90/e9/cf/90e9cf9f27cf2997d3bee434088906cb.jpg",alt:"Momonga Christmas",className:"signature-image"}),D.jsx("img",{src:"https://i.pinimg.com/474x/fd/00/69/fd0069582379df3e57106a66bcbfbe13.jpg",alt:"Hachiware Christmas",className:"signature-image"})]})]})})]})}Mc.createRoot(document.getElementById("root")).render(D.jsx(FE.StrictMode,{children:D.jsx(OR,{})}));
