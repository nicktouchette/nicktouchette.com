(function() {
  'use strict';

  angular
    .module('source')
    .directive('modalSection', modalSection);

  /** @ngInject */
  function modalSection() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        active: '=',
        content: '='
      },
      templateUrl: 'app/components/modal/modalSection.html'
    };
  }
})();
