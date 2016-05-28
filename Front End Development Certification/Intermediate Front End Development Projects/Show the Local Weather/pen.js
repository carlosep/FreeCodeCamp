$(function (){

  var $weather = $('#weather')

  $.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=8dded379e695ba275b50b5167f8a31ae',
    success: function(data){
      $weather.append('My weather: ' + data.weather[0].main + '<br>City: ' + data.name);
    }
  });
});
