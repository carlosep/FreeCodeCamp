function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/ |_/g, '#');

  str = str.replace(/(?!^)[A-Z]| [A-Z]/g, function(match){
    return ('#'+match);
  });

  str = str.replace(/##/g, "#");

  str = str.toLowerCase();

  return str.replace(/#/g, '-');
}

spinalCase('AllThe-small Things');
