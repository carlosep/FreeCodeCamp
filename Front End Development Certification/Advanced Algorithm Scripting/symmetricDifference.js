
function sym() {
  var args = [];
  var result = [];

  //all arguments are pushed into an arrays of these arrays
  for (var arg in arguments){
    args.push(arguments[arg]);
  }

  //take the difference of the first two arrays into a result variable.
  //takes the difference of the result array with the next array and so on...
  for (var i = 1; i < args.length; i++){
    if (result.length <= 0){
      result = diff(args[i], args[i-1]);
    }else{
      result = diff(result, args[i]);
    }
  }

  //returns the final array.
  return result;
}

function diff(arr1, arr2){
  var newArr = [];
  var arrs = [];

  //both arrays must have only distinct elements
  arr1 = arr1.filter( function( currentValue, index, arr ) {
    return arr.indexOf(currentValue) == index;
  });
  arr2 = arr2.filter( function( currentValue, index, arr ) {
    return arr.indexOf(currentValue) == index;
  });

  //mergin both arrays into one
  for(var i in arr1){
    newArr.push(arr1[i]);
  }
  for(var j in arr2){
    newArr.push(arr2[j]);
  }

  //sorting arrays in ascendent order
  newArr.sort(function(a,b){
    return a - b;
  });

  //returns what should not be in the array into the flag array
  var flag = newArr.filter( function( currentValue, index, arr ) {
    return arr.indexOf(currentValue) != index;
  });

  //compares merged array and adds null to flagged elements.
  for(var n in newArr){
    for(var f in flag){
      if(newArr[n] == flag[f]){
        newArr.splice(n, 1, null);
      }
    }
  }

  //removes null elements
  newArr = newArr.filter(function(val){
    return val;
  });

  //returns the difference
  return newArr;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
