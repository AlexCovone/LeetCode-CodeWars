// two arugments: 1 - array of integers (nums), 2 - integer (val)
// will always be whole numbers, never negative (>= 0), nums never empty, not sorted

// return how many elements were removed && remaining array (underscores replace val removed)

// [3, 2, 2, 3], val = 3 -> 2, [2, 2, _, _]
// [0, 1, 2, 2, 3, 0, 4, 2], val = 2 -> 5, [0, 1, 4, 0, 3, _, _]

function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

console.log(removeElement([3, 2, 2, 3], 3), 2)
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5)
