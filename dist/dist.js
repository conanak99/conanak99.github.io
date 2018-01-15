/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
if(function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document")
return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=t.length,n=ot.type(t)
return"function"!==n&&!ot.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}function i(t,e,n){if(ot.isFunction(e))return ot.grep(t,function(t,i){return!!e.call(t,i,t)!==n})
if(e.nodeType)return ot.grep(t,function(t){return t===e!==n})
if("string"==typeof e){if(dt.test(e))return ot.filter(e,t,n)
e=ot.filter(e,t)}return ot.grep(t,function(t){return ot.inArray(t,e)>=0!==n})}function o(t,e){do{t=t[e]}while(t&&1!==t.nodeType)
return t}function r(t){var e=bt[t]={}
return ot.each(t.match(yt)||[],function(t,n){e[n]=!0}),e}function s(){ht.addEventListener?(ht.removeEventListener("DOMContentLoaded",a,!1),t.removeEventListener("load",a,!1)):(ht.detachEvent("onreadystatechange",a),t.detachEvent("onload",a))}function a(){(ht.addEventListener||"load"===event.type||"complete"===ht.readyState)&&(s(),ot.ready())}function l(t,e,n){if(void 0===n&&1===t.nodeType){var i="data-"+e.replace(Et,"-$1").toLowerCase()
if("string"==typeof(n=t.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ct.test(n)?ot.parseJSON(n):n)}catch(t){}ot.data(t,e,n)}else n=void 0}return n}function u(t){var e
for(e in t)if(("data"!==e||!ot.isEmptyObject(t[e]))&&"toJSON"!==e)return!1
return!0}function c(t,e,n,i){if(ot.acceptData(t)){var o,r,s=ot.expando,a=t.nodeType,l=a?ot.cache:t,u=a?t[s]:t[s]&&s
if(u&&l[u]&&(i||l[u].data)||void 0!==n||"string"!=typeof e)return u||(u=a?t[s]=X.pop()||ot.guid++:s),l[u]||(l[u]=a?{}:{toJSON:ot.noop}),("object"==typeof e||"function"==typeof e)&&(i?l[u]=ot.extend(l[u],e):l[u].data=ot.extend(l[u].data,e)),r=l[u],i||(r.data||(r.data={}),r=r.data),void 0!==n&&(r[ot.camelCase(e)]=n),"string"==typeof e?null==(o=r[e])&&(o=r[ot.camelCase(e)]):o=r,o}}function p(t,e,n){if(ot.acceptData(t)){var i,o,r=t.nodeType,s=r?ot.cache:t,a=r?t[ot.expando]:ot.expando
if(s[a]){if(e&&(i=n?s[a]:s[a].data)){ot.isArray(e)?e=e.concat(ot.map(e,ot.camelCase)):e in i?e=[e]:(e=ot.camelCase(e),e=e in i?[e]:e.split(" ")),o=e.length
for(;o--;)delete i[e[o]]
if(n?!u(i):!ot.isEmptyObject(i))return}(n||(delete s[a].data,u(s[a])))&&(r?ot.cleanData([t],!0):nt.deleteExpando||s!=s.window?delete s[a]:s[a]=null)}}}function d(){return!0}function f(){return!1}function h(){try{return ht.activeElement}catch(t){}}function m(t){var e=Ot.split("|"),n=t.createDocumentFragment()
if(n.createElement)for(;e.length;)n.createElement(e.pop())
return n}function g(t,e){var n,i,o=0,r=typeof t.getElementsByTagName!==Tt?t.getElementsByTagName(e||"*"):typeof t.querySelectorAll!==Tt?t.querySelectorAll(e||"*"):void 0
if(!r)for(r=[],n=t.childNodes||t;null!=(i=n[o]);o++)!e||ot.nodeName(i,e)?r.push(i):ot.merge(r,g(i,e))
return void 0===e||e&&ot.nodeName(t,e)?ot.merge([t],r):r}function v(t){_t.test(t.type)&&(t.defaultChecked=t.checked)}function y(t,e){return ot.nodeName(t,"table")&&ot.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function b(t){return t.type=(null!==ot.find.attr(t,"type"))+"/"+t.type,t}function x(t){var e=Vt.exec(t.type)
return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){for(var n,i=0;null!=(n=t[i]);i++)ot._data(n,"globalEval",!e||ot._data(e[i],"globalEval"))}function T(t,e){if(1===e.nodeType&&ot.hasData(t)){var n,i,o,r=ot._data(t),s=ot._data(e,r),a=r.events
if(a){delete s.handle,s.events={}
for(n in a)for(i=0,o=a[n].length;o>i;i++)ot.event.add(e,n,a[n][i])}s.data&&(s.data=ot.extend({},s.data))}}function C(t,e){var n,i,o
if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!nt.noCloneEvent&&e[ot.expando]){o=ot._data(e)
for(i in o.events)ot.removeEvent(e,i,o.handle)
e.removeAttribute(ot.expando)}"script"===n&&e.text!==t.text?(b(e).text=t.text,x(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),nt.html5Clone&&t.innerHTML&&!ot.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&_t.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}}function E(e,n){var i,o=ot(n.createElement(e)).appendTo(n.body),r=t.getDefaultComputedStyle&&(i=t.getDefaultComputedStyle(o[0]))?i.display:ot.css(o[0],"display")
return o.detach(),r}function S(t){var e=ht,n=Kt[t]
return n||(n=E(t,e),"none"!==n&&n||(Jt=(Jt||ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(Jt[0].contentWindow||Jt[0].contentDocument).document,e.write(),e.close(),n=E(t,e),Jt.detach()),Kt[t]=n),n}function k(t,e){return{get:function(){var n=t()
if(null!=n)return n?void delete this.get:(this.get=e).apply(this,arguments)}}}function L(t,e){if(e in t)return e
for(var n=e.charAt(0).toUpperCase()+e.slice(1),i=e,o=pe.length;o--;)if((e=pe[o]+n)in t)return e
return i}function N(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)i=t[s],i.style&&(r[s]=ot._data(i,"olddisplay"),n=i.style.display,e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Lt(i)&&(r[s]=ot._data(i,"olddisplay",S(i.nodeName)))):(o=Lt(i),(n&&"none"!==n||!o)&&ot._data(i,"olddisplay",o?n:ot.css(i,"display"))))
for(s=0;a>s;s++)i=t[s],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"))
return t}function _(t,e,n){var i=ae.exec(e)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function $(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=ot.css(t,n+kt[r],!0,o)),i?("content"===n&&(s-=ot.css(t,"padding"+kt[r],!0,o)),"margin"!==n&&(s-=ot.css(t,"border"+kt[r]+"Width",!0,o))):(s+=ot.css(t,"padding"+kt[r],!0,o),"padding"!==n&&(s+=ot.css(t,"border"+kt[r]+"Width",!0,o)))
return s}function D(t,e,n){var i=!0,o="width"===e?t.offsetWidth:t.offsetHeight,r=Zt(t),s=nt.boxSizing&&"border-box"===ot.css(t,"boxSizing",!1,r)
if(0>=o||null==o){if(o=te(t,e,r),(0>o||null==o)&&(o=t.style[e]),ne.test(o))return o
i=s&&(nt.boxSizingReliable()||o===t.style[e]),o=parseFloat(o)||0}return o+$(t,e,n||(s?"border":"content"),i,r)+"px"}function A(t,e,n,i,o){return new A.prototype.init(t,e,n,i,o)}function j(){return setTimeout(function(){de=void 0}),de=ot.now()}function I(t,e){var n,i={height:t},o=0
for(e=e?1:0;4>o;o+=2-e)n=kt[o],i["margin"+n]=i["padding"+n]=t
return e&&(i.opacity=i.width=t),i}function O(t,e,n){for(var i,o=(ye[e]||[]).concat(ye["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,e,t))return i}function z(t,e,n){var i,o,r,s,a,l,u,c=this,p={},d=t.style,f=t.nodeType&&Lt(t),h=ot._data(t,"fxshow")
n.queue||(a=ot._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,ot.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],u=ot.css(t,"display"),"inline"===("none"===u?ot._data(t,"olddisplay")||S(t.nodeName):u)&&"none"===ot.css(t,"float")&&(nt.inlineBlockNeedsLayout&&"inline"!==S(t.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",nt.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}))
for(i in e)if(o=e[i],he.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!h||void 0===h[i])continue
f=!0}p[i]=h&&h[i]||ot.style(t,i)}else u=void 0
if(ot.isEmptyObject(p))"inline"===("none"===u?S(t.nodeName):u)&&(d.display=u)
else{h?"hidden"in h&&(f=h.hidden):h=ot._data(t,"fxshow",{}),r&&(h.hidden=!f),f?ot(t).show():c.done(function(){ot(t).hide()}),c.done(function(){var e
ot._removeData(t,"fxshow")
for(e in p)ot.style(t,e,p[e])})
for(i in p)s=O(f?h[i]:0,i,c),i in h||(h[i]=s.start,f&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function H(t,e){var n,i,o,r,s
for(n in t)if(i=ot.camelCase(n),o=e[i],r=t[n],ot.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=ot.cssHooks[i])&&"expand"in s){r=s.expand(r),delete t[i]
for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function M(t,e,n){var i,o,r=0,s=ve.length,a=ot.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1
for(var e=de||j(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r)
return a.notifyWith(t,[u,r,n]),1>r&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:ot.extend({},e),opts:ot.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:de||j(),duration:n.duration,tweens:[],createTween:function(e,n){var i=ot.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing)
return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0
if(o)return this
for(o=!0;i>n;n++)u.tweens[n].run(1)
return e?a.resolveWith(t,[u,e]):a.rejectWith(t,[u,e]),this}}),c=u.props
for(H(c,u.opts.specialEasing);s>r;r++)if(i=ve[r].call(u,t,c,u.opts))return i
return ot.map(c,O,u),ot.isFunction(u.opts.start)&&u.opts.start.call(t,u),ot.fx.timer(ot.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function W(t){return function(e,n){"string"!=typeof e&&(n=e,e="*")
var i,o=0,r=e.toLowerCase().match(yt)||[]
if(ot.isFunction(n))for(;i=r[o++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function R(t,e,n,i){function o(a){var l
return r[a]=!0,ot.each(t[a]||[],function(t,a){var u=a(e,n,i)
return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=t===Fe
return o(e.dataTypes[0])||!r["*"]&&o("*")}function P(t,e){var n,i,o=ot.ajaxSettings.flatOptions||{}
for(i in e)void 0!==e[i]&&((o[i]?t:n||(n={}))[i]=e[i])
return n&&ot.extend(!0,t,n),t}function F(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"))
if(o)for(s in a)if(a[s]&&a[s].test(o)){l.unshift(s)
break}if(l[0]in n)r=l[0]
else{for(s in n){if(!l[0]||t.converters[s+" "+l[0]]){r=s
break}i||(i=s)}r=r||i}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function q(t,e,n,i){var o,r,s,a,l,u={},c=t.dataTypes.slice()
if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s]
for(r=c.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l
else if("*"!==l&&l!==r){if(!(s=u[l+" "+r]||u["* "+r]))for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[o]:!0!==u[o]&&(r=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&t.throws)e=s(e)
else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}function B(t,e,n,i){var o
if(ot.isArray(e))ot.each(e,function(e,o){n||Ue.test(t)?i(t,o):B(t+"["+("object"==typeof o?e:"")+"]",o,n,i)})
else if(n||"object"!==ot.type(e))i(t,e)
else for(o in e)B(t+"["+o+"]",e[o],n,i)}function U(){try{return new t.XMLHttpRequest}catch(t){}}function V(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function Q(t){return ot.isWindow(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}var X=[],Y=X.slice,G=X.concat,J=X.push,K=X.indexOf,Z={},tt=Z.toString,et=Z.hasOwnProperty,nt={},it="1.11.1",ot=function(t,e){return new ot.fn.init(t,e)},rt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,st=/^-ms-/,at=/-([\da-z])/gi,lt=function(t,e){return e.toUpperCase()}
ot.fn=ot.prototype={jquery:it,constructor:ot,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:Y.call(this)},pushStack:function(t){var e=ot.merge(this.constructor(),t)
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return ot.each(this,t,e)},map:function(t){return this.pushStack(ot.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0)
return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:J,sort:X.sort,splice:X.splice},ot.extend=ot.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1
for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||ot.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(o=arguments[a]))for(i in o)t=s[i],n=o[i],s!==n&&(u&&n&&(ot.isPlainObject(n)||(e=ot.isArray(n)))?(e?(e=!1,r=t&&ot.isArray(t)?t:[]):r=t&&ot.isPlainObject(t)?t:{},s[i]=ot.extend(u,r,n)):void 0!==n&&(s[i]=n))
return s},ot.extend({expando:"jQuery"+(it+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===ot.type(t)},isArray:Array.isArray||function(t){return"array"===ot.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!ot.isArray(t)&&t-parseFloat(t)>=0},isEmptyObject:function(t){var e
for(e in t)return!1
return!0},isPlainObject:function(t){var e
if(!t||"object"!==ot.type(t)||t.nodeType||ot.isWindow(t))return!1
try{if(t.constructor&&!et.call(t,"constructor")&&!et.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}if(nt.ownLast)for(e in t)return et.call(t,e)
for(e in t);return void 0===e||et.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Z[tt.call(t)]||"object":typeof t},globalEval:function(e){e&&ot.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(st,"ms-").replace(at,lt)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var o=0,r=t.length,s=n(t)
if(i){if(s)for(;r>o&&!1!==e.apply(t[o],i);o++);else for(o in t)if(!1===e.apply(t[o],i))break}else if(s)for(;r>o&&!1!==e.call(t[o],o,t[o]);o++);else for(o in t)if(!1===e.call(t[o],o,t[o]))break
return t},trim:function(t){return null==t?"":(t+"").replace(rt,"")},makeArray:function(t,e){var i=e||[]
return null!=t&&(n(Object(t))?ot.merge(i,"string"==typeof t?[t]:t):J.call(i,t)),i},inArray:function(t,e,n){var i
if(e){if(K)return K.call(e,t,n)
for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;)t[o++]=e[i++]
if(n!==n)for(;void 0!==e[i];)t[o++]=e[i++]
return t.length=o,t},grep:function(t,e,n){for(var i=[],o=0,r=t.length,s=!n;r>o;o++)!e(t[o],o)!==s&&i.push(t[o])
return i},map:function(t,e,i){var o,r=0,s=t.length,a=n(t),l=[]
if(a)for(;s>r;r++)null!=(o=e(t[r],r,i))&&l.push(o)
else for(r in t)null!=(o=e(t[r],r,i))&&l.push(o)
return G.apply([],l)},guid:1,proxy:function(t,e){var n,i,o
return"string"==typeof e&&(o=t[e],e=t,t=o),ot.isFunction(t)?(n=Y.call(arguments,2),i=function(){return t.apply(e||this,n.concat(Y.call(arguments)))},i.guid=t.guid=t.guid||ot.guid++,i):void 0},now:function(){return+new Date},support:nt}),ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()})
var ut=function(t){function e(t,e,n,i){var o,r,s,a,u,p,d,f,h,m
if((e?e.ownerDocument||e:M)!==$&&_(e),e=e||$,n=n||[],!t||"string"!=typeof t)return n
if(1!==(a=e.nodeType)&&9!==a)return[]
if(A&&!i){if(o=gt.exec(t))if(s=o[1]){if(9===a){if(!(r=e.getElementById(s))||!r.parentNode)return n
if(r.id===s)return n.push(r),n}else if(e.ownerDocument&&(r=e.ownerDocument.getElementById(s))&&z(e,r)&&r.id===s)return n.push(r),n}else{if(o[2])return J.apply(n,e.getElementsByTagName(t)),n
if((s=o[3])&&b.getElementsByClassName&&e.getElementsByClassName)return J.apply(n,e.getElementsByClassName(s)),n}if(b.qsa&&(!j||!j.test(t))){if(f=d=H,h=e,m=9===a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(p=C(t),(d=e.getAttribute("id"))?f=d.replace(yt,"\\$&"):e.setAttribute("id",f),f="[id='"+f+"'] ",u=p.length;u--;)p[u]=f+c(p[u])
h=vt.test(t)&&l(e.parentNode)||e,m=p.join(",")}if(m)try{return J.apply(n,h.querySelectorAll(m)),n}catch(t){}finally{d||e.removeAttribute("id")}}}return S(t.replace(st,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[]
return t}function i(t){return t[H]=!0,t}function o(t){var e=$.createElement("div")
try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=t.length;i--;)x.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||V)-(~t.sourceIndex||V)
if(i)return i
if(n)for(;n=n.nextSibling;)if(n===e)return-1
return t?1:-1}function a(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function l(t){return t&&typeof t.getElementsByTagName!==U&&t}function u(){}function c(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value
return i}function p(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=R++
return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r)}:function(e,n,s){var a,l,u=[W,r]
if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(l=e[H]||(e[H]={}),(a=l[i])&&a[0]===W&&a[1]===r)return u[2]=a[2]
if(l[i]=u,u[2]=t(e,n,s))return!0}}}function d(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1
return!0}:t[0]}function f(t,n,i){for(var o=0,r=n.length;r>o;o++)e(t,n[o],i)
return i}function h(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;l>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),u&&e.push(a))
return s}function m(t,e,n,o,r,s){return o&&!o[H]&&(o=m(o)),r&&!r[H]&&(r=m(r,s)),i(function(i,s,a,l){var u,c,p,d=[],m=[],g=s.length,v=i||f(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:h(v,d,t,a,l),b=n?r||(i?t:g||o)?[]:s:y
if(n&&n(y,b,a,l),o)for(u=h(b,m),o(u,[],a,l),c=u.length;c--;)(p=u[c])&&(b[m[c]]=!(y[m[c]]=p))
if(i){if(r||t){if(r){for(u=[],c=b.length;c--;)(p=b[c])&&u.push(y[c]=p)
r(null,b=[],u,l)}for(c=b.length;c--;)(p=b[c])&&(u=r?Z.call(i,p):d[c])>-1&&(i[u]=!(s[u]=p))}}else b=h(b===s?b.splice(g,b.length):b),r?r(null,s,b,l):J.apply(s,b)})}function g(t){for(var e,n,i,o=t.length,r=x.relative[t[0].type],s=r||x.relative[" "],a=r?1:0,l=p(function(t){return t===e},s,!0),u=p(function(t){return Z.call(e,t)>-1},s,!0),f=[function(t,n,i){return!r&&(i||n!==k)||((e=n).nodeType?l(t,n,i):u(t,n,i))}];o>a;a++)if(n=x.relative[t[a].type])f=[p(d(f),n)]
else{if(n=x.filter[t[a].type].apply(null,t[a].matches),n[H]){for(i=++a;o>i&&!x.relative[t[i].type];i++);return m(a>1&&d(f),a>1&&c(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(st,"$1"),n,i>a&&g(t.slice(a,i)),o>i&&g(t=t.slice(i)),o>i&&c(t))}f.push(n)}return d(f)}function v(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,l,u){var c,p,d,f=0,m="0",g=i&&[],v=[],y=k,b=i||r&&x.find.TAG("*",u),w=W+=null==y?1:Math.random()||.1,T=b.length
for(u&&(k=s!==$&&s);m!==T&&null!=(c=b[m]);m++){if(r&&c){for(p=0;d=t[p++];)if(d(c,s,a)){l.push(c)
break}u&&(W=w)}o&&((c=!d&&c)&&f--,i&&g.push(c))}if(f+=m,o&&m!==f){for(p=0;d=n[p++];)d(g,v,s,a)
if(i){if(f>0)for(;m--;)g[m]||v[m]||(v[m]=Y.call(l))
v=h(v)}J.apply(l,v),u&&!i&&v.length>0&&f+n.length>1&&e.uniqueSort(l)}return u&&(W=w,k=y),g}
return o?i(s):s}var y,b,x,w,T,C,E,S,k,L,N,_,$,D,A,j,I,O,z,H="sizzle"+-new Date,M=t.document,W=0,R=0,P=n(),F=n(),q=n(),B=function(t,e){return t===e&&(N=!0),0},U="undefined",V=1<<31,Q={}.hasOwnProperty,X=[],Y=X.pop,G=X.push,J=X.push,K=X.slice,Z=X.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e
return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",et="[\\x20\\t\\r\\n\\f]",nt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=nt.replace("w","w#"),ot="\\["+et+"*("+nt+")(?:"+et+"*([*^$|!~]?=)"+et+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+et+"*\\]",rt=":("+nt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",st=new RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),at=new RegExp("^"+et+"*,"+et+"*"),lt=new RegExp("^"+et+"*([>+~]|"+et+")"+et+"*"),ut=new RegExp("="+et+"*([^\\]'\"]*?)"+et+"*\\]","g"),ct=new RegExp(rt),pt=new RegExp("^"+it+"$"),dt={ID:new RegExp("^#("+nt+")"),CLASS:new RegExp("^\\.("+nt+")"),TAG:new RegExp("^("+nt.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},ft=/^(?:input|select|textarea|button)$/i,ht=/^h\d$/i,mt=/^[^{]+\{\s*\[native \w/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,vt=/[+~]/,yt=/'|\\/g,bt=new RegExp("\\\\([\\da-f]{1,6}"+et+"?|("+et+")|.)","ig"),xt=function(t,e,n){var i="0x"+e-65536
return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)}
try{J.apply(X=K.call(M.childNodes),M.childNodes),X[M.childNodes.length].nodeType}catch(t){J={apply:X.length?function(t,e){G.apply(t,K.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}b=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement
return!!e&&"HTML"!==e.nodeName},_=e.setDocument=function(t){var e,n=t?t.ownerDocument||t:M,i=n.defaultView
return n!==$&&9===n.nodeType&&n.documentElement?($=n,D=n.documentElement,A=!T(n),i&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",function(){_()},!1):i.attachEvent&&i.attachEvent("onunload",function(){_()})),b.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),b.getElementsByTagName=o(function(t){return t.appendChild(n.createComment("")),!t.getElementsByTagName("*").length}),b.getElementsByClassName=mt.test(n.getElementsByClassName)&&o(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length}),b.getById=o(function(t){return D.appendChild(t).id=H,!n.getElementsByName||!n.getElementsByName(H).length}),b.getById?(x.find.ID=function(t,e){if(typeof e.getElementById!==U&&A){var n=e.getElementById(t)
return n&&n.parentNode?[n]:[]}},x.filter.ID=function(t){var e=t.replace(bt,xt)
return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(bt,xt)
return function(t){var n=typeof t.getAttributeNode!==U&&t.getAttributeNode("id")
return n&&n.value===e}}),x.find.TAG=b.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==U?e.getElementsByTagName(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t)
if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n)
return i}return r},x.find.CLASS=b.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==U&&A?e.getElementsByClassName(t):void 0},I=[],j=[],(b.qsa=mt.test(n.querySelectorAll))&&(o(function(t){t.innerHTML="<select msallowclip=''><option selected=''></option></select>",t.querySelectorAll("[msallowclip^='']").length&&j.push("[*^$]="+et+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||j.push("\\["+et+"*(?:value|"+tt+")"),t.querySelectorAll(":checked").length||j.push(":checked")}),o(function(t){var e=n.createElement("input")
e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&j.push("name"+et+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||j.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),j.push(",.*:")})),(b.matchesSelector=mt.test(O=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(t){b.disconnectedMatch=O.call(t,"div"),O.call(t,"[s!='']:x"),I.push("!=",rt)}),j=j.length&&new RegExp(j.join("|")),I=I.length&&new RegExp(I.join("|")),e=mt.test(D.compareDocumentPosition),z=e||mt.test(D.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode
return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0
return!1},B=e?function(t,e){if(t===e)return N=!0,0
var i=!t.compareDocumentPosition-!e.compareDocumentPosition
return i||(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!b.sortDetached&&e.compareDocumentPosition(t)===i?t===n||t.ownerDocument===M&&z(M,t)?-1:e===n||e.ownerDocument===M&&z(M,e)?1:L?Z.call(L,t)-Z.call(L,e):0:4&i?-1:1)}:function(t,e){if(t===e)return N=!0,0
var i,o=0,r=t.parentNode,a=e.parentNode,l=[t],u=[e]
if(!r||!a)return t===n?-1:e===n?1:r?-1:a?1:L?Z.call(L,t)-Z.call(L,e):0
if(r===a)return s(t,e)
for(i=t;i=i.parentNode;)l.unshift(i)
for(i=e;i=i.parentNode;)u.unshift(i)
for(;l[o]===u[o];)o++
return o?s(l[o],u[o]):l[o]===M?-1:u[o]===M?1:0},n):$},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==$&&_(t),n=n.replace(ut,"='$1']"),!(!b.matchesSelector||!A||I&&I.test(n)||j&&j.test(n)))try{var i=O.call(t,n)
if(i||b.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return e(n,$,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==$&&_(t),z(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==$&&_(t)
var n=x.attrHandle[e.toLowerCase()],i=n&&Q.call(x.attrHandle,e.toLowerCase())?n(t,e,!A):void 0
return void 0!==i?i:b.attributes||!A?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0
if(N=!b.detectDuplicates,L=!b.sortStable&&t.slice(0),t.sort(B),N){for(;e=t[o++];)e===t[o]&&(i=n.push(o))
for(;i--;)t.splice(n[i],1)}return L=null,t},w=e.getText=function(t){var e,n="",i=0,o=t.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent
for(t=t.firstChild;t;t=t.nextSibling)n+=w(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=w(e)
return n},x=e.selectors={cacheLength:50,createPseudo:i,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(bt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(bt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2]
return dt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ct.test(n)&&(e=C(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(bt,xt).toLowerCase()
return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=P[t+" "]
return e||(e=new RegExp("(^|"+et+")"+t+"("+et+"|$)"))&&P(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==U&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t)
return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e
return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var u,c,p,d,f,h,m=r!==s?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a
if(g){if(r){for(;m;){for(p=e;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1
h=m="only"===t&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(c=g[H]||(g[H]={}),u=c[t]||[],f=u[0]===W&&u[1],d=u[0]===W&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[m]||(d=f=0)||h.pop();)if(1===p.nodeType&&++d&&p===e){c[t]=[W,f,d]
break}}else if(y&&(u=(e[H]||(e[H]={}))[t])&&u[0]===W)d=u[1]
else for(;(p=++f&&p&&p[m]||(d=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++d||(y&&((p[H]||(p[H]={}))[t]=[W,d]),p!==e)););return(d-=o)===i||d%i==0&&d/i>=0}}},PSEUDO:function(t,n){var o,r=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t)
return r[H]?r(n):r.length>1?(o=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=Z.call(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=E(t.replace(st,"$1"))
return o[H]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return function(e){return(e.textContent||e.innerText||w(e)).indexOf(t)>-1}}),lang:i(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(bt,xt).toLowerCase(),function(e){var n
do{if(n=A?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType)
return!1}}),target:function(e){var n=t.location&&t.location.hash
return n&&n.slice(1)===e.id},root:function(t){return t===D},focus:function(t){return t===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return!1===t.disabled},disabled:function(t){return!0===t.disabled},checked:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1
return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return ht.test(t.nodeName)},input:function(t){return ft.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e
return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:a(function(){return[0]}),last:a(function(t,e){return[e-1]}),eq:a(function(t,e,n){return[0>n?n+e:n]}),even:a(function(t,e){for(var n=0;e>n;n+=2)t.push(n)
return t}),odd:a(function(t,e){for(var n=1;e>n;n+=2)t.push(n)
return t}),lt:a(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i)
return t}),gt:a(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i)
return t})}},x.pseudos.nth=x.pseudos.eq
for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(y)
for(y in{submit:!0,reset:!0})x.pseudos[y]=function(t){return function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t}}(y)
return u.prototype=x.filters=x.pseudos,x.setFilters=new u,C=e.tokenize=function(t,n){var i,o,r,s,a,l,u,c=F[t+" "]
if(c)return n?0:c.slice(0)
for(a=t,l=[],u=x.preFilter;a;){(!i||(o=at.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=lt.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(st," ")}),a=a.slice(i.length))
for(s in x.filter)!(o=dt[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length))
if(!i)break}return n?a.length:a?e.error(t):F(t,l).slice(0)},E=e.compile=function(t,e){var n,i=[],o=[],r=q[t+" "]
if(!r){for(e||(e=C(t)),n=e.length;n--;)r=g(e[n]),r[H]?i.push(r):o.push(r)
r=q(t,v(o,i)),r.selector=t}return r},S=e.select=function(t,e,n,i){var o,r,s,a,u,p="function"==typeof t&&t,d=!i&&C(t=p.selector||t)
if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&b.getById&&9===e.nodeType&&A&&x.relative[r[1].type]){if(!(e=(x.find.ID(s.matches[0].replace(bt,xt),e)||[])[0]))return n
p&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=dt.needsContext.test(t)?0:r.length;o--&&(s=r[o],!x.relative[a=s.type]);)if((u=x.find[a])&&(i=u(s.matches[0].replace(bt,xt),vt.test(r[0].type)&&l(e.parentNode)||e))){if(r.splice(o,1),!(t=i.length&&c(r)))return J.apply(n,i),n
break}}return(p||E(t,d))(i,e,!A,n,vt.test(t)&&l(e.parentNode)||e),n},b.sortStable=H.split("").sort(B).join("")===H,b.detectDuplicates=!!N,_(),b.sortDetached=o(function(t){return 1&t.compareDocumentPosition($.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),b.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(tt,function(t,e,n){var i
return n?void 0:!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t)
ot.find=ut,ot.expr=ut.selectors,ot.expr[":"]=ot.expr.pseudos,ot.unique=ut.uniqueSort,ot.text=ut.getText,ot.isXMLDoc=ut.isXML,ot.contains=ut.contains
var ct=ot.expr.match.needsContext,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^.[^:#\[\.,]*$/
ot.filter=function(t,e,n){var i=e[0]
return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?ot.find.matchesSelector(i,t)?[i]:[]:ot.find.matches(t,ot.grep(e,function(t){return 1===t.nodeType}))},ot.fn.extend({find:function(t){var e,n=[],i=this,o=i.length
if("string"!=typeof t)return this.pushStack(ot(t).filter(function(){for(e=0;o>e;e++)if(ot.contains(i[e],this))return!0}))
for(e=0;o>e;e++)ot.find(t,i[e],n)
return n=this.pushStack(o>1?ot.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&ct.test(t)?ot(t):t||[],!1).length}})
var ft,ht=t.document,mt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(ot.fn.init=function(t,e){var n,i
if(!t)return this
if("string"==typeof t){if(!(n="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:mt.exec(t))||!n[1]&&e)return!e||e.jquery?(e||ft).find(t):this.constructor(e).find(t)
if(n[1]){if(e=e instanceof ot?e[0]:e,ot.merge(this,ot.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:ht,!0)),pt.test(n[1])&&ot.isPlainObject(e))for(n in e)ot.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n])
return this}if((i=ht.getElementById(n[2]))&&i.parentNode){if(i.id!==n[2])return ft.find(t)
this.length=1,this[0]=i}return this.context=ht,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ot.isFunction(t)?void 0!==ft.ready?ft.ready(t):t(ot):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),ot.makeArray(t,this))}).prototype=ot.fn,ft=ot(ht)
var gt=/^(?:parents|prev(?:Until|All))/,vt={children:!0,contents:!0,next:!0,prev:!0}
ot.extend({dir:function(t,e,n){for(var i=[],o=t[e];o&&9!==o.nodeType&&(void 0===n||1!==o.nodeType||!ot(o).is(n));)1===o.nodeType&&i.push(o),o=o[e]
return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t)
return n}}),ot.fn.extend({has:function(t){var e,n=ot(t,this),i=n.length
return this.filter(function(){for(e=0;i>e;e++)if(ot.contains(this,n[e]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=ct.test(t)||"string"!=typeof t?ot(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&ot.find.matchesSelector(n,t))){r.push(n)
break}return this.pushStack(r.length>1?ot.unique(r):r)},index:function(t){return t?"string"==typeof t?ot.inArray(this[0],ot(t)):ot.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(ot.unique(ot.merge(this.get(),ot(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ot.each({parent:function(t){var e=t.parentNode
return e&&11!==e.nodeType?e:null},parents:function(t){return ot.dir(t,"parentNode")},parentsUntil:function(t,e,n){return ot.dir(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return ot.dir(t,"nextSibling")},prevAll:function(t){return ot.dir(t,"previousSibling")},nextUntil:function(t,e,n){return ot.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return ot.dir(t,"previousSibling",n)},siblings:function(t){return ot.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return ot.sibling(t.firstChild)},contents:function(t){return ot.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ot.merge([],t.childNodes)}},function(t,e){ot.fn[t]=function(n,i){var o=ot.map(this,e,n)
return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=ot.filter(i,o)),this.length>1&&(vt[t]||(o=ot.unique(o)),gt.test(t)&&(o=o.reverse())),this.pushStack(o)}})
var yt=/\S+/g,bt={}
ot.Callbacks=function(t){t="string"==typeof t?bt[t]||r(t):ot.extend({},t)
var e,n,i,o,s,a,l=[],u=!t.once&&[],c=function(r){for(n=t.memory&&r,i=!0,s=a||0,a=0,o=l.length,e=!0;l&&o>s;s++)if(!1===l[s].apply(r[0],r[1])&&t.stopOnFalse){n=!1
break}e=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var i=l.length
!function e(n){ot.each(n,function(n,i){var o=ot.type(i)
"function"===o?t.unique&&p.has(i)||l.push(i):i&&i.length&&"string"!==o&&e(i)})}(arguments),e?o=l.length:n&&(a=i,c(n))}return this},remove:function(){return l&&ot.each(arguments,function(t,n){for(var i;(i=ot.inArray(n,l,i))>-1;)l.splice(i,1),e&&(o>=i&&o--,s>=i&&s--)}),this},has:function(t){return t?ot.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||p.disable(),this},locked:function(){return!u},fireWith:function(t,n){return!l||i&&!u||(n=n||[],n=[t,n.slice?n.slice():n],e?u.push(n):c(n)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}}
return p},ot.extend({Deferred:function(t){var e=[["resolve","done",ot.Callbacks("once memory"),"resolved"],["reject","fail",ot.Callbacks("once memory"),"rejected"],["notify","progress",ot.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments
return ot.Deferred(function(n){ot.each(e,function(e,r){var s=ot.isFunction(t[e])&&t[e]
o[r[1]](function(){var t=s&&s.apply(this,arguments)
t&&ot.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?ot.extend(t,i):i}},o={}
return i.pipe=i.then,ot.each(e,function(t,r){var s=r[2],a=r[3]
i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=Y.call(arguments),s=r.length,a=1!==s||t&&ot.isFunction(t.promise)?s:0,l=1===a?t:ot.Deferred(),u=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?Y.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}}
if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&ot.isFunction(r[o].promise)?r[o].promise().done(u(o,i,r)).fail(l.reject).progress(u(o,n,e)):--a
return a||l.resolveWith(i,r),l.promise()}})
var xt
ot.fn.ready=function(t){return ot.ready.promise().done(t),this},ot.extend({isReady:!1,readyWait:1,holdReady:function(t){t?ot.readyWait++:ot.ready(!0)},ready:function(t){if(!0===t?!--ot.readyWait:!ot.isReady){if(!ht.body)return setTimeout(ot.ready)
ot.isReady=!0,!0!==t&&--ot.readyWait>0||(xt.resolveWith(ht,[ot]),ot.fn.triggerHandler&&(ot(ht).triggerHandler("ready"),ot(ht).off("ready")))}}}),ot.ready.promise=function(e){if(!xt)if(xt=ot.Deferred(),"complete"===ht.readyState)setTimeout(ot.ready)
else if(ht.addEventListener)ht.addEventListener("DOMContentLoaded",a,!1),t.addEventListener("load",a,!1)
else{ht.attachEvent("onreadystatechange",a),t.attachEvent("onload",a)
var n=!1
try{n=null==t.frameElement&&ht.documentElement}catch(t){}n&&n.doScroll&&function t(){if(!ot.isReady){try{n.doScroll("left")}catch(e){return setTimeout(t,50)}s(),ot.ready()}}()}return xt.promise(e)}
var wt,Tt="undefined"
for(wt in ot(nt))break
nt.ownLast="0"!==wt,nt.inlineBlockNeedsLayout=!1,ot(function(){var t,e,n,i;(n=ht.getElementsByTagName("body")[0])&&n.style&&(e=ht.createElement("div"),i=ht.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),typeof e.style.zoom!==Tt&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",nt.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(n.style.zoom=1)),n.removeChild(i))}),function(){var t=ht.createElement("div")
if(null==nt.deleteExpando){nt.deleteExpando=!0
try{delete t.test}catch(t){nt.deleteExpando=!1}}t=null}(),ot.acceptData=function(t){var e=ot.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1
return(1===n||9===n)&&(!e||!0!==e&&t.getAttribute("classid")===e)}
var Ct=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Et=/([A-Z])/g
ot.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return!!(t=t.nodeType?ot.cache[t[ot.expando]]:t[ot.expando])&&!u(t)},data:function(t,e,n){return c(t,e,n)},removeData:function(t,e){return p(t,e)},_data:function(t,e,n){return c(t,e,n,!0)},_removeData:function(t,e){return p(t,e,!0)}}),ot.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes
if(void 0===t){if(this.length&&(o=ot.data(r),1===r.nodeType&&!ot._data(r,"parsedAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=ot.camelCase(i.slice(5)),l(r,i,o[i])))
ot._data(r,"parsedAttrs",!0)}return o}return"object"==typeof t?this.each(function(){ot.data(this,t)}):arguments.length>1?this.each(function(){ot.data(this,t,e)}):r?l(r,t,ot.data(r,t)):void 0},removeData:function(t){return this.each(function(){ot.removeData(this,t)})}}),ot.extend({queue:function(t,e,n){var i
return t?(e=(e||"fx")+"queue",i=ot._data(t,e),n&&(!i||ot.isArray(n)?i=ot._data(t,e,ot.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx"
var n=ot.queue(t,e),i=n.length,o=n.shift(),r=ot._queueHooks(t,e),s=function(){ot.dequeue(t,e)}
"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks"
return ot._data(t,n)||ot._data(t,n,{empty:ot.Callbacks("once memory").add(function(){ot._removeData(t,e+"queue"),ot._removeData(t,n)})})}}),ot.fn.extend({queue:function(t,e){var n=2
return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?ot.queue(this[0],t):void 0===e?this:this.each(function(){var n=ot.queue(this,t,e)
ot._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&ot.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ot.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=ot.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])}
for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=ot._data(r[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a))
return a(),o.promise(e)}})
var St=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,kt=["Top","Right","Bottom","Left"],Lt=function(t,e){return t=e||t,"none"===ot.css(t,"display")||!ot.contains(t.ownerDocument,t)},Nt=ot.access=function(t,e,n,i,o,r,s){var a=0,l=t.length,u=null==n
if("object"===ot.type(n)){o=!0
for(a in n)ot.access(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,ot.isFunction(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(ot(t),n)})),e))for(;l>a;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)))
return o?t:u?e.call(t):l?e(t[0],n):r},_t=/^(?:checkbox|radio)$/i
!function(){var t=ht.createElement("input"),e=ht.createElement("div"),n=ht.createDocumentFragment()
if(e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",nt.leadingWhitespace=3===e.firstChild.nodeType,nt.tbody=!e.getElementsByTagName("tbody").length,nt.htmlSerialize=!!e.getElementsByTagName("link").length,nt.html5Clone="<:nav></:nav>"!==ht.createElement("nav").cloneNode(!0).outerHTML,t.type="checkbox",t.checked=!0,n.appendChild(t),nt.appendChecked=t.checked,e.innerHTML="<textarea>x</textarea>",nt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,n.appendChild(e),e.innerHTML="<input type='radio' checked='checked' name='t'/>",nt.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,nt.noCloneEvent=!0,e.attachEvent&&(e.attachEvent("onclick",function(){nt.noCloneEvent=!1}),e.cloneNode(!0).click()),null==nt.deleteExpando){nt.deleteExpando=!0
try{delete e.test}catch(t){nt.deleteExpando=!1}}}(),function(){var e,n,i=ht.createElement("div")
for(e in{submit:!0,change:!0,focusin:!0})n="on"+e,(nt[e+"Bubbles"]=n in t)||(i.setAttribute(n,"t"),nt[e+"Bubbles"]=!1===i.attributes[n].expando)
i=null}()
var $t=/^(?:input|select|textarea)$/i,Dt=/^key/,At=/^(?:mouse|pointer|contextmenu)|click/,jt=/^(?:focusinfocus|focusoutblur)$/,It=/^([^.]*)(?:\.(.+)|)$/
ot.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=ot._data(t)
if(g){for(n.handler&&(l=n,n=l.handler,o=l.selector),n.guid||(n.guid=ot.guid++),(s=g.events)||(s=g.events={}),(c=g.handle)||(c=g.handle=function(t){return typeof ot===Tt||t&&ot.event.triggered===t.type?void 0:ot.event.dispatch.apply(c.elem,arguments)},c.elem=t),e=(e||"").match(yt)||[""],a=e.length;a--;)r=It.exec(e[a])||[],f=m=r[1],h=(r[2]||"").split(".").sort(),f&&(u=ot.event.special[f]||{},f=(o?u.delegateType:u.bindType)||f,u=ot.event.special[f]||{},p=ot.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&ot.expr.match.needsContext.test(o),namespace:h.join(".")},l),(d=s[f])||(d=s[f]=[],d.delegateCount=0,u.setup&&!1!==u.setup.call(t,i,h,c)||(t.addEventListener?t.addEventListener(f,c,!1):t.attachEvent&&t.attachEvent("on"+f,c))),u.add&&(u.add.call(t,p),p.handler.guid||(p.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),ot.event.global[f]=!0)
t=null}},remove:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=ot.hasData(t)&&ot._data(t)
if(g&&(c=g.events)){for(e=(e||"").match(yt)||[""],u=e.length;u--;)if(a=It.exec(e[u])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f){for(p=ot.event.special[f]||{},f=(i?p.delegateType:p.bindType)||f,d=c[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=d.length;r--;)s=d[r],!o&&m!==s.origType||n&&n.guid!==s.guid||a&&!a.test(s.namespace)||i&&i!==s.selector&&("**"!==i||!s.selector)||(d.splice(r,1),s.selector&&d.delegateCount--,p.remove&&p.remove.call(t,s))
l&&!d.length&&(p.teardown&&!1!==p.teardown.call(t,h,g.handle)||ot.removeEvent(t,f,g.handle),delete c[f])}else for(f in c)ot.event.remove(t,f+e[u],n,i,!0)
ot.isEmptyObject(c)&&(delete g.handle,ot._removeData(t,"events"))}},trigger:function(e,n,i,o){var r,s,a,l,u,c,p,d=[i||ht],f=et.call(e,"type")?e.type:e,h=et.call(e,"namespace")?e.namespace.split("."):[]
if(a=c=i=i||ht,3!==i.nodeType&&8!==i.nodeType&&!jt.test(f+ot.event.triggered)&&(f.indexOf(".")>=0&&(h=f.split("."),f=h.shift(),h.sort()),s=f.indexOf(":")<0&&"on"+f,e=e[ot.expando]?e:new ot.Event(f,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:ot.makeArray(n,[e]),u=ot.event.special[f]||{},o||!u.trigger||!1!==u.trigger.apply(i,n))){if(!o&&!u.noBubble&&!ot.isWindow(i)){for(l=u.delegateType||f,jt.test(l+f)||(a=a.parentNode);a;a=a.parentNode)d.push(a),c=a
c===(i.ownerDocument||ht)&&d.push(c.defaultView||c.parentWindow||t)}for(p=0;(a=d[p++])&&!e.isPropagationStopped();)e.type=p>1?l:u.bindType||f,r=(ot._data(a,"events")||{})[e.type]&&ot._data(a,"handle"),r&&r.apply(a,n),(r=s&&a[s])&&r.apply&&ot.acceptData(a)&&(e.result=r.apply(a,n),!1===e.result&&e.preventDefault())
if(e.type=f,!o&&!e.isDefaultPrevented()&&(!u._default||!1===u._default.apply(d.pop(),n))&&ot.acceptData(i)&&s&&i[f]&&!ot.isWindow(i)){c=i[s],c&&(i[s]=null),ot.event.triggered=f
try{i[f]()}catch(t){}ot.event.triggered=void 0,c&&(i[s]=c)}return e.result}},dispatch:function(t){t=ot.event.fix(t)
var e,n,i,o,r,s=[],a=Y.call(arguments),l=(ot._data(this,"events")||{})[t.type]||[],u=ot.event.special[t.type]||{}
if(a[0]=t,t.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,t)){for(s=ot.event.handlers.call(this,t,l),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,r=0;(i=o.handlers[r++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(i.namespace))&&(t.handleObj=i,t.data=i.data,void 0!==(n=((ot.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,a))&&!1===(t.result=n)&&(t.preventDefault(),t.stopPropagation()))
return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,l=t.target
if(a&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==t.type)){for(o=[],r=0;a>r;r++)i=e[r],n=i.selector+" ",void 0===o[n]&&(o[n]=i.needsContext?ot(n,this).index(l)>=0:ot.find(n,this,null,[l]).length),o[n]&&o.push(i)
o.length&&s.push({elem:l,handlers:o})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},fix:function(t){if(t[ot.expando])return t
var e,n,i,o=t.type,r=t,s=this.fixHooks[o]
for(s||(this.fixHooks[o]=s=At.test(o)?this.mouseHooks:Dt.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,t=new ot.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n]
return t.target||(t.target=r.srcElement||ht),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,s.filter?s.filter(t,r):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,r=e.button,s=e.fromElement
return null==t.pageX&&null!=e.clientX&&(i=t.target.ownerDocument||ht,o=i.documentElement,n=i.body,t.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!t.relatedTarget&&s&&(t.relatedTarget=s===t.target?e.toElement:s),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ot.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return ot.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var o=ot.extend(new ot.Event,n,{type:t,isSimulated:!0,originalEvent:{}})
i?ot.event.trigger(o,null,e):ot.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},ot.removeEvent=ht.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){var i="on"+e
t.detachEvent&&(typeof t[i]===Tt&&(t[i]=null),t.detachEvent(i,n))},ot.Event=function(t,e){return this instanceof ot.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?d:f):this.type=t,e&&ot.extend(this,e),this.timeStamp=t&&t.timeStamp||ot.now(),void(this[ot.expando]=!0)):new ot.Event(t,e)},ot.Event.prototype={isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var t=this.originalEvent
this.isDefaultPrevented=d,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent
this.isPropagationStopped=d,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent
this.isImmediatePropagationStopped=d,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},ot.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){ot.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj
return(!o||o!==i&&!ot.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),nt.submitBubbles||(ot.event.special.submit={setup:function(){return!ot.nodeName(this,"form")&&void ot.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,n=ot.nodeName(e,"input")||ot.nodeName(e,"button")?e.form:void 0
n&&!ot._data(n,"submitBubbles")&&(ot.event.add(n,"submit._submit",function(t){t._submit_bubble=!0}),ot._data(n,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&ot.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return!ot.nodeName(this,"form")&&void ot.event.remove(this,"._submit")}}),nt.changeBubbles||(ot.event.special.change={setup:function(){return $t.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ot.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),ot.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),ot.event.simulate("change",this,t,!0)})),!1):void ot.event.add(this,"beforeactivate._change",function(t){var e=t.target
$t.test(e.nodeName)&&!ot._data(e,"changeBubbles")&&(ot.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ot.event.simulate("change",this.parentNode,t,!0)}),ot._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target
return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ot.event.remove(this,"._change"),!$t.test(this.nodeName)}}),nt.focusinBubbles||ot.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){ot.event.simulate(e,t.target,ot.event.fix(t),!0)}
ot.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=ot._data(i,e)
o||i.addEventListener(t,n,!0),ot._data(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ot._data(i,e)-1
o?ot._data(i,e,o):(i.removeEventListener(t,n,!0),ot._removeData(i,e))}}}),ot.fn.extend({on:function(t,e,n,i,o){var r,s
if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0)
for(r in t)this.on(r,e,n,t[r],o)
return this}if(null==n&&null==i?(i=e,n=e=void 0):null==i&&("string"==typeof e?(i=n,n=void 0):(i=n,n=e,e=void 0)),!1===i)i=f
else if(!i)return this
return 1===o&&(s=i,i=function(t){return ot().off(t),s.apply(this,arguments)},i.guid=s.guid||(s.guid=ot.guid++)),this.each(function(){ot.event.add(this,t,i,n,e)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,e,n){var i,o
if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,ot(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
if("object"==typeof t){for(o in t)this.off(o,e,t[o])
return this}return(!1===e||"function"==typeof e)&&(n=e,e=void 0),!1===n&&(n=f),this.each(function(){ot.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){ot.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0]
return n?ot.event.trigger(t,e,n,!0):void 0}})
var Ot="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",zt=/ jQuery\d+="(?:null|\d+)"/g,Ht=new RegExp("<(?:"+Ot+")[\\s/>]","i"),Mt=/^\s+/,Wt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Rt=/<([\w:]+)/,Pt=/<tbody/i,Ft=/<|&#?\w+;/,qt=/<(?:script|style|link)/i,Bt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ut=/^$|\/(?:java|ecma)script/i,Vt=/^true\/(.*)/,Qt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:nt.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Yt=m(ht),Gt=Yt.appendChild(ht.createElement("div"))
Xt.optgroup=Xt.option,Xt.tbody=Xt.tfoot=Xt.colgroup=Xt.caption=Xt.thead,Xt.th=Xt.td,ot.extend({clone:function(t,e,n){var i,o,r,s,a,l=ot.contains(t.ownerDocument,t)
if(nt.html5Clone||ot.isXMLDoc(t)||!Ht.test("<"+t.nodeName+">")?r=t.cloneNode(!0):(Gt.innerHTML=t.outerHTML,Gt.removeChild(r=Gt.firstChild)),!(nt.noCloneEvent&&nt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ot.isXMLDoc(t)))for(i=g(r),a=g(t),s=0;null!=(o=a[s]);++s)i[s]&&C(o,i[s])
if(e)if(n)for(a=a||g(t),i=i||g(r),s=0;null!=(o=a[s]);s++)T(o,i[s])
else T(t,r)
return i=g(r,"script"),i.length>0&&w(i,!l&&g(t,"script")),i=a=o=null,r},buildFragment:function(t,e,n,i){for(var o,r,s,a,l,u,c,p=t.length,d=m(e),f=[],h=0;p>h;h++)if((r=t[h])||0===r)if("object"===ot.type(r))ot.merge(f,r.nodeType?[r]:r)
else if(Ft.test(r)){for(a=a||d.appendChild(e.createElement("div")),l=(Rt.exec(r)||["",""])[1].toLowerCase(),c=Xt[l]||Xt._default,a.innerHTML=c[1]+r.replace(Wt,"<$1></$2>")+c[2],o=c[0];o--;)a=a.lastChild
if(!nt.leadingWhitespace&&Mt.test(r)&&f.push(e.createTextNode(Mt.exec(r)[0])),!nt.tbody)for(r="table"!==l||Pt.test(r)?"<table>"!==c[1]||Pt.test(r)?0:a:a.firstChild,o=r&&r.childNodes.length;o--;)ot.nodeName(u=r.childNodes[o],"tbody")&&!u.childNodes.length&&r.removeChild(u)
for(ot.merge(f,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild)
a=d.lastChild}else f.push(e.createTextNode(r))
for(a&&d.removeChild(a),nt.appendChecked||ot.grep(g(f,"input"),v),h=0;r=f[h++];)if((!i||-1===ot.inArray(r,i))&&(s=ot.contains(r.ownerDocument,r),a=g(d.appendChild(r),"script"),s&&w(a),n))for(o=0;r=a[o++];)Ut.test(r.type||"")&&n.push(r)
return a=null,d},cleanData:function(t,e){for(var n,i,o,r,s=0,a=ot.expando,l=ot.cache,u=nt.deleteExpando,c=ot.event.special;null!=(n=t[s]);s++)if((e||ot.acceptData(n))&&(o=n[a],r=o&&l[o])){if(r.events)for(i in r.events)c[i]?ot.event.remove(n,i):ot.removeEvent(n,i,r.handle)
l[o]&&(delete l[o],u?delete n[a]:typeof n.removeAttribute!==Tt?n.removeAttribute(a):n[a]=null,X.push(o))}}}),ot.fn.extend({text:function(t){return Nt(this,function(t){return void 0===t?ot.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ht).createTextNode(t))},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){y(this,t).appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t)
e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?ot.filter(t,this):this,o=0;null!=(n=i[o]);o++)e||1!==n.nodeType||ot.cleanData(g(n)),n.parentNode&&(e&&ot.contains(n.ownerDocument,n)&&w(g(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ot.cleanData(g(t,!1));t.firstChild;)t.removeChild(t.firstChild)
t.options&&ot.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return ot.clone(this,t,e)})},html:function(t){return Nt(this,function(t){var e=this[0]||{},n=0,i=this.length
if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(zt,""):void 0
if(!("string"!=typeof t||qt.test(t)||!nt.htmlSerialize&&Ht.test(t)||!nt.leadingWhitespace&&Mt.test(t)||Xt[(Rt.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Wt,"<$1></$2>")
try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(ot.cleanData(g(e,!1)),e.innerHTML=t)
e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0]
return this.domManip(arguments,function(e){t=this.parentNode,ot.cleanData(g(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=G.apply([],t)
var n,i,o,r,s,a,l=0,u=this.length,c=this,p=u-1,d=t[0],f=ot.isFunction(d)
if(f||u>1&&"string"==typeof d&&!nt.checkClone&&Bt.test(d))return this.each(function(n){var i=c.eq(n)
f&&(t[0]=d.call(this,n,i.html())),i.domManip(t,e)})
if(u&&(a=ot.buildFragment(t,this[0].ownerDocument,!1,this),n=a.firstChild,1===a.childNodes.length&&(a=n),n)){for(r=ot.map(g(a,"script"),b),o=r.length;u>l;l++)i=a,l!==p&&(i=ot.clone(i,!0,!0),o&&ot.merge(r,g(i,"script"))),e.call(this[l],i,l)
if(o)for(s=r[r.length-1].ownerDocument,ot.map(r,x),l=0;o>l;l++)i=r[l],Ut.test(i.type||"")&&!ot._data(i,"globalEval")&&ot.contains(s,i)&&(i.src?ot._evalUrl&&ot._evalUrl(i.src):ot.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Qt,"")))
a=n=null}return this}}),ot.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ot.fn[t]=function(t){for(var n,i=0,o=[],r=ot(t),s=r.length-1;s>=i;i++)n=i===s?this:this.clone(!0),ot(r[i])[e](n),J.apply(o,n.get())
return this.pushStack(o)}})
var Jt,Kt={}
!function(){var t
nt.shrinkWrapBlocks=function(){if(null!=t)return t
t=!1
var e,n,i
return n=ht.getElementsByTagName("body")[0],n&&n.style?(e=ht.createElement("div"),i=ht.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),typeof e.style.zoom!==Tt&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(ht.createElement("div")).style.width="5px",t=3!==e.offsetWidth),n.removeChild(i),t):void 0}}()
var Zt,te,ee=/^margin/,ne=new RegExp("^("+St+")(?!px)[a-z%]+$","i"),ie=/^(top|right|bottom|left)$/
t.getComputedStyle?(Zt=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)},te=function(t,e,n){var i,o,r,s,a=t.style
return n=n||Zt(t),s=n?n.getPropertyValue(e)||n[e]:void 0,n&&(""!==s||ot.contains(t.ownerDocument,t)||(s=ot.style(t,e)),ne.test(s)&&ee.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0===s?s:s+""}):ht.documentElement.currentStyle&&(Zt=function(t){return t.currentStyle},te=function(t,e,n){var i,o,r,s,a=t.style
return n=n||Zt(t),s=n?n[e]:void 0,null==s&&a&&a[e]&&(s=a[e]),ne.test(s)&&!ie.test(e)&&(i=a.left,o=t.runtimeStyle,r=o&&o.left,r&&(o.left=t.currentStyle.left),a.left="fontSize"===e?"1em":s,s=a.pixelLeft+"px",a.left=i,r&&(o.left=r)),void 0===s?s:s+""||"auto"}),!function(){function e(){var e,n,i,o;(n=ht.getElementsByTagName("body")[0])&&n.style&&(e=ht.createElement("div"),i=ht.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r=s=!1,l=!0,t.getComputedStyle&&(r="1%"!==(t.getComputedStyle(e,null)||{}).top,s="4px"===(t.getComputedStyle(e,null)||{width:"4px"}).width,o=e.appendChild(ht.createElement("div")),o.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",o.style.marginRight=o.style.width="0",e.style.width="1px",l=!parseFloat((t.getComputedStyle(o,null)||{}).marginRight)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=e.getElementsByTagName("td"),o[0].style.cssText="margin:0;border:0;padding:0;display:none",a=0===o[0].offsetHeight,a&&(o[0].style.display="",o[1].style.display="none",a=0===o[0].offsetHeight),n.removeChild(i))}var n,i,o,r,s,a,l
n=ht.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",o=n.getElementsByTagName("a")[0],(i=o&&o.style)&&(i.cssText="float:left;opacity:.5",nt.opacity="0.5"===i.opacity,nt.cssFloat=!!i.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",nt.clearCloneStyle="content-box"===n.style.backgroundClip,nt.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,ot.extend(nt,{reliableHiddenOffsets:function(){return null==a&&e(),a},boxSizingReliable:function(){return null==s&&e(),s},pixelPosition:function(){return null==r&&e(),r},reliableMarginRight:function(){return null==l&&e(),l}}))}(),ot.swap=function(t,e,n,i){var o,r,s={}
for(r in e)s[r]=t.style[r],t.style[r]=e[r]
o=n.apply(t,i||[])
for(r in e)t.style[r]=s[r]
return o}
var oe=/alpha\([^)]*\)/i,re=/opacity\s*=\s*([^)]*)/,se=/^(none|table(?!-c[ea]).+)/,ae=new RegExp("^("+St+")(.*)$","i"),le=new RegExp("^([+-])=("+St+")","i"),ue={position:"absolute",visibility:"hidden",display:"block"},ce={letterSpacing:"0",fontWeight:"400"},pe=["Webkit","O","Moz","ms"]
ot.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=te(t,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:nt.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=ot.camelCase(e),l=t.style
if(e=ot.cssProps[a]||(ot.cssProps[a]=L(l,a)),s=ot.cssHooks[e]||ot.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:l[e]
if(r=typeof n,"string"===r&&(o=le.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(ot.css(t,e)),r="number"),null!=n&&n===n&&("number"!==r||ot.cssNumber[a]||(n+="px"),nt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(s&&"set"in s&&void 0===(n=s.set(t,n,i)))))try{l[e]=n}catch(t){}}},css:function(t,e,n,i){var o,r,s,a=ot.camelCase(e)
return e=ot.cssProps[a]||(ot.cssProps[a]=L(t.style,a)),s=ot.cssHooks[e]||ot.cssHooks[a],s&&"get"in s&&(r=s.get(t,!0,n)),void 0===r&&(r=te(t,e,i)),"normal"===r&&e in ce&&(r=ce[e]),""===n||n?(o=parseFloat(r),!0===n||ot.isNumeric(o)?o||0:r):r}}),ot.each(["height","width"],function(t,e){ot.cssHooks[e]={get:function(t,n,i){return n?se.test(ot.css(t,"display"))&&0===t.offsetWidth?ot.swap(t,ue,function(){return D(t,e,i)}):D(t,e,i):void 0},set:function(t,n,i){var o=i&&Zt(t)
return _(t,n,i?$(t,e,i,nt.boxSizing&&"border-box"===ot.css(t,"boxSizing",!1,o),o):0)}}}),nt.opacity||(ot.cssHooks.opacity={get:function(t,e){return re.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,o=ot.isNumeric(e)?"alpha(opacity="+100*e+")":"",r=i&&i.filter||n.filter||""
n.zoom=1,(e>=1||""===e)&&""===ot.trim(r.replace(oe,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||i&&!i.filter)||(n.filter=oe.test(r)?r.replace(oe,o):r+" "+o)}}),ot.cssHooks.marginRight=k(nt.reliableMarginRight,function(t,e){return e?ot.swap(t,{display:"inline-block"},te,[t,"marginRight"]):void 0}),ot.each({margin:"",padding:"",border:"Width"},function(t,e){ot.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+kt[i]+e]=r[i]||r[i-2]||r[0]
return o}},ee.test(t)||(ot.cssHooks[t+e].set=_)}),ot.fn.extend({css:function(t,e){return Nt(this,function(t,e,n){var i,o,r={},s=0
if(ot.isArray(e)){for(i=Zt(t),o=e.length;o>s;s++)r[e[s]]=ot.css(t,e[s],!1,i)
return r}return void 0!==n?ot.style(t,e,n):ot.css(t,e)},t,e,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Lt(this)?ot(this).show():ot(this).hide()})}}),ot.Tween=A,A.prototype={constructor:A,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(ot.cssNumber[n]?"":"px")},cur:function(){var t=A.propHooks[this.prop]
return t&&t.get?t.get(this):A.propHooks._default.get(this)},run:function(t){var e,n=A.propHooks[this.prop]
return this.pos=e=this.options.duration?ot.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):A.propHooks._default.set(this),this}},A.prototype.init.prototype=A.prototype,A.propHooks={_default:{get:function(t){var e
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=ot.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){ot.fx.step[t.prop]?ot.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[ot.cssProps[t.prop]]||ot.cssHooks[t.prop])?ot.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},A.propHooks.scrollTop=A.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ot.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},ot.fx=A.prototype.init,ot.fx.step={}
var de,fe,he=/^(?:toggle|show|hide)$/,me=new RegExp("^(?:([+-])=|)("+St+")([a-z%]*)$","i"),ge=/queueHooks$/,ve=[z],ye={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),o=me.exec(e),r=o&&o[3]||(ot.cssNumber[t]?"":"px"),s=(ot.cssNumber[t]||"px"!==r&&+i)&&me.exec(ot.css(n.elem,t)),a=1,l=20
if(s&&s[3]!==r){r=r||s[3],o=o||[],s=+i||1
do{a=a||".5",s/=a,ot.style(n.elem,t,s+r)}while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(s=n.start=+s||+i||0,n.unit=r,n.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),n}]}
ot.Animation=ot.extend(M,{tweener:function(t,e){ot.isFunction(t)?(e=t,t=["*"]):t=t.split(" ")
for(var n,i=0,o=t.length;o>i;i++)n=t[i],ye[n]=ye[n]||[],ye[n].unshift(e)},prefilter:function(t,e){e?ve.unshift(t):ve.push(t)}}),ot.speed=function(t,e,n){var i=t&&"object"==typeof t?ot.extend({},t):{complete:n||!n&&e||ot.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ot.isFunction(e)&&e}
return i.duration=ot.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ot.fx.speeds?ot.fx.speeds[i.duration]:ot.fx.speeds._default,(null==i.queue||!0===i.queue)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){ot.isFunction(i.old)&&i.old.call(this),i.queue&&ot.dequeue(this,i.queue)},i},ot.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=ot.isEmptyObject(t),r=ot.speed(e,n,i),s=function(){var e=M(this,ot.extend({},t),r);(o||ot._data(this,"finish"))&&e.stop(!0)}
return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop
delete t.stop,e(n)}
return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=ot.timers,s=ot._data(this)
if(o)s[o]&&s[o].stop&&i(s[o])
else for(o in s)s[o]&&s[o].stop&&ge.test(o)&&i(s[o])
for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));(e||!n)&&ot.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=ot._data(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=ot.timers,s=i?i.length:0
for(n.finish=!0,ot.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1))
for(e=0;s>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this)
delete n.finish})}}),ot.each(["toggle","show","hide"],function(t,e){var n=ot.fn[e]
ot.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(I(e,!0),t,i,o)}}),ot.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ot.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),ot.timers=[],ot.fx.tick=function(){var t,e=ot.timers,n=0
for(de=ot.now();n<e.length;n++)(t=e[n])()||e[n]!==t||e.splice(n--,1)
e.length||ot.fx.stop(),de=void 0},ot.fx.timer=function(t){ot.timers.push(t),t()?ot.fx.start():ot.timers.pop()},ot.fx.interval=13,ot.fx.start=function(){fe||(fe=setInterval(ot.fx.tick,ot.fx.interval))},ot.fx.stop=function(){clearInterval(fe),fe=null},ot.fx.speeds={slow:600,fast:200,_default:400},ot.fn.delay=function(t,e){return t=ot.fx?ot.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t)
n.stop=function(){clearTimeout(i)}})},function(){var t,e,n,i,o
e=ht.createElement("div"),e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=e.getElementsByTagName("a")[0],n=ht.createElement("select"),o=n.appendChild(ht.createElement("option")),t=e.getElementsByTagName("input")[0],i.style.cssText="top:1px",nt.getSetAttribute="t"!==e.className,nt.style=/top/.test(i.getAttribute("style")),nt.hrefNormalized="/a"===i.getAttribute("href"),nt.checkOn=!!t.value,nt.optSelected=o.selected,nt.enctype=!!ht.createElement("form").enctype,n.disabled=!0,nt.optDisabled=!o.disabled,t=ht.createElement("input"),t.setAttribute("value",""),nt.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),nt.radioValue="t"===t.value}()
var be=/\r/g
ot.fn.extend({val:function(t){var e,n,i,o=this[0]
return arguments.length?(i=ot.isFunction(t),this.each(function(n){var o
1===this.nodeType&&(o=i?t.call(this,n,ot(this).val()):t,null==o?o="":"number"==typeof o?o+="":ot.isArray(o)&&(o=ot.map(o,function(t){return null==t?"":t+""})),(e=ot.valHooks[this.type]||ot.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=ot.valHooks[o.type]||ot.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(be,""):null==n?"":n)):void 0}}),ot.extend({valHooks:{option:{get:function(t){var e=ot.find.attr(t,"value")
return null!=e?e:ot.trim(ot.text(t))}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,r="select-one"===t.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==o||(nt.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ot.nodeName(n.parentNode,"optgroup"))){if(e=ot(n).val(),r)return e
s.push(e)}return s},set:function(t,e){for(var n,i,o=t.options,r=ot.makeArray(e),s=o.length;s--;)if(i=o[s],ot.inArray(ot.valHooks.option.get(i),r)>=0)try{i.selected=n=!0}catch(t){i.scrollHeight}else i.selected=!1
return n||(t.selectedIndex=-1),o}}}}),ot.each(["radio","checkbox"],function(){ot.valHooks[this]={set:function(t,e){return ot.isArray(e)?t.checked=ot.inArray(ot(t).val(),e)>=0:void 0}},nt.checkOn||(ot.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})
var xe,we,Te=ot.expr.attrHandle,Ce=/^(?:checked|selected)$/i,Ee=nt.getSetAttribute,Se=nt.input
ot.fn.extend({attr:function(t,e){return Nt(this,ot.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ot.removeAttr(this,t)})}}),ot.extend({attr:function(t,e,n){var i,o,r=t.nodeType
if(t&&3!==r&&8!==r&&2!==r)return typeof t.getAttribute===Tt?ot.prop(t,e,n):(1===r&&ot.isXMLDoc(t)||(e=e.toLowerCase(),i=ot.attrHooks[e]||(ot.expr.match.bool.test(e)?we:xe)),void 0===n?i&&"get"in i&&null!==(o=i.get(t,e))?o:(o=ot.find.attr(t,e),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(t,n,e))?o:(t.setAttribute(e,n+""),n):void ot.removeAttr(t,e))},removeAttr:function(t,e){var n,i,o=0,r=e&&e.match(yt)
if(r&&1===t.nodeType)for(;n=r[o++];)i=ot.propFix[n]||n,ot.expr.match.bool.test(n)?Se&&Ee||!Ce.test(n)?t[i]=!1:t[ot.camelCase("default-"+n)]=t[i]=!1:ot.attr(t,n,""),t.removeAttribute(Ee?n:i)},attrHooks:{type:{set:function(t,e){if(!nt.radioValue&&"radio"===e&&ot.nodeName(t,"input")){var n=t.value
return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),we={set:function(t,e,n){return!1===e?ot.removeAttr(t,n):Se&&Ee||!Ce.test(n)?t.setAttribute(!Ee&&ot.propFix[n]||n,n):t[ot.camelCase("default-"+n)]=t[n]=!0,n}},ot.each(ot.expr.match.bool.source.match(/\w+/g),function(t,e){var n=Te[e]||ot.find.attr
Te[e]=Se&&Ee||!Ce.test(e)?function(t,e,i){var o,r
return i||(r=Te[e],Te[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,Te[e]=r),o}:function(t,e,n){return n?void 0:t[ot.camelCase("default-"+e)]?e.toLowerCase():null}}),Se&&Ee||(ot.attrHooks.value={set:function(t,e,n){return ot.nodeName(t,"input")?void(t.defaultValue=e):xe&&xe.set(t,e,n)}}),Ee||(xe={set:function(t,e,n){var i=t.getAttributeNode(n)
return i||t.setAttributeNode(i=t.ownerDocument.createAttribute(n)),i.value=e+="","value"===n||e===t.getAttribute(n)?e:void 0}},Te.id=Te.name=Te.coords=function(t,e,n){var i
return n?void 0:(i=t.getAttributeNode(e))&&""!==i.value?i.value:null},ot.valHooks.button={get:function(t,e){var n=t.getAttributeNode(e)
return n&&n.specified?n.value:void 0},set:xe.set},ot.attrHooks.contenteditable={set:function(t,e,n){xe.set(t,""!==e&&e,n)}},ot.each(["width","height"],function(t,e){ot.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}}})),nt.style||(ot.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+""}})
var ke=/^(?:input|select|textarea|button|object)$/i,Le=/^(?:a|area)$/i
ot.fn.extend({prop:function(t,e){return Nt(this,ot.prop,t,e,arguments.length>1)},removeProp:function(t){return t=ot.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(t){}})}}),ot.extend({propFix:{for:"htmlFor",class:"className"},prop:function(t,e,n){var i,o,r,s=t.nodeType
if(t&&3!==s&&8!==s&&2!==s)return r=1!==s||!ot.isXMLDoc(t),r&&(e=ot.propFix[e]||e,o=ot.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=ot.find.attr(t,"tabindex")
return e?parseInt(e,10):ke.test(t.nodeName)||Le.test(t.nodeName)&&t.href?0:-1}}}}),nt.hrefNormalized||ot.each(["href","src"],function(t,e){ot.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),nt.optSelected||(ot.propHooks.selected={get:function(t){var e=t.parentNode
return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),ot.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ot.propFix[this.toLowerCase()]=this}),nt.enctype||(ot.propFix.enctype="encoding")
var Ne=/[\t\r\n\f]/g
ot.fn.extend({addClass:function(t){var e,n,i,o,r,s,a=0,l=this.length,u="string"==typeof t&&t
if(ot.isFunction(t))return this.each(function(e){ot(this).addClass(t.call(this,e,this.className))})
if(u)for(e=(t||"").match(yt)||[];l>a;a++)if(n=this[a],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ne," "):" ")){for(r=0;o=e[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ")
s=ot.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(t){var e,n,i,o,r,s,a=0,l=this.length,u=0===arguments.length||"string"==typeof t&&t
if(ot.isFunction(t))return this.each(function(e){ot(this).removeClass(t.call(this,e,this.className))})
if(u)for(e=(t||"").match(yt)||[];l>a;a++)if(n=this[a],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ne," "):"")){for(r=0;o=e[r++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ")
s=t?ot.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(t,e){var n=typeof t
return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(ot.isFunction(t)?function(n){ot(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,i=0,o=ot(this),r=t.match(yt)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e)
else(n===Tt||"boolean"===n)&&(this.className&&ot._data(this,"__className__",this.className),this.className=this.className||!1===t?"":ot._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ne," ").indexOf(e)>=0)return!0
return!1}}),ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ot.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ot.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}})
var _e=ot.now(),$e=/\?/,De=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
ot.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"")
var n,i=null,o=ot.trim(e+"")
return o&&!ot.trim(o.replace(De,function(t,e,o,r){return n&&e&&(i=0),0===i?t:(n=o||e,i+=!r-!o,"")}))?Function("return "+o)():ot.error("Invalid JSON: "+e)},ot.parseXML=function(e){var n,i
if(!e||"string"!=typeof e)return null
try{t.DOMParser?(i=new DOMParser,n=i.parseFromString(e,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e))}catch(t){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ot.error("Invalid XML: "+e),n}
var Ae,je,Ie=/#.*$/,Oe=/([?&])_=[^&]*/,ze=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,He=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Me=/^(?:GET|HEAD)$/,We=/^\/\//,Re=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Pe={},Fe={},qe="*/".concat("*")
try{je=location.href}catch(t){je=ht.createElement("a"),je.href="",je=je.href}Ae=Re.exec(je.toLowerCase())||[],ot.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:je,type:"GET",isLocal:He.test(Ae[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ot.parseJSON,"text xml":ot.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?P(P(t,ot.ajaxSettings),e):P(ot.ajaxSettings,t)},ajaxPrefilter:W(Pe),ajaxTransport:W(Fe),ajax:function(t,e){function n(t,e,n,i){var o,c,v,y,x,T=e
2!==b&&(b=2,a&&clearTimeout(a),u=void 0,s=i||"",w.readyState=t>0?4:0,o=t>=200&&300>t||304===t,n&&(y=F(p,w,n)),y=q(p,y,w,o),o?(p.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(ot.lastModified[r]=x),(x=w.getResponseHeader("etag"))&&(ot.etag[r]=x)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=y.state,c=y.data,v=y.error,o=!v)):(v=T,(t||!T)&&(T="error",0>t&&(t=0))),w.status=t,w.statusText=(e||T)+"",o?h.resolveWith(d,[c,T,w]):h.rejectWith(d,[w,T,v]),w.statusCode(g),g=void 0,l&&f.trigger(o?"ajaxSuccess":"ajaxError",[w,p,o?c:v]),m.fireWith(d,[w,T]),l&&(f.trigger("ajaxComplete",[w,p]),--ot.active||ot.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{}
var i,o,r,s,a,l,u,c,p=ot.ajaxSetup({},e),d=p.context||p,f=p.context&&(d.nodeType||d.jquery)?ot(d):ot.event,h=ot.Deferred(),m=ot.Callbacks("once memory"),g=p.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(t){var e
if(2===b){if(!c)for(c={};e=ze.exec(s);)c[e[1].toLowerCase()]=e[2]
e=c[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase()
return b||(t=y[n]=y[n]||t,v[t]=e),this},overrideMimeType:function(t){return b||(p.mimeType=t),this},statusCode:function(t){var e
if(t)if(2>b)for(e in t)g[e]=[g[e],t[e]]
else w.always(t[w.status])
return this},abort:function(t){var e=t||x
return u&&u.abort(e),n(0,e),this}}
if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((t||p.url||je)+"").replace(Ie,"").replace(We,Ae[1]+"//"),p.type=e.method||e.type||p.method||p.type,p.dataTypes=ot.trim(p.dataType||"*").toLowerCase().match(yt)||[""],null==p.crossDomain&&(i=Re.exec(p.url.toLowerCase()),p.crossDomain=!(!i||i[1]===Ae[1]&&i[2]===Ae[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(Ae[3]||("http:"===Ae[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ot.param(p.data,p.traditional)),R(Pe,p,e,w),2===b)return w
l=p.global,l&&0==ot.active++&&ot.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Me.test(p.type),r=p.url,p.hasContent||(p.data&&(r=p.url+=($e.test(r)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=Oe.test(r)?r.replace(Oe,"$1_="+_e++):r+($e.test(r)?"&":"?")+"_="+_e++)),p.ifModified&&(ot.lastModified[r]&&w.setRequestHeader("If-Modified-Since",ot.lastModified[r]),ot.etag[r]&&w.setRequestHeader("If-None-Match",ot.etag[r])),(p.data&&p.hasContent&&!1!==p.contentType||e.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+qe+"; q=0.01":""):p.accepts["*"])
for(o in p.headers)w.setRequestHeader(o,p.headers[o])
if(p.beforeSend&&(!1===p.beforeSend.call(d,w,p)||2===b))return w.abort()
x="abort"
for(o in{success:1,error:1,complete:1})w[o](p[o])
if(u=R(Fe,p,e,w)){w.readyState=1,l&&f.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},p.timeout))
try{b=1,u.send(v,n)}catch(t){if(!(2>b))throw t
n(-1,t)}}else n(-1,"No Transport")
return w},getJSON:function(t,e,n){return ot.get(t,e,n,"json")},getScript:function(t,e){return ot.get(t,void 0,e,"script")}}),ot.each(["get","post"],function(t,e){ot[e]=function(t,n,i,o){return ot.isFunction(n)&&(o=o||i,i=n,n=void 0),ot.ajax({url:t,type:e,dataType:o,data:n,success:i})}}),ot.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ot.fn[e]=function(t){return this.on(e,t)}}),ot._evalUrl=function(t){return ot.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},ot.fn.extend({wrapAll:function(t){if(ot.isFunction(t))return this.each(function(e){ot(this).wrapAll(t.call(this,e))})
if(this[0]){var e=ot(t,this[0].ownerDocument).eq(0).clone(!0)
this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild
return t}).append(this)}return this},wrapInner:function(t){return this.each(ot.isFunction(t)?function(e){ot(this).wrapInner(t.call(this,e))}:function(){var e=ot(this),n=e.contents()
n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ot.isFunction(t)
return this.each(function(n){ot(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){ot.nodeName(this,"body")||ot(this).replaceWith(this.childNodes)}).end()}}),ot.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!nt.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||ot.css(t,"display"))},ot.expr.filters.visible=function(t){return!ot.expr.filters.hidden(t)}
var Be=/%20/g,Ue=/\[\]$/,Ve=/\r?\n/g,Qe=/^(?:submit|button|image|reset|file)$/i,Xe=/^(?:input|select|textarea|keygen)/i
ot.param=function(t,e){var n,i=[],o=function(t,e){e=ot.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)}
if(void 0===e&&(e=ot.ajaxSettings&&ot.ajaxSettings.traditional),ot.isArray(t)||t.jquery&&!ot.isPlainObject(t))ot.each(t,function(){o(this.name,this.value)})
else for(n in t)B(n,t[n],e,o)
return i.join("&").replace(Be,"+")},ot.fn.extend({serialize:function(){return ot.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ot.prop(this,"elements")
return t?ot.makeArray(t):this}).filter(function(){var t=this.type
return this.name&&!ot(this).is(":disabled")&&Xe.test(this.nodeName)&&!Qe.test(t)&&(this.checked||!_t.test(t))}).map(function(t,e){var n=ot(this).val()
return null==n?null:ot.isArray(n)?ot.map(n,function(t){return{name:e.name,value:t.replace(Ve,"\r\n")}}):{name:e.name,value:n.replace(Ve,"\r\n")}}).get()}}),ot.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&U()||V()}:U
var Ye=0,Ge={},Je=ot.ajaxSettings.xhr()
t.ActiveXObject&&ot(t).on("unload",function(){for(var t in Ge)Ge[t](void 0,!0)}),nt.cors=!!Je&&"withCredentials"in Je,(Je=nt.ajax=!!Je)&&ot.ajaxTransport(function(t){if(!t.crossDomain||nt.cors){var e
return{send:function(n,i){var o,r=t.xhr(),s=++Ye
if(r.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)r[o]=t.xhrFields[o]
t.mimeType&&r.overrideMimeType&&r.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(o in n)void 0!==n[o]&&r.setRequestHeader(o,n[o]+"")
r.send(t.hasContent&&t.data||null),e=function(n,o){var a,l,u
if(e&&(o||4===r.readyState))if(delete Ge[s],e=void 0,r.onreadystatechange=ot.noop,o)4!==r.readyState&&r.abort()
else{u={},a=r.status,"string"==typeof r.responseText&&(u.text=r.responseText)
try{l=r.statusText}catch(t){l=""}a||!t.isLocal||t.crossDomain?1223===a&&(a=204):a=u.text?200:404}u&&i(a,l,u,r.getAllResponseHeaders())},t.async?4===r.readyState?setTimeout(e):r.onreadystatechange=Ge[s]=e:e()},abort:function(){e&&e(void 0,!0)}}}}),ot.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return ot.globalEval(t),t}}}),ot.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),ot.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=ht.head||ot("head")[0]||ht.documentElement
return{send:function(i,o){e=ht.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n||o(200,"success"))},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}})
var Ke=[],Ze=/(=)\?(?=&|$)|\?\?/
ot.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ke.pop()||ot.expando+"_"+_e++
return this[t]=!0,t}}),ot.ajaxPrefilter("json jsonp",function(e,n,i){var o,r,s,a=!1!==e.jsonp&&(Ze.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ze.test(e.data)&&"data")
return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=ot.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ze,"$1"+o):!1!==e.jsonp&&(e.url+=($e.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||ot.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=t[o],t[o]=function(){s=arguments},i.always(function(){t[o]=r,e[o]&&(e.jsonpCallback=n.jsonpCallback,Ke.push(o)),s&&ot.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),ot.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null
"boolean"==typeof e&&(n=e,e=!1),e=e||ht
var i=pt.exec(t),o=!n&&[]
return i?[e.createElement(i[1])]:(i=ot.buildFragment([t],e,o),o&&o.length&&ot(o).remove(),ot.merge([],i.childNodes))}
var tn=ot.fn.load
ot.fn.load=function(t,e,n){if("string"!=typeof t&&tn)return tn.apply(this,arguments)
var i,o,r,s=this,a=t.indexOf(" ")
return a>=0&&(i=ot.trim(t.slice(a,t.length)),t=t.slice(0,a)),ot.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(r="POST"),s.length>0&&ot.ajax({url:t,type:r,dataType:"html",data:e}).done(function(t){o=arguments,s.html(i?ot("<div>").append(ot.parseHTML(t)).find(i):t)}).complete(n&&function(t,e){s.each(n,o||[t.responseText,e,t])}),this},ot.expr.filters.animated=function(t){return ot.grep(ot.timers,function(e){return t===e.elem}).length}
var en=t.document.documentElement
ot.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,u,c=ot.css(t,"position"),p=ot(t),d={}
"static"===c&&(t.style.position="relative"),a=p.offset(),r=ot.css(t,"top"),l=ot.css(t,"left"),u=("absolute"===c||"fixed"===c)&&ot.inArray("auto",[r,l])>-1,u?(i=p.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),ot.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):p.css(d)}},ot.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ot.offset.setOffset(this,t,e)})
var e,n,i={top:0,left:0},o=this[0],r=o&&o.ownerDocument
return r?(e=r.documentElement,ot.contains(e,o)?(typeof o.getBoundingClientRect!==Tt&&(i=o.getBoundingClientRect()),n=Q(r),{top:i.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:i.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):i):void 0},position:function(){if(this[0]){var t,e,n={top:0,left:0},i=this[0]
return"fixed"===ot.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ot.nodeName(t[0],"html")||(n=t.offset()),n.top+=ot.css(t[0],"borderTopWidth",!0),n.left+=ot.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-ot.css(i,"marginTop",!0),left:e.left-n.left-ot.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||en;t&&!ot.nodeName(t,"html")&&"static"===ot.css(t,"position");)t=t.offsetParent
return t||en})}}),ot.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e)
ot.fn[t]=function(i){return Nt(this,function(t,i,o){var r=Q(t)
return void 0===o?r?e in r?r[e]:r.document.documentElement[i]:t[i]:void(r?r.scrollTo(n?ot(r).scrollLeft():o,n?o:ot(r).scrollTop()):t[i]=o)},t,i,arguments.length,null)}}),ot.each(["top","left"],function(t,e){ot.cssHooks[e]=k(nt.pixelPosition,function(t,n){return n?(n=te(t,e),ne.test(n)?ot(t).position()[e]+"px":n):void 0})}),ot.each({Height:"height",Width:"width"},function(t,e){ot.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){ot.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border")
return Nt(this,function(e,n,i){var o
return ot.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?ot.css(e,n,s):ot.style(e,n,i,s)},e,r?i:void 0,r,null)}})}),ot.fn.size=function(){return this.length},ot.fn.andSelf=ot.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ot})
var nn=t.jQuery,on=t.$
return ot.noConflict=function(e){return t.$===ot&&(t.$=on),e&&t.jQuery===ot&&(t.jQuery=nn),ot},typeof e===Tt&&(t.jQuery=t.$=ot),ot}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict"
function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var n in e)if(void 0!==t.style[n])return{end:e[n]}
return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this
t(this).one("bsTransitionEnd",function(){n=!0})
var o=function(){n||t(i).trigger(t.support.transition.end)}
return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert")
o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)}
i.VERSION="3.2.0",i.prototype.close=function(e){function n(){r.detach().trigger("closed.bs.alert").remove()}var i=t(this),o=i.attr("data-target")
o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""))
var r=t(o)
e&&e.preventDefault(),r.length||(r=i.hasClass("alert")?i:i.parent()),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())}
var o=t.fn.alert
t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),r="object"==typeof e&&e
o||i.data("bs.button",o=new n(this,r)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1}
n.VERSION="3.2.0",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data()
e+="Text",null==r.resetText&&i.data("resetText",i[o]()),i[o](null==r[e]?this.options[e]:r[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]')
if(e.length){var n=this.$element.find("input")
"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")}
var i=t.fn.button
t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target)
i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),n.preventDefault()})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),r=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),s="string"==typeof e?e:r.slide
o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof e?o.to(e):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))}
n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}t.preventDefault()},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(e){var n=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,n){var i=this.$element.find(".item.active"),o=n||i[e](),r=this.interval,s="next"==e?"left":"right",a="next"==e?"first":"last",l=this
if(!o.length){if(!this.options.wrap)return
o=this.$element.find(".item")[a]()}if(o.hasClass("active"))return this.sliding=!1
var u=o[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:s})
if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var p=t(this.$indicators.children()[this.getItemIndex(o)])
p&&p.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:s})
return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([e,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),r&&this.cycle(),this}}
var i=t.fn.carousel
t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var i,o=t(this),r=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))
if(r.hasClass("carousel")){var s=t.extend({},r.data(),o.data()),a=o.attr("data-slide-to")
a&&(s.interval=!1),e.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this)
e.call(n,n.data())})})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),r=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e)
!o&&r.toggle&&"show"==e&&(e=!e),o||i.data("bs.collapse",o=new n(this,r)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()}
n.VERSION="3.2.0",n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=t.Event("show.bs.collapse")
if(this.$element.trigger(n),!n.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in")
if(i&&i.length){var o=i.data("bs.collapse")
if(o&&o.transitioning)return
e.call(i,"hide"),o||i.data("bs.collapse",null)}var r=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[r](0),this.transitioning=1
var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!t.support.transition)return s.call(this)
var a=t.camelCase(["scroll",r].join("-"))
this.$element.one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(350)[r](this.$element[0][a])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension()
this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1
var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")}
return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(350):i.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()}
var i=t.fn.collapse
t.fn.collapse=e,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var i,o=t(this),r=o.attr("data-target")||n.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(r),a=s.data("bs.collapse"),l=a?"toggle":o.data(),u=o.attr("data-parent"),c=u&&t(u)
a&&a.transitioning||(c&&c.find('[data-toggle="collapse"][data-parent="'+u+'"]').not(o).addClass("collapsed"),o[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(s,l)})}(jQuery),function(t){"use strict"
function e(e){e&&3===e.which||(t(o).remove(),t(r).each(function(){var i=n(t(this)),o={relatedTarget:this}
i.hasClass("open")&&(i.trigger(e=t.Event("hide.bs.dropdown",o)),e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown",o))}))}function n(e){var n=e.attr("data-target")
n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""))
var i=n&&t(n)
return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown")
i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)}
s.VERSION="3.2.0",s.prototype.toggle=function(i){var o=t(this)
if(!o.is(".disabled, :disabled")){var r=n(o),s=r.hasClass("open")
if(e(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e)
var a={relatedTarget:this}
if(r.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return
o.trigger("focus"),r.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this)
if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var o=n(i),s=o.hasClass("open")
if(!s||s&&27==e.keyCode)return 27==e.which&&o.find(r).trigger("focus"),i.trigger("click")
var a=" li:not(.divider):visible a",l=o.find('[role="menu"]'+a+', [role="listbox"]'+a)
if(l.length){var u=l.index(l.filter(":focus"))
38==e.keyCode&&u>0&&u--,40==e.keyCode&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}}
var a=t.fn.dropdown
t.fn.dropdown=i,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r+', [role="menu"], [role="listbox"]',s.prototype.keydown)}(jQuery),function(t){"use strict"
function e(e,i){return this.each(function(){var o=t(this),r=o.data("bs.modal"),s=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e)
r||o.data("bs.modal",r=new n(this,s)),"string"==typeof e?r[e](i):s.show&&r.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
n.VERSION="3.2.0",n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var n=this,i=t.Event("show.bs.modal",{relatedTarget:e})
this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var i=t.support.transition&&n.$element.hasClass("fade")
n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),i&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus()
var o=t.Event("shown.bs.modal",{relatedTarget:e})
i?n.$element.find(".modal-dialog").one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(300):n.$element.trigger("focus").trigger(o)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},n.prototype.hideModal=function(){var t=this
this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var n=this,i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i
if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return
o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var r=function(){n.removeBackdrop(),e&&e()}
t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(150):r()}else e&&e()},n.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10)
this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",this.$body.append(t)
var e=t.offsetWidth-t.clientWidth
return this.$body[0].removeChild(t),e}
var i=t.fn.modal
t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),o=i.attr("href"),r=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},r.data(),i.data())
i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(r,s,this)})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),r="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}
n.VERSION="3.2.0",n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport)
for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r]
if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))
else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout"
this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults()
return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show()},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var n=t.contains(document.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!n)return
var i=this,o=this.tip(),r=this.getUID(this.type)
this.setContent(),o.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&o.addClass("fade")
var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(s)
l&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element)
var u=this.getPosition(),c=o[0].offsetWidth,p=o[0].offsetHeight
if(l){var d=s,f=this.$element.parent(),h=this.getPosition(f)
s="bottom"==s&&u.top+u.height+p-h.scroll>h.height?"top":"top"==s&&u.top-h.scroll-p<0?"bottom":"right"==s&&u.right+c>h.width?"left":"left"==s&&u.left-c<h.left?"right":s,o.removeClass(d).addClass(s)}var m=this.getCalculatedOffset(s,u,c,p)
this.applyPlacement(m,s)
var g=function(){i.$element.trigger("shown.bs."+i.type),i.hoverState=null}
t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10)
isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top=e.top+s,e.left=e.left+a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in")
var l=i[0].offsetWidth,u=i[0].offsetHeight
"top"==n&&u!=r&&(e.top=e.top+r-u)
var c=this.getViewportAdjustedDelta(n,e,l,u)
c.left?e.left+=c.left:e.top+=c.top
var p=c.left?2*c.left-o+l:2*c.top-r+u,d=c.left?"left":"top",f=c.left?"offsetWidth":"offsetHeight"
i.offset(e),this.replaceArrow(p,i[0][f],d)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(){function e(){"in"!=n.hoverState&&i.detach(),n.$element.trigger("hidden.bs."+n.type)}var n=this,i=this.tip(),o=t.Event("hide.bs."+this.type)
return this.$element.removeAttr("aria-describedby"),this.$element.trigger(o),o.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element
var n=e[0],i="BODY"==n.tagName
return t.extend({},"function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:i?t(window).width():e.outerWidth(),height:i?t(window).height():e.outerHeight()},i?{top:0,left:0}:e.offset())},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0}
if(!this.$viewport)return o
var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport)
if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+i
a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var u=e.left-r,c=e.left+r+n
u<s.left?o.left=s.left-u:c>s.width&&(o.left=s.left+s.width-c)}return o},n.prototype.getTitle=function(){var t=this.$element,e=this.options
return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},n.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this
e&&((n=t(e.currentTarget).data("bs."+this.type))||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)}
var i=t.fn.tooltip
t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),r="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)}
if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js")
n.VERSION="3.2.0",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}
var i=t.fn.popover
t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),function(t){"use strict"
function e(n,i){var o=t.proxy(this.process,this)
this.$body=t("body"),this.$scrollElement=t(t(n).is("body")?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n
o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",n=0
t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight()
var i=this
this.$body.find(this.selector).map(function(){var i=t(this),o=i.data("target")||i.attr("href"),r=/^#./.test(o)&&t(o)
return r&&r.length&&r.is(":visible")&&[[r[e]().top+n,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget
if(this.scrollHeight!=n&&this.refresh(),e>=i)return s!=(t=r[r.length-1])&&this.activate(t)
if(s&&e<=o[0])return s!=(t=r[0])&&this.activate(t)
for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active")
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")}
var i=t.fn.scrollspy
t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this)
n.call(e,e.data())})})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab")
o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)}
n.VERSION="3.2.0",n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target")
if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a")[0],r=t.Event("show.bs.tab",{relatedTarget:o})
if(e.trigger(r),!r.isDefaultPrevented()){var s=t(i)
this.activate(e.closest("li"),n),this.activate(s,s.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},n.prototype.activate=function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade")
s?r.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),r.removeClass("in")}
var i=t.fn.tab
t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(n){n.preventDefault(),e.call(t(this),"show")})}(jQuery),function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),r="object"==typeof e&&e
o||i.data("bs.affix",o=new n(this,r)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()}
n.VERSION="3.2.0",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(n.RESET).addClass("affix")
var t=this.$target.scrollTop(),e=this.$element.offset()
return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),i=this.$target.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.top,a=r.bottom
"object"!=typeof r&&(a=s=r),"function"==typeof s&&(s=r.top(this.$element)),"function"==typeof a&&(a=r.bottom(this.$element))
var l=!(null!=this.unpin&&i+this.unpin<=o.top)&&(null!=a&&o.top+this.$element.height()>=e-a?"bottom":null!=s&&s>=i&&"top")
if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","")
var u="affix"+(l?"-"+l:""),c=t.Event(u+".bs.affix")
this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}}
var i=t.fn.affix
t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data()
i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery),function(t){var e=t(window),n=e.height()
e.resize(function(){n=e.height()}),t.fn.parallax=function(i,o,r){function s(){var r=e.scrollTop()
u.each(function(){var e=t(this),s=e.offset().top
s+a(e)<r||s>r+n||u.css("backgroundPosition",i+" "+Math.round((l-r)*o)+"px")})}var a,l,u=t(this)
u.each(function(){l=u.offset().top}),a=r?function(t){return t.outerHeight(!0)}:function(t){return t.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===o)&&(o=.1),(arguments.length<3||null===r)&&(r=!0),e.bind("scroll",s).resize(s),s()}}(jQuery),function(t){function e(){}function n(t){function n(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,n){t.fn[e]=function(o){if("string"==typeof o){for(var s=i.call(arguments,1),a=0,l=this.length;l>a;a++){var u=this[a],c=t.data(u,e)
if(c)if(t.isFunction(c[o])&&"_"!==o.charAt(0)){var p=c[o].apply(c,s)
if(void 0!==p)return p}else r("no such method '"+o+"' for "+e+" instance")
else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var i=t.data(this,e)
i?(i.option(o),i._init()):(i=new n(this,o),t.data(this,e,i))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)}
return t.bridget=function(t,e){n(e),o(t,e)},t.bridget}}var i=Array.prototype.slice
"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],n):n(t.jQuery)}(window),function(t){function e(e){var n=t.event
return n.target=n.target||n.srcElement||e,n}var n=document.documentElement,i=function(){}
n.addEventListener?i=function(t,e,n){t.addEventListener(e,n,!1)}:n.attachEvent&&(i=function(t,n,i){t[n+i]=i.handleEvent?function(){var n=e(t)
i.handleEvent.call(i,n)}:function(){var n=e(t)
i.call(t,n)},t.attachEvent("on"+n,t[n+i])})
var o=function(){}
n.removeEventListener?o=function(t,e,n){t.removeEventListener(e,n,!1)}:n.detachEvent&&(o=function(t,e,n){t.detachEvent("on"+e,t[e+n])
try{delete t[e+n]}catch(i){t[e+n]=void 0}})
var r={bind:i,unbind:o}
"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function n(t){var n="readystatechange"===t.type&&"complete"!==o.readyState
if(!e.isReady&&!n){e.isReady=!0
for(var i=0,s=r.length;s>i;i++){(0,r[i])()}}}function i(i){return i.bind(o,"DOMContentLoaded",n),i.bind(o,"readystatechange",n),i.bind(t,"load",n),e}var o=t.document,r=[]
e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],i)):t.docReady=i(t.eventie)}(this),function(){function t(){}function e(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n
return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var i=t.prototype,o=this,r=o.EventEmitter
i.getListeners=function(t){var e,n,i=this._getEvents()
if(t instanceof RegExp){e={}
for(n in i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n])}else e=i[t]||(i[t]=[])
return e},i.flattenListeners=function(t){var e,n=[]
for(e=0;t.length>e;e+=1)n.push(t[e].listener)
return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t)
return n instanceof Array&&(e={},e[t]=n),e||n},i.addListener=function(t,n){var i,o=this.getListenersAsObject(t),r="object"==typeof n
for(i in o)o.hasOwnProperty(i)&&-1===e(o[i],n)&&o[i].push(r?n:{listener:n,once:!1})
return this},i.on=n("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e])
return this},i.removeListener=function(t,n){var i,o,r=this.getListenersAsObject(t)
for(o in r)r.hasOwnProperty(o)&&-1!==(i=e(r[o],n))&&r[o].splice(i,1)
return this},i.off=n("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners
if("object"!=typeof e||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i])
else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o))
return this},i.removeEvent=function(t){var e,n=typeof t,i=this._getEvents()
if("string"===n)delete i[t]
else if(t instanceof RegExp)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e]
else delete this._events
return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(t,e){var n,i,o,r=this.getListenersAsObject(t)
for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)n=r[o][i],!0===n.once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener)
return this},i.trigger=n("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1)
return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof i[t])return t
t=t.charAt(0).toUpperCase()+t.slice(1)
for(var e,o=0,r=n.length;r>o;o++)if(e=n[o]+t,"string"==typeof i[e])return e}}var n="Webkit Moz ms Ms O".split(" "),i=document.documentElement.style
"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t)
return-1===t.indexOf("%")&&!isNaN(e)&&e}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=s.length;n>e;e++){t[s[e]]=0}return t}function i(t){function i(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=r(t)
if("none"===i.display)return n()
var o={}
o.width=t.offsetWidth,o.height=t.offsetHeight
for(var c=o.isBorderBox=!(!u||!i[u]||"border-box"!==i[u]),p=0,d=s.length;d>p;p++){var f=s[p],h=i[f]
h=a(t,h)
var m=parseFloat(h)
o[f]=isNaN(m)?0:m}var g=o.paddingLeft+o.paddingRight,v=o.paddingTop+o.paddingBottom,y=o.marginLeft+o.marginRight,b=o.marginTop+o.marginBottom,x=o.borderLeftWidth+o.borderRightWidth,w=o.borderTopWidth+o.borderBottomWidth,T=c&&l,C=e(i.width)
!1!==C&&(o.width=C+(T?0:g+x))
var E=e(i.height)
return!1!==E&&(o.height=E+(T?0:v+w)),o.innerWidth=o.width-(g+x),o.innerHeight=o.height-(v+w),o.outerWidth=o.width+y,o.outerHeight=o.height+b,o}}function a(t,e){if(o||-1===e.indexOf("%"))return e
var n=t.style,i=n.left,r=t.runtimeStyle,s=r&&r.left
return s&&(r.left=t.currentStyle.left),n.left=e,e=n.pixelLeft,n.left=i,s&&(r.left=s),e}var l,u=t("boxSizing")
return function(){if(u){var t=document.createElement("div")
t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[u]="border-box"
var n=document.body||document.documentElement
n.appendChild(t)
var i=r(t)
l=200===e(i.width),n.removeChild(t)}}(),i}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"]
"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],i):"object"==typeof exports?module.exports=i(require("get-style-property")):t.getSize=i(t.getStyleProperty)}(window),function(t,e){function n(t,e){return t[a](e)}function i(t){if(!t.parentNode){document.createDocumentFragment().appendChild(t)}}function o(t,e){i(t)
for(var n=t.parentNode.querySelectorAll(e),o=0,r=n.length;r>o;o++)if(n[o]===t)return!0
return!1}function r(t,e){return i(t),n(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector"
for(var t=["webkit","moz","ms","o"],n=0,i=t.length;i>n;n++){var o=t[n],r=o+"MatchesSelector"
if(e[r])return r}}()
if(a){var l=document.createElement("div"),u=n(l,"div")
s=u?n:r}else s=o
"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(0,Element.prototype),function(t){function e(t,e){for(var n in e)t[n]=e[n]
return t}function n(t){for(var e in t)return!1
return null,!0}function i(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var l=r("transition"),u=r("transform"),c=l&&u,p=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[l],f=["transform","transition","transitionDuration","transitionProperty"],h=function(){for(var t={},e=0,n=f.length;n>e;e++){var i=f[e],o=r(i)
o&&o!==i&&(t[i]=o)}return t}()
e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style
for(var n in t){e[h[n]||n]=t[n]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,n=e.isOriginLeft,i=e.isOriginTop,o=parseInt(t[n?"left":"right"],10),r=parseInt(t[i?"top":"bottom"],10)
o=isNaN(o)?0:o,r=isNaN(r)?0:r
var a=this.layout.size
o-=n?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,n={}
e.isOriginLeft?(n.left=this.position.x+t.paddingLeft+"px",n.right=""):(n.right=this.position.x+t.paddingRight+"px",n.left=""),e.isOriginTop?(n.top=this.position.y+t.paddingTop+"px",n.bottom=""):(n.bottom=this.position.y+t.paddingBottom+"px",n.top=""),this.css(n),this.emitEvent("layout",[this])}
var m=p?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"}
a.prototype._transitionTo=function(t,e){this.getPosition()
var n=this.position.x,i=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y
if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition()
var a=t-n,l=e-i,u={},c=this.layout.options
a=c.isOriginLeft?a:-a,l=c.isOriginTop?l:-l,u.transform=m(a,l),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=c?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to)
for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t)
var e=this._transn
for(var n in t.onTransitionEnd)e.onEnd[n]=t.onTransitionEnd[n]
for(n in t.to)e.ingProperties[n]=!0,t.isCleaning&&(e.clean[n]=!0)
if(t.from){this.css(t.from)
this.element.offsetHeight
null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}
var g=u&&i(u)+",opacity"
a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[l?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)}
var v={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"}
a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=v[t.propertyName]||t.propertyName
if(delete e.ingProperties[i],n(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){e.onEnd[i].call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={}
for(var n in t)e[n]=""
this.css(e)}
var y={transitionProperty:"",transitionDuration:""}
return a.prototype.removeTransitionStyles=function(){this.css(y)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!l||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem()
var t=this
this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""})
var t=this.layout.options
this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""})
var t=this.layout.options
this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle}
"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var n in e)t[n]=e[n]
return t}function n(t){return"[object Array]"===p.call(t)}function i(t){var e=[]
if(n(t))e=t
else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;o>i;i++)e.push(t[i])
else e.push(t)
return e}function o(t,e){var n=f(e,t);-1!==n&&e.splice(n,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,n){return e+"-"+n}).toLowerCase()}function s(n,s,p,f,h,m){function g(t,n){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return void(l&&l.error("Bad "+this.constructor.namespace+" element: "+t))
this.element=t,this.options=e({},this.constructor.defaults),this.option(n)
var i=++v
this.element.outlayerGUID=i,y[i]=this,this._create(),this.options.isInitLayout&&this.layout()}var v=0,y={}
return g.namespace="outlayer",g.Item=m,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(g.prototype,p.prototype),g.prototype.option=function(t){e(this.options,t)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),n=this.constructor.Item,i=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new n(s,this)
i.push(a)}return i},g.prototype._filterFindItemElements=function(t){t=i(t)
for(var e=this.options.itemSelector,n=[],o=0,r=t.length;r>o;o++){var s=t[o]
if(d(s))if(e){h(s,e)&&n.push(s)
for(var a=s.querySelectorAll(e),l=0,u=a.length;u>l;l++)n.push(a[l])}else n.push(s)}return n},g.prototype.getItemElements=function(){for(var t=[],e=0,n=this.items.length;n>e;e++)t.push(this.items[e].element)
return t},g.prototype.layout=function(){this._resetLayout(),this._manageStamps()
var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited
this.layoutItems(this.items,t),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=f(this.element)},g.prototype._getMeasurement=function(t,e){var n,i=this.options[t]
i?("string"==typeof i?n=this.element.querySelector(i):d(i)&&(n=i),this[t]=n?f(n)[e]:i):this[t]=0},g.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},g.prototype._getItemsForLayout=function(t){for(var e=[],n=0,i=t.length;i>n;n++){var o=t[n]
o.isIgnored||e.push(o)}return e},g.prototype._layoutItems=function(t,e){function n(){i.emitEvent("layoutComplete",[i,t])}var i=this
if(!t||!t.length)return void n()
this._itemsOn(t,"layout",n)
for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],l=this._getItemLayoutPosition(a)
l.item=a,l.isInstant=e||a.isLayoutInstant,o.push(l)}this._processLayoutQueue(o)},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(t){for(var e=0,n=t.length;n>e;e++){var i=t[e]
this._positionItem(i.item,i.x,i.y,i.isInstant)}},g.prototype._positionItem=function(t,e,n,i){i?t.goTo(e,n):t.moveTo(e,n)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize()
t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},g.prototype._getContainerSize=c,g.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var n=this.size
n.isBorderBox&&(t+=e?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},g.prototype._itemsOn=function(t,e,n){function i(){return o++,o===r&&n.call(s),!0}for(var o=0,r=t.length,s=this,a=0,l=t.length;l>a;a++){t[a].on(e,i)}},g.prototype.ignore=function(t){var e=this.getItem(t)
e&&(e.isIgnored=!0)},g.prototype.unignore=function(t){var e=this.getItem(t)
e&&delete e.isIgnored},g.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t)
for(var e=0,n=t.length;n>e;e++){var i=t[e]
this.ignore(i)}}},g.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,n=t.length;n>e;e++){var i=t[e]
o(i,this.stamps),this.unignore(i)}},g.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=i(t)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect()
for(var t=0,e=this.stamps.length;e>t;t++){var n=this.stamps[t]
this._manageStamp(n)}}},g.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size
this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},g.prototype._manageStamp=c,g.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,i=f(t)
return{left:e.left-n.left-i.marginLeft,top:e.top-n.top-i.marginTop,right:n.right-e.right-i.marginRight,bottom:n.bottom-e.bottom-i.marginBottom}},g.prototype.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},g.prototype.bindResize=function(){this.isResizeBound||(n.bind(t,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&n.unbind(t,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout)
var e=this
this.resizeTimeout=setTimeout(t,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var t=f(this.element)
return this.size&&t&&t.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(t){var e=this._itemize(t)
return e.length&&(this.items=this.items.concat(e)),e},g.prototype.appended=function(t){var e=this.addItems(t)
e.length&&(this.layoutItems(e,!0),this.reveal(e))},g.prototype.prepended=function(t){var e=this._itemize(t)
if(e.length){var n=this.items.slice(0)
this.items=e.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(n)}},g.prototype.reveal=function(t){var e=t&&t.length
if(e)for(var n=0;e>n;n++){var i=t[n]
i.reveal()}},g.prototype.hide=function(t){var e=t&&t.length
if(e)for(var n=0;e>n;n++){var i=t[n]
i.hide()}},g.prototype.getItem=function(t){for(var e=0,n=this.items.length;n>e;e++){var i=this.items[e]
if(i.element===t)return i}},g.prototype.getItems=function(t){if(t&&t.length){for(var e=[],n=0,i=t.length;i>n;n++){var o=t[n],r=this.getItem(o)
r&&e.push(r)}return e}},g.prototype.remove=function(t){t=i(t)
var e=this.getItems(t)
if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])})
for(var n=0,r=e.length;r>n;n++){var s=e[n]
s.remove(),o(s,this.items)}}},g.prototype.destroy=function(){var t=this.element.style
t.height="",t.position="",t.width=""
for(var e=0,n=this.items.length;n>e;e++){this.items[e].destroy()}this.unbindResize(),delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},g.data=function(t){var e=t&&t.outlayerGUID
return e&&y[e]},g.create=function(t,n){function i(){g.apply(this,arguments)}return Object.create?i.prototype=Object.create(g.prototype):e(i.prototype,g.prototype),i.prototype.constructor=i,i.defaults=e({},g.defaults),e(i.defaults,n),i.prototype.settings={},i.namespace=t,i.data=g.data,i.Item=function(){m.apply(this,arguments)},i.Item.prototype=new m,s(function(){for(var e=r(t),n=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,c=n.length;c>s;s++){var p,d=n[s],f=d.getAttribute(o)
try{p=f&&JSON.parse(f)}catch(t){l&&l.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+t)
continue}var h=new i(d,p)
u&&u.data(d,t,h)}}),u&&u.bridget&&u.bridget(t,i),i},g.Item=m,g}var a=t.document,l=t.console,u=t.jQuery,c=function(){},p=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n
return-1}
"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random()
var t=this.layout.options.getSortData,e=this.layout._sorters
for(var n in t){var i=e[n]
this.sortData[n]=i(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function n(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){for(var t=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],i=0,o=t.length;o>i;i++){var r=t[i]
n.prototype[r]=function(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}(r)}}(),n.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element)
return this.isotope.size&&e&&e.innerHeight!==this.isotope.size.innerHeight},n.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},n.prototype.getSegmentSize=function(t,e){var n=t+e,i="outer"+e
if(this._getMeasurement(n,i),!this[n]){var o=this.getFirstItemSize()
this[n]=o&&o[i]||this.isotope.size["inner"+e]}},n.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0]
return e&&e.element&&t(e.element)},n.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},n.modes={},n.create=function(t,e){function i(){n.apply(this,arguments)}return i.prototype=new n,e&&(i.options=e),i.prototype.namespace=t,n.modes[t]=i,i},n}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var i=t.create("masonry")
return i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns()
var t=this.cols
for(this.colYs=[];t--;)this.colYs.push(0)
this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],n=t&&t.element
this.columnWidth=n&&e(n).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},i.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,n=e(t)
this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize()
var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth)
o=Math.min(o,this.cols)
for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=n(r,s),l={x:this.columnWidth*a,y:s},u=s+t.size.outerHeight,c=this.cols+1-r.length,p=0;c>p;p++)this.colYs[a+p]=u
return l},i.prototype._getColGroup=function(t){if(2>t)return this.colYs
for(var e=[],n=this.cols+1-t,i=0;n>i;i++){var o=this.colYs.slice(i,i+t)
e[i]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var n=e(t),i=this._getElementOffset(t),o=this.options.isOriginLeft?i.left:i.right,r=o+n.outerWidth,s=Math.floor(o/this.columnWidth)
s=Math.max(0,s)
var a=Math.floor(r/this.columnWidth)
a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a)
for(var l=(this.options.isOriginTop?i.top:i.bottom)+n.outerHeight,u=s;a>=u;u++)this.colYs[u]=Math.max(l,this.colYs[u])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs)
var t={height:this.maxY}
return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++
return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth
return this.getContainerWidth(),t!==this.containerWidth},i}var n=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++){if(t[n]===e)return n}return-1}
"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var n in e)t[n]=e[n]
return t}function n(t,n){var i=t.create("masonry"),o=i.prototype._getElementOffset,r=i.prototype.layout,s=i.prototype._getMeasurement
e(i.prototype,n.prototype),i.prototype._getElementOffset=o,i.prototype.layout=r,i.prototype._getMeasurement=s
var a=i.prototype.measureColumns
i.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)}
var l=i.prototype._manageStamp
return i.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,l.apply(this,arguments)},i}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],n):n(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows")
return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY)
var e={x:this.x,y:this.y}
return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0})
return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize()
var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,n=this.y
return this.y+=t.size.outerHeight,{x:e,y:n}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var n in e)t[n]=e[n]
return t}function n(t){return"[object Array]"===c.call(t)}function i(t){var e=[]
if(n(t))e=t
else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;o>i;i++)e.push(t[i])
else e.push(t)
return e}function o(t,e){var n=p(e,t);-1!==n&&e.splice(n,1)}function r(t,n,r,l,c){function p(t,e){return function(n,i){for(var o=0,r=t.length;r>o;o++){var s=t[o],a=n.sortData[s],l=i.sortData[s]
if(a>l||l>a){var u=void 0!==e[s]?e[s]:e,c=u?1:-1
return(a>l?1:-1)*c}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0})
d.Item=l,d.LayoutMode=c,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"]
for(var e in c.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),n=0,i=e.length;i>n;n++){e[n].id=this.itemGUID++}return this._updateItemsSortData(e),e},d.prototype._initLayoutMode=function(t){var n=c.modes[t],i=this.options[t]||{}
this.options[t]=n.options?e(n.options,i):i,this.modes[t]=new n(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},d.prototype._layout=function(){var t=this._getIsInstant()
this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited
return this._isInstant=t,t},d.prototype._filter=function(t){function e(){p.reveal(o),p.hide(r)}var n=this.options.filter
n=n||"*"
for(var i=[],o=[],r=[],s=this._getFilterTest(n),a=0,l=t.length;l>a;a++){var u=t[a]
if(!u.isIgnored){var c=s(u)
c&&i.push(u),c&&u.isHidden?o.push(u):c||u.isHidden||r.push(u)}}var p=this
return this._isInstant?this._noTransition(e):e(),i},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){this._getSorters(),t=i(t)
var e=this.getItems(t)
e=e.length?e:this.items,this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData
for(var e in t){var n=t[e]
this._sorters[e]=f(n)}},d.prototype._updateItemsSortData=function(t){for(var e=0,n=t.length;n>e;e++){t[e].updateSortData()}}
var f=function(){function t(t){if("string"!=typeof t)return t
var n=a(t).split(" "),i=n[0],o=i.match(/^\[(.+)\]$/),r=o&&o[1],s=e(r,i),l=d.sortDataParsers[n[1]]
return t=l?function(t){return t&&l(s(t))}:function(t){return t&&s(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var n=t.querySelector(e)
return n&&u(n)}}return t}()
d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy
if(t){var e=[].concat.apply(t,this.sortHistory),n=p(e,this.options.sortAscending)
this.filteredItems.sort(n),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t]
if(!e)throw Error("No layout mode: "+t)
return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t)
if(e.length){var n=this._filterRevealAdded(e)
this.filteredItems=this.filteredItems.concat(n)}},d.prototype.prepended=function(t){var e=this._itemize(t)
if(e.length){var n=this.items.slice(0)
this.items=e.concat(n),this._resetLayout(),this._manageStamps()
var i=this._filterRevealAdded(e)
this.layoutItems(n),this.filteredItems=i.concat(this.filteredItems)}},d.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)})
return this.layoutItems(e,!0),this.reveal(e),t},d.prototype.insert=function(t){var e=this.addItems(t)
if(e.length){var n,i,o=e.length
for(n=0;o>n;n++)i=e[n],this.element.appendChild(i.element)
var r=this._filter(e)
for(this._noTransition(function(){this.hide(r)}),n=0;o>n;n++)e[n].isLayoutInstant=!0
for(this.arrange(),n=0;o>n;n++)delete e[n].isLayoutInstant
this.reveal(r)}}
var h=d.prototype.remove
return d.prototype.remove=function(t){t=i(t)
var e=this.getItems(t)
if(h.call(this,t),e&&e.length)for(var n=0,r=e.length;r>n;n++){var s=e[n]
o(s,this.filteredItems)}},d.prototype._noTransition=function(t){var e=this.options.transitionDuration
this.options.transitionDuration=0
var n=t.call(this)
return this.options.transitionDuration=e,n},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},l=document.documentElement,u=l.textContent?function(t){return t.textContent}:function(t){return t.innerText},c=Object.prototype.toString,p=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n
return-1}
"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window),window.scrollReveal=function(t){"use strict"
function e(t){this.options=this.extend(this.defaults,t),this.docElem=this.options.elem,this.styleBank={},1==this.options.init&&this.init()}var n=1,i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}()
return e.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",opacity:0,complete:function(){},viewportFactor:.33,reset:!1,init:!0,elem:t.document.documentElement},init:function(){this.scrolled=!1
var e=this
this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")),this.elems.forEach(function(t,i){var o=t.getAttribute("data-scroll-reveal-id")
o||(o=n++,t.setAttribute("data-scroll-reveal-id",o)),e.styleBank[o]||(e.styleBank[o]=t.getAttribute("style")),e.update(t)})
var o=function(t){e.scrolled||(e.scrolled=!0,i(function(){e._scrollPage()}))},r=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)}
this.docElem==t.document.documentElement?(t.addEventListener("scroll",o,!1),t.addEventListener("resize",r,!1)):this.docElem.addEventListener("scroll",o,!1)},_scrollPage:function(){var t=this
this.elems.forEach(function(e,n){t.update(e)}),this.scrolled=!1},parseLanguage:function(t){var e=t.getAttribute("data-scroll-reveal").split(/[, ]+/),n={}
return e=function(t){var e=[],n=["from","the","and","then","but","with"]
return t.forEach(function(t,i){n.indexOf(t)>-1||e.push(t)}),e}(e),e.forEach(function(t,i){switch(t){case"enter":return void(n.enter=e[i+1])
case"after":case"wait":return void(n.after=e[i+1])
case"move":return void(n.move=e[i+1])
case"ease":return n.move=e[i+1],void(n.ease="ease")
case"ease-in":return n.move=e[i+1],void(n.easing="ease-in")
case"ease-in-out":return n.move=e[i+1],void(n.easing="ease-in-out")
case"ease-out":return n.move=e[i+1],void(n.easing="ease-out")
case"over":return void(n.over=e[i+1])
default:return}}),n},update:function(t){var e=this,n=this.genCSS(t),i=this.styleBank[t.getAttribute("data-scroll-reveal-id")]
return null!=i?i+=";":i="",t.getAttribute("data-scroll-reveal-initialized")||(t.setAttribute("style",i+n.initial),t.setAttribute("data-scroll-reveal-initialized",!0)),this.isElementInViewport(t,this.options.viewportFactor)?t.getAttribute("data-scroll-reveal-complete")?void 0:this.isElementInViewport(t,this.options.viewportFactor)?(t.setAttribute("style",i+n.target+n.transition),void(this.options.reset||setTimeout(function(){""!=i?t.setAttribute("style",i):t.removeAttribute("style"),t.setAttribute("data-scroll-reveal-complete",!0),e.options.complete(t)},n.totalDuration))):void 0:void(this.options.reset&&t.setAttribute("style",i+n.initial+n.reset))},genCSS:function(t){var e,n,i=this.parseLanguage(t)
i.enter?("top"!=i.enter&&"bottom"!=i.enter||(e=i.enter,n="y"),"left"!=i.enter&&"right"!=i.enter||(e=i.enter,n="x")):("top"!=this.options.enter&&"bottom"!=this.options.enter||(e=this.options.enter,n="y"),"left"!=this.options.enter&&"right"!=this.options.enter||(e=this.options.enter,n="x")),"top"!=e&&"left"!=e||(i.move?i.move="-"+i.move:i.move="-"+this.options.move)
var o=i.move||this.options.move,r=i.over||this.options.over,s=i.after||this.options.after,a=i.easing||this.options.easing
return{transition:"-webkit-transition: -webkit-transform "+r+" "+a+" "+s+",  opacity "+r+" "+a+" "+s+";transition: transform "+r+" "+a+" "+s+", opacity "+r+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",initial:"-webkit-transform: translate"+n+"("+o+");transform: translate"+n+"("+o+");opacity: "+(i.opacity||this.options.opacity)+";",target:"-webkit-transform: translate"+n+"(0);transform: translate"+n+"(0);opacity: 1;",reset:"-webkit-transition: -webkit-transform "+r+" "+a+" 0s,  opacity "+r+" "+a+" "+s+";transition: transform "+r+" "+a+" 0s,  opacity "+r+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",totalDuration:1e3*(parseFloat(r)+parseFloat(s))}},getViewportH:function(){var e=this.docElem.clientHeight,n=t.innerHeight
return this.docElem==t.document.documentElement&&e<n?n:e},getOffset:function(t){var e=0,n=0
do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft)}while(t=t.offsetParent)
return{top:e,left:n}},isElementInViewport:function(e,n){var i=this.docElem.scrollTop+this.docElem.offsetTop
this.docElem==t.document.documentElement&&(i=t.pageYOffset)
var o=i+this.getViewportH(),r=e.offsetHeight,s=this.getOffset(e).top,a=s+r,n=n||0
return s+r*n<=o&&a>=i||"fixed"==(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position},extend:function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}},e}(window),$("#banner").css({height:$(window).height()})
var siteNav=jQuery(".top-fixed"),topStatic=jQuery(".has-fixed-menu"),mainNav=jQuery(".main-navigation"),menuSecond=jQuery(".menu-style2")
jQuery(window).scroll(function(){"use strict"
jQuery(this).scrollTop()>$("#banner").height()?(siteNav.addClass("navbar-fixed-top"),siteNav.removeClass("navbar-static-top"),topStatic.addClass("menu-margin")):(siteNav.addClass("navbar-static-top"),siteNav.removeClass("navbar-fixed-top"),topStatic.removeClass("menu-margin"))}),$(window).width()<966&&(mainNav.removeClass("top-fixed"),mainNav.addClass("side-static"),menuSecond.removeClass("container")),jQuery(".menu-switch").click(function(){"use strict"
$(this).toggleClass("open"),$("#site-navigation").toggleClass("extend")}),jQuery(function(){"use strict"
$('#site-navigation ul li a[href^="#"]').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash)
if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$(".transparent-section").each(function(){var t=$(this).data("image"),e=$(this).data("color"),n=$(this).data("transparency"),i=e+", "+n
$(this).css({"background-image":"url("+t+")"}),$(this).css({"background-color":"rgb("+e+")"}),$(this).children(".transparent-content").css({"background-color":"rgba("+i+")",width:"100%",height:"100%"})}),jQuery("#banner").parallax("50%",.5),$(".pro-skills").each(function(){var t=$(this).data("progress")
$(this).css({width:t})}),$(function(){"use strict"
var t=$(".portfolio-items").isotope({itemSelector:".portfolio-item",layoutMode:"masonry"})
$("#portfolio-filters").on("click","button",function(){var e=$(this).attr("data-filter")
t.isotope({filter:e})}),$(".button-group").each(function(t,e){var n=$(e)
n.on("click","button",function(){n.find(".active").removeClass("active"),$(this).addClass("active")})})}),function(t){"use strict"
function e(t,e,n,i){if(i||(i=1e3),r(e,n),1!=u.accelerationMax){var o=+new Date-h
o<u.accelerationDelta&&1<(o=(1+30/o)/2)&&(o=Math.min(o,u.accelerationMax),e*=o,n*=o),h=+new Date}if(d.push({x:e,y:n,lastX:0>e?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!f){var s=t===document.body,l=function(o){o=+new Date
for(var r=0,c=0,p=0;p<d.length;p++){var h=d[p],m=o-h.start,g=m>=u.animationTime,y=g?1:m/u.animationTime
u.pulseAlgorithm&&(y=a(y)),m=h.x*y-h.lastX>>0,y=h.y*y-h.lastY>>0,r+=m,c+=y,h.lastX+=m,h.lastY+=y,g&&(d.splice(p,1),p--)}s?window.scrollBy(r,c):(r&&(t.scrollLeft+=r),c&&(t.scrollTop+=c)),e||n||(d=[]),d.length?v(l,t,i/u.frameRate+1):f=!1}
v(l,t,0),f=!0}}function n(t){var n=o(t.target)
if(!n||t.defaultPrevented)return!0
var i=t.wheelDeltaX||0,r=t.wheelDeltaY||0
i||r||(r=t.wheelDelta||0),1.2<Math.abs(i)&&(i*=u.stepSize/120),1.2<Math.abs(r)&&(r*=u.stepSize/120),e(n,-i,-r),t.preventDefault()}function i(t,e){for(var n=t.length;n--;)m[g(t[n])]=e
return e}function o(t){var e=[],n="",o=p.scrollHeight
do{var r=m[g(t)]
if(r)return i(e,r)
if(e.push(t),o===t.scrollHeight){if(p.clientHeight+10<o)return i(e,document.body)}else if(t.clientHeight+10<t.scrollHeight&&("scroll"===(n=getComputedStyle(t,"").getPropertyValue("overflow-y"))||"auto"===n))return i(e,t)}while(t=t.parentNode)}function r(t,e){t=0<t?1:-1,e=0<e?1:-1,c.x===t&&c.y===e||(c.x=t,c.y=e,d=[],h=0)}function s(t){var e
return t*=u.pulseScale,1>t?e=t-(1-Math.exp(-t)):(e=Math.exp(-1),t=1-Math.exp(-(t-1)),e+=t*(1-e)),e*u.pulseNormalize}function a(t){return 1<=t?1:0>=t?0:(1==u.pulseNormalize&&(u.pulseNormalize/=s(1)),s(t))}var l={frameRate:150,animationTime:1200,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1},u=l,c={x:0,y:0},p=0<=document.compatMode.indexOf("CSS")||!document.body?document.documentElement:document.body,d=[],f=!1,h=+new Date,m={}
setInterval(function(){m={}},1e4)
var g=function(){var t=0
return function(e){return e.uniqueID||(e.uniqueID=t++)}}(),v=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t,e,n){window.setTimeout(t,n||1e3/60)}}()
window.addEventListener("mousewheel",n,!1)}()
