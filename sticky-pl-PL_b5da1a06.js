(window.webpackJsonp_fee54=window.webpackJsonp_fee54||[]).push([[2],{K8jm:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}));var n="_l7nkx _1rcax _nyhhx _1px3d _fee54_3omDk",i="_lsy4e",o="_71tm2"},SnEL:function(e,t,r){"use strict";r.r(t);var n=r("1OyB"),i=r("vuIU"),o=r("rePB"),s=r("U8x5"),a=r("K8jm");r.d(t,"default",(function(){return h}));var c=function(e,t){return e.split(" ").forEach((function(e){return t(e)}))},d=function(e,t){e&&c(t,e.classList.add.bind(e.classList))},u=function(e,t){e&&c(t,e.classList.remove.bind(e.classList))},h=function(){function e(t){var r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;Object(n.a)(this,e),Object(o.a)(this,"setSticky",(function(){r.baseNode.style.height="".concat(r.baseNode.offsetHeight,"px"),d(r.headerWrapper,a.a),d(r.primaryBar,"_fee54_3qUGn"),d(r.secondaryBar,a.b)})),Object(o.a)(this,"removeSticky",(function(){r.baseNode.style.height="",u(r.headerWrapper,a.a),u(r.primaryBar,"_fee54_3qUGn"),u(r.secondaryBar,a.b)})),Object(o.a)(this,"positionObserver",(function(e){e.forEach((function(e){var t=e.isIntersecting,n=e.boundingClientRect.top;r.targetWindow.requestAnimationFrame(!t&&n<0?r.setSticky:r.removeSticky)}))})),this.targetWindow=i,this.baseNode=t,this.headerWrapper=t.querySelector('[data-role="'.concat(s.w,'"]')),this.primaryBar=t.querySelector('[data-role="'.concat(s.k,'"]')),this.secondaryBar=t.querySelector('[data-role="'.concat(s.p,'"]')),this.observer=null}return Object(i.a)(e,[{key:"initialize",value:function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return"IntersectionObserver"in e&&"IntersectionObserverEntry"in e&&"intersectionRatio"in e.IntersectionObserverEntry.prototype})(this.targetWindow)&&(this.observer=new this.targetWindow.IntersectionObserver(this.positionObserver),this.observer.observe(this.baseNode),this.targetWindow.innerWidth>=768&&this.targetWindow.opbox.boxViewsMarker.markBoxAsVisible(this.baseNode,!0))}}]),e}()}}]);
//# sourceMappingURL=sticky-pl-PL_b5da1a06.js.map