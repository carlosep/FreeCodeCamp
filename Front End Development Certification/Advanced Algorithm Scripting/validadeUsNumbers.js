function telephoneCheck(str) {
  // Good luck!
  if(str.match(/^(^1?(\s|-)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4})$/) ||     //Withouth ()
     str.match(/^(^1?(\s|-)?\(\d{3}\)(\s|-)?\d{3}(\s|-)?\d{4})$/)){  //With ()
    return true;
  }else{
    return false;
  }
}

telephoneCheck("(275)76227382");
