TweenLite.defaultEase = Power0.easeNone;

/////////////Element Query Code
//BY ID
var bulb = document.getElementById("bulb");
var lightGlare = document.getElementById("glare");
var robot = document.getElementById("robot");
var head = document.getElementById("head");
var armLeft = document.getElementById("armleft");
var armLeftBicep = document.getElementById("armleftbicep");
var armLeftFront = document.getElementById("armleftfront");
var armRight = document.getElementById("armright");
var armRightBicep = document.getElementById("armrightbicep");
var armRightFront = document.getElementById("armrightfront");
var torsoTop = document.getElementById("torsotop");
var torsoDown = document.getElementById("torsodown");
var leg = document.getElementById("leg");
var wheel = document.getElementById("wheel");
var keyboard = document.getElementById("keyboard");
var monitor = document.getElementById("monitor");
var desk = document.getElementById("desk");
var cans = document.getElementById("cans");
var can = document.getElementById("can");

//DOM content
var content = document.getElementById("content");
var nav = document.getElementById("nav");

//BY CLASS
var light = document.querySelectorAll(".light");

/////////////Animation Data
var thingsToSay = [
  "<h1>Nick Touchette</h1><h2>Full Stack<br/>Web<br/>Developer</h2>",
  "<ul><li><a href=#>About</a></li><li><a href=#>Projects</a></li><li><a href=#>Contact</a></li></ul>"
];

var typing = new TimelineMax({repeat: -1, yoyo: true, paused: true});
typing.to(armLeftFront, 0.05, {rotation: 15})
      .to(armRightFront, 0.05, {rotation: -15});

var drink = new TimelineMax({repeatDelay: 1, repeat: 1, yoyo:true, paused:true});
drink.to(armRight, 0.2, {rotation: 32}, "start")
     .to(armRightFront, 0.2, {rotation: -45}, "start")
     .to(armRightFront, 0.2, {rotation: "+=65"}, "lift")
     .to(can, 0.2, {y: "-=60", x: "+=8", rotation: "+=35"}, "lift")
     .to(armRight, 0.2, {rotation: "+=42,", scaleY: "-=0.2"}, "liftmore")
     .to(can, 0.2, {x: "+=10", y: "-=60", rotation: "+=20"}, "liftmore");

function raiseHead() {
  head.setAttribute('src','./img/robot/robot-head-up.png');
  eyelids.setAttribute('src','./img/robot/eyelidsup.png');
}

function lowerHead() {
  head.setAttribute('src','./img/robot/robot-head-down.png');
  eyelids.setAttribute('src','./img/robot/eyelidsdown.png');
}

function say(what, where, speed, delay) {
  setTimeout(function () {
    var builtHtml = "";
    var arrayPos = 0;
    var letterID = 0;
    var charArray = what.split('');
    var insideElement = false;
    delay = delay || 0;

    // BEGIN
    typing.play();
    lowerHead();

    // Run line parser to print html to DOM
    repeat();

    function repeat() {
      if (letterID < what.length) {
        var letter = charArray.shift();
        builtHtml += letter;
        where.innerHTML = builtHtml;
        letterID++;

        if (letter === '<') {
          insideElement = true;
        } else if (letter === '>') {
          insideElement = false;
        }

        if (!insideElement) {
          setTimeout(repeat, speed);
        } else {
          repeat();
        }
      } else {
        // COMPLETE
        typing.pause();
        raiseHead();
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

  TweenMax.to([torsoTop, torsoDown, head, armLeft, armRight, eyelids], 2, { marginTop: 5, yoyo: true, repeat: -1, ease: Power1.easeInOut });
  TweenMax.to(lightGlare, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
  TweenMax.to(monitor, 0.2, { opacity: 0.95, yoyo: true, repeat: -1, ease: Bounce.easeInOut });
  TweenMax.from(eyelids, 0.25, { delay: 1, immediateRender: false, opacity: 1, repeat: -1, repeatDelay: 5});

  say(thingsToSay[0], content, 30);
  say(thingsToSay[1], nav, 100, 3000);
}

intro();

var coffeeBreak = new TimelineMax({repeat: -1});
coffeeBreak.add(drink.play(), 10);
