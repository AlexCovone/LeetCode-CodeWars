/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/

function remainder(a, b){
    let min = Math.min(a, b)
    let max = Math.max(a, b)

    if(min === 0){return NaN}
    return max % min
}