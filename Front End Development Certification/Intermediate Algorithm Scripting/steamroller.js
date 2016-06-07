function steamrollArray(arr) {
  // I'm a steamroller, baby
  var count = 0;
  var newArr = [];

  for(var i = 0; i < arr.length; i++){
    newArr.push(getValues(arr[i]));
  }

  for(var j = 0; j < newArr.length; j++){
    if(Array.isArray(newArr[j])){
      var temp;
      temp = newArr.splice(j, 1);
      temp = getValues(temp);
      for(var t = 0; t < temp.length; t++){
        newArr.push(temp[t]);
      }
    }
  }

  newArr = newArr.filter(function(val){
    return val;
  });

  return newArr;
}

function getValues(arr){
  var result;
  var results = [];
  if (Array.isArray(arr)){
    for(var j in arr){
      if(arr.length <= 1){
        result = getValues(arr[j]);
        break;
      }else{
        results.push(getValues(arr[j]));
      }
    }
    if(results.length > 0){
      return results;
    }
  }else{
    result = arr;
  }
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
