function convertToRoman(num) {
  var romanDict = {
    "I":    1,    "II":   2,    "III":  3,
    "IV":   4,    "V":    5,    "VI":   6,
    "VII":  7,    "VIII": 8,    "IX":   9,
    "X":    10,   "XX":   20,   "XXX":  30,
    "XL":   40,   "L":    50,   "LX":   60,
    "LXX":  70,   "LXXX": 80,   "XC":   90,
    "C":    100,  "CC":   200,  "CCC":  300,
    "CD":   400,  "D":    500,  "DC":   600,
    "DCC":  700,  "DCCC": 800,  "CM":   900,
    "M":    1000, "MM":   2000, "MMM":  3000
  };
  var arr = [];
  for(var i = num.toString().length, j = 0; i > 0, j < num.toString().length; i--, j++){
    switch(i){
      case 4:
        arr.push(parseInt(num.toString()[j]) * 1000);
        break;
      case 3:
        arr.push(parseInt(num.toString()[j]) * 100);
        break;
      case 2:
        arr.push(parseInt(num.toString()[j]) * 10);
        break;
      case 1:
        arr.push(parseInt(num.toString()[j]));
        break;
    }
  }
  var result = '';
  for(var k = 0; k < arr.length; k++){
    for(var key in romanDict){
      if(arr[k] == romanDict[key]){
        result += key;
      }
    }
  }
  return result;
}

convertToRoman(36);
