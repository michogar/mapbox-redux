!function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],d=0,f=[];d<u.length;d++)i=u[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([14,0]),n()}([,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default='<p>This is a basic sample using MapboxGL and Redux. Was made using the <a href="https://github.com/mapbox/mapbox-gl-redux" target="_blank">mapbox-gl-redux</a> library. </p><p><a href="https://github.com/michogar/mapbox-redux" target="_blank">Show me the code!</a></p>'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(4),i=(r=o)&&r.__esModule?r:{default:r};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=document.getElementById(t),this.render()}return a(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="col12 pad2y",this.parent.appendChild(e),e.insertAdjacentHTML("beforeend",i.default)}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=r;var a=n.MapActionCreators.jumpTo;this.jumpTo=a.bind(this);var o=this.store.getState().bearing;this.bearing=o||0,this.parent=document.getElementById(t),this.unsubscriber=r.subscribe(this.onChangeBearing.bind(this)),this.render()}return r(e,[{key:"onChangeBearing",value:function(){var e=this.store.getState().bearing;this.bearing=e,this.render()}},{key:"onClickBearing",value:function(){this.store.dispatch(this.jumpTo({bearing:0}))}},{key:"render",value:function(){var e=document.getElementById("compass");e&&e.remove(),(e=document.createElement("div")).className="margin3 col3",e.id="compass";var t=document.createElement("a");t.className="button icon compass",t.style.transformOrigin="center",t.style.transform="rotate("+-this.bearing+"deg)",t.addEventListener("click",this.onClickBearing.bind(this)),e.appendChild(t),this.parent.appendChild(e)}},{key:"unsubscribe",value:function(){this.unsubscriber()}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=r,this.actions=n.MapActionCreators,this.parent=document.getElementById(t),this.render()}return r(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="pill col6";var t=document.createElement("a");t.className="button icon minus",t.addEventListener("click",this.zoomOut.bind(this));var n=document.createElement("a");n.className="button icon plus",n.addEventListener("click",this.zoomIn.bind(this)),e.appendChild(t),e.appendChild(n),this.parent.appendChild(e)}},{key:"zoomIn",value:function(){this.store.dispatch(this.actions.zoomIn())}},{key:"zoomOut",value:function(){this.store.dispatch(this.actions.zoomOut())}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.About=t.Compass=t.Zoom=void 0;var r=i(n(7)),a=i(n(6)),o=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}t.Zoom=r.default,t.Compass=a.default,t.About=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a={bearing:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],n=t.map;switch(t.type){case r.MapActionTypes.zoomend:return Object.assign({},e,{zoom:n.getZoom()});case r.MapActionTypes.sync:case r.MapActionTypes.rotate:return Object.assign({},e,{bearing:n.getBearing()});default:return e}}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(11),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=n(9),u=(r=i)&&r.__esModule?r:{default:r};var s=o.mapMiddleware,c=(0,a.createStore)(u.default,(0,a.applyMiddleware)(s));t.default=c},,function(e,t,n){"use strict";var r=u(n(13)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=u(n(12)),i=n(8);function u(e){return e&&e.__esModule?e:{default:e}}var s=new r.default.Map({container:"map",style:"https://api.tmb.cat/v1/maps/vts/styles/positron/style.json?app_id=b53a5765&app_key=cb2fc6155198c620d9d6f454d4a6ef69",center:[2.15,41.39],zoom:12,bearing:-45,hash:!0});s.on("load",function(){var e=new a.ReduxMapControl("map");s.addControl(e),o.default.dispatch(e.MapActionCreators.sync());new i.Zoom("panel",e,o.default),new i.Compass("panel",e,o.default),new i.About("about")})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21wYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjEiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl90ZXh0IiwiQWJvdXQiLCJwYXJlbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImluc2VydEFkamFjZW50SFRNTCIsInRleHQiLCJDb21wYXNzIiwiY29udHJvbCIsInN0b3JlIiwianVtcFRvIiwiTWFwQWN0aW9uQ3JlYXRvcnMiLCJiZWFyaW5nIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJvbkNoYW5nZUJlYXJpbmciLCJkaXNwYXRjaCIsImNvbXBhc3MiLCJyZW1vdmUiLCJpZCIsImNvbXBhc3NCdXR0b24iLCJzdHlsZSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrQmVhcmluZyIsIlpvb20iLCJhY3Rpb25zIiwicGlsbCIsInpvb21PdXQiLCJ6b29tSW4iLCJfbWFwYm94R2xSZWR1eCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwibWFwIiwidHlwZSIsIk1hcEFjdGlvblR5cGVzIiwiem9vbWVuZCIsImFzc2lnbiIsInpvb20iLCJnZXRab29tIiwic3luYyIsInJvdGF0ZSIsImdldEJlYXJpbmciLCJfcmVkdXgiLCJNYXBib3hHTFJlZHV4IiwiX3JlZHVjZXIiLCJtYXBNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiX2NvbXBvbmVudHMiLCJNYXBib3hnbCIsIk1hcCIsImNvbnRhaW5lciIsImNlbnRlciIsImhhc2giLCJvbiIsInJlZHV4Q29udHJvbCIsIlJlZHV4TWFw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TlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxNCwwXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNvbnN0IHRleHQgPSAnPHA+VGhpcyBpcyBhIGJhc2ljIHNhbXBsZSB1c2luZyBNYXBib3hHTCBhbmQgUmVkdXguIFdhcyBtYWRlIHVzaW5nIHRoZSAnICtcbiAgJzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC1nbC1yZWR1eFwiIHRhcmdldD1cIl9ibGFua1wiPm1hcGJveC1nbC1yZWR1eDwvYT4nICtcbiAgJyBsaWJyYXJ5LiA8L3A+JyArXG4gICc8cD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21pY2hvZ2FyL21hcGJveC1yZWR1eFwiIHRhcmdldD1cIl9ibGFua1wiPlNob3cgbWUgdGhlIGNvZGUhPC9hPjwvcD4nXG5cbmV4cG9ydCBkZWZhdWx0IHRleHRcbiIsImltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCdcblxuY2xhc3MgQWJvdXQge1xuICBjb25zdHJ1Y3RvciAocGFyZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2NvbDEyIHBhZDJ5J1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZXh0KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iLCJjbGFzcyBDb21wYXNzIHtcbiAgY29uc3RydWN0b3IgKHBhcmVudCwgY29udHJvbCwgc3RvcmUpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICBjb25zdCB7IGp1bXBUbyB9ID0gY29udHJvbC5NYXBBY3Rpb25DcmVhdG9yc1xuICAgIHRoaXMuanVtcFRvID0ganVtcFRvLmJpbmQodGhpcylcbiAgICBjb25zdCB7IGJlYXJpbmcgfSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHRoaXMuYmVhcmluZyA9IGJlYXJpbmcgfHwgMFxuICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50KVxuICAgIHRoaXMudW5zdWJzY3JpYmVyID0gc3RvcmUuc3Vic2NyaWJlKHRoaXMub25DaGFuZ2VCZWFyaW5nLmJpbmQodGhpcykpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIG9uQ2hhbmdlQmVhcmluZyAoKSB7XG4gICAgY29uc3QgeyBiZWFyaW5nIH0gPSB0aGlzLnN0b3JlLmdldFN0YXRlKClcbiAgICB0aGlzLmJlYXJpbmcgPSBiZWFyaW5nXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIG9uQ2xpY2tCZWFyaW5nICgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMuanVtcFRvKHsgYmVhcmluZzogMCB9KSlcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGxldCBjb21wYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhc3MnKVxuICAgIGlmIChjb21wYXNzKSB7XG4gICAgICBjb21wYXNzLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbXBhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbXBhc3MuY2xhc3NOYW1lID0gJ21hcmdpbjMgY29sMydcbiAgICBjb21wYXNzLmlkID0gJ2NvbXBhc3MnXG4gICAgY29uc3QgY29tcGFzc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGNvbXBhc3NCdXR0b24uY2xhc3NOYW1lID0gJ2J1dHRvbiBpY29uIGNvbXBhc3MnXG4gICAgY29tcGFzc0J1dHRvbi5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnY2VudGVyJ1xuICAgIGNvbXBhc3NCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkey10aGlzLmJlYXJpbmd9ZGVnKWBcbiAgICBjb21wYXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQmVhcmluZy5iaW5kKHRoaXMpKVxuXG4gICAgY29tcGFzcy5hcHBlbmRDaGlsZChjb21wYXNzQnV0dG9uKVxuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKGNvbXBhc3MpXG4gIH1cbiAgdW5zdWJzY3JpYmUgKCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYXNzXG4iLCJjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IgKHBhcmVudCwgY29udHJvbCwgc3RvcmUpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLmFjdGlvbnMgPSBjb250cm9sLk1hcEFjdGlvbkNyZWF0b3JzXG4gICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcGlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGlsbC5jbGFzc05hbWUgPSAncGlsbCBjb2w2J1xuICAgIGNvbnN0IHpvb21PdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICB6b29tT3V0LmNsYXNzTmFtZSA9ICdidXR0b24gaWNvbiBtaW51cydcbiAgICB6b29tT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tT3V0LmJpbmQodGhpcykpXG4gICAgY29uc3Qgem9vbUluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgem9vbUluLmNsYXNzTmFtZSA9ICdidXR0b24gaWNvbiBwbHVzJ1xuICAgIHpvb21Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuem9vbUluLmJpbmQodGhpcykpXG4gICAgcGlsbC5hcHBlbmRDaGlsZCh6b29tT3V0KVxuICAgIHBpbGwuYXBwZW5kQ2hpbGQoem9vbUluKVxuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHBpbGwpXG4gIH1cbiAgem9vbUluICgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy56b29tSW4oKSlcbiAgfVxuICB6b29tT3V0ICgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy56b29tT3V0KCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9vbVxuIiwiaW1wb3J0IFpvb20gZnJvbSAnLi96b29tJ1xuaW1wb3J0IENvbXBhc3MgZnJvbSAnLi9jb21wYXNzJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXG5cbmV4cG9ydCB7IFpvb20sIENvbXBhc3MsIEFib3V0IH1cbiIsImltcG9ydCB7IE1hcEFjdGlvblR5cGVzIH0gZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtcmVkdXgnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYmVhcmluZzogMFxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgbWFwID0gYWN0aW9uLm1hcFxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBNYXBBY3Rpb25UeXBlcy56b29tZW5kOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHpvb206IG1hcC5nZXRab29tKClcbiAgICAgIH0pXG4gICAgY2FzZSBNYXBBY3Rpb25UeXBlcy5zeW5jOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGJlYXJpbmc6IG1hcC5nZXRCZWFyaW5nKClcbiAgICAgIH0pXG4gICAgY2FzZSBNYXBBY3Rpb25UeXBlcy5yb3RhdGU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYmVhcmluZzogbWFwLmdldEJlYXJpbmcoKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICogYXMgTWFwYm94R0xSZWR1eCBmcm9tICdAbWFwYm94L21hcGJveC1nbC1yZWR1eCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgbWFwTWlkZGxld2FyZSA9IE1hcGJveEdMUmVkdXgubWFwTWlkZGxld2FyZVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyLFxuICBhcHBseU1pZGRsZXdhcmUobWFwTWlkZGxld2FyZSlcbilcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCBNYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnXG5pbXBvcnQgKiBhcyBNYXBib3hHTFJlZHV4IGZyb20gJ0BtYXBib3gvbWFwYm94LWdsLXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vcmVkdXgvc3RvcmUnXG5pbXBvcnQgeyBab29tLCBDb21wYXNzLCBBYm91dCB9IGZyb20gJy4vY29tcG9uZW50cydcblxuY29uc3QgbWFwID0gbmV3IE1hcGJveGdsLk1hcCh7XG4gIGNvbnRhaW5lcjogJ21hcCcsXG4gIHN0eWxlOiAnaHR0cHM6Ly9hcGkudG1iLmNhdC92MS9tYXBzL3Z0cy9zdHlsZXMvcG9zaXRyb24vc3R5bGUuanNvbj9hcHBfaWQ9YjUzYTU3NjUmYXBwX2tleT1jYjJmYzYxNTUxOThjNjIwZDlkNmY0NTRkNGE2ZWY2OScsXG4gIGNlbnRlcjogWzIuMTUsIDQxLjM5XSxcbiAgem9vbTogMTIsXG4gIGJlYXJpbmc6IC00NSxcbiAgaGFzaDogdHJ1ZVxufSlcblxubWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCByZWR1eENvbnRyb2wgPSBuZXcgTWFwYm94R0xSZWR1eC5SZWR1eE1hcENvbnRyb2woJ21hcCcpXG4gIG1hcC5hZGRDb250cm9sKHJlZHV4Q29udHJvbClcbiAgc3RvcmUuZGlzcGF0Y2gocmVkdXhDb250cm9sLk1hcEFjdGlvbkNyZWF0b3JzLnN5bmMoKSlcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4gIGNvbnN0IHpvb20gPSBuZXcgWm9vbSgncGFuZWwnLCByZWR1eENvbnRyb2wsIHN0b3JlKVxuICBjb25zdCBjb21wYXNzID0gbmV3IENvbXBhc3MoJ3BhbmVsJywgcmVkdXhDb250cm9sLCBzdG9yZSlcbiAgY29uc3QgYWJvdXQgPSBuZXcgQWJvdXQoJ2Fib3V0JylcblxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==