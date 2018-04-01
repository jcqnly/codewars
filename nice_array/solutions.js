function isNice(arr){
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//refactored
function isNice(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) {
      continue;
    } else {
      return false;
    }
  }
  return arr.length > 1;
}