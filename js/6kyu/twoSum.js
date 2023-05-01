/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// arr of integers, whole numbers, not sorted, no special characters, never empty, will always have two nums to sum to target, can include negative nums, more than one solution potentially

// return indices of values that sum to target in arr 

// [1, 2, 3], target = 4 -> [0, 2] (1 + 3 = 4)
// [4, 2, 7, 1, 0, 8], target = 9 -> [1, 2] (2 + 7 = 9)
// [90, 22, 13, 52, 21], target = 65 -> [2, 3] (13 + 52 = 65)

function twoSum(numbers, target) {
    const hashmap = {}

    for(let i = 0; i < numbers.length; i++){
        const currentValue = numbers[i]
        const neededValue = target - currentValue

        if(hashmap.hasOwnProperty(neededValue)){
            return [i, hashmap[neededValue]]
        }

        if(!hashmap.hasOwnProperty(currentValue)){
            hashmap[currentValue] = i
        }
    }
}

console.log(twoSum([1, 2, 3], 4), [0, 2])
console.log(twoSum([4, 2, 7, 1, 0, 8], 9), [1, 2])
console.log(twoSum([90, 22, 13, 52, 21], 65), [2, 3])