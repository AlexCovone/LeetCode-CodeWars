// Two arguments: 1 - string, 2 - string to find in first argument
// Both arguments will never be empty, will always have char, no special char, no numbers, one word each, only lowercase

// return index (type number) of first occurrence of arg 2 in arg 1. Must find full arg 2 in arg 1

// haystack = 'sadbutsad', needle = 'sad' -> index 0 (first occurrence)
// haystack = 'leetcode', needle = 'leeto' -> -1
// haystack = 'yankees', needle = 'kees' -> index 3

function needleInHaystack(haystack, needle){
    return haystack.indexOf(needle)
}
  
console.log(needleInHaystack('sadbutsad', 'sad'), '0')
console.log(needleInHaystack('leetcode', 'leeto'), '-1')
console.log(needleInHaystack('yankees', 'kees'), '3')