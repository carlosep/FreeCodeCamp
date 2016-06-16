function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];

  for(var i in arr){
    var orbObj = {};
    orbObj.name = arr[i].name;
    orbObj.orbitalPeriod = Math.round(2*Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt+earthRadius, 3)/GM));

    result.push(orbObj);
  }
  return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
