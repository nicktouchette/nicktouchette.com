(function() {
  'use strict';

  angular
    .module('source')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    RestangularProvider.setBaseUrl('https://us-central1-nicktouchette-api.cloudfunctions.net');
    RestangularProvider.setDefaultHeaders({'Content-Type' : 'application/json'});
  }

})();
