$(function() {
  var firstClick = true;
  var $results = $('#results');
$("#searchButton").click(function(){
  var searchBar = $("#searchBar");
  if(firstClick){
    var button = $("#searchButton");
    button.animate({width: '50px'}, "fast");
    button.css({'border-radius': "0px 5px 5px 0px"});
    button.html('GO');
    searchBar.animate({opacity: 1}, "slow");
    searchBar.show();
    firstClick = false;
  }else{
    $results.empty();
    getResults(searchBar.val());
  }
});

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
        for(var i = 0; i < 10; i++){
          var title, body, link;
          for(var j = 1; j < 4; j++){
            switch(j){
              case 1:
                title = data[j][i];
                break;
              case 2:
                body = data[j][i];
                break;
              case 3:
                link = data[j][i];
                break;
            }
          }
          $results.append('<a href='+link+' target="_blank"><div class="col-lg-12"><h1>' + title + '</h1><p>' + body + '</p></div></a>');
        }
      }
    });
  }
});
