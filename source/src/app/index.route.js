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
      })
      .state('content', {
        abstract: true,
        templateUrl: 'app/content/container.html',
        controller: 'ContentController',
        controllerAs: 'vm'
      })
      .state('content.projects', {
        url: '/projects',
        templateUrl: 'app/content/projects.html'
      })
      .state('content.about', {
        url: '/about',
        templateUrl: 'app/content/about.html'
      })
      .state('content.contact', {
        url: '/contact',
        templateUrl: 'app/content/contact.html'
      })
      .state('styles', {
        url: '/styles',
        templateUrl: 'app/styles/styles.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
