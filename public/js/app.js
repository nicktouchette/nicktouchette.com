(function() {
  var c = document.getElementById('canv');
  var $ = c.getContext('2d');

  var w = c.width = window.innerWidth;
  var h = c.height = window.innerHeight;

  var draw = function (t) {
    $.clearRect(0, 0, w, h);
    $.lineWidth = 0.5;
    // $.fillStyle = 'rgba(0,0,0, 1)'
    // $.fillRect(0, 0, w, h)
    for (var i = -30; i < 30; i += 1) {
      $.strokeStyle = 'rgba(255,0,0, .15)';
      $.beginPath();
      $.moveTo(0, h / 2);
      for (var j = 0; j < w; j += 10) {
        $.lineTo(0 * Math.sin(i / 10) +
          j + 0.007 * j * j,
          Math.floor(h / 2 + j / 8 *
            Math.sin(j / 50 - t / 50 - i / 118) +
            (i * 1) * Math.sin(j / 25 - (i + t) / 65)));
      }
      $.stroke();
    }
  };
  var t = 0;

  document.addEventListener('resize', function () {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
  }, false);

  var run = function () {
    window.requestAnimationFrame(run);
    t += 0.5;
    draw(t);
  };

  run();
})();
