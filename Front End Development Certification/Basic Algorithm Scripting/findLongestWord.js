
function findLongestWord(str) {
  var longest = 0;
  str = str.split(" ").map(function(s){
    if(s.length > longest){
      longest = s.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
