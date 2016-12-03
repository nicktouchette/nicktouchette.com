(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.state = $state;

    vm.test = function() {
      console.log("test");
    };
  }
})();
