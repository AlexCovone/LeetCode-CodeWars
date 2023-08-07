// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// -----------------------------------------------------------------------------------------------

// nums is arr of integers - type: nums[]
// nums.length will always be >= 2, only integers, positive || negative

// return answer - type: nums[]

// no division operator, achieve in O(n) time complexity

// Space Complexity O(1)

var productExceptSelf = function (nums) {
  // Initialize an array to store the final result
  const result = [];

  // Initialize variables to keep track of prefix and postfix products
  let prefix = 1; // Prefix product of elements to the left of the current index
  let postfix = 1; // Postfix product of elements to the right of the current index

  // Calculate prefix products
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix; // Store the prefix product in the result array
    prefix *= nums[i]; // Update prefix product for the next element
  }

  // Calculate postfix products and multiply with prefix products
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1]; // Update postfix product for the next element
    result[i] *= postfix; // Multiply prefix and postfix products to get final result
  }

  // Return the array with the product of elements except self
  return result;
};

// nums = [1, 2, 3, 4] -> return [24, 12, 8, 6]
// nums = [-1, 1, 0, -3, 3] -> return [0, 0, 9, 0, 0]
// nums = [5, 2, 7, 1] -> return [14, 35, 10, 70]

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(productExceptSelf([5, 2, 7, 1]), [14, 35, 10, 70]);
