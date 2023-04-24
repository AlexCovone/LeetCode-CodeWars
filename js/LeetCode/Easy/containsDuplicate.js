// arr, each el type === nums, nums all integers, can include negative, arr.length >= 1

// return true if any value appears "at least twice" >= 2. False if if every value is distinct

// [1, 2, 3, 1] -> true. 1 occurs twice
// [1, 2, 3, 4] -> false
// [1, 1, 1, 3, 3, 4, 3, 2, 3, 2] -> true. 1, 3, 2 occur multiple times
// [-1, 1, -2, 2, 4, 5] -> false. each el is unqiue

// Time Compleixty - O(n)
// Space Complexity - O(n)
function containsDuplicate(nums){
    let hashmap = {}
  
    for(const int of nums){
      if(hashmap.hasOwnProperty(int)){
        return true
      }else{
        hashmap[int] = 1
      }
    }
    return false
}

// Alternative using Sets
function containsDuplicates(nums){
    const numsSet = new Set(nums)
    const isEqual = numsSet.size === nums.length

    return !isEqual
}


  
console.log(containsDuplicate([1, 2, 3, 1]), 'true')
console.log(containsDuplicate([1, 2, 3, 4]), 'false')
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 3, 2]), 'true')
console.log(containsDuplicate([-1, 1, -2, 2, 4, 5]), 'false')