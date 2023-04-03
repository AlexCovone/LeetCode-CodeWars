/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.
*/

const sumEvenNumbers = input => input.filter(num => num % 2 === 0).reduce((acc, c) => acc + c, 0)

// P - arr of integers
// R - sum of even integers
// E - [4, 3, 1, 2, 5, 10, 6, 7, 9, 8] => 30
// P - Isolate even integers, sum even integers