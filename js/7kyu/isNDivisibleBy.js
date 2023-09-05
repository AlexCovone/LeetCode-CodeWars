// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// ------------------------------------------------------------------------------------------

// working with indefinite number of arguments
// check if first argument is divisible by all other arguments

// arguments will always be type: number, real numbers

function isDivisible() {
  // check if arguments.length is less than 2 - is so, return true
  if (arguments.length < 2) {
    return true;
  }

  // access first argument
  const firstValue = arguments[0];
  // access remainder of arguements
  for (let i = 1; i < arguments.length; i++) {
    // check if first argument is divisible with remainder arguements
    if (firstValue % arguments[i] !== 0) {
      return false;
    }
  }
  return true;
}


// [6, 1, 3] => true, 6 % 1 === 0 && 6 % 3 === 0
// [12, 2] => true, 12 % 2 === 0
// [100, 5, 4, 10, 25, 20] => true, 100 % 5 === 0 && 100 % 4 === 0 && 100 % 10 === 0 && 100 % 25 === 0 && 100 % 20 === 0
// [12, 7] => false
// [144, 12, 3, 5] => false

console.log(isDivisible([6, 1, 3]), true);
console.log(isDivisible([12, 2]), true);
console.log(isDivisible([100, 5, 4, 10, 25, 20]), true);
console.log(isDivisible([12, 7]), false);
console.log(isDivisible([144, 12, 3, 5]), false);
