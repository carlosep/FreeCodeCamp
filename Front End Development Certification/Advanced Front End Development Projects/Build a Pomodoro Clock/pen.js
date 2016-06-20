var myVar;
$(function() {
  var start = true;

  var bl = parseInt($('#break-length').html());
  var sl = parseInt($('#session-length').html());
  var plateTimer = parseInt($("#plate-timer").html());
  var plateTitle = parseInt($("#plate-title").html());
  $('#break-p').click(function() { bl++; $('#break-length').html(bl); });
  $('#break-m').click(function() { bl--; $('#break-length').html(bl); });
  $('#session-p').click(function() {
    sl++;
    $('#session-length').html(sl);
    $('#plate-timer').html(sl);
  });
  $('#session-m').click(function() {
    sl--;
    $('#session-length').html(sl);
    $('#plate-timer').html(sl);
  });
  $('.session').click(function() {
    if (start) {
      var session = 60 * parseInt($("#session-length").html());
      var sbreak = 60 * parseInt($("#break-length").html());
      display = $('#plate-timer');
      displayS = $('#plate-seconds');
      startTimer(session, sbreak, display, displayS);
      start = false;
    }
  });
  $('#stop').click(function() { clearInterval(myVar); start = true; });
});

function startTimer(session, sbreak, display, displayS) {
  var ring = new Audio('http://res.cloudinary.com/carlosep/video/upload/v1466274689/FreeCodeCamp/audio-reception-bell.mp3');
  var duration = session;
  var timer = duration, minutes, seconds;

  myVar = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes);
    displayS.text(seconds);

    if (--timer < 0) {
      ring.play();
      if ($('#plate-title').html() == 'Session') {
        $('#plate-title').html(' Break ');
        duration = sbreak;
      } else {
        $('#plate-title').html('Session');
        duration = session;
      }
      timer = duration;
    }
  }, 1000);
}
