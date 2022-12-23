/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers){ 
    // Use spread operator for array
    let minIndex = numbers.indexOf(Math.min(...numbers))

    // Create a copy to avoid mutating original array. Splice on same line would mutate the original array
    const copy = numbers.slice()

    copy.splice(minIndex, 1)
    return copy
}