// arr of nums, integers, can be negative, never empty - at least length = 2, target will always exist within the nums arr, no special chars, only valid answer

// return indices of the 2 numbers that equate to target argument, return in arr  (e.g. [0, 1])

// nums = [2, 7, 11, 15], target = 9 -> [0, 1]
// nums = [3, 2, 4], target = 6 -> [1, 2]
// nums = [3, 3], target = 6 -> [0, 1]
// nums = [5, 2, 1, 8], target = 10 -> [1, 3]

// Brute Force
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// ------------------------------------------------

// Two arguments - 1) arr of nums: type number, 2) target: type number

// Return indices in an array of the nums that add up to target (any order) - always be length of 2
// No manipulating array argument - need to account for indices

var twoSum = function (nums, target) {
  // create hashmap data structure to store values with associated index
  const hashmap = {};

  // loop through each val in nums
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;

    // check if needed value exist in hashmap
    // if needed value exist, return needed value index + current value index in arr
    if (neededValue in hashmap) {
      return [hashmap[neededValue], i];
    } else {
      // if not, store current value in hashmap with index
      hashmap[currentValue] = i;
    }
  }
};

// nums = [2, 7, 11, 15], target = 9 -> return [0, 1]
// nums = [3, 2, 4], target = 6 -> return [1, 2]
// nums = [2, 5, 6, 7, 1, 8], target = 15 -> return [3, 5]

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([2, 5, 6, 7, 1, 8], 15), [3, 5]);
