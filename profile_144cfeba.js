!function(e,r){for(var n in r)e[n]=r[n]}(window,function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="https://assets.allegrostatic.com/opbox-advertisement-box/",n(n.s=0)}({0:function(e,r,n){e.exports=n("Nu4C")},Nu4C:function(e,r,n){window.oba={},function(e){"use strict";var r,n,t,o;function i(e,r){this.highOrder=e,this.lowOrder=r}function a(e,r,n,t){var o,i,a,h="",s=r/8;for(a=-1===n?3:0,o=0;o<s;o+=1)i=e[o>>>2]>>>8*(a+n*(o%4)),h+="0123456789abcdef".charAt(i>>>4&15)+"0123456789abcdef".charAt(15&i);return t.outputUpper?h.toUpperCase():h}function h(e,r,n,t){var o,i,a,h,s,u,w="",d=r/8;for(u=-1===n?3:0,o=0;o<d;o+=3)for(h=o+1<d?e[o+1>>>2]:0,s=o+2<d?e[o+2>>>2]:0,a=(e[o>>>2]>>>8*(u+n*(o%4))&255)<<16|(h>>>8*(u+n*((o+1)%4))&255)<<8|s>>>8*(u+n*((o+2)%4))&255,i=0;i<4;i+=1)w+=8*o+6*i<=r?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>6*(3-i)&63):t.b64Pad;return w}function s(e,r,n){var t,o,i,a="",h=r/8;for(i=-1===n?3:0,t=0;t<h;t+=1)o=e[t>>>2]>>>8*(i+n*(t%4))&255,a+=String.fromCharCode(o);return a}function u(e,r,n){var t,o,i,a=r/8,h=new ArrayBuffer(a);for(i=new Uint8Array(h),o=-1===n?3:0,t=0;t<a;t+=1)i[t]=e[t>>>2]>>>8*(o+n*(t%4))&255;return h}function w(e){var r,n={outputUpper:!1,b64Pad:"=",shakeLen:-1};if(r=e||{},n.outputUpper=r.outputUpper||!1,!0===r.hasOwnProperty("b64Pad")&&(n.b64Pad=r.b64Pad),!0===r.hasOwnProperty("shakeLen")){if(r.shakeLen%8!=0)throw new Error("shakeLen must be a multiple of 8");n.shakeLen=r.shakeLen}if("boolean"!=typeof n.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof n.b64Pad)throw new Error("Invalid b64Pad formatting option");return n}function d(e,r,n){var t;switch(r){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(e){case"HEX":t=function(e,r,t){return function(e,r,n,t){var o,i,a,h,s,u,w,d=e.length;if(0!=d%2)throw new Error("String of HEX type must be in byte increments");for(o=r||[0],u=(n=n||0)>>>3,w=-1===t?3:0,i=0;i<d;i+=2){if(a=parseInt(e.substr(i,2),16),isNaN(a))throw new Error("String of HEX type contains invalid characters");for(h=(s=(i>>>1)+u)>>>2;o.length<=h;)o.push(0);o[h]|=a<<8*(w+t*(s%4))}return{value:o,binLen:4*d+n}}(e,r,t,n)};break;case"TEXT":t=function(e,t,o){return function(e,r,n,t,o){var i,a,h,s,u,w,d,f,l,c,O=0;if(i=n||[0],w=(t=t||0)>>>3,"UTF8"===r)for(l=-1===o?3:0,s=0;s<e.length;s+=1)for(h=[],128>(a=e.charCodeAt(s))?h.push(a):2048>a?(h.push(192|a>>>6),h.push(128|63&a)):55296>a||57344<=a?h.push(224|a>>>12,128|a>>>6&63,128|63&a):(s+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(s)),h.push(240|a>>>18,128|a>>>12&63,128|a>>>6&63,128|63&a)),u=0;u<h.length;u+=1){for(d=(f=O+w)>>>2;i.length<=d;)i.push(0);i[d]|=h[u]<<8*(l+o*(f%4)),O+=1}else if("UTF16BE"===r||"UTF16LE"===r)for(l=-1===o?2:0,c="UTF16LE"===r&&1!==o||"UTF16LE"!==r&&1===o,s=0;s<e.length;s+=1){for(a=e.charCodeAt(s),!0===c&&(a=(u=255&a)<<8|a>>>8),d=(f=O+w)>>>2;i.length<=d;)i.push(0);i[d]|=a<<8*(l+o*(f%4)),O+=2}return{value:i,binLen:8*O+t}}(e,r,t,o,n)};break;case"B64":t=function(e,r,t){return function(e,r,n,t){var o,i,a,h,s,u,w,d,f,l,c=0;if(-1===e.search(/^[a-zA-Z0-9=+\/]+$/))throw new Error("Invalid character in base-64 string");if(u=e.indexOf("="),e=e.replace(/\=/g,""),-1!==u&&u<e.length)throw new Error("Invalid '=' found in base-64 string");for(o=r||[0],w=(n=n||0)>>>3,l=-1===t?3:0,i=0;i<e.length;i+=4){for(s=e.substr(i,4),h=0,a=0;a<s.length;a+=1)h|="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(s[a])<<18-6*a;for(a=0;a<s.length-1;a+=1){for(d=(f=c+w)>>>2;o.length<=d;)o.push(0);o[d]|=(h>>>16-8*a&255)<<8*(l+t*(f%4)),c+=1}}return{value:o,binLen:8*c+n}}(e,r,t,n)};break;case"BYTES":t=function(e,r,t){return function(e,r,n,t){var o,i,a,h,s,u,w;for(o=r||[0],h=(n=n||0)>>>3,w=-1===t?3:0,a=0;a<e.length;a+=1)i=e.charCodeAt(a),s=(u=a+h)>>>2,o.length<=s&&o.push(0),o[s]|=i<<8*(w+t*(u%4));return{value:o,binLen:8*e.length+n}}(e,r,t,n)};break;case"ARRAYBUFFER":try{t=new ArrayBuffer(0)}catch(e){throw new Error("ARRAYBUFFER not supported by this environment")}t=function(e,r,t){return function(e,r,n,t){var o,i,a,h,s,u,w;for(o=r||[0],a=(n=n||0)>>>3,u=-1===t?3:0,w=new Uint8Array(e),i=0;i<e.byteLength;i+=1)h=(s=i+a)>>>2,o.length<=h&&o.push(0),o[h]|=w[i]<<8*(u+t*(s%4));return{value:o,binLen:8*e.byteLength+n}}(e,r,t,n)};break;default:throw new Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")}return t}function f(e,r){return e<<r|e>>>32-r}function l(e,r){return r>32?(r-=32,new i(e.lowOrder<<r|e.highOrder>>>32-r,e.highOrder<<r|e.lowOrder>>>32-r)):0!==r?new i(e.highOrder<<r|e.lowOrder>>>32-r,e.lowOrder<<r|e.highOrder>>>32-r):e}function c(e,r){return e>>>r|e<<32-r}function O(e,r){var n=new i(e.highOrder,e.lowOrder);return 32>=r?new i(n.highOrder>>>r|n.lowOrder<<32-r&4294967295,n.lowOrder>>>r|n.highOrder<<32-r&4294967295):new i(n.lowOrder>>>r-32|n.highOrder<<64-r&4294967295,n.highOrder>>>r-32|n.lowOrder<<64-r&4294967295)}function g(e,r){return e>>>r}function p(e,r){return 32>=r?new i(e.highOrder>>>r,e.lowOrder>>>r|e.highOrder<<32-r&4294967295):new i(0,e.highOrder>>>r-32)}function S(e,r,n){return e^r^n}function A(e,r,n){return e&r^~e&n}function _(e,r,n){return new i(e.highOrder&r.highOrder^~e.highOrder&n.highOrder,e.lowOrder&r.lowOrder^~e.lowOrder&n.lowOrder)}function v(e,r,n){return e&r^e&n^r&n}function H(e,r,n){return new i(e.highOrder&r.highOrder^e.highOrder&n.highOrder^r.highOrder&n.highOrder,e.lowOrder&r.lowOrder^e.lowOrder&n.lowOrder^r.lowOrder&n.lowOrder)}function b(e){return c(e,2)^c(e,13)^c(e,22)}function E(e){var r=O(e,28),n=O(e,34),t=O(e,39);return new i(r.highOrder^n.highOrder^t.highOrder,r.lowOrder^n.lowOrder^t.lowOrder)}function m(e){return c(e,6)^c(e,11)^c(e,25)}function y(e){var r=O(e,14),n=O(e,18),t=O(e,41);return new i(r.highOrder^n.highOrder^t.highOrder,r.lowOrder^n.lowOrder^t.lowOrder)}function U(e){return c(e,7)^c(e,18)^g(e,3)}function k(e){var r=O(e,1),n=O(e,8),t=p(e,7);return new i(r.highOrder^n.highOrder^t.highOrder,r.lowOrder^n.lowOrder^t.lowOrder)}function R(e){return c(e,17)^c(e,19)^g(e,10)}function T(e){var r=O(e,19),n=O(e,61),t=p(e,6);return new i(r.highOrder^n.highOrder^t.highOrder,r.lowOrder^n.lowOrder^t.lowOrder)}function C(e,r){var n=(65535&e)+(65535&r);return(65535&(e>>>16)+(r>>>16)+(n>>>16))<<16|65535&n}function x(e,r,n,t){var o=(65535&e)+(65535&r)+(65535&n)+(65535&t);return(65535&(e>>>16)+(r>>>16)+(n>>>16)+(t>>>16)+(o>>>16))<<16|65535&o}function F(e,r,n,t,o){var i=(65535&e)+(65535&r)+(65535&n)+(65535&t)+(65535&o);return(65535&(e>>>16)+(r>>>16)+(n>>>16)+(t>>>16)+(o>>>16)+(i>>>16))<<16|65535&i}function N(e,r){var n,t,o;return n=(65535&e.lowOrder)+(65535&r.lowOrder),o=(65535&(t=(e.lowOrder>>>16)+(r.lowOrder>>>16)+(n>>>16)))<<16|65535&n,n=(65535&e.highOrder)+(65535&r.highOrder)+(t>>>16),new i((65535&(t=(e.highOrder>>>16)+(r.highOrder>>>16)+(n>>>16)))<<16|65535&n,o)}function B(e,r,n,t){var o,a,h;return o=(65535&e.lowOrder)+(65535&r.lowOrder)+(65535&n.lowOrder)+(65535&t.lowOrder),h=(65535&(a=(e.lowOrder>>>16)+(r.lowOrder>>>16)+(n.lowOrder>>>16)+(t.lowOrder>>>16)+(o>>>16)))<<16|65535&o,o=(65535&e.highOrder)+(65535&r.highOrder)+(65535&n.highOrder)+(65535&t.highOrder)+(a>>>16),new i((65535&(a=(e.highOrder>>>16)+(r.highOrder>>>16)+(n.highOrder>>>16)+(t.highOrder>>>16)+(o>>>16)))<<16|65535&o,h)}function L(e,r,n,t,o){var a,h,s;return a=(65535&e.lowOrder)+(65535&r.lowOrder)+(65535&n.lowOrder)+(65535&t.lowOrder)+(65535&o.lowOrder),s=(65535&(h=(e.lowOrder>>>16)+(r.lowOrder>>>16)+(n.lowOrder>>>16)+(t.lowOrder>>>16)+(o.lowOrder>>>16)+(a>>>16)))<<16|65535&a,a=(65535&e.highOrder)+(65535&r.highOrder)+(65535&n.highOrder)+(65535&t.highOrder)+(65535&o.highOrder)+(h>>>16),new i((65535&(h=(e.highOrder>>>16)+(r.highOrder>>>16)+(n.highOrder>>>16)+(t.highOrder>>>16)+(o.highOrder>>>16)+(a>>>16)))<<16|65535&a,s)}function I(e,r){return new i(e.highOrder^r.highOrder,e.lowOrder^r.lowOrder)}function P(e){var r,n,t,o=[];if("SHA-1"===e)o=[1732584193,4023233417,2562383102,271733878,3285377520];else if(0===e.lastIndexOf("SHA-",0))switch(r=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e){case"SHA-224":o=r;break;case"SHA-256":o=n;break;case"SHA-384":o=[new i(3418070365,r[0]),new i(1654270250,r[1]),new i(2438529370,r[2]),new i(355462360,r[3]),new i(1731405415,r[4]),new i(41048885895,r[5]),new i(3675008525,r[6]),new i(1203062813,r[7])];break;case"SHA-512":o=[new i(n[0],4089235720),new i(n[1],2227873595),new i(n[2],4271175723),new i(n[3],1595750129),new i(n[4],2917565137),new i(n[5],725511199),new i(n[6],4215389547),new i(n[7],327033209)];break;default:throw new Error("Unknown SHA variant")}else{if(0!==e.lastIndexOf("SHA3-",0)&&0!==e.lastIndexOf("SHAKE",0))throw new Error("No SHA variants supported");for(t=0;t<5;t+=1)o[t]=[new i(0,0),new i(0,0),new i(0,0),new i(0,0),new i(0,0)]}return o}function j(e,r){var n,t,o,i,a,h,s,u=[],w=A,d=S,l=v,c=f,O=C,g=F;for(n=r[0],t=r[1],o=r[2],i=r[3],a=r[4],s=0;s<80;s+=1)u[s]=s<16?e[s]:c(u[s-3]^u[s-8]^u[s-14]^u[s-16],1),h=s<20?g(c(n,5),w(t,o,i),a,1518500249,u[s]):s<40?g(c(n,5),d(t,o,i),a,1859775393,u[s]):s<60?g(c(n,5),l(t,o,i),a,2400959708,u[s]):g(c(n,5),d(t,o,i),a,3395469782,u[s]),a=i,i=o,o=c(t,30),t=n,n=h;return r[0]=O(n,r[0]),r[1]=O(t,r[1]),r[2]=O(o,r[2]),r[3]=O(i,r[3]),r[4]=O(a,r[4]),r}function X(e,r,n,t,o){var i,a,h,s;for(h=15+(r+65>>>9<<4);e.length<=h;)e.push(0);for(e[r>>>5]|=128<<24-r%32,s=r+n,e[h]=4294967295&s,e[h-1]=s/4294967296|0,a=e.length,i=0;i<a;i+=16)t=j(e.slice(i,i+16),t);return t}function M(e,t,o){var a,h,s,u,w,d,f,l,c,O,g,p,S,I,P,j,X,M,K,Y,q,D,J,z,W,G,Z,Q=[];if("SHA-224"===o||"SHA-256"===o)g=64,S=1,J=Number,I=C,P=x,j=F,X=U,M=R,K=b,Y=m,D=v,q=A,Z=r;else{if("SHA-384"!==o&&"SHA-512"!==o)throw new Error("Unexpected error in SHA-2 implementation");g=80,S=2,J=i,I=N,P=B,j=L,X=k,M=T,K=E,Y=y,D=H,q=_,Z=n}for(a=t[0],h=t[1],s=t[2],u=t[3],w=t[4],d=t[5],f=t[6],l=t[7],p=0;p<g;p+=1)p<16?(G=p*S,z=e.length<=G?0:e[G],W=e.length<=G+1?0:e[G+1],Q[p]=new J(z,W)):Q[p]=P(M(Q[p-2]),Q[p-7],X(Q[p-15]),Q[p-16]),c=j(l,Y(w),q(w,d,f),Z[p],Q[p]),O=I(K(a),D(a,h,s)),l=f,f=d,d=w,w=I(u,c),u=s,s=h,h=a,a=I(c,O);return t[0]=I(a,t[0]),t[1]=I(h,t[1]),t[2]=I(s,t[2]),t[3]=I(u,t[3]),t[4]=I(w,t[4]),t[5]=I(d,t[5]),t[6]=I(f,t[6]),t[7]=I(l,t[7]),t}function K(e,r){var n,a,h,s,u,w,d,f,c,O=[],g=[];if(null!==e)for(a=0;a<e.length;a+=2)r[(a>>>1)%5][(a>>>1)/5|0]=I(r[(a>>>1)%5][(a>>>1)/5|0],new i(e[a+1],e[a]));for(n=0;n<24;n+=1){for(s=P("SHA3-"),a=0;a<5;a+=1)O[a]=(u=r[a][0],w=r[a][1],d=r[a][2],f=r[a][3],c=r[a][4],new i(u.highOrder^w.highOrder^d.highOrder^f.highOrder^c.highOrder,u.lowOrder^w.lowOrder^d.lowOrder^f.lowOrder^c.lowOrder));for(a=0;a<5;a+=1)g[a]=I(O[(a+4)%5],l(O[(a+1)%5],1));for(a=0;a<5;a+=1)for(h=0;h<5;h+=1)r[a][h]=I(r[a][h],g[a]);for(a=0;a<5;a+=1)for(h=0;h<5;h+=1)s[h][(2*a+3*h)%5]=l(r[a][h],t[a][h]);for(a=0;a<5;a+=1)for(h=0;h<5;h+=1)r[a][h]=I(s[a][h],new i(~s[(a+1)%5][h].highOrder&s[(a+2)%5][h].highOrder,~s[(a+1)%5][h].lowOrder&s[(a+2)%5][h].lowOrder));r[0][0]=I(r[0][0],o[n])}return r}n=[new i((r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298])[0],3609767458),new i(r[1],602891725),new i(r[2],3964484399),new i(r[3],2173295548),new i(r[4],4081628472),new i(r[5],3053834265),new i(r[6],2937671579),new i(r[7],3664609560),new i(r[8],2734883394),new i(r[9],1164996542),new i(r[10],1323610764),new i(r[11],3590304994),new i(r[12],4068182383),new i(r[13],991336113),new i(r[14],633803317),new i(r[15],3479774868),new i(r[16],2666613458),new i(r[17],944711139),new i(r[18],2341262773),new i(r[19],2007800933),new i(r[20],1495990901),new i(r[21],1856431235),new i(r[22],3175218132),new i(r[23],2198950837),new i(r[24],3999719339),new i(r[25],766784016),new i(r[26],2566594879),new i(r[27],3203337956),new i(r[28],1034457026),new i(r[29],2466948901),new i(r[30],3758326383),new i(r[31],168717936),new i(r[32],1188179964),new i(r[33],1546045734),new i(r[34],1522805485),new i(r[35],2643833823),new i(r[36],2343527390),new i(r[37],1014477480),new i(r[38],1206759142),new i(r[39],344077627),new i(r[40],1290863460),new i(r[41],3158454273),new i(r[42],3505952657),new i(r[43],106217008),new i(r[44],3606008344),new i(r[45],1432725776),new i(r[46],1467031594),new i(r[47],851169720),new i(r[48],3100823752),new i(r[49],1363258195),new i(r[50],3750685593),new i(r[51],3785050280),new i(r[52],3318307427),new i(r[53],3812723403),new i(r[54],2003034995),new i(r[55],3602036899),new i(r[56],1575990012),new i(r[57],1125592928),new i(r[58],2716904306),new i(r[59],442776044),new i(r[60],593698344),new i(r[61],3733110249),new i(r[62],2999351573),new i(r[63],3815920427),new i(3391569614,3928383900),new i(3515267271,566280711),new i(3940187606,3454069534),new i(4118630271,4000239992),new i(116418474,1914138554),new i(174292421,2731055270),new i(289380356,3203993006),new i(460393269,320620315),new i(685471733,587496836),new i(852142971,1086792851),new i(1017036298,365543100),new i(1126000580,2618297676),new i(1288033470,3409855158),new i(1501505948,4234509866),new i(1607167915,987167468),new i(1816402316,1246189591)],o=[new i(0,1),new i(0,32898),new i(2147483648,32906),new i(2147483648,2147516416),new i(0,32907),new i(0,2147483649),new i(2147483648,2147516545),new i(2147483648,32777),new i(0,138),new i(0,136),new i(0,2147516425),new i(0,2147483658),new i(0,2147516555),new i(2147483648,139),new i(2147483648,32905),new i(2147483648,32771),new i(2147483648,32770),new i(2147483648,128),new i(0,32778),new i(2147483648,2147483658),new i(2147483648,2147516545),new i(2147483648,32896),new i(0,2147483649),new i(2147483648,2147516424)],t=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]],e.oba.jsSHA=function(e,r,n){var t,o,i,f,l,c,O,g,p,S,A=0,_=[],v=0,H=e,b=!1,E=[],m=[],y=!1,U=!1,k=-1;if(t=(S=n||{}).encoding||"UTF8",(p=S.numRounds||1)!==parseInt(p,10)||1>p)throw new Error("numRounds must a integer >= 1");if("SHA-1"===H)l=512,c=j,O=X,f=160,g=function(e){return e.slice()};else if(0===H.lastIndexOf("SHA-",0))if(c=function(e,r){return M(e,r,H)},O=function(e,r,n,t,o){return function(e,r,n,t,o,i){var a,h,s,u,w,d;if("SHA-224"===o||"SHA-256"===o)s=15+(r+65>>>9<<4),w=16;else{if("SHA-384"!==o&&"SHA-512"!==o)throw new Error("Unexpected error in SHA-2 implementation");s=31+(r+129>>>10<<5),w=32}for(;e.length<=s;)e.push(0);for(e[r>>>5]|=128<<24-r%32,d=r+n,e[s]=4294967295&d,e[s-1]=d/4294967296|0,h=e.length,a=0;a<h;a+=w)t=M(e.slice(a,a+w),t,o);if("SHA-224"===o)u=[t[0],t[1],t[2],t[3],t[4],t[5],t[6]];else if("SHA-256"===o)u=t;else if("SHA-384"===o)u=[t[0].highOrder,t[0].lowOrder,t[1].highOrder,t[1].lowOrder,t[2].highOrder,t[2].lowOrder,t[3].highOrder,t[3].lowOrder,t[4].highOrder,t[4].lowOrder,t[5].highOrder,t[5].lowOrder];else{if("SHA-512"!==o)throw new Error("Unexpected error in SHA-2 implementation");u=[t[0].highOrder,t[0].lowOrder,t[1].highOrder,t[1].lowOrder,t[2].highOrder,t[2].lowOrder,t[3].highOrder,t[3].lowOrder,t[4].highOrder,t[4].lowOrder,t[5].highOrder,t[5].lowOrder,t[6].highOrder,t[6].lowOrder,t[7].highOrder,t[7].lowOrder]}return u}(e,r,n,t,H)},g=function(e){return e.slice()},"SHA-224"===H)l=512,f=224;else if("SHA-256"===H)l=512,f=256;else if("SHA-384"===H)l=1024,f=384;else{if("SHA-512"!==H)throw new Error("Chosen SHA variant is not supported");l=1024,f=512}else{if(0!==H.lastIndexOf("SHA3-",0)&&0!==H.lastIndexOf("SHAKE",0))throw new Error("Chosen SHA variant is not supported");var R=6;if(c=K,g=function(e){return function(e){var r,n=[];for(r=0;r<5;r+=1)n[r]=e[r].slice();return n}(e)},k=1,"SHA3-224"===H)l=1152,f=224;else if("SHA3-256"===H)l=1088,f=256;else if("SHA3-384"===H)l=832,f=384;else if("SHA3-512"===H)l=576,f=512;else if("SHAKE128"===H)l=1344,f=-1,R=31,U=!0;else{if("SHAKE256"!==H)throw new Error("Chosen SHA variant is not supported");l=1088,f=-1,R=31,U=!0}O=function(e,r,n,t,o){return function(e,r,n,t,o,i,a){var h,s,u=[],w=o>>>5,d=0,f=r>>>5;for(h=0;h<f&&r>=o;h+=w)t=K(e.slice(h,h+w),t),r-=o;for(e=e.slice(h),r%=o;e.length<w;)e.push(0);for(e[(h=r>>>3)>>2]^=i<<h%4*8,e[w-1]^=2147483648,t=K(e,t);32*u.length<a&&(s=t[d%5][d/5|0],u.push(s.lowOrder),!(32*u.length>=a));)u.push(s.highOrder),0==64*(d+=1)%o&&K(null,t);return u}(e,r,0,t,l,R,o)}}i=d(r,t,k),o=P(H),this.setHMACKey=function(e,r,n){var i,a,h,s,u,w;if(!0===b)throw new Error("HMAC key already set");if(!0===y)throw new Error("Cannot set HMAC key after calling update");if(!0===U)throw new Error("SHAKE is not supported for HMAC");if(a=(i=d(r,t=(n||{}).encoding||"UTF8",k)(e)).binLen,h=i.value,w=(s=l>>>3)/4-1,s<a/8){for(h=O(h,a,0,P(H),f);h.length<=w;)h.push(0);h[w]&=4294967040}else if(s>a/8){for(;h.length<=w;)h.push(0);h[w]&=4294967040}for(u=0;u<=w;u+=1)E[u]=909522486^h[u],m[u]=1549556828^h[u];o=c(E,o),A=l,b=!0},this.update=function(e){var r,n,t,a,h,s=0,u=l>>>5;for(n=(r=i(e,_,v)).binLen,a=r.value,t=n>>>5,h=0;h<t;h+=u)s+l<=n&&(o=c(a.slice(h,h+u),o),s+=l);A+=s,_=a.slice(s>>>5),v=n%l,y=!0},this.getHash=function(e,r){var n,t,i,d;if(!0===b)throw new Error("Cannot call getHash after setting HMAC key");if(i=w(r),!0===U){if(-1===i.shakeLen)throw new Error("shakeLen must be specified in options");f=i.shakeLen}switch(e){case"HEX":n=function(e){return a(e,f,k,i)};break;case"B64":n=function(e){return h(e,f,k,i)};break;case"BYTES":n=function(e){return s(e,f,k)};break;case"ARRAYBUFFER":try{t=new ArrayBuffer(0)}catch(e){throw new Error("ARRAYBUFFER not supported by this environment")}n=function(e){return u(e,f,k)};break;default:throw new Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")}for(d=O(_.slice(),v,A,g(o),f),t=1;t<p;t+=1)!0===U&&f%32!=0&&(d[d.length-1]&=16777215>>>24-f%32),d=O(d,f,0,P(H),f);return n(d)},this.getHMAC=function(e,r){var n,t,i,d;if(!1===b)throw new Error("Cannot call getHMAC without first setting HMAC key");switch(i=w(r),e){case"HEX":n=function(e){return a(e,f,k,i)};break;case"B64":n=function(e){return h(e,f,k,i)};break;case"BYTES":n=function(e){return s(e,f,k)};break;case"ARRAYBUFFER":try{n=new ArrayBuffer(0)}catch(e){throw new Error("ARRAYBUFFER not supported by this environment")}n=function(e){return u(e,f,k)};break;default:throw new Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")}return t=O(_.slice(),v,A,g(o),f),d=c(m,P(H)),n(d=O(t,f,l,d,f))}}}(window),function(e,r){"use strict";e.oba.ajax=r(),e.oba.ajax=r()}(window,(function(){"use strict";var e=function(){};return e.prototype.isUrlExternal=function(e){return new RegExp("^(?:[a-z]+:)?//","i").test(e)},e.prototype.createXHRObject=function(e,r){var n=new XMLHttpRequest,t=this.isUrlExternal(e);return"withCredentials"in n||!t?n.open(r,e,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest).open(r,e):n=null,n},e.prototype.setRequestHeaders=function(e,r){for(var n in e)e.hasOwnProperty(n)&&r.setRequestHeader(n,e[n])},e.prototype.request=function(e){var r=e.url,n=e.callback,t=e.errorCallback?e.errorCallback:function(){},o=e.params?e.params:null,i=this.createXHRObject(r,e.method);function a(){var e;4!==i.readyState||200!==i.status&&201!==i.status?"undefined"!=typeof XDomainRequest&&i instanceof XDomainRequest?-1!==i.contentType.indexOf("application/json")?n(JSON.parse(i.responseText)):n(i.responseText):4===i.readyState&&t(i.responseText):(e=i.getResponseHeader("Content-Type"))&&-1!==e.indexOf("application/json")?n(JSON.parse(i.responseText)):n(i.responseText)}void 0===i.onload?i.onreadystatechange=a:i.onload=a,i.onerror=function(){t()},this.setRequestHeaders(e.headers,i),o&&(o=this.dataSerializer(e,i)),i.send(o)},e.prototype.dataSerializer=function(e,r){return e.dataSerializer?e.dataSerializer(e.params):(r.setRequestHeader("Content-Type","application/json;charset=utf-8"),JSON.stringify(e.params))},e.prototype.get=function(e){e.method="GET",this.request(e)},e.prototype.post=function(e){e.method="POST",this.request(e)},e.prototype.put=function(e){e.method="PUT",this.request(e)},e.prototype.delete=function(e){e.method="DELETE",this.request(e)},e})),function(e){"use strict";function r(e,r){this._document=e,this._expireSeconds=r||600,this._cookies}r.prototype={get:function(e){return this._loadCookies(),this._cookies[e]},getJSON:function(e){var r,n;if(void 0!==(r=this.get(e)))try{n=JSON.parse(decodeURIComponent(r))}catch(e){console&&"function"==typeof console.log&&console.error(e)}return n},_loadCookies:function(){if(void 0===this._cookies){var e,r,n,t={};for(e=(n=this._document.cookie.split("; ")).length-1;e>=0;e--)t[(r=n[e].split("="))[0]]=r[1];this._cookies=t,this._setCleanCache()}},_setCleanCache:function(){var e=this;setTimeout((function(){e._cookies=void 0}),1e3*this._expireSeconds)}};var n=function(e){this.sjSSH=e};function t(e,r,n){this.__userProfile=e,this.__localStorage=r,this.__expireSeconds=n}function o(e,r,n,t){this._ajax=e,this._documentCookie=r,this._hashGenerator=n,this._edgeApiDomain=t,this._salt="fdPTcwu90ilcfwJtJsAK"}n.prototype={random:function(){return Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)},ssh1:function(e){var r=new this.sjSSH("SHA-1","TEXT");return r.update(e),r.getHash("HEX")}},t.prototype={__storageKey:"pl_allegro_user_profile",get:function(e){var r=this.__userProfile._getUser(),n=this.__getFromStorage();if(!this.__validate(n,r)){var t=this;return this.__userProfile.get((function(r){t.__localStorage.setItem(t.__storageKey,JSON.stringify({profile:r,lastUpdate:new Date})),e(r)}))}e(n.profile)},_getUserId:function(){return this.__userProfile._getUserId()},__getFromStorage:function(){var e=this.__localStorage.getItem(this.__storageKey),r=null;try{(r=JSON.parse(e)||{}).lastUpdate=new Date(r.lastUpdate)}catch(e){console&&"function"==typeof console.log&&console.error(e),r=null}return r},__validate:function(e,r){var n=new Date;return n.setSeconds(n.getSeconds()-this.__expireSeconds),e&&r&&e.profile&&e.lastUpdate&&e.profile.hashedId&&e.profile.hashedId===r.hashedId&&e.lastUpdate>n}},o.UNKNOWN_USER_HASH="__unknown__",o.prototype={UNKNOWN_USER_HASH:o.UNKNOWN_USER_HASH,get:function(e){var r=this._getUser(),n=function(n){r.profile=n||void 0,e(r)};this._documentCookie.get("_cmuid")||this._documentCookie.get("ws3")?this._ajax.get({url:this._userTraitsUri(),callback:n,errorCallback:function(){n(null)}}):setTimeout((function(){n(null)}),0)},_getUser:function(){var e=this._documentCookie.getJSON("userIdentity");return e?e.id?e={hashedId:this._hashGenerator.ssh1(this._salt+e.id)}:e.hashedId=this.UNKNOWN_USER_HASH:e={hashedId:this.UNKNOWN_USER_HASH},e},_userTraitsUri:function(){var e,r,n;return e=this._hashGenerator.random(),r=this._documentCookie.get("_cmuid")||"",n=this._documentCookie.get("ws3")||"","//"+this._edgeApiDomain+"/usertraits/users/traits/"+e+"/"+r+","+n}};var i=new r(e.document),a=new n(e.oba.jsSHA),h=new o(new e.oba.ajax,i,a,document.location.host);if("undefined"!=typeof Storage)try{h=new t(h,e.localStorage,3600)}catch(e){}e.pl_allegro_user_profile={get:function(e){return h.get(e)}}}(window)}}));
//# sourceMappingURL=profile_144cfeba.js.map