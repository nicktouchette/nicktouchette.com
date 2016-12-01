(function() {
  'use strict';

  angular
    .module('source')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.state = $state;
  TweenLite.defaultEase = Power0.easeNone;

  /////////////Elements Query Code
  //BY Tag Name Img
  var imgs = document.getElementsByTagName("img");
  var bulb = imgs.bulb;
  var lightGlare = imgs.glare;
  var head = imgs.head;
  var armLeftBicep = imgs.armleftbicep;
  var armLeftFront = imgs.armleftfront;
  var armRightBicep = imgs.armrightbicep;
  var armRightFront = imgs.armrightfront;
  var torsoTop = imgs.torsotop;
  var torsoDown = imgs.torsodown;

  var monitor = imgs.monitor;

  var can = imgs.can;
  var candrink = imgs.candrink;
  var antennaleft = imgs.antennaleft;
  var antennaright = imgs.antennaright;

  //By Div ID
  var armRight = document.getElementById("armright");
  var armLeft = document.getElementById("armleft");
  var light = document.getElementById("light");

  //DOM content
  var divs = document.getElementsByTagName('div');

  // Animation Data
  var typing = new TimelineMax({repeat: -1, yoyo: true, paused: true});
  typing.to(armLeftFront, 0.05, {rotation: 15})
        .to(armRightFront, 0.05, {rotation: -15});

  var drink = new TimelineMax({repeatDelay: 1, repeat: 1, yoyo:true, paused:true});
  drink.to(armRight, 0.2, {rotation: 32}, "start")
       .to(armRightFront, 0.2, {rotation: -45}, "start")
       .to(armRightFront, 0.2, {rotation: "+=65"}, "lift")
       .to([can, candrink], 0.2, {y: "-=60", x: "+=8", rotation: "+=35"}, "lift")
       .to(armRight, 0.2, {rotation: "+=42,", scaleY: "-=0.2"}, "liftmore")
       .to(candrink, 0.2, { opacity: 1}, "liftmore")
       .to([can, candrink], 0.2, {x: "+=10", y: "-=60", rotation: "+=20"}, "liftmore");

  var antennaflutter = new TimelineMax({repeat: 3, yoyo: true, paused: true});
  antennaflutter.to(antennaleft, 0.05, {rotation: 15})
                .to(antennaright, 0.05, {rotation: -15});

  function raiseHead() {
    head.setAttribute('src','./assets/images/robot/robot-head-up.png');
    eyelids.setAttribute('src','./assets/images/robot/eyelidsup.png');
  }

  function lowerHead() {
    head.setAttribute('src','./assets/images/robot/robot-head-down.png');
    eyelids.setAttribute('src','./assets/images/robot/eyelidsdown.png');
  }

  function say(what, speed, delay) {
    setTimeout(function () {
      what = what.innerHTML;
      var numCharacters = what.split('').length;
      speed = speed || 0;
      delay = delay || 0;

      // BEGIN
      typing.play();
      lowerHead();
      repeat(numCharacters);

      function repeat(count) {
        if (count !== 0) {
          setTimeout(function() {
            repeat(count - 1);
          }, speed);
        } else {
          // COMPLETE
          typing.pause();
          raiseHead();
          divs['robot-chat'].className = 'show';
        }
      }
    }, delay);
  }

  function delay(what, duration) {
    setTimeout(what, duration);
  }

  ///////////Timeline Code
  function intro() {
    TweenMax.to(light, 3, { rotation: "-3", yoyo: true, repeat: -1, ease: Power1.easeInOut });

    TweenMax.to([torsoTop, torsoDown, head, armLeft, armRight, eyelids, antennaright, antennaleft], 2, { marginTop: 5, yoyo: true, repeat: -1, ease: Power1.easeInOut });
    TweenMax.to(lightGlare, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
    TweenMax.to(monitor, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
    TweenMax.from(eyelids, 0.25, { delay: 1, immediateRender: false, opacity: 1, repeat: -1, repeatDelay: 5});

    say(document.querySelector('#robot-chat'), 5);
  }

  intro();

  var coffeeBreak = new TimelineMax({repeat: -1});
  coffeeBreak.add(drink.play(), 15)
             .add(antennaflutter.play(), 6);


  }
})();
