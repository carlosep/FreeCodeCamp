function uniteUnique() {
  var arr = [];
  var newArr = [];

  for(var i in arguments){
    arr.push(arguments[i]);
  }

  for(var j in arr){
    for(var k in arr[j]){
      newArr.push(arr[j][k]);
    }
  }

  newArr = newArr.filter(function(key, value, array){
    return array.indexOf(key) == value;
  });

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
