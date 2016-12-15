(function() {
  'use strict';

  angular
    .module('source')
    .controller('ProjectsController', ProjectsController);

  /** @ngInject */
  function ProjectsController($scope) {
    var vm = this;

    vm.projects = {
      'front-end': [  // front-end, back-end, full-stack
        {
          id: 1,
          title: 'Front End App',
          screenshot: ''
        },{
          id: 4,
          title: 'Front End App 2',
          screenshot: ''
        }
      ],
      'back-end': [  // front-end, back-end, full-stack
        {
          id: 2,
          title: 'Back End App',
          screenshot: ''
        }
      ],
      'full-stack': [  // front-end, back-end, full-stack
        {
          id: 3,
          title: 'Full Stack App',
          screenshot: ''
        }
      ]
    };

    $scope.$on('$destroy', function(){
    });
  }
})();
