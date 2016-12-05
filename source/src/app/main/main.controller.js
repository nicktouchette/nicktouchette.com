(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout, $interval, $scope, Restangular) {
    var vm = this;

    vm.state = $state;

    var scriptRunning;

    var intro = [
      {message: 'Welcome!', delay: 5},
      {message: 'Unfortunately, Nick is not here at the moment, so I\'m here on his behalf.  Here to serve you.', delay: 6},
      {message: 'Ask me a question below to learn more.', delay: 4}
    ];

    // var randomBits = [
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2},
    //   {message: 'meep', delay: 2}
    // ];

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
      if (!scriptRunning) {
        Restangular.oneUrl('jokes', 'http://api.icndb.com/jokes/random').get()
        .then(function(data) {
          if (data.length < 200) {
            playScript(data.value.joke);
          }
        });
      }
    }

    playScript(intro);

    $interval(chooseRandom, Math.floor(Math.random() * (40 - 20 + 1)) + 20 * 1000);

    $scope.$on('$destroy', function(){
      $timeout.cancel(scriptRunning);
    });
  }
})();
