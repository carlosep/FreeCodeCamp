
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)[a-z]/g,function(f){ return f.toUpperCase(); });
}

titleCase("I'm a little tea pot");
