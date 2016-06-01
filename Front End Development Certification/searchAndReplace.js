function myReplace(str, before, after) {
  arr = str.split(' ');
  for(var key in arr){
    if(arr[key] == before){
      if(before[0] == before[0].toUpperCase()){
        after = after.split('');
        var a = after[0].toUpperCase();
        after[0] = a;
        after = after.join('');
      }
      arr[key] = after;
      break;
    }
  }
  str = arr.join(' ');
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
