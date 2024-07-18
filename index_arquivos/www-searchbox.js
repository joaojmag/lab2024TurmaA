(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if(typeof Object.setPrototypeOf=="function")na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function sa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.A=function(a){this.l=a};
function ua(a,b){a.i={Pd:b,je:!0};a.g=a.o||a.s}
sa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.N=function(a){this.g=a};
function va(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function wa(a){a.o=0;var b=a.i.Pd;a.i=null;return b}
function xa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.je?a.g=a.o||a.s:b.N!=void 0&&a.s<b.N?(a.g=b.N,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new sa;this.l=a}
function za(a,b){ta(a.g);var c=a.g.m;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ua(a.g,g),Ba(a)}a.g.m=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ua(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.je)throw b.Pd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m["throw"],b,a.g.A):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ma});
v("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}typeof h=="function"?this.P(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.fc(h.resolve,h.reject)};
b.prototype.P=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return typeof r=="function"?function(t){try{l(r(t))}catch(u){m(u)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.fc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;this.l==null?f.l(k):this.l.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(t){return function(u){r[t]=u;q--;q==0&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).fc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||ra});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Fa(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ha(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ia(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ka(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?La:Ma;return F.apply(null,arguments)}
function G(){return Date.now()}
function H(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
I(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ra(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Sa(a){return{valueOf:a}.valueOf()}
;var Ta;function Ua(){if(Ta===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(c){C.console&&C.console.error(c.message)}Ta=a}else Ta=a}return Ta}
;function Va(a){this.g=a}
Va.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Va&&a.constructor===Va)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Ua();a=b?b.createScriptURL(a):a;return new Va(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g};
var bb=new ab("about:invalid#zClosurez");function cb(a){this.og=a}
function db(a){return new cb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var eb=[db("data"),db("http"),db("https"),db("mailto"),db("ftp"),new cb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function fb(a){for(var b=Ea.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""))}
var gb=Sa(function(){return typeof URL==="function"}),kb=["data:",
"http:","https:","mailto:","ftp:"],lb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function mb(a){if(a instanceof ab)if(a instanceof ab)a=a.g;else throw Error("");else a=lb.test(a)?a:void 0;return a}
;function nb(a,b){b=mb(b);b!==void 0&&(a.href=b)}
;var ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},qb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e};
function rb(a,b){b=ob(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function tb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ub(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function xb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return xb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var yb={};function zb(a){this.g=a}
zb.prototype.toString=function(){return this.g.toString()};
function Ab(a){if(a instanceof zb&&a.constructor===zb)return a.g;Ia(a);return"type_error:SafeHtml"}
function Bb(a){var b=Ua();a=b?b.createHTML(a):a;return new zb(a,yb)}
;function Cb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=Ab(b)}
;function Db(){throw Error("unknown trace type");}
;function Eb(a,b){a.src=Ya(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Fb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Gb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(a){return a?decodeURI(a):a}
function Jb(a){return Ib(a.match(Hb)[3]||null)}
function Kb(a){var b=a.match(Hb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Lb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Mb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Mb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Nb(a){var b=[],c;for(c in a)Mb(c,a[c],b);return b.join("&")}
function Ob(a,b){b=Nb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Pb(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Qb=/#|$/,Rb=/[?&]($|#)/;function Sb(){this.ab=this.ab;this.m=this.m}
Sb.prototype.ab=!1;Sb.prototype.dispose=function(){this.ab||(this.ab=!0,this.Ba())};
Sb.prototype.addOnDisposeCallback=function(a,b){this.ab?b!==void 0?a.call(b):a():(this.m||(this.m=[]),this.m.push(b!==void 0?F(a,b):a))};
Sb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Tb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Tb.prototype.stopPropagation=function(){this.i=!0};
Tb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ub=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Vb=Ha(1,!0),Wb=Ha(610401301,!1),Xb=Ha(188588736,Vb),Yb=Ha(645172343,Vb);function Zb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var $b,ac=C.navigator;$b=ac?ac.userAgentData||null:null;function bc(a){return Wb?$b?$b.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Zb().indexOf(a)!=-1}
;function cc(){return Wb?!!$b&&$b.brands.length>0:!1}
function dc(){return cc()?!1:J("Opera")}
function ec(){return cc()?!1:J("Trident")||J("MSIE")}
function fc(){return cc()?bc("Microsoft Edge"):J("Edg/")}
function gc(){return J("Safari")&&!(hc()||(cc()?0:J("Coast"))||dc()||(cc()?0:J("Edge"))||fc()||(cc()?bc("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function hc(){return cc()?bc("Chromium"):(J("Chrome")||J("CriOS"))&&!(cc()?0:J("Edge"))||J("Silk")}
function ic(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function jc(){var a=Zb();if(ec()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=ic(b);return dc()?a(["Version","Opera"]):
(cc()?0:J("Edge"))?a(["Edge"]):fc()?a(["Edg"]):J("Silk")?a(["Silk"]):hc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function kc(){return J("Gecko")&&!(Zb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function lc(){return Wb&&$b&&$b.platform?$b.platform==="Android":J("Android")}
function mc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=function(){};var oc=ec(),pc=J("Edge"),qc=kc(),rc=lc();function sc(a,b){Tb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
I(sc,Tb);var tc={2:"touch",3:"pen",4:"mouse"};
sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(qc){a:{try{nc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:tc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&sc.Fa.preventDefault.call(this)};
sc.prototype.stopPropagation=function(){sc.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
sc.prototype.preventDefault=function(){sc.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var uc="closure_listenable_"+(Math.random()*1E6|0);var vc=0;function wc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++vc;this.Ub=this.ec=!1}
function xc(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function yc(a){this.src=a;this.listeners={};this.g=0}
yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=zc(a,b,d,e);g>-1?(b=a[g],c||(b.ec=!1)):(b=new wc(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=zc(e,b,c,d);return b>-1?(xc(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function Ac(a,b){var c=b.type;c in a.listeners&&rb(a.listeners[c],b)&&(xc(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var Bc="closure_lm_"+(Math.random()*1E6|0),Cc={},Dc=0;function Ec(a,b,c,d,e){if(d&&d.once)Fc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ec(a,b[f],c,d,e);else c=Gc(c),a&&a[uc]?a.ra(b,c,Ka(d)?!!d.capture:!!d,e):Hc(a,b,c,!1,d,e)}
function Hc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ka(e)?!!e.capture:!!e,h=Ic(a);h||(a[Bc]=h=new yc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Jc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ub||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Lc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Dc++}}
function Jc(){function a(c){return b.call(a.src,a.listener,c)}
var b=Mc;return a}
function Fc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fc(a,b[f],c,d,e);else c=Gc(c),a&&a[uc]?a.g.add(String(b),c,!0,Ka(d)?!!d.capture:!!d,e):Hc(a,b,c,!0,d,e)}
function Nc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Nc(a,b[f],c,d,e);else(d=Ka(d)?!!d.capture:!!d,c=Gc(c),a&&a[uc])?a.g.remove(String(b),c,d,e):a&&(a=Ic(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=zc(b,c,d,e)),(c=a>-1?b[a]:null)&&Oc(c))}
function Oc(a){if(typeof a!=="number"&&a&&!a.Ub){var b=a.src;if(b&&b[uc])Ac(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Lc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Dc--;(c=Ic(b))?(Ac(c,a),c.g==0&&(c.src=null,b[Bc]=null)):xc(a)}}}
function Lc(a){return a in Cc?Cc[a]:Cc[a]="on"+a}
function Mc(a,b){if(a.Ub)a=!0;else{b=new sc(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&Oc(a);a=c.call(d,b)}return a}
function Ic(a){a=a[Bc];return a instanceof yc?a:null}
var Pc="__closure_events_fn_"+(Math.random()*1E9>>>0);function Gc(a){if(typeof a==="function")return a;a[Pc]||(a[Pc]=function(b){return a.handleEvent(b)});
return a[Pc]}
;function Qc(){Sb.call(this);this.g=new yc(this);this.B=this;this.u=null}
I(Qc,Sb);Qc.prototype[uc]=!0;Qc.prototype.addEventListener=function(a,b,c,d){Ec(this,a,b,c,d)};
Qc.prototype.removeEventListener=function(a,b,c,d){Nc(this,a,b,c,d)};
function Rc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Tb(b,a):b instanceof Tb?b.target=b.target||a:(e=b,b=new Tb(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Sc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Sc(g,c,!0,b)&&e,b.i||(e=Sc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Sc(g,c,!1,b)&&e}
Qc.prototype.Ba=function(){Qc.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,xc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Qc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Sc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&Ac(a.g,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Tc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Tc.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Uc(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Vc(){}
;function Wc(){var a=Xc;return document.createRange().createContextualFragment(Ab(Bb(a[0])))}
;function Yc(a,b){var c=b.createRange();c.selectNode(b.body);a=Bb(a);return c.createContextualFragment(Ab(a))}
;function Zc(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function $c(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var ad="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
bd=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["IMG",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["VIDEO",new Map([["src",{ja:1}]])],["AUDIO",new Map([["src",{ja:1}]])]],cd="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
dd=[["dir",{ja:3,conditions:Sa(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Sa(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Sa(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Sa(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],ed=new function(){var a=new Set(cd),b=new Map(dd),c=new Map(bd);
this.l=new Set(ad);this.g=c;this.i=a;this.m=b};function fd(){this.g=ed}
function gd(a,b){var c=document.implementation.createHTMLDocument("");a=hd(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Bb(c)}
function hd(a,b,c){b=Yc(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if($c(h))if(h=Zc(h),h===null)h=2;else{var k=a.g;h=h!=="FORM"&&(k.l.has(h)||k.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if($c(d))g=id(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function id(a,b,c){var d=Zc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var k=h.g.get(d);h=(k==null?0:k.has(f))?k.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(k=h.conditions){k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value);l=m.next().value;m=m.next().value;var p=void 0;if((l=(p=b.getNamedItem(l))==null?void 0:p.value)&&!m.has(l)){k=!1;break a}}}k=!0}if(k)switch(h.ja){case 1:jd(c,f,g);break;
case 2:a:if(h=void 0,gb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}jd(c,f,h!==void 0&&kb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:jd(c,f,g.toLowerCase());break;case 4:jd(c,f,g)}}return c}
function jd(a,b,c){a.setAttribute(b,c)}
var kd=Sa(function(){return new fd});function ld(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function md(a){var b=Ea.apply(1,arguments);if(b.length===0)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function nd(a,b){a=ld(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];h!==null&&h!==void 0&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function od(a,b){this.width=a;this.height=b}
n=od.prototype;n.clone=function(){return new od(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pd(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function qd(a){typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(rd||(rd=sd()),rd(a)):C.setImmediate(a)}
var rd;function sd(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=pd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Kd;c.Kd=null;e()}};
return function(e){d.next={Kd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function td(a){C.setTimeout(function(){throw a;},0)}
;function ud(){this.l=this.g=null}
ud.prototype.add=function(a,b){var c=vd.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
ud.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var vd=new Tc(function(){return new wd},function(a){return a.reset()});
function wd(){this.next=this.scope=this.g=null}
wd.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
wd.prototype.reset=function(){this.next=this.scope=this.g=null};var xd,yd=!1,zd=new ud;function Ad(a,b){xd||Bd();yd||(xd(),yd=!0);zd.add(a,b)}
function Bd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);xd=function(){a.then(Cd)}}else xd=function(){qd(Cd)}}
function Cd(){for(var a;a=zd.remove();){try{a.g.call(a.scope)}catch(b){td(b)}Uc(vd,a)}yd=!1}
;function Dd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Vc)try{var b=this;a.call(void 0,function(c){Ed(b,2,c)},function(c){Ed(b,3,c)})}catch(c){Ed(this,3,c)}}
function Fd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Fd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Gd=new Tc(function(){return new Fd},function(a){a.reset()});
function Hd(a,b,c){var d=Gd.get();d.i=a;d.l=b;d.context=c;return d}
Dd.prototype.then=function(a,b,c){return Id(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Dd.prototype.$goog_Thenable=!0;Dd.prototype.cancel=function(a){if(this.g==0){var b=new Jd(a);Ad(function(){Kd(this,b)},this)}};
function Kd(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?Kd(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Ld(c),Md(c,e,3,b)))}a.i=null}else Ed(a,3,b)}
function Nd(a,b){a.l||a.g!=2&&a.g!=3||Od(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Id(a,b,c,d){var e=Hd(null,null,null);e.g=new Dd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.l=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Jd?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Nd(a,e);return e.g}
Dd.prototype.B=function(a){this.g=0;Ed(this,2,a)};
Dd.prototype.D=function(a){this.g=0;Ed(this,3,a)};
function Ed(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Dd){Nd(d,Hd(e||Vc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ka(d))try{var k=d.then;if(typeof k==="function"){Pd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Od(a),b!=3||c instanceof Jd||Qd(a,c))}}
function Pd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Od(a){a.s||(a.s=!0,Ad(a.A,a))}
function Ld(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Dd.prototype.A=function(){for(var a;a=Ld(this);)Md(this,a,this.g,this.u);this.s=!1};
function Md(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Rd(b,c,d);else try{b.m?b.i.call(b.context):Rd(b,c,d)}catch(e){Sd.call(null,e)}Uc(Gd,b)}
function Rd(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Qd(a,b){a.o=!0;Ad(function(){a.o&&Sd.call(null,b)})}
var Sd=td;function Jd(a){Oa.call(this,a)}
I(Jd,Oa);Jd.prototype.name="cancel";function Td(a,b){Qc.call(this);this.i=a||1;this.l=b||C;this.o=F(this.Yg,this);this.s=G()}
I(Td,Qc);n=Td.prototype;n.enabled=!1;n.La=null;n.Yg=function(){if(this.enabled){var a=G()-this.s;a>0&&a<this.i*.8?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Rc(this,"tick"),this.enabled&&(Ud(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=G())};
function Ud(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){Td.Fa.Ba.call(this);Ud(this);delete this.l};var Vd=mc()||J("iPod"),Wd=J("iPad");!J("Android")||hc();hc();var Xd=gc()&&!(mc()||J("iPad")||J("iPod"));var Yd={},Zd=null;
function $d(a,b){Ja(a);b===void 0&&(b=0);if(!Zd){Zd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));Yd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];Zd[h]===void 0&&(Zd[h]=g)}}}b=Yd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ae=typeof Uint8Array!=="undefined",be=!oc&&typeof btoa==="function";function ce(){return typeof BigInt==="function"}
;var de=0,ee=0;function fe(a){var b=a<0;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(ge(c,a)),b=c.next().value,a=c.next().value,c=b);de=c>>>0;ee=a>>>0}
function he(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ce()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=Math.floor(a/1E7),a%=1E7),c>=1E7&&(b+=Math.floor(c/1E7),c%=1E7),c=b+ie(c)+ie(a));return c}
function ie(a){a=String(a);return"0000000".slice(a.length)+a}
function je(){var a=de,b=ee;b&2147483648?ce()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(ge(a,b)),a=b.next().value,b=b.next().value,a="-"+he(a,b)):a=he(a,b);return a}
function ge(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var ke=typeof Symbol==="function"&&typeof Symbol()==="symbol";function le(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var me=le(),ne=le("0di"),oe=le("2ex"),pe=le("1oa");Math.max.apply(Math,x(Object.values({zh:1,xh:2,wh:4,Ch:8,Bh:16,Ah:32,rh:64,Eh:128,vh:256,uh:512,yh:1024,sh:2048,Dh:4096,th:8192})));var qe=ke?function(a,b){a[me]|=b}:function(a,b){a.Da!==void 0?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},re=ke?function(a,b){a[me]&=~b}:function(a,b){a.Da!==void 0&&(a.Da&=~b)};
function se(a,b,c){return c?a|b:a&~b}
var te=ke?function(a){return a[me]|0}:function(a){return a.Da|0},ue=ke?function(a){return a[me]}:function(a){return a.Da},ve=ke?function(a,b){a[me]=b;
return a}:function(a,b){a.Da!==void 0?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function we(a){qe(a,34);return a}
function xe(a,b){ve(b,(a|0)&-14591)}
function ye(a,b){ve(b,(a|34)&-14557)}
function ze(a){a=a>>14&1023;return a===0?536870912:a}
;var Ae={},Be={};function Ce(a){return!(!a||typeof a!=="object"||a.tg!==Be)}
function De(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ee(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=te(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;ve(a,d|1);return!0}
var Fe,Ge=[];ve(Ge,55);Fe=Object.freeze(Ge);function He(a){if(a&2)throw Error();}
function Ie(a,b,c){this.i=0;this.g=a;this.l=b;this.m=c}
Ie.prototype.next=function(){if(this.i<this.g.length){var a=this.g[this.i++];return{done:!1,value:this.l?this.l.call(this.m,a):a}}return{done:!0,value:void 0}};
Ie.prototype[Symbol.iterator]=function(){return new Ie(this.g,this.l,this.m)};
function Je(){}
Object.freeze(new function(){});
Object.freeze(new Je);Object.freeze(new Je);var Ke;function Le(a){a=Error(a);Fb(a,"warning");return a}
;function Me(a){return a.displayName||a.name||"unknown type name"}
var Ne=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Oe(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Ne.test(a)}
function Pe(a){if(a!=null){var b=!!b;if(!Oe(a))throw Le("int64");typeof a==="string"?a=Qe(a):b?(Oe(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Re(b)?a=b:(fe(a),a=je()))):a=Se(a)}return a}
function Re(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Se(a){Oe(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){fe(a);var b=de,c=ee;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Qe(a){Oe(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));if(!Re(a)){if(a.length<16)fe(Number(a));else if(ce())a=BigInt(a),de=Number(a&BigInt(4294967295))>>>0,ee=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");ee=de=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ee*=1E6,de=de*1E6+d,de>=4294967296&&(ee+=Math.trunc(de/4294967296),ee>>>=0,de>>>=0);b&&(b=w(ge(de,ee)),a=b.next().value,
b=b.next().value,de=a,ee=b)}a=je()}return a}
function Te(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ue(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Me(b)+" but got "+(a&&Me(a.constructor)));return a}
function Ve(a,b,c,d){if(a!=null&&typeof a==="object"&&a.gd===Ae)return a;if(!Array.isArray(a))return c?d&2?(a=b[ne])?b=a:(a=new b,we(a.M),b=b[ne]=a):b=new b:b=void 0,b;var e=c=te(a);e===0&&(e|=d&32);e|=d&2;e!==c&&ve(a,e);return new b(a)}
;var We;
function K(a,b,c){a==null&&(a=We);We=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=te(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(De(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}ve(a,d);return a}
;var Xe=function(){try{var a=function(){return ma(Map,[],this.constructor)};
y(a,Map);nc(new a);return!1}catch(b){return!0}}();
function Ye(){this.g=new Map}
n=Ye.prototype;n.get=function(a){return this.g.get(a)};
n.set=function(a,b){this.g.set(a,b);this.size=this.g.size;return this};
n.delete=function(a){a=this.g.delete(a);this.size=this.g.size;return a};
n.clear=function(){this.g.clear();this.size=this.g.size};
n.has=function(a){return this.g.has(a)};
n.entries=function(){return this.g.entries()};
n.keys=function(){return this.g.keys()};
n.values=function(){return this.g.values()};
n.forEach=function(a,b){return this.g.forEach(a,b)};
Ye.prototype[Symbol.iterator]=function(){return this.entries()};
var Ze=function(){function a(){return ma(Map,[],this.constructor)}
if(Xe)return Object.setPrototypeOf(Ye.prototype,Map.prototype),Object.defineProperties(Ye.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ye;y(a,Map);return a}();
function $e(a){return a}
function af(a,b,c,d){c=c===void 0?$e:c;d=d===void 0?$e:d;var e=Ze.call(this)||this;var f=te(a);f|=64;ve(a,f);e.Yb=f;e.Hc=b;e.Qb=c;e.Ad=e.Hc?bf:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?l===void 0&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);Ze.prototype.set.call(e,k,l)}return e}
y(af,Ze);function cf(a){if(a.Yb&2)throw Error("Cannot mutate an immutable Map");}
function df(a,b){b=b===void 0?ef:b;if(a.size!==0)return ff(a,b)}
function ff(a,b){b=b===void 0?ef:b;var c=[];a=Ze.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
n=af.prototype;n.clear=function(){cf(this);Ze.prototype.clear.call(this)};
n.delete=function(a){cf(this);return Ze.prototype.delete.call(this,this.Qb(a,!0,!1))};
n.entries=function(){var a=Array.from(Ze.prototype.keys.call(this));return new Ie(a,gf,this)};
n.keys=function(){return Ze.prototype.keys.call(this)};
n.values=function(){var a=Array.from(Ze.prototype.keys.call(this));return new Ie(a,af.prototype.get,this)};
n.forEach=function(a,b){var c=this;Ze.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
n.set=function(a,b){cf(this);a=this.Qb(a,!0,!1);return a==null?this:b==null?(Ze.prototype.delete.call(this,a),this):Ze.prototype.set.call(this,a,this.Ad(b,!0,!0,this.Hc,!1,this.Yb))};
n.has=function(a){return Ze.prototype.has.call(this,this.Qb(a,!1,!1))};
n.get=function(a){a=this.Qb(a,!1,!1);var b=Ze.prototype.get.call(this,a);if(b!==void 0){var c=this.Hc;return c?(c=this.Ad(b,!1,!0,c,this.Ph,this.Yb),c!==b&&Ze.prototype.set.call(this,a,c),c):b}};
af.prototype[Symbol.iterator]=function(){return this.entries()};
af.prototype.toJSON=void 0;af.prototype.tg=Be;function bf(a,b,c,d,e,f){b&&Ue(a,d);a=Ve(a,d,c,f);e&&(a=hf(a));f&2&&te(a.M);return a}
function ef(a){return a}
function gf(a){return[a,this.get(a)]}
;function jf(a,b){return kf(b)}
function kf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ee(a,void 0,0))return}else{if(ae&&a!=null&&a instanceof Uint8Array){if(be){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=$d(a);return a}if(a instanceof af)return df(a)}}return a}
;function lf(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function mf(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ee(a,void 0,0)?void 0:e&&te(a)&2?a:nf(a,b,c,d!==void 0,e);else if(De(a)){var f={},g;for(g in a)f[g]=mf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function nf(a,b,c,d,e){var f=d||c?te(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=mf(a[g],b,c,d,e);c&&c(f,a);return a}
function of(a){return mf(a,pf,void 0,void 0,!1)}
function pf(a){return a.gd===Ae?a.toJSON():a instanceof af?df(a,of):kf(a)}
;function qf(a,b,c){c=c===void 0?ye:c;if(a!=null){if(ae&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=te(a);d&2||(b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16))),a=b?ve(a,(d|34)&-12293):nf(a,qf,d&4?ye:c,!0,!0));return a}a.gd===Ae?(c=a.M,d=ue(c),a=d&2?a:rf(a,c,d,!0)):a instanceof af&&!(a.Yb&2)&&(c=we(ff(a,qf)),a=new af(c,a.Hc,a.Qb,a.Ad));return a}}
function rf(a,b,c,d){a=a.constructor;b=sf(b,c,d);te(b);We=b;b=new a(b);We=void 0;return b}
function sf(a,b,c){var d=c||b&2?ye:xe,e=!!(b&32);a=lf(a,b,function(f){return qf(f,e,d)});
qe(a,32|(c?2:0));return a}
function hf(a){var b=a.M,c=ue(b);return c&2?rf(a,b,c,!1):a}
;function tf(a,b){a=a.M;return uf(a,ue(a),b)}
function vf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function uf(a,b,c,d){if(c===-1)return null;var e=ze(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(vf(a,b,e,c)&&oe!=null){var g;a=(g=Ke)!=null?g:Ke={};g=a[oe]||0;g>=4||(a[oe]=g+1,g=Error(),Fb(g,"incident"),td(g))}return d}return vf(a,b,e,c)}}
function wf(a,b,c){var d=a.M,e=ue(d);He(e);xf(d,e,b,c);return a}
function xf(a,b,c,d,e){De(d);var f=ze(b);if(c>=f||e&&!Yb){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&ve(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function yf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function zf(a,b,c,d){a=a.M;var e=ue(a);He(e);if(d==null){var f=Af(a);if(Bf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Af(a);var g=Bf(f,a,e,c);g!==b&&(g&&(e=xf(a,e,g)),f.set(c,b))}xf(a,e,b,d)}
function Af(a){if(ke){var b;return(b=a[pe])!=null?b:a[pe]=new Map}if(pe in a)return a[pe];b=new Map;Object.defineProperty(a,pe,{value:b});return b}
function Bf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];uf(b,c,g)!=null&&(e!==0&&(c=xf(b,c,e)),e=g)}a.set(d,e);return e}
function Cf(a,b,c){var d=d===void 0?!1:d;var e=a.M;var f=ue(e),g=uf(e,f,c,d);b=Ve(g,b,!1,f);b!==g&&b!=null&&xf(e,f,c,b,d);e=b;if(e==null)return e;a=a.M;f=ue(a);f&2||(g=hf(e),g!==e&&(e=g,xf(a,f,c,e,d)));return e}
function Df(a,b,c,d){d!=null?Ue(d,b):d=void 0;return wf(a,c,d)}
function Ef(a,b){a=se(a,2,!!(2&b));a=se(a,32,!0);return a=se(a,2048,!1)}
function Ff(a,b){var c=!0;32&b&&c||(a=se(a,32,!1));return a}
function Gf(a,b,c,d){a=a.M;var e=ue(a);He(e);var f,g=!!(2&e),h=g?1:2;f&&(f=!g);g=uf(a,e,b);g=Array.isArray(g)?g:Fe;var k=te(g),l=!!(4&k);if(!l){var m=k;m===0&&(m=Ef(m,e));m=se(m,1,!0);k=g;var p=e,r=!!(2&m);r&&(p=se(p,2,!0));for(var q=!r,t=!0,u=0,z=0;u<k.length;u++){var E=Ve(k[u],c,!1,p);if(E instanceof c){if(!r){var S=!!(te(E.M)&2);q&&(q=!S);t&&(t=S)}k[z++]=E}}z<u&&(k.length=z);m=se(m,4,!0);m=se(m,16,t);m=se(m,8,q);ve(k,m);r&&Object.freeze(k);k=m}if(f&&!(8&k||!g.length&&(h===1||h===4&&32&k))){yf(k)&&
(g=Array.prototype.slice.call(g),k=Ef(k,e),e=xf(a,e,b,g));f=g;for(m=0;m<f.length;m++)p=f[m],r=hf(p),p!==r&&(f[m]=r);k=se(k,8,!0);k=se(k,16,!f.length);ve(f,k)}yf(k)||(f=k,(m=h===1||h===4&&!!(32&k))?(p=!!(32&k),k=se(k,!g.length||16&k&&(!l||p)?2:2048,!0)):k=Ff(k,e),k!==f&&ve(g,k),m&&Object.freeze(g));h===2&&yf(k)&&(g=Array.prototype.slice.call(g),k=Ef(k,e),k=Ff(k,e),ve(g,k),xf(a,e,b,g));b=g;c=d!=null?Ue(d,c):new c;b.push(c);te(c.M)&2?re(b,8):re(b,16)}
function Hf(a,b){var c=0;c=c===void 0?0:c;a=tf(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function If(a,b){var c=a.M;b=Bf(Af(c),c,ue(c),Jf)===b?b:-1;a=tf(a,b);return a==null||typeof a==="string"?a:void 0}
function L(a,b,c){return wf(a,b,Te(c))}
function Kf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Le("enum");c|=0}return wf(a,b,c)}
;var Lf;function M(a,b,c){this.M=K(a,b,c)}
M.prototype.toJSON=function(){return Mf(this)};
M.prototype.clone=function(){var a=this.M;return rf(this,a,ue(a),!1)};
M.prototype.gd=Ae;M.prototype.toString=function(){try{return Lf=!0,Mf(this).toString()}finally{Lf=!1}};
function Mf(a){var b;Lf?b=a.M:b=nf(a.M,pf,void 0,void 0,!1);var c=!Lf;var d=Xb?void 0:a.constructor.hb;var e=ue(c?a.M:b);if(a=b.length){var f=b[a-1],g=De(f);g?a--:f=void 0;e=+!!(e&512)-1;var h=b;if(g){b:{var k=f;var l={};g=!1;if(k)for(var m in k)if(isNaN(+m))l[m]=k[m];else{var p=k[m];Array.isArray(p)&&(Ee(p,d,+m)||Ce(p)&&p.size===0)&&(p=null);p==null&&(g=!0);p!=null&&(l[m]=p)}if(g){for(var r in l)break b;l=null}else l=k}k=l==null?f!=null:l!==f}for(;a>0;a--){r=a-1;m=h[r];r-=e;if(!(m==null||Ee(m,d,
r)||Ce(m)&&m.size===0))break;var q=!0}if(h!==b||k||q){if(!c)h=Array.prototype.slice.call(h,0,a);else if(q||k||l)h.length=a;l&&h.push(l)}q=h}else q=b;return q}
;var Nf=window;function Of(){return Wb&&$b?$b.mobile:!(Wb&&$b?!$b.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function Pf(a){var b=Qf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Rf(){var a=[];Pf(function(b){a.push(b)});
return a}
var Qf={gh:"allow-forms",hh:"allow-modals",ih:"allow-orientation-lock",jh:"allow-pointer-lock",kh:"allow-popups",lh:"allow-popups-to-escape-sandbox",mh:"allow-presentation",nh:"allow-same-origin",oh:"allow-scripts",ph:"allow-top-navigation",qh:"allow-top-navigation-by-user-activation"},Sf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Rf()});
function Tf(){var a=Uf(),b={};pb(Sf(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Uf(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Vf(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Wf=(new Date).getTime();function Xf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Yf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],z=e[3],E=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var S=z^t&(u^z);var ja=1518500249}else S=t^u^z,ja=1859775393;else q<60?(S=t&u|z&(t|u),ja=2400959708):(S=t^u^z,ja=3395469782);S=((p<<5|p>>>27)&4294967295)+S+E+ja+r[q]&4294967295;E=z;z=u;u=(t<<30|t>>>2)&4294967295;t=p;p=S}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;
e[2]=e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+E&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(l==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,l==64)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ef:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Zf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,$f(Xf(d),a,c||null)].join(" "):null}
function $f(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],pb(d,function(h){e.push(h)}),ag(e.join(" "));
var f=[],g=[];pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];pb(d,function(h){e.push(h)});
a=ag(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ag(a){var b=Yf();b.update(a);return b.ef().toLowerCase()}
;var bg={};function cg(a){this.g=a||{cookie:""}}
n=cg.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ed:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ui;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ed}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Qa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{ed:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Qa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var dg=new cg(typeof document=="undefined"?null:document);function eg(a){return!!bg.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function fg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;eg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new cg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");eg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function gg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new cg(document)).get(b));return a?Zf(a,c,d):null}
function hg(a){var b=b===void 0?!1:b;var c=Xf(String(C.location.href)),d=[];if(fg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new cg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Zf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&eg(b)&&((b=gg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=gg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function ig(a){Qc.call(this);var b=this;this.A=this.i=0;this.Ea=a!=null?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return A(e,jg(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||kg(this)}
y(ig,Qc);function lg(){var a=mg;ig.g||(ig.g=new ig(a));return ig.g}
ig.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete ig.g};
ig.prototype.ya=function(){return this.l};
function kg(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.N(3):A(c,jg(a),3):A(c,jg(a),3);kg(a);c.g=0})},3E4)}
function jg(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Rc(a,"networkstatus-online"):Rc(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.N(3)}})})}
;var ng=/^[6-9]$/,og=/<\/?(?:b|em)>/gi;function pg(a){this.g=a}
var qg=new pg({});function rg(a){a=sg(a);return Bb(a)}
function tg(a){a=sg(a);return $a(a)}
function sg(a){return a===null?"null":a===void 0?"undefined":a}
;function ug(a,b,c,d,e,f){this.A=a instanceof zb?a:rg(a);this.g=b;this.u=c;this.s=d;this.i=e;this.m=f||qg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
ug.prototype.getHtml=function(){return Ab(this.A).toString()};
ug.prototype.l=function(){return this.u};
ug.prototype.getType=function(){return this.s};var vg=/^\s/,wg=/\s+/,xg=/\s+/g,yg=/^\s+|\s+$/g,zg=/^\s+$/,Ag=/<[^>]*>/g,Bg=/&nbsp;/g,Cg=/&#x3000;/g,Dg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Eg=document.getElementsByTagName("head")[0],Fg=0,Gg=1;function Hg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Ig(a,b){function c(){return b}
b===void 0&&(b=a);return{Ob:c,Yd:function(){return a},
zf:c,bi:function(){return a<b},
equals:function(d){return d&&a==d.Yd()&&b==d.zf()}}}
function Jg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Kg(a,b){var c=[],d;for(d in a)Jg(d,a[d],c,b);return c.join("&")}
function Lg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Mg(a){return!!a&&!zg.test(a)}
function Ng(a){for(var b=Dg.length,c=0;c<b;c+=2)a=a.replace(Dg[c],Dg[c+1].source);return a}
function Og(a){for(var b=Dg.length,c=0;c<b;c+=2)a=a.replace(Dg[c+1],Dg[c].source);a=a.replace(Bg," ");return a.replace(Cg,"\u3000")}
function Pg(a,b){return a&&(a.indexOf(" ")>-1||wg.test(a))?(a=a.replace(xg," "),a.replace(b?yg:vg,"")):a}
function Qg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Rg(){}
function Sg(a){var b=Tg;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Ug(){return 0}
function Vg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Wg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(ob(b,173)!=-1?14:1));return a}
;function Xg(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(Fg++).toString(36);this.B=this.g.toLowerCase();this.l=Pg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Xg.prototype.getId=function(){return this.u};
function Yg(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Zg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function $g(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=qg)}
$g.prototype.getType=function(){return this.s};function ah(){}
ah.prototype.Dd=function(){};
ah.prototype.redirect=function(){};
ah.prototype.Cd=function(){return""};
ah.prototype.me=function(){};function bh(){this.l={};this.g={}}
bh.prototype.set=function(a,b){this.l[a]=b};
bh.prototype.has=function(a){return!!this.l[a]};
function ch(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function dh(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(eh);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.me(this.o);this.o.Ye();for(g=0;a=this.g[g++];)a.O(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.nb(this.config_);
for(g=0;a=this.g[g++];)a.R(this.config_);this.l=!0}
function fh(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
dh.prototype.isActive=function(){return this.l};
dh.prototype.get=function(a){return this.u[a]};
function gh(a,b){return a.m[b]||[]}
function eh(a,b){a=Sg(a.getType());b=Sg(b.getType());return a<0?1:b<0?-1:a-b}
var Tg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function N(a){this.l=a}
n=N.prototype;n.sa=function(){};
n.O=function(){};
n.ga=function(){};
n.nb=function(){};
n.R=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function hh(){this.l=149;this.g={};this.i=0}
y(hh,N);n=hh.prototype;n.O=function(a){this.A=a.get(127)};
n.R=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ic;this.u=b.Ac;this.m=b.He}};
n.Ga=function(){ih(this);this.i=0};
n.Fe=function(a,b,c){jh(this,a.getId(),a.g,b,c);return!0};
n.qb=function(){return 1};
n.Tc=function(){return this.i};
n.Pc=function(a){var b=this.g[a];b&&(kh(b),delete this.g[a])};
function jh(a,b,c,d,e){a.config_.Od||ih(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Pc(b)}};
a.g[b]=f;f.send(null)}
function ih(a){for(var b in a.g)kh(a.g[b]);a.g={}}
function kh(a){a.onreadystatechange=Rg;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var lh;function mh(){this.l=153}
y(mh,N);function nh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function oh(a){this.o=a}
oh.prototype.getType=function(){return this.o};
oh.prototype.s=function(){return!0};function ph(a){this.l=152;this.D=a}
I(ph,N);ph.prototype.Ab=Rg;var qh=ec(),rh;if(rh=qh){for(var sh=jc(),th=0,uh=Qa(String(sh)).split("."),vh=Qa("10").split("."),wh=Math.max(uh.length,vh.length),xh=0;th==0&&xh<wh;xh++){var yh=uh[xh]||"",zh=vh[xh]||"";do{var Ah=/(\d*)(\D*)(.*)/.exec(yh)||["","","",""],Bh=/(\d*)(\D*)(.*)/.exec(zh)||["","","",""];if(Ah[0].length==0&&Bh[0].length==0)break;th=Ra(Ah[1].length==0?0:parseInt(Ah[1],10),Bh[1].length==0?0:parseInt(Bh[1],10))||Ra(Ah[2].length==0,Bh[2].length==0)||Ra(Ah[2],Bh[2]);yh=Ah[3];zh=Bh[3]}while(th==0)}rh=th>=0}
var Ch=rh,Dh=kc();Dh&&jc();var Eh=dc(),Fh=Zb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");gc();var Gh=hc(),Hh=Of()&&gc(),Ih=lc(),Jh=Wb&&$b&&$b.platform?$b.platform==="macOS":J("Macintosh"),Kh=Of();var Lh;xb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Mh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Nh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Lh||(c={},Lh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Lh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Oh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Ph(a,b){var c="";b&&(c=b.id);Nh(a,"activedescendant",c)}
;var Qh=document.documentElement.style.opacity!=void 0,Rh={rtl:"right",ltr:"left"};function Sh(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Th(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ec:b,Ta:c}}
function Uh(a){try{return Vh(a).activeElement==a}catch(b){}return!1}
function O(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function P(a){return O("div",a)}
function Wh(a,b){a.innerHTML!=b&&Cb(a,rg(b))}
function Xh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Rh[b])}
function Yh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Zh(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Yh(a)}
function $h(a){var b=O("a");nb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function ai(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Oe:c,de:b}}
function Vh(a){return a?a.ownerDocument||a.document:window.document}
function bi(a){return a?(a=Vh(a),a.defaultView||a.parentWindow):window}
function ci(){return Qh?"opacity":"filter"}
function di(a){return Qh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function ei(){this.o=507;fi(this)}
y(ei,oh);ei.prototype.g=function(){return this.i};
function gi(a,b,c,d){fi(a,c,d);Cb(a.l,gd(kd,b))}
function fi(a,b,c){a.i=P("sbfl_a");a.l=P("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var hi=[30,35,33,41],ii=[39,10,21];function ji(a,b){ph.call(this,507);this.m=a;this.g=b}
y(ji,ph);ji.prototype.O=function(a){this.i=a.get(128)};
ji.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
ji.prototype.Ib=function(){return new ei};
function ki(a){return a.map(function(b){return{label:b.g}})}
ji.prototype.Bb=function(a,b){a=qb(this.i.m,function(c){a:if(hi.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(ii),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(gi(b,this.m,ki(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Xc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),li=ha(["#ps"]);
function mi(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=P("sbpqs_d");this.u=P();this.P=O("span","sbpqs_a");this.J&&(this.l=O("a"),nb(this.l,fb(li)),this.l.className="sbsb_i",this.I=P("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=P("sbpqs_c"),Cb(this.m,gd(kd,this.Y)),Mh(this.m,"alert"));this.u.appendChild(this.P);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(mi,oh);mi.prototype.g=function(){return this.i};
mi.prototype.s=function(){return this.B};
function ni(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Cb(a.P,gd(kd,b));a.J&&(a.m.style.display="none",b=Wc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){oi(a,f)},a.l.title=e)}
function oi(a,b){a.A=!0;pi(a.X,a.ca,function(){a.A&&(qi(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&ri(a.H),a.D.g==a.F&&(si(a.D),ti(a.H)),a.B=!1)});
Zh(b)}
;function ui(){ph.call(this,35)}
y(ui,ph);n=ui.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(){return new mi(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Bb=function(a,b){ni(b,a.getHtml(),a.g,a.l(),this.s)};
n.Ab=function(a,b,c){vi(c,b.g,1)};function wi(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=P("sbpqs_d");this.m=P();this.P=O("span","sbpqs_a");this.J&&(this.u=O("a"),nb(this.u,"#ps"),this.u.className="sbsb_i",this.I=P("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=P("sbpqs_c"),Cb(this.i,gd(kd,this.Y)),Mh(this.i,"alert"));this.m.appendChild(this.P);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(wi,oh);wi.prototype.g=function(){return this.l};
wi.prototype.s=function(){return this.B};
wi.prototype.ea=function(a){this.A=!0;pi(this.X,this.ca,F(this.na,this));return Zh(a)};
wi.prototype.na=function(){this.A&&(qi(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&ri(this.H),this.D.g==this.F&&(si(this.D),ti(this.H)),this.B=!1)};function xi(){ph.call(this,35)}
y(xi,ph);n=xi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(a){return new wi(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Bb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l();var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Cb(b.P,gd(kd,c));b.J&&(b.i.style.display="none",Cb(b.u,gd(kd,e)),b.u.onclick=F(b.ea,b))};
n.Ab=function(a,b,c){vi(c,b.g,1)};function yi(){this.l=134;this.i={}}
y(yi,N);n=yi.prototype;n.O=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=F(this.Te,this)};
n.R=function(a){this.A=tg("//"+(a.rd||"clients1."+a.ic)+"/complete/deleteitems");this.s=a.zd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){zi(this)};
function zi(a){a.g&&(Ai.removeChild(a.g),a.g=null)}
n.Te=function(a){zi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var Ai=Eg;function Bi(){this.l=189}
y(Bi,N);Bi.prototype.O=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
Bi.prototype.ga=function(a){this.o=a.uf};
Bi.prototype.R=function(a){this.m=a.zd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(F(this.B,this),a),this.o=!1)};
function pi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Lg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=O("script");b=nd(b,c);Eb(a.g,b);Ai.appendChild(a.g)}
Bi.prototype.B=function(){var a=Ci(this.A,"",void 0,void 0,!0);Di(this.i,a);Ei(this.i)};function Fi(){this.l=156}
y(Fi,N);Fi.prototype.O=function(a){this.m=a.get(189)};
Fi.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Lg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Zg(a,d,c[d]);return 1};
Fi.prototype.g=function(){return 12};function Gi(a){this.l=156;this.o=a;this.m=null}
I(Gi,N);Gi.prototype.i=function(a){var b=1,c=a.D;a=Mg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Gi.prototype.g=function(){return 2};
Gi.prototype.O=function(a){this.m=a.get(128)};function Hi(){this.l=157}
y(Hi,N);function Ii(){this.l=156}
y(Ii,N);Ii.prototype.i=function(a){var b=Lg(Gb(window.location.href));b.v&&Zg(a,"video_id",b.v,!0);return 1};
Ii.prototype.g=function(){return 24};function Ji(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(Ji,N);Ji.prototype.O=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Ji.prototype.ga=function(a){this.m=a.od;this.H=a.rf};
function Ki(a,b){a.s=b;a.F.ud(a.s)}
function Li(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Mi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Mi(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new ug(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Ni(a.g,c,!1);return!1}
;function Pi(){this.l=156}
y(Pi,N);Pi.prototype.O=function(a){this.m=a.get(598)};
Pi.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Lg(Gb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Ki(b,c)):d||b.s==""?d&&b.s==""&&Ki(b,b.m):Ki(b,"");return a.D!="mousedown"&&a.D!="focus"||!Li(this.m)?1:2};
Pi.prototype.g=function(){return 46};function Qi(){this.l=149;this.i=Eg;this.g={}}
y(Qi,N);n=Qi.prototype;n.O=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.R=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.Ac,this.A=a.He,this.F="https:"==document.location.protocol,Ri(this,F(this.Ue,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){Ri(this,null);Si(this)};
n.Fe=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Od||Si(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Jg("q",e,a,!0);this.config_.Ne||Jg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);Jg("gs_gbg",e,a)}e=O("script");this.config_.pg&&e.setAttribute("nonce",this.config_.pg);
Eb(e,tg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.qb=function(){return 0};
n.Tc=function(){return 0};
n.Pc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Si(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Ue=function(a){this.m&&this.m(a)};
function Ri(a,b){b||(b=Rg);var c=window.google;a.config_.Ne?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ti(){this.l=115;this.o={}}
y(Ti,N);n=Ti.prototype;n.O=function(a){this.m=a.get(116);if(a=gh(a,154))for(var b,c=0;b=a[c++];)this.o[Ui]=b};
n.R=function(){this.g=!1};
n.Ga=function(){Vi(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Vi(a){if(a.g){var b=a.m;b.B=0;Wi(b.o.m,!1);Xi(b.P,!1);Xi(b.i,!1);Yi(b,b.W);Zi(b.F,9);a.g=!1}}
var $i={ee:"left",lg:!0,pb:null,marginWidth:0};function aj(){this.l=118}
y(aj,N);n=aj.prototype;n.O=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=gh(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.R=function(a){this.config_=a;this.D=this.P=!1;bj(this)};
function cj(a){var b={};Zi(a.s,11,b);!b.cancel&&a.config_.Wf&&qd(function(){var c=a.i;Ei(c.D);dj(c)})}
function ej(a,b){if(a.config_.Dc==0||a.config_.Dc==2||a.config_.Dc==3&&!a.o&&!b)return!1;a:{if(fj(a.i)&&(a.i.i!=null?b=gj(a.i):(b=a.i,b=fj(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Qg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),hj(a,b,Ig(b.length),"",!0),ij(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function hj(a,b,c,d,e){a.config_.hf&&!a.i.isVisible()&&d=="mousedown"&&jj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Qg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,kj(a,b),Zi(a.s,1,{Xb:d,pb:a.u}),g=G(),a.H||(a.H=g),a.W=g,Mg(b)&&(e=!0),g=!0;b=Ci(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(F(f.clear,f),f.config_.Xf))),a.P&&Zg(b,"gs_is",1),Di(a.I,b)):g&&(a.i.clear(),Ei(a.I));Zi(a.s,2,{Xb:d})}
function ti(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,lj(a)}catch(b){}}
function mj(a,b){kj(a,b);nj(a.m);Zi(a.s,4,{pb:a.u,input:b})}
function ri(a){a.g!=a.o&&kj(a,a.o);Zi(a.s,5,{input:a.o,Ug:a.i.m,pb:a.u});nj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function oj(a){if(a.ca){if(a.config_.Wc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(kj(this,""),this.m.clear(),Zi(this.s,1),Zi(this.s,16),this.i.clear())};
function pj(a,b){var c=a.m.s.Ob();a.u==b?fj(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.mc&&!a.config_.Na&&vi(a.F,gj(a.i).g,6):a.config_.le&&ej(a,!0)):a.A&&c==0&&a.A.g()}
function qj(a){var b=a.m.s.Ob();return a.config_.Na&&fj(a.i)&&a.i.i!=null&&b===a.g.length}
function ij(a,b,c){a.g=b||"";bj(a);nj(a.m);c||Zi(a.s,4,{pb:a.u,input:a.g})}
function bj(a){var b=rj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Cb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function kj(a,b){a.g=a.o=b||"";bj(a)}
;function sj(){this.l=128}
y(sj,N);n=sj.prototype;n.O=function(a){this.o=a.get(129);this.P=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=gh(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Ug)};
n.R=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;dj(this)};
function Ni(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=fj(a)?b[0].g:a.u.o;a:{var f=e;if(a.P.g){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!tj.test(l)&&(uj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=rj(a.P,e);if(a.config_.Fg&&fj(a)&&c&&!Kh){a.F=!0;c=a.o;if(c.o){c.F=a.B;vj(c);e=!1;for(f=0;g=b[f++];)wj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Og(e);b=a.ca;f=0;e&&(b.g||xj(b),yj(b),e in b.m?f=b.m[e]:(Wh(b.g,Ng(e)),b.m[e]=f=b.g.offsetWidth,Wh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Qg&&!fj(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!nh(a.m,e););(f=e?e.length:0)&&(f-=zj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=zj(e,c,1));a.config_.Tf&&c.push(1);f&&(f-=zj(e,c,2));f&&zj(e,c,3);a.config_.be&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;vj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=O("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace="nowrap",h.dir=
g.H,g.i=P(),g.i.className="sbsb_g",g.config_.be&&(g.i.style.paddingBottom="1px"),Aj(g,g.config_.Ng,g.i,13),g.config_.Sf?Aj(g,g.config_.Rd,g.i,8):g.config_.Uf&&Aj(g,g.config_.Og,g.i,14),h.appendChild(g.i),h.onmousedown=F(g.nd,g),h.className=g.config_.Cc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=P("sbsb_j "+g.config_.Cc);k=O("a");k.id="sbsb_f";nb(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.ad+"&answer=106230");var m=g.config_.qg;l={Gg:!0};
l=l===void 0?{}:l;m instanceof zb?l=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.oi&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.Gg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),l.ri&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),l=Bb(m));Cb(k,l);h.appendChild(k);h.onmousedown=F(g.nd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=O("li"),Nh(h,"hidden",!0),h.l=!0,k=O("div","sbsb_e"),h.appendChild(k)),
g.g.appendChild(h)):wj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),Bj(a,a.H.g()));c?Mi(a):a.clear()}
function Bj(a,b){if(a.g!=b){var c=a.g;a.g=b;Cj(a,c)}}
n.De=function(){if(fj(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;Dj(this,a,F(this.De,this))}else Mi(this)};
n.Ee=function(){if(fj(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;Dj(this,a,F(this.Ee,this))}else Mi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function gj(a){return a.i!=null?a.m[a.i]:null}
function fj(a){return!(!a.m||!a.m.length)}
function Mi(a){if(!a.s){a:{var b=a.I,c=Ui;if(c in b.o){if(b.i){if(c==Ui)break a;Vi(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Vg($i);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Vg;f||(f=e.B=="rtl"?"right":"left");d.ee=f}Yi(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.lg;b.ca=d.ee;Wi(b.o.m,!0);Xi(b.P,!0);Xi(b.i,
!0);Zi(b.F,14);b.Fd();c.g=!0}a.s=!0}}
function dj(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Vi(a.I),a.s=!1)}
n.clear=function(){dj(this);this.m=null;this.F=!1;this.g!=null&&Ej(this.o,this.g);this.i=this.g=null;this.o.clear()};
function si(a){a.g!=null&&Ej(a.o,a.g);a.i=a.g=null}
function jj(a,b,c){if(fj(a))Mi(a);else{var d=a.u.o;d&&(b=Ci(a.Y,d,b||a.u.m.s,c),Di(a.D,b))}}
function zj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function Dj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(Cj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Ph(b.u,c)),a.g==null?ri(a.u):(b=a.m[a.g],b.getType(),ij(a.u,b.g))):(Ej(a.o,b),c())}
function Cj(a,b){b!=null&&Ej(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&Fj(a.g().parentNode,b.X))}
var Ui=Gg++;function Gj(){this.l=154}
y(Gj,N);Gj.prototype.O=function(a){this.i=a.get(128);this.g=a.get(129)};function Hj(){this.l=145;this.g=uj.test("x")}
y(Hj,N);Hj.prototype.sa=function(a){this.i=a.nc()};
function rj(a,b){var c=a.i;a.g&&(uj.test(b)?c="ltr":tj.test(b)||(c="rtl"));return c}
var tj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),uj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Ij(){this.l=117;this.i=[];this.g={Se:1}}
y(Ij,N);function Q(a,b,c,d,e,f){var g=Jj(a,b);g||(g={},a.i.push({element:b,Of:g}));var h=g[c];h||(h=g[c]=[],a=Kj(a,c,b.Se?window:bi(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({kg:!!f,dd:!1,priority:e||0,process:d});h.sort(Lj);d.qf=c}
function Mj(a,b,c){if(a=Jj(a,b))if(a=a[c.qf])for(var d=0;b=a[d++];)if(b.process==c){b.dd=!0;break}}
function Zi(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Xb)}
Ij.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Kj(a,b,c,d){return F(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.jg=!0)}e.Xb=f||b;f=e;for(var h,k,l=0;g=d[l++];)g.dd?k=!0:h||(g.kg?Nj(g,f):h=g.process(f));if(k)for(k=0;h=d[k];)h.dd?d.splice(k,1):++k;if(e.sc)return delete e.sc,e.jg&&(e=c.event||e),Zh(e),e.returnValue=!1}},a)}
function Jj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Of;return null}
function Nj(a,b){qd(function(){a.process(b)})}
function Lj(a,b){return b.priority-a.priority}
;function Oj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Oj,N);Oj.prototype.R=function(){this.reset()};
Oj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Pj(){this.l=374}
y(Pj,N);Pj.prototype.R=function(){this.reset()};
Pj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Pj.prototype.reset=function(){this.g={}};function Qj(){this.l=120;this.D=-1}
y(Qj,N);Qj.prototype.O=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=gh(a,311)};
Qj.prototype.ga=function(a){this.u=a.sg};
Qj.prototype.R=function(a){this.config_=a;this.reset()};
function Rj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Sj(a.config_.clientName);d[28]=Sj(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Tc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Wg(h.getType(),h.i||[]);if(h!=k){e>1&&(f+="l"+e);f+=(k?"j":"")+h;e=0;var k=h}++e}e>1&&(f+="l"+e)}d[3]=f;k="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var l=Wg(g.getType(),
g.i||[]);l in b&&delete b[l]}if(b)for(l in b)k+=(k?"j":"")+l;d[35]=k;l=a.i.i;d[33]=l>-1?String(l):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=G()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Db;k=a.g;k=(l=k.i)?k.g.m:0;d[25]=l?"1"+(a.config_.lf?"a":"")+(a.config_.Md?"c":""):"";d[10]=k;l=a.g;d[11]=l.i?l.g.o:0;d[12]=a.g.na;f=a.g;l=f.ca;k=f.Y;f=f.ea;d[9]=l;d[22]=k;d[17]=f;d[13]=a.g.Cb;d[14]=a.g.H;d[15]=a.g.J;l=a.g;k=[];for(b=e=0;b<=Tj;++b)f=l.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",k.push(e+f),e=0);d[16]=k.join("j");d[36]=a.g.P;l=0;for(var m in a.i.g)l++;d[30]=l;d[31]=a.i.u;d[32]=a.i.o;d[19]=Sj(a.config_.xd);m=a.i;k=a.B.g;l=!1;k&&(l=k.i.g.e||"");k=0;l?(k|=1,m.m>1&&(k|=2)):m.m>0&&(k|=2);m=k;d[20]=m==0?"":m+"";for(m=0;l=a.F[m++];)k=l.l(),Uj[k]&&(d[k]=d[k]==void 0?Sj(l.g()):"");d=d.join(".").replace(Vj,"");if(a.H&&a.u){m=c+d;b:{l=a.u;k=[];if(l)for(e=b=f=0;e<l.length;++e){g=l.charCodeAt(e);if(g<32||g>127||!Wj[g-32]){l=[];break b}f<<=6;f|=Wj[g-32]-1;b+=6;b>=8&&(k.push(f>>b-8&
255),b-=8)}l=k}f=l;l={};l.chain=Array(4);l.buffer=Array(4);l.fh=Array(4);l.padding=Array(64);l.padding[0]=128;for(k=1;k<64;++k)l.padding[k]=0;Xj(l);k=Array(64);f.length>64&&(Xj(l),Yj(l,f),f=Zj(l));for(b=0;b<f.length;++b)k[b]=f[b]^92;for(b=f.length;b<64;++b)k[b]=92;Xj(l);for(b=0;b<64;++b)l.buffer[b]=k[b]^106;ak(l,l.buffer);l.total=64;Yj(l,bk(m));m=Zj(l);Xj(l);ak(l,k);l.total=64;Yj(l,m);m=Zj(l);m=m.slice(0,8);typeof m==="string"&&(m=bk(m));l="";if(m){k=m.length;for(e=b=f=0;k--;)for(b<<=8,b|=m[e++],
f+=8;f>=6;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=l}else m="";c={oq:c,gs_l:d+"."+m};a.config_.mg&&(c.q=a.m.g);return c}
Qj.prototype.reset=function(){this.s=G();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Db=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Cb=0;a.H=0;a.J=0;a.P=0;a.I=[];for(b=0;b<=Tj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Sj(a){return a?a.replace(ck,"-"):""}
var Vj=/\.+$/,ck=/\./g,Uj=Hg([23]);function dk(){this.l=121}
y(dk,N);dk.prototype.sa=function(a){this.m=a.Vd()};
dk.prototype.O=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=gh(a,294)};
dk.prototype.R=function(a){this.config_=a};
function vi(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Mg(b)||a.config_.lb||a.s&&a.s.lb()){if(ng.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=O("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Qc&&ek(a.g,c);a.u.Dd(c);fk(a);Zi(a.F,12,{query:b})}}
dk.prototype.redirect=function(a){this.g&&this.config_.Qc&&ek(this.g);this.u.redirect(a);fk(this)};
function fk(a){Ei(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function gk(){this.l=553}
y(gk,N);gk.prototype.O=function(a){this.g=gh(a,156);a.get(126)};
gk.prototype.ga=function(){this.g.sort(hk)};
gk.prototype.R=function(a){this.config_=a;this.i=a.od};
gk.prototype.ud=function(a){this.i=a};
function Ci(a,b,c,d,e){b=new Xg(b,c||Ig(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Nc!=null&&Zg(b,"ds",a.config_.Nc,!0);a.config_.Ge!=null&&Zg(b,"swl",a.config_.Ge,!0);Zg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=G(),"cp"in b.A||(a=b.J.Ob(),Zg(b,"cp",a,!0)),Zg(b,"gs_id",b.u),b.i=Kg(b.A)+":"+b.B,b.m=!0);return b}
function hk(a,b){return a.g()-b.g()}
;function ik(){this.l=123;this.A=!1;this.F=-1}
y(ik,N);n=ik.prototype;n.O=function(a){this.g=a.get(133);this.W=a.get(130);this.Ic=a.get(118);this.Jc=a.get(120);this.X=a.get(494);this.Ze=a.get(124);this.Eb=a.get(125);this.Fb=a.get(230);this.Kc=a.get(127)};
n.R=function(a){this.u=this.Kc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Ve=a.vf;this.We=a.ag;this.Ya=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;jk(this);this.m=this.o=null;Ei(this)};
function Di(a,b){if(!(!a.A||a.We||a.W&&a.W.l())){var c=!0,d=Yg(b);d>a.F&&(a.F=d);++a.Db;a.X.g[b.getId()]=!0;Mg(a.Ic.g)||Mg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=G();for(var e in a.m)d-a.m[e].s>2500&&kk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Ve||b.I)&&a.config_.bg&&(b.o=!0),a.Eb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.te())}}
function Ei(a){a.Ya=a.F}
function qi(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function lk(a,b){return F(function(c){this.Ed(c,b)},a)}
n.te=function(){jk(this);if(!(this.u.Tc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Jg(d,c[d],b);b=this.u.Fe(a,b.join("&"),lk(this,a),F(this.Ed,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(F(this.te,this),a)}}};
function jk(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function kk(a,b){a.u.Pc(b);delete a.m[b];a.s&&--a.s}
n.Ed=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ze;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var k=a[h];h in c.g&&(k=c.g[h].parse(k));g[h]=k}h=k=a=!1;for(var l,m=0;l=f[m++];)if((l[1]||0)==33?k=!0:a=!0,k&&a){h=!0;break}a=0;k=[];for(m=0;l=f[m++];){var p=l[1]||0;if(!h||p!=33){var r=l[0];c.m&&(r=c.i.bold(e.toLowerCase(),Og(r).replace(Ag,"")));var q=k,t=q.push,u=Og(r).replace(Ag,""),z=a++,E=l[3];t.call(q,new ug(r,u,z,p,l[2]||[],E?new pg(E):qg))}}c=
new $g(d,k,new pg(g),!1,!0,!1);this.Fb&&(c=gd(this.Fb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Yg(b)<=this.Ya?!b||b.g||c.o||(this.P=G()-b.s):(++this.ea,this.Eb.process(c)||++this.Cb,this.D=c.i.g.d||0,b&&(kk(this,b.getId()),d=b.s,d=G()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>mk?Tj:nk[Math.floor(d/100)]]):this.P=d));c&&(b=c.i.g.q||"")&&(this.Jc.u=b)}}};
var nk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Tj=nk[nk.length-1]+1,mk=nk.length*100-1;function ok(){this.l=124;this.g={}}
y(ok,N);ok.prototype.O=function(a){this.i=a.get(150);if(a=gh(a,158))for(var b,c=0;b=a[c++];)this.g[b.Yh()]=b};
ok.prototype.R=function(a){this.m=a.Vc};function pk(){this.l=125}
y(pk,N);pk.prototype.O=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=gh(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(qk)};
pk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Pg(c);var e=b.l;b=e?e.l:Pg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Ni(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Mg(g.g)||(b.i=h),g=g.s,g=G()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Wg(h,f.i||[])]=!0;Zi(this.o,3,{input:a,Ug:e})}return c};
function qk(a,b){return a.g()-b.g()}
;function rk(){this.l=126}
y(rk,N);rk.prototype.O=function(a){this.i=a.get(123)};
rk.prototype.R=function(){this.g=null};var sk=["expflags","plugin"];function tk(){this.l=127;this.m={}}
y(tk,N);tk.prototype.O=function(a){a=gh(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
tk.prototype.R=function(a){var b="https:"==document.location.protocol,c=[];Jg("client",a.clientName,c);Jg("hl",a.ad,c);Jg("gl",a.Je,c);Jg("sugexp",a.xd,c);Jg("gs_rn",64,c);Jg("gs_ri",a.requestIdentifier,c);var d=Lg(a.url||C.location.href);sk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Jg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.rd||"clients1."+a.ic,Ac:a.Ac||"/complete/search",He:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function uk(){this.l=191}
y(uk,N);function bk(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Xj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.cc=a.total=0}
function ak(a,b){for(var c=a.fh,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,k,l=0;l<64;++l)l<16?(g=f^b&(d^f),h=l):l<32?(g=d^f&(b^d),h=5*l+1&15):l<48?(g=b^d^f,h=3*l+5&15):(g=d^(b|~f),h=7*l&15),k=f,f=d,d=b,e=e+g+vk[l]+c[h]&4294967295,g=wk[l],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=k;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Yj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.cc++]=b[d],a.cc==64&&(ak(a,a.buffer),a.cc=0)}
function Zj(a){var b=Array(16),c=a.total*8,d=a.cc;Yj(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;ak(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Wj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],wk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],vk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function xk(){this.l=150}
I(xk,N);
xk.prototype.bold=function(a,b){b=Ng(b.replace(og,""));a=Ng(Pg(a,!0));if(Qg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Vb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Vb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Vb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Vb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Vb].Vb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function yk(){this.l=146}
I(yk,N);function zk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
zk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");zk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");zk("D1,D4,D7,DA,DD");zk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");zk("D1__,D4__,D7__,DA__,DD");zk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");zk("CF,D2,D5,D8,DB");function Ak(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(Ak,N);n=Ak.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.nc();b.addRule(".sbdd_a",(Kh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Kh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.O=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.g=P();this.g.className="gstl_"+this.Y+" sbdd_a";Xi(this.g,!1);this.P=this.g;this.H=P("fl");this.g.appendChild(this.H);this.A=P();this.g.appendChild(this.A);this.s=P("sbdd_b");this.A.appendChild(this.s);this.na=P();this.A.appendChild(this.na);this.config_.ae&&(this.i=O("iframe","gstl_"+this.Y+" sbdd_c"),Xi(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.jf)typeof this.m==="number"&&(this.m+=this.config_.kc[2],this.m-=Bk(this)),Ck(this,this.g,
this.m);Dk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=F(this.Fd,this);Q(a,a.g,8,b)};
n.R=function(a){this.config_=a;this.g.style.position=a.Mb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Fd=function(){this.B=0;Dk(this);if(this.i){var a=this.config_.Hd[0],b=this.i.style;this.config_.Mb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";Ck(this,this.i,this.s.offsetWidth)}this.u&&vj(this.u.g)};
function Dk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Rf||c.H==c.F?c.Ya:null;var d=(b=c)?b.offsetWidth:Ek(a.o.m);var e=a.m;c=Bk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.kc[2]-c,Ck(a,a.g,e));if(a.config_.Mb!="relative"){var f="rtl"==Vf()!=(a.D=="rtl"),g=a.config_.Ia;var h={Ta:0,Ec:0};if(f||!g||g==document.body||a.config_.Td)h=Th(a.o.m.F),b&&(h.Ta=Th(b).Ta);b=h;h=e;e=a.config_.kc;g=e[1];e=e[0];e=b.Ec+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Vf()!=(a.D=="rtl");var k=a.config_.Ia;g=-g;if(h||!k||k==document.body)g+=(bi(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Ec:0};a.config_.Mb=="absolute"&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Td)&&(e=Th(a.config_.Ia));g=a.g.style;g.top=h-e.Ec+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function Ck(a,b,c){typeof c==="number"?c>0&&(a.config_.eh?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Xi(a,b){a&&(a.style.display=b?"":"none")}
function Yi(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");Xh(a.g,b)}}
function Bk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function Fk(){this.l=119;this.W=!1;this.s=Ig(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(Fk,N);n=Fk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Uc();Mh(this.g,"combobox");Nh(this.g,"haspopup",!1);Nh(this.g,"autocomplete","list");this.Ic=a.nc();a.Lc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Jh&&Fh||qh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),Ch&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.O=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Cb=!!a.get(136);this.Jc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Pb;this.P=a.ig;this.Kc=a.Nd;this.u=Uh(this.g);this.Gc();var b=this;qh&&Q(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.sc=!0)},10);
a=(mc()||J("iPad")||J("iPod"))&&Gh;Dh&&Gk(this);(Hh||a)&&Hk(this);this.F=this.g};
n.nb=function(a){var b=!!a.pf[130];if(this.Cb||oj(this.i)||b||a.wf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=P("gstl_"+this.Jc+" sbib_a"),a=this.A.style,this.P&&(a.width=this.P+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=Eh||qh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Zc,b&&(this.B=P("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),oj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ic,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=P("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Ik(this,this.A,this.o)),this.config_.td&&this.g&&this.o&&(this.g.removeAttribute("role"),Mh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Nh(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Nh(this.g,"controls",b),this.config_.td&&this.o?(Nh(this.o,"haspopup","grid"),Nh(this.o,
"owns",b)):Nh(this.g,"haspopup","grid")),this.config_.Rg||this.config_.ff||Jk(this,this.A),this.F=this.A;this.Kc&&(b=F(this.re,this),Q(this.m,this.g,"blur",b,10),b=F(this.Ae,this),Q(this.m,this.g,"focus",b,10),this.Fb=!0);b=this.m;a=F(this.Nf,this);Q(b,b.g,8,a);Kk(this)};
n.R=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ne?"":"none";this.Db=this.g.value;this.Fb&&this.Ae();Lk(this)};
n.Ga=function(){this.Fb&&this.re();Mk(this)};
function Ik(a,b,c){Mk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Ig&&(qh||Dh?qd(function(){a.g.focus();Sh(a.g,a.s.Ob())}):a.g.focus());
Lk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function Ek(a){return a.P?a.P:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Gc()};
function nj(a){Ih&&(a.g.value="");a.g.value=a.i.g;Ih&&(a.g.value=a.g.value);lj(a)}
function Nk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function lj(a){if(a.u){var b=a.g.value.length;a.s=Ig(b);Sh(a.g,b)}}
function Jk(a,b){Q(a.m,b,"mouseup",function(){a.g.focus()})}
function Kk(a){function b(e){Q(a.m,a.g,e,F(a.ye,a),10,c)}
Q(a.m,a.g,"keydown",F(a.Lf,a));(Eh||a.config_.cf)&&Q(a.m,a.g,"keypress",F(a.Mf,a));Q(a.m,a.g,"select",F(a.Gc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=F(a.If,a);Q(a.m,a.g,"compositionstart",d);Q(a.m,a.g,"compositionend",d)}
n.If=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Lf=function(a){var b=a.keyCode;this.ca=b;var c=(Fh||Dh)&&(b==38||b==40)&&fj(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=ej(this.i));if(d){(b=gj(this.X))&&b.getType();var f=this;qd(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&gj(g).getType();g=g.u;vi(g.F,g.g,h)})}if(c||d||e||this.Y)a.sc=!0};
n.Mf=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.sc=!0};
n.ye=function(a){if(!this.Eb){var b=a.Xb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.P=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Mg?vi(a.F,a.g,5):(a.i.isVisible()?(c=a.i,Ei(c.D),dj(c)):Nk(a.m),ri(a));break;case 37:a=this.i;pj(a,"rtl");if(qj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Ok(a,c.i))&&!(c.length<=1))))for(d=Oh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Ph(a.u,c[e-1]);break;case 39:a=this.i;pj(a,"ltr");if(qj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Ok(a,c.i))))for(d=Oh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Ph(a.u,c[e+1]);break;case 38:this.i.i.Ee();break;case 40:a=this.i;c=this.s;fj(a.i)?a.i.De():jj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Yd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Lg&&vi(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Ob()==0&&a.A.g()}}this.Gc();hj(this.i,this.g.value,this.s,b)}};
n.Hf=function(){this.u=!0;Zi(this.i.s,10)};
n.Ff=function(){this.u=!1;cj(this.i)};
function Lk(a){a.W||(a.W=!0,a.Ya=F(a.Hf,a),Q(a.m,a.g,"focus",a.Ya,99),a.na=F(a.Ff,a),Q(a.m,a.g,"blur",a.na,99))}
function Mk(a){a.W&&(a.W=!1,Mj(a.m,a.g,a.Ya),Mj(a.m,a.g,a.na))}
n.Ae=function(){this.H||(this.H=new Td(this.config_.Eg||50),this.H.ra("tick",this.Dg,void 0,this),this.H.start())};
n.re=function(){this.H&&(Ud(this.H),this.H=null)};
n.Dg=function(){this.ye({Xb:"polling"})};
n.Nf=function(){if(Dh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Gc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Vh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=Ig(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Gk(a){var b;a.m.ra(window,"pagehide",function(){a.Eb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Eb=!1;(c.persisted||b!==void 0)&&mj(a.i,b)})}
function Hk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Db&&mj(a.i,a.Db)})}
function Wi(a,b){a.config_.td&&a.o?Nh(a.o,"expanded",b):Nh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Pk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Qk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Rk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Pk(a).match(/\S+/g)||[],b=ob(a,b)>=0);return b}
function Fj(a,b){if(a.classList)a.classList.add(b);else if(!Rk(a,b)){var c=Pk(a);Qk(a,c+(c.length>0?" "+b:b))}}
function Sk(a,b){a.classList?a.classList.remove(b):Rk(a,b)&&Qk(a,Array.prototype.filter.call(a.classList?a.classList:Pk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Tk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Tk,N);n=Tk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.P=a;this.u=a.Uc();this.H=a.nc();Kh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Kh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Fh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Kh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.O=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=gh(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.o=P();a.Na?(this.g=P("sbsb_b"),Mh(this.g,"grid"),this.g.id=this.P.getId("sbsg")):(this.g=O("ul","sbsb_b"),Mh(this.g,"listbox"));this.o.appendChild(this.g)};
n.R=function(a){this.config_=a;var b=a.xe;b&&(this.Ya=this.P.Ud(b));this.o.className=a.Wg||"sbsb_a";this.X=a.Tg||"sbsb_d"};
function Ok(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function Ej(a,b){(b=a.m[b])&&Sk(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function wj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Uk(a,d));d.Bb(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Vk(a);f.appendChild(e);if(b.l!==void 0){a.m.push(c);g=a.F;var h=b.l();a.config_.Yf&&(e.onmouseover=function(){Bj(a.D,h)},e.onmouseout=function(){si(a.D)});
var k=c.g();k.onclick=function(l){Nk(a.s.m);b.o&&ij(a.s,b.g);si(a.D);var m=a.D;m.i=m.g=h;l=l||bi(k).event;d.Ab(l,b,a.I)}}else g=a.H;
Xh(f,g);return!0}
function Uk(a,b){b=b.Ib(a.I);var c=b.g();Fj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Mh(c,"option");a.ea++;return b}
function Aj(a,b,c,d){var e=O("input");e.type="button";e.value=Og(b);e.onclick=function(){vi(a.I,a.s.g,d)};
if(a.config_.Qf){b="lsb";var f=O("span");var g=O("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Vk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=P(),Mh(b,"row")):(b=O("li"),Mh(b,"presentation"));b.className="sbsb_c "+a.config_.Cc;b.onmousedown=F(a.nd,a);a.g.appendChild(b);return b}
n.nd=function(a){a=a||bi(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):qh&&!Eh&&(this.s.m.ea=!0);return!1};
function vj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=Ek(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Wk(){this.l=147}
I(Wk,N);Wk.prototype.sa=function(a){this.u=a.Vd()||document.body};
Wk.prototype.ga=function(a){this.config_=a};
Wk.prototype.getHeight=function(){this.g||xj(this);yj(this);this.i||(Wh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function xj(a){var b=P(a.config_.Zc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function yj(a){var b=G();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=bi(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Xk(){bh.call(this);this.set(191,new uk);this.set(150,new xk);this.set(146,new yk);this.set(147,new Wk);ch(this,149,new Qi);this.set(145,new Hj);this.set(117,new Ij);this.set(494,new Oj);this.set(374,new Pj);this.set(120,new Qj);this.set(121,new dk);this.set(553,new gk);this.set(124,new ok);this.set(125,new pk);this.set(123,new ik);this.set(126,new rk);this.set(127,new tk);this.set(115,new Ti);this.set(118,new aj);this.set(128,new sj);ch(this,154,new Gj);this.set(116,new Ak);this.set(119,
new Fk);this.set(129,new Tk)}
y(Xk,bh);function Yk(){this.l=347;this.i=[];this.m=0}
y(Yk,N);Yk.prototype.O=function(a){this.o=a.get(120)};
Yk.prototype.R=function(a){this.s="//"+(a.rg||"www."+a.ic)+"/gen_204?";this.g=a.Sg||{}};
function ek(a,b){b=Rj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Kg(b,!0);Zk(a,a.s+c)}
function Zk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function $k(){this.l=151;this.g=!0;this.i={}}
y($k,N);n=$k.prototype;n.O=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Hg([0])};
n.R=function(a){this.o=a.Vc;this.g=a.Md};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Qg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,k,l=b.g,m,p=0;m=l[p++];)k=m.g,h=f?this.m.bold(c,k):Ng(k),g.push(new ug(h,k,m.l(),m.getType(),m.i||[],m.m));delete this.i[d];return new $g(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function al(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(al,N);al.prototype.O=function(a){this.g=gh(a,151);this.g.sort(bl)};
al.prototype.R=function(){this.o=this.m=0};
al.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new $g(a,b.g,b.i,b.o,b.m,b.u):null};
al.prototype.has=function(a){return!!this.i[a.i]};
function bl(){return 0}
;function cl(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function dl(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function el(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function fl(){this.l=570;this.m=!1}
I(fl,N);n=fl.prototype;n.sa=function(a){this.u=a};
n.O=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Nb;if(this.g=b?this.u.Ud(b):null){b=this.s;var c=F(this.Gf,this);Q(b,b.g,10,c);b=this.s;c=F(this.Ef,this);Q(b,b.g,11,c);Q(this.s,this.g,"mouseover",F(this.Kf,this));Q(this.s,this.g,"mouseout",F(this.Jf,this));a.Sc&&(this.o=new cl(a.Sc));a.Rc&&(this.i=new cl(a.Rc))}};
n.R=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&dl(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&el(this.o,this.g),this.i&&el(this.i,this.g))};
n.Kf=function(){this.m&&this.o&&dl(this.o,this.g)};
n.Jf=function(){this.m&&this.o&&el(this.o,this.g)};
n.Gf=function(){this.m&&this.i&&dl(this.i,this.g)};
n.Ef=function(){this.m&&this.i&&el(this.i,this.g)};var gl=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function hl(){this.l=160}
I(hl,N);n=hl.prototype;n.sa=function(a,b){this.m=a;a.Lc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.O=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.pc;this.A=a.pe;this.D=a.vc;this.H=a.Bg;this.F=a.Ag};
n.nb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=O("img"),this.g.src=this.A+"/tia.png",this.i=O("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=F(this.gf,this);this.g.setAttribute("tia_field_name",this.m.Uc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.R=function(a){a.Wc&&(this.o=!!a.pc);this.g.setAttribute("tia_property",a.qe)};
n.isEnabled=function(){return this.o};
n.Xd=function(){return{tooltip:this.F}};
n.Gd=function(a){if(!this.B){a=pd("SCRIPT");var b=md(gl,this.H,this.D);Eb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.gf=function(){var a=this.u;Ei(a.D);dj(a)};
var il=Gg++;var jl=ha(["#"]);function kl(){this.l=173;this.m={}}
y(kl,N);n=kl.prototype;
n.sa=function(a,b){this.o=a;a.Lc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(ci()+":"+di(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",ci()+":"+di(.8)+";"),b.addRule(".gsst_a:active .gsst_e",ci()+":"+
di(1)+";"))};
n.O=function(a){this.u=a.get(118);this.i=gh(a,160)};
n.ga=function(a){this.A=a.Wc;this.i.sort(ll)};
n.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=P("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Pb)this.g.style.lineHeight=a+"px";ml(this)}nl(this)};
n.R=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[il];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);ml(this);nl(this);break}}};
function ll(){return 0}
function ml(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=O("a","gsst_a");ol(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function nl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=il,e=c.i.parentNode;e.onclick=F(c.Gd,c);a.m[d]=e;c.Xd&&(c=c.Xd(),c.fi&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function ol(a,b,c){nb(b,fb(jl));b.addEventListener("click",function(){return!1});
Eh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Gd(d),ti(a.u),Zh(d)}}
Gg++;function pl(){this.o=33;this.l=P();this.l.className="gspr_a"}
I(pl,oh);pl.prototype.g=function(){return this.l};function ql(){ph.call(this,33)}
y(ql,ph);ql.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
ql.prototype.Ib=function(){return new pl};
ql.prototype.Bb=function(a,b){Cb(b.l,gd(kd,a.m.g.b||""))};
ql.prototype.Ab=function(a,b,c){vi(c,b.g,1)};function rl(a,b){this.o=0;this.u=a;this.D=b;this.m=P();this.l=P("sbqs_a");this.m.appendChild(this.l);this.B=P("sbqs_c");this.m.appendChild(this.B)}
y(rl,oh);rl.prototype.g=function(){return this.m};
function sl(a,b,c,d){Cb(a.B,rg(b));a.A=c;d&&!a.i&&(a.i=$h(a.l),a.i.onclick=F(function(e){Nk(this.u.m);ij(this.u,this.A);vi(this.D,this.A,9);return Zh(e)},a));
d?(Cb(a.i,rg(d+" &raquo;")),a.l.style.display="",Nh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function tl(){ph.call(this,0)}
I(tl,ph);n=tl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.O=function(a){this.g=a.get(118)};
n.R=function(a){this.i=a.Qd?a.Rd:""};
n.Ib=function(a){return new rl(this.g,a)};
n.Bb=function(a,b){sl(b,a.getHtml(),a.g,this.i)};
n.Ab=function(a,b,c){vi(c,b.g,1)};function ul(a){Xk.call(this);ch(this,149,new hh);this.set(347,new Yk);this.set(133,new al);ch(this,151,new $k);this.set(570,new fl);this.set(134,new yi);this.set(189,new Bi);ch(this,156,new Fi);a.ENABLE_DELETE_ICON?ch(this,152,new ui):ch(this,152,new xi);ch(this,152,new ql);ch(this,152,new tl);this.set(173,new kl);ch(this,160,new hl);this.set(157,new Hi);ch(this,156,new Ii);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&ch(this,156,new Gi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(ch(this,153,new mh),ch(this,152,new ji(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Ji(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),ch(this,156,new Pi))}
y(ul,Xk);function vl(){return{yf:function(){return{clientName:"hp",requestIdentifier:"hp",ic:"google.com",Je:"",ad:"en",Nc:"",od:"",videoId:"",zd:"",authuser:0,sg:"",Ei:"",Ge:null,xd:"",Od:!1,rd:"",Ac:"",connectionType:0,transport:null,Ne:!1,ti:!1,ag:!1,enableCaching:!0,rf:10,Xh:10,lf:!0,Md:!0,Th:!1,vf:!1,mg:!1,ng:!1,ii:!1,Wf:!0,hf:!1,Xf:500,Wc:!1,Pf:!0,ci:!0,xi:!1,pc:!1,vc:"",pe:"//www.google.com/textinputassistant",qe:"",Bg:7,Zh:!1,ai:!1,Tf:!1,Sf:!0,Uf:!1,be:!1,Na:!1,Mg:!1,Lg:!1,Dc:1,le:!0,mc:!1,Qd:!1,Nd:!1,
Eg:10,Vc:!1,Ig:!0,Ia:document.body,Vf:!0,Ke:null,pf:{},Wh:{},si:0,wf:!1,bg:!0,lb:!1,uf:!1,Qg:!1,zi:null,mf:!1,rg:null,Sg:null,Qc:!1,Yf:!0,td:!1,cf:!1,Bi:1,ne:!1,Ng:"Search",Rd:"I'm  Feeling Lucky",Og:"",qg:"Learn more",qd:"Remove",pd:"This search was removed from your Web History",di:"",Sh:"Did you mean:",Ag:"",vi:"",Hi:"Search by voice",Gi:'Listening for "Ok Google"',Fi:'Say "Ok Google"',Rh:"Clear Search",Pb:0,ig:0,Zc:"",Cc:"",hi:!1,Mb:"absolute",Qf:!1,ae:!1,xe:null,Rf:!0,kc:[0,0,0],jf:null,Vg:null,
Hd:[0],vd:!0,Me:"",Wg:"",Tg:"",Nb:null,Sc:"",Rc:"",Qh:1,eh:!1,Td:!1,ki:0,Rg:!1,ff:!1,Uh:!1,Fg:!0}}}}
;function wl(a,b,c,d,e){var f=Dh?"-moz-":qh?"-ms-":Eh?"-o-":Fh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,m){if(b){if(c){l=l.split(",");for(var p=[],r=0,q;q=l[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);l=p.join(",")}k.push(l,"{",m,"}")}},
Ye:function(){if(b&&k.length){b=!1;var l=O("style");l.setAttribute("type","text/css");(a||Eg).appendChild(l);var m=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=m:l.appendChild(document.createTextNode(m))}},
prefix:function(l,m){var p=l+(m||"");f&&(p+=m?l+f+m:f+l);return p}}}
;function xl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=xl.prototype;n.install=function(a){if(!this.D){a=yl(a);this.l<0&&(this.l=zl(a));var b=Vh(this.i),c=Al(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Me&&f.push(a.Me);f=wl(a.Ke,a.Vf,a.mf,this.l,f);this.A=a.lb;this.g=new dh(this.F,this.H,{Lc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Ud:function(g){return b.getElementById(g)},
Vd:function(){return e.I},
nc:function(){return c},
getId:function(g){return g+e.l},
Uc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.P=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=bi(this.i);this.s=ai(a);this.B=F(this.Kg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function Bl(a,b){function c(d){vi(a.X,a.J.g,12);return Yh(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.lb=function(){return this.A||!!this.u&&this.u.lb()};
n.ud=function(a){this.W.ud(a)};
function zl(a){a=bi(a.Ke||Eg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Al(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function yl(a){a=Vg(a);var b=a.vc;b?a.vc=b.toLowerCase():a.pc=!1;a.mc&&!a.Qd&&(a.mc=!1);Gh||(a.ng=!1);return a}
n.Kg=function(){var a=ai(bi(this.i));if(a.Oe!=this.s.Oe||a.de!=this.s.de)this.s=a,Zi(this.m,8)};function Cl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
H("ytvoicesearchloggingparams",F(this.Af,this))}
y(Cl,ah);n=Cl.prototype;n.Af=function(){this.g.P.add(6);return Rj(this.g.o,15)};
n.Dd=function(a){Nk(this.g.Y);this.u(Rj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.Cd(a))};
n.Cd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Rj(this.g.o);var d=this.g;c||(c=Rj(d.o));d=Kg(c);return a+b+d};
n.me=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=vl().yf();f.clientName="youtube";f.requestIdentifier="youtube";f.Nc="yt";f.ad=d.REQUEST_LANGUAGE;f.Je=d.REQUEST_DOMAIN;f.Pf=!1;f.Dc=0;f.le=!1;f.mc=!1;f.ne=!1;f.Vc=!0;f.Zc=this.D;f.Cc=this.i;f.Sc=this.B;f.Rc=this.A;f.gi=!0;f.pc=d.HAS_ON_SCREEN_KEYBOARD;f.vc=d.REQUEST_LANGUAGE;f.pe="//www.gstatic.com/inputtools/images";f.qe="youtube";f.Qc=!0;f.Mb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.rd="suggestqueries-clients6.youtube.com";d.PQ&&(f.od=d.PQ);f.zd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.pd=e.SUGGESTION_DISMISSED_LABEL;f.qd=e.SUGGESTION_DISMISS_LABEL;f.vd=!d.HIDE_REMOVE_LINK;f.Ai=Hg([0,33,35]);this.o?(f.Nb="search-container",f.Pb=24):this.m?(f.Nb="masthead-search",f.Pb=24):(f.Nb="masthead-search-terms",f.Pb=30);dc()||(f.ae=!0);f.xe=f.Nb;e=this.l.offsetHeight;f.kc=[e+(56-e)/2-40+4,0,0];e=[0];ec()&&jc()=="8.0"&&
(e[0]=-1);f.Hd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Nd=!0);if(e=d.SUGG_EXP_ID)f.xd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=bi(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);fh(a.g);b=yl(b);a.A=b.lb;a=a.g;fh(a);for(c=0;d=a.g[c++];)d.R(b);a.l=!0}else d=new ul(d),this.g=new xl(b,a,this,d),
this.g.install(f),c&&(Bl(this.g,c),c.onclick=null)};function Dl(){this.data=[];this.g=-1}
Dl.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Dl.prototype.get=function(a){return!!this.data[a]};
function El(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Fl(){this.blockSize=-1}
;function Gl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
I(Gl,Fl);Gl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Hl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Gl.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)Hl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Hl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Hl(this,e);f=0;break}}this.l=f;this.m+=b}};
Gl.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;Hl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Il(){}
Il.prototype.next=function(){return Jl};
var Jl={done:!0,value:void 0};Il.prototype.kb=function(){return this};function Kl(a){if(a instanceof Ll||a instanceof Ml||a instanceof Nl)return a;if(typeof a.next=="function")return new Ll(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Ll(function(){return a[Symbol.iterator]()});
if(typeof a.kb=="function")return new Ll(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function Ll(a){this.g=a}
Ll.prototype.kb=function(){return new Ml(this.g())};
Ll.prototype[Symbol.iterator]=function(){return new Nl(this.g())};
Ll.prototype.l=function(){return new Nl(this.g())};
function Ml(a){this.g=a}
y(Ml,Il);Ml.prototype.next=function(){return this.g.next()};
Ml.prototype[Symbol.iterator]=function(){return new Nl(this.g)};
Ml.prototype.l=function(){return new Nl(this.g)};
function Nl(a){Ll.call(this,function(){return a});
this.i=a}
y(Nl,Ll);Nl.prototype.next=function(){return this.i.next()};function Ol(a){var b=[];Pl(new Ql,a,b);return b.join("")}
function Ql(){}
function Pl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Rl(d,c),c.push(":"),Pl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sl={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Tl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rl(a,b){b.push('"',a.replace(Tl,function(c){var d=Sl[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Sl[c]=d);return d}),'"')}
;function Ul(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function R(a){Sb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
I(R,Sb);n=R.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Fc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&rb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ue=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Vl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ab;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Fc(c)}}return e!=0}return!1};
function Vl(a,b,c){Ad(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Fc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){R.Fa.Ba.call(this);this.clear();this.i.length=0};function Wl(a){this.g=a}
Wl.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Ol(b))};
Wl.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wl.prototype.remove=function(a){this.g.remove(a)};function Xl(a){this.g=a}
I(Xl,Wl);function Yl(a){this.data=a}
function Zl(a){return a===void 0||a instanceof Yl?a:new Yl(a)}
Xl.prototype.set=function(a,b){Xl.Fa.set.call(this,a,Zl(b))};
Xl.prototype.l=function(a){a=Xl.Fa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $l(a){this.g=a}
I($l,Xl);$l.prototype.set=function(a,b,c){if(b=Zl(b)){if(c){if(c<G()){$l.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}$l.Fa.set.call(this,a,b)};
$l.prototype.l=function(a){var b=$l.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())$l.prototype.remove.call(this,a);else return b}};function am(){}
;function bm(){}
I(bm,am);bm.prototype[Symbol.iterator]=function(){return Kl(this.kb(!0)).l()};
bm.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function cm(a){this.g=a;this.l=null}
I(cm,bm);n=cm.prototype;n.set=function(a,b){dm(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){dm(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){dm(this);this.g.removeItem(a)};
n.kb=function(a){dm(this);var b=0,c=this.g,d=new Il;d.next=function(){if(b>=c.length)return Jl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){dm(this);this.g.clear()};
n.key=function(a){dm(this);return this.g.key(a)};
function dm(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=em(a.g))||td(Error("Storage mechanism: Storage unavailable"))}
function em(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function fm(){var a=null;try{a=C.localStorage||null}catch(b){}cm.call(this,a)}
I(fm,cm);function gm(a,b){this.l=a;this.g=b+"::"}
I(gm,bm);gm.prototype.set=function(a,b){this.l.set(this.g+a,b)};
gm.prototype.get=function(a){return this.l.get(this.g+a)};
gm.prototype.remove=function(a){this.l.remove(this.g+a)};
gm.prototype.kb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Il;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var T={},hm=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";T.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
T.wd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var im={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},jm={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){return[].concat.apply([],a)}};
T.Pg=function(){hm?(T.jb=Uint8Array,T.Ka=Uint16Array,T.Re=Int32Array,T.assign(T,im)):(T.jb=Array,T.Ka=Array,T.Re=Array,T.assign(T,jm))};
T.Pg();var km=!0;try{new Uint8Array(1)}catch(a){km=!1}
function lm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new T.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var mm={};mm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var nm={},om,pm=[],qm=0;qm<256;qm++){om=qm;for(var rm=0;rm<8;rm++)om=om&1?3988292384^om>>>1:om>>>1;pm[qm]=om}nm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^pm[(a^b[d])&255];return a^-1};var sm={};sm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function tm(a){for(var b=a.length;--b>=0;)a[b]=0}
var um=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],vm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ym=Array(576);tm(ym);var zm=Array(60);tm(zm);var Am=Array(512);tm(Am);var Bm=Array(256);tm(Bm);var Cm=Array(29);tm(Cm);var Dm=Array(30);tm(Dm);function Em(a,b,c,d,e){this.Ie=a;this.tf=b;this.sf=c;this.kf=d;this.xg=e;this.ce=a&&a.length}
var Fm,Gm,Hm;function Im(a,b){this.Ld=a;this.wb=0;this.Ua=b}
function Jm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Km(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Jm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Lm(a,b,c){Km(a,c[b*2],c[b*2+1])}
function Mm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Nm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Mm(d[e]++,e))}
function Om(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.bb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Ra=a.zb=0;a.za=a.matches=0}
function Pm(a){a.ha>8?Jm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Qm(a,b,c){Pm(a);Jm(a,c);Jm(a,~c);T.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Rm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Sm(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&Rm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Rm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Tm(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Jb+d*2]<<8|a.ba[a.Jb+d*2+1];var f=a.ba[a.cd+d];d++;if(e===0)Lm(a,f,b);else{var g=Bm[f];Lm(a,g+256+1,b);var h=um[g];h!==0&&(f-=Cm[g],Km(a,f,h));e--;g=e<256?Am[e]:Am[256+(e>>>7)];Lm(a,g,c);h=vm[g];h!==0&&(e-=Dm[g],Km(a,e,h))}}while(d<a.za)}Lm(a,256,b)}
function Um(a,b){var c=b.Ld,d=b.Ua.Ie,e=b.Ua.ce,f=b.Ua.kf,g,h=-1;a.Qa=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Qa<2;){var k=a.da[++a.Qa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ra--;e&&(a.zb-=d[k*2+1])}b.wb=h;for(g=a.Qa>>1;g>=1;g--)Sm(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],Sm(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Sm(a,c,1);while(a.Qa>=
2);a.da[--a.sb]=a.da[1];g=b.Ld;k=b.wb;d=b.Ua.Ie;e=b.Ua.ce;f=b.Ua.tf;var l=b.Ua.sf,m=b.Ua.xg,p,r=0;for(p=0;p<=15;p++)a.Ma[p]=0;g[a.da[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>k)){a.Ma[p]++;var t=0;q>=l&&(t=f[q-l]);var u=g[q*2];a.Ra+=u*(p+t);e&&(a.zb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.Ma[p]===0;)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.Ma[p];q!==0;)d=a.da[--b],d>k||(g[d*2+1]!==p&&(a.Ra+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Nm(c,h,a.Ma)}
function Vm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Wm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Lm(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Lm(a,l,a.ka),g--),Lm(a,16,a.ka),Km(a,g-3,2)):g<=10?(Lm(a,17,a.ka),Km(a,g-3,3)):(Lm(a,18,a.ka),Km(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Xm(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var Ym=!1;function Zm(a,b,c){a.ba[a.Jb+a.za*2]=b>>>8&255;a.ba[a.Jb+a.za*2+1]=b&255;a.ba[a.cd+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Bm[c]+256+1)*2]++,a.bb[(b<256?Am[b]:Am[256+(b>>>7)])*2]++);return a.za===a.Sb-1}
;function $m(a,b){a.msg=sm[b];return b}
function an(a){for(var b=a.length;--b>=0;)a[b]=0}
function bn(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);c!==0&&(T.mb(a.output,b.ba,b.Tb,c,a.xb),a.xb+=c,b.Tb+=c,a.yd+=c,a.U-=c,b.pending-=c,b.pending===0&&(b.Tb=0))}
function cn(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.S.Oc===2&&(a.S.Oc=Xm(a));Um(a,a.uc);Um(a,a.jc);Vm(a,a.ta,a.uc.wb);Vm(a,a.bb,a.jc.wb);Um(a,a.Id);for(e=18;e>=3&&a.ka[xm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+14;var f=a.Ra+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Km(a,b?1:0,3),Qm(a,c,d);else if(a.strategy===4||g===f)Km(a,2+(b?1:0),3),Tm(a,ym,zm);else{Km(a,4+(b?1:0),3);c=a.uc.wb+1;d=a.jc.wb+1;e+=1;Km(a,c-257,5);Km(a,d-1,5);Km(a,e-4,4);for(f=0;f<e;f++)Km(a,a.ka[xm[f]*
2+1],3);Wm(a,a.ta,c-1);Wm(a,a.bb,d-1);Tm(a,a.ta,a.bb)}Om(a);b&&Pm(a);a.va=a.C;bn(a.S)}
function U(a,b){a.ba[a.pending++]=b}
function dn(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function en(a,b){var c=a.ke,d=a.C,e=a.wa,f=a.oe,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Zd&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.vb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.G?e:a.G}
function fn(a){var b=a.ma,c;do{var d=a.Pe-a.G-a.C;if(a.C>=b+(b-262)){T.mb(a.window,a.window,b,b,0);a.vb-=b;a.C-=b;a.va-=b;var e=c=a.qc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.S.oa===0)break;e=a.S;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,T.mb(c,e.input,e.gb,g,f),e.state.wrap===1?e.L=mm(e.L,c,g,f):e.state.wrap===2&&(e.L=nm(e.L,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.T=a.window[d],
a.T=(a.T<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.T=(a.T<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Wa]=a.head[a.T],a.head[a.T]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.S.oa!==0)}
function gn(a,b){for(var c;;){if(a.G<262){fn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=en(a,c));if(a.V>=3)if(c=Zm(a,a.C-a.vb,a.V-3),a.G-=a.V,a.V<=a.fd&&a.G>=3){a.V--;do a.C++,a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.T=a.window[a.C],a.T=(a.T<<a.Pa^a.window[a.C+1])&a.Oa;else c=Zm(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(cn(a,!1),a.S.U===0))return 1}a.la=a.C<2?a.C:2;return b===4?(cn(a,!0),a.S.U===0?3:4):a.za&&(cn(a,!1),a.S.U===0)?1:2}
function hn(a,b){for(var c,d;;){if(a.G<262){fn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);a.wa=a.V;a.se=a.vb;a.V=2;c!==0&&a.wa<a.fd&&a.C-c<=a.ma-262&&(a.V=en(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.vb>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=Zm(a,a.C-1-a.se,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);
while(--a.wa!==0);a.eb=0;a.V=2;a.C++;if(c&&(cn(a,!1),a.S.U===0))return 1}else if(a.eb){if((c=Zm(a,0,a.window[a.C-1]))&&cn(a,!1),a.C++,a.G--,a.S.U===0)return 1}else a.eb=1,a.C++,a.G--}a.eb&&(Zm(a,0,a.window[a.C-1]),a.eb=0);a.la=a.C<2?a.C:2;return b===4?(cn(a,!0),a.S.U===0?3:4):a.za&&(cn(a,!1),a.S.U===0)?1:2}
function jn(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){fn(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=Zm(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Zm(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(cn(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(cn(a,!0),a.S.U===0?3:4):
a.za&&(cn(a,!1),a.S.U===0)?1:2}
function kn(a,b){for(var c;;){if(a.G===0&&(fn(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=Zm(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(cn(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(cn(a,!0),a.S.U===0?3:4):a.za&&(cn(a,!1),a.S.U===0)?1:2}
function ln(a,b,c,d,e){this.Cf=a;this.wg=b;this.zg=c;this.vg=d;this.xf=e}
var mn;mn=[new ln(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){fn(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,cn(a,!1),a.S.U===0)return 1;if(a.C-a.va>=a.ma-262&&(cn(a,!1),a.S.U===0))return 1}a.la=0;if(b===4)return cn(a,!0),a.S.U===0?3:4;a.C>a.va&&cn(a,!1);return 1}),
new ln(4,4,8,4,gn),new ln(4,5,16,8,gn),new ln(4,6,32,32,gn),new ln(4,4,16,16,hn),new ln(8,16,32,32,hn),new ln(8,16,128,128,hn),new ln(8,32,128,256,hn),new ln(32,128,258,1024,hn),new ln(32,258,258,4096,hn)];
function nn(){this.S=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Tb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.tb=-1;this.Wa=this.Bd=this.ma=0;this.window=null;this.Pe=0;this.head=this.Ja=null;this.oe=this.Zd=this.strategy=this.level=this.fd=this.ke=this.wa=this.G=this.vb=this.C=this.eb=this.se=this.V=this.va=this.Pa=this.Oa=this.Xc=this.qc=this.T=0;this.ta=new T.Ka(1146);this.bb=new T.Ka(122);this.ka=new T.Ka(78);an(this.ta);an(this.bb);an(this.ka);this.Id=this.jc=this.uc=
null;this.Ma=new T.Ka(16);this.da=new T.Ka(573);an(this.da);this.sb=this.Qa=0;this.depth=new T.Ka(573);an(this.depth);this.ha=this.pa=this.la=this.matches=this.zb=this.Ra=this.Jb=this.za=this.Sb=this.cd=0}
function on(a,b){if(!a||!a.state||b>5||b<0)return a?$m(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return $m(a,a.U===0?-5:-2);c.S=a;var d=c.tb;c.tb=b;if(c.status===42)if(c.wrap===2)a.L=0,U(c,31),U(c,139),U(c,8),c.K?(U(c,(c.K.text?1:0)+(c.K.Sa?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),U(c,c.K.time&255),U(c,c.K.time>>8&255),U(c,c.K.time>>16&255),U(c,c.K.time>>24&255),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,c.K.mi&255),c.K.extra&&c.K.extra.length&&
(U(c,c.K.extra.length&255),U(c,c.K.extra.length>>8&255)),c.K.Sa&&(a.L=nm(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(U(c,0),U(c,0),U(c,0),U(c,0),U(c,0),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,3),c.status=113);else{var e=8+(c.Bd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;dn(c,e+(31-e%31));c.C!==0&&(dn(c,a.L>>>16),dn(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Sa&&c.pending>e&&(a.L=nm(a.L,c.ba,c.pending-e,e)),bn(a),e=c.pending,c.pending!==c.Aa));)U(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Sa&&c.pending>e&&(a.L=nm(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=nm(a.L,c.ba,c.pending-e,e)),bn(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>
e&&(a.L=nm(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=nm(a.L,c.ba,c.pending-e,e)),bn(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>e&&(a.L=nm(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Sa?(c.pending+2>c.Aa&&bn(a),c.pending+2<=c.Aa&&(U(c,
a.L&255),U(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(bn(a),a.U===0)return c.tb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return $m(a,-5);if(c.status===666&&a.oa!==0)return $m(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?kn(c,b):c.strategy===3?jn(c,b):mn[c.level].xf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.U===0&&(c.tb=-1),0;if(d===2&&(b===1?(Km(c,2,3),Lm(c,256,ym),c.ha===16?(Jm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(Km(c,0,3),Qm(c,0,0),b===3&&(an(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),bn(a),a.U===0))return c.tb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(U(c,a.L&255),U(c,a.L>>8&255),U(c,a.L>>16&255),U(c,a.L>>24&255),U(c,a.ib&255),U(c,a.ib>>8&255),U(c,a.ib>>16&255),U(c,a.ib>>24&255)):(dn(c,a.L>>>16),dn(c,a.L&65535));bn(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var pn={};pn=function(){this.input=null;this.ib=this.oa=this.gb=0;this.output=null;this.yd=this.U=this.xb=0;this.msg="";this.state=null;this.Oc=2;this.L=0};var qn=Object.prototype.toString;
function rn(a){if(!(this instanceof rn))return new rn(a);a=this.options=T.assign({level:-1,method:8,chunkSize:16384,Xa:15,yg:8,strategy:0,Va:""},a||{});a.raw&&a.Xa>0?a.Xa=-a.Xa:a.Df&&a.Xa>0&&a.Xa<16&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new pn;this.S.U=0;var b=this.S;var c=a.level,d=a.method,e=a.Xa,f=a.yg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=$m(b,-2);else{e===8&&(e=9);var k=new nn;
b.state=k;k.S=b;k.wrap=h;k.K=null;k.Bd=e;k.ma=1<<k.Bd;k.Wa=k.ma-1;k.Xc=f+7;k.qc=1<<k.Xc;k.Oa=k.qc-1;k.Pa=~~((k.Xc+3-1)/3);k.window=new T.jb(k.ma*2);k.head=new T.Ka(k.qc);k.Ja=new T.Ka(k.ma);k.Sb=1<<f+6;k.Aa=k.Sb*4;k.ba=new T.jb(k.Aa);k.Jb=1*k.Sb;k.cd=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.yd=0;b.Oc=2;c=b.state;c.pending=0;c.Tb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.tb=0;if(!Ym){d=Array(16);for(f=g=0;f<28;f++)for(Cm[f]=g,e=0;e<1<<um[f];e++)Bm[g++]=
f;Bm[g-1]=f;for(f=g=0;f<16;f++)for(Dm[f]=g,e=0;e<1<<vm[f];e++)Am[g++]=f;for(g>>=7;f<30;f++)for(Dm[f]=g<<7,e=0;e<1<<vm[f]-7;e++)Am[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)ym[e*2+1]=8,e++,d[8]++;for(;e<=255;)ym[e*2+1]=9,e++,d[9]++;for(;e<=279;)ym[e*2+1]=7,e++,d[7]++;for(;e<=287;)ym[e*2+1]=8,e++,d[8]++;Nm(ym,287,d);for(e=0;e<30;e++)zm[e*2+1]=5,zm[e*2]=Mm(e,5);Fm=new Em(ym,um,257,286,15);Gm=new Em(zm,vm,0,30,15);Hm=new Em([],wm,0,19,7);Ym=!0}c.uc=new Im(c.ta,Fm);c.jc=new Im(c.bb,Gm);c.Id=
new Im(c.ka,Hm);c.pa=0;c.ha=0;Om(c);c=0}else c=$m(b,-2);c===0&&(b=b.state,b.Pe=2*b.ma,an(b.head),b.fd=mn[b.level].wg,b.Zd=mn[b.level].Cf,b.oe=mn[b.level].zg,b.ke=mn[b.level].vg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.eb=0,b.T=0);b=c}}else b=-2;if(b!==0)throw Error(sm[b]);a.header&&(b=this.S)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Kb){var l;typeof a.Kb==="string"?l=lm(a.Kb):qn.call(a.Kb)==="[object ArrayBuffer]"?l=new Uint8Array(a.Kb):l=a.Kb;a=this.S;f=l;g=f.length;if(a&&a.state)if(l=
a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.G)b=-2;else{b===1&&(a.L=mm(a.L,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(an(l.head),l.C=0,l.va=0,l.la=0),c=new T.jb(l.ma),T.mb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for(fn(l);l.G>=3;){f=l.C;g=l.G-2;do l.T=(l.T<<l.Pa^l.window[f+3-1])&l.Oa,l.Ja[f&l.Wa]=l.head[l.T],l.head[l.T]=f,f++;while(--g);l.C=f;l.G=2;fn(l)}l.C+=l.G;l.va=l.C;l.la=l.G;l.G=0;l.V=l.wa=2;l.eb=0;a.gb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(sm[b]);
this.Kh=!0}}
rn.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=lm(a):qn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{c.U===0&&(c.output=new T.jb(d),c.xb=0,c.U=d);a=on(c,e);if(a!==1&&a!==0)return sn(this,a),this.ended=!0,!1;if(c.U===0||c.oa===0&&(e===4||e===2))if(this.options.Va==="string"){var f=T.wd(c.output,c.xb);b=f;f=f.length;if(f<65537&&(b.subarray&&km||!b.subarray))b=
String.fromCharCode.apply(null,T.wd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=T.wd(c.output,c.xb),this.chunks.push(b)}while((c.oa>0||c.U===0)&&a!==1);if(e===4)return(c=this.S)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=$m(c,-2):(c.state=null,a=d===113?$m(c,-3):0)):a=-2,sn(this,a),this.ended=!0,a===0;e===2&&(sn(this,0),c.U=0);return!0};
function sn(a,b){b===0&&(a.result=a.options.Va==="string"?a.chunks.join(""):T.Sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
;function tn(a){this.name=a}
;var un=new tn("rawColdConfigGroup");var vn=new tn("rawHotConfigGroup");function wn(a){this.M=K(a)}
y(wn,M);wn.prototype.g=function(a){L(this,5,a)};function xn(a){this.M=K(a)}
y(xn,M);function yn(a){this.M=K(a)}
y(yn,M);yn.hb=[2];function zn(a){this.M=K(a)}
y(zn,M);zn.prototype.qb=function(){return Hf(this,61)};
zn.prototype.getPlayerType=function(){return Hf(this,36)};
zn.prototype.setHomeGroupInfo=function(a){return Df(this,yn,81,a)};
zn.hb=[9,66,32,86,100,101];function An(a){this.M=K(a)}
y(An,M);var Bn=[2,3,4,5,6];function Cn(a){this.M=K(a)}
y(Cn,M);Cn.hb=[15,26,28];function Dn(a){this.M=K(a)}
y(Dn,M);Dn.hb=[5];function En(a){this.M=K(a)}
y(En,M);function Fn(a){this.M=K(a)}
y(Fn,M);Fn.prototype.setSafetyMode=function(a){return Kf(this,5,a)};
Fn.hb=[12];function Gn(a){this.M=K(a)}
y(Gn,M);Gn.hb=[12];var Hn={Jh:"WEB_DISPLAY_MODE_UNKNOWN",Fh:"WEB_DISPLAY_MODE_BROWSER",Hh:"WEB_DISPLAY_MODE_MINIMAL_UI",Ih:"WEB_DISPLAY_MODE_STANDALONE",Gh:"WEB_DISPLAY_MODE_FULLSCREEN"};function In(a){this.M=K(a)}
y(In,M);function Jn(a){this.M=K(a)}
y(Jn,M);Jn.prototype.l=function(){var a=a===void 0?0:a;var b=tf(this,2);if(b!=null)if(Oe(b)){var c;typeof b==="number"?c=Se(b):c=Qe(b);b=c}else b=void 0;return b!=null?b:a};function Kn(a){this.M=K(a)}
y(Kn,M);function Ln(a){this.M=K(a,497)}
y(Ln,M);
var Mn=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function Nn(a){this.M=K(a)}
y(Nn,M);function On(a){this.M=K(a)}
y(On,M);On.prototype.getPlaylistId=function(){return If(this,2)};
var Jf=[1,2];function Pn(a){this.M=K(a)}
y(Pn,M);Pn.hb=[3];var Qn=C.window,Rn,Sn,Tn=(Qn==null?void 0:(Rn=Qn.yt)==null?void 0:Rn.config_)||(Qn==null?void 0:(Sn=Qn.ytcfg)==null?void 0:Sn.data_)||{};H("yt.config_",Tn);function Un(){var a=arguments;a.length>1?Tn[a[0]]=a[1]:a.length===1&&Object.assign(Tn,a[0])}
function V(a,b){return a in Tn?Tn[a]:b}
;var Vn={};function Wn(){return Vn.clicktracking||(Vn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function W(a){a=Xn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Yn(a,b){a=Xn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Xn(a){return V("EXPERIMENT_FLAGS",{})[a]}
function Zn(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function $n(a,b,c,d){dg.set(""+a,b,{ed:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var ao=[];function bo(a){ao.forEach(function(b){return b(a)})}
function co(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){eo(b)}}:a}
function eo(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=V("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Un("ERRORS",b));bo(a)}
function fo(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=V("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Un("ERRORS",f))}
;var go=/^[\w.]*$/,ho={q:!0,search_query:!0};function io(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=jo(f[0]||""),h=jo(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?sb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(io);l.args=[{key:m,value:f[1],query:a,method:ko===p?"unchanged":p}];ho.hasOwnProperty(m)||fo(l)}}return c}
var ko=String(io);function lo(a){var b=[];tb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];pb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function mo(a){a.charAt(0)==="?"&&(a=a.substring(1));return io(a,"&")}
function no(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mo(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Ob(a,e)+d}
function oo(a){if(!b)var b=window.location.href;var c=a.match(Hb)[1]||null,d=Jb(a);c&&d?(a=a.match(Hb),b=b.match(Hb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Jb(b)===d&&(Number(b.match(Hb)[4]||null)||null)===(Number(a.match(Hb)[4]||null)||null):!0;return a}
function jo(a){return a&&a.match(go)?a:Gb(a)}
;var po=Vd||Wd;function qo(a){var b=Zb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var ro=Date.now().toString();function so(a){var b=to;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Wf;e.flash="0";a:{try{var f=b.g.top.location.href}catch(hb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Nf:g;try{var h=g.history.length}catch(hb){h=0}e.u_his=h;var k;e.u_h=(k=Nf.screen)==null?void 0:k.height;var l;e.u_w=(l=Nf.screen)==null?void 0:l.width;var m;e.u_ah=(m=Nf.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=Nf.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=Nf.screen)==null?void 0:r.colorDepth}catch(hb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(hb){}try{var u=h.outerWidth;var z=h.outerHeight}catch(hb){}try{var E=h.innerWidth;var S=h.innerHeight}catch(hb){}try{var ja=h.screenLeft;var ca=h.screenTop}catch(hb){}try{E=h.innerWidth,S=h.innerHeight}catch(hb){}try{var ib=h.screen.availWidth;var Oi=h.screen.availTop}catch(hb){}q=[ja,ca,q,t,ib,Oi,u,z,E,S];t=b.g.top;try{var Kc=(t||window).document,
jb=Kc.compatMode=="CSS1Compat"?Kc.documentElement:Kc.body;var Wa=(new od(jb.clientWidth,jb.clientHeight)).round()}catch(hb){Wa=new od(-12245933,-12245933)}Kc=Wa;Wa={};var Xa=Xa===void 0?C:Xa;jb=new Dl;"SVGElement"in Xa&&"createElementNS"in Xa.document&&jb.set(0);t=Tf();t["allow-top-navigation-by-user-activation"]&&jb.set(1);t["allow-popups-to-escape-sandbox"]&&jb.set(2);Xa.crypto&&Xa.crypto.subtle&&jb.set(3);"TextDecoder"in Xa&&"TextEncoder"in Xa&&jb.set(4);Xa=El(jb);Wa.bc=Xa;Wa.bih=Kc.height;Wa.biw=
Kc.width;Wa.brdim=q.join();b=b.l;b=(Wa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Wa.wgl=!!Nf.WebGLRenderingContext,Wa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var to=new function(){var a=window.document;this.g=window;this.l=a};
H("yt.ads_.signals_.getAdSignalsString",function(a){return lo(so(a))});G();var uo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function vo(){if(!uo)return null;var a=uo();return"open"in a?a:null}
;function wo(a,b){typeof a==="function"&&(a=co(a));return window.setTimeout(a,b)}
;var xo="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(xo);var yo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},zo="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(xo)),Ao=!1;
function Bo(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&co(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=vo();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;W("debug_forward_web_query_parameters")&&(a=Co(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Do(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){fo(p)}}l.send(d);return l}
function Do(a,b){b=b===void 0?{}:b;var c=oo(a),d=V("INNERTUBE_CLIENT_NAME"),e=W("web_ajax_ignore_global_headers_if_set"),f;for(f in yo){var g=V(yo[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=V("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(Jb(a)?!1:!0))){k=a;var l;if(l=W("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=Jb(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Ib(k.match(Hb)[5]||null)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Jb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Jb(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Jb(a)||(b["X-YouTube-Ad-Signals"]=lo(so()));return b}
function Eo(a,b){b.method="POST";b.postParams||(b.postParams={});return Fo(a,b)}
function Fo(a,b){var c=b.format||"JSON";a=Go(a,b);var d=Ho(a,b),e=!1,f=Io(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)m=Jo(a,c,k,b.convertToSafeHtml);l&&(l=Ko(c,k,m));m=m||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&
b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=wo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Go(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=no(a,b||{},!0);return a}
function Ho(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Jb(a)&&!b.withCredentials&&Jb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=mo(e),wb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Nb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Ao&&a&&b.method!=="POST"&&(Ao=!0,eo(Error("AJAX request with postData should use POST")));return e}
function Jo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,fo(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Lo(a):null)e={},pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Mo(g)})}d&&No(e);
return e}
function No(a){if(Ka(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=Bb(a[b]);a[c]=d}else No(a[b])}}
function Ko(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Lo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Mo(a){var b="";pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Co(a){var b=window.location.search,c=Jb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&oo(a)&&(c=document.location.hostname);var d=Ib(a.match(Hb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mo(b),f={};pb(zo,function(g){e[g]&&(f[g]=e[g])});
return no(a,f||{},!1)}
var Io=Bo;function Oo(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Po(){}
;function Qo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;H("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Ro={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},So={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},To={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Uo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Vo(){var a=C.navigator;return a?a.connection:void 0}
;function Wo(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Wo,Error);function Xo(){try{return Yo(),!0}catch(a){return!1}}
function Yo(){if(V("DATASYNC_ID")!==void 0)return V("DATASYNC_ID");throw new Wo("Datasync ID not set","unknown");}
;function Zo(){}
function $o(a,b){return mg.Za(a,0,b)}
Zo.prototype.Ha=function(a,b){return this.Za(a,1,b)};
Zo.prototype.Gb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var ap=Yn("web_emulated_idle_callback_delay",300),bp=1E3/60-3,cp=[8,5,4,3,2,1,0];
function dp(a){a=a===void 0?{}:a;Sb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(cp),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=bp;this.u=0;this.P=this.Cg.bind(this);this.ea=this.Zg.bind(this);this.X=this.Xe.bind(this);this.Y=this.Zf.bind(this);this.ca=this.Hg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!W("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.P)}
y(dp,Sb);n=dp.prototype;n.Gb=function(a){var b=G();ep(a);a=G()-b;this.s||(this.A-=a)};
n.Za=function(a,b,c){++this.I;if(b===10)return this.Gb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&fp(this)!==this.u&&gp(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function hp(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};gp(a)}
function fp(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function ip(a){var b=D("yt.logging.errors.log");b&&b(a)}
function ep(a){try{a()}catch(b){ip(b)}}
function jp(a){for(var b=w(cp),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Zf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;kp(this,b);this.J=!1};
n.Zg=function(){kp(this)};
n.Xe=function(){lp(this)};
n.Hg=function(a){this.D=!0;var b=fp(this);b===4&&b!==this.u&&(gp(this),this.start());kp(this,void 0,a);this.D=!1};
n.Cg=function(){document.hidden||lp(this);this.g&&(gp(this),this.start())};
function lp(a){gp(a);a.s=!0;for(var b=G(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&ep(e)}mp(a);a.s=!1;jp(a)&&a.start();b=G()-b;a.A-=b}
function mp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function kp(a,b,c){a.D&&a.u===4&&a.g||gp(a);a.s=!0;b=G()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){ip(l)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&ep(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(G()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&ep(c)}while(c&&G()<b)}a.s=!1;mp(a);a.A=bp;jp(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=fp(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ap);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function gp(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){hp(this);gp(this);this.F&&document.removeEventListener("visibilitychange",this.P);Sb.prototype.Ba.call(this)};var np=D("yt.scheduler.instance.timerIdMap_")||{},op=Yn("kevlar_tuner_scheduler_soft_state_timer_ms",800),pp=0,qp=0;function rp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.ab)a=new dp(V("scheduler")||{}),H("ytglobal.schedulerInstanceInstance_",a);return a}
function sp(){tp();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),H("ytglobal.schedulerInstanceInstance_",null))}
function tp(){hp(rp());for(var a in np)np.hasOwnProperty(a)&&delete np[Number(a)]}
function up(a,b,c){if(!c)return c=c===void 0,-rp().Za(a,b,c);var d=window.setTimeout(function(){var e=rp().Za(a,b);np[d]=e},c);
return d}
function vp(a){rp().Gb(a)}
function wp(a){var b=rp();if(a<0)b.xa(-a);else{var c=np[a];c?(b.xa(c),delete np[a]):window.clearTimeout(a)}}
function xp(){yp()}
function yp(){window.clearTimeout(pp);rp().start()}
function zp(){var a=rp();gp(a);a.H=!0;window.clearTimeout(pp);pp=window.setTimeout(xp,op)}
function Ap(){window.clearTimeout(qp);qp=window.setTimeout(function(){Bp(0)},op)}
function Bp(a){Ap();var b=rp();b.o=a;b.start()}
function Cp(a){Ap();var b=rp();b.o>a&&(b.o=a,b.start())}
function Dp(){window.clearTimeout(qp);var a=rp();a.o=0;a.start()}
;function Ep(){Zo.apply(this,arguments)}
y(Ep,Zo);function Fp(){Ep.g||(Ep.g=new Ep);return Ep.g}
Ep.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):wo(a,c||0)};
Ep.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ep.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var mg=Fp();
W("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(H("yt.scheduler.instance.dispose",sp),H("yt.scheduler.instance.addJob",up),H("yt.scheduler.instance.addImmediateJob",vp),H("yt.scheduler.instance.cancelJob",wp),H("yt.scheduler.instance.cancelAllJobs",tp),H("yt.scheduler.instance.start",yp),H("yt.scheduler.instance.pause",zp),H("yt.scheduler.instance.setPriorityThreshold",Bp),H("yt.scheduler.instance.enablePriorityThreshold",Cp),H("yt.scheduler.instance.clearPriorityThreshold",Dp),H("yt.scheduler.initialized",
!0));function Gp(a){var b=new fm;this.g=(a=(b.l=em(b.g))?a?new gm(b,a):b:null)?new $l(a):null;this.l=document.domain||window.location.hostname}
Gp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Ol(b))}catch(f){return}else e=escape(b);$n(a,e,c,this.l)};
Gp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=dg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;dg.remove(""+a,"/",b===void 0?"youtube.com":b)};var Hp=function(){var a;return function(){a||(a=new Gp("ytidb"));return a}}();
function Ip(){var a;return(a=Hp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Jp=[],Kp=!1;function Lp(a){Kp||(Jp.push({type:"ERROR",payload:a}),Jp.length>10&&Jp.shift())}
function Mp(a,b){Kp||(Jp.push({type:"EVENT",eventType:a,payload:b}),Jp.length>10&&Jp.shift())}
;function Np(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Op(a){return a.substr(0,a.indexOf(":"))||a}
;var Pp={},Qp=(Pp.AUTH_INVALID="No user identifier specified.",Pp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Pp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Pp.MISSING_INDEX="Index not created.",Pp.MISSING_OBJECT_STORES="Object stores not created.",Pp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Pp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Pp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Pp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Pp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Pp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Pp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Pp),Rp={},Sp=(Rp.AUTH_INVALID="ERROR",Rp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Rp.EXPLICIT_ABORT="IGNORED",Rp.IDB_NOT_SUPPORTED="ERROR",Rp.MISSING_INDEX=
"WARNING",Rp.MISSING_OBJECT_STORES="ERROR",Rp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Rp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Rp.QUOTA_EXCEEDED="WARNING",Rp.QUOTA_MAYBE_EXCEEDED="WARNING",Rp.UNKNOWN_ABORT="WARNING",Rp.INCOMPATIBLE_DB_VERSION="WARNING",Rp),Tp={},Up=(Tp.AUTH_INVALID=!1,Tp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Tp.EXPLICIT_ABORT=!1,Tp.IDB_NOT_SUPPORTED=!1,Tp.MISSING_INDEX=!1,Tp.MISSING_OBJECT_STORES=!1,Tp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Tp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Tp.QUOTA_EXCEEDED=!1,Tp.QUOTA_MAYBE_EXCEEDED=!0,Tp.UNKNOWN_ABORT=!0,Tp.INCOMPATIBLE_DB_VERSION=!1,Tp);function X(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Qp[a]:c;d=d===void 0?Sp[a]:d;e=e===void 0?Up[a]:e;Wo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Wo);function Vp(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Qp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Vp.prototype)}
y(Vp,X);function Wp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Wp.prototype)}
y(Wp,Error);var Xp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Yp(a,b,c,d){b=Op(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new X("QUOTA_EXCEEDED",a);if(Xd&&e.name==="UnknownError")return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Wp)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Xp.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",li:e.name})];e.level="WARNING";return e}
function Zp(a,b,c){var d=Ip();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function $p(a){if(!a)throw Error();throw a;}
function aq(a){return a}
function bq(a){this.g=a}
function cq(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
cq.resolve=function(a){return new cq(new bq(function(b,c){a instanceof cq?a.then(b,c):b(a)}))};
cq.reject=function(a){return new cq(new bq(function(b,c){c(a)}))};
cq.prototype.then=function(a,b){var c=this,d=a!=null?a:aq,e=b!=null?b:$p;return new cq(new bq(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){dq(c,c,d,f,g)}),c.l.push(function(){eq(c,c,e,f,g)})):c.state.status==="FULFILLED"?dq(c,c,d,f,g):c.state.status==="REJECTED"&&eq(c,c,e,f,g)}))};
function fq(a,b){a.then(void 0,b)}
function dq(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof cq?gq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function eq(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof cq?gq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof cq?gq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function hq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function iq(a){return new Promise(function(b,c){hq(a,b,c)})}
function jq(a){return new cq(new bq(function(b,c){hq(a,b,c)}))}
;function kq(a,b){return new cq(new bq(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var lq=window,Y=lq.ytcsi&&lq.ytcsi.now?lq.ytcsi.now:lq.performance&&lq.performance.timing&&lq.performance.now&&lq.performance.timing.navigationStart?function(){return lq.performance.timing.navigationStart+lq.performance.now()}:function(){return(new Date).getTime()};function mq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=mq.prototype;n.add=function(a,b,c){return nq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return nq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function oq(a,b,c){a=a.g.createObjectStore(b,c);return new pq(a)}
n.delete=function(a,b){return nq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return nq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function qq(a,b,c){return nq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return jq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function nq(a,b,c,d){var e,f,g,h,k,l,m,p,r,q,t,u;return B(function(z){switch(z.g){case 1:var E={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?E.mode=c:Object.assign(E,c);e=E;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){z.N(4);break}g++;k=Math.round(Y());va(z,5);l=a.g.transaction(b,e.mode);E=new rq(l);E=sq(E,d);return A(z,E,7);case 7:return m=z.l,p=Math.round(Y()),tq(a,k,p,g,void 0,b.join(),e),z.return(m);case 5:r=wa(z);q=Math.round(Y());t=Yp(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof X&&!t.g)||g>=f)tq(a,k,q,g,t,b.join(),e),h=t;z.N(2);break;case 4:return z.return(Promise.reject(h))}})}
function tq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Mp("QUOTA_EXCEEDED",{dbName:Op(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),Mp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),uq(a,!1,d,f,b,g.tag),Lp(e)):uq(a,!0,d,f,b,g.tag)}
function uq(a,b,c,d,e,f){Mp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function pq(a){this.g=a}
n=pq.prototype;n.add=function(a,b){return jq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return jq(this.g.clear()).then(function(){})};
function vq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function wq(a,b){return xq(a,{query:b},function(c){return c.delete().then(function(){return yq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?wq(this,a):jq(this.g.delete(a))};
n.get=function(a){return jq(this.g.get(a))};
n.index=function(a){try{return new zq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Wp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function xq(a,b,c){a=a.g.openCursor(b.query,b.direction);return Aq(a).then(function(d){return kq(d,c)})}
function rq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function sq(a,b){var c=new Promise(function(d,e){try{fq(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
rq.prototype.abort=function(){this.g.abort();this.l=!0;throw new X("EXPLICIT_ABORT");};
rq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new pq(a),this.i.set(a,b));return b};
function zq(a){this.g=a}
zq.prototype.delete=function(a){return Bq(this,{query:a},function(b){return b.delete().then(function(){return yq(b)})})};
zq.prototype.get=function(a){return jq(this.g.get(a))};
zq.prototype.keyPath=function(){return this.g.keyPath};
zq.prototype.unique=function(){return this.g.unique};
function Bq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Aq(a).then(function(d){return kq(d,c)})}
function Cq(a,b){this.request=a;this.cursor=b}
function Aq(a){return jq(a).then(function(b){return b?new Cq(a,b):null})}
function yq(a){a.cursor.continue(void 0);return Aq(a.request)}
Cq.prototype.delete=function(){return jq(this.cursor.delete()).then(function(){})};
Cq.prototype.update=function(a){return jq(this.cursor.update(a))};function Dq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new mq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.af,k=c.bf,l=c.Xg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Mp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Op(a)});var t=f(),u=new rq(g.transaction);m&&
m(t,function(z){return q.oldVersion<z&&q.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Mp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Op(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Eq(a,b,c){c=c===void 0?{}:c;return Dq(a,b,c)}
function Fq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.af)&&c.addEventListener("blocked",function(){e()}),A(g,iq(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=wa(g),Yp(f,a,"",-1);})}
;function Gq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Gq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return Eq(a,b,c)};
Gq.prototype.delete=function(a){a=a===void 0?{}:a;return Fq(this.name,a)};
function Hq(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Iq(a,b){if(!b)throw Zp("openWithToken",Op(a.name));return Jq(a)}
function Jq(a){function b(){var f,g,h,k,l,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",va(u,2),A(u,a.l(a.name,a.options.version,d),4);case 4:for(var z=h=u.l,E=a.options,S=[],ja=w(Object.keys(E.yb)),ca=ja.next();!ca.done;ca=ja.next()){ca=ca.value;var ib=E.yb[ca],Oi=ib.Jg===void 0?Number.MAX_VALUE:ib.Jg;!(z.g.version>=ib.Hb)||z.g.version>=Oi||z.g.objectStoreNames.contains(ca)||S.push(ca)}k=S;if(k.length===0){u.N(5);break}l=Object.keys(a.options.yb);m=h.objectStoreNames();
if(a.o<Yn("ytidb_reopen_db_retries",0))return a.o++,h.close(),Lp(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.m<Yn("ytidb_remake_db_retries",1))){u.N(6);break}a.m++;return A(u,a.delete(),7);case 7:return Lp(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Vp(m,l);case 5:return u.return(h);case 2:p=wa(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.N(8);break}return A(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,Hq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Yp(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Hq(a);if(a.g)return a.g;var d={bf:function(f){f.close()},
closed:c,Xg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Kq=new Gq("YtIdbMeta",{yb:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&oq(a,"databases",{keyPath:"actualName"})}});
function Lq(a,b){var c;return B(function(d){if(d.g==1)return A(d,Iq(Kq,b),2);c=d.l;return d.return(nq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return jq(f.g.put(a,void 0)).then(function(){})})}))})}
function Mq(a,b){var c;return B(function(d){if(d.g==1)return a?A(d,Iq(Kq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Nq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],A(e,Iq(Kq,b),2)):e.g!=3?(d=e.l,A(e,nq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return xq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return yq(g)})}),3)):e.return(c)})}
function Oq(a){return Nq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Pq,Qq=new function(){}(new function(){});
function Rq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Ip();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=po)f=/WebKit\/([0-9]+)/.exec(Zb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Zb()),f=!(f&&parseInt(f[1],10)>=602));if(f||pc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Lq(d,Qq),4);case 4:return A(e,Mq("yt-idb-test-do-not-use",Qq),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Sq(){if(Pq!==void 0)return Pq;Kp=!0;return Pq=Rq().then(function(a){Kp=!1;var b;if((b=Hp())!=null&&b.g){var c;b={hasSucceededOnce:((c=Ip())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Hp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tq(){return D("ytglobal.idbToken_")||void 0}
function Uq(){var a=Tq();return a?Promise.resolve(a):Sq().then(function(b){(b=b?Qq:void 0)&&H("ytglobal.idbToken_",b);return b})}
;new Ul;function Vq(a){if(!Xo())throw a=new X("AUTH_INVALID",{dbName:a}),Lp(a),a;var b=Yo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wq(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",A(m,Uq(),2);case 2:g=m.l;if(!g)throw h=Zp("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Lp(h),h;Np(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vq(a);va(m,3);return A(m,Lq(k,g),5);case 5:return A(m,Eq(k.actualName,b,d),6);case 6:return m.return(m.l);case 3:return l=wa(m),va(m,7),A(m,Mq(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function Xq(a,b,c){c=c===void 0?{}:c;return Wq(a,b,!1,c)}
function Yq(a,b,c){c=c===void 0?{}:c;return Wq(a,b,!0,c)}
function Zq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return A(e,Uq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Np(a);d=Vq(a);return A(e,Fq(d.actualName,b),3)}return A(e,Mq(d.actualName,c),0)})}
function $q(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?A(e,Fq(d.actualName,b),2):A(e,Mq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ar(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return A(d,Uq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Np("LogsDatabaseV2");return A(d,Oq(b),3)}c=d.l;return A(d,$q(c,a,b),0)})}
function br(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return A(d,Uq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Np(a);return A(d,Fq(a,b),3)}return A(d,Mq(a,c),0)})}
;function cr(a,b){Gq.call(this,a,b);this.options=b;Np(a)}
y(cr,Gq);function dr(a,b){var c;return function(){c||(c=new cr(a,b));return c}}
cr.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Yq:Xq)(a,b,Object.assign({},c))};
cr.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?br:Zq)(this.name,a)};
function er(a,b){return dr(a,b)}
;var fr={},gr=er("ytGcfConfig",{yb:(fr.coldConfigStore={Hb:1},fr.hotConfigStore={Hb:1},fr),shared:!1,upgrade:function(a,b){b(1)&&(vq(oq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),vq(oq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function hr(a){return Iq(gr(),a)}
function ir(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,hr(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,qq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function jr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,hr(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,qq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function kr(a){var b,c;return B(function(d){return d.g==1?A(d,hr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,nq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return Bq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function lr(a){var b,c;return B(function(d){return d.g==1?A(d,hr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,nq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return Bq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function mr(){Sb.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],H("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(mr,Sb);mr.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Sb.prototype.Ba.call(this)};function nr(){this.l=0;this.i=new mr}
function or(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!W("start_client_gcf")){g.N(0);break}c&&(a.m=c,H("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Tq();if(!d){g.N(3);break}if(c){g.N(4);break}return A(g,lr(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return A(g,ir(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function pr(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!W("start_client_gcf"))return h.N(0);a.coldHashData=b;H("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Tq())?c?h.N(4):A(h,kr(d),5):h.N(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.N(0);g=c.configData;return A(h,jr(c,b,g,d),0)})}
nr.prototype.g=function(a){this.hotHashData=a;H("yt.gcf.config.hotHashData",this.hotHashData||null)};function qr(){return"INNERTUBE_API_KEY"in Tn&&"INNERTUBE_API_VERSION"in Tn}
function rr(){return{cg:V("INNERTUBE_API_KEY"),dg:V("INNERTUBE_API_VERSION"),Yc:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fe:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),eg:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),ge:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),ie:V("INNERTUBE_CONTEXT_HL"),he:V("INNERTUBE_CONTEXT_GL"),fg:V("INNERTUBE_HOST_OVERRIDE")||"",hg:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),gg:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function sr(a){var b={client:{hl:a.ie,gl:a.he,clientName:a.fe,clientVersion:a.ge,configInfo:a.Yc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Zn();c.length>0&&(b.request={internalExperimentFlags:c});tr(a,void 0,b);ur(void 0,b);vr(void 0,b);wr(a,void 0,b);xr(void 0,b);W("start_client_gcf")&&yr(void 0,b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&
(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});!W("fill_delegate_context_in_gel_killswitch")&&(a=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(mo(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function tr(a,b,c){a=a.fe;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=Cf(b,xn,96)||new xn;var d=Oo();d=Object.keys(Hn).indexOf(d);d=d===-1?null:d;d!==null&&Kf(c,3,d);Df(b,xn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Oo())}
function ur(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Cf(a,Dn,7)||new Dn,L(b,4,c),Df(a,Dn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function vr(a,b){var c;if(W("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?wf(a,95,Pe(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function wr(a,b,c){if(a.appInstallData)if(b){var d;c=(d=Cf(b,wn,62))!=null?d:new wn;L(c,6,a.appInstallData);Df(b,wn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function xr(a,b){a:{var c=Vo();if(c){var d=Ro[c.type||"unknown"]||"CONN_UNKNOWN";c=Ro[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?Kf(a,61,So[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=Vo(),d=d!=null&&d.effectiveType?Uo.hasOwnProperty(d.effectiveType)?Uo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Kf(a,94,To[d]):
b&&(b.client.effectiveConnectionType=d)))}
function zr(a,b,c){c=c===void 0?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Mh||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Lh;else{Po.g||(Po.g=new Po);a={};c=[];"SESSION_ID"in Tn&&c.push({key:"u",value:V("SESSION_ID")});if(c=hg(c))a.Authorization=c,c=void 0,c===void 0&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),
W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Tn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Tn&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function yr(a,b){if(!nr.g){var c=new nr;nr.g=c}c=nr.g;var d=Y()-c.l;if(c.l!==0&&d<Yn("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=Cf(a,wn,62))!=null?g:new wn;g=L(b,1,d);L(g,3,c).g(e);Df(a,wn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var Ar=typeof TextEncoder!=="undefined"?new TextEncoder:null,Br=Ar?function(a){return Ar.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Cr=D("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Fc;R.prototype.publish=R.prototype.ue;R.prototype.clear=R.prototype.clear;H("ytPubsub2Pubsub2Instance",Cr);H("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});H("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});H("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});H("ytPubsub2Pubsub2SkipSubKey",null);function Dr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Di:a,Ci:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Er=void 0,Fr=void 0;function Gr(){if(!Fr){var a=V("WORKER_SERIALIZATION_URL");Fr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return Fr||void 0}
function Hr(){var a=Gr();Er||a===void 0||(Er=new Worker(Ya(a),void 0));return Er}
;var Ir=Yn("max_body_size_to_compress",5E5),Jr=Yn("min_body_size_to_compress",500),Kr=!0,Lr=0,Mr=0,Nr=Yn("compression_performance_threshold_lr",250),Or=Yn("slow_compressions_before_abandon_count",4),Pr=!1,Qr=new Map,Rr=1,Sr=!0;function Tr(){if(typeof Worker==="function"&&Gr()&&!Pr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Qr.get(c.key);d&&(Ur(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Qr.delete(c.key))}},b=Hr();
b&&(b.addEventListener("message",a),b.onerror=function(){Qr.clear()},Pr=!0)}}
function Vr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Kr)try{try{var g=(new Blob(b.split(""))).size}catch(m){fo(m),g=null}if(g!=null&&(g>Ir||g<Jr))d(a,c);else{if(W("gzip_gel_with_worker")&&(W("initial_gzip_use_main_thread")&&!Sr||!W("initial_gzip_use_main_thread"))){Pr||Tr();var h=Hr();if(h&&!e){Qr.set(Rr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Rr});Rr++;return}}var k=Br(b);b=(b=void 0,{});b.Df=!0;var l=new rn(b);
l.push(k,!0);if(l.err)throw l.msg||sm[l.err];Ur(l.result,f,a,c,d)}}catch(m){fo(m),d(a,c)}else d(a,c)}
function Ur(a,b,c,d,e){Sr=!1;var f=Y();b.ticks.gelc=f;Mr++;W("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Nr&&(Lr++,W("abandon_compression_after_N_slow_zips")?Mr===Yn("compression_disable_point")&&Lr>Or&&(Kr=!1):Kr=!1);W("gel_compression_csi_killswitch")||!W("log_gel_compression_latency")&&!W("log_gel_compression_latency_lr")||Dr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Wr(a){a=Object.assign({},a);delete a.Authorization;var b=hg();if(b){var c=new Gl;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=$d(c.digest(),3)}return a}
;var Xr;function Yr(){Xr||(Xr=new Gp("yt.innertube"));return Xr}
function Zr(a,b,c,d){if(d)return null;d=Yr().get("nextId",!0)||1;var e=Yr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wr(c),requestTime:Math.round(Y())};Yr().set("nextId",d+1,86400,!0);Yr().set("requests",e,86400,!0);return d}
function $r(a){var b=Yr().get("requests",!0)||{};delete b[a];Yr().set("requests",b,86400,!0)}
function as(a){var b=Yr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Wr(zr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),bs(a,d.method,e,{}));delete b[c]}}Yr().set("requests",b,86400,!0)}}
;function cs(a){this.dc=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Le=(b=a.Le)!=null?b:100;var c;this.Ce=(c=a.Ce)!=null?c:1;var d;this.ze=(d=a.ze)!=null?d:2592E6;var e;this.we=(e=a.we)!=null?e:12E4;var f;this.Be=(f=a.Be)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.lc=!!a.lc;var h;this.hc=(h=a.hc)!=null?h:.1;var k;this.xc=(k=a.xc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Lb&&(this.Lb=a.Lb);a.dc&&(this.dc=a.dc);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.md=a.md;this.jd=a.jd;ds(this)&&(!this.aa||this.aa("networkless_logging"))&&es(this)}
function es(a){ds(a)&&!a.Lb&&(a.g=!0,a.lc&&Math.random()<=a.hc&&a.fa.df(a.Z),fs(a),a.ia.ya()&&a.Wb(),a.ia.ra(a.md,a.Wb.bind(a)),a.ia.ra(a.jd,a.Jd.bind(a)))}
n=cs.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ds(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&gs(c,d)}).catch(function(e){gs(c,d);
hs(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ds(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.g==1)return A(k,d.fa.set(e,d.Z).catch(function(l){hs(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
hs(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ds(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.ob(d.id,c.Z):e=!0;c.ia.fb&&c.aa&&c.aa("vss_network_hint")&&c.ia.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){hs(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Wb=function(){var a=this;if(!ds(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return A(c,a.fa.Wd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?A(c,gs(a,b),3):(a.Jd(),c.return());a.l&&(a.l=0,a.Wb());c.g=0})},this.Le))};
n.Jd=function(){this.Ea.xa(this.l);this.l=0};
function gs(a,b){var c;return B(function(d){switch(d.g){case 1:if(!ds(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.N(2);break}return A(d,a.fa.ug(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(is(a,b,a.ze)){d.N(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.N(5);break}return A(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=js(a,b));if(!b){d.N(0);
break}if(!b.skipRetry||b.id===void 0){d.N(8);break}return A(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function js(a,b){if(!ds(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=ks(f);(h=ls(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.N(2);break}if(!a.ia.Bc){m.N(3);break}return A(m,a.ia.Bc(),3);case 3:if(a.ia.ya()){m.N(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===
void 0){m.N(6);break}return A(m,a.fa.sd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.N(8);break}return b.sendCount<a.Ce?A(m,a.fa.sd(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Wb()},a.Be);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.N(2):A(h,a.fa.ob(b.id,a.Z),2);a.ia.fb&&a.aa&&a.aa("vss_network_hint")&&a.ia.fb(!0);d(e,f);h.g=0})};
return b}
function is(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fs(a){if(!ds(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Wd("QUEUED",a.Z).then(function(b){b&&!is(a,b,a.we)?a.Ea.Ha(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.N(2):A(c,a.fa.sd(b.id,a.Z),2);fs(a);c.g=0})}):a.ia.ya()&&a.Wb()})}
function hs(a,b){a.Qe&&!a.ia.ya()?a.Qe(b):a.handleError(b)}
function ds(a){return!!a.Z||a.dc}
function ks(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function ls(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var ms;
function ns(){if(ms)return ms();var a={};ms=er("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Hb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&oq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),vq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return ms()}
;function os(a){return Iq(ns(),a)}
function ps(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,os(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,qq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();qs(c);return g.return(f)})}
function rs(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,os(b),2);if(m.g!=3)return d=m.l,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k="prev",W("use_fifo_for_networkless")&&(k="next"),l=void 0,A(m,nq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return Bq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(r){r.cursor.value&&
(l=r.cursor.value,a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=Y();qs(c);return m.return(l)})}
function ss(a,b){var c;return B(function(d){if(d.g==1)return A(d,os(b),2);c=d.l;return d.return(nq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",jq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function ts(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return A(f,os(b),2);e=f.l;return f.return(nq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),jq(h.g.put(k,void 0)).then(function(){return k})):cq.resolve(void 0)})}))})}
function us(a,b){var c;return B(function(d){if(d.g==1)return A(d,os(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function vs(a){var b,c;return B(function(d){if(d.g==1)return A(d,os(a),2);b=d.l;c=Y()-2592E6;return A(d,nq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return xq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return yq(f)})})}),0)})}
function ws(){B(function(a){return A(a,ar(),0)})}
function qs(a){W("nwl_csi_killswitch")||Dr("networkless_performance",a,{sampleRate:1})}
;var xs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500};var ys={},zs=er("ServiceWorkerLogsDatabase",{yb:(ys.SWHealthLog={Hb:1},ys),shared:!0,upgrade:function(a,b){b(1)&&vq(oq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function As(a){return Iq(zs(),a)}
function Bs(a){var b,c;B(function(d){if(d.g==1)return A(d,As(a),2);b=d.l;c=Y()-2592E6;return A(d,nq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return xq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return yq(f)})})}),0)})}
function Cs(a){var b;return B(function(c){if(c.g==1)return A(c,As(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var Ds={},Es=0;function Fs(a){var b=new Image,c=""+Es++;Ds[c]=b;b.onload=b.onerror=function(){delete Ds[c]};
b.src=a}
;var Gs;function Hs(){Gs||(Gs=new Gp("yt.offline"));return Gs}
function Is(a){if(W("offline_error_handling")){var b=Hs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Hs().set("errors",b,2592E3,!0)}}
;function Js(){this.g=new Map;this.l=!1}
function Ks(){if(!Js.g){var a=D("yt.networkRequestMonitor.instance")||new Js;H("yt.networkRequestMonitor.instance",a);Js.g=a}return Js.g}
Js.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Js.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
Js.prototype.removeParams=function(a){return a.split("?")[0]};
Js.prototype.removeParams=Js.prototype.removeParams;Js.prototype.isEndpointCFR=Js.prototype.isEndpointCFR;Js.prototype.requestComplete=Js.prototype.requestComplete;Js.getInstance=Ks;function Z(){Qc.call(this);var a=this;this.i=!1;this.l=lg();this.l.ra("networkstatus-online",function(){if(a.i&&W("offline_error_handling")){var b=Hs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Wo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;eo(d)}Hs().set("errors",{},2592E3,!0)}}})}
y(Z,Qc);function Ls(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;H("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.fb=function(a){this.l.l=a};
n.Bf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.nf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.Bc=function(a){a=jg(this.l,a);a.then(function(b){W("use_cfr_monitor")&&Ks().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Bc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.nf;Z.prototype.getWindowStatus=Z.prototype.Bf;Z.prototype.networkStatusHint=Z.prototype.fb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Ls;function Ms(a){a=a===void 0?{}:a;Qc.call(this);var b=this;this.l=this.s=0;this.i=Ls();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.zc?(this.zc=a.zc,c("networkstatus-online",function(){Ns(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ns(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Rc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rc(b,"publicytnetworkstatus-offline")})))}
y(Ms,Qc);Ms.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Ms.prototype.fb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Ms.prototype.Bc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return W("skip_network_check_if_cfr")&&Ks().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Ns(a,b){a.zc?a.l?(mg.xa(a.s),a.s=mg.Ha(function(){a.o!==b&&(Rc(a,b),a.o=b,a.l=Y())},a.zc-(Y()-a.l))):(Rc(a,b),a.o=b,a.l=Y()):Rc(a,b)}
;var Os;function Ps(){var a=cs.call;Os||(Os=new Ms({ji:!0,Vh:!0}));a.call(cs,this,{fa:{df:vs,ob:us,Wd:rs,ug:ss,sd:ts,set:ps},ia:Os,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;fo(new Wo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else eo(b)},
rb:fo,sendFn:Qs,now:Y,Qe:Is,Ea:Fp(),md:"publicytnetworkstatus-online",jd:"publicytnetworkstatus-offline",lc:!0,hc:.1,xc:Yn("potential_esf_error_limit",10),aa:W,Lb:!(Xo()&&Jb(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Ul;W("networkless_immediately_drop_all_requests")&&ws();br("LogsDatabaseV2")}
y(Ps,cs);function Rs(){var a=D("yt.networklessRequestController.instance");a||(a=new Ps,H("yt.networklessRequestController.instance",a),W("networkless_logging")&&Uq().then(function(b){a.Z=b;es(a);a.i.resolve();a.lc&&Math.random()<=a.hc&&a.Z&&Bs(a.Z);W("networkless_immediately_drop_sw_health_store")&&Ss(a)}));
return a}
Ps.prototype.writeThenSend=function(a,b){b||(b={});b=Ts(a,b);Xo()||(this.g=!1);cs.prototype.writeThenSend.call(this,a,b)};
Ps.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Ts(a,b);Xo()||(this.g=!1);cs.prototype.sendThenWrite.call(this,a,b,c)};
Ps.prototype.sendAndWrite=function(a,b){b||(b={});b=Ts(a,b);Xo()||(this.g=!1);cs.prototype.sendAndWrite.call(this,a,b)};
Ps.prototype.awaitInitialization=function(){return this.i.promise};
function Ss(a){var b;B(function(c){if(!a.Z)throw b=Zp("clearSWHealthLogsDb"),b;return c.return(Cs(a.Z).catch(function(d){a.handleError(d)}))})}
function Qs(a,b,c,d){d=d===void 0?!1:d;b=W("web_fp_via_jspb")?Object.assign({},b):b;W("use_cfr_monitor")&&Us(a,b);if(W("use_request_time_ms_header"))b.headers&&oo(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Bo(a,void 0,"POST",f,void 0);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Bo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Pa({url:a});if(k.i&&k.l||k.m){var l=Ib(a.match(Hb)[5]||null),m;if(!(m=!l||!l.endsWith("/aclk"))){var p=a.search(Qb),r=Pb(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Gb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(E){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(E){}z=!1}c=z?!0:!1}else c=!1;c||Fs(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Vr(a,b.postBody,b,Fo,d)):Vr(a,JSON.stringify(b.postParams),b,Eo,d):Fo(a,b)}
function Ts(a,b){W("use_event_time_ms_header")&&oo(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Us(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ks().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ks().requestComplete(a,!0);d(e,f)}}
;var Vs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};H("ytNetworklessLoggingInitializationOptions",Vs);function Ws(a){var b=this;this.config_=null;a?this.config_=a:qr()&&(this.config_=rr());$o(function(){as(b)},5E3)}
Ws.prototype.isReady=function(){!this.config_&&qr()&&(this.config_=rr());return!!this.config_};
function bs(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||W("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=Zr(b,c,l,k)),u)){var z=g.onSuccess,E=g.onFetchSuccess;g.onSuccess=function(ca,ib){$r(u);z(ca,ib)};
c.onFetchSuccess=function(ca,ib){$r(u);E(ca,ib)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Rs().writeThenSend(q,g):Rs().sendAndWrite(q,g);
else if(d.compress){var S=!d.networklessOptions.writeThenSend;if(g.postBody){var ja=g.postBody;typeof ja!=="string"&&(ja=JSON.stringify(g.postBody));Vr(q,ja,g,Fo,S)}else Vr(q,JSON.stringify(g.postParams),g,Eo,S)}else W("web_all_payloads_via_jspb")?Fo(q,g):Eo(q,g)}catch(ca){if(ca.name==="InvalidAccessError")u&&($r(u),u=0),fo(Error("An extension is blocking network request."));else throw ca;}u&&$o(function(){as(a)},5E3)}
!V("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&fo(new Wo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Wo("innertube xhrclient not ready",b,c,d);eo(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.fg)&&(h=f);var k=a.config_.hg||!1,l=zr(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.dg+"/"+b,p={alt:"json"},r=a.config_.gg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.cg);var q=no(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Vs.isNwlInitialized?Sq().then(function(t){e(t)}):e(!1)}
;var Xs=0;H("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Xs});H("ytEventsEventsListeners",C.ytEventsEventsListeners||{});H("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});function Ys(){var a=D("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Zs=C.ytPubsubPubsubInstance||new R,$s=C.ytPubsubPubsubSubscribedKeys||{},at=C.ytPubsubPubsubTopicToKeys||{},bt=C.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Fc;R.prototype.publish=R.prototype.ue;R.prototype.clear=R.prototype.clear;H("ytPubsubPubsubInstance",Zs);H("ytPubsubPubsubTopicToKeys",at);H("ytPubsubPubsubIsSynchronous",bt);H("ytPubsubPubsubSubscribedKeys",$s);var ct=Symbol("injectionDeps");function dt(){this.key=nr}
function et(){this.l=new Map;this.g=new Map}
et.prototype.resolve=function(a){return a instanceof dt?ft(this,a.key,[],!0):ft(this,a,[])};
function ft(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.dh!==void 0)var e=d.dh;else if(d.bh)e=d[ct]?gt(a,d[ct],c):[],e=d.bh.apply(d,x(e));else if(d.ah){e=d.ah;var f=e[ct]?gt(a,e[ct],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.yi||a.g.set(b,e);return e}
function gt(a,b,c){return b?b.map(function(d){return d instanceof dt?ft(a,d.key,c,!0):ft(a,d,c)}):[]}
;var ht;function it(){ht||(ht=new et);return ht}
;var jt=window;function kt(){var a,b;return"h5vcc"in jt&&((a=jt.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=jt.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in jt&&jt.performance.mark&&jt.performance.measure?2:0}
function lt(a){switch(kt()){case 1:jt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:jt.performance.mark(a+"-start");break;case 0:break;default:Db()}}
function mt(a){switch(kt()){case 1:jt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";jt.performance.mark(c);jt.performance.measure(a,b,c);break;case 0:break;default:Db()}}
;var nt=W("web_enable_lifecycle_monitoring")&&kt()!==0,ot=W("web_enable_lifecycle_monitoring");function pt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Fp():d;this.m=c;this.l=d;this.i=new Ul;this.g=a;for(a={cb:0};a.cb<this.g.length;a={wc:void 0,cb:a.cb},a.cb++)a.wc=this.g[a.cb],c=function(e){return function(){e.wc.bd();b.g[e.cb].yc=!0;b.g.every(function(f){return f.yc===!0})&&b.i.resolve()}}(a),d=this.l.Za(c,qt(this,a.wc)),this.g[a.cb]=Object.assign({},a.wc,{bd:c,
jobId:d})}
function rt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return qt(a,a.g[e])-qt(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.yc||(a.l.xa(c.jobId),a.l.Za(c.bd,10))}
pt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.yc||this.l.xa(b.jobId),b.yc=!0;this.i.resolve()};
function qt(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function st(a){this.state=a;this.i=[];this.o=void 0;this.u={};nt&&lt(this.state)}
st.prototype.install=function(a){this.i.push(a);return this};
function tt(a){nt&&mt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Va==="none"}):d.from===a.state&&d.Va==="none"});
if(b){a.l&&(rt(a.l),a.l=void 0);ot&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";nt&&lt(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(ut(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function ut(a,b){var c=b.filter(function(e){return vt(a,e)===10}),d=b.filter(function(e){return vt(a,e)!==10});
return a.u.wi?function(){var e=Ea.apply(0,arguments);return B(function(f){if(f.g==1)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
st.prototype.F=function(a){for(var b=Ea.apply(1,arguments),c=Fp(),d=w(a),e=d.next(),f={};!e.done;f={Rb:void 0},e=d.next())f.Rb=e.value,c.Gb(function(g){return function(){wt(g.Rb.name);g.Rb.Mc.apply(g.Rb,x(b));xt(g.Rb.name)}}(f))};
st.prototype.D=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=Fp(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.N(0);f.ub=e.value;f.Zb=void 0;g=function(k){return function(){wt(k.ub.name);var l=k.ub.Mc.apply(k.ub,x(b));typeof(l==null?void 0:l.then)==="function"?k.Zb=l.then(function(){xt(k.ub.name)}):xt(k.ub.name)}}(f);
c.Gb(g);return f.Zb?A(h,f.Zb,3):h.N(3)}f={ub:void 0,Zb:void 0};e=d.next();return h.N(2)})};
st.prototype.s=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{bd:function(){wt(e.name);e.Mc.apply(e,x(b));xt(e.name)},
priority:vt(c,e)}});
d.length&&(this.l=new pt(d))};
function vt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function wt(a){nt&&a&&lt(a)}
function xt(a){nt&&a&&mt(a)}
ea.Object.defineProperties(st.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function zt(a){st.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Va:"application_navigating",action:this.A},{from:"application_navigating",Va:"none",action:this.B},{from:"application_navigating",Va:"application_navigating",action:function(){}},
{from:"none",Va:"none",action:function(){}}]}
var At;y(zt,st);zt.prototype.A=function(a,b){var c=this;this.g=$o(function(){c.m==="application_navigating"&&tt(c)},5E3);
a(b==null?void 0:b.event)};
zt.prototype.B=function(a,b){this.g&&(mg.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function Bt(){At||(At=new zt);return At}
;var Ct=[];H("yt.logging.transport.getScrapedGelPayloads",function(){return Ct});function Dt(){this.store={};this.g={}}
Dt.prototype.storePayload=function(a,b){a=Et(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Dt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ft(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Dt.prototype.extractMatchingEntries=function(a){a=Ft(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Dt.prototype.getSequenceCount=function(a){a=Ft(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ft(a,b){var c=Et(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Et(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Gt(b.auth,g[0])){var h=b.isJspb;Gt(h===void 0?"undefined":h?"true":"false",g[1])&&Gt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Gt(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Gt(a,b){return a===void 0||a==="undefined"?!0:a===b}
Dt.prototype.getSequenceCount=Dt.prototype.getSequenceCount;Dt.prototype.extractMatchingEntries=Dt.prototype.extractMatchingEntries;Dt.prototype.smartExtractMatchingEntries=Dt.prototype.smartExtractMatchingEntries;Dt.prototype.storePayload=Dt.prototype.storePayload;function Et(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var Ht=Yn("initial_gel_batch_timeout",2E3),It=Yn("gel_queue_timeout_max_ms",6E4),Jt=Math.pow(2,16)-1,Kt=Yn("gel_min_batch_size",5),Lt=void 0;function Mt(){this.m=this.g=this.l=0;this.i=!1}
var Nt=new Mt,Ot=new Mt,Pt=new Mt,Qt=new Mt,Rt,St=!0,Tt=1,Ut=new Map,Vt=C.ytLoggingTransportTokensToCttTargetIds_||{};H("ytLoggingTransportTokensToCttTargetIds_",Vt);var Wt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};H("ytLoggingTransportTokensToJspbCttTargetIds_",Wt);var Xt={};function Yt(){var a=D("yt.logging.ims");a||(a=new Dt,H("yt.logging.ims",a));return a}
function Zt(a,b){if(a.endpoint==="log_event"){$t(a);var c=au(a),d=bu(a.payload)||"",e=cu(d),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=du(e.tier);if(f===400){eu(a,b);return}}Xt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Yt().storePayload(e,a.payload);fu(b,c,!1,e,gu(d))}}
function hu(a,b,c){if(b.endpoint==="log_event"){$t(void 0,b);var d=au(b,!0),e=cu(a),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=du(e.tier);if(f===400){iu(a,b,c);return}}Xt[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Yt().storePayload(e,Mf(b.payload));fu(c,d,!0,e,gu(a))}}
function fu(a,b,c,d,e){function f(){ju(W("flush_only_full_queue")?b:void 0,c,d.tier)}
c=c===void 0?!1:c;e=e===void 0?!1:e;a&&(Lt=new a);a=Yn("tvhtml5_logging_max_batch_ads_fork")||Yn("web_logging_max_batch")||100;var g=Y(),h=ku(c,d.tier),k=h.m;e&&(h.i=!0);e=0;d&&(e=Yt().getSequenceCount(d));e>=1E3?f():e>=a?Rt||(Rt=lu(function(){f();Rt=void 0},0)):g-k>=10&&(mu(c,d.tier),h.m=g)}
function eu(a,b){if(a.endpoint==="log_event"){$t(a);var c=au(a),d=new Map;d.set(c,[a.payload]);var e=bu(a.payload)||"";b&&(Lt=new b);return new Dd(function(f,g){Lt&&Lt.isReady()?nu(d,Lt,f,g,{bypassNetworkless:!0},!0,gu(e)):f()})}}
function iu(a,b,c){if(b.endpoint==="log_event"){$t(void 0,b);var d=au(b,!0),e=new Map;e.set(d,[Mf(b.payload)]);c&&(Lt=new c);return new Dd(function(f){Lt&&Lt.isReady()?ou(e,Lt,f,{bypassNetworkless:!0},!0,gu(a)):f()})}}
function au(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b===void 0?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new On;c.videoId?zf(d,1,Jf,Te(c.videoId)):c.playlistId&&zf(d,2,Jf,Te(c.playlistId));Wt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function ju(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Dd(function(e,f){var g=ku(b,c),h=g.i;g.i=!1;pu(g.l);pu(g.g);g.g=0;Lt&&Lt.isReady()?c===void 0&&W("enable_web_tiered_gel")?qu(e,f,d,a,b,300,h):qu(e,f,d,a,b,c,h):(mu(b,c),e())})}
function qu(a,b,c,d,e,f,g){var h=Lt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=W("enable_web_tiered_gel")?Yt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yt().extractMatchingEntries(p),k.set(d,b),ou(k,h,a,c,!1,g)):(k=W("enable_web_tiered_gel")?Yt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yt().extractMatchingEntries(p),l.set(d,k),nu(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Xt));for(l=b.next();!l.done;l=b.next())l=l.value,f=W("enable_web_tiered_gel")?Yt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Yt().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),f.length>0&&k.set(l,f),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Xt[l];ou(k,h,a,c,!1,g)}else{k=w(Object.keys(Xt));for(m=k.next();!m.done;m=k.next())m=m.value,p=W("enable_web_tiered_gel")?Yt().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Yt().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&l.set(m,p),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Xt[m];nu(l,h,a,b,c,!1,g)}}
function mu(a,b){function c(){ju(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=ku(a,b),e=d===Qt||d===Pt?5E3:It;W("web_gel_timeout_cap")&&!d.g&&(e=lu(function(){c()},e),d.g=e);
pu(d.l);e=V("LOGGING_BATCH_TIMEOUT",Yn("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&St&&(e=Ht);e=lu(function(){Yn("gel_min_batch_size")>0?Yt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Kt&&c():c()},e);
d.l=e}
function nu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),k=a.size,l=ru(g);a=w(a);var m=a.next();for(g={};!m.done;g={hd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,ld:void 0,kd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=ub({context:sr(b.config_||rr())});if(!Ja(p)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Vt[m])&&su(g.batchRequest,m,p);delete Vt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";tu(g.batchRequest,h,g.dangerousLogToVisitorSession);uu(e);g.ld=function(r){W("start_client_gcf")&&mg.Ha(function(){return B(function(q){return A(q,vu(r),0)})});
k--;k||c()};
g.hd=0;g.kd=function(r){return function(){r.hd++;if(e.bypassNetworkless&&r.hd===1)try{bs(b,l,r.batchRequest,wu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.ld,r.kd,f)),St=!1}catch(q){eo(q),d()}k--;k||c()}}(g);
try{bs(b,l,g.batchRequest,wu(e,g.dangerousLogToVisitorSession,g.ld,g.kd,f)),St=!1}catch(r){eo(r),d()}}}
function ou(a,b,c,d,e,f){d=d===void 0?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,p=a.get(m);l=new Pn;var r=b.config_||rr(),q=new Gn,t=new zn;L(t,1,r.ie);L(t,2,r.he);Kf(t,16,r.eg);L(t,17,r.ge);if(r.Yc){var u=r.Yc,z=new wn;u.coldConfigData&&L(z,1,u.coldConfigData);u.appInstallData&&L(z,6,u.appInstallData);u.coldHashData&&L(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);Df(t,wn,62,z)}if((u=
C.devicePixelRatio)&&u!=1){if(u!=null&&typeof u!=="number")throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);wf(t,65,u)}u=V("EXPERIMENTS_TOKEN","");u!==""&&L(t,54,u);u=Zn();if(u.length>0){z=new Cn;for(var E=0;E<u.length;E++){var S=new An;L(S,1,u[E].key);zf(S,2,Bn,Te(u[E].value));Gf(z,15,An,S)}Df(q,Cn,5,z)}tr(r,t);ur(q);vr(t);wr(r,t);xr(t);W("start_client_gcf")&&yr(t);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(r=new Fn,L(r,3,V("DELEGATED_SESSION_ID")));
!W("fill_delegate_context_in_gel_killswitch")&&(u=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=Cf(q,Fn,3)||new Fn,r=q,u=L(z,18,u),Df(r,Fn,3,u));r=t;u=w(Object.entries(mo(V("DEVICE",""))));for(z=u.next();!z.done;z=u.next())E=w(z.value),z=E.next().value,E=E.next().value,z==="cbrand"?L(r,12,E):z==="cmodel"?L(r,13,E):z==="cbr"?L(r,87,E):z==="cbrver"?L(r,88,E):z==="cos"?L(r,18,E):z==="cosver"?L(r,19,E):z==="cplatform"&&Kf(r,42,Qo(E));Df(q,zn,1,t);Df(l,Gn,1,q);if(t=Wt[m])a:{if(If(t,1))q=1;
else if(t.getPlaylistId())q=2;else break a;Df(l,On,4,t);t=Cf(l,Gn,1)||new Gn;r=Cf(t,Fn,3)||new Fn;u=new En;L(u,2,m);Kf(u,1,q);Gf(r,12,En,u);Df(t,Fn,3,r)}delete Wt[m];m=m==="visitorOnlyApprovedKey";xu()||wf(l,2,Pe(g));!m&&(q=V("EVENT_ID"))&&(t=yu(),r=new Nn,L(r,1,q),wf(r,2,Pe(t)),Df(l,Nn,5,r));uu(d);if(W("jspb_serialize_with_worker")&&(q=Hr())&&d.writeThenSend){Ut.set(Tt,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});q.postMessage({op:"gelBatchToSerialize",
batchRequest:Mf(l),clientEvents:p,key:Tt});Tt++;break}if(p){q=[];for(t=0;t<p.length;t++)try{q.push(new Ln(p[t]))}catch(ca){eo(new Wo("Transport failed to deserialize "+String(p[t])))}p=q}else p=[];p=w(p);for(q=p.next();!q.done;q=p.next())Gf(l,3,Ln,q.value);p={startTime:Y(),ticks:{},infos:{}};try{Lf=!0;var ja=JSON.stringify(Mf(l),jf)}finally{Lf=!1}p.ticks.geljspc=Y();W("log_jspb_serialize_latency")&&Dr("gel_jspb_serialize",p,{sampleRate:.1});zu(ja,b,c,d,e,f,m,h)}}
function zu(a,b,c,d,e,f,g,h){d=d===void 0?{}:d;h=h===void 0?{value:0}:h;f=ru(f);d=wu(d,g,function(k){W("start_client_gcf")&&mg.Ha(function(){return B(function(l){return A(l,vu(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;bs(b,f,"",d);St=!1}
function uu(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function wu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Oh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")||W("compress_gel_lr")};xu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function tu(a,b,c){xu()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=yu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function yu(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Jt/2));a++;a>Jt&&(a=1);Un("BATCH_CLIENT_COUNTER",a);return a}
function su(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function $t(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Xn("il_payload_scraping");if((c!==void 0?String(c):"")==="enable_il_payload_scraping")Ct=[],H("yt.logging.transport.enableScrapingForTest",!0),H("yt.logging.transport.scrapedPayloadsForTesting",Ct),H("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
H("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&d.length>=1)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push(((f=a)==null?void 0:f.payload)[d[e]])}H("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function xu(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function lu(a,b){return W("transport_use_scheduler")===!1?wo(a,b):W("logging_avoid_blocking_during_navigation")||W("lr_logging_avoid_blocking_during_navigation")?$o(function(){if(Bt().m==="none")a();else{var c={};Bt().install((c.none={Mc:a},c))}},b):$o(a,b)}
function pu(a){W("transport_use_scheduler")?mg.xa(a):window.clearTimeout(a)}
function vu(a){var b,c,d,e,f,g,h,k,l,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[vn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[un.name]:void 0;h=r;l=(k=d)==null?void 0:k.coldHashData;return(m=it().resolve(new dt))?g?e?A(p,or(m,g,e),2):A(p,or(m,g),2):p.N(2):p.return()}return l?h?A(p,pr(m,l,h),0):A(p,pr(m,l),0):p.N(0)})}
function ku(a,b){b=b===void 0?200:b;return a?b===300?Qt:Ot:b===300?Pt:Nt}
function cu(a){if(W("enable_web_tiered_gel")){a=xs[a||""];var b,c;if(it().resolve(new dt)==null)var d=void 0;else{var e=(d=D("yt.gcf.config.hotConfigGroup"))!=null?d:V("RAW_HOT_CONFIG_GROUP");d=e==null?void 0:(b=e.loggingHotConfig)==null?void 0:(c=b.eventLoggingConfig)==null?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function bu(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,xs[b])return b}
function du(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function gu(a){return a==="gelDebuggingEvent"}
function ru(a){return(a===void 0?0:a)&&W("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Au=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Au);function Bu(a){Au[a]=a in Au?Au[a]+1:0;return Au[a]}
;var Cu=[];var Du=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Du);var Eu=C.ytLoggingDocDocumentNonce_;
if(!Eu){var Fu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Gu=Array(16),Hu=new Uint8Array(16);window.crypto.getRandomValues(Hu);for(var Iu=0;Iu<Gu.length;Iu++)Gu[Iu]=Hu[Iu];Fu=Gu;break a}catch(a){}for(var Ju=Array(16),Ku=0;Ku<16;Ku++){for(var Lu=Date.now(),Mu=0;Mu<Lu%23;Mu++)Ju[Ku]=Math.random();Ju[Ku]=Math.floor(Math.random()*256)}if(ro)for(var Nu=1,Ou=0;Ou<ro.length;Ou++)Ju[Nu%16]=Ju[Nu%16]^Ju[(Nu-1)%16]/4^ro.charCodeAt(Ou),Nu++;Fu=Ju}for(var Pu=Fu,Qu=[],Ru=0;Ru<Pu.length;Ru++)Qu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Pu[Ru]&
63));Eu=Qu.join("");H("ytLoggingDocDocumentNonce_",Eu)}var Su=Eu;function Tu(a){return V("client-screen-nonce-store",{})[a===void 0?0:a]}
function Uu(a,b){b=b===void 0?0:b;var c=V("client-screen-nonce-store");c||(c={},Un("client-screen-nonce-store",c));c[b]=a}
function Vu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
H("yt_logging_screen.getRootVeType",function(a){return V(Vu(a===void 0?0:a))});
function Wu(){var a=V("csn-to-ctt-auth-info");a||(a={},Un("csn-to-ctt-auth-info",a));return a}
function Xu(a){a=Tu(a===void 0?0:a);if(!a&&!V("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
H("yt_logging_screen.getCurrentCsn",Xu);function Yu(a,b,c){var d=Wu();(c=Xu(c))&&delete d[c];b&&(d[a]=b)}
H("yt_logging_screen.getCttAuthInfo",function(a){return Wu()[a]});
H("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Tu(c)||b!==V(Vu(c)))if(Yu(a,d,c),Uu(a,c),Un(Vu(c),b),b=function(){setTimeout(function(){if(a)if(W("web_time_via_jspb")){var e=new In;L(e,1,Su);L(e,2,a);var f=W("jspb_sparse_encoded_pivot")?new Ln([{}]):new Ln;e!=null?Ue(e,In):e=void 0;zf(f,111,Mn,e);var g=void 0;g=g===void 0?{}:g;e=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(e=!0);e=e?null:Ws;g=g===void 0?{}:g;var h=Math.round(g.timestamp||Y());wf(f,1,Pe(h<Number.MAX_SAFE_INTEGER?
h:0));h=new Kn;if(g.lact)wf(h,1,Pe(isFinite(g.lact)?g.lact:-1));else if(g.timestamp)wf(h,1,Pe(-1));else{var k=Ys();wf(h,1,Pe(isFinite(k)?k:-1))}if(g.sequenceGroup&&!W("web_gel_sequence_info_killswitch")){k=g.sequenceGroup;var l=Bu(k),m=new Jn;wf(m,2,Pe(l));L(m,1,k);Df(h,Jn,3,m);g.endOfSequence&&delete Du[g.sequenceGroup]}Df(f,Kn,33,h);(g.sendIsolatedPayload?iu:hu)("foregroundHeartbeatScreenAssociated",{endpoint:"log_event",payload:f,cttAuthInfo:g.cttAuthInfo,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession},
e)}else h={clientDocumentNonce:Su,clientScreenNonce:a},e=e===void 0?{}:e,f=Ws,V("ytLoggingEventsDefaultDisabled",!1)&&Ws===Ws&&(f=null),W("web_all_payloads_via_jspb")?(e.timestamp||(e.lact=Ys(),e.timestamp=Y()),Cu.push({ni:"foregroundHeartbeatScreenAssociated",payload:h,options:e})):(e=e===void 0?{}:e,g={},k=Math.round(e.timestamp||Y()),g.eventTimeMs=k<Number.MAX_SAFE_INTEGER?k:0,g.foregroundHeartbeatScreenAssociated=h,h=Ys(),g.context={lastActivityMs:String(e.timestamp||!isFinite(h)?-1:h)},e.sequenceGroup&&
!W("web_gel_sequence_info_killswitch")&&(h=g.context,k=e.sequenceGroup,k={index:Bu(k),groupKey:k},h.sequence=k,e.endOfSequence&&delete Au[e.sequenceGroup]),(e.sendIsolatedPayload?eu:Zt)({endpoint:"log_event",payload:g,cttAuthInfo:e.cttAuthInfo,dangerousLogToVisitorSession:e.dangerousLogToVisitorSession},f))},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Zu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function $u(a,b){var c=c===void 0?!0:c;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Jb(window.location.href);e&&d.push(e);e=Jb(a);if(ob(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),nb(d,a),a=d.href)if(a=Kb(a),a=Lb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Xu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&av(a,b,f)}else av(a,b)}
function av(a,b,c){a=bv(a);b=b?Nb(b):"";c=c||5;(fg()||(Vd||Wd)&&qo("applewebkit")&&!qo("version")&&(!qo("safari")||qo("gsa/"))||rc&&qo("version/")||!V("EOM_VISITOR_DATA"))&&$n(a,b,c)}
function bv(a){var b=a;a=w(Zu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Qb),f=0,g=[];(c=Pb(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Rb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new R;function cv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(V("INNERTUBE_CLIENT_NAME")==="WEB"||V("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function dv(a,b){b=b?{feature:b}:{};var c=V("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Wn()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,$u(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Ob(a,d);V("LOGGED_IN",!0)&&cv()&&(d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Jb(window.location.href))&&d.push(b),b=Jb(a),ob(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Kb(a),(d=Lb(d))?
(d=bv(d),d=(d=dg.get(""+d,void 0)||null)?mo(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,cv()?(c||(c=V("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&$u(a,d));e=a+e;var g=g===void 0?eb:g;a:if(g=g===void 0?eb:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof cb&&d.og(e)){g=new ab(e);break a}g=void 0}f=f.location;g=mb(g||bb);g!==void 0&&(f.href=g)}}
;H("searchbox.yt.install",function(a,b,c,d,e,f,g){lh||(lh=new Cl);lh.install(a,b,c,d,e,f,g)});
H("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=mg.Ha;if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,dv,d))&&e(a,100)}});}).call(this);
