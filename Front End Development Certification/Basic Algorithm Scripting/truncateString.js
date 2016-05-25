
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num > 3 && str.length > num){
    str = str.slice(0,(num-3));
    return str + "...";
  }else{
    str = str.slice(0,num);
    if(num <=3){
      str += "...";
    }
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
