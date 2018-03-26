Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

[Kata Here](https://www.codewars.com/kata/alternate-capitalization/train/javascript)

psuedo code:

1. set empty array to store even capitals
2. loop through string
- if that spot has a remainder of 0, use a toUpperCase()
   
   store that in the even capitals array
   
   otherwise, store the value as is in th even array
3. set empty array to store odd capitals
4. loop through string
- if that spot does not have a remainder of 0, use a toUpperCase()
   
   store that in the odd capitals array
   
   otherwise, store the value as is in th odd array
5. return both arrays