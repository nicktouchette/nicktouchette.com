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
      .state('projects', {
        parent: 'home',
        url: 'projects',
        templateUrl: 'app/content/projects.html'
      })
      .state('about', {
        parent: 'home',
        url: 'about',
        templateUrl: 'app/content/about.html'
      })
      .state('contact', {
        parent: 'home',
        url: 'contact',
        templateUrl: 'app/content/contact.html'
      })
      .state('styles', {
        url: '/styles',
        templateUrl: 'app/styles/styles.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
