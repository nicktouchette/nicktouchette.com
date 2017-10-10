(function() {
  'use strict';

  angular
    .module('source')
    .directive('scrollPosition', scrollPosition);

  /** @ngInject */
  function scrollPosition() {
    return {
      link: function(scope, element) {
        var windowEl = angular.element(element),
            bodyList = element.find('.body'),
            sectionCount, title, image, scrollPos;

        var handler = function() {
          var index = 0;
          do {
            index++;
          } while (bodyList[index].getBoundingClientRect().top < 0);
          console.log(index);
        };

        windowEl.on('scroll', scope.$apply.bind(scope, handler));

        scope.$on('$destroy', function() {
          windowEl.off('scroll');
        })
      }
    };
  }
})();
