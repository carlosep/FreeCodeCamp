var $results = $('#results');
$(document).ready(function(e) {
  var users = ['freecodecamp', 'esl_sc2', 'comster404', 'cretetion', 'storbeck', 'terakilobyte', 'ogamingsc2', 'habathcx', 'robotcaleb', 'thomasballinger', 'noobs2ninjas', 'behoff', 'brunofin', 'test_channel', 'sheevergaming', 'tr7k'];
  for (var i = 0; i < users.length; i++) {
    getStream(users[i]);
  };
  //create array with all names
});

function getStream(channel) {
  var url = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  $.getJSON(url, function(data) {
    if (data.stream) {
      //create .online and add atribute to the ones here.
      var name, logo, status, game, link;
      name = data.stream.channel.display_name;
      status = data.stream.channel.status;
      game = data.stream.channel.game;
      link = data.stream.channel.url;
      logo = (data.stream.channel.logo !== null) ? data.stream.channel.logo : "https://yt3.ggpht.com/-v5Ln1Csh8_Y/AAAAAAAAAAI/AAAAAAAAAAA/4LrQy8IdD9w/s900-c-k-no-rj-c0xffffff/photo.jpg";

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
    logo = (data.logo !== null) ? data.logo : "https://yt3.ggpht.com/-v5Ln1Csh8_Y/AAAAAAAAAAI/AAAAAAAAAAA/4LrQy8IdD9w/s900-c-k-no-rj-c0xffffff/photo.jpg";
    link = data.url;
    $results.append('<div class="row streamer vertical-center offline"><div class="col-xs-2"><img src="' + logo + '" alt="" /></div><div class="col-xs-3"> <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> <a href="' + link + ' " target="_blank">' + name + '</a></div><div class="col-xs-7 text-center"><span> Offline </span></div></div>');
  });
}

function getUnprocessable(channel) {
  var url = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  $results.append('<div class="row streamer vertical-center unprocessable"><div class="col-xs-2"><img src="https://yt3.ggpht.com/-v5Ln1Csh8_Y/AAAAAAAAAAI/AAAAAAAAAAA/4LrQy8IdD9w/s900-c-k-no-rj-c0xffffff/photo.jpg" alt="" /></div><div class="col-xs-3"> <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <a href="https://www.twitch.tv/' + channel + '" target="_blank">' + channel + '</a></div><div class="col-xs-7 text-center"><span> Account Closed </span></div></div>');
}

$(".tab").click(function(e) {
  $('.active').removeClass('active');
  $(this).addClass('active');
  if ($(this).attr('id') == 'allUsers') {
    $('.streamer').each(function(k, v) {
      $(v).show();
    });
  } else {
    $('.streamer').each(function(k, v) {
      $(v).hide();
    });
    if ($(this).attr('id') == 'onlineUsers') {
      $('.online').each(function(k, v) {
        $(v).show();
      });
    } else if ($(this).attr('id') == 'offlineUsers') {
      $('.offline').each(function(k, v) {
        $(v).show();
      });
    } else if ($(this).attr('id') == 'closedUsers') {
      $('.unprocessable').each(function(k, v) {
        $(v).show();
      });
    }
  }
});
