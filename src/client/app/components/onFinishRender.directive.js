(function() {
  'use strict';

  angular
    .module('source')
    .directive('onFinishRender', onFinishRender);

  /** @ngInject */
  function onFinishRender($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$eval(attr.onFinishRender);
          });
        }
      }
    }
  }
})();
