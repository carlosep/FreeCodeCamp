
function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length - 1);

  for(var j = 0; j < str.length; j++){
    if(str[j] == String.fromCharCode(first)){
      first++;
    }else{
      return String.fromCharCode(first);
    }
  }
}

fearNotLetter("abce");
