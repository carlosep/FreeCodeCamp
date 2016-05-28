$(function() {

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    loadWeather(0, 0);
  }

  var $weather = $('#weather')

  function loadWeather(lat, lon) {
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?APPID=8dded379e695ba275b50b5167f8a31ae',
      data: {
        lat: lat,
        lon: lon,
        units: 'metric'
      },
      success: function(data) {
        $weather.append('My weather: ' + data.weather[0].main + '<br>City: ' + data.name);
      }
    });
  }
});
