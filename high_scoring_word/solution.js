function high(x){
  let sumOfLetters = [];
  let value = 0;
  for(let i=0; i<x.length; i++) {
    if(x.charCodeAt(i) !== 32) {
      value += x.charCodeAt(i)-96;
    } else {
      sumOfLetters.push(value);
      value = 0;
    }
    if(i+1 === x.length) {//last value wasn't getting pushed, so this was need
      sumOfLetters.push(value);
    }
  }
  let highScore = sumOfLetters.indexOf(Math.max.apply(null, sumOfLetters));
  let splitString = x.split(' ');
  for(let j=0; j<x.length; j++) {
    if(highScore===j) {
      return splitString[j];
    }
  }
}
//loop through given string
//add unicode value of characters
//if the value is 32, the value for a space, add the current value to an empty arry
//reset the counter to 0 to continue scoring the next word
//find the highest score of that array
//loop through the given string
//whichever index value matches the high score is the word