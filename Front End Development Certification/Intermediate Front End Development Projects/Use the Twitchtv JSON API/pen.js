var $results = $('#results');
$(document).ready(function(e) {
  getStream('freecodecamp');
  getStream('esl_sc2');
  getStream('comster404');
  //create array with all names
});

function getStream(channel) {
  var url = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  $.getJSON(url, function(data) {
    if (data.stream) {
      //create .online and add atribute to the ones here.
      var name, logo, status, game, link;
      name = data.stream.channel.display_name;
      logo = data.stream.channel.logo;
      status = data.stream.channel.status;
      game = data.stream.channel.game;
      link = data.stream.channel.url;

      $results.append('<div class="row streamer vertical-center online"><div class="col-xs-2"><img src="' + logo + '" alt="" /></div><div class="col-xs-3"> <span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> <a href="' + link + ' " target="_blank">' + name + '</a></div><div class="col-xs-7 text-center"><span>' + game + ': ' + status + '</span></div></div>');
    } else if (data.error) {
      getUnprocessable(channel);
    } else {
      getChannel(channel);
    }
  });
}

function getChannel(channel) {
  var url = "https://api.twitch.tv/kraken/channels/" + channel + "?callback=?";
  $.getJSON(url, function(data) {
    var name, logo, link;
    name = data.display_name;
    logo = data.logo;
    link = data.url;
    $results.append('<div class="row streamer vertical-center offline"><div class="col-xs-2"><img src="' + logo + '" alt="" /></div><div class="col-xs-3"> <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> <a href="' + link + ' " target="_blank">' + name + '</a></div><div class="col-xs-7 text-center"><span> Offline </span></div></div>');
  });
}

function getUnprocessable(channel) {
  var url = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  $results.append('<div class="row streamer vertical-center unprocessable"><div class="col-xs-2"><img src="https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg" alt="" /></div><div class="col-xs-3"> <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <a href="https://www.twitch.tv/' + channel + '" target="_blank">' + channel + '</a></div><div class="col-xs-7 text-center"><span> Account Closed </span></div></div>');
}

$(".tab").click(function(e){
  $('.active').removeClass('active');
  $(this).addClass('active');
  console.log($(this).attr('id'));
});
