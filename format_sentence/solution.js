function formatWords(words){
  let sentence = [];
  if (words === null) {
    return ('');
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') {
      continue;
    }
    if (words[i] && words[i+1] === '' && words[i+2]) {
      sentence.push(words[i],' and ', words[i+2]);
      break;
    }
    if (words[i] && words[i+1] && words[i+2] === '') {
      sentence.push(words[i],' and ', words[i+1]);
      break;
    }
    if (words[i] && words[i+1] && i+2 === words.length) {
      sentence.push(words[i], ' and ');
    } else if (words[i] && words[i+1]) {
      sentence.push(words[i], ', ');
    } else {
      sentence.push(words[i]);
    }
  }
  return sentence.join("");
}