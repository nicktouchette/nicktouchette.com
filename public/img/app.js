/////////////Element Query Code
var part = document.getElementsByClassName("part");
var upperBody = document.querySelectorAll(".upperbody");
var lightGlare = document.querySelectorAll("#glare");
var light = document.querySelectorAll(".light");

/////////////Animation Data
var thingsToSay = [
  "<h1>Nick Touchette</h1><h2>Full Stack<br/>Web<br/>Developer</h2>",
  "<ul><li><a href=#>About</a></li><li><a href=#>Projects</a></li><li><a href=#>Contact</a></li></ul>"
];

var typing = [
  { e: part.armleftfront, p: { rotateZ: ["0deg", "15deg"] }, o: { loop: true, duration: 80 }},
  { e: part.armrightfront, p: { rotateZ: ["15deg", "0deg"] }, o: { loop: true, duration: 80, sequenceQueue: false }}
];

function raiseHead() {
  part.head.setAttribute('src','./img/robot/robot-head-up.png');
}

function lowerHead() {
  part.head.setAttribute('src','./img/robot/robot-head-down.png');
}

Velocity(upperBody, { "margin-top": "5"}, { loop: true, duration: 2000 });
Velocity(light, { "rotateZ": "3deg"}, { loop: true, duration: 2000 });
Velocity(lightGlare, { "opacity": ".95"}, { easing: "easeInOutBounce", loop: true, duration: 200 });

function say(what, where, speed) {
  var builtHtml = "";
  var arrayPos = 0;
  var letterID = 0;
  var charArray = what.split('');
  var insideElement = false;
  where = document.getElementById(where);

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
}

function delay(what, duration) {
  setTimeout(what, duration);
}

/////////////Timeline Code
say(thingsToSay[0], "content", 30);
say(thingsToSay[1], "nav", 100);
