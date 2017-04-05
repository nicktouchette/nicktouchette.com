(function() {
  'use strict';

  angular
    .module('source')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });
      // .state('projects', {
      //   parent: 'home',
      //   url: 'projects',
      //   controller: 'ProjectsController',
      //   controllerAs: 'vm',
      //   templateUrl: 'app/projects/projects.html'
      // })
      // .state('projects.detail', {
      //   url: '/:id',
      //   controller: 'ProjectsDetailController',
      //   controllerAs: 'vm',
      //   templateUrl: 'app/projects/projectsDetail.html'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
