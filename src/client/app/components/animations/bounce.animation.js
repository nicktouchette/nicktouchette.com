(function() {
  'use strict';

  angular
    .module('source')
    .directive('bounce', bounce);

  /** @ngInject */
  function bounce() {
    return {
      restrict: 'C',
      link: function (scope, element, attr) {
        element
          .velocity({ top: '-=5px' }, { loop: true, duration: 200, delay: 3000})
          .velocity('reverse', {loop: true, delay: 0})
      }
    }
  }
})();
