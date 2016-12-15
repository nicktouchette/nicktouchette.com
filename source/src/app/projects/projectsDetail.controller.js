(function() {
  'use strict';

  angular
    .module('source')
    .controller('ProjectsDetailController', ProjectsDetailController);

  /** @ngInject */
  function ProjectsDetailController($scope) {
    var vm = this;

    vm.project = {
      name: 'Test Name',
      screenshot: '',
      description: 'Lorem ipsum dolor sit amet, vis dignissim signiferumque ut, vix nobis rationibus te. Eu eam elitr torquatos instructior, ne duo nemore iriure phaedrum. Mea ea malis ignota petentium, fabellas consetetur id mea. In sed posse noluisse principes, agam laoreet perpetua duo an.',
      technologies: ['jQuery','Flexbox','HTML','CSS','Javascript'],
      images: ['',''],
    };

    $scope.$on('$destroy', function(){
    });
  }
})();
