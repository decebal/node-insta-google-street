// placeholder...
//(function(c){function d(){var b=c(this);if(!b.parent().hasClass("placeholder")){var a=c("<label>").addClass("placeholder");b.wrap(a);a=c("<span>");a.text(b.attr("placeholder"));b.removeAttr("placeholder");a.insertBefore(b)}setTimeout(function(){var a=b.attr("title");!b.val()||b.val()==a?(b.prev("span").css("visibility",""),a&&(a=c("<label></label>").text(a).css("visibility","hidden").appendTo("body"),b.prev("span").css("margin-left",a.width()+3+"px"),a.remove())):b.prev("span").css("visibility","hidden")}, 0)}if(!("placeholder"in document.createElement("input"))){var a=c("input, textarea");a.live("keydown",d);a.live("paste",d);a.live("focusin",function(){c(this).prev("span").css("color","#ccc")});a.live("focusout",function(){c(this).prev("span").css("color","#999")});c(function(){c("input[placeholder], textarea[placeholder]").each(function(){d.call(this)})})}})(jQuery);

// debounce
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// tipsy
(function(b){function i(a,c){this.$element=b(a);this.options=c;this.enabled=!0;this.fixTitle()}i.prototype={show:function(){var a=this.getTitle();if(a&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](a);c[0].className="tipsy";c.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var a=b.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),d=c[0].offsetWidth,f=c[0].offsetHeight, e="function"==typeof this.options.gravity?this.options.gravity.call(this.$element[0]):this.options.gravity,g;switch(e.charAt(0)){case "n":g={top:a.top+a.height+this.options.offset,left:a.left+a.width/2-d/2};break;case "s":g={top:a.top-f-this.options.offset,left:a.left+a.width/2-d/2};break;case "e":g={top:a.top+a.height/2-f/2,left:a.left-d-this.options.offset};break;case "w":g={top:a.top+a.height/2-f/2,left:a.left+a.width+this.options.offset}}2==e.length&&(g.left="w"==e.charAt(1)?a.left+a.width/2- 15:a.left+a.width/2-d+15);c.css(g).addClass("tipsy-"+e);c.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+e.charAt(0);this.options.className&&c.addClass("function"==typeof this.options.className?this.options.className.call(this.$element[0]):this.options.className);this.options.fade?c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity},1000):c.css({visibility:"visible",opacity:this.options.opacity});var h=this;c.on("hover",function(){h.hide()})}}, hide:function(){this.options.fade?this.tip().stop().fadeOut(1000,function(){b(this).remove()}):this.tip().remove()},fixTitle:function(){var a=this.$element;if(a.attr("title")||"string"!=typeof a.attr("original-title"))a.attr("original-title",a.attr("title")||"").removeAttr("title")},getTitle:function(){var a,b=this.$element,d=this.options;this.fixTitle();d=this.options;"string"==typeof d.title?a=b.attr("title"==d.title?"original-title":d.title):"function"==typeof d.title&&(a=d.title.call(b[0]));return(a= (""+a).replace(/(^\s*|\s*$)/,""))||d.fallback},tip:function(){this.$tip||(this.$tip=b('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'));return this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.options=this.$element=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}};b.fn.tipsy=function(a){function c(c){var d=b.data(c,"tipsy");d||(d=new i(c, b.fn.tipsy.elementOptions(c,a)),b.data(c,"tipsy",d));return d}function d(){var b=c(this);b.hoverState="in";0==a.delayIn?b.show():(b.fixTitle(),setTimeout(function(){"in"==b.hoverState&&b.show()},a.delayIn))}function f(){var b=c(this);b.hoverState="out";0==a.delayOut?b.hide():setTimeout(function(){"out"==b.hoverState&&b.hide()},a.delayOut)}if(!0===a)return this.data("tipsy");if("string"==typeof a){var e=this.data("tipsy");if(e)e[a]();return this}a=b.extend({},b.fn.tipsy.defaults,a);a.live||this.each(function(){c(this)}); if("manual"!=a.trigger){var e=a.live?"live":"bind",g="hover"==a.trigger?"mouseleave":"blur";this[e]("hover"==a.trigger?"mouseenter":"focus",d)[e](g,f)}return this};b.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:0.8,title:"title",trigger:"hover"};b.fn.tipsy.elementOptions=function(a,c){return b.metadata?b.extend({},c,b(a).metadata()):c};b.fn.tipsy.autoNS=function(){return b(this).offset().top>b(document).scrollTop()+b(window).height()/ 2?"s":"n"};b.fn.tipsy.autoWE=function(){return b(this).offset().left>b(document).scrollLeft()+b(window).width()/2?"e":"w"};b.fn.tipsy.autoBounds=function(a,c){return function(){var d=c[0],f=1<c.length?c[1]:!1,e=b(document).scrollTop()+a,g=b(document).scrollLeft()+a,h=b(this);h.offset().top<e&&(d="n");h.offset().left<g&&(f="w");b(window).width()+b(document).scrollLeft()-h.offset().left<a&&(f="e");b(window).height()+b(document).scrollTop()-h.offset().top<a&&(d="s");return d+(f?f:"")}}})(jQuery);

// spin.js
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});


/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
(function(){function e(a,b){function c(a,b){return function(){return a.apply(b,arguments)}}var d;b=b||{};this.trackingClick=!1;this.trackingClickStart=0;this.targetElement=null;this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0;this.touchBoundary=b.touchBoundary||10;this.layer=a;this.tapDelay=b.tapDelay||200;this.tapTimeout=b.tapTimeout||700;if(!e.notNeeded(a)){for(var f="onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "),h=0,k=f.length;h<k;h++)this[f[h]]=c(this[f[h]],this);g&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0));a.addEventListener("click",this.onClick,!0);a.addEventListener("touchstart",this.onTouchStart,!1);a.addEventListener("touchmove",this.onTouchMove,!1);a.addEventListener("touchend",this.onTouchEnd,!1);a.addEventListener("touchcancel",this.onTouchCancel,!1);Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)});"function"===typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var k=0<=navigator.userAgent.indexOf("Windows Phone"),g=0<navigator.userAgent.indexOf("Android")&&!k,f=/iP(ad|hone|od)/.test(navigator.userAgent)&&!k,l=f&&/OS 4_\d(_\d)?/.test(navigator.userAgent),m=f&&/OS [6-7]_\d/.test(navigator.userAgent),n=0<navigator.userAgent.indexOf("BB10");e.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case "button":case "select":case "textarea":if(a.disabled)return!0;break;case "input":if(f&&"file"===a.type||a.disabled)return!0;break;case "label":case "iframe":case "video":return!0}return/\bneedsclick\b/.test(a.className)};e.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case "textarea":return!0;case "select":return!g;case "input":switch(a.type){case "button":case "checkbox":case "file":case "image":case "radio":case "submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}};e.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur();d=b.changedTouches[0];c=document.createEvent("MouseEvents");c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null);c.forwardedTouchEvent=!0;a.dispatchEvent(c)};e.prototype.determineEventType=function(a){return g&&"select"===a.tagName.toLowerCase()?"mousedown":"click"};e.prototype.focus=function(a){var b;f&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()};e.prototype.updateScrollParent=function(a){var b,c;b=a.fastClickScrollParent;if(!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c;a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)};e.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a};e.prototype.onTouchStart=function(a){var b,c,d;if(1<a.targetTouches.length)return!0;b=this.getTargetElementFromEventTarget(a.target);c=a.targetTouches[0];if(f){d=window.getSelection();if(d.rangeCount&&!d.isCollapsed)return!0;if(!l){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier;this.updateScrollParent(b)}}this.trackingClick=!0;this.trackingClickStart=a.timeStamp;this.targetElement=b;this.touchStartX=c.pageX;this.touchStartY=c.pageY;a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault();return!0};e.prototype.touchHasMoved=function(a){a=a.changedTouches[0];var b=this.touchBoundary;return Math.abs(a.pageX-this.touchStartX)>b||Math.abs(a.pageY-this.touchStartY)>b?!0:!1};e.prototype.onTouchMove=function(a){if(!this.trackingClick)return!0;if(this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))this.trackingClick=!1,this.targetElement=null;return!0};e.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(a){var b,c,d=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;this.cancelNextClick=!1;this.lastClickTime=a.timeStamp;b=this.trackingClickStart;this.trackingClick=!1;this.trackingClickStart=0;m&&(c=a.changedTouches[0],d=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||d,d.fastClickScrollParent=this.targetElement.fastClickScrollParent);c=d.tagName.toLowerCase();if("label"===c){if(b=this.findControl(d)){this.focus(d);if(g)return!1;d=b}}else if(this.needsFocus(d)){if(100<a.timeStamp-b||f&&window.top!==window&&"input"===c)return this.targetElement=null,!1;this.focus(d);this.sendClick(d,a);f&&"select"===c||(this.targetElement=null,a.preventDefault());return!1}if(f&&!l&&(b=d.fastClickScrollParent)&&b.fastClickLastScrollTop!==b.scrollTop)return!0;this.needsClick(d)||(a.preventDefault(),this.sendClick(d,a));return!1};e.prototype.onTouchCancel=function(){this.trackingClick=!1;this.targetElement=null};e.prototype.onMouse=function(a){return this.targetElement&&!a.forwardedTouchEvent&&a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0};e.prototype.onClick=function(a){if(this.trackingClick)return this.targetElement=null,this.trackingClick=!1,!0;if("submit"===a.target.type&&0===a.detail)return!0;a=this.onMouse(a);a||(this.targetElement=null);return a};e.prototype.destroy=function(){var a=this.layer;g&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0));a.removeEventListener("click",this.onClick,!0);a.removeEventListener("touchstart",this.onTouchStart,!1);a.removeEventListener("touchmove",this.onTouchMove,!1);a.removeEventListener("touchend",this.onTouchEnd,!1);a.removeEventListener("touchcancel",this.onTouchCancel,!1)};e.notNeeded=function(a){var b,c;if("undefined"===typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1])if(g){if((b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||31<c&&document.documentElement.scrollWidth<=window.outerWidth))return!0}else return!0;return n&&(b=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),10<=b[1]&&3<=b[2]&&(b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction||27<=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]&&(b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1};e.attach=function(a,b){return new e(a,b)};"function"===typeof define&&"object"===typeof define.amd&&define.amd?define(function(){return e}):"undefined"!==typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e})();//typewriter


(function($) {
        $.fn.jTypeWriter = function (b) {
                var c, nIntervalCounter, nSequentialCounter, nSequentialCounterInternal, nInterval, nLoopInterval;
                var d = $.extend({}, $.fn.jTypeWriter.defaults, b);
                var e = d.duration * 1000;
                var f = d.type.toLowerCase();
                var g = d.sequential;
                var h = d.onComplete;
               
                var j = d.text;
                var k = d.loop;
                var l = d.loopDelay;
                var m = (f == "word") ? " " : ".";
                var n = new Array();
                var o = 0;
                var p = d.onLetter;
                
                var q = d.fixedInterval;
                var r = d.randomInterval; // add an extra 0 - this ms at random to each call
                
                for (i = 0; i < this.length; i++) {
                        if (j) {
                                $(this[i]).val(j)
                        }
                        if (f == "letter") n.push({
                                obj: $(this[i]),
                                initialText: $(this[i]).val()
                        });
                        else n.push({
                                obj: $(this[i]),
                                initialText: $(this[i]).val().split(m)
                        });
                        if (!g) o = n[i].initialText.length > o ? n[i].initialText.length : o;
                        else o += n[i].initialText.length;
                        $(this[i]).val("")
                }
                init();
 
                function init() {
                        c = q || e / o;
                        nIntervalCounter = 0;
                        nSequentialCounter = nSequentialCounterInternal = 0;
                        nInterval = (!g) ? setInterval(typerSimultaneous, c) : setInterval(typerSequential, c)
                };
 
                function typerSimultaneous() {
                        nIntervalCounter++;
                        for (i = 0; i < n.length; i++) {
                                var a = n[i];
                                if (a.initialText.length >= nIntervalCounter) {
                                        if (f == "letter") {
                                                a.obj.val(a.initialText.substr(0, nIntervalCounter))
                                        } else {
                                                a.obj.append(a.initialText[nIntervalCounter - 1]);
                                                if (nIntervalCounter < o) {
                                                        a.obj.append(m)
                                                }
                                        }
                                }
                        }
                        if (nIntervalCounter >= o) {
                                circleEnd()
                        }
                };
 
                function typerSequential() {
                
                        var xtra = Math.random() * r;
                        
                        setTimeout(function() {
                           $obj = n[nSequentialCounter];
                           
                           if ($obj) {
                              if (f == "letter") {
                                      $obj.obj.val($obj.initialText.substr(0, ++nSequentialCounterInternal))
                              } else {
                                      $obj.obj.append($obj.initialText[nSequentialCounterInternal++]);
                                      if (nSequentialCounterInternal < $obj.initialText.length) $obj.obj.append(m)
                              }
                              if (nSequentialCounterInternal >= $obj.initialText.length) {
                                      nSequentialCounter++;
                                      nSequentialCounterInternal = 0
                              }
                           }
                           nIntervalCounter++;
                           if (nIntervalCounter >= o) {
                                   circleEnd()
                           }
                           p();
                        },xtra);
                };
 
                function circleEnd() {
                        clearInterval(nInterval);
                        if (f != "letter") {}
                        if (k) {
                                if (l) nLoopInterval = setInterval(loopInterval, l * 1000);
                                else newLoop()
                        }
                        h()
                };
 
                function newLoop() {
                        for (i = 0; i < n.length; i++) {
                                n[i].obj.val("")
                        }
                        init()
                };
 
                function loopInterval() {
                        newLoop();
                        clearInterval(nLoopInterval)
                };
 
                function endEffect() {
                        clearInterval(nInterval);
                        for (i = 0; i < n.length; i++) {
                                n[i].obj.val(n[i].initialText)
                        }
                };
                this.endEffect = endEffect;
                return this
        };
        $.fn.jTypeWriter.defaults = {
                duration: 2,
                type: "letter",
                sequential: true,
                onComplete: function() {},
                onLetter: function(){},
                fixedInterval:false,
                randomInterval:0,
                text: "",
                loop: false,
                loopDelay: 0
        };
        $.fn.jTypeWriter.variables = {
                aObjects: new Array()
        }
})(jQuery);

