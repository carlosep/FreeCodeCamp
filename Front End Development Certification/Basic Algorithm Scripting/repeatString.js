
function repeatStringNumTimes(str, num) {
  // repeat after me
  var strstr = "";
  if (num > 0){
    for(var i = 0; i < num; i++){
      strstr += str;
    }
  }else{
    return "";
  }
  return strstr;
}

repeatStringNumTimes("abc", 4);
