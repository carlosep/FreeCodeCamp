
function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  var conf = false; //  confirmation of match. if it is true by the end, than the
                    //whole second string is contained in the first string
  for(var i = 0; i < second.length; i++){
    if(first.indexOf(second[i]) >= 0){
      conf = true; //if you find the letter in the first string...
      continue; // go to the next iteration
    }
    conf = false; //if you don't
    break; //stop the loop
  }
  return conf;
}

mutation(["hello", "neo"]);
