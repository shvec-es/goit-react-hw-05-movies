(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{20:function(t,e,r){t.exports=r(21)},21:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function g(){}function d(){}function m(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(k([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=m.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return d.prototype=m,u(O,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},22:function(t,e,r){"use strict";r.d(e,"e",(function(){return l})),r.d(e,"d",(function(){return h})),r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return y}));var n=r(20),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c="https://api.themoviedb.org/3",u="?api_key=3beebdf74f4d418df005cba36fb7024f";function s(){return f.apply(this,arguments)}function f(){return f=a(o.a.mark((function t(){var e,r,n=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t.next=3,fetch(e);case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function l(){return s("".concat(c,"/trending/movies/day").concat(u))}function h(t){return s("".concat(c,"/search/movie").concat(u,"&query=").concat(t))}function p(t){return s("".concat(c,"/movie/").concat(t).concat(u))}function v(t){return s("".concat(c,"/movie/").concat(t,"/credits").concat(u))}function y(t){return s("".concat(c,"/movie/").concat(t,"/reviews").concat(u))}},23:function(t,e,r){"use strict";e.a=r.p+"static/media/noimage.16383d75.jpg"},24:function(t,e,r){t.exports={poster:"Gallery_poster__1miTM",text:"Gallery_text__3L7P9"}},25:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(0);var n=r(24),o=r.n(n),i=r(23),a=r(2);var c=function(t){var e=t.poster,r=t.title,n=t.name;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{className:o.a.poster,src:e?"https://www.themoviedb.org/t/p/w500".concat(e):i.a,alt:r}),Object(a.jsx)("h3",{className:o.a.text,children:r||n})]})}},27:function(t,e,r){t.exports={form:"MoviePage_form__2W-J2",input:"MoviePage_input__2-Kj2",btn:"MoviePage_btn__ECOwx",list:"MoviePage_list__2HHnP",item:"MoviePage_item__2QxSr"}},34:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e);var a=r(4),c=r(0),u=r(1),s=r(5),f=r(22),l=r(27),h=r.n(l),p=r(25),v=r(10),y=r(2);e.default=function(){var t=Object(u.h)(),e=Object(u.g)(),r=Object(c.useState)(""),n=Object(a.a)(r,2),o=n[0],l=n[1],g=Object(c.useState)([]),d=Object(a.a)(g,2),m=d[0],b=d[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("findingMovies"));t&&b(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("findingMovies",JSON.stringify(m))}),[m]),Object(c.useEffect)((function(){""!==o.trim()&&Object(f.d)(o).then((function(t){t.results.length>0?b(t.results):v.b.warning("Enter correct querry")})).catch((function(t){console.log(t),v.b.error("Oops...something wrong")}))}),[o]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{className:h.a.form,onSubmit:function(r){r.preventDefault(),""!==r.target.query.value.trim()?(l(r.target.query.value),t(i(i({},e),{},{search:"query=".concat(r.target.query.value)})),r.target.query.value=""):v.b.warning("Enter word for search")},children:[Object(y.jsx)("input",{type:"text",className:h.a.input,name:"query",autoComplete:"off",placeholder:"Enter word for search"}),Object(y.jsx)("button",{type:"submit",className:h.a.btn})]}),m.length>0&&Object(y.jsx)("ul",{className:h.a.list,children:m.map((function(t){var r=t.id,n=t.poster_path,o=t.title,i=t.name;return Object(y.jsx)("li",{className:h.a.item,children:Object(y.jsx)(s.b,{to:"".concat(r),state:{from:e,label:"to Movies page"},children:Object(y.jsx)(p.a,{poster:n,title:o,name:i})})},r)}))})]})}}}]);
//# sourceMappingURL=movies-page.3d7da4aa.chunk.js.map