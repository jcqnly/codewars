function capitalize(s){
  var evenString = "";
    for(var i = 0; i < s.length; i++){
      if (i % 2 === 0) {
          evenString += s[i].toUpperCase();
      }
      else {
          evenString += s[i].toLowerCase();
       }   
    }
  var oddString = "";
    for(var i = 0; i < s.length; i++){
      if (i % 2 !== 0) {
          oddString += s[i].toUpperCase();
      }
      else {
          oddString += s[i].toLowerCase();
       }   
    }
  return [evenString, oddString];
};