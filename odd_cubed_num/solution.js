//before refactoring
function cubeOdd(arr) {
  let result = arr.map(num => Math.pow(num, 3)).filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
  console.log(result);
  if (result || result === 0) {
    return result;
  } else {
    return undefined;
  }
}

//after refactoring
function cubeOdd(arr) {
  return arr.some(isNaN) ? undefined : arr.map(num => Math.pow(num, 3)).filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}