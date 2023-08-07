// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// -----------------------------------------------------------------------------------------------

// nums is arr of integers - type: nums[]
// nums.length will always be >= 2, only integers, positive || negative

// return answer - type: nums[]

// no division operator, achieve in O(n) time complexity

// prefix && suffix approach

var productExceptSelf = function (nums) {
  const n = nums.length;

  // Initialize two arrays to store the product of elements to the left and right of each index.
  // ex: n = 3 -> [1, 1, 1]
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate the product of elements to the left of each index.
  let productSoFar = 1;
  for (let i = 0; i < n; i++) {
    leftProducts[i] = productSoFar;
    productSoFar *= nums[i];
  }

  // Calculate the product of elements to the right of each index.
  // start loop at last element, go down until zero index
  productSoFar = 1;
  for (let i = n - 1; i >= 0; i--) {
    rightProducts[i] = productSoFar;
    productSoFar *= nums[i];
  }

  // Calculate the final answer array by multiplying the corresponding elements from left and right arrays.
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
};

// nums = [1, 2, 3, 4] -> return [24, 12, 8, 6]
// nums = [-1, 1, 0, -3, 3] -> return [0, 0, 9, 0, 0]
// nums = [5, 2, 7, 1] -> return [14, 35, 10, 70]

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(productExceptSelf([5, 2, 7, 1]), [14, 35, 10, 70]);
