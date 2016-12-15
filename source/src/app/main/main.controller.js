(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController)
    .animation('.fade', fade)
    .animation('.slide-animation', slideAnimation);


    function fade() {
      return {
        enter: function(element, done) {
          TweenMax.fromTo(element, 0.25, {opacity: 0}, {opacity:1, onComplete: done});
        },
        leave: function(element, done) {
          TweenMax.fromTo(element, 0.25, {opacity: 1}, {opacity: 0, onComplete: done});
        }
      };
    }

    function slideAnimation($media) {
      return {
        addClass: function(element, className, done) {
          if (className === 'wide-screen') {
            TweenMax.fromTo(element, 0.5, {maxWidth: '400px'}, {maxWidth: '877px', onComplete:done});
          }
        },
        removeClass: function(element, className, done) {
          var wide = $media.raw('(min-width: 1000px)');

          if (className === 'wide-screen') {
            var delay = wide ? 1:0;
            TweenMax.fromTo(element, 0.5, {maxWidth: '877px'}, {delay: delay, maxWidth: '400px', onComplete:done});
          }
        }
      };
    }

  /** @ngInject */
  function MainController($state, $timeout, $interval, $scope, Restangular) {
    var vm = this;
    var scriptRunning;

    vm.state = $state;

    var hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) localStorage.setItem('hasVisited', true);

    var firstSessionLoad = !sessionStorage.getItem('hasVisited');
    if (firstSessionLoad) sessionStorage.setItem('hasVisited', true);

    var introFirstVisit = [
      {message: 'Welcome!', delay: 5},
      {message: 'Unfortunately, Nick is not here at the moment, so I\'m here on his behalf.  Allow me to serve you.', delay: 6},
      {message: 'Ask me a question below to learn more.', delay: 4}
    ];

    var introHasVisited = [
      {message: 'Welcome back!', delay: 5},
      {message: 'Feel free to ask me a question.', delay: 4}
    ];

    function playScript(script, index, count) {
      if (angular.isArray(script)) {
        index = index || 0;
        scriptRunning = $timeout(function() {
          vm.chatText = script[index].message;
          if (index !== script.length - 1 || count === 1) {
            playScript(script, index +1);
          } else {
            scriptRunning = $timeout(destroyScript, script[index].delay * 1000);
          }
        }, script[index-1] ? script[index-1].delay * 1000 : 0);
      } else {
        vm.chatText = script;
      }
    }

    function destroyScript() {
      $timeout.cancel(scriptRunning);
      scriptRunning = null;
    }

    function chooseRandom() {
      if (!scriptRunning && !document.hidden) {
        Restangular.oneUrl('jokes', 'http://mentalfloss.com/api/1.0/views/amazing_facts.json?limit=1&display_id=xhr&cb=' + Math.random()).get()
        .then(function(data) {
          if (data[0].fact_body.length < 200) {
            playScript(decodeURIComponent(data[0].fact_body.replace('%', '%25')));
          }
        });
      }
    }

    vm.playScene = function() {
      if (!hasVisited) {
        playScript(intro);
      } else {
        if (firstSessionLoad) {
          playScript(introHasVisited);
        } else {
          chooseRandom();
        }
      }

      $interval(chooseRandom, (Math.floor(Math.random() * (40 - 20 + 1)) + 20) * 1000);
    };


    $scope.$on('$destroy', function(){
      $timeout.cancel(scriptRunning);
      $interval.cancel(chooseRandom);
    });
  }
})();
