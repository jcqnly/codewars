function capitalize(s){
  var evenString = [];
    for(var i = 0; i < s.length; i++){
      (i % 2 === 0) ? evenString += s[i].toUpperCase() : evenString += s[i];
    }
  var oddString = [];
    for(var i = 0; i < s.length; i++){
      (i % 2 !== 0) ? oddString += s[i].toUpperCase() : oddString += s[i];  
    }
    return [evenString, oddString];
};