function makeFriendlyDates(arr) {
  var diffDate = Math.abs(new Date(arr[1]) - new Date(arr[0]));
  var readableDate = [];
  var date1 = arr[0].split('-');
  var date2 = arr[1].split('-');
  if(diffDate === 0){
    readableDate.push(readDate(parseInt(date1[2]), parseInt(date1[1]), parseInt(date1[0])));
  }else{
    var d1 = readDate(parseInt(date1[2]), parseInt(date1[1]), parseInt(date1[0]));
    var d2 = readDate(parseInt(date2[2]), parseInt(date2[1]), parseInt(date2[0]));
    if(diffDate <= 2591999999){ //one month
      d1 = readDate(parseInt(date1[2]), parseInt(date1[1]));
      d2 = readDate(parseInt(date2[2]));
    }else if(diffDate <= 31535999999){ //one year
      if(new Date().getFullYear() == parseInt(date1[0])){
        d1 = readDate(parseInt(date1[2]), parseInt(date1[1]));
      }
      d2 = readDate(parseInt(date2[2]), parseInt(date2[1]));
    }
    readableDate.push(d1);
    readableDate.push(d2);
  }
  return readableDate;
}

function readDate(){
  var day = '';
  var month = '';
  if(arguments[0]){
    switch(arguments[0]){
      case 1: day = '1st'; break;
      case 2: day = '2nd'; break;
      case 3: day = '3rd'; break;
      default: day = arguments[0] + 'th'; break;
    }
  }
  if(arguments[1]){
    switch(arguments[1]){
      case 1:  month = 'January';   break;
      case 2:  month = 'February';  break;
      case 3:  month = 'March';     break;
      case 4:  month = 'April';     break;
      case 5:  month = 'May';       break;
      case 6:  month = 'June';      break;
      case 7:  month = 'July';      break;
      case 8:  month = 'August';    break;
      case 9:  month = 'September'; break;
      case 10: month = 'October';   break;
      case 11: month = 'November';  break;
      case 12: month = 'December';  break;
    }
  }

  if(arguments.length == 3){
    return month + ' ' + day + ', ' + arguments[2];
  }else if(arguments.length == 2){
    return month + ' ' + day;
  }else if(arguments.length == 1){
    return day;
  }
}

makeFriendlyDates(["2017-03-01", "2017-05-05"]);
