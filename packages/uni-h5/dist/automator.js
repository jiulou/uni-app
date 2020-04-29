/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r}var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function r(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}for(var o=[],u=0;u<256;++u)o[u]=(u+256).toString(16).substr(1);function i(e,t,n){var u=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[u+c]=i[c];return t||function(e,t){var n=t||0,r=o;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}(i)}var c=Object.prototype.hasOwnProperty,a=Array.isArray,s=function(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}},l=/-(\w)/g,f=s((function(e){return e.replace(l,(function(e,t){return t?t.toUpperCase():""}))})),g=s((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),p=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;function d(e,t){if(a(e))return e;if(t&&(n=t,r=e,c.call(n,r)))return[e];var n,r,o=[];return e.replace(p,(function(e,t,n,r){return o.push(n?r.replace(/\\(\\)?/g,"$1"):t||e),r})),o}function m(e,t){var n,r=d(t,e);for(n=r.shift();null!=n;){if(null==(e=e[n]))return;n=r.shift()}return e}var v=new Map;function h(e){if(!function(e){if(e){var t=e.tagName;return 0===t.indexOf("UNI-")||"BODY"===t}return!1}(e))throw Error("no such element");var t,n,r={elementId:(t=e,n=t._id,n||(n=i(),t._id=n,v.set(n,{id:n,element:t})),n),tagName:e.tagName.toLocaleLowerCase().replace("uni-","")},o=e.__vue__;return o&&!o.$options.isReserved&&(r.nodeId=function(e){return e._uid}(o)),"video"===r.tagName&&(r.videoId=r.nodeId),r}var _={input:{input:function(e,t){var n=e.__vue__;n.inputValue=t,n._onInput({target:{value:t}})}},textarea:{input:function(e,t){e.__vue__.valueSync=t}},"scroll-view":{scrollTo:function(e,t,n){var r=e.__vue__.$refs.main;r.scrollLeft=t,r.scrollTop=n},scrollTop:function(e){return e.__vue__.$refs.main.scrollTop},scrollLeft:function(e){return e.__vue__.$refs.main.scrollLeft},scrollWidth:function(e){return e.__vue__.$refs.main.scrollWidth},scrollHeight:function(e){return e.__vue__.$refs.main.scrollHeight}},swiper:{swipeTo:function(e,t){e.__vue__.current=t}},"movable-view":{moveTo:function(e,t,n){e.__vue__._animationTo(t,n)}},switch:{tap:function(e){e.click()}},slider:{slideTo:function(e,t){var n=e.__vue__,r=n.$refs["uni-slider"],o=r.offsetWidth,u=r.getBoundingClientRect().left;n.value=t,n._onClick({x:(t-n.min)*o/(n.max-n.min)+u})}}},y={getWindow:function(e){return window},getDocument:function(e){return document},getEl:function(e){var t=v.get(e);if(!t)throw Error("element destroyed");return t.element},getOffset:function(e){var t=e.getBoundingClientRect();return Promise.resolve({left:t.left+window.pageXOffset,top:t.top+window.pageYOffset})},querySelector:function(e,t){return Promise.resolve(h(e.querySelector(t)))},querySelectorAll:function(e,t){var n=[];return document.querySelectorAll(t).forEach((function(e){try{n.push(h(e))}catch(e){}})),Promise.resolve({elements:n})},queryProperties:function(e,t){return Promise.resolve({properties:t.map((function(t){var n=m(e,t);return"document.documentElement.scrollTop"===t&&0===n&&(n=m(e,"document.body.scrollTop")),n}))})},queryAttributes:function(e,t){return Promise.resolve({attributes:t.map((function(t){return String(e.getAttribute(t))}))})},queryStyles:function(e,t){var n=getComputedStyle(e);return Promise.resolve({styles:t.map((function(e){return n[e]}))})},queryHTML:function(e,t){return Promise.resolve({html:(n="outer"===t?e.outerHTML:e.innerHTML,n.replace(/\n/g,"").replace(/(<uni-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/uni-text>)/g,"$1$3").replace(/<\/?[^>]*>/g,(function(e){return-1<e.indexOf("<body")?"<page>":"</body>"===e?"</page>":0!==e.indexOf("<uni-")&&0!==e.indexOf("</uni-")?"":e.replace(/uni-/g,"").replace(/ role=""/g,"").replace(/ aria-label=""/g,"")})))});var n},dispatchTapEvent:function(e){return e.click(),Promise.resolve()},dispatchLongpressEvent:function(e){return Promise.resolve()},dispatchTouchEvent:function(e,t,n){n||(n={}),n.touches||(n.touches=[]),n.changedTouches||(n.changedTouches=[]),n.touches.length||n.touches.push({identifier:Date.now(),target:e});var r=n.touches.map((function(e){return new Touch(e)})),o=n.changedTouches.map((function(e){return new Touch(e)}));return e.dispatchEvent(new TouchEvent(t,{cancelable:!0,bubbles:!0,touches:r,targetTouches:[],changedTouches:o})),Promise.resolve()},callFunction:function(t,n,r){var o=m(_,n);return o?Promise.resolve({result:o.apply(null,e([t],r))}):Promise.reject(Error(n+" not exists"))},triggerEvent:function(e,t,n){var r=e.__vue__;return r.$trigger&&r.$trigger(t,{},n),Promise.resolve()}};["movable-view","picker","ad","button","checkbox-group","checkbox","form","icon","label","movable-area","navigator","picker-view-column","picker-view","progress","radio-group","radio","rich-text","u-slider","swiper-item","swiper","switch"].map((function(e){return g(f(e))}));var E,T=Object.assign({},function(e){return{"Page.getElement":function(t){return e.querySelector(e.getDocument(t.pageId),t.selector)},"Page.getElements":function(t){return e.querySelectorAll(e.getDocument(t.pageId),t.selector)},"Page.getWindowProperties":function(t){return e.queryProperties(e.getWindow(t.pageId),t.names)}}}(y),function(e){var t=function(t){return e.getEl(t.elementId,t.pageId)};return{"Element.getElement":function(n){return e.querySelector(t(n),n.selector)},"Element.getElements":function(n){return e.querySelectorAll(t(n),n.selector)},"Element.getDOMProperties":function(n){return e.queryProperties(t(n),n.names)},"Element.getProperties":function(n){var r=t(n),o=r.__vue__||r.attr||{};return e.queryProperties(o,n.names)},"Element.getOffset":function(n){return e.getOffset(t(n))},"Element.getAttributes":function(n){return e.queryAttributes(t(n),n.names)},"Element.getStyles":function(n){return e.queryStyles(t(n),n.names)},"Element.getHTML":function(n){return e.queryHTML(t(n),n.type)},"Element.tap":function(n){return e.dispatchTapEvent(t(n))},"Element.longpress":function(n){return e.dispatchLongpressEvent(t(n))},"Element.touchstart":function(n){return e.dispatchTouchEvent(t(n),"touchstart",n)},"Element.touchmove":function(n){return e.dispatchTouchEvent(t(n),"touchmove",n)},"Element.touchend":function(n){return e.dispatchTouchEvent(t(n),"touchend",n)},"Element.callFunction":function(n){return e.callFunction(t(n),n.functionName,n.args)},"Element.triggerEvent":function(n){return e.triggerEvent(t(n),n.type,n.detail)}}}(y));function S(e){return UniViewJSBridge.publishHandler("onAutoMessageReceive",e)}function w(e){return e.__wxWebviewId__?e.__wxWebviewId__:e.privateProperties?e.privateProperties.slaveId:e.$page?e.$page.id:void 0}function b(e){return e.route||e.uri}function P(e){return e.options||e.$page&&e.$page.options||{}}function O(e){return{id:w(e),path:b(e),query:P(e)}}function I(e){var t=function(e){return getCurrentPages().find((function(t){return w(t)===e}))}(e);return t&&t.$vm}function M(e,t){var n=I(e);return n&&function e(t,n){var r;return t&&(!function(e,t){return e._uid===t}(t,n)?t.$children.find((function(t){return r=e(t,n)})):r=t),r}(n,t)}function $(e,t){var n;return e&&(n=t?m(e.$data,t):Object.assign({},e.$data)),Promise.resolve({data:n})}function A(e,t){return e&&Object.keys(t).forEach((function(n){e[n]=t[n]})),Promise.resolve()}function N(e,t,n){return new Promise((function(r,o){if(!e)return o(E.VM_NOT_EXISTS);if(!e[t])return o(E.VM_NOT_EXISTS);var u,i=e[t].apply(e,n);!(u=i)||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof u.then?r({result:i}):i.then((function(e){r({result:e})}))}))}UniViewJSBridge.subscribe("sendAutoMessage",(function(e){var t=e.id,n=e.method,r=e.params,o={id:t},u=T[n];if(!u)return o.error={message:n+" unimplemented"},S(o);try{u(r).then((function(e){e&&(o.result=e)})).catch((function(e){o.error={message:e.message}})).finally((function(){S(o)}))}catch(e){o.error={message:e.message},S(o)}})),function(e){e.VM_NOT_EXISTS="VM_NOT_EXISTS",e.METHOD_NOT_EXISTS="METHOD_NOT_EXISTS"}(E||(E={}));var x=/Sync$/;var C={getPageStack:function(){return Promise.resolve({pageStack:getCurrentPages().map((function(e){return O(e)}))})},getCurrentPage:function(){var e=getCurrentPages(),t=e.length;return new Promise((function(n,r){t?n(O(e[t-1])):r(Error("getCurrentPages().length=0"))}))},callUniMethod:function(e){var t=e.method,n=e.args;return new Promise((function(e,r){if(!uni[t])return r(Error("uni."+t+" not exists"));if(function(e){return x.test(e)}(t))return e({result:uni[t].apply(uni,n)});var o=[Object.assign({},n[0]||{},{success:function(n){setTimeout((function(){e({result:n})}),"pageScrollTo"===t?350:0)},fail:function(e){r(Error(e.errMsg.replace(t+":fail ","")))}})];uni[t].apply(uni,o)}))}},q={getData:function(e){return $(I(e.pageId),e.path)},setData:function(e){return A(I(e.pageId),e.data)},callMethod:function(e){var t,n=((t={})[E.VM_NOT_EXISTS]="Page["+e.pageId+"] not exists",t[E.METHOD_NOT_EXISTS]="page."+e.method+" not exists",t);return new Promise((function(t,r){N(I(e.pageId),e.method,e.args).then((function(e){return t(e)})).catch((function(e){r(Error(n[e]))}))}))}};function k(e){return e.nodeId||e.elementId}var D={getData:function(e){return $(M(e.pageId,k(e)),e.path)},setData:function(e){return A(M(e.pageId,k(e)),e.data)},callMethod:function(e){var t,n=k(e),r=((t={})[E.VM_NOT_EXISTS]="Component["+e.pageId+":"+n+"] not exists",t[E.METHOD_NOT_EXISTS]="component."+e.method+" not exists",t);return new Promise((function(t,o){N(M(e.pageId,n),e.method,e.args).then((function(e){return t(e)})).catch((function(e){o(Error(r[e]))}))}))}},V={};Object.keys(C).forEach((function(e){V["App."+e]=C[e]})),Object.keys(q).forEach((function(e){V["Page."+e]=q[e]})),Object.keys(D).forEach((function(e){V["Element."+e]=D[e]}));var j,H,L=process.env.UNI_AUTOMATOR_WS_ENDPOINT;function R(e){H.send({data:JSON.stringify(e)})}function U(e){var t=JSON.parse(e.data),n=t.id,r=t.method,o=t.params,u={id:n},i=V[r];if(!i){if(j){var c=j(n,r,o,u);if(!0===c)return;i=c}if(!i)return u.error={message:r+" unimplemented"},R(u)}try{i(o).then((function(e){e&&(u.result=e)})).catch((function(e){u.error={message:e.message}})).finally((function(){R(u)}))}catch(e){u.error={message:e.message},R(u)}}j=function(e,t,n,r){var o=n.pageId,u=function(e){var t=getCurrentPages();if(!e)return t[t.length-1];return t.find((function(t){return t.$page.id===e}))}(o);if(!u)return r.error={message:"page["+o+"] not exists"},R(r),!0;u.$page.meta.isNVue;return UniServiceJSBridge.publishHandler("sendAutoMessage",{id:e,method:t,params:n},o),!0},UniServiceJSBridge.subscribe("onAutoMessageReceive",(function(e){R(e)})),setTimeout((function(){var e;global.testMessage=U,void 0===e&&(e={}),(H=uni.connectSocket({url:L,complete:function(){}})).onMessage(U),H.onOpen((function(t){e.success&&e.success(),console.log("已开启自动化测试...")})),H.onError((function(e){console.log("automator.onError",e)})),H.onClose((function(){e.fail&&e.fail({errMsg:"$$initRuntimeAutomator:fail"}),console.log("automator.onClose")}))}),500);