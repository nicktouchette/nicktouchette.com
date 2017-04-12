(function() {
  'use strict';

  angular
    .module('source')
    .directive('scrollPosition', scrollPosition);

  /** @ngInject */
  function scrollPosition($window) {
    return {
      scope: {
        scroll: '=scrollPosition'
      },
      link: function(scope, element, attrs) {
        var windowEl = angular.element(element);
        var bodyList = element.find('.body');
        var sectionArray = [], sectionCount, title, scrollPos;

        for (var i=0; i < bodyList.length; i++) {
          title = bodyList[i].title;
          sectionArray.push([bodyList[i].offsetTop, title]);
        }
        sectionCount = sectionArray.length;

        var handler = function() {
          scrollPos = windowEl.scrollTop();

          var index = 0;
          do {
            index++;
          } while (index < sectionCount && scrollPos > sectionArray[index][0]);

          scope.scroll = sectionArray[index-1][1];
        };
        windowEl.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  }
})();
