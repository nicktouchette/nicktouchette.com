(function() {
  'use strict';

  angular
    .module('source')
    .directive('scrollPosition', scrollPosition);

  /** @ngInject */
  function scrollPosition() {
    return {
      link: function(scope, element) {
        scope.init = function() {
          var windowEl = angular.element(element),
              bodyList = element.find('.body'),
              sectionArray = [],
              sectionCount, title, image, scrollPos;

          for (var i=0; i < bodyList.length; i++) {
            title = bodyList[i].dataset.title;
            image = bodyList[i].dataset.image;
            sectionArray.push({offset: bodyList[i].offsetTop,
                               title: title,
                               image: image
                              });
          }
          sectionCount = sectionArray.length;

          var handler = function() {
            scrollPos = windowEl.scrollTop() + 150;

            var index = 0;
            do {
              index++;
            } while (index < sectionCount && scrollPos > sectionArray[index].offset);

            scope.scroll = {
              position: sectionArray[index-1].title,
              image: sectionArray[index-1].image
            }
          };
          windowEl.on('scroll', scope.$apply.bind(scope, handler));

          handler();
        }
      }
    };
  }
})();
