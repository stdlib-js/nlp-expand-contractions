// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).expandContractions=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var t=function(e){return Object.keys(Object(e))},r=t;var n=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return o&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,u=l;var h=function(e){return u.call(e)},s=Object.prototype.hasOwnProperty;var v=function(e,t){return null!=e&&s.call(e,t)},d="function"==typeof Symbol?Symbol.toStringTag:"",c=v,w=d,f=l;var p=h,g=function(e){var t,r,n;if(null==e)return f.call(e);r=e[w],t=c(e,w);try{e[w]=void 0}catch(t){return f.call(e)}return n=f.call(e),t?e[w]=r:delete e[w],n},y=a()?g:p,m=y;var b,P=function(e){return"[object Arguments]"===m(e)},E=P;b=function(){return E(arguments)}();var T=b,I="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return I({},"x",{}),!0}catch(e){return!1}},_=Object.defineProperty,j=Object.prototype,O=j.toString,M=j.__defineGetter__,A=j.__defineSetter__,C=j.__lookupGetter__,V=j.__lookupSetter__;var x=function(e,t,r){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(C.call(e,t)||V.call(e,t)?(n=e.__proto__,e.__proto__=j,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,t,r.get),a&&A&&A.call(e,t,r.set),e},D=_,k=x,N=S()?D:k;var Y=function(e,t,r){N(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},F=Y;var W=function(e){return"string"==typeof e},R=String.prototype.valueOf;var B=y,G=function(e){try{return R.call(e),!0}catch(e){return!1}},L=a();var $=function(e){return"object"==typeof e&&(e instanceof String||(L?G(e):"[object String]"===B(e)))},J=W,H=$;var K=F,X=function(e){return J(e)||H(e)},Z=$;K(X,"isPrimitive",W),K(X,"isObject",Z);var z=X;var U=function(e){return"number"==typeof e},q=Number,Q=q.prototype.toString;var ee=y,te=q,re=function(e){try{return Q.call(e),!0}catch(e){return!1}},ne=a();var ie=function(e){return"object"==typeof e&&(e instanceof te||(ne?re(e):"[object Number]"===ee(e)))},oe=U,ae=ie;var le=F,ue=function(e){return oe(e)||ae(e)},he=ie;le(ue,"isPrimitive",U),le(ue,"isObject",he);var se=ue;var ve=function(e){return e!=e},de=se.isPrimitive,ce=ve;var we=function(e){return de(e)&&ce(e)},fe=se.isObject,pe=ve;var ge=function(e){return fe(e)&&pe(e.valueOf())},ye=we,me=ge;var be=F,Pe=function(e){return ye(e)||me(e)},Ee=ge;be(Pe,"isPrimitive",we),be(Pe,"isObject",Ee);var Te=Pe,Ie=Number.POSITIVE_INFINITY,Se=q.NEGATIVE_INFINITY,_e=Math.floor;var je=function(e){return _e(e)===e},Oe=Ie,Me=Se,Ae=je;var Ce=function(e){return e<Oe&&e>Me&&Ae(e)},Ve=se.isPrimitive,xe=Ce;var De=function(e){return Ve(e)&&xe(e)},ke=se.isObject,Ne=Ce;var Ye=function(e){return ke(e)&&Ne(e.valueOf())},Fe=De,We=Ye;var Re=F,Be=function(e){return Fe(e)||We(e)},Ge=Ye;Re(Be,"isPrimitive",De),Re(Be,"isObject",Ge);var Le,$e=Be,Je=Object.prototype.propertyIsEnumerable;Le=!Je.call("beep","0");var He=z,Ke=Te.isPrimitive,Xe=$e.isPrimitive,Ze=Je,ze=Le;var Ue=function(e,t){var r;return null!=e&&(!(r=Ze.call(e,t))&&ze&&He(e)?!Ke(t=+t)&&Xe(t)&&t>=0&&t<e.length:r)},qe=Ue,Qe=y;var et=Array.isArray?Array.isArray:function(e){return"[object Array]"===Qe(e)},tt=v,rt=qe,nt=et,it=je;var ot=T?P:function(e){return null!==e&&"object"==typeof e&&!nt(e)&&"number"==typeof e.length&&it(e.length)&&e.length>=0&&e.length<=4294967295&&tt(e,"callee")&&!rt(e,"callee")},at=ot,lt=t,ut=Array.prototype.slice;var ht=function(e){return at(e)?lt(ut.call(e)):lt(e)},st=et;var vt=function(e){return null!==e&&"object"==typeof e};F(vt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!st(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(vt));var dt=vt;var ct=qe((function(){}),"prototype"),wt=!qe({toString:null},"toString"),ft=je;var pt=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ft(e.length)&&e.length>=0&&e.length<=9007199254740991},gt=Te,yt=pt,mt=z.isPrimitive,bt=$e.isPrimitive;var Pt=function(e,t,r){var n,i;if(!yt(e)&&!mt(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!bt(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(gt(t)){for(;i<n;i++)if(gt(e[i]))return i}else for(;i<n;i++)if(e[i]===t)return i;return-1},Et=Pt,Tt=/./;var It=function(e){return"boolean"==typeof e},St=Boolean.prototype.toString;var _t=y,jt=function(e){try{return St.call(e),!0}catch(e){return!1}},Ot=a();var Mt=function(e){return"object"==typeof e&&(e instanceof Boolean||(Ot?jt(e):"[object Boolean]"===_t(e)))},At=It,Ct=Mt;var Vt=F,xt=function(e){return At(e)||Ct(e)},Dt=Mt;Vt(xt,"isPrimitive",It),Vt(xt,"isObject",Dt);var kt=xt;var Nt=function(){return new Function("return this;")()},Yt="object"==typeof self?self:null,Ft="object"==typeof window?window:null,Wt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Rt="object"==typeof Wt?Wt:null;module.exports=Rt;var Bt=kt.isPrimitive,Gt=Nt,Lt=Yt,$t=Ft,Jt=e(Object.freeze({__proto__:null}));var Ht=function(e){if(arguments.length){if(!Bt(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Gt()}if(Lt)return Lt;if($t)return $t;if(Jt)return Jt;throw new Error("unexpected error. Unable to resolve global object.")},Kt=Ht(),Xt=Kt.document&&Kt.document.childNodes,Zt=Int8Array,zt=Tt,Ut=Xt,qt=Zt;var Qt=function(){return"function"==typeof zt||"object"==typeof qt||"function"==typeof Ut};var er=function(){return/^\s*function\s*([^(]*)/i},tr=er;F(tr,"REGEXP",er());var rr=dt;var nr=y,ir=tr.REGEXP,or=function(e){return rr(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var ar=function(e){var t,r,n;if(("Object"===(r=nr(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=ir.exec(n.toString()))return t[1]}return or(e)?"Buffer":r},lr=ar;var ur=ar;var hr=function(e){var t;return null===e?"null":"object"===(t=typeof e)?lr(e).toLowerCase():t},sr=function(e){return ur(e).toLowerCase()},vr=Qt()?sr:hr;var dr,cr=function(e){return e.constructor&&e.constructor.prototype===e},wr="undefined"==typeof window?void 0:window,fr=v,pr=Et,gr=vr,yr=cr,mr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],br=wr;dr=function(){var e;if("undefined"===gr(br))return!1;for(e in br)try{-1===pr(mr,e)&&fr(br,e)&&null!==br[e]&&"object"===gr(br[e])&&yr(br[e])}catch(e){return!0}return!1}();var Pr="undefined"!=typeof window,Er=dr,Tr=cr,Ir=Pr;var Sr=dt,_r=v,jr=ot,Or=ct,Mr=wt,Ar=function(e){if(!1===Ir&&!Er)return Tr(e);try{return Tr(e)}catch(e){return!1}},Cr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Vr=t,xr=ht,Dr=function(e){var t,r,n,i,o,a,l;if(i=[],jr(e)){for(l=0;l<e.length;l++)i.push(l.toString());return i}if("string"==typeof e){if(e.length>0&&!_r(e,"0"))for(l=0;l<e.length;l++)i.push(l.toString())}else{if(!1===(n="function"==typeof e)&&!Sr(e))return i;r=Or&&n}for(o in e)r&&"prototype"===o||!_r(e,o)||i.push(String(o));if(Mr)for(t=Ar(e),l=0;l<Cr.length;l++)a=Cr[l],t&&"constructor"===a||!_r(e,a)||i.push(String(a));return i},kr=i?n()?xr:Vr:Dr,Nr=z.isPrimitive;var Yr=function(e){if(!Nr(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toLowerCase()},Fr=z.isPrimitive;var Wr=function(e){if(!Fr(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toUpperCase()},Rr=Yr,Br=Wr,Gr=z.isPrimitive;var Lr=function(e){var t;return!(!Gr(e)||""===e)&&((t=e[0])===Br(t)&&t!==Rr(t))},$r=z.isPrimitive;var Jr=function(e){if(!$r(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");return""===e?"":e.charAt(0).toLowerCase()+e.slice(1)},Hr=z.isPrimitive;var Kr=function(e){if(!Hr(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");return""===e?"":e.charAt(0).toUpperCase()+e.slice(1)},Xr=kt.isPrimitive,Zr=z.isPrimitive,zr=v,Ur={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},qr={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},Qr={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},en=/^([,([{*<"“'`‘.])/gi,tn=/([,.!?%*>:;"'”`)\]}])$/gi;function rn(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function nn(e){var t,r,n,i=[],o=[];do{qr[e]||Ur[e]||Qr[e]?r=!0:(t=e.split(en)).length>1?(i.push(t[1]),e=t[2]):(t=e.split(tn)).length>1?(e=t[0],o.push(t[1])):r=!0}while(!r);return(n=i).push(e),rn(n,o),n}var on=function(e,t){var r,n,i,o,a,l;if(!Zr(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>1&&!Xr(t))throw new TypeError("invalid argument. Second argument must be a boolean primitive. Value: `"+t+"`.");if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),a={},i=[],l=0;l<n.length;l++)o=n[l],zr(a,o)?rn(i,a[o]):(rn(i,r=nn(o)),a[o]=r);return i},an=on,ln=pt,un=$e.isPrimitive,hn=z.isPrimitive,sn=Te.isPrimitive;var vn=function(e,t,r){var n,i,o;if(!ln(e)&&!hn(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!un(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(i=r)<0&&(i=0)}else i=0;if(hn(e)){if(!hn(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==e.indexOf(t,i)}if(n=e.length,sn(t)){for(o=i;o<n;o++)if(sn(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===t)return!0;return!1},dn=vn,cn=Yr,wn=Wr,fn=z.isPrimitive;var pn=function(e){return fn(e)&&e===wn(e)&&e!==cn(e)},gn=Ie,yn=Se;var mn=function(e){return e==e&&e>yn&&e<gn},bn=$e.isPrimitive;var Pn=function(e){return bn(e)&&e>=0},En=$e.isObject;var Tn=function(e){return En(e)&&e.valueOf()>=0},In=Pn,Sn=Tn;var _n=F,jn=function(e){return In(e)||Sn(e)},On=Tn;_n(jn,"isPrimitive",Pn),_n(jn,"isObject",On);var Mn=jn.isPrimitive,An=z.isPrimitive;var Cn=function(e,t){var r,n;if(!An(e))throw new TypeError("invalid argument. First argument must be a string. Value: `"+e+"`.");if(!Mn(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===e.length||0===t)return"";if(e.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",n=t;1==(1&n)&&(r+=e),0!==(n>>>=1);)e+=e;return r},Vn=$e.isPrimitive,xn=z.isPrimitive;var Dn=function(e,t,r){var n,i;if(!xn(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(!xn(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!Vn(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");n=r<0?e.length+r:r}else n=0;if(0===t.length)return!0;if(n<0||n+t.length>e.length)return!1;for(i=0;i<t.length;i++)if(e.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0},kn=Cn,Nn=Dn;var Yn=function(e,t,r){var n=!1,i=t-e.length;return i<0||(Nn(e,"-")&&(n=!0,e=e.substr(1)),e=r?e+kn("0",i):kn("0",i)+e,n&&(e="-"+e)),e},Fn=pn,Wn=Wr,Rn=Yr,Bn=mn,Gn=se.isPrimitive,Ln=Yn;var $n=function(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,n=parseInt(r,10),!Bn(n)){if(!Gn(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===e.specifier||10!==t)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=Ln(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),n||e.precision?e.precision&&(r=Ln(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=Fn(e.specifier)?Wn(r):Rn(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r},Jn=z.isPrimitive,Hn=/[-\/\\^$*+?.()|[\]{}]/g;var Kn=function(e){var t,r;if(!Jn(e))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+e+"`.");if("/"===e[0])for(r=e.length-1;r>=0&&"/"!==e[r];r--);return void 0===r||r<=0?e.replace(Hn,"\\$&"):(t=(t=e.substring(1,r)).replace(Hn,"\\$&"),e=e[0]+t+e.substring(r))},Xn=vr;var Zn=function(e){return"function"===Xn(e)},zn=RegExp.prototype.exec;var Un=y,qn=function(e){try{return zn.call(e),!0}catch(e){return!1}},Qn=a();var ei=Kn,ti=Zn,ri=z.isPrimitive,ni=function(e){return"object"==typeof e&&(e instanceof RegExp||(Qn?qn(e):"[object RegExp]"===Un(e)))};var ii=pn,oi=Wr,ai=Yr,li=function(e,t,r){if(!ri(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(ri(t))t=ei(t),t=new RegExp(t,"g");else if(!ni(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!ri(r)&&!ti(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return e.replace(t,r)},ui=mn,hi=se.isPrimitive,si=function(e){return Math.abs(e)},vi=/e\+(\d)$/,di=/e-(\d)$/,ci=/^(\d+)$/,wi=/^(\d+)e/,fi=/\.0$/,pi=/\.0*e/,gi=/(\..*[^0])0*e/;var yi=function(e){var t,r,n=parseFloat(e.arg);if(!ui(n)){if(!hi(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":si(n)<1e-4?((t=e.precision)>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=li(r,gi,"$1e"),r=li(r,pi,"e"),r=li(r,fi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=li(r,vi,"e+0$1"),r=li(r,di,"e-0$1"),e.alternate&&(r=li(r,ci,"$1."),r=li(r,wi,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=ii(e.specifier)?oi(r):ai(r)},mi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var bi=Cn;var Pi=z.isPrimitive,Ei=dn,Ti=ve,Ii=$n,Si=yi,_i=function(e){var t,r,n,i,o;for(t=0,n=[],o=mi.exec(e);o;)(r=e.slice(t,mi.lastIndex-o[0].length)).length&&n.push(r),(i=a(o,n.length))&&n.push(i),t=mi.lastIndex,o=mi.exec(e);return(r=e.slice(t)).length&&n.push(r),n;function a(e){return{mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],hasPeriod:"."===e[4],precision:e[5],specifier:e[6]}}},ji=function(e,t,r){var n=t-e.length;return n<0?e:e=r?e+bi(" ",n):bi(" ",n)+e},Oi=Yn,Mi=String.fromCharCode;var Ai=function(e){var t,r,n,i,o,a,l,u,h;if(!Pi(e))throw new TypeError("invalid argument. Must provide a string. Value: `"+e+"`.");for(t=_i(e),a="",l=1,u=0;u<t.length;u++)if(n=t[u],Pi(n))a+=n;else{for(n.mapping&&(l=n.mapping),r=n.flags,h=0;h<r.length;h++)switch(i=r.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ei(r,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,Ti(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[l],10),l+=1,Ti(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Ii(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ti(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ti(o)?String(n.arg):Mi(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Si(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Oi(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ji(n.arg,n.width,n.padRight)),a+=n.arg||"",l+=1}return a},Ci=Lr,Vi=Jr,xi=Kr,Di=an,ki=z.isPrimitive,Ni=Ai,Yi={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},Fi=kr(Yi);return function(e){var t,r,n,i,o,a;if(!ki(e))throw new TypeError(Ni("invalid argument. Must provide a string. Value: `%s`.",e));for(n="",t=Di(e,!0),o=0;o<t.length;o++){if(r=t[o],Ci(r)){for(a=0;a<Fi.length;a++)if(i=Fi[a],Vi(r)===i){r=xi(Yi[i]);break}}else for(a=0;a<Fi.length;a++)if(r===(i=Fi[a])){r=Yi[i];break}n+=r}return n}}));
//# sourceMappingURL=bundle.js.map
