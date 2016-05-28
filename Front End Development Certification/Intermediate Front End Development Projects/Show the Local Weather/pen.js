$(function() {

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    loadWeather(0, 0);
  }

  var $cityCountry = $('#cityCountry');
  var $weather = $('#weather');
  var $temperature = $('#temperature');
  var $icon = $('#icon');

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
        $cityCountry.append('Your City<br> ' + data.name + ", " + data.sys.country);
        $temperature.append('Temperature<br> <span id="tempNum">' + data.main.temp + "</span><a href='#' id='units'> °C</a>");
        $weather.append('Your Weather<br> ' + data.weather[0].main + ': ' + data.weather[0].description);
        $icon.append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='weather icon'>");
      }
    });
  }
});

$(document).ready(function(e) {
  $("#buttonUnits").on("click", function() {
    if($("#units").html().indexOf("C") >= 0){
      $("#units").html(' °F');
      var celsius = $("#tempNum").html();
      var fahrenheit = celsius * (9*0.2) + 32;
      $("#tempNum").html(Math.round(fahrenheit));
      $("#buttonUnits").html("I'd Rather see in Celsius");
    }else{
      $("#units").html(' °C');
      var fahrenheit = $("#tempNum").html();
      var celsius = (fahrenheit - 32) * 5/9;
      $("#tempNum").html(Math.round(celsius));
      $("#buttonUnits").html("I'd Rather see in Fahrenheit");
    }
  });
});
