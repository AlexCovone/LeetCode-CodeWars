// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// -----------------------------------------------------------

// input value type:number - always positive, whole integer (real numbers)
// return value true || false => type: boolean

function narcissistic(value) {
  // convert number into number[]
  const numberArr = value.toString().split('').map(val => Number(val))
  
  // get length of number (how many digits)
  const powerValue = numberArr.length
  
  // iterate through arr, raise to power of length, add values
  const sumValue = numberArr.reduce((acc, c) => acc + Math.pow(c, powerValue), 0)
  
  // check if summed values === input value
  return sumValue === value
}

// 153 => return true, 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1652 => return false, 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// 407 => return treue, 4^3 + 0^3 + 7^3 = 64 + 0 + 343 = 407
// 46 => return false, 4^2 + 6^2 = 16 + 36 = 52

console.log(narcissistic(153), true);
console.log(narcissistic(1652), false);
console.log(narcissistic(407), true);
console.log(narcissistic(46), false);
