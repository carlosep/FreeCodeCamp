$(document).ready(function(e) {
  getStream('freecodecamp');
});

function getStream(channel) {
  var url = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  $.getJSON(url, function(data) {
    if (data.stream !== null) {
      console.log('get Stream');
      console.log(data);
    } else {
      getChannel(channel);
    }
  });
}

function getChannel(channel) {
  var url = "https://api.twitch.tv/kraken/channels/" + channel + "?callback=?";
  $.getJSON(url, function(data) {
    console.log('get Channel');
    console.log(url);
    console.log(data);
  });
}
