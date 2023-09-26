// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// ----------------------------------------------------------------------

// input: nums:number[]
// return count:number

// nums will always be an array of real numbers between 1 and 100
// 1 <= nums.length <= 100

// nums[i] === nums[j] && i < j
// two values are the same number, and the first iterative is an index that precedes it

//
var numIdenticalPairs = function (nums) {
  // initialize good count
  let goodCount = 0;

  // initialize hashmap - store frequency of each number in nums
  const hashmap = {};

  // loop through nums arr
  for (const number of nums) {
    // check if number exist in hashmap - if exist: +1 to key:val && goodCount += number of occurences seen already
    if (hashmap[number]) {
      goodCount += hashmap[number];
      hashmap[number] += 1;
    } else {
      hashmap[number] = 1; // if num does not exist in hashmap - add 'number' : 1 to hashmap (encountered once)
    }
  }

  return goodCount;
};

// Brute Force
// Time Complexity - O(N^2)
var numIdenticalPairs = function (nums) {
  // initialize good count
  let goodCount = 0;

  // iterate through arr - nested, compare values
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        goodCount++;
      }
    }
  }

  return goodCount;
};

// nums = [1, 2, 3, 1, 1, 3] => return 4 - (0, 3), (0, 4), (3, 4), (2, 5)
// nums = [1, 1, 1, 1] => return 6 - each pair is "good"
// nums = [1, 2, 3] => return 0 - no pairs are "good"

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4);
console.log(numIdenticalPairs([1, 1, 1, 1]), 6);
console.log(numIdenticalPairs([1, 2, 3]), 0);
