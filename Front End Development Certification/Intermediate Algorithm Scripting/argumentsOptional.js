function addTogether() {
  var num1 = arguments[0];
  if (Number.isInteger(num1)){
    if (arguments.length < 2){
      return function anotherFunction(num2){
        if (Number.isInteger(num1) && Number.isInteger(num2)){
          return num1 + num2;
        }else{
          return undefined;
        }
      };
    }else{
      if(Number.isInteger(arguments[1])){
        return num1 + arguments[1];
      }
    }
  }else{
    return undefined;
  }
}

addTogether(2)(3);
