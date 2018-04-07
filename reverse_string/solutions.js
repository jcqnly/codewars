//brute force
function solution(str){
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
    console.log(reverseString);
  }
  return reverseString;
}

//using built in methods
function solution(str){
  console.log(str.split().reverse().join());
  return str.split("").reverse().join("");
}