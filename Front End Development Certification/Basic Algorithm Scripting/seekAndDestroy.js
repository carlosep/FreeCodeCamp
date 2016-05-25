
function destroyer() {
  // Remove all the values
  var arr = Array.prototype.slice.call(arguments, 1);
  return arguments[0].filter(function(value){
    for(var i = 0; i < arr.length; i++){
      if(value == arr[i]){
        return false;
      }
    }
    return value;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
