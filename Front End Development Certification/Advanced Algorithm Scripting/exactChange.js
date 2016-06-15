
function checkCashRegister(price, cash, cid) {
  var totalCid = 0;
  var change = cash - price;
  var changeArray = [];

  var cidRef = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00],
                ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];

  for(var i in cid){
    totalCid += cid[i][1];
  }
  if (totalCid == change){
    return 'Closed';
  }else{
    var index = 8;
    console.log('change: ' + change);
    while (change > 0 && index >= 0){
    	 cidRef = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00],
                ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
    	console.log('==NEW LOOP==');
    	console.log('cidRef: ' + cidRef[index][1]);
    	console.log('cid: ' + cid[index][1]);
    	console.log('change: ' + change);
      if(change >= cidRef[index][1] && cid[index][1] >= cidRef[index][1]){
        var found = -1;
        for (var c in changeArray){
          if (changeArray[c].indexOf(cidRef[index][0]) >= 0){
          	console.log('I found "' + cidRef[index][0] + '" in [' + changeArray[c] + ']+++++++++++++++++++++');
          	found = changeArray[c].indexOf(cidRef[index][0]);
            break;
          }else{
          	console.log('I couldn\'t find "' + cidRef[index][0] + '" in "' + changeArray[c] + '"+++++++++++++++++++++');
          }
        }
        if(found >= 0){
          console.log(changeArray[changeArray.length - 1][1] + ' INCREMENTS ' + cidRef[index][1]);
          changeArray[changeArray.length - 1][1] += cidRef[index][1];
        }else{
          console.log('I PUSHED [' + cidRef[index] + '] in ' + changeArray);
          changeArray.push(cidRef[index]);
        }
        console.log(">>>>>>>>>>>>>>> " + cidRef[index][1] + " <<<<<<<<<<<<<<<<<<<<<<,");
        change = (change - cidRef[index][1]).toFixed(2);
        cid[index][1] -= cidRef[index][1];
      }else{
      	index--;
      	console.log('index-- ' + index);
      }

    }
    console.log(changeArray);
    if(index < 0){
      return 'Insufficient Funds';
    }
    return changeArray;
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// penny - 1 // nickel - 5 // dime - 10 // quarter - 25 //


/* Ter valor do troco.
   Checar se valor do troco é exatamente o valor da soma dos valores de cid
   + Em caso positivo
     'Closed'
   - Em caso negativo
     Iterar os vetores REF e CID, começando pelo fim.
     Checar se o valor do troco é maior ou igual que o valor de referência.
     Checar se o valor do troco é menor ou igual o valor no CID.
     + Em caso positivo
         Checar se o nome do valor Já está contido em RESULT.
         + Em caso positivo
             Aumentar o valor de RESULT com o valor de REF.
         - Em caso negativo
             Criar o valor em RESULT com o nome e valor de REF.
         Subtrair o valor de CID.
     - Em caso negativo
       index--

     Se index chegar a -1
       'Insuficient Funds'
     return RESULT
*/
