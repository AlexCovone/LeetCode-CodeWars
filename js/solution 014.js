/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array){
    if(array === null || array.length === 0){
        return 0
    }

    let sumArr = array.reduce((acc, c) => acc + c, 0)

    return sumArr / array.length
}