// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

// Function Expression
const sumOfArr = arr => arr.map(element => Number(element)).reduce((acc, c) => acc + c, 0);

// Function Declaration
function sumOfArr(arr){
    arr = arr.map(element => Number(element));
    return arr.reduce((acc, c) => acc + c, 0);
}

// Optimized
function sumMix(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0);
}