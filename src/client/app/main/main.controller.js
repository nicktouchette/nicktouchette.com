(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

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

  }
})();
