function checkCashRegister(price, cash, cid) {
  var totalCid = 0;
  var change = cash - price;
  var changeArray = [];
  var cidRef = [];

  for(var i in cid){
    totalCid += cid[i][1];
  }
  if (totalCid == change){
    return 'Closed';
  }else{
    var index = 8;
    while (change > 0 && index >= 0){
      //for some crazy reason I have to set the values after each loop, because it seems to randomly alter some values...
      cidRef = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00],
                ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
      // change must be bigger than the reference value and the cash in drawer should be more or equal to the reference value.
      if(change >= cidRef[index][1] && cid[index][1] >= cidRef[index][1]){
        var found = -1;
        //see if value is already on the array.
        for (var c in changeArray){
          if (changeArray[c].indexOf(cidRef[index][0]) >= 0){
          	found = changeArray[c].indexOf(cidRef[index][0]);
            break;
          }
        }
        // if it is we increment it, if it is not, we add it.
        if(found >= 0){
          changeArray[changeArray.length - 1][1] += cidRef[index][1];
        }else{
          changeArray.push(cidRef[index]);
        }
        change = (change - cidRef[index][1]).toFixed(2);
        cid[index][1] -= cidRef[index][1];
      }else{
      	index--;
      }
    }
    if(index < 0){ //if index is lower than zero, it means that we still have money in change, but not on cid.
      return 'Insufficient Funds';
    }
    return changeArray;
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// penny - 1 // nickel - 5 // dime - 10 // quarter - 25 //
