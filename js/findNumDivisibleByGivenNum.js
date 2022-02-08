// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    return numbers.map(element => element % divisor === 0)
}

// Want to use filter method over map.

// Map method is more similar to forEach, whereas the filter method will create a new array with the elements that pass the implemented test by said function.