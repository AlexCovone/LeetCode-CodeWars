// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// -----------------------------------------------------------------------

// nums[]:number -> num arr
// 1 <= nums.length <= 10^5

// return result[]:number -> num arr

// result[i] => leftSum[i] - rightSum[i]
// leftSum[i] => sum of el to left of index
// rightSum[i] => sum of el to right of index
// note: leftSum[i] - rightSum[i] always positive

var leftRightDifference = function (nums) {
  // initialize result[]
  const result = [];

  // track sum for left and right indices
  let left = 0;
  let right = 0;

  // iterate through arr - sum all values and assign to right
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i]; // subtract current iterative from right
    result.push(Math.abs(left - right)); // append absolute difference between left and right var
    left += nums[i]; // reassign left to be left + current iterative
  }

  return result;
};

// i = 0
// right -= nums[0] => 25 - 10 = 15
// result.push(Math.abs(0 - 15)) => 15
// left += nums[0] => 0 + 10 = 10

// i = 1
// right -= nums[1] => 15 - 4 = 11
// result.push(Math.abs(10 - 11)) => 1
// left += nums[1] => 10 + 4 = 14

// i = 2
// right -= nums[2] => 11 - 8 = 3
// result.push(Math.abs(3 - 14)) => 11
// left += nums[2] => 14 + 8 = 22

// i = 3
// right -= nums[3] => 3 - 3 = 0
// result.push(Math.abs(22 - 0)) => 22
// left += nums[3] => 22 + 3 = 25

// Brute Force
// Time Complexity (O^2)
var leftRightDifference = function (nums) {
  if (nums.length <= 1) {
    return [0];
  }

  // initialize result[]
  const result = [];

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // sum left
    const leftSum = nums.slice(0, i).reduce((acc, c) => acc + c, 0);

    // sum right
    const rightSum = nums.slice(i + 1).reduce((acc, c) => acc + c, 0);

    // find difference between left and right - absolute value
    const totalValue = Math.abs(leftSum - rightSum);

    // append value to result
    result.push(totalValue);
  }

  return result;
};

// nums = [10, 4, 8, 3] => return [15, 1, 11, 22]
// nums = [1] => return [0]

console.log(leftRightDifference([10, 4, 8, 3]), [15, 1, 11, 22]);
console.log(leftRightDifference([1]), [0]);
