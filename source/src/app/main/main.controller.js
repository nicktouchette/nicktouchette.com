(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

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
        Restangular.oneUrl('jokes', 'http://api.icndb.com/jokes/random?exclude=[explicit]&escape=javascript').get()
        .then(function(data) {
          if (data.value.joke.length < 200) {
            playScript(decodeURI(data.value.joke));
          }
        });
      }
    }

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

    $scope.$on('$destroy', function(){
      $timeout.cancel(scriptRunning);
      $interval.cancel(chooseRandom);
    });
  }
})();
