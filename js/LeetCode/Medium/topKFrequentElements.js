// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// -------------------------------------------------------------------------------

// nums is arr of integers: type number[]
// k: type number -> range between 1 and nums.length

// return array of k most frequent elements (any order)

// time complexity must be better than O(n log n)

var topKFrequent = function (nums, k) {
  // create hashmap -> key = num, val = quantity of occurences
  const hashmap = {};

  // loop through nums.length - if !val, store val = 1, else val++
  for (const val of nums) {
    hashmap[val] = (hashmap[val] || 0) + 1;
  }

  // Sort values in descending order based on frequencies -> string[]
  const sortedValues = Object.keys(hashmap).sort((a, b) => hashmap[b] - hashmap[a]);

  // return k most frequent vals - arr is 0 index, slice 2nd arg is exclusive
  // object keys are strings, run map method to return type: number[]
  const kMostFrequentValue = sortedValues.slice(0, k).map((val) => Number(val));

  return kMostFrequentValue;
};

// nums = [1, 1, 1, 2, 2, 3], k = 2 -> return [1, 2]
// nums = [1], k = 1 -> return [1]
// nums = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5], k = 3 -> return [2, 3, 4]

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);
console.log(topKFrequent([2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5], 3), [2, 3, 4]);
