function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for(var key in collection){
  	var count = 0;
	for(var i = 0; i < Object.keys(source).length; i++){
	  if(collection[key].hasOwnProperty(Object.keys(source)[i]) &&
         collection[key][Object.keys(source)[i]] == source[Object.keys(source)[i]]){
	  		count++;
	  }
	}
	if(count >= Object.keys(source).length){
		arr.push(collection[key]);
	}
  }
  // Only change code above this line
  return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
