//brute force
function disemvowel(str) {
  let stringStr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (stringStr[i] === 'a' || stringStr[i] === 'e' || stringStr[i] === 'i' || stringStr[i] === 'o' || stringStr[i] === 'u' || stringStr[i] === 'A'|| stringStr[i] === 'E' || stringStr[i] === 'I' || stringStr[i] === 'O' || stringStr[i] === 'U') {
      stringStr[i] = '';
    }
  }
  return stringStr.join('');
}

//with RegEx
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}