// Complete the function power_of_two/powerOfTwo that determines if a given non-negative integer is a power of two.

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
