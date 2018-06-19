webpackJsonp([15],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(910);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* AddCompetitorsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* AddCompetitorsPage */]),
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(331);
var firebase = _interopDefault(__webpack_require__(97));
__webpack_require__(831);
__webpack_require__(333);
__webpack_require__(332);
__webpack_require__(832);
__webpack_require__(833);
__webpack_require__(834);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");

module.exports = firebase;


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function() {
  var firebase = __webpack_require__(97).default;
  var g,aa=aa||{},k=this;function l(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function ca(){}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return null===a}function fa(a){return"array"==da(a)}function ha(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"function"==da(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.lb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function oa(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function pa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function qa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}t(qa,u);qa.prototype.name="AssertionError";function ra(a,b){throw new qa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function sa(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function ta(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function ua(){this.b=this.a=null}var wa=new sa(function(){return new va},function(a){a.reset()});ua.prototype.add=function(a,b){var c=wa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xa(){var a=ya,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function va(){this.next=this.b=this.a=null}va.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};va.prototype.reset=function(){this.next=this.b=this.a=null};var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Aa(a,b){var c=a.length,d=l(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}
var Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=l(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ca=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function Da(a){a:{var b=Ea;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function Fa(a,b){return 0<=za(a,b)}function Ga(a,b){b=za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Ha(a,b){var c=0;Aa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ia(a){return Array.prototype.concat.apply([],arguments)}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ka(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;function w(a,b){return-1!=a.indexOf(b)}function Ua(a,b){return a<b?-1:a>b?1:0};var Va;a:{var Wa=k.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function x(a){return w(Va,a)};function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Za(a){for(var b in a)return!1;return!0}function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function cb(a){k.setTimeout(function(){throw a;},0)}var db;
function eb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.tb;c.tb=null;a()}};return function(a){d.next={tb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);ya.add(a,b)}var gb;function hb(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);gb=function(){a.then(jb)}}else gb=function(){var a=jb;!n(k.setImmediate)||k.Window&&k.Window.prototype&&!x("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(db||(db=eb()),db(a)):k.setImmediate(a)}}var ib=!1,ya=new ua;function jb(){for(var a;a=xa();){try{a.a.call(a.b)}catch(b){cb(b)}ta(wa,a)}ib=!1};function y(a,b){this.a=kb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ca)try{var c=this;a.call(b,function(a){lb(c,mb,a)},function(a){if(!(a instanceof nb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}lb(c,ob,a)})}catch(d){lb(this,ob,d)}}var kb=0,mb=2,ob=3;function pb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}pb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var qb=new sa(function(){return new pb},function(a){a.reset()});
function rb(a,b,c){var d=qb.get();d.g=a;d.b=b;d.f=c;return d}function A(a){if(a instanceof y)return a;var b=new y(ca);lb(b,mb,a);return b}function B(a){return new y(function(b,c){c(a)})}function sb(a,b,c){tb(a,b,c,null)||fb(ma(b,a))}function ub(a){return new y(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},m=0,p;m<a.length;m++)p=a[m],sb(p,ma(f,m),h);else b(e)})}
function vb(a){return new y(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Zb:!0,value:f}:{Zb:!1,reason:f};0==c&&b(d)},f=0,h;f<a.length;f++)h=a[f],sb(h,ma(e,f,!0),ma(e,f,!1));else b(d)})}y.prototype.then=function(a,b,c){return wb(this,n(a)?a:null,n(b)?b:null,c)};oa(y);g=y.prototype;g.ia=function(a,b){a=rb(a,a,b);a.c=!0;xb(this,a);return this};g.s=function(a,b){return wb(this,null,a,b)};g.cancel=function(a){this.a==kb&&fb(function(){var b=new nb(a);yb(this,b)},this)};
function yb(a,b){if(a.a==kb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.c||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(c.a==kb&&1==d?yb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):zb(c),Ab(c,e,ob,b)))}a.c=null}else lb(a,ob,b)}function xb(a,b){a.b||a.a!=mb&&a.a!=ob||Bb(a);a.f?a.f.next=b:a.b=b;a.f=b}
function wb(a,b,c,d){var e=rb(null,null,null);e.a=new y(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){h(z)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nb?h(b):a(e)}catch(z){h(z)}}:h});e.a.c=a;xb(a,e);return e.a}g.Lc=function(a){this.a=kb;lb(this,mb,a)};g.Mc=function(a){this.a=kb;lb(this,ob,a)};
function lb(a,b,c){a.a==kb&&(a===c&&(b=ob,c=new TypeError("Promise cannot resolve to itself")),a.a=1,tb(c,a.Lc,a.Mc,a)||(a.i=c,a.a=b,a.c=null,Bb(a),b!=ob||c instanceof nb||Cb(a,c)))}function tb(a,b,c,d){if(a instanceof y)return xb(a,rb(b||ca,c||null,d)),!0;if(pa(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(n(e))return Db(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Db(a,b,c,d,e){function f(a){m||(m=!0,d.call(e,a))}function h(a){m||(m=!0,c.call(e,a))}var m=!1;try{b.call(a,h,f)}catch(p){f(p)}}function Bb(a){a.h||(a.h=!0,fb(a.Ub,a))}function zb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}g.Ub=function(){for(var a;a=zb(this);)Ab(this,a,this.a,this.i);this.h=!1};
function Ab(a,b,c,d){if(c==ob&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Eb(b,c,d);else try{b.c?b.g.call(b.f):Eb(b,c,d)}catch(e){Fb.call(null,e)}ta(qb,b)}function Eb(a,b,c){b==mb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Cb(a,b){a.g=!0;fb(function(){a.g&&Fb.call(null,b)})}var Fb=cb;function nb(a){u.call(this,a)}t(nb,u);nb.prototype.name="cancel";function Gb(){0!=Hb&&(Ib[this[ia]||(this[ia]=++ja)]=this);this.pa=this.pa;this.ja=this.ja}var Hb=0,Ib={};Gb.prototype.pa=!1;function Jb(a){if(!a.pa&&(a.pa=!0,a.ua(),0!=Hb)){var b=a[ia]||(a[ia]=++ja);if(0!=Hb&&a.ja&&0<a.ja.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Ib[b]}}Gb.prototype.ua=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()};function Kb(a){Kb[" "](a);return a}Kb[" "]=ca;function Lb(a,b){var c=Mb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Nb=x("Opera"),Ob=x("Trident")||x("MSIE"),Pb=x("Edge"),Qb=Pb||Ob,Rb=x("Gecko")&&!(w(Va.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Sb=w(Va.toLowerCase(),"webkit")&&!x("Edge");function Tb(){var a=k.document;return a?a.documentMode:void 0}var Ub;
a:{var Vb="",Wb=function(){var a=Va;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Pb)return/Edge\/([\d\.]+)/.exec(a);if(Ob)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Wb&&(Vb=Wb?Wb[1]:"");if(Ob){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Mb={};
function Yb(a){return Lb(a,function(){for(var b=0,c=La(String(Ub)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=Ua(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Ua(0==h[2].length,0==m[2].length)||Ua(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var Zb;var $b=k.document;
Zb=$b&&Ob?Tb()||("CSS1Compat"==$b.compatMode?parseInt(Ub,10):5):void 0;var ac=Object.freeze||function(a){return a};var bc=!Ob||9<=Number(Zb),cc=Ob&&!Yb("9"),dc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ca,b);k.removeEventListener("test",ca,b);return a}();function C(a,b){this.type=a;this.b=this.target=b;this.Gb=!0}C.prototype.preventDefault=function(){this.Gb=!1};function ec(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Rb){a:{try{Kb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:fc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}t(ec,C);var fc=ac({2:"touch",3:"pen",4:"mouse"});ec.prototype.preventDefault=function(){ec.lb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,cc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};ec.prototype.f=function(){return this.a};var gc="closure_listenable_"+(1E6*Math.random()|0),hc=0;function ic(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++hc;this.na=this.Ia=!1}function jc(a){a.na=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null};function kc(a){this.src=a;this.a={};this.b=0}kc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=lc(a,b,d,e);-1<h?(b=a[h],c||(b.Ia=!1)):(b=new ic(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function mc(a,b){var c=b.type;c in a.a&&Ga(a.a[c],b)&&(jc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function lc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1};var nc="closure_lm_"+(1E6*Math.random()|0),oc={},qc=0;function rc(a,b,c,d,e){if(d&&d.once)sc(a,b,c,d,e);else if(fa(b))for(var f=0;f<b.length;f++)rc(a,b[f],c,d,e);else c=tc(c),a&&a[gc]?uc(a,b,c,q(d)?!!d.capture:!!d,e):vc(a,b,c,!1,d,e)}
function vc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,m=wc(a);m||(a[nc]=m=new kc(a));c=m.add(b,c,d,h,f);if(!c.proxy){d=xc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)dc||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(yc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qc++}}
function xc(){var a=zc,b=bc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function sc(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,e);else c=tc(c),a&&a[gc]?Ac(a,b,c,q(d)?!!d.capture:!!d,e):vc(a,b,c,!0,d,e)}
function D(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)D(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=tc(c),a&&a[gc])?(a=a.m,b=String(b).toString(),b in a.a&&(f=a.a[b],c=lc(f,c,d,e),-1<c&&(jc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=lc(b,c,d,e)),(c=-1<a?b[a]:null)&&Bc(c))}
function Bc(a){if("number"!=typeof a&&a&&!a.na){var b=a.src;if(b&&b[gc])mc(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(yc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qc--;(c=wc(b))?(mc(c,a),0==c.b&&(c.src=null,b[nc]=null)):jc(a)}}}function yc(a){return a in oc?oc[a]:oc[a]="on"+a}
function Cc(a,b,c,d){var e=!0;if(a=wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.na&&(f=Dc(f,d),e=e&&!1!==f)}return e}function Dc(a,b){var c=a.listener,d=a.La||a.src;a.Ia&&Bc(a);return c.call(d,b)}
function zc(a,b){if(a.na)return!0;if(!bc){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new ec(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Cc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Cc(d[e],a,!1,b),c=c&&f}return c}return Dc(a,
new ec(b,this))}function wc(a){a=a[nc];return a instanceof kc?a:null}var Ec="__closure_events_fn_"+(1E9*Math.random()>>>0);function tc(a){if(n(a))return a;a[Ec]||(a[Ec]=function(b){return a.handleEvent(b)});return a[Ec]};function E(){Gb.call(this);this.m=new kc(this);this.Nb=this;this.Ua=null}t(E,Gb);E.prototype[gc]=!0;E.prototype.addEventListener=function(a,b,c,d){rc(this,a,b,c,d)};E.prototype.removeEventListener=function(a,b,c,d){D(this,a,b,c,d)};
E.prototype.dispatchEvent=function(a){var b,c=this.Ua;if(c)for(b=[];c;c=c.Ua)b.push(c);c=this.Nb;var d=a.type||a;if(l(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else{var e=a;a=new C(d,c);bb(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.b=b[f];e=Fc(h,d,!0,a)&&e}h=a.b=c;e=Fc(h,d,!0,a)&&e;e=Fc(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.b=b[f],e=Fc(h,d,!1,a)&&e;return e};
E.prototype.ua=function(){E.lb.ua.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,jc(d[e]);delete a.a[c];a.b--}}this.Ua=null};function uc(a,b,c,d,e){a.m.add(String(b),c,!1,d,e)}function Ac(a,b,c,d,e){a.m.add(String(b),c,!0,d,e)}
function Fc(a,b,c,d){b=a.m.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.na&&h.capture==c){var m=h.listener,p=h.La||h.src;h.Ia&&mc(a.m,h);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Gb};function Gc(a,b,c){if(n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Hc(a){var b=null;return(new y(function(c,d){b=Gc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(a){k.clearTimeout(b);throw a;})};function Ic(a){if(a.S&&"function"==typeof a.S)return a.S();if(l(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Jc(a){if(a.U&&"function"==typeof a.U)return a.U();if(!a.S||"function"!=typeof a.S){if(ha(a)||l(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Kc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||l(a))v(a,b,void 0);else for(var c=Jc(a),d=Ic(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Lc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lc)for(c=a.U(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}g=Lc.prototype;g.S=function(){Mc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.U=function(){Mc(this);return this.a.concat()};
g.clear=function(){this.b={};this.c=this.a.length=0};function Mc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Nc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Nc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Nc(this.b,a)?this.b[a]:b};g.set=function(a,b){Nc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
g.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Nc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Rc(a,b){this.b=this.m=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Rc){this.f=void 0!==b?b:a.f;Sc(this,a.c);this.m=a.m;this.b=a.b;Tc(this,a.i);this.g=a.g;b=a.a;var c=new Uc;c.c=b.c;b.a&&(c.a=new Lc(b.a),c.b=b.b);Vc(this,c);this.h=a.h}else a&&(c=String(a).match(Oc))?(this.f=!!b,Sc(this,c[1]||"",!0),this.m=Wc(c[2]||""),this.b=Wc(c[3]||"",!0),Tc(this,c[4]),this.g=Wc(c[5]||"",!0),Vc(this,c[6]||"",!0),this.h=Wc(c[7]||"")):(this.f=!!b,this.a=new Uc(null,this.f))}
Rc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Xc(b,Yc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.m)&&a.push(Xc(b,Yc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xc(c,"/"==c.charAt(0)?Zc:$c,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Xc(c,ad));return a.join("")};
function Sc(a,b,c){a.c=c?Wc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Tc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Vc(a,b,c){b instanceof Uc?(a.a=b,bd(a.a,a.f)):(c||(b=Xc(b,cd)),a.a=new Uc(b,a.f))}function F(a,b,c){a.a.set(b,c)}function dd(a,b){return a.a.get(b)}function ed(a){return a instanceof Rc?new Rc(a):new Rc(a,void 0)}function fd(a,b){var c=new Rc(null,void 0);Sc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function Wc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xc(a,b,c){return l(a)?(a=encodeURI(a).replace(b,gd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yc=/[#\/\?@]/g,$c=/[#\?:]/g,Zc=/[#\?]/g,cd=/[#\?@]/g,ad=/#/g;function Uc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
function hd(a){a.a||(a.a=new Lc,a.b=0,a.c&&Qc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function id(a){var b=Jc(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Uc(null,void 0);a=Ic(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];fa(f)?jd(c,e,f):c.add(e,f)}return c}g=Uc.prototype;g.add=function(a,b){hd(this);this.c=null;a=kd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
function ld(a,b){hd(a);b=kd(a,b);Nc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Nc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Mc(a)))}g.clear=function(){this.a=this.c=null;this.b=0};function md(a,b){hd(a);b=kd(a,b);return Nc(a.a.b,b)}g.forEach=function(a,b){hd(this);this.a.forEach(function(c,d){v(c,function(c){a.call(b,c,d,this)},this)},this)};g.U=function(){hd(this);for(var a=this.a.S(),b=this.a.U(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.S=function(a){hd(this);var b=[];if(l(a))md(this,a)&&(b=Ia(b,this.a.get(kd(this,a))));else{a=this.a.S();for(var c=0;c<a.length;c++)b=Ia(b,a[c])}return b};g.set=function(a,b){hd(this);this.c=null;a=kd(this,a);md(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.S(a):[];return 0<a.length?String(a[0]):b};function jd(a,b,c){ld(a,b);0<c.length&&(a.c=null,a.a.set(kd(a,b),Ja(c)),a.b+=c.length)}
g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.U(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.S(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function kd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function bd(a,b){b&&!a.f&&(hd(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(ld(this,b),jd(this,c,a))},a));a.f=b};var nd=!Ob||9<=Number(Zb);function od(){this.a="";this.b=pd}od.prototype.ma=!0;od.prototype.la=function(){return this.a};od.prototype.toString=function(){return"Const{"+this.a+"}"};function qd(a){if(a instanceof od&&a.constructor===od&&a.b===pd)return a.a;ra("expected object of type Const, got '"+a+"'");return"type_error:Const"}var pd={};function rd(a){var b=new od;b.a=a;return b}rd("");function sd(){this.a="";this.b=td}sd.prototype.ma=!0;sd.prototype.la=function(){return this.a};sd.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function ud(a){if(a instanceof sd&&a.constructor===sd&&a.b===td)return a.a;ra("expected object of type TrustedResourceUrl, got '"+a+"' of type "+da(a));return"type_error:TrustedResourceUrl"}
function vd(a,b){var c=qd(a);if(!wd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(xd,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof od?qd(a):encodeURIComponent(String(a))});return yd(a)}var xd=/%{(\w+)}/g,wd=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,td={};
function yd(a){var b=new sd;b.a=a;return b};function zd(){this.a="";this.b=Ad}zd.prototype.ma=!0;zd.prototype.la=function(){return this.a};zd.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Bd(a){if(a instanceof zd&&a.constructor===zd&&a.b===Ad)return a.a;ra("expected object of type SafeUrl, got '"+a+"' of type "+da(a));return"type_error:SafeUrl"}var Cd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Dd(a){if(a instanceof zd)return a;a=a.ma?a.la():String(a);Cd.test(a)||(a="about:invalid#zClosurez");return Ed(a)}var Ad={};function Ed(a){var b=new zd;b.a=a;return b}Ed("about:blank");function Fd(){this.a="";this.b=Gd}Fd.prototype.ma=!0;Fd.prototype.la=function(){return this.a};Fd.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Hd(a){if(a instanceof Fd&&a.constructor===Fd&&a.b===Gd)return a.a;ra("expected object of type SafeHtml, got '"+a+"' of type "+da(a));return"type_error:SafeHtml"}var Gd={};function Id(a){var b=new Fd;b.a=a;return b}Id("<!DOCTYPE html>");Id("");Id("<br>");function Jd(a){var b=document;return l(a)?b.getElementById(a):a}function Kd(a,b){Ya(b,function(b,d){b&&b.ma&&(b=b.la());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ld.hasOwnProperty(d)?a.setAttribute(Ld[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ld={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Md(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!nd&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Ma(h.name),'"');if(h.type){f.push(' type="',Ma(h.type),'"');var m={};bb(m,h);delete m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(l(h)?f.className=h:fa(h)?f.className=h.join(" "):Kd(f,h));2<d.length&&Nd(e,f,d);return f}
function Nd(a,b,c){function d(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||q(f)&&0<f.nodeType?d(f):v(Od(f)?Ja(f):f,d)}}function Od(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(n(a))return"function"==typeof a.item}return!1};function Pd(a){var b=[];Qd(new Rd,a,b);return b.join("")}function Rd(){}
function Qd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Sd(d,c),c.push(":"),Qd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Sd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Td={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ud=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Sd(a,b){b.push('"',a.replace(Ud,function(a){var b=Td[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Td[a]=b);return b}),'"')};function Vd(){var a=G();return Ob&&!!Zb&&11==Zb||/Edge\/\d+/.test(a)}function Wd(){return k.window&&k.window.location.href||self&&self.location&&self.location.href||""}function Xd(a,b){b=b||k.window;var c="about:blank";a&&(c=Bd(Dd(a)));b.location.href=c}function Yd(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Yd(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function Zd(){var a=G();a=$d(a)!=ae?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Ob||!Zb||9<Zb}function be(a){a=(a||G()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ce(a){a=a||k.window;try{a.close()}catch(b){}}
function de(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=G().toLowerCase();d&&(b.target=d,w(c,"crios/")&&(b.target="_blank"));$d(G())==ee&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof zd?c:Dd("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(h in a)switch(h){case "width":case "height":case "top":case "left":e.push(h+"="+a[h]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(h+"="+(a[h]?1:0))}var h=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(h=d.document.createElement("A"),b instanceof zd||b instanceof zd||(b=b.ma?b.la():String(b),Cd.test(b)||(b="about:invalid#zClosurez"),b=Ed(b)),h.href=Bd(b),h.setAttribute("target",c),a.noreferrer&&
h.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(a),h={}):a.noreferrer?(h=d.open("",c,h),a=Bd(b),h&&(Qb&&w(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),h.opener=null,rd("b/12014412, meta tag with sanitized URL"),a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ma(a)+'">',a=Id(a),h.document.write(Hd(a)),h.document.close())):(h=d.open(Bd(b),c,h))&&a.noopener&&(h.opener=null);if(h)try{h.focus()}catch(m){}return h}
function fe(a){return new y(function(b){function c(){Hc(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var ge=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;function he(){var a=null;return(new y(function(b){"complete"==k.document.readyState?b():(a=function(){b()},sc(window,"load",a))})).s(function(b){D(window,"load",a);throw b;})}
function ie(){return je(void 0)?he().then(function(){return new y(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):B(Error("Cordova must run in an Android or iOS file scheme."))}function je(a){a=a||G();return!("file:"!==ke()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function le(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function me(){return"object"!==typeof k.window&&"function"===typeof k.importScripts}function ne(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":me()?"Worker":"Browser"}function oe(){var a=ne();return"ReactNative"===a||"Node"===a}function pe(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}var ee="Firefox",ae="Chrome";
function $d(a){var b=a.toLowerCase();if(w(b,"opera/")||w(b,"opr/")||w(b,"opios/"))return"Opera";if(w(b,"iemobile"))return"IEMobile";if(w(b,"msie")||w(b,"trident/"))return"IE";if(w(b,"edge/"))return"Edge";if(w(b,"firefox/"))return ee;if(w(b,"silk/"))return"Silk";if(w(b,"blackberry"))return"Blackberry";if(w(b,"webos"))return"Webos";if(!w(b,"safari/")||w(b,"chrome/")||w(b,"crios/")||w(b,"android"))if(!w(b,"chrome/")&&!w(b,"crios/")||w(b,"edge/")){if(w(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return ae;else return"Safari";return"Other"}var qe={Sc:"FirebaseCore-web",Uc:"FirebaseUI-web"};function re(a,b){b=b||[];var c=[],d={},e;for(e in qe)d[qe[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=ne();"Browser"===c?(d=G(),c=$d(d)):"Worker"===c&&(d=G(),c=$d(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function G(){return k.navigator&&k.navigator.userAgent||""}
function H(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function se(){try{var a=k.localStorage,b=te();if(a)return a.setItem(b,"1"),a.removeItem(b),Vd()?!!k.indexedDB:!0}catch(c){return me()&&!!k.indexedDB}return!1}function ue(){return(ve()||"chrome-extension:"===ke()||je())&&!oe()&&se()&&!me()}function ve(){return"http:"===ke()||"https:"===ke()}function ke(){return k.location&&k.location.protocol||null}
function we(a){a=a||G();return be(a)||$d(a)==ee?!1:!0}function xe(a){return"undefined"===typeof a?null:Pd(a)}function ye(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function ze(a){if(null!==a)return JSON.parse(a)}function te(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ae(a){a=a||G();return"Safari"==$d(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Be(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ce(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=G();b=ne();this.b=be(a)||"ReactNative"===b}
Ce.prototype.get=function(){var a=k.navigator;return(a&&"boolean"===typeof a.onLine&&(ve()||"chrome-extension:"===ke()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function De(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function Ee(){var a=k.document,b=null;return De()||!a?A():(new y(function(c){b=function(){De()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Fe(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Ge(){return!(!H("fireauth.oauthhelper",k)&&!H("fireauth.iframe",k))};var He={};function Ie(a){He[a]||(He[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Je;try{var Ke={};Object.defineProperty(Ke,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ke,"abcd",{configurable:!0,enumerable:!0,value:2});Je=2==Ke.abcd}catch(a){Je=!1}function I(a,b,c){Je?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function J(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&I(a,c,b[c])}function Le(a){var b={};J(b,a);return b}function Me(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function Ne(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Oe(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)I(b,c,Oe(a[c]))}return b};function Pe(a){var b={},c=a[Qe],d=a[Re];a=a[Se];if(!a||a!=Te&&!c)throw Error("Invalid provider user info!");b[Ue]=d||null;b[Ve]=c||null;I(this,We,a);I(this,Xe,Oe(b))}var Te="EMAIL_SIGNIN",Qe="email",Re="newEmail",Se="requestType",Ve="email",Ue="fromEmail",Xe="data",We="operation";function K(a,b){this.code=Ye+a;this.message=b||Ze[a]||""}t(K,Error);K.prototype.D=function(){return{code:this.code,message:this.message}};K.prototype.toJSON=function(){return this.D()};function $e(a){var b=a&&a.code;return b?new K(b.substring(Ye.length),a.message):null}
var Ye="auth/",Ze={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
"invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.",
"invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
"invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
"operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",
"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function af(a){var b=a[bf];if("undefined"===typeof b)throw new K("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new K("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[cf];if(c&&"object"===typeof c){b=c[df];var d=c[ef];c=c[ff];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new K("argument-error",ef+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new K("argument-error",ff+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new K("argument-error",df+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new K("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new K("argument-error",cf+" property must be a non null object when specified.");this.f=null;if((b=a[gf])&&"object"===
typeof b)if(b=b[hf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new K("argument-error",hf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new K("argument-error",gf+" property must be a non null object when specified.");a=a[jf];if("undefined"!==typeof a&&"boolean"!==typeof a)throw new K("argument-error",jf+" property must be a boolean when specified.");this.c=!!a}
var cf="android",jf="handleCodeInApp",gf="iOS",bf="url",ef="installApp",ff="minimumVersion",df="packageName",hf="bundleId";function kf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;for(var c in b)null===b[c]&&delete b[c];return b};function lf(a){return Ba(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var mf=null,nf=null;function of(a){var b="";pf(a,function(a){b+=String.fromCharCode(a)});return b}function pf(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=nf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}qf();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
function qf(){if(!mf){mf={};nf={};for(var a=0;65>a;a++)mf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),nf[mf[a]]=a,62<=a&&(nf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function rf(a){this.c=a.sub;na();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}rf.prototype.f=function(){return this.b};function sf(a){return(a=tf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new rf(a):null}function tf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(of(a))}catch(d){}return null};var uf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),vf=["client_id","response_type","scope","redirect_uri","state"],wf={Tc:{Ma:"locale",Ba:500,Aa:600,Na:"facebook.com",eb:vf},Vc:{Ma:null,Ba:500,Aa:620,Na:"github.com",eb:vf},Wc:{Ma:"hl",Ba:515,Aa:680,Na:"google.com",eb:vf},bd:{Ma:"lang",Ba:485,Aa:705,Na:"twitter.com",eb:uf}};function xf(a){for(var b in wf)if(wf[b].Na==a)return wf[b];return null};function yf(a){var b={};b["facebook.com"]=zf;b["google.com"]=Af;b["github.com"]=Bf;b["twitter.com"]=Cf;var c=a&&a[Df];try{if(c)return b[c]?new b[c](a):new Ef(a);if("undefined"!==typeof a[Ff])return new Gf(a)}catch(d){}return null}var Ff="idToken",Df="providerId";
function Gf(a){var b=a[Df];if(!b&&a[Ff]){var c=sf(a[Ff]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);I(this,"providerId",b);I(this,"isNewUser",c)}function Ef(a){Gf.call(this,a);a=ze(a.rawUserInfo||"{}");I(this,"profile",Oe(a||{}))}t(Ef,Gf);
function zf(a){Ef.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(zf,Ef);function Bf(a){Ef.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");I(this,"username",this.profile&&this.profile.login||null)}t(Bf,Ef);function Af(a){Ef.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(Af,Ef);
function Cf(a){Ef.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");I(this,"username",a.screenName||null)}t(Cf,Ef);function Hf(a){this.a=ed(a)};function If(a){var b=ed(a),c=dd(b,"link"),d=dd(ed(c),"link");b=dd(b,"deep_link_id");return dd(ed(b),"link")||b||d||c||a};function Jf(a,b){return a.then(function(a){if(a[L]){var c=sf(a[L]);if(!c||b!=c.c)throw new K("user-mismatch");return a}throw new K("user-mismatch");}).s(function(a){throw a&&a.code&&a.code==Ye+"user-not-found"?new K("user-mismatch"):a;})}
function Kf(a,b,c){if(b.idToken||b.accessToken)b.idToken&&I(this,"idToken",b.idToken),b.accessToken&&I(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)I(this,"accessToken",b.oauthToken),I(this,"secret",b.oauthTokenSecret);else throw new K("internal-error","failed to construct a credential");I(this,"providerId",a);I(this,"signInMethod",c)}Kf.prototype.ya=function(a){return Lf(a,Mf(this))};Kf.prototype.c=function(a,b){var c=Mf(this);c.idToken=b;return Nf(a,c)};
Kf.prototype.f=function(a,b){var c=Mf(this);return Jf(Of(a,c),b)};function Mf(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:id(b).toString(),requestUri:"http://localhost"}}
Kf.prototype.D=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};function Pf(a,b){this.Ac=b||[];J(this,{providerId:a,isOAuthProvider:!0});this.vb={};this.$a=(xf(a)||{}).Ma||null;this.Ya=null}Pf.prototype.Da=function(a){this.vb=$a(a);return this};function M(a){Pf.call(this,a,vf);this.a=[]}t(M,Pf);
M.prototype.ta=function(a){Fa(this.a,a)||this.a.push(a);return this};M.prototype.Ab=function(){return Ja(this.a)};M.prototype.credential=function(a,b){if(!a&&!b)throw new K("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kf(this.providerId,{idToken:a||null,accessToken:b||null},this.providerId)};function Qf(){M.call(this,"facebook.com")}t(Qf,M);I(Qf,"PROVIDER_ID","facebook.com");I(Qf,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Rf(a){if(!a)throw new K("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Qf).credential(null,b)}function Sf(){M.call(this,"github.com")}t(Sf,M);I(Sf,"PROVIDER_ID","github.com");I(Sf,"GITHUB_SIGN_IN_METHOD","github.com");function Tf(a){if(!a)throw new K("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Sf).credential(null,b)}
function Uf(){M.call(this,"google.com");this.ta("profile")}t(Uf,M);I(Uf,"PROVIDER_ID","google.com");I(Uf,"GOOGLE_SIGN_IN_METHOD","google.com");function Vf(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new Uf).credential(c,b)}function Wf(){Pf.call(this,"twitter.com",uf)}t(Wf,Pf);I(Wf,"PROVIDER_ID","twitter.com");I(Wf,"TWITTER_SIGN_IN_METHOD","twitter.com");
function Xf(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new K("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kf("twitter.com",c,"twitter.com")}function Yf(a,b,c){this.a=a;this.b=b;I(this,"providerId","password");I(this,"signInMethod",c===N.EMAIL_LINK_SIGN_IN_METHOD?N.EMAIL_LINK_SIGN_IN_METHOD:N.EMAIL_PASSWORD_SIGN_IN_METHOD)}
Yf.prototype.ya=function(a){return this.signInMethod==N.EMAIL_LINK_SIGN_IN_METHOD?O(a,Zf,{email:this.a,oobCode:this.b}):O(a,$f,{email:this.a,password:this.b})};Yf.prototype.c=function(a,b){return this.signInMethod==N.EMAIL_LINK_SIGN_IN_METHOD?O(a,ag,{idToken:b,email:this.a,oobCode:this.b}):O(a,bg,{idToken:b,email:this.a,password:this.b})};Yf.prototype.f=function(a,b){return Jf(this.ya(a),b)};Yf.prototype.D=function(){return{email:this.a,password:this.b,signInMethod:this.signInMethod}};
function N(){J(this,{providerId:"password",isOAuthProvider:!1})}function cg(a,b){b=dg(b);if(!b)throw new K("argument-error","Invalid email link!");return new Yf(a,b,N.EMAIL_LINK_SIGN_IN_METHOD)}function dg(a){a=If(a);a=new Hf(a);var b=dd(a.a,"oobCode")||null;return"signIn"===(dd(a.a,"mode")||null)&&b?b:null}J(N,{PROVIDER_ID:"password"});J(N,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});J(N,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
function eg(a){if(!(a.Sa&&a.Ra||a.Fa&&a.$))throw new K("internal-error");this.a=a;I(this,"providerId","phone");I(this,"signInMethod","phone")}eg.prototype.ya=function(a){return a.Ta(fg(this))};eg.prototype.c=function(a,b){var c=fg(this);c.idToken=b;return O(a,gg,c)};eg.prototype.f=function(a,b){var c=fg(this);c.operation="REAUTH";a=O(a,hg,c);return Jf(a,b)};
eg.prototype.D=function(){var a={providerId:"phone"};this.a.Sa&&(a.verificationId=this.a.Sa);this.a.Ra&&(a.verificationCode=this.a.Ra);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.$&&(a.phoneNumber=this.a.$);return a};function fg(a){return a.a.Fa&&a.a.$?{temporaryProof:a.a.Fa,phoneNumber:a.a.$}:{sessionInfo:a.a.Sa,code:a.a.Ra}}
function ig(a){try{this.a=a||firebase.auth()}catch(b){throw new K("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}J(this,{providerId:"phone",isOAuthProvider:!1})}
ig.prototype.Ta=function(a,b){var c=this.a.b;return A(b.verify()).then(function(d){if(!l(d))throw new K("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return jg(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new K("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function kg(a,b){if(!a)throw new K("missing-verification-id");if(!b)throw new K("missing-verification-code");return new eg({Sa:a,Ra:b})}J(ig,{PROVIDER_ID:"phone"});J(ig,{PHONE_SIGN_IN_METHOD:"phone"});
function lg(a){if(a.temporaryProof&&a.phoneNumber)return new eg({Fa:a.temporaryProof,$:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Vf(a,c);case "facebook.com":return Rf(c);case "github.com":return Tf(c);case "twitter.com":return Xf(c,d);default:return(new M(b)).credential(a,c)}}catch(e){return null}}
function mg(a){if(!a.isOAuthProvider)throw new K("invalid-oauth-provider");};function ng(a,b,c,d,e){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new K("invalid-auth-event");if(this.f&&!this.g)throw new K("invalid-auth-event");}else throw new K("invalid-auth-event");}ng.prototype.D=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,error:this.a&&this.a.D()}};function og(a){a=a||{};return a.type?new ng(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&$e(a.error)):null};function pg(){this.b=null;this.a=[]}var qg=null;pg.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(a){for(var c=0;c<b.a.length;c++)b.a[c](a)},a=H("universalLinks.subscribe",k),"function"===typeof a&&a(null,this.b))};pg.prototype.unsubscribe=function(a){Ha(this.a,function(b){return b==a})};function rg(a){var b="unauthorized-domain",c=void 0,d=ed(a);a=d.b;d=d.c;"chrome-extension"==d?c=Ka("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Ka("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
K.call(this,b,c)}t(rg,K);function sg(a,b,c){K.call(this,a,c);a=b||{};a.wb&&I(this,"email",a.wb);a.$&&I(this,"phoneNumber",a.$);a.credential&&I(this,"credential",a.credential)}t(sg,K);sg.prototype.D=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.D();b&&bb(a,b);return a};sg.prototype.toJSON=function(){return this.D()};
function tg(a){if(a.code){var b=a.code||"";0==b.indexOf(Ye)&&(b=b.substring(Ye.length));var c={credential:lg(a)};if(a.email)c.wb=a.email;else if(a.phoneNumber)c.$=a.phoneNumber;else return new K(b,a.message||void 0);return new sg(b,c,a.message)}return null};var ug=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function vg(){}vg.prototype.c=null;function wg(a){return a.c||(a.c=a.b())};var xg;function yg(){}t(yg,vg);yg.prototype.a=function(){var a=zg(this);return a?new ActiveXObject(a):new XMLHttpRequest};yg.prototype.b=function(){var a={};zg(this)&&(a[0]=!0,a[1]=!0);return a};
function zg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}xg=new yg;function Ag(){}t(Ag,vg);Ag.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Bg;throw Error("Unsupported browser");};Ag.prototype.b=function(){return{}};
function Bg(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText="";this.a.onload=r(this.bc,this);this.a.onerror=r(this.Bb,this);this.a.onprogress=r(this.cc,this);this.a.ontimeout=r(this.fc,this)}g=Bg.prototype;g.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
g.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};g.abort=function(){this.a.abort()};g.setRequestHeader=function(){};g.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};g.bc=function(){this.status=200;this.responseText=this.a.responseText;Cg(this,4)};g.Bb=function(){this.status=500;this.responseText="";Cg(this,4)};g.fc=function(){this.Bb()};
g.cc=function(){this.status=200;Cg(this,1)};function Cg(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}g.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Dg(a,b,c){this.reset(a,b,c,void 0,void 0)}Dg.prototype.a=null;var Eg=0;Dg.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Eg++;d||na();delete this.a};function Fg(a){this.f=a;this.b=this.c=this.a=null}function Gg(a,b){this.name=a;this.value=b}Gg.prototype.toString=function(){return this.name};var Hg=new Gg("SEVERE",1E3),Ig=new Gg("WARNING",900),Jg=new Gg("CONFIG",700),Kg=new Gg("FINE",500);function Lg(a){if(a.c)return a.c;if(a.a)return Lg(a.a);ra("Root logger has no level set.");return null}Fg.prototype.log=function(a,b,c){if(a.value>=Lg(this).value)for(n(b)&&(b=b()),a=new Dg(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Mg={},Ng=null;
function Og(a){Ng||(Ng=new Fg(""),Mg[""]=Ng,Ng.c=Jg);var b;if(!(b=Mg[a])){b=new Fg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Og(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Mg[a]=b}return b};function P(a,b){a&&a.log(Kg,b,void 0)};function Pg(a){this.f=a}t(Pg,vg);Pg.prototype.a=function(){return new Qg(this.f)};Pg.prototype.b=function(a){return function(){return a}}({});function Qg(a){E.call(this);this.i=a;this.readyState=Rg;this.status=0;this.responseText=this.statusText="";this.onreadystatechange=null;this.g=new Headers;this.b=null;this.h="GET";this.c="";this.a=!1;this.f=Og("goog.net.FetchXmlHttp")}t(Qg,E);var Rg=0;g=Qg.prototype;
g.open=function(a,b){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.h=a;this.c=b;this.readyState=1;Sg(this)};g.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.g,method:this.h,credentials:void 0,cache:void 0};a&&(b.body=a);this.i.fetch(new Request(this.c,b)).then(this.ec.bind(this),this.Cb.bind(this))};
g.abort=function(){this.responseText="";this.g=new Headers;this.status=0;1<=this.readyState&&this.a&&4!=this.readyState&&(this.readyState=4,this.a=!1,Sg(this));this.readyState=Rg};g.ec=function(a){this.a&&(this.b||(this.b=a.headers,this.readyState=2,Sg(this)),this.a&&(this.readyState=3,Sg(this),this.a&&a.text().then(this.dc.bind(this,a),this.Cb.bind(this))))};g.dc=function(a,b){this.a&&(this.status=a.status,this.statusText=a.statusText,this.responseText=b,this.readyState=4,Sg(this))};
g.Cb=function(a){var b=this.f;b&&b.log(Ig,"Failed to fetch url "+this.c,a instanceof Error?a:Error(a));this.a&&(this.readyState=4,Sg(this))};g.setRequestHeader=function(a,b){this.g.append(a,b)};g.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.f)&&a.log(Ig,"Attempting to get response header but no headers have been received for url: "+this.c,void 0),"")};
g.getAllResponseHeaders=function(){if(!this.b){var a=this.f;a&&a.log(Ig,"Attempting to get all response headers but no headers have been received for url: "+this.c,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Sg(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Tg(a){E.call(this);this.headers=new Lc;this.C=a||null;this.c=!1;this.w=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.u=null;this.o=Ug;this.v=this.O=!1}t(Tg,E);var Ug="";Tg.prototype.b=Og("goog.net.XhrIo");var Vg=/^https?$/i,Wg=["POST","PUT"];
function Xg(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.C?a.C.a():xg.a();a.w=a.C?wg(a.C):wg(xg);a.a.onreadystatechange=r(a.Fb,a);try{P(a.b,Yg(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(h){P(a.b,Yg(a,"Error opening Xhr: "+h.message));Zg(a,h);return}b=d||"";var f=new Lc(a.headers);e&&Kc(e,function(a,b){f.set(b,a)});e=Da(f.U());d=k.FormData&&b instanceof
k.FormData;!Fa(Wg,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.o&&(a.a.responseType=a.o);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{$g(a),0<a.g&&(a.v=ah(a.a),P(a.b,Yg(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=r(a.Ga,a)):a.u=Gc(a.Ga,a.g,a)),P(a.b,Yg(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(h){P(a.b,Yg(a,
"Send error: "+h.message)),Zg(a,h)}}function ah(a){return Ob&&Yb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ea(a){return"content-type"==a.toLowerCase()}g=Tg.prototype;g.Ga=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",P(this.b,Yg(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Zg(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;bh(a);ch(a)}
function bh(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}g.abort=function(){this.a&&this.c&&(P(this.b,Yg(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ch(this))};g.ua=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ch(this,!0));Tg.lb.ua.call(this)};g.Fb=function(){this.pa||(this.I||this.i||this.f?dh(this):this.tc())};g.tc=function(){dh(this)};
function dh(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==eh(a)&&2==fh(a))P(a.b,Yg(a,"Local request error detected and ignored"));else if(a.i&&4==eh(a))Gc(a.Fb,0,a);else if(a.dispatchEvent("readystatechange"),4==eh(a)){P(a.b,Yg(a,"Request complete"));a.c=!1;try{var b=fh(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Oc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
f=h.substr(0,h.length-1)}e=!Vg.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var m=2<eh(a)?a.a.statusText:""}catch(p){P(a.b,"Can not get status: "+p.message),m=""}a.h=m+" ["+fh(a)+"]";bh(a)}}finally{ch(a)}}}function ch(a,b){if(a.a){$g(a);var c=a.a,d=a.w[0]?ca:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Hg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function $g(a){a.a&&a.v&&(a.a.ontimeout=null);a.u&&(k.clearTimeout(a.u),a.u=null)}function eh(a){return a.a?a.a.readyState:0}function fh(a){try{return 2<eh(a)?a.a.status:-1}catch(b){return-1}}function gh(a){try{return a.a?a.a.responseText:""}catch(b){return P(a.b,"Can not get responseText: "+b.message),""}}
g.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.o){case Ug:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Hg,"Response type "+this.o+" is not supported on this browser",void 0);return null}catch(b){return P(this.b,"Can not get response: "+b.message),null}};function Yg(a,b){return b+" ["+a.N+" "+a.l+" "+fh(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function hh(a,b){this.g=[];this.v=a;this.u=b||null;this.f=this.a=!1;this.c=void 0;this.l=this.w=this.i=!1;this.h=0;this.b=null;this.m=0}hh.prototype.cancel=function(a){if(this.a)this.c instanceof hh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.m--,0>=b.m&&b.cancel())}this.v?this.v.call(this.u,this):this.l=!0;this.a||(a=new ih(this),jh(this),kh(this,!1,a))}};hh.prototype.o=function(a,b){this.i=!1;kh(this,a,b)};function kh(a,b,c){a.a=!0;a.c=c;a.f=!b;lh(a)}
function jh(a){if(a.a){if(!a.l)throw new mh(a);a.l=!1}}hh.prototype.C=function(){jh(this);kh(this,!0,null)};function nh(a,b){oh(a,null,b,void 0)}function oh(a,b,c,d){a.g.push([b,c,d]);a.a&&lh(a)}hh.prototype.then=function(a,b,c){var d,e,f=new y(function(a,b){d=a;e=b});oh(this,d,function(a){a instanceof ih?f.cancel():e(a)});return f.then(a,b,c)};oa(hh);function ph(a){return Ca(a.g,function(a){return n(a[1])})}
function lh(a){if(a.h&&a.a&&ph(a)){var b=a.h,c=qh[b];c&&(k.clearTimeout(c.a),delete qh[b]);a.h=0}a.b&&(a.b.m--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var m=f.call(e||a.u,b);void 0!==m&&(a.f=a.f&&(m==b||m instanceof Error),a.c=b=m);if(pa(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(p){b=p,a.f=!0,ph(a)||(c=!0)}}a.c=b;d&&(m=r(a.o,a,!0),d=r(a.o,a,!1),b instanceof hh?(oh(b,m,d),b.w=!0):b.then(m,d));c&&(b=
new rh(b),qh[b.a]=b,a.h=b.a)}function mh(){u.call(this)}t(mh,u);mh.prototype.message="Deferred has already fired";mh.prototype.name="AlreadyCalledError";function ih(){u.call(this)}t(ih,u);ih.prototype.message="Deferred was canceled";ih.prototype.name="CanceledError";function rh(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}rh.prototype.c=function(){delete qh[this.a];throw this.b;};var qh={};function sh(a){var b={},c=b.document||document,d=ud(a),e=document.createElement("SCRIPT"),f={Hb:e,Ga:void 0},h=new hh(th,f),m=null,p=null!=b.timeout?b.timeout:5E3;0<p&&(m=window.setTimeout(function(){uh(e,!0);var a=new vh(wh,"Timeout reached for loading script "+d);jh(h);kh(h,!1,a)},p),f.Ga=m);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(uh(e,b.dd||!1,m),h.C())};e.onerror=function(){uh(e,!0,m);var a=new vh(xh,"Error while loading script "+
d);jh(h);kh(h,!1,a)};f=b.attributes||{};bb(f,{type:"text/javascript",charset:"UTF-8"});Kd(e,f);e.src=ud(a);yh(c).appendChild(e);return h}function yh(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function th(){if(this&&this.Hb){var a=this.Hb;a&&"SCRIPT"==a.tagName&&uh(a,!0,this.Ga)}}
function uh(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var xh=0,wh=1;function vh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(vh,u);function zh(a){this.f=a}t(zh,vg);zh.prototype.a=function(){return new this.f};zh.prototype.b=function(){return{}};
function Ah(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Bh;this.f=$a(a.secureTokenHeaders||Ch);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Dh;this.a=$a(a.firebaseHeaders||Eh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==ne();c=k.XMLHttpRequest||c&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!c&&
!me())throw new K("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;me()?this.c=new Pg(self):oe()?this.c=new zh(c):this.c=new Ag}var Fh,L="idToken",Bh=new Ce(3E4,6E4),Ch={"Content-Type":"application/x-www-form-urlencoded"},Dh=new Ce(3E4,6E4),Eh={"Content-Type":"application/json"};function Gh(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Hh(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function Ih(a,b,c,d,e,f,h){Zd()||me()?a=r(a.o,a):(Fh||(Fh=new y(function(a,b){Jh(a,b)})),a=r(a.l,a));a(b,c,d,e,f,h)}
Ah.prototype.o=function(a,b,c,d,e,f){if(me()&&("undefined"===typeof k.fetch||"undefined"===typeof k.Headers||"undefined"===typeof k.Request))throw new K("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var h=new Tg(this.c);if(f){h.g=Math.max(0,f);var m=setTimeout(function(){h.dispatchEvent("timeout")},f)}uc(h,"complete",function(){m&&clearTimeout(m);var a=null;try{a=
JSON.parse(gh(this))||null}catch(z){a=null}b&&b(a)});Ac(h,"ready",function(){m&&clearTimeout(m);Jb(this)});Ac(h,"timeout",function(){m&&clearTimeout(m);Jb(this);b&&b(null)});Xg(h,a,c,d,e)};var Kh=rd("https://apis.google.com/js/client.js?onload=%{onload}"),Lh="__fcb"+Math.floor(1E6*Math.random()).toString();
function Jh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Lh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=vd(Kh,{onload:Lh});nh(sh(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ah.prototype.l=function(a,b,c,d,e){var f=this;Fh.then(function(){window.gapi.client.setApiKey(f.b);var h=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(h);b&&b(a)}})}).s(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
function Mh(a,b){return new y(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Ih(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d(Nh(a)):a.access_token&&a.refresh_token?c(a):d(new K("internal-error")):d(new K("network-request-failed"))},"POST",id(b).toString(),a.f,a.m.get()):d(new K("internal-error"))})}
function Oh(a,b,c,d,e,f){var h=ed(a.g+b);F(h,"key",a.b);f&&F(h,"cb",na().toString());var m="GET"==c;if(m)for(var p in d)d.hasOwnProperty(p)&&F(h,p,d[p]);return new y(function(b,f){Ih(a,h.toString(),function(a){a?a.error?f(Nh(a,e||{})):b(a):f(new K("network-request-failed"))},c,m?void 0:Pd(ye(d)),a.a,a.h.get())})}function Ph(a){if(!ug.test(a.email))throw new K("invalid-email");}function Qh(a){"email"in a&&Ph(a)}
function Rh(a,b){return O(a,Sh,{identifier:b,continueUri:ve()?Wd():"http://localhost"}).then(function(a){return a.allProviders||[]})}function Th(a,b){return O(a,Sh,{identifier:b,continueUri:ve()?Wd():"http://localhost"}).then(function(a){return a.signinMethods||[]})}function Uh(a){return O(a,Vh,{}).then(function(a){return a.authorizedDomains||[]})}function Wh(a){if(!a[L])throw new K("internal-error");}
function Xh(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new K("internal-error");}else{if(!a.sessionInfo)throw new K("missing-verification-id");if(!a.code)throw new K("missing-verification-code");}}Ah.prototype.Pa=function(){return O(this,Yh,{})};Ah.prototype.mb=function(a,b){return O(this,Zh,{idToken:a,email:b})};Ah.prototype.nb=function(a,b){return O(this,bg,{idToken:a,password:b})};var $h={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};g=Ah.prototype;
g.ob=function(a,b){var c={idToken:a},d=[];Ya($h,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return O(this,Zh,c)};g.hb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};bb(a,b);return O(this,ai,a)};g.ib=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};bb(a,b);return O(this,bi,a)};g.gb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};bb(a,b);return O(this,ci,a)};function jg(a,b){return O(a,di,b)}g.Ta=function(a){return O(this,ei,a)};
function fi(a,b,c){return O(a,gi,{idToken:b,deleteProvider:c})}function hi(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new K("internal-error");}
function ii(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=tg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=tg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=tg(a)):a.errorMessage&&(b=ji(a.errorMessage));if(b)throw b;if(!a[L])throw new K("internal-error");}function Lf(a,b){b.returnIdpCredential=!0;return O(a,ki,b)}function Nf(a,b){b.returnIdpCredential=!0;return O(a,li,b)}
function Of(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,mi,b)}function ni(a){if(!a.oobCode)throw new K("invalid-action-code");}g.Xa=function(a,b){return O(this,oi,{oobCode:a,newPassword:b})};g.Ja=function(a){return O(this,pi,{oobCode:a})};g.Va=function(a){return O(this,qi,{oobCode:a})};
var qi={endpoint:"setAccountInfo",B:ni,da:"email"},pi={endpoint:"resetPassword",B:ni,J:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new K("internal-error");}},ri={endpoint:"signupNewUser",B:function(a){Ph(a);if(!a.password)throw new K("weak-password");},J:Wh,R:!0},Sh={endpoint:"createAuthUri"},si={endpoint:"deleteAccount",T:["idToken"]},gi={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],B:function(a){if(!fa(a.deleteProvider))throw new K("internal-error");}},Zf=
{endpoint:"emailLinkSignin",T:["email","oobCode"],B:Ph,J:Wh,R:!0},ag={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],B:Ph,J:Wh,R:!0},ti={endpoint:"getAccountInfo"},bi={endpoint:"getOobConfirmationCode",T:["requestType"],B:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new K("internal-error");Ph(a)},da:"email"},ci={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],B:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new K("internal-error");},da:"email"},ai={endpoint:"getOobConfirmationCode",
T:["requestType"],B:function(a){if("PASSWORD_RESET"!=a.requestType)throw new K("internal-error");Ph(a)},da:"email"},Vh={rb:!0,endpoint:"getProjectConfig",Eb:"GET"},ui={rb:!0,endpoint:"getRecaptchaParam",Eb:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new K("internal-error");}},oi={endpoint:"resetPassword",B:ni,da:"email"},di={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},Zh={endpoint:"setAccountInfo",T:["idToken"],B:Qh,R:!0},bg={endpoint:"setAccountInfo",
T:["idToken"],B:function(a){Qh(a);if(!a.password)throw new K("weak-password");},J:Wh,R:!0},Yh={endpoint:"signupNewUser",J:Wh,R:!0},ki={endpoint:"verifyAssertion",B:hi,J:ii,R:!0},mi={endpoint:"verifyAssertion",B:hi,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new K("user-not-found");if(a.errorMessage)throw ji(a.errorMessage);if(!a[L])throw new K("internal-error");},R:!0},li={endpoint:"verifyAssertion",B:function(a){hi(a);if(!a.idToken)throw new K("internal-error");},J:ii,
R:!0},vi={endpoint:"verifyCustomToken",B:function(a){if(!a.token)throw new K("invalid-custom-token");},J:Wh,R:!0},$f={endpoint:"verifyPassword",B:function(a){Ph(a);if(!a.password)throw new K("wrong-password");},J:Wh,R:!0},ei={endpoint:"verifyPhoneNumber",B:Xh,J:Wh},gg={endpoint:"verifyPhoneNumber",B:function(a){if(!a.idToken)throw new K("internal-error");Xh(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",tg(a);Wh(a)}},hg={Tb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",
B:Xh,J:Wh};function O(a,b,c){if(!Ne(c,b.T))return B(new K("internal-error"));var d=b.Eb||"POST",e;return A(c).then(b.B).then(function(){b.R&&(c.returnSecureToken=!0);return Oh(a,b.endpoint,d,c,b.Tb,b.rb||!1)}).then(function(a){return e=a}).then(b.J).then(function(){if(!b.da)return e;if(!(b.da in e))throw new K("internal-error");return e[b.da]})}function ji(a){return Nh({error:{errors:[{message:a}],code:400,message:a}})}
function Nh(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new K(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};bb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new K(d[e],b);!b&&a&&(b=xe(a));return new K("internal-error",b)};var wi={Yc:{Za:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://securetoken.googleapis.com/v1/token",id:"p"},$c:{Za:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ad:{Za:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",fb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function xi(a){for(var b in wi)if(wi[b].id===a)return a=wi[b],{firebaseEndpoint:a.Za,secureTokenEndpoint:a.fb};return null}var yi;yi=xi("__EID__")?"__EID__":void 0;function zi(a){this.b=a;this.a=null;this.bb=Ai(this)}
function Ai(a){return Bi().then(function(){return new y(function(b,c){H("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Ci.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Di(a,b){return a.bb.then(function(){return new y(function(c){a.a.send(b.type,b,c,H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Ei(a,b){a.bb.then(function(){a.a.register("authEvent",b,H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Fi=rd("https://apis.google.com/js/api.js?onload=%{onload}"),Gi=new Ce(3E4,6E4),Ci=new Ce(5E3,15E3),Hi=null;
function Bi(){return Hi?Hi:Hi=(new y(function(a,b){function c(){Be();H("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Be();b(Error("Network Error"))},timeout:Gi.get()})}if(H("gapi.iframes.Iframe"))a();else if(H("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){H("gapi.load")?c():b(Error("Network Error"))};d=vd(Fi,{onload:d});A(sh(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){Hi=null;throw a;})};function Ii(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=fd(this.i,"/__/auth/iframe");F(this.a,"apiKey",this.g);F(this.a,"appName",this.h);this.b=null;this.c=[]}Ii.prototype.toString=function(){this.f?F(this.a,"v",this.f):ld(this.a.a,"v");this.b?F(this.a,"eid",this.b):ld(this.a.a,"eid");this.c.length?F(this.a,"fw",this.c.join(",")):ld(this.a.a,"fw");return this.a.toString()};function Ji(a,b,c,d,e){this.o=a;this.l=b;this.c=c;this.m=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
Ji.prototype.toString=function(){var a=fd(this.o,"/__/auth/handler");F(a,"apiKey",this.l);F(a,"appName",this.c);F(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase.app(this.c).auth().ea()}catch(m){c=null}b.Ya=c;F(a,"providerId",this.a.providerId);b=this.a;c=ye(b.vb);for(var d in c)c[d]=c[d].toString();d=b.Ac;c=$a(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.$a&&b.Ya&&!c[b.$a]&&(c[b.$a]=b.Ya);Za(c)||F(a,"customParameters",xe(c))}"function"===typeof this.a.Ab&&
(b=this.a.Ab(),b.length&&F(a,"scopes",b.join(",")));this.i?F(a,"redirectUrl",this.i):ld(a.a,"redirectUrl");this.g?F(a,"eventId",this.g):ld(a.a,"eventId");this.h?F(a,"v",this.h):ld(a.a,"v");if(this.b)for(var h in this.b)this.b.hasOwnProperty(h)&&!dd(a,h)&&F(a,h,this.b[h]);this.f?F(a,"eid",this.f):ld(a.a,"eid");h=Ki(this.c);h.length&&F(a,"fw",h.join(","));return a.toString()};function Ki(a){try{return firebase.app(a).auth().xa()}catch(b){return[]}}
function Li(a,b,c,d,e){this.l=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.o=this.u=this.v=null;this.g=[];this.m=this.a=null}
function Mi(a){var b=Wd();return Uh(a).then(function(a){a:{var c=ed(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var h=a[f];var m=c;var p=e;0==h.indexOf("chrome-extension://")?m=ed(h).b==m&&"chrome-extension"==p:"http"!=p&&"https"!=p?m=!1:ge.test(h)?m=m==h:(h=h.split(".").join("\\."),m=(new RegExp("^(.+\\."+h+"|"+h+")$","i")).test(m));if(m){a=!0;break a}}a=!1}if(!a)throw new rg(Wd());})}
function Ni(a){if(a.m)return a.m;a.m=he().then(function(){if(!a.u){var b=a.c,c=a.h,d=Ki(a.b),e=new Ii(a.l,a.f,a.b);e.f=b;e.b=c;e.c=Ja(d||[]);a.u=e.toString()}a.i=new zi(a.u);Oi(a)});return a.m}g=Li.prototype;g.Ea=function(a,b,c){var d=new K("popup-closed-by-user"),e=new K("web-storage-unsupported"),f=this,h=!1;return this.ga().then(function(){Pi(f).then(function(c){c||(a&&ce(a),b(e),h=!0)})}).s(function(){}).then(function(){if(!h)return fe(a)}).then(function(){if(!h)return Hc(c).then(function(){b(d)})})};
g.Ib=function(){var a=G();return!we(a)&&!Ae(a)};g.Db=function(){return!1};
g.zb=function(a,b,c,d,e,f,h){if(!a)return B(new K("popup-blocked"));if(h&&!we())return this.ga().s(function(b){ce(a);e(b)}),d(),A();this.a||(this.a=Mi(Qi(this)));var m=this;return this.a.then(function(){var b=m.ga().s(function(b){ce(a);e(b);throw b;});d();return b}).then(function(){mg(c);if(!h){var d=Ri(m.l,m.f,m.b,b,c,null,f,m.c,void 0,m.h);Xd(d,a)}}).s(function(a){"auth/network-request-failed"==a.code&&(m.a=null);throw a;})};
function Qi(a){a.o||(a.v=a.c?re(a.c,Ki(a.b)):null,a.o=new Ah(a.f,xi(a.h),a.v));return a.o}g.Ca=function(a,b,c){this.a||(this.a=Mi(Qi(this)));var d=this;return this.a.then(function(){mg(b);var e=Ri(d.l,d.f,d.b,a,b,Wd(),c,d.c,void 0,d.h);Xd(e)}).s(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};g.ga=function(){var a=this;return Ni(this).then(function(){return a.i.bb}).s(function(){a.a=null;throw new K("network-request-failed");})};g.Mb=function(){return!0};
function Ri(a,b,c,d,e,f,h,m,p,z){a=new Ji(a,b,c,d,e);a.i=f;a.g=h;a.h=m;a.b=$a(p||null);a.f=z;return a.toString()}function Oi(a){if(!a.i)throw Error("IfcHandler must be initialized!");Ei(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=og(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return A(c)}c.status="ERROR";return A(c)})}
function Pi(a){var b={type:"webStorageSupport"};return Ni(a).then(function(){return Di(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}g.va=function(a){this.g.push(a)};g.Ka=function(a){Ha(this.g,function(b){return b==a})};function Si(a){this.a=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new K("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}g=Si.prototype;g.get=function(a){return A(this.a.getItem(a)).then(function(a){return a&&ze(a)})};g.set=function(a,b){return A(this.a.setItem(a,xe(b)))};g.P=function(a){return A(this.a.removeItem(a))};g.Y=function(){};g.ca=function(){};function Ti(){if(!Ui())throw new K("web-storage-unsupported");this.f={};this.a=[];this.b=0;this.g=k.indexedDB;this.type="indexedDB"}var Vi;function Wi(a){return new y(function(b,c){var d=a.g.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(a){c(Error(a.target.error))}})}
function Xi(a){return new y(function(b,c){var d=a.g.open("firebaseLocalStorageDb",1);d.onerror=function(a){try{a.preventDefault()}catch(f){}c(Error(a.target.error))};d.onupgradeneeded=function(a){a=a.target.result;try{a.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(d){d=d.target.result;d.objectStoreNames.contains("firebaseLocalStorage")?b(d):Wi(a).then(function(){return Xi(a)}).then(function(a){b(a)}).s(function(a){c(a)})}})}
function Yi(a){a.h||(a.h=Xi(a));return a.h}function Ui(){try{return!!k.indexedDB}catch(a){return!1}}function Zi(a){return a.objectStore("firebaseLocalStorage")}function $i(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function aj(a){return new y(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})}g=Ti.prototype;
g.set=function(a,b){var c=!1,d,e=this;return Yi(this).then(function(b){d=b;b=Zi($i(d,!0));return aj(b.get(a))}).then(function(f){var h=Zi($i(d,!0));if(f)return f.value=b,aj(h.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return aj(h.add(f))}).then(function(){e.f[a]=b}).ia(function(){c&&e.b--})};g.get=function(a){return Yi(this).then(function(b){return aj(Zi($i(b,!1)).get(a))}).then(function(a){return a&&a.value})};
g.P=function(a){var b=!1,c=this;return Yi(this).then(function(d){b=!0;c.b++;return aj(Zi($i(d,!0))["delete"](a))}).then(function(){delete c.f[a]}).ia(function(){b&&c.b--})};
g.Kc=function(){var a=this;return Yi(this).then(function(a){var b=Zi($i(a,!1));return b.getAll?aj(b.getAll()):new y(function(a,c){var d=[],e=b.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){c(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=Yd(a.f,c);a.f=c}return d})};g.Y=function(a){0==this.a.length&&bj(this);this.a.push(a)};
g.ca=function(a){Ha(this.a,function(b){return b==a});0==this.a.length&&this.c&&this.c.cancel("STOP_EVENT")};function bj(a){function b(){a.c=Hc(800).then(r(a.Kc,a)).then(function(b){0<b.length&&v(a.a,function(a){a(b)})}).then(b).s(function(a){"STOP_EVENT"!=a.message&&b()});return a.c}a.c&&a.c.cancel("STOP_EVENT");b()};function cj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=A().then(function(){return Ui()?(Vi||(Vi=new Ti),c=Vi,c.set("__sak","!").then(function(){return c.get("__sak")}).then(function(a){if("!"!==a)throw Error("indexedDB not supported!");return c.P("__sak")}).then(function(){return c}).s(function(){return b.c})):b.c}).then(function(a){b.type=a.type;a.Y(function(a){v(b.a,function(b){b(a)})});return a})}g=cj.prototype;g.get=function(a){return this.b.then(function(b){return b.get(a)})};
g.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};g.P=function(a){return this.b.then(function(b){return b.P(a)})};g.Y=function(a){this.a.push(a)};g.ca=function(a){Ha(this.a,function(b){return b==a})};function dj(){this.a={};this.type="inMemory"}g=dj.prototype;g.get=function(a){return A(this.a[a])};g.set=function(a,b){this.a[a]=b;return A()};g.P=function(a){delete this.a[a];return A()};g.Y=function(){};g.ca=function(){};function ej(){if(!fj()){if("Node"==ne())throw new K("internal-error","The LocalStorage compatibility library was not found.");throw new K("web-storage-unsupported");}this.a=gj()||firebase.INTERNAL.node.localStorage;this.type="localStorage"}function gj(){try{var a=k.localStorage,b=te();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function fj(){var a="Node"==ne();a=gj()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=ej.prototype;g.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return ze(c)})};g.set=function(a,b){var c=this;return A().then(function(){var d=xe(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};
g.Y=function(a){k.window&&rc(k.window,"storage",a)};g.ca=function(a){k.window&&D(k.window,"storage",a)};function hj(){this.type="nullStorage"}g=hj.prototype;g.get=function(){return A(null)};g.set=function(){return A()};g.P=function(){return A()};g.Y=function(){};g.ca=function(){};function ij(){if(!jj()){if("Node"==ne())throw new K("internal-error","The SessionStorage compatibility library was not found.");throw new K("web-storage-unsupported");}this.a=kj()||firebase.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function kj(){try{var a=k.sessionStorage,b=te();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function jj(){var a="Node"==ne();a=kj()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=ij.prototype;g.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return ze(c)})};g.set=function(a,b){var c=this;return A().then(function(){var d=xe(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};g.Y=function(){};
g.ca=function(){};function lj(){var a={};a.Browser=mj;a.Node=nj;a.ReactNative=oj;a.Worker=pj;this.a=a[ne()]}var qj,mj={A:ej,Qa:ij},nj={A:ej,Qa:ij},oj={A:Si,Qa:hj},pj={A:ej,Qa:hj};var rj={Xc:"local",NONE:"none",Zc:"session"};function sj(a){var b=new K("invalid-persistence-type"),c=new K("unsupported-persistence-type");a:{for(d in rj)if(rj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(ne()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!se()&&"none"!==a)throw c;}}
function tj(){var a=!Ae(G())&&le()?!0:!1,b=we(),c=se();this.o=a;this.h=b;this.m=c;this.a={};qj||(qj=new lj);a=qj;try{this.g=!Vd()&&Ge()||!k.indexedDB?new a.a.A:new cj(me()?new dj:new a.a.A)}catch(d){this.g=new dj,this.h=!0}try{this.i=new a.a.Qa}catch(d){this.i=new dj}this.l=new dj;this.f=r(this.Lb,this);this.b={}}var uj;function vj(){uj||(uj=new tj);return uj}function wj(a,b){switch(b){case "session":return a.i;case "none":return a.l;default:return a.g}}
function xj(a,b){return"firebase:"+a.name+(b?":"+b:"")}function yj(a,b,c){var d=xj(b,c),e=wj(a,b.A);return a.get(b,c).then(function(f){var h=null;try{h=ze(k.localStorage.getItem(d))}catch(m){}if(h&&!f)return k.localStorage.removeItem(d),a.set(b,h,c);h&&f&&"localStorage"!=e.type&&k.localStorage.removeItem(d)})}g=tj.prototype;g.get=function(a,b){return wj(this,a.A).get(xj(a,b))};function zj(a,b,c){c=xj(b,c);"local"==b.A&&(a.b[c]=null);return wj(a,b.A).P(c)}
g.set=function(a,b,c){var d=xj(a,c),e=this,f=wj(this,a.A);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.A&&(e.b[d]=b)})};g.addListener=function(a,b,c){a=xj(a,b);this.m&&(this.b[a]=k.localStorage.getItem(a));Za(this.a)&&(wj(this,"local").Y(this.f),this.h||(Vd()||!Ge())&&k.indexedDB||!this.m||Aj(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
g.removeListener=function(a,b,c){a=xj(a,b);this.a[a]&&(Ha(this.a[a],function(a){return a==c}),0==this.a[a].length&&delete this.a[a]);Za(this.a)&&(wj(this,"local").ca(this.f),Bj(this))};function Aj(a){Bj(a);a.c=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new ec({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Lb(c))}},1E3)}function Bj(a){a.c&&(clearInterval(a.c),a.c=null)}
g.Lb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Wa(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?wj(this,"local").ca(this.f):Bj(this);if(this.o)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.Wa(b)};Ob&&Zb&&10==Zb&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else v(a,r(this.Wa,this))};g.Wa=function(a){this.a[a]&&v(this.a[a],function(a){a()})};function Cj(a){this.a=a;this.b=vj()}var Dj={name:"authEvent",A:"local"};function Ej(a){return a.b.get(Dj,a.a).then(function(a){return og(a)})};function Fj(){this.a=vj()};function Gj(){this.b=-1};function Hj(a,b){this.b=-1;this.b=Ij;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.m=k.Int32Array?new Int32Array(64):Array(64);void 0!==Jj||(k.Int32Array?Jj=new Int32Array(Kj):Jj=Kj);this.reset()}var Jj;t(Hj,Gj);for(var Ij=64,Lj=Ij-1,Mj=[],Nj=0;Nj<Lj;Nj++)Mj[Nj]=0;var Oj=Ia(128,Mj);Hj.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):Ja(this.h)};
function Pj(a){for(var b=a.f,c=a.m,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,h=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+h|0}d=a.a[0]|0;e=a.a[1]|0;var m=a.a[2]|0,p=a.a[3]|0,z=a.a[4]|0,pc=a.a[5]|0,Pc=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var Rl=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&m^e&m)|0;h=z&pc^~z&Pc;f=f+((z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>
25|z<<7))|0;h=h+(Jj[b]|0)|0;h=f+(h+(c[b]|0)|0)|0;f=Pc;Pc=pc;pc=z;z=p+h|0;p=m;m=e;e=d;d=h+Rl|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+m|0;a.a[3]=a.a[3]+p|0;a.a[4]=a.a[4]+z|0;a.a[5]=a.a[5]+pc|0;a.a[6]=a.a[6]+Pc|0;a.a[7]=a.a[7]+f|0}
function Qj(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(l(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Pj(a),e=0);else if(ha(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Pj(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var Kj=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Rj(){Hj.call(this,8,Sj)}t(Rj,Hj);var Sj=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Tj(a,b,c,d,e){this.l=a;this.i=b;this.m=c;this.o=d||null;this.u=e||null;this.h=b+":"+c;this.v=new Fj;this.g=new Cj(this.h);this.f=null;this.b=[];this.a=this.c=null}function Uj(a){return new K("invalid-cordova-configuration",a)}g=Tj.prototype;
g.ga=function(){return this.za?this.za:this.za=ie().then(function(){if("function"!==typeof H("universalLinks.subscribe",k))throw Uj("cordova-universal-links-plugin is not installed");if("undefined"===typeof H("BuildInfo.packageName",k))throw Uj("cordova-plugin-buildinfo is not installed");if("function"!==typeof H("cordova.plugins.browsertab.openUrl",k))throw Uj("cordova-plugin-browsertab is not installed");if("function"!==typeof H("cordova.InAppBrowser.open",k))throw Uj("cordova-plugin-inappbrowser is not installed");
},function(){throw new K("cordova-not-ready");})};function Vj(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Wj(a){var b=new Rj;Qj(b,a);a=[];var c=8*b.g;56>b.c?Qj(b,Oj,56-b.c):Qj(b,Oj,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Pj(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return lf(a)}
g.Ea=function(a,b){b(new K("operation-not-supported-in-this-environment"));return A()};g.zb=function(){return B(new K("operation-not-supported-in-this-environment"))};g.Mb=function(){return!1};g.Ib=function(){return!0};g.Db=function(){return!0};
g.Ca=function(a,b,c){if(this.c)return B(new K("redirect-operation-pending"));var d=this,e=k.document,f=null,h=null,m=null,p=null;return this.c=A().then(function(){mg(b);return Xj(d)}).then(function(){return Yj(d,a,b,c)}).then(function(){return(new y(function(a,b){h=function(){var b=H("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.va(h);m=function(){f||(f=Hc(2E3).then(function(){b(new K("redirect-cancelled-by-user"))}))};
p=function(){De()&&m()};e.addEventListener("resume",m,!1);G().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",p,!1)})).s(function(a){return Zj(d).then(function(){throw a;})})}).ia(function(){m&&e.removeEventListener("resume",m,!1);p&&e.removeEventListener("visibilitychange",p,!1);f&&f.cancel();h&&d.Ka(h);d.c=null})};
function Yj(a,b,c,d){var e=Vj(),f=new ng(b,d,null,e,new K("no-auth-event")),h=H("BuildInfo.packageName",k);if("string"!==typeof h)throw new K("invalid-cordova-configuration");var m=H("BuildInfo.displayName",k),p={};if(G().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(G().toLowerCase().match(/android/))p.apn=h;else return B(new K("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);e=Wj(e);p.sessionId=e;var z=Ri(a.l,a.i,a.m,b,c,null,d,a.o,p,a.u);return a.ga().then(function(){var b=
a.h;return a.v.a.set(Dj,f.D(),b)}).then(function(){var b=H("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new K("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=H("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new K("invalid-cordova-configuration");c(z)}else{c=H("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new K("invalid-cordova-configuration");b=G();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.a=c(z,b?"_blank":"_system","location=yes")}})})}function ak(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Xj(a){a.f||(a.f=a.ga().then(function(){return new y(function(b){function c(d){b(d);a.Ka(c);return!1}a.va(c);bk(a)})}));return a.f}function Zj(a){var b=null;return Ej(a.g).then(function(c){b=c;c=a.g;return zj(c.b,Dj,c.a)}).then(function(){return b})}
function bk(a){function b(b){d=!0;e&&e.cancel();Zj(a).then(function(d){var e=c;if(d&&b&&b.url){var f=null;e=If(b.url);-1!=e.indexOf("/__/auth/callback")&&(f=ed(e),f=ze(dd(f,"firebaseError")||null),f=(f="object"===typeof f?$e(f):null)?new ng(d.b,d.c,null,null,f):new ng(d.b,d.c,e,d.g));e=f||c}ak(a,e)})}var c=new ng("unknown",null,null,null,new K("no-auth-event")),d=!1,e=Hc(500).then(function(){return Zj(a).then(function(){d||ak(a,c)})}),f=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(H("BuildInfo.packageName",
k).toLowerCase()+"://")&&b({url:a});if("function"===typeof f)try{f(a)}catch(m){console.error(m)}};qg||(qg=new pg);qg.subscribe(b)}g.va=function(a){this.b.push(a);Xj(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new ng("unknown",null,null,null,new K("no-auth-event")),a(b))})};g.Ka=function(a){Ha(this.b,function(b){return b==a})};function ck(a){this.a=a;this.b=vj()}var dk={name:"pendingRedirect",A:"session"};function ek(a){return a.b.set(dk,"pending",a.a)}function fk(a){return zj(a.b,dk,a.a)}function gk(a){return a.b.get(dk,a.a).then(function(a){return"pending"==a})};function hk(a,b,c){this.v=a;this.m=b;this.l=c;this.h=[];this.f=!1;this.i=r(this.o,this);this.c=new ik;this.u=new jk;this.g=new ck(this.m+":"+this.l);this.b={};this.b.unknown=this.c;this.b.signInViaRedirect=this.c;this.b.linkViaRedirect=this.c;this.b.reauthViaRedirect=this.c;this.b.signInViaPopup=this.u;this.b.linkViaPopup=this.u;this.b.reauthViaPopup=this.u;this.a=kk(this.v,this.m,this.l,yi)}function kk(a,b,c,d){var e=firebase.SDK_VERSION||null;return je()?new Tj(a,b,c,e,d):new Li(a,b,c,e,d)}
hk.prototype.reset=function(){this.f=!1;this.a.Ka(this.i);this.a=kk(this.v,this.m,this.l)};function lk(a){a.f||(a.f=!0,a.a.va(a.i));var b=a.a;return a.a.ga().s(function(c){a.a==b&&a.reset();throw c;})}function mk(a){a.a.Ib()&&lk(a).s(function(b){var c=new ng("unknown",null,null,null,new K("operation-not-supported-in-this-environment"));nk(b)&&a.o(c)});a.a.Db()||ok(a.c)}
hk.prototype.subscribe=function(a){Fa(this.h,a)||this.h.push(a);if(!this.f){var b=this;gk(this.g).then(function(a){a?fk(b.g).then(function(){lk(b).s(function(a){var c=new ng("unknown",null,null,null,new K("operation-not-supported-in-this-environment"));nk(a)&&b.o(c)})}):mk(b)}).s(function(){mk(b)})}};hk.prototype.unsubscribe=function(a){Ha(this.h,function(b){return b==a})};
hk.prototype.o=function(a){if(!a)throw new K("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.sb(a.b,a.c)){(b=this.b[a.b])&&b.h(a,d);b=!0;break}}ok(this.c);return b};var pk=new Ce(2E3,1E4),qk=new Ce(3E4,6E4);hk.prototype.fa=function(){return this.c.fa()};function rk(a,b,c,d,e,f){return a.a.zb(b,c,d,function(){a.f||(a.f=!0,a.a.va(a.i))},function(){a.reset()},e,f)}function nk(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
hk.prototype.Ca=function(a,b,c){var d=this,e;return ek(this.g).then(function(){return d.a.Ca(a,b,c).s(function(a){if(nk(a))throw new K("operation-not-supported-in-this-environment");e=a;return fk(d.g).then(function(){throw e;})}).then(function(){return d.a.Mb()?new y(function(){}):fk(d.g).then(function(){return d.fa()}).then(function(){}).s(function(){})})})};hk.prototype.Ea=function(a,b,c,d){return this.a.Ea(c,function(c){a.ha(b,null,c,d)},pk.get())};var sk={};
function tk(a,b,c){var d=b+":"+c;sk[d]||(sk[d]=new hk(a,b,c));return sk[d]}function ik(){this.b=null;this.f=[];this.c=[];this.a=null;this.g=!1}ik.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
ik.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;"unknown"!=c||e||f?a.a?(uk(this,!0,null,a.a),A()):b.wa(c,d)?vk(this,a,b):B(new K("invalid-auth-event")):(uk(this,!1,null,null),A())}else B(new K("invalid-auth-event"))};function ok(a){a.g||(a.g=!0,uk(a,!1,null,null))}
function vk(a,b,c){c=c.wa(b.b,b.c);var d=b.f,e=b.g,f=!!b.b.match(/Redirect$/);c(d,e).then(function(b){uk(a,f,b,null)}).s(function(b){uk(a,f,null,b)})}function wk(a,b){a.b=function(){return B(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function xk(a,b){a.b=function(){return A(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function uk(a,b,c,d){b?d?wk(a,d):xk(a,c):xk(a,{user:null});a.f=[];a.c=[]}
ik.prototype.fa=function(){var a=this;return new y(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),yk(a))})};function yk(a){var b=new K("timeout");a.a&&a.a.cancel();a.a=Hc(qk.get()).then(function(){a.b||uk(a,!0,null,b)})}function jk(){}jk.prototype.h=function(a,b){if(a){var c=a.b,d=a.c;a.a?(b.ha(a.b,null,a.a,a.c),A()):b.wa(c,d)?zk(a,b):B(new K("invalid-auth-event"))}else B(new K("invalid-auth-event"))};
function zk(a,b){var c=a.c,d=a.b;b.wa(d,c)(a.f,a.g).then(function(a){b.ha(d,a,null,c)}).s(function(a){b.ha(d,null,a,c)})};function Ak(){this.pb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.pb},set:function(a){this.pb=a},enumerable:!1})};function Bk(a,b){this.a=b;I(this,"verificationId",a)}Bk.prototype.confirm=function(a){a=kg(this.verificationId,a);return this.a(a)};function Ck(a,b,c,d){return(new ig(a)).Ta(b,c).then(function(a){return new Bk(a,d)})};function Dk(a){var b=tf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new K("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");J(this,{token:a,expirationTime:Fe(1E3*b.exp),authTime:Fe(1E3*b.auth_time),issuedAtTime:Fe(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function Ek(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}Ek.prototype.start=function(){this.a=this.c;Fk(this,!0)};function Gk(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function Fk(a,b){a.stop();a.b=Hc(Gk(a,b)).then(function(){return Ee()}).then(function(){return a.h()}).then(function(){Fk(a,!0)}).s(function(b){a.i(b)&&Fk(a,!1)})}
Ek.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Hk(a){this.f=a;this.b=this.a=null;this.c=0}Hk.prototype.D=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Ik(a,b){var c=b[L],d=b.refreshToken;b=Jk(b.expiresIn);a.b=c;a.c=b;a.a=d}function Kk(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function Jk(a){return na()+1E3*parseInt(a,10)}
function Lk(a,b){return Mh(a.f,b).then(function(b){a.b=b.access_token;a.c=Jk(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}Hk.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?B(new K("user-token-expired")):a||!this.b||na()>this.c-3E4?this.a?Lk(this,{grant_type:"refresh_token",refresh_token:this.a}):A(null):A({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Mk(a,b){this.a=a||null;this.b=b||null;J(this,{lastSignInTime:Fe(b||null),creationTime:Fe(a||null)})}function Nk(a){return new Mk(a.a,a.b)}Mk.prototype.D=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Ok(a,b,c,d,e,f){J(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Pk(a,b){C.call(this,a);for(var c in b)this[c]=b[c]}t(Pk,C);
function Q(a,b,c){this.G=[];this.l=a.apiKey;this.o=a.appName;this.u=a.authDomain||null;a=firebase.SDK_VERSION?re(firebase.SDK_VERSION):null;this.b=new Ah(this.l,xi(yi),a);this.h=new Hk(this.b);Qk(this,b[L]);Ik(this.h,b);I(this,"refreshToken",this.h.a);Rk(this,c||{});E.call(this);this.I=!1;this.u&&ue()&&(this.a=tk(this.u,this.l,this.o));this.N=[];this.i=null;this.w=Sk(this);this.V=r(this.Ha,this);var d=this;this.ka=null;this.sa=function(a){d.oa(a.g)};this.X=null;this.O=[];this.ra=function(a){Tk(d,
a.c)};this.W=null}t(Q,E);Q.prototype.oa=function(a){this.ka=a;Gh(this.b,a)};Q.prototype.ea=function(){return this.ka};function Uk(a,b){a.X&&D(a.X,"languageCodeChanged",a.sa);(a.X=b)&&rc(b,"languageCodeChanged",a.sa)}function Tk(a,b){a.O=b;Hh(a.b,firebase.SDK_VERSION?re(firebase.SDK_VERSION,a.O):null)}Q.prototype.xa=function(){return Ja(this.O)};function Vk(a,b){a.W&&D(a.W,"frameworkChanged",a.ra);(a.W=b)&&rc(b,"frameworkChanged",a.ra)}Q.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())};
function Wk(a){try{return firebase.app(a.o).auth()}catch(b){throw new K("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.o+"'!");}}function Sk(a){return new Ek(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-na()-3E5;return 0<b?b:0})}function Xk(a){a.C||a.w.b||(a.w.start(),D(a,"tokenChanged",a.V),rc(a,"tokenChanged",a.V))}function Yk(a){D(a,"tokenChanged",a.V);a.w.stop()}
function Qk(a,b){a.qa=b;I(a,"_lat",b)}function Zk(a,b){Ha(a.N,function(a){return a==b})}function $k(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return vb(b).then(function(){return a})}function al(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function Rk(a,b){J(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new Mk(b.createdAt,b.lastLoginAt),providerData:[]})}I(Q.prototype,"providerId","firebase");function bl(){}function cl(a){return A().then(function(){if(a.C)throw new K("app-deleted");})}function dl(a){return Ba(a.providerData,function(a){return a.providerId})}
function el(a,b){b&&(fl(a,b.providerId),a.providerData.push(b))}function fl(a,b){Ha(a.providerData,function(a){return a.providerId==b})}function gl(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&I(a,b,c)}
function hl(a,b){a!=b&&(J(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?I(a,"metadata",Nk(b.metadata)):I(a,"metadata",new Mk),v(b.providerData,function(b){el(a,b)}),Kk(a.h,b.h),I(a,"refreshToken",a.h.a))}g=Q.prototype;g.reload=function(){var a=this;return R(this,cl(this).then(function(){return il(a).then(function(){return $k(a)}).then(bl)}))};
function il(a){return a.F().then(function(b){var c=a.isAnonymous;return jl(a,b).then(function(){c||gl(a,"isAnonymous",!1);return b})})}g.ac=function(a){return this.F(a).then(function(a){return new Dk(a)})};g.F=function(a){var b=this;return R(this,cl(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new K("internal-error");a.accessToken!=b.qa&&(Qk(b,a.accessToken),b.dispatchEvent(new Pk("tokenChanged")));gl(b,"refreshToken",a.refreshToken);return a.accessToken}))};
function kl(a,b){b[L]&&a.qa!=b[L]&&(Ik(a.h,b),a.dispatchEvent(new Pk("tokenChanged")),Qk(a,b[L]),gl(a,"refreshToken",a.h.a))}function jl(a,b){return O(a.b,ti,{idToken:b}).then(r(a.uc,a))}
g.uc=function(a){a=a.users;if(!a||!a.length)throw new K("internal-error");a=a[0];Rk(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=ll(a),c=0;c<b.length;c++)el(this,b[c]);gl(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function ll(a){return(a=a.providerUserInfo)&&a.length?Ba(a,function(a){return new Ok(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}g.cb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(a){kl(b,a);c=ml(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};
g.vc=function(a){Ie("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead.");return this.cb(a).then(function(){})};function nl(a,b){return il(a).then(function(){if(Fa(dl(a),b))return $k(a).then(function(){throw new K("provider-already-linked");})})}
g.ab=function(a){var b=this,c=null;return R(this,nl(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.c(b.b,c)}).then(function(a){c=ml(b,a,"link");return ol(b,a)}).then(function(){return c}))};g.mc=function(a){Ie("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead.");return this.ab(a).then(function(a){return a.user})};
g.nc=function(a,b){var c=this;return R(this,nl(this,"phone").then(function(){return Ck(Wk(c),a,b,r(c.ab,c))}))};g.wc=function(a,b){var c=this;return R(this,A().then(function(){return Ck(Wk(c),a,b,r(c.cb,c))}),!0)};function ml(a,b,c){var d=lg(b);b=yf(b);return Le({user:a,credential:d,additionalUserInfo:b,operationType:c})}function ol(a,b){kl(a,b);return a.reload().then(function(){return a})}
g.mb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.mb(c,a)}).then(function(a){kl(b,a);return b.reload()}))};g.Pc=function(a){var b=this;return R(this,this.F().then(function(c){return a.c(b.b,c)}).then(function(a){kl(b,a);return b.reload()}))};g.nb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.nb(c,a)}).then(function(a){kl(b,a);return b.reload()}))};
g.ob=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return cl(this);var b=this;return R(this,this.F().then(function(c){return b.b.ob(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){kl(b,a);gl(b,"displayName",a.displayName||null);gl(b,"photoURL",a.photoUrl||null);v(b.providerData,function(a){"password"===a.providerId&&(I(a,"displayName",b.displayName),I(a,"photoURL",b.photoURL))});return $k(b)}).then(bl))};
g.Nc=function(a){var b=this;return R(this,il(this).then(function(c){return Fa(dl(b),a)?fi(b.b,c,[a]).then(function(a){var c={};v(a.providerUserInfo||[],function(a){c[a.providerId]=!0});v(dl(b),function(a){c[a]||fl(b,a)});c[ig.PROVIDER_ID]||I(b,"phoneNumber",null);return $k(b)}):$k(b).then(function(){throw new K("no-such-provider");})}))};
g.delete=function(){var a=this;return R(this,this.F().then(function(b){return O(a.b,si,{idToken:b})}).then(function(){a.dispatchEvent(new Pk("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");Uk(a,null);Vk(a,null);a.G=[];a.C=!0;Yk(a);I(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
g.sb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.aa||null)==b||"reauthViaRedirect"==a&&(this.aa||null)==b?!0:!1};g.ha=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
g.wa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.xb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.yb,this):"linkViaRedirect"==a&&(this.aa||null)==b?r(this.xb,this):"reauthViaRedirect"==a&&(this.aa||null)==b?r(this.yb,this):null};g.oc=function(a){var b=this;return pl(this,"linkViaPopup",a,function(){return nl(b,a.providerId).then(function(){return $k(b)})},!1)};g.xc=function(a){return pl(this,"reauthViaPopup",a,function(){return A()},!0)};
function pl(a,b,c,d,e){if(!ue())return B(new K("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=xf(c.providerId),h=te(a.uid+":::"),m=null;(!we()||le())&&a.u&&c.isOAuthProvider&&(m=Ri(a.u,a.l,a.o,b,c,null,h,firebase.SDK_VERSION||null));var p=de(m,f&&f.Ba,f&&f.Aa);d=d().then(function(){ql(a);if(!e)return a.F().then(function(){})}).then(function(){return rk(a.a,p,b,c,h,!!m)}).then(function(){return new y(function(c,d){a.ha(b,null,new K("cancelled-popup-request"),a.g||null);
a.f=c;a.v=d;a.g=h;a.c=a.a.Ea(a,b,p,h)})}).then(function(a){p&&ce(p);return a?Le(a):null}).s(function(a){p&&ce(p);throw a;});return R(a,d,e)}g.pc=function(a){var b=this;return rl(this,"linkViaRedirect",a,function(){return nl(b,a.providerId)},!1)};g.yc=function(a){return rl(this,"reauthViaRedirect",a,function(){return A()},!0)};
function rl(a,b,c,d,e){if(!ue())return B(new K("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=null,h=te(a.uid+":::");d=d().then(function(){ql(a);if(!e)return a.F().then(function(){})}).then(function(){a.aa=h;return $k(a)}).then(function(b){a.ba&&(b=a.ba,b=b.b.set(sl,a.D(),b.a));return b}).then(function(){return a.a.Ca(b,c,h)}).s(function(b){f=b;if(a.ba)return tl(a.ba);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function ql(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new K("internal-error");throw new K("auth-domain-config-required");}}g.xb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=this.F().then(function(d){return Nf(c.b,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=ml(c,a,"link");return ol(c,a)}).then(function(){return d});return R(this,e)};
g.yb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=A().then(function(){return Jf(Of(c.b,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=ml(c,a,"reauthenticate");kl(c,a);c.i=null;return c.reload()}).then(function(){return d});return R(this,e,!0)};g.gb=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Za(a)?{}:kf(new af(a))}).then(function(a){return b.b.gb(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=ul(a,b,c);a.G.push(d);d.ia(function(){Ga(a.G,d)});return d}function ul(a,b,c){return a.i&&!c?(b.cancel(),B(a.i)):b.s(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||a.dispatchEvent(new Pk("userInvalidated")),a.i=b);throw b;})}g.toJSON=function(){return this.D()};
g.D=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.h.D(),redirectEventId:this.aa||null};this.metadata&&bb(a,this.metadata.D());v(this.providerData,function(b){a.providerData.push(Me(b))});return a};
function vl(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[L]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&v(a.providerData,function(a){a&&el(d,Le(a))});a.redirectEventId&&(d.aa=a.redirectEventId);return d}
function wl(a,b,c,d){var e=new Q(a,b);c&&(e.ba=c);d&&Tk(e,d);return e.reload().then(function(){return e})}function xl(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.u,appName:a.o};var e=a.h,f={};f[L]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-na())/1E3;b=new Q(b,f);c&&(b.ba=c);d&&Tk(b,d);hl(b,a);return b};function yl(a){this.a=a;this.b=vj()}var sl={name:"redirectUser",A:"session"};function tl(a){return zj(a.b,sl,a.a)}function zl(a,b){return a.b.get(sl,a.a).then(function(a){a&&b&&(a.authDomain=b);return vl(a||{})})};function Al(a){this.a=a;this.b=vj();this.c=null;this.f=Bl(this);this.b.addListener(Cl("local"),this.a,r(this.g,this))}Al.prototype.g=function(){var a=this,b=Cl("local");Dl(this,function(){return A().then(function(){return a.c&&"local"!=a.c.A?a.b.get(b,a.a):null}).then(function(c){if(c)return El(a,"local").then(function(){a.c=b})})})};function El(a,b){var c=[],d;for(d in rj)rj[d]!==b&&c.push(zj(a.b,Cl(rj[d]),a.a));c.push(zj(a.b,Fl,a.a));return ub(c)}
function Bl(a){var b=Cl("local"),c=Cl("session"),d=Cl("none");return yj(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(Fl,a.a).then(function(a){return a?Cl(a):b})})})}).then(function(b){a.c=b;return El(a,b.A)}).s(function(){a.c||(a.c=b)})}var Fl={name:"persistence",A:"session"};function Cl(a){return{name:"authUser",A:a}}
Al.prototype.jb=function(a){var b=null,c=this;sj(a);return Dl(this,function(){return a!=c.c.A?c.b.get(c.c,c.a).then(function(d){b=d;return El(c,a)}).then(function(){c.c=Cl(a);if(b)return c.b.set(c.c,b,c.a)}):A()})};function Gl(a){return Dl(a,function(){return a.b.set(Fl,a.c.A,a.a)})}function Hl(a,b){return Dl(a,function(){return a.b.set(a.c,b.D(),a.a)})}function Il(a){return Dl(a,function(){return zj(a.b,a.c,a.a)})}
function Jl(a,b){return Dl(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return vl(a||{})})})}function Dl(a,b){a.f=a.f.then(b,b);return a.f};function Kl(a){this.l=!1;I(this,"settings",new Ak);I(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase.SDK_VERSION?re(firebase.SDK_VERSION):null,this.b=new Ah(S(this).options&&S(this).options.apiKey,xi(yi),a);else throw new K("invalid-api-key");this.N=[];this.o=[];this.I=[];this.Pb=firebase.INTERNAL.createSubscribe(r(this.ic,this));this.O=void 0;this.Qb=firebase.INTERNAL.createSubscribe(r(this.jc,this));Ll(this,null);this.h=new Al(S(this).options.apiKey+":"+S(this).name);this.w=
new yl(S(this).options.apiKey+":"+S(this).name);this.V=T(this,Ml(this));this.i=T(this,Nl(this));this.X=!1;this.ka=r(this.Jc,this);this.Ha=r(this.Z,this);this.qa=r(this.Yb,this);this.ra=r(this.gc,this);this.sa=r(this.hc,this);Ol(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.qc,this);this.u=0;E.call(this);Pl(this);this.G=[]}t(Kl,E);function Ql(a){C.call(this,"languageCodeChanged");this.g=a}t(Ql,C);
function Sl(a){C.call(this,"frameworkChanged");this.c=a}t(Sl,C);g=Kl.prototype;g.jb=function(a){a=this.h.jb(a);return T(this,a)};g.oa=function(a){this.W===a||this.l||(this.W=a,Gh(this.b,this.W),this.dispatchEvent(new Ql(this.ea())))};g.ea=function(){return this.W};g.Qc=function(){var a=k.navigator;this.oa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};g.qc=function(a){this.G.push(a);Hh(this.b,firebase.SDK_VERSION?re(firebase.SDK_VERSION,this.G):null);this.dispatchEvent(new Sl(this.G))};
g.xa=function(){return Ja(this.G)};function Pl(a){Object.defineProperty(a,"lc",{get:function(){return this.ea()},set:function(a){this.oa(a)},enumerable:!1});a.W=null}g.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).D()}};function Tl(a){return a.Ob||B(new K("auth-domain-config-required"))}
function Ol(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&ue()&&(a.Ob=a.V.then(function(){if(!a.l){a.a=tk(b,c,S(a).name);a.a.subscribe(a);U(a)&&al(U(a));if(a.C){al(a.C);var d=a.C;d.oa(a.ea());Uk(d,a);d=a.C;Tk(d,a.G);Vk(d,a);a.C=null}return a.a}}))}g.sb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
g.ha=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};g.wa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.Xb,this):null};
g.Xb=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var d=null,e=null,f=Lf(c.b,a).then(function(a){d=lg(a);e=yf(a);return a});a=c.V.then(function(){return f}).then(function(a){return Ul(c,a)}).then(function(){return Le({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return T(this,a)};
g.Hc=function(a){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var b=this,c=xf(a.providerId),d=te(),e=null;(!we()||le())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Ri(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=de(e,c&&c.Ba,c&&c.Aa);c=Tl(this).then(function(b){return rk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new y(function(a,c){b.ha("signInViaPopup",null,new K("cancelled-popup-request"),
b.g);b.f=a;b.v=c;b.g=d;b.c=b.a.Ea(b,"signInViaPopup",f,d)})}).then(function(a){f&&ce(f);return a?Le(a):null}).s(function(a){f&&ce(f);throw a;});return T(this,c)};g.Ic=function(a){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var b=this,c=Tl(this).then(function(){return Gl(b.h)}).then(function(){return b.a.Ca("signInViaRedirect",a)});return T(this,c)};
g.fa=function(){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var a=this,b=Tl(this).then(function(){return a.a.fa()}).then(function(a){return a?Le(a):null});return T(this,b)};
g.Oc=function(a){if(!a)return B(new K("null-user"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=xl(a,c,b.w,b.xa());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return hl(U(b),a),b.Z(a);Ll(b,d);al(d);return b.Z(d)}).then(function(){Vl(b)}))};
function Ul(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.V.then(function(){return wl(c,b,a.w,a.xa())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return hl(U(a),b),a.Z(b);Ll(a,b);al(b);return a.Z(b)}).then(function(){Vl(a)})}
function Ll(a,b){U(a)&&(Zk(U(a),a.Ha),D(U(a),"tokenChanged",a.qa),D(U(a),"userDeleted",a.ra),D(U(a),"userInvalidated",a.sa),Yk(U(a)));b&&(b.N.push(a.Ha),rc(b,"tokenChanged",a.qa),rc(b,"userDeleted",a.ra),rc(b,"userInvalidated",a.sa),0<a.u&&Xk(b));I(a,"currentUser",b);b&&(b.oa(a.ea()),Uk(b,a),Tk(b,a.G),Vk(b,a))}g.kb=function(){var a=this,b=this.i.then(function(){if(!U(a))return A();Ll(a,null);return Il(a.h).then(function(){Vl(a)})});return T(this,b)};
function Wl(a){var b=zl(a.w,S(a).options.authDomain).then(function(b){if(a.C=b)b.ba=a.w;return tl(a.w)});return T(a,b)}function Ml(a){var b=S(a).options.authDomain,c=Wl(a).then(function(){return Jl(a.h,b)}).then(function(b){return b?(b.ba=a.w,a.C&&(a.C.aa||null)==(b.aa||null)?b:b.reload().then(function(){return Hl(a.h,b).then(function(){return b})}).s(function(c){return"auth/network-request-failed"==c.code?b:Il(a.h)})):null}).then(function(b){Ll(a,b||null)});return T(a,c)}
function Nl(a){return a.V.then(function(){return a.fa()}).s(function(){}).then(function(){if(!a.l)return a.ka()}).s(function(){}).then(function(){if(!a.l){a.X=!0;var b=a.h;b.b.addListener(Cl("local"),b.a,a.ka)}})}
g.Jc=function(){var a=this;return Jl(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return hl(U(a),b),U(a).F();if(U(a)||b)Ll(a,b),b&&(al(b),b.ba=a.w),a.a&&a.a.subscribe(a),Vl(a)}})};g.Z=function(a){return Hl(this.h,a)};g.Yb=function(){Vl(this);this.Z(U(this))};g.gc=function(){this.kb()};g.hc=function(){this.kb()};
function Xl(a,b){var c=null,d=null;return T(a,b.then(function(b){c=lg(b);d=yf(b);return Ul(a,b)}).then(function(){return Le({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}g.ic=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};g.jc=function(a){var b=this;Yl(this,function(){a.next(U(b))})};g.sc=function(a,b,c){var d=this;this.X&&firebase.Promise.resolve().then(function(){n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Pb(a,b,c)};
g.rc=function(a,b,c){var d=this;this.X&&firebase.Promise.resolve().then(function(){d.O=d.getUid();n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Qb(a,b,c)};g.$b=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};g.Jb=function(a){var b=this;return this.i.then(function(){return Xl(b,O(b.b,vi,{token:a}))}).then(function(a){var c=a.user;gl(c,"isAnonymous",!1);b.Z(c);return a})};
g.Bc=function(a){Ie("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead.");return this.Jb(a)};g.Cc=function(a,b){Ie("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead.");return this.Kb(a,b)};g.Kb=function(a,b){var c=this;return this.i.then(function(){return Xl(c,O(c.b,$f,{email:a,password:b}))})};
g.ub=function(a,b){var c=this;return this.i.then(function(){return Xl(c,O(c.b,ri,{email:a,password:b}))})};g.Sb=function(a,b){Ie("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead.");return this.ub(a,b)};g.Ec=function(a){Ie("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead.");return this.Oa(a).then(function(a){return a.user})};
g.Oa=function(a){var b=this;return this.i.then(function(){return Xl(b,a.ya(b.b))})};g.Pa=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Le({providerId:null,isNewUser:!1});return Le({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Xl(a,a.b.Pa()).then(function(b){var c=b.user;gl(c,"isAnonymous",!0);a.Z(c);return b})})};
g.Dc=function(){Ie("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead.");return this.Pa()};function S(a){return a.app}function U(a){return a.currentUser}g.getUid=function(){return U(this)&&U(this).uid||null};function Zl(a){return U(a)&&U(a)._lat||null}
function Vl(a){if(a.X){for(var b=0;b<a.o.length;b++)if(a.o[b])a.o[b](Zl(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](Zl(a))}}g.Rb=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Xk(U(this))};g.zc=function(a){var b=this;v(this.o,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&Yk(U(this));this.removeAuthTokenListener(a)};
g.addAuthTokenListener=function(a){var b=this;this.o.push(a);T(this,this.i.then(function(){b.l||Fa(b.o,a)&&a(Zl(b))}))};g.removeAuthTokenListener=function(a){Ha(this.o,function(b){return b==a})};function Yl(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Fa(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(Zl(a)))}))}
g.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(Cl("local"),a.a,this.ka));this.a&&this.a.unsubscribe(this);return firebase.Promise.resolve()};function T(a,b){a.N.push(b);b.ia(function(){Ga(a.N,b)});return b}g.Vb=function(a){Ie("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead.");return T(this,Rh(this.b,a))};
g.Wb=function(a){return T(this,Th(this.b,a))};g.kc=function(a){return!!dg(a)};g.ib=function(a,b){var c=this;return T(this,A().then(function(){var a=new af(b);if(!a.c)throw new K("argument-error",jf+" must be true when sending sign in link to email");return kf(a)}).then(function(b){return c.b.ib(a,b)}).then(function(){}))};g.Rc=function(a){return this.Ja(a).then(function(a){return a.data.email})};g.Xa=function(a,b){return T(this,this.b.Xa(a,b).then(function(){}))};g.Ja=function(a){return T(this,this.b.Ja(a).then(function(a){return new Pe(a)}))};
g.Va=function(a){return T(this,this.b.Va(a).then(function(){}))};g.hb=function(a,b){var c=this;return T(this,A().then(function(){return"undefined"===typeof b||Za(b)?{}:kf(new af(b))}).then(function(b){return c.b.hb(a,b)}).then(function(){}))};g.Gc=function(a,b){return T(this,Ck(this,a,b,r(this.Oa,this)))};g.Fc=function(a,b){var c=this;return T(this,A().then(function(){var d=cg(a,b||Wd());return c.Oa(d)}))};function $l(){}$l.prototype.render=function(){};$l.prototype.reset=function(){};$l.prototype.getResponse=function(){};$l.prototype.execute=function(){};function am(){this.a={};this.b=1E12}var bm=null;am.prototype.render=function(a,b){this.a[this.b.toString()]=new cm(a,b);return this.b++};am.prototype.reset=function(a){var b=dm(this,a);a=em(a);b&&a&&(b.delete(),delete this.a[a])};am.prototype.getResponse=function(a){return(a=dm(this,a))?a.getResponse():null};am.prototype.execute=function(a){(a=dm(this,a))&&a.execute()};function dm(a,b){return(b=em(b))?a.a[b]||null:null}function em(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function cm(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Jd(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():rc(this.f,"click",this.i)}cm.prototype.getResponse=function(){fm(this);return this.b};
cm.prototype.execute=function(){fm(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=pe();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};cm.prototype.delete=function(){fm(this);this.g=!0;clearTimeout(this.a);this.a=null;D(this.f,"click",this.i)};function fm(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function gm(){}gm.prototype.g=function(){bm||(bm=new am);return A(bm)};gm.prototype.c=function(){};var hm=null;function im(){this.b=k.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var jm=rd("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),km=new Ce(3E4,6E4);
im.prototype.g=function(a){var b=this;return new y(function(c,d){var e=setTimeout(function(){d(new K("network-request-failed"))},km.get());if(!k.grecaptcha||a!==b.f&&!b.b){k[b.a]=function(){if(k.grecaptcha){b.f=a;var f=k.grecaptcha.render;k.grecaptcha.render=function(a,c){a=f(a,c);b.b++;return a};clearTimeout(e);c(k.grecaptcha)}else clearTimeout(e),d(new K("internal-error"));delete k[b.a]};var f=vd(jm,{onload:b.a,hl:a||""});A(sh(f)).s(function(){clearTimeout(e);d(new K("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(k.grecaptcha)})};im.prototype.c=function(){this.b--};var lm=null;function mm(a,b,c,d,e,f,h){I(this,"type","recaptcha");this.c=this.f=null;this.C=!1;this.l=b;this.g=null;h?(hm||(hm=new gm),h=hm):(lm||(lm=new im),h=lm);this.o=h;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[nm])throw new K("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[om];if(!k.document)throw new K("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Jd(b)||!this.i&&Jd(b).hasChildNodes())throw new K("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Ah(a,f||null,e||null);this.v=d||function(){return null};var m=this;this.m=[];var p=this.a[pm];this.a[pm]=function(a){qm(m,a);if("function"===typeof p)p(a);else if("string"===typeof p){var b=H(p,k);"function"===typeof b&&b(a)}};var z=this.a[rm];this.a[rm]=function(){qm(m,null);if("function"===typeof z)z();else if("string"===typeof z){var a=
H(z,k);"function"===typeof a&&a()}}}var pm="callback",rm="expired-callback",nm="sitekey",om="size";function qm(a,b){for(var c=0;c<a.m.length;c++)try{a.m[c](b)}catch(d){}}function sm(a,b){Ha(a.m,function(a){return a==b})}function tm(a,b){a.h.push(b);b.ia(function(){Ga(a.h,b)});return b}g=mm.prototype;
g.za=function(){var a=this;return this.f?this.f:this.f=tm(this,A().then(function(){if(ve()&&!me())return he();throw new K("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.o.g(a.v())}).then(function(b){a.g=b;return O(a.u,ui,{})}).then(function(b){a.a[nm]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
g.render=function(){um(this);var a=this;return tm(this,this.za().then(function(){if(null===a.c){var b=a.l;if(!a.i){var c=Jd(b);b=Md("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};g.verify=function(){um(this);var a=this;return tm(this,this.render().then(function(b){return new y(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(b){b&&(sm(a,e),c(b))};a.m.push(e);a.i&&a.g.execute(a.c)}})}))};g.reset=function(){um(this);null!==this.c&&this.g.reset(this.c)};
function um(a){if(a.C)throw new K("internal-error","RecaptchaVerifier instance has been destroyed.");}g.clear=function(){um(this);this.C=!0;this.o.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Jd(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};
function vm(a,b,c){var d=!1;try{this.b=c||firebase.app()}catch(h){throw new K("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new K("invalid-api-key");var e=this,f=null;try{f=this.b.auth().xa()}catch(h){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(h){}f=firebase.SDK_VERSION?re(firebase.SDK_VERSION,f):null;mm.call(this,c,a,b,function(){try{var a=e.b.auth().ea()}catch(m){a=
null}return a},f,xi(yi),d)}t(vm,mm);function wm(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,h=0;h<b.length;h++)if(b[h].optional)f=!0;else{if(f)throw new K("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=xm.length)throw new K("internal-error",
"Argument validator received an unsupported number of arguments.");c=xm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new K("argument-error",a+" failed: "+d);}var xm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:l}}function ym(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function zm(a,b){return{name:a||"",K:"a function",optional:!!b,M:n}}function Am(a,b){return{name:a||"",K:"null",optional:!!b,M:ea}}function Bm(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function Cm(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Kl)}}}
function Dm(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof firebase.app.App)}}}function Em(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ya||!c)}}}
function Fm(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Gm(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&l(a.type)&&n(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Hm(d,a[c],b[c].j)}}function Im(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].qb;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){wm(d,[e],[a],!0);this[c]=a},enumerable:!0})}}}function Z(a,b,c,d){a[b]=Hm(b,c,d)}
function Hm(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);wm(e,c,a);return b.apply(this,a)}if(!c)return b;var e=Jm(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Jm(a){a=a.split(".");return a[a.length-1]};Y(Kl.prototype,{Va:{name:"applyActionCode",j:[V("code")]},Ja:{name:"checkActionCode",j:[V("code")]},Xa:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},ub:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Sb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Vb:{name:"fetchProvidersForEmail",j:[V("email")]},Wb:{name:"fetchSignInMethodsForEmail",j:[V("email")]},fa:{name:"getRedirectResult",j:[]},kc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
rc:{name:"onAuthStateChanged",j:[X(W(),zm(),"nextOrObserver"),zm("opt_error",!0),zm("opt_completed",!0)]},sc:{name:"onIdTokenChanged",j:[X(W(),zm(),"nextOrObserver"),zm("opt_error",!0),zm("opt_completed",!0)]},hb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Am(null,!0),"opt_actionCodeSettings",!0)]},ib:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},jb:{name:"setPersistence",j:[V("persistence")]},Oa:{name:"signInAndRetrieveDataWithCredential",
j:[Em()]},Pa:{name:"signInAnonymously",j:[]},Dc:{name:"signInAnonymouslyAndRetrieveData",j:[]},Ec:{name:"signInWithCredential",j:[Em()]},Jb:{name:"signInWithCustomToken",j:[V("token")]},Bc:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Kb:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Fc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Cc:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Gc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
Gm()]},Hc:{name:"signInWithPopup",j:[Fm()]},Ic:{name:"signInWithRedirect",j:[Fm()]},Oc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(a){return!!(a&&a instanceof Q)}}}(),Am(),"user")]},kb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Qc:{name:"useDeviceLanguage",j:[]},Rc:{name:"verifyPasswordResetCode",j:[V("code")]}});Im(Kl.prototype,{lc:{name:"languageCode",qb:X(V(),Am(),"languageCode")}});Kl.Persistence=rj;
Kl.Persistence.LOCAL="local";Kl.Persistence.SESSION="session";Kl.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},ac:{name:"getIdTokenResult",j:[ym("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[ym("opt_forceRefresh",!0)]},ab:{name:"linkAndRetrieveDataWithCredential",j:[Em()]},mc:{name:"linkWithCredential",j:[Em()]},nc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Gm()]},oc:{name:"linkWithPopup",j:[Fm()]},pc:{name:"linkWithRedirect",j:[Fm()]},cb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Em()]},vc:{name:"reauthenticateWithCredential",j:[Em()]},wc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Gm()]},xc:{name:"reauthenticateWithPopup",j:[Fm()]},yc:{name:"reauthenticateWithRedirect",j:[Fm()]},reload:{name:"reload",j:[]},gb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Am(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Nc:{name:"unlink",j:[V("provider")]},mb:{name:"updateEmail",j:[V("email")]},nb:{name:"updatePassword",j:[V("password")]},Pc:{name:"updatePhoneNumber",j:[Em("phone")]},ob:{name:"updateProfile",j:[W("profile")]}});
Y(am.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y($l.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(y.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}});Im(Ak.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",qb:ym("appVerificationDisabledForTesting")}});Y(Bk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(N,"credential",function(a,b){return new Yf(a,b)},[V("email"),V("password")]);Y(Qf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qf,"credential",Rf,[X(V(),W(),"token")]);Z(N,"credentialWithLink",cg,[V("email"),V("emailLink")]);Y(Sf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sf,"credential",Tf,[X(V(),W(),"token")]);
Y(Uf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Uf,"credential",Vf,[X(V(),X(W(),Am()),"idToken"),X(V(),Am(),"accessToken",!0)]);Y(Wf.prototype,{Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wf,"credential",Xf,[X(V(),W(),"token"),V("secret",!0)]);
Y(M.prototype,{ta:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),Am(),"idToken",!0),X(V(),Am(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(ig,"credential",kg,[V("verificationId"),V("verificationCode")]);Y(ig.prototype,{Ta:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Gm()]}});Y(K.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(sg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
Y(rg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(vm.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Kl,Error:K};Z(a,"EmailAuthProvider",N,[]);Z(a,"FacebookAuthProvider",Qf,[]);Z(a,"GithubAuthProvider",Sf,[]);Z(a,"GoogleAuthProvider",Uf,[]);Z(a,"TwitterAuthProvider",Wf,[]);Z(a,"OAuthProvider",M,[V("providerId")]);Z(a,"PhoneAuthProvider",ig,[Cm()]);Z(a,"RecaptchaVerifier",vm,[X(V(),Bm(),"recaptchaContainer"),W("recaptchaParameters",!0),Dm()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new Kl(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.$b,a),addAuthTokenListener:r(a.Rb,a),removeAuthTokenListener:r(a.zc,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = __webpack_require__(1);
var firebase = _interopDefault(__webpack_require__(97));

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Standard error codes for different ways a request can fail, as defined by:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * This map is used primarily to convert from a backend error code string to
 * a client SDK error code string, and make sure it's in the supported set.
 */
var errorCodeMap = {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss'
};
/**
 * An explicit error that can be thrown from a handler to send an error to the
 * client that called the function.
 */
var HttpsErrorImpl = /** @class */ (function (_super) {
    tslib_1.__extends(HttpsErrorImpl, _super);
    function HttpsErrorImpl(code, message, details) {
        var _this = _super.call(this, message) || this;
        // This is a workaround for a bug in TypeScript when extending Error:
        // tslint:disable-next-line
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
        _this.code = code;
        _this.details = details;
        return _this;
    }
    return HttpsErrorImpl;
}(Error));
/**
 * Takes an HTTP status code and returns the corresponding ErrorCode.
 * This is the standard HTTP status code -> error mapping defined in:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * @param status An HTTP status code.
 * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
 */
function codeForHTTPStatus(status) {
    // Make sure any successful status is OK.
    if (status >= 200 && status < 300) {
        return 'ok';
    }
    switch (status) {
        case 0:
            // This can happen if the server returns 500.
            return 'internal';
        case 400:
            return 'invalid-argument';
        case 401:
            return 'unauthenticated';
        case 403:
            return 'permission-denied';
        case 404:
            return 'not-found';
        case 409:
            return 'aborted';
        case 429:
            return 'resource-exhausted';
        case 499:
            return 'cancelled';
        case 500:
            return 'internal';
        case 501:
            return 'unimplemented';
        case 503:
            return 'unavailable';
        case 504:
            return 'deadline-exceeded';
    }
    return 'unknown';
}
/**
 * Takes an HTTP response and returns the corresponding Error, if any.
 */
function _errorForResponse(status, bodyJSON, serializer) {
    var code = codeForHTTPStatus(status);
    // Start with reasonable defaults from the status code.
    var description = code;
    var details = undefined;
    // Then look through the body for explicit details.
    try {
        var errorJSON = bodyJSON.error;
        if (errorJSON) {
            var status_1 = errorJSON.status;
            if (typeof status_1 === 'string') {
                if (!errorCodeMap[status_1]) {
                    // They must've included an unknown error code in the body.
                    return new HttpsErrorImpl('internal', 'internal');
                }
                code = errorCodeMap[status_1];
            }
            // TODO(klimt): Add better default descriptions for error enums.
            // The default description needs to be updated for the new code.
            description = status_1;
            var message = errorJSON.message;
            if (typeof message === 'string') {
                description = message;
            }
            details = errorJSON.details;
            if (details !== undefined) {
                details = serializer.decode(details);
            }
        }
    }
    catch (e) {
        // If we couldn't parse explicit error data, that's fine.
    }
    if (code === 'ok') {
        // Technically, there's an edge case where a developer could explicitly
        // return an error code of OK, and we will treat it as success, but that
        // seems reasonable.
        return null;
    }
    return new HttpsErrorImpl(code, description, details);
}

/**
 * Helper class to get metadata that should be included with a function call.
 */
var ContextProvider = /** @class */ (function () {
    function ContextProvider(app) {
        this.app = app;
    }
    ContextProvider.prototype.getAuthToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.app.INTERNAL.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, token.accessToken];
                    case 2:
                        e_1 = _a.sent();
                        // If there's any error when trying to get the auth token, leave it off.
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContextProvider.prototype.getInstanceIdToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var messaging, token, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // HACK: Until we have a separate instanceId package, this is a quick way
                        // to load in the messaging instance for this app.
                        if (!this.app.messaging) {
                            return [2 /*return*/, undefined];
                        }
                        messaging = this.app.messaging();
                        return [4 /*yield*/, messaging.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, token];
                    case 2:
                        e_2 = _a.sent();
                        // We don't warn on this, because it usually means messaging isn't set up.
                        // console.warn('Failed to retrieve instance id token.', e);
                        // If there's any error when trying to get the token, leave it off.
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContextProvider.prototype.getContext = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authToken, instanceIdToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        return [4 /*yield*/, this.getInstanceIdToken()];
                    case 2:
                        instanceIdToken = _a.sent();
                        return [2 /*return*/, { authToken: authToken, instanceIdToken: instanceIdToken }];
                }
            });
        });
    };
    return ContextProvider;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';
function mapValues(o, f) {
    var result = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            result[key] = f(o[key]);
        }
    }
    return result;
}
var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    // Takes data and encodes it in a JSON-friendly way, such that types such as
    // Date are preserved.
    Serializer.prototype.encode = function (data) {
        var _this = this;
        if (data === null || data === undefined) {
            return null;
        }
        if (data instanceof Number) {
            data = data.valueOf();
        }
        if (typeof data === 'number' && isFinite(data)) {
            // Any number in JS is safe to put directly in JSON and parse as a double
            // without any loss of precision.
            return data;
        }
        if (data === true || data === false) {
            return data;
        }
        if (Object.prototype.toString.call(data) === '[object String]') {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(function (x) { return _this.encode(x); });
        }
        if (typeof data === 'function' || typeof data === 'object') {
            return mapValues(data, function (x) { return _this.encode(x); });
        }
        // If we got this far, the data is not encodable.
        throw new Error('Data cannot be encoded in JSON: ' + data);
    };
    // Takes data that's been encoded in a JSON-friendly form and returns a form
    // with richer datatypes, such as Dates, etc.
    Serializer.prototype.decode = function (json) {
        var _this = this;
        if (json === null) {
            return json;
        }
        if (json['@type']) {
            switch (json['@type']) {
                case LONG_TYPE:
                // Fall through and handle this the same as unsigned.
                case UNSIGNED_LONG_TYPE: {
                    // Technically, this could work return a valid number for malformed
                    // data if there was a number followed by garbage. But it's just not
                    // worth all the extra code to detect that case.
                    var value = parseFloat(json.value);
                    if (isNaN(value)) {
                        throw new Error('Data cannot be decoded from JSON: ' + json);
                    }
                    return value;
                }
                default: {
                    throw new Error('Data cannot be decoded from JSON: ' + json);
                }
            }
        }
        if (Array.isArray(json)) {
            return json.map(function (x) { return _this.decode(x); });
        }
        if (typeof json === 'function' || typeof json === 'object') {
            return mapValues(json, function (x) { return _this.decode(x); });
        }
        // Anything else is safe to return.
        return json;
    };
    return Serializer;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The main class for the Firebase Functions SDK.
 */
var Service = /** @class */ (function () {
    /**
     * Creates a new Functions service for the given app and (optional) region.
     * @param app_ The FirebaseApp to use.
     * @param region_ The region to call functions in.
     */
    function Service(app_, region_) {
        if (region_ === void 0) { region_ = 'us-central1'; }
        this.app_ = app_;
        this.region_ = region_;
        this.serializer = new Serializer();
        this.contextProvider = new ContextProvider(app_);
    }
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the URL for a callable with the given name.
     * @param name The name of the callable.
     */
    Service.prototype._url = function (name) {
        var projectId = this.app_.options.projectId;
        var region = this.region_;
        return "https://" + region + "-" + projectId + ".cloudfunctions.net/" + name;
    };
    /**
     * Returns a reference to the callable https trigger with the given name.
     * @param name The name of the trigger.
     */
    Service.prototype.httpsCallable = function (name) {
        var _this = this;
        var callable = function (data) {
            return _this.call(name, data);
        };
        return callable;
    };
    /**
     * Does an HTTP POST and returns the completed response.
     * @param url The url to post to.
     * @param body The JSON body of the post.
     * @param headers The HTTP headers to include in the request.
     * @return A Promise that will succeed when the request finishes.
     */
    Service.prototype.postJSON = function (url, body, headers) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, e_1, json, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers.append('Content-Type', 'application/json');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                body: JSON.stringify(body),
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // This could be an unhandled error on the backend, or it could be a
                        // network error. There's no way to no, since an unhandled error on the
                        // backend will fail to set the proper CORS header, and thus will be
                        // treated as a network error by fetch.
                        return [2 /*return*/, {
                                status: 0,
                                json: null
                            }];
                    case 4:
                        json = null;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.json()];
                    case 6:
                        json = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, {
                            status: response.status,
                            json: json
                        }];
                }
            });
        });
    };
    /**
     * Calls a callable function asynchronously and returns the result.
     * @param name The name of the callable trigger.
     * @param data The data to pass as params to the function.s
     */
    Service.prototype.call = function (name, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, body, headers, context, response, error, responseData, decodedData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._url(name);
                        // Encode any special types, such as dates, in the input data.
                        data = this.serializer.encode(data);
                        body = { data: data };
                        headers = new Headers();
                        return [4 /*yield*/, this.contextProvider.getContext()];
                    case 1:
                        context = _a.sent();
                        if (context.authToken) {
                            headers.append('Authorization', 'Bearer ' + context.authToken);
                        }
                        if (context.instanceIdToken) {
                            headers.append('Firebase-Instance-ID-Token', context.instanceIdToken);
                        }
                        return [4 /*yield*/, this.postJSON(url, body, headers)];
                    case 2:
                        response = _a.sent();
                        error = _errorForResponse(response.status, response.json, this.serializer);
                        if (error) {
                            throw error;
                        }
                        if (!response.json) {
                            throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                        }
                        responseData = response.json.data;
                        // TODO(klimt): For right now, allow "result" instead of "data", for
                        // backwards compatibility.
                        if (typeof responseData === 'undefined') {
                            responseData = response.json.result;
                        }
                        if (typeof responseData === 'undefined') {
                            // Consider the response malformed.
                            throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                        }
                        decodedData = this.serializer.decode(responseData);
                        return [2 /*return*/, { data: decodedData }];
                }
            });
        });
    };
    return Service;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Functions.
 */
var FUNCTIONS_TYPE = 'functions';
function factory(app, unused, region) {
    return new Service(app, region);
}
function registerFunctions(instance) {
    var namespaceExports = {
        // no-inline
        Functions: Service
    };
    instance.INTERNAL.registerService(FUNCTIONS_TYPE, factory, namespaceExports, 
    // We don't need to wait on any AppHooks.
    undefined, 
    // Allow multiple functions instances per app.
    true);
}
registerFunctions(firebase);

exports.registerFunctions = registerFunctions;


/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMessaging", function() { return registerMessaging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__firebase_app__);




/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    TOKEN_UNSUBSCRIBE_FAILED: 'token-unsubscribe-failed',
    TOKEN_UPDATE_FAILED: 'token-update-failed',
    TOKEN_UPDATE_NO_TOKEN: 'token-update-no-token',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key',
    INVALID_PUBLIC_VAPID_KEY: 'invalid-public-vapid-key',
    USE_PUBLIC_KEY_BEFORE_GET_TOKEN: 'use-public-key-before-get-token',
    PUBLIC_KEY_DECRYPTION_FAILED: 'public-vapid-key-decryption-failed'
};
var ERROR_MAP = (_a = {}, _a[ERROR_CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.', _a[ERROR_CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.', _a[ERROR_CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.', _a[ERROR_CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().', _a[ERROR_CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.', _a[ERROR_CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.', _a[ERROR_CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.', _a[ERROR_CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.', _a[ERROR_CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}', _a[ERROR_CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.', _a[ERROR_CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.', _a[ERROR_CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.', _a[ERROR_CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.', _a[ERROR_CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}', _a[ERROR_CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.', _a[ERROR_CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.', _a[ERROR_CODES.TOKEN_UNSUBSCRIBE_FAILED] = 'A problem occured while unsubscribing the ' + 'user from FCM: {$message}', _a[ERROR_CODES.TOKEN_UPDATE_FAILED] = 'A problem occured while updating the ' + 'user from FCM: {$message}', _a[ERROR_CODES.TOKEN_UPDATE_NO_TOKEN] = 'FCM returned no token when updating ' + 'the user to push.', _a[ERROR_CODES.USE_SW_BEFORE_GET_TOKEN] = 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.', _a[ERROR_CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().', _a[ERROR_CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.', _a[ERROR_CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.', _a[ERROR_CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.', _a[ERROR_CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.', _a[ERROR_CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$message}', _a[ERROR_CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.', _a[ERROR_CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.', _a[ERROR_CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.', _a[ERROR_CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " +
        "'gcm_sender_id' value to '103953800507' to use Firebase messaging.", _a[ERROR_CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' +
        'least one character.', _a[ERROR_CODES.BAD_VAPID_KEY] = 'The public VAPID key is not a Uint8Array with 65 bytes.', _a[ERROR_CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.', _a[ERROR_CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.', _a[ERROR_CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' +
        'not a valid push set string.', _a[ERROR_CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.', _a[ERROR_CODES.INVALID_PUBLIC_VAPID_KEY] = 'The public VAPID key must be a string.', _a[ERROR_CODES.PUBLIC_KEY_DECRYPTION_FAILED] = 'The public VAPID key did not equal ' + '65 bytes when decrypted.', _a);
var errorFactory = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
var _a;

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_PUBLIC_VAPID_KEY = new Uint8Array([
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
]);
var ENDPOINT = 'https://fcm.googleapis.com';

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MessageParameter;
(function (MessageParameter) {
    MessageParameter["TYPE_OF_MSG"] = "firebase-messaging-msg-type";
    MessageParameter["DATA"] = "firebase-messaging-msg-data";
})(MessageParameter || (MessageParameter = {}));
var MessageType;
(function (MessageType) {
    MessageType["PUSH_MSG_RECEIVED"] = "push-msg-received";
    MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isArrayBufferEqual(a, b) {
    if (a == null || b == null) {
        return false;
    }
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    var viewA = new DataView(a);
    var viewB = new DataView(b);
    for (var i = 0; i < a.byteLength; i++) {
        if (viewA.getUint8(i) !== viewB.getUint8(i)) {
            return false;
        }
    }
    return true;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return btoa(String.fromCharCode.apply(null, uint8Version));
}
function arrayBufferToBase64(arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IidModel = /** @class */ (function () {
    function IidModel() {
    }
    IidModel.prototype.getToken = function (senderId, subscription, publicVapidKey) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var p256dh, auth, fcmSubscribeBody, applicationPubKey, headers, subscribeOptions, responseData, response, err_1, message;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p256dh = arrayBufferToBase64(subscription.getKey('p256dh'));
                        auth = arrayBufferToBase64(subscription.getKey('auth'));
                        fcmSubscribeBody = "authorized_entity=" + senderId + "&" +
                            ("endpoint=" + subscription.endpoint + "&") +
                            ("encryption_key=" + p256dh + "&") +
                            ("encryption_auth=" + auth);
                        if (!isArrayBufferEqual(publicVapidKey.buffer, DEFAULT_PUBLIC_VAPID_KEY.buffer)) {
                            applicationPubKey = arrayBufferToBase64(publicVapidKey);
                            fcmSubscribeBody += "&application_pub_key=" + applicationPubKey;
                        }
                        headers = new Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        subscribeOptions = {
                            method: 'POST',
                            headers: headers,
                            body: fcmSubscribeBody
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(ENDPOINT + '/fcm/connect/subscribe', subscribeOptions)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        responseData = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw errorFactory.create(ERROR_CODES.TOKEN_SUBSCRIBE_FAILED);
                    case 5:
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create(ERROR_CODES.TOKEN_SUBSCRIBE_FAILED, {
                                message: message
                            });
                        }
                        if (!responseData.token) {
                            throw errorFactory.create(ERROR_CODES.TOKEN_SUBSCRIBE_NO_TOKEN);
                        }
                        if (!responseData.pushSet) {
                            throw errorFactory.create(ERROR_CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET);
                        }
                        return [2 /*return*/, {
                                token: responseData.token,
                                pushSet: responseData.pushSet
                            }];
                }
            });
        });
    };
    /**
     * Update the underlying token details for fcmToken.
     */
    IidModel.prototype.updateToken = function (senderId, fcmToken, fcmPushSet, subscription, publicVapidKey) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var p256dh, auth, fcmUpdateBody, applicationPubKey, headers, updateOptions, responseData, response, err_2, message;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p256dh = arrayBufferToBase64(subscription.getKey('p256dh'));
                        auth = arrayBufferToBase64(subscription.getKey('auth'));
                        fcmUpdateBody = "push_set=" + fcmPushSet + "&" +
                            ("token=" + fcmToken + "&") +
                            ("authorized_entity=" + senderId + "&") +
                            ("endpoint=" + subscription.endpoint + "&") +
                            ("encryption_key=" + p256dh + "&") +
                            ("encryption_auth=" + auth);
                        if (!isArrayBufferEqual(publicVapidKey.buffer, DEFAULT_PUBLIC_VAPID_KEY.buffer)) {
                            applicationPubKey = arrayBufferToBase64(publicVapidKey);
                            fcmUpdateBody += "&application_pub_key=" + applicationPubKey;
                        }
                        headers = new Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        updateOptions = {
                            method: 'POST',
                            headers: headers,
                            body: fcmUpdateBody
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(ENDPOINT + '/fcm/connect/subscribe', updateOptions)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        responseData = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        throw errorFactory.create(ERROR_CODES.TOKEN_UPDATE_FAILED);
                    case 5:
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create(ERROR_CODES.TOKEN_UPDATE_FAILED, {
                                message: message
                            });
                        }
                        if (!responseData.token) {
                            throw errorFactory.create(ERROR_CODES.TOKEN_UPDATE_NO_TOKEN);
                        }
                        return [2 /*return*/, responseData.token];
                }
            });
        });
    };
    /**
     * Given a fcmToken, pushSet and messagingSenderId, delete an FCM token.
     */
    IidModel.prototype.deleteToken = function (senderId, fcmToken, fcmPushSet) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var fcmUnsubscribeBody, headers, unsubscribeOptions, response, responseData, message, err_3;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fcmUnsubscribeBody = "authorized_entity=" + senderId + "&" +
                            ("token=" + fcmToken + "&") +
                            ("pushSet=" + fcmPushSet);
                        headers = new Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        unsubscribeOptions = {
                            method: 'POST',
                            headers: headers,
                            body: fcmUnsubscribeBody
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(ENDPOINT + '/fcm/connect/unsubscribe', unsubscribeOptions)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        responseData = _a.sent();
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create(ERROR_CODES.TOKEN_UNSUBSCRIBE_FAILED, {
                                message: message
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        throw errorFactory.create(ERROR_CODES.TOKEN_UNSUBSCRIBE_FAILED);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return IidModel;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function base64ToArrayBuffer(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OLD_DB_NAME = 'undefined';
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function handleDb(db) {
    if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
        // We found a database with the name 'undefined', but our expected object
        // store isn't defined.
        return;
    }
    var transaction = db.transaction(OLD_OBJECT_STORE_NAME);
    var objectStore = transaction.objectStore(OLD_OBJECT_STORE_NAME);
    var iidModel = new IidModel();
    var openCursorRequest = objectStore.openCursor();
    openCursorRequest.onerror = function (event) {
        // NOOP - Nothing we can do.
        console.warn('Unable to cleanup old IDB.', event);
    };
    openCursorRequest.onsuccess = function () {
        var cursor = openCursorRequest.result;
        if (cursor) {
            // cursor.value contains the current record being iterated through
            // this is where you'd do something with the result
            var tokenDetails = cursor.value;
            iidModel.deleteToken(tokenDetails.fcmSenderId, tokenDetails.fcmToken, tokenDetails.fcmPushSet);
            cursor.continue();
        }
        else {
            db.close();
            indexedDB.deleteDatabase(OLD_DB_NAME);
        }
    };
}
function cleanV1() {
    var request = indexedDB.open(OLD_DB_NAME);
    request.onerror = function (event) {
        // NOOP - Nothing we can do.
    };
    request.onsuccess = function (event) {
        var db = request.result;
        handleDb(db);
    };
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DbInterface = /** @class */ (function () {
    function DbInterface() {
        this.dbPromise = null;
    }
    /** Gets record(s) from the objectStore that match the given key. */
    DbInterface.prototype.get = function (key) {
        return this.createTransaction(function (objectStore) { return objectStore.get(key); });
    };
    /** Gets record(s) from the objectStore that match the given index. */
    DbInterface.prototype.getIndex = function (index, key) {
        function runRequest(objectStore) {
            var idbIndex = objectStore.index(index);
            return idbIndex.get(key);
        }
        return this.createTransaction(runRequest);
    };
    /** Assigns or overwrites the record for the given value. */
    // tslint:disable-next-line:no-any IndexedDB values are of type "any"
    DbInterface.prototype.put = function (value) {
        return this.createTransaction(function (objectStore) { return objectStore.put(value); }, 'readwrite');
    };
    /** Deletes record(s) from the objectStore that match the given key. */
    DbInterface.prototype.delete = function (key) {
        return this.createTransaction(function (objectStore) { return objectStore.delete(key); }, 'readwrite');
    };
    /**
     * Close the currently open database.
     */
    DbInterface.prototype.closeDatabase = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var db;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.dbPromise) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dbPromise];
                    case 1:
                        db = _a.sent();
                        db.close();
                        this.dbPromise = null;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates an IndexedDB Transaction and passes its objectStore to the
     * runRequest function, which runs the database request.
     *
     * @return Promise that resolves with the result of the runRequest function
     */
    DbInterface.prototype.createTransaction = function (runRequest, mode) {
        if (mode === void 0) { mode = 'readonly'; }
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var db, transaction, request, result;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        transaction = db.transaction(this.objectStoreName, mode);
                        request = transaction.objectStore(this.objectStoreName);
                        return [4 /*yield*/, promisify(runRequest(request))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                transaction.oncomplete = function () {
                                    resolve(result);
                                };
                                transaction.onerror = function () {
                                    reject(transaction.error);
                                };
                            })];
                }
            });
        });
    };
    /** Gets the cached db connection or opens a new one. */
    DbInterface.prototype.getDb = function () {
        var _this = this;
        if (!this.dbPromise) {
            this.dbPromise = new Promise(function (resolve, reject) {
                var request = indexedDB.open(_this.dbName, _this.dbVersion);
                request.onsuccess = function () {
                    resolve(request.result);
                };
                request.onerror = function () {
                    _this.dbPromise = null;
                    reject(request.error);
                };
                request.onupgradeneeded = function (event) { return _this.onDbUpgrade(request, event); };
            });
        }
        return this.dbPromise;
    };
    return DbInterface;
}());
/** Promisifies an IDBRequest. Resolves with the IDBRequest's result. */
function promisify(request) {
    return new Promise(function (resolve, reject) {
        request.onsuccess = function () {
            resolve(request.result);
        };
        request.onerror = function () {
            reject(request.error);
        };
    });
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TokenDetailsModel = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__extends"])(TokenDetailsModel, _super);
    function TokenDetailsModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dbName = 'fcm_token_details_db';
        _this.dbVersion = 3;
        _this.objectStoreName = 'fcm_token_object_Store';
        return _this;
    }
    TokenDetailsModel.prototype.onDbUpgrade = function (request, event) {
        var db = request.result;
        // Lack of 'break' statements is intentional.
        switch (event.oldVersion) {
            case 0: {
                // New IDB instance
                var objectStore = db.createObjectStore(this.objectStoreName, {
                    keyPath: 'swScope'
                });
                // Make sure the sender ID can be searched
                objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                    unique: false
                });
                objectStore.createIndex('fcmToken', 'fcmToken', { unique: true });
            }
            case 1: {
                // Prior to version 2, we were using either 'fcm_token_details_db'
                // or 'undefined' as the database name due to bug in the SDK
                // So remove the old tokens and databases.
                cleanV1();
            }
            case 2: {
                var objectStore = request.transaction.objectStore(this.objectStoreName);
                var cursorRequest_1 = objectStore.openCursor();
                cursorRequest_1.onsuccess = function () {
                    var cursor = cursorRequest_1.result;
                    if (cursor) {
                        var value = cursor.value;
                        var newValue = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__assign"])({}, value);
                        if (!value.createTime) {
                            newValue.createTime = Date.now();
                        }
                        if (typeof value.vapidKey === 'string') {
                            newValue.vapidKey = base64ToArrayBuffer(value.vapidKey);
                        }
                        if (typeof value.auth === 'string') {
                            newValue.auth = base64ToArrayBuffer(value.auth).buffer;
                        }
                        if (typeof value.auth === 'string') {
                            newValue.p256dh = base64ToArrayBuffer(value.p256dh).buffer;
                        }
                        cursor.update(newValue);
                        cursor.continue();
                    }
                };
            }
        }
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromToken = function (fcmToken) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                if (!fcmToken) {
                    throw errorFactory.create(ERROR_CODES.BAD_TOKEN);
                }
                validateInputs({ fcmToken: fcmToken });
                return [2 /*return*/, this.getIndex('fcmToken', fcmToken)];
            });
        });
    };
    /**
     * Given a service worker scope, this method will look up the details in
     * indexedDB.
     * @return The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function (swScope) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                if (!swScope) {
                    throw errorFactory.create(ERROR_CODES.BAD_SCOPE);
                }
                validateInputs({ swScope: swScope });
                return [2 /*return*/, this.get(swScope)];
            });
        });
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @param input A plain js object containing args to save.
     */
    TokenDetailsModel.prototype.saveTokenDetails = function (tokenDetails) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                if (!tokenDetails.swScope) {
                    throw errorFactory.create(ERROR_CODES.BAD_SCOPE);
                }
                if (!tokenDetails.vapidKey) {
                    throw errorFactory.create(ERROR_CODES.BAD_VAPID_KEY);
                }
                if (!tokenDetails.endpoint || !tokenDetails.auth || !tokenDetails.p256dh) {
                    throw errorFactory.create(ERROR_CODES.BAD_SUBSCRIPTION);
                }
                if (!tokenDetails.fcmSenderId) {
                    throw errorFactory.create(ERROR_CODES.BAD_SENDER_ID);
                }
                if (!tokenDetails.fcmToken) {
                    throw errorFactory.create(ERROR_CODES.BAD_TOKEN);
                }
                if (!tokenDetails.fcmPushSet) {
                    throw errorFactory.create(ERROR_CODES.BAD_PUSH_SET);
                }
                validateInputs(tokenDetails);
                return [2 /*return*/, this.put(tokenDetails)];
            });
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     *
     * @return Resolves once the FCM token details have been deleted and returns
     * the deleted details.
     */
    TokenDetailsModel.prototype.deleteToken = function (token) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var details;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof token !== 'string' || token.length === 0) {
                            return [2 /*return*/, Promise.reject(errorFactory.create(ERROR_CODES.INVALID_DELETE_TOKEN))];
                        }
                        return [4 /*yield*/, this.getTokenDetailsFromToken(token)];
                    case 1:
                        details = _a.sent();
                        if (!details) {
                            throw errorFactory.create(ERROR_CODES.DELETE_TOKEN_NOT_FOUND);
                        }
                        return [4 /*yield*/, this.delete(details.swScope)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, details];
                }
            });
        });
    };
    return TokenDetailsModel;
}(DbInterface));
/**
 * This method takes an object and will check for known arguments and
 * validate the input.
 * @return Promise that resolves if input is valid, rejects otherwise.
 */
function validateInputs(input) {
    if (input.fcmToken) {
        if (typeof input.fcmToken !== 'string' || input.fcmToken.length === 0) {
            throw errorFactory.create(ERROR_CODES.BAD_TOKEN);
        }
    }
    if (input.swScope) {
        if (typeof input.swScope !== 'string' || input.swScope.length === 0) {
            throw errorFactory.create(ERROR_CODES.BAD_SCOPE);
        }
    }
    if (input.vapidKey) {
        if (!(input.vapidKey instanceof Uint8Array) ||
            input.vapidKey.length !== 65) {
            throw errorFactory.create(ERROR_CODES.BAD_VAPID_KEY);
        }
    }
    if (input.endpoint) {
        if (typeof input.endpoint !== 'string' || input.endpoint.length === 0) {
            throw errorFactory.create(ERROR_CODES.BAD_SUBSCRIPTION);
        }
    }
    if (input.auth) {
        if (!(input.auth instanceof ArrayBuffer)) {
            throw errorFactory.create(ERROR_CODES.BAD_SUBSCRIPTION);
        }
    }
    if (input.p256dh) {
        if (!(input.p256dh instanceof ArrayBuffer)) {
            throw errorFactory.create(ERROR_CODES.BAD_SUBSCRIPTION);
        }
    }
    if (input.fcmSenderId) {
        if (typeof input.fcmSenderId !== 'string' ||
            input.fcmSenderId.length === 0) {
            throw errorFactory.create(ERROR_CODES.BAD_SENDER_ID);
        }
    }
    if (input.fcmPushSet) {
        if (typeof input.fcmPushSet !== 'string' || input.fcmPushSet.length === 0) {
            throw errorFactory.create(ERROR_CODES.BAD_PUSH_SET);
        }
    }
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
var VapidDetailsModel = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__extends"])(VapidDetailsModel, _super);
    function VapidDetailsModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dbName = 'fcm_vapid_details_db';
        _this.dbVersion = 1;
        _this.objectStoreName = 'fcm_vapid_object_Store';
        return _this;
    }
    VapidDetailsModel.prototype.onDbUpgrade = function (request) {
        var db = request.result;
        db.createObjectStore(this.objectStoreName, { keyPath: 'swScope' });
    };
    /**
     * Given a service worker scope, this method will look up the vapid key
     * in indexedDB.
     */
    VapidDetailsModel.prototype.getVapidFromSWScope = function (swScope) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof swScope !== 'string' || swScope.length === 0) {
                            throw errorFactory.create(ERROR_CODES.BAD_SCOPE);
                        }
                        return [4 /*yield*/, this.get(swScope)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result ? result.vapidKey : undefined];
                }
            });
        });
    };
    /**
     * Save a vapid key against a swScope for later date.
     */
    VapidDetailsModel.prototype.saveVapidDetails = function (swScope, vapidKey) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var details;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                if (typeof swScope !== 'string' || swScope.length === 0) {
                    throw errorFactory.create(ERROR_CODES.BAD_SCOPE);
                }
                if (vapidKey === null || vapidKey.length !== UNCOMPRESSED_PUBLIC_KEY_SIZE) {
                    throw errorFactory.create(ERROR_CODES.BAD_VAPID_KEY);
                }
                details = {
                    swScope: swScope,
                    vapidKey: vapidKey
                };
                return [2 /*return*/, this.put(details)];
            });
        });
    };
    /**
     * This method deletes details of the current FCM VAPID key for a SW scope.
     * Resolves once the scope/vapid details have been deleted and returns the
     * deleted vapid key.
     */
    VapidDetailsModel.prototype.deleteVapidDetails = function (swScope) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var vapidKey;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVapidFromSWScope(swScope)];
                    case 1:
                        vapidKey = _a.sent();
                        if (!vapidKey) {
                            throw errorFactory.create(ERROR_CODES.DELETE_SCOPE_NOT_FOUND);
                        }
                        return [4 /*yield*/, this.delete(swScope)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, vapidKey];
                }
            });
        });
    };
    return VapidDetailsModel;
}(DbInterface));

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SENDER_ID_OPTION_NAME = 'messagingSenderId';
// Database cache should be invalidated once a week.
var TOKEN_EXPIRATION_MILLIS = 7 * 24 * 60 * 60 * 1000; // 7 days
var BaseController = /** @class */ (function () {
    /**
     * An interface of the Messaging Service API
     */
    function BaseController(app) {
        var _this = this;
        if (!app.options[SENDER_ID_OPTION_NAME] ||
            typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw errorFactory.create(ERROR_CODES.BAD_SENDER_ID);
        }
        this.messagingSenderId = app.options[SENDER_ID_OPTION_NAME];
        this.tokenDetailsModel = new TokenDetailsModel();
        this.vapidDetailsModel = new VapidDetailsModel();
        this.iidModel = new IidModel();
        this.app = app;
        this.INTERNAL = {
            delete: function () { return _this.delete(); }
        };
    }
    /**
     * @export
     */
    BaseController.prototype.getToken = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var currentPermission, swReg, publicVapidKey, pushSubscription, tokenDetails;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentPermission = this.getNotificationPermission_();
                        if (currentPermission === 'denied') {
                            throw errorFactory.create(ERROR_CODES.NOTIFICATIONS_BLOCKED);
                        }
                        else if (currentPermission !== 'granted') {
                            // We must wait for permission to be granted
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        swReg = _a.sent();
                        return [4 /*yield*/, this.getPublicVapidKey_()];
                    case 2:
                        publicVapidKey = _a.sent();
                        return [4 /*yield*/, this.getPushSubscription(swReg, publicVapidKey)];
                    case 3:
                        pushSubscription = _a.sent();
                        return [4 /*yield*/, this.tokenDetailsModel.getTokenDetailsFromSWScope(swReg.scope)];
                    case 4:
                        tokenDetails = _a.sent();
                        if (tokenDetails) {
                            return [2 /*return*/, this.manageExistingToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                        }
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                }
            });
        });
    };
    /**
     * manageExistingToken is triggered if there's an existing FCM token in the
     * database and it can take 3 different actions:
     * 1) Retrieve the existing FCM token from the database.
     * 2) If VAPID details have changed: Delete the existing token and create a
     * new one with the new VAPID key.
     * 3) If the database cache is invalidated: Send a request to FCM to update
     * the token, and to check if the token is still valid on FCM-side.
     */
    BaseController.prototype.manageExistingToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var isTokenValid, now;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isTokenValid = isTokenStillValid(pushSubscription, publicVapidKey, tokenDetails);
                        if (isTokenValid) {
                            now = Date.now();
                            if (now < tokenDetails.createTime + TOKEN_EXPIRATION_MILLIS) {
                                return [2 /*return*/, tokenDetails.fcmToken];
                            }
                            else {
                                return [2 /*return*/, this.updateToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                            }
                        }
                        // If the token is no longer valid (for example if the VAPID details
                        // have changed), delete the existing token from the FCM client and server
                        // database. No need to unsubscribe from the Service Worker as we have a
                        // good push subscription that we'd like to use in getNewToken.
                        return [4 /*yield*/, this.deleteTokenFromDB(tokenDetails.fcmToken)];
                    case 1:
                        // If the token is no longer valid (for example if the VAPID details
                        // have changed), delete the existing token from the FCM client and server
                        // database. No need to unsubscribe from the Service Worker as we have a
                        // good push subscription that we'd like to use in getNewToken.
                        _a.sent();
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                }
            });
        });
    };
    BaseController.prototype.updateToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var updatedToken, allDetails, e_1;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.iidModel.updateToken(this.messagingSenderId, tokenDetails.fcmToken, tokenDetails.fcmPushSet, pushSubscription, publicVapidKey)];
                    case 1:
                        updatedToken = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            fcmSenderId: this.messagingSenderId,
                            fcmToken: updatedToken,
                            fcmPushSet: tokenDetails.fcmPushSet,
                            createTime: Date.now(),
                            endpoint: pushSubscription.endpoint,
                            auth: pushSubscription.getKey('auth'),
                            p256dh: pushSubscription.getKey('p256dh')
                        };
                        return [4 /*yield*/, this.tokenDetailsModel.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, updatedToken];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.deleteToken(tokenDetails.fcmToken)];
                    case 5:
                        _a.sent();
                        throw e_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseController.prototype.getNewToken = function (swReg, pushSubscription, publicVapidKey) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var tokenDetails, allDetails;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iidModel.getToken(this.messagingSenderId, pushSubscription, publicVapidKey)];
                    case 1:
                        tokenDetails = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            fcmSenderId: this.messagingSenderId,
                            fcmToken: tokenDetails.token,
                            fcmPushSet: tokenDetails.pushSet,
                            createTime: Date.now(),
                            endpoint: pushSubscription.endpoint,
                            auth: pushSubscription.getKey('auth'),
                            p256dh: pushSubscription.getKey('p256dh')
                        };
                        return [4 /*yield*/, this.tokenDetailsModel.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, tokenDetails.token];
                }
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after,
     * unsubscribes the token from FCM  and then unregisters the push
     * subscription if it exists. It returns a promise that indicates
     * whether or not the unsubscribe request was processed successfully.
     */
    BaseController.prototype.deleteToken = function (token) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var registration, pushSubscription;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Delete the token details from the database.
                    return [4 /*yield*/, this.deleteTokenFromDB(token)];
                    case 1:
                        // Delete the token details from the database.
                        _a.sent();
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 2:
                        registration = _a.sent();
                        if (!registration) return [3 /*break*/, 4];
                        return [4 /*yield*/, registration.pushManager.getSubscription()];
                    case 3:
                        pushSubscription = _a.sent();
                        if (pushSubscription) {
                            return [2 /*return*/, pushSubscription.unsubscribe()];
                        }
                        _a.label = 4;
                    case 4: 
                    // If there's no SW, consider it a success.
                    return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * This method will delete the token from the client database, and make a
     * call to FCM to remove it from the server DB. Does not temper with the
     * push subscription.
     */
    BaseController.prototype.deleteTokenFromDB = function (token) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var details;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenDetailsModel.deleteToken(token)];
                    case 1:
                        details = _a.sent();
                        return [4 /*yield*/, this.iidModel.deleteToken(details.fcmSenderId, details.fcmToken, details.fcmPushSet)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a PushSubscription for the current user.
     */
    BaseController.prototype.getPushSubscription = function (swRegistration, publicVapidKey) {
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicVapidKey
            });
        });
    };
    //
    // The following methods should only be available in the window.
    //
    BaseController.prototype.requestPermission = function () {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_WINDOW);
    };
    BaseController.prototype.useServiceWorker = function (registration) {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_WINDOW);
    };
    BaseController.prototype.usePublicVapidKey = function (b64PublicKey) {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_WINDOW);
    };
    BaseController.prototype.onMessage = function (nextOrObserver, error, completed) {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_WINDOW);
    };
    BaseController.prototype.onTokenRefresh = function (nextOrObserver, error, completed) {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    BaseController.prototype.setBackgroundMessageHandler = function (callback) {
        throw errorFactory.create(ERROR_CODES.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    BaseController.prototype.delete = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.tokenDetailsModel.closeDatabase(),
                            this.vapidDetailsModel.closeDatabase()
                        ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the current Notification Permission state.
     */
    BaseController.prototype.getNotificationPermission_ = function () {
        // TODO: Remove the cast when this issue is fixed:
        // https://github.com/Microsoft/TypeScript/issues/14701
        // tslint:disable-next-line no-any
        return Notification.permission;
    };
    BaseController.prototype.getTokenDetailsModel = function () {
        return this.tokenDetailsModel;
    };
    BaseController.prototype.getVapidDetailsModel = function () {
        return this.vapidDetailsModel;
    };
    // Visible for testing
    // TODO: make protected
    BaseController.prototype.getIidModel = function () {
        return this.iidModel;
    };
    return BaseController;
}());
/**
 * Checks if the tokenDetails match the details provided in the clients.
 */
function isTokenStillValid(pushSubscription, publicVapidKey, tokenDetails) {
    if (!tokenDetails.vapidKey ||
        !isArrayBufferEqual(publicVapidKey.buffer, tokenDetails.vapidKey.buffer)) {
        return false;
    }
    var isEndpointEqual = pushSubscription.endpoint === tokenDetails.endpoint;
    var isAuthEqual = isArrayBufferEqual(pushSubscription.getKey('auth'), tokenDetails.auth);
    var isP256dhEqual = isArrayBufferEqual(pushSubscription.getKey('p256dh'), tokenDetails.p256dh);
    return isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FCM_MSG = 'FCM_MSG';
var SwController = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__extends"])(SwController, _super);
    function SwController(app) {
        var _this = _super.call(this, app) || this;
        _this.bgMessageHandler = null;
        self.addEventListener('push', function (e) {
            _this.onPush(e);
        });
        self.addEventListener('pushsubscriptionchange', function (e) {
            _this.onSubChange(e);
        });
        self.addEventListener('notificationclick', function (e) {
            _this.onNotificationClick(e);
        });
        return _this;
    }
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onPush = function (event) {
        event.waitUntil(this.onPush_(event));
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onSubChange = function (event) {
        event.waitUntil(this.onSubChange_(event));
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onNotificationClick = function (event) {
        event.waitUntil(this.onNotificationClick_(event));
    };
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     */
    SwController.prototype.onPush_ = function (event) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var msgPayload, hasVisibleClients, notificationDetails, notificationTitle, reg, actions, maxActions;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event.data) {
                            return [2 /*return*/];
                        }
                        try {
                            msgPayload = event.data.json();
                        }
                        catch (err) {
                            // Not JSON so not an FCM message
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hasVisibleClients_()];
                    case 1:
                        hasVisibleClients = _a.sent();
                        if (hasVisibleClients) {
                            // App in foreground. Send to page.
                            return [2 /*return*/, this.sendMessageToWindowClients_(msgPayload)];
                        }
                        notificationDetails = this.getNotificationData_(msgPayload);
                        if (!notificationDetails) return [3 /*break*/, 3];
                        notificationTitle = notificationDetails.title || '';
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 2:
                        reg = _a.sent();
                        actions = notificationDetails.actions;
                        maxActions = Notification.maxActions;
                        // tslint:enable no-any
                        if (actions && maxActions && actions.length > maxActions) {
                            console.warn("This browser only supports " + maxActions + " actions." +
                                "The remaining actions will not be displayed.");
                        }
                        return [2 /*return*/, reg.showNotification(notificationTitle, notificationDetails)];
                    case 3:
                        if (!this.bgMessageHandler) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.bgMessageHandler(msgPayload)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onSubChange_ = function (event) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var registration, err_1, err_2, tokenDetailsModel, tokenDetails;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        registration = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        throw errorFactory.create(ERROR_CODES.UNABLE_TO_RESUBSCRIBE, {
                            message: err_1
                        });
                    case 3:
                        _a.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, registration.pushManager.getSubscription()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        err_2 = _a.sent();
                        tokenDetailsModel = this.getTokenDetailsModel();
                        return [4 /*yield*/, tokenDetailsModel.getTokenDetailsFromSWScope(registration.scope)];
                    case 6:
                        tokenDetails = _a.sent();
                        if (!tokenDetails) {
                            // This should rarely occure, but could if indexedDB
                            // is corrupted or wiped
                            throw err_2;
                        }
                        // Attempt to delete the token if we know it's bad
                        return [4 /*yield*/, this.deleteToken(tokenDetails.fcmToken)];
                    case 7:
                        // Attempt to delete the token if we know it's bad
                        _a.sent();
                        throw err_2;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onNotificationClick_ = function (event) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var msgPayload, clickAction, windowClient, internalMsg;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event.notification ||
                            !event.notification.data ||
                            !event.notification.data[FCM_MSG]) {
                            // Not an FCM notification, do nothing.
                            return [2 /*return*/];
                        }
                        else if (event.action) {
                            // User clicked on an action button.
                            // This will allow devs to act on action button clicks by using a custom
                            // onNotificationClick listener that they define.
                            return [2 /*return*/];
                        }
                        // Prevent other listeners from receiving the event
                        event.stopImmediatePropagation();
                        event.notification.close();
                        msgPayload = event.notification.data[FCM_MSG];
                        if (!msgPayload.notification) {
                            // Nothing to do.
                            return [2 /*return*/];
                        }
                        clickAction = msgPayload.notification.click_action;
                        if (!clickAction) {
                            // Nothing to do.
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getWindowClient_(clickAction)];
                    case 1:
                        windowClient = _a.sent();
                        if (!!windowClient) return [3 /*break*/, 3];
                        return [4 /*yield*/, self.clients.openWindow(clickAction)];
                    case 2:
                        // Unable to find window client so need to open one.
                        windowClient = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, windowClient.focus()];
                    case 4:
                        windowClient = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!windowClient) {
                            // Window Client will not be returned if it's for a third party origin.
                            return [2 /*return*/];
                        }
                        // Delete notification data from payload before sending to the page.
                        delete msgPayload.notification;
                        internalMsg = createNewMsg(MessageType.NOTIFICATION_CLICKED, msgPayload);
                        // Attempt to send a message to the client to handle the data
                        // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
                        return [2 /*return*/, this.attemptToMessageClient_(windowClient, internalMsg)];
                }
            });
        });
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__assign"])({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation.data = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__assign"])({}, msgPayload.notification.data, (_a = {}, _a[FCM_MSG] = msgPayload, _a));
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     *
     * @param callback The callback to be called when a push message is received
     * and a notification must be shown. The callback will be given the data from
     * the push message.
     */
    SwController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw errorFactory.create(ERROR_CODES.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler = callback;
    };
    /**
     * @param url The URL to look for when focusing a client.
     * @return Returns an existing window client or a newly opened WindowClient.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.getWindowClient_ = function (url) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var parsedURL, clientList, suitableClient, i, parsedClientUrl;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsedURL = new URL(url, self.location.href).href;
                        return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        suitableClient = null;
                        for (i = 0; i < clientList.length; i++) {
                            parsedClientUrl = new URL(clientList[i].url, self.location.href)
                                .href;
                            if (parsedClientUrl === parsedURL) {
                                suitableClient = clientList[i];
                                break;
                            }
                        }
                        return [2 /*return*/, suitableClient];
                }
            });
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @param client The WindowClient to send the message to.
     * @param message The message to send to the client.
     * @returns Returns a promise that resolves after sending the message. This
     * does not guarantee that the message was successfully received.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.attemptToMessageClient_ = function (client, message) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                // NOTE: This returns a promise in case this API is abstracted later on to
                // do additional work
                if (!client) {
                    throw errorFactory.create(ERROR_CODES.NO_WINDOW_CLIENT_TO_MSG);
                }
                client.postMessage(message);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @returns If there is currently a visible WindowClient, this method will
     * resolve to true, otherwise false.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.hasVisibleClients_ = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var clientList;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        return [2 /*return*/, clientList.some(function (client) { return client.visibilityState === 'visible'; })];
                }
            });
        });
    };
    /**
     * @param msgPayload The data from the push event that should be sent to all
     * available pages.
     * @returns Returns a promise that resolves once the message has been sent to
     * all WindowClients.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            var clientList, internalMsg;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        internalMsg = createNewMsg(MessageType.PUSH_MSG_RECEIVED, msgPayload);
                        return [4 /*yield*/, Promise.all(clientList.map(function (client) {
                                return _this.attemptToMessageClient_(client, internalMsg);
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @return he service worker registration to be used for the push service.
     */
    SwController.prototype.getSWRegistration_ = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                return [2 /*return*/, self.registration];
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    SwController.prototype.getPublicVapidKey_ = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var swReg, vapidKeyFromDatabase;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        swReg = _a.sent();
                        if (!swReg) {
                            throw errorFactory.create(ERROR_CODES.SW_REGISTRATION_EXPECTED);
                        }
                        return [4 /*yield*/, this.getVapidDetailsModel().getVapidFromSWScope(swReg.scope)];
                    case 2:
                        vapidKeyFromDatabase = _a.sent();
                        if (vapidKeyFromDatabase == null) {
                            return [2 /*return*/, DEFAULT_PUBLIC_VAPID_KEY];
                        }
                        return [2 /*return*/, vapidKeyFromDatabase];
                }
            });
        });
    };
    return SwController;
}(BaseController));
function getClientList() {
    return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
        // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
    });
}
function createNewMsg(msgType, msgData) {
    return _a = {}, _a[MessageParameter.TYPE_OF_MSG] = msgType, _a[MessageParameter.DATA] = msgData, _a;
    var _a;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WindowController = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__extends"])(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.registrationToUse = null;
        _this.publicVapidKeyToUse = null;
        _this.manifestCheckPromise = null;
        _this.messageObserver = null;
        // @ts-ignore: Unused variable error, this is not implemented yet.
        _this.tokenRefreshObserver = null;
        _this.onMessageInternal = Object(__WEBPACK_IMPORTED_MODULE_0__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver = observer;
        });
        _this.onTokenRefreshInternal = Object(__WEBPACK_IMPORTED_MODULE_0__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     *
     * @return Returns a promise that resolves to an FCM token or null if
     * permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.manifestCheckPromise) {
                            this.manifestCheckPromise = manifestCheck();
                        }
                        return [4 /*yield*/, this.manifestCheckPromise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _super.prototype.getToken.call(this)];
                }
            });
        });
    };
    /**
     * Request permission if it is not currently granted
     *
     * @return Resolves if the permission was granted, otherwise rejects
     */
    WindowController.prototype.requestPermission = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            var permissionResult;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.getNotificationPermission_() === 'granted') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        permissionResult = _a.sent();
                        if (permissionResult === 'granted') {
                            return [2 /*return*/];
                        }
                        else if (permissionResult === 'denied') {
                            throw errorFactory.create(ERROR_CODES.PERMISSION_BLOCKED);
                        }
                        else {
                            throw errorFactory.create(ERROR_CODES.PERMISSION_DEFAULT);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     *
     * @param registration The service worker registration that should be used to
     * receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw errorFactory.create(ERROR_CODES.SW_REGISTRATION_EXPECTED);
        }
        if (this.registrationToUse != null) {
            throw errorFactory.create(ERROR_CODES.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse = registration;
    };
    /**
     * This method allows a developer to override the default vapid key
     * and instead use a custom VAPID public key.
     *
     * @param publicKey A URL safe base64 encoded string.
     */
    WindowController.prototype.usePublicVapidKey = function (publicKey) {
        if (typeof publicKey !== 'string') {
            throw errorFactory.create(ERROR_CODES.INVALID_PUBLIC_VAPID_KEY);
        }
        if (this.publicVapidKeyToUse != null) {
            throw errorFactory.create(ERROR_CODES.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
        }
        var parsedKey = base64ToArrayBuffer(publicKey);
        if (parsedKey.length !== 65) {
            throw errorFactory.create(ERROR_CODES.PUBLIC_KEY_DECRYPTION_FAILED);
        }
        this.publicVapidKeyToUse = parsedKey;
    };
    /**
     * @export
     * @param nextOrObserver An observer object or a function triggered on
     * message.
     * @param error A function triggered on message error.
     * @param completed function triggered when the observer is removed.
     * @return The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, error, completed) {
        if (typeof nextOrObserver === 'function') {
            return this.onMessageInternal(nextOrObserver, error, completed);
        }
        else {
            return this.onMessageInternal(nextOrObserver);
        }
    };
    /**
     * @param nextOrObserver An observer object or a function triggered on token
     * refresh.
     * @param error A function triggered on token refresh error.
     * @param completed function triggered when the observer is removed.
     * @return The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, error, completed) {
        if (typeof nextOrObserver === 'function') {
            return this.onTokenRefreshInternal(nextOrObserver, error, completed);
        }
        else {
            return this.onTokenRefreshInternal(nextOrObserver);
        }
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @param registration Registration to wait for service worker to become active
     * @return Wait for service worker registration to become active
     */
    // Visible for testing
    // TODO: Make private
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(errorFactory.create(ERROR_CODES.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(errorFactory.create(ERROR_CODES.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(errorFactory.create(ERROR_CODES.SW_REG_REDUNDANT));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will register the default service worker and return the registration
     * @return The service worker registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse) {
            return this.waitForRegistrationToActivate_(this.registrationToUse);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse is no longer undefined
        this.registrationToUse = null;
        return navigator.serviceWorker
            .register(DEFAULT_SW_PATH, {
            scope: DEFAULT_SW_SCOPE
        })
            .catch(function (err) {
            throw errorFactory.create(ERROR_CODES.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the public VAPID key
     * provided by the developer.
     */
    WindowController.prototype.getPublicVapidKey_ = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
                if (this.publicVapidKeyToUse) {
                    return [2 /*return*/, this.publicVapidKeyToUse];
                }
                return [2 /*return*/, DEFAULT_PUBLIC_VAPID_KEY];
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     */
    // Visible for testing
    // TODO: Make private
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[MessageParameter.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[MessageParameter.TYPE_OF_MSG]) {
                case MessageType.PUSH_MSG_RECEIVED:
                case MessageType.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[MessageParameter.DATA];
                    if (_this.messageObserver) {
                        _this.messageObserver.next(pushMessage);
                    }
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    return WindowController;
}(BaseController));
/**
 * The method checks that a manifest is defined and has the correct GCM
 * sender ID.
 * @return Returns a promise that resolves if the manifest matches
 * our required sender ID
 */
// Exported for testing
function manifestCheck() {
    return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__awaiter"])(this, void 0, void 0, function () {
        var manifestTag, manifestContent, response, e_1;
        return Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    manifestTag = document.querySelector('link[rel="manifest"]');
                    if (!manifestTag) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(manifestTag.href)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    manifestContent = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    // If the download or parsing fails allow check.
                    // We only want to error if we KNOW that the gcm_sender_id is incorrect.
                    return [2 /*return*/];
                case 5:
                    if (!manifestContent || !manifestContent.gcm_sender_id) {
                        return [2 /*return*/];
                    }
                    if (manifestContent.gcm_sender_id !== '103953800507') {
                        throw errorFactory.create(ERROR_CODES.INCORRECT_GCM_SENDER_ID);
                    }
                    return [2 /*return*/];
            }
        });
    });
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (!isSupported()) {
            throw errorFactory.create(ERROR_CODES.UNSUPPORTED_BROWSER);
        }
        if (self && 'ServiceWorkerGlobalScope' in self) {
            // Running in ServiceWorker context
            return new SwController(app);
        }
        else {
            // Assume we are in the window context.
            return new WindowController(app);
        }
    };
    var namespaceExports = {
        isSupported: isSupported
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(__WEBPACK_IMPORTED_MODULE_2__firebase_app___default.a);
function isSupported() {
    if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return isSWControllerSupported();
    }
    else {
        // Assume we are in the window context.
        return isWindowControllerSupported();
    }
}
/**
 * Checks to see if the required APIs exist.
 */
function isWindowControllerSupported() {
    return ('serviceWorker' in navigator &&
        'PushManager' in window &&
        'Notification' in window &&
        'fetch' in window &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}
/**
 * Checks to see if the required APIs exist within SW Context.
 */
function isSWControllerSupported() {
    return ('PushManager' in self &&
        'Notification' in self &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}




/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_app__);


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = '/v0';
var configOption = 'storageBucket';
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = -9007199254740991;

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}());
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].';
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}());
function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 &&
                        (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = string.indexOf('-') !== -1;
            var hasUnder = string.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = string.indexOf('+') !== -1;
            var hasSlash = string.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            string = string.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
    }
    var bytes;
    try {
        bytes = atob(string);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function make(resolver) {
    return new Promise(resolver);
}
/**
 * @template T
 */
function resolve(value) {
    return Promise.resolve(value);
}
function reject(error) {
    return Promise.reject(error);
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = make(function (resolve$$1, reject$$1) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve$$1(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve$$1(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve$$1(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (isDef(opt_headers)) {
            var headers = opt_headers;
            forEach(headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (isDef(opt_body)) {
            this.xhr_.send(opt_body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' +
            version +
            '/b/' +
            bucketDomain +
            '/o' +
            path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            { regex: httpRegex, indices: httpIndices, postModify: httpModify }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) {
        return component.length > 0;
    })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeNormalUrl(urlPart) {
    return domainBase + apiBaseUrl + urlPart;
}
function makeDownloadUrl(urlPart) {
    return downloadBase + apiBaseUrl + urlPart;
}
function makeUploadUrl(urlPart) {
    return domainBase + apiUploadBaseUrl + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    forEach(params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    var valid = isString(fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    }
    else {
        fullPath = fullPath;
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (isDef(size)) {
            return +size;
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeDownloadUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && isObject(p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!isObject(val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        }
        else {
            if (isNonNullObject(val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw invalidArgument(i, name, e.message);
            }
            else {
                throw invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}());
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!isString(p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    }
    else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (isNativeBlobDefined() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(metadataValidator, opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || (isDef(p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(var_args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = var_args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains$1(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone$1(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function downloadUrlHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeNormalUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeNormalUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeNormalUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = makeNormalUrl(urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = clone(opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str =
                str +
                    Math.random()
                        .toString()
                        .slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = toResourceString(metadata, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = makeUploadUrl(urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(contains$1(allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = makeUploadUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    }
    else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = isFunction(nextOrObserver) ||
            isDef(opt_error) ||
            isDef(opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());

var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        resolve(true).then(function () {
            f.apply(null, argsToForward);
        });
    };
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) { metadata = null; }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(Code.CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.promise_ = make(function (resolve$$1, reject$$1) {
            _this.resolve_ = resolve$$1;
            _this.reject_ = reject$$1;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this.transition_(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this.transition_(InternalTaskState.PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(InternalTaskState.SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case InternalTaskState.PAUSING:
                this.transition_(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this.transition_(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) { nextOrObserver = undefined; }
        if (error === void 0) { error = undefined; }
        if (completed === void 0) { completed = undefined; }
        function typeValidator(_p) {
            if (type !== TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = isJustDef(p['next']) ||
                    isJustDef(p['error']) ||
                    isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            stringSpec(typeValidator),
            looseObjectSpec(nextOrObserverValidator, true),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    validate('on', specs, arguments);
                }
                var observer = new Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            looseObjectSpec(binderNextOrObserverValidator),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        var typeOnly = !(isJustDef(nextOrObserver) ||
            isJustDef(error) ||
            isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        remove(this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = clone$1(this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this.state_)) {
                case TaskState.SUCCESS:
                    async(this.resolve_.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this.reject_;
                    async(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next !== null) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete !== null) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error !== null) {
                    async(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    async(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof Location) {
            this.location = location;
        }
        else {
            this.location = Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return lastComponent(this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        validate('putString', [
            stringSpec(),
            stringSpec(formatValidator, true),
            metadataSpec(true)
        ], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, string);
        var metadata = clone(opt_metadata);
        if (!isDef(metadata['contentType']) && isDef(data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(self.authWrapper, self.location, self.mappings());
            return self.authWrapper
                .makeRequest(requestInfo, authToken)
                .getPromise()
                .then(function (url) {
                if (url === null) {
                    throw noDownloadURL();
                }
                return url;
            });
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) { appDelete = false; }
    };
    return FailRequest;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = minSafeInteger;
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        forEach(this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}());

/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (isDef(options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = defaultMaxOperationRetryTime;
        this.maxUploadRetryTime_ = defaultMaxUploadRetryTime;
        this.requestMap_ = new RequestMap();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[configOption] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null &&
            isDef(this.app_.INTERNAL) &&
            isDef(this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                }
                else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        }
        else {
            return resolve(null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw appDeleted();
        }
        else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = make(function (resolve$$1, reject$$1) {
            self.resolve_ = resolve$$1;
            self.reject_ = reject$$1;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled$$1) {
            if (canceled$$1) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = contains$1(self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve$$1 = self.resolve_;
            var reject$$1 = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve$$1(result);
                    }
                    else {
                        resolve$$1();
                    }
                }
                catch (e) {
                    reject$$1(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject$$1(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject$$1(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_
                            ? appDeleted()
                            : canceled();
                        reject$$1(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject$$1(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = contains$1(extraRetryCodes, status);
        var isRequestSpecificRetryCode = contains$1(this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof __WEBPACK_IMPORTED_MODULE_0__firebase_app___default.a !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0__firebase_app___default.a.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = clone(requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var Service = /** @class */ (function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new Reference(authWrapper, loc);
        }
        this.authWrapper_ = new AuthWrapper(app, maker, makeRequest, this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
        }
        else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new Location(authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        validate('ref', [stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new Reference(this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                Location.makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return resolve(undefined);
    };
    return ServiceInternals;
}());

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(app, unused, opt_url) {
    return new Service(app, new XhrIoPool(), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: Service,
        Reference: Reference
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined, 
    // Allow multiple storage instances per app.
    true);
}
registerStorage(__WEBPACK_IMPORTED_MODULE_0__firebase_app___default.a);




/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompetitorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCompetitorsPage = (function () {
    function AddCompetitorsPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentItems = [];
        this.users = [];
        this.players = [];
        this.loop = 0;
        this.show = true;
    }
    AddCompetitorsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.show = true;
        this.users = [];
        this.players = [];
        this.username = localStorage.getItem("username");
        console.log(this.username);
        var query1 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.loop++;
                _this.users.push(childData1);
                if (snapshot.numChildren() == _this.loop) {
                    _this.show = false;
                }
                //alert(this.user._user);      
            });
        });
        var query2 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/" + this.username + '/competing');
        query2.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.players.push(childData1);
                //alert(this.user._user);      
            });
        });
    };
    AddCompetitorsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.users.filter(function (v) {
            if (v.name && val) {
                if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AddCompetitorsPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        console.log(this.players);
        this.players.forEach(function (value) {
            if (value.name == item.name) {
                _this.alreadyCompeting();
                check = false;
            }
        });
        if (check) {
            var competing = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + this.username + '/competing');
            competing.child(item.name).set(item);
            var competitors = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + item.name + '/competitors');
            competitors.child(this.username).set(this.username);
            this.playerAdded();
        }
    };
    AddCompetitorsPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddCompetitorsPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return AddCompetitorsPage;
}());
AddCompetitorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-searchbar (ionInput)="getItems($event)" placeholder="search usernames to compete with friends"></ion-searchbar>\n  <ion-list>\n    <ion-item no-lines *ngFor="let item of currentItems">\n      \n      <ion-avatar item-start>\n            <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n      </ion-avatar>\n      \n	    <h2>{{item.name}}\n	    	<button ion-button icon-only (click)="addToLeaderboard(item)">\n	        <ion-icon name="add"></ion-icon>\n	      </button>\n	    </h2>\n	      \n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <h3 *ngIf="show" id="loading">Loading</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AddCompetitorsPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=15.js.map