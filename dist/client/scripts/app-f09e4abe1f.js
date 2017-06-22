"use strict";angular.module("debounce",[]).service("debounce",["$timeout",function(e){return function(t,i,a,o){function r(){u=this,s=arguments;var r=function(){n=null,a||(l=t.apply(u,s))},d=a&&!n;return n&&e.cancel(n),n=e(r,i,o),d&&(l=t.apply(u,s)),l}var n,s,u,l;return r.cancel=function(){e.cancel(n),n=null},r}}]).directive("debounce",["debounce","$parse",function(e,t){return{require:"ngModel",priority:999,link:function(i,a,o,r){var n,s,u=t(o.debounce)(i),l=!!t(o.immediate)(i),d=r.$render.bind(r),m=e(function(e){s=!0,r.$$lastCommittedViewValue=n,r.$setViewValue(e),s=!1},parseInt(u,10),l);r.$render=function(){d(),m.cancel(),n=this.$viewValue},r.$parsers.unshift(function(e){return s?(n=e,e):(m(r.$viewValue),n)})}}}]),angular.module("angular.media",["debounce"]).run(["$rootScope","$media",function(e,t){e.$media=t}]),angular.module("angular.media").service("$media",["mediaQueries","$rootScope","$window","debounce",function(e,t,i,a){var o={},r=function(){var a;_(e).forEach(function(t,r){var n=o[r],s=i.matchMedia(e[r]).matches;o[r]=s,a=a||n!==s}),a&&t.$broadcast("mediaQueriesChanged",o)},n=a(function(){r(),t.$apply()},200);return angular.element(i).bind("resize",function(){n()}),r(),{query:function(t){return this.raw(e[t])},raw:function(e){return i.matchMedia(e).matches},predefinedQueriesStatus:o}}]),angular.module("angular.media").provider("mediaQueries",function(){var e={phone:"(max-width:480px)",tablet:"(min-width:481px) and (max-width:979px)",laptop:"(min-width:980px) and (max-width:1279px)",desktop:"(min-width:1280px)"};this.$get=function(){return e},this.setPreDefinedQueries=function(t){this.shortcuts=angular.extend(e,t)}}),function(){angular.module("source",["ngAnimate","ngTouch","restangular","ui.router","angular.media"])}(),function(){function e(){}angular.module("source").controller("MainController",e)}(),function(){function e(e){return{scope:{scroll:"=scrollPosition"},link:function(e,t,i){for(var a,o,r,n=angular.element(t),s=t.find(".body"),u=[],l=0;l<s.length;l++)o=s[l].title,u.push([s[l].offsetTop,o]);a=u.length;var d=function(){r=n.scrollTop()+150;var t=0;do t++;while(a>t&&r>u[t][0]);e.scroll=u[t-1][1]};n.on("scroll",e.$apply.bind(e,d)),d()}}}e.$inject=["$window"],angular.module("source").directive("scrollPosition",e)}(),function(){function e(e,t){return{restrict:"E",scope:{chatText:"=text",onLoad:"&"},templateUrl:"app/components/robot.html",link:function(i,a,o){function r(){m.head.setAttribute("src","./assets/images/robot/robot-head-up.png"),m.eyelids.setAttribute("src","./assets/images/robot/eyelidsup.png")}function n(){m.head.setAttribute("src","./assets/images/robot/robot-head-down.png"),m.eyelids.setAttribute("src","./assets/images/robot/eyelidsdown.png")}function s(t,a,o){e(function(){function s(t){return e(function(){c.pause(),r()},l/(5*a)*60*1e3)}var u=t||i.chatText,l=u.split("").length;a=a||0,o=o||0,t?(c.play(),n(),s(l)):(i.showChat=!1,c.play(),n(),s(l).then(function(){i.chatTextTyped=u,i.showChat=!0}))},o)}function u(){TweenMax.to(m.light,3,{rotation:"-3",yoyo:!0,repeat:-1,ease:Power1.easeInOut}),TweenMax.to([m.torsoTop,m.torsoDown,m.head,m.armLeft,m.armRight,m.eyelids,m.antennaright,m.antennaleft],2,{marginTop:5,yoyo:!0,repeat:-1,ease:Power1.easeInOut}),TweenMax.to(m.lightGlare,.2,{opacity:.95,yoyo:!0,repeat:-1,ease:Bounce.easeInOut}),TweenMax.to(m.monitor,.2,{opacity:.95,yoyo:!0,repeat:-1,ease:Bounce.easeInOut}),TweenMax.from(m.eyelids,.25,{delay:1,immediateRender:!1,opacity:1,repeat:-1,repeatDelay:5})}TweenLite.defaultEase=Power0.easeNone;var l=a.find("img"),d=_.keyBy(l,"id"),m={bulb:d.bulb,lightGlare:d.glare,head:d.head,armLeftBicep:d.armleftbicep,armLeftFront:d.armleftfront,armRightBicep:d.armrightbicep,armRightFront:d.armrightfront,torsoTop:d.torsotop,torsoDown:d.torsodown,eyelids:d.eyelids,monitor:d.monitor,can:d.can,candrink:d.candrink,antennaleft:d.antennaleft,antennaright:d.antennaright,armRight:document.getElementById("armright"),armLeft:document.getElementById("armleft"),light:document.getElementById("light")},c=new TimelineMax({repeat:-1,yoyo:!0,paused:!0});c.to(m.armLeftFront,.05,{rotation:15}).to(m.armRightFront,.05,{rotation:-15});var p=new TimelineMax({repeatDelay:1,repeat:1,yoyo:!0,paused:!0});p.to(m.armRight,.2,{rotation:32},"start").to(m.armRightFront,.2,{rotation:-45},"start").to(m.armRightFront,.2,{rotation:"+=65"},"lift").to([m.can,m.candrink],.2,{y:"-=60",x:"+=8",rotation:"+=35"},"lift").to(m.armRight,.2,{rotation:"+=42,",scaleY:"-=0.2"},"liftmore").to(m.candrink,.2,{opacity:1},"liftmore").to([m.can,m.candrink],.2,{x:"+=10",y:"-=60",rotation:"+=20"},"liftmore");var v=new TimelineMax({repeat:3,yoyo:!0,paused:!0});v.to(m.antennaleft,.05,{rotation:15}).to(m.antennaright,.05,{rotation:-15});var h=new TimelineMax({repeat:-1});h.add(p.play(),15).add(v.play(),6),$(l[l.length-1]).load(function(){i.imagesLoaded=!0,u(),i.onLoad()}),t.say=function(e,t,i){s(e,t,i)},i.$watch("chatText",function(e){e&&s(null,900)},!0)}}}e.$inject=["$timeout","$rootScope"],angular.module("source").directive("robot",e)}(),function(){function e(e){}e.$inject=["$rootScope"],angular.module("source").run(e)}(),function(){function e(e,t,i){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),i.otherwise("/")}e.$inject=["$stateProvider","$locationProvider","$urlRouterProvider"],angular.module("source").config(e)}(),function(){angular.module("source").constant("moment",moment).constant("_",window._)}(),function(){function e(e,t){e.debugEnabled(!0)}e.$inject=["$logProvider","RestangularProvider"],angular.module("source").config(e)}(),angular.module("source").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=container><div class=inner-body><div class=header><div class=name>Nick Touchette</div><div class=skill>Full Stack Web Developer</div></div><div class=image><img src=../assets/images/building.jpg></div><div class=content><div class=wrapper scroll-position=vm.scroll><div class=body title=welcome><div class=title ng-show="vm.scroll === &quot;welcome&quot;">WELCOME.</div><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p></div><div class=body title=projects><div class=title ng-show="vm.scroll === &quot;projects&quot;">PROJECTS.</div><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p></div><div class=body title=test1><div class=title ng-show="vm.scroll === &quot;test1&quot;">TEST1.</div><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p></div><div class=body title=test12><div class=title ng-show="vm.scroll === &quot;test12&quot;">TEST2.</div><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p></div><div class=body title=test123><div class=title ng-show="vm.scroll === &quot;test123&quot;">TEST3.</div><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p><p>Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.</p></div></div></div><div class=aside><span>{{vm.scroll}}</span></div></div></div>'),e.put("app/components/robot.html","")}]);
//# sourceMappingURL=../maps/scripts/app-f09e4abe1f.js.map