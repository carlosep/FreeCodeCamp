
function reverseString(str) {
  var string = str.split('');
  string.reverse();
  str = string.join('');
  return str;
}

reverseString("hello");
