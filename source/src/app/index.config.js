(function() {
  'use strict';

  angular
    .module('source')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // RestangularProvider.setDefaultHttpFields({withCredentials: true});
  }

})();
