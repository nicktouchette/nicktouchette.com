(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout) {
    var vm = this;

    vm.state = $state;

    vm.chatText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, nisi eu dignissim facilisis, sem mi posuere.';

    // Testing function for directive say
    $timeout(function() {
      vm.chatText = 'Sed sodales, nisi eu dignissim facilisis, sem mi posuere.';
    },10000);
  }
})();
