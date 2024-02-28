/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15; 5 + 4 + 3 + 2 + 1 = 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45; 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
sumToN(-8)  // returns null
***********************************************************************/
let sumToN = (number) =>{
if(number < 0){
  return null;
}
return number  + sumToN( number - 1);

}
console.log(sumToN(5)); // returns 15; 5 + 4 + 3 + 2 + 1 = 15
console.log(sumToN(1));  // returns 1
console.log(sumToN(9)) ; // returns 45; 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
console.log(sumToN(-8));  // returns null


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
