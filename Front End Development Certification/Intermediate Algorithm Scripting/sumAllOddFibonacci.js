function sumFibs(num) {
  if(num <= 0){
    return 0;
  }

  var prev = 1;
  var cur = 1;
  var sum = 2;
  for (var i = 2; i < num; i++) {
    var temp = prev;
    prev = cur;
    cur = temp + cur;
    if(cur <= num && cur % 2 !== 0){
      sum += cur;
    }
  }

  return sum;
}

sumFibs(75025);
