!function(){"use strict";angular.module("source",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=t}angular.module("source").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("source").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,a,r){var o,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}function n(t,e){function n(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return e.getContributors(10).then(function(t){return r.contributors=t,r.contributors})}var r=this;r.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("source").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function r(t){return t.data}function o(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(a+"/contributors?per_page="+n).then(r)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:a,getContributors:n};return r}t.$inject=["$log","$http"],angular.module("source").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,n){function a(){o(),t(function(){i.classAnimation="rubberBand"},4e3)}function r(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function o(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1480226301154,i.showToastr=r,a()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("source").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("source").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("source").config(t)}(),function(){"use strict";angular.module("source").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("source").config(t)}(),angular.module("source").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class=main.classAnimation><a class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class=col ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),t.put("app/components/navbar/navbar.html","<nav class=navbar><a href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</a><ul><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class=acme-navbar-text><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>")}]);
//# sourceMappingURL=../maps/scripts/app-828039355b.js.map