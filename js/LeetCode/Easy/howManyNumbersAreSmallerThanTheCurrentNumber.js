// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// ---------------------------------------------------------------------------------

// input nums:number[], val always going to be real, positive numbers
// nums.length will always be greater than or equal to 2 and can run up to 100

// return arr:number[], val always going to be real, positive numbers
// arr[i] = count of smaller numbers than nums[i] - including duplicates
// should have same length as input nums

// Time Complexity - O(n)
var smallerNumbersThanCurrent = function (nums) {
  // Create an empty Map
  const hashmap = new Map();

  // Create a sorted copy of the nums array
  let sorted = nums.slice().sort((a, b) => a - b);

  // Iterate through the sorted array
  sorted.forEach((number, idx) => {
    // Check if the 'hashmap' already has an entry for 'number'
    // If not, set an entry in the 'hashmap' where the key is 'number' and the value is 'idx'
    hashmap.has(number) ? null : hashmap.set(number, idx);
  });

  // Map each element 'x' in 'nums' to its corresponding value in the 'hashmap'
  return nums.map((x) => hashmap.get(x));
};

// Time Complexity O(n^2)
var smallerNumbersThanCurrent = function (nums) {
  // create copy of nums and sort in asc order
  const sorted = [...nums].sort((a, b) => a - b);

  // return new arr where nums[i] = first occurence of sorted[i]
  return nums.map((num) => sorted.indexOf(num));
};

// [8, 1, 2, 2, 3] => [4, 0, 1, 1, 3] - 4 numbers smaller than 8, 0 numbers smaller than 0, 1 number smaller than 2, 1 number smaller than 2, 3 numbers smaller than 3
// [6, 5, 4, 8] => [2, 1, 0, 3]
// [7, 7, 7, 7] => [0, 0, 0, 0]

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]);
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]);
