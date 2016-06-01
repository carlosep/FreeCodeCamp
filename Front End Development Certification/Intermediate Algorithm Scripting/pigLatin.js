function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  var arr = str.split('');

  if(vowels.indexOf(arr[0]) >= 0){
    arr.push('way');
  }else{
    var cluster = '';
    while(vowels.indexOf(arr[0]) < 0){
      cluster += arr.shift();
    }
    arr.push(cluster+'ay');
  }

  str = arr.join('');
  return str;
}

translatePigLatin("carlos");
