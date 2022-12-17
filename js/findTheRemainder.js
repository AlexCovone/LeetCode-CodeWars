/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/

function remainder(n, m){
    let min = Math.min(n, m)
    let max = Math.max(n, m)

    if(min === 0){return NaN}
    return max % min
}