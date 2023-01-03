/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/

function remainder(A, B){
    let min = Math.min(A, B)
    let max = Math.max(A, B)

    if(min === 0){return NaN}
    return max % min
}