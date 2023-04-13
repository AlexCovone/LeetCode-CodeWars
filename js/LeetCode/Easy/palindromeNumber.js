// Given an integer x, return true if x is a palindrome, and false otherwise.

// x is num, can be negative, whole number

// return true || false -> neg num always false

// x = 121 -> true, 121 left to right, 121 right to left
// x = -121 -> false, -121 left to right, 121- right to left
// x = 10 -> false, 10 left to right, 01 right to left


function isPalindrome(x){
    // convert num to str, reverse, join
    let reverseNum = Number(x.toString().split('').reverse().join(''))
    
    // check if Number(num) === x
    return reverseNum === x
}
  
  console.log(isPalindrome(121), true)
  console.log(isPalindrome(-121), false)
  console.log(isPalindrome(10), false)