// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return Object.keys(Object(e))}var t=void 0!==Object.keys,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function i(e,t){return null!=e&&l.call(e,t)}var a,u="function"==typeof Symbol?Symbol:void 0,h="function"==typeof u?u.toStringTag:"",s=r()?function(e){var t,n,r;if(null==e)return o.call(e);n=e[h],t=i(e,h);try{e[h]=void 0}catch(t){return o.call(e)}return r=o.call(e),t?e[h]=n:delete e[h],r}:function(e){return o.call(e)};function c(e){return"[object Arguments]"===s(e)}a=function(){return c(arguments)}();var d=a,v="function"==typeof Object.defineProperty?Object.defineProperty:null,w=Object.defineProperty;function f(e){return"number"==typeof e}function p(e){var t,n="";for(t=0;t<e;t++)n+="0";return n}function y(e,t,n){var r=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(r=!0,e=e.substr(1)),e=n?e+p(o):p(o)+e,r&&(e="-"+e)),e}var g=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function b(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!f(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===e.specifier||10!==t)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=y(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),r||e.precision?e.precision&&(n=y(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===m.call(e.specifier)?m.call(n):g.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function I(e){return"string"==typeof e}var S=Math.abs,E=String.prototype.toLowerCase,T=String.prototype.toUpperCase,_=String.prototype.replace,C=/e\+(\d)$/,A=/e-(\d)$/,j=/^(\d+)$/,O=/^(\d+)e/,M=/\.0$/,D=/\.0*e/,k=/(\..*[^0])0*e/;function N(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":S(r)<1e-4?((t=e.precision)>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=_.call(n,k,"$1e"),n=_.call(n,D,"e"),n=_.call(n,M,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=_.call(n,C,"e+0$1"),n=_.call(n,A,"e-0$1"),e.alternate&&(n=_.call(n,j,"$1."),n=_.call(n,O,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===T.call(e.specifier)?T.call(n):E.call(n)}function V(e){var t,n="";for(t=0;t<e;t++)n+=" ";return n}function P(e,t,n){var r=t-e.length;return r<0?e:e=n?e+V(r):V(r)+e}var x=String.fromCharCode,Y=isNaN,F=Array.isArray;function W(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function B(e){var t,n,r,o,l,i,a,u,h;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(i="",a=1,u=0;u<e.length;u++)if(I(r=e[u]))i+=r;else{if(t=void 0!==r.precision,!(r=W(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,h=0;h<n.length;h++)switch(o=n.charAt(h)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,Y(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,Y(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=b(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!Y(r.arg)){if((l=parseInt(r.arg,10))<0||l>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=Y(l)?String(r.arg):x(l)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=y(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=P(r.arg,r.width,r.padRight)),i+=r.arg||"",a+=1}return i}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function R(e){var t,n,r,o;for(n=[],o=0,r=L.exec(e);r;)(t=e.slice(o,L.lastIndex-r[0].length)).length&&n.push(t),n.push(G(r)),o=L.lastIndex,r=L.exec(e);return(t=e.slice(o)).length&&n.push(t),n}function J(e){return"string"==typeof e}function $(e){var t,n,r;if(!J(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=R(e),(n=new Array(arguments.length))[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return B.apply(null,n)}var H,K=Object.prototype,U=K.toString,X=K.__defineGetter__,Z=K.__defineSetter__,z=K.__lookupGetter__,q=K.__lookupSetter__;H=function(){try{return v({},"x",{}),!0}catch(e){return!1}}()?w:function(e,t,n){var r,o,l,i;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===U.call(n))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(z.call(e,t)||q.call(e,t)?(r=e.__proto__,e.__proto__=K,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),l="get"in n,i="set"in n,o&&(l||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&X&&X.call(e,t,n.get),i&&Z&&Z.call(e,t,n.set),e};var Q=H;function ee(e,t,n){Q(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function te(e){return"string"==typeof e}var ne=String.prototype.valueOf,re=r();function oe(e){return"object"==typeof e&&(e instanceof String||(re?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===s(e)))}function le(e){return te(e)||oe(e)}function ie(e){return"number"==typeof e}ee(le,"isPrimitive",te),ee(le,"isObject",oe);var ae=Number,ue=ae.prototype.toString,he=r();function se(e){return"object"==typeof e&&(e instanceof ae||(he?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object Number]"===s(e)))}function ce(e){return ie(e)||se(e)}function de(e){return e!=e}function ve(e){return ie(e)&&de(e)}function we(e){return se(e)&&de(e.valueOf())}function fe(e){return ve(e)||we(e)}ee(ce,"isPrimitive",ie),ee(ce,"isObject",se),ee(fe,"isPrimitive",ve),ee(fe,"isObject",we);var pe=Number.POSITIVE_INFINITY,ye=ae.NEGATIVE_INFINITY,ge=Math.floor;function me(e){return ge(e)===e}function be(e){return e<pe&&e>ye&&me(e)}function Ie(e){return ie(e)&&be(e)}function Se(e){return se(e)&&be(e.valueOf())}function Ee(e){return Ie(e)||Se(e)}ee(Ee,"isPrimitive",Ie),ee(Ee,"isObject",Se);var Te=Object.prototype.propertyIsEnumerable,_e=!Te.call("beep","0");function Ce(e,t){var n;return null!=e&&(!(n=Te.call(e,t))&&_e&&le(e)?!ve(t=+t)&&Ie(t)&&t>=0&&t<e.length:n)}var Ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===s(e)},je=d?c:function(e){return null!==e&&"object"==typeof e&&!Ae(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&i(e,"callee")&&!Ce(e,"callee")},Oe=Array.prototype.slice;function Me(e){return null!==e&&"object"==typeof e}ee(Me,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var n,r;if(!Ae(t))return!1;if(0===(n=t.length))return!1;for(r=0;r<n;r++)if(!1===e(t[r]))return!1;return!0}}(Me));var De=Ce((function(){}),"prototype"),ke=!Ce({toString:null},"toString");function Ne(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ve(e,t,n){var r,o;if(!Ne(e)&&!te(e))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(r=e.length))return-1;if(3===arguments.length){if(!Ie(n))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(fe(t)){for(;o<r;o++)if(fe(e[o]))return o}else for(;o<r;o++)if(e[o]===t)return o;return-1}var Pe=/./;function xe(e){return"boolean"==typeof e}var Ye=Boolean,Fe=Boolean.prototype.toString,We=r();function Be(e){return"object"==typeof e&&(e instanceof Ye||(We?function(e){try{return Fe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===s(e)))}function Le(e){return xe(e)||Be(e)}function Ge(){return new Function("return this;")()}ee(Le,"isPrimitive",xe),ee(Le,"isObject",Be);var Re="object"==typeof self?self:null,Je="object"==typeof window?window:null,$e="object"==typeof globalThis?globalThis:null,He=function(e){if(arguments.length){if(!xe(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ge()}if($e)return $e;if(Re)return Re;if(Je)return Je;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=He.document&&He.document.childNodes,Ue=Int8Array;function Xe(){return/^\s*function\s*([^(]*)/i}var Ze=/^\s*function\s*([^(]*)/i;function ze(e){var t,n,r,o;if(("Object"===(n=s(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(r=e.constructor).name)return r.name;if(t=Ze.exec(r.toString()))return t[1]}return Me(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}ee(Xe,"REGEXP",Ze);var qe="function"==typeof Pe||"object"==typeof Ue||"function"==typeof Ke?function(e){return ze(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"==(t=typeof e)?ze(e).toLowerCase():t};function Qe(e){return e.constructor&&e.constructor.prototype===e}var et,tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nt="undefined"==typeof window?void 0:window,rt=function(){var e;if("undefined"===qe(nt))return!1;for(e in nt)try{-1===Ve(tt,e)&&i(nt,e)&&null!==nt[e]&&"object"===qe(nt[e])&&Qe(nt[e])}catch(e){return!0}return!1}(),ot="undefined"!=typeof window,lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function it(e){var t;return!(!te(e)||""===e)&&(t=e[0])===function(e){if(!te(e))throw new TypeError($("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}(t)&&t!==function(e){if(!te(e))throw new TypeError($("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}(t)}function at(e){if(!te(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));return function(e){return""===e?"":e.charAt(0).toLowerCase()+e.slice(1)}(e)}function ut(e){if(!te(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));return function(e){return""===e?"":e.charAt(0).toUpperCase()+e.slice(1)}(e)}et=t?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return je(t)?e(Oe.call(t)):e(t)}:e:function(e){var t,n,r,o,l,a,u;if(o=[],je(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!i(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(r="function"==typeof e)&&!Me(e))return o;n=De&&r}for(l in e)n&&"prototype"===l||!i(e,l)||o.push(String(l));if(ke)for(t=function(e){if(!1===ot&&!rt)return Qe(e);try{return Qe(e)}catch(e){return!1}}(e),u=0;u<lt.length;u++)a=lt[u],t&&"constructor"===a||!i(e,a)||o.push(String(a));return o};var ht={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},st={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ct={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},dt=/^([,([{*<"“'`‘]|\.{1,3})/gi,vt=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function wt(e,t){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e}function ft(e){var t,n,r,o=[],l=[];do{st[e]||ht[e]||ct[e]?n=!0:(t=e.split(dt)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(vt)).length>1?(e=t[0],l.unshift(t[1])):n=!0}while(!n);return r=o,e&&r.push(e),"..."===l[l.length-1]&&(l.pop(),l.unshift("...")),wt(r,l),r}var pt={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},yt=et(pt);return function(e){var t,n,r,o,l,a;if(!te(e))throw new TypeError(function(){var e,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}("0kT3B,IL",e));for(r="",t=function(e,t){var n,r,o,l,a,u;if(!te(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!xe(t))throw new TypeError($("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(r=t?e.split(/(\s+)/):e.split(/\s+/),a={},o=[],u=0;u<r.length;u++)i(a,l=r[u])?wt(o,a[l]):(wt(o,n=ft(l)),a[l]=n);return o}(e,!0),l=0;l<t.length;l++){if(it(n=t[l])){for(a=0;a<yt.length;a++)if(o=yt[a],at(n)===o){n=ut(pt[o]);break}}else for(a=0;a<yt.length;a++)if(n===(o=yt[a])){n=pt[o];break}r+=n}return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).expandContractions=t();
//# sourceMappingURL=browser.js.map