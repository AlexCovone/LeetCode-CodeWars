// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b)

    let firstNum = Number(sortedArr[0])
    let lastNum = Number(sortedArr.slice(-1))

    result.push(firstNum)
    result.push(lastNum)

    return result
}


function minMax(arr){
    let sortedArr = arr.sort((a, b) => a - b)

    return [sortedArr[0], sortedArr[sortedArr.length-1]]
}