
function palindrome(str) {
  // Good luck!
  str = str.replace(/\,| |\.|-|_|\(|\)/g, '').toLowerCase();
  var string = str.split("").reverse().join("").replace(/\,| |\.|-|_|\(|\)/g, '').toLowerCase();

  return str == string;
}

palindrome("0_0 (: /-\ :) 0-0");
