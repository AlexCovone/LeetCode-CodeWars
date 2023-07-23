// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// every argument is type: number
// can be negative or positive
// always integers

// return boolean value: true || false

function twoArePositive(a, b, c) {
  const aSign = Math.sign(arguments[0]); // 1 || -1 || 0
  const bSign = Math.sign(arguments[1]); // 1 || -1 || 0
  const cSign = Math.sign(arguments[2]); // 1 || -1 || 0

  // JavaScript implicitly converts boolean values to numbers before performing addition
  // true (1) + true (1) + false (0) === 2
  const positiveCount = (aSign === 1) + (bSign === 1) + (cSign === 1);

  return positiveCount === 2;
}

// Alternative
function twoArePositive(a, b, c) {
  return [...arguments].filter((val) => val > 0).length === 2;
}

console.log(twoArePositive(2, 4, -3)); // true
console.log(twoArePositive(-4, 6, 8)); // true
console.log(twoArePositive(7, -4, -9)); // false
console.log(twoArePositive(1, 2, 3)); // false
