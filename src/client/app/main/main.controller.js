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

    vm.sections = [{
      title: 'Test',
      image: '../assets/images/building.jpg',
      body: 'Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.'
    },{
      title: 'Test2',
      body: 'Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.'
    },{
      title: 'Test3',
      body: 'Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.'
    },{
      title: 'Test4',
      body: 'Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.'
    }]

    vm.section = [{
      title: 'Test',
      image: '../assets/images/building.jpg',
      body: 'Lorem ipsum dolor sit amet, an mazim noluisse suscipiantur his. Nisl legendos ex eam, errem numquam reprehendunt sed id, no dicam iracundia sed. Sit verear antiopam ad, his movet aliquid repudiare ei. Scaevola consequat prodesset te mel. Meliore feugait nam ut, te pri liber iuvaret corpora.'
    }]

    vm.submit = function() {
      Restangular.all('submit').post(vm.contact)
      .then(function(){
        vm.submitSuccessful = true;
        vm.contact = angular.copy(defaults);
      });
    }

    vm.scrollTo = function(section) {
      console.log('scrolling')
      $(section)
        .velocity("scroll", { duration: 1000, easing: "easeInOutCirc" });
    }
  }
})();
