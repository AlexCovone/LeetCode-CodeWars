// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// -----------------------------------------------------------------------------

// numbers is type:numbers[] - length is odd
// searching for outlier, return outlier

// elements inside of numbers will always be real, natural numbers

function stray(numbers) {
  // sort numbers arr, convert to type string
  const sorted = numbers.sort();

  // check if first element is same as second element
  // if not same, return first element
  if (sorted[0] !== sorted[1]) {
    return sorted[0];
  }

  // if first two elements are the same, return last element
  return sorted[sorted.length - 1];
}

function stray(numbers) {
  let result = 0;

  // loop through numbers - use XOR operation
  // XORing two identical numbers results in 0
  // XORing any number with 0 results in the number itself
  for (let i = 0; i < numbers.length; i++) {
    result ^= numbers[i];
  }
  
  return result;
}

// [1, 1, 2] => 2
// [17, 17, 3, 17, 17, 17, 17] => 3
// [3, 6, 6] => 3

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([3, 6, 6]), 3);
