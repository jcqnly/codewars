//map() double the numbers
function double(array) {
  return array.map(num =>  num * 2);
}

//filter() filter only numbers
function filter_list(l) {
  return l.filter(num => typeof num === 'number');
}

//reduce() calculate average
function find_average(array) {
  let total = array.reduce((sum, each) => sum + each, 0);
  return total/array.length;
}