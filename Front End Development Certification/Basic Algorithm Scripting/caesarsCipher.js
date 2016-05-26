
function rot13(str) { // LBH QVQ VG!
  result = '';

  for(var i = 0; i < str.length; i++){
    var char = str[i];
    var charCode = char.charCodeAt(0);
    if (char == ' ' || char == '!' || char == '.' || char == '?'){
      char = String.fromCharCode(charCode);
    }else{
      char = String.fromCharCode(((charCode - 52) % 26) + 65);
    }
    result += char;
  }


  return result;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
