!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://assets.allegrostatic.com/opbox-navigation-layers/",r(r.s=0)}({0:function(e,t,r){e.exports=r("O14P")},O14P:function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return e.reduce((function(e,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},e,i({},r.getAttribute(t),r))}),{})}function o(e){window.opbox&&window.opbox.boxViewsMarker&&window.opbox.boxViewsMarker.recursivelyMarkBoxAsVisible(e)}r.r(t);var a=function e(t){var r,a,s,l,u,c,d=this,y=t.baseNode,g=t.delay,h=void 0===g?150:g,f=t.layerAlwaysVisible,b=void 0!==f&&f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"moveIndicator",(function(e){if(d.registryKeys.length){var t=e.getBoundingClientRect().top,r=d.registry[d.registryKeys[0]].trigger.getBoundingClientRect().top;d.indicator.style.top="".concat(t-r,"px")}})),i(this,"showIndicator",(function(){d.indicator.classList.remove(d.hiddenClassName)})),i(this,"hideIndicator",(function(){d.indicator.classList.add(d.hiddenClassName)})),i(this,"showLayer",(function(e){d.registry[e]&&(d.hideAllLayers(),d.showIndicator(),d.registry[e].trigger.classList.add(d.activeTriggerClassName),d.moveIndicator(d.registry[e].trigger),o(d.registry[e].layer))})),i(this,"hideLayer",(function(e){d.registry[e]&&(d.registry[e].trigger.classList.remove(d.activeTriggerClassName),o(d.registry[e].layer))})),i(this,"hideAllLayers",(function(){d.hideIndicator(),d.registryKeys.forEach(d.hideLayer)})),i(this,"handleBaseNodeMouseenter",(function(){clearTimeout(d.deactiveAllGroupsTimeout)})),i(this,"handleBaseNodeMouseleave",(function(){d.deactiveAllGroupsTimeout=setTimeout((function(){d.hideAllLayers()}),d.delay)})),i(this,"handleLinkMouseenter",(function(e){d.showLayerTimeout=setTimeout((function(){d.showLayer(e.target.getAttribute("data-group-id"))}),d.delay)})),i(this,"handleLinkMouseleave",(function(){clearTimeout(d.showLayerTimeout)})),i(this,"handleTouch",(function(){d.layerAlwaysVisible||d.hideAllLayers()})),i(this,"handleTouchLink",(function(e){e.preventDefault(),setTimeout((function(){d.showLayer(e.target.closest("[data-group-id]").getAttribute("data-group-id"))}),0)})),i(this,"init",(function(){d.registryKeys.length&&(d.layerAlwaysVisible||(d.baseNode.addEventListener("mouseenter",d.handleBaseNodeMouseenter,!1),d.baseNode.addEventListener("mouseleave",d.handleBaseNodeMouseleave,!1)),d.registryKeys.forEach((function(e){d.registry[e].trigger.addEventListener("mouseenter",d.handleLinkMouseenter,!1),d.registry[e].trigger.addEventListener("mouseleave",d.handleLinkMouseleave,!1),d.registry[e].trigger.addEventListener("touchstart",d.handleTouchLink)})),window.addEventListener("touchstart",d.handleTouch))})),this.baseNode=y,this.dataTriggerAttr="data-group-id",this.dataLayerAttr="data-layer-id",this.delay=h,this.layerAlwaysVisible=b,this.showLayerTimeout=null,this.deactiveAllGroupsTimeout=null,this.registry=(a=(r={layersTriggers:Array.from(y.querySelectorAll("[".concat(this.dataTriggerAttr,"]"))),layers:Array.from(y.querySelectorAll("[".concat(this.dataLayerAttr,"]"))),triggersId:this.dataTriggerAttr,layersId:this.dataLayerAttr}).layers,s=r.layersId,l=n(r.layersTriggers,r.triggersId),u=n(a,s),c={},Object.keys(l).forEach((function(e){c[e]={trigger:l[e],layer:u[e]}})),c),this.registryKeys=Object.keys(this.registry),this.indicator=y.querySelector("[data-navigation-layers-indicator]"),this.activeTriggerClassName="_882d6_2YU19",this.hiddenClassName="_lsy4e"},s="[data-layer-always-visible]";function l(e){new a({baseNode:e,layerAlwaysVisible:!!e.querySelector(s)}).init()}window.opbox.component.init({prototypeName:"allegro.navigation.layers"},(function(e){return e.domNodes.forEach(l)}))}}));
//# sourceMappingURL=index_661594e2.js.map