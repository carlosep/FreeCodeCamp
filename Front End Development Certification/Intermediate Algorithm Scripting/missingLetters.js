
function fearNotLetter(str) {
  var first = str.charCodeAt(0);

  for(var j = 0; j < str.length; j++){
    if(str[j] == String.fromCharCode(first)){
      first++;
    }else{
      return String.fromCharCode(first);
    }
  }
}

fearNotLetter("abce");
