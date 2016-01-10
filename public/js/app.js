/////////////Element Query Code
var part = document.getElementsByClassName("part");
var upperBody = document.querySelectorAll(".upperbody");
var lightGlare = document.querySelectorAll("#glare");
var light = document.querySelectorAll(".light");
var monitor = document.querySelectorAll("#monitor");
var body = document.getElementsByTagName("body");

/////////////Animation Data
var thingsToSay = [
  "<h1>Nick Touchette</h1><h2>Full Stack<br/>Web<br/>Developer</h2>",
  "<ul><li><a href=#>About</a></li><li><a href=#>Projects</a></li><li><a href=#>Contact</a></li></ul>"
];

var typing = [
  { e: part.armleftfront, p: { rotateZ: ["0deg", "15deg"] }, o: { loop: true, duration: 80 }},
  { e: part.armrightfront, p: { rotateZ: ["15deg", "0deg"] }, o: { loop: true, duration: 80, sequenceQueue: false }}
];

var drink = [
  { e: part.armright, p: { rotateZ: "+=32"}, o: { duration: 200} },
  { e: part.armrightfront, p: { rotateZ: "-=40"}, o: { duration: 200, sequenceQueue: false} },
  { e: part.armrightfront, p: { rotateZ: "+=65" }, o: { duration: 200} },
  { e: can, p: { translateY: "-=60", translateX: "+=8", rotateZ: "+=35"}, o: {duration: 200, sequenceQueue: false} },
  { e: part.armright, p: { rotateZ: "+=42", scaleY: "-=.2"}, o: { duration: 200} },
  { e: can, p: { translateY: "-=60px", translateX: "+=10", rotateZ: "+=20"}, o: {duration: 200, sequenceQueue: false} },
  { e: can, p: "reverse" , o: {delay: 1000, duration: 200} },
  { e: part.armright, p: { rotateZ: "-=42", scaleY: "initial" }, o: { duration: 200, sequenceQueue: false} },
  { e: can, p: { translateY: "intial", translateX: "initial", rotateZ: "initial"}, o: {duration: 200} },
  { e: part.armrightfront, p: { rotateZ: "-=65" }, o: { duration: 200, sequenceQueue: false} },
  { e: part.armrightfront, p: { rotateZ: "initial"}, o: { duration: 200} },
  { e: part.armright, p: { rotateZ: "initial"}, o: { duration: 200, sequenceQueue: false} },
];

function raiseHead() {
  part.head.setAttribute('src','./img/robot/robot-head-up.png');
}

function lowerHead() {
  part.head.setAttribute('src','./img/robot/robot-head-down.png');
}

function say(what, where, speed, delay) {
  setTimeout(function () {
    var builtHtml = "";
    var arrayPos = 0;
    var letterID = 0;
    var charArray = what.split('');
    var insideElement = false;
    where = document.getElementById(where);
    delay = delay || 0;

    // BEGIN
    Velocity.RunSequence(typing);
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
        Velocity(part.armrightfront, "stop");
        Velocity(part.armleftfront, "stop");
        raiseHead();
      }
    }
  }, delay);
}

function delay(what, duration) {
  setTimeout(what, duration);
}

/////////////Timeline Code
Velocity(light, { "rotateZ": ["3deg", "-3deg"]}, { loop: true, duration: 2000 });
Velocity(upperBody, { "margin-top": "5"}, { loop: true, duration: 2000 });
Velocity(lightGlare, { "opacity": ".95"}, { easing: "easeInOutBounce", loop: true, duration: 200 });
Velocity(monitor, { "opacity": ".95"}, { easing: "easeInOutBounce", loop: true, duration: 200 });

say(thingsToSay[0], "content", 30);
say(thingsToSay[1], "nav", 100, 3000);
setInterval(temporary, 10000);

function temporary() {
  Velocity.RunSequence(drink);
}
