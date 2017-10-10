(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Restangular) {
    var vm = this;

    var defaults = {
      name: '',
      company: '',
      email: '',
      message: ''
    }

    vm.contact = angular.copy(defaults);

    // // init controller
    // var controller = new ScrollMagic.Controller();

    // // create a scene
    // var scene = new ScrollMagic.Scene({triggerElement: "#solution"})
    //     // .setPin("#solution") // pins the element for the the scene's duration
    //     .addIndicators()
    //     .addTo(controller); // assign the scene to the controller

    vm.submit = function(form) {
      Restangular.all('submit').post(vm.contact)
      .then(function(){
        vm.submitSuccessful = true;
        vm.contact = angular.copy(defaults);
        form.$setPristine();
        form.$setUntouched();
      });
    }

    vm.scrollTo = function(section) {
      $(section)
        .velocity('scroll', { container: $('#main'), duration: 1000, easing: 'easeInOutCirc' });
    }
  }
})();
