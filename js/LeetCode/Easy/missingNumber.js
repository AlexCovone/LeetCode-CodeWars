// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// ---------------------------------

// input arr nums:number[]
// return number that is missing from the array type:number

// nums has a range of [0, n]

// nums elements will always be positive integers
// all elements will be unique
// nums.length === n

var missingNumber = function (nums) {
    // declare n
    const n = nums.length

    // use Gauss' Trick - lastItem * (lastItem + 1) / 2
    const expectedSum = (n * (n + 1)) / 2

    const actualSum = nums.reduce((acc, c) => acc + c, 0)

    return expectedSum - actualSum
};

// nums = [3, 0, 1] => 2. n = 3, nums.length === 3 => nums range is 0 to 3. 2 is missing num
// nums = [0, 1] => 2. n = 2, nums range is 0 to 2, 2 is the missing number
// nums = [9,6,4,2,3,5,7,0,1] => 8. n = 9, nums range is 0 to 9

console.log(missingNumber([3, 0, 1]), 2)
console.log(missingNumber([0, 1]), 2)
console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8)
