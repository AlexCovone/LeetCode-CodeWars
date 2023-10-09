/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
*/

// nums:number[]
// result will need to have length 2x initial nums, where result[i] === nums[i]
// value in nums will be between 1 and 1000


var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// [1, 2, 1] => [1, 2, 1, 1, 2, 1] 
// [1, 3, 2, 1] => [1, 3, 2, 1, 1, 3, 2, 1]
