// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    let positiveNum = Math.abs(number)
  
    let numberArr = positiveNum.toString().split('').map(element => Number(element))
  
    return numberArr.reduce((acc, c) => acc + c, 0)
  }
