/* global moment:false */
(function() {
  'use strict';

  angular
    .module('source')
    .constant('moment', moment)
    .constant('_', window._);

})();
