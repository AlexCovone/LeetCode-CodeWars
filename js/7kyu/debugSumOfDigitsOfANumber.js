// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

function getSumOfDigits(integer){
    let sum = 0
    
    let digits = Math.floor(integer).toString().split('')
    digits = digits.map(element => Number(element))
  
    for(let i = 0; i < digits.length; i++){
      sum += digits[i]
    }
    return sum
  }

// Optimized
function getSumOfDigits(integer){    
    let digits = Math.floor(integer).toString().split('')
    
    return digits.map(element => Number(element)).reduce((acc, c) => acc + c, 0)
}