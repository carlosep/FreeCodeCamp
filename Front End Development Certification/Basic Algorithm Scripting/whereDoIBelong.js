
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){return a - b;});
  var pos = 0;
  for(var i = 0; i < arr.length; i++){
    if(num > arr[i]){
      pos++;
    }
  }
  return pos;
}

getIndexToIns([5,6,9,10,11], 9);
