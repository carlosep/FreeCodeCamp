
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var newArr = arr1;
  var found;
  if(arr1.length === 0){
    newArr = arr2;
  }else{
    for (var a in arr2){
      for (var n in newArr){
        found = -1;
        if (arr2[a][1].indexOf(newArr[n][1]) >= 0){
          newArr[n][0] += arr2[a][0];
          found = arr2[a][1].indexOf(newArr[n][1]);
          break;
        }
      }
      if (found < 0){
        newArr.push(arr2[a]);
      }
    }
  }
  newArr.sort(function(a,b){
    return a[1] > b[1];
  });

  return newArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv,newInv);
