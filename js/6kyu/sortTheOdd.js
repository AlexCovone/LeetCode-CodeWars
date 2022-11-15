// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const oddNums = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)
  return array.map(num => num % 2 === 0 ? num : oddNums.shift())
}

function sortArray(array) {
    const oddNums = array.filter(num => num % 2 !== 0 ).sort((a, b) => b - a)

    //Change shift to pop for constant time - shift occurs in linear time
    return array.map(num => num % 2 === 0 ? num : oddNums.pop())
}