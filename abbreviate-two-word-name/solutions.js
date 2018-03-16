//after refactoring
function abbrevName(name){
  return name.toUpperCase().match(/\b(\w)/g).join('.');
}

//before refactoring
function abbrevName(name){
  var allUpperCase = name.toUpperCase();
  var space = allUpperCase.match(/\b(\w)/g);
  var abbrev = space.join('.');
  return abbrev;
}