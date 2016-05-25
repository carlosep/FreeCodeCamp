
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var turns = arr.length;
  for(var i = 0; i < turns; i+=size){
    var temp = [];
    for(var j = 0; j < size; j++){
      if(arr.length > 0){
        temp.push(arr.shift());
      }
    }
    newArr.push(temp);
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
