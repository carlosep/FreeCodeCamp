
$(function() {
  var firstClick = true;
$("#searchButton").click(function(){
  if(firstClick){
    var button = $("#searchButton");
    button.animate({width: '50px'}, "fast");
    button.css({'border-radius': "0px 5px 5px 0px"});
    button.html('GO');
    $("#searchBar").animate({opacity: 1}, "slow");
    $("#searchBar").show();
    firstClick = false;
  }else{
    console.log(getResults('test'))
  }
});



  var $results = $('#results');
  function getResults(exp) {
    $.ajax({
      url: 'https://www.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?',
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      async: false,
      dataType: 'json',
      data: {
        search: exp,
      },
      success: function(data) {
        $.each(data, function(key, value){
          $results.append("AQUELE LAYOUT QUE VC TA LIGADO")
        });
      }
    });
  }
});
