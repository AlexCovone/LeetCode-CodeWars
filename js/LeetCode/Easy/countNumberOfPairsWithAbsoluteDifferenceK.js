// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// -------------------------------------------------------------------------------

// nums type:number[]
// k type:number
// arguments will always be real numbers, integers
// nums will always have a length >= 1 and <= 200

// return count of 'good pairs' => good pairs = absolute value of nums[i] - nums[j] === k value
// i < j => only account for value in nums once

var countKDifference = function (nums, k) {
  const hashmap = {};
  let goodCount = 0;

  // iterate through nums and store frequency of num
  for (const num of nums) {
    hashmap[num] ? hashmap[num]++ : (hashmap[num] = 1);
  }

  // iterate through nums again - check if nums[i] - k exists in map object
  // nums[i] - k = target value

  // if exists - increase good pair count by frequency in map object
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i] - k]) {
      goodCount += hashmap[nums[i] - k];
    }
  }

  return goodCount;
};

// Brute Force: Time Complexity - O(n^2)
var countKDifference = function (nums, k) {
  // initialize counter var
  let goodCount = 0;

  // iterate through nums (nested)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const absoluteValue = Math.abs(nums[i] - nums[j]);

      if (absoluteValue === k && i < j) {
        goodCount++;
      }
    }
  }

  return goodCount;
};

console.log(countKDifference([1, 2, 2, 1], 1), 4);
console.log(countKDifference([1, 3], 3), 0);
console.log(countKDifference([3, 2, 1, 5, 4], 2), 3);
