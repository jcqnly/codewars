function insertDash(num) {
  let numString = num.toString();
  let numWithDash = [];
  for (let i = 0; i < numString.length; i++) {
    if ((numString[i] % 2 !== 0) && (numString[i+1] % 2 !== 0)) {
      if (i+1 !== numString.length) {
        numWithDash.push(numString[i], '-');
      } else {
        numWithDash.push(numString[i]);
      }
    } else {
      numWithDash.push(numString[i]);
    }
  }
  return numWithDash.join('');
}