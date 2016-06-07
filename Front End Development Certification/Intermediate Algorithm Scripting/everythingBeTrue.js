
function truthCheck(collection, pre) {
  // Is everyone being true?
  var result;
  for(var i = 0; i < Object.keys(collection).length; i++){
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]){
      result = true;
    }else{
      result = false;
      break;
    }
  }
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
