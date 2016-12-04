(function() {
  'use strict';

  angular
    .module('source')
    .directive('robot', robot);

  /** @ngInject */
  function robot($timeout) {
    return {
      restrict: 'E',
      scope: {
        chatText: '=text'
      },
      templateUrl: 'app/components/robot.html',
      link: function(scope, el, attr) {
        TweenLite.defaultEase = Power0.easeNone;
        /////////////Elements Query Code
        //BY Tag Name Img
        var imgs = document.getElementsByTagName("img");

        var robot = {
          bulb: imgs.bulb,
          lightGlare: imgs.glare,
          head: imgs.head,
          armLeftBicep: imgs.armleftbicep,
          armLeftFront: imgs.armleftfront,
          armRightBicep: imgs.armrightbicep,
          armRightFront: imgs.armrightfront,
          torsoTop: imgs.torsotop,
          torsoDown: imgs.torsodown,
          eyelids: imgs.eyelids,

          monitor: imgs.monitor,
          can: imgs.can,
          candrink: imgs.candrink,
          antennaleft: imgs.antennaleft,
          antennaright: imgs.antennaright,

         //By Div ID
          armRight: document.getElementById("armright"),
          armLeft: document.getElementById("armleft"),
          light: document.getElementById("light")
        };

        // Animation Data
        var typing = new TimelineMax({repeat: -1, yoyo: true, paused: true});
        typing.to(robot.armLeftFront, 0.05, {rotation: 15})
              .to(robot.armRightFront, 0.05, {rotation: -15});

        var drink = new TimelineMax({repeatDelay: 1, repeat: 1, yoyo:true, paused:true});
        drink.to(robot.armRight, 0.2, {rotation: 32}, "start")
             .to(robot.armRightFront, 0.2, {rotation: -45}, "start")
             .to(robot.armRightFront, 0.2, {rotation: "+=65"}, "lift")
             .to([robot.can, robot.candrink], 0.2, {y: "-=60", x: "+=8", rotation: "+=35"}, "lift")
             .to(robot.armRight, 0.2, {rotation: "+=42,", scaleY: "-=0.2"}, "liftmore")
             .to(robot.candrink, 0.2, { opacity: 1}, "liftmore")
             .to([robot.can, robot.candrink], 0.2, {x: "+=10", y: "-=60", rotation: "+=20"}, "liftmore");

        var antennaflutter = new TimelineMax({repeat: 3, yoyo: true, paused: true});
        antennaflutter.to(robot.antennaleft, 0.05, {rotation: 15})
                      .to(robot.antennaright, 0.05, {rotation: -15});

        function raiseHead() {
          robot.head.setAttribute('src','./assets/images/robot/robot-head-up.png');
          robot.eyelids.setAttribute('src','./assets/images/robot/eyelidsup.png');
        }

        function lowerHead() {
          robot.head.setAttribute('src','./assets/images/robot/robot-head-down.png');
          robot.eyelids.setAttribute('src','./assets/images/robot/eyelidsdown.png');
        }

        function say(wpm, delay) {
          $timeout(function () {
            scope.showChat = false;
            var what = scope.chatText;
            var numCharacters = what.split('').length;
            wpm = wpm || 0;
            delay = delay || 0;

            // BEGIN
            typing.play();
            lowerHead();
            simulateTyping(numCharacters);

            function simulateTyping(count) {
              $timeout(function () {
                typing.pause();
                raiseHead();
                scope.chatTextTyped = scope.chatText;
                scope.showChat = true;
              }, (numCharacters / (wpm * 5)) * 60 * 1000 );
            }
          }, delay);
        }

        ///////////Timeline Code
        function intro() {
          TweenMax.to(robot.light, 3, { rotation: "-3", yoyo: true, repeat: -1, ease: Power1.easeInOut });

          TweenMax.to([robot.torsoTop, robot.torsoDown, robot.head, robot.armLeft, robot.armRight, robot.eyelids, robot.antennaright, robot.antennaleft], 2, { marginTop: 5, yoyo: true, repeat: -1, ease: Power1.easeInOut });
          TweenMax.to(robot.lightGlare, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
          TweenMax.to(robot.monitor, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
          TweenMax.from(robot.eyelids, 0.25, { delay: 1, immediateRender: false, opacity: 1, repeat: -1, repeatDelay: 5});
        }

        intro();

        var coffeeBreak = new TimelineMax({repeat: -1});
        coffeeBreak.add(drink.play(), 15)
                   .add(antennaflutter.play(), 6);

        scope.$watch('chatText', function(newValue) {
          if (newValue)
            say(900);
        }, true);
      }
    };
  }
})();
