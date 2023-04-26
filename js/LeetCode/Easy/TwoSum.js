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

function twoSum(nums, target) {
  // create hashmap
  // store property as num and index
  const hashmap = {};

  // loop through nums arr
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;

    if (hashmap.hasOwnProperty(neededValue)) {
      return [i, hashmap[neededValue]];
    }

    // checks if value exist in hashmap
    if (!hashmap[currentValue]) {
      hashmap[currentValue] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
console.log(twoSum([5, 2, 1, 8], 10), [1, 3]);
