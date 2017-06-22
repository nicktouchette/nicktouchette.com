(function() {
  'use strict';

  angular
    .module('source')
    .directive('modal', modal);

  /** @ngInject */
  function modal($compile) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        subTitle: '@',
        sections: '='
      },
      replace: true,
      templateUrl: 'app/components/modal/modal.html'
    };
  }
})();
