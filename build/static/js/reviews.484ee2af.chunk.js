(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{20:function(t,r,e){t.exports=e(21)},21:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),c=new N(n||[]);return i._invoke=function(t,r,e){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=O(c,e);if(a){if(a===y)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:l,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,c),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==e&&n.call(x,i)&&(w=x);var j=m.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return c.next=c}}return{next:G}}function G(){return{value:r,done:!0}}return g.prototype=m,u(j,"constructor",m),u(m,"constructor",g),g.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var c=new E(s(r,e,n,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(j),u(j,a,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},22:function(t,r,e){"use strict";e.d(r,"e",(function(){return h})),e.d(r,"d",(function(){return l})),e.d(r,"b",(function(){return p})),e.d(r,"a",(function(){return v})),e.d(r,"c",(function(){return y}));var n=e(20),o=e.n(n);function i(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void e(s)}a.done?r(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var c=t.apply(r,e);function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}a(void 0)}))}}var a="https://api.themoviedb.org/3",u="?api_key=3beebdf74f4d418df005cba36fb7024f";function s(){return f.apply(this,arguments)}function f(){return f=c(o.a.mark((function t(){var r,e,n=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:"",t.next=3,fetch(r);case 3:if(!(e=t.sent).ok){t.next=10;break}return t.next=7,e.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(){return s("".concat(a,"/trending/movies/day").concat(u))}function l(t){return s("".concat(a,"/search/movie").concat(u,"&query=").concat(t))}function p(t){return s("".concat(a,"/movie/").concat(t).concat(u))}function v(t){return s("".concat(a,"/movie/").concat(t,"/credits").concat(u))}function y(t){return s("".concat(a,"/movie/").concat(t,"/reviews").concat(u))}},33:function(t,r,e){"use strict";e.r(r);var n=e(4),o=e(0),i=e(1),c=e(22),a=e(2);r.default=function(){var t=Object(i.i)().movieId,r=Object(o.useState)([]),e=Object(n.a)(r,2),u=e[0],s=e[1];return Object(o.useEffect)((function(){Object(c.c)(t).then((function(t){return s(t.results)}))}),[t]),Object(a.jsx)(a.Fragment,{children:u.length>0?Object(a.jsx)("ul",{children:u.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{style:{fontWeight:500},children:["Author: ",t.author]}),Object(a.jsx)("p",{style:{marginBottom:10},children:t.content})]},t.id)}))}):Object(a.jsx)("p",{children:"We don't have reviews for this movie"})})}}}]);
//# sourceMappingURL=reviews.484ee2af.chunk.js.map