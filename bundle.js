!function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],d=0,f=[];d<u.length;d++)i=u[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([14,0]),n()}([,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default='<p>This is a basic sample using MapboxGL and Redux. Was made using the <a href="https://github.com/mapbox/mapbox-gl-redux" target="_blank">mapbox-gl-redux</a> library. </p><p><a href="https://github.com/michogar/mapbox-redux" target="_blank">Show me the code!</a></p>'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(4),i=(r=o)&&r.__esModule?r:{default:r};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=document.getElementById(t),this.render()}return a(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="col12 pad2y",this.parent.appendChild(e),e.insertAdjacentHTML("beforeend",i.default)}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=r;var a=n.MapActionCreators.jumpTo;this.jumpTo=a.bind(this);var o=this.store.getState().bearing;this.bearing=o||0,this.parent=document.getElementById(t),this.unsubscriber=r.subscribe(this.onChangeBearing.bind(this)),this.render()}return r(e,[{key:"onChangeBearing",value:function(){var e=this.store.getState().bearing;this.bearing=e,this.render()}},{key:"onClickBearing",value:function(){this.store.dispatch(this.jumpTo({bearing:0}))}},{key:"render",value:function(){var e=document.getElementById("compass");e&&e.remove(),(e=document.createElement("div")).className="margin3 col3",e.id="compass";var t=document.createElement("a");t.className="button icon compass",t.style.transformOrigin="center",t.style.transform="rotate("+-this.bearing+"deg)",t.addEventListener("click",this.onClickBearing.bind(this)),e.appendChild(t),this.parent.appendChild(e)}},{key:"unsubscribe",value:function(){this.unsubscriber()}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=r,this.actions=n.MapActionCreators,this.parent=document.getElementById(t),this.render()}return r(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="pill col6";var t=document.createElement("a");t.className="button icon minus",t.addEventListener("click",this.zoomOut.bind(this));var n=document.createElement("a");n.className="button icon plus",n.addEventListener("click",this.zoomIn.bind(this)),e.appendChild(t),e.appendChild(n),this.parent.appendChild(e)}},{key:"zoomIn",value:function(){this.store.dispatch(this.actions.zoomIn())}},{key:"zoomOut",value:function(){this.store.dispatch(this.actions.zoomOut())}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.About=t.Compass=t.Zoom=void 0;var r=i(n(7)),a=i(n(6)),o=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}t.Zoom=r.default,t.Compass=a.default,t.About=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a={bearing:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],n=t.map;switch(t.type){case r.MapActionTypes.zoomend:return Object.assign({},e,{zoom:n.getZoom()});case r.MapActionTypes.sync:case r.MapActionTypes.rotate:return Object.assign({},e,{bearing:n.getBearing()});default:return e}}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(11),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=n(9),u=(r=i)&&r.__esModule?r:{default:r};var s=o.mapMiddleware,c=(0,a.createStore)(u.default,(0,a.applyMiddleware)(s));t.default=c},,function(e,t,n){"use strict";var r=u(n(13)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=u(n(12)),i=n(8);function u(e){return e&&e.__esModule?e:{default:e}}r.default.accessToken="pk.eyJ1IjoibWljaG9nYXIiLCJhIjoiY2plZm05czBiMGczaDJ3bnNsM216Nm13aCJ9.AeyXFg8ZIWI8as-453cSzg";var s=new r.default.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[-8.715893,42.25206],zoom:12,bearing:0,hash:!0});s.on("load",function(){var e=new a.ReduxMapControl("map");s.addControl(e),o.default.dispatch(e.MapActionCreators.sync());new i.Zoom("panel",e,o.default),new i.Compass("panel",e,o.default),new i.About("about")})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21wYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjEiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl90ZXh0IiwiQWJvdXQiLCJwYXJlbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJDb21wYXNzIiwiY29udHJvbCIsInN0b3JlIiwianVtcFRvIiwiTWFwQWN0aW9uQ3JlYXRvcnMiLCJiZWFyaW5nIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJvbkNoYW5nZUJlYXJpbmciLCJkaXNwYXRjaCIsImNvbXBhc3MiLCJyZW1vdmUiLCJpZCIsImNvbXBhc3NCdXR0b24iLCJzdHlsZSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrQmVhcmluZyIsIlpvb20iLCJhY3Rpb25zIiwicGlsbCIsInpvb21PdXQiLCJ6b29tSW4iLCJfbWFwYm94R2xSZWR1eCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwibWFwIiwidHlwZSIsIk1hcEFjdGlvblR5cGVzIiwiem9vbWVuZCIsImFzc2lnbiIsInpvb20iLCJnZXRab29tIiwic3luYyIsInJvdGF0ZSIsImdldEJlYXJpbmciLCJfcmVkdXgiLCJNYXBib3hHTFJlZHV4IiwiX3JlZHVjZXIiLCJtYXBNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiX2NvbXBvbmVudHMiLCJNYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiTWFwIiwiY29udGFpbmVyIiwiY2VudGVyIiwiaGFzaCIsIm9uIiwicmVkdXhDb250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dXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0LDBdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY29uc3QgdGV4dCA9ICc8cD5UaGlzIGlzIGEgYmFzaWMgc2FtcGxlIHVzaW5nIE1hcGJveEdMIGFuZCBSZWR1eC4gV2FzIG1hZGUgdXNpbmcgdGhlICcgK1xuICAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXBib3gvbWFwYm94LWdsLXJlZHV4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+bWFwYm94LWdsLXJlZHV4PC9hPicgK1xuICAnIGxpYnJhcnkuIDwvcD4nICtcbiAgJzxwPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWljaG9nYXIvbWFwYm94LXJlZHV4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2hvdyBtZSB0aGUgY29kZSE8L2E+PC9wPidcblxuZXhwb3J0IGRlZmF1bHQgdGV4dFxuIiwiaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0J1xuXG5jbGFzcyBBYm91dCB7XG4gIGNvbnN0cnVjdG9yIChwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc05hbWUgPSAnY29sMTIgcGFkMnknXG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRleHQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcbiIsImNsYXNzIENvbXBhc3Mge1xuICBjb25zdHJ1Y3RvciAocGFyZW50LCBjb250cm9sLCBzdG9yZSkge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxuICAgIGNvbnN0IHsganVtcFRvIH0gPSBjb250cm9sLk1hcEFjdGlvbkNyZWF0b3JzXG4gICAgdGhpcy5qdW1wVG8gPSBqdW1wVG8uYmluZCh0aGlzKVxuICAgIGNvbnN0IHsgYmVhcmluZyB9ID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpXG4gICAgdGhpcy5iZWFyaW5nID0gYmVhcmluZyB8fCAwXG4gICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpXG4gICAgdGhpcy51bnN1YnNjcmliZXIgPSBzdG9yZS5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUJlYXJpbmcuYmluZCh0aGlzKSlcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgb25DaGFuZ2VCZWFyaW5nICgpIHtcbiAgICBjb25zdCB7IGJlYXJpbmcgfSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMuYmVhcmluZyA9IGJlYXJpbmdcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgb25DbGlja0JlYXJpbmcgKCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5qdW1wVG8oeyBiZWFyaW5nOiAwIH0pKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IGNvbXBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFzcycpXG4gICAgaWYgKGNvbXBhc3MpIHtcbiAgICAgIGNvbXBhc3MucmVtb3ZlKClcbiAgICB9XG4gICAgY29tcGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29tcGFzcy5jbGFzc05hbWUgPSAnbWFyZ2luMyBjb2wzJ1xuICAgIGNvbXBhc3MuaWQgPSAnY29tcGFzcydcbiAgICBjb25zdCBjb21wYXNzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY29tcGFzc0J1dHRvbi5jbGFzc05hbWUgPSAnYnV0dG9uIGljb24gY29tcGFzcydcbiAgICBjb21wYXNzQnV0dG9uLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdjZW50ZXInXG4gICAgY29tcGFzc0J1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7LXRoaXMuYmVhcmluZ31kZWcpYFxuICAgIGNvbXBhc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tCZWFyaW5nLmJpbmQodGhpcykpXG5cbiAgICBjb21wYXNzLmFwcGVuZENoaWxkKGNvbXBhc3NCdXR0b24pXG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcGFzcylcbiAgfVxuICB1bnN1YnNjcmliZSAoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhc3NcbiIsImNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvciAocGFyZW50LCBjb250cm9sLCBzdG9yZSkge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxuICAgIHRoaXMuYWN0aW9ucyA9IGNvbnRyb2wuTWFwQWN0aW9uQ3JlYXRvcnNcbiAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBwaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwaWxsLmNsYXNzTmFtZSA9ICdwaWxsIGNvbDYnXG4gICAgY29uc3Qgem9vbU91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHpvb21PdXQuY2xhc3NOYW1lID0gJ2J1dHRvbiBpY29uIG1pbnVzJ1xuICAgIHpvb21PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnpvb21PdXQuYmluZCh0aGlzKSlcbiAgICBjb25zdCB6b29tSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICB6b29tSW4uY2xhc3NOYW1lID0gJ2J1dHRvbiBpY29uIHBsdXMnXG4gICAgem9vbUluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tSW4uYmluZCh0aGlzKSlcbiAgICBwaWxsLmFwcGVuZENoaWxkKHpvb21PdXQpXG4gICAgcGlsbC5hcHBlbmRDaGlsZCh6b29tSW4pXG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQocGlsbClcbiAgfVxuICB6b29tSW4gKCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5hY3Rpb25zLnpvb21JbigpKVxuICB9XG4gIHpvb21PdXQgKCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5hY3Rpb25zLnpvb21PdXQoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBab29tXG4iLCJpbXBvcnQgWm9vbSBmcm9tICcuL3pvb20nXG5pbXBvcnQgQ29tcGFzcyBmcm9tICcuL2NvbXBhc3MnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCdcblxuZXhwb3J0IHsgWm9vbSwgQ29tcGFzcywgQWJvdXQgfVxuIiwiaW1wb3J0IHsgTWFwQWN0aW9uVHlwZXMgfSBmcm9tICdAbWFwYm94L21hcGJveC1nbC1yZWR1eCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBiZWFyaW5nOiAwXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBtYXAgPSBhY3Rpb24ubWFwXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE1hcEFjdGlvblR5cGVzLnpvb21lbmQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgem9vbTogbWFwLmdldFpvb20oKVxuICAgICAgfSlcbiAgICBjYXNlIE1hcEFjdGlvblR5cGVzLnN5bmM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYmVhcmluZzogbWFwLmdldEJlYXJpbmcoKVxuICAgICAgfSlcbiAgICBjYXNlIE1hcEFjdGlvblR5cGVzLnJvdGF0ZTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBiZWFyaW5nOiBtYXAuZ2V0QmVhcmluZygpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgKiBhcyBNYXBib3hHTFJlZHV4IGZyb20gJ0BtYXBib3gvbWFwYm94LWdsLXJlZHV4J1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtYXBNaWRkbGV3YXJlID0gTWFwYm94R0xSZWR1eC5tYXBNaWRkbGV3YXJlXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXIsXG4gIGFwcGx5TWlkZGxld2FyZShtYXBNaWRkbGV3YXJlKVxuKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IE1hcGJveGdsIGZyb20gJ21hcGJveC1nbCdcbmltcG9ydCAqIGFzIE1hcGJveEdMUmVkdXggZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZSdcbmltcG9ydCB7IFpvb20sIENvbXBhc3MsIEFib3V0IH0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5NYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaWJXbGphRzluWVhJaUxDSmhJam9pWTJwbFptMDVjekJpTUdjemFESjNibk5zTTIxNk5tMTNhQ0o5LkFleVhGZzhaSVdJOGFzLTQ1M2NTemcnXG5jb25zdCBtYXAgPSBuZXcgTWFwYm94Z2wuTWFwKHtcbiAgY29udGFpbmVyOiAnbWFwJyxcbiAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjknLFxuICBjZW50ZXI6IFstOC43MTU4OTMsIDQyLjI1MjA2XSxcbiAgem9vbTogMTIsXG4gIGJlYXJpbmc6IDAsXG4gIGhhc2g6IHRydWVcbn0pXG5cbm1hcC5vbignbG9hZCcsICgpID0+IHtcbiAgY29uc3QgcmVkdXhDb250cm9sID0gbmV3IE1hcGJveEdMUmVkdXguUmVkdXhNYXBDb250cm9sKCdtYXAnKVxuICBtYXAuYWRkQ29udHJvbChyZWR1eENvbnRyb2wpXG4gIHN0b3JlLmRpc3BhdGNoKHJlZHV4Q29udHJvbC5NYXBBY3Rpb25DcmVhdG9ycy5zeW5jKCkpXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBjb25zdCB6b29tID0gbmV3IFpvb20oJ3BhbmVsJywgcmVkdXhDb250cm9sLCBzdG9yZSlcbiAgY29uc3QgY29tcGFzcyA9IG5ldyBDb21wYXNzKCdwYW5lbCcsIHJlZHV4Q29udHJvbCwgc3RvcmUpXG4gIGNvbnN0IGFib3V0ID0gbmV3IEFib3V0KCdhYm91dCcpXG5cbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=