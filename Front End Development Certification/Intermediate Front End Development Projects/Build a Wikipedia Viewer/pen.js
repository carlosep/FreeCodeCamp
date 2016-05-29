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
    console.log("GET EXPRESSION ON SEARCHBAR AND SEND TO API REQUEST")
  }
});
