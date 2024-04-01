// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){return Object.keys(Object(e))}var t=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;function a(e,t){return null!=e&&l.call(e,t)}var i="function"==typeof Symbol?Symbol:void 0,u="function"==typeof i?i.toStringTag:"";var h=r()?function(e){var t,n,r;if(null==e)return o.call(e);n=e[u],t=a(e,u);try{e[u]=void 0}catch(t){return o.call(e)}return r=o.call(e),t?e[u]=n:delete e[u],r}:function(e){return o.call(e)};function s(e){return"[object Arguments]"===h(e)}var c=function(){return s(arguments)}(),d="function"==typeof Object.defineProperty?Object.defineProperty:null;var v=Object.defineProperty;function w(e){return"number"==typeof e}function f(e){var t,n="";for(t=0;t<e;t++)n+="0";return n}function p(e,t,n){var r=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(r=!0,e=e.substr(1)),e=n?e+f(o):f(o)+e,r&&(e="-"+e)),e}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!w(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===e.specifier||10!==t)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=p(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),r||e.precision?e.precision&&(n=p(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===g.call(e.specifier)?g.call(n):y.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var b=Math.abs,I=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,C=/^(\d+)$/,j=/^(\d+)e/,A=/\.0$/,O=/\.0*e/,M=/(\..*[^0])0*e/;function D(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!w(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":b(r)<1e-4?((t=e.precision)>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=E.call(n,M,"$1e"),n=E.call(n,O,"e"),n=E.call(n,A,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=E.call(n,_,"e+0$1"),n=E.call(n,T,"e-0$1"),e.alternate&&(n=E.call(n,C,"$1."),n=E.call(n,j,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===S.call(e.specifier)?S.call(n):I.call(n)}function k(e){var t,n="";for(t=0;t<e;t++)n+=" ";return n}var N=String.fromCharCode,V=isNaN,P=Array.isArray;function x(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function Y(e){var t,n,r,o,l,a,i,u,h,s,c,d,v;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",i=1,u=0;u<e.length;u++)if(r=e[u],"string"==typeof r)a+=r;else{if(t=void 0!==r.precision,!(r=x(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+r+"`.");for(r.mapping&&(i=r.mapping),n=r.flags,h=0;h<n.length;h++)switch(o=n.charAt(h)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[i],10),i+=1,V(r.width))throw new TypeError("the argument for * width at position "+i+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[i],10),i+=1,V(r.precision))throw new TypeError("the argument for * precision at position "+i+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[i],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=m(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!V(r.arg)){if((l=parseInt(r.arg,10))<0||l>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=V(l)?String(r.arg):N(l)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=D(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=p(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(s=r.arg,c=r.width,d=r.padRight,v=void 0,(v=c-s.length)<0?s:s=d?s+k(v):k(v)+s)),a+=r.arg||"",i+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function B(e){var t,n,r,o;for(n=[],o=0,r=F.exec(e);r;)(t=e.slice(o,F.lastIndex-r[0].length)).length&&n.push(t),n.push(W(r)),o=F.lastIndex,r=F.exec(e);return(t=e.slice(o)).length&&n.push(t),n}function L(e){var t,n;if("string"!=typeof e)throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[B(e)],n=1;n<arguments.length;n++)t.push(arguments[n]);return Y.apply(null,t)}var G,R=Object.prototype,J=R.toString,$=R.__defineGetter__,H=R.__defineSetter__,K=R.__lookupGetter__,U=R.__lookupSetter__;G=function(){try{return d({},"x",{}),!0}catch(e){return!1}}()?v:function(e,t,n){var r,o,l,a;if("object"!=typeof e||null===e||"[object Array]"===J.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===J.call(n))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(K.call(e,t)||U.call(e,t)?(r=e.__proto__,e.__proto__=R,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),l="get"in n,a="set"in n,o&&(l||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&$&&$.call(e,t,n.get),a&&H&&H.call(e,t,n.set),e};var X=G;function Z(e,t,n){X(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(e){return"string"==typeof e}var q=String.prototype.valueOf;var Q=r();function ee(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===h(e)))}function te(e){return z(e)||ee(e)}function ne(e){return"number"==typeof e}Z(te,"isPrimitive",z),Z(te,"isObject",ee);var re=Number,oe=re.prototype.toString;var le=r();function ae(e){return"object"==typeof e&&(e instanceof re||(le?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===h(e)))}function ie(e){return ne(e)||ae(e)}function ue(e){return e!=e}function he(e){return ne(e)&&ue(e)}function se(e){return ae(e)&&ue(e.valueOf())}function ce(e){return he(e)||se(e)}Z(ie,"isPrimitive",ne),Z(ie,"isObject",ae),Z(ce,"isPrimitive",he),Z(ce,"isObject",se);var de=Number.POSITIVE_INFINITY,ve=re.NEGATIVE_INFINITY,we=Math.floor;function fe(e){return we(e)===e}function pe(e){return e<de&&e>ve&&fe(e)}function ye(e){return ne(e)&&pe(e)}function ge(e){return ae(e)&&pe(e.valueOf())}function me(e){return ye(e)||ge(e)}Z(me,"isPrimitive",ye),Z(me,"isObject",ge);var be=Object.prototype.propertyIsEnumerable;var Ie=!be.call("beep","0");function Se(e,t){var n;return null!=e&&(!(n=be.call(e,t))&&Ie&&te(e)?!he(t=+t)&&ye(t)&&t>=0&&t<e.length:n)}var Ee=Array.isArray?Array.isArray:function(e){return"[object Array]"===h(e)};var _e=c?s:function(e){return null!==e&&"object"==typeof e&&!Ee(e)&&"number"==typeof e.length&&fe(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!Se(e,"callee")},Te=Array.prototype.slice;function Ce(e){return null!==e&&"object"==typeof e}Z(Ce,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var n,r;if(!Ee(t))return!1;if(0===(n=t.length))return!1;for(r=0;r<n;r++)if(!1===e(t[r]))return!1;return!0}}(Ce));var je=Se((function(){}),"prototype"),Ae=!Se({toString:null},"toString"),Oe=9007199254740991;function Me(e,t,n){var r,o,l;if(!(l=e,"object"==typeof l&&null!==l&&"number"==typeof l.length&&fe(l.length)&&l.length>=0&&l.length<=Oe||z(e)))throw new TypeError(L("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(r=e.length))return-1;if(3===arguments.length){if(!ye(n))throw new TypeError(L("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(ce(t)){for(;o<r;o++)if(ce(e[o]))return o}else for(;o<r;o++)if(e[o]===t)return o;return-1}var De=/./;function ke(e){return"boolean"==typeof e}var Ne=Boolean,Ve=Boolean.prototype.toString;var Pe=r();function xe(e){return"object"==typeof e&&(e instanceof Ne||(Pe?function(e){try{return Ve.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===h(e)))}function Ye(e){return ke(e)||xe(e)}Z(Ye,"isPrimitive",ke),Z(Ye,"isObject",xe);var Fe="object"==typeof self?self:null,We="object"==typeof window?window:null,Be="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Le="object"==typeof Be?Be:null,Ge="object"==typeof globalThis?globalThis:null;var Re=function(e){if(arguments.length){if(!ke(e))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ge)return Ge;if(Fe)return Fe;if(We)return We;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Je=Re.document&&Re.document.childNodes,$e=Int8Array;function He(){return/^\s*function\s*([^(]*)/i}var Ke=/^\s*function\s*([^(]*)/i;function Ue(e){var t,n,r,o;if(("Object"===(n=h(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(r=e.constructor).name)return r.name;if(t=Ke.exec(r.toString()))return t[1]}return Ce(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Z(He,"REGEXP",Ke);var Xe="function"==typeof De||"object"==typeof $e||"function"==typeof Je?function(e){return Ue(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?Ue(e).toLowerCase():t};function Ze(e){return e.constructor&&e.constructor.prototype===e}var ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],qe="undefined"==typeof window?void 0:window;var Qe=function(){var e;if("undefined"===Xe(qe))return!1;for(e in qe)try{-1===Me(ze,e)&&a(qe,e)&&null!==qe[e]&&"object"===Xe(qe[e])&&Ze(qe[e])}catch(e){return!0}return!1}(),et="undefined"!=typeof window;var tt,nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function rt(e){var t;return!(!z(e)||""===e)&&((t=e[0])===function(e){if(!z(e))throw new TypeError(L("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}(t)&&t!==function(e){if(!z(e))throw new TypeError(L("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}(t))}function ot(e){if(!z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));return function(e){return""===e?"":e.charAt(0).toLowerCase()+e.slice(1)}(e)}function lt(e){if(!z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));return function(e){return""===e?"":e.charAt(0).toUpperCase()+e.slice(1)}(e)}tt=t?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return _e(t)?e(Te.call(t)):e(t)}:e:function(e){var t,n,r,o,l,i,u;if(o=[],_e(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(r="function"==typeof e)&&!Ce(e))return o;n=je&&r}for(l in e)n&&"prototype"===l||!a(e,l)||o.push(String(l));if(Ae)for(t=function(e){if(!1===et&&!Qe)return Ze(e);try{return Ze(e)}catch(e){return!1}}(e),u=0;u<nt.length;u++)i=nt[u],t&&"constructor"===i||!a(e,i)||o.push(String(i));return o};var at={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},it={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ut={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},ht=/^([,([{*<"“'`‘]|\.{1,3})/gi,st=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function ct(e,t){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e}function dt(e){var t,n,r,o=[],l=[];do{it[e]||at[e]||ut[e]?n=!0:(t=e.split(ht)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(st)).length>1?(e=t[0],l.unshift(t[1])):n=!0}while(!n);return r=o,e&&r.push(e),"..."===l[l.length-1]&&(l.pop(),l.unshift("...")),ct(r,l),r}var vt={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},wt=tt(vt);function ft(e){var t,n,r,o,l,i;if(!z(e))throw new TypeError(function(){var e,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}("0kT3B",e));for(r="",t=function(e,t){var n,r,o,l,i,u;if(!z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!ke(t))throw new TypeError(L("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(r=t?e.split(/(\s+)/):e.split(/\s+/),i={},o=[],u=0;u<r.length;u++)a(i,l=r[u])?ct(o,i[l]):(ct(o,n=dt(l)),i[l]=n);return o}(e,!0),l=0;l<t.length;l++){if(rt(n=t[l])){for(i=0;i<wt.length;i++)if(o=wt[i],ot(n)===o){n=lt(vt[o]);break}}else for(i=0;i<wt.length;i++)if(n===(o=wt[i])){n=vt[o];break}r+=n}return r}export{ft as default};
//# sourceMappingURL=mod.js.map